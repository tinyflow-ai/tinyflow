import vu, { forwardRef as bf, useRef as Js, useImperativeHandle as xf, useEffect as $f } from "react";
var ci = { exports: {} }, wo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function Cf() {
  if (Qs) return wo;
  Qs = 1;
  var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var c, d = {}, v = null, g = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: v, ref: g, props: d, _owner: o.current };
  }
  return wo.Fragment = n, wo.jsx = a, wo.jsxs = a, wo;
}
var bo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function _f() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, b = "@@iterator";
    function x(V) {
      if (V === null || typeof V != "object")
        return null;
      var te = p && V[p] || V[b];
      return typeof te == "function" ? te : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(V) {
      {
        for (var te = arguments.length, ye = new Array(te > 1 ? te - 1 : 0), Le = 1; Le < te; Le++)
          ye[Le - 1] = arguments[Le];
        C("error", V, ye);
      }
    }
    function C(V, te, ye) {
      {
        var Le = $.ReactDebugCurrentFrame, Z = Le.getStackAddendum();
        Z !== "" && (te += "%s", ye = ye.concat([Z]));
        var at = ye.map(function(Ke) {
          return String(Ke);
        });
        at.unshift("Warning: " + te), Function.prototype.apply.call(console[V], console, at);
      }
    }
    var w = !1, k = !1, M = !1, P = !1, L = !1, D;
    D = Symbol.for("react.module.reference");
    function z(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === i || L || V === o || V === u || V === c || P || V === g || w || k || M || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === d || V.$$typeof === a || V.$$typeof === s || V.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === D || V.getModuleId !== void 0));
    }
    function q(V, te, ye) {
      var Le = V.displayName;
      if (Le)
        return Le;
      var Z = te.displayName || te.name || "";
      return Z !== "" ? ye + "(" + Z + ")" : ye;
    }
    function N(V) {
      return V.displayName || "Context";
    }
    function I(V) {
      if (V == null)
        return null;
      if (typeof V.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof V == "function")
        return V.displayName || V.name || null;
      if (typeof V == "string")
        return V;
      switch (V) {
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
        case c:
          return "SuspenseList";
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case s:
            var te = V;
            return N(te) + ".Consumer";
          case a:
            var ye = V;
            return N(ye._context) + ".Provider";
          case l:
            return q(V, V.render, "ForwardRef");
          case d:
            var Le = V.displayName || null;
            return Le !== null ? Le : I(V.type) || "Memo";
          case v: {
            var Z = V, at = Z._payload, Ke = Z._init;
            try {
              return I(Ke(at));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, H = 0, _, T, E, O, R, X, W;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function G() {
      {
        if (H === 0) {
          _ = console.log, T = console.info, E = console.warn, O = console.error, R = console.group, X = console.groupCollapsed, W = console.groupEnd;
          var V = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: V,
            log: V,
            warn: V,
            error: V,
            group: V,
            groupCollapsed: V,
            groupEnd: V
          });
        }
        H++;
      }
    }
    function K() {
      {
        if (H--, H === 0) {
          var V = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, V, {
              value: _
            }),
            info: S({}, V, {
              value: T
            }),
            warn: S({}, V, {
              value: E
            }),
            error: S({}, V, {
              value: O
            }),
            group: S({}, V, {
              value: R
            }),
            groupCollapsed: S({}, V, {
              value: X
            }),
            groupEnd: S({}, V, {
              value: W
            })
          });
        }
        H < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = $.ReactCurrentDispatcher, he;
    function ge(V, te, ye) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (Z) {
            var Le = Z.stack.trim().match(/\n( *(at )?)/);
            he = Le && Le[1] || "";
          }
        return `
` + he + V;
      }
    }
    var ce = !1, _e;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new J();
    }
    function se(V, te) {
      if (!V || ce)
        return "";
      {
        var ye = _e.get(V);
        if (ye !== void 0)
          return ye;
      }
      var Le;
      ce = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var at;
      at = ae.current, ae.current = null, G();
      try {
        if (te) {
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
            } catch (St) {
              Le = St;
            }
            Reflect.construct(V, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (St) {
              Le = St;
            }
            V.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            Le = St;
          }
          V();
        }
      } catch (St) {
        if (St && Le && typeof St.stack == "string") {
          for (var Re = St.stack.split(`
`), Tt = Le.stack.split(`
`), gt = Re.length - 1, pt = Tt.length - 1; gt >= 1 && pt >= 0 && Re[gt] !== Tt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (Re[gt] !== Tt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || Re[gt] !== Tt[pt]) {
                    var Yt = `
` + Re[gt].replace(" at new ", " at ");
                    return V.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", V.displayName)), typeof V == "function" && _e.set(V, Yt), Yt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = at, K(), Error.prepareStackTrace = Z;
      }
      var nr = V ? V.displayName || V.name : "", rr = nr ? ge(nr) : "";
      return typeof V == "function" && _e.set(V, rr), rr;
    }
    function Me(V, te, ye) {
      return se(V, !1);
    }
    function de(V) {
      var te = V.prototype;
      return !!(te && te.isReactComponent);
    }
    function Oe(V, te, ye) {
      if (V == null)
        return "";
      if (typeof V == "function")
        return se(V, de(V));
      if (typeof V == "string")
        return ge(V);
      switch (V) {
        case u:
          return ge("Suspense");
        case c:
          return ge("SuspenseList");
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case l:
            return Me(V.render);
          case d:
            return Oe(V.type, te, ye);
          case v: {
            var Le = V, Z = Le._payload, at = Le._init;
            try {
              return Oe(at(Z), te, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, qe = {}, We = $.ReactDebugCurrentFrame;
    function le(V) {
      if (V) {
        var te = V._owner, ye = Oe(V.type, V._source, te ? te.type : null);
        We.setExtraStackFrame(ye);
      } else
        We.setExtraStackFrame(null);
    }
    function fe(V, te, ye, Le, Z) {
      {
        var at = Function.call.bind(U);
        for (var Ke in V)
          if (at(V, Ke)) {
            var Re = void 0;
            try {
              if (typeof V[Ke] != "function") {
                var Tt = Error((Le || "React class") + ": " + ye + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof V[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              Re = V[Ke](te, Ke, Le, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              Re = gt;
            }
            Re && !(Re instanceof Error) && (le(Z), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", ye, Ke, typeof Re), le(null)), Re instanceof Error && !(Re.message in qe) && (qe[Re.message] = !0, le(Z), h("Failed %s type: %s", ye, Re.message), le(null));
          }
      }
    }
    var Ee = Array.isArray;
    function Ie(V) {
      return Ee(V);
    }
    function De(V) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, ye = te && V[Symbol.toStringTag] || V.constructor.name || "Object";
        return ye;
      }
    }
    function dt(V) {
      try {
        return rt(V), !1;
      } catch {
        return !0;
      }
    }
    function rt(V) {
      return "" + V;
    }
    function oe(V) {
      if (dt(V))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(V)), rt(V);
    }
    var Ze = $.ReactCurrentOwner, be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Xt;
    function ln(V) {
      if (U.call(V, "ref")) {
        var te = Object.getOwnPropertyDescriptor(V, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return V.ref !== void 0;
    }
    function ze(V) {
      if (U.call(V, "key")) {
        var te = Object.getOwnPropertyDescriptor(V, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return V.key !== void 0;
    }
    function ut(V, te) {
      typeof V.ref == "string" && Ze.current;
    }
    function je(V, te) {
      {
        var ye = function() {
          jt || (jt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        ye.isReactWarning = !0, Object.defineProperty(V, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function Be(V, te) {
      {
        var ye = function() {
          Xt || (Xt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        ye.isReactWarning = !0, Object.defineProperty(V, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var ct = function(V, te, ye, Le, Z, at, Ke) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: V,
        key: te,
        ref: ye,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: at
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function Qt(V, te, ye, Le, Z) {
      {
        var at, Ke = {}, Re = null, Tt = null;
        ye !== void 0 && (oe(ye), Re = "" + ye), ze(te) && (oe(te.key), Re = "" + te.key), ln(te) && (Tt = te.ref, ut(te, Z));
        for (at in te)
          U.call(te, at) && !be.hasOwnProperty(at) && (Ke[at] = te[at]);
        if (V && V.defaultProps) {
          var gt = V.defaultProps;
          for (at in gt)
            Ke[at] === void 0 && (Ke[at] = gt[at]);
        }
        if (Re || Tt) {
          var pt = typeof V == "function" ? V.displayName || V.name || "Unknown" : V;
          Re && je(Ke, pt), Tt && Be(Ke, pt);
        }
        return ct(V, Re, Tt, Z, Le, Ze.current, Ke);
      }
    }
    var Ot = $.ReactCurrentOwner, er = $.ReactDebugCurrentFrame;
    function yt(V) {
      if (V) {
        var te = V._owner, ye = Oe(V.type, V._source, te ? te.type : null);
        er.setExtraStackFrame(ye);
      } else
        er.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Mn(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function it() {
      {
        if (Ot.current) {
          var V = I(Ot.current.type);
          if (V)
            return `

Check the render method of \`` + V + "`.";
        }
        return "";
      }
    }
    function mo(V) {
      return "";
    }
    var tr = {};
    function Nt(V) {
      {
        var te = it();
        if (!te) {
          var ye = typeof V == "string" ? V : V.displayName || V.name;
          ye && (te = `

Check the top-level render call using <` + ye + ">.");
        }
        return te;
      }
    }
    function wr(V, te) {
      {
        if (!V._store || V._store.validated || V.key != null)
          return;
        V._store.validated = !0;
        var ye = Nt(te);
        if (tr[ye])
          return;
        tr[ye] = !0;
        var Le = "";
        V && V._owner && V._owner !== Ot.current && (Le = " It was passed a child from " + I(V._owner.type) + "."), yt(V), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Le), yt(null);
      }
    }
    function br(V, te) {
      {
        if (typeof V != "object")
          return;
        if (Ie(V))
          for (var ye = 0; ye < V.length; ye++) {
            var Le = V[ye];
            Mn(Le) && wr(Le, te);
          }
        else if (Mn(V))
          V._store && (V._store.validated = !0);
        else if (V) {
          var Z = x(V);
          if (typeof Z == "function" && Z !== V.entries)
            for (var at = Z.call(V), Ke; !(Ke = at.next()).done; )
              Mn(Ke.value) && wr(Ke.value, te);
        }
      }
    }
    function zr(V) {
      {
        var te = V.type;
        if (te == null || typeof te == "string")
          return;
        var ye;
        if (typeof te == "function")
          ye = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === d))
          ye = te.propTypes;
        else
          return;
        if (ye) {
          var Le = I(te);
          fe(ye, V.props, "prop", Le, V);
        } else if (te.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Z = I(te);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yo(V) {
      {
        for (var te = Object.keys(V.props), ye = 0; ye < te.length; ye++) {
          var Le = te[ye];
          if (Le !== "children" && Le !== "key") {
            yt(V), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), yt(null);
            break;
          }
        }
        V.ref !== null && (yt(V), h("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var ai = {};
    function si(V, te, ye, Le, Z, at) {
      {
        var Ke = z(V);
        if (!Ke) {
          var Re = "";
          (V === void 0 || typeof V == "object" && V !== null && Object.keys(V).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = mo();
          Tt ? Re += Tt : Re += it();
          var gt;
          V === null ? gt = "null" : Ie(V) ? gt = "array" : V !== void 0 && V.$$typeof === t ? (gt = "<" + (I(V.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof V, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, Re);
        }
        var pt = Qt(V, te, ye, Z, at);
        if (pt == null)
          return pt;
        if (Ke) {
          var Yt = te.children;
          if (Yt !== void 0)
            if (Le)
              if (Ie(Yt)) {
                for (var nr = 0; nr < Yt.length; nr++)
                  br(Yt[nr], V);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Yt, V);
        }
        if (U.call(te, "key")) {
          var rr = I(V), St = Object.keys(te).filter(function(ui) {
            return ui !== "key";
          }), Ar = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ai[rr + Ar]) {
            var li = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, rr, li, rr), ai[rr + Ar] = !0;
          }
        }
        return V === r ? yo(pt) : zr(pt), pt;
      }
    }
    function Ca(V, te, ye) {
      return si(V, te, ye, !0);
    }
    function _a(V, te, ye) {
      return si(V, te, ye, !1);
    }
    var ka = _a, Sa = Ca;
    bo.Fragment = r, bo.jsx = ka, bo.jsxs = Sa;
  }()), bo;
}
var tl;
function kf() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? ci.exports = Cf() : ci.exports = _f()), ci.exports;
}
var Sf = kf(), Ef = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Pf = (e, t, n) => t in e ? Ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Pf(e, typeof t != "symbol" ? t + "" : t, n), fs = (e, t, n) => t.has(e) || gu("Cannot " + n), wt = (e, t, n) => (fs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Si = (e, t, n, r) => (fs(e, t, "write to private field"), t.set(e, n), n), Mf = (e, t, n) => (fs(e, t, "access private method"), n);
const Of = "5";
var nl;
typeof window < "u" && ((nl = window.__svelte ?? (window.__svelte = {})).v ?? (nl.v = /* @__PURE__ */ new Set())).add(Of);
let uo = !1, Tf = !1;
function Hf() {
  uo = !0;
}
Hf();
const vs = 1, gs = 2, hu = 4, Df = 8, Lf = 16, Vf = 1, Nf = 2, pu = 4, zf = 8, Af = 16, mu = 1, If = 2, hs = "[", ps = "[!", ms = "]", Br = {}, Wt = Symbol(), Rf = "http://www.w3.org/1999/xhtml", qf = "http://www.w3.org/2000/svg", Zf = !1;
function ea(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Wo = Array.isArray, Bf = Array.prototype.indexOf, ys = Array.from, Ei = Object.keys, To = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, jf = Object.prototype, Xf = Array.prototype, ws = Object.getPrototypeOf, rl = Object.isExtensible;
function xo(e) {
  return typeof e == "function";
}
const _t = () => {
};
function Yf(e) {
  return e();
}
function Ho(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Cn = 2, wu = 4, ta = 8, bs = 16, Gn = 32, Dr = 64, Pi = 128, on = 256, Mi = 512, qt = 1024, Dn = 2048, mr = 4096, Yn = 8192, na = 16384, Wf = 32768, co = 65536, Kf = 1 << 17, Ff = 1 << 19, bu = 1 << 20, Ra = 1 << 21, ur = Symbol("$state"), xs = Symbol("legacy props"), Uf = Symbol("");
function Gf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function e1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function t1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function n1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function r1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function o1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function i1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ra(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ne = !1;
function nn(e) {
  Ne = e;
}
let Ye;
function Rt(e) {
  if (e === null)
    throw ra(), Br;
  return Ye = e;
}
function Ln() {
  return Rt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ In(Ye)
  );
}
function j(e) {
  if (Ne) {
    if (/* @__PURE__ */ In(Ye) !== null)
      throw ra(), Br;
    Ye = e;
  }
}
function Ae(e = 1) {
  if (Ne) {
    for (var t = e, n = Ye; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ In(n);
    Ye = n;
  }
}
function qa() {
  for (var e = 0, t = Ye; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ms) {
        if (e === 0) return t;
        e -= 1;
      } else (n === hs || n === ps) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ In(t)
    );
    t.remove(), t = r;
  }
}
function bn(e) {
  if (typeof e != "object" || e === null || ur in e)
    return e;
  const t = ws(e);
  if (t !== jf && t !== Xf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wo(e), o = /* @__PURE__ */ At(0), i = tt, a = (s) => {
    var l = tt;
    Vn(i);
    var u = s();
    return Vn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ At(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && r1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ At(u.value)), n.set(l, c)) : Q(
          c,
          a(() => bn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ At(Wt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && Q(c, d);
          }
          Q(u, Wt), ol(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === ur)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Xn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ At(bn(v ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var g = f(d);
          return g === Wt ? void 0 : g;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = n.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === ur)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Wt || Reflect.has(s, l);
        if (c !== void 0 || nt !== null && (!d || (u = Xn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ At(d ? bn(s[l]) : Wt)), n.set(l, c));
          var v = f(c);
          if (v === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), g = l in s;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var b = n.get(p + "");
            b !== void 0 ? Q(b, Wt) : p in s && (b = a(() => /* @__PURE__ */ At(Wt)), n.set(p + "", b));
          }
        v === void 0 ? (!g || (d = Xn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ At(void 0)), Q(
          v,
          a(() => bn(u))
        ), n.set(l, v)) : (g = v.v !== Wt, Q(
          v,
          a(() => bn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !g) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= $.v && Q($, h + 1);
          }
          ol(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Wt;
        });
        for (var [u, c] of n)
          c.v !== Wt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        o1();
      }
    }
  );
}
function ol(e, t = 1) {
  Q(e, e.v + t);
}
var Kt, xu, $u, Cu;
function Za() {
  if (Kt === void 0) {
    Kt = window, xu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $u = Xn(t, "firstChild").get, Cu = Xn(t, "nextSibling").get, rl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rl(n) && (n.__t = void 0);
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  return $u.call(e);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return Cu.call(e);
}
function Y(e, t) {
  if (!Ne)
    return /* @__PURE__ */ It(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ It(Ye)
  );
  if (n === null)
    n = Ye.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), Rt(r), r;
  }
  return Rt(n), n;
}
function $e(e, t) {
  if (!Ne) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ It(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
  }
  return Ye;
}
function B(e, t = 1, n = !1) {
  let r = Ne ? Ye : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ In(r);
  if (!Ne)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Kn();
    return r === null ? o == null || o.after(a) : r.before(a), Rt(a), a;
  }
  return Rt(r), /** @type {TemplateNode} */
  r;
}
function $s(e) {
  e.textContent = "";
}
function _u(e) {
  return e === this.v;
}
function Cs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _s(e) {
  return !Cs(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  var t = Cn | Dn, n = tt !== null && tt.f & Cn ? (
    /** @type {Derived} */
    tt
  ) : null;
  return nt === null || n !== null && n.f & on ? t |= on : nt.f |= bu, {
    ctx: Je,
    deps: null,
    effects: null,
    equals: _u,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? nt
  };
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ Fr(e);
  return Nu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  const t = /* @__PURE__ */ Fr(e);
  return t.equals = _s, t;
}
function ku(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function a1(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Cn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Su(e) {
  var t, n = nt;
  vr(a1(e));
  try {
    ku(e), t = Ru(e);
  } finally {
    vr(n);
  }
  return t;
}
function Eu(e) {
  var t = Su(e), n = (sr || e.f & on) && e.deps !== null ? mr : qt;
  gn(e, n), e.equals(t) || (e.v = t, e.wv = Au());
}
function Pu(e) {
  nt === null && tt === null && Qf(), tt !== null && tt.f & on && nt === null && Jf(), Fo && Gf();
}
function s1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lr(e, t, n, r = !0) {
  var o = nt, i = {
    ctx: Je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Dn,
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
      ia(i), i.f |= Wf;
    } catch (l) {
      throw vn(i), l;
    }
  else t !== null && aa(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bu | Pi)) === 0;
  if (!a && r && (o !== null && s1(i, o), tt !== null && tt.f & Cn)) {
    var s = (
      /** @type {Derived} */
      tt
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function ks(e) {
  const t = Lr(ta, null, !1);
  return gn(t, qt), t.teardown = e, t;
}
function $n(e) {
  Pu();
  var t = nt !== null && (nt.f & Gn) !== 0 && Je !== null && !Je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: nt,
      reaction: tt
    });
  } else {
    var r = tn(e);
    return r;
  }
}
function l1(e) {
  return Pu(), fo(e);
}
function u1(e) {
  const t = Lr(Dr, e, !0);
  return () => {
    vn(t);
  };
}
function c1(e) {
  const t = Lr(Dr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(t, () => {
      vn(t), r(void 0);
    }) : (vn(t), r(void 0));
  });
}
function tn(e) {
  return Lr(wu, e, !1);
}
function we(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, Q(n.l.r2, !0), Nn(t));
  });
}
function Mt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  fo(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & qt && gn(n, mr), vo(n) && ia(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return Lr(ta, e, !0);
}
function Te(e, t = [], n = Fr) {
  const r = t.map(n);
  return Vr(() => e(...r.map(f)));
}
function Vr(e, t = 0) {
  return Lr(ta | bs | t, e, !0);
}
function Fn(e, t = !0) {
  return Lr(ta | Gn, e, !0, t);
}
function Mu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Fo, r = tt;
    al(!0), Vn(null);
    try {
      t.call(null);
    } finally {
      al(n), Vn(r);
    }
  }
}
function Ou(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & Dr ? n.parent = null : vn(n, t), n = r;
  }
}
function d1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Gn || vn(t), t = n;
  }
}
function vn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Ff) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ In(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Ou(e, t && !n), Di(e, 0), gn(e, na);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Mu(e);
  var s = e.parent;
  s !== null && s.first !== null && Tu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Tu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ur(e, t) {
  var n = [];
  Ss(e, n, !0), Hu(n, () => {
    vn(e), t && t();
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
function Ss(e, t, n) {
  if (!(e.f & Yn)) {
    if (e.f ^= Yn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & co) !== 0 || (r.f & Gn) !== 0;
      Ss(r, t, i ? n : !1), r = o;
    }
  }
}
function Do(e) {
  Du(e, !0);
}
function Du(e, t) {
  if (e.f & Yn) {
    e.f ^= Yn, e.f & qt || (e.f ^= qt), vo(e) && (gn(e, Dn), aa(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Gn) !== 0;
      Du(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const f1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Lo = [], Vo = [];
function Lu() {
  var e = Lo;
  Lo = [], Ho(e);
}
function Vu() {
  var e = Vo;
  Vo = [], Ho(e);
}
function Ko(e) {
  Lo.length === 0 && queueMicrotask(Lu), Lo.push(e);
}
function v1(e) {
  Vo.length === 0 && f1(Vu), Vo.push(e);
}
function il() {
  Lo.length > 0 && Lu(), Vo.length > 0 && Vu();
}
let yi = !1, Oi = !1, Ti = null, _r = !1, Fo = !1;
function al(e) {
  Fo = e;
}
let Mo = [], tt = null, On = !1;
function Vn(e) {
  tt = e;
}
let nt = null;
function vr(e) {
  nt = e;
}
let fn = null;
function g1(e) {
  fn = e;
}
function Nu(e) {
  tt !== null && tt.f & Ra && (fn === null ? g1([e]) : fn.push(e));
}
let zt = null, en = 0, cn = null;
function h1(e) {
  cn = e;
}
let zu = 1, Hi = 0, sr = !1;
function Au() {
  return ++zu;
}
function vo(e) {
  var t, n = e.f;
  if (n & Dn)
    return !0;
  if (n & mr) {
    var r = e.deps, o = (n & on) !== 0;
    if (r !== null) {
      var i, a, s = (n & Mi) !== 0, l = o && nt !== null && !sr, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Mi), l && d !== null && !(d.f & on) && (c.f ^= on);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], vo(
          /** @type {Derived} */
          a
        ) && Eu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || nt !== null && !sr) && gn(e, qt);
  }
  return !1;
}
function p1(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Pi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Pi;
      }
    n = n.parent;
  }
  throw yi = !1, e;
}
function m1(e) {
  return (e.f & na) === 0 && (e.parent === null || (e.parent.f & Pi) === 0);
}
function oa(e, t, n, r) {
  if (yi) {
    if (n === null && (yi = !1), m1(t))
      throw e;
    return;
  }
  n !== null && (yi = !0);
  {
    p1(e, t);
    return;
  }
}
function Iu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      fn != null && fn.includes(e) || (i.f & Cn ? Iu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gn(i, Dn) : i.f & qt && gn(i, mr), aa(
        /** @type {Effect} */
        i
      )));
    }
}
function Ru(e) {
  var t, n = zt, r = en, o = cn, i = tt, a = sr, s = fn, l = Je, u = On, c = e.f;
  zt = /** @type {null | Value[]} */
  null, en = 0, cn = null, sr = (c & on) !== 0 && (On || !_r || tt === null), tt = c & (Gn | Dr) ? null : e, fn = null, ll(e.ctx), On = !1, Hi++, e.f |= Ra;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (zt !== null) {
      var g;
      if (Di(e, en), v !== null && en > 0)
        for (v.length = en + zt.length, g = 0; g < zt.length; g++)
          v[en + g] = zt[g];
      else
        e.deps = v = zt;
      if (!sr)
        for (g = en; g < v.length; g++)
          ((t = v[g]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && en < v.length && (Di(e, en), v.length = en);
    if (sa() && cn !== null && !On && v !== null && !(e.f & (Cn | mr | Dn)))
      for (g = 0; g < /** @type {Source[]} */
      cn.length; g++)
        Iu(
          cn[g],
          /** @type {Effect} */
          e
        );
    return i !== e && (Hi++, cn !== null && (o === null ? o = cn : o.push(.../** @type {Source[]} */
    cn))), d;
  } finally {
    zt = n, en = r, cn = o, tt = i, sr = a, fn = s, ll(l), On = u, e.f ^= Ra;
  }
}
function y1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Cn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !zt.includes(t)) && (gn(t, mr), t.f & (on | Mi) || (t.f ^= Mi), ku(
    /** @type {Derived} **/
    t
  ), Di(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Di(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      y1(e, n[r]);
}
function ia(e) {
  var t = e.f;
  if (!(t & na)) {
    gn(e, qt);
    var n = nt, r = Je, o = _r;
    nt = e, _r = !0;
    try {
      t & bs ? d1(e) : Ou(e), Mu(e);
      var i = Ru(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = zu;
      var a = e.deps, s;
      Zf && Tf && e.f & Dn;
    } catch (l) {
      oa(l, e, n, r || e.ctx);
    } finally {
      _r = o, nt = n;
    }
  }
}
function w1() {
  try {
    e1();
  } catch (e) {
    if (Ti !== null)
      oa(e, Ti, null);
    else
      throw e;
  }
}
function qu() {
  var e = _r;
  try {
    var t = 0;
    for (_r = !0; Mo.length > 0; ) {
      t++ > 1e3 && w1();
      var n = Mo, r = n.length;
      Mo = [];
      for (var o = 0; o < r; o++) {
        var i = x1(n[o]);
        b1(i);
      }
      No.clear();
    }
  } finally {
    Oi = !1, _r = e, Ti = null;
  }
}
function b1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (na | Yn)))
        try {
          vo(r) && (ia(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Tu(r) : r.fn = null));
        } catch (o) {
          oa(o, r, null, r.ctx);
        }
    }
}
function aa(e) {
  Oi || (Oi = !0, queueMicrotask(qu));
  for (var t = Ti = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Dr | Gn)) {
      if (!(n & qt)) return;
      t.f ^= qt;
    }
  }
  Mo.push(t);
}
function x1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Gn | Dr)) !== 0, i = o && (r & qt) !== 0;
    if (!i && !(r & Yn)) {
      if (r & wu)
        t.push(n);
      else if (o)
        n.f ^= qt;
      else {
        var a = tt;
        try {
          tt = n, vo(n) && ia(n);
        } catch (u) {
          oa(u, n, null, n.ctx);
        } finally {
          tt = a;
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
function m(e) {
  var t;
  for (il(); Mo.length > 0; )
    Oi = !0, qu(), il();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & Cn) !== 0;
  if (tt !== null && !On) {
    if (!(fn != null && fn.includes(e))) {
      var r = tt.deps;
      e.rv < Hi && (e.rv = Hi, zt === null && r !== null && r[en] === e ? en++ : zt === null ? zt = [e] : (!sr || !zt.includes(e)) && zt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & on) && (o.f ^= on);
  }
  return n && (o = /** @type {Derived} */
  e, vo(o) && Eu(o)), Fo && No.has(e) ? No.get(e) : e.v;
}
function Nn(e) {
  var t = On;
  try {
    return On = !0, e();
  } finally {
    On = t;
  }
}
const $1 = -7169;
function gn(e, t) {
  e.f = e.f & $1 | t;
}
function ne(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ur in e)
      Ba(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ur in n && Ba(n);
      }
  }
}
function Ba(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ba(e[r], t);
      } catch {
      }
    const n = ws(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = yu(n);
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
const No = /* @__PURE__ */ new Map();
function Gr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: _u,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function At(e, t) {
  const n = Gr(e);
  return Nu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ue(e, t = !1) {
  var n;
  const r = Gr(e);
  return t || (r.equals = _s), uo && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function Q(e, t, n = !1) {
  tt !== null && !On && sa() && tt.f & (Cn | bs) && !(fn != null && fn.includes(e)) && i1();
  let r = n ? bn(t) : t;
  return ja(e, r);
}
function ja(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Fo ? No.set(e, t) : No.set(e, n), e.v = t, e.f & Cn && (e.f & Dn && Su(
      /** @type {Derived} */
      e
    ), gn(e, e.f & on ? mr : qt)), e.wv = Au(), Zu(e, Dn), sa() && nt !== null && nt.f & qt && !(nt.f & (Gn | Dr)) && (cn === null ? h1([e]) : cn.push(e));
  }
  return t;
}
function sl(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function Zu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = sa(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Dn || !r && a === nt || (gn(a, t), s & (qt | on) && (s & Cn ? Zu(
        /** @type {Derived} */
        a,
        mr
      ) : aa(
        /** @type {Effect} */
        a
      )));
    }
}
let Je = null;
function ll(e) {
  Je = e;
}
function Er(e) {
  return (
    /** @type {T} */
    Es().get(e)
  );
}
function Jr(e, t) {
  return Es().set(e, t), t;
}
function C1(e) {
  return Es().has(e);
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
    r2: Gr(!1)
  }), ks(() => {
    r.d = !0;
  });
}
function me(e) {
  const t = Je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = nt, r = tt;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), Vn(i.reaction), tn(i.fn);
        }
      } finally {
        vr(n), Vn(r);
      }
    }
    Je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function sa() {
  return !uo || Je !== null && Je.l === null;
}
function Es(e) {
  return Je === null && ea(), Je.c ?? (Je.c = new Map(_1(Je) || void 0));
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
const P1 = {
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
function M1(e) {
  return e = e.toLowerCase(), P1[e] ?? e;
}
const O1 = ["touchstart", "touchmove"];
function T1(e) {
  return O1.includes(e);
}
const H1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function D1(e) {
  return H1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function L1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function V1(e) {
  Ne && /* @__PURE__ */ It(e) !== null && $s(e);
}
let ul = !1;
function N1() {
  ul || (ul = !0, document.addEventListener(
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
function z1(e) {
  var t = tt, n = nt;
  Vn(null), vr(null);
  try {
    return e();
  } finally {
    Vn(t), vr(n);
  }
}
const Bu = /* @__PURE__ */ new Set(), Xa = /* @__PURE__ */ new Set();
function ju(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ko.call(t, i), !i.cancelBubble)
      return z1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ft(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = ju(e, t, n, i);
  (t === document.body || t === window || t === document) && ks(() => {
    t.removeEventListener(e, a, i);
  });
}
function go(e) {
  for (var t = 0; t < e.length; t++)
    Bu.add(e[t]);
  for (var n of Xa)
    n(e);
}
function ko(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = i.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== n) {
    To(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = tt, v = nt;
    Vn(null), vr(null);
    try {
      for (var g, p = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Wo(x)) {
              var [$, ...h] = x;
              $.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch (C) {
          g ? p.push(C) : g = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (g) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw g;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Vn(d), vr(v);
    }
  }
}
function Ps(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Gt(e, t) {
  var n = (
    /** @type {Effect} */
    nt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & mu) !== 0, r = (t & If) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ne)
      return Gt(Ye, null), Ye;
    o === void 0 && (o = Ps(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ It(o)));
    var a = (
      /** @type {TemplateNode} */
      r || xu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ It(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Gt(s, l);
    } else
      Gt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & mu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Ne)
      return Gt(Ye, null), Ye;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Ps(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ It(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ It(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ It(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ It(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ It(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Gt(c, d);
    } else
      Gt(u, u);
    return u;
  };
}
function Ue(e = "") {
  if (!Ne) {
    var t = Kn(e + "");
    return Gt(t, t), t;
  }
  var n = Ye;
  return n.nodeType !== 3 && (n.before(n = Kn()), Rt(n)), Gt(n, n), n;
}
function st() {
  if (Ne)
    return Gt(Ye, null), Ye;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), Gt(t, n), e;
}
function A(e, t) {
  if (Ne) {
    nt.nodes_end = Ye, Ln();
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
function Xu(e, t) {
  return Yu(e, t);
}
function A1(e, t) {
  Za(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ne, o = Ye;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ It(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== hs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ In(i);
    if (!i)
      throw Br;
    nn(!0), Rt(
      /** @type {Comment} */
      i
    ), Ln();
    const a = Yu(e, { ...t, anchor: i });
    if (Ye === null || Ye.nodeType !== 8 || /** @type {Comment} */
    Ye.data !== ms)
      throw ra(), Br;
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Br)
      return t.recover === !1 && t1(), Za(), $s(n), nn(!1), Xu(e, t);
    throw a;
  } finally {
    nn(r), Rt(o);
  }
}
const Ir = /* @__PURE__ */ new Map();
function Yu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Za();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var g = d[v];
      if (!s.has(g)) {
        s.add(g);
        var p = T1(g);
        t.addEventListener(g, ko, { passive: p });
        var b = Ir.get(g);
        b === void 0 ? (document.addEventListener(g, ko, { passive: p }), Ir.set(g, 1)) : Ir.set(g, b + 1);
      }
    }
  };
  l(ys(Bu)), Xa.add(l);
  var u = void 0, c = c1(() => {
    var d = n ?? t.appendChild(Kn());
    return Fn(() => {
      if (i) {
        pe({});
        var v = (
          /** @type {ComponentContext} */
          Je
        );
        v.c = i;
      }
      o && (r.$$events = o), Ne && Gt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ne && (nt.nodes_end = Ye), i && me();
    }), () => {
      var v;
      for (var g of s) {
        t.removeEventListener(g, ko);
        var p = (
          /** @type {number} */
          Ir.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, ko), Ir.delete(g)) : Ir.set(g, p);
      }
      Xa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return Ya.set(u, c), u;
}
let Ya = /* @__PURE__ */ new WeakMap();
function I1(e, t) {
  const n = Ya.get(e);
  return n ? (Ya.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Ne && n === 0 && Ln();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? co : 0, u = !1;
  const c = (v, g = !0) => {
    u = !0, d(g, v);
  }, d = (v, g) => {
    if (s === (s = v)) return;
    let p = !1;
    if (Ne && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === hs ? r = 0 : x === ps ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = qa(), Rt(o), nn(!1), p = !0, r = -1);
    }
    s ? (i ? Do(i) : g && (i = Fn(() => g(o))), a && Ur(a, () => {
      a = null;
    })) : (a ? Do(a) : g && (a = Fn(() => g(o, [n + 1, r]))), i && Ur(i, () => {
      i = null;
    })), p && nn(!0);
  };
  Vr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ne && (o = Ye);
}
function Qr(e, t) {
  return t;
}
function R1(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Ss(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    $s(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), ir(e, t[0].prev, t[i - 1].next);
  }
  Hu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), ir(e, c.prev, c.next)), vn(c.e, !s);
    }
  });
}
function Zt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Ne ? Rt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ It(u)
    ) : u.appendChild(Kn());
  }
  Ne && Ln();
  var c = null, d = !1, v = /* @__PURE__ */ Ce(() => {
    var g = n();
    return Wo(g) ? g : g == null ? [] : ys(g);
  });
  Vr(() => {
    var g = f(v), p = g.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if (Ne) {
      var x = (
        /** @type {Comment} */
        a.data === ps
      );
      x !== (p === 0) && (a = qa(), Rt(a), nn(!1), b = !0);
    }
    if (Ne) {
      for (var $ = null, h, C = 0; C < p; C++) {
        if (Ye.nodeType === 8 && /** @type {Comment} */
        Ye.data === ms) {
          a = /** @type {Comment} */
          Ye, b = !0, nn(!1);
          break;
        }
        var w = g[C], k = r(w, C);
        h = Wu(
          Ye,
          s,
          $,
          null,
          w,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), $ = h;
      }
      p > 0 && Rt(qa());
    }
    Ne || q1(g, s, a, o, t, r, n), i !== null && (p === 0 ? c ? Do(c) : c = Fn(() => i(a)) : c !== null && Ur(c, () => {
      c = null;
    })), b && nn(!0), f(v);
  }), Ne && (a = Ye);
}
function q1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Df) !== 0, v = (o & (vs | gs)) !== 0, g = e.length, p = t.items, b = t.first, x = b, $, h = null, C, w = [], k = [], M, P, L, D;
  if (d)
    for (D = 0; D < g; D += 1)
      M = e[D], P = i(M, D), L = p.get(P), L !== void 0 && ((s = L.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(L));
  for (D = 0; D < g; D += 1) {
    if (M = e[D], P = i(M, D), L = p.get(P), L === void 0) {
      var z = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Wu(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        M,
        P,
        D,
        r,
        o,
        a
      ), p.set(P, h), w = [], k = [], x = h.next;
      continue;
    }
    if (v && Z1(L, M, D, o), L.e.f & Yn && (Do(L.e), d && ((l = L.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(L))), L !== x) {
      if ($ !== void 0 && $.has(L)) {
        if (w.length < k.length) {
          var q = k[0], N;
          h = q.prev;
          var I = w[0], S = w[w.length - 1];
          for (N = 0; N < w.length; N += 1)
            cl(w[N], q, n);
          for (N = 0; N < k.length; N += 1)
            $.delete(k[N]);
          ir(t, I.prev, S.next), ir(t, h, I), ir(t, S, q), x = q, h = S, D -= 1, w = [], k = [];
        } else
          $.delete(L), cl(L, x, n), ir(t, L.prev, L.next), ir(t, L, h === null ? t.first : h.next), ir(t, h, L), h = L;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== P; )
        x.e.f & Yn || ($ ?? ($ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      L = x;
    }
    w.push(L), h = L, x = L.next;
  }
  if (x !== null || $ !== void 0) {
    for (var H = $ === void 0 ? [] : ys($); x !== null; )
      x.e.f & Yn || H.push(x), x = x.next;
    var _ = H.length;
    if (_ > 0) {
      var T = o & hu && g === 0 ? n : null;
      if (d) {
        for (D = 0; D < _; D += 1)
          (u = H[D].a) == null || u.measure();
        for (D = 0; D < _; D += 1)
          (c = H[D].a) == null || c.fix();
      }
      R1(t, H, T, p);
    }
  }
  d && Ko(() => {
    var E;
    if (C !== void 0)
      for (L of C)
        (E = L.a) == null || E.apply();
  }), nt.first = t.first && t.first.e, nt.last = h && h.e;
}
function Z1(e, t, n, r) {
  r & vs && ja(e.v, t), r & gs ? ja(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Wu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & vs) !== 0, d = (l & Lf) === 0, v = c ? d ? /* @__PURE__ */ ue(o) : Gr(o) : o, g = l & gs ? Gr(a) : a, p = {
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
    return p.e = Fn(() => s(e, v, g, u), Ne), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function cl(e, t, n) {
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
      /* @__PURE__ */ In(i)
    );
    o.before(i), i = a;
  }
}
function ir(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ms(e, t, n, r, o) {
  var i = e, a = "", s;
  Vr(() => {
    if (a === (a = t() ?? "")) {
      Ne && Ln();
      return;
    }
    s !== void 0 && (vn(s), s = void 0), a !== "" && (s = Fn(() => {
      if (Ne) {
        Ye.data;
        for (var l = Ln(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ In(l);
        if (l === null)
          throw ra(), Br;
        Gt(Ye, u), i = Rt(l);
        return;
      }
      var c = a + "", d = Ps(c);
      Gt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ It(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Dt(e, t, n, r, o) {
  var i;
  Ne && Ln();
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
  var r = e, o = _t, i;
  Vr(() => {
    o !== (o = t()) && (i && (vn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, co), Ne && (r = Ye);
}
function Ku(e, t, n) {
  Ne && Ln();
  var r = e, o, i;
  Vr(() => {
    o !== (o = t()) && (i && (Ur(i), i = null), o && (i = Fn(() => n(r, o))));
  }, co), Ne && (r = Ye);
}
function j1(e, t, n, r, o, i) {
  let a = Ne;
  Ne && Ln();
  var s, l, u = null;
  Ne && Ye.nodeType === 1 && (u = /** @type {Element} */
  Ye, Ln());
  var c = (
    /** @type {TemplateNode} */
    Ne ? Ye : e
  ), d;
  Vr(() => {
    const v = t() || null;
    var g = v === "svg" ? qf : null;
    v !== s && (d && (v === null ? Ur(d, () => {
      d = null, l = null;
    }) : v === l ? Do(d) : vn(d)), v && v !== l && (d = Fn(() => {
      if (u = Ne ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, v) : document.createElement(v), Gt(u, u), r) {
        Ne && D1(v) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Ne ? /* @__PURE__ */ It(u) : u.appendChild(Kn())
        );
        Ne && (p === null ? nn(!1) : Rt(p)), r(u, p);
      }
      nt.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, co), a && (nn(!0), Rt(c));
}
function lt(e, t) {
  Ko(() => {
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
function Ht(e, t, n) {
  tn(() => {
    var r = Nn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var a = n();
        ne(a), o && Cs(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Fu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function X1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Fu(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? X1(e) : e ?? "";
}
const dl = [...` 	
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
          (a === 0 || dl.includes(r[a - 1])) && (s === r.length || dl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function fl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ea(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function W1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(Ea)), o && l.push(...Object.keys(o).map(Ea));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === b - 1) {
            if (c !== -1) {
              var g = Ea(e.substring(u, c).trim());
              if (!l.includes(g)) {
                v !== ";" && d++;
                var p = e.substring(u, d).trim();
                n += " " + p + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += fl(r)), o && (n += fl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Lt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Ne || a !== n || a === void 0) {
    var s = Y1(n, r, i);
    (!Ne || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Pa(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function $t(e, t, n, r) {
  var o = e.__style;
  if (Ne || o !== t) {
    var i = W1(t, r);
    (!Ne || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Pa(e, n == null ? void 0 : n[0], r[0]), Pa(e, n == null ? void 0 : n[1], r[1], "important")) : Pa(e, n, r));
  return r;
}
const $o = Symbol("class"), xr = Symbol("style"), Uu = Symbol("is custom element"), Gu = Symbol("is html");
function kr(e) {
  if (Ne) {
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
    e.__on_r = n, v1(n), N1();
  }
}
function Ma(e, t) {
  var n = la(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function K1(e, t) {
  var n = la(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function F1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = la(e);
  Ne && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Uf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ju(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function hn(e, t, n, r, o = !1) {
  var i = la(e), a = i[Uu], s = !i[Gu];
  let l = Ne && a;
  l && nn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = Sn(n.class) : (r || n[$o]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var v = Ju(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lt(e, g, w, r, t == null ? void 0 : t[$o], n[$o]), u[C] = w, u[$o] = n[$o];
      continue;
    }
    if (C === "style") {
      $t(e, w, t == null ? void 0 : t[xr], n[xr]), u[C] = w, u[xr] = n[xr];
      continue;
    }
    var p = u[C];
    if (w !== p) {
      u[C] = w;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, M = "$$" + C;
          let P = C.slice(2);
          var x = E1(P);
          if (k1(P) && (P = P.slice(0, -7), k.capture = !0), !x && p) {
            if (w != null) continue;
            e.removeEventListener(P, u[M], k), u[M] = null;
          }
          if (w != null)
            if (x)
              e[`__${P}`] = w, go([P]);
            else {
              let L = function(D) {
                u[C].call(this, D);
              };
              u[M] = ju(P, e, L, k);
            }
          else x && (e[`__${P}`] = void 0);
        } else if (C === "style")
          ke(e, C, w);
        else if (C === "autofocus")
          L1(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (C === "__value" || C === "value" && w != null))
          e.value = e.__value = w;
        else if (C === "selected" && c)
          F1(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = C;
          s || ($ = M1($));
          var h = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !h)
            if (i[C] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if ($ === "value") {
                let P = k.defaultValue;
                k.removeAttribute($), k.defaultValue = P, k.value = k.__value = M ? P : null;
              } else {
                let P = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = P, k.checked = M ? P : !1;
              }
            } else
              e.removeAttribute(C);
          else h || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && ke(e, $, w);
        }
    }
  }
  return l && nn(!0), u;
}
function la(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Uu]: e.nodeName.includes("-"),
      [Gu]: e.namespaceURI === Rf
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function Ju(e) {
  var t = vl.get(e.nodeName);
  if (t) return t;
  vl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = yu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ws(r);
  }
  return t;
}
var $r, Oo, wi, Wa, Qu;
const Ka = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    qr(this, Wa), qr(this, $r, /* @__PURE__ */ new WeakMap()), qr(this, Oo), qr(this, wi), Si(this, wi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = wt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), wt(this, $r).set(t, r), Mf(this, Wa, Qu).call(this).observe(t, wt(this, wi)), () => {
      var o = wt(this, $r).get(t);
      o.delete(n), o.size === 0 && (wt(this, $r).delete(t), wt(this, Oo).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakSet(), Qu = function() {
  return wt(this, Oo) ?? Si(this, Oo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ka.entries.set(t.target, t);
        for (var n of wt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ft(Ka, "entries", /* @__PURE__ */ new WeakMap());
let U1 = Ka;
var G1 = /* @__PURE__ */ new U1({
  box: "border-box"
});
function gl(e, t, n) {
  var r = G1.observe(e, () => n(e[t]));
  tn(() => (Nn(() => n(e[t])), r));
}
function hl(e, t) {
  return e === t || (e == null ? void 0 : e[ur]) === t;
}
function zn(e = {}, t, n, r) {
  return tn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], Nn(() => {
        e !== n(...i) && (t(e, ...i), o && hl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Ko(() => {
        i && hl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Xe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Je
  ), n = t.l.u;
  if (!n) return;
  let r = () => ne(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Fr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && l1(() => {
    pl(t, r), Ho(n.b);
  }), $n(() => {
    const o = Nn(() => n.m.map(Yf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && $n(() => {
    pl(t, r), Ho(n.a);
  });
}
function pl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Ge(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Wo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function mn(e) {
  Je === null && ea(), uo && Je.l !== null ? Q1(Je).m.push(e) : $n(() => {
    const t = Nn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Os(e) {
  Je === null && ea(), mn(() => () => Nn(e));
}
function J1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function ua() {
  const e = Je;
  return e === null && ea(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Wo(i) ? i.slice() : [i], s = J1(
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
function Ts(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), _t;
  const r = Nn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Rr = [];
function un(e, t) {
  return {
    subscribe: Se(e, t).subscribe
  };
}
function Se(e, t = _t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Cs(e, s) && (e = s, n)) {
      const l = !Rr.length;
      for (const u of r)
        u[1](), Rr.push(u, e);
      if (l) {
        for (let u = 0; u < Rr.length; u += 2)
          Rr[u][0](Rr[u + 1]);
        Rr.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = _t) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || _t), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function cr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return un(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = _t;
    const v = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, a, s);
      i ? a(p) : d = typeof p == "function" ? p : _t;
    }, g = o.map(
      (p, b) => Ts(
        p,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && v();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, v(), function() {
      Ho(g), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return Ts(e, (n) => t = n)(), t;
}
let di = !1, Fa = Symbol();
function re(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ue(void 0),
    unsubscribe: _t
  });
  if (r.store !== e && !(Fa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = _t;
    else {
      var o = !0;
      r.unsubscribe = Ts(e, (i) => {
        o ? r.source.v = i : Q(r.source, i);
      }), o = !1;
    }
  return e && Fa in n ? F(e) : f(r.source);
}
function ev(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = _t), e;
}
function Li(e, t) {
  return e.set(t), t;
}
function vt() {
  const e = {};
  function t() {
    ks(() => {
      for (var n in e)
        e[n].unsubscribe();
      To(e, Fa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function tv(e) {
  var t = di;
  try {
    return di = !1, [e(), di];
  } finally {
    di = t;
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
function Vt(e, t, n) {
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
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      pu
    )), e.special[t](n), sl(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), sl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ht(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Gr(0) }, rv);
}
const ov = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (xo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      xo(o) && (o = o());
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
      if (xo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Xn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ur || t === xs) return !1;
    for (let n of e.props)
      if (xo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      xo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function mt(...e) {
  return new Proxy({ props: e }, ov);
}
function ml(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & Vf) !== 0, a = !uo || (n & Nf) !== 0, s = (n & zf) !== 0, l = (n & Af) !== 0, u = !1, c;
  s ? [c, u] = tv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = ur in e || xs in e, v = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, g = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? g = Nn(
    /** @type {() => V} */
    r
  ) : g = /** @type {V} */
  r), g);
  c === void 0 && r !== void 0 && (v && a && n1(), c = x(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (p = !0, b = !1, P);
    };
  else {
    var h = (i ? Fr : Ce)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Kf, $ = () => {
      var P = f(h);
      return P !== void 0 && (g = /** @type {V} */
      void 0), P === void 0 ? g : P;
    };
  }
  if (!(n & pu))
    return $;
  if (v) {
    var C = e.$$legacy;
    return function(P, L) {
      return arguments.length > 0 ? ((!a || !L || C || u) && v(L ? $() : P), P) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ ue(c), M = /* @__PURE__ */ Fr(() => {
    var P = $(), L = f(k);
    return w ? (w = !1, L) : k.v = P;
  });
  return s && f(M), i || (M.equals = _s), function(P, L) {
    if (arguments.length > 0) {
      const D = L ? f(M) : a && s ? bn(P) : P;
      if (!M.equals(D)) {
        if (w = !0, Q(k, D), b && g !== void 0 && (g = D), ml(M))
          return P;
        Nn(() => f(M));
      }
      return P;
    }
    return ml(M) ? M.v : f(M);
  };
}
function iv(e) {
  return new av(e);
}
var or, yn;
class av {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    qr(this, or), qr(this, yn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ue(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === xs ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return Q(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    Si(this, yn, (t.hydrate ? A1 : Xu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Si(this, or, i.$$events);
    for (const a of Object.keys(wt(this, yn)))
      a === "$set" || a === "$destroy" || a === "$on" || To(this, a, {
        get() {
          return wt(this, yn)[a];
        },
        /** @param {any} value */
        set(s) {
          wt(this, yn)[a] = s;
        },
        enumerable: !0
      });
    wt(this, yn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, wt(this, yn).$destroy = () => {
      I1(wt(this, yn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    wt(this, yn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    wt(this, or)[t] = wt(this, or)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return wt(this, or)[t].push(r), () => {
      wt(this, or)[t] = wt(this, or)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    wt(this, yn).$destroy();
  }
}
or = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap();
let ec;
typeof HTMLElement == "function" && (ec = class extends HTMLElement {
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
        o in this.$$d || (this.$$d[o] = bi(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = u1(() => {
        fo(() => {
          var r;
          this.$$r = !0;
          for (const o of Ei(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = bi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = bi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Ei(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function bi(e, t, n, r) {
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
  let a = class extends ec {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ei(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Ei(t).forEach((s) => {
    To(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = bi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Xn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    To(a.prototype, s, {
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
function ca() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new xi(n);
}
function xi(e) {
  this._ = e;
}
function uv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
xi.prototype = ca.prototype = {
  constructor: xi,
  on: function(e, t) {
    var n = this._, r = uv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = cv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = yl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = yl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new xi(e);
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
function yl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = lv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ua = "http://www.w3.org/1999/xhtml";
const wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ua,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function da(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), wl.hasOwnProperty(t) ? { space: wl[t], local: e } : e;
}
function dv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ua && t.documentElement.namespaceURI === Ua ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function fv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function tc(e) {
  var t = da(e);
  return (t.local ? fv : dv)(t);
}
function vv() {
}
function Hs(e) {
  return e == null ? vv : function() {
    return this.querySelector(e);
  };
}
function gv(e) {
  typeof e != "function" && (e = Hs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new sn(r, this._parents);
}
function hv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function pv() {
  return [];
}
function nc(e) {
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
  typeof e == "function" ? e = mv(e) : e = nc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new sn(r, o);
}
function rc(e) {
  return function() {
    return this.matches(e);
  };
}
function oc(e) {
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
  return this.select(e == null ? xv : bv(typeof e == "function" ? e : oc(e)));
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
  return this.selectAll(e == null ? _v : kv(typeof e == "function" ? e : oc(e)));
}
function Ev(e) {
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new sn(r, this._parents);
}
function ic(e) {
  return new Array(e.length);
}
function Pv() {
  return new sn(this._enter || this._groups.map(ic), this._parents);
}
function Vi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Vi.prototype = {
  constructor: Vi,
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
function Mv(e) {
  return function() {
    return e;
  };
}
function Ov(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Vi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Tv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), g;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = g = a.call(l, l.__data__, s, t) + "", u.has(g) ? o[s] = l : u.set(g, l));
  for (s = 0; s < d; ++s)
    g = a.call(e, i[s], s, i) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = i[s], u.delete(g)) : n[s] = new Vi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function Hv(e) {
  return e.__data__;
}
function Dv(e, t) {
  if (!arguments.length) return Array.from(this, Hv);
  var n = t ? Tv : Ov, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Mv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, g = Lv(e.call(c, c && c.__data__, u, r)), p = g.length, b = s[u] = new Array(p), x = a[u] = new Array(p), $ = l[u] = new Array(v);
    n(c, d, b, x, $, g, t);
    for (var h = 0, C = 0, w, k; h < p; ++h)
      if (w = b[h]) {
        for (h >= C && (C = h + 1); !(k = x[C]) && ++C < p; ) ;
        w._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function Lv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vv() {
  return new sn(this._exit || this._groups.map(ic), this._parents);
}
function Nv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function zv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), g, p = 0; p < d; ++p)
      (g = u[p] || c[p]) && (v[p] = g);
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
function Iv(e) {
  e || (e = Rv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new sn(o, this._parents).order();
}
function Rv(e, t) {
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
function Uv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Gv(e, t) {
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
  var n = da(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Kv : Wv : typeof t == "function" ? n.local ? Jv : Gv : n.local ? Uv : Fv)(n, t));
}
function ac(e) {
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
  return arguments.length > 1 ? this.each((t == null ? eg : typeof t == "function" ? ng : tg)(e, t, n ?? "")) : eo(this.node(), e);
}
function eo(e, t) {
  return e.style.getPropertyValue(t) || ac(e).getComputedStyle(e, null).getPropertyValue(t);
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
function sc(e) {
  return e.trim().split(/^|\s+/);
}
function Ds(e) {
  return e.classList || new lc(e);
}
function lc(e) {
  this._node = e, this._names = sc(e.getAttribute("class") || "");
}
lc.prototype = {
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
function uc(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function cc(e, t) {
  for (var n = Ds(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lg(e) {
  return function() {
    uc(this, e);
  };
}
function ug(e) {
  return function() {
    cc(this, e);
  };
}
function cg(e, t) {
  return function() {
    (t.apply(this, arguments) ? uc : cc)(this, e);
  };
}
function dg(e, t) {
  var n = sc(e + "");
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
  var t = typeof e == "function" ? e : tc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kg() {
  return null;
}
function Sg(e, t) {
  var n = typeof e == "function" ? e : tc(e), r = t == null ? kg : typeof t == "function" ? t : Hs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Pg() {
  return this.each(Eg);
}
function Mg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Og() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tg(e) {
  return this.select(e ? Og : Mg);
}
function Hg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Lg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Vg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ng(e, t, n) {
  return function() {
    var r = this.__on, o, i = Dg(t);
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
function zg(e, t, n) {
  var r = Lg(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < i; ++o)
          if ((a = r[o]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Ng : Vg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function dc(e, t, n) {
  var r = ac(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ag(e, t) {
  return function() {
    return dc(this, e, t);
  };
}
function Ig(e, t) {
  return function() {
    return dc(this, e, t.apply(this, arguments));
  };
}
function Rg(e, t) {
  return this.each((typeof t == "function" ? Ig : Ag)(e, t));
}
function* qg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var fc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function Uo() {
  return new sn([[document.documentElement]], fc);
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
  data: Dv,
  enter: Pv,
  exit: Vv,
  join: Nv,
  merge: zv,
  selection: Zg,
  order: Av,
  sort: Iv,
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
  remove: Pg,
  clone: Tg,
  datum: Hg,
  on: zg,
  dispatch: Rg,
  [Symbol.iterator]: qg
};
function dn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], fc);
}
function Bg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function wn(e, t) {
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
const jg = { passive: !1 }, zo = { capture: !0, passive: !1 };
function Oa(e) {
  e.stopImmediatePropagation();
}
function jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = dn(e).on("dragstart.drag", jr, zo);
  "onselectstart" in t ? n.on("selectstart.drag", jr, zo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function gc(e, t) {
  var n = e.document.documentElement, r = dn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", jr, zo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const fi = (e) => () => e;
function Ga(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
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
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ga.prototype.on = function() {
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
  var e = Xg, t = Yg, n = Wg, r = Kg, o = {}, i = ca("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", x).on("touchmove.drag", $, jg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var M = C(this, t.call(this, w, k), w, k, "mouse");
      M && (dn(w.view).on("mousemove.drag", p, zo).on("mouseup.drag", b, zo), vc(w.view), Oa(w), u = !1, s = w.clientX, l = w.clientY, M("start", w));
    }
  }
  function p(w) {
    if (jr(w), !u) {
      var k = w.clientX - s, M = w.clientY - l;
      u = k * k + M * M > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    dn(w.view).on("mousemove.drag mouseup.drag", null), gc(w.view, u), jr(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var M = w.changedTouches, P = t.call(this, w, k), L = M.length, D, z;
      for (D = 0; D < L; ++D)
        (z = C(this, P, w, k, M[D].identifier, M[D])) && (Oa(w), z("start", w, M[D]));
    }
  }
  function $(w) {
    var k = w.changedTouches, M = k.length, P, L;
    for (P = 0; P < M; ++P)
      (L = o[k[P].identifier]) && (jr(w), L("drag", w, k[P]));
  }
  function h(w) {
    var k = w.changedTouches, M = k.length, P, L;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < M; ++P)
      (L = o[k[P].identifier]) && (Oa(w), L("end", w, k[P]));
  }
  function C(w, k, M, P, L, D) {
    var z = i.copy(), q = wn(D || M, k), N, I, S;
    if ((S = n.call(w, new Ga("beforestart", {
      sourceEvent: M,
      target: v,
      identifier: L,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), P)) != null)
      return N = S.x - q[0] || 0, I = S.y - q[1] || 0, function H(_, T, E) {
        var O = q, R;
        switch (_) {
          case "start":
            o[L] = H, R = a++;
            break;
          case "end":
            delete o[L], --a;
          // falls through
          case "drag":
            q = wn(E || T, k), R = a;
            break;
        }
        z.call(
          _,
          w,
          new Ga(_, {
            sourceEvent: T,
            subject: S,
            target: v,
            identifier: L,
            active: R,
            x: q[0] + N,
            y: q[1] + I,
            dx: q[0] - O[0],
            dy: q[1] - O[1],
            dispatch: z
          }),
          P
        );
      };
  }
  return v.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : fi(!!w), v) : e;
  }, v.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : fi(w), v) : t;
  }, v.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : fi(w), v) : n;
  }, v.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : fi(!!w), v) : r;
  }, v.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? v : w;
  }, v.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, v) : Math.sqrt(d);
  }, v;
}
function Ls(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function hc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Go() {
}
var Ao = 0.7, Ni = 1 / Ao, Xr = "\\s*([+-]?\\d+)\\s*", Io = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ug = /^#([0-9a-f]{3,8})$/, Gg = new RegExp(`^rgb\\(${Xr},${Xr},${Xr}\\)$`), Jg = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), Qg = new RegExp(`^rgba\\(${Xr},${Xr},${Xr},${Io}\\)$`), eh = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Io}\\)$`), th = new RegExp(`^hsl\\(${Io},${Tn},${Tn}\\)$`), nh = new RegExp(`^hsla\\(${Io},${Tn},${Tn},${Io}\\)$`), bl = {
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
Ls(Go, Ro, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xl,
  // Deprecated! Use color.formatHex.
  formatHex: xl,
  formatHex8: rh,
  formatHsl: oh,
  formatRgb: $l,
  toString: $l
});
function xl() {
  return this.rgb().formatHex();
}
function rh() {
  return this.rgb().formatHex8();
}
function oh() {
  return pc(this).formatHsl();
}
function $l() {
  return this.rgb().formatRgb();
}
function Ro(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ug.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Cl(t) : n === 3 ? new Ut(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gg.exec(e)) ? new Ut(t[1], t[2], t[3], 1) : (t = Jg.exec(e)) ? new Ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qg.exec(e)) ? vi(t[1], t[2], t[3], t[4]) : (t = eh.exec(e)) ? vi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = th.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = nh.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? Cl(bl[e]) : e === "transparent" ? new Ut(NaN, NaN, NaN, 0) : null;
}
function Cl(e) {
  return new Ut(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ut(e, t, n, r);
}
function ih(e) {
  return e instanceof Go || (e = Ro(e)), e ? (e = e.rgb(), new Ut(e.r, e.g, e.b, e.opacity)) : new Ut();
}
function Ja(e, t, n, r) {
  return arguments.length === 1 ? ih(e) : new Ut(e, t, n, r ?? 1);
}
function Ut(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ls(Ut, Ja, hc(Go, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new Ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ao : Math.pow(Ao, e), new Ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ut(Sr(this.r), Sr(this.g), Sr(this.b), zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: ah,
  formatRgb: kl,
  toString: kl
}));
function _l() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function ah() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = zi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sr(this.r)}, ${Sr(this.g)}, ${Sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = Sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xn(e, t, n, r);
}
function pc(e) {
  if (e instanceof xn) return new xn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Go || (e = Ro(e)), !e) return new xn();
  if (e instanceof xn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new xn(a, s, l, e.opacity);
}
function sh(e, t, n, r) {
  return arguments.length === 1 ? pc(e) : new xn(e, t, n, r ?? 1);
}
function xn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ls(xn, sh, hc(Go, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ao : Math.pow(Ao, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ut(
      Ta(e >= 240 ? e - 240 : e + 120, o, r),
      Ta(e, o, r),
      Ta(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new xn(El(this.h), gi(this.s), gi(this.l), zi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${El(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function El(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ta(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const mc = (e) => () => e;
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
  return (e = +e) == 1 ? yc : function(t, n) {
    return n - t ? uh(t, n, e) : mc(isNaN(t) ? n : t);
  };
}
function yc(e, t) {
  var n = t - e;
  return n ? lh(e, n) : mc(isNaN(e) ? t : e);
}
const Pl = function e(t) {
  var n = ch(t);
  function r(o, i) {
    var a = n((o = Ja(o)).r, (i = Ja(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = yc(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function ar(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ha = new RegExp(Qa.source, "g");
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
  var n = Qa.lastIndex = Ha.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Qa.exec(e)) && (o = Ha.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ar(r, o) })), n = Ha.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fh(l[0].x) : dh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Ml = 180 / Math.PI, wc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function bc(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ml,
    skewX: Math.atan(l) * Ml,
    scaleX: a,
    scaleY: s
  };
}
var hi;
function gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? wc : bc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hh(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? wc : (e = e.matrix, bc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var b = g.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: ar(u, d) }, { i: b - 2, x: ar(c, v) });
    } else (d || v) && g.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ar(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ar(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, g, p) {
    if (u !== d || c !== v) {
      var b = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: ar(u, d) }, { i: b - 2, x: ar(c, v) });
    } else (d !== 1 || v !== 1) && g.push(o(g) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(g) {
      for (var p = -1, b = v.length, x; ++p < b; ) d[(x = v[p]).i] = x.x(g);
      return d.join("");
    };
  };
}
var ph = xc(gh, "px, ", "px)", "deg)"), mh = xc(hh, ", ", ")", ")"), yh = 1e-12;
function Ol(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], g = c - s, p = d - l, b = g * g + p * p, x, $;
    if (b < yh)
      $ = Math.log(v / u) / t, x = function(P) {
        return [
          s + P * g,
          l + P * p,
          u * Math.exp(t * P * $)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (v * v - u * u + r * b) / (2 * u * n * h), w = (v * v - u * u - r * b) / (2 * v * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), M = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (M - k) / t, x = function(P) {
        var L = P * $, D = Ol(k), z = u / (n * h) * (D * bh(t * L + k) - wh(k));
        return [
          s + z * g,
          l + z * p,
          u * D / Ol(t * L + k)
        ];
      };
    }
    return x.duration = $ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var to = 0, So = 0, Co = 0, $c = 1e3, Ai, Eo, Ii = 0, Mr = 0, fa = 0, qo = typeof performance == "object" && performance.now ? performance : Date, Cc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Vs() {
  return Mr || (Cc($h), Mr = qo.now() + fa);
}
function $h() {
  Mr = 0;
}
function Ri() {
  this._call = this._time = this._next = null;
}
Ri.prototype = _c.prototype = {
  constructor: Ri,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vs() : +n) + (t == null ? 0 : +t), !this._next && Eo !== this && (Eo ? Eo._next = this : Ai = this, Eo = this), this._call = e, this._time = n, es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, es());
  }
};
function _c(e, t, n) {
  var r = new Ri();
  return r.restart(e, t, n), r;
}
function Ch() {
  Vs(), ++to;
  for (var e = Ai, t; e; )
    (t = Mr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --to;
}
function Tl() {
  Mr = (Ii = qo.now()) + fa, to = So = 0;
  try {
    Ch();
  } finally {
    to = 0, kh(), Mr = 0;
  }
}
function _h() {
  var e = qo.now(), t = e - Ii;
  t > $c && (fa -= t, Ii = e);
}
function kh() {
  for (var e, t = Ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ai = n);
  Eo = e, es(r);
}
function es(e) {
  if (!to) {
    So && (So = clearTimeout(So));
    var t = e - Mr;
    t > 24 ? (e < 1 / 0 && (So = setTimeout(Tl, e - qo.now() - fa)), Co && (Co = clearInterval(Co))) : (Co || (Ii = qo.now(), Co = setInterval(_h, $c)), to = 1, Cc(Tl));
  }
}
function Hl(e, t, n) {
  var r = new Ri();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sh = ca("start", "end", "cancel", "interrupt"), Eh = [], kc = 0, Dl = 1, ts = 2, $i = 3, Ll = 4, ns = 5, Ci = 6;
function va(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Ph(e, n, {
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
    state: kc
  });
}
function Ns(e, t) {
  var n = En(e, t);
  if (n.state > kc) throw new Error("too late; already scheduled");
  return n;
}
function Rn(e, t) {
  var n = En(e, t);
  if (n.state > $i) throw new Error("too late; already running");
  return n;
}
function En(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Ph(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = _c(i, 0, n.time);
  function i(u) {
    n.state = Dl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, v, g;
    if (n.state !== Dl) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === $i) return Hl(a);
        g.state === Ll ? (g.state = Ci, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Ci, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (Hl(function() {
      n.state === $i && (n.state = Ll, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = ts, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ts) {
      for (n.state = $i, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = g);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ns, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === ns && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ci, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function _i(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ts && r.state < ns, r.state = Ci, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Mh(e) {
  return this.each(function() {
    _i(this, e);
  });
}
function Oh(e, t) {
  var n, r;
  return function() {
    var o = Rn(this, e), i = o.tween;
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
function Th(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Rn(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    i.tween = o;
  };
}
function Hh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = En(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Oh : Th)(n, e, t));
}
function zs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Rn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return En(o, r).value[t];
  };
}
function Sc(e, t) {
  var n;
  return (typeof t == "number" ? ar : t instanceof Ro ? Pl : (n = Ro(t)) ? (t = n, Pl) : vh)(e, t);
}
function Dh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Lh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Vh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Nh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function zh(e, t, n) {
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
function Ih(e, t) {
  var n = da(e), r = n === "transform" ? mh : Sc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ah : zh)(n, r, zs(this, "attr." + e, t)) : t == null ? (n.local ? Lh : Dh)(n) : (n.local ? Nh : Vh)(n, r, t));
}
function Rh(e, t) {
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
    return i !== r && (n = (r = i) && Rh(e, i)), n;
  }
  return o._value = t, o;
}
function jh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = da(e);
  return this.tween(n, (r.local ? Zh : Bh)(r, t));
}
function Xh(e, t) {
  return function() {
    Ns(this, e).delay = +t.apply(this, arguments);
  };
}
function Yh(e, t) {
  return t = +t, function() {
    Ns(this, e).delay = t;
  };
}
function Wh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xh : Yh)(t, e)) : En(this.node(), t).delay;
}
function Kh(e, t) {
  return function() {
    Rn(this, e).duration = +t.apply(this, arguments);
  };
}
function Fh(e, t) {
  return t = +t, function() {
    Rn(this, e).duration = t;
  };
}
function Uh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kh : Fh)(t, e)) : En(this.node(), t).duration;
}
function Gh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Rn(this, e).ease = t;
  };
}
function Jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Gh(t, e)) : En(this.node(), t).ease;
}
function Qh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rn(this, e).ease = n;
  };
}
function ep(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Qh(this._id, e));
}
function tp(e) {
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Un(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, g = 0; g < c; ++g)
      (v = l[g] || u[g]) && (d[g] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Un(a, this._parents, this._name, this._id);
}
function rp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function op(e, t, n) {
  var r, o, i = rp(t) ? Ns : Rn;
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
  typeof e != "function" && (e = Hs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, va(u[v], t, n, v, u, En(c, n)));
  return new Un(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), g, p = En(c, n), b = 0, x = v.length; b < x; ++b)
          (g = v[b]) && va(g, t, n, b, v, p);
        i.push(v), a.push(c);
      }
  return new Un(i, a, t, n);
}
var cp = Uo.prototype.constructor;
function dp() {
  return new cp(this._groups, this._parents);
}
function fp(e, t) {
  var n, r, o;
  return function() {
    var i = eo(this, e), a = (this.style.removeProperty(e), eo(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Ec(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = eo(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function gp(e, t, n) {
  var r, o, i;
  return function() {
    var a = eo(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), eo(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function hp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Rn(this, e), u = l.on, c = l.value[i] == null ? s || (s = Ec(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? ph : Sc;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Ec(e)) : typeof t == "function" ? this.styleTween(e, gp(e, r, zs(this, "style." + e, t))).each(hp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? xp(zs(this, "text", e)) : bp(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = Pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = En(l, t);
        va(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Un(r, this._parents, e, n);
}
function Ep() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Rn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Pp = 0;
function Un(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pc() {
  return ++Pp;
}
var Zn = Uo.prototype;
Un.prototype = {
  constructor: Un,
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
  attr: Ih,
  attrTween: jh,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: kp,
  remove: sp,
  tween: Hh,
  delay: Wh,
  duration: Uh,
  ease: Jh,
  easeVarying: ep,
  end: Ep,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Mp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Op = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mp
};
function Tp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Hp(e) {
  var t, n;
  e instanceof Un ? (t = e._id, e = e._name) : (t = Pc(), (n = Op).time = Vs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && va(l, e, t, u, a, n || Tp(l, t));
  return new Un(r, this._parents, e, t);
}
Uo.prototype.interrupt = Mh;
Uo.prototype.transition = Hp;
const pi = (e) => () => e;
function Dp(e, {
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
var ga = new Bn(1, 0, 0);
Mc.prototype = Bn.prototype;
function Mc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ga;
  return e.__zoom;
}
function Da(e) {
  e.stopImmediatePropagation();
}
function _o(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Vp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Vl() {
  return this.__zoom || ga;
}
function Np(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function zp() {
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
  var e = Lp, t = Vp, n = Ap, r = Np, o = zp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xh, u = ca("start", "zoom", "end"), c, d, v, g = 500, p = 150, b = 0, x = 10;
  function $(S) {
    S.property("__zoom", Vl).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, H, _, T) {
    var E = S.selection ? S.selection() : S;
    E.property("__zoom", Vl), S !== E ? k(S, H, _, T) : E.interrupt().each(function() {
      M(this, arguments).event(T).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, $.scaleBy = function(S, H, _, T) {
    $.scaleTo(S, function() {
      var E = this.__zoom.k, O = typeof H == "function" ? H.apply(this, arguments) : H;
      return E * O;
    }, _, T);
  }, $.scaleTo = function(S, H, _, T) {
    $.transform(S, function() {
      var E = t.apply(this, arguments), O = this.__zoom, R = _ == null ? w(E) : typeof _ == "function" ? _.apply(this, arguments) : _, X = O.invert(R), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(C(h(O, W), R, X), E, a);
    }, _, T);
  }, $.translateBy = function(S, H, _, T) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), a);
    }, null, T);
  }, $.translateTo = function(S, H, _, T, E) {
    $.transform(S, function() {
      var O = t.apply(this, arguments), R = this.__zoom, X = T == null ? w(O) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(ga.translate(X[0], X[1]).scale(R.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), O, a);
    }, T, E);
  };
  function h(S, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === S.k ? S : new Bn(H, S.x, S.y);
  }
  function C(S, H, _) {
    var T = H[0] - _[0] * S.k, E = H[1] - _[1] * S.k;
    return T === S.x && E === S.y ? S : new Bn(S.k, T, E);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, H, _, T) {
    S.on("start.zoom", function() {
      M(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var E = this, O = arguments, R = M(E, O).event(T), X = t.apply(E, O), W = _ == null ? w(X) : typeof _ == "function" ? _.apply(E, O) : _, ee = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), G = E.__zoom, K = typeof H == "function" ? H.apply(E, O) : H, ae = l(G.invert(W).concat(ee / G.k), K.invert(W).concat(ee / K.k));
      return function(he) {
        if (he === 1) he = K;
        else {
          var ge = ae(he), ce = ee / ge[2];
          he = new Bn(ce, W[0] - ge[0] * ce, W[1] - ge[1] * ce);
        }
        R.zoom(null, he);
      };
    });
  }
  function M(S, H, _) {
    return !_ && S.__zooming || new P(S, H);
  }
  function P(S, H) {
    this.that = S, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, H), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, H) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var H = dn(this.that).datum();
      u.call(
        S,
        this.that,
        new Dp(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function L(S, ...H) {
    if (!e.apply(this, arguments)) return;
    var _ = M(this, H).event(S), T = this.__zoom, E = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), O = wn(S);
    if (_.wheel)
      (_.mouse[0][0] !== O[0] || _.mouse[0][1] !== O[1]) && (_.mouse[1] = T.invert(_.mouse[0] = O)), clearTimeout(_.wheel);
    else {
      if (T.k === E) return;
      _.mouse = [O, T.invert(O)], _i(this), _.start();
    }
    _o(S), _.wheel = setTimeout(R, p), _.zoom("mouse", n(C(h(T, E), _.mouse[0], _.mouse[1]), _.extent, a));
    function R() {
      _.wheel = null, _.end();
    }
  }
  function D(S, ...H) {
    if (v || !e.apply(this, arguments)) return;
    var _ = S.currentTarget, T = M(this, H, !0).event(S), E = dn(S.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ee, !0), O = wn(S, _), R = S.clientX, X = S.clientY;
    vc(S.view), Da(S), T.mouse = [O, this.__zoom.invert(O)], _i(this), T.start();
    function W(G) {
      if (_o(G), !T.moved) {
        var K = G.clientX - R, ae = G.clientY - X;
        T.moved = K * K + ae * ae > b;
      }
      T.event(G).zoom("mouse", n(C(T.that.__zoom, T.mouse[0] = wn(G, _), T.mouse[1]), T.extent, a));
    }
    function ee(G) {
      E.on("mousemove.zoom mouseup.zoom", null), gc(G.view, T.moved), _o(G), T.event(G).end();
    }
  }
  function z(S, ...H) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, T = wn(S.changedTouches ? S.changedTouches[0] : S, this), E = _.invert(T), O = _.k * (S.shiftKey ? 0.5 : 2), R = n(C(h(_, O), T, E), t.apply(this, H), a);
      _o(S), s > 0 ? dn(this).transition().duration(s).call(k, R, T, S) : dn(this).call($.transform, R, T, S);
    }
  }
  function q(S, ...H) {
    if (e.apply(this, arguments)) {
      var _ = S.touches, T = _.length, E = M(this, H, S.changedTouches.length === T).event(S), O, R, X, W;
      for (Da(S), R = 0; R < T; ++R)
        X = _[R], W = wn(X, this), W = [W, this.__zoom.invert(W), X.identifier], E.touch0 ? !E.touch1 && E.touch0[2] !== W[2] && (E.touch1 = W, E.taps = 0) : (E.touch0 = W, O = !0, E.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (E.taps < 2 && (d = W[0], c = setTimeout(function() {
        c = null;
      }, g)), _i(this), E.start());
    }
  }
  function N(S, ...H) {
    if (this.__zooming) {
      var _ = M(this, H).event(S), T = S.changedTouches, E = T.length, O, R, X, W;
      for (_o(S), O = 0; O < E; ++O)
        R = T[O], X = wn(R, this), _.touch0 && _.touch0[2] === R.identifier ? _.touch0[0] = X : _.touch1 && _.touch1[2] === R.identifier && (_.touch1[0] = X);
      if (R = _.that.__zoom, _.touch1) {
        var ee = _.touch0[0], G = _.touch0[1], K = _.touch1[0], ae = _.touch1[1], he = (he = K[0] - ee[0]) * he + (he = K[1] - ee[1]) * he, ge = (ge = ae[0] - G[0]) * ge + (ge = ae[1] - G[1]) * ge;
        R = h(R, Math.sqrt(he / ge)), X = [(ee[0] + K[0]) / 2, (ee[1] + K[1]) / 2], W = [(G[0] + ae[0]) / 2, (G[1] + ae[1]) / 2];
      } else if (_.touch0) X = _.touch0[0], W = _.touch0[1];
      else return;
      _.zoom("touch", n(C(R, X, W), _.extent, a));
    }
  }
  function I(S, ...H) {
    if (this.__zooming) {
      var _ = M(this, H).event(S), T = S.changedTouches, E = T.length, O, R;
      for (Da(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, g), O = 0; O < E; ++O)
        R = T[O], _.touch0 && _.touch0[2] === R.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === R.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (R = wn(R, this), Math.hypot(d[0] - R[0], d[1] - R[1]) < x)) {
        var X = dn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : pi(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : pi(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : pi(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : pi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
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
    var S = u.on.apply(u, arguments);
    return S === u ? $ : S;
  }, $.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, $) : Math.sqrt(b);
  }, $.tapDistance = function(S) {
    return arguments.length ? (x = +S, $) : x;
  }, $;
}
const no = {
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
}, qi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Or;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Or || (Or = {}));
var dr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(dr || (dr = {}));
var Zi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Zi || (Zi = {}));
const rs = {
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
var Zo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Zo || (Zo = {}));
var Ve;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ve || (Ve = {}));
const Nl = {
  [Ve.Left]: Ve.Right,
  [Ve.Right]: Ve.Left,
  [Ve.Top]: Ve.Bottom,
  [Ve.Bottom]: Ve.Top
};
function Ip(e, t) {
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
function zl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Rp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const qp = (e) => "id" in e && "source" in e && "target" in e, Zp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), As = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Jo = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Bp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : As(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Bi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ha(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return pa(n);
}, Qo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Bi(r);
      n = ha(n, o);
    }
  }), pa(n);
}, Tc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...ei(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Bo(s, oo(u)), x = (g ?? 0) * (p ?? 0), $ = i && b > 0;
    (!u.internals.handleBounds || $ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, os = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Al(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Il({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Qo(e), l = Rs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function jp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", no.error005());
    else {
      const g = s.measured.width, p = s.measured.height;
      g && p && (d = [
        [l, u],
        [l + g, u + p]
      ]);
    }
  else s && io(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = io(d) ? Tr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", no.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
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
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = os(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((v) => v.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: a
    };
  const c = await o({
    nodes: a,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: a } : { edges: [], nodes: [] } : c;
}
const ro = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Tr = (e = { x: 0, y: 0 }, t, n) => ({
  x: ro(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ro(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Dc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Tr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const Rl = (e, t, n) => e < t ? ro(Math.abs(e - t), 1, t) / t : e > n ? -ro(Math.abs(e - n), 1, t) / t : 0, Lc = (e, t, n = 15, r = 40) => {
  const o = Rl(e.x, r, t.width - r) * n, i = Rl(e.y, r, t.height - r) * n;
  return [o, i];
}, ha = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), is = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), pa = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), oo = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Bi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Jo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Vc = (e, t) => pa(ha(is(e), is(t))), Bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ql = (e) => jn(e.width) && jn(e.height) && jn(e.x) && jn(e.y), jn = (e) => !isNaN(e) && isFinite(e), Xp = (e, t) => {
}, Is = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ei = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Is(s, a) : s;
}, Nc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Rs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = ro(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, v = t / 2 - c * u, g = n / 2 - d * u;
  return { x: v, y: g, zoom: u };
}, ji = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function io(e) {
  return e !== void 0 && e !== "parent";
}
function yr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function zc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Yp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function La(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Wn(e), s = ei({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Is(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const qs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Wp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Kp = ["INPUT", "SELECT", "TEXTAREA"];
function Fp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Kp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ac = (e) => "clientX" in e, Wn = (e, t) => {
  var n, r;
  const o = Ac(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Zl = (e, t, n, r, o) => {
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
      ...qs(a)
    };
  });
};
function Up({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function mi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Bl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ve.Left:
      return [t - mi(t - r, i), n];
    case Ve.Right:
      return [t + mi(r - t, i), n];
    case Ve.Top:
      return [t, n - mi(n - o, i)];
    case Ve.Bottom:
      return [t, n + mi(o - n, i)];
  }
}
function Ic({ sourceX: e, sourceY: t, sourcePosition: n = Ve.Bottom, targetX: r, targetY: o, targetPosition: i = Ve.Top, curvature: a = 0.25 }) {
  const [s, l] = Bl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = Bl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, v, g, p] = Up({
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
    v,
    g,
    p
  ];
}
function Rc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Gp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Jp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ha(Bi(e), Bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Bo(a, pa(i)) > 0;
}
const Qp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, e0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), t0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return qp(e) ? n = { ...e } : n = {
    ...e,
    id: Qp(e)
  }, e0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function as({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Rc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const jl = {
  [Ve.Left]: { x: -1, y: 0 },
  [Ve.Right]: { x: 1, y: 0 },
  [Ve.Top]: { x: 0, y: -1 },
  [Ve.Bottom]: { x: 0, y: 1 }
}, n0 = ({ source: e, sourcePosition: t = Ve.Bottom, target: n }) => t === Ve.Left || t === Ve.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Xl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function r0({ source: e, sourcePosition: t = Ve.Bottom, target: n, targetPosition: r = Ve.Top, center: o, offset: i }) {
  const a = jl[t], s = jl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = n0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let g = [], p, b;
  const x = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, C, w, k] = Rc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, b = o.y ?? C;
    const M = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], P = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === v ? g = d === "x" ? M : P : g = d === "x" ? P : M;
  } else {
    const M = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = a.x === v ? P : M : g = a.y === v ? M : P, t === r) {
      const N = Math.abs(e[d] - n[d]);
      if (N <= i) {
        const I = Math.min(i - 1, i - N);
        a[d] === v ? x[d] = (l[d] > e[d] ? -1 : 1) * I : $[d] = (u[d] > n[d] ? -1 : 1) * I;
      }
    }
    if (t !== r) {
      const N = d === "x" ? "y" : "x", I = a[d] === s[N], S = l[N] > u[N], H = l[N] < u[N];
      (a[d] === 1 && (!I && S || I && H) || a[d] !== 1 && (!I && H || I && S)) && (g = d === "x" ? M : P);
    }
    const L = { x: l.x + x.x, y: l.y + x.y }, D = { x: u.x + $.x, y: u.y + $.y }, z = Math.max(Math.abs(L.x - g[0].x), Math.abs(D.x - g[0].x)), q = Math.max(Math.abs(L.y - g[0].y), Math.abs(D.y - g[0].y));
    z >= q ? (p = (L.x + D.x) / 2, b = g[0].y) : (p = g[0].x, b = (L.y + D.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...g,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], p, b, w, k];
}
function o0(e, t, n, r) {
  const o = Math.min(Xl(e, t) / 2, Xl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Xi({ sourceX: e, sourceY: t, sourcePosition: n = Ve.Bottom, targetX: r, targetY: o, targetPosition: i = Ve.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, g, p] = r0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, $) => {
    let h = "";
    return $ > 0 && $ < c.length - 1 ? h = o0(c[$ - 1], x, c[$ + 1], a) : h = `${$ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, v, g, p];
}
function Yl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function i0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Yl(n) || !Yl(r))
    return null;
  const o = n.internals.handleBounds || Wl(n.handles), i = r.internals.handleBounds || Wl(r.handles), a = Kl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Kl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Or.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", no.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Ve.Bottom, u = (s == null ? void 0 : s.position) || Ve.Top, c = jo(n, a, l), d = jo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Wl(e) {
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
function jo(e, t, n = Ve.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ve.Top:
      return { x: o + a / 2, y: i };
    case Ve.Right:
      return { x: o + a, y: i + s / 2 };
    case Ve.Bottom:
      return { x: o + a / 2, y: i + s };
    case Ve.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Kl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ss(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function a0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ss(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function s0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case Ve.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Ve.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Ve.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Zs = {
  nodeOrigin: [0, 0],
  nodeExtent: qi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, l0 = {
  ...Zs,
  checkEquality: !0
};
function Bs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function u0(e, t, n) {
  const r = Bs(Zs, n);
  for (const o of e.values())
    if (o.parentId)
      js(o, e, t, r);
    else {
      const i = Jo(o, r.nodeOrigin), a = io(o.extent) ? o.extent : r.nodeExtent, s = Tr(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function qc(e, t, n, r) {
  var o, i;
  const a = Bs(l0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Jo(u, a.nodeOrigin), v = io(u.extent) ? u.extent : a.nodeExtent, g = Tr(d, v, yr(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: Zc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && js(c, t, n, r);
  }
}
function c0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function js(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Bs(Zs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = d0(e, l, i, a, u), { positionAbsolute: g } = e.internals, p = c !== g.x || d !== g.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : g,
      z: v
    }
  });
}
function Zc(e, t) {
  return (jn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Jo(e, n), u = io(e.extent) ? Tr(l, e.extent, s) : l;
  let c = Tr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Dc(c, s, t));
  const d = Zc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function f0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? oo(l), c = Vc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = yr(l), g = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), h = (x - v.width) * g[0], C = ($ - v.height) * g[1];
    (p > 0 || b > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + h,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + b
        }
      });
    })), (v.width < s.width || v.height < s.height || p || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (p ? g[0] * p - h : 0),
        height: $ + (b ? g[1] * b - C : 0)
      }
    });
  }), i;
}
function v0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const p = qs(v.nodeElement), b = g.measured.width !== p.width || g.measured.height !== p.height;
    if (p.width && p.height && (b || !g.internals.handleBounds || v.force)) {
      const x = v.nodeElement.getBoundingClientRect(), $ = io(g.extent) ? g.extent : i;
      let { positionAbsolute: h } = g.internals;
      g.parentId && g.extent === "parent" ? h = Dc(h, p, t.get(g.parentId)) : $ && (h = Tr(h, $, p));
      const C = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Zl("source", v.nodeElement, x, c, g.id),
            target: Zl("target", v.nodeElement, x, c, g.id)
          }
        }
      };
      t.set(g.id, C), g.parentId && js(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && d.push({
        id: g.id,
        parentId: g.parentId,
        rect: oo(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const v = f0(d, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function g0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Fl(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const l = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, l.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const u = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, u.set(n, t));
  }
}
function Bc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Fl("source", l, c, e, o, a), Fl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function h0(e, t) {
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
function jc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : jc(n, t) : !1;
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
function p0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !jc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function Va({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, a;
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
function m0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, g = !1;
  function p({ noDragClassName: x, handleSelector: $, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    v = dn(h);
    function M({ x: z, y: q }, N) {
      const { nodeLookup: I, nodeExtent: S, snapGrid: H, snapToGrid: _, nodeOrigin: T, onNodeDrag: E, onSelectionDrag: O, onError: R, updateNodePositions: X } = t();
      i = { x: z, y: q };
      let W = !1, ee = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const G = Qo(s);
        ee = is(G);
      }
      for (const [G, K] of s) {
        if (!I.has(G))
          continue;
        let ae = { x: z - K.distance.x, y: q - K.distance.y };
        _ && (ae = Is(ae, H));
        let he = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !K.extent) {
          const { positionAbsolute: _e } = K.internals, J = _e.x - ee.x + S[0][0], se = _e.x + K.measured.width - ee.x2 + S[1][0], Me = _e.y - ee.y + S[0][1], de = _e.y + K.measured.height - ee.y2 + S[1][1];
          he = [
            [J, Me],
            [se, de]
          ];
        }
        const { position: ge, positionAbsolute: ce } = jp({
          nodeId: G,
          nextPosition: ae,
          nodeLookup: I,
          nodeExtent: he,
          nodeOrigin: T,
          onError: R
        });
        W = W || K.position.x !== ge.x || K.position.y !== ge.y, K.position = ge, K.internals.positionAbsolute = ce;
      }
      if (W && (X(s, !0), N && (r || E || !w && O))) {
        const [G, K] = Va({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        r == null || r(N, s, G, K), E == null || E(N, G, K), w || O == null || O(N, K);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: z, panBy: q, autoPanSpeed: N, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, H] = Lc(u, c, N);
      (S !== 0 || H !== 0) && (i.x = (i.x ?? 0) - S / z[2], i.y = (i.y ?? 0) - H / z[2], await q({ x: S, y: H }) && M(i, null)), a = requestAnimationFrame(P);
    }
    function L(z) {
      var q;
      const { nodeLookup: N, multiSelectionActive: I, nodesDraggable: S, transform: H, snapGrid: _, snapToGrid: T, selectNodesOnDrag: E, onNodeDragStart: O, onSelectionDragStart: R, unselectNodesAndEdges: X } = t();
      d = !0, (!E || !C) && !I && w && ((q = N.get(w)) != null && q.selected || X()), C && E && w && (e == null || e(w));
      const W = La(z.sourceEvent, { transform: H, snapGrid: _, snapToGrid: T, containerBounds: c });
      if (i = W, s = p0(N, S, W, w), s.size > 0 && (n || O || !w && R)) {
        const [ee, G] = Va({
          nodeId: w,
          dragItems: s,
          nodeLookup: N
        });
        n == null || n(z.sourceEvent, s, ee, G), O == null || O(z.sourceEvent, ee, G), w || R == null || R(z.sourceEvent, G);
      }
    }
    const D = Fg().clickDistance(k).on("start", (z) => {
      const { domNode: q, nodeDragThreshold: N, transform: I, snapGrid: S, snapToGrid: H } = t();
      c = (q == null ? void 0 : q.getBoundingClientRect()) || null, g = !1, N === 0 && L(z), i = La(z.sourceEvent, { transform: I, snapGrid: S, snapToGrid: H, containerBounds: c }), u = Wn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: q, transform: N, snapGrid: I, snapToGrid: S, nodeDragThreshold: H, nodeLookup: _ } = t(), T = La(z.sourceEvent, { transform: N, snapGrid: I, snapToGrid: S, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (g = !0), !g) {
        if (!l && q && d && (l = !0, P()), !d) {
          const E = T.xSnapped - (i.x ?? 0), O = T.ySnapped - (i.y ?? 0);
          Math.sqrt(E * E + O * O) > H && L(z);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && s && d && (u = Wn(z.sourceEvent, c), M(T, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || g) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: N, onNodeDragStop: I, onSelectionDragStop: S } = t();
        if (N(s, !1), o || I || !w && S) {
          const [H, _] = Va({
            nodeId: w,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, H, _), I == null || I(z.sourceEvent, H, _), w || S == null || S(z.sourceEvent, _);
        }
      }
    }).filter((z) => {
      const q = z.target;
      return !z.button && (!x || !Ul(q, `.${x}`, h)) && (!$ || Ul(q, $, h));
    });
    v.call(D);
  }
  function b() {
    v == null || v.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function y0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Bo(o, oo(i)) > 0 && r.push(i);
  return r;
}
const w0 = 250;
function b0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = y0(e, n, t + w0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: g } = jo(u, d, d.position, !0), p = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(g - e.y, 2));
      p > t || (p < s ? (a = [{ ...d, x: v, y: g }], s = p) : p === s && a.push({ ...d, x: v, y: g }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return a.find((c) => c.type === u) ?? a[0];
  }
  return a[0];
}
function Xc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...jo(u, d, d.position, !0) } : d;
}
function Yc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function x0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Wc = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: g, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: $ = Wc, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: M }) {
  const P = Wp(e.target);
  let L = 0, D;
  const { x: z, y: q } = Wn(e), N = P == null ? void 0 : P.elementFromPoint(z, q), I = Yc(i, N), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !I)
    return;
  const H = Xc(o, I, r, l, t);
  if (!H)
    return;
  let _ = Wn(e, S), T = !1, E = null, O = !1, R = null;
  function X() {
    if (!c || !S)
      return;
    const [ge, ce] = Lc(_, S, M);
    v({ x: ge, y: ce }), L = requestAnimationFrame(X);
  }
  const W = {
    ...H,
    nodeId: o,
    type: I,
    position: H.position
  }, ee = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: jo(ee, W, Ve.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: ee,
    to: _,
    toHandle: null,
    toPosition: Nl[W.position],
    toNode: null
  };
  C(G);
  let K = G;
  p == null || p(e, { nodeId: o, handleId: r, handleType: I });
  function ae(ge) {
    if (!k() || !W) {
      he(ge);
      return;
    }
    const ce = w();
    _ = Wn(ge, S), D = b0(ei(_, ce, !1, [1, 1]), n, l, W), T || (X(), T = !0);
    const _e = Kc(ge, {
      handle: D,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    R = _e.handleDomNode, E = _e.connection, O = x0(!!D, _e.isValid);
    const J = {
      // from stays the same
      ...K,
      isValid: O,
      to: D && O ? Nc({ x: D.x, y: D.y }, ce) : _,
      toHandle: _e.toHandle,
      toPosition: O && _e.toHandle ? _e.toHandle.position : Nl[W.position],
      toNode: _e.toHandle ? l.get(_e.toHandle.nodeId) : null
    };
    O && D && K.toHandle && J.toHandle && K.toHandle.type === J.toHandle.type && K.toHandle.nodeId === J.toHandle.nodeId && K.toHandle.id === J.toHandle.id && K.to.x === J.to.x && K.to.y === J.to.y || (C(J), K = J);
  }
  function he(ge) {
    (D || R) && E && O && (b == null || b(E));
    const { inProgress: ce, ..._e } = K, J = {
      ..._e,
      toPosition: K.toHandle ? K.toPosition : null
    };
    x == null || x(ge, J), i && (h == null || h(ge, J)), g(), cancelAnimationFrame(L), T = !1, O = !1, E = null, R = null, P.removeEventListener("mousemove", ae), P.removeEventListener("mouseup", he), P.removeEventListener("touchmove", ae), P.removeEventListener("touchend", he);
  }
  P.addEventListener("mousemove", ae), P.addEventListener("mouseup", he), P.addEventListener("touchmove", ae), P.addEventListener("touchend", he);
}
function Kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Wc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Wn(e), b = a.elementFromPoint(g, p), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : v, $ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Yc(void 0, x), C = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), M = x.classList.contains("connectableend");
    if (!C || !h)
      return $;
    const P = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    $.connection = P;
    const L = k && M && (n === Or.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    $.isValid = L && u(P), $.toHandle = Xc(C, h, w, c, n, !1);
  }
  return $;
}
const C0 = {
  onPointerDown: $0,
  isValid: Kc
};
function _0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = dn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: g = !1 }) {
    const p = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, M = w[2] * Math.pow(2, k);
      t.scaleTo(M);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, $ = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], M = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), L = {
        x: w[0] - M[0] * P,
        y: w[1] - M[1] * P
      }, D = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: L.x,
        y: L.y,
        zoom: w[2]
      }, D, s);
    }, h = Oc().on("start", x).on("zoom", d ? $ : null).on("zoom.wheel", v ? p : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: wn
  };
}
const k0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ma = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Na = ({ x: e, y: t, zoom: n }) => ga.translate(e, t).scale(n), Zr = (e, t) => e.target.closest(`.${t}`), Fc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), za = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Uc = (e) => {
  const t = e.ctrlKey && ji() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function S0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Zr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = wn(c), $ = Uc(c), h = d * Math.pow(2, $);
      r.scaleTo(n, h, x, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let g = o === dr.Vertical ? 0 : c.deltaX * v, p = o === dr.Horizontal ? 0 : c.deltaY * v;
    !ji() && c.shiftKey && o !== dr.Vertical && (g = c.deltaY * v, p = 0), r.translateBy(
      n,
      -(g / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ma(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function E0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Zr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function P0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ma(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Fc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ma(i.transform)));
  };
}
function O0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Fc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && k0(e.prevViewport, a.transform))) {
      const l = ma(a.transform);
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
function T0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const v = e || t, g = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Zr(c, `${u}-flow__node`) || Zr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Zr(c, s) && c.type === "wheel" || Zr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !g && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function H0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
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
    zoom: ro(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = g.on("wheel.zoom"), b = g.on("dblclick.zoom");
  v.wheelDelta(Uc);
  function x(N, I) {
    return g ? new Promise((S) => {
      v == null || v.transform(za(g, I == null ? void 0 : I.duration, () => S(!0)), N);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: N, noPanClassName: I, onPaneContextMenu: S, userSelectionActive: H, panOnScroll: _, panOnDrag: T, panOnScrollMode: E, panOnScrollSpeed: O, preventScrolling: R, zoomOnPinch: X, zoomOnScroll: W, zoomOnDoubleClick: ee, zoomActivationKeyPressed: G, lib: K, onTransformChange: ae }) {
    H && !c.isZoomingOrPanning && h();
    const he = _ && !G && !H ? S0({
      zoomPanValues: c,
      noWheelClassName: N,
      d3Selection: g,
      d3Zoom: v,
      panOnScrollMode: E,
      panOnScrollSpeed: O,
      zoomOnPinch: X,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : E0({
      noWheelClassName: N,
      preventScrolling: R,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", he, { passive: !1 }), !H) {
      const ce = P0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", ce);
      const _e = M0({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ae
      });
      v.on("zoom", _e);
      const J = O0({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: _,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", J);
    }
    const ge = T0({
      zoomActivationKeyPressed: G,
      panOnDrag: T,
      zoomOnScroll: W,
      panOnScroll: _,
      zoomOnDoubleClick: ee,
      zoomOnPinch: X,
      userSelectionActive: H,
      noPanClassName: I,
      noWheelClassName: N,
      lib: K
    });
    v.filter(ge), ee ? g.on("dblclick.zoom", b) : g.on("dblclick.zoom", null);
  }
  function h() {
    v.on("zoom", null);
  }
  async function C(N, I, S) {
    const H = Na(N), _ = v == null ? void 0 : v.constrain()(H, I, S);
    return _ && await x(_), new Promise((T) => T(_));
  }
  async function w(N, I) {
    const S = Na(N);
    return await x(S, I), new Promise((H) => H(S));
  }
  function k(N) {
    if (g) {
      const I = Na(N), S = g.property("__zoom");
      (S.k !== N.zoom || S.x !== N.x || S.y !== N.y) && (v == null || v.transform(g, I, null, { sync: !0 }));
    }
  }
  function M() {
    const N = g ? Mc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function P(N, I) {
    return g ? new Promise((S) => {
      v == null || v.scaleTo(za(g, I == null ? void 0 : I.duration, () => S(!0)), N);
    }) : Promise.resolve(!1);
  }
  function L(N, I) {
    return g ? new Promise((S) => {
      v == null || v.scaleBy(za(g, I == null ? void 0 : I.duration, () => S(!0)), N);
    }) : Promise.resolve(!1);
  }
  function D(N) {
    v == null || v.scaleExtent(N);
  }
  function z(N) {
    v == null || v.translateExtent(N);
  }
  function q(N) {
    const I = !jn(N) || N < 0 ? 0 : N;
    v == null || v.clickDistance(I);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: M,
    scaleTo: P,
    scaleBy: L,
    setScaleExtent: D,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: q
  };
}
var Gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Gl || (Gl = {}));
var D0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(ee, "$connectable", n), i = () => re(ge, "$connectionRadius", n), a = () => re(ae, "$domNode", n), s = () => re(he, "$nodeLookup", n), l = () => re(K, "$connectionMode", n), u = () => re(J, "$lib", n), c = () => re(qe, "$autoPanOnConnect", n), d = () => re(De, "$flowId", n), v = () => re(_e, "$isValidConnectionStore", n), g = () => re(Me, "$onedgecreate", n), p = () => re(fe, "$onConnectAction", n), b = () => re(Ee, "$onConnectStartAction", n), x = () => re(Ie, "$onConnectEndAction", n), $ = () => re(ce, "$viewport", n), h = () => re(dt, "$connection", n), C = () => re(We, "$edges", n), w = () => re(le, "$connectionLookup", n), k = /* @__PURE__ */ ue(), M = /* @__PURE__ */ ue(), P = /* @__PURE__ */ ue(), L = /* @__PURE__ */ ue(), D = /* @__PURE__ */ ue(), z = /* @__PURE__ */ ue(), q = /* @__PURE__ */ ue(), N = /* @__PURE__ */ ue();
  let I = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), H = y(t, "position", 28, () => Ve.Top), _ = y(t, "style", 12, void 0), T = y(t, "isValidConnection", 12, void 0), E = y(t, "onconnect", 12, void 0), O = y(t, "ondisconnect", 12, void 0), R = y(t, "isConnectable", 12, void 0), X = y(t, "class", 12, void 0);
  const W = Er("svelteflow__node_id"), ee = Er("svelteflow__node_connectable"), G = Qe(), {
    connectionMode: K,
    domNode: ae,
    nodeLookup: he,
    connectionRadius: ge,
    viewport: ce,
    isValidConnection: _e,
    lib: J,
    addEdge: se,
    onedgecreate: Me,
    panBy: de,
    cancelConnection: Oe,
    updateConnection: U,
    autoPanOnConnect: qe,
    edges: We,
    connectionLookup: le,
    onconnect: fe,
    onconnectstart: Ee,
    onconnectend: Ie,
    flowId: De,
    connection: dt
  } = G;
  function rt(ze) {
    const ut = Ac(ze);
    (ut && ze.button === 0 || !ut) && C0.onPointerDown(ze, {
      handleId: f(P),
      nodeId: W,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: T() ?? v(),
      updateConnection: U,
      cancelConnection: Oe,
      panBy: de,
      onConnect: (je) => {
        var Be;
        const ct = g() ? g()(je) : je;
        ct && (se(ct), (Be = p()) == null || Be(je));
      },
      onConnectStart: (je, Be) => {
        var ct;
        (ct = b()) == null || ct(je, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (je, Be) => {
        var ct;
        (ct = x()) == null || ct(je, Be);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let oe = /* @__PURE__ */ ue(null), Ze = /* @__PURE__ */ ue();
  we(() => ne(S()), () => {
    Q(k, S() === "target");
  }), we(
    () => (ne(R()), o()),
    () => {
      Q(M, R() !== void 0 ? R() : o());
    }
  ), we(() => ne(I()), () => {
    Q(P, I() || null);
  }), we(
    () => (ne(E()), ne(O()), C(), w(), ne(S()), ne(I())),
    () => {
      (E() || O()) && (C(), Q(Ze, w().get(`${W}-${S()}${I() ? `-${I()}` : ""}`)));
    }
  ), we(
    () => (f(oe), f(Ze), ne(O()), ne(E())),
    () => {
      if (f(oe) && !Ip(f(Ze), f(oe))) {
        const ze = f(Ze) ?? /* @__PURE__ */ new Map();
        zl(f(oe), ze, O()), zl(ze, f(oe), E());
      }
      Q(oe, f(Ze) ?? /* @__PURE__ */ new Map());
    }
  ), we(() => h(), () => {
    Q(L, !!h().fromHandle);
  }), we(
    () => (h(), ne(S()), f(P)),
    () => {
      var ze, ut, je;
      Q(D, ((ze = h().fromHandle) == null ? void 0 : ze.nodeId) === W && ((ut = h().fromHandle) == null ? void 0 : ut.type) === S() && ((je = h().fromHandle) == null ? void 0 : je.id) === f(P));
    }
  ), we(
    () => (h(), ne(S()), f(P)),
    () => {
      var ze, ut, je;
      Q(z, ((ze = h().toHandle) == null ? void 0 : ze.nodeId) === W && ((ut = h().toHandle) == null ? void 0 : ut.type) === S() && ((je = h().toHandle) == null ? void 0 : je.id) === f(P));
    }
  ), we(
    () => (l(), h(), ne(S()), f(P)),
    () => {
      var ze, ut, je;
      Q(q, l() === Or.Strict ? ((ze = h().fromHandle) == null ? void 0 : ze.type) !== S() : W !== ((ut = h().fromHandle) == null ? void 0 : ut.nodeId) || f(P) !== ((je = h().fromHandle) == null ? void 0 : je.id));
    }
  ), we(() => (f(z), h()), () => {
    Q(N, f(z) && h().isValid);
  }), Mt(), Xe();
  var be = D0();
  ke(be, "data-nodeid", W);
  let jt;
  var Xt = Y(be);
  Dt(Xt, t, "default", {}), j(be), Te(
    (ze, ut) => {
      ke(be, "data-handleid", f(P)), ke(be, "data-handlepos", H()), ke(be, "data-id", `${d() ?? ""}-${W ?? ""}-${I() || ""}-${S() ?? ""}`), jt = Lt(be, 1, ze, null, jt, ut), $t(be, _());
    },
    [
      () => Sn(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        X()
      ])),
      () => ({
        valid: f(N),
        connectingto: f(z),
        connectingfrom: f(D),
        source: !f(k),
        target: f(k),
        connectablestart: f(M),
        connectableend: f(M),
        connectable: f(M),
        connectionindicator: f(M) && (!f(L) || f(q))
      })
    ],
    Ce
  ), ft("mousedown", be, rt), ft("touchstart", be, rt), A(e, be);
  var ln = me({
    get id() {
      return I();
    },
    set id(ze) {
      I(ze), m();
    },
    get type() {
      return S();
    },
    set type(ze) {
      S(ze), m();
    },
    get position() {
      return H();
    },
    set position(ze) {
      H(ze), m();
    },
    get style() {
      return _();
    },
    set style(ze) {
      _(ze), m();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(ze) {
      T(ze), m();
    },
    get onconnect() {
      return E();
    },
    set onconnect(ze) {
      E(ze), m();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(ze) {
      O(ze), m();
    },
    get isConnectable() {
      return R();
    },
    set isConnectable(ze) {
      R(ze), m();
    },
    get class() {
      return X();
    },
    set class(ze) {
      X(ze), m();
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
var L0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Yi(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Xe();
  var a = L0(), s = $e(a);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ve.Top);
  gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ Ce(() => i() ?? Ve.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Te(() => {
    var v;
    return xt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), A(e, a), me({
    get data() {
      return r();
    },
    set data(v) {
      r(v), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(v) {
      o(v), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(v) {
      i(v), m();
    }
  });
}
ve(
  Yi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var V0 = /* @__PURE__ */ ie(" <!>", 1);
function Gc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Xe(), Ae();
  var i = V0(), a = $e(i), s = B(a);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ve.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Te(() => {
    var u;
    return xt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), me({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
ve(Gc, { data: {}, sourcePosition: {} }, [], [], !0);
var N0 = /* @__PURE__ */ ie(" <!>", 1);
function Jc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), pe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Xe(), Ae();
  var i = N0(), a = $e(i), s = B(a);
  const l = /* @__PURE__ */ Ce(() => o() ?? Ve.Top);
  return gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Te(() => {
    var u;
    return xt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), me({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
ve(Jc, { data: {}, targetPosition: {} }, [], [], !0);
function Qc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, []);
}
ve(Qc, {}, [], [], !0);
function Jl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Wi(e, { target: t, domNode: n }) {
  return Jl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Jl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var z0 = /* @__PURE__ */ ie("<div><!></div>");
function ed(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(i, "$domNode", n), { domNode: i } = Qe();
  Xe();
  var a = z0(), s = Y(a);
  Dt(s, t, "default", {}), j(a), Ht(a, (l, u) => Wi == null ? void 0 : Wi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), me(), r();
}
ve(ed, {}, ["default"], [], !0);
function td() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Qe();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", no.error012(s));
      return;
    }
    (l.selectable || F(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var A0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function nd(e, t) {
  pe(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = td(), a = Er("svelteflow__edge_id");
  return Xe(), ed(e, {
    children: (s, l) => {
      var u = A0();
      let c;
      var d = Y(u);
      Dt(d, t, "default", {}), j(u), Te(() => c = $t(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), ft("keyup", u, () => {
      }), ft("click", u, () => {
        a && i(a);
      }), A(s, u);
    },
    $$slots: { default: !0 }
  }), me({
    get style() {
      return n();
    },
    set style(s) {
      n(s), m();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), m();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), m();
    }
  });
}
ve(nd, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var I0 = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), R0 = /* @__PURE__ */ Pe('<path fill="none"></path><!><!>', 1);
function ti(e, t) {
  pe(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), g = d() === void 0 ? 20 : d();
  Xe();
  var p = R0(), b = $e(p), x = B(b);
  {
    var $ = (w) => {
      var k = I0();
      ke(k, "stroke-opacity", 0), ke(k, "stroke-width", g), Te(() => ke(k, "d", r())), A(w, k);
    };
    xe(x, (w) => {
      g && w($);
    });
  }
  var h = B(x);
  {
    var C = (w) => {
      nd(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, M) => {
          Ae();
          var P = Ue();
          Te(() => xt(P, o())), A(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    xe(h, (w) => {
      o() && w(C);
    });
  }
  return Te(
    (w) => {
      ke(b, "id", n()), ke(b, "d", r()), Lt(b, 0, w), ke(b, "marker-start", l()), ke(b, "marker-end", u()), $t(b, c());
    },
    [
      () => Sn(Bt(["svelte-flow__edge-path", v()]))
    ],
    Ce
  ), A(e, p), me({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), m();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), m();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), m();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), m();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get class() {
      return v();
    },
    set class(w) {
      v(w), m();
    }
  });
}
ve(
  ti,
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
function Ki(e, t) {
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
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return we(
    () => (f(r), f(o), f(i), ne(v()), ne(g()), ne(b()), ne(x()), ne(p()), ne($())),
    () => {
      ((h) => (Q(r, h[0]), Q(o, h[1]), Q(i, h[2])))(Ic({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), Mt(), Xe(), ti(e, {
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
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ve(
  Ki,
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
function rd(e, t) {
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
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return we(
    () => (f(r), f(o), f(i), ne(v()), ne(g()), ne(b()), ne(x()), ne(p()), ne($())),
    () => {
      ((h) => (Q(r, h[0]), Q(o, h[1]), Q(i, h[2])))(Xi({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $()
      }));
    }
  ), Mt(), Xe(), ti(e, {
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
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
    }
  });
}
ve(
  rd,
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
function od(e, t) {
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
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return we(
    () => (f(r), f(o), f(i), ne(v()), ne(g()), ne(p()), ne(b())),
    () => {
      ((x) => (Q(r, x[0]), Q(o, x[1]), Q(i, x[2])))(as({
        sourceX: v(),
        sourceY: g(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), Mt(), Xe(), ti(e, {
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
  }), me({
    get label() {
      return a();
    },
    set label(x) {
      a(x), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), m();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(x) {
      v(x), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(x) {
      g(x), m();
    },
    get targetX() {
      return p();
    },
    set targetX(x) {
      p(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
    }
  });
}
ve(
  od,
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
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), g = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return we(
    () => (f(r), f(o), f(i), ne(v()), ne(g()), ne(b()), ne(x()), ne(p()), ne($())),
    () => {
      ((h) => (Q(r, h[0]), Q(o, h[1]), Q(i, h[2])))(Xi({
        sourceX: v(),
        sourceY: g(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), Mt(), Xe(), ti(e, {
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
  }), me({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(h) {
      v(h), m();
    },
    get sourceY() {
      return g();
    },
    set sourceY(h) {
      g(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), m();
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
function q0(e, t) {
  const n = e.set, r = t.set, o = F(e), i = F(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function Z0(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const B0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, j0 = (e, t, n, r = [0, 0], o = qi) => {
  const { subscribe: i, set: a, update: s } = Se([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (qc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), v = (b) => d(b(l)), g = (b) => {
    u = b;
  }, p = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: v,
    setDefaultOptions: g,
    setOptions: p
  };
}, X0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Se([]);
  let s = e, l = {};
  const u = (v) => {
    const g = l ? v.map((p) => ({ ...l, ...p })) : v;
    Bc(t, n, g), s = g, i(s);
  }, c = (v) => u(v(s)), d = (v) => {
    l = v;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ad = {
  input: Gc,
  output: Jc,
  default: Yi,
  group: Qc
}, sd = {
  straight: od,
  smoothstep: rd,
  default: Ki,
  step: id
}, Y0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? qi;
  qc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Bc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Qo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    g = Rs(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Se(null),
    nodes: j0(e, s, l, d, v),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(c),
    visibleNodes: un([]),
    edges: X0(t, u, c),
    visibleEdges: un([]),
    connectionLookup: un(u),
    height: Se(500),
    width: Se(500),
    minZoom: Se(0.5),
    maxZoom: Se(2),
    nodeOrigin: Se(d),
    nodeDragThreshold: Se(1),
    nodeExtent: Se(v),
    translateExtent: Se(qi),
    autoPanOnNodeDrag: Se(!0),
    autoPanOnConnect: Se(!0),
    fitViewOnInit: Se(!1),
    fitViewOnInitDone: Se(!1),
    fitViewOptions: Se(void 0),
    panZoom: Se(null),
    snapGrid: Se(null),
    dragging: Se(!1),
    selectionRect: Se(null),
    selectionKeyPressed: Se(!1),
    multiselectionKeyPressed: Se(!1),
    deleteKeyPressed: Se(!1),
    panActivationKeyPressed: Se(!1),
    zoomActivationKeyPressed: Se(!1),
    selectionRectMode: Se(null),
    selectionMode: Se(Zi.Partial),
    nodeTypes: Se(ad),
    edgeTypes: Se(sd),
    viewport: Se(g),
    connectionMode: Se(Or.Strict),
    domNode: Se(null),
    connection: un(rs),
    connectionLineType: Se(Yr.Bezier),
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
    onerror: Se(Xp),
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
function W0(e) {
  const t = cr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Jp({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return cr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return a;
    const c = i0({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return c && a.push({
      ...s,
      zIndex: Gp({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), a;
  }, []));
}
function K0(e) {
  return cr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? Tc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const ya = Symbol();
function ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Y0({
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
      ...ad,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...sd,
      ..._
    });
  }
  function c(_) {
    const T = F(s.edges);
    s.edges.set(t0(_, T));
  }
  const d = (_, T = !1) => {
    var E;
    const O = F(s.nodeLookup);
    for (const [R, X] of _) {
      const W = (E = O.get(R)) == null ? void 0 : E.internals.userNode;
      W && (W.position = X.position, W.dragging = T);
    }
    s.nodes.update((R) => R);
  };
  function v(_) {
    var T, E, O;
    const R = F(s.nodeLookup), X = F(s.parentLookup), { changes: W, updatedInternals: ee } = v0(_, R, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (ee) {
      if (u0(R, X, { nodeOrigin: i, nodeExtent: a }), !F(s.fitViewOnInitDone) && F(s.fitViewOnInit)) {
        const G = F(s.fitViewOptions), K = p({
          ...G,
          nodes: G == null ? void 0 : G.nodes
        });
        s.fitViewOnInitDone.set(K);
      }
      for (const G of W) {
        const K = (T = R.get(G.id)) == null ? void 0 : T.internals.userNode;
        if (K)
          switch (G.type) {
            case "dimensions": {
              const ae = { ...K.measured, ...G.dimensions };
              G.setAttributes && (K.width = ((E = G.dimensions) == null ? void 0 : E.width) ?? K.width, K.height = ((O = G.dimensions) == null ? void 0 : O.height) ?? K.height), K.measured = ae;
              break;
            }
            case "position":
              K.position = G.position ?? K.position;
              break;
          }
      }
      s.nodes.update((G) => G), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function g(_) {
    const T = F(s.panZoom), E = F(s.domNode);
    if (!T || !E)
      return Promise.resolve(!1);
    const { width: O, height: R } = qs(E), X = Al(F(s.nodeLookup), _);
    return Il({
      nodes: X,
      width: O,
      height: R,
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: T
    }, _);
  }
  function p(_) {
    const T = F(s.panZoom);
    if (!T)
      return !1;
    const E = Al(F(s.nodeLookup), _);
    return Il({
      nodes: E,
      width: F(s.width),
      height: F(s.height),
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: T
    }, _), E.size > 0;
  }
  function b(_, T) {
    const E = F(s.panZoom);
    return E ? E.scaleBy(_, T) : Promise.resolve(!1);
  }
  function x(_) {
    return b(1.2, _);
  }
  function $(_) {
    return b(1 / 1.2, _);
  }
  function h(_) {
    const T = F(s.panZoom);
    T && (T.setScaleExtent([_, F(s.maxZoom)]), s.minZoom.set(_));
  }
  function C(_) {
    const T = F(s.panZoom);
    T && (T.setScaleExtent([F(s.minZoom), _]), s.maxZoom.set(_));
  }
  function w(_) {
    const T = F(s.panZoom);
    T && (T.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let T = !1;
    return _.forEach((E) => {
      E.selected && (E.selected = !1, T = !0);
    }), T;
  }
  function M(_) {
    var T;
    (T = F(s.panZoom)) == null || T.setClickDistance(_);
  }
  function P(_) {
    k((_ == null ? void 0 : _.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), k((_ == null ? void 0 : _.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var T;
    if (_) {
      const E = F(s.nodes), O = F(s.edges), R = E.filter((G) => G.selected), X = O.filter((G) => G.selected), { nodes: W, edges: ee } = await Hc({
        nodesToRemove: R,
        edgesToRemove: X,
        nodes: E,
        edges: O,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (W.length || ee.length) && (s.nodes.update((G) => G.filter((K) => !W.some((ae) => ae.id === K.id))), s.edges.update((G) => G.filter((K) => !ee.some((ae) => ae.id === K.id))), (T = F(s.ondelete)) == null || T({
        nodes: W,
        edges: ee
      }));
    }
  });
  function L(_) {
    const T = F(s.multiselectionKeyPressed);
    s.nodes.update((E) => E.map((O) => {
      const R = _.includes(O.id), X = T && O.selected || R;
      return O.selected = X, O;
    })), T || s.edges.update((E) => E.map((O) => (O.selected = !1, O)));
  }
  function D(_) {
    const T = F(s.multiselectionKeyPressed);
    s.edges.update((E) => E.map((O) => {
      const R = _.includes(O.id), X = T && O.selected || R;
      return O.selected = X, O;
    })), T || s.nodes.update((E) => E.map((O) => (O.selected = !1, O)));
  }
  function z(_) {
    var T;
    const E = (T = F(s.nodes)) == null ? void 0 : T.find((O) => O.id === _);
    if (!E) {
      console.warn("012", no.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), E.selected ? E.selected && F(s.multiselectionKeyPressed) && P({ nodes: [E], edges: [] }) : L([_]);
  }
  function q(_) {
    const T = F(s.viewport);
    return g0({
      delta: _,
      panZoom: F(s.panZoom),
      transform: [T.x, T.y, T.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const N = Se(rs), I = (_) => {
    N.set({ ..._ });
  };
  function S() {
    N.set(rs);
  }
  function H() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: W0(s),
    visibleNodes: K0(s),
    connection: cr([N, s.viewport], ([_, T]) => _.inProgress ? {
      ..._,
      to: ei(_.to, [T.x, T.y, T.zoom])
    } : { ..._ }),
    markers: cr([s.edges, s.defaultMarkerColor, s.flowId], ([_, T, E]) => a0(_, { defaultColor: T, id: E })),
    initialized: (() => {
      let _ = !1;
      const T = F(s.nodes).length, E = F(s.edges).length;
      return cr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([O, R, X]) => _ || (T === 0 ? _ = X : E === 0 ? _ = X && O : _ = X && O && R, _));
    })(),
    // actions
    syncNodeStores: (_) => q0(s.nodes, _),
    syncEdgeStores: (_) => Z0(s.edges, _),
    syncViewport: (_) => B0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: $,
    fitView: (_) => g(_),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: w,
    setPaneClickDistance: M,
    unselectNodesAndEdges: P,
    addSelectedNodes: L,
    addSelectedEdges: D,
    handleNodeSelection: z,
    panBy: q,
    updateConnection: I,
    cancelConnection: S,
    reset: H
  };
}
function Qe() {
  const e = Er(ya);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function F0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Jr(ya, {
    getStore: () => s
  }), s;
}
function Ql(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = H0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(v) {
      c.update(v);
    }
  };
}
var U0 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const G0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ud(e, t) {
  pe(t, !1), lt(e, G0);
  const [n, r] = vt(), o = () => re(E, "$panActivationKeyPressed", n), i = () => re(I, "$minZoom", n), a = () => re(S, "$maxZoom", n), s = () => re(O, "$zoomActivationKeyPressed", n), l = () => re(N, "$selectionRect", n), u = () => re(_, "$translateExtent", n), c = () => re(T, "$lib", n), d = /* @__PURE__ */ ue(), v = /* @__PURE__ */ ue(), g = /* @__PURE__ */ ue();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), M = y(t, "zoomOnPinch", 12), P = y(t, "panOnDrag", 12), L = y(t, "panOnScroll", 12), D = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: q,
    selectionRect: N,
    minZoom: I,
    maxZoom: S,
    dragging: H,
    translateExtent: _,
    lib: T,
    panActivationKeyPressed: E,
    zoomActivationKeyPressed: O,
    viewportInitialized: R
  } = Qe(), X = (K) => z.set({
    x: K[0],
    y: K[1],
    zoom: K[2]
  });
  mn(() => {
    Li(R, !0);
  }), we(() => ne(p()), () => {
    Q(d, p() || { x: 0, y: 0, zoom: 1 });
  }), we(
    () => (o(), ne(P())),
    () => {
      Q(v, o() || P());
    }
  ), we(
    () => (o(), ne(L())),
    () => {
      Q(g, o() || L());
    }
  ), Mt(), Xe();
  var W = U0(), ee = Y(W);
  Dt(ee, t, "default", {}), j(W), Ht(W, (K, ae) => Ql == null ? void 0 : Ql(K, ae), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: H,
    panZoom: q,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: M(),
    panOnScroll: f(g),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || dr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: D(),
    onTransformChange: X
  })), A(e, W);
  var G = me({
    get initialViewport() {
      return p();
    },
    set initialViewport(K) {
      p(K), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(K) {
      b(K), m();
    },
    get onMove() {
      return x();
    },
    set onMove(K) {
      x(K), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(K) {
      $(K), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(K) {
      h(K), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(K) {
      C(K), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(K) {
      w(K), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(K) {
      k(K), m();
    },
    get zoomOnPinch() {
      return M();
    },
    set zoomOnPinch(K) {
      M(K), m();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(K) {
      P(K), m();
    },
    get panOnScroll() {
      return L();
    },
    set panOnScroll(K) {
      L(K), m();
    },
    get paneClickDistance() {
      return D();
    },
    set paneClickDistance(K) {
      D(K), m();
    }
  });
  return r(), G;
}
ve(
  ud,
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
function eu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function tu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var J0 = /* @__PURE__ */ ie("<div><!></div>");
const Q0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function cd(e, t) {
  pe(t, !1), lt(e, Q0);
  const [n, r] = vt(), o = () => re(S, "$panActivationKeyPressed", n), i = () => re(N, "$selectionKeyPressed", n), a = () => re(z, "$selectionRect", n), s = () => re(D, "$elementsSelectable", n), l = () => re(q, "$selectionRectMode", n), u = () => re(M, "$edges", n), c = () => re(k, "$nodeLookup", n), d = () => re(P, "$viewport", n), v = () => re(I, "$selectionMode", n), g = () => re(L, "$dragging", n), p = /* @__PURE__ */ ue(), b = /* @__PURE__ */ ue(), x = /* @__PURE__ */ ue();
  let $ = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const C = ua(), {
    nodes: w,
    nodeLookup: k,
    edges: M,
    viewport: P,
    dragging: L,
    elementsSelectable: D,
    selectionRect: z,
    selectionRectMode: q,
    selectionKeyPressed: N,
    selectionMode: I,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: H
  } = Qe();
  let _ = /* @__PURE__ */ ue(), T = null, E = [], O = !1;
  function R(J) {
    if (O) {
      O = !1;
      return;
    }
    C("paneclick", { event: J }), H(), q.set(null);
  }
  function X(J) {
    var se, Me;
    if (T = f(_).getBoundingClientRect(), !D || !f(b) || J.button !== 0 || J.target !== f(_) || !T)
      return;
    (Me = (se = J.target) == null ? void 0 : se.setPointerCapture) == null || Me.call(se, J.pointerId);
    const { x: de, y: Oe } = Wn(J, T);
    H(), z.set({
      width: 0,
      height: 0,
      startX: de,
      startY: Oe,
      x: de,
      y: Oe
    });
  }
  function W(J) {
    if (!f(b) || !T || !a())
      return;
    O = !0;
    const se = Wn(J, T), Me = a().startX ?? 0, de = a().startY ?? 0, Oe = {
      ...a(),
      x: se.x < Me ? se.x : Me,
      y: se.y < de ? se.y : de,
      width: Math.abs(se.x - Me),
      height: Math.abs(se.y - de)
    }, U = E.map((fe) => fe.id), qe = os(E, u()).map((fe) => fe.id);
    E = Tc(
      c(),
      Oe,
      [
        d().x,
        d().y,
        d().zoom
      ],
      v() === Zi.Partial,
      !0
    );
    const We = os(E, u()).map((fe) => fe.id), le = E.map((fe) => fe.id);
    (U.length !== le.length || le.some((fe) => !U.includes(fe))) && w.update((fe) => fe.map(tu(le))), (qe.length !== We.length || We.some((fe) => !qe.includes(fe))) && M.update((fe) => fe.map(tu(We))), q.set("user"), z.set(Oe);
  }
  function ee(J) {
    var se, Me;
    J.button === 0 && ((Me = (se = J.target) == null ? void 0 : se.releasePointerCapture) == null || Me.call(se, J.pointerId), !f(b) && l() === "user" && J.target === f(_) && (R == null || R(J)), z.set(null), E.length > 0 && Li(q, "nodes"), i() && (O = !1));
  }
  const G = (J) => {
    var se;
    if (Array.isArray(f(p)) && (se = f(p)) != null && se.includes(2)) {
      J.preventDefault();
      return;
    }
    C("panecontextmenu", { event: J });
  };
  we(
    () => (o(), ne($())),
    () => {
      Q(p, o() || $());
    }
  ), we(
    () => (i(), a(), ne(h()), f(p)),
    () => {
      Q(b, i() || a() || h() && f(p) !== !0);
    }
  ), we(
    () => (s(), f(b), l()),
    () => {
      Q(x, s() && (f(b) || l() === "user"));
    }
  ), Mt(), Xe();
  var K = J0(), ae = /* @__PURE__ */ He(() => f(x) ? void 0 : eu(R, f(_))), he = /* @__PURE__ */ He(() => eu(G, f(_)));
  let ge;
  var ce = Y(K);
  Dt(ce, t, "default", {}), j(K), zn(K, (J) => Q(_, J), () => f(_)), Te(
    (J) => ge = Lt(K, 1, "svelte-flow__pane svelte-1esy7hx", null, ge, J),
    [
      () => ({
        draggable: $() === !0 || Array.isArray($()) && $().includes(0),
        dragging: g(),
        selection: f(b)
      })
    ],
    Ce
  ), ft("click", K, function(...J) {
    var se;
    (se = f(ae)) == null || se.apply(this, J);
  }), ft("pointerdown", K, function(...J) {
    var se;
    (se = f(x) ? X : void 0) == null || se.apply(this, J);
  }), ft("pointermove", K, function(...J) {
    var se;
    (se = f(x) ? W : void 0) == null || se.apply(this, J);
  }), ft("pointerup", K, function(...J) {
    var se;
    (se = f(x) ? ee : void 0) == null || se.apply(this, J);
  }), ft("contextmenu", K, function(...J) {
    var se;
    (se = f(he)) == null || se.apply(this, J);
  }), A(e, K);
  var _e = me({
    get panOnDrag() {
      return $();
    },
    set panOnDrag(J) {
      $(J), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(J) {
      h(J), m();
    }
  });
  return r(), _e;
}
ve(cd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var em = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const tm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function dd(e, t) {
  pe(t, !1), lt(e, tm);
  const [n, r] = vt(), o = () => re(i, "$viewport", n), { viewport: i } = Qe();
  Xe();
  var a = em(), s = Y(a);
  Dt(s, t, "default", {}), j(a), Te(() => $t(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), me(), r();
}
ve(dd, {}, ["default"], [], !0);
function Fi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = m0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
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
function nm({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var rm = /* @__PURE__ */ ie("<div><!></div>");
function fd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(he, "$nodeTypes", n), i = () => re(se, "$elementsSelectable", n), a = () => re(Me, "$nodesDraggable", n), s = () => re(qe, "$connectableStore", n), l = /* @__PURE__ */ ue(void 0, !0), u = /* @__PURE__ */ ue(void 0, !0), c = /* @__PURE__ */ ue(void 0, !0), d = /* @__PURE__ */ ue(void 0, !0);
  let v = y(t, "node", 13), g = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), M = y(t, "resizeObserver", 13, null), P = y(t, "style", 13, void 0), L = y(t, "type", 13, "default"), D = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), q = y(t, "positionY", 13), N = y(t, "sourcePosition", 13, void 0), I = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), H = y(t, "measuredWidth", 13, void 0), _ = y(t, "measuredHeight", 13, void 0), T = y(t, "initialWidth", 13, void 0), E = y(t, "initialHeight", 13, void 0), O = y(t, "width", 13, void 0), R = y(t, "height", 13, void 0), X = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), ee = y(t, "parentId", 13, void 0), G = y(t, "nodeClickDistance", 13, void 0), K = y(t, "class", 13, "");
  const ae = Qe(), {
    nodeTypes: he,
    nodeDragThreshold: ge,
    selectNodesOnDrag: ce,
    handleNodeSelection: _e,
    updateNodeInternals: J,
    elementsSelectable: se,
    nodesDraggable: Me
  } = ae;
  let de = /* @__PURE__ */ ue(void 0, !0), Oe = /* @__PURE__ */ ue(null, !0);
  const U = ua(), qe = Se(h());
  let We = /* @__PURE__ */ ue(void 0, !0), le = /* @__PURE__ */ ue(void 0, !0), fe = /* @__PURE__ */ ue(void 0, !0);
  Jr("svelteflow__node_id", g()), Jr("svelteflow__node_connectable", qe), Os(() => {
    var oe;
    f(Oe) && ((oe = M()) == null || oe.unobserve(f(Oe)));
  });
  function Ee(oe) {
    $() && (!F(ce) || !x() || F(ge) > 0) && _e(g()), U("nodeclick", { node: v().internals.userNode, event: oe });
  }
  we(() => ne(L()), () => {
    Q(l, L() || "default");
  }), we(() => (o(), f(l)), () => {
    Q(u, !!o()[f(l)]);
  }), we(
    () => (o(), f(l), Yi),
    () => {
      Q(c, o()[f(l)] || Yi);
    }
  ), we(
    () => (f(u), ne(L())),
    () => {
      f(u) || console.warn("003", no.error003(L()));
    }
  ), we(
    () => (ne(O()), ne(R()), ne(T()), ne(E()), ne(H()), ne(_())),
    () => {
      Q(d, nm({
        width: O(),
        height: R(),
        initialWidth: T(),
        initialHeight: E(),
        measuredWidth: H(),
        measuredHeight: _()
      }));
    }
  ), we(() => ne(h()), () => {
    qe.set(!!h());
  }), we(
    () => (f(We), f(l), f(le), ne(N()), f(fe), ne(I()), ne(g()), f(de)),
    () => {
      (f(We) && f(l) !== f(We) || f(le) && N() !== f(le) || f(fe) && I() !== f(fe)) && requestAnimationFrame(() => J(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: f(de),
            force: !0
          }
        ]
      ]))), Q(We, f(l)), Q(le, N()), Q(fe, I());
    }
  ), we(
    () => (ne(M()), f(de), f(Oe), ne(W())),
    () => {
      M() && (f(de) !== f(Oe) || !W()) && (f(Oe) && M().unobserve(f(Oe)), f(de) && M().observe(f(de)), Q(Oe, f(de)));
    }
  ), Mt(), Xe(!0);
  var Ie = st(), De = $e(Ie);
  {
    var dt = (oe) => {
      var Ze = rm();
      let be, jt;
      var Xt = Y(Ze);
      const ln = /* @__PURE__ */ Ce(() => b() ?? !1), ze = /* @__PURE__ */ Ce(() => $() ?? i() ?? !0), ut = /* @__PURE__ */ Ce(() => C() ?? !0), je = /* @__PURE__ */ Ce(() => x() ?? a() ?? !0);
      Ku(Xt, () => f(c), (Be, ct) => {
        ct(Be, {
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
            return f(ze);
          },
          get deletable() {
            return f(ut);
          },
          get sourcePosition() {
            return N();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(je);
          },
          get dragHandle() {
            return X();
          },
          get parentId() {
            return ee();
          },
          get type() {
            return f(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return z();
          },
          get positionAbsoluteY() {
            return q();
          },
          get width() {
            return O();
          },
          get height() {
            return R();
          }
        });
      }), j(Ze), Ht(Ze, (Be, ct) => Fi == null ? void 0 : Fi(Be, ct), () => ({
        nodeId: g(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: _e,
        onDrag: (Be, ct, Qt, Ot) => {
          U("nodedrag", { event: Be, targetNode: Qt, nodes: Ot });
        },
        onDragStart: (Be, ct, Qt, Ot) => {
          U("nodedragstart", { event: Be, targetNode: Qt, nodes: Ot });
        },
        onDragStop: (Be, ct, Qt, Ot) => {
          U("nodedragstop", { event: Be, targetNode: Qt, nodes: Ot });
        },
        store: ae
      })), zn(Ze, (Be) => Q(de, Be), () => f(de)), tn(() => ft("click", Ze, Ee)), tn(() => ft("mouseenter", Ze, (Be) => U("nodemouseenter", { node: v(), event: Be }))), tn(() => ft("mouseleave", Ze, (Be) => U("nodemouseleave", { node: v(), event: Be }))), tn(() => ft("mousemove", Ze, (Be) => U("nodemousemove", { node: v(), event: Be }))), tn(() => ft("contextmenu", Ze, (Be) => U("nodecontextmenu", { node: v(), event: Be }))), Te(
        (Be, ct) => {
          ke(Ze, "data-id", g()), be = Lt(Ze, 1, Be, null, be, ct), jt = $t(Ze, `${P() ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, jt, {
            "z-index": S(),
            transform: `translate(${z() ?? ""}px, ${q() ?? ""}px)`,
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
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: $(),
            nopan: x(),
            parent: D()
          })
        ],
        Ce
      ), A(oe, Ze);
    };
    xe(De, (oe) => {
      w() || oe(dt);
    });
  }
  A(e, Ie);
  var rt = me({
    get node() {
      return v();
    },
    set node(oe) {
      v(oe), m();
    },
    get id() {
      return g();
    },
    set id(oe) {
      g(oe), m();
    },
    get data() {
      return p();
    },
    set data(oe) {
      p(oe), m();
    },
    get selected() {
      return b();
    },
    set selected(oe) {
      b(oe), m();
    },
    get draggable() {
      return x();
    },
    set draggable(oe) {
      x(oe), m();
    },
    get selectable() {
      return $();
    },
    set selectable(oe) {
      $(oe), m();
    },
    get connectable() {
      return h();
    },
    set connectable(oe) {
      h(oe), m();
    },
    get deletable() {
      return C();
    },
    set deletable(oe) {
      C(oe), m();
    },
    get hidden() {
      return w();
    },
    set hidden(oe) {
      w(oe), m();
    },
    get dragging() {
      return k();
    },
    set dragging(oe) {
      k(oe), m();
    },
    get resizeObserver() {
      return M();
    },
    set resizeObserver(oe) {
      M(oe), m();
    },
    get style() {
      return P();
    },
    set style(oe) {
      P(oe), m();
    },
    get type() {
      return L();
    },
    set type(oe) {
      L(oe), m();
    },
    get isParent() {
      return D();
    },
    set isParent(oe) {
      D(oe), m();
    },
    get positionX() {
      return z();
    },
    set positionX(oe) {
      z(oe), m();
    },
    get positionY() {
      return q();
    },
    set positionY(oe) {
      q(oe), m();
    },
    get sourcePosition() {
      return N();
    },
    set sourcePosition(oe) {
      N(oe), m();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(oe) {
      I(oe), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(oe) {
      S(oe), m();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(oe) {
      H(oe), m();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(oe) {
      _(oe), m();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(oe) {
      T(oe), m();
    },
    get initialHeight() {
      return E();
    },
    set initialHeight(oe) {
      E(oe), m();
    },
    get width() {
      return O();
    },
    set width(oe) {
      O(oe), m();
    },
    get height() {
      return R();
    },
    set height(oe) {
      R(oe), m();
    },
    get dragHandle() {
      return X();
    },
    set dragHandle(oe) {
      X(oe), m();
    },
    get initialized() {
      return W();
    },
    set initialized(oe) {
      W(oe), m();
    },
    get parentId() {
      return ee();
    },
    set parentId(oe) {
      ee(oe), m();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(oe) {
      G(oe), m();
    },
    get class() {
      return K();
    },
    set class(oe) {
      K(oe), m();
    }
  });
  return r(), rt;
}
ve(
  fd,
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
var om = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const im = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function vd(e, t) {
  pe(t, !1), lt(e, im);
  const [n, r] = vt(), o = () => re(c, "$visibleNodes", n), i = () => re(d, "$nodesDraggable", n), a = () => re(g, "$elementsSelectable", n), s = () => re(v, "$nodesConnectable", n), l = () => re(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: b
  } = Qe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const M = k.target.getAttribute("data-id");
      w.set(M, { id: M, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  Os(() => {
    x == null || x.disconnect();
  }), Xe();
  var $ = om();
  Zt($, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ Ce(() => !!f(w).selected), M = /* @__PURE__ */ Ce(() => !!f(w).hidden), P = /* @__PURE__ */ Ce(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), L = /* @__PURE__ */ Ce(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), D = /* @__PURE__ */ Ce(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), z = /* @__PURE__ */ Ce(() => f(w).deletable ?? !0), q = /* @__PURE__ */ Ce(() => l().has(f(w).id)), N = /* @__PURE__ */ Ce(() => f(w).type ?? "default"), I = /* @__PURE__ */ Ce(() => f(w).internals.z ?? 0), S = /* @__PURE__ */ Ce(() => zc(f(w)));
    fd(C, {
      get node() {
        return f(w);
      },
      get id() {
        return f(w).id;
      },
      get data() {
        return f(w).data;
      },
      get selected() {
        return f(k);
      },
      get hidden() {
        return f(M);
      },
      get draggable() {
        return f(P);
      },
      get selectable() {
        return f(L);
      },
      get connectable() {
        return f(D);
      },
      get deletable() {
        return f(z);
      },
      get positionX() {
        return f(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return f(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return f(q);
      },
      get style() {
        return f(w).style;
      },
      get class() {
        return f(w).class;
      },
      get type() {
        return f(N);
      },
      get sourcePosition() {
        return f(w).sourcePosition;
      },
      get targetPosition() {
        return f(w).targetPosition;
      },
      get dragging() {
        return f(w).dragging;
      },
      get zIndex() {
        return f(I);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(S);
      },
      get width() {
        return f(w).width;
      },
      get height() {
        return f(w).height;
      },
      get initialWidth() {
        return f(w).initialWidth;
      },
      get initialHeight() {
        return f(w).initialHeight;
      },
      get measuredWidth() {
        return f(w).measured.width;
      },
      get measuredHeight() {
        return f(w).measured.height;
      },
      get parentId() {
        return f(w).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Ge.call(this, t, H);
        },
        nodemouseenter(H) {
          Ge.call(this, t, H);
        },
        nodemousemove(H) {
          Ge.call(this, t, H);
        },
        nodemouseleave(H) {
          Ge.call(this, t, H);
        },
        nodedrag(H) {
          Ge.call(this, t, H);
        },
        nodedragstart(H) {
          Ge.call(this, t, H);
        },
        nodedragstop(H) {
          Ge.call(this, t, H);
        },
        nodecontextmenu(H) {
          Ge.call(this, t, H);
        }
      }
    });
  }), j($), A(e, $);
  var h = me({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), h;
}
ve(vd, { nodeClickDistance: {} }, [], [], !0);
var am = /* @__PURE__ */ Pe('<svg><g role="img"><!></g></svg>');
function gd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(K, "$edgeTypes", n), i = () => re(ae, "$flowId", n), a = () => re(he, "$elementsSelectable", n), s = () => re(G, "$edgeLookup", n), l = /* @__PURE__ */ ue(void 0, !0), u = /* @__PURE__ */ ue(void 0, !0), c = /* @__PURE__ */ ue(void 0, !0), d = /* @__PURE__ */ ue(void 0, !0), v = /* @__PURE__ */ ue(void 0, !0);
  let g = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), M = y(t, "selectable", 13, void 0), P = y(t, "deletable", 13, void 0), L = y(t, "hidden", 13, !1), D = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), q = y(t, "markerStart", 13, void 0), N = y(t, "markerEnd", 13, void 0), I = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), H = y(t, "sourceX", 13), _ = y(t, "sourceY", 13), T = y(t, "targetX", 13), E = y(t, "targetY", 13), O = y(t, "sourcePosition", 13), R = y(t, "targetPosition", 13), X = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), ee = y(t, "class", 13, "");
  Jr("svelteflow__edge_id", g());
  const {
    edgeLookup: G,
    edgeTypes: K,
    flowId: ae,
    elementsSelectable: he
  } = Qe(), ge = ua(), ce = td();
  function _e(U) {
    const qe = s().get(g());
    qe && (ce(g()), ge("edgeclick", { event: U, edge: qe }));
  }
  function J(U, qe) {
    const We = s().get(g());
    We && ge(qe, { event: U, edge: We });
  }
  we(() => ne(p()), () => {
    Q(l, p() || "default");
  }), we(
    () => (o(), f(l), Ki),
    () => {
      Q(u, o()[f(l)] || Ki);
    }
  ), we(
    () => (ne(q()), i()),
    () => {
      Q(c, q() ? `url('#${ss(q(), i())}')` : void 0);
    }
  ), we(
    () => (ne(N()), i()),
    () => {
      Q(d, N() ? `url('#${ss(N(), i())}')` : void 0);
    }
  ), we(
    () => (ne(M()), a()),
    () => {
      Q(v, M() ?? a());
    }
  ), Mt(), Xe(!0);
  var se = st(), Me = $e(se);
  {
    var de = (U) => {
      var qe = am();
      let We;
      var le = Y(qe);
      let fe;
      var Ee = Y(le);
      const Ie = /* @__PURE__ */ Ce(() => P() ?? !0);
      Ku(Ee, () => f(u), (De, dt) => {
        dt(De, {
          get id() {
            return g();
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
            return _();
          },
          get targetX() {
            return T();
          },
          get targetY() {
            return E();
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return R();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return D();
          },
          get labelStyle() {
            return z();
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
            return f(Ie);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return I();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), j(le), j(qe), Te(
        (De, dt) => {
          We = $t(qe, "", We, { "z-index": C() }), fe = Lt(le, 0, De, null, fe, dt), ke(le, "data-id", g()), ke(le, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => Sn(Bt(["svelte-flow__edge", ee()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        Ce
      ), ft("click", le, _e), ft("contextmenu", le, (De) => {
        J(De, "edgecontextmenu");
      }), ft("mouseenter", le, (De) => {
        J(De, "edgemouseenter");
      }), ft("mouseleave", le, (De) => {
        J(De, "edgemouseleave");
      }), A(U, qe);
    };
    xe(Me, (U) => {
      L() || U(de);
    });
  }
  A(e, se);
  var Oe = me({
    get id() {
      return g();
    },
    set id(U) {
      g(U), m();
    },
    get type() {
      return p();
    },
    set type(U) {
      p(U), m();
    },
    get source() {
      return b();
    },
    set source(U) {
      b(U), m();
    },
    get target() {
      return x();
    },
    set target(U) {
      x(U), m();
    },
    get data() {
      return $();
    },
    set data(U) {
      $(U), m();
    },
    get style() {
      return h();
    },
    set style(U) {
      h(U), m();
    },
    get zIndex() {
      return C();
    },
    set zIndex(U) {
      C(U), m();
    },
    get animated() {
      return w();
    },
    set animated(U) {
      w(U), m();
    },
    get selected() {
      return k();
    },
    set selected(U) {
      k(U), m();
    },
    get selectable() {
      return M();
    },
    set selectable(U) {
      M(U), m();
    },
    get deletable() {
      return P();
    },
    set deletable(U) {
      P(U), m();
    },
    get hidden() {
      return L();
    },
    set hidden(U) {
      L(U), m();
    },
    get label() {
      return D();
    },
    set label(U) {
      D(U), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(U) {
      z(U), m();
    },
    get markerStart() {
      return q();
    },
    set markerStart(U) {
      q(U), m();
    },
    get markerEnd() {
      return N();
    },
    set markerEnd(U) {
      N(U), m();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(U) {
      I(U), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(U) {
      S(U), m();
    },
    get sourceX() {
      return H();
    },
    set sourceX(U) {
      H(U), m();
    },
    get sourceY() {
      return _();
    },
    set sourceY(U) {
      _(U), m();
    },
    get targetX() {
      return T();
    },
    set targetX(U) {
      T(U), m();
    },
    get targetY() {
      return E();
    },
    set targetY(U) {
      E(U), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(U) {
      O(U), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(U) {
      R(U), m();
    },
    get ariaLabel() {
      return X();
    },
    set ariaLabel(U) {
      X(U), m();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(U) {
      W(U), m();
    },
    get class() {
      return ee();
    },
    set class(U) {
      ee(U), m();
    }
  });
  return r(), Oe;
}
ve(
  gd,
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
function hd(e, t) {
  pe(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return mn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Xe(), me({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
ve(hd, { onMount: {}, onDestroy: {} }, [], [], !0);
var sm = /* @__PURE__ */ Pe("<defs></defs>");
function pd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(i, "$markers", n), { markers: i } = Qe();
  Xe();
  var a = sm();
  Zt(a, 5, o, (s) => s.id, (s, l) => {
    md(s, mt(() => f(l)));
  }), j(a), A(e, a), me(), r();
}
ve(pd, {}, [], [], !0);
var lm = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ Pe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ Pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function md(e, t) {
  pe(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Xe();
  var c = cm(), d = Y(c);
  {
    var v = (p) => {
      var b = lm();
      Te(() => {
        ke(b, "stroke", l()), ke(b, "stroke-width", u());
      }), A(p, b);
    }, g = (p, b) => {
      {
        var x = ($) => {
          var h = um();
          Te(() => {
            ke(h, "stroke", l()), ke(h, "stroke-width", u()), ke(h, "fill", l());
          }), A($, h);
        };
        xe(
          p,
          ($) => {
            r() === Zo.ArrowClosed && $(x);
          },
          b
        );
      }
    };
    xe(d, (p) => {
      r() === Zo.Arrow ? p(v) : p(g, !1);
    });
  }
  return j(c), Te(() => {
    ke(c, "id", n()), ke(c, "markerWidth", `${o()}`), ke(c, "markerHeight", `${i()}`), ke(c, "markerUnits", a()), ke(c, "orient", s());
  }), A(e, c), me({
    get id() {
      return n();
    },
    set id(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(p) {
      a(p), m();
    },
    get orient() {
      return s();
    },
    set orient(p) {
      s(p), m();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), m();
    }
  });
}
ve(
  md,
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
var dm = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function yd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(s, "$visibleEdges", n), i = () => re(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Qe();
  mn(() => {
    a() && u(a());
  }), Xe();
  var d = dm(), v = Y(d), g = Y(v);
  pd(g, {}), j(v);
  var p = B(v, 2);
  Zt(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ Ce(() => f(C).selectable ?? i()), k = /* @__PURE__ */ Ce(() => f(C).type || "default");
    gd(h, {
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
        return f(w);
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
        edgeclick(M) {
          Ge.call(this, t, M);
        },
        edgecontextmenu(M) {
          Ge.call(this, t, M);
        },
        edgemouseenter(M) {
          Ge.call(this, t, M);
        },
        edgemouseleave(M) {
          Ge.call(this, t, M);
        }
      }
    });
  });
  var b = B(p, 2);
  {
    var x = (h) => {
      hd(h, {
        onMount: () => {
          Li(l, !0);
        },
        onDestroy: () => {
          Li(l, !1);
        }
      });
    };
    xe(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  j(d), A(e, d);
  var $ = me({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
    }
  });
  return r(), $;
}
ve(yd, { defaultEdgeOptions: {} }, [], [], !0);
var fm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const vm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  pe(t, !1), lt(e, vm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = st(), l = $e(s);
  {
    var u = (c) => {
      var d = fm();
      let v;
      Te(() => v = $t(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), A(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return A(e, s), me({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), m();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), m();
    }
  });
}
ve(
  Xs,
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
function wd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(a, "$selectionRect", n), i = () => re(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Qe();
  Xe();
  const l = /* @__PURE__ */ Ce(() => !!(o() && i() === "user")), u = /* @__PURE__ */ Ce(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ Ce(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), d = /* @__PURE__ */ Ce(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), v = /* @__PURE__ */ Ce(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  Xs(e, {
    get isVisible() {
      return f(l);
    },
    get width() {
      return f(u);
    },
    get height() {
      return f(c);
    },
    get x() {
      return f(d);
    },
    get y() {
      return f(v);
    }
  }), me(), r();
}
ve(wd, {}, [], [], !0);
var gm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const hm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function bd(e, t) {
  pe(t, !1), lt(e, hm);
  const [n, r] = vt(), o = () => re(l, "$selectionRectMode", n), i = () => re(c, "$nodeLookup", n), a = () => re(u, "$nodes", n), s = Qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = ua();
  let v = /* @__PURE__ */ ue(null);
  function g(h) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  we(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (Q(v, Qo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), Mt(), Xe();
  var b = st(), x = $e(b);
  {
    var $ = (h) => {
      var C = gm(), w = Y(C);
      Xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), j(C), Ht(C, (k, M) => Fi == null ? void 0 : Fi(k, M), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, M, P, L) => {
          d("nodedrag", { event: k, targetNode: null, nodes: L });
        },
        onDragStart: (k, M, P, L) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: L });
        },
        onDragStop: (k, M, P, L) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: L });
        }
      })), tn(() => ft("contextmenu", C, g)), tn(() => ft("click", C, p)), tn(() => ft("keyup", C, () => {
      })), Te(() => $t(C, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), A(h, C);
    };
    xe(x, (h) => {
      o() === "nodes" && f(v) && jn(f(v).x) && jn(f(v).y) && h($);
    });
  }
  A(e, b), me(), r();
}
ve(bd, {}, [], [], !0);
function bt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: a.altKey,
      ctrl: a.ctrlKey,
      shift: a.shiftKey,
      meta: a.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: v, callback: g, preventDefault: p, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          p && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), g == null || g(x);
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
function xd(e, t) {
  pe(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => ji() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => ji() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = Qe();
  function g(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return g(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : g(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = b(w);
      return {
        key: k,
        modifier: p(w),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Xe(), ft("blur", Kt, $), ft("contextmenu", Kt, $), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Fp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Ht(Kt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), me({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), m();
    }
  });
}
ve(
  xd,
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
var pm = /* @__PURE__ */ Pe('<path fill="none" class="svelte-flow__connection-path"></path>'), mm = /* @__PURE__ */ Pe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function $d(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(g, "$connection", n), i = () => re(p, "$connectionLineType", n), a = () => re(d, "$width", n), s = () => re(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: g,
    connectionLineType: p
  } = Qe();
  let b = /* @__PURE__ */ ue(null);
  we(
    () => (o(), ne(c()), i(), f(b), as),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: M, toPosition: P } = o(), L = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: M,
          targetX: k.x,
          targetY: k.y,
          targetPosition: P
        };
        switch (i()) {
          case Yr.Bezier:
            ((D) => Q(b, D[0]))(Ic(L));
            break;
          case Yr.Step:
            ((D) => Q(b, D[0]))(Xi({ ...L, borderRadius: 0 }));
            break;
          case Yr.SmoothStep:
            ((D) => Q(b, D[0]))(Xi(L));
            break;
          default:
            ((D) => Q(b, D[0]))(as(L));
        }
      }
    }
  ), Mt(), Xe();
  var x = st(), $ = $e(x);
  {
    var h = (w) => {
      var k = mm(), M = Y(k), P = Y(M);
      Dt(P, t, "connectionLine", {});
      var L = B(P);
      {
        var D = (z) => {
          var q = pm();
          Te(() => {
            ke(q, "d", f(b)), $t(q, u());
          }), A(z, q);
        };
        xe(L, (z) => {
          c() || z(D);
        });
      }
      j(M), j(k), Te(
        (z) => {
          ke(k, "width", a()), ke(k, "height", s()), $t(k, l()), Lt(M, 0, z);
        },
        [
          () => Sn(Bt([
            "svelte-flow__connection",
            Rp(o().isValid)
          ]))
        ],
        Ce
      ), A(w, k);
    };
    xe($, (w) => {
      o().inProgress && w(h);
    });
  }
  A(e, x);
  var C = me({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), m();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), m();
    }
  });
  return r(), C;
}
ve(
  $d,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var ym = /* @__PURE__ */ ie("<div><!></div>");
function ni(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  pe(t, !1);
  const [o, i] = vt(), a = () => re(d, "$selectionRectMode", o), s = /* @__PURE__ */ ue();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Qe();
  we(() => ne(l()), () => {
    Q(s, `${l()}`.split("-"));
  }), Mt(), Xe();
  var v = ym();
  let g;
  var p = Y(v);
  Dt(p, t, "default", {}), j(v), Te(
    (x) => g = hn(v, g, {
      class: x,
      style: u(),
      ...r,
      [xr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Bt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    Ce
  ), A(e, v);
  var b = me({
    get position() {
      return l();
    },
    set position(x) {
      l(x), m();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), m();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), m();
    }
  });
  return i(), b;
}
ve(ni, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var wm = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Cd(e, t) {
  pe(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Xe();
  var o = st(), i = $e(o);
  {
    var a = (s) => {
      ni(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = wm();
          A(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return A(e, o), me({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), m();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), m();
    }
  });
}
ve(Cd, { proOptions: {}, position: {} }, [], [], !0);
function nu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const bm = (e) => Object.keys(e);
function ru(e, t) {
  bm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function xm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function $m(e = "light") {
  return un("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = xm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Cm = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), _m = /* @__PURE__ */ ie("<!> <!>", 1), km = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Sm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function _d(e, t) {
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
  pe(t, !1), lt(e, Sm);
  const [i, a] = vt(), s = () => re(C(), "$viewport", i), l = () => re(mo, "$initialized", i), u = () => re(f(c), "$colorModeClass", i), c = /* @__PURE__ */ ue();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), g = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), M = y(t, "selectionKey", 12, void 0), P = y(t, "selectionMode", 12, void 0), L = y(t, "panActivationKey", 12, void 0), D = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), q = y(t, "nodesDraggable", 12, void 0), N = y(t, "nodesConnectable", 12, void 0), I = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), H = y(t, "snapGrid", 12, void 0), _ = y(t, "deleteKey", 12, void 0), T = y(t, "connectionRadius", 12, void 0), E = y(t, "connectionLineType", 12, void 0), O = y(t, "connectionMode", 28, () => Or.Strict), R = y(t, "connectionLineStyle", 12, ""), X = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), ee = y(t, "onMove", 12, void 0), G = y(t, "onMoveEnd", 12, void 0), K = y(t, "isValidConnection", 12, void 0), ae = y(t, "translateExtent", 12, void 0), he = y(t, "nodeExtent", 12, void 0), ge = y(t, "onlyRenderVisibleElements", 12, void 0), ce = y(t, "panOnScrollMode", 28, () => dr.Free), _e = y(t, "preventScrolling", 12, !0), J = y(t, "zoomOnScroll", 12, !0), se = y(t, "zoomOnDoubleClick", 12, !0), Me = y(t, "zoomOnPinch", 12, !0), de = y(t, "panOnScroll", 12, !1), Oe = y(t, "panOnDrag", 12, !0), U = y(t, "selectionOnDrag", 12, void 0), qe = y(t, "autoPanOnConnect", 12, !0), We = y(t, "autoPanOnNodeDrag", 12, !0), le = y(t, "onerror", 12, void 0), fe = y(t, "ondelete", 12, void 0), Ee = y(t, "onedgecreate", 12, void 0), Ie = y(t, "attributionPosition", 12, void 0), De = y(t, "proOptions", 12, void 0), dt = y(t, "defaultEdgeOptions", 12, void 0), rt = y(t, "width", 12, void 0), oe = y(t, "height", 12, void 0), Ze = y(t, "colorMode", 12, "light"), be = y(t, "onconnect", 12, void 0), jt = y(t, "onconnectstart", 12, void 0), Xt = y(t, "onconnectend", 12, void 0), ln = y(t, "onbeforedelete", 12, void 0), ze = y(t, "oninit", 12, void 0), ut = y(t, "nodeOrigin", 12, void 0), je = y(t, "paneClickDistance", 12, 0), Be = y(t, "nodeClickDistance", 12, 0), ct = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Qt = y(t, "style", 12, void 0), Ot = y(t, "class", 12, void 0), er = /* @__PURE__ */ ue(), yt = /* @__PURE__ */ ue(), Ct = /* @__PURE__ */ ue();
  const Mn = s() || h(), it = C1(ya) ? Qe() : F0({
    nodes: F(v()),
    edges: F(g()),
    width: rt(),
    height: oe(),
    fitView: p(),
    nodeOrigin: ut(),
    nodeExtent: he()
  });
  mn(() => (it.width.set(f(yt)), it.height.set(f(Ct)), it.domNode.set(f(er)), it.syncNodeStores(v()), it.syncEdgeStores(g()), it.syncViewport(C()), p() !== void 0 && it.fitViewOnInit.set(p()), b() && it.fitViewOptions.set(b()), nu(it, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: $(),
    translateExtent: ae(),
    paneClickDistance: je()
  }), () => {
    it.reset();
  }));
  const { initialized: mo } = it;
  let tr = /* @__PURE__ */ ue(!1);
  we(
    () => (f(yt), f(Ct)),
    () => {
      f(yt) !== void 0 && f(Ct) !== void 0 && (it.width.set(f(yt)), it.height.set(f(Ct)));
    }
  ), we(
    () => (f(tr), l(), ne(ze())),
    () => {
      var Z;
      !f(tr) && l() && ((Z = ze()) == null || Z(), Q(tr, !0));
    }
  ), we(
    () => (ne(d()), ne(E()), ne(T()), ne(P()), ne(H()), ne(ct()), ne(q()), ne(N()), ne(S()), ne(ge()), ne(K()), ne(qe()), ne(We()), ne(le()), ne(fe()), ne(Ee()), ne(O()), ne(I()), ne(be()), ne(jt()), ne(Xt()), ne(ln()), ne(ut()), ru),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: E(),
        connectionRadius: T(),
        selectionMode: P(),
        snapGrid: H(),
        defaultMarkerColor: ct(),
        nodesDraggable: q(),
        nodesConnectable: N(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: K(),
        autoPanOnConnect: qe(),
        autoPanOnNodeDrag: We(),
        onerror: le(),
        ondelete: fe(),
        onedgecreate: Ee(),
        connectionMode: O(),
        nodeDragThreshold: I(),
        onconnect: be(),
        onconnectstart: jt(),
        onconnectend: Xt(),
        onbeforedelete: ln(),
        nodeOrigin: ut()
      };
      ru(it, Z);
    }
  ), we(
    () => (ne(w()), ne(k()), ne(x()), ne($()), ne(ae()), ne(je())),
    () => {
      nu(it, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: $(),
        translateExtent: ae(),
        paneClickDistance: je()
      });
    }
  ), we(
    () => ne(Ze()),
    () => {
      ev(Q(c, $m(Ze())), "$colorModeClass", i);
    }
  ), Mt(), Xe();
  var Nt = km();
  let wr;
  var br = Y(Nt);
  xd(br, {
    get selectionKey() {
      return M();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return L();
    },
    get multiSelectionKey() {
      return D();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var zr = B(br, 2);
  const yo = /* @__PURE__ */ Ce(() => ce() === void 0 ? dr.Free : ce()), ai = /* @__PURE__ */ Ce(() => _e() === void 0 ? !0 : _e()), si = /* @__PURE__ */ Ce(() => J() === void 0 ? !0 : J()), Ca = /* @__PURE__ */ Ce(() => se() === void 0 ? !0 : se()), _a = /* @__PURE__ */ Ce(() => Me() === void 0 ? !0 : Me()), ka = /* @__PURE__ */ Ce(() => de() === void 0 ? !1 : de()), Sa = /* @__PURE__ */ Ce(() => Oe() === void 0 ? !0 : Oe()), V = /* @__PURE__ */ Ce(() => je() === void 0 ? 0 : je());
  ud(zr, {
    initialViewport: Mn,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return ee();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return f(yo);
    },
    get preventScrolling() {
      return f(ai);
    },
    get zoomOnScroll() {
      return f(si);
    },
    get zoomOnDoubleClick() {
      return f(Ca);
    },
    get zoomOnPinch() {
      return f(_a);
    },
    get panOnScroll() {
      return f(ka);
    },
    get panOnDrag() {
      return f(Sa);
    },
    get paneClickDistance() {
      return f(V);
    },
    children: (Z, at) => {
      const Ke = /* @__PURE__ */ Ce(() => Oe() === void 0 ? !0 : Oe());
      cd(Z, {
        get panOnDrag() {
          return f(Ke);
        },
        get selectionOnDrag() {
          return U();
        },
        $$events: {
          paneclick(Re) {
            Ge.call(this, t, Re);
          },
          panecontextmenu(Re) {
            Ge.call(this, t, Re);
          }
        },
        children: (Re, Tt) => {
          var gt = _m(), pt = $e(gt);
          dd(pt, {
            children: (nr, rr) => {
              var St = Cm(), Ar = $e(St);
              yd(Ar, {
                get defaultEdgeOptions() {
                  return dt();
                },
                $$events: {
                  edgeclick(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  edgecontextmenu(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  edgemouseenter(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  edgemouseleave(Fe) {
                    Ge.call(this, t, Fe);
                  }
                }
              });
              var li = B(Ar, 2);
              $d(li, {
                get containerStyle() {
                  return X();
                },
                get style() {
                  return R();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Fe, rb) => {
                    var Gs = st(), wf = $e(Gs);
                    Dt(wf, t, "connectionLine", {}), A(Fe, Gs);
                  }
                }
              });
              var ui = B(li, 6);
              vd(ui, {
                get nodeClickDistance() {
                  return Be();
                },
                $$events: {
                  nodeclick(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodemouseenter(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodemousemove(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodemouseleave(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedragstart(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedrag(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedragstop(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodecontextmenu(Fe) {
                    Ge.call(this, t, Fe);
                  }
                }
              });
              var yf = B(ui, 2);
              bd(yf, {
                $$events: {
                  selectionclick(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  selectioncontextmenu(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedragstart(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedrag(Fe) {
                    Ge.call(this, t, Fe);
                  },
                  nodedragstop(Fe) {
                    Ge.call(this, t, Fe);
                  }
                }
              }), A(nr, St);
            },
            $$slots: { default: !0 }
          });
          var Yt = B(pt, 2);
          wd(Yt, {}), A(Re, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var te = B(zr, 2);
  Cd(te, {
    get proOptions() {
      return De();
    },
    get position() {
      return Ie();
    }
  });
  var ye = B(te, 2);
  Dt(ye, t, "default", {}), j(Nt), zn(Nt, (Z) => Q(er, Z), () => f(er)), Te(
    (Z) => wr = hn(
      Nt,
      wr,
      {
        style: Qt(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Bt([
        "svelte-flow",
        Ot(),
        u()
      ])
    ],
    Ce
  ), gl(Nt, "clientWidth", (Z) => Q(yt, Z)), gl(Nt, "clientHeight", (Z) => Q(Ct, Z)), ft("dragover", Nt, function(Z) {
    Ge.call(this, t, Z);
  }), ft("drop", Nt, function(Z) {
    Ge.call(this, t, Z);
  }), A(e, Nt);
  var Le = me({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), m();
    },
    get nodes() {
      return v();
    },
    set nodes(Z) {
      v(Z), m();
    },
    get edges() {
      return g();
    },
    set edges(Z) {
      g(Z), m();
    },
    get fitView() {
      return p();
    },
    set fitView(Z) {
      p(Z), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(Z) {
      b(Z), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Z) {
      x(Z), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Z) {
      $(Z), m();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(Z) {
      h(Z), m();
    },
    get viewport() {
      return C();
    },
    set viewport(Z) {
      C(Z), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(Z) {
      w(Z), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Z) {
      k(Z), m();
    },
    get selectionKey() {
      return M();
    },
    set selectionKey(Z) {
      M(Z), m();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(Z) {
      P(Z), m();
    },
    get panActivationKey() {
      return L();
    },
    set panActivationKey(Z) {
      L(Z), m();
    },
    get multiSelectionKey() {
      return D();
    },
    set multiSelectionKey(Z) {
      D(Z), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(Z) {
      z(Z), m();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(Z) {
      q(Z), m();
    },
    get nodesConnectable() {
      return N();
    },
    set nodesConnectable(Z) {
      N(Z), m();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(Z) {
      I(Z), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Z) {
      S(Z), m();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(Z) {
      H(Z), m();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(Z) {
      _(Z), m();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(Z) {
      T(Z), m();
    },
    get connectionLineType() {
      return E();
    },
    set connectionLineType(Z) {
      E(Z), m();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(Z) {
      O(Z), m();
    },
    get connectionLineStyle() {
      return R();
    },
    set connectionLineStyle(Z) {
      R(Z), m();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(Z) {
      X(Z), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(Z) {
      W(Z), m();
    },
    get onMove() {
      return ee();
    },
    set onMove(Z) {
      ee(Z), m();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(Z) {
      G(Z), m();
    },
    get isValidConnection() {
      return K();
    },
    set isValidConnection(Z) {
      K(Z), m();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(Z) {
      ae(Z), m();
    },
    get nodeExtent() {
      return he();
    },
    set nodeExtent(Z) {
      he(Z), m();
    },
    get onlyRenderVisibleElements() {
      return ge();
    },
    set onlyRenderVisibleElements(Z) {
      ge(Z), m();
    },
    get panOnScrollMode() {
      return ce();
    },
    set panOnScrollMode(Z) {
      ce(Z), m();
    },
    get preventScrolling() {
      return _e();
    },
    set preventScrolling(Z) {
      _e(Z), m();
    },
    get zoomOnScroll() {
      return J();
    },
    set zoomOnScroll(Z) {
      J(Z), m();
    },
    get zoomOnDoubleClick() {
      return se();
    },
    set zoomOnDoubleClick(Z) {
      se(Z), m();
    },
    get zoomOnPinch() {
      return Me();
    },
    set zoomOnPinch(Z) {
      Me(Z), m();
    },
    get panOnScroll() {
      return de();
    },
    set panOnScroll(Z) {
      de(Z), m();
    },
    get panOnDrag() {
      return Oe();
    },
    set panOnDrag(Z) {
      Oe(Z), m();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(Z) {
      U(Z), m();
    },
    get autoPanOnConnect() {
      return qe();
    },
    set autoPanOnConnect(Z) {
      qe(Z), m();
    },
    get autoPanOnNodeDrag() {
      return We();
    },
    set autoPanOnNodeDrag(Z) {
      We(Z), m();
    },
    get onerror() {
      return le();
    },
    set onerror(Z) {
      le(Z), m();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(Z) {
      fe(Z), m();
    },
    get onedgecreate() {
      return Ee();
    },
    set onedgecreate(Z) {
      Ee(Z), m();
    },
    get attributionPosition() {
      return Ie();
    },
    set attributionPosition(Z) {
      Ie(Z), m();
    },
    get proOptions() {
      return De();
    },
    set proOptions(Z) {
      De(Z), m();
    },
    get defaultEdgeOptions() {
      return dt();
    },
    set defaultEdgeOptions(Z) {
      dt(Z), m();
    },
    get width() {
      return rt();
    },
    set width(Z) {
      rt(Z), m();
    },
    get height() {
      return oe();
    },
    set height(Z) {
      oe(Z), m();
    },
    get colorMode() {
      return Ze();
    },
    set colorMode(Z) {
      Ze(Z), m();
    },
    get onconnect() {
      return be();
    },
    set onconnect(Z) {
      be(Z), m();
    },
    get onconnectstart() {
      return jt();
    },
    set onconnectstart(Z) {
      jt(Z), m();
    },
    get onconnectend() {
      return Xt();
    },
    set onconnectend(Z) {
      Xt(Z), m();
    },
    get onbeforedelete() {
      return ln();
    },
    set onbeforedelete(Z) {
      ln(Z), m();
    },
    get oninit() {
      return ze();
    },
    set oninit(Z) {
      ze(Z), m();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(Z) {
      ut(Z), m();
    },
    get paneClickDistance() {
      return je();
    },
    set paneClickDistance(Z) {
      je(Z), m();
    },
    get nodeClickDistance() {
      return Be();
    },
    set nodeClickDistance(Z) {
      Be(Z), m();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(Z) {
      ct(Z), m();
    },
    get style() {
      return Qt();
    },
    set style(Z) {
      Qt(Z), m();
    },
    get class() {
      return Ot();
    },
    set class(Z) {
      Ot(Z), m();
    }
  });
  return a(), Le;
}
ve(
  _d,
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
function kd(e, t) {
  pe(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = ld({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Jr(ya, { getStore: () => l }), Os(() => {
    l.reset();
  }), Xe();
  var u = st(), c = $e(u);
  return Dt(c, t, "default", {}), A(e, u), me({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), m();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), m();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), m();
    }
  });
}
ve(
  kd,
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
var Em = /* @__PURE__ */ ie("<button><!></button>");
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
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Xe();
  var c = Em();
  let d;
  var v = Y(c);
  return Dt(v, t, "default", { class: "button-svg" }), j(c), Te(
    (g) => d = hn(c, d, {
      type: "button",
      class: g,
      ...r,
      [xr]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Bt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    Ce
  ), ft("click", c, function(g) {
    Ge.call(this, t, g);
  }), A(e, c), me({
    get class() {
      return o();
    },
    set class(g) {
      o(g), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(g) {
      a(g), m();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), m();
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
var Pm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Sd(e) {
  var t = Pm();
  A(e, t);
}
ve(Sd, {}, [], [], !0);
var Mm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Ed(e) {
  var t = Mm();
  A(e, t);
}
ve(Ed, {}, [], [], !0);
var Om = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Pd(e) {
  var t = Om();
  A(e, t);
}
ve(Pd, {}, [], [], !0);
var Tm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Md(e) {
  var t = Tm();
  A(e, t);
}
ve(Md, {}, [], [], !0);
var Hm = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Od(e) {
  var t = Hm();
  A(e, t);
}
ve(Od, {}, [], [], !0);
var Dm = /* @__PURE__ */ ie("<!> <!>", 1), Lm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Td(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(E, "$nodesDraggable", n), i = () => re(O, "$nodesConnectable", n), a = () => re(R, "$elementsSelectable", n), s = () => re(H, "$viewport", n), l = () => re(_, "$minZoom", n), u = () => re(T, "$maxZoom", n), c = /* @__PURE__ */ ue(), d = /* @__PURE__ */ ue(), v = /* @__PURE__ */ ue(), g = /* @__PURE__ */ ue();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), M = y(t, "buttonBorderColor", 12, void 0), P = y(t, "ariaLabel", 12, void 0), L = y(t, "style", 12, void 0), D = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), q = y(t, "class", 12, "");
  const {
    zoomIn: N,
    zoomOut: I,
    fitView: S,
    viewport: H,
    minZoom: _,
    maxZoom: T,
    nodesDraggable: E,
    nodesConnectable: O,
    elementsSelectable: R
  } = Qe(), X = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: M()
  }, W = () => {
    N();
  }, ee = () => {
    I();
  }, G = () => {
    S(z());
  }, K = () => {
    Q(c, !f(c)), E.set(f(c)), O.set(f(c)), R.set(f(c));
  };
  we(
    () => (o(), i(), a()),
    () => {
      Q(c, o() || i() || a());
    }
  ), we(() => (s(), l()), () => {
    Q(d, s().zoom <= l());
  }), we(() => (s(), u()), () => {
    Q(v, s().zoom >= u());
  }), we(() => ne(D()), () => {
    Q(g, D() === "horizontal" ? "horizontal" : "vertical");
  }), Mt(), Xe();
  const ae = /* @__PURE__ */ Ce(() => Bt([
    "svelte-flow__controls",
    f(g),
    q()
  ])), he = /* @__PURE__ */ Ce(() => P() ?? "Svelte Flow controls");
  ni(e, {
    get class() {
      return f(ae);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(he);
    },
    get style() {
      return L();
    },
    children: (ce, _e) => {
      var J = Lm(), se = $e(J);
      Dt(se, t, "before", {});
      var Me = B(se, 2);
      {
        var de = (Ee) => {
          var Ie = Dm(), De = $e(Ie);
          Po(De, mt(
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
              children: (rt, oe) => {
                Sd(rt);
              },
              $$slots: { default: !0 }
            }
          ));
          var dt = B(De, 2);
          Po(dt, mt(
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
              $$events: { click: ee },
              children: (rt, oe) => {
                Ed(rt);
              },
              $$slots: { default: !0 }
            }
          )), A(Ee, Ie);
        };
        xe(Me, (Ee) => {
          b() && Ee(de);
        });
      }
      var Oe = B(Me, 2);
      {
        var U = (Ee) => {
          Po(Ee, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: G },
              children: (Ie, De) => {
                Pd(Ie);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Oe, (Ee) => {
          x() && Ee(U);
        });
      }
      var qe = B(Oe, 2);
      {
        var We = (Ee) => {
          Po(Ee, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
            {
              $$events: { click: K },
              children: (Ie, De) => {
                var dt = st(), rt = $e(dt);
                {
                  var oe = (be) => {
                    Od(be);
                  }, Ze = (be) => {
                    Md(be);
                  };
                  xe(rt, (be) => {
                    f(c) ? be(oe) : be(Ze, !1);
                  });
                }
                A(Ie, dt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(qe, (Ee) => {
          $() && Ee(We);
        });
      }
      var le = B(qe, 2);
      Dt(le, t, "default", {});
      var fe = B(le, 2);
      Dt(fe, t, "after", {}), A(ce, J);
    },
    $$slots: { default: !0 }
  });
  var ge = me({
    get position() {
      return p();
    },
    set position(ce) {
      p(ce), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ce) {
      b(ce), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ce) {
      x(ce), m();
    },
    get showLock() {
      return $();
    },
    set showLock(ce) {
      $(ce), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ce) {
      h(ce), m();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ce) {
      C(ce), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ce) {
      w(ce), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ce) {
      k(ce), m();
    },
    get buttonBorderColor() {
      return M();
    },
    set buttonBorderColor(ce) {
      M(ce), m();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(ce) {
      P(ce), m();
    },
    get style() {
      return L();
    },
    set style(ce) {
      L(ce), m();
    },
    get orientation() {
      return D();
    },
    set orientation(ce) {
      D(ce), m();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(ce) {
      z(ce), m();
    },
    get class() {
      return q();
    },
    set class(ce) {
      q(ce), m();
    }
  });
  return r(), ge;
}
ve(
  Td,
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
var fr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(fr || (fr = {}));
var Vm = /* @__PURE__ */ Pe("<circle></circle>");
function Hd(e, t) {
  pe(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Xe();
  var o = Vm();
  return Te(
    (i) => {
      ke(o, "cx", n()), ke(o, "cy", n()), ke(o, "r", n()), Lt(o, 0, i);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    Ce
  ), A(e, o), me({
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
ve(Hd, { radius: {}, class: {} }, [], [], !0);
var Nm = /* @__PURE__ */ Pe("<path></path>");
function Dd(e, t) {
  pe(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Xe();
  var a = Nm();
  return Te(
    (s) => {
      ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Lt(a, 0, s);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    Ce
  ), A(e, a), me({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), m();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), m();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), m();
    }
  });
}
ve(
  Dd,
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
const zm = {
  [fr.Dots]: 1,
  [fr.Lines]: 1,
  [fr.Cross]: 6
};
var Am = /* @__PURE__ */ Pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Im = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Ld(e, t) {
  pe(t, !1), lt(e, Im);
  const [n, r] = vt(), o = () => re(k, "$flowId", n), i = () => re(w, "$viewport", n), a = /* @__PURE__ */ ue(), s = /* @__PURE__ */ ue(), l = /* @__PURE__ */ ue(), u = /* @__PURE__ */ ue(), c = /* @__PURE__ */ ue();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => fr.Dots), g = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Qe(), M = p() || zm[v()], P = v() === fr.Dots, L = v() === fr.Cross, D = Array.isArray(g()) ? g() : [g(), g()];
  we(
    () => (o(), ne(d())),
    () => {
      Q(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), we(() => i(), () => {
    Q(s, [
      D[0] * i().zoom || 1,
      D[1] * i().zoom || 1
    ]);
  }), we(() => i(), () => {
    Q(l, M * i().zoom);
  }), we(() => (f(l), f(s)), () => {
    Q(u, L ? [f(l), f(l)] : f(s));
  }), we(
    () => (f(l), f(u)),
    () => {
      Q(c, P ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), Mt(), Xe();
  var z = Am();
  let q;
  var N = Y(z), I = Y(N);
  {
    var S = (E) => {
      const O = /* @__PURE__ */ Ce(() => f(l) / 2);
      Hd(E, {
        get radius() {
          return f(O);
        },
        get class() {
          return h();
        }
      });
    }, H = (E) => {
      Dd(E, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    xe(I, (E) => {
      P ? E(S) : E(H, !1);
    });
  }
  j(N);
  var _ = B(N);
  j(z), Te(
    (E) => {
      Lt(z, 0, E, "svelte-1r7pe8d"), q = $t(z, "", q, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": $()
      }), ke(N, "id", f(a)), ke(N, "x", i().x % f(s)[0]), ke(N, "y", i().y % f(s)[1]), ke(N, "width", f(s)[0]), ke(N, "height", f(s)[1]), ke(N, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), ke(_, "fill", `url(#${f(a)})`);
    },
    [
      () => Sn(Bt(["svelte-flow__background", C()]))
    ],
    Ce
  ), A(e, z);
  var T = me({
    get id() {
      return d();
    },
    set id(E) {
      d(E), m();
    },
    get variant() {
      return v();
    },
    set variant(E) {
      v(E), m();
    },
    get gap() {
      return g();
    },
    set gap(E) {
      g(E), m();
    },
    get size() {
      return p();
    },
    set size(E) {
      p(E), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(E) {
      b(E), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(E) {
      x(E), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(E) {
      $(E), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(E) {
      h(E), m();
    },
    get class() {
      return C();
    },
    set class(E) {
      C(E), m();
    }
  });
  return r(), T;
}
ve(
  Ld,
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
var Rm = /* @__PURE__ */ Pe("<rect></rect>");
function Vd(e, t) {
  pe(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Xe();
  var g = Rm();
  let p;
  return Te(
    (b, x) => {
      p = Lt(g, 0, b, null, p, x), ke(g, "x", n()), ke(g, "y", r()), ke(g, "rx", a()), ke(g, "ry", a()), ke(g, "width", o()), ke(g, "height", i()), $t(g, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ke(g, "shape-rendering", l());
    },
    [
      () => Sn(Bt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    Ce
  ), A(e, g), me({
    get x() {
      return n();
    },
    set x(b) {
      n(b), m();
    },
    get y() {
      return r();
    },
    set y(b) {
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
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), m();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), m();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), m();
    },
    get class() {
      return v();
    },
    set class(b) {
      v(b), m();
    }
  });
}
ve(
  Vd,
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
function ou(e, t) {
  const n = _0({
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
const Aa = (e) => e instanceof Function ? e : () => e;
var qm = /* @__PURE__ */ Pe("<title> </title>"), Zm = /* @__PURE__ */ Pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Nd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(Oe, "$flowId", n), i = () => re(se, "$viewport", n), a = () => re(Me, "$containerWidth", n), s = () => re(de, "$containerHeight", n), l = () => re(J, "$nodeLookup", n), u = () => re(_e, "$nodes", n), c = () => re(U, "$panZoom", n), d = () => re(qe, "$translateExtent", n), v = /* @__PURE__ */ ue(), g = /* @__PURE__ */ ue(), p = /* @__PURE__ */ ue(), b = /* @__PURE__ */ ue(), x = /* @__PURE__ */ ue(), $ = /* @__PURE__ */ ue(), h = /* @__PURE__ */ ue(), C = /* @__PURE__ */ ue(), w = /* @__PURE__ */ ue(), k = /* @__PURE__ */ ue(), M = /* @__PURE__ */ ue(), P = /* @__PURE__ */ ue(), L = /* @__PURE__ */ ue();
  let D = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), q = y(t, "nodeStrokeColor", 12, "transparent"), N = y(t, "nodeColor", 12, void 0), I = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), H = y(t, "nodeStrokeWidth", 12, 2), _ = y(t, "bgColor", 12, void 0), T = y(t, "maskColor", 12, void 0), E = y(t, "maskStrokeColor", 12, void 0), O = y(t, "maskStrokeWidth", 12, void 0), R = y(t, "width", 12, void 0), X = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), ee = y(t, "zoomable", 12, !0), G = y(t, "inversePan", 12, void 0), K = y(t, "zoomStep", 12, void 0), ae = y(t, "style", 12, ""), he = y(t, "class", 12, "");
  const ge = 200, ce = 150, {
    nodes: _e,
    nodeLookup: J,
    viewport: se,
    width: Me,
    height: de,
    flowId: Oe,
    panZoom: U,
    translateExtent: qe
  } = Qe(), We = N() === void 0 ? void 0 : Aa(N()), le = Aa(q()), fe = Aa(I()), Ee = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ie = `svelte-flow__minimap-desc-${o()}`;
  let De = /* @__PURE__ */ ue(f(v));
  const dt = () => f($);
  we(
    () => (i(), a(), s()),
    () => {
      Q(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), we(
    () => (l(), f(v), u()),
    () => {
      Q(De, l().size > 0 ? Vc(Qo(l()), f(v)) : f(v)), u();
    }
  ), we(() => ne(R()), () => {
    Q(g, R() ?? ge);
  }), we(() => ne(X()), () => {
    Q(p, X() ?? ce);
  }), we(
    () => (f(De), f(g)),
    () => {
      Q(b, f(De).width / f(g));
    }
  ), we(
    () => (f(De), f(p)),
    () => {
      Q(x, f(De).height / f(p));
    }
  ), we(
    () => (f(b), f(x)),
    () => {
      Q($, Math.max(f(b), f(x)));
    }
  ), we(() => (f($), f(g)), () => {
    Q(h, f($) * f(g));
  }), we(
    () => (f($), f(p)),
    () => {
      Q(C, f($) * f(p));
    }
  ), we(() => f($), () => {
    Q(w, 5 * f($));
  }), we(
    () => (f(De), f(h), f(w)),
    () => {
      Q(k, f(De).x - (f(h) - f(De).width) / 2 - f(w));
    }
  ), we(
    () => (f(De), f(C), f(w)),
    () => {
      Q(M, f(De).y - (f(C) - f(De).height) / 2 - f(w));
    }
  ), we(() => (f(h), f(w)), () => {
    Q(P, f(h) + f(w) * 2);
  }), we(() => (f(C), f(w)), () => {
    Q(L, f(C) + f(w) * 2);
  }), Mt(), Xe();
  const rt = /* @__PURE__ */ Ce(() => ae() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), oe = /* @__PURE__ */ Ce(() => Bt(["svelte-flow__minimap", he()]));
  ni(e, {
    get position() {
      return D();
    },
    get style() {
      return f(rt);
    },
    get class() {
      return f(oe);
    },
    "data-testid": "svelte-flow__minimap",
    children: (be, jt) => {
      var Xt = st(), ln = $e(Xt);
      {
        var ze = (ut) => {
          var je = Zm();
          ke(je, "aria-labelledby", Ie);
          let Be;
          var ct = Y(je);
          {
            var Qt = (yt) => {
              var Ct = qm();
              ke(Ct, "id", Ie);
              var Mn = Y(Ct, !0);
              j(Ct), Te(() => xt(Mn, z())), A(yt, Ct);
            };
            xe(ct, (yt) => {
              z() && yt(Qt);
            });
          }
          var Ot = B(ct);
          Zt(Ot, 1, u, (yt) => yt.id, (yt, Ct) => {
            var Mn = st();
            const it = /* @__PURE__ */ Ce(() => l().get(f(Ct).id));
            var mo = $e(Mn);
            {
              var tr = (Nt) => {
                const wr = /* @__PURE__ */ Ce(() => yr(f(it))), br = /* @__PURE__ */ Ce(() => We == null ? void 0 : We(f(it))), zr = /* @__PURE__ */ Ce(() => le(f(it))), yo = /* @__PURE__ */ Ce(() => fe(f(it)));
                Vd(Nt, mt(
                  {
                    get x() {
                      return f(it).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(it).internals.positionAbsolute.y;
                    }
                  },
                  () => f(wr),
                  {
                    get selected() {
                      return f(it).selected;
                    },
                    get color() {
                      return f(br);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return f(zr);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: Ee,
                    get class() {
                      return f(yo);
                    }
                  }
                ));
              };
              xe(mo, (Nt) => {
                f(it) && zc(f(it)) && Nt(tr);
              });
            }
            A(yt, Mn);
          });
          var er = B(Ot);
          j(je), Ht(je, (yt, Ct) => ou == null ? void 0 : ou(yt, Ct), () => ({
            panZoom: c(),
            viewport: se,
            getViewScale: dt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: K(),
            pannable: W(),
            zoomable: ee()
          })), Te(() => {
            ke(je, "width", f(g)), ke(je, "height", f(p)), ke(je, "viewBox", `${f(k) ?? ""} ${f(M) ?? ""} ${f(P) ?? ""} ${f(L) ?? ""}`), Be = $t(je, "", Be, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": E(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * f($) : void 0
            }), ke(er, "d", `M${f(k) - f(w)},${f(M) - f(w)}h${f(P) + f(w) * 2}v${f(L) + f(w) * 2}h${-f(P) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), A(ut, je);
        };
        xe(ln, (ut) => {
          c() && ut(ze);
        });
      }
      A(be, Xt);
    },
    $$slots: { default: !0 }
  });
  var Ze = me({
    get position() {
      return D();
    },
    set position(be) {
      D(be), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(be) {
      z(be), m();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(be) {
      q(be), m();
    },
    get nodeColor() {
      return N();
    },
    set nodeColor(be) {
      N(be), m();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(be) {
      I(be), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(be) {
      S(be), m();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(be) {
      H(be), m();
    },
    get bgColor() {
      return _();
    },
    set bgColor(be) {
      _(be), m();
    },
    get maskColor() {
      return T();
    },
    set maskColor(be) {
      T(be), m();
    },
    get maskStrokeColor() {
      return E();
    },
    set maskStrokeColor(be) {
      E(be), m();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(be) {
      O(be), m();
    },
    get width() {
      return R();
    },
    set width(be) {
      R(be), m();
    },
    get height() {
      return X();
    },
    set height(be) {
      X(be), m();
    },
    get pannable() {
      return W();
    },
    set pannable(be) {
      W(be), m();
    },
    get zoomable() {
      return ee();
    },
    set zoomable(be) {
      ee(be), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(be) {
      G(be), m();
    },
    get zoomStep() {
      return K();
    },
    set zoomStep(be) {
      K(be), m();
    },
    get style() {
      return ae();
    },
    set style(be) {
      ae(be), m();
    },
    get class() {
      return he();
    },
    set class(be) {
      he(be), m();
    }
  });
  return r(), Ze;
}
ve(
  Nd,
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
const iu = (e) => Zp(e);
function Jt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: g, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: $ } = Qe(), h = (k) => {
    var M, P;
    const L = F(p), D = iu(k) ? k : L.get(k.id), z = D.parentId ? Yp(D.position, D.measured, D.parentId, L, F(b)) : D.position, q = {
      ...D,
      position: z,
      width: ((M = D.measured) == null ? void 0 : M.width) ?? D.width,
      height: ((P = D.measured) == null ? void 0 : P.height) ?? D.height
    };
    return oo(q);
  }, C = (k, M, P = { replace: !1 }) => {
    var L;
    const D = (L = F(p).get(k)) == null ? void 0 : L.internals.userNode;
    if (!D)
      return;
    const z = typeof M == "function" ? M(D) : M;
    P.replace ? d.update((q) => q.map((N) => N.id === k ? iu(z) ? z : { ...N, ...z } : N)) : (Object.assign(D, z), d.update((q) => q));
  }, w = (k) => F(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var M;
      return (M = w(k)) == null ? void 0 : M.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(d) : au(F(p), k),
    getEdge: (k) => F(x).get(k),
    getEdges: (k) => k === void 0 ? F(v) : au(F(x), k),
    setZoom: (k, M) => {
      const P = F(c);
      return P ? P.scaleTo(k, { duration: M == null ? void 0 : M.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, M) => {
      const P = F(i), L = F(c);
      return L ? (await L.setViewport({
        x: k.x ?? P.x,
        y: k.y ?? P.y,
        zoom: k.zoom ?? P.zoom
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, M, P) => {
      const L = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : F(u), D = F(c);
      return D ? (await D.setViewport({
        x: F(a) / 2 - k * L,
        y: F(s) / 2 - M * L,
        zoom: L
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, M) => {
      const P = F(c);
      if (!P)
        return Promise.resolve(!1);
      const L = Rs(k, F(a), F(s), F(l), F(u), (M == null ? void 0 : M.padding) ?? 0.1);
      return await P.setViewport(L, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, M = !0, P) => {
      const L = ql(k), D = L ? k : h(k);
      return D ? (P || F(d)).filter((z) => {
        const q = F(p).get(z.id);
        if (!q || !L && z.id === k.id)
          return !1;
        const N = oo(q), I = Bo(N, D);
        return M && I > 0 || I >= D.width * D.height;
      }) : [];
    },
    isNodeIntersecting: (k, M, P = !0) => {
      const L = ql(k) ? k : h(k);
      if (!L)
        return !1;
      const D = Bo(L, M);
      return P && D > 0 || D >= L.width * L.height;
    },
    deleteElements: async ({ nodes: k = [], edges: M = [] }) => {
      const { nodes: P, edges: L } = await Hc({
        nodesToRemove: k,
        edgesToRemove: M,
        nodes: F(d),
        edges: F(v),
        onBeforeDelete: F(r)
      });
      return P && d.update((D) => D.filter((z) => !P.some(({ id: q }) => q === z.id))), L && v.update((D) => D.filter((z) => !L.some(({ id: q }) => q === z.id))), {
        deletedNodes: P,
        deletedEdges: L
      };
    },
    screenToFlowPosition: (k, M = { snapToGrid: !0 }) => {
      const P = F(g);
      if (!P)
        return k;
      const L = M.snapToGrid ? F(o) : !1, { x: D, y: z, zoom: q } = F(i), { x: N, y: I } = P.getBoundingClientRect(), S = {
        x: k.x - N,
        y: k.y - I
      };
      return ei(S, [D, z, q], L !== null, L || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const M = F(g);
      if (!M)
        return k;
      const { x: P, y: L, zoom: D } = F(i), { x: z, y: q } = M.getBoundingClientRect(), N = Nc(k, [P, L, D]);
      return {
        x: N.x + z,
        y: N.y + q
      };
    },
    toObject: () => ({
      nodes: F(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: F(v).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: C,
    updateNodeData: (k, M, P) => {
      var L;
      const D = (L = F(p).get(k)) == null ? void 0 : L.internals.userNode;
      if (!D)
        return;
      const z = typeof M == "function" ? M(D) : M;
      D.data = P != null && P.replace ? z : { ...D.data, ...z }, d.update((q) => q);
    },
    getNodesBounds: (k) => {
      const M = F(p), P = F(b);
      return Bp(k, { nodeLookup: M, nodeOrigin: P });
    },
    getHandleConnections: ({ type: k, id: M, nodeId: P }) => {
      var L;
      return Array.from(((L = F($).get(`${P}-${k}-${M ?? null}`)) == null ? void 0 : L.values()) ?? []);
    },
    viewport: i
  };
}
function au(e, t) {
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
var Bm = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function zd(e, t) {
  pe(t, !1);
  const [n, r] = vt(), o = () => re(C, "$nodes", n), i = () => re(h, "$nodeLookup", n), a = () => re($, "$viewport", n), s = () => re(x, "$domNode", n), l = /* @__PURE__ */ ue(), u = /* @__PURE__ */ ue(), c = /* @__PURE__ */ ue();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), g = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: $, nodeLookup: h, nodes: C } = Qe(), { getNodesBounds: w } = Jt(), k = Er("svelteflow__node_id");
  let M = /* @__PURE__ */ ue(), P = /* @__PURE__ */ ue([]), L = p() !== void 0 ? p() : 10, D = v() !== void 0 ? v() : Ve.Top, z = g() !== void 0 ? g() : "center";
  we(
    () => (o(), ne(d()), i()),
    () => {
      o();
      const H = Array.isArray(d()) ? d() : [d() || k];
      Q(P, H.reduce(
        (_, T) => {
          const E = i().get(T);
          return E && _.push(E), _;
        },
        []
      ));
    }
  ), we(
    () => (f(P), a()),
    () => {
      const H = w(f(P));
      H && Q(M, s0(H, a(), D, L, z));
    }
  ), we(() => f(P), () => {
    Q(l, f(P).length === 0 ? 1 : Math.max(...f(P).map((H) => (H.internals.z || 5) + 1)));
  }), we(() => o(), () => {
    Q(u, o().filter((H) => H.selected).length);
  }), we(
    () => (ne(b()), f(P), f(u)),
    () => {
      Q(c, typeof b() == "boolean" ? b() : f(P).length === 1 && f(P)[0].selected && f(u) === 1);
    }
  ), Mt(), Xe();
  var q = st(), N = $e(q);
  {
    var I = (H) => {
      var _ = Bm();
      let T;
      var E = Y(_);
      Dt(E, t, "default", {}), j(_), Ht(_, (O, R) => Wi == null ? void 0 : Wi(O, R), () => ({ domNode: s() })), Te(
        (O) => {
          ke(_, "data-id", O), T = $t(_, "", T, {
            position: "absolute",
            transform: f(M),
            "z-index": f(l)
          });
        },
        [
          () => f(P).reduce((O, R) => `${O}${R.id} `, "").trim()
        ],
        Ce
      ), A(H, _);
    };
    xe(N, (H) => {
      s() && f(c) && f(P) && H(I);
    });
  }
  A(e, q);
  var S = me({
    get nodeId() {
      return d();
    },
    set nodeId(H) {
      d(H), m();
    },
    get position() {
      return v();
    },
    set position(H) {
      v(H), m();
    },
    get align() {
      return g();
    },
    set align(H) {
      g(H), m();
    },
    get offset() {
      return p();
    },
    set offset(H) {
      p(H), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(H) {
      b(H), m();
    }
  });
  return r(), S;
}
ve(
  zd,
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
  return cr([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const v = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      v && l.push({
        id: v.id,
        type: v.type,
        data: v.data
      });
    }
    (!h0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const su = "tinyflow-component";
class jm {
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
    const t = document.createElement(su);
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
    const n = document.createElement(su);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Xm = () => {
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
}, ki = Xm();
var Ym = /* @__PURE__ */ ie("<button><!></button>");
function et(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Ym();
  let i;
  var a = Y(o);
  return Pr(a, () => n() ?? _t), j(o), Te(() => i = hn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), A(e, o), me({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ve(et, { children: {} }, [], [], !0);
var Wm = /* @__PURE__ */ ie("<input>");
function Ad(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Wm();
  kr(r);
  let o;
  Te(() => o = hn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Ad, {}, [], [], !0);
var Km = /* @__PURE__ */ ie("<input>");
function Et(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
  kr(r);
  let o;
  Te(() => o = hn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
ve(Et, {}, [], [], !0);
var Fm = /* @__PURE__ */ ie("<textarea></textarea>");
function Pt(e, t) {
  pe(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Fm();
  V1(o);
  let i;
  return Te(() => i = hn(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), A(e, o), me({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
ve(Pt, { value: {} }, [], [], !0);
var Um = /* @__PURE__ */ ie('<div role="button"><!></div>'), Gm = /* @__PURE__ */ ie("<div></div>");
function Id(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  pe(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Xe();
  var l = Gm();
  let u;
  return Zt(l, 5, o, Qr, (c, d, v) => {
    var g = Um();
    ke(g, "tabindex", v), g.__click = () => s(f(d), v), g.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var p = Y(g);
    {
      var b = ($) => {
        var h = Ue();
        Te(() => xt(h, f(d).label)), A($, h);
      }, x = ($) => {
        var h = st(), C = $e(h);
        Pr(C, () => f(d).label ?? _t), A($, h);
      };
      xe(p, ($) => {
        typeof f(d).label == "string" ? $(b) : $(x, !1);
      });
    }
    j(g), Te(() => Lt(g, 1, `tf-tabs-item ${(v === a() ? "active" : "") ?? ""}`)), A(c, g);
  }), j(l), Te(() => u = hn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), me({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), m();
    }
  });
}
go(["click", "keydown"]);
ve(Id, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Jm = (e, t, n) => t(f(n)), Qm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, e2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), t2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), n2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), r2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o2 = /* @__PURE__ */ ie("<div></div>");
const i2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Rd(e, t) {
  pe(t, !0), lt(e, i2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => bn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = o2();
  return Zt(a, 21, n, Qr, (s, l, u) => {
    var c = r2(), d = Y(c);
    ke(d, "tabindex", u), d.__click = [Jm, i, l], d.__keydown = [Qm, i, l];
    var v = Y(d);
    {
      var g = (w) => {
        var k = e2(), M = Y(k);
        lr(M, {
          get target() {
            return f(l).icon;
          }
        }), j(k), A(w, k);
      };
      xe(v, (w) => {
        f(l).icon && w(g);
      });
    }
    var p = B(v, 2);
    lr(p, {
      get target() {
        return f(l).title;
      }
    });
    var b = B(p, 2);
    j(d);
    var x = B(d, 2);
    {
      var $ = (w) => {
        var k = t2(), M = Y(k);
        lr(M, {
          get target() {
            return f(l).description;
          }
        }), j(k), A(w, k);
      };
      xe(x, (w) => {
        f(l).description && w($);
      });
    }
    var h = B(x, 2);
    {
      var C = (w) => {
        var k = n2(), M = Y(k);
        lr(M, {
          get target() {
            return f(l).content;
          }
        }), j(k), A(w, k);
      };
      xe(h, (w) => {
        o().includes(f(l).key) && w(C);
      });
    }
    j(c), Te((w) => Lt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), j(a), Te(() => {
    $t(a, t.style), Lt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, a), me({
    get items() {
      return n();
    },
    set items(s) {
      n(s), m();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), m();
    }
  });
}
go(["click", "keydown"]);
ve(Rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function lr(e, t) {
  pe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = st(), o = $e(r);
  {
    var i = (s) => {
      var l = st(), u = $e(l);
      Pr(u, () => n() ?? _t), A(s, l);
    }, a = (s) => {
      var l = st(), u = $e(l);
      Ms(u, n), A(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return A(e, r), me({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ve(lr, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(f(n)), s2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), l2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), u2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), d2 = /* @__PURE__ */ ie("<!> <!>", 1), f2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), v2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), g2 = /* @__PURE__ */ ie("<div><!></div>");
function pn(e, t) {
  pe(t, !0);
  const n = (C, w = _t) => {
    var k = st(), M = $e(k);
    Zt(M, 19, w, (P, L) => `${L}_${P.value}`, (P, L) => {
      var D = u2(), z = $e(D);
      z.__click = [a2, b, L];
      var q = Y(z), N = Y(q);
      {
        var I = (T) => {
          var E = s2();
          A(T, E);
        };
        xe(N, (T) => {
          f(L).children && f(L).children.length > 0 && T(I);
        });
      }
      j(q);
      var S = B(q, 2);
      lr(S, {
        get target() {
          return f(L).label;
        }
      }), j(z);
      var H = B(z, 2);
      {
        var _ = (T) => {
          var E = l2(), O = Y(E);
          n(O, () => f(L).children), j(E), A(T, E);
        };
        xe(H, (T) => {
          f(L).children && f(L).children.length > 0 && (l() || c().includes(f(L).value)) && T(_);
        });
      }
      A(P, D);
    }), A(C, k);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), v = /* @__PURE__ */ Vt(t, [
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
  ]), g = /* @__PURE__ */ He(() => {
    const C = [], w = (k) => {
      for (let M of k)
        a().length > 0 ? a().includes(M.value) && C.push(M) : s().includes(M.value) && C.push(M), M.children && M.children.length > 0 && w(M.children);
    };
    return w(r()), C;
  }), p;
  function b(C) {
    var w, k;
    if (C.children && C.children.length > 0) {
      (w = o()) == null || w(C);
      return;
    } else
      p == null || p.hide(), (k = i()) == null || k(C);
  }
  var x = g2();
  let $;
  var h = Y(x);
  return zn(
    po(h, {
      floating: (C) => {
        var w = c2(), k = Y(w);
        n(k, r), j(w), A(C, w);
      },
      children: (C, w) => {
        var k = v2();
        let M;
        var P = Y(k);
        Zt(
          P,
          23,
          () => f(g),
          (L, D) => `${D}_${L.value}`,
          (L, D, z) => {
            var q = st(), N = $e(q);
            {
              var I = (H) => {
                var _ = st(), T = $e(_);
                {
                  var E = (O) => {
                    lr(O, {
                      get target() {
                        return f(D).label;
                      }
                    });
                  };
                  xe(T, (O) => {
                    f(z) === 0 && O(E);
                  });
                }
                A(H, _);
              }, S = (H) => {
                var _ = d2(), T = $e(_);
                lr(T, {
                  get target() {
                    return f(D).label;
                  }
                });
                var E = B(T, 2);
                {
                  var O = (R) => {
                    var X = Ue(",");
                    A(R, X);
                  };
                  xe(E, (R) => {
                    f(z) < f(g).length - 1 && R(O);
                  });
                }
                A(H, _);
              };
              xe(N, (H) => {
                u() ? H(S, !1) : H(I);
              });
            }
            A(L, q);
          },
          (L) => {
            var D = f2(), z = Y(D, !0);
            j(D), Te(() => xt(z, d())), A(L, D);
          }
        ), j(P), Ae(2), j(k), Te(() => M = hn(k, M, {
          class: "tf-select-input nopan nodrag",
          ...v
        })), A(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), j(x), Te(() => $ = hn(x, $, {
    ...v,
    class: `tf-select ${v.class ?? ""}`
  })), A(e, x), me({
    get items() {
      return r();
    },
    set items(C) {
      r(C), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), m();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), m();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), m();
    }
  });
}
go(["click"]);
ve(
  pn,
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
const Xo = Math.min, Wr = Math.max, Ui = Math.round, Hn = (e) => ({
  x: e,
  y: e
}), h2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, p2 = {
  start: "end",
  end: "start"
};
function ls(e, t, n) {
  return Wr(e, Xo(t, n));
}
function ri(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hr(e) {
  return e.split("-")[0];
}
function oi(e) {
  return e.split("-")[1];
}
function qd(e) {
  return e === "x" ? "y" : "x";
}
function Ys(e) {
  return e === "y" ? "height" : "width";
}
function ao(e) {
  return ["top", "bottom"].includes(Hr(e)) ? "y" : "x";
}
function Ws(e) {
  return qd(ao(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = oi(e), o = Ws(e), i = Ys(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Gi(a)), [a, Gi(a)];
}
function y2(e) {
  const t = Gi(e);
  return [us(e), t, us(t)];
}
function us(e) {
  return e.replace(/start|end/g, (t) => p2[t]);
}
function w2(e, t, n) {
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
function b2(e, t, n, r) {
  const o = oi(e);
  let i = w2(Hr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(us)))), i;
}
function Gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => h2[t]);
}
function x2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zd(e) {
  return typeof e != "number" ? x2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ji(e) {
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
function lu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ao(t), a = Ws(t), s = Ys(a), l = Hr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
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
  switch (oi(t)) {
    case "start":
      g[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      g[a] += v * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const $2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = lu(u, r, l), v = r, g = {}, p = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: $
    } = s[b], {
      x: h,
      y: C,
      data: w,
      reset: k
    } = await $({
      x: c,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = C ?? d, g = {
      ...g,
      [x]: {
        ...g[x],
        ...w
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = lu(u, v, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function Bd(e, t) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = ri(t, e), p = Zd(g), b = s[v ? d === "floating" ? "reference" : "floating" : d], x = Ji(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
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
  }, w = Ji(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: h,
    strategy: l
  }) : $);
  return {
    top: (x.top - w.top + p.top) / C.y,
    bottom: (w.bottom - x.bottom + p.bottom) / C.y,
    left: (x.left - w.left + p.left) / C.x,
    right: (w.right - x.right + p.right) / C.x
  };
}
const C2 = (e) => ({
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
      element: u,
      padding: c = 0
    } = ri(e, t) || {};
    if (u == null)
      return {};
    const d = Zd(c), v = {
      x: n,
      y: r
    }, g = Ws(o), p = Ys(g), b = await a.getDimensions(u), x = g === "y", $ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[g] - v[g] - i.floating[p], k = v[g] - i.reference[g], M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = M ? M[C] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(M))) && (P = s.floating[C] || i.floating[p]);
    const L = w / 2 - k / 2, D = P / 2 - b[p] / 2 - 1, z = Xo(d[$], D), q = Xo(d[h], D), N = z, I = P - b[p] - q, S = P / 2 - b[p] / 2 + L, H = ls(N, S, I), _ = !l.arrow && oi(o) != null && S !== H && i.reference[p] / 2 - (S < N ? z : q) - b[p] / 2 < 0, T = _ ? S < N ? S - N : S - I : 0;
    return {
      [g]: v[g] + T,
      data: {
        [g]: H,
        centerOffset: S - H - T,
        ..._ && {
          alignmentOffset: T
        }
      },
      reset: _
    };
  }
}), _2 = function(e) {
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
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: b = !0,
        ...x
      } = ri(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Hr(o), h = ao(s), C = Hr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (C || !b ? [Gi(s)] : y2(s)), M = p !== "none";
      !v && M && k.push(...b2(s, b, p, w));
      const P = [s, ...k], L = await Bd(t, x), D = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(L[$]), d) {
        const S = m2(o, a, w);
        D.push(L[S[0]], L[S[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: D
      }], !D.every((S) => S <= 0)) {
        var q, N;
        const S = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, H = P[S];
        if (H)
          return {
            data: {
              index: S,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let _ = (N = z.filter((T) => T.overflows[0] <= 0).sort((T, E) => T.overflows[1] - E.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var I;
              const T = (I = z.filter((E) => {
                if (M) {
                  const O = ao(E.placement);
                  return O === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((O) => O > 0).reduce((O, R) => O + R, 0)]).sort((E, O) => E[1] - O[1])[0]) == null ? void 0 : I[0];
              T && (_ = T);
              break;
            }
            case "initialPlacement":
              _ = s;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Hr(n), s = oi(n), l = ao(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ri(t, e);
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
    x: g * c,
    y: v * u
  } : {
    x: v * u,
    y: g * c
  };
}
const S2 = function(e) {
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
      } = t, l = await k2(t, e);
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
}, E2 = function(e) {
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
      } = ri(e, t), u = {
        x: n,
        y: r
      }, c = await Bd(t, l), d = ao(Hr(o)), v = qd(d);
      let g = u[v], p = u[d];
      if (i) {
        const x = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", h = g + c[x], C = g - c[$];
        g = ls(h, g, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = p + c[x], C = p - c[$];
        p = ls(h, p, C);
      }
      const b = s.fn({
        ...t,
        [v]: g,
        [d]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [v]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function wa() {
  return typeof window < "u";
}
function ho(e) {
  return jd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (jd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jd(e) {
  return wa() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function _n(e) {
  return wa() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function An(e) {
  return wa() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function uu(e) {
  return !wa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function ii(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function P2(e) {
  return ["table", "td", "th"].includes(ho(e));
}
function ba(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ks(e) {
  const t = Fs(), n = _n(e) ? kn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function M2(e) {
  let t = hr(e);
  for (; An(t) && !so(t); ) {
    if (Ks(t))
      return t;
    if (ba(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Fs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(ho(e));
}
function kn(e) {
  return an(e).getComputedStyle(e);
}
function xa(e) {
  return _n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (ho(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uu(e) && e.host || // Fallback.
    Jn(e)
  );
  return uu(t) ? t.host : t;
}
function Xd(e) {
  const t = hr(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && ii(t) ? t : Xd(t);
}
function Yd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Xd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (cs(a), t.concat(a, a.visualViewport || [], ii(o) ? o : [], [])) : t.concat(o, Yd(o, []));
}
function cs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wd(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = An(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ui(n) !== i || Ui(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Kd(e) {
  return _n(e) ? e : e.contextElement;
}
function Kr(e) {
  const t = Kd(e);
  if (!An(t))
    return Hn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Wd(t);
  let a = (i ? Ui(n.width) : n.width) / r, s = (i ? Ui(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const O2 = /* @__PURE__ */ Hn(0);
function Fd(e) {
  const t = an(e);
  return !Fs() || !t.visualViewport ? O2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function T2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Yo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Kd(e);
  let a = Hn(1);
  t && (r ? _n(r) && (a = Kr(r)) : a = Kr(e));
  const s = T2(i, n, r) ? Fd(i) : Hn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = an(i), g = r && _n(r) ? an(r) : r;
    let p = v, b = cs(p);
    for (; b && r && g !== p; ) {
      const x = Kr(b), $ = b.getBoundingClientRect(), h = kn(b), C = $.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = $.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += w, p = an(b), b = cs(p);
    }
  }
  return Ji({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Us(e, t) {
  const n = xa(e).scrollLeft;
  return t ? t.left + n : Yo(Jn(e)).left + n;
}
function Ud(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Us(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function H2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Jn(r), s = t ? ba(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Hn(1);
  const c = Hn(0), d = An(r);
  if ((d || !d && !i) && ((ho(r) !== "body" || ii(a)) && (l = xa(r)), An(r))) {
    const g = Yo(r);
    u = Kr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const v = a && !d && !i ? Ud(a, l, !0) : Hn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function D2(e) {
  return Array.from(e.getClientRects());
}
function L2(e) {
  const t = Jn(e), n = xa(e), r = e.ownerDocument.body, o = Wr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Wr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Us(e);
  const s = -n.scrollTop;
  return kn(r).direction === "rtl" && (a += Wr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function V2(e, t) {
  const n = an(e), r = Jn(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Fs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function N2(e, t) {
  const n = Yo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = An(e) ? Kr(e) : Hn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function cu(e, t, n) {
  let r;
  if (t === "viewport")
    r = V2(e, n);
  else if (t === "document")
    r = L2(Jn(e));
  else if (_n(t))
    r = N2(t, n);
  else {
    const o = Fd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ji(r);
}
function Gd(e, t) {
  const n = hr(e);
  return n === t || !_n(n) || so(n) ? !1 : kn(n).position === "fixed" || Gd(n, t);
}
function z2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Yd(e, []).filter((s) => _n(s) && ho(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; _n(a) && !so(a); ) {
    const s = kn(a), l = Ks(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ii(a) && !l && Gd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = hr(a);
  }
  return t.set(e, r), r;
}
function A2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ba(t) ? [] : z2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = cu(t, u, o);
    return l.top = Wr(c.top, l.top), l.right = Xo(c.right, l.right), l.bottom = Xo(c.bottom, l.bottom), l.left = Wr(c.left, l.left), l;
  }, cu(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function I2(e) {
  const {
    width: t,
    height: n
  } = Wd(e);
  return {
    width: t,
    height: n
  };
}
function R2(e, t, n) {
  const r = An(t), o = Jn(t), i = n === "fixed", a = Yo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Hn(0);
  if (r || !r && !i)
    if ((ho(t) !== "body" || ii(o)) && (s = xa(t)), r) {
      const v = Yo(t, !0, i, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && (l.x = Us(o));
  const u = o && !r && !i ? Ud(o, s) : Hn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Ia(e) {
  return kn(e).position === "static";
}
function du(e, t) {
  if (!An(e) || kn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Jn(e) === n && (n = n.ownerDocument.body), n;
}
function Jd(e, t) {
  const n = an(e);
  if (ba(e))
    return n;
  if (!An(e)) {
    let o = hr(e);
    for (; o && !so(o); ) {
      if (_n(o) && !Ia(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = du(e, t);
  for (; r && P2(r) && Ia(r); )
    r = du(r, t);
  return r && so(r) && Ia(r) && !Ks(r) ? n : r || M2(e) || n;
}
const q2 = async function(e) {
  const t = this.getOffsetParent || Jd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: R2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Z2(e) {
  return kn(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: H2,
  getDocumentElement: Jn,
  getClippingRect: A2,
  getOffsetParent: Jd,
  getElementRects: q2,
  getClientRects: D2,
  getDimensions: I2,
  getScale: Kr,
  isElement: _n,
  isRTL: Z2
}, j2 = S2, X2 = E2, Y2 = _2, W2 = C2, K2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: B2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return $2(e, t, {
    ...o,
    platform: i
  });
}, F2 = ({
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
    K2(e, u, {
      placement: r,
      middleware: [
        j2(o),
        // 手动偏移配置
        Y2(i),
        //自动翻转
        X2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [W2({ element: c })] : []
      ]
    }).then(({ x: $, y: h, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: M } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
        });
      }
    });
  }
  let v = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function b($) {
    $.stopPropagation(), v ? p() : g();
  }
  function x($) {
    u.contains($.target) || p();
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
      p();
    },
    isVisible() {
      return v;
    }
  };
};
var U2 = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function po(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  mn(() => (s = F2({
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
  var u = U2(), c = Y(u), d = Y(c);
  Pr(d, n), j(c), zn(c, (p) => i = p, () => i);
  var v = B(c, 2), g = Y(v);
  return Pr(g, r), j(v), zn(v, (p) => a = p, () => a), j(u), A(e, u), me({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), m();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), m();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), m();
    }
  });
}
ve(po, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ot(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = st(), s = $e(a);
  return j1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = hn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = st(), v = $e(d);
    Pr(v, () => n() ?? _t), A(u, d);
  }), A(e, a), me({
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
ve(ot, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var G2 = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const J2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function $a(e, t) {
  pe(t, !0), lt(e, J2);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  et(e, mt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = G2();
      A(r, i);
    },
    $$slots: { default: !0 }
  })), me();
}
ve($a, {}, [], [], !0);
const Q2 = () => {
  const e = Qe();
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
}, ey = () => {
  const { nodes: e, nodeLookup: t } = Qe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
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
}, pr = () => Er("tinyflow_options");
function kt() {
  return Er("svelteflow__node_id");
}
var ty = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ny = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ry = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), oy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), iy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, ay = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), sy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), ly = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), uy = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const cy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Pn(e, t) {
  pe(t, !0), lt(e, cy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), p = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: $ } = Jt(), h = /* @__PURE__ */ He(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: C } = Q2(), { copyNode: w } = ey(), k = pr(), M = () => {
    var O;
    (O = k.onNodeExecute) == null || O.call(k, $(r()));
  };
  let P = kt();
  var L = uy(), D = $e(L);
  {
    var z = (O) => {
      zd(O, {
        get position() {
          return Ve.Top;
        },
        align: "end",
        children: (R, X) => {
          var W = ly(), ee = Y(W);
          {
            var G = (J) => {
              et(J, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (se, Me) => {
                  var de = ty();
                  A(se, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(ee, (J) => {
              u() && J(G);
            });
          }
          var K = B(ee, 2);
          {
            var ae = (J) => {
              et(J, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (se, Me) => {
                  var de = ny();
                  A(se, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(K, (J) => {
              l() && J(ae);
            });
          }
          var he = B(K, 2);
          {
            var ge = (J) => {
              et(J, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (se, Me) => {
                  var de = ry();
                  A(se, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(he, (J) => {
              s() && J(ge);
            });
          }
          var ce = B(he, 2);
          {
            var _e = (J) => {
              po(J, {
                placement: "bottom",
                floating: (se) => {
                  var Me = ay(), de = Y(Me), Oe = B(Y(de));
                  Et(Oe, {
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const De = Ie.target.value;
                      x(P, { title: De });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(de);
                  var U = B(de, 2), qe = B(Y(U));
                  Pt(qe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const De = Ie.target.value;
                      x(P, { description: De });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(U);
                  var We = B(U, 2);
                  {
                    var le = (Ie) => {
                      var De = oy(), dt = B(Y(De));
                      Pt(dt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (rt) => {
                          const oe = rt.target.value;
                          x(P, { condition: oe });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(De), A(Ie, De);
                    };
                    xe(We, (Ie) => {
                      d() && Ie(le);
                    });
                  }
                  var fe = B(We, 2), Ee = B(Y(fe), 2);
                  kr(Ee), Ee.__change = [iy, x, P], j(fe), j(Me), Te(() => K1(Ee, !!n().async)), A(se, Me);
                },
                children: (se, Me) => {
                  et(se, {
                    class: "tf-node-toolbar-item",
                    children: (de, Oe) => {
                      var U = sy();
                      A(de, U);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            xe(ce, (J) => {
              c() && J(_e);
            });
          }
          j(W), A(R, W);
        },
        $$slots: { default: !0 }
      });
    };
    xe(D, (O) => {
      (s() || l() || u()) && O(z);
    });
  }
  var q = B(D, 2), N = B(Y(q), 2), I = Y(N);
  Rd(I, {
    get items() {
      return f(h);
    },
    activeKeys: b,
    onChange: (O, R) => {
      var X;
      x(r(), { expand: R == null ? void 0 : R.includes("key") }), (X = p()) == null || X(R != null && R.includes("key") ? "key" : "");
    }
  }), j(N), j(q);
  var S = B(q, 2);
  {
    var H = (O) => {
      gr(O, {
        type: "target",
        get position() {
          return Ve.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(S, (O) => {
      g() && O(H);
    });
  }
  var _ = B(S, 2);
  {
    var T = (O) => {
      gr(O, {
        type: "source",
        get position() {
          return Ve.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(_, (O) => {
      v() && O(T);
    });
  }
  var E = B(_, 2);
  return Pr(E, () => i() ?? _t), A(e, L), me({
    get data() {
      return n();
    },
    set data(O) {
      n(O), m();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), m();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), m();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), m();
    },
    get children() {
      return a();
    },
    set children(O) {
      a(O), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(O = !0) {
      s(O), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(O = !0) {
      c(O), m();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(O = !0) {
      d(O), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(O = !0) {
      v(O), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(O = !0) {
      g(O), m();
    },
    get onCollapse() {
      return p();
    },
    set onCollapse(O) {
      p(O), m();
    }
  });
}
go(["change"]);
ve(
  Pn,
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
const Qd = [
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
], dy = [
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
var fy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), vy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), gy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const hy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ef(e, t) {
  pe(t, !0), lt(e, hy);
  const [n, r] = vt(), o = () => re(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = kt(), l = /* @__PURE__ */ He(() => Nr(s)), u = /* @__PURE__ */ He(() => {
    var D, z;
    return {
      ...i(),
      ...(z = (D = o()) == null ? void 0 : D.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Jt(), d = (D, z) => {
    c(s, (q) => {
      let N = q.data.parameters;
      return N[a()][D] = z, { parameters: N };
    });
  }, v = (D) => {
    const z = D.target.value;
    d("name", z);
  }, g = (D) => {
    const z = D.target.checked;
    d("required", z);
  }, p = (D) => {
    const z = D.value;
    z && d("dataType", z);
  };
  let b;
  const x = () => {
    c(s, (D) => {
      let z = D.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), b == null || b.hide();
  };
  var $ = gy(), h = $e($), C = Y(h);
  Et(C, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), j(h);
  var w = B(h, 2), k = Y(w);
  Ad(k, {
    get checked() {
      return f(u).required;
    },
    onchange: g
  }), j(w);
  var M = B(w, 2), P = Y(M);
  zn(
    po(P, {
      placement: "bottom",
      floating: (D) => {
        var z = fy(), q = Y(z), N = B(Y(q));
        const I = /* @__PURE__ */ He(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        pn(N, {
          items: Qd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return f(I);
          }
        }), j(q);
        var S = B(q, 2), H = B(Y(S));
        Pt(H, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (R) => {
            const X = R.target.value;
            d("defaultValue", X);
          }
        }), j(S);
        var _ = B(S, 2), T = B(Y(_));
        Pt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (R) => {
            const X = R.target.value;
            d("description", X);
          }
        }), j(_);
        var E = B(_, 2), O = Y(E);
        et(O, {
          onclick: x,
          children: (R, X) => {
            Ae();
            var W = Ue("删除");
            A(R, W);
          },
          $$slots: { default: !0 }
        }), j(E), j(z), A(D, z);
      },
      children: (D, z) => {
        et(D, {
          class: "input-btn-more",
          children: (q, N) => {
            var I = vy();
            A(q, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => b = D,
    () => b
  ), j(M), A(e, $);
  var L = me({
    get parameter() {
      return i();
    },
    set parameter(D) {
      i(D), m();
    },
    get index() {
      return a();
    },
    set index(D) {
      a(D), m();
    }
  });
  return r(), L;
}
ve(ef, { parameter: {}, index: {} }, [], [], !0);
var py = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), my = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), yy = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const wy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function tf(e, t) {
  pe(t, !0), lt(e, wy);
  const [n, r] = vt(), o = () => re(f(a), "$node", n);
  let i = kt(), a = /* @__PURE__ */ He(() => Nr(i)), s = /* @__PURE__ */ He(() => {
    var v, g;
    return [...((g = (v = o()) == null ? void 0 : v.data) == null ? void 0 : g.parameters) || []];
  });
  var l = yy(), u = Y(l);
  {
    var c = (v) => {
      var g = py();
      Ae(4), A(v, g);
    };
    xe(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = B(u, 2);
  Zt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, g, p) => {
      ef(v, {
        get parameter() {
          return f(g);
        },
        get index() {
          return f(p);
        }
      });
    },
    (v) => {
      var g = my();
      A(v, g);
    }
  ), j(l), A(e, l), me(), r();
}
ve(tf, {}, [], [], !0);
const Qi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = lo()), Qi(t.children);
}), e), qn = () => {
  const { updateNodeData: e } = Jt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Qi(r == null ? void 0 : r.children);
      const o = {
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
var by = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), xy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Cy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function nf(e, t) {
  pe(t, !0), lt(e, Cy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn();
  return Pn(e, mt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = by();
      A(a, s);
    },
    children: (a, s) => {
      var l = $y(), u = $e(l), c = Y(u);
      ot(c, {
        level: 3,
        children: (g, p) => {
          Ae();
          var b = Ue("输入参数");
          A(g, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      et(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (g, p) => {
          var b = xy();
          A(g, b);
        },
        $$slots: { default: !0 }
      }), j(u);
      var v = B(u, 2);
      tf(v, {}), A(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ve(nf, { data: {} }, [], [], !0);
const rf = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), rf(e, r.source, n));
}, fu = (e, t) => {
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
}, _y = (e = !1) => {
  const t = kt(), n = Nr(t), { nodes: r, edges: o } = Qe();
  return cr([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = fu(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      rf(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = fu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var ky = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Sy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ey = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  pe(t, !0), lt(e, Ey);
  const [n, r] = vt(), o = () => re(f(c), "$node", n), i = () => re(C, "$selectItems", n);
  mn(() => {
    f(d).refType || x({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = kt(), c = /* @__PURE__ */ He(() => Nr(u)), d = /* @__PURE__ */ He(() => {
    var H;
    return {
      ...a(),
      ...(H = o()) == null ? void 0 : H.data[l()][s()]
    };
  });
  const { updateNodeData: v } = Jt(), g = (H, _) => {
    v(u, (T) => {
      let E = T.data[l()];
      return E[s()] = { ...E[s()], [H]: _ }, { [l()]: E };
    });
  }, p = (H, _) => {
    const T = _.target.value;
    g(H, T);
  }, b = (H) => {
    const _ = H.value;
    g("ref", _);
  }, x = (H) => {
    const _ = H.value;
    g("refType", _);
  };
  let $;
  const h = () => {
    v(u, (H) => {
      let _ = H.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), $ == null || $.hide();
  }, C = _y();
  var w = Sy(), k = $e(w), M = Y(k);
  const P = /* @__PURE__ */ He(() => f(d).nameDisabled === !0);
  Et(M, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(P);
    },
    oninput: (H) => p("name", H)
  }), j(k);
  var L = B(k, 2), D = Y(L);
  {
    var z = (H) => {
      Et(H, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, q = (H, _) => {
      {
        var T = (E) => {
          const O = /* @__PURE__ */ He(() => [f(d).ref]);
          pn(E, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(O);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        xe(
          H,
          (E) => {
            f(d).refType !== "input" && E(T);
          },
          _
        );
      }
    };
    xe(D, (H) => {
      f(d).refType === "fixed" ? H(z) : H(q, !1);
    });
  }
  j(L);
  var N = B(L, 2), I = Y(N);
  zn(
    po(I, {
      placement: "bottom",
      floating: (H) => {
        var _ = ky(), T = Y(_), E = B(Y(T));
        const O = /* @__PURE__ */ He(() => f(d).refType ? [f(d).refType] : []);
        pn(E, {
          items: dy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(O);
          },
          onSelect: x
        }), j(T);
        var R = B(T, 2), X = B(Y(R));
        Pt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            p("defaultValue", ae);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), j(R);
        var W = B(R, 2), ee = B(Y(W));
        Pt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            p("description", ae);
          },
          get value() {
            return f(d).description;
          }
        }), j(W);
        var G = B(W, 2), K = Y(G);
        et(K, {
          onclick: h,
          children: (ae, he) => {
            Ae();
            var ge = Ue("删除");
            A(ae, ge);
          },
          $$slots: { default: !0 }
        }), j(G), j(_), A(H, _);
      },
      children: (H, _) => {
        $a(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => $ = H,
    () => $
  ), j(N), A(e, w);
  var S = me({
    get parameter() {
      return a();
    },
    set parameter(H) {
      a(H), m();
    },
    get index() {
      return s();
    },
    set index(H) {
      s(H), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(H) {
      l(H), m();
    }
  });
  return r(), S;
}
ve(of, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Oy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ty = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rn(e, t) {
  pe(t, !0), lt(e, Ty);
  const [n, r] = vt(), o = () => re(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = kt(), l = /* @__PURE__ */ He(() => Nr(s)), u = /* @__PURE__ */ He(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Oy(), d = Y(c);
  {
    var v = (b) => {
      var x = Py();
      Ae(4), A(b, x);
    };
    xe(d, (b) => {
      f(u).length !== 0 && b(v);
    });
  }
  var g = B(d, 2);
  Zt(
    g,
    19,
    () => f(u),
    (b) => b.id,
    (b, x, $) => {
      of(b, {
        get parameter() {
          return f(x);
        },
        get index() {
          return f($);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = My(), $ = Y(x, !0);
      j(x), Te(() => xt($, i())), A(b, x);
    }
  ), j(c), A(e, c);
  var p = me({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), m();
    }
  });
  return r(), p;
}
ve(rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Hy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Dy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function af(e, t) {
  pe(t, !0), lt(e, Vy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn();
  return Pn(e, mt(
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
        var s = Hy();
        A(a, s);
      },
      children: (a, s) => {
        var l = Ly(), u = $e(l), c = Y(u);
        ot(c, {
          level: 3,
          children: (g, p) => {
            Ae();
            var b = Ue("输出参数");
            A(g, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        et(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, p) => {
            var b = Dy();
            A(g, b);
          },
          $$slots: { default: !0 }
        }), j(u);
        var v = B(u, 2);
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
      n(a), m();
    }
  });
}
ve(af, { data: {} }, [], [], !0);
var Ny = /* @__PURE__ */ Pe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), zy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), Ay = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Iy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ry = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  pe(t, !0), lt(e, Ry);
  const [n, r] = vt(), o = () => re(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = kt(), u = /* @__PURE__ */ He(() => Nr(l)), c = /* @__PURE__ */ He(() => {
    var T;
    let E = (T = o()) == null ? void 0 : T.data[s()], O;
    if (E && a().length > 0) {
      let R = E;
      for (let X = 0; X < a().length; X++) {
        const W = a()[X];
        X == a().length - 1 ? O = R[W] : R = R[W].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Jt(), v = (T, E) => {
    d(l, (O) => {
      const R = O.data[s()];
      if (R && a().length > 0) {
        let X = R;
        for (let W = 0; W < a().length; W++) {
          const ee = a()[W];
          W == a().length - 1 ? X[ee] = { ...X[ee], [T]: E } : X = R[ee].children;
        }
      }
      return { [s()]: R };
    });
  }, g = (T) => {
    const E = T.target.value;
    v("name", E);
  }, p = (T) => {
    const E = T.value;
    v("dataType", E);
  };
  let b;
  const x = () => {
    d(l, (T) => {
      let E = T.data[s()];
      if (E && a().length > 0) {
        let O = E;
        for (let R = 0; R < a().length; R++) {
          const X = a()[R];
          R == a().length - 1 ? O.splice(X, 1) : O = O[X].children;
        }
      }
      return { [s()]: [...E] };
    }), b == null || b.hide();
  }, $ = () => {
    d(l, (T) => {
      let E = T.data[s()];
      if (E && a().length > 0) {
        let O = E;
        for (let R = 0; R < a().length; R++) {
          const X = a()[R];
          R == a().length - 1 ? O[X].children ? O[X].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : O[X].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[X].children;
        }
      }
      return { [s()]: [...E] };
    });
  };
  var h = Iy(), C = $e(h), w = Y(C);
  {
    var k = (T) => {
      var E = st(), O = $e(E);
      Zt(O, 17, a, Qr, (R, X) => {
        Ae();
        var W = Ue(" ");
        A(R, W);
      }), A(T, E);
    };
    xe(w, (T) => {
      a().length > 1 && T(k);
    });
  }
  var M = B(w, 2);
  const P = /* @__PURE__ */ He(() => f(c).nameDisabled === !0);
  Et(M, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return f(P);
    }
  }), j(C);
  var L = B(C, 2), D = Y(L);
  const z = /* @__PURE__ */ He(() => f(c).dataType ? [f(c).dataType] : []), q = /* @__PURE__ */ He(() => f(c).dataTypeDisabled === !0);
  pn(D, {
    items: Qd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(z);
    },
    get disabled() {
      return f(q);
    },
    onSelect: p
  });
  var N = B(D, 2);
  {
    var I = (T) => {
      et(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (E, O) => {
          var R = Ny();
          A(E, R);
        },
        $$slots: { default: !0 }
      });
    };
    xe(N, (T) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && T(I);
    });
  }
  j(L);
  var S = B(L, 2), H = Y(S);
  zn(
    po(H, {
      placement: "bottom",
      floating: (T) => {
        var E = Ay(), O = Y(E), R = B(Y(O));
        const X = /* @__PURE__ */ He(() => f(c).defaultValue || "");
        Pt(R, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(X);
          },
          onchange: (he) => {
            const ge = he.target.value;
            v("defaultValue", ge);
          }
        }), j(O);
        var W = B(O, 2), ee = B(Y(W));
        const G = /* @__PURE__ */ He(() => f(c).description || "");
        Pt(ee, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(G);
          },
          onchange: (he) => {
            const ge = he.target.value;
            v("description", ge);
          }
        }), j(W);
        var K = B(W, 2);
        {
          var ae = (he) => {
            var ge = zy(), ce = Y(ge);
            et(ce, {
              onclick: x,
              children: (_e, J) => {
                Ae();
                var se = Ue("删除");
                A(_e, se);
              },
              $$slots: { default: !0 }
            }), j(ge), A(he, ge);
          };
          xe(K, (he) => {
            f(c).deleteDisabled !== !0 && he(ae);
          });
        }
        j(E), A(T, E);
      },
      children: (T, E) => {
        $a(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), j(S), A(e, h);
  var _ = me({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), m();
    },
    get position() {
      return a();
    },
    set position(T) {
      a(T), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(T) {
      s(T), m();
    }
  });
  return r(), _;
}
ve(sf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var qy = /* @__PURE__ */ ie("<!> <!>", 1), Zy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), By = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), jy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Xy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  pe(t, !0), lt(e, Xy);
  const [n, r] = vt(), o = () => re(f(u), "$node", n), i = (x, $ = _t, h = _t) => {
    var C = st(), w = $e(C);
    Zt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, M, P) => {
        var L = qy(), D = $e(L);
        const z = /* @__PURE__ */ He(() => [...h(), f(P)]);
        sf(D, {
          get parameter() {
            return f(M);
          },
          get position() {
            return f(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var q = B(D, 2);
        {
          var N = (I) => {
            var S = /* @__PURE__ */ Ce(() => [...h(), f(P)]);
            i(I, () => f(M).children, () => f(S));
          };
          xe(q, (I) => {
            f(M).children && I(N);
          });
        }
        A(k, L);
      },
      (k) => {
        var M = st(), P = $e(M);
        {
          var L = (D) => {
            var z = Zy(), q = Y(z, !0);
            j(z), Te(() => xt(q, a())), A(D, z);
          };
          xe(P, (D) => {
            h().length === 0 && D(L);
          });
        }
        A(k, M);
      }
    ), A(x, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = kt(), u = /* @__PURE__ */ He(() => Nr(l)), c = /* @__PURE__ */ He(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = jy(), v = Y(d);
  {
    var g = (x) => {
      var $ = By();
      Ae(4), A(x, $);
    };
    xe(v, (x) => {
      f(c).length !== 0 && x(g);
    });
  }
  var p = B(v, 2);
  i(p, () => f(c) || [], () => []), j(d), A(e, d);
  var b = me({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), m();
    }
  });
  return r(), b;
}
ve(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Yy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Wy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Fy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Uy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Gy = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Qy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  pe(t, !0), lt(e, Qy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ At(bn([]));
  mn(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Jt(), u = (c) => {
    l(o, () => ({ outType: c })), c === "text" ? l(o, {
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
  return $n(() => {
    n().outType || u("text");
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Yy();
        A(c, d);
      },
      children: (c, d) => {
        var v = Jy(), g = $e(v), p = Y(g);
        ot(p, {
          level: 3,
          children: (de, Oe) => {
            Ae();
            var U = Ue("输入参数");
            A(de, U);
          },
          $$slots: { default: !0 }
        });
        var b = B(p, 2);
        et(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (de, Oe) => {
            var U = Wy();
            A(de, U);
          },
          $$slots: { default: !0 }
        }), j(g);
        var x = B(g, 2);
        rn(x, {});
        var $ = B(x, 2);
        ot($, {
          level: 3,
          mt: "10px",
          children: (de, Oe) => {
            Ae();
            var U = Ue("模型设置");
            A(de, U);
          },
          $$slots: { default: !0 }
        });
        var h = B($, 4), C = Y(h);
        const w = /* @__PURE__ */ He(() => n().llmId ? [n().llmId] : []);
        pn(C, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (de) => {
            const Oe = de.value;
            l(o, () => ({ llmId: Oe }));
          },
          get value() {
            return f(w);
          }
        });
        var k = B(C, 2);
        $a(k, {}), j(h);
        var M = B(h, 4), P = Y(M), L = Y(P), D = Y(L);
        j(L);
        var z = B(L, 2);
        kr(z), z.__input = [Ky, l, o], j(P), j(M);
        var q = B(M, 2), N = Y(q), I = Y(N), S = Y(I);
        j(I);
        var H = B(I, 2);
        kr(H), H.__input = [Fy, l, o], j(N), j(q);
        var _ = B(q, 2), T = Y(_), E = Y(T), O = Y(E);
        j(E);
        var R = B(E, 2);
        kr(R), R.__input = [Uy, l, o], j(T), j(_);
        var X = B(_, 4), W = Y(X);
        const ee = /* @__PURE__ */ He(() => n().systemPrompt || "");
        Pt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(ee);
          },
          oninput: (de) => {
            l(o, { systemPrompt: de.target.value });
          }
        }), j(X);
        var G = B(X, 4), K = Y(G);
        const ae = /* @__PURE__ */ He(() => n().userPrompt || "");
        Pt(K, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ae);
          },
          oninput: (de) => {
            l(o, { userPrompt: de.target.value });
          }
        }), j(G);
        var he = B(G, 2), ge = Y(he);
        ot(ge, {
          level: 3,
          mt: "10px",
          children: (de, Oe) => {
            Ae();
            var U = Ue("输出参数");
            A(de, U);
          },
          $$slots: { default: !0 }
        });
        var ce = B(ge, 2);
        const _e = /* @__PURE__ */ He(() => n().outType ? [n().outType] : []);
        pn(ce, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (de) => {
            u(de.value);
          },
          get value() {
            return f(_e);
          }
        });
        var J = B(ce, 2);
        {
          var se = (de) => {
            et(de, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Oe, U) => {
                var qe = Gy();
                A(Oe, qe);
              },
              $$slots: { default: !0 }
            });
          };
          xe(J, (de) => {
            n().outType === "json" && de(se);
          });
        }
        j(he);
        var Me = B(he, 2);
        Qn(Me, {}), Te(() => {
          xt(D, `Temperature: ${n().temperature ?? 0.5}`), Ma(z, n().temperature ?? 0.5), xt(S, `Top P: ${n().topP ?? 0.9}`), Ma(H, n().topP ?? 0.9), xt(O, `Top K: ${n().topK ?? 50}`), Ma(R, n().topK ?? 50);
        }), A(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
go(["input"]);
ve(lf, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), tw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ow = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  pe(t, !0), lt(e, ow);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  mn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = kt(), { addParameter: i } = qn(), { updateNodeData: a } = Jt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ew();
        A(l, u);
      },
      children: (l, u) => {
        var c = rw(), d = $e(c), v = Y(d);
        ot(v, {
          level: 3,
          children: (z, q) => {
            Ae();
            var N = Ue("输入参数");
            A(z, N);
          },
          $$slots: { default: !0 }
        });
        var g = B(v, 2);
        et(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, q) => {
            var N = tw();
            A(z, N);
          },
          $$slots: { default: !0 }
        }), j(d);
        var p = B(d, 2);
        rn(p, {});
        var b = B(p, 2);
        ot(b, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Ae();
            var N = Ue("代码");
            A(z, N);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), $ = Y(x);
        const h = /* @__PURE__ */ He(() => n().engine ? [n().engine] : ["qlexpress"]);
        pn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const q = z.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return f(h);
          }
        }), j(x);
        var C = B(x, 4), w = Y(C);
        const k = /* @__PURE__ */ He(() => n().code || "");
        Pt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return f(k);
          }
        }), j(C);
        var M = B(C, 2), P = Y(M);
        ot(P, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            Ae();
            var N = Ue("输出参数");
            A(z, N);
          },
          $$slots: { default: !0 }
        });
        var L = B(P, 2);
        et(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, q) => {
            var N = nw();
            A(z, N);
          },
          $$slots: { default: !0 }
        }), j(M);
        var D = B(M, 2);
        Qn(D, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ve(uf, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), aw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const lw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  pe(t, !0), lt(e, lw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn(), { updateNodeData: a } = Jt();
  return $n(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = iw();
        A(s, l);
      },
      children: (s, l) => {
        var u = sw(), c = $e(u), d = Y(c);
        ot(d, {
          level: 3,
          children: (k, M) => {
            Ae();
            var P = Ue("输入参数");
            A(k, P);
          },
          $$slots: { default: !0 }
        });
        var v = B(d, 2);
        et(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, M) => {
            var P = aw();
            A(k, P);
          },
          $$slots: { default: !0 }
        }), j(c);
        var g = B(c, 2);
        rn(g, {});
        var p = B(g, 2);
        ot(p, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, M) => {
            Ae();
            var P = Ue("模板内容");
            A(k, P);
          },
          $$slots: { default: !0 }
        });
        var b = B(p, 2), x = Y(b);
        const $ = /* @__PURE__ */ He(() => n().template || "");
        Pt(x, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), j(b);
        var h = B(b, 2), C = Y(h);
        ot(C, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            Ae();
            var P = Ue("输出参数");
            A(k, P);
          },
          $$slots: { default: !0 }
        }), j(h);
        var w = B(h, 2);
        Qn(w, {}), A(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ve(cf, { data: {} }, [], [], !0);
var uw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), cw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), gw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), pw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), mw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), yw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const bw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function df(e, t) {
  pe(t, !0), lt(e, bw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  mn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = kt(), { addParameter: a } = qn(), { updateNodeData: s } = Jt();
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = uw();
        A(l, u);
      },
      children: (l, u) => {
        var c = ww(), d = $e(c), v = Y(d), g = Y(v);
        const p = /* @__PURE__ */ He(() => n().method ? [n().method] : ["get"]);
        pn(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const fe = le.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return f(p);
          }
        }), j(v);
        var b = B(v, 2), x = Y(b);
        const $ = /* @__PURE__ */ He(() => n().url || "");
        Et(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return f($);
          }
        }), j(b), j(d);
        var h = B(d, 2), C = Y(h);
        ot(C, {
          level: 3,
          children: (le, fe) => {
            Ae();
            var Ee = Ue("Http 头信息");
            A(le, Ee);
          },
          $$slots: { default: !0 }
        });
        var w = B(C, 2);
        et(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, fe) => {
            var Ee = cw();
            A(le, Ee);
          },
          $$slots: { default: !0 }
        }), j(h);
        var k = B(h, 2);
        rn(k, { dataKeyName: "headers" });
        var M = B(k, 2), P = Y(M);
        ot(P, {
          level: 3,
          children: (le, fe) => {
            Ae();
            var Ee = Ue("参数");
            A(le, Ee);
          },
          $$slots: { default: !0 }
        });
        var L = B(P, 2);
        et(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (le, fe) => {
            var Ee = dw();
            A(le, Ee);
          },
          $$slots: { default: !0 }
        }), j(M);
        var D = B(M, 2);
        rn(D, { dataKeyName: "urlParameters" });
        var z = B(D, 2);
        ot(z, {
          level: 3,
          mt: "10px",
          children: (le, fe) => {
            Ae();
            var Ee = Ue("Body");
            A(le, Ee);
          },
          $$slots: { default: !0 }
        });
        var q = B(z, 2), N = Y(q), I = Y(N);
        const S = /* @__PURE__ */ He(() => !n().bodyType);
        Et(I, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(S);
          },
          onchange: (le) => {
            var fe;
            (fe = le.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Ae(), j(N);
        var H = B(N, 2), _ = Y(H);
        const T = /* @__PURE__ */ He(() => n().bodyType === "form-data");
        Et(_, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(T);
          },
          onchange: (le) => {
            var fe;
            (fe = le.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Ae(), j(H);
        var E = B(H, 2), O = Y(E);
        const R = /* @__PURE__ */ He(() => n().bodyType === "x-www-form-urlencoded");
        Et(O, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(R);
          },
          onchange: (le) => {
            var fe;
            (fe = le.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ae(), j(E);
        var X = B(E, 2), W = Y(X);
        const ee = /* @__PURE__ */ He(() => n().bodyType === "json");
        Et(W, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(ee);
          },
          onchange: (le) => {
            var fe;
            (fe = le.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Ae(), j(X);
        var G = B(X, 2), K = Y(G);
        const ae = /* @__PURE__ */ He(() => n().bodyType === "raw");
        Et(K, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ae);
          },
          onchange: (le) => {
            var fe;
            (fe = le.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Ae(), j(G), j(q);
        var he = B(q, 2);
        {
          var ge = (le) => {
            var fe = vw(), Ee = $e(fe), Ie = Y(Ee);
            ot(Ie, {
              level: 3,
              children: (rt, oe) => {
                Ae();
                var Ze = Ue("参数");
                A(rt, Ze);
              },
              $$slots: { default: !0 }
            });
            var De = B(Ie, 2);
            et(De, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (rt, oe) => {
                var Ze = fw();
                A(rt, Ze);
              },
              $$slots: { default: !0 }
            }), j(Ee);
            var dt = B(Ee, 2);
            rn(dt, { dataKeyName: "fromData" }), A(le, fe);
          };
          xe(he, (le) => {
            n().bodyType === "form-data" && le(ge);
          });
        }
        var ce = B(he, 2);
        {
          var _e = (le) => {
            var fe = hw(), Ee = $e(fe), Ie = Y(Ee);
            ot(Ie, {
              level: 3,
              children: (rt, oe) => {
                Ae();
                var Ze = Ue("参数");
                A(rt, Ze);
              },
              $$slots: { default: !0 }
            });
            var De = B(Ie, 2);
            et(De, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (rt, oe) => {
                var Ze = gw();
                A(rt, Ze);
              },
              $$slots: { default: !0 }
            }), j(Ee);
            var dt = B(Ee, 2);
            rn(dt, { dataKeyName: "fromUrlencoded" }), A(le, fe);
          };
          xe(ce, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(_e);
          });
        }
        var J = B(ce, 2);
        {
          var se = (le) => {
            var fe = pw(), Ee = Y(fe);
            Pt(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ie) => {
                s(i, { bodyJson: Ie.target.value });
              }
            }), j(fe), A(le, fe);
          };
          xe(J, (le) => {
            n().bodyType === "json" && le(se);
          });
        }
        var Me = B(J, 2);
        {
          var de = (le) => {
            var fe = mw(), Ee = Y(fe);
            Pt(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ie) => {
                s(i, { bodyRaw: Ie.target.value });
              }
            }), j(fe), A(le, fe);
          };
          xe(Me, (le) => {
            n().bodyType === "raw" && le(de);
          });
        }
        var Oe = B(Me, 2), U = Y(Oe);
        ot(U, {
          level: 3,
          mt: "10px",
          children: (le, fe) => {
            Ae();
            var Ee = Ue("输出参数");
            A(le, Ee);
          },
          $$slots: { default: !0 }
        });
        var qe = B(U, 2);
        et(qe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, fe) => {
            var Ee = yw();
            A(le, Ee);
          },
          $$slots: { default: !0 }
        }), j(Oe);
        var We = B(Oe, 2);
        Qn(We, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ve(df, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), $w = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const _w = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  pe(t, !0), lt(e, _w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ At(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return $n(() => {
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
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = xw();
        A(u, c);
      },
      children: (u, c) => {
        var d = Cw(), v = $e(d), g = Y(v);
        ot(g, {
          level: 3,
          children: (N, I) => {
            Ae();
            var S = Ue("输入参数");
            A(N, S);
          },
          $$slots: { default: !0 }
        });
        var p = B(g, 2);
        et(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, I) => {
            var S = $w();
            A(N, S);
          },
          $$slots: { default: !0 }
        }), j(v);
        var b = B(v, 2);
        rn(b, {});
        var x = B(b, 2);
        ot(x, {
          level: 3,
          mt: "10px",
          children: (N, I) => {
            Ae();
            var S = Ue("知识库设置");
            A(N, S);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), h = Y($);
        const C = /* @__PURE__ */ He(() => n().knowledgeId ? [n().knowledgeId] : []);
        pn(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (N) => {
            const I = N.value;
            l(o, () => ({ knowledgeId: I }));
          },
          get value() {
            return f(C);
          }
        }), j($);
        var w = B($, 4), k = Y(w);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const I = N.target.value;
            l(o, () => ({ keyword: I }));
          }
        }), j(w);
        var M = B(w, 4), P = Y(M);
        const L = /* @__PURE__ */ He(() => n().limit || "");
        Et(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (N) => {
            const I = N.target.value;
            l(o, () => ({ limit: I }));
          },
          get value() {
            return f(L);
          }
        }), j(M);
        var D = B(M, 2), z = Y(D);
        ot(z, {
          level: 3,
          mt: "10px",
          children: (N, I) => {
            Ae();
            var S = Ue("输出参数");
            A(N, S);
          },
          $$slots: { default: !0 }
        }), j(D);
        var q = B(D, 2);
        Qn(q, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ve(ff, { data: {} }, [], [], !0);
var kw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Sw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  pe(t, !0), lt(e, Pw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn(), a = pr();
  let s = /* @__PURE__ */ At(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return $n(() => {
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
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = kw();
        A(u, c);
      },
      children: (u, c) => {
        var d = Ew(), v = $e(d), g = Y(v);
        ot(g, {
          level: 3,
          children: (q, N) => {
            Ae();
            var I = Ue("输入参数");
            A(q, I);
          },
          $$slots: { default: !0 }
        });
        var p = B(g, 2);
        et(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, N) => {
            var I = Sw();
            A(q, I);
          },
          $$slots: { default: !0 }
        }), j(v);
        var b = B(v, 2);
        rn(b, {});
        var x = B(b, 2);
        ot(x, {
          level: 3,
          mt: "10px",
          children: (q, N) => {
            Ae();
            var I = Ue("搜索引擎设置");
            A(q, I);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), h = Y($);
        const C = /* @__PURE__ */ He(() => n().engine ? [n().engine] : []);
        pn(h, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const N = q.value;
            l(o, () => ({ engine: N }));
          },
          get value() {
            return f(C);
          }
        }), j($);
        var w = B($, 4), k = Y(w);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const N = q.target.value;
            l(o, () => ({ keyword: N }));
          }
        }), j(w);
        var M = B(w, 4), P = Y(M);
        Et(P, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const N = q.target.value;
            l(o, () => ({ limit: N }));
          }
        }), j(M);
        var L = B(M, 2), D = Y(L);
        ot(D, {
          level: 3,
          mt: "10px",
          children: (q, N) => {
            Ae();
            var I = Ue("输出参数");
            A(q, I);
          },
          $$slots: { default: !0 }
        }), j(L);
        var z = B(L, 2);
        Qn(z, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ve(vf, { data: {} }, [], [], !0);
var Mw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ow = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Hw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gf(e, t) {
  pe(t, !0), lt(e, Hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: i } = qn();
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = Mw();
        A(a, s);
      },
      handle: (a) => {
        gr(a, {
          type: "source",
          get position() {
            return Ve.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Tw(), u = $e(l), c = Y(u);
        ot(c, {
          level: 3,
          children: (x, $) => {
            Ae();
            var h = Ue("循环变量");
            A(x, h);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        et(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, $) => {
            var h = Ow();
            A(x, h);
          },
          $$slots: { default: !0 }
        }), j(u);
        var v = B(u, 2);
        rn(v, {});
        var g = B(v, 2), p = Y(g);
        ot(p, {
          level: 3,
          mt: "10px",
          children: (x, $) => {
            Ae();
            var h = Ue("输出参数");
            A(x, h);
          },
          $$slots: { default: !0 }
        }), j(g);
        var b = B(g, 2);
        Qn(b, {}), A(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ve(gf, { data: {} }, [], [], !0);
const Dw = {
  startNode: nf,
  codeNode: uf,
  llmNode: lf,
  templateNode: cf,
  httpNode: df,
  knowledgeNode: ff,
  searchEngineNode: vf,
  loopNode: gf,
  endNode: af
};
var Lw = /* @__PURE__ */ ie("<!> ", 1);
function ds(e, t) {
  pe(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return et(e, {
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
      var u = Lw(), c = $e(u);
      Ms(c, n);
      var d = B(c);
      Te(() => xt(d, ` ${r() ?? ""}`)), A(s, u);
    },
    $$slots: { default: !0 }
  }), me({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), m();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), m();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), m();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), m();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), m();
    }
  });
}
ve(
  ds,
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
var Vw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Nw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), zw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function hf(e, t) {
  pe(t, !0);
  let n = /* @__PURE__ */ At("base"), r = /* @__PURE__ */ At("show");
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
    const x = Object.keys(s).sort(($, h) => (s[$].sortNo || 0) - (s[h].sortNo || 0));
    for (let $ of x)
      s[$].group === "base" ? o.push({ type: $, ...s[$] }) : a.push({
        icon: s[$].icon,
        title: s[$].title,
        type: $
      });
    o.sort(($, h) => ($.sortNo || 0) - (h.sortNo || 0));
  }
  var l = zw(), u = Y(l), c = Y(u), d = Y(c);
  Id(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      Q(n, x.value.toString(), !0);
    }
  }), j(c);
  var v = B(c, 2), g = Y(v);
  Zt(g, 21, () => o, Qr, (x, $) => {
    ds(x, mt(() => f($)));
  }), j(g);
  var p = B(g, 2);
  Zt(p, 21, () => a, Qr, (x, $) => {
    ds(x, mt(() => f($)));
  }), j(p), j(v), j(u);
  var b = B(u, 2);
  et(b, {
    onclick: () => {
      Q(r, f(r) ? "" : "show", !0);
    },
    children: (x, $) => {
      var h = st(), C = $e(h);
      {
        var w = (M) => {
          var P = Vw();
          A(M, P);
        }, k = (M) => {
          var P = Nw();
          A(M, P);
        };
        xe(C, (M) => {
          f(r) === "show" ? M(w) : M(k, !1);
        });
      }
      A(x, h);
    },
    $$slots: { default: !0 }
  }), j(l), Te(() => {
    Lt(l, 1, `tf-toolbar ${f(r) ?? ""}`), $t(g, `display: ${(f(n) === "base" ? "flex" : "none") ?? ""}`), $t(p, `display: ${(f(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), A(e, l), me();
}
ve(hf, {}, [], [], !0);
const Aw = () => {
  const { nodeLookup: e } = Qe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Iw = () => {
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
}, Rw = () => {
  const { edges: e } = Qe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var qw = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Bw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), jw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Xw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Yw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ww = /* @__PURE__ */ Pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Kw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Fw = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const Uw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function pf(e, t) {
  var n;
  pe(t, !0), lt(e, Uw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = kt(), { addParameter: a } = qn(), s = Jt(), { updateNodeData: l } = s, u = { ...o, id: i, data: r() }, c = document.createElement("div"), d = pr().customNodes[t.type];
  (n = d.render) == null || n.call(d, c, u, s);
  const v = d.forms;
  let g;
  $n(() => {
    r().expand && g && g.append(c);
  }), $n(() => {
    var b;
    r() && ((b = d.onUpdate) == null || b.call(d, c, { ...u, data: r() }));
  }), $n(() => {
    !r().parameters && d.parameters && l(i, {
      parameters: Qi(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), $n(() => {
    !r().outputDefs && d.outputDefs && l(i, {
      outputDefs: Qi(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const p = /* @__PURE__ */ He(() => ({
    ...r(),
    description: d.description
  }));
  return Pn(e, mt(
    {
      get data() {
        return f(p);
      }
    },
    () => o,
    {
      icon: (b) => {
        var x = st(), $ = $e(x);
        Ms($, () => d.icon), A(b, x);
      },
      children: (b, x) => {
        var $ = Fw(), h = $e($);
        {
          var C = (D) => {
            var z = Zw(), q = $e(z), N = Y(q);
            ot(N, {
              level: 3,
              children: (_, T) => {
                Ae();
                var E = Ue("输入参数");
                A(_, E);
              },
              $$slots: { default: !0 }
            });
            var I = B(N, 2);
            {
              var S = (_) => {
                et(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (T, E) => {
                    var O = qw();
                    A(T, O);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(I, (_) => {
                d.parametersAddEnable !== !1 && _(S);
              });
            }
            j(q);
            var H = B(q, 2);
            rn(H, {}), A(D, z);
          };
          xe(h, (D) => {
            d.parametersEnable !== !1 && D(C);
          });
        }
        var w = B(h, 2);
        {
          var k = (D) => {
            var z = st(), q = $e(z);
            Zt(q, 17, () => v, Qr, (N, I) => {
              var S = st(), H = $e(S);
              {
                var _ = (E) => {
                  var O = Bw(), R = $e(O), X = Y(R, !0);
                  j(R);
                  var W = B(R, 2), ee = Y(W);
                  const G = /* @__PURE__ */ He(() => r()[f(I).name] || f(I).defaultValue);
                  Et(ee, mt(
                    {
                      get placeholder() {
                        return f(I).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(G);
                      }
                    },
                    () => f(I).attrs,
                    {
                      onchange: (K) => {
                        l(i, { [f(I).name]: K.target.value });
                      }
                    }
                  )), j(W), Te(() => xt(X, f(I).label)), A(E, O);
                }, T = (E, O) => {
                  {
                    var R = (W) => {
                      var ee = jw(), G = $e(ee), K = Y(G, !0);
                      j(G);
                      var ae = B(G, 2), he = Y(ae);
                      const ge = /* @__PURE__ */ He(() => r()[f(I).name] || f(I).defaultValue);
                      Pt(he, mt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(I).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(ge);
                          }
                        },
                        () => f(I).attrs,
                        {
                          onchange: (ce) => {
                            l(i, { [f(I).name]: ce.target.value });
                          }
                        }
                      )), j(ae), Te(() => xt(K, f(I).label)), A(W, ee);
                    }, X = (W, ee) => {
                      {
                        var G = (ae) => {
                          var he = Xw(), ge = $e(he), ce = Y(ge, !0);
                          j(ge);
                          var _e = B(ge, 2), J = Y(_e), se = Y(J), Me = Y(se);
                          j(se);
                          var de = B(se, 2);
                          kr(de);
                          var Oe = (qe) => l(i, {
                            [f(I).name]: parseFloat(qe.target.value)
                          });
                          let U;
                          j(J), j(_e), Te(() => {
                            xt(ce, f(I).label), xt(Me, `${f(I).description ?? ""}: ${r()[f(I).name] ?? f(I).defaultValue ?? ""}`), U = hn(
                              de,
                              U,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(I).attrs,
                                value: r()[f(I).name] ?? f(I).defaultValue,
                                oninput: Oe
                              },
                              "svelte-q0cqsa"
                            );
                          }), A(ae, he);
                        }, K = (ae, he) => {
                          {
                            var ge = (_e) => {
                              var J = Yw(), se = $e(J), Me = Y(se, !0);
                              j(se);
                              var de = B(se, 2), Oe = Y(de);
                              const U = /* @__PURE__ */ He(() => f(I).options || []), qe = /* @__PURE__ */ He(() => r()[f(I).name] ? [r()[f(I).name]] : [f(I).defaultValue]);
                              pn(Oe, {
                                get items() {
                                  return f(U);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(I).placeholder;
                                },
                                onSelect: (We) => {
                                  const le = We.value;
                                  l(i, () => ({ [f(I).name]: le }));
                                },
                                get value() {
                                  return f(qe);
                                }
                              }), j(de), Te(() => xt(Me, f(I).label)), A(_e, J);
                            }, ce = (_e, J) => {
                              {
                                var se = (Me) => {
                                  ot(Me, mt({ level: 3, mt: "10px" }, () => f(I).attrs, {
                                    children: (de, Oe) => {
                                      Ae();
                                      var U = Ue();
                                      Te(() => xt(U, f(I).label)), A(de, U);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                xe(
                                  _e,
                                  (Me) => {
                                    f(I).type === "heading" && Me(se);
                                  },
                                  J
                                );
                              }
                            };
                            xe(
                              ae,
                              (_e) => {
                                f(I).type === "select" ? _e(ge) : _e(ce, !1);
                              },
                              he
                            );
                          }
                        };
                        xe(
                          W,
                          (ae) => {
                            f(I).type === "slider" ? ae(G) : ae(K, !1);
                          },
                          ee
                        );
                      }
                    };
                    xe(
                      E,
                      (W) => {
                        f(I).type === "textarea" ? W(R) : W(X, !1);
                      },
                      O
                    );
                  }
                };
                xe(H, (E) => {
                  f(I).type === "input" ? E(_) : E(T, !1);
                });
              }
              A(N, S);
            }), A(D, z);
          };
          xe(w, (D) => {
            v && D(k);
          });
        }
        var M = B(w, 2);
        zn(M, (D) => g = D, () => g);
        var P = B(M, 2);
        {
          var L = (D) => {
            var z = Kw(), q = $e(z), N = Y(q);
            ot(N, {
              level: 3,
              mt: "10px",
              children: (_, T) => {
                Ae();
                var E = Ue("输出参数");
                A(_, E);
              },
              $$slots: { default: !0 }
            });
            var I = B(N, 2);
            {
              var S = (_) => {
                et(_, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (T, E) => {
                    var O = Ww();
                    A(T, O);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(I, (_) => {
                d.outputDefsAddEnable !== !1 && _(S);
              });
            }
            j(q);
            var H = B(q, 2);
            Qn(H, {}), A(D, z);
          };
          xe(P, (D) => {
            d.outputDefsEnable !== !1 && D(L);
          });
        }
        Te(() => {
          $t(M, d.rootStyle || ""), Lt(M, 1, Sn(d.rootClass), "svelte-q0cqsa");
        }), A(b, $);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return r();
    },
    set data(b) {
      r(b), m();
    }
  });
}
ve(pf, { data: {} }, [], [], !0);
const Gw = () => {
  const e = Qe();
  return {
    updateEdgeData: (t, n, r) => {
      const o = F(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
};
var Jw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Qw = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), eb = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const tb = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function mf(e, t) {
  pe(t, !0), lt(e, tb);
  const [n, r] = vt(), o = () => re(L, "$nodes", n), i = () => re(D, "$edges", n), a = () => re(z, "$viewport", n), s = y(t, "onInit", 7), l = Jt();
  s()(l);
  let u = /* @__PURE__ */ At(!1), c = /* @__PURE__ */ At(void 0);
  const { updateEdgeData: d } = Gw(), v = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, g = (E) => {
    var O;
    E.preventDefault();
    const R = l.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), X = (O = E.dataTransfer) == null ? void 0 : O.getData("application/tinyflow"), W = X ? JSON.parse(X) : {}, ee = {
      id: `node_${lo()}`,
      position: R,
      data: {},
      ...W
    };
    ki.addNode(ee), ki.selectNodeOnly(ee.id);
  }, { getNode: p } = Aw(), b = (E) => {
    const O = p(E.source), R = p(E.target);
    if (E.sourceHandle === "loop_handle" || O.parentId) {
      const X = l.getEdges();
      for (let W of X)
        if (W.target === E.target) {
          const ee = p(W.source);
          if (E.sourceHandle === "loop_handle" && ee.parentId !== O.id || O.parentId && ee.parentId !== O.parentId)
            return !1;
        }
    }
    return !(!O.parentId && R.parentId && R.parentId !== O.id);
  }, { ensureParentInNodesBefore: x } = Iw(), $ = (E, O) => {
    if (!O.isValid)
      return;
    const R = O.toNode;
    if (R.parentId)
      return;
    const X = O.fromNode, W = O.fromHandle, ee = { position: { ...R.position } };
    if (W.id === "loop_handle" ? ee.parentId = X.id : X.parentId && (ee.parentId = X.parentId), ee.parentId) {
      const G = p(ee.parentId);
      ee.position = {
        x: R.position.x - G.position.x,
        y: R.position.y - G.position.y
      }, x(ee.parentId, R.id), l.updateNode(R.id, ee);
    }
  }, { getEdgesByTarget: h } = Rw(), C = (E) => {
    E.edges.forEach((O) => {
      const R = p(O.target);
      if (R && R.parentId) {
        const X = h(O.target), W = p(R.parentId);
        if (X.length === 0)
          l.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + W.position.x,
              y: R.position.y + W.position.y
            }
          });
        else {
          let ee = !1;
          for (let G = 0; G < X.length; G++) {
            const K = X[G], ae = p(K.source);
            if (ae.parentId || ae.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || l.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + W.position.x,
              y: R.position.y + W.position.y
            }
          });
        }
      }
    });
  }, w = (E, O) => {
  }, k = (E) => {
  }, M = {}, P = pr().customNodes;
  if (P)
    for (let E of Object.keys(P))
      M[E] = pf;
  const { nodes: L, edges: D, viewport: z } = Qe(), q = pr().onDataChange;
  q && (L.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), D.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), z.subscribe(() => {
    q(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var N = eb(), I = Y(N);
  const S = /* @__PURE__ */ He(() => ({ ...Dw, ...M })), H = /* @__PURE__ */ He(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Zo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  _d(I, mt(
    {
      get nodeTypes() {
        return f(S);
      }
    },
    ki,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: $,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (E) => {
        const O = E.target;
        O.classList.contains("svelte-flow__edge-interaction") || O.classList.contains("panel-content") || O.closest(".panel-content") || (Q(u, !1), Q(c, null));
      },
      get defaultEdgeOptions() {
        return f(H);
      },
      $$events: {
        drop: g,
        dragover: v,
        edgeclick: (E) => {
          Q(u, !0), Q(c, E.detail.edge, !0);
        }
      },
      children: (E, O) => {
        var R = Qw(), X = $e(R);
        Ld(X, {});
        var W = B(X, 2);
        Td(W, {});
        var ee = B(W, 2);
        Nd(ee, {});
        var G = B(ee, 2);
        {
          var K = (ae) => {
            ni(ae, {
              children: (he, ge) => {
                var ce = Jw(), _e = B(Y(ce), 4), J = Y(_e);
                const se = /* @__PURE__ */ He(() => {
                  var Me, de;
                  return (de = (Me = f(c)) == null ? void 0 : Me.data) == null ? void 0 : de.condition;
                });
                Pt(J, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(se);
                  },
                  onchange: (Me) => {
                    f(c) && d(f(c).id, { condition: Me.target.value });
                  }
                }), j(_e), j(ce), A(he, ce);
              },
              $$slots: { default: !0 }
            });
          };
          xe(G, (ae) => {
            f(u) && ae(K);
          });
        }
        A(E, R);
      },
      $$slots: { default: !0 }
    }
  ));
  var _ = B(I, 2);
  hf(_, {}), j(N), A(e, N);
  var T = me({
    get onInit() {
      return s();
    },
    set onInit(E) {
      s(E), m();
    }
  });
  return r(), T;
}
ve(mf, { onInit: {} }, [], [], !0);
function nb(e, t) {
  pe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ki.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Jr("tinyflow_options", n()), kd(e, {
    fitView: !0,
    children: (i, a) => {
      mf(i, {
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
customElements.define("tinyflow-component", ve(nb, { options: {}, onInit: {} }, [], [], !1));
const ab = bf((e, t) => {
  const n = Js(null), r = Js(null);
  xf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return $f(() => {
    if (n.current) {
      const s = new jm({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Sf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  ab as Tinyflow
};
//# sourceMappingURL=index.js.map
