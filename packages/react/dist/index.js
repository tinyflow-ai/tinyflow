import vu, { forwardRef as xf, useRef as Js, useImperativeHandle as $f, useEffect as _f } from "react";
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
function Cf() {
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
function kf() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, b = "@@iterator";
    function x(N) {
      if (N === null || typeof N != "object")
        return null;
      var G = w && N[w] || N[b];
      return typeof G == "function" ? G : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(N) {
      {
        for (var G = arguments.length, he = new Array(G > 1 ? G - 1 : 0), Se = 1; Se < G; Se++)
          he[Se - 1] = arguments[Se];
        C("error", N, he);
      }
    }
    function C(N, G, he) {
      {
        var Se = _.ReactDebugCurrentFrame, R = Se.getStackAddendum();
        R !== "" && (G += "%s", he = he.concat([R]));
        var it = he.map(function(je) {
          return String(je);
        });
        it.unshift("Warning: " + G), Function.prototype.apply.call(console[N], console, it);
      }
    }
    var y = !1, k = !1, E = !1, S = !1, M = !1, T;
    T = Symbol.for("react.module.reference");
    function z(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === i || M || N === o || N === u || N === c || S || N === v || y || k || E || typeof N == "object" && N !== null && (N.$$typeof === f || N.$$typeof === d || N.$$typeof === a || N.$$typeof === s || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === T || N.getModuleId !== void 0));
    }
    function L(N, G, he) {
      var Se = N.displayName;
      if (Se)
        return Se;
      var R = G.displayName || G.name || "";
      return R !== "" ? he + "(" + R + ")" : he;
    }
    function D(N) {
      return N.displayName || "Context";
    }
    function Z(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
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
      if (typeof N == "object")
        switch (N.$$typeof) {
          case s:
            var G = N;
            return D(G) + ".Consumer";
          case a:
            var he = N;
            return D(he._context) + ".Provider";
          case l:
            return L(N, N.render, "ForwardRef");
          case d:
            var Se = N.displayName || null;
            return Se !== null ? Se : Z(N.type) || "Memo";
          case f: {
            var R = N, it = R._payload, je = R._init;
            try {
              return Z(je(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, H = 0, $, O, V, A, Y, K, F;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Q() {
      {
        if (H === 0) {
          $ = console.log, O = console.info, V = console.warn, A = console.error, Y = console.group, K = console.groupCollapsed, F = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        H++;
      }
    }
    function j() {
      {
        if (H--, H === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, N, {
              value: $
            }),
            info: P({}, N, {
              value: O
            }),
            warn: P({}, N, {
              value: V
            }),
            error: P({}, N, {
              value: A
            }),
            group: P({}, N, {
              value: Y
            }),
            groupCollapsed: P({}, N, {
              value: K
            }),
            groupEnd: P({}, N, {
              value: F
            })
          });
        }
        H < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = _.ReactCurrentDispatcher, pe;
    function we(N, G, he) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (R) {
            var Se = R.stack.trim().match(/\n( *(at )?)/);
            pe = Se && Se[1] || "";
          }
        return `
` + pe + N;
      }
    }
    var ce = !1, Ve;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new le();
    }
    function re(N, G) {
      if (!N || ce)
        return "";
      {
        var he = Ve.get(N);
        if (he !== void 0)
          return he;
      }
      var Se;
      ce = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = ae.current, ae.current = null, Q();
      try {
        if (G) {
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
            } catch (Ct) {
              Se = Ct;
            }
            Reflect.construct(N, [], je);
          } else {
            try {
              je.call();
            } catch (Ct) {
              Se = Ct;
            }
            N.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            Se = Ct;
          }
          N();
        }
      } catch (Ct) {
        if (Ct && Se && typeof Ct.stack == "string") {
          for (var De = Ct.stack.split(`
`), Pt = Se.stack.split(`
`), gt = De.length - 1, pt = Pt.length - 1; gt >= 1 && pt >= 0 && De[gt] !== Pt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (De[gt] !== Pt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || De[gt] !== Pt[pt]) {
                    var Yt = `
` + De[gt].replace(" at new ", " at ");
                    return N.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", N.displayName)), typeof N == "function" && Ve.set(N, Yt), Yt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = it, j(), Error.prepareStackTrace = R;
      }
      var tr = N ? N.displayName || N.name : "", nr = tr ? we(tr) : "";
      return typeof N == "function" && Ve.set(N, nr), nr;
    }
    function Le(N, G, he) {
      return re(N, !1);
    }
    function He(N) {
      var G = N.prototype;
      return !!(G && G.isReactComponent);
    }
    function Ze(N, G, he) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return re(N, He(N));
      if (typeof N == "string")
        return we(N);
      switch (N) {
        case u:
          return we("Suspense");
        case c:
          return we("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case l:
            return Le(N.render);
          case d:
            return Ze(N.type, G, he);
          case f: {
            var Se = N, R = Se._payload, it = Se._init;
            try {
              return Ze(it(R), G, he);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Ue = {}, Je = _.ReactDebugCurrentFrame;
    function se(N) {
      if (N) {
        var G = N._owner, he = Ze(N.type, N._source, G ? G.type : null);
        Je.setExtraStackFrame(he);
      } else
        Je.setExtraStackFrame(null);
    }
    function fe(N, G, he, Se, R) {
      {
        var it = Function.call.bind(ee);
        for (var je in N)
          if (it(N, je)) {
            var De = void 0;
            try {
              if (typeof N[je] != "function") {
                var Pt = Error((Se || "React class") + ": " + he + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              De = N[je](G, je, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              De = gt;
            }
            De && !(De instanceof Error) && (se(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, je, typeof De), se(null)), De instanceof Error && !(De.message in Ue) && (Ue[De.message] = !0, se(R), h("Failed %s type: %s", he, De.message), se(null));
          }
      }
    }
    var Ee = Array.isArray;
    function qe(N) {
      return Ee(N);
    }
    function Ie(N) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, he = G && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return he;
      }
    }
    function vt(N) {
      try {
        return lt(N), !1;
      } catch {
        return !0;
      }
    }
    function lt(N) {
      return "" + N;
    }
    function te(N) {
      if (vt(N))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(N)), lt(N);
    }
    var Ae = _.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, Bt;
    function un(N) {
      if (ee.call(N, "ref")) {
        var G = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Te(N) {
      if (ee.call(N, "key")) {
        var G = Object.getOwnPropertyDescriptor(N, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function ut(N, G) {
      typeof N.ref == "string" && Ae.current;
    }
    function Be(N, G) {
      {
        var he = function() {
          Zt || (Zt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        he.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Re(N, G) {
      {
        var he = function() {
          Bt || (Bt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        he.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var ct = function(N, G, he, Se, R, it, je) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: G,
        ref: he,
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
        value: Se
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Jt(N, G, he, Se, R) {
      {
        var it, je = {}, De = null, Pt = null;
        he !== void 0 && (te(he), De = "" + he), Te(G) && (te(G.key), De = "" + G.key), un(G) && (Pt = G.ref, ut(G, R));
        for (it in G)
          ee.call(G, it) && !ye.hasOwnProperty(it) && (je[it] = G[it]);
        if (N && N.defaultProps) {
          var gt = N.defaultProps;
          for (it in gt)
            je[it] === void 0 && (je[it] = gt[it]);
        }
        if (De || Pt) {
          var pt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          De && Be(je, pt), Pt && Re(je, pt);
        }
        return ct(N, De, Pt, R, Se, Ae.current, je);
      }
    }
    var St = _.ReactCurrentOwner, Qn = _.ReactDebugCurrentFrame;
    function mt(N) {
      if (N) {
        var G = N._owner, he = Ze(N.type, N._source, G ? G.type : null);
        Qn.setExtraStackFrame(he);
      } else
        Qn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Pn(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function ot() {
      {
        if (St.current) {
          var N = Z(St.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function vo(N) {
      return "";
    }
    var er = {};
    function Ht(N) {
      {
        var G = ot();
        if (!G) {
          var he = typeof N == "string" ? N : N.displayName || N.name;
          he && (G = `

Check the top-level render call using <` + he + ">.");
        }
        return G;
      }
    }
    function wr(N, G) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var he = Ht(G);
        if (er[he])
          return;
        er[he] = !0;
        var Se = "";
        N && N._owner && N._owner !== St.current && (Se = " It was passed a child from " + Z(N._owner.type) + "."), mt(N), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), mt(null);
      }
    }
    function br(N, G) {
      {
        if (typeof N != "object")
          return;
        if (qe(N))
          for (var he = 0; he < N.length; he++) {
            var Se = N[he];
            Pn(Se) && wr(Se, G);
          }
        else if (Pn(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var R = x(N);
          if (typeof R == "function" && R !== N.entries)
            for (var it = R.call(N), je; !(je = it.next()).done; )
              Pn(je.value) && wr(je.value, G);
        }
      }
    }
    function Dr(N) {
      {
        var G = N.type;
        if (G == null || typeof G == "string")
          return;
        var he;
        if (typeof G == "function")
          he = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === d))
          he = G.propTypes;
        else
          return;
        if (he) {
          var Se = Z(G);
          fe(he, N.props, "prop", Se, N);
        } else if (G.PropTypes !== void 0 && !$t) {
          $t = !0;
          var R = Z(G);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function go(N) {
      {
        for (var G = Object.keys(N.props), he = 0; he < G.length; he++) {
          var Se = G[he];
          if (Se !== "children" && Se !== "key") {
            mt(N), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), mt(null);
            break;
          }
        }
        N.ref !== null && (mt(N), h("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ii = {};
    function ai(N, G, he, Se, R, it) {
      {
        var je = z(N);
        if (!je) {
          var De = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = vo();
          Pt ? De += Pt : De += ot();
          var gt;
          N === null ? gt = "null" : qe(N) ? gt = "array" : N !== void 0 && N.$$typeof === t ? (gt = "<" + (Z(N.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof N, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, De);
        }
        var pt = Jt(N, G, he, R, it);
        if (pt == null)
          return pt;
        if (je) {
          var Yt = G.children;
          if (Yt !== void 0)
            if (Se)
              if (qe(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  br(Yt[tr], N);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Yt, N);
        }
        if (ee.call(G, "key")) {
          var nr = Z(N), Ct = Object.keys(G).filter(function(li) {
            return li !== "key";
          }), Lr = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ii[nr + Lr]) {
            var si = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lr, nr, si, nr), ii[nr + Lr] = !0;
          }
        }
        return N === r ? go(pt) : Dr(pt), pt;
      }
    }
    function xa(N, G, he) {
      return ai(N, G, he, !0);
    }
    function $a(N, G, he) {
      return ai(N, G, he, !1);
    }
    var _a = $a, Ca = xa;
    po.Fragment = r, po.jsx = _a, po.jsxs = Ca;
  }()), po;
}
var tl;
function Ef() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? ui.exports = Cf() : ui.exports = kf()), ui.exports;
}
var Sf = Ef(), Pf = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Of = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => Of(e, typeof t != "symbol" ? t + "" : t, n), ds = (e, t, n) => t.has(e) || gu("Cannot " + n), yt = (e, t, n) => (ds(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ki = (e, t, n, r) => (ds(e, t, "write to private field"), t.set(e, n), n), Mf = (e, t, n) => (ds(e, t, "access private method"), n);
const Tf = "5";
var nl;
typeof window < "u" && ((nl = window.__svelte ?? (window.__svelte = {})).v ?? (nl.v = /* @__PURE__ */ new Set())).add(Tf);
let so = !1, Vf = !1;
function Hf() {
  so = !0;
}
Hf();
const fs = 1, vs = 2, hu = 4, zf = 8, Nf = 16, Df = 1, Lf = 2, pu = 4, If = 8, Af = 16, mu = 1, Rf = 2, gs = "[", hs = "[!", ps = "]", Br = {}, Wt = Symbol(), Zf = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/2000/svg", Yf = !1;
function Ji(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Xo = Array.isArray, Wf = Array.prototype.indexOf, ms = Array.from, Ei = Object.keys, Po = Object.defineProperty, Wn = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Xf = Object.prototype, jf = Array.prototype, ys = Object.getPrototypeOf, rl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const _t = () => {
};
function Kf(e) {
  return e();
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bn = 2, wu = 4, Qi = 8, ws = 16, Un = 32, Vr = 64, Si = 128, rn = 256, Pi = 512, At = 1024, Vn = 2048, pr = 4096, Xn = 8192, ea = 16384, qf = 32768, lo = 65536, Ff = 1 << 17, Uf = 1 << 19, bu = 1 << 20, Aa = 1 << 21, lr = Symbol("$state"), bs = Symbol("legacy props"), Gf = Symbol("");
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
let Xe;
function It(e) {
  if (e === null)
    throw ta(), Br;
  return Xe = e;
}
function Hn() {
  return It(
    /** @type {TemplateNode} */
    /* @__PURE__ */ In(Xe)
  );
}
function W(e) {
  if (Me) {
    if (/* @__PURE__ */ In(Xe) !== null)
      throw ta(), Br;
    Xe = e;
  }
}
function Ne(e = 1) {
  if (Me) {
    for (var t = e, n = Xe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ In(n);
    Xe = n;
  }
}
function Ra() {
  for (var e = 0, t = Xe; ; ) {
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
      /* @__PURE__ */ In(t)
    );
    t.remove(), t = r;
  }
}
function fn(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = ys(e);
  if (t !== Xf && t !== jf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Xo(e), o = /* @__PURE__ */ Nt(0), i = et, a = (s) => {
    var l = et;
    zn(i);
    var u = s();
    return zn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Nt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ov();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Nt(u.value)), n.set(l, c)) : U(
          c,
          a(() => fn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ Nt(Wt))
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
        if (l === lr)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Wn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ Nt(fn(f ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
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
          c === void 0 && (c = a(() => /* @__PURE__ */ Nt(d ? fn(s[l]) : Wt)), n.set(l, c));
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
            b !== void 0 ? U(b, Wt) : w in s && (b = a(() => /* @__PURE__ */ Nt(Wt)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Wn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ Nt(void 0)), U(
          f,
          a(() => fn(u))
        ), n.set(l, f)) : (v = f.v !== Wt, U(
          f,
          a(() => fn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= _.v && U(_, h + 1);
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
var Xt, xu, $u, _u;
function Za() {
  if (Xt === void 0) {
    Xt = window, xu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $u = Wn(t, "firstChild").get, _u = Wn(t, "nextSibling").get, rl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rl(n) && (n.__t = void 0);
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return $u.call(e);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return _u.call(e);
}
function X(e, t) {
  if (!Me)
    return /* @__PURE__ */ Lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Lt(Xe)
  );
  if (n === null)
    n = Xe.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), It(r), r;
  }
  return It(n), n;
}
function _e(e, t) {
  if (!Me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
  }
  return Xe;
}
function B(e, t = 1, n = !1) {
  let r = Me ? Xe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ In(r);
  if (!Me)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Kn();
    return r === null ? o == null || o.after(a) : r.before(a), It(a), a;
  }
  return It(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function Cu(e) {
  return e === this.v;
}
function $s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _s(e) {
  return !$s(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = bn | Vn, n = et !== null && et.f & bn ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt === null || n !== null && n.f & rn ? t |= rn : tt.f |= bu, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: Cu,
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
  const t = /* @__PURE__ */ qr(e);
  return Du(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = _s, t;
}
function ku(e) {
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
function Eu(e) {
  var t, n = tt;
  vr(sv(e));
  try {
    ku(e), t = Ru(e);
  } finally {
    vr(n);
  }
  return t;
}
function Su(e) {
  var t = Eu(e), n = (ar || e.f & rn) && e.deps !== null ? pr : At;
  pn(e, n), e.equals(t) || (e.v = t, e.wv = Iu());
}
function Pu(e) {
  tt === null && et === null && ev(), et !== null && et.f & rn && tt === null && Qf(), Ko && Jf();
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
    f: e | Vn,
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
      ra(i), i.f |= qf;
    } catch (l) {
      throw hn(i), l;
    }
  else t !== null && oa(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bu | Si)) === 0;
  if (!a && r && (o !== null && lv(i, o), et !== null && et.f & bn)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Cs(e) {
  const t = Hr(Qi, null, !1);
  return pn(t, At), t.teardown = e, t;
}
function fr(e) {
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
  const t = Hr(Vr, e, !0);
  return () => {
    hn(t);
  };
}
function dv(e) {
  const t = Hr(Vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fr(t, () => {
      hn(t), r(void 0);
    }) : (hn(t), r(void 0));
  });
}
function en(e) {
  return Hr(wu, e, !1);
}
function me(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = uo(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), Nn(t));
  });
}
function kt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Qe
  );
  uo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & At && pn(n, pr), co(n) && ra(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function uo(e) {
  return Hr(Qi, e, !0);
}
function Oe(e, t = [], n = qr) {
  const r = t.map(n);
  return zr(() => e(...r.map(g)));
}
function zr(e, t = 0) {
  return Hr(Qi | ws | t, e, !0);
}
function qn(e, t = !0) {
  return Hr(Qi | Un, e, !0, t);
}
function Ou(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ko, r = et;
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
    n.f & Vr ? n.parent = null : hn(n, t), n = r;
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
  if ((t || e.f & Uf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ In(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Mu(e, t && !n), Vi(e, 0), pn(e, ea);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Ou(e);
  var s = e.parent;
  s !== null && s.first !== null && Tu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Tu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fr(e, t) {
  var n = [];
  ks(e, n, !0), Vu(n, () => {
    hn(e), t && t();
  });
}
function Vu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ks(e, t, n) {
  if (!(e.f & Xn)) {
    if (e.f ^= Xn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & lo) !== 0 || (r.f & Un) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Mo(e) {
  Hu(e, !0);
}
function Hu(e, t) {
  if (e.f & Xn) {
    e.f ^= Xn, e.f & At || (e.f ^= At), co(e) && (pn(e, Vn), oa(e));
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
let To = [], Vo = [];
function zu() {
  var e = To;
  To = [], Oo(e);
}
function Nu() {
  var e = Vo;
  Vo = [], Oo(e);
}
function jo(e) {
  To.length === 0 && queueMicrotask(zu), To.push(e);
}
function gv(e) {
  Vo.length === 0 && vv(Nu), Vo.push(e);
}
function il() {
  To.length > 0 && zu(), Vo.length > 0 && Nu();
}
let mi = !1, Oi = !1, Mi = null, Cr = !1, Ko = !1;
function al(e) {
  Ko = e;
}
let ko = [], et = null, On = !1;
function zn(e) {
  et = e;
}
let tt = null;
function vr(e) {
  tt = e;
}
let gn = null;
function hv(e) {
  gn = e;
}
function Du(e) {
  et !== null && et.f & Aa && (gn === null ? hv([e]) : gn.push(e));
}
let zt = null, Qt = 0, dn = null;
function pv(e) {
  dn = e;
}
let Lu = 1, Ti = 0, ar = !1;
function Iu() {
  return ++Lu;
}
function co(e) {
  var t, n = e.f;
  if (n & Vn)
    return !0;
  if (n & pr) {
    var r = e.deps, o = (n & rn) !== 0;
    if (r !== null) {
      var i, a, s = (n & Pi) !== 0, l = o && tt !== null && !ar, u = r.length;
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
        ) && Su(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || tt !== null && !ar) && pn(e, At);
  }
  return !1;
}
function mv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Si)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Si;
      }
    n = n.parent;
  }
  throw mi = !1, e;
}
function yv(e) {
  return (e.f & ea) === 0 && (e.parent === null || (e.parent.f & Si) === 0);
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
function Au(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      gn != null && gn.includes(e) || (i.f & bn ? Au(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Vn) : i.f & At && pn(i, pr), oa(
        /** @type {Effect} */
        i
      )));
    }
}
function Ru(e) {
  var t, n = zt, r = Qt, o = dn, i = et, a = ar, s = gn, l = Qe, u = On, c = e.f;
  zt = /** @type {null | Value[]} */
  null, Qt = 0, dn = null, ar = (c & rn) !== 0 && (On || !Cr || et === null), et = c & (Un | Vr) ? null : e, gn = null, ll(e.ctx), On = !1, Ti++, e.f |= Aa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (zt !== null) {
      var v;
      if (Vi(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + zt.length, v = 0; v < zt.length; v++)
          f[Qt + v] = zt[v];
      else
        e.deps = f = zt;
      if (!ar)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Vi(e, Qt), f.length = Qt);
    if (ia() && dn !== null && !On && f !== null && !(e.f & (bn | pr | Vn)))
      for (v = 0; v < /** @type {Source[]} */
      dn.length; v++)
        Au(
          dn[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (Ti++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    zt = n, Qt = r, dn = o, et = i, ar = a, gn = s, ll(l), On = u, e.f ^= Aa;
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
  (zt === null || !zt.includes(t)) && (pn(t, pr), t.f & (rn | Pi) || (t.f ^= Pi), ku(
    /** @type {Derived} **/
    t
  ), Vi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Vi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      wv(e, n[r]);
}
function ra(e) {
  var t = e.f;
  if (!(t & ea)) {
    pn(e, At);
    var n = tt, r = Qe, o = Cr;
    tt = e, Cr = !0;
    try {
      t & ws ? fv(e) : Mu(e), Ou(e);
      var i = Ru(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Lu;
      var a = e.deps, s;
      Yf && Vf && e.f & Vn;
    } catch (l) {
      na(l, e, n, r || e.ctx);
    } finally {
      Cr = o, tt = n;
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
  var e = Cr;
  try {
    var t = 0;
    for (Cr = !0; ko.length > 0; ) {
      t++ > 1e3 && bv();
      var n = ko, r = n.length;
      ko = [];
      for (var o = 0; o < r; o++) {
        var i = $v(n[o]);
        xv(i);
      }
      Ho.clear();
    }
  } finally {
    Oi = !1, Cr = e, Mi = null;
  }
}
function xv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (ea | Xn)))
        try {
          co(r) && (ra(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Tu(r) : r.fn = null));
        } catch (o) {
          na(o, r, null, r.ctx);
        }
    }
}
function oa(e) {
  Oi || (Oi = !0, queueMicrotask(Zu));
  for (var t = Mi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Vr | Un)) {
      if (!(n & At)) return;
      t.f ^= At;
    }
  }
  ko.push(t);
}
function $v(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Un | Vr)) !== 0, i = o && (r & At) !== 0;
    if (!i && !(r & Xn)) {
      if (r & wu)
        t.push(n);
      else if (o)
        n.f ^= At;
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
function p(e) {
  var t;
  for (il(); ko.length > 0; )
    Oi = !0, Zu(), il();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & bn) !== 0;
  if (et !== null && !On) {
    if (!(gn != null && gn.includes(e))) {
      var r = et.deps;
      e.rv < Ti && (e.rv = Ti, zt === null && r !== null && r[Qt] === e ? Qt++ : zt === null ? zt = [e] : (!ar || !zt.includes(e)) && zt.push(e));
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
  e, co(o) && Su(o)), Ko && Ho.has(e) ? Ho.get(e) : e.v;
}
function Nn(e) {
  var t = On;
  try {
    return On = !0, e();
  } finally {
    On = t;
  }
}
const _v = -7169;
function pn(e, t) {
  e.f = e.f & _v | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Ba(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Ba(n);
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
function Ur(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t) {
  const n = Ur(e);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Ur(e);
  return t || (r.equals = _s), so && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function U(e, t, n = !1) {
  et !== null && !On && ia() && et.f & (bn | ws) && !(gn != null && gn.includes(e)) && av();
  let r = n ? fn(t) : t;
  return Ya(e, r);
}
function Ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ko ? Ho.set(e, t) : Ho.set(e, n), e.v = t, e.f & bn && (e.f & Vn && Eu(
      /** @type {Derived} */
      e
    ), pn(e, e.f & rn ? pr : At)), e.wv = Iu(), Bu(e, Vn), ia() && tt !== null && tt.f & At && !(tt.f & (Un | Vr)) && (dn === null ? pv([e]) : dn.push(e));
  }
  return t;
}
function sl(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Bu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ia(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Vn || !r && a === tt || (pn(a, t), s & (At | rn) && (s & bn ? Bu(
        /** @type {Derived} */
        a,
        pr
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
function Er(e) {
  return (
    /** @type {T} */
    Es().get(e)
  );
}
function Gr(e, t) {
  return Es().set(e, t), t;
}
function Cv(e) {
  return Es().has(e);
}
function ve(e, t = !1, n) {
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
    r2: Ur(!1)
  }), Cs(() => {
    r.d = !0;
  });
}
function ge(e) {
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
          vr(i.effect), zn(i.reaction), en(i.fn);
        }
      } finally {
        vr(n), zn(r);
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
function Es(e) {
  return Qe === null && Ji(), Qe.c ?? (Qe.c = new Map(kv(Qe) || void 0));
}
function kv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Ev(e) {
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
function Pv(e) {
  return Sv.includes(e);
}
const Ov = {
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
  return e = e.toLowerCase(), Ov[e] ?? e;
}
const Tv = ["touchstart", "touchmove"];
function Vv(e) {
  return Tv.includes(e);
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
function Nv(e, t) {
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
function Iv(e) {
  var t = et, n = tt;
  zn(null), vr(null);
  try {
    return e();
  } finally {
    zn(t), vr(n);
  }
}
const Yu = /* @__PURE__ */ new Set(), Wa = /* @__PURE__ */ new Set();
function Wu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || xo.call(t, i), !i.cancelBubble)
      return Iv(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ge(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Wu(e, t, n, i);
  (t === document.body || t === window || t === document) && Cs(() => {
    t.removeEventListener(e, a, i);
  });
}
function aa(e) {
  for (var t = 0; t < e.length; t++)
    Yu.add(e[t]);
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
    zn(null), vr(null);
    try {
      for (var v, w = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Xo(x)) {
              var [_, ...h] = x;
              _.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch (C) {
          v ? w.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let C of w)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, zn(d), vr(f);
    }
  }
}
function Ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
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
      return qt(Xe, null), Xe;
    o === void 0 && (o = Ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
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
      qt(s, l);
    } else
      qt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & mu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Me)
      return qt(Xe, null), Xe;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Ss(i)
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
      qt(c, d);
    } else
      qt(u, u);
    return u;
  };
}
function Fe(e = "") {
  if (!Me) {
    var t = Kn(e + "");
    return qt(t, t), t;
  }
  var n = Xe;
  return n.nodeType !== 3 && (n.before(n = Kn()), It(n)), qt(n, n), n;
}
function dt() {
  if (Me)
    return qt(Xe, null), Xe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), qt(t, n), e;
}
function I(e, t) {
  if (Me) {
    tt.nodes_end = Xe, Hn();
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
function Xu(e, t) {
  return ju(e, t);
}
function Av(e, t) {
  Za(), t.intro = t.intro ?? !1;
  const n = t.target, r = Me, o = Xe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Lt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== gs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ In(i);
    if (!i)
      throw Br;
    tn(!0), It(
      /** @type {Comment} */
      i
    ), Hn();
    const a = ju(e, { ...t, anchor: i });
    if (Xe === null || Xe.nodeType !== 8 || /** @type {Comment} */
    Xe.data !== ps)
      throw ta(), Br;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Br)
      return t.recover === !1 && nv(), Za(), xs(n), tn(!1), Xu(e, t);
    throw a;
  } finally {
    tn(r), It(o);
  }
}
const Ir = /* @__PURE__ */ new Map();
function ju(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Za();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var w = Vv(v);
        t.addEventListener(v, xo, { passive: w });
        var b = Ir.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: w }), Ir.set(v, 1)) : Ir.set(v, b + 1);
      }
    }
  };
  l(ms(Yu)), Wa.add(l);
  var u = void 0, c = dv(() => {
    var d = n ?? t.appendChild(Kn());
    return qn(() => {
      if (i) {
        ve({});
        var f = (
          /** @type {ComponentContext} */
          Qe
        );
        f.c = i;
      }
      o && (r.$$events = o), Me && qt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Me && (tt.nodes_end = Xe), i && ge();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var w = (
          /** @type {number} */
          Ir.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, xo), Ir.delete(v)) : Ir.set(v, w);
      }
      Wa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Xa.set(u, c), u;
}
let Xa = /* @__PURE__ */ new WeakMap();
function Rv(e, t) {
  const n = Xa.get(e);
  return n ? (Xa.delete(e), n(t)) : Promise.resolve();
}
function Ce(e, t, [n, r] = [0, 0]) {
  Me && n === 0 && Hn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Me && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === gs ? r = 0 : x === hs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ra(), It(o), tn(!1), w = !0, r = -1);
    }
    s ? (i ? Mo(i) : v && (i = qn(() => v(o))), a && Fr(a, () => {
      a = null;
    })) : (a ? Mo(a) : v && (a = qn(() => v(o, [n + 1, r]))), i && Fr(i, () => {
      i = null;
    })), w && tn(!0);
  };
  zr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Me && (o = Xe);
}
function zo(e, t) {
  return t;
}
function Zv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    ks(t[a].e, o, !0);
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
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Vu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), hn(c.e, !s);
    }
  });
}
function Ft(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Me ? It(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Lt(u)
    ) : u.appendChild(Kn());
  }
  Me && Hn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Xo(v) ? v : v == null ? [] : ms(v);
  });
  zr(() => {
    var v = g(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Me) {
      var x = (
        /** @type {Comment} */
        a.data === hs
      );
      x !== (w === 0) && (a = Ra(), It(a), tn(!1), b = !0);
    }
    if (Me) {
      for (var _ = null, h, C = 0; C < w; C++) {
        if (Xe.nodeType === 8 && /** @type {Comment} */
        Xe.data === ps) {
          a = /** @type {Comment} */
          Xe, b = !0, tn(!1);
          break;
        }
        var y = v[C], k = r(y, C);
        h = Ku(
          Xe,
          s,
          _,
          null,
          y,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, h), _ = h;
      }
      w > 0 && It(Ra());
    }
    Me || Bv(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? Mo(c) : c = qn(() => i(a)) : c !== null && Fr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), Me && (a = Xe);
}
function Bv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & zf) !== 0, f = (o & (fs | vs)) !== 0, v = e.length, w = t.items, b = t.first, x = b, _, h = null, C, y = [], k = [], E, S, M, T;
  if (d)
    for (T = 0; T < v; T += 1)
      E = e[T], S = i(E, T), M = w.get(S), M !== void 0 && ((s = M.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(M));
  for (T = 0; T < v; T += 1) {
    if (E = e[T], S = i(E, T), M = w.get(S), M === void 0) {
      var z = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Ku(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        S,
        T,
        r,
        o,
        a
      ), w.set(S, h), y = [], k = [], x = h.next;
      continue;
    }
    if (f && Yv(M, E, T, o), M.e.f & Xn && (Mo(M.e), d && ((l = M.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(M))), M !== x) {
      if (_ !== void 0 && _.has(M)) {
        if (y.length < k.length) {
          var L = k[0], D;
          h = L.prev;
          var Z = y[0], P = y[y.length - 1];
          for (D = 0; D < y.length; D += 1)
            cl(y[D], L, n);
          for (D = 0; D < k.length; D += 1)
            _.delete(k[D]);
          or(t, Z.prev, P.next), or(t, h, Z), or(t, P, L), x = L, h = P, T -= 1, y = [], k = [];
        } else
          _.delete(M), cl(M, x, n), or(t, M.prev, M.next), or(t, M, h === null ? t.first : h.next), or(t, h, M), h = M;
        continue;
      }
      for (y = [], k = []; x !== null && x.k !== S; )
        x.e.f & Xn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      M = x;
    }
    y.push(M), h = M, x = M.next;
  }
  if (x !== null || _ !== void 0) {
    for (var H = _ === void 0 ? [] : ms(_); x !== null; )
      x.e.f & Xn || H.push(x), x = x.next;
    var $ = H.length;
    if ($ > 0) {
      var O = o & hu && v === 0 ? n : null;
      if (d) {
        for (T = 0; T < $; T += 1)
          (u = H[T].a) == null || u.measure();
        for (T = 0; T < $; T += 1)
          (c = H[T].a) == null || c.fix();
      }
      Zv(t, H, O, w);
    }
  }
  d && jo(() => {
    var V;
    if (C !== void 0)
      for (M of C)
        (V = M.a) == null || V.apply();
  }), tt.first = t.first && t.first.e, tt.last = h && h.e;
}
function Yv(e, t, n, r) {
  r & fs && Ya(e.v, t), r & vs ? Ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Ku(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & fs) !== 0, d = (l & Nf) === 0, f = c ? d ? /* @__PURE__ */ oe(o) : Ur(o) : o, v = l & vs ? Ur(a) : a, w = {
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
    return w.e = qn(() => s(e, f, v, u), Me), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ps(e, t, n, r, o) {
  var i = e, a = "", s;
  zr(() => {
    if (a === (a = t() ?? "")) {
      Me && Hn();
      return;
    }
    s !== void 0 && (hn(s), s = void 0), a !== "" && (s = qn(() => {
      if (Me) {
        Xe.data;
        for (var l = Hn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ In(l);
        if (l === null)
          throw ta(), Br;
        qt(Xe, u), i = It(l);
        return;
      }
      var c = a + "", d = Ss(c);
      qt(
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
function Sr(e, t, ...n) {
  var r = e, o = _t, i;
  zr(() => {
    o !== (o = t()) && (i && (hn(i), i = null), i = qn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), Me && (r = Xe);
}
function qu(e, t, n) {
  Me && Hn();
  var r = e, o, i;
  zr(() => {
    o !== (o = t()) && (i && (Fr(i), i = null), o && (i = qn(() => n(r, o))));
  }, lo), Me && (r = Xe);
}
function Xv(e, t, n, r, o, i) {
  let a = Me;
  Me && Hn();
  var s, l, u = null;
  Me && Xe.nodeType === 1 && (u = /** @type {Element} */
  Xe, Hn());
  var c = (
    /** @type {TemplateNode} */
    Me ? Xe : e
  ), d;
  zr(() => {
    const f = t() || null;
    var v = f === "svg" ? Bf : null;
    f !== s && (d && (f === null ? Fr(d, () => {
      d = null, l = null;
    }) : f === l ? Mo(d) : hn(d)), f && f !== l && (d = qn(() => {
      if (u = Me ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), qt(u, u), r) {
        Me && zv(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Me ? /* @__PURE__ */ Lt(u) : u.appendChild(Kn())
        );
        Me && (w === null ? tn(!1) : It(w)), r(u, w);
      }
      tt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), It(c));
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
function Ot(e, t, n) {
  en(() => {
    var r = Nn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      uo(() => {
        var a = n();
        J(a), o && $s(i, a) && (i = a, r.update(a));
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
function jv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Fu(e)) && (r && (r += " "), r += t);
  return r;
}
function kn(e) {
  return typeof e == "object" ? jv(e) : e ?? "";
}
const dl = [...` 	
\r\f \v\uFEFF`];
function Kv(e, t, n) {
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
function ka(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function qv(e, t) {
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
function Tt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Me || a !== n || a === void 0) {
    var s = Kv(n, r, i);
    (!Me || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ea(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function xt(e, t, n, r) {
  var o = e.__style;
  if (Me || o !== t) {
    var i = qv(t, r);
    (!Me || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ea(e, n == null ? void 0 : n[0], r[0]), Ea(e, n == null ? void 0 : n[1], r[1], "important")) : Ea(e, n, r));
  return r;
}
const yo = Symbol("class"), xr = Symbol("style"), Uu = Symbol("is custom element"), Gu = Symbol("is html");
function Eo(e) {
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
function Sa(e, t) {
  var n = Os(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Fv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Os(e);
  Me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Gf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ju(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1) {
  var i = Os(e), a = i[Uu], s = !i[Gu];
  let l = Me && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = kn(n.class) : (r || n[yo]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var f = Ju(e);
  for (const C in n) {
    let y = n[C];
    if (c && C === "value" && y == null) {
      e.value = e.__value = "", u[C] = y;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tt(e, v, y, r, t == null ? void 0 : t[yo], n[yo]), u[C] = y, u[yo] = n[yo];
      continue;
    }
    if (C === "style") {
      xt(e, y, t == null ? void 0 : t[xr], n[xr]), u[C] = y, u[xr] = n[xr];
      continue;
    }
    var w = u[C];
    if (y !== w) {
      u[C] = y;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, E = "$$" + C;
          let S = C.slice(2);
          var x = Pv(S);
          if (Ev(S) && (S = S.slice(0, -7), k.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(S, u[E], k), u[E] = null;
          }
          if (y != null)
            if (x)
              e[`__${S}`] = y, aa([S]);
            else {
              let M = function(T) {
                u[C].call(this, T);
              };
              u[E] = Wu(S, e, M, k);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (C === "style")
          xe(e, C, y);
        else if (C === "autofocus")
          Nv(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (C === "__value" || C === "value" && y != null))
          e.value = e.__value = y;
        else if (C === "selected" && c)
          Fv(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var _ = C;
          s || (_ = Mv(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !a && !h)
            if (i[C] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (_ === "value") {
                let S = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = S, k.value = k.__value = E ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = S, k.checked = E ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else h || f.includes(_) && (a || typeof y != "string") ? e[_] = y : typeof y != "function" && xe(e, _, y);
        }
    }
  }
  return l && tn(!0), u;
}
function Os(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Uu]: e.nodeName.includes("-"),
      [Gu]: e.namespaceURI === Zf
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
var $r, So, yi, ja, Qu;
const Ka = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, ja), Rr(this, $r, /* @__PURE__ */ new WeakMap()), Rr(this, So), Rr(this, yi), ki(this, yi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, $r).set(t, r), Mf(this, ja, Qu).call(this).observe(t, yt(this, yi)), () => {
      var o = yt(this, $r).get(t);
      o.delete(n), o.size === 0 && (yt(this, $r).delete(t), yt(this, So).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakSet(), Qu = function() {
  return yt(this, So) ?? ki(this, So, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ka.entries.set(t.target, t);
        for (var n of yt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
jt(Ka, "entries", /* @__PURE__ */ new WeakMap());
let Uv = Ka;
var Gv = /* @__PURE__ */ new Uv({
  box: "border-box"
});
function gl(e, t, n) {
  var r = Gv.observe(e, () => n(e[t]));
  en(() => (Nn(() => n(e[t])), r));
}
function hl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Dn(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return uo(() => {
      o = i, i = [], Nn(() => {
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
function Ye(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ qr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && uv(() => {
    pl(t, r), Oo(n.b);
  }), fr(() => {
    const o = Nn(() => n.m.map(Kf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && fr(() => {
    pl(t, r), Oo(n.a);
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
  ), o = Xo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function ln(e) {
  Qe === null && Ji(), so && Qe.l !== null ? Qv(Qe).m.push(e) : fr(() => {
    const t = Nn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ms(e) {
  Qe === null && Ji(), ln(() => () => Nn(e));
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
      const a = Xo(i) ? i.slice() : [i], s = Jv(
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
const Ar = [];
function cn(e, t) {
  return {
    subscribe: $e(e, t).subscribe
  };
}
function $e(e, t = _t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if ($s(e, s) && (e = s, n)) {
      const l = !Ar.length;
      for (const u of r)
        u[1](), Ar.push(u, e);
      if (l) {
        for (let u = 0; u < Ar.length; u += 2)
          Ar[u][0](Ar[u + 1]);
        Ar.length = 0;
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
  return cn(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = _t;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, a, s);
      i ? a(w) : d = typeof w == "function" ? w : _t;
    }, v = o.map(
      (w, b) => Ts(
        w,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Oo(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Ts(e, (n) => t = n)(), t;
}
let ci = !1, qa = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: _t
  });
  if (r.store !== e && !(qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = _t;
    else {
      var o = !0;
      r.unsubscribe = Ts(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && qa in n ? q(e) : g(r.source);
}
function e1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = _t), e;
}
function Hi(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    Cs(() => {
      for (var n in e)
        e[n].unsubscribe();
      Po(e, qa, {
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
function Vt(e, t, n) {
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
    return t in e.special || (e.special[t] = m(
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Ur(0) }, r1);
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
    if (t === lr || t === bs) return !1;
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
function m(e, t, n, r) {
  var o, i = (n & Df) !== 0, a = !so || (n & Lf) !== 0, s = (n & If) !== 0, l = (n & Af) !== 0, u = !1, c;
  s ? [c, u] = t1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || bs in e, f = s && (((o = Wn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, x = () => (b = !0, w && (w = !1, l ? v = Nn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && rv(), c = x(), f && f(c));
  var _;
  if (a)
    _ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (w = !0, b = !1, S);
    };
  else {
    var h = (i ? qr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Ff, _ = () => {
      var S = g(h);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if (!(n & pu))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(S, M) {
      return arguments.length > 0 ? ((!a || !M || C || u) && f(M ? _() : S), S) : _();
    };
  }
  var y = !1, k = /* @__PURE__ */ oe(c), E = /* @__PURE__ */ qr(() => {
    var S = _(), M = g(k);
    return y ? (y = !1, M) : k.v = S;
  });
  return s && g(E), i || (E.equals = _s), function(S, M) {
    if (arguments.length > 0) {
      const T = M ? g(E) : a && s ? fn(S) : S;
      if (!E.equals(T)) {
        if (y = !0, U(k, T), b && v !== void 0 && (v = T), ml(E))
          return S;
        Nn(() => g(E));
      }
      return S;
    }
    return ml(E) ? E.v : g(E);
  };
}
function i1(e) {
  return new a1(e);
}
var rr, mn;
class a1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Rr(this, rr), Rr(this, mn);
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
    ki(this, mn, (t.hydrate ? Av : Xu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ki(this, rr, i.$$events);
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
    yt(this, mn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
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
          r !== "default" && (i.name = r), I(o, i);
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
          for (const o of Ei(this.$$c)) {
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
    return Ei(this.$$p_d).find(
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
function ue(e, t, n, r, o, i) {
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
var Fa = "http://www.w3.org/1999/xhtml";
const wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fa,
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
    return n === Fa && t.documentElement.namespaceURI === Fa ? t.createElement(e) : t.createElementNS(n, e);
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
function Vs(e) {
  return e == null ? v1 : function() {
    return this.querySelector(e);
  };
}
function g1(e) {
  typeof e != "function" && (e = Vs(e));
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
var _1 = Array.prototype.filter;
function C1() {
  return Array.from(this.children);
}
function k1(e) {
  return function() {
    return _1.call(this.children, e);
  };
}
function E1(e) {
  return this.selectAll(e == null ? C1 : k1(typeof e == "function" ? e : oc(e)));
}
function S1(e) {
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
function O1(e) {
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
function T1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new zi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function V1(e) {
  return e.__data__;
}
function H1(e, t) {
  if (!arguments.length) return Array.from(this, V1);
  var n = t ? T1 : M1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = O1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = z1(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), x = a[u] = new Array(w), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var h = 0, C = 0, y, k; h < w; ++h)
      if (y = b[h]) {
        for (h >= C && (C = h + 1); !(k = x[C]) && ++C < w; ) ;
        y._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function z1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function N1() {
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
function I1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function A1(e) {
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
function B1() {
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
function W1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function X1() {
  return !this.node();
}
function j1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function K1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function q1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function F1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function U1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function G1(e, t) {
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
  return this.each((t == null ? n.local ? q1 : K1 : typeof t == "function" ? n.local ? J1 : G1 : n.local ? U1 : F1)(n, t));
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
function _g() {
  return this.each($g);
}
function Cg(e) {
  var t = typeof e == "function" ? e : tc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kg() {
  return null;
}
function Eg(e, t) {
  var n = typeof e == "function" ? e : tc(e), r = t == null ? kg : typeof t == "function" ? t : Vs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Sg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Pg() {
  return this.each(Sg);
}
function Og() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tg(e) {
  return this.select(e ? Mg : Og);
}
function Vg(e) {
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
function Ng(e) {
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
  for (s = t ? Dg : Ng, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function dc(e, t, n) {
  var r = ac(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ig(e, t) {
  return function() {
    return dc(this, e, t);
  };
}
function Ag(e, t) {
  return function() {
    return dc(this, e, t.apply(this, arguments));
  };
}
function Rg(e, t) {
  return this.each((typeof t == "function" ? Ag : Ig)(e, t));
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
function qo() {
  return new sn([[document.documentElement]], fc);
}
function Bg() {
  return this;
}
sn.prototype = qo.prototype = {
  constructor: sn,
  select: g1,
  selectAll: y1,
  selectChild: $1,
  selectChildren: E1,
  filter: S1,
  data: H1,
  enter: P1,
  exit: N1,
  join: D1,
  merge: L1,
  selection: Bg,
  order: I1,
  sort: A1,
  call: Z1,
  nodes: B1,
  node: Y1,
  size: W1,
  empty: X1,
  each: j1,
  attr: Q1,
  style: rg,
  property: sg,
  classed: dg,
  text: hg,
  html: wg,
  raise: xg,
  lower: _g,
  append: Cg,
  insert: Eg,
  remove: Pg,
  clone: Tg,
  datum: Vg,
  on: Lg,
  dispatch: Rg,
  [Symbol.iterator]: Zg
};
function vn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], fc);
}
function Yg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
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
const Wg = { passive: !1 }, No = { capture: !0, passive: !1 };
function Oa(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = vn(e).on("dragstart.drag", Yr, No);
  "onselectstart" in t ? n.on("selectstart.drag", Yr, No) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function gc(e, t) {
  var n = e.document.documentElement, r = vn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Yr, No), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
function Ua(e, {
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
Ua.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Xg(e) {
  return !e.ctrlKey && !e.button;
}
function jg() {
  return this.parentNode;
}
function Kg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fg() {
  var e = Xg, t = jg, n = Kg, r = qg, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Wg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, k) {
    if (!(c || !e.call(this, y, k))) {
      var E = C(this, t.call(this, y, k), y, k, "mouse");
      E && (vn(y.view).on("mousemove.drag", w, No).on("mouseup.drag", b, No), vc(y.view), Oa(y), u = !1, s = y.clientX, l = y.clientY, E("start", y));
    }
  }
  function w(y) {
    if (Yr(y), !u) {
      var k = y.clientX - s, E = y.clientY - l;
      u = k * k + E * E > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    vn(y.view).on("mousemove.drag mouseup.drag", null), gc(y.view, u), Yr(y), o.mouse("end", y);
  }
  function x(y, k) {
    if (e.call(this, y, k)) {
      var E = y.changedTouches, S = t.call(this, y, k), M = E.length, T, z;
      for (T = 0; T < M; ++T)
        (z = C(this, S, y, k, E[T].identifier, E[T])) && (Oa(y), z("start", y, E[T]));
    }
  }
  function _(y) {
    var k = y.changedTouches, E = k.length, S, M;
    for (S = 0; S < E; ++S)
      (M = o[k[S].identifier]) && (Yr(y), M("drag", y, k[S]));
  }
  function h(y) {
    var k = y.changedTouches, E = k.length, S, M;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < E; ++S)
      (M = o[k[S].identifier]) && (Oa(y), M("end", y, k[S]));
  }
  function C(y, k, E, S, M, T) {
    var z = i.copy(), L = yn(T || E, k), D, Z, P;
    if ((P = n.call(y, new Ua("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: M,
      active: a,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), S)) != null)
      return D = P.x - L[0] || 0, Z = P.y - L[1] || 0, function H($, O, V) {
        var A = L, Y;
        switch ($) {
          case "start":
            o[M] = H, Y = a++;
            break;
          case "end":
            delete o[M], --a;
          // falls through
          case "drag":
            L = yn(V || O, k), Y = a;
            break;
        }
        z.call(
          $,
          y,
          new Ua($, {
            sourceEvent: O,
            subject: P,
            target: f,
            identifier: M,
            active: Y,
            x: L[0] + D,
            y: L[1] + Z,
            dx: L[0] - A[0],
            dy: L[1] - A[1],
            dispatch: z
          }),
          S
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : di(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : di(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : di(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : di(!!y), f) : r;
  }, f.on = function() {
    var y = i.on.apply(i, arguments);
    return y === i ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, f) : Math.sqrt(d);
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
function Fo() {
}
var Do = 0.7, Ni = 1 / Do, Wr = "\\s*([+-]?\\d+)\\s*", Lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ug = /^#([0-9a-f]{3,8})$/, Gg = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), Jg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Qg = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${Lo}\\)$`), eh = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${Lo}\\)$`), th = new RegExp(`^hsl\\(${Lo},${Mn},${Mn}\\)$`), nh = new RegExp(`^hsla\\(${Lo},${Mn},${Mn},${Lo}\\)$`), bl = {
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
zs(Fo, Io, {
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
function Io(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ug.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? _l(t) : n === 3 ? new Kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gg.exec(e)) ? new Kt(t[1], t[2], t[3], 1) : (t = Jg.exec(e)) ? new Kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qg.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = eh.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = th.exec(e)) ? El(t[1], t[2] / 100, t[3] / 100, 1) : (t = nh.exec(e)) ? El(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? _l(bl[e]) : e === "transparent" ? new Kt(NaN, NaN, NaN, 0) : null;
}
function _l(e) {
  return new Kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Kt(e, t, n, r);
}
function ih(e) {
  return e instanceof Fo || (e = Io(e)), e ? (e = e.rgb(), new Kt(e.r, e.g, e.b, e.opacity)) : new Kt();
}
function Ga(e, t, n, r) {
  return arguments.length === 1 ? ih(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
zs(Kt, Ga, hc(Fo, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Do : Math.pow(Do, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Kt(kr(this.r), kr(this.g), kr(this.b), Di(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cl,
  // Deprecated! Use color.formatHex.
  formatHex: Cl,
  formatHex8: ah,
  formatRgb: kl,
  toString: kl
}));
function Cl() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function ah() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = Di(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${kr(this.r)}, ${kr(this.g)}, ${kr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Di(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function kr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = kr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function El(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new wn(e, t, n, r);
}
function pc(e) {
  if (e instanceof wn) return new wn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fo || (e = Io(e)), !e) return new wn();
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
zs(wn, sh, hc(Fo, {
  brighter(e) {
    return e = e == null ? Ni : Math.pow(Ni, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Do : Math.pow(Do, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Kt(
      Ma(e >= 240 ? e - 240 : e + 120, o, r),
      Ma(e, o, r),
      Ma(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new wn(Sl(this.h), vi(this.s), vi(this.l), Di(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Di(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Sl(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Sl(e) {
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
    var a = n((o = Ga(o)).r, (i = Ga(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = yc(o.opacity, i.opacity);
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
var Ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ta = new RegExp(Ja.source, "g");
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
  var n = Ja.lastIndex = Ta.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ja.exec(e)) && (o = Ta.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Ta.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fh(l[0].x) : dh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Ol = 180 / Math.PI, wc = {
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
    rotate: Math.atan2(t, e) * Ol,
    skewX: Math.atan(l) * Ol,
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
      w.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, x; ++w < b; ) d[(x = f[w]).i] = x.x(v);
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, x, _;
    if (b < yh)
      _ = Math.log(f / u) / t, x = function(S) {
        return [
          s + S * v,
          l + S * w,
          u * Math.exp(t * S * _)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), y = (f * f - u * u - r * b) / (2 * f * n * h), k = Math.log(Math.sqrt(C * C + 1) - C), E = Math.log(Math.sqrt(y * y + 1) - y);
      _ = (E - k) / t, x = function(S) {
        var M = S * _, T = Ml(k), z = u / (n * h) * (T * bh(t * M + k) - wh(k));
        return [
          s + z * v,
          l + z * w,
          u * T / Ml(t * M + k)
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
var Qr = 0, $o = 0, wo = 0, $c = 1e3, Li, _o, Ii = 0, Pr = 0, ca = 0, Ao = typeof performance == "object" && performance.now ? performance : Date, _c = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ns() {
  return Pr || (_c($h), Pr = Ao.now() + ca);
}
function $h() {
  Pr = 0;
}
function Ai() {
  this._call = this._time = this._next = null;
}
Ai.prototype = Cc.prototype = {
  constructor: Ai,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ns() : +n) + (t == null ? 0 : +t), !this._next && _o !== this && (_o ? _o._next = this : Li = this, _o = this), this._call = e, this._time = n, Qa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qa());
  }
};
function Cc(e, t, n) {
  var r = new Ai();
  return r.restart(e, t, n), r;
}
function _h() {
  Ns(), ++Qr;
  for (var e = Li, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Tl() {
  Pr = (Ii = Ao.now()) + ca, Qr = $o = 0;
  try {
    _h();
  } finally {
    Qr = 0, kh(), Pr = 0;
  }
}
function Ch() {
  var e = Ao.now(), t = e - Ii;
  t > $c && (ca -= t, Ii = e);
}
function kh() {
  for (var e, t = Li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Li = n);
  _o = e, Qa(r);
}
function Qa(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Tl, e - Ao.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ii = Ao.now(), wo = setInterval(Ch, $c)), Qr = 1, _c(Tl));
  }
}
function Vl(e, t, n) {
  var r = new Ai();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Eh = la("start", "end", "cancel", "interrupt"), Sh = [], kc = 0, Hl = 1, es = 2, xi = 3, zl = 4, ts = 5, $i = 6;
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
    on: Eh,
    tween: Sh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: kc
  });
}
function Ds(e, t) {
  var n = En(e, t);
  if (n.state > kc) throw new Error("too late; already scheduled");
  return n;
}
function An(e, t) {
  var n = En(e, t);
  if (n.state > xi) throw new Error("too late; already running");
  return n;
}
function En(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Ph(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Cc(i, 0, n.time);
  function i(u) {
    n.state = Hl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Hl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === xi) return Vl(a);
        v.state === zl ? (v.state = $i, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = $i, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Vl(function() {
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
function _i(e, t) {
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
function Oh(e) {
  return this.each(function() {
    _i(this, e);
  });
}
function Mh(e, t) {
  var n, r;
  return function() {
    var o = An(this, e), i = o.tween;
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
    var i = An(this, e), a = i.tween;
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
function Vh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = En(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Mh : Th)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = An(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return En(o, r).value[t];
  };
}
function Ec(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof Io ? Pl : (n = Io(t)) ? (t = n, Pl) : vh)(e, t);
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
function Nh(e, t, n) {
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
function Ih(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ah(e, t) {
  var n = ua(e), r = n === "transform" ? mh : Ec;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ih : Lh)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? zh : Hh)(n) : (n.local ? Dh : Nh)(n, r, t));
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
function Bh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Zh(e, i)), n;
  }
  return o._value = t, o;
}
function Yh(e, t) {
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
  return this.tween(n, (r.local ? Bh : Yh)(r, t));
}
function Xh(e, t) {
  return function() {
    Ds(this, e).delay = +t.apply(this, arguments);
  };
}
function jh(e, t) {
  return t = +t, function() {
    Ds(this, e).delay = t;
  };
}
function Kh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xh : jh)(t, e)) : En(this.node(), t).delay;
}
function qh(e, t) {
  return function() {
    An(this, e).duration = +t.apply(this, arguments);
  };
}
function Fh(e, t) {
  return t = +t, function() {
    An(this, e).duration = t;
  };
}
function Uh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qh : Fh)(t, e)) : En(this.node(), t).duration;
}
function Gh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    An(this, e).ease = t;
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
    An(this, e).ease = n;
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
  return new Fn(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
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
  var r, o, i = rp(t) ? Ds : An;
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
  typeof e != "function" && (e = Vs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, da(u[f], t, n, f, u, En(c, n)));
  return new Fn(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = En(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && da(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Fn(i, a, t, n);
}
var cp = qo.prototype.constructor;
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
function Sc(e) {
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
    var l = An(this, e), u = l.on, c = l.value[i] == null ? s || (s = Sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? ph : Ec;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Sc(e)) : typeof t == "function" ? this.styleTween(e, gp(e, r, Ls(this, "style." + e, t))).each(hp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
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
function _p(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Cp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && _p(o)), t;
  }
  return r._value = e, r;
}
function kp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Cp(e));
}
function Ep() {
  for (var e = this._name, t = this._id, n = Pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = En(l, t);
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
      var u = An(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Pp = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pc() {
  return ++Pp;
}
var Zn = qo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: lp,
  selectAll: up,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: tp,
  merge: np,
  selection: dp,
  transition: Ep,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: ip,
  attr: Ah,
  attrTween: Wh,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: kp,
  remove: sp,
  tween: Vh,
  delay: Kh,
  duration: Uh,
  ease: Jh,
  easeVarying: ep,
  end: Sp,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Op(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Mp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Op
};
function Tp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vp(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Pc(), (n = Mp).time = Ns(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Tp(l, t));
  return new Fn(r, this._parents, e, t);
}
qo.prototype.interrupt = Oh;
qo.prototype.transition = Vp;
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
var fa = new Bn(1, 0, 0);
Oc.prototype = Bn.prototype;
function Oc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return fa;
  return e.__zoom;
}
function Va(e) {
  e.stopImmediatePropagation();
}
function bo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Np() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Nl() {
  return this.__zoom || fa;
}
function Dp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Lp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ip(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Mc() {
  var e = zp, t = Np, n = Ip, r = Dp, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xh, u = la("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function _(P) {
    P.property("__zoom", Nl).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(P, H, $, O) {
    var V = P.selection ? P.selection() : P;
    V.property("__zoom", Nl), P !== V ? k(P, H, $, O) : V.interrupt().each(function() {
      E(this, arguments).event(O).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, _.scaleBy = function(P, H, $, O) {
    _.scaleTo(P, function() {
      var V = this.__zoom.k, A = typeof H == "function" ? H.apply(this, arguments) : H;
      return V * A;
    }, $, O);
  }, _.scaleTo = function(P, H, $, O) {
    _.transform(P, function() {
      var V = t.apply(this, arguments), A = this.__zoom, Y = $ == null ? y(V) : typeof $ == "function" ? $.apply(this, arguments) : $, K = A.invert(Y), F = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(C(h(A, F), Y, K), V, a);
    }, $, O);
  }, _.translateBy = function(P, H, $, O) {
    _.transform(P, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, O);
  }, _.translateTo = function(P, H, $, O, V) {
    _.transform(P, function() {
      var A = t.apply(this, arguments), Y = this.__zoom, K = O == null ? y(A) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(fa.translate(K[0], K[1]).scale(Y.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), A, a);
    }, O, V);
  };
  function h(P, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === P.k ? P : new Bn(H, P.x, P.y);
  }
  function C(P, H, $) {
    var O = H[0] - $[0] * P.k, V = H[1] - $[1] * P.k;
    return O === P.x && V === P.y ? P : new Bn(P.k, O, V);
  }
  function y(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, H, $, O) {
    P.on("start.zoom", function() {
      E(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var V = this, A = arguments, Y = E(V, A).event(O), K = t.apply(V, A), F = $ == null ? y(K) : typeof $ == "function" ? $.apply(V, A) : $, de = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Q = V.__zoom, j = typeof H == "function" ? H.apply(V, A) : H, ae = l(Q.invert(F).concat(de / Q.k), j.invert(F).concat(de / j.k));
      return function(pe) {
        if (pe === 1) pe = j;
        else {
          var we = ae(pe), ce = de / we[2];
          pe = new Bn(ce, F[0] - we[0] * ce, F[1] - we[1] * ce);
        }
        Y.zoom(null, pe);
      };
    });
  }
  function E(P, H, $) {
    return !$ && P.__zooming || new S(P, H);
  }
  function S(P, H) {
    this.that = P, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, H), this.taps = 0;
  }
  S.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, H) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var H = vn(this.that).datum();
      u.call(
        P,
        this.that,
        new Hp(P, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function M(P, ...H) {
    if (!e.apply(this, arguments)) return;
    var $ = E(this, H).event(P), O = this.__zoom, V = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), A = yn(P);
    if ($.wheel)
      ($.mouse[0][0] !== A[0] || $.mouse[0][1] !== A[1]) && ($.mouse[1] = O.invert($.mouse[0] = A)), clearTimeout($.wheel);
    else {
      if (O.k === V) return;
      $.mouse = [A, O.invert(A)], _i(this), $.start();
    }
    bo(P), $.wheel = setTimeout(Y, w), $.zoom("mouse", n(C(h(O, V), $.mouse[0], $.mouse[1]), $.extent, a));
    function Y() {
      $.wheel = null, $.end();
    }
  }
  function T(P, ...H) {
    if (f || !e.apply(this, arguments)) return;
    var $ = P.currentTarget, O = E(this, H, !0).event(P), V = vn(P.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", de, !0), A = yn(P, $), Y = P.clientX, K = P.clientY;
    vc(P.view), Va(P), O.mouse = [A, this.__zoom.invert(A)], _i(this), O.start();
    function F(Q) {
      if (bo(Q), !O.moved) {
        var j = Q.clientX - Y, ae = Q.clientY - K;
        O.moved = j * j + ae * ae > b;
      }
      O.event(Q).zoom("mouse", n(C(O.that.__zoom, O.mouse[0] = yn(Q, $), O.mouse[1]), O.extent, a));
    }
    function de(Q) {
      V.on("mousemove.zoom mouseup.zoom", null), gc(Q.view, O.moved), bo(Q), O.event(Q).end();
    }
  }
  function z(P, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, O = yn(P.changedTouches ? P.changedTouches[0] : P, this), V = $.invert(O), A = $.k * (P.shiftKey ? 0.5 : 2), Y = n(C(h($, A), O, V), t.apply(this, H), a);
      bo(P), s > 0 ? vn(this).transition().duration(s).call(k, Y, O, P) : vn(this).call(_.transform, Y, O, P);
    }
  }
  function L(P, ...H) {
    if (e.apply(this, arguments)) {
      var $ = P.touches, O = $.length, V = E(this, H, P.changedTouches.length === O).event(P), A, Y, K, F;
      for (Va(P), Y = 0; Y < O; ++Y)
        K = $[Y], F = yn(K, this), F = [F, this.__zoom.invert(F), K.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== F[2] && (V.touch1 = F, V.taps = 0) : (V.touch0 = F, A = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (V.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), _i(this), V.start());
    }
  }
  function D(P, ...H) {
    if (this.__zooming) {
      var $ = E(this, H).event(P), O = P.changedTouches, V = O.length, A, Y, K, F;
      for (bo(P), A = 0; A < V; ++A)
        Y = O[A], K = yn(Y, this), $.touch0 && $.touch0[2] === Y.identifier ? $.touch0[0] = K : $.touch1 && $.touch1[2] === Y.identifier && ($.touch1[0] = K);
      if (Y = $.that.__zoom, $.touch1) {
        var de = $.touch0[0], Q = $.touch0[1], j = $.touch1[0], ae = $.touch1[1], pe = (pe = j[0] - de[0]) * pe + (pe = j[1] - de[1]) * pe, we = (we = ae[0] - Q[0]) * we + (we = ae[1] - Q[1]) * we;
        Y = h(Y, Math.sqrt(pe / we)), K = [(de[0] + j[0]) / 2, (de[1] + j[1]) / 2], F = [(Q[0] + ae[0]) / 2, (Q[1] + ae[1]) / 2];
      } else if ($.touch0) K = $.touch0[0], F = $.touch0[1];
      else return;
      $.zoom("touch", n(C(Y, K, F), $.extent, a));
    }
  }
  function Z(P, ...H) {
    if (this.__zooming) {
      var $ = E(this, H).event(P), O = P.changedTouches, V = O.length, A, Y;
      for (Va(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), A = 0; A < V; ++A)
        Y = O[A], $.touch0 && $.touch0[2] === Y.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Y.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Y = yn(Y, this), Math.hypot(d[0] - Y[0], d[1] - Y[1]) < x)) {
        var K = vn(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : hi(+P), _) : r;
  }, _.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : hi(!!P), _) : e;
  }, _.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : hi(!!P), _) : o;
  }, _.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : hi([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), _) : t;
  }, _.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(P) {
    return arguments.length ? (a[0][0] = +P[0][0], a[1][0] = +P[1][0], a[0][1] = +P[0][1], a[1][1] = +P[1][1], _) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, _.constrain = function(P) {
    return arguments.length ? (n = P, _) : n;
  }, _.duration = function(P) {
    return arguments.length ? (s = +P, _) : s;
  }, _.interpolate = function(P) {
    return arguments.length ? (l = P, _) : l;
  }, _.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? _ : P;
  }, _.clickDistance = function(P) {
    return arguments.length ? (b = (P = +P) * P, _) : Math.sqrt(b);
  }, _.tapDistance = function(P) {
    return arguments.length ? (x = +P, _) : x;
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
}, Ri = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Or;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Or || (Or = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
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
var Xr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Xr || (Xr = {}));
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
function Rp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Zp = (e) => "id" in e && "source" in e && "target" in e, Bp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Is = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Uo = (e, t = [0, 0]) => {
  const { width: n, height: r } = mr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
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
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : Is(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Bi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return va(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ga(n);
}, Go = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Bi(r);
      n = va(n, o);
    }
  }), ga(n);
}, Tc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Jo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = Zo(s, no(u)), x = (v ?? 0) * (w ?? 0), _ = i && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, rs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Il(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Al({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Go(e), l = Rs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
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
async function Vc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
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
  const { width: r, height: o } = mr(n), { x: i, y: a } = n.internals.positionAbsolute;
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
  const { x: o, y: i } = Is(e) ? e.internals.positionAbsolute : Uo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Bi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Is(e) ? e.internals.positionAbsolute : Uo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Nc = (e, t) => ga(va(os(e), os(t))), Zo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => Yn(e.width) && Yn(e.height) && Yn(e.x) && Yn(e.y), Yn = (e) => !isNaN(e) && isFinite(e), Xp = (e, t) => {
}, As = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Jo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? As(s, a) : s;
}, Dc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Rs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = to(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Yi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ro(e) {
  return e !== void 0 && e !== "parent";
}
function mr(e) {
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
  const { x: i, y: a } = jn(e), s = Jo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? As(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Zs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Kp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, qp = ["INPUT", "SELECT", "TEXTAREA"];
function Fp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : qp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ic = (e) => "clientX" in e, jn = (e, t) => {
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
      ...Zs(a)
    };
  });
};
function Up({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function pi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Yl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function Ac({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: a = 0.25 }) {
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
  }), [d, f, v, w] = Up({
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
function Gp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Jp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
}, n0 = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Xl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function r0({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Wl[t], s = Wl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = n0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], w, b;
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, C, y, k] = Rc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? h, b = o.y ?? C;
    const E = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? E : S : v = d === "x" ? S : E;
  } else {
    const E = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? S : E : v = a.y === f ? E : S, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const Z = Math.min(i - 1, i - D);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * Z : _[d] = (u[d] > n[d] ? -1 : 1) * Z;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", Z = a[d] === s[D], P = l[D] > u[D], H = l[D] < u[D];
      (a[d] === 1 && (!Z && P || Z && H) || a[d] !== 1 && (!Z && H || Z && P)) && (v = d === "x" ? E : S);
    }
    const M = { x: l.x + x.x, y: l.y + x.y }, T = { x: u.x + _.x, y: u.y + _.y }, z = Math.max(Math.abs(M.x - v[0].x), Math.abs(T.x - v[0].x)), L = Math.max(Math.abs(M.y - v[0].y), Math.abs(T.y - v[0].y));
    z >= L ? (w = (M.x + T.x) / 2, b = v[0].y) : (w = v[0].x, b = (M.y + T.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], w, b, y, k];
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
function Wi({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = r0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, _) => {
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = o0(c[_ - 1], x, c[_ + 1], a) : h = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
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
  const o = n.internals.handleBounds || Kl(n.handles), i = r.internals.handleBounds || Kl(r.handles), a = ql((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = ql(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Or.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Pe.Bottom, u = (s == null ? void 0 : s.position) || Pe.Top, c = Bo(n, a, l), d = Bo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
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
function Bo(e, t, n = Pe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? mr(e);
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
function ql(e, t) {
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
const Bs = {
  nodeOrigin: [0, 0],
  nodeExtent: Ri,
  elevateNodesOnSelect: !0,
  defaults: {}
}, l0 = {
  ...Bs,
  checkEquality: !0
};
function Ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function u0(e, t, n) {
  const r = Ys(Bs, n);
  for (const o of e.values())
    if (o.parentId)
      Ws(o, e, t, r);
    else {
      const i = Uo(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Mr(i, a, mr(o));
      o.internals.positionAbsolute = s;
    }
}
function Zc(e, t, n, r) {
  var o, i;
  const a = Ys(l0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Uo(u, a.nodeOrigin), f = ro(u.extent) ? u.extent : a.nodeExtent, v = Mr(d, f, mr(u));
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
          z: Bc(u, l),
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
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ys(Bs, r), s = e.parentId, l = t.get(s);
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
function Bc(e, t) {
  return (Yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = mr(e), l = Uo(e, n), u = ro(e.extent) ? Mr(l, e.extent, s) : l;
  let c = Mr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Hc(c, s, t));
  const d = Bc(e, o), f = t.internals.z ?? 0;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? no(l), c = Nc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = mr(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (w > 0 || b > 0 || h || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + h,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some((k) => k.id === y.id) || i.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + w,
          y: y.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || w || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (w ? v[0] * w - h : 0),
        height: _ + (b ? v[1] * b - C : 0)
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
      const x = f.nodeElement.getBoundingClientRect(), _ = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Hc(h, w, t.get(v.parentId)) : _ && (h = Mr(h, _, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Bl("source", f.nodeElement, x, c, v.id),
            target: Bl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && Ws(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no(C, o)
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
function Yc(e, t, n) {
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
function Wc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Wc(n, t) : !1;
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
  function w({ noDragClassName: x, handleSelector: _, domNode: h, isSelectable: C, nodeId: y, nodeClickDistance: k = 0 }) {
    f = vn(h);
    function E({ x: z, y: L }, D) {
      const { nodeLookup: Z, nodeExtent: P, snapGrid: H, snapToGrid: $, nodeOrigin: O, onNodeDrag: V, onSelectionDrag: A, onError: Y, updateNodePositions: K } = t();
      i = { x: z, y: L };
      let F = !1, de = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = Go(s);
        de = os(Q);
      }
      for (const [Q, j] of s) {
        if (!Z.has(Q))
          continue;
        let ae = { x: z - j.distance.x, y: L - j.distance.y };
        $ && (ae = As(ae, H));
        let pe = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !j.extent) {
          const { positionAbsolute: Ve } = j.internals, le = Ve.x - de.x + P[0][0], re = Ve.x + j.measured.width - de.x2 + P[1][0], Le = Ve.y - de.y + P[0][1], He = Ve.y + j.measured.height - de.y2 + P[1][1];
          pe = [
            [le, Le],
            [re, He]
          ];
        }
        const { position: we, positionAbsolute: ce } = Wp({
          nodeId: Q,
          nextPosition: ae,
          nodeLookup: Z,
          nodeExtent: pe,
          nodeOrigin: O,
          onError: Y
        });
        F = F || j.position.x !== we.x || j.position.y !== we.y, j.position = we, j.internals.positionAbsolute = ce;
      }
      if (F && (K(s, !0), D && (r || V || !y && A))) {
        const [Q, j] = za({
          nodeId: y,
          dragItems: s,
          nodeLookup: Z
        });
        r == null || r(D, s, Q, j), V == null || V(D, Q, j), y || A == null || A(D, j);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: z, panBy: L, autoPanSpeed: D, autoPanOnNodeDrag: Z } = t();
      if (!Z) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [P, H] = zc(u, c, D);
      (P !== 0 || H !== 0) && (i.x = (i.x ?? 0) - P / z[2], i.y = (i.y ?? 0) - H / z[2], await L({ x: P, y: H }) && E(i, null)), a = requestAnimationFrame(S);
    }
    function M(z) {
      var L;
      const { nodeLookup: D, multiSelectionActive: Z, nodesDraggable: P, transform: H, snapGrid: $, snapToGrid: O, selectNodesOnDrag: V, onNodeDragStart: A, onSelectionDragStart: Y, unselectNodesAndEdges: K } = t();
      d = !0, (!V || !C) && !Z && y && ((L = D.get(y)) != null && L.selected || K()), C && V && y && (e == null || e(y));
      const F = Ha(z.sourceEvent, { transform: H, snapGrid: $, snapToGrid: O, containerBounds: c });
      if (i = F, s = p0(D, P, F, y), s.size > 0 && (n || A || !y && Y)) {
        const [de, Q] = za({
          nodeId: y,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(z.sourceEvent, s, de, Q), A == null || A(z.sourceEvent, de, Q), y || Y == null || Y(z.sourceEvent, Q);
      }
    }
    const T = Fg().clickDistance(k).on("start", (z) => {
      const { domNode: L, nodeDragThreshold: D, transform: Z, snapGrid: P, snapToGrid: H } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, v = !1, D === 0 && M(z), i = Ha(z.sourceEvent, { transform: Z, snapGrid: P, snapToGrid: H, containerBounds: c }), u = jn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: L, transform: D, snapGrid: Z, snapToGrid: P, nodeDragThreshold: H, nodeLookup: $ } = t(), O = Ha(z.sourceEvent, { transform: D, snapGrid: Z, snapToGrid: P, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !$.has(y)) && (v = !0), !v) {
        if (!l && L && d && (l = !0, S()), !d) {
          const V = O.xSnapped - (i.x ?? 0), A = O.ySnapped - (i.y ?? 0);
          Math.sqrt(V * V + A * A) > H && M(z);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && s && d && (u = jn(z.sourceEvent, c), E(O, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: L, updateNodePositions: D, onNodeDragStop: Z, onSelectionDragStop: P } = t();
        if (D(s, !1), o || Z || !y && P) {
          const [H, $] = za({
            nodeId: y,
            dragItems: s,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, H, $), Z == null || Z(z.sourceEvent, H, $), y || P == null || P(z.sourceEvent, $);
        }
      }
    }).filter((z) => {
      const L = z.target;
      return !z.button && (!x || !Ul(L, `.${x}`, h)) && (!_ || Ul(L, _, h));
    });
    f.call(T);
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
      const { x: f, y: v } = Bo(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
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
function Xc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Bo(u, d, d.position, !0) } : d;
}
function jc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function x0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Kc = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: _ = Kc, onReconnectEnd: h, updateConnection: C, getTransform: y, getFromHandle: k, autoPanSpeed: E }) {
  const S = Kp(e.target);
  let M = 0, T;
  const { x: z, y: L } = jn(e), D = S == null ? void 0 : S.elementFromPoint(z, L), Z = jc(i, D), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !Z)
    return;
  const H = Xc(o, Z, r, l, t);
  if (!H)
    return;
  let $ = jn(e, P), O = !1, V = null, A = !1, Y = null;
  function K() {
    if (!c || !P)
      return;
    const [we, ce] = zc($, P, E);
    f({ x: we, y: ce }), M = requestAnimationFrame(K);
  }
  const F = {
    ...H,
    nodeId: o,
    type: Z,
    position: H.position
  }, de = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Bo(de, F, Pe.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: de,
    to: $,
    toHandle: null,
    toPosition: Dl[F.position],
    toNode: null
  };
  C(Q);
  let j = Q;
  w == null || w(e, { nodeId: o, handleId: r, handleType: Z });
  function ae(we) {
    if (!k() || !F) {
      pe(we);
      return;
    }
    const ce = y();
    $ = jn(we, P), T = b0(Jo($, ce, !1, [1, 1]), n, l, F), O || (K(), O = !0);
    const Ve = qc(we, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: _,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Y = Ve.handleDomNode, V = Ve.connection, A = x0(!!T, Ve.isValid);
    const le = {
      // from stays the same
      ...j,
      isValid: A,
      to: T && A ? Dc({ x: T.x, y: T.y }, ce) : $,
      toHandle: Ve.toHandle,
      toPosition: A && Ve.toHandle ? Ve.toHandle.position : Dl[F.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    A && T && j.toHandle && le.toHandle && j.toHandle.type === le.toHandle.type && j.toHandle.nodeId === le.toHandle.nodeId && j.toHandle.id === le.toHandle.id && j.to.x === le.to.x && j.to.y === le.to.y || (C(le), j = le);
  }
  function pe(we) {
    (T || Y) && V && A && (b == null || b(V));
    const { inProgress: ce, ...Ve } = j, le = {
      ...Ve,
      toPosition: j.toHandle ? j.toPosition : null
    };
    x == null || x(we, le), i && (h == null || h(we, le)), v(), cancelAnimationFrame(M), O = !1, A = !1, V = null, Y = null, S.removeEventListener("mousemove", ae), S.removeEventListener("mouseup", pe), S.removeEventListener("touchmove", ae), S.removeEventListener("touchend", pe);
  }
  S.addEventListener("mousemove", ae), S.addEventListener("mouseup", pe), S.addEventListener("touchmove", ae), S.addEventListener("touchend", pe);
}
function qc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Kc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = jn(e), b = a.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = jc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!C || !h)
      return _;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    _.connection = S;
    const M = k && E && (n === Or.Strict ? d && h === "source" || !d && h === "target" : C !== r || y !== o);
    _.isValid = M && u(S), _.toHandle = Xc(C, h, y, c, n, !1);
  }
  return _;
}
const _0 = {
  onPointerDown: $0,
  isValid: qc
};
function C0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = vn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = y[2] * Math.pow(2, k);
      t.scaleTo(E);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], E = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), M = {
        x: y[0] - E[0] * S,
        y: y[1] - E[1] * S
      }, T = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: y[2]
      }, T, s);
    }, h = Mc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? w : null);
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
const k0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ha = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Na = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Zr = (e, t) => e.target.closest(`.${t}`), Fc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Uc = (e) => {
  const t = e.ctrlKey && Yi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function E0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Zr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = yn(c), _ = Uc(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === cr.Vertical ? 0 : c.deltaX * f, w = o === cr.Horizontal ? 0 : c.deltaY * f;
    !Yi() && c.shiftKey && o !== cr.Vertical && (v = c.deltaY * f, w = 0), r.translateBy(
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
function S0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
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
function O0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Fc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ha(i.transform)));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Fc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && k0(e.prevViewport, a.transform))) {
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
function T0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
function V0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Mc().clickDistance(!Yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = vn(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Uc);
  function x(D, Z) {
    return v ? new Promise((P) => {
      f == null || f.transform(Da(v, Z == null ? void 0 : Z.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: D, noPanClassName: Z, onPaneContextMenu: P, userSelectionActive: H, panOnScroll: $, panOnDrag: O, panOnScrollMode: V, panOnScrollSpeed: A, preventScrolling: Y, zoomOnPinch: K, zoomOnScroll: F, zoomOnDoubleClick: de, zoomActivationKeyPressed: Q, lib: j, onTransformChange: ae }) {
    H && !c.isZoomingOrPanning && h();
    const pe = $ && !Q && !H ? E0({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: V,
      panOnScrollSpeed: A,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : S0({
      noWheelClassName: D,
      preventScrolling: Y,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", pe, { passive: !1 }), !H) {
      const ce = P0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ce);
      const Ve = O0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!P,
        onPanZoom: a,
        onTransformChange: ae
      });
      f.on("zoom", Ve);
      const le = M0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: $,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", le);
    }
    const we = T0({
      zoomActivationKeyPressed: Q,
      panOnDrag: O,
      zoomOnScroll: F,
      panOnScroll: $,
      zoomOnDoubleClick: de,
      zoomOnPinch: K,
      userSelectionActive: H,
      noPanClassName: Z,
      noWheelClassName: D,
      lib: j
    });
    f.filter(we), de ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(D, Z, P) {
    const H = Na(D), $ = f == null ? void 0 : f.constrain()(H, Z, P);
    return $ && await x($), new Promise((O) => O($));
  }
  async function y(D, Z) {
    const P = Na(D);
    return await x(P, Z), new Promise((H) => H(P));
  }
  function k(D) {
    if (v) {
      const Z = Na(D), P = v.property("__zoom");
      (P.k !== D.zoom || P.x !== D.x || P.y !== D.y) && (f == null || f.transform(v, Z, null, { sync: !0 }));
    }
  }
  function E() {
    const D = v ? Oc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function S(D, Z) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(Da(v, Z == null ? void 0 : Z.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function M(D, Z) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(Da(v, Z == null ? void 0 : Z.duration, () => P(!0)), D);
    }) : Promise.resolve(!1);
  }
  function T(D) {
    f == null || f.scaleExtent(D);
  }
  function z(D) {
    f == null || f.translateExtent(D);
  }
  function L(D) {
    const Z = !Yn(D) || D < 0 ? 0 : D;
    f == null || f.clickDistance(Z);
  }
  return {
    update: _,
    destroy: h,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: E,
    scaleTo: S,
    scaleBy: M,
    setScaleExtent: T,
    setTranslateExtent: z,
    syncViewport: k,
    setClickDistance: L
  };
}
var Gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Gl || (Gl = {}));
var H0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(de, "$connectable", n), i = () => ne(we, "$connectionRadius", n), a = () => ne(ae, "$domNode", n), s = () => ne(pe, "$nodeLookup", n), l = () => ne(j, "$connectionMode", n), u = () => ne(le, "$lib", n), c = () => ne(Ue, "$autoPanOnConnect", n), d = () => ne(Ie, "$flowId", n), f = () => ne(Ve, "$isValidConnectionStore", n), v = () => ne(Le, "$onedgecreate", n), w = () => ne(fe, "$onConnectAction", n), b = () => ne(Ee, "$onConnectStartAction", n), x = () => ne(qe, "$onConnectEndAction", n), _ = () => ne(ce, "$viewport", n), h = () => ne(vt, "$connection", n), C = () => ne(Je, "$edges", n), y = () => ne(se, "$connectionLookup", n), k = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), L = /* @__PURE__ */ oe(), D = /* @__PURE__ */ oe();
  let Z = m(t, "id", 12, void 0), P = m(t, "type", 12, "source"), H = m(t, "position", 28, () => Pe.Top), $ = m(t, "style", 12, void 0), O = m(t, "isValidConnection", 12, void 0), V = m(t, "onconnect", 12, void 0), A = m(t, "ondisconnect", 12, void 0), Y = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const F = Er("svelteflow__node_id"), de = Er("svelteflow__node_connectable"), Q = rt(), {
    connectionMode: j,
    domNode: ae,
    nodeLookup: pe,
    connectionRadius: we,
    viewport: ce,
    isValidConnection: Ve,
    lib: le,
    addEdge: re,
    onedgecreate: Le,
    panBy: He,
    cancelConnection: Ze,
    updateConnection: ee,
    autoPanOnConnect: Ue,
    edges: Je,
    connectionLookup: se,
    onconnect: fe,
    onconnectstart: Ee,
    onconnectend: qe,
    flowId: Ie,
    connection: vt
  } = Q;
  function lt(Te) {
    const ut = Ic(Te);
    (ut && Te.button === 0 || !ut) && _0.onPointerDown(Te, {
      handleId: g(S),
      nodeId: F,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: O() ?? f(),
      updateConnection: ee,
      cancelConnection: Ze,
      panBy: He,
      onConnect: (Be) => {
        var Re;
        const ct = v() ? v()(Be) : Be;
        ct && (re(ct), (Re = w()) == null || Re(Be));
      },
      onConnectStart: (Be, Re) => {
        var ct;
        (ct = b()) == null || ct(Be, {
          nodeId: Re.nodeId,
          handleId: Re.handleId,
          handleType: Re.handleType
        });
      },
      onConnectEnd: (Be, Re) => {
        var ct;
        (ct = x()) == null || ct(Be, Re);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let te = /* @__PURE__ */ oe(null), Ae = /* @__PURE__ */ oe();
  me(() => J(P()), () => {
    U(k, P() === "target");
  }), me(
    () => (J(Y()), o()),
    () => {
      U(E, Y() !== void 0 ? Y() : o());
    }
  ), me(() => J(Z()), () => {
    U(S, Z() || null);
  }), me(
    () => (J(V()), J(A()), C(), y(), J(P()), J(Z())),
    () => {
      (V() || A()) && (C(), U(Ae, y().get(`${F}-${P()}${Z() ? `-${Z()}` : ""}`)));
    }
  ), me(
    () => (g(te), g(Ae), J(A()), J(V())),
    () => {
      if (g(te) && !Ap(g(Ae), g(te))) {
        const Te = g(Ae) ?? /* @__PURE__ */ new Map();
        Ll(g(te), Te, A()), Ll(Te, g(te), V());
      }
      U(te, g(Ae) ?? /* @__PURE__ */ new Map());
    }
  ), me(() => h(), () => {
    U(M, !!h().fromHandle);
  }), me(
    () => (h(), J(P()), g(S)),
    () => {
      var Te, ut, Be;
      U(T, ((Te = h().fromHandle) == null ? void 0 : Te.nodeId) === F && ((ut = h().fromHandle) == null ? void 0 : ut.type) === P() && ((Be = h().fromHandle) == null ? void 0 : Be.id) === g(S));
    }
  ), me(
    () => (h(), J(P()), g(S)),
    () => {
      var Te, ut, Be;
      U(z, ((Te = h().toHandle) == null ? void 0 : Te.nodeId) === F && ((ut = h().toHandle) == null ? void 0 : ut.type) === P() && ((Be = h().toHandle) == null ? void 0 : Be.id) === g(S));
    }
  ), me(
    () => (l(), h(), J(P()), g(S)),
    () => {
      var Te, ut, Be;
      U(L, l() === Or.Strict ? ((Te = h().fromHandle) == null ? void 0 : Te.type) !== P() : F !== ((ut = h().fromHandle) == null ? void 0 : ut.nodeId) || g(S) !== ((Be = h().fromHandle) == null ? void 0 : Be.id));
    }
  ), me(() => (g(z), h()), () => {
    U(D, g(z) && h().isValid);
  }), kt(), Ye();
  var ye = H0();
  xe(ye, "data-nodeid", F);
  let Zt;
  var Bt = X(ye);
  Mt(Bt, t, "default", {}), W(ye), Oe(
    (Te, ut) => {
      xe(ye, "data-handleid", g(S)), xe(ye, "data-handlepos", H()), xe(ye, "data-id", `${d() ?? ""}-${F ?? ""}-${Z() || ""}-${P() ?? ""}`), Zt = Tt(ye, 1, Te, null, Zt, ut), xt(ye, $());
    },
    [
      () => kn(Rt([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        K()
      ])),
      () => ({
        valid: g(D),
        connectingto: g(z),
        connectingfrom: g(T),
        source: !g(k),
        target: g(k),
        connectablestart: g(E),
        connectableend: g(E),
        connectable: g(E),
        connectionindicator: g(E) && (!g(M) || g(L))
      })
    ],
    be
  ), Ge("mousedown", ye, lt), Ge("touchstart", ye, lt), I(e, ye);
  var un = ge({
    get id() {
      return Z();
    },
    set id(Te) {
      Z(Te), p();
    },
    get type() {
      return P();
    },
    set type(Te) {
      P(Te), p();
    },
    get position() {
      return H();
    },
    set position(Te) {
      H(Te), p();
    },
    get style() {
      return $();
    },
    set style(Te) {
      $(Te), p();
    },
    get isValidConnection() {
      return O();
    },
    set isValidConnection(Te) {
      O(Te), p();
    },
    get onconnect() {
      return V();
    },
    set onconnect(Te) {
      V(Te), p();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Te) {
      A(Te), p();
    },
    get isConnectable() {
      return Y();
    },
    set isConnectable(Te) {
      Y(Te), p();
    },
    get class() {
      return K();
    },
    set class(Te) {
      K(Te), p();
    }
  });
  return r(), un;
}
ue(
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
var z0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Xi(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  Ye();
  var a = z0(), s = _e(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Top);
  gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Pe.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Oe(() => {
    var f;
    return on(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), I(e, a), ge({
    get data() {
      return r();
    },
    set data(f) {
      r(f), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), p();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), p();
    }
  });
}
ue(
  Xi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var N0 = /* @__PURE__ */ ie(" <!>", 1);
function Gc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Ye(), Ne();
  var i = N0(), a = _e(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Oe(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), I(e, i), ge({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), p();
    }
  });
}
ue(Gc, { data: {}, sourcePosition: {} }, [], [], !0);
var D0 = /* @__PURE__ */ ie(" <!>", 1);
function Jc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Ye(), Ne();
  var i = D0(), a = _e(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Top);
  return gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Oe(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), I(e, i), ge({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), p();
    }
  });
}
ue(Jc, { data: {}, targetPosition: {} }, [], [], !0);
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
ue(Qc, {}, [], [], !0);
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
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$domNode", n), { domNode: i } = rt();
  Ye();
  var a = L0(), s = X(a);
  Mt(s, t, "default", {}), W(a), Ot(a, (l, u) => ji == null ? void 0 : ji(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), I(e, a), ge(), r();
}
ue(ed, {}, ["default"], [], !0);
function td() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = rt();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", eo.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var I0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function nd(e, t) {
  ve(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = td(), a = Er("svelteflow__edge_id");
  return Ye(), ed(e, {
    children: (s, l) => {
      var u = I0();
      let c;
      var d = X(u);
      Mt(d, t, "default", {}), W(u), Oe(() => c = xt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ge("keyup", u, () => {
      }), Ge("click", u, () => {
        a && i(a);
      }), I(s, u);
    },
    $$slots: { default: !0 }
  }), ge({
    get style() {
      return n();
    },
    set style(s) {
      n(s), p();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), p();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), p();
    }
  });
}
ue(nd, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var A0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), R0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Qo(e, t) {
  ve(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ye();
  var w = R0(), b = _e(w), x = B(b);
  {
    var _ = (y) => {
      var k = A0();
      xe(k, "stroke-opacity", 0), xe(k, "stroke-width", v), Oe(() => xe(k, "d", r())), I(y, k);
    };
    Ce(x, (y) => {
      v && y(_);
    });
  }
  var h = B(x);
  {
    var C = (y) => {
      nd(y, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, E) => {
          Ne();
          var S = Fe();
          Oe(() => on(S, o())), I(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(h, (y) => {
      o() && y(C);
    });
  }
  return Oe(
    (y) => {
      xe(b, "id", n()), xe(b, "d", r()), Tt(b, 0, y), xe(b, "marker-start", l()), xe(b, "marker-end", u()), xt(b, c());
    },
    [
      () => kn(Rt(["svelte-flow__edge-path", f()]))
    ],
    be
  ), I(e, w), ge({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get path() {
      return r();
    },
    set path(y) {
      r(y), p();
    },
    get label() {
      return o();
    },
    set label(y) {
      o(y), p();
    },
    get labelX() {
      return i();
    },
    set labelX(y) {
      i(y), p();
    },
    get labelY() {
      return a();
    },
    set labelY(y) {
      a(y), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(y) {
      s(y), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(y) {
      l(y), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(y) {
      u(y), p();
    },
    get style() {
      return c();
    },
    set style(y) {
      c(y), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(y) {
      d(y), p();
    },
    get class() {
      return f();
    },
    set class(y) {
      f(y), p();
    }
  });
}
ue(
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Ac({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), kt(), Ye(), Qo(e, {
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
  }), ge({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
ue(
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), kt(), Ye(), Qo(e, {
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
  }), ge({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
ue(
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(w()), J(b())),
    () => {
      ((x) => (U(r, x[0]), U(o, x[1]), U(i, x[2])))(is({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), kt(), Ye(), Qo(e, {
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
  }), ge({
    get label() {
      return a();
    },
    set label(x) {
      a(x), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), p();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), p();
    },
    get targetX() {
      return w();
    },
    set targetX(x) {
      w(x), p();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), p();
    }
  });
}
ue(
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return me(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), kt(), Ye(), Qo(e, {
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
  }), ge({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(h) {
      w(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), p();
    }
  });
}
ue(
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
function B0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const Y0 = (e, t, n) => {
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
}, X0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((w) => ({ ...l, ...w })) : f;
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
}, ad = {
  input: Gc,
  output: Jc,
  default: Xi,
  group: Qc
}, sd = {
  straight: od,
  smoothstep: rd,
  default: Ki,
  step: id
}, j0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Ri;
  Zc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Go(s, {
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
    edges: X0(t, u, c),
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
    connectionMode: $e(Or.Strict),
    domNode: $e(null),
    connection: cn(ns),
    connectionLineType: $e(Xr.Bezier),
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
    onerror: $e(Xp),
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
function K0(e) {
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
    return u && c && Jp({
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
function q0(e) {
  return ur([
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
  function l($) {
    s.nodeTypes.set({
      ...ad,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...sd,
      ...$
    });
  }
  function c($) {
    const O = q(s.edges);
    s.edges.set(t0($, O));
  }
  const d = ($, O = !1) => {
    var V;
    const A = q(s.nodeLookup);
    for (const [Y, K] of $) {
      const F = (V = A.get(Y)) == null ? void 0 : V.internals.userNode;
      F && (F.position = K.position, F.dragging = O);
    }
    s.nodes.update((Y) => Y);
  };
  function f($) {
    var O, V, A;
    const Y = q(s.nodeLookup), K = q(s.parentLookup), { changes: F, updatedInternals: de } = v0($, Y, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (de) {
      if (u0(Y, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), j = w({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(j);
      }
      for (const Q of F) {
        const j = (O = Y.get(Q.id)) == null ? void 0 : O.internals.userNode;
        if (j)
          switch (Q.type) {
            case "dimensions": {
              const ae = { ...j.measured, ...Q.dimensions };
              Q.setAttributes && (j.width = ((V = Q.dimensions) == null ? void 0 : V.width) ?? j.width, j.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? j.height), j.measured = ae;
              break;
            }
            case "position":
              j.position = Q.position ?? j.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const O = q(s.panZoom), V = q(s.domNode);
    if (!O || !V)
      return Promise.resolve(!1);
    const { width: A, height: Y } = Zs(V), K = Il(q(s.nodeLookup), $);
    return Al({
      nodes: K,
      width: A,
      height: Y,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: O
    }, $);
  }
  function w($) {
    const O = q(s.panZoom);
    if (!O)
      return !1;
    const V = Il(q(s.nodeLookup), $);
    return Al({
      nodes: V,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: O
    }, $), V.size > 0;
  }
  function b($, O) {
    const V = q(s.panZoom);
    return V ? V.scaleBy($, O) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function _($) {
    return b(1 / 1.2, $);
  }
  function h($) {
    const O = q(s.panZoom);
    O && (O.setScaleExtent([$, q(s.maxZoom)]), s.minZoom.set($));
  }
  function C($) {
    const O = q(s.panZoom);
    O && (O.setScaleExtent([q(s.minZoom), $]), s.maxZoom.set($));
  }
  function y($) {
    const O = q(s.panZoom);
    O && (O.setTranslateExtent($), s.translateExtent.set($));
  }
  function k($) {
    let O = !1;
    return $.forEach((V) => {
      V.selected && (V.selected = !1, O = !0);
    }), O;
  }
  function E($) {
    var O;
    (O = q(s.panZoom)) == null || O.setClickDistance($);
  }
  function S($) {
    k(($ == null ? void 0 : $.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k(($ == null ? void 0 : $.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var O;
    if ($) {
      const V = q(s.nodes), A = q(s.edges), Y = V.filter((Q) => Q.selected), K = A.filter((Q) => Q.selected), { nodes: F, edges: de } = await Vc({
        nodesToRemove: Y,
        edgesToRemove: K,
        nodes: V,
        edges: A,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || de.length) && (s.nodes.update((Q) => Q.filter((j) => !F.some((ae) => ae.id === j.id))), s.edges.update((Q) => Q.filter((j) => !de.some((ae) => ae.id === j.id))), (O = q(s.ondelete)) == null || O({
        nodes: F,
        edges: de
      }));
    }
  });
  function M($) {
    const O = q(s.multiselectionKeyPressed);
    s.nodes.update((V) => V.map((A) => {
      const Y = $.includes(A.id), K = O && A.selected || Y;
      return A.selected = K, A;
    })), O || s.edges.update((V) => V.map((A) => (A.selected = !1, A)));
  }
  function T($) {
    const O = q(s.multiselectionKeyPressed);
    s.edges.update((V) => V.map((A) => {
      const Y = $.includes(A.id), K = O && A.selected || Y;
      return A.selected = K, A;
    })), O || s.nodes.update((V) => V.map((A) => (A.selected = !1, A)));
  }
  function z($) {
    var O;
    const V = (O = q(s.nodes)) == null ? void 0 : O.find((A) => A.id === $);
    if (!V) {
      console.warn("012", eo.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), V.selected ? V.selected && q(s.multiselectionKeyPressed) && S({ nodes: [V], edges: [] }) : M([$]);
  }
  function L($) {
    const O = q(s.viewport);
    return g0({
      delta: $,
      panZoom: q(s.panZoom),
      transform: [O.x, O.y, O.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const D = $e(ns), Z = ($) => {
    D.set({ ...$ });
  };
  function P() {
    D.set(ns);
  }
  function H() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), S(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: K0(s),
    visibleNodes: q0(s),
    connection: ur([D, s.viewport], ([$, O]) => $.inProgress ? {
      ...$,
      to: Jo($.to, [O.x, O.y, O.zoom])
    } : { ...$ }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([$, O, V]) => a0($, { defaultColor: O, id: V })),
    initialized: (() => {
      let $ = !1;
      const O = q(s.nodes).length, V = q(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, Y, K]) => $ || (O === 0 ? $ = K : V === 0 ? $ = K && A : $ = K && A && Y, $));
    })(),
    // actions
    syncNodeStores: ($) => Z0(s.nodes, $),
    syncEdgeStores: ($) => B0(s.edges, $),
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
    setTranslateExtent: y,
    setPaneClickDistance: E,
    unselectNodesAndEdges: S,
    addSelectedNodes: M,
    addSelectedEdges: T,
    handleNodeSelection: z,
    panBy: L,
    updateConnection: Z,
    cancelConnection: P,
    reset: H
  };
}
function rt() {
  const e = Er(pa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function F0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Gr(pa, {
    getStore: () => s
  }), s;
}
function Ql(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = V0({
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
var U0 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const G0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ud(e, t) {
  ve(t, !1), st(e, G0);
  const [n, r] = ft(), o = () => ne(V, "$panActivationKeyPressed", n), i = () => ne(Z, "$minZoom", n), a = () => ne(P, "$maxZoom", n), s = () => ne(A, "$zoomActivationKeyPressed", n), l = () => ne(D, "$selectionRect", n), u = () => ne($, "$translateExtent", n), c = () => ne(O, "$lib", n), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), _ = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), S = m(t, "panOnDrag", 12), M = m(t, "panOnScroll", 12), T = m(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: L,
    selectionRect: D,
    minZoom: Z,
    maxZoom: P,
    dragging: H,
    translateExtent: $,
    lib: O,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: A,
    viewportInitialized: Y
  } = rt(), K = (j) => z.set({
    x: j[0],
    y: j[1],
    zoom: j[2]
  });
  ln(() => {
    Hi(Y, !0);
  }), me(() => J(w()), () => {
    U(d, w() || { x: 0, y: 0, zoom: 1 });
  }), me(
    () => (o(), J(S())),
    () => {
      U(f, o() || S());
    }
  ), me(
    () => (o(), J(M())),
    () => {
      U(v, o() || M());
    }
  ), kt(), Ye();
  var F = U0(), de = X(F);
  Mt(de, t, "default", {}), W(F), Ot(F, (j, ae) => Ql == null ? void 0 : Ql(j, ae), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: H,
    panZoom: L,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: E(),
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
    paneClickDistance: T(),
    onTransformChange: K
  })), I(e, F);
  var Q = ge({
    get initialViewport() {
      return w();
    },
    set initialViewport(j) {
      w(j), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(j) {
      b(j), p();
    },
    get onMove() {
      return x();
    },
    set onMove(j) {
      x(j), p();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(j) {
      _(j), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(j) {
      h(j), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(j) {
      C(j), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(j) {
      y(j), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(j) {
      k(j), p();
    },
    get zoomOnPinch() {
      return E();
    },
    set zoomOnPinch(j) {
      E(j), p();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(j) {
      S(j), p();
    },
    get panOnScroll() {
      return M();
    },
    set panOnScroll(j) {
      M(j), p();
    },
    get paneClickDistance() {
      return T();
    },
    set paneClickDistance(j) {
      T(j), p();
    }
  });
  return r(), Q;
}
ue(
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
  ve(t, !1), st(e, Q0);
  const [n, r] = ft(), o = () => ne(P, "$panActivationKeyPressed", n), i = () => ne(D, "$selectionKeyPressed", n), a = () => ne(z, "$selectionRect", n), s = () => ne(T, "$elementsSelectable", n), l = () => ne(L, "$selectionRectMode", n), u = () => ne(E, "$edges", n), c = () => ne(k, "$nodeLookup", n), d = () => ne(S, "$viewport", n), f = () => ne(Z, "$selectionMode", n), v = () => ne(M, "$dragging", n), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe();
  let _ = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const C = sa(), {
    nodes: y,
    nodeLookup: k,
    edges: E,
    viewport: S,
    dragging: M,
    elementsSelectable: T,
    selectionRect: z,
    selectionRectMode: L,
    selectionKeyPressed: D,
    selectionMode: Z,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: H
  } = rt();
  let $ = /* @__PURE__ */ oe(), O = null, V = [], A = !1;
  function Y(le) {
    if (A) {
      A = !1;
      return;
    }
    C("paneclick", { event: le }), H(), L.set(null);
  }
  function K(le) {
    var re, Le;
    if (O = g($).getBoundingClientRect(), !T || !g(b) || le.button !== 0 || le.target !== g($) || !O)
      return;
    (Le = (re = le.target) == null ? void 0 : re.setPointerCapture) == null || Le.call(re, le.pointerId);
    const { x: He, y: Ze } = jn(le, O);
    H(), z.set({
      width: 0,
      height: 0,
      startX: He,
      startY: Ze,
      x: He,
      y: Ze
    });
  }
  function F(le) {
    if (!g(b) || !O || !a())
      return;
    A = !0;
    const re = jn(le, O), Le = a().startX ?? 0, He = a().startY ?? 0, Ze = {
      ...a(),
      x: re.x < Le ? re.x : Le,
      y: re.y < He ? re.y : He,
      width: Math.abs(re.x - Le),
      height: Math.abs(re.y - He)
    }, ee = V.map((fe) => fe.id), Ue = rs(V, u()).map((fe) => fe.id);
    V = Tc(
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
    const Je = rs(V, u()).map((fe) => fe.id), se = V.map((fe) => fe.id);
    (ee.length !== se.length || se.some((fe) => !ee.includes(fe))) && y.update((fe) => fe.map(tu(se))), (Ue.length !== Je.length || Je.some((fe) => !Ue.includes(fe))) && E.update((fe) => fe.map(tu(Je))), L.set("user"), z.set(Ze);
  }
  function de(le) {
    var re, Le;
    le.button === 0 && ((Le = (re = le.target) == null ? void 0 : re.releasePointerCapture) == null || Le.call(re, le.pointerId), !g(b) && l() === "user" && le.target === g($) && (Y == null || Y(le)), z.set(null), V.length > 0 && Hi(L, "nodes"), i() && (A = !1));
  }
  const Q = (le) => {
    var re;
    if (Array.isArray(g(w)) && (re = g(w)) != null && re.includes(2)) {
      le.preventDefault();
      return;
    }
    C("panecontextmenu", { event: le });
  };
  me(
    () => (o(), J(_())),
    () => {
      U(w, o() || _());
    }
  ), me(
    () => (i(), a(), J(h()), g(w)),
    () => {
      U(b, i() || a() || h() && g(w) !== !0);
    }
  ), me(
    () => (s(), g(b), l()),
    () => {
      U(x, s() && (g(b) || l() === "user"));
    }
  ), kt(), Ye();
  var j = J0(), ae = /* @__PURE__ */ ze(() => g(x) ? void 0 : eu(Y, g($))), pe = /* @__PURE__ */ ze(() => eu(Q, g($)));
  let we;
  var ce = X(j);
  Mt(ce, t, "default", {}), W(j), Dn(j, (le) => U($, le), () => g($)), Oe(
    (le) => we = Tt(j, 1, "svelte-flow__pane svelte-1esy7hx", null, we, le),
    [
      () => ({
        draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    be
  ), Ge("click", j, function(...le) {
    var re;
    (re = g(ae)) == null || re.apply(this, le);
  }), Ge("pointerdown", j, function(...le) {
    var re;
    (re = g(x) ? K : void 0) == null || re.apply(this, le);
  }), Ge("pointermove", j, function(...le) {
    var re;
    (re = g(x) ? F : void 0) == null || re.apply(this, le);
  }), Ge("pointerup", j, function(...le) {
    var re;
    (re = g(x) ? de : void 0) == null || re.apply(this, le);
  }), Ge("contextmenu", j, function(...le) {
    var re;
    (re = g(pe)) == null || re.apply(this, le);
  }), I(e, j);
  var Ve = ge({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(le) {
      _(le), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(le) {
      h(le), p();
    }
  });
  return r(), Ve;
}
ue(cd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var em = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const tm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function dd(e, t) {
  ve(t, !1), st(e, tm);
  const [n, r] = ft(), o = () => ne(i, "$viewport", n), { viewport: i } = rt();
  Ye();
  var a = em(), s = X(a);
  Mt(s, t, "default", {}), W(a), Oe(() => xt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), I(e, a), ge(), r();
}
ue(dd, {}, ["default"], [], !0);
function qi(e, t) {
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
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(pe, "$nodeTypes", n), i = () => ne(re, "$elementsSelectable", n), a = () => ne(Le, "$nodesDraggable", n), s = () => ne(Ue, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), _ = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), S = m(t, "style", 13, void 0), M = m(t, "type", 13, "default"), T = m(t, "isParent", 13, !1), z = m(t, "positionX", 13), L = m(t, "positionY", 13), D = m(t, "sourcePosition", 13, void 0), Z = m(t, "targetPosition", 13, void 0), P = m(t, "zIndex", 13), H = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), O = m(t, "initialWidth", 13, void 0), V = m(t, "initialHeight", 13, void 0), A = m(t, "width", 13, void 0), Y = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), F = m(t, "initialized", 13, !1), de = m(t, "parentId", 13, void 0), Q = m(t, "nodeClickDistance", 13, void 0), j = m(t, "class", 13, "");
  const ae = rt(), {
    nodeTypes: pe,
    nodeDragThreshold: we,
    selectNodesOnDrag: ce,
    handleNodeSelection: Ve,
    updateNodeInternals: le,
    elementsSelectable: re,
    nodesDraggable: Le
  } = ae;
  let He = /* @__PURE__ */ oe(void 0, !0), Ze = /* @__PURE__ */ oe(null, !0);
  const ee = sa(), Ue = $e(h());
  let Je = /* @__PURE__ */ oe(void 0, !0), se = /* @__PURE__ */ oe(void 0, !0), fe = /* @__PURE__ */ oe(void 0, !0);
  Gr("svelteflow__node_id", v()), Gr("svelteflow__node_connectable", Ue), Ms(() => {
    var te;
    g(Ze) && ((te = E()) == null || te.unobserve(g(Ze)));
  });
  function Ee(te) {
    _() && (!q(ce) || !x() || q(we) > 0) && Ve(v()), ee("nodeclick", { node: f().internals.userNode, event: te });
  }
  me(() => J(M()), () => {
    U(l, M() || "default");
  }), me(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), me(
    () => (o(), g(l), Xi),
    () => {
      U(c, o()[g(l)] || Xi);
    }
  ), me(
    () => (g(u), J(M())),
    () => {
      g(u) || console.warn("003", eo.error003(M()));
    }
  ), me(
    () => (J(A()), J(Y()), J(O()), J(V()), J(H()), J($())),
    () => {
      U(d, nm({
        width: A(),
        height: Y(),
        initialWidth: O(),
        initialHeight: V(),
        measuredWidth: H(),
        measuredHeight: $()
      }));
    }
  ), me(() => J(h()), () => {
    Ue.set(!!h());
  }), me(
    () => (g(Je), g(l), g(se), J(D()), g(fe), J(Z()), J(v()), g(He)),
    () => {
      (g(Je) && g(l) !== g(Je) || g(se) && D() !== g(se) || g(fe) && Z() !== g(fe)) && requestAnimationFrame(() => le(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(He),
            force: !0
          }
        ]
      ]))), U(Je, g(l)), U(se, D()), U(fe, Z());
    }
  ), me(
    () => (J(E()), g(He), g(Ze), J(F())),
    () => {
      E() && (g(He) !== g(Ze) || !F()) && (g(Ze) && E().unobserve(g(Ze)), g(He) && E().observe(g(He)), U(Ze, g(He)));
    }
  ), kt(), Ye(!0);
  var qe = dt(), Ie = _e(qe);
  {
    var vt = (te) => {
      var Ae = rm();
      let ye, Zt;
      var Bt = X(Ae);
      const un = /* @__PURE__ */ be(() => b() ?? !1), Te = /* @__PURE__ */ be(() => _() ?? i() ?? !0), ut = /* @__PURE__ */ be(() => C() ?? !0), Be = /* @__PURE__ */ be(() => x() ?? a() ?? !0);
      qu(Bt, () => g(c), (Re, ct) => {
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
            return g(Te);
          },
          get deletable() {
            return g(ut);
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return Z();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Be);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return de();
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
            return L();
          },
          get width() {
            return A();
          },
          get height() {
            return Y();
          }
        });
      }), W(Ae), Ot(Ae, (Re, ct) => qi == null ? void 0 : qi(Re, ct), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Ve,
        onDrag: (Re, ct, Jt, St) => {
          ee("nodedrag", { event: Re, targetNode: Jt, nodes: St });
        },
        onDragStart: (Re, ct, Jt, St) => {
          ee("nodedragstart", { event: Re, targetNode: Jt, nodes: St });
        },
        onDragStop: (Re, ct, Jt, St) => {
          ee("nodedragstop", { event: Re, targetNode: Jt, nodes: St });
        },
        store: ae
      })), Dn(Ae, (Re) => U(He, Re), () => g(He)), en(() => Ge("click", Ae, Ee)), en(() => Ge("mouseenter", Ae, (Re) => ee("nodemouseenter", { node: f(), event: Re }))), en(() => Ge("mouseleave", Ae, (Re) => ee("nodemouseleave", { node: f(), event: Re }))), en(() => Ge("mousemove", Ae, (Re) => ee("nodemousemove", { node: f(), event: Re }))), en(() => Ge("contextmenu", Ae, (Re) => ee("nodecontextmenu", { node: f(), event: Re }))), Oe(
        (Re, ct) => {
          xe(Ae, "data-id", v()), ye = Tt(Ae, 1, Re, null, ye, ct), Zt = xt(Ae, `${S() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Zt, {
            "z-index": P(),
            transform: `translate(${z() ?? ""}px, ${L() ?? ""}px)`,
            visibility: F() ? "visible" : "hidden"
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
            parent: T()
          })
        ],
        be
      ), I(te, Ae);
    };
    Ce(Ie, (te) => {
      y() || te(vt);
    });
  }
  I(e, qe);
  var lt = ge({
    get node() {
      return f();
    },
    set node(te) {
      f(te), p();
    },
    get id() {
      return v();
    },
    set id(te) {
      v(te), p();
    },
    get data() {
      return w();
    },
    set data(te) {
      w(te), p();
    },
    get selected() {
      return b();
    },
    set selected(te) {
      b(te), p();
    },
    get draggable() {
      return x();
    },
    set draggable(te) {
      x(te), p();
    },
    get selectable() {
      return _();
    },
    set selectable(te) {
      _(te), p();
    },
    get connectable() {
      return h();
    },
    set connectable(te) {
      h(te), p();
    },
    get deletable() {
      return C();
    },
    set deletable(te) {
      C(te), p();
    },
    get hidden() {
      return y();
    },
    set hidden(te) {
      y(te), p();
    },
    get dragging() {
      return k();
    },
    set dragging(te) {
      k(te), p();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(te) {
      E(te), p();
    },
    get style() {
      return S();
    },
    set style(te) {
      S(te), p();
    },
    get type() {
      return M();
    },
    set type(te) {
      M(te), p();
    },
    get isParent() {
      return T();
    },
    set isParent(te) {
      T(te), p();
    },
    get positionX() {
      return z();
    },
    set positionX(te) {
      z(te), p();
    },
    get positionY() {
      return L();
    },
    set positionY(te) {
      L(te), p();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(te) {
      D(te), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(te) {
      Z(te), p();
    },
    get zIndex() {
      return P();
    },
    set zIndex(te) {
      P(te), p();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(te) {
      H(te), p();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(te) {
      $(te), p();
    },
    get initialWidth() {
      return O();
    },
    set initialWidth(te) {
      O(te), p();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(te) {
      V(te), p();
    },
    get width() {
      return A();
    },
    set width(te) {
      A(te), p();
    },
    get height() {
      return Y();
    },
    set height(te) {
      Y(te), p();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(te) {
      K(te), p();
    },
    get initialized() {
      return F();
    },
    set initialized(te) {
      F(te), p();
    },
    get parentId() {
      return de();
    },
    set parentId(te) {
      de(te), p();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), p();
    },
    get class() {
      return j();
    },
    set class(te) {
      j(te), p();
    }
  });
  return r(), lt;
}
ue(
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
  ve(t, !1), st(e, im);
  const [n, r] = ft(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(v, "$elementsSelectable", n), s = () => ne(f, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = rt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const y = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const E = k.target.getAttribute("data-id");
      y.set(E, { id: E, nodeElement: k.target, force: !0 });
    }), w(y);
  });
  Ms(() => {
    x == null || x.disconnect();
  }), Ye();
  var _ = om();
  Ft(_, 5, o, (C) => C.id, (C, y) => {
    const k = /* @__PURE__ */ be(() => !!g(y).selected), E = /* @__PURE__ */ be(() => !!g(y).hidden), S = /* @__PURE__ */ be(() => !!(g(y).draggable || i() && typeof g(y).draggable > "u")), M = /* @__PURE__ */ be(() => !!(g(y).selectable || a() && typeof g(y).selectable > "u")), T = /* @__PURE__ */ be(() => !!(g(y).connectable || s() && typeof g(y).connectable > "u")), z = /* @__PURE__ */ be(() => g(y).deletable ?? !0), L = /* @__PURE__ */ be(() => l().has(g(y).id)), D = /* @__PURE__ */ be(() => g(y).type ?? "default"), Z = /* @__PURE__ */ be(() => g(y).internals.z ?? 0), P = /* @__PURE__ */ be(() => Lc(g(y)));
    fd(C, {
      get node() {
        return g(y);
      },
      get id() {
        return g(y).id;
      },
      get data() {
        return g(y).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(E);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(M);
      },
      get connectable() {
        return g(T);
      },
      get deletable() {
        return g(z);
      },
      get positionX() {
        return g(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(L);
      },
      get style() {
        return g(y).style;
      },
      get class() {
        return g(y).class;
      },
      get type() {
        return g(D);
      },
      get sourcePosition() {
        return g(y).sourcePosition;
      },
      get targetPosition() {
        return g(y).targetPosition;
      },
      get dragging() {
        return g(y).dragging;
      },
      get zIndex() {
        return g(Z);
      },
      get dragHandle() {
        return g(y).dragHandle;
      },
      get initialized() {
        return g(P);
      },
      get width() {
        return g(y).width;
      },
      get height() {
        return g(y).height;
      },
      get initialWidth() {
        return g(y).initialWidth;
      },
      get initialHeight() {
        return g(y).initialHeight;
      },
      get measuredWidth() {
        return g(y).measured.width;
      },
      get measuredHeight() {
        return g(y).measured.height;
      },
      get parentId() {
        return g(y).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          We.call(this, t, H);
        },
        nodemouseenter(H) {
          We.call(this, t, H);
        },
        nodemousemove(H) {
          We.call(this, t, H);
        },
        nodemouseleave(H) {
          We.call(this, t, H);
        },
        nodedrag(H) {
          We.call(this, t, H);
        },
        nodedragstart(H) {
          We.call(this, t, H);
        },
        nodedragstop(H) {
          We.call(this, t, H);
        },
        nodecontextmenu(H) {
          We.call(this, t, H);
        }
      }
    });
  }), W(_), I(e, _);
  var h = ge({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), p();
    }
  });
  return r(), h;
}
ue(vd, { nodeClickDistance: {} }, [], [], !0);
var am = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function gd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(j, "$edgeTypes", n), i = () => ne(ae, "$flowId", n), a = () => ne(pe, "$elementsSelectable", n), s = () => ne(Q, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), f = /* @__PURE__ */ oe(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), _ = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), S = m(t, "deletable", 13, void 0), M = m(t, "hidden", 13, !1), T = m(t, "label", 13, void 0), z = m(t, "labelStyle", 13, void 0), L = m(t, "markerStart", 13, void 0), D = m(t, "markerEnd", 13, void 0), Z = m(t, "sourceHandle", 13, void 0), P = m(t, "targetHandle", 13, void 0), H = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), O = m(t, "targetX", 13), V = m(t, "targetY", 13), A = m(t, "sourcePosition", 13), Y = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), F = m(t, "interactionWidth", 13, void 0), de = m(t, "class", 13, "");
  Gr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: j,
    flowId: ae,
    elementsSelectable: pe
  } = rt(), we = sa(), ce = td();
  function Ve(ee) {
    const Ue = s().get(v());
    Ue && (ce(v()), we("edgeclick", { event: ee, edge: Ue }));
  }
  function le(ee, Ue) {
    const Je = s().get(v());
    Je && we(Ue, { event: ee, edge: Je });
  }
  me(() => J(w()), () => {
    U(l, w() || "default");
  }), me(
    () => (o(), g(l), Ki),
    () => {
      U(u, o()[g(l)] || Ki);
    }
  ), me(
    () => (J(L()), i()),
    () => {
      U(c, L() ? `url('#${as(L(), i())}')` : void 0);
    }
  ), me(
    () => (J(D()), i()),
    () => {
      U(d, D() ? `url('#${as(D(), i())}')` : void 0);
    }
  ), me(
    () => (J(E()), a()),
    () => {
      U(f, E() ?? a());
    }
  ), kt(), Ye(!0);
  var re = dt(), Le = _e(re);
  {
    var He = (ee) => {
      var Ue = am();
      let Je;
      var se = X(Ue);
      let fe;
      var Ee = X(se);
      const qe = /* @__PURE__ */ be(() => S() ?? !0);
      qu(Ee, () => g(u), (Ie, vt) => {
        vt(Ie, {
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
            return H();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return O();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return Y();
          },
          get animated() {
            return y();
          },
          get selected() {
            return k();
          },
          get label() {
            return T();
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
            return F();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(qe);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return Z();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), W(se), W(Ue), Oe(
        (Ie, vt) => {
          Je = xt(Ue, "", Je, { "z-index": C() }), fe = Tt(se, 0, Ie, null, fe, vt), xe(se, "data-id", v()), xe(se, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => kn(Rt(["svelte-flow__edge", de()])),
          () => ({
            animated: y(),
            selected: k(),
            selectable: g(f)
          })
        ],
        be
      ), Ge("click", se, Ve), Ge("contextmenu", se, (Ie) => {
        le(Ie, "edgecontextmenu");
      }), Ge("mouseenter", se, (Ie) => {
        le(Ie, "edgemouseenter");
      }), Ge("mouseleave", se, (Ie) => {
        le(Ie, "edgemouseleave");
      }), I(ee, Ue);
    };
    Ce(Le, (ee) => {
      M() || ee(He);
    });
  }
  I(e, re);
  var Ze = ge({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return w();
    },
    set type(ee) {
      w(ee), p();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), p();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), p();
    },
    get data() {
      return _();
    },
    set data(ee) {
      _(ee), p();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), p();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), p();
    },
    get animated() {
      return y();
    },
    set animated(ee) {
      y(ee), p();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), p();
    },
    get selectable() {
      return E();
    },
    set selectable(ee) {
      E(ee), p();
    },
    get deletable() {
      return S();
    },
    set deletable(ee) {
      S(ee), p();
    },
    get hidden() {
      return M();
    },
    set hidden(ee) {
      M(ee), p();
    },
    get label() {
      return T();
    },
    set label(ee) {
      T(ee), p();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(ee) {
      z(ee), p();
    },
    get markerStart() {
      return L();
    },
    set markerStart(ee) {
      L(ee), p();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(ee) {
      D(ee), p();
    },
    get sourceHandle() {
      return Z();
    },
    set sourceHandle(ee) {
      Z(ee), p();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(ee) {
      P(ee), p();
    },
    get sourceX() {
      return H();
    },
    set sourceX(ee) {
      H(ee), p();
    },
    get sourceY() {
      return $();
    },
    set sourceY(ee) {
      $(ee), p();
    },
    get targetX() {
      return O();
    },
    set targetX(ee) {
      O(ee), p();
    },
    get targetY() {
      return V();
    },
    set targetY(ee) {
      V(ee), p();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), p();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(ee) {
      Y(ee), p();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(ee) {
      K(ee), p();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(ee) {
      F(ee), p();
    },
    get class() {
      return de();
    },
    set class(ee) {
      de(ee), p();
    }
  });
  return r(), Ze;
}
ue(
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
  ve(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return ln(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ye(), ge({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), p();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), p();
    }
  });
}
ue(hd, { onMount: {}, onDestroy: {} }, [], [], !0);
var sm = /* @__PURE__ */ ke("<defs></defs>");
function pd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$markers", n), { markers: i } = rt();
  Ye();
  var a = sm();
  Ft(a, 5, o, (s) => s.id, (s, l) => {
    md(s, bt(() => g(l)));
  }), W(a), I(e, a), ge(), r();
}
ue(pd, {}, [], [], !0);
var lm = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function md(e, t) {
  ve(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Ye();
  var c = cm(), d = X(c);
  {
    var f = (w) => {
      var b = lm();
      Oe(() => {
        xe(b, "stroke", l()), xe(b, "stroke-width", u());
      }), I(w, b);
    }, v = (w, b) => {
      {
        var x = (_) => {
          var h = um();
          Oe(() => {
            xe(h, "stroke", l()), xe(h, "stroke-width", u()), xe(h, "fill", l());
          }), I(_, h);
        };
        Ce(
          w,
          (_) => {
            r() === Ro.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    Ce(d, (w) => {
      r() === Ro.Arrow ? w(f) : w(v, !1);
    });
  }
  return W(c), Oe(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${i()}`), xe(c, "markerUnits", a()), xe(c, "orient", s());
  }), I(e, c), ge({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), p();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), p();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(w) {
      a(w), p();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), p();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), p();
    }
  });
}
ue(
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
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = rt();
  ln(() => {
    a() && u(a());
  }), Ye();
  var d = dm(), f = X(d), v = X(f);
  pd(v, {}), W(f);
  var w = B(f, 2);
  Ft(w, 1, o, (h) => h.id, (h, C) => {
    const y = /* @__PURE__ */ be(() => g(C).selectable ?? i()), k = /* @__PURE__ */ be(() => g(C).type || "default");
    gd(h, {
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
        return g(y);
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
        edgeclick(E) {
          We.call(this, t, E);
        },
        edgecontextmenu(E) {
          We.call(this, t, E);
        },
        edgemouseenter(E) {
          We.call(this, t, E);
        },
        edgemouseleave(E) {
          We.call(this, t, E);
        }
      }
    });
  });
  var b = B(w, 2);
  {
    var x = (h) => {
      hd(h, {
        onMount: () => {
          Hi(l, !0);
        },
        onDestroy: () => {
          Hi(l, !1);
        }
      });
    };
    Ce(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  W(d), I(e, d);
  var _ = ge({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
    }
  });
  return r(), _;
}
ue(yd, { defaultEdgeOptions: {} }, [], [], !0);
var fm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const vm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  ve(t, !1), st(e, vm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = dt(), l = _e(s);
  {
    var u = (c) => {
      var d = fm();
      let f;
      Oe(() => f = xt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), I(c, d);
    };
    Ce(l, (c) => {
      a() && c(u);
    });
  }
  return I(e, s), ge({
    get x() {
      return n();
    },
    set x(c) {
      n(c), p();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), p();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), p();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), p();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), p();
    }
  });
}
ue(
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
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = rt();
  Ye();
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
  Xs(e, {
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
  }), ge(), r();
}
ue(wd, {}, [], [], !0);
var gm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const hm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function bd(e, t) {
  ve(t, !1), st(e, hm);
  const [n, r] = ft(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = rt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ oe(null);
  function v(h) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function w(h) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  me(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (U(f, Go(i(), { filter: (h) => !!h.selected })), a());
    }
  ), kt(), Ye();
  var b = dt(), x = _e(b);
  {
    var _ = (h) => {
      var C = gm(), y = X(C);
      Xs(y, { width: "100%", height: "100%", x: 0, y: 0 }), W(C), Ot(C, (k, E) => qi == null ? void 0 : qi(k, E), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, E, S, M) => {
          d("nodedrag", { event: k, targetNode: null, nodes: M });
        },
        onDragStart: (k, E, S, M) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: M });
        },
        onDragStop: (k, E, S, M) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: M });
        }
      })), en(() => Ge("contextmenu", C, v)), en(() => Ge("click", C, w)), en(() => Ge("keyup", C, () => {
      })), Oe(() => xt(C, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), I(h, C);
    };
    Ce(x, (h) => {
      o() === "nodes" && g(f) && Yn(g(f).x) && Yn(g(f).y) && h(_);
    });
  }
  I(e, b), ge(), r();
}
ue(bd, {}, [], [], !0);
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
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((_) => l[_])
        ))
          continue;
        if (a.key === f) {
          w && a.preventDefault();
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
function xd(e, t) {
  ve(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => Yi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => Yi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = rt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function w(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((y) => {
      const k = b(y);
      return {
        key: k,
        modifier: w(y),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ye(), Ge("blur", Xt, _), Ge("contextmenu", Xt, _), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Fp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Ot(Xt, (h, C) => wt == null ? void 0 : wt(h, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), ge({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), p();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), p();
    }
  });
}
ue(
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
var pm = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), mm = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function $d(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(v, "$connection", n), i = () => ne(w, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = rt();
  let b = /* @__PURE__ */ oe(null);
  me(
    () => (o(), J(c()), i(), g(b), is),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: k, fromPosition: E, toPosition: S } = o(), M = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: E,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Xr.Bezier:
            ((T) => U(b, T[0]))(Ac(M));
            break;
          case Xr.Step:
            ((T) => U(b, T[0]))(Wi({ ...M, borderRadius: 0 }));
            break;
          case Xr.SmoothStep:
            ((T) => U(b, T[0]))(Wi(M));
            break;
          default:
            ((T) => U(b, T[0]))(is(M));
        }
      }
    }
  ), kt(), Ye();
  var x = dt(), _ = _e(x);
  {
    var h = (y) => {
      var k = mm(), E = X(k), S = X(E);
      Mt(S, t, "connectionLine", {});
      var M = B(S);
      {
        var T = (z) => {
          var L = pm();
          Oe(() => {
            xe(L, "d", g(b)), xt(L, u());
          }), I(z, L);
        };
        Ce(M, (z) => {
          c() || z(T);
        });
      }
      W(E), W(k), Oe(
        (z) => {
          xe(k, "width", a()), xe(k, "height", s()), xt(k, l()), Tt(E, 0, z);
        },
        [
          () => kn(Rt([
            "svelte-flow__connection",
            Rp(o().isValid)
          ]))
        ],
        be
      ), I(y, k);
    };
    Ce(_, (y) => {
      o().inProgress && y(h);
    });
  }
  I(e, x);
  var C = ge({
    get containerStyle() {
      return l();
    },
    set containerStyle(y) {
      l(y), p();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(y) {
      c(y), p();
    }
  });
  return r(), C;
}
ue(
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
  ve(t, !1);
  const [o, i] = ft(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = rt();
  me(() => J(l()), () => {
    U(s, `${l()}`.split("-"));
  }), kt(), Ye();
  var f = ym();
  let v;
  var w = X(f);
  Mt(w, t, "default", {}), W(f), Oe(
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
  ), I(e, f);
  var b = ge({
    get position() {
      return l();
    },
    set position(x) {
      l(x), p();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), p();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), p();
    }
  });
  return i(), b;
}
ue(ei, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var wm = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function _d(e, t) {
  ve(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Ye();
  var o = dt(), i = _e(o);
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
          I(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return I(e, o), ge({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), p();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), p();
    }
  });
}
ue(_d, { proOptions: {}, position: {} }, [], [], !0);
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
var _m = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Cm = /* @__PURE__ */ ie("<!> <!>", 1), km = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Em = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Cd(e, t) {
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
  ve(t, !1), st(e, Em);
  const [i, a] = ft(), s = () => ne(C(), "$viewport", i), l = () => ne(vo, "$initialized", i), u = () => ne(g(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), _ = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), S = m(t, "selectionMode", 12, void 0), M = m(t, "panActivationKey", 12, void 0), T = m(t, "multiSelectionKey", 12, void 0), z = m(t, "zoomActivationKey", 12, void 0), L = m(t, "nodesDraggable", 12, void 0), D = m(t, "nodesConnectable", 12, void 0), Z = m(t, "nodeDragThreshold", 12, void 0), P = m(t, "elementsSelectable", 12, void 0), H = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), O = m(t, "connectionRadius", 12, void 0), V = m(t, "connectionLineType", 12, void 0), A = m(t, "connectionMode", 28, () => Or.Strict), Y = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), F = m(t, "onMoveStart", 12, void 0), de = m(t, "onMove", 12, void 0), Q = m(t, "onMoveEnd", 12, void 0), j = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), pe = m(t, "nodeExtent", 12, void 0), we = m(t, "onlyRenderVisibleElements", 12, void 0), ce = m(t, "panOnScrollMode", 28, () => cr.Free), Ve = m(t, "preventScrolling", 12, !0), le = m(t, "zoomOnScroll", 12, !0), re = m(t, "zoomOnDoubleClick", 12, !0), Le = m(t, "zoomOnPinch", 12, !0), He = m(t, "panOnScroll", 12, !1), Ze = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), Ue = m(t, "autoPanOnConnect", 12, !0), Je = m(t, "autoPanOnNodeDrag", 12, !0), se = m(t, "onerror", 12, void 0), fe = m(t, "ondelete", 12, void 0), Ee = m(t, "onedgecreate", 12, void 0), qe = m(t, "attributionPosition", 12, void 0), Ie = m(t, "proOptions", 12, void 0), vt = m(t, "defaultEdgeOptions", 12, void 0), lt = m(t, "width", 12, void 0), te = m(t, "height", 12, void 0), Ae = m(t, "colorMode", 12, "light"), ye = m(t, "onconnect", 12, void 0), Zt = m(t, "onconnectstart", 12, void 0), Bt = m(t, "onconnectend", 12, void 0), un = m(t, "onbeforedelete", 12, void 0), Te = m(t, "oninit", 12, void 0), ut = m(t, "nodeOrigin", 12, void 0), Be = m(t, "paneClickDistance", 12, 0), Re = m(t, "nodeClickDistance", 12, 0), ct = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = m(t, "style", 12, void 0), St = m(t, "class", 12, void 0), Qn = /* @__PURE__ */ oe(), mt = /* @__PURE__ */ oe(), $t = /* @__PURE__ */ oe();
  const Pn = s() || h(), ot = Cv(pa) ? rt() : F0({
    nodes: q(f()),
    edges: q(v()),
    width: lt(),
    height: te(),
    fitView: w(),
    nodeOrigin: ut(),
    nodeExtent: pe()
  });
  ln(() => (ot.width.set(g(mt)), ot.height.set(g($t)), ot.domNode.set(g(Qn)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport(C()), w() !== void 0 && ot.fitViewOnInit.set(w()), b() && ot.fitViewOptions.set(b()), nu(ot, {
    nodeTypes: y(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: ae(),
    paneClickDistance: Be()
  }), () => {
    ot.reset();
  }));
  const { initialized: vo } = ot;
  let er = /* @__PURE__ */ oe(!1);
  me(
    () => (g(mt), g($t)),
    () => {
      g(mt) !== void 0 && g($t) !== void 0 && (ot.width.set(g(mt)), ot.height.set(g($t)));
    }
  ), me(
    () => (g(er), l(), J(Te())),
    () => {
      var R;
      !g(er) && l() && ((R = Te()) == null || R(), U(er, !0));
    }
  ), me(
    () => (J(d()), J(V()), J(O()), J(S()), J(H()), J(ct()), J(L()), J(D()), J(P()), J(we()), J(j()), J(Ue()), J(Je()), J(se()), J(fe()), J(Ee()), J(A()), J(Z()), J(ye()), J(Zt()), J(Bt()), J(un()), J(ut()), ru),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: O(),
        selectionMode: S(),
        snapGrid: H(),
        defaultMarkerColor: ct(),
        nodesDraggable: L(),
        nodesConnectable: D(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: we(),
        isValidConnection: j(),
        autoPanOnConnect: Ue(),
        autoPanOnNodeDrag: Je(),
        onerror: se(),
        ondelete: fe(),
        onedgecreate: Ee(),
        connectionMode: A(),
        nodeDragThreshold: Z(),
        onconnect: ye(),
        onconnectstart: Zt(),
        onconnectend: Bt(),
        onbeforedelete: un(),
        nodeOrigin: ut()
      };
      ru(ot, R);
    }
  ), me(
    () => (J(y()), J(k()), J(x()), J(_()), J(ae()), J(Be())),
    () => {
      nu(ot, {
        nodeTypes: y(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: ae(),
        paneClickDistance: Be()
      });
    }
  ), me(
    () => J(Ae()),
    () => {
      e1(U(c, $m(Ae())), "$colorModeClass", i);
    }
  ), kt(), Ye();
  var Ht = km();
  let wr;
  var br = X(Ht);
  xd(br, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return M();
    },
    get multiSelectionKey() {
      return T();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Dr = B(br, 2);
  const go = /* @__PURE__ */ be(() => ce() === void 0 ? cr.Free : ce()), ii = /* @__PURE__ */ be(() => Ve() === void 0 ? !0 : Ve()), ai = /* @__PURE__ */ be(() => le() === void 0 ? !0 : le()), xa = /* @__PURE__ */ be(() => re() === void 0 ? !0 : re()), $a = /* @__PURE__ */ be(() => Le() === void 0 ? !0 : Le()), _a = /* @__PURE__ */ be(() => He() === void 0 ? !1 : He()), Ca = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze()), N = /* @__PURE__ */ be(() => Be() === void 0 ? 0 : Be());
  ud(Dr, {
    initialViewport: Pn,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return de();
    },
    get onMoveEnd() {
      return Q();
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
      return g(_a);
    },
    get panOnDrag() {
      return g(Ca);
    },
    get paneClickDistance() {
      return g(N);
    },
    children: (R, it) => {
      const je = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze());
      cd(R, {
        get panOnDrag() {
          return g(je);
        },
        get selectionOnDrag() {
          return ee();
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
          var gt = Cm(), pt = _e(gt);
          dd(pt, {
            children: (tr, nr) => {
              var Ct = _m(), Lr = _e(Ct);
              yd(Lr, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(Ke) {
                    We.call(this, t, Ke);
                  },
                  edgecontextmenu(Ke) {
                    We.call(this, t, Ke);
                  },
                  edgemouseenter(Ke) {
                    We.call(this, t, Ke);
                  },
                  edgemouseleave(Ke) {
                    We.call(this, t, Ke);
                  }
                }
              });
              var si = B(Lr, 2);
              $d(si, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return Y();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ke, Xw) => {
                    var Gs = dt(), bf = _e(Gs);
                    Mt(bf, t, "connectionLine", {}), I(Ke, Gs);
                  }
                }
              });
              var li = B(si, 6);
              vd(li, {
                get nodeClickDistance() {
                  return Re();
                },
                $$events: {
                  nodeclick(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodemouseenter(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodemousemove(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodemouseleave(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodecontextmenu(Ke) {
                    We.call(this, t, Ke);
                  }
                }
              });
              var wf = B(li, 2);
              bd(wf, {
                $$events: {
                  selectionclick(Ke) {
                    We.call(this, t, Ke);
                  },
                  selectioncontextmenu(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    We.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    We.call(this, t, Ke);
                  }
                }
              }), I(tr, Ct);
            },
            $$slots: { default: !0 }
          });
          var Yt = B(pt, 2);
          wd(Yt, {}), I(De, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var G = B(Dr, 2);
  _d(G, {
    get proOptions() {
      return Ie();
    },
    get position() {
      return qe();
    }
  });
  var he = B(G, 2);
  Mt(he, t, "default", {}), W(Ht), Dn(Ht, (R) => U(Qn, R), () => g(Qn)), Oe(
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
        St(),
        u()
      ])
    ],
    be
  ), gl(Ht, "clientWidth", (R) => U(mt, R)), gl(Ht, "clientHeight", (R) => U($t, R)), Ge("dragover", Ht, function(R) {
    We.call(this, t, R);
  }), Ge("drop", Ht, function(R) {
    We.call(this, t, R);
  }), I(e, Ht);
  var Se = ge({
    get id() {
      return d();
    },
    set id(R) {
      d(R), p();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), p();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), p();
    },
    get fitView() {
      return w();
    },
    set fitView(R) {
      w(R), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), p();
    },
    get minZoom() {
      return x();
    },
    set minZoom(R) {
      x(R), p();
    },
    get maxZoom() {
      return _();
    },
    set maxZoom(R) {
      _(R), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), p();
    },
    get viewport() {
      return C();
    },
    set viewport(R) {
      C(R), p();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(R) {
      y(R), p();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(R) {
      k(R), p();
    },
    get selectionKey() {
      return E();
    },
    set selectionKey(R) {
      E(R), p();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(R) {
      S(R), p();
    },
    get panActivationKey() {
      return M();
    },
    set panActivationKey(R) {
      M(R), p();
    },
    get multiSelectionKey() {
      return T();
    },
    set multiSelectionKey(R) {
      T(R), p();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(R) {
      z(R), p();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(R) {
      L(R), p();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(R) {
      D(R), p();
    },
    get nodeDragThreshold() {
      return Z();
    },
    set nodeDragThreshold(R) {
      Z(R), p();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(R) {
      P(R), p();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(R) {
      H(R), p();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(R) {
      $(R), p();
    },
    get connectionRadius() {
      return O();
    },
    set connectionRadius(R) {
      O(R), p();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(R) {
      V(R), p();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(R) {
      A(R), p();
    },
    get connectionLineStyle() {
      return Y();
    },
    set connectionLineStyle(R) {
      Y(R), p();
    },
    get connectionLineContainerStyle() {
      return K();
    },
    set connectionLineContainerStyle(R) {
      K(R), p();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(R) {
      F(R), p();
    },
    get onMove() {
      return de();
    },
    set onMove(R) {
      de(R), p();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(R) {
      Q(R), p();
    },
    get isValidConnection() {
      return j();
    },
    set isValidConnection(R) {
      j(R), p();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(R) {
      ae(R), p();
    },
    get nodeExtent() {
      return pe();
    },
    set nodeExtent(R) {
      pe(R), p();
    },
    get onlyRenderVisibleElements() {
      return we();
    },
    set onlyRenderVisibleElements(R) {
      we(R), p();
    },
    get panOnScrollMode() {
      return ce();
    },
    set panOnScrollMode(R) {
      ce(R), p();
    },
    get preventScrolling() {
      return Ve();
    },
    set preventScrolling(R) {
      Ve(R), p();
    },
    get zoomOnScroll() {
      return le();
    },
    set zoomOnScroll(R) {
      le(R), p();
    },
    get zoomOnDoubleClick() {
      return re();
    },
    set zoomOnDoubleClick(R) {
      re(R), p();
    },
    get zoomOnPinch() {
      return Le();
    },
    set zoomOnPinch(R) {
      Le(R), p();
    },
    get panOnScroll() {
      return He();
    },
    set panOnScroll(R) {
      He(R), p();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(R) {
      Ze(R), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(R) {
      ee(R), p();
    },
    get autoPanOnConnect() {
      return Ue();
    },
    set autoPanOnConnect(R) {
      Ue(R), p();
    },
    get autoPanOnNodeDrag() {
      return Je();
    },
    set autoPanOnNodeDrag(R) {
      Je(R), p();
    },
    get onerror() {
      return se();
    },
    set onerror(R) {
      se(R), p();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(R) {
      fe(R), p();
    },
    get onedgecreate() {
      return Ee();
    },
    set onedgecreate(R) {
      Ee(R), p();
    },
    get attributionPosition() {
      return qe();
    },
    set attributionPosition(R) {
      qe(R), p();
    },
    get proOptions() {
      return Ie();
    },
    set proOptions(R) {
      Ie(R), p();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(R) {
      vt(R), p();
    },
    get width() {
      return lt();
    },
    set width(R) {
      lt(R), p();
    },
    get height() {
      return te();
    },
    set height(R) {
      te(R), p();
    },
    get colorMode() {
      return Ae();
    },
    set colorMode(R) {
      Ae(R), p();
    },
    get onconnect() {
      return ye();
    },
    set onconnect(R) {
      ye(R), p();
    },
    get onconnectstart() {
      return Zt();
    },
    set onconnectstart(R) {
      Zt(R), p();
    },
    get onconnectend() {
      return Bt();
    },
    set onconnectend(R) {
      Bt(R), p();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(R) {
      un(R), p();
    },
    get oninit() {
      return Te();
    },
    set oninit(R) {
      Te(R), p();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(R) {
      ut(R), p();
    },
    get paneClickDistance() {
      return Be();
    },
    set paneClickDistance(R) {
      Be(R), p();
    },
    get nodeClickDistance() {
      return Re();
    },
    set nodeClickDistance(R) {
      Re(R), p();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(R) {
      ct(R), p();
    },
    get style() {
      return Jt();
    },
    set style(R) {
      Jt(R), p();
    },
    get class() {
      return St();
    },
    set class(R) {
      St(R), p();
    }
  });
  return a(), Se;
}
ue(
  Cd,
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
  ve(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = ld({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Gr(pa, { getStore: () => l }), Ms(() => {
    l.reset();
  }), Ye();
  var u = dt(), c = _e(u);
  return Mt(c, t, "default", {}), I(e, u), ge({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), p();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), p();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), p();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), p();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), p();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), p();
    }
  });
}
ue(
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
var Sm = /* @__PURE__ */ ie("<button><!></button>");
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
  ve(t, !1);
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Ye();
  var c = Sm();
  let d;
  var f = X(c);
  return Mt(f, t, "default", { class: "button-svg" }), W(c), Oe(
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
  ), Ge("click", c, function(v) {
    We.call(this, t, v);
  }), I(e, c), ge({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), p();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), p();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), p();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), p();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), p();
    }
  });
}
ue(
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
var Pm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Ed(e) {
  var t = Pm();
  I(e, t);
}
ue(Ed, {}, [], [], !0);
var Om = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sd(e) {
  var t = Om();
  I(e, t);
}
ue(Sd, {}, [], [], !0);
var Mm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Pd(e) {
  var t = Mm();
  I(e, t);
}
ue(Pd, {}, [], [], !0);
var Tm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Od(e) {
  var t = Tm();
  I(e, t);
}
ue(Od, {}, [], [], !0);
var Vm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Md(e) {
  var t = Vm();
  I(e, t);
}
ue(Md, {}, [], [], !0);
var Hm = /* @__PURE__ */ ie("<!> <!>", 1), zm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Td(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(V, "$nodesDraggable", n), i = () => ne(A, "$nodesConnectable", n), a = () => ne(Y, "$elementsSelectable", n), s = () => ne(H, "$viewport", n), l = () => ne($, "$minZoom", n), u = () => ne(O, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), _ = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), S = m(t, "ariaLabel", 12, void 0), M = m(t, "style", 12, void 0), T = m(t, "orientation", 12, "vertical"), z = m(t, "fitViewOptions", 12, void 0), L = m(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: Z,
    fitView: P,
    viewport: H,
    minZoom: $,
    maxZoom: O,
    nodesDraggable: V,
    nodesConnectable: A,
    elementsSelectable: Y
  } = rt(), K = {
    bgColor: h(),
    bgColorHover: C(),
    color: y(),
    colorHover: k(),
    borderColor: E()
  }, F = () => {
    D();
  }, de = () => {
    Z();
  }, Q = () => {
    P(z());
  }, j = () => {
    U(c, !g(c)), V.set(g(c)), A.set(g(c)), Y.set(g(c));
  };
  me(
    () => (o(), i(), a()),
    () => {
      U(c, o() || i() || a());
    }
  ), me(() => (s(), l()), () => {
    U(d, s().zoom <= l());
  }), me(() => (s(), u()), () => {
    U(f, s().zoom >= u());
  }), me(() => J(T()), () => {
    U(v, T() === "horizontal" ? "horizontal" : "vertical");
  }), kt(), Ye();
  const ae = /* @__PURE__ */ be(() => Rt([
    "svelte-flow__controls",
    g(v),
    L()
  ])), pe = /* @__PURE__ */ be(() => S() ?? "Svelte Flow controls");
  ei(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(pe);
    },
    get style() {
      return M();
    },
    children: (ce, Ve) => {
      var le = zm(), re = _e(le);
      Mt(re, t, "before", {});
      var Le = B(re, 2);
      {
        var He = (Ee) => {
          var qe = Hm(), Ie = _e(qe);
          Co(Ie, bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            K,
            {
              $$events: { click: F },
              children: (lt, te) => {
                Ed(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = B(Ie, 2);
          Co(vt, bt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            K,
            {
              $$events: { click: de },
              children: (lt, te) => {
                Sd(lt);
              },
              $$slots: { default: !0 }
            }
          )), I(Ee, qe);
        };
        Ce(Le, (Ee) => {
          b() && Ee(He);
        });
      }
      var Ze = B(Le, 2);
      {
        var ee = (Ee) => {
          Co(Ee, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: Q },
              children: (qe, Ie) => {
                Pd(qe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ze, (Ee) => {
          x() && Ee(ee);
        });
      }
      var Ue = B(Ze, 2);
      {
        var Je = (Ee) => {
          Co(Ee, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: j },
              children: (qe, Ie) => {
                var vt = dt(), lt = _e(vt);
                {
                  var te = (ye) => {
                    Md(ye);
                  }, Ae = (ye) => {
                    Od(ye);
                  };
                  Ce(lt, (ye) => {
                    g(c) ? ye(te) : ye(Ae, !1);
                  });
                }
                I(qe, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ce(Ue, (Ee) => {
          _() && Ee(Je);
        });
      }
      var se = B(Ue, 2);
      Mt(se, t, "default", {});
      var fe = B(se, 2);
      Mt(fe, t, "after", {}), I(ce, le);
    },
    $$slots: { default: !0 }
  });
  var we = ge({
    get position() {
      return w();
    },
    set position(ce) {
      w(ce), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ce) {
      b(ce), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ce) {
      x(ce), p();
    },
    get showLock() {
      return _();
    },
    set showLock(ce) {
      _(ce), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ce) {
      h(ce), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ce) {
      C(ce), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(ce) {
      y(ce), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ce) {
      k(ce), p();
    },
    get buttonBorderColor() {
      return E();
    },
    set buttonBorderColor(ce) {
      E(ce), p();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(ce) {
      S(ce), p();
    },
    get style() {
      return M();
    },
    set style(ce) {
      M(ce), p();
    },
    get orientation() {
      return T();
    },
    set orientation(ce) {
      T(ce), p();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(ce) {
      z(ce), p();
    },
    get class() {
      return L();
    },
    set class(ce) {
      L(ce), p();
    }
  });
  return r(), we;
}
ue(
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
var dr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(dr || (dr = {}));
var Nm = /* @__PURE__ */ ke("<circle></circle>");
function Vd(e, t) {
  ve(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Ye();
  var o = Nm();
  return Oe(
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
  ), I(e, o), ge({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), p();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), p();
    }
  });
}
ue(Vd, { radius: {}, class: {} }, [], [], !0);
var Dm = /* @__PURE__ */ ke("<path></path>");
function Hd(e, t) {
  ve(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Ye();
  var a = Dm();
  return Oe(
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
  ), I(e, a), ge({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), p();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), p();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), p();
    }
  });
}
ue(
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
var Im = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Am = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function zd(e, t) {
  ve(t, !1), st(e, Am);
  const [n, r] = ft(), o = () => ne(k, "$flowId", n), i = () => ne(y, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => dr.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), _ = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: k } = rt(), E = w() || Lm[f()], S = f() === dr.Dots, M = f() === dr.Cross, T = Array.isArray(v()) ? v() : [v(), v()];
  me(
    () => (o(), J(d())),
    () => {
      U(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), me(() => i(), () => {
    U(s, [
      T[0] * i().zoom || 1,
      T[1] * i().zoom || 1
    ]);
  }), me(() => i(), () => {
    U(l, E * i().zoom);
  }), me(() => (g(l), g(s)), () => {
    U(u, M ? [g(l), g(l)] : g(s));
  }), me(
    () => (g(l), g(u)),
    () => {
      U(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), kt(), Ye();
  var z = Im();
  let L;
  var D = X(z), Z = X(D);
  {
    var P = (V) => {
      const A = /* @__PURE__ */ be(() => g(l) / 2);
      Vd(V, {
        get radius() {
          return g(A);
        },
        get class() {
          return h();
        }
      });
    }, H = (V) => {
      Hd(V, {
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
    Ce(Z, (V) => {
      S ? V(P) : V(H, !1);
    });
  }
  W(D);
  var $ = B(D);
  W(z), Oe(
    (V) => {
      Tt(z, 0, V, "svelte-1r7pe8d"), L = xt(z, "", L, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": _()
      }), xe(D, "id", g(a)), xe(D, "x", i().x % g(s)[0]), xe(D, "y", i().y % g(s)[1]), xe(D, "width", g(s)[0]), xe(D, "height", g(s)[1]), xe(D, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), xe($, "fill", `url(#${g(a)})`);
    },
    [
      () => kn(Rt(["svelte-flow__background", C()]))
    ],
    be
  ), I(e, z);
  var O = ge({
    get id() {
      return d();
    },
    set id(V) {
      d(V), p();
    },
    get variant() {
      return f();
    },
    set variant(V) {
      f(V), p();
    },
    get gap() {
      return v();
    },
    set gap(V) {
      v(V), p();
    },
    get size() {
      return w();
    },
    set size(V) {
      w(V), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(V) {
      b(V), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(V) {
      x(V), p();
    },
    get patternColor() {
      return _();
    },
    set patternColor(V) {
      _(V), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(V) {
      h(V), p();
    },
    get class() {
      return C();
    },
    set class(V) {
      C(V), p();
    }
  });
  return r(), O;
}
ue(
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
var Rm = /* @__PURE__ */ ke("<rect></rect>");
function Nd(e, t) {
  ve(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Ye();
  var v = Rm();
  let w;
  return Oe(
    (b, x) => {
      w = Tt(v, 0, b, null, w, x), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", a()), xe(v, "ry", a()), xe(v, "width", o()), xe(v, "height", i()), xt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l());
    },
    [
      () => kn(Rt(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), I(e, v), ge({
    get x() {
      return n();
    },
    set x(b) {
      n(b), p();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), p();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), p();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), p();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), p();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), p();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), p();
    }
  });
}
ue(
  Nd,
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
  const n = C0({
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
var Zm = /* @__PURE__ */ ke("<title> </title>"), Bm = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Dd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(Ze, "$flowId", n), i = () => ne(re, "$viewport", n), a = () => ne(Le, "$containerWidth", n), s = () => ne(He, "$containerHeight", n), l = () => ne(le, "$nodeLookup", n), u = () => ne(Ve, "$nodes", n), c = () => ne(ee, "$panZoom", n), d = () => ne(Ue, "$translateExtent", n), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), _ = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), y = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe();
  let T = m(t, "position", 12, "bottom-right"), z = m(t, "ariaLabel", 12, "Mini map"), L = m(t, "nodeStrokeColor", 12, "transparent"), D = m(t, "nodeColor", 12, void 0), Z = m(t, "nodeClass", 12, ""), P = m(t, "nodeBorderRadius", 12, 5), H = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), O = m(t, "maskColor", 12, void 0), V = m(t, "maskStrokeColor", 12, void 0), A = m(t, "maskStrokeWidth", 12, void 0), Y = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), F = m(t, "pannable", 12, !0), de = m(t, "zoomable", 12, !0), Q = m(t, "inversePan", 12, void 0), j = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), pe = m(t, "class", 12, "");
  const we = 200, ce = 150, {
    nodes: Ve,
    nodeLookup: le,
    viewport: re,
    width: Le,
    height: He,
    flowId: Ze,
    panZoom: ee,
    translateExtent: Ue
  } = rt(), Je = D() === void 0 ? void 0 : La(D()), se = La(L()), fe = La(Z()), Ee = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), qe = `svelte-flow__minimap-desc-${o()}`;
  let Ie = /* @__PURE__ */ oe(g(f));
  const vt = () => g(_);
  me(
    () => (i(), a(), s()),
    () => {
      U(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), me(
    () => (l(), g(f), u()),
    () => {
      U(Ie, l().size > 0 ? Nc(Go(l()), g(f)) : g(f)), u();
    }
  ), me(() => J(Y()), () => {
    U(v, Y() ?? we);
  }), me(() => J(K()), () => {
    U(w, K() ?? ce);
  }), me(
    () => (g(Ie), g(v)),
    () => {
      U(b, g(Ie).width / g(v));
    }
  ), me(
    () => (g(Ie), g(w)),
    () => {
      U(x, g(Ie).height / g(w));
    }
  ), me(
    () => (g(b), g(x)),
    () => {
      U(_, Math.max(g(b), g(x)));
    }
  ), me(() => (g(_), g(v)), () => {
    U(h, g(_) * g(v));
  }), me(
    () => (g(_), g(w)),
    () => {
      U(C, g(_) * g(w));
    }
  ), me(() => g(_), () => {
    U(y, 5 * g(_));
  }), me(
    () => (g(Ie), g(h), g(y)),
    () => {
      U(k, g(Ie).x - (g(h) - g(Ie).width) / 2 - g(y));
    }
  ), me(
    () => (g(Ie), g(C), g(y)),
    () => {
      U(E, g(Ie).y - (g(C) - g(Ie).height) / 2 - g(y));
    }
  ), me(() => (g(h), g(y)), () => {
    U(S, g(h) + g(y) * 2);
  }), me(() => (g(C), g(y)), () => {
    U(M, g(C) + g(y) * 2);
  }), kt(), Ye();
  const lt = /* @__PURE__ */ be(() => ae() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), te = /* @__PURE__ */ be(() => Rt(["svelte-flow__minimap", pe()]));
  ei(e, {
    get position() {
      return T();
    },
    get style() {
      return g(lt);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ye, Zt) => {
      var Bt = dt(), un = _e(Bt);
      {
        var Te = (ut) => {
          var Be = Bm();
          xe(Be, "aria-labelledby", qe);
          let Re;
          var ct = X(Be);
          {
            var Jt = (mt) => {
              var $t = Zm();
              xe($t, "id", qe);
              var Pn = X($t, !0);
              W($t), Oe(() => on(Pn, z())), I(mt, $t);
            };
            Ce(ct, (mt) => {
              z() && mt(Jt);
            });
          }
          var St = B(ct);
          Ft(St, 1, u, (mt) => mt.id, (mt, $t) => {
            var Pn = dt();
            const ot = /* @__PURE__ */ be(() => l().get(g($t).id));
            var vo = _e(Pn);
            {
              var er = (Ht) => {
                const wr = /* @__PURE__ */ be(() => mr(g(ot))), br = /* @__PURE__ */ be(() => Je == null ? void 0 : Je(g(ot))), Dr = /* @__PURE__ */ be(() => se(g(ot))), go = /* @__PURE__ */ be(() => fe(g(ot)));
                Nd(Ht, bt(
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
                      return P();
                    },
                    get strokeColor() {
                      return g(Dr);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: Ee,
                    get class() {
                      return g(go);
                    }
                  }
                ));
              };
              Ce(vo, (Ht) => {
                g(ot) && Lc(g(ot)) && Ht(er);
              });
            }
            I(mt, Pn);
          });
          var Qn = B(St);
          W(Be), Ot(Be, (mt, $t) => ou == null ? void 0 : ou(mt, $t), () => ({
            panZoom: c(),
            viewport: re,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: j(),
            pannable: F(),
            zoomable: de()
          })), Oe(() => {
            xe(Be, "width", g(v)), xe(Be, "height", g(w)), xe(Be, "viewBox", `${g(k) ?? ""} ${g(E) ?? ""} ${g(S) ?? ""} ${g(M) ?? ""}`), Re = xt(Be, "", Re, {
              "--xy-minimap-mask-background-color-props": O(),
              "--xy-minimap-mask-stroke-color-props": V(),
              "--xy-minimap-mask-stroke-width-props": A() ? A() * g(_) : void 0
            }), xe(Qn, "d", `M${g(k) - g(y)},${g(E) - g(y)}h${g(S) + g(y) * 2}v${g(M) + g(y) * 2}h${-g(S) - g(y) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), I(ut, Be);
        };
        Ce(un, (ut) => {
          c() && ut(Te);
        });
      }
      I(ye, Bt);
    },
    $$slots: { default: !0 }
  });
  var Ae = ge({
    get position() {
      return T();
    },
    set position(ye) {
      T(ye), p();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(ye) {
      z(ye), p();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ye) {
      L(ye), p();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(ye) {
      D(ye), p();
    },
    get nodeClass() {
      return Z();
    },
    set nodeClass(ye) {
      Z(ye), p();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(ye) {
      P(ye), p();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(ye) {
      H(ye), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(ye) {
      $(ye), p();
    },
    get maskColor() {
      return O();
    },
    set maskColor(ye) {
      O(ye), p();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(ye) {
      V(ye), p();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(ye) {
      A(ye), p();
    },
    get width() {
      return Y();
    },
    set width(ye) {
      Y(ye), p();
    },
    get height() {
      return K();
    },
    set height(ye) {
      K(ye), p();
    },
    get pannable() {
      return F();
    },
    set pannable(ye) {
      F(ye), p();
    },
    get zoomable() {
      return de();
    },
    set zoomable(ye) {
      de(ye), p();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ye) {
      Q(ye), p();
    },
    get zoomStep() {
      return j();
    },
    set zoomStep(ye) {
      j(ye), p();
    },
    get style() {
      return ae();
    },
    set style(ye) {
      ae(ye), p();
    },
    get class() {
      return pe();
    },
    set class(ye) {
      pe(ye), p();
    }
  });
  return r(), Ae;
}
ue(
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
const iu = (e) => Bp(e);
function Gt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = rt(), h = (k) => {
    var E, S;
    const M = q(w), T = iu(k) ? k : M.get(k.id), z = T.parentId ? jp(T.position, T.measured, T.parentId, M, q(b)) : T.position, L = {
      ...T,
      position: z,
      width: ((E = T.measured) == null ? void 0 : E.width) ?? T.width,
      height: ((S = T.measured) == null ? void 0 : S.height) ?? T.height
    };
    return no(L);
  }, C = (k, E, S = { replace: !1 }) => {
    var M;
    const T = (M = q(w).get(k)) == null ? void 0 : M.internals.userNode;
    if (!T)
      return;
    const z = typeof E == "function" ? E(T) : E;
    S.replace ? d.update((L) => L.map((D) => D.id === k ? iu(z) ? z : { ...D, ...z } : D)) : (Object.assign(T, z), d.update((L) => L));
  }, y = (k) => q(w).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (k) => {
      var E;
      return (E = y(k)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : au(q(w), k),
    getEdge: (k) => q(x).get(k),
    getEdges: (k) => k === void 0 ? q(f) : au(q(x), k),
    setZoom: (k, E) => {
      const S = q(c);
      return S ? S.scaleTo(k, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, E) => {
      const S = q(i), M = q(c);
      return M ? (await M.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, E, S) => {
      const M = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : q(u), T = q(c);
      return T ? (await T.setViewport({
        x: q(a) / 2 - k * M,
        y: q(s) / 2 - E * M,
        zoom: M
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, E) => {
      const S = q(c);
      if (!S)
        return Promise.resolve(!1);
      const M = Rs(k, q(a), q(s), q(l), q(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await S.setViewport(M, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, E = !0, S) => {
      const M = Zl(k), T = M ? k : h(k);
      return T ? (S || q(d)).filter((z) => {
        const L = q(w).get(z.id);
        if (!L || !M && z.id === k.id)
          return !1;
        const D = no(L), Z = Zo(D, T);
        return E && Z > 0 || Z >= T.width * T.height;
      }) : [];
    },
    isNodeIntersecting: (k, E, S = !0) => {
      const M = Zl(k) ? k : h(k);
      if (!M)
        return !1;
      const T = Zo(M, E);
      return S && T > 0 || T >= M.width * M.height;
    },
    deleteElements: async ({ nodes: k = [], edges: E = [] }) => {
      const { nodes: S, edges: M } = await Vc({
        nodesToRemove: k,
        edgesToRemove: E,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return S && d.update((T) => T.filter((z) => !S.some(({ id: L }) => L === z.id))), M && f.update((T) => T.filter((z) => !M.some(({ id: L }) => L === z.id))), {
        deletedNodes: S,
        deletedEdges: M
      };
    },
    screenToFlowPosition: (k, E = { snapToGrid: !0 }) => {
      const S = q(v);
      if (!S)
        return k;
      const M = E.snapToGrid ? q(o) : !1, { x: T, y: z, zoom: L } = q(i), { x: D, y: Z } = S.getBoundingClientRect(), P = {
        x: k.x - D,
        y: k.y - Z
      };
      return Jo(P, [T, z, L], M !== null, M || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const E = q(v);
      if (!E)
        return k;
      const { x: S, y: M, zoom: T } = q(i), { x: z, y: L } = E.getBoundingClientRect(), D = Dc(k, [S, M, T]);
      return {
        x: D.x + z,
        y: D.y + L
      };
    },
    toObject: () => ({
      nodes: q(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: q(f).map((k) => ({ ...k })),
      viewport: { ...q(i) }
    }),
    updateNode: C,
    updateNodeData: (k, E, S) => {
      var M;
      const T = (M = q(w).get(k)) == null ? void 0 : M.internals.userNode;
      if (!T)
        return;
      const z = typeof E == "function" ? E(T) : E;
      T.data = S != null && S.replace ? z : { ...T.data, ...z }, d.update((L) => L);
    },
    getNodesBounds: (k) => {
      const E = q(w), S = q(b);
      return Yp(k, { nodeLookup: E, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: E, nodeId: S }) => {
      var M;
      return Array.from(((M = q(_).get(`${S}-${k}-${E ?? null}`)) == null ? void 0 : M.values()) ?? []);
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
var Ym = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Ld(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(C, "$nodes", n), i = () => ne(h, "$nodeLookup", n), a = () => ne(_, "$viewport", n), s = () => ne(x, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: h, nodes: C } = rt(), { getNodesBounds: y } = Gt(), k = Er("svelteflow__node_id");
  let E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe([]), M = w() !== void 0 ? w() : 10, T = f() !== void 0 ? f() : Pe.Top, z = v() !== void 0 ? v() : "center";
  me(
    () => (o(), J(d()), i()),
    () => {
      o();
      const H = Array.isArray(d()) ? d() : [d() || k];
      U(S, H.reduce(
        ($, O) => {
          const V = i().get(O);
          return V && $.push(V), $;
        },
        []
      ));
    }
  ), me(
    () => (g(S), a()),
    () => {
      const H = y(g(S));
      H && U(E, s0(H, a(), T, M, z));
    }
  ), me(() => g(S), () => {
    U(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((H) => (H.internals.z || 5) + 1)));
  }), me(() => o(), () => {
    U(u, o().filter((H) => H.selected).length);
  }), me(
    () => (J(b()), g(S), g(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), kt(), Ye();
  var L = dt(), D = _e(L);
  {
    var Z = (H) => {
      var $ = Ym();
      let O;
      var V = X($);
      Mt(V, t, "default", {}), W($), Ot($, (A, Y) => ji == null ? void 0 : ji(A, Y), () => ({ domNode: s() })), Oe(
        (A) => {
          xe($, "data-id", A), O = xt($, "", O, {
            position: "absolute",
            transform: g(E),
            "z-index": g(l)
          });
        },
        [
          () => g(S).reduce((A, Y) => `${A}${Y.id} `, "").trim()
        ],
        be
      ), I(H, $);
    };
    Ce(D, (H) => {
      s() && g(c) && g(S) && H(Z);
    });
  }
  I(e, L);
  var P = ge({
    get nodeId() {
      return d();
    },
    set nodeId(H) {
      d(H), p();
    },
    get position() {
      return f();
    },
    set position(H) {
      f(H), p();
    },
    get align() {
      return v();
    },
    set align(H) {
      v(H), p();
    },
    get offset() {
      return w();
    },
    set offset(H) {
      w(H), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(H) {
      b(H), p();
    }
  });
  return r(), P;
}
ue(
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
function Nr(e) {
  const { nodes: t, nodeLookup: n } = rt();
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
const Xm = () => {
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
}, Ci = Xm();
var jm = /* @__PURE__ */ ie("<button><!></button>");
function nt(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = jm();
  let i;
  var a = X(o);
  return Sr(a, () => n() ?? _t), W(o), Oe(() => i = xn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), I(e, o), ge({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ue(nt, { children: {} }, [], [], !0);
var Km = /* @__PURE__ */ ie("<input>");
function Id(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
  Eo(r);
  let o;
  Oe(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), I(e, r), ge();
}
ue(Id, {}, [], [], !0);
var qm = /* @__PURE__ */ ie("<input>");
function Dt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = qm();
  Eo(r);
  let o;
  Oe(() => o = xn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), I(e, r), ge();
}
ue(Dt, {}, [], [], !0);
var Fm = /* @__PURE__ */ ie("<textarea></textarea>");
function Ut(e, t) {
  ve(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Fm();
  Dv(o);
  let i;
  return Oe(() => i = xn(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), I(e, o), ge({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
ue(Ut, { value: {} }, [], [], !0);
var Um = /* @__PURE__ */ ie('<div role="button"><!></div>'), Gm = /* @__PURE__ */ ie("<div></div>");
function Ad(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  ve(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Ye();
  var l = Gm();
  let u;
  return Ft(l, 5, o, zo, (c, d, f) => {
    var v = Um();
    xe(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var w = X(v);
    {
      var b = (_) => {
        var h = Fe();
        Oe(() => on(h, g(d).label)), I(_, h);
      }, x = (_) => {
        var h = dt(), C = _e(h);
        Sr(C, () => g(d).label ?? _t), I(_, h);
      };
      Ce(w, (_) => {
        typeof g(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    W(v), Oe(() => Tt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), I(c, v);
  }), W(l), Oe(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), I(e, l), ge({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), p();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), p();
    }
  });
}
aa(["click", "keydown"]);
ue(Ad, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Jm = (e, t, n) => t(g(n)), Qm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, e2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), t2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), n2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), r2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o2 = /* @__PURE__ */ ie("<div></div>");
const i2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Rd(e, t) {
  ve(t, !0), st(e, i2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => fn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = o2();
  return Ft(a, 21, n, zo, (s, l, u) => {
    var c = r2(), d = X(c);
    xe(d, "tabindex", u), d.__click = [Jm, i, l], d.__keydown = [Qm, i, l];
    var f = X(d);
    {
      var v = (y) => {
        var k = e2(), E = X(k);
        sr(E, {
          get target() {
            return g(l).icon;
          }
        }), W(k), I(y, k);
      };
      Ce(f, (y) => {
        g(l).icon && y(v);
      });
    }
    var w = B(f, 2);
    sr(w, {
      get target() {
        return g(l).title;
      }
    });
    var b = B(w, 2);
    W(d);
    var x = B(d, 2);
    {
      var _ = (y) => {
        var k = t2(), E = X(k);
        sr(E, {
          get target() {
            return g(l).description;
          }
        }), W(k), I(y, k);
      };
      Ce(x, (y) => {
        g(l).description && y(_);
      });
    }
    var h = B(x, 2);
    {
      var C = (y) => {
        var k = n2(), E = X(k);
        sr(E, {
          get target() {
            return g(l).content;
          }
        }), W(k), I(y, k);
      };
      Ce(h, (y) => {
        o().includes(g(l).key) && y(C);
      });
    }
    W(c), Oe((y) => Tt(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), I(s, c);
  }), W(a), Oe(() => {
    xt(a, t.style), Tt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), I(e, a), ge({
    get items() {
      return n();
    },
    set items(s) {
      n(s), p();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), p();
    }
  });
}
aa(["click", "keydown"]);
ue(Rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  ve(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = _e(r);
  {
    var i = (s) => {
      var l = dt(), u = _e(l);
      Sr(u, () => n() ?? _t), I(s, l);
    }, a = (s) => {
      var l = dt(), u = _e(l);
      Ps(u, n), I(s, l);
    };
    Ce(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return I(e, r), ge({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ue(sr, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(g(n)), s2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), l2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), u2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), d2 = /* @__PURE__ */ ie("<!> <!>", 1), f2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), v2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), g2 = /* @__PURE__ */ ie("<div><!></div>");
function $n(e, t) {
  ve(t, !0);
  const n = (C, y = _t) => {
    var k = dt(), E = _e(k);
    Ft(E, 19, y, (S, M) => `${M}_${S.value}`, (S, M) => {
      var T = u2(), z = _e(T);
      z.__click = [a2, b, M];
      var L = X(z), D = X(L);
      {
        var Z = (O) => {
          var V = s2();
          I(O, V);
        };
        Ce(D, (O) => {
          g(M).children && g(M).children.length > 0 && O(Z);
        });
      }
      W(L);
      var P = B(L, 2);
      sr(P, {
        get target() {
          return g(M).label;
        }
      }), W(z);
      var H = B(z, 2);
      {
        var $ = (O) => {
          var V = l2(), A = X(V);
          n(A, () => g(M).children), W(V), I(O, V);
        };
        Ce(H, (O) => {
          g(M).children && g(M).children.length > 0 && (l() || c().includes(g(M).value)) && O($);
        });
      }
      I(S, T);
    }), I(C, k);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ Vt(t, [
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
    const C = [], y = (k) => {
      for (let E of k)
        a().length > 0 ? a().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && y(E.children);
    };
    return y(r()), C;
  }), w;
  function b(C) {
    var y, k;
    if (C.children && C.children.length > 0) {
      (y = o()) == null || y(C);
      return;
    } else
      w == null || w.hide(), (k = i()) == null || k(C);
  }
  var x = g2();
  let _;
  var h = X(x);
  return Dn(
    oi(h, {
      floating: (C) => {
        var y = c2(), k = X(y);
        n(k, r), W(y), I(C, y);
      },
      children: (C, y) => {
        var k = v2();
        let E;
        var S = X(k);
        Ft(
          S,
          23,
          () => g(v),
          (M, T) => `${T}_${M.value}`,
          (M, T, z) => {
            var L = dt(), D = _e(L);
            {
              var Z = (H) => {
                var $ = dt(), O = _e($);
                {
                  var V = (A) => {
                    sr(A, {
                      get target() {
                        return g(T).label;
                      }
                    });
                  };
                  Ce(O, (A) => {
                    g(z) === 0 && A(V);
                  });
                }
                I(H, $);
              }, P = (H) => {
                var $ = d2(), O = _e($);
                sr(O, {
                  get target() {
                    return g(T).label;
                  }
                });
                var V = B(O, 2);
                {
                  var A = (Y) => {
                    var K = Fe(",");
                    I(Y, K);
                  };
                  Ce(V, (Y) => {
                    g(z) < g(v).length - 1 && Y(A);
                  });
                }
                I(H, $);
              };
              Ce(D, (H) => {
                u() ? H(P, !1) : H(Z);
              });
            }
            I(M, L);
          },
          (M) => {
            var T = f2(), z = X(T, !0);
            W(T), Oe(() => on(z, d())), I(M, T);
          }
        ), W(S), Ne(2), W(k), Oe(() => E = xn(k, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), I(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), W(x), Oe(() => _ = xn(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), I(e, x), ge({
    get items() {
      return r();
    },
    set items(C) {
      r(C), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), p();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), p();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), p();
    }
  });
}
aa(["click"]);
ue(
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
const Yo = Math.min, jr = Math.max, Fi = Math.round, Tn = (e) => ({
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
  return jr(e, Yo(t, n));
}
function ti(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(e) {
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
  return ["top", "bottom"].includes(Tr(e)) ? "y" : "x";
}
function Ks(e) {
  return Zd(oo(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ni(e), o = Ks(e), i = js(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ui(a)), [a, Ui(a)];
}
function y2(e) {
  const t = Ui(e);
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
  let i = w2(Tr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(ls)))), i;
}
function Ui(e) {
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
function Bd(e) {
  return typeof e != "number" ? x2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Gi(e) {
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
  const i = oo(t), a = Ks(t), s = js(a), l = Tr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
      name: x,
      fn: _
    } = s[b], {
      x: h,
      y: C,
      data: y,
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
        ...y
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
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
  } = ti(t, e), w = Bd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Gi(await i.getClippingRect({
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
  }, y = Gi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: h,
    strategy: l
  }) : _);
  return {
    top: (x.top - y.top + w.top) / C.y,
    bottom: (y.bottom - x.bottom + w.bottom) / C.y,
    left: (x.left - y.left + w.left) / C.x,
    right: (y.right - x.right + w.right) / C.x
  };
}
const _2 = (e) => ({
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
    const d = Bd(c), f = {
      x: n,
      y: r
    }, v = Ks(o), w = js(v), b = await a.getDimensions(u), x = v === "y", _ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], k = f[v] - i.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = E ? E[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(E))) && (S = s.floating[C] || i.floating[w]);
    const M = y / 2 - k / 2, T = S / 2 - b[w] / 2 - 1, z = Yo(d[_], T), L = Yo(d[h], T), D = z, Z = S - b[w] - L, P = S / 2 - b[w] / 2 + M, H = ss(D, P, Z), $ = !l.arrow && ni(o) != null && P !== H && i.reference[w] / 2 - (P < D ? z : L) - b[w] / 2 < 0, O = $ ? P < D ? P - D : P - Z : 0;
    return {
      [v]: f[v] + O,
      data: {
        [v]: H,
        centerOffset: P - H - O,
        ...$ && {
          alignmentOffset: O
        }
      },
      reset: $
    };
  }
}), C2 = function(e) {
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
        ...x
      } = ti(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Tr(o), h = oo(s), C = Tr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (C || !b ? [Ui(s)] : y2(s)), E = w !== "none";
      !f && E && k.push(...b2(s, b, w, y));
      const S = [s, ...k], M = await Yd(t, x), T = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && T.push(M[_]), d) {
        const P = m2(o, a, y);
        T.push(M[P[0]], M[P[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: T
      }], !T.every((P) => P <= 0)) {
        var L, D;
        const P = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, H = S[P];
        if (H)
          return {
            data: {
              index: P,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let $ = (D = z.filter((O) => O.overflows[0] <= 0).sort((O, V) => O.overflows[1] - V.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var Z;
              const O = (Z = z.filter((V) => {
                if (E) {
                  const A = oo(V.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((V, A) => V[1] - A[1])[0]) == null ? void 0 : Z[0];
              O && ($ = O);
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
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Tr(n), s = ni(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ti(t, e);
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
const E2 = function(e) {
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
      } = ti(e, t), u = {
        x: n,
        y: r
      }, c = await Yd(t, l), d = oo(Tr(o)), f = Zd(d);
      let v = u[f], w = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[x], C = v - c[_];
        v = ss(h, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = w + c[x], C = w - c[_];
        w = ss(h, w, C);
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
function Gn(e) {
  var t;
  return (t = (Wd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wd(e) {
  return ma() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function _n(e) {
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
  } = Cn(e);
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
function qs(e) {
  const t = Fs(), n = _n(e) ? Cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function O2(e) {
  let t = hr(e);
  for (; Ln(t) && !io(t); ) {
    if (qs(t))
      return t;
    if (ya(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Fs() {
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
    uu(e) && e.host || // Fallback.
    Gn(e)
  );
  return uu(t) ? t.host : t;
}
function Xd(e) {
  const t = hr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && ri(t) ? t : Xd(t);
}
function jd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Xd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (us(a), t.concat(a, a.visualViewport || [], ri(o) ? o : [], [])) : t.concat(o, jd(o, []));
}
function us(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kd(e) {
  const t = Cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ln(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Fi(n) !== i || Fi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function qd(e) {
  return _n(e) ? e : e.contextElement;
}
function Kr(e) {
  const t = qd(e);
  if (!Ln(t))
    return Tn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Kd(t);
  let a = (i ? Fi(n.width) : n.width) / r, s = (i ? Fi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const M2 = /* @__PURE__ */ Tn(0);
function Fd(e) {
  const t = an(e);
  return !Fs() || !t.visualViewport ? M2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function T2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = qd(e);
  let a = Tn(1);
  t && (r ? _n(r) && (a = Kr(r)) : a = Kr(e));
  const s = T2(i, n, r) ? Fd(i) : Tn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = an(i), v = r && _n(r) ? an(r) : r;
    let w = f, b = us(w);
    for (; b && r && v !== w; ) {
      const x = Kr(b), _ = b.getBoundingClientRect(), h = Cn(b), C = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, y = _.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = an(b), b = us(w);
    }
  }
  return Gi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Us(e, t) {
  const n = wa(e).scrollLeft;
  return t ? t.left + n : Wo(Gn(e)).left + n;
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
function V2(e) {
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
  const c = Tn(0), d = Ln(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || ri(a)) && (l = wa(r)), Ln(r))) {
    const v = Wo(r);
    u = Kr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Ud(a, l, !0) : Tn(0);
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
  const t = Gn(e), n = wa(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Us(e);
  const s = -n.scrollTop;
  return Cn(r).direction === "rtl" && (a += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function N2(e, t) {
  const n = an(e), r = Gn(e), o = n.visualViewport;
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
function D2(e, t) {
  const n = Wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ln(e) ? Kr(e) : Tn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = N2(e, n);
  else if (t === "document")
    r = z2(Gn(e));
  else if (_n(t))
    r = D2(t, n);
  else {
    const o = Fd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Gi(r);
}
function Gd(e, t) {
  const n = hr(e);
  return n === t || !_n(n) || io(n) ? !1 : Cn(n).position === "fixed" || Gd(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jd(e, []).filter((s) => _n(s) && fo(s) !== "body"), o = null;
  const i = Cn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; _n(a) && !io(a); ) {
    const s = Cn(a), l = qs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ri(a) && !l && Gd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = hr(a);
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
  const i = [...n === "clippingAncestors" ? ya(t) ? [] : L2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = cu(t, u, o);
    return l.top = jr(c.top, l.top), l.right = Yo(c.right, l.right), l.bottom = Yo(c.bottom, l.bottom), l.left = jr(c.left, l.left), l;
  }, cu(t, a, o));
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
  } = Kd(e);
  return {
    width: t,
    height: n
  };
}
function R2(e, t, n) {
  const r = Ln(t), o = Gn(t), i = n === "fixed", a = Wo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Tn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || ri(o)) && (s = wa(t)), r) {
      const f = Wo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Us(o));
  const u = o && !r && !i ? Ud(o, s) : Tn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Ia(e) {
  return Cn(e).position === "static";
}
function du(e, t) {
  if (!Ln(e) || Cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Gn(e) === n && (n = n.ownerDocument.body), n;
}
function Jd(e, t) {
  const n = an(e);
  if (ya(e))
    return n;
  if (!Ln(e)) {
    let o = hr(e);
    for (; o && !io(o); ) {
      if (_n(o) && !Ia(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = du(e, t);
  for (; r && P2(r) && Ia(r); )
    r = du(r, t);
  return r && io(r) && Ia(r) && !qs(r) ? n : r || O2(e) || n;
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
function B2(e) {
  return Cn(e).direction === "rtl";
}
const Y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: V2,
  getDocumentElement: Gn,
  getClippingRect: I2,
  getOffsetParent: Jd,
  getElementRects: Z2,
  getClientRects: H2,
  getDimensions: A2,
  getScale: Kr,
  isElement: _n,
  isRTL: B2
}, W2 = E2, X2 = S2, j2 = C2, K2 = _2, q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Y2,
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
    q2(e, u, {
      placement: r,
      middleware: [
        W2(o),
        // 手动偏移配置
        j2(i),
        //自动翻转
        X2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [K2({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: E } = y.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
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
  function b(_) {
    _.stopPropagation(), f ? w() : v();
  }
  function x(_) {
    u.contains(_.target) || w();
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
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var U2 = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function oi(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  ln(() => (s = F2({
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
  var u = U2(), c = X(u), d = X(c);
  Sr(d, n), W(c), Dn(c, (w) => i = w, () => i);
  var f = B(c, 2), v = X(f);
  return Sr(v, r), W(f), Dn(f, (w) => a = w, () => a), W(u), I(e, u), ge({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), p();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), p();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), p();
    }
  });
}
ue(oi, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function at(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = dt(), s = _e(a);
  return Xv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Oe(() => c = xn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = dt(), f = _e(d);
    Sr(f, () => n() ?? _t), I(u, d);
  }), I(e, a), ge({
    get children() {
      return n();
    },
    set children(l) {
      n(l), p();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), p();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), p();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), p();
    }
  });
}
ue(at, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var G2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const J2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ba(e, t) {
  ve(t, !0), st(e, J2);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  nt(e, bt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = G2();
      I(r, i);
    },
    $$slots: { default: !0 }
  })), ge();
}
ue(ba, {}, [], [], !0);
const Q2 = () => {
  const e = rt();
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
  const { nodes: e, nodeLookup: t } = rt();
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
}, yr = () => Er("tinyflow_options");
var ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ry = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), oy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), iy = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ay = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Sn(e, t) {
  ve(t, !0), st(e, ay);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Gt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: _ } = Q2(), { copyNode: h } = ey(), C = yr(), y = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var k = iy(), E = _e(k);
  {
    var S = ($) => {
      Ld($, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (O, V) => {
          var A = oy(), Y = X(A);
          {
            var K = (ae) => {
              nt(ae, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (pe, we) => {
                  var ce = ty();
                  I(pe, ce);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(Y, (ae) => {
              s() && ae(K);
            });
          }
          var F = B(Y, 2);
          {
            var de = (ae) => {
              nt(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (pe, we) => {
                  var ce = ny();
                  I(pe, ce);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(F, (ae) => {
              l() && ae(de);
            });
          }
          var Q = B(F, 2);
          {
            var j = (ae) => {
              nt(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (pe, we) => {
                  var ce = ry();
                  I(pe, ce);
                },
                $$slots: { default: !0 }
              });
            };
            Ce(Q, (ae) => {
              u() && ae(j);
            });
          }
          W(A), I(O, A);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(E, ($) => {
      (s() || l() || u()) && $(S);
    });
  }
  var M = B(E, 2), T = B(X(M), 2), z = X(T);
  Rd(z, {
    items: x,
    activeKeys: v,
    onChange: ($, O) => {
      var V;
      w(r(), { expand: O == null ? void 0 : O.includes("key") }), (V = f()) == null || V(O != null && O.includes("key") ? "key" : "");
    }
  }), W(T), W(M);
  var L = B(M, 2);
  {
    var D = ($) => {
      gr($, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ce(L, ($) => {
      d() && $(D);
    });
  }
  var Z = B(L, 2);
  {
    var P = ($) => {
      gr($, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ce(Z, ($) => {
      c() && $(P);
    });
  }
  var H = B(Z, 2);
  return Sr(H, () => i() ?? _t), I(e, k), ge({
    get data() {
      return n();
    },
    set data($) {
      n($), p();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), p();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), p();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), p();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute($ = !0) {
      s($), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete($ = !0) {
      u($), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle($ = !0) {
      c($), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle($ = !0) {
      d($), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse($) {
      f($), p();
    }
  });
}
ue(
  Sn,
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
function Et() {
  return Er("svelteflow__node_id");
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
var ly = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), uy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), cy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ef(e, t) {
  ve(t, !0), st(e, dy);
  const [n, r] = ft(), o = () => ne(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = Et(), l = /* @__PURE__ */ ze(() => Nr(s)), u = /* @__PURE__ */ ze(() => {
    var T, z;
    return {
      ...i(),
      ...(z = (T = o()) == null ? void 0 : T.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Gt(), d = (T, z) => {
    c(s, (L) => {
      let D = L.data.parameters;
      return D[a()][T] = z, { parameters: D };
    });
  }, f = (T) => {
    const z = T.target.value;
    d("name", z);
  }, v = (T) => {
    const z = T.target.checked;
    d("required", z);
  }, w = (T) => {
    const z = T.value;
    z && d("dataType", z);
  };
  let b;
  const x = () => {
    c(s, (T) => {
      let z = T.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), b == null || b.hide();
  };
  var _ = cy(), h = _e(_), C = X(h);
  Dt(C, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), W(h);
  var y = B(h, 2), k = X(y);
  Id(k, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), W(y);
  var E = B(y, 2), S = X(E);
  Dn(
    oi(S, {
      placement: "bottom",
      floating: (T) => {
        var z = ly(), L = X(z), D = B(X(L));
        const Z = /* @__PURE__ */ ze(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        $n(D, {
          items: Qd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return g(Z);
          }
        }), W(L);
        var P = B(L, 2), H = B(X(P));
        Ut(H, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Y) => {
            const K = Y.target.value;
            d("defaultValue", K);
          }
        }), W(P);
        var $ = B(P, 2), O = B(X($));
        Ut(O, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Y) => {
            const K = Y.target.value;
            d("description", K);
          }
        }), W($);
        var V = B($, 2), A = X(V);
        nt(A, {
          onclick: x,
          children: (Y, K) => {
            Ne();
            var F = Fe("删除");
            I(Y, F);
          },
          $$slots: { default: !0 }
        }), W(V), W(z), I(T, z);
      },
      children: (T, z) => {
        nt(T, {
          class: "input-btn-more",
          children: (L, D) => {
            var Z = uy();
            I(L, Z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), W(E), I(e, _);
  var M = ge({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), p();
    },
    get index() {
      return a();
    },
    set index(T) {
      a(T), p();
    }
  });
  return r(), M;
}
ue(ef, { parameter: {}, index: {} }, [], [], !0);
var fy = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), vy = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), gy = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const hy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function tf(e, t) {
  ve(t, !0), st(e, hy);
  const [n, r] = ft(), o = () => ne(g(a), "$node", n);
  let i = Et(), a = /* @__PURE__ */ ze(() => Nr(i)), s = /* @__PURE__ */ ze(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = gy(), u = X(l);
  {
    var c = (f) => {
      var v = fy();
      Ne(4), I(f, v);
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
      I(f, v);
    }
  ), W(l), I(e, l), ge(), r();
}
ue(tf, {}, [], [], !0);
const nf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ao()), nf(t.children);
  });
}, Rn = () => {
  const { updateNodeData: e } = Gt();
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
var py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), my = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function rf(e, t) {
  ve(t, !0), st(e, wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn();
  return Sn(e, bt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = py();
      I(a, s);
    },
    children: (a, s) => {
      var l = yy(), u = _e(l), c = X(u);
      at(c, {
        level: 3,
        children: (v, w) => {
          Ne();
          var b = Fe("输入参数");
          I(v, b);
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
        children: (v, w) => {
          var b = my();
          I(v, b);
        },
        $$slots: { default: !0 }
      }), W(u);
      var f = B(u, 2);
      tf(f, {}), I(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ue(rf, { data: {} }, [], [], !0);
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
  const t = Et(), n = Nr(t), { nodes: r, edges: o } = rt();
  return ur([n, r, o], ([i, a, s]) => {
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
const _y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  ve(t, !0), st(e, _y);
  const [n, r] = ft(), o = () => ne(g(c), "$node", n), i = () => ne(y, "$selectItems", n);
  ln(() => {
    g(d).refType || _({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = Et(), c = /* @__PURE__ */ ze(() => Nr(u)), d = /* @__PURE__ */ ze(() => {
    var H;
    return {
      ...a(),
      ...(H = o()) == null ? void 0 : H.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Gt(), v = (H, $) => {
    f(u, (O) => {
      let V = O.data[l()];
      return V[s()] = { ...V[s()], [H]: $ }, { [l()]: V };
    });
  }, w = (H) => {
    const $ = H.target.value;
    v("name", $);
  }, b = (H) => {
    const $ = H.target.value;
    v("value", $);
  }, x = (H) => {
    const $ = H.value;
    v("ref", $);
  }, _ = (H) => {
    const $ = H.value;
    v("refType", $);
  };
  let h;
  const C = () => {
    f(u, (H) => {
      let $ = H.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), h == null || h.hide();
  }, y = by();
  var k = $y(), E = _e(k), S = X(E);
  Dt(S, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), W(E);
  var M = B(E, 2), T = X(M);
  {
    var z = (H) => {
      Dt(H, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, L = (H, $) => {
      {
        var O = (V) => {
          const A = /* @__PURE__ */ ze(() => [g(d).ref]);
          $n(V, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(A);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        Ce(
          H,
          (V) => {
            g(d).refType !== "input" && V(O);
          },
          $
        );
      }
    };
    Ce(T, (H) => {
      g(d).refType === "fixed" ? H(z) : H(L, !1);
    });
  }
  W(M);
  var D = B(M, 2), Z = X(D);
  Dn(
    oi(Z, {
      placement: "bottom",
      floating: (H) => {
        var $ = xy(), O = X($), V = B(X(O));
        const A = /* @__PURE__ */ ze(() => g(d).refType ? [g(d).refType] : []);
        $n(V, {
          items: sy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(A);
          },
          onSelect: _
        }), W(O);
        var Y = B(O, 2), K = B(X(Y));
        Ut(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const pe = ae.target.value;
            v("defaultValue", pe);
          }
        }), W(Y);
        var F = B(Y, 2), de = B(X(F));
        Ut(de, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const pe = ae.target.value;
            v("description", pe);
          }
        }), W(F);
        var Q = B(F, 2), j = X(Q);
        nt(j, {
          onclick: C,
          children: (ae, pe) => {
            Ne();
            var we = Fe("删除");
            I(ae, we);
          },
          $$slots: { default: !0 }
        }), W(Q), W($), I(H, $);
      },
      children: (H, $) => {
        ba(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => h = H,
    () => h
  ), W(D), I(e, k);
  var P = ge({
    get parameter() {
      return a();
    },
    set parameter(H) {
      a(H), p();
    },
    get index() {
      return s();
    },
    set index(H) {
      s(H), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(H) {
      l(H), p();
    }
  });
  return r(), P;
}
ue(af, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ey = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  ve(t, !0), st(e, Sy);
  const [n, r] = ft(), o = () => ne(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = Et(), l = /* @__PURE__ */ ze(() => Nr(s)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Ey(), d = X(c);
  {
    var f = (b) => {
      var x = Cy();
      Ne(4), I(b, x);
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
      af(b, {
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
      var x = ky(), _ = X(x, !0);
      W(x), Oe(() => on(_, i())), I(b, x);
    }
  ), W(c), I(e, c);
  var w = ge({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), p();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), p();
    }
  });
  return r(), w;
}
ue(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Oy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function sf(e, t) {
  ve(t, !0), st(e, Ty);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn();
  return Sn(e, bt(
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
        I(a, s);
      },
      children: (a, s) => {
        var l = My(), u = _e(l), c = X(u);
        at(c, {
          level: 3,
          children: (v, w) => {
            Ne();
            var b = Fe("输出参数");
            I(v, b);
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
          children: (v, w) => {
            var b = Oy();
            I(v, b);
          },
          $$slots: { default: !0 }
        }), W(u);
        var f = B(u, 2);
        nn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), I(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ue(sf, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), zy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ny = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Dy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function lf(e, t) {
  ve(t, !0), st(e, Dy);
  const [n, r] = ft(), o = () => ne(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = Et(), u = /* @__PURE__ */ ze(() => Nr(l)), c = /* @__PURE__ */ ze(() => {
    var O;
    let V = (O = o()) == null ? void 0 : O.data[s()], A;
    if (V && a().length > 0) {
      let Y = V;
      for (let K = 0; K < a().length; K++) {
        const F = a()[K];
        K == a().length - 1 ? A = Y[F] : Y = Y[F].children;
      }
    }
    return { ...i(), ...A };
  });
  const { updateNodeData: d } = Gt(), f = (O, V) => {
    d(l, (A) => {
      const Y = A.data[s()];
      if (Y && a().length > 0) {
        let K = Y;
        for (let F = 0; F < a().length; F++) {
          const de = a()[F];
          F == a().length - 1 ? K[de] = { ...K[de], [O]: V } : K = Y[de].children;
        }
      }
      return { [s()]: Y };
    });
  }, v = (O) => {
    const V = O.target.value;
    f("name", V);
  }, w = (O) => {
    const V = O.value;
    f("dataType", V);
  };
  let b;
  const x = () => {
    d(l, (O) => {
      let V = O.data[s()];
      if (V && a().length > 0) {
        let A = V;
        for (let Y = 0; Y < a().length; Y++) {
          const K = a()[Y];
          Y == a().length - 1 ? A.splice(K, 1) : A = A[K].children;
        }
      }
      return { [s()]: [...V] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (O) => {
      let V = O.data[s()];
      if (V && a().length > 0) {
        let A = V;
        for (let Y = 0; Y < a().length; Y++) {
          const K = a()[Y];
          Y == a().length - 1 ? A[K].children ? A[K].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : A[K].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[K].children;
        }
      }
      return { [s()]: [...V] };
    });
  };
  var h = Ny(), C = _e(h), y = X(C);
  {
    var k = (O) => {
      var V = dt(), A = _e(V);
      Ft(A, 17, a, zo, (Y, K) => {
        Ne();
        var F = Fe(" ");
        I(Y, F);
      }), I(O, V);
    };
    Ce(y, (O) => {
      a().length > 1 && O(k);
    });
  }
  var E = B(y, 2);
  const S = /* @__PURE__ */ ze(() => g(c).nameDisabled === !0);
  Dt(E, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(S);
    }
  }), W(C);
  var M = B(C, 2), T = X(M);
  const z = /* @__PURE__ */ ze(() => g(c).dataType ? [g(c).dataType] : []), L = /* @__PURE__ */ ze(() => g(c).dataTypeDisabled === !0);
  $n(T, {
    items: Qd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(z);
    },
    get disabled() {
      return g(L);
    },
    onSelect: w
  });
  var D = B(T, 2);
  {
    var Z = (O) => {
      nt(O, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (V, A) => {
          var Y = Vy();
          I(V, Y);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(D, (O) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && O(Z);
    });
  }
  W(M);
  var P = B(M, 2), H = X(P);
  Dn(
    oi(H, {
      placement: "bottom",
      floating: (O) => {
        var V = zy(), A = X(V), Y = B(X(A));
        const K = /* @__PURE__ */ ze(() => g(c).defaultValue || "");
        Ut(Y, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(K);
          },
          onchange: (pe) => {
            const we = pe.target.value;
            f("defaultValue", we);
          }
        }), W(A);
        var F = B(A, 2), de = B(X(F));
        const Q = /* @__PURE__ */ ze(() => g(c).description || "");
        Ut(de, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(Q);
          },
          onchange: (pe) => {
            const we = pe.target.value;
            f("description", we);
          }
        }), W(F);
        var j = B(F, 2);
        {
          var ae = (pe) => {
            var we = Hy(), ce = X(we);
            nt(ce, {
              onclick: x,
              children: (Ve, le) => {
                Ne();
                var re = Fe("删除");
                I(Ve, re);
              },
              $$slots: { default: !0 }
            }), W(we), I(pe, we);
          };
          Ce(j, (pe) => {
            g(c).deleteDisabled !== !0 && pe(ae);
          });
        }
        W(V), I(O, V);
      },
      children: (O, V) => {
        ba(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => b = O,
    () => b
  ), W(P), I(e, h);
  var $ = ge({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), p();
    },
    get position() {
      return a();
    },
    set position(O) {
      a(O), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(O) {
      s(O), p();
    }
  });
  return r(), $;
}
ue(lf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ ie("<!> <!>", 1), Iy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Zy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  ve(t, !0), st(e, Zy);
  const [n, r] = ft(), o = () => ne(g(u), "$node", n), i = (x, _ = _t, h = _t) => {
    var C = dt(), y = _e(C);
    Ft(
      y,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, E, S) => {
        var M = Ly(), T = _e(M);
        const z = /* @__PURE__ */ ze(() => [...h(), g(S)]);
        lf(T, {
          get parameter() {
            return g(E);
          },
          get position() {
            return g(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var L = B(T, 2);
        {
          var D = (Z) => {
            var P = /* @__PURE__ */ be(() => [...h(), g(S)]);
            i(Z, () => g(E).children, () => g(P));
          };
          Ce(L, (Z) => {
            g(E).children && Z(D);
          });
        }
        I(k, M);
      },
      (k) => {
        var E = dt(), S = _e(E);
        {
          var M = (T) => {
            var z = Iy(), L = X(z, !0);
            W(z), Oe(() => on(L, a())), I(T, z);
          };
          Ce(S, (T) => {
            h().length === 0 && T(M);
          });
        }
        I(k, E);
      }
    ), I(x, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = Et(), u = /* @__PURE__ */ ze(() => Nr(l)), c = /* @__PURE__ */ ze(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Ry(), f = X(d);
  {
    var v = (x) => {
      var _ = Ay();
      Ne(4), I(x, _);
    };
    Ce(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var w = B(f, 2);
  i(w, () => g(c) || [], () => []), W(d), I(e, d);
  var b = ge({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), p();
    }
  });
  return r(), b;
}
ue(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var By = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ie('<div class="heading svelte-1511o7e"><!> <!></div> <!> <!> <div class="setting-title svelte-1511o7e">模型</div> <div class="setting-item svelte-1511o7e"><!> <!></div> <div class="setting-title svelte-1511o7e">采样参数</div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-1511o7e"></div></div> <div class="setting-item svelte-1511o7e"><div class="slider-container svelte-1511o7e"><label class="svelte-1511o7e"> </label> <input type="range" min="0" max="100" step="1" class="svelte-1511o7e"></div></div> <div class="setting-title svelte-1511o7e">系统提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="setting-title svelte-1511o7e">用户提示词</div> <div class="setting-item svelte-1511o7e"><!></div> <div class="heading svelte-1511o7e"><!> <!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-1511o7e",
  code: `.heading.svelte-1511o7e {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-1511o7e {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1511o7e {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-1511o7e {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-1511o7e label:where(.svelte-1511o7e) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-1511o7e {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-1511o7e::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  ve(t, !0), st(e, jy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Nt(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Gt();
  return Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = By();
        I(u, c);
      },
      children: (u, c) => {
        var d = Xy(), f = _e(d), v = X(f);
        at(v, {
          level: 3,
          children: (re, Le) => {
            Ne();
            var He = Fe("输入参数");
            I(re, He);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (re, Le) => {
            var He = Yy();
            I(re, He);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (re, Le) => {
            Ne();
            var He = Fe("模型设置");
            I(re, He);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
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
            return g(C);
          }
        });
        var y = B(h, 2);
        ba(y, {}), W(_);
        var k = B(_, 4), E = X(k), S = X(E), M = X(S);
        W(S);
        var T = B(S, 2);
        Eo(T), W(E), W(k);
        var z = B(k, 2), L = X(z), D = X(L), Z = X(D);
        W(D);
        var P = B(D, 2);
        Eo(P), W(L), W(z);
        var H = B(z, 2), $ = X(H), O = X($), V = X(O);
        W(O);
        var A = B(O, 2);
        Eo(A), W($), W(H);
        var Y = B(H, 4), K = X(Y);
        const F = /* @__PURE__ */ ze(() => n().systemPrompt || "");
        Ut(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(F);
          },
          oninput: (re) => {
            l(o, { systemPrompt: re.target.value });
          }
        }), W(Y);
        var de = B(Y, 4), Q = X(de);
        const j = /* @__PURE__ */ ze(() => n().userPrompt || "");
        Ut(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (re) => {
            l(o, { userPrompt: re.target.value });
          }
        }), W(de);
        var ae = B(de, 2), pe = X(ae);
        at(pe, {
          level: 3,
          mt: "10px",
          children: (re, Le) => {
            Ne();
            var He = Fe("输出参数");
            I(re, He);
          },
          $$slots: { default: !0 }
        });
        var we = B(pe, 2);
        const ce = /* @__PURE__ */ ze(() => n().outType ? [n().outType] : []);
        $n(we, {
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
        var Ve = B(we, 2);
        nt(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (re, Le) => {
            var He = Wy();
            I(re, He);
          },
          $$slots: { default: !0 }
        }), W(ae);
        var le = B(ae, 2);
        Jn(le, {}), Oe(() => {
          on(M, `Temperature: ${n().temperature ?? 0.5}`), Sa(T, n().temperature ?? 0.5), on(Z, `Top P: ${n().topP ?? 0.9}`), Sa(P, n().topP ?? 0.9), on(V, `Top K: ${n().topK ?? 50}`), Sa(A, n().topK ?? 50);
        }), Ge("mousedown", T, Pa(function(re) {
          We.call(this, t, re);
        })), Ge("input", T, (re) => l(o, { temperature: parseFloat(re.target.value) })), Ge("mousedown", P, Pa(function(re) {
          We.call(this, t, re);
        })), Ge("input", P, (re) => l(o, { topP: parseFloat(re.target.value) })), Ge("mousedown", A, Pa(function(re) {
          We.call(this, t, re);
        })), Ge("input", A, (re) => l(o, { topK: parseInt(re.target.value) })), I(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ue(uf, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Gy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  ve(t, !0), st(e, Gy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  ln(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = Et(), { addParameter: i } = Rn(), { updateNodeData: a } = Gt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        I(l, u);
      },
      children: (l, u) => {
        var c = Uy(), d = _e(c), f = X(d);
        at(f, {
          level: 3,
          children: (z, L) => {
            Ne();
            var D = Fe("输入参数");
            I(z, D);
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
          children: (z, L) => {
            var D = qy();
            I(z, D);
          },
          $$slots: { default: !0 }
        }), W(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2);
        at(b, {
          level: 3,
          mt: "10px",
          children: (z, L) => {
            Ne();
            var D = Fe("代码");
            I(z, D);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), _ = X(x);
        const h = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        $n(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const L = z.value;
            a(o, () => ({ engine: L }));
          },
          get value() {
            return g(h);
          }
        }), W(x);
        var C = B(x, 4), y = X(C);
        const k = /* @__PURE__ */ ze(() => n().code || "");
        Ut(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(k);
          }
        }), W(C);
        var E = B(C, 2), S = X(E);
        at(S, {
          level: 3,
          mt: "10px",
          children: (z, L) => {
            Ne();
            var D = Fe("输出参数");
            I(z, D);
          },
          $$slots: { default: !0 }
        });
        var M = B(S, 2);
        nt(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, L) => {
            var D = Fy();
            I(z, D);
          },
          $$slots: { default: !0 }
        }), W(E);
        var T = B(E, 2);
        Jn(T, {}), I(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ue(cf, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function df(e, t) {
  ve(t, !0), st(e, tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), { updateNodeData: a } = Gt();
  return fr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Jy();
        I(s, l);
      },
      children: (s, l) => {
        var u = ew(), c = _e(u), d = X(c);
        at(d, {
          level: 3,
          children: (k, E) => {
            Ne();
            var S = Fe("输入参数");
            I(k, S);
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
          children: (k, E) => {
            var S = Qy();
            I(k, S);
          },
          $$slots: { default: !0 }
        }), W(c);
        var v = B(c, 2);
        nn(v, {});
        var w = B(v, 2);
        at(w, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Ne();
            var S = Fe("代码");
            I(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = B(w, 4), x = X(b);
        const _ = /* @__PURE__ */ ze(() => n().template || "");
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
        }), W(b);
        var h = B(b, 2), C = X(h);
        at(C, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Ne();
            var S = Fe("输出参数");
            I(k, S);
          },
          $$slots: { default: !0 }
        }), W(h);
        var y = B(h, 2);
        Jn(y, {}), I(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ue(df, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), cw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const vw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function ff(e, t) {
  ve(t, !0), st(e, vw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
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
  ], i = Et(), { addParameter: a } = Rn(), { updateNodeData: s } = Gt();
  return Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = nw();
        I(l, u);
      },
      children: (l, u) => {
        var c = fw(), d = _e(c), f = X(d), v = X(f);
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
        }), W(f);
        var b = B(f, 2), x = X(b);
        const _ = /* @__PURE__ */ ze(() => n().url || "");
        Dt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return g(_);
          }
        }), W(b), W(d);
        var h = B(d, 2), C = X(h);
        at(C, {
          level: 3,
          children: (se, fe) => {
            Ne();
            var Ee = Fe("Http 头信息");
            I(se, Ee);
          },
          $$slots: { default: !0 }
        });
        var y = B(C, 2);
        nt(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, fe) => {
            var Ee = rw();
            I(se, Ee);
          },
          $$slots: { default: !0 }
        }), W(h);
        var k = B(h, 2);
        nn(k, { dataKeyName: "headers" });
        var E = B(k, 2), S = X(E);
        at(S, {
          level: 3,
          children: (se, fe) => {
            Ne();
            var Ee = Fe("参数");
            I(se, Ee);
          },
          $$slots: { default: !0 }
        });
        var M = B(S, 2);
        nt(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (se, fe) => {
            var Ee = ow();
            I(se, Ee);
          },
          $$slots: { default: !0 }
        }), W(E);
        var T = B(E, 2);
        nn(T, { dataKeyName: "urlParameters" });
        var z = B(T, 2);
        at(z, {
          level: 3,
          mt: "10px",
          children: (se, fe) => {
            Ne();
            var Ee = Fe("Body");
            I(se, Ee);
          },
          $$slots: { default: !0 }
        });
        var L = B(z, 2), D = X(L), Z = X(D);
        const P = /* @__PURE__ */ ze(() => !n().bodyType);
        Dt(Z, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(P);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Ne(), W(D);
        var H = B(D, 2), $ = X(H);
        const O = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        Dt($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(O);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Ne(), W(H);
        var V = B(H, 2), A = X(V);
        const Y = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        Dt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Y);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), W(V);
        var K = B(V, 2), F = X(K);
        const de = /* @__PURE__ */ ze(() => n().bodyType === "json");
        Dt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(de);
          },
          onchange: (se) => {
            var fe;
            (fe = se.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Ne(), W(K);
        var Q = B(K, 2), j = X(Q);
        const ae = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        Dt(j, {
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
        }), Ne(), W(Q), W(L);
        var pe = B(L, 2);
        {
          var we = (se) => {
            var fe = aw(), Ee = _e(fe), qe = X(Ee);
            at(qe, {
              level: 3,
              children: (lt, te) => {
                Ne();
                var Ae = Fe("参数");
                I(lt, Ae);
              },
              $$slots: { default: !0 }
            });
            var Ie = B(qe, 2);
            nt(Ie, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (lt, te) => {
                var Ae = iw();
                I(lt, Ae);
              },
              $$slots: { default: !0 }
            }), W(Ee);
            var vt = B(Ee, 2);
            nn(vt, { dataKeyName: "fromData" }), I(se, fe);
          };
          Ce(pe, (se) => {
            n().bodyType === "form-data" && se(we);
          });
        }
        var ce = B(pe, 2);
        {
          var Ve = (se) => {
            var fe = lw(), Ee = _e(fe), qe = X(Ee);
            at(qe, {
              level: 3,
              children: (lt, te) => {
                Ne();
                var Ae = Fe("参数");
                I(lt, Ae);
              },
              $$slots: { default: !0 }
            });
            var Ie = B(qe, 2);
            nt(Ie, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (lt, te) => {
                var Ae = sw();
                I(lt, Ae);
              },
              $$slots: { default: !0 }
            }), W(Ee);
            var vt = B(Ee, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), I(se, fe);
          };
          Ce(ce, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(Ve);
          });
        }
        var le = B(ce, 2);
        {
          var re = (se) => {
            var fe = uw(), Ee = X(fe);
            Ut(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (qe) => {
                s(i, { bodyJson: qe.target.value });
              }
            }), W(fe), I(se, fe);
          };
          Ce(le, (se) => {
            n().bodyType === "json" && se(re);
          });
        }
        var Le = B(le, 2);
        {
          var He = (se) => {
            var fe = cw(), Ee = X(fe);
            Ut(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (qe) => {
                s(i, { bodyRaw: qe.target.value });
              }
            }), W(fe), I(se, fe);
          };
          Ce(Le, (se) => {
            n().bodyType === "raw" && se(He);
          });
        }
        var Ze = B(Le, 2), ee = X(Ze);
        at(ee, {
          level: 3,
          mt: "10px",
          children: (se, fe) => {
            Ne();
            var Ee = Fe("输出参数");
            I(se, Ee);
          },
          $$slots: { default: !0 }
        });
        var Ue = B(ee, 2);
        nt(Ue, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, fe) => {
            var Ee = dw();
            I(se, Ee);
          },
          $$slots: { default: !0 }
        }), W(Ze);
        var Je = B(Ze, 2);
        Jn(Je, {}), I(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ue(ff, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  ve(t, !0), st(e, mw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Nt(fn([]));
  ln(async () => {
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
  }), Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = gw();
        I(u, c);
      },
      children: (u, c) => {
        var d = pw(), f = _e(d), v = X(f);
        at(v, {
          level: 3,
          children: (D, Z) => {
            Ne();
            var P = Fe("输入参数");
            I(D, P);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, Z) => {
            var P = hw();
            I(D, P);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (D, Z) => {
            Ne();
            var P = Fe("知识库设置");
            I(D, P);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const Z = D.value;
            l(o, () => ({ knowledgeId: Z }));
          },
          get value() {
            return g(C);
          }
        }), W(_);
        var y = B(_, 4), k = X(y);
        Dt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const Z = D.target.value;
            l(o, () => ({ keyword: Z }));
          }
        }), W(y);
        var E = B(y, 4), S = X(E);
        const M = /* @__PURE__ */ ze(() => n().limit || "");
        Dt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const Z = D.target.value;
            l(o, () => ({ limit: Z }));
          },
          get value() {
            return g(M);
          }
        }), W(E);
        var T = B(E, 2), z = X(T);
        at(z, {
          level: 3,
          mt: "10px",
          children: (D, Z) => {
            Ne();
            var P = Fe("输出参数");
            I(D, P);
          },
          $$slots: { default: !0 }
        }), W(T);
        var L = B(T, 2);
        Jn(L, {}), I(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ue(vf, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ww = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const xw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  ve(t, !0), st(e, xw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Nt(fn([]));
  ln(async () => {
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
  }), Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = yw();
        I(u, c);
      },
      children: (u, c) => {
        var d = bw(), f = _e(d), v = X(f);
        at(v, {
          level: 3,
          children: (L, D) => {
            Ne();
            var Z = Fe("输入参数");
            I(L, Z);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, D) => {
            var Z = ww();
            I(L, Z);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (L, D) => {
            Ne();
            var Z = Fe("搜索引擎设置");
            I(L, Z);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), h = X(_);
        const C = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (L) => {
            const D = L.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return g(C);
          }
        }), W(_);
        var y = B(_, 4), k = X(y);
        Dt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const D = L.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), W(y);
        var E = B(y, 4), S = X(E);
        Dt(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (L) => {
            const D = L.target.value;
            l(o, () => ({ limit: D }));
          }
        }), W(E);
        var M = B(E, 2), T = X(M);
        at(T, {
          level: 3,
          mt: "10px",
          children: (L, D) => {
            Ne();
            var Z = Fe("输出参数");
            I(L, Z);
          },
          $$slots: { default: !0 }
        }), W(M);
        var z = B(M, 2);
        Jn(z, {}), I(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ue(gf, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), _w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const kw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function hf(e, t) {
  ve(t, !0), st(e, kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Nt(fn([]));
  return ln(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), Sn(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = $w();
        I(l, u);
      },
      handle: (l) => {
        gr(l, {
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
        var c = Cw(), d = _e(c), f = X(d);
        at(f, {
          level: 3,
          children: (h, C) => {
            Ne();
            var y = Fe("循环变量");
            I(h, y);
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
          children: (h, C) => {
            var y = _w();
            I(h, y);
          },
          $$slots: { default: !0 }
        }), W(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2), x = X(b);
        at(x, {
          level: 3,
          mt: "10px",
          children: (h, C) => {
            Ne();
            var y = Fe("输出参数");
            I(h, y);
          },
          $$slots: { default: !0 }
        }), W(b);
        var _ = B(b, 2);
        Jn(_, {}), I(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ue(hf, { data: {} }, [], [], !0);
const Ew = {
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
var Sw = /* @__PURE__ */ ie("<!> ", 1);
function cs(e, t) {
  ve(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), a = m(t, "extra", 7);
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
      var u = Sw(), c = _e(u);
      Ps(c, n);
      var d = B(c);
      Oe(() => on(d, ` ${r() ?? ""}`)), I(s, u);
    },
    $$slots: { default: !0 }
  }), ge({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), p();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), p();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), p();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), p();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), p();
    }
  });
}
ue(
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
var Pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Mw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function pf(e, t) {
  ve(t, !0);
  let n = /* @__PURE__ */ Nt("base"), r = /* @__PURE__ */ Nt("show");
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
  ], a = [], s = yr().customNodes;
  if (s) {
    const x = Object.keys(s).sort((_, h) => (s[_].sortNo || 0) - (s[h].sortNo || 0));
    for (let _ of x)
      a.push({
        icon: s[_].icon,
        title: s[_].title,
        type: _
      });
  }
  var l = Mw(), u = X(l), c = X(u), d = X(c);
  Ad(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      U(n, x.value.toString(), !0);
    }
  }), W(c);
  var f = B(c, 2), v = X(f);
  Ft(v, 21, () => o, zo, (x, _) => {
    cs(x, bt(() => g(_)));
  }), W(v);
  var w = B(v, 2);
  Ft(w, 21, () => a, zo, (x, _) => {
    cs(x, bt(() => g(_)));
  }), W(w), W(f), W(u);
  var b = B(u, 2);
  nt(b, {
    onclick: () => {
      U(r, g(r) ? "" : "show", !0);
    },
    children: (x, _) => {
      var h = dt(), C = _e(h);
      {
        var y = (E) => {
          var S = Pw();
          I(E, S);
        }, k = (E) => {
          var S = Ow();
          I(E, S);
        };
        Ce(C, (E) => {
          g(r) === "show" ? E(y) : E(k, !1);
        });
      }
      I(x, h);
    },
    $$slots: { default: !0 }
  }), W(l), Oe(() => {
    Tt(l, 1, `tf-toolbar ${g(r) ?? ""}`), xt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), xt(w, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), I(e, l), ge();
}
ue(pf, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = rt();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Vw = () => {
  const { nodes: e } = rt();
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
  const { edges: e } = rt();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var zw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Iw = /* @__PURE__ */ ie("<!> <div></div> <!>", 1);
const Aw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function mf(e, t) {
  var n;
  ve(t, !0), st(e, Aw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = Et(), { addParameter: a } = Rn(), s = Gt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = yr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  fr(() => {
    r().expand && d && d.append(u);
  }), fr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ ze(() => ({
    ...r(),
    description: c.description
  }));
  return Sn(e, bt(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var w = dt(), b = _e(w);
        Ps(b, () => c.icon), I(v, w);
      },
      children: (v, w) => {
        var b = Iw(), x = _e(b);
        {
          var _ = (k) => {
            var E = Nw(), S = _e(E), M = X(S);
            at(M, {
              level: 3,
              children: (L, D) => {
                Ne();
                var Z = Fe("输入参数");
                I(L, Z);
              },
              $$slots: { default: !0 }
            });
            var T = B(M, 2);
            nt(T, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (L, D) => {
                var Z = zw();
                I(L, Z);
              },
              $$slots: { default: !0 }
            }), W(S);
            var z = B(S, 2);
            nn(z, {}), I(k, E);
          };
          Ce(x, (k) => {
            c.parametersEnable !== !1 && k(_);
          });
        }
        var h = B(x, 2);
        Dn(h, (k) => d = k, () => d);
        var C = B(h, 2);
        {
          var y = (k) => {
            var E = Lw(), S = _e(E), M = X(S);
            at(M, {
              level: 3,
              mt: "10px",
              children: (L, D) => {
                Ne();
                var Z = Fe("输出参数");
                I(L, Z);
              },
              $$slots: { default: !0 }
            });
            var T = B(M, 2);
            nt(T, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (L, D) => {
                var Z = Dw();
                I(L, Z);
              },
              $$slots: { default: !0 }
            }), W(S);
            var z = B(S, 2);
            Jn(z, {}), I(k, E);
          };
          Ce(C, (k) => {
            c.outputDefsEnable !== !1 && k(y);
          });
        }
        Oe(() => {
          xt(h, c.rootStyle || ""), Tt(h, 1, kn(c.rootClass), "svelte-c71dg3");
        }), I(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
ue(mf, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Zw = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), Bw = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Yw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function yf(e, t) {
  ve(t, !0), st(e, Yw);
  const n = m(t, "onInit", 7), r = Gt();
  n()(r);
  let o = /* @__PURE__ */ Nt(!1);
  const i = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, a = (E) => {
    var S;
    E.preventDefault();
    const M = r.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), T = (S = E.dataTransfer) == null ? void 0 : S.getData("application/tinyflow"), z = T ? JSON.parse(T) : {}, L = {
      id: `node_${ao()}`,
      position: M,
      data: {},
      ...z
    };
    Ci.addNode(L), Ci.selectNodeOnly(L.id);
  }, { getNode: s } = Tw(), l = (E) => {
    const S = s(E.source), M = s(E.target);
    if (E.sourceHandle === "loop_handle" || S.parentId) {
      const T = r.getEdges();
      for (let z of T)
        if (z.target === E.target) {
          const L = s(z.source);
          if (E.sourceHandle === "loop_handle" && L.parentId !== S.id || S.parentId && L.parentId !== S.parentId)
            return !1;
        }
    }
    return !(!S.parentId && M.parentId && M.parentId !== S.id);
  }, { ensureParentInNodesBefore: u } = Vw(), c = (E, S) => {
    if (!S.isValid)
      return;
    const M = S.toNode;
    if (M.parentId)
      return;
    const T = S.fromNode, z = S.fromHandle, L = { position: { ...M.position } };
    if (z.id === "loop_handle" ? L.parentId = T.id : T.parentId && (L.parentId = T.parentId), L.parentId) {
      const D = s(L.parentId);
      L.position = {
        x: M.position.x - D.position.x,
        y: M.position.y - D.position.y
      }, u(L.parentId, M.id), r.updateNode(M.id, L);
    }
  }, { getEdgesByTarget: d } = Hw(), f = (E) => {
    E.edges.forEach((S) => {
      const M = s(S.target);
      if (M.parentId) {
        const T = d(S.target), z = s(M.parentId);
        if (T.length === 0)
          r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + z.position.x,
              y: M.position.y + z.position.y
            }
          });
        else {
          let L = !1;
          for (let D = 0; D < T.length; D++) {
            const Z = T[D], P = s(Z.source);
            if (P.parentId || P.type === "loopNode") {
              L = !0;
              break;
            }
          }
          L || r.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + z.position.x,
              y: M.position.y + z.position.y
            }
          });
        }
      }
    });
  }, v = (E, S) => {
  }, w = (E) => {
  }, b = {}, x = yr().customNodes;
  if (x)
    for (let E of Object.keys(x))
      b[E] = mf;
  var _ = Bw(), h = X(_);
  const C = /* @__PURE__ */ ze(() => ({ ...Ew, ...b })), y = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Cd(h, bt(
    {
      get nodeTypes() {
        return g(C);
      }
    },
    Ci,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: w,
      connectionRadius: 50,
      ondelete: f,
      onclick: (E) => {
        const S = E.target;
        S.classList.contains("svelte-flow__edge-interaction") || S.classList.contains("panel-content") || S.closest(".panel-content") || U(o, !1);
      },
      get defaultEdgeOptions() {
        return g(y);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          U(o, !0);
        }
      },
      children: (E, S) => {
        var M = Zw(), T = _e(M);
        zd(T, {});
        var z = B(T, 2);
        Td(z, {});
        var L = B(z, 2);
        Dd(L, {});
        var D = B(L, 2);
        {
          var Z = (P) => {
            ei(P, {
              children: (H, $) => {
                var O = Rw(), V = B(X(O), 4), A = X(V);
                Ut(A, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Y) => {
                  }
                }), W(V), W(O), I(H, O);
              },
              $$slots: { default: !0 }
            });
          };
          Ce(D, (P) => {
            g(o) && P(Z);
          });
        }
        I(E, M);
      },
      $$slots: { default: !0 }
    }
  ));
  var k = B(h, 2);
  return pf(k, {}), W(_), I(e, _), ge({
    get onInit() {
      return n();
    },
    set onInit(E) {
      n(E), p();
    }
  });
}
ue(yf, { onInit: {} }, [], [], !0);
function Ww(e, t) {
  ve(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ci.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Gr("tinyflow_options", n()), kd(e, {
    fitView: !0,
    children: (i, a) => {
      yf(i, {
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
      n(i), p();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), p();
    }
  });
}
customElements.define("tinyflow-component", ue(Ww, { options: {}, onInit: {} }, [], [], !1));
const qw = xf((e, t) => {
  const n = Js(null), r = Js(null);
  $f(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return _f(() => {
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
  }, [o]), /* @__PURE__ */ Sf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  qw as Tinyflow
};
//# sourceMappingURL=index.js.map
