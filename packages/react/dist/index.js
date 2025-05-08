import gu, { forwardRef as $f, useRef as tl, useImperativeHandle as Cf, useEffect as _f } from "react";
var di = { exports: {} }, bo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;
function kf() {
  if (nl) return bo;
  nl = 1;
  var e = gu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, v = null, g = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps) for (u in l = s.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: v, ref: g, props: d, _owner: o.current };
  }
  return bo.Fragment = n, bo.jsx = a, bo.jsxs = a, bo;
}
var xo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function Sf() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = gu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, x = "@@iterator";
    function b(L) {
      if (L === null || typeof L != "object")
        return null;
      var ne = p && L[p] || L[x];
      return typeof ne == "function" ? ne : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(L) {
      {
        for (var ne = arguments.length, we = new Array(ne > 1 ? ne - 1 : 0), He = 1; He < ne; He++)
          we[He - 1] = arguments[He];
        C("error", L, we);
      }
    }
    function C(L, ne, we) {
      {
        var He = $.ReactDebugCurrentFrame, Z = He.getStackAddendum();
        Z !== "" && (ne += "%s", we = we.concat([Z]));
        var ot = we.map(function(Ye) {
          return String(Ye);
        });
        ot.unshift("Warning: " + ne), Function.prototype.apply.call(console[L], console, ot);
      }
    }
    var m = !1, k = !1, P = !1, E = !1, H = !1, O;
    O = Symbol.for("react.module.reference");
    function D(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || H || L === o || L === c || L === u || E || L === g || m || k || P || typeof L == "object" && L !== null && (L.$$typeof === v || L.$$typeof === d || L.$$typeof === a || L.$$typeof === s || L.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === O || L.getModuleId !== void 0));
    }
    function q(L, ne, we) {
      var He = L.displayName;
      if (He)
        return He;
      var Z = ne.displayName || ne.name || "";
      return Z !== "" ? we + "(" + Z + ")" : we;
    }
    function z(L) {
      return L.displayName || "Context";
    }
    function R(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var ne = L;
            return z(ne) + ".Consumer";
          case a:
            var we = L;
            return z(we._context) + ".Provider";
          case l:
            return q(L, L.render, "ForwardRef");
          case d:
            var He = L.displayName || null;
            return He !== null ? He : R(L.type) || "Memo";
          case v: {
            var Z = L, ot = Z._payload, Ye = Z._init;
            try {
              return R(Ye(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, _ = 0, M, N, T, V, I, X, W;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Q() {
      {
        if (_ === 0) {
          M = console.log, N = console.info, T = console.warn, V = console.error, I = console.group, X = console.groupCollapsed, W = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        _++;
      }
    }
    function K() {
      {
        if (_--, _ === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, L, {
              value: M
            }),
            info: S({}, L, {
              value: N
            }),
            warn: S({}, L, {
              value: T
            }),
            error: S({}, L, {
              value: V
            }),
            group: S({}, L, {
              value: I
            }),
            groupCollapsed: S({}, L, {
              value: X
            }),
            groupEnd: S({}, L, {
              value: W
            })
          });
        }
        _ < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = $.ReactCurrentDispatcher, ue;
    function ye(L, ne, we) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (Z) {
            var He = Z.stack.trim().match(/\n( *(at )?)/);
            ue = He && He[1] || "";
          }
        return `
` + ue + L;
      }
    }
    var se = !1, _e;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new xe();
    }
    function Oe(L, ne) {
      if (!L || se)
        return "";
      {
        var we = _e.get(L);
        if (we !== void 0)
          return we;
      }
      var He;
      se = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ot;
      ot = ce.current, ce.current = null, Q();
      try {
        if (ne) {
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
            } catch (Et) {
              He = Et;
            }
            Reflect.construct(L, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (Et) {
              He = Et;
            }
            L.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            He = Et;
          }
          L();
        }
      } catch (Et) {
        if (Et && He && typeof Et.stack == "string") {
          for (var Ie = Et.stack.split(`
`), Ot = He.stack.split(`
`), gt = Ie.length - 1, pt = Ot.length - 1; gt >= 1 && pt >= 0 && Ie[gt] !== Ot[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (Ie[gt] !== Ot[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || Ie[gt] !== Ot[pt]) {
                    var Yt = `
` + Ie[gt].replace(" at new ", " at ");
                    return L.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", L.displayName)), typeof L == "function" && _e.set(L, Yt), Yt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        se = !1, ce.current = ot, K(), Error.prepareStackTrace = Z;
      }
      var tr = L ? L.displayName || L.name : "", nr = tr ? ye(tr) : "";
      return typeof L == "function" && _e.set(L, nr), nr;
    }
    function le(L, ne, we) {
      return Oe(L, !1);
    }
    function J(L) {
      var ne = L.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Me(L, ne, we) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Oe(L, J(L));
      if (typeof L == "string")
        return ye(L);
      switch (L) {
        case c:
          return ye("Suspense");
        case u:
          return ye("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case l:
            return le(L.render);
          case d:
            return Me(L.type, ne, we);
          case v: {
            var He = L, Z = He._payload, ot = He._init;
            try {
              return Me(ot(Z), ne, we);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, Ae = {}, Ke = $.ReactDebugCurrentFrame;
    function qe(L) {
      if (L) {
        var ne = L._owner, we = Me(L.type, L._source, ne ? ne.type : null);
        Ke.setExtraStackFrame(we);
      } else
        Ke.setExtraStackFrame(null);
    }
    function ge(L, ne, we, He, Z) {
      {
        var ot = Function.call.bind(F);
        for (var Ye in L)
          if (ot(L, Ye)) {
            var Ie = void 0;
            try {
              if (typeof L[Ye] != "function") {
                var Ot = Error((He || "React class") + ": " + we + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              Ie = L[Ye](ne, Ye, He, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              Ie = gt;
            }
            Ie && !(Ie instanceof Error) && (qe(Z), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", we, Ye, typeof Ie), qe(null)), Ie instanceof Error && !(Ie.message in Ae) && (Ae[Ie.message] = !0, qe(Z), h("Failed %s type: %s", we, Ie.message), qe(null));
          }
      }
    }
    var he = Array.isArray;
    function fe(L) {
      return he(L);
    }
    function Ve(L) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, we = ne && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return we;
      }
    }
    function ct(L) {
      try {
        return vt(L), !1;
      } catch {
        return !0;
      }
    }
    function vt(L) {
      return "" + L;
    }
    function te(L) {
      if (ct(L))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(L)), vt(L);
    }
    var Fe = $.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Xt;
    function ln(L) {
      if (F.call(L, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function De(L) {
      if (F.call(L, "key")) {
        var ne = Object.getOwnPropertyDescriptor(L, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function st(L, ne) {
      typeof L.ref == "string" && Fe.current;
    }
    function Be(L, ne) {
      {
        var we = function() {
          jt || (jt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function Ze(L, ne) {
      {
        var we = function() {
          Xt || (Xt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var lt = function(L, ne, we, He, Z, ot, Ye) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: L,
        key: ne,
        ref: we,
        props: Ye,
        // Record the component responsible for creating this element.
        _owner: ot
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function Qt(L, ne, we, He, Z) {
      {
        var ot, Ye = {}, Ie = null, Ot = null;
        we !== void 0 && (te(we), Ie = "" + we), De(ne) && (te(ne.key), Ie = "" + ne.key), ln(ne) && (Ot = ne.ref, st(ne, Z));
        for (ot in ne)
          F.call(ne, ot) && !de.hasOwnProperty(ot) && (Ye[ot] = ne[ot]);
        if (L && L.defaultProps) {
          var gt = L.defaultProps;
          for (ot in gt)
            Ye[ot] === void 0 && (Ye[ot] = gt[ot]);
        }
        if (Ie || Ot) {
          var pt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ie && Be(Ye, pt), Ot && Ze(Ye, pt);
        }
        return lt(L, Ie, Ot, Z, He, Fe.current, Ye);
      }
    }
    var Vt = $.ReactCurrentOwner, Qn = $.ReactDebugCurrentFrame;
    function yt(L) {
      if (L) {
        var ne = L._owner, we = Me(L.type, L._source, ne ? ne.type : null);
        Qn.setExtraStackFrame(we);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Pn(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function rt() {
      {
        if (Vt.current) {
          var L = R(Vt.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function yo(L) {
      return "";
    }
    var er = {};
    function Dt(L) {
      {
        var ne = rt();
        if (!ne) {
          var we = typeof L == "string" ? L : L.displayName || L.name;
          we && (ne = `

Check the top-level render call using <` + we + ">.");
        }
        return ne;
      }
    }
    function wr(L, ne) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var we = Dt(ne);
        if (er[we])
          return;
        er[we] = !0;
        var He = "";
        L && L._owner && L._owner !== Vt.current && (He = " It was passed a child from " + R(L._owner.type) + "."), yt(L), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, He), yt(null);
      }
    }
    function br(L, ne) {
      {
        if (typeof L != "object")
          return;
        if (fe(L))
          for (var we = 0; we < L.length; we++) {
            var He = L[we];
            Pn(He) && wr(He, ne);
          }
        else if (Pn(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Z = b(L);
          if (typeof Z == "function" && Z !== L.entries)
            for (var ot = Z.call(L), Ye; !(Ye = ot.next()).done; )
              Pn(Ye.value) && wr(Ye.value, ne);
        }
      }
    }
    function Dr(L) {
      {
        var ne = L.type;
        if (ne == null || typeof ne == "string")
          return;
        var we;
        if (typeof ne == "function")
          we = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          we = ne.propTypes;
        else
          return;
        if (we) {
          var He = R(ne);
          ge(we, L.props, "prop", He, L);
        } else if (ne.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Z = R(ne);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wo(L) {
      {
        for (var ne = Object.keys(L.props), we = 0; we < ne.length; we++) {
          var He = ne[we];
          if (He !== "children" && He !== "key") {
            yt(L), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), yt(null);
            break;
          }
        }
        L.ref !== null && (yt(L), h("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var si = {};
    function li(L, ne, we, He, Z, ot) {
      {
        var Ye = D(L);
        if (!Ye) {
          var Ie = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = yo();
          Ot ? Ie += Ot : Ie += rt();
          var gt;
          L === null ? gt = "null" : fe(L) ? gt = "array" : L !== void 0 && L.$$typeof === t ? (gt = "<" + (R(L.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof L, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, Ie);
        }
        var pt = Qt(L, ne, we, Z, ot);
        if (pt == null)
          return pt;
        if (Ye) {
          var Yt = ne.children;
          if (Yt !== void 0)
            if (He)
              if (fe(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  br(Yt[tr], L);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Yt, L);
        }
        if (F.call(ne, "key")) {
          var nr = R(L), Et = Object.keys(ne).filter(function(ci) {
            return ci !== "key";
          }), Ar = Et.length > 0 ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!si[nr + Ar]) {
            var ui = Et.length > 0 ? "{" + Et.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, nr, ui, nr), si[nr + Ar] = !0;
          }
        }
        return L === r ? wo(pt) : Dr(pt), pt;
      }
    }
    function ka(L, ne, we) {
      return li(L, ne, we, !0);
    }
    function Sa(L, ne, we) {
      return li(L, ne, we, !1);
    }
    var Ea = Sa, Ma = ka;
    xo.Fragment = r, xo.jsx = Ea, xo.jsxs = Ma;
  }()), xo;
}
var ol;
function Ef() {
  return ol || (ol = 1, process.env.NODE_ENV === "production" ? di.exports = kf() : di.exports = Sf()), di.exports;
}
var Mf = Ef(), Pf = Object.defineProperty, hu = (e) => {
  throw TypeError(e);
}, Tf = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n), ps = (e, t, n) => t.has(e) || hu("Cannot " + n), wt = (e, t, n) => (ps(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zr = (e, t, n) => t.has(e) ? hu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ei = (e, t, n, r) => (ps(e, t, "write to private field"), t.set(e, n), n), Vf = (e, t, n) => (ps(e, t, "access private method"), n);
const Of = "5";
var il;
typeof window < "u" && ((il = window.__svelte ?? (window.__svelte = {})).v ?? (il.v = /* @__PURE__ */ new Set())).add(Of);
let uo = !1, Nf = !1;
function Hf() {
  uo = !0;
}
Hf();
const ms = 1, ys = 2, pu = 4, Lf = 8, zf = 16, Df = 1, Af = 2, mu = 4, Rf = 8, If = 16, yu = 1, qf = 2, ws = "[", bs = "[!", xs = "]", jr = {}, Wt = Symbol(), Zf = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/2000/svg", jf = !1;
function na(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Ko = Array.isArray, Xf = Array.prototype.indexOf, $s = Array.from, Mi = Object.keys, Oo = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, Yf = Object.prototype, Wf = Array.prototype, Cs = Object.getPrototypeOf, al = Object.isExtensible;
function $o(e) {
  return typeof e == "function";
}
const kt = () => {
};
function Kf(e) {
  return e();
}
function No(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const $n = 2, bu = 4, ra = 8, _s = 16, Gn = 32, Hr = 64, Pi = 128, on = 256, Ti = 512, qt = 1024, Nn = 2048, mr = 4096, Yn = 8192, oa = 16384, Ff = 32768, co = 65536, Gf = 1 << 17, Uf = 1 << 19, xu = 1 << 20, ja = 1 << 21, lr = Symbol("$state"), ks = Symbol("legacy props"), Jf = Symbol("");
function Qf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function e1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function t1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function n1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function r1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function o1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function i1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function a1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function s1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ia(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ze = !1;
function nn(e) {
  ze = e;
}
let Xe;
function It(e) {
  if (e === null)
    throw ia(), jr;
  return Xe = e;
}
function Hn() {
  return It(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(Xe)
  );
}
function j(e) {
  if (ze) {
    if (/* @__PURE__ */ Rn(Xe) !== null)
      throw ia(), jr;
    Xe = e;
  }
}
function Re(e = 1) {
  if (ze) {
    for (var t = e, n = Xe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Rn(n);
    Xe = n;
  }
}
function Xa() {
  for (var e = 0, t = Xe; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === xs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ws || n === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Rn(t)
    );
    t.remove(), t = r;
  }
}
function wn(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = Cs(e);
  if (t !== Yf && t !== Wf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ko(e), o = /* @__PURE__ */ Rt(0), i = ut, a = (s) => {
    var l = ut;
    Ln(i);
    var c = s();
    return Ln(l), c;
  };
  return r && n.set("length", /* @__PURE__ */ Rt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && i1();
        var u = n.get(l);
        return u === void 0 ? (u = a(() => /* @__PURE__ */ Rt(c.value)), n.set(l, u)) : ee(
          u,
          a(() => wn(c.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var c = n.get(l);
        if (c === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ Rt(Wt))
          ), Pa(o));
        else {
          if (r && typeof l == "string") {
            var u = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < u.v && ee(u, d);
          }
          ee(c, Wt), Pa(o);
        }
        return !0;
      },
      get(s, l, c) {
        var u;
        if (l === lr)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (u = Xn(s, l)) != null && u.writable) && (d = a(() => /* @__PURE__ */ Rt(wn(v ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Wt ? void 0 : g;
        }
        return Reflect.get(s, l, c);
      },
      getOwnPropertyDescriptor(s, l) {
        var c = Reflect.getOwnPropertyDescriptor(s, l);
        if (c && "value" in c) {
          var u = n.get(l);
          u && (c.value = f(u));
        } else if (c === void 0) {
          var d = n.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(s, l) {
        var c;
        if (l === lr)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Wt || Reflect.has(s, l);
        if (u !== void 0 || Qe !== null && (!d || (c = Xn(s, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => /* @__PURE__ */ Rt(d ? wn(s[l]) : Wt)), n.set(l, u));
          var v = f(u);
          if (v === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, c, u) {
        var d, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var x = n.get(p + "");
            x !== void 0 ? ee(x, Wt) : p in s && (x = a(() => /* @__PURE__ */ Rt(Wt)), n.set(p + "", x));
          }
        v === void 0 ? (!g || (d = Xn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ Rt(void 0)), ee(
          v,
          a(() => wn(c))
        ), n.set(l, v)) : (g = v.v !== Wt, ee(
          v,
          a(() => wn(c))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(u, c), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= $.v && ee($, h + 1);
          }
          Pa(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Wt;
        });
        for (var [c, u] of n)
          u.v !== Wt && !(c in s) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        a1();
      }
    }
  );
}
function Pa(e, t = 1) {
  ee(e, e.v + t);
}
var Kt, $u, Cu, _u;
function Ya() {
  if (Kt === void 0) {
    Kt = window, $u = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Cu = Xn(t, "firstChild").get, _u = Xn(t, "nextSibling").get, al(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), al(n) && (n.__t = void 0);
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return Cu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return _u.call(e);
}
function Y(e, t) {
  if (!ze)
    return /* @__PURE__ */ _t(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ _t(Xe)
  );
  if (n === null)
    n = Xe.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), It(r), r;
  }
  return It(n), n;
}
function Ce(e, t) {
  if (!ze) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _t(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Rn(n) : n;
  }
  return Xe;
}
function B(e, t = 1, n = !1) {
  let r = ze ? Xe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(r);
  if (!ze)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Kn();
    return r === null ? o == null || o.after(a) : r.before(a), It(a), a;
  }
  return It(r), /** @type {TemplateNode} */
  r;
}
function Ss(e) {
  e.textContent = "";
}
function ku(e) {
  return e === this.v;
}
function Es(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ms(e) {
  return !Es(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  var t = $n | Nn, n = ut !== null && (ut.f & $n) !== 0 ? (
    /** @type {Derived} */
    ut
  ) : null;
  return Qe === null || n !== null && (n.f & on) !== 0 ? t |= on : Qe.f |= xu, {
    ctx: Je,
    deps: null,
    effects: null,
    equals: ku,
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
function Ne(e) {
  const t = /* @__PURE__ */ Gr(e);
  return Au(t), t;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  const t = /* @__PURE__ */ Gr(e);
  return t.equals = Ms, t;
}
function Su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Cn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function l1(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & $n) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Eu(e) {
  var t, n = Qe;
  vr(l1(e));
  try {
    Su(e), t = Zu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Mu(e) {
  var t = Eu(e), n = (ar || (e.f & on) !== 0) && e.deps !== null ? mr : qt;
  vn(e, n), e.equals(t) || (e.v = t, e.wv = Iu());
}
function Pu(e) {
  Qe === null && ut === null && t1(), ut !== null && (ut.f & on) !== 0 && Qe === null && e1(), Go && Qf();
}
function u1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lr(e, t, n, r = !0) {
  var o = Qe, i = {
    ctx: Je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Nn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      sa(i), i.f |= Ff;
    } catch (l) {
      throw Cn(i), l;
    }
  else t !== null && la(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xu | Pi)) === 0;
  if (!a && r && (o !== null && u1(i, o), ut !== null && (ut.f & $n) !== 0)) {
    var s = (
      /** @type {Derived} */
      ut
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ps(e) {
  const t = Lr(ra, null, !1);
  return vn(t, qt), t.teardown = e, t;
}
function xn(e) {
  Pu();
  var t = Qe !== null && (Qe.f & Gn) !== 0 && Je !== null && !Je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Qe,
      reaction: ut
    });
  } else {
    var r = tn(e);
    return r;
  }
}
function c1(e) {
  return Pu(), fo(e);
}
function d1(e) {
  const t = Lr(Hr, e, !0);
  return () => {
    Cn(t);
  };
}
function f1(e) {
  const t = Lr(Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(t, () => {
      Cn(t), r(void 0);
    }) : (Cn(t), r(void 0));
  });
}
function tn(e) {
  return Lr(bu, e, !1);
}
function be(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, ee(n.l.r2, !0), zn(t));
  });
}
function Tt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  fo(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & qt) !== 0 && vn(n, mr), go(n) && sa(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return Lr(ra, e, !0);
}
function Te(e, t = [], n = Gr) {
  const r = t.map(n);
  return vo(() => e(...r.map(f)));
}
function vo(e, t = 0) {
  return Lr(ra | _s | t, e, !0);
}
function fr(e, t = !0) {
  return Lr(ra | Gn, e, !0, t);
}
function Tu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Go, r = ut;
    ll(!0), Ln(null);
    try {
      t.call(null);
    } finally {
      ll(n), Ln(r);
    }
  }
}
function Vu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & Hr) !== 0 ? n.parent = null : Cn(n, t), n = r;
  }
}
function v1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Gn) === 0 && Cn(t), t = n;
  }
}
function Cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Uf) !== 0) && e.nodes_start !== null && (Ou(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Vu(e, t && !n), Hi(e, 0), vn(e, oa);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Tu(e);
  var o = e.parent;
  o !== null && o.first !== null && Nu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ou(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Rn(e)
    );
    e.remove(), e = n;
  }
}
function Nu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ur(e, t) {
  var n = [];
  Ts(e, n, !0), Hu(n, () => {
    Cn(e), t && t();
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
function Ts(e, t, n) {
  if ((e.f & Yn) === 0) {
    if (e.f ^= Yn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & co) !== 0 || (r.f & Gn) !== 0;
      Ts(r, t, i ? n : !1), r = o;
    }
  }
}
function Ho(e) {
  Lu(e, !0);
}
function Lu(e, t) {
  if ((e.f & Yn) !== 0) {
    e.f ^= Yn, (e.f & qt) === 0 && (e.f ^= qt), go(e) && (vn(e, Nn), la(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Gn) !== 0;
      Lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const g1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Lo = [], zo = [];
function zu() {
  var e = Lo;
  Lo = [], No(e);
}
function Du() {
  var e = zo;
  zo = [], No(e);
}
function Fo(e) {
  Lo.length === 0 && queueMicrotask(zu), Lo.push(e);
}
function h1(e) {
  zo.length === 0 && g1(Du), zo.push(e);
}
function sl() {
  Lo.length > 0 && zu(), zo.length > 0 && Du();
}
let wi = !1, Vi = !1, Oi = null, _r = !1, Go = !1;
function ll(e) {
  Go = e;
}
let To = [], ut = null, Tn = !1;
function Ln(e) {
  ut = e;
}
let Qe = null;
function vr(e) {
  Qe = e;
}
let fn = null;
function Au(e) {
  ut !== null && ut.f & ja && (fn === null ? fn = [e] : fn.push(e));
}
let At = null, en = 0, cn = null;
function p1(e) {
  cn = e;
}
let Ru = 1, Ni = 0, ar = !1;
function Iu() {
  return ++Ru;
}
function go(e) {
  var t, n = e.f;
  if ((n & Nn) !== 0)
    return !0;
  if ((n & mr) !== 0) {
    var r = e.deps, o = (n & on) !== 0;
    if (r !== null) {
      var i, a, s = (n & Ti) !== 0, l = o && Qe !== null && !ar, c = r.length;
      if (s || l) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (i = 0; i < c; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        s && (u.f ^= Ti), l && d !== null && (d.f & on) === 0 && (u.f ^= on);
      }
      for (i = 0; i < c; i++)
        if (a = r[i], go(
          /** @type {Derived} */
          a
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || Qe !== null && !ar) && vn(e, qt);
  }
  return !1;
}
function m1(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Pi) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Pi;
      }
    n = n.parent;
  }
  throw wi = !1, e;
}
function ul(e) {
  return (e.f & oa) === 0 && (e.parent === null || (e.parent.f & Pi) === 0);
}
function aa(e, t, n, r) {
  if (wi) {
    if (n === null && (wi = !1), ul(t))
      throw e;
    return;
  }
  if (n !== null && (wi = !0), m1(e, t), ul(t))
    throw e;
}
function qu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      fn != null && fn.includes(e) || ((i.f & $n) !== 0 ? qu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? vn(i, Nn) : (i.f & qt) !== 0 && vn(i, mr), la(
        /** @type {Effect} */
        i
      )));
    }
}
function Zu(e) {
  var t, n = At, r = en, o = cn, i = ut, a = ar, s = fn, l = Je, c = Tn, u = e.f;
  At = /** @type {null | Value[]} */
  null, en = 0, cn = null, ar = (u & on) !== 0 && (Tn || !_r || ut === null), ut = (u & (Gn | Hr)) === 0 ? e : null, fn = null, dl(e.ctx), Tn = !1, Ni++, e.f |= ja;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (At !== null) {
      var g;
      if (Hi(e, en), v !== null && en > 0)
        for (v.length = en + At.length, g = 0; g < At.length; g++)
          v[en + g] = At[g];
      else
        e.deps = v = At;
      if (!ar)
        for (g = en; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && en < v.length && (Hi(e, en), v.length = en);
    if (ua() && cn !== null && !Tn && v !== null && (e.f & ($n | mr | Nn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      cn.length; g++)
        qu(
          cn[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ni++, cn !== null && (o === null ? o = cn : o.push(.../** @type {Source[]} */
    cn))), d;
  } finally {
    At = n, en = r, cn = o, ut = i, ar = a, fn = s, dl(l), Tn = c, e.f ^= ja;
  }
}
function y1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & $n) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (At === null || !At.includes(t)) && (vn(t, mr), (t.f & (on | Ti)) === 0 && (t.f ^= Ti), Su(
    /** @type {Derived} **/
    t
  ), Hi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Hi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      y1(e, n[r]);
}
function sa(e) {
  var t = e.f;
  if ((t & oa) === 0) {
    vn(e, qt);
    var n = Qe, r = Je, o = _r;
    Qe = e, _r = !0;
    try {
      (t & _s) !== 0 ? v1(e) : Vu(e), Tu(e);
      var i = Zu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ru;
      var a = e.deps, s;
      jf && Nf && e.f & Nn;
    } catch (l) {
      aa(l, e, n, r || e.ctx);
    } finally {
      _r = o, Qe = n;
    }
  }
}
function w1() {
  try {
    n1();
  } catch (e) {
    if (Oi !== null)
      aa(e, Oi, null);
    else
      throw e;
  }
}
function Bu() {
  var e = _r;
  try {
    var t = 0;
    for (_r = !0; To.length > 0; ) {
      t++ > 1e3 && w1();
      var n = To, r = n.length;
      To = [];
      for (var o = 0; o < r; o++) {
        var i = x1(n[o]);
        b1(i);
      }
      Do.clear();
    }
  } finally {
    Vi = !1, _r = e, Oi = null;
  }
}
function b1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (oa | Yn)) === 0)
        try {
          go(r) && (sa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Nu(r) : r.fn = null));
        } catch (o) {
          aa(o, r, null, r.ctx);
        }
    }
}
function la(e) {
  Vi || (Vi = !0, queueMicrotask(Bu));
  for (var t = Oi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Hr | Gn)) !== 0) {
      if ((n & qt) === 0) return;
      t.f ^= qt;
    }
  }
  To.push(t);
}
function x1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Gn | Hr)) !== 0, i = o && (r & qt) !== 0;
    if (!i && (r & Yn) === 0) {
      if ((r & bu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= qt;
      else
        try {
          go(n) && sa(n);
        } catch (l) {
          aa(l, n, null, n.ctx);
        }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
  return t;
}
function y(e) {
  var t;
  for (sl(); To.length > 0; )
    Vi = !0, Bu(), sl();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & $n) !== 0;
  if (ut !== null && !Tn) {
    if (!(fn != null && fn.includes(e))) {
      var r = ut.deps;
      e.rv < Ni && (e.rv = Ni, At === null && r !== null && r[en] === e ? en++ : At === null ? At = [e] : (!ar || !At.includes(e)) && At.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & on) === 0 && (o.f ^= on);
  }
  return n && (o = /** @type {Derived} */
  e, go(o) && Mu(o)), Go && Do.has(e) ? Do.get(e) : e.v;
}
function zn(e) {
  var t = Tn;
  try {
    return Tn = !0, e();
  } finally {
    Tn = t;
  }
}
const $1 = -7169;
function vn(e, t) {
  e.f = e.f & $1 | t;
}
function re(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Wa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Wa(n);
      }
  }
}
function Wa(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Wa(e[r], t);
      } catch {
      }
    const n = Cs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wu(n);
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
const Do = /* @__PURE__ */ new Map();
function Jr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ku,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  const n = Jr(e);
  return Au(n), n;
}
// @__NO_SIDE_EFFECTS__
function ae(e, t = !1) {
  var n;
  const r = Jr(e);
  return t || (r.equals = Ms), uo && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function ee(e, t, n = !1) {
  ut !== null && !Tn && ua() && (ut.f & ($n | _s)) !== 0 && !(fn != null && fn.includes(e)) && s1();
  let r = n ? wn(t) : t;
  return Ka(e, r);
}
function Ka(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Go ? Do.set(e, t) : Do.set(e, n), e.v = t, (e.f & $n) !== 0 && ((e.f & Nn) !== 0 && Eu(
      /** @type {Derived} */
      e
    ), vn(e, (e.f & on) === 0 ? qt : mr)), e.wv = Iu(), ju(e, Nn), ua() && Qe !== null && (Qe.f & qt) !== 0 && (Qe.f & (Gn | Hr)) === 0 && (cn === null ? p1([e]) : cn.push(e));
  }
  return t;
}
function cl(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return ee(e, n), r;
}
function ju(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ua(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & Nn) === 0 && (!r && a === Qe || (vn(a, t), (s & (qt | on)) !== 0 && ((s & $n) !== 0 ? ju(
        /** @type {Derived} */
        a,
        mr
      ) : la(
        /** @type {Effect} */
        a
      ))));
    }
}
let Je = null;
function dl(e) {
  Je = e;
}
function Mr(e) {
  return (
    /** @type {T} */
    Vs().get(e)
  );
}
function Qr(e, t) {
  return Vs().set(e, t), t;
}
function C1(e) {
  return Vs().has(e);
}
function pe(e, t = !1, n) {
  var r = Je = {
    p: Je,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  uo && !t && (Je.l = {
    s: null,
    u: null,
    r1: [],
    r2: Jr(!1)
  }), Ps(() => {
    r.d = !0;
  });
}
function me(e) {
  const t = Je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = Qe, r = ut;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), Ln(i.reaction), tn(i.fn);
        }
      } finally {
        vr(n), Ln(r);
      }
    }
    Je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ua() {
  return !uo || Je !== null && Je.l === null;
}
function Vs(e) {
  return Je === null && na(), Je.c ?? (Je.c = new Map(_1(Je) || void 0));
}
function _1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function k1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const S1 = [
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
function E1(e) {
  return S1.includes(e);
}
const M1 = {
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
function P1(e) {
  return e = e.toLowerCase(), M1[e] ?? e;
}
const T1 = ["touchstart", "touchmove"];
function V1(e) {
  return T1.includes(e);
}
const O1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function N1(e) {
  return O1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function H1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Fo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function L1(e) {
  ze && /* @__PURE__ */ _t(e) !== null && Ss(e);
}
let fl = !1;
function z1() {
  fl || (fl = !0, document.addEventListener(
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
function D1(e) {
  var t = ut, n = Qe;
  Ln(null), vr(null);
  try {
    return e();
  } finally {
    Ln(t), vr(n);
  }
}
const Xu = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function Yu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || So.call(t, i), !i.cancelBubble)
      return D1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function dt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Yu(e, t, n, i);
  (t === document.body || t === window || t === document) && Ps(() => {
    t.removeEventListener(e, a, i);
  });
}
function ho(e) {
  for (var t = 0; t < e.length; t++)
    Xu.add(e[t]);
  for (var n of Fa)
    n(e);
}
function So(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var c = i.indexOf(l);
    if (c !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var u = i.indexOf(n);
    if (u === -1)
      return;
    c <= u && (s = c);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== n) {
    Oo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = ut, v = Qe;
    Ln(null), vr(null);
    try {
      for (var g, p = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Ko(b)) {
              var [$, ...h] = b;
              $.apply(a, [e, ...h]);
            } else
              b.call(a, e);
        } catch (C) {
          g ? p.push(C) : g = C;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (g) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Ln(d), vr(v);
    }
  }
}
function Os(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ut(e, t) {
  var n = (
    /** @type {Effect} */
    Qe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & yu) !== 0, r = (t & qf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ze)
      return Ut(Xe, null), Xe;
    o === void 0 && (o = Os(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ _t(o)));
    var a = (
      /** @type {TemplateNode} */
      r || $u ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ut(s, l);
    } else
      Ut(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & yu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (ze)
      return Ut(Xe, null), Xe;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Os(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ _t(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ _t(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ _t(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ _t(l);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(c)
      ), d = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Ut(u, d);
    } else
      Ut(c, c);
    return c;
  };
}
function We(e = "") {
  if (!ze) {
    var t = Kn(e + "");
    return Ut(t, t), t;
  }
  var n = Xe;
  return n.nodeType !== 3 && (n.before(n = Kn()), It(n)), Ut(n, n), n;
}
function it() {
  if (ze)
    return Ut(Xe, null), Xe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), Ut(t, n), e;
}
function A(e, t) {
  if (ze) {
    Qe.nodes_end = Xe, Hn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function xt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Wu(e, t) {
  return Ku(e, t);
}
function A1(e, t) {
  Ya(), t.intro = t.intro ?? !1;
  const n = t.target, r = ze, o = Xe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _t(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ws); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Rn(i);
    if (!i)
      throw jr;
    nn(!0), It(
      /** @type {Comment} */
      i
    ), Hn();
    const a = Ku(e, { ...t, anchor: i });
    if (Xe === null || Xe.nodeType !== 8 || /** @type {Comment} */
    Xe.data !== xs)
      throw ia(), jr;
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === jr)
      return t.recover === !1 && r1(), Ya(), Ss(n), nn(!1), Wu(e, t);
    throw a;
  } finally {
    nn(r), It(o);
  }
}
const Rr = /* @__PURE__ */ new Map();
function Ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Ya();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = V1(g);
        t.addEventListener(g, So, { passive: p });
        var x = Rr.get(g);
        x === void 0 ? (document.addEventListener(g, So, { passive: p }), Rr.set(g, 1)) : Rr.set(g, x + 1);
      }
    }
  };
  l($s(Xu)), Fa.add(l);
  var c = void 0, u = f1(() => {
    var d = n ?? t.appendChild(Kn());
    return fr(() => {
      if (i) {
        pe({});
        var v = (
          /** @type {ComponentContext} */
          Je
        );
        v.c = i;
      }
      o && (r.$$events = o), ze && Ut(
        /** @type {TemplateNode} */
        d,
        null
      ), c = e(d, r) || {}, ze && (Qe.nodes_end = Xe), i && me();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, So);
        var p = (
          /** @type {number} */
          Rr.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, So), Rr.delete(g)) : Rr.set(g, p);
      }
      Fa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return Ga.set(c, u), c;
}
let Ga = /* @__PURE__ */ new WeakMap();
function R1(e, t) {
  const n = Ga.get(e);
  return n ? (Ga.delete(e), n(t)) : Promise.resolve();
}
function $e(e, t, [n, r] = [0, 0]) {
  ze && n === 0 && Hn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? co : 0, c = !1;
  const u = (v, g = !0) => {
    c = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (ze && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ws ? r = 0 : b === bs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = Xa(), It(o), nn(!1), p = !0, r = -1);
    }
    s ? (i ? Ho(i) : g && (i = fr(() => g(o))), a && Ur(a, () => {
      a = null;
    })) : (a ? Ho(a) : g && (a = fr(() => g(o, [n + 1, r]))), i && Ur(i, () => {
      i = null;
    })), p && nn(!0);
  };
  vo(() => {
    c = !1, t(u), c || d(null, null);
  }, l), ze && (o = Xe);
}
function eo(e, t) {
  return t;
}
function I1(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Ts(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ss(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Hu(o, () => {
    for (var c = 0; c < i; c++) {
      var u = t[c];
      s || (r.delete(u.k), or(e, u.prev, u.next)), Cn(u.e, !s);
    }
  });
}
function Zt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & pu) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = ze ? It(
      /** @type {Comment | Text} */
      /* @__PURE__ */ _t(c)
    ) : c.appendChild(Kn());
  }
  ze && Hn();
  var u = null, d = !1, v = /* @__PURE__ */ ke(() => {
    var g = n();
    return Ko(g) ? g : g == null ? [] : $s(g);
  });
  vo(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let x = !1;
    if (ze) {
      var b = (
        /** @type {Comment} */
        a.data === bs
      );
      b !== (p === 0) && (a = Xa(), It(a), nn(!1), x = !0);
    }
    if (ze) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Xe.nodeType === 8 && /** @type {Comment} */
        Xe.data === xs) {
          a = /** @type {Comment} */
          Xe, x = !0, nn(!1);
          break;
        }
        var m = g[C], k = r(m, C);
        h = Fu(
          Xe,
          s,
          $,
          null,
          m,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), $ = h;
      }
      p > 0 && It(Xa());
    }
    ze || q1(g, s, a, o, t, r, n), i !== null && (p === 0 ? u ? Ho(u) : u = fr(() => i(a)) : u !== null && Ur(u, () => {
      u = null;
    })), x && nn(!0), f(v);
  }), ze && (a = Xe);
}
function q1(e, t, n, r, o, i, a) {
  var s, l, c, u, d = (o & Lf) !== 0, v = (o & (ms | ys)) !== 0, g = e.length, p = t.items, x = t.first, b = x, $, h = null, C, m = [], k = [], P, E, H, O;
  if (d)
    for (O = 0; O < g; O += 1)
      P = e[O], E = i(P, O), H = p.get(E), H !== void 0 && ((s = H.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(H));
  for (O = 0; O < g; O += 1) {
    if (P = e[O], E = i(P, O), H = p.get(E), H === void 0) {
      var D = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      h = Fu(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        E,
        O,
        r,
        o,
        a
      ), p.set(E, h), m = [], k = [], b = h.next;
      continue;
    }
    if (v && Z1(H, P, O, o), (H.e.f & Yn) !== 0 && (Ho(H.e), d && ((l = H.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(H))), H !== b) {
      if ($ !== void 0 && $.has(H)) {
        if (m.length < k.length) {
          var q = k[0], z;
          h = q.prev;
          var R = m[0], S = m[m.length - 1];
          for (z = 0; z < m.length; z += 1)
            vl(m[z], q, n);
          for (z = 0; z < k.length; z += 1)
            $.delete(k[z]);
          or(t, R.prev, S.next), or(t, h, R), or(t, S, q), b = q, h = S, O -= 1, m = [], k = [];
        } else
          $.delete(H), vl(H, b, n), or(t, H.prev, H.next), or(t, H, h === null ? t.first : h.next), or(t, h, H), h = H;
        continue;
      }
      for (m = [], k = []; b !== null && b.k !== E; )
        (b.e.f & Yn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      H = b;
    }
    m.push(H), h = H, b = H.next;
  }
  if (b !== null || $ !== void 0) {
    for (var _ = $ === void 0 ? [] : $s($); b !== null; )
      (b.e.f & Yn) === 0 && _.push(b), b = b.next;
    var M = _.length;
    if (M > 0) {
      var N = (o & pu) !== 0 && g === 0 ? n : null;
      if (d) {
        for (O = 0; O < M; O += 1)
          (c = _[O].a) == null || c.measure();
        for (O = 0; O < M; O += 1)
          (u = _[O].a) == null || u.fix();
      }
      I1(t, _, N, p);
    }
  }
  d && Fo(() => {
    var T;
    if (C !== void 0)
      for (H of C)
        (T = H.a) == null || T.apply();
  }), Qe.first = t.first && t.first.e, Qe.last = h && h.e;
}
function Z1(e, t, n, r) {
  (r & ms) !== 0 && Ka(e.v, t), (r & ys) !== 0 ? Ka(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Fu(e, t, n, r, o, i, a, s, l, c) {
  var u = (l & ms) !== 0, d = (l & zf) === 0, v = u ? d ? /* @__PURE__ */ ae(o) : Jr(o) : o, g = (l & ys) === 0 ? a : Jr(a), p = {
    i: g,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = fr(() => s(e, v, g, c), ze), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function vl(e, t, n) {
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
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Rn(i)
    );
    o.before(i), i = a;
  }
}
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ns(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Te(() => {
    var s = (
      /** @type {Effect} */
      Qe
    );
    if (a === (a = t() ?? "")) {
      ze && Hn();
      return;
    }
    if (s.nodes_start !== null && (Ou(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (ze) {
        Xe.data;
        for (var l = Hn(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Rn(l);
        if (l === null)
          throw ia(), jr;
        Ut(Xe, c), i = It(l);
        return;
      }
      var u = a + "";
      n ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var d = Os(u);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ _t(d)), Ut(
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ _t(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ _t(d)
          );
      else
        i.before(d);
    }
  });
}
function Ht(e, t, n, r, o) {
  var i;
  ze && Hn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function B1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Pr(e, t, ...n) {
  var r = e, o = kt, i;
  vo(() => {
    o !== (o = t()) && (i && (Cn(i), i = null), i = fr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, co), ze && (r = Xe);
}
function Gu(e, t, n) {
  ze && Hn();
  var r = e, o, i;
  vo(() => {
    o !== (o = t()) && (i && (Ur(i), i = null), o && (i = fr(() => n(r, o))));
  }, co), ze && (r = Xe);
}
function j1(e, t, n, r, o, i) {
  let a = ze;
  ze && Hn();
  var s, l, c = null;
  ze && Xe.nodeType === 1 && (c = /** @type {Element} */
  Xe, Hn());
  var u = (
    /** @type {TemplateNode} */
    ze ? Xe : e
  ), d;
  vo(() => {
    const v = t() || null;
    var g = v === "svg" ? Bf : null;
    v !== s && (d && (v === null ? Ur(d, () => {
      d = null, l = null;
    }) : v === l ? Ho(d) : Cn(d)), v && v !== l && (d = fr(() => {
      if (c = ze ? (
        /** @type {Element} */
        c
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Ut(c, c), r) {
        ze && N1(v) && c.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          ze ? /* @__PURE__ */ _t(c) : c.appendChild(Kn())
        );
        ze && (p === null ? nn(!1) : It(p)), r(c, p);
      }
      Qe.nodes_end = c, u.before(c);
    })), s = v, s && (l = s));
  }, co), a && (nn(!0), It(u));
}
function at(e, t) {
  Fo(() => {
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
function Nt(e, t, n) {
  tn(() => {
    var r = zn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var a = n();
        re(a), o && Es(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Uu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Uu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function X1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Uu(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? X1(e) : e ?? "";
}
const gl = [...` 	
\r\f \v\uFEFF`];
function Y1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || gl.includes(r[a - 1])) && (s === r.length || gl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function hl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ta(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function W1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(Ta)), o && l.push(...Object.keys(o).map(Ta));
      var c = 0, u = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && u === -1)
            u = d;
          else if (v === ";" || d === x - 1) {
            if (u !== -1) {
              var g = Ta(e.substring(c, u).trim());
              if (!l.includes(g)) {
                v !== ";" && d++;
                var p = e.substring(c, d).trim();
                n += " " + p + ";";
              }
            }
            c = d + 1, u = -1;
          }
        }
      }
    }
    return r && (n += hl(r)), o && (n += hl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Lt(e, t, n, r, o, i) {
  var a = e.__className;
  if (ze || a !== n || a === void 0) {
    var s = Y1(n, r, i);
    (!ze || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Va(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function $t(e, t, n, r) {
  var o = e.__style;
  if (ze || o !== t) {
    var i = W1(t, r);
    (!ze || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Va(e, n == null ? void 0 : n[0], r[0]), Va(e, n == null ? void 0 : n[1], r[1], "important")) : Va(e, n, r));
  return r;
}
const Co = Symbol("class"), xr = Symbol("style"), Ju = Symbol("is custom element"), Qu = Symbol("is html");
function kr(e) {
  if (ze) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Se(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Se(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, h1(n), z1();
  }
}
function Oa(e, t) {
  var n = ca(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function K1(e, t) {
  var n = ca(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function F1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Se(e, t, n, r) {
  var o = ca(e);
  ze && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ec(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function gn(e, t, n, r, o = !1) {
  var i = ca(e), a = i[Ju], s = !i[Qu];
  let l = ze && a;
  l && nn(!1);
  var c = t || {}, u = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = Sn(n.class) : (r || n[Co]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var v = ec(e);
  for (const C in n) {
    let m = n[C];
    if (u && C === "value" && m == null) {
      e.value = e.__value = "", c[C] = m;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lt(e, g, m, r, t == null ? void 0 : t[Co], n[Co]), c[C] = m, c[Co] = n[Co];
      continue;
    }
    if (C === "style") {
      $t(e, m, t == null ? void 0 : t[xr], n[xr]), c[C] = m, c[xr] = n[xr];
      continue;
    }
    var p = c[C];
    if (m !== p) {
      c[C] = m;
      var x = C[0] + C[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, P = "$$" + C;
          let E = C.slice(2);
          var b = E1(E);
          if (k1(E) && (E = E.slice(0, -7), k.capture = !0), !b && p) {
            if (m != null) continue;
            e.removeEventListener(E, c[P], k), c[P] = null;
          }
          if (m != null)
            if (b)
              e[`__${E}`] = m, ho([E]);
            else {
              let H = function(O) {
                c[C].call(this, O);
              };
              c[P] = Yu(E, e, H, k);
            }
          else b && (e[`__${E}`] = void 0);
        } else if (C === "style")
          Se(e, C, m);
        else if (C === "autofocus")
          H1(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!a && (C === "__value" || C === "value" && m != null))
          e.value = e.__value = m;
        else if (C === "selected" && u)
          F1(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var $ = C;
          s || ($ = P1($));
          var h = $ === "defaultValue" || $ === "defaultChecked";
          if (m == null && !a && !h)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const P = t === void 0;
              if ($ === "value") {
                let E = k.defaultValue;
                k.removeAttribute($), k.defaultValue = E, k.value = k.__value = P ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = E, k.checked = P ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else h || v.includes($) && (a || typeof m != "string") ? e[$] = m : typeof m != "function" && Se(e, $, m);
        }
    }
  }
  return l && nn(!0), c;
}
function ca(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ju]: e.nodeName.includes("-"),
      [Qu]: e.namespaceURI === Zf
    })
  );
}
var pl = /* @__PURE__ */ new Map();
function ec(e) {
  var t = pl.get(e.nodeName);
  if (t) return t;
  pl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = wu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Cs(r);
  }
  return t;
}
var $r, Vo, bi, Ua, tc;
const Ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Zr(this, Ua), Zr(this, $r, /* @__PURE__ */ new WeakMap()), Zr(this, Vo), Zr(this, bi), Ei(this, bi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = wt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), wt(this, $r).set(t, r), Vf(this, Ua, tc).call(this).observe(t, wt(this, bi)), () => {
      var o = wt(this, $r).get(t);
      o.delete(n), o.size === 0 && (wt(this, $r).delete(t), wt(this, Vo).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakSet(), tc = function() {
  return wt(this, Vo) ?? Ei(this, Vo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ja.entries.set(t.target, t);
        for (var n of wt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ft(Ja, "entries", /* @__PURE__ */ new WeakMap());
let G1 = Ja;
var U1 = /* @__PURE__ */ new G1({
  box: "border-box"
});
function ml(e, t, n) {
  var r = U1.observe(e, () => n(e[t]));
  tn(() => (zn(() => n(e[t])), r));
}
function yl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Dn(e = {}, t, n, r) {
  return tn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], zn(() => {
        e !== n(...i) && (t(e, ...i), o && yl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Fo(() => {
        i && yl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function je(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Je
  ), n = t.l.u;
  if (!n) return;
  let r = () => re(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Gr(() => {
      let s = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && c1(() => {
    wl(t, r), No(n.b);
  }), xn(() => {
    const o = zn(() => n.m.map(Kf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && xn(() => {
    wl(t, r), No(n.a);
  });
}
function wl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Ue(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function pn(e) {
  Je === null && na(), uo && Je.l !== null ? Q1(Je).m.push(e) : xn(() => {
    const t = zn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Hs(e) {
  Je === null && na(), pn(() => () => zn(e));
}
function J1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function da() {
  const e = Je;
  return e === null && na(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Ko(i) ? i.slice() : [i], s = J1(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of a)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function Q1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ls(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), kt;
  const r = zn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ir = [];
function un(e, t) {
  return {
    subscribe: Ee(e, t).subscribe
  };
}
function Ee(e, t = kt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Es(e, s) && (e = s, n)) {
      const l = !Ir.length;
      for (const c of r)
        c[1](), Ir.push(c, e);
      if (l) {
        for (let c = 0; c < Ir.length; c += 2)
          Ir[c][0](Ir[c + 1]);
        Ir.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = kt) {
    const c = [s, l];
    return r.add(c), r.size === 1 && (n = t(o, i) || kt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function ur(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return un(n, (a, s) => {
    let l = !1;
    const c = [];
    let u = 0, d = kt;
    const v = () => {
      if (u)
        return;
      d();
      const p = t(r ? c[0] : c, a, s);
      i ? a(p) : d = typeof p == "function" ? p : kt;
    }, g = o.map(
      (p, x) => Ls(
        p,
        (b) => {
          c[x] = b, u &= ~(1 << x), l && v();
        },
        () => {
          u |= 1 << x;
        }
      )
    );
    return l = !0, v(), function() {
      No(g), d(), l = !1;
    };
  });
}
function G(e) {
  let t;
  return Ls(e, (n) => t = n)(), t;
}
let fi = !1, Qa = Symbol();
function oe(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ae(void 0),
    unsubscribe: kt
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = kt;
    else {
      var o = !0;
      r.unsubscribe = Ls(e, (i) => {
        o ? r.source.v = i : ee(r.source, i);
      }), o = !1;
    }
  return e && Qa in n ? G(e) : f(r.source);
}
function ev(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = kt), e;
}
function Li(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    Ps(() => {
      for (var n in e)
        e[n].unsubscribe();
      Oo(e, Qa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function tv(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const nv = {
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
function zt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    nv
  );
}
const rv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return f(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      mu
    )), e.special[t](n), cl(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), cl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ht(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Jr(0) }, rv);
}
const ov = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($o(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      $o(o) && (o = o());
      const i = Xn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($o(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Xn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lr || t === ks) return !1;
    for (let n of e.props)
      if ($o(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      $o(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function mt(...e) {
  return new Proxy({ props: e }, ov);
}
function bl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var o, i = (n & Df) !== 0, a = !uo || (n & Af) !== 0, s = (n & Rf) !== 0, l = (n & If) !== 0, c = !1, u;
  s ? [u, c] = tv(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var d = lr in e || ks in e, v = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, g = (
    /** @type {V} */
    r
  ), p = !0, x = !1, b = () => (x = !0, p && (p = !1, l ? g = zn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  u === void 0 && r !== void 0 && (v && a && o1(), u = b(), v && v(u));
  var $;
  if (a)
    $ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? b() : (p = !0, x = !1, E);
    };
  else {
    var h = (i ? Gr : ke)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Gf, $ = () => {
      var E = f(h);
      return E !== void 0 && (g = /** @type {V} */
      void 0), E === void 0 ? g : E;
    };
  }
  if ((n & mu) === 0)
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(E, H) {
      return arguments.length > 0 ? ((!a || !H || C || c) && v(H ? $() : E), E) : $();
    };
  }
  var m = !1, k = /* @__PURE__ */ ae(u), P = /* @__PURE__ */ Gr(() => {
    var E = $(), H = f(k);
    return m ? (m = !1, H) : k.v = E;
  });
  return s && f(P), i || (P.equals = Ms), function(E, H) {
    if (arguments.length > 0) {
      const O = H ? f(P) : a && s ? wn(E) : E;
      if (!P.equals(O)) {
        if (m = !0, ee(k, O), x && g !== void 0 && (g = O), bl(P))
          return E;
        zn(() => f(P));
      }
      return E;
    }
    return bl(P) ? P.v : f(P);
  };
}
function iv(e) {
  return new av(e);
}
var rr, mn;
class av {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Zr(this, rr), Zr(this, mn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ae(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ks ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return ee(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    Ei(this, mn, (t.hydrate ? A1 : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), Ei(this, rr, i.$$events);
    for (const a of Object.keys(wt(this, mn)))
      a === "$set" || a === "$destroy" || a === "$on" || Oo(this, a, {
        get() {
          return wt(this, mn)[a];
        },
        /** @param {any} value */
        set(s) {
          wt(this, mn)[a] = s;
        },
        enumerable: !0
      });
    wt(this, mn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, wt(this, mn).$destroy = () => {
      R1(wt(this, mn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    wt(this, mn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    wt(this, rr)[t] = wt(this, rr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return wt(this, rr)[t].push(r), () => {
      wt(this, rr)[t] = wt(this, rr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    wt(this, mn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
let nc;
typeof HTMLElement == "function" && (nc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ft(this, "$$ctor"), Ft(this, "$$s"), Ft(this, "$$c"), Ft(this, "$$cn", !1), Ft(this, "$$d", {}), Ft(this, "$$r", !1), Ft(this, "$$p_d", {}), Ft(this, "$$l", {}), Ft(this, "$$l_u", /* @__PURE__ */ new Map()), Ft(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), A(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = sv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = xi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = iv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = d1(() => {
        fo(() => {
          var r;
          this.$$r = !0;
          for (const o of Mi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = xi(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
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
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = xi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Mi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function xi(e, t, n, r) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function sv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ve(e, t, n, r, o, i) {
  let a = class extends nc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mi(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Mi(t).forEach((s) => {
    Oo(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var c;
        l = xi(s, l, t), this.$$d[s] = l;
        var u = this.$$c;
        if (u) {
          var d = (c = Xn(u, s)) == null ? void 0 : c.get;
          d ? u[s] = l : u.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Oo(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Bt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Bt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var lv = { value: () => {
} };
function fa() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new $i(n);
}
function $i(e) {
  this._ = e;
}
function uv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
$i.prototype = fa.prototype = {
  constructor: $i,
  on: function(e, t) {
    var n = this._, r = uv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = cv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = xl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = xl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new $i(e);
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
function cv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = lv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var es = "http://www.w3.org/1999/xhtml";
const $l = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function va(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $l.hasOwnProperty(t) ? { space: $l[t], local: e } : e;
}
function dv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === es && t.documentElement.namespaceURI === es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function fv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function rc(e) {
  var t = va(e);
  return (t.local ? fv : dv)(t);
}
function vv() {
}
function zs(e) {
  return e == null ? vv : function() {
    return this.querySelector(e);
  };
}
function gv(e) {
  typeof e != "function" && (e = zs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, c, u = 0; u < a; ++u)
      (l = i[u]) && (c = e.call(l, l.__data__, u, i)) && ("__data__" in l && (c.__data__ = l.__data__), s[u] = c);
  return new sn(r, this._parents);
}
function hv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function pv() {
  return [];
}
function oc(e) {
  return e == null ? pv : function() {
    return this.querySelectorAll(e);
  };
}
function mv(e) {
  return function() {
    return hv(e.apply(this, arguments));
  };
}
function yv(e) {
  typeof e == "function" ? e = mv(e) : e = oc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, c = 0; c < s; ++c)
      (l = a[c]) && (r.push(e.call(l, l.__data__, c, a)), o.push(l));
  return new sn(r, o);
}
function ic(e) {
  return function() {
    return this.matches(e);
  };
}
function ac(e) {
  return function(t) {
    return t.matches(e);
  };
}
var wv = Array.prototype.find;
function bv(e) {
  return function() {
    return wv.call(this.children, e);
  };
}
function xv() {
  return this.firstElementChild;
}
function $v(e) {
  return this.select(e == null ? xv : bv(typeof e == "function" ? e : ac(e)));
}
var Cv = Array.prototype.filter;
function _v() {
  return Array.from(this.children);
}
function kv(e) {
  return function() {
    return Cv.call(this.children, e);
  };
}
function Sv(e) {
  return this.selectAll(e == null ? _v : kv(typeof e == "function" ? e : ac(e)));
}
function Ev(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, c = 0; c < a; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && s.push(l);
  return new sn(r, this._parents);
}
function sc(e) {
  return new Array(e.length);
}
function Mv() {
  return new sn(this._enter || this._groups.map(sc), this._parents);
}
function zi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zi.prototype = {
  constructor: zi,
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
function Pv(e) {
  return function() {
    return e;
  };
}
function Tv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, c = i.length; a < c; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new zi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Vv(e, t, n, r, o, i, a) {
  var s, l, c = /* @__PURE__ */ new Map(), u = t.length, d = i.length, v = new Array(u), g;
  for (s = 0; s < u; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", c.has(g) ? o[s] = l : c.set(g, l));
  for (s = 0; s < d; ++s)
    g = a.call(e, i[s], s, i) + "", (l = c.get(g)) ? (r[s] = l, l.__data__ = i[s], c.delete(g)) : n[s] = new zi(e, i[s]);
  for (s = 0; s < u; ++s)
    (l = t[s]) && c.get(v[s]) === l && (o[s] = l);
}
function Ov(e) {
  return e.__data__;
}
function Nv(e, t) {
  if (!arguments.length) return Array.from(this, Ov);
  var n = t ? Vv : Tv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Pv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var u = r[c], d = o[c], v = d.length, g = Hv(e.call(u, u && u.__data__, c, r)), p = g.length, x = s[c] = new Array(p), b = a[c] = new Array(p), $ = l[c] = new Array(v);
    n(u, d, x, b, $, g, t);
    for (var h = 0, C = 0, m, k; h < p; ++h)
      if (m = x[h]) {
        for (h >= C && (C = h + 1); !(k = b[C]) && ++C < p; ) ;
        m._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function Hv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Lv() {
  return new sn(this._exit || this._groups.map(sc), this._parents);
}
function zv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Dv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var c = n[l], u = r[l], d = c.length, v = s[l] = new Array(d), g, p = 0; p < d; ++p)
      (g = c[p] || u[p]) && (v[p] = g);
  for (; l < o; ++l)
    s[l] = n[l];
  return new sn(s, this._parents);
}
function Av() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Rv(e) {
  e || (e = Iv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), c, u = 0; u < s; ++u)
      (c = a[u]) && (l[u] = c);
    l.sort(t);
  }
  return new sn(o, this._parents).order();
}
function Iv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zv() {
  return Array.from(this);
}
function Bv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function jv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Xv() {
  return !this.node();
}
function Yv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Wv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Kv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Fv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Gv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Uv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Jv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Qv(e, t) {
  var n = va(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Kv : Wv : typeof t == "function" ? n.local ? Jv : Uv : n.local ? Gv : Fv)(n, t));
}
function lc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function eg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function ng(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function rg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? eg : typeof t == "function" ? ng : tg)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || lc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function og(e) {
  return function() {
    delete this[e];
  };
}
function ig(e, t) {
  return function() {
    this[e] = t;
  };
}
function ag(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? og : typeof t == "function" ? ag : ig)(e, t)) : this.node()[e];
}
function uc(e) {
  return e.trim().split(/^|\s+/);
}
function Ds(e) {
  return e.classList || new cc(e);
}
function cc(e) {
  this._node = e, this._names = uc(e.getAttribute("class") || "");
}
cc.prototype = {
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
function dc(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function fc(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lg(e) {
  return function() {
    dc(this, e);
  };
}
function ug(e) {
  return function() {
    fc(this, e);
  };
}
function cg(e, t) {
  return function() {
    (t.apply(this, arguments) ? dc : fc)(this, e);
  };
}
function dg(e, t) {
  var n = uc(e + "");
  if (arguments.length < 2) {
    for (var r = Ds(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? cg : t ? lg : ug)(n, t));
}
function fg() {
  this.textContent = "";
}
function vg(e) {
  return function() {
    this.textContent = e;
  };
}
function gg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hg(e) {
  return arguments.length ? this.each(e == null ? fg : (typeof e == "function" ? gg : vg)(e)) : this.node().textContent;
}
function pg() {
  this.innerHTML = "";
}
function mg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wg(e) {
  return arguments.length ? this.each(e == null ? pg : (typeof e == "function" ? yg : mg)(e)) : this.node().innerHTML;
}
function bg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xg() {
  return this.each(bg);
}
function $g() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cg() {
  return this.each($g);
}
function _g(e) {
  var t = typeof e == "function" ? e : rc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kg() {
  return null;
}
function Sg(e, t) {
  var n = typeof e == "function" ? e : rc(e), r = t == null ? kg : typeof t == "function" ? t : zs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Mg() {
  return this.each(Eg);
}
function Pg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vg(e) {
  return this.select(e ? Tg : Pg);
}
function Og(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Ng(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Hg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Lg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function zg(e, t, n) {
  return function() {
    var r = this.__on, o, i = Ng(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((o = r[a]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Dg(e, t, n) {
  var r = Hg(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, c = s.length, u; l < c; ++l)
        for (o = 0, u = s[l]; o < i; ++o)
          if ((a = r[o]).type === u.type && a.name === u.name)
            return u.value;
    }
    return;
  }
  for (s = t ? zg : Lg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function vc(e, t, n) {
  var r = lc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ag(e, t) {
  return function() {
    return vc(this, e, t);
  };
}
function Rg(e, t) {
  return function() {
    return vc(this, e, t.apply(this, arguments));
  };
}
function Ig(e, t) {
  return this.each((typeof t == "function" ? Rg : Ag)(e, t));
}
function* qg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var gc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function Uo() {
  return new sn([[document.documentElement]], gc);
}
function Zg() {
  return this;
}
sn.prototype = Uo.prototype = {
  constructor: sn,
  select: gv,
  selectAll: yv,
  selectChild: $v,
  selectChildren: Sv,
  filter: Ev,
  data: Nv,
  enter: Mv,
  exit: Lv,
  join: zv,
  merge: Dv,
  selection: Zg,
  order: Av,
  sort: Rv,
  call: qv,
  nodes: Zv,
  node: Bv,
  size: jv,
  empty: Xv,
  each: Yv,
  attr: Qv,
  style: rg,
  property: sg,
  classed: dg,
  text: hg,
  html: wg,
  raise: xg,
  lower: Cg,
  append: _g,
  insert: Sg,
  remove: Mg,
  clone: Vg,
  datum: Og,
  on: Dg,
  dispatch: Ig,
  [Symbol.iterator]: qg
};
function dn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], gc);
}
function Bg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
  if (e = Bg(e), t === void 0 && (t = e.currentTarget), t) {
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
const jg = { passive: !1 }, Ao = { capture: !0, passive: !1 };
function Na(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function hc(e) {
  var t = e.document.documentElement, n = dn(e).on("dragstart.drag", Xr, Ao);
  "onselectstart" in t ? n.on("selectstart.drag", Xr, Ao) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function pc(e, t) {
  var n = e.document.documentElement, r = dn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Xr, Ao), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const vi = (e) => () => e;
function ts(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
  y: s,
  dx: l,
  dy: c,
  dispatch: u
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: u }
  });
}
ts.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Xg(e) {
  return !e.ctrlKey && !e.button;
}
function Yg() {
  return this.parentNode;
}
function Wg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Kg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fg() {
  var e = Xg, t = Yg, n = Wg, r = Kg, o = {}, i = fa("start", "drag", "end"), a = 0, s, l, c, u, d = 0;
  function v(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, jg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, k) {
    if (!(u || !e.call(this, m, k))) {
      var P = C(this, t.call(this, m, k), m, k, "mouse");
      P && (dn(m.view).on("mousemove.drag", p, Ao).on("mouseup.drag", x, Ao), hc(m.view), Na(m), c = !1, s = m.clientX, l = m.clientY, P("start", m));
    }
  }
  function p(m) {
    if (Xr(m), !c) {
      var k = m.clientX - s, P = m.clientY - l;
      c = k * k + P * P > d;
    }
    o.mouse("drag", m);
  }
  function x(m) {
    dn(m.view).on("mousemove.drag mouseup.drag", null), pc(m.view, c), Xr(m), o.mouse("end", m);
  }
  function b(m, k) {
    if (e.call(this, m, k)) {
      var P = m.changedTouches, E = t.call(this, m, k), H = P.length, O, D;
      for (O = 0; O < H; ++O)
        (D = C(this, E, m, k, P[O].identifier, P[O])) && (Na(m), D("start", m, P[O]));
    }
  }
  function $(m) {
    var k = m.changedTouches, P = k.length, E, H;
    for (E = 0; E < P; ++E)
      (H = o[k[E].identifier]) && (Xr(m), H("drag", m, k[E]));
  }
  function h(m) {
    var k = m.changedTouches, P = k.length, E, H;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), E = 0; E < P; ++E)
      (H = o[k[E].identifier]) && (Na(m), H("end", m, k[E]));
  }
  function C(m, k, P, E, H, O) {
    var D = i.copy(), q = yn(O || P, k), z, R, S;
    if ((S = n.call(m, new ts("beforestart", {
      sourceEvent: P,
      target: v,
      identifier: H,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), E)) != null)
      return z = S.x - q[0] || 0, R = S.y - q[1] || 0, function _(M, N, T) {
        var V = q, I;
        switch (M) {
          case "start":
            o[H] = _, I = a++;
            break;
          case "end":
            delete o[H], --a;
          // falls through
          case "drag":
            q = yn(T || N, k), I = a;
            break;
        }
        D.call(
          M,
          m,
          new ts(M, {
            sourceEvent: N,
            subject: S,
            target: v,
            identifier: H,
            active: I,
            x: q[0] + z,
            y: q[1] + R,
            dx: q[0] - V[0],
            dy: q[1] - V[1],
            dispatch: D
          }),
          E
        );
      };
  }
  return v.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : vi(!!m), v) : e;
  }, v.container = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : vi(m), v) : t;
  }, v.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : vi(m), v) : n;
  }, v.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : vi(!!m), v) : r;
  }, v.on = function() {
    var m = i.on.apply(i, arguments);
    return m === i ? v : m;
  }, v.clickDistance = function(m) {
    return arguments.length ? (d = (m = +m) * m, v) : Math.sqrt(d);
  }, v;
}
function As(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function mc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Jo() {
}
var Ro = 0.7, Di = 1 / Ro, Yr = "\\s*([+-]?\\d+)\\s*", Io = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gg = /^#([0-9a-f]{3,8})$/, Ug = new RegExp(`^rgb\\(${Yr},${Yr},${Yr}\\)$`), Jg = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), Qg = new RegExp(`^rgba\\(${Yr},${Yr},${Yr},${Io}\\)$`), eh = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Io}\\)$`), th = new RegExp(`^hsl\\(${Io},${Vn},${Vn}\\)$`), nh = new RegExp(`^hsla\\(${Io},${Vn},${Vn},${Io}\\)$`), Cl = {
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
As(Jo, qo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: rh,
  formatHsl: oh,
  formatRgb: kl,
  toString: kl
});
function _l() {
  return this.rgb().formatHex();
}
function rh() {
  return this.rgb().formatHex8();
}
function oh() {
  return yc(this).formatHsl();
}
function kl() {
  return this.rgb().formatRgb();
}
function qo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sl(t) : n === 3 ? new Gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ug.exec(e)) ? new Gt(t[1], t[2], t[3], 1) : (t = Jg.exec(e)) ? new Gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qg.exec(e)) ? gi(t[1], t[2], t[3], t[4]) : (t = eh.exec(e)) ? gi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = th.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, 1) : (t = nh.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, t[4]) : Cl.hasOwnProperty(e) ? Sl(Cl[e]) : e === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function Sl(e) {
  return new Gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Gt(e, t, n, r);
}
function ih(e) {
  return e instanceof Jo || (e = qo(e)), e ? (e = e.rgb(), new Gt(e.r, e.g, e.b, e.opacity)) : new Gt();
}
function ns(e, t, n, r) {
  return arguments.length === 1 ? ih(e) : new Gt(e, t, n, r ?? 1);
}
function Gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
As(Gt, ns, mc(Jo, {
  brighter(e) {
    return e = e == null ? Di : Math.pow(Di, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Gt(Sr(this.r), Sr(this.g), Sr(this.b), Ai(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: El,
  // Deprecated! Use color.formatHex.
  formatHex: El,
  formatHex8: ah,
  formatRgb: Ml,
  toString: Ml
}));
function El() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function ah() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ml() {
  const e = Ai(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sr(this.r)}, ${Sr(this.g)}, ${Sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ai(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = Sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Pl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new bn(e, t, n, r);
}
function yc(e) {
  if (e instanceof bn) return new bn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jo || (e = qo(e)), !e) return new bn();
  if (e instanceof bn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new bn(a, s, l, e.opacity);
}
function sh(e, t, n, r) {
  return arguments.length === 1 ? yc(e) : new bn(e, t, n, r ?? 1);
}
function bn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
As(bn, sh, mc(Jo, {
  brighter(e) {
    return e = e == null ? Di : Math.pow(Di, e), new bn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new bn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Gt(
      Ha(e >= 240 ? e - 240 : e + 120, o, r),
      Ha(e, o, r),
      Ha(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new bn(Tl(this.h), hi(this.s), hi(this.l), Ai(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ai(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tl(this.h)}, ${hi(this.s) * 100}%, ${hi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ha(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wc = (e) => () => e;
function lh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function uh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function ch(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? uh(t, n, e) : wc(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? lh(e, n) : wc(isNaN(e) ? t : e);
}
const Vl = function e(t) {
  var n = ch(t);
  function r(o, i) {
    var a = n((o = ns(o)).r, (i = ns(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), c = bc(o.opacity, i.opacity);
    return function(u) {
      return o.r = a(u), o.g = s(u), o.b = l(u), o.opacity = c(u), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function ir(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, La = new RegExp(rs.source, "g");
function dh(e) {
  return function() {
    return e;
  };
}
function fh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vh(e, t) {
  var n = rs.lastIndex = La.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = rs.exec(e)) && (o = La.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = La.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fh(l[0].x) : dh(t) : (t = l.length, function(c) {
    for (var u = 0, d; u < t; ++u) s[(d = l[u]).i] = d.x(c);
    return s.join("");
  });
}
var Ol = 180 / Math.PI, xc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $c(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ol,
    skewX: Math.atan(l) * Ol,
    scaleX: a,
    scaleY: s
  };
}
var pi;
function gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xc : $c(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hh(e) {
  return e == null || (pi || (pi = document.createElementNS("http://www.w3.org/2000/svg", "g")), pi.setAttribute("transform", e), !(e = pi.transform.baseVal.consolidate())) ? xc : (e = e.matrix, $c(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Cc(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, u, d, v, g, p) {
    if (c !== d || u !== v) {
      var x = g.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: ir(c, d) }, { i: x - 2, x: ir(u, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(c, u, d, v) {
    c !== u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(c, u) })) : u && d.push(o(d) + "rotate(" + u + r);
  }
  function s(c, u, d, v) {
    c !== u ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(c, u) }) : u && d.push(o(d) + "skewX(" + u + r);
  }
  function l(c, u, d, v, g, p) {
    if (c !== d || u !== v) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: ir(c, d) }, { i: x - 2, x: ir(u, v) });
    } else (d !== 1 || v !== 1) && g.push(o(g) + "scale(" + d + "," + v + ")");
  }
  return function(c, u) {
    var d = [], v = [];
    return c = e(c), u = e(u), i(c.translateX, c.translateY, u.translateX, u.translateY, d, v), a(c.rotate, u.rotate, d, v), s(c.skewX, u.skewX, d, v), l(c.scaleX, c.scaleY, u.scaleX, u.scaleY, d, v), c = u = null, function(g) {
      for (var p = -1, x = v.length, b; ++p < x; ) d[(b = v[p]).i] = b.x(g);
      return d.join("");
    };
  };
}
var ph = Cc(gh, "px, ", "px)", "deg)"), mh = Cc(hh, ", ", ")", ")"), yh = 1e-12;
function Nl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const xh = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], c = i[2], u = a[0], d = a[1], v = a[2], g = u - s, p = d - l, x = g * g + p * p, b, $;
    if (x < yh)
      $ = Math.log(v / c) / t, b = function(E) {
        return [
          s + E * g,
          l + E * p,
          c * Math.exp(t * E * $)
        ];
      };
    else {
      var h = Math.sqrt(x), C = (v * v - c * c + r * x) / (2 * c * n * h), m = (v * v - c * c - r * x) / (2 * v * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), P = Math.log(Math.sqrt(m * m + 1) - m);
      $ = (P - k) / t, b = function(E) {
        var H = E * $, O = Nl(k), D = c / (n * h) * (O * bh(t * H + k) - wh(k));
        return [
          s + D * g,
          l + D * p,
          c * O / Nl(t * H + k)
        ];
      };
    }
    return b.duration = $ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var no = 0, Eo = 0, _o = 0, _c = 1e3, Ri, Mo, Ii = 0, Tr = 0, ga = 0, Zo = typeof performance == "object" && performance.now ? performance : Date, kc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Rs() {
  return Tr || (kc($h), Tr = Zo.now() + ga);
}
function $h() {
  Tr = 0;
}
function qi() {
  this._call = this._time = this._next = null;
}
qi.prototype = Sc.prototype = {
  constructor: qi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Rs() : +n) + (t == null ? 0 : +t), !this._next && Mo !== this && (Mo ? Mo._next = this : Ri = this, Mo = this), this._call = e, this._time = n, os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, os());
  }
};
function Sc(e, t, n) {
  var r = new qi();
  return r.restart(e, t, n), r;
}
function Ch() {
  Rs(), ++no;
  for (var e = Ri, t; e; )
    (t = Tr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function Hl() {
  Tr = (Ii = Zo.now()) + ga, no = Eo = 0;
  try {
    Ch();
  } finally {
    no = 0, kh(), Tr = 0;
  }
}
function _h() {
  var e = Zo.now(), t = e - Ii;
  t > _c && (ga -= t, Ii = e);
}
function kh() {
  for (var e, t = Ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ri = n);
  Mo = e, os(r);
}
function os(e) {
  if (!no) {
    Eo && (Eo = clearTimeout(Eo));
    var t = e - Tr;
    t > 24 ? (e < 1 / 0 && (Eo = setTimeout(Hl, e - Zo.now() - ga)), _o && (_o = clearInterval(_o))) : (_o || (Ii = Zo.now(), _o = setInterval(_h, _c)), no = 1, kc(Hl));
  }
}
function Ll(e, t, n) {
  var r = new qi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sh = fa("start", "end", "cancel", "interrupt"), Eh = [], Ec = 0, zl = 1, is = 2, Ci = 3, Dl = 4, as = 5, _i = 6;
function ha(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Mh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Sh,
    tween: Eh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ec
  });
}
function Is(e, t) {
  var n = En(e, t);
  if (n.state > Ec) throw new Error("too late; already scheduled");
  return n;
}
function In(e, t) {
  var n = En(e, t);
  if (n.state > Ci) throw new Error("too late; already running");
  return n;
}
function En(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Mh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Sc(i, 0, n.time);
  function i(c) {
    n.state = zl, n.timer.restart(a, n.delay, n.time), n.delay <= c && a(c - n.delay);
  }
  function a(c) {
    var u, d, v, g;
    if (n.state !== zl) return l();
    for (u in r)
      if (g = r[u], g.name === n.name) {
        if (g.state === Ci) return Ll(a);
        g.state === Dl ? (g.state = _i, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[u]) : +u < t && (g.state = _i, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[u]);
      }
    if (Ll(function() {
      n.state === Ci && (n.state = Dl, n.timer.restart(s, n.delay, n.time), s(c));
    }), n.state = is, n.on.call("start", e, e.__data__, n.index, n.group), n.state === is) {
      for (n.state = Ci, o = new Array(v = n.tween.length), u = 0, d = -1; u < v; ++u)
        (g = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(c) {
    for (var u = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = as, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, u);
    n.state === as && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = _i, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function ki(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > is && r.state < as, r.state = _i, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Ph(e) {
  return this.each(function() {
    ki(this, e);
  });
}
function Th(e, t) {
  var n, r;
  return function() {
    var o = In(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Vh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = In(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === c && o.push(s);
    }
    i.tween = o;
  };
}
function Oh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = En(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Th : Vh)(n, e, t));
}
function qs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = In(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return En(o, r).value[t];
  };
}
function Mc(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof qo ? Vl : (n = qo(t)) ? (t = n, Vl) : vh)(e, t);
}
function Nh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function zh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Dh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ah(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Rh(e, t) {
  var n = va(e), r = n === "transform" ? mh : Mc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ah : Dh)(n, r, qs(this, "attr." + e, t)) : t == null ? (n.local ? Hh : Nh)(n) : (n.local ? zh : Lh)(n, r, t));
}
function Ih(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function qh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Zh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && qh(e, i)), n;
  }
  return o._value = t, o;
}
function Bh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ih(e, i)), n;
  }
  return o._value = t, o;
}
function jh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = va(e);
  return this.tween(n, (r.local ? Zh : Bh)(r, t));
}
function Xh(e, t) {
  return function() {
    Is(this, e).delay = +t.apply(this, arguments);
  };
}
function Yh(e, t) {
  return t = +t, function() {
    Is(this, e).delay = t;
  };
}
function Wh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xh : Yh)(t, e)) : En(this.node(), t).delay;
}
function Kh(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function Fh(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function Gh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kh : Fh)(t, e)) : En(this.node(), t).duration;
}
function Uh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function Jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Uh(t, e)) : En(this.node(), t).ease;
}
function Qh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    In(this, e).ease = n;
  };
}
function ep(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Qh(this._id, e));
}
function tp(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, c = 0; c < a; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], c = n[s], u = l.length, d = a[s] = new Array(u), v, g = 0; g < u; ++g)
      (v = l[g] || c[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function rp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function op(e, t, n) {
  var r, o, i = rp(t) ? Is : In;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ip(e, t) {
  var n = this._id;
  return arguments.length < 2 ? En(this.node(), n).on.on(e) : this.each(op(n, e, t));
}
function ap(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function sp() {
  return this.on("end.remove", ap(this._id));
}
function lp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, c = i[a] = new Array(l), u, d, v = 0; v < l; ++v)
      (u = s[v]) && (d = e.call(u, u.__data__, v, s)) && ("__data__" in u && (d.__data__ = u.__data__), c[v] = d, ha(c[v], t, n, v, c, En(u, n)));
  return new Fn(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = oc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], c = l.length, u, d = 0; d < c; ++d)
      if (u = l[d]) {
        for (var v = e.call(u, u.__data__, d, l), g, p = En(u, n), x = 0, b = v.length; x < b; ++x)
          (g = v[x]) && ha(g, t, n, x, v, p);
        i.push(v), a.push(u);
      }
  return new Fn(i, a, t, n);
}
var cp = Uo.prototype.constructor;
function dp() {
  return new cp(this._groups, this._parents);
}
function fp(e, t) {
  var n, r, o;
  return function() {
    var i = to(this, e), a = (this.style.removeProperty(e), to(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Pc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = to(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function gp(e, t, n) {
  var r, o, i;
  return function() {
    var a = to(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), to(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function hp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = In(this, e), c = l.on, u = l.value[i] == null ? s || (s = Pc(t)) : void 0;
    (c !== n || o !== u) && (r = (n = c).copy()).on(a, o = u), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? ph : Mc;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Pc(e)) : typeof t == "function" ? this.styleTween(e, gp(e, r, qs(this, "style." + e, t))).each(hp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
}
function mp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function yp(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && mp(e, a, n)), r;
  }
  return i._value = t, i;
}
function wp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, yp(e, t, n ?? ""));
}
function bp(e) {
  return function() {
    this.textContent = e;
  };
}
function xp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function $p(e) {
  return this.tween("text", typeof e == "function" ? xp(qs(this, "text", e)) : bp(e == null ? "" : e + ""));
}
function Cp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _p(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Cp(o)), t;
  }
  return r._value = e, r;
}
function kp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _p(e));
}
function Sp() {
  for (var e = this._name, t = this._id, n = Tc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, c = 0; c < s; ++c)
      if (l = a[c]) {
        var u = En(l, t);
        ha(l, e, n, c, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function Ep() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = In(this, r), u = c.on;
      u !== e && (t = (e = u).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Mp = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Tc() {
  return ++Mp;
}
var Zn = Uo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: lp,
  selectAll: up,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: tp,
  merge: np,
  selection: dp,
  transition: Sp,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: ip,
  attr: Rh,
  attrTween: jh,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: kp,
  remove: sp,
  tween: Oh,
  delay: Wh,
  duration: Gh,
  ease: Jh,
  easeVarying: ep,
  end: Ep,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Pp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Tp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pp
};
function Vp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Op(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Tc(), (n = Tp).time = Rs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, c = 0; c < s; ++c)
      (l = a[c]) && ha(l, e, t, c, a, n || Vp(l, t));
  return new Fn(r, this._parents, e, t);
}
Uo.prototype.interrupt = Ph;
Uo.prototype.transition = Op;
const mi = (e) => () => e;
function Np(e, {
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
var pa = new Bn(1, 0, 0);
Vc.prototype = Bn.prototype;
function Vc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return pa;
  return e.__zoom;
}
function za(e) {
  e.stopImmediatePropagation();
}
function ko(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Lp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Al() {
  return this.__zoom || pa;
}
function zp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Dp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ap(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Oc() {
  var e = Hp, t = Lp, n = Ap, r = zp, o = Dp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xh, c = fa("start", "zoom", "end"), u, d, v, g = 500, p = 150, x = 0, b = 10;
  function $(S) {
    S.property("__zoom", Al).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, _, M, N) {
    var T = S.selection ? S.selection() : S;
    T.property("__zoom", Al), S !== T ? k(S, _, M, N) : T.interrupt().each(function() {
      P(this, arguments).event(N).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, $.scaleBy = function(S, _, M, N) {
    $.scaleTo(S, function() {
      var T = this.__zoom.k, V = typeof _ == "function" ? _.apply(this, arguments) : _;
      return T * V;
    }, M, N);
  }, $.scaleTo = function(S, _, M, N) {
    $.transform(S, function() {
      var T = t.apply(this, arguments), V = this.__zoom, I = M == null ? m(T) : typeof M == "function" ? M.apply(this, arguments) : M, X = V.invert(I), W = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(C(h(V, W), I, X), T, a);
    }, M, N);
  }, $.translateBy = function(S, _, M, N) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, N);
  }, $.translateTo = function(S, _, M, N, T) {
    $.transform(S, function() {
      var V = t.apply(this, arguments), I = this.__zoom, X = N == null ? m(V) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(pa.translate(X[0], X[1]).scale(I.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), V, a);
    }, N, T);
  };
  function h(S, _) {
    return _ = Math.max(i[0], Math.min(i[1], _)), _ === S.k ? S : new Bn(_, S.x, S.y);
  }
  function C(S, _, M) {
    var N = _[0] - M[0] * S.k, T = _[1] - M[1] * S.k;
    return N === S.x && T === S.y ? S : new Bn(S.k, N, T);
  }
  function m(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, _, M, N) {
    S.on("start.zoom", function() {
      P(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var T = this, V = arguments, I = P(T, V).event(N), X = t.apply(T, V), W = M == null ? m(X) : typeof M == "function" ? M.apply(T, V) : M, U = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), Q = T.__zoom, K = typeof _ == "function" ? _.apply(T, V) : _, ce = l(Q.invert(W).concat(U / Q.k), K.invert(W).concat(U / K.k));
      return function(ue) {
        if (ue === 1) ue = K;
        else {
          var ye = ce(ue), se = U / ye[2];
          ue = new Bn(se, W[0] - ye[0] * se, W[1] - ye[1] * se);
        }
        I.zoom(null, ue);
      };
    });
  }
  function P(S, _, M) {
    return !M && S.__zooming || new E(S, _);
  }
  function E(S, _) {
    this.that = S, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, _), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, _) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var _ = dn(this.that).datum();
      c.call(
        S,
        this.that,
        new Np(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: c
        }),
        _
      );
    }
  };
  function H(S, ..._) {
    if (!e.apply(this, arguments)) return;
    var M = P(this, _).event(S), N = this.__zoom, T = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), V = yn(S);
    if (M.wheel)
      (M.mouse[0][0] !== V[0] || M.mouse[0][1] !== V[1]) && (M.mouse[1] = N.invert(M.mouse[0] = V)), clearTimeout(M.wheel);
    else {
      if (N.k === T) return;
      M.mouse = [V, N.invert(V)], ki(this), M.start();
    }
    ko(S), M.wheel = setTimeout(I, p), M.zoom("mouse", n(C(h(N, T), M.mouse[0], M.mouse[1]), M.extent, a));
    function I() {
      M.wheel = null, M.end();
    }
  }
  function O(S, ..._) {
    if (v || !e.apply(this, arguments)) return;
    var M = S.currentTarget, N = P(this, _, !0).event(S), T = dn(S.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), V = yn(S, M), I = S.clientX, X = S.clientY;
    hc(S.view), za(S), N.mouse = [V, this.__zoom.invert(V)], ki(this), N.start();
    function W(Q) {
      if (ko(Q), !N.moved) {
        var K = Q.clientX - I, ce = Q.clientY - X;
        N.moved = K * K + ce * ce > x;
      }
      N.event(Q).zoom("mouse", n(C(N.that.__zoom, N.mouse[0] = yn(Q, M), N.mouse[1]), N.extent, a));
    }
    function U(Q) {
      T.on("mousemove.zoom mouseup.zoom", null), pc(Q.view, N.moved), ko(Q), N.event(Q).end();
    }
  }
  function D(S, ..._) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, N = yn(S.changedTouches ? S.changedTouches[0] : S, this), T = M.invert(N), V = M.k * (S.shiftKey ? 0.5 : 2), I = n(C(h(M, V), N, T), t.apply(this, _), a);
      ko(S), s > 0 ? dn(this).transition().duration(s).call(k, I, N, S) : dn(this).call($.transform, I, N, S);
    }
  }
  function q(S, ..._) {
    if (e.apply(this, arguments)) {
      var M = S.touches, N = M.length, T = P(this, _, S.changedTouches.length === N).event(S), V, I, X, W;
      for (za(S), I = 0; I < N; ++I)
        X = M[I], W = yn(X, this), W = [W, this.__zoom.invert(W), X.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== W[2] && (T.touch1 = W, T.taps = 0) : (T.touch0 = W, V = !0, T.taps = 1 + !!u);
      u && (u = clearTimeout(u)), V && (T.taps < 2 && (d = W[0], u = setTimeout(function() {
        u = null;
      }, g)), ki(this), T.start());
    }
  }
  function z(S, ..._) {
    if (this.__zooming) {
      var M = P(this, _).event(S), N = S.changedTouches, T = N.length, V, I, X, W;
      for (ko(S), V = 0; V < T; ++V)
        I = N[V], X = yn(I, this), M.touch0 && M.touch0[2] === I.identifier ? M.touch0[0] = X : M.touch1 && M.touch1[2] === I.identifier && (M.touch1[0] = X);
      if (I = M.that.__zoom, M.touch1) {
        var U = M.touch0[0], Q = M.touch0[1], K = M.touch1[0], ce = M.touch1[1], ue = (ue = K[0] - U[0]) * ue + (ue = K[1] - U[1]) * ue, ye = (ye = ce[0] - Q[0]) * ye + (ye = ce[1] - Q[1]) * ye;
        I = h(I, Math.sqrt(ue / ye)), X = [(U[0] + K[0]) / 2, (U[1] + K[1]) / 2], W = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (M.touch0) X = M.touch0[0], W = M.touch0[1];
      else return;
      M.zoom("touch", n(C(I, X, W), M.extent, a));
    }
  }
  function R(S, ..._) {
    if (this.__zooming) {
      var M = P(this, _).event(S), N = S.changedTouches, T = N.length, V, I;
      for (za(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), V = 0; V < T; ++V)
        I = N[V], M.touch0 && M.touch0[2] === I.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === I.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (I = yn(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < b)) {
        var X = dn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : mi(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : mi(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : mi(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : mi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
  }, $.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(S) {
    return arguments.length ? (n = S, $) : n;
  }, $.duration = function(S) {
    return arguments.length ? (s = +S, $) : s;
  }, $.interpolate = function(S) {
    return arguments.length ? (l = S, $) : l;
  }, $.on = function() {
    var S = c.on.apply(c, arguments);
    return S === c ? $ : S;
  }, $.clickDistance = function(S) {
    return arguments.length ? (x = (S = +S) * S, $) : Math.sqrt(x);
  }, $.tapDistance = function(S) {
    return arguments.length ? (b = +S, $) : b;
  }, $;
}
const ro = {
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
}, Zi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Vr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Vr || (Vr = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var Bi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Bi || (Bi = {}));
const ss = {
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
var Wr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Wr || (Wr = {}));
var Bo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Bo || (Bo = {}));
var Le;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Le || (Le = {}));
const Rl = {
  [Le.Left]: Le.Right,
  [Le.Right]: Le.Left,
  [Le.Top]: Le.Bottom,
  [Le.Bottom]: Le.Top
};
function Rp(e, t) {
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
function Il(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Ip(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const qp = (e) => "id" in e && "source" in e && "target" in e, Zp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Bp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : Zs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? ji(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ma(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ya(n);
}, ei = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ji(r);
      n = ma(n, o);
    }
  }), ya(n);
}, Nc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...ti(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: u, selectable: d = !0, hidden: v = !1 } = c;
    if (a && !d || v)
      continue;
    const g = u.width ?? c.width ?? c.initialWidth ?? null, p = u.height ?? c.height ?? c.initialHeight ?? null, x = jo(s, io(c)), b = (g ?? 0) * (p ?? 0), $ = i && x > 0;
    (!c.internals.handleBounds || $ || x >= b || c.dragging) && l.push(c);
  }
  return l;
}, ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function jp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Xp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = jp(e, a), l = ei(s), c = js(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(c, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Yp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: c } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, u = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", ro.error005());
    else {
      const g = s.measured.width, p = s.measured.height;
      g && p && (d = [
        [l, c],
        [l + g, c + p]
      ]);
    }
  else s && ao(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + c],
    [a.extent[1][0] + l, a.extent[1][1] + c]
  ]);
  const v = ao(d) ? Or(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", ro.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * u[0],
      y: v.y - c + (a.measured.height ?? 0) * u[1]
    },
    positionAbsolute: v
  };
}
async function Hc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const v = i.has(d.id), g = !v && d.parentId && a.find((p) => p.id === d.parentId);
    (v || g) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = ls(a, l);
  for (const d of l)
    s.has(d.id) && !c.find((v) => v.id === d.id) && c.push(d);
  if (!o)
    return {
      edges: c,
      nodes: a
    };
  const u = await o({
    nodes: a,
    edges: c
  });
  return typeof u == "boolean" ? u ? { edges: c, nodes: a } : { edges: [], nodes: [] } : u;
}
const oo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Or = (e = { x: 0, y: 0 }, t, n) => ({
  x: oo(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: oo(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Lc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Or(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const ql = (e, t, n) => e < t ? oo(Math.abs(e - t), 1, t) / t : e > n ? -oo(Math.abs(e - n), 1, t) / t : 0, zc = (e, t, n = 15, r = 40) => {
  const o = ql(e.x, r, t.width - r) * n, i = ql(e.y, r, t.height - r) * n;
  return [o, i];
}, ma = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), us = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ya = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), io = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Zs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ji = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Zs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Dc = (e, t) => ya(ma(us(e), us(t))), jo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => jn(e.width) && jn(e.height) && jn(e.x) && jn(e.y), jn = (e) => !isNaN(e) && isFinite(e), Wp = (e, t) => {
}, Bs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ti = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Bs(s, a) : s;
}, Xi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function qr(e, t) {
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
function Kp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = qr(e, n), o = qr(e, t);
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
    const r = qr(e.top ?? e.y ?? 0, n), o = qr(e.bottom ?? e.y ?? 0, n), i = qr(e.left ?? e.x ?? 0, t), a = qr(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Fp(e, t, n, r, o, i) {
  const { x: a, y: s } = Xi(e, [t, n, r]), { x: l, y: c } = Xi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), u = o - l, d = i - c;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(u),
    bottom: Math.floor(d)
  };
}
const js = (e, t, n, r, o, i) => {
  const a = Kp(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, c = Math.min(s, l), u = oo(c, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, g = t / 2 - d * u, p = n / 2 - v * u, x = Fp(e, g, p, u, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: g - b.left + b.right,
    y: p - b.top + b.bottom,
    zoom: u
  };
}, Yi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ao(e) {
  return e !== void 0 && e !== "parent";
}
function yr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ac(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Gp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Up() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function Da(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Wn(e), s = ti({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: c } = n ? Bs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: c,
    ...s
  };
}
const Rc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Jp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Qp = ["INPUT", "SELECT", "TEXTAREA"];
function e0(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Qp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ic = (e) => "clientX" in e, Wn = (e, t) => {
  var n, r;
  const o = Ic(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Bl = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((a) => {
    const s = a.getBoundingClientRect();
    return {
      id: a.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: a.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...Rc(a)
    };
  });
};
function t0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, u = Math.abs(l - e), d = Math.abs(c - t);
  return [l, c, u, d];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function jl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Le.Left:
      return [t - yi(t - r, i), n];
    case Le.Right:
      return [t + yi(r - t, i), n];
    case Le.Top:
      return [t, n - yi(n - o, i)];
    case Le.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function qc({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: i = Le.Top, curvature: a = 0.25 }) {
  const [s, l] = jl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [c, u] = jl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, v, g, p] = t0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: u
  });
  return [
    `M${e},${t} C${s},${l} ${c},${u} ${r},${o}`,
    d,
    v,
    g,
    p
  ];
}
function Zc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function n0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function r0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ma(ji(e), ji(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return jo(a, ya(i)) > 0;
}
const o0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, i0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), a0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return qp(e) ? n = { ...e } : n = {
    ...e,
    id: o0(e)
  }, i0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function cs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Zc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Xl = {
  [Le.Left]: { x: -1, y: 0 },
  [Le.Right]: { x: 1, y: 0 },
  [Le.Top]: { x: 0, y: -1 },
  [Le.Bottom]: { x: 0, y: 1 }
}, s0 = ({ source: e, sourcePosition: t = Le.Bottom, target: n }) => t === Le.Left || t === Le.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Yl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function l0({ source: e, sourcePosition: t = Le.Bottom, target: n, targetPosition: r = Le.Top, center: o, offset: i }) {
  const a = Xl[t], s = Xl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, c = { x: n.x + s.x * i, y: n.y + s.y * i }, u = s0({
    source: l,
    sourcePosition: t,
    target: c
  }), d = u.x !== 0 ? "x" : "y", v = u[d];
  let g = [], p, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, C, m, k] = Zc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, x = o.y ?? C;
    const P = [
      { x: p, y: l.y },
      { x: p, y: c.y }
    ], E = [
      { x: l.x, y: x },
      { x: c.x, y: x }
    ];
    a[d] === v ? g = d === "x" ? P : E : g = d === "x" ? E : P;
  } else {
    const P = [{ x: l.x, y: c.y }], E = [{ x: c.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? E : P : g = a.y === v ? P : E, t === r) {
      const z = Math.abs(e[d] - n[d]);
      if (z <= i) {
        const R = Math.min(i - 1, i - z);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * R : $[d] = (c[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const z = d === "x" ? "y" : "x", R = a[d] === s[z], S = l[z] > c[z], _ = l[z] < c[z];
      (a[d] === 1 && (!R && S || R && _) || a[d] !== 1 && (!R && _ || R && S)) && (g = d === "x" ? P : E);
    }
    const H = { x: l.x + b.x, y: l.y + b.y }, O = { x: c.x + $.x, y: c.y + $.y }, D = Math.max(Math.abs(H.x - g[0].x), Math.abs(O.x - g[0].x)), q = Math.max(Math.abs(H.y - g[0].y), Math.abs(O.y - g[0].y));
    D >= q ? (p = (H.x + O.x) / 2, x = g[0].y) : (p = g[0].x, x = (H.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...g,
    { x: c.x + $.x, y: c.y + $.y },
    n
  ], p, x, m, k];
}
function u0(e, t, n, r) {
  const o = Math.min(Yl(e, t) / 2, Yl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const c = e.x < n.x ? -1 : 1, u = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${a}Q ${i},${a} ${i},${a + o * u}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Wi({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: i = Le.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: c = 20 }) {
  const [u, d, v, g, p] = l0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: c
  });
  return [u.reduce((x, b, $) => {
    let h = "";
    return $ > 0 && $ < u.length - 1 ? h = u0(u[$ - 1], b, u[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
  }, ""), d, v, g, p];
}
function Wl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function c0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Wl(n) || !Wl(r))
    return null;
  const o = n.internals.handleBounds || Kl(n.handles), i = r.internals.handleBounds || Kl(r.handles), a = Fl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Fl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", ro.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Le.Bottom, c = (s == null ? void 0 : s.position) || Le.Top, u = Xo(n, a, l), d = Xo(r, s, c);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: c
  };
}
function Kl(e) {
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
function Xo(e, t, n = Le.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Le.Top:
      return { x: o + a / 2, y: i };
    case Le.Right:
      return { x: o + a, y: i + s / 2 };
    case Le.Bottom:
      return { x: o + a / 2, y: i + s };
    case Le.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Fl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ds(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function d0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = ds(l, t);
      i.has(c) || (a.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function f0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case Le.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Le.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Le.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Xs = {
  nodeOrigin: [0, 0],
  nodeExtent: Zi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, v0 = {
  ...Xs,
  checkEquality: !0
};
function Ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function g0(e, t, n) {
  const r = Ys(Xs, n);
  for (const o of e.values())
    if (o.parentId)
      Ws(o, e, t, r);
    else {
      const i = Qo(o, r.nodeOrigin), a = ao(o.extent) ? o.extent : r.nodeExtent, s = Or(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bc(e, t, n, r) {
  var o, i;
  const a = Ys(v0, r);
  let s = e.length > 0;
  const l = new Map(t), c = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = l.get(u.id);
    if (a.checkEquality && u === (d == null ? void 0 : d.internals.userNode))
      t.set(u.id, d);
    else {
      const v = Qo(u, a.nodeOrigin), g = ao(u.extent) ? u.extent : a.nodeExtent, p = Or(v, g, yr(u));
      d = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: jc(u, c),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Ws(d, t, n, r);
  }
  return s;
}
function h0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ws(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ys(Xs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  h0(e, n);
  const c = o ? 1e3 : 0, { x: u, y: d, z: v } = p0(e, l, i, a, c), { positionAbsolute: g } = e.internals, p = u !== g.x || d !== g.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: u, y: d } : g,
      z: v
    }
  });
}
function jc(e, t) {
  return (jn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function p0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Qo(e, n), c = ao(e.extent) ? Or(l, e.extent, s) : l;
  let u = Or({ x: i + c.x, y: a + c.y }, r, s);
  e.extent === "parent" && (u = Lc(u, s, t));
  const d = jc(e, o), v = t.internals.z ?? 0;
  return {
    x: u.x,
    y: u.y,
    z: v > d ? v : d
  };
}
function m0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const c = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? io(l), u = Dc(c, s.rect);
    a.set(s.parentId, { expandedRect: u, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, c) => {
    var u;
    const d = l.internals.positionAbsolute, v = yr(l), g = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), h = (b - v.width) * g[0], C = ($ - v.height) * g[1];
    (p > 0 || x > 0 || h || C) && (i.push({
      id: c,
      type: "position",
      position: {
        x: l.position.x - p + h,
        y: l.position.y - x + C
      }
    }), (u = n.get(c)) == null || u.forEach((m) => {
      e.some((k) => k.id === m.id) || i.push({
        id: m.id,
        type: "position",
        position: {
          x: m.position.x + p,
          y: m.position.y + x
        }
      });
    })), (v.width < s.width || v.height < s.height || p || x) && i.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (p ? g[0] * p - h : 0),
        height: $ + (x ? g[1] * x - C : 0)
      }
    });
  }), i;
}
function y0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], c = window.getComputedStyle(a), { m22: u } = new window.DOMMatrixReadOnly(c.transform), d = [];
  for (const v of e.values()) {
    const g = t.get(v.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const p = Rc(v.nodeElement), x = g.measured.width !== p.width || g.measured.height !== p.height;
    if (p.width && p.height && (x || !g.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = ao(g.extent) ? g.extent : i;
      let { positionAbsolute: h } = g.internals;
      g.parentId && g.extent === "parent" ? h = Lc(h, p, t.get(g.parentId)) : $ && (h = Or(h, $, p));
      const C = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Bl("source", v.nodeElement, b, u, g.id),
            target: Bl("target", v.nodeElement, b, u, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && Ws(C, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: io(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const v = m0(d, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function w0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const a = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), s = !!a && (a.x !== n[0] || a.y !== n[1] || a.k !== n[2]);
  return Promise.resolve(s);
}
function Gl(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const l = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, l.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const c = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, c.set(n, t));
  }
}
function Xc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, c = `${o}-${a}--${i}-${s}`, u = `${i}-${s}--${o}-${a}`;
    Gl("source", l, u, e, o, a), Gl("target", l, c, e, i, s), t.set(r.id, r);
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
function Yc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Yc(n, t) : !1;
}
function Ul(e, t, n) {
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
function x0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !Yc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
      const s = e.get(i);
      s && o.set(i, {
        id: i,
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
function Aa({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, a;
  const s = [];
  for (const [c, u] of t) {
    const d = (o = n.get(c)) == null ? void 0 : o.internals.userNode;
    d && s.push({
      ...d,
      position: u.position,
      dragging: r
    });
  }
  if (!e)
    return [s[0], s];
  const l = (i = n.get(e)) == null ? void 0 : i.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function $0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, u = null, d = !1, v = null, g = !1;
  function p({ noDragClassName: b, handleSelector: $, domNode: h, isSelectable: C, nodeId: m, nodeClickDistance: k = 0 }) {
    v = dn(h);
    function P({ x: D, y: q }, z) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: _, snapToGrid: M, nodeOrigin: N, onNodeDrag: T, onSelectionDrag: V, onError: I, updateNodePositions: X } = t();
      i = { x: D, y: q };
      let W = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const Q = ei(s);
        U = us(Q);
      }
      for (const [Q, K] of s) {
        if (!R.has(Q))
          continue;
        let ce = { x: D - K.distance.x, y: q - K.distance.y };
        M && (ce = Bs(ce, _));
        let ue = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !K.extent) {
          const { positionAbsolute: _e } = K.internals, xe = _e.x - U.x + S[0][0], Oe = _e.x + K.measured.width - U.x2 + S[1][0], le = _e.y - U.y + S[0][1], J = _e.y + K.measured.height - U.y2 + S[1][1];
          ue = [
            [xe, le],
            [Oe, J]
          ];
        }
        const { position: ye, positionAbsolute: se } = Yp({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: R,
          nodeExtent: ue,
          nodeOrigin: N,
          onError: I
        });
        W = W || K.position.x !== ye.x || K.position.y !== ye.y, K.position = ye, K.internals.positionAbsolute = se;
      }
      if (W && (X(s, !0), z && (r || T || !m && V))) {
        const [Q, K] = Aa({
          nodeId: m,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(z, s, Q, K), T == null || T(z, Q, K), m || V == null || V(z, K);
      }
    }
    async function E() {
      if (!u)
        return;
      const { transform: D, panBy: q, autoPanSpeed: z, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, _] = zc(c, u, z);
      (S !== 0 || _ !== 0) && (i.x = (i.x ?? 0) - S / D[2], i.y = (i.y ?? 0) - _ / D[2], await q({ x: S, y: _ }) && P(i, null)), a = requestAnimationFrame(E);
    }
    function H(D) {
      var q;
      const { nodeLookup: z, multiSelectionActive: R, nodesDraggable: S, transform: _, snapGrid: M, snapToGrid: N, selectNodesOnDrag: T, onNodeDragStart: V, onSelectionDragStart: I, unselectNodesAndEdges: X } = t();
      d = !0, (!T || !C) && !R && m && ((q = z.get(m)) != null && q.selected || X()), C && T && m && (e == null || e(m));
      const W = Da(D.sourceEvent, { transform: _, snapGrid: M, snapToGrid: N, containerBounds: u });
      if (i = W, s = x0(z, S, W, m), s.size > 0 && (n || V || !m && I)) {
        const [U, Q] = Aa({
          nodeId: m,
          dragItems: s,
          nodeLookup: z
        });
        n == null || n(D.sourceEvent, s, U, Q), V == null || V(D.sourceEvent, U, Q), m || I == null || I(D.sourceEvent, Q);
      }
    }
    const O = Fg().clickDistance(k).on("start", (D) => {
      const { domNode: q, nodeDragThreshold: z, transform: R, snapGrid: S, snapToGrid: _ } = t();
      u = (q == null ? void 0 : q.getBoundingClientRect()) || null, g = !1, z === 0 && H(D), i = Da(D.sourceEvent, { transform: R, snapGrid: S, snapToGrid: _, containerBounds: u }), c = Wn(D.sourceEvent, u);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: q, transform: z, snapGrid: R, snapToGrid: S, nodeDragThreshold: _, nodeLookup: M } = t(), N = Da(D.sourceEvent, { transform: z, snapGrid: R, snapToGrid: S, containerBounds: u });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !M.has(m)) && (g = !0), !g) {
        if (!l && q && d && (l = !0, E()), !d) {
          const T = N.xSnapped - (i.x ?? 0), V = N.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + V * V) > _ && H(D);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && d && (c = Wn(D.sourceEvent, u), P(N, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: z, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (z(s, !1), o || R || !m && S) {
          const [_, M] = Aa({
            nodeId: m,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, _, M), R == null || R(D.sourceEvent, _, M), m || S == null || S(D.sourceEvent, M);
        }
      }
    }).filter((D) => {
      const q = D.target;
      return !D.button && (!b || !Ul(q, `.${b}`, h)) && (!$ || Ul(q, $, h));
    });
    v.call(O);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
    destroy: x
  };
}
function C0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    jo(o, io(i)) > 0 && r.push(i);
  return r;
}
const _0 = 250;
function k0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = C0(e, n, t + _0);
  for (const c of l) {
    const u = [...((o = c.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = c.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of u) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: g } = Xo(c, d, d.position, !0), p = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
      p > t || (p < s ? (a = [{ ...d, x: v, y: g }], s = p) : p === s && a.push({ ...d, x: v, y: g }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const c = r.type === "source" ? "target" : "source";
    return a.find((u) => u.type === c) ?? a[0];
  }
  return a[0];
}
function Wc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const c = r.get(e);
  if (!c)
    return null;
  const u = o === "strict" ? (a = c.internals.handleBounds) == null ? void 0 : a[t] : [...((s = c.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = c.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? u == null ? void 0 : u.find((v) => v.id === n) : u == null ? void 0 : u[0]) ?? null;
  return d && i ? { ...d, ...Xo(c, d, d.position, !0) } : d;
}
function Kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function S0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Fc = () => !0;
function E0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: c, autoPanOnConnect: u, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: b, isValidConnection: $ = Fc, onReconnectEnd: h, updateConnection: C, getTransform: m, getFromHandle: k, autoPanSpeed: P }) {
  const E = Jp(e.target);
  let H = 0, O;
  const { x: D, y: q } = Wn(e), z = E == null ? void 0 : E.elementFromPoint(D, q), R = Kc(i, z), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !R)
    return;
  const _ = Wc(o, R, r, l, t);
  if (!_)
    return;
  let M = Wn(e, S), N = !1, T = null, V = !1, I = null;
  function X() {
    if (!u || !S)
      return;
    const [ye, se] = zc(M, S, P);
    v({ x: ye, y: se }), H = requestAnimationFrame(X);
  }
  const W = {
    ..._,
    nodeId: o,
    type: R,
    position: _.position
  }, U = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Xo(U, W, Le.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: U,
    to: M,
    toHandle: null,
    toPosition: Rl[W.position],
    toNode: null
  };
  C(Q);
  let K = Q;
  p == null || p(e, { nodeId: o, handleId: r, handleType: R });
  function ce(ye) {
    if (!k() || !W) {
      ue(ye);
      return;
    }
    const se = m();
    M = Wn(ye, S), O = k0(ti(M, se, !1, [1, 1]), n, l, W), N || (X(), N = !0);
    const _e = Gc(ye, {
      handle: O,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: E,
      lib: c,
      flowId: d,
      nodeLookup: l
    });
    I = _e.handleDomNode, T = _e.connection, V = S0(!!O, _e.isValid);
    const xe = {
      // from stays the same
      ...K,
      isValid: V,
      to: O && V ? Xi({ x: O.x, y: O.y }, se) : M,
      toHandle: _e.toHandle,
      toPosition: V && _e.toHandle ? _e.toHandle.position : Rl[W.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    V && O && K.toHandle && xe.toHandle && K.toHandle.type === xe.toHandle.type && K.toHandle.nodeId === xe.toHandle.nodeId && K.toHandle.id === xe.toHandle.id && K.to.x === xe.to.x && K.to.y === xe.to.y || (C(xe), K = xe);
  }
  function ue(ye) {
    (O || I) && T && V && (x == null || x(T));
    const { inProgress: se, ..._e } = K, xe = {
      ..._e,
      toPosition: K.toHandle ? K.toPosition : null
    };
    b == null || b(ye, xe), i && (h == null || h(ye, xe)), g(), cancelAnimationFrame(H), N = !1, V = !1, T = null, I = null, E.removeEventListener("mousemove", ce), E.removeEventListener("mouseup", ue), E.removeEventListener("touchmove", ce), E.removeEventListener("touchend", ue);
  }
  E.addEventListener("mousemove", ce), E.addEventListener("mouseup", ue), E.addEventListener("touchmove", ce), E.addEventListener("touchend", ue);
}
function Gc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: c = Fc, nodeLookup: u }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Wn(e), x = a.elementFromPoint(g, p), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const h = Kc(void 0, b), C = b.getAttribute("data-nodeid"), m = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), P = b.classList.contains("connectableend");
    if (!C || !h)
      return $;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? m : o,
      target: d ? r : C,
      targetHandle: d ? o : m
    };
    $.connection = E;
    const H = k && P && (n === Vr.Strict ? d && h === "source" || !d && h === "target" : C !== r || m !== o);
    $.isValid = H && c(E), $.toHandle = Wc(C, h, m, u, n, !1);
  }
  return $;
}
const M0 = {
  onPointerDown: E0,
  isValid: Gc
};
function P0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = dn(e);
  function i({ translateExtent: s, width: l, height: c, zoomStep: u = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const p = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * u, P = m[2] * Math.pow(2, k);
      t.scaleTo(P);
    };
    let x = [0, 0];
    const b = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (x = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, $ = (C) => {
      const m = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], P = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const E = r() * Math.max(m[2], Math.log(m[2])) * (g ? -1 : 1), H = {
        x: m[0] - P[0] * E,
        y: m[1] - P[1] * E
      }, O = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: m[2]
      }, O, s);
    }, h = Oc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? p : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: yn
  };
}
const T0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, wa = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ra = ({ x: e, y: t, zoom: n }) => pa.translate(e, t).scale(n), Br = (e, t) => e.target.closest(`.${t}`), Uc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ia = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Jc = (e) => {
  const t = e.ctrlKey && Yi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function V0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: c }) {
  return (u) => {
    if (Br(u, t))
      return !1;
    u.preventDefault(), u.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (u.ctrlKey && a) {
      const b = yn(u), $ = Jc(u), h = d * Math.pow(2, $);
      r.scaleTo(n, h, b, u);
      return;
    }
    const v = u.deltaMode === 1 ? 20 : 1;
    let g = o === cr.Vertical ? 0 : u.deltaX * v, p = o === cr.Horizontal ? 0 : u.deltaY * v;
    !Yi() && u.shiftKey && o !== cr.Vertical && (g = u.deltaY * v, p = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = wa(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(u, x)), e.isPanScrolling && (l == null || l(u, x), e.panScrollTimeout = setTimeout(() => {
      c == null || c(u, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function O0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Br(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function N0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = wa(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function H0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Uc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, wa(i.transform)));
  };
}
function L0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Uc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && T0(e.prevViewport, a.transform))) {
      const l = wa(a.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(a.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function z0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: c }) {
  return (u) => {
    var d;
    const v = e || t, g = n && u.ctrlKey;
    if (u.button === 1 && u.type === "mousedown" && (Br(u, `${c}-flow__node`) || Br(u, `${c}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Br(u, s) && u.type === "wheel" || Br(u, l) && (u.type !== "wheel" || o && u.type === "wheel" && !e) || !n && u.ctrlKey && u.type === "wheel")
      return !1;
    if (!n && u.type === "touchstart" && ((d = u.touches) == null ? void 0 : d.length) > 1)
      return u.preventDefault(), !1;
    if (!v && !o && !g && u.type === "wheel" || !r && (u.type === "mousedown" || u.type === "touchstart") || Array.isArray(r) && !r.includes(u.button) && u.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(u.button) || !u.button || u.button <= 1;
    return (!u.ctrlKey || u.type === "wheel") && p;
  };
}
function D0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: c }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), v = Oc().clickDistance(!jn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = dn(e).call(v);
  C({
    x: i.x,
    y: i.y,
    zoom: oo(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  v.wheelDelta(Jc);
  function b(z, R) {
    return g ? new Promise((S) => {
      v == null || v.transform(Ia(g, R == null ? void 0 : R.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: z, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: _, panOnScroll: M, panOnDrag: N, panOnScrollMode: T, panOnScrollSpeed: V, preventScrolling: I, zoomOnPinch: X, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: Q, lib: K, onTransformChange: ce }) {
    _ && !u.isZoomingOrPanning && h();
    const ue = M && !Q && !_ ? V0({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: T,
      panOnScrollSpeed: V,
      zoomOnPinch: X,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : O0({
      noWheelClassName: z,
      preventScrolling: I,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", ue, { passive: !1 }), !_) {
      const se = N0({
        zoomPanValues: u,
        onDraggingChange: c,
        onPanZoomStart: s
      });
      v.on("start", se);
      const _e = H0({
        zoomPanValues: u,
        panOnDrag: N,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ce
      });
      v.on("zoom", _e);
      const xe = L0({
        zoomPanValues: u,
        panOnDrag: N,
        panOnScroll: M,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      v.on("end", xe);
    }
    const ye = z0({
      zoomActivationKeyPressed: Q,
      panOnDrag: N,
      zoomOnScroll: W,
      panOnScroll: M,
      zoomOnDoubleClick: U,
      zoomOnPinch: X,
      userSelectionActive: _,
      noPanClassName: R,
      noWheelClassName: z,
      lib: K
    });
    v.filter(ye), U ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(z, R, S) {
    const _ = Ra(z), M = v == null ? void 0 : v.constrain()(_, R, S);
    return M && await b(M), new Promise((N) => N(M));
  }
  async function m(z, R) {
    const S = Ra(z);
    return await b(S, R), new Promise((_) => _(S));
  }
  function k(z) {
    if (g) {
      const R = Ra(z), S = g.property("__zoom");
      (S.k !== z.zoom || S.x !== z.x || S.y !== z.y) && (v == null || v.transform(g, R, null, { sync: !0 }));
    }
  }
  function P() {
    const z = g ? Vc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function E(z, R) {
    return g ? new Promise((S) => {
      v == null || v.scaleTo(Ia(g, R == null ? void 0 : R.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function H(z, R) {
    return g ? new Promise((S) => {
      v == null || v.scaleBy(Ia(g, R == null ? void 0 : R.duration, () => S(!0)), z);
    }) : Promise.resolve(!1);
  }
  function O(z) {
    v == null || v.scaleExtent(z);
  }
  function D(z) {
    v == null || v.translateExtent(z);
  }
  function q(z) {
    const R = !jn(z) || z < 0 ? 0 : z;
    v == null || v.clickDistance(R);
  }
  return {
    update: $,
    destroy: h,
    setViewport: m,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: E,
    scaleBy: H,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: q
  };
}
var Jl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Jl || (Jl = {}));
var A0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(U, "$connectable", n), i = () => oe(ye, "$connectionRadius", n), a = () => oe(ce, "$domNode", n), s = () => oe(ue, "$nodeLookup", n), l = () => oe(K, "$connectionMode", n), c = () => oe(xe, "$lib", n), u = () => oe(Ae, "$autoPanOnConnect", n), d = () => oe(Ve, "$flowId", n), v = () => oe(_e, "$isValidConnectionStore", n), g = () => oe(le, "$onedgecreate", n), p = () => oe(ge, "$onConnectAction", n), x = () => oe(he, "$onConnectStartAction", n), b = () => oe(fe, "$onConnectEndAction", n), $ = () => oe(se, "$viewport", n), h = () => oe(ct, "$connection", n), C = () => oe(Ke, "$edges", n), m = () => oe(qe, "$connectionLookup", n), k = /* @__PURE__ */ ae(), P = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), O = /* @__PURE__ */ ae(), D = /* @__PURE__ */ ae(), q = /* @__PURE__ */ ae(), z = /* @__PURE__ */ ae();
  let R = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), _ = w(t, "position", 28, () => Le.Top), M = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), T = w(t, "onconnect", 12, void 0), V = w(t, "ondisconnect", 12, void 0), I = w(t, "isConnectable", 12, void 0), X = w(t, "class", 12, void 0);
  const W = Mr("svelteflow__node_id"), U = Mr("svelteflow__node_connectable"), Q = et(), {
    connectionMode: K,
    domNode: ce,
    nodeLookup: ue,
    connectionRadius: ye,
    viewport: se,
    isValidConnection: _e,
    lib: xe,
    addEdge: Oe,
    onedgecreate: le,
    panBy: J,
    cancelConnection: Me,
    updateConnection: F,
    autoPanOnConnect: Ae,
    edges: Ke,
    connectionLookup: qe,
    onconnect: ge,
    onconnectstart: he,
    onconnectend: fe,
    flowId: Ve,
    connection: ct
  } = Q;
  function vt(De) {
    const st = Ic(De);
    (st && De.button === 0 || !st) && M0.onPointerDown(De, {
      handleId: f(E),
      nodeId: W,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: c(),
      autoPanOnConnect: u(),
      flowId: d(),
      isValidConnection: N() ?? v(),
      updateConnection: F,
      cancelConnection: Me,
      panBy: J,
      onConnect: (Be) => {
        var Ze;
        const lt = g() ? g()(Be) : Be;
        lt && (Oe(lt), (Ze = p()) == null || Ze(Be));
      },
      onConnectStart: (Be, Ze) => {
        var lt;
        (lt = x()) == null || lt(Be, {
          nodeId: Ze.nodeId,
          handleId: Ze.handleId,
          handleType: Ze.handleType
        });
      },
      onConnectEnd: (Be, Ze) => {
        var lt;
        (lt = b()) == null || lt(Be, Ze);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let te = /* @__PURE__ */ ae(null), Fe = /* @__PURE__ */ ae();
  be(() => re(S()), () => {
    ee(k, S() === "target");
  }), be(
    () => (re(I()), o()),
    () => {
      ee(P, I() !== void 0 ? I() : o());
    }
  ), be(() => re(R()), () => {
    ee(E, R() || null);
  }), be(
    () => (re(T()), re(V()), C(), m(), re(S()), re(R())),
    () => {
      (T() || V()) && (C(), ee(Fe, m().get(`${W}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), be(
    () => (f(te), f(Fe), re(V()), re(T())),
    () => {
      if (f(te) && !Rp(f(Fe), f(te))) {
        const De = f(Fe) ?? /* @__PURE__ */ new Map();
        Il(f(te), De, V()), Il(De, f(te), T());
      }
      ee(te, f(Fe) ?? /* @__PURE__ */ new Map());
    }
  ), be(() => h(), () => {
    ee(H, !!h().fromHandle);
  }), be(
    () => (h(), re(S()), f(E)),
    () => {
      var De, st, Be;
      ee(O, ((De = h().fromHandle) == null ? void 0 : De.nodeId) === W && ((st = h().fromHandle) == null ? void 0 : st.type) === S() && ((Be = h().fromHandle) == null ? void 0 : Be.id) === f(E));
    }
  ), be(
    () => (h(), re(S()), f(E)),
    () => {
      var De, st, Be;
      ee(D, ((De = h().toHandle) == null ? void 0 : De.nodeId) === W && ((st = h().toHandle) == null ? void 0 : st.type) === S() && ((Be = h().toHandle) == null ? void 0 : Be.id) === f(E));
    }
  ), be(
    () => (l(), h(), re(S()), f(E)),
    () => {
      var De, st, Be;
      ee(q, l() === Vr.Strict ? ((De = h().fromHandle) == null ? void 0 : De.type) !== S() : W !== ((st = h().fromHandle) == null ? void 0 : st.nodeId) || f(E) !== ((Be = h().fromHandle) == null ? void 0 : Be.id));
    }
  ), be(() => (f(D), h()), () => {
    ee(z, f(D) && h().isValid);
  }), Tt(), je();
  var de = A0();
  Se(de, "data-nodeid", W);
  let jt;
  var Xt = Y(de);
  Ht(Xt, t, "default", {}), j(de), Te(
    (De, st) => {
      Se(de, "data-handleid", f(E)), Se(de, "data-handlepos", _()), Se(de, "data-id", `${d() ?? ""}-${W ?? ""}-${(R() || "") ?? ""}-${S() ?? ""}`), jt = Lt(de, 1, De, null, jt, st), $t(de, M());
    },
    [
      () => Sn(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${_()}`,
        "nodrag",
        "nopan",
        _(),
        X()
      ])),
      () => ({
        valid: f(z),
        connectingto: f(D),
        connectingfrom: f(O),
        source: !f(k),
        target: f(k),
        connectablestart: f(P),
        connectableend: f(P),
        connectable: f(P),
        connectionindicator: f(P) && (!f(H) || f(q))
      })
    ],
    ke
  ), dt("mousedown", de, vt), dt("touchstart", de, vt), A(e, de);
  var ln = me({
    get id() {
      return R();
    },
    set id(De) {
      R(De), y();
    },
    get type() {
      return S();
    },
    set type(De) {
      S(De), y();
    },
    get position() {
      return _();
    },
    set position(De) {
      _(De), y();
    },
    get style() {
      return M();
    },
    set style(De) {
      M(De), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(De) {
      N(De), y();
    },
    get onconnect() {
      return T();
    },
    set onconnect(De) {
      T(De), y();
    },
    get ondisconnect() {
      return V();
    },
    set ondisconnect(De) {
      V(De), y();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(De) {
      I(De), y();
    },
    get class() {
      return X();
    },
    set class(De) {
      X(De), y();
    }
  });
  return r(), ln;
}
ve(
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
var R0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Ki(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), pe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  je();
  var a = R0(), s = Ce(a);
  const l = /* @__PURE__ */ ke(() => o() ?? Le.Top);
  gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var c = B(s), u = B(c);
  const d = /* @__PURE__ */ ke(() => i() ?? Le.Bottom);
  return gr(u, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Te(() => {
    var v;
    return xt(c, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), A(e, a), me({
    get data() {
      return r();
    },
    set data(v) {
      r(v), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(v) {
      o(v), y();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(v) {
      i(v), y();
    }
  });
}
ve(
  Ki,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var I0 = /* @__PURE__ */ ie(" <!>", 1);
function Qc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), pe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  je(), Re();
  var i = I0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ ke(() => o() ?? Le.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Te(() => {
    var c;
    return xt(a, `${((c = r()) == null ? void 0 : c.label) ?? ""} `);
  }), A(e, i), me({
    get data() {
      return r();
    },
    set data(c) {
      r(c), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c) {
      o(c), y();
    }
  });
}
ve(Qc, { data: {}, sourcePosition: {} }, [], [], !0);
var q0 = /* @__PURE__ */ ie(" <!>", 1);
function ed(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), pe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  je(), Re();
  var i = q0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ ke(() => o() ?? Le.Top);
  return gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Te(() => {
    var c;
    return xt(a, `${((c = r()) == null ? void 0 : c.label) ?? ""} `);
  }), A(e, i), me({
    get data() {
      return r();
    },
    set data(c) {
      r(c), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(c) {
      o(c), y();
    }
  });
}
ve(ed, { data: {}, targetPosition: {} }, [], [], !0);
function td(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, []);
}
ve(td, {}, [], [], !0);
function Ql(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Fi(e, { target: t, domNode: n }) {
  return Ql(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ql(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Z0 = /* @__PURE__ */ ie("<div><!></div>");
function nd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(i, "$domNode", n), { domNode: i } = et();
  je();
  var a = Z0(), s = Y(a);
  Ht(s, t, "default", {}), j(a), Nt(a, (l, c) => Fi == null ? void 0 : Fi(l, c), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), me(), r();
}
ve(nd, {}, ["default"], [], !0);
function rd() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = et();
  return (s) => {
    const l = G(e).get(s);
    if (!l) {
      console.warn("012", ro.error012(s));
      return;
    }
    (l.selectable || G(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && G(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var B0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function od(e, t) {
  pe(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = rd(), a = Mr("svelteflow__edge_id");
  return je(), nd(e, {
    children: (s, l) => {
      var c = B0();
      let u;
      var d = Y(c);
      Ht(d, t, "default", {}), j(c), Te(() => u = $t(c, "pointer-events: all;" + n(), u, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), dt("keyup", c, () => {
      }), dt("click", c, () => {
        a && i(a);
      }), A(s, c);
    },
    $$slots: { default: !0 }
  }), me({
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
ve(od, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var j0 = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), X0 = /* @__PURE__ */ Pe('<path fill="none"></path><!><!>', 1);
function ni(e, t) {
  pe(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), a = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), u = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), v = w(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  je();
  var p = X0(), x = Ce(p), b = B(x);
  {
    var $ = (m) => {
      var k = j0();
      Se(k, "stroke-opacity", 0), Se(k, "stroke-width", g), Te(() => Se(k, "d", r())), A(m, k);
    };
    $e(b, (m) => {
      g && m($);
    });
  }
  var h = B(b);
  {
    var C = (m) => {
      od(m, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, P) => {
          Re();
          var E = We();
          Te(() => xt(E, o())), A(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    $e(h, (m) => {
      o() && m(C);
    });
  }
  return Te(
    (m) => {
      Se(x, "id", n()), Se(x, "d", r()), Lt(x, 0, m), Se(x, "marker-start", l()), Se(x, "marker-end", c()), $t(x, u());
    },
    [
      () => Sn(Bt(["svelte-flow__edge-path", v()]))
    ],
    ke
  ), A(e, p), me({
    get id() {
      return n();
    },
    set id(m) {
      n(m), y();
    },
    get path() {
      return r();
    },
    set path(m) {
      r(m), y();
    },
    get label() {
      return o();
    },
    set label(m) {
      o(m), y();
    },
    get labelX() {
      return i();
    },
    set labelX(m) {
      i(m), y();
    },
    get labelY() {
      return a();
    },
    set labelY(m) {
      a(m), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(m) {
      s(m), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(m) {
      l(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get style() {
      return u();
    },
    set style(m) {
      u(m), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get class() {
      return v();
    },
    set class(m) {
      v(m), y();
    }
  });
}
ve(
  ni,
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
function Gi(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(g()), re(x()), re(b()), re(p()), re($())),
    () => {
      ((h) => (ee(r, h[0]), ee(o, h[1]), ee(i, h[2])))(qc({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), Tt(), je(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return c();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), y();
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
      return c();
    },
    set markerStart(h) {
      c(h), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(h) {
      u(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), y();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), y();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), y();
    }
  });
}
ve(
  Gi,
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
function id(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(g()), re(x()), re(b()), re(p()), re($())),
    () => {
      ((h) => (ee(r, h[0]), ee(o, h[1]), ee(i, h[2])))(Wi({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), Tt(), je(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return c();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), y();
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
      return c();
    },
    set markerStart(h) {
      c(h), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(h) {
      u(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), y();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), y();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), y();
    }
  });
}
ve(
  id,
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
function ad(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(g()), re(p()), re(x())),
    () => {
      ((b) => (ee(r, b[0]), ee(o, b[1]), ee(i, b[2])))(cs({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), Tt(), je(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return c();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(b) {
      a(b), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), y();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), y();
    },
    get markerStart() {
      return c();
    },
    set markerStart(b) {
      c(b), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(b) {
      u(b), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(b) {
      v(b), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(b) {
      g(b), y();
    },
    get targetX() {
      return p();
    },
    set targetX(b) {
      p(b), y();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), y();
    }
  });
}
ve(
  ad,
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
function sd(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), pe(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(g()), re(x()), re(b()), re(p()), re($())),
    () => {
      ((h) => (ee(r, h[0]), ee(o, h[1]), ee(i, h[2])))(Wi({
        sourceX: v(),
        sourceY: g(),
        targetX: x(),
        targetY: b(),
        sourcePosition: p(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), Tt(), je(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return c();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), y();
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
      return c();
    },
    set markerStart(h) {
      c(h), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(h) {
      u(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), y();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), y();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), y();
    }
  });
}
ve(
  sd,
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
function Y0(e, t) {
  const n = e.set, r = t.set, o = G(e), i = G(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const c = n(l);
    return a = c, r(a), c;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function W0(e, t) {
  const n = e.set, r = t.set;
  let o = G(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const K0 = (e, t, n) => {
  if (!n)
    return;
  const r = G(e), o = t.set, i = n.set;
  let a = n ? G(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, F0 = (e, t, n, r = [0, 0], o = Zi, i, a, s, l, c, u, d, v) => {
  const { subscribe: g, set: p, update: x } = Ee([]);
  let b = e, $ = {}, h = !0;
  const C = (E) => {
    const H = Bc(E, t, n, {
      elevateNodesOnSelect: h,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return G(i) && H && G(l) && (Xp({
      nodes: t,
      width: G(c),
      height: G(u),
      panZoom: G(l),
      minZoom: G(d),
      maxZoom: G(v)
    }, G(a)).then((O) => {
      var D;
      (D = G(s)) == null || D.resolve(O), s.set(null);
    }), i.set(!1), a.set(void 0)), b = E, p(b), b;
  }, m = (E) => C(E(b)), k = (E) => {
    $ = E;
  }, P = (E) => {
    h = E.elevateNodesOnSelect ?? h;
  };
  return C(b), {
    subscribe: g,
    set: C,
    update: m,
    setDefaultOptions: k,
    setOptions: P
  };
}, G0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Ee([]);
  let s = e, l = {};
  const c = (v) => {
    const g = l ? v.map((p) => ({ ...l, ...p })) : v;
    Xc(t, n, g), s = g, i(s);
  }, u = (v) => c(v(s)), d = (v) => {
    l = v;
  };
  return c(s), {
    subscribe: o,
    set: c,
    update: u,
    setDefaultOptions: d
  };
}, ld = {
  input: Qc,
  output: ed,
  default: Ki,
  group: td
}, ud = {
  straight: ad,
  smoothstep: id,
  default: Gi,
  step: sd
}, U0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? Zi;
  Bc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Xc(c, u, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const P = ei(s, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    g = js(P, n, r, 0.5, 2, 0.1);
  }
  const p = Ee(!1), x = Ee(void 0), b = Ee(null), $ = Ee(null), h = Ee(500), C = Ee(500), m = Ee(0.5), k = Ee(2);
  return {
    flowId: Ee(null),
    nodes: F0(e, s, l, d, v, p, x, b, $, h, C, m, k),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(u),
    visibleNodes: un([]),
    edges: G0(t, c, u),
    visibleEdges: un([]),
    connectionLookup: un(c),
    width: h,
    height: C,
    minZoom: m,
    maxZoom: k,
    nodeOrigin: Ee(d),
    nodeDragThreshold: Ee(1),
    nodeExtent: Ee(v),
    translateExtent: Ee(Zi),
    autoPanOnNodeDrag: Ee(!0),
    autoPanOnConnect: Ee(!0),
    fitViewQueued: p,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Ee(null),
    dragging: Ee(!1),
    selectionRect: Ee(null),
    selectionKeyPressed: Ee(!1),
    multiselectionKeyPressed: Ee(!1),
    deleteKeyPressed: Ee(!1),
    panActivationKeyPressed: Ee(!1),
    zoomActivationKeyPressed: Ee(!1),
    selectionRectMode: Ee(null),
    selectionMode: Ee(Bi.Partial),
    nodeTypes: Ee(ld),
    edgeTypes: Ee(ud),
    viewport: Ee(g),
    connectionMode: Ee(Vr.Strict),
    domNode: Ee(null),
    connection: un(ss),
    connectionLineType: Ee(Wr.Bezier),
    connectionRadius: Ee(20),
    isValidConnection: Ee(() => !0),
    nodesDraggable: Ee(!0),
    nodesConnectable: Ee(!0),
    elementsSelectable: Ee(!0),
    selectNodesOnDrag: Ee(!0),
    markers: un([]),
    defaultMarkerColor: Ee("#b1b1b7"),
    lib: un("svelte"),
    onlyRenderVisibleElements: Ee(!1),
    onerror: Ee(Wp),
    ondelete: Ee(void 0),
    onedgecreate: Ee(void 0),
    onconnect: Ee(void 0),
    onconnectstart: Ee(void 0),
    onconnectend: Ee(void 0),
    onbeforedelete: Ee(void 0),
    nodesInitialized: Ee(!1),
    edgesInitialized: Ee(!1),
    viewportInitialized: Ee(!1),
    initialized: un(!1)
  };
};
function J0(e) {
  const t = ur([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const c = r.get(l.source), u = r.get(l.target);
    return c && u && r0({
      sourceNode: c,
      targetNode: u,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return ur([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), c = r.get(s.target);
    if (!l || !c)
      return a;
    const u = c0({
      id: s.id,
      sourceNode: l,
      targetNode: c,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return u && a.push({
      ...s,
      zIndex: n0({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...u
    }), a;
  }, []));
}
function Q0(e) {
  return ur([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? Nc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const ba = Symbol();
function cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = U0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(_) {
    s.nodeTypes.set({
      ...ld,
      ..._
    });
  }
  function c(_) {
    s.edgeTypes.set({
      ...ud,
      ..._
    });
  }
  function u(_) {
    const M = G(s.edges);
    s.edges.set(a0(_, M));
  }
  const d = (_, M = !1) => {
    var N;
    const T = G(s.nodeLookup);
    for (const [V, I] of _) {
      const X = (N = T.get(V)) == null ? void 0 : N.internals.userNode;
      X && (X.position = I.position, X.dragging = M);
    }
    s.nodes.update((V) => V);
  };
  function v(_) {
    var M, N, T;
    const V = G(s.nodeLookup), I = G(s.parentLookup), { changes: X, updatedInternals: W } = y0(_, V, G(s.parentLookup), G(s.domNode), G(s.nodeOrigin));
    if (W) {
      g0(V, I, { nodeOrigin: i, nodeExtent: a });
      for (const U of X) {
        const Q = (M = V.get(U.id)) == null ? void 0 : M.internals.userNode;
        if (Q)
          switch (U.type) {
            case "dimensions": {
              const K = { ...Q.measured, ...U.dimensions };
              U.setAttributes && (Q.width = ((N = U.dimensions) == null ? void 0 : N.width) ?? Q.width, Q.height = ((T = U.dimensions) == null ? void 0 : T.height) ?? Q.height), Q.measured = K;
              break;
            }
            case "position":
              Q.position = U.position ?? Q.position;
              break;
          }
      }
      s.nodes.update((U) => U), G(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const M = G(s.fitViewResolver) ?? Up();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(_), s.fitViewResolver.set(M), s.nodes.set(G(s.nodes)), M.promise;
  }
  function p(_, M) {
    const N = G(s.panZoom);
    return N ? N.scaleBy(_, M) : Promise.resolve(!1);
  }
  function x(_) {
    return p(1.2, _);
  }
  function b(_) {
    return p(1 / 1.2, _);
  }
  function $(_) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([_, G(s.maxZoom)]), s.minZoom.set(_));
  }
  function h(_) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([G(s.minZoom), _]), s.maxZoom.set(_));
  }
  function C(_) {
    const M = G(s.panZoom);
    M && (M.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function m(_) {
    let M = !1;
    return _.forEach((N) => {
      N.selected && (N.selected = !1, M = !0);
    }), M;
  }
  function k(_) {
    var M;
    (M = G(s.panZoom)) == null || M.setClickDistance(_);
  }
  function P(_) {
    m((_ == null ? void 0 : _.nodes) || G(s.nodes)) && s.nodes.set(G(s.nodes)), m((_ == null ? void 0 : _.edges) || G(s.edges)) && s.edges.set(G(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var M;
    if (_) {
      const N = G(s.nodes), T = G(s.edges), V = N.filter((U) => U.selected), I = T.filter((U) => U.selected), { nodes: X, edges: W } = await Hc({
        nodesToRemove: V,
        edgesToRemove: I,
        nodes: N,
        edges: T,
        onBeforeDelete: G(s.onbeforedelete)
      });
      (X.length || W.length) && (s.nodes.update((U) => U.filter((Q) => !X.some((K) => K.id === Q.id))), s.edges.update((U) => U.filter((Q) => !W.some((K) => K.id === Q.id))), (M = G(s.ondelete)) == null || M({
        nodes: X,
        edges: W
      }));
    }
  });
  function E(_) {
    const M = G(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((T) => {
      const V = _.includes(T.id), I = M && T.selected || V;
      return T.selected = I, T;
    })), M || s.edges.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function H(_) {
    const M = G(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((T) => {
      const V = _.includes(T.id), I = M && T.selected || V;
      return T.selected = I, T;
    })), M || s.nodes.update((N) => N.map((T) => (T.selected = !1, T)));
  }
  function O(_) {
    var M;
    const N = (M = G(s.nodes)) == null ? void 0 : M.find((T) => T.id === _);
    if (!N) {
      console.warn("012", ro.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && G(s.multiselectionKeyPressed) && P({ nodes: [N], edges: [] }) : E([_]);
  }
  function D(_) {
    const M = G(s.viewport);
    return w0({
      delta: _,
      panZoom: G(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: G(s.translateExtent),
      width: G(s.width),
      height: G(s.height)
    });
  }
  const q = Ee(ss), z = (_) => {
    q.set({ ..._ });
  };
  function R() {
    q.set(ss);
  }
  function S() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), R();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: J0(s),
    visibleNodes: Q0(s),
    connection: ur([q, s.viewport], ([_, M]) => _.inProgress ? {
      ..._,
      to: ti(_.to, [M.x, M.y, M.zoom])
    } : { ..._ }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([_, M, N]) => d0(_, { defaultColor: M, id: N })),
    initialized: (() => {
      let _ = !1;
      const M = G(s.nodes).length, N = G(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([T, V, I]) => _ || (M === 0 ? _ = I : N === 0 ? _ = I && T : _ = I && T && V, _));
    })(),
    // actions
    syncNodeStores: (_) => Y0(s.nodes, _),
    syncEdgeStores: (_) => W0(s.edges, _),
    syncViewport: (_) => K0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: c,
    addEdge: u,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: b,
    fitView: (_) => g(_),
    setMinZoom: $,
    setMaxZoom: h,
    setTranslateExtent: C,
    setPaneClickDistance: k,
    unselectNodesAndEdges: P,
    addSelectedNodes: E,
    addSelectedEdges: H,
    handleNodeSelection: O,
    panBy: D,
    updateConnection: z,
    cancelConnection: R,
    reset: S
  };
}
function et() {
  const e = Mr(ba);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function em({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Qr(ba, {
    getStore: () => s
  }), s;
}
function eu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: c } = t, u = D0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: c,
    onDraggingChange: s.set
  }), d = u.getViewport();
  return a.set(d), n.set(u), u.update(t), {
    update(v) {
      u.update(v);
    }
  };
}
var tm = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const nm = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function dd(e, t) {
  pe(t, !1), at(e, nm);
  const [n, r] = ft(), o = () => oe(T, "$panActivationKeyPressed", n), i = () => oe(R, "$minZoom", n), a = () => oe(S, "$maxZoom", n), s = () => oe(V, "$zoomActivationKeyPressed", n), l = () => oe(z, "$selectionRect", n), c = () => oe(M, "$translateExtent", n), u = () => oe(N, "$lib", n), d = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae();
  let p = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), $ = w(t, "onMoveEnd", 12, void 0), h = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), P = w(t, "zoomOnPinch", 12), E = w(t, "panOnDrag", 12), H = w(t, "panOnScroll", 12), O = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: q,
    selectionRect: z,
    minZoom: R,
    maxZoom: S,
    dragging: _,
    translateExtent: M,
    lib: N,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: V,
    viewportInitialized: I
  } = et(), X = (K) => D.set({
    x: K[0],
    y: K[1],
    zoom: K[2]
  });
  pn(() => {
    Li(I, !0);
  }), be(() => re(p()), () => {
    ee(d, p() || { x: 0, y: 0, zoom: 1 });
  }), be(
    () => (o(), re(E())),
    () => {
      ee(v, o() || E());
    }
  ), be(
    () => (o(), re(H())),
    () => {
      ee(g, o() || H());
    }
  ), Tt(), je();
  var W = tm(), U = Y(W);
  Ht(U, t, "default", {}), j(W), Nt(W, (K, ce) => eu == null ? void 0 : eu(K, ce), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: _,
    panZoom: q,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: P(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: c(),
    lib: u(),
    paneClickDistance: O(),
    onTransformChange: X
  })), A(e, W);
  var Q = me({
    get initialViewport() {
      return p();
    },
    set initialViewport(K) {
      p(K), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(K) {
      x(K), y();
    },
    get onMove() {
      return b();
    },
    set onMove(K) {
      b(K), y();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(K) {
      $(K), y();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(K) {
      h(K), y();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(K) {
      C(K), y();
    },
    get zoomOnScroll() {
      return m();
    },
    set zoomOnScroll(K) {
      m(K), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(K) {
      k(K), y();
    },
    get zoomOnPinch() {
      return P();
    },
    set zoomOnPinch(K) {
      P(K), y();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(K) {
      E(K), y();
    },
    get panOnScroll() {
      return H();
    },
    set panOnScroll(K) {
      H(K), y();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(K) {
      O(K), y();
    }
  });
  return r(), Q;
}
ve(
  dd,
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
function tu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function nu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var rm = /* @__PURE__ */ ie("<div><!></div>");
const om = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function fd(e, t) {
  pe(t, !1), at(e, om);
  const [n, r] = ft(), o = () => oe(_, "$panActivationKeyPressed", n), i = () => oe(R, "$selectionKeyPressed", n), a = () => oe(q, "$selectionRect", n), s = () => oe(D, "$elementsSelectable", n), l = () => oe(z, "$selectionRectMode", n), c = () => oe(N, "$connection", n), u = () => oe(E, "$edges", n), d = () => oe(P, "$nodeLookup", n), v = () => oe(H, "$viewport", n), g = () => oe(S, "$selectionMode", n), p = () => oe(O, "$dragging", n), x = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae();
  let h = w(t, "panOnDrag", 12, void 0), C = w(t, "selectionOnDrag", 12, void 0);
  const m = da(), {
    nodes: k,
    nodeLookup: P,
    edges: E,
    viewport: H,
    dragging: O,
    elementsSelectable: D,
    selectionRect: q,
    selectionRectMode: z,
    selectionKeyPressed: R,
    selectionMode: S,
    panActivationKeyPressed: _,
    unselectNodesAndEdges: M,
    connection: N
  } = et();
  let T = /* @__PURE__ */ ae(), V = null, I = [], X = !1;
  function W(le) {
    if (X || c().inProgress) {
      X = !1;
      return;
    }
    m("paneclick", { event: le }), M(), z.set(null);
  }
  function U(le) {
    var J, Me;
    if (V = f(T).getBoundingClientRect(), !D || !f(b) || le.button !== 0 || le.target !== f(T) || !V)
      return;
    (Me = (J = le.target) == null ? void 0 : J.setPointerCapture) == null || Me.call(J, le.pointerId);
    const { x: F, y: Ae } = Wn(le, V);
    M(), q.set({
      width: 0,
      height: 0,
      startX: F,
      startY: Ae,
      x: F,
      y: Ae
    });
  }
  function Q(le) {
    if (!f(b) || !V || !a())
      return;
    X = !0;
    const J = Wn(le, V), Me = a().startX ?? 0, F = a().startY ?? 0, Ae = {
      ...a(),
      x: J.x < Me ? J.x : Me,
      y: J.y < F ? J.y : F,
      width: Math.abs(J.x - Me),
      height: Math.abs(J.y - F)
    }, Ke = I.map((fe) => fe.id), qe = ls(I, u()).map((fe) => fe.id);
    I = Nc(
      d(),
      Ae,
      [
        v().x,
        v().y,
        v().zoom
      ],
      g() === Bi.Partial,
      !0
    );
    const ge = ls(I, u()).map((fe) => fe.id), he = I.map((fe) => fe.id);
    (Ke.length !== he.length || he.some((fe) => !Ke.includes(fe))) && k.update((fe) => fe.map(nu(he))), (qe.length !== ge.length || ge.some((fe) => !qe.includes(fe))) && E.update((fe) => fe.map(nu(ge))), z.set("user"), q.set(Ae);
  }
  function K(le) {
    var J, Me;
    le.button === 0 && ((Me = (J = le.target) == null ? void 0 : J.releasePointerCapture) == null || Me.call(J, le.pointerId), !f(b) && l() === "user" && le.target === f(T) && (W == null || W(le)), q.set(null), I.length > 0 && Li(z, "nodes"), i() && (X = !1));
  }
  const ce = (le) => {
    var J;
    if (Array.isArray(f(x)) && (J = f(x)) != null && J.includes(2)) {
      le.preventDefault();
      return;
    }
    m("panecontextmenu", { event: le });
  };
  be(
    () => (o(), re(h())),
    () => {
      ee(x, o() || h());
    }
  ), be(
    () => (i(), a(), re(C()), f(x)),
    () => {
      ee(b, i() || a() || C() && f(x) !== !0);
    }
  ), be(
    () => (s(), f(b), l()),
    () => {
      ee($, s() && (f(b) || l() === "user"));
    }
  ), Tt(), je();
  var ue = rm(), ye = /* @__PURE__ */ Ne(() => f($) ? void 0 : tu(W, f(T))), se = /* @__PURE__ */ Ne(() => tu(ce, f(T)));
  let _e;
  var xe = Y(ue);
  Ht(xe, t, "default", {}), j(ue), Dn(ue, (le) => ee(T, le), () => f(T)), Te(
    (le) => _e = Lt(ue, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, le),
    [
      () => ({
        draggable: h() === !0 || Array.isArray(h()) && h().includes(0),
        dragging: p(),
        selection: f(b)
      })
    ],
    ke
  ), dt("click", ue, function(...le) {
    var J;
    (J = f(ye)) == null || J.apply(this, le);
  }), dt("pointerdown", ue, function(...le) {
    var J;
    (J = f($) ? U : void 0) == null || J.apply(this, le);
  }), dt("pointermove", ue, function(...le) {
    var J;
    (J = f($) ? Q : void 0) == null || J.apply(this, le);
  }), dt("pointerup", ue, function(...le) {
    var J;
    (J = f($) ? K : void 0) == null || J.apply(this, le);
  }), dt("contextmenu", ue, function(...le) {
    var J;
    (J = f(se)) == null || J.apply(this, le);
  }), A(e, ue);
  var Oe = me({
    get panOnDrag() {
      return h();
    },
    set panOnDrag(le) {
      h(le), y();
    },
    get selectionOnDrag() {
      return C();
    },
    set selectionOnDrag(le) {
      C(le), y();
    }
  });
  return r(), Oe;
}
ve(fd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var im = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const am = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function vd(e, t) {
  pe(t, !1), at(e, am);
  const [n, r] = ft(), o = () => oe(i, "$viewport", n), { viewport: i } = et();
  je();
  var a = im(), s = Y(a);
  Ht(s, t, "default", {}), j(a), Te(() => $t(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), me(), r();
}
ve(vd, {}, ["default"], [], !0);
function Ui(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = $0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const c = G(n.snapGrid), u = G(n.viewport);
      return {
        nodes: G(n.nodes),
        nodeLookup: G(n.nodeLookup),
        edges: G(n.edges),
        nodeExtent: G(n.nodeExtent),
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
        nodeOrigin: G(n.nodeOrigin),
        multiSelectionActive: G(n.multiselectionKeyPressed),
        domNode: G(n.domNode),
        transform: [u.x, u.y, u.zoom],
        autoPanOnNodeDrag: G(n.autoPanOnNodeDrag),
        nodesDraggable: G(n.nodesDraggable),
        selectNodesOnDrag: G(n.selectNodesOnDrag),
        nodeDragThreshold: G(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function l(c, u) {
    if (u.disabled) {
      s.destroy();
      return;
    }
    s.update({
      domNode: c,
      noDragClassName: u.noDragClass,
      handleSelector: u.handleSelector,
      nodeId: u.nodeId,
      isSelectable: u.isSelectable,
      nodeClickDistance: u.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      s.destroy();
    }
  };
}
function sm({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const a = e ?? n, s = t ?? r;
    return {
      width: a ? `width:${a}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var lm = /* @__PURE__ */ ie("<div><!></div>");
function gd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(ue, "$nodeTypes", n), i = () => oe(Oe, "$elementsSelectable", n), a = () => oe(le, "$nodesDraggable", n), s = () => oe(Ae, "$connectableStore", n), l = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0);
  let v = w(t, "node", 13), g = w(t, "id", 13), p = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), $ = w(t, "selectable", 13, void 0), h = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), P = w(t, "resizeObserver", 13, null), E = w(t, "style", 13, void 0), H = w(t, "type", 13, "default"), O = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), q = w(t, "positionY", 13), z = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), _ = w(t, "measuredWidth", 13, void 0), M = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), T = w(t, "initialHeight", 13, void 0), V = w(t, "width", 13, void 0), I = w(t, "height", 13, void 0), X = w(t, "dragHandle", 13, void 0), W = w(t, "initialized", 13, !1), U = w(t, "parentId", 13, void 0), Q = w(t, "nodeClickDistance", 13, void 0), K = w(t, "class", 13, "");
  const ce = et(), {
    nodeTypes: ue,
    nodeDragThreshold: ye,
    selectNodesOnDrag: se,
    handleNodeSelection: _e,
    updateNodeInternals: xe,
    elementsSelectable: Oe,
    nodesDraggable: le
  } = ce;
  let J = /* @__PURE__ */ ae(void 0, !0), Me = /* @__PURE__ */ ae(null, !0);
  const F = da(), Ae = Ee(h());
  let Ke = /* @__PURE__ */ ae(void 0, !0), qe = /* @__PURE__ */ ae(void 0, !0), ge = /* @__PURE__ */ ae(void 0, !0);
  Qr("svelteflow__node_id", g()), Qr("svelteflow__node_connectable", Ae), Hs(() => {
    var te;
    f(Me) && ((te = P()) == null || te.unobserve(f(Me)));
  });
  function he(te) {
    $() && (!G(se) || !b() || G(ye) > 0) && _e(g()), F("nodeclick", { node: v().internals.userNode, event: te });
  }
  be(() => re(H()), () => {
    ee(l, H() || "default");
  }), be(() => (o(), f(l)), () => {
    ee(c, !!o()[f(l)]);
  }), be(
    () => (o(), f(l), Ki),
    () => {
      ee(u, o()[f(l)] || Ki);
    }
  ), be(
    () => (f(c), re(H())),
    () => {
      f(c) || console.warn("003", ro.error003(H()));
    }
  ), be(
    () => (re(V()), re(I()), re(N()), re(T()), re(_()), re(M())),
    () => {
      ee(d, sm({
        width: V(),
        height: I(),
        initialWidth: N(),
        initialHeight: T(),
        measuredWidth: _(),
        measuredHeight: M()
      }));
    }
  ), be(() => re(h()), () => {
    Ae.set(!!h());
  }), be(
    () => (f(Ke), f(l), f(qe), re(z()), f(ge), re(R()), re(g()), f(J)),
    () => {
      (f(Ke) && f(l) !== f(Ke) || f(qe) && z() !== f(qe) || f(ge) && R() !== f(ge)) && requestAnimationFrame(() => xe(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(J),
            force: !0
          }
        ]
      ]))), ee(Ke, f(l)), ee(qe, z()), ee(ge, R());
    }
  ), be(
    () => (re(P()), f(J), f(Me), re(W())),
    () => {
      P() && (f(J) !== f(Me) || !W()) && (f(Me) && P().unobserve(f(Me)), f(J) && P().observe(f(J)), ee(Me, f(J)));
    }
  ), Tt(), je(!0);
  var fe = it(), Ve = Ce(fe);
  {
    var ct = (te) => {
      var Fe = lm();
      let de, jt;
      var Xt = Y(Fe);
      const ln = /* @__PURE__ */ ke(() => x() ?? !1), De = /* @__PURE__ */ ke(() => $() ?? i() ?? !0), st = /* @__PURE__ */ ke(() => C() ?? !0), Be = /* @__PURE__ */ ke(() => b() ?? a() ?? !0);
      Gu(Xt, () => f(u), (Ze, lt) => {
        lt(Ze, {
          get data() {
            return p();
          },
          get id() {
            return g();
          },
          get selected() {
            return f(ln);
          },
          get selectable() {
            return f(De);
          },
          get deletable() {
            return f(st);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Be);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return U();
          },
          get type() {
            return f(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return q();
          },
          get width() {
            return V();
          },
          get height() {
            return I();
          }
        });
      }), j(Fe), Nt(Fe, (Ze, lt) => Ui == null ? void 0 : Ui(Ze, lt), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: _e,
        onDrag: (Ze, lt, Qt, Vt) => {
          F("nodedrag", { event: Ze, targetNode: Qt, nodes: Vt });
        },
        onDragStart: (Ze, lt, Qt, Vt) => {
          F("nodedragstart", { event: Ze, targetNode: Qt, nodes: Vt });
        },
        onDragStop: (Ze, lt, Qt, Vt) => {
          F("nodedragstop", { event: Ze, targetNode: Qt, nodes: Vt });
        },
        store: ce
      })), Dn(Fe, (Ze) => ee(J, Ze), () => f(J)), tn(() => dt("click", Fe, he)), tn(() => dt("mouseenter", Fe, (Ze) => F("nodemouseenter", { node: v(), event: Ze }))), tn(() => dt("mouseleave", Fe, (Ze) => F("nodemouseleave", { node: v(), event: Ze }))), tn(() => dt("mousemove", Fe, (Ze) => F("nodemousemove", { node: v(), event: Ze }))), tn(() => dt("contextmenu", Fe, (Ze) => F("nodecontextmenu", { node: v(), event: Ze }))), Te(
        (Ze, lt) => {
          Se(Fe, "data-id", g()), de = Lt(Fe, 1, Ze, null, de, lt), jt = $t(Fe, `${E() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, jt, {
            "z-index": S(),
            transform: `translate(${D() ?? ""}px, ${q() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => Sn(Bt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            K()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: $(),
            nopan: b(),
            parent: O()
          })
        ],
        ke
      ), A(te, Fe);
    };
    $e(Ve, (te) => {
      m() || te(ct);
    });
  }
  A(e, fe);
  var vt = me({
    get node() {
      return v();
    },
    set node(te) {
      v(te), y();
    },
    get id() {
      return g();
    },
    set id(te) {
      g(te), y();
    },
    get data() {
      return p();
    },
    set data(te) {
      p(te), y();
    },
    get selected() {
      return x();
    },
    set selected(te) {
      x(te), y();
    },
    get draggable() {
      return b();
    },
    set draggable(te) {
      b(te), y();
    },
    get selectable() {
      return $();
    },
    set selectable(te) {
      $(te), y();
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
      return m();
    },
    set hidden(te) {
      m(te), y();
    },
    get dragging() {
      return k();
    },
    set dragging(te) {
      k(te), y();
    },
    get resizeObserver() {
      return P();
    },
    set resizeObserver(te) {
      P(te), y();
    },
    get style() {
      return E();
    },
    set style(te) {
      E(te), y();
    },
    get type() {
      return H();
    },
    set type(te) {
      H(te), y();
    },
    get isParent() {
      return O();
    },
    set isParent(te) {
      O(te), y();
    },
    get positionX() {
      return D();
    },
    set positionX(te) {
      D(te), y();
    },
    get positionY() {
      return q();
    },
    set positionY(te) {
      q(te), y();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(te) {
      z(te), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), y();
    },
    get zIndex() {
      return S();
    },
    set zIndex(te) {
      S(te), y();
    },
    get measuredWidth() {
      return _();
    },
    set measuredWidth(te) {
      _(te), y();
    },
    get measuredHeight() {
      return M();
    },
    set measuredHeight(te) {
      M(te), y();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(te) {
      N(te), y();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(te) {
      T(te), y();
    },
    get width() {
      return V();
    },
    set width(te) {
      V(te), y();
    },
    get height() {
      return I();
    },
    set height(te) {
      I(te), y();
    },
    get dragHandle() {
      return X();
    },
    set dragHandle(te) {
      X(te), y();
    },
    get initialized() {
      return W();
    },
    set initialized(te) {
      W(te), y();
    },
    get parentId() {
      return U();
    },
    set parentId(te) {
      U(te), y();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), y();
    },
    get class() {
      return K();
    },
    set class(te) {
      K(te), y();
    }
  });
  return r(), vt;
}
ve(
  gd,
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
var um = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const cm = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function hd(e, t) {
  pe(t, !1), at(e, cm);
  const [n, r] = ft(), o = () => oe(u, "$visibleNodes", n), i = () => oe(d, "$nodesDraggable", n), a = () => oe(g, "$elementsSelectable", n), s = () => oe(v, "$nodesConnectable", n), l = () => oe(x, "$parentLookup", n);
  let c = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: u,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: x
  } = et(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const m = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const P = k.target.getAttribute("data-id");
      m.set(P, { id: P, nodeElement: k.target, force: !0 });
    }), p(m);
  });
  Hs(() => {
    b == null || b.disconnect();
  }), je();
  var $ = um();
  Zt($, 5, o, (C) => C.id, (C, m) => {
    const k = /* @__PURE__ */ ke(() => !!f(m).selected), P = /* @__PURE__ */ ke(() => !!f(m).hidden), E = /* @__PURE__ */ ke(() => !!(f(m).draggable || i() && typeof f(m).draggable > "u")), H = /* @__PURE__ */ ke(() => !!(f(m).selectable || a() && typeof f(m).selectable > "u")), O = /* @__PURE__ */ ke(() => !!(f(m).connectable || s() && typeof f(m).connectable > "u")), D = /* @__PURE__ */ ke(() => f(m).deletable ?? !0), q = /* @__PURE__ */ ke(() => l().has(f(m).id)), z = /* @__PURE__ */ ke(() => f(m).type ?? "default"), R = /* @__PURE__ */ ke(() => f(m).internals.z ?? 0), S = /* @__PURE__ */ ke(() => Ac(f(m)));
    gd(C, {
      get node() {
        return f(m);
      },
      get id() {
        return f(m).id;
      },
      get data() {
        return f(m).data;
      },
      get selected() {
        return f(k);
      },
      get hidden() {
        return f(P);
      },
      get draggable() {
        return f(E);
      },
      get selectable() {
        return f(H);
      },
      get connectable() {
        return f(O);
      },
      get deletable() {
        return f(D);
      },
      get positionX() {
        return f(m).internals.positionAbsolute.x;
      },
      get positionY() {
        return f(m).internals.positionAbsolute.y;
      },
      get isParent() {
        return f(q);
      },
      get style() {
        return f(m).style;
      },
      get class() {
        return f(m).class;
      },
      get type() {
        return f(z);
      },
      get sourcePosition() {
        return f(m).sourcePosition;
      },
      get targetPosition() {
        return f(m).targetPosition;
      },
      get dragging() {
        return f(m).dragging;
      },
      get zIndex() {
        return f(R);
      },
      get dragHandle() {
        return f(m).dragHandle;
      },
      get initialized() {
        return f(S);
      },
      get width() {
        return f(m).width;
      },
      get height() {
        return f(m).height;
      },
      get initialWidth() {
        return f(m).initialWidth;
      },
      get initialHeight() {
        return f(m).initialHeight;
      },
      get measuredWidth() {
        return f(m).measured.width;
      },
      get measuredHeight() {
        return f(m).measured.height;
      },
      get parentId() {
        return f(m).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return c();
      },
      $$events: {
        nodeclick(_) {
          Ue.call(this, t, _);
        },
        nodemouseenter(_) {
          Ue.call(this, t, _);
        },
        nodemousemove(_) {
          Ue.call(this, t, _);
        },
        nodemouseleave(_) {
          Ue.call(this, t, _);
        },
        nodedrag(_) {
          Ue.call(this, t, _);
        },
        nodedragstart(_) {
          Ue.call(this, t, _);
        },
        nodedragstop(_) {
          Ue.call(this, t, _);
        },
        nodecontextmenu(_) {
          Ue.call(this, t, _);
        }
      }
    });
  }), j($), A(e, $);
  var h = me({
    get nodeClickDistance() {
      return c();
    },
    set nodeClickDistance(C) {
      c(C), y();
    }
  });
  return r(), h;
}
ve(hd, { nodeClickDistance: {} }, [], [], !0);
var dm = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function pd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(K, "$edgeTypes", n), i = () => oe(ce, "$flowId", n), a = () => oe(ue, "$elementsSelectable", n), s = () => oe(Q, "$edgeLookup", n), l = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0), v = /* @__PURE__ */ ae(void 0, !0);
  let g = w(t, "id", 13), p = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), b = w(t, "target", 13, ""), $ = w(t, "data", 29, () => ({})), h = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), P = w(t, "selectable", 13, void 0), E = w(t, "deletable", 13, void 0), H = w(t, "hidden", 13, !1), O = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), q = w(t, "markerStart", 13, void 0), z = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), _ = w(t, "sourceX", 13), M = w(t, "sourceY", 13), N = w(t, "targetX", 13), T = w(t, "targetY", 13), V = w(t, "sourcePosition", 13), I = w(t, "targetPosition", 13), X = w(t, "ariaLabel", 13, void 0), W = w(t, "interactionWidth", 13, void 0), U = w(t, "class", 13, "");
  Qr("svelteflow__edge_id", g());
  const {
    edgeLookup: Q,
    edgeTypes: K,
    flowId: ce,
    elementsSelectable: ue
  } = et(), ye = da(), se = rd();
  function _e(F) {
    const Ae = s().get(g());
    Ae && (se(g()), ye("edgeclick", { event: F, edge: Ae }));
  }
  function xe(F, Ae) {
    const Ke = s().get(g());
    Ke && ye(Ae, { event: F, edge: Ke });
  }
  be(() => re(p()), () => {
    ee(l, p() || "default");
  }), be(
    () => (o(), f(l), Gi),
    () => {
      ee(c, o()[f(l)] || Gi);
    }
  ), be(
    () => (re(q()), i()),
    () => {
      ee(u, q() ? `url('#${ds(q(), i())}')` : void 0);
    }
  ), be(
    () => (re(z()), i()),
    () => {
      ee(d, z() ? `url('#${ds(z(), i())}')` : void 0);
    }
  ), be(
    () => (re(P()), a()),
    () => {
      ee(v, P() ?? a());
    }
  ), Tt(), je(!0);
  var Oe = it(), le = Ce(Oe);
  {
    var J = (F) => {
      var Ae = dm();
      let Ke;
      var qe = Y(Ae);
      let ge;
      var he = Y(qe);
      const fe = /* @__PURE__ */ ke(() => E() ?? !0);
      Gu(he, () => f(c), (Ve, ct) => {
        ct(Ve, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return _();
          },
          get sourceY() {
            return M();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return V();
          },
          get targetPosition() {
            return I();
          },
          get animated() {
            return m();
          },
          get selected() {
            return k();
          },
          get label() {
            return O();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return $();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(fe);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return f(u);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), j(qe), j(Ae), Te(
        (Ve, ct) => {
          Ke = $t(Ae, "", Ke, { "z-index": C() }), ge = Lt(qe, 0, Ve, null, ge, ct), Se(qe, "data-id", g()), Se(qe, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => Sn(Bt(["svelte-flow__edge", U()])),
          () => ({
            animated: m(),
            selected: k(),
            selectable: f(v)
          })
        ],
        ke
      ), dt("click", qe, _e), dt("contextmenu", qe, (Ve) => {
        xe(Ve, "edgecontextmenu");
      }), dt("mouseenter", qe, (Ve) => {
        xe(Ve, "edgemouseenter");
      }), dt("mouseleave", qe, (Ve) => {
        xe(Ve, "edgemouseleave");
      }), A(F, Ae);
    };
    $e(le, (F) => {
      H() || F(J);
    });
  }
  A(e, Oe);
  var Me = me({
    get id() {
      return g();
    },
    set id(F) {
      g(F), y();
    },
    get type() {
      return p();
    },
    set type(F) {
      p(F), y();
    },
    get source() {
      return x();
    },
    set source(F) {
      x(F), y();
    },
    get target() {
      return b();
    },
    set target(F) {
      b(F), y();
    },
    get data() {
      return $();
    },
    set data(F) {
      $(F), y();
    },
    get style() {
      return h();
    },
    set style(F) {
      h(F), y();
    },
    get zIndex() {
      return C();
    },
    set zIndex(F) {
      C(F), y();
    },
    get animated() {
      return m();
    },
    set animated(F) {
      m(F), y();
    },
    get selected() {
      return k();
    },
    set selected(F) {
      k(F), y();
    },
    get selectable() {
      return P();
    },
    set selectable(F) {
      P(F), y();
    },
    get deletable() {
      return E();
    },
    set deletable(F) {
      E(F), y();
    },
    get hidden() {
      return H();
    },
    set hidden(F) {
      H(F), y();
    },
    get label() {
      return O();
    },
    set label(F) {
      O(F), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(F) {
      D(F), y();
    },
    get markerStart() {
      return q();
    },
    set markerStart(F) {
      q(F), y();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(F) {
      z(F), y();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(F) {
      R(F), y();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(F) {
      S(F), y();
    },
    get sourceX() {
      return _();
    },
    set sourceX(F) {
      _(F), y();
    },
    get sourceY() {
      return M();
    },
    set sourceY(F) {
      M(F), y();
    },
    get targetX() {
      return N();
    },
    set targetX(F) {
      N(F), y();
    },
    get targetY() {
      return T();
    },
    set targetY(F) {
      T(F), y();
    },
    get sourcePosition() {
      return V();
    },
    set sourcePosition(F) {
      V(F), y();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(F) {
      I(F), y();
    },
    get ariaLabel() {
      return X();
    },
    set ariaLabel(F) {
      X(F), y();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(F) {
      W(F), y();
    },
    get class() {
      return U();
    },
    set class(F) {
      U(F), y();
    }
  });
  return r(), Me;
}
ve(
  pd,
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
function md(e, t) {
  pe(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return pn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), je(), me({
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
ve(md, { onMount: {}, onDestroy: {} }, [], [], !0);
var fm = /* @__PURE__ */ Pe("<defs></defs>");
function yd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(i, "$markers", n), { markers: i } = et();
  je();
  var a = fm();
  Zt(a, 5, o, (s) => s.id, (s, l) => {
    wd(s, mt(() => f(l)));
  }), j(a), A(e, a), me(), r();
}
ve(yd, {}, [], [], !0);
var vm = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), gm = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), hm = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function wd(e, t) {
  pe(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), a = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), c = w(t, "strokeWidth", 12, void 0);
  je();
  var u = hm(), d = Y(u);
  {
    var v = (p) => {
      var x = vm();
      Te(() => {
        Se(x, "stroke", l()), Se(x, "stroke-width", c());
      }), A(p, x);
    }, g = (p, x) => {
      {
        var b = ($) => {
          var h = gm();
          Te(() => {
            Se(h, "stroke", l()), Se(h, "stroke-width", c()), Se(h, "fill", l());
          }), A($, h);
        };
        $e(
          p,
          ($) => {
            r() === Bo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    $e(d, (p) => {
      r() === Bo.Arrow ? p(v) : p(g, !1);
    });
  }
  return j(u), Te(() => {
    Se(u, "id", n()), Se(u, "markerWidth", `${o()}`), Se(u, "markerHeight", `${i()}`), Se(u, "markerUnits", a()), Se(u, "orient", s());
  }), A(e, u), me({
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), y();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), y();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), y();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(p) {
      a(p), y();
    },
    get orient() {
      return s();
    },
    set orient(p) {
      s(p), y();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(p) {
      c(p), y();
    }
  });
}
ve(
  wd,
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
var pm = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function bd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(s, "$visibleEdges", n), i = () => oe(u, "$elementsSelectable", n);
  let a = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: c },
    elementsSelectable: u
  } = et();
  pn(() => {
    a() && c(a());
  }), je();
  var d = pm(), v = Y(d), g = Y(v);
  yd(g, {}), j(v);
  var p = B(v, 2);
  Zt(p, 1, o, (h) => h.id, (h, C) => {
    const m = /* @__PURE__ */ ke(() => f(C).selectable ?? i()), k = /* @__PURE__ */ ke(() => f(C).type || "default");
    pd(h, {
      get id() {
        return f(C).id;
      },
      get source() {
        return f(C).source;
      },
      get target() {
        return f(C).target;
      },
      get data() {
        return f(C).data;
      },
      get style() {
        return f(C).style;
      },
      get animated() {
        return f(C).animated;
      },
      get selected() {
        return f(C).selected;
      },
      get selectable() {
        return f(m);
      },
      get deletable() {
        return f(C).deletable;
      },
      get hidden() {
        return f(C).hidden;
      },
      get label() {
        return f(C).label;
      },
      get labelStyle() {
        return f(C).labelStyle;
      },
      get markerStart() {
        return f(C).markerStart;
      },
      get markerEnd() {
        return f(C).markerEnd;
      },
      get sourceHandle() {
        return f(C).sourceHandle;
      },
      get targetHandle() {
        return f(C).targetHandle;
      },
      get sourceX() {
        return f(C).sourceX;
      },
      get sourceY() {
        return f(C).sourceY;
      },
      get targetX() {
        return f(C).targetX;
      },
      get targetY() {
        return f(C).targetY;
      },
      get sourcePosition() {
        return f(C).sourcePosition;
      },
      get targetPosition() {
        return f(C).targetPosition;
      },
      get ariaLabel() {
        return f(C).ariaLabel;
      },
      get interactionWidth() {
        return f(C).interactionWidth;
      },
      get class() {
        return f(C).class;
      },
      get type() {
        return f(k);
      },
      get zIndex() {
        return f(C).zIndex;
      },
      $$events: {
        edgeclick(P) {
          Ue.call(this, t, P);
        },
        edgecontextmenu(P) {
          Ue.call(this, t, P);
        },
        edgemouseenter(P) {
          Ue.call(this, t, P);
        },
        edgemouseleave(P) {
          Ue.call(this, t, P);
        }
      }
    });
  });
  var x = B(p, 2);
  {
    var b = (h) => {
      md(h, {
        onMount: () => {
          Li(l, !0);
        },
        onDestroy: () => {
          Li(l, !1);
        }
      });
    };
    $e(x, (h) => {
      o().length > 0 && h(b);
    });
  }
  j(d), A(e, d);
  var $ = me({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), y();
    }
  });
  return r(), $;
}
ve(bd, { defaultEdgeOptions: {} }, [], [], !0);
var mm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const ym = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ks(e, t) {
  pe(t, !1), at(e, ym);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), a = w(t, "isVisible", 12, !0);
  var s = it(), l = Ce(s);
  {
    var c = (u) => {
      var d = mm();
      let v;
      Te(() => v = $t(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), A(u, d);
    };
    $e(l, (u) => {
      a() && u(c);
    });
  }
  return A(e, s), me({
    get x() {
      return n();
    },
    set x(u) {
      n(u), y();
    },
    get y() {
      return r();
    },
    set y(u) {
      r(u), y();
    },
    get width() {
      return o();
    },
    set width(u) {
      o(u), y();
    },
    get height() {
      return i();
    },
    set height(u) {
      i(u), y();
    },
    get isVisible() {
      return a();
    },
    set isVisible(u) {
      a(u), y();
    }
  });
}
ve(
  Ks,
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
function xd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(a, "$selectionRect", n), i = () => oe(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = et();
  je();
  const l = /* @__PURE__ */ ke(() => !!(o() && i() === "user")), c = /* @__PURE__ */ ke(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), u = /* @__PURE__ */ ke(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ ke(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ ke(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  Ks(e, {
    get isVisible() {
      return f(l);
    },
    get width() {
      return f(c);
    },
    get height() {
      return f(u);
    },
    get x() {
      return f(d);
    },
    get y() {
      return f(v);
    }
  }), me(), r();
}
ve(xd, {}, [], [], !0);
var wm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const bm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function $d(e, t) {
  pe(t, !1), at(e, bm);
  const [n, r] = ft(), o = () => oe(l, "$selectionRectMode", n), i = () => oe(u, "$nodeLookup", n), a = () => oe(c, "$nodes", n), s = et(), { selectionRectMode: l, nodes: c, nodeLookup: u } = s, d = da();
  let v = /* @__PURE__ */ ae(null);
  function g(h) {
    const C = a().filter((m) => m.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((m) => m.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  be(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (ee(v, ei(i(), { filter: (h) => !!h.selected })), a());
    }
  ), Tt(), je();
  var x = it(), b = Ce(x);
  {
    var $ = (h) => {
      var C = wm(), m = Y(C);
      Ks(m, { width: "100%", height: "100%", x: 0, y: 0 }), j(C), Nt(C, (k, P) => Ui == null ? void 0 : Ui(k, P), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, P, E, H) => {
          d("nodedrag", { event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, P, E, H) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, P, E, H) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: H });
        }
      })), tn(() => dt("contextmenu", C, g)), tn(() => dt("click", C, p)), tn(() => dt("keyup", C, () => {
      })), Te(() => $t(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), A(h, C);
    };
    $e(b, (h) => {
      o() === "nodes" && f(v) && jn(f(v).x) && jn(f(v).y) && h($);
    });
  }
  A(e, x), me(), r();
}
ve($d, {}, [], [], !0);
function bt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: a.altKey,
      ctrl: a.ctrlKey,
      shift: a.shiftKey,
      meta: a.metaKey
    };
    for (const c of s) {
      const u = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...c
      }, { modifier: d, key: v, callback: g, preventDefault: p, enabled: x } = u;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          p && a.preventDefault();
          const b = {
            node: e,
            trigger: u,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), g == null || g(b);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (a) => {
      const { enabled: s = !0, type: l = "keydown" } = a;
      n && (!s || o !== l) ? e.removeEventListener(o, i) : !n && s && e.addEventListener(l, i), n = s, o = l, r = a.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Cd(e, t) {
  pe(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Yi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), a = w(t, "zoomActivationKey", 28, () => Yi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: c,
    panActivationKeyPressed: u,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = et();
  function g(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return g(h) ? h.modifier || [] : [];
  }
  function x(h) {
    return h == null ? "" : g(h) ? h.key : h;
  }
  function b(h, C) {
    return (Array.isArray(h) ? h : [h]).map((m) => {
      const k = x(m);
      return {
        key: k,
        modifier: p(m),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), c.set(!1), u.set(!1), d.set(!1);
  }
  return je(), dt("blur", Kt, $), dt("contextmenu", Kt, $), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !e0(h.originalEvent) && c.set(!0);
    }),
    type: "keydown"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(o(), () => c.set(!1)),
    type: "keyup"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(i(), () => u.set(!0)),
    type: "keydown"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(i(), () => u.set(!1)),
    type: "keyup"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), Nt(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), me({
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
      return i();
    },
    set panActivationKey(h) {
      i(h), y();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), y();
    }
  });
}
ve(
  Cd,
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
var xm = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__connection-path"></path>'), $m = /* @__PURE__ */ Pe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function _d(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(g, "$connection", n), i = () => oe(p, "$connectionLineType", n), a = () => oe(d, "$width", n), s = () => oe(v, "$height", n);
  let l = w(t, "containerStyle", 12, ""), c = w(t, "style", 12, ""), u = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = et();
  let x = /* @__PURE__ */ ae(null);
  be(
    () => (o(), re(u()), i(), f(x), cs),
    () => {
      if (o().inProgress && !u()) {
        const { from: m, to: k, fromPosition: P, toPosition: E } = o(), H = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: P,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case Wr.Bezier:
            ((O) => ee(x, O[0]))(qc(H));
            break;
          case Wr.Step:
            ((O) => ee(x, O[0]))(Wi({ ...H, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((O) => ee(x, O[0]))(Wi(H));
            break;
          default:
            ((O) => ee(x, O[0]))(cs(H));
        }
      }
    }
  ), Tt(), je();
  var b = it(), $ = Ce(b);
  {
    var h = (m) => {
      var k = $m(), P = Y(k), E = Y(P);
      Ht(E, t, "connectionLine", {});
      var H = B(E);
      {
        var O = (D) => {
          var q = xm();
          Te(() => {
            Se(q, "d", f(x)), $t(q, c());
          }), A(D, q);
        };
        $e(H, (D) => {
          u() || D(O);
        });
      }
      j(P), j(k), Te(
        (D) => {
          Se(k, "width", a()), Se(k, "height", s()), $t(k, l()), Lt(P, 0, D);
        },
        [
          () => Sn(Bt([
            "svelte-flow__connection",
            Ip(o().isValid)
          ]))
        ],
        ke
      ), A(m, k);
    };
    $e($, (m) => {
      o().inProgress && m(h);
    });
  }
  A(e, b);
  var C = me({
    get containerStyle() {
      return l();
    },
    set containerStyle(m) {
      l(m), y();
    },
    get style() {
      return c();
    },
    set style(m) {
      c(m), y();
    },
    get isCustomComponent() {
      return u();
    },
    set isCustomComponent(m) {
      u(m), y();
    }
  });
  return r(), C;
}
ve(
  _d,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Cm = /* @__PURE__ */ ie("<div><!></div>");
function ri(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  pe(t, !1);
  const [o, i] = ft(), a = () => oe(d, "$selectionRectMode", o), s = /* @__PURE__ */ ae();
  let l = w(t, "position", 12, "top-right"), c = w(t, "style", 12, void 0), u = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = et();
  be(() => re(l()), () => {
    ee(s, `${l()}`.split("-"));
  }), Tt(), je();
  var v = Cm();
  let g;
  var p = Y(v);
  Ht(p, t, "default", {}), j(v), Te(
    (b) => g = gn(v, g, {
      class: b,
      style: c(),
      ...r,
      [xr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Bt([
        "svelte-flow__panel",
        u(),
        ...f(s)
      ])
    ],
    ke
  ), A(e, v);
  var x = me({
    get position() {
      return l();
    },
    set position(b) {
      l(b), y();
    },
    get style() {
      return c();
    },
    set style(b) {
      c(b), y();
    },
    get class() {
      return u();
    },
    set class(b) {
      u(b), y();
    }
  });
  return i(), x;
}
ve(ri, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var _m = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function kd(e, t) {
  pe(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  je();
  var o = it(), i = Ce(o);
  {
    var a = (s) => {
      ri(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var u = _m();
          A(l, u);
        },
        $$slots: { default: !0 }
      });
    };
    $e(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return A(e, o), me({
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
ve(kd, { proOptions: {}, position: {} }, [], [], !0);
function ru(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const km = (e) => Object.keys(e);
function ou(e, t) {
  km(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Sm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Em(e = "light") {
  return un("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Sm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Mm = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Pm = /* @__PURE__ */ ie("<!> <!>", 1), Tm = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Vm = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Sd(e, t) {
  const n = B1(t), r = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = ht(r, [
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
  pe(t, !1), at(e, Vm);
  const [i, a] = ft(), s = () => oe(C(), "$viewport", i), l = () => oe(yo, "$initialized", i), c = () => oe(f(u), "$colorModeClass", i), u = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, "1"), v = w(t, "nodes", 12), g = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), $ = w(t, "maxZoom", 12, void 0), h = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), P = w(t, "selectionKey", 12, void 0), E = w(t, "selectionMode", 12, void 0), H = w(t, "panActivationKey", 12, void 0), O = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), q = w(t, "nodesDraggable", 12, void 0), z = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), _ = w(t, "snapGrid", 12, void 0), M = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), T = w(t, "connectionLineType", 12, void 0), V = w(t, "connectionMode", 28, () => Vr.Strict), I = w(t, "connectionLineStyle", 12, ""), X = w(t, "connectionLineContainerStyle", 12, ""), W = w(t, "onMoveStart", 12, void 0), U = w(t, "onMove", 12, void 0), Q = w(t, "onMoveEnd", 12, void 0), K = w(t, "isValidConnection", 12, void 0), ce = w(t, "translateExtent", 12, void 0), ue = w(t, "nodeExtent", 12, void 0), ye = w(t, "onlyRenderVisibleElements", 12, void 0), se = w(t, "panOnScrollMode", 28, () => cr.Free), _e = w(t, "preventScrolling", 12, !0), xe = w(t, "zoomOnScroll", 12, !0), Oe = w(t, "zoomOnDoubleClick", 12, !0), le = w(t, "zoomOnPinch", 12, !0), J = w(t, "panOnScroll", 12, !1), Me = w(t, "panOnDrag", 12, !0), F = w(t, "selectionOnDrag", 12, void 0), Ae = w(t, "autoPanOnConnect", 12, !0), Ke = w(t, "autoPanOnNodeDrag", 12, !0), qe = w(t, "onerror", 12, void 0), ge = w(t, "ondelete", 12, void 0), he = w(t, "onedgecreate", 12, void 0), fe = w(t, "attributionPosition", 12, void 0), Ve = w(t, "proOptions", 12, void 0), ct = w(t, "defaultEdgeOptions", 12, void 0), vt = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Fe = w(t, "colorMode", 12, "light"), de = w(t, "onconnect", 12, void 0), jt = w(t, "onconnectstart", 12, void 0), Xt = w(t, "onconnectend", 12, void 0), ln = w(t, "onbeforedelete", 12, void 0), De = w(t, "oninit", 12, void 0), st = w(t, "nodeOrigin", 12, void 0), Be = w(t, "paneClickDistance", 12, 0), Ze = w(t, "nodeClickDistance", 12, 0), lt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Qt = w(t, "style", 12, void 0), Vt = w(t, "class", 12, void 0), Qn = /* @__PURE__ */ ae(), yt = /* @__PURE__ */ ae(), Ct = /* @__PURE__ */ ae();
  const Pn = s() || h(), rt = C1(ba) ? et() : em({
    nodes: G(v()),
    edges: G(g()),
    width: vt(),
    height: te(),
    fitView: p(),
    nodeOrigin: st(),
    nodeExtent: ue()
  });
  pn(() => (rt.width.set(f(yt)), rt.height.set(f(Ct)), rt.domNode.set(f(Qn)), rt.syncNodeStores(v()), rt.syncEdgeStores(g()), rt.syncViewport(C()), p() !== void 0 && rt.fitViewQueued.set(p()), x() && rt.fitViewOptions.set(x()), ru(rt, {
    nodeTypes: m(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ce(),
    paneClickDistance: Be()
  }), () => {
    rt.reset();
  }));
  const { initialized: yo } = rt;
  let er = /* @__PURE__ */ ae(!1);
  be(
    () => (f(yt), f(Ct)),
    () => {
      f(yt) !== void 0 && f(Ct) !== void 0 && (rt.width.set(f(yt)), rt.height.set(f(Ct)));
    }
  ), be(
    () => (f(er), l(), re(De())),
    () => {
      var Z;
      !f(er) && l() && ((Z = De()) == null || Z(), ee(er, !0));
    }
  ), be(
    () => (re(d()), re(T()), re(N()), re(E()), re(_()), re(lt()), re(q()), re(z()), re(S()), re(ye()), re(K()), re(Ae()), re(Ke()), re(qe()), re(ge()), re(he()), re(V()), re(R()), re(de()), re(jt()), re(Xt()), re(ln()), re(st()), ou),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: T(),
        connectionRadius: N(),
        selectionMode: E(),
        snapGrid: _(),
        defaultMarkerColor: lt(),
        nodesDraggable: q(),
        nodesConnectable: z(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ye(),
        isValidConnection: K(),
        autoPanOnConnect: Ae(),
        autoPanOnNodeDrag: Ke(),
        onerror: qe(),
        ondelete: ge(),
        onedgecreate: he(),
        connectionMode: V(),
        nodeDragThreshold: R(),
        onconnect: de(),
        onconnectstart: jt(),
        onconnectend: Xt(),
        onbeforedelete: ln(),
        nodeOrigin: st()
      };
      ou(rt, Z);
    }
  ), be(
    () => (re(m()), re(k()), re(b()), re($()), re(ce()), re(Be())),
    () => {
      ru(rt, {
        nodeTypes: m(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ce(),
        paneClickDistance: Be()
      });
    }
  ), be(
    () => re(Fe()),
    () => {
      ev(ee(u, Em(Fe())), "$colorModeClass", i);
    }
  ), Tt(), je();
  var Dt = Tm();
  let wr;
  var br = Y(Dt);
  Cd(br, {
    get selectionKey() {
      return P();
    },
    get deleteKey() {
      return M();
    },
    get panActivationKey() {
      return H();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Dr = B(br, 2);
  const wo = /* @__PURE__ */ ke(() => se() === void 0 ? cr.Free : se()), si = /* @__PURE__ */ ke(() => _e() === void 0 ? !0 : _e()), li = /* @__PURE__ */ ke(() => xe() === void 0 ? !0 : xe()), ka = /* @__PURE__ */ ke(() => Oe() === void 0 ? !0 : Oe()), Sa = /* @__PURE__ */ ke(() => le() === void 0 ? !0 : le()), Ea = /* @__PURE__ */ ke(() => J() === void 0 ? !1 : J()), Ma = /* @__PURE__ */ ke(() => Me() === void 0 ? !0 : Me()), L = /* @__PURE__ */ ke(() => Be() === void 0 ? 0 : Be());
  dd(Dr, {
    initialViewport: Pn,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return U();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return f(wo);
    },
    get preventScrolling() {
      return f(si);
    },
    get zoomOnScroll() {
      return f(li);
    },
    get zoomOnDoubleClick() {
      return f(ka);
    },
    get zoomOnPinch() {
      return f(Sa);
    },
    get panOnScroll() {
      return f(Ea);
    },
    get panOnDrag() {
      return f(Ma);
    },
    get paneClickDistance() {
      return f(L);
    },
    children: (Z, ot) => {
      const Ye = /* @__PURE__ */ ke(() => Me() === void 0 ? !0 : Me());
      fd(Z, {
        get panOnDrag() {
          return f(Ye);
        },
        get selectionOnDrag() {
          return F();
        },
        $$events: {
          paneclick(Ie) {
            Ue.call(this, t, Ie);
          },
          panecontextmenu(Ie) {
            Ue.call(this, t, Ie);
          }
        },
        children: (Ie, Ot) => {
          var gt = Pm(), pt = Ce(gt);
          vd(pt, {
            children: (tr, nr) => {
              var Et = Mm(), Ar = Ce(Et);
              bd(Ar, {
                get defaultEdgeOptions() {
                  return ct();
                },
                $$events: {
                  edgeclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgecontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgemouseenter(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgemouseleave(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              });
              var ui = B(Ar, 2);
              _d(ui, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return I();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ge, lb) => {
                    var el = it(), xf = Ce(el);
                    Ht(xf, t, "connectionLine", {}), A(Ge, el);
                  }
                }
              });
              var ci = B(ui, 6);
              hd(ci, {
                get nodeClickDistance() {
                  return Ze();
                },
                $$events: {
                  nodeclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemouseenter(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemousemove(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemouseleave(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstart(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedrag(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstop(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodecontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              });
              var bf = B(ci, 2);
              $d(bf, {
                $$events: {
                  selectionclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  selectioncontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstart(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedrag(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstop(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              }), A(tr, Et);
            },
            $$slots: { default: !0 }
          });
          var Yt = B(pt, 2);
          xd(Yt, {}), A(Ie, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ne = B(Dr, 2);
  kd(ne, {
    get proOptions() {
      return Ve();
    },
    get position() {
      return fe();
    }
  });
  var we = B(ne, 2);
  Ht(we, t, "default", {}), j(Dt), Dn(Dt, (Z) => ee(Qn, Z), () => f(Qn)), Te(
    (Z) => wr = gn(
      Dt,
      wr,
      {
        style: Qt(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Bt([
        "svelte-flow",
        Vt(),
        c()
      ])
    ],
    ke
  ), ml(Dt, "clientWidth", (Z) => ee(yt, Z)), ml(Dt, "clientHeight", (Z) => ee(Ct, Z)), dt("dragover", Dt, function(Z) {
    Ue.call(this, t, Z);
  }), dt("drop", Dt, function(Z) {
    Ue.call(this, t, Z);
  }), A(e, Dt);
  var He = me({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), y();
    },
    get nodes() {
      return v();
    },
    set nodes(Z) {
      v(Z), y();
    },
    get edges() {
      return g();
    },
    set edges(Z) {
      g(Z), y();
    },
    get fitView() {
      return p();
    },
    set fitView(Z) {
      p(Z), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Z) {
      x(Z), y();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Z) {
      b(Z), y();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Z) {
      $(Z), y();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(Z) {
      h(Z), y();
    },
    get viewport() {
      return C();
    },
    set viewport(Z) {
      C(Z), y();
    },
    get nodeTypes() {
      return m();
    },
    set nodeTypes(Z) {
      m(Z), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Z) {
      k(Z), y();
    },
    get selectionKey() {
      return P();
    },
    set selectionKey(Z) {
      P(Z), y();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(Z) {
      E(Z), y();
    },
    get panActivationKey() {
      return H();
    },
    set panActivationKey(Z) {
      H(Z), y();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(Z) {
      O(Z), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(Z) {
      D(Z), y();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(Z) {
      q(Z), y();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(Z) {
      z(Z), y();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(Z) {
      R(Z), y();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Z) {
      S(Z), y();
    },
    get snapGrid() {
      return _();
    },
    set snapGrid(Z) {
      _(Z), y();
    },
    get deleteKey() {
      return M();
    },
    set deleteKey(Z) {
      M(Z), y();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(Z) {
      N(Z), y();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(Z) {
      T(Z), y();
    },
    get connectionMode() {
      return V();
    },
    set connectionMode(Z) {
      V(Z), y();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(Z) {
      I(Z), y();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(Z) {
      X(Z), y();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(Z) {
      W(Z), y();
    },
    get onMove() {
      return U();
    },
    set onMove(Z) {
      U(Z), y();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(Z) {
      Q(Z), y();
    },
    get isValidConnection() {
      return K();
    },
    set isValidConnection(Z) {
      K(Z), y();
    },
    get translateExtent() {
      return ce();
    },
    set translateExtent(Z) {
      ce(Z), y();
    },
    get nodeExtent() {
      return ue();
    },
    set nodeExtent(Z) {
      ue(Z), y();
    },
    get onlyRenderVisibleElements() {
      return ye();
    },
    set onlyRenderVisibleElements(Z) {
      ye(Z), y();
    },
    get panOnScrollMode() {
      return se();
    },
    set panOnScrollMode(Z) {
      se(Z), y();
    },
    get preventScrolling() {
      return _e();
    },
    set preventScrolling(Z) {
      _e(Z), y();
    },
    get zoomOnScroll() {
      return xe();
    },
    set zoomOnScroll(Z) {
      xe(Z), y();
    },
    get zoomOnDoubleClick() {
      return Oe();
    },
    set zoomOnDoubleClick(Z) {
      Oe(Z), y();
    },
    get zoomOnPinch() {
      return le();
    },
    set zoomOnPinch(Z) {
      le(Z), y();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(Z) {
      J(Z), y();
    },
    get panOnDrag() {
      return Me();
    },
    set panOnDrag(Z) {
      Me(Z), y();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(Z) {
      F(Z), y();
    },
    get autoPanOnConnect() {
      return Ae();
    },
    set autoPanOnConnect(Z) {
      Ae(Z), y();
    },
    get autoPanOnNodeDrag() {
      return Ke();
    },
    set autoPanOnNodeDrag(Z) {
      Ke(Z), y();
    },
    get onerror() {
      return qe();
    },
    set onerror(Z) {
      qe(Z), y();
    },
    get ondelete() {
      return ge();
    },
    set ondelete(Z) {
      ge(Z), y();
    },
    get onedgecreate() {
      return he();
    },
    set onedgecreate(Z) {
      he(Z), y();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(Z) {
      fe(Z), y();
    },
    get proOptions() {
      return Ve();
    },
    set proOptions(Z) {
      Ve(Z), y();
    },
    get defaultEdgeOptions() {
      return ct();
    },
    set defaultEdgeOptions(Z) {
      ct(Z), y();
    },
    get width() {
      return vt();
    },
    set width(Z) {
      vt(Z), y();
    },
    get height() {
      return te();
    },
    set height(Z) {
      te(Z), y();
    },
    get colorMode() {
      return Fe();
    },
    set colorMode(Z) {
      Fe(Z), y();
    },
    get onconnect() {
      return de();
    },
    set onconnect(Z) {
      de(Z), y();
    },
    get onconnectstart() {
      return jt();
    },
    set onconnectstart(Z) {
      jt(Z), y();
    },
    get onconnectend() {
      return Xt();
    },
    set onconnectend(Z) {
      Xt(Z), y();
    },
    get onbeforedelete() {
      return ln();
    },
    set onbeforedelete(Z) {
      ln(Z), y();
    },
    get oninit() {
      return De();
    },
    set oninit(Z) {
      De(Z), y();
    },
    get nodeOrigin() {
      return st();
    },
    set nodeOrigin(Z) {
      st(Z), y();
    },
    get paneClickDistance() {
      return Be();
    },
    set paneClickDistance(Z) {
      Be(Z), y();
    },
    get nodeClickDistance() {
      return Ze();
    },
    set nodeClickDistance(Z) {
      Ze(Z), y();
    },
    get defaultMarkerColor() {
      return lt();
    },
    set defaultMarkerColor(Z) {
      lt(Z), y();
    },
    get style() {
      return Qt();
    },
    set style(Z) {
      Qt(Z), y();
    },
    get class() {
      return Vt();
    },
    set class(Z) {
      Vt(Z), y();
    }
  });
  return a(), He;
}
ve(
  Sd,
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
function Ed(e, t) {
  pe(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), a = w(t, "fitView", 12, void 0), s = w(t, "nodeOrigin", 12, void 0);
  const l = cd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Qr(ba, { getStore: () => l }), Hs(() => {
    l.reset();
  }), je();
  var c = it(), u = Ce(c);
  return Ht(u, t, "default", {}), A(e, c), me({
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
      return i();
    },
    set initialHeight(d) {
      i(d), y();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), y();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), y();
    }
  });
}
ve(
  Ed,
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
var Om = /* @__PURE__ */ ie("<button><!></button>");
function Po(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  pe(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), a = w(t, "bgColorHover", 12, void 0), s = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), c = w(t, "borderColor", 12, void 0);
  je();
  var u = Om();
  let d;
  var v = Y(u);
  return Ht(v, t, "default", { class: "button-svg" }), j(u), Te(
    (g) => d = gn(u, d, {
      type: "button",
      class: g,
      ...r,
      [xr]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": c()
      }
    }),
    [
      () => Bt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    ke
  ), dt("click", u, function(g) {
    Ue.call(this, t, g);
  }), A(e, u), me({
    get class() {
      return o();
    },
    set class(g) {
      o(g), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), y();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(g) {
      a(g), y();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), y();
    },
    get borderColor() {
      return c();
    },
    set borderColor(g) {
      c(g), y();
    }
  });
}
ve(
  Po,
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
var Nm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Md(e) {
  var t = Nm();
  A(e, t);
}
ve(Md, {}, [], [], !0);
var Hm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Pd(e) {
  var t = Hm();
  A(e, t);
}
ve(Pd, {}, [], [], !0);
var Lm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Td(e) {
  var t = Lm();
  A(e, t);
}
ve(Td, {}, [], [], !0);
var zm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Vd(e) {
  var t = zm();
  A(e, t);
}
ve(Vd, {}, [], [], !0);
var Dm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Od(e) {
  var t = Dm();
  A(e, t);
}
ve(Od, {}, [], [], !0);
var Am = /* @__PURE__ */ ie("<!> <!>", 1), Rm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Nd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(T, "$nodesDraggable", n), i = () => oe(V, "$nodesConnectable", n), a = () => oe(I, "$elementsSelectable", n), s = () => oe(_, "$viewport", n), l = () => oe(M, "$minZoom", n), c = () => oe(N, "$maxZoom", n), u = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae();
  let p = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), $ = w(t, "showLock", 12, !0), h = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), P = w(t, "buttonBorderColor", 12, void 0), E = w(t, "ariaLabel", 12, void 0), H = w(t, "style", 12, void 0), O = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), q = w(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: R,
    fitView: S,
    viewport: _,
    minZoom: M,
    maxZoom: N,
    nodesDraggable: T,
    nodesConnectable: V,
    elementsSelectable: I
  } = et(), X = {
    bgColor: h(),
    bgColorHover: C(),
    color: m(),
    colorHover: k(),
    borderColor: P()
  }, W = () => {
    z();
  }, U = () => {
    R();
  }, Q = () => {
    S(D());
  }, K = () => {
    ee(u, !f(u)), T.set(f(u)), V.set(f(u)), I.set(f(u));
  };
  be(
    () => (o(), i(), a()),
    () => {
      ee(u, o() || i() || a());
    }
  ), be(() => (s(), l()), () => {
    ee(d, s().zoom <= l());
  }), be(() => (s(), c()), () => {
    ee(v, s().zoom >= c());
  }), be(() => re(O()), () => {
    ee(g, O() === "horizontal" ? "horizontal" : "vertical");
  }), Tt(), je();
  const ce = /* @__PURE__ */ ke(() => Bt([
    "svelte-flow__controls",
    f(g),
    q()
  ])), ue = /* @__PURE__ */ ke(() => E() ?? "Svelte Flow controls");
  ri(e, {
    get class() {
      return f(ce);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(ue);
    },
    get style() {
      return H();
    },
    children: (se, _e) => {
      var xe = Rm(), Oe = Ce(xe);
      Ht(Oe, t, "before", {});
      var le = B(Oe, 2);
      {
        var J = (he) => {
          var fe = Am(), Ve = Ce(fe);
          Po(Ve, mt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            X,
            {
              $$events: { click: W },
              children: (vt, te) => {
                Md(vt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ct = B(Ve, 2);
          Po(ct, mt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            X,
            {
              $$events: { click: U },
              children: (vt, te) => {
                Pd(vt);
              },
              $$slots: { default: !0 }
            }
          )), A(he, fe);
        };
        $e(le, (he) => {
          x() && he(J);
        });
      }
      var Me = B(le, 2);
      {
        var F = (he) => {
          Po(he, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: Q },
              children: (fe, Ve) => {
                Td(fe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Me, (he) => {
          b() && he(F);
        });
      }
      var Ae = B(Me, 2);
      {
        var Ke = (he) => {
          Po(he, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: K },
              children: (fe, Ve) => {
                var ct = it(), vt = Ce(ct);
                {
                  var te = (de) => {
                    Od(de);
                  }, Fe = (de) => {
                    Vd(de);
                  };
                  $e(vt, (de) => {
                    f(u) ? de(te) : de(Fe, !1);
                  });
                }
                A(fe, ct);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Ae, (he) => {
          $() && he(Ke);
        });
      }
      var qe = B(Ae, 2);
      Ht(qe, t, "default", {});
      var ge = B(qe, 2);
      Ht(ge, t, "after", {}), A(se, xe);
    },
    $$slots: { default: !0 }
  });
  var ye = me({
    get position() {
      return p();
    },
    set position(se) {
      p(se), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(se) {
      x(se), y();
    },
    get showFitView() {
      return b();
    },
    set showFitView(se) {
      b(se), y();
    },
    get showLock() {
      return $();
    },
    set showLock(se) {
      $(se), y();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(se) {
      h(se), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(se) {
      C(se), y();
    },
    get buttonColor() {
      return m();
    },
    set buttonColor(se) {
      m(se), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(se) {
      k(se), y();
    },
    get buttonBorderColor() {
      return P();
    },
    set buttonBorderColor(se) {
      P(se), y();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(se) {
      E(se), y();
    },
    get style() {
      return H();
    },
    set style(se) {
      H(se), y();
    },
    get orientation() {
      return O();
    },
    set orientation(se) {
      O(se), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(se) {
      D(se), y();
    },
    get class() {
      return q();
    },
    set class(se) {
      q(se), y();
    }
  });
  return r(), ye;
}
ve(
  Nd,
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
var dr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(dr || (dr = {}));
var Im = /* @__PURE__ */ Pe("<circle></circle>");
function Hd(e, t) {
  pe(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  je();
  var o = Im();
  return Te(
    (i) => {
      Se(o, "cx", n()), Se(o, "cy", n()), Se(o, "r", n()), Lt(o, 0, i);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    ke
  ), A(e, o), me({
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
ve(Hd, { radius: {}, class: {} }, [], [], !0);
var qm = /* @__PURE__ */ Pe("<path></path>");
function Ld(e, t) {
  pe(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  je();
  var a = qm();
  return Te(
    (s) => {
      Se(a, "stroke-width", n()), Se(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Lt(a, 0, s);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    ke
  ), A(e, a), me({
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
      return i();
    },
    set class(s) {
      i(s), y();
    }
  });
}
ve(
  Ld,
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
const Zm = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var Bm = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const jm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function zd(e, t) {
  pe(t, !1), at(e, jm);
  const [n, r] = ft(), o = () => oe(k, "$flowId", n), i = () => oe(m, "$viewport", n), a = /* @__PURE__ */ ae(), s = /* @__PURE__ */ ae(), l = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, void 0), v = w(t, "variant", 28, () => dr.Dots), g = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), $ = w(t, "patternColor", 12, void 0), h = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: m, flowId: k } = et(), P = p() || Zm[v()], E = v() === dr.Dots, H = v() === dr.Cross, O = Array.isArray(g()) ? g() : [g(), g()];
  be(
    () => (o(), re(d())),
    () => {
      ee(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), be(() => i(), () => {
    ee(s, [
      O[0] * i().zoom || 1,
      O[1] * i().zoom || 1
    ]);
  }), be(() => i(), () => {
    ee(l, P * i().zoom);
  }), be(() => (f(l), f(s)), () => {
    ee(c, H ? [f(l), f(l)] : f(s));
  }), be(
    () => (f(l), f(c)),
    () => {
      ee(u, E ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(c)[0] / 2,
        f(c)[1] / 2
      ]);
    }
  ), Tt(), je();
  var D = Bm();
  let q;
  var z = Y(D), R = Y(z);
  {
    var S = (T) => {
      const V = /* @__PURE__ */ ke(() => f(l) / 2);
      Hd(T, {
        get radius() {
          return f(V);
        },
        get class() {
          return h();
        }
      });
    }, _ = (T) => {
      Ld(T, {
        get dimensions() {
          return f(c);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return h();
        }
      });
    };
    $e(R, (T) => {
      E ? T(S) : T(_, !1);
    });
  }
  j(z);
  var M = B(z);
  j(D), Te(
    (T) => {
      Lt(D, 0, T, "svelte-1r7pe8d"), q = $t(D, "", q, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), Se(z, "id", f(a)), Se(z, "x", i().x % f(s)[0]), Se(z, "y", i().y % f(s)[1]), Se(z, "width", f(s)[0]), Se(z, "height", f(s)[1]), Se(z, "patternTransform", `translate(-${f(u)[0]},-${f(u)[1]})`), Se(M, "fill", `url(#${f(a)})`);
    },
    [
      () => Sn(Bt(["svelte-flow__background", C()]))
    ],
    ke
  ), A(e, D);
  var N = me({
    get id() {
      return d();
    },
    set id(T) {
      d(T), y();
    },
    get variant() {
      return v();
    },
    set variant(T) {
      v(T), y();
    },
    get gap() {
      return g();
    },
    set gap(T) {
      g(T), y();
    },
    get size() {
      return p();
    },
    set size(T) {
      p(T), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(T) {
      x(T), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(T) {
      b(T), y();
    },
    get patternColor() {
      return $();
    },
    set patternColor(T) {
      $(T), y();
    },
    get patternClass() {
      return h();
    },
    set patternClass(T) {
      h(T), y();
    },
    get class() {
      return C();
    },
    set class(T) {
      C(T), y();
    }
  });
  return r(), N;
}
ve(
  zd,
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
var Xm = /* @__PURE__ */ Pe("<rect></rect>");
function Dd(e, t) {
  pe(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), a = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), c = w(t, "strokeColor", 12, void 0), u = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), v = w(t, "class", 12, "");
  je();
  var g = Xm();
  let p;
  return Te(
    (x, b) => {
      p = Lt(g, 0, x, null, p, b), Se(g, "x", n()), Se(g, "y", r()), Se(g, "rx", a()), Se(g, "ry", a()), Se(g, "width", o()), Se(g, "height", i()), $t(g, `${s() ? `fill: ${s()};` : ""}${c() ? `stroke: ${c()};` : ""}${u() ? `stroke-width: ${u()};` : ""}`), Se(g, "shape-rendering", l());
    },
    [
      () => Sn(Bt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    ke
  ), A(e, g), me({
    get x() {
      return n();
    },
    set x(x) {
      n(x), y();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), y();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), y();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), y();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(x) {
      a(x), y();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), y();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(x) {
      c(x), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(x) {
      u(x), y();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), y();
    },
    get class() {
      return v();
    },
    set class(x) {
      v(x), y();
    }
  });
}
ve(
  Dd,
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
function iu(e, t) {
  const n = P0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = G(t.viewport);
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
const qa = (e) => e instanceof Function ? e : () => e;
var Ym = /* @__PURE__ */ Pe("<title> </title>"), Wm = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Ad(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(Me, "$flowId", n), i = () => oe(Oe, "$viewport", n), a = () => oe(le, "$containerWidth", n), s = () => oe(J, "$containerHeight", n), l = () => oe(xe, "$nodeLookup", n), c = () => oe(_e, "$nodes", n), u = () => oe(F, "$panZoom", n), d = () => oe(Ae, "$translateExtent", n), v = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), C = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), P = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae();
  let O = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), q = w(t, "nodeStrokeColor", 12, "transparent"), z = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), _ = w(t, "nodeStrokeWidth", 12, 2), M = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), T = w(t, "maskStrokeColor", 12, void 0), V = w(t, "maskStrokeWidth", 12, void 0), I = w(t, "width", 12, void 0), X = w(t, "height", 12, void 0), W = w(t, "pannable", 12, !0), U = w(t, "zoomable", 12, !0), Q = w(t, "inversePan", 12, void 0), K = w(t, "zoomStep", 12, void 0), ce = w(t, "style", 12, ""), ue = w(t, "class", 12, "");
  const ye = 200, se = 150, {
    nodes: _e,
    nodeLookup: xe,
    viewport: Oe,
    width: le,
    height: J,
    flowId: Me,
    panZoom: F,
    translateExtent: Ae
  } = et(), Ke = z() === void 0 ? void 0 : qa(z()), qe = qa(q()), ge = qa(R()), he = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), fe = `svelte-flow__minimap-desc-${o()}`;
  let Ve = /* @__PURE__ */ ae(f(v));
  const ct = () => f($);
  be(
    () => (i(), a(), s()),
    () => {
      ee(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), be(
    () => (l(), f(v), c()),
    () => {
      ee(Ve, l().size > 0 ? Dc(ei(l(), { filter: (de) => !de.hidden }), f(v)) : f(v)), c();
    }
  ), be(() => re(I()), () => {
    ee(g, I() ?? ye);
  }), be(() => re(X()), () => {
    ee(p, X() ?? se);
  }), be(
    () => (f(Ve), f(g)),
    () => {
      ee(x, f(Ve).width / f(g));
    }
  ), be(
    () => (f(Ve), f(p)),
    () => {
      ee(b, f(Ve).height / f(p));
    }
  ), be(
    () => (f(x), f(b)),
    () => {
      ee($, Math.max(f(x), f(b)));
    }
  ), be(() => (f($), f(g)), () => {
    ee(h, f($) * f(g));
  }), be(
    () => (f($), f(p)),
    () => {
      ee(C, f($) * f(p));
    }
  ), be(() => f($), () => {
    ee(m, 5 * f($));
  }), be(
    () => (f(Ve), f(h), f(m)),
    () => {
      ee(k, f(Ve).x - (f(h) - f(Ve).width) / 2 - f(m));
    }
  ), be(
    () => (f(Ve), f(C), f(m)),
    () => {
      ee(P, f(Ve).y - (f(C) - f(Ve).height) / 2 - f(m));
    }
  ), be(() => (f(h), f(m)), () => {
    ee(E, f(h) + f(m) * 2);
  }), be(() => (f(C), f(m)), () => {
    ee(H, f(C) + f(m) * 2);
  }), Tt(), je();
  const vt = /* @__PURE__ */ ke(() => ce() + (M() ? `;--xy-minimap-background-color-props:${M()}` : "")), te = /* @__PURE__ */ ke(() => Bt(["svelte-flow__minimap", ue()]));
  ri(e, {
    get position() {
      return O();
    },
    get style() {
      return f(vt);
    },
    get class() {
      return f(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (de, jt) => {
      var Xt = it(), ln = Ce(Xt);
      {
        var De = (st) => {
          var Be = Wm();
          Se(Be, "aria-labelledby", fe);
          let Ze;
          var lt = Y(Be);
          {
            var Qt = (yt) => {
              var Ct = Ym();
              Se(Ct, "id", fe);
              var Pn = Y(Ct, !0);
              j(Ct), Te(() => xt(Pn, D())), A(yt, Ct);
            };
            $e(lt, (yt) => {
              D() && yt(Qt);
            });
          }
          var Vt = B(lt);
          Zt(Vt, 1, c, (yt) => yt.id, (yt, Ct) => {
            var Pn = it();
            const rt = /* @__PURE__ */ ke(() => l().get(f(Ct).id));
            var yo = Ce(Pn);
            {
              var er = (Dt) => {
                const wr = /* @__PURE__ */ ke(() => yr(f(rt))), br = /* @__PURE__ */ ke(() => Ke == null ? void 0 : Ke(f(rt))), Dr = /* @__PURE__ */ ke(() => qe(f(rt))), wo = /* @__PURE__ */ ke(() => ge(f(rt)));
                Dd(Dt, mt(
                  {
                    get x() {
                      return f(rt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(rt).internals.positionAbsolute.y;
                    }
                  },
                  () => f(wr),
                  {
                    get selected() {
                      return f(rt).selected;
                    },
                    get color() {
                      return f(br);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return f(Dr);
                    },
                    get strokeWidth() {
                      return _();
                    },
                    shapeRendering: he,
                    get class() {
                      return f(wo);
                    }
                  }
                ));
              };
              $e(yo, (Dt) => {
                f(rt) && Ac(f(rt)) && Dt(er);
              });
            }
            A(yt, Pn);
          });
          var Qn = B(Vt);
          j(Be), Nt(Be, (yt, Ct) => iu == null ? void 0 : iu(yt, Ct), () => ({
            panZoom: u(),
            viewport: Oe,
            getViewScale: ct,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: K(),
            pannable: W(),
            zoomable: U()
          })), Te(() => {
            Se(Be, "width", f(g)), Se(Be, "height", f(p)), Se(Be, "viewBox", `${f(k) ?? ""} ${f(P) ?? ""} ${f(E) ?? ""} ${f(H) ?? ""}`), Ze = $t(Be, "", Ze, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": V() ? V() * f($) : void 0
            }), Se(Qn, "d", `M${f(k) - f(m)},${f(P) - f(m)}h${f(E) + f(m) * 2}v${f(H) + f(m) * 2}h${-f(E) - f(m) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), A(st, Be);
        };
        $e(ln, (st) => {
          u() && st(De);
        });
      }
      A(de, Xt);
    },
    $$slots: { default: !0 }
  });
  var Fe = me({
    get position() {
      return O();
    },
    set position(de) {
      O(de), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(de) {
      D(de), y();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(de) {
      q(de), y();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(de) {
      z(de), y();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(de) {
      R(de), y();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(de) {
      S(de), y();
    },
    get nodeStrokeWidth() {
      return _();
    },
    set nodeStrokeWidth(de) {
      _(de), y();
    },
    get bgColor() {
      return M();
    },
    set bgColor(de) {
      M(de), y();
    },
    get maskColor() {
      return N();
    },
    set maskColor(de) {
      N(de), y();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(de) {
      T(de), y();
    },
    get maskStrokeWidth() {
      return V();
    },
    set maskStrokeWidth(de) {
      V(de), y();
    },
    get width() {
      return I();
    },
    set width(de) {
      I(de), y();
    },
    get height() {
      return X();
    },
    set height(de) {
      X(de), y();
    },
    get pannable() {
      return W();
    },
    set pannable(de) {
      W(de), y();
    },
    get zoomable() {
      return U();
    },
    set zoomable(de) {
      U(de), y();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(de) {
      Q(de), y();
    },
    get zoomStep() {
      return K();
    },
    set zoomStep(de) {
      K(de), y();
    },
    get style() {
      return ce();
    },
    set style(de) {
      ce(de), y();
    },
    get class() {
      return ue();
    },
    set class(de) {
      ue(de), y();
    }
  });
  return r(), Fe;
}
ve(
  Ad,
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
const au = (e) => Zp(e);
function Jt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: c, panZoom: u, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = et(), h = (k) => {
    var P, E;
    const H = G(p), O = au(k) ? k : H.get(k.id), D = O.parentId ? Gp(O.position, O.measured, O.parentId, H, G(x)) : O.position, q = {
      ...O,
      position: D,
      width: ((P = O.measured) == null ? void 0 : P.width) ?? O.width,
      height: ((E = O.measured) == null ? void 0 : E.height) ?? O.height
    };
    return io(q);
  }, C = (k, P, E = { replace: !1 }) => {
    var H;
    const O = (H = G(p).get(k)) == null ? void 0 : H.internals.userNode;
    if (!O)
      return;
    const D = typeof P == "function" ? P(O) : P;
    E.replace ? d.update((q) => q.map((z) => z.id === k ? au(D) ? D : { ...z, ...D } : z)) : (Object.assign(O, D), d.update((q) => q));
  }, m = (k) => G(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (k) => {
      var P;
      return (P = m(k)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? G(d) : su(G(p), k),
    getEdge: (k) => G(b).get(k),
    getEdges: (k) => k === void 0 ? G(v) : su(G(b), k),
    setZoom: (k, P) => {
      const E = G(u);
      return E ? E.scaleTo(k, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => G(i).zoom,
    setViewport: async (k, P) => {
      const E = G(i), H = G(u);
      return H ? (await H.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => G(i),
    setCenter: async (k, P, E) => {
      const H = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : G(c), O = G(u);
      return O ? (await O.setViewport({
        x: G(a) / 2 - k * H,
        y: G(s) / 2 - P * H,
        zoom: H
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, P) => {
      const E = G(u);
      if (!E)
        return Promise.resolve(!1);
      const H = js(k, G(a), G(s), G(l), G(c), (P == null ? void 0 : P.padding) ?? 0.1);
      return await E.setViewport(H, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, P = !0, E) => {
      const H = Zl(k), O = H ? k : h(k);
      return O ? (E || G(d)).filter((D) => {
        const q = G(p).get(D.id);
        if (!q || !H && D.id === k.id)
          return !1;
        const z = io(q), R = jo(z, O);
        return P && R > 0 || R >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (k, P, E = !0) => {
      const H = Zl(k) ? k : h(k);
      if (!H)
        return !1;
      const O = jo(H, P);
      return E && O > 0 || O >= H.width * H.height;
    },
    deleteElements: async ({ nodes: k = [], edges: P = [] }) => {
      const { nodes: E, edges: H } = await Hc({
        nodesToRemove: k,
        edgesToRemove: P,
        nodes: G(d),
        edges: G(v),
        onBeforeDelete: G(r)
      });
      return E && d.update((O) => O.filter((D) => !E.some(({ id: q }) => q === D.id))), H && v.update((O) => O.filter((D) => !H.some(({ id: q }) => q === D.id))), {
        deletedNodes: E,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, P = { snapToGrid: !0 }) => {
      const E = G(g);
      if (!E)
        return k;
      const H = P.snapToGrid ? G(o) : !1, { x: O, y: D, zoom: q } = G(i), { x: z, y: R } = E.getBoundingClientRect(), S = {
        x: k.x - z,
        y: k.y - R
      };
      return ti(S, [O, D, q], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const P = G(g);
      if (!P)
        return k;
      const { x: E, y: H, zoom: O } = G(i), { x: D, y: q } = P.getBoundingClientRect(), z = Xi(k, [E, H, O]);
      return {
        x: z.x + D,
        y: z.y + q
      };
    },
    toObject: () => ({
      nodes: G(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: G(v).map((k) => ({ ...k })),
      viewport: { ...G(i) }
    }),
    updateNode: C,
    updateNodeData: (k, P, E) => {
      var H;
      const O = (H = G(p).get(k)) == null ? void 0 : H.internals.userNode;
      if (!O)
        return;
      const D = typeof P == "function" ? P(O) : P;
      O.data = E != null && E.replace ? D : { ...O.data, ...D }, d.update((q) => q);
    },
    getNodesBounds: (k) => {
      const P = G(p), E = G(x);
      return Bp(k, { nodeLookup: P, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: P, nodeId: E }) => {
      var H;
      return Array.from(((H = G($).get(`${E}-${k}-${P ?? null}`)) == null ? void 0 : H.values()) ?? []);
    },
    viewport: i
  };
}
function su(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const a = "internals" in i ? (n = i.internals) == null ? void 0 : n.userNode : i;
      r.push(a);
    }
  }
  return r;
}
var Km = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Rd(e, t) {
  pe(t, !1);
  const [n, r] = ft(), o = () => oe(C, "$nodes", n), i = () => oe(h, "$nodeLookup", n), a = () => oe($, "$viewport", n), s = () => oe(b, "$domNode", n), l = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let d = w(t, "nodeId", 12, void 0), v = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: h, nodes: C } = et(), { getNodesBounds: m } = Jt(), k = Mr("svelteflow__node_id");
  let P = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae([]), H = p() !== void 0 ? p() : 10, O = v() !== void 0 ? v() : Le.Top, D = g() !== void 0 ? g() : "center";
  be(
    () => (o(), re(d()), i()),
    () => {
      o();
      const _ = Array.isArray(d()) ? d() : [d() || k];
      ee(E, _.reduce(
        (M, N) => {
          const T = i().get(N);
          return T && M.push(T), M;
        },
        []
      ));
    }
  ), be(
    () => (f(E), a()),
    () => {
      const _ = m(f(E));
      _ && ee(P, f0(_, a(), O, H, D));
    }
  ), be(() => f(E), () => {
    ee(l, f(E).length === 0 ? 1 : Math.max(...f(E).map((_) => (_.internals.z || 5) + 1)));
  }), be(() => o(), () => {
    ee(c, o().filter((_) => _.selected).length);
  }), be(
    () => (re(x()), f(E), f(c)),
    () => {
      ee(u, typeof x() == "boolean" ? x() : f(E).length === 1 && f(E)[0].selected && f(c) === 1);
    }
  ), Tt(), je();
  var q = it(), z = Ce(q);
  {
    var R = (_) => {
      var M = Km();
      let N;
      var T = Y(M);
      Ht(T, t, "default", {}), j(M), Nt(M, (V, I) => Fi == null ? void 0 : Fi(V, I), () => ({ domNode: s() })), Te(
        (V) => {
          Se(M, "data-id", V), N = $t(M, "", N, {
            position: "absolute",
            transform: f(P),
            "z-index": f(l)
          });
        },
        [
          () => f(E).reduce((V, I) => `${V}${I.id} `, "").trim()
        ],
        ke
      ), A(_, M);
    };
    $e(z, (_) => {
      s() && f(u) && f(E) && _(R);
    });
  }
  A(e, q);
  var S = me({
    get nodeId() {
      return d();
    },
    set nodeId(_) {
      d(_), y();
    },
    get position() {
      return v();
    },
    set position(_) {
      v(_), y();
    },
    get align() {
      return g();
    },
    set align(_) {
      g(_), y();
    },
    get offset() {
      return p();
    },
    set offset(_) {
      p(_), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(_) {
      x(_), y();
    }
  });
  return r(), S;
}
ve(
  Rd,
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
  const { nodes: t, nodeLookup: n } = et();
  let r = [], o = !0;
  return ur([t, n], ([, i], a) => {
    var s;
    const l = [], c = Array.isArray(e), u = c ? e : [e];
    for (const d of u) {
      const v = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      v && l.push({
        id: v.id,
        type: v.type,
        data: v.data
      });
    }
    (!b0(l, r) || o) && (r = l, a(c ? l : l[0] ?? null), o = !1);
  });
}
const lu = "tinyflow-component";
class Fm {
  constructor(t) {
    if (Ft(this, "options"), Ft(this, "rootEl"), Ft(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(lu);
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
    const n = document.createElement(lu);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Gm = () => {
  const e = Ee([]), t = Ee([]), n = Ee({ x: 250, y: 100, zoom: 1 });
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
      e.update((o) => o.filter((i) => i.id !== r));
    },
    updateNode: (r, o) => {
      e.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((a) => a.id === r ? { ...a, data: { ...a.data, ...o } } : a)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (i) => i.id === r ? { ...i, selected: !0 } : { ...i, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((i) => i.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((a) => a.id === r ? { ...a, data: o } : a));
    }
  };
}, Si = Gm();
var Um = /* @__PURE__ */ ie("<button><!></button>");
function nt(e, t) {
  pe(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Um();
  let i;
  var a = Y(o);
  return Pr(a, () => n() ?? kt), j(o), Te(() => i = gn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), A(e, o), me({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
ve(nt, { children: {} }, [], [], !0);
var Jm = /* @__PURE__ */ ie("<input>");
function Id(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ zt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Jm();
  kr(r);
  let o;
  Te(() => o = gn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Id, {}, [], [], !0);
var Qm = /* @__PURE__ */ ie("<input>");
function Mt(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ zt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Qm();
  kr(r);
  let o;
  Te(() => o = gn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Mt, {}, [], [], !0);
var e2 = /* @__PURE__ */ ie("<textarea></textarea>");
function Pt(e, t) {
  pe(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = e2();
  L1(o);
  let i;
  return Te(() => i = gn(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), A(e, o), me({
    get value() {
      return n();
    },
    set value(a) {
      n(a), y();
    }
  });
}
ve(Pt, { value: {} }, [], [], !0);
var t2 = /* @__PURE__ */ ie('<div role="button"><!></div>'), n2 = /* @__PURE__ */ ie("<div></div>");
function qd(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  pe(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), a = w(t, "activeIndex", 12, 0);
  function s(u, d) {
    var v;
    a(d), (v = i()) == null || v(u, d);
  }
  je();
  var l = n2();
  let c;
  return Zt(l, 5, o, eo, (u, d, v) => {
    var g = t2();
    Se(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = Y(g);
    {
      var x = ($) => {
        var h = We();
        Te(() => xt(h, f(d).label)), A($, h);
      }, b = ($) => {
        var h = it(), C = Ce(h);
        Pr(C, () => f(d).label ?? kt), A($, h);
      };
      $e(p, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    j(g), Te(() => Lt(g, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), A(u, g);
  }), j(l), Te(() => c = gn(l, c, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), me({
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
      return a();
    },
    set activeIndex(u) {
      a(u), y();
    }
  });
}
ho(["click", "keydown"]);
ve(qd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var r2 = (e, t, n) => t(f(n)), o2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, i2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), a2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), s2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), l2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), u2 = /* @__PURE__ */ ie("<div></div>");
const c2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Zd(e, t) {
  pe(t, !0), at(e, c2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => wn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((c) => c !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = u2();
  return Zt(a, 21, n, eo, (s, l, c) => {
    var u = l2(), d = Y(u);
    Se(d, "tabindex", c), d.__click = [r2, i, l], d.__keydown = [o2, i, l];
    var v = Y(d);
    {
      var g = (m) => {
        var k = i2(), P = Y(k);
        sr(P, {
          get target() {
            return f(l).icon;
          }
        }), j(k), A(m, k);
      };
      $e(v, (m) => {
        f(l).icon && m(g);
      });
    }
    var p = B(v, 2);
    sr(p, {
      get target() {
        return f(l).title;
      }
    });
    var x = B(p, 2);
    j(d);
    var b = B(d, 2);
    {
      var $ = (m) => {
        var k = a2(), P = Y(k);
        sr(P, {
          get target() {
            return f(l).description;
          }
        }), j(k), A(m, k);
      };
      $e(b, (m) => {
        f(l).description && m($);
      });
    }
    var h = B(b, 2);
    {
      var C = (m) => {
        var k = s2(), P = Y(k);
        sr(P, {
          get target() {
            return f(l).content;
          }
        }), j(k), A(m, k);
      };
      $e(h, (m) => {
        o().includes(f(l).key) && m(C);
      });
    }
    j(u), Te((m) => Lt(x, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), A(s, u);
  }), j(a), Te(() => {
    $t(a, t.style), Lt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, a), me({
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
ho(["click", "keydown"]);
ve(Zd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  pe(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = it(), o = Ce(r);
  {
    var i = (s) => {
      var l = it(), c = Ce(l);
      Pr(c, () => n() ?? kt), A(s, l);
    }, a = (s) => {
      var l = it(), c = Ce(l);
      Ns(c, n), A(s, l);
    };
    $e(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return A(e, r), me({
    get target() {
      return n();
    },
    set target(s) {
      n(s), y();
    }
  });
}
ve(sr, { target: {} }, [], [], !0);
var d2 = (e, t, n) => t(f(n)), f2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), v2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), g2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), h2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), p2 = /* @__PURE__ */ ie("<!> <!>", 1), m2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), y2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), w2 = /* @__PURE__ */ ie("<div><!></div>");
function hn(e, t) {
  pe(t, !0);
  const n = (C, m = kt) => {
    var k = it(), P = Ce(k);
    Zt(P, 19, m, (E, H) => `${H}_${E.value}`, (E, H) => {
      var O = g2(), D = Ce(O);
      D.__click = [d2, x, H];
      var q = Y(D), z = Y(q);
      {
        var R = (N) => {
          var T = f2();
          A(N, T);
        };
        $e(z, (N) => {
          f(H).children && f(H).children.length > 0 && N(R);
        });
      }
      j(q);
      var S = B(q, 2);
      sr(S, {
        get target() {
          return f(H).label;
        }
      }), j(D);
      var _ = B(D, 2);
      {
        var M = (N) => {
          var T = v2(), V = Y(T);
          n(V, () => f(H).children), j(T), A(N, T);
        };
        $e(_, (N) => {
          f(H).children && f(H).children.length > 0 && (l() || u().includes(f(H).value)) && N(M);
        });
      }
      A(E, O);
    }), A(C, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), a = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), c = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), v = /* @__PURE__ */ zt(t, [
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
  ]), g = /* @__PURE__ */ Ne(() => {
    const C = [], m = (k) => {
      for (let P of k)
        a().length > 0 ? a().includes(P.value) && C.push(P) : s().includes(P.value) && C.push(P), P.children && P.children.length > 0 && m(P.children);
    };
    return m(r()), C;
  }), p;
  function x(C) {
    var m, k;
    if (C.children && C.children.length > 0) {
      (m = o()) == null || m(C);
      return;
    } else
      p == null || p.hide(), (k = i()) == null || k(C);
  }
  var b = w2();
  let $;
  var h = Y(b);
  return Dn(
    mo(h, {
      floating: (C) => {
        var m = h2(), k = Y(m);
        n(k, r), j(m), A(C, m);
      },
      children: (C, m) => {
        var k = y2();
        let P;
        var E = Y(k);
        Zt(
          E,
          23,
          () => f(g),
          (H, O) => `${O}_${H.value}`,
          (H, O, D) => {
            var q = it(), z = Ce(q);
            {
              var R = (_) => {
                var M = it(), N = Ce(M);
                {
                  var T = (V) => {
                    sr(V, {
                      get target() {
                        return f(O).label;
                      }
                    });
                  };
                  $e(N, (V) => {
                    f(D) === 0 && V(T);
                  });
                }
                A(_, M);
              }, S = (_) => {
                var M = p2(), N = Ce(M);
                sr(N, {
                  get target() {
                    return f(O).label;
                  }
                });
                var T = B(N, 2);
                {
                  var V = (I) => {
                    var X = We(",");
                    A(I, X);
                  };
                  $e(T, (I) => {
                    f(D) < f(g).length - 1 && I(V);
                  });
                }
                A(_, M);
              };
              $e(z, (_) => {
                c() ? _(S, !1) : _(R);
              });
            }
            A(H, q);
          },
          (H) => {
            var O = m2(), D = Y(O, !0);
            j(O), Te(() => xt(D, d())), A(H, O);
          }
        ), j(E), Re(2), j(k), Te(() => P = gn(k, P, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), A(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), j(b), Te(() => $ = gn(b, $, {
    ...v,
    class: `tf-select ${v.class ?? ""}`
  })), A(e, b), me({
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
      return i();
    },
    set onSelect(C) {
      i(C), y();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), y();
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
      return c();
    },
    set multiple(C = !1) {
      c(C), y();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), y();
    }
  });
}
ho(["click"]);
ve(
  hn,
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
const Yo = Math.min, Kr = Math.max, Ji = Math.round, On = (e) => ({
  x: e,
  y: e
}), b2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, x2 = {
  start: "end",
  end: "start"
};
function fs(e, t, n) {
  return Kr(e, Yo(t, n));
}
function oi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nr(e) {
  return e.split("-")[0];
}
function ii(e) {
  return e.split("-")[1];
}
function Bd(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
function Er(e) {
  return ["top", "bottom"].includes(Nr(e)) ? "y" : "x";
}
function Gs(e) {
  return Bd(Er(e));
}
function $2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = Gs(e), i = Fs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Qi(a)), [a, Qi(a)];
}
function C2(e) {
  const t = Qi(e);
  return [vs(e), t, vs(t)];
}
function vs(e) {
  return e.replace(/start|end/g, (t) => x2[t]);
}
function _2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function k2(e, t, n, r) {
  const o = ii(e);
  let i = _2(Nr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(vs)))), i;
}
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => b2[t]);
}
function S2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jd(e) {
  return typeof e != "number" ? S2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ea(e) {
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
function uu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Er(t), a = Gs(t), s = Fs(a), l = Nr(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (ii(t)) {
    case "start":
      g[a] -= v * (n && c ? -1 : 1);
      break;
    case "end":
      g[a] += v * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const E2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = uu(c, r, l), v = r, g = {}, p = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: h,
      y: C,
      data: m,
      reset: k
    } = await $({
      x: u,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = h ?? u, d = C ?? d, g = {
      ...g,
      [b]: {
        ...g[b],
        ...m
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (c = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: d
    } = uu(c, v, l)), x = -1);
  }
  return {
    x: u,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function Xd(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = oi(t, e), p = jd(g), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = ea(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), $ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, m = ea(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: h,
    strategy: l
  }) : $);
  return {
    top: (b.top - m.top + p.top) / C.y,
    bottom: (m.bottom - b.bottom + p.bottom) / C.y,
    left: (b.left - m.left + p.left) / C.x,
    right: (m.right - b.right + p.right) / C.x
  };
}
const M2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = oi(e, t) || {};
    if (c == null)
      return {};
    const d = jd(u), v = {
      x: n,
      y: r
    }, g = Gs(o), p = Fs(g), x = await a.getDimensions(c), b = g === "y", $ = b ? "top" : "left", h = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[g] - v[g] - i.floating[p], k = v[g] - i.reference[g], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let E = P ? P[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(P))) && (E = s.floating[C] || i.floating[p]);
    const H = m / 2 - k / 2, O = E / 2 - x[p] / 2 - 1, D = Yo(d[$], O), q = Yo(d[h], O), z = D, R = E - x[p] - q, S = E / 2 - x[p] / 2 + H, _ = fs(z, S, R), M = !l.arrow && ii(o) != null && S !== _ && i.reference[p] / 2 - (S < z ? D : q) - x[p] / 2 < 0, N = M ? S < z ? S - z : S - R : 0;
    return {
      [g]: v[g] + N,
      data: {
        [g]: _,
        centerOffset: S - _ - N,
        ...M && {
          alignmentOffset: N
        }
      },
      reset: M
    };
  }
}), P2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: x = !0,
        ...b
      } = oi(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Nr(o), h = Er(s), C = Nr(s) === s, m = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = v || (C || !x ? [Qi(s)] : C2(s)), P = p !== "none";
      !v && P && k.push(...k2(s, x, p, m));
      const E = [s, ...k], H = await Xd(t, b), O = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(H[$]), d) {
        const _ = $2(o, a, m);
        O.push(H[_[0]], H[_[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: O
      }], !O.every((_) => _ <= 0)) {
        var q, z;
        const _ = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, M = E[_];
        if (M) {
          var R;
          const T = d === "alignment" ? h !== Er(M) : !1, V = ((R = D[0]) == null ? void 0 : R.overflows[0]) > 0;
          if (!T || V)
            return {
              data: {
                index: _,
                overflows: D
              },
              reset: {
                placement: M
              }
            };
        }
        let N = (z = D.filter((T) => T.overflows[0] <= 0).sort((T, V) => T.overflows[1] - V.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var S;
              const T = (S = D.filter((V) => {
                if (P) {
                  const I = Er(V.placement);
                  return I === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((I) => I > 0).reduce((I, X) => I + X, 0)]).sort((V, I) => V[1] - I[1])[0]) == null ? void 0 : S[0];
              T && (N = T);
              break;
            }
            case "initialPlacement":
              N = s;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function T2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Nr(n), s = ii(n), l = Er(n) === "y", c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = oi(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof p == "number" && (g = s === "end" ? p * -1 : p), l ? {
    x: g * u,
    y: v * c
  } : {
    x: v * c,
    y: g * u
  };
}
const V2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await T2(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, O2 = function(e) {
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
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: $,
              y: h
            } = b;
            return {
              x: $,
              y: h
            };
          }
        },
        ...l
      } = oi(e, t), c = {
        x: n,
        y: r
      }, u = await Xd(t, l), d = Er(Nr(o)), v = Bd(d);
      let g = c[v], p = c[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + u[b], C = g - u[$];
        g = fs(h, g, C);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + u[b], C = p - u[$];
        p = fs(h, p, C);
      }
      const x = s.fn({
        ...t,
        [v]: g,
        [d]: p
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function xa() {
  return typeof window < "u";
}
function po(e) {
  return Yd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Yd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Yd(e) {
  return xa() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function _n(e) {
  return xa() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function An(e) {
  return xa() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function cu(e) {
  return !xa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function ai(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function N2(e) {
  return ["table", "td", "th"].includes(po(e));
}
function $a(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Us(e) {
  const t = Js(), n = _n(e) ? kn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function H2(e) {
  let t = hr(e);
  for (; An(t) && !so(t); ) {
    if (Us(t))
      return t;
    if ($a(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(po(e));
}
function kn(e) {
  return an(e).getComputedStyle(e);
}
function Ca(e) {
  return _n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (po(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cu(e) && e.host || // Fallback.
    Un(e)
  );
  return cu(t) ? t.host : t;
}
function Wd(e) {
  const t = hr(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && ai(t) ? t : Wd(t);
}
function Kd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Wd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (gs(a), t.concat(a, a.visualViewport || [], ai(o) ? o : [], [])) : t.concat(o, Kd(o, []));
}
function gs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fd(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = An(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ji(n) !== i || Ji(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Gd(e) {
  return _n(e) ? e : e.contextElement;
}
function Fr(e) {
  const t = Gd(e);
  if (!An(t))
    return On(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Fd(t);
  let a = (i ? Ji(n.width) : n.width) / r, s = (i ? Ji(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const L2 = /* @__PURE__ */ On(0);
function Ud(e) {
  const t = an(e);
  return !Js() || !t.visualViewport ? L2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function z2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Gd(e);
  let a = On(1);
  t && (r ? _n(r) && (a = Fr(r)) : a = Fr(e));
  const s = z2(i, n, r) ? Ud(i) : On(0);
  let l = (o.left + s.x) / a.x, c = (o.top + s.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = an(i), g = r && _n(r) ? an(r) : r;
    let p = v, x = gs(p);
    for (; x && r && g !== p; ) {
      const b = Fr(x), $ = x.getBoundingClientRect(), h = kn(x), C = $.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, m = $.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, d *= b.y, l += C, c += m, p = an(x), x = gs(p);
    }
  }
  return ea({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Qs(e, t) {
  const n = Ca(e).scrollLeft;
  return t ? t.left + n : Wo(Un(e)).left + n;
}
function Jd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function D2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Un(r), s = t ? $a(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = On(1);
  const u = On(0), d = An(r);
  if ((d || !d && !i) && ((po(r) !== "body" || ai(a)) && (l = Ca(r)), An(r))) {
    const g = Wo(r);
    c = Fr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const v = a && !d && !i ? Jd(a, l, !0) : On(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + v.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + v.y
  };
}
function A2(e) {
  return Array.from(e.getClientRects());
}
function R2(e) {
  const t = Un(e), n = Ca(e), r = e.ownerDocument.body, o = Kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Qs(e);
  const s = -n.scrollTop;
  return kn(r).direction === "rtl" && (a += Kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function I2(e, t) {
  const n = an(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const c = Js();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function q2(e, t) {
  const n = Wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = An(e) ? Fr(e) : On(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function du(e, t, n) {
  let r;
  if (t === "viewport")
    r = I2(e, n);
  else if (t === "document")
    r = R2(Un(e));
  else if (_n(t))
    r = q2(t, n);
  else {
    const o = Ud(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ea(r);
}
function Qd(e, t) {
  const n = hr(e);
  return n === t || !_n(n) || so(n) ? !1 : kn(n).position === "fixed" || Qd(n, t);
}
function Z2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Kd(e, []).filter((s) => _n(s) && po(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; _n(a) && !so(a); ) {
    const s = kn(a), l = Us(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ai(a) && !l && Qd(e, a)) ? r = r.filter((c) => c !== a) : o = s, a = hr(a);
  }
  return t.set(e, r), r;
}
function B2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? $a(t) ? [] : Z2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, c) => {
    const u = du(t, c, o);
    return l.top = Kr(u.top, l.top), l.right = Yo(u.right, l.right), l.bottom = Yo(u.bottom, l.bottom), l.left = Kr(u.left, l.left), l;
  }, du(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function j2(e) {
  const {
    width: t,
    height: n
  } = Fd(e);
  return {
    width: t,
    height: n
  };
}
function X2(e, t, n) {
  const r = An(t), o = Un(t), i = n === "fixed", a = Wo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = On(0);
  function c() {
    l.x = Qs(o);
  }
  if (r || !r && !i)
    if ((po(t) !== "body" || ai(o)) && (s = Ca(t)), r) {
      const g = Wo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Jd(o, s) : On(0), d = a.left + s.scrollLeft - l.x - u.x, v = a.top + s.scrollTop - l.y - u.y;
  return {
    x: d,
    y: v,
    width: a.width,
    height: a.height
  };
}
function Za(e) {
  return kn(e).position === "static";
}
function fu(e, t) {
  if (!An(e) || kn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function ef(e, t) {
  const n = an(e);
  if ($a(e))
    return n;
  if (!An(e)) {
    let o = hr(e);
    for (; o && !so(o); ) {
      if (_n(o) && !Za(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = fu(e, t);
  for (; r && N2(r) && Za(r); )
    r = fu(r, t);
  return r && so(r) && Za(r) && !Us(r) ? n : r || H2(e) || n;
}
const Y2 = async function(e) {
  const t = this.getOffsetParent || ef, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: X2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function W2(e) {
  return kn(e).direction === "rtl";
}
const K2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: D2,
  getDocumentElement: Un,
  getClippingRect: B2,
  getOffsetParent: ef,
  getElementRects: Y2,
  getClientRects: A2,
  getDimensions: j2,
  getScale: Fr,
  isElement: _n,
  isRTL: W2
}, F2 = V2, G2 = O2, U2 = P2, J2 = M2, Q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: K2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return E2(e, t, {
    ...o,
    platform: i
  });
}, ey = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: a,
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
  let c;
  if (typeof n == "string") {
    const $ = document.querySelector(n);
    if ($)
      c = $;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let u;
  l && (u = document.createElement("div"), u.style.position = "absolute", u.style.backgroundColor = "#222", u.style.width = "8px", u.style.height = "8px", u.style.transform = "rotate(45deg)", u.style.display = "none", c.firstElementChild.before(u));
  function d() {
    Q2(e, c, {
      placement: r,
      middleware: [
        F2(o),
        // 手动偏移配置
        U2(i),
        //自动翻转
        G2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [J2({ element: u })] : []
      ]
    }).then(({ x: $, y: h, placement: C, middlewareData: m }) => {
      if (Object.assign(c.style, {
        left: `${$}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: P } = m.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(u.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
        });
      }
    });
  }
  let v = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (u.style.display = "block"), v = !0, d();
  }
  function p() {
    c.style.display = "none", l && (u.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? p() : g();
  }
  function b($) {
    c.contains($.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      p();
    },
    isVisible() {
      return v;
    }
  };
};
var ty = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mo(e, t) {
  pe(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, a, s;
  pn(() => (s = ey({
    trigger: i,
    floatContent: a,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var c = ty(), u = Y(c), d = Y(u);
  Pr(d, n), j(u), Dn(u, (p) => i = p, () => i);
  var v = B(u, 2), g = Y(v);
  return Pr(g, r), j(v), Dn(v, (p) => a = p, () => a), j(c), A(e, c), me({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), y();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), y();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), y();
    }
  });
}
ve(mo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function tt(e, t) {
  pe(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var a = it(), s = Ce(a);
  return j1(s, () => `h${r()}`, !1, (l, c) => {
    let u;
    Te(() => u = gn(l, u, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = it(), v = Ce(d);
    Pr(v, () => n() ?? kt), A(c, d);
  }), A(e, a), me({
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
ve(tt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ny = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ry = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function _a(e, t) {
  pe(t, !0), at(e, ry);
  const n = /* @__PURE__ */ zt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  nt(e, mt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ny();
      A(r, i);
    },
    $$slots: { default: !0 }
  })), me();
}
ve(_a, {}, [], [], !0);
const oy = () => {
  const e = et();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, lo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, iy = () => {
  const { nodes: e, nodeLookup: t } = et();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = G(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = lo(), a = {
          ...o,
          id: i,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, a]), e.update(
          (s) => s.map(
            (l) => l.id === i ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
}, pr = () => Mr("tinyflow_options");
function St() {
  return Mr("svelteflow__node_id");
}
var ay = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), sy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ly = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), uy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), cy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, dy = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), fy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), vy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), gy = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const hy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Mn(e, t) {
  pe(t, !0), at(e, hy);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), a = w(t, "children", 7), s = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), c = w(t, "allowDelete", 7, !0), u = w(t, "allowSetting", 7, !0), d = w(t, "allowSettingOfCondition", 7, !0), v = w(t, "showSourceHandle", 7, !0), g = w(t, "showTargetHandle", 7, !0), p = w(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Jt(), h = /* @__PURE__ */ Ne(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = oy(), { copyNode: m } = iy(), k = pr(), P = () => {
    var V;
    (V = k.onNodeExecute) == null || V.call(k, $(r()));
  };
  let E = St();
  var H = gy(), O = Ce(H);
  {
    var D = (V) => {
      Rd(V, {
        get position() {
          return Le.Top;
        },
        align: "end",
        children: (I, X) => {
          var W = vy(), U = Y(W);
          {
            var Q = (xe) => {
              nt(xe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Oe, le) => {
                  var J = ay();
                  A(Oe, J);
                },
                $$slots: { default: !0 }
              });
            };
            $e(U, (xe) => {
              c() && xe(Q);
            });
          }
          var K = B(U, 2);
          {
            var ce = (xe) => {
              nt(xe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (Oe, le) => {
                  var J = sy();
                  A(Oe, J);
                },
                $$slots: { default: !0 }
              });
            };
            $e(K, (xe) => {
              l() && xe(ce);
            });
          }
          var ue = B(K, 2);
          {
            var ye = (xe) => {
              nt(xe, {
                class: "tf-node-toolbar-item",
                onclick: P,
                children: (Oe, le) => {
                  var J = ly();
                  A(Oe, J);
                },
                $$slots: { default: !0 }
              });
            };
            $e(ue, (xe) => {
              s() && xe(ye);
            });
          }
          var se = B(ue, 2);
          {
            var _e = (xe) => {
              mo(xe, {
                placement: "bottom",
                floating: (Oe) => {
                  var le = dy(), J = Y(le), Me = B(Y(J));
                  Mt(Me, {
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Ve = fe.target.value;
                      b(E, { title: Ve });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(J);
                  var F = B(J, 2), Ae = B(Y(F));
                  Pt(Ae, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Ve = fe.target.value;
                      b(E, { description: Ve });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(F);
                  var Ke = B(F, 2);
                  {
                    var qe = (fe) => {
                      var Ve = uy(), ct = B(Y(Ve));
                      Pt(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (vt) => {
                          const te = vt.target.value;
                          b(E, { condition: te });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Ve), A(fe, Ve);
                    };
                    $e(Ke, (fe) => {
                      d() && fe(qe);
                    });
                  }
                  var ge = B(Ke, 2), he = B(Y(ge), 2);
                  kr(he), he.__change = [cy, b, E], j(ge), j(le), Te(() => K1(he, !!n().async)), A(Oe, le);
                },
                children: (Oe, le) => {
                  nt(Oe, {
                    class: "tf-node-toolbar-item",
                    children: (J, Me) => {
                      var F = fy();
                      A(J, F);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            $e(se, (xe) => {
              u() && xe(_e);
            });
          }
          j(W), A(I, W);
        },
        $$slots: { default: !0 }
      });
    };
    $e(O, (V) => {
      (s() || l() || c()) && V(D);
    });
  }
  var q = B(O, 2), z = B(Y(q), 2), R = Y(z);
  Zd(R, {
    get items() {
      return f(h);
    },
    activeKeys: x,
    onChange: (V, I) => {
      var X;
      b(r(), { expand: I == null ? void 0 : I.includes("key") }), (X = p()) == null || X(I != null && I.includes("key") ? "key" : "");
    }
  }), j(z), j(q);
  var S = B(q, 2);
  {
    var _ = (V) => {
      gr(V, {
        type: "target",
        get position() {
          return Le.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    $e(S, (V) => {
      g() && V(_);
    });
  }
  var M = B(S, 2);
  {
    var N = (V) => {
      gr(V, {
        type: "source",
        get position() {
          return Le.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    $e(M, (V) => {
      v() && V(N);
    });
  }
  var T = B(M, 2);
  return Pr(T, () => i() ?? kt), A(e, H), me({
    get data() {
      return n();
    },
    set data(V) {
      n(V), y();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), y();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), y();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), y();
    },
    get children() {
      return a();
    },
    set children(V) {
      a(V), y();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(V = !0) {
      s(V), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(V = !0) {
      l(V), y();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(V = !0) {
      c(V), y();
    },
    get allowSetting() {
      return u();
    },
    set allowSetting(V = !0) {
      u(V), y();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(V = !0) {
      d(V), y();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(V = !0) {
      v(V), y();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(V = !0) {
      g(V), y();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(V) {
      p(V), y();
    }
  });
}
ho(["change"]);
ve(
  Mn,
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
const tf = [
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
], py = [
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
var my = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), yy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), wy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const by = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function nf(e, t) {
  pe(t, !0), at(e, by);
  const [n, r] = ft(), o = () => oe(f(l), "$node", n), i = w(t, "parameter", 7), a = w(t, "index", 7);
  let s = St(), l = /* @__PURE__ */ Ne(() => zr(s)), c = /* @__PURE__ */ Ne(() => {
    var O, D;
    return {
      ...i(),
      ...(D = (O = o()) == null ? void 0 : O.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: u } = Jt(), d = (O, D) => {
    u(s, (q) => {
      let z = q.data.parameters;
      return z[a()][O] = D, { parameters: z };
    });
  }, v = (O) => {
    const D = O.target.value;
    d("name", D);
  }, g = (O) => {
    const D = O.target.checked;
    d("required", D);
  }, p = (O) => {
    const D = O.value;
    D && d("dataType", D);
  };
  let x;
  const b = () => {
    u(s, (O) => {
      let D = O.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), x == null || x.hide();
  };
  var $ = wy(), h = Ce($), C = Y(h);
  Mt(C, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), j(h);
  var m = B(h, 2), k = Y(m);
  Id(k, {
    get checked() {
      return f(c).required;
    },
    onchange: g
  }), j(m);
  var P = B(m, 2), E = Y(P);
  Dn(
    mo(E, {
      placement: "bottom",
      floating: (O) => {
        var D = my(), q = Y(D), z = B(Y(q));
        const R = /* @__PURE__ */ Ne(() => f(c).dataType ? [f(c).dataType] : ["String"]);
        hn(z, {
          items: tf,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(R);
          }
        }), j(q);
        var S = B(q, 2), _ = B(Y(S));
        Pt(_, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(c).defaultValue;
          },
          onchange: (I) => {
            const X = I.target.value;
            d("defaultValue", X);
          }
        }), j(S);
        var M = B(S, 2), N = B(Y(M));
        Pt(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(c).description;
          },
          onchange: (I) => {
            const X = I.target.value;
            d("description", X);
          }
        }), j(M);
        var T = B(M, 2), V = Y(T);
        nt(V, {
          onclick: b,
          children: (I, X) => {
            Re();
            var W = We("删除");
            A(I, W);
          },
          $$slots: { default: !0 }
        }), j(T), j(D), A(O, D);
      },
      children: (O, D) => {
        nt(O, {
          class: "input-btn-more",
          children: (q, z) => {
            var R = yy();
            A(q, R);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => x = O,
    () => x
  ), j(P), A(e, $);
  var H = me({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), y();
    },
    get index() {
      return a();
    },
    set index(O) {
      a(O), y();
    }
  });
  return r(), H;
}
ve(nf, { parameter: {}, index: {} }, [], [], !0);
var xy = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), $y = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), Cy = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const _y = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function rf(e, t) {
  pe(t, !0), at(e, _y);
  const [n, r] = ft(), o = () => oe(f(a), "$node", n);
  let i = St(), a = /* @__PURE__ */ Ne(() => zr(i)), s = /* @__PURE__ */ Ne(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Cy(), c = Y(l);
  {
    var u = (v) => {
      var g = xy();
      Re(4), A(v, g);
    };
    $e(c, (v) => {
      f(s).length !== 0 && v(u);
    });
  }
  var d = B(c, 2);
  Zt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, p) => {
      nf(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(p);
        }
      });
    },
    (v) => {
      var g = $y();
      A(v, g);
    }
  ), j(l), A(e, l), me(), r();
}
ve(rf, {}, [], [], !0);
const ta = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = lo()), ta(t.children);
}), e), qn = () => {
  const { updateNodeData: e } = Jt();
  return {
    addParameter: (t, n = "parameters", r) => {
      ta(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: lo()
      };
      e(t, (i) => {
        let a = i.data[n];
        return a ? a.push(o) : a = [o], {
          [n]: [...a]
        };
      });
    }
  };
};
var ky = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Sy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ey = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const My = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function of(e, t) {
  pe(t, !0), at(e, My);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = ky();
      A(a, s);
    },
    children: (a, s) => {
      var l = Ey(), c = Ce(l), u = Y(c);
      tt(u, {
        level: 3,
        children: (g, p) => {
          Re();
          var x = We("输入参数");
          A(g, x);
        },
        $$slots: { default: !0 }
      });
      var d = B(u, 2);
      nt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, p) => {
          var x = Sy();
          A(g, x);
        },
        $$slots: { default: !0 }
      }), j(c);
      var v = B(c, 2);
      rf(v, {}), A(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ve(of, { data: {} }, [], [], !0);
const af = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), af(e, r.source, n));
}, vu = (e, t) => {
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
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((a) => ({
          label: a.name + (t ? ` (Array<${a.dataType || "String"}>)` : ` (${a.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + a.name,
          children: r(a.children, i + "." + a.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, Py = (e = !1) => {
  const t = St(), n = zr(t), { nodes: r, edges: o } = et();
  return ur([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let c of a)
        if (c.parentId === i.id) {
          const u = vu(c, c.parentId === i.id);
          u && l.push(u);
        }
    } else {
      const c = [];
      af(c, t, s);
      for (let u of a)
        if (c.includes(u.id)) {
          const d = vu(u, u.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Ty = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Vy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Oy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  pe(t, !0), at(e, Oy);
  const [n, r] = ft(), o = () => oe(f(u), "$node", n), i = () => oe(C, "$selectItems", n);
  pn(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let c = St(), u = /* @__PURE__ */ Ne(() => zr(c)), d = /* @__PURE__ */ Ne(() => {
    var _;
    return {
      ...a(),
      ...(_ = o()) == null ? void 0 : _.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Jt(), g = (_, M) => {
    v(c, (N) => {
      let T = N.data[l()];
      return T[s()] = { ...T[s()], [_]: M }, { [l()]: T };
    });
  }, p = (_, M) => {
    const N = M.target.value;
    g(_, N);
  }, x = (_) => {
    const M = _.value;
    g("ref", M);
  }, b = (_) => {
    const M = _.value;
    g("refType", M);
  };
  let $;
  const h = () => {
    v(c, (_) => {
      let M = _.data[l()];
      return M.splice(s(), 1), { [l()]: [...M] };
    }), $ == null || $.hide();
  }, C = Py();
  var m = Vy(), k = Ce(m), P = Y(k);
  const E = /* @__PURE__ */ Ne(() => f(d).nameDisabled === !0);
  Mt(P, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(E);
    },
    oninput: (_) => p("name", _)
  }), j(k);
  var H = B(k, 2), O = Y(H);
  {
    var D = (_) => {
      Mt(_, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => p("value", M)
      });
    }, q = (_, M) => {
      {
        var N = (T) => {
          const V = /* @__PURE__ */ Ne(() => [f(d).ref]);
          hn(T, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(V);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        $e(
          _,
          (T) => {
            f(d).refType !== "input" && T(N);
          },
          M
        );
      }
    };
    $e(O, (_) => {
      f(d).refType === "fixed" ? _(D) : _(q, !1);
    });
  }
  j(H);
  var z = B(H, 2), R = Y(z);
  Dn(
    mo(R, {
      placement: "bottom",
      floating: (_) => {
        var M = Ty(), N = Y(M), T = B(Y(N));
        const V = /* @__PURE__ */ Ne(() => f(d).refType ? [f(d).refType] : []);
        hn(T, {
          items: py,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(V);
          },
          onSelect: b
        }), j(N);
        var I = B(N, 2), X = B(Y(I));
        Pt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            p("defaultValue", ce);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), j(I);
        var W = B(I, 2), U = B(Y(W));
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            p("description", ce);
          },
          get value() {
            return f(d).description;
          }
        }), j(W);
        var Q = B(W, 2), K = Y(Q);
        nt(K, {
          onclick: h,
          children: (ce, ue) => {
            Re();
            var ye = We("删除");
            A(ce, ye);
          },
          $$slots: { default: !0 }
        }), j(Q), j(M), A(_, M);
      },
      children: (_, M) => {
        _a(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => $ = _,
    () => $
  ), j(z), A(e, m);
  var S = me({
    get parameter() {
      return a();
    },
    set parameter(_) {
      a(_), y();
    },
    get index() {
      return s();
    },
    set index(_) {
      s(_), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(_) {
      l(_), y();
    }
  });
  return r(), S;
}
ve(sf, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Ny = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Hy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ly = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const zy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rn(e, t) {
  pe(t, !0), at(e, zy);
  const [n, r] = ft(), o = () => oe(f(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), a = w(t, "dataKeyName", 7, "parameters");
  let s = St(), l = /* @__PURE__ */ Ne(() => zr(s)), c = /* @__PURE__ */ Ne(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var u = Ly(), d = Y(u);
  {
    var v = (x) => {
      var b = Ny();
      Re(4), A(x, b);
    };
    $e(d, (x) => {
      f(c).length !== 0 && x(v);
    });
  }
  var g = B(d, 2);
  Zt(
    g,
    19,
    () => f(c),
    (x) => x.id,
    (x, b, $) => {
      sf(x, {
        get parameter() {
          return f(b);
        },
        get index() {
          return f($);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (x) => {
      var b = Hy(), $ = Y(b, !0);
      j(b), Te(() => xt($, i())), A(x, b);
    }
  ), j(u), A(e, u);
  var p = me({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "parameters") {
      a(x), y();
    }
  });
  return r(), p;
}
ve(rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Dy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ay = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function lf(e, t) {
  pe(t, !0), at(e, Iy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(
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
        var s = Dy();
        A(a, s);
      },
      children: (a, s) => {
        var l = Ry(), c = Ce(l), u = Y(c);
        tt(u, {
          level: 3,
          children: (g, p) => {
            Re();
            var x = We("输出参数");
            A(g, x);
          },
          $$slots: { default: !0 }
        });
        var d = B(u, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, p) => {
            var x = Ay();
            A(g, x);
          },
          $$slots: { default: !0 }
        }), j(c);
        var v = B(c, 2);
        rn(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), A(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ve(lf, { data: {} }, [], [], !0);
const Ba = (e) => JSON.parse(JSON.stringify(e));
var qy = /* @__PURE__ */ Pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Zy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), By = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), jy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Xy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function uf(e, t) {
  pe(t, !0), at(e, Xy);
  const [n, r] = ft(), o = () => oe(f(c), "$node", n), i = w(t, "parameter", 7), a = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = St(), c = /* @__PURE__ */ Ne(() => zr(l)), u = /* @__PURE__ */ Ne(() => {
    var N;
    let T = (N = o()) == null ? void 0 : N.data[s()], V;
    if (T && a().length > 0) {
      let I = T;
      for (let X = 0; X < a().length; X++) {
        const W = a()[X];
        X == a().length - 1 ? V = I[W] : I = I[W].children;
      }
    }
    return { ...i(), ...V };
  });
  const { updateNodeData: d } = Jt(), v = (N, T) => {
    d(l, (V) => {
      const I = V.data[s()];
      if (I && a().length > 0) {
        let X = I;
        for (let W = 0; W < a().length; W++) {
          const U = a()[W];
          W == a().length - 1 ? X[U] = { ...X[U], [N]: T } : X = X[U].children;
        }
      }
      return {
        [s()]: [...Ba(I)]
      };
    });
  }, g = (N, T) => {
    const V = T.target.value;
    v(N, V);
  }, p = (N) => {
    const T = N.value;
    v("dataType", T);
  };
  let x;
  const b = () => {
    d(l, (N) => {
      let T = N.data[s()];
      if (T && a().length > 0) {
        let V = T;
        for (let I = 0; I < a().length; I++) {
          const X = a()[I];
          I == a().length - 1 ? V.splice(X, 1) : V = V[X].children;
        }
      }
      return {
        [s()]: [...Ba(T)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (N) => {
      let T = N.data[s()];
      if (T && a().length > 0) {
        let V = T;
        for (let I = 0; I < a().length; I++) {
          const X = a()[I];
          I == a().length - 1 ? V[X].children ? V[X].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : V[X].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : V = V[X].children;
        }
      }
      return {
        [s()]: [...Ba(T)]
      };
    });
  };
  var h = jy(), C = Ce(h), m = Y(C);
  {
    var k = (N) => {
      var T = it(), V = Ce(T);
      Zt(V, 17, a, eo, (I, X) => {
        Re();
        var W = We(" ");
        A(I, W);
      }), A(N, T);
    };
    $e(m, (N) => {
      a().length > 1 && N(k);
    });
  }
  var P = B(m, 2);
  const E = /* @__PURE__ */ Ne(() => f(u).nameDisabled === !0);
  Mt(P, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: (N) => {
      g("name", N);
    },
    get disabled() {
      return f(E);
    }
  }), j(C);
  var H = B(C, 2), O = Y(H);
  const D = /* @__PURE__ */ Ne(() => f(u).dataType ? [f(u).dataType] : []), q = /* @__PURE__ */ Ne(() => f(u).dataTypeDisabled === !0);
  hn(O, {
    items: tf,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(D);
    },
    get disabled() {
      return f(q);
    },
    onSelect: p
  });
  var z = B(O, 2);
  {
    var R = (N) => {
      nt(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (T, V) => {
          var I = qy();
          A(T, I);
        },
        $$slots: { default: !0 }
      });
    };
    $e(z, (N) => {
      (f(u).dataType === "Object" || f(u).dataType === "Array") && f(u).addChildDisabled !== !0 && N(R);
    });
  }
  j(H);
  var S = B(H, 2), _ = Y(S);
  Dn(
    mo(_, {
      placement: "bottom",
      floating: (N) => {
        var T = By(), V = Y(T), I = B(Y(V));
        const X = /* @__PURE__ */ Ne(() => f(u).defaultValue || "");
        Pt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(X);
          },
          onchange: (ue) => {
            g("defaultValue", ue);
          }
        }), j(V);
        var W = B(V, 2), U = B(Y(W));
        const Q = /* @__PURE__ */ Ne(() => f(u).description || "");
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (ue) => {
            g("description", ue);
          }
        }), j(W);
        var K = B(W, 2);
        {
          var ce = (ue) => {
            var ye = Zy(), se = Y(ye);
            nt(se, {
              onclick: b,
              children: (_e, xe) => {
                Re();
                var Oe = We("删除");
                A(_e, Oe);
              },
              $$slots: { default: !0 }
            }), j(ye), A(ue, ye);
          };
          $e(K, (ue) => {
            f(u).deleteDisabled !== !0 && ue(ce);
          });
        }
        j(T), A(N, T);
      },
      children: (N, T) => {
        _a(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => x = N,
    () => x
  ), j(S), A(e, h);
  var M = me({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), y();
    },
    get position() {
      return a();
    },
    set position(N) {
      a(N), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(N) {
      s(N), y();
    }
  });
  return r(), M;
}
ve(uf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Yy = /* @__PURE__ */ ie("<!> <!>", 1), Wy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ky = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Fy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Gy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  pe(t, !0), at(e, Gy);
  const [n, r] = ft(), o = () => oe(f(c), "$node", n), i = (b, $ = kt, h = kt) => {
    var C = it(), m = Ce(C);
    Zt(
      m,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, P, E) => {
        var H = Yy(), O = Ce(H);
        const D = /* @__PURE__ */ Ne(() => [...h(), f(E)]);
        uf(O, {
          get parameter() {
            return f(P);
          },
          get position() {
            return f(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var q = B(O, 2);
        {
          var z = (R) => {
            var S = /* @__PURE__ */ ke(() => [...h(), f(E)]);
            i(R, () => f(P).children, () => f(S));
          };
          $e(q, (R) => {
            f(P).children && R(z);
          });
        }
        A(k, H);
      },
      (k) => {
        var P = it(), E = Ce(P);
        {
          var H = (O) => {
            var D = Wy(), q = Y(D, !0);
            j(D), Te(() => xt(q, a())), A(O, D);
          };
          $e(E, (O) => {
            h().length === 0 && O(H);
          });
        }
        A(k, P);
      }
    ), A(b, C);
  }, a = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = St(), c = /* @__PURE__ */ Ne(() => zr(l)), u = /* @__PURE__ */ Ne(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Fy(), v = Y(d);
  {
    var g = (b) => {
      var $ = Ky();
      Re(4), A(b, $);
    };
    $e(v, (b) => {
      f(u).length !== 0 && b(g);
    });
  }
  var p = B(v, 2);
  i(p, () => f(u) || [], () => []), j(d), A(e, d);
  var x = me({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输出参数") {
      a(b), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "outputDefs") {
      s(b), y();
    }
  });
  return r(), x;
}
ve(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Uy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Jy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), ew = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), tw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), nw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const ow = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function cf(e, t) {
  pe(t, !0), at(e, ow);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ Rt(wn([]));
  pn(async () => {
    var u, d;
    const v = await ((d = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : d.call(u));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Jt(), c = (u) => {
    l(o, () => ({ outType: u })), u === "text" ? l(o, {
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
  return xn(() => {
    n().outType || c("text");
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Uy();
        A(u, d);
      },
      children: (u, d) => {
        var v = rw(), g = Ce(v), p = Y(g);
        tt(p, {
          level: 3,
          children: (J, Me) => {
            Re();
            var F = We("输入参数");
            A(J, F);
          },
          $$slots: { default: !0 }
        });
        var x = B(p, 2);
        nt(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, Me) => {
            var F = Jy();
            A(J, F);
          },
          $$slots: { default: !0 }
        }), j(g);
        var b = B(g, 2);
        rn(b, {});
        var $ = B(b, 2);
        tt($, {
          level: 3,
          mt: "10px",
          children: (J, Me) => {
            Re();
            var F = We("模型设置");
            A(J, F);
          },
          $$slots: { default: !0 }
        });
        var h = B($, 4), C = Y(h);
        const m = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        hn(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const Me = J.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return f(m);
          }
        });
        var k = B(C, 2);
        _a(k, {}), j(h);
        var P = B(h, 4), E = Y(P), H = Y(E), O = Y(H);
        j(H);
        var D = B(H, 2);
        kr(D), D.__input = [Qy, l, o], j(E), j(P);
        var q = B(P, 2), z = Y(q), R = Y(z), S = Y(R);
        j(R);
        var _ = B(R, 2);
        kr(_), _.__input = [ew, l, o], j(z), j(q);
        var M = B(q, 2), N = Y(M), T = Y(N), V = Y(T);
        j(T);
        var I = B(T, 2);
        kr(I), I.__input = [tw, l, o], j(N), j(M);
        var X = B(M, 4), W = Y(X);
        const U = /* @__PURE__ */ Ne(() => n().systemPrompt || "");
        Pt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(U);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), j(X);
        var Q = B(X, 4), K = Y(Q);
        const ce = /* @__PURE__ */ Ne(() => n().userPrompt || "");
        Pt(K, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ce);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), j(Q);
        var ue = B(Q, 2), ye = Y(ue);
        tt(ye, {
          level: 3,
          mt: "10px",
          children: (J, Me) => {
            Re();
            var F = We("输出参数");
            A(J, F);
          },
          $$slots: { default: !0 }
        });
        var se = B(ye, 2);
        const _e = /* @__PURE__ */ Ne(() => n().outType ? [n().outType] : []);
        hn(se, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (J) => {
            c(J.value);
          },
          get value() {
            return f(_e);
          }
        });
        var xe = B(se, 2);
        {
          var Oe = (J) => {
            nt(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Me, F) => {
                var Ae = nw();
                A(Me, Ae);
              },
              $$slots: { default: !0 }
            });
          };
          $e(xe, (J) => {
            n().outType === "json" && J(Oe);
          });
        }
        j(ue);
        var le = B(ue, 2);
        Jn(le, {}), Te(() => {
          xt(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Oa(D, n().temperature ?? 0.5), xt(S, `Top P: ${n().topP ?? 0.9 ?? ""}`), Oa(_, n().topP ?? 0.9), xt(V, `Top K: ${n().topK ?? 50 ?? ""}`), Oa(I, n().topK ?? 50);
        }), A(u, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ho(["input"]);
ve(cf, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), aw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function df(e, t) {
  pe(t, !0), at(e, uw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  pn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = St(), { addParameter: i } = qn(), { updateNodeData: a } = Jt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = iw();
        A(l, c);
      },
      children: (l, c) => {
        var u = lw(), d = Ce(u), v = Y(d);
        tt(v, {
          level: 3,
          children: (D, q) => {
            Re();
            var z = We("输入参数");
            A(D, z);
          },
          $$slots: { default: !0 }
        });
        var g = B(v, 2);
        nt(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, q) => {
            var z = aw();
            A(D, z);
          },
          $$slots: { default: !0 }
        }), j(d);
        var p = B(d, 2);
        rn(p, {});
        var x = B(p, 2);
        tt(x, {
          level: 3,
          mt: "10px",
          children: (D, q) => {
            Re();
            var z = We("代码");
            A(D, z);
          },
          $$slots: { default: !0 }
        });
        var b = B(x, 4), $ = Y(b);
        const h = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        hn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const q = D.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return f(h);
          }
        }), j(b);
        var C = B(b, 4), m = Y(C);
        const k = /* @__PURE__ */ Ne(() => n().code || "");
        Pt(m, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (D) => {
            a(o, () => ({ code: D.target.value }));
          },
          get value() {
            return f(k);
          }
        }), j(C);
        var P = B(C, 2), E = Y(P);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (D, q) => {
            Re();
            var z = We("输出参数");
            A(D, z);
          },
          $$slots: { default: !0 }
        });
        var H = B(E, 2);
        nt(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, q) => {
            var z = sw();
            A(D, z);
          },
          $$slots: { default: !0 }
        }), j(P);
        var O = B(P, 2);
        Jn(O, {}), A(l, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ve(df, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), dw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const vw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  pe(t, !0), at(e, vw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), { updateNodeData: a } = Jt();
  return xn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = cw();
        A(s, l);
      },
      children: (s, l) => {
        var c = fw(), u = Ce(c), d = Y(u);
        tt(d, {
          level: 3,
          children: (k, P) => {
            Re();
            var E = We("输入参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var v = B(d, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var E = dw();
            A(k, E);
          },
          $$slots: { default: !0 }
        }), j(u);
        var g = B(u, 2);
        rn(g, {});
        var p = B(g, 2);
        tt(p, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, P) => {
            Re();
            var E = We("模板内容");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var x = B(p, 2), b = Y(x);
        const $ = /* @__PURE__ */ Ne(() => n().template || "");
        Pt(b, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), j(x);
        var h = B(x, 2), C = Y(h);
        tt(C, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Re();
            var E = We("输出参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = B(h, 2);
        Jn(m, {}), A(s, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ve(ff, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ww = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), $w = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function vf(e, t) {
  pe(t, !0), at(e, kw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  pn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = St(), { addParameter: a } = qn(), { updateNodeData: s } = Jt();
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = gw();
        A(l, c);
      },
      children: (l, c) => {
        var u = _w(), d = Ce(u), v = Y(d);
        tt(v, {
          level: 3,
          children: (ge, he) => {
            Re();
            var fe = We("输入参数");
            A(ge, fe);
          },
          $$slots: { default: !0 }
        });
        var g = B(v, 2);
        nt(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (ge, he) => {
            var fe = hw();
            A(ge, fe);
          },
          $$slots: { default: !0 }
        }), j(d);
        var p = B(d, 2);
        rn(p, {});
        var x = B(p, 2);
        tt(x, {
          level: 3,
          mt: "10px",
          children: (ge, he) => {
            Re();
            var fe = We("URL 地址");
            A(ge, fe);
          },
          $$slots: { default: !0 }
        });
        var b = B(x, 2), $ = Y(b), h = Y($);
        const C = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        hn(h, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ge) => {
            const he = ge.value;
            s(i, () => ({ method: he }));
          },
          get value() {
            return f(C);
          }
        }), j($);
        var m = B($, 2), k = Y(m);
        const P = /* @__PURE__ */ Ne(() => n().url || "");
        Mt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ge) => {
            s(i, () => ({ url: ge.target.value }));
          },
          get value() {
            return f(P);
          }
        }), j(m), j(b);
        var E = B(b, 2), H = Y(E);
        tt(H, {
          level: 3,
          children: (ge, he) => {
            Re();
            var fe = We("Http 头信息");
            A(ge, fe);
          },
          $$slots: { default: !0 }
        });
        var O = B(H, 2);
        nt(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ge, he) => {
            var fe = pw();
            A(ge, fe);
          },
          $$slots: { default: !0 }
        }), j(E);
        var D = B(E, 2);
        rn(D, { dataKeyName: "headers" });
        var q = B(D, 2);
        tt(q, {
          level: 3,
          mt: "10px",
          children: (ge, he) => {
            Re();
            var fe = We("Body");
            A(ge, fe);
          },
          $$slots: { default: !0 }
        });
        var z = B(q, 2), R = Y(z), S = Y(R);
        const _ = /* @__PURE__ */ Ne(() => !n().bodyType);
        Mt(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(_);
          },
          onchange: (ge) => {
            var he;
            (he = ge.target) != null && he.checked && s(i, { bodyType: "" });
          }
        }), Re(), j(R);
        var M = B(R, 2), N = Y(M);
        const T = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        Mt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(T);
          },
          onchange: (ge) => {
            var he;
            (he = ge.target) != null && he.checked && s(i, { bodyType: "form-data" });
          }
        }), Re(), j(M);
        var V = B(M, 2), I = Y(V);
        const X = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        Mt(I, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(X);
          },
          onchange: (ge) => {
            var he;
            (he = ge.target) != null && he.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Re(), j(V);
        var W = B(V, 2), U = Y(W);
        const Q = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        Mt(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(Q);
          },
          onchange: (ge) => {
            var he;
            (he = ge.target) != null && he.checked && s(i, { bodyType: "json" });
          }
        }), Re(), j(W);
        var K = B(W, 2), ce = Y(K);
        const ue = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        Mt(ce, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ue);
          },
          onchange: (ge) => {
            var he;
            (he = ge.target) != null && he.checked && s(i, { bodyType: "raw" });
          }
        }), Re(), j(K), j(z);
        var ye = B(z, 2);
        {
          var se = (ge) => {
            var he = yw(), fe = Ce(he), Ve = Y(fe);
            tt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var de = We("参数");
                A(te, de);
              },
              $$slots: { default: !0 }
            });
            var ct = B(Ve, 2);
            nt(ct, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (te, Fe) => {
                var de = mw();
                A(te, de);
              },
              $$slots: { default: !0 }
            }), j(fe);
            var vt = B(fe, 2);
            rn(vt, { dataKeyName: "formData" }), A(ge, he);
          };
          $e(ye, (ge) => {
            n().bodyType === "form-data" && ge(se);
          });
        }
        var _e = B(ye, 2);
        {
          var xe = (ge) => {
            var he = bw(), fe = Ce(he), Ve = Y(fe);
            tt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var de = We("Body 参数");
                A(te, de);
              },
              $$slots: { default: !0 }
            });
            var ct = B(Ve, 2);
            nt(ct, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (te, Fe) => {
                var de = ww();
                A(te, de);
              },
              $$slots: { default: !0 }
            }), j(fe);
            var vt = B(fe, 2);
            rn(vt, { dataKeyName: "formUrlencoded" }), A(ge, he);
          };
          $e(_e, (ge) => {
            n().bodyType === "x-www-form-urlencoded" && ge(xe);
          });
        }
        var Oe = B(_e, 2);
        {
          var le = (ge) => {
            var he = xw(), fe = Y(he);
            Pt(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ve) => {
                s(i, { bodyJson: Ve.target.value });
              }
            }), j(he), A(ge, he);
          };
          $e(Oe, (ge) => {
            n().bodyType === "json" && ge(le);
          });
        }
        var J = B(Oe, 2);
        {
          var Me = (ge) => {
            var he = $w(), fe = Y(he);
            Pt(fe, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ve) => {
                s(i, { bodyRaw: Ve.target.value });
              }
            }), j(he), A(ge, he);
          };
          $e(J, (ge) => {
            n().bodyType === "raw" && ge(Me);
          });
        }
        var F = B(J, 2), Ae = Y(F);
        tt(Ae, {
          level: 3,
          mt: "10px",
          children: (ge, he) => {
            Re();
            var fe = We("输出参数");
            A(ge, fe);
          },
          $$slots: { default: !0 }
        });
        var Ke = B(Ae, 2);
        nt(Ke, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ge, he) => {
            var fe = Cw();
            A(ge, fe);
          },
          $$slots: { default: !0 }
        }), j(F);
        var qe = B(F, 2);
        Jn(qe, {}), A(l, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ve(vf, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  pe(t, !0), at(e, Pw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ Rt(wn([]));
  pn(async () => {
    var c, u;
    const d = await ((u = (c = a.provider) == null ? void 0 : c.knowledge) == null ? void 0 : u.call(c));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return xn(() => {
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
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var u = Sw();
        A(c, u);
      },
      children: (c, u) => {
        var d = Mw(), v = Ce(d), g = Y(v);
        tt(g, {
          level: 3,
          children: (z, R) => {
            Re();
            var S = We("输入参数");
            A(z, S);
          },
          $$slots: { default: !0 }
        });
        var p = B(g, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, R) => {
            var S = Ew();
            A(z, S);
          },
          $$slots: { default: !0 }
        }), j(v);
        var x = B(v, 2);
        rn(x, {});
        var b = B(x, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (z, R) => {
            Re();
            var S = We("知识库设置");
            A(z, S);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), h = Y($);
        const C = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        hn(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (z) => {
            const R = z.value;
            l(o, () => ({ knowledgeId: R }));
          },
          get value() {
            return f(C);
          }
        }), j($);
        var m = B($, 4), k = Y(m);
        Mt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const R = z.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), j(m);
        var P = B(m, 4), E = Y(P);
        const H = /* @__PURE__ */ Ne(() => n().limit || "");
        Mt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (z) => {
            const R = z.target.value;
            l(o, () => ({ limit: R }));
          },
          get value() {
            return f(H);
          }
        }), j(P);
        var O = B(P, 2), D = Y(O);
        tt(D, {
          level: 3,
          mt: "10px",
          children: (z, R) => {
            Re();
            var S = We("输出参数");
            A(z, S);
          },
          $$slots: { default: !0 }
        }), j(O);
        var q = B(O, 2);
        Jn(q, {}), A(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
ve(gf, { data: {} }, [], [], !0);
var Tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Vw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hf(e, t) {
  pe(t, !0), at(e, Nw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ Rt(wn([]));
  pn(async () => {
    var c, u;
    const d = await ((u = (c = a.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : u.call(c));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return xn(() => {
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
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var u = Tw();
        A(c, u);
      },
      children: (c, u) => {
        var d = Ow(), v = Ce(d), g = Y(v);
        tt(g, {
          level: 3,
          children: (q, z) => {
            Re();
            var R = We("输入参数");
            A(q, R);
          },
          $$slots: { default: !0 }
        });
        var p = B(g, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, z) => {
            var R = Vw();
            A(q, R);
          },
          $$slots: { default: !0 }
        }), j(v);
        var x = B(v, 2);
        rn(x, {});
        var b = B(x, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (q, z) => {
            Re();
            var R = We("搜索引擎设置");
            A(q, R);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), h = Y($);
        const C = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : []);
        hn(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const z = q.value;
            l(o, () => ({ engine: z }));
          },
          get value() {
            return f(C);
          }
        }), j($);
        var m = B($, 4), k = Y(m);
        Mt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const z = q.target.value;
            l(o, () => ({ keyword: z }));
          }
        }), j(m);
        var P = B(m, 4), E = Y(P);
        Mt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const z = q.target.value;
            l(o, () => ({ limit: z }));
          }
        }), j(P);
        var H = B(P, 2), O = Y(H);
        tt(O, {
          level: 3,
          mt: "10px",
          children: (q, z) => {
            Re();
            var R = We("输出参数");
            A(q, R);
          },
          $$slots: { default: !0 }
        }), j(H);
        var D = B(H, 2);
        Jn(D, {}), A(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
ve(hf, { data: {} }, [], [], !0);
var Hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Lw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function pf(e, t) {
  pe(t, !0), at(e, Dw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = Hw();
        A(a, s);
      },
      handle: (a) => {
        gr(a, {
          type: "source",
          get position() {
            return Le.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = zw(), c = Ce(l), u = Y(c);
        tt(u, {
          level: 3,
          children: (b, $) => {
            Re();
            var h = We("循环变量");
            A(b, h);
          },
          $$slots: { default: !0 }
        });
        var d = B(u, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (b, $) => {
            var h = Lw();
            A(b, h);
          },
          $$slots: { default: !0 }
        }), j(c);
        var v = B(c, 2);
        rn(v, {});
        var g = B(v, 2), p = Y(g);
        tt(p, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            Re();
            var h = We("输出参数");
            A(b, h);
          },
          $$slots: { default: !0 }
        }), j(g);
        var x = B(g, 2);
        Jn(x, {}), A(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ve(pf, { data: {} }, [], [], !0);
const Aw = {
  startNode: of,
  codeNode: df,
  llmNode: cf,
  templateNode: ff,
  httpNode: vf,
  knowledgeNode: gf,
  searchEngineNode: hf,
  loopNode: pf,
  endNode: lf
};
var Rw = /* @__PURE__ */ ie("<!> ", 1);
function hs(e, t) {
  pe(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), a = w(t, "extra", 7);
  return nt(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var c = Rw(), u = Ce(c);
      Ns(u, n);
      var d = B(u);
      Te(() => xt(d, ` ${r() ?? ""}`)), A(s, c);
    },
    $$slots: { default: !0 }
  }), me({
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
      return i();
    },
    set description(s) {
      i(s), y();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), y();
    }
  });
}
ve(
  hs,
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
var Iw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), qw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Zw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function mf(e, t) {
  pe(t, !0);
  let n = /* @__PURE__ */ Rt("base"), r = /* @__PURE__ */ Rt("show");
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
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], a = [], s = pr().customNodes;
  if (s) {
    const b = Object.keys(s).sort(($, h) => (s[$].sortNo || 0) - (s[h].sortNo || 0));
    for (let $ of b)
      s[$].group === "base" ? o.push({ type: $, ...s[$] }) : a.push({
        icon: s[$].icon,
        title: s[$].title,
        type: $
      });
    o.sort(($, h) => ($.sortNo || 0) - (h.sortNo || 0));
  }
  var l = Zw(), c = Y(l), u = Y(c), d = Y(u);
  qd(d, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      ee(n, b.value.toString(), !0);
    }
  }), j(u);
  var v = B(u, 2), g = Y(v);
  Zt(g, 21, () => o, eo, (b, $) => {
    hs(b, mt(() => f($)));
  }), j(g);
  var p = B(g, 2);
  Zt(p, 21, () => a, eo, (b, $) => {
    hs(b, mt(() => f($)));
  }), j(p), j(v), j(c);
  var x = B(c, 2);
  nt(x, {
    onclick: () => {
      ee(r, f(r) ? "" : "show", !0);
    },
    children: (b, $) => {
      var h = it(), C = Ce(h);
      {
        var m = (P) => {
          var E = Iw();
          A(P, E);
        }, k = (P) => {
          var E = qw();
          A(P, E);
        };
        $e(C, (P) => {
          f(r) === "show" ? P(m) : P(k, !1);
        });
      }
      A(b, h);
    },
    $$slots: { default: !0 }
  }), j(l), Te(() => {
    Lt(l, 1, `tf-toolbar ${f(r) ?? ""}`), $t(g, `display: ${f(n) === "base" ? "flex" : "none"}`), $t(p, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), A(e, l), me();
}
ve(mf, {}, [], [], !0);
const Bw = () => {
  const { nodeLookup: e } = et();
  return {
    getNode: (t) => {
      var n;
      return (n = G(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, jw = () => {
  const { nodes: e } = et();
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
        let i = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            i = s;
            break;
          }
        if (i == -1)
          return r;
        const a = r[o];
        for (let s = o; s > i; s--)
          r[s] = r[s - 1];
        return r[i] = a, r;
      });
    }
  };
}, Xw = () => {
  const { edges: e } = et();
  return {
    getEdgesByTarget: (t) => G(e).filter((n) => n.target === t)
  };
};
var Yw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Kw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Fw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Gw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Uw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Jw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), eb = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const tb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function yf(e, t) {
  var n;
  pe(t, !0), at(e, tb);
  const r = w(t, "data", 7), o = /* @__PURE__ */ zt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = St(), { addParameter: a } = qn(), s = Jt(), { updateNodeData: l } = s, c = { ...o, id: i, data: r() }, u = document.createElement("div"), d = pr().customNodes[t.type];
  (n = d.render) == null || n.call(d, u, c, s);
  const v = d.forms;
  let g;
  xn(() => {
    r().expand && g && g.append(u);
  }), xn(() => {
    var x;
    r() && ((x = d.onUpdate) == null || x.call(d, u, { ...c, data: r() }));
  }), xn(() => {
    !r().parameters && d.parameters && l(i, {
      parameters: ta(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), xn(() => {
    !r().outputDefs && d.outputDefs && l(i, {
      outputDefs: ta(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const p = /* @__PURE__ */ Ne(() => ({
    ...r(),
    description: d.description
  }));
  return Mn(e, mt(
    {
      get data() {
        return f(p);
      }
    },
    () => o,
    {
      icon: (x) => {
        var b = it(), $ = Ce(b);
        Ns($, () => d.icon), A(x, b);
      },
      children: (x, b) => {
        var $ = eb(), h = Ce($);
        {
          var C = (O) => {
            var D = Ww(), q = Ce(D), z = Y(q);
            tt(z, {
              level: 3,
              children: (M, N) => {
                Re();
                var T = We("输入参数");
                A(M, T);
              },
              $$slots: { default: !0 }
            });
            var R = B(z, 2);
            {
              var S = (M) => {
                nt(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (N, T) => {
                    var V = Yw();
                    A(N, V);
                  },
                  $$slots: { default: !0 }
                });
              };
              $e(R, (M) => {
                d.parametersAddEnable !== !1 && M(S);
              });
            }
            j(q);
            var _ = B(q, 2);
            rn(_, {}), A(O, D);
          };
          $e(h, (O) => {
            d.parametersEnable !== !1 && O(C);
          });
        }
        var m = B(h, 2);
        {
          var k = (O) => {
            var D = it(), q = Ce(D);
            Zt(q, 17, () => v, eo, (z, R) => {
              var S = it(), _ = Ce(S);
              {
                var M = (T) => {
                  var V = Kw(), I = Ce(V), X = Y(I, !0);
                  j(I);
                  var W = B(I, 2), U = Y(W);
                  const Q = /* @__PURE__ */ Ne(() => r()[f(R).name] || f(R).defaultValue);
                  Mt(U, mt(
                    {
                      get placeholder() {
                        return f(R).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(Q);
                      }
                    },
                    () => f(R).attrs,
                    {
                      onchange: (K) => {
                        l(i, { [f(R).name]: K.target.value });
                      }
                    }
                  )), j(W), Te(() => xt(X, f(R).label)), A(T, V);
                }, N = (T, V) => {
                  {
                    var I = (W) => {
                      var U = Fw(), Q = Ce(U), K = Y(Q, !0);
                      j(Q);
                      var ce = B(Q, 2), ue = Y(ce);
                      const ye = /* @__PURE__ */ Ne(() => r()[f(R).name] || f(R).defaultValue);
                      Pt(ue, mt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(R).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(ye);
                          }
                        },
                        () => f(R).attrs,
                        {
                          onchange: (se) => {
                            l(i, { [f(R).name]: se.target.value });
                          }
                        }
                      )), j(ce), Te(() => xt(K, f(R).label)), A(W, U);
                    }, X = (W, U) => {
                      {
                        var Q = (ce) => {
                          var ue = Gw(), ye = Ce(ue), se = Y(ye, !0);
                          j(ye);
                          var _e = B(ye, 2), xe = Y(_e), Oe = Y(xe), le = Y(Oe);
                          j(Oe);
                          var J = B(Oe, 2);
                          kr(J);
                          var Me = (Ae) => l(i, {
                            [f(R).name]: parseFloat(Ae.target.value)
                          });
                          let F;
                          j(xe), j(_e), Te(() => {
                            xt(se, f(R).label), xt(le, `${f(R).description ?? ""}: ${r()[f(R).name] ?? f(R).defaultValue ?? ""}`), F = gn(
                              J,
                              F,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(R).attrs,
                                value: r()[f(R).name] ?? f(R).defaultValue,
                                oninput: Me
                              },
                              "svelte-q0cqsa"
                            );
                          }), A(ce, ue);
                        }, K = (ce, ue) => {
                          {
                            var ye = (_e) => {
                              var xe = Uw(), Oe = Ce(xe), le = Y(Oe, !0);
                              j(Oe);
                              var J = B(Oe, 2), Me = Y(J);
                              const F = /* @__PURE__ */ Ne(() => f(R).options || []), Ae = /* @__PURE__ */ Ne(() => r()[f(R).name] ? [r()[f(R).name]] : [f(R).defaultValue]);
                              hn(Me, {
                                get items() {
                                  return f(F);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(R).placeholder;
                                },
                                onSelect: (Ke) => {
                                  const qe = Ke.value;
                                  l(i, () => ({ [f(R).name]: qe }));
                                },
                                get value() {
                                  return f(Ae);
                                }
                              }), j(J), Te(() => xt(le, f(R).label)), A(_e, xe);
                            }, se = (_e, xe) => {
                              {
                                var Oe = (le) => {
                                  tt(le, mt({ level: 3, mt: "10px" }, () => f(R).attrs, {
                                    children: (J, Me) => {
                                      Re();
                                      var F = We();
                                      Te(() => xt(F, f(R).label)), A(J, F);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                $e(
                                  _e,
                                  (le) => {
                                    f(R).type === "heading" && le(Oe);
                                  },
                                  xe
                                );
                              }
                            };
                            $e(
                              ce,
                              (_e) => {
                                f(R).type === "select" ? _e(ye) : _e(se, !1);
                              },
                              ue
                            );
                          }
                        };
                        $e(
                          W,
                          (ce) => {
                            f(R).type === "slider" ? ce(Q) : ce(K, !1);
                          },
                          U
                        );
                      }
                    };
                    $e(
                      T,
                      (W) => {
                        f(R).type === "textarea" ? W(I) : W(X, !1);
                      },
                      V
                    );
                  }
                };
                $e(_, (T) => {
                  f(R).type === "input" ? T(M) : T(N, !1);
                });
              }
              A(z, S);
            }), A(O, D);
          };
          $e(m, (O) => {
            v && O(k);
          });
        }
        var P = B(m, 2);
        Dn(P, (O) => g = O, () => g);
        var E = B(P, 2);
        {
          var H = (O) => {
            var D = Qw(), q = Ce(D), z = Y(q);
            tt(z, {
              level: 3,
              mt: "10px",
              children: (M, N) => {
                Re();
                var T = We("输出参数");
                A(M, T);
              },
              $$slots: { default: !0 }
            });
            var R = B(z, 2);
            {
              var S = (M) => {
                nt(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (N, T) => {
                    var V = Jw();
                    A(N, V);
                  },
                  $$slots: { default: !0 }
                });
              };
              $e(R, (M) => {
                d.outputDefsAddEnable !== !1 && M(S);
              });
            }
            j(q);
            var _ = B(q, 2);
            Jn(_, {}), A(O, D);
          };
          $e(E, (O) => {
            d.outputDefsEnable !== !1 && O(H);
          });
        }
        Te(() => {
          $t(P, d.rootStyle || ""), Lt(P, 1, Sn(d.rootClass), "svelte-q0cqsa");
        }), A(x, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return r();
    },
    set data(x) {
      r(x), y();
    }
  });
}
ve(yf, { data: {} }, [], [], !0);
const nb = () => {
  const e = et();
  return {
    updateEdgeData: (t, n, r) => {
      const o = G(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
};
var rb = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), ob = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), ib = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const ab = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function wf(e, t) {
  pe(t, !0), at(e, ab);
  const [n, r] = ft(), o = () => oe(H, "$nodes", n), i = () => oe(O, "$edges", n), a = () => oe(D, "$viewport", n), s = w(t, "onInit", 7), l = Jt();
  s()(l);
  let c = /* @__PURE__ */ Rt(!1), u = /* @__PURE__ */ Rt(void 0);
  const { updateEdgeData: d } = nb(), v = (T) => {
    T.preventDefault(), T.dataTransfer && (T.dataTransfer.dropEffect = "move");
  }, g = (T) => {
    var V;
    T.preventDefault();
    const I = l.screenToFlowPosition({
      x: T.clientX - 250,
      y: T.clientY - 100
    }), X = (V = T.dataTransfer) == null ? void 0 : V.getData("application/tinyflow"), W = X ? JSON.parse(X) : {}, U = {
      id: `node_${lo()}`,
      position: I,
      data: {},
      ...W
    };
    Si.addNode(U), Si.selectNodeOnly(U.id);
  }, { getNode: p } = Bw(), x = (T) => {
    const V = p(T.source), I = p(T.target);
    if (T.sourceHandle === "loop_handle" || V.parentId) {
      const X = l.getEdges();
      for (let W of X)
        if (W.target === T.target) {
          const U = p(W.source);
          if (T.sourceHandle === "loop_handle" && U.parentId !== V.id || V.parentId && U.parentId !== V.parentId)
            return !1;
        }
    }
    return !(!V.parentId && I.parentId && I.parentId !== V.id);
  }, { ensureParentInNodesBefore: b } = jw(), $ = (T, V) => {
    if (!V.isValid)
      return;
    const I = V.toNode;
    if (I.parentId)
      return;
    const X = V.fromNode, W = V.fromHandle, U = { position: { ...I.position } };
    if (W.id === "loop_handle" ? U.parentId = X.id : X.parentId && (U.parentId = X.parentId), U.parentId) {
      const Q = p(U.parentId);
      U.position = {
        x: I.position.x - Q.position.x,
        y: I.position.y - Q.position.y
      }, b(U.parentId, I.id), l.updateNode(I.id, U);
    }
  }, { getEdgesByTarget: h } = Xw(), C = (T) => {
    T.edges.forEach((V) => {
      const I = p(V.target);
      if (I && I.parentId) {
        const X = h(V.target), W = p(I.parentId);
        if (X.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + W.position.x,
              y: I.position.y + W.position.y
            }
          });
        else {
          let U = !1;
          for (let Q = 0; Q < X.length; Q++) {
            const K = X[Q], ce = p(K.source);
            if (ce.parentId || ce.type === "loopNode") {
              U = !0;
              break;
            }
          }
          U || l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + W.position.x,
              y: I.position.y + W.position.y
            }
          });
        }
      }
    });
  }, m = (T, V) => {
  }, k = (T) => {
  }, P = {}, E = pr().customNodes;
  if (E)
    for (let T of Object.keys(E))
      P[T] = yf;
  const { nodes: H, edges: O, viewport: D } = et(), q = pr().onDataChange;
  q && (H.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), O.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), D.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var z = ib(), R = Y(z);
  const S = /* @__PURE__ */ Ne(() => ({ ...Aw, ...P })), _ = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Sd(R, mt(
    {
      get nodeTypes() {
        return f(S);
      }
    },
    Si,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: m,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (T) => {
        const V = T.target;
        V.classList.contains("svelte-flow__edge-interaction") || V.classList.contains("panel-content") || V.closest(".panel-content") || (ee(c, !1), ee(u, null));
      },
      get defaultEdgeOptions() {
        return f(_);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (T) => {
          ee(c, !0), ee(u, T.detail.edge, !0);
        }
      },
      children: (T, V) => {
        var I = ob(), X = Ce(I);
        zd(X, {});
        var W = B(X, 2);
        Nd(W, {});
        var U = B(W, 2);
        Ad(U, {});
        var Q = B(U, 2);
        {
          var K = (ce) => {
            ri(ce, {
              children: (ue, ye) => {
                var se = rb(), _e = B(Y(se), 4), xe = Y(_e);
                const Oe = /* @__PURE__ */ Ne(() => {
                  var le, J;
                  return (J = (le = f(u)) == null ? void 0 : le.data) == null ? void 0 : J.condition;
                });
                Pt(xe, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(Oe);
                  },
                  onchange: (le) => {
                    f(u) && d(f(u).id, { condition: le.target.value });
                  }
                }), j(_e), j(se), A(ue, se);
              },
              $$slots: { default: !0 }
            });
          };
          $e(Q, (ce) => {
            f(c) && ce(K);
          });
        }
        A(T, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = B(R, 2);
  mf(M, {}), j(z), A(e, z);
  var N = me({
    get onInit() {
      return s();
    },
    set onInit(T) {
      s(T), y();
    }
  });
  return r(), N;
}
ve(wf, { onInit: {} }, [], [], !0);
function sb(e, t) {
  pe(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Si.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Qr("tinyflow_options", n()), Ed(e, {
    fitView: !0,
    children: (i, a) => {
      wf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), me({
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
customElements.define("tinyflow-component", ve(sb, { options: {}, onInit: {} }, [], [], !1));
const db = $f((e, t) => {
  const n = tl(null), r = tl(null);
  Cf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return _f(() => {
    if (n.current) {
      const s = new Fm({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Mf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  db as Tinyflow
};
//# sourceMappingURL=index.js.map
