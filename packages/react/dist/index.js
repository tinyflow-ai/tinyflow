import Vc, { forwardRef as cg, useRef as tu, useImperativeHandle as dg, useEffect as fg } from "react";
var Pi = { exports: {} }, zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nu;
function pg() {
  if (nu) return zo;
  nu = 1;
  var e = Vc, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, f = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: a, key: p, ref: h, props: f, _owner: o.current };
  }
  return zo.Fragment = n, zo.jsx = s, zo.jsxs = s, zo;
}
var Mo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ru;
function hg() {
  return ru || (ru = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Vc, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, b = "@@iterator";
    function v(I) {
      if (I === null || typeof I != "object")
        return null;
      var se = g && I[g] || I[b];
      return typeof se == "function" ? se : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(I) {
      {
        for (var se = arguments.length, me = new Array(se > 1 ? se - 1 : 0), Ne = 1; Ne < se; Ne++)
          me[Ne - 1] = arguments[Ne];
        _("error", I, me);
      }
    }
    function _(I, se, me) {
      {
        var Ne = w.ReactDebugCurrentFrame, Fe = Ne.getStackAddendum();
        Fe !== "" && (se += "%s", me = me.concat([Fe]));
        var et = me.map(function(Re) {
          return String(Re);
        });
        et.unshift("Warning: " + se), Function.prototype.apply.call(console[I], console, et);
      }
    }
    var k = !1, $ = !1, T = !1, V = !1, D = !1, H;
    H = Symbol.for("react.module.reference");
    function R(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === i || D || I === o || I === u || I === d || V || I === h || k || $ || T || typeof I == "object" && I !== null && (I.$$typeof === p || I.$$typeof === f || I.$$typeof === s || I.$$typeof === a || I.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === H || I.getModuleId !== void 0));
    }
    function A(I, se, me) {
      var Ne = I.displayName;
      if (Ne)
        return Ne;
      var Fe = se.displayName || se.name || "";
      return Fe !== "" ? me + "(" + Fe + ")" : me;
    }
    function P(I) {
      return I.displayName || "Context";
    }
    function z(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
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
      if (typeof I == "object")
        switch (I.$$typeof) {
          case a:
            var se = I;
            return P(se) + ".Consumer";
          case s:
            var me = I;
            return P(me._context) + ".Provider";
          case l:
            return A(I, I.render, "ForwardRef");
          case f:
            var Ne = I.displayName || null;
            return Ne !== null ? Ne : z(I.type) || "Memo";
          case p: {
            var Fe = I, et = Fe._payload, Re = Fe._init;
            try {
              return z(Re(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, S = 0, E, j, Y, F, N, X, ee;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function K() {
      {
        if (S === 0) {
          E = console.log, j = console.info, Y = console.warn, F = console.error, N = console.group, X = console.groupCollapsed, ee = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        S++;
      }
    }
    function W() {
      {
        if (S--, S === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, I, {
              value: E
            }),
            info: C({}, I, {
              value: j
            }),
            warn: C({}, I, {
              value: Y
            }),
            error: C({}, I, {
              value: F
            }),
            group: C({}, I, {
              value: N
            }),
            groupCollapsed: C({}, I, {
              value: X
            }),
            groupEnd: C({}, I, {
              value: ee
            })
          });
        }
        S < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = w.ReactCurrentDispatcher, ne;
    function re(I, se, me) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Fe) {
            var Ne = Fe.stack.trim().match(/\n( *(at )?)/);
            ne = Ne && Ne[1] || "";
          }
        return `
` + ne + I;
      }
    }
    var Q = !1, ge;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ce();
    }
    function ie(I, se) {
      if (!I || Q)
        return "";
      {
        var me = ge.get(I);
        if (me !== void 0)
          return me;
      }
      var Ne;
      Q = !0;
      var Fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = G.current, G.current = null, K();
      try {
        if (se) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (Bt) {
              Ne = Bt;
            }
            Reflect.construct(I, [], Re);
          } else {
            try {
              Re.call();
            } catch (Bt) {
              Ne = Bt;
            }
            I.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Bt) {
            Ne = Bt;
          }
          I();
        }
      } catch (Bt) {
        if (Bt && Ne && typeof Bt.stack == "string") {
          for (var Le = Bt.stack.split(`
`), Ht = Ne.stack.split(`
`), ft = Le.length - 1, mt = Ht.length - 1; ft >= 1 && mt >= 0 && Le[ft] !== Ht[mt]; )
            mt--;
          for (; ft >= 1 && mt >= 0; ft--, mt--)
            if (Le[ft] !== Ht[mt]) {
              if (ft !== 1 || mt !== 1)
                do
                  if (ft--, mt--, mt < 0 || Le[ft] !== Ht[mt]) {
                    var ln = `
` + Le[ft].replace(" at new ", " at ");
                    return I.displayName && ln.includes("<anonymous>") && (ln = ln.replace("<anonymous>", I.displayName)), typeof I == "function" && ge.set(I, ln), ln;
                  }
                while (ft >= 1 && mt >= 0);
              break;
            }
        }
      } finally {
        Q = !1, G.current = et, W(), Error.prepareStackTrace = Fe;
      }
      var oo = I ? I.displayName || I.name : "", Mr = oo ? re(oo) : "";
      return typeof I == "function" && ge.set(I, Mr), Mr;
    }
    function le(I, se, me) {
      return ie(I, !1);
    }
    function ve(I) {
      var se = I.prototype;
      return !!(se && se.isReactComponent);
    }
    function we(I, se, me) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return ie(I, ve(I));
      if (typeof I == "string")
        return re(I);
      switch (I) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case l:
            return le(I.render);
          case f:
            return we(I.type, se, me);
          case p: {
            var Ne = I, Fe = Ne._payload, et = Ne._init;
            try {
              return we(et(Fe), se, me);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, pe = {}, Se = w.ReactDebugCurrentFrame;
    function Ie(I) {
      if (I) {
        var se = I._owner, me = we(I.type, I._source, se ? se.type : null);
        Se.setExtraStackFrame(me);
      } else
        Se.setExtraStackFrame(null);
    }
    function U(I, se, me, Ne, Fe) {
      {
        var et = Function.call.bind(xe);
        for (var Re in I)
          if (et(I, Re)) {
            var Le = void 0;
            try {
              if (typeof I[Re] != "function") {
                var Ht = Error((Ne || "React class") + ": " + me + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ht.name = "Invariant Violation", Ht;
              }
              Le = I[Re](se, Re, Ne, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ft) {
              Le = ft;
            }
            Le && !(Le instanceof Error) && (Ie(Fe), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", me, Re, typeof Le), Ie(null)), Le instanceof Error && !(Le.message in pe) && (pe[Le.message] = !0, Ie(Fe), x("Failed %s type: %s", me, Le.message), Ie(null));
          }
      }
    }
    var nt = Array.isArray;
    function De(I) {
      return nt(I);
    }
    function qe(I) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, me = se && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return me;
      }
    }
    function Ye(I) {
      try {
        return at(I), !1;
      } catch {
        return !0;
      }
    }
    function at(I) {
      return "" + I;
    }
    function Ct(I) {
      if (Ye(I))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(I)), at(I);
    }
    var Jt = w.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ze;
    function ct(I) {
      if (xe.call(I, "ref")) {
        var se = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Xe(I) {
      if (xe.call(I, "key")) {
        var se = Object.getOwnPropertyDescriptor(I, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function dt(I, se) {
      typeof I.ref == "string" && Jt.current;
    }
    function Qt(I, se) {
      {
        var me = function() {
          he || (he = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        me.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function xt(I, se) {
      {
        var me = function() {
          ze || (ze = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        me.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var On = function(I, se, me, Ne, Fe, et, Re) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: I,
        key: se,
        ref: me,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: et
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
        value: Ne
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function $t(I, se, me, Ne, Fe) {
      {
        var et, Re = {}, Le = null, Ht = null;
        me !== void 0 && (Ct(me), Le = "" + me), Xe(se) && (Ct(se.key), Le = "" + se.key), ct(se) && (Ht = se.ref, dt(se, Fe));
        for (et in se)
          xe.call(se, et) && !gt.hasOwnProperty(et) && (Re[et] = se[et]);
        if (I && I.defaultProps) {
          var ft = I.defaultProps;
          for (et in ft)
            Re[et] === void 0 && (Re[et] = ft[et]);
        }
        if (Le || Ht) {
          var mt = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          Le && Qt(Re, mt), Ht && xt(Re, mt);
        }
        return On(I, Le, Ht, Fe, Ne, Jt.current, Re);
      }
    }
    var vt = w.ReactCurrentOwner, Lt = w.ReactDebugCurrentFrame;
    function Bn(I) {
      if (I) {
        var se = I._owner, me = we(I.type, I._source, se ? se.type : null);
        Lt.setExtraStackFrame(me);
      } else
        Lt.setExtraStackFrame(null);
    }
    var To;
    To = !1;
    function vn(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function Fl() {
      {
        if (vt.current) {
          var I = z(vt.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function eg(I) {
      return "";
    }
    var Gl = {};
    function tg(I) {
      {
        var se = Fl();
        if (!se) {
          var me = typeof I == "string" ? I : I.displayName || I.name;
          me && (se = `

Check the top-level render call using <` + me + ">.");
        }
        return se;
      }
    }
    function Ul(I, se) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var me = tg(se);
        if (Gl[me])
          return;
        Gl[me] = !0;
        var Ne = "";
        I && I._owner && I._owner !== vt.current && (Ne = " It was passed a child from " + z(I._owner.type) + "."), Bn(I), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Ne), Bn(null);
      }
    }
    function Jl(I, se) {
      {
        if (typeof I != "object")
          return;
        if (De(I))
          for (var me = 0; me < I.length; me++) {
            var Ne = I[me];
            vn(Ne) && Ul(Ne, se);
          }
        else if (vn(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Fe = v(I);
          if (typeof Fe == "function" && Fe !== I.entries)
            for (var et = Fe.call(I), Re; !(Re = et.next()).done; )
              vn(Re.value) && Ul(Re.value, se);
        }
      }
    }
    function ng(I) {
      {
        var se = I.type;
        if (se == null || typeof se == "string")
          return;
        var me;
        if (typeof se == "function")
          me = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === f))
          me = se.propTypes;
        else
          return;
        if (me) {
          var Ne = z(se);
          U(me, I.props, "prop", Ne, I);
        } else if (se.PropTypes !== void 0 && !To) {
          To = !0;
          var Fe = z(se);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Fe || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rg(I) {
      {
        for (var se = Object.keys(I.props), me = 0; me < se.length; me++) {
          var Ne = se[me];
          if (Ne !== "children" && Ne !== "key") {
            Bn(I), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Bn(null);
            break;
          }
        }
        I.ref !== null && (Bn(I), x("Invalid attribute `ref` supplied to `React.Fragment`."), Bn(null));
      }
    }
    var Ql = {};
    function eu(I, se, me, Ne, Fe, et) {
      {
        var Re = R(I);
        if (!Re) {
          var Le = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ht = eg();
          Ht ? Le += Ht : Le += Fl();
          var ft;
          I === null ? ft = "null" : De(I) ? ft = "array" : I !== void 0 && I.$$typeof === t ? (ft = "<" + (z(I.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : ft = typeof I, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ft, Le);
        }
        var mt = $t(I, se, me, Fe, et);
        if (mt == null)
          return mt;
        if (Re) {
          var ln = se.children;
          if (ln !== void 0)
            if (Ne)
              if (De(ln)) {
                for (var oo = 0; oo < ln.length; oo++)
                  Jl(ln[oo], I);
                Object.freeze && Object.freeze(ln);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jl(ln, I);
        }
        if (xe.call(se, "key")) {
          var Mr = z(I), Bt = Object.keys(se).filter(function(ug) {
            return ug !== "key";
          }), Js = Bt.length > 0 ? "{key: someKey, " + Bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ql[Mr + Js]) {
            var lg = Bt.length > 0 ? "{" + Bt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Js, Mr, lg, Mr), Ql[Mr + Js] = !0;
          }
        }
        return I === r ? rg(mt) : ng(mt), mt;
      }
    }
    function og(I, se, me) {
      return eu(I, se, me, !0);
    }
    function ig(I, se, me) {
      return eu(I, se, me, !1);
    }
    var sg = ig, ag = og;
    Mo.Fragment = r, Mo.jsx = sg, Mo.jsxs = ag;
  }()), Mo;
}
var ou;
function gg() {
  return ou || (ou = 1, process.env.NODE_ENV === "production" ? Pi.exports = pg() : Pi.exports = hg()), Pi.exports;
}
var vg = gg();
const mg = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(mg);
const Dc = 1, Lc = 2, Hc = 4, yg = 8, bg = 16, wg = 1, xg = 2, Ic = 4, kg = 8, Cg = 16, jc = 1, $g = 2, Rc = "[", Es = "[!", tl = "]", Br = {}, Pt = Symbol(), _g = "http://www.w3.org/1999/xhtml", Sg = "http://www.w3.org/2000/svg", Zc = "@attach", Eg = !1;
var Ps = Array.isArray, Pg = Array.prototype.indexOf, nl = Array.from, Qi = Object.keys, es = Object.defineProperty, Qn = Object.getOwnPropertyDescriptor, Kc = Object.getOwnPropertyDescriptors, Bc = Object.prototype, Og = Array.prototype, Os = Object.getPrototypeOf, iu = Object.isExtensible;
function Ao(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Ng(e) {
  return e();
}
function ya(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Wc() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function It(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function _o(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Nt = 2, rl = 4, Ns = 8, Yc = 1 << 24, ir = 16, sr = 32, Er = 64, Ts = 128, kn = 512, At = 1024, Gt = 2048, ar = 4096, rn = 8192, er = 16384, zs = 32768, nr = 65536, su = 1 << 17, ol = 1 << 18, Qr = 1 << 19, Xc = 1 << 20, Xo = 32768, ba = 1 << 21, il = 1 << 22, br = 1 << 23, Vn = Symbol("$state"), sl = Symbol("legacy props"), Tg = Symbol(""), ao = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), zg = 1, Ms = 3, lr = 8;
function al(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Mg() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ag(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dg(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Lg() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Hg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ig(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rg() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Kg() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ui(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Bg() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Wg() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function Rt(e) {
  $e = e;
}
let Ae;
function ut(e) {
  if (e === null)
    throw ui(), Br;
  return Ae = e;
}
function Hn() {
  return ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ sn(Ae)
  );
}
function Z(e) {
  if ($e) {
    if (/* @__PURE__ */ sn(Ae) !== null)
      throw ui(), Br;
    Ae = e;
  }
}
function Ce(e = 1) {
  if ($e) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ sn(n);
    Ae = n;
  }
}
function ts(e = !0) {
  for (var t = 0, n = Ae; ; ) {
    if (n.nodeType === lr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === tl) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Rc || r === Es) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ sn(n)
    );
    e && n.remove(), n = o;
  }
}
function qc(e) {
  if (!e || e.nodeType !== lr)
    throw ui(), Br;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Fc(e) {
  return e === this.v;
}
function Gc(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Uc(e) {
  return !Gc(e, this.v);
}
let So = !1, Yg = !1;
function Xg() {
  So = !0;
}
const qg = [];
function ll(e, t = !1, n = !1) {
  return Ki(e, /* @__PURE__ */ new Map(), "", qg, null, n);
}
function Ki(e, t, n, r, o = null, i = !1) {
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
    if (Ps(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Ki(u, t, n, r, null, i));
      }
      return a;
    }
    if (Os(e) === Bc) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Ki(
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
      return Ki(
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
let ot = null;
function go(e) {
  ot = e;
}
function Cn(e) {
  return (
    /** @type {T} */
    ul().get(e)
  );
}
function Wr(e, t) {
  return ul().set(e, t), t;
}
function Fg(e) {
  return ul().has(e);
}
function de(e, t = !1, n) {
  ot = {
    p: ot,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: So && !t ? { s: null, u: null, $: [] } : null
  };
}
function fe(e) {
  var t = (
    /** @type {ComponentContext} */
    ot
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      vd(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ot = t.p, e ?? /** @type {T} */
  {};
}
function ci() {
  return !So || ot !== null && ot.l === null;
}
function ul(e) {
  return ot === null && al(), ot.c ??= new Map(Gg(ot) || void 0);
}
function Gg(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Dr = [];
function Jc() {
  var e = Dr;
  Dr = [], ya(e);
}
function Pr(e) {
  if (Dr.length === 0 && !Ko) {
    var t = Dr;
    queueMicrotask(() => {
      t === Dr && Jc();
    });
  }
  Dr.push(e);
}
function Ug() {
  for (; Dr.length > 0; )
    Jc();
}
function Qc(e) {
  var t = He;
  if (t === null)
    return Be.f |= br, e;
  if ((t.f & zs) === 0) {
    if ((t.f & Ts) === 0)
      throw e;
    t.b.error(e);
  } else
    vo(e, t);
}
function vo(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ts) !== 0)
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
const Oi = /* @__PURE__ */ new Set();
let Ge = null, Bi = null, dn = null, cn = [], As = null, wa = !1, Ko = !1;
class wn {
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
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
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
  #i = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #s = [];
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
    cn = [], Bi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#a(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Bi = this, Ge = null, au(n.render_effects), au(n.effects), Bi = null, this.#i?.resolve()), dn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #a(t, n) {
    t.f ^= At;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (sr | Er)) !== 0, s = i && (o & At) !== 0, a = s || (o & rn) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ts) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= At : (o & rl) !== 0 ? n.effects.push(r) : fi(r) && ((r.f & ir) !== 0 && n.block_effects.push(r), Go(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(t) {
    for (const n of t)
      ((n.f & Gt) !== 0 ? this.#o : this.#s).push(n), this.#u(n.deps), Dt(n, At);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Nt) === 0 || (n.f & Xo) === 0 || (n.f ^= Xo, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & br) === 0 && (this.current.set(t, t.v), dn?.set(t, t.v));
  }
  activate() {
    Ge = this, this.apply();
  }
  deactivate() {
    Ge === this && (Ge = null, dn = null);
  }
  flush() {
    if (this.activate(), cn.length > 0) {
      if (ed(), Ge !== null && Ge !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Oi.size > 1) {
      this.previous.clear();
      var t = dn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Oi) {
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
          var o = cn;
          cn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            td(d, a, l, u);
          if (cn.length > 0) {
            Ge = i, i.apply();
            for (const d of cn)
              i.#a(d, r);
            i.deactivate();
          }
          cn = o;
        }
      }
      Ge = null, dn = t;
    }
    this.committed = !0, Oi.delete(this);
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
    for (const t of this.#o)
      Dt(t, Gt), Yr(t);
    for (const t of this.#s)
      Dt(t, ar), Yr(t);
    this.#o = [], this.#s = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= Wc()).promise;
  }
  static ensure() {
    if (Ge === null) {
      const t = Ge = new wn();
      Oi.add(Ge), Ko || wn.enqueue(() => {
        Ge === t && t.flush();
      });
    }
    return Ge;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Pr(t);
  }
  apply() {
  }
}
function m(e) {
  var t = Ko;
  Ko = !0;
  try {
    for (var n; ; ) {
      if (Ug(), cn.length === 0 && (Ge?.flush(), cn.length === 0))
        return As = null, /** @type {T} */
        n;
      ed();
    }
  } finally {
    Ko = t;
  }
}
function ed() {
  var e = xr;
  wa = !0;
  try {
    var t = 0;
    for (rs(!0); cn.length > 0; ) {
      var n = wn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Jg();
      }
      n.process(cn), wr.clear();
    }
  } finally {
    wa = !1, rs(e), As = null;
  }
}
function Jg() {
  try {
    Lg();
  } catch (e) {
    vo(e, As);
  }
}
let Xn = null;
function au(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (er | rn)) === 0 && fi(r) && (Xn = /* @__PURE__ */ new Set(), Go(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? xd(r) : r.fn = null), Xn?.size > 0)) {
        wr.clear();
        for (const o of Xn) {
          if ((o.f & (er | rn)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Xn.has(s) && (Xn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (er | rn)) === 0 && Go(l);
          }
        }
        Xn.clear();
      }
    }
    Xn = null;
  }
}
function td(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Nt) !== 0 ? td(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (il | ir)) !== 0 && (i & Gt) === 0 && nd(o, t, r) && (Dt(o, Gt), Yr(
        /** @type {Effect} */
        o
      ));
    }
}
function nd(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Nt) !== 0 && nd(
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
function Yr(e) {
  for (var t = As = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (wa && t === He && (n & ir) !== 0 && (n & ol) === 0)
      return;
    if ((n & (Er | sr)) !== 0) {
      if ((n & At) === 0) return;
      t.f ^= At;
    }
  }
  cn.push(t);
}
function Eo(e) {
  let t = 0, n = Cr(0), r;
  return () => {
    qo() && (c(n), eo(() => (t === 0 && (r = lt(() => e(() => Bo(n)))), t += 1, () => {
      Pr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Bo(n));
      });
    })));
  };
}
var Qg = nr | Qr | Ts;
function ev(e, t, n) {
  new tv(e, t, n);
}
class tv {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = $e ? Ae : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #l = null;
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
  #b = Eo(() => (this.#p = Cr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#i = r, this.parent = /** @type {Effect} */
    He.b, this.#t = !!this.#r.pending, this.#o = to(() => {
      if (He.b = this, $e) {
        const i = this.#n;
        Hn(), /** @type {Comment} */
        i.nodeType === lr && /** @type {Comment} */
        i.data === Es ? this.#x() : this.#w();
      } else {
        var o = this.#m();
        try {
          this.#s = nn(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#t = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Qg), $e && (this.#e = Ae);
  }
  #w() {
    try {
      this.#s = nn(() => this.#i(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#a = nn(() => t(this.#e)), wn.enqueue(() => {
      var n = this.#m();
      this.#s = this.#g(() => (wn.ensure(), nn(() => this.#i(n)))), this.#f > 0 ? this.#v() : (uo(
        /** @type {Effect} */
        this.#a,
        () => {
          this.#a = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var t = this.#e;
    return this.#t && (this.#c = Kt(), this.#e.before(this.#c), t = this.#c), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(t) {
    var n = He, r = Be, o = ot;
    pn(this.#o), Xt(this.#o), go(this.#o.ctx);
    try {
      return t();
    } catch (i) {
      return Qc(i), null;
    } finally {
      pn(n), Xt(r), go(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#s !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), $d(this.#s, this.#u)), this.#a === null && (this.#a = nn(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#a && uo(this.#a, () => {
      this.#a = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#p && mo(this.#p, this.#d);
  }
  get_effect_pending() {
    return this.#b(), c(
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
    this.#s && (_t(this.#s), this.#s = null), this.#a && (_t(this.#a), this.#a = null), this.#l && (_t(this.#l), this.#l = null), $e && (ut(
      /** @type {TemplateNode} */
      this.#n
    ), Ce(), ut(ts()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Wg();
        return;
      }
      o = !0, i && Kg(), wn.ensure(), this.#d = 0, this.#l !== null && uo(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#g(() => (this.#h = !1, nn(() => this.#i(this.#e)))), this.#f > 0 ? this.#v() : this.#t = !1;
    };
    var a = Be;
    try {
      Xt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      vo(l, this.#o && this.#o.parent);
    } finally {
      Xt(a);
    }
    r && Pr(() => {
      this.#l = this.#g(() => {
        wn.ensure(), this.#h = !0;
        try {
          return nn(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return vo(
            l,
            /** @type {Effect} */
            this.#o.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function Xr(e, t) {
  return t;
}
function nv(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    pl(t[i].e, r, !0);
  kd(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      fl(l), l.append(a), e.items.clear(), mn(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), mn(e, d.prev, d.next)), _t(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function Tt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & Hc) !== 0, d = (t & Dc) !== 0, f = (t & Lc) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      e
    );
    s = $e ? ut(
      /** @type {Comment | Text} */
      /* @__PURE__ */ bt(p)
    ) : p.appendChild(Kt());
  }
  $e && Hn();
  var h = null, g = /* @__PURE__ */ cl(() => {
    var k = n();
    return Ps(k) ? k : k == null ? [] : nl(k);
  }), b, v = !0;
  function w() {
    rv(_, b, s, t, r), h !== null && (b.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : hl(h.effect), x.first = h.effect) : uo(h.effect, () => {
      h = null;
    }));
  }
  var x = to(() => {
    b = /** @type {V[]} */
    c(g);
    var k = b.length;
    let $ = !1;
    if ($e) {
      var T = qc(s) === Es;
      T !== (k === 0) && (s = ts(), ut(s), Rt(!1), $ = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), D = (
      /** @type {Batch} */
      Ge
    ), H = null, R = fd(), A = 0; A < k; A += 1) {
      $e && Ae.nodeType === lr && /** @type {Comment} */
      Ae.data === tl && (s = /** @type {Comment} */
      Ae, $ = !0, Rt(!1));
      var P = b[A], z = r(P, A), C = v ? null : a.get(z);
      C ? (d && mo(C.v, P), f ? mo(
        /** @type {Value<number>} */
        C.i,
        A
      ) : C.i = A, R && D.skipped_effects.delete(C.e)) : (C = ov(
        v ? s : null,
        H,
        P,
        z,
        A,
        o,
        t,
        n
      ), v && (C.o = !0, H === null ? l = C : H.next = C, H = C), a.set(z, C)), V.add(z);
    }
    if (k === 0 && i && !h)
      if (v)
        h = {
          fragment: null,
          effect: nn(() => i(s))
        };
      else {
        var S = document.createDocumentFragment(), E = Kt();
        S.append(E), h = {
          fragment: S,
          effect: nn(() => i(E))
        };
      }
    if ($e && k > 0 && ut(ts()), !v)
      if (R) {
        for (const [j, Y] of a)
          V.has(j) || D.skipped_effects.add(Y.e);
        D.oncommit(w), D.ondiscard(() => {
        });
      } else
        w();
    $ && Rt(!0), c(g);
  }), _ = { effect: x, items: a, first: l };
  v = !1, $e && (s = Ae);
}
function rv(e, t, n, r, o) {
  var i = (r & yg) !== 0, s = t.length, a = e.items, l = e.first, u, d = null, f, p = [], h = [], g, b, v, w;
  if (i)
    for (w = 0; w < s; w += 1)
      g = t[w], b = o(g, w), v = /** @type {EachItem} */
      a.get(b), v.o && (v.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(v));
  for (w = 0; w < s; w += 1) {
    if (g = t[w], b = o(g, w), v = /** @type {EachItem} */
    a.get(b), e.first ??= v, !v.o) {
      v.o = !0;
      var x = d ? d.next : l;
      mn(e, d, v), mn(e, v, x), Qs(v, x, n), d = v, p = [], h = [], l = d.next;
      continue;
    }
    if ((v.e.f & rn) !== 0 && (hl(v.e), i && (v.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(v))), v !== l) {
      if (u !== void 0 && u.has(v)) {
        if (p.length < h.length) {
          var _ = h[0], k;
          d = _.prev;
          var $ = p[0], T = p[p.length - 1];
          for (k = 0; k < p.length; k += 1)
            Qs(p[k], _, n);
          for (k = 0; k < h.length; k += 1)
            u.delete(h[k]);
          mn(e, $.prev, T.next), mn(e, d, $), mn(e, T, _), l = _, d = T, w -= 1, p = [], h = [];
        } else
          u.delete(v), Qs(v, l, n), mn(e, v.prev, v.next), mn(e, v, d === null ? e.first : d.next), mn(e, d, v), d = v;
        continue;
      }
      for (p = [], h = []; l !== null && l.k !== b; )
        (l.e.f & rn) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      v = l;
    }
    p.push(v), d = v, l = v.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var D = u === void 0 ? [] : nl(u); l !== null; )
      (l.e.f & rn) === 0 && D.push(l), l = l.next;
    var H = D.length;
    if (V = a.size - H > s, H > 0) {
      var R = (r & Hc) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < H; w += 1)
          D[w].a?.measure();
        for (w = 0; w < H; w += 1)
          D[w].a?.fix();
      }
      nv(e, D, R);
    }
  }
  if (V)
    for (const A of a.values())
      A.o || (mn(e, d, A), d = A);
  e.effect.last = d && d.e, i && Pr(() => {
    if (f !== void 0)
      for (v of f)
        v.a?.apply();
  });
}
function ov(e, t, n, r, o, i, s, a) {
  var l = (s & Dc) !== 0, u = (s & bg) === 0, d = l ? u ? /* @__PURE__ */ ad(n, !1, !1) : Cr(n) : n, f = (s & Lc) === 0 ? o : Cr(o), p = {
    i: f,
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
      h.append(e = Kt());
    }
    return p.e = nn(() => i(
      /** @type {Node} */
      e,
      d,
      f,
      a
    )), t !== null && (t.next = p), p;
  } finally {
  }
}
function Qs(e, t, n) {
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
      /* @__PURE__ */ sn(i)
    );
    o.before(i), i = s;
  }
}
function mn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function rd(e, t, n, r) {
  const o = ci() ? di : cl;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Ge, s = (
    /** @type {Effect} */
    He
  ), a = iv();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ sv(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & er) === 0 && vo(d, s);
      }
      i?.deactivate(), ns();
    }).catch((u) => {
      vo(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ns();
    }
  }) : l();
}
function iv() {
  var e = He, t = Be, n = ot, r = Ge;
  return function(o = !0) {
    pn(e), Xt(t), go(n), o && r?.activate();
  };
}
function ns() {
  pn(null), Xt(null), go(null);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  var t = Nt | Gt, n = Be !== null && (Be.f & Nt) !== 0 ? (
    /** @type {Derived} */
    Be
  ) : null;
  return He !== null && (He.f |= Qr), {
    ctx: ot,
    deps: null,
    effects: null,
    equals: Fc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Pt
    ),
    wv: 0,
    parent: n ?? He,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function sv(e, t) {
  let n = (
    /** @type {Effect | null} */
    He
  );
  n === null && Mg();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Cr(
    /** @type {V} */
    Pt
  ), s = !Be, a = /* @__PURE__ */ new Map();
  return hv(() => {
    var l = Wc();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === Ge && u.committed && u.deactivate(), ns();
      });
    } catch (p) {
      l.reject(p), ns();
    }
    var u = (
      /** @type {Batch} */
      Ge
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(ao), a.delete(u), a.set(u, l);
    }
    const f = (p, h = void 0) => {
      if (u.activate(), h)
        h !== ao && (i.f |= br, mo(i, h));
      else {
        (i.f & br) !== 0 && (i.f ^= br), mo(i, p);
        for (const [g, b] of a) {
          if (a.delete(g), g === u) break;
          b.reject(ao);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(f, (p) => f(null, p || "unknown"));
  }), Ds(() => {
    for (const l of a.values())
      l.reject(ao);
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
function O(e) {
  const t = /* @__PURE__ */ di(e);
  return _d(t), t;
}
// @__NO_SIDE_EFFECTS__
function cl(e) {
  const t = /* @__PURE__ */ di(e);
  return t.equals = Uc, t;
}
function od(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _t(
        /** @type {Effect} */
        t[n]
      );
  }
}
function av(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Nt) === 0)
      return (t.f & er) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function dl(e) {
  var t, n = He;
  pn(av(e));
  try {
    e.f &= ~Xo, od(e), t = Od(e);
  } finally {
    pn(n);
  }
  return t;
}
function id(e) {
  var t = dl(e);
  if (e.equals(t) || (Ge?.is_fork || (e.v = t), e.wv = Ed()), !no)
    if (dn !== null)
      (qo() || Ge?.is_fork) && dn.set(e, t);
    else {
      var n = (e.f & kn) === 0 ? ar : At;
      Dt(e, n);
    }
}
let xa = /* @__PURE__ */ new Set();
const wr = /* @__PURE__ */ new Map();
let sd = !1;
function Cr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fc,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  const n = Cr(e);
  return _d(n), n;
}
// @__NO_SIDE_EFFECTS__
function ad(e, t = !1, n = !0) {
  const r = Cr(e);
  return t || (r.equals = Uc), So && n && ot !== null && ot.l !== null && (ot.l.s ??= []).push(r), r;
}
function J(e, t, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!An || (Be.f & su) !== 0) && ci() && (Be.f & (Nt | ir | il | su)) !== 0 && !tr?.includes(e) && Zg();
  let r = n ? Vt(t) : t;
  return mo(e, r);
}
function mo(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    no ? wr.set(e, t) : wr.set(e, n), e.v = t;
    var r = wn.ensure();
    r.capture(e, n), (e.f & Nt) !== 0 && ((e.f & Gt) !== 0 && dl(
      /** @type {Derived} */
      e
    ), Dt(e, (e.f & kn) !== 0 ? At : ar)), e.wv = Ed(), ld(e, Gt), ci() && He !== null && (He.f & At) !== 0 && (He.f & (sr | Er)) === 0 && (un === null ? vv([e]) : un.push(e)), !r.is_fork && xa.size > 0 && !sd && lv();
  }
  return t;
}
function lv() {
  sd = !1;
  var e = xr;
  rs(!0);
  const t = Array.from(xa);
  try {
    for (const n of t)
      (n.f & At) !== 0 && Dt(n, ar), fi(n) && Go(n);
  } finally {
    rs(e);
  }
  xa.clear();
}
function lu(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function Bo(e) {
  J(e, e.v + 1);
}
function ld(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ci(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === He)) {
        var l = (a & Gt) === 0;
        if (l && Dt(s, t), (a & Nt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          dn?.delete(u), (a & Xo) === 0 && (a & kn && (s.f |= Xo), ld(u, ar));
        } else l && ((a & ir) !== 0 && Xn !== null && Xn.add(
          /** @type {Effect} */
          s
        ), Yr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Vt(e) {
  if (typeof e != "object" || e === null || Vn in e)
    return e;
  const t = Os(e);
  if (t !== Bc && t !== Og)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ps(e), o = /* @__PURE__ */ Me(0), i = Rr, s = (a) => {
    if (Rr === i)
      return a();
    var l = Be, u = Rr;
    Xt(null), fu(i);
    var d = a();
    return Xt(l), fu(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Me(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && jg();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Me(u.value);
          return n.set(l, f), f;
        }) : J(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Me(Pt));
            n.set(l, d), Bo(o);
          }
        } else
          J(u, Pt), Bo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Vn)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Qn(a, l)?.writable) && (d = s(() => {
          var h = Vt(f ? a[l] : Pt), g = /* @__PURE__ */ Me(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === Pt ? void 0 : p;
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
          if (f !== void 0 && p !== Pt)
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
        if (l === Vn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Pt || Reflect.has(a, l);
        if (u !== void 0 || He !== null && (!d || Qn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Vt(a[l]) : Pt, h = /* @__PURE__ */ Me(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === Pt)
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
            g !== void 0 ? J(g, Pt) : h in a && (g = s(() => /* @__PURE__ */ Me(Pt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || Qn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Me(void 0)), J(f, Vt(u)), n.set(l, f));
        else {
          p = f.v !== Pt;
          var b = s(() => Vt(u));
          J(f, b);
        }
        var v = Reflect.getOwnPropertyDescriptor(a, l);
        if (v?.set && v.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= w.v && J(w, x + 1);
          }
          Bo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== Pt;
        });
        for (var [u, d] of n)
          d.v !== Pt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Rg();
      }
    }
  );
}
function uu(e) {
  try {
    if (e !== null && typeof e == "object" && Vn in e)
      return e[Vn];
  } catch {
  }
  return e;
}
function uv(e, t) {
  return Object.is(uu(e), uu(t));
}
var Yt, ud, cd, dd;
function ka() {
  if (Yt === void 0) {
    Yt = window, ud = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    cd = Qn(t, "firstChild").get, dd = Qn(t, "nextSibling").get, iu(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), iu(n) && (n.__t = void 0);
  }
}
function Kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return cd.call(e);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
  return dd.call(e);
}
function B(e, t) {
  if (!$e)
    return /* @__PURE__ */ bt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(Kt());
  else if (t && n.nodeType !== Ms) {
    var r = Kt();
    return n?.before(r), ut(r), r;
  }
  return ut(n), n;
}
function oe(e, t = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ sn(n) : n;
  }
  if (t && Ae?.nodeType !== Ms) {
    var r = Kt();
    return Ae?.before(r), ut(r), r;
  }
  return Ae;
}
function L(e, t = 1, n = !1) {
  let r = $e ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ sn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Ms) {
    var i = Kt();
    return r === null ? o?.after(i) : r.before(i), ut(i), i;
  }
  return ut(r), /** @type {TemplateNode} */
  r;
}
function fl(e) {
  e.textContent = "";
}
function fd() {
  return !1;
}
function cv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Pr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function dv(e) {
  $e && /* @__PURE__ */ bt(e) !== null && fl(e);
}
let cu = !1;
function pd() {
  cu || (cu = !0, document.addEventListener(
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
function Vs(e) {
  var t = Be, n = He;
  Xt(null), pn(null);
  try {
    return e();
  } finally {
    Xt(t), pn(n);
  }
}
function hd(e, t, n, r = n) {
  e.addEventListener(t, () => Vs(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), pd();
}
function gd(e) {
  He === null && (Be === null && Dg(), Vg()), no && Ag();
}
function fv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hn(e, t, n) {
  var r = He;
  r !== null && (r.f & rn) !== 0 && (e |= rn);
  var o = {
    ctx: ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Gt | kn,
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
      Go(o), o.f |= zs;
    } catch (a) {
      throw _t(o), a;
    }
  else t !== null && Yr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Qr) === 0 && (i = i.first, (e & ir) !== 0 && (e & nr) !== 0 && i !== null && (i.f |= nr)), i !== null && (i.parent = r, r !== null && fv(i, r), Be !== null && (Be.f & Nt) !== 0 && (e & Er) === 0)) {
    var s = (
      /** @type {Derived} */
      Be
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function qo() {
  return Be !== null && !An;
}
function Ds(e) {
  const t = hn(Ns, null, !1);
  return Dt(t, At), t.teardown = e, t;
}
function st(e) {
  gd();
  var t = (
    /** @type {Effect} */
    He.f
  ), n = !Be && (t & sr) !== 0 && (t & zs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ot
    );
    (r.e ??= []).push(e);
  } else
    return vd(e);
}
function vd(e) {
  return hn(rl | Xc, e, !1);
}
function tn(e) {
  return gd(), hn(Ns | Xc, e, !0);
}
function Po(e) {
  wn.ensure();
  const t = hn(Er | Qr, e, !0);
  return () => {
    _t(t);
  };
}
function pv(e) {
  wn.ensure();
  const t = hn(Er | Qr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? uo(t, () => {
      _t(t), r(void 0);
    }) : (_t(t), r(void 0));
  });
}
function Oo(e) {
  return hn(rl, e, !1);
}
function hv(e) {
  return hn(il | Qr, e, !0);
}
function eo(e, t = 0) {
  return hn(Ns | t, e, !0);
}
function Oe(e, t = [], n = [], r = []) {
  rd(r, t, n, (o) => {
    hn(Ns, () => e(...o.map(c)), !0);
  });
}
function to(e, t = 0) {
  var n = hn(ir | t, e, !0);
  return n;
}
function md(e, t = 0) {
  var n = hn(Yc | t, e, !0);
  return n;
}
function nn(e) {
  return hn(sr | Qr, e, !0);
}
function yd(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = no, r = Be;
    du(!0), Xt(null);
    try {
      t.call(null);
    } finally {
      du(n), Xt(r);
    }
  }
}
function bd(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Vs(() => {
      o.abort(ao);
    });
    var r = n.next;
    (n.f & Er) !== 0 ? n.parent = null : _t(n, t), n = r;
  }
}
function gv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & sr) === 0 && _t(t), t = n;
  }
}
function _t(e, t = !0) {
  var n = !1;
  (t || (e.f & ol) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (wd(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), bd(e, t && !n), os(e, 0), Dt(e, er);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  yd(e);
  var o = e.parent;
  o !== null && o.first !== null && xd(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function wd(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ sn(e)
    );
    e.remove(), e = n;
  }
}
function xd(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function uo(e, t, n = !0) {
  var r = [];
  pl(e, r, !0), kd(r, () => {
    n && _t(e), t && t();
  });
}
function kd(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function pl(e, t, n) {
  if ((e.f & rn) === 0) {
    if (e.f ^= rn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & nr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & sr) !== 0 && (e.f & ir) !== 0;
      pl(r, t, i ? n : !1), r = o;
    }
  }
}
function hl(e) {
  Cd(e, !0);
}
function Cd(e, t) {
  if ((e.f & rn) !== 0) {
    e.f ^= rn, (e.f & At) === 0 && (Dt(e, Gt), Yr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & nr) !== 0 || (n.f & sr) !== 0;
      Cd(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function $d(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ sn(n)
    );
    t.append(n), n = o;
  }
}
let xr = !1;
function rs(e) {
  xr = e;
}
let no = !1;
function du(e) {
  no = e;
}
let Be = null, An = !1;
function Xt(e) {
  Be = e;
}
let He = null;
function pn(e) {
  He = e;
}
let tr = null;
function _d(e) {
  Be !== null && (tr === null ? tr = [e] : tr.push(e));
}
let jt = null, en = 0, un = null;
function vv(e) {
  un = e;
}
let Sd = 1, Fo = 0, Rr = Fo;
function fu(e) {
  Rr = e;
}
function Ed() {
  return ++Sd;
}
function fi(e) {
  var t = e.f;
  if ((t & Gt) !== 0)
    return !0;
  if (t & Nt && (e.f &= -32769), (t & ar) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (fi(
          /** @type {Derived} */
          i
        ) && id(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & kn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    dn === null && Dt(e, At);
  }
  return !1;
}
function Pd(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !tr?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Nt) !== 0 ? Pd(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Dt(i, Gt) : (i.f & At) !== 0 && Dt(i, ar), Yr(
        /** @type {Effect} */
        i
      ));
    }
}
function Od(e) {
  var t = jt, n = en, r = un, o = Be, i = tr, s = ot, a = An, l = Rr, u = e.f;
  jt = /** @type {null | Value[]} */
  null, en = 0, un = null, Be = (u & (sr | Er)) === 0 ? e : null, tr = null, go(e.ctx), An = !1, Rr = ++Fo, e.ac !== null && (Vs(() => {
    e.ac.abort(ao);
  }), e.ac = null);
  try {
    e.f |= ba;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d(), p = e.deps;
    if (jt !== null) {
      var h;
      if (os(e, en), p !== null && en > 0)
        for (p.length = en + jt.length, h = 0; h < jt.length; h++)
          p[en + h] = jt[h];
      else
        e.deps = p = jt;
      if (xr && qo() && (e.f & kn) !== 0)
        for (h = en; h < p.length; h++)
          (p[h].reactions ??= []).push(e);
    } else p !== null && en < p.length && (os(e, en), p.length = en);
    if (ci() && un !== null && !An && p !== null && (e.f & (Nt | ar | Gt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      un.length; h++)
        Pd(
          un[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Fo++, un !== null && (r === null ? r = un : r.push(.../** @type {Source[]} */
    un))), (e.f & br) !== 0 && (e.f ^= br), f;
  } catch (g) {
    return Qc(g);
  } finally {
    e.f ^= ba, jt = t, en = n, un = r, Be = o, tr = i, go(s), An = a, Rr = l;
  }
}
function mv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Pg.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Nt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (jt === null || !jt.includes(t)) && (Dt(t, ar), (t.f & kn) !== 0 && (t.f ^= kn, t.f &= -32769), od(
    /** @type {Derived} **/
    t
  ), os(
    /** @type {Derived} **/
    t,
    0
  ));
}
function os(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      mv(e, n[r]);
}
function Go(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Dt(e, At);
    var n = He, r = xr;
    He = e, xr = !0;
    try {
      (t & (ir | Yc)) !== 0 ? gv(e) : bd(e), yd(e);
      var o = Od(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Sd;
      var i;
      Eg && Yg && (e.f & Gt) !== 0 && e.deps;
    } finally {
      xr = r, He = n;
    }
  }
}
async function yv() {
  await Promise.resolve(), m();
}
function c(e) {
  var t = e.f, n = (t & Nt) !== 0;
  if (Be !== null && !An) {
    var r = He !== null && (He.f & er) !== 0;
    if (!r && !tr?.includes(e)) {
      var o = Be.deps;
      if ((Be.f & ba) !== 0)
        e.rv < Fo && (e.rv = Fo, jt === null && o !== null && o[en] === e ? en++ : jt === null ? jt = [e] : jt.includes(e) || jt.push(e));
      else {
        (Be.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Be] : i.includes(Be) || i.push(Be);
      }
    }
  }
  if (no) {
    if (wr.has(e))
      return wr.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & At) === 0 && s.reactions !== null || Td(s)) && (a = dl(s)), wr.set(s, a), a;
    }
  } else n && (!dn?.has(e) || Ge?.is_fork && !qo()) && (s = /** @type {Derived} */
  e, fi(s) && id(s), xr && qo() && (s.f & kn) === 0 && Nd(s));
  if (dn?.has(e))
    return dn.get(e);
  if ((e.f & br) !== 0)
    throw e.v;
  return e.v;
}
function Nd(e) {
  if (e.deps !== null) {
    e.f ^= kn;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Nt) !== 0 && (t.f & kn) === 0 && Nd(
        /** @type {Derived} */
        t
      );
  }
}
function Td(e) {
  if (e.v === Pt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (wr.has(t) || (t.f & Nt) !== 0 && Td(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = An;
  try {
    return An = !0, e();
  } finally {
    An = t;
  }
}
const bv = -7169;
function Dt(e, t) {
  e.f = e.f & bv | t;
}
function wv(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function gl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Vn in e)
      Ca(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Vn in n && Ca(n);
      }
  }
}
function Ca(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ca(e[r], t);
      } catch {
      }
    const n = Os(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Kc(n);
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
const zd = /* @__PURE__ */ new Set(), $a = /* @__PURE__ */ new Set();
function vl(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Ho.call(t, i), !i.cancelBubble)
      return Vs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function In(e, t, n, r = {}) {
  var o = vl(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function is(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = vl(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ds(() => {
    t.removeEventListener(e, s, i);
  });
}
function Or(e) {
  for (var t = 0; t < e.length; t++)
    zd.add(e[t]);
  for (var n of $a)
    n(e);
}
let pu = null;
function Ho(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  pu = e;
  var s = 0, a = pu === e && e.__root;
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
    es(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Be, f = He;
    Xt(null), pn(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i["__" + r];
          b != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && b.call(i, e);
        } catch (v) {
          p ? h.push(v) : p = v;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (p) {
        for (let v of h)
          queueMicrotask(() => {
            throw v;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Xt(d), pn(f);
    }
  }
}
function ml(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ft(e, t) {
  var n = (
    /** @type {Effect} */
    He
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & jc) !== 0, r = (t & $g) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Ft(Ae, null), Ae;
    o === void 0 && (o = ml(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ bt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ud ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ft(a, l);
    } else
      Ft(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function xv(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jc) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Ft(Ae, null), Ae;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ml(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ bt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ bt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ bt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ bt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ft(d, f);
    } else
      Ft(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  return /* @__PURE__ */ xv(e, t, "svg");
}
function Te(e = "") {
  if (!$e) {
    var t = Kt(e + "");
    return Ft(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== Ms && (n.before(n = Kt()), ut(n)), Ft(n, n), n;
}
function Ee() {
  if ($e)
    return Ft(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kt();
  return e.append(t, n), Ft(t, n), e;
}
function M(e, t) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      He
    );
    ((n.f & zs) === 0 || n.nodes_end === null) && (n.nodes_end = Ae), Hn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function kv() {
  if ($e && Ae && Ae.nodeType === lr && Ae.textContent?.startsWith("$")) {
    const e = Ae.textContent.substring(1);
    return Hn(), e;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function Cv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const $v = [
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
function _v(e) {
  return $v.includes(e);
}
const Sv = {
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
function Ev(e) {
  return e = e.toLowerCase(), Sv[e] ?? e;
}
const Pv = ["touchstart", "touchmove"];
function Ov(e) {
  return Pv.includes(e);
}
const Nv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Tv(e) {
  return Nv.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function rt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Md(e, t) {
  return Ad(e, t);
}
function zv(e, t) {
  ka(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = Ae;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(n)
    ); i && (i.nodeType !== lr || /** @type {Comment} */
    i.data !== Rc); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ sn(i);
    if (!i)
      throw Br;
    Rt(!0), ut(
      /** @type {Comment} */
      i
    );
    const s = Ad(e, { ...t, anchor: i });
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Br && console.warn("Failed to hydrate: ", s), t.recover === !1 && Hg(), ka(), fl(n), Rt(!1), Md(e, t);
  } finally {
    Rt(r), ut(o);
  }
}
const io = /* @__PURE__ */ new Map();
function Ad(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ka();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = Ov(h);
        t.addEventListener(h, Ho, { passive: g });
        var b = io.get(h);
        b === void 0 ? (document.addEventListener(h, Ho, { passive: g }), io.set(h, 1)) : io.set(h, b + 1);
      }
    }
  };
  l(nl(zd)), $a.add(l);
  var u = void 0, d = pv(() => {
    var f = n ?? t.appendChild(Kt());
    return ev(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          de({});
          var h = (
            /** @type {ComponentContext} */
            ot
          );
          h.c = i;
        }
        if (o && (r.$$events = o), $e && Ft(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, $e && (He.nodes_end = Ae, Ae === null || Ae.nodeType !== lr || /** @type {Comment} */
        Ae.data !== tl))
          throw ui(), Br;
        i && fe();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, Ho);
        var h = (
          /** @type {number} */
          io.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Ho), io.delete(p)) : io.set(p, h);
      }
      $a.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return _a.set(u, d), u;
}
let _a = /* @__PURE__ */ new WeakMap();
function Mv(e, t) {
  const n = _a.get(e);
  return n ? (_a.delete(e), n(t)) : Promise.resolve();
}
class Ls {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
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
  #e = /* @__PURE__ */ new Map();
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
  #i = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#i = n;
  }
  #o = () => {
    var t = (
      /** @type {Batch} */
      Ge
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        hl(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (_t(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var l = document.createDocumentFragment();
            $d(s, l), l.append(Kt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            _t(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#i || !r ? (this.#r.add(i), uo(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #s = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (_t(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ge
    ), o = fd();
    n && !this.#e.has(t) && !this.#n.has(t) && this.#e.set(
      t,
      nn(() => n(this.anchor))
    ), this.#t.set(r, t), o || ($e && (this.anchor = Ae), this.#o());
  }
}
function tt(e, t, ...n) {
  var r = new Ls(e);
  to(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, nr);
}
function Zn(e) {
  ot === null && al(), So && ot.l !== null ? Av(ot).m.push(e) : st(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function pi(e) {
  ot === null && al(), Zn(() => () => lt(e));
}
function Av(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function Vv() {
  return Symbol(Zc);
}
function ae(e, t, n = !1) {
  $e && Hn();
  var r = new Ls(e), o = n ? nr : 0;
  function i(s, a) {
    if ($e) {
      const u = qc(e) === Es;
      if (s === u) {
        var l = ts();
        ut(l), r.anchor = l, Rt(!1), r.ensure(s, a), Rt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  to(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Dv(e, t) {
  $e && ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(e)
  ), eo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Hs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Oe(() => {
    var a = (
      /** @type {Effect} */
      He
    );
    if (s === (s = t() ?? "")) {
      $e && Hn();
      return;
    }
    if (a.nodes_start !== null && (wd(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Ae.data;
        for (var l = Hn(), u = l; l !== null && (l.nodeType !== lr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ sn(l);
        if (l === null)
          throw ui(), Br;
        Ft(Ae, u), i = ut(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = ml(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ bt(f)), Ft(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ bt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ bt(f)
          );
      else
        i.before(f);
    }
  });
}
function hi(e, t, n) {
  $e && Hn();
  var r = new Ls(e);
  to(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, nr);
}
function Vd(e, t, n, r, o, i) {
  let s = $e;
  $e && Hn();
  var a = null;
  $e && Ae.nodeType === zg && (a = /** @type {Element} */
  Ae, Hn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Ae : e
  ), u = new Ls(l, !1);
  to(() => {
    const d = t() || null;
    var f = n || d === "svg" ? Sg : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = $e ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), Ft(a, a), r) {
          $e && Tv(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ bt(a) : a.appendChild(Kt())
          );
          $e && (h === null ? Rt(!1) : ut(h)), r(a, h);
        }
        He.nodes_end = a, p.before(a);
      }
      $e && ut(p);
    }), () => {
    };
  }, nr), Ds(() => {
  }), s && (Rt(!0), ut(l));
}
function Lv(e, t) {
  let n = null, r = $e;
  var o;
  if ($e) {
    n = Ae;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(document.head)
    ); i !== null && (i.nodeType !== lr || /** @type {Comment} */
    i.data !== e); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ sn(i);
    if (i === null)
      Rt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ sn(i)
      );
      i.remove(), ut(s);
    }
  }
  $e || (o = document.head.appendChild(Kt()));
  try {
    to(() => t(o), ol);
  } finally {
    r && (Rt(!0), ut(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Je(e, t) {
  Oo(() => {
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
  Oo(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      eo(() => {
        var s = n();
        gl(s), o && Gc(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Hv(e, t) {
  var n = void 0, r;
  md(() => {
    n !== (n = t()) && (r && (_t(r), r = null), n && (r = nn(() => {
      Oo(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Dd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Dd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Wo() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Dd(e)) && (r && (r += " "), r += t);
  return r;
}
function ur(e) {
  return typeof e == "object" ? Wo(e) : e ?? "";
}
const hu = [...` 	
\r\f \v\uFEFF`];
function Iv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || hu.includes(r[s - 1])) && (a === r.length || hu.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function gu(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ea(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function jv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ea)), o && l.push(...Object.keys(o).map(ea));
      var u = 0, d = -1;
      const b = e.length;
      for (var f = 0; f < b; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === b - 1) {
            if (d !== -1) {
              var h = ea(e.substring(u, d).trim());
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
    return r && (n += gu(r)), o && (n += gu(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ut(e, t, n, r, o, i) {
  var s = e.__className;
  if ($e || s !== n || s === void 0) {
    var a = Iv(n, r, i);
    (!$e || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ta(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function zt(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = jv(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n?.[0], r[0]), ta(e, n?.[1], r[1], "important")) : ta(e, n, r));
  return r;
}
function Sa(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ps(t))
      return Bg();
    for (var r of e.options)
      r.selected = t.includes(vu(r));
    return;
  }
  for (r of e.options) {
    var o = vu(r);
    if (uv(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Rv(e) {
  var t = new MutationObserver(() => {
    Sa(e, e.__value);
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
  }), Ds(() => {
    t.disconnect();
  });
}
function vu(e) {
  return "__value" in e ? e.__value : e.value;
}
const gr = Symbol("class"), Mn = Symbol("style"), Ld = Symbol("is custom element"), Hd = Symbol("is html");
function kr(e) {
  if ($e) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Pe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Pe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Pr(n), pd();
  }
}
function Wi(e, t) {
  var n = Is(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function na(e, t) {
  var n = Is(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Zv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Pe(e, t, n, r) {
  var o = Is(e);
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Tg] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Id(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Kv(e, t, n, r, o = !1, i = !1) {
  if ($e && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || kr(s);
  }
  var l = Is(e), u = l[Ld], d = !l[Hd];
  let f = $e && u;
  f && Rt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = ur(n.class) : (r || n[gr]) && (n.class = null), n[Mn] && (n.style ??= null);
  var b = Id(e);
  for (const T in n) {
    let V = n[T];
    if (h && T === "value" && V == null) {
      e.value = e.__value = "", p[T] = V;
      continue;
    }
    if (T === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ut(e, v, V, r, t?.[gr], n[gr]), p[T] = V, p[gr] = n[gr];
      continue;
    }
    if (T === "style") {
      zt(e, V, t?.[Mn], n[Mn]), p[T] = V, p[Mn] = n[Mn];
      continue;
    }
    var w = p[T];
    if (!(V === w && !(V === void 0 && e.hasAttribute(T)))) {
      p[T] = V;
      var x = T[0] + T[1];
      if (x !== "$$")
        if (x === "on") {
          const D = {}, H = "$$" + T;
          let R = T.slice(2);
          var _ = _v(R);
          if (Cv(R) && (R = R.slice(0, -7), D.capture = !0), !_ && w) {
            if (V != null) continue;
            e.removeEventListener(R, p[H], D), p[H] = null;
          }
          if (V != null)
            if (_)
              e[`__${R}`] = V, Or([R]);
            else {
              let A = function(P) {
                p[T].call(this, P);
              };
              p[H] = vl(R, e, A, D);
            }
          else _ && (e[`__${R}`] = void 0);
        } else if (T === "style")
          Pe(e, T, V);
        else if (T === "autofocus")
          cv(
            /** @type {HTMLElement} */
            e,
            !!V
          );
        else if (!u && (T === "__value" || T === "value" && V != null))
          e.value = e.__value = V;
        else if (T === "selected" && h)
          Zv(
            /** @type {HTMLOptionElement} */
            e,
            V
          );
        else {
          var k = T;
          d || (k = Ev(k));
          var $ = k === "defaultValue" || k === "defaultChecked";
          if (V == null && !u && !$)
            if (l[T] = null, k === "value" || k === "checked") {
              let D = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (k === "value") {
                let R = D.defaultValue;
                D.removeAttribute(k), D.defaultValue = R, D.value = D.__value = H ? R : null;
              } else {
                let R = D.defaultChecked;
                D.removeAttribute(k), D.defaultChecked = R, D.checked = H ? R : !1;
              }
            } else
              e.removeAttribute(T);
          else $ || b.includes(k) && (u || typeof V != "string") ? (e[k] = V, k in l && (l[k] = Pt)) : typeof V != "function" && Pe(e, k, V);
        }
    }
  }
  return f && Rt(!0), p;
}
function it(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  rd(o, n, r, (l) => {
    var u = void 0, d = {}, f = e.nodeName === "SELECT", p = !1;
    if (md(() => {
      var g = t(...l.map(c)), b = Kv(
        e,
        u,
        g,
        i,
        s,
        a
      );
      p && f && "value" in g && Sa(
        /** @type {HTMLSelectElement} */
        e,
        g.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        g[w] || _t(d[w]);
      for (let w of Object.getOwnPropertySymbols(g)) {
        var v = g[w];
        w.description === Zc && (!u || v !== u[w]) && (d[w] && _t(d[w]), d[w] = nn(() => Hv(e, () => v))), b[w] = v;
      }
      u = b;
    }), f) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      Oo(() => {
        Sa(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Rv(h);
      });
    }
    p = !0;
  });
}
function Is(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ld]: e.nodeName.includes("-"),
      [Hd]: e.namespaceURI === _g
    }
  );
}
var mu = /* @__PURE__ */ new Map();
function Id(e) {
  var t = e.getAttribute("is") || e.nodeName, n = mu.get(t);
  if (n) return n;
  mu.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Kc(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Os(o);
  }
  return n;
}
function ss(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  hd(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = ra(e) ? oa(i) : i, n(i), Ge !== null && r.add(Ge), await yv(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        s === a && a === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = s, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  ($e && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  lt(t) == null && e.value) && (n(ra(e) ? oa(e.value) : e.value), Ge !== null && r.add(Ge)), eo(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Bi ?? Ge
      );
      if (r.has(i))
        return;
    }
    ra(e) && o === oa(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function ra(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function oa(e) {
  return e === "" ? null : +e;
}
function Bv(e, t, n = t) {
  hd(e, "change", () => {
    n(e.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  $e && e.files && n(e.files), eo(() => {
    e.files = t();
  });
}
class yl {
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
          yl.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Wv = /* @__PURE__ */ new yl({
  box: "border-box"
});
function yu(e, t, n) {
  var r = Wv.observe(e, () => n(e[t]));
  Oo(() => (lt(() => n(e[t])), r));
}
function bu(e, t) {
  return e === t || e?.[Vn] === t;
}
function St(e = {}, t, n, r) {
  return Oo(() => {
    var o, i;
    return eo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && bu(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Pr(() => {
        i && bu(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function bl(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ot
  ), n = t.l.u;
  if (!n) return;
  let r = () => gl(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ di(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && tn(() => {
    wu(t, r), ya(n.b);
  }), st(() => {
    const o = lt(() => n.m.map(Ng));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && st(() => {
    wu(t, r), ya(n.a);
  });
}
function wu(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Ni = !1;
function Yv(e) {
  var t = Ni;
  try {
    return Ni = !1, [e(), Ni];
  } finally {
    Ni = t;
  }
}
const Xv = {
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
function We(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Xv
  );
}
const qv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = He;
      try {
        pn(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Ic
        );
      } finally {
        pn(r);
      }
    }
    return e.special[t](n), lu(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), lu(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function xu(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Cr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        He
      )
    },
    qv
  );
}
const Fv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ao(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Ao(o) && (o = o());
      const i = Qn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ao(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Qn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Vn || t === sl) return !1;
    for (let n of e.props)
      if (Ao(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Ao(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ue(...e) {
  return new Proxy({ props: e }, Fv);
}
function y(e, t, n, r) {
  var o = !So || (n & xg) !== 0, i = (n & kg) !== 0, s = (n & Cg) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? lt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = Vn in e || sl in e;
    d = Qn(e, t)?.set ?? (f && t in e ? (_) => e[t] = _ : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Yv(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && Ig(), d(p)));
  var g;
  if (o ? g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (a = /** @type {V} */
    void 0), _ === void 0 ? a : _;
  }, o && (n & Ic) === 0)
    return g;
  if (d) {
    var b = e.$$legacy;
    return (
      /** @type {() => V} */
      function(_, k) {
        return arguments.length > 0 ? ((!o || !k || b || h) && d(k ? g() : _), _) : g();
      }
    );
  }
  var v = !1, w = ((n & wg) !== 0 ? di : cl)(() => (v = !1, g()));
  i && c(w);
  var x = (
    /** @type {Effect} */
    He
  );
  return (
    /** @type {() => V} */
    function(_, k) {
      if (arguments.length > 0) {
        const $ = k ? c(w) : o && i ? Vt(_) : _;
        return J(w, $), v = !0, a !== void 0 && (a = $), _;
      }
      return no && v || (x.f & er) !== 0 ? w.v : c(w);
    }
  );
}
function Gv(e) {
  return new Uv(e);
}
class Uv {
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
      var a = /* @__PURE__ */ ad(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === sl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return J(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? zv : Md)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || es(this, i, {
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
      Mv(this.#e);
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
let jd;
typeof HTMLElement == "function" && (jd = class extends HTMLElement {
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
          r !== "default" && (i.name = r), M(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Jv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Yi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Gv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Po(() => {
        eo(() => {
          this.$$r = !0;
          for (const r of Qi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Yi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Yi(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Qi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Yi(e, t, n, r) {
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
function Jv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let s = class extends jd {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Qi(t).forEach((a) => {
    es(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Yi(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Qn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    es(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Qv = { value: () => {
} };
function js() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xi(n);
}
function Xi(e) {
  this._ = e;
}
function e1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xi.prototype = js.prototype = {
  constructor: Xi,
  on: function(e, t) {
    var n = this._, r = e1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = t1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ku(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ku(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Xi(e);
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
function t1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ku(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Qv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ea = "http://www.w3.org/1999/xhtml";
const Cu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ea,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Rs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Cu.hasOwnProperty(t) ? { space: Cu[t], local: e } : e;
}
function n1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ea && t.documentElement.namespaceURI === Ea ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function r1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Rd(e) {
  var t = Rs(e);
  return (t.local ? r1 : n1)(t);
}
function o1() {
}
function wl(e) {
  return e == null ? o1 : function() {
    return this.querySelector(e);
  };
}
function i1(e) {
  typeof e != "function" && (e = wl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new an(r, this._parents);
}
function s1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function a1() {
  return [];
}
function Zd(e) {
  return e == null ? a1 : function() {
    return this.querySelectorAll(e);
  };
}
function l1(e) {
  return function() {
    return s1(e.apply(this, arguments));
  };
}
function u1(e) {
  typeof e == "function" ? e = l1(e) : e = Zd(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new an(r, o);
}
function Kd(e) {
  return function() {
    return this.matches(e);
  };
}
function Bd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var c1 = Array.prototype.find;
function d1(e) {
  return function() {
    return c1.call(this.children, e);
  };
}
function f1() {
  return this.firstElementChild;
}
function p1(e) {
  return this.select(e == null ? f1 : d1(typeof e == "function" ? e : Bd(e)));
}
var h1 = Array.prototype.filter;
function g1() {
  return Array.from(this.children);
}
function v1(e) {
  return function() {
    return h1.call(this.children, e);
  };
}
function m1(e) {
  return this.selectAll(e == null ? g1 : v1(typeof e == "function" ? e : Bd(e)));
}
function y1(e) {
  typeof e != "function" && (e = Kd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new an(r, this._parents);
}
function Wd(e) {
  return new Array(e.length);
}
function b1() {
  return new an(this._enter || this._groups.map(Wd), this._parents);
}
function as(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
as.prototype = {
  constructor: as,
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
function w1(e) {
  return function() {
    return e;
  };
}
function x1(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new as(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function k1(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new as(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function C1(e) {
  return e.__data__;
}
function $1(e, t) {
  if (!arguments.length) return Array.from(this, C1);
  var n = t ? k1 : x1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = w1(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = _1(e.call(d, d && d.__data__, u, r)), g = h.length, b = a[u] = new Array(g), v = s[u] = new Array(g), w = l[u] = new Array(p);
    n(d, f, b, v, w, h, t);
    for (var x = 0, _ = 0, k, $; x < g; ++x)
      if (k = b[x]) {
        for (x >= _ && (_ = x + 1); !($ = v[_]) && ++_ < g; ) ;
        k._next = $ || null;
      }
  }
  return s = new an(s, r), s._enter = a, s._exit = l, s;
}
function _1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function S1() {
  return new an(this._exit || this._groups.map(Wd), this._parents);
}
function E1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function P1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new an(a, this._parents);
}
function O1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function N1(e) {
  e || (e = T1);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new an(o, this._parents).order();
}
function T1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function z1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function M1() {
  return Array.from(this);
}
function A1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function V1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function D1() {
  return !this.node();
}
function L1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function H1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function I1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function j1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function R1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function K1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function B1(e, t) {
  var n = Rs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? I1 : H1 : typeof t == "function" ? n.local ? K1 : Z1 : n.local ? R1 : j1)(n, t));
}
function Yd(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function W1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Y1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function X1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function q1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? W1 : typeof t == "function" ? X1 : Y1)(e, t, n ?? "")) : yo(this.node(), e);
}
function yo(e, t) {
  return e.style.getPropertyValue(t) || Yd(e).getComputedStyle(e, null).getPropertyValue(t);
}
function F1(e) {
  return function() {
    delete this[e];
  };
}
function G1(e, t) {
  return function() {
    this[e] = t;
  };
}
function U1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function J1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? F1 : typeof t == "function" ? U1 : G1)(e, t)) : this.node()[e];
}
function Xd(e) {
  return e.trim().split(/^|\s+/);
}
function xl(e) {
  return e.classList || new qd(e);
}
function qd(e) {
  this._node = e, this._names = Xd(e.getAttribute("class") || "");
}
qd.prototype = {
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
function Fd(e, t) {
  for (var n = xl(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Gd(e, t) {
  for (var n = xl(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Q1(e) {
  return function() {
    Fd(this, e);
  };
}
function em(e) {
  return function() {
    Gd(this, e);
  };
}
function tm(e, t) {
  return function() {
    (t.apply(this, arguments) ? Fd : Gd)(this, e);
  };
}
function nm(e, t) {
  var n = Xd(e + "");
  if (arguments.length < 2) {
    for (var r = xl(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? tm : t ? Q1 : em)(n, t));
}
function rm() {
  this.textContent = "";
}
function om(e) {
  return function() {
    this.textContent = e;
  };
}
function im(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function sm(e) {
  return arguments.length ? this.each(e == null ? rm : (typeof e == "function" ? im : om)(e)) : this.node().textContent;
}
function am() {
  this.innerHTML = "";
}
function lm(e) {
  return function() {
    this.innerHTML = e;
  };
}
function um(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function cm(e) {
  return arguments.length ? this.each(e == null ? am : (typeof e == "function" ? um : lm)(e)) : this.node().innerHTML;
}
function dm() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fm() {
  return this.each(dm);
}
function pm() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function hm() {
  return this.each(pm);
}
function gm(e) {
  var t = typeof e == "function" ? e : Rd(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vm() {
  return null;
}
function mm(e, t) {
  var n = typeof e == "function" ? e : Rd(e), r = t == null ? vm : typeof t == "function" ? t : wl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ym() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bm() {
  return this.each(ym);
}
function wm() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xm() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function km(e) {
  return this.select(e ? xm : wm);
}
function Cm(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $m(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function _m(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Sm(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Em(e, t, n) {
  return function() {
    var r = this.__on, o, i = $m(t);
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
function Pm(e, t, n) {
  var r = _m(e + ""), o, i = r.length, s;
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
  for (a = t ? Em : Sm, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ud(e, t, n) {
  var r = Yd(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Om(e, t) {
  return function() {
    return Ud(this, e, t);
  };
}
function Nm(e, t) {
  return function() {
    return Ud(this, e, t.apply(this, arguments));
  };
}
function Tm(e, t) {
  return this.each((typeof t == "function" ? Nm : Om)(e, t));
}
function* zm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Jd = [null];
function an(e, t) {
  this._groups = e, this._parents = t;
}
function gi() {
  return new an([[document.documentElement]], Jd);
}
function Mm() {
  return this;
}
an.prototype = gi.prototype = {
  constructor: an,
  select: i1,
  selectAll: u1,
  selectChild: p1,
  selectChildren: m1,
  filter: y1,
  data: $1,
  enter: b1,
  exit: S1,
  join: E1,
  merge: P1,
  selection: Mm,
  order: O1,
  sort: N1,
  call: z1,
  nodes: M1,
  node: A1,
  size: V1,
  empty: D1,
  each: L1,
  attr: B1,
  style: q1,
  property: J1,
  classed: nm,
  text: sm,
  html: cm,
  raise: fm,
  lower: hm,
  append: gm,
  insert: mm,
  remove: bm,
  clone: km,
  datum: Cm,
  on: Pm,
  dispatch: Tm,
  [Symbol.iterator]: zm
};
function fn(e) {
  return typeof e == "string" ? new an([[document.querySelector(e)]], [document.documentElement]) : new an([[e]], Jd);
}
function Am(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
  if (e = Am(e), t === void 0 && (t = e.currentTarget), t) {
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
const Vm = { passive: !1 }, Uo = { capture: !0, passive: !1 };
function ia(e) {
  e.stopImmediatePropagation();
}
function co(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Qd(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", co, Uo);
  "onselectstart" in t ? n.on("selectstart.drag", co, Uo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ef(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", co, Uo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ti = (e) => () => e;
function Pa(e, {
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
Pa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Dm(e) {
  return !e.ctrlKey && !e.button;
}
function Lm() {
  return this.parentNode;
}
function Hm(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Im() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function jm() {
  var e = Dm, t = Lm, n = Hm, r = Im, o = {}, i = js("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(k) {
    k.on("mousedown.drag", h).filter(r).on("touchstart.drag", v).on("touchmove.drag", w, Vm).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(k, $) {
    if (!(d || !e.call(this, k, $))) {
      var T = _(this, t.call(this, k, $), k, $, "mouse");
      T && (fn(k.view).on("mousemove.drag", g, Uo).on("mouseup.drag", b, Uo), Qd(k.view), ia(k), u = !1, a = k.clientX, l = k.clientY, T("start", k));
    }
  }
  function g(k) {
    if (co(k), !u) {
      var $ = k.clientX - a, T = k.clientY - l;
      u = $ * $ + T * T > f;
    }
    o.mouse("drag", k);
  }
  function b(k) {
    fn(k.view).on("mousemove.drag mouseup.drag", null), ef(k.view, u), co(k), o.mouse("end", k);
  }
  function v(k, $) {
    if (e.call(this, k, $)) {
      var T = k.changedTouches, V = t.call(this, k, $), D = T.length, H, R;
      for (H = 0; H < D; ++H)
        (R = _(this, V, k, $, T[H].identifier, T[H])) && (ia(k), R("start", k, T[H]));
    }
  }
  function w(k) {
    var $ = k.changedTouches, T = $.length, V, D;
    for (V = 0; V < T; ++V)
      (D = o[$[V].identifier]) && (co(k), D("drag", k, $[V]));
  }
  function x(k) {
    var $ = k.changedTouches, T = $.length, V, D;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < T; ++V)
      (D = o[$[V].identifier]) && (ia(k), D("end", k, $[V]));
  }
  function _(k, $, T, V, D, H) {
    var R = i.copy(), A = yn(H || T, $), P, z, C;
    if ((C = n.call(k, new Pa("beforestart", {
      sourceEvent: T,
      target: p,
      identifier: D,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), V)) != null)
      return P = C.x - A[0] || 0, z = C.y - A[1] || 0, function S(E, j, Y) {
        var F = A, N;
        switch (E) {
          case "start":
            o[D] = S, N = s++;
            break;
          case "end":
            delete o[D], --s;
          // falls through
          case "drag":
            A = yn(Y || j, $), N = s;
            break;
        }
        R.call(
          E,
          k,
          new Pa(E, {
            sourceEvent: j,
            subject: C,
            target: p,
            identifier: D,
            active: N,
            x: A[0] + P,
            y: A[1] + z,
            dx: A[0] - F[0],
            dy: A[1] - F[1],
            dispatch: R
          }),
          V
        );
      };
  }
  return p.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Ti(!!k), p) : e;
  }, p.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Ti(k), p) : t;
  }, p.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : Ti(k), p) : n;
  }, p.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : Ti(!!k), p) : r;
  }, p.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? p : k;
  }, p.clickDistance = function(k) {
    return arguments.length ? (f = (k = +k) * k, p) : Math.sqrt(f);
  }, p;
}
function kl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function tf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function vi() {
}
var Jo = 0.7, ls = 1 / Jo, fo = "\\s*([+-]?\\d+)\\s*", Qo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rm = /^#([0-9a-f]{3,8})$/, Zm = new RegExp(`^rgb\\(${fo},${fo},${fo}\\)$`), Km = new RegExp(`^rgb\\(${Dn},${Dn},${Dn}\\)$`), Bm = new RegExp(`^rgba\\(${fo},${fo},${fo},${Qo}\\)$`), Wm = new RegExp(`^rgba\\(${Dn},${Dn},${Dn},${Qo}\\)$`), Ym = new RegExp(`^hsl\\(${Qo},${Dn},${Dn}\\)$`), Xm = new RegExp(`^hsla\\(${Qo},${Dn},${Dn},${Qo}\\)$`), $u = {
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
kl(vi, qr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _u,
  // Deprecated! Use color.formatHex.
  formatHex: _u,
  formatHex8: qm,
  formatHsl: Fm,
  formatRgb: Su,
  toString: Su
});
function _u() {
  return this.rgb().formatHex();
}
function qm() {
  return this.rgb().formatHex8();
}
function Fm() {
  return nf(this).formatHsl();
}
function Su() {
  return this.rgb().formatRgb();
}
function qr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rm.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Eu(t) : n === 3 ? new qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? zi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? zi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zm.exec(e)) ? new qt(t[1], t[2], t[3], 1) : (t = Km.exec(e)) ? new qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bm.exec(e)) ? zi(t[1], t[2], t[3], t[4]) : (t = Wm.exec(e)) ? zi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ym.exec(e)) ? Nu(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xm.exec(e)) ? Nu(t[1], t[2] / 100, t[3] / 100, t[4]) : $u.hasOwnProperty(e) ? Eu($u[e]) : e === "transparent" ? new qt(NaN, NaN, NaN, 0) : null;
}
function Eu(e) {
  return new qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new qt(e, t, n, r);
}
function Gm(e) {
  return e instanceof vi || (e = qr(e)), e ? (e = e.rgb(), new qt(e.r, e.g, e.b, e.opacity)) : new qt();
}
function Oa(e, t, n, r) {
  return arguments.length === 1 ? Gm(e) : new qt(e, t, n, r ?? 1);
}
function qt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
kl(qt, Oa, tf(vi, {
  brighter(e) {
    return e = e == null ? ls : Math.pow(ls, e), new qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new qt(Zr(this.r), Zr(this.g), Zr(this.b), us(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pu,
  // Deprecated! Use color.formatHex.
  formatHex: Pu,
  formatHex8: Um,
  formatRgb: Ou,
  toString: Ou
}));
function Pu() {
  return `#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}`;
}
function Um() {
  return `#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}${Lr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ou() {
  const e = us(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function us(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Lr(e) {
  return e = Zr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Nu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new bn(e, t, n, r);
}
function nf(e) {
  if (e instanceof bn) return new bn(e.h, e.s, e.l, e.opacity);
  if (e instanceof vi || (e = qr(e)), !e) return new bn();
  if (e instanceof bn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new bn(s, a, l, e.opacity);
}
function Jm(e, t, n, r) {
  return arguments.length === 1 ? nf(e) : new bn(e, t, n, r ?? 1);
}
function bn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
kl(bn, Jm, tf(vi, {
  brighter(e) {
    return e = e == null ? ls : Math.pow(ls, e), new bn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new bn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new qt(
      sa(e >= 240 ? e - 240 : e + 120, o, r),
      sa(e, o, r),
      sa(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new bn(Tu(this.h), Mi(this.s), Mi(this.l), us(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = us(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tu(this.h)}, ${Mi(this.s) * 100}%, ${Mi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Mi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Cl = (e) => () => e;
function Qm(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function e0(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function t0(e) {
  return (e = +e) == 1 ? rf : function(t, n) {
    return n - t ? e0(t, n, e) : Cl(isNaN(t) ? n : t);
  };
}
function rf(e, t) {
  var n = t - e;
  return n ? Qm(e, n) : Cl(isNaN(e) ? t : e);
}
const cs = function e(t) {
  var n = t0(t);
  function r(o, i) {
    var s = n((o = Oa(o)).r, (i = Oa(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = rf(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function n0(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function r0(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function o0(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Yo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function i0(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function zn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function s0(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Yo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Na = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Na.source, "g");
function a0(e) {
  return function() {
    return e;
  };
}
function l0(e) {
  return function(t) {
    return e(t) + "";
  };
}
function of(e, t) {
  var n = Na.lastIndex = aa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Na.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: zn(r, o) })), n = aa.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? l0(l[0].x) : a0(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function Yo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Cl(t) : (n === "number" ? zn : n === "string" ? (r = qr(t)) ? (t = r, cs) : of : t instanceof qr ? cs : t instanceof Date ? i0 : r0(t) ? n0 : Array.isArray(t) ? o0 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? s0 : zn)(e, t);
}
var zu = 180 / Math.PI, sf = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function af(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * zu,
    skewX: Math.atan(l) * zu,
    scaleX: s,
    scaleY: a
  };
}
var Ai;
function u0(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? sf : af(t.a, t.b, t.c, t.d, t.e, t.f);
}
function c0(e) {
  return e == null || (Ai || (Ai = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ai.setAttribute("transform", e), !(e = Ai.transform.baseVal.consolidate())) ? sf : (e = e.matrix, af(e.a, e.b, e.c, e.d, e.e, e.f));
}
function lf(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var b = h.push("translate(", null, t, null, n);
      g.push({ i: b - 4, x: zn(u, f) }, { i: b - 2, x: zn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: zn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: zn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var b = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: b - 4, x: zn(u, f) }, { i: b - 2, x: zn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, b = p.length, v; ++g < b; ) f[(v = p[g]).i] = v.x(h);
      return f.join("");
    };
  };
}
var d0 = lf(u0, "px, ", "px)", "deg)"), f0 = lf(c0, ", ", ")", ")"), p0 = 1e-12;
function Mu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function h0(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function g0(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const qi = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, b = h * h + g * g, v, w;
    if (b < p0)
      w = Math.log(p / u) / t, v = function(V) {
        return [
          a + V * h,
          l + V * g,
          u * Math.exp(t * V * w)
        ];
      };
    else {
      var x = Math.sqrt(b), _ = (p * p - u * u + r * b) / (2 * u * n * x), k = (p * p - u * u - r * b) / (2 * p * n * x), $ = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(k * k + 1) - k);
      w = (T - $) / t, v = function(V) {
        var D = V * w, H = Mu($), R = u / (n * x) * (H * g0(t * D + $) - h0($));
        return [
          a + R * h,
          l + R * g,
          u * H / Mu(t * D + $)
        ];
      };
    }
    return v.duration = w * 1e3 * t / Math.SQRT2, v;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var bo = 0, Io = 0, Vo = 0, uf = 1e3, ds, jo, fs = 0, Fr = 0, Zs = 0, ei = typeof performance == "object" && performance.now ? performance : Date, cf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function $l() {
  return Fr || (cf(v0), Fr = ei.now() + Zs);
}
function v0() {
  Fr = 0;
}
function ps() {
  this._call = this._time = this._next = null;
}
ps.prototype = df.prototype = {
  constructor: ps,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? $l() : +n) + (t == null ? 0 : +t), !this._next && jo !== this && (jo ? jo._next = this : ds = this, jo = this), this._call = e, this._time = n, Ta();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ta());
  }
};
function df(e, t, n) {
  var r = new ps();
  return r.restart(e, t, n), r;
}
function m0() {
  $l(), ++bo;
  for (var e = ds, t; e; )
    (t = Fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bo;
}
function Au() {
  Fr = (fs = ei.now()) + Zs, bo = Io = 0;
  try {
    m0();
  } finally {
    bo = 0, b0(), Fr = 0;
  }
}
function y0() {
  var e = ei.now(), t = e - fs;
  t > uf && (Zs -= t, fs = e);
}
function b0() {
  for (var e, t = ds, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ds = n);
  jo = e, Ta(r);
}
function Ta(e) {
  if (!bo) {
    Io && (Io = clearTimeout(Io));
    var t = e - Fr;
    t > 24 ? (e < 1 / 0 && (Io = setTimeout(Au, e - ei.now() - Zs)), Vo && (Vo = clearInterval(Vo))) : (Vo || (fs = ei.now(), Vo = setInterval(y0, uf)), bo = 1, cf(Au));
  }
}
function Vu(e, t, n) {
  var r = new ps();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var w0 = js("start", "end", "cancel", "interrupt"), x0 = [], ff = 0, Du = 1, za = 2, Fi = 3, Lu = 4, Ma = 5, Gi = 6;
function Ks(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  k0(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: w0,
    tween: x0,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ff
  });
}
function _l(e, t) {
  var n = Sn(e, t);
  if (n.state > ff) throw new Error("too late; already scheduled");
  return n;
}
function Kn(e, t) {
  var n = Sn(e, t);
  if (n.state > Fi) throw new Error("too late; already running");
  return n;
}
function Sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function k0(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = df(i, 0, n.time);
  function i(u) {
    n.state = Du, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== Du) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Fi) return Vu(s);
        h.state === Lu ? (h.state = Gi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Gi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Vu(function() {
      n.state === Fi && (n.state = Lu, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = za, n.on.call("start", e, e.__data__, n.index, n.group), n.state === za) {
      for (n.state = Fi, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ma, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === Ma && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Gi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ui(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > za && r.state < Ma, r.state = Gi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function C0(e) {
  return this.each(function() {
    Ui(this, e);
  });
}
function $0(e, t) {
  var n, r;
  return function() {
    var o = Kn(this, e), i = o.tween;
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
function _0(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Kn(this, e), s = i.tween;
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
function S0(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? $0 : _0)(n, e, t));
}
function Sl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Kn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Sn(o, r).value[t];
  };
}
function pf(e, t) {
  var n;
  return (typeof t == "number" ? zn : t instanceof qr ? cs : (n = qr(t)) ? (t = n, cs) : of)(e, t);
}
function E0(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function P0(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function O0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function N0(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function T0(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function z0(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function M0(e, t) {
  var n = Rs(e), r = n === "transform" ? f0 : pf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? z0 : T0)(n, r, Sl(this, "attr." + e, t)) : t == null ? (n.local ? P0 : E0)(n) : (n.local ? N0 : O0)(n, r, t));
}
function A0(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function V0(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function D0(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && V0(e, i)), n;
  }
  return o._value = t, o;
}
function L0(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && A0(e, i)), n;
  }
  return o._value = t, o;
}
function H0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Rs(e);
  return this.tween(n, (r.local ? D0 : L0)(r, t));
}
function I0(e, t) {
  return function() {
    _l(this, e).delay = +t.apply(this, arguments);
  };
}
function j0(e, t) {
  return t = +t, function() {
    _l(this, e).delay = t;
  };
}
function R0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? I0 : j0)(t, e)) : Sn(this.node(), t).delay;
}
function Z0(e, t) {
  return function() {
    Kn(this, e).duration = +t.apply(this, arguments);
  };
}
function K0(e, t) {
  return t = +t, function() {
    Kn(this, e).duration = t;
  };
}
function B0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Z0 : K0)(t, e)) : Sn(this.node(), t).duration;
}
function W0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Kn(this, e).ease = t;
  };
}
function Y0(e) {
  var t = this._id;
  return arguments.length ? this.each(W0(t, e)) : Sn(this.node(), t).ease;
}
function X0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Kn(this, e).ease = n;
  };
}
function q0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(X0(this._id, e));
}
function F0(e) {
  typeof e != "function" && (e = Kd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new rr(r, this._parents, this._name, this._id);
}
function G0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new rr(s, this._parents, this._name, this._id);
}
function U0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function J0(e, t, n) {
  var r, o, i = U0(t) ? _l : Kn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Q0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(J0(n, e, t));
}
function ey(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ty() {
  return this.on("end.remove", ey(this._id));
}
function ny(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = wl(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Ks(u[p], t, n, p, u, Sn(d, n)));
  return new rr(i, this._parents, t, n);
}
function ry(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Zd(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = Sn(d, n), b = 0, v = p.length; b < v; ++b)
          (h = p[b]) && Ks(h, t, n, b, p, g);
        i.push(p), s.push(d);
      }
  return new rr(i, s, t, n);
}
var oy = gi.prototype.constructor;
function iy() {
  return new oy(this._groups, this._parents);
}
function sy(e, t) {
  var n, r, o;
  return function() {
    var i = yo(this, e), s = (this.style.removeProperty(e), yo(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function hf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ay(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = yo(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ly(e, t, n) {
  var r, o, i;
  return function() {
    var s = yo(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), yo(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function uy(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Kn(this, e), u = l.on, d = l.value[i] == null ? a || (a = hf(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function cy(e, t, n) {
  var r = (e += "") == "transform" ? d0 : pf;
  return t == null ? this.styleTween(e, sy(e, r)).on("end.style." + e, hf(e)) : typeof t == "function" ? this.styleTween(e, ly(e, r, Sl(this, "style." + e, t))).each(uy(this._id, e)) : this.styleTween(e, ay(e, r, t), n).on("end.style." + e, null);
}
function dy(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function fy(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && dy(e, s, n)), r;
  }
  return i._value = t, i;
}
function py(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, fy(e, t, n ?? ""));
}
function hy(e) {
  return function() {
    this.textContent = e;
  };
}
function gy(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function vy(e) {
  return this.tween("text", typeof e == "function" ? gy(Sl(this, "text", e)) : hy(e == null ? "" : e + ""));
}
function my(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function yy(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && my(o)), t;
  }
  return r._value = e, r;
}
function by(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, yy(e));
}
function wy() {
  for (var e = this._name, t = this._id, n = gf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Sn(l, t);
        Ks(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new rr(r, this._parents, e, n);
}
function xy() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Kn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var ky = 0;
function rr(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function gf() {
  return ++ky;
}
var Wn = gi.prototype;
rr.prototype = {
  constructor: rr,
  select: ny,
  selectAll: ry,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: F0,
  merge: G0,
  selection: iy,
  transition: wy,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: Q0,
  attr: M0,
  attrTween: H0,
  style: cy,
  styleTween: py,
  text: vy,
  textTween: by,
  remove: ty,
  tween: S0,
  delay: R0,
  duration: B0,
  ease: Y0,
  easeVarying: q0,
  end: xy,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function Cy(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $y = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Cy
};
function _y(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Sy(e) {
  var t, n;
  e instanceof rr ? (t = e._id, e = e._name) : (t = gf(), (n = $y).time = $l(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ks(l, e, t, u, s, n || _y(l, t));
  return new rr(r, this._parents, e, t);
}
gi.prototype.interrupt = C0;
gi.prototype.transition = Sy;
const Vi = (e) => () => e;
function Ey(e, {
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
function Gn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Gn.prototype = {
  constructor: Gn,
  scale: function(e) {
    return e === 1 ? this : new Gn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Gn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Bs = new Gn(1, 0, 0);
vf.prototype = Gn.prototype;
function vf(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Bs;
  return e.__zoom;
}
function la(e) {
  e.stopImmediatePropagation();
}
function Do(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Py(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Oy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Hu() {
  return this.__zoom || Bs;
}
function Ny(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ty() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function zy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function mf() {
  var e = Py, t = Oy, n = zy, r = Ny, o = Ty, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = qi, u = js("start", "zoom", "end"), d, f, p, h = 500, g = 150, b = 0, v = 10;
  function w(C) {
    C.property("__zoom", Hu).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(C, S, E, j) {
    var Y = C.selection ? C.selection() : C;
    Y.property("__zoom", Hu), C !== Y ? $(C, S, E, j) : Y.interrupt().each(function() {
      T(this, arguments).event(j).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, w.scaleBy = function(C, S, E, j) {
    w.scaleTo(C, function() {
      var Y = this.__zoom.k, F = typeof S == "function" ? S.apply(this, arguments) : S;
      return Y * F;
    }, E, j);
  }, w.scaleTo = function(C, S, E, j) {
    w.transform(C, function() {
      var Y = t.apply(this, arguments), F = this.__zoom, N = E == null ? k(Y) : typeof E == "function" ? E.apply(this, arguments) : E, X = F.invert(N), ee = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(_(x(F, ee), N, X), Y, s);
    }, E, j);
  }, w.translateBy = function(C, S, E, j) {
    w.transform(C, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, j);
  }, w.translateTo = function(C, S, E, j, Y) {
    w.transform(C, function() {
      var F = t.apply(this, arguments), N = this.__zoom, X = j == null ? k(F) : typeof j == "function" ? j.apply(this, arguments) : j;
      return n(Bs.translate(X[0], X[1]).scale(N.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), F, s);
    }, j, Y);
  };
  function x(C, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === C.k ? C : new Gn(S, C.x, C.y);
  }
  function _(C, S, E) {
    var j = S[0] - E[0] * C.k, Y = S[1] - E[1] * C.k;
    return j === C.x && Y === C.y ? C : new Gn(C.k, j, Y);
  }
  function k(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function $(C, S, E, j) {
    C.on("start.zoom", function() {
      T(this, arguments).event(j).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(j).end();
    }).tween("zoom", function() {
      var Y = this, F = arguments, N = T(Y, F).event(j), X = t.apply(Y, F), ee = E == null ? k(X) : typeof E == "function" ? E.apply(Y, F) : E, q = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), K = Y.__zoom, W = typeof S == "function" ? S.apply(Y, F) : S, G = l(K.invert(ee).concat(q / K.k), W.invert(ee).concat(q / W.k));
      return function(ne) {
        if (ne === 1) ne = W;
        else {
          var re = G(ne), Q = q / re[2];
          ne = new Gn(Q, ee[0] - re[0] * Q, ee[1] - re[1] * Q);
        }
        N.zoom(null, ne);
      };
    });
  }
  function T(C, S, E) {
    return !E && C.__zooming || new V(C, S);
  }
  function V(C, S) {
    this.that = C, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, S), this.taps = 0;
  }
  V.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, S) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var S = fn(this.that).datum();
      u.call(
        C,
        this.that,
        new Ey(C, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        S
      );
    }
  };
  function D(C, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = T(this, S).event(C), j = this.__zoom, Y = Math.max(i[0], Math.min(i[1], j.k * Math.pow(2, r.apply(this, arguments)))), F = yn(C);
    if (E.wheel)
      (E.mouse[0][0] !== F[0] || E.mouse[0][1] !== F[1]) && (E.mouse[1] = j.invert(E.mouse[0] = F)), clearTimeout(E.wheel);
    else {
      if (j.k === Y) return;
      E.mouse = [F, j.invert(F)], Ui(this), E.start();
    }
    Do(C), E.wheel = setTimeout(N, g), E.zoom("mouse", n(_(x(j, Y), E.mouse[0], E.mouse[1]), E.extent, s));
    function N() {
      E.wheel = null, E.end();
    }
  }
  function H(C, ...S) {
    if (p || !e.apply(this, arguments)) return;
    var E = C.currentTarget, j = T(this, S, !0).event(C), Y = fn(C.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", q, !0), F = yn(C, E), N = C.clientX, X = C.clientY;
    Qd(C.view), la(C), j.mouse = [F, this.__zoom.invert(F)], Ui(this), j.start();
    function ee(K) {
      if (Do(K), !j.moved) {
        var W = K.clientX - N, G = K.clientY - X;
        j.moved = W * W + G * G > b;
      }
      j.event(K).zoom("mouse", n(_(j.that.__zoom, j.mouse[0] = yn(K, E), j.mouse[1]), j.extent, s));
    }
    function q(K) {
      Y.on("mousemove.zoom mouseup.zoom", null), ef(K.view, j.moved), Do(K), j.event(K).end();
    }
  }
  function R(C, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, j = yn(C.changedTouches ? C.changedTouches[0] : C, this), Y = E.invert(j), F = E.k * (C.shiftKey ? 0.5 : 2), N = n(_(x(E, F), j, Y), t.apply(this, S), s);
      Do(C), a > 0 ? fn(this).transition().duration(a).call($, N, j, C) : fn(this).call(w.transform, N, j, C);
    }
  }
  function A(C, ...S) {
    if (e.apply(this, arguments)) {
      var E = C.touches, j = E.length, Y = T(this, S, C.changedTouches.length === j).event(C), F, N, X, ee;
      for (la(C), N = 0; N < j; ++N)
        X = E[N], ee = yn(X, this), ee = [ee, this.__zoom.invert(ee), X.identifier], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== ee[2] && (Y.touch1 = ee, Y.taps = 0) : (Y.touch0 = ee, F = !0, Y.taps = 1 + !!d);
      d && (d = clearTimeout(d)), F && (Y.taps < 2 && (f = ee[0], d = setTimeout(function() {
        d = null;
      }, h)), Ui(this), Y.start());
    }
  }
  function P(C, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(C), j = C.changedTouches, Y = j.length, F, N, X, ee;
      for (Do(C), F = 0; F < Y; ++F)
        N = j[F], X = yn(N, this), E.touch0 && E.touch0[2] === N.identifier ? E.touch0[0] = X : E.touch1 && E.touch1[2] === N.identifier && (E.touch1[0] = X);
      if (N = E.that.__zoom, E.touch1) {
        var q = E.touch0[0], K = E.touch0[1], W = E.touch1[0], G = E.touch1[1], ne = (ne = W[0] - q[0]) * ne + (ne = W[1] - q[1]) * ne, re = (re = G[0] - K[0]) * re + (re = G[1] - K[1]) * re;
        N = x(N, Math.sqrt(ne / re)), X = [(q[0] + W[0]) / 2, (q[1] + W[1]) / 2], ee = [(K[0] + G[0]) / 2, (K[1] + G[1]) / 2];
      } else if (E.touch0) X = E.touch0[0], ee = E.touch0[1];
      else return;
      E.zoom("touch", n(_(N, X, ee), E.extent, s));
    }
  }
  function z(C, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(C), j = C.changedTouches, Y = j.length, F, N;
      for (la(C), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), F = 0; F < Y; ++F)
        N = j[F], E.touch0 && E.touch0[2] === N.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === N.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (N = yn(N, this), Math.hypot(f[0] - N[0], f[1] - N[1]) < v)) {
        var X = fn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Vi(+C), w) : r;
  }, w.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Vi(!!C), w) : e;
  }, w.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Vi(!!C), w) : o;
  }, w.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Vi([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), w) : t;
  }, w.scaleExtent = function(C) {
    return arguments.length ? (i[0] = +C[0], i[1] = +C[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(C) {
    return arguments.length ? (s[0][0] = +C[0][0], s[1][0] = +C[1][0], s[0][1] = +C[0][1], s[1][1] = +C[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(C) {
    return arguments.length ? (n = C, w) : n;
  }, w.duration = function(C) {
    return arguments.length ? (a = +C, w) : a;
  }, w.interpolate = function(C) {
    return arguments.length ? (l = C, w) : l;
  }, w.on = function() {
    var C = u.on.apply(u, arguments);
    return C === u ? w : C;
  }, w.clickDistance = function(C) {
    return arguments.length ? (b = (C = +C) * C, w) : Math.sqrt(b);
  }, w.tapDistance = function(C) {
    return arguments.length ? (v = +C, w) : v;
  }, w;
}
const ti = {
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
}, Aa = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], yf = ["Enter", " ", "Escape"], My = {
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
var wo;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(wo || (wo = {}));
var Kr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kr || (Kr = {}));
var hs;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hs || (hs = {}));
const Va = {
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
var Fn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Fn || (Fn = {}));
var ni;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ni || (ni = {}));
var _e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(_e || (_e = {}));
const Iu = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function Ay(e, t) {
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
function ju(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Vy(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const bf = (e) => "id" in e && "source" in e && "target" in e, Dy = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), El = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), mi = (e, t = [0, 0]) => {
  const { width: n, height: r } = Nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Ly = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : El(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? gs(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ws(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ys(n);
}, yi = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Ws(n, gs(o)), r = !0);
  }), r ? Ys(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Pl = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...wi(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, b = ri(a, ko(u)), v = (h ?? 0) * (g ?? 0), w = i && b > 0;
    (!u.internals.handleBounds || w || b >= v || u.dragging) && l.push(u);
  }
  return l;
}, Hy = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Iy(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function jy({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Iy(e, s), l = yi(a), u = Ol(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function wf({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", ti.error005());
    else {
      const h = a.measured.width, g = a.measured.height;
      h && g && (f = [
        [l, u],
        [l + h, u + g]
      ]);
    }
  else a && Co(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = Co(f) ? Gr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", ti.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function Ry({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), h = !p && f.parentId && s.find((g) => g.id === f.parentId);
    (p || h) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = Hy(s, l);
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
const xo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Gr = (e = { x: 0, y: 0 }, t, n) => ({
  x: xo(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: xo(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function xf(e, t, n) {
  const { width: r, height: o } = Nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Gr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ru = (e, t, n) => e < t ? xo(Math.abs(e - t), 1, t) / t : e > n ? -xo(Math.abs(e - n), 1, t) / t : 0, kf = (e, t, n = 15, r = 40) => {
  const o = Ru(e.x, r, t.width - r) * n, i = Ru(e.y, r, t.height - r) * n;
  return [o, i];
}, Ws = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Da = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ys = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), ko = (e, t = [0, 0]) => {
  const { x: n, y: r } = El(e) ? e.internals.positionAbsolute : mi(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, gs = (e, t = [0, 0]) => {
  const { x: n, y: r } = El(e) ? e.internals.positionAbsolute : mi(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Cf = (e, t) => Ys(Ws(Da(e), Da(t))), ri = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zu = (e) => Un(e.width) && Un(e.height) && Un(e.x) && Un(e.y), Un = (e) => !isNaN(e) && isFinite(e), Zy = (e, t) => {
}, bi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), wi = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? bi(a, s) : a;
}, vs = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function so(e, t) {
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
function Ky(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = so(e, n), o = so(e, t);
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
    const r = so(e.top ?? e.y ?? 0, n), o = so(e.bottom ?? e.y ?? 0, n), i = so(e.left ?? e.x ?? 0, t), s = so(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function By(e, t, n, r, o, i) {
  const { x: s, y: a } = vs(e, [t, n, r]), { x: l, y: u } = vs({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Ol = (e, t, n, r, o, i) => {
  const s = Ky(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = xo(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, b = By(e, h, g, d, t, n), v = {
    left: Math.min(b.left - s.left, 0),
    top: Math.min(b.top - s.top, 0),
    right: Math.min(b.right - s.right, 0),
    bottom: Math.min(b.bottom - s.bottom, 0)
  };
  return {
    x: h - v.left + v.right,
    y: g - v.top + v.bottom,
    zoom: d
  };
}, Hr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Co(e) {
  return e != null && e !== "parent";
}
function Nr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function $f(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Wy(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Yy(e) {
  return { ...My, ...e || {} };
}
function ua(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = xn(e), a = wi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? bi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _f = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Sf = (e) => e?.getRootNode?.() || window?.document, Xy = ["INPUT", "SELECT", "TEXTAREA"];
function Ef(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Xy.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Pf = (e) => "clientX" in e, xn = (e, t) => {
  const n = Pf(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ku = (e, t, n, r, o) => {
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
      ..._f(s)
    };
  });
};
function qy({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function Di(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Bu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case _e.Left:
      return [t - Di(t - r, i), n];
    case _e.Right:
      return [t + Di(r - t, i), n];
    case _e.Top:
      return [t, n - Di(n - o, i)];
    case _e.Bottom:
      return [t, n + Di(o - n, i)];
  }
}
function Of({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = Bu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Bu({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = qy({
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
function Nf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Fy({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Gy({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ws(gs(e), gs(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ri(s, Ys(i)) > 0;
}
const Uy = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Jy = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Qy = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return bf(e) ? n = { ...e } : n = {
    ...e,
    id: Uy(e)
  }, Jy(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Tf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Nf({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Wu = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, e2 = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) => t === _e.Left || t === _e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Yu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function t2({ source: e, sourcePosition: t = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Wu[t], l = Wu[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = e2({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], b, v;
  const w = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , _, k] = Nf({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (b = o.x ?? u.x + (d.x - u.x) * s, v = o.y ?? (u.y + d.y) / 2) : (b = o.x ?? (u.x + d.x) / 2, v = o.y ?? u.y + (d.y - u.y) * s);
    const $ = [
      { x: b, y: u.y },
      { x: b, y: d.y }
    ], T = [
      { x: u.x, y: v },
      { x: d.x, y: v }
    ];
    a[p] === h ? g = p === "x" ? $ : T : g = p === "x" ? T : $;
  } else {
    const $ = [{ x: u.x, y: d.y }], T = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? T : $ : g = a.y === h ? $ : T, t === r) {
      const A = Math.abs(e[p] - n[p]);
      if (A <= i) {
        const P = Math.min(i - 1, i - A);
        a[p] === h ? w[p] = (u[p] > e[p] ? -1 : 1) * P : x[p] = (d[p] > n[p] ? -1 : 1) * P;
      }
    }
    if (t !== r) {
      const A = p === "x" ? "y" : "x", P = a[p] === l[A], z = u[A] > d[A], C = u[A] < d[A];
      (a[p] === 1 && (!P && z || P && C) || a[p] !== 1 && (!P && C || P && z)) && (g = p === "x" ? $ : T);
    }
    const V = { x: u.x + w.x, y: u.y + w.y }, D = { x: d.x + x.x, y: d.y + x.y }, H = Math.max(Math.abs(V.x - g[0].x), Math.abs(D.x - g[0].x)), R = Math.max(Math.abs(V.y - g[0].y), Math.abs(D.y - g[0].y));
    H >= R ? (b = (V.x + D.x) / 2, v = g[0].y) : (b = g[0].x, v = (V.y + D.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...g,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], b, v, _, k];
}
function n2(e, t, n, r) {
  const o = Math.min(Yu(e, t) / 2, Yu(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Nl({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, b] = t2({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((v, w, x) => {
    let _ = "";
    return x > 0 && x < f.length - 1 ? _ = n2(f[x - 1], w, f[x + 1], s) : _ = `${x === 0 ? "M" : "L"}${w.x} ${w.y}`, v += _, v;
  }, ""), p, h, g, b];
}
function Xu(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function r2(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Xu(t) || !Xu(n))
    return null;
  const r = t.internals.handleBounds || qu(t.handles), o = n.internals.handleBounds || qu(n.handles), i = Fu(r?.source ?? [], e.sourceHandle), s = Fu(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === wo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", ti.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = oi(t, i, a), d = oi(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function qu(e) {
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
function oi(e, t, n = _e.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case _e.Top:
      return { x: o + s / 2, y: i };
    case _e.Right:
      return { x: o + s, y: i + a / 2 };
    case _e.Bottom:
      return { x: o + s / 2, y: i + a };
    case _e.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Fu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function La(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function o2(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = La(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function i2(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case _e.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case _e.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case _e.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const zf = 1e3, s2 = 10, Tl = {
  nodeOrigin: [0, 0],
  nodeExtent: Aa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, a2 = {
  ...Tl,
  checkEquality: !0
};
function zl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function l2(e, t, n) {
  const r = zl(Tl, n);
  for (const o of e.values())
    if (o.parentId)
      Ml(o, e, t, r);
    else {
      const i = mi(o, r.nodeOrigin), s = Co(o.extent) ? o.extent : r.nodeExtent, a = Gr(i, s, Nr(o));
      o.internals.positionAbsolute = a;
    }
}
function u2(e, t) {
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
function c2(e, t, n, r) {
  const o = zl(a2, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? zf : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const f = mi(u, o.nodeOrigin), p = Co(u.extent) ? u.extent : o.nodeExtent, h = Gr(f, p, Nr(u));
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
          handleBounds: u2(u, d),
          z: Mf(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Ml(d, t, n, r, i);
  }
  return s;
}
function d2(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ml(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = zl(Tl, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  d2(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * s2), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? zf : 0, { x: f, y: p, z: h } = f2(e, u, s, a, d), { positionAbsolute: g } = e.internals, b = f !== g.x || p !== g.y;
  (b || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: b ? { x: f, y: p } : g,
      z: h
    }
  });
}
function Mf(e, t) {
  return (Un(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function f2(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Nr(e), l = mi(e, n), u = Co(e.extent) ? Gr(l, e.extent, a) : l;
  let d = Gr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = xf(d, a, t));
  const f = Mf(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function p2(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? ko(a), u = Cf(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Nr(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), b = Math.max(d.height, Math.round(s.height)), v = (g - d.width) * f[0], w = (b - d.height) * f[1];
    (p > 0 || h > 0 || v || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + v,
        y: a.position.y - h + w
      }
    }), n.get(l)?.forEach((x) => {
      e.some((_) => _.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + p,
          y: x.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || p || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (p ? f[0] * p - v : 0),
        height: b + (h ? f[1] * h - w : 0)
      }
    });
  }), o;
}
function h2(e, t, n, r, o, i) {
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
    const g = _f(p.nodeElement), b = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (b || !h.internals.handleBounds || p.force)) {
      const v = p.nodeElement.getBoundingClientRect(), w = Co(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = xf(x, g, t.get(h.parentId)) : w && (x = Gr(x, w, g));
      const _ = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Ku("source", p.nodeElement, v, d, h.id),
            target: Ku("target", p.nodeElement, v, d, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && Ml(_, t, n, { nodeOrigin: o }), a = !0, b && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: ko(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = p2(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function g2({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Gu(e, t, n, r, o, i) {
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
function v2(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Gu("source", l, d, e, o, s), Gu("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function m2(e, t) {
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
function Af(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Af(n, t) : !1;
}
function Uu(e, t, n) {
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
function y2(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Af(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ca({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function b2({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = bi(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function w2({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, b = null;
  function v({ noDragClassName: x, handleSelector: _, domNode: k, isSelectable: $, nodeId: T, nodeClickDistance: V = 0 }) {
    p = fn(k);
    function D({ x: P, y: z }) {
      const { nodeLookup: C, nodeExtent: S, snapGrid: E, snapToGrid: j, nodeOrigin: Y, onNodeDrag: F, onSelectionDrag: N, onError: X, updateNodePositions: ee } = t();
      i = { x: P, y: z };
      let q = !1;
      const K = a.size > 1, W = K && S ? Da(yi(a)) : null, G = K && j ? b2({
        dragItems: a,
        snapGrid: E,
        x: P,
        y: z
      }) : null;
      for (const [ne, re] of a) {
        if (!C.has(ne))
          continue;
        let Q = { x: P - re.distance.x, y: z - re.distance.y };
        j && (Q = G ? {
          x: Math.round(Q.x + G.x),
          y: Math.round(Q.y + G.y)
        } : bi(Q, E));
        let ge = null;
        if (K && S && !re.extent && W) {
          const { positionAbsolute: le } = re.internals, ve = le.x - W.x + S[0][0], we = le.x + re.measured.width - W.x2 + S[1][0], xe = le.y - W.y + S[0][1], pe = le.y + re.measured.height - W.y2 + S[1][1];
          ge = [
            [ve, xe],
            [we, pe]
          ];
        }
        const { position: ce, positionAbsolute: ie } = wf({
          nodeId: ne,
          nextPosition: Q,
          nodeLookup: C,
          nodeExtent: ge || S,
          nodeOrigin: Y,
          onError: X
        });
        q = q || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = ie;
      }
      if (g = g || q, !!q && (ee(a, !0), b && (r || F || !T && N))) {
        const [ne, re] = ca({
          nodeId: T,
          dragItems: a,
          nodeLookup: C
        });
        r?.(b, a, ne, re), F?.(b, ne, re), T || N?.(b, re);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: P, panBy: z, autoPanSpeed: C, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, j] = kf(u, d, C);
      (E !== 0 || j !== 0) && (i.x = (i.x ?? 0) - E / P[2], i.y = (i.y ?? 0) - j / P[2], await z({ x: E, y: j }) && D(i)), s = requestAnimationFrame(H);
    }
    function R(P) {
      const { nodeLookup: z, multiSelectionActive: C, nodesDraggable: S, transform: E, snapGrid: j, snapToGrid: Y, selectNodesOnDrag: F, onNodeDragStart: N, onSelectionDragStart: X, unselectNodesAndEdges: ee } = t();
      f = !0, (!F || !$) && !C && T && (z.get(T)?.selected || ee()), $ && F && T && e?.(T);
      const q = ua(P.sourceEvent, { transform: E, snapGrid: j, snapToGrid: Y, containerBounds: d });
      if (i = q, a = y2(z, S, q, T), a.size > 0 && (n || N || !T && X)) {
        const [K, W] = ca({
          nodeId: T,
          dragItems: a,
          nodeLookup: z
        });
        n?.(P.sourceEvent, a, K, W), N?.(P.sourceEvent, K, W), T || X?.(P.sourceEvent, W);
      }
    }
    const A = jm().clickDistance(V).on("start", (P) => {
      const { domNode: z, nodeDragThreshold: C, transform: S, snapGrid: E, snapToGrid: j } = t();
      d = z?.getBoundingClientRect() || null, h = !1, g = !1, b = P.sourceEvent, C === 0 && R(P), i = ua(P.sourceEvent, { transform: S, snapGrid: E, snapToGrid: j, containerBounds: d }), u = xn(P.sourceEvent, d);
    }).on("drag", (P) => {
      const { autoPanOnNodeDrag: z, transform: C, snapGrid: S, snapToGrid: E, nodeDragThreshold: j, nodeLookup: Y } = t(), F = ua(P.sourceEvent, { transform: C, snapGrid: S, snapToGrid: E, containerBounds: d });
      if (b = P.sourceEvent, (P.sourceEvent.type === "touchmove" && P.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !Y.has(T)) && (h = !0), !h) {
        if (!l && z && f && (l = !0, H()), !f) {
          const N = xn(P.sourceEvent, d), X = N.x - u.x, ee = N.y - u.y;
          Math.sqrt(X * X + ee * ee) > j && R(P);
        }
        (i.x !== F.xSnapped || i.y !== F.ySnapped) && a && f && (u = xn(P.sourceEvent, d), D(F));
      }
    }).on("end", (P) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: C, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (g && (C(a, !1), g = !1), o || S || !T && E) {
          const [j, Y] = ca({
            nodeId: T,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o?.(P.sourceEvent, a, j, Y), S?.(P.sourceEvent, j, Y), T || E?.(P.sourceEvent, Y);
        }
      }
    }).filter((P) => {
      const z = P.target;
      return !P.button && (!x || !Uu(z, `.${x}`, k)) && (!_ || Uu(z, _, k));
    });
    p.call(A);
  }
  function w() {
    p?.on(".drag", null);
  }
  return {
    update: v,
    destroy: w
  };
}
function x2(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ri(o, ko(i)) > 0 && r.push(i);
  return r;
}
const k2 = 250;
function C2(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = x2(e, n, t + k2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = oi(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
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
function Vf(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...oi(s, l, l.position, !0) } : l;
}
function Df(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function $2(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Lf = () => !0;
function _2(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: b, onConnectEnd: v, isValidConnection: w = Lf, onReconnectEnd: x, updateConnection: _, getTransform: k, getFromHandle: $, autoPanSpeed: T, dragThreshold: V = 1, handleDomNode: D }) {
  const H = Sf(e.target);
  let R = 0, A;
  const { x: P, y: z } = xn(e), C = Df(i, D), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !C)
    return;
  const j = Vf(o, C, r, l, t);
  if (!j)
    return;
  let Y = xn(e, S), F = !1, N = null, X = !1, ee = null;
  function q() {
    if (!d || !S)
      return;
    const [ge, ce] = kf(Y, S, T);
    p({ x: ge, y: ce }), R = requestAnimationFrame(q);
  }
  const K = {
    ...j,
    nodeId: o,
    type: C,
    position: j.position
  }, W = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: oi(W, K, _e.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: W,
    to: Y,
    toHandle: null,
    toPosition: Iu[K.position],
    toNode: null,
    pointer: Y
  };
  function ne() {
    E = !0, _(G), g?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  V === 0 && ne();
  function re(ge) {
    if (!E) {
      const { x: ve, y: we } = xn(ge), xe = ve - P, pe = we - z;
      if (!(xe * xe + pe * pe > V * V))
        return;
      ne();
    }
    if (!$() || !K) {
      Q(ge);
      return;
    }
    const ce = k();
    Y = xn(ge, S), A = C2(wi(Y, ce, !1, [1, 1]), n, l, K), F || (q(), F = !0);
    const ie = Hf(ge, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: H,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    ee = ie.handleDomNode, N = ie.connection, X = $2(!!A, ie.isValid);
    const le = {
      // from stays the same
      ...G,
      isValid: X,
      to: ie.toHandle && X ? vs({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : Y,
      toHandle: ie.toHandle,
      toPosition: X && ie.toHandle ? ie.toHandle.position : Iu[K.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: Y
    };
    _(le), G = le;
  }
  function Q(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (E) {
        (A || ee) && N && X && b?.(N);
        const { inProgress: ce, ...ie } = G, le = {
          ...ie,
          toPosition: G.toHandle ? G.toPosition : null
        };
        v?.(ge, le), i && x?.(ge, le);
      }
      h(), cancelAnimationFrame(R), F = !1, X = !1, N = null, ee = null, H.removeEventListener("mousemove", re), H.removeEventListener("mouseup", Q), H.removeEventListener("touchmove", re), H.removeEventListener("touchend", Q);
    }
  }
  H.addEventListener("mousemove", re), H.addEventListener("mouseup", Q), H.addEventListener("touchmove", re), H.addEventListener("touchend", Q);
}
function Hf(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Lf, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = xn(e), b = s.elementFromPoint(h, g), v = b?.classList.contains(`${a}-flow__handle`) ? b : p, w = {
    handleDomNode: v,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (v) {
    const x = Df(void 0, v), _ = v.getAttribute("data-nodeid"), k = v.getAttribute("data-handleid"), $ = v.classList.contains("connectable"), T = v.classList.contains("connectableend");
    if (!_ || !x)
      return w;
    const V = {
      source: f ? _ : r,
      sourceHandle: f ? k : o,
      target: f ? r : _,
      targetHandle: f ? o : k
    };
    w.connection = V;
    const D = $ && T && (n === wo.Strict ? f && x === "source" || !f && x === "target" : _ !== r || k !== o);
    w.isValid = D && u(V), w.toHandle = Vf(_, x, k, d, n, !0);
  }
  return w;
}
const Ju = {
  onPointerDown: _2,
  isValid: Hf
};
function S2({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), $ = _.sourceEvent.ctrlKey && Hr() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = k[2] * Math.pow(2, T * $);
      t.scaleTo(V);
    };
    let b = [0, 0];
    const v = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, w = (_) => {
      const k = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [$[0] - b[0], $[1] - b[1]];
      b = $;
      const V = r() * Math.max(k[2], Math.log(k[2])) * (h ? -1 : 1), D = {
        x: k[0] - T[0] * V,
        y: k[1] - T[1] * V
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: k[2]
      }, H, a);
    }, x = mf().on("start", v).on("zoom", f ? w : null).on("zoom.wheel", p ? g : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: yn
  };
}
const Xs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), da = ({ x: e, y: t, zoom: n }) => Bs.translate(e, t).scale(n), lo = (e, t) => e.target.closest(`.${t}`), If = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), E2 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, fa = (e, t = 0, n = E2, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, jf = (e) => {
  const t = e.ctrlKey && Hr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function P2({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (lo(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const v = yn(d), w = jf(d), x = f * Math.pow(2, w);
      r.scaleTo(n, x, v, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === Kr.Vertical ? 0 : d.deltaX * p, g = o === Kr.Horizontal ? 0 : d.deltaY * p;
    !Hr() && d.shiftKey && o !== Kr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Xs(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, b), e.panScrollTimeout = setTimeout(() => {
      u?.(d, b), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, b));
  };
}
function O2({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = lo(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function N2({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Xs(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function T2({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && If(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Xs(i.transform));
  };
}
function z2({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && If(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Xs(s.transform);
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
function M2({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (f) => {
    const p = e || t, h = n && f.ctrlKey, g = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (lo(f, `${u}-flow__node`) || lo(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || lo(f, a) && g || lo(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const b = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && b;
  };
}
function A2({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = mf().scaleExtent([t, n]).translateExtent(r), p = fn(e).call(f);
  x({
    x: o.x,
    y: o.y,
    zoom: xo(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = p.on("wheel.zoom"), g = p.on("dblclick.zoom");
  f.wheelDelta(jf);
  function b(A, P) {
    return p ? new Promise((z) => {
      f?.interpolate(P?.interpolate === "linear" ? Yo : qi).transform(fa(p, P?.duration, P?.ease, () => z(!0)), A);
    }) : Promise.resolve(!1);
  }
  function v({ noWheelClassName: A, noPanClassName: P, onPaneContextMenu: z, userSelectionActive: C, panOnScroll: S, panOnDrag: E, panOnScrollMode: j, panOnScrollSpeed: Y, preventScrolling: F, zoomOnPinch: N, zoomOnScroll: X, zoomOnDoubleClick: ee, zoomActivationKeyPressed: q, lib: K, onTransformChange: W, connectionInProgress: G, paneClickDistance: ne, selectionOnDrag: re }) {
    C && !u.isZoomingOrPanning && w();
    const Q = S && !q && !C;
    f.clickDistance(re ? 1 / 0 : !Un(ne) || ne < 0 ? 0 : ne);
    const ge = Q ? P2({
      zoomPanValues: u,
      noWheelClassName: A,
      d3Selection: p,
      d3Zoom: f,
      panOnScrollMode: j,
      panOnScrollSpeed: Y,
      zoomOnPinch: N,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : O2({
      noWheelClassName: A,
      preventScrolling: F,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", ge, { passive: !1 }), !C) {
      const ie = N2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      f.on("start", ie);
      const le = T2({
        zoomPanValues: u,
        panOnDrag: E,
        onPaneContextMenu: !!z,
        onPanZoom: i,
        onTransformChange: W
      });
      f.on("zoom", le);
      const ve = z2({
        zoomPanValues: u,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: z,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      f.on("end", ve);
    }
    const ce = M2({
      zoomActivationKeyPressed: q,
      panOnDrag: E,
      zoomOnScroll: X,
      panOnScroll: S,
      zoomOnDoubleClick: ee,
      zoomOnPinch: N,
      userSelectionActive: C,
      noPanClassName: P,
      noWheelClassName: A,
      lib: K,
      connectionInProgress: G
    });
    f.filter(ce), ee ? p.on("dblclick.zoom", g) : p.on("dblclick.zoom", null);
  }
  function w() {
    f.on("zoom", null);
  }
  async function x(A, P, z) {
    const C = da(A), S = f?.constrain()(C, P, z);
    return S && await b(S), new Promise((E) => E(S));
  }
  async function _(A, P) {
    const z = da(A);
    return await b(z, P), new Promise((C) => C(z));
  }
  function k(A) {
    if (p) {
      const P = da(A), z = p.property("__zoom");
      (z.k !== A.zoom || z.x !== A.x || z.y !== A.y) && f?.transform(p, P, null, { sync: !0 });
    }
  }
  function $() {
    const A = p ? vf(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function T(A, P) {
    return p ? new Promise((z) => {
      f?.interpolate(P?.interpolate === "linear" ? Yo : qi).scaleTo(fa(p, P?.duration, P?.ease, () => z(!0)), A);
    }) : Promise.resolve(!1);
  }
  function V(A, P) {
    return p ? new Promise((z) => {
      f?.interpolate(P?.interpolate === "linear" ? Yo : qi).scaleBy(fa(p, P?.duration, P?.ease, () => z(!0)), A);
    }) : Promise.resolve(!1);
  }
  function D(A) {
    f?.scaleExtent(A);
  }
  function H(A) {
    f?.translateExtent(A);
  }
  function R(A) {
    const P = !Un(A) || A < 0 ? 0 : A;
    f?.clickDistance(P);
  }
  return {
    update: v,
    destroy: w,
    setViewport: _,
    setViewportConstrained: x,
    getViewport: $,
    scaleTo: T,
    scaleBy: V,
    setScaleExtent: D,
    setTranslateExtent: H,
    syncViewport: k,
    setClickDistance: R
  };
}
var Qu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Qu || (Qu = {}));
var V2 = /* @__PURE__ */ te("<div><!></div>");
function $r(e, t) {
  de(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => _e.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), u = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), f = y(t, "onconnect", 7), p = y(t, "ondisconnect", 7), h = y(t, "children", 7), g = /* @__PURE__ */ We(t, [
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
  const b = Cn("svelteflow__node_id"), v = Cn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ O(() => r() === "target"), x = /* @__PURE__ */ O(() => a() !== void 0 ? a() : v.value), _ = En(), k = /* @__PURE__ */ O(() => _.ariaLabelConfig), $ = null;
  tn(() => {
    if (f() || p()) {
      _.edges;
      let N = _.connectionLookup.get(`${b}-${r()}${n() ? `-${n()}` : ""}`);
      if ($ && !Ay(N, $)) {
        const X = N ?? /* @__PURE__ */ new Map();
        ju($, X, p()), ju(X, $, f());
      }
      $ = new Map(N);
    }
  });
  let T = /* @__PURE__ */ O(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: N, toHandle: X, isValid: ee } = _.connection, q = N && N.nodeId === b && N.type === r() && N.id === n(), K = X && X.nodeId === b && X.type === r() && X.id === n(), W = _.connectionMode === wo.Strict ? N?.type !== r() : b !== N?.nodeId || n() !== N?.id;
    return [
      !0,
      q,
      K,
      W,
      K && ee
    ];
  }), V = /* @__PURE__ */ O(() => _o(c(T), 5)), D = /* @__PURE__ */ O(() => c(V)[0]), H = /* @__PURE__ */ O(() => c(V)[1]), R = /* @__PURE__ */ O(() => c(V)[2]), A = /* @__PURE__ */ O(() => c(V)[3]), P = /* @__PURE__ */ O(() => c(V)[4]);
  function z(N) {
    const X = _.onbeforeconnect ? _.onbeforeconnect(N) : N;
    X && (_.addEdge(X), _.onconnect?.(N));
  }
  function C(N) {
    const X = Pf(N);
    N.currentTarget && (X && N.button === 0 || !X) && Ju.onPointerDown(N, {
      handleId: n(),
      nodeId: b,
      isTarget: c(w),
      connectionRadius: _.connectionRadius,
      domNode: _.domNode,
      nodeLookup: _.nodeLookup,
      connectionMode: _.connectionMode,
      lib: "svelte",
      autoPanOnConnect: _.autoPanOnConnect,
      autoPanSpeed: _.autoPanSpeed,
      flowId: _.flowId,
      isValidConnection: d() ?? _.isValidConnection,
      updateConnection: _.updateConnection,
      cancelConnection: _.cancelConnection,
      panBy: _.panBy,
      onConnect: z,
      onConnectStart: (ee, q) => {
        _.onconnectstart?.(ee, {
          nodeId: q.nodeId,
          handleId: q.handleId,
          handleType: q.handleType
        });
      },
      onConnectEnd: (ee, q) => {
        _.onconnectend?.(ee, q);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold,
      handleDomNode: N.currentTarget
    });
  }
  function S(N) {
    if (!b || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(N, { nodeId: b, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: b, type: r(), id: n() };
      return;
    }
    const X = Sf(N.target), ee = d() ?? _.isValidConnection, { connectionMode: q, clickConnectStartHandle: K, flowId: W, nodeLookup: G } = _, { connection: ne, isValid: re } = Ju.isValid(N, {
      handle: { nodeId: b, id: n(), type: r() },
      connectionMode: q,
      fromNodeId: K.nodeId,
      fromHandleId: K.id ?? null,
      fromType: K.type,
      isValidConnection: ee,
      flowId: W,
      doc: X,
      lib: "svelte",
      nodeLookup: G
    });
    re && ne && z(ne);
    const Q = structuredClone(ll(_.connection));
    delete Q.inProgress, Q.toPosition = Q.toHandle ? Q.toHandle.position : null, _.onclickconnectend?.(N, Q), _.clickConnectStartHandle = null;
  }
  var E = {
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
    set position(N = _e.Top) {
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
      return f();
    },
    set onconnect(N) {
      f(N), m();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(N) {
      p(N), m();
    },
    get children() {
      return h();
    },
    set children(N) {
      h(N), m();
    }
  }, j = V2(), Y = () => {
  };
  it(j, () => ({
    "data-handleid": n(),
    "data-nodeid": b,
    "data-handlepos": o(),
    "data-id": `${_.flowId ?? ""}-${b ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      _.noDragClass,
      _.noPanClass,
      o(),
      s()
    ],
    onmousedown: C,
    ontouchstart: C,
    onclick: _.clickConnect ? S : void 0,
    onkeypress: Y,
    style: i(),
    role: "button",
    "aria-label": c(k)["handle.ariaLabel"],
    tabindex: "-1",
    ...g,
    [gr]: {
      valid: c(P),
      connectingto: c(R),
      connectingfrom: c(H),
      source: !c(w),
      target: c(w),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(D) || c(A)) && (c(D) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var F = B(j);
  return tt(F, () => h() ?? pt), Z(j), M(e, j), fe(E);
}
ue(
  $r,
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
var D2 = /* @__PURE__ */ te("<!> <!>", 1);
function Al(e, t) {
  de(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => _e.Top), o = y(t, "sourcePosition", 23, () => _e.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = _e.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = _e.Bottom) {
      o(d), m();
    }
  }, s = D2(), a = oe(s);
  $r(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = L(a), u = L(l);
  return $r(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Oe(() => rt(l, ` ${n()?.label ?? ""} `)), M(e, s), fe(i);
}
ue(Al, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var L2 = /* @__PURE__ */ te(" <!>", 1);
function Rf(e, t) {
  de(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => _e.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), m();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = _e.Bottom) {
      r(l), m();
    }
  };
  Ce();
  var i = L2(), s = oe(i), a = L(s);
  return $r(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Oe(() => rt(s, `${n()?.label ?? ""} `)), M(e, i), fe(o);
}
ue(Rf, { data: {}, sourcePosition: {} }, [], [], !0);
var H2 = /* @__PURE__ */ te(" <!>", 1);
function Zf(e, t) {
  de(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => _e.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = _e.Top) {
      r(l), m();
    }
  };
  Ce();
  var i = H2(), s = oe(i), a = L(s);
  return $r(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Oe(() => rt(s, `${n()?.label ?? ""} `)), M(e, i), fe(o);
}
ue(Zf, { data: {}, targetPosition: {} }, [], [], !0);
function Kf(e, t) {
}
ue(Kf, {}, [], [], !0);
function pa(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Bf(e, t) {
  const n = /* @__PURE__ */ O(En), r = /* @__PURE__ */ O(() => c(n).domNode);
  let o;
  return c(r) ? pa(e, c(r), t) : o = Po(() => {
    st(() => {
      pa(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      pa(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Wf() {
  let e = /* @__PURE__ */ Me(typeof window > "u");
  if (c(e)) {
    const t = Po(() => {
      st(() => {
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
const ec = (e) => Dy(e), I2 = (e) => bf(e);
function jn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const ms = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var j2 = /* @__PURE__ */ te("<div><!></div>");
const R2 = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Yf(e, t) {
  de(t, !0), Je(e, R2);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), u = y(t, "children", 7), d = /* @__PURE__ */ We(t, [
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
  const f = En(), p = Cn("svelteflow__edge_id");
  if (!p)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ O(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(x = 0) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x = 0) {
      r(x), m();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), m();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(x = !1) {
      s(x), m();
    },
    get transparent() {
      return a();
    },
    set transparent(x = !1) {
      a(x), m();
    },
    get class() {
      return l();
    },
    set class(x) {
      l(x), m();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), m();
    }
  }, b = j2(), v = () => {
    s() && f.handleEdgeSelection(p);
  };
  it(
    b,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: v,
      ...d,
      [Mn]: x
    }),
    [
      () => ({
        display: Wf().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: jn(o()),
        height: jn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var w = B(b);
  return tt(w, () => u() ?? pt), Z(b), Mt(b, (x, _) => Bf?.(x, _), () => "edge-labels"), M(e, b), fe(g);
}
ue(
  Yf,
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
var Z2 = /* @__PURE__ */ ke("<path></path>"), K2 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function xi(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "style", 7), f = y(t, "interactionWidth", 7, 20), p = y(t, "class", 7), h = /* @__PURE__ */ We(t, [
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
      return f();
    },
    set interactionWidth($ = 20) {
      f($), m();
    },
    get class() {
      return p();
    },
    set class($) {
      p($), m();
    }
  }, b = K2(), v = oe(b), w = L(v);
  {
    var x = ($) => {
      var T = Z2();
      it(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), M($, T);
    };
    ae(w, ($) => {
      f() > 0 && $(x);
    });
  }
  var _ = L(w);
  {
    var k = ($) => {
      Yf($, {
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
        children: (T, V) => {
          Ce();
          var D = Te();
          Oe(() => rt(D, o())), M(T, D);
        },
        $$slots: { default: !0 }
      });
    };
    ae(_, ($) => {
      o() && $(k);
    });
  }
  return Oe(() => {
    Pe(v, "id", n()), Pe(v, "d", r()), Ut(v, 0, ur(["svelte-flow__edge-path", p()])), Pe(v, "marker-start", l()), Pe(v, "marker-end", u()), zt(v, d());
  }), M(e, b), fe(g);
}
ue(
  xi,
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
function Vl(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), u = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), f = y(t, "sourceY", 7), p = y(t, "style", 7), h = y(t, "targetPosition", 7), g = y(t, "targetX", 7), b = y(t, "targetY", 7), v = /* @__PURE__ */ O(() => Of({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: b(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ O(() => _o(c(v), 3)), x = /* @__PURE__ */ O(() => c(w)[0]), _ = /* @__PURE__ */ O(() => c(w)[1]), k = /* @__PURE__ */ O(() => c(w)[2]);
  var $ = {
    get id() {
      return n();
    },
    set id(T) {
      n(T), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(T) {
      r(T), m();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(T) {
      i(T), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(T) {
      s(T), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(T) {
      a(T), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(T) {
      l(T), m();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(T) {
      u(T), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(T) {
      d(T), m();
    },
    get sourceY() {
      return f();
    },
    set sourceY(T) {
      f(T), m();
    },
    get style() {
      return p();
    },
    set style(T) {
      p(T), m();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(T) {
      h(T), m();
    },
    get targetX() {
      return g();
    },
    set targetX(T) {
      g(T), m();
    },
    get targetY() {
      return b();
    },
    set targetY(T) {
      b(T), m();
    }
  };
  return xi(e, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c(_);
    },
    get labelY() {
      return c(k);
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
  }), fe($);
}
ue(
  Vl,
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
function Xf(e, t) {
  de(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), u = y(t, "sourceX", 7), d = y(t, "sourceY", 7), f = y(t, "targetPosition", 7), p = y(t, "targetX", 7), h = y(t, "targetY", 7), g = /* @__PURE__ */ O(() => Nl({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), b = /* @__PURE__ */ O(() => _o(c(g), 3)), v = /* @__PURE__ */ O(() => c(b)[0]), w = /* @__PURE__ */ O(() => c(b)[1]), x = /* @__PURE__ */ O(() => c(b)[2]);
  var _ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), m();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), m();
    },
    get style() {
      return i();
    },
    set style(k) {
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
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), m();
    },
    get sourceX() {
      return u();
    },
    set sourceX(k) {
      u(k), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), m();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(k) {
      f(k), m();
    },
    get targetX() {
      return p();
    },
    set targetX(k) {
      p(k), m();
    },
    get targetY() {
      return h();
    },
    set targetY(k) {
      h(k), m();
    }
  };
  return xi(e, {
    get path() {
      return c(v);
    },
    get labelX() {
      return c(w);
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
  }), fe(_);
}
ue(
  Xf,
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
function qf(e, t) {
  de(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), f = y(t, "style", 7), p = /* @__PURE__ */ O(() => Tf({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ O(() => _o(c(p), 3)), g = /* @__PURE__ */ O(() => c(h)[0]), b = /* @__PURE__ */ O(() => c(h)[1]), v = /* @__PURE__ */ O(() => c(h)[2]);
  var w = {
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
    get targetX() {
      return o();
    },
    set targetX(x) {
      o(x), m();
    },
    get targetY() {
      return i();
    },
    set targetY(x) {
      i(x), m();
    },
    get label() {
      return s();
    },
    set label(x) {
      s(x), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get style() {
      return f();
    },
    set style(x) {
      f(x), m();
    }
  };
  return xi(e, {
    get path() {
      return c(g);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(v);
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
  }), fe(w);
}
ue(
  qf,
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
function Ff(e, t) {
  de(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), u = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), f = y(t, "markerEnd", 7), p = y(t, "interactionWidth", 7), h = y(t, "style", 7), g = /* @__PURE__ */ O(() => Nl({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), b = /* @__PURE__ */ O(() => _o(c(g), 3)), v = /* @__PURE__ */ O(() => c(b)[0]), w = /* @__PURE__ */ O(() => c(b)[1]), x = /* @__PURE__ */ O(() => c(b)[2]);
  var _ = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), m();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), m();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), m();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), m();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(k) {
      u(k), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), m();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(k) {
      f(k), m();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(k) {
      p(k), m();
    },
    get style() {
      return h();
    },
    set style(k) {
      h(k), m();
    }
  };
  return xi(e, {
    get path() {
      return c(v);
    },
    get labelX() {
      return c(w);
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
      return f();
    },
    get interactionWidth() {
      return p();
    },
    get style() {
      return h();
    }
  }), fe(_);
}
ue(
  Ff,
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
class B2 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Eo(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const W2 = /\(.+\)/, Y2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Gf extends B2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = W2.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Y2.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => In(o, "change", i)
    );
  }
}
function X2(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Pl(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function tc(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: b, transform: v, width: w, height: x } = e;
      if (Gy({
        sourceNode: f,
        targetNode: p,
        width: w,
        height: x,
        transform: v
      }))
        b.set(f.id, f), b.set(p.id, p);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && f == h.sourceNode && p == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const g = r2({
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
      zIndex: Fy({
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
const Uf = {
  input: Rf,
  output: Zf,
  default: Al,
  group: Kf
}, Jf = {
  straight: qf,
  smoothstep: Xf,
  default: Vl,
  step: Ff
};
function q2(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = yi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Ol(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function F2(e) {
  class t {
    #t = /* @__PURE__ */ O(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      J(this.#t, r);
    }
    #e = /* @__PURE__ */ Me(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      J(this.#e, r);
    }
    #n = /* @__PURE__ */ Me(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      J(this.#n, r);
    }
    #r = /* @__PURE__ */ Me(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      J(this.#r, r);
    }
    #i = /* @__PURE__ */ Me(e.height ?? 0);
    get height() {
      return c(this.#i);
    }
    set height(r) {
      J(this.#i, r);
    }
    #o = /* @__PURE__ */ O(() => {
      const r = c2(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#o);
    }
    set nodesInitialized(r) {
      J(this.#o, r);
    }
    #s = /* @__PURE__ */ O(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      J(this.#s, r);
    }
    #a = /* @__PURE__ */ O(() => (v2(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #l = /* @__PURE__ */ O(() => {
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
    #u = /* @__PURE__ */ O(() => {
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
    #c = /* @__PURE__ */ O(() => {
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
        const { viewport: g, width: b, height: v } = this, w = [g.x, g.y, g.zoom];
        f = X2(s, w, b, v), p = tc({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: w,
          width: b,
          height: v
        });
      } else
        f = this.nodeLookup, p = tc(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      J(this.#c, r);
    }
    #d = /* @__PURE__ */ O(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      J(this.#d, r);
    }
    #f = /* @__PURE__ */ O(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      J(this.#f, r);
    }
    #h = /* @__PURE__ */ O(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      J(this.#h, r);
    }
    #p = /* @__PURE__ */ O(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      J(this.#p, r);
    }
    #b = /* @__PURE__ */ O(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#b);
    }
    set edgesFocusable(r) {
      J(this.#b, r);
    }
    #w = /* @__PURE__ */ O(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      J(this.#w, r);
    }
    #x = /* @__PURE__ */ O(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      J(this.#x, r);
    }
    #m = /* @__PURE__ */ O(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      J(this.#m, r);
    }
    #g = /* @__PURE__ */ O(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      J(this.#g, r);
    }
    #v = /* @__PURE__ */ O(() => e.props.nodeExtent ?? Aa);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      J(this.#v, r);
    }
    #y = /* @__PURE__ */ O(() => e.props.translateExtent ?? Aa);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      J(this.#y, r);
    }
    #k = /* @__PURE__ */ O(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      J(this.#k, r);
    }
    #C = /* @__PURE__ */ O(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      J(this.#C, r);
    }
    #$ = /* @__PURE__ */ O(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      J(this.#$, r);
    }
    #_ = /* @__PURE__ */ O(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      J(this.#_, r);
    }
    #S = /* @__PURE__ */ O(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      J(this.#S, r);
    }
    #E = /* @__PURE__ */ O(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      J(this.#E, r);
    }
    #P = /* @__PURE__ */ O(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      J(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ O(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#O);
    }
    set snapGrid(r) {
      J(this.#O, r);
    }
    #N = /* @__PURE__ */ Me(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      J(this.#N, r);
    }
    #T = /* @__PURE__ */ Me(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      J(this.#T, r);
    }
    #z = /* @__PURE__ */ Me(!1);
    get selectionKeyPressed() {
      return c(this.#z);
    }
    set selectionKeyPressed(r) {
      J(this.#z, r);
    }
    #M = /* @__PURE__ */ Me(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      J(this.#M, r);
    }
    #A = /* @__PURE__ */ Me(!1);
    get deleteKeyPressed() {
      return c(this.#A);
    }
    set deleteKeyPressed(r) {
      J(this.#A, r);
    }
    #V = /* @__PURE__ */ Me(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      J(this.#V, r);
    }
    #D = /* @__PURE__ */ Me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#D);
    }
    set zoomActivationKeyPressed(r) {
      J(this.#D, r);
    }
    #L = /* @__PURE__ */ Me(null);
    get selectionRectMode() {
      return c(this.#L);
    }
    set selectionRectMode(r) {
      J(this.#L, r);
    }
    #H = /* @__PURE__ */ Me("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      J(this.#H, r);
    }
    #I = /* @__PURE__ */ O(() => e.props.selectionMode ?? hs.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      J(this.#I, r);
    }
    #j = /* @__PURE__ */ O(() => ({ ...Uf, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#j);
    }
    set nodeTypes(r) {
      J(this.#j, r);
    }
    #R = /* @__PURE__ */ O(() => ({ ...Jf, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      J(this.#R, r);
    }
    #Z = /* @__PURE__ */ O(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Z);
    }
    set noPanClass(r) {
      J(this.#Z, r);
    }
    #K = /* @__PURE__ */ O(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      J(this.#K, r);
    }
    #B = /* @__PURE__ */ O(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      J(this.#B, r);
    }
    #W = /* @__PURE__ */ O(() => Yy(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      J(this.#W, r);
    }
    #Y = /* @__PURE__ */ Me(q2(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      J(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ Me(
      // _connection is viewport independent and originating from XYHandle
      Va
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      J(this.#X, r);
    }
    #q = /* @__PURE__ */ O(() => this._connection.inProgress ? {
      ...this._connection,
      to: wi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      J(this.#q, r);
    }
    #F = /* @__PURE__ */ O(() => e.props.connectionMode ?? wo.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      J(this.#F, r);
    }
    #G = /* @__PURE__ */ O(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      J(this.#G, r);
    }
    #U = /* @__PURE__ */ O(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      J(this.#U, r);
    }
    #J = /* @__PURE__ */ O(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      J(this.#J, r);
    }
    #Q = /* @__PURE__ */ O(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      J(this.#Q, r);
    }
    #ee = /* @__PURE__ */ O(() => o2(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      J(this.#ee, r);
    }
    #te = /* @__PURE__ */ O(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      J(this.#te, r);
    }
    #ne = /* @__PURE__ */ O(() => e.props.onflowerror ?? Zy);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      J(this.#ne, r);
    }
    #re = /* @__PURE__ */ O(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      J(this.#re, r);
    }
    #oe = /* @__PURE__ */ O(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      J(this.#oe, r);
    }
    #ie = /* @__PURE__ */ O(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      J(this.#ie, r);
    }
    #se = /* @__PURE__ */ O(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      J(this.#se, r);
    }
    #ae = /* @__PURE__ */ O(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      J(this.#ae, r);
    }
    #le = /* @__PURE__ */ O(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      J(this.#le, r);
    }
    #ue = /* @__PURE__ */ O(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      J(this.#ue, r);
    }
    #ce = /* @__PURE__ */ O(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      J(this.#ce, r);
    }
    #de = /* @__PURE__ */ O(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      J(this.#de, r);
    }
    #fe = /* @__PURE__ */ O(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      J(this.#fe, r);
    }
    #pe = /* @__PURE__ */ O(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      J(this.#pe, r);
    }
    #he = /* @__PURE__ */ O(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      J(this.#he, r);
    }
    #ge = /* @__PURE__ */ O(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      J(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Me(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      J(this.#ve, r);
    }
    #me = /* @__PURE__ */ O(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      J(this.#me, r);
    }
    #ye = /* @__PURE__ */ O(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      J(this.#ye, r);
    }
    #be = /* @__PURE__ */ O(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#be);
    }
    set onselectiondragstop(r) {
      J(this.#be, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await jy(
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
    _prefersDark = new Gf("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ O(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      J(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Va, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function En() {
  const e = Cn(ys);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ys = Symbol();
function Qf(e) {
  const t = F2(e);
  function n(R) {
    t.nodeTypes = {
      ...Uf,
      ...R
    };
  }
  function r(R) {
    t.edgeTypes = {
      ...Jf,
      ...R
    };
  }
  function o(R) {
    t.edges = Qy(R, t.edges);
  }
  const i = (R, A = !1) => {
    t.nodes = t.nodes.map((P) => {
      const z = R.get(P.id);
      return z ? { ...P, position: z.position, dragging: A } : P;
    });
  };
  function s(R) {
    const { changes: A, updatedInternals: P } = h2(R, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!P)
      return;
    l2(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const z = /* @__PURE__ */ new Map();
    for (const C of A) {
      const S = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!S)
        continue;
      const E = { ...S };
      switch (C.type) {
        case "dimensions": {
          const j = { ...E.measured, ...C.dimensions };
          C.setAttributes && (E.width = C.dimensions?.width ?? E.width, E.height = C.dimensions?.height ?? E.height), E.measured = j;
          break;
        }
        case "position":
          E.position = C.position ?? E.position;
          break;
      }
      z.set(C.id, E);
    }
    t.nodes = t.nodes.map((C) => z.get(C.id) ?? C);
  }
  function a(R) {
    const A = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = R, t.fitViewResolver = A, t.nodes = [...t.nodes], A.promise;
  }
  async function l(R, A, P) {
    const z = typeof P?.zoom < "u" ? P.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - R * z,
      y: t.height / 2 - A * z,
      zoom: z
    }, { duration: P?.duration, ease: P?.ease, interpolate: P?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(R, A) {
    const P = t.panZoom;
    return P ? P.scaleBy(R, A) : Promise.resolve(!1);
  }
  function d(R) {
    return u(1.2, R);
  }
  function f(R) {
    return u(1 / 1.2, R);
  }
  function p(R) {
    const A = t.panZoom;
    A && (A.setScaleExtent([R, t.maxZoom]), t.minZoom = R);
  }
  function h(R) {
    const A = t.panZoom;
    A && (A.setScaleExtent([t.minZoom, R]), t.maxZoom = R);
  }
  function g(R) {
    const A = t.panZoom;
    A && (A.setTranslateExtent(R), t.translateExtent = R);
  }
  function b(R, A = null) {
    let P = !1;
    const z = R.map((C) => (!A || A.has(C.id)) && C.selected ? (P = !0, { ...C, selected: !1 }) : C);
    return [P, z];
  }
  function v(R) {
    const A = R?.nodes ? new Set(R.nodes.map((j) => j.id)) : null, [P, z] = b(t.nodes, A);
    P && (t.nodes = z);
    const C = R?.edges ? new Set(R.edges.map((j) => j.id)) : null, [S, E] = b(t.edges, C);
    S && (t.edges = E);
  }
  function w(R) {
    const A = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((P) => {
      const z = R.includes(P.id), C = A && P.selected || z;
      return !!P.selected !== C ? { ...P, selected: C } : P;
    }), A || v({ nodes: [] });
  }
  function x(R) {
    const A = t.multiselectionKeyPressed;
    t.edges = t.edges.map((P) => {
      const z = R.includes(P.id), C = A && P.selected || z;
      return !!P.selected !== C ? { ...P, selected: C } : P;
    }), A || v({ edges: [] });
  }
  function _(R, A, P) {
    const z = t.nodeLookup.get(R);
    if (!z) {
      console.warn("012", ti.error012(R));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, z.selected ? (A || z.selected && t.multiselectionKeyPressed) && (v({ nodes: [z], edges: [] }), requestAnimationFrame(() => P?.blur())) : w([R]);
  }
  function k(R) {
    const A = t.edgeLookup.get(R);
    if (!A) {
      console.warn("012", ti.error012(R));
      return;
    }
    (A.selectable || t.elementsSelectable && typeof A.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, A.selected ? A.selected && t.multiselectionKeyPressed && v({ nodes: [], edges: [A] }) : x([R]));
  }
  function $(R, A) {
    const { nodeExtent: P, snapGrid: z, nodeOrigin: C, nodeLookup: S, nodesDraggable: E, onerror: j } = t, Y = /* @__PURE__ */ new Map(), F = z?.[0] ?? 5, N = z?.[1] ?? 5, X = R.x * F * A, ee = R.y * N * A;
    for (const q of S.values()) {
      if (!(q.selected && (q.draggable || E && typeof q.draggable > "u")))
        continue;
      let K = {
        x: q.internals.positionAbsolute.x + X,
        y: q.internals.positionAbsolute.y + ee
      };
      z && (K = bi(K, z));
      const { position: W, positionAbsolute: G } = wf({
        nodeId: q.id,
        nextPosition: K,
        nodeLookup: S,
        nodeExtent: P,
        nodeOrigin: C,
        onError: j
      });
      q.position = W, q.internals.positionAbsolute = G, Y.set(q.id, q);
    }
    i(Y);
  }
  function T(R) {
    return g2({
      delta: R,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const V = (R) => {
    t._connection = { ...R };
  };
  function D() {
    t._connection = Va;
  }
  function H() {
    t.resetStoreValues(), v();
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
    unselectNodesAndEdges: v,
    addSelectedNodes: w,
    addSelectedEdges: x,
    handleNodeSelection: _,
    handleEdgeSelection: k,
    moveSelectedNodes: $,
    panBy: T,
    updateConnection: V,
    cancelConnection: D,
    reset: H
  });
}
function G2(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: f } = t, p = A2({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), h = p.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), u(p), p.update(t), {
    update(g) {
      p.update(g);
    }
  };
}
var U2 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function ep(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 7), o = y(t, "preventScrolling", 7), i = y(t, "zoomOnScroll", 7), s = y(t, "zoomOnDoubleClick", 7), a = y(t, "zoomOnPinch", 7), l = y(t, "panOnDrag", 7), u = y(t, "panOnScroll", 7), d = y(t, "panOnScrollSpeed", 7), f = y(t, "paneClickDistance", 7), p = y(t, "selectionOnDrag", 7), h = y(t, "onmovestart", 7), g = y(t, "onmove", 7), b = y(t, "onmoveend", 7), v = y(t, "oninit", 7), w = y(t, "children", 7), x = /* @__PURE__ */ O(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ O(() => n().panActivationKeyPressed || u());
  const { viewport: k } = n();
  let $ = !1;
  st(() => {
    !$ && n().viewportInitialized && (v()?.(), $ = !0);
  });
  var T = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), m();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), m();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), m();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(H) {
      f(H), m();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(H) {
      p(H), m();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(H) {
      h(H), m();
    },
    get onmove() {
      return g();
    },
    set onmove(H) {
      g(H), m();
    },
    get onmoveend() {
      return b();
    },
    set onmoveend(H) {
      b(H), m();
    },
    get oninit() {
      return v();
    },
    set oninit(H) {
      v(H), m();
    },
    get children() {
      return w();
    },
    set children(H) {
      w(H), m();
    }
  }, V = U2(), D = B(V);
  return tt(D, w), Z(V), Mt(V, (H, R) => G2?.(H, R), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: k,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: h(),
    onPanZoom: g(),
    onPanZoomEnd: b(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(_),
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
    paneClickDistance: f(),
    selectionOnDrag: p(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), M(e, V), fe(T);
}
ue(
  ep,
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
function nc(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function rc(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function oc(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var J2 = /* @__PURE__ */ te("<div><!></div>");
function tp(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "paneClickDistance", 7, 1), i = y(t, "selectionOnDrag", 7), s = y(t, "onpaneclick", 7), a = y(t, "onpanecontextmenu", 7), l = y(t, "onselectionstart", 7), u = y(t, "onselectionend", 7), d = y(t, "children", 7), f, p = null, h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ O(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ O(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(b) !== !0), w = /* @__PURE__ */ O(() => n().elementsSelectable && (c(v) || n().selectionRectMode === "user")), x = !1;
  function _(S) {
    if (p = f?.getBoundingClientRect(), !p) return;
    const E = S.target === f, j = !E && !!S.target.closest(".nokey"), Y = i() && E || n().selectionKeyPressed;
    if (j || !c(v) || !Y || S.button !== 0 || !S.isPrimary)
      return;
    S.target?.setPointerCapture?.(S.pointerId), x = !1;
    const { x: F, y: N } = xn(S, p);
    n(n().selectionRect = { width: 0, height: 0, startX: F, startY: N, x: F, y: N }, !0), E || (S.stopPropagation(), S.preventDefault());
  }
  function k(S) {
    if (!c(v) || !p || !n().selectionRect)
      return;
    const E = xn(S, p), { startX: j = 0, startY: Y = 0 } = n().selectionRect;
    if (!x) {
      const q = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(E.x - j, E.y - Y) <= q)
        return;
      n().unselectNodesAndEdges(), l()?.(S);
    }
    x = !0;
    const F = {
      ...n().selectionRect,
      x: E.x < j ? E.x : j,
      y: E.y < Y ? E.y : Y,
      width: Math.abs(E.x - j),
      height: Math.abs(E.y - Y)
    }, N = h, X = g;
    h = new Set(Pl(
      n().nodeLookup,
      F,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === hs.Partial,
      !0
    ).map((q) => q.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const q of h) {
      const K = n().connectionLookup.get(q);
      if (K)
        for (const { edgeId: W } of K.values()) {
          const G = n().edgeLookup.get(W);
          G && (G.selectable ?? ee) && g.add(W);
        }
    }
    oc(N, h) || n(n().nodes = n().nodes.map(rc(h)), !0), oc(X, g) || n(n().edges = n().edges.map(rc(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = F, !0);
  }
  function $(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !x && S.target === f && D?.(S), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), x && u()?.(S));
  }
  const T = (S) => {
    if (Array.isArray(c(b)) && c(b).includes(2)) {
      S.preventDefault();
      return;
    }
    a()?.({ event: S });
  }, V = (S) => {
    x && (S.stopPropagation(), x = !1);
  };
  function D(S) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(S) {
      n(S), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), m();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(S = 1) {
      o(S), m();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(S) {
      i(S), m();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(S) {
      s(S), m();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(S) {
      a(S), m();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(S) {
      l(S), m();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(S) {
      u(S), m();
    },
    get children() {
      return d();
    },
    set children(S) {
      d(S), m();
    }
  }, R = J2();
  let A;
  var P = /* @__PURE__ */ O(() => c(w) ? void 0 : nc(D, f));
  R.__click = function(...S) {
    c(P)?.apply(this, S);
  }, R.__pointermove = function(...S) {
    (c(w) ? k : void 0)?.apply(this, S);
  }, R.__pointerup = function(...S) {
    (c(w) ? $ : void 0)?.apply(this, S);
  };
  var z = /* @__PURE__ */ O(() => nc(T, f));
  R.__contextmenu = function(...S) {
    c(z)?.apply(this, S);
  };
  var C = B(R);
  return tt(C, d), Z(R), St(R, (S) => f = S, () => f), Oe((S) => A = Ut(R, 1, "svelte-flow__pane svelte-flow__container", null, A, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(v)
    })
  ]), is(
    "pointerdown",
    R,
    function(...S) {
      (c(w) ? _ : void 0)?.apply(this, S);
    },
    !0
  ), is(
    "click",
    R,
    function(...S) {
      (c(w) ? V : void 0)?.apply(this, S);
    },
    !0
  ), M(e, R), fe(H);
}
Or(["click", "pointermove", "pointerup", "contextmenu"]);
ue(
  tp,
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
var Q2 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function np(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), m();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), m();
    }
  }, i = Q2();
  let s;
  var a = B(i);
  return tt(a, r), Z(i), Oe(() => s = zt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), M(e, i), fe(o);
}
ue(np, { store: {}, children: {} }, [], [], !0);
function rp(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = w2({
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
var eb = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), tb = /* @__PURE__ */ te('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const nb = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function op(e, t) {
  de(t, !0), Je(e, nb);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    }
  }, o = tb(), i = oe(o), s = B(i, !0);
  Z(i);
  var a = L(i, 2), l = B(a, !0);
  Z(a);
  var u = L(a, 2);
  {
    var d = (f) => {
      var p = eb(), h = B(p, !0);
      Z(p), Oe(() => {
        Pe(p, "id", `${rb}-${n().flowId}`), rt(h, n().ariaLiveMessage);
      }), M(f, p);
    };
    ae(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Oe(() => {
    Pe(i, "id", `${ip}-${n().flowId}`), rt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Pe(a, "id", `${sp}-${n().flowId}`), rt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(e, o), fe(r);
}
ue(op, { store: {} }, [], [], !0);
const ip = "svelte-flow__node-desc", sp = "svelte-flow__edge-desc", rb = "svelte-flow__aria-live";
var ob = /* @__PURE__ */ te("<div><!></div>");
function ap(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), u = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), f = y(t, "onnodepointerleave", 7), p = y(t, "onnodepointermove", 7), h = y(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ O(() => It(r().data, () => ({}), !0)), b = /* @__PURE__ */ O(() => It(r().selected, !1)), v = /* @__PURE__ */ O(() => r().draggable), w = /* @__PURE__ */ O(() => r().selectable), x = /* @__PURE__ */ O(() => It(r().deletable, !0)), _ = /* @__PURE__ */ O(() => r().connectable), k = /* @__PURE__ */ O(() => r().focusable), $ = /* @__PURE__ */ O(() => It(r().hidden, !1)), T = /* @__PURE__ */ O(() => It(r().dragging, !1)), V = /* @__PURE__ */ O(() => It(r().style, "")), D = /* @__PURE__ */ O(() => r().class), H = /* @__PURE__ */ O(() => It(r().type, "default")), R = /* @__PURE__ */ O(() => r().parentId), A = /* @__PURE__ */ O(() => r().sourcePosition), P = /* @__PURE__ */ O(() => r().targetPosition), z = /* @__PURE__ */ O(() => It(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ O(() => It(r().measured, () => ({ width: 0, height: 0 }), !0).height), S = /* @__PURE__ */ O(() => r().initialWidth), E = /* @__PURE__ */ O(() => r().initialHeight), j = /* @__PURE__ */ O(() => r().width), Y = /* @__PURE__ */ O(() => r().height), F = /* @__PURE__ */ O(() => r().dragHandle), N = /* @__PURE__ */ O(() => It(r().internals.z, 0)), X = /* @__PURE__ */ O(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ O(() => r().internals.positionAbsolute.y), q = /* @__PURE__ */ O(() => r().internals.userNode), { id: K } = r(), W = /* @__PURE__ */ O(() => c(v) ?? n().nodesDraggable), G = /* @__PURE__ */ O(() => c(w) ?? n().elementsSelectable), ne = /* @__PURE__ */ O(() => c(_) ?? n().nodesConnectable), re = /* @__PURE__ */ O(() => $f(r())), Q = /* @__PURE__ */ O(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ O(() => c(re) && c(Q)), ce = /* @__PURE__ */ O(() => c(k) ?? n().nodesFocusable);
  function ie(he) {
    return n().parentLookup.has(he);
  }
  let le = /* @__PURE__ */ O(() => ie(K)), ve = /* @__PURE__ */ Me(null), we = null, xe = c(H), pe = c(A), Se = c(P), Ie = /* @__PURE__ */ O(() => n().nodeTypes[c(H)] ?? Al), U = /* @__PURE__ */ O(() => n().ariaLabelConfig);
  Wr("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Wr("svelteflow__node_id", K);
  let nt = /* @__PURE__ */ O(() => {
    const he = c(z) === void 0 ? c(j) ?? c(S) : c(j), ze = c(C) === void 0 ? c(Y) ?? c(E) : c(Y);
    if (!(he === void 0 && ze === void 0 && c(V) === void 0))
      return `${c(V)};${he ? `width:${jn(he)};` : ""}${ze ? `height:${jn(ze)};` : ""}`;
  });
  st(() => {
    (c(H) !== xe || c(A) !== pe || c(P) !== Se) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[K, { id: K, nodeElement: c(ve), force: !0 }]]));
    }), xe = c(H), pe = c(A), Se = c(P);
  }), st(() => {
    o() && (!c(ge) || c(ve) !== we) && (we && o().unobserve(we), c(ve) && o().observe(c(ve)), we = c(ve));
  }), pi(() => {
    we && o()?.unobserve(we);
  });
  function De(he) {
    c(G) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(K), s()?.({ node: c(q), event: he });
  }
  function qe(he) {
    if (!(Ef(he) || n().disableKeyboardA11y))
      if (yf.includes(he.key) && c(G)) {
        const ze = he.key === "Escape";
        n().handleNodeSelection(K, ze, c(ve));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(ms, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = c(U)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(ms[he.key], he.shiftKey ? 4 : 1));
  }
  const Ye = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: he, height: ze, viewport: ct } = n();
    Pl(/* @__PURE__ */ new Map([[K, r()]]), { x: 0, y: 0, width: he, height: ze }, [ct.x, ct.y, ct.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ct.zoom });
  };
  var at = {
    get store() {
      return n();
    },
    set store(he) {
      n(he), m();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), m();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(he) {
      u(he), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), m();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(he) {
      f(he), m();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(he) {
      p(he), m();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(he) {
      h(he), m();
    }
  }, Ct = Ee(), Jt = oe(Ct);
  {
    var gt = (he) => {
      var ze = ob();
      it(ze, () => ({
        "data-id": K,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(D)
        ],
        style: c(nt),
        onclick: De,
        onpointerenter: d() ? (Xe) => d()({ node: c(q), event: Xe }) : void 0,
        onpointerleave: f() ? (Xe) => f()({ node: c(q), event: Xe }) : void 0,
        onpointermove: p() ? (Xe) => p()({ node: c(q), event: Xe }) : void 0,
        oncontextmenu: h() ? (Xe) => h()({ node: c(q), event: Xe }) : void 0,
        onkeydown: c(ce) ? qe : void 0,
        onfocus: c(ce) ? Ye : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${ip}-${n().flowId}`,
        ...r().domAttributes,
        [gr]: {
          dragging: c(T),
          selected: c(b),
          draggable: c(W),
          connectable: c(ne),
          selectable: c(G),
          nopan: c(W),
          parent: c(le)
        },
        [Mn]: {
          "z-index": c(N),
          transform: `translate(${c(X) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(re) ? "visible" : "hidden"
        }
      }));
      var ct = B(ze);
      hi(ct, () => c(Ie), (Xe, dt) => {
        dt(Xe, {
          get data() {
            return c(g);
          },
          get id() {
            return K;
          },
          get selected() {
            return c(b);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(A);
          },
          get targetPosition() {
            return c(P);
          },
          get zIndex() {
            return c(N);
          },
          get dragging() {
            return c(T);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(F);
          },
          get parentId() {
            return c(R);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(ee);
          },
          get width() {
            return c(j);
          },
          get height() {
            return c(Y);
          }
        });
      }), Z(ze), Mt(ze, (Xe, dt) => rp?.(Xe, dt), () => ({
        nodeId: K,
        isSelectable: c(G),
        disabled: !c(W),
        handleSelector: c(F),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Xe, dt, Qt, xt) => {
          a()?.({ event: Xe, targetNode: Qt, nodes: xt });
        },
        onDragStart: (Xe, dt, Qt, xt) => {
          l()?.({ event: Xe, targetNode: Qt, nodes: xt });
        },
        onDragStop: (Xe, dt, Qt, xt) => {
          u()?.({ event: Xe, targetNode: Qt, nodes: xt });
        },
        store: n()
      })), St(ze, (Xe) => J(ve, Xe), () => c(ve)), M(he, ze);
    };
    ae(Jt, (he) => {
      c($) || he(gt);
    });
  }
  return M(e, Ct), fe(at);
}
ue(
  ap,
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
var ib = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function lp(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), u = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), f = y(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const v = /* @__PURE__ */ new Map();
    b.forEach((w) => {
      const x = w.target.getAttribute("data-id");
      v.set(x, { id: x, nodeElement: w.target, force: !0 });
    }), n().updateNodeInternals(v);
  });
  pi(() => {
    p?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(b) {
      r(b), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(b) {
      o(b), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(b) {
      i(b), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(b) {
      s(b), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(b) {
      a(b), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(b) {
      l(b), m();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(b) {
      u(b), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(b) {
      d(b), m();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(b) {
      f(b), m();
    }
  }, g = ib();
  return Tt(g, 21, () => n().visible.nodes.values(), (b) => b.id, (b, v) => {
    ap(b, {
      get node() {
        return c(v);
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
      set store(w) {
        n(w);
      }
    });
  }), Z(g), M(e, g), fe(h);
}
ue(
  lp,
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
var sb = /* @__PURE__ */ ke('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function up(e, t) {
  de(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ O(() => n().source), u = /* @__PURE__ */ O(() => n().target), d = /* @__PURE__ */ O(() => n().sourceX), f = /* @__PURE__ */ O(() => n().sourceY), p = /* @__PURE__ */ O(() => n().targetX), h = /* @__PURE__ */ O(() => n().targetY), g = /* @__PURE__ */ O(() => n().sourcePosition), b = /* @__PURE__ */ O(() => n().targetPosition), v = /* @__PURE__ */ O(() => It(n().animated, !1)), w = /* @__PURE__ */ O(() => It(n().selected, !1)), x = /* @__PURE__ */ O(() => n().label), _ = /* @__PURE__ */ O(() => n().labelStyle), k = /* @__PURE__ */ O(() => It(n().data, () => ({}), !0)), $ = /* @__PURE__ */ O(() => n().style), T = /* @__PURE__ */ O(() => n().interactionWidth), V = /* @__PURE__ */ O(() => It(n().type, "default")), D = /* @__PURE__ */ O(() => n().sourceHandle), H = /* @__PURE__ */ O(() => n().targetHandle), R = /* @__PURE__ */ O(() => n().markerStart), A = /* @__PURE__ */ O(() => n().markerEnd), P = /* @__PURE__ */ O(() => n().selectable), z = /* @__PURE__ */ O(() => n().focusable), C = /* @__PURE__ */ O(() => It(n().deletable, !0)), S = /* @__PURE__ */ O(() => n().hidden), E = /* @__PURE__ */ O(() => n().zIndex), j = /* @__PURE__ */ O(() => n().class), Y = /* @__PURE__ */ O(() => n().ariaLabel), F = null;
  const { id: N } = n();
  Wr("svelteflow__edge_id", N);
  let X = /* @__PURE__ */ O(() => c(P) ?? r().elementsSelectable), ee = /* @__PURE__ */ O(() => c(z) ?? r().edgesFocusable), q = /* @__PURE__ */ O(() => r().edgeTypes[c(V)] ?? Vl), K = /* @__PURE__ */ O(() => c(R) ? `url('#${La(c(R), r().flowId)}')` : void 0), W = /* @__PURE__ */ O(() => c(A) ? `url('#${La(c(A), r().flowId)}')` : void 0);
  function G(le) {
    const ve = r().edgeLookup.get(N);
    ve && (c(X) && r().handleEdgeSelection(N), o()?.({ event: le, edge: ve }));
  }
  function ne(le, ve) {
    const we = r().edgeLookup.get(N);
    we && ve({ event: le, edge: we });
  }
  function re(le) {
    if (!r().disableKeyboardA11y && yf.includes(le.key) && c(X)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: we } = r();
      le.key === "Escape" ? (F?.blur(), ve({ edges: [n()] })) : we([N]);
    }
  }
  var Q = {
    get edge() {
      return n();
    },
    set edge(le) {
      n(le), m();
    },
    get store() {
      return r();
    },
    set store(le) {
      r(le), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(le) {
      o(le), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(le) {
      i(le), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(le) {
      s(le), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(le) {
      a(le), m();
    }
  }, ge = Ee(), ce = oe(ge);
  {
    var ie = (le) => {
      var ve = sb();
      let we;
      var xe = B(ve);
      it(xe, () => ({
        class: ["svelte-flow__edge", c(j)],
        "data-id": N,
        onclick: G,
        oncontextmenu: i() ? (Se) => {
          ne(Se, i());
        } : void 0,
        onpointerenter: s() ? (Se) => {
          ne(Se, s());
        } : void 0,
        onpointerleave: a() ? (Se) => {
          ne(Se, a());
        } : void 0,
        "aria-label": c(Y) === null ? void 0 : c(Y) ? c(Y) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${sp}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? re : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [gr]: {
          animated: c(v),
          selected: c(w),
          selectable: c(X)
        }
      }));
      var pe = B(xe);
      hi(pe, () => c(q), (Se, Ie) => {
        Ie(Se, {
          get id() {
            return N;
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
            return c(b);
          },
          get animated() {
            return c(v);
          },
          get selected() {
            return c(w);
          },
          get label() {
            return c(x);
          },
          get labelStyle() {
            return c(_);
          },
          get data() {
            return c(k);
          },
          get style() {
            return c($);
          },
          get interactionWidth() {
            return c(T);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(D);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(K);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), Z(xe), St(xe, (Se) => F = Se, () => F), Z(ve), Oe(() => we = zt(ve, "", we, { "z-index": c(E) })), M(le, ve);
    };
    ae(ce, (le) => {
      c(S) || le(ie);
    });
  }
  return M(e, ge), fe(Q);
}
ue(
  up,
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
Xg();
var ab = /* @__PURE__ */ ke("<defs></defs>");
function cp(e, t) {
  de(t, !1);
  const n = En();
  bl();
  var r = ab();
  Tt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    dp(o, Ue(() => c(i)));
  }), Z(r), M(e, r), fe();
}
ue(cp, {}, [], [], !0);
var lb = /* @__PURE__ */ ke('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), ub = /* @__PURE__ */ ke('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cb = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function dp(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7, "none"), u = y(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(b) {
      n(b), m();
    },
    get type() {
      return r();
    },
    set type(b) {
      r(b), m();
    },
    get width() {
      return o();
    },
    set width(b = 12.5) {
      o(b), m();
    },
    get height() {
      return i();
    },
    set height(b = 12.5) {
      i(b), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(b = "strokeWidth") {
      s(b), m();
    },
    get orient() {
      return a();
    },
    set orient(b = "auto-start-reverse") {
      a(b), m();
    },
    get color() {
      return l();
    },
    set color(b = "none") {
      l(b), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(b) {
      u(b), m();
    }
  }, f = cb(), p = B(f);
  {
    var h = (b) => {
      var v = lb();
      let w;
      Oe(() => {
        Pe(v, "stroke-width", u()), w = zt(v, "", w, { stroke: l() });
      }), M(b, v);
    }, g = (b) => {
      var v = Ee(), w = oe(v);
      {
        var x = (_) => {
          var k = ub();
          let $;
          Oe(() => {
            Pe(k, "stroke-width", u()), $ = zt(k, "", $, { stroke: l(), fill: l() });
          }), M(_, k);
        };
        ae(
          w,
          (_) => {
            r() === ni.ArrowClosed && _(x);
          },
          !0
        );
      }
      M(b, v);
    };
    ae(p, (b) => {
      r() === ni.Arrow ? b(h) : b(g, !1);
    });
  }
  return Z(f), Oe(() => {
    Pe(f, "id", n()), Pe(f, "markerWidth", `${o()}`), Pe(f, "markerHeight", `${i()}`), Pe(f, "markerUnits", s()), Pe(f, "orient", a());
  }), M(e, f), fe(d);
}
ue(
  dp,
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
var db = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function fp(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = {
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
  }, l = db(), u = B(l), d = B(u);
  cp(d, {}), Z(u);
  var f = L(u, 2);
  return Tt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    up(p, {
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
  }), Z(l), M(e, l), fe(a);
}
ue(
  fp,
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
var fb = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const pb = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function Dl(e, t) {
  de(t, !0), Je(e, pb);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), m();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), m();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), m();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), m();
    }
  }, l = Ee(), u = oe(l);
  {
    var d = (f) => {
      var p = fb();
      let h;
      Oe((g) => h = zt(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : jn(o()),
          height: typeof i() == "string" ? i() : jn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), M(f, p);
    };
    ae(u, (f) => {
      s() && f(d);
    });
  }
  return M(e, l), fe(a);
}
ue(Dl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var hb = /* @__PURE__ */ te("<div><!></div>");
const gb = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function pp(e, t) {
  de(t, !0), Je(e, gb);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Me(void 0);
  st(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ O(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const w = yi(n().nodeLookup, { filter: (x) => !!x.selected });
      if (w.width > 0 && w.height > 0)
        return w;
    }
    return null;
  });
  function d(w) {
    const x = n().nodes.filter((_) => _.selected);
    a()?.({ nodes: x, event: w });
  }
  function f(w) {
    const x = n().nodes.filter((_) => _.selected);
    s()?.({ nodes: x, event: w });
  }
  function p(w) {
    Object.prototype.hasOwnProperty.call(ms, w.key) && (w.preventDefault(), n().moveSelectedNodes(ms[w.key], w.shiftKey ? 4 : 1));
  }
  var h = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(w) {
      r(w), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(w) {
      o(w), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(w) {
      i(w), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(w) {
      s(w), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(w) {
      a(w), m();
    }
  }, g = Ee(), b = oe(g);
  {
    var v = (w) => {
      var x = hb();
      x.__contextmenu = d, x.__click = f, x.__keydown = function(...$) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, $);
      };
      let _;
      var k = B(x);
      Dl(k, { width: "100%", height: "100%", x: 0, y: 0 }), Z(x), Mt(x, ($, T) => rp?.($, T), () => ({
        disabled: !1,
        store: n(),
        onDrag: ($, T, V, D) => {
          r()?.({ event: $, targetNode: null, nodes: D });
        },
        onDragStart: ($, T, V, D) => {
          o()?.({ event: $, targetNode: null, nodes: D });
        },
        onDragStop: ($, T, V, D) => {
          i()?.({ event: $, targetNode: null, nodes: D });
        }
      })), St(x, ($) => J(l, $), () => c(l)), Oe(
        ($) => {
          Ut(x, 1, ur(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Pe(x, "role", n().disableKeyboardA11y ? void 0 : "button"), Pe(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = zt(x, "", _, $);
        },
        [
          () => ({
            width: jn(c(u).width),
            height: jn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), M(w, x);
    };
    ae(b, (w) => {
      n().selectionRectMode === "nodes" && c(u) && Un(c(u).x) && Un(c(u).y) && w(v);
    });
  }
  return M(e, g), fe(h);
}
Or(["contextmenu", "click", "keydown"]);
ue(
  pp,
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
function vb(e) {
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
function Nn(e, t) {
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
      }, { modifier: p, key: h, callback: g, preventDefault: b, enabled: v } = f;
      if (v) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const x = Array.isArray(p) ? p : [p];
          let _ = !1;
          for (const k of x)
            if ((Array.isArray(k) ? k : [k]).reduce(
              ($, T) => $ | vb(T),
              0
            ) === u) {
              _ = !0;
              break;
            }
          if (!_) continue;
        }
        b && a.preventDefault();
        const w = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), g?.(w);
      }
    }
  }
  let s;
  return n && (s = In(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = In(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Et() {
  const e = /* @__PURE__ */ O(En), t = (i) => {
    const s = ec(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Wy(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return ko(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = lt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && ec(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = lt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && I2(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : ic(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : ic(c(e).edgeLookup, i),
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
    getViewport: () => ll(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Ol(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = Zu(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = ko(f), h = ri(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Zu(i) ? i : t(i);
      if (!l)
        return !1;
      const u = ri(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Ry({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = lt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = lt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
      return wi(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = vs(i, [s, a, l]);
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
    getNodesBounds: (i) => Ly(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ic(e, t) {
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
function hp(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => Hr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => Hr() ? "Meta" : "Control"), { deleteElements: l } = Et();
  function u(v) {
    return v !== null && typeof v == "object";
  }
  function d(v) {
    return u(v) ? v.modifier || [] : [];
  }
  function f(v) {
    return v == null ? "" : u(v) ? v.key : v;
  }
  function p(v, w) {
    return (Array.isArray(v) ? v : [v]).map((x) => {
      const _ = f(x);
      return {
        key: _,
        modifier: d(x),
        enabled: _ !== null,
        callback: w
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const v = n().nodes.filter((x) => x.selected), w = n().edges.filter((x) => x.selected);
    l({ nodes: v, edges: w });
  }
  var b = {
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(v = "Shift") {
      r(v), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(v = Hr() ? "Meta" : "Control") {
      o(v), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(v = "Backspace") {
      i(v), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(v = " ") {
      s(v), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(v = Hr() ? "Meta" : "Control") {
      a(v), m();
    }
  };
  return is("blur", Yt, h), is("contextmenu", Yt, h), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(i(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !Ef(v.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Mt(Yt, (v, w) => Nn?.(v, w), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), fe(b);
}
ue(
  hp,
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
var mb = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), yb = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function gp(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ O(() => {
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
      case Fn.Bezier: {
        const [h] = Of(p);
        return h;
      }
      case Fn.Straight: {
        const [h] = Tf(p);
        return h;
      }
      case Fn.Step:
      case Fn.SmoothStep: {
        const [h] = Nl({
          ...p,
          borderRadius: r() === Fn.Step ? 0 : void 0
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
  }, u = Ee(), d = oe(u);
  {
    var f = (p) => {
      var h = yb(), g = B(h), b = B(g);
      {
        var v = (x) => {
          var _ = Ee(), k = oe(_);
          hi(k, s, ($, T) => {
            T($, {});
          }), M(x, _);
        }, w = (x) => {
          var _ = mb();
          Oe(() => {
            Pe(_, "d", c(a)), zt(_, i());
          }), M(x, _);
        };
        ae(b, (x) => {
          s() ? x(v) : x(w, !1);
        });
      }
      Z(g), Z(h), Oe(
        (x) => {
          Pe(h, "width", n().width), Pe(h, "height", n().height), zt(h, o()), Ut(g, 0, x);
        },
        [
          () => ur([
            "svelte-flow__connection",
            Vy(n().connection.isValid)
          ])
        ]
      ), M(p, h);
    };
    ae(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return M(e, u), fe(l);
}
ue(
  gp,
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
var bb = /* @__PURE__ */ te("<div><!></div>");
function ki(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ O(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(f = "top-right") {
      n(f), m();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), m();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), m();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), m();
    }
  }, u = bb();
  it(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return tt(d, () => i() ?? pt), Z(u), M(e, u), fe(l);
}
ue(ki, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var wb = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function vp(e, t) {
  de(t, !0);
  let n = y(t, "proOptions", 7), r = y(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), m();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), m();
    }
  }, i = Ee(), s = oe(i);
  {
    var a = (l) => {
      ki(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = wb();
          M(u, f);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return M(e, i), fe(o);
}
ue(vp, { proOptions: {}, position: {} }, [], [], !0);
var xb = /* @__PURE__ */ te("<div><!></div>");
const kb = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function mp(e, t) {
  de(t, !0), Je(e, kb);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), u = y(t, "rest", 7), d = /* @__PURE__ */ O(() => u().class), f = /* @__PURE__ */ O(() => wv(u(), [
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
  function p(v) {
    v.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(v);
  }
  var h = {
    get width() {
      return n();
    },
    set width(v) {
      n(v), m();
    },
    get height() {
      return r();
    },
    set height(v) {
      r(v), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(v) {
      o(v), m();
    },
    get domNode() {
      return i();
    },
    set domNode(v) {
      i(v), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(v) {
      s(v), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(v) {
      a(v), m();
    },
    get children() {
      return l();
    },
    set children(v) {
      l(v), m();
    },
    get rest() {
      return u();
    },
    set rest(v) {
      u(v), m();
    }
  }, g = xb();
  it(
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
      onscroll: p,
      ...c(f),
      [Mn]: v
    }),
    [
      () => ({ width: jn(n()), height: jn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var b = B(g);
  return tt(b, () => l() ?? pt), Z(g), St(g, (v) => i(v), () => i()), yu(g, "clientHeight", a), yu(g, "clientWidth", s), M(e, g), fe(h);
}
ue(
  mp,
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
var Cb = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), $b = /* @__PURE__ */ te("<!> <!>", 1), _b = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function yp(e, t) {
  de(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), u = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), f = y(t, "nodeClickDistance", 7, 1), p = y(t, "onmovestart", 7), h = y(t, "onmoveend", 7), g = y(t, "onmove", 7), b = y(t, "oninit", 7), v = y(t, "onnodeclick", 7), w = y(t, "onnodecontextmenu", 7), x = y(t, "onnodedrag", 7), _ = y(t, "onnodedragstart", 7), k = y(t, "onnodedragstop", 7), $ = y(t, "onnodepointerenter", 7), T = y(t, "onnodepointermove", 7), V = y(t, "onnodepointerleave", 7), D = y(t, "onselectionclick", 7), H = y(t, "onselectioncontextmenu", 7), R = y(t, "onselectionstart", 7), A = y(t, "onselectionend", 7), P = y(t, "onedgeclick", 7), z = y(t, "onedgecontextmenu", 7), C = y(t, "onedgepointerenter", 7), S = y(t, "onedgepointerleave", 7), E = y(t, "onpaneclick", 7), j = y(t, "onpanecontextmenu", 7), Y = y(t, "panOnScrollMode", 23, () => Kr.Free), F = y(t, "preventScrolling", 7, !0), N = y(t, "zoomOnScroll", 7, !0), X = y(t, "zoomOnDoubleClick", 7, !0), ee = y(t, "zoomOnPinch", 7, !0), q = y(t, "panOnScroll", 7, !1), K = y(t, "panOnScrollSpeed", 7, 0.5), W = y(t, "panOnDrag", 7, !0), G = y(t, "selectionOnDrag", 7, !1), ne = y(t, "connectionLineComponent", 7), re = y(t, "connectionLineStyle", 7), Q = y(t, "connectionLineContainerStyle", 7), ge = y(t, "connectionLineType", 23, () => Fn.Bezier), ce = y(t, "attributionPosition", 7), ie = y(t, "children", 7), le = y(t, "nodes", 31, () => Vt([])), ve = y(t, "edges", 31, () => Vt([])), we = y(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ We(t, [
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
  ]), pe = Qf({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return le();
    },
    set nodes(U) {
      le(U);
    },
    get edges() {
      return ve();
    },
    set edges(U) {
      ve(U);
    },
    get viewport() {
      return we();
    },
    set viewport(U) {
      we(U);
    }
  });
  const Se = Cn(ys);
  Se && Se.setStore && Se.setStore(pe), Wr(ys, {
    provider: !1,
    getStore() {
      return pe;
    }
  }), st(() => {
    const U = { nodes: pe.selectedNodes, edges: pe.selectedEdges };
    lt(() => t.onselectionchange)?.(U);
    for (const nt of pe.selectionChangeHandlers.values())
      nt(U);
  }), pi(() => {
    pe.reset();
  });
  var Ie = {
    get width() {
      return n();
    },
    set width(U) {
      n(U), m();
    },
    get height() {
      return r();
    },
    set height(U) {
      r(U), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(U) {
      o(U), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(U) {
      i(U), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(U) {
      s(U), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(U) {
      a(U), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(U) {
      l(U), m();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(U) {
      u(U), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(U = 1) {
      d(U), m();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(U = 1) {
      f(U), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(U) {
      p(U), m();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(U) {
      h(U), m();
    },
    get onmove() {
      return g();
    },
    set onmove(U) {
      g(U), m();
    },
    get oninit() {
      return b();
    },
    set oninit(U) {
      b(U), m();
    },
    get onnodeclick() {
      return v();
    },
    set onnodeclick(U) {
      v(U), m();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(U) {
      w(U), m();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(U) {
      x(U), m();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(U) {
      _(U), m();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(U) {
      k(U), m();
    },
    get onnodepointerenter() {
      return $();
    },
    set onnodepointerenter(U) {
      $(U), m();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(U) {
      T(U), m();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(U) {
      V(U), m();
    },
    get onselectionclick() {
      return D();
    },
    set onselectionclick(U) {
      D(U), m();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(U) {
      H(U), m();
    },
    get onselectionstart() {
      return R();
    },
    set onselectionstart(U) {
      R(U), m();
    },
    get onselectionend() {
      return A();
    },
    set onselectionend(U) {
      A(U), m();
    },
    get onedgeclick() {
      return P();
    },
    set onedgeclick(U) {
      P(U), m();
    },
    get onedgecontextmenu() {
      return z();
    },
    set onedgecontextmenu(U) {
      z(U), m();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(U) {
      C(U), m();
    },
    get onedgepointerleave() {
      return S();
    },
    set onedgepointerleave(U) {
      S(U), m();
    },
    get onpaneclick() {
      return E();
    },
    set onpaneclick(U) {
      E(U), m();
    },
    get onpanecontextmenu() {
      return j();
    },
    set onpanecontextmenu(U) {
      j(U), m();
    },
    get panOnScrollMode() {
      return Y();
    },
    set panOnScrollMode(U = Kr.Free) {
      Y(U), m();
    },
    get preventScrolling() {
      return F();
    },
    set preventScrolling(U = !0) {
      F(U), m();
    },
    get zoomOnScroll() {
      return N();
    },
    set zoomOnScroll(U = !0) {
      N(U), m();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(U = !0) {
      X(U), m();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(U = !0) {
      ee(U), m();
    },
    get panOnScroll() {
      return q();
    },
    set panOnScroll(U = !1) {
      q(U), m();
    },
    get panOnScrollSpeed() {
      return K();
    },
    set panOnScrollSpeed(U = 0.5) {
      K(U), m();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(U = !0) {
      W(U), m();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(U = !1) {
      G(U), m();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(U) {
      ne(U), m();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(U) {
      re(U), m();
    },
    get connectionLineContainerStyle() {
      return Q();
    },
    set connectionLineContainerStyle(U) {
      Q(U), m();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(U = Fn.Bezier) {
      ge(U), m();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(U) {
      ce(U), m();
    },
    get children() {
      return ie();
    },
    set children(U) {
      ie(U), m();
    },
    get nodes() {
      return le();
    },
    set nodes(U = []) {
      le(U), m();
    },
    get edges() {
      return ve();
    },
    set edges(U = []) {
      ve(U), m();
    },
    get viewport() {
      return we();
    },
    set viewport(U = void 0) {
      we(U), m();
    }
  };
  return mp(e, {
    get colorMode() {
      return pe.colorMode;
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
      return pe.domNode;
    },
    set domNode(U) {
      pe.domNode = U;
    },
    get clientWidth() {
      return pe.width;
    },
    set clientWidth(U) {
      pe.width = U;
    },
    get clientHeight() {
      return pe.height;
    },
    set clientHeight(U) {
      pe.height = U;
    },
    children: (U, nt) => {
      var De = _b(), qe = oe(De);
      hp(qe, {
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
          return pe;
        },
        set store(gt) {
          pe = gt;
        }
      });
      var Ye = L(qe, 2);
      ep(Ye, {
        get panOnScrollMode() {
          return Y();
        },
        get preventScrolling() {
          return F();
        },
        get zoomOnScroll() {
          return N();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return q();
        },
        get panOnScrollSpeed() {
          return K();
        },
        get panOnDrag() {
          return W();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return G();
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
          return b();
        },
        get store() {
          return pe;
        },
        set store(gt) {
          pe = gt;
        },
        children: (gt, he) => {
          tp(gt, {
            get onpaneclick() {
              return E();
            },
            get onpanecontextmenu() {
              return j();
            },
            get onselectionstart() {
              return R();
            },
            get onselectionend() {
              return A();
            },
            get panOnDrag() {
              return W();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return G();
            },
            get store() {
              return pe;
            },
            set store(ze) {
              pe = ze;
            },
            children: (ze, ct) => {
              var Xe = $b(), dt = oe(Xe);
              np(dt, {
                get store() {
                  return pe;
                },
                set store(xt) {
                  pe = xt;
                },
                children: (xt, On) => {
                  var $t = Cb(), vt = L(oe($t), 2);
                  fp(vt, {
                    get onedgeclick() {
                      return P();
                    },
                    get onedgecontextmenu() {
                      return z();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return S();
                    },
                    get store() {
                      return pe;
                    },
                    set store(vn) {
                      pe = vn;
                    }
                  });
                  var Lt = L(vt, 4);
                  gp(Lt, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return ne();
                    },
                    get containerStyle() {
                      return Q();
                    },
                    get style() {
                      return re();
                    },
                    get store() {
                      return pe;
                    },
                    set store(vn) {
                      pe = vn;
                    }
                  });
                  var Bn = L(Lt, 2);
                  lp(Bn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return v();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return $();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return pe;
                    },
                    set store(vn) {
                      pe = vn;
                    }
                  });
                  var To = L(Bn, 2);
                  pp(To, {
                    get onselectionclick() {
                      return D();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return _();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return pe;
                    },
                    set store(vn) {
                      pe = vn;
                    }
                  }), Ce(2), M(xt, $t);
                },
                $$slots: { default: !0 }
              });
              var Qt = L(dt, 2);
              {
                let xt = /* @__PURE__ */ O(() => !!(pe.selectionRect && pe.selectionRectMode === "user")), On = /* @__PURE__ */ O(() => pe.selectionRect?.width), $t = /* @__PURE__ */ O(() => pe.selectionRect?.height), vt = /* @__PURE__ */ O(() => pe.selectionRect?.x), Lt = /* @__PURE__ */ O(() => pe.selectionRect?.y);
                Dl(Qt, {
                  get isVisible() {
                    return c(xt);
                  },
                  get width() {
                    return c(On);
                  },
                  get height() {
                    return c($t);
                  },
                  get x() {
                    return c(vt);
                  },
                  get y() {
                    return c(Lt);
                  }
                });
              }
              M(ze, Xe);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var at = L(Ye, 2);
      vp(at, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Ct = L(at, 2);
      op(Ct, {
        get store() {
          return pe;
        }
      });
      var Jt = L(Ct, 2);
      tt(Jt, () => ie() ?? pt), M(U, De);
    },
    $$slots: { default: !0 }
  }), fe(Ie);
}
ue(
  yp,
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
function bp(e, t) {
  de(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Me(Qf({ props: {}, nodes: [], edges: [] }));
  Wr(ys, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      J(r, a);
    }
  }), pi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = Ee(), s = oe(i);
  return tt(s, () => n() ?? pt), M(e, i), fe(o);
}
ue(bp, { children: {} }, [], [], !0);
var Sb = /* @__PURE__ */ te("<button><!></button>");
function Ro(e, t) {
  de(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), u = y(t, "children", 7), d = /* @__PURE__ */ We(t, [
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
  }, p = Sb();
  it(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Mn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = B(p);
  return tt(h, () => u() ?? pt), Z(p), M(e, p), fe(f);
}
ue(
  Ro,
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
var Eb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function wp(e) {
  var t = Eb();
  M(e, t);
}
ue(wp, {}, [], [], !0);
var Pb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function xp(e) {
  var t = Pb();
  M(e, t);
}
ue(xp, {}, [], [], !0);
var Ob = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function kp(e) {
  var t = Ob();
  M(e, t);
}
ue(kp, {}, [], [], !0);
var Nb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Cp(e) {
  var t = Nb();
  M(e, t);
}
ue(Cp, {}, [], [], !0);
var Tb = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function $p(e) {
  var t = Tb();
  M(e, t);
}
ue($p, {}, [], [], !0);
var zb = /* @__PURE__ */ te("<!> <!>", 1), Mb = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function _p(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), u = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), f = y(t, "buttonColor", 7), p = y(t, "buttonColorHover", 7), h = y(t, "buttonBorderColor", 7), g = y(t, "fitViewOptions", 7), b = y(t, "children", 7), v = y(t, "before", 7), w = y(t, "after", 7), x = /* @__PURE__ */ We(t, [
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
  ]), _ = /* @__PURE__ */ O(En);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let $ = /* @__PURE__ */ O(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), T = /* @__PURE__ */ O(() => c(_).viewport.zoom <= c(_).minZoom), V = /* @__PURE__ */ O(() => c(_).viewport.zoom >= c(_).maxZoom), D = /* @__PURE__ */ O(() => c(_).ariaLabelConfig), H = /* @__PURE__ */ O(() => r() === "horizontal" ? "horizontal" : "vertical");
  const R = () => {
    c(_).zoomIn();
  }, A = () => {
    c(_).zoomOut();
  }, P = () => {
    c(_).fitView(g());
  }, z = () => {
    let S = !c($);
    c(_).nodesDraggable = S, c(_).nodesConnectable = S, c(_).elementsSelectable = S;
  };
  var C = {
    get position() {
      return n();
    },
    set position(S = "bottom-left") {
      n(S), m();
    },
    get orientation() {
      return r();
    },
    set orientation(S = "vertical") {
      r(S), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(S = !0) {
      o(S), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(S = !0) {
      i(S), m();
    },
    get showLock() {
      return s();
    },
    set showLock(S = !0) {
      s(S), m();
    },
    get style() {
      return a();
    },
    set style(S) {
      a(S), m();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), m();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(S) {
      u(S), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(S) {
      d(S), m();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(S) {
      f(S), m();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(S) {
      p(S), m();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(S) {
      h(S), m();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(S) {
      g(S), m();
    },
    get children() {
      return b();
    },
    set children(S) {
      b(S), m();
    },
    get before() {
      return v();
    },
    set before(S) {
      v(S), m();
    },
    get after() {
      return w();
    },
    set after(S) {
      w(S), m();
    }
  };
  {
    let S = /* @__PURE__ */ O(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    ki(e, Ue(
      {
        get class() {
          return c(S);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(D)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (E, j) => {
          var Y = Mb(), F = oe(Y);
          {
            var N = (ce) => {
              var ie = Ee(), le = oe(ie);
              tt(le, v), M(ce, ie);
            };
            ae(F, (ce) => {
              v() && ce(N);
            });
          }
          var X = L(F, 2);
          {
            var ee = (ce) => {
              var ie = zb(), le = oe(ie);
              Ro(le, Ue(
                {
                  onclick: R,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(D)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => k,
                {
                  children: (we, xe) => {
                    wp(we);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = L(le, 2);
              Ro(ve, Ue(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(D)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(T);
                  }
                },
                () => k,
                {
                  children: (we, xe) => {
                    xp(we);
                  },
                  $$slots: { default: !0 }
                }
              )), M(ce, ie);
            };
            ae(X, (ce) => {
              o() && ce(ee);
            });
          }
          var q = L(X, 2);
          {
            var K = (ce) => {
              Ro(ce, Ue(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: P,
                  get title() {
                    return c(D)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, le) => {
                    kp(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(q, (ce) => {
              i() && ce(K);
            });
          }
          var W = L(q, 2);
          {
            var G = (ce) => {
              Ro(ce, Ue(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: z,
                  get title() {
                    return c(D)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, le) => {
                    var ve = Ee(), we = oe(ve);
                    {
                      var xe = (Se) => {
                        $p(Se);
                      }, pe = (Se) => {
                        Cp(Se);
                      };
                      ae(we, (Se) => {
                        c($) ? Se(xe) : Se(pe, !1);
                      });
                    }
                    M(ie, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(W, (ce) => {
              s() && ce(G);
            });
          }
          var ne = L(W, 2);
          {
            var re = (ce) => {
              var ie = Ee(), le = oe(ie);
              tt(le, b), M(ce, ie);
            };
            ae(ne, (ce) => {
              b() && ce(re);
            });
          }
          var Q = L(ne, 2);
          {
            var ge = (ce) => {
              var ie = Ee(), le = oe(ie);
              tt(le, w), M(ce, ie);
            };
            ae(Q, (ce) => {
              w() && ce(ge);
            });
          }
          M(E, Y);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return fe(C);
}
ue(
  _p,
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
var Jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Jn || (Jn = {}));
var Ab = /* @__PURE__ */ ke("<circle></circle>");
function Sp(e, t) {
  de(t, !0);
  let n = y(t, "radius", 7), r = y(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), m();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), m();
    }
  }, i = Ab();
  return Oe(() => {
    Pe(i, "cx", n()), Pe(i, "cy", n()), Pe(i, "r", n()), Ut(i, 0, ur(["svelte-flow__background-pattern", "dots", r()]));
  }), M(e, i), fe(o);
}
ue(Sp, { radius: {}, class: {} }, [], [], !0);
var Vb = /* @__PURE__ */ ke("<path></path>");
function Ep(e, t) {
  de(t, !0);
  let n = y(t, "lineWidth", 7), r = y(t, "dimensions", 7), o = y(t, "variant", 7), i = y(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), m();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), m();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), m();
    }
  }, a = Vb();
  return Oe(() => {
    Pe(a, "stroke-width", n()), Pe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ut(a, 0, ur(["svelte-flow__background-pattern", o(), i()]));
  }), M(e, a), fe(s);
}
ue(Ep, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Db = {
  [Jn.Dots]: 1,
  [Jn.Lines]: 1,
  [Jn.Cross]: 6
};
var Lb = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Pp(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => Jn.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), u = y(t, "patternClass", 7), d = y(t, "class", 7), f = /* @__PURE__ */ O(En), p = /* @__PURE__ */ O(() => r() === Jn.Dots), h = /* @__PURE__ */ O(() => r() === Jn.Cross), g = /* @__PURE__ */ O(() => Array.isArray(o()) ? o() : [o(), o()]), b = /* @__PURE__ */ O(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), v = /* @__PURE__ */ O(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), w = /* @__PURE__ */ O(() => (i() ?? Db[r()]) * c(f).viewport.zoom), x = /* @__PURE__ */ O(() => c(h) ? [c(w), c(w)] : c(v)), _ = /* @__PURE__ */ O(() => c(p) ? [c(w) / 2, c(w) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(P) {
      n(P), m();
    },
    get variant() {
      return r();
    },
    set variant(P = Jn.Dots) {
      r(P), m();
    },
    get gap() {
      return o();
    },
    set gap(P = 20) {
      o(P), m();
    },
    get size() {
      return i();
    },
    set size(P) {
      i(P), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(P = 1) {
      s(P), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(P) {
      a(P), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(P) {
      l(P), m();
    },
    get patternClass() {
      return u();
    },
    set patternClass(P) {
      u(P), m();
    },
    get class() {
      return d();
    },
    set class(P) {
      d(P), m();
    }
  }, $ = Lb();
  let T;
  var V = B($), D = B(V);
  {
    var H = (P) => {
      {
        let z = /* @__PURE__ */ O(() => c(w) / 2);
        Sp(P, {
          get radius() {
            return c(z);
          },
          get class() {
            return u();
          }
        });
      }
    }, R = (P) => {
      Ep(P, {
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
    ae(D, (P) => {
      c(p) ? P(H) : P(R, !1);
    });
  }
  Z(V);
  var A = L(V);
  return Z($), Oe(() => {
    Ut($, 0, ur([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), T = zt($, "", T, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Pe(V, "id", c(b)), Pe(V, "x", c(f).viewport.x % c(v)[0]), Pe(V, "y", c(f).viewport.y % c(v)[1]), Pe(V, "width", c(v)[0]), Pe(V, "height", c(v)[1]), Pe(V, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), Pe(A, "fill", `url(#${c(b)})`);
  }), M(e, $), fe(k);
}
ue(
  Pp,
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
var Hb = /* @__PURE__ */ ke("<rect></rect>");
function Op(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "x", 7), o = y(t, "y", 7), i = y(t, "width", 7), s = y(t, "height", 7), a = y(t, "borderRadius", 7, 5), l = y(t, "color", 7), u = y(t, "shapeRendering", 7), d = y(t, "strokeColor", 7), f = y(t, "strokeWidth", 7, 2), p = y(t, "selected", 7), h = y(t, "class", 7), g = y(t, "nodeComponent", 7);
  var b = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), m();
    },
    get x() {
      return r();
    },
    set x(k) {
      r(k), m();
    },
    get y() {
      return o();
    },
    set y(k) {
      o(k), m();
    },
    get width() {
      return i();
    },
    set width(k) {
      i(k), m();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(k = 5) {
      a(k), m();
    },
    get color() {
      return l();
    },
    set color(k) {
      l(k), m();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(k) {
      u(k), m();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(k) {
      d(k), m();
    },
    get strokeWidth() {
      return f();
    },
    set strokeWidth(k = 2) {
      f(k), m();
    },
    get selected() {
      return p();
    },
    set selected(k) {
      p(k), m();
    },
    get class() {
      return h();
    },
    set class(k) {
      h(k), m();
    },
    get nodeComponent() {
      return g();
    },
    set nodeComponent(k) {
      g(k), m();
    }
  }, v = Ee(), w = oe(v);
  {
    var x = (k) => {
      const $ = /* @__PURE__ */ O(g);
      var T = Ee(), V = oe(T);
      hi(V, () => c($), (D, H) => {
        H(D, {
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
            return f();
          },
          get selected() {
            return p();
          }
        });
      }), M(k, T);
    }, _ = (k) => {
      var $ = Hb();
      let T, V;
      Oe(() => {
        T = Ut($, 0, ur(["svelte-flow__minimap-node", h()]), null, T, { selected: p() }), Pe($, "x", r()), Pe($, "y", o()), Pe($, "rx", a()), Pe($, "ry", a()), Pe($, "width", i()), Pe($, "height", s()), Pe($, "shape-rendering", u()), V = zt($, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": f()
        });
      }), M(k, $);
    };
    ae(w, (k) => {
      g() ? k(x) : k(_, !1);
    });
  }
  return M(e, v), fe(b);
}
ue(
  Op,
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
function Ib(e, t) {
  const n = S2({
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
const ha = (e) => e instanceof Function ? e : () => e;
var jb = /* @__PURE__ */ ke("<title> </title>"), Rb = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Zb = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Np(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), u = y(t, "nodeComponent", 7), d = y(t, "bgColor", 7), f = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), h = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), b = y(t, "height", 7, 150), v = y(t, "pannable", 7, !0), w = y(t, "zoomable", 7, !0), x = y(t, "inversePan", 7), _ = y(t, "zoomStep", 7), k = y(t, "class", 7), $ = /* @__PURE__ */ We(t, [
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
  ]), T = /* @__PURE__ */ O(En), V = /* @__PURE__ */ O(() => c(T).ariaLabelConfig);
  const D = i() === void 0 ? void 0 : ha(i()), H = ha(o()), R = ha(s()), A = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let P = /* @__PURE__ */ O(() => `svelte-flow__minimap-desc-${c(T).flowId}`), z = /* @__PURE__ */ O(() => ({
    x: -c(T).viewport.x / c(T).viewport.zoom,
    y: -c(T).viewport.y / c(T).viewport.zoom,
    width: c(T).width / c(T).viewport.zoom,
    height: c(T).height / c(T).viewport.zoom
  })), C = /* @__PURE__ */ O(() => Cf(yi(c(T).nodeLookup, { filter: (Q) => !Q.hidden }), c(z))), S = /* @__PURE__ */ O(() => c(C).width / g()), E = /* @__PURE__ */ O(() => c(C).height / b()), j = /* @__PURE__ */ O(() => Math.max(c(S), c(E))), Y = /* @__PURE__ */ O(() => c(j) * g()), F = /* @__PURE__ */ O(() => c(j) * b()), N = /* @__PURE__ */ O(() => 5 * c(j)), X = /* @__PURE__ */ O(() => c(C).x - (c(Y) - c(C).width) / 2 - c(N)), ee = /* @__PURE__ */ O(() => c(C).y - (c(F) - c(C).height) / 2 - c(N)), q = /* @__PURE__ */ O(() => c(Y) + c(N) * 2), K = /* @__PURE__ */ O(() => c(F) + c(N) * 2);
  const W = () => c(j);
  var G = {
    get position() {
      return n();
    },
    set position(Q = "bottom-right") {
      n(Q), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(Q) {
      r(Q), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(Q = "transparent") {
      o(Q), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(Q) {
      i(Q), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(Q = "") {
      s(Q), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(Q = 5) {
      a(Q), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(Q = 2) {
      l(Q), m();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(Q) {
      u(Q), m();
    },
    get bgColor() {
      return d();
    },
    set bgColor(Q) {
      d(Q), m();
    },
    get maskColor() {
      return f();
    },
    set maskColor(Q) {
      f(Q), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(Q) {
      p(Q), m();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(Q) {
      h(Q), m();
    },
    get width() {
      return g();
    },
    set width(Q = 200) {
      g(Q), m();
    },
    get height() {
      return b();
    },
    set height(Q = 150) {
      b(Q), m();
    },
    get pannable() {
      return v();
    },
    set pannable(Q = !0) {
      v(Q), m();
    },
    get zoomable() {
      return w();
    },
    set zoomable(Q = !0) {
      w(Q), m();
    },
    get inversePan() {
      return x();
    },
    set inversePan(Q) {
      x(Q), m();
    },
    get zoomStep() {
      return _();
    },
    set zoomStep(Q) {
      _(Q), m();
    },
    get class() {
      return k();
    },
    set class(Q) {
      k(Q), m();
    }
  }, ne = Zb(), re = oe(ne);
  {
    let Q = /* @__PURE__ */ O(() => ["svelte-flow__minimap", k()]);
    Dv(re, () => ({ "--xy-minimap-background-color-props": d() })), ki(re.lastChild, Ue(
      {
        get position() {
          return n();
        },
        get class() {
          return c(Q);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => $,
      {
        children: (ge, ce) => {
          var ie = Ee(), le = oe(ie);
          {
            var ve = (we) => {
              var xe = Rb();
              let pe;
              var Se = B(xe);
              {
                var Ie = (De) => {
                  var qe = jb(), Ye = B(qe, !0);
                  Z(qe), Oe(() => {
                    Pe(qe, "id", c(P)), rt(Ye, r() ?? c(V)["minimap.ariaLabel"]);
                  }), M(De, qe);
                };
                ae(Se, (De) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && De(Ie);
                });
              }
              var U = L(Se);
              Tt(U, 17, () => c(T).nodes, (De) => De.id, (De, qe) => {
                const Ye = /* @__PURE__ */ O(() => c(T).nodeLookup.get(c(qe).id));
                var at = Ee(), Ct = oe(at);
                {
                  var Jt = (gt) => {
                    const he = /* @__PURE__ */ O(() => Nr(c(Ye)));
                    {
                      let ze = /* @__PURE__ */ O(() => D?.(c(Ye))), ct = /* @__PURE__ */ O(() => H(c(Ye))), Xe = /* @__PURE__ */ O(() => R(c(Ye)));
                      Op(gt, Ue(
                        {
                          get id() {
                            return c(Ye).id;
                          },
                          get x() {
                            return c(Ye).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ye).internals.positionAbsolute.y;
                          }
                        },
                        () => c(he),
                        {
                          get selected() {
                            return c(Ye).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(ze);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(ct);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return A;
                          },
                          get class() {
                            return c(Xe);
                          }
                        }
                      ));
                    }
                  };
                  ae(Ct, (gt) => {
                    c(Ye) && $f(c(Ye)) && !c(Ye).hidden && gt(Jt);
                  });
                }
                M(De, at);
              });
              var nt = L(U);
              Z(xe), Mt(xe, (De, qe) => Ib?.(De, qe), () => ({
                store: c(T),
                panZoom: c(T).panZoom,
                getViewScale: W,
                translateExtent: c(T).translateExtent,
                width: c(T).width,
                height: c(T).height,
                inversePan: x(),
                zoomStep: _(),
                pannable: v(),
                zoomable: w()
              })), Oe(() => {
                Pe(xe, "width", g()), Pe(xe, "height", b()), Pe(xe, "viewBox", `${c(X) ?? ""} ${c(ee) ?? ""} ${c(q) ?? ""} ${c(K) ?? ""}`), Pe(xe, "aria-labelledby", c(P)), pe = zt(xe, "", pe, {
                  "--xy-minimap-mask-background-color-props": f(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(j) : void 0
                }), Pe(nt, "d", `M${c(X) - c(N)},${c(ee) - c(N)}h${c(q) + c(N) * 2}v${c(K) + c(N) * 2}h${-c(q) - c(N) * 2}z
      M${c(z).x ?? ""},${c(z).y ?? ""}h${c(z).width ?? ""}v${c(z).height ?? ""}h${-c(z).width}z`);
              }), M(we, xe);
            };
            ae(le, (we) => {
              c(T).panZoom && we(ve);
            });
          }
          M(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), Z(re);
  }
  return M(e, ne), fe(G);
}
ue(
  Np,
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
var Kb = /* @__PURE__ */ te("<div><!></div>");
function Tp(e, t) {
  de(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => _e.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ We(t, [
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
  const u = En(), { getNodesBounds: d } = Et(), f = Cn("svelteflow__node_id");
  let p = /* @__PURE__ */ O(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    ($, T) => {
      const V = u.nodeLookup.get(T);
      return V && $.push(V), $;
    },
    []
  ))), h = /* @__PURE__ */ O(() => {
    const $ = d(c(p));
    return $ ? i2($, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ O(() => c(p).length === 0 ? 1 : Math.max(...c(p).map(($) => ($.internals.z || 5) + 1))), b = /* @__PURE__ */ O(() => u.nodes.filter(($) => $.selected).length), v = /* @__PURE__ */ O(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(b) === 1);
  var w = {
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), m();
    },
    get position() {
      return r();
    },
    set position($ = _e.Top) {
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
  }, x = Ee(), _ = oe(x);
  {
    var k = ($) => {
      var T = Kb();
      it(
        T,
        (D, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": D,
          ...l,
          [Mn]: H
        }),
        [
          () => c(p).reduce((D, H) => `${D}${H.id} `, "").trim(),
          () => ({
            display: Wf().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var V = B(T);
      tt(V, () => a() ?? pt), Z(T), Mt(T, (D, H) => Bf?.(D, H), () => "root"), M($, T);
    };
    ae(_, ($) => {
      u.domNode && c(v) && c(p) && $(k);
    });
  }
  return M(e, x), fe(w);
}
ue(
  Tp,
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
function cr(e) {
  const t = /* @__PURE__ */ O(En), n = /* @__PURE__ */ O(() => c(t).nodes), r = /* @__PURE__ */ O(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ O(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!m2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const sc = "tinyflow-component", Bb = [
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
], Wb = [
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
], Ll = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Yb = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Xb = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class qb {
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
    const t = document.createElement(sc);
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
    const n = document.createElement(sc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Fb = () => {
  let e = /* @__PURE__ */ Me([]), t = /* @__PURE__ */ Me([]), n = /* @__PURE__ */ Me({ x: 250, y: 100, zoom: 1 });
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
}, Ke = Fb(), Gb = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Ub = (e, t) => ({
  classGroupId: e,
  validator: t
}), zp = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), bs = "-", ac = [], Jb = "arbitrary..", Qb = (e) => {
  const t = tw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return ew(o);
      const i = o.split(bs), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return Mp(i, s, t);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? Gb(a, s) : s : a || ac;
      }
      return n[o] || ac;
    }
  };
}, Mp = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const r = e[t], o = n.nextPart.get(r);
  if (o) {
    const l = Mp(e, t + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = t === 0 ? e.join(bs) : e.slice(t).join(bs), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, ew = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Jb + r : void 0;
})(), tw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return nw(n, t);
}, nw = (e, t) => {
  const n = zp();
  for (const r in e) {
    const o = e[r];
    Hl(o, n, r, t);
  }
  return n;
}, Hl = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    rw(s, t, n, r);
  }
}, rw = (e, t, n, r) => {
  if (typeof e == "string") {
    ow(e, t, n);
    return;
  }
  if (typeof e == "function") {
    iw(e, t, n, r);
    return;
  }
  sw(e, t, n, r);
}, ow = (e, t, n) => {
  const r = e === "" ? t : Ap(t, e);
  r.classGroupId = n;
}, iw = (e, t, n, r) => {
  if (aw(e)) {
    Hl(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ub(n, e));
}, sw = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    Hl(l, Ap(t, a), n, r);
  }
}, Ap = (e, t) => {
  let n = e;
  const r = t.split(bs), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = zp(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, aw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, lw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = n[i];
      if (s !== void 0)
        return s;
      if ((s = r[i]) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      i in n ? n[i] = s : o(i, s);
    }
  };
}, Ha = "!", lc = ":", uw = [], uc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), cw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, u;
    const d = o.length;
    for (let b = 0; b < d; b++) {
      const v = o[b];
      if (s === 0 && a === 0) {
        if (v === lc) {
          i.push(o.slice(l, b)), l = b + 1;
          continue;
        }
        if (v === "/") {
          u = b;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? a++ : v === ")" && a--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let p = f, h = !1;
    f.endsWith(Ha) ? (p = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Ha) && (p = f.slice(1), h = !0)
    );
    const g = u && u > l ? u - l : void 0;
    return uc(i, h, p, g);
  };
  if (t) {
    const o = t + lc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : uc(uw, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, dw = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = t.has(s);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, fw = (e) => ({
  cache: lw(e.cacheSize),
  parseClassName: cw(e),
  sortModifiers: dw(e),
  ...Qb(e)
}), pw = /\s+/, hw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(pw);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: f,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: b
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!b, w = r(v ? g.substring(0, b) : g);
    if (!w) {
      if (!v) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(g), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), _ = h ? x + Ha : x, k = _ + w;
    if (s.indexOf(k) > -1)
      continue;
    s.push(k);
    const $ = o(w, v);
    for (let T = 0; T < $.length; ++T) {
      const V = $[T];
      s.push(_ + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, gw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Vp(n)) && (o && (o += " "), o += r);
  return o;
}, Vp = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Vp(e[r])) && (n && (n += " "), n += t);
  return n;
}, Ia = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const u = t.reduce((d, f) => f(d), e());
    return n = fw(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = hw(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(gw(...l));
}, vw = [], kt = (e) => {
  const t = (n) => n[e] || vw;
  return t.isThemeGetter = !0, t;
}, Dp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Lp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mw = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, yw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ww = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pr = (e) => mw.test(e), Ve = (e) => !!e && !Number.isNaN(Number(e)), hr = (e) => !!e && Number.isInteger(Number(e)), ga = (e) => e.endsWith("%") && Ve(e.slice(0, -1)), Yn = (e) => yw.test(e), Hp = () => !0, Cw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bw.test(e) && !ww.test(e)
), Il = () => !1, $w = (e) => xw.test(e), _w = (e) => kw.test(e), Sw = (e) => !ye(e) && !be(e), Ew = (e) => Tr(e, Rp, Il), ye = (e) => Dp.test(e), Ar = (e) => Tr(e, Zp, Cw), cc = (e) => Tr(e, Vw, Ve), Pw = (e) => Tr(e, Bp, Hp), Ow = (e) => Tr(e, Kp, Il), dc = (e) => Tr(e, Ip, Il), Nw = (e) => Tr(e, jp, _w), Li = (e) => Tr(e, Wp, $w), be = (e) => Lp.test(e), Lo = (e) => ro(e, Zp), Tw = (e) => ro(e, Kp), fc = (e) => ro(e, Ip), zw = (e) => ro(e, Rp), Mw = (e) => ro(e, jp), Hi = (e) => ro(e, Wp, !0), Aw = (e) => ro(e, Bp, !0), Tr = (e, t, n) => {
  const r = Dp.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, ro = (e, t, n = !1) => {
  const r = Lp.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ip = (e) => e === "position" || e === "percentage", jp = (e) => e === "image" || e === "url", Rp = (e) => e === "length" || e === "size" || e === "bg-size", Zp = (e) => e === "length", Vw = (e) => e === "number", Kp = (e) => e === "family-name", Bp = (e) => e === "number" || e === "weight", Wp = (e) => e === "shadow", ja = () => {
  const e = kt("color"), t = kt("font"), n = kt("text"), r = kt("font-weight"), o = kt("tracking"), i = kt("leading"), s = kt("breakpoint"), a = kt("container"), l = kt("spacing"), u = kt("radius"), d = kt("shadow"), f = kt("inset-shadow"), p = kt("text-shadow"), h = kt("drop-shadow"), g = kt("blur"), b = kt("perspective"), v = kt("aspect"), w = kt("ease"), x = kt("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...k(), be, ye], T = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], D = () => [be, ye, l], H = () => [pr, "full", "auto", ...D()], R = () => [hr, "none", "subgrid", be, ye], A = () => ["auto", {
    span: ["full", hr, be, ye]
  }, hr, be, ye], P = () => [hr, "auto", be, ye], z = () => ["auto", "min", "max", "fr", be, ye], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], S = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...D()], j = () => [pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()], Y = () => [pr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...D()], F = () => [pr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...D()], N = () => [e, be, ye], X = () => [...k(), fc, dc, {
    position: [be, ye]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", zw, Ew, {
    size: [be, ye]
  }], K = () => [ga, Lo, Ar], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    be,
    ye
  ], G = () => ["", Ve, Lo, Ar], ne = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [Ve, ga, fc, dc], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    be,
    ye
  ], ce = () => ["none", Ve, be, ye], ie = () => ["none", Ve, be, ye], le = () => [Ve, be, ye], ve = () => [pr, "full", ...D()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yn],
      breakpoint: [Yn],
      color: [Hp],
      container: [Yn],
      "drop-shadow": [Yn],
      ease: ["in", "out", "in-out"],
      font: [Sw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Yn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Yn],
      shadow: [Yn],
      spacing: ["px", Ve],
      text: [Yn],
      "text-shadow": [Yn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", pr, ye, be, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ve, ye, be, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: H()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": H()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": H()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: H()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: H()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": H()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": H()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: H()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: H()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: H()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: H()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [hr, "auto", be, ye]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pr, "full", "auto", a, ...D()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ve, pr, "auto", "initial", "none", ye]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ve, be, ye]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ve, be, ye]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [hr, "first", "last", "none", be, ye]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: A()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: A()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: D()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": D()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": D()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...S(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...S()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...S(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...S(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...S(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...S()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: D()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: D()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: D()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: D()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: D()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: D()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: D()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: D()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: D()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: D()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: D()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: E()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: E()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: E()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: E()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: E()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: E()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: E()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: E()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: E()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: E()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: E()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": D()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": D()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: j()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...Y()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...Y()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...Y()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...F()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...F()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...F()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...j()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...j()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Lo, Ar]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, Aw, Pw]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ga, ye]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Tw, Ow, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ye]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, be, ye]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ve, "none", be, cc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...D()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", be, ye]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", be, ye]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ne(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ve, "from-font", "auto", be, Ar]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ve, "auto", be, ye]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, ye]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", be, ye]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: X()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ee()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: q()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, hr, be, ye],
          radial: ["", be, ye],
          conic: [hr, be, ye]
        }, Mw, Nw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: G()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": G()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ne(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ne(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": N()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ne(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ve, be, ye]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ve, Lo, Ar]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Hi,
          Li
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Hi, Li]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ve, Ar]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Hi, Li]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ve, be, ye]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ve]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [be, ye]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ve]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: X()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ee()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: q()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", be, ye]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          be,
          ye
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ve, be, ye]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ve, be, ye]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          Hi,
          Li
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ve, be, ye]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ve, be, ye]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ve, be, ye]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ve, be, ye]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ve, be, ye]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          be,
          ye
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ve, be, ye]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ve, be, ye]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ve, be, ye]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ve, be, ye]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ve, be, ye]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ve, be, ye]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ve, be, ye]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ve, be, ye]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": D()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": D()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": D()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, ye]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ve, "initial", be, ye]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, be, ye]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ve, be, ye]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, be, ye]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [b, be, ye]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [be, ye, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ve()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ve()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ve()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ve()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: N()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: N()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, ye]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": D()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": D()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", be, ye]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ve, Lo, Ar, cc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Dw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (Zo(e, "cacheSize", t), Zo(e, "prefix", n), Zo(e, "experimentalParseClassName", r), Ii(e.theme, i.theme), Ii(e.classGroups, i.classGroups), Ii(e.conflictingClassGroups, i.conflictingClassGroups), Ii(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Zo(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), ji(e.theme, o.theme), ji(e.classGroups, o.classGroups), ji(e.conflictingClassGroups, o.conflictingClassGroups), ji(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Yp(e, o, "orderSensitiveModifiers"), e), Zo = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Ii = (e, t) => {
  if (t)
    for (const n in t)
      Zo(e, n, t[n]);
}, ji = (e, t) => {
  if (t)
    for (const n in t)
      Yp(e, t, n);
}, Yp = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Lw = (e, ...t) => typeof e == "function" ? Ia(ja, e, ...t) : Ia(() => Dw(ja(), e), ...t), Xp = /* @__PURE__ */ Ia(ja);
function Ur(...e) {
  return Xp(Wo(e));
}
var Hw = /\s+/g, Iw = (e) => typeof e != "string" || !e ? e : e.replace(Hw, " ").trim(), ws = (...e) => {
  const t = [], n = (r) => {
    if (!r && r !== 0 && r !== 0n) return;
    if (Array.isArray(r)) {
      for (let i = 0, s = r.length; i < s; i++) n(r[i]);
      return;
    }
    const o = typeof r;
    if (o === "string" || o === "number" || o === "bigint") {
      if (o === "number" && r !== r) return;
      t.push(String(r));
    } else if (o === "object") {
      const i = Object.keys(r);
      for (let s = 0, a = i.length; s < a; s++) {
        const l = i[s];
        r[l] && t.push(l);
      }
    }
  };
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    i != null && n(i);
  }
  return t.length > 0 ? Iw(t.join(" ")) : void 0;
}, pc = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Wt = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const t in e) return !1;
  return !0;
}, jw = (e, t) => {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || e[i] !== t[i]) return !1;
  }
  return !0;
}, Rw = (e, t) => {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const r = t[n];
      n in e ? e[n] = ws(e[n], r) : e[n] = r;
    }
  return e;
}, qp = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    Array.isArray(r) ? qp(r, t) : r && t.push(r);
  }
}, Fp = (...e) => {
  const t = [];
  qp(e, t);
  const n = [];
  for (let r = 0; r < t.length; r++)
    t[r] && n.push(t[r]);
  return n;
}, Ra = (e, t) => {
  const n = {};
  for (const r in e) {
    const o = e[r];
    if (r in t) {
      const i = t[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = Fp(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = Ra(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in t)
    r in e || (n[r] = t[r]);
  return n;
}, Zw = {
  twMerge: !0,
  twMergeConfig: {}
};
function Kw() {
  let e = null, t = {}, n = !1;
  return {
    get cachedTwMerge() {
      return e;
    },
    set cachedTwMerge(r) {
      e = r;
    },
    get cachedTwMergeConfig() {
      return t;
    },
    set cachedTwMergeConfig(r) {
      t = r;
    },
    get didTwMergeConfigChange() {
      return n;
    },
    set didTwMergeConfigChange(r) {
      n = r;
    },
    reset() {
      e = null, t = {}, n = !1;
    }
  };
}
var qn = Kw(), Bw = (e) => {
  const t = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...Zw, ...r }, f = o?.base ? ws(o.base, n?.base) : n?.base, p = o?.variants && !Wt(o.variants) ? Ra(s, o.variants) : s, h = o?.defaultVariants && !Wt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !Wt(d.twMergeConfig) && !jw(d.twMergeConfig, qn.cachedTwMergeConfig) && (qn.didTwMergeConfigChange = !0, qn.cachedTwMergeConfig = d.twMergeConfig);
    const g = Wt(o?.slots), b = Wt(i) ? {} : {
      // add "base" to the slots object
      base: ws(n?.base, g && o?.base),
      ...i
    }, v = g ? b : Rw(
      { ...o?.slots },
      Wt(b) ? { base: n?.base } : b
    ), w = Wt(o?.compoundVariants) ? a : Fp(o?.compoundVariants, a), x = (k) => {
      if (Wt(p) && Wt(i) && g)
        return e(f, k?.class, k?.className)(d);
      if (w && !Array.isArray(w))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof w}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const $ = (z, C = p, S = null, E = null) => {
        const j = C[z];
        if (!j || Wt(j))
          return null;
        const Y = E?.[z] ?? k?.[z];
        if (Y === null) return null;
        const F = pc(Y);
        if (typeof F == "object")
          return null;
        const N = h?.[z], X = F ?? pc(N);
        return j[X || "false"];
      }, T = () => {
        if (!p) return null;
        const z = Object.keys(p), C = [];
        for (let S = 0; S < z.length; S++) {
          const E = $(z[S], p);
          E && C.push(E);
        }
        return C;
      }, V = (z, C) => {
        if (!p || typeof p != "object") return null;
        const S = [];
        for (const E in p) {
          const j = $(E, p, z, C), Y = z === "base" && typeof j == "string" ? j : j && j[z];
          Y && S.push(Y);
        }
        return S;
      }, D = {};
      for (const z in k) {
        const C = k[z];
        C !== void 0 && (D[z] = C);
      }
      const H = (z, C) => {
        const S = typeof k?.[z] == "object" ? {
          [z]: k[z]?.initial
        } : {};
        return {
          ...h,
          ...D,
          ...S,
          ...C
        };
      }, R = (z = [], C) => {
        const S = [], E = z.length;
        for (let j = 0; j < E; j++) {
          const { class: Y, className: F, ...N } = z[j];
          let X = !0;
          const ee = H(null, C);
          for (const q in N) {
            const K = N[q], W = ee[q];
            if (Array.isArray(K)) {
              if (!K.includes(W)) {
                X = !1;
                break;
              }
            } else {
              if ((K == null || K === !1) && (W == null || W === !1))
                continue;
              if (W !== K) {
                X = !1;
                break;
              }
            }
          }
          X && (Y && S.push(Y), F && S.push(F));
        }
        return S;
      }, A = (z) => {
        const C = R(w, z);
        if (!Array.isArray(C)) return C;
        const S = {}, E = e;
        for (let j = 0; j < C.length; j++) {
          const Y = C[j];
          if (typeof Y == "string")
            S.base = E(S.base, Y)(d);
          else if (typeof Y == "object")
            for (const F in Y)
              S[F] = E(S[F], Y[F])(d);
        }
        return S;
      }, P = (z) => {
        if (l.length < 1) return null;
        const C = {}, S = H(null, z);
        for (let E = 0; E < l.length; E++) {
          const {
            slots: j = [],
            class: Y,
            className: F,
            ...N
          } = l[E];
          if (!Wt(N)) {
            let X = !0;
            for (const ee in N) {
              const q = S[ee], K = N[ee];
              if (q === void 0 || (Array.isArray(K) ? !K.includes(q) : K !== q)) {
                X = !1;
                break;
              }
            }
            if (!X) continue;
          }
          for (let X = 0; X < j.length; X++) {
            const ee = j[X];
            C[ee] || (C[ee] = []), C[ee].push([Y, F]);
          }
        }
        return C;
      };
      if (!Wt(i) || !g) {
        const z = {};
        if (typeof v == "object" && !Wt(v)) {
          const C = e;
          for (const S in v)
            z[S] = (E) => {
              const j = A(E), Y = P(E);
              return C(
                v[S],
                V(S, E),
                j ? j[S] : void 0,
                Y ? Y[S] : void 0,
                E?.class,
                E?.className
              )(d);
            };
        }
        return z;
      }
      return e(
        f,
        T(),
        R(w),
        k?.class,
        k?.className
      )(d);
    }, _ = () => {
      if (!(!p || typeof p != "object"))
        return Object.keys(p);
    };
    return x.variantKeys = _(), x.extend = o, x.base = f, x.slots = v, x.variants = p, x.defaultVariants = h, x.compoundSlots = l, x.compoundVariants = w, x;
  };
  return {
    tv: t,
    createTV: (n) => (r, o) => t(r, o ? Ra(n, o) : n)
  };
}, Ww = (e) => Wt(e) ? Xp : Lw({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), Yw = (e, t) => {
  const n = ws(e);
  return !n || !(t?.twMerge ?? !0) ? n : ((!qn.cachedTwMerge || qn.didTwMergeConfigChange) && (qn.didTwMergeConfigChange = !1, qn.cachedTwMerge = Ww(qn.cachedTwMergeConfig)), qn.cachedTwMerge(n) || void 0);
}, Xw = (...e) => (t) => Yw(e, t), { tv: qw } = Bw(Xw);
const hc = qw({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-sm border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input aria-expanded:bg-muted aria-expanded:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-8",
      "icon-xs": "size-6 rounded-[min(var(--radius-md),6px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
      "icon-lg": "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
var Fw = /* @__PURE__ */ te("<a><!></a>"), Gw = /* @__PURE__ */ te("<button><!></button>");
function je(e, t) {
  de(t, !0);
  let n = y(t, "class", 7), r = y(t, "variant", 7, "outline"), o = y(t, "size", 7, "default"), i = y(t, "ref", 15, null), s = y(t, "href", 23, () => {
  }), a = y(t, "type", 7, "button"), l = y(t, "disabled", 7), u = y(t, "children", 7), d = y(t, "primary", 7), f = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "class",
    "variant",
    "size",
    "ref",
    "href",
    "type",
    "disabled",
    "children",
    "primary"
  ]);
  d() && r("default");
  var p = {
    get class() {
      return n();
    },
    set class(w) {
      n(w), m();
    },
    get variant() {
      return r();
    },
    set variant(w = "outline") {
      r(w), m();
    },
    get size() {
      return o();
    },
    set size(w = "default") {
      o(w), m();
    },
    get ref() {
      return i();
    },
    set ref(w = null) {
      i(w), m();
    },
    get href() {
      return s();
    },
    set href(w = void 0) {
      s(w), m();
    },
    get type() {
      return a();
    },
    set type(w = "button") {
      a(w), m();
    },
    get disabled() {
      return l();
    },
    set disabled(w) {
      l(w), m();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), m();
    },
    get primary() {
      return d();
    },
    set primary(w) {
      d(w), m();
    }
  }, h = Ee(), g = oe(h);
  {
    var b = (w) => {
      var x = Fw();
      it(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...f
        }),
        [
          () => Ur(hc({ variant: r(), size: o() }), n())
        ]
      );
      var _ = B(x);
      tt(_, () => u() ?? pt), Z(x), St(x, (k) => i(k), () => i()), M(w, x);
    }, v = (w) => {
      var x = Gw();
      it(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          type: a(),
          disabled: l(),
          ...f
        }),
        [
          () => Ur(hc({ variant: r(), size: o() }), n())
        ]
      );
      var _ = B(x);
      tt(_, () => u() ?? pt), Z(x), St(x, (k) => i(k), () => i()), M(w, x);
    };
    ae(g, (w) => {
      s() ? w(b) : w(v, !1);
    });
  }
  return M(e, h), fe(p);
}
ue(
  je,
  {
    class: {},
    variant: {},
    size: {},
    ref: {},
    href: {},
    type: {},
    disabled: {},
    children: {},
    primary: {}
  },
  [],
  [],
  !0
);
function Uw(e) {
  return e !== null && typeof e == "object";
}
const Jw = ["string", "number", "bigint", "boolean"];
function Za(e) {
  return e == null || Jw.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((t) => Za(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const Ka = Symbol("box"), Qw = Symbol("is-writable");
function Tn(e, t) {
  const n = /* @__PURE__ */ O(e);
  return t ? {
    [Ka]: !0,
    [Qw]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [Ka]: !0,
    get current() {
      return e();
    }
  };
}
function ex(e) {
  return Uw(e) && Ka in e;
}
function tx(...e) {
  return function(t) {
    for (const n of e)
      if (n) {
        if (t.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
      }
  };
}
var gc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, nx = /\n/g, rx = /^\s*/, ox = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ix = /^:\s*/, sx = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ax = /^[;\s]*/, lx = /^\s+|\s+$/g, ux = `
`, vc = "/", mc = "*", Vr = "", cx = "comment", dx = "declaration";
function fx(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(g) {
    var b = g.match(nx);
    b && (n += b.length);
    var v = g.lastIndexOf(ux);
    r = ~v ? g.length - v : r + g.length;
  }
  function i() {
    var g = { line: n, column: r };
    return function(b) {
      return b.position = new s(g), u(), b;
    };
  }
  function s(g) {
    this.start = g, this.end = { line: n, column: r }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(g) {
    var b = new Error(
      t.source + ":" + n + ":" + r + ": " + g
    );
    if (b.reason = g, b.filename = t.source, b.line = n, b.column = r, b.source = e, !t.silent) throw b;
  }
  function l(g) {
    var b = g.exec(e);
    if (b) {
      var v = b[0];
      return o(v), e = e.slice(v.length), b;
    }
  }
  function u() {
    l(rx);
  }
  function d(g) {
    var b;
    for (g = g || []; b = f(); )
      b !== !1 && g.push(b);
    return g;
  }
  function f() {
    var g = i();
    if (!(vc != e.charAt(0) || mc != e.charAt(1))) {
      for (var b = 2; Vr != e.charAt(b) && (mc != e.charAt(b) || vc != e.charAt(b + 1)); )
        ++b;
      if (b += 2, Vr === e.charAt(b - 1))
        return a("End of comment missing");
      var v = e.slice(2, b - 2);
      return r += 2, o(v), e = e.slice(b), r += 2, g({
        type: cx,
        comment: v
      });
    }
  }
  function p() {
    var g = i(), b = l(ox);
    if (b) {
      if (f(), !l(ix)) return a("property missing ':'");
      var v = l(sx), w = g({
        type: dx,
        property: yc(b[0].replace(gc, Vr)),
        value: v ? yc(v[0].replace(gc, Vr)) : Vr
      });
      return l(ax), w;
    }
  }
  function h() {
    var g = [];
    d(g);
    for (var b; b = p(); )
      b !== !1 && (g.push(b), d(g));
    return g;
  }
  return u(), h();
}
function yc(e) {
  return e ? e.replace(lx, Vr) : Vr;
}
function px(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = fx(e), o = typeof t == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? t(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const hx = /\d/, gx = ["-", "_", "/", "."];
function vx(e = "") {
  if (!hx.test(e))
    return e !== e.toLowerCase();
}
function mx(e) {
  const t = [];
  let n = "", r, o;
  for (const i of e) {
    const s = gx.includes(i);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue;
    }
    const a = vx(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        t.push(n), n = i, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const l = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = l + i, r = a;
        continue;
      }
    }
    n += i, r = a, o = s;
  }
  return t.push(n), t;
}
function Gp(e) {
  return e ? mx(e).map((t) => bx(t)).join("") : "";
}
function yx(e) {
  return wx(Gp(e || ""));
}
function bx(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function wx(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function Ri(e) {
  if (!e)
    return {};
  const t = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[Gp(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return;
    }
    t[yx(r)] = o;
  }
  return px(e, n), t;
}
function xx(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function kx(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const Cx = kx(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function $x(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${Cx(t)}: ${e[t]};`).join(`
`);
}
function Up(e = {}) {
  return $x(e).replace(`
`, " ");
}
const _x = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
], Sx = new Set(_x);
function Ex(e) {
  return Sx.has(e);
}
function Jp(...e) {
  const t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = t[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && Ex(o)) {
          const u = i, d = s;
          t[o] = tx(u, d);
        } else if (a && l)
          t[o] = xx(i, s);
        else if (o === "class") {
          const u = Za(i), d = Za(s);
          u && d ? t[o] = Wo(i, s) : u ? t[o] = Wo(i) : d && (t[o] = Wo(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", f = typeof i == "string", p = typeof s == "string";
          if (u && d)
            t[o] = { ...i, ...s };
          else if (u && p) {
            const h = Ri(s);
            t[o] = { ...i, ...h };
          } else if (f && d) {
            const h = Ri(i);
            t[o] = { ...h, ...s };
          } else if (f && p) {
            const h = Ri(i), g = Ri(s);
            t[o] = { ...h, ...g };
          } else u ? t[o] = i : d ? t[o] = s : f ? t[o] = i : p && (t[o] = s);
        } else
          t[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = t[o], s = r[o];
        t[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof t.style == "object" && (t.style = Up(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
const Px = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
}, Ox = Up(Px), Nx = typeof window < "u" ? window : void 0;
function Tx(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let zx = class {
  #t;
  #e;
  constructor(e = {}) {
    const { window: t = Nx, document: n = t?.document } = e;
    t !== void 0 && (this.#t = n, this.#e = Eo((r) => {
      const o = In(t, "focusin", r), i = In(t, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? Tx(this.#t) : null;
  }
};
new zx();
class Qp {
  #t;
  #e;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(t) {
    this.#t = t, this.#e = Symbol(t);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#e;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return Fg(this.#e);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const t = Cn(this.#e);
    if (t === void 0)
      throw new Error(`Context "${this.#t}" not found`);
    return t;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(t) {
    const n = Cn(this.#e);
    return n === void 0 ? t : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(t) {
    return Wr(this.#e, t);
  }
}
function Mx(e, t) {
  switch (e) {
    case "post":
      st(t);
      break;
    case "pre":
      tn(t);
      break;
  }
}
function eh(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  Mx(t, () => {
    const a = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = lt(() => n(a, s));
    return s = a, l;
  });
}
function xs(e, t, n) {
  eh(e, "post", t, n);
}
function Ax(e, t, n) {
  eh(e, "pre", t, n);
}
xs.pre = Ax;
function Vx(e, t) {
  return {
    [Vv()]: (n) => ex(e) ? (e.current = n, lt(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null);
    }) : (e(n), lt(() => t?.(n)), () => {
      "isConnected" in n && n.isConnected || e(null);
    })
  };
}
function bc(e) {
  return e ? "true" : "false";
}
function wc(e) {
  return e ? "" : void 0;
}
function Dx(e, t) {
  return t ? "mixed" : e ? "true" : "false";
}
class Lx {
  #t;
  #e;
  attrs;
  constructor(t) {
    this.#t = t.getVariant ? t.getVariant() : null, this.#e = this.#t ? `data-${this.#t}-` : `data-${t.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((n) => [n, this.getAttr(n)]));
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${this.#e}${t}`;
  }
  selector(t, n) {
    return `[${this.getAttr(t, n)}]`;
  }
}
function Hx(e) {
  const t = new Lx(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  };
}
const Ix = "Enter", jx = " ";
function Rx(e) {
  return e instanceof HTMLElement;
}
function xc(e, t) {
  return `bits-${e}`;
}
const Zx = Hx({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), Kx = new Qp("Checkbox.Group"), th = new Qp("Checkbox.Root");
class jl {
  static create(t, n = null) {
    return th.set(new jl(t, n));
  }
  opts;
  group;
  #t = /* @__PURE__ */ O(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#t);
  }
  set trueName(t) {
    J(this.#t, t);
  }
  #e = /* @__PURE__ */ O(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#e);
  }
  set trueRequired(t) {
    J(this.#e, t);
  }
  #n = /* @__PURE__ */ O(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(t) {
    J(this.#n, t);
  }
  #r = /* @__PURE__ */ O(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(t) {
    J(this.#r, t);
  }
  attachment;
  constructor(t, n) {
    this.opts = t, this.group = n, this.attachment = Vx(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), xs.pre(
      [
        () => ll(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), xs.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(t) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (t.key === Ix) {
        t.preventDefault(), this.opts.type.current === "submit" && t.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      t.key === jx && (t.preventDefault(), this.#i());
    }
  }
  #i() {
    this.opts.indeterminate.current ? (this.opts.indeterminate.current = !1, this.opts.checked.current = !0) : this.opts.checked.current = !this.opts.checked.current;
  }
  onclick(t) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (this.opts.type.current === "submit") {
        this.#i();
        return;
      }
      t.preventDefault(), this.#i();
    }
  }
  #o = /* @__PURE__ */ O(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#o);
  }
  set snippetProps(t) {
    J(this.#o, t);
  }
  #s = /* @__PURE__ */ O(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": Dx(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": bc(this.trueRequired),
    "aria-readonly": bc(this.trueReadonly),
    "data-disabled": wc(this.trueDisabled),
    "data-readonly": wc(this.trueReadonly),
    "data-state": Bx(this.opts.checked.current, this.opts.indeterminate.current),
    [Zx.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return c(this.#s);
  }
  set props(t) {
    J(this.#s, t);
  }
}
class Rl {
  static create() {
    return new Rl(th.get());
  }
  root;
  #t = /* @__PURE__ */ O(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#t);
  }
  set trueChecked(t) {
    J(this.#t, t);
  }
  #e = /* @__PURE__ */ O(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#e);
  }
  set shouldRender(t) {
    J(this.#e, t);
  }
  constructor(t) {
    this.root = t, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(t) {
    Rx(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ O(() => ({
    type: "checkbox",
    checked: this.root.opts.checked.current === !0,
    disabled: this.root.trueDisabled,
    required: this.root.trueRequired,
    name: this.root.trueName,
    value: this.root.opts.value.current,
    readonly: this.root.trueReadonly,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#n);
  }
  set props(t) {
    J(this.#n, t);
  }
}
function Bx(e, t) {
  return t ? "indeterminate" : e ? "checked" : "unchecked";
}
var Wx = /* @__PURE__ */ te("<input/>"), Yx = /* @__PURE__ */ te("<input/>");
function nh(e, t) {
  de(t, !0);
  let n = y(t, "value", 15), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ O(() => Jp(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: Ox
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), m();
    }
  }, s = Ee(), a = oe(s);
  {
    var l = (d) => {
      var f = Wx();
      it(f, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), M(d, f);
    }, u = (d) => {
      var f = Yx();
      it(f, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ss(f, n), M(d, f);
    };
    ae(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return M(e, s), fe(i);
}
ue(nh, { value: {} }, [], [], !0);
function rh(e, t) {
  de(t, !1);
  const n = Rl.create();
  bl();
  var r = Ee(), o = oe(r);
  {
    var i = (s) => {
      nh(s, Ue(() => n.props));
    };
    ae(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  M(e, r), fe();
}
ue(rh, {}, [], [], !0);
var Xx = /* @__PURE__ */ te("<button><!></button>"), qx = /* @__PURE__ */ te("<!> <!>", 1);
function oh(e, t) {
  const n = kv();
  de(t, !0);
  let r = y(t, "checked", 15, !1), o = y(t, "ref", 15, null), i = y(t, "onCheckedChange", 7), s = y(t, "children", 7), a = y(t, "disabled", 7, !1), l = y(t, "required", 7, !1), u = y(t, "name", 23, () => {
  }), d = y(t, "value", 7, "on"), f = y(t, "id", 23, () => xc(n)), p = y(t, "indeterminate", 15, !1), h = y(t, "onIndeterminateChange", 7), g = y(t, "child", 7), b = y(t, "type", 7, "button"), v = y(t, "readonly", 7), w = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "checked",
    "ref",
    "onCheckedChange",
    "children",
    "disabled",
    "required",
    "name",
    "value",
    "id",
    "indeterminate",
    "onIndeterminateChange",
    "child",
    "type",
    "readonly"
  ]);
  const x = Kx.getOr(null);
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), xs.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const _ = jl.create(
    {
      checked: Tn(() => r(), (A) => {
        r(A), i()?.(A);
      }),
      disabled: Tn(() => a() ?? !1),
      required: Tn(() => l()),
      name: Tn(() => u()),
      value: Tn(() => d()),
      id: Tn(() => f()),
      ref: Tn(() => o(), (A) => o(A)),
      indeterminate: Tn(() => p(), (A) => {
        p(A), h()?.(A);
      }),
      type: Tn(() => b()),
      readonly: Tn(() => !!v())
    },
    x
  ), k = /* @__PURE__ */ O(() => Jp({ ...w }, _.props));
  var $ = {
    get checked() {
      return r();
    },
    set checked(A = !1) {
      r(A), m();
    },
    get ref() {
      return o();
    },
    set ref(A = null) {
      o(A), m();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(A) {
      i(A), m();
    },
    get children() {
      return s();
    },
    set children(A) {
      s(A), m();
    },
    get disabled() {
      return a();
    },
    set disabled(A = !1) {
      a(A), m();
    },
    get required() {
      return l();
    },
    set required(A = !1) {
      l(A), m();
    },
    get name() {
      return u();
    },
    set name(A = void 0) {
      u(A), m();
    },
    get value() {
      return d();
    },
    set value(A = "on") {
      d(A), m();
    },
    get id() {
      return f();
    },
    set id(A = xc(n)) {
      f(A), m();
    },
    get indeterminate() {
      return p();
    },
    set indeterminate(A = !1) {
      p(A), m();
    },
    get onIndeterminateChange() {
      return h();
    },
    set onIndeterminateChange(A) {
      h(A), m();
    },
    get child() {
      return g();
    },
    set child(A) {
      g(A), m();
    },
    get type() {
      return b();
    },
    set type(A = "button") {
      b(A), m();
    },
    get readonly() {
      return v();
    },
    set readonly(A) {
      v(A), m();
    }
  }, T = qx(), V = oe(T);
  {
    var D = (A) => {
      var P = Ee(), z = oe(P);
      {
        let C = /* @__PURE__ */ O(() => ({ props: c(k), ..._.snippetProps }));
        tt(z, g, () => c(C));
      }
      M(A, P);
    }, H = (A) => {
      var P = Xx();
      it(P, () => ({ ...c(k) }));
      var z = B(P);
      tt(z, () => s() ?? pt, () => _.snippetProps), Z(P), M(A, P);
    };
    ae(V, (A) => {
      g() ? A(D) : A(H, !1);
    });
  }
  var R = L(V, 2);
  return rh(R, {}), M(e, T), fe($);
}
ue(
  oh,
  {
    checked: {},
    ref: {},
    onCheckedChange: {},
    children: {},
    disabled: {},
    required: {},
    name: {},
    value: {},
    id: {},
    indeterminate: {},
    onIndeterminateChange: {},
    child: {},
    type: {},
    readonly: {}
  },
  [],
  [],
  !0
);
const ii = Math.min, po = Math.max, ks = Math.round, Ln = (e) => ({
  x: e,
  y: e
}), Fx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Gx = {
  start: "end",
  end: "start"
};
function Ba(e, t, n) {
  return po(e, ii(t, n));
}
function Ci(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jr(e) {
  return e.split("-")[0];
}
function $i(e) {
  return e.split("-")[1];
}
function ih(e) {
  return e === "x" ? "y" : "x";
}
function Zl(e) {
  return e === "y" ? "height" : "width";
}
const Ux = /* @__PURE__ */ new Set(["top", "bottom"]);
function vr(e) {
  return Ux.has(Jr(e)) ? "y" : "x";
}
function Kl(e) {
  return ih(vr(e));
}
function Jx(e, t, n) {
  n === void 0 && (n = !1);
  const r = $i(e), o = Kl(e), i = Zl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Cs(s)), [s, Cs(s)];
}
function Qx(e) {
  const t = Cs(e);
  return [Wa(e), t, Wa(t)];
}
function Wa(e) {
  return e.replace(/start|end/g, (t) => Gx[t]);
}
const kc = ["left", "right"], Cc = ["right", "left"], e7 = ["top", "bottom"], t7 = ["bottom", "top"];
function n7(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cc : kc : t ? kc : Cc;
    case "left":
    case "right":
      return t ? e7 : t7;
    default:
      return [];
  }
}
function r7(e, t, n, r) {
  const o = $i(e);
  let i = n7(Jr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Wa)))), i;
}
function Cs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fx[t]);
}
function o7(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sh(e) {
  return typeof e != "number" ? o7(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $s(e) {
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
function $c(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = vr(t), s = Kl(t), a = Zl(s), l = Jr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch ($i(t)) {
    case "start":
      h[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const i7 = async (e, t, n) => {
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
  } = $c(u, r, l), p = r, h = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: v,
      fn: w
    } = a[b], {
      x,
      y: _,
      data: k,
      reset: $
    } = await w({
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
    d = x ?? d, f = _ ?? f, h = {
      ...h,
      [v]: {
        ...h[v],
        ...k
      }
    }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (u = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: d,
      y: f
    } = $c(u, p, l)), b = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function ah(e, t) {
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
  } = Ci(t, e), g = sh(h), b = a[p ? f === "floating" ? "reference" : "floating" : f], v = $s(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = $s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (v.top - k.top + g.top) / _.y,
    bottom: (k.bottom - v.bottom + g.bottom) / _.y,
    left: (v.left - k.left + g.left) / _.x,
    right: (k.right - v.right + g.right) / _.x
  };
}
const s7 = (e) => ({
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
    } = Ci(e, t) || {};
    if (u == null)
      return {};
    const f = sh(d), p = {
      x: n,
      y: r
    }, h = Kl(o), g = Zl(h), b = await s.getDimensions(u), v = h === "y", w = v ? "top" : "left", x = v ? "bottom" : "right", _ = v ? "clientHeight" : "clientWidth", k = i.reference[g] + i.reference[h] - p[h] - i.floating[g], $ = p[h] - i.reference[h], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = T ? T[_] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(T))) && (V = a.floating[_] || i.floating[g]);
    const D = k / 2 - $ / 2, H = V / 2 - b[g] / 2 - 1, R = ii(f[w], H), A = ii(f[x], H), P = R, z = V - b[g] - A, C = V / 2 - b[g] / 2 + D, S = Ba(P, C, z), E = !l.arrow && $i(o) != null && C !== S && i.reference[g] / 2 - (C < P ? R : A) - b[g] / 2 < 0, j = E ? C < P ? C - P : C - z : 0;
    return {
      [h]: p[h] + j,
      data: {
        [h]: S,
        centerOffset: C - S - j,
        ...E && {
          alignmentOffset: j
        }
      },
      reset: E
    };
  }
}), a7 = function(e) {
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
        flipAlignment: b = !0,
        ...v
      } = Ci(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Jr(o), x = vr(a), _ = Jr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), $ = p || (_ || !b ? [Cs(a)] : Qx(a)), T = g !== "none";
      !p && T && $.push(...r7(a, b, g, k));
      const V = [a, ...$], D = await ah(t, v), H = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(D[w]), f) {
        const C = Jx(o, s, k);
        H.push(D[C[0]], D[C[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var A, P;
        const C = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, S = V[C];
        if (S && (!(f === "alignment" && x !== vr(S)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((j) => vr(j.placement) === x ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: R
            },
            reset: {
              placement: S
            }
          };
        let E = (P = R.filter((j) => j.overflows[0] <= 0).sort((j, Y) => j.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!E)
          switch (h) {
            case "bestFit": {
              var z;
              const j = (z = R.filter((Y) => {
                if (T) {
                  const F = vr(Y.placement);
                  return F === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((F) => F > 0).reduce((F, N) => F + N, 0)]).sort((Y, F) => Y[1] - F[1])[0]) == null ? void 0 : z[0];
              j && (E = j);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
}, l7 = /* @__PURE__ */ new Set(["left", "top"]);
async function u7(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Jr(n), a = $i(n), l = vr(n) === "y", u = l7.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = Ci(t, e);
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
const c7 = function(e) {
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
      } = t, l = await u7(t, e);
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
}, d7 = function(e) {
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
          fn: (v) => {
            let {
              x: w,
              y: x
            } = v;
            return {
              x: w,
              y: x
            };
          }
        },
        ...l
      } = Ci(e, t), u = {
        x: n,
        y: r
      }, d = await ah(t, l), f = vr(Jr(o)), p = ih(f);
      let h = u[p], g = u[f];
      if (i) {
        const v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", x = h + d[v], _ = h - d[w];
        h = Ba(x, h, _);
      }
      if (s) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = g + d[v], _ = g - d[w];
        g = Ba(x, g, _);
      }
      const b = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function qs() {
  return typeof window < "u";
}
function No(e) {
  return lh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function on(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function dr(e) {
  var t;
  return (t = (lh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function lh(e) {
  return qs() ? e instanceof Node || e instanceof on(e).Node : !1;
}
function $n(e) {
  return qs() ? e instanceof Element || e instanceof on(e).Element : !1;
}
function Rn(e) {
  return qs() ? e instanceof HTMLElement || e instanceof on(e).HTMLElement : !1;
}
function _c(e) {
  return !qs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof on(e).ShadowRoot;
}
const f7 = /* @__PURE__ */ new Set(["inline", "contents"]);
function _i(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = _n(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !f7.has(o);
}
const p7 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function h7(e) {
  return p7.has(No(e));
}
const g7 = [":popover-open", ":modal"];
function Fs(e) {
  return g7.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const v7 = ["transform", "translate", "scale", "rotate", "perspective"], m7 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], y7 = ["paint", "layout", "strict", "content"];
function Bl(e) {
  const t = Wl(), n = $n(e) ? _n(e) : e;
  return v7.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || m7.some((r) => (n.willChange || "").includes(r)) || y7.some((r) => (n.contain || "").includes(r));
}
function b7(e) {
  let t = _r(e);
  for (; Rn(t) && !$o(t); ) {
    if (Bl(t))
      return t;
    if (Fs(t))
      return null;
    t = _r(t);
  }
  return null;
}
function Wl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const w7 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function $o(e) {
  return w7.has(No(e));
}
function _n(e) {
  return on(e).getComputedStyle(e);
}
function Gs(e) {
  return $n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _r(e) {
  if (No(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _c(e) && e.host || // Fallback.
    dr(e)
  );
  return _c(t) ? t.host : t;
}
function uh(e) {
  const t = _r(e);
  return $o(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Rn(t) && _i(t) ? t : uh(t);
}
function ch(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = uh(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = on(o);
  return i ? (Ya(s), t.concat(s, s.visualViewport || [], _i(o) ? o : [], [])) : t.concat(o, ch(o, []));
}
function Ya(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function dh(e) {
  const t = _n(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Rn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = ks(n) !== i || ks(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function fh(e) {
  return $n(e) ? e : e.contextElement;
}
function ho(e) {
  const t = fh(e);
  if (!Rn(t))
    return Ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = dh(t);
  let s = (i ? ks(n.width) : n.width) / r, a = (i ? ks(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const x7 = /* @__PURE__ */ Ln(0);
function ph(e) {
  const t = on(e);
  return !Wl() || !t.visualViewport ? x7 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function k7(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== on(e) ? !1 : t;
}
function si(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = fh(e);
  let s = Ln(1);
  t && (r ? $n(r) && (s = ho(r)) : s = ho(e));
  const a = k7(i, n, r) ? ph(i) : Ln(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = on(i), h = r && $n(r) ? on(r) : r;
    let g = p, b = Ya(g);
    for (; b && r && h !== g; ) {
      const v = ho(b), w = b.getBoundingClientRect(), x = _n(b), _ = w.left + (b.clientLeft + parseFloat(x.paddingLeft)) * v.x, k = w.top + (b.clientTop + parseFloat(x.paddingTop)) * v.y;
      l *= v.x, u *= v.y, d *= v.x, f *= v.y, l += _, u += k, g = on(b), b = Ya(g);
    }
  }
  return $s({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Us(e, t) {
  const n = Gs(e).scrollLeft;
  return t ? t.left + n : si(dr(e)).left + n;
}
function hh(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Us(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function C7(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = dr(r), a = t ? Fs(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ln(1);
  const d = Ln(0), f = Rn(r);
  if ((f || !f && !i) && ((No(r) !== "body" || _i(s)) && (l = Gs(r)), Rn(r))) {
    const h = si(r);
    u = ho(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? hh(s, l) : Ln(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function $7(e) {
  return Array.from(e.getClientRects());
}
function _7(e) {
  const t = dr(e), n = Gs(e), r = e.ownerDocument.body, o = po(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = po(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Us(e);
  const a = -n.scrollTop;
  return _n(r).direction === "rtl" && (s += po(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Sc = 25;
function S7(e, t) {
  const n = on(e), r = dr(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Wl();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Us(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Sc && (i -= g);
  } else u <= Sc && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const E7 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function P7(e, t) {
  const n = si(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Rn(e) ? ho(e) : Ln(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Ec(e, t, n) {
  let r;
  if (t === "viewport")
    r = S7(e, n);
  else if (t === "document")
    r = _7(dr(e));
  else if ($n(t))
    r = P7(t, n);
  else {
    const o = ph(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $s(r);
}
function gh(e, t) {
  const n = _r(e);
  return n === t || !$n(n) || $o(n) ? !1 : _n(n).position === "fixed" || gh(n, t);
}
function O7(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ch(e, []).filter((a) => $n(a) && No(a) !== "body"), o = null;
  const i = _n(e).position === "fixed";
  let s = i ? _r(e) : e;
  for (; $n(s) && !$o(s); ) {
    const a = _n(s), l = Bl(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && E7.has(o.position) || _i(s) && !l && gh(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = _r(s);
  }
  return t.set(e, r), r;
}
function N7(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fs(t) ? [] : O7(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Ec(t, u, o);
    return l.top = po(d.top, l.top), l.right = ii(d.right, l.right), l.bottom = ii(d.bottom, l.bottom), l.left = po(d.left, l.left), l;
  }, Ec(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function T7(e) {
  const {
    width: t,
    height: n
  } = dh(e);
  return {
    width: t,
    height: n
  };
}
function z7(e, t, n) {
  const r = Rn(t), o = dr(t), i = n === "fixed", s = si(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ln(0);
  function u() {
    l.x = Us(o);
  }
  if (r || !r && !i)
    if ((No(t) !== "body" || _i(o)) && (a = Gs(t)), r) {
      const h = si(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? hh(o, a) : Ln(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function va(e) {
  return _n(e).position === "static";
}
function Pc(e, t) {
  if (!Rn(e) || _n(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return dr(e) === n && (n = n.ownerDocument.body), n;
}
function vh(e, t) {
  const n = on(e);
  if (Fs(e))
    return n;
  if (!Rn(e)) {
    let o = _r(e);
    for (; o && !$o(o); ) {
      if ($n(o) && !va(o))
        return o;
      o = _r(o);
    }
    return n;
  }
  let r = Pc(e, t);
  for (; r && h7(r) && va(r); )
    r = Pc(r, t);
  return r && $o(r) && va(r) && !Bl(r) ? n : r || b7(e) || n;
}
const M7 = async function(e) {
  const t = this.getOffsetParent || vh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: z7(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function A7(e) {
  return _n(e).direction === "rtl";
}
const V7 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: C7,
  getDocumentElement: dr,
  getClippingRect: N7,
  getOffsetParent: vh,
  getElementRects: M7,
  getClientRects: $7,
  getDimensions: T7,
  getScale: ho,
  isElement: $n,
  isRTL: A7
}, D7 = c7, L7 = d7, H7 = a7, I7 = s7, j7 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: V7,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return i7(e, t, {
    ...o,
    platform: i
  });
}, R7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Z7 = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, K7 = Symbol("lucide-context"), B7 = () => Cn(K7);
var W7 = /* @__PURE__ */ ke("<svg><!><!></svg>");
function Yl(e, t) {
  de(t, !0);
  const n = B7() ?? {}, r = y(t, "name", 7), o = y(t, "color", 23, () => n.color ?? "currentColor"), i = y(t, "size", 23, () => n.size ?? 24), s = y(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = y(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = y(t, "iconNode", 23, () => []), u = y(t, "children", 7), d = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]), f = /* @__PURE__ */ O(() => a() ? Number(s()) * 24 / Number(i()) : s());
  var p = {
    get name() {
      return r();
    },
    set name(v) {
      r(v), m();
    },
    get color() {
      return o();
    },
    set color(v = n.color ?? "currentColor") {
      o(v), m();
    },
    get size() {
      return i();
    },
    set size(v = n.size ?? 24) {
      i(v), m();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(v = n.strokeWidth ?? 2) {
      s(v), m();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(v = n.absoluteStrokeWidth ?? !1) {
      a(v), m();
    },
    get iconNode() {
      return l();
    },
    set iconNode(v = []) {
      l(v), m();
    },
    get children() {
      return u();
    },
    set children(v) {
      u(v), m();
    }
  }, h = W7();
  it(
    h,
    (v) => ({
      ...R7,
      ...v,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": c(f),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        t.class
      ]
    }),
    [
      () => !u() && !Z7(d) && { "aria-hidden": "true" }
    ]
  );
  var g = B(h);
  Tt(g, 17, l, Xr, (v, w) => {
    var x = /* @__PURE__ */ O(() => _o(c(w), 2));
    let _ = () => c(x)[0], k = () => c(x)[1];
    var $ = Ee(), T = oe($);
    Vd(T, _, !0, (V, D) => {
      it(V, () => ({ ...k() }));
    }), M(v, $);
  });
  var b = L(g);
  return tt(b, () => u() ?? pt), Z(h), M(e, h), fe(p);
}
ue(
  Yl,
  {
    name: {},
    color: {},
    size: {},
    strokeWidth: {},
    absoluteStrokeWidth: {},
    iconNode: {},
    children: {}
  },
  [],
  [],
  !0
);
function mh(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Yl(e, Ue({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = Ee(), a = oe(s);
      tt(a, () => t.children ?? pt), M(o, s);
    },
    $$slots: { default: !0 }
  })), fe();
}
ue(mh, {}, [], [], !0);
function yh(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Yl(e, Ue({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = Ee(), a = oe(s);
      tt(a, () => t.children ?? pt), M(o, s);
    },
    $$slots: { default: !0 }
  })), fe();
}
ue(yh, {}, [], [], !0);
var Y7 = /* @__PURE__ */ te('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function bh(e, t) {
  de(t, !0);
  let n = y(t, "ref", 15, null), r = y(t, "checked", 15, !1), o = y(t, "indeterminate", 15, !1), i = y(t, "class", 7), s = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "checked",
    "indeterminate",
    "class"
  ]);
  var a = {
    get ref() {
      return n();
    },
    set ref(d = null) {
      n(d), m();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), m();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), m();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), m();
    }
  }, l = Ee(), u = oe(l);
  {
    const d = (p, h) => {
      let g = () => h?.().checked, b = () => h?.().indeterminate;
      var v = Y7(), w = B(v);
      {
        var x = (k) => {
          mh(k, {});
        }, _ = (k) => {
          var $ = Ee(), T = oe($);
          {
            var V = (D) => {
              yh(D, {});
            };
            ae(
              T,
              (D) => {
                b() && D(V);
              },
              !0
            );
          }
          M(k, $);
        };
        ae(w, (k) => {
          g() ? k(x) : k(_, !1);
        });
      }
      Z(v), M(p, v);
    };
    let f = /* @__PURE__ */ O(() => Ur("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    hi(u, () => oh, (p, h) => {
      h(p, Ue(
        {
          "data-slot": "checkbox",
          get class() {
            return c(f);
          }
        },
        () => s,
        {
          get ref() {
            return n();
          },
          set ref(g) {
            n(g);
          },
          get checked() {
            return r();
          },
          set checked(g) {
            r(g);
          },
          get indeterminate() {
            return o();
          },
          set indeterminate(g) {
            o(g);
          },
          children: d,
          $$slots: { default: !0 }
        }
      ));
    });
  }
  return M(e, l), fe(a);
}
ue(bh, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var X7 = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const q7 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function wh(e, t) {
  de(t, !0), Je(e, q7);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ We(t, [
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
      n(h), m();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), m();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), m();
    }
  }, u = X7();
  it(
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
  kr(d);
  var f = L(d, 2);
  yt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = L(f, 2);
  return je(p, {
    variant: "outline",
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      Ce();
      var b = Te();
      Oe(() => rt(b, i())), M(h, b);
    },
    $$slots: { default: !0 }
  }), Z(u), Oe(() => Wi(d, o())), M(e, u), fe(l);
}
ue(
  wh,
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
var F7 = /* @__PURE__ */ te("<input/>"), G7 = /* @__PURE__ */ te("<input/>");
function yt(e, t) {
  de(t, !0);
  let n = y(t, "ref", 15, null), r = y(t, "value", 15), o = y(t, "type", 7), i = y(t, "files", 15), s = y(t, "class", 7), a = y(t, "data-slot", 7, "input"), l = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "value",
    "type",
    "files",
    "class",
    "data-slot"
  ]);
  var u = {
    get ref() {
      return n();
    },
    set ref(g = null) {
      n(g), m();
    },
    get value() {
      return r();
    },
    set value(g) {
      r(g), m();
    },
    get type() {
      return o();
    },
    set type(g) {
      o(g), m();
    },
    get files() {
      return i();
    },
    set files(g) {
      i(g), m();
    },
    get class() {
      return s();
    },
    set class(g) {
      s(g), m();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(g = "input") {
      a(g), m();
    }
  }, d = Ee(), f = oe(d);
  {
    var p = (g) => {
      var b = F7();
      it(
        b,
        (v) => ({
          "data-slot": a(),
          class: v,
          type: "file",
          ...l
        }),
        [
          () => Ur("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), St(b, (v) => n(v), () => n()), Bv(b, i), ss(b, r), M(g, b);
    }, h = (g) => {
      var b = G7();
      it(
        b,
        (v) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: v,
          type: o(),
          ...l
        }),
        [
          () => Ur("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), St(b, (v) => n(v), () => n()), ss(b, r), M(g, b);
    };
    ae(f, (g) => {
      o() === "file" ? g(p) : g(h, !1);
    });
  }
  return M(e, d), fe(u);
}
ue(
  yt,
  {
    ref: {},
    value: {},
    type: {},
    files: {},
    class: {},
    "data-slot": {}
  },
  [],
  [],
  !0
);
var U7 = /* @__PURE__ */ te("<textarea></textarea>");
function Qe(e, t) {
  de(t, !0);
  let n = y(t, "ref", 15, null), r = y(t, "value", 15), o = y(t, "class", 7), i = y(t, "data-slot", 7, "textarea"), s = y(t, "height", 7), a = y(t, "autoHeight", 7, !0), l = y(t, "maxHeight", 7), u = y(t, "onHeightChange", 7), d = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "value",
    "class",
    "data-slot",
    "height",
    "autoHeight",
    "maxHeight",
    "onHeightChange"
  ]), f, p;
  function h() {
    if (f && a()) {
      if (s() !== void 0) {
        const _ = typeof s() == "number" ? `${s()}px` : s();
        f.style.height = _, f.style.overflowY = "hidden", u()?.(_);
        return;
      }
      f.style.height = "auto", f.style.overflowY = "hidden";
      let x = f.scrollHeight;
      if (!p) {
        const _ = t.rows || 1, k = getComputedStyle(f);
        p = parseFloat(k.fontSize) * 1.2 * _ + parseFloat(k.paddingTop) + parseFloat(k.paddingBottom) + parseFloat(k.borderTopWidth);
      }
      if (x < p && (x = p), l()) {
        const _ = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(_) ? (f.style.height = _, f.style.overflowY = "auto") : f.style.height = `${x}px`;
      } else
        f.style.height = `${x}px`;
      u()?.(f.style.height);
    }
  }
  st(() => {
    h();
  });
  var g = {
    get ref() {
      return n();
    },
    set ref(x = null) {
      n(x), m();
    },
    get value() {
      return r();
    },
    set value(x) {
      r(x), m();
    },
    get class() {
      return o();
    },
    set class(x) {
      o(x), m();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(x = "textarea") {
      i(x), m();
    },
    get height() {
      return s();
    },
    set height(x) {
      s(x), m();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(x = !0) {
      a(x), m();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(x) {
      l(x), m();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(x) {
      u(x), m();
    }
  }, b = U7();
  dv(b);
  var v = (x) => {
    h(), t.oninput?.(x);
  }, w = (x) => {
    h(), t.onchange?.(x);
  };
  return it(
    b,
    (x) => ({
      spellcheck: "false",
      "data-slot": i(),
      oninput: v,
      onchange: w,
      class: x,
      ...d
    }),
    [
      () => Ur("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), St(b, (x) => f = x, () => f), ss(b, r), M(e, b), fe(g);
}
ue(
  Qe,
  {
    ref: {},
    value: {},
    class: {},
    "data-slot": {},
    height: {},
    autoHeight: {},
    maxHeight: {},
    onHeightChange: {}
  },
  [],
  [],
  !0
);
var J7 = /* @__PURE__ */ te('<div role="button"><!></div>'), Q7 = /* @__PURE__ */ te("<div></div>");
function xh(e, t) {
  const n = xu(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = xu(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), m();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), m();
    }
  };
  bl();
  var u = Q7();
  return it(u, () => ({
    ...r,
    class: `tf-tabs ${gl(r), lt(() => r.class) ?? ""}`
  })), Tt(u, 5, o, Xr, (d, f, p) => {
    var h = J7();
    Pe(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), a(c(f), p));
    };
    var g = B(h);
    {
      var b = (w) => {
        var x = Te();
        Oe(() => rt(x, (c(f), lt(() => c(f).label)))), M(w, x);
      }, v = (w) => {
        var x = Ee(), _ = oe(x);
        tt(_, () => (c(f), lt(() => c(f).label) ?? pt)), M(w, x);
      };
      ae(g, (w) => {
        c(f), lt(() => typeof c(f).label == "string") ? w(b) : w(v, !1);
      });
    }
    Z(h), Oe(() => Ut(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), M(d, h);
  }), Z(u), M(e, u), fe(l);
}
Or(["click", "keydown"]);
ue(xh, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var e5 = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), t5 = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), n5 = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), r5 = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o5 = /* @__PURE__ */ te("<div></div>");
const i5 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function kh(e, t) {
  de(t, !0), Je(e, i5);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Vt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), m();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), m();
    }
  }, a = o5();
  return Tt(a, 21, n, Xr, (l, u, d) => {
    var f = r5(), p = B(f);
    Pe(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), i(c(u)));
    };
    var h = B(p);
    {
      var g = ($) => {
        var T = e5(), V = B(T);
        mr(V, {
          get target() {
            return c(u).icon;
          }
        }), Z(T), M($, T);
      };
      ae(h, ($) => {
        c(u).icon && $(g);
      });
    }
    var b = L(h, 2);
    mr(b, {
      get target() {
        return c(u).title;
      }
    });
    var v = L(b, 2);
    Z(p);
    var w = L(p, 2);
    {
      var x = ($) => {
        var T = t5(), V = B(T);
        mr(V, {
          get target() {
            return c(u).description;
          }
        }), Z(T), M($, T);
      };
      ae(w, ($) => {
        c(u).description && $(x);
      });
    }
    var _ = L(w, 2);
    {
      var k = ($) => {
        var T = n5(), V = B(T);
        mr(V, {
          get target() {
            return c(u).content;
          }
        }), Z(T), M($, T);
      };
      ae(_, ($) => {
        o().includes(c(u).key) && $(k);
      });
    }
    Z(f), Oe(($) => Ut(v, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), M(l, f);
  }), Z(a), Oe(() => {
    zt(a, t.style), Ut(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), M(e, a), fe(s);
}
Or(["click", "keydown"]);
ue(kh, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function mr(e, t) {
  de(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), m();
    }
  }, o = Ee(), i = oe(o);
  {
    var s = (l) => {
      var u = Ee(), d = oe(u);
      tt(d, () => n() ?? pt), M(l, u);
    }, a = (l) => {
      var u = Ee(), d = oe(u);
      Hs(d, n), M(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return M(e, o), fe(r);
}
ue(mr, { target: {} }, [], [], !0);
var s5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), a5 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), l5 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), u5 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), c5 = /* @__PURE__ */ te("<!> <!>", 1), d5 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), f5 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), p5 = /* @__PURE__ */ te("<div><!></div>");
function Ot(e, t) {
  de(t, !0);
  const n = (x, _ = pt) => {
    var k = Ee(), $ = oe(k);
    Tt($, 19, _, (T, V) => `${V}_${T.value}`, (T, V) => {
      var D = l5(), H = oe(D);
      H.__click = () => g(c(V));
      var R = B(H), A = B(R);
      {
        var P = (E) => {
          var j = s5();
          M(E, j);
        };
        ae(A, (E) => {
          c(V).children && c(V).children.length > 0 && E(P);
        });
      }
      Z(R);
      var z = L(R, 2);
      mr(z, {
        get target() {
          return c(V).label;
        }
      }), Z(H);
      var C = L(H, 2);
      {
        var S = (E) => {
          var j = a5(), Y = B(j);
          n(Y, () => c(V).children), Z(j), M(E, j);
        };
        ae(C, (E) => {
          c(V).children && c(V).children.length > 0 && (a() || u().includes(c(V).value)) && E(S);
        });
      }
      M(T, D);
    }), M(x, k);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ We(t, [
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
  ]), p = /* @__PURE__ */ O(() => {
    const x = [], _ = (k) => {
      for (let $ of k)
        i().length > 0 ? i().includes($.value) && x.push($) : s().includes($.value) && x.push($), $.children && $.children.length > 0 && _($.children);
    };
    return _(r()), x;
  }), h;
  function g(x) {
    h?.hide(), o()?.(x);
  }
  var b = {
    get items() {
      return r();
    },
    set items(x) {
      r(x), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(x) {
      o(x), m();
    },
    get value() {
      return i();
    },
    set value(x = []) {
      i(x), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(x = []) {
      s(x), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(x = !0) {
      a(x), m();
    },
    get multiple() {
      return l();
    },
    set multiple(x = !1) {
      l(x), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(x = []) {
      u(x), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(x) {
      d(x), m();
    }
  }, v = p5();
  it(v, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var w = B(v);
  return St(
    zr(w, {
      floating: (x) => {
        var _ = u5(), k = B(_);
        n(k, r), Z(_), M(x, _);
      },
      children: (x, _) => {
        var k = f5();
        it(k, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var $ = B(k);
        Tt(
          $,
          23,
          () => c(p),
          (T, V) => `${V}_${T.value}`,
          (T, V, D) => {
            var H = Ee(), R = oe(H);
            {
              var A = (z) => {
                var C = Ee(), S = oe(C);
                {
                  var E = (j) => {
                    mr(j, {
                      get target() {
                        return c(V).label;
                      }
                    });
                  };
                  ae(S, (j) => {
                    c(D) === 0 && j(E);
                  });
                }
                M(z, C);
              }, P = (z) => {
                var C = c5(), S = oe(C);
                mr(S, {
                  get target() {
                    return c(V).label;
                  }
                });
                var E = L(S, 2);
                {
                  var j = (Y) => {
                    var F = Te(",");
                    M(Y, F);
                  };
                  ae(E, (Y) => {
                    c(D) < c(p).length - 1 && Y(j);
                  });
                }
                M(z, C);
              };
              ae(R, (z) => {
                l() ? z(P, !1) : z(A);
              });
            }
            M(T, H);
          },
          (T) => {
            var V = d5(), D = B(V, !0);
            Z(V), Oe(() => rt(D, d())), M(T, V);
          }
        ), Z($), Ce(2), Z(k), M(x, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => h = x,
    () => h
  ), Z(v), M(e, v), fe(b);
}
Or(["click"]);
ue(
  Ot,
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
const h5 = ({
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
  function f() {
    j7(e, u, {
      placement: r,
      middleware: [
        D7(o),
        // 手动偏移配置
        H7(i),
        //自动翻转
        L7(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [I7({ element: d })] : []
      ]
    }).then(({ x: w, y: x, placement: _, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${x}px`
      }), l) {
        const { x: $, y: T } = k.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
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
  function b(w) {
    w.stopPropagation(), p ? g() : h();
  }
  function v(w) {
    u.contains(w.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, b);
  }), document.addEventListener("click", v), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, b);
      }), document.removeEventListener("click", v);
    },
    hide() {
      g();
    },
    isVisible() {
      return p;
    }
  };
};
var g5 = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function zr(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Zn(() => (a = h5({
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
    set children(b) {
      n(b), m();
    },
    get floating() {
      return r();
    },
    set floating(b) {
      r(b), m();
    },
    get placement() {
      return o();
    },
    set placement(b = "bottom") {
      o(b), m();
    }
  }, d = g5(), f = B(d), p = B(f);
  tt(p, n), Z(f), St(f, (b) => i = b, () => i);
  var h = L(f, 2), g = B(h);
  return tt(g, r), Z(h), St(h, (b) => s = b, () => s), Z(d), M(e, d), fe(u);
}
ue(zr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ze(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), m();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), m();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), m();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), m();
    }
  }, a = Ee(), l = oe(a);
  return Vd(l, () => `h${r()}`, !1, (u, d) => {
    it(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Ee(), p = oe(f);
    tt(p, () => n() ?? pt), M(d, f);
  }), M(e, a), fe(s);
}
ue(Ze, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var v5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const m5 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Si(e, t) {
  de(t, !0), Je(e, m5);
  const n = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ O(() => Ur("input-btn-more", t.class));
    je(e, Ue(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = v5();
          M(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  fe();
}
ue(Si, {}, [], [], !0);
const y5 = () => ({ deleteNode: (e) => {
  Ke.removeNode(e), Ke.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), or = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, b5 = () => ({ copyNode: (e) => {
  const t = Ke.getNode(e);
  if (t) {
    const n = or(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ke.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ht = () => Cn("svelteflow__node_id"), Sr = () => Cn("tinyflow_options");
var w5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), x5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), k5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), C5 = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), $5 = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), _5 = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), S5 = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), E5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), P5 = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), O5 = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const N5 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function gn(e, t) {
  de(t, !0), Je(e, N5);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), f = y(t, "allowSettingOfCondition", 7, !0), p = y(t, "showSourceHandle", 7, !0), h = y(t, "showTargetHandle", 7, !0), g = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: v, getNode: w } = Et(), x = /* @__PURE__ */ O(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = y5(), { copyNode: k } = b5(), $ = Sr(), T = () => {
    $.onNodeExecute?.(w(r()));
  };
  let V = ht();
  var D = {
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
      return f();
    },
    set allowSettingOfCondition(N = !0) {
      f(N), m();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(N = !0) {
      p(N), m();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(N = !0) {
      h(N), m();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(N) {
      g(N), m();
    }
  }, H = O5(), R = oe(H);
  {
    var A = (N) => {
      Tp(N, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (X, ee) => {
          var q = P5(), K = B(q);
          {
            var W = (ie) => {
              je(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (le, ve) => {
                  var we = w5();
                  M(le, we);
                },
                $$slots: { default: !0 }
              });
            };
            ae(K, (ie) => {
              u() && ie(W);
            });
          }
          var G = L(K, 2);
          {
            var ne = (ie) => {
              je(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (le, ve) => {
                  var we = x5();
                  M(le, we);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (ie) => {
              l() && ie(ne);
            });
          }
          var re = L(G, 2);
          {
            var Q = (ie) => {
              je(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (le, ve) => {
                  var we = k5();
                  M(le, we);
                },
                $$slots: { default: !0 }
              });
            };
            ae(re, (ie) => {
              a() && ie(Q);
            });
          }
          var ge = L(re, 2);
          {
            var ce = (ie) => {
              zr(ie, {
                placement: "bottom",
                floating: (le) => {
                  var ve = S5(), we = B(ve), xe = L(B(we));
                  yt(xe, {
                    style: "width: 100%;",
                    onchange: (he) => {
                      const ze = he.target.value;
                      v(V, { title: ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(we);
                  var pe = L(we, 2), Se = L(B(pe));
                  Qe(Se, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (he) => {
                      const ze = he.target.value;
                      v(V, { description: ze });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(pe);
                  var Ie = L(pe, 2);
                  {
                    var U = (he) => {
                      var ze = C5(), ct = L(B(ze));
                      Qe(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const dt = Xe.target.value;
                          v(V, { condition: dt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(ze), M(he, ze);
                    };
                    ae(Ie, (he) => {
                      f() && he(U);
                    });
                  }
                  var nt = L(Ie, 2), De = L(B(nt), 2);
                  kr(De), De.__change = (he) => {
                    const ze = he.target.checked;
                    v(V, { loopEnable: ze });
                  }, Z(nt);
                  var qe = L(nt, 2);
                  {
                    var Ye = (he) => {
                      var ze = $5(), ct = oe(ze), Xe = L(B(ct));
                      {
                        let $t = /* @__PURE__ */ O(() => n().loopIntervalMs || "1000");
                        Qe(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (vt) => {
                            const Lt = vt.target.value;
                            v(V, { loopIntervalMs: Lt });
                          },
                          get value() {
                            return c($t);
                          }
                        });
                      }
                      Z(ct);
                      var dt = L(ct, 2), Qt = L(B(dt));
                      {
                        let $t = /* @__PURE__ */ O(() => n().maxLoopCount || "0");
                        Qe(Qt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (vt) => {
                            const Lt = vt.target.value;
                            v(V, { maxLoopCount: Lt });
                          },
                          get value() {
                            return c($t);
                          }
                        });
                      }
                      Z(dt);
                      var xt = L(dt, 2), On = L(B(xt));
                      Qe(On, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: ($t) => {
                          const vt = $t.target.value;
                          v(V, { loopBreakCondition: vt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(xt), M(he, ze);
                    };
                    ae(qe, (he) => {
                      n().loopEnable && he(Ye);
                    });
                  }
                  var at = L(qe, 2), Ct = L(B(at), 2);
                  kr(Ct), Ct.__change = (he) => {
                    const ze = he.target.checked;
                    v(V, { retryEnable: ze });
                  }, Z(at);
                  var Jt = L(at, 2);
                  {
                    var gt = (he) => {
                      var ze = _5(), ct = oe(ze), Xe = L(B(ct));
                      {
                        let $t = /* @__PURE__ */ O(() => n().retryIntervalMs || "1000");
                        Qe(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (vt) => {
                            const Lt = vt.target.value;
                            v(V, { retryIntervalMs: Lt });
                          },
                          get value() {
                            return c($t);
                          }
                        });
                      }
                      Z(ct);
                      var dt = L(ct, 2), Qt = L(B(dt));
                      {
                        let $t = /* @__PURE__ */ O(() => n().maxRetryCount || "3");
                        Qe(Qt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (vt) => {
                            const Lt = vt.target.value;
                            v(V, { maxRetryCount: Lt });
                          },
                          get value() {
                            return c($t);
                          }
                        });
                      }
                      Z(dt);
                      var xt = L(dt, 2), On = L(B(xt), 2);
                      kr(On), On.__change = ($t) => {
                        const vt = $t.target.checked;
                        v(V, { resetRetryCountAfterNormal: vt });
                      }, Z(xt), Oe(() => na(On, !!n().resetRetryCountAfterNormal)), M(he, ze);
                    };
                    ae(Jt, (he) => {
                      n().retryEnable && he(gt);
                    });
                  }
                  Z(ve), Oe(() => {
                    na(De, !!n().loopEnable), na(Ct, !!n().retryEnable);
                  }), M(le, ve);
                },
                children: (le, ve) => {
                  je(le, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (we, xe) => {
                      var pe = E5();
                      M(we, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(ge, (ie) => {
              d() && ie(ce);
            });
          }
          Z(q), M(X, q);
        },
        $$slots: { default: !0 }
      });
    };
    ae(R, (N) => {
      (a() || l() || u()) && N(A);
    });
  }
  var P = L(R, 2), z = L(B(P), 2), C = B(z);
  kh(C, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return b;
    },
    onChange: (N, X) => {
      v(r(), { expand: X?.includes("key") }), g()?.(X?.includes("key") ? "key" : "");
    }
  }), Z(z), Z(P);
  var S = L(P, 2);
  {
    var E = (N) => {
      $r(N, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(S, (N) => {
      h() && N(E);
    });
  }
  var j = L(S, 2);
  {
    var Y = (N) => {
      $r(N, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(j, (N) => {
      p() && N(Y);
    });
  }
  var F = L(j, 2);
  return tt(F, () => i() ?? pt), M(e, H), fe(D);
}
Or(["change"]);
ue(
  gn,
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
var T5 = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), z5 = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), M5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), A5 = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const V5 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Ch(e, t) {
  de(t, !0), Je(e, V5);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = ht(), i = cr(o), s = /* @__PURE__ */ O(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = Et(), l = (D, H) => {
    a(o, (R) => {
      let A = R.data.parameters;
      return A[r()][D] = H, { parameters: A };
    });
  }, u = (D, H) => {
    const R = H.target.value;
    l(D, R);
  }, d = (D) => {
    const H = D.target.value;
    l("name", H);
  }, f = (D) => {
    l("required", D);
  }, p = (D) => {
    const H = D.value;
    l("formType", H);
  }, h = (D) => {
    const H = D.value;
    l("contentType", H);
  };
  let g;
  const b = () => {
    a(o, (D) => {
      let H = D.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), g?.hide();
  };
  var v = {
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), m();
    },
    get index() {
      return r();
    },
    set index(D) {
      r(D), m();
    }
  }, w = A5(), x = oe(w), _ = B(x);
  yt(_, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z(x);
  var k = L(x, 2), $ = B(k);
  bh($, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: f
  }), Z(k);
  var T = L(k, 2), V = B(T);
  return St(
    zr(V, {
      placement: "bottom",
      floating: (D) => {
        var H = z5(), R = B(H), A = L(B(R));
        {
          let K = /* @__PURE__ */ O(() => c(s).contentType ? [c(s).contentType] : []);
          Ot(A, {
            get items() {
              return Ll;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        Z(R);
        var P = L(R, 2), z = L(B(P));
        {
          let K = /* @__PURE__ */ O(() => c(s).formType ? [c(s).formType] : []);
          Ot(z, {
            get items() {
              return Yb;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(K);
            },
            onSelect: p
          });
        }
        Z(P);
        var C = L(P, 2);
        {
          var S = (K) => {
            var W = T5(), G = L(B(W));
            {
              let ne = /* @__PURE__ */ O(() => c(s).enums?.join(`
`));
              Qe(G, {
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
            Z(W), M(K, W);
          };
          ae(C, (K) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && K(S);
          });
        }
        var E = L(C, 2), j = L(B(E));
        Qe(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            u("formLabel", K);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(E);
        var Y = L(E, 2), F = L(B(Y));
        Qe(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formDescription", K);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(Y);
        var N = L(Y, 2), X = L(B(N));
        Qe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formPlaceholder", K);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(N);
        var ee = L(N, 2), q = B(ee);
        je(q, {
          variant: "destructive",
          onclick: b,
          children: (K, W) => {
            Ce();
            var G = Te("删除");
            M(K, G);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(H), M(D, H);
      },
      children: (D, H) => {
        je(D, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (R, A) => {
            var P = M5();
            M(R, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => g = D,
    () => g
  ), Z(T), M(e, w), fe(v);
}
ue(Ch, { parameter: {}, index: {} }, [], [], !0);
var D5 = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), L5 = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), H5 = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const I5 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function $h(e, t) {
  de(t, !0), Je(e, I5);
  let n = ht(), r = cr(n), o = /* @__PURE__ */ O(() => [...r?.current?.data?.parameters || []]);
  var i = H5(), s = B(i);
  {
    var a = (u) => {
      var d = D5();
      Ce(4), M(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = L(s, 2);
  Tt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      Ch(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = L5();
      M(u, d);
    }
  ), Z(i), M(e, i), fe();
}
ue($h, {}, [], [], !0);
const ai = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = or()), ai(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = Et();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ai(s?.children)) : ai(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: or()
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
var j5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), R5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Z5 = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const K5 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function _h(e, t) {
  de(t, !0), Je(e, K5);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return gn(e, Ue(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = j5();
      M(a, l);
    },
    children: (a, l) => {
      var u = Z5(), d = oe(u), f = B(d);
      Ze(f, {
        level: 3,
        children: (g, b) => {
          Ce();
          var v = Te("输入参数");
          M(g, v);
        },
        $$slots: { default: !0 }
      });
      var p = L(f, 2);
      je(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, b) => {
          var v = R5();
          M(g, v);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var h = L(d, 2);
      $h(h, {}), M(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe(s);
}
ue(_h, { data: {} }, [], [], !0);
const Sh = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Sh(e, r.source, n));
}, Eh = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Eh(r.children, t + "." + r.name, n)
})), Oc = (e, t, n) => {
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
          children: Eh(r, e.id, t)
        };
    }
  }
}, Ph = (e = !1) => {
  const t = ht(), n = cr(t), r = /* @__PURE__ */ O(En), o = /* @__PURE__ */ O(() => c(r).nodes), i = /* @__PURE__ */ O(() => c(r).edges), s = /* @__PURE__ */ O(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ O(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = Oc(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      Sh(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = Oc(f, p, u);
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
var B5 = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), W5 = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Y5 = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const X5 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Oh(e, t) {
  de(t, !0), Je(e, X5), Zn(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = ht(), l = cr(a), u = /* @__PURE__ */ O(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = Et(), f = (z, C) => {
    d(a, (S) => {
      let E = S.data?.[o()];
      return E[r()] = { ...E[r()], [z]: C }, { [o()]: E };
    });
  }, p = (z, C) => {
    const S = C.target.value;
    f(z, S);
  }, h = (z) => {
    const C = z.value;
    f("ref", C);
  }, g = (z) => {
    const C = z.value;
    f("refType", C);
  }, b = (z) => {
    const C = z.value;
    f("contentType", C);
  };
  let v;
  const w = () => {
    d(a, (z) => {
      let C = z.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), v?.hide();
  };
  let x = Ph(i());
  var _ = {
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), m();
    },
    get index() {
      return r();
    },
    set index(z) {
      r(z), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(z) {
      o(z), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(z) {
      i(z), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(z = !1) {
      s(z), m();
    }
  }, k = Y5(), $ = oe(k), T = B($);
  {
    let z = /* @__PURE__ */ O(() => c(u).nameDisabled === !0);
    yt(T, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(z);
      },
      oninput: (C) => p("name", C)
    });
  }
  Z($);
  var V = L($, 2), D = B(V);
  {
    var H = (z) => {
      yt(z, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => p("value", C)
      });
    }, R = (z) => {
      var C = Ee(), S = oe(C);
      {
        var E = (j) => {
          {
            let Y = /* @__PURE__ */ O(() => [c(u).ref]);
            Ot(j, {
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
        ae(
          S,
          (j) => {
            c(u).refType !== "input" && j(E);
          },
          !0
        );
      }
      M(z, C);
    };
    ae(D, (z) => {
      c(u).refType === "fixed" ? z(H) : z(R, !1);
    });
  }
  Z(V);
  var A = L(V, 2), P = B(A);
  return St(
    zr(P, {
      placement: "bottom",
      floating: (z) => {
        var C = W5(), S = B(C), E = L(B(S));
        {
          let W = /* @__PURE__ */ O(() => c(u).refType ? [c(u).refType] : []);
          Ot(E, {
            get items() {
              return Wb;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: g
          });
        }
        Z(S);
        var j = L(S, 2);
        {
          var Y = (W) => {
            var G = B5(), ne = L(B(G));
            {
              let re = /* @__PURE__ */ O(() => c(u).contentType ? [c(u).contentType] : []);
              Ot(ne, {
                get items() {
                  return Ll;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: b
              });
            }
            Z(G), M(W, G);
          };
          ae(j, (W) => {
            s() && W(Y);
          });
        }
        var F = L(j, 2), N = L(B(F));
        Qe(N, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), Z(F);
        var X = L(F, 2), ee = L(B(X));
        Qe(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            p("description", W);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), Z(X);
        var q = L(X, 2), K = B(q);
        je(K, {
          variant: "destructive",
          onclick: w,
          children: (W, G) => {
            Ce();
            var ne = Te("删除");
            M(W, ne);
          },
          $$slots: { default: !0 }
        }), Z(q), Z(C), M(z, C);
      },
      children: (z, C) => {
        Si(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => v = z,
    () => v
  ), Z(A), M(e, k), fe(_);
}
ue(
  Oh,
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
var q5 = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), F5 = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), G5 = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const U5 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Zt(e, t) {
  de(t, !0), Je(e, U5);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = ht(), a = cr(s), l = /* @__PURE__ */ O(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无输入参数") {
      n(g), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), m();
    },
    get showContentType() {
      return i();
    },
    set showContentType(g = !1) {
      i(g), m();
    }
  }, d = G5(), f = B(d);
  {
    var p = (g) => {
      var b = q5();
      Ce(4), M(g, b);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = L(f, 2);
  return Tt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, b, v) => {
      Oh(g, {
        get parameter() {
          return c(b);
        },
        get index() {
          return c(v);
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
      var b = F5(), v = B(b, !0);
      Z(b), Oe(() => rt(v, n())), M(g, b);
    }
  ), Z(d), M(e, d), fe(u);
}
ue(
  Zt,
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
var J5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Q5 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e3 = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const t3 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Nh(e, t) {
  de(t, !0), Je(e, t3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return gn(e, Ue(
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
        var l = J5();
        M(a, l);
      },
      children: (a, l) => {
        var u = e3(), d = oe(u), f = B(d);
        Ze(f, {
          level: 3,
          children: (g, b) => {
            Ce();
            var v = Te("输出参数");
            M(g, v);
          },
          $$slots: { default: !0 }
        });
        var p = L(f, 2);
        je(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, b) => {
            var v = Q5();
            M(g, v);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = L(d, 2);
        Zt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(s);
}
ue(Nh, { data: {} }, [], [], !0);
const ma = (e) => JSON.parse(JSON.stringify(e));
var n3 = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), r3 = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), o3 = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), i3 = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const s3 = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Th(e, t) {
  de(t, !0), Je(e, s3);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = ht(), a = cr(s), l = /* @__PURE__ */ O(() => {
    let P = a?.current?.data?.[o()], z;
    if (P && r().length > 0) {
      let C = P;
      for (let S = 0; S < r().length; S++) {
        const E = r()[S];
        S == r().length - 1 ? z = C[E] : C = C[E].children;
      }
    }
    return { ...n(), ...z };
  });
  const { updateNodeData: u } = Et(), d = (P, z) => {
    u(s, (C) => {
      const S = C.data?.[o()];
      if (S && r().length > 0) {
        let E = S;
        for (let j = 0; j < r().length; j++) {
          const Y = r()[j];
          j == r().length - 1 ? E[Y] = { ...E[Y], [P]: z } : E = E[Y].children;
        }
      }
      return { [o()]: [...ma(S)] };
    });
  }, f = (P, z) => {
    const C = z.target.value;
    d(P, C);
  }, p = (P) => {
    const z = P.value;
    d("dataType", z);
  };
  let h;
  const g = () => {
    u(s, (P) => {
      let z = P.data?.[o()];
      if (z && r().length > 0) {
        let C = z;
        for (let S = 0; S < r().length; S++) {
          const E = r()[S];
          S == r().length - 1 ? C.splice(E, 1) : C = C[E].children;
        }
      }
      return { [o()]: [...ma(z)] };
    }), h?.hide();
  }, b = () => {
    u(s, (P) => {
      let z = P.data?.[o()];
      if (z && r().length > 0) {
        let C = z;
        for (let S = 0; S < r().length; S++) {
          const E = r()[S];
          S == r().length - 1 ? C[E].children ? C[E].children.push({ id: or(), name: "newParam", dataType: "String" }) : C[E].children = [{ id: or(), name: "newParam", dataType: "String" }] : C = C[E].children;
        }
      }
      return { [o()]: [...ma(z)] };
    });
  };
  var v = {
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), m();
    },
    get position() {
      return r();
    },
    set position(P) {
      r(P), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(P = "请输入参数值") {
      i(P), m();
    }
  }, w = i3(), x = oe(w), _ = B(x);
  {
    var k = (P) => {
      var z = Ee(), C = oe(z);
      Tt(C, 17, r, Xr, (S, E) => {
        Ce();
        var j = Te(" ");
        M(S, j);
      }), M(P, z);
    };
    ae(_, (P) => {
      r().length > 1 && P(k);
    });
  }
  var $ = L(_, 2);
  {
    let P = /* @__PURE__ */ O(() => c(l).nameDisabled === !0);
    yt($, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (z) => {
        f("name", z);
      },
      get disabled() {
        return c(P);
      }
    });
  }
  Z(x);
  var T = L(x, 2), V = B(T);
  {
    let P = /* @__PURE__ */ O(() => c(l).dataTypeItems || Bb), z = /* @__PURE__ */ O(() => c(l).dataType ? [c(l).dataType] : []), C = /* @__PURE__ */ O(() => c(l).dataTypeDisabled === !0);
    Ot(V, {
      get items() {
        return c(P);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(z);
      },
      get disabled() {
        return c(C);
      },
      onSelect: p
    });
  }
  var D = L(V, 2);
  {
    var H = (P) => {
      je(P, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: b,
        children: (z, C) => {
          var S = n3();
          M(z, S);
        },
        $$slots: { default: !0 }
      });
    };
    ae(D, (P) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && P(H);
    });
  }
  Z(T);
  var R = L(T, 2), A = B(R);
  return St(
    zr(A, {
      placement: "bottom",
      floating: (P) => {
        var z = o3(), C = B(z), S = L(B(C));
        {
          let N = /* @__PURE__ */ O(() => c(l).defaultValue || "");
          Qe(S, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(N);
            },
            onchange: (X) => {
              f("defaultValue", X);
            }
          });
        }
        Z(C);
        var E = L(C, 2), j = L(B(E));
        {
          let N = /* @__PURE__ */ O(() => c(l).description || "");
          Qe(j, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(N);
            },
            onchange: (X) => {
              f("description", X);
            }
          });
        }
        Z(E);
        var Y = L(E, 2);
        {
          var F = (N) => {
            var X = r3(), ee = B(X);
            je(ee, {
              variant: "destructive",
              onclick: g,
              children: (q, K) => {
                Ce();
                var W = Te("删除");
                M(q, W);
              },
              $$slots: { default: !0 }
            }), Z(X), M(N, X);
          };
          ae(Y, (N) => {
            c(l).deleteDisabled !== !0 && N(F);
          });
        }
        Z(z), M(P, z);
      },
      children: (P, z) => {
        Si(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), Z(R), M(e, w), fe(v);
}
ue(
  Th,
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
var a3 = /* @__PURE__ */ te("<!> <!>", 1), l3 = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), u3 = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), c3 = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const d3 = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function fr(e, t) {
  de(t, !0), Je(e, d3);
  const n = (g, b = pt, v = pt) => {
    var w = Ee(), x = oe(w);
    Tt(
      x,
      19,
      b,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, k, $) => {
        var T = a3(), V = oe(T);
        {
          let R = /* @__PURE__ */ O(() => [...v(), c($)]);
          Th(V, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(R);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var D = L(V, 2);
        {
          var H = (R) => {
            {
              let A = /* @__PURE__ */ O(() => [...v(), c($)]);
              n(R, () => c(k).children, () => c(A));
            }
          };
          ae(D, (R) => {
            c(k).children && R(H);
          });
        }
        M(_, T);
      },
      (_) => {
        var k = Ee(), $ = oe(k);
        {
          var T = (V) => {
            var D = l3(), H = B(D, !0);
            Z(D), Oe(() => rt(H, r())), M(V, D);
          };
          ae($, (V) => {
            v().length === 0 && V(T);
          });
        }
        M(_, k);
      }
    ), M(g, w);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = ht(), a = cr(s), l = /* @__PURE__ */ O(() => [...a?.current?.data?.[o()] || []]);
  var u = {
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
  }, d = c3(), f = B(d);
  {
    var p = (g) => {
      var b = u3();
      Ce(4), M(g, b);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = L(f, 2);
  return n(h, () => c(l) || [], () => []), Z(d), M(e, d), fe(u);
}
ue(fr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var f3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), p3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g3 = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), v3 = /* @__PURE__ */ te('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), m3 = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const y3 = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function zh(e, t) {
  de(t, !0), Je(e, y3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), s = Sr();
  let a = /* @__PURE__ */ Me(Vt([]));
  Zn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = Et(), u = (f) => {
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
  st(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = f3();
        M(f, p);
      },
      children: (f, p) => {
        var h = m3(), g = oe(h), b = B(g);
        Ze(b, {
          level: 3,
          children: (N, X) => {
            Ce();
            var ee = Te("输入参数");
            M(N, ee);
          },
          $$slots: { default: !0 }
        });
        var v = L(b, 2);
        je(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, X) => {
            var ee = p3();
            M(N, ee);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var w = L(g, 2);
        Zt(w, {});
        var x = L(w, 2), _ = B(x);
        Ze(_, {
          level: 3,
          children: (N, X) => {
            Ce();
            var ee = Te("图片识别");
            M(N, ee);
          },
          $$slots: { default: !0 }
        });
        var k = L(_, 2);
        je(k, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (N, X) => {
            var ee = h3();
            M(N, ee);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var $ = L(x, 2);
        Zt($, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var T = L($, 2);
        Ze(T, {
          level: 3,
          mt: "10px",
          children: (N, X) => {
            Ce();
            var ee = Te("模型设置");
            M(N, ee);
          },
          $$slots: { default: !0 }
        });
        var V = L(T, 4), D = B(V);
        {
          let N = /* @__PURE__ */ O(() => n().llmId ? [n().llmId] : []);
          Ot(D, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (X) => {
              const ee = X.value;
              l(o, () => ({ llmId: ee }));
            },
            get value() {
              return c(N);
            }
          });
        }
        var H = L(D, 2);
        zr(H, {
          placement: "bottom",
          floating: (N) => {
            var X = g3(), ee = L(B(X), 2), q = B(ee), K = B(q), W = B(K);
            Z(K);
            var G = L(K, 2);
            kr(G), G.__input = (pe) => l(o, { temperature: parseFloat(pe.target.value) }), Z(q), Z(ee);
            var ne = L(ee, 2), re = B(ne), Q = B(re), ge = B(Q);
            Z(Q);
            var ce = L(Q, 2);
            kr(ce), ce.__input = (pe) => l(o, { topP: parseFloat(pe.target.value) }), Z(re), Z(ne);
            var ie = L(ne, 2), le = B(ie), ve = B(le), we = B(ve);
            Z(ve);
            var xe = L(ve, 2);
            kr(xe), xe.__input = (pe) => l(o, { topK: parseInt(pe.target.value) }), Z(le), Z(ie), Z(X), Oe(() => {
              rt(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Wi(G, n().temperature ?? 0.5), rt(ge, `Top P: ${n().topP ?? 0.9 ?? ""}`), Wi(ce, n().topP ?? 0.9), rt(we, `Top K: ${n().topK ?? 50 ?? ""}`), Wi(xe, n().topK ?? 50);
            }), M(N, X);
          },
          children: (N, X) => {
            Si(N, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(V);
        var R = L(V, 4), A = B(R);
        {
          let N = /* @__PURE__ */ O(() => n().systemPrompt || "");
          Qe(A, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(N);
            },
            oninput: (X) => {
              l(o, { systemPrompt: X.target.value });
            }
          });
        }
        Z(R);
        var P = L(R, 4), z = B(P);
        {
          let N = /* @__PURE__ */ O(() => n().userPrompt || "");
          Qe(z, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(N);
            },
            oninput: (X) => {
              l(o, { userPrompt: X.target.value });
            }
          });
        }
        Z(P);
        var C = L(P, 2);
        {
          var S = (N) => {
            var X = v3(), ee = L(oe(X), 2), q = B(ee);
            {
              let K = /* @__PURE__ */ O(() => n().jsonSchema || "");
              Qe(q, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(K);
                },
                oninput: (W) => {
                  l(o, { jsonSchema: W.target.value });
                }
              });
            }
            Z(ee), M(N, X);
          };
          ae(C, (N) => {
            n().outType === "json" && N(S);
          });
        }
        var E = L(C, 2), j = B(E);
        Ze(j, {
          level: 3,
          children: (N, X) => {
            Ce();
            var ee = Te("输出参数");
            M(N, ee);
          },
          $$slots: { default: !0 }
        });
        var Y = L(j, 2);
        {
          let N = /* @__PURE__ */ O(() => n().outType ? [n().outType] : []);
          Ot(Y, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (X) => {
              u(X.value);
            },
            get value() {
              return c(N);
            }
          });
        }
        Z(E);
        var F = L(E, 2);
        fr(F, {}), M(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(d);
}
Or(["input"]);
ue(zh, { data: {} }, [], [], !0);
var b3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), w3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), x3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), k3 = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const C3 = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mh(e, t) {
  de(t, !0), Je(e, C3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Zn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = Pn(), { updateNodeData: s } = Et(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = b3();
        M(u, d);
      },
      children: (u, d) => {
        var f = k3(), p = oe(f), h = B(p);
        Ze(h, {
          level: 3,
          children: (H, R) => {
            Ce();
            var A = Te("输入参数");
            M(H, A);
          },
          $$slots: { default: !0 }
        });
        var g = L(h, 2);
        je(g, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, R) => {
            var A = w3();
            M(H, A);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var b = L(p, 2);
        Zt(b, {});
        var v = L(b, 2);
        Ze(v, {
          level: 3,
          mt: "10px",
          children: (H, R) => {
            Ce();
            var A = Te("代码");
            M(H, A);
          },
          $$slots: { default: !0 }
        });
        var w = L(v, 4), x = B(w);
        {
          let H = /* @__PURE__ */ O(() => n().engine ? [n().engine] : ["qlexpress"]);
          Ot(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (R) => {
              const A = R.value;
              s(o, () => ({ engine: A }));
            },
            get value() {
              return c(H);
            }
          });
        }
        Z(w);
        var _ = L(w, 4), k = B(_);
        {
          let H = /* @__PURE__ */ O(() => n().code || "");
          Qe(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (R) => {
              s(o, () => ({ code: R.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        Z(_);
        var $ = L(_, 2), T = B($);
        Ze(T, {
          level: 3,
          mt: "10px",
          children: (H, R) => {
            Ce();
            var A = Te("输出参数");
            M(H, A);
          },
          $$slots: { default: !0 }
        });
        var V = L(T, 2);
        je(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, R) => {
            var A = x3();
            M(H, A);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = L($, 2);
        fr(D, {}), M(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(l);
}
ue(Mh, { data: {} }, [], [], !0);
var $3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), _3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), S3 = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const E3 = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ah(e, t) {
  de(t, !0), Je(e, E3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), { updateNodeData: s } = Et();
  st(() => {
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
      n(l), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = $3();
        M(l, u);
      },
      children: (l, u) => {
        var d = S3(), f = oe(d), p = B(f);
        Ze(p, {
          level: 3,
          children: ($, T) => {
            Ce();
            var V = Te("输入参数");
            M($, V);
          },
          $$slots: { default: !0 }
        });
        var h = L(p, 2);
        je(h, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, T) => {
            var V = _3();
            M($, V);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var g = L(f, 2);
        Zt(g, {});
        var b = L(g, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: ($, T) => {
            Ce();
            var V = Te("模板内容");
            M($, V);
          },
          $$slots: { default: !0 }
        });
        var v = L(b, 2), w = B(v);
        {
          let $ = /* @__PURE__ */ O(() => n().template || "");
          Qe(w, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ template: T.target.value }));
            },
            get value() {
              return c($);
            }
          });
        }
        Z(v);
        var x = L(v, 2), _ = B(x);
        Ze(_, {
          level: 3,
          mt: "10px",
          children: ($, T) => {
            Ce();
            var V = Te("输出参数");
            M($, V);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var k = L(x, 2);
        fr(k, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(a);
}
ue(Ah, { data: {} }, [], [], !0);
var P3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), O3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), N3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T3 = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), z3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), M3 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), A3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), V3 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), D3 = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), L3 = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), H3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I3 = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const j3 = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Vh(e, t) {
  de(t, !0), Je(e, j3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Zn(() => {
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
  ], i = ht(), { addParameter: s } = Pn(), { updateNodeData: a } = Et();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = P3();
        M(u, d);
      },
      children: (u, d) => {
        var f = I3(), p = oe(f), h = B(p);
        Ze(h, {
          level: 3,
          children: (K, W) => {
            Ce();
            var G = Te("输入参数");
            M(K, G);
          },
          $$slots: { default: !0 }
        });
        var g = L(h, 2);
        je(g, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (K, W) => {
            var G = O3();
            M(K, G);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var b = L(p, 2);
        Zt(b, {});
        var v = L(b, 2);
        Ze(v, {
          level: 3,
          mt: "10px",
          children: (K, W) => {
            Ce();
            var G = Te("URL 地址");
            M(K, G);
          },
          $$slots: { default: !0 }
        });
        var w = L(v, 2), x = B(w), _ = B(x);
        {
          let K = /* @__PURE__ */ O(() => n().method ? [n().method] : ["get"]);
          Ot(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (W) => {
              const G = W.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return c(K);
            }
          });
        }
        Z(x);
        var k = L(x, 2), $ = B(k);
        {
          let K = /* @__PURE__ */ O(() => n().url || "");
          yt($, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(K);
            }
          });
        }
        Z(k), Z(w);
        var T = L(w, 2), V = B(T);
        Ze(V, {
          level: 3,
          children: (K, W) => {
            Ce();
            var G = Te("Http 头信息");
            M(K, G);
          },
          $$slots: { default: !0 }
        });
        var D = L(V, 2);
        je(D, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (K, W) => {
            var G = N3();
            M(K, G);
          },
          $$slots: { default: !0 }
        }), Z(T);
        var H = L(T, 2);
        Zt(H, { dataKeyName: "headers" });
        var R = L(H, 2);
        {
          var A = (K) => {
            var W = T3(), G = oe(W);
            Ze(G, {
              level: 3,
              mt: "10px",
              children: (Se, Ie) => {
                Ce();
                var U = Te("Body");
                M(Se, U);
              },
              $$slots: { default: !0 }
            });
            var ne = L(G, 2), re = B(ne), Q = B(re);
            {
              let Se = /* @__PURE__ */ O(() => !n().bodyType || n().bodyType === "");
              yt(Q, {
                type: "radio",
                value: "",
                get checked() {
                  return c(Se);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Ce(), Z(re);
            var ge = L(re, 2), ce = B(ge);
            {
              let Se = /* @__PURE__ */ O(() => n().bodyType === "form-data");
              yt(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(Se);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Ce(), Z(ge);
            var ie = L(ge, 2), le = B(ie);
            {
              let Se = /* @__PURE__ */ O(() => n().bodyType === "x-www-form-urlencoded");
              yt(le, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Se);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Ce(), Z(ie);
            var ve = L(ie, 2), we = B(ve);
            {
              let Se = /* @__PURE__ */ O(() => n().bodyType === "json");
              yt(we, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(Se);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Ce(), Z(ve);
            var xe = L(ve, 2), pe = B(xe);
            {
              let Se = /* @__PURE__ */ O(() => n().bodyType === "raw");
              yt(pe, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(Se);
                },
                onchange: (Ie) => {
                  Ie.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Ce(), Z(xe), Z(ne), M(K, W);
          };
          ae(R, (K) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && K(A);
          });
        }
        var P = L(R, 2);
        {
          var z = (K) => {
            var W = M3(), G = oe(W), ne = B(G);
            Ze(ne, {
              level: 3,
              children: (ge, ce) => {
                Ce();
                var ie = Te("参数");
                M(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = L(ne, 2);
            je(re, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ge, ce) => {
                var ie = z3();
                M(ge, ie);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var Q = L(G, 2);
            Zt(Q, { dataKeyName: "formData" }), M(K, W);
          };
          ae(P, (K) => {
            n().bodyType === "form-data" && K(z);
          });
        }
        var C = L(P, 2);
        {
          var S = (K) => {
            var W = V3(), G = oe(W), ne = B(G);
            Ze(ne, {
              level: 3,
              children: (ge, ce) => {
                Ce();
                var ie = Te("Body 参数");
                M(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = L(ne, 2);
            je(re, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, ce) => {
                var ie = A3();
                M(ge, ie);
              },
              $$slots: { default: !0 }
            }), Z(G);
            var Q = L(G, 2);
            Zt(Q, { dataKeyName: "formUrlencoded" }), M(K, W);
          };
          ae(C, (K) => {
            n().bodyType === "x-www-form-urlencoded" && K(S);
          });
        }
        var E = L(C, 2);
        {
          var j = (K) => {
            var W = D3(), G = B(W);
            Qe(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), Z(W), M(K, W);
          };
          ae(E, (K) => {
            n().bodyType === "json" && K(j);
          });
        }
        var Y = L(E, 2);
        {
          var F = (K) => {
            var W = L3(), G = B(W);
            Qe(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), Z(W), M(K, W);
          };
          ae(Y, (K) => {
            n().bodyType === "raw" && K(F);
          });
        }
        var N = L(Y, 2), X = B(N);
        Ze(X, {
          level: 3,
          mt: "10px",
          children: (K, W) => {
            Ce();
            var G = Te("输出参数");
            M(K, G);
          },
          $$slots: { default: !0 }
        });
        var ee = L(X, 2);
        je(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (K, W) => {
            var G = H3();
            M(K, G);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var q = L(N, 2);
        fr(q, {}), M(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(l);
}
ue(Vh, { data: {} }, [], [], !0);
var R3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Z3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), K3 = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const B3 = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dh(e, t) {
  de(t, !0), Je(e, B3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), s = Sr();
  let a = /* @__PURE__ */ Me(Vt([]));
  Zn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Et();
  st(() => {
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
      n(d), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = R3();
        M(d, f);
      },
      children: (d, f) => {
        var p = K3(), h = oe(p), g = B(h);
        Ze(g, {
          level: 3,
          children: (A, P) => {
            Ce();
            var z = Te("输入参数");
            M(A, z);
          },
          $$slots: { default: !0 }
        });
        var b = L(g, 2);
        je(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, P) => {
            var z = Z3();
            M(A, z);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var v = L(h, 2);
        Zt(v, {});
        var w = L(v, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (A, P) => {
            Ce();
            var z = Te("知识库设置");
            M(A, z);
          },
          $$slots: { default: !0 }
        });
        var x = L(w, 4), _ = B(x);
        {
          let A = /* @__PURE__ */ O(() => n().knowledgeId ? [n().knowledgeId] : []);
          Ot(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (P) => {
              const z = P.value;
              l(o, () => ({ knowledgeId: z }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(x);
        var k = L(x, 4), $ = B(k);
        yt($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const P = A.target.value;
            l(o, () => ({ keyword: P }));
          }
        }), Z(k);
        var T = L(k, 4), V = B(T);
        {
          let A = /* @__PURE__ */ O(() => n().limit || "");
          yt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (P) => {
              const z = P.target.value;
              l(o, () => ({ limit: z }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(T);
        var D = L(T, 2), H = B(D);
        Ze(H, {
          level: 3,
          mt: "10px",
          children: (A, P) => {
            Ce();
            var z = Te("输出参数");
            M(A, z);
          },
          $$slots: { default: !0 }
        }), Z(D);
        var R = L(D, 2);
        fr(R, {}), M(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(u);
}
ue(Dh, { data: {} }, [], [], !0);
var W3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Y3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), X3 = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const q3 = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Lh(e, t) {
  de(t, !0), Je(e, q3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), s = Sr();
  let a = /* @__PURE__ */ Me(Vt([]));
  Zn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Et();
  st(() => {
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
      n(d), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = W3();
        M(d, f);
      },
      children: (d, f) => {
        var p = X3(), h = oe(p), g = B(h);
        Ze(g, {
          level: 3,
          children: (A, P) => {
            Ce();
            var z = Te("输入参数");
            M(A, z);
          },
          $$slots: { default: !0 }
        });
        var b = L(g, 2);
        je(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, P) => {
            var z = Y3();
            M(A, z);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var v = L(h, 2);
        Zt(v, {});
        var w = L(v, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (A, P) => {
            Ce();
            var z = Te("搜索引擎设置");
            M(A, z);
          },
          $$slots: { default: !0 }
        });
        var x = L(w, 4), _ = B(x);
        {
          let A = /* @__PURE__ */ O(() => n().engine ? [n().engine] : []);
          Ot(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (P) => {
              const z = P.value;
              l(o, () => ({ engine: z }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(x);
        var k = L(x, 4), $ = B(k);
        yt($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const P = A.target.value;
            l(o, () => ({ keyword: P }));
          }
        }), Z(k);
        var T = L(k, 4), V = B(T);
        yt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const P = A.target.value;
            l(o, () => ({ limit: P }));
          }
        }), Z(T);
        var D = L(T, 2), H = B(D);
        Ze(H, {
          level: 3,
          mt: "10px",
          children: (A, P) => {
            Ce();
            var z = Te("输出参数");
            M(A, z);
          },
          $$slots: { default: !0 }
        }), Z(D);
        var R = L(D, 2);
        fr(R, {}), M(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(u);
}
ue(Lh, { data: {} }, [], [], !0);
var F3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), G3 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), U3 = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const J3 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Hh(e, t) {
  de(t, !0), Je(e, J3);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn();
  st(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = F3();
        M(a, l);
      },
      handle: (a) => {
        $r(a, {
          type: "source",
          get position() {
            return _e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = U3(), d = oe(u), f = B(d);
        Ze(f, {
          level: 3,
          children: (w, x) => {
            Ce();
            var _ = Te("循环变量");
            M(w, _);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = L(d, 2);
        Zt(p, { dataKeyName: "loopVars" });
        var h = L(p, 2), g = B(h);
        Ze(g, {
          level: 3,
          children: (w, x) => {
            Ce();
            var _ = Te("输出参数");
            M(w, _);
          },
          $$slots: { default: !0 }
        });
        var b = L(g, 2);
        je(b, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (w, x) => {
            var _ = G3();
            M(w, _);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var v = L(h, 2);
        Zt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe(s);
}
ue(Hh, { data: {} }, [], [], !0);
var Q3 = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), e4 = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const t4 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Ih(e, t) {
  de(t, !0), Je(e, t4);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = ht(), a = cr(s), l = /* @__PURE__ */ O(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Et(), d = (P, z) => {
    u(s, (C) => {
      let S = C.data?.[o()];
      return S[r()] = { ...S[r()], [P]: z }, { [o()]: S };
    });
  }, f = (P, z) => {
    const C = z.target.value;
    d(P, C);
  }, p = (P) => {
    const z = P.value;
    d("ref", z);
  }, h = (P) => {
    const z = P.value;
    d("formType", z);
  }, g = (P) => {
    const z = P.value;
    d("contentType", z);
  };
  let b;
  const v = () => {
    u(s, (P) => {
      let z = P.data?.[o()];
      return z.splice(r(), 1), { [o()]: [...z] };
    }), b?.hide();
  };
  let w = Ph(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), m();
    },
    get index() {
      return r();
    },
    set index(P) {
      r(P), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(P) {
      i(P), m();
    }
  }, _ = e4(), k = oe(_), $ = B(k);
  {
    let P = /* @__PURE__ */ O(() => c(l).nameDisabled === !0);
    yt($, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(P);
      },
      oninput: (z) => f("name", z)
    });
  }
  Z(k);
  var T = L(k, 2), V = B(T);
  {
    var D = (P) => {
      yt(P, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (z) => f("value", z)
      });
    }, H = (P) => {
      var z = Ee(), C = oe(z);
      {
        var S = (E) => {
          {
            let j = /* @__PURE__ */ O(() => [c(l).ref]);
            Ot(E, {
              get items() {
                return w.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ae(
          C,
          (E) => {
            c(l).refType !== "input" && E(S);
          },
          !0
        );
      }
      M(P, z);
    };
    ae(V, (P) => {
      c(l).refType === "fixed" ? P(D) : P(H, !1);
    });
  }
  Z(T);
  var R = L(T, 2), A = B(R);
  return St(
    zr(A, {
      placement: "bottom",
      floating: (P) => {
        var z = Q3(), C = B(z), S = L(B(C));
        {
          let K = /* @__PURE__ */ O(() => c(l).contentType ? [c(l).contentType] : []);
          Ot(S, {
            get items() {
              return Ll;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: g
          });
        }
        Z(C);
        var E = L(C, 2), j = L(B(E));
        {
          let K = /* @__PURE__ */ O(() => c(l).formType ? [c(l).formType] : []);
          Ot(j, {
            get items() {
              return Xb;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        Z(E);
        var Y = L(E, 2), F = L(B(Y));
        Qe(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            f("formLabel", K);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(Y);
        var N = L(Y, 2), X = L(B(N));
        Qe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            f("formDescription", K);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(N);
        var ee = L(N, 2), q = B(ee);
        je(q, {
          variant: "destructive",
          onclick: v,
          children: (K, W) => {
            Ce();
            var G = Te("删除");
            M(K, G);
          },
          $$slots: { default: !0 }
        }), Z(ee), Z(z), M(P, z);
      },
      children: (P, z) => {
        Si(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), Z(R), M(e, _), fe(x);
}
ue(
  Ih,
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
var n4 = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), r4 = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), o4 = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const i4 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function jh(e, t) {
  de(t, !0), Je(e, i4);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = ht(), s = cr(i), a = /* @__PURE__ */ O(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), m();
    }
  }, u = o4(), d = B(u);
  {
    var f = (h) => {
      var g = n4();
      Ce(4), M(h, g);
    };
    ae(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = L(d, 2);
  return Tt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, b) => {
      Ih(h, {
        get parameter() {
          return c(g);
        },
        get index() {
          return c(b);
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
      var g = r4(), b = B(g, !0);
      Z(g), Oe(() => rt(b, n())), M(h, g);
    }
  ), Z(u), M(e, u), fe(l);
}
ue(jh, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Xa = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Xa(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Xa(e[s], t[s])) return !1;
    return !0;
  }
};
var s4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), a4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l4 = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const u4 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rh(e, t) {
  de(t, !0), Je(e, u4);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), { updateNodeData: s } = Et();
  st(() => {
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
      Xa(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  };
  return gn(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = s4();
        M(l, u);
      },
      children: (l, u) => {
        var d = l4(), f = oe(d), p = B(f);
        Ze(p, {
          level: 3,
          children: ($, T) => {
            Ce();
            var V = Te("确认数据");
            M($, V);
          },
          $$slots: { default: !0 }
        });
        var h = L(p, 2);
        je(h, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: ($, T) => {
            var V = a4();
            M($, V);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var g = L(f, 2);
        jh(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var b = L(g, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          children: ($, T) => {
            Ce();
            var V = Te("确认消息");
            M($, V);
          },
          $$slots: { default: !0 }
        });
        var v = L(b, 4), w = B(v);
        {
          let $ = /* @__PURE__ */ O(() => n().message || "");
          Qe(w, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ message: T.target.value }));
            },
            get value() {
              return c($);
            }
          });
        }
        Z(v);
        var x = L(v, 2), _ = B(x);
        Ze(_, {
          level: 3,
          mt: "10px",
          children: ($, T) => {
            Ce();
            var V = Te("输出参数");
            M($, V);
          },
          $$slots: { default: !0 }
        }), Z(x);
        var k = L(x, 2);
        fr(k, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(a);
}
ue(Rh, { data: {} }, [], [], !0);
const c4 = {
  startNode: _h,
  codeNode: Mh,
  confirmNode: Rh,
  llmNode: zh,
  templateNode: Ah,
  httpNode: Vh,
  knowledgeNode: Dh,
  searchEngineNode: Lh,
  loopNode: Hh,
  endNode: Nh
};
var d4 = /* @__PURE__ */ te("<!> ", 1);
function qa(e, t) {
  de(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7), a = (u) => {
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
      n(u), m();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), m();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), m();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), m();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), m();
    }
  };
  return je(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = d4(), p = oe(f);
      Hs(p, n);
      var h = L(p);
      Oe(() => rt(h, ` ${r() ?? ""}`)), M(u, f);
    },
    $$slots: { default: !0 }
  }), fe(l);
}
ue(qa, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var f4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), p4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), h4 = /* @__PURE__ */ te('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Zh(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ Me("base"), r = /* @__PURE__ */ Me("show");
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
  ], s = [], a = Sr(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((x, _) => (l[x].sortNo || 0) - (l[_].sortNo || 0));
    for (let x of w)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, _) => (x.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let x of w)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === x) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = h4(), d = B(u), f = B(d), p = B(f);
  xh(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      J(n, w.value.toString(), !0);
    }
  }), Z(f);
  var h = L(f, 2), g = B(h);
  Tt(g, 21, () => o, Xr, (w, x) => {
    qa(w, Ue(() => c(x)));
  }), Z(g);
  var b = L(g, 2);
  Tt(b, 21, () => s, Xr, (w, x) => {
    qa(w, Ue(() => c(x)));
  }), Z(b), Z(h), Z(d);
  var v = L(d, 2);
  je(v, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      J(r, c(r) ? "" : "show", !0);
    },
    children: (w, x) => {
      var _ = Ee(), k = oe(_);
      {
        var $ = (V) => {
          var D = f4();
          M(V, D);
        }, T = (V) => {
          var D = p4();
          M(V, D);
        };
        ae(k, (V) => {
          c(r) === "show" ? V($) : V(T, !1);
        });
      }
      M(w, _);
    },
    $$slots: { default: !0 }
  }), Z(u), Oe(() => {
    Ut(u, 1, `tf-toolbar ${c(r) ?? ""}`), zt(g, `display: ${c(n) === "base" ? "flex" : "none"}`), zt(b, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), M(e, u), fe();
}
ue(Zh, {}, [], [], !0);
const g4 = () => ({ getNode: (e) => Ke.getNode(e) }), v4 = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ke.updateNodes((n) => {
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
} }), m4 = () => ({ getEdgesByTarget: (e) => Ke.getEdges().filter((t) => t.target === e) });
var y4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), b4 = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), w4 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), x4 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), k4 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), C4 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), $4 = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), _4 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), S4 = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), E4 = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const P4 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Kh(e, t) {
  de(t, !0), Je(e, P4);
  const n = y(t, "data", 7), r = /* @__PURE__ */ We(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ht(), { addParameter: i } = Pn(), s = Et(), { updateNodeData: a } = s, l = (v) => {
    a(o, v);
  }, u = (v, w) => {
    l({ [v]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = Sr().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  st(() => {
    n().expand && g && g.append(f);
  }), st(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), st(() => {
    !n().parameters && p.parameters && l({
      parameters: ai(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), st(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: ai(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var b = {
    get data() {
      return n();
    },
    set data(v) {
      n(v), m();
    }
  };
  {
    const v = (x) => {
      var _ = Ee(), k = oe(_);
      Hs(k, () => p.icon), M(x, _);
    };
    let w = /* @__PURE__ */ O(() => ({ ...n(), description: p.description }));
    gn(e, Ue(
      {
        get data() {
          return c(w);
        }
      },
      () => r,
      {
        icon: v,
        children: (x, _) => {
          var k = E4(), $ = oe(k);
          {
            var T = (P) => {
              var z = b4(), C = oe(z), S = B(C);
              Ze(S, {
                level: 3,
                children: (F, N) => {
                  Ce();
                  var X = Te("输入参数");
                  M(F, X);
                },
                $$slots: { default: !0 }
              });
              var E = L(S, 2);
              {
                var j = (F) => {
                  je(F, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (N, X) => {
                      var ee = y4();
                      M(N, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(E, (F) => {
                  p.parametersAddEnable !== !1 && F(j);
                });
              }
              Z(C);
              var Y = L(C, 2);
              Zt(Y, {}), M(P, z);
            };
            ae($, (P) => {
              p.parametersEnable !== !1 && P(T);
            });
          }
          var V = L($, 2);
          {
            var D = (P) => {
              var z = Ee(), C = oe(z);
              Tt(C, 17, () => h, Xr, (S, E) => {
                var j = Ee(), Y = oe(j);
                {
                  var F = (X) => {
                    var ee = w4(), q = oe(ee), K = B(q, !0);
                    Z(q);
                    var W = L(q, 2), G = B(W);
                    {
                      let ne = /* @__PURE__ */ O(() => n()[c(E).name] || c(E).defaultValue);
                      yt(G, Ue(
                        {
                          get placeholder() {
                            return c(E).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(E).attrs,
                        {
                          onchange: (re) => {
                            u(c(E).name, re);
                          }
                        }
                      ));
                    }
                    Z(W), Oe(() => rt(K, c(E).label)), M(X, ee);
                  }, N = (X) => {
                    var ee = Ee(), q = oe(ee);
                    {
                      var K = (G) => {
                        var ne = x4(), re = oe(ne), Q = B(re, !0);
                        Z(re);
                        var ge = L(re, 2), ce = B(ge);
                        {
                          let ie = /* @__PURE__ */ O(() => n()[c(E).name] || c(E).defaultValue);
                          Qe(ce, Ue(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(E).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(E).attrs,
                            {
                              onchange: (le) => {
                                u(c(E).name, le);
                              }
                            }
                          ));
                        }
                        Z(ge), Oe(() => rt(Q, c(E).label)), M(G, ne);
                      }, W = (G) => {
                        var ne = Ee(), re = oe(ne);
                        {
                          var Q = (ce) => {
                            var ie = k4(), le = oe(ie), ve = B(le, !0);
                            Z(le);
                            var we = L(le, 2), xe = B(we), pe = B(xe), Se = B(pe);
                            Z(pe);
                            var Ie = L(pe, 2), U = (nt) => l({ [c(E).name]: parseFloat(nt.target.value) });
                            it(
                              Ie,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(E).attrs,
                                value: n()[c(E).name] ?? c(E).defaultValue,
                                oninput: U
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(xe), Z(we), Oe(() => {
                              rt(ve, c(E).label), rt(Se, `${c(E).description ?? ""}: ${n()[c(E).name] ?? c(E).defaultValue ?? ""}`);
                            }), M(ce, ie);
                          }, ge = (ce) => {
                            var ie = Ee(), le = oe(ie);
                            {
                              var ve = (xe) => {
                                var pe = C4(), Se = oe(pe), Ie = B(Se, !0);
                                Z(Se);
                                var U = L(Se, 2), nt = B(U);
                                {
                                  let De = /* @__PURE__ */ O(() => c(E).options || []), qe = /* @__PURE__ */ O(() => n()[c(E).name] ? [n()[c(E).name]] : [c(E).defaultValue]);
                                  Ot(nt, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(E).placeholder;
                                    },
                                    onSelect: (Ye) => {
                                      const at = Ye.value;
                                      l({ [c(E).name]: at });
                                    },
                                    get value() {
                                      return c(qe);
                                    }
                                  });
                                }
                                Z(U), Oe(() => rt(Ie, c(E).label)), M(xe, pe);
                              }, we = (xe) => {
                                var pe = Ee(), Se = oe(pe);
                                {
                                  var Ie = (nt) => {
                                    var De = $4(), qe = oe(De), Ye = B(qe, !0);
                                    Z(qe);
                                    var at = L(qe, 2), Ct = B(at);
                                    {
                                      let Jt = /* @__PURE__ */ O(() => c(E).chosen?.buttonText);
                                      wh(Ct, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(E).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Jt);
                                        },
                                        onChosen: (gt, he, ze) => {
                                          c(E).chosen?.onChosen?.(l, gt, he, ze);
                                        },
                                        get value() {
                                          return n()[c(E).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(E).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(at), Oe(() => rt(Ye, c(E).label)), M(nt, De);
                                  }, U = (nt) => {
                                    var De = Ee(), qe = oe(De);
                                    {
                                      var Ye = (at) => {
                                        Ze(at, Ue({ level: 3, mt: "10px" }, () => c(E).attrs, {
                                          children: (Ct, Jt) => {
                                            Ce();
                                            var gt = Te();
                                            Oe(() => rt(gt, c(E).label)), M(Ct, gt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        qe,
                                        (at) => {
                                          c(E).type === "heading" && at(Ye);
                                        },
                                        !0
                                      );
                                    }
                                    M(nt, De);
                                  };
                                  ae(
                                    Se,
                                    (nt) => {
                                      c(E).type === "chosen" ? nt(Ie) : nt(U, !1);
                                    },
                                    !0
                                  );
                                }
                                M(xe, pe);
                              };
                              ae(
                                le,
                                (xe) => {
                                  c(E).type === "select" ? xe(ve) : xe(we, !1);
                                },
                                !0
                              );
                            }
                            M(ce, ie);
                          };
                          ae(
                            re,
                            (ce) => {
                              c(E).type === "slider" ? ce(Q) : ce(ge, !1);
                            },
                            !0
                          );
                        }
                        M(G, ne);
                      };
                      ae(
                        q,
                        (G) => {
                          c(E).type === "textarea" ? G(K) : G(W, !1);
                        },
                        !0
                      );
                    }
                    M(X, ee);
                  };
                  ae(Y, (X) => {
                    c(E).type === "input" ? X(F) : X(N, !1);
                  });
                }
                M(S, j);
              }), M(P, z);
            };
            ae(V, (P) => {
              h && P(D);
            });
          }
          var H = L(V, 2);
          St(H, (P) => g = P, () => g);
          var R = L(H, 2);
          {
            var A = (P) => {
              var z = S4(), C = oe(z), S = B(C);
              Ze(S, {
                level: 3,
                mt: "10px",
                children: (F, N) => {
                  Ce();
                  var X = Te("输出参数");
                  M(F, X);
                },
                $$slots: { default: !0 }
              });
              var E = L(S, 2);
              {
                var j = (F) => {
                  je(F, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (N, X) => {
                      var ee = _4();
                      M(N, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(E, (F) => {
                  p.outputDefsAddEnable !== !1 && F(j);
                });
              }
              Z(C);
              var Y = L(C, 2);
              fr(Y, {}), M(P, z);
            };
            ae(R, (P) => {
              p.outputDefsEnable !== !1 && P(A);
            });
          }
          Oe(() => {
            zt(H, p.rootStyle || ""), Ut(H, 1, ur(p.rootClass), "svelte-qt4m0r");
          }), M(x, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return fe(b);
}
ue(Kh, { data: {} }, [], [], !0);
const O4 = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ke.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ke.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), N4 = () => ({ deleteEdge: (e) => {
  Ke.removeEdge(e);
} }), T4 = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Ke.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ke.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, z4 = () => ({ getNodeRelativePosition: (e) => {
  let t = Ke.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Ke.getNode(t.parentId) : t = void 0;
  return n;
} });
function M4(e) {
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
function A4(e) {
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
function V4(e) {
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
function Fa(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Fa(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Fa(e[r], t));
    return n;
  }
  return e;
}
const D4 = () => (Et(), { copyHandler: async (e) => {
  const t = Ke.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Ke.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(M4), o = n.map(V4), i = JSON.stringify({
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
  const r = A4(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${or()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Fa(l.data, i);
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
      id: `edge_${or()}`,
      source: u,
      target: d
    });
  }
  Ke.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ke.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Nc = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var L4 = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), H4 = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), I4 = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const j4 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Bh(e, t) {
  de(t, !0), Je(e, j4);
  const n = y(t, "onInit", 7), r = y(t, "colorMode", 7), o = /* @__PURE__ */ We(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = Et();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ Me(!1), a = /* @__PURE__ */ Me(null);
  const { updateEdgeData: l } = O4(), u = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, d = (q) => {
    q.preventDefault();
    const K = i.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), W = q.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const G = JSON.parse(W), ne = { id: `node_${or()}`, position: K, data: {}, ...G };
    Ke.addNode(ne), Ke.selectNodeOnly(ne.id);
  }, { getNode: f } = g4(), p = (q) => {
    const K = f(q.source), W = f(q.target);
    if (q.sourceHandle === "loop_handle" || K.parentId) {
      const G = i.getEdges();
      for (let ne of G)
        if (ne.target === q.target) {
          const re = f(ne.source);
          if (q.sourceHandle === "loop_handle" && re.parentId !== K.id || K.parentId && re.parentId !== K.parentId)
            return !1;
        }
    }
    return !(!K.parentId && W.parentId && W.parentId !== K.id);
  }, { getNodesFromSource: h } = T4(), { getNodeRelativePosition: g } = z4(), { ensureParentInNodesBefore: b } = v4(), v = (q, K) => {
    if (!K.isValid)
      return;
    const W = K.toNode;
    if (W.parentId)
      return;
    const G = K.fromNode, ne = K.fromHandle, re = { position: { ...W.position } };
    if (ne.id === "loop_handle" ? re.parentId = G.id : G.parentId && (re.parentId = G.parentId), re.parentId) {
      const { x: Q, y: ge } = g(re.parentId);
      re.position = { x: W.position.x - Q, y: W.position.y - ge }, i.updateNode(W.id, re), h(W.id).forEach((ce) => {
        i.updateNode(ce.id, {
          parentId: re.parentId,
          position: { x: ce.position.x - Q, y: ce.position.y - ge }
        });
      }), b(re.parentId, W.id);
    }
    setTimeout(() => {
      Ke.getEdges().forEach((Q) => {
        Q.target === W.id && Q.source == G.id && (J(s, !0), J(a, Q, !0));
      });
    });
  }, { getEdgesByTarget: w } = m4(), x = (q) => {
    q.edges.forEach((K) => {
      K.id === c(a)?.id && (J(a, null), J(s, !1));
      const W = f(K.target);
      if (W && W.parentId) {
        const G = w(K.target), { x: ne, y: re } = g(W.parentId);
        if (G.length === 0)
          i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + ne, y: W.position.y + re }
          }), h(W.id).forEach((Q) => {
            i.updateNode(Q.id, {
              parentId: void 0,
              position: { x: Q.position.x + ne, y: Q.position.y + re }
            });
          });
        else {
          let Q = !1;
          for (let ge = 0; ge < G.length; ge++) {
            const ce = G[ge], ie = f(ce.source);
            if (ie.parentId || ie.type === "loopNode") {
              Q = !0;
              break;
            }
          }
          Q || (i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + ne, y: W.position.y + re }
          }), h(W.id).forEach((ge) => {
            i.updateNode(ge.id, {
              parentId: void 0,
              position: { x: ge.position.x + ne, y: ge.position.y + re }
            });
          }));
        }
      }
    });
  }, { deleteEdge: _ } = N4(), k = (q, K) => {
  }, $ = (q) => {
  }, { copyHandler: T, pasteHandler: V } = D4(), D = (q) => {
    Nc() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), T(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Ke.updateNodes((K) => K.map((W) => ({ ...W, selected: !0 }))), Ke.updateEdges((K) => K.map((W) => ({ ...W, selected: !0 })))));
  }, H = async (q) => {
    Nc() || V(q);
  };
  Zn(() => {
    window.addEventListener("keydown", D), window.addEventListener("paste", H);
  }), pi(() => {
    window.removeEventListener("keydown", D), window.removeEventListener("paste", H);
  });
  const R = {
    // ...nodeTypes
  }, A = Sr().customNodes;
  if (A)
    for (let q of Object.keys(A))
      R[q] = Kh;
  const P = Sr().onDataChange;
  st(() => {
    P?.({
      nodes: Ke.getNodes(),
      edges: Ke.getEdges(),
      viewport: Ke.getViewport()
    });
  });
  var z = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), m();
    },
    get colorMode() {
      return r();
    },
    set colorMode(q) {
      r(q), m();
    }
  }, C = I4(), S = B(C), E = Ke.getNodes, j = Ke.setNodes, Y = Ke.getEdges, F = Ke.setEdges, N = Ke.getViewport, X = Ke.setViewport;
  {
    let q = /* @__PURE__ */ O(() => ({ ...c4, ...R })), K = /* @__PURE__ */ O(() => ({
      markerEnd: { type: ni.ArrowClosed, width: 20, height: 20 }
    }));
    yp(S, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(q);
      },
      get nodes() {
        return E();
      },
      set nodes(W) {
        j(W);
      },
      get edges() {
        return Y();
      },
      set edges(W) {
        F(W);
      },
      get viewport() {
        return N();
      },
      set viewport(W) {
        X(W);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: p,
      onconnectend: v,
      onconnectstart: k,
      onconnect: $,
      connectionRadius: 50,
      onedgeclick: (W) => {
        J(s, !0), J(a, W.edge, !0);
      },
      onbeforeconnect: (W) => ({ ...W, id: or() }),
      ondelete: x,
      onclick: (W) => {
        const G = W.target;
        G.classList.contains("svelte-flow__edge-interaction") || G.classList.contains("panel-content") || G.closest(".panel-content") || (J(s, !1), J(a, null));
      },
      get defaultEdgeOptions() {
        return c(K);
      },
      children: (W, G) => {
        var ne = H4(), re = oe(ne);
        Pp(re, {});
        var Q = L(re, 2);
        _p(Q, {});
        var ge = L(Q, 2);
        Np(ge, {});
        var ce = L(ge, 2);
        {
          var ie = (le) => {
            ki(le, {
              children: (ve, we) => {
                var xe = L4(), pe = L(B(xe), 4), Se = B(pe);
                {
                  let De = /* @__PURE__ */ O(() => c(a)?.data?.condition);
                  Qe(Se, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(De);
                    },
                    onchange: (qe) => {
                      c(a) && l(c(a).id, { condition: qe.target?.value });
                    }
                  });
                }
                Z(pe);
                var Ie = L(pe, 2), U = B(Ie);
                je(U, {
                  variant: "destructive",
                  onclick: () => {
                    _(c(a)?.id), J(s, !1);
                  },
                  children: (De, qe) => {
                    Ce();
                    var Ye = Te("删除");
                    M(De, Ye);
                  },
                  $$slots: { default: !0 }
                });
                var nt = L(U, 2);
                je(nt, {
                  variant: "default",
                  onclick: () => {
                    J(s, !1);
                  },
                  children: (De, qe) => {
                    Ce();
                    var Ye = Te("保存");
                    M(De, Ye);
                  },
                  $$slots: { default: !0 }
                }), Z(Ie), Z(xe), M(ve, xe);
              },
              $$slots: { default: !0 }
            });
          };
          ae(ce, (le) => {
            c(s) && le(ie);
          });
        }
        M(W, ne);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = L(S, 2);
  return Zh(ee, {}), Z(C), M(e, C), fe(z);
}
ue(Bh, { onInit: {}, colorMode: {} }, [], [], !0);
const Wh = typeof window < "u" ? window : void 0;
function R4(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
let Z4 = class {
  #t;
  #e;
  constructor(e = {}) {
    const { window: t = Wh, document: n = t?.document } = e;
    t !== void 0 && (this.#t = n, this.#e = Eo((r) => {
      const o = In(t, "focusin", r), i = In(t, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? R4(this.#t) : null;
  }
};
new Z4();
function K4(e, t) {
  switch (e) {
    case "post":
      st(t);
      break;
    case "pre":
      tn(t);
      break;
  }
}
function Yh(e, t, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  K4(t, () => {
    const a = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = lt(() => n(a, s));
    return s = a, l;
  });
}
function Xl(e, t, n) {
  Yh(e, "post", t, n);
}
function B4(e, t, n) {
  Yh(e, "pre", t, n);
}
Xl.pre = B4;
function W4(e, t) {
  switch (e) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage;
  }
}
class Xh {
  #t;
  #e;
  #n;
  #r;
  #i;
  #o = /* @__PURE__ */ Me(0);
  constructor(t, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = Wh
    } = r;
    if (this.#t = n, this.#e = t, this.#n = i, a === void 0) return;
    const l = W4(o, a);
    this.#r = l;
    const u = l.getItem(t);
    u !== null ? this.#t = this.#a(u) : this.#l(n), s && o === "local" && (this.#i = Eo(() => In(a, "storage", this.#s)));
  }
  get current() {
    this.#i?.(), c(this.#o);
    const t = this.#a(this.#r?.getItem(this.#e)) ?? this.#t, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#o), r(Reflect.get(s, a))),
        set: (s, a, l) => (J(this.#o, c(this.#o) + 1), Reflect.set(s, a, l), this.#l(t), !0)
      }), n.set(o, i)), i;
    };
    return r(t);
  }
  set current(t) {
    this.#l(t), J(this.#o, c(this.#o) + 1);
  }
  #s = (t) => {
    t.key !== this.#e || t.newValue === null || (this.#t = this.#a(t.newValue), J(this.#o, c(this.#o) + 1));
  };
  #a(t) {
    try {
      return this.#n.deserialize(t);
    } catch (n) {
      console.error(`Error when parsing "${t}" from persisted store "${this.#e}"`, n);
      return;
    }
  }
  #l(t) {
    try {
      t != null && this.#r?.setItem(this.#e, this.#n.serialize(t));
    } catch (n) {
      console.error(`Error when writing value from persisted store "${this.#e}" to ${this.#r}`, n);
    }
  }
}
function Tc(e) {
  return e.filter((t) => t.length > 0);
}
const qh = {
  getItem: (e) => null,
  setItem: (e, t) => {
  }
}, Ei = typeof document < "u";
function Y4(e) {
  return typeof e == "function";
}
function X4(e) {
  return e !== null && typeof e == "object";
}
const li = Symbol("box"), ql = Symbol("is-writable");
function q4(e) {
  return X4(e) && li in e;
}
function F4(e) {
  return wt.isBox(e) && ql in e;
}
function wt(e) {
  let t = /* @__PURE__ */ Me(Vt(e));
  return {
    [li]: !0,
    [ql]: !0,
    get current() {
      return c(t);
    },
    set current(n) {
      J(t, n, !0);
    }
  };
}
function G4(e, t) {
  const n = /* @__PURE__ */ O(e);
  return t ? {
    [li]: !0,
    [ql]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [li]: !0,
    get current() {
      return e();
    }
  };
}
function U4(e) {
  return wt.isBox(e) ? e : Y4(e) ? wt.with(e) : wt(e);
}
function J4(e) {
  return Object.entries(e).reduce(
    (t, [n, r]) => wt.isBox(r) ? (wt.isWritableBox(r) ? Object.defineProperty(t, n, {
      get() {
        return r.current;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        r.current = o;
      }
    }) : Object.defineProperty(t, n, {
      get() {
        return r.current;
      }
    }), t) : Object.assign(t, { [n]: r }),
    {}
  );
}
function Q4(e) {
  return wt.isWritableBox(e) ? {
    [li]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
wt.from = U4;
wt.with = G4;
wt.flatten = J4;
wt.readonly = Q4;
wt.isBox = q4;
wt.isWritableBox = F4;
function ek(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const tk = ek(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function nk(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${tk(t)}: ${e[t]};`).join(`
`);
}
function rk(e = {}) {
  return nk(e).replace(`
`, " ");
}
const ok = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
rk(ok);
const ik = typeof window < "u" ? window : void 0;
function sk(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t)
      break;
    t = n;
  }
  return t;
}
class ak {
  #t;
  #e;
  constructor(t = {}) {
    const { window: n = ik, document: r = n?.document } = t;
    n !== void 0 && (this.#t = r, this.#e = Eo((o) => {
      const i = In(n, "focusin", o), s = In(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#e?.(), this.#t ? sk(this.#t) : null;
  }
}
new ak();
const Ir = wt("mode-watcher-mode"), jr = wt("mode-watcher-theme"), lk = ["dark", "light", "system"];
function Ga(e) {
  return typeof e != "string" ? !1 : lk.includes(e);
}
class uk {
  #t = "system";
  #e = Ei ? localStorage : qh;
  #n = this.#e.getItem(Ir.current);
  #r = Ga(this.#n) ? this.#n : this.#t;
  #i = /* @__PURE__ */ Me(Vt(this.#o()));
  #o(t = this.#r) {
    return new Xh(Ir.current, t, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Ga(n) ? n : this.#t
      }
    });
  }
  constructor() {
    Po(() => Xl.pre(() => Ir.current, (t, n) => {
      const r = c(this.#i).current;
      J(this.#i, this.#o(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return c(this.#i).current;
  }
  set current(t) {
    c(this.#i).current = t;
  }
}
class ck {
  #t = void 0;
  #e = !0;
  #n = /* @__PURE__ */ Me(Vt(this.#t));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Gf("prefers-color-scheme: light") : { current: !1 };
  query() {
    Ei && J(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(t) {
    this.#e = t;
  }
  constructor() {
    Po(() => {
      tn(() => {
        this.#e && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Ua = new uk(), Ja = new ck();
class dk {
  #t = Ei ? localStorage : qh;
  #e = this.#t.getItem(jr.current);
  #n = this.#e === null || this.#e === void 0 ? "" : this.#e;
  #r = /* @__PURE__ */ Me(Vt(this.#i()));
  #i(t = this.#n) {
    return new Xh(jr.current, t, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    Po(() => Xl.pre(() => jr.current, (t, n) => {
      const r = c(this.#r).current;
      J(this.#r, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  /**
   * The current theme.
   * @returns The current theme.
   */
  get current() {
    return c(this.#r).current;
  }
  /**
   * Set the current theme.
   * @param newValue The new theme to set.
   */
  set current(t) {
    c(this.#r).current = t;
  }
}
const Ji = new dk();
let zc, Mc, Ac = !1, Zi = null;
function fk() {
  return Zi || (Zi = document.createElement("style"), Zi.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Zi);
}
function Fh(e, t = !1) {
  if (typeof document > "u")
    return;
  if (!Ac) {
    Ac = !0, e();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    e();
    return;
  }
  clearTimeout(zc), clearTimeout(Mc);
  const n = fk(), r = () => document.head.appendChild(n), o = () => {
    n.parentNode && document.head.removeChild(n);
  };
  function i() {
    e(), window.requestAnimationFrame(o);
  }
  if (typeof window.requestAnimationFrame < "u") {
    r(), t ? i() : window.requestAnimationFrame(() => {
      i();
    });
    return;
  }
  r(), zc = window.setTimeout(() => {
    e(), Mc = window.setTimeout(o, 16);
  }, 16);
}
const yr = wt(void 0), _s = wt(!0), Ss = wt(!1), Qa = wt([]), el = wt([]);
function pk() {
  const e = /* @__PURE__ */ O(() => {
    if (!Ei) return;
    const t = Ua.current === "system" ? Ja.current : Ua.current, n = Tc(Qa.current), r = Tc(el.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      t === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && yr.current && s.setAttribute("content", yr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && yr.current && s.setAttribute("content", yr.current.dark));
    }
    return _s.current ? Fh(o, Ss.current) : o(), t;
  });
  return {
    get current() {
      return c(e);
    }
  };
}
function hk() {
  const e = /* @__PURE__ */ O(() => {
    if (Ji.current, !Ei) return;
    function t() {
      document.documentElement.setAttribute("data-theme", Ji.current);
    }
    return _s.current ? Fh(t, lt(() => Ss.current)) : t(), Ji.current;
  });
  return {
    get current() {
      return c(e);
    }
  };
}
const gk = pk(), vk = hk();
function Gh(e) {
  Ua.current = e;
}
function mk(e) {
  Ji.current = e;
}
function yk({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? e, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", t) {
    const f = document.querySelector('meta[name="theme-color"]');
    f && f.setAttribute("content", l === "light" ? t.light : t.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var bk = /* @__PURE__ */ te('<meta name="theme-color"/>');
function Uh(e, t) {
  de(t, !0);
  let n = y(t, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), m();
    }
  }, o = Ee(), i = oe(o);
  {
    var s = (a) => {
      var l = bk();
      Oe(() => Pe(l, "content", n().dark)), M(a, l);
    };
    ae(i, (a) => {
      n() && a(s);
    });
  }
  return M(e, o), fe(r);
}
ue(Uh, { themeColors: {} }, [], [], !0);
var wk = /* @__PURE__ */ te('<meta name="theme-color"/>'), xk = /* @__PURE__ */ te("<!> <!>", 1);
function Jh(e, t) {
  de(t, !0);
  let n = y(t, "trueNonce", 7, ""), r = y(t, "initConfig", 7), o = y(t, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), m();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), m();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), m();
    }
  };
  return Lv("171tvz2", (s) => {
    var a = xk(), l = oe(a);
    {
      var u = (f) => {
        var p = wk();
        Oe(() => Pe(p, "content", o().dark)), M(f, p);
      };
      ae(l, (f) => {
        o() && f(u);
      });
    }
    var d = L(l, 2);
    Hs(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + yk.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), M(s, a);
  }), fe(i);
}
ue(Jh, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function Qh(e, t) {
  de(t, !0);
  let n = y(t, "track", 7, !0), r = y(t, "defaultMode", 7, "system"), o = y(t, "themeColors", 7), i = y(t, "disableTransitions", 7, !0), s = y(t, "darkClassNames", 23, () => ["dark"]), a = y(t, "lightClassNames", 23, () => []), l = y(t, "defaultTheme", 7, ""), u = y(t, "nonce", 7, ""), d = y(t, "themeStorageKey", 7, "mode-watcher-theme"), f = y(t, "modeStorageKey", 7, "mode-watcher-mode"), p = y(t, "disableHeadScriptInjection", 7, !1), h = y(t, "synchronousModeChanges", 7, !1);
  Ir.current = f(), jr.current = d(), Qa.current = s(), el.current = a(), _s.current = i(), yr.current = o(), Ss.current = h(), tn(() => {
    Ss.current = h();
  }), tn(() => {
    _s.current = i();
  }), tn(() => {
    yr.current = o();
  }), tn(() => {
    Qa.current = s();
  }), tn(() => {
    el.current = a();
  }), tn(() => {
    Ir.current = f();
  }), tn(() => {
    jr.current = d();
  }), tn(() => {
    gk.current, Ir.current, jr.current, vk.current;
  }), Zn(() => {
    Ja.tracking(n()), Ja.query();
    const $ = localStorage.getItem(Ir.current);
    Gh(Ga($) ? $ : r());
    const T = localStorage.getItem(jr.current);
    mk(T || l());
  });
  const g = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: f(),
    themeStorageKey: d()
  }, b = /* @__PURE__ */ O(() => typeof window > "u" ? u() : "");
  var v = {
    get track() {
      return n();
    },
    set track($ = !0) {
      n($), m();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode($ = "system") {
      r($), m();
    },
    get themeColors() {
      return o();
    },
    set themeColors($) {
      o($), m();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions($ = !0) {
      i($), m();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames($ = ["dark"]) {
      s($), m();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames($ = []) {
      a($), m();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme($ = "") {
      l($), m();
    },
    get nonce() {
      return u();
    },
    set nonce($ = "") {
      u($), m();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey($ = "mode-watcher-theme") {
      d($), m();
    },
    get modeStorageKey() {
      return f();
    },
    set modeStorageKey($ = "mode-watcher-mode") {
      f($), m();
    },
    get disableHeadScriptInjection() {
      return p();
    },
    set disableHeadScriptInjection($ = !1) {
      p($), m();
    },
    get synchronousModeChanges() {
      return h();
    },
    set synchronousModeChanges($ = !1) {
      h($), m();
    }
  }, w = Ee(), x = oe(w);
  {
    var _ = ($) => {
      Uh($, {
        get themeColors() {
          return yr.current;
        }
      });
    }, k = ($) => {
      Jh($, {
        get trueNonce() {
          return c(b);
        },
        get initConfig() {
          return g;
        },
        get themeColors() {
          return yr.current;
        }
      });
    };
    ae(x, ($) => {
      p() ? $(_) : $(k, !1);
    });
  }
  return M(e, w), fe(v);
}
ue(
  Qh,
  {
    track: {},
    defaultMode: {},
    themeColors: {},
    disableTransitions: {},
    darkClassNames: {},
    lightClassNames: {},
    defaultTheme: {},
    nonce: {},
    themeStorageKey: {},
    modeStorageKey: {},
    disableHeadScriptInjection: {},
    synchronousModeChanges: {}
  },
  [],
  [],
  !0
);
var kk = /* @__PURE__ */ te("<!> <!>", 1);
function Ck(e, t) {
  de(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (Gh(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ke.init(o?.nodes || [], o?.edges || []), Wr("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), m();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), m();
    }
  }, a = kk(), l = oe(a);
  Qh(l, {});
  var u = L(l, 2);
  return bp(u, {
    children: (d, f) => {
      Bh(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), M(e, a), fe(s);
}
customElements.define("tinyflow-component", ue(Ck, { options: {}, onInit: {} }, [], [], !1));
const _k = cg((e, t) => {
  const n = tu(null), r = tu(null);
  dg(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
    getInstance: () => r.current ? r.current : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return fg(() => {
    if (n.current) {
      const a = new qb({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ vg.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  _k as Tinyflow
};
//# sourceMappingURL=index.js.map
