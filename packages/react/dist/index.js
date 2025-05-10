import pu, { forwardRef as $f, useRef as tl, useImperativeHandle as Cf, useEffect as _f } from "react";
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
  var e = pu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, v = null, p = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps) for (u in l = s.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: v, ref: p, props: d, _owner: o.current };
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
function Ef() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, x = "@@iterator";
    function b(z) {
      if (z === null || typeof z != "object")
        return null;
      var ne = h && z[h] || z[x];
      return typeof ne == "function" ? ne : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(z) {
      {
        for (var ne = arguments.length, we = new Array(ne > 1 ? ne - 1 : 0), He = 1; He < ne; He++)
          we[He - 1] = arguments[He];
        _("error", z, we);
      }
    }
    function _(z, ne, we) {
      {
        var He = $.ReactDebugCurrentFrame, Z = He.getStackAddendum();
        Z !== "" && (ne += "%s", we = we.concat([Z]));
        var ot = we.map(function(Ye) {
          return String(Ye);
        });
        ot.unshift("Warning: " + ne), Function.prototype.apply.call(console[z], console, ot);
      }
    }
    var m = !1, k = !1, T = !1, E = !1, H = !1, O;
    O = Symbol.for("react.module.reference");
    function L(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || H || z === o || z === c || z === u || E || z === p || m || k || T || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === d || z.$$typeof === a || z.$$typeof === s || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === O || z.getModuleId !== void 0));
    }
    function q(z, ne, we) {
      var He = z.displayName;
      if (He)
        return He;
      var Z = ne.displayName || ne.name || "";
      return Z !== "" ? we + "(" + Z + ")" : we;
    }
    function D(z) {
      return z.displayName || "Context";
    }
    function R(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
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
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case s:
            var ne = z;
            return D(ne) + ".Consumer";
          case a:
            var we = z;
            return D(we._context) + ".Provider";
          case l:
            return q(z, z.render, "ForwardRef");
          case d:
            var He = z.displayName || null;
            return He !== null ? He : R(z.type) || "Memo";
          case v: {
            var Z = z, ot = Z._payload, Ye = Z._init;
            try {
              return R(Ye(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, C = 0, M, N, P, V, I, Y, W;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Q() {
      {
        if (C === 0) {
          M = console.log, N = console.info, P = console.warn, V = console.error, I = console.group, Y = console.groupCollapsed, W = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: U,
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
        C++;
      }
    }
    function K() {
      {
        if (C--, C === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, z, {
              value: M
            }),
            info: S({}, z, {
              value: N
            }),
            warn: S({}, z, {
              value: P
            }),
            error: S({}, z, {
              value: V
            }),
            group: S({}, z, {
              value: I
            }),
            groupCollapsed: S({}, z, {
              value: Y
            }),
            groupEnd: S({}, z, {
              value: W
            })
          });
        }
        C < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = $.ReactCurrentDispatcher, ue;
    function ye(z, ne, we) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (Z) {
            var He = Z.stack.trim().match(/\n( *(at )?)/);
            ue = He && He[1] || "";
          }
        return `
` + ue + z;
      }
    }
    var se = !1, _e;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new xe();
    }
    function Oe(z, ne) {
      if (!z || se)
        return "";
      {
        var we = _e.get(z);
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
            } catch (St) {
              He = St;
            }
            Reflect.construct(z, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (St) {
              He = St;
            }
            z.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            He = St;
          }
          z();
        }
      } catch (St) {
        if (St && He && typeof St.stack == "string") {
          for (var Ie = St.stack.split(`
`), Ot = He.stack.split(`
`), pt = Ie.length - 1, ht = Ot.length - 1; pt >= 1 && ht >= 0 && Ie[pt] !== Ot[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Ie[pt] !== Ot[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Ie[pt] !== Ot[ht]) {
                    var Yt = `
` + Ie[pt].replace(" at new ", " at ");
                    return z.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", z.displayName)), typeof z == "function" && _e.set(z, Yt), Yt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        se = !1, ce.current = ot, K(), Error.prepareStackTrace = Z;
      }
      var tr = z ? z.displayName || z.name : "", nr = tr ? ye(tr) : "";
      return typeof z == "function" && _e.set(z, nr), nr;
    }
    function le(z, ne, we) {
      return Oe(z, !1);
    }
    function J(z) {
      var ne = z.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Me(z, ne, we) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return Oe(z, J(z));
      if (typeof z == "string")
        return ye(z);
      switch (z) {
        case c:
          return ye("Suspense");
        case u:
          return ye("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return le(z.render);
          case d:
            return Me(z.type, ne, we);
          case v: {
            var He = z, Z = He._payload, ot = He._init;
            try {
              return Me(ot(Z), ne, we);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, Ae = {}, Ke = $.ReactDebugCurrentFrame;
    function qe(z) {
      if (z) {
        var ne = z._owner, we = Me(z.type, z._source, ne ? ne.type : null);
        Ke.setExtraStackFrame(we);
      } else
        Ke.setExtraStackFrame(null);
    }
    function pe(z, ne, we, He, Z) {
      {
        var ot = Function.call.bind(F);
        for (var Ye in z)
          if (ot(z, Ye)) {
            var Ie = void 0;
            try {
              if (typeof z[Ye] != "function") {
                var Ot = Error((He || "React class") + ": " + we + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              Ie = z[Ye](ne, Ye, He, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ie = pt;
            }
            Ie && !(Ie instanceof Error) && (qe(Z), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", we, Ye, typeof Ie), qe(null)), Ie instanceof Error && !(Ie.message in Ae) && (Ae[Ie.message] = !0, qe(Z), g("Failed %s type: %s", we, Ie.message), qe(null));
          }
      }
    }
    var ge = Array.isArray;
    function fe(z) {
      return ge(z);
    }
    function Ve(z) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, we = ne && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return we;
      }
    }
    function ct(z) {
      try {
        return vt(z), !1;
      } catch {
        return !0;
      }
    }
    function vt(z) {
      return "" + z;
    }
    function te(z) {
      if (ct(z))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(z)), vt(z);
    }
    var Fe = $.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Xt;
    function ln(z) {
      if (F.call(z, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Le(z) {
      if (F.call(z, "key")) {
        var ne = Object.getOwnPropertyDescriptor(z, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function st(z, ne) {
      typeof z.ref == "string" && Fe.current;
    }
    function Be(z, ne) {
      {
        var we = function() {
          jt || (jt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function Ze(z, ne) {
      {
        var we = function() {
          Xt || (Xt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var lt = function(z, ne, we, He, Z, ot, Ye) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
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
    function Qt(z, ne, we, He, Z) {
      {
        var ot, Ye = {}, Ie = null, Ot = null;
        we !== void 0 && (te(we), Ie = "" + we), Le(ne) && (te(ne.key), Ie = "" + ne.key), ln(ne) && (Ot = ne.ref, st(ne, Z));
        for (ot in ne)
          F.call(ne, ot) && !de.hasOwnProperty(ot) && (Ye[ot] = ne[ot]);
        if (z && z.defaultProps) {
          var pt = z.defaultProps;
          for (ot in pt)
            Ye[ot] === void 0 && (Ye[ot] = pt[ot]);
        }
        if (Ie || Ot) {
          var ht = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          Ie && Be(Ye, ht), Ot && Ze(Ye, ht);
        }
        return lt(z, Ie, Ot, Z, He, Fe.current, Ye);
      }
    }
    var Vt = $.ReactCurrentOwner, Qn = $.ReactDebugCurrentFrame;
    function yt(z) {
      if (z) {
        var ne = z._owner, we = Me(z.type, z._source, ne ? ne.type : null);
        Qn.setExtraStackFrame(we);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Pn(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function rt() {
      {
        if (Vt.current) {
          var z = R(Vt.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function yo(z) {
      return "";
    }
    var er = {};
    function Lt(z) {
      {
        var ne = rt();
        if (!ne) {
          var we = typeof z == "string" ? z : z.displayName || z.name;
          we && (ne = `

Check the top-level render call using <` + we + ">.");
        }
        return ne;
      }
    }
    function wr(z, ne) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var we = Lt(ne);
        if (er[we])
          return;
        er[we] = !0;
        var He = "";
        z && z._owner && z._owner !== Vt.current && (He = " It was passed a child from " + R(z._owner.type) + "."), yt(z), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, He), yt(null);
      }
    }
    function br(z, ne) {
      {
        if (typeof z != "object")
          return;
        if (fe(z))
          for (var we = 0; we < z.length; we++) {
            var He = z[we];
            Pn(He) && wr(He, ne);
          }
        else if (Pn(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Z = b(z);
          if (typeof Z == "function" && Z !== z.entries)
            for (var ot = Z.call(z), Ye; !(Ye = ot.next()).done; )
              Pn(Ye.value) && wr(Ye.value, ne);
        }
      }
    }
    function Lr(z) {
      {
        var ne = z.type;
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
          pe(we, z.props, "prop", He, z);
        } else if (ne.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Z = R(ne);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wo(z) {
      {
        for (var ne = Object.keys(z.props), we = 0; we < ne.length; we++) {
          var He = ne[we];
          if (He !== "children" && He !== "key") {
            yt(z), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), yt(null);
            break;
          }
        }
        z.ref !== null && (yt(z), g("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var si = {};
    function li(z, ne, we, He, Z, ot) {
      {
        var Ye = L(z);
        if (!Ye) {
          var Ie = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = yo();
          Ot ? Ie += Ot : Ie += rt();
          var pt;
          z === null ? pt = "null" : fe(z) ? pt = "array" : z !== void 0 && z.$$typeof === t ? (pt = "<" + (R(z.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof z, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ie);
        }
        var ht = Qt(z, ne, we, Z, ot);
        if (ht == null)
          return ht;
        if (Ye) {
          var Yt = ne.children;
          if (Yt !== void 0)
            if (He)
              if (fe(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  br(Yt[tr], z);
                Object.freeze && Object.freeze(Yt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Yt, z);
        }
        if (F.call(ne, "key")) {
          var nr = R(z), St = Object.keys(ne).filter(function(ci) {
            return ci !== "key";
          }), Ar = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!si[nr + Ar]) {
            var ui = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, nr, ui, nr), si[nr + Ar] = !0;
          }
        }
        return z === r ? wo(ht) : Lr(ht), ht;
      }
    }
    function ka(z, ne, we) {
      return li(z, ne, we, !0);
    }
    function Ea(z, ne, we) {
      return li(z, ne, we, !1);
    }
    var Sa = Ea, Ma = ka;
    xo.Fragment = r, xo.jsx = Sa, xo.jsxs = Ma;
  }()), xo;
}
var ol;
function Sf() {
  return ol || (ol = 1, process.env.NODE_ENV === "production" ? di.exports = kf() : di.exports = Ef()), di.exports;
}
var Mf = Sf(), Pf = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Tf = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n), hs = (e, t, n) => t.has(e) || gu("Cannot " + n), wt = (e, t, n) => (hs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Si = (e, t, n, r) => (hs(e, t, "write to private field"), t.set(e, n), n), Vf = (e, t, n) => (hs(e, t, "access private method"), n);
const Of = "5";
var il;
typeof window < "u" && ((il = window.__svelte ?? (window.__svelte = {})).v ?? (il.v = /* @__PURE__ */ new Set())).add(Of);
let uo = !1, Nf = !1;
function Hf() {
  uo = !0;
}
Hf();
const ms = 1, ys = 2, hu = 4, zf = 8, Df = 16, Lf = 1, Af = 2, mu = 4, Rf = 8, If = 16, yu = 1, qf = 2, ws = "[", bs = "[!", xs = "]", jr = {}, Wt = Symbol(), Zf = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/2000/svg", jf = !1;
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
let De = !1;
function nn(e) {
  De = e;
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
  if (De) {
    if (/* @__PURE__ */ Rn(Xe) !== null)
      throw ia(), jr;
    Xe = e;
  }
}
function Re(e = 1) {
  if (De) {
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
    zn(i);
    var c = s();
    return zn(l), c;
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
          var p = f(d);
          return p === Wt ? void 0 : p;
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
        var d, v = n.get(l), p = l in s;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var x = n.get(h + "");
            x !== void 0 ? ee(x, Wt) : h in s && (x = a(() => /* @__PURE__ */ Rt(Wt)), n.set(h + "", x));
          }
        v === void 0 ? (!p || (d = Xn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ Rt(void 0)), ee(
          v,
          a(() => wn(c))
        ), n.set(l, v)) : (p = v.v !== Wt, ee(
          v,
          a(() => wn(c))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(u, c), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= $.v && ee($, g + 1);
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
function X(e, t) {
  if (!De)
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
  if (!De) {
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
  let r = De ? Xe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(r);
  if (!De)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Kn();
    return r === null ? o == null || o.after(a) : r.before(a), It(a), a;
  }
  return It(r), /** @type {TemplateNode} */
  r;
}
function Es(e) {
  e.textContent = "";
}
function ku(e) {
  return e === this.v;
}
function Ss(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ms(e) {
  return !Ss(e, this.v);
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
function Eu(e) {
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
function Su(e) {
  var t, n = Qe;
  vr(l1(e));
  try {
    Eu(e), t = Zu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Mu(e) {
  var t = Su(e), n = (ar || (e.f & on) !== 0) && e.deps !== null ? mr : qt;
  vn(e, n), e.equals(t) || (e.v = t, e.wv = Iu());
}
function Pu(e) {
  Qe === null && ut === null && t1(), ut !== null && (ut.f & on) !== 0 && Qe === null && e1(), Go && Qf();
}
function u1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function zr(e, t, n, r = !0) {
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
  const t = zr(ra, null, !1);
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
  const t = zr(Hr, e, !0);
  return () => {
    Cn(t);
  };
}
function f1(e) {
  const t = zr(Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(t, () => {
      Cn(t), r(void 0);
    }) : (Cn(t), r(void 0));
  });
}
function tn(e) {
  return zr(bu, e, !1);
}
function be(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, ee(n.l.r2, !0), Dn(t));
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
        (n.f & qt) !== 0 && vn(n, mr), po(n) && sa(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return zr(ra, e, !0);
}
function Te(e, t = [], n = Gr) {
  const r = t.map(n);
  return vo(() => e(...r.map(f)));
}
function vo(e, t = 0) {
  return zr(ra | _s | t, e, !0);
}
function fr(e, t = !0) {
  return zr(ra | Gn, e, !0, t);
}
function Tu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Go, r = ut;
    ll(!0), zn(null);
    try {
      t.call(null);
    } finally {
      ll(n), zn(r);
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
  zu(e, !0);
}
function zu(e, t) {
  if ((e.f & Yn) !== 0) {
    e.f ^= Yn, (e.f & qt) === 0 && (e.f ^= qt), po(e) && (vn(e, Nn), la(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Gn) !== 0;
      zu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const p1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let zo = [], Do = [];
function Du() {
  var e = zo;
  zo = [], No(e);
}
function Lu() {
  var e = Do;
  Do = [], No(e);
}
function Fo(e) {
  zo.length === 0 && queueMicrotask(Du), zo.push(e);
}
function g1(e) {
  Do.length === 0 && p1(Lu), Do.push(e);
}
function sl() {
  zo.length > 0 && Du(), Do.length > 0 && Lu();
}
let wi = !1, Vi = !1, Oi = null, _r = !1, Go = !1;
function ll(e) {
  Go = e;
}
let To = [], ut = null, Tn = !1;
function zn(e) {
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
function h1(e) {
  cn = e;
}
let Ru = 1, Ni = 0, ar = !1;
function Iu() {
  return ++Ru;
}
function po(e) {
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
        if (a = r[i], po(
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
      var p;
      if (Hi(e, en), v !== null && en > 0)
        for (v.length = en + At.length, p = 0; p < At.length; p++)
          v[en + p] = At[p];
      else
        e.deps = v = At;
      if (!ar)
        for (p = en; p < v.length; p++)
          ((t = v[p]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && en < v.length && (Hi(e, en), v.length = en);
    if (ua() && cn !== null && !Tn && v !== null && (e.f & ($n | mr | Nn)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      cn.length; p++)
        qu(
          cn[p],
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
  (At === null || !At.includes(t)) && (vn(t, mr), (t.f & (on | Ti)) === 0 && (t.f ^= Ti), Eu(
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
      Lo.clear();
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
          po(r) && (sa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Nu(r) : r.fn = null));
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
          po(n) && sa(n);
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
  e, po(o) && Mu(o)), Go && Lo.has(e) ? Lo.get(e) : e.v;
}
function Dn(e) {
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
const Lo = /* @__PURE__ */ new Map();
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
    Go ? Lo.set(e, t) : Lo.set(e, n), e.v = t, (e.f & $n) !== 0 && ((e.f & Nn) !== 0 && Su(
      /** @type {Derived} */
      e
    ), vn(e, (e.f & on) === 0 ? qt : mr)), e.wv = Iu(), ju(e, Nn), ua() && Qe !== null && (Qe.f & qt) !== 0 && (Qe.f & (Gn | Hr)) === 0 && (cn === null ? h1([e]) : cn.push(e));
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
function he(e, t = !1, n) {
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
          vr(i.effect), zn(i.reaction), tn(i.fn);
        }
      } finally {
        vr(n), zn(r);
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
const E1 = [
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
function S1(e) {
  return E1.includes(e);
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
function z1(e) {
  De && /* @__PURE__ */ _t(e) !== null && Es(e);
}
let fl = !1;
function D1() {
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
function L1(e) {
  var t = ut, n = Qe;
  zn(null), vr(null);
  try {
    return e();
  } finally {
    zn(t), vr(n);
  }
}
const Xu = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function Yu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Eo.call(t, i), !i.cancelBubble)
      return L1(() => n == null ? void 0 : n.call(this, i));
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
function go(e) {
  for (var t = 0; t < e.length; t++)
    Xu.add(e[t]);
  for (var n of Fa)
    n(e);
}
function Eo(e) {
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
    zn(null), vr(null);
    try {
      for (var p, h = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Ko(b)) {
              var [$, ...g] = b;
              $.apply(a, [e, ...g]);
            } else
              b.call(a, e);
        } catch (_) {
          p ? h.push(_) : p = _;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (p) {
        for (let _ of h)
          queueMicrotask(() => {
            throw _;
          });
        throw p;
      }
    } finally {
      e.__root = n, delete e.currentTarget, zn(d), vr(v);
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
    if (De)
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
    if (De)
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
  if (!De) {
    var t = Kn(e + "");
    return Ut(t, t), t;
  }
  var n = Xe;
  return n.nodeType !== 3 && (n.before(n = Kn()), It(n)), Ut(n, n), n;
}
function it() {
  if (De)
    return Ut(Xe, null), Xe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), Ut(t, n), e;
}
function A(e, t) {
  if (De) {
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
  const n = t.target, r = De, o = Xe;
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
      return t.recover === !1 && r1(), Ya(), Es(n), nn(!1), Wu(e, t);
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
      var p = d[v];
      if (!s.has(p)) {
        s.add(p);
        var h = V1(p);
        t.addEventListener(p, Eo, { passive: h });
        var x = Rr.get(p);
        x === void 0 ? (document.addEventListener(p, Eo, { passive: h }), Rr.set(p, 1)) : Rr.set(p, x + 1);
      }
    }
  };
  l($s(Xu)), Fa.add(l);
  var c = void 0, u = f1(() => {
    var d = n ?? t.appendChild(Kn());
    return fr(() => {
      if (i) {
        he({});
        var v = (
          /** @type {ComponentContext} */
          Je
        );
        v.c = i;
      }
      o && (r.$$events = o), De && Ut(
        /** @type {TemplateNode} */
        d,
        null
      ), c = e(d, r) || {}, De && (Qe.nodes_end = Xe), i && me();
    }), () => {
      var v;
      for (var p of s) {
        t.removeEventListener(p, Eo);
        var h = (
          /** @type {number} */
          Rr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Eo), Rr.delete(p)) : Rr.set(p, h);
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
  De && n === 0 && Hn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? co : 0, c = !1;
  const u = (v, p = !0) => {
    c = !0, d(p, v);
  }, d = (v, p) => {
    if (s === (s = v)) return;
    let h = !1;
    if (De && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ws ? r = 0 : b === bs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = Xa(), It(o), nn(!1), h = !0, r = -1);
    }
    s ? (i ? Ho(i) : p && (i = fr(() => p(o))), a && Ur(a, () => {
      a = null;
    })) : (a ? Ho(a) : p && (a = fr(() => p(o, [n + 1, r]))), i && Ur(i, () => {
      i = null;
    })), h && nn(!0);
  };
  vo(() => {
    c = !1, t(u), c || d(null, null);
  }, l), De && (o = Xe);
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
    Es(l), l.append(
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
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = De ? It(
      /** @type {Comment | Text} */
      /* @__PURE__ */ _t(c)
    ) : c.appendChild(Kn());
  }
  De && Hn();
  var u = null, d = !1, v = /* @__PURE__ */ ke(() => {
    var p = n();
    return Ko(p) ? p : p == null ? [] : $s(p);
  });
  vo(() => {
    var p = f(v), h = p.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let x = !1;
    if (De) {
      var b = (
        /** @type {Comment} */
        a.data === bs
      );
      b !== (h === 0) && (a = Xa(), It(a), nn(!1), x = !0);
    }
    if (De) {
      for (var $ = null, g, _ = 0; _ < h; _++) {
        if (Xe.nodeType === 8 && /** @type {Comment} */
        Xe.data === xs) {
          a = /** @type {Comment} */
          Xe, x = !0, nn(!1);
          break;
        }
        var m = p[_], k = r(m, _);
        g = Fu(
          Xe,
          s,
          $,
          null,
          m,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, g), $ = g;
      }
      h > 0 && It(Xa());
    }
    De || q1(p, s, a, o, t, r, n), i !== null && (h === 0 ? u ? Ho(u) : u = fr(() => i(a)) : u !== null && Ur(u, () => {
      u = null;
    })), x && nn(!0), f(v);
  }), De && (a = Xe);
}
function q1(e, t, n, r, o, i, a) {
  var s, l, c, u, d = (o & zf) !== 0, v = (o & (ms | ys)) !== 0, p = e.length, h = t.items, x = t.first, b = x, $, g = null, _, m = [], k = [], T, E, H, O;
  if (d)
    for (O = 0; O < p; O += 1)
      T = e[O], E = i(T, O), H = h.get(E), H !== void 0 && ((s = H.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(H));
  for (O = 0; O < p; O += 1) {
    if (T = e[O], E = i(T, O), H = h.get(E), H === void 0) {
      var L = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Fu(
        L,
        t,
        g,
        g === null ? t.first : g.next,
        T,
        E,
        O,
        r,
        o,
        a
      ), h.set(E, g), m = [], k = [], b = g.next;
      continue;
    }
    if (v && Z1(H, T, O, o), (H.e.f & Yn) !== 0 && (Ho(H.e), d && ((l = H.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(H))), H !== b) {
      if ($ !== void 0 && $.has(H)) {
        if (m.length < k.length) {
          var q = k[0], D;
          g = q.prev;
          var R = m[0], S = m[m.length - 1];
          for (D = 0; D < m.length; D += 1)
            vl(m[D], q, n);
          for (D = 0; D < k.length; D += 1)
            $.delete(k[D]);
          or(t, R.prev, S.next), or(t, g, R), or(t, S, q), b = q, g = S, O -= 1, m = [], k = [];
        } else
          $.delete(H), vl(H, b, n), or(t, H.prev, H.next), or(t, H, g === null ? t.first : g.next), or(t, g, H), g = H;
        continue;
      }
      for (m = [], k = []; b !== null && b.k !== E; )
        (b.e.f & Yn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      H = b;
    }
    m.push(H), g = H, b = H.next;
  }
  if (b !== null || $ !== void 0) {
    for (var C = $ === void 0 ? [] : $s($); b !== null; )
      (b.e.f & Yn) === 0 && C.push(b), b = b.next;
    var M = C.length;
    if (M > 0) {
      var N = (o & hu) !== 0 && p === 0 ? n : null;
      if (d) {
        for (O = 0; O < M; O += 1)
          (c = C[O].a) == null || c.measure();
        for (O = 0; O < M; O += 1)
          (u = C[O].a) == null || u.fix();
      }
      I1(t, C, N, h);
    }
  }
  d && Fo(() => {
    var P;
    if (_ !== void 0)
      for (H of _)
        (P = H.a) == null || P.apply();
  }), Qe.first = t.first && t.first.e, Qe.last = g && g.e;
}
function Z1(e, t, n, r) {
  (r & ms) !== 0 && Ka(e.v, t), (r & ys) !== 0 ? Ka(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Fu(e, t, n, r, o, i, a, s, l, c) {
  var u = (l & ms) !== 0, d = (l & Df) === 0, v = u ? d ? /* @__PURE__ */ ae(o) : Jr(o) : o, p = (l & ys) === 0 ? a : Jr(a), h = {
    i: p,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = fr(() => s(e, v, p, c), De), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
      De && Hn();
      return;
    }
    if (s.nodes_start !== null && (Ou(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (De) {
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
  De && Hn();
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
  }, co), De && (r = Xe);
}
function Gu(e, t, n) {
  De && Hn();
  var r = e, o, i;
  vo(() => {
    o !== (o = t()) && (i && (Ur(i), i = null), o && (i = fr(() => n(r, o))));
  }, co), De && (r = Xe);
}
function j1(e, t, n, r, o, i) {
  let a = De;
  De && Hn();
  var s, l, c = null;
  De && Xe.nodeType === 1 && (c = /** @type {Element} */
  Xe, Hn());
  var u = (
    /** @type {TemplateNode} */
    De ? Xe : e
  ), d;
  vo(() => {
    const v = t() || null;
    var p = v === "svg" ? Bf : null;
    v !== s && (d && (v === null ? Ur(d, () => {
      d = null, l = null;
    }) : v === l ? Ho(d) : Cn(d)), v && v !== l && (d = fr(() => {
      if (c = De ? (
        /** @type {Element} */
        c
      ) : p ? document.createElementNS(p, v) : document.createElement(v), Ut(c, c), r) {
        De && N1(v) && c.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          De ? /* @__PURE__ */ _t(c) : c.appendChild(Kn())
        );
        De && (h === null ? nn(!1) : It(h)), r(c, h);
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
    var r = Dn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var a = n();
        re(a), o && Ss(i, a) && (i = a, r.update(a));
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
function En(e) {
  return typeof e == "object" ? X1(e) : e ?? "";
}
const pl = [...` 	
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
          (a === 0 || pl.includes(r[a - 1])) && (s === r.length || pl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function gl(e, t = !1) {
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
              var p = Ta(e.substring(c, u).trim());
              if (!l.includes(p)) {
                v !== ";" && d++;
                var h = e.substring(c, d).trim();
                n += " " + h + ";";
              }
            }
            c = d + 1, u = -1;
          }
        }
      }
    }
    return r && (n += gl(r)), o && (n += gl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function zt(e, t, n, r, o, i) {
  var a = e.__className;
  if (De || a !== n || a === void 0) {
    var s = Y1(n, r, i);
    (!De || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
  if (De || o !== t) {
    var i = W1(t, r);
    (!De || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Va(e, n == null ? void 0 : n[0], r[0]), Va(e, n == null ? void 0 : n[1], r[1], "important")) : Va(e, n, r));
  return r;
}
const Co = Symbol("class"), xr = Symbol("style"), Ju = Symbol("is custom element"), Qu = Symbol("is html");
function kr(e) {
  if (De) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Ee(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Ee(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, g1(n), D1();
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
function Ee(e, t, n, r) {
  var o = ca(e);
  De && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ec(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pn(e, t, n, r, o = !1) {
  var i = ca(e), a = i[Ju], s = !i[Qu];
  let l = De && a;
  l && nn(!1);
  var c = t || {}, u = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = En(n.class) : (r || n[Co]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var v = ec(e);
  for (const _ in n) {
    let m = n[_];
    if (u && _ === "value" && m == null) {
      e.value = e.__value = "", c[_] = m;
      continue;
    }
    if (_ === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      zt(e, p, m, r, t == null ? void 0 : t[Co], n[Co]), c[_] = m, c[Co] = n[Co];
      continue;
    }
    if (_ === "style") {
      $t(e, m, t == null ? void 0 : t[xr], n[xr]), c[_] = m, c[xr] = n[xr];
      continue;
    }
    var h = c[_];
    if (m !== h) {
      c[_] = m;
      var x = _[0] + _[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, T = "$$" + _;
          let E = _.slice(2);
          var b = S1(E);
          if (k1(E) && (E = E.slice(0, -7), k.capture = !0), !b && h) {
            if (m != null) continue;
            e.removeEventListener(E, c[T], k), c[T] = null;
          }
          if (m != null)
            if (b)
              e[`__${E}`] = m, go([E]);
            else {
              let H = function(O) {
                c[_].call(this, O);
              };
              c[T] = Yu(E, e, H, k);
            }
          else b && (e[`__${E}`] = void 0);
        } else if (_ === "style")
          Ee(e, _, m);
        else if (_ === "autofocus")
          H1(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!a && (_ === "__value" || _ === "value" && m != null))
          e.value = e.__value = m;
        else if (_ === "selected" && u)
          F1(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var $ = _;
          s || ($ = P1($));
          var g = $ === "defaultValue" || $ === "defaultChecked";
          if (m == null && !a && !g)
            if (i[_] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const T = t === void 0;
              if ($ === "value") {
                let E = k.defaultValue;
                k.removeAttribute($), k.defaultValue = E, k.value = k.__value = T ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = E, k.checked = T ? E : !1;
              }
            } else
              e.removeAttribute(_);
          else g || v.includes($) && (a || typeof m != "string") ? e[$] = m : typeof m != "function" && Ee(e, $, m);
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
var hl = /* @__PURE__ */ new Map();
function ec(e) {
  var t = hl.get(e.nodeName);
  if (t) return t;
  hl.set(e.nodeName, t = []);
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
    Zr(this, Ua), Zr(this, $r, /* @__PURE__ */ new WeakMap()), Zr(this, Vo), Zr(this, bi), Si(this, bi, t);
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
  return wt(this, Vo) ?? Si(this, Vo, new ResizeObserver(
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
  tn(() => (Dn(() => n(e[t])), r));
}
function yl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Ln(e = {}, t, n, r) {
  return tn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], Dn(() => {
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
    const o = Dn(() => n.m.map(Kf));
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
function hn(e) {
  Je === null && na(), uo && Je.l !== null ? Q1(Je).m.push(e) : xn(() => {
    const t = Dn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Hs(e) {
  Je === null && na(), hn(() => () => Dn(e));
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
function zs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), kt;
  const r = Dn(
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
    subscribe: Se(e, t).subscribe
  };
}
function Se(e, t = kt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ss(e, s) && (e = s, n)) {
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
      const h = t(r ? c[0] : c, a, s);
      i ? a(h) : d = typeof h == "function" ? h : kt;
    }, p = o.map(
      (h, x) => zs(
        h,
        (b) => {
          c[x] = b, u &= ~(1 << x), l && v();
        },
        () => {
          u |= 1 << x;
        }
      )
    );
    return l = !0, v(), function() {
      No(p), d(), l = !1;
    };
  });
}
function G(e) {
  let t;
  return zs(e, (n) => t = n)(), t;
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
      r.unsubscribe = zs(e, (i) => {
        o ? r.source.v = i : ee(r.source, i);
      }), o = !1;
    }
  return e && Qa in n ? G(e) : f(r.source);
}
function ev(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = kt), e;
}
function zi(e, t) {
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
function Dt(e, t, n) {
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
function gt(e, t) {
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
  var o, i = (n & Lf) !== 0, a = !uo || (n & Af) !== 0, s = (n & Rf) !== 0, l = (n & If) !== 0, c = !1, u;
  s ? [u, c] = tv(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var d = lr in e || ks in e, v = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, p = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? p = Dn(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  u === void 0 && r !== void 0 && (v && a && o1(), u = b(), v && v(u));
  var $;
  if (a)
    $ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? b() : (h = !0, x = !1, E);
    };
  else {
    var g = (i ? Gr : ke)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Gf, $ = () => {
      var E = f(g);
      return E !== void 0 && (p = /** @type {V} */
      void 0), E === void 0 ? p : E;
    };
  }
  if ((n & mu) === 0)
    return $;
  if (v) {
    var _ = e.$$legacy;
    return function(E, H) {
      return arguments.length > 0 ? ((!a || !H || _ || c) && v(H ? $() : E), E) : $();
    };
  }
  var m = !1, k = /* @__PURE__ */ ae(u), T = /* @__PURE__ */ Gr(() => {
    var E = $(), H = f(k);
    return m ? (m = !1, H) : k.v = E;
  });
  return s && f(T), i || (T.equals = Ms), function(E, H) {
    if (arguments.length > 0) {
      const O = H ? f(T) : a && s ? wn(E) : E;
      if (!T.equals(O)) {
        if (m = !0, ee(k, O), x && p !== void 0 && (p = O), bl(T))
          return E;
        Dn(() => f(T));
      }
      return E;
    }
    return bl(T) ? T.v : f(T);
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
    Si(this, mn, (t.hydrate ? A1 : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), Si(this, rr, i.$$events);
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
function Ds(e) {
  return e == null ? vv : function() {
    return this.querySelector(e);
  };
}
function pv(e) {
  typeof e != "function" && (e = Ds(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, c, u = 0; u < a; ++u)
      (l = i[u]) && (c = e.call(l, l.__data__, u, i)) && ("__data__" in l && (c.__data__ = l.__data__), s[u] = c);
  return new sn(r, this._parents);
}
function gv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function hv() {
  return [];
}
function oc(e) {
  return e == null ? hv : function() {
    return this.querySelectorAll(e);
  };
}
function mv(e) {
  return function() {
    return gv(e.apply(this, arguments));
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
function Ev(e) {
  return this.selectAll(e == null ? _v : kv(typeof e == "function" ? e : ac(e)));
}
function Sv(e) {
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
function Di(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Di.prototype = {
  constructor: Di,
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
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Vv(e, t, n, r, o, i, a) {
  var s, l, c = /* @__PURE__ */ new Map(), u = t.length, d = i.length, v = new Array(u), p;
  for (s = 0; s < u; ++s)
    (l = t[s]) && (v[s] = p = a.call(l, l.__data__, s, t) + "", c.has(p) ? o[s] = l : c.set(p, l));
  for (s = 0; s < d; ++s)
    p = a.call(e, i[s], s, i) + "", (l = c.get(p)) ? (r[s] = l, l.__data__ = i[s], c.delete(p)) : n[s] = new Di(e, i[s]);
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
    var u = r[c], d = o[c], v = d.length, p = Hv(e.call(u, u && u.__data__, c, r)), h = p.length, x = s[c] = new Array(h), b = a[c] = new Array(h), $ = l[c] = new Array(v);
    n(u, d, x, b, $, p, t);
    for (var g = 0, _ = 0, m, k; g < h; ++g)
      if (m = x[g]) {
        for (g >= _ && (_ = g + 1); !(k = b[_]) && ++_ < h; ) ;
        m._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function Hv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zv() {
  return new sn(this._exit || this._groups.map(sc), this._parents);
}
function Dv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Lv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var c = n[l], u = r[l], d = c.length, v = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = c[h] || u[h]) && (v[h] = p);
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
function ep(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tp(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function np(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function rp(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ep : typeof t == "function" ? np : tp)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || lc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function op(e) {
  return function() {
    delete this[e];
  };
}
function ip(e, t) {
  return function() {
    this[e] = t;
  };
}
function ap(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sp(e, t) {
  return arguments.length > 1 ? this.each((t == null ? op : typeof t == "function" ? ap : ip)(e, t)) : this.node()[e];
}
function uc(e) {
  return e.trim().split(/^|\s+/);
}
function Ls(e) {
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
  for (var n = Ls(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function fc(e, t) {
  for (var n = Ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lp(e) {
  return function() {
    dc(this, e);
  };
}
function up(e) {
  return function() {
    fc(this, e);
  };
}
function cp(e, t) {
  return function() {
    (t.apply(this, arguments) ? dc : fc)(this, e);
  };
}
function dp(e, t) {
  var n = uc(e + "");
  if (arguments.length < 2) {
    for (var r = Ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? cp : t ? lp : up)(n, t));
}
function fp() {
  this.textContent = "";
}
function vp(e) {
  return function() {
    this.textContent = e;
  };
}
function pp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function gp(e) {
  return arguments.length ? this.each(e == null ? fp : (typeof e == "function" ? pp : vp)(e)) : this.node().textContent;
}
function hp() {
  this.innerHTML = "";
}
function mp(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wp(e) {
  return arguments.length ? this.each(e == null ? hp : (typeof e == "function" ? yp : mp)(e)) : this.node().innerHTML;
}
function bp() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xp() {
  return this.each(bp);
}
function $p() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cp() {
  return this.each($p);
}
function _p(e) {
  var t = typeof e == "function" ? e : rc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kp() {
  return null;
}
function Ep(e, t) {
  var n = typeof e == "function" ? e : rc(e), r = t == null ? kp : typeof t == "function" ? t : Ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Sp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Mp() {
  return this.each(Sp);
}
function Pp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vp(e) {
  return this.select(e ? Tp : Pp);
}
function Op(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Np(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Hp(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function zp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Dp(e, t, n) {
  return function() {
    var r = this.__on, o, i = Np(t);
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
function Lp(e, t, n) {
  var r = Hp(e + ""), o, i = r.length, a;
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
  for (s = t ? Dp : zp, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function vc(e, t, n) {
  var r = lc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ap(e, t) {
  return function() {
    return vc(this, e, t);
  };
}
function Rp(e, t) {
  return function() {
    return vc(this, e, t.apply(this, arguments));
  };
}
function Ip(e, t) {
  return this.each((typeof t == "function" ? Rp : Ap)(e, t));
}
function* qp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var pc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function Uo() {
  return new sn([[document.documentElement]], pc);
}
function Zp() {
  return this;
}
sn.prototype = Uo.prototype = {
  constructor: sn,
  select: pv,
  selectAll: yv,
  selectChild: $v,
  selectChildren: Ev,
  filter: Sv,
  data: Nv,
  enter: Mv,
  exit: zv,
  join: Dv,
  merge: Lv,
  selection: Zp,
  order: Av,
  sort: Rv,
  call: qv,
  nodes: Zv,
  node: Bv,
  size: jv,
  empty: Xv,
  each: Yv,
  attr: Qv,
  style: rp,
  property: sp,
  classed: dp,
  text: gp,
  html: wp,
  raise: xp,
  lower: Cp,
  append: _p,
  insert: Ep,
  remove: Mp,
  clone: Vp,
  datum: Op,
  on: Lp,
  dispatch: Ip,
  [Symbol.iterator]: qp
};
function dn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], pc);
}
function Bp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
  if (e = Bp(e), t === void 0 && (t = e.currentTarget), t) {
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
const jp = { passive: !1 }, Ao = { capture: !0, passive: !1 };
function Na(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gc(e) {
  var t = e.document.documentElement, n = dn(e).on("dragstart.drag", Xr, Ao);
  "onselectstart" in t ? n.on("selectstart.drag", Xr, Ao) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function hc(e, t) {
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
function Xp(e) {
  return !e.ctrlKey && !e.button;
}
function Yp() {
  return this.parentNode;
}
function Wp(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Kp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fp() {
  var e = Xp, t = Yp, n = Wp, r = Kp, o = {}, i = fa("start", "drag", "end"), a = 0, s, l, c, u, d = 0;
  function v(m) {
    m.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, jp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(m, k) {
    if (!(u || !e.call(this, m, k))) {
      var T = _(this, t.call(this, m, k), m, k, "mouse");
      T && (dn(m.view).on("mousemove.drag", h, Ao).on("mouseup.drag", x, Ao), gc(m.view), Na(m), c = !1, s = m.clientX, l = m.clientY, T("start", m));
    }
  }
  function h(m) {
    if (Xr(m), !c) {
      var k = m.clientX - s, T = m.clientY - l;
      c = k * k + T * T > d;
    }
    o.mouse("drag", m);
  }
  function x(m) {
    dn(m.view).on("mousemove.drag mouseup.drag", null), hc(m.view, c), Xr(m), o.mouse("end", m);
  }
  function b(m, k) {
    if (e.call(this, m, k)) {
      var T = m.changedTouches, E = t.call(this, m, k), H = T.length, O, L;
      for (O = 0; O < H; ++O)
        (L = _(this, E, m, k, T[O].identifier, T[O])) && (Na(m), L("start", m, T[O]));
    }
  }
  function $(m) {
    var k = m.changedTouches, T = k.length, E, H;
    for (E = 0; E < T; ++E)
      (H = o[k[E].identifier]) && (Xr(m), H("drag", m, k[E]));
  }
  function g(m) {
    var k = m.changedTouches, T = k.length, E, H;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), E = 0; E < T; ++E)
      (H = o[k[E].identifier]) && (Na(m), H("end", m, k[E]));
  }
  function _(m, k, T, E, H, O) {
    var L = i.copy(), q = yn(O || T, k), D, R, S;
    if ((S = n.call(m, new ts("beforestart", {
      sourceEvent: T,
      target: v,
      identifier: H,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), E)) != null)
      return D = S.x - q[0] || 0, R = S.y - q[1] || 0, function C(M, N, P) {
        var V = q, I;
        switch (M) {
          case "start":
            o[H] = C, I = a++;
            break;
          case "end":
            delete o[H], --a;
          // falls through
          case "drag":
            q = yn(P || N, k), I = a;
            break;
        }
        L.call(
          M,
          m,
          new ts(M, {
            sourceEvent: N,
            subject: S,
            target: v,
            identifier: H,
            active: I,
            x: q[0] + D,
            y: q[1] + R,
            dx: q[0] - V[0],
            dy: q[1] - V[1],
            dispatch: L
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
var Ro = 0.7, Li = 1 / Ro, Yr = "\\s*([+-]?\\d+)\\s*", Io = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gp = /^#([0-9a-f]{3,8})$/, Up = new RegExp(`^rgb\\(${Yr},${Yr},${Yr}\\)$`), Jp = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), Qp = new RegExp(`^rgba\\(${Yr},${Yr},${Yr},${Io}\\)$`), eg = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Io}\\)$`), tg = new RegExp(`^hsl\\(${Io},${Vn},${Vn}\\)$`), ng = new RegExp(`^hsla\\(${Io},${Vn},${Vn},${Io}\\)$`), Cl = {
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
  formatHex8: rg,
  formatHsl: og,
  formatRgb: kl,
  toString: kl
});
function _l() {
  return this.rgb().formatHex();
}
function rg() {
  return this.rgb().formatHex8();
}
function og() {
  return yc(this).formatHsl();
}
function kl() {
  return this.rgb().formatRgb();
}
function qo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gp.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? El(t) : n === 3 ? new Gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Up.exec(e)) ? new Gt(t[1], t[2], t[3], 1) : (t = Jp.exec(e)) ? new Gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qp.exec(e)) ? pi(t[1], t[2], t[3], t[4]) : (t = eg.exec(e)) ? pi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = tg.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, 1) : (t = ng.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, t[4]) : Cl.hasOwnProperty(e) ? El(Cl[e]) : e === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function El(e) {
  return new Gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Gt(e, t, n, r);
}
function ig(e) {
  return e instanceof Jo || (e = qo(e)), e ? (e = e.rgb(), new Gt(e.r, e.g, e.b, e.opacity)) : new Gt();
}
function ns(e, t, n, r) {
  return arguments.length === 1 ? ig(e) : new Gt(e, t, n, r ?? 1);
}
function Gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
As(Gt, ns, mc(Jo, {
  brighter(e) {
    return e = e == null ? Li : Math.pow(Li, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Gt(Er(this.r), Er(this.g), Er(this.b), Ai(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sl,
  // Deprecated! Use color.formatHex.
  formatHex: Sl,
  formatHex8: ag,
  formatRgb: Ml,
  toString: Ml
}));
function Sl() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function ag() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ml() {
  const e = Ai(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Er(this.r)}, ${Er(this.g)}, ${Er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ai(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = Er(e), (e < 16 ? "0" : "") + e.toString(16);
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
function sg(e, t, n, r) {
  return arguments.length === 1 ? yc(e) : new bn(e, t, n, r ?? 1);
}
function bn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
As(bn, sg, mc(Jo, {
  brighter(e) {
    return e = e == null ? Li : Math.pow(Li, e), new bn(this.h, this.s, this.l * e, this.opacity);
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
    return new bn(Tl(this.h), gi(this.s), gi(this.l), Ai(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ai(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tl(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ha(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wc = (e) => () => e;
function lg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ug(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function cg(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? ug(t, n, e) : wc(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? lg(e, n) : wc(isNaN(e) ? t : e);
}
const Vl = function e(t) {
  var n = cg(t);
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
var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, za = new RegExp(rs.source, "g");
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vg(e, t) {
  var n = rs.lastIndex = za.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = rs.exec(e)) && (o = za.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = za.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fg(l[0].x) : dg(t) : (t = l.length, function(c) {
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
var hi;
function pg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xc : $c(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gg(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? xc : (e = e.matrix, $c(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Cc(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, u, d, v, p, h) {
    if (c !== d || u !== v) {
      var x = p.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: ir(c, d) }, { i: x - 2, x: ir(u, v) });
    } else (d || v) && p.push("translate(" + d + t + v + n);
  }
  function a(c, u, d, v) {
    c !== u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(c, u) })) : u && d.push(o(d) + "rotate(" + u + r);
  }
  function s(c, u, d, v) {
    c !== u ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(c, u) }) : u && d.push(o(d) + "skewX(" + u + r);
  }
  function l(c, u, d, v, p, h) {
    if (c !== d || u !== v) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: ir(c, d) }, { i: x - 2, x: ir(u, v) });
    } else (d !== 1 || v !== 1) && p.push(o(p) + "scale(" + d + "," + v + ")");
  }
  return function(c, u) {
    var d = [], v = [];
    return c = e(c), u = e(u), i(c.translateX, c.translateY, u.translateX, u.translateY, d, v), a(c.rotate, u.rotate, d, v), s(c.skewX, u.skewX, d, v), l(c.scaleX, c.scaleY, u.scaleX, u.scaleY, d, v), c = u = null, function(p) {
      for (var h = -1, x = v.length, b; ++h < x; ) d[(b = v[h]).i] = b.x(p);
      return d.join("");
    };
  };
}
var hg = Cc(pg, "px, ", "px)", "deg)"), mg = Cc(gg, ", ", ")", ")"), yg = 1e-12;
function Nl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const xg = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], c = i[2], u = a[0], d = a[1], v = a[2], p = u - s, h = d - l, x = p * p + h * h, b, $;
    if (x < yg)
      $ = Math.log(v / c) / t, b = function(E) {
        return [
          s + E * p,
          l + E * h,
          c * Math.exp(t * E * $)
        ];
      };
    else {
      var g = Math.sqrt(x), _ = (v * v - c * c + r * x) / (2 * c * n * g), m = (v * v - c * c - r * x) / (2 * v * n * g), k = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(m * m + 1) - m);
      $ = (T - k) / t, b = function(E) {
        var H = E * $, O = Nl(k), L = c / (n * g) * (O * bg(t * H + k) - wg(k));
        return [
          s + L * p,
          l + L * h,
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
var no = 0, So = 0, _o = 0, _c = 1e3, Ri, Mo, Ii = 0, Tr = 0, pa = 0, Zo = typeof performance == "object" && performance.now ? performance : Date, kc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Rs() {
  return Tr || (kc($g), Tr = Zo.now() + pa);
}
function $g() {
  Tr = 0;
}
function qi() {
  this._call = this._time = this._next = null;
}
qi.prototype = Ec.prototype = {
  constructor: qi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Rs() : +n) + (t == null ? 0 : +t), !this._next && Mo !== this && (Mo ? Mo._next = this : Ri = this, Mo = this), this._call = e, this._time = n, os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, os());
  }
};
function Ec(e, t, n) {
  var r = new qi();
  return r.restart(e, t, n), r;
}
function Cg() {
  Rs(), ++no;
  for (var e = Ri, t; e; )
    (t = Tr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function Hl() {
  Tr = (Ii = Zo.now()) + pa, no = So = 0;
  try {
    Cg();
  } finally {
    no = 0, kg(), Tr = 0;
  }
}
function _g() {
  var e = Zo.now(), t = e - Ii;
  t > _c && (pa -= t, Ii = e);
}
function kg() {
  for (var e, t = Ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ri = n);
  Mo = e, os(r);
}
function os(e) {
  if (!no) {
    So && (So = clearTimeout(So));
    var t = e - Tr;
    t > 24 ? (e < 1 / 0 && (So = setTimeout(Hl, e - Zo.now() - pa)), _o && (_o = clearInterval(_o))) : (_o || (Ii = Zo.now(), _o = setInterval(_g, _c)), no = 1, kc(Hl));
  }
}
function zl(e, t, n) {
  var r = new qi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Eg = fa("start", "end", "cancel", "interrupt"), Sg = [], Sc = 0, Dl = 1, is = 2, Ci = 3, Ll = 4, as = 5, _i = 6;
function ga(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Mg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Eg,
    tween: Sg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Sc
  });
}
function Is(e, t) {
  var n = Sn(e, t);
  if (n.state > Sc) throw new Error("too late; already scheduled");
  return n;
}
function In(e, t) {
  var n = Sn(e, t);
  if (n.state > Ci) throw new Error("too late; already running");
  return n;
}
function Sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Mg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ec(i, 0, n.time);
  function i(c) {
    n.state = Dl, n.timer.restart(a, n.delay, n.time), n.delay <= c && a(c - n.delay);
  }
  function a(c) {
    var u, d, v, p;
    if (n.state !== Dl) return l();
    for (u in r)
      if (p = r[u], p.name === n.name) {
        if (p.state === Ci) return zl(a);
        p.state === Ll ? (p.state = _i, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[u]) : +u < t && (p.state = _i, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[u]);
      }
    if (zl(function() {
      n.state === Ci && (n.state = Ll, n.timer.restart(s, n.delay, n.time), s(c));
    }), n.state = is, n.on.call("start", e, e.__data__, n.index, n.group), n.state === is) {
      for (n.state = Ci, o = new Array(v = n.tween.length), u = 0, d = -1; u < v; ++u)
        (p = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = p);
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
function Pg(e) {
  return this.each(function() {
    ki(this, e);
  });
}
function Tg(e, t) {
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
function Vg(e, t, n) {
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
function Og(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Tg : Vg)(n, e, t));
}
function qs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = In(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Sn(o, r).value[t];
  };
}
function Mc(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof qo ? Vl : (n = qo(t)) ? (t = n, Vl) : vg)(e, t);
}
function Ng(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function zg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Dg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Lg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ag(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Rg(e, t) {
  var n = va(e), r = n === "transform" ? mg : Mc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ag : Lg)(n, r, qs(this, "attr." + e, t)) : t == null ? (n.local ? Hg : Ng)(n) : (n.local ? Dg : zg)(n, r, t));
}
function Ig(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function qg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Zg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && qg(e, i)), n;
  }
  return o._value = t, o;
}
function Bg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ig(e, i)), n;
  }
  return o._value = t, o;
}
function jg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = va(e);
  return this.tween(n, (r.local ? Zg : Bg)(r, t));
}
function Xg(e, t) {
  return function() {
    Is(this, e).delay = +t.apply(this, arguments);
  };
}
function Yg(e, t) {
  return t = +t, function() {
    Is(this, e).delay = t;
  };
}
function Wg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xg : Yg)(t, e)) : Sn(this.node(), t).delay;
}
function Kg(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function Fg(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function Gg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kg : Fg)(t, e)) : Sn(this.node(), t).duration;
}
function Ug(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function Jg(e) {
  var t = this._id;
  return arguments.length ? this.each(Ug(t, e)) : Sn(this.node(), t).ease;
}
function Qg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    In(this, e).ease = n;
  };
}
function eh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Qg(this._id, e));
}
function th(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, c = 0; c < a; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function nh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], c = n[s], u = l.length, d = a[s] = new Array(u), v, p = 0; p < u; ++p)
      (v = l[p] || c[p]) && (d[p] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function rh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function oh(e, t, n) {
  var r, o, i = rh(t) ? Is : In;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ih(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(oh(n, e, t));
}
function ah(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function sh() {
  return this.on("end.remove", ah(this._id));
}
function lh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, c = i[a] = new Array(l), u, d, v = 0; v < l; ++v)
      (u = s[v]) && (d = e.call(u, u.__data__, v, s)) && ("__data__" in u && (d.__data__ = u.__data__), c[v] = d, ga(c[v], t, n, v, c, Sn(u, n)));
  return new Fn(i, this._parents, t, n);
}
function uh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = oc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], c = l.length, u, d = 0; d < c; ++d)
      if (u = l[d]) {
        for (var v = e.call(u, u.__data__, d, l), p, h = Sn(u, n), x = 0, b = v.length; x < b; ++x)
          (p = v[x]) && ga(p, t, n, x, v, h);
        i.push(v), a.push(u);
      }
  return new Fn(i, a, t, n);
}
var ch = Uo.prototype.constructor;
function dh() {
  return new ch(this._groups, this._parents);
}
function fh(e, t) {
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
function vh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = to(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function ph(e, t, n) {
  var r, o, i;
  return function() {
    var a = to(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), to(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function gh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = In(this, e), c = l.on, u = l.value[i] == null ? s || (s = Pc(t)) : void 0;
    (c !== n || o !== u) && (r = (n = c).copy()).on(a, o = u), l.on = r;
  };
}
function hh(e, t, n) {
  var r = (e += "") == "transform" ? hg : Mc;
  return t == null ? this.styleTween(e, fh(e, r)).on("end.style." + e, Pc(e)) : typeof t == "function" ? this.styleTween(e, ph(e, r, qs(this, "style." + e, t))).each(gh(this._id, e)) : this.styleTween(e, vh(e, r, t), n).on("end.style." + e, null);
}
function mh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function yh(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && mh(e, a, n)), r;
  }
  return i._value = t, i;
}
function wh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, yh(e, t, n ?? ""));
}
function bh(e) {
  return function() {
    this.textContent = e;
  };
}
function xh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function $h(e) {
  return this.tween("text", typeof e == "function" ? xh(qs(this, "text", e)) : bh(e == null ? "" : e + ""));
}
function Ch(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _h(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ch(o)), t;
  }
  return r._value = e, r;
}
function kh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _h(e));
}
function Eh() {
  for (var e = this._name, t = this._id, n = Tc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, c = 0; c < s; ++c)
      if (l = a[c]) {
        var u = Sn(l, t);
        ga(l, e, n, c, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function Sh() {
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
var Mh = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Tc() {
  return ++Mh;
}
var Zn = Uo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: lh,
  selectAll: uh,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: th,
  merge: nh,
  selection: dh,
  transition: Eh,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: ih,
  attr: Rg,
  attrTween: jg,
  style: hh,
  styleTween: wh,
  text: $h,
  textTween: kh,
  remove: sh,
  tween: Og,
  delay: Wg,
  duration: Gg,
  ease: Jg,
  easeVarying: eh,
  end: Sh,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Ph(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Th = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ph
};
function Vh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Oh(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Tc(), (n = Th).time = Rs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, c = 0; c < s; ++c)
      (l = a[c]) && ga(l, e, t, c, a, n || Vh(l, t));
  return new Fn(r, this._parents, e, t);
}
Uo.prototype.interrupt = Pg;
Uo.prototype.transition = Oh;
const mi = (e) => () => e;
function Nh(e, {
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
var ha = new Bn(1, 0, 0);
Vc.prototype = Bn.prototype;
function Vc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ha;
  return e.__zoom;
}
function Da(e) {
  e.stopImmediatePropagation();
}
function ko(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Al() {
  return this.__zoom || ha;
}
function Dh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Lh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ah(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Oc() {
  var e = Hh, t = zh, n = Ah, r = Dh, o = Lh, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xg, c = fa("start", "zoom", "end"), u, d, v, p = 500, h = 150, x = 0, b = 10;
  function $(S) {
    S.property("__zoom", Al).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, C, M, N) {
    var P = S.selection ? S.selection() : S;
    P.property("__zoom", Al), S !== P ? k(S, C, M, N) : P.interrupt().each(function() {
      T(this, arguments).event(N).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, $.scaleBy = function(S, C, M, N) {
    $.scaleTo(S, function() {
      var P = this.__zoom.k, V = typeof C == "function" ? C.apply(this, arguments) : C;
      return P * V;
    }, M, N);
  }, $.scaleTo = function(S, C, M, N) {
    $.transform(S, function() {
      var P = t.apply(this, arguments), V = this.__zoom, I = M == null ? m(P) : typeof M == "function" ? M.apply(this, arguments) : M, Y = V.invert(I), W = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(_(g(V, W), I, Y), P, a);
    }, M, N);
  }, $.translateBy = function(S, C, M, N) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, N);
  }, $.translateTo = function(S, C, M, N, P) {
    $.transform(S, function() {
      var V = t.apply(this, arguments), I = this.__zoom, Y = N == null ? m(V) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(ha.translate(Y[0], Y[1]).scale(I.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), V, a);
    }, N, P);
  };
  function g(S, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === S.k ? S : new Bn(C, S.x, S.y);
  }
  function _(S, C, M) {
    var N = C[0] - M[0] * S.k, P = C[1] - M[1] * S.k;
    return N === S.x && P === S.y ? S : new Bn(S.k, N, P);
  }
  function m(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, C, M, N) {
    S.on("start.zoom", function() {
      T(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var P = this, V = arguments, I = T(P, V).event(N), Y = t.apply(P, V), W = M == null ? m(Y) : typeof M == "function" ? M.apply(P, V) : M, U = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), Q = P.__zoom, K = typeof C == "function" ? C.apply(P, V) : C, ce = l(Q.invert(W).concat(U / Q.k), K.invert(W).concat(U / K.k));
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
  function T(S, C, M) {
    return !M && S.__zooming || new E(S, C);
  }
  function E(S, C) {
    this.that = S, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, C), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, C) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var C = dn(this.that).datum();
      c.call(
        S,
        this.that,
        new Nh(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function H(S, ...C) {
    if (!e.apply(this, arguments)) return;
    var M = T(this, C).event(S), N = this.__zoom, P = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), V = yn(S);
    if (M.wheel)
      (M.mouse[0][0] !== V[0] || M.mouse[0][1] !== V[1]) && (M.mouse[1] = N.invert(M.mouse[0] = V)), clearTimeout(M.wheel);
    else {
      if (N.k === P) return;
      M.mouse = [V, N.invert(V)], ki(this), M.start();
    }
    ko(S), M.wheel = setTimeout(I, h), M.zoom("mouse", n(_(g(N, P), M.mouse[0], M.mouse[1]), M.extent, a));
    function I() {
      M.wheel = null, M.end();
    }
  }
  function O(S, ...C) {
    if (v || !e.apply(this, arguments)) return;
    var M = S.currentTarget, N = T(this, C, !0).event(S), P = dn(S.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), V = yn(S, M), I = S.clientX, Y = S.clientY;
    gc(S.view), Da(S), N.mouse = [V, this.__zoom.invert(V)], ki(this), N.start();
    function W(Q) {
      if (ko(Q), !N.moved) {
        var K = Q.clientX - I, ce = Q.clientY - Y;
        N.moved = K * K + ce * ce > x;
      }
      N.event(Q).zoom("mouse", n(_(N.that.__zoom, N.mouse[0] = yn(Q, M), N.mouse[1]), N.extent, a));
    }
    function U(Q) {
      P.on("mousemove.zoom mouseup.zoom", null), hc(Q.view, N.moved), ko(Q), N.event(Q).end();
    }
  }
  function L(S, ...C) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, N = yn(S.changedTouches ? S.changedTouches[0] : S, this), P = M.invert(N), V = M.k * (S.shiftKey ? 0.5 : 2), I = n(_(g(M, V), N, P), t.apply(this, C), a);
      ko(S), s > 0 ? dn(this).transition().duration(s).call(k, I, N, S) : dn(this).call($.transform, I, N, S);
    }
  }
  function q(S, ...C) {
    if (e.apply(this, arguments)) {
      var M = S.touches, N = M.length, P = T(this, C, S.changedTouches.length === N).event(S), V, I, Y, W;
      for (Da(S), I = 0; I < N; ++I)
        Y = M[I], W = yn(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], P.touch0 ? !P.touch1 && P.touch0[2] !== W[2] && (P.touch1 = W, P.taps = 0) : (P.touch0 = W, V = !0, P.taps = 1 + !!u);
      u && (u = clearTimeout(u)), V && (P.taps < 2 && (d = W[0], u = setTimeout(function() {
        u = null;
      }, p)), ki(this), P.start());
    }
  }
  function D(S, ...C) {
    if (this.__zooming) {
      var M = T(this, C).event(S), N = S.changedTouches, P = N.length, V, I, Y, W;
      for (ko(S), V = 0; V < P; ++V)
        I = N[V], Y = yn(I, this), M.touch0 && M.touch0[2] === I.identifier ? M.touch0[0] = Y : M.touch1 && M.touch1[2] === I.identifier && (M.touch1[0] = Y);
      if (I = M.that.__zoom, M.touch1) {
        var U = M.touch0[0], Q = M.touch0[1], K = M.touch1[0], ce = M.touch1[1], ue = (ue = K[0] - U[0]) * ue + (ue = K[1] - U[1]) * ue, ye = (ye = ce[0] - Q[0]) * ye + (ye = ce[1] - Q[1]) * ye;
        I = g(I, Math.sqrt(ue / ye)), Y = [(U[0] + K[0]) / 2, (U[1] + K[1]) / 2], W = [(Q[0] + ce[0]) / 2, (Q[1] + ce[1]) / 2];
      } else if (M.touch0) Y = M.touch0[0], W = M.touch0[1];
      else return;
      M.zoom("touch", n(_(I, Y, W), M.extent, a));
    }
  }
  function R(S, ...C) {
    if (this.__zooming) {
      var M = T(this, C).event(S), N = S.changedTouches, P = N.length, V, I;
      for (Da(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, p), V = 0; V < P; ++V)
        I = N[V], M.touch0 && M.touch0[2] === I.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === I.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (I = yn(I, this), Math.hypot(d[0] - I[0], d[1] - I[1]) < b)) {
        var Y = dn(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
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
var ze;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ze || (ze = {}));
const Rl = {
  [ze.Left]: ze.Right,
  [ze.Right]: ze.Left,
  [ze.Top]: ze.Bottom,
  [ze.Bottom]: ze.Top
};
function Rh(e, t) {
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
function Ih(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const qh = (e) => "id" in e && "source" in e && "target" in e, Zh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Bh = (e, t = { nodeOrigin: [0, 0] }) => {
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
    const p = u.width ?? c.width ?? c.initialWidth ?? null, h = u.height ?? c.height ?? c.initialHeight ?? null, x = jo(s, io(c)), b = (p ?? 0) * (h ?? 0), $ = i && x > 0;
    (!c.internals.handleBounds || $ || x >= b || c.dragging) && l.push(c);
  }
  return l;
}, ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function jh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Xh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = jh(e, a), l = ei(s), c = js(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(c, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Yh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: c } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, u = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", ro.error005());
    else {
      const p = s.measured.width, h = s.measured.height;
      p && h && (d = [
        [l, c],
        [l + p, c + h]
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
    const v = i.has(d.id), p = !v && d.parentId && a.find((h) => h.id === d.parentId);
    (v || p) && a.push(d);
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
function zc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Or(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const ql = (e, t, n) => e < t ? oo(Math.abs(e - t), 1, t) / t : e > n ? -oo(Math.abs(e - n), 1, t) / t : 0, Dc = (e, t, n = 15, r = 40) => {
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
}, Lc = (e, t) => ya(ma(us(e), us(t))), jo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => jn(e.width) && jn(e.height) && jn(e.x) && jn(e.y), jn = (e) => !isNaN(e) && isFinite(e), Wh = (e, t) => {
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
function Kh(e, t, n) {
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
function Fh(e, t, n, r, o, i) {
  const { x: a, y: s } = Xi(e, [t, n, r]), { x: l, y: c } = Xi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), u = o - l, d = i - c;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(u),
    bottom: Math.floor(d)
  };
}
const js = (e, t, n, r, o, i) => {
  const a = Kh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, c = Math.min(s, l), u = oo(c, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, p = t / 2 - d * u, h = n / 2 - v * u, x = Fh(e, p, h, u, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: p - b.left + b.right,
    y: h - b.top + b.bottom,
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
function Gh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Uh() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function La(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
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
}), Jh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Qh = ["INPUT", "SELECT", "TEXTAREA"];
function e0(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Qh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
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
    case ze.Left:
      return [t - yi(t - r, i), n];
    case ze.Right:
      return [t + yi(r - t, i), n];
    case ze.Top:
      return [t, n - yi(n - o, i)];
    case ze.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function qc({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: i = ze.Top, curvature: a = 0.25 }) {
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
  }), [d, v, p, h] = t0({
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
    p,
    h
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
  return qh(e) ? n = { ...e } : n = {
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
  [ze.Left]: { x: -1, y: 0 },
  [ze.Right]: { x: 1, y: 0 },
  [ze.Top]: { x: 0, y: -1 },
  [ze.Bottom]: { x: 0, y: 1 }
}, s0 = ({ source: e, sourcePosition: t = ze.Bottom, target: n }) => t === ze.Left || t === ze.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Yl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function l0({ source: e, sourcePosition: t = ze.Bottom, target: n, targetPosition: r = ze.Top, center: o, offset: i }) {
  const a = Xl[t], s = Xl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, c = { x: n.x + s.x * i, y: n.y + s.y * i }, u = s0({
    source: l,
    sourcePosition: t,
    target: c
  }), d = u.x !== 0 ? "x" : "y", v = u[d];
  let p = [], h, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [g, _, m, k] = Zc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? g, x = o.y ?? _;
    const T = [
      { x: h, y: l.y },
      { x: h, y: c.y }
    ], E = [
      { x: l.x, y: x },
      { x: c.x, y: x }
    ];
    a[d] === v ? p = d === "x" ? T : E : p = d === "x" ? E : T;
  } else {
    const T = [{ x: l.x, y: c.y }], E = [{ x: c.x, y: l.y }];
    if (d === "x" ? p = a.x === v ? E : T : p = a.y === v ? T : E, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const R = Math.min(i - 1, i - D);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * R : $[d] = (c[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", R = a[d] === s[D], S = l[D] > c[D], C = l[D] < c[D];
      (a[d] === 1 && (!R && S || R && C) || a[d] !== 1 && (!R && C || R && S)) && (p = d === "x" ? T : E);
    }
    const H = { x: l.x + b.x, y: l.y + b.y }, O = { x: c.x + $.x, y: c.y + $.y }, L = Math.max(Math.abs(H.x - p[0].x), Math.abs(O.x - p[0].x)), q = Math.max(Math.abs(H.y - p[0].y), Math.abs(O.y - p[0].y));
    L >= q ? (h = (H.x + O.x) / 2, x = p[0].y) : (h = p[0].x, x = (H.y + O.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...p,
    { x: c.x + $.x, y: c.y + $.y },
    n
  ], h, x, m, k];
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
function Wi({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: i = ze.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: c = 20 }) {
  const [u, d, v, p, h] = l0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: c
  });
  return [u.reduce((x, b, $) => {
    let g = "";
    return $ > 0 && $ < u.length - 1 ? g = u0(u[$ - 1], b, u[$ + 1], a) : g = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += g, x;
  }, ""), d, v, p, h];
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
  const l = (a == null ? void 0 : a.position) || ze.Bottom, c = (s == null ? void 0 : s.position) || ze.Top, u = Xo(n, a, l), d = Xo(r, s, c);
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
function Xo(e, t, n = ze.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ze.Top:
      return { x: o + a / 2, y: i };
    case ze.Right:
      return { x: o + a, y: i + s / 2 };
    case ze.Bottom:
      return { x: o + a / 2, y: i + s };
    case ze.Left:
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
    case ze.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case ze.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case ze.Left:
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
function p0(e, t, n) {
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
      const v = Qo(u, a.nodeOrigin), p = ao(u.extent) ? u.extent : a.nodeExtent, h = Or(v, p, yr(u));
      d = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: h,
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
function g0(e, t) {
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
  g0(e, n);
  const c = o ? 1e3 : 0, { x: u, y: d, z: v } = h0(e, l, i, a, c), { positionAbsolute: p } = e.internals, h = u !== p.x || d !== p.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: u, y: d } : p,
      z: v
    }
  });
}
function jc(e, t) {
  return (jn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function h0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Qo(e, n), c = ao(e.extent) ? Or(l, e.extent, s) : l;
  let u = Or({ x: i + c.x, y: a + c.y }, r, s);
  e.extent === "parent" && (u = zc(u, s, t));
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
    const c = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? io(l), u = Lc(c, s.rect);
    a.set(s.parentId, { expandedRect: u, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, c) => {
    var u;
    const d = l.internals.positionAbsolute, v = yr(l), p = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), g = (b - v.width) * p[0], _ = ($ - v.height) * p[1];
    (h > 0 || x > 0 || g || _) && (i.push({
      id: c,
      type: "position",
      position: {
        x: l.position.x - h + g,
        y: l.position.y - x + _
      }
    }), (u = n.get(c)) == null || u.forEach((m) => {
      e.some((k) => k.id === m.id) || i.push({
        id: m.id,
        type: "position",
        position: {
          x: m.position.x + h,
          y: m.position.y + x
        }
      });
    })), (v.width < s.width || v.height < s.height || h || x) && i.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (h ? p[0] * h - g : 0),
        height: $ + (x ? p[1] * x - _ : 0)
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
    const p = t.get(v.id);
    if (!p)
      continue;
    if (p.hidden) {
      t.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const h = Rc(v.nodeElement), x = p.measured.width !== h.width || p.measured.height !== h.height;
    if (h.width && h.height && (x || !p.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = ao(p.extent) ? p.extent : i;
      let { positionAbsolute: g } = p.internals;
      p.parentId && p.extent === "parent" ? g = zc(g, h, t.get(p.parentId)) : $ && (g = Or(g, $, h));
      const _ = {
        ...p,
        measured: h,
        internals: {
          ...p.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Bl("source", v.nodeElement, b, u, p.id),
            target: Bl("target", v.nodeElement, b, u, p.id)
          }
        }
      };
      t.set(p.id, _), p.parentId && Ws(_, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: p.id,
        type: "dimensions",
        dimensions: h
      }), p.expandParent && p.parentId && d.push({
        id: p.id,
        parentId: p.parentId,
        rect: io(_, o)
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
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, u = null, d = !1, v = null, p = !1;
  function h({ noDragClassName: b, handleSelector: $, domNode: g, isSelectable: _, nodeId: m, nodeClickDistance: k = 0 }) {
    v = dn(g);
    function T({ x: L, y: q }, D) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: C, snapToGrid: M, nodeOrigin: N, onNodeDrag: P, onSelectionDrag: V, onError: I, updateNodePositions: Y } = t();
      i = { x: L, y: q };
      let W = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const Q = ei(s);
        U = us(Q);
      }
      for (const [Q, K] of s) {
        if (!R.has(Q))
          continue;
        let ce = { x: L - K.distance.x, y: q - K.distance.y };
        M && (ce = Bs(ce, C));
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
        const { position: ye, positionAbsolute: se } = Yh({
          nodeId: Q,
          nextPosition: ce,
          nodeLookup: R,
          nodeExtent: ue,
          nodeOrigin: N,
          onError: I
        });
        W = W || K.position.x !== ye.x || K.position.y !== ye.y, K.position = ye, K.internals.positionAbsolute = se;
      }
      if (W && (Y(s, !0), D && (r || P || !m && V))) {
        const [Q, K] = Aa({
          nodeId: m,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(D, s, Q, K), P == null || P(D, Q, K), m || V == null || V(D, K);
      }
    }
    async function E() {
      if (!u)
        return;
      const { transform: L, panBy: q, autoPanSpeed: D, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, C] = Dc(c, u, D);
      (S !== 0 || C !== 0) && (i.x = (i.x ?? 0) - S / L[2], i.y = (i.y ?? 0) - C / L[2], await q({ x: S, y: C }) && T(i, null)), a = requestAnimationFrame(E);
    }
    function H(L) {
      var q;
      const { nodeLookup: D, multiSelectionActive: R, nodesDraggable: S, transform: C, snapGrid: M, snapToGrid: N, selectNodesOnDrag: P, onNodeDragStart: V, onSelectionDragStart: I, unselectNodesAndEdges: Y } = t();
      d = !0, (!P || !_) && !R && m && ((q = D.get(m)) != null && q.selected || Y()), _ && P && m && (e == null || e(m));
      const W = La(L.sourceEvent, { transform: C, snapGrid: M, snapToGrid: N, containerBounds: u });
      if (i = W, s = x0(D, S, W, m), s.size > 0 && (n || V || !m && I)) {
        const [U, Q] = Aa({
          nodeId: m,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(L.sourceEvent, s, U, Q), V == null || V(L.sourceEvent, U, Q), m || I == null || I(L.sourceEvent, Q);
      }
    }
    const O = Fp().clickDistance(k).on("start", (L) => {
      const { domNode: q, nodeDragThreshold: D, transform: R, snapGrid: S, snapToGrid: C } = t();
      u = (q == null ? void 0 : q.getBoundingClientRect()) || null, p = !1, D === 0 && H(L), i = La(L.sourceEvent, { transform: R, snapGrid: S, snapToGrid: C, containerBounds: u }), c = Wn(L.sourceEvent, u);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: q, transform: D, snapGrid: R, snapToGrid: S, nodeDragThreshold: C, nodeLookup: M } = t(), N = La(L.sourceEvent, { transform: D, snapGrid: R, snapToGrid: S, containerBounds: u });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      m && !M.has(m)) && (p = !0), !p) {
        if (!l && q && d && (l = !0, E()), !d) {
          const P = N.xSnapped - (i.x ?? 0), V = N.ySnapped - (i.y ?? 0);
          Math.sqrt(P * P + V * V) > C && H(L);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && d && (c = Wn(L.sourceEvent, u), T(N, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || p) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: D, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (D(s, !1), o || R || !m && S) {
          const [C, M] = Aa({
            nodeId: m,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(L.sourceEvent, s, C, M), R == null || R(L.sourceEvent, C, M), m || S == null || S(L.sourceEvent, M);
        }
      }
    }).filter((L) => {
      const q = L.target;
      return !L.button && (!b || !Ul(q, `.${b}`, g)) && (!$ || Ul(q, $, g));
    });
    v.call(O);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
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
      const { x: v, y: p } = Xo(c, d, d.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(p - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: v, y: p }], s = h) : h === s && a.push({ ...d, x: v, y: p }));
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
function E0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Fc = () => !0;
function S0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: c, autoPanOnConnect: u, flowId: d, panBy: v, cancelConnection: p, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Fc, onReconnectEnd: g, updateConnection: _, getTransform: m, getFromHandle: k, autoPanSpeed: T }) {
  const E = Jh(e.target);
  let H = 0, O;
  const { x: L, y: q } = Wn(e), D = E == null ? void 0 : E.elementFromPoint(L, q), R = Kc(i, D), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !R)
    return;
  const C = Wc(o, R, r, l, t);
  if (!C)
    return;
  let M = Wn(e, S), N = !1, P = null, V = !1, I = null;
  function Y() {
    if (!u || !S)
      return;
    const [ye, se] = Dc(M, S, T);
    v({ x: ye, y: se }), H = requestAnimationFrame(Y);
  }
  const W = {
    ...C,
    nodeId: o,
    type: R,
    position: C.position
  }, U = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Xo(U, W, ze.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: U,
    to: M,
    toHandle: null,
    toPosition: Rl[W.position],
    toNode: null
  };
  _(Q);
  let K = Q;
  h == null || h(e, { nodeId: o, handleId: r, handleType: R });
  function ce(ye) {
    if (!k() || !W) {
      ue(ye);
      return;
    }
    const se = m();
    M = Wn(ye, S), O = k0(ti(M, se, !1, [1, 1]), n, l, W), N || (Y(), N = !0);
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
    I = _e.handleDomNode, P = _e.connection, V = E0(!!O, _e.isValid);
    const xe = {
      // from stays the same
      ...K,
      isValid: V,
      to: O && V ? Xi({ x: O.x, y: O.y }, se) : M,
      toHandle: _e.toHandle,
      toPosition: V && _e.toHandle ? _e.toHandle.position : Rl[W.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    V && O && K.toHandle && xe.toHandle && K.toHandle.type === xe.toHandle.type && K.toHandle.nodeId === xe.toHandle.nodeId && K.toHandle.id === xe.toHandle.id && K.to.x === xe.to.x && K.to.y === xe.to.y || (_(xe), K = xe);
  }
  function ue(ye) {
    (O || I) && P && V && (x == null || x(P));
    const { inProgress: se, ..._e } = K, xe = {
      ..._e,
      toPosition: K.toHandle ? K.toPosition : null
    };
    b == null || b(ye, xe), i && (g == null || g(ye, xe)), p(), cancelAnimationFrame(H), N = !1, V = !1, P = null, I = null, E.removeEventListener("mousemove", ce), E.removeEventListener("mouseup", ue), E.removeEventListener("touchmove", ce), E.removeEventListener("touchend", ue);
  }
  E.addEventListener("mousemove", ce), E.addEventListener("mouseup", ue), E.addEventListener("touchmove", ce), E.addEventListener("touchend", ue);
}
function Gc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: c = Fc, nodeLookup: u }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: h } = Wn(e), x = a.elementFromPoint(p, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const g = Kc(void 0, b), _ = b.getAttribute("data-nodeid"), m = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), T = b.classList.contains("connectableend");
    if (!_ || !g)
      return $;
    const E = {
      source: d ? _ : r,
      sourceHandle: d ? m : o,
      target: d ? r : _,
      targetHandle: d ? o : m
    };
    $.connection = E;
    const H = k && T && (n === Vr.Strict ? d && g === "source" || !d && g === "target" : _ !== r || m !== o);
    $.isValid = H && c(E), $.toHandle = Wc(_, g, m, u, n, !1);
  }
  return $;
}
const M0 = {
  onPointerDown: S0,
  isValid: Gc
};
function P0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = dn(e);
  function i({ translateExtent: s, width: l, height: c, zoomStep: u = 10, pannable: d = !0, zoomable: v = !0, inversePan: p = !1 }) {
    const h = (_) => {
      const m = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * u, T = m[2] * Math.pow(2, k);
      t.scaleTo(T);
    };
    let x = [0, 0];
    const b = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (x = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, $ = (_) => {
      const m = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const E = r() * Math.max(m[2], Math.log(m[2])) * (p ? -1 : 1), H = {
        x: m[0] - T[0] * E,
        y: m[1] - T[1] * E
      }, O = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: m[2]
      }, O, s);
    }, g = Oc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? h : null);
    o.call(g, {});
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
}), Ra = ({ x: e, y: t, zoom: n }) => ha.translate(e, t).scale(n), Br = (e, t) => e.target.closest(`.${t}`), Uc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ia = (e, t = 0, n = () => {
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
      const b = yn(u), $ = Jc(u), g = d * Math.pow(2, $);
      r.scaleTo(n, g, b, u);
      return;
    }
    const v = u.deltaMode === 1 ? 20 : 1;
    let p = o === cr.Vertical ? 0 : u.deltaX * v, h = o === cr.Horizontal ? 0 : u.deltaY * v;
    !Yi() && u.shiftKey && o !== cr.Vertical && (p = u.deltaY * v, h = 0), r.translateBy(
      n,
      -(p / d) * i,
      -(h / d) * i,
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
function z0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
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
function D0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: c }) {
  return (u) => {
    var d;
    const v = e || t, p = n && u.ctrlKey;
    if (u.button === 1 && u.type === "mousedown" && (Br(u, `${c}-flow__node`) || Br(u, `${c}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Br(u, s) && u.type === "wheel" || Br(u, l) && (u.type !== "wheel" || o && u.type === "wheel" && !e) || !n && u.ctrlKey && u.type === "wheel")
      return !1;
    if (!n && u.type === "touchstart" && ((d = u.touches) == null ? void 0 : d.length) > 1)
      return u.preventDefault(), !1;
    if (!v && !o && !p && u.type === "wheel" || !r && (u.type === "mousedown" || u.type === "touchstart") || Array.isArray(r) && !r.includes(u.button) && u.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(u.button) || !u.button || u.button <= 1;
    return (!u.ctrlKey || u.type === "wheel") && h;
  };
}
function L0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: c }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), v = Oc().clickDistance(!jn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), p = dn(e).call(v);
  _({
    x: i.x,
    y: i.y,
    zoom: oo(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = p.on("wheel.zoom"), x = p.on("dblclick.zoom");
  v.wheelDelta(Jc);
  function b(D, R) {
    return p ? new Promise((S) => {
      v == null || v.transform(Ia(p, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: D, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: C, panOnScroll: M, panOnDrag: N, panOnScrollMode: P, panOnScrollSpeed: V, preventScrolling: I, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: Q, lib: K, onTransformChange: ce }) {
    C && !u.isZoomingOrPanning && g();
    const ue = M && !Q && !C ? V0({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: p,
      d3Zoom: v,
      panOnScrollMode: P,
      panOnScrollSpeed: V,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : O0({
      noWheelClassName: D,
      preventScrolling: I,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", ue, { passive: !1 }), !C) {
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
      const xe = z0({
        zoomPanValues: u,
        panOnDrag: N,
        panOnScroll: M,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      v.on("end", xe);
    }
    const ye = D0({
      zoomActivationKeyPressed: Q,
      panOnDrag: N,
      zoomOnScroll: W,
      panOnScroll: M,
      zoomOnDoubleClick: U,
      zoomOnPinch: Y,
      userSelectionActive: C,
      noPanClassName: R,
      noWheelClassName: D,
      lib: K
    });
    v.filter(ye), U ? p.on("dblclick.zoom", x) : p.on("dblclick.zoom", null);
  }
  function g() {
    v.on("zoom", null);
  }
  async function _(D, R, S) {
    const C = Ra(D), M = v == null ? void 0 : v.constrain()(C, R, S);
    return M && await b(M), new Promise((N) => N(M));
  }
  async function m(D, R) {
    const S = Ra(D);
    return await b(S, R), new Promise((C) => C(S));
  }
  function k(D) {
    if (p) {
      const R = Ra(D), S = p.property("__zoom");
      (S.k !== D.zoom || S.x !== D.x || S.y !== D.y) && (v == null || v.transform(p, R, null, { sync: !0 }));
    }
  }
  function T() {
    const D = p ? Vc(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function E(D, R) {
    return p ? new Promise((S) => {
      v == null || v.scaleTo(Ia(p, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D, R) {
    return p ? new Promise((S) => {
      v == null || v.scaleBy(Ia(p, R == null ? void 0 : R.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function O(D) {
    v == null || v.scaleExtent(D);
  }
  function L(D) {
    v == null || v.translateExtent(D);
  }
  function q(D) {
    const R = !jn(D) || D < 0 ? 0 : D;
    v == null || v.clickDistance(R);
  }
  return {
    update: $,
    destroy: g,
    setViewport: m,
    setViewportConstrained: _,
    getViewport: T,
    scaleTo: E,
    scaleBy: H,
    setScaleExtent: O,
    setTranslateExtent: L,
    syncViewport: k,
    setClickDistance: q
  };
}
var Jl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Jl || (Jl = {}));
var A0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function pr(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(U, "$connectable", n), i = () => oe(ye, "$connectionRadius", n), a = () => oe(ce, "$domNode", n), s = () => oe(ue, "$nodeLookup", n), l = () => oe(K, "$connectionMode", n), c = () => oe(xe, "$lib", n), u = () => oe(Ae, "$autoPanOnConnect", n), d = () => oe(Ve, "$flowId", n), v = () => oe(_e, "$isValidConnectionStore", n), p = () => oe(le, "$onedgecreate", n), h = () => oe(pe, "$onConnectAction", n), x = () => oe(ge, "$onConnectStartAction", n), b = () => oe(fe, "$onConnectEndAction", n), $ = () => oe(se, "$viewport", n), g = () => oe(ct, "$connection", n), _ = () => oe(Ke, "$edges", n), m = () => oe(qe, "$connectionLookup", n), k = /* @__PURE__ */ ae(), T = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae(), O = /* @__PURE__ */ ae(), L = /* @__PURE__ */ ae(), q = /* @__PURE__ */ ae(), D = /* @__PURE__ */ ae();
  let R = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), C = w(t, "position", 28, () => ze.Top), M = w(t, "style", 12, void 0), N = w(t, "isValidConnection", 12, void 0), P = w(t, "onconnect", 12, void 0), V = w(t, "ondisconnect", 12, void 0), I = w(t, "isConnectable", 12, void 0), Y = w(t, "class", 12, void 0);
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
    onconnect: pe,
    onconnectstart: ge,
    onconnectend: fe,
    flowId: Ve,
    connection: ct
  } = Q;
  function vt(Le) {
    const st = Ic(Le);
    (st && Le.button === 0 || !st) && M0.onPointerDown(Le, {
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
        const lt = p() ? p()(Be) : Be;
        lt && (Oe(lt), (Ze = h()) == null || Ze(Be));
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
      getFromHandle: () => g().fromHandle
    });
  }
  let te = /* @__PURE__ */ ae(null), Fe = /* @__PURE__ */ ae();
  be(() => re(S()), () => {
    ee(k, S() === "target");
  }), be(
    () => (re(I()), o()),
    () => {
      ee(T, I() !== void 0 ? I() : o());
    }
  ), be(() => re(R()), () => {
    ee(E, R() || null);
  }), be(
    () => (re(P()), re(V()), _(), m(), re(S()), re(R())),
    () => {
      (P() || V()) && (_(), ee(Fe, m().get(`${W}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), be(
    () => (f(te), f(Fe), re(V()), re(P())),
    () => {
      if (f(te) && !Rh(f(Fe), f(te))) {
        const Le = f(Fe) ?? /* @__PURE__ */ new Map();
        Il(f(te), Le, V()), Il(Le, f(te), P());
      }
      ee(te, f(Fe) ?? /* @__PURE__ */ new Map());
    }
  ), be(() => g(), () => {
    ee(H, !!g().fromHandle);
  }), be(
    () => (g(), re(S()), f(E)),
    () => {
      var Le, st, Be;
      ee(O, ((Le = g().fromHandle) == null ? void 0 : Le.nodeId) === W && ((st = g().fromHandle) == null ? void 0 : st.type) === S() && ((Be = g().fromHandle) == null ? void 0 : Be.id) === f(E));
    }
  ), be(
    () => (g(), re(S()), f(E)),
    () => {
      var Le, st, Be;
      ee(L, ((Le = g().toHandle) == null ? void 0 : Le.nodeId) === W && ((st = g().toHandle) == null ? void 0 : st.type) === S() && ((Be = g().toHandle) == null ? void 0 : Be.id) === f(E));
    }
  ), be(
    () => (l(), g(), re(S()), f(E)),
    () => {
      var Le, st, Be;
      ee(q, l() === Vr.Strict ? ((Le = g().fromHandle) == null ? void 0 : Le.type) !== S() : W !== ((st = g().fromHandle) == null ? void 0 : st.nodeId) || f(E) !== ((Be = g().fromHandle) == null ? void 0 : Be.id));
    }
  ), be(() => (f(L), g()), () => {
    ee(D, f(L) && g().isValid);
  }), Tt(), je();
  var de = A0();
  Ee(de, "data-nodeid", W);
  let jt;
  var Xt = X(de);
  Ht(Xt, t, "default", {}), j(de), Te(
    (Le, st) => {
      Ee(de, "data-handleid", f(E)), Ee(de, "data-handlepos", C()), Ee(de, "data-id", `${d() ?? ""}-${W ?? ""}-${(R() || "") ?? ""}-${S() ?? ""}`), jt = zt(de, 1, Le, null, jt, st), $t(de, M());
    },
    [
      () => En(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${C()}`,
        "nodrag",
        "nopan",
        C(),
        Y()
      ])),
      () => ({
        valid: f(D),
        connectingto: f(L),
        connectingfrom: f(O),
        source: !f(k),
        target: f(k),
        connectablestart: f(T),
        connectableend: f(T),
        connectable: f(T),
        connectionindicator: f(T) && (!f(H) || f(q))
      })
    ],
    ke
  ), dt("mousedown", de, vt), dt("touchstart", de, vt), A(e, de);
  var ln = me({
    get id() {
      return R();
    },
    set id(Le) {
      R(Le), y();
    },
    get type() {
      return S();
    },
    set type(Le) {
      S(Le), y();
    },
    get position() {
      return C();
    },
    set position(Le) {
      C(Le), y();
    },
    get style() {
      return M();
    },
    set style(Le) {
      M(Le), y();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Le) {
      N(Le), y();
    },
    get onconnect() {
      return P();
    },
    set onconnect(Le) {
      P(Le), y();
    },
    get ondisconnect() {
      return V();
    },
    set ondisconnect(Le) {
      V(Le), y();
    },
    get isConnectable() {
      return I();
    },
    set isConnectable(Le) {
      I(Le), y();
    },
    get class() {
      return Y();
    },
    set class(Le) {
      Y(Le), y();
    }
  });
  return r(), ln;
}
ve(
  pr,
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  je();
  var a = R0(), s = Ce(a);
  const l = /* @__PURE__ */ ke(() => o() ?? ze.Top);
  pr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var c = B(s), u = B(c);
  const d = /* @__PURE__ */ ke(() => i() ?? ze.Bottom);
  return pr(u, {
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "sourcePosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  je(), Re();
  var i = I0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ ke(() => o() ?? ze.Bottom);
  return pr(s, {
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition"]), he(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  je(), Re();
  var i = q0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ ke(() => o() ?? ze.Top);
  return pr(s, {
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, []);
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
  he(t, !1);
  const [n, r] = ft(), o = () => oe(i, "$domNode", n), { domNode: i } = et();
  je();
  var a = Z0(), s = X(a);
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
  he(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = rd(), a = Mr("svelteflow__edge_id");
  return je(), nd(e, {
    children: (s, l) => {
      var c = B0();
      let u;
      var d = X(c);
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
  he(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), a = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), u = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), v = w(t, "class", 12, void 0), p = d() === void 0 ? 20 : d();
  je();
  var h = X0(), x = Ce(h), b = B(x);
  {
    var $ = (m) => {
      var k = j0();
      Ee(k, "stroke-opacity", 0), Ee(k, "stroke-width", p), Te(() => Ee(k, "d", r())), A(m, k);
    };
    $e(b, (m) => {
      p && m($);
    });
  }
  var g = B(b);
  {
    var _ = (m) => {
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
        children: (k, T) => {
          Re();
          var E = We();
          Te(() => xt(E, o())), A(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    $e(g, (m) => {
      o() && m(_);
    });
  }
  return Te(
    (m) => {
      Ee(x, "id", n()), Ee(x, "d", r()), zt(x, 0, m), Ee(x, "marker-start", l()), Ee(x, "marker-end", c()), $t(x, u());
    },
    [
      () => En(Bt(["svelte-flow__edge-path", v()]))
    ],
    ke
  ), A(e, h), me({
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), p = w(t, "sourceY", 12), h = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(qc({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
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
    set label(g) {
      a(g), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), y();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), y();
    },
    get markerStart() {
      return c();
    },
    set markerStart(g) {
      c(g), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(g) {
      u(g), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), y();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), y();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), y();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), y();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), y();
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), p = w(t, "sourceY", 12), h = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Wi({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
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
    set label(g) {
      a(g), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), y();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), y();
    },
    get markerStart() {
      return c();
    },
    set markerStart(g) {
      c(g), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(g) {
      u(g), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), y();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), y();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), y();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), y();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), y();
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), p = w(t, "sourceY", 12), h = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(h()), re(x())),
    () => {
      ((b) => (ee(r, b[0]), ee(o, b[1]), ee(i, b[2])))(cs({
        sourceX: v(),
        sourceY: p(),
        targetX: h(),
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
      return p();
    },
    set sourceY(b) {
      p(b), y();
    },
    get targetX() {
      return h();
    },
    set targetX(b) {
      h(b), y();
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
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
  ]), he(t, !1);
  const r = /* @__PURE__ */ ae(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ ae();
  let a = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), c = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), v = w(t, "sourceX", 12), p = w(t, "sourceY", 12), h = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), b = w(t, "targetY", 12), $ = w(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Wi({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
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
    set label(g) {
      a(g), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), y();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), y();
    },
    get markerStart() {
      return c();
    },
    set markerStart(g) {
      c(g), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(g) {
      u(g), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), y();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), y();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), y();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), y();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), y();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), y();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), y();
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
  const { subscribe: p, set: h, update: x } = Se([]);
  let b = e, $ = {}, g = !0;
  const _ = (E) => {
    const H = Bc(E, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return G(i) && H && G(l) && (Xh({
      nodes: t,
      width: G(c),
      height: G(u),
      panZoom: G(l),
      minZoom: G(d),
      maxZoom: G(v)
    }, G(a)).then((O) => {
      var L;
      (L = G(s)) == null || L.resolve(O), s.set(null);
    }), i.set(!1), a.set(void 0)), b = E, h(b), b;
  }, m = (E) => _(E(b)), k = (E) => {
    $ = E;
  }, T = (E) => {
    g = E.elevateNodesOnSelect ?? g;
  };
  return _(b), {
    subscribe: p,
    set: _,
    update: m,
    setDefaultOptions: k,
    setOptions: T
  };
}, G0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Se([]);
  let s = e, l = {};
  const c = (v) => {
    const p = l ? v.map((h) => ({ ...l, ...h })) : v;
    Xc(t, n, p), s = p, i(s);
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
  let p = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const T = ei(s, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    p = js(T, n, r, 0.5, 2, 0.1);
  }
  const h = Se(!1), x = Se(void 0), b = Se(null), $ = Se(null), g = Se(500), _ = Se(500), m = Se(0.5), k = Se(2);
  return {
    flowId: Se(null),
    nodes: F0(e, s, l, d, v, h, x, b, $, g, _, m, k),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(u),
    visibleNodes: un([]),
    edges: G0(t, c, u),
    visibleEdges: un([]),
    connectionLookup: un(c),
    width: g,
    height: _,
    minZoom: m,
    maxZoom: k,
    nodeOrigin: Se(d),
    nodeDragThreshold: Se(1),
    nodeExtent: Se(v),
    translateExtent: Se(Zi),
    autoPanOnNodeDrag: Se(!0),
    autoPanOnConnect: Se(!0),
    fitViewQueued: h,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Se(null),
    dragging: Se(!1),
    selectionRect: Se(null),
    selectionKeyPressed: Se(!1),
    multiselectionKeyPressed: Se(!1),
    deleteKeyPressed: Se(!1),
    panActivationKeyPressed: Se(!1),
    zoomActivationKeyPressed: Se(!1),
    selectionRectMode: Se(null),
    selectionMode: Se(Bi.Partial),
    nodeTypes: Se(ld),
    edgeTypes: Se(ud),
    viewport: Se(p),
    connectionMode: Se(Vr.Strict),
    domNode: Se(null),
    connection: un(ss),
    connectionLineType: Se(Wr.Bezier),
    connectionRadius: Se(20),
    isValidConnection: Se(() => !0),
    nodesDraggable: Se(!0),
    nodesConnectable: Se(!0),
    elementsSelectable: Se(!0),
    selectNodesOnDrag: Se(!0),
    markers: un([]),
    defaultMarkerColor: Se("#b1b1b7"),
    lib: un("svelte"),
    onlyRenderVisibleElements: Se(!1),
    onerror: Se(Wh),
    ondelete: Se(void 0),
    onedgecreate: Se(void 0),
    onconnect: Se(void 0),
    onconnectstart: Se(void 0),
    onconnectend: Se(void 0),
    onbeforedelete: Se(void 0),
    nodesInitialized: Se(!1),
    edgesInitialized: Se(!1),
    viewportInitialized: Se(!1),
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
  function l(C) {
    s.nodeTypes.set({
      ...ld,
      ...C
    });
  }
  function c(C) {
    s.edgeTypes.set({
      ...ud,
      ...C
    });
  }
  function u(C) {
    const M = G(s.edges);
    s.edges.set(a0(C, M));
  }
  const d = (C, M = !1) => {
    var N;
    const P = G(s.nodeLookup);
    for (const [V, I] of C) {
      const Y = (N = P.get(V)) == null ? void 0 : N.internals.userNode;
      Y && (Y.position = I.position, Y.dragging = M);
    }
    s.nodes.update((V) => V);
  };
  function v(C) {
    var M, N, P;
    const V = G(s.nodeLookup), I = G(s.parentLookup), { changes: Y, updatedInternals: W } = y0(C, V, G(s.parentLookup), G(s.domNode), G(s.nodeOrigin));
    if (W) {
      p0(V, I, { nodeOrigin: i, nodeExtent: a });
      for (const U of Y) {
        const Q = (M = V.get(U.id)) == null ? void 0 : M.internals.userNode;
        if (Q)
          switch (U.type) {
            case "dimensions": {
              const K = { ...Q.measured, ...U.dimensions };
              U.setAttributes && (Q.width = ((N = U.dimensions) == null ? void 0 : N.width) ?? Q.width, Q.height = ((P = U.dimensions) == null ? void 0 : P.height) ?? Q.height), Q.measured = K;
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
  function p(C) {
    const M = G(s.fitViewResolver) ?? Uh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(C), s.fitViewResolver.set(M), s.nodes.set(G(s.nodes)), M.promise;
  }
  function h(C, M) {
    const N = G(s.panZoom);
    return N ? N.scaleBy(C, M) : Promise.resolve(!1);
  }
  function x(C) {
    return h(1.2, C);
  }
  function b(C) {
    return h(1 / 1.2, C);
  }
  function $(C) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([C, G(s.maxZoom)]), s.minZoom.set(C));
  }
  function g(C) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([G(s.minZoom), C]), s.maxZoom.set(C));
  }
  function _(C) {
    const M = G(s.panZoom);
    M && (M.setTranslateExtent(C), s.translateExtent.set(C));
  }
  function m(C) {
    let M = !1;
    return C.forEach((N) => {
      N.selected && (N.selected = !1, M = !0);
    }), M;
  }
  function k(C) {
    var M;
    (M = G(s.panZoom)) == null || M.setClickDistance(C);
  }
  function T(C) {
    m((C == null ? void 0 : C.nodes) || G(s.nodes)) && s.nodes.set(G(s.nodes)), m((C == null ? void 0 : C.edges) || G(s.edges)) && s.edges.set(G(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (C) => {
    var M;
    if (C) {
      const N = G(s.nodes), P = G(s.edges), V = N.filter((U) => U.selected), I = P.filter((U) => U.selected), { nodes: Y, edges: W } = await Hc({
        nodesToRemove: V,
        edgesToRemove: I,
        nodes: N,
        edges: P,
        onBeforeDelete: G(s.onbeforedelete)
      });
      (Y.length || W.length) && (s.nodes.update((U) => U.filter((Q) => !Y.some((K) => K.id === Q.id))), s.edges.update((U) => U.filter((Q) => !W.some((K) => K.id === Q.id))), (M = G(s.ondelete)) == null || M({
        nodes: Y,
        edges: W
      }));
    }
  });
  function E(C) {
    const M = G(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((P) => {
      const V = C.includes(P.id), I = M && P.selected || V;
      return P.selected = I, P;
    })), M || s.edges.update((N) => N.map((P) => (P.selected = !1, P)));
  }
  function H(C) {
    const M = G(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((P) => {
      const V = C.includes(P.id), I = M && P.selected || V;
      return P.selected = I, P;
    })), M || s.nodes.update((N) => N.map((P) => (P.selected = !1, P)));
  }
  function O(C) {
    var M;
    const N = (M = G(s.nodes)) == null ? void 0 : M.find((P) => P.id === C);
    if (!N) {
      console.warn("012", ro.error012(C));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && G(s.multiselectionKeyPressed) && T({ nodes: [N], edges: [] }) : E([C]);
  }
  function L(C) {
    const M = G(s.viewport);
    return w0({
      delta: C,
      panZoom: G(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: G(s.translateExtent),
      width: G(s.width),
      height: G(s.height)
    });
  }
  const q = Se(ss), D = (C) => {
    q.set({ ...C });
  };
  function R() {
    q.set(ss);
  }
  function S() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), T(), R();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: J0(s),
    visibleNodes: Q0(s),
    connection: ur([q, s.viewport], ([C, M]) => C.inProgress ? {
      ...C,
      to: ti(C.to, [M.x, M.y, M.zoom])
    } : { ...C }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([C, M, N]) => d0(C, { defaultColor: M, id: N })),
    initialized: (() => {
      let C = !1;
      const M = G(s.nodes).length, N = G(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([P, V, I]) => C || (M === 0 ? C = I : N === 0 ? C = I && P : C = I && P && V, C));
    })(),
    // actions
    syncNodeStores: (C) => Y0(s.nodes, C),
    syncEdgeStores: (C) => W0(s.edges, C),
    syncViewport: (C) => K0(s.panZoom, s.viewport, C),
    setNodeTypes: l,
    setEdgeTypes: c,
    addEdge: u,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: b,
    fitView: (C) => p(C),
    setMinZoom: $,
    setMaxZoom: g,
    setTranslateExtent: _,
    setPaneClickDistance: k,
    unselectNodesAndEdges: T,
    addSelectedNodes: E,
    addSelectedEdges: H,
    handleNodeSelection: O,
    panBy: L,
    updateConnection: D,
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
function e2({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Qr(ba, {
    getStore: () => s
  }), s;
}
function eu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: c } = t, u = L0({
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
var t2 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const n2 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function dd(e, t) {
  he(t, !1), at(e, n2);
  const [n, r] = ft(), o = () => oe(P, "$panActivationKeyPressed", n), i = () => oe(R, "$minZoom", n), a = () => oe(S, "$maxZoom", n), s = () => oe(V, "$zoomActivationKeyPressed", n), l = () => oe(D, "$selectionRect", n), c = () => oe(M, "$translateExtent", n), u = () => oe(N, "$lib", n), d = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae();
  let h = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), b = w(t, "onMove", 12, void 0), $ = w(t, "onMoveEnd", 12, void 0), g = w(t, "panOnScrollMode", 12), _ = w(t, "preventScrolling", 12), m = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), T = w(t, "zoomOnPinch", 12), E = w(t, "panOnDrag", 12), H = w(t, "panOnScroll", 12), O = w(t, "paneClickDistance", 12);
  const {
    viewport: L,
    panZoom: q,
    selectionRect: D,
    minZoom: R,
    maxZoom: S,
    dragging: C,
    translateExtent: M,
    lib: N,
    panActivationKeyPressed: P,
    zoomActivationKeyPressed: V,
    viewportInitialized: I
  } = et(), Y = (K) => L.set({
    x: K[0],
    y: K[1],
    zoom: K[2]
  });
  hn(() => {
    zi(I, !0);
  }), be(() => re(h()), () => {
    ee(d, h() || { x: 0, y: 0, zoom: 1 });
  }), be(
    () => (o(), re(E())),
    () => {
      ee(v, o() || E());
    }
  ), be(
    () => (o(), re(H())),
    () => {
      ee(p, o() || H());
    }
  ), Tt(), je();
  var W = t2(), U = X(W);
  Ht(U, t, "default", {}), j(W), Nt(W, (K, ce) => eu == null ? void 0 : eu(K, ce), () => ({
    viewport: L,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: C,
    panZoom: q,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: m(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: T(),
    panOnScroll: f(p),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: c(),
    lib: u(),
    paneClickDistance: O(),
    onTransformChange: Y
  })), A(e, W);
  var Q = me({
    get initialViewport() {
      return h();
    },
    set initialViewport(K) {
      h(K), y();
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
      return g();
    },
    set panOnScrollMode(K) {
      g(K), y();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(K) {
      _(K), y();
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
      return T();
    },
    set zoomOnPinch(K) {
      T(K), y();
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
var r2 = /* @__PURE__ */ ie("<div><!></div>");
const o2 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function fd(e, t) {
  he(t, !1), at(e, o2);
  const [n, r] = ft(), o = () => oe(C, "$panActivationKeyPressed", n), i = () => oe(R, "$selectionKeyPressed", n), a = () => oe(q, "$selectionRect", n), s = () => oe(L, "$elementsSelectable", n), l = () => oe(D, "$selectionRectMode", n), c = () => oe(N, "$connection", n), u = () => oe(E, "$edges", n), d = () => oe(T, "$nodeLookup", n), v = () => oe(H, "$viewport", n), p = () => oe(S, "$selectionMode", n), h = () => oe(O, "$dragging", n), x = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae();
  let g = w(t, "panOnDrag", 12, void 0), _ = w(t, "selectionOnDrag", 12, void 0);
  const m = da(), {
    nodes: k,
    nodeLookup: T,
    edges: E,
    viewport: H,
    dragging: O,
    elementsSelectable: L,
    selectionRect: q,
    selectionRectMode: D,
    selectionKeyPressed: R,
    selectionMode: S,
    panActivationKeyPressed: C,
    unselectNodesAndEdges: M,
    connection: N
  } = et();
  let P = /* @__PURE__ */ ae(), V = null, I = [], Y = !1;
  function W(le) {
    if (Y || c().inProgress) {
      Y = !1;
      return;
    }
    m("paneclick", { event: le }), M(), D.set(null);
  }
  function U(le) {
    var J, Me;
    if (V = f(P).getBoundingClientRect(), !L || !f(b) || le.button !== 0 || le.target !== f(P) || !V)
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
    Y = !0;
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
      p() === Bi.Partial,
      !0
    );
    const pe = ls(I, u()).map((fe) => fe.id), ge = I.map((fe) => fe.id);
    (Ke.length !== ge.length || ge.some((fe) => !Ke.includes(fe))) && k.update((fe) => fe.map(nu(ge))), (qe.length !== pe.length || pe.some((fe) => !qe.includes(fe))) && E.update((fe) => fe.map(nu(pe))), D.set("user"), q.set(Ae);
  }
  function K(le) {
    var J, Me;
    le.button === 0 && ((Me = (J = le.target) == null ? void 0 : J.releasePointerCapture) == null || Me.call(J, le.pointerId), !f(b) && l() === "user" && le.target === f(P) && (W == null || W(le)), q.set(null), I.length > 0 && zi(D, "nodes"), i() && (Y = !1));
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
    () => (o(), re(g())),
    () => {
      ee(x, o() || g());
    }
  ), be(
    () => (i(), a(), re(_()), f(x)),
    () => {
      ee(b, i() || a() || _() && f(x) !== !0);
    }
  ), be(
    () => (s(), f(b), l()),
    () => {
      ee($, s() && (f(b) || l() === "user"));
    }
  ), Tt(), je();
  var ue = r2(), ye = /* @__PURE__ */ Ne(() => f($) ? void 0 : tu(W, f(P))), se = /* @__PURE__ */ Ne(() => tu(ce, f(P)));
  let _e;
  var xe = X(ue);
  Ht(xe, t, "default", {}), j(ue), Ln(ue, (le) => ee(P, le), () => f(P)), Te(
    (le) => _e = zt(ue, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, le),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
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
      return g();
    },
    set panOnDrag(le) {
      g(le), y();
    },
    get selectionOnDrag() {
      return _();
    },
    set selectionOnDrag(le) {
      _(le), y();
    }
  });
  return r(), Oe;
}
ve(fd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var i2 = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const a2 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function vd(e, t) {
  he(t, !1), at(e, a2);
  const [n, r] = ft(), o = () => oe(i, "$viewport", n), { viewport: i } = et();
  je();
  var a = i2(), s = X(a);
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
function s2({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var l2 = /* @__PURE__ */ ie("<div><!></div>");
function pd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(ue, "$nodeTypes", n), i = () => oe(Oe, "$elementsSelectable", n), a = () => oe(le, "$nodesDraggable", n), s = () => oe(Ae, "$connectableStore", n), l = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0);
  let v = w(t, "node", 13), p = w(t, "id", 13), h = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), b = w(t, "draggable", 13, void 0), $ = w(t, "selectable", 13, void 0), g = w(t, "connectable", 13, !0), _ = w(t, "deletable", 13, !0), m = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), T = w(t, "resizeObserver", 13, null), E = w(t, "style", 13, void 0), H = w(t, "type", 13, "default"), O = w(t, "isParent", 13, !1), L = w(t, "positionX", 13), q = w(t, "positionY", 13), D = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), C = w(t, "measuredWidth", 13, void 0), M = w(t, "measuredHeight", 13, void 0), N = w(t, "initialWidth", 13, void 0), P = w(t, "initialHeight", 13, void 0), V = w(t, "width", 13, void 0), I = w(t, "height", 13, void 0), Y = w(t, "dragHandle", 13, void 0), W = w(t, "initialized", 13, !1), U = w(t, "parentId", 13, void 0), Q = w(t, "nodeClickDistance", 13, void 0), K = w(t, "class", 13, "");
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
  const F = da(), Ae = Se(g());
  let Ke = /* @__PURE__ */ ae(void 0, !0), qe = /* @__PURE__ */ ae(void 0, !0), pe = /* @__PURE__ */ ae(void 0, !0);
  Qr("svelteflow__node_id", p()), Qr("svelteflow__node_connectable", Ae), Hs(() => {
    var te;
    f(Me) && ((te = T()) == null || te.unobserve(f(Me)));
  });
  function ge(te) {
    $() && (!G(se) || !b() || G(ye) > 0) && _e(p()), F("nodeclick", { node: v().internals.userNode, event: te });
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
    () => (re(V()), re(I()), re(N()), re(P()), re(C()), re(M())),
    () => {
      ee(d, s2({
        width: V(),
        height: I(),
        initialWidth: N(),
        initialHeight: P(),
        measuredWidth: C(),
        measuredHeight: M()
      }));
    }
  ), be(() => re(g()), () => {
    Ae.set(!!g());
  }), be(
    () => (f(Ke), f(l), f(qe), re(D()), f(pe), re(R()), re(p()), f(J)),
    () => {
      (f(Ke) && f(l) !== f(Ke) || f(qe) && D() !== f(qe) || f(pe) && R() !== f(pe)) && requestAnimationFrame(() => xe(/* @__PURE__ */ new Map([
        [
          p(),
          {
            id: p(),
            nodeElement: f(J),
            force: !0
          }
        ]
      ]))), ee(Ke, f(l)), ee(qe, D()), ee(pe, R());
    }
  ), be(
    () => (re(T()), f(J), f(Me), re(W())),
    () => {
      T() && (f(J) !== f(Me) || !W()) && (f(Me) && T().unobserve(f(Me)), f(J) && T().observe(f(J)), ee(Me, f(J)));
    }
  ), Tt(), je(!0);
  var fe = it(), Ve = Ce(fe);
  {
    var ct = (te) => {
      var Fe = l2();
      let de, jt;
      var Xt = X(Fe);
      const ln = /* @__PURE__ */ ke(() => x() ?? !1), Le = /* @__PURE__ */ ke(() => $() ?? i() ?? !0), st = /* @__PURE__ */ ke(() => _() ?? !0), Be = /* @__PURE__ */ ke(() => b() ?? a() ?? !0);
      Gu(Xt, () => f(u), (Ze, lt) => {
        lt(Ze, {
          get data() {
            return h();
          },
          get id() {
            return p();
          },
          get selected() {
            return f(ln);
          },
          get selectable() {
            return f(Le);
          },
          get deletable() {
            return f(st);
          },
          get sourcePosition() {
            return D();
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
            return Y();
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
            return L();
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
        nodeId: p(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: Y(),
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
      })), Ln(Fe, (Ze) => ee(J, Ze), () => f(J)), tn(() => dt("click", Fe, ge)), tn(() => dt("mouseenter", Fe, (Ze) => F("nodemouseenter", { node: v(), event: Ze }))), tn(() => dt("mouseleave", Fe, (Ze) => F("nodemouseleave", { node: v(), event: Ze }))), tn(() => dt("mousemove", Fe, (Ze) => F("nodemousemove", { node: v(), event: Ze }))), tn(() => dt("contextmenu", Fe, (Ze) => F("nodecontextmenu", { node: v(), event: Ze }))), Te(
        (Ze, lt) => {
          Ee(Fe, "data-id", p()), de = zt(Fe, 1, Ze, null, de, lt), jt = $t(Fe, `${E() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, jt, {
            "z-index": S(),
            transform: `translate(${L() ?? ""}px, ${q() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => En(Bt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            K()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: g(),
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
      return p();
    },
    set id(te) {
      p(te), y();
    },
    get data() {
      return h();
    },
    set data(te) {
      h(te), y();
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
      return g();
    },
    set connectable(te) {
      g(te), y();
    },
    get deletable() {
      return _();
    },
    set deletable(te) {
      _(te), y();
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
      return T();
    },
    set resizeObserver(te) {
      T(te), y();
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
      return L();
    },
    set positionX(te) {
      L(te), y();
    },
    get positionY() {
      return q();
    },
    set positionY(te) {
      q(te), y();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(te) {
      D(te), y();
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
      return C();
    },
    set measuredWidth(te) {
      C(te), y();
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
      return P();
    },
    set initialHeight(te) {
      P(te), y();
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
      return Y();
    },
    set dragHandle(te) {
      Y(te), y();
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
  pd,
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
var u2 = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const c2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function gd(e, t) {
  he(t, !1), at(e, c2);
  const [n, r] = ft(), o = () => oe(u, "$visibleNodes", n), i = () => oe(d, "$nodesDraggable", n), a = () => oe(p, "$elementsSelectable", n), s = () => oe(v, "$nodesConnectable", n), l = () => oe(x, "$parentLookup", n);
  let c = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: u,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: p,
    updateNodeInternals: h,
    parentLookup: x
  } = et(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const m = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const T = k.target.getAttribute("data-id");
      m.set(T, { id: T, nodeElement: k.target, force: !0 });
    }), h(m);
  });
  Hs(() => {
    b == null || b.disconnect();
  }), je();
  var $ = u2();
  Zt($, 5, o, (_) => _.id, (_, m) => {
    const k = /* @__PURE__ */ ke(() => !!f(m).selected), T = /* @__PURE__ */ ke(() => !!f(m).hidden), E = /* @__PURE__ */ ke(() => !!(f(m).draggable || i() && typeof f(m).draggable > "u")), H = /* @__PURE__ */ ke(() => !!(f(m).selectable || a() && typeof f(m).selectable > "u")), O = /* @__PURE__ */ ke(() => !!(f(m).connectable || s() && typeof f(m).connectable > "u")), L = /* @__PURE__ */ ke(() => f(m).deletable ?? !0), q = /* @__PURE__ */ ke(() => l().has(f(m).id)), D = /* @__PURE__ */ ke(() => f(m).type ?? "default"), R = /* @__PURE__ */ ke(() => f(m).internals.z ?? 0), S = /* @__PURE__ */ ke(() => Ac(f(m)));
    pd(_, {
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
        return f(T);
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
        return f(L);
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
        return f(D);
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
        nodeclick(C) {
          Ue.call(this, t, C);
        },
        nodemouseenter(C) {
          Ue.call(this, t, C);
        },
        nodemousemove(C) {
          Ue.call(this, t, C);
        },
        nodemouseleave(C) {
          Ue.call(this, t, C);
        },
        nodedrag(C) {
          Ue.call(this, t, C);
        },
        nodedragstart(C) {
          Ue.call(this, t, C);
        },
        nodedragstop(C) {
          Ue.call(this, t, C);
        },
        nodecontextmenu(C) {
          Ue.call(this, t, C);
        }
      }
    });
  }), j($), A(e, $);
  var g = me({
    get nodeClickDistance() {
      return c();
    },
    set nodeClickDistance(_) {
      c(_), y();
    }
  });
  return r(), g;
}
ve(gd, { nodeClickDistance: {} }, [], [], !0);
var d2 = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function hd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(K, "$edgeTypes", n), i = () => oe(ce, "$flowId", n), a = () => oe(ue, "$elementsSelectable", n), s = () => oe(Q, "$edgeLookup", n), l = /* @__PURE__ */ ae(void 0, !0), c = /* @__PURE__ */ ae(void 0, !0), u = /* @__PURE__ */ ae(void 0, !0), d = /* @__PURE__ */ ae(void 0, !0), v = /* @__PURE__ */ ae(void 0, !0);
  let p = w(t, "id", 13), h = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), b = w(t, "target", 13, ""), $ = w(t, "data", 29, () => ({})), g = w(t, "style", 13, void 0), _ = w(t, "zIndex", 13, void 0), m = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), T = w(t, "selectable", 13, void 0), E = w(t, "deletable", 13, void 0), H = w(t, "hidden", 13, !1), O = w(t, "label", 13, void 0), L = w(t, "labelStyle", 13, void 0), q = w(t, "markerStart", 13, void 0), D = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), C = w(t, "sourceX", 13), M = w(t, "sourceY", 13), N = w(t, "targetX", 13), P = w(t, "targetY", 13), V = w(t, "sourcePosition", 13), I = w(t, "targetPosition", 13), Y = w(t, "ariaLabel", 13, void 0), W = w(t, "interactionWidth", 13, void 0), U = w(t, "class", 13, "");
  Qr("svelteflow__edge_id", p());
  const {
    edgeLookup: Q,
    edgeTypes: K,
    flowId: ce,
    elementsSelectable: ue
  } = et(), ye = da(), se = rd();
  function _e(F) {
    const Ae = s().get(p());
    Ae && (se(p()), ye("edgeclick", { event: F, edge: Ae }));
  }
  function xe(F, Ae) {
    const Ke = s().get(p());
    Ke && ye(Ae, { event: F, edge: Ke });
  }
  be(() => re(h()), () => {
    ee(l, h() || "default");
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
    () => (re(D()), i()),
    () => {
      ee(d, D() ? `url('#${ds(D(), i())}')` : void 0);
    }
  ), be(
    () => (re(T()), a()),
    () => {
      ee(v, T() ?? a());
    }
  ), Tt(), je(!0);
  var Oe = it(), le = Ce(Oe);
  {
    var J = (F) => {
      var Ae = d2();
      let Ke;
      var qe = X(Ae);
      let pe;
      var ge = X(qe);
      const fe = /* @__PURE__ */ ke(() => E() ?? !0);
      Gu(ge, () => f(c), (Ve, ct) => {
        ct(Ve, {
          get id() {
            return p();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return C();
          },
          get sourceY() {
            return M();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return P();
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
            return L();
          },
          get data() {
            return $();
          },
          get style() {
            return g();
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
          Ke = $t(Ae, "", Ke, { "z-index": _() }), pe = zt(qe, 0, Ve, null, pe, ct), Ee(qe, "data-id", p()), Ee(qe, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => En(Bt(["svelte-flow__edge", U()])),
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
      return p();
    },
    set id(F) {
      p(F), y();
    },
    get type() {
      return h();
    },
    set type(F) {
      h(F), y();
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
      return g();
    },
    set style(F) {
      g(F), y();
    },
    get zIndex() {
      return _();
    },
    set zIndex(F) {
      _(F), y();
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
      return T();
    },
    set selectable(F) {
      T(F), y();
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
      return L();
    },
    set labelStyle(F) {
      L(F), y();
    },
    get markerStart() {
      return q();
    },
    set markerStart(F) {
      q(F), y();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(F) {
      D(F), y();
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
      return C();
    },
    set sourceX(F) {
      C(F), y();
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
      return P();
    },
    set targetY(F) {
      P(F), y();
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
      return Y();
    },
    set ariaLabel(F) {
      Y(F), y();
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
  hd,
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
  he(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return hn(() => {
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
var f2 = /* @__PURE__ */ Pe("<defs></defs>");
function yd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(i, "$markers", n), { markers: i } = et();
  je();
  var a = f2();
  Zt(a, 5, o, (s) => s.id, (s, l) => {
    wd(s, mt(() => f(l)));
  }), j(a), A(e, a), me(), r();
}
ve(yd, {}, [], [], !0);
var v2 = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), p2 = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), g2 = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function wd(e, t) {
  he(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), a = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), c = w(t, "strokeWidth", 12, void 0);
  je();
  var u = g2(), d = X(u);
  {
    var v = (h) => {
      var x = v2();
      Te(() => {
        Ee(x, "stroke", l()), Ee(x, "stroke-width", c());
      }), A(h, x);
    }, p = (h, x) => {
      {
        var b = ($) => {
          var g = p2();
          Te(() => {
            Ee(g, "stroke", l()), Ee(g, "stroke-width", c()), Ee(g, "fill", l());
          }), A($, g);
        };
        $e(
          h,
          ($) => {
            r() === Bo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    $e(d, (h) => {
      r() === Bo.Arrow ? h(v) : h(p, !1);
    });
  }
  return j(u), Te(() => {
    Ee(u, "id", n()), Ee(u, "markerWidth", `${o()}`), Ee(u, "markerHeight", `${i()}`), Ee(u, "markerUnits", a()), Ee(u, "orient", s());
  }), A(e, u), me({
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
    set width(h) {
      o(h), y();
    },
    get height() {
      return i();
    },
    set height(h) {
      i(h), y();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(h) {
      a(h), y();
    },
    get orient() {
      return s();
    },
    set orient(h) {
      s(h), y();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(h) {
      c(h), y();
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
var h2 = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function bd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(s, "$visibleEdges", n), i = () => oe(u, "$elementsSelectable", n);
  let a = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: c },
    elementsSelectable: u
  } = et();
  hn(() => {
    a() && c(a());
  }), je();
  var d = h2(), v = X(d), p = X(v);
  yd(p, {}), j(v);
  var h = B(v, 2);
  Zt(h, 1, o, (g) => g.id, (g, _) => {
    const m = /* @__PURE__ */ ke(() => f(_).selectable ?? i()), k = /* @__PURE__ */ ke(() => f(_).type || "default");
    hd(g, {
      get id() {
        return f(_).id;
      },
      get source() {
        return f(_).source;
      },
      get target() {
        return f(_).target;
      },
      get data() {
        return f(_).data;
      },
      get style() {
        return f(_).style;
      },
      get animated() {
        return f(_).animated;
      },
      get selected() {
        return f(_).selected;
      },
      get selectable() {
        return f(m);
      },
      get deletable() {
        return f(_).deletable;
      },
      get hidden() {
        return f(_).hidden;
      },
      get label() {
        return f(_).label;
      },
      get labelStyle() {
        return f(_).labelStyle;
      },
      get markerStart() {
        return f(_).markerStart;
      },
      get markerEnd() {
        return f(_).markerEnd;
      },
      get sourceHandle() {
        return f(_).sourceHandle;
      },
      get targetHandle() {
        return f(_).targetHandle;
      },
      get sourceX() {
        return f(_).sourceX;
      },
      get sourceY() {
        return f(_).sourceY;
      },
      get targetX() {
        return f(_).targetX;
      },
      get targetY() {
        return f(_).targetY;
      },
      get sourcePosition() {
        return f(_).sourcePosition;
      },
      get targetPosition() {
        return f(_).targetPosition;
      },
      get ariaLabel() {
        return f(_).ariaLabel;
      },
      get interactionWidth() {
        return f(_).interactionWidth;
      },
      get class() {
        return f(_).class;
      },
      get type() {
        return f(k);
      },
      get zIndex() {
        return f(_).zIndex;
      },
      $$events: {
        edgeclick(T) {
          Ue.call(this, t, T);
        },
        edgecontextmenu(T) {
          Ue.call(this, t, T);
        },
        edgemouseenter(T) {
          Ue.call(this, t, T);
        },
        edgemouseleave(T) {
          Ue.call(this, t, T);
        }
      }
    });
  });
  var x = B(h, 2);
  {
    var b = (g) => {
      md(g, {
        onMount: () => {
          zi(l, !0);
        },
        onDestroy: () => {
          zi(l, !1);
        }
      });
    };
    $e(x, (g) => {
      o().length > 0 && g(b);
    });
  }
  j(d), A(e, d);
  var $ = me({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), y();
    }
  });
  return r(), $;
}
ve(bd, { defaultEdgeOptions: {} }, [], [], !0);
var m2 = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const y2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ks(e, t) {
  he(t, !1), at(e, y2);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), a = w(t, "isVisible", 12, !0);
  var s = it(), l = Ce(s);
  {
    var c = (u) => {
      var d = m2();
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
  he(t, !1);
  const [n, r] = ft(), o = () => oe(a, "$selectionRect", n), i = () => oe(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = et();
  je();
  const l = /* @__PURE__ */ ke(() => !!(o() && i() === "user")), c = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.width;
  }), u = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.height;
  }), d = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.x;
  }), v = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.y;
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
var w2 = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const b2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function $d(e, t) {
  he(t, !1), at(e, b2);
  const [n, r] = ft(), o = () => oe(l, "$selectionRectMode", n), i = () => oe(u, "$nodeLookup", n), a = () => oe(c, "$nodes", n), s = et(), { selectionRectMode: l, nodes: c, nodeLookup: u } = s, d = da();
  let v = /* @__PURE__ */ ae(null);
  function p(g) {
    const _ = a().filter((m) => m.selected);
    d("selectioncontextmenu", { nodes: _, event: g });
  }
  function h(g) {
    const _ = a().filter((m) => m.selected);
    d("selectionclick", { nodes: _, event: g });
  }
  be(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (ee(v, ei(i(), { filter: (g) => !!g.selected })), a());
    }
  ), Tt(), je();
  var x = it(), b = Ce(x);
  {
    var $ = (g) => {
      var _ = w2(), m = X(_);
      Ks(m, { width: "100%", height: "100%", x: 0, y: 0 }), j(_), Nt(_, (k, T) => Ui == null ? void 0 : Ui(k, T), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, T, E, H) => {
          d("nodedrag", { event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, T, E, H) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, T, E, H) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: H });
        }
      })), tn(() => dt("contextmenu", _, p)), tn(() => dt("click", _, h)), tn(() => dt("keyup", _, () => {
      })), Te(() => $t(_, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), A(g, _);
    };
    $e(b, (g) => {
      o() === "nodes" && f(v) && jn(f(v).x) && jn(f(v).y) && g($);
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
      }, { modifier: d, key: v, callback: p, preventDefault: h, enabled: x } = u;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          h && a.preventDefault();
          const b = {
            node: e,
            trigger: u,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), p == null || p(b);
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
  he(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Yi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), a = w(t, "zoomActivationKey", 28, () => Yi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: c,
    panActivationKeyPressed: u,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = et();
  function p(g) {
    return g !== null && typeof g == "object";
  }
  function h(g) {
    return p(g) ? g.modifier || [] : [];
  }
  function x(g) {
    return g == null ? "" : p(g) ? g.key : g;
  }
  function b(g, _) {
    return (Array.isArray(g) ? g : [g]).map((m) => {
      const k = x(m);
      return {
        key: k,
        modifier: h(m),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), c.set(!1), u.set(!1), d.set(!1);
  }
  return je(), dt("blur", Kt, $), dt("contextmenu", Kt, $), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !e0(g.originalEvent) && c.set(!0);
    }),
    type: "keydown"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(o(), () => c.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(i(), () => u.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(i(), () => u.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => bt == null ? void 0 : bt(g, _), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), me({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(g) {
      i(g), y();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(g) {
      a(g), y();
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
var x2 = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__connection-path"></path>'), $2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function _d(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(p, "$connection", n), i = () => oe(h, "$connectionLineType", n), a = () => oe(d, "$width", n), s = () => oe(v, "$height", n);
  let l = w(t, "containerStyle", 12, ""), c = w(t, "style", 12, ""), u = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: p,
    connectionLineType: h
  } = et();
  let x = /* @__PURE__ */ ae(null);
  be(
    () => (o(), re(u()), i(), f(x), cs),
    () => {
      if (o().inProgress && !u()) {
        const { from: m, to: k, fromPosition: T, toPosition: E } = o(), H = {
          sourceX: m.x,
          sourceY: m.y,
          sourcePosition: T,
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
    var g = (m) => {
      var k = $2(), T = X(k), E = X(T);
      Ht(E, t, "connectionLine", {});
      var H = B(E);
      {
        var O = (L) => {
          var q = x2();
          Te(() => {
            Ee(q, "d", f(x)), $t(q, c());
          }), A(L, q);
        };
        $e(H, (L) => {
          u() || L(O);
        });
      }
      j(T), j(k), Te(
        (L) => {
          Ee(k, "width", a()), Ee(k, "height", s()), $t(k, l()), zt(T, 0, L);
        },
        [
          () => En(Bt([
            "svelte-flow__connection",
            Ih(o().isValid)
          ]))
        ],
        ke
      ), A(m, k);
    };
    $e($, (m) => {
      o().inProgress && m(g);
    });
  }
  A(e, b);
  var _ = me({
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
  return r(), _;
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
var C2 = /* @__PURE__ */ ie("<div><!></div>");
function ri(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["position", "style", "class"]);
  he(t, !1);
  const [o, i] = ft(), a = () => oe(d, "$selectionRectMode", o), s = /* @__PURE__ */ ae();
  let l = w(t, "position", 12, "top-right"), c = w(t, "style", 12, void 0), u = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = et();
  be(() => re(l()), () => {
    ee(s, `${l()}`.split("-"));
  }), Tt(), je();
  var v = C2();
  let p;
  var h = X(v);
  Ht(h, t, "default", {}), j(v), Te(
    (b) => p = pn(v, p, {
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
var _2 = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function kd(e, t) {
  he(t, !1);
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
          var u = _2();
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
const k2 = (e) => Object.keys(e);
function ou(e, t) {
  k2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function E2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function S2(e = "light") {
  return un("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = E2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var M2 = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), P2 = /* @__PURE__ */ ie("<!> <!>", 1), T2 = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const V2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ed(e, t) {
  const n = B1(t), r = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = gt(r, [
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
  he(t, !1), at(e, V2);
  const [i, a] = ft(), s = () => oe(_(), "$viewport", i), l = () => oe(yo, "$initialized", i), c = () => oe(f(u), "$colorModeClass", i), u = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, "1"), v = w(t, "nodes", 12), p = w(t, "edges", 12), h = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), b = w(t, "minZoom", 12, void 0), $ = w(t, "maxZoom", 12, void 0), g = w(t, "initialViewport", 12, void 0), _ = w(t, "viewport", 12, void 0), m = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), T = w(t, "selectionKey", 12, void 0), E = w(t, "selectionMode", 12, void 0), H = w(t, "panActivationKey", 12, void 0), O = w(t, "multiSelectionKey", 12, void 0), L = w(t, "zoomActivationKey", 12, void 0), q = w(t, "nodesDraggable", 12, void 0), D = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), C = w(t, "snapGrid", 12, void 0), M = w(t, "deleteKey", 12, void 0), N = w(t, "connectionRadius", 12, void 0), P = w(t, "connectionLineType", 12, void 0), V = w(t, "connectionMode", 28, () => Vr.Strict), I = w(t, "connectionLineStyle", 12, ""), Y = w(t, "connectionLineContainerStyle", 12, ""), W = w(t, "onMoveStart", 12, void 0), U = w(t, "onMove", 12, void 0), Q = w(t, "onMoveEnd", 12, void 0), K = w(t, "isValidConnection", 12, void 0), ce = w(t, "translateExtent", 12, void 0), ue = w(t, "nodeExtent", 12, void 0), ye = w(t, "onlyRenderVisibleElements", 12, void 0), se = w(t, "panOnScrollMode", 28, () => cr.Free), _e = w(t, "preventScrolling", 12, !0), xe = w(t, "zoomOnScroll", 12, !0), Oe = w(t, "zoomOnDoubleClick", 12, !0), le = w(t, "zoomOnPinch", 12, !0), J = w(t, "panOnScroll", 12, !1), Me = w(t, "panOnDrag", 12, !0), F = w(t, "selectionOnDrag", 12, void 0), Ae = w(t, "autoPanOnConnect", 12, !0), Ke = w(t, "autoPanOnNodeDrag", 12, !0), qe = w(t, "onerror", 12, void 0), pe = w(t, "ondelete", 12, void 0), ge = w(t, "onedgecreate", 12, void 0), fe = w(t, "attributionPosition", 12, void 0), Ve = w(t, "proOptions", 12, void 0), ct = w(t, "defaultEdgeOptions", 12, void 0), vt = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Fe = w(t, "colorMode", 12, "light"), de = w(t, "onconnect", 12, void 0), jt = w(t, "onconnectstart", 12, void 0), Xt = w(t, "onconnectend", 12, void 0), ln = w(t, "onbeforedelete", 12, void 0), Le = w(t, "oninit", 12, void 0), st = w(t, "nodeOrigin", 12, void 0), Be = w(t, "paneClickDistance", 12, 0), Ze = w(t, "nodeClickDistance", 12, 0), lt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Qt = w(t, "style", 12, void 0), Vt = w(t, "class", 12, void 0), Qn = /* @__PURE__ */ ae(), yt = /* @__PURE__ */ ae(), Ct = /* @__PURE__ */ ae();
  const Pn = s() || g(), rt = C1(ba) ? et() : e2({
    nodes: G(v()),
    edges: G(p()),
    width: vt(),
    height: te(),
    fitView: h(),
    nodeOrigin: st(),
    nodeExtent: ue()
  });
  hn(() => (rt.width.set(f(yt)), rt.height.set(f(Ct)), rt.domNode.set(f(Qn)), rt.syncNodeStores(v()), rt.syncEdgeStores(p()), rt.syncViewport(_()), h() !== void 0 && rt.fitViewQueued.set(h()), x() && rt.fitViewOptions.set(x()), ru(rt, {
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
    () => (f(er), l(), re(Le())),
    () => {
      var Z;
      !f(er) && l() && ((Z = Le()) == null || Z(), ee(er, !0));
    }
  ), be(
    () => (re(d()), re(P()), re(N()), re(E()), re(C()), re(lt()), re(q()), re(D()), re(S()), re(ye()), re(K()), re(Ae()), re(Ke()), re(qe()), re(pe()), re(ge()), re(V()), re(R()), re(de()), re(jt()), re(Xt()), re(ln()), re(st()), ou),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: P(),
        connectionRadius: N(),
        selectionMode: E(),
        snapGrid: C(),
        defaultMarkerColor: lt(),
        nodesDraggable: q(),
        nodesConnectable: D(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ye(),
        isValidConnection: K(),
        autoPanOnConnect: Ae(),
        autoPanOnNodeDrag: Ke(),
        onerror: qe(),
        ondelete: pe(),
        onedgecreate: ge(),
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
      ev(ee(u, S2(Fe())), "$colorModeClass", i);
    }
  ), Tt(), je();
  var Lt = T2();
  let wr;
  var br = X(Lt);
  Cd(br, {
    get selectionKey() {
      return T();
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
      return L();
    }
  });
  var Lr = B(br, 2);
  const wo = /* @__PURE__ */ ke(() => se() === void 0 ? cr.Free : se()), si = /* @__PURE__ */ ke(() => _e() === void 0 ? !0 : _e()), li = /* @__PURE__ */ ke(() => xe() === void 0 ? !0 : xe()), ka = /* @__PURE__ */ ke(() => Oe() === void 0 ? !0 : Oe()), Ea = /* @__PURE__ */ ke(() => le() === void 0 ? !0 : le()), Sa = /* @__PURE__ */ ke(() => J() === void 0 ? !1 : J()), Ma = /* @__PURE__ */ ke(() => Me() === void 0 ? !0 : Me()), z = /* @__PURE__ */ ke(() => Be() === void 0 ? 0 : Be());
  dd(Lr, {
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
      return f(Ea);
    },
    get panOnScroll() {
      return f(Sa);
    },
    get panOnDrag() {
      return f(Ma);
    },
    get paneClickDistance() {
      return f(z);
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
          var pt = P2(), ht = Ce(pt);
          vd(ht, {
            children: (tr, nr) => {
              var St = M2(), Ar = Ce(St);
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
                  return Y();
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
              gd(ci, {
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
              }), A(tr, St);
            },
            $$slots: { default: !0 }
          });
          var Yt = B(ht, 2);
          xd(Yt, {}), A(Ie, pt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ne = B(Lr, 2);
  kd(ne, {
    get proOptions() {
      return Ve();
    },
    get position() {
      return fe();
    }
  });
  var we = B(ne, 2);
  Ht(we, t, "default", {}), j(Lt), Ln(Lt, (Z) => ee(Qn, Z), () => f(Qn)), Te(
    (Z) => wr = pn(
      Lt,
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
  ), ml(Lt, "clientWidth", (Z) => ee(yt, Z)), ml(Lt, "clientHeight", (Z) => ee(Ct, Z)), dt("dragover", Lt, function(Z) {
    Ue.call(this, t, Z);
  }), dt("drop", Lt, function(Z) {
    Ue.call(this, t, Z);
  }), A(e, Lt);
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
      return p();
    },
    set edges(Z) {
      p(Z), y();
    },
    get fitView() {
      return h();
    },
    set fitView(Z) {
      h(Z), y();
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
      return g();
    },
    set initialViewport(Z) {
      g(Z), y();
    },
    get viewport() {
      return _();
    },
    set viewport(Z) {
      _(Z), y();
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
      return T();
    },
    set selectionKey(Z) {
      T(Z), y();
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
      return L();
    },
    set zoomActivationKey(Z) {
      L(Z), y();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(Z) {
      q(Z), y();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(Z) {
      D(Z), y();
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
      return C();
    },
    set snapGrid(Z) {
      C(Z), y();
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
      return P();
    },
    set connectionLineType(Z) {
      P(Z), y();
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
      return Y();
    },
    set connectionLineContainerStyle(Z) {
      Y(Z), y();
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
      return pe();
    },
    set ondelete(Z) {
      pe(Z), y();
    },
    get onedgecreate() {
      return ge();
    },
    set onedgecreate(Z) {
      ge(Z), y();
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
      return Le();
    },
    set oninit(Z) {
      Le(Z), y();
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
  Ed,
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
function Sd(e, t) {
  he(t, !1);
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
  Sd,
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
var O2 = /* @__PURE__ */ ie("<button><!></button>");
function Po(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  he(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), a = w(t, "bgColorHover", 12, void 0), s = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), c = w(t, "borderColor", 12, void 0);
  je();
  var u = O2();
  let d;
  var v = X(u);
  return Ht(v, t, "default", { class: "button-svg" }), j(u), Te(
    (p) => d = pn(u, d, {
      type: "button",
      class: p,
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
  ), dt("click", u, function(p) {
    Ue.call(this, t, p);
  }), A(e, u), me({
    get class() {
      return o();
    },
    set class(p) {
      o(p), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(p) {
      i(p), y();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(p) {
      a(p), y();
    },
    get color() {
      return s();
    },
    set color(p) {
      s(p), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(p) {
      l(p), y();
    },
    get borderColor() {
      return c();
    },
    set borderColor(p) {
      c(p), y();
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
var N2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Md(e) {
  var t = N2();
  A(e, t);
}
ve(Md, {}, [], [], !0);
var H2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Pd(e) {
  var t = H2();
  A(e, t);
}
ve(Pd, {}, [], [], !0);
var z2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Td(e) {
  var t = z2();
  A(e, t);
}
ve(Td, {}, [], [], !0);
var D2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Vd(e) {
  var t = D2();
  A(e, t);
}
ve(Vd, {}, [], [], !0);
var L2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Od(e) {
  var t = L2();
  A(e, t);
}
ve(Od, {}, [], [], !0);
var A2 = /* @__PURE__ */ ie("<!> <!>", 1), R2 = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Nd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(P, "$nodesDraggable", n), i = () => oe(V, "$nodesConnectable", n), a = () => oe(I, "$elementsSelectable", n), s = () => oe(C, "$viewport", n), l = () => oe(M, "$minZoom", n), c = () => oe(N, "$maxZoom", n), u = /* @__PURE__ */ ae(), d = /* @__PURE__ */ ae(), v = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae();
  let h = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), b = w(t, "showFitView", 12, !0), $ = w(t, "showLock", 12, !0), g = w(t, "buttonBgColor", 12, void 0), _ = w(t, "buttonBgColorHover", 12, void 0), m = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), T = w(t, "buttonBorderColor", 12, void 0), E = w(t, "ariaLabel", 12, void 0), H = w(t, "style", 12, void 0), O = w(t, "orientation", 12, "vertical"), L = w(t, "fitViewOptions", 12, void 0), q = w(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: R,
    fitView: S,
    viewport: C,
    minZoom: M,
    maxZoom: N,
    nodesDraggable: P,
    nodesConnectable: V,
    elementsSelectable: I
  } = et(), Y = {
    bgColor: g(),
    bgColorHover: _(),
    color: m(),
    colorHover: k(),
    borderColor: T()
  }, W = () => {
    D();
  }, U = () => {
    R();
  }, Q = () => {
    S(L());
  }, K = () => {
    ee(u, !f(u)), P.set(f(u)), V.set(f(u)), I.set(f(u));
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
    ee(p, O() === "horizontal" ? "horizontal" : "vertical");
  }), Tt(), je();
  const ce = /* @__PURE__ */ ke(() => Bt([
    "svelte-flow__controls",
    f(p),
    q()
  ])), ue = /* @__PURE__ */ ke(() => E() ?? "Svelte Flow controls");
  ri(e, {
    get class() {
      return f(ce);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(ue);
    },
    get style() {
      return H();
    },
    children: (se, _e) => {
      var xe = R2(), Oe = Ce(xe);
      Ht(Oe, t, "before", {});
      var le = B(Oe, 2);
      {
        var J = (ge) => {
          var fe = A2(), Ve = Ce(fe);
          Po(Ve, mt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            Y,
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
            Y,
            {
              $$events: { click: U },
              children: (vt, te) => {
                Pd(vt);
              },
              $$slots: { default: !0 }
            }
          )), A(ge, fe);
        };
        $e(le, (ge) => {
          x() && ge(J);
        });
      }
      var Me = B(le, 2);
      {
        var F = (ge) => {
          Po(ge, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: Q },
              children: (fe, Ve) => {
                Td(fe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Me, (ge) => {
          b() && ge(F);
        });
      }
      var Ae = B(Me, 2);
      {
        var Ke = (ge) => {
          Po(ge, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
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
        $e(Ae, (ge) => {
          $() && ge(Ke);
        });
      }
      var qe = B(Ae, 2);
      Ht(qe, t, "default", {});
      var pe = B(qe, 2);
      Ht(pe, t, "after", {}), A(se, xe);
    },
    $$slots: { default: !0 }
  });
  var ye = me({
    get position() {
      return h();
    },
    set position(se) {
      h(se), y();
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
      return g();
    },
    set buttonBgColor(se) {
      g(se), y();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(se) {
      _(se), y();
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
      return T();
    },
    set buttonBorderColor(se) {
      T(se), y();
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
      return L();
    },
    set fitViewOptions(se) {
      L(se), y();
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
var I2 = /* @__PURE__ */ Pe("<circle></circle>");
function Hd(e, t) {
  he(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  je();
  var o = I2();
  return Te(
    (i) => {
      Ee(o, "cx", n()), Ee(o, "cy", n()), Ee(o, "r", n()), zt(o, 0, i);
    },
    [
      () => En(Bt([
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
var q2 = /* @__PURE__ */ Pe("<path></path>");
function zd(e, t) {
  he(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  je();
  var a = q2();
  return Te(
    (s) => {
      Ee(a, "stroke-width", n()), Ee(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), zt(a, 0, s);
    },
    [
      () => En(Bt([
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
  zd,
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
const Z2 = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var B2 = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const j2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Dd(e, t) {
  he(t, !1), at(e, j2);
  const [n, r] = ft(), o = () => oe(k, "$flowId", n), i = () => oe(m, "$viewport", n), a = /* @__PURE__ */ ae(), s = /* @__PURE__ */ ae(), l = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let d = w(t, "id", 12, void 0), v = w(t, "variant", 28, () => dr.Dots), p = w(t, "gap", 12, 20), h = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), b = w(t, "bgColor", 12, void 0), $ = w(t, "patternColor", 12, void 0), g = w(t, "patternClass", 12, void 0), _ = w(t, "class", 12, "");
  const { viewport: m, flowId: k } = et(), T = h() || Z2[v()], E = v() === dr.Dots, H = v() === dr.Cross, O = Array.isArray(p()) ? p() : [p(), p()];
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
    ee(l, T * i().zoom);
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
  var L = B2();
  let q;
  var D = X(L), R = X(D);
  {
    var S = (P) => {
      const V = /* @__PURE__ */ ke(() => f(l) / 2);
      Hd(P, {
        get radius() {
          return f(V);
        },
        get class() {
          return g();
        }
      });
    }, C = (P) => {
      zd(P, {
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
          return g();
        }
      });
    };
    $e(R, (P) => {
      E ? P(S) : P(C, !1);
    });
  }
  j(D);
  var M = B(D);
  j(L), Te(
    (P) => {
      zt(L, 0, P, "svelte-1r7pe8d"), q = $t(L, "", q, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), Ee(D, "id", f(a)), Ee(D, "x", i().x % f(s)[0]), Ee(D, "y", i().y % f(s)[1]), Ee(D, "width", f(s)[0]), Ee(D, "height", f(s)[1]), Ee(D, "patternTransform", `translate(-${f(u)[0]},-${f(u)[1]})`), Ee(M, "fill", `url(#${f(a)})`);
    },
    [
      () => En(Bt(["svelte-flow__background", _()]))
    ],
    ke
  ), A(e, L);
  var N = me({
    get id() {
      return d();
    },
    set id(P) {
      d(P), y();
    },
    get variant() {
      return v();
    },
    set variant(P) {
      v(P), y();
    },
    get gap() {
      return p();
    },
    set gap(P) {
      p(P), y();
    },
    get size() {
      return h();
    },
    set size(P) {
      h(P), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(P) {
      x(P), y();
    },
    get bgColor() {
      return b();
    },
    set bgColor(P) {
      b(P), y();
    },
    get patternColor() {
      return $();
    },
    set patternColor(P) {
      $(P), y();
    },
    get patternClass() {
      return g();
    },
    set patternClass(P) {
      g(P), y();
    },
    get class() {
      return _();
    },
    set class(P) {
      _(P), y();
    }
  });
  return r(), N;
}
ve(
  Dd,
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
var X2 = /* @__PURE__ */ Pe("<rect></rect>");
function Ld(e, t) {
  he(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), a = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), c = w(t, "strokeColor", 12, void 0), u = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), v = w(t, "class", 12, "");
  je();
  var p = X2();
  let h;
  return Te(
    (x, b) => {
      h = zt(p, 0, x, null, h, b), Ee(p, "x", n()), Ee(p, "y", r()), Ee(p, "rx", a()), Ee(p, "ry", a()), Ee(p, "width", o()), Ee(p, "height", i()), $t(p, `${s() ? `fill: ${s()};` : ""}${c() ? `stroke: ${c()};` : ""}${u() ? `stroke-width: ${u()};` : ""}`), Ee(p, "shape-rendering", l());
    },
    [
      () => En(Bt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    ke
  ), A(e, p), me({
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
  Ld,
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
var Y2 = /* @__PURE__ */ Pe("<title> </title>"), W2 = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Ad(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(Me, "$flowId", n), i = () => oe(Oe, "$viewport", n), a = () => oe(le, "$containerWidth", n), s = () => oe(J, "$containerHeight", n), l = () => oe(xe, "$nodeLookup", n), c = () => oe(_e, "$nodes", n), u = () => oe(F, "$panZoom", n), d = () => oe(Ae, "$translateExtent", n), v = /* @__PURE__ */ ae(), p = /* @__PURE__ */ ae(), h = /* @__PURE__ */ ae(), x = /* @__PURE__ */ ae(), b = /* @__PURE__ */ ae(), $ = /* @__PURE__ */ ae(), g = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ ae(), m = /* @__PURE__ */ ae(), k = /* @__PURE__ */ ae(), T = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae(), H = /* @__PURE__ */ ae();
  let O = w(t, "position", 12, "bottom-right"), L = w(t, "ariaLabel", 12, "Mini map"), q = w(t, "nodeStrokeColor", 12, "transparent"), D = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), C = w(t, "nodeStrokeWidth", 12, 2), M = w(t, "bgColor", 12, void 0), N = w(t, "maskColor", 12, void 0), P = w(t, "maskStrokeColor", 12, void 0), V = w(t, "maskStrokeWidth", 12, void 0), I = w(t, "width", 12, void 0), Y = w(t, "height", 12, void 0), W = w(t, "pannable", 12, !0), U = w(t, "zoomable", 12, !0), Q = w(t, "inversePan", 12, void 0), K = w(t, "zoomStep", 12, void 0), ce = w(t, "style", 12, ""), ue = w(t, "class", 12, "");
  const ye = 200, se = 150, {
    nodes: _e,
    nodeLookup: xe,
    viewport: Oe,
    width: le,
    height: J,
    flowId: Me,
    panZoom: F,
    translateExtent: Ae
  } = et(), Ke = D() === void 0 ? void 0 : qa(D()), qe = qa(q()), pe = qa(R()), ge = (
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
      ee(Ve, l().size > 0 ? Lc(ei(l(), { filter: (de) => !de.hidden }), f(v)) : f(v)), c();
    }
  ), be(() => re(I()), () => {
    ee(p, I() ?? ye);
  }), be(() => re(Y()), () => {
    ee(h, Y() ?? se);
  }), be(
    () => (f(Ve), f(p)),
    () => {
      ee(x, f(Ve).width / f(p));
    }
  ), be(
    () => (f(Ve), f(h)),
    () => {
      ee(b, f(Ve).height / f(h));
    }
  ), be(
    () => (f(x), f(b)),
    () => {
      ee($, Math.max(f(x), f(b)));
    }
  ), be(() => (f($), f(p)), () => {
    ee(g, f($) * f(p));
  }), be(
    () => (f($), f(h)),
    () => {
      ee(_, f($) * f(h));
    }
  ), be(() => f($), () => {
    ee(m, 5 * f($));
  }), be(
    () => (f(Ve), f(g), f(m)),
    () => {
      ee(k, f(Ve).x - (f(g) - f(Ve).width) / 2 - f(m));
    }
  ), be(
    () => (f(Ve), f(_), f(m)),
    () => {
      ee(T, f(Ve).y - (f(_) - f(Ve).height) / 2 - f(m));
    }
  ), be(() => (f(g), f(m)), () => {
    ee(E, f(g) + f(m) * 2);
  }), be(() => (f(_), f(m)), () => {
    ee(H, f(_) + f(m) * 2);
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
        var Le = (st) => {
          var Be = W2();
          Ee(Be, "aria-labelledby", fe);
          let Ze;
          var lt = X(Be);
          {
            var Qt = (yt) => {
              var Ct = Y2();
              Ee(Ct, "id", fe);
              var Pn = X(Ct, !0);
              j(Ct), Te(() => xt(Pn, L())), A(yt, Ct);
            };
            $e(lt, (yt) => {
              L() && yt(Qt);
            });
          }
          var Vt = B(lt);
          Zt(Vt, 1, c, (yt) => yt.id, (yt, Ct) => {
            var Pn = it();
            const rt = /* @__PURE__ */ ke(() => l().get(f(Ct).id));
            var yo = Ce(Pn);
            {
              var er = (Lt) => {
                const wr = /* @__PURE__ */ ke(() => yr(f(rt))), br = /* @__PURE__ */ ke(() => Ke == null ? void 0 : Ke(f(rt))), Lr = /* @__PURE__ */ ke(() => qe(f(rt))), wo = /* @__PURE__ */ ke(() => pe(f(rt)));
                Ld(Lt, mt(
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
                      return f(Lr);
                    },
                    get strokeWidth() {
                      return C();
                    },
                    shapeRendering: ge,
                    get class() {
                      return f(wo);
                    }
                  }
                ));
              };
              $e(yo, (Lt) => {
                f(rt) && Ac(f(rt)) && Lt(er);
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
            Ee(Be, "width", f(p)), Ee(Be, "height", f(h)), Ee(Be, "viewBox", `${f(k) ?? ""} ${f(T) ?? ""} ${f(E) ?? ""} ${f(H) ?? ""}`), Ze = $t(Be, "", Ze, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": P(),
              "--xy-minimap-mask-stroke-width-props": V() ? V() * f($) : void 0
            }), Ee(Qn, "d", `M${f(k) - f(m)},${f(T) - f(m)}h${f(E) + f(m) * 2}v${f(H) + f(m) * 2}h${-f(E) - f(m) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), A(st, Be);
        };
        $e(ln, (st) => {
          u() && st(Le);
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
      return L();
    },
    set ariaLabel(de) {
      L(de), y();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(de) {
      q(de), y();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(de) {
      D(de), y();
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
      return C();
    },
    set nodeStrokeWidth(de) {
      C(de), y();
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
      return P();
    },
    set maskStrokeColor(de) {
      P(de), y();
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
      return Y();
    },
    set height(de) {
      Y(de), y();
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
const au = (e) => Zh(e);
function Jt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: c, panZoom: u, nodes: d, edges: v, domNode: p, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = et(), g = (k) => {
    var T, E;
    const H = G(h), O = au(k) ? k : H.get(k.id), L = O.parentId ? Gh(O.position, O.measured, O.parentId, H, G(x)) : O.position, q = {
      ...O,
      position: L,
      width: ((T = O.measured) == null ? void 0 : T.width) ?? O.width,
      height: ((E = O.measured) == null ? void 0 : E.height) ?? O.height
    };
    return io(q);
  }, _ = (k, T, E = { replace: !1 }) => {
    var H;
    const O = (H = G(h).get(k)) == null ? void 0 : H.internals.userNode;
    if (!O)
      return;
    const L = typeof T == "function" ? T(O) : T;
    E.replace ? d.update((q) => q.map((D) => D.id === k ? au(L) ? L : { ...D, ...L } : D)) : (Object.assign(O, L), d.update((q) => q));
  }, m = (k) => G(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: m,
    getNode: (k) => {
      var T;
      return (T = m(k)) == null ? void 0 : T.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? G(d) : su(G(h), k),
    getEdge: (k) => G(b).get(k),
    getEdges: (k) => k === void 0 ? G(v) : su(G(b), k),
    setZoom: (k, T) => {
      const E = G(u);
      return E ? E.scaleTo(k, { duration: T == null ? void 0 : T.duration }) : Promise.resolve(!1);
    },
    getZoom: () => G(i).zoom,
    setViewport: async (k, T) => {
      const E = G(i), H = G(u);
      return H ? (await H.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => G(i),
    setCenter: async (k, T, E) => {
      const H = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : G(c), O = G(u);
      return O ? (await O.setViewport({
        x: G(a) / 2 - k * H,
        y: G(s) / 2 - T * H,
        zoom: H
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, T) => {
      const E = G(u);
      if (!E)
        return Promise.resolve(!1);
      const H = js(k, G(a), G(s), G(l), G(c), (T == null ? void 0 : T.padding) ?? 0.1);
      return await E.setViewport(H, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, T = !0, E) => {
      const H = Zl(k), O = H ? k : g(k);
      return O ? (E || G(d)).filter((L) => {
        const q = G(h).get(L.id);
        if (!q || !H && L.id === k.id)
          return !1;
        const D = io(q), R = jo(D, O);
        return T && R > 0 || R >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (k, T, E = !0) => {
      const H = Zl(k) ? k : g(k);
      if (!H)
        return !1;
      const O = jo(H, T);
      return E && O > 0 || O >= H.width * H.height;
    },
    deleteElements: async ({ nodes: k = [], edges: T = [] }) => {
      const { nodes: E, edges: H } = await Hc({
        nodesToRemove: k,
        edgesToRemove: T,
        nodes: G(d),
        edges: G(v),
        onBeforeDelete: G(r)
      });
      return E && d.update((O) => O.filter((L) => !E.some(({ id: q }) => q === L.id))), H && v.update((O) => O.filter((L) => !H.some(({ id: q }) => q === L.id))), {
        deletedNodes: E,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, T = { snapToGrid: !0 }) => {
      const E = G(p);
      if (!E)
        return k;
      const H = T.snapToGrid ? G(o) : !1, { x: O, y: L, zoom: q } = G(i), { x: D, y: R } = E.getBoundingClientRect(), S = {
        x: k.x - D,
        y: k.y - R
      };
      return ti(S, [O, L, q], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const T = G(p);
      if (!T)
        return k;
      const { x: E, y: H, zoom: O } = G(i), { x: L, y: q } = T.getBoundingClientRect(), D = Xi(k, [E, H, O]);
      return {
        x: D.x + L,
        y: D.y + q
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
    updateNode: _,
    updateNodeData: (k, T, E) => {
      var H;
      const O = (H = G(h).get(k)) == null ? void 0 : H.internals.userNode;
      if (!O)
        return;
      const L = typeof T == "function" ? T(O) : T;
      O.data = E != null && E.replace ? L : { ...O.data, ...L }, d.update((q) => q);
    },
    getNodesBounds: (k) => {
      const T = G(h), E = G(x);
      return Bh(k, { nodeLookup: T, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: T, nodeId: E }) => {
      var H;
      return Array.from(((H = G($).get(`${E}-${k}-${T ?? null}`)) == null ? void 0 : H.values()) ?? []);
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
var K2 = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Rd(e, t) {
  he(t, !1);
  const [n, r] = ft(), o = () => oe(_, "$nodes", n), i = () => oe(g, "$nodeLookup", n), a = () => oe($, "$viewport", n), s = () => oe(b, "$domNode", n), l = /* @__PURE__ */ ae(), c = /* @__PURE__ */ ae(), u = /* @__PURE__ */ ae();
  let d = w(t, "nodeId", 12, void 0), v = w(t, "position", 12, void 0), p = w(t, "align", 12, void 0), h = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: g, nodes: _ } = et(), { getNodesBounds: m } = Jt(), k = Mr("svelteflow__node_id");
  let T = /* @__PURE__ */ ae(), E = /* @__PURE__ */ ae([]), H = h() !== void 0 ? h() : 10, O = v() !== void 0 ? v() : ze.Top, L = p() !== void 0 ? p() : "center";
  be(
    () => (o(), re(d()), i()),
    () => {
      o();
      const C = Array.isArray(d()) ? d() : [d() || k];
      ee(E, C.reduce(
        (M, N) => {
          const P = i().get(N);
          return P && M.push(P), M;
        },
        []
      ));
    }
  ), be(
    () => (f(E), a()),
    () => {
      const C = m(f(E));
      C && ee(T, f0(C, a(), O, H, L));
    }
  ), be(() => f(E), () => {
    ee(l, f(E).length === 0 ? 1 : Math.max(...f(E).map((C) => (C.internals.z || 5) + 1)));
  }), be(() => o(), () => {
    ee(c, o().filter((C) => C.selected).length);
  }), be(
    () => (re(x()), f(E), f(c)),
    () => {
      ee(u, typeof x() == "boolean" ? x() : f(E).length === 1 && f(E)[0].selected && f(c) === 1);
    }
  ), Tt(), je();
  var q = it(), D = Ce(q);
  {
    var R = (C) => {
      var M = K2();
      let N;
      var P = X(M);
      Ht(P, t, "default", {}), j(M), Nt(M, (V, I) => Fi == null ? void 0 : Fi(V, I), () => ({ domNode: s() })), Te(
        (V) => {
          Ee(M, "data-id", V), N = $t(M, "", N, {
            position: "absolute",
            transform: f(T),
            "z-index": f(l)
          });
        },
        [
          () => f(E).reduce((V, I) => `${V}${I.id} `, "").trim()
        ],
        ke
      ), A(C, M);
    };
    $e(D, (C) => {
      s() && f(u) && f(E) && C(R);
    });
  }
  A(e, q);
  var S = me({
    get nodeId() {
      return d();
    },
    set nodeId(C) {
      d(C), y();
    },
    get position() {
      return v();
    },
    set position(C) {
      v(C), y();
    },
    get align() {
      return p();
    },
    set align(C) {
      p(C), y();
    },
    get offset() {
      return h();
    },
    set offset(C) {
      h(C), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(C) {
      x(C), y();
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
function Dr(e) {
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
class F2 {
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
const G2 = () => {
  const e = Se([]), t = Se([]), n = Se({ x: 250, y: 100, zoom: 1 });
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
}, Ei = G2();
var U2 = /* @__PURE__ */ ie("<button><!></button>");
function nt(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = U2();
  let i;
  var a = X(o);
  return Pr(a, () => n() ?? kt), j(o), Te(() => i = pn(o, i, {
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
var J2 = /* @__PURE__ */ ie("<input>");
function Id(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Dt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = J2();
  kr(r);
  let o;
  Te(() => o = pn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Id, {}, [], [], !0);
var Q2 = /* @__PURE__ */ ie("<input>");
function Mt(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Dt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Q2();
  kr(r);
  let o;
  Te(() => o = pn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Mt, {}, [], [], !0);
var em = /* @__PURE__ */ ie("<textarea></textarea>");
function Pt(e, t) {
  he(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = em();
  z1(o);
  let i;
  return Te(() => i = pn(o, i, {
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
var tm = /* @__PURE__ */ ie('<div role="button"><!></div>'), nm = /* @__PURE__ */ ie("<div></div>");
function qd(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["items", "onChange", "activeIndex"]);
  he(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), a = w(t, "activeIndex", 12, 0);
  function s(u, d) {
    var v;
    a(d), (v = i()) == null || v(u, d);
  }
  je();
  var l = nm();
  let c;
  return Zt(l, 5, o, eo, (u, d, v) => {
    var p = tm();
    Ee(p, "tabindex", v), p.__click = () => s(f(d), v), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = X(p);
    {
      var x = ($) => {
        var g = We();
        Te(() => xt(g, f(d).label)), A($, g);
      }, b = ($) => {
        var g = it(), _ = Ce(g);
        Pr(_, () => f(d).label ?? kt), A($, g);
      };
      $e(h, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    j(p), Te(() => zt(p, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), A(u, p);
  }), j(l), Te(() => c = pn(l, c, {
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
go(["click", "keydown"]);
ve(qd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var rm = (e, t, n) => t(f(n)), om = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, im = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), am = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), sm = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), lm = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), um = /* @__PURE__ */ ie("<div></div>");
const cm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Zd(e, t) {
  he(t, !0), at(e, cm);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => wn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((c) => c !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = um();
  return Zt(a, 21, n, eo, (s, l, c) => {
    var u = lm(), d = X(u);
    Ee(d, "tabindex", c), d.__click = [rm, i, l], d.__keydown = [om, i, l];
    var v = X(d);
    {
      var p = (m) => {
        var k = im(), T = X(k);
        sr(T, {
          get target() {
            return f(l).icon;
          }
        }), j(k), A(m, k);
      };
      $e(v, (m) => {
        f(l).icon && m(p);
      });
    }
    var h = B(v, 2);
    sr(h, {
      get target() {
        return f(l).title;
      }
    });
    var x = B(h, 2);
    j(d);
    var b = B(d, 2);
    {
      var $ = (m) => {
        var k = am(), T = X(k);
        sr(T, {
          get target() {
            return f(l).description;
          }
        }), j(k), A(m, k);
      };
      $e(b, (m) => {
        f(l).description && m($);
      });
    }
    var g = B(b, 2);
    {
      var _ = (m) => {
        var k = sm(), T = X(k);
        sr(T, {
          get target() {
            return f(l).content;
          }
        }), j(k), A(m, k);
      };
      $e(g, (m) => {
        o().includes(f(l).key) && m(_);
      });
    }
    j(u), Te((m) => zt(x, 1, `tf-collapse-item-title-arrow ${m ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), A(s, u);
  }), j(a), Te(() => {
    $t(a, t.style), zt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
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
go(["click", "keydown"]);
ve(Zd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  he(t, !0);
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
var dm = (e, t, n) => t(f(n)), fm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), vm = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), pm = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), gm = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), hm = /* @__PURE__ */ ie("<!> <!>", 1), mm = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), ym = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), wm = /* @__PURE__ */ ie("<div><!></div>");
function gn(e, t) {
  he(t, !0);
  const n = (g, _ = kt) => {
    var m = it(), k = Ce(m);
    Zt(k, 19, _, (T, E) => `${E}_${T.value}`, (T, E) => {
      var H = pm(), O = Ce(H);
      O.__click = [dm, h, E];
      var L = X(O), q = X(L);
      {
        var D = (M) => {
          var N = fm();
          A(M, N);
        };
        $e(q, (M) => {
          f(E).children && f(E).children.length > 0 && M(D);
        });
      }
      j(L);
      var R = B(L, 2);
      sr(R, {
        get target() {
          return f(E).label;
        }
      }), j(O);
      var S = B(O, 2);
      {
        var C = (M) => {
          var N = vm(), P = X(N);
          n(P, () => f(E).children), j(N), A(M, N);
        };
        $e(S, (M) => {
          f(E).children && f(E).children.length > 0 && (s() || c().includes(f(E).value)) && M(C);
        });
      }
      A(T, H);
    }), A(g, m);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), s = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), u = w(t, "placeholder", 7), d = /* @__PURE__ */ Dt(t, [
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
  ]), v = /* @__PURE__ */ Ne(() => {
    const g = [], _ = (m) => {
      for (let k of m)
        i().length > 0 ? i().includes(k.value) && g.push(k) : a().includes(k.value) && g.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), g;
  }), p;
  function h(g) {
    var _;
    p == null || p.hide(), (_ = o()) == null || _(g);
  }
  var x = wm();
  let b;
  var $ = X(x);
  return Ln(
    mo($, {
      floating: (g) => {
        var _ = gm(), m = X(_);
        n(m, r), j(_), A(g, _);
      },
      children: (g, _) => {
        var m = ym();
        let k;
        var T = X(m);
        Zt(
          T,
          23,
          () => f(v),
          (E, H) => `${H}_${E.value}`,
          (E, H, O) => {
            var L = it(), q = Ce(L);
            {
              var D = (S) => {
                var C = it(), M = Ce(C);
                {
                  var N = (P) => {
                    sr(P, {
                      get target() {
                        return f(H).label;
                      }
                    });
                  };
                  $e(M, (P) => {
                    f(O) === 0 && P(N);
                  });
                }
                A(S, C);
              }, R = (S) => {
                var C = hm(), M = Ce(C);
                sr(M, {
                  get target() {
                    return f(H).label;
                  }
                });
                var N = B(M, 2);
                {
                  var P = (V) => {
                    var I = We(",");
                    A(V, I);
                  };
                  $e(N, (V) => {
                    f(O) < f(v).length - 1 && V(P);
                  });
                }
                A(S, C);
              };
              $e(q, (S) => {
                l() ? S(R, !1) : S(D);
              });
            }
            A(E, L);
          },
          (E) => {
            var H = mm(), O = X(H, !0);
            j(H), Te(() => xt(O, u())), A(E, H);
          }
        ), j(T), Re(2), j(m), Te(() => k = pn(m, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), A(g, m);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => p = g,
    () => p
  ), j(x), Te(() => b = pn(x, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), A(e, x), me({
    get items() {
      return r();
    },
    set items(g) {
      r(g), y();
    },
    get onSelect() {
      return o();
    },
    set onSelect(g) {
      o(g), y();
    },
    get value() {
      return i();
    },
    set value(g = []) {
      i(g), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(g = []) {
      a(g), y();
    },
    get expandAll() {
      return s();
    },
    set expandAll(g = !0) {
      s(g), y();
    },
    get multiple() {
      return l();
    },
    set multiple(g = !1) {
      l(g), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(g = []) {
      c(g), y();
    },
    get placeholder() {
      return u();
    },
    set placeholder(g) {
      u(g), y();
    }
  });
}
go(["click"]);
ve(
  gn,
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
const Yo = Math.min, Kr = Math.max, Ji = Math.round, On = (e) => ({
  x: e,
  y: e
}), bm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xm = {
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
function Sr(e) {
  return ["top", "bottom"].includes(Nr(e)) ? "y" : "x";
}
function Gs(e) {
  return Bd(Sr(e));
}
function $m(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = Gs(e), i = Fs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Qi(a)), [a, Qi(a)];
}
function Cm(e) {
  const t = Qi(e);
  return [vs(e), t, vs(t)];
}
function vs(e) {
  return e.replace(/start|end/g, (t) => xm[t]);
}
function _m(e, t, n) {
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
function km(e, t, n, r) {
  const o = ii(e);
  let i = _m(Nr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(vs)))), i;
}
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => bm[t]);
}
function Em(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jd(e) {
  return typeof e != "number" ? Em(e) : {
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
  const i = Sr(t), a = Gs(t), s = Fs(a), l = Nr(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ii(t)) {
    case "start":
      p[a] -= v * (n && c ? -1 : 1);
      break;
    case "end":
      p[a] += v * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Sm = async (e, t, n) => {
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
  } = uu(c, r, l), v = r, p = {}, h = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: g,
      y: _,
      data: m,
      reset: k
    } = await $({
      x: u,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = g ?? u, d = _ ?? d, p = {
      ...p,
      [b]: {
        ...p[b],
        ...m
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (c = k.rects === !0 ? await a.getElementRects({
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
    middlewareData: p
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
    padding: p = 0
  } = oi(t, e), h = jd(p), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = ea(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), $ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, m = ea(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: g,
    strategy: l
  }) : $);
  return {
    top: (b.top - m.top + h.top) / _.y,
    bottom: (m.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - m.left + h.left) / _.x,
    right: (m.right - b.right + h.right) / _.x
  };
}
const Mm = (e) => ({
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
    }, p = Gs(o), h = Fs(p), x = await a.getDimensions(c), b = p === "y", $ = b ? "top" : "left", g = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", m = i.reference[h] + i.reference[p] - v[p] - i.floating[h], k = v[p] - i.reference[p], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let E = T ? T[_] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(T))) && (E = s.floating[_] || i.floating[h]);
    const H = m / 2 - k / 2, O = E / 2 - x[h] / 2 - 1, L = Yo(d[$], O), q = Yo(d[g], O), D = L, R = E - x[h] - q, S = E / 2 - x[h] / 2 + H, C = fs(D, S, R), M = !l.arrow && ii(o) != null && S !== C && i.reference[h] / 2 - (S < D ? L : q) - x[h] / 2 < 0, N = M ? S < D ? S - D : S - R : 0;
    return {
      [p]: v[p] + N,
      data: {
        [p]: C,
        centerOffset: S - C - N,
        ...M && {
          alignmentOffset: N
        }
      },
      reset: M
    };
  }
}), Pm = function(e) {
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
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: x = !0,
        ...b
      } = oi(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Nr(o), g = Sr(s), _ = Nr(s) === s, m = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = v || (_ || !x ? [Qi(s)] : Cm(s)), T = h !== "none";
      !v && T && k.push(...km(s, x, h, m));
      const E = [s, ...k], H = await Xd(t, b), O = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(H[$]), d) {
        const C = $m(o, a, m);
        O.push(H[C[0]], H[C[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: O
      }], !O.every((C) => C <= 0)) {
        var q, D;
        const C = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, M = E[C];
        if (M) {
          var R;
          const P = d === "alignment" ? g !== Sr(M) : !1, V = ((R = L[0]) == null ? void 0 : R.overflows[0]) > 0;
          if (!P || V)
            return {
              data: {
                index: C,
                overflows: L
              },
              reset: {
                placement: M
              }
            };
        }
        let N = (D = L.filter((P) => P.overflows[0] <= 0).sort((P, V) => P.overflows[1] - V.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var S;
              const P = (S = L.filter((V) => {
                if (T) {
                  const I = Sr(V.placement);
                  return I === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((I) => I > 0).reduce((I, Y) => I + Y, 0)]).sort((V, I) => V[1] - I[1])[0]) == null ? void 0 : S[0];
              P && (N = P);
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
async function Tm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Nr(n), s = ii(n), l = Sr(n) === "y", c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = oi(t, e);
  let {
    mainAxis: v,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof h == "number" && (p = s === "end" ? h * -1 : h), l ? {
    x: p * u,
    y: v * c
  } : {
    x: v * c,
    y: p * u
  };
}
const Vm = function(e) {
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
      } = t, l = await Tm(t, e);
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
}, Om = function(e) {
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
              y: g
            } = b;
            return {
              x: $,
              y: g
            };
          }
        },
        ...l
      } = oi(e, t), c = {
        x: n,
        y: r
      }, u = await Xd(t, l), d = Sr(Nr(o)), v = Bd(d);
      let p = c[v], h = c[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", g = p + u[b], _ = p - u[$];
        p = fs(g, p, _);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", g = h + u[b], _ = h - u[$];
        h = fs(g, h, _);
      }
      const x = s.fn({
        ...t,
        [v]: p,
        [d]: h
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
function ho(e) {
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
function Nm(e) {
  return ["table", "td", "th"].includes(ho(e));
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
function Hm(e) {
  let t = gr(e);
  for (; An(t) && !so(t); ) {
    if (Us(t))
      return t;
    if ($a(t))
      return null;
    t = gr(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(ho(e));
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
function gr(e) {
  if (ho(e) === "html")
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
  const t = gr(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && ai(t) ? t : Wd(t);
}
function Kd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Wd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (ps(a), t.concat(a, a.visualViewport || [], ai(o) ? o : [], [])) : t.concat(o, Kd(o, []));
}
function ps(e) {
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
const zm = /* @__PURE__ */ On(0);
function Ud(e) {
  const t = an(e);
  return !Js() || !t.visualViewport ? zm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Dm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Gd(e);
  let a = On(1);
  t && (r ? _n(r) && (a = Fr(r)) : a = Fr(e));
  const s = Dm(i, n, r) ? Ud(i) : On(0);
  let l = (o.left + s.x) / a.x, c = (o.top + s.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = an(i), p = r && _n(r) ? an(r) : r;
    let h = v, x = ps(h);
    for (; x && r && p !== h; ) {
      const b = Fr(x), $ = x.getBoundingClientRect(), g = kn(x), _ = $.left + (x.clientLeft + parseFloat(g.paddingLeft)) * b.x, m = $.top + (x.clientTop + parseFloat(g.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, d *= b.y, l += _, c += m, h = an(x), x = ps(h);
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
function Lm(e) {
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
  if ((d || !d && !i) && ((ho(r) !== "body" || ai(a)) && (l = Ca(r)), An(r))) {
    const p = Wo(r);
    c = Fr(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const v = a && !d && !i ? Jd(a, l, !0) : On(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + v.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + v.y
  };
}
function Am(e) {
  return Array.from(e.getClientRects());
}
function Rm(e) {
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
function Im(e, t) {
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
function qm(e, t) {
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
    r = Im(e, n);
  else if (t === "document")
    r = Rm(Un(e));
  else if (_n(t))
    r = qm(t, n);
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
  const n = gr(e);
  return n === t || !_n(n) || so(n) ? !1 : kn(n).position === "fixed" || Qd(n, t);
}
function Zm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Kd(e, []).filter((s) => _n(s) && ho(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? gr(e) : e;
  for (; _n(a) && !so(a); ) {
    const s = kn(a), l = Us(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ai(a) && !l && Qd(e, a)) ? r = r.filter((c) => c !== a) : o = s, a = gr(a);
  }
  return t.set(e, r), r;
}
function Bm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? $a(t) ? [] : Zm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, c) => {
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
function jm(e) {
  const {
    width: t,
    height: n
  } = Fd(e);
  return {
    width: t,
    height: n
  };
}
function Xm(e, t, n) {
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
    if ((ho(t) !== "body" || ai(o)) && (s = Ca(t)), r) {
      const p = Wo(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
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
    let o = gr(e);
    for (; o && !so(o); ) {
      if (_n(o) && !Za(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = fu(e, t);
  for (; r && Nm(r) && Za(r); )
    r = fu(r, t);
  return r && so(r) && Za(r) && !Us(r) ? n : r || Hm(e) || n;
}
const Ym = async function(e) {
  const t = this.getOffsetParent || ef, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Xm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Wm(e) {
  return kn(e).direction === "rtl";
}
const Km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lm,
  getDocumentElement: Un,
  getClippingRect: Bm,
  getOffsetParent: ef,
  getElementRects: Ym,
  getClientRects: Am,
  getDimensions: jm,
  getScale: Fr,
  isElement: _n,
  isRTL: Wm
}, Fm = Vm, Gm = Om, Um = Pm, Jm = Mm, Qm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Km,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Sm(e, t, {
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
    Qm(e, c, {
      placement: r,
      middleware: [
        Fm(o),
        // 手动偏移配置
        Um(i),
        //自动翻转
        Gm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Jm({ element: u })] : []
      ]
    }).then(({ x: $, y: g, placement: _, middlewareData: m }) => {
      if (Object.assign(c.style, {
        left: `${$}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: T } = m.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(u.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
        });
      }
    });
  }
  let v = !1;
  function p() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (u.style.display = "block"), v = !0, d();
  }
  function h() {
    c.style.display = "none", l && (u.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? h() : p();
  }
  function b($) {
    c.contains($.target) || h();
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
      h();
    },
    isVisible() {
      return v;
    }
  };
};
var ty = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mo(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, a, s;
  hn(() => (s = ey({
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
  var c = ty(), u = X(c), d = X(u);
  Pr(d, n), j(u), Ln(u, (h) => i = h, () => i);
  var v = B(u, 2), p = X(v);
  return Pr(p, r), j(v), Ln(v, (h) => a = h, () => a), j(c), A(e, c), me({
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
ve(mo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function tt(e, t) {
  he(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var a = it(), s = Ce(a);
  return j1(s, () => `h${r()}`, !1, (l, c) => {
    let u;
    Te(() => u = pn(l, u, {
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
  he(t, !0), at(e, ry);
  const n = /* @__PURE__ */ Dt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
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
}, hr = () => Mr("tinyflow_options");
function Et() {
  return Mr("svelteflow__node_id");
}
var ay = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), sy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ly = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), uy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), cy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, dy = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), fy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), vy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), py = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const gy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Mn(e, t) {
  he(t, !0), at(e, gy);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), a = w(t, "children", 7), s = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), c = w(t, "allowDelete", 7, !0), u = w(t, "allowSetting", 7, !0), d = w(t, "allowSettingOfCondition", 7, !0), v = w(t, "showSourceHandle", 7, !0), p = w(t, "showTargetHandle", 7, !0), h = w(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Jt(), g = /* @__PURE__ */ Ne(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: _ } = oy(), { copyNode: m } = iy(), k = hr(), T = () => {
    var V;
    (V = k.onNodeExecute) == null || V.call(k, $(r()));
  };
  let E = Et();
  var H = py(), O = Ce(H);
  {
    var L = (V) => {
      Rd(V, {
        get position() {
          return ze.Top;
        },
        align: "end",
        children: (I, Y) => {
          var W = vy(), U = X(W);
          {
            var Q = (xe) => {
              nt(xe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
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
                onclick: T,
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
                  var le = dy(), J = X(le), Me = B(X(J));
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
                  var F = B(J, 2), Ae = B(X(F));
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
                      var Ve = uy(), ct = B(X(Ve));
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
                  var pe = B(Ke, 2), ge = B(X(pe), 2);
                  kr(ge), ge.__change = [cy, b, E], j(pe), j(le), Te(() => K1(ge, !!n().async)), A(Oe, le);
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
      (s() || l() || c()) && V(L);
    });
  }
  var q = B(O, 2), D = B(X(q), 2), R = X(D);
  Zd(R, {
    get items() {
      return f(g);
    },
    activeKeys: x,
    onChange: (V, I) => {
      var Y;
      b(r(), { expand: I == null ? void 0 : I.includes("key") }), (Y = h()) == null || Y(I != null && I.includes("key") ? "key" : "");
    }
  }), j(D), j(q);
  var S = B(q, 2);
  {
    var C = (V) => {
      pr(V, {
        type: "target",
        get position() {
          return ze.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    $e(S, (V) => {
      p() && V(C);
    });
  }
  var M = B(S, 2);
  {
    var N = (V) => {
      pr(V, {
        type: "source",
        get position() {
          return ze.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    $e(M, (V) => {
      v() && V(N);
    });
  }
  var P = B(M, 2);
  return Pr(P, () => i() ?? kt), A(e, H), me({
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
      return p();
    },
    set showTargetHandle(V = !0) {
      p(V), y();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(V) {
      h(V), y();
    }
  });
}
go(["change"]);
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
], hy = [
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
  he(t, !0), at(e, by);
  const [n, r] = ft(), o = () => oe(f(l), "$node", n), i = w(t, "parameter", 7), a = w(t, "index", 7);
  let s = Et(), l = /* @__PURE__ */ Ne(() => Dr(s)), c = /* @__PURE__ */ Ne(() => {
    var O, L;
    return {
      ...i(),
      ...(L = (O = o()) == null ? void 0 : O.data) == null ? void 0 : L.parameters[a()]
    };
  });
  const { updateNodeData: u } = Jt(), d = (O, L) => {
    u(s, (q) => {
      let D = q.data.parameters;
      return D[a()][O] = L, { parameters: D };
    });
  }, v = (O) => {
    const L = O.target.value;
    d("name", L);
  }, p = (O) => {
    const L = O.target.checked;
    d("required", L);
  }, h = (O) => {
    const L = O.value;
    L && d("dataType", L);
  };
  let x;
  const b = () => {
    u(s, (O) => {
      let L = O.data.parameters;
      return L.splice(a(), 1), { parameters: [...L] };
    }), x == null || x.hide();
  };
  var $ = wy(), g = Ce($), _ = X(g);
  Mt(_, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), j(g);
  var m = B(g, 2), k = X(m);
  Id(k, {
    get checked() {
      return f(c).required;
    },
    onchange: p
  }), j(m);
  var T = B(m, 2), E = X(T);
  Ln(
    mo(E, {
      placement: "bottom",
      floating: (O) => {
        var L = my(), q = X(L), D = B(X(q));
        const R = /* @__PURE__ */ Ne(() => f(c).dataType ? [f(c).dataType] : ["String"]);
        gn(D, {
          items: tf,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(R);
          }
        }), j(q);
        var S = B(q, 2), C = B(X(S));
        Pt(C, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(c).defaultValue;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("defaultValue", Y);
          }
        }), j(S);
        var M = B(S, 2), N = B(X(M));
        Pt(N, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(c).description;
          },
          onchange: (I) => {
            const Y = I.target.value;
            d("description", Y);
          }
        }), j(M);
        var P = B(M, 2), V = X(P);
        nt(V, {
          onclick: b,
          children: (I, Y) => {
            Re();
            var W = We("删除");
            A(I, W);
          },
          $$slots: { default: !0 }
        }), j(P), j(L), A(O, L);
      },
      children: (O, L) => {
        nt(O, {
          class: "input-btn-more",
          children: (q, D) => {
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
  ), j(T), A(e, $);
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
  he(t, !0), at(e, _y);
  const [n, r] = ft(), o = () => oe(f(a), "$node", n);
  let i = Et(), a = /* @__PURE__ */ Ne(() => Dr(i)), s = /* @__PURE__ */ Ne(() => {
    var v, p;
    return [...((p = (v = o()) == null ? void 0 : v.data) == null ? void 0 : p.parameters) || []];
  });
  var l = Cy(), c = X(l);
  {
    var u = (v) => {
      var p = xy();
      Re(4), A(v, p);
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
    (v, p, h) => {
      nf(v, {
        get parameter() {
          return f(p);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var p = $y();
      A(v, p);
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
var ky = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Ey = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const My = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function of(e, t) {
  he(t, !0), at(e, My);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
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
      var l = Sy(), c = Ce(l), u = X(c);
      tt(u, {
        level: 3,
        children: (p, h) => {
          Re();
          var x = We("输入参数");
          A(p, x);
        },
        $$slots: { default: !0 }
      });
      var d = B(u, 2);
      nt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, h) => {
          var x = Ey();
          A(p, x);
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
  const t = Et(), n = Dr(t), { nodes: r, edges: o } = et();
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
  he(t, !0), at(e, Oy);
  const [n, r] = ft(), o = () => oe(f(u), "$node", n), i = () => oe(_, "$selectItems", n);
  hn(() => {
    f(d).refType || b({ value: "ref" });
  });
  const a = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let c = Et(), u = /* @__PURE__ */ Ne(() => Dr(c)), d = /* @__PURE__ */ Ne(() => {
    var C;
    return {
      ...a(),
      ...(C = o()) == null ? void 0 : C.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Jt(), p = (C, M) => {
    v(c, (N) => {
      let P = N.data[l()];
      return P[s()] = { ...P[s()], [C]: M }, { [l()]: P };
    });
  }, h = (C, M) => {
    const N = M.target.value;
    p(C, N);
  }, x = (C) => {
    const M = C.value;
    p("ref", M);
  }, b = (C) => {
    const M = C.value;
    p("refType", M);
  };
  let $;
  const g = () => {
    v(c, (C) => {
      let M = C.data[l()];
      return M.splice(s(), 1), { [l()]: [...M] };
    }), $ == null || $.hide();
  }, _ = Py();
  var m = Vy(), k = Ce(m), T = X(k);
  const E = /* @__PURE__ */ Ne(() => f(d).nameDisabled === !0);
  Mt(T, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(E);
    },
    oninput: (C) => h("name", C)
  }), j(k);
  var H = B(k, 2), O = X(H);
  {
    var L = (C) => {
      Mt(C, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => h("value", M)
      });
    }, q = (C, M) => {
      {
        var N = (P) => {
          const V = /* @__PURE__ */ Ne(() => [f(d).ref]);
          gn(P, {
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
          C,
          (P) => {
            f(d).refType !== "input" && P(N);
          },
          M
        );
      }
    };
    $e(O, (C) => {
      f(d).refType === "fixed" ? C(L) : C(q, !1);
    });
  }
  j(H);
  var D = B(H, 2), R = X(D);
  Ln(
    mo(R, {
      placement: "bottom",
      floating: (C) => {
        var M = Ty(), N = X(M), P = B(X(N));
        const V = /* @__PURE__ */ Ne(() => f(d).refType ? [f(d).refType] : []);
        gn(P, {
          items: hy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(V);
          },
          onSelect: b
        }), j(N);
        var I = B(N, 2), Y = B(X(I));
        Pt(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ce) => {
            h("defaultValue", ce);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), j(I);
        var W = B(I, 2), U = B(X(W));
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ce) => {
            h("description", ce);
          },
          get value() {
            return f(d).description;
          }
        }), j(W);
        var Q = B(W, 2), K = X(Q);
        nt(K, {
          onclick: g,
          children: (ce, ue) => {
            Re();
            var ye = We("删除");
            A(ce, ye);
          },
          $$slots: { default: !0 }
        }), j(Q), j(M), A(C, M);
      },
      children: (C, M) => {
        _a(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => $ = C,
    () => $
  ), j(D), A(e, m);
  var S = me({
    get parameter() {
      return a();
    },
    set parameter(C) {
      a(C), y();
    },
    get index() {
      return s();
    },
    set index(C) {
      s(C), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(C) {
      l(C), y();
    }
  });
  return r(), S;
}
ve(sf, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Ny = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Hy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), zy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Dy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rn(e, t) {
  he(t, !0), at(e, Dy);
  const [n, r] = ft(), o = () => oe(f(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), a = w(t, "dataKeyName", 7, "parameters");
  let s = Et(), l = /* @__PURE__ */ Ne(() => Dr(s)), c = /* @__PURE__ */ Ne(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var u = zy(), d = X(u);
  {
    var v = (x) => {
      var b = Ny();
      Re(4), A(x, b);
    };
    $e(d, (x) => {
      f(c).length !== 0 && x(v);
    });
  }
  var p = B(d, 2);
  Zt(
    p,
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
      var b = Hy(), $ = X(b, !0);
      j(b), Te(() => xt($, i())), A(x, b);
    }
  ), j(u), A(e, u);
  var h = me({
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
  return r(), h;
}
ve(rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ay = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function lf(e, t) {
  he(t, !0), at(e, Iy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
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
        var s = Ly();
        A(a, s);
      },
      children: (a, s) => {
        var l = Ry(), c = Ce(l), u = X(c);
        tt(u, {
          level: 3,
          children: (p, h) => {
            Re();
            var x = We("输出参数");
            A(p, x);
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
          children: (p, h) => {
            var x = Ay();
            A(p, x);
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
  he(t, !0), at(e, Xy);
  const [n, r] = ft(), o = () => oe(f(c), "$node", n), i = w(t, "parameter", 7), a = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = Et(), c = /* @__PURE__ */ Ne(() => Dr(l)), u = /* @__PURE__ */ Ne(() => {
    var N;
    let P = (N = o()) == null ? void 0 : N.data[s()], V;
    if (P && a().length > 0) {
      let I = P;
      for (let Y = 0; Y < a().length; Y++) {
        const W = a()[Y];
        Y == a().length - 1 ? V = I[W] : I = I[W].children;
      }
    }
    return { ...i(), ...V };
  });
  const { updateNodeData: d } = Jt(), v = (N, P) => {
    d(l, (V) => {
      const I = V.data[s()];
      if (I && a().length > 0) {
        let Y = I;
        for (let W = 0; W < a().length; W++) {
          const U = a()[W];
          W == a().length - 1 ? Y[U] = { ...Y[U], [N]: P } : Y = Y[U].children;
        }
      }
      return {
        [s()]: [...Ba(I)]
      };
    });
  }, p = (N, P) => {
    const V = P.target.value;
    v(N, V);
  }, h = (N) => {
    const P = N.value;
    v("dataType", P);
  };
  let x;
  const b = () => {
    d(l, (N) => {
      let P = N.data[s()];
      if (P && a().length > 0) {
        let V = P;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? V.splice(Y, 1) : V = V[Y].children;
        }
      }
      return {
        [s()]: [...Ba(P)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (N) => {
      let P = N.data[s()];
      if (P && a().length > 0) {
        let V = P;
        for (let I = 0; I < a().length; I++) {
          const Y = a()[I];
          I == a().length - 1 ? V[Y].children ? V[Y].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : V[Y].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : V = V[Y].children;
        }
      }
      return {
        [s()]: [...Ba(P)]
      };
    });
  };
  var g = jy(), _ = Ce(g), m = X(_);
  {
    var k = (N) => {
      var P = it(), V = Ce(P);
      Zt(V, 17, a, eo, (I, Y) => {
        Re();
        var W = We(" ");
        A(I, W);
      }), A(N, P);
    };
    $e(m, (N) => {
      a().length > 1 && N(k);
    });
  }
  var T = B(m, 2);
  const E = /* @__PURE__ */ Ne(() => f(u).nameDisabled === !0);
  Mt(T, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: (N) => {
      p("name", N);
    },
    get disabled() {
      return f(E);
    }
  }), j(_);
  var H = B(_, 2), O = X(H);
  const L = /* @__PURE__ */ Ne(() => f(u).dataType ? [f(u).dataType] : []), q = /* @__PURE__ */ Ne(() => f(u).dataTypeDisabled === !0);
  gn(O, {
    items: tf,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(L);
    },
    get disabled() {
      return f(q);
    },
    onSelect: h
  });
  var D = B(O, 2);
  {
    var R = (N) => {
      nt(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (P, V) => {
          var I = qy();
          A(P, I);
        },
        $$slots: { default: !0 }
      });
    };
    $e(D, (N) => {
      (f(u).dataType === "Object" || f(u).dataType === "Array") && f(u).addChildDisabled !== !0 && N(R);
    });
  }
  j(H);
  var S = B(H, 2), C = X(S);
  Ln(
    mo(C, {
      placement: "bottom",
      floating: (N) => {
        var P = By(), V = X(P), I = B(X(V));
        const Y = /* @__PURE__ */ Ne(() => f(u).defaultValue || "");
        Pt(I, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(Y);
          },
          onchange: (ue) => {
            p("defaultValue", ue);
          }
        }), j(V);
        var W = B(V, 2), U = B(X(W));
        const Q = /* @__PURE__ */ Ne(() => f(u).description || "");
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (ue) => {
            p("description", ue);
          }
        }), j(W);
        var K = B(W, 2);
        {
          var ce = (ue) => {
            var ye = Zy(), se = X(ye);
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
        j(P), A(N, P);
      },
      children: (N, P) => {
        _a(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => x = N,
    () => x
  ), j(S), A(e, g);
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
  he(t, !0), at(e, Gy);
  const [n, r] = ft(), o = () => oe(f(c), "$node", n), i = (b, $ = kt, g = kt) => {
    var _ = it(), m = Ce(_);
    Zt(
      m,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, T, E) => {
        var H = Yy(), O = Ce(H);
        const L = /* @__PURE__ */ Ne(() => [...g(), f(E)]);
        uf(O, {
          get parameter() {
            return f(T);
          },
          get position() {
            return f(L);
          },
          get dataKeyName() {
            return s();
          }
        });
        var q = B(O, 2);
        {
          var D = (R) => {
            var S = /* @__PURE__ */ ke(() => [...g(), f(E)]);
            i(R, () => f(T).children, () => f(S));
          };
          $e(q, (R) => {
            f(T).children && R(D);
          });
        }
        A(k, H);
      },
      (k) => {
        var T = it(), E = Ce(T);
        {
          var H = (O) => {
            var L = Wy(), q = X(L, !0);
            j(L), Te(() => xt(q, a())), A(O, L);
          };
          $e(E, (O) => {
            g().length === 0 && O(H);
          });
        }
        A(k, T);
      }
    ), A(b, _);
  }, a = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = Et(), c = /* @__PURE__ */ Ne(() => Dr(l)), u = /* @__PURE__ */ Ne(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Fy(), v = X(d);
  {
    var p = (b) => {
      var $ = Ky();
      Re(4), A(b, $);
    };
    $e(v, (b) => {
      f(u).length !== 0 && b(p);
    });
  }
  var h = B(v, 2);
  i(h, () => f(u) || [], () => []), j(d), A(e, d);
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
  he(t, !0), at(e, ow);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Rt(wn([]));
  hn(async () => {
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
        var v = rw(), p = Ce(v), h = X(p);
        tt(h, {
          level: 3,
          children: (J, Me) => {
            Re();
            var F = We("输入参数");
            A(J, F);
          },
          $$slots: { default: !0 }
        });
        var x = B(h, 2);
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
        }), j(p);
        var b = B(p, 2);
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
        var g = B($, 4), _ = X(g);
        const m = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        gn(_, {
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
        var k = B(_, 2);
        _a(k, {}), j(g);
        var T = B(g, 4), E = X(T), H = X(E), O = X(H);
        j(H);
        var L = B(H, 2);
        kr(L), L.__input = [Qy, l, o], j(E), j(T);
        var q = B(T, 2), D = X(q), R = X(D), S = X(R);
        j(R);
        var C = B(R, 2);
        kr(C), C.__input = [ew, l, o], j(D), j(q);
        var M = B(q, 2), N = X(M), P = X(N), V = X(P);
        j(P);
        var I = B(P, 2);
        kr(I), I.__input = [tw, l, o], j(N), j(M);
        var Y = B(M, 4), W = X(Y);
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
        }), j(Y);
        var Q = B(Y, 4), K = X(Q);
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
        var ue = B(Q, 2), ye = X(ue);
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
        gn(se, {
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
          xt(O, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Oa(L, n().temperature ?? 0.5), xt(S, `Top P: ${n().topP ?? 0.9 ?? ""}`), Oa(C, n().topP ?? 0.9), xt(V, `Top K: ${n().topK ?? 50 ?? ""}`), Oa(I, n().topK ?? 50);
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
go(["input"]);
ve(cf, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), aw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function df(e, t) {
  he(t, !0), at(e, uw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  hn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = Et(), { addParameter: i } = qn(), { updateNodeData: a } = Jt(), s = [
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
        var u = lw(), d = Ce(u), v = X(d);
        tt(v, {
          level: 3,
          children: (L, q) => {
            Re();
            var D = We("输入参数");
            A(L, D);
          },
          $$slots: { default: !0 }
        });
        var p = B(v, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, q) => {
            var D = aw();
            A(L, D);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = B(d, 2);
        rn(h, {});
        var x = B(h, 2);
        tt(x, {
          level: 3,
          mt: "10px",
          children: (L, q) => {
            Re();
            var D = We("代码");
            A(L, D);
          },
          $$slots: { default: !0 }
        });
        var b = B(x, 4), $ = X(b);
        const g = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        gn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (L) => {
            const q = L.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return f(g);
          }
        }), j(b);
        var _ = B(b, 4), m = X(_);
        const k = /* @__PURE__ */ Ne(() => n().code || "");
        Pt(m, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (L) => {
            a(o, () => ({ code: L.target.value }));
          },
          get value() {
            return f(k);
          }
        }), j(_);
        var T = B(_, 2), E = X(T);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (L, q) => {
            Re();
            var D = We("输出参数");
            A(L, D);
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
          children: (L, q) => {
            var D = sw();
            A(L, D);
          },
          $$slots: { default: !0 }
        }), j(T);
        var O = B(T, 2);
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
  he(t, !0), at(e, vw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), { updateNodeData: a } = Jt();
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
        var c = fw(), u = Ce(c), d = X(u);
        tt(d, {
          level: 3,
          children: (k, T) => {
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
          children: (k, T) => {
            var E = dw();
            A(k, E);
          },
          $$slots: { default: !0 }
        }), j(u);
        var p = B(u, 2);
        rn(p, {});
        var h = B(p, 2);
        tt(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, T) => {
            Re();
            var E = We("模板内容");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var x = B(h, 2), b = X(x);
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
        var g = B(x, 2), _ = X(g);
        tt(_, {
          level: 3,
          mt: "10px",
          children: (k, T) => {
            Re();
            var E = We("输出参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        }), j(g);
        var m = B(g, 2);
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
var pw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), gw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), ww = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), $w = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function vf(e, t) {
  he(t, !0), at(e, kw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  hn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Et(), { addParameter: a } = qn(), { updateNodeData: s } = Jt();
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = pw();
        A(l, c);
      },
      children: (l, c) => {
        var u = _w(), d = Ce(u), v = X(d);
        tt(v, {
          level: 3,
          children: (pe, ge) => {
            Re();
            var fe = We("输入参数");
            A(pe, fe);
          },
          $$slots: { default: !0 }
        });
        var p = B(v, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (pe, ge) => {
            var fe = gw();
            A(pe, fe);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = B(d, 2);
        rn(h, {});
        var x = B(h, 2);
        tt(x, {
          level: 3,
          mt: "10px",
          children: (pe, ge) => {
            Re();
            var fe = We("URL 地址");
            A(pe, fe);
          },
          $$slots: { default: !0 }
        });
        var b = B(x, 2), $ = X(b), g = X($);
        const _ = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        gn(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (pe) => {
            const ge = pe.value;
            s(i, () => ({ method: ge }));
          },
          get value() {
            return f(_);
          }
        }), j($);
        var m = B($, 2), k = X(m);
        const T = /* @__PURE__ */ Ne(() => n().url || "");
        Mt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (pe) => {
            s(i, () => ({ url: pe.target.value }));
          },
          get value() {
            return f(T);
          }
        }), j(m), j(b);
        var E = B(b, 2), H = X(E);
        tt(H, {
          level: 3,
          children: (pe, ge) => {
            Re();
            var fe = We("Http 头信息");
            A(pe, fe);
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
          children: (pe, ge) => {
            var fe = hw();
            A(pe, fe);
          },
          $$slots: { default: !0 }
        }), j(E);
        var L = B(E, 2);
        rn(L, { dataKeyName: "headers" });
        var q = B(L, 2);
        tt(q, {
          level: 3,
          mt: "10px",
          children: (pe, ge) => {
            Re();
            var fe = We("Body");
            A(pe, fe);
          },
          $$slots: { default: !0 }
        });
        var D = B(q, 2), R = X(D), S = X(R);
        const C = /* @__PURE__ */ Ne(() => !n().bodyType);
        Mt(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(C);
          },
          onchange: (pe) => {
            var ge;
            (ge = pe.target) != null && ge.checked && s(i, { bodyType: "" });
          }
        }), Re(), j(R);
        var M = B(R, 2), N = X(M);
        const P = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        Mt(N, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(P);
          },
          onchange: (pe) => {
            var ge;
            (ge = pe.target) != null && ge.checked && s(i, { bodyType: "form-data" });
          }
        }), Re(), j(M);
        var V = B(M, 2), I = X(V);
        const Y = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        Mt(I, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(Y);
          },
          onchange: (pe) => {
            var ge;
            (ge = pe.target) != null && ge.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Re(), j(V);
        var W = B(V, 2), U = X(W);
        const Q = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        Mt(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(Q);
          },
          onchange: (pe) => {
            var ge;
            (ge = pe.target) != null && ge.checked && s(i, { bodyType: "json" });
          }
        }), Re(), j(W);
        var K = B(W, 2), ce = X(K);
        const ue = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        Mt(ce, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ue);
          },
          onchange: (pe) => {
            var ge;
            (ge = pe.target) != null && ge.checked && s(i, { bodyType: "raw" });
          }
        }), Re(), j(K), j(D);
        var ye = B(D, 2);
        {
          var se = (pe) => {
            var ge = yw(), fe = Ce(ge), Ve = X(fe);
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
            rn(vt, { dataKeyName: "formData" }), A(pe, ge);
          };
          $e(ye, (pe) => {
            n().bodyType === "form-data" && pe(se);
          });
        }
        var _e = B(ye, 2);
        {
          var xe = (pe) => {
            var ge = bw(), fe = Ce(ge), Ve = X(fe);
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
            rn(vt, { dataKeyName: "formUrlencoded" }), A(pe, ge);
          };
          $e(_e, (pe) => {
            n().bodyType === "x-www-form-urlencoded" && pe(xe);
          });
        }
        var Oe = B(_e, 2);
        {
          var le = (pe) => {
            var ge = xw(), fe = X(ge);
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
            }), j(ge), A(pe, ge);
          };
          $e(Oe, (pe) => {
            n().bodyType === "json" && pe(le);
          });
        }
        var J = B(Oe, 2);
        {
          var Me = (pe) => {
            var ge = $w(), fe = X(ge);
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
            }), j(ge), A(pe, ge);
          };
          $e(J, (pe) => {
            n().bodyType === "raw" && pe(Me);
          });
        }
        var F = B(J, 2), Ae = X(F);
        tt(Ae, {
          level: 3,
          mt: "10px",
          children: (pe, ge) => {
            Re();
            var fe = We("输出参数");
            A(pe, fe);
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
          children: (pe, ge) => {
            var fe = Cw();
            A(pe, fe);
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
var Ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function pf(e, t) {
  he(t, !0), at(e, Pw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Rt(wn([]));
  hn(async () => {
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
        var u = Ew();
        A(c, u);
      },
      children: (c, u) => {
        var d = Mw(), v = Ce(d), p = X(v);
        tt(p, {
          level: 3,
          children: (D, R) => {
            Re();
            var S = We("输入参数");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var h = B(p, 2);
        nt(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, R) => {
            var S = Sw();
            A(D, S);
          },
          $$slots: { default: !0 }
        }), j(v);
        var x = B(v, 2);
        rn(x, {});
        var b = B(x, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (D, R) => {
            Re();
            var S = We("知识库设置");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), g = X($);
        const _ = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        gn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const R = D.value;
            l(o, () => ({ knowledgeId: R }));
          },
          get value() {
            return f(_);
          }
        }), j($);
        var m = B($, 4), k = X(m);
        Mt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const R = D.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), j(m);
        var T = B(m, 4), E = X(T);
        const H = /* @__PURE__ */ Ne(() => n().limit || "");
        Mt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const R = D.target.value;
            l(o, () => ({ limit: R }));
          },
          get value() {
            return f(H);
          }
        }), j(T);
        var O = B(T, 2), L = X(O);
        tt(L, {
          level: 3,
          mt: "10px",
          children: (D, R) => {
            Re();
            var S = We("输出参数");
            A(D, S);
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
ve(pf, { data: {} }, [], [], !0);
var Tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Vw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  he(t, !0), at(e, Nw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Rt(wn([]));
  hn(async () => {
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
        var d = Ow(), v = Ce(d), p = X(v);
        tt(p, {
          level: 3,
          children: (q, D) => {
            Re();
            var R = We("输入参数");
            A(q, R);
          },
          $$slots: { default: !0 }
        });
        var h = B(p, 2);
        nt(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, D) => {
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
          children: (q, D) => {
            Re();
            var R = We("搜索引擎设置");
            A(q, R);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), g = X($);
        const _ = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : []);
        gn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const D = q.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return f(_);
          }
        }), j($);
        var m = B($, 4), k = X(m);
        Mt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const D = q.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), j(m);
        var T = B(m, 4), E = X(T);
        Mt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const D = q.target.value;
            l(o, () => ({ limit: D }));
          }
        }), j(T);
        var H = B(T, 2), O = X(H);
        tt(O, {
          level: 3,
          mt: "10px",
          children: (q, D) => {
            Re();
            var R = We("输出参数");
            A(q, R);
          },
          $$slots: { default: !0 }
        }), j(H);
        var L = B(H, 2);
        Jn(L, {}), A(c, d);
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
var Hw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), zw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Lw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function hf(e, t) {
  he(t, !0), at(e, Lw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
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
        pr(a, {
          type: "source",
          get position() {
            return ze.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Dw(), c = Ce(l), u = X(c);
        tt(u, {
          level: 3,
          children: (b, $) => {
            Re();
            var g = We("循环变量");
            A(b, g);
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
            var g = zw();
            A(b, g);
          },
          $$slots: { default: !0 }
        }), j(c);
        var v = B(c, 2);
        rn(v, {});
        var p = B(v, 2), h = X(p);
        tt(h, {
          level: 3,
          mt: "10px",
          children: (b, $) => {
            Re();
            var g = We("输出参数");
            A(b, g);
          },
          $$slots: { default: !0 }
        }), j(p);
        var x = B(p, 2);
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
ve(hf, { data: {} }, [], [], !0);
const Aw = {
  startNode: of,
  codeNode: df,
  llmNode: cf,
  templateNode: ff,
  httpNode: vf,
  knowledgeNode: pf,
  searchEngineNode: gf,
  loopNode: hf,
  endNode: lf
};
var Rw = /* @__PURE__ */ ie("<!> ", 1);
function gs(e, t) {
  he(t, !0);
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
    get "data-node-type"() {
      return o();
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
  gs,
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
  he(t, !0);
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
  ], a = [], s = hr(), l = s.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((g, _) => (l[g].sortNo || 0) - (l[_].sortNo || 0));
    for (let g of $)
      l[g].group === "base" ? o.push({ type: g, ...l[g] }) : a.push({
        icon: l[g].icon,
        title: l[g].title,
        type: g
      });
    o.sort((g, _) => (g.sortNo || 0) - (_.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const $ = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray($)) {
      for (let g of $)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === g) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var c = Zw(), u = X(c), d = X(u), v = X(d);
  qd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      ee(n, $.value.toString(), !0);
    }
  }), j(d);
  var p = B(d, 2), h = X(p);
  Zt(h, 21, () => o, eo, ($, g) => {
    gs($, mt(() => f(g)));
  }), j(h);
  var x = B(h, 2);
  Zt(x, 21, () => a, eo, ($, g) => {
    gs($, mt(() => f(g)));
  }), j(x), j(p), j(u);
  var b = B(u, 2);
  nt(b, {
    onclick: () => {
      ee(r, f(r) ? "" : "show", !0);
    },
    children: ($, g) => {
      var _ = it(), m = Ce(_);
      {
        var k = (E) => {
          var H = Iw();
          A(E, H);
        }, T = (E) => {
          var H = qw();
          A(E, H);
        };
        $e(m, (E) => {
          f(r) === "show" ? E(k) : E(T, !1);
        });
      }
      A($, _);
    },
    $$slots: { default: !0 }
  }), j(c), Te(() => {
    zt(c, 1, `tf-toolbar ${f(r) ?? ""}`), $t(h, `display: ${f(n) === "base" ? "flex" : "none"}`), $t(x, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), A(e, c), me();
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
  he(t, !0), at(e, tb);
  const r = w(t, "data", 7), o = /* @__PURE__ */ Dt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = Et(), { addParameter: a } = qn(), s = Jt(), { updateNodeData: l } = s, c = { ...o, id: i, data: r() }, u = document.createElement("div"), d = hr().customNodes[t.type];
  (n = d.render) == null || n.call(d, u, c, s);
  const v = d.forms;
  let p;
  xn(() => {
    r().expand && p && p.append(u);
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
  const h = /* @__PURE__ */ Ne(() => ({
    ...r(),
    description: d.description
  }));
  return Mn(e, mt(
    {
      get data() {
        return f(h);
      }
    },
    () => o,
    {
      icon: (x) => {
        var b = it(), $ = Ce(b);
        Ns($, () => d.icon), A(x, b);
      },
      children: (x, b) => {
        var $ = eb(), g = Ce($);
        {
          var _ = (O) => {
            var L = Ww(), q = Ce(L), D = X(q);
            tt(D, {
              level: 3,
              children: (M, N) => {
                Re();
                var P = We("输入参数");
                A(M, P);
              },
              $$slots: { default: !0 }
            });
            var R = B(D, 2);
            {
              var S = (M) => {
                nt(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (N, P) => {
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
            var C = B(q, 2);
            rn(C, {}), A(O, L);
          };
          $e(g, (O) => {
            d.parametersEnable !== !1 && O(_);
          });
        }
        var m = B(g, 2);
        {
          var k = (O) => {
            var L = it(), q = Ce(L);
            Zt(q, 17, () => v, eo, (D, R) => {
              var S = it(), C = Ce(S);
              {
                var M = (P) => {
                  var V = Kw(), I = Ce(V), Y = X(I, !0);
                  j(I);
                  var W = B(I, 2), U = X(W);
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
                  )), j(W), Te(() => xt(Y, f(R).label)), A(P, V);
                }, N = (P, V) => {
                  {
                    var I = (W) => {
                      var U = Fw(), Q = Ce(U), K = X(Q, !0);
                      j(Q);
                      var ce = B(Q, 2), ue = X(ce);
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
                    }, Y = (W, U) => {
                      {
                        var Q = (ce) => {
                          var ue = Gw(), ye = Ce(ue), se = X(ye, !0);
                          j(ye);
                          var _e = B(ye, 2), xe = X(_e), Oe = X(xe), le = X(Oe);
                          j(Oe);
                          var J = B(Oe, 2);
                          kr(J);
                          var Me = (Ae) => l(i, {
                            [f(R).name]: parseFloat(Ae.target.value)
                          });
                          let F;
                          j(xe), j(_e), Te(() => {
                            xt(se, f(R).label), xt(le, `${f(R).description ?? ""}: ${r()[f(R).name] ?? f(R).defaultValue ?? ""}`), F = pn(
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
                              var xe = Uw(), Oe = Ce(xe), le = X(Oe, !0);
                              j(Oe);
                              var J = B(Oe, 2), Me = X(J);
                              const F = /* @__PURE__ */ Ne(() => f(R).options || []), Ae = /* @__PURE__ */ Ne(() => r()[f(R).name] ? [r()[f(R).name]] : [f(R).defaultValue]);
                              gn(Me, {
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
                      P,
                      (W) => {
                        f(R).type === "textarea" ? W(I) : W(Y, !1);
                      },
                      V
                    );
                  }
                };
                $e(C, (P) => {
                  f(R).type === "input" ? P(M) : P(N, !1);
                });
              }
              A(D, S);
            }), A(O, L);
          };
          $e(m, (O) => {
            v && O(k);
          });
        }
        var T = B(m, 2);
        Ln(T, (O) => p = O, () => p);
        var E = B(T, 2);
        {
          var H = (O) => {
            var L = Qw(), q = Ce(L), D = X(q);
            tt(D, {
              level: 3,
              mt: "10px",
              children: (M, N) => {
                Re();
                var P = We("输出参数");
                A(M, P);
              },
              $$slots: { default: !0 }
            });
            var R = B(D, 2);
            {
              var S = (M) => {
                nt(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (N, P) => {
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
            var C = B(q, 2);
            Jn(C, {}), A(O, L);
          };
          $e(E, (O) => {
            d.outputDefsEnable !== !1 && O(H);
          });
        }
        Te(() => {
          $t(T, d.rootStyle || ""), zt(T, 1, En(d.rootClass), "svelte-q0cqsa");
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
  he(t, !0), at(e, ab);
  const [n, r] = ft(), o = () => oe(H, "$nodes", n), i = () => oe(O, "$edges", n), a = () => oe(L, "$viewport", n), s = w(t, "onInit", 7), l = Jt();
  s()(l);
  let c = /* @__PURE__ */ Rt(!1), u = /* @__PURE__ */ Rt(void 0);
  const { updateEdgeData: d } = nb(), v = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, p = (P) => {
    var V;
    P.preventDefault();
    const I = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), Y = (V = P.dataTransfer) == null ? void 0 : V.getData("application/tinyflow"), W = Y ? JSON.parse(Y) : {}, U = {
      id: `node_${lo()}`,
      position: I,
      data: {},
      ...W
    };
    Ei.addNode(U), Ei.selectNodeOnly(U.id);
  }, { getNode: h } = Bw(), x = (P) => {
    const V = h(P.source), I = h(P.target);
    if (P.sourceHandle === "loop_handle" || V.parentId) {
      const Y = l.getEdges();
      for (let W of Y)
        if (W.target === P.target) {
          const U = h(W.source);
          if (P.sourceHandle === "loop_handle" && U.parentId !== V.id || V.parentId && U.parentId !== V.parentId)
            return !1;
        }
    }
    return !(!V.parentId && I.parentId && I.parentId !== V.id);
  }, { ensureParentInNodesBefore: b } = jw(), $ = (P, V) => {
    if (!V.isValid)
      return;
    const I = V.toNode;
    if (I.parentId)
      return;
    const Y = V.fromNode, W = V.fromHandle, U = { position: { ...I.position } };
    if (W.id === "loop_handle" ? U.parentId = Y.id : Y.parentId && (U.parentId = Y.parentId), U.parentId) {
      const Q = h(U.parentId);
      U.position = {
        x: I.position.x - Q.position.x,
        y: I.position.y - Q.position.y
      }, b(U.parentId, I.id), l.updateNode(I.id, U);
    }
  }, { getEdgesByTarget: g } = Xw(), _ = (P) => {
    P.edges.forEach((V) => {
      const I = h(V.target);
      if (I && I.parentId) {
        const Y = g(V.target), W = h(I.parentId);
        if (Y.length === 0)
          l.updateNode(I.id, {
            parentId: void 0,
            position: {
              x: I.position.x + W.position.x,
              y: I.position.y + W.position.y
            }
          });
        else {
          let U = !1;
          for (let Q = 0; Q < Y.length; Q++) {
            const K = Y[Q], ce = h(K.source);
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
  }, m = (P, V) => {
  }, k = (P) => {
  }, T = {}, E = hr().customNodes;
  if (E)
    for (let P of Object.keys(E))
      T[P] = yf;
  const { nodes: H, edges: O, viewport: L } = et(), q = hr().onDataChange;
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
  }), L.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var D = ib(), R = X(D);
  const S = /* @__PURE__ */ Ne(() => ({ ...Aw, ...T })), C = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ed(R, mt(
    {
      get nodeTypes() {
        return f(S);
      }
    },
    Ei,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: m,
      onconnect: k,
      connectionRadius: 50,
      ondelete: _,
      onclick: (P) => {
        const V = P.target;
        V.classList.contains("svelte-flow__edge-interaction") || V.classList.contains("panel-content") || V.closest(".panel-content") || (ee(c, !1), ee(u, null));
      },
      get defaultEdgeOptions() {
        return f(C);
      },
      $$events: {
        drop: p,
        dragover: v,
        edgeclick: (P) => {
          ee(c, !0), ee(u, P.detail.edge, !0);
        }
      },
      children: (P, V) => {
        var I = ob(), Y = Ce(I);
        Dd(Y, {});
        var W = B(Y, 2);
        Nd(W, {});
        var U = B(W, 2);
        Ad(U, {});
        var Q = B(U, 2);
        {
          var K = (ce) => {
            ri(ce, {
              children: (ue, ye) => {
                var se = rb(), _e = B(X(se), 4), xe = X(_e);
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
        A(P, I);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = B(R, 2);
  mf(M, {}), j(D), A(e, D);
  var N = me({
    get onInit() {
      return s();
    },
    set onInit(P) {
      s(P), y();
    }
  });
  return r(), N;
}
ve(wf, { onInit: {} }, [], [], !0);
function sb(e, t) {
  he(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ei.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Qr("tinyflow_options", n()), Sd(e, {
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
      const s = new F2({
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
