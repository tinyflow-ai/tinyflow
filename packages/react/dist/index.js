import fu, { forwardRef as bf, useRef as Gs, useImperativeHandle as xf, useEffect as $f } from "react";
var ci = { exports: {} }, ho = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function _f() {
  if (Js) return ho;
  Js = 1;
  var e = fu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return ho.Fragment = n, ho.jsx = a, ho.jsxs = a, ho;
}
var po = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function Cf() {
  return Qs || (Qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p = Symbol.iterator, b = "@@iterator";
    function x(D) {
      if (D === null || typeof D != "object")
        return null;
      var J = p && D[p] || D[b];
      return typeof J == "function" ? J : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(D) {
      {
        for (var J = arguments.length, pe = new Array(J > 1 ? J - 1 : 0), Me = 1; Me < J; Me++)
          pe[Me - 1] = arguments[Me];
        C("error", D, pe);
      }
    }
    function C(D, J, pe) {
      {
        var Me = _.ReactDebugCurrentFrame, Z = Me.getStackAddendum();
        Z !== "" && (J += "%s", pe = pe.concat([Z]));
        var ot = pe.map(function(qe) {
          return String(qe);
        });
        ot.unshift("Warning: " + J), Function.prototype.apply.call(console[D], console, ot);
      }
    }
    var w = !1, k = !1, P = !1, E = !1, N = !1, H;
    H = Symbol.for("react.module.reference");
    function z(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === i || N || D === o || D === u || D === c || E || D === v || w || k || P || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === a || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === H || D.getModuleId !== void 0));
    }
    function I(D, J, pe) {
      var Me = D.displayName;
      if (Me)
        return Me;
      var Z = J.displayName || J.name || "";
      return Z !== "" ? pe + "(" + Z + ")" : pe;
    }
    function L(D) {
      return D.displayName || "Context";
    }
    function Y(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
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
      if (typeof D == "object")
        switch (D.$$typeof) {
          case s:
            var J = D;
            return L(J) + ".Consumer";
          case a:
            var pe = D;
            return L(pe._context) + ".Provider";
          case l:
            return I(D, D.render, "ForwardRef");
          case d:
            var Me = D.displayName || null;
            return Me !== null ? Me : Y(D.type) || "Memo";
          case f: {
            var Z = D, ot = Z._payload, qe = Z._init;
            try {
              return Y(qe(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, T = 0, $, V, M, O, R, W, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function U() {
      {
        if (T === 0) {
          $ = console.log, V = console.info, M = console.warn, O = console.error, R = console.group, W = console.groupCollapsed, K = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        T++;
      }
    }
    function j() {
      {
        if (T--, T === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, D, {
              value: $
            }),
            info: S({}, D, {
              value: V
            }),
            warn: S({}, D, {
              value: M
            }),
            error: S({}, D, {
              value: O
            }),
            group: S({}, D, {
              value: R
            }),
            groupCollapsed: S({}, D, {
              value: W
            }),
            groupEnd: S({}, D, {
              value: K
            })
          });
        }
        T < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = _.ReactCurrentDispatcher, ve;
    function we(D, J, pe) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (Z) {
            var Me = Z.stack.trim().match(/\n( *(at )?)/);
            ve = Me && Me[1] || "";
          }
        return `
` + ve + D;
      }
    }
    var le = !1, Ee;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new se();
    }
    function ue(D, J) {
      if (!D || le)
        return "";
      {
        var pe = Ee.get(D);
        if (pe !== void 0)
          return pe;
      }
      var Me;
      le = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ot;
      ot = oe.current, oe.current = null, U();
      try {
        if (J) {
          var qe = function() {
            throw Error();
          };
          if (Object.defineProperty(qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(qe, []);
            } catch (Ct) {
              Me = Ct;
            }
            Reflect.construct(D, [], qe);
          } else {
            try {
              qe.call();
            } catch (Ct) {
              Me = Ct;
            }
            D.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            Me = Ct;
          }
          D();
        }
      } catch (Ct) {
        if (Ct && Me && typeof Ct.stack == "string") {
          for (var ze = Ct.stack.split(`
`), Pt = Me.stack.split(`
`), gt = ze.length - 1, pt = Pt.length - 1; gt >= 1 && pt >= 0 && ze[gt] !== Pt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (ze[gt] !== Pt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || ze[gt] !== Pt[pt]) {
                    var Bt = `
` + ze[gt].replace(" at new ", " at ");
                    return D.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", D.displayName)), typeof D == "function" && Ee.set(D, Bt), Bt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        le = !1, oe.current = ot, j(), Error.prepareStackTrace = Z;
      }
      var tr = D ? D.displayName || D.name : "", nr = tr ? we(tr) : "";
      return typeof D == "function" && Ee.set(D, nr), nr;
    }
    function Ne(D, J, pe) {
      return ue(D, !1);
    }
    function Pe(D) {
      var J = D.prototype;
      return !!(J && J.isReactComponent);
    }
    function Ze(D, J, pe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return ue(D, Pe(D));
      if (typeof D == "string")
        return we(D);
      switch (D) {
        case u:
          return we("Suspense");
        case c:
          return we("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return Ne(D.render);
          case d:
            return Ze(D.type, J, pe);
          case f: {
            var Me = D, Z = Me._payload, ot = Me._init;
            try {
              return Ze(ot(Z), J, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ue = {}, Ge = _.ReactDebugCurrentFrame;
    function ce(D) {
      if (D) {
        var J = D._owner, pe = Ze(D.type, D._source, J ? J.type : null);
        Ge.setExtraStackFrame(pe);
      } else
        Ge.setExtraStackFrame(null);
    }
    function fe(D, J, pe, Me, Z) {
      {
        var ot = Function.call.bind(ne);
        for (var qe in D)
          if (ot(D, qe)) {
            var ze = void 0;
            try {
              if (typeof D[qe] != "function") {
                var Pt = Error((Me || "React class") + ": " + pe + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              ze = D[qe](J, qe, Me, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              ze = gt;
            }
            ze && !(ze instanceof Error) && (ce(Z), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", pe, qe, typeof ze), ce(null)), ze instanceof Error && !(ze.message in Ue) && (Ue[ze.message] = !0, ce(Z), h("Failed %s type: %s", pe, ze.message), ce(null));
          }
      }
    }
    var Se = Array.isArray;
    function Xe(D) {
      return Se(D);
    }
    function Ae(D) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, pe = J && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return pe;
      }
    }
    function vt(D) {
      try {
        return st(D), !1;
      } catch {
        return !0;
      }
    }
    function st(D) {
      return "" + D;
    }
    function re(D) {
      if (vt(D))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(D)), st(D);
    }
    var Ie = _.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, Yt;
    function ln(D) {
      if (ne.call(D, "ref")) {
        var J = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function De(D) {
      if (ne.call(D, "key")) {
        var J = Object.getOwnPropertyDescriptor(D, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function lt(D, J) {
      typeof D.ref == "string" && Ie.current;
    }
    function Ye(D, J) {
      {
        var pe = function() {
          Zt || (Zt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Re(D, J) {
      {
        var pe = function() {
          Yt || (Yt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var ut = function(D, J, pe, Me, Z, ot, qe) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: J,
        ref: pe,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: ot
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Jt(D, J, pe, Me, Z) {
      {
        var ot, qe = {}, ze = null, Pt = null;
        pe !== void 0 && (re(pe), ze = "" + pe), De(J) && (re(J.key), ze = "" + J.key), ln(J) && (Pt = J.ref, lt(J, Z));
        for (ot in J)
          ne.call(J, ot) && !ye.hasOwnProperty(ot) && (qe[ot] = J[ot]);
        if (D && D.defaultProps) {
          var gt = D.defaultProps;
          for (ot in gt)
            qe[ot] === void 0 && (qe[ot] = gt[ot]);
        }
        if (ze || Pt) {
          var pt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          ze && Ye(qe, pt), Pt && Re(qe, pt);
        }
        return ut(D, ze, Pt, Z, Me, Ie.current, qe);
      }
    }
    var Et = _.ReactCurrentOwner, Qn = _.ReactDebugCurrentFrame;
    function mt(D) {
      if (D) {
        var J = D._owner, pe = Ze(D.type, D._source, J ? J.type : null);
        Qn.setExtraStackFrame(pe);
      } else
        Qn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Pn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function rt() {
      {
        if (Et.current) {
          var D = Y(Et.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function vo(D) {
      return "";
    }
    var er = {};
    function Nt(D) {
      {
        var J = rt();
        if (!J) {
          var pe = typeof D == "string" ? D : D.displayName || D.name;
          pe && (J = `

Check the top-level render call using <` + pe + ">.");
        }
        return J;
      }
    }
    function wr(D, J) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var pe = Nt(J);
        if (er[pe])
          return;
        er[pe] = !0;
        var Me = "";
        D && D._owner && D._owner !== Et.current && (Me = " It was passed a child from " + Y(D._owner.type) + "."), mt(D), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Me), mt(null);
      }
    }
    function br(D, J) {
      {
        if (typeof D != "object")
          return;
        if (Xe(D))
          for (var pe = 0; pe < D.length; pe++) {
            var Me = D[pe];
            Pn(Me) && wr(Me, J);
          }
        else if (Pn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Z = x(D);
          if (typeof Z == "function" && Z !== D.entries)
            for (var ot = Z.call(D), qe; !(qe = ot.next()).done; )
              Pn(qe.value) && wr(qe.value, J);
        }
      }
    }
    function Lr(D) {
      {
        var J = D.type;
        if (J == null || typeof J == "string")
          return;
        var pe;
        if (typeof J == "function")
          pe = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === d))
          pe = J.propTypes;
        else
          return;
        if (pe) {
          var Me = Y(J);
          fe(pe, D.props, "prop", Me, D);
        } else if (J.PropTypes !== void 0 && !$t) {
          $t = !0;
          var Z = Y(J);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function go(D) {
      {
        for (var J = Object.keys(D.props), pe = 0; pe < J.length; pe++) {
          var Me = J[pe];
          if (Me !== "children" && Me !== "key") {
            mt(D), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), mt(null);
            break;
          }
        }
        D.ref !== null && (mt(D), h("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ai = {};
    function si(D, J, pe, Me, Z, ot) {
      {
        var qe = z(D);
        if (!qe) {
          var ze = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = vo();
          Pt ? ze += Pt : ze += rt();
          var gt;
          D === null ? gt = "null" : Xe(D) ? gt = "array" : D !== void 0 && D.$$typeof === t ? (gt = "<" + (Y(D.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof D, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, ze);
        }
        var pt = Jt(D, J, pe, Z, ot);
        if (pt == null)
          return pt;
        if (qe) {
          var Bt = J.children;
          if (Bt !== void 0)
            if (Me)
              if (Xe(Bt)) {
                for (var tr = 0; tr < Bt.length; tr++)
                  br(Bt[tr], D);
                Object.freeze && Object.freeze(Bt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Bt, D);
        }
        if (ne.call(J, "key")) {
          var nr = Y(D), Ct = Object.keys(J).filter(function(ui) {
            return ui !== "key";
          }), zr = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ai[nr + zr]) {
            var li = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zr, nr, li, nr), ai[nr + zr] = !0;
          }
        }
        return D === r ? go(pt) : Lr(pt), pt;
      }
    }
    function xa(D, J, pe) {
      return si(D, J, pe, !0);
    }
    function $a(D, J, pe) {
      return si(D, J, pe, !1);
    }
    var _a = $a, Ca = xa;
    po.Fragment = r, po.jsx = _a, po.jsxs = Ca;
  }()), po;
}
var el;
function kf() {
  return el || (el = 1, process.env.NODE_ENV === "production" ? ci.exports = _f() : ci.exports = Cf()), ci.exports;
}
var Sf = kf(), Ef = Object.defineProperty, vu = (e) => {
  throw TypeError(e);
}, Pf = (e, t, n) => t in e ? Ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => Pf(e, typeof t != "symbol" ? t + "" : t, n), cs = (e, t, n) => t.has(e) || vu("Cannot " + n), yt = (e, t, n) => (cs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? vu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Si = (e, t, n, r) => (cs(e, t, "write to private field"), t.set(e, n), n), Mf = (e, t, n) => (cs(e, t, "access private method"), n);
const Vf = "5";
var tl;
typeof window < "u" && ((tl = window.__svelte ?? (window.__svelte = {})).v ?? (tl.v = /* @__PURE__ */ new Set())).add(Vf);
let so = !1, Tf = !1;
function Hf() {
  so = !0;
}
Hf();
const ds = 1, fs = 2, gu = 4, Nf = 8, Df = 16, Of = 1, Lf = 2, hu = 4, zf = 8, Af = 16, pu = 1, If = 2, vs = "[", gs = "[!", hs = "]", Yr = {}, Wt = Symbol(), Rf = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/2000/svg", Yf = !1;
function Qi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var qo = Array.isArray, Bf = Array.prototype.indexOf, ps = Array.from, Ei = Object.keys, Po = Object.defineProperty, Wn = Object.getOwnPropertyDescriptor, mu = Object.getOwnPropertyDescriptors, Wf = Object.prototype, qf = Array.prototype, ms = Object.getPrototypeOf, nl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const _t = () => {
};
function jf(e) {
  return e();
}
function Mo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bn = 2, yu = 4, ea = 8, ys = 16, Un = 32, Hr = 64, Pi = 128, rn = 256, Mi = 512, It = 1024, Hn = 2048, mr = 4096, qn = 8192, ta = 16384, Xf = 32768, lo = 65536, Kf = 1 << 17, Ff = 1 << 19, wu = 1 << 20, Aa = 1 << 21, lr = Symbol("$state"), ws = Symbol("legacy props"), Uf = Symbol("");
function Gf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ev() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function nv(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function rv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ov() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function iv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function na(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function tn(e) {
  He = e;
}
let We;
function At(e) {
  if (e === null)
    throw na(), Yr;
  return We = e;
}
function Nn() {
  return At(
    /** @type {TemplateNode} */
    /* @__PURE__ */ An(We)
  );
}
function q(e) {
  if (He) {
    if (/* @__PURE__ */ An(We) !== null)
      throw na(), Yr;
    We = e;
  }
}
function Le(e = 1) {
  if (He) {
    for (var t = e, n = We; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ An(n);
    We = n;
  }
}
function Ia() {
  for (var e = 0, t = We; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === hs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === vs || n === gs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ An(t)
    );
    t.remove(), t = r;
  }
}
function yn(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = ms(e);
  if (t !== Wf && t !== qf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = qo(e), o = /* @__PURE__ */ Ot(0), i = et, a = (s) => {
    var l = et;
    Dn(i);
    var u = s();
    return Dn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Ot(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && rv();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Ot(u.value)), n.set(l, c)) : G(
          c,
          a(() => yn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ Ot(Wt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && G(c, d);
          }
          G(u, Wt), rl(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === lr)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Wn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ Ot(yn(f ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var v = g(d);
          return v === Wt ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === lr)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Wt || Reflect.has(s, l);
        if (c !== void 0 || tt !== null && (!d || (u = Wn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ Ot(d ? yn(s[l]) : Wt)), n.set(l, c));
          var f = g(c);
          if (f === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var b = n.get(p + "");
            b !== void 0 ? G(b, Wt) : p in s && (b = a(() => /* @__PURE__ */ Ot(Wt)), n.set(p + "", b));
          }
        f === void 0 ? (!v || (d = Wn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ Ot(void 0)), G(
          f,
          a(() => yn(u))
        ), n.set(l, f)) : (v = f.v !== Wt, G(
          f,
          a(() => yn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= _.v && G(_, h + 1);
          }
          rl(o);
        }
        return !0;
      },
      ownKeys(s) {
        g(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Wt;
        });
        for (var [u, c] of n)
          c.v !== Wt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ov();
      }
    }
  );
}
function rl(e, t = 1) {
  G(e, e.v + t);
}
var qt, bu, xu, $u;
function Ra() {
  if (qt === void 0) {
    qt = window, bu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xu = Wn(t, "firstChild").get, $u = Wn(t, "nextSibling").get, nl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nl(n) && (n.__t = void 0);
  }
}
function Xn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return xu.call(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return $u.call(e);
}
function X(e, t) {
  if (!He)
    return /* @__PURE__ */ zt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ zt(We)
  );
  if (n === null)
    n = We.appendChild(Xn());
  else if (t && n.nodeType !== 3) {
    var r = Xn();
    return n == null || n.before(r), At(r), r;
  }
  return At(n), n;
}
function _e(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ zt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ An(n) : n;
  }
  return We;
}
function B(e, t = 1, n = !1) {
  let r = He ? We : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ An(r);
  if (!He)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Xn();
    return r === null ? o == null || o.after(a) : r.before(a), At(a), a;
  }
  return At(r), /** @type {TemplateNode} */
  r;
}
function bs(e) {
  e.textContent = "";
}
function _u(e) {
  return e === this.v;
}
function xs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $s(e) {
  return !xs(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  var t = bn | Hn, n = et !== null && et.f & bn ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt === null || n !== null && n.f & rn ? t |= rn : tt.f |= wu, {
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
    parent: n ?? tt
  };
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  const t = /* @__PURE__ */ Kr(e);
  return Ou(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Kr(e);
  return t.equals = $s, t;
}
function Cu(e) {
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
function av(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & bn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ku(e) {
  var t, n = tt;
  vr(av(e));
  try {
    Cu(e), t = Iu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Su(e) {
  var t = ku(e), n = (ar || e.f & rn) && e.deps !== null ? mr : It;
  gn(e, n), e.equals(t) || (e.v = t, e.wv = zu());
}
function Eu(e) {
  tt === null && et === null && Qf(), et !== null && et.f & rn && tt === null && Jf(), Xo && Gf();
}
function sv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Nr(e, t, n, r = !0) {
  var o = tt, i = {
    ctx: Je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Hn,
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
      oa(i), i.f |= Xf;
    } catch (l) {
      throw vn(i), l;
    }
  else t !== null && ia(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (wu | Pi)) === 0;
  if (!a && r && (o !== null && sv(i, o), et !== null && et.f & bn)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function _s(e) {
  const t = Nr(ea, null, !1);
  return gn(t, It), t.teardown = e, t;
}
function fr(e) {
  Eu();
  var t = tt !== null && (tt.f & Un) !== 0 && Je !== null && !Je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: tt,
      reaction: et
    });
  } else {
    var r = en(e);
    return r;
  }
}
function lv(e) {
  return Eu(), uo(e);
}
function uv(e) {
  const t = Nr(Hr, e, !0);
  return () => {
    vn(t);
  };
}
function cv(e) {
  const t = Nr(Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fr(t, () => {
      vn(t), r(void 0);
    }) : (vn(t), r(void 0));
  });
}
function en(e) {
  return Nr(yu, e, !1);
}
function me(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = uo(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), On(t));
  });
}
function kt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  uo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & It && gn(n, mr), co(n) && oa(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function uo(e) {
  return Nr(ea, e, !0);
}
function Te(e, t = [], n = Kr) {
  const r = t.map(n);
  return Dr(() => e(...r.map(g)));
}
function Dr(e, t = 0) {
  return Nr(ea | ys | t, e, !0);
}
function Kn(e, t = !0) {
  return Nr(ea | Un, e, !0, t);
}
function Pu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xo, r = et;
    il(!0), Dn(null);
    try {
      t.call(null);
    } finally {
      il(n), Dn(r);
    }
  }
}
function Mu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & Hr ? n.parent = null : vn(n, t), n = r;
  }
}
function dv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Un || vn(t), t = n;
  }
}
function vn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Ff) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Mu(e, t && !n), Ni(e, 0), gn(e, ta);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Pu(e);
  var s = e.parent;
  s !== null && s.first !== null && Vu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Vu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fr(e, t) {
  var n = [];
  Cs(e, n, !0), Tu(n, () => {
    vn(e), t && t();
  });
}
function Tu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Cs(e, t, n) {
  if (!(e.f & qn)) {
    if (e.f ^= qn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & lo) !== 0 || (r.f & Un) !== 0;
      Cs(r, t, i ? n : !1), r = o;
    }
  }
}
function Vo(e) {
  Hu(e, !0);
}
function Hu(e, t) {
  if (e.f & qn) {
    e.f ^= qn, e.f & It || (e.f ^= It), co(e) && (gn(e, Hn), ia(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & lo) !== 0 || (n.f & Un) !== 0;
      Hu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const fv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let To = [], Ho = [];
function Nu() {
  var e = To;
  To = [], Mo(e);
}
function Du() {
  var e = Ho;
  Ho = [], Mo(e);
}
function jo(e) {
  To.length === 0 && queueMicrotask(Nu), To.push(e);
}
function vv(e) {
  Ho.length === 0 && fv(Du), Ho.push(e);
}
function ol() {
  To.length > 0 && Nu(), Ho.length > 0 && Du();
}
let yi = !1, Vi = !1, Ti = null, Cr = !1, Xo = !1;
function il(e) {
  Xo = e;
}
let ko = [], et = null, Mn = !1;
function Dn(e) {
  et = e;
}
let tt = null;
function vr(e) {
  tt = e;
}
let fn = null;
function gv(e) {
  fn = e;
}
function Ou(e) {
  et !== null && et.f & Aa && (fn === null ? gv([e]) : fn.push(e));
}
let Dt = null, Qt = 0, cn = null;
function hv(e) {
  cn = e;
}
let Lu = 1, Hi = 0, ar = !1;
function zu() {
  return ++Lu;
}
function co(e) {
  var t, n = e.f;
  if (n & Hn)
    return !0;
  if (n & mr) {
    var r = e.deps, o = (n & rn) !== 0;
    if (r !== null) {
      var i, a, s = (n & Mi) !== 0, l = o && tt !== null && !ar, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Mi), l && d !== null && !(d.f & rn) && (c.f ^= rn);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], co(
          /** @type {Derived} */
          a
        ) && Su(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || tt !== null && !ar) && gn(e, It);
  }
  return !1;
}
function pv(e, t) {
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
function mv(e) {
  return (e.f & ta) === 0 && (e.parent === null || (e.parent.f & Pi) === 0);
}
function ra(e, t, n, r) {
  if (yi) {
    if (n === null && (yi = !1), mv(t))
      throw e;
    return;
  }
  n !== null && (yi = !0);
  {
    pv(e, t);
    return;
  }
}
function Au(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      fn != null && fn.includes(e) || (i.f & bn ? Au(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gn(i, Hn) : i.f & It && gn(i, mr), ia(
        /** @type {Effect} */
        i
      )));
    }
}
function Iu(e) {
  var t, n = Dt, r = Qt, o = cn, i = et, a = ar, s = fn, l = Je, u = Mn, c = e.f;
  Dt = /** @type {null | Value[]} */
  null, Qt = 0, cn = null, ar = (c & rn) !== 0 && (Mn || !Cr || et === null), et = c & (Un | Hr) ? null : e, fn = null, sl(e.ctx), Mn = !1, Hi++, e.f |= Aa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Dt !== null) {
      var v;
      if (Ni(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + Dt.length, v = 0; v < Dt.length; v++)
          f[Qt + v] = Dt[v];
      else
        e.deps = f = Dt;
      if (!ar)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Ni(e, Qt), f.length = Qt);
    if (aa() && cn !== null && !Mn && f !== null && !(e.f & (bn | mr | Hn)))
      for (v = 0; v < /** @type {Source[]} */
      cn.length; v++)
        Au(
          cn[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (Hi++, cn !== null && (o === null ? o = cn : o.push(.../** @type {Source[]} */
    cn))), d;
  } finally {
    Dt = n, Qt = r, cn = o, et = i, ar = a, fn = s, sl(l), Mn = u, e.f ^= Aa;
  }
}
function yv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & bn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Dt === null || !Dt.includes(t)) && (gn(t, mr), t.f & (rn | Mi) || (t.f ^= Mi), Cu(
    /** @type {Derived} **/
    t
  ), Ni(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ni(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      yv(e, n[r]);
}
function oa(e) {
  var t = e.f;
  if (!(t & ta)) {
    gn(e, It);
    var n = tt, r = Je, o = Cr;
    tt = e, Cr = !0;
    try {
      t & ys ? dv(e) : Mu(e), Pu(e);
      var i = Iu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Lu;
      var a = e.deps, s;
      Yf && Tf && e.f & Hn;
    } catch (l) {
      ra(l, e, n, r || e.ctx);
    } finally {
      Cr = o, tt = n;
    }
  }
}
function wv() {
  try {
    ev();
  } catch (e) {
    if (Ti !== null)
      ra(e, Ti, null);
    else
      throw e;
  }
}
function Ru() {
  var e = Cr;
  try {
    var t = 0;
    for (Cr = !0; ko.length > 0; ) {
      t++ > 1e3 && wv();
      var n = ko, r = n.length;
      ko = [];
      for (var o = 0; o < r; o++) {
        var i = xv(n[o]);
        bv(i);
      }
      No.clear();
    }
  } finally {
    Vi = !1, Cr = e, Ti = null;
  }
}
function bv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (ta | qn)))
        try {
          co(r) && (oa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Vu(r) : r.fn = null));
        } catch (o) {
          ra(o, r, null, r.ctx);
        }
    }
}
function ia(e) {
  Vi || (Vi = !0, queueMicrotask(Ru));
  for (var t = Ti = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Hr | Un)) {
      if (!(n & It)) return;
      t.f ^= It;
    }
  }
  ko.push(t);
}
function xv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Un | Hr)) !== 0, i = o && (r & It) !== 0;
    if (!i && !(r & qn)) {
      if (r & yu)
        t.push(n);
      else if (o)
        n.f ^= It;
      else {
        var a = et;
        try {
          et = n, co(n) && oa(n);
        } catch (u) {
          ra(u, n, null, n.ctx);
        } finally {
          et = a;
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
  for (ol(); ko.length > 0; )
    Vi = !0, Ru(), ol();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & bn) !== 0;
  if (et !== null && !Mn) {
    if (!(fn != null && fn.includes(e))) {
      var r = et.deps;
      e.rv < Hi && (e.rv = Hi, Dt === null && r !== null && r[Qt] === e ? Qt++ : Dt === null ? Dt = [e] : (!ar || !Dt.includes(e)) && Dt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & rn) && (o.f ^= rn);
  }
  return n && (o = /** @type {Derived} */
  e, co(o) && Su(o)), Xo && No.has(e) ? No.get(e) : e.v;
}
function On(e) {
  var t = Mn;
  try {
    return Mn = !0, e();
  } finally {
    Mn = t;
  }
}
const $v = -7169;
function gn(e, t) {
  e.f = e.f & $v | t;
}
function Q(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Za(n);
      }
  }
}
function Za(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Za(e[r], t);
      } catch {
      }
    const n = ms(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = mu(n);
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
function Ur(e, t) {
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
function Ot(e, t) {
  const n = Ur(e);
  return Ou(n), n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var n;
  const r = Ur(e);
  return t || (r.equals = $s), so && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function G(e, t, n = !1) {
  et !== null && !Mn && aa() && et.f & (bn | ys) && !(fn != null && fn.includes(e)) && iv();
  let r = n ? yn(t) : t;
  return Ya(e, r);
}
function Ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Xo ? No.set(e, t) : No.set(e, n), e.v = t, e.f & bn && (e.f & Hn && ku(
      /** @type {Derived} */
      e
    ), gn(e, e.f & rn ? mr : It)), e.wv = zu(), Zu(e, Hn), aa() && tt !== null && tt.f & It && !(tt.f & (Un | Hr)) && (cn === null ? hv([e]) : cn.push(e));
  }
  return t;
}
function al(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Zu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = aa(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Hn || !r && a === tt || (gn(a, t), s & (It | rn) && (s & bn ? Zu(
        /** @type {Derived} */
        a,
        mr
      ) : ia(
        /** @type {Effect} */
        a
      )));
    }
}
let Je = null;
function sl(e) {
  Je = e;
}
function Sr(e) {
  return (
    /** @type {T} */
    ks().get(e)
  );
}
function Gr(e, t) {
  return ks().set(e, t), t;
}
function _v(e) {
  return ks().has(e);
}
function ge(e, t = !1, n) {
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
  so && !t && (Je.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ur(!1)
  }), _s(() => {
    r.d = !0;
  });
}
function he(e) {
  const t = Je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = tt, r = et;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), Dn(i.reaction), en(i.fn);
        }
      } finally {
        vr(n), Dn(r);
      }
    }
    Je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function aa() {
  return !so || Je !== null && Je.l === null;
}
function ks(e) {
  return Je === null && Qi(), Je.c ?? (Je.c = new Map(Cv(Je) || void 0));
}
function Cv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function kv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Sv = [
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
function Ev(e) {
  return Sv.includes(e);
}
const Pv = {
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
function Mv(e) {
  return e = e.toLowerCase(), Pv[e] ?? e;
}
const Vv = ["touchstart", "touchmove"];
function Tv(e) {
  return Vv.includes(e);
}
const Hv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Nv(e) {
  return Hv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Dv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ov(e) {
  He && /* @__PURE__ */ zt(e) !== null && bs(e);
}
let ll = !1;
function Lv() {
  ll || (ll = !0, document.addEventListener(
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
function zv(e) {
  var t = et, n = tt;
  Dn(null), vr(null);
  try {
    return e();
  } finally {
    Dn(t), vr(n);
  }
}
const Yu = /* @__PURE__ */ new Set(), Ba = /* @__PURE__ */ new Set();
function Bu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || xo.call(t, i), !i.cancelBubble)
      return zv(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ct(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Bu(e, t, n, i);
  (t === document.body || t === window || t === document) && _s(() => {
    t.removeEventListener(e, a, i);
  });
}
function Ko(e) {
  for (var t = 0; t < e.length; t++)
    Yu.add(e[t]);
  for (var n of Ba)
    n(e);
}
function xo(e) {
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
    Po(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = et, f = tt;
    Dn(null), vr(null);
    try {
      for (var v, p = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (qo(x)) {
              var [_, ...h] = x;
              _.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch (C) {
          v ? p.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Dn(d), vr(f);
    }
  }
}
function Ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Kt(e, t) {
  var n = (
    /** @type {Effect} */
    tt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  var n = (t & pu) !== 0, r = (t & If) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return Kt(We, null), We;
    o === void 0 && (o = Ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ zt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || bu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Kt(s, l);
    } else
      Kt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & pu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (He)
      return Kt(We, null), We;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Ss(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ zt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ zt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ zt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ zt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Kt(c, d);
    } else
      Kt(u, u);
    return u;
  };
}
function Fe(e = "") {
  if (!He) {
    var t = Xn(e + "");
    return Kt(t, t), t;
  }
  var n = We;
  return n.nodeType !== 3 && (n.before(n = Xn()), At(n)), Kt(n, n), n;
}
function dt() {
  if (He)
    return Kt(We, null), We;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xn();
  return e.append(t, n), Kt(t, n), e;
}
function A(e, t) {
  if (He) {
    tt.nodes_end = We, Nn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function on(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Wu(e, t) {
  return qu(e, t);
}
function Av(e, t) {
  Ra(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = We;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== vs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ An(i);
    if (!i)
      throw Yr;
    tn(!0), At(
      /** @type {Comment} */
      i
    ), Nn();
    const a = qu(e, { ...t, anchor: i });
    if (We === null || We.nodeType !== 8 || /** @type {Comment} */
    We.data !== hs)
      throw na(), Yr;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Yr)
      return t.recover === !1 && tv(), Ra(), bs(n), tn(!1), Wu(e, t);
    throw a;
  } finally {
    tn(r), At(o);
  }
}
const Ar = /* @__PURE__ */ new Map();
function qu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Ra();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var p = Tv(v);
        t.addEventListener(v, xo, { passive: p });
        var b = Ar.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: p }), Ar.set(v, 1)) : Ar.set(v, b + 1);
      }
    }
  };
  l(ps(Yu)), Ba.add(l);
  var u = void 0, c = cv(() => {
    var d = n ?? t.appendChild(Xn());
    return Kn(() => {
      if (i) {
        ge({});
        var f = (
          /** @type {ComponentContext} */
          Je
        );
        f.c = i;
      }
      o && (r.$$events = o), He && Kt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (tt.nodes_end = We), i && he();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var p = (
          /** @type {number} */
          Ar.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, xo), Ar.delete(v)) : Ar.set(v, p);
      }
      Ba.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Wa.set(u, c), u;
}
let Wa = /* @__PURE__ */ new WeakMap();
function Iv(e, t) {
  const n = Wa.get(e);
  return n ? (Wa.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, [n, r] = [0, 0]) {
  He && n === 0 && Nn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let p = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === vs ? r = 0 : x === gs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ia(), At(o), tn(!1), p = !0, r = -1);
    }
    s ? (i ? Vo(i) : v && (i = Kn(() => v(o))), a && Fr(a, () => {
      a = null;
    })) : (a ? Vo(a) : v && (a = Kn(() => v(o, [n + 1, r]))), i && Fr(i, () => {
      i = null;
    })), p && tn(!0);
  };
  Dr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = We);
}
function Do(e, t) {
  return t;
}
function Rv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Cs(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    bs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Tu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), vn(c.e, !s);
    }
  });
}
function Ft(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & gu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = He ? At(
      /** @type {Comment | Text} */
      /* @__PURE__ */ zt(u)
    ) : u.appendChild(Xn());
  }
  He && Nn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return qo(v) ? v : v == null ? [] : ps(v);
  });
  Dr(() => {
    var v = g(f), p = v.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if (He) {
      var x = (
        /** @type {Comment} */
        a.data === gs
      );
      x !== (p === 0) && (a = Ia(), At(a), tn(!1), b = !0);
    }
    if (He) {
      for (var _ = null, h, C = 0; C < p; C++) {
        if (We.nodeType === 8 && /** @type {Comment} */
        We.data === hs) {
          a = /** @type {Comment} */
          We, b = !0, tn(!1);
          break;
        }
        var w = v[C], k = r(w, C);
        h = ju(
          We,
          s,
          _,
          null,
          w,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), _ = h;
      }
      p > 0 && At(Ia());
    }
    He || Zv(v, s, a, o, t, r, n), i !== null && (p === 0 ? c ? Vo(c) : c = Kn(() => i(a)) : c !== null && Fr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), He && (a = We);
}
function Zv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Nf) !== 0, f = (o & (ds | fs)) !== 0, v = e.length, p = t.items, b = t.first, x = b, _, h = null, C, w = [], k = [], P, E, N, H;
  if (d)
    for (H = 0; H < v; H += 1)
      P = e[H], E = i(P, H), N = p.get(E), N !== void 0 && ((s = N.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(N));
  for (H = 0; H < v; H += 1) {
    if (P = e[H], E = i(P, H), N = p.get(E), N === void 0) {
      var z = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = ju(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        E,
        H,
        r,
        o,
        a
      ), p.set(E, h), w = [], k = [], x = h.next;
      continue;
    }
    if (f && Yv(N, P, H, o), N.e.f & qn && (Vo(N.e), d && ((l = N.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(N))), N !== x) {
      if (_ !== void 0 && _.has(N)) {
        if (w.length < k.length) {
          var I = k[0], L;
          h = I.prev;
          var Y = w[0], S = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            ul(w[L], I, n);
          for (L = 0; L < k.length; L += 1)
            _.delete(k[L]);
          or(t, Y.prev, S.next), or(t, h, Y), or(t, S, I), x = I, h = S, H -= 1, w = [], k = [];
        } else
          _.delete(N), ul(N, x, n), or(t, N.prev, N.next), or(t, N, h === null ? t.first : h.next), or(t, h, N), h = N;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== E; )
        x.e.f & qn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      N = x;
    }
    w.push(N), h = N, x = N.next;
  }
  if (x !== null || _ !== void 0) {
    for (var T = _ === void 0 ? [] : ps(_); x !== null; )
      x.e.f & qn || T.push(x), x = x.next;
    var $ = T.length;
    if ($ > 0) {
      var V = o & gu && v === 0 ? n : null;
      if (d) {
        for (H = 0; H < $; H += 1)
          (u = T[H].a) == null || u.measure();
        for (H = 0; H < $; H += 1)
          (c = T[H].a) == null || c.fix();
      }
      Rv(t, T, V, p);
    }
  }
  d && jo(() => {
    var M;
    if (C !== void 0)
      for (N of C)
        (M = N.a) == null || M.apply();
  }), tt.first = t.first && t.first.e, tt.last = h && h.e;
}
function Yv(e, t, n, r) {
  r & ds && Ya(e.v, t), r & fs ? Ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ju(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ds) !== 0, d = (l & Df) === 0, f = c ? d ? /* @__PURE__ */ ie(o) : Ur(o) : o, v = l & fs ? Ur(a) : a, p = {
    i: v,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Kn(() => s(e, f, v, u), He), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function ul(e, t, n) {
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
      /* @__PURE__ */ An(i)
    );
    o.before(i), i = a;
  }
}
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Es(e, t, n, r, o) {
  var i = e, a = "", s;
  Dr(() => {
    if (a === (a = t() ?? "")) {
      He && Nn();
      return;
    }
    s !== void 0 && (vn(s), s = void 0), a !== "" && (s = Kn(() => {
      if (He) {
        We.data;
        for (var l = Nn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ An(l);
        if (l === null)
          throw na(), Yr;
        Kt(We, u), i = At(l);
        return;
      }
      var c = a + "", d = Ss(c);
      Kt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Vt(e, t, n, r, o) {
  var i;
  He && Nn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Bv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Er(e, t, ...n) {
  var r = e, o = _t, i;
  Dr(() => {
    o !== (o = t()) && (i && (vn(i), i = null), i = Kn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), He && (r = We);
}
function Xu(e, t, n) {
  He && Nn();
  var r = e, o, i;
  Dr(() => {
    o !== (o = t()) && (i && (Fr(i), i = null), o && (i = Kn(() => n(r, o))));
  }, lo), He && (r = We);
}
function Wv(e, t, n, r, o, i) {
  let a = He;
  He && Nn();
  var s, l, u = null;
  He && We.nodeType === 1 && (u = /** @type {Element} */
  We, Nn());
  var c = (
    /** @type {TemplateNode} */
    He ? We : e
  ), d;
  Dr(() => {
    const f = t() || null;
    var v = f === "svg" ? Zf : null;
    f !== s && (d && (f === null ? Fr(d, () => {
      d = null, l = null;
    }) : f === l ? Vo(d) : vn(d)), f && f !== l && (d = Kn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Kt(u, u), r) {
        He && Nv(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ zt(u) : u.appendChild(Xn())
        );
        He && (p === null ? tn(!1) : At(p)), r(u, p);
      }
      tt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), At(c));
}
function at(e, t) {
  jo(() => {
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
  en(() => {
    var r = On(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      uo(() => {
        var a = n();
        Q(a), o && xs(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ku(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ku(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function qv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ku(e)) && (r && (r += " "), r += t);
  return r;
}
function kn(e) {
  return typeof e == "object" ? qv(e) : e ?? "";
}
const cl = [...` 	
\r\f \v\uFEFF`];
function jv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || cl.includes(r[a - 1])) && (s === r.length || cl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function dl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ka(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Xv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ka)), o && l.push(...Object.keys(o).map(ka));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === b - 1) {
            if (c !== -1) {
              var v = ka(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var p = e.substring(u, d).trim();
                n += " " + p + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += dl(r)), o && (n += dl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Tt(e, t, n, r, o, i) {
  var a = e.__className;
  if (He || a !== n || a === void 0) {
    var s = jv(n, r, i);
    (!He || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Sa(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function xt(e, t, n, r) {
  var o = e.__style;
  if (He || o !== t) {
    var i = Xv(t, r);
    (!He || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Sa(e, n == null ? void 0 : n[0], r[0]), Sa(e, n == null ? void 0 : n[1], r[1], "important")) : Sa(e, n, r));
  return r;
}
const yo = Symbol("class"), xr = Symbol("style"), Fu = Symbol("is custom element"), Uu = Symbol("is html");
function So(e) {
  if (He) {
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
    e.__on_r = n, vv(n), Lv();
  }
}
function Ea(e, t) {
  var n = Ps(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Kv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Ps(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Uf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1) {
  var i = Ps(e), a = i[Fu], s = !i[Uu];
  let l = He && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = kn(n.class) : (r || n[yo]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var f = Gu(e);
  for (const C in n) {
    let w = n[C];
    if (c && C === "value" && w == null) {
      e.value = e.__value = "", u[C] = w;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tt(e, v, w, r, t == null ? void 0 : t[yo], n[yo]), u[C] = w, u[yo] = n[yo];
      continue;
    }
    if (C === "style") {
      xt(e, w, t == null ? void 0 : t[xr], n[xr]), u[C] = w, u[xr] = n[xr];
      continue;
    }
    var p = u[C];
    if (w !== p) {
      u[C] = w;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, P = "$$" + C;
          let E = C.slice(2);
          var x = Ev(E);
          if (kv(E) && (E = E.slice(0, -7), k.capture = !0), !x && p) {
            if (w != null) continue;
            e.removeEventListener(E, u[P], k), u[P] = null;
          }
          if (w != null)
            if (x)
              e[`__${E}`] = w, Ko([E]);
            else {
              let N = function(H) {
                u[C].call(this, H);
              };
              u[P] = Bu(E, e, N, k);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (C === "style")
          xe(e, C, w);
        else if (C === "autofocus")
          Dv(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (C === "__value" || C === "value" && w != null))
          e.value = e.__value = w;
        else if (C === "selected" && c)
          Kv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var _ = C;
          s || (_ = Mv(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (w == null && !a && !h)
            if (i[C] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const P = t === void 0;
              if (_ === "value") {
                let E = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = E, k.value = k.__value = P ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = E, k.checked = P ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else h || f.includes(_) && (a || typeof w != "string") ? e[_] = w : typeof w != "function" && xe(e, _, w);
        }
    }
  }
  return l && tn(!0), u;
}
function Ps(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Fu]: e.nodeName.includes("-"),
      [Uu]: e.namespaceURI === Rf
    })
  );
}
var fl = /* @__PURE__ */ new Map();
function Gu(e) {
  var t = fl.get(e.nodeName);
  if (t) return t;
  fl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = mu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ms(r);
  }
  return t;
}
var $r, Eo, wi, qa, Ju;
const ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, qa), Rr(this, $r, /* @__PURE__ */ new WeakMap()), Rr(this, Eo), Rr(this, wi), Si(this, wi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, $r).set(t, r), Mf(this, qa, Ju).call(this).observe(t, yt(this, wi)), () => {
      var o = yt(this, $r).get(t);
      o.delete(n), o.size === 0 && (yt(this, $r).delete(t), yt(this, Eo).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakSet(), Ju = function() {
  return yt(this, Eo) ?? Si(this, Eo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ja.entries.set(t.target, t);
        for (var n of yt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
jt(ja, "entries", /* @__PURE__ */ new WeakMap());
let Fv = ja;
var Uv = /* @__PURE__ */ new Fv({
  box: "border-box"
});
function vl(e, t, n) {
  var r = Uv.observe(e, () => n(e[t]));
  en(() => (On(() => n(e[t])), r));
}
function gl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Ln(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return uo(() => {
      o = i, i = [], On(() => {
        e !== n(...i) && (t(e, ...i), o && gl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      jo(() => {
        i && gl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Be(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Je
  ), n = t.l.u;
  if (!n) return;
  let r = () => Q(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Kr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && lv(() => {
    hl(t, r), Mo(n.b);
  }), fr(() => {
    const o = On(() => n.m.map(jf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && fr(() => {
    hl(t, r), Mo(n.a);
  });
}
function hl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ke(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = qo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function hn(e) {
  Je === null && Qi(), so && Je.l !== null ? Jv(Je).m.push(e) : fr(() => {
    const t = On(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ms(e) {
  Je === null && Qi(), hn(() => () => On(e));
}
function Gv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function sa() {
  const e = Je;
  return e === null && Qi(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = qo(i) ? i.slice() : [i], s = Gv(
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
function Jv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Vs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), _t;
  const r = On(
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
    subscribe: $e(e, t).subscribe
  };
}
function $e(e, t = _t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (xs(e, s) && (e = s, n)) {
      const l = !Ir.length;
      for (const u of r)
        u[1](), Ir.push(u, e);
      if (l) {
        for (let u = 0; u < Ir.length; u += 2)
          Ir[u][0](Ir[u + 1]);
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
function ur(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return un(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = _t;
    const f = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, a, s);
      i ? a(p) : d = typeof p == "function" ? p : _t;
    }, v = o.map(
      (p, b) => Vs(
        p,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Mo(v), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return Vs(e, (n) => t = n)(), t;
}
let di = !1, Xa = Symbol();
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: _t
  });
  if (r.store !== e && !(Xa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = _t;
    else {
      var o = !0;
      r.unsubscribe = Vs(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && Xa in n ? F(e) : g(r.source);
}
function Qv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = _t), e;
}
function Di(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    _s(() => {
      for (var n in e)
        e[n].unsubscribe();
      Po(e, Xa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function e1(e) {
  var t = di;
  try {
    return di = !1, [e(), di];
  } finally {
    di = t;
  }
}
const t1 = {
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
function Ht(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    t1
  );
}
const n1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      hu
    )), e.special[t](n), al(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), al(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ht(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Ur(0) }, n1);
}
const r1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      mo(o) && (o = o());
      const i = Wn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Wn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lr || t === ws) return !1;
    for (let n of e.props)
      if (mo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      mo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function bt(...e) {
  return new Proxy({ props: e }, r1);
}
function pl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & Of) !== 0, a = !so || (n & Lf) !== 0, s = (n & zf) !== 0, l = (n & Af) !== 0, u = !1, c;
  s ? [c, u] = e1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || ws in e, f = s && (((o = Wn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? v = On(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && nv(), c = x(), f && f(c));
  var _;
  if (a)
    _ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (p = !0, b = !1, E);
    };
  else {
    var h = (i ? Kr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Kf, _ = () => {
      var E = g(h);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & hu))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(E, N) {
      return arguments.length > 0 ? ((!a || !N || C || u) && f(N ? _() : E), E) : _();
    };
  }
  var w = !1, k = /* @__PURE__ */ ie(c), P = /* @__PURE__ */ Kr(() => {
    var E = _(), N = g(k);
    return w ? (w = !1, N) : k.v = E;
  });
  return s && g(P), i || (P.equals = $s), function(E, N) {
    if (arguments.length > 0) {
      const H = N ? g(P) : a && s ? yn(E) : E;
      if (!P.equals(H)) {
        if (w = !0, G(k, H), b && v !== void 0 && (v = H), pl(P))
          return E;
        On(() => g(P));
      }
      return E;
    }
    return pl(P) ? P.v : g(P);
  };
}
function o1(e) {
  return new i1(e);
}
var rr, pn;
class i1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Rr(this, rr), Rr(this, pn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ie(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ws ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return G(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    Si(this, pn, (t.hydrate ? Av : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Si(this, rr, i.$$events);
    for (const a of Object.keys(yt(this, pn)))
      a === "$set" || a === "$destroy" || a === "$on" || Po(this, a, {
        get() {
          return yt(this, pn)[a];
        },
        /** @param {any} value */
        set(s) {
          yt(this, pn)[a] = s;
        },
        enumerable: !0
      });
    yt(this, pn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, yt(this, pn).$destroy = () => {
      Iv(yt(this, pn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    yt(this, pn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    yt(this, rr)[t] = yt(this, rr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return yt(this, rr)[t].push(r), () => {
      yt(this, rr)[t] = yt(this, rr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    yt(this, pn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
let Qu;
typeof HTMLElement == "function" && (Qu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), jt(this, "$$ctor"), jt(this, "$$s"), jt(this, "$$c"), jt(this, "$$cn", !1), jt(this, "$$d", {}), jt(this, "$$r", !1), jt(this, "$$p_d", {}), jt(this, "$$l", {}), jt(this, "$$l_u", /* @__PURE__ */ new Map()), jt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = a1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = bi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = o1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = uv(() => {
        uo(() => {
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
function a1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function de(e, t, n, r, o, i) {
  let a = class extends Qu {
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
    Po(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = bi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Wn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Po(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Rt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Rt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var s1 = { value: () => {
} };
function la() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new xi(n);
}
function xi(e) {
  this._ = e;
}
function l1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
xi.prototype = la.prototype = {
  constructor: xi,
  on: function(e, t) {
    var n = this._, r = l1(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = u1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = ml(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ml(n[o], e.name, null);
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
function u1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ml(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = s1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ka = "http://www.w3.org/1999/xhtml";
const yl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ka,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ua(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), yl.hasOwnProperty(t) ? { space: yl[t], local: e } : e;
}
function c1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ka && t.documentElement.namespaceURI === Ka ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function d1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ec(e) {
  var t = ua(e);
  return (t.local ? d1 : c1)(t);
}
function f1() {
}
function Ts(e) {
  return e == null ? f1 : function() {
    return this.querySelector(e);
  };
}
function v1(e) {
  typeof e != "function" && (e = Ts(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new sn(r, this._parents);
}
function g1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function h1() {
  return [];
}
function tc(e) {
  return e == null ? h1 : function() {
    return this.querySelectorAll(e);
  };
}
function p1(e) {
  return function() {
    return g1(e.apply(this, arguments));
  };
}
function m1(e) {
  typeof e == "function" ? e = p1(e) : e = tc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new sn(r, o);
}
function nc(e) {
  return function() {
    return this.matches(e);
  };
}
function rc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var y1 = Array.prototype.find;
function w1(e) {
  return function() {
    return y1.call(this.children, e);
  };
}
function b1() {
  return this.firstElementChild;
}
function x1(e) {
  return this.select(e == null ? b1 : w1(typeof e == "function" ? e : rc(e)));
}
var $1 = Array.prototype.filter;
function _1() {
  return Array.from(this.children);
}
function C1(e) {
  return function() {
    return $1.call(this.children, e);
  };
}
function k1(e) {
  return this.selectAll(e == null ? _1 : C1(typeof e == "function" ? e : rc(e)));
}
function S1(e) {
  typeof e != "function" && (e = nc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new sn(r, this._parents);
}
function oc(e) {
  return new Array(e.length);
}
function E1() {
  return new sn(this._enter || this._groups.map(oc), this._parents);
}
function Oi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Oi.prototype = {
  constructor: Oi,
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
function P1(e) {
  return function() {
    return e;
  };
}
function M1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Oi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function V1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new Oi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function T1(e) {
  return e.__data__;
}
function H1(e, t) {
  if (!arguments.length) return Array.from(this, T1);
  var n = t ? V1 : M1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = P1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = N1(e.call(c, c && c.__data__, u, r)), p = v.length, b = s[u] = new Array(p), x = a[u] = new Array(p), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var h = 0, C = 0, w, k; h < p; ++h)
      if (w = b[h]) {
        for (h >= C && (C = h + 1); !(k = x[C]) && ++C < p; ) ;
        w._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function N1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function D1() {
  return new sn(this._exit || this._groups.map(oc), this._parents);
}
function O1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function L1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, p = 0; p < d; ++p)
      (v = u[p] || c[p]) && (f[p] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new sn(s, this._parents);
}
function z1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function A1(e) {
  e || (e = I1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new sn(o, this._parents).order();
}
function I1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function R1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Z1() {
  return Array.from(this);
}
function Y1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function B1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function W1() {
  return !this.node();
}
function q1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function j1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function X1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function K1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function F1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function U1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function G1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function J1(e, t) {
  var n = ua(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? X1 : j1 : typeof t == "function" ? n.local ? G1 : U1 : n.local ? F1 : K1)(n, t));
}
function ic(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Q1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function eg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function tg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ng(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Q1 : typeof t == "function" ? tg : eg)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
  return e.style.getPropertyValue(t) || ic(e).getComputedStyle(e, null).getPropertyValue(t);
}
function rg(e) {
  return function() {
    delete this[e];
  };
}
function og(e, t) {
  return function() {
    this[e] = t;
  };
}
function ig(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ag(e, t) {
  return arguments.length > 1 ? this.each((t == null ? rg : typeof t == "function" ? ig : og)(e, t)) : this.node()[e];
}
function ac(e) {
  return e.trim().split(/^|\s+/);
}
function Hs(e) {
  return e.classList || new sc(e);
}
function sc(e) {
  this._node = e, this._names = ac(e.getAttribute("class") || "");
}
sc.prototype = {
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
function lc(e, t) {
  for (var n = Hs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function uc(e, t) {
  for (var n = Hs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function sg(e) {
  return function() {
    lc(this, e);
  };
}
function lg(e) {
  return function() {
    uc(this, e);
  };
}
function ug(e, t) {
  return function() {
    (t.apply(this, arguments) ? lc : uc)(this, e);
  };
}
function cg(e, t) {
  var n = ac(e + "");
  if (arguments.length < 2) {
    for (var r = Hs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ug : t ? sg : lg)(n, t));
}
function dg() {
  this.textContent = "";
}
function fg(e) {
  return function() {
    this.textContent = e;
  };
}
function vg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function gg(e) {
  return arguments.length ? this.each(e == null ? dg : (typeof e == "function" ? vg : fg)(e)) : this.node().textContent;
}
function hg() {
  this.innerHTML = "";
}
function pg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function mg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function yg(e) {
  return arguments.length ? this.each(e == null ? hg : (typeof e == "function" ? mg : pg)(e)) : this.node().innerHTML;
}
function wg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function bg() {
  return this.each(wg);
}
function xg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $g() {
  return this.each(xg);
}
function _g(e) {
  var t = typeof e == "function" ? e : ec(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Cg() {
  return null;
}
function kg(e, t) {
  var n = typeof e == "function" ? e : ec(e), r = t == null ? Cg : typeof t == "function" ? t : Ts(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Sg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Eg() {
  return this.each(Sg);
}
function Pg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vg(e) {
  return this.select(e ? Mg : Pg);
}
function Tg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Hg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Ng(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Dg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Og(e, t, n) {
  return function() {
    var r = this.__on, o, i = Hg(t);
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
function Lg(e, t, n) {
  var r = Ng(e + ""), o, i = r.length, a;
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
  for (s = t ? Og : Dg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function cc(e, t, n) {
  var r = ic(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function zg(e, t) {
  return function() {
    return cc(this, e, t);
  };
}
function Ag(e, t) {
  return function() {
    return cc(this, e, t.apply(this, arguments));
  };
}
function Ig(e, t) {
  return this.each((typeof t == "function" ? Ag : zg)(e, t));
}
function* Rg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var dc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function Fo() {
  return new sn([[document.documentElement]], dc);
}
function Zg() {
  return this;
}
sn.prototype = Fo.prototype = {
  constructor: sn,
  select: v1,
  selectAll: m1,
  selectChild: x1,
  selectChildren: k1,
  filter: S1,
  data: H1,
  enter: E1,
  exit: D1,
  join: O1,
  merge: L1,
  selection: Zg,
  order: z1,
  sort: A1,
  call: R1,
  nodes: Z1,
  node: Y1,
  size: B1,
  empty: W1,
  each: q1,
  attr: J1,
  style: ng,
  property: ag,
  classed: cg,
  text: gg,
  html: yg,
  raise: bg,
  lower: $g,
  append: _g,
  insert: kg,
  remove: Eg,
  clone: Vg,
  datum: Tg,
  on: Lg,
  dispatch: Ig,
  [Symbol.iterator]: Rg
};
function dn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], dc);
}
function Yg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function mn(e, t) {
  if (e = Yg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Bg = { passive: !1 }, Oo = { capture: !0, passive: !1 };
function Pa(e) {
  e.stopImmediatePropagation();
}
function Br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function fc(e) {
  var t = e.document.documentElement, n = dn(e).on("dragstart.drag", Br, Oo);
  "onselectstart" in t ? n.on("selectstart.drag", Br, Oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function vc(e, t) {
  var n = e.document.documentElement, r = dn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Br, Oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const fi = (e) => () => e;
function Fa(e, {
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
Fa.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Wg(e) {
  return !e.ctrlKey && !e.button;
}
function qg() {
  return this.parentNode;
}
function jg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Xg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Kg() {
  var e = Wg, t = qg, n = jg, r = Xg, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Bg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var P = C(this, t.call(this, w, k), w, k, "mouse");
      P && (dn(w.view).on("mousemove.drag", p, Oo).on("mouseup.drag", b, Oo), fc(w.view), Pa(w), u = !1, s = w.clientX, l = w.clientY, P("start", w));
    }
  }
  function p(w) {
    if (Br(w), !u) {
      var k = w.clientX - s, P = w.clientY - l;
      u = k * k + P * P > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    dn(w.view).on("mousemove.drag mouseup.drag", null), vc(w.view, u), Br(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var P = w.changedTouches, E = t.call(this, w, k), N = P.length, H, z;
      for (H = 0; H < N; ++H)
        (z = C(this, E, w, k, P[H].identifier, P[H])) && (Pa(w), z("start", w, P[H]));
    }
  }
  function _(w) {
    var k = w.changedTouches, P = k.length, E, N;
    for (E = 0; E < P; ++E)
      (N = o[k[E].identifier]) && (Br(w), N("drag", w, k[E]));
  }
  function h(w) {
    var k = w.changedTouches, P = k.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (N = o[k[E].identifier]) && (Pa(w), N("end", w, k[E]));
  }
  function C(w, k, P, E, N, H) {
    var z = i.copy(), I = mn(H || P, k), L, Y, S;
    if ((S = n.call(w, new Fa("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: N,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), E)) != null)
      return L = S.x - I[0] || 0, Y = S.y - I[1] || 0, function T($, V, M) {
        var O = I, R;
        switch ($) {
          case "start":
            o[N] = T, R = a++;
            break;
          case "end":
            delete o[N], --a;
          // falls through
          case "drag":
            I = mn(M || V, k), R = a;
            break;
        }
        z.call(
          $,
          w,
          new Fa($, {
            sourceEvent: V,
            subject: S,
            target: f,
            identifier: N,
            active: R,
            x: I[0] + L,
            y: I[1] + Y,
            dx: I[0] - O[0],
            dy: I[1] - O[1],
            dispatch: z
          }),
          E
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : fi(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : fi(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : fi(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : fi(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function Ns(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function gc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Uo() {
}
var Lo = 0.7, Li = 1 / Lo, Wr = "\\s*([+-]?\\d+)\\s*", zo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fg = /^#([0-9a-f]{3,8})$/, Ug = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), Gg = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), Jg = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${zo}\\)$`), Qg = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${zo}\\)$`), eh = new RegExp(`^hsl\\(${zo},${Vn},${Vn}\\)$`), th = new RegExp(`^hsla\\(${zo},${Vn},${Vn},${zo}\\)$`), wl = {
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
Ns(Uo, Ao, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bl,
  // Deprecated! Use color.formatHex.
  formatHex: bl,
  formatHex8: nh,
  formatHsl: rh,
  formatRgb: xl,
  toString: xl
});
function bl() {
  return this.rgb().formatHex();
}
function nh() {
  return this.rgb().formatHex8();
}
function rh() {
  return hc(this).formatHsl();
}
function xl() {
  return this.rgb().formatRgb();
}
function Ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Fg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? $l(t) : n === 3 ? new Xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ug.exec(e)) ? new Xt(t[1], t[2], t[3], 1) : (t = Gg.exec(e)) ? new Xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Jg.exec(e)) ? vi(t[1], t[2], t[3], t[4]) : (t = Qg.exec(e)) ? vi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eh.exec(e)) ? kl(t[1], t[2] / 100, t[3] / 100, 1) : (t = th.exec(e)) ? kl(t[1], t[2] / 100, t[3] / 100, t[4]) : wl.hasOwnProperty(e) ? $l(wl[e]) : e === "transparent" ? new Xt(NaN, NaN, NaN, 0) : null;
}
function $l(e) {
  return new Xt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Xt(e, t, n, r);
}
function oh(e) {
  return e instanceof Uo || (e = Ao(e)), e ? (e = e.rgb(), new Xt(e.r, e.g, e.b, e.opacity)) : new Xt();
}
function Ua(e, t, n, r) {
  return arguments.length === 1 ? oh(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ns(Xt, Ua, gc(Uo, {
  brighter(e) {
    return e = e == null ? Li : Math.pow(Li, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lo : Math.pow(Lo, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Xt(kr(this.r), kr(this.g), kr(this.b), zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: ih,
  formatRgb: Cl,
  toString: Cl
}));
function _l() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function ih() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Cl() {
  const e = zi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${kr(this.r)}, ${kr(this.g)}, ${kr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function kr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = kr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function kl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new wn(e, t, n, r);
}
function hc(e) {
  if (e instanceof wn) return new wn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Uo || (e = Ao(e)), !e) return new wn();
  if (e instanceof wn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new wn(a, s, l, e.opacity);
}
function ah(e, t, n, r) {
  return arguments.length === 1 ? hc(e) : new wn(e, t, n, r ?? 1);
}
function wn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ns(wn, ah, gc(Uo, {
  brighter(e) {
    return e = e == null ? Li : Math.pow(Li, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lo : Math.pow(Lo, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Xt(
      Ma(e >= 240 ? e - 240 : e + 120, o, r),
      Ma(e, o, r),
      Ma(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new wn(Sl(this.h), gi(this.s), gi(this.l), zi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Sl(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Sl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ma(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const pc = (e) => () => e;
function sh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function lh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function uh(e) {
  return (e = +e) == 1 ? mc : function(t, n) {
    return n - t ? lh(t, n, e) : pc(isNaN(t) ? n : t);
  };
}
function mc(e, t) {
  var n = t - e;
  return n ? sh(e, n) : pc(isNaN(e) ? t : e);
}
const El = function e(t) {
  var n = uh(t);
  function r(o, i) {
    var a = n((o = Ua(o)).r, (i = Ua(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = mc(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function ir(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ga = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Va = new RegExp(Ga.source, "g");
function ch(e) {
  return function() {
    return e;
  };
}
function dh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function fh(e, t) {
  var n = Ga.lastIndex = Va.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ga.exec(e)) && (o = Va.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Va.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? dh(l[0].x) : ch(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Pl = 180 / Math.PI, yc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wc(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Pl,
    skewX: Math.atan(l) * Pl,
    scaleX: a,
    scaleY: s
  };
}
var hi;
function vh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? yc : wc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gh(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? yc : (e = e.matrix, wc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, p) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, p) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var p = -1, b = f.length, x; ++p < b; ) d[(x = f[p]).i] = x.x(v);
      return d.join("");
    };
  };
}
var hh = bc(vh, "px, ", "px)", "deg)"), ph = bc(gh, ", ", ")", ")"), mh = 1e-12;
function Ml(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function yh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function wh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const bh = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, p = d - l, b = v * v + p * p, x, _;
    if (b < mh)
      _ = Math.log(f / u) / t, x = function(E) {
        return [
          s + E * v,
          l + E * p,
          u * Math.exp(t * E * _)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), w = (f * f - u * u - r * b) / (2 * f * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), P = Math.log(Math.sqrt(w * w + 1) - w);
      _ = (P - k) / t, x = function(E) {
        var N = E * _, H = Ml(k), z = u / (n * h) * (H * wh(t * N + k) - yh(k));
        return [
          s + z * v,
          l + z * p,
          u * H / Ml(t * N + k)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Qr = 0, $o = 0, wo = 0, xc = 1e3, Ai, _o, Ii = 0, Pr = 0, ca = 0, Io = typeof performance == "object" && performance.now ? performance : Date, $c = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ds() {
  return Pr || ($c(xh), Pr = Io.now() + ca);
}
function xh() {
  Pr = 0;
}
function Ri() {
  this._call = this._time = this._next = null;
}
Ri.prototype = _c.prototype = {
  constructor: Ri,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ds() : +n) + (t == null ? 0 : +t), !this._next && _o !== this && (_o ? _o._next = this : Ai = this, _o = this), this._call = e, this._time = n, Ja();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ja());
  }
};
function _c(e, t, n) {
  var r = new Ri();
  return r.restart(e, t, n), r;
}
function $h() {
  Ds(), ++Qr;
  for (var e = Ai, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Vl() {
  Pr = (Ii = Io.now()) + ca, Qr = $o = 0;
  try {
    $h();
  } finally {
    Qr = 0, Ch(), Pr = 0;
  }
}
function _h() {
  var e = Io.now(), t = e - Ii;
  t > xc && (ca -= t, Ii = e);
}
function Ch() {
  for (var e, t = Ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ai = n);
  _o = e, Ja(r);
}
function Ja(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Vl, e - Io.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ii = Io.now(), wo = setInterval(_h, xc)), Qr = 1, $c(Vl));
  }
}
function Tl(e, t, n) {
  var r = new Ri();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var kh = la("start", "end", "cancel", "interrupt"), Sh = [], Cc = 0, Hl = 1, Qa = 2, $i = 3, Nl = 4, es = 5, _i = 6;
function da(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Eh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: kh,
    tween: Sh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Cc
  });
}
function Os(e, t) {
  var n = Sn(e, t);
  if (n.state > Cc) throw new Error("too late; already scheduled");
  return n;
}
function In(e, t) {
  var n = Sn(e, t);
  if (n.state > $i) throw new Error("too late; already running");
  return n;
}
function Sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Eh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = _c(i, 0, n.time);
  function i(u) {
    n.state = Hl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Hl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === $i) return Tl(a);
        v.state === Nl ? (v.state = _i, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = _i, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Tl(function() {
      n.state === $i && (n.state = Nl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Qa, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Qa) {
      for (n.state = $i, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = es, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === es && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = _i, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ci(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Qa && r.state < es, r.state = _i, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Ph(e) {
  return this.each(function() {
    Ci(this, e);
  });
}
function Mh(e, t) {
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
function Th(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Mh : Vh)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = In(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Sn(o, r).value[t];
  };
}
function kc(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof Ao ? El : (n = Ao(t)) ? (t = n, El) : fh)(e, t);
}
function Hh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Nh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Oh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Lh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function zh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ah(e, t) {
  var n = ua(e), r = n === "transform" ? ph : kc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zh : Lh)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? Nh : Hh)(n) : (n.local ? Oh : Dh)(n, r, t));
}
function Ih(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Rh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Zh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Rh(e, i)), n;
  }
  return o._value = t, o;
}
function Yh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ih(e, i)), n;
  }
  return o._value = t, o;
}
function Bh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ua(e);
  return this.tween(n, (r.local ? Zh : Yh)(r, t));
}
function Wh(e, t) {
  return function() {
    Os(this, e).delay = +t.apply(this, arguments);
  };
}
function qh(e, t) {
  return t = +t, function() {
    Os(this, e).delay = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wh : qh)(t, e)) : Sn(this.node(), t).delay;
}
function Xh(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function Kh(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function Fh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xh : Kh)(t, e)) : Sn(this.node(), t).duration;
}
function Uh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function Gh(e) {
  var t = this._id;
  return arguments.length ? this.each(Uh(t, e)) : Sn(this.node(), t).ease;
}
function Jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    In(this, e).ease = n;
  };
}
function Qh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Jh(this._id, e));
}
function ep(e) {
  typeof e != "function" && (e = nc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function tp(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function np(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function rp(e, t, n) {
  var r, o, i = np(t) ? Os : In;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function op(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(rp(n, e, t));
}
function ip(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ap() {
  return this.on("end.remove", ip(this._id));
}
function sp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ts(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, da(u[f], t, n, f, u, Sn(c, n)));
  return new Fn(i, this._parents, t, n);
}
function lp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = tc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, p = Sn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && da(v, t, n, b, f, p);
        i.push(f), a.push(c);
      }
  return new Fn(i, a, t, n);
}
var up = Fo.prototype.constructor;
function cp() {
  return new up(this._groups, this._parents);
}
function dp(e, t) {
  var n, r, o;
  return function() {
    var i = Jr(this, e), a = (this.style.removeProperty(e), Jr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Sc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Jr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function vp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Jr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Jr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function gp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = In(this, e), u = l.on, c = l.value[i] == null ? s || (s = Sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function hp(e, t, n) {
  var r = (e += "") == "transform" ? hh : kc;
  return t == null ? this.styleTween(e, dp(e, r)).on("end.style." + e, Sc(e)) : typeof t == "function" ? this.styleTween(e, vp(e, r, Ls(this, "style." + e, t))).each(gp(this._id, e)) : this.styleTween(e, fp(e, r, t), n).on("end.style." + e, null);
}
function pp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function mp(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && pp(e, a, n)), r;
  }
  return i._value = t, i;
}
function yp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, mp(e, t, n ?? ""));
}
function wp(e) {
  return function() {
    this.textContent = e;
  };
}
function bp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function xp(e) {
  return this.tween("text", typeof e == "function" ? bp(Ls(this, "text", e)) : wp(e == null ? "" : e + ""));
}
function $p(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _p(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && $p(o)), t;
  }
  return r._value = e, r;
}
function Cp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _p(e));
}
function kp() {
  for (var e = this._name, t = this._id, n = Ec(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = Sn(l, t);
        da(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function Sp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = In(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Ep = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ec() {
  return ++Ep;
}
var Zn = Fo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: sp,
  selectAll: lp,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: ep,
  merge: tp,
  selection: cp,
  transition: kp,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: op,
  attr: Ah,
  attrTween: Bh,
  style: hp,
  styleTween: yp,
  text: xp,
  textTween: Cp,
  remove: ap,
  tween: Th,
  delay: jh,
  duration: Fh,
  ease: Gh,
  easeVarying: Qh,
  end: Sp,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Pp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Mp = {
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
function Tp(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Ec(), (n = Mp).time = Ds(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Vp(l, t));
  return new Fn(r, this._parents, e, t);
}
Fo.prototype.interrupt = Ph;
Fo.prototype.transition = Tp;
const pi = (e) => () => e;
function Hp(e, {
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
function Yn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Yn.prototype = {
  constructor: Yn,
  scale: function(e) {
    return e === 1 ? this : new Yn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Yn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var fa = new Yn(1, 0, 0);
Pc.prototype = Yn.prototype;
function Pc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return fa;
  return e.__zoom;
}
function Ta(e) {
  e.stopImmediatePropagation();
}
function bo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Np(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Dp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Dl() {
  return this.__zoom || fa;
}
function Op(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Lp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function zp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Mc() {
  var e = Np, t = Dp, n = zp, r = Op, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = bh, u = la("start", "zoom", "end"), c, d, f, v = 500, p = 150, b = 0, x = 10;
  function _(S) {
    S.property("__zoom", Dl).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(S, T, $, V) {
    var M = S.selection ? S.selection() : S;
    M.property("__zoom", Dl), S !== M ? k(S, T, $, V) : M.interrupt().each(function() {
      P(this, arguments).event(V).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, _.scaleBy = function(S, T, $, V) {
    _.scaleTo(S, function() {
      var M = this.__zoom.k, O = typeof T == "function" ? T.apply(this, arguments) : T;
      return M * O;
    }, $, V);
  }, _.scaleTo = function(S, T, $, V) {
    _.transform(S, function() {
      var M = t.apply(this, arguments), O = this.__zoom, R = $ == null ? w(M) : typeof $ == "function" ? $.apply(this, arguments) : $, W = O.invert(R), K = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(C(h(O, K), R, W), M, a);
    }, $, V);
  }, _.translateBy = function(S, T, $, V) {
    _.transform(S, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, V);
  }, _.translateTo = function(S, T, $, V, M) {
    _.transform(S, function() {
      var O = t.apply(this, arguments), R = this.__zoom, W = V == null ? w(O) : typeof V == "function" ? V.apply(this, arguments) : V;
      return n(fa.translate(W[0], W[1]).scale(R.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), O, a);
    }, V, M);
  };
  function h(S, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === S.k ? S : new Yn(T, S.x, S.y);
  }
  function C(S, T, $) {
    var V = T[0] - $[0] * S.k, M = T[1] - $[1] * S.k;
    return V === S.x && M === S.y ? S : new Yn(S.k, V, M);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, T, $, V) {
    S.on("start.zoom", function() {
      P(this, arguments).event(V).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(V).end();
    }).tween("zoom", function() {
      var M = this, O = arguments, R = P(M, O).event(V), W = t.apply(M, O), K = $ == null ? w(W) : typeof $ == "function" ? $.apply(M, O) : $, te = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), U = M.__zoom, j = typeof T == "function" ? T.apply(M, O) : T, oe = l(U.invert(K).concat(te / U.k), j.invert(K).concat(te / j.k));
      return function(ve) {
        if (ve === 1) ve = j;
        else {
          var we = oe(ve), le = te / we[2];
          ve = new Yn(le, K[0] - we[0] * le, K[1] - we[1] * le);
        }
        R.zoom(null, ve);
      };
    });
  }
  function P(S, T, $) {
    return !$ && S.__zooming || new E(S, T);
  }
  function E(S, T) {
    this.that = S, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, T), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, T) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var T = dn(this.that).datum();
      u.call(
        S,
        this.that,
        new Hp(S, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        T
      );
    }
  };
  function N(S, ...T) {
    if (!e.apply(this, arguments)) return;
    var $ = P(this, T).event(S), V = this.__zoom, M = Math.max(i[0], Math.min(i[1], V.k * Math.pow(2, r.apply(this, arguments)))), O = mn(S);
    if ($.wheel)
      ($.mouse[0][0] !== O[0] || $.mouse[0][1] !== O[1]) && ($.mouse[1] = V.invert($.mouse[0] = O)), clearTimeout($.wheel);
    else {
      if (V.k === M) return;
      $.mouse = [O, V.invert(O)], Ci(this), $.start();
    }
    bo(S), $.wheel = setTimeout(R, p), $.zoom("mouse", n(C(h(V, M), $.mouse[0], $.mouse[1]), $.extent, a));
    function R() {
      $.wheel = null, $.end();
    }
  }
  function H(S, ...T) {
    if (f || !e.apply(this, arguments)) return;
    var $ = S.currentTarget, V = P(this, T, !0).event(S), M = dn(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", te, !0), O = mn(S, $), R = S.clientX, W = S.clientY;
    fc(S.view), Ta(S), V.mouse = [O, this.__zoom.invert(O)], Ci(this), V.start();
    function K(U) {
      if (bo(U), !V.moved) {
        var j = U.clientX - R, oe = U.clientY - W;
        V.moved = j * j + oe * oe > b;
      }
      V.event(U).zoom("mouse", n(C(V.that.__zoom, V.mouse[0] = mn(U, $), V.mouse[1]), V.extent, a));
    }
    function te(U) {
      M.on("mousemove.zoom mouseup.zoom", null), vc(U.view, V.moved), bo(U), V.event(U).end();
    }
  }
  function z(S, ...T) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, V = mn(S.changedTouches ? S.changedTouches[0] : S, this), M = $.invert(V), O = $.k * (S.shiftKey ? 0.5 : 2), R = n(C(h($, O), V, M), t.apply(this, T), a);
      bo(S), s > 0 ? dn(this).transition().duration(s).call(k, R, V, S) : dn(this).call(_.transform, R, V, S);
    }
  }
  function I(S, ...T) {
    if (e.apply(this, arguments)) {
      var $ = S.touches, V = $.length, M = P(this, T, S.changedTouches.length === V).event(S), O, R, W, K;
      for (Ta(S), R = 0; R < V; ++R)
        W = $[R], K = mn(W, this), K = [K, this.__zoom.invert(K), W.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== K[2] && (M.touch1 = K, M.taps = 0) : (M.touch0 = K, O = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (M.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, v)), Ci(this), M.start());
    }
  }
  function L(S, ...T) {
    if (this.__zooming) {
      var $ = P(this, T).event(S), V = S.changedTouches, M = V.length, O, R, W, K;
      for (bo(S), O = 0; O < M; ++O)
        R = V[O], W = mn(R, this), $.touch0 && $.touch0[2] === R.identifier ? $.touch0[0] = W : $.touch1 && $.touch1[2] === R.identifier && ($.touch1[0] = W);
      if (R = $.that.__zoom, $.touch1) {
        var te = $.touch0[0], U = $.touch0[1], j = $.touch1[0], oe = $.touch1[1], ve = (ve = j[0] - te[0]) * ve + (ve = j[1] - te[1]) * ve, we = (we = oe[0] - U[0]) * we + (we = oe[1] - U[1]) * we;
        R = h(R, Math.sqrt(ve / we)), W = [(te[0] + j[0]) / 2, (te[1] + j[1]) / 2], K = [(U[0] + oe[0]) / 2, (U[1] + oe[1]) / 2];
      } else if ($.touch0) W = $.touch0[0], K = $.touch0[1];
      else return;
      $.zoom("touch", n(C(R, W, K), $.extent, a));
    }
  }
  function Y(S, ...T) {
    if (this.__zooming) {
      var $ = P(this, T).event(S), V = S.changedTouches, M = V.length, O, R;
      for (Ta(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), O = 0; O < M; ++O)
        R = V[O], $.touch0 && $.touch0[2] === R.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === R.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (R = mn(R, this), Math.hypot(d[0] - R[0], d[1] - R[1]) < x)) {
        var W = dn(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : pi(+S), _) : r;
  }, _.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : pi(!!S), _) : e;
  }, _.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : pi(!!S), _) : o;
  }, _.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : pi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), _) : t;
  }, _.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], _) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, _.constrain = function(S) {
    return arguments.length ? (n = S, _) : n;
  }, _.duration = function(S) {
    return arguments.length ? (s = +S, _) : s;
  }, _.interpolate = function(S) {
    return arguments.length ? (l = S, _) : l;
  }, _.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? _ : S;
  }, _.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, _) : Math.sqrt(b);
  }, _.tapDistance = function(S) {
    return arguments.length ? (x = +S, _) : x;
  }, _;
}
const eo = {
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
var Mr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Mr || (Mr = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var Yi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Yi || (Yi = {}));
const ts = {
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
var qr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(qr || (qr = {}));
var Ro;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ro || (Ro = {}));
var Ve;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ve || (Ve = {}));
const Ol = {
  [Ve.Left]: Ve.Right,
  [Ve.Right]: Ve.Left,
  [Ve.Top]: Ve.Bottom,
  [Ve.Bottom]: Ve.Top
};
function Ap(e, t) {
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
function Ll(e, t, n) {
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
const Rp = (e) => "id" in e && "source" in e && "target" in e, Zp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Go = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Yp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : zs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Bi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return va(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ga(n);
}, Jo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Bi(r);
      n = va(n, o);
    }
  }), ga(n);
}, Vc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Qo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Zo(s, no(u)), x = (v ?? 0) * (p ?? 0), _ = i && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, ns = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function zl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Al({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Jo(e), l = Is(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Bp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", eo.error005());
    else {
      const v = s.measured.width, p = s.measured.height;
      v && p && (d = [
        [l, u],
        [l + v, u + p]
      ]);
    }
  else s && ro(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = ro(d) ? Vr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", eo.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Tc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((p) => p.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = ns(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
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
const to = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: to(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: to(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Hc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Vr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const Il = (e, t, n) => e < t ? to(Math.abs(e - t), 1, t) / t : e > n ? -to(Math.abs(e - n), 1, t) / t : 0, Nc = (e, t, n = 15, r = 40) => {
  const o = Il(e.x, r, t.width - r) * n, i = Il(e.y, r, t.height - r) * n;
  return [o, i];
}, va = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), rs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ga = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), no = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = zs(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Bi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = zs(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Dc = (e, t) => ga(va(rs(e), rs(t))), Zo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Rl = (e) => Bn(e.width) && Bn(e.height) && Bn(e.x) && Bn(e.y), Bn = (e) => !isNaN(e) && isFinite(e), Wp = (e, t) => {
}, As = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Qo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? As(s, a) : s;
}, Oc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Is = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = to(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Wi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ro(e) {
  return e !== void 0 && e !== "parent";
}
function yr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Lc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function qp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Ha(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = jn(e), s = Qo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? As(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Rs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), jp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Xp = ["INPUT", "SELECT", "TEXTAREA"];
function Kp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Xp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const zc = (e) => "clientX" in e, jn = (e, t) => {
  var n, r;
  const o = zc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
      ...Rs(a)
    };
  });
};
function Fp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function mi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Yl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function Ac({ sourceX: e, sourceY: t, sourcePosition: n = Ve.Bottom, targetX: r, targetY: o, targetPosition: i = Ve.Top, curvature: a = 0.25 }) {
  const [s, l] = Yl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = Yl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, f, v, p] = Fp({
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
    f,
    v,
    p
  ];
}
function Ic({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Up({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Gp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = va(Bi(e), Bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Zo(a, ga(i)) > 0;
}
const Jp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Qp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), e0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Rp(e) ? n = { ...e } : n = {
    ...e,
    id: Jp(e)
  }, Qp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function os({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Ic({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Bl = {
  [Ve.Left]: { x: -1, y: 0 },
  [Ve.Right]: { x: 1, y: 0 },
  [Ve.Top]: { x: 0, y: -1 },
  [Ve.Bottom]: { x: 0, y: 1 }
}, t0 = ({ source: e, sourcePosition: t = Ve.Bottom, target: n }) => t === Ve.Left || t === Ve.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function n0({ source: e, sourcePosition: t = Ve.Bottom, target: n, targetPosition: r = Ve.Top, center: o, offset: i }) {
  const a = Bl[t], s = Bl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = t0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], p, b;
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, C, w, k] = Ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, b = o.y ?? C;
    const P = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? P : E : v = d === "x" ? E : P;
  } else {
    const P = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? E : P : v = a.y === f ? P : E, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const Y = Math.min(i - 1, i - L);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * Y : _[d] = (u[d] > n[d] ? -1 : 1) * Y;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", Y = a[d] === s[L], S = l[L] > u[L], T = l[L] < u[L];
      (a[d] === 1 && (!Y && S || Y && T) || a[d] !== 1 && (!Y && T || Y && S)) && (v = d === "x" ? P : E);
    }
    const N = { x: l.x + x.x, y: l.y + x.y }, H = { x: u.x + _.x, y: u.y + _.y }, z = Math.max(Math.abs(N.x - v[0].x), Math.abs(H.x - v[0].x)), I = Math.max(Math.abs(N.y - v[0].y), Math.abs(H.y - v[0].y));
    z >= I ? (p = (N.x + H.x) / 2, b = v[0].y) : (p = v[0].x, b = (N.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], p, b, w, k];
}
function r0(e, t, n, r) {
  const o = Math.min(Wl(e, t) / 2, Wl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function qi({ sourceX: e, sourceY: t, sourcePosition: n = Ve.Bottom, targetX: r, targetY: o, targetPosition: i = Ve.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, p] = n0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, _) => {
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = r0(c[_ - 1], x, c[_ + 1], a) : h = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, p];
}
function ql(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function o0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!ql(n) || !ql(r))
    return null;
  const o = n.internals.handleBounds || jl(n.handles), i = r.internals.handleBounds || jl(r.handles), a = Xl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Xl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Mr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Ve.Bottom, u = (s == null ? void 0 : s.position) || Ve.Top, c = Yo(n, a, l), d = Yo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function jl(e) {
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
function Yo(e, t, n = Ve.Left, r = !1) {
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
function Xl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function is(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function i0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = is(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function a0(e, t, n, r, o) {
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
  nodeExtent: Zi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, s0 = {
  ...Zs,
  checkEquality: !0
};
function Ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function l0(e, t, n) {
  const r = Ys(Zs, n);
  for (const o of e.values())
    if (o.parentId)
      Bs(o, e, t, r);
    else {
      const i = Go(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Vr(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function Rc(e, t, n, r) {
  var o, i;
  const a = Ys(s0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Go(u, a.nodeOrigin), f = ro(u.extent) ? u.extent : a.nodeExtent, v = Vr(d, f, yr(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: Zc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Bs(c, t, n, r);
  }
}
function u0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Bs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ys(Zs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  u0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = c0(e, l, i, a, u), { positionAbsolute: v } = e.internals, p = c !== v.x || d !== v.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Zc(e, t) {
  return (Bn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function c0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Go(e, n), u = ro(e.extent) ? Vr(l, e.extent, s) : l;
  let c = Vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Hc(c, s, t));
  const d = Zc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function d0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? no(l), c = Dc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = yr(l), v = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], C = (_ - f.height) * v[1];
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
    })), (f.width < s.width || f.height < s.height || p || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (p ? v[0] * p - h : 0),
        height: _ + (b ? v[1] * b - C : 0)
      }
    });
  }), i;
}
function f0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const v = t.get(f.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const p = Rs(f.nodeElement), b = v.measured.width !== p.width || v.measured.height !== p.height;
    if (p.width && p.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), _ = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Hc(h, p, t.get(v.parentId)) : _ && (h = Vr(h, _, p));
      const C = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Zl("source", f.nodeElement, x, c, v.id),
            target: Zl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && Bs(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = d0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function v0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Kl(e, t, n, r, o, i) {
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
function Yc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Kl("source", l, c, e, o, a), Kl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function g0(e, t) {
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
function Bc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Bc(n, t) : !1;
}
function Fl(e, t, n) {
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
function h0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !Bc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function Na({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function p0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function p({ noDragClassName: x, handleSelector: _, domNode: h, isSelectable: C, nodeId: w, nodeClickDistance: k = 0 }) {
    f = dn(h);
    function P({ x: z, y: I }, L) {
      const { nodeLookup: Y, nodeExtent: S, snapGrid: T, snapToGrid: $, nodeOrigin: V, onNodeDrag: M, onSelectionDrag: O, onError: R, updateNodePositions: W } = t();
      i = { x: z, y: I };
      let K = !1, te = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const U = Jo(s);
        te = rs(U);
      }
      for (const [U, j] of s) {
        if (!Y.has(U))
          continue;
        let oe = { x: z - j.distance.x, y: I - j.distance.y };
        $ && (oe = As(oe, T));
        let ve = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !j.extent) {
          const { positionAbsolute: Ee } = j.internals, se = Ee.x - te.x + S[0][0], ue = Ee.x + j.measured.width - te.x2 + S[1][0], Ne = Ee.y - te.y + S[0][1], Pe = Ee.y + j.measured.height - te.y2 + S[1][1];
          ve = [
            [se, Ne],
            [ue, Pe]
          ];
        }
        const { position: we, positionAbsolute: le } = Bp({
          nodeId: U,
          nextPosition: oe,
          nodeLookup: Y,
          nodeExtent: ve,
          nodeOrigin: V,
          onError: R
        });
        K = K || j.position.x !== we.x || j.position.y !== we.y, j.position = we, j.internals.positionAbsolute = le;
      }
      if (K && (W(s, !0), L && (r || M || !w && O))) {
        const [U, j] = Na({
          nodeId: w,
          dragItems: s,
          nodeLookup: Y
        });
        r == null || r(L, s, U, j), M == null || M(L, U, j), w || O == null || O(L, j);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: z, panBy: I, autoPanSpeed: L, autoPanOnNodeDrag: Y } = t();
      if (!Y) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, T] = Nc(u, c, L);
      (S !== 0 || T !== 0) && (i.x = (i.x ?? 0) - S / z[2], i.y = (i.y ?? 0) - T / z[2], await I({ x: S, y: T }) && P(i, null)), a = requestAnimationFrame(E);
    }
    function N(z) {
      var I;
      const { nodeLookup: L, multiSelectionActive: Y, nodesDraggable: S, transform: T, snapGrid: $, snapToGrid: V, selectNodesOnDrag: M, onNodeDragStart: O, onSelectionDragStart: R, unselectNodesAndEdges: W } = t();
      d = !0, (!M || !C) && !Y && w && ((I = L.get(w)) != null && I.selected || W()), C && M && w && (e == null || e(w));
      const K = Ha(z.sourceEvent, { transform: T, snapGrid: $, snapToGrid: V, containerBounds: c });
      if (i = K, s = h0(L, S, K, w), s.size > 0 && (n || O || !w && R)) {
        const [te, U] = Na({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(z.sourceEvent, s, te, U), O == null || O(z.sourceEvent, te, U), w || R == null || R(z.sourceEvent, U);
      }
    }
    const H = Kg().clickDistance(k).on("start", (z) => {
      const { domNode: I, nodeDragThreshold: L, transform: Y, snapGrid: S, snapToGrid: T } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, L === 0 && N(z), i = Ha(z.sourceEvent, { transform: Y, snapGrid: S, snapToGrid: T, containerBounds: c }), u = jn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: I, transform: L, snapGrid: Y, snapToGrid: S, nodeDragThreshold: T, nodeLookup: $ } = t(), V = Ha(z.sourceEvent, { transform: L, snapGrid: Y, snapToGrid: S, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !$.has(w)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, E()), !d) {
          const M = V.xSnapped - (i.x ?? 0), O = V.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + O * O) > T && N(z);
        }
        (i.x !== V.xSnapped || i.y !== V.ySnapped) && s && d && (u = jn(z.sourceEvent, c), P(V, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: L, onNodeDragStop: Y, onSelectionDragStop: S } = t();
        if (L(s, !1), o || Y || !w && S) {
          const [T, $] = Na({
            nodeId: w,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, T, $), Y == null || Y(z.sourceEvent, T, $), w || S == null || S(z.sourceEvent, $);
        }
      }
    }).filter((z) => {
      const I = z.target;
      return !z.button && (!x || !Fl(I, `.${x}`, h)) && (!_ || Fl(I, _, h));
    });
    f.call(H);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function m0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Zo(o, no(i)) > 0 && r.push(i);
  return r;
}
const y0 = 250;
function w0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = m0(e, n, t + y0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = Yo(u, d, d.position, !0), p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      p > t || (p < s ? (a = [{ ...d, x: f, y: v }], s = p) : p === s && a.push({ ...d, x: f, y: v }));
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
function Wc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Yo(u, d, d.position, !0) } : d;
}
function qc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function b0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const jc = () => !0;
function x0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: _ = jc, onReconnectEnd: h, updateConnection: C, getTransform: w, getFromHandle: k, autoPanSpeed: P }) {
  const E = jp(e.target);
  let N = 0, H;
  const { x: z, y: I } = jn(e), L = E == null ? void 0 : E.elementFromPoint(z, I), Y = qc(i, L), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !Y)
    return;
  const T = Wc(o, Y, r, l, t);
  if (!T)
    return;
  let $ = jn(e, S), V = !1, M = null, O = !1, R = null;
  function W() {
    if (!c || !S)
      return;
    const [we, le] = Nc($, S, P);
    f({ x: we, y: le }), N = requestAnimationFrame(W);
  }
  const K = {
    ...T,
    nodeId: o,
    type: Y,
    position: T.position
  }, te = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: Yo(te, K, Ve.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: te,
    to: $,
    toHandle: null,
    toPosition: Ol[K.position],
    toNode: null
  };
  C(U);
  let j = U;
  p == null || p(e, { nodeId: o, handleId: r, handleType: Y });
  function oe(we) {
    if (!k() || !K) {
      ve(we);
      return;
    }
    const le = w();
    $ = jn(we, S), H = w0(Qo($, le, !1, [1, 1]), n, l, K), V || (W(), V = !0);
    const Ee = Xc(we, {
      handle: H,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: _,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    R = Ee.handleDomNode, M = Ee.connection, O = b0(!!H, Ee.isValid);
    const se = {
      // from stays the same
      ...j,
      isValid: O,
      to: H && O ? Oc({ x: H.x, y: H.y }, le) : $,
      toHandle: Ee.toHandle,
      toPosition: O && Ee.toHandle ? Ee.toHandle.position : Ol[K.position],
      toNode: Ee.toHandle ? l.get(Ee.toHandle.nodeId) : null
    };
    O && H && j.toHandle && se.toHandle && j.toHandle.type === se.toHandle.type && j.toHandle.nodeId === se.toHandle.nodeId && j.toHandle.id === se.toHandle.id && j.to.x === se.to.x && j.to.y === se.to.y || (C(se), j = se);
  }
  function ve(we) {
    (H || R) && M && O && (b == null || b(M));
    const { inProgress: le, ...Ee } = j, se = {
      ...Ee,
      toPosition: j.toHandle ? j.toPosition : null
    };
    x == null || x(we, se), i && (h == null || h(we, se)), v(), cancelAnimationFrame(N), V = !1, O = !1, M = null, R = null, E.removeEventListener("mousemove", oe), E.removeEventListener("mouseup", ve), E.removeEventListener("touchmove", oe), E.removeEventListener("touchend", ve);
  }
  E.addEventListener("mousemove", oe), E.addEventListener("mouseup", ve), E.addEventListener("touchmove", oe), E.addEventListener("touchend", ve);
}
function Xc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = jc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: p } = jn(e), b = a.elementFromPoint(v, p), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = qc(void 0, x), C = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), P = x.classList.contains("connectableend");
    if (!C || !h)
      return _;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? w : o,
      target: d ? r : C,
      targetHandle: d ? o : w
    };
    _.connection = E;
    const N = k && P && (n === Mr.Strict ? d && h === "source" || !d && h === "target" : C !== r || w !== o);
    _.isValid = N && u(E), _.toHandle = Wc(C, h, w, c, n, !1);
  }
  return _;
}
const $0 = {
  onPointerDown: x0,
  isValid: Xc
};
function _0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = dn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const p = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, P = w[2] * Math.pow(2, k);
      t.scaleTo(P);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const w = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], P = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const E = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), N = {
        x: w[0] - P[0] * E,
        y: w[1] - P[1] * E
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: w[2]
      }, H, s);
    }, h = Mc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? p : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: mn
  };
}
const C0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ha = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Da = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Zr = (e, t) => e.target.closest(`.${t}`), Kc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Oa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Fc = (e) => {
  const t = e.ctrlKey && Wi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function k0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Zr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = mn(c), _ = Fc(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === cr.Vertical ? 0 : c.deltaX * f, p = o === cr.Horizontal ? 0 : c.deltaY * f;
    !Wi() && c.shiftKey && o !== cr.Vertical && (v = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ha(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function S0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Zr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function E0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ha(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function P0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Kc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ha(i.transform)));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Kc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && C0(e.prevViewport, a.transform))) {
      const l = ha(a.transform);
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
function V0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Zr(c, `${u}-flow__node`) || Zr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || a || Zr(c, s) && c.type === "wheel" || Zr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function T0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Mc().clickDistance(!Bn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = dn(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Fc);
  function x(L, Y) {
    return v ? new Promise((S) => {
      f == null || f.transform(Oa(v, Y == null ? void 0 : Y.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: L, noPanClassName: Y, onPaneContextMenu: S, userSelectionActive: T, panOnScroll: $, panOnDrag: V, panOnScrollMode: M, panOnScrollSpeed: O, preventScrolling: R, zoomOnPinch: W, zoomOnScroll: K, zoomOnDoubleClick: te, zoomActivationKeyPressed: U, lib: j, onTransformChange: oe }) {
    T && !c.isZoomingOrPanning && h();
    const ve = $ && !U && !T ? k0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: M,
      panOnScrollSpeed: O,
      zoomOnPinch: W,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : S0({
      noWheelClassName: L,
      preventScrolling: R,
      d3ZoomHandler: p
    });
    if (v.on("wheel.zoom", ve, { passive: !1 }), !T) {
      const le = E0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", le);
      const Ee = P0({
        zoomPanValues: c,
        panOnDrag: V,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: oe
      });
      f.on("zoom", Ee);
      const se = M0({
        zoomPanValues: c,
        panOnDrag: V,
        panOnScroll: $,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", se);
    }
    const we = V0({
      zoomActivationKeyPressed: U,
      panOnDrag: V,
      zoomOnScroll: K,
      panOnScroll: $,
      zoomOnDoubleClick: te,
      zoomOnPinch: W,
      userSelectionActive: T,
      noPanClassName: Y,
      noWheelClassName: L,
      lib: j
    });
    f.filter(we), te ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(L, Y, S) {
    const T = Da(L), $ = f == null ? void 0 : f.constrain()(T, Y, S);
    return $ && await x($), new Promise((V) => V($));
  }
  async function w(L, Y) {
    const S = Da(L);
    return await x(S, Y), new Promise((T) => T(S));
  }
  function k(L) {
    if (v) {
      const Y = Da(L), S = v.property("__zoom");
      (S.k !== L.zoom || S.x !== L.x || S.y !== L.y) && (f == null || f.transform(v, Y, null, { sync: !0 }));
    }
  }
  function P() {
    const L = v ? Pc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function E(L, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(Oa(v, Y == null ? void 0 : Y.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(Oa(v, Y == null ? void 0 : Y.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function H(L) {
    f == null || f.scaleExtent(L);
  }
  function z(L) {
    f == null || f.translateExtent(L);
  }
  function I(L) {
    const Y = !Bn(L) || L < 0 ? 0 : L;
    f == null || f.clickDistance(Y);
  }
  return {
    update: _,
    destroy: h,
    setViewport: w,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: E,
    scaleBy: N,
    setScaleExtent: H,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: I
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var H0 = /* @__PURE__ */ ae('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(te, "$connectable", n), i = () => ee(we, "$connectionRadius", n), a = () => ee(oe, "$domNode", n), s = () => ee(ve, "$nodeLookup", n), l = () => ee(j, "$connectionMode", n), u = () => ee(se, "$lib", n), c = () => ee(Ue, "$autoPanOnConnect", n), d = () => ee(Ae, "$flowId", n), f = () => ee(Ee, "$isValidConnectionStore", n), v = () => ee(Ne, "$onedgecreate", n), p = () => ee(fe, "$onConnectAction", n), b = () => ee(Se, "$onConnectStartAction", n), x = () => ee(Xe, "$onConnectEndAction", n), _ = () => ee(le, "$viewport", n), h = () => ee(vt, "$connection", n), C = () => ee(Ge, "$edges", n), w = () => ee(ce, "$connectionLookup", n), k = /* @__PURE__ */ ie(), P = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), N = /* @__PURE__ */ ie(), H = /* @__PURE__ */ ie(), z = /* @__PURE__ */ ie(), I = /* @__PURE__ */ ie(), L = /* @__PURE__ */ ie();
  let Y = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), T = y(t, "position", 28, () => Ve.Top), $ = y(t, "style", 12, void 0), V = y(t, "isValidConnection", 12, void 0), M = y(t, "onconnect", 12, void 0), O = y(t, "ondisconnect", 12, void 0), R = y(t, "isConnectable", 12, void 0), W = y(t, "class", 12, void 0);
  const K = Sr("svelteflow__node_id"), te = Sr("svelteflow__node_connectable"), U = Qe(), {
    connectionMode: j,
    domNode: oe,
    nodeLookup: ve,
    connectionRadius: we,
    viewport: le,
    isValidConnection: Ee,
    lib: se,
    addEdge: ue,
    onedgecreate: Ne,
    panBy: Pe,
    cancelConnection: Ze,
    updateConnection: ne,
    autoPanOnConnect: Ue,
    edges: Ge,
    connectionLookup: ce,
    onconnect: fe,
    onconnectstart: Se,
    onconnectend: Xe,
    flowId: Ae,
    connection: vt
  } = U;
  function st(De) {
    const lt = zc(De);
    (lt && De.button === 0 || !lt) && $0.onPointerDown(De, {
      handleId: g(E),
      nodeId: K,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: V() ?? f(),
      updateConnection: ne,
      cancelConnection: Ze,
      panBy: Pe,
      onConnect: (Ye) => {
        var Re;
        const ut = v() ? v()(Ye) : Ye;
        ut && (ue(ut), (Re = p()) == null || Re(Ye));
      },
      onConnectStart: (Ye, Re) => {
        var ut;
        (ut = b()) == null || ut(Ye, {
          nodeId: Re.nodeId,
          handleId: Re.handleId,
          handleType: Re.handleType
        });
      },
      onConnectEnd: (Ye, Re) => {
        var ut;
        (ut = x()) == null || ut(Ye, Re);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let re = /* @__PURE__ */ ie(null), Ie = /* @__PURE__ */ ie();
  me(() => Q(S()), () => {
    G(k, S() === "target");
  }), me(
    () => (Q(R()), o()),
    () => {
      G(P, R() !== void 0 ? R() : o());
    }
  ), me(() => Q(Y()), () => {
    G(E, Y() || null);
  }), me(
    () => (Q(M()), Q(O()), C(), w(), Q(S()), Q(Y())),
    () => {
      (M() || O()) && (C(), G(Ie, w().get(`${K}-${S()}${Y() ? `-${Y()}` : ""}`)));
    }
  ), me(
    () => (g(re), g(Ie), Q(O()), Q(M())),
    () => {
      if (g(re) && !Ap(g(Ie), g(re))) {
        const De = g(Ie) ?? /* @__PURE__ */ new Map();
        Ll(g(re), De, O()), Ll(De, g(re), M());
      }
      G(re, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), me(() => h(), () => {
    G(N, !!h().fromHandle);
  }), me(
    () => (h(), Q(S()), g(E)),
    () => {
      var De, lt, Ye;
      G(H, ((De = h().fromHandle) == null ? void 0 : De.nodeId) === K && ((lt = h().fromHandle) == null ? void 0 : lt.type) === S() && ((Ye = h().fromHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), me(
    () => (h(), Q(S()), g(E)),
    () => {
      var De, lt, Ye;
      G(z, ((De = h().toHandle) == null ? void 0 : De.nodeId) === K && ((lt = h().toHandle) == null ? void 0 : lt.type) === S() && ((Ye = h().toHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), me(
    () => (l(), h(), Q(S()), g(E)),
    () => {
      var De, lt, Ye;
      G(I, l() === Mr.Strict ? ((De = h().fromHandle) == null ? void 0 : De.type) !== S() : K !== ((lt = h().fromHandle) == null ? void 0 : lt.nodeId) || g(E) !== ((Ye = h().fromHandle) == null ? void 0 : Ye.id));
    }
  ), me(() => (g(z), h()), () => {
    G(L, g(z) && h().isValid);
  }), kt(), Be();
  var ye = H0();
  xe(ye, "data-nodeid", K);
  let Zt;
  var Yt = X(ye);
  Vt(Yt, t, "default", {}), q(ye), Te(
    (De, lt) => {
      xe(ye, "data-handleid", g(E)), xe(ye, "data-handlepos", T()), xe(ye, "data-id", `${d() ?? ""}-${K ?? ""}-${Y() || ""}-${S() ?? ""}`), Zt = Tt(ye, 1, De, null, Zt, lt), xt(ye, $());
    },
    [
      () => kn(Rt([
        "svelte-flow__handle",
        `svelte-flow__handle-${T()}`,
        "nodrag",
        "nopan",
        T(),
        W()
      ])),
      () => ({
        valid: g(L),
        connectingto: g(z),
        connectingfrom: g(H),
        source: !g(k),
        target: g(k),
        connectablestart: g(P),
        connectableend: g(P),
        connectable: g(P),
        connectionindicator: g(P) && (!g(N) || g(I))
      })
    ],
    be
  ), ct("mousedown", ye, st), ct("touchstart", ye, st), A(e, ye);
  var ln = he({
    get id() {
      return Y();
    },
    set id(De) {
      Y(De), m();
    },
    get type() {
      return S();
    },
    set type(De) {
      S(De), m();
    },
    get position() {
      return T();
    },
    set position(De) {
      T(De), m();
    },
    get style() {
      return $();
    },
    set style(De) {
      $(De), m();
    },
    get isValidConnection() {
      return V();
    },
    set isValidConnection(De) {
      V(De), m();
    },
    get onconnect() {
      return M();
    },
    set onconnect(De) {
      M(De), m();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(De) {
      O(De), m();
    },
    get isConnectable() {
      return R();
    },
    set isConnectable(De) {
      R(De), m();
    },
    get class() {
      return W();
    },
    set class(De) {
      W(De), m();
    }
  });
  return r(), ln;
}
de(
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
var N0 = /* @__PURE__ */ ae("<!> <!>", 1);
function ji(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Be();
  var a = N0(), s = _e(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ve.Top);
  gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Ve.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Te(() => {
    var f;
    return on(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), A(e, a), he({
    get data() {
      return r();
    },
    set data(f) {
      r(f), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), m();
    }
  });
}
de(
  ji,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var D0 = /* @__PURE__ */ ae(" <!>", 1);
function Uc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Be(), Le();
  var i = D0(), a = _e(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ve.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), he({
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
de(Uc, { data: {}, sourcePosition: {} }, [], [], !0);
var O0 = /* @__PURE__ */ ae(" <!>", 1);
function Gc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Be(), Le();
  var i = O0(), a = _e(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Ve.Top);
  return gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), he({
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
de(Gc, { data: {}, targetPosition: {} }, [], [], !0);
function Jc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, []);
}
de(Jc, {}, [], [], !0);
function Gl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Xi(e, { target: t, domNode: n }) {
  return Gl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Gl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var L0 = /* @__PURE__ */ ae("<div><!></div>");
function Qc(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$domNode", n), { domNode: i } = Qe();
  Be();
  var a = L0(), s = X(a);
  Vt(s, t, "default", {}), q(a), Mt(a, (l, u) => Xi == null ? void 0 : Xi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), he(), r();
}
de(Qc, {}, ["default"], [], !0);
function ed() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Qe();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", eo.error012(s));
      return;
    }
    (l.selectable || F(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var z0 = /* @__PURE__ */ ae('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function td(e, t) {
  ge(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = ed(), a = Sr("svelteflow__edge_id");
  return Be(), Qc(e, {
    children: (s, l) => {
      var u = z0();
      let c;
      var d = X(u);
      Vt(d, t, "default", {}), q(u), Te(() => c = xt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), ct("keyup", u, () => {
      }), ct("click", u, () => {
        a && i(a);
      }), A(s, u);
    },
    $$slots: { default: !0 }
  }), he({
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
de(td, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var A0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), I0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function ei(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Be();
  var p = I0(), b = _e(p), x = B(b);
  {
    var _ = (w) => {
      var k = A0();
      xe(k, "stroke-opacity", 0), xe(k, "stroke-width", v), Te(() => xe(k, "d", r())), A(w, k);
    };
    Ce(x, (w) => {
      v && w(_);
    });
  }
  var h = B(x);
  {
    var C = (w) => {
      td(w, {
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
          Le();
          var E = Fe();
          Te(() => on(E, o())), A(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(h, (w) => {
      o() && w(C);
    });
  }
  return Te(
    (w) => {
      xe(b, "id", n()), xe(b, "d", r()), Tt(b, 0, w), xe(b, "marker-start", l()), xe(b, "marker-end", u()), xt(b, c());
    },
    [
      () => kn(Rt(["svelte-flow__edge-path", f()]))
    ],
    be
  ), A(e, p), he({
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
      return f();
    },
    set class(w) {
      f(w), m();
    }
  });
}
de(
  ei,
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), _ = y(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q(x()), Q(p()), Q(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Ac({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: _()
      }));
    }
  ), kt(), Be(), ei(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), he({
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
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
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
      return _();
    },
    set targetPosition(h) {
      _(h), m();
    }
  });
}
de(
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
function nd(e, t) {
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), _ = y(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q(x()), Q(p()), Q(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(qi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: _()
      }));
    }
  ), kt(), Be(), ei(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), he({
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
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
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
      return _();
    },
    set targetPosition(h) {
      _(h), m();
    }
  });
}
de(
  nd,
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
    "targetX",
    "targetY"
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return me(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(p()), Q(b())),
    () => {
      ((x) => (G(r, x[0]), G(o, x[1]), G(i, x[2])))(os({
        sourceX: f(),
        sourceY: v(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), kt(), Be(), ei(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), he({
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
      return f();
    },
    set sourceX(x) {
      f(x), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), m();
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
de(
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
    targetX: {},
    targetY: {}
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), _ = y(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q(x()), Q(p()), Q(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(qi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), kt(), Be(), ei(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), he({
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
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
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
      return _();
    },
    set targetPosition(h) {
      _(h), m();
    }
  });
}
de(
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function R0(e, t) {
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
const Y0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, i = n.set;
  let a = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, B0 = (e, t, n, r = [0, 0], o = Zi) => {
  const { subscribe: i, set: a, update: s } = $e([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Rc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, p = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: p
  };
}, W0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((p) => ({ ...l, ...p })) : f;
    Yc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, id = {
  input: Uc,
  output: Gc,
  default: ji,
  group: Jc
}, ad = {
  straight: rd,
  smoothstep: nd,
  default: Ki,
  step: od
}, q0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Zi;
  Rc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Jo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Is(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: $e(null),
    nodes: B0(e, s, l, d, f),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(c),
    visibleNodes: un([]),
    edges: W0(t, u, c),
    visibleEdges: un([]),
    connectionLookup: un(u),
    height: $e(500),
    width: $e(500),
    minZoom: $e(0.5),
    maxZoom: $e(2),
    nodeOrigin: $e(d),
    nodeDragThreshold: $e(1),
    nodeExtent: $e(f),
    translateExtent: $e(Zi),
    autoPanOnNodeDrag: $e(!0),
    autoPanOnConnect: $e(!0),
    fitViewOnInit: $e(!1),
    fitViewOnInitDone: $e(!1),
    fitViewOptions: $e(void 0),
    panZoom: $e(null),
    snapGrid: $e(null),
    dragging: $e(!1),
    selectionRect: $e(null),
    selectionKeyPressed: $e(!1),
    multiselectionKeyPressed: $e(!1),
    deleteKeyPressed: $e(!1),
    panActivationKeyPressed: $e(!1),
    zoomActivationKeyPressed: $e(!1),
    selectionRectMode: $e(null),
    selectionMode: $e(Yi.Partial),
    nodeTypes: $e(id),
    edgeTypes: $e(ad),
    viewport: $e(v),
    connectionMode: $e(Mr.Strict),
    domNode: $e(null),
    connection: un(ts),
    connectionLineType: $e(qr.Bezier),
    connectionRadius: $e(20),
    isValidConnection: $e(() => !0),
    nodesDraggable: $e(!0),
    nodesConnectable: $e(!0),
    elementsSelectable: $e(!0),
    selectNodesOnDrag: $e(!0),
    markers: un([]),
    defaultMarkerColor: $e("#b1b1b7"),
    lib: un("svelte"),
    onlyRenderVisibleElements: $e(!1),
    onerror: $e(Wp),
    ondelete: $e(void 0),
    onedgecreate: $e(void 0),
    onconnect: $e(void 0),
    onconnectstart: $e(void 0),
    onconnectend: $e(void 0),
    onbeforedelete: $e(void 0),
    nodesInitialized: $e(!1),
    edgesInitialized: $e(!1),
    viewportInitialized: $e(!1),
    initialized: un(!1)
  };
};
function j0(e) {
  const t = ur([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Gp({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return ur([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return a;
    const c = o0({
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
      zIndex: Up({
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
function X0(e) {
  return ur([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? Vc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const pa = Symbol();
function sd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = q0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l($) {
    s.nodeTypes.set({
      ...id,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...ad,
      ...$
    });
  }
  function c($) {
    const V = F(s.edges);
    s.edges.set(e0($, V));
  }
  const d = ($, V = !1) => {
    var M;
    const O = F(s.nodeLookup);
    for (const [R, W] of $) {
      const K = (M = O.get(R)) == null ? void 0 : M.internals.userNode;
      K && (K.position = W.position, K.dragging = V);
    }
    s.nodes.update((R) => R);
  };
  function f($) {
    var V, M, O;
    const R = F(s.nodeLookup), W = F(s.parentLookup), { changes: K, updatedInternals: te } = f0($, R, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (te) {
      if (l0(R, W, { nodeOrigin: i, nodeExtent: a }), !F(s.fitViewOnInitDone) && F(s.fitViewOnInit)) {
        const U = F(s.fitViewOptions), j = p({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(j);
      }
      for (const U of K) {
        const j = (V = R.get(U.id)) == null ? void 0 : V.internals.userNode;
        if (j)
          switch (U.type) {
            case "dimensions": {
              const oe = { ...j.measured, ...U.dimensions };
              U.setAttributes && (j.width = ((M = U.dimensions) == null ? void 0 : M.width) ?? j.width, j.height = ((O = U.dimensions) == null ? void 0 : O.height) ?? j.height), j.measured = oe;
              break;
            }
            case "position":
              j.position = U.position ?? j.position;
              break;
          }
      }
      s.nodes.update((U) => U), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const V = F(s.panZoom), M = F(s.domNode);
    if (!V || !M)
      return Promise.resolve(!1);
    const { width: O, height: R } = Rs(M), W = zl(F(s.nodeLookup), $);
    return Al({
      nodes: W,
      width: O,
      height: R,
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: V
    }, $);
  }
  function p($) {
    const V = F(s.panZoom);
    if (!V)
      return !1;
    const M = zl(F(s.nodeLookup), $);
    return Al({
      nodes: M,
      width: F(s.width),
      height: F(s.height),
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: V
    }, $), M.size > 0;
  }
  function b($, V) {
    const M = F(s.panZoom);
    return M ? M.scaleBy($, V) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function _($) {
    return b(1 / 1.2, $);
  }
  function h($) {
    const V = F(s.panZoom);
    V && (V.setScaleExtent([$, F(s.maxZoom)]), s.minZoom.set($));
  }
  function C($) {
    const V = F(s.panZoom);
    V && (V.setScaleExtent([F(s.minZoom), $]), s.maxZoom.set($));
  }
  function w($) {
    const V = F(s.panZoom);
    V && (V.setTranslateExtent($), s.translateExtent.set($));
  }
  function k($) {
    let V = !1;
    return $.forEach((M) => {
      M.selected && (M.selected = !1, V = !0);
    }), V;
  }
  function P($) {
    var V;
    (V = F(s.panZoom)) == null || V.setClickDistance($);
  }
  function E($) {
    k(($ == null ? void 0 : $.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), k(($ == null ? void 0 : $.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var V;
    if ($) {
      const M = F(s.nodes), O = F(s.edges), R = M.filter((U) => U.selected), W = O.filter((U) => U.selected), { nodes: K, edges: te } = await Tc({
        nodesToRemove: R,
        edgesToRemove: W,
        nodes: M,
        edges: O,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (K.length || te.length) && (s.nodes.update((U) => U.filter((j) => !K.some((oe) => oe.id === j.id))), s.edges.update((U) => U.filter((j) => !te.some((oe) => oe.id === j.id))), (V = F(s.ondelete)) == null || V({
        nodes: K,
        edges: te
      }));
    }
  });
  function N($) {
    const V = F(s.multiselectionKeyPressed);
    s.nodes.update((M) => M.map((O) => {
      const R = $.includes(O.id), W = V && O.selected || R;
      return O.selected = W, O;
    })), V || s.edges.update((M) => M.map((O) => (O.selected = !1, O)));
  }
  function H($) {
    const V = F(s.multiselectionKeyPressed);
    s.edges.update((M) => M.map((O) => {
      const R = $.includes(O.id), W = V && O.selected || R;
      return O.selected = W, O;
    })), V || s.nodes.update((M) => M.map((O) => (O.selected = !1, O)));
  }
  function z($) {
    var V;
    const M = (V = F(s.nodes)) == null ? void 0 : V.find((O) => O.id === $);
    if (!M) {
      console.warn("012", eo.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), M.selected ? M.selected && F(s.multiselectionKeyPressed) && E({ nodes: [M], edges: [] }) : N([$]);
  }
  function I($) {
    const V = F(s.viewport);
    return v0({
      delta: $,
      panZoom: F(s.panZoom),
      transform: [V.x, V.y, V.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const L = $e(ts), Y = ($) => {
    L.set({ ...$ });
  };
  function S() {
    L.set(ts);
  }
  function T() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: j0(s),
    visibleNodes: X0(s),
    connection: ur([L, s.viewport], ([$, V]) => $.inProgress ? {
      ...$,
      to: Qo($.to, [V.x, V.y, V.zoom])
    } : { ...$ }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([$, V, M]) => i0($, { defaultColor: V, id: M })),
    initialized: (() => {
      let $ = !1;
      const V = F(s.nodes).length, M = F(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([O, R, W]) => $ || (V === 0 ? $ = W : M === 0 ? $ = W && O : $ = W && O && R, $));
    })(),
    // actions
    syncNodeStores: ($) => R0(s.nodes, $),
    syncEdgeStores: ($) => Z0(s.edges, $),
    syncViewport: ($) => Y0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: _,
    fitView: ($) => v($),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: w,
    setPaneClickDistance: P,
    unselectNodesAndEdges: E,
    addSelectedNodes: N,
    addSelectedEdges: H,
    handleNodeSelection: z,
    panBy: I,
    updateConnection: Y,
    cancelConnection: S,
    reset: T
  };
}
function Qe() {
  const e = Sr(pa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function K0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = sd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Gr(pa, {
    getStore: () => s
  }), s;
}
function Jl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = T0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var F0 = /* @__PURE__ */ ae('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const U0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ld(e, t) {
  ge(t, !1), at(e, U0);
  const [n, r] = ft(), o = () => ee(M, "$panActivationKeyPressed", n), i = () => ee(Y, "$minZoom", n), a = () => ee(S, "$maxZoom", n), s = () => ee(O, "$zoomActivationKeyPressed", n), l = () => ee(L, "$selectionRect", n), u = () => ee($, "$translateExtent", n), c = () => ee(V, "$lib", n), d = /* @__PURE__ */ ie(), f = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), _ = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), C = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), P = y(t, "zoomOnPinch", 12), E = y(t, "panOnDrag", 12), N = y(t, "panOnScroll", 12), H = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: I,
    selectionRect: L,
    minZoom: Y,
    maxZoom: S,
    dragging: T,
    translateExtent: $,
    lib: V,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: O,
    viewportInitialized: R
  } = Qe(), W = (j) => z.set({
    x: j[0],
    y: j[1],
    zoom: j[2]
  });
  hn(() => {
    Di(R, !0);
  }), me(() => Q(p()), () => {
    G(d, p() || { x: 0, y: 0, zoom: 1 });
  }), me(
    () => (o(), Q(E())),
    () => {
      G(f, o() || E());
    }
  ), me(
    () => (o(), Q(N())),
    () => {
      G(v, o() || N());
    }
  ), kt(), Be();
  var K = F0(), te = X(K);
  Vt(te, t, "default", {}), q(K), Mt(K, (j, oe) => Jl == null ? void 0 : Jl(j, oe), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: T,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: P(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: H(),
    onTransformChange: W
  })), A(e, K);
  var U = he({
    get initialViewport() {
      return p();
    },
    set initialViewport(j) {
      p(j), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(j) {
      b(j), m();
    },
    get onMove() {
      return x();
    },
    set onMove(j) {
      x(j), m();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(j) {
      _(j), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(j) {
      h(j), m();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(j) {
      C(j), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(j) {
      w(j), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(j) {
      k(j), m();
    },
    get zoomOnPinch() {
      return P();
    },
    set zoomOnPinch(j) {
      P(j), m();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(j) {
      E(j), m();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(j) {
      N(j), m();
    },
    get paneClickDistance() {
      return H();
    },
    set paneClickDistance(j) {
      H(j), m();
    }
  });
  return r(), U;
}
de(
  ld,
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
function Ql(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function eu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var G0 = /* @__PURE__ */ ae("<div><!></div>");
const J0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function ud(e, t) {
  ge(t, !1), at(e, J0);
  const [n, r] = ft(), o = () => ee(S, "$panActivationKeyPressed", n), i = () => ee(L, "$selectionKeyPressed", n), a = () => ee(z, "$selectionRect", n), s = () => ee(H, "$elementsSelectable", n), l = () => ee(I, "$selectionRectMode", n), u = () => ee(P, "$edges", n), c = () => ee(k, "$nodeLookup", n), d = () => ee(E, "$viewport", n), f = () => ee(Y, "$selectionMode", n), v = () => ee(N, "$dragging", n), p = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie();
  let _ = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const C = sa(), {
    nodes: w,
    nodeLookup: k,
    edges: P,
    viewport: E,
    dragging: N,
    elementsSelectable: H,
    selectionRect: z,
    selectionRectMode: I,
    selectionKeyPressed: L,
    selectionMode: Y,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: T
  } = Qe();
  let $ = /* @__PURE__ */ ie(), V = null, M = [], O = !1;
  function R(se) {
    if (O) {
      O = !1;
      return;
    }
    C("paneclick", { event: se }), T(), I.set(null);
  }
  function W(se) {
    var ue, Ne;
    if (V = g($).getBoundingClientRect(), !H || !g(b) || se.button !== 0 || se.target !== g($) || !V)
      return;
    (Ne = (ue = se.target) == null ? void 0 : ue.setPointerCapture) == null || Ne.call(ue, se.pointerId);
    const { x: Pe, y: Ze } = jn(se, V);
    T(), z.set({
      width: 0,
      height: 0,
      startX: Pe,
      startY: Ze,
      x: Pe,
      y: Ze
    });
  }
  function K(se) {
    if (!g(b) || !V || !a())
      return;
    O = !0;
    const ue = jn(se, V), Ne = a().startX ?? 0, Pe = a().startY ?? 0, Ze = {
      ...a(),
      x: ue.x < Ne ? ue.x : Ne,
      y: ue.y < Pe ? ue.y : Pe,
      width: Math.abs(ue.x - Ne),
      height: Math.abs(ue.y - Pe)
    }, ne = M.map((fe) => fe.id), Ue = ns(M, u()).map((fe) => fe.id);
    M = Vc(
      c(),
      Ze,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Yi.Partial,
      !0
    );
    const Ge = ns(M, u()).map((fe) => fe.id), ce = M.map((fe) => fe.id);
    (ne.length !== ce.length || ce.some((fe) => !ne.includes(fe))) && w.update((fe) => fe.map(eu(ce))), (Ue.length !== Ge.length || Ge.some((fe) => !Ue.includes(fe))) && P.update((fe) => fe.map(eu(Ge))), I.set("user"), z.set(Ze);
  }
  function te(se) {
    var ue, Ne;
    se.button === 0 && ((Ne = (ue = se.target) == null ? void 0 : ue.releasePointerCapture) == null || Ne.call(ue, se.pointerId), !g(b) && l() === "user" && se.target === g($) && (R == null || R(se)), z.set(null), M.length > 0 && Di(I, "nodes"), i() && (O = !1));
  }
  const U = (se) => {
    var ue;
    if (Array.isArray(g(p)) && (ue = g(p)) != null && ue.includes(2)) {
      se.preventDefault();
      return;
    }
    C("panecontextmenu", { event: se });
  };
  me(
    () => (o(), Q(_())),
    () => {
      G(p, o() || _());
    }
  ), me(
    () => (i(), a(), Q(h()), g(p)),
    () => {
      G(b, i() || a() || h() && g(p) !== !0);
    }
  ), me(
    () => (s(), g(b), l()),
    () => {
      G(x, s() && (g(b) || l() === "user"));
    }
  ), kt(), Be();
  var j = G0(), oe = /* @__PURE__ */ Oe(() => g(x) ? void 0 : Ql(R, g($))), ve = /* @__PURE__ */ Oe(() => Ql(U, g($)));
  let we;
  var le = X(j);
  Vt(le, t, "default", {}), q(j), Ln(j, (se) => G($, se), () => g($)), Te(
    (se) => we = Tt(j, 1, "svelte-flow__pane svelte-1esy7hx", null, we, se),
    [
      () => ({
        draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    be
  ), ct("click", j, function(...se) {
    var ue;
    (ue = g(oe)) == null || ue.apply(this, se);
  }), ct("pointerdown", j, function(...se) {
    var ue;
    (ue = g(x) ? W : void 0) == null || ue.apply(this, se);
  }), ct("pointermove", j, function(...se) {
    var ue;
    (ue = g(x) ? K : void 0) == null || ue.apply(this, se);
  }), ct("pointerup", j, function(...se) {
    var ue;
    (ue = g(x) ? te : void 0) == null || ue.apply(this, se);
  }), ct("contextmenu", j, function(...se) {
    var ue;
    (ue = g(ve)) == null || ue.apply(this, se);
  }), A(e, j);
  var Ee = he({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(se) {
      _(se), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(se) {
      h(se), m();
    }
  });
  return r(), Ee;
}
de(ud, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Q0 = /* @__PURE__ */ ae('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const em = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function cd(e, t) {
  ge(t, !1), at(e, em);
  const [n, r] = ft(), o = () => ee(i, "$viewport", n), { viewport: i } = Qe();
  Be();
  var a = Q0(), s = X(a);
  Vt(s, t, "default", {}), q(a), Te(() => xt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), he(), r();
}
de(cd, {}, ["default"], [], !0);
function Fi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = p0({
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
function tm({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var nm = /* @__PURE__ */ ae("<div><!></div>");
function dd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(ve, "$nodeTypes", n), i = () => ee(ue, "$elementsSelectable", n), a = () => ee(Ne, "$nodesDraggable", n), s = () => ee(Ue, "$connectableStore", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0);
  let f = y(t, "node", 13), v = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), _ = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), C = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), P = y(t, "resizeObserver", 13, null), E = y(t, "style", 13, void 0), N = y(t, "type", 13, "default"), H = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), I = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), Y = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), T = y(t, "measuredWidth", 13, void 0), $ = y(t, "measuredHeight", 13, void 0), V = y(t, "initialWidth", 13, void 0), M = y(t, "initialHeight", 13, void 0), O = y(t, "width", 13, void 0), R = y(t, "height", 13, void 0), W = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), te = y(t, "parentId", 13, void 0), U = y(t, "nodeClickDistance", 13, void 0), j = y(t, "class", 13, "");
  const oe = Qe(), {
    nodeTypes: ve,
    nodeDragThreshold: we,
    selectNodesOnDrag: le,
    handleNodeSelection: Ee,
    updateNodeInternals: se,
    elementsSelectable: ue,
    nodesDraggable: Ne
  } = oe;
  let Pe = /* @__PURE__ */ ie(void 0, !0), Ze = /* @__PURE__ */ ie(null, !0);
  const ne = sa(), Ue = $e(h());
  let Ge = /* @__PURE__ */ ie(void 0, !0), ce = /* @__PURE__ */ ie(void 0, !0), fe = /* @__PURE__ */ ie(void 0, !0);
  Gr("svelteflow__node_id", v()), Gr("svelteflow__node_connectable", Ue), Ms(() => {
    var re;
    g(Ze) && ((re = P()) == null || re.unobserve(g(Ze)));
  });
  function Se(re) {
    _() && (!F(le) || !x() || F(we) > 0) && Ee(v()), ne("nodeclick", { node: f().internals.userNode, event: re });
  }
  me(() => Q(N()), () => {
    G(l, N() || "default");
  }), me(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), me(
    () => (o(), g(l), ji),
    () => {
      G(c, o()[g(l)] || ji);
    }
  ), me(
    () => (g(u), Q(N())),
    () => {
      g(u) || console.warn("003", eo.error003(N()));
    }
  ), me(
    () => (Q(O()), Q(R()), Q(V()), Q(M()), Q(T()), Q($())),
    () => {
      G(d, tm({
        width: O(),
        height: R(),
        initialWidth: V(),
        initialHeight: M(),
        measuredWidth: T(),
        measuredHeight: $()
      }));
    }
  ), me(() => Q(h()), () => {
    Ue.set(!!h());
  }), me(
    () => (g(Ge), g(l), g(ce), Q(L()), g(fe), Q(Y()), Q(v()), g(Pe)),
    () => {
      (g(Ge) && g(l) !== g(Ge) || g(ce) && L() !== g(ce) || g(fe) && Y() !== g(fe)) && requestAnimationFrame(() => se(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Pe),
            force: !0
          }
        ]
      ]))), G(Ge, g(l)), G(ce, L()), G(fe, Y());
    }
  ), me(
    () => (Q(P()), g(Pe), g(Ze), Q(K())),
    () => {
      P() && (g(Pe) !== g(Ze) || !K()) && (g(Ze) && P().unobserve(g(Ze)), g(Pe) && P().observe(g(Pe)), G(Ze, g(Pe)));
    }
  ), kt(), Be(!0);
  var Xe = dt(), Ae = _e(Xe);
  {
    var vt = (re) => {
      var Ie = nm();
      let ye, Zt;
      var Yt = X(Ie);
      const ln = /* @__PURE__ */ be(() => b() ?? !1), De = /* @__PURE__ */ be(() => _() ?? i() ?? !0), lt = /* @__PURE__ */ be(() => C() ?? !0), Ye = /* @__PURE__ */ be(() => x() ?? a() ?? !0);
      Xu(Yt, () => g(c), (Re, ut) => {
        ut(Re, {
          get data() {
            return p();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(ln);
          },
          get selectable() {
            return g(De);
          },
          get deletable() {
            return g(lt);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return Y();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Ye);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return te();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return z();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return O();
          },
          get height() {
            return R();
          }
        });
      }), q(Ie), Mt(Ie, (Re, ut) => Fi == null ? void 0 : Fi(Re, ut), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: Ee,
        onDrag: (Re, ut, Jt, Et) => {
          ne("nodedrag", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStart: (Re, ut, Jt, Et) => {
          ne("nodedragstart", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStop: (Re, ut, Jt, Et) => {
          ne("nodedragstop", { event: Re, targetNode: Jt, nodes: Et });
        },
        store: oe
      })), Ln(Ie, (Re) => G(Pe, Re), () => g(Pe)), en(() => ct("click", Ie, Se)), en(() => ct("mouseenter", Ie, (Re) => ne("nodemouseenter", { node: f(), event: Re }))), en(() => ct("mouseleave", Ie, (Re) => ne("nodemouseleave", { node: f(), event: Re }))), en(() => ct("mousemove", Ie, (Re) => ne("nodemousemove", { node: f(), event: Re }))), en(() => ct("contextmenu", Ie, (Re) => ne("nodecontextmenu", { node: f(), event: Re }))), Te(
        (Re, ut) => {
          xe(Ie, "data-id", v()), ye = Tt(Ie, 1, Re, null, ye, ut), Zt = xt(Ie, `${E() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Zt, {
            "z-index": S(),
            transform: `translate(${z() ?? ""}px, ${I() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => kn(Rt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            j()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: _(),
            nopan: x(),
            parent: H()
          })
        ],
        be
      ), A(re, Ie);
    };
    Ce(Ae, (re) => {
      w() || re(vt);
    });
  }
  A(e, Xe);
  var st = he({
    get node() {
      return f();
    },
    set node(re) {
      f(re), m();
    },
    get id() {
      return v();
    },
    set id(re) {
      v(re), m();
    },
    get data() {
      return p();
    },
    set data(re) {
      p(re), m();
    },
    get selected() {
      return b();
    },
    set selected(re) {
      b(re), m();
    },
    get draggable() {
      return x();
    },
    set draggable(re) {
      x(re), m();
    },
    get selectable() {
      return _();
    },
    set selectable(re) {
      _(re), m();
    },
    get connectable() {
      return h();
    },
    set connectable(re) {
      h(re), m();
    },
    get deletable() {
      return C();
    },
    set deletable(re) {
      C(re), m();
    },
    get hidden() {
      return w();
    },
    set hidden(re) {
      w(re), m();
    },
    get dragging() {
      return k();
    },
    set dragging(re) {
      k(re), m();
    },
    get resizeObserver() {
      return P();
    },
    set resizeObserver(re) {
      P(re), m();
    },
    get style() {
      return E();
    },
    set style(re) {
      E(re), m();
    },
    get type() {
      return N();
    },
    set type(re) {
      N(re), m();
    },
    get isParent() {
      return H();
    },
    set isParent(re) {
      H(re), m();
    },
    get positionX() {
      return z();
    },
    set positionX(re) {
      z(re), m();
    },
    get positionY() {
      return I();
    },
    set positionY(re) {
      I(re), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(re) {
      L(re), m();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(re) {
      Y(re), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(re) {
      S(re), m();
    },
    get measuredWidth() {
      return T();
    },
    set measuredWidth(re) {
      T(re), m();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(re) {
      $(re), m();
    },
    get initialWidth() {
      return V();
    },
    set initialWidth(re) {
      V(re), m();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(re) {
      M(re), m();
    },
    get width() {
      return O();
    },
    set width(re) {
      O(re), m();
    },
    get height() {
      return R();
    },
    set height(re) {
      R(re), m();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(re) {
      W(re), m();
    },
    get initialized() {
      return K();
    },
    set initialized(re) {
      K(re), m();
    },
    get parentId() {
      return te();
    },
    set parentId(re) {
      te(re), m();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(re) {
      U(re), m();
    },
    get class() {
      return j();
    },
    set class(re) {
      j(re), m();
    }
  });
  return r(), st;
}
de(
  dd,
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
var rm = /* @__PURE__ */ ae('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const om = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function fd(e, t) {
  ge(t, !1), at(e, om);
  const [n, r] = ft(), o = () => ee(c, "$visibleNodes", n), i = () => ee(d, "$nodesDraggable", n), a = () => ee(v, "$elementsSelectable", n), s = () => ee(f, "$nodesConnectable", n), l = () => ee(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: p,
    parentLookup: b
  } = Qe(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const w = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const P = k.target.getAttribute("data-id");
      w.set(P, { id: P, nodeElement: k.target, force: !0 });
    }), p(w);
  });
  Ms(() => {
    x == null || x.disconnect();
  }), Be();
  var _ = rm();
  Ft(_, 5, o, (C) => C.id, (C, w) => {
    const k = /* @__PURE__ */ be(() => !!g(w).selected), P = /* @__PURE__ */ be(() => !!g(w).hidden), E = /* @__PURE__ */ be(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), N = /* @__PURE__ */ be(() => !!(g(w).selectable || a() && typeof g(w).selectable > "u")), H = /* @__PURE__ */ be(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), z = /* @__PURE__ */ be(() => g(w).deletable ?? !0), I = /* @__PURE__ */ be(() => l().has(g(w).id)), L = /* @__PURE__ */ be(() => g(w).type ?? "default"), Y = /* @__PURE__ */ be(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ be(() => Lc(g(w)));
    dd(C, {
      get node() {
        return g(w);
      },
      get id() {
        return g(w).id;
      },
      get data() {
        return g(w).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(P);
      },
      get draggable() {
        return g(E);
      },
      get selectable() {
        return g(N);
      },
      get connectable() {
        return g(H);
      },
      get deletable() {
        return g(z);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(I);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(L);
      },
      get sourcePosition() {
        return g(w).sourcePosition;
      },
      get targetPosition() {
        return g(w).targetPosition;
      },
      get dragging() {
        return g(w).dragging;
      },
      get zIndex() {
        return g(Y);
      },
      get dragHandle() {
        return g(w).dragHandle;
      },
      get initialized() {
        return g(S);
      },
      get width() {
        return g(w).width;
      },
      get height() {
        return g(w).height;
      },
      get initialWidth() {
        return g(w).initialWidth;
      },
      get initialHeight() {
        return g(w).initialHeight;
      },
      get measuredWidth() {
        return g(w).measured.width;
      },
      get measuredHeight() {
        return g(w).measured.height;
      },
      get parentId() {
        return g(w).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(T) {
          Ke.call(this, t, T);
        },
        nodemouseenter(T) {
          Ke.call(this, t, T);
        },
        nodemousemove(T) {
          Ke.call(this, t, T);
        },
        nodemouseleave(T) {
          Ke.call(this, t, T);
        },
        nodedrag(T) {
          Ke.call(this, t, T);
        },
        nodedragstart(T) {
          Ke.call(this, t, T);
        },
        nodedragstop(T) {
          Ke.call(this, t, T);
        },
        nodecontextmenu(T) {
          Ke.call(this, t, T);
        }
      }
    });
  }), q(_), A(e, _);
  var h = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), m();
    }
  });
  return r(), h;
}
de(fd, { nodeClickDistance: {} }, [], [], !0);
var im = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function vd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(j, "$edgeTypes", n), i = () => ee(oe, "$flowId", n), a = () => ee(ve, "$elementsSelectable", n), s = () => ee(U, "$edgeLookup", n), l = /* @__PURE__ */ ie(void 0, !0), u = /* @__PURE__ */ ie(void 0, !0), c = /* @__PURE__ */ ie(void 0, !0), d = /* @__PURE__ */ ie(void 0, !0), f = /* @__PURE__ */ ie(void 0, !0);
  let v = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), _ = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), C = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), P = y(t, "selectable", 13, void 0), E = y(t, "deletable", 13, void 0), N = y(t, "hidden", 13, !1), H = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), I = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), Y = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), T = y(t, "sourceX", 13), $ = y(t, "sourceY", 13), V = y(t, "targetX", 13), M = y(t, "targetY", 13), O = y(t, "sourcePosition", 13), R = y(t, "targetPosition", 13), W = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), te = y(t, "class", 13, "");
  Gr("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: j,
    flowId: oe,
    elementsSelectable: ve
  } = Qe(), we = sa(), le = ed();
  function Ee(ne) {
    const Ue = s().get(v());
    Ue && (le(v()), we("edgeclick", { event: ne, edge: Ue }));
  }
  function se(ne, Ue) {
    const Ge = s().get(v());
    Ge && we(Ue, { event: ne, edge: Ge });
  }
  me(() => Q(p()), () => {
    G(l, p() || "default");
  }), me(
    () => (o(), g(l), Ki),
    () => {
      G(u, o()[g(l)] || Ki);
    }
  ), me(
    () => (Q(I()), i()),
    () => {
      G(c, I() ? `url('#${is(I(), i())}')` : void 0);
    }
  ), me(
    () => (Q(L()), i()),
    () => {
      G(d, L() ? `url('#${is(L(), i())}')` : void 0);
    }
  ), me(
    () => (Q(P()), a()),
    () => {
      G(f, P() ?? a());
    }
  ), kt(), Be(!0);
  var ue = dt(), Ne = _e(ue);
  {
    var Pe = (ne) => {
      var Ue = im();
      let Ge;
      var ce = X(Ue);
      let fe;
      var Se = X(ce);
      const Xe = /* @__PURE__ */ be(() => E() ?? !0);
      Xu(Se, () => g(u), (Ae, vt) => {
        vt(Ae, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return T();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return V();
          },
          get targetY() {
            return M();
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
            return H();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return _();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Xe);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return Y();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), q(ce), q(Ue), Te(
        (Ae, vt) => {
          Ge = xt(Ue, "", Ge, { "z-index": C() }), fe = Tt(ce, 0, Ae, null, fe, vt), xe(ce, "data-id", v()), xe(ce, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => kn(Rt(["svelte-flow__edge", te()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: g(f)
          })
        ],
        be
      ), ct("click", ce, Ee), ct("contextmenu", ce, (Ae) => {
        se(Ae, "edgecontextmenu");
      }), ct("mouseenter", ce, (Ae) => {
        se(Ae, "edgemouseenter");
      }), ct("mouseleave", ce, (Ae) => {
        se(Ae, "edgemouseleave");
      }), A(ne, Ue);
    };
    Ce(Ne, (ne) => {
      N() || ne(Pe);
    });
  }
  A(e, ue);
  var Ze = he({
    get id() {
      return v();
    },
    set id(ne) {
      v(ne), m();
    },
    get type() {
      return p();
    },
    set type(ne) {
      p(ne), m();
    },
    get source() {
      return b();
    },
    set source(ne) {
      b(ne), m();
    },
    get target() {
      return x();
    },
    set target(ne) {
      x(ne), m();
    },
    get data() {
      return _();
    },
    set data(ne) {
      _(ne), m();
    },
    get style() {
      return h();
    },
    set style(ne) {
      h(ne), m();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ne) {
      C(ne), m();
    },
    get animated() {
      return w();
    },
    set animated(ne) {
      w(ne), m();
    },
    get selected() {
      return k();
    },
    set selected(ne) {
      k(ne), m();
    },
    get selectable() {
      return P();
    },
    set selectable(ne) {
      P(ne), m();
    },
    get deletable() {
      return E();
    },
    set deletable(ne) {
      E(ne), m();
    },
    get hidden() {
      return N();
    },
    set hidden(ne) {
      N(ne), m();
    },
    get label() {
      return H();
    },
    set label(ne) {
      H(ne), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(ne) {
      z(ne), m();
    },
    get markerStart() {
      return I();
    },
    set markerStart(ne) {
      I(ne), m();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(ne) {
      L(ne), m();
    },
    get sourceHandle() {
      return Y();
    },
    set sourceHandle(ne) {
      Y(ne), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(ne) {
      S(ne), m();
    },
    get sourceX() {
      return T();
    },
    set sourceX(ne) {
      T(ne), m();
    },
    get sourceY() {
      return $();
    },
    set sourceY(ne) {
      $(ne), m();
    },
    get targetX() {
      return V();
    },
    set targetX(ne) {
      V(ne), m();
    },
    get targetY() {
      return M();
    },
    set targetY(ne) {
      M(ne), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ne) {
      O(ne), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(ne) {
      R(ne), m();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(ne) {
      W(ne), m();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(ne) {
      K(ne), m();
    },
    get class() {
      return te();
    },
    set class(ne) {
      te(ne), m();
    }
  });
  return r(), Ze;
}
de(
  vd,
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
function gd(e, t) {
  ge(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return hn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Be(), he({
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
de(gd, { onMount: {}, onDestroy: {} }, [], [], !0);
var am = /* @__PURE__ */ ke("<defs></defs>");
function hd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$markers", n), { markers: i } = Qe();
  Be();
  var a = am();
  Ft(a, 5, o, (s) => s.id, (s, l) => {
    pd(s, bt(() => g(l)));
  }), q(a), A(e, a), he(), r();
}
de(hd, {}, [], [], !0);
var sm = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), lm = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), um = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function pd(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Be();
  var c = um(), d = X(c);
  {
    var f = (p) => {
      var b = sm();
      Te(() => {
        xe(b, "stroke", l()), xe(b, "stroke-width", u());
      }), A(p, b);
    }, v = (p, b) => {
      {
        var x = (_) => {
          var h = lm();
          Te(() => {
            xe(h, "stroke", l()), xe(h, "stroke-width", u()), xe(h, "fill", l());
          }), A(_, h);
        };
        Ce(
          p,
          (_) => {
            r() === Ro.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    Ce(d, (p) => {
      r() === Ro.Arrow ? p(f) : p(v, !1);
    });
  }
  return q(c), Te(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${i()}`), xe(c, "markerUnits", a()), xe(c, "orient", s());
  }), A(e, c), he({
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
de(
  pd,
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
var cm = /* @__PURE__ */ ae('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function md(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(s, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Qe();
  hn(() => {
    a() && u(a());
  }), Be();
  var d = cm(), f = X(d), v = X(f);
  hd(v, {}), q(f);
  var p = B(f, 2);
  Ft(p, 1, o, (h) => h.id, (h, C) => {
    const w = /* @__PURE__ */ be(() => g(C).selectable ?? i()), k = /* @__PURE__ */ be(() => g(C).type || "default");
    vd(h, {
      get id() {
        return g(C).id;
      },
      get source() {
        return g(C).source;
      },
      get target() {
        return g(C).target;
      },
      get data() {
        return g(C).data;
      },
      get style() {
        return g(C).style;
      },
      get animated() {
        return g(C).animated;
      },
      get selected() {
        return g(C).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g(C).deletable;
      },
      get hidden() {
        return g(C).hidden;
      },
      get label() {
        return g(C).label;
      },
      get labelStyle() {
        return g(C).labelStyle;
      },
      get markerStart() {
        return g(C).markerStart;
      },
      get markerEnd() {
        return g(C).markerEnd;
      },
      get sourceHandle() {
        return g(C).sourceHandle;
      },
      get targetHandle() {
        return g(C).targetHandle;
      },
      get sourceX() {
        return g(C).sourceX;
      },
      get sourceY() {
        return g(C).sourceY;
      },
      get targetX() {
        return g(C).targetX;
      },
      get targetY() {
        return g(C).targetY;
      },
      get sourcePosition() {
        return g(C).sourcePosition;
      },
      get targetPosition() {
        return g(C).targetPosition;
      },
      get ariaLabel() {
        return g(C).ariaLabel;
      },
      get interactionWidth() {
        return g(C).interactionWidth;
      },
      get class() {
        return g(C).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(P) {
          Ke.call(this, t, P);
        },
        edgecontextmenu(P) {
          Ke.call(this, t, P);
        },
        edgemouseenter(P) {
          Ke.call(this, t, P);
        },
        edgemouseleave(P) {
          Ke.call(this, t, P);
        }
      }
    });
  });
  var b = B(p, 2);
  {
    var x = (h) => {
      gd(h, {
        onMount: () => {
          Di(l, !0);
        },
        onDestroy: () => {
          Di(l, !1);
        }
      });
    };
    Ce(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  q(d), A(e, d);
  var _ = he({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
    }
  });
  return r(), _;
}
de(md, { defaultEdgeOptions: {} }, [], [], !0);
var dm = /* @__PURE__ */ ae('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const fm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ws(e, t) {
  ge(t, !1), at(e, fm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = dt(), l = _e(s);
  {
    var u = (c) => {
      var d = dm();
      let f;
      Te(() => f = xt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), A(c, d);
    };
    Ce(l, (c) => {
      a() && c(u);
    });
  }
  return A(e, s), he({
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
de(
  Ws,
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
function yd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(a, "$selectionRect", n), i = () => ee(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Qe();
  Be();
  const l = /* @__PURE__ */ be(() => !!(o() && i() === "user")), u = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  Ws(e, {
    get isVisible() {
      return g(l);
    },
    get width() {
      return g(u);
    },
    get height() {
      return g(c);
    },
    get x() {
      return g(d);
    },
    get y() {
      return g(f);
    }
  }), he(), r();
}
de(yd, {}, [], [], !0);
var vm = /* @__PURE__ */ ae('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const gm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function wd(e, t) {
  ge(t, !1), at(e, gm);
  const [n, r] = ft(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), a = () => ee(u, "$nodes", n), s = Qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ ie(null);
  function v(h) {
    const C = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function p(h) {
    const C = a().filter((w) => w.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  me(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (G(f, Jo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), kt(), Be();
  var b = dt(), x = _e(b);
  {
    var _ = (h) => {
      var C = vm(), w = X(C);
      Ws(w, { width: "100%", height: "100%", x: 0, y: 0 }), q(C), Mt(C, (k, P) => Fi == null ? void 0 : Fi(k, P), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, P, E, N) => {
          d("nodedrag", { event: k, targetNode: null, nodes: N });
        },
        onDragStart: (k, P, E, N) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: N });
        },
        onDragStop: (k, P, E, N) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: N });
        }
      })), en(() => ct("contextmenu", C, v)), en(() => ct("click", C, p)), en(() => ct("keyup", C, () => {
      })), Te(() => xt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), A(h, C);
    };
    Ce(x, (h) => {
      o() === "nodes" && g(f) && Bn(g(f).x) && Bn(g(f).y) && h(_);
    });
  }
  A(e, b), he(), r();
}
de(wd, {}, [], [], !0);
function wt(e, t) {
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
      }, { modifier: d, key: f, callback: v, preventDefault: p, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((_) => l[_])
        ))
          continue;
        if (a.key === f) {
          p && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function bd(e, t) {
  ge(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Wi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Wi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Qe();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
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
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Be(), ct("blur", qt, _), ct("contextmenu", qt, _), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Kp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Mt(qt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), he({
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
de(
  bd,
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
var hm = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), pm = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function xd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(v, "$connection", n), i = () => ee(p, "$connectionLineType", n), a = () => ee(d, "$width", n), s = () => ee(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: p
  } = Qe();
  let b = /* @__PURE__ */ ie(null);
  me(
    () => (o(), Q(c()), i(), g(b), os),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: P, toPosition: E } = o(), N = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: P,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case qr.Bezier:
            ((H) => G(b, H[0]))(Ac(N));
            break;
          case qr.Step:
            ((H) => G(b, H[0]))(qi({ ...N, borderRadius: 0 }));
            break;
          case qr.SmoothStep:
            ((H) => G(b, H[0]))(qi(N));
            break;
          default:
            ((H) => G(b, H[0]))(os(N));
        }
      }
    }
  ), kt(), Be();
  var x = dt(), _ = _e(x);
  {
    var h = (w) => {
      var k = pm(), P = X(k), E = X(P);
      Vt(E, t, "connectionLine", {});
      var N = B(E);
      {
        var H = (z) => {
          var I = hm();
          Te(() => {
            xe(I, "d", g(b)), xt(I, u());
          }), A(z, I);
        };
        Ce(N, (z) => {
          c() || z(H);
        });
      }
      q(P), q(k), Te(
        (z) => {
          xe(k, "width", a()), xe(k, "height", s()), xt(k, l()), Tt(P, 0, z);
        },
        [
          () => kn(Rt([
            "svelte-flow__connection",
            Ip(o().isValid)
          ]))
        ],
        be
      ), A(w, k);
    };
    Ce(_, (w) => {
      o().inProgress && w(h);
    });
  }
  A(e, x);
  var C = he({
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
de(
  xd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var mm = /* @__PURE__ */ ae("<div><!></div>");
function ti(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = ft(), a = () => ee(d, "$selectionRectMode", o), s = /* @__PURE__ */ ie();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = Qe();
  me(() => Q(l()), () => {
    G(s, `${l()}`.split("-"));
  }), kt(), Be();
  var f = mm();
  let v;
  var p = X(f);
  Vt(p, t, "default", {}), q(f), Te(
    (x) => v = xn(f, v, {
      class: x,
      style: u(),
      ...r,
      [xr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Rt([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    be
  ), A(e, f);
  var b = he({
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
de(ti, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var ym = /* @__PURE__ */ ae('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function $d(e, t) {
  ge(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Be();
  var o = dt(), i = _e(o);
  {
    var a = (s) => {
      ti(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = ym();
          A(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return A(e, o), he({
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
de($d, { proOptions: {}, position: {} }, [], [], !0);
function tu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const wm = (e) => Object.keys(e);
function nu(e, t) {
  wm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function bm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function xm(e = "light") {
  return un("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = bm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var $m = /* @__PURE__ */ ae('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), _m = /* @__PURE__ */ ae("<!> <!>", 1), Cm = /* @__PURE__ */ ae("<div><!> <!> <!> <!></div>");
const km = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function _d(e, t) {
  const n = Bv(t), r = ht(t, [
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
  ge(t, !1), at(e, km);
  const [i, a] = ft(), s = () => ee(C(), "$viewport", i), l = () => ee(vo, "$initialized", i), u = () => ee(g(c), "$colorModeClass", i), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), v = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), _ = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), C = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), P = y(t, "selectionKey", 12, void 0), E = y(t, "selectionMode", 12, void 0), N = y(t, "panActivationKey", 12, void 0), H = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), I = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), Y = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), T = y(t, "snapGrid", 12, void 0), $ = y(t, "deleteKey", 12, void 0), V = y(t, "connectionRadius", 12, void 0), M = y(t, "connectionLineType", 12, void 0), O = y(t, "connectionMode", 28, () => Mr.Strict), R = y(t, "connectionLineStyle", 12, ""), W = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), te = y(t, "onMove", 12, void 0), U = y(t, "onMoveEnd", 12, void 0), j = y(t, "isValidConnection", 12, void 0), oe = y(t, "translateExtent", 12, void 0), ve = y(t, "nodeExtent", 12, void 0), we = y(t, "onlyRenderVisibleElements", 12, void 0), le = y(t, "panOnScrollMode", 28, () => cr.Free), Ee = y(t, "preventScrolling", 12, !0), se = y(t, "zoomOnScroll", 12, !0), ue = y(t, "zoomOnDoubleClick", 12, !0), Ne = y(t, "zoomOnPinch", 12, !0), Pe = y(t, "panOnScroll", 12, !1), Ze = y(t, "panOnDrag", 12, !0), ne = y(t, "selectionOnDrag", 12, void 0), Ue = y(t, "autoPanOnConnect", 12, !0), Ge = y(t, "autoPanOnNodeDrag", 12, !0), ce = y(t, "onerror", 12, void 0), fe = y(t, "ondelete", 12, void 0), Se = y(t, "onedgecreate", 12, void 0), Xe = y(t, "attributionPosition", 12, void 0), Ae = y(t, "proOptions", 12, void 0), vt = y(t, "defaultEdgeOptions", 12, void 0), st = y(t, "width", 12, void 0), re = y(t, "height", 12, void 0), Ie = y(t, "colorMode", 12, "light"), ye = y(t, "onconnect", 12, void 0), Zt = y(t, "onconnectstart", 12, void 0), Yt = y(t, "onconnectend", 12, void 0), ln = y(t, "onbeforedelete", 12, void 0), De = y(t, "oninit", 12, void 0), lt = y(t, "nodeOrigin", 12, void 0), Ye = y(t, "paneClickDistance", 12, 0), Re = y(t, "nodeClickDistance", 12, 0), ut = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = y(t, "style", 12, void 0), Et = y(t, "class", 12, void 0), Qn = /* @__PURE__ */ ie(), mt = /* @__PURE__ */ ie(), $t = /* @__PURE__ */ ie();
  const Pn = s() || h(), rt = _v(pa) ? Qe() : K0({
    nodes: F(f()),
    edges: F(v()),
    width: st(),
    height: re(),
    fitView: p(),
    nodeOrigin: lt(),
    nodeExtent: ve()
  });
  hn(() => (rt.width.set(g(mt)), rt.height.set(g($t)), rt.domNode.set(g(Qn)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport(C()), p() !== void 0 && rt.fitViewOnInit.set(p()), b() && rt.fitViewOptions.set(b()), tu(rt, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: oe(),
    paneClickDistance: Ye()
  }), () => {
    rt.reset();
  }));
  const { initialized: vo } = rt;
  let er = /* @__PURE__ */ ie(!1);
  me(
    () => (g(mt), g($t)),
    () => {
      g(mt) !== void 0 && g($t) !== void 0 && (rt.width.set(g(mt)), rt.height.set(g($t)));
    }
  ), me(
    () => (g(er), l(), Q(De())),
    () => {
      var Z;
      !g(er) && l() && ((Z = De()) == null || Z(), G(er, !0));
    }
  ), me(
    () => (Q(d()), Q(M()), Q(V()), Q(E()), Q(T()), Q(ut()), Q(I()), Q(L()), Q(S()), Q(we()), Q(j()), Q(Ue()), Q(Ge()), Q(ce()), Q(fe()), Q(Se()), Q(O()), Q(Y()), Q(ye()), Q(Zt()), Q(Yt()), Q(ln()), Q(lt()), nu),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: M(),
        connectionRadius: V(),
        selectionMode: E(),
        snapGrid: T(),
        defaultMarkerColor: ut(),
        nodesDraggable: I(),
        nodesConnectable: L(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: we(),
        isValidConnection: j(),
        autoPanOnConnect: Ue(),
        autoPanOnNodeDrag: Ge(),
        onerror: ce(),
        ondelete: fe(),
        onedgecreate: Se(),
        connectionMode: O(),
        nodeDragThreshold: Y(),
        onconnect: ye(),
        onconnectstart: Zt(),
        onconnectend: Yt(),
        onbeforedelete: ln(),
        nodeOrigin: lt()
      };
      nu(rt, Z);
    }
  ), me(
    () => (Q(w()), Q(k()), Q(x()), Q(_()), Q(oe()), Q(Ye())),
    () => {
      tu(rt, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: oe(),
        paneClickDistance: Ye()
      });
    }
  ), me(
    () => Q(Ie()),
    () => {
      Qv(G(c, xm(Ie())), "$colorModeClass", i);
    }
  ), kt(), Be();
  var Nt = Cm();
  let wr;
  var br = X(Nt);
  bd(br, {
    get selectionKey() {
      return P();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return H();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Lr = B(br, 2);
  const go = /* @__PURE__ */ be(() => le() === void 0 ? cr.Free : le()), ai = /* @__PURE__ */ be(() => Ee() === void 0 ? !0 : Ee()), si = /* @__PURE__ */ be(() => se() === void 0 ? !0 : se()), xa = /* @__PURE__ */ be(() => ue() === void 0 ? !0 : ue()), $a = /* @__PURE__ */ be(() => Ne() === void 0 ? !0 : Ne()), _a = /* @__PURE__ */ be(() => Pe() === void 0 ? !1 : Pe()), Ca = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze()), D = /* @__PURE__ */ be(() => Ye() === void 0 ? 0 : Ye());
  ld(Lr, {
    initialViewport: Pn,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return te();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(go);
    },
    get preventScrolling() {
      return g(ai);
    },
    get zoomOnScroll() {
      return g(si);
    },
    get zoomOnDoubleClick() {
      return g(xa);
    },
    get zoomOnPinch() {
      return g($a);
    },
    get panOnScroll() {
      return g(_a);
    },
    get panOnDrag() {
      return g(Ca);
    },
    get paneClickDistance() {
      return g(D);
    },
    children: (Z, ot) => {
      const qe = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze());
      ud(Z, {
        get panOnDrag() {
          return g(qe);
        },
        get selectionOnDrag() {
          return ne();
        },
        $$events: {
          paneclick(ze) {
            Ke.call(this, t, ze);
          },
          panecontextmenu(ze) {
            Ke.call(this, t, ze);
          }
        },
        children: (ze, Pt) => {
          var gt = _m(), pt = _e(gt);
          cd(pt, {
            children: (tr, nr) => {
              var Ct = $m(), zr = _e(Ct);
              md(zr, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(je) {
                    Ke.call(this, t, je);
                  },
                  edgecontextmenu(je) {
                    Ke.call(this, t, je);
                  },
                  edgemouseenter(je) {
                    Ke.call(this, t, je);
                  },
                  edgemouseleave(je) {
                    Ke.call(this, t, je);
                  }
                }
              });
              var li = B(zr, 2);
              xd(li, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return R();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (je, Kw) => {
                    var Us = dt(), wf = _e(Us);
                    Vt(wf, t, "connectionLine", {}), A(je, Us);
                  }
                }
              });
              var ui = B(li, 6);
              fd(ui, {
                get nodeClickDistance() {
                  return Re();
                },
                $$events: {
                  nodeclick(je) {
                    Ke.call(this, t, je);
                  },
                  nodemouseenter(je) {
                    Ke.call(this, t, je);
                  },
                  nodemousemove(je) {
                    Ke.call(this, t, je);
                  },
                  nodemouseleave(je) {
                    Ke.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Ke.call(this, t, je);
                  },
                  nodedrag(je) {
                    Ke.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Ke.call(this, t, je);
                  },
                  nodecontextmenu(je) {
                    Ke.call(this, t, je);
                  }
                }
              });
              var yf = B(ui, 2);
              wd(yf, {
                $$events: {
                  selectionclick(je) {
                    Ke.call(this, t, je);
                  },
                  selectioncontextmenu(je) {
                    Ke.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Ke.call(this, t, je);
                  },
                  nodedrag(je) {
                    Ke.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Ke.call(this, t, je);
                  }
                }
              }), A(tr, Ct);
            },
            $$slots: { default: !0 }
          });
          var Bt = B(pt, 2);
          yd(Bt, {}), A(ze, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var J = B(Lr, 2);
  $d(J, {
    get proOptions() {
      return Ae();
    },
    get position() {
      return Xe();
    }
  });
  var pe = B(J, 2);
  Vt(pe, t, "default", {}), q(Nt), Ln(Nt, (Z) => G(Qn, Z), () => g(Qn)), Te(
    (Z) => wr = xn(
      Nt,
      wr,
      {
        style: Jt(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Rt([
        "svelte-flow",
        Et(),
        u()
      ])
    ],
    be
  ), vl(Nt, "clientWidth", (Z) => G(mt, Z)), vl(Nt, "clientHeight", (Z) => G($t, Z)), ct("dragover", Nt, function(Z) {
    Ke.call(this, t, Z);
  }), ct("drop", Nt, function(Z) {
    Ke.call(this, t, Z);
  }), A(e, Nt);
  var Me = he({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), m();
    },
    get nodes() {
      return f();
    },
    set nodes(Z) {
      f(Z), m();
    },
    get edges() {
      return v();
    },
    set edges(Z) {
      v(Z), m();
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
      return _();
    },
    set maxZoom(Z) {
      _(Z), m();
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
      return P();
    },
    set selectionKey(Z) {
      P(Z), m();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(Z) {
      E(Z), m();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(Z) {
      N(Z), m();
    },
    get multiSelectionKey() {
      return H();
    },
    set multiSelectionKey(Z) {
      H(Z), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(Z) {
      z(Z), m();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(Z) {
      I(Z), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Z) {
      L(Z), m();
    },
    get nodeDragThreshold() {
      return Y();
    },
    set nodeDragThreshold(Z) {
      Y(Z), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Z) {
      S(Z), m();
    },
    get snapGrid() {
      return T();
    },
    set snapGrid(Z) {
      T(Z), m();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(Z) {
      $(Z), m();
    },
    get connectionRadius() {
      return V();
    },
    set connectionRadius(Z) {
      V(Z), m();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(Z) {
      M(Z), m();
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
      return W();
    },
    set connectionLineContainerStyle(Z) {
      W(Z), m();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Z) {
      K(Z), m();
    },
    get onMove() {
      return te();
    },
    set onMove(Z) {
      te(Z), m();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(Z) {
      U(Z), m();
    },
    get isValidConnection() {
      return j();
    },
    set isValidConnection(Z) {
      j(Z), m();
    },
    get translateExtent() {
      return oe();
    },
    set translateExtent(Z) {
      oe(Z), m();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(Z) {
      ve(Z), m();
    },
    get onlyRenderVisibleElements() {
      return we();
    },
    set onlyRenderVisibleElements(Z) {
      we(Z), m();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(Z) {
      le(Z), m();
    },
    get preventScrolling() {
      return Ee();
    },
    set preventScrolling(Z) {
      Ee(Z), m();
    },
    get zoomOnScroll() {
      return se();
    },
    set zoomOnScroll(Z) {
      se(Z), m();
    },
    get zoomOnDoubleClick() {
      return ue();
    },
    set zoomOnDoubleClick(Z) {
      ue(Z), m();
    },
    get zoomOnPinch() {
      return Ne();
    },
    set zoomOnPinch(Z) {
      Ne(Z), m();
    },
    get panOnScroll() {
      return Pe();
    },
    set panOnScroll(Z) {
      Pe(Z), m();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(Z) {
      Ze(Z), m();
    },
    get selectionOnDrag() {
      return ne();
    },
    set selectionOnDrag(Z) {
      ne(Z), m();
    },
    get autoPanOnConnect() {
      return Ue();
    },
    set autoPanOnConnect(Z) {
      Ue(Z), m();
    },
    get autoPanOnNodeDrag() {
      return Ge();
    },
    set autoPanOnNodeDrag(Z) {
      Ge(Z), m();
    },
    get onerror() {
      return ce();
    },
    set onerror(Z) {
      ce(Z), m();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(Z) {
      fe(Z), m();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(Z) {
      Se(Z), m();
    },
    get attributionPosition() {
      return Xe();
    },
    set attributionPosition(Z) {
      Xe(Z), m();
    },
    get proOptions() {
      return Ae();
    },
    set proOptions(Z) {
      Ae(Z), m();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(Z) {
      vt(Z), m();
    },
    get width() {
      return st();
    },
    set width(Z) {
      st(Z), m();
    },
    get height() {
      return re();
    },
    set height(Z) {
      re(Z), m();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(Z) {
      Ie(Z), m();
    },
    get onconnect() {
      return ye();
    },
    set onconnect(Z) {
      ye(Z), m();
    },
    get onconnectstart() {
      return Zt();
    },
    set onconnectstart(Z) {
      Zt(Z), m();
    },
    get onconnectend() {
      return Yt();
    },
    set onconnectend(Z) {
      Yt(Z), m();
    },
    get onbeforedelete() {
      return ln();
    },
    set onbeforedelete(Z) {
      ln(Z), m();
    },
    get oninit() {
      return De();
    },
    set oninit(Z) {
      De(Z), m();
    },
    get nodeOrigin() {
      return lt();
    },
    set nodeOrigin(Z) {
      lt(Z), m();
    },
    get paneClickDistance() {
      return Ye();
    },
    set paneClickDistance(Z) {
      Ye(Z), m();
    },
    get nodeClickDistance() {
      return Re();
    },
    set nodeClickDistance(Z) {
      Re(Z), m();
    },
    get defaultMarkerColor() {
      return ut();
    },
    set defaultMarkerColor(Z) {
      ut(Z), m();
    },
    get style() {
      return Jt();
    },
    set style(Z) {
      Jt(Z), m();
    },
    get class() {
      return Et();
    },
    set class(Z) {
      Et(Z), m();
    }
  });
  return a(), Me;
}
de(
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
function Cd(e, t) {
  ge(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = sd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Gr(pa, { getStore: () => l }), Ms(() => {
    l.reset();
  }), Be();
  var u = dt(), c = _e(u);
  return Vt(c, t, "default", {}), A(e, u), he({
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
de(
  Cd,
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
var Sm = /* @__PURE__ */ ae("<button><!></button>");
function Co(e, t) {
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
  ge(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Be();
  var c = Sm();
  let d;
  var f = X(c);
  return Vt(f, t, "default", { class: "button-svg" }), q(c), Te(
    (v) => d = xn(c, d, {
      type: "button",
      class: v,
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
      () => Rt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), ct("click", c, function(v) {
    Ke.call(this, t, v);
  }), A(e, c), he({
    get class() {
      return o();
    },
    set class(v) {
      o(v), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), m();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), m();
    }
  });
}
de(
  Co,
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
var Em = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function kd(e) {
  var t = Em();
  A(e, t);
}
de(kd, {}, [], [], !0);
var Pm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sd(e) {
  var t = Pm();
  A(e, t);
}
de(Sd, {}, [], [], !0);
var Mm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ed(e) {
  var t = Mm();
  A(e, t);
}
de(Ed, {}, [], [], !0);
var Vm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Pd(e) {
  var t = Vm();
  A(e, t);
}
de(Pd, {}, [], [], !0);
var Tm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Md(e) {
  var t = Tm();
  A(e, t);
}
de(Md, {}, [], [], !0);
var Hm = /* @__PURE__ */ ae("<!> <!>", 1), Nm = /* @__PURE__ */ ae("<!> <!> <!> <!> <!> <!>", 1);
function Vd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(M, "$nodesDraggable", n), i = () => ee(O, "$nodesConnectable", n), a = () => ee(R, "$elementsSelectable", n), s = () => ee(T, "$viewport", n), l = () => ee($, "$minZoom", n), u = () => ee(V, "$maxZoom", n), c = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie(), f = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), _ = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), C = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), P = y(t, "buttonBorderColor", 12, void 0), E = y(t, "ariaLabel", 12, void 0), N = y(t, "style", 12, void 0), H = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), I = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: Y,
    fitView: S,
    viewport: T,
    minZoom: $,
    maxZoom: V,
    nodesDraggable: M,
    nodesConnectable: O,
    elementsSelectable: R
  } = Qe(), W = {
    bgColor: h(),
    bgColorHover: C(),
    color: w(),
    colorHover: k(),
    borderColor: P()
  }, K = () => {
    L();
  }, te = () => {
    Y();
  }, U = () => {
    S(z());
  }, j = () => {
    G(c, !g(c)), M.set(g(c)), O.set(g(c)), R.set(g(c));
  };
  me(
    () => (o(), i(), a()),
    () => {
      G(c, o() || i() || a());
    }
  ), me(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), me(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), me(() => Q(H()), () => {
    G(v, H() === "horizontal" ? "horizontal" : "vertical");
  }), kt(), Be();
  const oe = /* @__PURE__ */ be(() => Rt([
    "svelte-flow__controls",
    g(v),
    I()
  ])), ve = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  ti(e, {
    get class() {
      return g(oe);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return N();
    },
    children: (le, Ee) => {
      var se = Nm(), ue = _e(se);
      Vt(ue, t, "before", {});
      var Ne = B(ue, 2);
      {
        var Pe = (Se) => {
          var Xe = Hm(), Ae = _e(Xe);
          Co(Ae, bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            W,
            {
              $$events: { click: K },
              children: (st, re) => {
                kd(st);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = B(Ae, 2);
          Co(vt, bt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            W,
            {
              $$events: { click: te },
              children: (st, re) => {
                Sd(st);
              },
              $$slots: { default: !0 }
            }
          )), A(Se, Xe);
        };
        Ce(Ne, (Se) => {
          b() && Se(Pe);
        });
      }
      var Ze = B(Ne, 2);
      {
        var ne = (Se) => {
          Co(Se, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: U },
              children: (Xe, Ae) => {
                Ed(Xe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ze, (Se) => {
          x() && Se(ne);
        });
      }
      var Ue = B(Ze, 2);
      {
        var Ge = (Se) => {
          Co(Se, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: j },
              children: (Xe, Ae) => {
                var vt = dt(), st = _e(vt);
                {
                  var re = (ye) => {
                    Md(ye);
                  }, Ie = (ye) => {
                    Pd(ye);
                  };
                  Ce(st, (ye) => {
                    g(c) ? ye(re) : ye(Ie, !1);
                  });
                }
                A(Xe, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ue, (Se) => {
          _() && Se(Ge);
        });
      }
      var ce = B(Ue, 2);
      Vt(ce, t, "default", {});
      var fe = B(ce, 2);
      Vt(fe, t, "after", {}), A(le, se);
    },
    $$slots: { default: !0 }
  });
  var we = he({
    get position() {
      return p();
    },
    set position(le) {
      p(le), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(le) {
      b(le), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(le) {
      x(le), m();
    },
    get showLock() {
      return _();
    },
    set showLock(le) {
      _(le), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(le) {
      h(le), m();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(le) {
      C(le), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(le) {
      w(le), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(le) {
      k(le), m();
    },
    get buttonBorderColor() {
      return P();
    },
    set buttonBorderColor(le) {
      P(le), m();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(le) {
      E(le), m();
    },
    get style() {
      return N();
    },
    set style(le) {
      N(le), m();
    },
    get orientation() {
      return H();
    },
    set orientation(le) {
      H(le), m();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(le) {
      z(le), m();
    },
    get class() {
      return I();
    },
    set class(le) {
      I(le), m();
    }
  });
  return r(), we;
}
de(
  Vd,
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
var Dm = /* @__PURE__ */ ke("<circle></circle>");
function Td(e, t) {
  ge(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Be();
  var o = Dm();
  return Te(
    (i) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Tt(o, 0, i);
    },
    [
      () => kn(Rt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    be
  ), A(e, o), he({
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
de(Td, { radius: {}, class: {} }, [], [], !0);
var Om = /* @__PURE__ */ ke("<path></path>");
function Hd(e, t) {
  ge(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Be();
  var a = Om();
  return Te(
    (s) => {
      xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Tt(a, 0, s);
    },
    [
      () => kn(Rt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    be
  ), A(e, a), he({
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
de(
  Hd,
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
const Lm = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var zm = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Am = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Nd(e, t) {
  ge(t, !1), at(e, Am);
  const [n, r] = ft(), o = () => ee(k, "$flowId", n), i = () => ee(w, "$viewport", n), a = /* @__PURE__ */ ie(), s = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => dr.Dots), v = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), _ = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), C = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = Qe(), P = p() || Lm[f()], E = f() === dr.Dots, N = f() === dr.Cross, H = Array.isArray(v()) ? v() : [v(), v()];
  me(
    () => (o(), Q(d())),
    () => {
      G(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), me(() => i(), () => {
    G(s, [
      H[0] * i().zoom || 1,
      H[1] * i().zoom || 1
    ]);
  }), me(() => i(), () => {
    G(l, P * i().zoom);
  }), me(() => (g(l), g(s)), () => {
    G(u, N ? [g(l), g(l)] : g(s));
  }), me(
    () => (g(l), g(u)),
    () => {
      G(c, E ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), kt(), Be();
  var z = zm();
  let I;
  var L = X(z), Y = X(L);
  {
    var S = (M) => {
      const O = /* @__PURE__ */ be(() => g(l) / 2);
      Td(M, {
        get radius() {
          return g(O);
        },
        get class() {
          return h();
        }
      });
    }, T = (M) => {
      Hd(M, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    Ce(Y, (M) => {
      E ? M(S) : M(T, !1);
    });
  }
  q(L);
  var $ = B(L);
  q(z), Te(
    (M) => {
      Tt(z, 0, M, "svelte-1r7pe8d"), I = xt(z, "", I, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": _()
      }), xe(L, "id", g(a)), xe(L, "x", i().x % g(s)[0]), xe(L, "y", i().y % g(s)[1]), xe(L, "width", g(s)[0]), xe(L, "height", g(s)[1]), xe(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), xe($, "fill", `url(#${g(a)})`);
    },
    [
      () => kn(Rt(["svelte-flow__background", C()]))
    ],
    be
  ), A(e, z);
  var V = he({
    get id() {
      return d();
    },
    set id(M) {
      d(M), m();
    },
    get variant() {
      return f();
    },
    set variant(M) {
      f(M), m();
    },
    get gap() {
      return v();
    },
    set gap(M) {
      v(M), m();
    },
    get size() {
      return p();
    },
    set size(M) {
      p(M), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(M) {
      b(M), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(M) {
      x(M), m();
    },
    get patternColor() {
      return _();
    },
    set patternColor(M) {
      _(M), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), m();
    },
    get class() {
      return C();
    },
    set class(M) {
      C(M), m();
    }
  });
  return r(), V;
}
de(
  Nd,
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
var Im = /* @__PURE__ */ ke("<rect></rect>");
function Dd(e, t) {
  ge(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Be();
  var v = Im();
  let p;
  return Te(
    (b, x) => {
      p = Tt(v, 0, b, null, p, x), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", a()), xe(v, "ry", a()), xe(v, "width", o()), xe(v, "height", i()), xt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l());
    },
    [
      () => kn(Rt(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), A(e, v), he({
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
      return f();
    },
    set class(b) {
      f(b), m();
    }
  });
}
de(
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
function ru(e, t) {
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
const La = (e) => e instanceof Function ? e : () => e;
var Rm = /* @__PURE__ */ ke("<title> </title>"), Zm = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Od(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(Ze, "$flowId", n), i = () => ee(ue, "$viewport", n), a = () => ee(Ne, "$containerWidth", n), s = () => ee(Pe, "$containerHeight", n), l = () => ee(se, "$nodeLookup", n), u = () => ee(Ee, "$nodes", n), c = () => ee(ne, "$panZoom", n), d = () => ee(Ue, "$translateExtent", n), f = /* @__PURE__ */ ie(), v = /* @__PURE__ */ ie(), p = /* @__PURE__ */ ie(), b = /* @__PURE__ */ ie(), x = /* @__PURE__ */ ie(), _ = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), C = /* @__PURE__ */ ie(), w = /* @__PURE__ */ ie(), k = /* @__PURE__ */ ie(), P = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie(), N = /* @__PURE__ */ ie();
  let H = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), I = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), Y = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), T = y(t, "nodeStrokeWidth", 12, 2), $ = y(t, "bgColor", 12, void 0), V = y(t, "maskColor", 12, void 0), M = y(t, "maskStrokeColor", 12, void 0), O = y(t, "maskStrokeWidth", 12, void 0), R = y(t, "width", 12, void 0), W = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), te = y(t, "zoomable", 12, !0), U = y(t, "inversePan", 12, void 0), j = y(t, "zoomStep", 12, void 0), oe = y(t, "style", 12, ""), ve = y(t, "class", 12, "");
  const we = 200, le = 150, {
    nodes: Ee,
    nodeLookup: se,
    viewport: ue,
    width: Ne,
    height: Pe,
    flowId: Ze,
    panZoom: ne,
    translateExtent: Ue
  } = Qe(), Ge = L() === void 0 ? void 0 : La(L()), ce = La(I()), fe = La(Y()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Xe = `svelte-flow__minimap-desc-${o()}`;
  let Ae = /* @__PURE__ */ ie(g(f));
  const vt = () => g(_);
  me(
    () => (i(), a(), s()),
    () => {
      G(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), me(
    () => (l(), g(f), u()),
    () => {
      G(Ae, l().size > 0 ? Dc(Jo(l()), g(f)) : g(f)), u();
    }
  ), me(() => Q(R()), () => {
    G(v, R() ?? we);
  }), me(() => Q(W()), () => {
    G(p, W() ?? le);
  }), me(
    () => (g(Ae), g(v)),
    () => {
      G(b, g(Ae).width / g(v));
    }
  ), me(
    () => (g(Ae), g(p)),
    () => {
      G(x, g(Ae).height / g(p));
    }
  ), me(
    () => (g(b), g(x)),
    () => {
      G(_, Math.max(g(b), g(x)));
    }
  ), me(() => (g(_), g(v)), () => {
    G(h, g(_) * g(v));
  }), me(
    () => (g(_), g(p)),
    () => {
      G(C, g(_) * g(p));
    }
  ), me(() => g(_), () => {
    G(w, 5 * g(_));
  }), me(
    () => (g(Ae), g(h), g(w)),
    () => {
      G(k, g(Ae).x - (g(h) - g(Ae).width) / 2 - g(w));
    }
  ), me(
    () => (g(Ae), g(C), g(w)),
    () => {
      G(P, g(Ae).y - (g(C) - g(Ae).height) / 2 - g(w));
    }
  ), me(() => (g(h), g(w)), () => {
    G(E, g(h) + g(w) * 2);
  }), me(() => (g(C), g(w)), () => {
    G(N, g(C) + g(w) * 2);
  }), kt(), Be();
  const st = /* @__PURE__ */ be(() => oe() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), re = /* @__PURE__ */ be(() => Rt(["svelte-flow__minimap", ve()]));
  ti(e, {
    get position() {
      return H();
    },
    get style() {
      return g(st);
    },
    get class() {
      return g(re);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ye, Zt) => {
      var Yt = dt(), ln = _e(Yt);
      {
        var De = (lt) => {
          var Ye = Zm();
          xe(Ye, "aria-labelledby", Xe);
          let Re;
          var ut = X(Ye);
          {
            var Jt = (mt) => {
              var $t = Rm();
              xe($t, "id", Xe);
              var Pn = X($t, !0);
              q($t), Te(() => on(Pn, z())), A(mt, $t);
            };
            Ce(ut, (mt) => {
              z() && mt(Jt);
            });
          }
          var Et = B(ut);
          Ft(Et, 1, u, (mt) => mt.id, (mt, $t) => {
            var Pn = dt();
            const rt = /* @__PURE__ */ be(() => l().get(g($t).id));
            var vo = _e(Pn);
            {
              var er = (Nt) => {
                const wr = /* @__PURE__ */ be(() => yr(g(rt))), br = /* @__PURE__ */ be(() => Ge == null ? void 0 : Ge(g(rt))), Lr = /* @__PURE__ */ be(() => ce(g(rt))), go = /* @__PURE__ */ be(() => fe(g(rt)));
                Dd(Nt, bt(
                  {
                    get x() {
                      return g(rt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(rt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(wr),
                  {
                    get selected() {
                      return g(rt).selected;
                    },
                    get color() {
                      return g(br);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(Lr);
                    },
                    get strokeWidth() {
                      return T();
                    },
                    shapeRendering: Se,
                    get class() {
                      return g(go);
                    }
                  }
                ));
              };
              Ce(vo, (Nt) => {
                g(rt) && Lc(g(rt)) && Nt(er);
              });
            }
            A(mt, Pn);
          });
          var Qn = B(Et);
          q(Ye), Mt(Ye, (mt, $t) => ru == null ? void 0 : ru(mt, $t), () => ({
            panZoom: c(),
            viewport: ue,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: U(),
            zoomStep: j(),
            pannable: K(),
            zoomable: te()
          })), Te(() => {
            xe(Ye, "width", g(v)), xe(Ye, "height", g(p)), xe(Ye, "viewBox", `${g(k) ?? ""} ${g(P) ?? ""} ${g(E) ?? ""} ${g(N) ?? ""}`), Re = xt(Ye, "", Re, {
              "--xy-minimap-mask-background-color-props": V(),
              "--xy-minimap-mask-stroke-color-props": M(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * g(_) : void 0
            }), xe(Qn, "d", `M${g(k) - g(w)},${g(P) - g(w)}h${g(E) + g(w) * 2}v${g(N) + g(w) * 2}h${-g(E) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), A(lt, Ye);
        };
        Ce(ln, (lt) => {
          c() && lt(De);
        });
      }
      A(ye, Yt);
    },
    $$slots: { default: !0 }
  });
  var Ie = he({
    get position() {
      return H();
    },
    set position(ye) {
      H(ye), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(ye) {
      z(ye), m();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(ye) {
      I(ye), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(ye) {
      L(ye), m();
    },
    get nodeClass() {
      return Y();
    },
    set nodeClass(ye) {
      Y(ye), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(ye) {
      S(ye), m();
    },
    get nodeStrokeWidth() {
      return T();
    },
    set nodeStrokeWidth(ye) {
      T(ye), m();
    },
    get bgColor() {
      return $();
    },
    set bgColor(ye) {
      $(ye), m();
    },
    get maskColor() {
      return V();
    },
    set maskColor(ye) {
      V(ye), m();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(ye) {
      M(ye), m();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(ye) {
      O(ye), m();
    },
    get width() {
      return R();
    },
    set width(ye) {
      R(ye), m();
    },
    get height() {
      return W();
    },
    set height(ye) {
      W(ye), m();
    },
    get pannable() {
      return K();
    },
    set pannable(ye) {
      K(ye), m();
    },
    get zoomable() {
      return te();
    },
    set zoomable(ye) {
      te(ye), m();
    },
    get inversePan() {
      return U();
    },
    set inversePan(ye) {
      U(ye), m();
    },
    get zoomStep() {
      return j();
    },
    set zoomStep(ye) {
      j(ye), m();
    },
    get style() {
      return oe();
    },
    set style(ye) {
      oe(ye), m();
    },
    get class() {
      return ve();
    },
    set class(ye) {
      ve(ye), m();
    }
  });
  return r(), Ie;
}
de(
  Od,
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
const ou = (e) => Zp(e);
function Gt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = Qe(), h = (k) => {
    var P, E;
    const N = F(p), H = ou(k) ? k : N.get(k.id), z = H.parentId ? qp(H.position, H.measured, H.parentId, N, F(b)) : H.position, I = {
      ...H,
      position: z,
      width: ((P = H.measured) == null ? void 0 : P.width) ?? H.width,
      height: ((E = H.measured) == null ? void 0 : E.height) ?? H.height
    };
    return no(I);
  }, C = (k, P, E = { replace: !1 }) => {
    var N;
    const H = (N = F(p).get(k)) == null ? void 0 : N.internals.userNode;
    if (!H)
      return;
    const z = typeof P == "function" ? P(H) : P;
    E.replace ? d.update((I) => I.map((L) => L.id === k ? ou(z) ? z : { ...L, ...z } : L)) : (Object.assign(H, z), d.update((I) => I));
  }, w = (k) => F(p).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var P;
      return (P = w(k)) == null ? void 0 : P.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? F(d) : iu(F(p), k),
    getEdge: (k) => F(x).get(k),
    getEdges: (k) => k === void 0 ? F(f) : iu(F(x), k),
    setZoom: (k, P) => {
      const E = F(c);
      return E ? E.scaleTo(k, { duration: P == null ? void 0 : P.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (k, P) => {
      const E = F(i), N = F(c);
      return N ? (await N.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (k, P, E) => {
      const N = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : F(u), H = F(c);
      return H ? (await H.setViewport({
        x: F(a) / 2 - k * N,
        y: F(s) / 2 - P * N,
        zoom: N
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, P) => {
      const E = F(c);
      if (!E)
        return Promise.resolve(!1);
      const N = Is(k, F(a), F(s), F(l), F(u), (P == null ? void 0 : P.padding) ?? 0.1);
      return await E.setViewport(N, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, P = !0, E) => {
      const N = Rl(k), H = N ? k : h(k);
      return H ? (E || F(d)).filter((z) => {
        const I = F(p).get(z.id);
        if (!I || !N && z.id === k.id)
          return !1;
        const L = no(I), Y = Zo(L, H);
        return P && Y > 0 || Y >= H.width * H.height;
      }) : [];
    },
    isNodeIntersecting: (k, P, E = !0) => {
      const N = Rl(k) ? k : h(k);
      if (!N)
        return !1;
      const H = Zo(N, P);
      return E && H > 0 || H >= N.width * N.height;
    },
    deleteElements: async ({ nodes: k = [], edges: P = [] }) => {
      const { nodes: E, edges: N } = await Tc({
        nodesToRemove: k,
        edgesToRemove: P,
        nodes: F(d),
        edges: F(f),
        onBeforeDelete: F(r)
      });
      return E && d.update((H) => H.filter((z) => !E.some(({ id: I }) => I === z.id))), N && f.update((H) => H.filter((z) => !N.some(({ id: I }) => I === z.id))), {
        deletedNodes: E,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (k, P = { snapToGrid: !0 }) => {
      const E = F(v);
      if (!E)
        return k;
      const N = P.snapToGrid ? F(o) : !1, { x: H, y: z, zoom: I } = F(i), { x: L, y: Y } = E.getBoundingClientRect(), S = {
        x: k.x - L,
        y: k.y - Y
      };
      return Qo(S, [H, z, I], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const P = F(v);
      if (!P)
        return k;
      const { x: E, y: N, zoom: H } = F(i), { x: z, y: I } = P.getBoundingClientRect(), L = Oc(k, [E, N, H]);
      return {
        x: L.x + z,
        y: L.y + I
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
      edges: F(f).map((k) => ({ ...k })),
      viewport: { ...F(i) }
    }),
    updateNode: C,
    updateNodeData: (k, P, E) => {
      var N;
      const H = (N = F(p).get(k)) == null ? void 0 : N.internals.userNode;
      if (!H)
        return;
      const z = typeof P == "function" ? P(H) : P;
      H.data = E != null && E.replace ? z : { ...H.data, ...z }, d.update((I) => I);
    },
    getNodesBounds: (k) => {
      const P = F(p), E = F(b);
      return Yp(k, { nodeLookup: P, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: P, nodeId: E }) => {
      var N;
      return Array.from(((N = F(_).get(`${E}-${k}-${P ?? null}`)) == null ? void 0 : N.values()) ?? []);
    },
    viewport: i
  };
}
function iu(e, t) {
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
var Ym = /* @__PURE__ */ ae('<div class="svelte-flow__node-toolbar"><!></div>');
function Ld(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(C, "$nodes", n), i = () => ee(h, "$nodeLookup", n), a = () => ee(_, "$viewport", n), s = () => ee(x, "$domNode", n), l = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie(), c = /* @__PURE__ */ ie();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), v = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: h, nodes: C } = Qe(), { getNodesBounds: w } = Gt(), k = Sr("svelteflow__node_id");
  let P = /* @__PURE__ */ ie(), E = /* @__PURE__ */ ie([]), N = p() !== void 0 ? p() : 10, H = f() !== void 0 ? f() : Ve.Top, z = v() !== void 0 ? v() : "center";
  me(
    () => (o(), Q(d()), i()),
    () => {
      o();
      const T = Array.isArray(d()) ? d() : [d() || k];
      G(E, T.reduce(
        ($, V) => {
          const M = i().get(V);
          return M && $.push(M), $;
        },
        []
      ));
    }
  ), me(
    () => (g(E), a()),
    () => {
      const T = w(g(E));
      T && G(P, a0(T, a(), H, N, z));
    }
  ), me(() => g(E), () => {
    G(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((T) => (T.internals.z || 5) + 1)));
  }), me(() => o(), () => {
    G(u, o().filter((T) => T.selected).length);
  }), me(
    () => (Q(b()), g(E), g(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), kt(), Be();
  var I = dt(), L = _e(I);
  {
    var Y = (T) => {
      var $ = Ym();
      let V;
      var M = X($);
      Vt(M, t, "default", {}), q($), Mt($, (O, R) => Xi == null ? void 0 : Xi(O, R), () => ({ domNode: s() })), Te(
        (O) => {
          xe($, "data-id", O), V = xt($, "", V, {
            position: "absolute",
            transform: g(P),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((O, R) => `${O}${R.id} `, "").trim()
        ],
        be
      ), A(T, $);
    };
    Ce(L, (T) => {
      s() && g(c) && g(E) && T(Y);
    });
  }
  A(e, I);
  var S = he({
    get nodeId() {
      return d();
    },
    set nodeId(T) {
      d(T), m();
    },
    get position() {
      return f();
    },
    set position(T) {
      f(T), m();
    },
    get align() {
      return v();
    },
    set align(T) {
      v(T), m();
    },
    get offset() {
      return p();
    },
    set offset(T) {
      p(T), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(T) {
      b(T), m();
    }
  });
  return r(), S;
}
de(
  Ld,
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
function Or(e) {
  const { nodes: t, nodeLookup: n } = Qe();
  let r = [], o = !0;
  return ur([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!g0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const au = "tinyflow-component";
class Bm {
  constructor(t) {
    if (jt(this, "options"), jt(this, "rootEl"), jt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(au);
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
    const n = document.createElement(au);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Wm = () => {
  const e = $e([]), t = $e([]), n = $e({ x: 250, y: 100, zoom: 1 });
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
}, ki = Wm();
var qm = /* @__PURE__ */ ae("<button><!></button>");
function nt(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = qm();
  let i;
  var a = X(o);
  return Er(a, () => n() ?? _t), q(o), Te(() => i = xn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), A(e, o), he({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
de(nt, { children: {} }, [], [], !0);
var jm = /* @__PURE__ */ ae("<input>");
function zd(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = jm();
  So(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), he();
}
de(zd, {}, [], [], !0);
var Xm = /* @__PURE__ */ ae("<input>");
function Lt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Xm();
  So(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), he();
}
de(Lt, {}, [], [], !0);
var Km = /* @__PURE__ */ ae("<textarea></textarea>");
function Ut(e, t) {
  ge(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Km();
  Ov(o);
  let i;
  return Te(() => i = xn(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), A(e, o), he({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
de(Ut, { value: {} }, [], [], !0);
var Fm = /* @__PURE__ */ ae('<div role="button"><!></div>'), Um = /* @__PURE__ */ ae("<div></div>");
function Ad(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Be();
  var l = Um();
  let u;
  return Ft(l, 5, o, Do, (c, d, f) => {
    var v = Fm();
    xe(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var p = X(v);
    {
      var b = (_) => {
        var h = Fe();
        Te(() => on(h, g(d).label)), A(_, h);
      }, x = (_) => {
        var h = dt(), C = _e(h);
        Er(C, () => g(d).label ?? _t), A(_, h);
      };
      Ce(p, (_) => {
        typeof g(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    q(v), Te(() => Tt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), A(c, v);
  }), q(l), Te(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), he({
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
Ko(["click", "keydown"]);
de(Ad, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = (e, t, n) => t(g(n)), Jm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Qm = /* @__PURE__ */ ae('<span class="tf-collapse-item-title-icon"><!></span>'), e2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-description"><!></div>'), t2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-content"><!></div>'), n2 = /* @__PURE__ */ ae('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), r2 = /* @__PURE__ */ ae("<div></div>");
const o2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Id(e, t) {
  ge(t, !0), at(e, o2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => yn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = r2();
  return Ft(a, 21, n, Do, (s, l, u) => {
    var c = n2(), d = X(c);
    xe(d, "tabindex", u), d.__click = [Gm, i, l], d.__keydown = [Jm, i, l];
    var f = X(d);
    {
      var v = (w) => {
        var k = Qm(), P = X(k);
        sr(P, {
          get target() {
            return g(l).icon;
          }
        }), q(k), A(w, k);
      };
      Ce(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var p = B(f, 2);
    sr(p, {
      get target() {
        return g(l).title;
      }
    });
    var b = B(p, 2);
    q(d);
    var x = B(d, 2);
    {
      var _ = (w) => {
        var k = e2(), P = X(k);
        sr(P, {
          get target() {
            return g(l).description;
          }
        }), q(k), A(w, k);
      };
      Ce(x, (w) => {
        g(l).description && w(_);
      });
    }
    var h = B(x, 2);
    {
      var C = (w) => {
        var k = t2(), P = X(k);
        sr(P, {
          get target() {
            return g(l).content;
          }
        }), q(k), A(w, k);
      };
      Ce(h, (w) => {
        o().includes(g(l).key) && w(C);
      });
    }
    q(c), Te((w) => Tt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), q(a), Te(() => {
    xt(a, t.style), Tt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, a), he({
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
Ko(["click", "keydown"]);
de(Id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  ge(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = _e(r);
  {
    var i = (s) => {
      var l = dt(), u = _e(l);
      Er(u, () => n() ?? _t), A(s, l);
    }, a = (s) => {
      var l = dt(), u = _e(l);
      Es(u, n), A(s, l);
    };
    Ce(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return A(e, r), he({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
de(sr, { target: {} }, [], [], !0);
var i2 = (e, t, n) => t(g(n)), a2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), s2 = /* @__PURE__ */ ae('<div class="tf-select-content-children"><!></div>'), l2 = /* @__PURE__ */ ae('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), u2 = /* @__PURE__ */ ae('<div class="tf-select-content nopan nodrag"><!></div>'), c2 = /* @__PURE__ */ ae("<!> <!>", 1), d2 = /* @__PURE__ */ ae('<div class="tf-select-input-placeholder"> </div>'), f2 = /* @__PURE__ */ ae('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), v2 = /* @__PURE__ */ ae("<div><!></div>");
function $n(e, t) {
  ge(t, !0);
  const n = (C, w = _t) => {
    var k = dt(), P = _e(k);
    Ft(P, 19, w, (E, N) => `${N}_${E.value}`, (E, N) => {
      var H = l2(), z = _e(H);
      z.__click = [i2, b, N];
      var I = X(z), L = X(I);
      {
        var Y = (V) => {
          var M = a2();
          A(V, M);
        };
        Ce(L, (V) => {
          g(N).children && g(N).children.length > 0 && V(Y);
        });
      }
      q(I);
      var S = B(I, 2);
      sr(S, {
        get target() {
          return g(N).label;
        }
      }), q(z);
      var T = B(z, 2);
      {
        var $ = (V) => {
          var M = s2(), O = X(M);
          n(O, () => g(N).children), q(M), A(V, M);
        };
        Ce(T, (V) => {
          g(N).children && g(N).children.length > 0 && (l() || c().includes(g(N).value)) && V($);
        });
      }
      A(E, H);
    }), A(C, k);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Ht(t, [
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
  ]), v = /* @__PURE__ */ Oe(() => {
    const C = [], w = (k) => {
      for (let P of k)
        a().length > 0 ? a().includes(P.value) && C.push(P) : s().includes(P.value) && C.push(P), P.children && P.children.length > 0 && w(P.children);
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
  var x = v2();
  let _;
  var h = X(x);
  return Ln(
    ii(h, {
      floating: (C) => {
        var w = u2(), k = X(w);
        n(k, r), q(w), A(C, w);
      },
      children: (C, w) => {
        var k = f2();
        let P;
        var E = X(k);
        Ft(
          E,
          23,
          () => g(v),
          (N, H) => `${H}_${N.value}`,
          (N, H, z) => {
            var I = dt(), L = _e(I);
            {
              var Y = (T) => {
                var $ = dt(), V = _e($);
                {
                  var M = (O) => {
                    sr(O, {
                      get target() {
                        return g(H).label;
                      }
                    });
                  };
                  Ce(V, (O) => {
                    g(z) === 0 && O(M);
                  });
                }
                A(T, $);
              }, S = (T) => {
                var $ = c2(), V = _e($);
                sr(V, {
                  get target() {
                    return g(H).label;
                  }
                });
                var M = B(V, 2);
                {
                  var O = (R) => {
                    var W = Fe(",");
                    A(R, W);
                  };
                  Ce(M, (R) => {
                    g(z) < g(v).length - 1 && R(O);
                  });
                }
                A(T, $);
              };
              Ce(L, (T) => {
                u() ? T(S, !1) : T(Y);
              });
            }
            A(N, I);
          },
          (N) => {
            var H = d2(), z = X(H, !0);
            q(H), Te(() => on(z, d())), A(N, H);
          }
        ), q(E), Le(2), q(k), Te(() => P = xn(k, P, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), A(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), q(x), Te(() => _ = xn(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), A(e, x), he({
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
Ko(["click"]);
de(
  $n,
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
const Bo = Math.min, jr = Math.max, Ui = Math.round, Tn = (e) => ({
  x: e,
  y: e
}), g2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, h2 = {
  start: "end",
  end: "start"
};
function as(e, t, n) {
  return jr(e, Bo(t, n));
}
function ni(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(e) {
  return e.split("-")[0];
}
function ri(e) {
  return e.split("-")[1];
}
function Rd(e) {
  return e === "x" ? "y" : "x";
}
function qs(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(Tr(e)) ? "y" : "x";
}
function js(e) {
  return Rd(oo(e));
}
function p2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ri(e), o = js(e), i = qs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Gi(a)), [a, Gi(a)];
}
function m2(e) {
  const t = Gi(e);
  return [ss(e), t, ss(t)];
}
function ss(e) {
  return e.replace(/start|end/g, (t) => h2[t]);
}
function y2(e, t, n) {
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
function w2(e, t, n, r) {
  const o = ri(e);
  let i = y2(Tr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(ss)))), i;
}
function Gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => g2[t]);
}
function b2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zd(e) {
  return typeof e != "number" ? b2(e) : {
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
function su(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = oo(t), a = js(t), s = qs(a), l = Tr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ri(t)) {
    case "start":
      v[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const x2 = async (e, t, n) => {
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
  } = su(u, r, l), f = r, v = {}, p = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: _
    } = s[b], {
      x: h,
      y: C,
      data: w,
      reset: k
    } = await _({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = C ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = su(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Yd(e, t) {
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
    altBoundary: f = !1,
    padding: v = 0
  } = ni(t, e), p = Zd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Ji(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
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
    rect: _,
    offsetParent: h,
    strategy: l
  }) : _);
  return {
    top: (x.top - w.top + p.top) / C.y,
    bottom: (w.bottom - x.bottom + p.bottom) / C.y,
    left: (x.left - w.left + p.left) / C.x,
    right: (w.right - x.right + p.right) / C.x
  };
}
const $2 = (e) => ({
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
    } = ni(e, t) || {};
    if (u == null)
      return {};
    const d = Zd(c), f = {
      x: n,
      y: r
    }, v = js(o), p = qs(v), b = await a.getDimensions(u), x = v === "y", _ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[v] - f[v] - i.floating[p], k = f[v] - i.reference[v], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = P ? P[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(P))) && (E = s.floating[C] || i.floating[p]);
    const N = w / 2 - k / 2, H = E / 2 - b[p] / 2 - 1, z = Bo(d[_], H), I = Bo(d[h], H), L = z, Y = E - b[p] - I, S = E / 2 - b[p] / 2 + N, T = as(L, S, Y), $ = !l.arrow && ri(o) != null && S !== T && i.reference[p] / 2 - (S < L ? z : I) - b[p] / 2 < 0, V = $ ? S < L ? S - L : S - Y : 0;
    return {
      [v]: f[v] + V,
      data: {
        [v]: T,
        centerOffset: S - T - V,
        ...$ && {
          alignmentOffset: V
        }
      },
      reset: $
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
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: b = !0,
        ...x
      } = ni(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Tr(o), h = oo(s), C = Tr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (C || !b ? [Gi(s)] : m2(s)), P = p !== "none";
      !f && P && k.push(...w2(s, b, p, w));
      const E = [s, ...k], N = await Yd(t, x), H = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && H.push(N[_]), d) {
        const S = p2(o, a, w);
        H.push(N[S[0]], N[S[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: H
      }], !H.every((S) => S <= 0)) {
        var I, L;
        const S = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, T = E[S];
        if (T)
          return {
            data: {
              index: S,
              overflows: z
            },
            reset: {
              placement: T
            }
          };
        let $ = (L = z.filter((V) => V.overflows[0] <= 0).sort((V, M) => V.overflows[1] - M.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var Y;
              const V = (Y = z.filter((M) => {
                if (P) {
                  const O = oo(M.placement);
                  return O === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((O) => O > 0).reduce((O, R) => O + R, 0)]).sort((M, O) => M[1] - O[1])[0]) == null ? void 0 : Y[0];
              V && ($ = V);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function C2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Tr(n), s = ri(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ni(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
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
  return s && typeof p == "number" && (v = s === "end" ? p * -1 : p), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const k2 = function(e) {
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
      } = t, l = await C2(t, e);
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
}, S2 = function(e) {
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
              x: _,
              y: h
            } = x;
            return {
              x: _,
              y: h
            };
          }
        },
        ...l
      } = ni(e, t), u = {
        x: n,
        y: r
      }, c = await Yd(t, l), d = oo(Tr(o)), f = Rd(d);
      let v = u[f], p = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[x], C = v - c[_];
        v = as(h, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = p + c[x], C = p - c[_];
        p = as(h, p, C);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function ma() {
  return typeof window < "u";
}
function fo(e) {
  return Bd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Gn(e) {
  var t;
  return (t = (Bd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Bd(e) {
  return ma() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function _n(e) {
  return ma() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function zn(e) {
  return ma() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function lu(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function oi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function E2(e) {
  return ["table", "td", "th"].includes(fo(e));
}
function ya(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Xs(e) {
  const t = Ks(), n = _n(e) ? Cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function P2(e) {
  let t = hr(e);
  for (; zn(t) && !io(t); ) {
    if (Xs(t))
      return t;
    if (ya(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Ks() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function io(e) {
  return ["html", "body", "#document"].includes(fo(e));
}
function Cn(e) {
  return an(e).getComputedStyle(e);
}
function wa(e) {
  return _n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (fo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lu(e) && e.host || // Fallback.
    Gn(e)
  );
  return lu(t) ? t.host : t;
}
function Wd(e) {
  const t = hr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && oi(t) ? t : Wd(t);
}
function qd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Wd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (ls(a), t.concat(a, a.visualViewport || [], oi(o) ? o : [], [])) : t.concat(o, qd(o, []));
}
function ls(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jd(e) {
  const t = Cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ui(n) !== i || Ui(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Xd(e) {
  return _n(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = Xd(e);
  if (!zn(t))
    return Tn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = jd(t);
  let a = (i ? Ui(n.width) : n.width) / r, s = (i ? Ui(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const M2 = /* @__PURE__ */ Tn(0);
function Kd(e) {
  const t = an(e);
  return !Ks() || !t.visualViewport ? M2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Xd(e);
  let a = Tn(1);
  t && (r ? _n(r) && (a = Xr(r)) : a = Xr(e));
  const s = V2(i, n, r) ? Kd(i) : Tn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = an(i), v = r && _n(r) ? an(r) : r;
    let p = f, b = ls(p);
    for (; b && r && v !== p; ) {
      const x = Xr(b), _ = b.getBoundingClientRect(), h = Cn(b), C = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = _.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += w, p = an(b), b = ls(p);
    }
  }
  return Ji({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Fs(e, t) {
  const n = wa(e).scrollLeft;
  return t ? t.left + n : Wo(Gn(e)).left + n;
}
function Fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Fs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function T2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Gn(r), s = t ? ya(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Tn(1);
  const c = Tn(0), d = zn(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || oi(a)) && (l = wa(r)), zn(r))) {
    const v = Wo(r);
    u = Xr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Fd(a, l, !0) : Tn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function H2(e) {
  return Array.from(e.getClientRects());
}
function N2(e) {
  const t = Gn(e), n = wa(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Fs(e);
  const s = -n.scrollTop;
  return Cn(r).direction === "rtl" && (a += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function D2(e, t) {
  const n = an(e), r = Gn(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Ks();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function O2(e, t) {
  const n = Wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = zn(e) ? Xr(e) : Tn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function uu(e, t, n) {
  let r;
  if (t === "viewport")
    r = D2(e, n);
  else if (t === "document")
    r = N2(Gn(e));
  else if (_n(t))
    r = O2(t, n);
  else {
    const o = Kd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ji(r);
}
function Ud(e, t) {
  const n = hr(e);
  return n === t || !_n(n) || io(n) ? !1 : Cn(n).position === "fixed" || Ud(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = qd(e, []).filter((s) => _n(s) && fo(s) !== "body"), o = null;
  const i = Cn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; _n(a) && !io(a); ) {
    const s = Cn(a), l = Xs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || oi(a) && !l && Ud(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = hr(a);
  }
  return t.set(e, r), r;
}
function z2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ya(t) ? [] : L2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = uu(t, u, o);
    return l.top = jr(c.top, l.top), l.right = Bo(c.right, l.right), l.bottom = Bo(c.bottom, l.bottom), l.left = jr(c.left, l.left), l;
  }, uu(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function A2(e) {
  const {
    width: t,
    height: n
  } = jd(e);
  return {
    width: t,
    height: n
  };
}
function I2(e, t, n) {
  const r = zn(t), o = Gn(t), i = n === "fixed", a = Wo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Tn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || oi(o)) && (s = wa(t)), r) {
      const f = Wo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Fs(o));
  const u = o && !r && !i ? Fd(o, s) : Tn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function za(e) {
  return Cn(e).position === "static";
}
function cu(e, t) {
  if (!zn(e) || Cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Gn(e) === n && (n = n.ownerDocument.body), n;
}
function Gd(e, t) {
  const n = an(e);
  if (ya(e))
    return n;
  if (!zn(e)) {
    let o = hr(e);
    for (; o && !io(o); ) {
      if (_n(o) && !za(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = cu(e, t);
  for (; r && E2(r) && za(r); )
    r = cu(r, t);
  return r && io(r) && za(r) && !Xs(r) ? n : r || P2(e) || n;
}
const R2 = async function(e) {
  const t = this.getOffsetParent || Gd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: I2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Z2(e) {
  return Cn(e).direction === "rtl";
}
const Y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: T2,
  getDocumentElement: Gn,
  getClippingRect: z2,
  getOffsetParent: Gd,
  getElementRects: R2,
  getClientRects: H2,
  getDimensions: A2,
  getScale: Xr,
  isElement: _n,
  isRTL: Z2
}, B2 = k2, W2 = S2, q2 = _2, j2 = $2, X2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Y2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return x2(e, t, {
    ...o,
    platform: i
  });
}, K2 = ({
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
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    X2(e, u, {
      placement: r,
      middleware: [
        B2(o),
        // 手动偏移配置
        q2(i),
        //自动翻转
        W2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [j2({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: C, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: P } = w.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
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
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(_) {
    _.stopPropagation(), f ? p() : v();
  }
  function x(_) {
    u.contains(_.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      p();
    },
    isVisible() {
      return f;
    }
  };
};
var F2 = /* @__PURE__ */ ae('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ii(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  hn(() => (s = K2({
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
  var u = F2(), c = X(u), d = X(c);
  Er(d, n), q(c), Ln(c, (p) => i = p, () => i);
  var f = B(c, 2), v = X(f);
  return Er(v, r), q(f), Ln(f, (p) => a = p, () => a), q(u), A(e, u), he({
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
de(ii, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function it(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = dt(), s = _e(a);
  return Wv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = xn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = dt(), f = _e(d);
    Er(f, () => n() ?? _t), A(u, d);
  }), A(e, a), he({
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
de(it, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const G2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ba(e, t) {
  ge(t, !0), at(e, G2);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  nt(e, bt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = U2();
      A(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
de(ba, {}, [], [], !0);
const J2 = () => {
  const e = Qe();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, ao = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Q2 = () => {
  const { nodes: e, nodeLookup: t } = Qe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = ao(), a = {
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
}, pr = () => Sr("tinyflow_options");
var ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ry = /* @__PURE__ */ ae('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), oy = /* @__PURE__ */ ae('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const iy = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function En(e, t) {
  ge(t, !0), at(e, iy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "showSourceHandle", 7, !0), d = y(t, "showTargetHandle", 7, !0), f = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: p, getNode: b } = Gt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: _ } = J2(), { copyNode: h } = Q2(), C = pr(), w = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var k = oy(), P = _e(k);
  {
    var E = ($) => {
      Ld($, {
        get position() {
          return Ve.Top;
        },
        align: "end",
        children: (V, M) => {
          var O = ry(), R = X(O);
          {
            var W = (oe) => {
              nt(oe, {
                class: "tf-node-toolbar-item",
                onclick: w,
                children: (ve, we) => {
                  var le = ey();
                  A(ve, le);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(R, (oe) => {
              s() && oe(W);
            });
          }
          var K = B(R, 2);
          {
            var te = (oe) => {
              nt(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (ve, we) => {
                  var le = ty();
                  A(ve, le);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(K, (oe) => {
              l() && oe(te);
            });
          }
          var U = B(K, 2);
          {
            var j = (oe) => {
              nt(oe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ve, we) => {
                  var le = ny();
                  A(ve, le);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(U, (oe) => {
              u() && oe(j);
            });
          }
          q(O), A(V, O);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(P, ($) => {
      (s() || l() || u()) && $(E);
    });
  }
  var N = B(P, 2), H = B(X(N), 2), z = X(H);
  Id(z, {
    items: x,
    activeKeys: v,
    onChange: ($, V) => {
      var M;
      p(r(), { expand: V == null ? void 0 : V.includes("key") }), (M = f()) == null || M(V != null && V.includes("key") ? "key" : "");
    }
  }), q(H), q(N);
  var I = B(N, 2);
  {
    var L = ($) => {
      gr($, {
        type: "target",
        get position() {
          return Ve.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ce(I, ($) => {
      d() && $(L);
    });
  }
  var Y = B(I, 2);
  {
    var S = ($) => {
      gr($, {
        type: "source",
        get position() {
          return Ve.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ce(Y, ($) => {
      c() && $(S);
    });
  }
  var T = B(Y, 2);
  return Er(T, () => i() ?? _t), A(e, k), he({
    get data() {
      return n();
    },
    set data($) {
      n($), m();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), m();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), m();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), m();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute($ = !0) {
      s($), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete($ = !0) {
      u($), m();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle($ = !0) {
      c($), m();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle($ = !0) {
      d($), m();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse($) {
      f($), m();
    }
  });
}
de(
  En,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
function St() {
  return Sr("svelteflow__node_id");
}
const Jd = [
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
], ay = [
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
var sy = /* @__PURE__ */ ae('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ly = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), uy = /* @__PURE__ */ ae('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qd(e, t) {
  ge(t, !0), at(e, cy);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = St(), l = /* @__PURE__ */ Oe(() => Or(s)), u = /* @__PURE__ */ Oe(() => {
    var H, z;
    return {
      ...i(),
      ...(z = (H = o()) == null ? void 0 : H.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Gt(), d = (H, z) => {
    c(s, (I) => {
      let L = I.data.parameters;
      return L[a()][H] = z, { parameters: L };
    });
  }, f = (H) => {
    const z = H.target.value;
    d("name", z);
  }, v = (H) => {
    const z = H.target.checked;
    d("required", z);
  }, p = (H) => {
    const z = H.value;
    z && d("dataType", z);
  };
  let b;
  const x = () => {
    c(s, (H) => {
      let z = H.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), b == null || b.hide();
  };
  var _ = uy(), h = _e(_), C = X(h);
  Lt(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), q(h);
  var w = B(h, 2), k = X(w);
  zd(k, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), q(w);
  var P = B(w, 2), E = X(P);
  Ln(
    ii(E, {
      placement: "bottom",
      floating: (H) => {
        var z = sy(), I = X(z), L = B(X(I));
        const Y = /* @__PURE__ */ Oe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        $n(L, {
          items: Jd,
          style: "width: 100%",
          onSelect: p,
          get value() {
            return g(Y);
          }
        }), q(I);
        var S = B(I, 2), T = B(X(S));
        Ut(T, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (R) => {
            const W = R.target.value;
            d("defaultValue", W);
          }
        }), q(S);
        var $ = B(S, 2), V = B(X($));
        Ut(V, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (R) => {
            const W = R.target.value;
            d("description", W);
          }
        }), q($);
        var M = B($, 2), O = X(M);
        nt(O, {
          onclick: x,
          children: (R, W) => {
            Le();
            var K = Fe("删除");
            A(R, K);
          },
          $$slots: { default: !0 }
        }), q(M), q(z), A(H, z);
      },
      children: (H, z) => {
        nt(H, {
          class: "input-btn-more",
          children: (I, L) => {
            var Y = ly();
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => b = H,
    () => b
  ), q(P), A(e, _);
  var N = he({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), m();
    },
    get index() {
      return a();
    },
    set index(H) {
      a(H), m();
    }
  });
  return r(), N;
}
de(Qd, { parameter: {}, index: {} }, [], [], !0);
var dy = /* @__PURE__ */ ae('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), fy = /* @__PURE__ */ ae('<div class="none-params svelte-3n0wca">无输入参数</div>'), vy = /* @__PURE__ */ ae('<div class="input-container svelte-3n0wca"><!> <!></div>');
const gy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function ef(e, t) {
  ge(t, !0), at(e, gy);
  const [n, r] = ft(), o = () => ee(g(a), "$node", n);
  let i = St(), a = /* @__PURE__ */ Oe(() => Or(i)), s = /* @__PURE__ */ Oe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = vy(), u = X(l);
  {
    var c = (f) => {
      var v = dy();
      Le(4), A(f, v);
    };
    Ce(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Ft(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, p) => {
      Qd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var v = fy();
      A(f, v);
    }
  ), q(l), A(e, l), he(), r();
}
de(ef, {}, [], [], !0);
const tf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ao()), tf(t.children);
  });
}, Rn = () => {
  const { updateNodeData: e } = Gt();
  return {
    addParameter: (t, n = "parameters", r) => {
      tf(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: ao()
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
var hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ ae('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function nf(e, t) {
  ge(t, !0), at(e, yy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn();
  return En(e, bt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = hy();
      A(a, s);
    },
    children: (a, s) => {
      var l = my(), u = _e(l), c = X(u);
      it(c, {
        level: 3,
        children: (v, p) => {
          Le();
          var b = Fe("输入参数");
          A(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      nt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, p) => {
          var b = py();
          A(v, b);
        },
        $$slots: { default: !0 }
      }), q(u);
      var f = B(u, 2);
      ef(f, {}), A(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
de(nf, { data: {} }, [], [], !0);
const rf = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), rf(e, r.source, n));
}, du = (e, t) => {
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
}, wy = (e = !1) => {
  const t = St(), n = Or(t), { nodes: r, edges: o } = Qe();
  return ur([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = du(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      rf(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = du(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var by = /* @__PURE__ */ ae('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), xy = /* @__PURE__ */ ae('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  ge(t, !0), at(e, $y);
  const [n, r] = ft(), o = () => ee(g(c), "$node", n), i = () => ee(w, "$selectItems", n);
  hn(() => {
    g(d).refType || _({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = St(), c = /* @__PURE__ */ Oe(() => Or(u)), d = /* @__PURE__ */ Oe(() => {
    var T;
    return {
      ...a(),
      ...(T = o()) == null ? void 0 : T.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Gt(), v = (T, $) => {
    f(u, (V) => {
      let M = V.data[l()];
      return M[s()] = { ...M[s()], [T]: $ }, { [l()]: M };
    });
  }, p = (T) => {
    const $ = T.target.value;
    v("name", $);
  }, b = (T) => {
    const $ = T.target.value;
    v("value", $);
  }, x = (T) => {
    const $ = T.value;
    v("ref", $);
  }, _ = (T) => {
    const $ = T.value;
    v("refType", $);
  };
  let h;
  const C = () => {
    f(u, (T) => {
      let $ = T.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), h == null || h.hide();
  }, w = wy();
  var k = xy(), P = _e(k), E = X(P);
  Lt(E, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), q(P);
  var N = B(P, 2), H = X(N);
  {
    var z = (T) => {
      Lt(T, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, I = (T, $) => {
      {
        var V = (M) => {
          const O = /* @__PURE__ */ Oe(() => [g(d).ref]);
          $n(M, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(O);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        Ce(
          T,
          (M) => {
            g(d).refType !== "input" && M(V);
          },
          $
        );
      }
    };
    Ce(H, (T) => {
      g(d).refType === "fixed" ? T(z) : T(I, !1);
    });
  }
  q(N);
  var L = B(N, 2), Y = X(L);
  Ln(
    ii(Y, {
      placement: "bottom",
      floating: (T) => {
        var $ = by(), V = X($), M = B(X(V));
        const O = /* @__PURE__ */ Oe(() => g(d).refType ? [g(d).refType] : []);
        $n(M, {
          items: ay,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(O);
          },
          onSelect: _
        }), q(V);
        var R = B(V, 2), W = B(X(R));
        Ut(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (oe) => {
            const ve = oe.target.value;
            v("defaultValue", ve);
          }
        }), q(R);
        var K = B(R, 2), te = B(X(K));
        Ut(te, {
          rows: 3,
          style: "width: 100%;",
          onchange: (oe) => {
            const ve = oe.target.value;
            v("description", ve);
          }
        }), q(K);
        var U = B(K, 2), j = X(U);
        nt(j, {
          onclick: C,
          children: (oe, ve) => {
            Le();
            var we = Fe("删除");
            A(oe, we);
          },
          $$slots: { default: !0 }
        }), q(U), q($), A(T, $);
      },
      children: (T, $) => {
        ba(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), q(L), A(e, k);
  var S = he({
    get parameter() {
      return a();
    },
    set parameter(T) {
      a(T), m();
    },
    get index() {
      return s();
    },
    set index(T) {
      s(T), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(T) {
      l(T), m();
    }
  });
  return r(), S;
}
de(of, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var _y = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Cy = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), ky = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  ge(t, !0), at(e, Sy);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = St(), l = /* @__PURE__ */ Oe(() => Or(s)), u = /* @__PURE__ */ Oe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = ky(), d = X(c);
  {
    var f = (b) => {
      var x = _y();
      Le(4), A(b, x);
    };
    Ce(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = B(d, 2);
  Ft(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, _) => {
      of(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(_);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = Cy(), _ = X(x, !0);
      q(x), Te(() => on(_, i())), A(b, x);
    }
  ), q(c), A(e, c);
  var p = he({
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
de(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ ae('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function af(e, t) {
  ge(t, !0), at(e, Vy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn();
  return En(e, bt(
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
        var s = Ey();
        A(a, s);
      },
      children: (a, s) => {
        var l = My(), u = _e(l), c = X(u);
        it(c, {
          level: 3,
          children: (v, p) => {
            Le();
            var b = Fe("输出参数");
            A(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, p) => {
            var b = Py();
            A(v, b);
          },
          $$slots: { default: !0 }
        }), q(u);
        var f = B(u, 2);
        nn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), A(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
de(af, { data: {} }, [], [], !0);
var Ty = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ ae('<div class="input-more-item svelte-1cfeest"><!></div>'), Ny = /* @__PURE__ */ ae('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Dy = /* @__PURE__ */ ae('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Oy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  ge(t, !0), at(e, Oy);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = St(), u = /* @__PURE__ */ Oe(() => Or(l)), c = /* @__PURE__ */ Oe(() => {
    var V;
    let M = (V = o()) == null ? void 0 : V.data[s()], O;
    if (M && a().length > 0) {
      let R = M;
      for (let W = 0; W < a().length; W++) {
        const K = a()[W];
        W == a().length - 1 ? O = R[K] : R = R[K].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Gt(), f = (V, M) => {
    d(l, (O) => {
      const R = O.data[s()];
      if (R && a().length > 0) {
        let W = R;
        for (let K = 0; K < a().length; K++) {
          const te = a()[K];
          K == a().length - 1 ? W[te] = { ...W[te], [V]: M } : W = R[te].children;
        }
      }
      return { [s()]: R };
    });
  }, v = (V) => {
    const M = V.target.value;
    f("name", M);
  }, p = (V) => {
    const M = V.value;
    f("dataType", M);
  };
  let b;
  const x = () => {
    d(l, (V) => {
      let M = V.data[s()];
      if (M && a().length > 0) {
        let O = M;
        for (let R = 0; R < a().length; R++) {
          const W = a()[R];
          R == a().length - 1 ? O.splice(W, 1) : O = O[W].children;
        }
      }
      return { [s()]: [...M] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (V) => {
      let M = V.data[s()];
      if (M && a().length > 0) {
        let O = M;
        for (let R = 0; R < a().length; R++) {
          const W = a()[R];
          R == a().length - 1 ? O[W].children ? O[W].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : O[W].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[W].children;
        }
      }
      return { [s()]: [...M] };
    });
  };
  var h = Dy(), C = _e(h), w = X(C);
  {
    var k = (V) => {
      var M = dt(), O = _e(M);
      Ft(O, 17, a, Do, (R, W) => {
        Le();
        var K = Fe(" ");
        A(R, K);
      }), A(V, M);
    };
    Ce(w, (V) => {
      a().length > 1 && V(k);
    });
  }
  var P = B(w, 2);
  const E = /* @__PURE__ */ Oe(() => g(c).nameDisabled === !0);
  Lt(P, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(E);
    }
  }), q(C);
  var N = B(C, 2), H = X(N);
  const z = /* @__PURE__ */ Oe(() => g(c).dataType ? [g(c).dataType] : []), I = /* @__PURE__ */ Oe(() => g(c).dataTypeDisabled === !0);
  $n(H, {
    items: Jd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(z);
    },
    get disabled() {
      return g(I);
    },
    onSelect: p
  });
  var L = B(H, 2);
  {
    var Y = (V) => {
      nt(V, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (M, O) => {
          var R = Ty();
          A(M, R);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(L, (V) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && V(Y);
    });
  }
  q(N);
  var S = B(N, 2), T = X(S);
  Ln(
    ii(T, {
      placement: "bottom",
      floating: (V) => {
        var M = Ny(), O = X(M), R = B(X(O));
        const W = /* @__PURE__ */ Oe(() => g(c).defaultValue || "");
        Ut(R, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (ve) => {
            const we = ve.target.value;
            f("defaultValue", we);
          }
        }), q(O);
        var K = B(O, 2), te = B(X(K));
        const U = /* @__PURE__ */ Oe(() => g(c).description || "");
        Ut(te, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(U);
          },
          onchange: (ve) => {
            const we = ve.target.value;
            f("description", we);
          }
        }), q(K);
        var j = B(K, 2);
        {
          var oe = (ve) => {
            var we = Hy(), le = X(we);
            nt(le, {
              onclick: x,
              children: (Ee, se) => {
                Le();
                var ue = Fe("删除");
                A(Ee, ue);
              },
              $$slots: { default: !0 }
            }), q(we), A(ve, we);
          };
          Ce(j, (ve) => {
            g(c).deleteDisabled !== !0 && ve(oe);
          });
        }
        q(M), A(V, M);
      },
      children: (V, M) => {
        ba(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => b = V,
    () => b
  ), q(S), A(e, h);
  var $ = he({
    get parameter() {
      return i();
    },
    set parameter(V) {
      i(V), m();
    },
    get position() {
      return a();
    },
    set position(V) {
      a(V), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(V) {
      s(V), m();
    }
  });
  return r(), $;
}
de(sf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ ae("<!> <!>", 1), zy = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Iy = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  ge(t, !0), at(e, Ry);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = (x, _ = _t, h = _t) => {
    var C = dt(), w = _e(C);
    Ft(
      w,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, P, E) => {
        var N = Ly(), H = _e(N);
        const z = /* @__PURE__ */ Oe(() => [...h(), g(E)]);
        sf(H, {
          get parameter() {
            return g(P);
          },
          get position() {
            return g(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var I = B(H, 2);
        {
          var L = (Y) => {
            var S = /* @__PURE__ */ be(() => [...h(), g(E)]);
            i(Y, () => g(P).children, () => g(S));
          };
          Ce(I, (Y) => {
            g(P).children && Y(L);
          });
        }
        A(k, N);
      },
      (k) => {
        var P = dt(), E = _e(P);
        {
          var N = (H) => {
            var z = zy(), I = X(z, !0);
            q(z), Te(() => on(I, a())), A(H, z);
          };
          Ce(E, (H) => {
            h().length === 0 && H(N);
          });
        }
        A(k, P);
      }
    ), A(x, C);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = St(), u = /* @__PURE__ */ Oe(() => Or(l)), c = /* @__PURE__ */ Oe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Iy(), f = X(d);
  {
    var v = (x) => {
      var _ = Ay();
      Le(4), A(x, _);
    };
    Ce(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var p = B(f, 2);
  i(p, () => g(c) || [], () => []), q(d), A(e, d);
  var b = he({
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
de(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Wy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), qy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ae('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  ge(t, !0), at(e, Ky);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ Ot(yn([]));
  hn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Gt();
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Zy();
        A(u, c);
      },
      children: (u, c) => {
        var d = Xy(), f = _e(d), v = X(f);
        it(v, {
          level: 3,
          children: (ue, Ne) => {
            Le();
            var Pe = Fe("输入参数");
            A(ue, Pe);
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
          children: (ue, Ne) => {
            var Pe = Yy();
            A(ue, Pe);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        it(x, {
          level: 3,
          mt: "10px",
          children: (ue, Ne) => {
            Le();
            var Pe = Fe("模型设置");
            A(ue, Pe);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().llmId ? [n().llmId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ue) => {
            const Ne = ue.value;
            l(o, () => ({ llmId: Ne }));
          },
          get value() {
            return g(C);
          }
        });
        var w = B(h, 2);
        ba(w, {}), q(_);
        var k = B(_, 4), P = X(k), E = X(P), N = X(E);
        q(E);
        var H = B(E, 2);
        So(H), H.__input = [By, l, o], q(P), q(k);
        var z = B(k, 2), I = X(z), L = X(I), Y = X(L);
        q(L);
        var S = B(L, 2);
        So(S), S.__input = [Wy, l, o], q(I), q(z);
        var T = B(z, 2), $ = X(T), V = X($), M = X(V);
        q(V);
        var O = B(V, 2);
        So(O), O.__input = [qy, l, o], q($), q(T);
        var R = B(T, 4), W = X(R);
        const K = /* @__PURE__ */ Oe(() => n().systemPrompt || "");
        Ut(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(K);
          },
          oninput: (ue) => {
            l(o, { systemPrompt: ue.target.value });
          }
        }), q(R);
        var te = B(R, 4), U = X(te);
        const j = /* @__PURE__ */ Oe(() => n().userPrompt || "");
        Ut(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (ue) => {
            l(o, { userPrompt: ue.target.value });
          }
        }), q(te);
        var oe = B(te, 2), ve = X(oe);
        it(ve, {
          level: 3,
          mt: "10px",
          children: (ue, Ne) => {
            Le();
            var Pe = Fe("输出参数");
            A(ue, Pe);
          },
          $$slots: { default: !0 }
        });
        var we = B(ve, 2);
        const le = /* @__PURE__ */ Oe(() => n().outType ? [n().outType] : []);
        $n(we, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ue) => {
            const Ne = ue.value;
            l(o, () => ({ outType: Ne }));
          },
          get value() {
            return g(le);
          }
        });
        var Ee = B(we, 2);
        nt(Ee, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ue, Ne) => {
            var Pe = jy();
            A(ue, Pe);
          },
          $$slots: { default: !0 }
        }), q(oe);
        var se = B(oe, 2);
        Jn(se, {}), Te(() => {
          on(N, `Temperature: ${n().temperature ?? 0.5}`), Ea(H, n().temperature ?? 0.5), on(Y, `Top P: ${n().topP ?? 0.9}`), Ea(S, n().topP ?? 0.9), on(M, `Top K: ${n().topK ?? 50}`), Ea(O, n().topK ?? 50);
        }), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
Ko(["input"]);
de(lf, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Uy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  ge(t, !0), at(e, Qy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  hn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = St(), { addParameter: i } = Rn(), { updateNodeData: a } = Gt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Fy();
        A(l, u);
      },
      children: (l, u) => {
        var c = Jy(), d = _e(c), f = X(d);
        it(f, {
          level: 3,
          children: (z, I) => {
            Le();
            var L = Fe("输入参数");
            A(z, L);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, I) => {
            var L = Uy();
            A(z, L);
          },
          $$slots: { default: !0 }
        }), q(d);
        var p = B(d, 2);
        nn(p, {});
        var b = B(p, 2);
        it(b, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Le();
            var L = Fe("代码");
            A(z, L);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), _ = X(x);
        const h = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : ["qlexpress"]);
        $n(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const I = z.value;
            a(o, () => ({ engine: I }));
          },
          get value() {
            return g(h);
          }
        }), q(x);
        var C = B(x, 4), w = X(C);
        const k = /* @__PURE__ */ Oe(() => n().code || "");
        Ut(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(k);
          }
        }), q(C);
        var P = B(C, 2), E = X(P);
        it(E, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            Le();
            var L = Fe("输出参数");
            A(z, L);
          },
          $$slots: { default: !0 }
        });
        var N = B(E, 2);
        nt(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, I) => {
            var L = Gy();
            A(z, L);
          },
          $$slots: { default: !0 }
        }), q(P);
        var H = B(P, 2);
        Jn(H, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
de(uf, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  ge(t, !0), at(e, rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), { updateNodeData: a } = Gt();
  return fr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = ew();
        A(s, l);
      },
      children: (s, l) => {
        var u = nw(), c = _e(u), d = X(c);
        it(d, {
          level: 3,
          children: (k, P) => {
            Le();
            var E = Fe("输入参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        nt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var E = tw();
            A(k, E);
          },
          $$slots: { default: !0 }
        }), q(c);
        var v = B(c, 2);
        nn(v, {});
        var p = B(v, 2);
        it(p, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Le();
            var E = Fe("代码");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var b = B(p, 4), x = X(b);
        const _ = /* @__PURE__ */ Oe(() => n().template || "");
        Ut(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(_);
          }
        }), q(b);
        var h = B(b, 2), C = X(h);
        it(C, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Le();
            var E = Fe("输出参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        }), q(h);
        var w = B(h, 2);
        Jn(w, {}), A(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
de(cf, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ae('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ae('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ ae('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function df(e, t) {
  ge(t, !0), at(e, hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
  ], i = St(), { addParameter: a } = Rn(), { updateNodeData: s } = Gt();
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ow();
        A(l, u);
      },
      children: (l, u) => {
        var c = gw(), d = _e(c), f = X(d), v = X(f);
        const p = /* @__PURE__ */ Oe(() => n().method ? [n().method] : ["get"]);
        $n(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ce) => {
            const fe = ce.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return g(p);
          }
        }), q(f);
        var b = B(f, 2), x = X(b);
        const _ = /* @__PURE__ */ Oe(() => n().url || "");
        Lt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ce) => {
            s(i, () => ({ url: ce.target.value }));
          },
          get value() {
            return g(_);
          }
        }), q(b), q(d);
        var h = B(d, 2), C = X(h);
        it(C, {
          level: 3,
          children: (ce, fe) => {
            Le();
            var Se = Fe("Http 头信息");
            A(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var w = B(C, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ce, fe) => {
            var Se = iw();
            A(ce, Se);
          },
          $$slots: { default: !0 }
        }), q(h);
        var k = B(h, 2);
        nn(k, { dataKeyName: "headers" });
        var P = B(k, 2), E = X(P);
        it(E, {
          level: 3,
          children: (ce, fe) => {
            Le();
            var Se = Fe("参数");
            A(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var N = B(E, 2);
        nt(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (ce, fe) => {
            var Se = aw();
            A(ce, Se);
          },
          $$slots: { default: !0 }
        }), q(P);
        var H = B(P, 2);
        nn(H, { dataKeyName: "urlParameters" });
        var z = B(H, 2);
        it(z, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Le();
            var Se = Fe("Body");
            A(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var I = B(z, 2), L = X(I), Y = X(L);
        const S = /* @__PURE__ */ Oe(() => !n().bodyType);
        Lt(Y, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Le(), q(L);
        var T = B(L, 2), $ = X(T);
        const V = /* @__PURE__ */ Oe(() => n().bodyType === "form-data");
        Lt($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(V);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Le(), q(T);
        var M = B(T, 2), O = X(M);
        const R = /* @__PURE__ */ Oe(() => n().bodyType === "x-www-form-urlencoded");
        Lt(O, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(R);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Le(), q(M);
        var W = B(M, 2), K = X(W);
        const te = /* @__PURE__ */ Oe(() => n().bodyType === "json");
        Lt(K, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(te);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Le(), q(W);
        var U = B(W, 2), j = X(U);
        const oe = /* @__PURE__ */ Oe(() => n().bodyType === "raw");
        Lt(j, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(oe);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Le(), q(U), q(I);
        var ve = B(I, 2);
        {
          var we = (ce) => {
            var fe = lw(), Se = _e(fe), Xe = X(Se);
            it(Xe, {
              level: 3,
              children: (st, re) => {
                Le();
                var Ie = Fe("参数");
                A(st, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ae = B(Xe, 2);
            nt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (st, re) => {
                var Ie = sw();
                A(st, Ie);
              },
              $$slots: { default: !0 }
            }), q(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromData" }), A(ce, fe);
          };
          Ce(ve, (ce) => {
            n().bodyType === "form-data" && ce(we);
          });
        }
        var le = B(ve, 2);
        {
          var Ee = (ce) => {
            var fe = cw(), Se = _e(fe), Xe = X(Se);
            it(Xe, {
              level: 3,
              children: (st, re) => {
                Le();
                var Ie = Fe("参数");
                A(st, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ae = B(Xe, 2);
            nt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (st, re) => {
                var Ie = uw();
                A(st, Ie);
              },
              $$slots: { default: !0 }
            }), q(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), A(ce, fe);
          };
          Ce(le, (ce) => {
            n().bodyType === "x-www-form-urlencoded" && ce(Ee);
          });
        }
        var se = B(le, 2);
        {
          var ue = (ce) => {
            var fe = dw(), Se = X(fe);
            Ut(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Xe) => {
                s(i, { bodyJson: Xe.target.value });
              }
            }), q(fe), A(ce, fe);
          };
          Ce(se, (ce) => {
            n().bodyType === "json" && ce(ue);
          });
        }
        var Ne = B(se, 2);
        {
          var Pe = (ce) => {
            var fe = fw(), Se = X(fe);
            Ut(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Xe) => {
                s(i, { bodyRaw: Xe.target.value });
              }
            }), q(fe), A(ce, fe);
          };
          Ce(Ne, (ce) => {
            n().bodyType === "raw" && ce(Pe);
          });
        }
        var Ze = B(Ne, 2), ne = X(Ze);
        it(ne, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Le();
            var Se = Fe("输出参数");
            A(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var Ue = B(ne, 2);
        nt(Ue, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ce, fe) => {
            var Se = vw();
            A(ce, Se);
          },
          $$slots: { default: !0 }
        }), q(Ze);
        var Ge = B(Ze, 2);
        Jn(Ge, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
de(df, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  ge(t, !0), at(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ Ot(yn([]));
  hn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Gt();
  return fr(() => {
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
  }), En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = pw();
        A(u, c);
      },
      children: (u, c) => {
        var d = yw(), f = _e(d), v = X(f);
        it(v, {
          level: 3,
          children: (L, Y) => {
            Le();
            var S = Fe("输入参数");
            A(L, S);
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
          children: (L, Y) => {
            var S = mw();
            A(L, S);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        it(x, {
          level: 3,
          mt: "10px",
          children: (L, Y) => {
            Le();
            var S = Fe("知识库设置");
            A(L, S);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const Y = L.value;
            l(o, () => ({ knowledgeId: Y }));
          },
          get value() {
            return g(C);
          }
        }), q(_);
        var w = B(_, 4), k = X(w);
        Lt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const Y = L.target.value;
            l(o, () => ({ keyword: Y }));
          }
        }), q(w);
        var P = B(w, 4), E = X(P);
        const N = /* @__PURE__ */ Oe(() => n().limit || "");
        Lt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const Y = L.target.value;
            l(o, () => ({ limit: Y }));
          },
          get value() {
            return g(N);
          }
        }), q(P);
        var H = B(P, 2), z = X(H);
        it(z, {
          level: 3,
          mt: "10px",
          children: (L, Y) => {
            Le();
            var S = Fe("输出参数");
            A(L, S);
          },
          $$slots: { default: !0 }
        }), q(H);
        var I = B(H, 2);
        Jn(I, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
de(ff, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), xw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const _w = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  ge(t, !0), at(e, _w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ Ot(yn([]));
  hn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Gt();
  return fr(() => {
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
  }), En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = bw();
        A(u, c);
      },
      children: (u, c) => {
        var d = $w(), f = _e(d), v = X(f);
        it(v, {
          level: 3,
          children: (I, L) => {
            Le();
            var Y = Fe("输入参数");
            A(I, Y);
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
          children: (I, L) => {
            var Y = xw();
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), q(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        it(x, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            Le();
            var Y = Fe("搜索引擎设置");
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const L = I.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return g(C);
          }
        }), q(_);
        var w = B(_, 4), k = X(w);
        Lt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const L = I.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), q(w);
        var P = B(w, 4), E = X(P);
        Lt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const L = I.target.value;
            l(o, () => ({ limit: L }));
          }
        }), q(P);
        var N = B(P, 2), H = X(N);
        it(H, {
          level: 3,
          mt: "10px",
          children: (I, L) => {
            Le();
            var Y = Fe("输出参数");
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), q(N);
        var z = B(N, 2);
        Jn(z, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
de(vf, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), kw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ae('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Ew = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gf(e, t) {
  ge(t, !0), at(e, Ew);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn();
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = Cw();
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
        var l = Sw(), u = _e(l), c = X(u);
        it(c, {
          level: 3,
          children: (x, _) => {
            Le();
            var h = Fe("循环变量");
            A(x, h);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, _) => {
            var h = kw();
            A(x, h);
          },
          $$slots: { default: !0 }
        }), q(u);
        var f = B(u, 2);
        nn(f, {});
        var v = B(f, 2), p = X(v);
        it(p, {
          level: 3,
          mt: "10px",
          children: (x, _) => {
            Le();
            var h = Fe("输出参数");
            A(x, h);
          },
          $$slots: { default: !0 }
        }), q(v);
        var b = B(v, 2);
        Jn(b, {}), A(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
de(gf, { data: {} }, [], [], !0);
const Pw = {
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
var Mw = /* @__PURE__ */ ae("<!> ", 1);
function us(e, t) {
  ge(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
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
          systemPrompt: "",
          userPrompt: "",
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Mw(), c = _e(u);
      Es(c, n);
      var d = B(c);
      Te(() => on(d, ` ${r() ?? ""}`)), A(s, u);
    },
    $$slots: { default: !0 }
  }), he({
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
de(
  us,
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
var Vw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Tw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Hw = /* @__PURE__ */ ae('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function hf(e, t) {
  ge(t, !0);
  let n = /* @__PURE__ */ Ot("base"), r = /* @__PURE__ */ Ot("show");
  const o = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      description: "使用大模型处理问题"
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
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
    const x = Object.keys(s).sort((_, h) => (s[_].sortNo || 0) - (s[h].sortNo || 0));
    for (let _ of x)
      a.push({
        icon: s[_].icon,
        title: s[_].title,
        type: _
      });
  }
  var l = Hw(), u = X(l), c = X(u), d = X(c);
  Ad(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      G(n, x.value.toString(), !0);
    }
  }), q(c);
  var f = B(c, 2), v = X(f);
  Ft(v, 21, () => o, Do, (x, _) => {
    us(x, bt(() => g(_)));
  }), q(v);
  var p = B(v, 2);
  Ft(p, 21, () => a, Do, (x, _) => {
    us(x, bt(() => g(_)));
  }), q(p), q(f), q(u);
  var b = B(u, 2);
  nt(b, {
    onclick: () => {
      G(r, g(r) ? "" : "show", !0);
    },
    children: (x, _) => {
      var h = dt(), C = _e(h);
      {
        var w = (P) => {
          var E = Vw();
          A(P, E);
        }, k = (P) => {
          var E = Tw();
          A(P, E);
        };
        Ce(C, (P) => {
          g(r) === "show" ? P(w) : P(k, !1);
        });
      }
      A(x, h);
    },
    $$slots: { default: !0 }
  }), q(l), Te(() => {
    Tt(l, 1, `tf-toolbar ${g(r) ?? ""}`), xt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), xt(p, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), A(e, l), he();
}
de(hf, {}, [], [], !0);
const Nw = () => {
  const { nodeLookup: e } = Qe();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Dw = () => {
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
}, Ow = () => {
  const { edges: e } = Qe();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Lw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ae('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ae('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Rw = /* @__PURE__ */ ae("<!> <div></div> <!>", 1);
const Zw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function pf(e, t) {
  var n;
  ge(t, !0), at(e, Zw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = St(), { addParameter: a } = Rn(), s = Gt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = pr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  fr(() => {
    r().expand && d && d.append(u);
  }), fr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ Oe(() => ({
    ...r(),
    description: c.description
  }));
  return En(e, bt(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var p = dt(), b = _e(p);
        Es(b, () => c.icon), A(v, p);
      },
      children: (v, p) => {
        var b = Rw(), x = _e(b);
        {
          var _ = (k) => {
            var P = zw(), E = _e(P), N = X(E);
            it(N, {
              level: 3,
              children: (I, L) => {
                Le();
                var Y = Fe("输入参数");
                A(I, Y);
              },
              $$slots: { default: !0 }
            });
            var H = B(N, 2);
            nt(H, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (I, L) => {
                var Y = Lw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), q(E);
            var z = B(E, 2);
            nn(z, {}), A(k, P);
          };
          Ce(x, (k) => {
            c.parametersEnable !== !1 && k(_);
          });
        }
        var h = B(x, 2);
        Ln(h, (k) => d = k, () => d);
        var C = B(h, 2);
        {
          var w = (k) => {
            var P = Iw(), E = _e(P), N = X(E);
            it(N, {
              level: 3,
              mt: "10px",
              children: (I, L) => {
                Le();
                var Y = Fe("输出参数");
                A(I, Y);
              },
              $$slots: { default: !0 }
            });
            var H = B(N, 2);
            nt(H, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (I, L) => {
                var Y = Aw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), q(E);
            var z = B(E, 2);
            Jn(z, {}), A(k, P);
          };
          Ce(C, (k) => {
            c.outputDefsEnable !== !1 && k(w);
          });
        }
        Te(() => {
          xt(h, c.rootStyle || ""), Tt(h, 1, kn(c.rootClass), "svelte-c71dg3");
        }), A(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return r();
    },
    set data(v) {
      r(v), m();
    }
  });
}
de(pf, { data: {} }, [], [], !0);
const Yw = () => {
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
var Bw = /* @__PURE__ */ ae('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Ww = /* @__PURE__ */ ae("<!> <!> <!> <!>", 1), qw = /* @__PURE__ */ ae('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const jw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function mf(e, t) {
  ge(t, !0), at(e, jw);
  const [n, r] = ft(), o = () => ee(N, "$nodes", n), i = () => ee(H, "$edges", n), a = () => ee(z, "$viewport", n), s = y(t, "onInit", 7), l = Gt();
  s()(l);
  let u = /* @__PURE__ */ Ot(!1), c = /* @__PURE__ */ Ot(void 0);
  const { updateEdgeData: d } = Yw(), f = (M) => {
    M.preventDefault(), M.dataTransfer && (M.dataTransfer.dropEffect = "move");
  }, v = (M) => {
    var O;
    M.preventDefault();
    const R = l.screenToFlowPosition({
      x: M.clientX - 250,
      y: M.clientY - 100
    }), W = (O = M.dataTransfer) == null ? void 0 : O.getData("application/tinyflow"), K = W ? JSON.parse(W) : {}, te = {
      id: `node_${ao()}`,
      position: R,
      data: {},
      ...K
    };
    ki.addNode(te), ki.selectNodeOnly(te.id);
  }, { getNode: p } = Nw(), b = (M) => {
    const O = p(M.source), R = p(M.target);
    if (M.sourceHandle === "loop_handle" || O.parentId) {
      const W = l.getEdges();
      for (let K of W)
        if (K.target === M.target) {
          const te = p(K.source);
          if (M.sourceHandle === "loop_handle" && te.parentId !== O.id || O.parentId && te.parentId !== O.parentId)
            return !1;
        }
    }
    return !(!O.parentId && R.parentId && R.parentId !== O.id);
  }, { ensureParentInNodesBefore: x } = Dw(), _ = (M, O) => {
    if (!O.isValid)
      return;
    const R = O.toNode;
    if (R.parentId)
      return;
    const W = O.fromNode, K = O.fromHandle, te = { position: { ...R.position } };
    if (K.id === "loop_handle" ? te.parentId = W.id : W.parentId && (te.parentId = W.parentId), te.parentId) {
      const U = p(te.parentId);
      te.position = {
        x: R.position.x - U.position.x,
        y: R.position.y - U.position.y
      }, x(te.parentId, R.id), l.updateNode(R.id, te);
    }
  }, { getEdgesByTarget: h } = Ow(), C = (M) => {
    M.edges.forEach((O) => {
      const R = p(O.target);
      if (R && R.parentId) {
        const W = h(O.target), K = p(R.parentId);
        if (W.length === 0)
          l.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + K.position.x,
              y: R.position.y + K.position.y
            }
          });
        else {
          let te = !1;
          for (let U = 0; U < W.length; U++) {
            const j = W[U], oe = p(j.source);
            if (oe.parentId || oe.type === "loopNode") {
              te = !0;
              break;
            }
          }
          te || l.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + K.position.x,
              y: R.position.y + K.position.y
            }
          });
        }
      }
    });
  }, w = (M, O) => {
  }, k = (M) => {
  }, P = {}, E = pr().customNodes;
  if (E)
    for (let M of Object.keys(E))
      P[M] = pf;
  const { nodes: N, edges: H, viewport: z } = Qe(), I = pr().onDataChange;
  I && (N.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), H.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), z.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = qw(), Y = X(L);
  const S = /* @__PURE__ */ Oe(() => ({ ...Pw, ...P })), T = /* @__PURE__ */ Oe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  _d(Y, bt(
    {
      get nodeTypes() {
        return g(S);
      }
    },
    ki,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: _,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (M) => {
        const O = M.target;
        O.classList.contains("svelte-flow__edge-interaction") || O.classList.contains("panel-content") || O.closest(".panel-content") || (G(u, !1), G(c, null));
      },
      get defaultEdgeOptions() {
        return g(T);
      },
      $$events: {
        drop: v,
        dragover: f,
        edgeclick: (M) => {
          G(u, !0), G(c, M.detail.edge, !0);
        }
      },
      children: (M, O) => {
        var R = Ww(), W = _e(R);
        Nd(W, {});
        var K = B(W, 2);
        Vd(K, {});
        var te = B(K, 2);
        Od(te, {});
        var U = B(te, 2);
        {
          var j = (oe) => {
            ti(oe, {
              children: (ve, we) => {
                var le = Bw(), Ee = B(X(le), 4), se = X(Ee);
                const ue = /* @__PURE__ */ Oe(() => {
                  var Ne, Pe;
                  return (Pe = (Ne = g(c)) == null ? void 0 : Ne.data) == null ? void 0 : Pe.condition;
                });
                Ut(se, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(ue);
                  },
                  onchange: (Ne) => {
                    g(c) && d(g(c).id, { condition: Ne.target.value });
                  }
                }), q(Ee), q(le), A(ve, le);
              },
              $$slots: { default: !0 }
            });
          };
          Ce(U, (oe) => {
            g(u) && oe(j);
          });
        }
        A(M, R);
      },
      $$slots: { default: !0 }
    }
  ));
  var $ = B(Y, 2);
  hf($, {}), q(L), A(e, L);
  var V = he({
    get onInit() {
      return s();
    },
    set onInit(M) {
      s(M), m();
    }
  });
  return r(), V;
}
de(mf, { onInit: {} }, [], [], !0);
function Xw(e, t) {
  ge(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ki.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Gr("tinyflow_options", n()), Cd(e, {
    fitView: !0,
    children: (i, a) => {
      mf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), he({
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
customElements.define("tinyflow-component", de(Xw, { options: {}, onInit: {} }, [], [], !1));
const Gw = bf((e, t) => {
  const n = Gs(null), r = Gs(null);
  xf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return $f(() => {
    if (n.current) {
      const s = new Bm({
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
  Gw as Tinyflow
};
//# sourceMappingURL=index.js.map
