import au, { forwardRef as Yf, useRef as Za, useImperativeHandle as Ff, useEffect as qf } from "react";
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
var Wa;
function Uf() {
  if (Wa) return lo;
  Wa = 1;
  var e = au, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Xa;
function Jf() {
  return Xa || (Xa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = au, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function b(V) {
      if (V === null || typeof V != "object")
        return null;
      var oe = g && V[g] || V[v];
      return typeof oe == "function" ? oe : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(V) {
      {
        for (var oe = arguments.length, he = new Array(oe > 1 ? oe - 1 : 0), Se = 1; Se < oe; Se++)
          he[Se - 1] = arguments[Se];
        x("error", V, he);
      }
    }
    function x(V, oe, he) {
      {
        var Se = _.ReactDebugCurrentFrame, Ke = Se.getStackAddendum();
        Ke !== "" && (oe += "%s", he = he.concat([Ke]));
        var qe = he.map(function(ze) {
          return String(ze);
        });
        qe.unshift("Warning: " + oe), Function.prototype.apply.call(console[V], console, qe);
      }
    }
    var k = !1, P = !1, S = !1, O = !1, A = !1, Z;
    Z = Symbol.for("react.module.reference");
    function q(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === i || A || V === o || V === u || V === d || O || V === h || k || P || S || typeof V == "object" && V !== null && (V.$$typeof === p || V.$$typeof === f || V.$$typeof === s || V.$$typeof === a || V.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === Z || V.getModuleId !== void 0));
    }
    function I(V, oe, he) {
      var Se = V.displayName;
      if (Se)
        return Se;
      var Ke = oe.displayName || oe.name || "";
      return Ke !== "" ? he + "(" + Ke + ")" : he;
    }
    function $(V) {
      return V.displayName || "Context";
    }
    function T(V) {
      if (V == null)
        return null;
      if (typeof V.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof V == "function")
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
        case d:
          return "SuspenseList";
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case a:
            var oe = V;
            return $(oe) + ".Consumer";
          case s:
            var he = V;
            return $(he._context) + ".Provider";
          case l:
            return I(V, V.render, "ForwardRef");
          case f:
            var Se = V.displayName || null;
            return Se !== null ? Se : T(V.type) || "Memo";
          case p: {
            var Ke = V, qe = Ke._payload, ze = Ke._init;
            try {
              return T(ze(qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, M = 0, N, R, B, W, D, U, F;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function z() {
      {
        if (M === 0) {
          N = console.log, R = console.info, B = console.warn, W = console.error, D = console.group, U = console.groupCollapsed, F = console.groupEnd;
          var V = {
            configurable: !0,
            enumerable: !0,
            value: Q,
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
        M++;
      }
    }
    function Y() {
      {
        if (M--, M === 0) {
          var V = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, V, {
              value: N
            }),
            info: w({}, V, {
              value: R
            }),
            warn: w({}, V, {
              value: B
            }),
            error: w({}, V, {
              value: W
            }),
            group: w({}, V, {
              value: D
            }),
            groupCollapsed: w({}, V, {
              value: U
            }),
            groupEnd: w({}, V, {
              value: F
            })
          });
        }
        M < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = _.ReactCurrentDispatcher, ne;
    function re(V, oe, he) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var Se = Ke.stack.trim().match(/\n( *(at )?)/);
            ne = Se && Se[1] || "";
          }
        return `
` + ne + V;
      }
    }
    var ee = !1, ge;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ce();
    }
    function ie(V, oe) {
      if (!V || ee)
        return "";
      {
        var he = ge.get(V);
        if (he !== void 0)
          return he;
      }
      var Se;
      ee = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var qe;
      qe = J.current, J.current = null, z();
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
            } catch (Ht) {
              Se = Ht;
            }
            Reflect.construct(V, [], ze);
          } else {
            try {
              ze.call();
            } catch (Ht) {
              Se = Ht;
            }
            V.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            Se = Ht;
          }
          V();
        }
      } catch (Ht) {
        if (Ht && Se && typeof Ht.stack == "string") {
          for (var He = Ht.stack.split(`
`), Et = Se.stack.split(`
`), ot = He.length - 1, lt = Et.length - 1; ot >= 1 && lt >= 0 && He[ot] !== Et[lt]; )
            lt--;
          for (; ot >= 1 && lt >= 0; ot--, lt--)
            if (He[ot] !== Et[lt]) {
              if (ot !== 1 || lt !== 1)
                do
                  if (ot--, lt--, lt < 0 || He[ot] !== Et[lt]) {
                    var Yt = `
` + He[ot].replace(" at new ", " at ");
                    return V.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", V.displayName)), typeof V == "function" && ge.set(V, Yt), Yt;
                  }
                while (ot >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        ee = !1, J.current = qe, Y(), Error.prepareStackTrace = Ke;
      }
      var Dr = V ? V.displayName || V.name : "", fr = Dr ? re(Dr) : "";
      return typeof V == "function" && ge.set(V, fr), fr;
    }
    function se(V, oe, he) {
      return ie(V, !1);
    }
    function ve(V) {
      var oe = V.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function me(V, oe, he) {
      if (V == null)
        return "";
      if (typeof V == "function")
        return ie(V, ve(V));
      if (typeof V == "string")
        return re(V);
      switch (V) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case l:
            return se(V.render);
          case f:
            return me(V.type, oe, he);
          case p: {
            var Se = V, Ke = Se._payload, qe = Se._init;
            try {
              return me(qe(Ke), oe, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, de = {}, $e = _.ReactDebugCurrentFrame;
    function Ne(V) {
      if (V) {
        var oe = V._owner, he = me(V.type, V._source, oe ? oe.type : null);
        $e.setExtraStackFrame(he);
      } else
        $e.setExtraStackFrame(null);
    }
    function X(V, oe, he, Se, Ke) {
      {
        var qe = Function.call.bind(xe);
        for (var ze in V)
          if (qe(V, ze)) {
            var He = void 0;
            try {
              if (typeof V[ze] != "function") {
                var Et = Error((Se || "React class") + ": " + he + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof V[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              He = V[ze](oe, ze, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              He = ot;
            }
            He && !(He instanceof Error) && (Ne(Ke), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, ze, typeof He), Ne(null)), He instanceof Error && !(He.message in de) && (de[He.message] = !0, Ne(Ke), C("Failed %s type: %s", he, He.message), Ne(null));
          }
      }
    }
    var Be = Array.isArray;
    function De(V) {
      return Be(V);
    }
    function je(V) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, he = oe && V[Symbol.toStringTag] || V.constructor.name || "Object";
        return he;
      }
    }
    function Ze(V) {
      try {
        return rt(V), !1;
      } catch {
        return !0;
      }
    }
    function rt(V) {
      return "" + V;
    }
    function _t(V) {
      if (Ze(V))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", je(V)), rt(V);
    }
    var et = _.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Xe;
    function mt(V) {
      if (xe.call(V, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(V, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return V.ref !== void 0;
    }
    function tt(V) {
      if (xe.call(V, "key")) {
        var oe = Object.getOwnPropertyDescriptor(V, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return V.key !== void 0;
    }
    function Ct(V, oe) {
      typeof V.ref == "string" && et.current;
    }
    function ct(V, oe) {
      {
        var he = function() {
          ye || (ye = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(V, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function dt(V, oe) {
      {
        var he = function() {
          Xe || (Xe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(V, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var mn = function(V, oe, he, Se, Ke, qe, ze) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: V,
        key: oe,
        ref: he,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: qe
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function yn(V, oe, he, Se, Ke) {
      {
        var qe, ze = {}, He = null, Et = null;
        he !== void 0 && (_t(he), He = "" + he), tt(oe) && (_t(oe.key), He = "" + oe.key), mt(oe) && (Et = oe.ref, Ct(oe, Ke));
        for (qe in oe)
          xe.call(oe, qe) && !We.hasOwnProperty(qe) && (ze[qe] = oe[qe]);
        if (V && V.defaultProps) {
          var ot = V.defaultProps;
          for (qe in ot)
            ze[qe] === void 0 && (ze[qe] = ot[qe]);
        }
        if (He || Et) {
          var lt = typeof V == "function" ? V.displayName || V.name || "Unknown" : V;
          He && ct(ze, lt), Et && dt(ze, lt);
        }
        return mn(V, He, Et, Ke, Se, et.current, ze);
      }
    }
    var Fn = _.ReactCurrentOwner, dr = _.ReactDebugCurrentFrame;
    function Nn(V) {
      if (V) {
        var oe = V._owner, he = me(V.type, V._source, oe ? oe.type : null);
        dr.setExtraStackFrame(he);
      } else
        dr.setExtraStackFrame(null);
    }
    var ao;
    ao = !1;
    function tn(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function za() {
      {
        if (Fn.current) {
          var V = T(Fn.current.type);
          if (V)
            return `

Check the render method of \`` + V + "`.";
        }
        return "";
      }
    }
    function Vf(V) {
      return "";
    }
    var Ia = {};
    function zf(V) {
      {
        var oe = za();
        if (!oe) {
          var he = typeof V == "string" ? V : V.displayName || V.name;
          he && (oe = `

Check the top-level render call using <` + he + ">.");
        }
        return oe;
      }
    }
    function Ra(V, oe) {
      {
        if (!V._store || V._store.validated || V.key != null)
          return;
        V._store.validated = !0;
        var he = zf(oe);
        if (Ia[he])
          return;
        Ia[he] = !0;
        var Se = "";
        V && V._owner && V._owner !== Fn.current && (Se = " It was passed a child from " + T(V._owner.type) + "."), Nn(V), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), Nn(null);
      }
    }
    function ja(V, oe) {
      {
        if (typeof V != "object")
          return;
        if (De(V))
          for (var he = 0; he < V.length; he++) {
            var Se = V[he];
            tn(Se) && Ra(Se, oe);
          }
        else if (tn(V))
          V._store && (V._store.validated = !0);
        else if (V) {
          var Ke = b(V);
          if (typeof Ke == "function" && Ke !== V.entries)
            for (var qe = Ke.call(V), ze; !(ze = qe.next()).done; )
              tn(ze.value) && Ra(ze.value, oe);
        }
      }
    }
    function If(V) {
      {
        var oe = V.type;
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
          var Se = T(oe);
          X(he, V.props, "prop", Se, V);
        } else if (oe.PropTypes !== void 0 && !ao) {
          ao = !0;
          var Ke = T(oe);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rf(V) {
      {
        for (var oe = Object.keys(V.props), he = 0; he < oe.length; he++) {
          var Se = oe[he];
          if (Se !== "children" && Se !== "key") {
            Nn(V), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Nn(null);
            break;
          }
        }
        V.ref !== null && (Nn(V), C("Invalid attribute `ref` supplied to `React.Fragment`."), Nn(null));
      }
    }
    var Ka = {};
    function Ba(V, oe, he, Se, Ke, qe) {
      {
        var ze = q(V);
        if (!ze) {
          var He = "";
          (V === void 0 || typeof V == "object" && V !== null && Object.keys(V).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = Vf();
          Et ? He += Et : He += za();
          var ot;
          V === null ? ot = "null" : De(V) ? ot = "array" : V !== void 0 && V.$$typeof === t ? (ot = "<" + (T(V.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof V, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, He);
        }
        var lt = yn(V, oe, he, Ke, qe);
        if (lt == null)
          return lt;
        if (ze) {
          var Yt = oe.children;
          if (Yt !== void 0)
            if (Se)
              if (De(Yt)) {
                for (var Dr = 0; Dr < Yt.length; Dr++)
                  ja(Yt[Dr], V);
                Object.freeze && Object.freeze(Yt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ja(Yt, V);
        }
        if (xe.call(oe, "key")) {
          var fr = T(V), Ht = Object.keys(oe).filter(function(Xf) {
            return Xf !== "key";
          }), os = Ht.length > 0 ? "{key: someKey, " + Ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ka[fr + os]) {
            var Wf = Ht.length > 0 ? "{" + Ht.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, os, fr, Wf, fr), Ka[fr + os] = !0;
          }
        }
        return V === r ? Rf(lt) : If(lt), lt;
      }
    }
    function jf(V, oe, he) {
      return Ba(V, oe, he, !0);
    }
    function Kf(V, oe, he) {
      return Ba(V, oe, he, !1);
    }
    var Bf = Kf, Zf = jf;
    uo.Fragment = r, uo.jsx = Bf, uo.jsxs = Zf;
  }()), uo;
}
var Ya;
function Gf() {
  return Ya || (Ya = 1, process.env.NODE_ENV === "production" ? Go.exports = Uf() : Go.exports = Jf()), Go.exports;
}
var Qf = Gf();
const ep = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ep);
const Fs = 1, qs = 2, lu = 4, tp = 8, np = 16, rp = 1, op = 2, uu = 4, ip = 8, sp = 16, cu = 1, ap = 2, du = "[", Ai = "[!", Us = "]", _r = {}, yt = Symbol(), lp = "http://www.w3.org/1999/xhtml", up = "http://www.w3.org/2000/svg", cp = "@attach", dp = !1;
var Lo = Array.isArray, fp = Array.prototype.indexOf, Js = Array.from, gi = Object.keys, Wr = Object.defineProperty, An = Object.getOwnPropertyDescriptor, fu = Object.getOwnPropertyDescriptors, pu = Object.prototype, pp = Array.prototype, Vi = Object.getPrototypeOf, Fa = Object.isExtensible;
function co(e) {
  return typeof e == "function";
}
const kt = () => {
};
function hp(e) {
  return e();
}
function bs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hu() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Pt(e, t, n = !1) {
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
const Dt = 2, Gs = 4, zi = 8, Pr = 16, Kn = 32, ir = 64, Qs = 128, Jt = 256, vi = 512, Nt = 1024, Wt = 2048, sr = 4096, un = 8192, Tr = 16384, ea = 32768, Nr = 65536, qa = 1 << 17, gp = 1 << 18, Mr = 1 << 19, gu = 1 << 20, xs = 1 << 21, ta = 1 << 22, mr = 1 << 23, $n = Symbol("$state"), na = Symbol("legacy props"), vp = Symbol(""), Vr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), mp = 1, Ii = 3, Or = 8;
function ra(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function yp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function _p() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Cp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $p(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function kp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ep() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Tp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Np() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function Mt(e) {
  Ce = e;
}
let Oe;
function it(e) {
  if (e === null)
    throw Ho(), _r;
  return Oe = e;
}
function zn() {
  return it(
    /** @type {TemplateNode} */
    /* @__PURE__ */ fn(Oe)
  );
}
function j(e) {
  if (Ce) {
    if (/* @__PURE__ */ fn(Oe) !== null)
      throw Ho(), _r;
    Oe = e;
  }
}
function be(e = 1) {
  if (Ce) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n);
    Oe = n;
  }
}
function mi(e = !0) {
  for (var t = 0, n = Oe; ; ) {
    if (n.nodeType === Or) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Us) {
        if (t === 0) return n;
        t -= 1;
      } else (r === du || r === Ai) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n)
    );
    e && n.remove(), n = o;
  }
}
function vu(e) {
  if (!e || e.nodeType !== Or)
    throw Ho(), _r;
  return (
    /** @type {Comment} */
    e.data
  );
}
function mu(e) {
  return e === this.v;
}
function yu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wu(e) {
  return !yu(e, this.v);
}
let oo = !1, Mp = !1;
function Op() {
  oo = !0;
}
const Lp = [];
function bu(e, t = !1, n = !1) {
  return ai(e, /* @__PURE__ */ new Map(), "", Lp, null, n);
}
function ai(e, t, n, r, o = null, i = !1) {
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
        l in e && (a[l] = ai(u, t, n, r, null, i));
      }
      return a;
    }
    if (Vi(e) === pu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = ai(
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
      return ai(
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
function Xr(e) {
  Qe = e;
}
function er(e) {
  return (
    /** @type {T} */
    xu().get(e)
  );
}
function Yr(e, t) {
  return xu().set(e, t), t;
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
      zu(r);
  }
  return e !== void 0 && (t.x = e), Qe = t.p, e ?? /** @type {T} */
  {};
}
function Ao() {
  return !oo || Qe !== null && Qe.l === null;
}
function xu(e) {
  return Qe === null && ra(), Qe.c ??= new Map(Dp(Qe) || void 0);
}
function Dp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let hr = [];
function _u() {
  var e = hr;
  hr = [], bs(e);
}
function In(e) {
  if (hr.length === 0 && !yo) {
    var t = hr;
    queueMicrotask(() => {
      t === hr && _u();
    });
  }
  hr.push(e);
}
function Hp() {
  for (; hr.length > 0; )
    _u();
}
const Ap = /* @__PURE__ */ new WeakMap();
function Cu(e) {
  var t = Te;
  if (t === null)
    return Ae.f |= mr, e;
  if ((t.f & ea) === 0) {
    if ((t.f & Qs) === 0)
      throw !t.parent && e instanceof Error && $u(e), e;
    t.b.error(e);
  } else
    Fr(e, t);
}
function Fr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Qs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && $u(e), e;
}
function $u(e) {
  const t = Ap.get(e);
  t && (Wr(e, "message", {
    value: t.message
  }), Wr(e, "stack", {
    value: t.stack
  }));
}
const Qo = /* @__PURE__ */ new Set();
let ft = null, rn = null, _s = /* @__PURE__ */ new Set(), _n = [], Ri = null, Cs = !1, yo = !1;
class an {
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
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #r = null;
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #a = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #l = [];
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
    _n = [], this.apply();
    for (const i of t)
      this.#u(i);
    if (this.#n === 0) {
      var n = rn;
      this.#d();
      var r = this.#a, o = this.#s;
      this.#a = [], this.#s = [], this.#i = [], ft = null, rn = n, Ua(r), Ua(o), this.#r?.resolve();
    } else
      this.#c(this.#a), this.#c(this.#s), this.#c(this.#i);
    rn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #u(t) {
    t.f ^= Nt;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (Kn | ir)) !== 0, i = o && (r & Nt) !== 0, s = i || (r & un) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        o ? n.f ^= Nt : (r & Gs) !== 0 ? this.#s.push(n) : Ki(n) && ((n.f & Pr) !== 0 && this.#i.push(n), wi(n));
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      }
      var l = n.parent;
      for (n = n.next; n === null && l !== null; )
        n = l.next, l = l.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(t) {
    for (const n of t)
      ((n.f & Wt) !== 0 ? this.#o : this.#l).push(n), Lt(n, Nt);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v), rn?.set(t, t.v);
  }
  activate() {
    ft = this;
  }
  deactivate() {
    ft = null, rn = null;
  }
  flush() {
    if (_n.length > 0) {
      if (this.activate(), ku(), ft !== null && ft !== this)
        return;
    } else this.#n === 0 && this.#d();
    this.deactivate();
    for (const t of _s)
      if (_s.delete(t), t(), ft !== null)
        break;
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #d() {
    for (const t of this.#e)
      t();
    if (this.#e.clear(), Qo.size > 1) {
      this.#t.clear();
      let t = !0;
      for (const n of Qo) {
        if (n === this) {
          t = !1;
          continue;
        }
        const r = [];
        for (const [i, s] of this.current) {
          if (n.current.has(i))
            if (t && s !== n.current.get(i))
              n.current.set(i, s);
            else
              continue;
          r.push(i);
        }
        if (r.length === 0)
          continue;
        const o = [...n.current.keys()].filter((i) => !this.current.has(i));
        if (o.length > 0) {
          for (const i of r)
            Su(i, o);
          if (_n.length > 0) {
            ft = n, n.apply();
            for (const i of _n)
              n.#u(i);
            _n = [], n.deactivate();
          }
        }
      }
      ft = null;
    }
    Qo.delete(this);
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    this.#n -= 1;
    for (const t of this.#o)
      Lt(t, Wt), Cr(t);
    for (const t of this.#l)
      Lt(t, sr), Cr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#r ??= hu()).promise;
  }
  static ensure() {
    if (ft === null) {
      const t = ft = new an();
      Qo.add(ft), yo || an.enqueue(() => {
        ft === t && t.flush();
      });
    }
    return ft;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    In(t);
  }
  apply() {
  }
}
function m(e) {
  var t = yo;
  yo = !0;
  try {
    for (var n; ; ) {
      if (Hp(), _n.length === 0 && (ft?.flush(), _n.length === 0))
        return Ri = null, /** @type {T} */
        n;
      ku();
    }
  } finally {
    yo = t;
  }
}
function ku() {
  var e = Rr;
  Cs = !0;
  try {
    var t = 0;
    for (el(!0); _n.length > 0; ) {
      var n = an.ensure();
      if (t++ > 1e3) {
        var r, o;
        Vp();
      }
      n.process(_n), Qn.clear();
    }
  } finally {
    Cs = !1, el(e), Ri = null;
  }
}
function Vp() {
  try {
    _p();
  } catch (e) {
    Fr(e, Ri);
  }
}
let pr = null;
function Ua(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Tr | un)) === 0 && Ki(r) && (pr = [], wi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Bu(r) : r.fn = null), pr?.length > 0)) {
        Qn.clear();
        for (const o of pr)
          wi(o);
        pr = [];
      }
    }
    pr = null;
  }
}
function Su(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & Dt) !== 0 ? Su(
        /** @type {Derived} */
        n,
        t
      ) : (r & (ta | Pr)) !== 0 && Eu(n, t) && (Lt(n, Wt), Cr(
        /** @type {Effect} */
        n
      ));
    }
}
function Eu(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || (n.f & Dt) !== 0 && Eu(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function Cr(e) {
  for (var t = Ri = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Cs && t === Te && (n & Pr) !== 0)
      return;
    if ((n & (ir | Kn)) !== 0) {
      if ((n & Nt) === 0) return;
      t.f ^= Nt;
    }
  }
  _n.push(t);
}
function Pu(e) {
  let t = 0, n = tr(0), r;
  return () => {
    Up() && (c(n), zo(() => (t === 0 && (r = wt(() => e(() => wo(n)))), t += 1, () => {
      In(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, wo(n));
      });
    })));
  };
}
var zp = Nr | Mr | Qs;
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
  #n = Ce ? Oe : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  #c = 0;
  #d = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #m = () => {
    this.#f && qr(this.#f, this.#c);
  };
  #y = Pu(() => (this.#f = tr(this.#c), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#a = r, this.parent = /** @type {Effect} */
    Te.b, this.#t = !!this.#r.pending, this.#s = ar(() => {
      if (Te.b = this, Ce) {
        const o = this.#n;
        zn(), /** @type {Comment} */
        o.nodeType === Or && /** @type {Comment} */
        o.data === Ai ? this.#b() : this.#w();
      } else {
        try {
          this.#i = Bt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#d > 0 ? this.#g() : this.#t = !1;
      }
    }, zp), Ce && (this.#e = Oe);
  }
  #w() {
    try {
      this.#i = Bt(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#o = Bt(() => t(this.#e)), an.enqueue(() => {
      this.#i = this.#h(() => (an.ensure(), Bt(() => this.#a(this.#e)))), this.#d > 0 ? this.#g() : (Ir(
        /** @type {Effect} */
        this.#o,
        () => {
          this.#o = null;
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
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #h(t) {
    var n = Te, r = Ae, o = Qe;
    Qt(this.#s), Vt(this.#s), Xr(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return Cu(i), null;
    } finally {
      Qt(n), Vt(r), Xr(o);
    }
  }
  #g() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#i !== null && (this.#u = document.createDocumentFragment(), Xu(this.#i, this.#u)), this.#o === null && (this.#o = Bt(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #v(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#v(t);
      return;
    }
    this.#d += t, this.#d === 0 && (this.#t = !1, this.#o && Ir(this.#o, () => {
      this.#o = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null), In(() => {
      an.ensure().flush();
    }));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#v(t), this.#c += t, _s.add(this.#m);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#p || !n && !r)
      throw t;
    this.#i && (gt(this.#i), this.#i = null), this.#o && (gt(this.#o), this.#o = null), this.#l && (gt(this.#l), this.#l = null), Ce && (it(
      /** @type {TemplateNode} */
      this.#n
    ), be(), it(mi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Np();
        return;
      }
      o = !0, i && Pp(), an.ensure(), this.#c = 0, this.#l !== null && Ir(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#h(() => (this.#p = !1, Bt(() => this.#a(this.#e)))), this.#d > 0 ? this.#g() : this.#t = !1;
    };
    var a = Ae;
    try {
      Vt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Fr(l, this.#s && this.#s.parent);
    } finally {
      Vt(a);
    }
    r && In(() => {
      this.#l = this.#h(() => {
        this.#p = !0;
        try {
          return Bt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Fr(
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
function Tu(e, t, n) {
  const r = Ao() ? Vo : oa;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = ft, i = (
    /** @type {Effect} */
    Te
  ), s = jp(), a = Ce;
  Promise.all(t.map((l) => /* @__PURE__ */ Kp(l))).then((l) => {
    s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & Tr) === 0 && Fr(u, i);
    }
    a && Mt(!1), o?.deactivate(), $s();
  }).catch((l) => {
    Fr(l, i);
  });
}
function jp() {
  var e = Te, t = Ae, n = Qe, r = ft, o = Ce;
  if (o)
    var i = Oe;
  return function() {
    Qt(e), Vt(t), Xr(n), r?.activate(), o && (Mt(!0), it(i));
  };
}
function $s() {
  Qt(null), Vt(null), Xr(null);
}
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  var t = Dt | Wt, n = Ae !== null && (Ae.f & Dt) !== 0 ? (
    /** @type {Derived} */
    Ae
  ) : null;
  return Te === null || n !== null && (n.f & Jt) !== 0 ? t |= Jt : Te.f |= Mr, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: mu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      yt
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
  n === null && yp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = tr(
    /** @type {V} */
    yt
  ), s = !Ae, a = /* @__PURE__ */ new Map();
  return Gp(() => {
    var l = hu();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then($s);
    } catch (p) {
      l.reject(p), $s();
    }
    var u = (
      /** @type {Batch} */
      ft
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (u.increment(), a.get(u)?.reject(Vr), a.delete(u), a.set(u, l)));
    const f = (p, h = void 0) => {
      if (d || u.activate(), h)
        h !== Vr && (i.f |= mr, qr(i, h));
      else {
        (i.f & mr) !== 0 && (i.f ^= mr), qr(i, p);
        for (const [g, v] of a) {
          if (a.delete(g), g === u) break;
          v.reject(Vr);
        }
      }
      s && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(f, (p) => f(null, p || "unknown"));
  }), ji(() => {
    for (const l of a.values())
      l.reject(Vr);
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
function E(e) {
  const t = /* @__PURE__ */ Vo(e);
  return Yu(t), t;
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  const t = /* @__PURE__ */ Vo(e);
  return t.equals = wu, t;
}
function Nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      gt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Bp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Dt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ia(e) {
  var t, n = Te;
  Qt(Bp(e));
  try {
    Nu(e), t = Ju(e);
  } finally {
    Qt(n);
  }
  return t;
}
function Mu(e) {
  var t = ia(e);
  if (e.equals(t) || (e.v = t, e.wv = qu()), !Lr)
    if (rn !== null)
      rn.set(e, e.v);
    else {
      var n = (Un || (e.f & Jt) !== 0) && e.deps !== null ? sr : Nt;
      Lt(e, n);
    }
}
const Qn = /* @__PURE__ */ new Map();
function tr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = tr(e);
  return Yu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ou(e, t = !1, n = !0) {
  const r = tr(e);
  return t || (r.equals = wu), oo && n && Qe !== null && Qe.l !== null && (Qe.l.s ??= []).push(r), r;
}
function G(e, t, n = !1) {
  Ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!on || (Ae.f & qa) !== 0) && Ao() && (Ae.f & (Dt | Pr | ta | qa)) !== 0 && !Vn?.includes(e) && Ep();
  let r = n ? Ut(t) : t;
  return qr(e, r);
}
function qr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Lr ? Qn.set(e, t) : Qn.set(e, n), e.v = t;
    var r = an.ensure();
    r.capture(e, n), (e.f & Dt) !== 0 && ((e.f & Wt) !== 0 && ia(
      /** @type {Derived} */
      e
    ), Lt(e, (e.f & Jt) === 0 ? Nt : sr)), e.wv = qu(), Lu(e, Wt), Ao() && Te !== null && (Te.f & Nt) !== 0 && (Te.f & (Kn | ir)) === 0 && (Ft === null ? eh([e]) : Ft.push(e));
  }
  return t;
}
function Ja(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function wo(e) {
  G(e, e.v + 1);
}
function Lu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ao(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Te)) {
        var l = (a & Wt) === 0;
        l && Lt(s, t), (a & Dt) !== 0 ? Lu(
          /** @type {Derived} */
          s,
          sr
        ) : l && ((a & Pr) !== 0 && pr !== null && pr.push(
          /** @type {Effect} */
          s
        ), Cr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ut(e) {
  if (typeof e != "object" || e === null || $n in e)
    return e;
  const t = Vi(e);
  if (t !== pu && t !== pp)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Lo(e), o = /* @__PURE__ */ Le(0), i = yr, s = (a) => {
    if (yr === i)
      return a();
    var l = Ae, u = yr;
    Vt(null), nl(i);
    var d = a();
    return Vt(l), nl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Le(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && kp();
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
            const d = s(() => /* @__PURE__ */ Le(yt));
            n.set(l, d), wo(o);
          }
        } else
          G(u, yt), wo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === $n)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || An(a, l)?.writable) && (d = s(() => {
          var h = Ut(f ? a[l] : yt), g = /* @__PURE__ */ Le(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === yt ? void 0 : p;
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
          if (f !== void 0 && p !== yt)
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
        if (l === $n)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== yt || Reflect.has(a, l);
        if (u !== void 0 || Te !== null && (!d || An(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Ut(a[l]) : yt, h = /* @__PURE__ */ Le(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === yt)
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
            g !== void 0 ? G(g, yt) : h in a && (g = s(() => /* @__PURE__ */ Le(yt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || An(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Le(void 0)), G(f, Ut(u)), n.set(l, f));
        else {
          p = f.v !== yt;
          var v = s(() => Ut(u));
          G(f, v);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, l);
        if (b?.set && b.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= _.v && G(_, C + 1);
          }
          wo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== yt;
        });
        for (var [u, d] of n)
          d.v !== yt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Sp();
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
function Zp(e, t) {
  return Object.is(Ga(e), Ga(t));
}
var At, Du, Hu, Au;
function ks() {
  if (At === void 0) {
    At = window, Du = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Hu = An(t, "firstChild").get, Au = An(t, "nextSibling").get, Fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fa(n) && (n.__t = void 0);
  }
}
function Gt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return Hu.call(e);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return Au.call(e);
}
function K(e, t) {
  if (!Ce)
    return /* @__PURE__ */ pt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(Oe)
  );
  if (n === null)
    n = Oe.appendChild(Gt());
  else if (t && n.nodeType !== Ii) {
    var r = Gt();
    return n?.before(r), it(r), r;
  }
  return it(n), n;
}
function ae(e, t = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fn(n) : n;
  }
  if (t && Oe?.nodeType !== Ii) {
    var r = Gt();
    return Oe?.before(r), it(r), r;
  }
  return Oe;
}
function H(e, t = 1, n = !1) {
  let r = Ce ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Ii) {
    var i = Gt();
    return r === null ? o?.after(i) : r.before(i), it(i), i;
  }
  return it(r), /** @type {TemplateNode} */
  r;
}
function sa(e) {
  e.textContent = "";
}
function Wp() {
  return !1;
}
function Xp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, In(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Yp(e) {
  Ce && /* @__PURE__ */ pt(e) !== null && sa(e);
}
let Qa = !1;
function Fp() {
  Qa || (Qa = !0, document.addEventListener(
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
function aa(e) {
  var t = Ae, n = Te;
  Vt(null), Qt(null);
  try {
    return e();
  } finally {
    Vt(t), Qt(n);
  }
}
function Vu(e) {
  Te === null && Ae === null && xp(), Ae !== null && (Ae.f & Jt) !== 0 && Te === null && bp(), Lr && wp();
}
function qp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pn(e, t, n, r = !0) {
  var o = Te;
  o !== null && (o.f & un) !== 0 && (e |= un);
  var i = {
    ctx: Qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Wt,
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
      wi(i), i.f |= ea;
    } catch (l) {
      throw gt(i), l;
    }
  else t !== null && Cr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Mr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && qp(s, o), Ae !== null && (Ae.f & Dt) !== 0 && (e & ir) === 0)) {
      var a = (
        /** @type {Derived} */
        Ae
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function Up() {
  return Ae !== null && !on;
}
function ji(e) {
  const t = pn(zi, null, !1);
  return Lt(t, Nt), t.teardown = e, t;
}
function nt(e) {
  Vu();
  var t = (
    /** @type {Effect} */
    Te.f
  ), n = !Ae && (t & Kn) !== 0 && (t & ea) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Qe
    );
    (r.e ??= []).push(e);
  } else
    return zu(e);
}
function zu(e) {
  return pn(Gs | gu, e, !1);
}
function Iu(e) {
  return Vu(), pn(zi | gu, e, !0);
}
function la(e) {
  an.ensure();
  const t = pn(ir | Mr, e, !0);
  return () => {
    gt(t);
  };
}
function Jp(e) {
  an.ensure();
  const t = pn(ir | Mr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ir(t, () => {
      gt(t), r(void 0);
    }) : (gt(t), r(void 0));
  });
}
function io(e) {
  return pn(Gs, e, !1);
}
function Gp(e) {
  return pn(ta | Mr, e, !0);
}
function zo(e, t = 0) {
  return pn(zi | t, e, !0);
}
function Ee(e, t = [], n = []) {
  Tu(t, n, (r) => {
    pn(zi, () => e(...r.map(c)), !0);
  });
}
function ar(e, t = 0) {
  var n = pn(Pr | t, e, !0);
  return n;
}
function Bt(e, t = !0) {
  return pn(Kn | Mr, e, !0, t);
}
function Ru(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Lr, r = Ae;
    tl(!0), Vt(null);
    try {
      t.call(null);
    } finally {
      tl(n), Vt(r);
    }
  }
}
function ju(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && aa(() => {
      o.abort(Vr);
    });
    var r = n.next;
    (n.f & ir) !== 0 ? n.parent = null : gt(n, t), n = r;
  }
}
function Qp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Kn) === 0 && gt(t), t = n;
  }
}
function gt(e, t = !0) {
  var n = !1;
  (t || (e.f & gp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Ku(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ju(e, t && !n), yi(e, 0), Lt(e, Tr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Ru(e);
  var o = e.parent;
  o !== null && o.first !== null && Bu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ku(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(e)
    );
    e.remove(), e = n;
  }
}
function Bu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ir(e, t, n = !0) {
  var r = [];
  ua(e, r, !0), Zu(r, () => {
    n && gt(e), t && t();
  });
}
function Zu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ua(e, t, n) {
  if ((e.f & un) === 0) {
    if (e.f ^= un, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Nr) !== 0 || (r.f & Kn) !== 0;
      ua(r, t, i ? n : !1), r = o;
    }
  }
}
function ca(e) {
  Wu(e, !0);
}
function Wu(e, t) {
  if ((e.f & un) !== 0) {
    e.f ^= un, (e.f & Nt) === 0 && (Lt(e, Wt), Cr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Nr) !== 0 || (n.f & Kn) !== 0;
      Wu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Xu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n)
    );
    t.append(n), n = o;
  }
}
let Rr = !1;
function el(e) {
  Rr = e;
}
let Lr = !1;
function tl(e) {
  Lr = e;
}
let Ae = null, on = !1;
function Vt(e) {
  Ae = e;
}
let Te = null;
function Qt(e) {
  Te = e;
}
let Vn = null;
function Yu(e) {
  Ae !== null && (Vn === null ? Vn = [e] : Vn.push(e));
}
let Tt = null, Kt = 0, Ft = null;
function eh(e) {
  Ft = e;
}
let Fu = 1, xo = 0, yr = xo;
function nl(e) {
  yr = e;
}
let Un = !1;
function qu() {
  return ++Fu;
}
function Ki(e) {
  var t = e.f;
  if ((t & Wt) !== 0)
    return !0;
  if ((t & sr) !== 0) {
    var n = e.deps, r = (t & Jt) !== 0;
    if (n !== null) {
      var o, i, s = (t & vi) !== 0, a = r && Te !== null && !Un, l = n.length;
      if ((s || a) && (Te === null || (Te.f & Tr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= vi), a && d !== null && (d.f & Jt) === 0 && (u.f ^= Jt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Ki(
          /** @type {Derived} */
          i
        ) && Mu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Te !== null && !Un) && Lt(e, Nt);
  }
  return !1;
}
function Uu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Vn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Dt) !== 0 ? Uu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Lt(i, Wt) : (i.f & Nt) !== 0 && Lt(i, sr), Cr(
        /** @type {Effect} */
        i
      ));
    }
}
function Ju(e) {
  var t = Tt, n = Kt, r = Ft, o = Ae, i = Un, s = Vn, a = Qe, l = on, u = yr, d = e.f;
  Tt = /** @type {null | Value[]} */
  null, Kt = 0, Ft = null, Un = (d & Jt) !== 0 && (on || !Rr || Ae === null), Ae = (d & (Kn | ir)) === 0 ? e : null, Vn = null, Xr(e.ctx), on = !1, yr = ++xo, e.ac !== null && (aa(() => {
    e.ac.abort(Vr);
  }), e.ac = null);
  try {
    e.f |= xs;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (Tt !== null) {
      var g;
      if (yi(e, Kt), h !== null && Kt > 0)
        for (h.length = Kt + Tt.length, g = 0; g < Tt.length; g++)
          h[Kt + g] = Tt[g];
      else
        e.deps = h = Tt;
      if (!Un || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Dt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Kt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Kt < h.length && (yi(e, Kt), h.length = Kt);
    if (Ao() && Ft !== null && !on && h !== null && (e.f & (Dt | sr | Wt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ft.length; g++)
        Uu(
          Ft[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, Ft !== null && (r === null ? r = Ft : r.push(.../** @type {Source[]} */
    Ft))), (e.f & mr) !== 0 && (e.f ^= mr), p;
  } catch (v) {
    return Cu(v);
  } finally {
    e.f ^= xs, Tt = t, Kt = n, Ft = r, Ae = o, Un = i, Vn = s, Xr(a), on = l, yr = u;
  }
}
function th(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = fp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Dt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Tt === null || !Tt.includes(t)) && (Lt(t, sr), (t.f & (Jt | vi)) === 0 && (t.f ^= vi), Nu(
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
function wi(e) {
  var t = e.f;
  if ((t & Tr) === 0) {
    Lt(e, Nt);
    var n = Te, r = Rr;
    Te = e, Rr = !0;
    try {
      (t & Pr) !== 0 ? Qp(e) : ju(e), Ru(e);
      var o = Ju(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Fu;
      var i;
      dp && Mp && (e.f & Wt) !== 0 && e.deps;
    } finally {
      Rr = r, Te = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Dt) !== 0;
  if (Ae !== null && !on) {
    var r = Te !== null && (Te.f & Tr) !== 0;
    if (!r && !Vn?.includes(e)) {
      var o = Ae.deps;
      if ((Ae.f & xs) !== 0)
        e.rv < xo && (e.rv = xo, Tt === null && o !== null && o[Kt] === e ? Kt++ : Tt === null ? Tt = [e] : (!Un || !Tt.includes(e)) && Tt.push(e));
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
  if (Lr) {
    if (Qn.has(e))
      return Qn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & Nt) === 0 && s.reactions !== null || Gu(s)) && (l = ia(s)), Qn.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    e, rn?.has(s))
      return rn.get(s);
    Ki(s) && Mu(s);
  }
  if (rn?.has(e))
    return rn.get(e);
  if ((e.f & mr) !== 0)
    throw e.v;
  return e.v;
}
function Gu(e) {
  if (e.v === yt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Qn.has(t) || (t.f & Dt) !== 0 && Gu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function wt(e) {
  var t = on;
  try {
    return on = !0, e();
  } finally {
    on = t;
  }
}
const nh = -7169;
function Lt(e, t) {
  e.f = e.f & nh | t;
}
function rh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function da(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if ($n in e)
      Ss(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && $n in n && Ss(n);
      }
  }
}
function Ss(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ss(e[r], t);
      } catch {
      }
    const n = Vi(e);
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
const Qu = /* @__PURE__ */ new Set(), Es = /* @__PURE__ */ new Set();
function fa(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ho.call(t, i), !i.cancelBubble)
      return aa(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? In(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ps(e, t, n, r = {}) {
  var o = fa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function bi(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = fa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ji(() => {
    t.removeEventListener(e, s, i);
  });
}
function lr(e) {
  for (var t = 0; t < e.length; t++)
    Qu.add(e[t]);
  for (var n of Es)
    n(e);
}
let rl = null;
function ho(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  rl = e;
  var s = 0, a = rl === e && e.__root;
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
    Wr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ae, f = Te;
    Vt(null), Qt(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var v = i["__" + r];
          if (v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Lo(v)) {
              var [b, ..._] = v;
              b.apply(i, [e, ..._]);
            } else
              v.call(i, e);
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
      e.__root = t, delete e.currentTarget, Vt(d), Qt(f);
    }
  }
}
function pa(e) {
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
  var n = (t & cu) !== 0, r = (t & ap) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return It(Oe, null), Oe;
    o === void 0 && (o = pa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ pt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Du ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(s)
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
  var r = !e.startsWith("<!>"), o = (t & cu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return It(Oe, null), Oe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        pa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ pt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ pt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ pt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ pt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(u)
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
  var n = Oe;
  return n.nodeType !== Ii && (n.before(n = Gt()), it(n)), It(n, n), n;
}
function Me() {
  if (Ce)
    return It(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Gt();
  return e.append(t, n), It(t, n), e;
}
function L(e, t) {
  if (Ce) {
    Te.nodes_end = Oe, zn();
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
function Ue(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function ec(e, t) {
  return tc(e, t);
}
function hh(e, t) {
  ks(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Oe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(n)
    ); i && (i.nodeType !== Or || /** @type {Comment} */
    i.data !== du); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(i);
    if (!i)
      throw _r;
    Mt(!0), it(
      /** @type {Comment} */
      i
    );
    const s = tc(e, { ...t, anchor: i });
    return Mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== _r && console.warn("Failed to hydrate: ", s), t.recover === !1 && Cp(), ks(), sa(n), Mt(!1), ec(e, t);
  } finally {
    Mt(r), it(o);
  }
}
const Hr = /* @__PURE__ */ new Map();
function tc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ks();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = dh(h);
        t.addEventListener(h, ho, { passive: g });
        var v = Hr.get(h);
        v === void 0 ? (document.addEventListener(h, ho, { passive: g }), Hr.set(h, 1)) : Hr.set(h, v + 1);
      }
    }
  };
  l(Js(Qu)), Es.add(l);
  var u = void 0, d = Jp(() => {
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
        ), u = e(p, r) || {}, Ce && (Te.nodes_end = Oe, Oe === null || Oe.nodeType !== Or || /** @type {Comment} */
        Oe.data !== Us))
          throw Ho(), _r;
        i && pe();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, ho);
        var h = (
          /** @type {number} */
          Hr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, ho), Hr.delete(p)) : Hr.set(p, h);
      }
      Es.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Ts.set(u, d), u;
}
let Ts = /* @__PURE__ */ new WeakMap();
function gh(e, t) {
  const n = Ts.get(e);
  return n ? (Ts.delete(e), n(t)) : Promise.resolve();
}
class Bi {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #n = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#r = n;
  }
  #a = () => {
    var t = (
      /** @type {Batch} */
      ft
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        ca(r);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (gt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Xu(s, l), l.append(Gt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            gt(s);
          this.#e.delete(i);
        };
        this.#r || !r ? Ir(s, a, !1) : a();
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      ft
    ), o = Wp();
    n && !this.#e.has(t) && !this.#n.has(t) && this.#e.set(
      t,
      Bt(() => n(this.anchor))
    ), this.#t.set(r, t), o || (Ce && (this.anchor = Oe), this.#a());
  }
}
function st(e, t, ...n) {
  var r = new Bi(e);
  ar(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Nr);
}
function Bn(e) {
  Qe === null && ra(), oo && Qe.l !== null ? vh(Qe).m.push(e) : nt(() => {
    const t = wt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Io(e) {
  Qe === null && ra(), Bn(() => () => wt(e));
}
function vh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  Ce && zn();
  var r = new Bi(e), o = n ? Nr : 0;
  function i(s, a) {
    if (Ce) {
      const u = vu(e) === Ai;
      if (s === u) {
        var l = mi();
        it(l), r.anchor = l, Mt(!1), r.ensure(s, a), Mt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  ar(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function mh(e, t) {
  Ce && it(
    /** @type {TemplateNode} */
    /* @__PURE__ */ pt(e)
  ), zo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Ur(e, t) {
  return t;
}
function yh(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    ua(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    sa(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), bn(e, t[0].prev, t[i - 1].next);
  }
  Zu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), bn(e, d.prev, d.next)), gt(d.e, !a);
    }
  });
}
function St(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & lu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Ce ? it(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pt(u)
    ) : u.appendChild(Gt());
  }
  Ce && zn();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ oa(() => {
    var _ = n();
    return Lo(_) ? _ : _ == null ? [] : Js(_);
  }), g, v;
  function b() {
    wh(
      v,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? ca(d) : d = Bt(() => i(s)) : d !== null && Ir(d, () => {
      d = null;
    }));
  }
  ar(() => {
    v ??= /** @type {Effect} */
    Te, g = /** @type {V[]} */
    c(h);
    var _ = g.length;
    if (f && _ === 0)
      return;
    f = _ === 0;
    let C = !1;
    if (Ce) {
      var x = vu(s) === Ai;
      x !== (_ === 0) && (s = mi(), it(s), Mt(!1), C = !0);
    }
    if (Ce) {
      for (var k = null, P, S = 0; S < _; S++) {
        if (Oe.nodeType === Or && /** @type {Comment} */
        Oe.data === Us) {
          s = /** @type {Comment} */
          Oe, C = !0, Mt(!1);
          break;
        }
        var O = g[S], A = r(O, S);
        P = nc(
          Oe,
          a,
          k,
          null,
          O,
          A,
          S,
          o,
          t,
          n
        ), a.items.set(A, P), k = P;
      }
      _ > 0 && it(mi());
    }
    Ce ? _ === 0 && i && (d = Bt(() => i(s))) : b(), C && Mt(!0), c(h);
  }), Ce && (s = Oe);
}
function wh(e, t, n, r, o, i, s, a, l) {
  var u = (s & tp) !== 0, d = (s & (Fs | qs)) !== 0, f = t.length, p = n.items, h = n.first, g = h, v, b = null, _, C = [], x = [], k, P, S, O;
  if (u)
    for (O = 0; O < f; O += 1)
      k = t[O], P = a(k, O), S = p.get(P), S !== void 0 && (S.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(S));
  for (O = 0; O < f; O += 1) {
    if (k = t[O], P = a(k, O), S = p.get(P), S === void 0) {
      var A = r.get(P);
      if (A !== void 0) {
        r.delete(P), p.set(P, A);
        var Z = b ? b.next : g;
        bn(n, b, A), bn(n, A, Z), is(A, Z, o), b = A;
      } else {
        var q = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        b = nc(
          q,
          n,
          b,
          b === null ? n.first : b.next,
          k,
          P,
          O,
          i,
          s,
          l
        );
      }
      p.set(P, b), C = [], x = [], g = b.next;
      continue;
    }
    if (d && bh(S, k, O, s), (S.e.f & un) !== 0 && (ca(S.e), u && (S.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(S))), S !== g) {
      if (v !== void 0 && v.has(S)) {
        if (C.length < x.length) {
          var I = x[0], $;
          b = I.prev;
          var T = C[0], w = C[C.length - 1];
          for ($ = 0; $ < C.length; $ += 1)
            is(C[$], I, o);
          for ($ = 0; $ < x.length; $ += 1)
            v.delete(x[$]);
          bn(n, T.prev, w.next), bn(n, b, T), bn(n, w, I), g = I, b = w, O -= 1, C = [], x = [];
        } else
          v.delete(S), is(S, g, o), bn(n, S.prev, S.next), bn(n, S, b === null ? n.first : b.next), bn(n, b, S), b = S;
        continue;
      }
      for (C = [], x = []; g !== null && g.k !== P; )
        (g.e.f & un) === 0 && (v ??= /* @__PURE__ */ new Set()).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      S = g;
    }
    C.push(S), b = S, g = S.next;
  }
  if (g !== null || v !== void 0) {
    for (var M = v === void 0 ? [] : Js(v); g !== null; )
      (g.e.f & un) === 0 && M.push(g), g = g.next;
    var N = M.length;
    if (N > 0) {
      var R = (s & lu) !== 0 && f === 0 ? o : null;
      if (u) {
        for (O = 0; O < N; O += 1)
          M[O].a?.measure();
        for (O = 0; O < N; O += 1)
          M[O].a?.fix();
      }
      yh(n, M, R);
    }
  }
  u && In(() => {
    if (_ !== void 0)
      for (S of _)
        S.a?.apply();
  }), e.first = n.first && n.first.e, e.last = b && b.e;
  for (var B of r.values())
    gt(B.e);
  r.clear();
}
function bh(e, t, n, r) {
  (r & Fs) !== 0 && qr(e.v, t), (r & qs) !== 0 ? qr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function nc(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & Fs) !== 0, p = (l & np) === 0, h = f ? p ? /* @__PURE__ */ Ou(o, !1, !1) : tr(o) : o, g = (l & qs) === 0 ? s : tr(s), v = {
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
      var b = document.createDocumentFragment();
      b.append(e = Gt());
    }
    return v.e = Bt(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), Ce), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? d || (t.first = v) : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function is(e, t, n) {
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
      /* @__PURE__ */ fn(i)
    );
    o.before(i), i = s;
  }
}
function bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ha(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      Te
    );
    if (s === (s = t() ?? "")) {
      Ce && zn();
      return;
    }
    if (a.nodes_start !== null && (Ku(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Oe.data;
        for (var l = zn(), u = l; l !== null && (l.nodeType !== Or || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ fn(l);
        if (l === null)
          throw Ho(), _r;
        It(Oe, u), i = it(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = pa(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ pt(f)), It(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ pt(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ pt(f)
          );
      else
        i.before(f);
    }
  });
}
function Zi(e, t, n) {
  Ce && zn();
  var r = new Bi(e);
  ar(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Nr);
}
function xh(e, t, n, r, o, i) {
  let s = Ce;
  Ce && zn();
  var a = null;
  Ce && Oe.nodeType === mp && (a = /** @type {Element} */
  Oe, zn());
  var l = (
    /** @type {TemplateNode} */
    Ce ? Oe : e
  ), u = new Bi(l, !1);
  ar(() => {
    const d = t() || null;
    var f = d === "svg" ? up : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = Ce ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), It(a, a), r) {
          Ce && ph(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            Ce ? /* @__PURE__ */ pt(a) : a.appendChild(Gt())
          );
          Ce && (h === null ? Mt(!1) : it(h)), r(a, h);
        }
        Te.nodes_end = a, p.before(a);
      }
      Ce && it(p);
    }), () => {
    };
  }, Nr), ji(() => {
  }), s && (Mt(!0), it(l));
}
function Ye(e, t) {
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
function $t(e, t, n) {
  io(() => {
    var r = wt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      zo(() => {
        var s = n();
        da(s), o && yu(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function _h(e, t) {
  var n = void 0, r;
  ar(() => {
    n !== (n = t()) && (r && (gt(r), r = null), n && (r = Bt(() => {
      io(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function rc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = rc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ch() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = rc(e)) && (r && (r += " "), r += t);
  return r;
}
function Zn(e) {
  return typeof e == "object" ? Ch(e) : e ?? "";
}
const ol = [...` 	
\r\f \v\uFEFF`];
function $h(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || ol.includes(r[s - 1])) && (a === r.length || ol.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function il(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ss(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function kh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ss)), o && l.push(...Object.keys(o).map(ss));
      var u = 0, d = -1;
      const v = e.length;
      for (var f = 0; f < v; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === v - 1) {
            if (d !== -1) {
              var h = ss(e.substring(u, d).trim());
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
    return r && (n += il(r)), o && (n += il(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Rt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = $h(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function as(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function xt(e, t, n, r) {
  var o = e.__style;
  if (Ce || o !== t) {
    var i = kh(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (as(e, n?.[0], r[0]), as(e, n?.[1], r[1], "important")) : as(e, n, r));
  return r;
}
function Ns(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Lo(t))
      return Tp();
    for (var r of e.options)
      r.selected = t.includes(sl(r));
    return;
  }
  for (r of e.options) {
    var o = sl(r);
    if (Zp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Sh(e) {
  var t = new MutationObserver(() => {
    Ns(e, e.__value);
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
  }), ji(() => {
    t.disconnect();
  });
}
function sl(e) {
  return "__value" in e ? e.__value : e.value;
}
const qn = Symbol("class"), Cn = Symbol("style"), oc = Symbol("is custom element"), ic = Symbol("is html");
function wr(e) {
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
    e.__on_r = n, In(n), Fp();
  }
}
function li(e, t) {
  var n = Wi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function al(e, t) {
  var n = Wi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Eh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = Wi(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[vp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && sc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ph(e, t, n, r, o = !1, i = !1) {
  if (Ce && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || wr(s);
  }
  var l = Wi(e), u = l[oc], d = !l[ic];
  let f = Ce && u;
  f && Mt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Zn(n.class) : (r || n[qn]) && (n.class = null), n[Cn] && (n.style ??= null);
  var v = sc(e);
  for (const S in n) {
    let O = n[S];
    if (h && S === "value" && O == null) {
      e.value = e.__value = "", p[S] = O;
      continue;
    }
    if (S === "class") {
      var b = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rt(e, b, O, r, t?.[qn], n[qn]), p[S] = O, p[qn] = n[qn];
      continue;
    }
    if (S === "style") {
      xt(e, O, t?.[Cn], n[Cn]), p[S] = O, p[Cn] = n[Cn];
      continue;
    }
    var _ = p[S];
    if (!(O === _ && !(O === void 0 && e.hasAttribute(S)))) {
      p[S] = O;
      var C = S[0] + S[1];
      if (C !== "$$")
        if (C === "on") {
          const A = {}, Z = "$$" + S;
          let q = S.slice(2);
          var x = ah(q);
          if (ih(q) && (q = q.slice(0, -7), A.capture = !0), !x && _) {
            if (O != null) continue;
            e.removeEventListener(q, p[Z], A), p[Z] = null;
          }
          if (O != null)
            if (x)
              e[`__${q}`] = O, lr([q]);
            else {
              let I = function($) {
                p[S].call(this, $);
              };
              p[Z] = fa(q, e, I, A);
            }
          else x && (e[`__${q}`] = void 0);
        } else if (S === "style")
          ke(e, S, O);
        else if (S === "autofocus")
          Xp(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!u && (S === "__value" || S === "value" && O != null))
          e.value = e.__value = O;
        else if (S === "selected" && h)
          Eh(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var k = S;
          d || (k = uh(k));
          var P = k === "defaultValue" || k === "defaultChecked";
          if (O == null && !u && !P)
            if (l[S] = null, k === "value" || k === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                e
              );
              const Z = t === void 0;
              if (k === "value") {
                let q = A.defaultValue;
                A.removeAttribute(k), A.defaultValue = q, A.value = A.__value = Z ? q : null;
              } else {
                let q = A.defaultChecked;
                A.removeAttribute(k), A.defaultChecked = q, A.checked = Z ? q : !1;
              }
            } else
              e.removeAttribute(S);
          else P || v.includes(k) && (u || typeof O != "string") ? (e[k] = O, k in l && (l[k] = yt)) : typeof O != "function" && ke(e, k, O);
        }
    }
  }
  return f && Mt(!0), p;
}
function ht(e, t, n = [], r = [], o, i = !1, s = !1) {
  Tu(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (ar(() => {
      var h = t(...a.map(c)), g = Ph(
        e,
        l,
        h,
        o,
        i,
        s
      );
      f && d && "value" in h && Ns(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let b of Object.getOwnPropertySymbols(u))
        h[b] || gt(u[b]);
      for (let b of Object.getOwnPropertySymbols(h)) {
        var v = h[b];
        b.description === cp && (!l || v !== l[b]) && (u[b] && gt(u[b]), u[b] = Bt(() => _h(e, () => v))), g[b] = v;
      }
      l = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      io(() => {
        Ns(
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
function Wi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [oc]: e.nodeName.includes("-"),
      [ic]: e.namespaceURI === lp
    }
  );
}
var ll = /* @__PURE__ */ new Map();
function sc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ll.get(t);
  if (n) return n;
  ll.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = fu(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Vi(o);
  }
  return n;
}
class ga {
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
          ga.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Th = /* @__PURE__ */ new ga({
  box: "border-box"
});
function ul(e, t, n) {
  var r = Th.observe(e, () => n(e[t]));
  io(() => (wt(() => n(e[t])), r));
}
function cl(e, t) {
  return e === t || e?.[$n] === t;
}
function jt(e = {}, t, n, r) {
  return io(() => {
    var o, i;
    return zo(() => {
      o = i, i = [], wt(() => {
        e !== n(...i) && (t(e, ...i), o && cl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      In(() => {
        i && cl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ac(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => da(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Vo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Iu(() => {
    dl(t, r), bs(n.b);
  }), nt(() => {
    const o = wt(() => n.m.map(hp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nt(() => {
    dl(t, r), bs(n.a);
  });
}
function dl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let ei = !1;
function Nh(e) {
  var t = ei;
  try {
    return ei = !1, [e(), ei];
  } finally {
    ei = t;
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
function Fe(e, t, n) {
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
        Qt(e.parent_effect), e.special[t] = y(
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
        Qt(r);
      }
    }
    return e.special[t](n), Ja(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ja(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function fl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: tr(0),
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
      const i = An(o, t);
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
        const o = An(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === $n || t === na) return !1;
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
function Je(...e) {
  return new Proxy({ props: e }, Lh);
}
function y(e, t, n, r) {
  var o = !oo || (n & op) !== 0, i = (n & ip) !== 0, s = (n & sp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? wt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = $n in e || na in e;
    d = An(e, t)?.set ?? (f && t in e ? (x) => e[t] = x : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Nh(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && $p(), d(p)));
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
  }, o && (n & uu) === 0)
    return g;
  if (d) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, k) {
        return arguments.length > 0 ? ((!o || !k || v || h) && d(k ? g() : x), x) : g();
      }
    );
  }
  var b = !1, _ = ((n & rp) !== 0 ? Vo : oa)(() => (b = !1, g()));
  i && c(_);
  var C = (
    /** @type {Effect} */
    Te
  );
  return (
    /** @type {() => V} */
    function(x, k) {
      if (arguments.length > 0) {
        const P = k ? c(_) : o && i ? Ut(x) : x;
        return G(_, P), b = !0, a !== void 0 && (a = P), x;
      }
      return Lr && b || (C.f & Tr) !== 0 ? _.v : c(_);
    }
  );
}
function Dh(e) {
  return new Hh(e);
}
class Hh {
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
      var a = /* @__PURE__ */ Ou(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === na ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return G(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? hh : ec)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Wr(this, i, {
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
let lc;
typeof HTMLElement == "function" && (lc = class extends HTMLElement {
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
        o in this.$$d || (this.$$d[o] = ui(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = la(() => {
        zo(() => {
          this.$$r = !0;
          for (const r of gi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ui(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ui(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return gi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ui(e, t, n, r) {
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
  let s = class extends lc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return gi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return gi(t).forEach((a) => {
    Wr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ui(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = An(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Wr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Vh = { value: () => {
} };
function Xi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ci(n);
}
function ci(e) {
  this._ = e;
}
function zh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ci.prototype = Xi.prototype = {
  constructor: ci,
  on: function(e, t) {
    var n = this._, r = zh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ih(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = pl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = pl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ci(e);
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
function pl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Vh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ms = "http://www.w3.org/1999/xhtml";
const hl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ms,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Yi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), hl.hasOwnProperty(t) ? { space: hl[t], local: e } : e;
}
function Rh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ms && t.documentElement.namespaceURI === Ms ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function jh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function uc(e) {
  var t = Yi(e);
  return (t.local ? jh : Rh)(t);
}
function Kh() {
}
function va(e) {
  return e == null ? Kh : function() {
    return this.querySelector(e);
  };
}
function Bh(e) {
  typeof e != "function" && (e = va(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Xt(r, this._parents);
}
function Zh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Wh() {
  return [];
}
function cc(e) {
  return e == null ? Wh : function() {
    return this.querySelectorAll(e);
  };
}
function Xh(e) {
  return function() {
    return Zh(e.apply(this, arguments));
  };
}
function Yh(e) {
  typeof e == "function" ? e = Xh(e) : e = cc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Xt(r, o);
}
function dc(e) {
  return function() {
    return this.matches(e);
  };
}
function fc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Fh = Array.prototype.find;
function qh(e) {
  return function() {
    return Fh.call(this.children, e);
  };
}
function Uh() {
  return this.firstElementChild;
}
function Jh(e) {
  return this.select(e == null ? Uh : qh(typeof e == "function" ? e : fc(e)));
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
  return this.selectAll(e == null ? Qh : eg(typeof e == "function" ? e : fc(e)));
}
function ng(e) {
  typeof e != "function" && (e = dc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Xt(r, this._parents);
}
function pc(e) {
  return new Array(e.length);
}
function rg() {
  return new Xt(this._enter || this._groups.map(pc), this._parents);
}
function xi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
xi.prototype = {
  constructor: xi,
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
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new xi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function sg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new xi(e, i[a]);
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
    var d = r[u], f = o[u], p = f.length, h = ug(e.call(d, d && d.__data__, u, r)), g = h.length, v = a[u] = new Array(g), b = s[u] = new Array(g), _ = l[u] = new Array(p);
    n(d, f, v, b, _, h, t);
    for (var C = 0, x = 0, k, P; C < g; ++C)
      if (k = v[C]) {
        for (C >= x && (x = C + 1); !(P = b[x]) && ++x < g; ) ;
        k._next = P || null;
      }
  }
  return s = new Xt(s, r), s._enter = a, s._exit = l, s;
}
function ug(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function cg() {
  return new Xt(this._exit || this._groups.map(pc), this._parents);
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
  return new Xt(a, this._parents);
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
  return new Xt(o, this._parents).order();
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
function _g(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Cg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $g(e, t) {
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
  var n = Yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Cg : _g : typeof t == "function" ? n.local ? Eg : Sg : n.local ? kg : $g)(n, t));
}
function hc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Tg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ng(e, t, n) {
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
  return arguments.length > 1 ? this.each((t == null ? Tg : typeof t == "function" ? Mg : Ng)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
  return e.style.getPropertyValue(t) || hc(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ag(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? Hg : Dg)(e, t)) : this.node()[e];
}
function gc(e) {
  return e.trim().split(/^|\s+/);
}
function ma(e) {
  return e.classList || new vc(e);
}
function vc(e) {
  this._node = e, this._names = gc(e.getAttribute("class") || "");
}
vc.prototype = {
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
function mc(e, t) {
  for (var n = ma(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function yc(e, t) {
  for (var n = ma(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Vg(e) {
  return function() {
    mc(this, e);
  };
}
function zg(e) {
  return function() {
    yc(this, e);
  };
}
function Ig(e, t) {
  return function() {
    (t.apply(this, arguments) ? mc : yc)(this, e);
  };
}
function Rg(e, t) {
  var n = gc(e + "");
  if (arguments.length < 2) {
    for (var r = ma(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ig : t ? Vg : zg)(n, t));
}
function jg() {
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
function Zg(e) {
  return arguments.length ? this.each(e == null ? jg : (typeof e == "function" ? Bg : Kg)(e)) : this.node().textContent;
}
function Wg() {
  this.innerHTML = "";
}
function Xg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Yg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Fg(e) {
  return arguments.length ? this.each(e == null ? Wg : (typeof e == "function" ? Yg : Xg)(e)) : this.node().innerHTML;
}
function qg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ug() {
  return this.each(qg);
}
function Jg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Gg() {
  return this.each(Jg);
}
function Qg(e) {
  var t = typeof e == "function" ? e : uc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ev() {
  return null;
}
function tv(e, t) {
  var n = typeof e == "function" ? e : uc(e), r = t == null ? ev : typeof t == "function" ? t : va(t);
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
function wc(e, t, n) {
  var r = hc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function pv(e, t) {
  return function() {
    return wc(this, e, t);
  };
}
function hv(e, t) {
  return function() {
    return wc(this, e, t.apply(this, arguments));
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
var bc = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Ro() {
  return new Xt([[document.documentElement]], bc);
}
function mv() {
  return this;
}
Xt.prototype = Ro.prototype = {
  constructor: Xt,
  select: Bh,
  selectAll: Yh,
  selectChild: Jh,
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
  html: Fg,
  raise: Ug,
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
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], bc);
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
const wv = { passive: !1 }, _o = { capture: !0, passive: !1 };
function ls(e) {
  e.stopImmediatePropagation();
}
function jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xc(e) {
  var t = e.document.documentElement, n = qt(e).on("dragstart.drag", jr, _o);
  "onselectstart" in t ? n.on("selectstart.drag", jr, _o) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function _c(e, t) {
  var n = e.document.documentElement, r = qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", jr, _o), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ti = (e) => () => e;
function Os(e, {
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
Os.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function bv(e) {
  return !e.ctrlKey && !e.button;
}
function xv() {
  return this.parentNode;
}
function _v(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Cv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $v() {
  var e = bv, t = xv, n = _v, r = Cv, o = {}, i = Xi("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(k) {
    k.on("mousedown.drag", h).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, wv).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(k, P) {
    if (!(d || !e.call(this, k, P))) {
      var S = x(this, t.call(this, k, P), k, P, "mouse");
      S && (qt(k.view).on("mousemove.drag", g, _o).on("mouseup.drag", v, _o), xc(k.view), ls(k), u = !1, a = k.clientX, l = k.clientY, S("start", k));
    }
  }
  function g(k) {
    if (jr(k), !u) {
      var P = k.clientX - a, S = k.clientY - l;
      u = P * P + S * S > f;
    }
    o.mouse("drag", k);
  }
  function v(k) {
    qt(k.view).on("mousemove.drag mouseup.drag", null), _c(k.view, u), jr(k), o.mouse("end", k);
  }
  function b(k, P) {
    if (e.call(this, k, P)) {
      var S = k.changedTouches, O = t.call(this, k, P), A = S.length, Z, q;
      for (Z = 0; Z < A; ++Z)
        (q = x(this, O, k, P, S[Z].identifier, S[Z])) && (ls(k), q("start", k, S[Z]));
    }
  }
  function _(k) {
    var P = k.changedTouches, S = P.length, O, A;
    for (O = 0; O < S; ++O)
      (A = o[P[O].identifier]) && (jr(k), A("drag", k, P[O]));
  }
  function C(k) {
    var P = k.changedTouches, S = P.length, O, A;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < S; ++O)
      (A = o[P[O].identifier]) && (ls(k), A("end", k, P[O]));
  }
  function x(k, P, S, O, A, Z) {
    var q = i.copy(), I = nn(Z || S, P), $, T, w;
    if ((w = n.call(k, new Os("beforestart", {
      sourceEvent: S,
      target: p,
      identifier: A,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: q
    }), O)) != null)
      return $ = w.x - I[0] || 0, T = w.y - I[1] || 0, function M(N, R, B) {
        var W = I, D;
        switch (N) {
          case "start":
            o[A] = M, D = s++;
            break;
          case "end":
            delete o[A], --s;
          // falls through
          case "drag":
            I = nn(B || R, P), D = s;
            break;
        }
        q.call(
          N,
          k,
          new Os(N, {
            sourceEvent: R,
            subject: w,
            target: p,
            identifier: A,
            active: D,
            x: I[0] + $,
            y: I[1] + T,
            dx: I[0] - W[0],
            dy: I[1] - W[1],
            dispatch: q
          }),
          O
        );
      };
  }
  return p.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : ti(!!k), p) : e;
  }, p.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : ti(k), p) : t;
  }, p.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : ti(k), p) : n;
  }, p.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : ti(!!k), p) : r;
  }, p.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? p : k;
  }, p.clickDistance = function(k) {
    return arguments.length ? (f = (k = +k) * k, p) : Math.sqrt(f);
  }, p;
}
function ya(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Cc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function jo() {
}
var Co = 0.7, _i = 1 / Co, Kr = "\\s*([+-]?\\d+)\\s*", $o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kv = /^#([0-9a-f]{3,8})$/, Sv = new RegExp(`^rgb\\(${Kr},${Kr},${Kr}\\)$`), Ev = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), Pv = new RegExp(`^rgba\\(${Kr},${Kr},${Kr},${$o}\\)$`), Tv = new RegExp(`^rgba\\(${kn},${kn},${kn},${$o}\\)$`), Nv = new RegExp(`^hsl\\(${$o},${kn},${kn}\\)$`), Mv = new RegExp(`^hsla\\(${$o},${kn},${kn},${$o}\\)$`), gl = {
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
ya(jo, $r, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vl,
  // Deprecated! Use color.formatHex.
  formatHex: vl,
  formatHex8: Ov,
  formatHsl: Lv,
  formatRgb: ml,
  toString: ml
});
function vl() {
  return this.rgb().formatHex();
}
function Ov() {
  return this.rgb().formatHex8();
}
function Lv() {
  return $c(this).formatHsl();
}
function ml() {
  return this.rgb().formatRgb();
}
function $r(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = kv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? yl(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ni(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ni(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Sv.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Ev.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Pv.exec(e)) ? ni(t[1], t[2], t[3], t[4]) : (t = Tv.exec(e)) ? ni(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Nv.exec(e)) ? xl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mv.exec(e)) ? xl(t[1], t[2] / 100, t[3] / 100, t[4]) : gl.hasOwnProperty(e) ? yl(gl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function yl(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ni(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Dv(e) {
  return e instanceof jo || (e = $r(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Ls(e, t, n, r) {
  return arguments.length === 1 ? Dv(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ya(zt, Ls, Cc(jo, {
  brighter(e) {
    return e = e == null ? _i : Math.pow(_i, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Co : Math.pow(Co, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(br(this.r), br(this.g), br(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: wl,
  // Deprecated! Use color.formatHex.
  formatHex: wl,
  formatHex8: Hv,
  formatRgb: bl,
  toString: bl
}));
function wl() {
  return `#${gr(this.r)}${gr(this.g)}${gr(this.b)}`;
}
function Hv() {
  return `#${gr(this.r)}${gr(this.g)}${gr(this.b)}${gr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bl() {
  const e = Ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${br(this.r)}, ${br(this.g)}, ${br(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function br(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function gr(e) {
  return e = br(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sn(e, t, n, r);
}
function $c(e) {
  if (e instanceof sn) return new sn(e.h, e.s, e.l, e.opacity);
  if (e instanceof jo || (e = $r(e)), !e) return new sn();
  if (e instanceof sn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new sn(s, a, l, e.opacity);
}
function Av(e, t, n, r) {
  return arguments.length === 1 ? $c(e) : new sn(e, t, n, r ?? 1);
}
function sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ya(sn, Av, Cc(jo, {
  brighter(e) {
    return e = e == null ? _i : Math.pow(_i, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Co : Math.pow(Co, e), new sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      us(e >= 240 ? e - 240 : e + 120, o, r),
      us(e, o, r),
      us(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new sn(_l(this.h), ri(this.s), ri(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_l(this.h)}, ${ri(this.s) * 100}%, ${ri(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _l(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ri(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function us(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wa = (e) => () => e;
function Vv(e, t) {
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
  return (e = +e) == 1 ? kc : function(t, n) {
    return n - t ? zv(t, n, e) : wa(isNaN(t) ? n : t);
  };
}
function kc(e, t) {
  var n = t - e;
  return n ? Vv(e, n) : wa(isNaN(e) ? t : e);
}
const $i = function e(t) {
  var n = Iv(t);
  function r(o, i) {
    var s = n((o = Ls(o)).r, (i = Ls(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = kc(o.opacity, i.opacity);
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
function Kv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = bo(e[s], t[s]);
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
var Ds = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cs = new RegExp(Ds.source, "g");
function Wv(e) {
  return function() {
    return e;
  };
}
function Xv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Sc(e, t) {
  var n = Ds.lastIndex = cs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ds.exec(e)) && (o = cs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: xn(r, o) })), n = cs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Xv(l[0].x) : Wv(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function bo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? wa(t) : (n === "number" ? xn : n === "string" ? (r = $r(t)) ? (t = r, $i) : Sc : t instanceof $r ? $i : t instanceof Date ? Bv : jv(t) ? Rv : Array.isArray(t) ? Kv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zv : xn)(e, t);
}
var Cl = 180 / Math.PI, Ec = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Pc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Cl,
    skewX: Math.atan(l) * Cl,
    scaleX: s,
    scaleY: a
  };
}
var oi;
function Yv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ec : Pc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Fv(e) {
  return e == null || (oi || (oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), oi.setAttribute("transform", e), !(e = oi.transform.baseVal.consolidate())) ? Ec : (e = e.matrix, Pc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Tc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var v = h.push("translate(", null, t, null, n);
      g.push({ i: v - 4, x: xn(u, f) }, { i: v - 2, x: xn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: xn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: xn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var v = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: v - 4, x: xn(u, f) }, { i: v - 2, x: xn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, v = p.length, b; ++g < v; ) f[(b = p[g]).i] = b.x(h);
      return f.join("");
    };
  };
}
var qv = Tc(Yv, "px, ", "px)", "deg)"), Uv = Tc(Fv, ", ", ")", ")"), Jv = 1e-12;
function $l(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Gv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Qv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const di = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, v = h * h + g * g, b, _;
    if (v < Jv)
      _ = Math.log(p / u) / t, b = function(O) {
        return [
          a + O * h,
          l + O * g,
          u * Math.exp(t * O * _)
        ];
      };
    else {
      var C = Math.sqrt(v), x = (p * p - u * u + r * v) / (2 * u * n * C), k = (p * p - u * u - r * v) / (2 * p * n * C), P = Math.log(Math.sqrt(x * x + 1) - x), S = Math.log(Math.sqrt(k * k + 1) - k);
      _ = (S - P) / t, b = function(O) {
        var A = O * _, Z = $l(P), q = u / (n * C) * (Z * Qv(t * A + P) - Gv(P));
        return [
          a + q * h,
          l + q * g,
          u * Z / $l(t * A + P)
        ];
      };
    }
    return b.duration = _ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Gr = 0, go = 0, fo = 0, Nc = 1e3, ki, vo, Si = 0, kr = 0, Fi = 0, ko = typeof performance == "object" && performance.now ? performance : Date, Mc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ba() {
  return kr || (Mc(e1), kr = ko.now() + Fi);
}
function e1() {
  kr = 0;
}
function Ei() {
  this._call = this._time = this._next = null;
}
Ei.prototype = Oc.prototype = {
  constructor: Ei,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ba() : +n) + (t == null ? 0 : +t), !this._next && vo !== this && (vo ? vo._next = this : ki = this, vo = this), this._call = e, this._time = n, Hs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Hs());
  }
};
function Oc(e, t, n) {
  var r = new Ei();
  return r.restart(e, t, n), r;
}
function t1() {
  ba(), ++Gr;
  for (var e = ki, t; e; )
    (t = kr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Gr;
}
function kl() {
  kr = (Si = ko.now()) + Fi, Gr = go = 0;
  try {
    t1();
  } finally {
    Gr = 0, r1(), kr = 0;
  }
}
function n1() {
  var e = ko.now(), t = e - Si;
  t > Nc && (Fi -= t, Si = e);
}
function r1() {
  for (var e, t = ki, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ki = n);
  vo = e, Hs(r);
}
function Hs(e) {
  if (!Gr) {
    go && (go = clearTimeout(go));
    var t = e - kr;
    t > 24 ? (e < 1 / 0 && (go = setTimeout(kl, e - ko.now() - Fi)), fo && (fo = clearInterval(fo))) : (fo || (Si = ko.now(), fo = setInterval(n1, Nc)), Gr = 1, Mc(kl));
  }
}
function Sl(e, t, n) {
  var r = new Ei();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var o1 = Xi("start", "end", "cancel", "interrupt"), i1 = [], Lc = 0, El = 1, As = 2, fi = 3, Pl = 4, Vs = 5, pi = 6;
function qi(e, t, n, r, o, i) {
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
    state: Lc
  });
}
function xa(e, t) {
  var n = hn(e, t);
  if (n.state > Lc) throw new Error("too late; already scheduled");
  return n;
}
function Tn(e, t) {
  var n = hn(e, t);
  if (n.state > fi) throw new Error("too late; already running");
  return n;
}
function hn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function s1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Oc(i, 0, n.time);
  function i(u) {
    n.state = El, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== El) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === fi) return Sl(s);
        h.state === Pl ? (h.state = pi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = pi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Sl(function() {
      n.state === fi && (n.state = Pl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = As, n.on.call("start", e, e.__data__, n.index, n.group), n.state === As) {
      for (n.state = fi, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Vs, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === Vs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = pi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function hi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > As && r.state < Vs, r.state = pi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function a1(e) {
  return this.each(function() {
    hi(this, e);
  });
}
function l1(e, t) {
  var n, r;
  return function() {
    var o = Tn(this, e), i = o.tween;
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
    var i = Tn(this, e), s = i.tween;
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
    for (var r = hn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? l1 : u1)(n, e, t));
}
function _a(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Tn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return hn(o, r).value[t];
  };
}
function Dc(e, t) {
  var n;
  return (typeof t == "number" ? xn : t instanceof $r ? $i : (n = $r(t)) ? (t = n, $i) : Sc)(e, t);
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
  var n = Yi(e), r = n === "transform" ? Uv : Dc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? v1 : g1)(n, r, _a(this, "attr." + e, t)) : t == null ? (n.local ? f1 : d1)(n) : (n.local ? h1 : p1)(n, r, t));
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
function _1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Yi(e);
  return this.tween(n, (r.local ? b1 : x1)(r, t));
}
function C1(e, t) {
  return function() {
    xa(this, e).delay = +t.apply(this, arguments);
  };
}
function $1(e, t) {
  return t = +t, function() {
    xa(this, e).delay = t;
  };
}
function k1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? C1 : $1)(t, e)) : hn(this.node(), t).delay;
}
function S1(e, t) {
  return function() {
    Tn(this, e).duration = +t.apply(this, arguments);
  };
}
function E1(e, t) {
  return t = +t, function() {
    Tn(this, e).duration = t;
  };
}
function P1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? S1 : E1)(t, e)) : hn(this.node(), t).duration;
}
function T1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Tn(this, e).ease = t;
  };
}
function N1(e) {
  var t = this._id;
  return arguments.length ? this.each(T1(t, e)) : hn(this.node(), t).ease;
}
function M1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Tn(this, e).ease = n;
  };
}
function O1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(M1(this._id, e));
}
function L1(e) {
  typeof e != "function" && (e = dc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Rn(r, this._parents, this._name, this._id);
}
function D1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Rn(s, this._parents, this._name, this._id);
}
function H1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function A1(e, t, n) {
  var r, o, i = H1(t) ? xa : Tn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function V1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? hn(this.node(), n).on.on(e) : this.each(A1(n, e, t));
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
  typeof e != "function" && (e = va(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, qi(u[p], t, n, p, u, hn(d, n)));
  return new Rn(i, this._parents, t, n);
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = cc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = hn(d, n), v = 0, b = p.length; v < b; ++v)
          (h = p[v]) && qi(h, t, n, v, p, g);
        i.push(p), s.push(d);
      }
  return new Rn(i, s, t, n);
}
var K1 = Ro.prototype.constructor;
function B1() {
  return new K1(this._groups, this._parents);
}
function Z1(e, t) {
  var n, r, o;
  return function() {
    var i = Jr(this, e), s = (this.style.removeProperty(e), Jr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Hc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function W1(e, t, n) {
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
function Y1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Tn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Hc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function F1(e, t, n) {
  var r = (e += "") == "transform" ? qv : Dc;
  return t == null ? this.styleTween(e, Z1(e, r)).on("end.style." + e, Hc(e)) : typeof t == "function" ? this.styleTween(e, X1(e, r, _a(this, "style." + e, t))).each(Y1(this._id, e)) : this.styleTween(e, W1(e, r, t), n).on("end.style." + e, null);
}
function q1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function U1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && q1(e, s, n)), r;
  }
  return i._value = t, i;
}
function J1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, U1(e, t, n ?? ""));
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
  return this.tween("text", typeof e == "function" ? Q1(_a(this, "text", e)) : G1(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = Ac(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = hn(l, t);
        qi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Rn(r, this._parents, e, n);
}
function i0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Tn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var s0 = 0;
function Rn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ac() {
  return ++s0;
}
var Mn = Ro.prototype;
Rn.prototype = {
  constructor: Rn,
  select: R1,
  selectAll: j1,
  selectChild: Mn.selectChild,
  selectChildren: Mn.selectChildren,
  filter: L1,
  merge: D1,
  selection: B1,
  transition: o0,
  call: Mn.call,
  nodes: Mn.nodes,
  node: Mn.node,
  size: Mn.size,
  empty: Mn.empty,
  each: Mn.each,
  on: V1,
  attr: m1,
  attrTween: _1,
  style: F1,
  styleTween: J1,
  text: e0,
  textTween: r0,
  remove: I1,
  tween: c1,
  delay: k1,
  duration: P1,
  ease: N1,
  easeVarying: O1,
  end: i0,
  [Symbol.iterator]: Mn[Symbol.iterator]
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
  e instanceof Rn ? (t = e._id, e = e._name) : (t = Ac(), (n = l0).time = ba(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && qi(l, e, t, u, s, n || u0(l, t));
  return new Rn(r, this._parents, e, t);
}
Ro.prototype.interrupt = a1;
Ro.prototype.transition = c0;
const ii = (e) => () => e;
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
var Ui = new Ln(1, 0, 0);
Vc.prototype = Ln.prototype;
function Vc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ui;
  return e.__zoom;
}
function ds(e) {
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
function Tl() {
  return this.__zoom || Ui;
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
function zc() {
  var e = f0, t = p0, n = v0, r = h0, o = g0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = di, u = Xi("start", "zoom", "end"), d, f, p, h = 500, g = 150, v = 0, b = 10;
  function _(w) {
    w.property("__zoom", Tl).on("wheel.zoom", A, { passive: !1 }).on("mousedown.zoom", Z).on("dblclick.zoom", q).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", $).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(w, M, N, R) {
    var B = w.selection ? w.selection() : w;
    B.property("__zoom", Tl), w !== B ? P(w, M, N, R) : B.interrupt().each(function() {
      S(this, arguments).event(R).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, _.scaleBy = function(w, M, N, R) {
    _.scaleTo(w, function() {
      var B = this.__zoom.k, W = typeof M == "function" ? M.apply(this, arguments) : M;
      return B * W;
    }, N, R);
  }, _.scaleTo = function(w, M, N, R) {
    _.transform(w, function() {
      var B = t.apply(this, arguments), W = this.__zoom, D = N == null ? k(B) : typeof N == "function" ? N.apply(this, arguments) : N, U = W.invert(D), F = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(x(C(W, F), D, U), B, s);
    }, N, R);
  }, _.translateBy = function(w, M, N, R) {
    _.transform(w, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, R);
  }, _.translateTo = function(w, M, N, R, B) {
    _.transform(w, function() {
      var W = t.apply(this, arguments), D = this.__zoom, U = R == null ? k(W) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(Ui.translate(U[0], U[1]).scale(D.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), W, s);
    }, R, B);
  };
  function C(w, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === w.k ? w : new Ln(M, w.x, w.y);
  }
  function x(w, M, N) {
    var R = M[0] - N[0] * w.k, B = M[1] - N[1] * w.k;
    return R === w.x && B === w.y ? w : new Ln(w.k, R, B);
  }
  function k(w) {
    return [(+w[0][0] + +w[1][0]) / 2, (+w[0][1] + +w[1][1]) / 2];
  }
  function P(w, M, N, R) {
    w.on("start.zoom", function() {
      S(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var B = this, W = arguments, D = S(B, W).event(R), U = t.apply(B, W), F = N == null ? k(U) : typeof N == "function" ? N.apply(B, W) : N, Q = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), z = B.__zoom, Y = typeof M == "function" ? M.apply(B, W) : M, J = l(z.invert(F).concat(Q / z.k), Y.invert(F).concat(Q / Y.k));
      return function(ne) {
        if (ne === 1) ne = Y;
        else {
          var re = J(ne), ee = Q / re[2];
          ne = new Ln(ee, F[0] - re[0] * ee, F[1] - re[1] * ee);
        }
        D.zoom(null, ne);
      };
    });
  }
  function S(w, M, N) {
    return !N && w.__zooming || new O(w, M);
  }
  function O(w, M) {
    this.that = w, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(w, M), this.taps = 0;
  }
  O.prototype = {
    event: function(w) {
      return w && (this.sourceEvent = w), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(w, M) {
      return this.mouse && w !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && w !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && w !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(w) {
      var M = qt(this.that).datum();
      u.call(
        w,
        this.that,
        new d0(w, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function A(w, ...M) {
    if (!e.apply(this, arguments)) return;
    var N = S(this, M).event(w), R = this.__zoom, B = Math.max(i[0], Math.min(i[1], R.k * Math.pow(2, r.apply(this, arguments)))), W = nn(w);
    if (N.wheel)
      (N.mouse[0][0] !== W[0] || N.mouse[0][1] !== W[1]) && (N.mouse[1] = R.invert(N.mouse[0] = W)), clearTimeout(N.wheel);
    else {
      if (R.k === B) return;
      N.mouse = [W, R.invert(W)], hi(this), N.start();
    }
    po(w), N.wheel = setTimeout(D, g), N.zoom("mouse", n(x(C(R, B), N.mouse[0], N.mouse[1]), N.extent, s));
    function D() {
      N.wheel = null, N.end();
    }
  }
  function Z(w, ...M) {
    if (p || !e.apply(this, arguments)) return;
    var N = w.currentTarget, R = S(this, M, !0).event(w), B = qt(w.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", Q, !0), W = nn(w, N), D = w.clientX, U = w.clientY;
    xc(w.view), ds(w), R.mouse = [W, this.__zoom.invert(W)], hi(this), R.start();
    function F(z) {
      if (po(z), !R.moved) {
        var Y = z.clientX - D, J = z.clientY - U;
        R.moved = Y * Y + J * J > v;
      }
      R.event(z).zoom("mouse", n(x(R.that.__zoom, R.mouse[0] = nn(z, N), R.mouse[1]), R.extent, s));
    }
    function Q(z) {
      B.on("mousemove.zoom mouseup.zoom", null), _c(z.view, R.moved), po(z), R.event(z).end();
    }
  }
  function q(w, ...M) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, R = nn(w.changedTouches ? w.changedTouches[0] : w, this), B = N.invert(R), W = N.k * (w.shiftKey ? 0.5 : 2), D = n(x(C(N, W), R, B), t.apply(this, M), s);
      po(w), a > 0 ? qt(this).transition().duration(a).call(P, D, R, w) : qt(this).call(_.transform, D, R, w);
    }
  }
  function I(w, ...M) {
    if (e.apply(this, arguments)) {
      var N = w.touches, R = N.length, B = S(this, M, w.changedTouches.length === R).event(w), W, D, U, F;
      for (ds(w), D = 0; D < R; ++D)
        U = N[D], F = nn(U, this), F = [F, this.__zoom.invert(F), U.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== F[2] && (B.touch1 = F, B.taps = 0) : (B.touch0 = F, W = !0, B.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (B.taps < 2 && (f = F[0], d = setTimeout(function() {
        d = null;
      }, h)), hi(this), B.start());
    }
  }
  function $(w, ...M) {
    if (this.__zooming) {
      var N = S(this, M).event(w), R = w.changedTouches, B = R.length, W, D, U, F;
      for (po(w), W = 0; W < B; ++W)
        D = R[W], U = nn(D, this), N.touch0 && N.touch0[2] === D.identifier ? N.touch0[0] = U : N.touch1 && N.touch1[2] === D.identifier && (N.touch1[0] = U);
      if (D = N.that.__zoom, N.touch1) {
        var Q = N.touch0[0], z = N.touch0[1], Y = N.touch1[0], J = N.touch1[1], ne = (ne = Y[0] - Q[0]) * ne + (ne = Y[1] - Q[1]) * ne, re = (re = J[0] - z[0]) * re + (re = J[1] - z[1]) * re;
        D = C(D, Math.sqrt(ne / re)), U = [(Q[0] + Y[0]) / 2, (Q[1] + Y[1]) / 2], F = [(z[0] + J[0]) / 2, (z[1] + J[1]) / 2];
      } else if (N.touch0) U = N.touch0[0], F = N.touch0[1];
      else return;
      N.zoom("touch", n(x(D, U, F), N.extent, s));
    }
  }
  function T(w, ...M) {
    if (this.__zooming) {
      var N = S(this, M).event(w), R = w.changedTouches, B = R.length, W, D;
      for (ds(w), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), W = 0; W < B; ++W)
        D = R[W], N.touch0 && N.touch0[2] === D.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === D.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (D = nn(D, this), Math.hypot(f[0] - D[0], f[1] - D[1]) < b)) {
        var U = qt(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : ii(+w), _) : r;
  }, _.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : ii(!!w), _) : e;
  }, _.touchable = function(w) {
    return arguments.length ? (o = typeof w == "function" ? w : ii(!!w), _) : o;
  }, _.extent = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : ii([[+w[0][0], +w[0][1]], [+w[1][0], +w[1][1]]]), _) : t;
  }, _.scaleExtent = function(w) {
    return arguments.length ? (i[0] = +w[0], i[1] = +w[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(w) {
    return arguments.length ? (s[0][0] = +w[0][0], s[1][0] = +w[1][0], s[0][1] = +w[0][1], s[1][1] = +w[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(w) {
    return arguments.length ? (n = w, _) : n;
  }, _.duration = function(w) {
    return arguments.length ? (a = +w, _) : a;
  }, _.interpolate = function(w) {
    return arguments.length ? (l = w, _) : l;
  }, _.on = function() {
    var w = u.on.apply(u, arguments);
    return w === u ? _ : w;
  }, _.clickDistance = function(w) {
    return arguments.length ? (v = (w = +w) * w, _) : Math.sqrt(v);
  }, _.tapDistance = function(w) {
    return arguments.length ? (b = +w, _) : b;
  }, _;
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
}, zs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Ic = ["Enter", " ", "Escape"], m0 = {
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
var Qr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Qr || (Qr = {}));
var xr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(xr || (xr = {}));
var Pi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Pi || (Pi = {}));
const Is = {
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
var On;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(On || (On = {}));
var Eo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Eo || (Eo = {}));
var _e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(_e || (_e = {}));
const Nl = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
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
function Ml(e, t, n) {
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
const Rc = (e) => "id" in e && "source" in e && "target" in e, b0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ca = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ko = (e, t = [0, 0]) => {
  const { width: n, height: r } = ur(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ca(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ti(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ji(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Gi(n);
}, Bo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Ji(n, Ti(o)), r = !0);
  }), r ? Gi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, $a = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Wo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, v = Po(a, to(u)), b = (h ?? 0) * (g ?? 0), _ = i && v > 0;
    (!u.internals.handleBounds || _ || v >= b || u.dragging) && l.push(u);
  }
  return l;
}, _0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function C0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function $0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = C0(e, s), l = Bo(a), u = ka(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function jc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  else a && no(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = no(f) ? Sr(t, f, s.measured) : t;
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
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = _0(s, l);
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
const eo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Sr = (e = { x: 0, y: 0 }, t, n) => ({
  x: eo(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: eo(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Kc(e, t, n) {
  const { width: r, height: o } = ur(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Sr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ol = (e, t, n) => e < t ? eo(Math.abs(e - t), 1, t) / t : e > n ? -eo(Math.abs(e - n), 1, t) / t : 0, Bc = (e, t, n = 15, r = 40) => {
  const o = Ol(e.x, r, t.width - r) * n, i = Ol(e.y, r, t.height - r) * n;
  return [o, i];
}, Ji = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Rs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Gi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), to = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Ti = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Zc = (e, t) => Gi(Ji(Rs(e), Rs(t))), Po = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ll = (e) => Dn(e.width) && Dn(e.height) && Dn(e.x) && Dn(e.y), Dn = (e) => !isNaN(e) && isFinite(e), S0 = (e, t) => {
}, Zo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Wo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Zo(a, s) : a;
}, Ni = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Ar(e, t) {
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
    const r = Ar(e, n), o = Ar(e, t);
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
    const r = Ar(e.top ?? e.y ?? 0, n), o = Ar(e.bottom ?? e.y ?? 0, n), i = Ar(e.left ?? e.x ?? 0, t), s = Ar(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function P0(e, t, n, r, o, i) {
  const { x: s, y: a } = Ni(e, [t, n, r]), { x: l, y: u } = Ni({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const ka = (e, t, n, r, o, i) => {
  const s = E0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = eo(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, v = P0(e, h, g, d, t, n), b = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: h - b.left + b.right,
    y: g - b.top + b.bottom,
    zoom: d
  };
}, vr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function no(e) {
  return e != null && e !== "parent";
}
function ur(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Wc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function T0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function N0(e) {
  return { ...m0, ...e || {} };
}
function fs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = ln(e), a = Wo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Zo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Xc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Yc = (e) => e?.getRootNode?.() || window?.document, M0 = ["INPUT", "SELECT", "TEXTAREA"];
function Fc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : M0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const qc = (e) => "clientX" in e, ln = (e, t) => {
  const n = qc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...Xc(s)
    };
  });
};
function O0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function si(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Hl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case _e.Left:
      return [t - si(t - r, i), n];
    case _e.Right:
      return [t + si(r - t, i), n];
    case _e.Top:
      return [t, n - si(n - o, i)];
    case _e.Bottom:
      return [t, n + si(o - n, i)];
  }
}
function Uc({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
  const [a, l] = Hl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Hl({
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
function Jc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = Ji(Ti(e), Ti(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Po(s, Gi(i)) > 0;
}
const H0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, A0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), V0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Rc(e) ? n = { ...e } : n = {
    ...e,
    id: H0(e)
  }, A0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Gc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Jc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Al = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, z0 = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) => t === _e.Left || t === _e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Vl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function I0({ source: e, sourcePosition: t = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Al[t], l = Al[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = z0({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], v, b;
  const _ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , x, k] = Jc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (v = o.x ?? u.x + (d.x - u.x) * s, b = o.y ?? (u.y + d.y) / 2) : (v = o.x ?? (u.x + d.x) / 2, b = o.y ?? u.y + (d.y - u.y) * s);
    const P = [
      { x: v, y: u.y },
      { x: v, y: d.y }
    ], S = [
      { x: u.x, y: b },
      { x: d.x, y: b }
    ];
    a[p] === h ? g = p === "x" ? P : S : g = p === "x" ? S : P;
  } else {
    const P = [{ x: u.x, y: d.y }], S = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? S : P : g = a.y === h ? P : S, t === r) {
      const I = Math.abs(e[p] - n[p]);
      if (I <= i) {
        const $ = Math.min(i - 1, i - I);
        a[p] === h ? _[p] = (u[p] > e[p] ? -1 : 1) * $ : C[p] = (d[p] > n[p] ? -1 : 1) * $;
      }
    }
    if (t !== r) {
      const I = p === "x" ? "y" : "x", $ = a[p] === l[I], T = u[I] > d[I], w = u[I] < d[I];
      (a[p] === 1 && (!$ && T || $ && w) || a[p] !== 1 && (!$ && w || $ && T)) && (g = p === "x" ? P : S);
    }
    const O = { x: u.x + _.x, y: u.y + _.y }, A = { x: d.x + C.x, y: d.y + C.y }, Z = Math.max(Math.abs(O.x - g[0].x), Math.abs(A.x - g[0].x)), q = Math.max(Math.abs(O.y - g[0].y), Math.abs(A.y - g[0].y));
    Z >= q ? (v = (O.x + A.x) / 2, b = g[0].y) : (v = g[0].x, b = (O.y + A.y) / 2);
  }
  return [[
    e,
    { x: u.x + _.x, y: u.y + _.y },
    ...g,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], v, b, x, k];
}
function R0(e, t, n, r) {
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
function Sa({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, v] = I0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((b, _, C) => {
    let x = "";
    return C > 0 && C < f.length - 1 ? x = R0(f[C - 1], _, f[C + 1], s) : x = `${C === 0 ? "M" : "L"}${_.x} ${_.y}`, b += x, b;
  }, ""), p, h, g, v];
}
function zl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function j0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!zl(t) || !zl(n))
    return null;
  const r = t.internals.handleBounds || Il(t.handles), o = n.internals.handleBounds || Il(n.handles), i = Rl(r?.source ?? [], e.sourceHandle), s = Rl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Qr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", So.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = To(t, i, a), d = To(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Il(e) {
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
function To(e, t, n = _e.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? ur(e);
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
function Rl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function js(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function K0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = js(l, t);
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
const Qc = 1e3, Z0 = 10, Ea = {
  nodeOrigin: [0, 0],
  nodeExtent: zs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, W0 = {
  ...Ea,
  checkEquality: !0
};
function Pa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function X0(e, t, n) {
  const r = Pa(Ea, n);
  for (const o of e.values())
    if (o.parentId)
      Ta(o, e, t, r);
    else {
      const i = Ko(o, r.nodeOrigin), s = no(o.extent) ? o.extent : r.nodeExtent, a = Sr(i, s, ur(o));
      o.internals.positionAbsolute = a;
    }
}
function Y0(e, t) {
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
  const o = Pa(W0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Qc : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const f = Ko(u, o.nodeOrigin), p = no(u.extent) ? u.extent : o.nodeExtent, h = Sr(f, p, ur(u));
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
          handleBounds: Y0(u, d),
          z: ed(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Ta(d, t, n, r, i);
  }
  return s;
}
function q0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ta(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Pa(Ea, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  q0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Z0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Qc : 0, { x: f, y: p, z: h } = U0(e, u, s, a, d), { positionAbsolute: g } = e.internals, v = f !== g.x || p !== g.y;
  (v || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: f, y: p } : g,
      z: h
    }
  });
}
function ed(e, t) {
  return (Dn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function U0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = ur(e), l = Ko(e, n), u = no(e.extent) ? Sr(l, e.extent, a) : l;
  let d = Sr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Kc(d, a, t));
  const f = ed(e, o), p = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? to(a), u = Zc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = ur(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), v = Math.max(d.height, Math.round(s.height)), b = (g - d.width) * f[0], _ = (v - d.height) * f[1];
    (p > 0 || h > 0 || b || _) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + b,
        y: a.position.y - h + _
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
        width: g + (p ? f[0] * p - b : 0),
        height: v + (h ? f[1] * h - _ : 0)
      }
    });
  }), o;
}
function G0(e, t, n, r, o, i) {
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
    const g = Xc(p.nodeElement), v = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (v || !h.internals.handleBounds || p.force)) {
      const b = p.nodeElement.getBoundingClientRect(), _ = no(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = Kc(C, g, t.get(h.parentId)) : _ && (C = Sr(C, _, g));
      const x = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Dl("source", p.nodeElement, b, d, h.id),
            target: Dl("target", p.nodeElement, b, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && Ta(x, t, n, { nodeOrigin: o }), a = !0, v && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: to(x, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = J0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function Q0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function jl(e, t, n, r, o, i) {
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
function em(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    jl("source", l, d, e, o, s), jl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function tm(e, t) {
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
function td(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : td(n, t) : !1;
}
function Kl(e, t, n) {
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
function nm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !td(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ps({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function rm({ dragItems: e, snapGrid: t, x: n, y: r }) {
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
function om({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, v = null;
  function b({ noDragClassName: C, handleSelector: x, domNode: k, isSelectable: P, nodeId: S, nodeClickDistance: O = 0 }) {
    p = qt(k);
    function A({ x: $, y: T }) {
      const { nodeLookup: w, nodeExtent: M, snapGrid: N, snapToGrid: R, nodeOrigin: B, onNodeDrag: W, onSelectionDrag: D, onError: U, updateNodePositions: F } = t();
      i = { x: $, y: T };
      let Q = !1;
      const z = a.size > 1, Y = z && M ? Rs(Bo(a)) : null, J = z && R ? rm({
        dragItems: a,
        snapGrid: N,
        x: $,
        y: T
      }) : null;
      for (const [ne, re] of a) {
        if (!w.has(ne))
          continue;
        let ee = { x: $ - re.distance.x, y: T - re.distance.y };
        R && (ee = J ? {
          x: Math.round(ee.x + J.x),
          y: Math.round(ee.y + J.y)
        } : Zo(ee, N));
        let ge = null;
        if (z && M && !re.extent && Y) {
          const { positionAbsolute: se } = re.internals, ve = se.x - Y.x + M[0][0], me = se.x + re.measured.width - Y.x2 + M[1][0], xe = se.y - Y.y + M[0][1], de = se.y + re.measured.height - Y.y2 + M[1][1];
          ge = [
            [ve, xe],
            [me, de]
          ];
        }
        const { position: ce, positionAbsolute: ie } = jc({
          nodeId: ne,
          nextPosition: ee,
          nodeLookup: w,
          nodeExtent: ge || M,
          nodeOrigin: B,
          onError: U
        });
        Q = Q || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = ie;
      }
      if (g = g || Q, !!Q && (F(a, !0), v && (r || W || !S && D))) {
        const [ne, re] = ps({
          nodeId: S,
          dragItems: a,
          nodeLookup: w
        });
        r?.(v, a, ne, re), W?.(v, ne, re), S || D?.(v, re);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: $, panBy: T, autoPanSpeed: w, autoPanOnNodeDrag: M } = t();
      if (!M) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, R] = Bc(u, d, w);
      (N !== 0 || R !== 0) && (i.x = (i.x ?? 0) - N / $[2], i.y = (i.y ?? 0) - R / $[2], await T({ x: N, y: R }) && A(i)), s = requestAnimationFrame(Z);
    }
    function q($) {
      const { nodeLookup: T, multiSelectionActive: w, nodesDraggable: M, transform: N, snapGrid: R, snapToGrid: B, selectNodesOnDrag: W, onNodeDragStart: D, onSelectionDragStart: U, unselectNodesAndEdges: F } = t();
      f = !0, (!W || !P) && !w && S && (T.get(S)?.selected || F()), P && W && S && e?.(S);
      const Q = fs($.sourceEvent, { transform: N, snapGrid: R, snapToGrid: B, containerBounds: d });
      if (i = Q, a = nm(T, M, Q, S), a.size > 0 && (n || D || !S && U)) {
        const [z, Y] = ps({
          nodeId: S,
          dragItems: a,
          nodeLookup: T
        });
        n?.($.sourceEvent, a, z, Y), D?.($.sourceEvent, z, Y), S || U?.($.sourceEvent, Y);
      }
    }
    const I = $v().clickDistance(O).on("start", ($) => {
      const { domNode: T, nodeDragThreshold: w, transform: M, snapGrid: N, snapToGrid: R } = t();
      d = T?.getBoundingClientRect() || null, h = !1, g = !1, v = $.sourceEvent, w === 0 && q($), i = fs($.sourceEvent, { transform: M, snapGrid: N, snapToGrid: R, containerBounds: d }), u = ln($.sourceEvent, d);
    }).on("drag", ($) => {
      const { autoPanOnNodeDrag: T, transform: w, snapGrid: M, snapToGrid: N, nodeDragThreshold: R, nodeLookup: B } = t(), W = fs($.sourceEvent, { transform: w, snapGrid: M, snapToGrid: N, containerBounds: d });
      if (v = $.sourceEvent, ($.sourceEvent.type === "touchmove" && $.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !B.has(S)) && (h = !0), !h) {
        if (!l && T && f && (l = !0, Z()), !f) {
          const D = ln($.sourceEvent, d), U = D.x - u.x, F = D.y - u.y;
          Math.sqrt(U * U + F * F) > R && q($);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && f && (u = ln($.sourceEvent, d), A(W));
      }
    }).on("end", ($) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: w, onNodeDragStop: M, onSelectionDragStop: N } = t();
        if (g && (w(a, !1), g = !1), o || M || !S && N) {
          const [R, B] = ps({
            nodeId: S,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.($.sourceEvent, a, R, B), M?.($.sourceEvent, R, B), S || N?.($.sourceEvent, B);
        }
      }
    }).filter(($) => {
      const T = $.target;
      return !$.button && (!C || !Kl(T, `.${C}`, k)) && (!x || Kl(T, x, k));
    });
    p.call(I);
  }
  function _() {
    p?.on(".drag", null);
  }
  return {
    update: b,
    destroy: _
  };
}
function im(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Po(o, to(i)) > 0 && r.push(i);
  return r;
}
const sm = 250;
function am(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = im(e, n, t + sm);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = To(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
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
function nd(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...To(s, l, l.position, !0) } : l;
}
function rd(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function lm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const od = () => !0;
function um(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: v, onConnectEnd: b, isValidConnection: _ = od, onReconnectEnd: C, updateConnection: x, getTransform: k, getFromHandle: P, autoPanSpeed: S, dragThreshold: O = 1, handleDomNode: A }) {
  const Z = Yc(e.target);
  let q = 0, I;
  const { x: $, y: T } = ln(e), w = rd(i, A), M = a?.getBoundingClientRect();
  let N = !1;
  if (!M || !w)
    return;
  const R = nd(o, w, r, l, t);
  if (!R)
    return;
  let B = ln(e, M), W = !1, D = null, U = !1, F = null;
  function Q() {
    if (!d || !M)
      return;
    const [ge, ce] = Bc(B, M, S);
    p({ x: ge, y: ce }), q = requestAnimationFrame(Q);
  }
  const z = {
    ...R,
    nodeId: o,
    type: w,
    position: R.position
  }, Y = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: To(Y, z, _e.Left, !0),
    fromHandle: z,
    fromPosition: z.position,
    fromNode: Y,
    to: B,
    toHandle: null,
    toPosition: Nl[z.position],
    toNode: null
  };
  function ne() {
    N = !0, x(J), g?.(e, { nodeId: o, handleId: r, handleType: w });
  }
  O === 0 && ne();
  function re(ge) {
    if (!N) {
      const { x: ve, y: me } = ln(ge), xe = ve - $, de = me - T;
      if (!(xe * xe + de * de > O * O))
        return;
      ne();
    }
    if (!P() || !z) {
      ee(ge);
      return;
    }
    const ce = k();
    B = ln(ge, M), I = am(Wo(B, ce, !1, [1, 1]), n, l, z), W || (Q(), W = !0);
    const ie = id(ge, {
      handle: I,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: _,
      doc: Z,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    F = ie.handleDomNode, D = ie.connection, U = lm(!!I, ie.isValid);
    const se = {
      // from stays the same
      ...J,
      isValid: U,
      to: ie.toHandle && U ? Ni({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : B,
      toHandle: ie.toHandle,
      toPosition: U && ie.toHandle ? ie.toHandle.position : Nl[z.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null
    };
    U && I && J.toHandle && se.toHandle && J.toHandle.type === se.toHandle.type && J.toHandle.nodeId === se.toHandle.nodeId && J.toHandle.id === se.toHandle.id && J.to.x === se.to.x && J.to.y === se.to.y || (x(se), J = se);
  }
  function ee(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (N) {
        (I || F) && D && U && v?.(D);
        const { inProgress: ce, ...ie } = J, se = {
          ...ie,
          toPosition: J.toHandle ? J.toPosition : null
        };
        b?.(ge, se), i && C?.(ge, se);
      }
      h(), cancelAnimationFrame(q), W = !1, U = !1, D = null, F = null, Z.removeEventListener("mousemove", re), Z.removeEventListener("mouseup", ee), Z.removeEventListener("touchmove", re), Z.removeEventListener("touchend", ee);
    }
  }
  Z.addEventListener("mousemove", re), Z.addEventListener("mouseup", ee), Z.addEventListener("touchmove", re), Z.addEventListener("touchend", ee);
}
function id(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = od, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = ln(e), v = s.elementFromPoint(h, g), b = v?.classList.contains(`${a}-flow__handle`) ? v : p, _ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const C = rd(void 0, b), x = b.getAttribute("data-nodeid"), k = b.getAttribute("data-handleid"), P = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!x || !C)
      return _;
    const O = {
      source: f ? x : r,
      sourceHandle: f ? k : o,
      target: f ? r : x,
      targetHandle: f ? o : k
    };
    _.connection = O;
    const A = P && S && (n === Qr.Strict ? f && C === "source" || !f && C === "target" : x !== r || k !== o);
    _.isValid = A && u(O), _.toHandle = nd(x, C, k, d, n, !0);
  }
  return _;
}
const Bl = {
  onPointerDown: um,
  isValid: id
};
function cm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), P = x.sourceEvent.ctrlKey && vr() ? 10 : 1, S = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = k[2] * Math.pow(2, S * P);
      t.scaleTo(O);
    };
    let v = [0, 0];
    const b = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (v = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, _ = (x) => {
      const k = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], S = [P[0] - v[0], P[1] - v[1]];
      v = P;
      const O = r() * Math.max(k[2], Math.log(k[2])) * (h ? -1 : 1), A = {
        x: k[0] - S[0] * O,
        y: k[1] - S[1] * O
      }, Z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: A.x,
        y: A.y,
        zoom: k[2]
      }, Z, a);
    }, C = zc().on("start", b).on("zoom", f ? _ : null).on("zoom.wheel", p ? g : null);
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
const Qi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), hs = ({ x: e, y: t, zoom: n }) => Ui.translate(e, t).scale(n), zr = (e, t) => e.target.closest(`.${t}`), sd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), dm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, gs = (e, t = 0, n = dm, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, ad = (e) => {
  const t = e.ctrlKey && vr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function fm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (zr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const b = nn(d), _ = ad(d), C = f * Math.pow(2, _);
      r.scaleTo(n, C, b, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === xr.Vertical ? 0 : d.deltaX * p, g = o === xr.Horizontal ? 0 : d.deltaY * p;
    !vr() && d.shiftKey && o !== xr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = Qi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, v), e.panScrollTimeout = setTimeout(() => {
      u?.(d, v), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, v));
  };
}
function pm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = zr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function hm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Qi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function gm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && sd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Qi(i.transform));
  };
}
function vm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && sd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Qi(s.transform);
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
    if (f.button === 1 && f.type === "mousedown" && (zr(f, `${u}-flow__node`) || zr(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || zr(f, a) && g || zr(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const v = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && v;
  };
}
function ym({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), p = zc().clickDistance(!Dn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = qt(e).call(p);
  x({
    x: i.x,
    y: i.y,
    zoom: eo(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), v = h.on("dblclick.zoom");
  p.wheelDelta(ad);
  function b($, T) {
    return h ? new Promise((w) => {
      p?.interpolate(T?.interpolate === "linear" ? bo : di).transform(gs(h, T?.duration, T?.ease, () => w(!0)), $);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: $, noPanClassName: T, onPaneContextMenu: w, userSelectionActive: M, panOnScroll: N, panOnDrag: R, panOnScrollMode: B, panOnScrollSpeed: W, preventScrolling: D, zoomOnPinch: U, zoomOnScroll: F, zoomOnDoubleClick: Q, zoomActivationKeyPressed: z, lib: Y, onTransformChange: J, connectionInProgress: ne }) {
    M && !d.isZoomingOrPanning && C();
    const re = N && !z && !M ? fm({
      zoomPanValues: d,
      noWheelClassName: $,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: B,
      panOnScrollSpeed: W,
      zoomOnPinch: U,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : pm({
      noWheelClassName: $,
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
        onPaneContextMenu: !!w,
        onPanZoom: s,
        onTransformChange: J
      });
      p.on("zoom", ce);
      const ie = vm({
        zoomPanValues: d,
        panOnDrag: R,
        panOnScroll: N,
        onPaneContextMenu: w,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", ie);
    }
    const ee = mm({
      zoomActivationKeyPressed: z,
      panOnDrag: R,
      zoomOnScroll: F,
      panOnScroll: N,
      zoomOnDoubleClick: Q,
      zoomOnPinch: U,
      userSelectionActive: M,
      noPanClassName: T,
      noWheelClassName: $,
      lib: Y,
      connectionInProgress: ne
    });
    p.filter(ee), Q ? h.on("dblclick.zoom", v) : h.on("dblclick.zoom", null);
  }
  function C() {
    p.on("zoom", null);
  }
  async function x($, T, w) {
    const M = hs($), N = p?.constrain()(M, T, w);
    return N && await b(N), new Promise((R) => R(N));
  }
  async function k($, T) {
    const w = hs($);
    return await b(w, T), new Promise((M) => M(w));
  }
  function P($) {
    if (h) {
      const T = hs($), w = h.property("__zoom");
      (w.k !== $.zoom || w.x !== $.x || w.y !== $.y) && p?.transform(h, T, null, { sync: !0 });
    }
  }
  function S() {
    const $ = h ? Vc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: $.x, y: $.y, zoom: $.k };
  }
  function O($, T) {
    return h ? new Promise((w) => {
      p?.interpolate(T?.interpolate === "linear" ? bo : di).scaleTo(gs(h, T?.duration, T?.ease, () => w(!0)), $);
    }) : Promise.resolve(!1);
  }
  function A($, T) {
    return h ? new Promise((w) => {
      p?.interpolate(T?.interpolate === "linear" ? bo : di).scaleBy(gs(h, T?.duration, T?.ease, () => w(!0)), $);
    }) : Promise.resolve(!1);
  }
  function Z($) {
    p?.scaleExtent($);
  }
  function q($) {
    p?.translateExtent($);
  }
  function I($) {
    const T = !Dn($) || $ < 0 ? 0 : $;
    p?.clickDistance(T);
  }
  return {
    update: _,
    destroy: C,
    setViewport: k,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: O,
    scaleBy: A,
    setScaleExtent: Z,
    setTranslateExtent: q,
    syncViewport: P,
    setClickDistance: I
  };
}
var Zl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Zl || (Zl = {}));
var wm = /* @__PURE__ */ te("<div><!></div>");
function nr(e, t) {
  fe(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => _e.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), u = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), f = y(t, "onconnect", 7), p = y(t, "ondisconnect", 7), h = y(t, "children", 7), g = /* @__PURE__ */ Fe(t, [
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
  const v = er("svelteflow__node_id"), b = er("svelteflow__node_connectable");
  let _ = /* @__PURE__ */ E(() => r() === "target"), C = /* @__PURE__ */ E(() => a() !== void 0 ? a() : b.value), x = gn(), k = /* @__PURE__ */ E(() => x.ariaLabelConfig), P = null;
  Iu(() => {
    if (f() || p()) {
      x.edges;
      let D = x.connectionLookup.get(`${v}-${r()}${n() ? `-${n()}` : ""}`);
      if (P && !y0(D, P)) {
        const U = D ?? /* @__PURE__ */ new Map();
        Ml(P, U, p()), Ml(U, P, f());
      }
      P = new Map(D);
    }
  });
  let S = /* @__PURE__ */ E(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: U, isValid: F } = x.connection, Q = D && D.nodeId === v && D.type === r() && D.id === n(), z = U && U.nodeId === v && U.type === r() && U.id === n(), Y = x.connectionMode === Qr.Strict ? D?.type !== r() : v !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      Q,
      z,
      Y,
      z && F
    ];
  }), O = /* @__PURE__ */ E(() => Do(c(S), 5)), A = /* @__PURE__ */ E(() => c(O)[0]), Z = /* @__PURE__ */ E(() => c(O)[1]), q = /* @__PURE__ */ E(() => c(O)[2]), I = /* @__PURE__ */ E(() => c(O)[3]), $ = /* @__PURE__ */ E(() => c(O)[4]);
  function T(D) {
    const U = x.onbeforeconnect ? x.onbeforeconnect(D) : D;
    U && (x.addEdge(U), x.onconnect?.(D));
  }
  function w(D) {
    const U = qc(D);
    D.currentTarget && (U && D.button === 0 || !U) && Bl.onPointerDown(D, {
      handleId: n(),
      nodeId: v,
      isTarget: c(_),
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
      onConnect: T,
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
    if (!v || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(D, { nodeId: v, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: v, type: r(), id: n() };
      return;
    }
    const U = Yc(D.target), F = d() ?? x.isValidConnection, { connectionMode: Q, clickConnectStartHandle: z, flowId: Y, nodeLookup: J } = x, { connection: ne, isValid: re } = Bl.isValid(D, {
      handle: { nodeId: v, id: n(), type: r() },
      connectionMode: Q,
      fromNodeId: z.nodeId,
      fromHandleId: z.id ?? null,
      fromType: z.type,
      isValidConnection: F,
      flowId: Y,
      doc: U,
      lib: "svelte",
      nodeLookup: J
    });
    re && ne && T(ne);
    const ee = structuredClone(bu(x.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, x.onclickconnectend?.(D, ee), x.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(D = null) {
      n(D), m();
    },
    get type() {
      return r();
    },
    set type(D = "source") {
      r(D), m();
    },
    get position() {
      return o();
    },
    set position(D = _e.Top) {
      o(D), m();
    },
    get style() {
      return i();
    },
    set style(D) {
      i(D), m();
    },
    get class() {
      return s();
    },
    set class(D) {
      s(D), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(D) {
      a(D), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(D = !0) {
      l(D), m();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(D = !0) {
      u(D), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), m();
    },
    get onconnect() {
      return f();
    },
    set onconnect(D) {
      f(D), m();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(D) {
      p(D), m();
    },
    get children() {
      return h();
    },
    set children(D) {
      h(D), m();
    }
  }, R = wm(), B = () => {
  };
  ht(
    R,
    (D) => ({
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
      onmousedown: w,
      ontouchstart: w,
      onclick: x.clickConnect ? M : void 0,
      onkeypress: B,
      style: i(),
      role: "button",
      "aria-label": c(k)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [qn]: D
    }),
    [
      () => ({
        valid: c($),
        connectingto: c(q),
        connectingfrom: c(Z),
        source: !c(_),
        target: c(_),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(C),
        connectionindicator: c(C) && (!c(A) || c(I)) && (c(A) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var W = K(R);
  return st(W, () => h() ?? kt), j(R), L(e, R), pe(N);
}
le(
  nr,
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
function Na(e, t) {
  fe(t, !0);
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
  }, s = bm(), a = ae(s);
  nr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = H(a), u = H(l);
  return nr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => Ue(l, ` ${n()?.label ?? ""} `)), L(e, s), pe(i);
}
le(Na, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var xm = /* @__PURE__ */ te(" <!>", 1);
function ld(e, t) {
  fe(t, !0);
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
  be();
  var i = xm(), s = ae(i), a = H(s);
  return nr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => Ue(s, `${n()?.label ?? ""} `)), L(e, i), pe(o);
}
le(ld, { data: {}, sourcePosition: {} }, [], [], !0);
var _m = /* @__PURE__ */ te(" <!>", 1);
function ud(e, t) {
  fe(t, !0);
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
  be();
  var i = _m(), s = ae(i), a = H(s);
  return nr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => Ue(s, `${n()?.label ?? ""} `)), L(e, i), pe(o);
}
le(ud, { data: {}, targetPosition: {} }, [], [], !0);
function cd(e, t) {
}
le(cd, {}, [], [], !0);
function vs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function dd(e, t) {
  const n = /* @__PURE__ */ E(gn), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? vs(e, c(r), t) : o = la(() => {
    nt(() => {
      vs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      vs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function fd() {
  let e = /* @__PURE__ */ Le(typeof window > "u");
  if (c(e)) {
    const t = la(() => {
      nt(() => {
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
const Wl = (e) => b0(e), Cm = (e) => Rc(e);
function En(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Mi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var $m = /* @__PURE__ */ te("<div><!></div>");
const km = {
  hash: "svelte-1r69ejc",
  code: ".transparent.svelte-1r69ejc {background:transparent;}"
};
function pd(e, t) {
  fe(t, !0), Ye(e, km);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Fe(t, [
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
  const f = gn(), p = er("svelteflow__edge_id");
  let h = /* @__PURE__ */ E(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), m();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
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
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), m();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), m();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), m();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), m();
    }
  }, v = $m(), b = () => {
    s() && p && f.handleEdgeSelection(p);
  };
  ht(
    v,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: b,
      ...d,
      [Cn]: C
    }),
    [
      () => ({
        display: fd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: En(o()),
        height: En(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    "svelte-1r69ejc"
  );
  var _ = K(v);
  return st(_, () => u() ?? kt), j(v), $t(v, (C, x) => dd?.(C, x), () => "edge-labels"), L(e, v), pe(g);
}
le(
  pd,
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
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "style", 7), f = y(t, "interactionWidth", 7, 20), p = y(t, "class", 7), h = /* @__PURE__ */ Fe(t, [
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
    set id(P) {
      n(P), m();
    },
    get path() {
      return r();
    },
    set path(P) {
      r(P), m();
    },
    get label() {
      return o();
    },
    set label(P) {
      o(P), m();
    },
    get labelX() {
      return i();
    },
    set labelX(P) {
      i(P), m();
    },
    get labelY() {
      return s();
    },
    set labelY(P) {
      s(P), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(P) {
      a(P), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(P) {
      l(P), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(P) {
      u(P), m();
    },
    get style() {
      return d();
    },
    set style(P) {
      d(P), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(P = 20) {
      f(P), m();
    },
    get class() {
      return p();
    },
    set class(P) {
      p(P), m();
    }
  }, v = Em(), b = ae(v), _ = H(b);
  {
    var C = (P) => {
      var S = Sm();
      ht(S, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(P, S);
    };
    ue(_, (P) => {
      f() > 0 && P(C);
    });
  }
  var x = H(_);
  {
    var k = (P) => {
      pd(P, {
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
        children: (S, O) => {
          be();
          var A = Pe();
          Ee(() => Ue(A, o())), L(S, A);
        },
        $$slots: { default: !0 }
      });
    };
    ue(x, (P) => {
      o() && P(k);
    });
  }
  return Ee(() => {
    ke(b, "id", n()), ke(b, "d", r()), Rt(b, 0, Zn(["svelte-flow__edge-path", p()])), ke(b, "marker-start", l()), ke(b, "marker-end", u()), xt(b, d());
  }), L(e, v), pe(g);
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
function Ma(e, t) {
  fe(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), u = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), f = y(t, "sourceY", 7), p = y(t, "style", 7), h = y(t, "targetPosition", 7), g = y(t, "targetX", 7), v = y(t, "targetY", 7), b = /* @__PURE__ */ E(() => Uc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: v(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), _ = /* @__PURE__ */ E(() => Do(c(b), 3)), C = /* @__PURE__ */ E(() => c(_)[0]), x = /* @__PURE__ */ E(() => c(_)[1]), k = /* @__PURE__ */ E(() => c(_)[2]);
  var P = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(S) {
      r(S), m();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(S) {
      i(S), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(S) {
      l(S), m();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(S) {
      u(S), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(S) {
      d(S), m();
    },
    get sourceY() {
      return f();
    },
    set sourceY(S) {
      f(S), m();
    },
    get style() {
      return p();
    },
    set style(S) {
      p(S), m();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(S) {
      h(S), m();
    },
    get targetX() {
      return g();
    },
    set targetX(S) {
      g(S), m();
    },
    get targetY() {
      return v();
    },
    set targetY(S) {
      v(S), m();
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
  }), pe(P);
}
le(
  Ma,
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
function hd(e, t) {
  fe(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), u = y(t, "sourceX", 7), d = y(t, "sourceY", 7), f = y(t, "targetPosition", 7), p = y(t, "targetX", 7), h = y(t, "targetY", 7), g = /* @__PURE__ */ E(() => Sa({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), v = /* @__PURE__ */ E(() => Do(c(g), 3)), b = /* @__PURE__ */ E(() => c(v)[0]), _ = /* @__PURE__ */ E(() => c(v)[1]), C = /* @__PURE__ */ E(() => c(v)[2]);
  var x = {
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
  return Xo(e, {
    get path() {
      return c(b);
    },
    get labelX() {
      return c(_);
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
  hd,
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
function gd(e, t) {
  fe(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), f = y(t, "style", 7), p = /* @__PURE__ */ E(() => Gc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ E(() => Do(c(p), 3)), g = /* @__PURE__ */ E(() => c(h)[0]), v = /* @__PURE__ */ E(() => c(h)[1]), b = /* @__PURE__ */ E(() => c(h)[2]);
  var _ = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), m();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), m();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), m();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), m();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), m();
    }
  };
  return Xo(e, {
    get path() {
      return c(g);
    },
    get labelX() {
      return c(v);
    },
    get labelY() {
      return c(b);
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
  }), pe(_);
}
le(
  gd,
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
function vd(e, t) {
  fe(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), u = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), f = y(t, "markerEnd", 7), p = y(t, "interactionWidth", 7), h = y(t, "style", 7), g = /* @__PURE__ */ E(() => Sa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), v = /* @__PURE__ */ E(() => Do(c(g), 3)), b = /* @__PURE__ */ E(() => c(v)[0]), _ = /* @__PURE__ */ E(() => c(v)[1]), C = /* @__PURE__ */ E(() => c(v)[2]);
  var x = {
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
  return Xo(e, {
    get path() {
      return c(b);
    },
    get labelX() {
      return c(_);
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
  vd,
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
    this.#t = t, this.#e = Pu(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Tm = /\(.+\)/, Nm = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Mm extends Pm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Tm.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Nm.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ps(o, "change", i)
    );
  }
}
function Om(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return $a(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Xl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: v, transform: b, width: _, height: C } = e;
      if (D0({
        sourceNode: f,
        targetNode: p,
        width: _,
        height: C,
        transform: b
      }))
        v.set(f.id, f), v.set(p.id, p);
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
const md = {
  input: ld,
  output: ud,
  default: Na,
  group: cd
}, yd = {
  straight: gd,
  smoothstep: hd,
  default: Ma,
  step: vd
};
function Lm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Bo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ka(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Dm(e) {
  class t {
    #t = /* @__PURE__ */ E(() => e.props.id ?? "1");
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
    #n = /* @__PURE__ */ Le(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      G(this.#n, r);
    }
    #r = /* @__PURE__ */ Le(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      G(this.#r, r);
    }
    #a = /* @__PURE__ */ Le(e.height ?? 0);
    get height() {
      return c(this.#a);
    }
    set height(r) {
      G(this.#a, r);
    }
    #s = /* @__PURE__ */ E(() => {
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
    #i = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#i);
    }
    set viewportInitialized(r) {
      G(this.#i, r);
    }
    #o = /* @__PURE__ */ E(() => (em(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#o);
    }
    set _edges(r) {
      G(this.#o, r);
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
      G(this.#l, r);
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
      G(this.#u, r);
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
        const { viewport: g, width: v, height: b } = this, _ = [g.x, g.y, g.zoom];
        f = Om(s, _, v, b), p = Xl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: _,
          width: v,
          height: b
        });
      } else
        f = this.nodeLookup, p = Xl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      G(this.#c, r);
    }
    #d = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      G(this.#d, r);
    }
    #p = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#p);
    }
    set nodesConnectable(r) {
      G(this.#p, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      G(this.#f, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#m);
    }
    set nodesFocusable(r) {
      G(this.#m, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      G(this.#y, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      G(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      G(this.#b, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#h);
    }
    set maxZoom(r) {
      G(this.#h, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      G(this.#g, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.nodeExtent ?? zs);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      G(this.#v, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.translateExtent ?? zs);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      G(this.#x, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#_);
    }
    set defaultEdgeOptions(r) {
      G(this.#_, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      G(this.#C, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      G(this.#$, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      G(this.#k, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      G(this.#S, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      G(this.#E, r);
    }
    #P = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      G(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #T = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#T);
    }
    set snapGrid(r) {
      G(this.#T, r);
    }
    #N = /* @__PURE__ */ Le(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      G(this.#N, r);
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
    #H = /* @__PURE__ */ Le(!1);
    get panActivationKeyPressed() {
      return c(this.#H);
    }
    set panActivationKeyPressed(r) {
      G(this.#H, r);
    }
    #A = /* @__PURE__ */ Le(!1);
    get zoomActivationKeyPressed() {
      return c(this.#A);
    }
    set zoomActivationKeyPressed(r) {
      G(this.#A, r);
    }
    #V = /* @__PURE__ */ Le(null);
    get selectionRectMode() {
      return c(this.#V);
    }
    set selectionRectMode(r) {
      G(this.#V, r);
    }
    #z = /* @__PURE__ */ Le("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      G(this.#z, r);
    }
    #I = /* @__PURE__ */ E(() => e.props.selectionMode ?? Pi.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      G(this.#I, r);
    }
    #R = /* @__PURE__ */ E(() => ({ ...md, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      G(this.#R, r);
    }
    #j = /* @__PURE__ */ E(() => ({ ...yd, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      G(this.#j, r);
    }
    #K = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      G(this.#K, r);
    }
    #B = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#B);
    }
    set noDragClass(r) {
      G(this.#B, r);
    }
    #Z = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      G(this.#Z, r);
    }
    #W = /* @__PURE__ */ E(() => N0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      G(this.#W, r);
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
    #Y = /* @__PURE__ */ Le(
      // _connection is viewport independent and originating from XYHandle
      Is
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      G(this.#Y, r);
    }
    #F = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: Wo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#F);
    }
    set connection(r) {
      G(this.#F, r);
    }
    #q = /* @__PURE__ */ E(() => e.props.connectionMode ?? Qr.Strict);
    get connectionMode() {
      return c(this.#q);
    }
    set connectionMode(r) {
      G(this.#q, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      G(this.#U, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      G(this.#J, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      G(this.#G, r);
    }
    #Q = /* @__PURE__ */ E(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      G(this.#Q, r);
    }
    #ee = /* @__PURE__ */ E(() => K0(e.edges, {
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
    #te = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      G(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.onflowerror ?? S0);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      G(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      G(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      G(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      G(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      G(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      G(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      G(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      G(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      G(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      G(this.#de, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      G(this.#fe, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      G(this.#pe, r);
    }
    #he = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      G(this.#he, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
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
    #me = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      G(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      G(this.#ye, r);
    }
    #we = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      G(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await $0(
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
    #be = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      G(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Is, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function gn() {
  const e = er(Oi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Oi = Symbol();
function wd(e) {
  const t = Dm(e);
  function n(I) {
    t.nodeTypes = {
      ...md,
      ...I
    };
  }
  function r(I) {
    t.edgeTypes = {
      ...yd,
      ...I
    };
  }
  function o(I) {
    t.edges = V0(I, t.edges);
  }
  const i = (I, $ = !1) => {
    t.nodes = t.nodes.map((T) => {
      const w = I.get(T.id);
      return w ? { ...T, position: w.position, dragging: $ } : T;
    });
  };
  function s(I) {
    const { changes: $, updatedInternals: T } = G0(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!T)
      return;
    X0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const w = /* @__PURE__ */ new Map();
    for (const M of $) {
      const N = t.nodeLookup.get(M.id)?.internals.userNode;
      if (!N)
        continue;
      const R = { ...N };
      switch (M.type) {
        case "dimensions": {
          const B = { ...R.measured, ...M.dimensions };
          M.setAttributes && (R.width = M.dimensions?.width ?? R.width, R.height = M.dimensions?.height ?? R.height), R.measured = B;
          break;
        }
        case "position":
          R.position = M.position ?? R.position;
          break;
      }
      w.set(M.id, R);
    }
    t.nodes = t.nodes.map((M) => w.get(M.id) ?? M);
  }
  function a(I) {
    const $ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = $, t.nodes = [...t.nodes], $.promise;
  }
  async function l(I, $, T) {
    const w = typeof T?.zoom < "u" ? T.zoom : t.maxZoom, M = t.panZoom;
    return M ? (await M.setViewport({
      x: t.width / 2 - I * w,
      y: t.height / 2 - $ * w,
      zoom: w
    }, { duration: T?.duration, ease: T?.ease, interpolate: T?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(I, $) {
    const T = t.panZoom;
    return T ? T.scaleBy(I, $) : Promise.resolve(!1);
  }
  function d(I) {
    return u(1.2, I);
  }
  function f(I) {
    return u(1 / 1.2, I);
  }
  function p(I) {
    const $ = t.panZoom;
    $ && ($.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function h(I) {
    const $ = t.panZoom;
    $ && ($.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function g(I) {
    const $ = t.panZoom;
    $ && ($.setTranslateExtent(I), t.translateExtent = I);
  }
  function v(I) {
    t.panZoom?.setClickDistance(I);
  }
  function b(I, $ = null) {
    let T = !1;
    const w = I.map((M) => (!$ || $.has(M.id)) && M.selected ? (T = !0, { ...M, selected: !1 }) : M);
    return [T, w];
  }
  function _(I) {
    const $ = I?.nodes ? new Set(I.nodes.map((B) => B.id)) : null, [T, w] = b(t.nodes, $);
    T && (t.nodes = w);
    const M = I?.edges ? new Set(I.edges.map((B) => B.id)) : null, [N, R] = b(t.edges, M);
    N && (t.edges = R);
  }
  function C(I) {
    const $ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const w = I.includes(T.id), M = $ && T.selected || w;
      return !!T.selected !== M ? { ...T, selected: M } : T;
    }), $ || _({ nodes: [] });
  }
  function x(I) {
    const $ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const w = I.includes(T.id), M = $ && T.selected || w;
      return !!T.selected !== M ? { ...T, selected: M } : T;
    }), $ || _({ edges: [] });
  }
  function k(I, $, T) {
    const w = t.nodeLookup.get(I);
    if (!w) {
      console.warn("012", So.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, w.selected ? ($ || w.selected && t.multiselectionKeyPressed) && (_({ nodes: [w], edges: [] }), requestAnimationFrame(() => T?.blur())) : C([I]);
  }
  function P(I) {
    const $ = t.edgeLookup.get(I);
    if (!$) {
      console.warn("012", So.error012(I));
      return;
    }
    ($.selectable || t.elementsSelectable && typeof $.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, $.selected ? $.selected && t.multiselectionKeyPressed && _({ nodes: [], edges: [$] }) : x([I]));
  }
  function S(I, $) {
    const { nodeExtent: T, snapGrid: w, nodeOrigin: M, nodeLookup: N, nodesDraggable: R, onerror: B } = t, W = /* @__PURE__ */ new Map(), D = w?.[0] ?? 5, U = w?.[1] ?? 5, F = I.x * D * $, Q = I.y * U * $;
    for (const z of N.values()) {
      if (!(z.selected && (z.draggable || R && typeof z.draggable > "u")))
        continue;
      let Y = {
        x: z.internals.positionAbsolute.x + F,
        y: z.internals.positionAbsolute.y + Q
      };
      w && (Y = Zo(Y, w));
      const { position: J, positionAbsolute: ne } = jc({
        nodeId: z.id,
        nextPosition: Y,
        nodeLookup: N,
        nodeExtent: T,
        nodeOrigin: M,
        onError: B
      });
      z.position = J, z.internals.positionAbsolute = ne, W.set(z.id, z);
    }
    i(W);
  }
  function O(I) {
    return Q0({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const A = (I) => {
    t._connection = { ...I };
  };
  function Z() {
    t._connection = Is;
  }
  function q() {
    t.resetStoreValues(), _();
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
    setPaneClickDistance: v,
    unselectNodesAndEdges: _,
    addSelectedNodes: C,
    addSelectedEdges: x,
    handleNodeSelection: k,
    handleEdgeSelection: P,
    moveSelectedNodes: S,
    panBy: O,
    updateConnection: A,
    cancelConnection: Z,
    reset: q
  });
}
function Hm(e, t) {
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
    update(v) {
      h.update(v);
    }
  };
}
var Am = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function bd(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 7), o = y(t, "preventScrolling", 7), i = y(t, "zoomOnScroll", 7), s = y(t, "zoomOnDoubleClick", 7), a = y(t, "zoomOnPinch", 7), l = y(t, "panOnDrag", 7), u = y(t, "panOnScroll", 7), d = y(t, "panOnScrollSpeed", 7), f = y(t, "paneClickDistance", 7), p = y(t, "onmovestart", 7), h = y(t, "onmove", 7), g = y(t, "onmoveend", 7), v = y(t, "oninit", 7), b = y(t, "children", 7), _ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), C = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let k = !1;
  nt(() => {
    !k && n().viewportInitialized && (v()?.(), k = !0);
  });
  var P = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(A) {
      r(A), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(A) {
      o(A), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(A) {
      i(A), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(A) {
      s(A), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(A) {
      a(A), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(A) {
      l(A), m();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(A) {
      u(A), m();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(A) {
      d(A), m();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(A) {
      f(A), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(A) {
      p(A), m();
    },
    get onmove() {
      return h();
    },
    set onmove(A) {
      h(A), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(A) {
      g(A), m();
    },
    get oninit() {
      return v();
    },
    set oninit(A) {
      v(A), m();
    },
    get children() {
      return b();
    },
    set children(A) {
      b(A), m();
    }
  }, S = Am(), O = K(S);
  return st(O, b), j(S), $t(S, (A, Z) => Hm?.(A, Z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (A) => {
      n(n().dragging = A, !0);
    },
    setPanZoomInstance: (A) => {
      n(n().panZoom = A, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: h(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(C),
    panOnDrag: c(_),
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
    onTransformChange: (A) => {
      n(n().viewport = { x: A[0], y: A[1], zoom: A[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, S), pe(P);
}
le(
  bd,
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
function Yl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Fl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ql(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Vm = /* @__PURE__ */ te("<div><!></div>");
function xd(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), u = y(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ E(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), b = /* @__PURE__ */ E(() => n().elementsSelectable && (c(v) || n().selectionRectMode === "user")), _ = !1;
  function C(w) {
    if (_ || n().connection.inProgress) {
      _ = !1;
      return;
    }
    i()?.({ event: w }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(w) {
    f = d?.getBoundingClientRect();
    const M = w.target !== d && !!w.target.closest(".nokey"), N = o() && d === w.target || !o() || n().selectionKeyPressed;
    if (!n().elementsSelectable || !c(v) || w.button !== 0 || !f || M || !N || !w.isPrimary)
      return;
    w.stopPropagation(), w.preventDefault(), w.target?.setPointerCapture?.(w.pointerId);
    const { x: R, y: B } = ln(w, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: R, startY: B, x: R, y: B }, !0), a()?.(w);
  }
  function k(w) {
    if (!c(v) || !f || !n().selectionRect)
      return;
    _ = !0;
    const M = ln(w, f), { startX: N = 0, startY: R = 0 } = n().selectionRect, B = {
      ...n().selectionRect,
      x: M.x < N ? M.x : N,
      y: M.y < R ? M.y : R,
      width: Math.abs(M.x - N),
      height: Math.abs(M.y - R)
    }, W = p, D = h;
    p = new Set($a(
      n().nodeLookup,
      B,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Pi.Partial,
      !0
    ).map((F) => F.id));
    const U = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const F of p) {
      const Q = n().connectionLookup.get(F);
      if (Q)
        for (const { edgeId: z } of Q.values()) {
          const Y = n().edgeLookup.get(z);
          Y && (Y.selectable ?? U) && h.add(z);
        }
    }
    ql(W, p) || n(n().nodes = n().nodes.map(Fl(p)), !0), ql(D, h) || n(n().edges = n().edges.map(Fl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = B, !0);
  }
  function P(w) {
    w.button === 0 && (w.target?.releasePointerCapture?.(w.pointerId), !c(v) && n().selectionRectMode === "user" && w.target === d && C?.(w), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (_ = !1), l()?.(w));
  }
  const S = (w) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      w.preventDefault();
      return;
    }
    s()?.({ event: w });
  }, O = (w) => {
    (o() && d === w.target || !o() || n().selectionKeyPressed) && w.stopPropagation();
  };
  var A = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(w = !0) {
      r(w), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(w) {
      o(w), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(w) {
      i(w), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(w) {
      s(w), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(w) {
      a(w), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(w) {
      l(w), m();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), m();
    }
  }, Z = Vm();
  let q;
  var I = /* @__PURE__ */ E(() => c(b) ? void 0 : Yl(C, d));
  Z.__click = function(...w) {
    c(I)?.apply(this, w);
  }, Z.__pointermove = function(...w) {
    (c(b) ? k : void 0)?.apply(this, w);
  }, Z.__pointerup = function(...w) {
    (c(b) ? P : void 0)?.apply(this, w);
  };
  var $ = /* @__PURE__ */ E(() => Yl(S, d));
  Z.__contextmenu = function(...w) {
    c($)?.apply(this, w);
  };
  var T = K(Z);
  return st(T, u), j(Z), jt(Z, (w) => d = w, () => d), Ee((w) => q = Rt(Z, 1, "svelte-flow__pane svelte-flow__container", null, q, w), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(v)
    })
  ]), bi(
    "pointerdown",
    Z,
    function(...w) {
      (c(b) ? x : void 0)?.apply(this, w);
    },
    !0
  ), bi(
    "click",
    Z,
    function(...w) {
      (c(b) ? O : void 0)?.apply(this, w);
    },
    !0
  ), L(e, Z), pe(A);
}
lr(["click", "pointermove", "pointerup", "contextmenu"]);
le(
  xd,
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
function _d(e, t) {
  fe(t, !0);
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
  }, i = zm();
  let s;
  var a = K(i);
  return st(a, r), j(i), Ee((l) => s = xt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), L(e, i), pe(o);
}
le(_d, { store: {}, children: {} }, [], [], !0);
function Cd(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = om({
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
var Im = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1cazx9o"> </div>'), Rm = /* @__PURE__ */ te('<div class="a11y-hidden svelte-1cazx9o"> </div> <div class="a11y-hidden svelte-1cazx9o"> </div> <!>', 1);
const jm = {
  hash: "svelte-1cazx9o",
  code: ".a11y-hidden.svelte-1cazx9o {display:none;}.a11y-live-msg.svelte-1cazx9o {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function $d(e, t) {
  fe(t, !0), Ye(e, jm);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    }
  }, o = Rm(), i = ae(o), s = K(i, !0);
  j(i);
  var a = H(i, 2), l = K(a, !0);
  j(a);
  var u = H(a, 2);
  {
    var d = (f) => {
      var p = Im(), h = K(p, !0);
      j(p), Ee(() => {
        ke(p, "id", `${Km}-${n().flowId}`), Ue(h, n().ariaLiveMessage);
      }), L(f, p);
    };
    ue(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Ee(() => {
    ke(i, "id", `${kd}-${n().flowId}`), Ue(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Sd}-${n().flowId}`), Ue(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), pe(r);
}
le($d, { store: {} }, [], [], !0);
const kd = "svelte-flow__node-desc", Sd = "svelte-flow__edge-desc", Km = "svelte-flow__aria-live";
var Bm = /* @__PURE__ */ te("<div><!></div>");
function Ed(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), u = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), f = y(t, "onnodepointerleave", 7), p = y(t, "onnodepointermove", 7), h = y(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ E(() => Pt(r().data, () => ({}), !0)), v = /* @__PURE__ */ E(() => Pt(r().selected, !1)), b = /* @__PURE__ */ E(() => r().draggable), _ = /* @__PURE__ */ E(() => r().selectable), C = /* @__PURE__ */ E(() => Pt(r().deletable, !0)), x = /* @__PURE__ */ E(() => r().connectable), k = /* @__PURE__ */ E(() => r().focusable), P = /* @__PURE__ */ E(() => Pt(r().hidden, !1)), S = /* @__PURE__ */ E(() => Pt(r().dragging, !1)), O = /* @__PURE__ */ E(() => Pt(r().style, "")), A = /* @__PURE__ */ E(() => r().class), Z = /* @__PURE__ */ E(() => Pt(r().type, "default")), q = /* @__PURE__ */ E(() => r().parentId), I = /* @__PURE__ */ E(() => r().sourcePosition), $ = /* @__PURE__ */ E(() => r().targetPosition), T = /* @__PURE__ */ E(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).width), w = /* @__PURE__ */ E(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).height), M = /* @__PURE__ */ E(() => r().initialWidth), N = /* @__PURE__ */ E(() => r().initialHeight), R = /* @__PURE__ */ E(() => r().width), B = /* @__PURE__ */ E(() => r().height), W = /* @__PURE__ */ E(() => r().dragHandle), D = /* @__PURE__ */ E(() => Pt(r().internals.z, 0)), U = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), F = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ E(() => r().internals.userNode), { id: z } = r(), Y = /* @__PURE__ */ E(() => c(b) ?? n().nodesDraggable), J = /* @__PURE__ */ E(() => c(_) ?? n().elementsSelectable), ne = /* @__PURE__ */ E(() => c(x) ?? n().nodesConnectable), re = /* @__PURE__ */ E(() => Wc(r())), ee = /* @__PURE__ */ E(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ E(() => c(re) && c(ee)), ce = /* @__PURE__ */ E(() => c(k) ?? n().nodesFocusable);
  function ie(ye) {
    return n().parentLookup.has(ye);
  }
  let se = /* @__PURE__ */ E(() => ie(z)), ve = /* @__PURE__ */ Le(null), me = null, xe = c(Z), de = c(I), $e = c($), Ne = /* @__PURE__ */ E(() => n().nodeTypes[c(Z)] ?? Na), X = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  Yr("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Yr("svelteflow__node_id", z);
  let Be = /* @__PURE__ */ E(() => {
    const ye = c(T) === void 0 ? c(R) ?? c(M) : c(R), Xe = c(w) === void 0 ? c(B) ?? c(N) : c(B);
    if (!(ye === void 0 && Xe === void 0 && c(O) === void 0))
      return `${c(O)};${ye ? `width:${En(ye)};` : ""}${Xe ? `height:${En(Xe)};` : ""}`;
  });
  nt(() => {
    (c(Z) !== xe || c(I) !== de || c($) !== $e) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[z, { id: z, nodeElement: c(ve), force: !0 }]]));
    }), xe = c(Z), de = c(I), $e = c($);
  }), nt(() => {
    o() && (!c(ge) || c(ve) !== me) && (me && o().unobserve(me), c(ve) && o().observe(c(ve)), me = c(ve));
  }), Io(() => {
    me && o()?.unobserve(me);
  });
  function De(ye) {
    c(J) && (!n().selectNodesOnDrag || !c(Y) || n().nodeDragThreshold > 0) && n().handleNodeSelection(z), s()?.({ node: c(Q), event: ye });
  }
  function je(ye) {
    if (!(Fc(ye) || n().disableKeyboardA11y))
      if (Ic.includes(ye.key) && c(J)) {
        const Xe = ye.key === "Escape";
        n().handleNodeSelection(z, Xe, c(ve));
      } else c(Y) && r().selected && Object.prototype.hasOwnProperty.call(Mi, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(X)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Mi[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Ze = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: ye, height: Xe, viewport: mt } = n();
    $a(/* @__PURE__ */ new Map([[z, r()]]), { x: 0, y: 0, width: ye, height: Xe }, [mt.x, mt.y, mt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: mt.zoom });
  };
  var rt = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), m();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), m();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), m();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(ye) {
      f(ye), m();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(ye) {
      p(ye), m();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ye) {
      h(ye), m();
    }
  }, _t = Me(), et = ae(_t);
  {
    var We = (ye) => {
      var Xe = Bm();
      ht(
        Xe,
        (tt, Ct) => ({
          "data-id": z,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(Z)}`,
            c(A)
          ],
          style: c(Be),
          onclick: De,
          onpointerenter: d() ? (ct) => d()({ node: c(Q), event: ct }) : void 0,
          onpointerleave: f() ? (ct) => f()({ node: c(Q), event: ct }) : void 0,
          onpointermove: p() ? (ct) => p()({ node: c(Q), event: ct }) : void 0,
          oncontextmenu: h() ? (ct) => h()({ node: c(Q), event: ct }) : void 0,
          onkeydown: c(ce) ? je : void 0,
          onfocus: c(ce) ? Ze : void 0,
          tabIndex: c(ce) ? 0 : void 0,
          role: r().ariaRole ?? (c(ce) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${kd}-${n().flowId}`,
          ...r().domAttributes,
          [qn]: tt,
          [Cn]: Ct
        }),
        [
          () => ({
            dragging: c(S),
            selected: c(v),
            draggable: c(Y),
            connectable: c(ne),
            selectable: c(J),
            nopan: c(Y),
            parent: c(se)
          }),
          () => ({
            "z-index": c(D),
            transform: `translate(${c(U) ?? ""}px, ${c(F) ?? ""}px)`,
            visibility: c(re) ? "visible" : "hidden"
          })
        ]
      );
      var mt = K(Xe);
      Zi(mt, () => c(Ne), (tt, Ct) => {
        Ct(tt, {
          get data() {
            return c(g);
          },
          get id() {
            return z;
          },
          get selected() {
            return c(v);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(I);
          },
          get targetPosition() {
            return c($);
          },
          get zIndex() {
            return c(D);
          },
          get dragging() {
            return c(S);
          },
          get draggable() {
            return c(Y);
          },
          get dragHandle() {
            return c(W);
          },
          get parentId() {
            return c(q);
          },
          get type() {
            return c(Z);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(U);
          },
          get positionAbsoluteY() {
            return c(F);
          },
          get width() {
            return c(R);
          },
          get height() {
            return c(B);
          }
        });
      }), j(Xe), $t(Xe, (tt, Ct) => Cd?.(tt, Ct), () => ({
        nodeId: z,
        isSelectable: c(J),
        disabled: !c(Y),
        handleSelector: c(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (tt, Ct, ct, dt) => {
          a()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStart: (tt, Ct, ct, dt) => {
          l()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStop: (tt, Ct, ct, dt) => {
          u()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        store: n()
      })), jt(Xe, (tt) => G(ve, tt), () => c(ve)), L(ye, Xe);
    };
    ue(et, (ye) => {
      c(P) || ye(We);
    });
  }
  return L(e, _t), pe(rt);
}
le(
  Ed,
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
function Pd(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), u = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), f = y(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((v) => {
    const b = /* @__PURE__ */ new Map();
    v.forEach((_) => {
      const C = _.target.getAttribute("data-id");
      b.set(C, { id: C, nodeElement: _.target, force: !0 });
    }), n().updateNodeInternals(b);
  });
  Io(() => {
    p?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(v) {
      r(v), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(v) {
      o(v), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(v) {
      i(v), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(v) {
      s(v), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(v) {
      a(v), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(v) {
      l(v), m();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(v) {
      u(v), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(v) {
      d(v), m();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(v) {
      f(v), m();
    }
  }, g = Zm();
  return St(g, 21, () => n().visible.nodes.values(), (v) => v.id, (v, b) => {
    Ed(v, {
      get node() {
        return c(b);
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
      set store(_) {
        n(_);
      }
    });
  }), j(g), L(e, g), pe(h);
}
le(
  Pd,
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
function Td(e, t) {
  fe(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), f = /* @__PURE__ */ E(() => n().sourceY), p = /* @__PURE__ */ E(() => n().targetX), h = /* @__PURE__ */ E(() => n().targetY), g = /* @__PURE__ */ E(() => n().sourcePosition), v = /* @__PURE__ */ E(() => n().targetPosition), b = /* @__PURE__ */ E(() => Pt(n().animated, !1)), _ = /* @__PURE__ */ E(() => Pt(n().selected, !1)), C = /* @__PURE__ */ E(() => n().label), x = /* @__PURE__ */ E(() => n().labelStyle), k = /* @__PURE__ */ E(() => Pt(n().data, () => ({}), !0)), P = /* @__PURE__ */ E(() => n().style), S = /* @__PURE__ */ E(() => n().interactionWidth), O = /* @__PURE__ */ E(() => Pt(n().type, "default")), A = /* @__PURE__ */ E(() => n().sourceHandle), Z = /* @__PURE__ */ E(() => n().targetHandle), q = /* @__PURE__ */ E(() => n().markerStart), I = /* @__PURE__ */ E(() => n().markerEnd), $ = /* @__PURE__ */ E(() => n().selectable), T = /* @__PURE__ */ E(() => n().focusable), w = /* @__PURE__ */ E(() => Pt(n().deletable, !0)), M = /* @__PURE__ */ E(() => n().hidden), N = /* @__PURE__ */ E(() => n().zIndex), R = /* @__PURE__ */ E(() => n().class), B = /* @__PURE__ */ E(() => n().ariaLabel), W = null;
  const { id: D } = n();
  Yr("svelteflow__edge_id", D);
  let U = /* @__PURE__ */ E(() => c($) ?? r().elementsSelectable), F = /* @__PURE__ */ E(() => c(T) ?? r().edgesFocusable), Q = /* @__PURE__ */ E(() => r().edgeTypes[c(O)] ?? Ma), z = /* @__PURE__ */ E(() => c(q) ? `url('#${js(c(q), r().flowId)}')` : void 0), Y = /* @__PURE__ */ E(() => c(I) ? `url('#${js(c(I), r().flowId)}')` : void 0);
  function J(se) {
    const ve = r().edgeLookup.get(D);
    ve && (c(U) && r().handleEdgeSelection(D), o()?.({ event: se, edge: ve }));
  }
  function ne(se, ve) {
    const me = r().edgeLookup.get(D);
    me && ve({ event: se, edge: me });
  }
  function re(se) {
    if (!r().disableKeyboardA11y && Ic.includes(se.key) && c(U)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: me } = r();
      se.key === "Escape" ? (W?.blur(), ve({ edges: [n()] })) : me([D]);
    }
  }
  var ee = {
    get edge() {
      return n();
    },
    set edge(se) {
      n(se), m();
    },
    get store() {
      return r();
    },
    set store(se) {
      r(se), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(se) {
      o(se), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(se) {
      i(se), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(se) {
      s(se), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(se) {
      a(se), m();
    }
  }, ge = Me(), ce = ae(ge);
  {
    var ie = (se) => {
      var ve = Wm();
      let me;
      var xe = K(ve);
      ht(
        xe,
        ($e) => ({
          class: ["svelte-flow__edge", c(R)],
          "data-id": D,
          onclick: J,
          oncontextmenu: i() ? (Ne) => {
            ne(Ne, i());
          } : void 0,
          onpointerenter: s() ? (Ne) => {
            ne(Ne, s());
          } : void 0,
          onpointerleave: a() ? (Ne) => {
            ne(Ne, a());
          } : void 0,
          "aria-label": c(B) === null ? void 0 : c(B) ? c(B) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(F) ? `${Sd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(F) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(F) ? re : void 0,
          tabindex: c(F) ? 0 : void 0,
          ...n().domAttributes,
          [qn]: $e
        }),
        [
          () => ({
            animated: c(b),
            selected: c(_),
            selectable: c(U)
          })
        ]
      );
      var de = K(xe);
      Zi(de, () => c(Q), ($e, Ne) => {
        Ne($e, {
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
            return c(v);
          },
          get animated() {
            return c(b);
          },
          get selected() {
            return c(_);
          },
          get label() {
            return c(C);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(k);
          },
          get style() {
            return c(P);
          },
          get interactionWidth() {
            return c(S);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(w);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(A);
          },
          get targetHandleId() {
            return c(Z);
          },
          get markerStart() {
            return c(z);
          },
          get markerEnd() {
            return c(Y);
          }
        });
      }), j(xe), jt(xe, ($e) => W = $e, () => W), j(ve), Ee(($e) => me = xt(ve, "", me, $e), [() => ({ "z-index": c(N) })]), L(se, ve);
    };
    ue(ce, (se) => {
      c(M) || se(ie);
    });
  }
  return L(e, ge), pe(ee);
}
le(
  Td,
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
Op();
var Xm = /* @__PURE__ */ we("<defs></defs>");
function Nd(e, t) {
  fe(t, !1);
  const n = gn();
  ac();
  var r = Xm();
  St(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Md(o, Je(() => c(i)));
  }), j(r), L(e, r), pe();
}
le(Nd, {}, [], [], !0);
var Ym = /* @__PURE__ */ we('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Fm = /* @__PURE__ */ we('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), qm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Md(e, t) {
  fe(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7, "none"), u = y(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(v) {
      n(v), m();
    },
    get type() {
      return r();
    },
    set type(v) {
      r(v), m();
    },
    get width() {
      return o();
    },
    set width(v = 12.5) {
      o(v), m();
    },
    get height() {
      return i();
    },
    set height(v = 12.5) {
      i(v), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(v = "strokeWidth") {
      s(v), m();
    },
    get orient() {
      return a();
    },
    set orient(v = "auto-start-reverse") {
      a(v), m();
    },
    get color() {
      return l();
    },
    set color(v = "none") {
      l(v), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(v) {
      u(v), m();
    }
  }, f = qm(), p = K(f);
  {
    var h = (v) => {
      var b = Ym();
      let _;
      Ee(
        (C) => {
          ke(b, "stroke-width", u()), _ = xt(b, "", _, C);
        },
        [() => ({ stroke: l() })]
      ), L(v, b);
    }, g = (v) => {
      var b = Me(), _ = ae(b);
      {
        var C = (x) => {
          var k = Fm();
          let P;
          Ee(
            (S) => {
              ke(k, "stroke-width", u()), P = xt(k, "", P, S);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), L(x, k);
        };
        ue(
          _,
          (x) => {
            r() === Eo.ArrowClosed && x(C);
          },
          !0
        );
      }
      L(v, b);
    };
    ue(p, (v) => {
      r() === Eo.Arrow ? v(h) : v(g, !1);
    });
  }
  return j(f), Ee(() => {
    ke(f, "id", n()), ke(f, "markerWidth", `${o()}`), ke(f, "markerHeight", `${i()}`), ke(f, "markerUnits", s()), ke(f, "orient", a());
  }), L(e, f), pe(d);
}
le(
  Md,
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
var Um = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Od(e, t) {
  fe(t, !0);
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
  }, l = Um(), u = K(l), d = K(u);
  Nd(d, {}), j(u);
  var f = H(u, 2);
  return St(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    Td(p, {
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
  Od,
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
var Jm = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1s0q5uo"></div>');
const Gm = {
  hash: "svelte-1s0q5uo",
  code: ".svelte-flow__selection.svelte-1s0q5uo {position:absolute;top:0;left:0;}"
};
function Oa(e, t) {
  fe(t, !0), Ye(e, Gm);
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
  }, l = Me(), u = ae(l);
  {
    var d = (f) => {
      var p = Jm();
      let h;
      Ee((g) => h = xt(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : En(o()),
          height: typeof i() == "string" ? i() : En(i()),
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
le(Oa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
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
  hash: "svelte-pfbpzw",
  code: ".svelte-flow__selection-wrapper.svelte-pfbpzw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Ld(e, t) {
  fe(t, !0), Ye(e, ny);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Le(void 0);
  nt(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => n().selectionRectMode === "nodes" ? (n().nodes, Bo(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(Mi, v.key) && (v.preventDefault(), n().moveSelectedNodes(Mi[v.key], v.shiftKey ? 4 : 1));
  }
  var f = {
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(v) {
      r(v), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(v) {
      o(v), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(v) {
      i(v), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(v) {
      s(v), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(v) {
      a(v), m();
    }
  }, p = Me(), h = ae(p);
  {
    var g = (v) => {
      var b = ty();
      b.__contextmenu = [Qm, n, a], b.__click = [ey, n, s], b.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let _;
      var C = K(b);
      Oa(C, { width: "100%", height: "100%", x: 0, y: 0 }), j(b), $t(b, (x, k) => Cd?.(x, k), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, k, P, S) => {
          r()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStart: (x, k, P, S) => {
          o()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStop: (x, k, P, S) => {
          i()?.({ event: x, targetNode: null, nodes: S });
        }
      })), jt(b, (x) => G(l, x), () => c(l)), Ee(
        (x) => {
          Rt(b, 1, Zn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-pfbpzw"), ke(b, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(b, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = xt(b, "", _, x);
        },
        [
          () => ({
            width: En(c(u).width),
            height: En(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(v, b);
    };
    ue(h, (v) => {
      n().selectionRectMode === "nodes" && c(u) && Dn(c(u).x) && Dn(c(u).y) && v(g);
    });
  }
  return L(e, p), pe(f);
}
lr(["contextmenu", "click", "keydown"]);
le(
  Ld,
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
function wn(e, t) {
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
      }, { modifier: p, key: h, callback: g, preventDefault: v, enabled: b } = f;
      if (b) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const C = Array.isArray(p) ? p : [p];
          let x = !1;
          for (const k of C)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (P, S) => P | ry(S),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        v && a.preventDefault();
        const _ = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), g?.(_);
      }
    }
  }
  let s;
  return n && (s = Ps(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ps(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function vt() {
  const e = /* @__PURE__ */ E(gn), t = (i) => {
    const s = Wl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? T0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return to(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = wt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Wl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = wt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && Cm(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Ul(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Ul(c(e).edgeLookup, i),
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
    getViewport: () => bu(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = ka(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = Ll(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = to(f), h = Po(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ll(i) ? i : t(i);
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
      return a && (c(e).nodes = wt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = wt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
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
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = Ni(i, [s, a, l]);
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
function Ul(e, t) {
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
function Dd(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => vr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => vr() ? "Meta" : "Control"), { deleteElements: l } = vt();
  function u(b) {
    return b !== null && typeof b == "object";
  }
  function d(b) {
    return u(b) ? b.modifier || [] : [];
  }
  function f(b) {
    return b == null ? "" : u(b) ? b.key : b;
  }
  function p(b, _) {
    return (Array.isArray(b) ? b : [b]).map((C) => {
      const x = f(C);
      return {
        key: x,
        modifier: d(C),
        enabled: x !== null,
        callback: _
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const b = n().nodes.filter((C) => C.selected), _ = n().edges.filter((C) => C.selected);
    l({ nodes: b, edges: _ });
  }
  var v = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(b = "Shift") {
      r(b), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(b = vr() ? "Meta" : "Control") {
      o(b), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(b = "Backspace") {
      i(b), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(b = " ") {
      s(b), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(b = vr() ? "Meta" : "Control") {
      a(b), m();
    }
  };
  return bi("blur", At, h), bi("contextmenu", At, h), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(i(), (b) => {
      !(b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) && !Fc(b.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), $t(At, (b, _) => wn?.(b, _), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pe(v);
}
le(
  Dd,
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
function Hd(e, t) {
  fe(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ E(() => {
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
      case On.Bezier: {
        const [h] = Uc(p);
        return h;
      }
      case On.Straight: {
        const [h] = Gc(p);
        return h;
      }
      case On.Step:
      case On.SmoothStep: {
        const [h] = Sa({
          ...p,
          borderRadius: r() === On.Step ? 0 : void 0
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
  }, u = Me(), d = ae(u);
  {
    var f = (p) => {
      var h = iy(), g = K(h), v = K(g);
      {
        var b = (C) => {
          var x = Me(), k = ae(x);
          Zi(k, s, (P, S) => {
            S(P, {});
          }), L(C, x);
        }, _ = (C) => {
          var x = oy();
          Ee(() => {
            ke(x, "d", c(a)), xt(x, i());
          }), L(C, x);
        };
        ue(v, (C) => {
          s() ? C(b) : C(_, !1);
        });
      }
      j(g), j(h), Ee(
        (C) => {
          ke(h, "width", n().width), ke(h, "height", n().height), xt(h, o()), Rt(g, 0, C);
        },
        [
          () => Zn([
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
  Hd,
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
function Yo(e, t) {
  fe(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Fe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ E(() => `${n()}`.split("-"));
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
  }, u = sy();
  ht(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = K(u);
  return st(d, () => i() ?? kt), j(u), L(e, u), pe(l);
}
le(Yo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var ay = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Ad(e, t) {
  fe(t, !0);
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
  }, i = Me(), s = ae(i);
  {
    var a = (l) => {
      Yo(l, {
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
le(Ad, { proOptions: {}, position: {} }, [], [], !0);
var ly = /* @__PURE__ */ te("<div><!></div>");
const uy = {
  hash: "svelte-1h62cij",
  code: ".svelte-flow.svelte-1h62cij {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Vd(e, t) {
  fe(t, !0), Ye(e, uy);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), u = y(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), f = /* @__PURE__ */ E(() => rh(u(), [
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
  function p(b) {
    b.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(b);
  }
  var h = {
    get width() {
      return n();
    },
    set width(b) {
      n(b), m();
    },
    get height() {
      return r();
    },
    set height(b) {
      r(b), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(b) {
      o(b), m();
    },
    get domNode() {
      return i();
    },
    set domNode(b) {
      i(b), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(b) {
      s(b), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(b) {
      a(b), m();
    },
    get children() {
      return l();
    },
    set children(b) {
      l(b), m();
    },
    get rest() {
      return u();
    },
    set rest(b) {
      u(b), m();
    }
  }, g = ly();
  ht(
    g,
    (b) => ({
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
      [Cn]: b
    }),
    [
      () => ({ width: En(n()), height: En(r()) })
    ],
    void 0,
    "svelte-1h62cij"
  );
  var v = K(g);
  return st(v, () => l() ?? kt), j(g), jt(g, (b) => i(b), () => i()), ul(g, "clientHeight", a), ul(g, "clientWidth", s), L(e, g), pe(h);
}
le(
  Vd,
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
function zd(e, t) {
  fe(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), u = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), f = y(t, "nodeClickDistance", 7, 1), p = y(t, "onmovestart", 7), h = y(t, "onmoveend", 7), g = y(t, "onmove", 7), v = y(t, "oninit", 7), b = y(t, "onnodeclick", 7), _ = y(t, "onnodecontextmenu", 7), C = y(t, "onnodedrag", 7), x = y(t, "onnodedragstart", 7), k = y(t, "onnodedragstop", 7), P = y(t, "onnodepointerenter", 7), S = y(t, "onnodepointermove", 7), O = y(t, "onnodepointerleave", 7), A = y(t, "onselectionclick", 7), Z = y(t, "onselectioncontextmenu", 7), q = y(t, "onselectionstart", 7), I = y(t, "onselectionend", 7), $ = y(t, "onedgeclick", 7), T = y(t, "onedgecontextmenu", 7), w = y(t, "onedgepointerenter", 7), M = y(t, "onedgepointerleave", 7), N = y(t, "onpaneclick", 7), R = y(t, "onpanecontextmenu", 7), B = y(t, "panOnScrollMode", 23, () => xr.Free), W = y(t, "preventScrolling", 7, !0), D = y(t, "zoomOnScroll", 7, !0), U = y(t, "zoomOnDoubleClick", 7, !0), F = y(t, "zoomOnPinch", 7, !0), Q = y(t, "panOnScroll", 7, !1), z = y(t, "panOnScrollSpeed", 7, 0.5), Y = y(t, "panOnDrag", 7, !0), J = y(t, "selectionOnDrag", 7, !0), ne = y(t, "connectionLineComponent", 7), re = y(t, "connectionLineStyle", 7), ee = y(t, "connectionLineContainerStyle", 7), ge = y(t, "connectionLineType", 23, () => On.Bezier), ce = y(t, "attributionPosition", 7), ie = y(t, "children", 7), se = y(t, "nodes", 31, () => Ut([])), ve = y(t, "edges", 31, () => Ut([])), me = y(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ Fe(t, [
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
  ]), de = wd({
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
  const $e = er(Oi);
  $e && $e.setStore && $e.setStore(de), Yr(Oi, {
    provider: !1,
    getStore() {
      return de;
    }
  }), nt(() => {
    const X = { nodes: de.selectedNodes, edges: de.selectedEdges };
    wt(() => t.onselectionchange)?.(X);
    for (const Be of de.selectionChangeHandlers.values())
      Be(X);
  }), Io(() => {
    de.reset();
  });
  var Ne = {
    get width() {
      return n();
    },
    set width(X) {
      n(X), m();
    },
    get height() {
      return r();
    },
    set height(X) {
      r(X), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(X) {
      o(X), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(X) {
      i(X), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(X) {
      s(X), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(X) {
      a(X), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(X) {
      l(X), m();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(X) {
      u(X), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(X = 1) {
      d(X), m();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(X = 1) {
      f(X), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(X) {
      p(X), m();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(X) {
      h(X), m();
    },
    get onmove() {
      return g();
    },
    set onmove(X) {
      g(X), m();
    },
    get oninit() {
      return v();
    },
    set oninit(X) {
      v(X), m();
    },
    get onnodeclick() {
      return b();
    },
    set onnodeclick(X) {
      b(X), m();
    },
    get onnodecontextmenu() {
      return _();
    },
    set onnodecontextmenu(X) {
      _(X), m();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(X) {
      C(X), m();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(X) {
      x(X), m();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(X) {
      k(X), m();
    },
    get onnodepointerenter() {
      return P();
    },
    set onnodepointerenter(X) {
      P(X), m();
    },
    get onnodepointermove() {
      return S();
    },
    set onnodepointermove(X) {
      S(X), m();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(X) {
      O(X), m();
    },
    get onselectionclick() {
      return A();
    },
    set onselectionclick(X) {
      A(X), m();
    },
    get onselectioncontextmenu() {
      return Z();
    },
    set onselectioncontextmenu(X) {
      Z(X), m();
    },
    get onselectionstart() {
      return q();
    },
    set onselectionstart(X) {
      q(X), m();
    },
    get onselectionend() {
      return I();
    },
    set onselectionend(X) {
      I(X), m();
    },
    get onedgeclick() {
      return $();
    },
    set onedgeclick(X) {
      $(X), m();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(X) {
      T(X), m();
    },
    get onedgepointerenter() {
      return w();
    },
    set onedgepointerenter(X) {
      w(X), m();
    },
    get onedgepointerleave() {
      return M();
    },
    set onedgepointerleave(X) {
      M(X), m();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(X) {
      N(X), m();
    },
    get onpanecontextmenu() {
      return R();
    },
    set onpanecontextmenu(X) {
      R(X), m();
    },
    get panOnScrollMode() {
      return B();
    },
    set panOnScrollMode(X = xr.Free) {
      B(X), m();
    },
    get preventScrolling() {
      return W();
    },
    set preventScrolling(X = !0) {
      W(X), m();
    },
    get zoomOnScroll() {
      return D();
    },
    set zoomOnScroll(X = !0) {
      D(X), m();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(X = !0) {
      U(X), m();
    },
    get zoomOnPinch() {
      return F();
    },
    set zoomOnPinch(X = !0) {
      F(X), m();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(X = !1) {
      Q(X), m();
    },
    get panOnScrollSpeed() {
      return z();
    },
    set panOnScrollSpeed(X = 0.5) {
      z(X), m();
    },
    get panOnDrag() {
      return Y();
    },
    set panOnDrag(X = !0) {
      Y(X), m();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(X = !0) {
      J(X), m();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(X) {
      ne(X), m();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(X) {
      re(X), m();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(X) {
      ee(X), m();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(X = On.Bezier) {
      ge(X), m();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(X) {
      ce(X), m();
    },
    get children() {
      return ie();
    },
    set children(X) {
      ie(X), m();
    },
    get nodes() {
      return se();
    },
    set nodes(X = []) {
      se(X), m();
    },
    get edges() {
      return ve();
    },
    set edges(X = []) {
      ve(X), m();
    },
    get viewport() {
      return me();
    },
    set viewport(X = void 0) {
      me(X), m();
    }
  };
  return Vd(e, {
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
    children: (X, Be) => {
      var De = fy(), je = ae(De);
      Dd(je, {
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
        set store(We) {
          de = We;
        }
      });
      var Ze = H(je, 2);
      bd(Ze, {
        get panOnScrollMode() {
          return B();
        },
        get preventScrolling() {
          return W();
        },
        get zoomOnScroll() {
          return D();
        },
        get zoomOnDoubleClick() {
          return U();
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
          return Y();
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
          return v();
        },
        get store() {
          return de;
        },
        set store(We) {
          de = We;
        },
        children: (We, ye) => {
          xd(We, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return R();
            },
            get onselectionstart() {
              return q();
            },
            get onselectionend() {
              return I();
            },
            get panOnDrag() {
              return Y();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return de;
            },
            set store(Xe) {
              de = Xe;
            },
            children: (Xe, mt) => {
              var tt = dy(), Ct = ae(tt);
              _d(Ct, {
                get store() {
                  return de;
                },
                set store(dt) {
                  de = dt;
                },
                children: (dt, mn) => {
                  var yn = cy(), Fn = H(ae(yn), 2);
                  Od(Fn, {
                    get onedgeclick() {
                      return $();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return w();
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
                  var dr = H(Fn, 4);
                  Hd(dr, {
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
                  var Nn = H(dr, 2);
                  Pd(Nn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return b();
                    },
                    get onnodecontextmenu() {
                      return _();
                    },
                    get onnodepointerenter() {
                      return P();
                    },
                    get onnodepointermove() {
                      return S();
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
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  });
                  var ao = H(Nn, 2);
                  Ld(ao, {
                    get onselectionclick() {
                      return A();
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
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  }), be(2), L(dt, yn);
                },
                $$slots: { default: !0 }
              });
              var ct = H(Ct, 2);
              {
                let dt = /* @__PURE__ */ E(() => !!(de.selectionRect && de.selectionRectMode === "user")), mn = /* @__PURE__ */ E(() => de.selectionRect?.width), yn = /* @__PURE__ */ E(() => de.selectionRect?.height), Fn = /* @__PURE__ */ E(() => de.selectionRect?.x), dr = /* @__PURE__ */ E(() => de.selectionRect?.y);
                Oa(ct, {
                  get isVisible() {
                    return c(dt);
                  },
                  get width() {
                    return c(mn);
                  },
                  get height() {
                    return c(yn);
                  },
                  get x() {
                    return c(Fn);
                  },
                  get y() {
                    return c(dr);
                  }
                });
              }
              L(Xe, tt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var rt = H(Ze, 2);
      Ad(rt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var _t = H(rt, 2);
      $d(_t, {
        get store() {
          return de;
        }
      });
      var et = H(_t, 2);
      st(et, () => ie() ?? kt), L(X, De);
    },
    $$slots: { default: !0 }
  }), pe(Ne);
}
le(
  zd,
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
function Id(e, t) {
  fe(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Le(wd({ props: {}, nodes: [], edges: [] }));
  Yr(Oi, {
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
      n(a), m();
    }
  }, i = Me(), s = ae(i);
  return st(s, () => n() ?? kt), L(e, i), pe(o);
}
le(Id, { children: {} }, [], [], !0);
var py = /* @__PURE__ */ te("<button><!></button>");
function mo(e, t) {
  fe(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Fe(t, [
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
  }, p = py();
  ht(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [Cn]: g
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
  var h = K(p);
  return st(h, () => u() ?? kt), j(p), L(e, p), pe(f);
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
function Rd(e) {
  var t = hy();
  L(e, t);
}
le(Rd, {}, [], [], !0);
var gy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function jd(e) {
  var t = gy();
  L(e, t);
}
le(jd, {}, [], [], !0);
var vy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Kd(e) {
  var t = vy();
  L(e, t);
}
le(Kd, {}, [], [], !0);
var my = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Bd(e) {
  var t = my();
  L(e, t);
}
le(Bd, {}, [], [], !0);
var yy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Zd(e) {
  var t = yy();
  L(e, t);
}
le(Zd, {}, [], [], !0);
var wy = /* @__PURE__ */ te("<!> <!>", 1), by = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function Wd(e, t) {
  fe(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), u = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), f = y(t, "buttonColor", 7), p = y(t, "buttonColorHover", 7), h = y(t, "buttonBorderColor", 7), g = y(t, "fitViewOptions", 7), v = y(t, "children", 7), b = y(t, "before", 7), _ = y(t, "after", 7), C = /* @__PURE__ */ Fe(t, [
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
  ]), x = /* @__PURE__ */ E(gn);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let P = /* @__PURE__ */ E(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), S = /* @__PURE__ */ E(() => c(x).viewport.zoom <= c(x).minZoom), O = /* @__PURE__ */ E(() => c(x).viewport.zoom >= c(x).maxZoom), A = /* @__PURE__ */ E(() => c(x).ariaLabelConfig), Z = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const q = () => {
    c(x).zoomIn();
  }, I = () => {
    c(x).zoomOut();
  }, $ = () => {
    c(x).fitView(g());
  }, T = () => {
    let M = !c(P);
    c(x).nodesDraggable = M, c(x).nodesConnectable = M, c(x).elementsSelectable = M;
  };
  var w = {
    get position() {
      return n();
    },
    set position(M = "bottom-left") {
      n(M), m();
    },
    get orientation() {
      return r();
    },
    set orientation(M = "vertical") {
      r(M), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(M = !0) {
      o(M), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(M = !0) {
      i(M), m();
    },
    get showLock() {
      return s();
    },
    set showLock(M = !0) {
      s(M), m();
    },
    get style() {
      return a();
    },
    set style(M) {
      a(M), m();
    },
    get class() {
      return l();
    },
    set class(M) {
      l(M), m();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(M) {
      u(M), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(M) {
      d(M), m();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(M) {
      f(M), m();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(M) {
      p(M), m();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(M) {
      h(M), m();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(M) {
      g(M), m();
    },
    get children() {
      return v();
    },
    set children(M) {
      v(M), m();
    },
    get before() {
      return b();
    },
    set before(M) {
      b(M), m();
    },
    get after() {
      return _();
    },
    set after(M) {
      _(M), m();
    }
  };
  {
    let M = /* @__PURE__ */ E(() => [
      "svelte-flow__controls",
      c(Z),
      l()
    ]);
    Yo(e, Je(
      {
        get class() {
          return c(M);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(A)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => C,
      {
        children: (N, R) => {
          var B = by(), W = ae(B);
          {
            var D = (ce) => {
              var ie = Me(), se = ae(ie);
              st(se, b), L(ce, ie);
            };
            ue(W, (ce) => {
              b() && ce(D);
            });
          }
          var U = H(W, 2);
          {
            var F = (ce) => {
              var ie = wy(), se = ae(ie);
              mo(se, Je(
                {
                  onclick: q,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(A)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(A)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => k,
                {
                  children: (me, xe) => {
                    Rd(me);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = H(se, 2);
              mo(ve, Je(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(A)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(A)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(S);
                  }
                },
                () => k,
                {
                  children: (me, xe) => {
                    jd(me);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, ie);
            };
            ue(U, (ce) => {
              o() && ce(F);
            });
          }
          var Q = H(U, 2);
          {
            var z = (ce) => {
              mo(ce, Je(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: $,
                  get title() {
                    return c(A)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(A)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, se) => {
                    Kd(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(Q, (ce) => {
              i() && ce(z);
            });
          }
          var Y = H(Q, 2);
          {
            var J = (ce) => {
              mo(ce, Je(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return c(A)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(A)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, se) => {
                    var ve = Me(), me = ae(ve);
                    {
                      var xe = ($e) => {
                        Zd($e);
                      }, de = ($e) => {
                        Bd($e);
                      };
                      ue(me, ($e) => {
                        c(P) ? $e(xe) : $e(de, !1);
                      });
                    }
                    L(ie, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(Y, (ce) => {
              s() && ce(J);
            });
          }
          var ne = H(Y, 2);
          {
            var re = (ce) => {
              var ie = Me(), se = ae(ie);
              st(se, v), L(ce, ie);
            };
            ue(ne, (ce) => {
              v() && ce(re);
            });
          }
          var ee = H(ne, 2);
          {
            var ge = (ce) => {
              var ie = Me(), se = ae(ie);
              st(se, _), L(ce, ie);
            };
            ue(ee, (ce) => {
              _() && ce(ge);
            });
          }
          L(N, B);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return pe(w);
}
le(
  Wd,
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
var Hn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Hn || (Hn = {}));
var xy = /* @__PURE__ */ we("<circle></circle>");
function Xd(e, t) {
  fe(t, !0);
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
  }, i = xy();
  return Ee(() => {
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Rt(i, 0, Zn(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), pe(o);
}
le(Xd, { radius: {}, class: {} }, [], [], !0);
var _y = /* @__PURE__ */ we("<path></path>");
function Yd(e, t) {
  fe(t, !0);
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
  }, a = _y();
  return Ee(() => {
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Rt(a, 0, Zn(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), pe(s);
}
le(Yd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Cy = {
  [Hn.Dots]: 1,
  [Hn.Lines]: 1,
  [Hn.Cross]: 6
};
var $y = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Fd(e, t) {
  fe(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => Hn.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), u = y(t, "patternClass", 7), d = y(t, "class", 7), f = /* @__PURE__ */ E(gn), p = /* @__PURE__ */ E(() => r() === Hn.Dots), h = /* @__PURE__ */ E(() => r() === Hn.Cross), g = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), v = /* @__PURE__ */ E(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), b = /* @__PURE__ */ E(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), _ = /* @__PURE__ */ E(() => (i() ?? Cy[r()]) * c(f).viewport.zoom), C = /* @__PURE__ */ E(() => c(h) ? [c(_), c(_)] : c(b)), x = /* @__PURE__ */ E(() => c(p) ? [c(_) / 2, c(_) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id($) {
      n($), m();
    },
    get variant() {
      return r();
    },
    set variant($ = Hn.Dots) {
      r($), m();
    },
    get gap() {
      return o();
    },
    set gap($ = 20) {
      o($), m();
    },
    get size() {
      return i();
    },
    set size($) {
      i($), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth($ = 1) {
      s($), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor($) {
      a($), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor($) {
      l($), m();
    },
    get patternClass() {
      return u();
    },
    set patternClass($) {
      u($), m();
    },
    get class() {
      return d();
    },
    set class($) {
      d($), m();
    }
  }, P = $y();
  let S;
  var O = K(P), A = K(O);
  {
    var Z = ($) => {
      {
        let T = /* @__PURE__ */ E(() => c(_) / 2);
        Xd($, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, q = ($) => {
      Yd($, {
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
    ue(A, ($) => {
      c(p) ? $(Z) : $(q, !1);
    });
  }
  j(O);
  var I = H(O);
  return j(P), Ee(
    ($) => {
      Rt(P, 0, Zn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), S = xt(P, "", S, $), ke(O, "id", c(v)), ke(O, "x", c(f).viewport.x % c(b)[0]), ke(O, "y", c(f).viewport.y % c(b)[1]), ke(O, "width", c(b)[0]), ke(O, "height", c(b)[1]), ke(O, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), ke(I, "fill", `url(#${c(v)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), L(e, P), pe(k);
}
le(
  Fd,
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
function qd(e, t) {
  fe(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), u = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), f = y(t, "selected", 7), p = y(t, "class", 7), h = y(t, "nodeComponent", 7);
  var g = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x) {
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
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), m();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), m();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), m();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), m();
    },
    get nodeComponent() {
      return h();
    },
    set nodeComponent(x) {
      h(x), m();
    }
  }, v = Me(), b = ae(v);
  {
    var _ = (x) => {
      const k = /* @__PURE__ */ E(h);
      var P = Me(), S = ae(P);
      Zi(S, () => c(k), (O, A) => {
        A(O, {
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
      }), L(x, P);
    }, C = (x) => {
      var k = ky();
      let P, S;
      Ee(
        (O, A) => {
          P = Rt(k, 0, Zn(["svelte-flow__minimap-node", p()]), null, P, O), ke(k, "x", n()), ke(k, "y", r()), ke(k, "rx", s()), ke(k, "ry", s()), ke(k, "width", o()), ke(k, "height", i()), ke(k, "shape-rendering", l()), S = xt(k, "", S, A);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), L(x, k);
    };
    ue(b, (x) => {
      h() ? x(_) : x(C, !1);
    });
  }
  return L(e, v), pe(g);
}
le(
  qd,
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
  const n = cm({
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
const ms = (e) => e instanceof Function ? e : () => e;
var Ey = /* @__PURE__ */ we("<title> </title>"), Py = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Ty = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Ud(e, t) {
  fe(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), u = y(t, "nodeComponent", 7), d = y(t, "bgColor", 7), f = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), h = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), v = y(t, "height", 7, 150), b = y(t, "pannable", 7, !0), _ = y(t, "zoomable", 7, !0), C = y(t, "inversePan", 7), x = y(t, "zoomStep", 7), k = y(t, "class", 7), P = /* @__PURE__ */ Fe(t, [
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
  ]), S = /* @__PURE__ */ E(gn), O = /* @__PURE__ */ E(() => c(S).ariaLabelConfig);
  const A = i() === void 0 ? void 0 : ms(i()), Z = ms(o()), q = ms(s()), I = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let $ = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(S).flowId}`), T = /* @__PURE__ */ E(() => ({
    x: -c(S).viewport.x / c(S).viewport.zoom,
    y: -c(S).viewport.y / c(S).viewport.zoom,
    width: c(S).width / c(S).viewport.zoom,
    height: c(S).height / c(S).viewport.zoom
  })), w = /* @__PURE__ */ E(() => Zc(Bo(c(S).nodeLookup, { filter: (ee) => !ee.hidden }), c(T))), M = /* @__PURE__ */ E(() => c(w).width / g()), N = /* @__PURE__ */ E(() => c(w).height / v()), R = /* @__PURE__ */ E(() => Math.max(c(M), c(N))), B = /* @__PURE__ */ E(() => c(R) * g()), W = /* @__PURE__ */ E(() => c(R) * v()), D = /* @__PURE__ */ E(() => 5 * c(R)), U = /* @__PURE__ */ E(() => c(w).x - (c(B) - c(w).width) / 2 - c(D)), F = /* @__PURE__ */ E(() => c(w).y - (c(W) - c(w).height) / 2 - c(D)), Q = /* @__PURE__ */ E(() => c(B) + c(D) * 2), z = /* @__PURE__ */ E(() => c(W) + c(D) * 2);
  const Y = () => c(R);
  var J = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), m();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ee) {
      u(ee), m();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), m();
    },
    get maskColor() {
      return f();
    },
    set maskColor(ee) {
      f(ee), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(ee) {
      p(ee), m();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(ee) {
      h(ee), m();
    },
    get width() {
      return g();
    },
    set width(ee = 200) {
      g(ee), m();
    },
    get height() {
      return v();
    },
    set height(ee = 150) {
      v(ee), m();
    },
    get pannable() {
      return b();
    },
    set pannable(ee = !0) {
      b(ee), m();
    },
    get zoomable() {
      return _();
    },
    set zoomable(ee = !0) {
      _(ee), m();
    },
    get inversePan() {
      return C();
    },
    set inversePan(ee) {
      C(ee), m();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(ee) {
      x(ee), m();
    },
    get class() {
      return k();
    },
    set class(ee) {
      k(ee), m();
    }
  }, ne = Ty(), re = ae(ne);
  {
    let ee = /* @__PURE__ */ E(() => ["svelte-flow__minimap", k()]);
    mh(re, () => ({ "--xy-minimap-background-color-props": d() })), Yo(re.lastChild, Je(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => P,
      {
        children: (ge, ce) => {
          var ie = Me(), se = ae(ie);
          {
            var ve = (me) => {
              var xe = Py();
              let de;
              var $e = K(xe);
              {
                var Ne = (De) => {
                  var je = Ey(), Ze = K(je, !0);
                  j(je), Ee(() => {
                    ke(je, "id", c($)), Ue(Ze, r() ?? c(O)["minimap.ariaLabel"]);
                  }), L(De, je);
                };
                ue($e, (De) => {
                  (r() ?? c(O)["minimap.ariaLabel"]) && De(Ne);
                });
              }
              var X = H($e);
              St(X, 17, () => c(S).nodes, (De) => De.id, (De, je) => {
                const Ze = /* @__PURE__ */ E(() => c(S).nodeLookup.get(c(je).id));
                var rt = Me(), _t = ae(rt);
                {
                  var et = (We) => {
                    const ye = /* @__PURE__ */ E(() => ur(c(Ze)));
                    {
                      let Xe = /* @__PURE__ */ E(() => A?.(c(Ze))), mt = /* @__PURE__ */ E(() => Z(c(Ze))), tt = /* @__PURE__ */ E(() => q(c(Ze)));
                      qd(We, Je(
                        {
                          get x() {
                            return c(Ze).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ze).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Ze).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Xe);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(mt);
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
                  ue(_t, (We) => {
                    c(Ze) && Wc(c(Ze)) && !c(Ze).hidden && We(et);
                  });
                }
                L(De, rt);
              });
              var Be = H(X);
              j(xe), $t(xe, (De, je) => Sy?.(De, je), () => ({
                store: c(S),
                panZoom: c(S).panZoom,
                getViewScale: Y,
                translateExtent: c(S).translateExtent,
                width: c(S).width,
                height: c(S).height,
                inversePan: C(),
                zoomStep: x(),
                pannable: b(),
                zoomable: _()
              })), Ee(
                (De) => {
                  ke(xe, "width", g()), ke(xe, "height", v()), ke(xe, "viewBox", `${c(U) ?? ""} ${c(F) ?? ""} ${c(Q) ?? ""} ${c(z) ?? ""}`), ke(xe, "aria-labelledby", c($)), de = xt(xe, "", de, De), ke(Be, "d", `M${c(U) - c(D)},${c(F) - c(D)}h${c(Q) + c(D) * 2}v${c(z) + c(D) * 2}h${-c(Q) - c(D) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
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
              c(S).panZoom && me(ve);
            });
          }
          L(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), j(re);
  }
  return L(e, ne), pe(J);
}
le(
  Ud,
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
function Jd(e, t) {
  fe(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => _e.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Fe(t, [
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
  const u = gn(), { getNodesBounds: d } = vt(), f = er("svelteflow__node_id");
  let p = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (P, S) => {
      const O = u.nodeLookup.get(S);
      return O && P.push(O), P;
    },
    []
  ))), h = /* @__PURE__ */ E(() => {
    const P = d(c(p));
    return P ? B0(P, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ E(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((P) => (P.internals.z || 5) + 1))), v = /* @__PURE__ */ E(() => u.nodes.filter((P) => P.selected).length), b = /* @__PURE__ */ E(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(v) === 1);
  var _ = {
    get nodeId() {
      return n();
    },
    set nodeId(P) {
      n(P), m();
    },
    get position() {
      return r();
    },
    set position(P = _e.Top) {
      r(P), m();
    },
    get align() {
      return o();
    },
    set align(P = "center") {
      o(P), m();
    },
    get offset() {
      return i();
    },
    set offset(P = 10) {
      i(P), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(P) {
      s(P), m();
    },
    get children() {
      return a();
    },
    set children(P) {
      a(P), m();
    }
  }, C = Me(), x = ae(C);
  {
    var k = (P) => {
      var S = Ny();
      ht(
        S,
        (A, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": A,
          ...l,
          [Cn]: Z
        }),
        [
          () => c(p).reduce((A, Z) => `${A}${Z.id} `, "").trim(),
          () => ({
            display: fd().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var O = K(S);
      st(O, () => a() ?? kt), j(S), $t(S, (A, Z) => dd?.(A, Z), () => "root"), L(P, S);
    };
    ue(x, (P) => {
      u.domNode && c(b) && c(p) && P(k);
    });
  }
  return L(e, C), pe(_);
}
le(
  Jd,
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
function Wn(e) {
  const t = /* @__PURE__ */ E(gn), n = /* @__PURE__ */ E(() => c(t).nodes), r = /* @__PURE__ */ E(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ E(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!tm(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Jl = "tinyflow-component", My = [
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
], La = [
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
class Hy {
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
    const t = document.createElement(Jl);
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
    const n = document.createElement(Jl);
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
var Vy = /* @__PURE__ */ te("<button><!></button>");
function Ve(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ Fe(t, [
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
      n(l), m();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), m();
    }
  }, s = Vy();
  ht(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = K(s);
  return st(a, () => n() ?? kt), j(s), L(e, s), pe(i);
}
le(Ve, { children: {}, primary: {} }, [], [], !0);
var zy = /* @__PURE__ */ te("<input/>");
function Gd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zy();
  ht(
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
le(Gd, {}, [], [], !0);
var Iy = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ry = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Qd(e, t) {
  fe(t, !0), Ye(e, Ry);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ Fe(t, [
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
  }, u = Iy();
  ht(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = K(u);
  wr(d);
  var f = H(d, 2);
  ut(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = H(f, 2);
  return Ve(p, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      be();
      var v = Pe();
      Ee(() => Ue(v, i())), L(h, v);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => li(d, o())), L(e, u), pe(l);
}
le(
  Qd,
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
function ut(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = jy();
  ht(
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
le(ut, {}, [], [], !0);
var Ky = /* @__PURE__ */ te("<textarea></textarea>");
function Ge(e, t) {
  fe(t, !0);
  const n = y(t, "value", 7), r = y(t, "height", 7), o = y(t, "autoHeight", 7, !0), i = y(t, "maxHeight", 7), s = y(t, "onHeightChange", 7), a = /* @__PURE__ */ Fe(t, [
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
        const b = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = b, l.style.overflowY = "hidden", s()?.(b);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let v = l.scrollHeight;
      if (!u) {
        const b = t.rows || 1, _ = getComputedStyle(l);
        u = parseFloat(_.fontSize) * 1.2 * b + parseFloat(_.paddingTop) + parseFloat(_.paddingBottom) + parseFloat(_.borderTopWidth);
      }
      if (v < u && (v = u), i()) {
        const b = typeof i() == "number" ? `${i()}px` : i();
        v > parseInt(b) ? (l.style.height = b, l.style.overflowY = "auto") : l.style.height = `${v}px`;
      } else
        l.style.height = `${v}px`;
      s()?.(l.style.height);
    }
  }
  nt(() => {
    d();
  });
  var f = {
    get value() {
      return n();
    },
    set value(v) {
      n(v), m();
    },
    get height() {
      return r();
    },
    set height(v) {
      r(v), m();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(v = !0) {
      o(v), m();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(v) {
      i(v), m();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(v) {
      s(v), m();
    }
  }, p = Ky();
  Yp(p);
  var h = (v) => {
    d(), t.oninput?.(v);
  }, g = (v) => {
    d(), t.onchange?.(v);
  };
  return ht(p, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: g,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), jt(p, (v) => l = v, () => l), L(e, p), pe(f);
}
le(
  Ge,
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
var By = /* @__PURE__ */ te('<div role="button"><!></div>'), Zy = /* @__PURE__ */ te("<div></div>");
function ef(e, t) {
  const n = fl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = fl(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
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
  ac();
  var u = Zy();
  return ht(u, () => ({
    ...r,
    class: `tf-tabs ${da(r), wt(() => r.class) ?? ""}`
  })), St(u, 5, o, Ur, (d, f, p) => {
    var h = By();
    ke(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), a(c(f), p));
    };
    var g = K(h);
    {
      var v = (_) => {
        var C = Pe();
        Ee(() => Ue(C, (c(f), wt(() => c(f).label)))), L(_, C);
      }, b = (_) => {
        var C = Me(), x = ae(C);
        st(x, () => (c(f), wt(() => c(f).label) ?? kt)), L(_, C);
      };
      ue(g, (_) => {
        c(f), wt(() => typeof c(f).label == "string") ? _(v) : _(b, !1);
      });
    }
    j(h), Ee(() => Rt(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), L(d, h);
  }), j(u), L(e, u), pe(l);
}
lr(["click", "keydown"]);
le(ef, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Wy = (e, t, n) => t(c(n)), Xy = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Yy = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Fy = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), qy = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Uy = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Jy = /* @__PURE__ */ te("<div></div>");
const Gy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function tf(e, t) {
  fe(t, !0), Ye(e, Gy);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Ut([]));
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
  }, a = Jy();
  return St(a, 21, n, Ur, (l, u, d) => {
    var f = Uy(), p = K(f);
    ke(p, "tabindex", d), p.__click = [Wy, i, u], p.__keydown = [Xy, i, u];
    var h = K(p);
    {
      var g = (P) => {
        var S = Yy(), O = K(S);
        Jn(O, {
          get target() {
            return c(u).icon;
          }
        }), j(S), L(P, S);
      };
      ue(h, (P) => {
        c(u).icon && P(g);
      });
    }
    var v = H(h, 2);
    Jn(v, {
      get target() {
        return c(u).title;
      }
    });
    var b = H(v, 2);
    j(p);
    var _ = H(p, 2);
    {
      var C = (P) => {
        var S = Fy(), O = K(S);
        Jn(O, {
          get target() {
            return c(u).description;
          }
        }), j(S), L(P, S);
      };
      ue(_, (P) => {
        c(u).description && P(C);
      });
    }
    var x = H(_, 2);
    {
      var k = (P) => {
        var S = qy(), O = K(S);
        Jn(O, {
          get target() {
            return c(u).content;
          }
        }), j(S), L(P, S);
      };
      ue(x, (P) => {
        o().includes(c(u).key) && P(k);
      });
    }
    j(f), Ee((P) => Rt(b, 1, `tf-collapse-item-title-arrow ${P ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, f);
  }), j(a), Ee(() => {
    xt(a, t.style), Rt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), pe(s);
}
lr(["click", "keydown"]);
le(tf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Jn(e, t) {
  fe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), m();
    }
  }, o = Me(), i = ae(o);
  {
    var s = (l) => {
      var u = Me(), d = ae(u);
      st(d, () => n() ?? kt), L(l, u);
    }, a = (l) => {
      var u = Me(), d = ae(u);
      ha(d, n), L(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), pe(r);
}
le(Jn, { target: {} }, [], [], !0);
var Qy = (e, t, n) => t(c(n)), e2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), t2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), n2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), r2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), o2 = /* @__PURE__ */ te("<!> <!>", 1), i2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), s2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), a2 = /* @__PURE__ */ te("<div><!></div>");
function bt(e, t) {
  fe(t, !0);
  const n = (C, x = kt) => {
    var k = Me(), P = ae(k);
    St(P, 19, x, (S, O) => `${O}_${S.value}`, (S, O) => {
      var A = n2(), Z = ae(A);
      Z.__click = [Qy, g, O];
      var q = K(Z), I = K(q);
      {
        var $ = (N) => {
          var R = e2();
          L(N, R);
        };
        ue(I, (N) => {
          c(O).children && c(O).children.length > 0 && N($);
        });
      }
      j(q);
      var T = H(q, 2);
      Jn(T, {
        get target() {
          return c(O).label;
        }
      }), j(Z);
      var w = H(Z, 2);
      {
        var M = (N) => {
          var R = t2(), B = K(R);
          n(B, () => c(O).children), j(R), L(N, R);
        };
        ue(w, (N) => {
          c(O).children && c(O).children.length > 0 && (a() || u().includes(c(O).value)) && N(M);
        });
      }
      L(S, A);
    }), L(C, k);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Fe(t, [
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
  ]), p = /* @__PURE__ */ E(() => {
    const C = [], x = (k) => {
      for (let P of k)
        i().length > 0 ? i().includes(P.value) && C.push(P) : s().includes(P.value) && C.push(P), P.children && P.children.length > 0 && x(P.children);
    };
    return x(r()), C;
  }), h;
  function g(C) {
    h?.hide(), o()?.(C);
  }
  var v = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), m();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), m();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), m();
    }
  }, b = a2();
  ht(b, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var _ = K(b);
  return jt(
    cr(_, {
      floating: (C) => {
        var x = r2(), k = K(x);
        n(k, r), j(x), L(C, x);
      },
      children: (C, x) => {
        var k = s2();
        ht(k, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var P = K(k);
        St(
          P,
          23,
          () => c(p),
          (S, O) => `${O}_${S.value}`,
          (S, O, A) => {
            var Z = Me(), q = ae(Z);
            {
              var I = (T) => {
                var w = Me(), M = ae(w);
                {
                  var N = (R) => {
                    Jn(R, {
                      get target() {
                        return c(O).label;
                      }
                    });
                  };
                  ue(M, (R) => {
                    c(A) === 0 && R(N);
                  });
                }
                L(T, w);
              }, $ = (T) => {
                var w = o2(), M = ae(w);
                Jn(M, {
                  get target() {
                    return c(O).label;
                  }
                });
                var N = H(M, 2);
                {
                  var R = (B) => {
                    var W = Pe(",");
                    L(B, W);
                  };
                  ue(N, (B) => {
                    c(A) < c(p).length - 1 && B(R);
                  });
                }
                L(T, w);
              };
              ue(q, (T) => {
                l() ? T($, !1) : T(I);
              });
            }
            L(S, Z);
          },
          (S) => {
            var O = i2(), A = K(O, !0);
            j(O), Ee(() => Ue(A, d())), L(S, O);
          }
        ), j(P), be(2), j(k), L(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), j(b), L(e, b), pe(v);
}
lr(["click"]);
le(
  bt,
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
const No = Math.min, Br = Math.max, Li = Math.round, Sn = (e) => ({
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
function Ks(e, t, n) {
  return Br(e, No(t, n));
}
function Fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Er(e) {
  return e.split("-")[0];
}
function qo(e) {
  return e.split("-")[1];
}
function nf(e) {
  return e === "x" ? "y" : "x";
}
function Da(e) {
  return e === "y" ? "height" : "width";
}
const c2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Gn(e) {
  return c2.has(Er(e)) ? "y" : "x";
}
function Ha(e) {
  return nf(Gn(e));
}
function d2(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Ha(e), i = Da(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Di(s)), [s, Di(s)];
}
function f2(e) {
  const t = Di(e);
  return [Bs(e), t, Bs(t)];
}
function Bs(e) {
  return e.replace(/start|end/g, (t) => u2[t]);
}
const Gl = ["left", "right"], Ql = ["right", "left"], p2 = ["top", "bottom"], h2 = ["bottom", "top"];
function g2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ql : Gl : t ? Gl : Ql;
    case "left":
    case "right":
      return t ? p2 : h2;
    default:
      return [];
  }
}
function v2(e, t, n, r) {
  const o = qo(e);
  let i = g2(Er(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Bs)))), i;
}
function Di(e) {
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
function rf(e) {
  return typeof e != "number" ? m2(e) : {
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
function eu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Gn(t), s = Ha(t), a = Da(s), l = Er(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (qo(t)) {
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
  } = eu(u, r, l), p = r, h = {}, g = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: b,
      fn: _
    } = a[v], {
      x: C,
      y: x,
      data: k,
      reset: P
    } = await _({
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
      [b]: {
        ...h[b],
        ...k
      }
    }, P && g <= 50 && (g++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (u = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: f
    } = eu(u, p, l)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function of(e, t) {
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
  } = Fo(t, e), g = rf(h), v = a[p ? f === "floating" ? "reference" : "floating" : f], b = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), _ = f === "floating" ? {
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
  }, k = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: _,
    offsetParent: C,
    strategy: l
  }) : _);
  return {
    top: (b.top - k.top + g.top) / x.y,
    bottom: (k.bottom - b.bottom + g.bottom) / x.y,
    left: (b.left - k.left + g.left) / x.x,
    right: (k.right - b.right + g.right) / x.x
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
    } = Fo(e, t) || {};
    if (u == null)
      return {};
    const f = rf(d), p = {
      x: n,
      y: r
    }, h = Ha(o), g = Da(h), v = await s.getDimensions(u), b = h === "y", _ = b ? "top" : "left", C = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", k = i.reference[g] + i.reference[h] - p[h] - i.floating[g], P = p[h] - i.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = S ? S[x] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(S))) && (O = a.floating[x] || i.floating[g]);
    const A = k / 2 - P / 2, Z = O / 2 - v[g] / 2 - 1, q = No(f[_], Z), I = No(f[C], Z), $ = q, T = O - v[g] - I, w = O / 2 - v[g] / 2 + A, M = Ks($, w, T), N = !l.arrow && qo(o) != null && w !== M && i.reference[g] / 2 - (w < $ ? q : I) - v[g] / 2 < 0, R = N ? w < $ ? w - $ : w - T : 0;
    return {
      [h]: p[h] + R,
      data: {
        [h]: M,
        centerOffset: w - M - R,
        ...N && {
          alignmentOffset: R
        }
      },
      reset: N
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
        flipAlignment: v = !0,
        ...b
      } = Fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Er(o), C = Gn(a), x = Er(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), P = p || (x || !v ? [Di(a)] : f2(a)), S = g !== "none";
      !p && S && P.push(...v2(a, v, g, k));
      const O = [a, ...P], A = await of(t, b), Z = [];
      let q = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Z.push(A[_]), f) {
        const w = d2(o, s, k);
        Z.push(A[w[0]], A[w[1]]);
      }
      if (q = [...q, {
        placement: o,
        overflows: Z
      }], !Z.every((w) => w <= 0)) {
        var I, $;
        const w = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = O[w];
        if (M && (!(f === "alignment" && C !== Gn(M)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        q.every((R) => Gn(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: w,
              overflows: q
            },
            reset: {
              placement: M
            }
          };
        let N = ($ = q.filter((R) => R.overflows[0] <= 0).sort((R, B) => R.overflows[1] - B.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var T;
              const R = (T = q.filter((B) => {
                if (S) {
                  const W = Gn(B.placement);
                  return W === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((W) => W > 0).reduce((W, D) => W + D, 0)]).sort((B, W) => B[1] - W[1])[0]) == null ? void 0 : T[0];
              R && (N = R);
              break;
            }
            case "initialPlacement":
              N = a;
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
}, x2 = /* @__PURE__ */ new Set(["left", "top"]);
async function _2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Er(n), a = qo(n), l = Gn(n) === "y", u = x2.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = Fo(t, e);
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
const C2 = function(e) {
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
      } = t, l = await _2(t, e);
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
}, $2 = function(e) {
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
          fn: (b) => {
            let {
              x: _,
              y: C
            } = b;
            return {
              x: _,
              y: C
            };
          }
        },
        ...l
      } = Fo(e, t), u = {
        x: n,
        y: r
      }, d = await of(t, l), f = Gn(Er(o)), p = nf(f);
      let h = u[p], g = u[f];
      if (i) {
        const b = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", C = h + d[b], x = h - d[_];
        h = Ks(C, h, x);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", C = g + d[b], x = g - d[_];
        g = Ks(C, g, x);
      }
      const v = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function es() {
  return typeof window < "u";
}
function so(e) {
  return sf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xn(e) {
  var t;
  return (t = (sf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sf(e) {
  return es() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function cn(e) {
  return es() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function Pn(e) {
  return es() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function tu(e) {
  return !es() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
const k2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Uo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !k2.has(o);
}
const S2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function E2(e) {
  return S2.has(so(e));
}
const P2 = [":popover-open", ":modal"];
function ts(e) {
  return P2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const T2 = ["transform", "translate", "scale", "rotate", "perspective"], N2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], M2 = ["paint", "layout", "strict", "content"];
function Aa(e) {
  const t = Va(), n = cn(e) ? dn(e) : e;
  return T2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || N2.some((r) => (n.willChange || "").includes(r)) || M2.some((r) => (n.contain || "").includes(r));
}
function O2(e) {
  let t = rr(e);
  for (; Pn(t) && !ro(t); ) {
    if (Aa(t))
      return t;
    if (ts(t))
      return null;
    t = rr(t);
  }
  return null;
}
function Va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const L2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ro(e) {
  return L2.has(so(e));
}
function dn(e) {
  return Zt(e).getComputedStyle(e);
}
function ns(e) {
  return cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rr(e) {
  if (so(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    tu(e) && e.host || // Fallback.
    Xn(e)
  );
  return tu(t) ? t.host : t;
}
function af(e) {
  const t = rr(e);
  return ro(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pn(t) && Uo(t) ? t : af(t);
}
function lf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = af(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Zs(s), t.concat(s, s.visualViewport || [], Uo(o) ? o : [], [])) : t.concat(o, lf(o, []));
}
function Zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function uf(e) {
  const t = dn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Li(n) !== i || Li(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function cf(e) {
  return cn(e) ? e : e.contextElement;
}
function Zr(e) {
  const t = cf(e);
  if (!Pn(t))
    return Sn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = uf(t);
  let s = (i ? Li(n.width) : n.width) / r, a = (i ? Li(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const D2 = /* @__PURE__ */ Sn(0);
function df(e) {
  const t = Zt(e);
  return !Va() || !t.visualViewport ? D2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function H2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function Mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = cf(e);
  let s = Sn(1);
  t && (r ? cn(r) && (s = Zr(r)) : s = Zr(e));
  const a = H2(i, n, r) ? df(i) : Sn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Zt(i), h = r && cn(r) ? Zt(r) : r;
    let g = p, v = Zs(g);
    for (; v && r && h !== g; ) {
      const b = Zr(v), _ = v.getBoundingClientRect(), C = dn(v), x = _.left + (v.clientLeft + parseFloat(C.paddingLeft)) * b.x, k = _.top + (v.clientTop + parseFloat(C.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, f *= b.y, l += x, u += k, g = Zt(v), v = Zs(g);
    }
  }
  return Hi({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function rs(e, t) {
  const n = ns(e).scrollLeft;
  return t ? t.left + n : Mo(Xn(e)).left + n;
}
function ff(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - rs(e, n), o = n.top + t.scrollTop;
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
  const i = o === "fixed", s = Xn(r), a = t ? ts(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Sn(1);
  const d = Sn(0), f = Pn(r);
  if ((f || !f && !i) && ((so(r) !== "body" || Uo(s)) && (l = ns(r)), Pn(r))) {
    const h = Mo(r);
    u = Zr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? ff(s, l) : Sn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function V2(e) {
  return Array.from(e.getClientRects());
}
function z2(e) {
  const t = Xn(e), n = ns(e), r = e.ownerDocument.body, o = Br(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Br(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + rs(e);
  const a = -n.scrollTop;
  return dn(r).direction === "rtl" && (s += Br(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const nu = 25;
function I2(e, t) {
  const n = Zt(e), r = Xn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Va();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = rs(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= nu && (i -= g);
  } else u <= nu && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const R2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function j2(e, t) {
  const n = Mo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Pn(e) ? Zr(e) : Sn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function ru(e, t, n) {
  let r;
  if (t === "viewport")
    r = I2(e, n);
  else if (t === "document")
    r = z2(Xn(e));
  else if (cn(t))
    r = j2(t, n);
  else {
    const o = df(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hi(r);
}
function pf(e, t) {
  const n = rr(e);
  return n === t || !cn(n) || ro(n) ? !1 : dn(n).position === "fixed" || pf(n, t);
}
function K2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = lf(e, []).filter((a) => cn(a) && so(a) !== "body"), o = null;
  const i = dn(e).position === "fixed";
  let s = i ? rr(e) : e;
  for (; cn(s) && !ro(s); ) {
    const a = dn(s), l = Aa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && R2.has(o.position) || Uo(s) && !l && pf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = rr(s);
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
  const i = [...n === "clippingAncestors" ? ts(t) ? [] : K2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = ru(t, u, o);
    return l.top = Br(d.top, l.top), l.right = No(d.right, l.right), l.bottom = No(d.bottom, l.bottom), l.left = Br(d.left, l.left), l;
  }, ru(t, s, o));
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
  } = uf(e);
  return {
    width: t,
    height: n
  };
}
function W2(e, t, n) {
  const r = Pn(t), o = Xn(t), i = n === "fixed", s = Mo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Sn(0);
  function u() {
    l.x = rs(o);
  }
  if (r || !r && !i)
    if ((so(t) !== "body" || Uo(o)) && (a = ns(t)), r) {
      const h = Mo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? ff(o, a) : Sn(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function ys(e) {
  return dn(e).position === "static";
}
function ou(e, t) {
  if (!Pn(e) || dn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Xn(e) === n && (n = n.ownerDocument.body), n;
}
function hf(e, t) {
  const n = Zt(e);
  if (ts(e))
    return n;
  if (!Pn(e)) {
    let o = rr(e);
    for (; o && !ro(o); ) {
      if (cn(o) && !ys(o))
        return o;
      o = rr(o);
    }
    return n;
  }
  let r = ou(e, t);
  for (; r && E2(r) && ys(r); )
    r = ou(r, t);
  return r && ro(r) && ys(r) && !Aa(r) ? n : r || O2(e) || n;
}
const X2 = async function(e) {
  const t = this.getOffsetParent || hf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: W2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Y2(e) {
  return dn(e).direction === "rtl";
}
const F2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: A2,
  getDocumentElement: Xn,
  getClippingRect: B2,
  getOffsetParent: hf,
  getElementRects: X2,
  getClientRects: V2,
  getDimensions: Z2,
  getScale: Zr,
  isElement: cn,
  isRTL: Y2
}, q2 = C2, U2 = $2, J2 = b2, G2 = w2, Q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: F2,
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      u = _;
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
        q2(o),
        // 手动偏移配置
        J2(i),
        //自动翻转
        U2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [G2({ element: d })] : []
      ]
    }).then(({ x: _, y: C, placement: x, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${C}px`
      }), l) {
        const { x: P, y: S } = k.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: P != null ? `${P}px` : "",
          top: S != null ? `${S}px` : "",
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
  function v(_) {
    _.stopPropagation(), p ? g() : h();
  }
  function b(_) {
    u.contains(_.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, v);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, v);
      }), document.removeEventListener("click", b);
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
function cr(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Bn(() => (a = ew({
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
    set children(v) {
      n(v), m();
    },
    get floating() {
      return r();
    },
    set floating(v) {
      r(v), m();
    },
    get placement() {
      return o();
    },
    set placement(v = "bottom") {
      o(v), m();
    }
  }, d = tw(), f = K(d), p = K(f);
  st(p, n), j(f), jt(f, (v) => i = v, () => i);
  var h = H(f, 2), g = K(h);
  return st(g, r), j(h), jt(h, (v) => s = v, () => s), j(d), L(e, d), pe(u);
}
le(cr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ie(e, t) {
  fe(t, !0);
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
  }, a = Me(), l = ae(a);
  return xh(l, () => `h${r()}`, !1, (u, d) => {
    ht(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Me(), p = ae(f);
    st(p, () => n() ?? kt), L(d, f);
  }), L(e, a), pe(s);
}
le(Ie, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const rw = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Jo(e, t) {
  fe(t, !0), Ye(e, rw);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ve(e, Je(() => n, {
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
le(Jo, {}, [], [], !0);
const ow = () => ({ deleteNode: (e) => {
  Re.removeNode(e), Re.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), jn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, iw = () => ({ copyNode: (e) => {
  const t = Re.getNode(e);
  if (t) {
    const n = jn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Re.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), at = () => er("svelteflow__node_id"), or = () => er("tinyflow_options");
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
  fe(t, !0), Ye(e, mw);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), f = y(t, "allowSettingOfCondition", 7, !0), p = y(t, "showSourceHandle", 7, !0), h = y(t, "showTargetHandle", 7, !0), g = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: _ } = vt(), C = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = ow(), { copyNode: k } = iw(), P = or(), S = () => {
    P.onNodeExecute?.(_(r()));
  };
  let O = at();
  var A = {
    get data() {
      return n();
    },
    set data(D) {
      n(D), m();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), m();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), m();
    },
    get handle() {
      return i();
    },
    set handle(D) {
      i(D), m();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(D = !0) {
      a(D), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), m();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(D = !0) {
      f(D), m();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(D = !0) {
      p(D), m();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(D = !0) {
      h(D), m();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(D) {
      g(D), m();
    }
  }, Z = vw(), q = ae(Z);
  {
    var I = (D) => {
      Jd(D, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (U, F) => {
          var Q = gw(), z = K(Q);
          {
            var Y = (ie) => {
              Ve(ie, {
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
              u() && ie(Y);
            });
          }
          var J = H(z, 2);
          {
            var ne = (ie) => {
              Ve(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (se, ve) => {
                  var me = aw();
                  L(se, me);
                },
                $$slots: { default: !0 }
              });
            };
            ue(J, (ie) => {
              l() && ie(ne);
            });
          }
          var re = H(J, 2);
          {
            var ee = (ie) => {
              Ve(ie, {
                class: "tf-node-toolbar-item",
                onclick: S,
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
          var ge = H(re, 2);
          {
            var ce = (ie) => {
              cr(ie, {
                placement: "bottom",
                floating: (se) => {
                  var ve = pw(), me = K(ve), xe = H(K(me));
                  ut(xe, {
                    style: "width: 100%;",
                    onchange: (et) => {
                      const We = et.target.value;
                      b(O, { title: We });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(me);
                  var de = H(me, 2), $e = H(K(de));
                  Ge($e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (et) => {
                      const We = et.target.value;
                      b(O, { description: We });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(de);
                  var Ne = H(de, 2);
                  {
                    var X = (et) => {
                      var We = uw(), ye = H(K(We));
                      Ge(ye, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const mt = Xe.target.value;
                          b(O, { condition: mt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(We), L(et, We);
                    };
                    ue(Ne, (et) => {
                      f() && et(X);
                    });
                  }
                  var Be = H(Ne, 2), De = H(K(Be), 2);
                  wr(De), De.__change = [cw, b, O], j(Be);
                  var je = H(Be, 2), Ze = H(K(je), 2);
                  wr(Ze), Ze.__change = [dw, b, O], j(je);
                  var rt = H(je, 2);
                  {
                    var _t = (et) => {
                      var We = fw(), ye = ae(We), Xe = H(K(ye));
                      {
                        let dt = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                        Ge(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mn) => {
                            const yn = mn.target.value;
                            b(O, { loopIntervalMs: yn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      j(ye);
                      var mt = H(ye, 2), tt = H(K(mt));
                      {
                        let dt = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                        Ge(tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mn) => {
                            const yn = mn.target.value;
                            b(O, { maxLoopCount: yn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      j(mt);
                      var Ct = H(mt, 2), ct = H(K(Ct));
                      Ge(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const mn = dt.target.value;
                          b(O, { loopBreakCondition: mn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), j(Ct), L(et, We);
                    };
                    ue(rt, (et) => {
                      n().loopEnable && et(_t);
                    });
                  }
                  j(ve), Ee(() => {
                    al(De, !!n().async), al(Ze, !!n().loopEnable);
                  }), L(se, ve);
                },
                children: (se, ve) => {
                  Ve(se, {
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
          j(Q), L(U, Q);
        },
        $$slots: { default: !0 }
      });
    };
    ue(q, (D) => {
      (a() || l() || u()) && D(I);
    });
  }
  var $ = H(q, 2), T = H(K($), 2), w = K(T);
  tf(w, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return v;
    },
    onChange: (D, U) => {
      b(r(), { expand: U?.includes("key") }), g()?.(U?.includes("key") ? "key" : "");
    }
  }), j(T), j($);
  var M = H($, 2);
  {
    var N = (D) => {
      nr(D, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(M, (D) => {
      h() && D(N);
    });
  }
  var R = H(M, 2);
  {
    var B = (D) => {
      nr(D, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(R, (D) => {
      p() && D(B);
    });
  }
  var W = H(R, 2);
  return st(W, () => i() ?? kt), L(e, Z), pe(A);
}
lr(["change"]);
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
const _w = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function gf(e, t) {
  fe(t, !0), Ye(e, _w);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = at(), i = Wn(o), s = /* @__PURE__ */ E(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = vt(), l = (A, Z) => {
    a(o, (q) => {
      let I = q.data.parameters;
      return I[r()][A] = Z, { parameters: I };
    });
  }, u = (A, Z) => {
    const q = Z.target.value;
    l(A, q);
  }, d = (A) => {
    const Z = A.target.value;
    l("name", Z);
  }, f = (A) => {
    const Z = A.target.checked;
    l("required", Z);
  }, p = (A) => {
    const Z = A.value;
    l("formType", Z);
  }, h = (A) => {
    const Z = A.value;
    l("contentType", Z);
  };
  let g;
  const v = () => {
    a(o, (A) => {
      let Z = A.data.parameters;
      return Z.splice(r(), 1), { parameters: [...Z] };
    }), g?.hide();
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter(A) {
      n(A), m();
    },
    get index() {
      return r();
    },
    set index(A) {
      r(A), m();
    }
  }, _ = xw(), C = ae(_), x = K(C);
  ut(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), j(C);
  var k = H(C, 2), P = K(k);
  Gd(P, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), j(k);
  var S = H(k, 2), O = K(S);
  return jt(
    cr(O, {
      placement: "bottom",
      floating: (A) => {
        var Z = ww(), q = K(Z), I = H(K(q));
        {
          let z = /* @__PURE__ */ E(() => c(s).contentType ? [c(s).contentType] : []);
          bt(I, {
            get items() {
              return La;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(z);
            },
            onSelect: h
          });
        }
        j(q);
        var $ = H(q, 2), T = H(K($));
        {
          let z = /* @__PURE__ */ E(() => c(s).formType ? [c(s).formType] : []);
          bt(T, {
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
        j($);
        var w = H($, 2);
        {
          var M = (z) => {
            var Y = yw(), J = H(K(Y));
            {
              let ne = /* @__PURE__ */ E(() => c(s).enums?.join(`
`));
              Ge(J, {
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
            j(Y), L(z, Y);
          };
          ue(w, (z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && z(M);
          });
        }
        var N = H(w, 2), R = H(K(N));
        Ge(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (z) => {
            u("formLabel", z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), j(N);
        var B = H(N, 2), W = H(K(B));
        Ge(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            u("formDescription", z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), j(B);
        var D = H(B, 2), U = H(K(D));
        Ge(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            u("formPlaceholder", z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), j(D);
        var F = H(D, 2), Q = K(F);
        Ve(Q, {
          onclick: v,
          children: (z, Y) => {
            be();
            var J = Pe("删除");
            L(z, J);
          },
          $$slots: { default: !0 }
        }), j(F), j(Z), L(A, Z);
      },
      children: (A, Z) => {
        Ve(A, {
          class: "input-btn-more",
          children: (q, I) => {
            var $ = bw();
            L(q, $);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => g = A,
    () => g
  ), j(S), L(e, _), pe(b);
}
le(gf, { parameter: {}, index: {} }, [], [], !0);
var Cw = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), $w = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), kw = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Sw = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function vf(e, t) {
  fe(t, !0), Ye(e, Sw);
  let n = at(), r = Wn(n), o = /* @__PURE__ */ E(() => [...r?.current?.data?.parameters || []]);
  var i = kw(), s = K(i);
  {
    var a = (u) => {
      var d = Cw();
      be(4), L(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = H(s, 2);
  St(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      gf(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = $w();
      L(u, d);
    }
  ), j(i), L(e, i), pe();
}
le(vf, {}, [], [], !0);
const Oo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = jn()), Oo(t.children);
}), e), vn = () => {
  const { updateNodeData: e } = vt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Oo(s?.children)) : Oo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: jn()
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
var Ew = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Pw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Nw = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function mf(e, t) {
  fe(t, !0), Ye(e, Nw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return en(e, Je(() => r, {
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
      var u = Tw(), d = ae(u), f = K(d);
      Ie(f, {
        level: 3,
        children: (g, v) => {
          be();
          var b = Pe("输入参数");
          L(g, b);
        },
        $$slots: { default: !0 }
      });
      var p = H(f, 2);
      Ve(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, v) => {
          var b = Pw();
          L(g, b);
        },
        $$slots: { default: !0 }
      }), j(d);
      var h = H(d, 2);
      vf(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe(s);
}
le(mf, { data: {} }, [], [], !0);
const yf = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), yf(e, r.source, n));
}, wf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: wf(r.children, t + "." + r.name, n)
})), iu = (e, t, n) => {
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
          children: wf(r, e.id, t)
        };
    }
  }
}, bf = (e = !1) => {
  const t = at(), n = Wn(t), r = /* @__PURE__ */ E(gn), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = iu(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      yf(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = iu(f, p, u);
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
function xf(e, t) {
  fe(t, !0), Ye(e, Dw), Bn(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = at(), l = Wn(a), u = /* @__PURE__ */ E(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = vt(), f = (T, w) => {
    d(a, (M) => {
      let N = M.data?.[o()];
      return N[r()] = { ...N[r()], [T]: w }, { [o()]: N };
    });
  }, p = (T, w) => {
    const M = w.target.value;
    f(T, M);
  }, h = (T) => {
    const w = T.value;
    f("ref", w);
  }, g = (T) => {
    const w = T.value;
    f("refType", w);
  }, v = (T) => {
    const w = T.value;
    f("contentType", w);
  };
  let b;
  const _ = () => {
    d(a, (T) => {
      let w = T.data?.[o()];
      return w.splice(r(), 1), { [o()]: [...w] };
    }), b?.hide();
  };
  let C = bf(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), m();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), m();
    }
  }, k = Lw(), P = ae(k), S = K(P);
  {
    let T = /* @__PURE__ */ E(() => c(u).nameDisabled === !0);
    ut(S, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(T);
      },
      oninput: (w) => p("name", w)
    });
  }
  j(P);
  var O = H(P, 2), A = K(O);
  {
    var Z = (T) => {
      ut(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (w) => p("value", w)
      });
    }, q = (T) => {
      var w = Me(), M = ae(w);
      {
        var N = (R) => {
          {
            let B = /* @__PURE__ */ E(() => [c(u).ref]);
            bt(R, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(B);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ue(
          M,
          (R) => {
            c(u).refType !== "input" && R(N);
          },
          !0
        );
      }
      L(T, w);
    };
    ue(A, (T) => {
      c(u).refType === "fixed" ? T(Z) : T(q, !1);
    });
  }
  j(O);
  var I = H(O, 2), $ = K(I);
  return jt(
    cr($, {
      placement: "bottom",
      floating: (T) => {
        var w = Ow(), M = K(w), N = H(K(M));
        {
          let Y = /* @__PURE__ */ E(() => c(u).refType ? [c(u).refType] : []);
          bt(N, {
            get items() {
              return Oy;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(Y);
            },
            onSelect: g
          });
        }
        j(M);
        var R = H(M, 2);
        {
          var B = (Y) => {
            var J = Mw(), ne = H(K(J));
            {
              let re = /* @__PURE__ */ E(() => c(u).contentType ? [c(u).contentType] : []);
              bt(ne, {
                get items() {
                  return La;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: v
              });
            }
            j(J), L(Y, J);
          };
          ue(R, (Y) => {
            s() && Y(B);
          });
        }
        var W = H(R, 2), D = H(K(W));
        Ge(D, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            p("defaultValue", Y);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), j(W);
        var U = H(W, 2), F = H(K(U));
        Ge(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            p("description", Y);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), j(U);
        var Q = H(U, 2), z = K(Q);
        Ve(z, {
          onclick: _,
          children: (Y, J) => {
            be();
            var ne = Pe("删除");
            L(Y, ne);
          },
          $$slots: { default: !0 }
        }), j(Q), j(w), L(T, w);
      },
      children: (T, w) => {
        Jo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), j(I), L(e, k), pe(x);
}
le(
  xf,
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
var Hw = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Aw = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Vw = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const zw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Ot(e, t) {
  fe(t, !0), Ye(e, zw);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = at(), a = Wn(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = Vw(), f = K(d);
  {
    var p = (g) => {
      var v = Hw();
      be(4), L(g, v);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = H(f, 2);
  return St(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, v, b) => {
      xf(g, {
        get parameter() {
          return c(v);
        },
        get index() {
          return c(b);
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
      var v = Aw(), b = K(v, !0);
      j(v), Ee(() => Ue(b, n())), L(g, v);
    }
  ), j(d), L(e, d), pe(u);
}
le(
  Ot,
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
const Kw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function _f(e, t) {
  fe(t, !0), Ye(e, Kw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return en(e, Je(
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
        var u = jw(), d = ae(u), f = K(d);
        Ie(f, {
          level: 3,
          children: (g, v) => {
            be();
            var b = Pe("输出参数");
            L(g, b);
          },
          $$slots: { default: !0 }
        });
        var p = H(f, 2);
        Ve(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, v) => {
            var b = Rw();
            L(g, b);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = H(d, 2);
        Ot(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(s);
}
le(_f, { data: {} }, [], [], !0);
const ws = (e) => JSON.parse(JSON.stringify(e));
var Bw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Zw = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Ww = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Xw = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Yw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Cf(e, t) {
  fe(t, !0), Ye(e, Yw);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = at(), a = Wn(s), l = /* @__PURE__ */ E(() => {
    let $ = a?.current?.data?.[o()], T;
    if ($ && r().length > 0) {
      let w = $;
      for (let M = 0; M < r().length; M++) {
        const N = r()[M];
        M == r().length - 1 ? T = w[N] : w = w[N].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = vt(), d = ($, T) => {
    u(s, (w) => {
      const M = w.data?.[o()];
      if (M && r().length > 0) {
        let N = M;
        for (let R = 0; R < r().length; R++) {
          const B = r()[R];
          R == r().length - 1 ? N[B] = { ...N[B], [$]: T } : N = N[B].children;
        }
      }
      return { [o()]: [...ws(M)] };
    });
  }, f = ($, T) => {
    const w = T.target.value;
    d($, w);
  }, p = ($) => {
    const T = $.value;
    d("dataType", T);
  };
  let h;
  const g = () => {
    u(s, ($) => {
      let T = $.data?.[o()];
      if (T && r().length > 0) {
        let w = T;
        for (let M = 0; M < r().length; M++) {
          const N = r()[M];
          M == r().length - 1 ? w.splice(N, 1) : w = w[N].children;
        }
      }
      return { [o()]: [...ws(T)] };
    }), h?.hide();
  }, v = () => {
    u(s, ($) => {
      let T = $.data?.[o()];
      if (T && r().length > 0) {
        let w = T;
        for (let M = 0; M < r().length; M++) {
          const N = r()[M];
          M == r().length - 1 ? w[N].children ? w[N].children.push({ id: jn(), name: "newParam", dataType: "String" }) : w[N].children = [{ id: jn(), name: "newParam", dataType: "String" }] : w = w[N].children;
        }
      }
      return { [o()]: [...ws(T)] };
    });
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter($) {
      n($), m();
    },
    get position() {
      return r();
    },
    set position($) {
      r($), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName($) {
      o($), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder($ = "请输入参数值") {
      i($), m();
    }
  }, _ = Xw(), C = ae(_), x = K(C);
  {
    var k = ($) => {
      var T = Me(), w = ae(T);
      St(w, 17, r, Ur, (M, N) => {
        be();
        var R = Pe(" ");
        L(M, R);
      }), L($, T);
    };
    ue(x, ($) => {
      r().length > 1 && $(k);
    });
  }
  var P = H(x, 2);
  {
    let $ = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    ut(P, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        f("name", T);
      },
      get disabled() {
        return c($);
      }
    });
  }
  j(C);
  var S = H(C, 2), O = K(S);
  {
    let $ = /* @__PURE__ */ E(() => c(l).dataTypeItems || My), T = /* @__PURE__ */ E(() => c(l).dataType ? [c(l).dataType] : []), w = /* @__PURE__ */ E(() => c(l).dataTypeDisabled === !0);
    bt(O, {
      get items() {
        return c($);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(T);
      },
      get disabled() {
        return c(w);
      },
      onSelect: p
    });
  }
  var A = H(O, 2);
  {
    var Z = ($) => {
      Ve($, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: v,
        children: (T, w) => {
          var M = Bw();
          L(T, M);
        },
        $$slots: { default: !0 }
      });
    };
    ue(A, ($) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && $(Z);
    });
  }
  j(S);
  var q = H(S, 2), I = K(q);
  return jt(
    cr(I, {
      placement: "bottom",
      floating: ($) => {
        var T = Ww(), w = K(T), M = H(K(w));
        {
          let D = /* @__PURE__ */ E(() => c(l).defaultValue || "");
          Ge(M, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (U) => {
              f("defaultValue", U);
            }
          });
        }
        j(w);
        var N = H(w, 2), R = H(K(N));
        {
          let D = /* @__PURE__ */ E(() => c(l).description || "");
          Ge(R, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (U) => {
              f("description", U);
            }
          });
        }
        j(N);
        var B = H(N, 2);
        {
          var W = (D) => {
            var U = Zw(), F = K(U);
            Ve(F, {
              onclick: g,
              children: (Q, z) => {
                be();
                var Y = Pe("删除");
                L(Q, Y);
              },
              $$slots: { default: !0 }
            }), j(U), L(D, U);
          };
          ue(B, (D) => {
            c(l).deleteDisabled !== !0 && D(W);
          });
        }
        j(T), L($, T);
      },
      children: ($, T) => {
        Jo($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), j(q), L(e, _), pe(b);
}
le(
  Cf,
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
var Fw = /* @__PURE__ */ te("<!> <!>", 1), qw = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Uw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Jw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Gw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Yn(e, t) {
  fe(t, !0), Ye(e, Gw);
  const n = (g, v = kt, b = kt) => {
    var _ = Me(), C = ae(_);
    St(
      C,
      19,
      v,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, k, P) => {
        var S = Fw(), O = ae(S);
        {
          let q = /* @__PURE__ */ E(() => [...b(), c(P)]);
          Cf(O, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(q);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var A = H(O, 2);
        {
          var Z = (q) => {
            {
              let I = /* @__PURE__ */ E(() => [...b(), c(P)]);
              n(q, () => c(k).children, () => c(I));
            }
          };
          ue(A, (q) => {
            c(k).children && q(Z);
          });
        }
        L(x, S);
      },
      (x) => {
        var k = Me(), P = ae(k);
        {
          var S = (O) => {
            var A = qw(), Z = K(A, !0);
            j(A), Ee(() => Ue(Z, r())), L(O, A);
          };
          ue(P, (O) => {
            b().length === 0 && O(S);
          });
        }
        L(x, k);
      }
    ), L(g, _);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = at(), a = Wn(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = Jw(), f = K(d);
  {
    var p = (g) => {
      var v = Uw();
      be(4), L(g, v);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = H(f, 2);
  return n(h, () => c(l) || [], () => []), j(d), L(e, d), pe(u);
}
le(Yn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), rb = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), ob = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), ib = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), sb = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const ab = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function $f(e, t) {
  fe(t, !0), Ye(e, ab);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), s = or();
  let a = /* @__PURE__ */ Le(Ut([]));
  Bn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = vt(), u = (f) => {
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
  nt(() => {
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
  return en(e, Je(
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
        var h = sb(), g = ae(h), v = K(g);
        Ie(v, {
          level: 3,
          children: (B, W) => {
            be();
            var D = Pe("输入参数");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var b = H(v, 2);
        Ve(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, W) => {
            var D = eb();
            L(B, D);
          },
          $$slots: { default: !0 }
        }), j(g);
        var _ = H(g, 2);
        Ot(_, {});
        var C = H(_, 2), x = K(C);
        Ie(x, {
          level: 3,
          children: (B, W) => {
            be();
            var D = Pe("图片识别");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var k = H(x, 2);
        Ve(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (B, W) => {
            var D = tb();
            L(B, D);
          },
          $$slots: { default: !0 }
        }), j(C);
        var P = H(C, 2);
        Ot(P, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var S = H(P, 2);
        Ie(S, {
          level: 3,
          mt: "10px",
          children: (B, W) => {
            be();
            var D = Pe("模型设置");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var O = H(S, 4), A = K(O);
        {
          let B = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
          bt(A, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (W) => {
              const D = W.value;
              l(o, () => ({ llmId: D }));
            },
            get value() {
              return c(B);
            }
          });
        }
        var Z = H(A, 2);
        cr(Z, {
          placement: "bottom",
          floating: (B) => {
            var W = ib(), D = H(K(W), 2), U = K(D), F = K(U), Q = K(F);
            j(F);
            var z = H(F, 2);
            wr(z), z.__input = [nb, l, o], j(U), j(D);
            var Y = H(D, 2), J = K(Y), ne = K(J), re = K(ne);
            j(ne);
            var ee = H(ne, 2);
            wr(ee), ee.__input = [rb, l, o], j(J), j(Y);
            var ge = H(Y, 2), ce = K(ge), ie = K(ce), se = K(ie);
            j(ie);
            var ve = H(ie, 2);
            wr(ve), ve.__input = [ob, l, o], j(ce), j(ge), j(W), Ee(() => {
              Ue(Q, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), li(z, n().temperature ?? 0.7), Ue(re, `Top P: ${n().topP ?? 0.9 ?? ""}`), li(ee, n().topP ?? 0.9), Ue(se, `Top K: ${n().topK ?? 50 ?? ""}`), li(ve, n().topK ?? 50);
            }), L(B, W);
          },
          children: (B, W) => {
            Jo(B, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), j(O);
        var q = H(O, 4), I = K(q);
        {
          let B = /* @__PURE__ */ E(() => n().systemPrompt || "");
          Ge(I, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (W) => {
              l(o, { systemPrompt: W.target.value });
            }
          });
        }
        j(q);
        var $ = H(q, 4), T = K($);
        {
          let B = /* @__PURE__ */ E(() => n().userPrompt || "");
          Ge(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (W) => {
              l(o, { userPrompt: W.target.value });
            }
          });
        }
        j($);
        var w = H($, 2), M = K(w);
        Ie(M, {
          level: 3,
          children: (B, W) => {
            be();
            var D = Pe("输出参数");
            L(B, D);
          },
          $$slots: { default: !0 }
        });
        var N = H(M, 2);
        {
          let B = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
          bt(N, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (W) => {
              u(W.value);
            },
            get value() {
              return c(B);
            }
          });
        }
        j(w);
        var R = H(w, 2);
        Yn(R, {}), L(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(d);
}
lr(["input"]);
le($f, { data: {} }, [], [], !0);
var lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ub = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), db = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const fb = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kf(e, t) {
  fe(t, !0), Ye(e, fb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Bn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = at(), { addParameter: i } = vn(), { updateNodeData: s } = vt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return en(e, Je(
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
        var f = db(), p = ae(f), h = K(p);
        Ie(h, {
          level: 3,
          children: (Z, q) => {
            be();
            var I = Pe("输入参数");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var g = H(h, 2);
        Ve(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, q) => {
            var I = ub();
            L(Z, I);
          },
          $$slots: { default: !0 }
        }), j(p);
        var v = H(p, 2);
        Ot(v, {});
        var b = H(v, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (Z, q) => {
            be();
            var I = Pe("代码");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var _ = H(b, 4), C = K(_);
        {
          let Z = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
          bt(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (q) => {
              const I = q.value;
              s(o, () => ({ engine: I }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        j(_);
        var x = H(_, 4), k = K(x);
        {
          let Z = /* @__PURE__ */ E(() => n().code || "");
          Ge(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (q) => {
              s(o, () => ({ code: q.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        j(x);
        var P = H(x, 2), S = K(P);
        Ie(S, {
          level: 3,
          mt: "10px",
          children: (Z, q) => {
            be();
            var I = Pe("输出参数");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var O = H(S, 2);
        Ve(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, q) => {
            var I = cb();
            L(Z, I);
          },
          $$slots: { default: !0 }
        }), j(P);
        var A = H(P, 2);
        Yn(A, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(kf, { data: {} }, [], [], !0);
var pb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const vb = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Sf(e, t) {
  fe(t, !0), Ye(e, vb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), { updateNodeData: s } = vt();
  nt(() => {
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
  return en(e, Je(
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
        var d = gb(), f = ae(d), p = K(f);
        Ie(p, {
          level: 3,
          children: (P, S) => {
            be();
            var O = Pe("输入参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var h = H(p, 2);
        Ve(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, S) => {
            var O = hb();
            L(P, O);
          },
          $$slots: { default: !0 }
        }), j(f);
        var g = H(f, 2);
        Ot(g, {});
        var v = H(g, 2);
        Ie(v, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (P, S) => {
            be();
            var O = Pe("模板内容");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var b = H(v, 2), _ = K(b);
        {
          let P = /* @__PURE__ */ E(() => n().template || "");
          Ge(_, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ template: S.target.value }));
            },
            get value() {
              return c(P);
            }
          });
        }
        j(b);
        var C = H(b, 2), x = K(C);
        Ie(x, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            be();
            var O = Pe("输出参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        }), j(C);
        var k = H(C, 2);
        Yn(k, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Sf, { data: {} }, [], [], !0);
var mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), yb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bb = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _b = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Cb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $b = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), kb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Sb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Tb = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Ef(e, t) {
  fe(t, !0), Ye(e, Tb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Bn(() => {
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
  ], i = at(), { addParameter: s } = vn(), { updateNodeData: a } = vt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return en(e, Je(
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
        var f = Pb(), p = ae(f), h = K(p);
        Ie(h, {
          level: 3,
          children: (z, Y) => {
            be();
            var J = Pe("输入参数");
            L(z, J);
          },
          $$slots: { default: !0 }
        });
        var g = H(h, 2);
        Ve(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (z, Y) => {
            var J = yb();
            L(z, J);
          },
          $$slots: { default: !0 }
        }), j(p);
        var v = H(p, 2);
        Ot(v, {});
        var b = H(v, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (z, Y) => {
            be();
            var J = Pe("URL 地址");
            L(z, J);
          },
          $$slots: { default: !0 }
        });
        var _ = H(b, 2), C = K(_), x = K(C);
        {
          let z = /* @__PURE__ */ E(() => n().method ? [n().method] : ["get"]);
          bt(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (Y) => {
              const J = Y.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(C);
        var k = H(C, 2), P = K(k);
        {
          let z = /* @__PURE__ */ E(() => n().url || "");
          ut(P, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (Y) => {
              a(i, () => ({ url: Y.target.value }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(k), j(_);
        var S = H(_, 2), O = K(S);
        Ie(O, {
          level: 3,
          children: (z, Y) => {
            be();
            var J = Pe("Http 头信息");
            L(z, J);
          },
          $$slots: { default: !0 }
        });
        var A = H(O, 2);
        Ve(A, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (z, Y) => {
            var J = wb();
            L(z, J);
          },
          $$slots: { default: !0 }
        }), j(S);
        var Z = H(S, 2);
        Ot(Z, { dataKeyName: "headers" });
        var q = H(Z, 2);
        {
          var I = (z) => {
            var Y = bb(), J = ae(Y);
            Ie(J, {
              level: 3,
              mt: "10px",
              children: ($e, Ne) => {
                be();
                var X = Pe("Body");
                L($e, X);
              },
              $$slots: { default: !0 }
            });
            var ne = H(J, 2), re = K(ne), ee = K(re);
            {
              let $e = /* @__PURE__ */ E(() => !n().bodyType || n().bodyType === "");
              ut(ee, {
                type: "radio",
                value: "",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), j(re);
            var ge = H(re, 2), ce = K(ge);
            {
              let $e = /* @__PURE__ */ E(() => n().bodyType === "form-data");
              ut(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), j(ge);
            var ie = H(ge, 2), se = K(ie);
            {
              let $e = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
              ut(se, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), j(ie);
            var ve = H(ie, 2), me = K(ve);
            {
              let $e = /* @__PURE__ */ E(() => n().bodyType === "json");
              ut(me, {
                type: "radio",
                value: "json",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), j(ve);
            var xe = H(ve, 2), de = K(xe);
            {
              let $e = /* @__PURE__ */ E(() => n().bodyType === "raw");
              ut(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), j(xe), j(ne), L(z, Y);
          };
          ue(q, (z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && z(I);
          });
        }
        var $ = H(q, 2);
        {
          var T = (z) => {
            var Y = _b(), J = ae(Y), ne = K(J);
            Ie(ne, {
              level: 3,
              children: (ge, ce) => {
                be();
                var ie = Pe("参数");
                L(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = H(ne, 2);
            Ve(re, {
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
            }), j(J);
            var ee = H(J, 2);
            Ot(ee, { dataKeyName: "formData" }), L(z, Y);
          };
          ue($, (z) => {
            n().bodyType === "form-data" && z(T);
          });
        }
        var w = H($, 2);
        {
          var M = (z) => {
            var Y = $b(), J = ae(Y), ne = K(J);
            Ie(ne, {
              level: 3,
              children: (ge, ce) => {
                be();
                var ie = Pe("Body 参数");
                L(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = H(ne, 2);
            Ve(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, ce) => {
                var ie = Cb();
                L(ge, ie);
              },
              $$slots: { default: !0 }
            }), j(J);
            var ee = H(J, 2);
            Ot(ee, { dataKeyName: "formUrlencoded" }), L(z, Y);
          };
          ue(w, (z) => {
            n().bodyType === "x-www-form-urlencoded" && z(M);
          });
        }
        var N = H(w, 2);
        {
          var R = (z) => {
            var Y = kb(), J = K(Y);
            Ge(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), j(Y), L(z, Y);
          };
          ue(N, (z) => {
            n().bodyType === "json" && z(R);
          });
        }
        var B = H(N, 2);
        {
          var W = (z) => {
            var Y = Sb(), J = K(Y);
            Ge(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), j(Y), L(z, Y);
          };
          ue(B, (z) => {
            n().bodyType === "raw" && z(W);
          });
        }
        var D = H(B, 2), U = K(D);
        Ie(U, {
          level: 3,
          mt: "10px",
          children: (z, Y) => {
            be();
            var J = Pe("输出参数");
            L(z, J);
          },
          $$slots: { default: !0 }
        });
        var F = H(U, 2);
        Ve(F, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (z, Y) => {
            var J = Eb();
            L(z, J);
          },
          $$slots: { default: !0 }
        }), j(D);
        var Q = H(D, 2);
        Yn(Q, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(Ef, { data: {} }, [], [], !0);
var Nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ob = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Lb = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Pf(e, t) {
  fe(t, !0), Ye(e, Lb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), s = or();
  let a = /* @__PURE__ */ Le(Ut([]));
  Bn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = vt();
  nt(() => {
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
  return en(e, Je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Nb();
        L(d, f);
      },
      children: (d, f) => {
        var p = Ob(), h = ae(p), g = K(h);
        Ie(g, {
          level: 3,
          children: (I, $) => {
            be();
            var T = Pe("输入参数");
            L(I, T);
          },
          $$slots: { default: !0 }
        });
        var v = H(g, 2);
        Ve(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, $) => {
            var T = Mb();
            L(I, T);
          },
          $$slots: { default: !0 }
        }), j(h);
        var b = H(h, 2);
        Ot(b, {});
        var _ = H(b, 2);
        Ie(_, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            be();
            var T = Pe("知识库设置");
            L(I, T);
          },
          $$slots: { default: !0 }
        });
        var C = H(_, 4), x = K(C);
        {
          let I = /* @__PURE__ */ E(() => n().knowledgeId ? [n().knowledgeId] : []);
          bt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: ($) => {
              const T = $.value;
              l(o, () => ({ knowledgeId: T }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(C);
        var k = H(C, 4), P = K(k);
        ut(P, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const $ = I.target.value;
            l(o, () => ({ keyword: $ }));
          }
        }), j(k);
        var S = H(k, 4), O = K(S);
        {
          let I = /* @__PURE__ */ E(() => n().limit || "");
          ut(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: ($) => {
              const T = $.target.value;
              l(o, () => ({ limit: T }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(S);
        var A = H(S, 2), Z = K(A);
        Ie(Z, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            be();
            var T = Pe("输出参数");
            L(I, T);
          },
          $$slots: { default: !0 }
        }), j(A);
        var q = H(A, 2);
        Yn(q, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Pf, { data: {} }, [], [], !0);
var Db = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ab = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Vb = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Tf(e, t) {
  fe(t, !0), Ye(e, Vb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), s = or();
  let a = /* @__PURE__ */ Le(Ut([]));
  Bn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = vt();
  nt(() => {
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
  return en(e, Je(
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
        var p = Ab(), h = ae(p), g = K(h);
        Ie(g, {
          level: 3,
          children: (I, $) => {
            be();
            var T = Pe("输入参数");
            L(I, T);
          },
          $$slots: { default: !0 }
        });
        var v = H(g, 2);
        Ve(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, $) => {
            var T = Hb();
            L(I, T);
          },
          $$slots: { default: !0 }
        }), j(h);
        var b = H(h, 2);
        Ot(b, {});
        var _ = H(b, 2);
        Ie(_, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            be();
            var T = Pe("搜索引擎设置");
            L(I, T);
          },
          $$slots: { default: !0 }
        });
        var C = H(_, 4), x = K(C);
        {
          let I = /* @__PURE__ */ E(() => n().engine ? [n().engine] : []);
          bt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: ($) => {
              const T = $.value;
              l(o, () => ({ engine: T }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(C);
        var k = H(C, 4), P = K(k);
        ut(P, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const $ = I.target.value;
            l(o, () => ({ keyword: $ }));
          }
        }), j(k);
        var S = H(k, 4), O = K(S);
        ut(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const $ = I.target.value;
            l(o, () => ({ limit: $ }));
          }
        }), j(S);
        var A = H(S, 2), Z = K(A);
        Ie(Z, {
          level: 3,
          mt: "10px",
          children: (I, $) => {
            be();
            var T = Pe("输出参数");
            L(I, T);
          },
          $$slots: { default: !0 }
        }), j(A);
        var q = H(A, 2);
        Yn(q, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Tf, { data: {} }, [], [], !0);
var zb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ib = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rb = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const jb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Nf(e, t) {
  fe(t, !0), Ye(e, jb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn();
  nt(() => {
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
  return en(e, Je(
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
        nr(a, {
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
        var u = Rb(), d = ae(u), f = K(d);
        Ie(f, {
          level: 3,
          children: (_, C) => {
            be();
            var x = Pe("循环变量");
            L(_, x);
          },
          $$slots: { default: !0 }
        }), j(d);
        var p = H(d, 2);
        Ot(p, { dataKeyName: "loopVars" });
        var h = H(p, 2), g = K(h);
        Ie(g, {
          level: 3,
          children: (_, C) => {
            be();
            var x = Pe("输出参数");
            L(_, x);
          },
          $$slots: { default: !0 }
        });
        var v = H(g, 2);
        Ve(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (_, C) => {
            var x = Ib();
            L(_, x);
          },
          $$slots: { default: !0 }
        }), j(h);
        var b = H(h, 2);
        Ot(b, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe(s);
}
le(Nf, { data: {} }, [], [], !0);
var Kb = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Bb = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Zb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Mf(e, t) {
  fe(t, !0), Ye(e, Zb);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = at(), a = Wn(s), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = vt(), d = ($, T) => {
    u(s, (w) => {
      let M = w.data?.[o()];
      return M[r()] = { ...M[r()], [$]: T }, { [o()]: M };
    });
  }, f = ($, T) => {
    const w = T.target.value;
    d($, w);
  }, p = ($) => {
    const T = $.value;
    d("ref", T);
  }, h = ($) => {
    const T = $.value;
    d("formType", T);
  }, g = ($) => {
    const T = $.value;
    d("contentType", T);
  };
  let v;
  const b = () => {
    u(s, ($) => {
      let T = $.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), v?.hide();
  };
  let _ = bf(i());
  var C = {
    get parameter() {
      return n();
    },
    set parameter($) {
      n($), m();
    },
    get index() {
      return r();
    },
    set index($) {
      r($), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName($) {
      o($), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly($) {
      i($), m();
    }
  }, x = Bb(), k = ae(x), P = K(k);
  {
    let $ = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    ut(P, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c($);
      },
      oninput: (T) => f("name", T)
    });
  }
  j(k);
  var S = H(k, 2), O = K(S);
  {
    var A = ($) => {
      ut($, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => f("value", T)
      });
    }, Z = ($) => {
      var T = Me(), w = ae(T);
      {
        var M = (N) => {
          {
            let R = /* @__PURE__ */ E(() => [c(l).ref]);
            bt(N, {
              get items() {
                return _.current;
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
          w,
          (N) => {
            c(l).refType !== "input" && N(M);
          },
          !0
        );
      }
      L($, T);
    };
    ue(O, ($) => {
      c(l).refType === "fixed" ? $(A) : $(Z, !1);
    });
  }
  j(S);
  var q = H(S, 2), I = K(q);
  return jt(
    cr(I, {
      placement: "bottom",
      floating: ($) => {
        var T = Kb(), w = K(T), M = H(K(w));
        {
          let z = /* @__PURE__ */ E(() => c(l).contentType ? [c(l).contentType] : []);
          bt(M, {
            get items() {
              return La;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(z);
            },
            onSelect: g
          });
        }
        j(w);
        var N = H(w, 2), R = H(K(N));
        {
          let z = /* @__PURE__ */ E(() => c(l).formType ? [c(l).formType] : []);
          bt(R, {
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
        j(N);
        var B = H(N, 2), W = H(K(B));
        Ge(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (z) => {
            f("formLabel", z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), j(B);
        var D = H(B, 2), U = H(K(D));
        Ge(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            f("formDescription", z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), j(D);
        var F = H(D, 2), Q = K(F);
        Ve(Q, {
          onclick: b,
          children: (z, Y) => {
            be();
            var J = Pe("删除");
            L(z, J);
          },
          $$slots: { default: !0 }
        }), j(F), j(T), L($, T);
      },
      children: ($, T) => {
        Jo($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => v = $,
    () => v
  ), j(q), L(e, x), pe(C);
}
le(
  Mf,
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
var Wb = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Xb = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Yb = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Fb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Of(e, t) {
  fe(t, !0), Ye(e, Fb);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = at(), s = Wn(i), a = /* @__PURE__ */ E(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = Yb(), d = K(u);
  {
    var f = (h) => {
      var g = Wb();
      be(4), L(h, g);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = H(d, 2);
  return St(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, v) => {
      Mf(h, {
        get parameter() {
          return c(g);
        },
        get index() {
          return c(v);
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
      var g = Xb(), v = K(g, !0);
      j(g), Ee(() => Ue(v, n())), L(h, g);
    }
  ), j(u), L(e, u), pe(l);
}
le(Of, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ws = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ws(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ws(e[s], t[s])) return !1;
    return !0;
  }
};
var qb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ub = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jb = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Gb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Lf(e, t) {
  fe(t, !0), Ye(e, Gb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), { updateNodeData: s } = vt();
  nt(() => {
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
      Ws(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return en(e, Je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = qb();
        L(l, u);
      },
      children: (l, u) => {
        var d = Jb(), f = ae(d), p = K(f);
        Ie(p, {
          level: 3,
          children: (P, S) => {
            be();
            var O = Pe("确认数据");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var h = H(p, 2);
        Ve(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (P, S) => {
            var O = Ub();
            L(P, O);
          },
          $$slots: { default: !0 }
        }), j(f);
        var g = H(f, 2);
        Of(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var v = H(g, 2);
        Ie(v, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            be();
            var O = Pe("确认消息");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var b = H(v, 4), _ = K(b);
        {
          let P = /* @__PURE__ */ E(() => n().message || "");
          Ge(_, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ message: S.target.value }));
            },
            get value() {
              return c(P);
            }
          });
        }
        j(b);
        var C = H(b, 2), x = K(C);
        Ie(x, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            be();
            var O = Pe("输出参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        }), j(C);
        var k = H(C, 2);
        Yn(k, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Lf, { data: {} }, [], [], !0);
const Qb = {
  startNode: mf,
  codeNode: kf,
  confirmNode: Lf,
  llmNode: $f,
  templateNode: Sf,
  httpNode: Ef,
  knowledgeNode: Pf,
  searchEngineNode: Tf,
  loopNode: Nf,
  endNode: _f
};
var ex = /* @__PURE__ */ te("<!> ", 1);
function Xs(e, t) {
  fe(t, !0);
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
  return Ve(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = ex(), p = ae(f);
      ha(p, n);
      var h = H(p);
      Ee(() => Ue(h, ` ${r() ?? ""}`)), L(u, f);
    },
    $$slots: { default: !0 }
  }), pe(l);
}
le(Xs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var tx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), nx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), rx = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Df(e, t) {
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
  ], s = [], a = or(), l = a.customNodes;
  if (l) {
    const _ = Object.keys(l).sort((C, x) => (l[C].sortNo || 0) - (l[x].sortNo || 0));
    for (let C of _)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, x) => (C.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const _ = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(_)) {
      for (let C of _)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === C) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = rx(), d = K(u), f = K(d), p = K(f);
  ef(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (_) => {
      G(n, _.value.toString(), !0);
    }
  }), j(f);
  var h = H(f, 2), g = K(h);
  St(g, 21, () => o, Ur, (_, C) => {
    Xs(_, Je(() => c(C)));
  }), j(g);
  var v = H(g, 2);
  St(v, 21, () => s, Ur, (_, C) => {
    Xs(_, Je(() => c(C)));
  }), j(v), j(h), j(d);
  var b = H(d, 2);
  Ve(b, {
    onclick: () => {
      G(r, c(r) ? "" : "show", !0);
    },
    children: (_, C) => {
      var x = Me(), k = ae(x);
      {
        var P = (O) => {
          var A = tx();
          L(O, A);
        }, S = (O) => {
          var A = nx();
          L(O, A);
        };
        ue(k, (O) => {
          c(r) === "show" ? O(P) : O(S, !1);
        });
      }
      L(_, x);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => {
    Rt(u, 1, `tf-toolbar ${c(r) ?? ""}`), xt(g, `display: ${c(n) === "base" ? "flex" : "none"}`), xt(v, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), pe();
}
le(Df, {}, [], [], !0);
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
function Hf(e, t) {
  fe(t, !0), Ye(e, mx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = vn(), s = vt(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, u = (b, _) => {
    l({ [b]: _.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = or().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  nt(() => {
    n().expand && g && g.append(f);
  }), nt(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), nt(() => {
    !n().parameters && p.parameters && l({
      parameters: Oo(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), nt(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: Oo(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var v = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), m();
    }
  };
  {
    const b = (C) => {
      var x = Me(), k = ae(x);
      ha(k, () => p.icon), L(C, x);
    };
    let _ = /* @__PURE__ */ E(() => ({ ...n(), description: p.description }));
    en(e, Je(
      {
        get data() {
          return c(_);
        }
      },
      () => r,
      {
        icon: b,
        children: (C, x) => {
          var k = vx(), P = ae(k);
          {
            var S = ($) => {
              var T = lx(), w = ae(T), M = K(w);
              Ie(M, {
                level: 3,
                children: (W, D) => {
                  be();
                  var U = Pe("输入参数");
                  L(W, U);
                },
                $$slots: { default: !0 }
              });
              var N = H(M, 2);
              {
                var R = (W) => {
                  Ve(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (D, U) => {
                      var F = ax();
                      L(D, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (W) => {
                  p.parametersAddEnable !== !1 && W(R);
                });
              }
              j(w);
              var B = H(w, 2);
              Ot(B, {}), L($, T);
            };
            ue(P, ($) => {
              p.parametersEnable !== !1 && $(S);
            });
          }
          var O = H(P, 2);
          {
            var A = ($) => {
              var T = Me(), w = ae(T);
              St(w, 17, () => h, Ur, (M, N) => {
                var R = Me(), B = ae(R);
                {
                  var W = (U) => {
                    var F = ux(), Q = ae(F), z = K(Q, !0);
                    j(Q);
                    var Y = H(Q, 2), J = K(Y);
                    {
                      let ne = /* @__PURE__ */ E(() => n()[c(N).name] || c(N).defaultValue);
                      ut(J, Je(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (re) => {
                            u(c(N).name, re);
                          }
                        }
                      ));
                    }
                    j(Y), Ee(() => Ue(z, c(N).label)), L(U, F);
                  }, D = (U) => {
                    var F = Me(), Q = ae(F);
                    {
                      var z = (J) => {
                        var ne = cx(), re = ae(ne), ee = K(re, !0);
                        j(re);
                        var ge = H(re, 2), ce = K(ge);
                        {
                          let ie = /* @__PURE__ */ E(() => n()[c(N).name] || c(N).defaultValue);
                          Ge(ce, Je(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(N).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(N).attrs,
                            {
                              onchange: (se) => {
                                u(c(N).name, se);
                              }
                            }
                          ));
                        }
                        j(ge), Ee(() => Ue(ee, c(N).label)), L(J, ne);
                      }, Y = (J) => {
                        var ne = Me(), re = ae(ne);
                        {
                          var ee = (ce) => {
                            var ie = dx(), se = ae(ie), ve = K(se, !0);
                            j(se);
                            var me = H(se, 2), xe = K(me), de = K(xe), $e = K(de);
                            j(de);
                            var Ne = H(de, 2), X = (Be) => l({ [c(N).name]: parseFloat(Be.target.value) });
                            ht(
                              Ne,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: X
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), j(xe), j(me), Ee(() => {
                              Ue(ve, c(N).label), Ue($e, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), L(ce, ie);
                          }, ge = (ce) => {
                            var ie = Me(), se = ae(ie);
                            {
                              var ve = (xe) => {
                                var de = fx(), $e = ae(de), Ne = K($e, !0);
                                j($e);
                                var X = H($e, 2), Be = K(X);
                                {
                                  let De = /* @__PURE__ */ E(() => c(N).options || []), je = /* @__PURE__ */ E(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  bt(Be, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Ze) => {
                                      const rt = Ze.value;
                                      l({ [c(N).name]: rt });
                                    },
                                    get value() {
                                      return c(je);
                                    }
                                  });
                                }
                                j(X), Ee(() => Ue(Ne, c(N).label)), L(xe, de);
                              }, me = (xe) => {
                                var de = Me(), $e = ae(de);
                                {
                                  var Ne = (Be) => {
                                    var De = px(), je = ae(De), Ze = K(je, !0);
                                    j(je);
                                    var rt = H(je, 2), _t = K(rt);
                                    {
                                      let et = /* @__PURE__ */ E(() => c(N).chosen?.buttonText);
                                      Qd(_t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(et);
                                        },
                                        onChosen: (We, ye, Xe) => {
                                          c(N).chosen?.onChosen?.(l, We, ye, Xe);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    j(rt), Ee(() => Ue(Ze, c(N).label)), L(Be, De);
                                  }, X = (Be) => {
                                    var De = Me(), je = ae(De);
                                    {
                                      var Ze = (rt) => {
                                        Ie(rt, Je({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: (_t, et) => {
                                            be();
                                            var We = Pe();
                                            Ee(() => Ue(We, c(N).label)), L(_t, We);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        je,
                                        (rt) => {
                                          c(N).type === "heading" && rt(Ze);
                                        },
                                        !0
                                      );
                                    }
                                    L(Be, De);
                                  };
                                  ue(
                                    $e,
                                    (Be) => {
                                      c(N).type === "chosen" ? Be(Ne) : Be(X, !1);
                                    },
                                    !0
                                  );
                                }
                                L(xe, de);
                              };
                              ue(
                                se,
                                (xe) => {
                                  c(N).type === "select" ? xe(ve) : xe(me, !1);
                                },
                                !0
                              );
                            }
                            L(ce, ie);
                          };
                          ue(
                            re,
                            (ce) => {
                              c(N).type === "slider" ? ce(ee) : ce(ge, !1);
                            },
                            !0
                          );
                        }
                        L(J, ne);
                      };
                      ue(
                        Q,
                        (J) => {
                          c(N).type === "textarea" ? J(z) : J(Y, !1);
                        },
                        !0
                      );
                    }
                    L(U, F);
                  };
                  ue(B, (U) => {
                    c(N).type === "input" ? U(W) : U(D, !1);
                  });
                }
                L(M, R);
              }), L($, T);
            };
            ue(O, ($) => {
              h && $(A);
            });
          }
          var Z = H(O, 2);
          jt(Z, ($) => g = $, () => g);
          var q = H(Z, 2);
          {
            var I = ($) => {
              var T = gx(), w = ae(T), M = K(w);
              Ie(M, {
                level: 3,
                mt: "10px",
                children: (W, D) => {
                  be();
                  var U = Pe("输出参数");
                  L(W, U);
                },
                $$slots: { default: !0 }
              });
              var N = H(M, 2);
              {
                var R = (W) => {
                  Ve(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (D, U) => {
                      var F = hx();
                      L(D, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (W) => {
                  p.outputDefsAddEnable !== !1 && W(R);
                });
              }
              j(w);
              var B = H(w, 2);
              Yn(B, {}), L($, T);
            };
            ue(q, ($) => {
              p.outputDefsEnable !== !1 && $(I);
            });
          }
          Ee(() => {
            xt(Z, p.rootStyle || ""), Rt(Z, 1, Zn(p.rootClass), "svelte-qt4m0r");
          }), L(C, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return pe(v);
}
le(Hf, { data: {} }, [], [], !0);
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
function _x(e) {
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
function Cx(e) {
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
function $x(e) {
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
function Ys(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ys(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ys(e[r], t));
    return n;
  }
  return e;
}
const kx = () => (vt(), { copyHandler: async (e) => {
  const t = Re.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Re.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(_x), o = n.map($x), i = JSON.stringify({
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
  const r = Cx(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${jn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Ys(l.data, i);
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
      id: `edge_${jn()}`,
      source: u,
      target: d
    });
  }
  Re.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Re.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), su = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Sx = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Ex = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), Px = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Tx = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Af(e, t) {
  fe(t, !0), Ye(e, Tx);
  const n = y(t, "onInit", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = vt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Le(!1), s = /* @__PURE__ */ Le(null);
  const { updateEdgeData: a } = yx(), l = (F) => {
    F.preventDefault(), F.dataTransfer && (F.dataTransfer.dropEffect = "move");
  }, u = (F) => {
    F.preventDefault();
    const Q = o.screenToFlowPosition({ x: F.clientX - 250, y: F.clientY - 100 }), z = F.dataTransfer?.getData("application/tinyflow");
    if (!z)
      return;
    const Y = JSON.parse(z), J = { id: `node_${jn()}`, position: Q, data: {}, ...Y };
    Re.addNode(J), Re.selectNodeOnly(J.id);
  }, { getNode: d } = ox(), f = (F) => {
    const Q = d(F.source), z = d(F.target);
    if (F.sourceHandle === "loop_handle" || Q.parentId) {
      const Y = o.getEdges();
      for (let J of Y)
        if (J.target === F.target) {
          const ne = d(J.source);
          if (F.sourceHandle === "loop_handle" && ne.parentId !== Q.id || Q.parentId && ne.parentId !== Q.parentId)
            return !1;
        }
    }
    return !(!Q.parentId && z.parentId && z.parentId !== Q.id);
  }, { getNodesFromSource: p } = bx(), { getNodeRelativePosition: h } = xx(), { ensureParentInNodesBefore: g } = ix(), v = (F, Q) => {
    if (!Q.isValid)
      return;
    const z = Q.toNode;
    if (z.parentId)
      return;
    const Y = Q.fromNode, J = Q.fromHandle, ne = { position: { ...z.position } };
    if (J.id === "loop_handle" ? ne.parentId = Y.id : Y.parentId && (ne.parentId = Y.parentId), ne.parentId) {
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
        re.target === z.id && re.source == Y.id && (G(i, !0), G(s, re, !0));
      });
    });
  }, { getEdgesByTarget: b } = sx(), _ = (F) => {
    F.edges.forEach((Q) => {
      Q.id === c(s)?.id && (G(s, null), G(i, !1));
      const z = d(Q.target);
      if (z && z.parentId) {
        const Y = b(Q.target), { x: J, y: ne } = h(z.parentId);
        if (Y.length === 0)
          o.updateNode(z.id, {
            parentId: void 0,
            position: { x: z.position.x + J, y: z.position.y + ne }
          }), p(z.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + J, y: re.position.y + ne }
            });
          });
        else {
          let re = !1;
          for (let ee = 0; ee < Y.length; ee++) {
            const ge = Y[ee], ce = d(ge.source);
            if (ce.parentId || ce.type === "loopNode") {
              re = !0;
              break;
            }
          }
          re || (o.updateNode(z.id, {
            parentId: void 0,
            position: { x: z.position.x + J, y: z.position.y + ne }
          }), p(z.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + J, y: ee.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: C } = wx(), x = (F, Q) => {
  }, k = (F) => {
  }, { copyHandler: P, pasteHandler: S } = kx(), O = (F) => {
    su() || ((F.ctrlKey || F.metaKey) && F.key === "c" && (F.preventDefault(), P(F)), (F.ctrlKey || F.metaKey) && F.key === "a" && (F.preventDefault(), Re.updateNodes((Q) => Q.map((z) => ({ ...z, selected: !0 }))), Re.updateEdges((Q) => Q.map((z) => ({ ...z, selected: !0 })))));
  }, A = async (F) => {
    su() || S(F);
  };
  Bn(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", A);
  }), Io(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", A);
  });
  const Z = {
    // ...nodeTypes
  }, q = or().customNodes;
  if (q)
    for (let F of Object.keys(q))
      Z[F] = Hf;
  const I = or().onDataChange;
  nt(() => {
    I?.({
      nodes: Re.getNodes(),
      edges: Re.getEdges(),
      viewport: Re.getViewport()
    });
  });
  var $ = {
    get onInit() {
      return n();
    },
    set onInit(F) {
      n(F), m();
    }
  }, T = Px(), w = K(T), M = Re.getNodes, N = Re.setNodes, R = Re.getEdges, B = Re.setEdges, W = Re.getViewport, D = Re.setViewport;
  {
    let F = /* @__PURE__ */ E(() => ({ ...Qb, ...Z })), Q = /* @__PURE__ */ E(() => ({
      markerEnd: { type: Eo.ArrowClosed, width: 20, height: 20 }
    }));
    zd(w, {
      get nodeTypes() {
        return c(F);
      },
      get nodes() {
        return M();
      },
      set nodes(z) {
        N(z);
      },
      get edges() {
        return R();
      },
      set edges(z) {
        B(z);
      },
      get viewport() {
        return W();
      },
      set viewport(z) {
        D(z);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: f,
      onconnectend: v,
      onconnectstart: x,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (z) => {
        G(i, !0), G(s, z.edge, !0);
      },
      onbeforeconnect: (z) => ({ ...z, id: jn() }),
      ondelete: _,
      onclick: (z) => {
        const Y = z.target;
        Y.classList.contains("svelte-flow__edge-interaction") || Y.classList.contains("panel-content") || Y.closest(".panel-content") || (G(i, !1), G(s, null));
      },
      get defaultEdgeOptions() {
        return c(Q);
      },
      children: (z, Y) => {
        var J = Ex(), ne = ae(J);
        Fd(ne, {});
        var re = H(ne, 2);
        Wd(re, {});
        var ee = H(re, 2);
        Ud(ee, {});
        var ge = H(ee, 2);
        {
          var ce = (ie) => {
            Yo(ie, {
              children: (se, ve) => {
                var me = Sx(), xe = H(K(me), 4), de = K(xe);
                {
                  let Be = /* @__PURE__ */ E(() => c(s)?.data?.condition);
                  Ge(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Be);
                    },
                    onchange: (De) => {
                      c(s) && a(c(s).id, { condition: De.target?.value });
                    }
                  });
                }
                j(xe);
                var $e = H(xe, 2), Ne = K($e);
                Ve(Ne, {
                  onclick: () => {
                    C(c(s)?.id), G(i, !1);
                  },
                  children: (Be, De) => {
                    be();
                    var je = Pe("删除");
                    L(Be, je);
                  },
                  $$slots: { default: !0 }
                });
                var X = H(Ne, 2);
                Ve(X, {
                  primary: !0,
                  onclick: () => {
                    G(i, !1);
                  },
                  children: (Be, De) => {
                    be();
                    var je = Pe("保存");
                    L(Be, je);
                  },
                  $$slots: { default: !0 }
                }), j($e), j(me), L(se, me);
              },
              $$slots: { default: !0 }
            });
          };
          ue(ge, (ie) => {
            c(i) && ie(ce);
          });
        }
        L(z, J);
      },
      $$slots: { default: !0 }
    });
  }
  var U = H(w, 2);
  return Df(U, {}), j(T), L(e, T), pe($);
}
le(Af, { onInit: {} }, [], [], !0);
function Nx(e, t) {
  fe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Re.init(o?.nodes || [], o?.edges || []), Yr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), m();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), m();
    }
  };
  return Id(e, {
    children: (s, a) => {
      Af(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), pe(i);
}
customElements.define("tinyflow-component", le(Nx, { options: {}, onInit: {} }, [], [], !1));
const Ox = Yf((e, t) => {
  const n = Za(null), r = Za(null);
  Ff(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return qf(() => {
    if (n.current) {
      const a = new Hy({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Qf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  Ox as Tinyflow
};
//# sourceMappingURL=index.js.map
