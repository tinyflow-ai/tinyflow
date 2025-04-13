import vu, { forwardRef as xf, useRef as Js, useImperativeHandle as $f, useEffect as Cf } from "react";
var ui = { exports: {} }, ho = {};
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
function kf() {
  if (Qs) return ho;
  Qs = 1;
  var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var el;
function _f() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, b = "@@iterator";
    function $(z) {
      if (z === null || typeof z != "object")
        return null;
      var J = w && z[w] || z[b];
      return typeof J == "function" ? J : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(z) {
      {
        for (var J = arguments.length, pe = new Array(J > 1 ? J - 1 : 0), Ee = 1; Ee < J; Ee++)
          pe[Ee - 1] = arguments[Ee];
        k("error", z, pe);
      }
    }
    function k(z, J, pe) {
      {
        var Ee = C.ReactDebugCurrentFrame, R = Ee.getStackAddendum();
        R !== "" && (J += "%s", pe = pe.concat([R]));
        var it = pe.map(function(je) {
          return String(je);
        });
        it.unshift("Warning: " + J), Function.prototype.apply.call(console[z], console, it);
      }
    }
    var p = !1, _ = !1, T = !1, E = !1, H = !1, N;
    N = Symbol.for("react.module.reference");
    function L(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || H || z === o || z === u || z === c || E || z === v || p || _ || T || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === d || z.$$typeof === a || z.$$typeof === s || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === N || z.getModuleId !== void 0));
    }
    function I(z, J, pe) {
      var Ee = z.displayName;
      if (Ee)
        return Ee;
      var R = J.displayName || J.name || "";
      return R !== "" ? pe + "(" + R + ")" : pe;
    }
    function O(z) {
      return z.displayName || "Context";
    }
    function Y(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
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
        case c:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case s:
            var J = z;
            return O(J) + ".Consumer";
          case a:
            var pe = z;
            return O(pe._context) + ".Provider";
          case l:
            return I(z, z.render, "ForwardRef");
          case d:
            var Ee = z.displayName || null;
            return Ee !== null ? Ee : Y(z.type) || "Memo";
          case f: {
            var R = z, it = R._payload, je = R._init;
            try {
              return Y(je(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, V = 0, x, P, M, D, Z, W, F;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function G() {
      {
        if (V === 0) {
          x = console.log, P = console.info, M = console.warn, D = console.error, Z = console.group, W = console.groupCollapsed, F = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        V++;
      }
    }
    function X() {
      {
        if (V--, V === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, z, {
              value: x
            }),
            info: S({}, z, {
              value: P
            }),
            warn: S({}, z, {
              value: M
            }),
            error: S({}, z, {
              value: D
            }),
            group: S({}, z, {
              value: Z
            }),
            groupCollapsed: S({}, z, {
              value: W
            }),
            groupEnd: S({}, z, {
              value: F
            })
          });
        }
        V < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = C.ReactCurrentDispatcher, ve;
    function me(z, J, pe) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (R) {
            var Ee = R.stack.trim().match(/\n( *(at )?)/);
            ve = Ee && Ee[1] || "";
          }
        return `
` + ve + z;
      }
    }
    var ce = !1, Ve;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new ue();
    }
    function re(z, J) {
      if (!z || ce)
        return "";
      {
        var pe = Ve.get(z);
        if (pe !== void 0)
          return pe;
      }
      var Ee;
      ce = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = ae.current, ae.current = null, G();
      try {
        if (J) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (kt) {
              Ee = kt;
            }
            Reflect.construct(z, [], je);
          } else {
            try {
              je.call();
            } catch (kt) {
              Ee = kt;
            }
            z.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Ee = kt;
          }
          z();
        }
      } catch (kt) {
        if (kt && Ee && typeof kt.stack == "string") {
          for (var De = kt.stack.split(`
`), Pt = Ee.stack.split(`
`), gt = De.length - 1, pt = Pt.length - 1; gt >= 1 && pt >= 0 && De[gt] !== Pt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (De[gt] !== Pt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || De[gt] !== Pt[pt]) {
                    var Bt = `
` + De[gt].replace(" at new ", " at ");
                    return z.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", z.displayName)), typeof z == "function" && Ve.set(z, Bt), Bt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = it, X(), Error.prepareStackTrace = R;
      }
      var nr = z ? z.displayName || z.name : "", rr = nr ? me(nr) : "";
      return typeof z == "function" && Ve.set(z, rr), rr;
    }
    function Le(z, J, pe) {
      return re(z, !1);
    }
    function He(z) {
      var J = z.prototype;
      return !!(J && J.isReactComponent);
    }
    function Ze(z, J, pe) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return re(z, He(z));
      if (typeof z == "string")
        return me(z);
      switch (z) {
        case u:
          return me("Suspense");
        case c:
          return me("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return Le(z.render);
          case d:
            return Ze(z.type, J, pe);
          case f: {
            var Ee = z, R = Ee._payload, it = Ee._init;
            try {
              return Ze(it(R), J, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ge = {}, Je = C.ReactDebugCurrentFrame;
    function se(z) {
      if (z) {
        var J = z._owner, pe = Ze(z.type, z._source, J ? J.type : null);
        Je.setExtraStackFrame(pe);
      } else
        Je.setExtraStackFrame(null);
    }
    function fe(z, J, pe, Ee, R) {
      {
        var it = Function.call.bind(te);
        for (var je in z)
          if (it(z, je)) {
            var De = void 0;
            try {
              if (typeof z[je] != "function") {
                var Pt = Error((Ee || "React class") + ": " + pe + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              De = z[je](J, je, Ee, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              De = gt;
            }
            De && !(De instanceof Error) && (se(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", pe, je, typeof De), se(null)), De instanceof Error && !(De.message in Ge) && (Ge[De.message] = !0, se(R), h("Failed %s type: %s", pe, De.message), se(null));
          }
      }
    }
    var Se = Array.isArray;
    function Fe(z) {
      return Se(z);
    }
    function Ae(z) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, pe = J && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return pe;
      }
    }
    function vt(z) {
      try {
        return lt(z), !1;
      } catch {
        return !0;
      }
    }
    function lt(z) {
      return "" + z;
    }
    function ne(z) {
      if (vt(z))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(z)), lt(z);
    }
    var Ie = C.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, Yt;
    function un(z) {
      if (te.call(z, "ref")) {
        var J = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Ne(z) {
      if (te.call(z, "key")) {
        var J = Object.getOwnPropertyDescriptor(z, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function ut(z, J) {
      typeof z.ref == "string" && Ie.current;
    }
    function Ye(z, J) {
      {
        var pe = function() {
          Zt || (Zt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Re(z, J) {
      {
        var pe = function() {
          Yt || (Yt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var ct = function(z, J, pe, Ee, R, it, je) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: J,
        ref: pe,
        props: je,
        // Record the component responsible for creating this element.
        _owner: it
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
        value: Ee
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Jt(z, J, pe, Ee, R) {
      {
        var it, je = {}, De = null, Pt = null;
        pe !== void 0 && (ne(pe), De = "" + pe), Ne(J) && (ne(J.key), De = "" + J.key), un(J) && (Pt = J.ref, ut(J, R));
        for (it in J)
          te.call(J, it) && !we.hasOwnProperty(it) && (je[it] = J[it]);
        if (z && z.defaultProps) {
          var gt = z.defaultProps;
          for (it in gt)
            je[it] === void 0 && (je[it] = gt[it]);
        }
        if (De || Pt) {
          var pt = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          De && Ye(je, pt), Pt && Re(je, pt);
        }
        return ct(z, De, Pt, R, Ee, Ie.current, je);
      }
    }
    var Et = C.ReactCurrentOwner, er = C.ReactDebugCurrentFrame;
    function mt(z) {
      if (z) {
        var J = z._owner, pe = Ze(z.type, z._source, J ? J.type : null);
        er.setExtraStackFrame(pe);
      } else
        er.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Pn(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function ot() {
      {
        if (Et.current) {
          var z = Y(Et.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function vo(z) {
      return "";
    }
    var tr = {};
    function Ht(z) {
      {
        var J = ot();
        if (!J) {
          var pe = typeof z == "string" ? z : z.displayName || z.name;
          pe && (J = `

Check the top-level render call using <` + pe + ">.");
        }
        return J;
      }
    }
    function wr(z, J) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var pe = Ht(J);
        if (tr[pe])
          return;
        tr[pe] = !0;
        var Ee = "";
        z && z._owner && z._owner !== Et.current && (Ee = " It was passed a child from " + Y(z._owner.type) + "."), mt(z), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Ee), mt(null);
      }
    }
    function br(z, J) {
      {
        if (typeof z != "object")
          return;
        if (Fe(z))
          for (var pe = 0; pe < z.length; pe++) {
            var Ee = z[pe];
            Pn(Ee) && wr(Ee, J);
          }
        else if (Pn(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var R = $(z);
          if (typeof R == "function" && R !== z.entries)
            for (var it = R.call(z), je; !(je = it.next()).done; )
              Pn(je.value) && wr(je.value, J);
        }
      }
    }
    function Dr(z) {
      {
        var J = z.type;
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
          var Ee = Y(J);
          fe(pe, z.props, "prop", Ee, z);
        } else if (J.PropTypes !== void 0 && !$t) {
          $t = !0;
          var R = Y(J);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function go(z) {
      {
        for (var J = Object.keys(z.props), pe = 0; pe < J.length; pe++) {
          var Ee = J[pe];
          if (Ee !== "children" && Ee !== "key") {
            mt(z), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), mt(null);
            break;
          }
        }
        z.ref !== null && (mt(z), h("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ii = {};
    function ai(z, J, pe, Ee, R, it) {
      {
        var je = L(z);
        if (!je) {
          var De = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = vo();
          Pt ? De += Pt : De += ot();
          var gt;
          z === null ? gt = "null" : Fe(z) ? gt = "array" : z !== void 0 && z.$$typeof === t ? (gt = "<" + (Y(z.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof z, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, De);
        }
        var pt = Jt(z, J, pe, R, it);
        if (pt == null)
          return pt;
        if (je) {
          var Bt = J.children;
          if (Bt !== void 0)
            if (Ee)
              if (Fe(Bt)) {
                for (var nr = 0; nr < Bt.length; nr++)
                  br(Bt[nr], z);
                Object.freeze && Object.freeze(Bt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Bt, z);
        }
        if (te.call(J, "key")) {
          var rr = Y(z), kt = Object.keys(J).filter(function(li) {
            return li !== "key";
          }), Lr = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ii[rr + Lr]) {
            var si = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lr, rr, si, rr), ii[rr + Lr] = !0;
          }
        }
        return z === r ? go(pt) : Dr(pt), pt;
      }
    }
    function xa(z, J, pe) {
      return ai(z, J, pe, !0);
    }
    function $a(z, J, pe) {
      return ai(z, J, pe, !1);
    }
    var Ca = $a, ka = xa;
    po.Fragment = r, po.jsx = Ca, po.jsxs = ka;
  }()), po;
}
var tl;
function Sf() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? ui.exports = kf() : ui.exports = _f()), ui.exports;
}
var Ef = Sf(), Pf = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Tf = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n), ds = (e, t, n) => t.has(e) || gu("Cannot " + n), yt = (e, t, n) => (ds(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _i = (e, t, n, r) => (ds(e, t, "write to private field"), t.set(e, n), n), Mf = (e, t, n) => (ds(e, t, "access private method"), n);
const Vf = "5";
var nl;
typeof window < "u" && ((nl = window.__svelte ?? (window.__svelte = {})).v ?? (nl.v = /* @__PURE__ */ new Set())).add(Vf);
let so = !1, Nf = !1;
function Hf() {
  so = !0;
}
Hf();
const fs = 1, vs = 2, hu = 4, zf = 8, Of = 16, Df = 1, Lf = 2, pu = 4, Af = 8, If = 16, mu = 1, Rf = 2, gs = "[", hs = "[!", ps = "]", Yr = {}, Wt = Symbol(), Zf = "http://www.w3.org/1999/xhtml", Yf = "http://www.w3.org/2000/svg", Bf = !1;
function Ji(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Ko = Array.isArray, Wf = Array.prototype.indexOf, ms = Array.from, Si = Object.keys, Po = Object.defineProperty, Wn = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Kf = Object.prototype, jf = Array.prototype, ys = Object.getPrototypeOf, rl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const Ct = () => {
};
function Xf(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bn = 2, wu = 4, Qi = 8, ws = 16, Un = 32, Nr = 64, Ei = 128, rn = 256, Pi = 512, It = 1024, Nn = 2048, mr = 4096, Kn = 8192, ea = 16384, Ff = 32768, lo = 65536, qf = 1 << 17, Gf = 1 << 19, bu = 1 << 20, Ia = 1 << 21, ur = Symbol("$state"), bs = Symbol("legacy props"), Uf = Symbol("");
function Jf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ev(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function tv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function nv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function rv(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ov() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function iv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function av() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ta(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Me = !1;
function tn(e) {
  Me = e;
}
let Ke;
function At(e) {
  if (e === null)
    throw ta(), Yr;
  return Ke = e;
}
function Hn() {
  return At(
    /** @type {TemplateNode} */
    /* @__PURE__ */ An(Ke)
  );
}
function K(e) {
  if (Me) {
    if (/* @__PURE__ */ An(Ke) !== null)
      throw ta(), Yr;
    Ke = e;
  }
}
function Oe(e = 1) {
  if (Me) {
    for (var t = e, n = Ke; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ An(n);
    Ke = n;
  }
}
function Ra() {
  for (var e = 0, t = Ke; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ps) {
        if (e === 0) return t;
        e -= 1;
      } else (n === gs || n === hs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ An(t)
    );
    t.remove(), t = r;
  }
}
function fn(e) {
  if (typeof e != "object" || e === null || ur in e)
    return e;
  const t = ys(e);
  if (t !== Kf && t !== jf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ko(e), o = /* @__PURE__ */ Ot(0), i = et, a = (s) => {
    var l = et;
    zn(i);
    var u = s();
    return zn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Ot(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ov();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Ot(u.value)), n.set(l, c)) : U(
          c,
          a(() => fn(u.value))
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
            Number.isInteger(d) && d < c.v && U(c, d);
          }
          U(u, Wt), ol(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === ur)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Wn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ Ot(fn(f ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
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
        if (l === ur)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Wt || Reflect.has(s, l);
        if (c !== void 0 || tt !== null && (!d || (u = Wn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ Ot(d ? fn(s[l]) : Wt)), n.set(l, c));
          var f = g(c);
          if (f === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var w = u; w < /** @type {Source<number>} */
          f.v; w += 1) {
            var b = n.get(w + "");
            b !== void 0 ? U(b, Wt) : w in s && (b = a(() => /* @__PURE__ */ Ot(Wt)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Wn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ Ot(void 0)), U(
          f,
          a(() => fn(u))
        ), n.set(l, f)) : (v = f.v !== Wt, U(
          f,
          a(() => fn(u))
        ));
        var $ = Reflect.getOwnPropertyDescriptor(s, l);
        if ($ != null && $.set && $.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= C.v && U(C, h + 1);
          }
          ol(o);
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
        iv();
      }
    }
  );
}
function ol(e, t = 1) {
  U(e, e.v + t);
}
var Kt, xu, $u, Cu;
function Za() {
  if (Kt === void 0) {
    Kt = window, xu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $u = Wn(t, "firstChild").get, Cu = Wn(t, "nextSibling").get, rl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rl(n) && (n.__t = void 0);
  }
}
function Xn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return $u.call(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return Cu.call(e);
}
function j(e, t) {
  if (!Me)
    return /* @__PURE__ */ Lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Lt(Ke)
  );
  if (n === null)
    n = Ke.appendChild(Xn());
  else if (t && n.nodeType !== 3) {
    var r = Xn();
    return n == null || n.before(r), At(r), r;
  }
  return At(n), n;
}
function Ce(e, t) {
  if (!Me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ An(n) : n;
  }
  return Ke;
}
function B(e, t = 1, n = !1) {
  let r = Me ? Ke : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ An(r);
  if (!Me)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Xn();
    return r === null ? o == null || o.after(a) : r.before(a), At(a), a;
  }
  return At(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function ku(e) {
  return e === this.v;
}
function $s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Cs(e) {
  return !$s(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  var t = bn | Nn, n = et !== null && et.f & bn ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt === null || n !== null && n.f & rn ? t |= rn : tt.f |= bu, {
    ctx: Qe,
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
    parent: n ?? tt
  };
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Fr(e);
  return Du(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Fr(e);
  return t.equals = Cs, t;
}
function _u(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      hn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function sv(e) {
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
function Su(e) {
  var t, n = tt;
  gr(sv(e));
  try {
    _u(e), t = Ru(e);
  } finally {
    gr(n);
  }
  return t;
}
function Eu(e) {
  var t = Su(e), n = (sr || e.f & rn) && e.deps !== null ? mr : It;
  pn(e, n), e.equals(t) || (e.v = t, e.wv = Au());
}
function Pu(e) {
  tt === null && et === null && ev(), et !== null && et.f & rn && tt === null && Qf(), Xo && Jf();
}
function lv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Hr(e, t, n, r = !0) {
  var o = tt, i = {
    ctx: Qe,
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
      ra(i), i.f |= Ff;
    } catch (l) {
      throw hn(i), l;
    }
  else t !== null && oa(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bu | Ei)) === 0;
  if (!a && r && (o !== null && lv(i, o), et !== null && et.f & bn)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function ks(e) {
  const t = Hr(Qi, null, !1);
  return pn(t, It), t.teardown = e, t;
}
function vr(e) {
  Pu();
  var t = tt !== null && (tt.f & Un) !== 0 && Qe !== null && !Qe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Qe
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
function uv(e) {
  return Pu(), uo(e);
}
function cv(e) {
  const t = Hr(Nr, e, !0);
  return () => {
    hn(t);
  };
}
function dv(e) {
  const t = Hr(Nr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? qr(t, () => {
      hn(t), r(void 0);
    }) : (hn(t), r(void 0));
  });
}
function en(e) {
  return Hr(wu, e, !1);
}
function ye(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = uo(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), On(t));
  });
}
function _t() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Qe
  );
  uo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & It && pn(n, mr), co(n) && ra(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function uo(e) {
  return Hr(Qi, e, !0);
}
function Te(e, t = [], n = Fr) {
  const r = t.map(n);
  return zr(() => e(...r.map(g)));
}
function zr(e, t = 0) {
  return Hr(Qi | ws | t, e, !0);
}
function Fn(e, t = !0) {
  return Hr(Qi | Un, e, !0, t);
}
function Tu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xo, r = et;
    al(!0), zn(null);
    try {
      t.call(null);
    } finally {
      al(n), zn(r);
    }
  }
}
function Mu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & Nr ? n.parent = null : hn(n, t), n = r;
  }
}
function fv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Un || hn(t), t = n;
  }
}
function hn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Gf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Mu(e, t && !n), Ni(e, 0), pn(e, ea);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Tu(e);
  var s = e.parent;
  s !== null && s.first !== null && Vu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Vu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qr(e, t) {
  var n = [];
  _s(e, n, !0), Nu(n, () => {
    hn(e), t && t();
  });
}
function Nu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function _s(e, t, n) {
  if (!(e.f & Kn)) {
    if (e.f ^= Kn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & lo) !== 0 || (r.f & Un) !== 0;
      _s(r, t, i ? n : !1), r = o;
    }
  }
}
function Mo(e) {
  Hu(e, !0);
}
function Hu(e, t) {
  if (e.f & Kn) {
    e.f ^= Kn, e.f & It || (e.f ^= It), co(e) && (pn(e, Nn), oa(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & lo) !== 0 || (n.f & Un) !== 0;
      Hu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const vv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Vo = [], No = [];
function zu() {
  var e = Vo;
  Vo = [], To(e);
}
function Ou() {
  var e = No;
  No = [], To(e);
}
function jo(e) {
  Vo.length === 0 && queueMicrotask(zu), Vo.push(e);
}
function gv(e) {
  No.length === 0 && vv(Ou), No.push(e);
}
function il() {
  Vo.length > 0 && zu(), No.length > 0 && Ou();
}
let mi = !1, Ti = !1, Mi = null, kr = !1, Xo = !1;
function al(e) {
  Xo = e;
}
let _o = [], et = null, Tn = !1;
function zn(e) {
  et = e;
}
let tt = null;
function gr(e) {
  tt = e;
}
let gn = null;
function hv(e) {
  gn = e;
}
function Du(e) {
  et !== null && et.f & Ia && (gn === null ? hv([e]) : gn.push(e));
}
let zt = null, Qt = 0, dn = null;
function pv(e) {
  dn = e;
}
let Lu = 1, Vi = 0, sr = !1;
function Au() {
  return ++Lu;
}
function co(e) {
  var t, n = e.f;
  if (n & Nn)
    return !0;
  if (n & mr) {
    var r = e.deps, o = (n & rn) !== 0;
    if (r !== null) {
      var i, a, s = (n & Pi) !== 0, l = o && tt !== null && !sr, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Pi), l && d !== null && !(d.f & rn) && (c.f ^= rn);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], co(
          /** @type {Derived} */
          a
        ) && Eu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || tt !== null && !sr) && pn(e, It);
  }
  return !1;
}
function mv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Ei)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Ei;
      }
    n = n.parent;
  }
  throw mi = !1, e;
}
function yv(e) {
  return (e.f & ea) === 0 && (e.parent === null || (e.parent.f & Ei) === 0);
}
function na(e, t, n, r) {
  if (mi) {
    if (n === null && (mi = !1), yv(t))
      throw e;
    return;
  }
  n !== null && (mi = !0);
  {
    mv(e, t);
    return;
  }
}
function Iu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      gn != null && gn.includes(e) || (i.f & bn ? Iu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Nn) : i.f & It && pn(i, mr), oa(
        /** @type {Effect} */
        i
      )));
    }
}
function Ru(e) {
  var t, n = zt, r = Qt, o = dn, i = et, a = sr, s = gn, l = Qe, u = Tn, c = e.f;
  zt = /** @type {null | Value[]} */
  null, Qt = 0, dn = null, sr = (c & rn) !== 0 && (Tn || !kr || et === null), et = c & (Un | Nr) ? null : e, gn = null, ll(e.ctx), Tn = !1, Vi++, e.f |= Ia;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (zt !== null) {
      var v;
      if (Ni(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + zt.length, v = 0; v < zt.length; v++)
          f[Qt + v] = zt[v];
      else
        e.deps = f = zt;
      if (!sr)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Ni(e, Qt), f.length = Qt);
    if (ia() && dn !== null && !Tn && f !== null && !(e.f & (bn | mr | Nn)))
      for (v = 0; v < /** @type {Source[]} */
      dn.length; v++)
        Iu(
          dn[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (Vi++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    zt = n, Qt = r, dn = o, et = i, sr = a, gn = s, ll(l), Tn = u, e.f ^= Ia;
  }
}
function wv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Wf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & bn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !zt.includes(t)) && (pn(t, mr), t.f & (rn | Pi) || (t.f ^= Pi), _u(
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
      wv(e, n[r]);
}
function ra(e) {
  var t = e.f;
  if (!(t & ea)) {
    pn(e, It);
    var n = tt, r = Qe, o = kr;
    tt = e, kr = !0;
    try {
      t & ws ? fv(e) : Mu(e), Tu(e);
      var i = Ru(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Lu;
      var a = e.deps, s;
      Bf && Nf && e.f & Nn;
    } catch (l) {
      na(l, e, n, r || e.ctx);
    } finally {
      kr = o, tt = n;
    }
  }
}
function bv() {
  try {
    tv();
  } catch (e) {
    if (Mi !== null)
      na(e, Mi, null);
    else
      throw e;
  }
}
function Zu() {
  var e = kr;
  try {
    var t = 0;
    for (kr = !0; _o.length > 0; ) {
      t++ > 1e3 && bv();
      var n = _o, r = n.length;
      _o = [];
      for (var o = 0; o < r; o++) {
        var i = $v(n[o]);
        xv(i);
      }
      Ho.clear();
    }
  } finally {
    Ti = !1, kr = e, Mi = null;
  }
}
function xv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (ea | Kn)))
        try {
          co(r) && (ra(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Vu(r) : r.fn = null));
        } catch (o) {
          na(o, r, null, r.ctx);
        }
    }
}
function oa(e) {
  Ti || (Ti = !0, queueMicrotask(Zu));
  for (var t = Mi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Nr | Un)) {
      if (!(n & It)) return;
      t.f ^= It;
    }
  }
  _o.push(t);
}
function $v(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Un | Nr)) !== 0, i = o && (r & It) !== 0;
    if (!i && !(r & Kn)) {
      if (r & wu)
        t.push(n);
      else if (o)
        n.f ^= It;
      else {
        var a = et;
        try {
          et = n, co(n) && ra(n);
        } catch (u) {
          na(u, n, null, n.ctx);
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
  for (il(); _o.length > 0; )
    Ti = !0, Zu(), il();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & bn) !== 0;
  if (et !== null && !Tn) {
    if (!(gn != null && gn.includes(e))) {
      var r = et.deps;
      e.rv < Vi && (e.rv = Vi, zt === null && r !== null && r[Qt] === e ? Qt++ : zt === null ? zt = [e] : (!sr || !zt.includes(e)) && zt.push(e));
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
  e, co(o) && Eu(o)), Xo && Ho.has(e) ? Ho.get(e) : e.v;
}
function On(e) {
  var t = Tn;
  try {
    return Tn = !0, e();
  } finally {
    Tn = t;
  }
}
const Cv = -7169;
function pn(e, t) {
  e.f = e.f & Cv | t;
}
function Q(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ur in e)
      Ya(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ur in n && Ya(n);
      }
  }
}
function Ya(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ya(e[r], t);
      } catch {
      }
    const n = ys(e);
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
const Ho = /* @__PURE__ */ new Map();
function Gr(e, t) {
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
function Ot(e, t) {
  const n = Gr(e);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Gr(e);
  return t || (r.equals = Cs), so && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function U(e, t, n = !1) {
  et !== null && !Tn && ia() && et.f & (bn | ws) && !(gn != null && gn.includes(e)) && av();
  let r = n ? fn(t) : t;
  return Ba(e, r);
}
function Ba(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Xo ? Ho.set(e, t) : Ho.set(e, n), e.v = t, e.f & bn && (e.f & Nn && Su(
      /** @type {Derived} */
      e
    ), pn(e, e.f & rn ? mr : It)), e.wv = Au(), Yu(e, Nn), ia() && tt !== null && tt.f & It && !(tt.f & (Un | Nr)) && (dn === null ? pv([e]) : dn.push(e));
  }
  return t;
}
function sl(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Yu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ia(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Nn || !r && a === tt || (pn(a, t), s & (It | rn) && (s & bn ? Yu(
        /** @type {Derived} */
        a,
        mr
      ) : oa(
        /** @type {Effect} */
        a
      )));
    }
}
let Qe = null;
function ll(e) {
  Qe = e;
}
function Sr(e) {
  return (
    /** @type {T} */
    Ss().get(e)
  );
}
function Ur(e, t) {
  return Ss().set(e, t), t;
}
function kv(e) {
  return Ss().has(e);
}
function ge(e, t = !1, n) {
  var r = Qe = {
    p: Qe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  so && !t && (Qe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Gr(!1)
  }), ks(() => {
    r.d = !0;
  });
}
function he(e) {
  const t = Qe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = tt, r = et;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          gr(i.effect), zn(i.reaction), en(i.fn);
        }
      } finally {
        gr(n), zn(r);
      }
    }
    Qe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ia() {
  return !so || Qe !== null && Qe.l === null;
}
function Ss(e) {
  return Qe === null && Ji(), Qe.c ?? (Qe.c = new Map(_v(Qe) || void 0));
}
function _v(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Sv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ev = [
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
function Pv(e) {
  return Ev.includes(e);
}
const Tv = {
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
  return e = e.toLowerCase(), Tv[e] ?? e;
}
const Vv = ["touchstart", "touchmove"];
function Nv(e) {
  return Vv.includes(e);
}
const Hv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function zv(e) {
  return Hv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ov(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Dv(e) {
  Me && /* @__PURE__ */ Lt(e) !== null && xs(e);
}
let ul = !1;
function Lv() {
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
function Av(e) {
  var t = et, n = tt;
  zn(null), gr(null);
  try {
    return e();
  } finally {
    zn(t), gr(n);
  }
}
const Bu = /* @__PURE__ */ new Set(), Wa = /* @__PURE__ */ new Set();
function Wu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || xo.call(t, i), !i.cancelBubble)
      return Av(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Wu(e, t, n, i);
  (t === document.body || t === window || t === document) && ks(() => {
    t.removeEventListener(e, a, i);
  });
}
function aa(e) {
  for (var t = 0; t < e.length; t++)
    Bu.add(e[t]);
  for (var n of Wa)
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
    zn(null), gr(null);
    try {
      for (var v, w = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var $ = a["__" + o];
          if ($ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Ko($)) {
              var [C, ...h] = $;
              C.apply(a, [e, ...h]);
            } else
              $.call(a, e);
        } catch (k) {
          v ? w.push(k) : v = k;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let k of w)
          queueMicrotask(() => {
            throw k;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, zn(d), gr(f);
    }
  }
}
function Es(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ft(e, t) {
  var n = (
    /** @type {Effect} */
    tt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & mu) !== 0, r = (t & Rf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Me)
      return Ft(Ke, null), Ke;
    o === void 0 && (o = Es(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Lt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || xu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ft(s, l);
    } else
      Ft(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & mu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Me)
      return Ft(Ke, null), Ke;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Es(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Lt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Lt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Lt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Lt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ft(c, d);
    } else
      Ft(u, u);
    return u;
  };
}
function qe(e = "") {
  if (!Me) {
    var t = Xn(e + "");
    return Ft(t, t), t;
  }
  var n = Ke;
  return n.nodeType !== 3 && (n.before(n = Xn()), At(n)), Ft(n, n), n;
}
function dt() {
  if (Me)
    return Ft(Ke, null), Ke;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xn();
  return e.append(t, n), Ft(t, n), e;
}
function A(e, t) {
  if (Me) {
    tt.nodes_end = Ke, Hn();
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
function Ku(e, t) {
  return ju(e, t);
}
function Iv(e, t) {
  Za(), t.intro = t.intro ?? !1;
  const n = t.target, r = Me, o = Ke;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Lt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== gs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ An(i);
    if (!i)
      throw Yr;
    tn(!0), At(
      /** @type {Comment} */
      i
    ), Hn();
    const a = ju(e, { ...t, anchor: i });
    if (Ke === null || Ke.nodeType !== 8 || /** @type {Comment} */
    Ke.data !== ps)
      throw ta(), Yr;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Yr)
      return t.recover === !1 && nv(), Za(), xs(n), tn(!1), Ku(e, t);
    throw a;
  } finally {
    tn(r), At(o);
  }
}
const Ar = /* @__PURE__ */ new Map();
function ju(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Za();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var w = Nv(v);
        t.addEventListener(v, xo, { passive: w });
        var b = Ar.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: w }), Ar.set(v, 1)) : Ar.set(v, b + 1);
      }
    }
  };
  l(ms(Bu)), Wa.add(l);
  var u = void 0, c = dv(() => {
    var d = n ?? t.appendChild(Xn());
    return Fn(() => {
      if (i) {
        ge({});
        var f = (
          /** @type {ComponentContext} */
          Qe
        );
        f.c = i;
      }
      o && (r.$$events = o), Me && Ft(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Me && (tt.nodes_end = Ke), i && he();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var w = (
          /** @type {number} */
          Ar.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, xo), Ar.delete(v)) : Ar.set(v, w);
      }
      Wa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Ka.set(u, c), u;
}
let Ka = /* @__PURE__ */ new WeakMap();
function Rv(e, t) {
  const n = Ka.get(e);
  return n ? (Ka.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, [n, r] = [0, 0]) {
  Me && n === 0 && Hn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Me && r !== -1) {
      if (n === 0) {
        const $ = (
          /** @type {Comment} */
          o.data
        );
        $ === gs ? r = 0 : $ === hs ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ra(), At(o), tn(!1), w = !0, r = -1);
    }
    s ? (i ? Mo(i) : v && (i = Fn(() => v(o))), a && qr(a, () => {
      a = null;
    })) : (a ? Mo(a) : v && (a = Fn(() => v(o, [n + 1, r]))), i && qr(i, () => {
      i = null;
    })), w && tn(!0);
  };
  zr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Me && (o = Ke);
}
function zo(e, t) {
  return t;
}
function Zv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    _s(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    xs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), ir(e, t[0].prev, t[i - 1].next);
  }
  Nu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), ir(e, c.prev, c.next)), hn(c.e, !s);
    }
  });
}
function qt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Me ? At(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Lt(u)
    ) : u.appendChild(Xn());
  }
  Me && Hn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Ko(v) ? v : v == null ? [] : ms(v);
  });
  zr(() => {
    var v = g(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Me) {
      var $ = (
        /** @type {Comment} */
        a.data === hs
      );
      $ !== (w === 0) && (a = Ra(), At(a), tn(!1), b = !0);
    }
    if (Me) {
      for (var C = null, h, k = 0; k < w; k++) {
        if (Ke.nodeType === 8 && /** @type {Comment} */
        Ke.data === ps) {
          a = /** @type {Comment} */
          Ke, b = !0, tn(!1);
          break;
        }
        var p = v[k], _ = r(p, k);
        h = Xu(
          Ke,
          s,
          C,
          null,
          p,
          _,
          k,
          o,
          t,
          n
        ), s.items.set(_, h), C = h;
      }
      w > 0 && At(Ra());
    }
    Me || Yv(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? Mo(c) : c = Fn(() => i(a)) : c !== null && qr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), Me && (a = Ke);
}
function Yv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & zf) !== 0, f = (o & (fs | vs)) !== 0, v = e.length, w = t.items, b = t.first, $ = b, C, h = null, k, p = [], _ = [], T, E, H, N;
  if (d)
    for (N = 0; N < v; N += 1)
      T = e[N], E = i(T, N), H = w.get(E), H !== void 0 && ((s = H.a) == null || s.measure(), (k ?? (k = /* @__PURE__ */ new Set())).add(H));
  for (N = 0; N < v; N += 1) {
    if (T = e[N], E = i(T, N), H = w.get(E), H === void 0) {
      var L = $ ? (
        /** @type {TemplateNode} */
        $.e.nodes_start
      ) : n;
      h = Xu(
        L,
        t,
        h,
        h === null ? t.first : h.next,
        T,
        E,
        N,
        r,
        o,
        a
      ), w.set(E, h), p = [], _ = [], $ = h.next;
      continue;
    }
    if (f && Bv(H, T, N, o), H.e.f & Kn && (Mo(H.e), d && ((l = H.a) == null || l.unfix(), (k ?? (k = /* @__PURE__ */ new Set())).delete(H))), H !== $) {
      if (C !== void 0 && C.has(H)) {
        if (p.length < _.length) {
          var I = _[0], O;
          h = I.prev;
          var Y = p[0], S = p[p.length - 1];
          for (O = 0; O < p.length; O += 1)
            cl(p[O], I, n);
          for (O = 0; O < _.length; O += 1)
            C.delete(_[O]);
          ir(t, Y.prev, S.next), ir(t, h, Y), ir(t, S, I), $ = I, h = S, N -= 1, p = [], _ = [];
        } else
          C.delete(H), cl(H, $, n), ir(t, H.prev, H.next), ir(t, H, h === null ? t.first : h.next), ir(t, h, H), h = H;
        continue;
      }
      for (p = [], _ = []; $ !== null && $.k !== E; )
        $.e.f & Kn || (C ?? (C = /* @__PURE__ */ new Set())).add($), _.push($), $ = $.next;
      if ($ === null)
        continue;
      H = $;
    }
    p.push(H), h = H, $ = H.next;
  }
  if ($ !== null || C !== void 0) {
    for (var V = C === void 0 ? [] : ms(C); $ !== null; )
      $.e.f & Kn || V.push($), $ = $.next;
    var x = V.length;
    if (x > 0) {
      var P = o & hu && v === 0 ? n : null;
      if (d) {
        for (N = 0; N < x; N += 1)
          (u = V[N].a) == null || u.measure();
        for (N = 0; N < x; N += 1)
          (c = V[N].a) == null || c.fix();
      }
      Zv(t, V, P, w);
    }
  }
  d && jo(() => {
    var M;
    if (k !== void 0)
      for (H of k)
        (M = H.a) == null || M.apply();
  }), tt.first = t.first && t.first.e, tt.last = h && h.e;
}
function Bv(e, t, n, r) {
  r & fs && Ba(e.v, t), r & vs ? Ba(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Xu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & fs) !== 0, d = (l & Of) === 0, f = c ? d ? /* @__PURE__ */ oe(o) : Gr(o) : o, v = l & vs ? Gr(a) : a, w = {
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
    return w.e = Fn(() => s(e, f, v, u), Me), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
      /* @__PURE__ */ An(i)
    );
    o.before(i), i = a;
  }
}
function ir(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ps(e, t, n, r, o) {
  var i = e, a = "", s;
  zr(() => {
    if (a === (a = t() ?? "")) {
      Me && Hn();
      return;
    }
    s !== void 0 && (hn(s), s = void 0), a !== "" && (s = Fn(() => {
      if (Me) {
        Ke.data;
        for (var l = Hn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ An(l);
        if (l === null)
          throw ta(), Yr;
        Ft(Ke, u), i = At(l);
        return;
      }
      var c = a + "", d = Es(c);
      Ft(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Mt(e, t, n, r, o) {
  var i;
  Me && Hn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Wv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Er(e, t, ...n) {
  var r = e, o = Ct, i;
  zr(() => {
    o !== (o = t()) && (i && (hn(i), i = null), i = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), Me && (r = Ke);
}
function Fu(e, t, n) {
  Me && Hn();
  var r = e, o, i;
  zr(() => {
    o !== (o = t()) && (i && (qr(i), i = null), o && (i = Fn(() => n(r, o))));
  }, lo), Me && (r = Ke);
}
function Kv(e, t, n, r, o, i) {
  let a = Me;
  Me && Hn();
  var s, l, u = null;
  Me && Ke.nodeType === 1 && (u = /** @type {Element} */
  Ke, Hn());
  var c = (
    /** @type {TemplateNode} */
    Me ? Ke : e
  ), d;
  zr(() => {
    const f = t() || null;
    var v = f === "svg" ? Yf : null;
    f !== s && (d && (f === null ? qr(d, () => {
      d = null, l = null;
    }) : f === l ? Mo(d) : hn(d)), f && f !== l && (d = Fn(() => {
      if (u = Me ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Ft(u, u), r) {
        Me && zv(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Me ? /* @__PURE__ */ Lt(u) : u.appendChild(Xn())
        );
        Me && (w === null ? tn(!1) : At(w)), r(u, w);
      }
      tt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), At(c));
}
function st(e, t) {
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
function Tt(e, t, n) {
  en(() => {
    var r = On(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      uo(() => {
        var a = n();
        Q(a), o && $s(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function qu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function jv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qu(e)) && (r && (r += " "), r += t);
  return r;
}
function _n(e) {
  return typeof e == "object" ? jv(e) : e ?? "";
}
const dl = [...` 	
\r\f \v\uFEFF`];
function Xv(e, t, n) {
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
function _a(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Fv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(_a)), o && l.push(...Object.keys(o).map(_a));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === b - 1) {
            if (c !== -1) {
              var v = _a(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var w = e.substring(u, d).trim();
                n += " " + w + ";";
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
function Vt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Me || a !== n || a === void 0) {
    var s = Xv(n, r, i);
    (!Me || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
  if (Me || o !== t) {
    var i = Fv(t, r);
    (!Me || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Sa(e, n == null ? void 0 : n[0], r[0]), Sa(e, n == null ? void 0 : n[1], r[1], "important")) : Sa(e, n, r));
  return r;
}
const yo = Symbol("class"), xr = Symbol("style"), Gu = Symbol("is custom element"), Uu = Symbol("is html");
function So(e) {
  if (Me) {
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
    e.__on_r = n, gv(n), Lv();
  }
}
function Ea(e, t) {
  var n = Ts(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function qv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Ts(e);
  Me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Uf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ju(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1) {
  var i = Ts(e), a = i[Gu], s = !i[Uu];
  let l = Me && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = _n(n.class) : (r || n[yo]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var f = Ju(e);
  for (const k in n) {
    let p = n[k];
    if (c && k === "value" && p == null) {
      e.value = e.__value = "", u[k] = p;
      continue;
    }
    if (k === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vt(e, v, p, r, t == null ? void 0 : t[yo], n[yo]), u[k] = p, u[yo] = n[yo];
      continue;
    }
    if (k === "style") {
      xt(e, p, t == null ? void 0 : t[xr], n[xr]), u[k] = p, u[xr] = n[xr];
      continue;
    }
    var w = u[k];
    if (p !== w) {
      u[k] = p;
      var b = k[0] + k[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {}, T = "$$" + k;
          let E = k.slice(2);
          var $ = Pv(E);
          if (Sv(E) && (E = E.slice(0, -7), _.capture = !0), !$ && w) {
            if (p != null) continue;
            e.removeEventListener(E, u[T], _), u[T] = null;
          }
          if (p != null)
            if ($)
              e[`__${E}`] = p, aa([E]);
            else {
              let H = function(N) {
                u[k].call(this, N);
              };
              u[T] = Wu(E, e, H, _);
            }
          else $ && (e[`__${E}`] = void 0);
        } else if (k === "style")
          xe(e, k, p);
        else if (k === "autofocus")
          Ov(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!a && (k === "__value" || k === "value" && p != null))
          e.value = e.__value = p;
        else if (k === "selected" && c)
          qv(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var C = k;
          s || (C = Mv(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (p == null && !a && !h)
            if (i[k] = null, C === "value" || C === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const T = t === void 0;
              if (C === "value") {
                let E = _.defaultValue;
                _.removeAttribute(C), _.defaultValue = E, _.value = _.__value = T ? E : null;
              } else {
                let E = _.defaultChecked;
                _.removeAttribute(C), _.defaultChecked = E, _.checked = T ? E : !1;
              }
            } else
              e.removeAttribute(k);
          else h || f.includes(C) && (a || typeof p != "string") ? e[C] = p : typeof p != "function" && xe(e, C, p);
        }
    }
  }
  return l && tn(!0), u;
}
function Ts(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Gu]: e.nodeName.includes("-"),
      [Uu]: e.namespaceURI === Zf
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
    r = ys(r);
  }
  return t;
}
var $r, Eo, yi, ja, Qu;
const Xa = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, ja), Rr(this, $r, /* @__PURE__ */ new WeakMap()), Rr(this, Eo), Rr(this, yi), _i(this, yi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, $r).set(t, r), Mf(this, ja, Qu).call(this).observe(t, yt(this, yi)), () => {
      var o = yt(this, $r).get(t);
      o.delete(n), o.size === 0 && (yt(this, $r).delete(t), yt(this, Eo).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakSet(), Qu = function() {
  return yt(this, Eo) ?? _i(this, Eo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Xa.entries.set(t.target, t);
        for (var n of yt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
jt(Xa, "entries", /* @__PURE__ */ new WeakMap());
let Gv = Xa;
var Uv = /* @__PURE__ */ new Gv({
  box: "border-box"
});
function gl(e, t, n) {
  var r = Uv.observe(e, () => n(e[t]));
  en(() => (On(() => n(e[t])), r));
}
function hl(e, t) {
  return e === t || (e == null ? void 0 : e[ur]) === t;
}
function Dn(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return uo(() => {
      o = i, i = [], On(() => {
        e !== n(...i) && (t(e, ...i), o && hl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      jo(() => {
        i && hl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Pa(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Be(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Q(t.s);
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
    r = () => g(a);
  }
  n.b.length && uv(() => {
    pl(t, r), To(n.b);
  }), vr(() => {
    const o = On(() => n.m.map(Xf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && vr(() => {
    pl(t, r), To(n.a);
  });
}
function pl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function We(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function ln(e) {
  Qe === null && Ji(), so && Qe.l !== null ? Qv(Qe).m.push(e) : vr(() => {
    const t = On(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ms(e) {
  Qe === null && Ji(), ln(() => () => On(e));
}
function Jv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function sa() {
  const e = Qe;
  return e === null && Ji(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Ko(i) ? i.slice() : [i], s = Jv(
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
function Qv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Vs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ct;
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
function cn(e, t) {
  return {
    subscribe: $e(e, t).subscribe
  };
}
function $e(e, t = Ct) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if ($s(e, s) && (e = s, n)) {
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
  function a(s, l = Ct) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || Ct), s(
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
  return cn(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = Ct;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, a, s);
      i ? a(w) : d = typeof w == "function" ? w : Ct;
    }, v = o.map(
      (w, b) => Vs(
        w,
        ($) => {
          u[b] = $, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      To(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Vs(e, (n) => t = n)(), t;
}
let ci = !1, Fa = Symbol();
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: Ct
  });
  if (r.store !== e && !(Fa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ct;
    else {
      var o = !0;
      r.unsubscribe = Vs(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && Fa in n ? q(e) : g(r.source);
}
function e1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Ct), e;
}
function Hi(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    ks(() => {
      for (var n in e)
        e[n].unsubscribe();
      Po(e, Fa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function t1(e) {
  var t = ci;
  try {
    return ci = !1, [e(), ci];
  } finally {
    ci = t;
  }
}
const n1 = {
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
function Nt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    n1
  );
}
const r1 = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Gr(0) }, r1);
}
const o1 = {
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
    if (t === ur || t === bs) return !1;
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
  return new Proxy({ props: e }, o1);
}
function ml(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & Df) !== 0, a = !so || (n & Lf) !== 0, s = (n & Af) !== 0, l = (n & If) !== 0, u = !1, c;
  s ? [c, u] = t1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = ur in e || bs in e, f = s && (((o = Wn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, $ = () => (b = !0, w && (w = !1, l ? v = On(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && rv(), c = $(), f && f(c));
  var C;
  if (a)
    C = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? $() : (w = !0, b = !1, E);
    };
  else {
    var h = (i ? Fr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= qf, C = () => {
      var E = g(h);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & pu))
    return C;
  if (f) {
    var k = e.$$legacy;
    return function(E, H) {
      return arguments.length > 0 ? ((!a || !H || k || u) && f(H ? C() : E), E) : C();
    };
  }
  var p = !1, _ = /* @__PURE__ */ oe(c), T = /* @__PURE__ */ Fr(() => {
    var E = C(), H = g(_);
    return p ? (p = !1, H) : _.v = E;
  });
  return s && g(T), i || (T.equals = Cs), function(E, H) {
    if (arguments.length > 0) {
      const N = H ? g(T) : a && s ? fn(E) : E;
      if (!T.equals(N)) {
        if (p = !0, U(_, N), b && v !== void 0 && (v = N), ml(T))
          return E;
        On(() => g(T));
      }
      return E;
    }
    return ml(T) ? T.v : g(T);
  };
}
function i1(e) {
  return new a1(e);
}
var or, mn;
class a1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Rr(this, or), Rr(this, mn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ oe(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === bs ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return U(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    _i(this, mn, (t.hydrate ? Iv : Ku)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), _i(this, or, i.$$events);
    for (const a of Object.keys(yt(this, mn)))
      a === "$set" || a === "$destroy" || a === "$on" || Po(this, a, {
        get() {
          return yt(this, mn)[a];
        },
        /** @param {any} value */
        set(s) {
          yt(this, mn)[a] = s;
        },
        enumerable: !0
      });
    yt(this, mn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, yt(this, mn).$destroy = () => {
      Rv(yt(this, mn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    yt(this, mn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    yt(this, or)[t] = yt(this, or)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return yt(this, or)[t].push(r), () => {
      yt(this, or)[t] = yt(this, or)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    yt(this, mn).$destroy();
  }
}
or = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
let ec;
typeof HTMLElement == "function" && (ec = class extends HTMLElement {
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
      const t = {}, n = s1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = wi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = i1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = cv(() => {
        uo(() => {
          var r;
          this.$$r = !0;
          for (const o of Si(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = wi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = wi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return Si(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function wi(e, t, n, r) {
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
function s1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function de(e, t, n, r, o, i) {
  let a = class extends ec {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Si(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Si(t).forEach((s) => {
    Po(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = wi(s, l, t), this.$$d[s] = l;
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
var l1 = { value: () => {
} };
function la() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new bi(n);
}
function bi(e) {
  this._ = e;
}
function u1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
bi.prototype = la.prototype = {
  constructor: bi,
  on: function(e, t) {
    var n = this._, r = u1(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = c1(n[o], e.name))) return o;
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
    return new bi(e);
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
function c1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function yl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = l1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var qa = "http://www.w3.org/1999/xhtml";
const wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ua(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), wl.hasOwnProperty(t) ? { space: wl[t], local: e } : e;
}
function d1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === qa && t.documentElement.namespaceURI === qa ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function f1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function tc(e) {
  var t = ua(e);
  return (t.local ? f1 : d1)(t);
}
function v1() {
}
function Ns(e) {
  return e == null ? v1 : function() {
    return this.querySelector(e);
  };
}
function g1(e) {
  typeof e != "function" && (e = Ns(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new sn(r, this._parents);
}
function h1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function p1() {
  return [];
}
function nc(e) {
  return e == null ? p1 : function() {
    return this.querySelectorAll(e);
  };
}
function m1(e) {
  return function() {
    return h1(e.apply(this, arguments));
  };
}
function y1(e) {
  typeof e == "function" ? e = m1(e) : e = nc(e);
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
var w1 = Array.prototype.find;
function b1(e) {
  return function() {
    return w1.call(this.children, e);
  };
}
function x1() {
  return this.firstElementChild;
}
function $1(e) {
  return this.select(e == null ? x1 : b1(typeof e == "function" ? e : oc(e)));
}
var C1 = Array.prototype.filter;
function k1() {
  return Array.from(this.children);
}
function _1(e) {
  return function() {
    return C1.call(this.children, e);
  };
}
function S1(e) {
  return this.selectAll(e == null ? k1 : _1(typeof e == "function" ? e : oc(e)));
}
function E1(e) {
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new sn(r, this._parents);
}
function ic(e) {
  return new Array(e.length);
}
function P1() {
  return new sn(this._enter || this._groups.map(ic), this._parents);
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
function T1(e) {
  return function() {
    return e;
  };
}
function M1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new zi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function V1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new zi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function N1(e) {
  return e.__data__;
}
function H1(e, t) {
  if (!arguments.length) return Array.from(this, N1);
  var n = t ? V1 : M1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = T1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = z1(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), $ = a[u] = new Array(w), C = l[u] = new Array(f);
    n(c, d, b, $, C, v, t);
    for (var h = 0, k = 0, p, _; h < w; ++h)
      if (p = b[h]) {
        for (h >= k && (k = h + 1); !(_ = $[k]) && ++k < w; ) ;
        p._next = _ || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function z1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function O1() {
  return new sn(this._exit || this._groups.map(ic), this._parents);
}
function D1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function L1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new sn(s, this._parents);
}
function A1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function I1(e) {
  e || (e = R1);
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
function R1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Z1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Y1() {
  return Array.from(this);
}
function B1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function W1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function K1() {
  return !this.node();
}
function j1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function X1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function F1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function q1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function G1(e, t) {
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
function J1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Q1(e, t) {
  var n = ua(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? F1 : X1 : typeof t == "function" ? n.local ? J1 : U1 : n.local ? G1 : q1)(n, t));
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
  return arguments.length > 1 ? this.each((t == null ? eg : typeof t == "function" ? ng : tg)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
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
function Hs(e) {
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
  for (var n = Hs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function cc(e, t) {
  for (var n = Hs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
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
    for (var r = Hs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function kg(e) {
  var t = typeof e == "function" ? e : tc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function _g() {
  return null;
}
function Sg(e, t) {
  var n = typeof e == "function" ? e : tc(e), r = t == null ? _g : typeof t == "function" ? t : Ns(t);
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
function Tg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vg(e) {
  return this.select(e ? Mg : Tg);
}
function Ng(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Hg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function zg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Og(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Dg(e, t, n) {
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
  var r = zg(e + ""), o, i = r.length, a;
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
  for (s = t ? Dg : Og, o = 0; o < i; ++o) this.each(s(r[o], t, n));
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
function* Zg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var fc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function Fo() {
  return new sn([[document.documentElement]], fc);
}
function Yg() {
  return this;
}
sn.prototype = Fo.prototype = {
  constructor: sn,
  select: g1,
  selectAll: y1,
  selectChild: $1,
  selectChildren: S1,
  filter: E1,
  data: H1,
  enter: P1,
  exit: O1,
  join: D1,
  merge: L1,
  selection: Yg,
  order: A1,
  sort: I1,
  call: Z1,
  nodes: Y1,
  node: B1,
  size: W1,
  empty: K1,
  each: j1,
  attr: Q1,
  style: rg,
  property: sg,
  classed: dg,
  text: hg,
  html: wg,
  raise: xg,
  lower: Cg,
  append: kg,
  insert: Sg,
  remove: Pg,
  clone: Vg,
  datum: Ng,
  on: Lg,
  dispatch: Rg,
  [Symbol.iterator]: Zg
};
function vn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], fc);
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
const Wg = { passive: !1 }, Oo = { capture: !0, passive: !1 };
function Ta(e) {
  e.stopImmediatePropagation();
}
function Br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = vn(e).on("dragstart.drag", Br, Oo);
  "onselectstart" in t ? n.on("selectstart.drag", Br, Oo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function gc(e, t) {
  var n = e.document.documentElement, r = vn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Br, Oo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
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
function Kg(e) {
  return !e.ctrlKey && !e.button;
}
function jg() {
  return this.parentNode;
}
function Xg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Fg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qg() {
  var e = Kg, t = jg, n = Xg, r = Fg, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(p) {
    p.on("mousedown.drag", v).filter(r).on("touchstart.drag", $).on("touchmove.drag", C, Wg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(p, _) {
    if (!(c || !e.call(this, p, _))) {
      var T = k(this, t.call(this, p, _), p, _, "mouse");
      T && (vn(p.view).on("mousemove.drag", w, Oo).on("mouseup.drag", b, Oo), vc(p.view), Ta(p), u = !1, s = p.clientX, l = p.clientY, T("start", p));
    }
  }
  function w(p) {
    if (Br(p), !u) {
      var _ = p.clientX - s, T = p.clientY - l;
      u = _ * _ + T * T > d;
    }
    o.mouse("drag", p);
  }
  function b(p) {
    vn(p.view).on("mousemove.drag mouseup.drag", null), gc(p.view, u), Br(p), o.mouse("end", p);
  }
  function $(p, _) {
    if (e.call(this, p, _)) {
      var T = p.changedTouches, E = t.call(this, p, _), H = T.length, N, L;
      for (N = 0; N < H; ++N)
        (L = k(this, E, p, _, T[N].identifier, T[N])) && (Ta(p), L("start", p, T[N]));
    }
  }
  function C(p) {
    var _ = p.changedTouches, T = _.length, E, H;
    for (E = 0; E < T; ++E)
      (H = o[_[E].identifier]) && (Br(p), H("drag", p, _[E]));
  }
  function h(p) {
    var _ = p.changedTouches, T = _.length, E, H;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < T; ++E)
      (H = o[_[E].identifier]) && (Ta(p), H("end", p, _[E]));
  }
  function k(p, _, T, E, H, N) {
    var L = i.copy(), I = yn(N || T, _), O, Y, S;
    if ((S = n.call(p, new Ga("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: H,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), E)) != null)
      return O = S.x - I[0] || 0, Y = S.y - I[1] || 0, function V(x, P, M) {
        var D = I, Z;
        switch (x) {
          case "start":
            o[H] = V, Z = a++;
            break;
          case "end":
            delete o[H], --a;
          // falls through
          case "drag":
            I = yn(M || P, _), Z = a;
            break;
        }
        L.call(
          x,
          p,
          new Ga(x, {
            sourceEvent: P,
            subject: S,
            target: f,
            identifier: H,
            active: Z,
            x: I[0] + O,
            y: I[1] + Y,
            dx: I[0] - D[0],
            dy: I[1] - D[1],
            dispatch: L
          }),
          E
        );
      };
  }
  return f.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : di(!!p), f) : e;
  }, f.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : di(p), f) : t;
  }, f.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : di(p), f) : n;
  }, f.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : di(!!p), f) : r;
  }, f.on = function() {
    var p = i.on.apply(i, arguments);
    return p === i ? f : p;
  }, f.clickDistance = function(p) {
    return arguments.length ? (d = (p = +p) * p, f) : Math.sqrt(d);
  }, f;
}
function zs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function hc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function qo() {
}
var Do = 0.7, Oi = 1 / Do, Wr = "\\s*([+-]?\\d+)\\s*", Lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gg = /^#([0-9a-f]{3,8})$/, Ug = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), Jg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Qg = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${Lo}\\)$`), eh = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${Lo}\\)$`), th = new RegExp(`^hsl\\(${Lo},${Mn},${Mn}\\)$`), nh = new RegExp(`^hsla\\(${Lo},${Mn},${Mn},${Lo}\\)$`), bl = {
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
zs(qo, Ao, {
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
function Ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Cl(t) : n === 3 ? new Xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ug.exec(e)) ? new Xt(t[1], t[2], t[3], 1) : (t = Jg.exec(e)) ? new Xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qg.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = eh.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = th.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = nh.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? Cl(bl[e]) : e === "transparent" ? new Xt(NaN, NaN, NaN, 0) : null;
}
function Cl(e) {
  return new Xt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Xt(e, t, n, r);
}
function ih(e) {
  return e instanceof qo || (e = Ao(e)), e ? (e = e.rgb(), new Xt(e.r, e.g, e.b, e.opacity)) : new Xt();
}
function Ua(e, t, n, r) {
  return arguments.length === 1 ? ih(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
zs(Xt, Ua, hc(qo, {
  brighter(e) {
    return e = e == null ? Oi : Math.pow(Oi, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Do : Math.pow(Do, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Xt(_r(this.r), _r(this.g), _r(this.b), Di(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: kl,
  // Deprecated! Use color.formatHex.
  formatHex: kl,
  formatHex8: ah,
  formatRgb: _l,
  toString: _l
}));
function kl() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function ah() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _l() {
  const e = Di(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${_r(this.r)}, ${_r(this.g)}, ${_r(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Di(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _r(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = _r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new wn(e, t, n, r);
}
function pc(e) {
  if (e instanceof wn) return new wn(e.h, e.s, e.l, e.opacity);
  if (e instanceof qo || (e = Ao(e)), !e) return new wn();
  if (e instanceof wn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new wn(a, s, l, e.opacity);
}
function sh(e, t, n, r) {
  return arguments.length === 1 ? pc(e) : new wn(e, t, n, r ?? 1);
}
function wn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
zs(wn, sh, hc(qo, {
  brighter(e) {
    return e = e == null ? Oi : Math.pow(Oi, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Do : Math.pow(Do, e), new wn(this.h, this.s, this.l * e, this.opacity);
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
    return new wn(El(this.h), vi(this.s), vi(this.l), Di(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Di(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${El(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function El(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function vi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ma(e, t, n) {
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
    var a = n((o = Ua(o)).r, (i = Ua(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = yc(o.opacity, i.opacity);
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
var Ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Va = new RegExp(Ja.source, "g");
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
  var n = Ja.lastIndex = Va.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ja.exec(e)) && (o = Va.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ar(r, o) })), n = Va.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fh(l[0].x) : dh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Tl = 180 / Math.PI, wc = {
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
    rotate: Math.atan2(t, e) * Tl,
    skewX: Math.atan(l) * Tl,
    scaleX: a,
    scaleY: s
  };
}
var gi;
function gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? wc : bc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hh(e) {
  return e == null || (gi || (gi = document.createElementNS("http://www.w3.org/2000/svg", "g")), gi.setAttribute("transform", e), !(e = gi.transform.baseVal.consolidate())) ? wc : (e = e.matrix, bc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      w.push({ i: b - 4, x: ar(u, d) }, { i: b - 2, x: ar(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ar(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ar(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: ar(u, d) }, { i: b - 2, x: ar(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, $; ++w < b; ) d[($ = f[w]).i] = $.x(v);
      return d.join("");
    };
  };
}
var ph = xc(gh, "px, ", "px)", "deg)"), mh = xc(hh, ", ", ")", ")"), yh = 1e-12;
function Ml(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, $, C;
    if (b < yh)
      C = Math.log(f / u) / t, $ = function(E) {
        return [
          s + E * v,
          l + E * w,
          u * Math.exp(t * E * C)
        ];
      };
    else {
      var h = Math.sqrt(b), k = (f * f - u * u + r * b) / (2 * u * n * h), p = (f * f - u * u - r * b) / (2 * f * n * h), _ = Math.log(Math.sqrt(k * k + 1) - k), T = Math.log(Math.sqrt(p * p + 1) - p);
      C = (T - _) / t, $ = function(E) {
        var H = E * C, N = Ml(_), L = u / (n * h) * (N * bh(t * H + _) - wh(_));
        return [
          s + L * v,
          l + L * w,
          u * N / Ml(t * H + _)
        ];
      };
    }
    return $.duration = C * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Qr = 0, $o = 0, wo = 0, $c = 1e3, Li, Co, Ai = 0, Pr = 0, ca = 0, Io = typeof performance == "object" && performance.now ? performance : Date, Cc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Os() {
  return Pr || (Cc($h), Pr = Io.now() + ca);
}
function $h() {
  Pr = 0;
}
function Ii() {
  this._call = this._time = this._next = null;
}
Ii.prototype = kc.prototype = {
  constructor: Ii,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (t == null ? 0 : +t), !this._next && Co !== this && (Co ? Co._next = this : Li = this, Co = this), this._call = e, this._time = n, Qa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qa());
  }
};
function kc(e, t, n) {
  var r = new Ii();
  return r.restart(e, t, n), r;
}
function Ch() {
  Os(), ++Qr;
  for (var e = Li, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Vl() {
  Pr = (Ai = Io.now()) + ca, Qr = $o = 0;
  try {
    Ch();
  } finally {
    Qr = 0, _h(), Pr = 0;
  }
}
function kh() {
  var e = Io.now(), t = e - Ai;
  t > $c && (ca -= t, Ai = e);
}
function _h() {
  for (var e, t = Li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Li = n);
  Co = e, Qa(r);
}
function Qa(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Vl, e - Io.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ai = Io.now(), wo = setInterval(kh, $c)), Qr = 1, Cc(Vl));
  }
}
function Nl(e, t, n) {
  var r = new Ii();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sh = la("start", "end", "cancel", "interrupt"), Eh = [], _c = 0, Hl = 1, es = 2, xi = 3, zl = 4, ts = 5, $i = 6;
function da(e, t, n, r, o, i) {
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
    state: _c
  });
}
function Ds(e, t) {
  var n = Sn(e, t);
  if (n.state > _c) throw new Error("too late; already scheduled");
  return n;
}
function In(e, t) {
  var n = Sn(e, t);
  if (n.state > xi) throw new Error("too late; already running");
  return n;
}
function Sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Ph(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = kc(i, 0, n.time);
  function i(u) {
    n.state = Hl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Hl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === xi) return Nl(a);
        v.state === zl ? (v.state = $i, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = $i, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Nl(function() {
      n.state === xi && (n.state = zl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = es, n.on.call("start", e, e.__data__, n.index, n.group), n.state === es) {
      for (n.state = xi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ts, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === ts && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = $i, n.timer.stop(), delete r[t];
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
      o = r.state > es && r.state < ts, r.state = $i, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Th(e) {
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
function Nh(e, t) {
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
function Sc(e, t) {
  var n;
  return (typeof t == "number" ? ar : t instanceof Ao ? Pl : (n = Ao(t)) ? (t = n, Pl) : vh)(e, t);
}
function Hh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Oh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Dh(e, t, n) {
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
function Ah(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ih(e, t) {
  var n = ua(e), r = n === "transform" ? mh : Sc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ah : Lh)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? zh : Hh)(n) : (n.local ? Dh : Oh)(n, r, t));
}
function Rh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Yh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Zh(e, i)), n;
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
function Wh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ua(e);
  return this.tween(n, (r.local ? Yh : Bh)(r, t));
}
function Kh(e, t) {
  return function() {
    Ds(this, e).delay = +t.apply(this, arguments);
  };
}
function jh(e, t) {
  return t = +t, function() {
    Ds(this, e).delay = t;
  };
}
function Xh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kh : jh)(t, e)) : Sn(this.node(), t).delay;
}
function Fh(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function qh(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function Gh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Fh : qh)(t, e)) : Sn(this.node(), t).duration;
}
function Uh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function Jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Uh(t, e)) : Sn(this.node(), t).ease;
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
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new qn(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new qn(a, this._parents, this._name, this._id);
}
function rp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function op(e, t, n) {
  var r, o, i = rp(t) ? Ds : In;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ip(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(op(n, e, t));
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
  typeof e != "function" && (e = Ns(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, da(u[f], t, n, f, u, Sn(c, n)));
  return new qn(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = Sn(c, n), b = 0, $ = f.length; b < $; ++b)
          (v = f[b]) && da(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new qn(i, a, t, n);
}
var cp = Fo.prototype.constructor;
function dp() {
  return new cp(this._groups, this._parents);
}
function fp(e, t) {
  var n, r, o;
  return function() {
    var i = Jr(this, e), a = (this.style.removeProperty(e), Jr(this, e));
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
    var a = Jr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function gp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Jr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Jr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function hp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = In(this, e), u = l.on, c = l.value[i] == null ? s || (s = Ec(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? ph : Sc;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Ec(e)) : typeof t == "function" ? this.styleTween(e, gp(e, r, Ls(this, "style." + e, t))).each(hp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? xp(Ls(this, "text", e)) : bp(e == null ? "" : e + ""));
}
function Cp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function kp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Cp(o)), t;
  }
  return r._value = e, r;
}
function _p(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, kp(e));
}
function Sp() {
  for (var e = this._name, t = this._id, n = Pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
  return new qn(r, this._parents, e, n);
}
function Ep() {
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
var Pp = 0;
function qn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pc() {
  return ++Pp;
}
var Zn = Fo.prototype;
qn.prototype = {
  constructor: qn,
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
  attrTween: Wh,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: _p,
  remove: sp,
  tween: Nh,
  delay: Xh,
  duration: Gh,
  ease: Jh,
  easeVarying: ep,
  end: Ep,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Tp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Mp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Tp
};
function Vp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Np(e) {
  var t, n;
  e instanceof qn ? (t = e._id, e = e._name) : (t = Pc(), (n = Mp).time = Os(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Vp(l, t));
  return new qn(r, this._parents, e, t);
}
Fo.prototype.interrupt = Th;
Fo.prototype.transition = Np;
const hi = (e) => () => e;
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
Tc.prototype = Yn.prototype;
function Tc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return fa;
  return e.__zoom;
}
function Na(e) {
  e.stopImmediatePropagation();
}
function bo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Op() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ol() {
  return this.__zoom || fa;
}
function Dp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Lp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ap(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Mc() {
  var e = zp, t = Op, n = Ap, r = Dp, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xh, u = la("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, $ = 10;
  function C(S) {
    S.property("__zoom", Ol).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(S, V, x, P) {
    var M = S.selection ? S.selection() : S;
    M.property("__zoom", Ol), S !== M ? _(S, V, x, P) : M.interrupt().each(function() {
      T(this, arguments).event(P).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, C.scaleBy = function(S, V, x, P) {
    C.scaleTo(S, function() {
      var M = this.__zoom.k, D = typeof V == "function" ? V.apply(this, arguments) : V;
      return M * D;
    }, x, P);
  }, C.scaleTo = function(S, V, x, P) {
    C.transform(S, function() {
      var M = t.apply(this, arguments), D = this.__zoom, Z = x == null ? p(M) : typeof x == "function" ? x.apply(this, arguments) : x, W = D.invert(Z), F = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(k(h(D, F), Z, W), M, a);
    }, x, P);
  }, C.translateBy = function(S, V, x, P) {
    C.transform(S, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), a);
    }, null, P);
  }, C.translateTo = function(S, V, x, P, M) {
    C.transform(S, function() {
      var D = t.apply(this, arguments), Z = this.__zoom, W = P == null ? p(D) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(fa.translate(W[0], W[1]).scale(Z.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), D, a);
    }, P, M);
  };
  function h(S, V) {
    return V = Math.max(i[0], Math.min(i[1], V)), V === S.k ? S : new Yn(V, S.x, S.y);
  }
  function k(S, V, x) {
    var P = V[0] - x[0] * S.k, M = V[1] - x[1] * S.k;
    return P === S.x && M === S.y ? S : new Yn(S.k, P, M);
  }
  function p(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function _(S, V, x, P) {
    S.on("start.zoom", function() {
      T(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var M = this, D = arguments, Z = T(M, D).event(P), W = t.apply(M, D), F = x == null ? p(W) : typeof x == "function" ? x.apply(M, D) : x, le = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), G = M.__zoom, X = typeof V == "function" ? V.apply(M, D) : V, ae = l(G.invert(F).concat(le / G.k), X.invert(F).concat(le / X.k));
      return function(ve) {
        if (ve === 1) ve = X;
        else {
          var me = ae(ve), ce = le / me[2];
          ve = new Yn(ce, F[0] - me[0] * ce, F[1] - me[1] * ce);
        }
        Z.zoom(null, ve);
      };
    });
  }
  function T(S, V, x) {
    return !x && S.__zooming || new E(S, V);
  }
  function E(S, V) {
    this.that = S, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, V), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, V) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var V = vn(this.that).datum();
      u.call(
        S,
        this.that,
        new Hp(S, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        V
      );
    }
  };
  function H(S, ...V) {
    if (!e.apply(this, arguments)) return;
    var x = T(this, V).event(S), P = this.__zoom, M = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), D = yn(S);
    if (x.wheel)
      (x.mouse[0][0] !== D[0] || x.mouse[0][1] !== D[1]) && (x.mouse[1] = P.invert(x.mouse[0] = D)), clearTimeout(x.wheel);
    else {
      if (P.k === M) return;
      x.mouse = [D, P.invert(D)], Ci(this), x.start();
    }
    bo(S), x.wheel = setTimeout(Z, w), x.zoom("mouse", n(k(h(P, M), x.mouse[0], x.mouse[1]), x.extent, a));
    function Z() {
      x.wheel = null, x.end();
    }
  }
  function N(S, ...V) {
    if (f || !e.apply(this, arguments)) return;
    var x = S.currentTarget, P = T(this, V, !0).event(S), M = vn(S.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", le, !0), D = yn(S, x), Z = S.clientX, W = S.clientY;
    vc(S.view), Na(S), P.mouse = [D, this.__zoom.invert(D)], Ci(this), P.start();
    function F(G) {
      if (bo(G), !P.moved) {
        var X = G.clientX - Z, ae = G.clientY - W;
        P.moved = X * X + ae * ae > b;
      }
      P.event(G).zoom("mouse", n(k(P.that.__zoom, P.mouse[0] = yn(G, x), P.mouse[1]), P.extent, a));
    }
    function le(G) {
      M.on("mousemove.zoom mouseup.zoom", null), gc(G.view, P.moved), bo(G), P.event(G).end();
    }
  }
  function L(S, ...V) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, P = yn(S.changedTouches ? S.changedTouches[0] : S, this), M = x.invert(P), D = x.k * (S.shiftKey ? 0.5 : 2), Z = n(k(h(x, D), P, M), t.apply(this, V), a);
      bo(S), s > 0 ? vn(this).transition().duration(s).call(_, Z, P, S) : vn(this).call(C.transform, Z, P, S);
    }
  }
  function I(S, ...V) {
    if (e.apply(this, arguments)) {
      var x = S.touches, P = x.length, M = T(this, V, S.changedTouches.length === P).event(S), D, Z, W, F;
      for (Na(S), Z = 0; Z < P; ++Z)
        W = x[Z], F = yn(W, this), F = [F, this.__zoom.invert(F), W.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== F[2] && (M.touch1 = F, M.taps = 0) : (M.touch0 = F, D = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), D && (M.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), Ci(this), M.start());
    }
  }
  function O(S, ...V) {
    if (this.__zooming) {
      var x = T(this, V).event(S), P = S.changedTouches, M = P.length, D, Z, W, F;
      for (bo(S), D = 0; D < M; ++D)
        Z = P[D], W = yn(Z, this), x.touch0 && x.touch0[2] === Z.identifier ? x.touch0[0] = W : x.touch1 && x.touch1[2] === Z.identifier && (x.touch1[0] = W);
      if (Z = x.that.__zoom, x.touch1) {
        var le = x.touch0[0], G = x.touch0[1], X = x.touch1[0], ae = x.touch1[1], ve = (ve = X[0] - le[0]) * ve + (ve = X[1] - le[1]) * ve, me = (me = ae[0] - G[0]) * me + (me = ae[1] - G[1]) * me;
        Z = h(Z, Math.sqrt(ve / me)), W = [(le[0] + X[0]) / 2, (le[1] + X[1]) / 2], F = [(G[0] + ae[0]) / 2, (G[1] + ae[1]) / 2];
      } else if (x.touch0) W = x.touch0[0], F = x.touch0[1];
      else return;
      x.zoom("touch", n(k(Z, W, F), x.extent, a));
    }
  }
  function Y(S, ...V) {
    if (this.__zooming) {
      var x = T(this, V).event(S), P = S.changedTouches, M = P.length, D, Z;
      for (Na(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), D = 0; D < M; ++D)
        Z = P[D], x.touch0 && x.touch0[2] === Z.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === Z.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (Z = yn(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < $)) {
        var W = vn(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : hi(+S), C) : r;
  }, C.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : hi(!!S), C) : e;
  }, C.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : hi(!!S), C) : o;
  }, C.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : hi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), C) : t;
  }, C.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], C) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, C.constrain = function(S) {
    return arguments.length ? (n = S, C) : n;
  }, C.duration = function(S) {
    return arguments.length ? (s = +S, C) : s;
  }, C.interpolate = function(S) {
    return arguments.length ? (l = S, C) : l;
  }, C.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? C : S;
  }, C.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, C) : Math.sqrt(b);
  }, C.tapDistance = function(S) {
    return arguments.length ? ($ = +S, C) : $;
  }, C;
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
}, Ri = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Tr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Tr || (Tr = {}));
var dr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(dr || (dr = {}));
var Zi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Zi || (Zi = {}));
const ns = {
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
var Kr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Kr || (Kr = {}));
var Ro;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ro || (Ro = {}));
var Pe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Pe || (Pe = {}));
const Dl = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
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
function Ll(e, t, n) {
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
const Zp = (e) => "id" in e && "source" in e && "target" in e, Yp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), As = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Go = (e, t = [0, 0]) => {
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
    const s = a ? Yi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return va(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ga(n);
}, Uo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yi(r);
      n = va(n, o);
    }
  }), ga(n);
}, Vc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Jo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = Zo(s, no(u)), $ = (v ?? 0) * (w ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= $ || u.dragging) && l.push(u);
  }
  return l;
}, rs = (e, t) => {
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
  const s = Uo(e), l = Rs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Wp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", eo.error005());
    else {
      const v = s.measured.width, w = s.measured.height;
      v && w && (d = [
        [l, u],
        [l + v, u + w]
      ]);
    }
  else s && ro(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = ro(d) ? Mr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", eo.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Nc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((w) => w.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = rs(a, l);
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
const to = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Mr = (e = { x: 0, y: 0 }, t, n) => ({
  x: to(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: to(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Hc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Mr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const Rl = (e, t, n) => e < t ? to(Math.abs(e - t), 1, t) / t : e > n ? -to(Math.abs(e - n), 1, t) / t : 0, zc = (e, t, n = 15, r = 40) => {
  const o = Rl(e.x, r, t.width - r) * n, i = Rl(e.y, r, t.height - r) * n;
  return [o, i];
}, va = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), os = ({ x: e, y: t, width: n, height: r }) => ({
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
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Yi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Oc = (e, t) => ga(va(os(e), os(t))), Zo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => Bn(e.width) && Bn(e.height) && Bn(e.x) && Bn(e.y), Bn = (e) => !isNaN(e) && isFinite(e), Kp = (e, t) => {
}, Is = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Jo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Is(s, a) : s;
}, Dc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Rs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = to(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Bi = () => {
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
function jp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Ha(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = jn(e), s = Jo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Is(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Zs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Xp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Fp = ["INPUT", "SELECT", "TEXTAREA"];
function qp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Fp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ac = (e) => "clientX" in e, jn = (e, t) => {
  var n, r;
  const o = Ac(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Yl = (e, t, n, r, o) => {
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
      ...Zs(a)
    };
  });
};
function Gp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function pi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Bl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Pe.Left:
      return [t - pi(t - r, i), n];
    case Pe.Right:
      return [t + pi(r - t, i), n];
    case Pe.Top:
      return [t, n - pi(n - o, i)];
    case Pe.Bottom:
      return [t, n + pi(o - n, i)];
  }
}
function Ic({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: a = 0.25 }) {
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
  }), [d, f, v, w] = Gp({
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
    w
  ];
}
function Rc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Up({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Jp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = va(Yi(e), Yi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Zo(a, ga(i)) > 0;
}
const Qp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, e0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), t0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Zp(e) ? n = { ...e } : n = {
    ...e,
    id: Qp(e)
  }, e0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function is({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Rc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Wl = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, n0 = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Kl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function r0({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Wl[t], s = Wl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = n0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], w, b;
  const $ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, k, p, _] = Rc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? h, b = o.y ?? k;
    const T = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? T : E : v = d === "x" ? E : T;
  } else {
    const T = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? E : T : v = a.y === f ? T : E, t === r) {
      const O = Math.abs(e[d] - n[d]);
      if (O <= i) {
        const Y = Math.min(i - 1, i - O);
        a[d] === f ? $[d] = (l[d] > e[d] ? -1 : 1) * Y : C[d] = (u[d] > n[d] ? -1 : 1) * Y;
      }
    }
    if (t !== r) {
      const O = d === "x" ? "y" : "x", Y = a[d] === s[O], S = l[O] > u[O], V = l[O] < u[O];
      (a[d] === 1 && (!Y && S || Y && V) || a[d] !== 1 && (!Y && V || Y && S)) && (v = d === "x" ? T : E);
    }
    const H = { x: l.x + $.x, y: l.y + $.y }, N = { x: u.x + C.x, y: u.y + C.y }, L = Math.max(Math.abs(H.x - v[0].x), Math.abs(N.x - v[0].x)), I = Math.max(Math.abs(H.y - v[0].y), Math.abs(N.y - v[0].y));
    L >= I ? (w = (H.x + N.x) / 2, b = v[0].y) : (w = v[0].x, b = (H.y + N.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], w, b, p, _];
}
function o0(e, t, n, r) {
  const o = Math.min(Kl(e, t) / 2, Kl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Wi({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = r0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, $, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = o0(c[C - 1], $, c[C + 1], a) : h = `${C === 0 ? "M" : "L"}${$.x} ${$.y}`, b += h, b;
  }, ""), d, f, v, w];
}
function jl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function i0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!jl(n) || !jl(r))
    return null;
  const o = n.internals.handleBounds || Xl(n.handles), i = r.internals.handleBounds || Xl(r.handles), a = Fl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Fl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Tr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Pe.Bottom, u = (s == null ? void 0 : s.position) || Pe.Top, c = Yo(n, a, l), d = Yo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Xl(e) {
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
function Yo(e, t, n = Pe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Pe.Top:
      return { x: o + a / 2, y: i };
    case Pe.Right:
      return { x: o + a, y: i + s / 2 };
    case Pe.Bottom:
      return { x: o + a / 2, y: i + s };
    case Pe.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Fl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function as(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function a0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = as(l, t);
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
    case Pe.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Pe.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Pe.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Ys = {
  nodeOrigin: [0, 0],
  nodeExtent: Ri,
  elevateNodesOnSelect: !0,
  defaults: {}
}, l0 = {
  ...Ys,
  checkEquality: !0
};
function Bs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function u0(e, t, n) {
  const r = Bs(Ys, n);
  for (const o of e.values())
    if (o.parentId)
      Ws(o, e, t, r);
    else {
      const i = Go(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Mr(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function Zc(e, t, n, r) {
  var o, i;
  const a = Bs(l0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Go(u, a.nodeOrigin), f = ro(u.extent) ? u.extent : a.nodeExtent, v = Mr(d, f, yr(u));
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
          z: Yc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ws(c, t, n, r);
  }
}
function c0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ws(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Bs(Ys, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = d0(e, l, i, a, u), { positionAbsolute: v } = e.internals, w = c !== v.x || d !== v.y;
  (w || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Yc(e, t) {
  return (Bn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Go(e, n), u = ro(e.extent) ? Mr(l, e.extent, s) : l;
  let c = Mr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Hc(c, s, t));
  const d = Yc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function f0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? no(l), c = Oc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = yr(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, $ = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = ($ - f.width) * v[0], k = (C - f.height) * v[1];
    (w > 0 || b > 0 || h || k) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + h,
        y: l.position.y - b + k
      }
    }), (c = n.get(u)) == null || c.forEach((p) => {
      e.some((_) => _.id === p.id) || i.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + w,
          y: p.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || w || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: $ + (w ? v[0] * w - h : 0),
        height: C + (b ? v[1] * b - k : 0)
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
    const w = Zs(f.nodeElement), b = v.measured.width !== w.width || v.measured.height !== w.height;
    if (w.width && w.height && (b || !v.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), C = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Hc(h, w, t.get(v.parentId)) : C && (h = Mr(h, C, w));
      const k = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Yl("source", f.nodeElement, $, c, v.id),
            target: Yl("target", f.nodeElement, $, c, v.id)
          }
        }
      };
      t.set(v.id, k), v.parentId && Ws(k, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no(k, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = f0(d, t, n, o);
    l.push(...f);
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
function ql(e, t, n, r, o, i) {
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
    ql("source", l, c, e, o, a), ql("target", l, u, e, i, s), t.set(r.id, r);
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
function Wc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Wc(n, t) : !1;
}
function Gl(e, t, n) {
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
    if ((a.selected || a.id === r) && (!a.parentId || !Wc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function za({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function w({ noDragClassName: $, handleSelector: C, domNode: h, isSelectable: k, nodeId: p, nodeClickDistance: _ = 0 }) {
    f = vn(h);
    function T({ x: L, y: I }, O) {
      const { nodeLookup: Y, nodeExtent: S, snapGrid: V, snapToGrid: x, nodeOrigin: P, onNodeDrag: M, onSelectionDrag: D, onError: Z, updateNodePositions: W } = t();
      i = { x: L, y: I };
      let F = !1, le = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const G = Uo(s);
        le = os(G);
      }
      for (const [G, X] of s) {
        if (!Y.has(G))
          continue;
        let ae = { x: L - X.distance.x, y: I - X.distance.y };
        x && (ae = Is(ae, V));
        let ve = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !X.extent) {
          const { positionAbsolute: Ve } = X.internals, ue = Ve.x - le.x + S[0][0], re = Ve.x + X.measured.width - le.x2 + S[1][0], Le = Ve.y - le.y + S[0][1], He = Ve.y + X.measured.height - le.y2 + S[1][1];
          ve = [
            [ue, Le],
            [re, He]
          ];
        }
        const { position: me, positionAbsolute: ce } = Wp({
          nodeId: G,
          nextPosition: ae,
          nodeLookup: Y,
          nodeExtent: ve,
          nodeOrigin: P,
          onError: Z
        });
        F = F || X.position.x !== me.x || X.position.y !== me.y, X.position = me, X.internals.positionAbsolute = ce;
      }
      if (F && (W(s, !0), O && (r || M || !p && D))) {
        const [G, X] = za({
          nodeId: p,
          dragItems: s,
          nodeLookup: Y
        });
        r == null || r(O, s, G, X), M == null || M(O, G, X), p || D == null || D(O, X);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: L, panBy: I, autoPanSpeed: O, autoPanOnNodeDrag: Y } = t();
      if (!Y) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, V] = zc(u, c, O);
      (S !== 0 || V !== 0) && (i.x = (i.x ?? 0) - S / L[2], i.y = (i.y ?? 0) - V / L[2], await I({ x: S, y: V }) && T(i, null)), a = requestAnimationFrame(E);
    }
    function H(L) {
      var I;
      const { nodeLookup: O, multiSelectionActive: Y, nodesDraggable: S, transform: V, snapGrid: x, snapToGrid: P, selectNodesOnDrag: M, onNodeDragStart: D, onSelectionDragStart: Z, unselectNodesAndEdges: W } = t();
      d = !0, (!M || !k) && !Y && p && ((I = O.get(p)) != null && I.selected || W()), k && M && p && (e == null || e(p));
      const F = Ha(L.sourceEvent, { transform: V, snapGrid: x, snapToGrid: P, containerBounds: c });
      if (i = F, s = p0(O, S, F, p), s.size > 0 && (n || D || !p && Z)) {
        const [le, G] = za({
          nodeId: p,
          dragItems: s,
          nodeLookup: O
        });
        n == null || n(L.sourceEvent, s, le, G), D == null || D(L.sourceEvent, le, G), p || Z == null || Z(L.sourceEvent, G);
      }
    }
    const N = qg().clickDistance(_).on("start", (L) => {
      const { domNode: I, nodeDragThreshold: O, transform: Y, snapGrid: S, snapToGrid: V } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, O === 0 && H(L), i = Ha(L.sourceEvent, { transform: Y, snapGrid: S, snapToGrid: V, containerBounds: c }), u = jn(L.sourceEvent, c);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: I, transform: O, snapGrid: Y, snapToGrid: S, nodeDragThreshold: V, nodeLookup: x } = t(), P = Ha(L.sourceEvent, { transform: O, snapGrid: Y, snapToGrid: S, containerBounds: c });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !x.has(p)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, E()), !d) {
          const M = P.xSnapped - (i.x ?? 0), D = P.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + D * D) > V && H(L);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && s && d && (u = jn(L.sourceEvent, c), T(P, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: O, onNodeDragStop: Y, onSelectionDragStop: S } = t();
        if (O(s, !1), o || Y || !p && S) {
          const [V, x] = za({
            nodeId: p,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(L.sourceEvent, s, V, x), Y == null || Y(L.sourceEvent, V, x), p || S == null || S(L.sourceEvent, x);
        }
      }
    }).filter((L) => {
      const I = L.target;
      return !L.button && (!$ || !Gl(I, `.${$}`, h)) && (!C || Gl(I, C, h));
    });
    f.call(N);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
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
    Zo(o, no(i)) > 0 && r.push(i);
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
      const { x: f, y: v } = Yo(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      w > t || (w < s ? (a = [{ ...d, x: f, y: v }], s = w) : w === s && a.push({ ...d, x: f, y: v }));
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
function Kc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Yo(u, d, d.position, !0) } : d;
}
function jc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function x0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Xc = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: $, isValidConnection: C = Xc, onReconnectEnd: h, updateConnection: k, getTransform: p, getFromHandle: _, autoPanSpeed: T }) {
  const E = Xp(e.target);
  let H = 0, N;
  const { x: L, y: I } = jn(e), O = E == null ? void 0 : E.elementFromPoint(L, I), Y = jc(i, O), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !Y)
    return;
  const V = Kc(o, Y, r, l, t);
  if (!V)
    return;
  let x = jn(e, S), P = !1, M = null, D = !1, Z = null;
  function W() {
    if (!c || !S)
      return;
    const [me, ce] = zc(x, S, T);
    f({ x: me, y: ce }), H = requestAnimationFrame(W);
  }
  const F = {
    ...V,
    nodeId: o,
    type: Y,
    position: V.position
  }, le = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: Yo(le, F, Pe.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: le,
    to: x,
    toHandle: null,
    toPosition: Dl[F.position],
    toNode: null
  };
  k(G);
  let X = G;
  w == null || w(e, { nodeId: o, handleId: r, handleType: Y });
  function ae(me) {
    if (!_() || !F) {
      ve(me);
      return;
    }
    const ce = p();
    x = jn(me, S), N = b0(Jo(x, ce, !1, [1, 1]), n, l, F), P || (W(), P = !0);
    const Ve = Fc(me, {
      handle: N,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = Ve.handleDomNode, M = Ve.connection, D = x0(!!N, Ve.isValid);
    const ue = {
      // from stays the same
      ...X,
      isValid: D,
      to: N && D ? Dc({ x: N.x, y: N.y }, ce) : x,
      toHandle: Ve.toHandle,
      toPosition: D && Ve.toHandle ? Ve.toHandle.position : Dl[F.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    D && N && X.toHandle && ue.toHandle && X.toHandle.type === ue.toHandle.type && X.toHandle.nodeId === ue.toHandle.nodeId && X.toHandle.id === ue.toHandle.id && X.to.x === ue.to.x && X.to.y === ue.to.y || (k(ue), X = ue);
  }
  function ve(me) {
    (N || Z) && M && D && (b == null || b(M));
    const { inProgress: ce, ...Ve } = X, ue = {
      ...Ve,
      toPosition: X.toHandle ? X.toPosition : null
    };
    $ == null || $(me, ue), i && (h == null || h(me, ue)), v(), cancelAnimationFrame(H), P = !1, D = !1, M = null, Z = null, E.removeEventListener("mousemove", ae), E.removeEventListener("mouseup", ve), E.removeEventListener("touchmove", ae), E.removeEventListener("touchend", ve);
  }
  E.addEventListener("mousemove", ae), E.addEventListener("mouseup", ve), E.addEventListener("touchmove", ae), E.addEventListener("touchend", ve);
}
function Fc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Xc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = jn(e), b = a.elementFromPoint(v, w), $ = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, C = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const h = jc(void 0, $), k = $.getAttribute("data-nodeid"), p = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), T = $.classList.contains("connectableend");
    if (!k || !h)
      return C;
    const E = {
      source: d ? k : r,
      sourceHandle: d ? p : o,
      target: d ? r : k,
      targetHandle: d ? o : p
    };
    C.connection = E;
    const H = _ && T && (n === Tr.Strict ? d && h === "source" || !d && h === "target" : k !== r || p !== o);
    C.isValid = H && u(E), C.toHandle = Kc(k, h, p, c, n, !1);
  }
  return C;
}
const C0 = {
  onPointerDown: $0,
  isValid: Fc
};
function k0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = vn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (k) => {
      const p = n();
      if (k.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -k.sourceEvent.deltaY * (k.sourceEvent.deltaMode === 1 ? 0.05 : k.sourceEvent.deltaMode ? 1 : 2e-3) * c, T = p[2] * Math.pow(2, _);
      t.scaleTo(T);
    };
    let b = [0, 0];
    const $ = (k) => {
      (k.sourceEvent.type === "mousedown" || k.sourceEvent.type === "touchstart") && (b = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ]);
    }, C = (k) => {
      const p = n();
      if (k.sourceEvent.type !== "mousemove" && k.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ], T = [_[0] - b[0], _[1] - b[1]];
      b = _;
      const E = r() * Math.max(p[2], Math.log(p[2])) * (v ? -1 : 1), H = {
        x: p[0] - T[0] * E,
        y: p[1] - T[1] * E
      }, N = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: p[2]
      }, N, s);
    }, h = Mc().on("start", $).on("zoom", d ? C : null).on("zoom.wheel", f ? w : null);
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
const _0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ha = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Oa = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Zr = (e, t) => e.target.closest(`.${t}`), qc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Gc = (e) => {
  const t = e.ctrlKey && Bi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function S0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Zr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const $ = yn(c), C = Gc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, $, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === dr.Vertical ? 0 : c.deltaX * f, w = o === dr.Horizontal ? 0 : c.deltaY * f;
    !Bi() && c.shiftKey && o !== dr.Vertical && (v = c.deltaY * f, w = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(w / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ha(n.property("__zoom"));
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
    const s = ha(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && qc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ha(i.transform)));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && qc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && _0(e.prevViewport, a.transform))) {
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
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && w;
  };
}
function N0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Mc().clickDistance(!Bn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = vn(e).call(f);
  k({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Gc);
  function $(O, Y) {
    return v ? new Promise((S) => {
      f == null || f.transform(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), O);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: O, noPanClassName: Y, onPaneContextMenu: S, userSelectionActive: V, panOnScroll: x, panOnDrag: P, panOnScrollMode: M, panOnScrollSpeed: D, preventScrolling: Z, zoomOnPinch: W, zoomOnScroll: F, zoomOnDoubleClick: le, zoomActivationKeyPressed: G, lib: X, onTransformChange: ae }) {
    V && !c.isZoomingOrPanning && h();
    const ve = x && !G && !V ? S0({
      zoomPanValues: c,
      noWheelClassName: O,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: M,
      panOnScrollSpeed: D,
      zoomOnPinch: W,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : E0({
      noWheelClassName: O,
      preventScrolling: Z,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", ve, { passive: !1 }), !V) {
      const ce = P0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ce);
      const Ve = T0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ae
      });
      f.on("zoom", Ve);
      const ue = M0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: x,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ue);
    }
    const me = V0({
      zoomActivationKeyPressed: G,
      panOnDrag: P,
      zoomOnScroll: F,
      panOnScroll: x,
      zoomOnDoubleClick: le,
      zoomOnPinch: W,
      userSelectionActive: V,
      noPanClassName: Y,
      noWheelClassName: O,
      lib: X
    });
    f.filter(me), le ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function k(O, Y, S) {
    const V = Oa(O), x = f == null ? void 0 : f.constrain()(V, Y, S);
    return x && await $(x), new Promise((P) => P(x));
  }
  async function p(O, Y) {
    const S = Oa(O);
    return await $(S, Y), new Promise((V) => V(S));
  }
  function _(O) {
    if (v) {
      const Y = Oa(O), S = v.property("__zoom");
      (S.k !== O.zoom || S.x !== O.x || S.y !== O.y) && (f == null || f.transform(v, Y, null, { sync: !0 }));
    }
  }
  function T() {
    const O = v ? Tc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: O.x, y: O.y, zoom: O.k };
  }
  function E(O, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), O);
    }) : Promise.resolve(!1);
  }
  function H(O, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), O);
    }) : Promise.resolve(!1);
  }
  function N(O) {
    f == null || f.scaleExtent(O);
  }
  function L(O) {
    f == null || f.translateExtent(O);
  }
  function I(O) {
    const Y = !Bn(O) || O < 0 ? 0 : O;
    f == null || f.clickDistance(Y);
  }
  return {
    update: C,
    destroy: h,
    setViewport: p,
    setViewportConstrained: k,
    getViewport: T,
    scaleTo: E,
    scaleBy: H,
    setScaleExtent: N,
    setTranslateExtent: L,
    syncViewport: _,
    setClickDistance: I
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var H0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function hr(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(le, "$connectable", n), i = () => ee(me, "$connectionRadius", n), a = () => ee(ae, "$domNode", n), s = () => ee(ve, "$nodeLookup", n), l = () => ee(X, "$connectionMode", n), u = () => ee(ue, "$lib", n), c = () => ee(Ge, "$autoPanOnConnect", n), d = () => ee(Ae, "$flowId", n), f = () => ee(Ve, "$isValidConnectionStore", n), v = () => ee(Le, "$onedgecreate", n), w = () => ee(fe, "$onConnectAction", n), b = () => ee(Se, "$onConnectStartAction", n), $ = () => ee(Fe, "$onConnectEndAction", n), C = () => ee(ce, "$viewport", n), h = () => ee(vt, "$connection", n), k = () => ee(Je, "$edges", n), p = () => ee(se, "$connectionLookup", n), _ = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), H = /* @__PURE__ */ oe(), N = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe(), I = /* @__PURE__ */ oe(), O = /* @__PURE__ */ oe();
  let Y = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), V = y(t, "position", 28, () => Pe.Top), x = y(t, "style", 12, void 0), P = y(t, "isValidConnection", 12, void 0), M = y(t, "onconnect", 12, void 0), D = y(t, "ondisconnect", 12, void 0), Z = y(t, "isConnectable", 12, void 0), W = y(t, "class", 12, void 0);
  const F = Sr("svelteflow__node_id"), le = Sr("svelteflow__node_connectable"), G = nt(), {
    connectionMode: X,
    domNode: ae,
    nodeLookup: ve,
    connectionRadius: me,
    viewport: ce,
    isValidConnection: Ve,
    lib: ue,
    addEdge: re,
    onedgecreate: Le,
    panBy: He,
    cancelConnection: Ze,
    updateConnection: te,
    autoPanOnConnect: Ge,
    edges: Je,
    connectionLookup: se,
    onconnect: fe,
    onconnectstart: Se,
    onconnectend: Fe,
    flowId: Ae,
    connection: vt
  } = G;
  function lt(Ne) {
    const ut = Ac(Ne);
    (ut && Ne.button === 0 || !ut) && C0.onPointerDown(Ne, {
      handleId: g(E),
      nodeId: F,
      isTarget: g(_),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: P() ?? f(),
      updateConnection: te,
      cancelConnection: Ze,
      panBy: He,
      onConnect: (Ye) => {
        var Re;
        const ct = v() ? v()(Ye) : Ye;
        ct && (re(ct), (Re = w()) == null || Re(Ye));
      },
      onConnectStart: (Ye, Re) => {
        var ct;
        (ct = b()) == null || ct(Ye, {
          nodeId: Re.nodeId,
          handleId: Re.handleId,
          handleType: Re.handleType
        });
      },
      onConnectEnd: (Ye, Re) => {
        var ct;
        (ct = $()) == null || ct(Ye, Re);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = /* @__PURE__ */ oe(null), Ie = /* @__PURE__ */ oe();
  ye(() => Q(S()), () => {
    U(_, S() === "target");
  }), ye(
    () => (Q(Z()), o()),
    () => {
      U(T, Z() !== void 0 ? Z() : o());
    }
  ), ye(() => Q(Y()), () => {
    U(E, Y() || null);
  }), ye(
    () => (Q(M()), Q(D()), k(), p(), Q(S()), Q(Y())),
    () => {
      (M() || D()) && (k(), U(Ie, p().get(`${F}-${S()}${Y() ? `-${Y()}` : ""}`)));
    }
  ), ye(
    () => (g(ne), g(Ie), Q(D()), Q(M())),
    () => {
      if (g(ne) && !Ip(g(Ie), g(ne))) {
        const Ne = g(Ie) ?? /* @__PURE__ */ new Map();
        Ll(g(ne), Ne, D()), Ll(Ne, g(ne), M());
      }
      U(ne, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), ye(() => h(), () => {
    U(H, !!h().fromHandle);
  }), ye(
    () => (h(), Q(S()), g(E)),
    () => {
      var Ne, ut, Ye;
      U(N, ((Ne = h().fromHandle) == null ? void 0 : Ne.nodeId) === F && ((ut = h().fromHandle) == null ? void 0 : ut.type) === S() && ((Ye = h().fromHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), ye(
    () => (h(), Q(S()), g(E)),
    () => {
      var Ne, ut, Ye;
      U(L, ((Ne = h().toHandle) == null ? void 0 : Ne.nodeId) === F && ((ut = h().toHandle) == null ? void 0 : ut.type) === S() && ((Ye = h().toHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), ye(
    () => (l(), h(), Q(S()), g(E)),
    () => {
      var Ne, ut, Ye;
      U(I, l() === Tr.Strict ? ((Ne = h().fromHandle) == null ? void 0 : Ne.type) !== S() : F !== ((ut = h().fromHandle) == null ? void 0 : ut.nodeId) || g(E) !== ((Ye = h().fromHandle) == null ? void 0 : Ye.id));
    }
  ), ye(() => (g(L), h()), () => {
    U(O, g(L) && h().isValid);
  }), _t(), Be();
  var we = H0();
  xe(we, "data-nodeid", F);
  let Zt;
  var Yt = j(we);
  Mt(Yt, t, "default", {}), K(we), Te(
    (Ne, ut) => {
      xe(we, "data-handleid", g(E)), xe(we, "data-handlepos", V()), xe(we, "data-id", `${d() ?? ""}-${F ?? ""}-${Y() || ""}-${S() ?? ""}`), Zt = Vt(we, 1, Ne, null, Zt, ut), xt(we, x());
    },
    [
      () => _n(Rt([
        "svelte-flow__handle",
        `svelte-flow__handle-${V()}`,
        "nodrag",
        "nopan",
        V(),
        W()
      ])),
      () => ({
        valid: g(O),
        connectingto: g(L),
        connectingfrom: g(N),
        source: !g(_),
        target: g(_),
        connectablestart: g(T),
        connectableend: g(T),
        connectable: g(T),
        connectionindicator: g(T) && (!g(H) || g(I))
      })
    ],
    be
  ), Ue("mousedown", we, lt), Ue("touchstart", we, lt), A(e, we);
  var un = he({
    get id() {
      return Y();
    },
    set id(Ne) {
      Y(Ne), m();
    },
    get type() {
      return S();
    },
    set type(Ne) {
      S(Ne), m();
    },
    get position() {
      return V();
    },
    set position(Ne) {
      V(Ne), m();
    },
    get style() {
      return x();
    },
    set style(Ne) {
      x(Ne), m();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Ne) {
      P(Ne), m();
    },
    get onconnect() {
      return M();
    },
    set onconnect(Ne) {
      M(Ne), m();
    },
    get ondisconnect() {
      return D();
    },
    set ondisconnect(Ne) {
      D(Ne), m();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Ne) {
      Z(Ne), m();
    },
    get class() {
      return W();
    },
    set class(Ne) {
      W(Ne), m();
    }
  });
  return r(), un;
}
de(
  hr,
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
var z0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Ki(e, t) {
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
  var a = z0(), s = Ce(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Top);
  hr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Pe.Bottom);
  return hr(c, {
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
var O0 = /* @__PURE__ */ ie(" <!>", 1);
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
  Be(), Oe();
  var i = O0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Bottom);
  return hr(s, {
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
var D0 = /* @__PURE__ */ ie(" <!>", 1);
function Jc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), ge(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Be(), Oe();
  var i = D0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Top);
  return hr(s, {
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
de(Jc, { data: {}, targetPosition: {} }, [], [], !0);
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
de(Qc, {}, [], [], !0);
function Jl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ji(e, { target: t, domNode: n }) {
  return Jl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Jl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var L0 = /* @__PURE__ */ ie("<div><!></div>");
function ed(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$domNode", n), { domNode: i } = nt();
  Be();
  var a = L0(), s = j(a);
  Mt(s, t, "default", {}), K(a), Tt(a, (l, u) => ji == null ? void 0 : ji(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), he(), r();
}
de(ed, {}, ["default"], [], !0);
function td() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = nt();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", eo.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var A0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function nd(e, t) {
  ge(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = td(), a = Sr("svelteflow__edge_id");
  return Be(), ed(e, {
    children: (s, l) => {
      var u = A0();
      let c;
      var d = j(u);
      Mt(d, t, "default", {}), K(u), Te(() => c = xt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
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
de(nd, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var I0 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), R0 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Qo(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Be();
  var w = R0(), b = Ce(w), $ = B(b);
  {
    var C = (p) => {
      var _ = I0();
      xe(_, "stroke-opacity", 0), xe(_, "stroke-width", v), Te(() => xe(_, "d", r())), A(p, _);
    };
    ke($, (p) => {
      v && p(C);
    });
  }
  var h = B($);
  {
    var k = (p) => {
      nd(p, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (_, T) => {
          Oe();
          var E = qe();
          Te(() => on(E, o())), A(_, E);
        },
        $$slots: { default: !0 }
      });
    };
    ke(h, (p) => {
      o() && p(k);
    });
  }
  return Te(
    (p) => {
      xe(b, "id", n()), xe(b, "d", r()), Vt(b, 0, p), xe(b, "marker-start", l()), xe(b, "marker-end", u()), xt(b, c());
    },
    [
      () => _n(Rt(["svelte-flow__edge-path", f()]))
    ],
    be
  ), A(e, w), he({
    get id() {
      return n();
    },
    set id(p) {
      n(p), m();
    },
    get path() {
      return r();
    },
    set path(p) {
      r(p), m();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), m();
    },
    get labelX() {
      return i();
    },
    set labelX(p) {
      i(p), m();
    },
    get labelY() {
      return a();
    },
    set labelY(p) {
      a(p), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(p) {
      l(p), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(p) {
      u(p), m();
    },
    get style() {
      return c();
    },
    set style(p) {
      c(p), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), m();
    },
    get class() {
      return f();
    },
    set class(p) {
      f(p), m();
    }
  });
}
de(
  Qo,
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
function Xi(e, t) {
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
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(w()), Q(C())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Ic({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C()
      }));
    }
  ), _t(), Be(), Qo(e, {
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
      return w();
    },
    set sourcePosition(h) {
      w(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
    }
  });
}
de(
  Xi,
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(w()), Q(C())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C()
      }));
    }
  ), _t(), Be(), Qo(e, {
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
      return w();
    },
    set sourcePosition(h) {
      w(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), w = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(w()), Q(b())),
    () => {
      (($) => (U(r, $[0]), U(o, $[1]), U(i, $[2])))(is({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), _t(), Be(), Qo(e, {
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
    set label($) {
      a($), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle($) {
      s($), m();
    },
    get style() {
      return l();
    },
    set style($) {
      l($), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart($) {
      u($), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX($) {
      f($), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY($) {
      v($), m();
    },
    get targetX() {
      return w();
    },
    set targetX($) {
      w($), m();
    },
    get targetY() {
      return b();
    },
    set targetY($) {
      b($), m();
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
  ]), ge(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), w = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), $ = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(w()), Q(C())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: w(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), _t(), Be(), Qo(e, {
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
      return w();
    },
    set sourcePosition(h) {
      w(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
    }
  });
}
de(
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
function Z0(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function Y0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const B0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, W0 = (e, t, n, r = [0, 0], o = Ri) => {
  const { subscribe: i, set: a, update: s } = $e([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Zc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, w = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: w
  };
}, K0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((w) => ({ ...l, ...w })) : f;
    Bc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ad = {
  input: Uc,
  output: Jc,
  default: Ki,
  group: Qc
}, sd = {
  straight: od,
  smoothstep: rd,
  default: Xi,
  step: id
}, j0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Ri;
  Zc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Bc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Uo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Rs(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: $e(null),
    nodes: W0(e, s, l, d, f),
    nodeLookup: cn(s),
    parentLookup: cn(l),
    edgeLookup: cn(c),
    visibleNodes: cn([]),
    edges: K0(t, u, c),
    visibleEdges: cn([]),
    connectionLookup: cn(u),
    height: $e(500),
    width: $e(500),
    minZoom: $e(0.5),
    maxZoom: $e(2),
    nodeOrigin: $e(d),
    nodeDragThreshold: $e(1),
    nodeExtent: $e(f),
    translateExtent: $e(Ri),
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
    selectionMode: $e(Zi.Partial),
    nodeTypes: $e(ad),
    edgeTypes: $e(sd),
    viewport: $e(v),
    connectionMode: $e(Tr.Strict),
    domNode: $e(null),
    connection: cn(ns),
    connectionLineType: $e(Kr.Bezier),
    connectionRadius: $e(20),
    isValidConnection: $e(() => !0),
    nodesDraggable: $e(!0),
    nodesConnectable: $e(!0),
    elementsSelectable: $e(!0),
    selectNodesOnDrag: $e(!0),
    markers: cn([]),
    defaultMarkerColor: $e("#b1b1b7"),
    lib: cn("svelte"),
    onlyRenderVisibleElements: $e(!1),
    onerror: $e(Kp),
    ondelete: $e(void 0),
    onedgecreate: $e(void 0),
    onconnect: $e(void 0),
    onconnectstart: $e(void 0),
    onconnectend: $e(void 0),
    onbeforedelete: $e(void 0),
    nodesInitialized: $e(!1),
    edgesInitialized: $e(!1),
    viewportInitialized: $e(!1),
    initialized: cn(!1)
  };
};
function X0(e) {
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
function F0(e) {
  return cr([
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
function ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = j0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(x) {
    s.nodeTypes.set({
      ...ad,
      ...x
    });
  }
  function u(x) {
    s.edgeTypes.set({
      ...sd,
      ...x
    });
  }
  function c(x) {
    const P = q(s.edges);
    s.edges.set(t0(x, P));
  }
  const d = (x, P = !1) => {
    var M;
    const D = q(s.nodeLookup);
    for (const [Z, W] of x) {
      const F = (M = D.get(Z)) == null ? void 0 : M.internals.userNode;
      F && (F.position = W.position, F.dragging = P);
    }
    s.nodes.update((Z) => Z);
  };
  function f(x) {
    var P, M, D;
    const Z = q(s.nodeLookup), W = q(s.parentLookup), { changes: F, updatedInternals: le } = v0(x, Z, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (le) {
      if (u0(Z, W, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const G = q(s.fitViewOptions), X = w({
          ...G,
          nodes: G == null ? void 0 : G.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const G of F) {
        const X = (P = Z.get(G.id)) == null ? void 0 : P.internals.userNode;
        if (X)
          switch (G.type) {
            case "dimensions": {
              const ae = { ...X.measured, ...G.dimensions };
              G.setAttributes && (X.width = ((M = G.dimensions) == null ? void 0 : M.width) ?? X.width, X.height = ((D = G.dimensions) == null ? void 0 : D.height) ?? X.height), X.measured = ae;
              break;
            }
            case "position":
              X.position = G.position ?? X.position;
              break;
          }
      }
      s.nodes.update((G) => G), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(x) {
    const P = q(s.panZoom), M = q(s.domNode);
    if (!P || !M)
      return Promise.resolve(!1);
    const { width: D, height: Z } = Zs(M), W = Al(q(s.nodeLookup), x);
    return Il({
      nodes: W,
      width: D,
      height: Z,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, x);
  }
  function w(x) {
    const P = q(s.panZoom);
    if (!P)
      return !1;
    const M = Al(q(s.nodeLookup), x);
    return Il({
      nodes: M,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, x), M.size > 0;
  }
  function b(x, P) {
    const M = q(s.panZoom);
    return M ? M.scaleBy(x, P) : Promise.resolve(!1);
  }
  function $(x) {
    return b(1.2, x);
  }
  function C(x) {
    return b(1 / 1.2, x);
  }
  function h(x) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([x, q(s.maxZoom)]), s.minZoom.set(x));
  }
  function k(x) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([q(s.minZoom), x]), s.maxZoom.set(x));
  }
  function p(x) {
    const P = q(s.panZoom);
    P && (P.setTranslateExtent(x), s.translateExtent.set(x));
  }
  function _(x) {
    let P = !1;
    return x.forEach((M) => {
      M.selected && (M.selected = !1, P = !0);
    }), P;
  }
  function T(x) {
    var P;
    (P = q(s.panZoom)) == null || P.setClickDistance(x);
  }
  function E(x) {
    _((x == null ? void 0 : x.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), _((x == null ? void 0 : x.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (x) => {
    var P;
    if (x) {
      const M = q(s.nodes), D = q(s.edges), Z = M.filter((G) => G.selected), W = D.filter((G) => G.selected), { nodes: F, edges: le } = await Nc({
        nodesToRemove: Z,
        edgesToRemove: W,
        nodes: M,
        edges: D,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || le.length) && (s.nodes.update((G) => G.filter((X) => !F.some((ae) => ae.id === X.id))), s.edges.update((G) => G.filter((X) => !le.some((ae) => ae.id === X.id))), (P = q(s.ondelete)) == null || P({
        nodes: F,
        edges: le
      }));
    }
  });
  function H(x) {
    const P = q(s.multiselectionKeyPressed);
    s.nodes.update((M) => M.map((D) => {
      const Z = x.includes(D.id), W = P && D.selected || Z;
      return D.selected = W, D;
    })), P || s.edges.update((M) => M.map((D) => (D.selected = !1, D)));
  }
  function N(x) {
    const P = q(s.multiselectionKeyPressed);
    s.edges.update((M) => M.map((D) => {
      const Z = x.includes(D.id), W = P && D.selected || Z;
      return D.selected = W, D;
    })), P || s.nodes.update((M) => M.map((D) => (D.selected = !1, D)));
  }
  function L(x) {
    var P;
    const M = (P = q(s.nodes)) == null ? void 0 : P.find((D) => D.id === x);
    if (!M) {
      console.warn("012", eo.error012(x));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), M.selected ? M.selected && q(s.multiselectionKeyPressed) && E({ nodes: [M], edges: [] }) : H([x]);
  }
  function I(x) {
    const P = q(s.viewport);
    return g0({
      delta: x,
      panZoom: q(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const O = $e(ns), Y = (x) => {
    O.set({ ...x });
  };
  function S() {
    O.set(ns);
  }
  function V() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: X0(s),
    visibleNodes: F0(s),
    connection: cr([O, s.viewport], ([x, P]) => x.inProgress ? {
      ...x,
      to: Jo(x.to, [P.x, P.y, P.zoom])
    } : { ...x }),
    markers: cr([s.edges, s.defaultMarkerColor, s.flowId], ([x, P, M]) => a0(x, { defaultColor: P, id: M })),
    initialized: (() => {
      let x = !1;
      const P = q(s.nodes).length, M = q(s.edges).length;
      return cr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([D, Z, W]) => x || (P === 0 ? x = W : M === 0 ? x = W && D : x = W && D && Z, x));
    })(),
    // actions
    syncNodeStores: (x) => Z0(s.nodes, x),
    syncEdgeStores: (x) => Y0(s.edges, x),
    syncViewport: (x) => B0(s.panZoom, s.viewport, x),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: $,
    zoomOut: C,
    fitView: (x) => v(x),
    setMinZoom: h,
    setMaxZoom: k,
    setTranslateExtent: p,
    setPaneClickDistance: T,
    unselectNodesAndEdges: E,
    addSelectedNodes: H,
    addSelectedEdges: N,
    handleNodeSelection: L,
    panBy: I,
    updateConnection: Y,
    cancelConnection: S,
    reset: V
  };
}
function nt() {
  const e = Sr(pa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function q0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Ur(pa, {
    getStore: () => s
  }), s;
}
function Ql(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = N0({
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
var G0 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const U0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ud(e, t) {
  ge(t, !1), st(e, U0);
  const [n, r] = ft(), o = () => ee(M, "$panActivationKeyPressed", n), i = () => ee(Y, "$minZoom", n), a = () => ee(S, "$maxZoom", n), s = () => ee(D, "$zoomActivationKeyPressed", n), l = () => ee(O, "$selectionRect", n), u = () => ee(x, "$translateExtent", n), c = () => ee(P, "$lib", n), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), $ = y(t, "onMove", 12, void 0), C = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), k = y(t, "preventScrolling", 12), p = y(t, "zoomOnScroll", 12), _ = y(t, "zoomOnDoubleClick", 12), T = y(t, "zoomOnPinch", 12), E = y(t, "panOnDrag", 12), H = y(t, "panOnScroll", 12), N = y(t, "paneClickDistance", 12);
  const {
    viewport: L,
    panZoom: I,
    selectionRect: O,
    minZoom: Y,
    maxZoom: S,
    dragging: V,
    translateExtent: x,
    lib: P,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: D,
    viewportInitialized: Z
  } = nt(), W = (X) => L.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  ln(() => {
    Hi(Z, !0);
  }), ye(() => Q(w()), () => {
    U(d, w() || { x: 0, y: 0, zoom: 1 });
  }), ye(
    () => (o(), Q(E())),
    () => {
      U(f, o() || E());
    }
  ), ye(
    () => (o(), Q(H())),
    () => {
      U(v, o() || H());
    }
  ), _t(), Be();
  var F = G0(), le = j(F);
  Mt(le, t, "default", {}), K(F), Tt(F, (X, ae) => Ql == null ? void 0 : Ql(X, ae), () => ({
    viewport: L,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: V,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: $(),
    onPanZoomEnd: C(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: T(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || dr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof k() == "boolean" ? k() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: N(),
    onTransformChange: W
  })), A(e, F);
  var G = he({
    get initialViewport() {
      return w();
    },
    set initialViewport(X) {
      w(X), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), m();
    },
    get onMove() {
      return $();
    },
    set onMove(X) {
      $(X), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(X) {
      C(X), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), m();
    },
    get preventScrolling() {
      return k();
    },
    set preventScrolling(X) {
      k(X), m();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(X) {
      p(X), m();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(X) {
      _(X), m();
    },
    get zoomOnPinch() {
      return T();
    },
    set zoomOnPinch(X) {
      T(X), m();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(X) {
      E(X), m();
    },
    get panOnScroll() {
      return H();
    },
    set panOnScroll(X) {
      H(X), m();
    },
    get paneClickDistance() {
      return N();
    },
    set paneClickDistance(X) {
      N(X), m();
    }
  });
  return r(), G;
}
de(
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
  ge(t, !1), st(e, Q0);
  const [n, r] = ft(), o = () => ee(S, "$panActivationKeyPressed", n), i = () => ee(O, "$selectionKeyPressed", n), a = () => ee(L, "$selectionRect", n), s = () => ee(N, "$elementsSelectable", n), l = () => ee(I, "$selectionRectMode", n), u = () => ee(T, "$edges", n), c = () => ee(_, "$nodeLookup", n), d = () => ee(E, "$viewport", n), f = () => ee(Y, "$selectionMode", n), v = () => ee(H, "$dragging", n), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe();
  let C = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const k = sa(), {
    nodes: p,
    nodeLookup: _,
    edges: T,
    viewport: E,
    dragging: H,
    elementsSelectable: N,
    selectionRect: L,
    selectionRectMode: I,
    selectionKeyPressed: O,
    selectionMode: Y,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: V
  } = nt();
  let x = /* @__PURE__ */ oe(), P = null, M = [], D = !1;
  function Z(ue) {
    if (D) {
      D = !1;
      return;
    }
    k("paneclick", { event: ue }), V(), I.set(null);
  }
  function W(ue) {
    var re, Le;
    if (P = g(x).getBoundingClientRect(), !N || !g(b) || ue.button !== 0 || ue.target !== g(x) || !P)
      return;
    (Le = (re = ue.target) == null ? void 0 : re.setPointerCapture) == null || Le.call(re, ue.pointerId);
    const { x: He, y: Ze } = jn(ue, P);
    V(), L.set({
      width: 0,
      height: 0,
      startX: He,
      startY: Ze,
      x: He,
      y: Ze
    });
  }
  function F(ue) {
    if (!g(b) || !P || !a())
      return;
    D = !0;
    const re = jn(ue, P), Le = a().startX ?? 0, He = a().startY ?? 0, Ze = {
      ...a(),
      x: re.x < Le ? re.x : Le,
      y: re.y < He ? re.y : He,
      width: Math.abs(re.x - Le),
      height: Math.abs(re.y - He)
    }, te = M.map((fe) => fe.id), Ge = rs(M, u()).map((fe) => fe.id);
    M = Vc(
      c(),
      Ze,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Zi.Partial,
      !0
    );
    const Je = rs(M, u()).map((fe) => fe.id), se = M.map((fe) => fe.id);
    (te.length !== se.length || se.some((fe) => !te.includes(fe))) && p.update((fe) => fe.map(tu(se))), (Ge.length !== Je.length || Je.some((fe) => !Ge.includes(fe))) && T.update((fe) => fe.map(tu(Je))), I.set("user"), L.set(Ze);
  }
  function le(ue) {
    var re, Le;
    ue.button === 0 && ((Le = (re = ue.target) == null ? void 0 : re.releasePointerCapture) == null || Le.call(re, ue.pointerId), !g(b) && l() === "user" && ue.target === g(x) && (Z == null || Z(ue)), L.set(null), M.length > 0 && Hi(I, "nodes"), i() && (D = !1));
  }
  const G = (ue) => {
    var re;
    if (Array.isArray(g(w)) && (re = g(w)) != null && re.includes(2)) {
      ue.preventDefault();
      return;
    }
    k("panecontextmenu", { event: ue });
  };
  ye(
    () => (o(), Q(C())),
    () => {
      U(w, o() || C());
    }
  ), ye(
    () => (i(), a(), Q(h()), g(w)),
    () => {
      U(b, i() || a() || h() && g(w) !== !0);
    }
  ), ye(
    () => (s(), g(b), l()),
    () => {
      U($, s() && (g(b) || l() === "user"));
    }
  ), _t(), Be();
  var X = J0(), ae = /* @__PURE__ */ ze(() => g($) ? void 0 : eu(Z, g(x))), ve = /* @__PURE__ */ ze(() => eu(G, g(x)));
  let me;
  var ce = j(X);
  Mt(ce, t, "default", {}), K(X), Dn(X, (ue) => U(x, ue), () => g(x)), Te(
    (ue) => me = Vt(X, 1, "svelte-flow__pane svelte-1esy7hx", null, me, ue),
    [
      () => ({
        draggable: C() === !0 || Array.isArray(C()) && C().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    be
  ), Ue("click", X, function(...ue) {
    var re;
    (re = g(ae)) == null || re.apply(this, ue);
  }), Ue("pointerdown", X, function(...ue) {
    var re;
    (re = g($) ? W : void 0) == null || re.apply(this, ue);
  }), Ue("pointermove", X, function(...ue) {
    var re;
    (re = g($) ? F : void 0) == null || re.apply(this, ue);
  }), Ue("pointerup", X, function(...ue) {
    var re;
    (re = g($) ? le : void 0) == null || re.apply(this, ue);
  }), Ue("contextmenu", X, function(...ue) {
    var re;
    (re = g(ve)) == null || re.apply(this, ue);
  }), A(e, X);
  var Ve = he({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(ue) {
      C(ue), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ue) {
      h(ue), m();
    }
  });
  return r(), Ve;
}
de(cd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var em = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const tm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function dd(e, t) {
  ge(t, !1), st(e, tm);
  const [n, r] = ft(), o = () => ee(i, "$viewport", n), { viewport: i } = nt();
  Be();
  var a = em(), s = j(a);
  Mt(s, t, "default", {}), K(a), Te(() => xt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), he(), r();
}
de(dd, {}, ["default"], [], !0);
function Fi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = m0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = q(n.snapGrid), c = q(n.viewport);
      return {
        nodes: q(n.nodes),
        nodeLookup: q(n.nodeLookup),
        edges: q(n.edges),
        nodeExtent: q(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: q(n.nodeOrigin),
        multiSelectionActive: q(n.multiselectionKeyPressed),
        domNode: q(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: q(n.autoPanOnNodeDrag),
        nodesDraggable: q(n.nodesDraggable),
        selectNodesOnDrag: q(n.selectNodesOnDrag),
        nodeDragThreshold: q(n.nodeDragThreshold),
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
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(ve, "$nodeTypes", n), i = () => ee(re, "$elementsSelectable", n), a = () => ee(Le, "$nodesDraggable", n), s = () => ee(Ge, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let f = y(t, "node", 13), v = y(t, "id", 13), w = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), $ = y(t, "draggable", 13, void 0), C = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), k = y(t, "deletable", 13, !0), p = y(t, "hidden", 13, !1), _ = y(t, "dragging", 13, !1), T = y(t, "resizeObserver", 13, null), E = y(t, "style", 13, void 0), H = y(t, "type", 13, "default"), N = y(t, "isParent", 13, !1), L = y(t, "positionX", 13), I = y(t, "positionY", 13), O = y(t, "sourcePosition", 13, void 0), Y = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), V = y(t, "measuredWidth", 13, void 0), x = y(t, "measuredHeight", 13, void 0), P = y(t, "initialWidth", 13, void 0), M = y(t, "initialHeight", 13, void 0), D = y(t, "width", 13, void 0), Z = y(t, "height", 13, void 0), W = y(t, "dragHandle", 13, void 0), F = y(t, "initialized", 13, !1), le = y(t, "parentId", 13, void 0), G = y(t, "nodeClickDistance", 13, void 0), X = y(t, "class", 13, "");
  const ae = nt(), {
    nodeTypes: ve,
    nodeDragThreshold: me,
    selectNodesOnDrag: ce,
    handleNodeSelection: Ve,
    updateNodeInternals: ue,
    elementsSelectable: re,
    nodesDraggable: Le
  } = ae;
  let He = /* @__PURE__ */ oe(void 0, !0), Ze = /* @__PURE__ */ oe(null, !0);
  const te = sa(), Ge = $e(h());
  let Je = /* @__PURE__ */ oe(void 0, !0), se = /* @__PURE__ */ oe(void 0, !0), fe = /* @__PURE__ */ oe(void 0, !0);
  Ur("svelteflow__node_id", v()), Ur("svelteflow__node_connectable", Ge), Ms(() => {
    var ne;
    g(Ze) && ((ne = T()) == null || ne.unobserve(g(Ze)));
  });
  function Se(ne) {
    C() && (!q(ce) || !$() || q(me) > 0) && Ve(v()), te("nodeclick", { node: f().internals.userNode, event: ne });
  }
  ye(() => Q(H()), () => {
    U(l, H() || "default");
  }), ye(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), ye(
    () => (o(), g(l), Ki),
    () => {
      U(c, o()[g(l)] || Ki);
    }
  ), ye(
    () => (g(u), Q(H())),
    () => {
      g(u) || console.warn("003", eo.error003(H()));
    }
  ), ye(
    () => (Q(D()), Q(Z()), Q(P()), Q(M()), Q(V()), Q(x())),
    () => {
      U(d, nm({
        width: D(),
        height: Z(),
        initialWidth: P(),
        initialHeight: M(),
        measuredWidth: V(),
        measuredHeight: x()
      }));
    }
  ), ye(() => Q(h()), () => {
    Ge.set(!!h());
  }), ye(
    () => (g(Je), g(l), g(se), Q(O()), g(fe), Q(Y()), Q(v()), g(He)),
    () => {
      (g(Je) && g(l) !== g(Je) || g(se) && O() !== g(se) || g(fe) && Y() !== g(fe)) && requestAnimationFrame(() => ue(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(He),
            force: !0
          }
        ]
      ]))), U(Je, g(l)), U(se, O()), U(fe, Y());
    }
  ), ye(
    () => (Q(T()), g(He), g(Ze), Q(F())),
    () => {
      T() && (g(He) !== g(Ze) || !F()) && (g(Ze) && T().unobserve(g(Ze)), g(He) && T().observe(g(He)), U(Ze, g(He)));
    }
  ), _t(), Be(!0);
  var Fe = dt(), Ae = Ce(Fe);
  {
    var vt = (ne) => {
      var Ie = rm();
      let we, Zt;
      var Yt = j(Ie);
      const un = /* @__PURE__ */ be(() => b() ?? !1), Ne = /* @__PURE__ */ be(() => C() ?? i() ?? !0), ut = /* @__PURE__ */ be(() => k() ?? !0), Ye = /* @__PURE__ */ be(() => $() ?? a() ?? !0);
      Fu(Yt, () => g(c), (Re, ct) => {
        ct(Re, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(un);
          },
          get selectable() {
            return g(Ne);
          },
          get deletable() {
            return g(ut);
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return Y();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return g(Ye);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return le();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return L();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return D();
          },
          get height() {
            return Z();
          }
        });
      }), K(Ie), Tt(Ie, (Re, ct) => Fi == null ? void 0 : Fi(Re, ct), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Ve,
        onDrag: (Re, ct, Jt, Et) => {
          te("nodedrag", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStart: (Re, ct, Jt, Et) => {
          te("nodedragstart", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStop: (Re, ct, Jt, Et) => {
          te("nodedragstop", { event: Re, targetNode: Jt, nodes: Et });
        },
        store: ae
      })), Dn(Ie, (Re) => U(He, Re), () => g(He)), en(() => Ue("click", Ie, Se)), en(() => Ue("mouseenter", Ie, (Re) => te("nodemouseenter", { node: f(), event: Re }))), en(() => Ue("mouseleave", Ie, (Re) => te("nodemouseleave", { node: f(), event: Re }))), en(() => Ue("mousemove", Ie, (Re) => te("nodemousemove", { node: f(), event: Re }))), en(() => Ue("contextmenu", Ie, (Re) => te("nodecontextmenu", { node: f(), event: Re }))), Te(
        (Re, ct) => {
          xe(Ie, "data-id", v()), we = Vt(Ie, 1, Re, null, we, ct), Zt = xt(Ie, `${E() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Zt, {
            "z-index": S(),
            transform: `translate(${L() ?? ""}px, ${I() ?? ""}px)`,
            visibility: F() ? "visible" : "hidden"
          });
        },
        [
          () => _n(Rt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])),
          () => ({
            dragging: _(),
            selected: b(),
            draggable: $(),
            connectable: h(),
            selectable: C(),
            nopan: $(),
            parent: N()
          })
        ],
        be
      ), A(ne, Ie);
    };
    ke(Ae, (ne) => {
      p() || ne(vt);
    });
  }
  A(e, Fe);
  var lt = he({
    get node() {
      return f();
    },
    set node(ne) {
      f(ne), m();
    },
    get id() {
      return v();
    },
    set id(ne) {
      v(ne), m();
    },
    get data() {
      return w();
    },
    set data(ne) {
      w(ne), m();
    },
    get selected() {
      return b();
    },
    set selected(ne) {
      b(ne), m();
    },
    get draggable() {
      return $();
    },
    set draggable(ne) {
      $(ne), m();
    },
    get selectable() {
      return C();
    },
    set selectable(ne) {
      C(ne), m();
    },
    get connectable() {
      return h();
    },
    set connectable(ne) {
      h(ne), m();
    },
    get deletable() {
      return k();
    },
    set deletable(ne) {
      k(ne), m();
    },
    get hidden() {
      return p();
    },
    set hidden(ne) {
      p(ne), m();
    },
    get dragging() {
      return _();
    },
    set dragging(ne) {
      _(ne), m();
    },
    get resizeObserver() {
      return T();
    },
    set resizeObserver(ne) {
      T(ne), m();
    },
    get style() {
      return E();
    },
    set style(ne) {
      E(ne), m();
    },
    get type() {
      return H();
    },
    set type(ne) {
      H(ne), m();
    },
    get isParent() {
      return N();
    },
    set isParent(ne) {
      N(ne), m();
    },
    get positionX() {
      return L();
    },
    set positionX(ne) {
      L(ne), m();
    },
    get positionY() {
      return I();
    },
    set positionY(ne) {
      I(ne), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ne) {
      O(ne), m();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(ne) {
      Y(ne), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ne) {
      S(ne), m();
    },
    get measuredWidth() {
      return V();
    },
    set measuredWidth(ne) {
      V(ne), m();
    },
    get measuredHeight() {
      return x();
    },
    set measuredHeight(ne) {
      x(ne), m();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(ne) {
      P(ne), m();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(ne) {
      M(ne), m();
    },
    get width() {
      return D();
    },
    set width(ne) {
      D(ne), m();
    },
    get height() {
      return Z();
    },
    set height(ne) {
      Z(ne), m();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(ne) {
      W(ne), m();
    },
    get initialized() {
      return F();
    },
    set initialized(ne) {
      F(ne), m();
    },
    get parentId() {
      return le();
    },
    set parentId(ne) {
      le(ne), m();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(ne) {
      G(ne), m();
    },
    get class() {
      return X();
    },
    set class(ne) {
      X(ne), m();
    }
  });
  return r(), lt;
}
de(
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
  ge(t, !1), st(e, im);
  const [n, r] = ft(), o = () => ee(c, "$visibleNodes", n), i = () => ee(d, "$nodesDraggable", n), a = () => ee(v, "$elementsSelectable", n), s = () => ee(f, "$nodesConnectable", n), l = () => ee(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = nt(), $ = typeof ResizeObserver > "u" ? null : new ResizeObserver((k) => {
    const p = /* @__PURE__ */ new Map();
    k.forEach((_) => {
      const T = _.target.getAttribute("data-id");
      p.set(T, { id: T, nodeElement: _.target, force: !0 });
    }), w(p);
  });
  Ms(() => {
    $ == null || $.disconnect();
  }), Be();
  var C = om();
  qt(C, 5, o, (k) => k.id, (k, p) => {
    const _ = /* @__PURE__ */ be(() => !!g(p).selected), T = /* @__PURE__ */ be(() => !!g(p).hidden), E = /* @__PURE__ */ be(() => !!(g(p).draggable || i() && typeof g(p).draggable > "u")), H = /* @__PURE__ */ be(() => !!(g(p).selectable || a() && typeof g(p).selectable > "u")), N = /* @__PURE__ */ be(() => !!(g(p).connectable || s() && typeof g(p).connectable > "u")), L = /* @__PURE__ */ be(() => g(p).deletable ?? !0), I = /* @__PURE__ */ be(() => l().has(g(p).id)), O = /* @__PURE__ */ be(() => g(p).type ?? "default"), Y = /* @__PURE__ */ be(() => g(p).internals.z ?? 0), S = /* @__PURE__ */ be(() => Lc(g(p)));
    fd(k, {
      get node() {
        return g(p);
      },
      get id() {
        return g(p).id;
      },
      get data() {
        return g(p).data;
      },
      get selected() {
        return g(_);
      },
      get hidden() {
        return g(T);
      },
      get draggable() {
        return g(E);
      },
      get selectable() {
        return g(H);
      },
      get connectable() {
        return g(N);
      },
      get deletable() {
        return g(L);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(I);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(O);
      },
      get sourcePosition() {
        return g(p).sourcePosition;
      },
      get targetPosition() {
        return g(p).targetPosition;
      },
      get dragging() {
        return g(p).dragging;
      },
      get zIndex() {
        return g(Y);
      },
      get dragHandle() {
        return g(p).dragHandle;
      },
      get initialized() {
        return g(S);
      },
      get width() {
        return g(p).width;
      },
      get height() {
        return g(p).height;
      },
      get initialWidth() {
        return g(p).initialWidth;
      },
      get initialHeight() {
        return g(p).initialHeight;
      },
      get measuredWidth() {
        return g(p).measured.width;
      },
      get measuredHeight() {
        return g(p).measured.height;
      },
      get parentId() {
        return g(p).parentId;
      },
      resizeObserver: $,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(V) {
          We.call(this, t, V);
        },
        nodemouseenter(V) {
          We.call(this, t, V);
        },
        nodemousemove(V) {
          We.call(this, t, V);
        },
        nodemouseleave(V) {
          We.call(this, t, V);
        },
        nodedrag(V) {
          We.call(this, t, V);
        },
        nodedragstart(V) {
          We.call(this, t, V);
        },
        nodedragstop(V) {
          We.call(this, t, V);
        },
        nodecontextmenu(V) {
          We.call(this, t, V);
        }
      }
    });
  }), K(C), A(e, C);
  var h = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(k) {
      u(k), m();
    }
  });
  return r(), h;
}
de(vd, { nodeClickDistance: {} }, [], [], !0);
var am = /* @__PURE__ */ _e('<svg><g role="img"><!></g></svg>');
function gd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(X, "$edgeTypes", n), i = () => ee(ae, "$flowId", n), a = () => ee(ve, "$elementsSelectable", n), s = () => ee(G, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), f = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "id", 13), w = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), $ = y(t, "target", 13, ""), C = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), k = y(t, "zIndex", 13, void 0), p = y(t, "animated", 13, !1), _ = y(t, "selected", 13, !1), T = y(t, "selectable", 13, void 0), E = y(t, "deletable", 13, void 0), H = y(t, "hidden", 13, !1), N = y(t, "label", 13, void 0), L = y(t, "labelStyle", 13, void 0), I = y(t, "markerStart", 13, void 0), O = y(t, "markerEnd", 13, void 0), Y = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), V = y(t, "sourceX", 13), x = y(t, "sourceY", 13), P = y(t, "targetX", 13), M = y(t, "targetY", 13), D = y(t, "sourcePosition", 13), Z = y(t, "targetPosition", 13), W = y(t, "ariaLabel", 13, void 0), F = y(t, "interactionWidth", 13, void 0), le = y(t, "class", 13, "");
  Ur("svelteflow__edge_id", v());
  const {
    edgeLookup: G,
    edgeTypes: X,
    flowId: ae,
    elementsSelectable: ve
  } = nt(), me = sa(), ce = td();
  function Ve(te) {
    const Ge = s().get(v());
    Ge && (ce(v()), me("edgeclick", { event: te, edge: Ge }));
  }
  function ue(te, Ge) {
    const Je = s().get(v());
    Je && me(Ge, { event: te, edge: Je });
  }
  ye(() => Q(w()), () => {
    U(l, w() || "default");
  }), ye(
    () => (o(), g(l), Xi),
    () => {
      U(u, o()[g(l)] || Xi);
    }
  ), ye(
    () => (Q(I()), i()),
    () => {
      U(c, I() ? `url('#${as(I(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(O()), i()),
    () => {
      U(d, O() ? `url('#${as(O(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(T()), a()),
    () => {
      U(f, T() ?? a());
    }
  ), _t(), Be(!0);
  var re = dt(), Le = Ce(re);
  {
    var He = (te) => {
      var Ge = am();
      let Je;
      var se = j(Ge);
      let fe;
      var Se = j(se);
      const Fe = /* @__PURE__ */ be(() => E() ?? !0);
      Fu(Se, () => g(u), (Ae, vt) => {
        vt(Ae, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return $();
          },
          get sourceX() {
            return V();
          },
          get sourceY() {
            return x();
          },
          get targetX() {
            return P();
          },
          get targetY() {
            return M();
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return p();
          },
          get selected() {
            return _();
          },
          get label() {
            return N();
          },
          get labelStyle() {
            return L();
          },
          get data() {
            return C();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return F();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Fe);
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
      }), K(se), K(Ge), Te(
        (Ae, vt) => {
          Je = xt(Ge, "", Je, { "z-index": k() }), fe = Vt(se, 0, Ae, null, fe, vt), xe(se, "data-id", v()), xe(se, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${b()} to ${$()}`);
        },
        [
          () => _n(Rt(["svelte-flow__edge", le()])),
          () => ({
            animated: p(),
            selected: _(),
            selectable: g(f)
          })
        ],
        be
      ), Ue("click", se, Ve), Ue("contextmenu", se, (Ae) => {
        ue(Ae, "edgecontextmenu");
      }), Ue("mouseenter", se, (Ae) => {
        ue(Ae, "edgemouseenter");
      }), Ue("mouseleave", se, (Ae) => {
        ue(Ae, "edgemouseleave");
      }), A(te, Ge);
    };
    ke(Le, (te) => {
      H() || te(He);
    });
  }
  A(e, re);
  var Ze = he({
    get id() {
      return v();
    },
    set id(te) {
      v(te), m();
    },
    get type() {
      return w();
    },
    set type(te) {
      w(te), m();
    },
    get source() {
      return b();
    },
    set source(te) {
      b(te), m();
    },
    get target() {
      return $();
    },
    set target(te) {
      $(te), m();
    },
    get data() {
      return C();
    },
    set data(te) {
      C(te), m();
    },
    get style() {
      return h();
    },
    set style(te) {
      h(te), m();
    },
    get zIndex() {
      return k();
    },
    set zIndex(te) {
      k(te), m();
    },
    get animated() {
      return p();
    },
    set animated(te) {
      p(te), m();
    },
    get selected() {
      return _();
    },
    set selected(te) {
      _(te), m();
    },
    get selectable() {
      return T();
    },
    set selectable(te) {
      T(te), m();
    },
    get deletable() {
      return E();
    },
    set deletable(te) {
      E(te), m();
    },
    get hidden() {
      return H();
    },
    set hidden(te) {
      H(te), m();
    },
    get label() {
      return N();
    },
    set label(te) {
      N(te), m();
    },
    get labelStyle() {
      return L();
    },
    set labelStyle(te) {
      L(te), m();
    },
    get markerStart() {
      return I();
    },
    set markerStart(te) {
      I(te), m();
    },
    get markerEnd() {
      return O();
    },
    set markerEnd(te) {
      O(te), m();
    },
    get sourceHandle() {
      return Y();
    },
    set sourceHandle(te) {
      Y(te), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(te) {
      S(te), m();
    },
    get sourceX() {
      return V();
    },
    set sourceX(te) {
      V(te), m();
    },
    get sourceY() {
      return x();
    },
    set sourceY(te) {
      x(te), m();
    },
    get targetX() {
      return P();
    },
    set targetX(te) {
      P(te), m();
    },
    get targetY() {
      return M();
    },
    set targetY(te) {
      M(te), m();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(te) {
      D(te), m();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(te) {
      Z(te), m();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(te) {
      W(te), m();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(te) {
      F(te), m();
    },
    get class() {
      return le();
    },
    set class(te) {
      le(te), m();
    }
  });
  return r(), Ze;
}
de(
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
  ge(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return ln(() => {
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
de(hd, { onMount: {}, onDestroy: {} }, [], [], !0);
var sm = /* @__PURE__ */ _e("<defs></defs>");
function pd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$markers", n), { markers: i } = nt();
  Be();
  var a = sm();
  qt(a, 5, o, (s) => s.id, (s, l) => {
    md(s, bt(() => g(l)));
  }), K(a), A(e, a), he(), r();
}
de(pd, {}, [], [], !0);
var lm = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function md(e, t) {
  ge(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Be();
  var c = cm(), d = j(c);
  {
    var f = (w) => {
      var b = lm();
      Te(() => {
        xe(b, "stroke", l()), xe(b, "stroke-width", u());
      }), A(w, b);
    }, v = (w, b) => {
      {
        var $ = (C) => {
          var h = um();
          Te(() => {
            xe(h, "stroke", l()), xe(h, "stroke-width", u()), xe(h, "fill", l());
          }), A(C, h);
        };
        ke(
          w,
          (C) => {
            r() === Ro.ArrowClosed && C($);
          },
          b
        );
      }
    };
    ke(d, (w) => {
      r() === Ro.Arrow ? w(f) : w(v, !1);
    });
  }
  return K(c), Te(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${i()}`), xe(c, "markerUnits", a()), xe(c, "orient", s());
  }), A(e, c), he({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), m();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), m();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(w) {
      a(w), m();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), m();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), m();
    }
  });
}
de(
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
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(s, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = nt();
  ln(() => {
    a() && u(a());
  }), Be();
  var d = dm(), f = j(d), v = j(f);
  pd(v, {}), K(f);
  var w = B(f, 2);
  qt(w, 1, o, (h) => h.id, (h, k) => {
    const p = /* @__PURE__ */ be(() => g(k).selectable ?? i()), _ = /* @__PURE__ */ be(() => g(k).type || "default");
    gd(h, {
      get id() {
        return g(k).id;
      },
      get source() {
        return g(k).source;
      },
      get target() {
        return g(k).target;
      },
      get data() {
        return g(k).data;
      },
      get style() {
        return g(k).style;
      },
      get animated() {
        return g(k).animated;
      },
      get selected() {
        return g(k).selected;
      },
      get selectable() {
        return g(p);
      },
      get deletable() {
        return g(k).deletable;
      },
      get hidden() {
        return g(k).hidden;
      },
      get label() {
        return g(k).label;
      },
      get labelStyle() {
        return g(k).labelStyle;
      },
      get markerStart() {
        return g(k).markerStart;
      },
      get markerEnd() {
        return g(k).markerEnd;
      },
      get sourceHandle() {
        return g(k).sourceHandle;
      },
      get targetHandle() {
        return g(k).targetHandle;
      },
      get sourceX() {
        return g(k).sourceX;
      },
      get sourceY() {
        return g(k).sourceY;
      },
      get targetX() {
        return g(k).targetX;
      },
      get targetY() {
        return g(k).targetY;
      },
      get sourcePosition() {
        return g(k).sourcePosition;
      },
      get targetPosition() {
        return g(k).targetPosition;
      },
      get ariaLabel() {
        return g(k).ariaLabel;
      },
      get interactionWidth() {
        return g(k).interactionWidth;
      },
      get class() {
        return g(k).class;
      },
      get type() {
        return g(_);
      },
      get zIndex() {
        return g(k).zIndex;
      },
      $$events: {
        edgeclick(T) {
          We.call(this, t, T);
        },
        edgecontextmenu(T) {
          We.call(this, t, T);
        },
        edgemouseenter(T) {
          We.call(this, t, T);
        },
        edgemouseleave(T) {
          We.call(this, t, T);
        }
      }
    });
  });
  var b = B(w, 2);
  {
    var $ = (h) => {
      hd(h, {
        onMount: () => {
          Hi(l, !0);
        },
        onDestroy: () => {
          Hi(l, !1);
        }
      });
    };
    ke(b, (h) => {
      o().length > 0 && h($);
    });
  }
  K(d), A(e, d);
  var C = he({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
    }
  });
  return r(), C;
}
de(yd, { defaultEdgeOptions: {} }, [], [], !0);
var fm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const vm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ks(e, t) {
  ge(t, !1), st(e, vm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = dt(), l = Ce(s);
  {
    var u = (c) => {
      var d = fm();
      let f;
      Te(() => f = xt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), A(c, d);
    };
    ke(l, (c) => {
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
function wd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(a, "$selectionRect", n), i = () => ee(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = nt();
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
  Ks(e, {
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
de(wd, {}, [], [], !0);
var gm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const hm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function bd(e, t) {
  ge(t, !1), st(e, hm);
  const [n, r] = ft(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), a = () => ee(u, "$nodes", n), s = nt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ oe(null);
  function v(h) {
    const k = a().filter((p) => p.selected);
    d("selectioncontextmenu", { nodes: k, event: h });
  }
  function w(h) {
    const k = a().filter((p) => p.selected);
    d("selectionclick", { nodes: k, event: h });
  }
  ye(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (U(f, Uo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), _t(), Be();
  var b = dt(), $ = Ce(b);
  {
    var C = (h) => {
      var k = gm(), p = j(k);
      Ks(p, { width: "100%", height: "100%", x: 0, y: 0 }), K(k), Tt(k, (_, T) => Fi == null ? void 0 : Fi(_, T), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, T, E, H) => {
          d("nodedrag", { event: _, targetNode: null, nodes: H });
        },
        onDragStart: (_, T, E, H) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: H });
        },
        onDragStop: (_, T, E, H) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: H });
        }
      })), en(() => Ue("contextmenu", k, v)), en(() => Ue("click", k, w)), en(() => Ue("keyup", k, () => {
      })), Te(() => xt(k, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), A(h, k);
    };
    ke($, (h) => {
      o() === "nodes" && g(f) && Bn(g(f).x) && Bn(g(f).y) && h(C);
    });
  }
  A(e, b), he(), r();
}
de(bd, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: w, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          ($) => typeof $ == "string" ? [$] : $
        ).some(
          ($) => $.every((C) => l[C])
        ))
          continue;
        if (a.key === f) {
          w && a.preventDefault();
          const $ = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), v == null || v($);
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
  ge(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Bi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = nt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function w(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function $(h, k) {
    return (Array.isArray(h) ? h : [h]).map((p) => {
      const _ = b(p);
      return {
        key: _,
        modifier: w(p),
        enabled: _ !== null,
        callback: k
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Be(), Ue("blur", Kt, C), Ue("contextmenu", Kt, C), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(n(), () => s.set(!0)),
    type: "keydown"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(n(), () => s.set(!1)),
    type: "keyup"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(r(), () => l.set(!0)),
    type: "keydown"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(r(), () => l.set(!1)),
    type: "keyup"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !qp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(o(), () => u.set(!1)),
    type: "keyup"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(i(), () => c.set(!0)),
    type: "keydown"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(i(), () => c.set(!1)),
    type: "keyup"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(a(), () => d.set(!0)),
    type: "keydown"
  })), Tt(Kt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(a(), () => d.set(!1)),
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
var pm = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), mm = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function $d(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(v, "$connection", n), i = () => ee(w, "$connectionLineType", n), a = () => ee(d, "$width", n), s = () => ee(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = nt();
  let b = /* @__PURE__ */ oe(null);
  ye(
    () => (o(), Q(c()), i(), g(b), is),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: _, fromPosition: T, toPosition: E } = o(), H = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: T,
          targetX: _.x,
          targetY: _.y,
          targetPosition: E
        };
        switch (i()) {
          case Kr.Bezier:
            ((N) => U(b, N[0]))(Ic(H));
            break;
          case Kr.Step:
            ((N) => U(b, N[0]))(Wi({ ...H, borderRadius: 0 }));
            break;
          case Kr.SmoothStep:
            ((N) => U(b, N[0]))(Wi(H));
            break;
          default:
            ((N) => U(b, N[0]))(is(H));
        }
      }
    }
  ), _t(), Be();
  var $ = dt(), C = Ce($);
  {
    var h = (p) => {
      var _ = mm(), T = j(_), E = j(T);
      Mt(E, t, "connectionLine", {});
      var H = B(E);
      {
        var N = (L) => {
          var I = pm();
          Te(() => {
            xe(I, "d", g(b)), xt(I, u());
          }), A(L, I);
        };
        ke(H, (L) => {
          c() || L(N);
        });
      }
      K(T), K(_), Te(
        (L) => {
          xe(_, "width", a()), xe(_, "height", s()), xt(_, l()), Vt(T, 0, L);
        },
        [
          () => _n(Rt([
            "svelte-flow__connection",
            Rp(o().isValid)
          ]))
        ],
        be
      ), A(p, _);
    };
    ke(C, (p) => {
      o().inProgress && p(h);
    });
  }
  A(e, $);
  var k = he({
    get containerStyle() {
      return l();
    },
    set containerStyle(p) {
      l(p), m();
    },
    get style() {
      return u();
    },
    set style(p) {
      u(p), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(p) {
      c(p), m();
    }
  });
  return r(), k;
}
de(
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
function ei(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = ft(), a = () => ee(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = nt();
  ye(() => Q(l()), () => {
    U(s, `${l()}`.split("-"));
  }), _t(), Be();
  var f = ym();
  let v;
  var w = j(f);
  Mt(w, t, "default", {}), K(f), Te(
    ($) => v = xn(f, v, {
      class: $,
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
    set position($) {
      l($), m();
    },
    get style() {
      return u();
    },
    set style($) {
      u($), m();
    },
    get class() {
      return c();
    },
    set class($) {
      c($), m();
    }
  });
  return i(), b;
}
de(ei, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var wm = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Cd(e, t) {
  ge(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Be();
  var o = dt(), i = Ce(o);
  {
    var a = (s) => {
      ei(s, {
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
    ke(i, (s) => {
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
de(Cd, { proOptions: {}, position: {} }, [], [], !0);
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
  return cn("light", (t) => {
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
var Cm = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), km = /* @__PURE__ */ ie("<!> <!>", 1), _m = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Sm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function kd(e, t) {
  const n = Wv(t), r = ht(t, [
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
  ge(t, !1), st(e, Sm);
  const [i, a] = ft(), s = () => ee(k(), "$viewport", i), l = () => ee(vo, "$initialized", i), u = () => ee(g(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), v = y(t, "edges", 12), w = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), $ = y(t, "minZoom", 12, void 0), C = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), k = y(t, "viewport", 12, void 0), p = y(t, "nodeTypes", 12, void 0), _ = y(t, "edgeTypes", 12, void 0), T = y(t, "selectionKey", 12, void 0), E = y(t, "selectionMode", 12, void 0), H = y(t, "panActivationKey", 12, void 0), N = y(t, "multiSelectionKey", 12, void 0), L = y(t, "zoomActivationKey", 12, void 0), I = y(t, "nodesDraggable", 12, void 0), O = y(t, "nodesConnectable", 12, void 0), Y = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), V = y(t, "snapGrid", 12, void 0), x = y(t, "deleteKey", 12, void 0), P = y(t, "connectionRadius", 12, void 0), M = y(t, "connectionLineType", 12, void 0), D = y(t, "connectionMode", 28, () => Tr.Strict), Z = y(t, "connectionLineStyle", 12, ""), W = y(t, "connectionLineContainerStyle", 12, ""), F = y(t, "onMoveStart", 12, void 0), le = y(t, "onMove", 12, void 0), G = y(t, "onMoveEnd", 12, void 0), X = y(t, "isValidConnection", 12, void 0), ae = y(t, "translateExtent", 12, void 0), ve = y(t, "nodeExtent", 12, void 0), me = y(t, "onlyRenderVisibleElements", 12, void 0), ce = y(t, "panOnScrollMode", 28, () => dr.Free), Ve = y(t, "preventScrolling", 12, !0), ue = y(t, "zoomOnScroll", 12, !0), re = y(t, "zoomOnDoubleClick", 12, !0), Le = y(t, "zoomOnPinch", 12, !0), He = y(t, "panOnScroll", 12, !1), Ze = y(t, "panOnDrag", 12, !0), te = y(t, "selectionOnDrag", 12, void 0), Ge = y(t, "autoPanOnConnect", 12, !0), Je = y(t, "autoPanOnNodeDrag", 12, !0), se = y(t, "onerror", 12, void 0), fe = y(t, "ondelete", 12, void 0), Se = y(t, "onedgecreate", 12, void 0), Fe = y(t, "attributionPosition", 12, void 0), Ae = y(t, "proOptions", 12, void 0), vt = y(t, "defaultEdgeOptions", 12, void 0), lt = y(t, "width", 12, void 0), ne = y(t, "height", 12, void 0), Ie = y(t, "colorMode", 12, "light"), we = y(t, "onconnect", 12, void 0), Zt = y(t, "onconnectstart", 12, void 0), Yt = y(t, "onconnectend", 12, void 0), un = y(t, "onbeforedelete", 12, void 0), Ne = y(t, "oninit", 12, void 0), ut = y(t, "nodeOrigin", 12, void 0), Ye = y(t, "paneClickDistance", 12, 0), Re = y(t, "nodeClickDistance", 12, 0), ct = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = y(t, "style", 12, void 0), Et = y(t, "class", 12, void 0), er = /* @__PURE__ */ oe(), mt = /* @__PURE__ */ oe(), $t = /* @__PURE__ */ oe();
  const Pn = s() || h(), ot = kv(pa) ? nt() : q0({
    nodes: q(f()),
    edges: q(v()),
    width: lt(),
    height: ne(),
    fitView: w(),
    nodeOrigin: ut(),
    nodeExtent: ve()
  });
  ln(() => (ot.width.set(g(mt)), ot.height.set(g($t)), ot.domNode.set(g(er)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport(k()), w() !== void 0 && ot.fitViewOnInit.set(w()), b() && ot.fitViewOptions.set(b()), nu(ot, {
    nodeTypes: p(),
    edgeTypes: _(),
    minZoom: $(),
    maxZoom: C(),
    translateExtent: ae(),
    paneClickDistance: Ye()
  }), () => {
    ot.reset();
  }));
  const { initialized: vo } = ot;
  let tr = /* @__PURE__ */ oe(!1);
  ye(
    () => (g(mt), g($t)),
    () => {
      g(mt) !== void 0 && g($t) !== void 0 && (ot.width.set(g(mt)), ot.height.set(g($t)));
    }
  ), ye(
    () => (g(tr), l(), Q(Ne())),
    () => {
      var R;
      !g(tr) && l() && ((R = Ne()) == null || R(), U(tr, !0));
    }
  ), ye(
    () => (Q(d()), Q(M()), Q(P()), Q(E()), Q(V()), Q(ct()), Q(I()), Q(O()), Q(S()), Q(me()), Q(X()), Q(Ge()), Q(Je()), Q(se()), Q(fe()), Q(Se()), Q(D()), Q(Y()), Q(we()), Q(Zt()), Q(Yt()), Q(un()), Q(ut()), ru),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: M(),
        connectionRadius: P(),
        selectionMode: E(),
        snapGrid: V(),
        defaultMarkerColor: ct(),
        nodesDraggable: I(),
        nodesConnectable: O(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: me(),
        isValidConnection: X(),
        autoPanOnConnect: Ge(),
        autoPanOnNodeDrag: Je(),
        onerror: se(),
        ondelete: fe(),
        onedgecreate: Se(),
        connectionMode: D(),
        nodeDragThreshold: Y(),
        onconnect: we(),
        onconnectstart: Zt(),
        onconnectend: Yt(),
        onbeforedelete: un(),
        nodeOrigin: ut()
      };
      ru(ot, R);
    }
  ), ye(
    () => (Q(p()), Q(_()), Q($()), Q(C()), Q(ae()), Q(Ye())),
    () => {
      nu(ot, {
        nodeTypes: p(),
        edgeTypes: _(),
        minZoom: $(),
        maxZoom: C(),
        translateExtent: ae(),
        paneClickDistance: Ye()
      });
    }
  ), ye(
    () => Q(Ie()),
    () => {
      e1(U(c, $m(Ie())), "$colorModeClass", i);
    }
  ), _t(), Be();
  var Ht = _m();
  let wr;
  var br = j(Ht);
  xd(br, {
    get selectionKey() {
      return T();
    },
    get deleteKey() {
      return x();
    },
    get panActivationKey() {
      return H();
    },
    get multiSelectionKey() {
      return N();
    },
    get zoomActivationKey() {
      return L();
    }
  });
  var Dr = B(br, 2);
  const go = /* @__PURE__ */ be(() => ce() === void 0 ? dr.Free : ce()), ii = /* @__PURE__ */ be(() => Ve() === void 0 ? !0 : Ve()), ai = /* @__PURE__ */ be(() => ue() === void 0 ? !0 : ue()), xa = /* @__PURE__ */ be(() => re() === void 0 ? !0 : re()), $a = /* @__PURE__ */ be(() => Le() === void 0 ? !0 : Le()), Ca = /* @__PURE__ */ be(() => He() === void 0 ? !1 : He()), ka = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze()), z = /* @__PURE__ */ be(() => Ye() === void 0 ? 0 : Ye());
  ud(Dr, {
    initialViewport: Pn,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return le();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return g(go);
    },
    get preventScrolling() {
      return g(ii);
    },
    get zoomOnScroll() {
      return g(ai);
    },
    get zoomOnDoubleClick() {
      return g(xa);
    },
    get zoomOnPinch() {
      return g($a);
    },
    get panOnScroll() {
      return g(Ca);
    },
    get panOnDrag() {
      return g(ka);
    },
    get paneClickDistance() {
      return g(z);
    },
    children: (R, it) => {
      const je = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze());
      cd(R, {
        get panOnDrag() {
          return g(je);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(De) {
            We.call(this, t, De);
          },
          panecontextmenu(De) {
            We.call(this, t, De);
          }
        },
        children: (De, Pt) => {
          var gt = km(), pt = Ce(gt);
          dd(pt, {
            children: (nr, rr) => {
              var kt = Cm(), Lr = Ce(kt);
              yd(Lr, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(Xe) {
                    We.call(this, t, Xe);
                  },
                  edgecontextmenu(Xe) {
                    We.call(this, t, Xe);
                  },
                  edgemouseenter(Xe) {
                    We.call(this, t, Xe);
                  },
                  edgemouseleave(Xe) {
                    We.call(this, t, Xe);
                  }
                }
              });
              var si = B(Lr, 2);
              $d(si, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Xe, Kw) => {
                    var Us = dt(), bf = Ce(Us);
                    Mt(bf, t, "connectionLine", {}), A(Xe, Us);
                  }
                }
              });
              var li = B(si, 6);
              vd(li, {
                get nodeClickDistance() {
                  return Re();
                },
                $$events: {
                  nodeclick(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodemouseenter(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodemousemove(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodemouseleave(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedragstart(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedrag(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedragstop(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodecontextmenu(Xe) {
                    We.call(this, t, Xe);
                  }
                }
              });
              var wf = B(li, 2);
              bd(wf, {
                $$events: {
                  selectionclick(Xe) {
                    We.call(this, t, Xe);
                  },
                  selectioncontextmenu(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedragstart(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedrag(Xe) {
                    We.call(this, t, Xe);
                  },
                  nodedragstop(Xe) {
                    We.call(this, t, Xe);
                  }
                }
              }), A(nr, kt);
            },
            $$slots: { default: !0 }
          });
          var Bt = B(pt, 2);
          wd(Bt, {}), A(De, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var J = B(Dr, 2);
  Cd(J, {
    get proOptions() {
      return Ae();
    },
    get position() {
      return Fe();
    }
  });
  var pe = B(J, 2);
  Mt(pe, t, "default", {}), K(Ht), Dn(Ht, (R) => U(er, R), () => g(er)), Te(
    (R) => wr = xn(
      Ht,
      wr,
      {
        style: Jt(),
        class: R,
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
  ), gl(Ht, "clientWidth", (R) => U(mt, R)), gl(Ht, "clientHeight", (R) => U($t, R)), Ue("dragover", Ht, function(R) {
    We.call(this, t, R);
  }), Ue("drop", Ht, function(R) {
    We.call(this, t, R);
  }), A(e, Ht);
  var Ee = he({
    get id() {
      return d();
    },
    set id(R) {
      d(R), m();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), m();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), m();
    },
    get fitView() {
      return w();
    },
    set fitView(R) {
      w(R), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), m();
    },
    get minZoom() {
      return $();
    },
    set minZoom(R) {
      $(R), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(R) {
      C(R), m();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), m();
    },
    get viewport() {
      return k();
    },
    set viewport(R) {
      k(R), m();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(R) {
      p(R), m();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(R) {
      _(R), m();
    },
    get selectionKey() {
      return T();
    },
    set selectionKey(R) {
      T(R), m();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(R) {
      E(R), m();
    },
    get panActivationKey() {
      return H();
    },
    set panActivationKey(R) {
      H(R), m();
    },
    get multiSelectionKey() {
      return N();
    },
    set multiSelectionKey(R) {
      N(R), m();
    },
    get zoomActivationKey() {
      return L();
    },
    set zoomActivationKey(R) {
      L(R), m();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(R) {
      I(R), m();
    },
    get nodesConnectable() {
      return O();
    },
    set nodesConnectable(R) {
      O(R), m();
    },
    get nodeDragThreshold() {
      return Y();
    },
    set nodeDragThreshold(R) {
      Y(R), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(R) {
      S(R), m();
    },
    get snapGrid() {
      return V();
    },
    set snapGrid(R) {
      V(R), m();
    },
    get deleteKey() {
      return x();
    },
    set deleteKey(R) {
      x(R), m();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(R) {
      P(R), m();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(R) {
      M(R), m();
    },
    get connectionMode() {
      return D();
    },
    set connectionMode(R) {
      D(R), m();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(R) {
      Z(R), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(R) {
      W(R), m();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(R) {
      F(R), m();
    },
    get onMove() {
      return le();
    },
    set onMove(R) {
      le(R), m();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(R) {
      G(R), m();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(R) {
      X(R), m();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(R) {
      ae(R), m();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(R) {
      ve(R), m();
    },
    get onlyRenderVisibleElements() {
      return me();
    },
    set onlyRenderVisibleElements(R) {
      me(R), m();
    },
    get panOnScrollMode() {
      return ce();
    },
    set panOnScrollMode(R) {
      ce(R), m();
    },
    get preventScrolling() {
      return Ve();
    },
    set preventScrolling(R) {
      Ve(R), m();
    },
    get zoomOnScroll() {
      return ue();
    },
    set zoomOnScroll(R) {
      ue(R), m();
    },
    get zoomOnDoubleClick() {
      return re();
    },
    set zoomOnDoubleClick(R) {
      re(R), m();
    },
    get zoomOnPinch() {
      return Le();
    },
    set zoomOnPinch(R) {
      Le(R), m();
    },
    get panOnScroll() {
      return He();
    },
    set panOnScroll(R) {
      He(R), m();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(R) {
      Ze(R), m();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(R) {
      te(R), m();
    },
    get autoPanOnConnect() {
      return Ge();
    },
    set autoPanOnConnect(R) {
      Ge(R), m();
    },
    get autoPanOnNodeDrag() {
      return Je();
    },
    set autoPanOnNodeDrag(R) {
      Je(R), m();
    },
    get onerror() {
      return se();
    },
    set onerror(R) {
      se(R), m();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(R) {
      fe(R), m();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(R) {
      Se(R), m();
    },
    get attributionPosition() {
      return Fe();
    },
    set attributionPosition(R) {
      Fe(R), m();
    },
    get proOptions() {
      return Ae();
    },
    set proOptions(R) {
      Ae(R), m();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(R) {
      vt(R), m();
    },
    get width() {
      return lt();
    },
    set width(R) {
      lt(R), m();
    },
    get height() {
      return ne();
    },
    set height(R) {
      ne(R), m();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(R) {
      Ie(R), m();
    },
    get onconnect() {
      return we();
    },
    set onconnect(R) {
      we(R), m();
    },
    get onconnectstart() {
      return Zt();
    },
    set onconnectstart(R) {
      Zt(R), m();
    },
    get onconnectend() {
      return Yt();
    },
    set onconnectend(R) {
      Yt(R), m();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(R) {
      un(R), m();
    },
    get oninit() {
      return Ne();
    },
    set oninit(R) {
      Ne(R), m();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(R) {
      ut(R), m();
    },
    get paneClickDistance() {
      return Ye();
    },
    set paneClickDistance(R) {
      Ye(R), m();
    },
    get nodeClickDistance() {
      return Re();
    },
    set nodeClickDistance(R) {
      Re(R), m();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(R) {
      ct(R), m();
    },
    get style() {
      return Jt();
    },
    set style(R) {
      Jt(R), m();
    },
    get class() {
      return Et();
    },
    set class(R) {
      Et(R), m();
    }
  });
  return a(), Ee;
}
de(
  kd,
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
function _d(e, t) {
  ge(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = ld({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Ur(pa, { getStore: () => l }), Ms(() => {
    l.reset();
  }), Be();
  var u = dt(), c = Ce(u);
  return Mt(c, t, "default", {}), A(e, u), he({
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
  _d,
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
function ko(e, t) {
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
  var c = Em();
  let d;
  var f = j(c);
  return Mt(f, t, "default", { class: "button-svg" }), K(c), Te(
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
  ), Ue("click", c, function(v) {
    We.call(this, t, v);
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
  ko,
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
var Pm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Sd(e) {
  var t = Pm();
  A(e, t);
}
de(Sd, {}, [], [], !0);
var Tm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Ed(e) {
  var t = Tm();
  A(e, t);
}
de(Ed, {}, [], [], !0);
var Mm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Pd(e) {
  var t = Mm();
  A(e, t);
}
de(Pd, {}, [], [], !0);
var Vm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Td(e) {
  var t = Vm();
  A(e, t);
}
de(Td, {}, [], [], !0);
var Nm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Md(e) {
  var t = Nm();
  A(e, t);
}
de(Md, {}, [], [], !0);
var Hm = /* @__PURE__ */ ie("<!> <!>", 1), zm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Vd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(M, "$nodesDraggable", n), i = () => ee(D, "$nodesConnectable", n), a = () => ee(Z, "$elementsSelectable", n), s = () => ee(V, "$viewport", n), l = () => ee(x, "$minZoom", n), u = () => ee(P, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), $ = y(t, "showFitView", 12, !0), C = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), k = y(t, "buttonBgColorHover", 12, void 0), p = y(t, "buttonColor", 12, void 0), _ = y(t, "buttonColorHover", 12, void 0), T = y(t, "buttonBorderColor", 12, void 0), E = y(t, "ariaLabel", 12, void 0), H = y(t, "style", 12, void 0), N = y(t, "orientation", 12, "vertical"), L = y(t, "fitViewOptions", 12, void 0), I = y(t, "class", 12, "");
  const {
    zoomIn: O,
    zoomOut: Y,
    fitView: S,
    viewport: V,
    minZoom: x,
    maxZoom: P,
    nodesDraggable: M,
    nodesConnectable: D,
    elementsSelectable: Z
  } = nt(), W = {
    bgColor: h(),
    bgColorHover: k(),
    color: p(),
    colorHover: _(),
    borderColor: T()
  }, F = () => {
    O();
  }, le = () => {
    Y();
  }, G = () => {
    S(L());
  }, X = () => {
    U(c, !g(c)), M.set(g(c)), D.set(g(c)), Z.set(g(c));
  };
  ye(
    () => (o(), i(), a()),
    () => {
      U(c, o() || i() || a());
    }
  ), ye(() => (s(), l()), () => {
    U(d, s().zoom <= l());
  }), ye(() => (s(), u()), () => {
    U(f, s().zoom >= u());
  }), ye(() => Q(N()), () => {
    U(v, N() === "horizontal" ? "horizontal" : "vertical");
  }), _t(), Be();
  const ae = /* @__PURE__ */ be(() => Rt([
    "svelte-flow__controls",
    g(v),
    I()
  ])), ve = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  ei(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return H();
    },
    children: (ce, Ve) => {
      var ue = zm(), re = Ce(ue);
      Mt(re, t, "before", {});
      var Le = B(re, 2);
      {
        var He = (Se) => {
          var Fe = Hm(), Ae = Ce(Fe);
          ko(Ae, bt(
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
              $$events: { click: F },
              children: (lt, ne) => {
                Sd(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = B(Ae, 2);
          ko(vt, bt(
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
              $$events: { click: le },
              children: (lt, ne) => {
                Ed(lt);
              },
              $$slots: { default: !0 }
            }
          )), A(Se, Fe);
        };
        ke(Le, (Se) => {
          b() && Se(He);
        });
      }
      var Ze = B(Le, 2);
      {
        var te = (Se) => {
          ko(Se, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: G },
              children: (Fe, Ae) => {
                Pd(Fe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Ze, (Se) => {
          $() && Se(te);
        });
      }
      var Ge = B(Ze, 2);
      {
        var Je = (Se) => {
          ko(Se, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: X },
              children: (Fe, Ae) => {
                var vt = dt(), lt = Ce(vt);
                {
                  var ne = (we) => {
                    Md(we);
                  }, Ie = (we) => {
                    Td(we);
                  };
                  ke(lt, (we) => {
                    g(c) ? we(ne) : we(Ie, !1);
                  });
                }
                A(Fe, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Ge, (Se) => {
          C() && Se(Je);
        });
      }
      var se = B(Ge, 2);
      Mt(se, t, "default", {});
      var fe = B(se, 2);
      Mt(fe, t, "after", {}), A(ce, ue);
    },
    $$slots: { default: !0 }
  });
  var me = he({
    get position() {
      return w();
    },
    set position(ce) {
      w(ce), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ce) {
      b(ce), m();
    },
    get showFitView() {
      return $();
    },
    set showFitView(ce) {
      $(ce), m();
    },
    get showLock() {
      return C();
    },
    set showLock(ce) {
      C(ce), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ce) {
      h(ce), m();
    },
    get buttonBgColorHover() {
      return k();
    },
    set buttonBgColorHover(ce) {
      k(ce), m();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(ce) {
      p(ce), m();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(ce) {
      _(ce), m();
    },
    get buttonBorderColor() {
      return T();
    },
    set buttonBorderColor(ce) {
      T(ce), m();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ce) {
      E(ce), m();
    },
    get style() {
      return H();
    },
    set style(ce) {
      H(ce), m();
    },
    get orientation() {
      return N();
    },
    set orientation(ce) {
      N(ce), m();
    },
    get fitViewOptions() {
      return L();
    },
    set fitViewOptions(ce) {
      L(ce), m();
    },
    get class() {
      return I();
    },
    set class(ce) {
      I(ce), m();
    }
  });
  return r(), me;
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
var fr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(fr || (fr = {}));
var Om = /* @__PURE__ */ _e("<circle></circle>");
function Nd(e, t) {
  ge(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Be();
  var o = Om();
  return Te(
    (i) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Vt(o, 0, i);
    },
    [
      () => _n(Rt([
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
de(Nd, { radius: {}, class: {} }, [], [], !0);
var Dm = /* @__PURE__ */ _e("<path></path>");
function Hd(e, t) {
  ge(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Be();
  var a = Dm();
  return Te(
    (s) => {
      xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Vt(a, 0, s);
    },
    [
      () => _n(Rt([
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
  [fr.Dots]: 1,
  [fr.Lines]: 1,
  [fr.Cross]: 6
};
var Am = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Im = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function zd(e, t) {
  ge(t, !1), st(e, Im);
  const [n, r] = ft(), o = () => ee(_, "$flowId", n), i = () => ee(p, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => fr.Dots), v = y(t, "gap", 12, 20), w = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), $ = y(t, "bgColor", 12, void 0), C = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), k = y(t, "class", 12, "");
  const { viewport: p, flowId: _ } = nt(), T = w() || Lm[f()], E = f() === fr.Dots, H = f() === fr.Cross, N = Array.isArray(v()) ? v() : [v(), v()];
  ye(
    () => (o(), Q(d())),
    () => {
      U(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ye(() => i(), () => {
    U(s, [
      N[0] * i().zoom || 1,
      N[1] * i().zoom || 1
    ]);
  }), ye(() => i(), () => {
    U(l, T * i().zoom);
  }), ye(() => (g(l), g(s)), () => {
    U(u, H ? [g(l), g(l)] : g(s));
  }), ye(
    () => (g(l), g(u)),
    () => {
      U(c, E ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), _t(), Be();
  var L = Am();
  let I;
  var O = j(L), Y = j(O);
  {
    var S = (M) => {
      const D = /* @__PURE__ */ be(() => g(l) / 2);
      Nd(M, {
        get radius() {
          return g(D);
        },
        get class() {
          return h();
        }
      });
    }, V = (M) => {
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
    ke(Y, (M) => {
      E ? M(S) : M(V, !1);
    });
  }
  K(O);
  var x = B(O);
  K(L), Te(
    (M) => {
      Vt(L, 0, M, "svelte-1r7pe8d"), I = xt(L, "", I, {
        "--xy-background-color-props": $(),
        "--xy-background-pattern-color-props": C()
      }), xe(O, "id", g(a)), xe(O, "x", i().x % g(s)[0]), xe(O, "y", i().y % g(s)[1]), xe(O, "width", g(s)[0]), xe(O, "height", g(s)[1]), xe(O, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), xe(x, "fill", `url(#${g(a)})`);
    },
    [
      () => _n(Rt(["svelte-flow__background", k()]))
    ],
    be
  ), A(e, L);
  var P = he({
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
      return w();
    },
    set size(M) {
      w(M), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(M) {
      b(M), m();
    },
    get bgColor() {
      return $();
    },
    set bgColor(M) {
      $(M), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(M) {
      C(M), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), m();
    },
    get class() {
      return k();
    },
    set class(M) {
      k(M), m();
    }
  });
  return r(), P;
}
de(
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
var Rm = /* @__PURE__ */ _e("<rect></rect>");
function Od(e, t) {
  ge(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Be();
  var v = Rm();
  let w;
  return Te(
    (b, $) => {
      w = Vt(v, 0, b, null, w, $), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", a()), xe(v, "ry", a()), xe(v, "width", o()), xe(v, "height", i()), xt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l());
    },
    [
      () => _n(Rt(["svelte-flow__minimap-node", f()])),
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
  Od,
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
  const n = k0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = q(t.viewport);
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
var Zm = /* @__PURE__ */ _e("<title> </title>"), Ym = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Dd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(Ze, "$flowId", n), i = () => ee(re, "$viewport", n), a = () => ee(Le, "$containerWidth", n), s = () => ee(He, "$containerHeight", n), l = () => ee(ue, "$nodeLookup", n), u = () => ee(Ve, "$nodes", n), c = () => ee(te, "$panZoom", n), d = () => ee(Ge, "$translateExtent", n), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), _ = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), H = /* @__PURE__ */ oe();
  let N = y(t, "position", 12, "bottom-right"), L = y(t, "ariaLabel", 12, "Mini map"), I = y(t, "nodeStrokeColor", 12, "transparent"), O = y(t, "nodeColor", 12, void 0), Y = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), V = y(t, "nodeStrokeWidth", 12, 2), x = y(t, "bgColor", 12, void 0), P = y(t, "maskColor", 12, void 0), M = y(t, "maskStrokeColor", 12, void 0), D = y(t, "maskStrokeWidth", 12, void 0), Z = y(t, "width", 12, void 0), W = y(t, "height", 12, void 0), F = y(t, "pannable", 12, !0), le = y(t, "zoomable", 12, !0), G = y(t, "inversePan", 12, void 0), X = y(t, "zoomStep", 12, void 0), ae = y(t, "style", 12, ""), ve = y(t, "class", 12, "");
  const me = 200, ce = 150, {
    nodes: Ve,
    nodeLookup: ue,
    viewport: re,
    width: Le,
    height: He,
    flowId: Ze,
    panZoom: te,
    translateExtent: Ge
  } = nt(), Je = O() === void 0 ? void 0 : La(O()), se = La(I()), fe = La(Y()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Fe = `svelte-flow__minimap-desc-${o()}`;
  let Ae = /* @__PURE__ */ oe(g(f));
  const vt = () => g(C);
  ye(
    () => (i(), a(), s()),
    () => {
      U(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ye(
    () => (l(), g(f), u()),
    () => {
      U(Ae, l().size > 0 ? Oc(Uo(l()), g(f)) : g(f)), u();
    }
  ), ye(() => Q(Z()), () => {
    U(v, Z() ?? me);
  }), ye(() => Q(W()), () => {
    U(w, W() ?? ce);
  }), ye(
    () => (g(Ae), g(v)),
    () => {
      U(b, g(Ae).width / g(v));
    }
  ), ye(
    () => (g(Ae), g(w)),
    () => {
      U($, g(Ae).height / g(w));
    }
  ), ye(
    () => (g(b), g($)),
    () => {
      U(C, Math.max(g(b), g($)));
    }
  ), ye(() => (g(C), g(v)), () => {
    U(h, g(C) * g(v));
  }), ye(
    () => (g(C), g(w)),
    () => {
      U(k, g(C) * g(w));
    }
  ), ye(() => g(C), () => {
    U(p, 5 * g(C));
  }), ye(
    () => (g(Ae), g(h), g(p)),
    () => {
      U(_, g(Ae).x - (g(h) - g(Ae).width) / 2 - g(p));
    }
  ), ye(
    () => (g(Ae), g(k), g(p)),
    () => {
      U(T, g(Ae).y - (g(k) - g(Ae).height) / 2 - g(p));
    }
  ), ye(() => (g(h), g(p)), () => {
    U(E, g(h) + g(p) * 2);
  }), ye(() => (g(k), g(p)), () => {
    U(H, g(k) + g(p) * 2);
  }), _t(), Be();
  const lt = /* @__PURE__ */ be(() => ae() + (x() ? `;--xy-minimap-background-color-props:${x()}` : "")), ne = /* @__PURE__ */ be(() => Rt(["svelte-flow__minimap", ve()]));
  ei(e, {
    get position() {
      return N();
    },
    get style() {
      return g(lt);
    },
    get class() {
      return g(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (we, Zt) => {
      var Yt = dt(), un = Ce(Yt);
      {
        var Ne = (ut) => {
          var Ye = Ym();
          xe(Ye, "aria-labelledby", Fe);
          let Re;
          var ct = j(Ye);
          {
            var Jt = (mt) => {
              var $t = Zm();
              xe($t, "id", Fe);
              var Pn = j($t, !0);
              K($t), Te(() => on(Pn, L())), A(mt, $t);
            };
            ke(ct, (mt) => {
              L() && mt(Jt);
            });
          }
          var Et = B(ct);
          qt(Et, 1, u, (mt) => mt.id, (mt, $t) => {
            var Pn = dt();
            const ot = /* @__PURE__ */ be(() => l().get(g($t).id));
            var vo = Ce(Pn);
            {
              var tr = (Ht) => {
                const wr = /* @__PURE__ */ be(() => yr(g(ot))), br = /* @__PURE__ */ be(() => Je == null ? void 0 : Je(g(ot))), Dr = /* @__PURE__ */ be(() => se(g(ot))), go = /* @__PURE__ */ be(() => fe(g(ot)));
                Od(Ht, bt(
                  {
                    get x() {
                      return g(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => g(wr),
                  {
                    get selected() {
                      return g(ot).selected;
                    },
                    get color() {
                      return g(br);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(Dr);
                    },
                    get strokeWidth() {
                      return V();
                    },
                    shapeRendering: Se,
                    get class() {
                      return g(go);
                    }
                  }
                ));
              };
              ke(vo, (Ht) => {
                g(ot) && Lc(g(ot)) && Ht(tr);
              });
            }
            A(mt, Pn);
          });
          var er = B(Et);
          K(Ye), Tt(Ye, (mt, $t) => ou == null ? void 0 : ou(mt, $t), () => ({
            panZoom: c(),
            viewport: re,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: X(),
            pannable: F(),
            zoomable: le()
          })), Te(() => {
            xe(Ye, "width", g(v)), xe(Ye, "height", g(w)), xe(Ye, "viewBox", `${g(_) ?? ""} ${g(T) ?? ""} ${g(E) ?? ""} ${g(H) ?? ""}`), Re = xt(Ye, "", Re, {
              "--xy-minimap-mask-background-color-props": P(),
              "--xy-minimap-mask-stroke-color-props": M(),
              "--xy-minimap-mask-stroke-width-props": D() ? D() * g(C) : void 0
            }), xe(er, "d", `M${g(_) - g(p)},${g(T) - g(p)}h${g(E) + g(p) * 2}v${g(H) + g(p) * 2}h${-g(E) - g(p) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), A(ut, Ye);
        };
        ke(un, (ut) => {
          c() && ut(Ne);
        });
      }
      A(we, Yt);
    },
    $$slots: { default: !0 }
  });
  var Ie = he({
    get position() {
      return N();
    },
    set position(we) {
      N(we), m();
    },
    get ariaLabel() {
      return L();
    },
    set ariaLabel(we) {
      L(we), m();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(we) {
      I(we), m();
    },
    get nodeColor() {
      return O();
    },
    set nodeColor(we) {
      O(we), m();
    },
    get nodeClass() {
      return Y();
    },
    set nodeClass(we) {
      Y(we), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(we) {
      S(we), m();
    },
    get nodeStrokeWidth() {
      return V();
    },
    set nodeStrokeWidth(we) {
      V(we), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(we) {
      x(we), m();
    },
    get maskColor() {
      return P();
    },
    set maskColor(we) {
      P(we), m();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(we) {
      M(we), m();
    },
    get maskStrokeWidth() {
      return D();
    },
    set maskStrokeWidth(we) {
      D(we), m();
    },
    get width() {
      return Z();
    },
    set width(we) {
      Z(we), m();
    },
    get height() {
      return W();
    },
    set height(we) {
      W(we), m();
    },
    get pannable() {
      return F();
    },
    set pannable(we) {
      F(we), m();
    },
    get zoomable() {
      return le();
    },
    set zoomable(we) {
      le(we), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(we) {
      G(we), m();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(we) {
      X(we), m();
    },
    get style() {
      return ae();
    },
    set style(we) {
      ae(we), m();
    },
    get class() {
      return ve();
    },
    set class(we) {
      ve(we), m();
    }
  });
  return r(), Ie;
}
de(
  Dd,
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
const iu = (e) => Yp(e);
function Ut() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: $, connectionLookup: C } = nt(), h = (_) => {
    var T, E;
    const H = q(w), N = iu(_) ? _ : H.get(_.id), L = N.parentId ? jp(N.position, N.measured, N.parentId, H, q(b)) : N.position, I = {
      ...N,
      position: L,
      width: ((T = N.measured) == null ? void 0 : T.width) ?? N.width,
      height: ((E = N.measured) == null ? void 0 : E.height) ?? N.height
    };
    return no(I);
  }, k = (_, T, E = { replace: !1 }) => {
    var H;
    const N = (H = q(w).get(_)) == null ? void 0 : H.internals.userNode;
    if (!N)
      return;
    const L = typeof T == "function" ? T(N) : T;
    E.replace ? d.update((I) => I.map((O) => O.id === _ ? iu(L) ? L : { ...O, ...L } : O)) : (Object.assign(N, L), d.update((I) => I));
  }, p = (_) => q(w).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (_) => {
      var T;
      return (T = p(_)) == null ? void 0 : T.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? q(d) : au(q(w), _),
    getEdge: (_) => q($).get(_),
    getEdges: (_) => _ === void 0 ? q(f) : au(q($), _),
    setZoom: (_, T) => {
      const E = q(c);
      return E ? E.scaleTo(_, { duration: T == null ? void 0 : T.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (_, T) => {
      const E = q(i), H = q(c);
      return H ? (await H.setViewport({
        x: _.x ?? E.x,
        y: _.y ?? E.y,
        zoom: _.zoom ?? E.zoom
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (_, T, E) => {
      const H = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : q(u), N = q(c);
      return N ? (await N.setViewport({
        x: q(a) / 2 - _ * H,
        y: q(s) / 2 - T * H,
        zoom: H
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, T) => {
      const E = q(c);
      if (!E)
        return Promise.resolve(!1);
      const H = Rs(_, q(a), q(s), q(l), q(u), (T == null ? void 0 : T.padding) ?? 0.1);
      return await E.setViewport(H, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, T = !0, E) => {
      const H = Zl(_), N = H ? _ : h(_);
      return N ? (E || q(d)).filter((L) => {
        const I = q(w).get(L.id);
        if (!I || !H && L.id === _.id)
          return !1;
        const O = no(I), Y = Zo(O, N);
        return T && Y > 0 || Y >= N.width * N.height;
      }) : [];
    },
    isNodeIntersecting: (_, T, E = !0) => {
      const H = Zl(_) ? _ : h(_);
      if (!H)
        return !1;
      const N = Zo(H, T);
      return E && N > 0 || N >= H.width * H.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: T = [] }) => {
      const { nodes: E, edges: H } = await Nc({
        nodesToRemove: _,
        edgesToRemove: T,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return E && d.update((N) => N.filter((L) => !E.some(({ id: I }) => I === L.id))), H && f.update((N) => N.filter((L) => !H.some(({ id: I }) => I === L.id))), {
        deletedNodes: E,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (_, T = { snapToGrid: !0 }) => {
      const E = q(v);
      if (!E)
        return _;
      const H = T.snapToGrid ? q(o) : !1, { x: N, y: L, zoom: I } = q(i), { x: O, y: Y } = E.getBoundingClientRect(), S = {
        x: _.x - O,
        y: _.y - Y
      };
      return Jo(S, [N, L, I], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const T = q(v);
      if (!T)
        return _;
      const { x: E, y: H, zoom: N } = q(i), { x: L, y: I } = T.getBoundingClientRect(), O = Dc(_, [E, H, N]);
      return {
        x: O.x + L,
        y: O.y + I
      };
    },
    toObject: () => ({
      nodes: q(d).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: q(f).map((_) => ({ ..._ })),
      viewport: { ...q(i) }
    }),
    updateNode: k,
    updateNodeData: (_, T, E) => {
      var H;
      const N = (H = q(w).get(_)) == null ? void 0 : H.internals.userNode;
      if (!N)
        return;
      const L = typeof T == "function" ? T(N) : T;
      N.data = E != null && E.replace ? L : { ...N.data, ...L }, d.update((I) => I);
    },
    getNodesBounds: (_) => {
      const T = q(w), E = q(b);
      return Bp(_, { nodeLookup: T, nodeOrigin: E });
    },
    getHandleConnections: ({ type: _, id: T, nodeId: E }) => {
      var H;
      return Array.from(((H = q(C).get(`${E}-${_}-${T ?? null}`)) == null ? void 0 : H.values()) ?? []);
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
function Ld(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(k, "$nodes", n), i = () => ee(h, "$nodeLookup", n), a = () => ee(C, "$viewport", n), s = () => ee($, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), v = y(t, "align", 12, void 0), w = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: $, viewport: C, nodeLookup: h, nodes: k } = nt(), { getNodesBounds: p } = Ut(), _ = Sr("svelteflow__node_id");
  let T = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe([]), H = w() !== void 0 ? w() : 10, N = f() !== void 0 ? f() : Pe.Top, L = v() !== void 0 ? v() : "center";
  ye(
    () => (o(), Q(d()), i()),
    () => {
      o();
      const V = Array.isArray(d()) ? d() : [d() || _];
      U(E, V.reduce(
        (x, P) => {
          const M = i().get(P);
          return M && x.push(M), x;
        },
        []
      ));
    }
  ), ye(
    () => (g(E), a()),
    () => {
      const V = p(g(E));
      V && U(T, s0(V, a(), N, H, L));
    }
  ), ye(() => g(E), () => {
    U(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((V) => (V.internals.z || 5) + 1)));
  }), ye(() => o(), () => {
    U(u, o().filter((V) => V.selected).length);
  }), ye(
    () => (Q(b()), g(E), g(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), _t(), Be();
  var I = dt(), O = Ce(I);
  {
    var Y = (V) => {
      var x = Bm();
      let P;
      var M = j(x);
      Mt(M, t, "default", {}), K(x), Tt(x, (D, Z) => ji == null ? void 0 : ji(D, Z), () => ({ domNode: s() })), Te(
        (D) => {
          xe(x, "data-id", D), P = xt(x, "", P, {
            position: "absolute",
            transform: g(T),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((D, Z) => `${D}${Z.id} `, "").trim()
        ],
        be
      ), A(V, x);
    };
    ke(O, (V) => {
      s() && g(c) && g(E) && V(Y);
    });
  }
  A(e, I);
  var S = he({
    get nodeId() {
      return d();
    },
    set nodeId(V) {
      d(V), m();
    },
    get position() {
      return f();
    },
    set position(V) {
      f(V), m();
    },
    get align() {
      return v();
    },
    set align(V) {
      v(V), m();
    },
    get offset() {
      return w();
    },
    set offset(V) {
      w(V), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(V) {
      b(V), m();
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
  const { nodes: t, nodeLookup: n } = nt();
  let r = [], o = !0;
  return cr([t, n], ([, i], a) => {
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
    (!h0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const su = "tinyflow-component";
class Wm {
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
const Km = () => {
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
}, ki = Km();
var jm = /* @__PURE__ */ ie("<button><!></button>");
function rt(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = jm();
  let i;
  var a = j(o);
  return Er(a, () => n() ?? Ct), K(o), Te(() => i = xn(o, i, {
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
de(rt, { children: {} }, [], [], !0);
var Xm = /* @__PURE__ */ ie("<input>");
function Ad(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Xm();
  So(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), he();
}
de(Ad, {}, [], [], !0);
var Fm = /* @__PURE__ */ ie("<input>");
function Dt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Fm();
  So(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), he();
}
de(Dt, {}, [], [], !0);
var qm = /* @__PURE__ */ ie("<textarea></textarea>");
function Gt(e, t) {
  ge(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = qm();
  Dv(o);
  let i;
  return Te(() => i = xn(o, i, {
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
de(Gt, { value: {} }, [], [], !0);
var Gm = /* @__PURE__ */ ie('<div role="button"><!></div>'), Um = /* @__PURE__ */ ie("<div></div>");
function Id(e, t) {
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
  return qt(l, 5, o, zo, (c, d, f) => {
    var v = Gm();
    xe(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var w = j(v);
    {
      var b = (C) => {
        var h = qe();
        Te(() => on(h, g(d).label)), A(C, h);
      }, $ = (C) => {
        var h = dt(), k = Ce(h);
        Er(k, () => g(d).label ?? Ct), A(C, h);
      };
      ke(w, (C) => {
        typeof g(d).label == "string" ? C(b) : C($, !1);
      });
    }
    K(v), Te(() => Vt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), A(c, v);
  }), K(l), Te(() => u = xn(l, u, {
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
aa(["click", "keydown"]);
de(Id, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Jm = (e, t, n) => t(g(n)), Qm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, e2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), t2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), n2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), r2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o2 = /* @__PURE__ */ ie("<div></div>");
const i2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Rd(e, t) {
  ge(t, !0), st(e, i2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => fn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = o2();
  return qt(a, 21, n, zo, (s, l, u) => {
    var c = r2(), d = j(c);
    xe(d, "tabindex", u), d.__click = [Jm, i, l], d.__keydown = [Qm, i, l];
    var f = j(d);
    {
      var v = (p) => {
        var _ = e2(), T = j(_);
        lr(T, {
          get target() {
            return g(l).icon;
          }
        }), K(_), A(p, _);
      };
      ke(f, (p) => {
        g(l).icon && p(v);
      });
    }
    var w = B(f, 2);
    lr(w, {
      get target() {
        return g(l).title;
      }
    });
    var b = B(w, 2);
    K(d);
    var $ = B(d, 2);
    {
      var C = (p) => {
        var _ = t2(), T = j(_);
        lr(T, {
          get target() {
            return g(l).description;
          }
        }), K(_), A(p, _);
      };
      ke($, (p) => {
        g(l).description && p(C);
      });
    }
    var h = B($, 2);
    {
      var k = (p) => {
        var _ = n2(), T = j(_);
        lr(T, {
          get target() {
            return g(l).content;
          }
        }), K(_), A(p, _);
      };
      ke(h, (p) => {
        o().includes(g(l).key) && p(k);
      });
    }
    K(c), Te((p) => Vt(b, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), K(a), Te(() => {
    xt(a, t.style), Vt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
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
aa(["click", "keydown"]);
de(Rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function lr(e, t) {
  ge(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = Ce(r);
  {
    var i = (s) => {
      var l = dt(), u = Ce(l);
      Er(u, () => n() ?? Ct), A(s, l);
    }, a = (s) => {
      var l = dt(), u = Ce(l);
      Ps(u, n), A(s, l);
    };
    ke(o, (s) => {
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
de(lr, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(g(n)), s2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), l2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), u2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), d2 = /* @__PURE__ */ ie("<!> <!>", 1), f2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), v2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), g2 = /* @__PURE__ */ ie("<div><!></div>");
function $n(e, t) {
  ge(t, !0);
  const n = (k, p = Ct) => {
    var _ = dt(), T = Ce(_);
    qt(T, 19, p, (E, H) => `${H}_${E.value}`, (E, H) => {
      var N = u2(), L = Ce(N);
      L.__click = [a2, b, H];
      var I = j(L), O = j(I);
      {
        var Y = (P) => {
          var M = s2();
          A(P, M);
        };
        ke(O, (P) => {
          g(H).children && g(H).children.length > 0 && P(Y);
        });
      }
      K(I);
      var S = B(I, 2);
      lr(S, {
        get target() {
          return g(H).label;
        }
      }), K(L);
      var V = B(L, 2);
      {
        var x = (P) => {
          var M = l2(), D = j(M);
          n(D, () => g(H).children), K(M), A(P, M);
        };
        ke(V, (P) => {
          g(H).children && g(H).children.length > 0 && (l() || c().includes(g(H).value)) && P(x);
        });
      }
      A(E, N);
    }), A(k, _);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Nt(t, [
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
  ]), v = /* @__PURE__ */ ze(() => {
    const k = [], p = (_) => {
      for (let T of _)
        a().length > 0 ? a().includes(T.value) && k.push(T) : s().includes(T.value) && k.push(T), T.children && T.children.length > 0 && p(T.children);
    };
    return p(r()), k;
  }), w;
  function b(k) {
    var p, _;
    if (k.children && k.children.length > 0) {
      (p = o()) == null || p(k);
      return;
    } else
      w == null || w.hide(), (_ = i()) == null || _(k);
  }
  var $ = g2();
  let C;
  var h = j($);
  return Dn(
    oi(h, {
      floating: (k) => {
        var p = c2(), _ = j(p);
        n(_, r), K(p), A(k, p);
      },
      children: (k, p) => {
        var _ = v2();
        let T;
        var E = j(_);
        qt(
          E,
          23,
          () => g(v),
          (H, N) => `${N}_${H.value}`,
          (H, N, L) => {
            var I = dt(), O = Ce(I);
            {
              var Y = (V) => {
                var x = dt(), P = Ce(x);
                {
                  var M = (D) => {
                    lr(D, {
                      get target() {
                        return g(N).label;
                      }
                    });
                  };
                  ke(P, (D) => {
                    g(L) === 0 && D(M);
                  });
                }
                A(V, x);
              }, S = (V) => {
                var x = d2(), P = Ce(x);
                lr(P, {
                  get target() {
                    return g(N).label;
                  }
                });
                var M = B(P, 2);
                {
                  var D = (Z) => {
                    var W = qe(",");
                    A(Z, W);
                  };
                  ke(M, (Z) => {
                    g(L) < g(v).length - 1 && Z(D);
                  });
                }
                A(V, x);
              };
              ke(O, (V) => {
                u() ? V(S, !1) : V(Y);
              });
            }
            A(H, I);
          },
          (H) => {
            var N = f2(), L = j(N, !0);
            K(N), Te(() => on(L, d())), A(H, N);
          }
        ), K(E), Oe(2), K(_), Te(() => T = xn(_, T, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), A(k, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => w = k,
    () => w
  ), K($), Te(() => C = xn($, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), A(e, $), he({
    get items() {
      return r();
    },
    set items(k) {
      r(k), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand(k) {
      o(k), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect(k) {
      i(k), m();
    },
    get value() {
      return a();
    },
    set value(k = []) {
      a(k), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(k = []) {
      s(k), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll(k = !0) {
      l(k), m();
    },
    get multiple() {
      return u();
    },
    set multiple(k = !1) {
      u(k), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(k = []) {
      c(k), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(k) {
      d(k), m();
    }
  });
}
aa(["click"]);
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
const Bo = Math.min, jr = Math.max, qi = Math.round, Vn = (e) => ({
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
function ss(e, t, n) {
  return jr(e, Bo(t, n));
}
function ti(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vr(e) {
  return e.split("-")[0];
}
function ni(e) {
  return e.split("-")[1];
}
function Zd(e) {
  return e === "x" ? "y" : "x";
}
function js(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(Vr(e)) ? "y" : "x";
}
function Xs(e) {
  return Zd(oo(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ni(e), o = Xs(e), i = js(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Gi(a)), [a, Gi(a)];
}
function y2(e) {
  const t = Gi(e);
  return [ls(e), t, ls(t)];
}
function ls(e) {
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
  const o = ni(e);
  let i = w2(Vr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(ls)))), i;
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
function Yd(e) {
  return typeof e != "number" ? x2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ui(e) {
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
  const i = oo(t), a = Xs(t), s = js(a), l = Vr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (ni(t)) {
    case "start":
      v[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
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
  } = lu(u, r, l), f = r, v = {}, w = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: $,
      fn: C
    } = s[b], {
      x: h,
      y: k,
      data: p,
      reset: _
    } = await C({
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
    c = h ?? c, d = k ?? d, v = {
      ...v,
      [$]: {
        ...v[$],
        ...p
      }
    }, _ && w <= 50 && (w++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: c,
      y: d
    } = lu(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
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
    altBoundary: f = !1,
    padding: v = 0
  } = ti(t, e), w = Yd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], $ = Ui(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), k = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = Ui(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: ($.top - p.top + w.top) / k.y,
    bottom: (p.bottom - $.bottom + w.bottom) / k.y,
    left: ($.left - p.left + w.left) / k.x,
    right: (p.right - $.right + w.right) / k.x
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
    } = ti(e, t) || {};
    if (u == null)
      return {};
    const d = Yd(c), f = {
      x: n,
      y: r
    }, v = Xs(o), w = js(v), b = await a.getDimensions(u), $ = v === "y", C = $ ? "top" : "left", h = $ ? "bottom" : "right", k = $ ? "clientHeight" : "clientWidth", p = i.reference[w] + i.reference[v] - f[v] - i.floating[w], _ = f[v] - i.reference[v], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = T ? T[k] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(T))) && (E = s.floating[k] || i.floating[w]);
    const H = p / 2 - _ / 2, N = E / 2 - b[w] / 2 - 1, L = Bo(d[C], N), I = Bo(d[h], N), O = L, Y = E - b[w] - I, S = E / 2 - b[w] / 2 + H, V = ss(O, S, Y), x = !l.arrow && ni(o) != null && S !== V && i.reference[w] / 2 - (S < O ? L : I) - b[w] / 2 < 0, P = x ? S < O ? S - O : S - Y : 0;
    return {
      [v]: f[v] + P,
      data: {
        [v]: V,
        centerOffset: S - V - P,
        ...x && {
          alignmentOffset: P
        }
      },
      reset: x
    };
  }
}), k2 = function(e) {
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
        fallbackAxisSideDirection: w = "none",
        flipAlignment: b = !0,
        ...$
      } = ti(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = Vr(o), h = oo(s), k = Vr(s) === s, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (k || !b ? [Gi(s)] : y2(s)), T = w !== "none";
      !f && T && _.push(...b2(s, b, w, p));
      const E = [s, ..._], H = await Bd(t, $), N = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(H[C]), d) {
        const S = m2(o, a, p);
        N.push(H[S[0]], H[S[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: N
      }], !N.every((S) => S <= 0)) {
        var I, O;
        const S = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, V = E[S];
        if (V)
          return {
            data: {
              index: S,
              overflows: L
            },
            reset: {
              placement: V
            }
          };
        let x = (O = L.filter((P) => P.overflows[0] <= 0).sort((P, M) => P.overflows[1] - M.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!x)
          switch (v) {
            case "bestFit": {
              var Y;
              const P = (Y = L.filter((M) => {
                if (T) {
                  const D = oo(M.placement);
                  return D === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((D) => D > 0).reduce((D, Z) => D + Z, 0)]).sort((M, D) => M[1] - D[1])[0]) == null ? void 0 : Y[0];
              P && (x = P);
              break;
            }
            case "initialPlacement":
              x = s;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
async function _2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Vr(n), s = ni(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ti(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof w == "number" && (v = s === "end" ? w * -1 : w), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
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
      } = t, l = await _2(t, e);
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
          fn: ($) => {
            let {
              x: C,
              y: h
            } = $;
            return {
              x: C,
              y: h
            };
          }
        },
        ...l
      } = ti(e, t), u = {
        x: n,
        y: r
      }, c = await Bd(t, l), d = oo(Vr(o)), f = Zd(d);
      let v = u[f], w = u[d];
      if (i) {
        const $ = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[$], k = v - c[C];
        v = ss(h, v, k);
      }
      if (a) {
        const $ = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = w + c[$], k = w - c[C];
        w = ss(h, w, k);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: w
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
  return Wd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (Wd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wd(e) {
  return ma() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function Cn(e) {
  return ma() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function Ln(e) {
  return ma() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function uu(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function ri(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function P2(e) {
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
function Fs(e) {
  const t = qs(), n = Cn(e) ? kn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function T2(e) {
  let t = pr(e);
  for (; Ln(t) && !io(t); ) {
    if (Fs(t))
      return t;
    if (ya(t))
      return null;
    t = pr(t);
  }
  return null;
}
function qs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function io(e) {
  return ["html", "body", "#document"].includes(fo(e));
}
function kn(e) {
  return an(e).getComputedStyle(e);
}
function wa(e) {
  return Cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function pr(e) {
  if (fo(e) === "html")
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
function Kd(e) {
  const t = pr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && ri(t) ? t : Kd(t);
}
function jd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (us(a), t.concat(a, a.visualViewport || [], ri(o) ? o : [], [])) : t.concat(o, jd(o, []));
}
function us(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xd(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ln(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = qi(n) !== i || qi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Fd(e) {
  return Cn(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = Fd(e);
  if (!Ln(t))
    return Vn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Xd(t);
  let a = (i ? qi(n.width) : n.width) / r, s = (i ? qi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const M2 = /* @__PURE__ */ Vn(0);
function qd(e) {
  const t = an(e);
  return !qs() || !t.visualViewport ? M2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Fd(e);
  let a = Vn(1);
  t && (r ? Cn(r) && (a = Xr(r)) : a = Xr(e));
  const s = V2(i, n, r) ? qd(i) : Vn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = an(i), v = r && Cn(r) ? an(r) : r;
    let w = f, b = us(w);
    for (; b && r && v !== w; ) {
      const $ = Xr(b), C = b.getBoundingClientRect(), h = kn(b), k = C.left + (b.clientLeft + parseFloat(h.paddingLeft)) * $.x, p = C.top + (b.clientTop + parseFloat(h.paddingTop)) * $.y;
      l *= $.x, u *= $.y, c *= $.x, d *= $.y, l += k, u += p, w = an(b), b = us(w);
    }
  }
  return Ui({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Gs(e, t) {
  const n = wa(e).scrollLeft;
  return t ? t.left + n : Wo(Jn(e)).left + n;
}
function Gd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function N2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Jn(r), s = t ? ya(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Vn(1);
  const c = Vn(0), d = Ln(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || ri(a)) && (l = wa(r)), Ln(r))) {
    const v = Wo(r);
    u = Xr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Gd(a, l, !0) : Vn(0);
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
function z2(e) {
  const t = Jn(e), n = wa(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Gs(e);
  const s = -n.scrollTop;
  return kn(r).direction === "rtl" && (a += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function O2(e, t) {
  const n = an(e), r = Jn(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = qs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function D2(e, t) {
  const n = Wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ln(e) ? Xr(e) : Vn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = O2(e, n);
  else if (t === "document")
    r = z2(Jn(e));
  else if (Cn(t))
    r = D2(t, n);
  else {
    const o = qd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ui(r);
}
function Ud(e, t) {
  const n = pr(e);
  return n === t || !Cn(n) || io(n) ? !1 : kn(n).position === "fixed" || Ud(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jd(e, []).filter((s) => Cn(s) && fo(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? pr(e) : e;
  for (; Cn(a) && !io(a); ) {
    const s = kn(a), l = Fs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ri(a) && !l && Ud(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = pr(a);
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
  const i = [...n === "clippingAncestors" ? ya(t) ? [] : L2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = cu(t, u, o);
    return l.top = jr(c.top, l.top), l.right = Bo(c.right, l.right), l.bottom = Bo(c.bottom, l.bottom), l.left = jr(c.left, l.left), l;
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
  } = Xd(e);
  return {
    width: t,
    height: n
  };
}
function R2(e, t, n) {
  const r = Ln(t), o = Jn(t), i = n === "fixed", a = Wo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || ri(o)) && (s = wa(t)), r) {
      const f = Wo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Gs(o));
  const u = o && !r && !i ? Gd(o, s) : Vn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Aa(e) {
  return kn(e).position === "static";
}
function du(e, t) {
  if (!Ln(e) || kn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Jn(e) === n && (n = n.ownerDocument.body), n;
}
function Jd(e, t) {
  const n = an(e);
  if (ya(e))
    return n;
  if (!Ln(e)) {
    let o = pr(e);
    for (; o && !io(o); ) {
      if (Cn(o) && !Aa(o))
        return o;
      o = pr(o);
    }
    return n;
  }
  let r = du(e, t);
  for (; r && P2(r) && Aa(r); )
    r = du(r, t);
  return r && io(r) && Aa(r) && !Fs(r) ? n : r || T2(e) || n;
}
const Z2 = async function(e) {
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
function Y2(e) {
  return kn(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: N2,
  getDocumentElement: Jn,
  getClippingRect: A2,
  getOffsetParent: Jd,
  getElementRects: Z2,
  getClientRects: H2,
  getDimensions: I2,
  getScale: Xr,
  isElement: Cn,
  isRTL: Y2
}, W2 = S2, K2 = E2, j2 = k2, X2 = C2, F2 = (e, t, n) => {
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
}, q2 = ({
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
    const C = document.querySelector(e);
    if (C)
      e = C;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const C = document.querySelector(n);
    if (C)
      u = C;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    F2(e, u, {
      placement: r,
      middleware: [
        W2(o),
        // 手动偏移配置
        j2(i),
        //自动翻转
        K2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [X2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: k, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: _, y: T } = p.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[k.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: T != null ? `${T}px` : "",
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
  function w() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(C) {
    C.stopPropagation(), f ? w() : v();
  }
  function $(C) {
    u.contains(C.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, b);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, b);
      }), document.removeEventListener("click", $);
    },
    hide() {
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var G2 = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function oi(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  ln(() => (s = q2({
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
  var u = G2(), c = j(u), d = j(c);
  Er(d, n), K(c), Dn(c, (w) => i = w, () => i);
  var f = B(c, 2), v = j(f);
  return Er(v, r), K(f), Dn(f, (w) => a = w, () => a), K(u), A(e, u), he({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), m();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), m();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), m();
    }
  });
}
de(oi, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function at(e, t) {
  ge(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = dt(), s = Ce(a);
  return Kv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = xn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = dt(), f = Ce(d);
    Er(f, () => n() ?? Ct), A(u, d);
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
de(at, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const J2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ba(e, t) {
  ge(t, !0), st(e, J2);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  rt(e, bt(() => n, {
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
const Q2 = () => {
  const e = nt();
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
}, ey = () => {
  const { nodes: e, nodeLookup: t } = nt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
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
}, Gn = () => Sr("tinyflow_options");
var ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ny = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ry = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), oy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), iy = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ay = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function En(e, t) {
  ge(t, !0), st(e, ay);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "showSourceHandle", 7, !0), d = y(t, "showTargetHandle", 7, !0), f = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Ut(), $ = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: C } = Q2(), { copyNode: h } = ey(), k = Gn(), p = () => {
    var x;
    (x = k.onNodeExecute) == null || x.call(k, b(r()));
  };
  var _ = iy(), T = Ce(_);
  {
    var E = (x) => {
      Ld(x, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (P, M) => {
          var D = oy(), Z = j(D);
          {
            var W = (ae) => {
              rt(ae, {
                class: "tf-node-toolbar-item",
                onclick: p,
                children: (ve, me) => {
                  var ce = ty();
                  A(ve, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(Z, (ae) => {
              s() && ae(W);
            });
          }
          var F = B(Z, 2);
          {
            var le = (ae) => {
              rt(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (ve, me) => {
                  var ce = ny();
                  A(ve, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(F, (ae) => {
              l() && ae(le);
            });
          }
          var G = B(F, 2);
          {
            var X = (ae) => {
              rt(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ve, me) => {
                  var ce = ry();
                  A(ve, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(G, (ae) => {
              u() && ae(X);
            });
          }
          K(D), A(P, D);
        },
        $$slots: { default: !0 }
      });
    };
    ke(T, (x) => {
      (s() || l() || u()) && x(E);
    });
  }
  var H = B(T, 2), N = B(j(H), 2), L = j(N);
  Rd(L, {
    items: $,
    activeKeys: v,
    onChange: (x, P) => {
      var M;
      w(r(), { expand: P == null ? void 0 : P.includes("key") }), (M = f()) == null || M(P != null && P.includes("key") ? "key" : "");
    }
  }), K(N), K(H);
  var I = B(H, 2);
  {
    var O = (x) => {
      hr(x, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ke(I, (x) => {
      d() && x(O);
    });
  }
  var Y = B(I, 2);
  {
    var S = (x) => {
      hr(x, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ke(Y, (x) => {
      c() && x(S);
    });
  }
  var V = B(Y, 2);
  return Er(V, () => i() ?? Ct), A(e, _), he({
    get data() {
      return n();
    },
    set data(x) {
      n(x), m();
    },
    get id() {
      return r();
    },
    set id(x = "") {
      r(x), m();
    },
    get icon() {
      return o();
    },
    set icon(x) {
      o(x), m();
    },
    get handle() {
      return i();
    },
    set handle(x) {
      i(x), m();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(x = !0) {
      s(x), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(x = !0) {
      l(x), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(x = !0) {
      u(x), m();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(x = !0) {
      c(x), m();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(x = !0) {
      d(x), m();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(x) {
      f(x), m();
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
], sy = [
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
var ly = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), cy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ef(e, t) {
  ge(t, !0), st(e, dy);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = St(), l = /* @__PURE__ */ ze(() => Or(s)), u = /* @__PURE__ */ ze(() => {
    var N, L;
    return {
      ...i(),
      ...(L = (N = o()) == null ? void 0 : N.data) == null ? void 0 : L.parameters[a()]
    };
  });
  const { updateNodeData: c } = Ut(), d = (N, L) => {
    c(s, (I) => {
      let O = I.data.parameters;
      return O[a()][N] = L, { parameters: O };
    });
  }, f = (N) => {
    const L = N.target.value;
    d("name", L);
  }, v = (N) => {
    const L = N.target.checked;
    d("required", L);
  }, w = (N) => {
    const L = N.value;
    L && d("dataType", L);
  };
  let b;
  const $ = () => {
    c(s, (N) => {
      let L = N.data.parameters;
      return L.splice(a(), 1), { parameters: [...L] };
    }), b == null || b.hide();
  };
  var C = cy(), h = Ce(C), k = j(h);
  Dt(k, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), K(h);
  var p = B(h, 2), _ = j(p);
  Ad(_, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), K(p);
  var T = B(p, 2), E = j(T);
  Dn(
    oi(E, {
      placement: "bottom",
      floating: (N) => {
        var L = ly(), I = j(L), O = B(j(I));
        const Y = /* @__PURE__ */ ze(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        $n(O, {
          items: Qd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return g(Y);
          }
        }), K(I);
        var S = B(I, 2), V = B(j(S));
        Gt(V, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Z) => {
            const W = Z.target.value;
            d("defaultValue", W);
          }
        }), K(S);
        var x = B(S, 2), P = B(j(x));
        Gt(P, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Z) => {
            const W = Z.target.value;
            d("description", W);
          }
        }), K(x);
        var M = B(x, 2), D = j(M);
        rt(D, {
          onclick: $,
          children: (Z, W) => {
            Oe();
            var F = qe("删除");
            A(Z, F);
          },
          $$slots: { default: !0 }
        }), K(M), K(L), A(N, L);
      },
      children: (N, L) => {
        rt(N, {
          class: "input-btn-more",
          children: (I, O) => {
            var Y = uy();
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => b = N,
    () => b
  ), K(T), A(e, C);
  var H = he({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), m();
    },
    get index() {
      return a();
    },
    set index(N) {
      a(N), m();
    }
  });
  return r(), H;
}
de(ef, { parameter: {}, index: {} }, [], [], !0);
var fy = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), vy = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), gy = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const hy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function tf(e, t) {
  ge(t, !0), st(e, hy);
  const [n, r] = ft(), o = () => ee(g(a), "$node", n);
  let i = St(), a = /* @__PURE__ */ ze(() => Or(i)), s = /* @__PURE__ */ ze(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = gy(), u = j(l);
  {
    var c = (f) => {
      var v = fy();
      Oe(4), A(f, v);
    };
    ke(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  qt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, w) => {
      ef(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(w);
        }
      });
    },
    (f) => {
      var v = vy();
      A(f, v);
    }
  ), K(l), A(e, l), he(), r();
}
de(tf, {}, [], [], !0);
const nf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ao()), nf(t.children);
  });
}, Rn = () => {
  const { updateNodeData: e } = Ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      nf(r == null ? void 0 : r.children);
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
var py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), my = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function rf(e, t) {
  ge(t, !0), st(e, wy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
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
      var s = py();
      A(a, s);
    },
    children: (a, s) => {
      var l = yy(), u = Ce(l), c = j(u);
      at(c, {
        level: 3,
        children: (v, w) => {
          Oe();
          var b = qe("输入参数");
          A(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      rt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, w) => {
          var b = my();
          A(v, b);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = B(u, 2);
      tf(f, {}), A(a, l);
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
de(rf, { data: {} }, [], [], !0);
const of = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), of(e, r.source, n));
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
}, by = (e = !1) => {
  const t = St(), n = Or(t), { nodes: r, edges: o } = nt();
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
      of(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = fu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var xy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), $y = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  ge(t, !0), st(e, Cy);
  const [n, r] = ft(), o = () => ee(g(c), "$node", n), i = () => ee(p, "$selectItems", n);
  ln(() => {
    g(d).refType || C({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = St(), c = /* @__PURE__ */ ze(() => Or(u)), d = /* @__PURE__ */ ze(() => {
    var V;
    return {
      ...a(),
      ...(V = o()) == null ? void 0 : V.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Ut(), v = (V, x) => {
    f(u, (P) => {
      let M = P.data[l()];
      return M[s()] = { ...M[s()], [V]: x }, { [l()]: M };
    });
  }, w = (V) => {
    const x = V.target.value;
    v("name", x);
  }, b = (V) => {
    const x = V.target.value;
    v("value", x);
  }, $ = (V) => {
    const x = V.value;
    v("ref", x);
  }, C = (V) => {
    const x = V.value;
    v("refType", x);
  };
  let h;
  const k = () => {
    f(u, (V) => {
      let x = V.data[l()];
      return x.splice(s(), 1), { [l()]: [...x] };
    }), h == null || h.hide();
  }, p = by();
  var _ = $y(), T = Ce(_), E = j(T);
  Dt(E, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), K(T);
  var H = B(T, 2), N = j(H);
  {
    var L = (V) => {
      Dt(V, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, I = (V, x) => {
      {
        var P = (M) => {
          const D = /* @__PURE__ */ ze(() => [g(d).ref]);
          $n(M, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(D);
            },
            expandAll: !0,
            onSelect: $
          });
        };
        ke(
          V,
          (M) => {
            g(d).refType !== "input" && M(P);
          },
          x
        );
      }
    };
    ke(N, (V) => {
      g(d).refType === "fixed" ? V(L) : V(I, !1);
    });
  }
  K(H);
  var O = B(H, 2), Y = j(O);
  Dn(
    oi(Y, {
      placement: "bottom",
      floating: (V) => {
        var x = xy(), P = j(x), M = B(j(P));
        const D = /* @__PURE__ */ ze(() => g(d).refType ? [g(d).refType] : []);
        $n(M, {
          items: sy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(D);
          },
          onSelect: C
        }), K(P);
        var Z = B(P, 2), W = B(j(Z));
        Gt(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const ve = ae.target.value;
            v("defaultValue", ve);
          }
        }), K(Z);
        var F = B(Z, 2), le = B(j(F));
        Gt(le, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const ve = ae.target.value;
            v("description", ve);
          }
        }), K(F);
        var G = B(F, 2), X = j(G);
        rt(X, {
          onclick: k,
          children: (ae, ve) => {
            Oe();
            var me = qe("删除");
            A(ae, me);
          },
          $$slots: { default: !0 }
        }), K(G), K(x), A(V, x);
      },
      children: (V, x) => {
        ba(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => h = V,
    () => h
  ), K(O), A(e, _);
  var S = he({
    get parameter() {
      return a();
    },
    set parameter(V) {
      a(V), m();
    },
    get index() {
      return s();
    },
    set index(V) {
      s(V), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(V) {
      l(V), m();
    }
  });
  return r(), S;
}
de(af, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var ky = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), _y = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Sy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  ge(t, !0), st(e, Ey);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = St(), l = /* @__PURE__ */ ze(() => Or(s)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Sy(), d = j(c);
  {
    var f = (b) => {
      var $ = ky();
      Oe(4), A(b, $);
    };
    ke(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = B(d, 2);
  qt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, $, C) => {
      af(b, {
        get parameter() {
          return g($);
        },
        get index() {
          return g(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var $ = _y(), C = j($, !0);
      K($), Te(() => on(C, i())), A(b, $);
    }
  ), K(c), A(e, c);
  var w = he({
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
  return r(), w;
}
de(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function sf(e, t) {
  ge(t, !0), st(e, Vy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
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
        var s = Py();
        A(a, s);
      },
      children: (a, s) => {
        var l = My(), u = Ce(l), c = j(u);
        at(c, {
          level: 3,
          children: (v, w) => {
            Oe();
            var b = qe("输出参数");
            A(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        rt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, w) => {
            var b = Ty();
            A(v, b);
          },
          $$slots: { default: !0 }
        }), K(u);
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
de(sf, { data: {} }, [], [], !0);
var Ny = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), zy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Oy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Dy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function lf(e, t) {
  ge(t, !0), st(e, Dy);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = St(), u = /* @__PURE__ */ ze(() => Or(l)), c = /* @__PURE__ */ ze(() => {
    var P;
    let M = (P = o()) == null ? void 0 : P.data[s()], D;
    if (M && a().length > 0) {
      let Z = M;
      for (let W = 0; W < a().length; W++) {
        const F = a()[W];
        W == a().length - 1 ? D = Z[F] : Z = Z[F].children;
      }
    }
    return { ...i(), ...D };
  });
  const { updateNodeData: d } = Ut(), f = (P, M) => {
    d(l, (D) => {
      const Z = D.data[s()];
      if (Z && a().length > 0) {
        let W = Z;
        for (let F = 0; F < a().length; F++) {
          const le = a()[F];
          F == a().length - 1 ? W[le] = { ...W[le], [P]: M } : W = Z[le].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (P) => {
    const M = P.target.value;
    f("name", M);
  }, w = (P) => {
    const M = P.value;
    f("dataType", M);
  };
  let b;
  const $ = () => {
    d(l, (P) => {
      let M = P.data[s()];
      if (M && a().length > 0) {
        let D = M;
        for (let Z = 0; Z < a().length; Z++) {
          const W = a()[Z];
          Z == a().length - 1 ? D.splice(W, 1) : D = D[W].children;
        }
      }
      return { [s()]: [...M] };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (P) => {
      let M = P.data[s()];
      if (M && a().length > 0) {
        let D = M;
        for (let Z = 0; Z < a().length; Z++) {
          const W = a()[Z];
          Z == a().length - 1 ? D[W].children ? D[W].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : D[W].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : D = D[W].children;
        }
      }
      return { [s()]: [...M] };
    });
  };
  var h = Oy(), k = Ce(h), p = j(k);
  {
    var _ = (P) => {
      var M = dt(), D = Ce(M);
      qt(D, 17, a, zo, (Z, W) => {
        Oe();
        var F = qe(" ");
        A(Z, F);
      }), A(P, M);
    };
    ke(p, (P) => {
      a().length > 1 && P(_);
    });
  }
  var T = B(p, 2);
  const E = /* @__PURE__ */ ze(() => g(c).nameDisabled === !0);
  Dt(T, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(E);
    }
  }), K(k);
  var H = B(k, 2), N = j(H);
  const L = /* @__PURE__ */ ze(() => g(c).dataType ? [g(c).dataType] : []), I = /* @__PURE__ */ ze(() => g(c).dataTypeDisabled === !0);
  $n(N, {
    items: Qd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(L);
    },
    get disabled() {
      return g(I);
    },
    onSelect: w
  });
  var O = B(N, 2);
  {
    var Y = (P) => {
      rt(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (M, D) => {
          var Z = Ny();
          A(M, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ke(O, (P) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && P(Y);
    });
  }
  K(H);
  var S = B(H, 2), V = j(S);
  Dn(
    oi(V, {
      placement: "bottom",
      floating: (P) => {
        var M = zy(), D = j(M), Z = B(j(D));
        const W = /* @__PURE__ */ ze(() => g(c).defaultValue || "");
        Gt(Z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (ve) => {
            const me = ve.target.value;
            f("defaultValue", me);
          }
        }), K(D);
        var F = B(D, 2), le = B(j(F));
        const G = /* @__PURE__ */ ze(() => g(c).description || "");
        Gt(le, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(G);
          },
          onchange: (ve) => {
            const me = ve.target.value;
            f("description", me);
          }
        }), K(F);
        var X = B(F, 2);
        {
          var ae = (ve) => {
            var me = Hy(), ce = j(me);
            rt(ce, {
              onclick: $,
              children: (Ve, ue) => {
                Oe();
                var re = qe("删除");
                A(Ve, re);
              },
              $$slots: { default: !0 }
            }), K(me), A(ve, me);
          };
          ke(X, (ve) => {
            g(c).deleteDisabled !== !0 && ve(ae);
          });
        }
        K(M), A(P, M);
      },
      children: (P, M) => {
        ba(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), K(S), A(e, h);
  var x = he({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), m();
    },
    get position() {
      return a();
    },
    set position(P) {
      a(P), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(P) {
      s(P), m();
    }
  });
  return r(), x;
}
de(lf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ ie("<!> <!>", 1), Ay = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Iy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Zy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  ge(t, !0), st(e, Zy);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = ($, C = Ct, h = Ct) => {
    var k = dt(), p = Ce(k);
    qt(
      p,
      19,
      C,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, T, E) => {
        var H = Ly(), N = Ce(H);
        const L = /* @__PURE__ */ ze(() => [...h(), g(E)]);
        lf(N, {
          get parameter() {
            return g(T);
          },
          get position() {
            return g(L);
          },
          get dataKeyName() {
            return s();
          }
        });
        var I = B(N, 2);
        {
          var O = (Y) => {
            var S = /* @__PURE__ */ be(() => [...h(), g(E)]);
            i(Y, () => g(T).children, () => g(S));
          };
          ke(I, (Y) => {
            g(T).children && Y(O);
          });
        }
        A(_, H);
      },
      (_) => {
        var T = dt(), E = Ce(T);
        {
          var H = (N) => {
            var L = Ay(), I = j(L, !0);
            K(L), Te(() => on(I, a())), A(N, L);
          };
          ke(E, (N) => {
            h().length === 0 && N(H);
          });
        }
        A(_, T);
      }
    ), A($, k);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = St(), u = /* @__PURE__ */ ze(() => Or(l)), c = /* @__PURE__ */ ze(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[s()]) || []];
  });
  var d = Ry(), f = j(d);
  {
    var v = ($) => {
      var C = Iy();
      Oe(4), A($, C);
    };
    ke(f, ($) => {
      g(c).length !== 0 && $(v);
    });
  }
  var w = B(f, 2);
  i(w, () => g(c) || [], () => []), K(d), A(e, d);
  var b = he({
    get noneParameterText() {
      return a();
    },
    set noneParameterText($ = "无输出参数") {
      a($), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName($ = "outputDefs") {
      s($), m();
    }
  });
  return r(), b;
}
de(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Yy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), By = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ ie('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  ge(t, !0), st(e, jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = Gn();
  let s = /* @__PURE__ */ Ot(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Yy();
        A(u, c);
      },
      children: (u, c) => {
        var d = Ky(), f = Ce(d), v = j(f);
        at(v, {
          level: 3,
          children: (re, Le) => {
            Oe();
            var He = qe("输入参数");
            A(re, He);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        rt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (re, Le) => {
            var He = By();
            A(re, He);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        at($, {
          level: 3,
          mt: "10px",
          children: (re, Le) => {
            Oe();
            var He = qe("模型设置");
            A(re, He);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (re) => {
            const Le = re.value;
            l(o, () => ({ llmId: Le }));
          },
          get value() {
            return g(k);
          }
        });
        var p = B(h, 2);
        ba(p, {}), K(C);
        var _ = B(C, 4), T = j(_), E = j(T), H = j(E);
        K(E);
        var N = B(E, 2);
        So(N), K(T), K(_);
        var L = B(_, 2), I = j(L), O = j(I), Y = j(O);
        K(O);
        var S = B(O, 2);
        So(S), K(I), K(L);
        var V = B(L, 2), x = j(V), P = j(x), M = j(P);
        K(P);
        var D = B(P, 2);
        So(D), K(x), K(V);
        var Z = B(V, 4), W = j(Z);
        const F = /* @__PURE__ */ ze(() => n().systemPrompt || "");
        Gt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(F);
          },
          oninput: (re) => {
            l(o, { systemPrompt: re.target.value });
          }
        }), K(Z);
        var le = B(Z, 4), G = j(le);
        const X = /* @__PURE__ */ ze(() => n().userPrompt || "");
        Gt(G, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (re) => {
            l(o, { userPrompt: re.target.value });
          }
        }), K(le);
        var ae = B(le, 2), ve = j(ae);
        at(ve, {
          level: 3,
          mt: "10px",
          children: (re, Le) => {
            Oe();
            var He = qe("输出参数");
            A(re, He);
          },
          $$slots: { default: !0 }
        });
        var me = B(ve, 2);
        const ce = /* @__PURE__ */ ze(() => n().outType ? [n().outType] : []);
        $n(me, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (re) => {
            const Le = re.value;
            l(o, () => ({ outType: Le }));
          },
          get value() {
            return g(ce);
          }
        });
        var Ve = B(me, 2);
        rt(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (re, Le) => {
            var He = Wy();
            A(re, He);
          },
          $$slots: { default: !0 }
        }), K(ae);
        var ue = B(ae, 2);
        Qn(ue, {}), Te(() => {
          on(H, `Temperature: ${n().temperature ?? 0.5}`), Ea(N, n().temperature ?? 0.5), on(Y, `Top P: ${n().topP ?? 0.9}`), Ea(S, n().topP ?? 0.9), on(M, `Top K: ${n().topK ?? 50}`), Ea(D, n().topK ?? 50);
        }), Ue("mousedown", N, Pa(function(re) {
          We.call(this, t, re);
        })), Ue("input", N, (re) => l(o, { temperature: parseFloat(re.target.value) })), Ue("mousedown", S, Pa(function(re) {
          We.call(this, t, re);
        })), Ue("input", S, (re) => l(o, { topP: parseFloat(re.target.value) })), Ue("mousedown", D, Pa(function(re) {
          We.call(this, t, re);
        })), Ue("input", D, (re) => l(o, { topK: parseInt(re.target.value) })), A(u, d);
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
de(uf, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Fy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  ge(t, !0), st(e, Uy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  ln(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = St(), { addParameter: i } = Rn(), { updateNodeData: a } = Ut(), s = [
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
        var u = Xy();
        A(l, u);
      },
      children: (l, u) => {
        var c = Gy(), d = Ce(c), f = j(d);
        at(f, {
          level: 3,
          children: (L, I) => {
            Oe();
            var O = qe("输入参数");
            A(L, O);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        rt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, I) => {
            var O = Fy();
            A(L, O);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2);
        at(b, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            Oe();
            var O = qe("代码");
            A(L, O);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), C = j($);
        const h = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        $n(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (L) => {
            const I = L.value;
            a(o, () => ({ engine: I }));
          },
          get value() {
            return g(h);
          }
        }), K($);
        var k = B($, 4), p = j(k);
        const _ = /* @__PURE__ */ ze(() => n().code || "");
        Gt(p, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (L) => {
            a(o, () => ({ code: L.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(k);
        var T = B(k, 2), E = j(T);
        at(E, {
          level: 3,
          mt: "10px",
          children: (L, I) => {
            Oe();
            var O = qe("输出参数");
            A(L, O);
          },
          $$slots: { default: !0 }
        });
        var H = B(E, 2);
        rt(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (L, I) => {
            var O = qy();
            A(L, O);
          },
          $$slots: { default: !0 }
        }), K(T);
        var N = B(T, 2);
        Qn(N, {}), A(l, c);
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
de(cf, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Qy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function df(e, t) {
  ge(t, !0), st(e, tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), { updateNodeData: a } = Ut();
  return vr(() => {
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
        var l = Jy();
        A(s, l);
      },
      children: (s, l) => {
        var u = ew(), c = Ce(u), d = j(c);
        at(d, {
          level: 3,
          children: (_, T) => {
            Oe();
            var E = qe("输入参数");
            A(_, E);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        rt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, T) => {
            var E = Qy();
            A(_, E);
          },
          $$slots: { default: !0 }
        }), K(c);
        var v = B(c, 2);
        nn(v, {});
        var w = B(v, 2);
        at(w, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            Oe();
            var E = qe("代码");
            A(_, E);
          },
          $$slots: { default: !0 }
        });
        var b = B(w, 4), $ = j(b);
        const C = /* @__PURE__ */ ze(() => n().template || "");
        Gt($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            a(o, () => ({ template: _.target.value }));
          },
          get value() {
            return g(C);
          }
        }), K(b);
        var h = B(b, 2), k = j(h);
        at(k, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            Oe();
            var E = qe("输出参数");
            A(_, E);
          },
          $$slots: { default: !0 }
        }), K(h);
        var p = B(h, 2);
        Qn(p, {}), A(s, u);
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
de(df, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), rw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), cw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), dw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const vw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function ff(e, t) {
  ge(t, !0), st(e, vw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  ln(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = St(), { addParameter: a } = Rn(), { updateNodeData: s } = Ut();
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = nw();
        A(l, u);
      },
      children: (l, u) => {
        var c = fw(), d = Ce(c), f = j(d), v = j(f);
        const w = /* @__PURE__ */ ze(() => n().method ? [n().method] : ["get"]);
        $n(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const fe = se.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return g(w);
          }
        }), K(f);
        var b = B(f, 2), $ = j(b);
        const C = /* @__PURE__ */ ze(() => n().url || "");
        Dt($, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return g(C);
          }
        }), K(b), K(d);
        var h = B(d, 2), k = j(h);
        at(k, {
          level: 3,
          children: (se, fe) => {
            Oe();
            var Se = qe("Http 头信息");
            A(se, Se);
          },
          $$slots: { default: !0 }
        });
        var p = B(k, 2);
        rt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, fe) => {
            var Se = rw();
            A(se, Se);
          },
          $$slots: { default: !0 }
        }), K(h);
        var _ = B(h, 2);
        nn(_, { dataKeyName: "headers" });
        var T = B(_, 2), E = j(T);
        at(E, {
          level: 3,
          children: (se, fe) => {
            Oe();
            var Se = qe("参数");
            A(se, Se);
          },
          $$slots: { default: !0 }
        });
        var H = B(E, 2);
        rt(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (se, fe) => {
            var Se = ow();
            A(se, Se);
          },
          $$slots: { default: !0 }
        }), K(T);
        var N = B(T, 2);
        nn(N, { dataKeyName: "urlParameters" });
        var L = B(N, 2);
        at(L, {
          level: 3,
          mt: "10px",
          children: (se, fe) => {
            Oe();
            var Se = qe("Body");
            A(se, Se);
          },
          $$slots: { default: !0 }
        });
        var I = B(L, 2), O = j(I), Y = j(O);
        const S = /* @__PURE__ */ ze(() => !n().bodyType);
        Dt(Y, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Oe(), K(O);
        var V = B(O, 2), x = j(V);
        const P = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        Dt(x, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Oe(), K(V);
        var M = B(V, 2), D = j(M);
        const Z = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        Dt(D, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Z);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Oe(), K(M);
        var W = B(M, 2), F = j(W);
        const le = /* @__PURE__ */ ze(() => n().bodyType === "json");
        Dt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(le);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Oe(), K(W);
        var G = B(W, 2), X = j(G);
        const ae = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        Dt(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ae);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Oe(), K(G), K(I);
        var ve = B(I, 2);
        {
          var me = (se) => {
            var fe = aw(), Se = Ce(fe), Fe = j(Se);
            at(Fe, {
              level: 3,
              children: (lt, ne) => {
                Oe();
                var Ie = qe("参数");
                A(lt, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ae = B(Fe, 2);
            rt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (lt, ne) => {
                var Ie = iw();
                A(lt, Ie);
              },
              $$slots: { default: !0 }
            }), K(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromData" }), A(se, fe);
          };
          ke(ve, (se) => {
            n().bodyType === "form-data" && se(me);
          });
        }
        var ce = B(ve, 2);
        {
          var Ve = (se) => {
            var fe = lw(), Se = Ce(fe), Fe = j(Se);
            at(Fe, {
              level: 3,
              children: (lt, ne) => {
                Oe();
                var Ie = qe("参数");
                A(lt, Ie);
              },
              $$slots: { default: !0 }
            });
            var Ae = B(Fe, 2);
            rt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (lt, ne) => {
                var Ie = sw();
                A(lt, Ie);
              },
              $$slots: { default: !0 }
            }), K(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), A(se, fe);
          };
          ke(ce, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(Ve);
          });
        }
        var ue = B(ce, 2);
        {
          var re = (se) => {
            var fe = uw(), Se = j(fe);
            Gt(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Fe) => {
                s(i, { bodyJson: Fe.target.value });
              }
            }), K(fe), A(se, fe);
          };
          ke(ue, (se) => {
            n().bodyType === "json" && se(re);
          });
        }
        var Le = B(ue, 2);
        {
          var He = (se) => {
            var fe = cw(), Se = j(fe);
            Gt(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Fe) => {
                s(i, { bodyRaw: Fe.target.value });
              }
            }), K(fe), A(se, fe);
          };
          ke(Le, (se) => {
            n().bodyType === "raw" && se(He);
          });
        }
        var Ze = B(Le, 2), te = j(Ze);
        at(te, {
          level: 3,
          mt: "10px",
          children: (se, fe) => {
            Oe();
            var Se = qe("输出参数");
            A(se, Se);
          },
          $$slots: { default: !0 }
        });
        var Ge = B(te, 2);
        rt(Ge, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, fe) => {
            var Se = dw();
            A(se, Se);
          },
          $$slots: { default: !0 }
        }), K(Ze);
        var Je = B(Ze, 2);
        Qn(Je, {}), A(l, c);
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
de(ff, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), hw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  ge(t, !0), st(e, mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = Gn();
  let s = /* @__PURE__ */ Ot(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
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
        var c = gw();
        A(u, c);
      },
      children: (u, c) => {
        var d = pw(), f = Ce(d), v = j(f);
        at(v, {
          level: 3,
          children: (O, Y) => {
            Oe();
            var S = qe("输入参数");
            A(O, S);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        rt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, Y) => {
            var S = hw();
            A(O, S);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        at($, {
          level: 3,
          mt: "10px",
          children: (O, Y) => {
            Oe();
            var S = qe("知识库设置");
            A(O, S);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (O) => {
            const Y = O.value;
            l(o, () => ({ knowledgeId: Y }));
          },
          get value() {
            return g(k);
          }
        }), K(C);
        var p = B(C, 4), _ = j(p);
        Dt(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (O) => {
            const Y = O.target.value;
            l(o, () => ({ keyword: Y }));
          }
        }), K(p);
        var T = B(p, 4), E = j(T);
        const H = /* @__PURE__ */ ze(() => n().limit || "");
        Dt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (O) => {
            const Y = O.target.value;
            l(o, () => ({ limit: Y }));
          },
          get value() {
            return g(H);
          }
        }), K(T);
        var N = B(T, 2), L = j(N);
        at(L, {
          level: 3,
          mt: "10px",
          children: (O, Y) => {
            Oe();
            var S = qe("输出参数");
            A(O, S);
          },
          $$slots: { default: !0 }
        }), K(N);
        var I = B(N, 2);
        Qn(I, {}), A(u, d);
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
var yw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ww = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const xw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  ge(t, !0), st(e, xw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = Gn();
  let s = /* @__PURE__ */ Ot(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
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
        var c = yw();
        A(u, c);
      },
      children: (u, c) => {
        var d = bw(), f = Ce(d), v = j(f);
        at(v, {
          level: 3,
          children: (I, O) => {
            Oe();
            var Y = qe("输入参数");
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        rt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, O) => {
            var Y = ww();
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        at($, {
          level: 3,
          mt: "10px",
          children: (I, O) => {
            Oe();
            var Y = qe("搜索引擎设置");
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const O = I.value;
            l(o, () => ({ engine: O }));
          },
          get value() {
            return g(k);
          }
        }), K(C);
        var p = B(C, 4), _ = j(p);
        Dt(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const O = I.target.value;
            l(o, () => ({ keyword: O }));
          }
        }), K(p);
        var T = B(p, 4), E = j(T);
        Dt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const O = I.target.value;
            l(o, () => ({ limit: O }));
          }
        }), K(T);
        var H = B(T, 2), N = j(H);
        at(N, {
          level: 3,
          mt: "10px",
          children: (I, O) => {
            Oe();
            var Y = qe("输出参数");
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), K(H);
        var L = B(H, 2);
        Qn(L, {}), A(u, d);
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
de(gf, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Cw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const _w = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function hf(e, t) {
  ge(t, !0), st(e, _w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = Gn();
  let s = /* @__PURE__ */ Ot(fn([]));
  return ln(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = $w();
        A(l, u);
      },
      handle: (l) => {
        hr(l, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = kw(), d = Ce(c), f = j(d);
        at(f, {
          level: 3,
          children: (h, k) => {
            Oe();
            var p = qe("循环变量");
            A(h, p);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        rt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (h, k) => {
            var p = Cw();
            A(h, p);
          },
          $$slots: { default: !0 }
        }), K(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2), $ = j(b);
        at($, {
          level: 3,
          mt: "10px",
          children: (h, k) => {
            Oe();
            var p = qe("输出参数");
            A(h, p);
          },
          $$slots: { default: !0 }
        }), K(b);
        var C = B(b, 2);
        Qn(C, {}), A(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
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
de(hf, { data: {} }, [], [], !0);
const Sw = {
  startNode: rf,
  codeNode: cf,
  llmNode: uf,
  templateNode: df,
  httpNode: ff,
  knowledgeNode: vf,
  searchEngineNode: gf,
  loopNode: hf,
  endNode: sf
};
var Ew = /* @__PURE__ */ ie("<!> ", 1);
function cs(e, t) {
  ge(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return rt(e, {
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
      var u = Ew(), c = Ce(u);
      Ps(c, n);
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
  cs,
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
var Pw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Tw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Mw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function pf(e, t) {
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
  ], a = [], s = Gn().customNodes;
  if (s) {
    const $ = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of $)
      a.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = Mw(), u = j(l), c = j(u), d = j(c);
  Id(d, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      U(n, $.value.toString(), !0);
    }
  }), K(c);
  var f = B(c, 2), v = j(f);
  qt(v, 21, () => o, zo, ($, C) => {
    cs($, bt(() => g(C)));
  }), K(v);
  var w = B(v, 2);
  qt(w, 21, () => a, zo, ($, C) => {
    cs($, bt(() => g(C)));
  }), K(w), K(f), K(u);
  var b = B(u, 2);
  rt(b, {
    onclick: () => {
      U(r, g(r) ? "" : "show", !0);
    },
    children: ($, C) => {
      var h = dt(), k = Ce(h);
      {
        var p = (T) => {
          var E = Pw();
          A(T, E);
        }, _ = (T) => {
          var E = Tw();
          A(T, E);
        };
        ke(k, (T) => {
          g(r) === "show" ? T(p) : T(_, !1);
        });
      }
      A($, h);
    },
    $$slots: { default: !0 }
  }), K(l), Te(() => {
    Vt(l, 1, `tf-toolbar ${g(r) ?? ""}`), xt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), xt(w, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), A(e, l), he();
}
de(pf, {}, [], [], !0);
const Vw = () => {
  const { nodeLookup: e } = nt();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Nw = () => {
  const { nodes: e } = nt();
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
}, Hw = () => {
  const { edges: e } = nt();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var zw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Dw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ ie("<!> <div></div> <!>", 1);
const Iw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function mf(e, t) {
  var n;
  ge(t, !0), st(e, Iw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = St(), { addParameter: a } = Rn(), s = Ut(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = Gn().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  vr(() => {
    r().expand && d && d.append(u);
  }), vr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ ze(() => ({
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
        var w = dt(), b = Ce(w);
        Ps(b, () => c.icon), A(v, w);
      },
      children: (v, w) => {
        var b = Aw(), $ = Ce(b);
        {
          var C = (_) => {
            var T = Ow(), E = Ce(T), H = j(E);
            at(H, {
              level: 3,
              children: (I, O) => {
                Oe();
                var Y = qe("输入参数");
                A(I, Y);
              },
              $$slots: { default: !0 }
            });
            var N = B(H, 2);
            rt(N, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (I, O) => {
                var Y = zw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), K(E);
            var L = B(E, 2);
            nn(L, {}), A(_, T);
          };
          ke($, (_) => {
            c.parametersEnable !== !1 && _(C);
          });
        }
        var h = B($, 2);
        Dn(h, (_) => d = _, () => d);
        var k = B(h, 2);
        {
          var p = (_) => {
            var T = Lw(), E = Ce(T), H = j(E);
            at(H, {
              level: 3,
              mt: "10px",
              children: (I, O) => {
                Oe();
                var Y = qe("输出参数");
                A(I, Y);
              },
              $$slots: { default: !0 }
            });
            var N = B(H, 2);
            rt(N, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (I, O) => {
                var Y = Dw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), K(E);
            var L = B(E, 2);
            Qn(L, {}), A(_, T);
          };
          ke(k, (_) => {
            c.outputDefsEnable !== !1 && _(p);
          });
        }
        Te(() => {
          xt(h, c.rootStyle || ""), Vt(h, 1, _n(c.rootClass), "svelte-c71dg3");
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
de(mf, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Zw = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), Yw = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function yf(e, t) {
  ge(t, !0), st(e, Bw);
  const [n, r] = ft(), o = () => ee(T, "$nodes", n), i = () => ee(E, "$edges", n), a = () => ee(H, "$viewport", n), s = y(t, "onInit", 7), l = Ut();
  s()(l);
  let u = /* @__PURE__ */ Ot(!1);
  const c = (x) => {
    x.preventDefault(), x.dataTransfer && (x.dataTransfer.dropEffect = "move");
  }, d = (x) => {
    var P;
    x.preventDefault();
    const M = l.screenToFlowPosition({
      x: x.clientX - 250,
      y: x.clientY - 100
    }), D = (P = x.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), Z = D ? JSON.parse(D) : {}, W = {
      id: `node_${ao()}`,
      position: M,
      data: {},
      ...Z
    };
    ki.addNode(W), ki.selectNodeOnly(W.id);
  }, { getNode: f } = Vw(), v = (x) => {
    const P = f(x.source), M = f(x.target);
    if (x.sourceHandle === "loop_handle" || P.parentId) {
      const D = l.getEdges();
      for (let Z of D)
        if (Z.target === x.target) {
          const W = f(Z.source);
          if (x.sourceHandle === "loop_handle" && W.parentId !== P.id || P.parentId && W.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && M.parentId && M.parentId !== P.id);
  }, { ensureParentInNodesBefore: w } = Nw(), b = (x, P) => {
    if (!P.isValid)
      return;
    const M = P.toNode;
    if (M.parentId)
      return;
    const D = P.fromNode, Z = P.fromHandle, W = { position: { ...M.position } };
    if (Z.id === "loop_handle" ? W.parentId = D.id : D.parentId && (W.parentId = D.parentId), W.parentId) {
      const F = f(W.parentId);
      W.position = {
        x: M.position.x - F.position.x,
        y: M.position.y - F.position.y
      }, w(W.parentId, M.id), l.updateNode(M.id, W);
    }
  }, { getEdgesByTarget: $ } = Hw(), C = (x) => {
    x.edges.forEach((P) => {
      const M = f(P.target);
      if (M.parentId) {
        const D = $(P.target), Z = f(M.parentId);
        if (D.length === 0)
          l.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + Z.position.x,
              y: M.position.y + Z.position.y
            }
          });
        else {
          let W = !1;
          for (let F = 0; F < D.length; F++) {
            const le = D[F], G = f(le.source);
            if (G.parentId || G.type === "loopNode") {
              W = !0;
              break;
            }
          }
          W || l.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + Z.position.x,
              y: M.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, h = (x, P) => {
  }, k = (x) => {
  }, p = {}, _ = Gn().customNodes;
  if (_)
    for (let x of Object.keys(_))
      p[x] = mf;
  const { nodes: T, edges: E, viewport: H } = nt(), N = Gn().onDataChange;
  N && (T.subscribe(() => {
    N(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), E.subscribe(() => {
    N(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), H.subscribe(() => {
    N(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = Yw(), I = j(L);
  const O = /* @__PURE__ */ ze(() => ({ ...Sw, ...p })), Y = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  kd(I, bt(
    {
      get nodeTypes() {
        return g(O);
      }
    },
    ki,
    {
      class: "tinyflow-logo",
      isValidConnection: v,
      onconnectend: b,
      onconnectstart: h,
      onconnect: k,
      connectionRadius: 50,
      ondelete: C,
      onclick: (x) => {
        const P = x.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || U(u, !1);
      },
      get defaultEdgeOptions() {
        return g(Y);
      },
      $$events: {
        drop: d,
        dragover: c,
        edgeclick: () => {
          U(u, !0);
        }
      },
      children: (x, P) => {
        var M = Zw(), D = Ce(M);
        zd(D, {});
        var Z = B(D, 2);
        Vd(Z, {});
        var W = B(Z, 2);
        Dd(W, {});
        var F = B(W, 2);
        {
          var le = (G) => {
            ei(G, {
              children: (X, ae) => {
                var ve = Rw(), me = B(j(ve), 4), ce = j(me);
                Gt(ce, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Ve) => {
                  }
                }), K(me), K(ve), A(X, ve);
              },
              $$slots: { default: !0 }
            });
          };
          ke(F, (G) => {
            g(u) && G(le);
          });
        }
        A(x, M);
      },
      $$slots: { default: !0 }
    }
  ));
  var S = B(I, 2);
  pf(S, {}), K(L), A(e, L);
  var V = he({
    get onInit() {
      return s();
    },
    set onInit(x) {
      s(x), m();
    }
  });
  return r(), V;
}
de(yf, { onInit: {} }, [], [], !0);
function Ww(e, t) {
  ge(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ki.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ur("tinyflow_options", n()), _d(e, {
    fitView: !0,
    children: (i, a) => {
      yf(i, {
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
customElements.define("tinyflow-component", de(Ww, { options: {}, onInit: {} }, [], [], !1));
const Fw = xf((e, t) => {
  const n = Js(null), r = Js(null);
  $f(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return Cf(() => {
    if (n.current) {
      const s = new Wm({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Ef.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  Fw as Tinyflow
};
//# sourceMappingURL=index.js.map
