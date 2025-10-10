import nu, { forwardRef as jf, useRef as Ra, useImperativeHandle as Bf, useEffect as Kf } from "react";
var Uo = { exports: {} }, lo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Zf() {
  if (Ia) return lo;
  Ia = 1;
  var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var ja;
function Wf() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function w(A) {
      if (A === null || typeof A != "object")
        return null;
      var te = g && A[g] || A[y];
      return typeof te == "function" ? te : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(A) {
      {
        for (var te = arguments.length, he = new Array(te > 1 ? te - 1 : 0), Se = 1; Se < te; Se++)
          he[Se - 1] = arguments[Se];
        x("error", A, he);
      }
    }
    function x(A, te, he) {
      {
        var Se = k.ReactDebugCurrentFrame, Ie = Se.getStackAddendum();
        Ie !== "" && (te += "%s", he = he.concat([Ie]));
        var Ye = he.map(function(He) {
          return String(He);
        });
        Ye.unshift("Warning: " + te), Function.prototype.apply.call(console[A], console, Ye);
      }
    }
    var S = !1, O = !1, E = !1, L = !1, D = !1, Z;
    Z = Symbol.for("react.module.reference");
    function q(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === i || D || A === o || A === u || A === d || L || A === h || S || O || E || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === f || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === Z || A.getModuleId !== void 0));
    }
    function R(A, te, he) {
      var Se = A.displayName;
      if (Se)
        return Se;
      var Ie = te.displayName || te.name || "";
      return Ie !== "" ? he + "(" + Ie + ")" : he;
    }
    function _(A) {
      return A.displayName || "Context";
    }
    function $(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
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
      if (typeof A == "object")
        switch (A.$$typeof) {
          case a:
            var te = A;
            return _(te) + ".Consumer";
          case s:
            var he = A;
            return _(he._context) + ".Provider";
          case l:
            return R(A, A.render, "ForwardRef");
          case f:
            var Se = A.displayName || null;
            return Se !== null ? Se : $(A.type) || "Memo";
          case p: {
            var Ie = A, Ye = Ie._payload, He = Ie._init;
            try {
              return $(He(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, P = 0, N, z, j, W, M, Y, Q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function K() {
      {
        if (P === 0) {
          N = console.log, z = console.info, j = console.warn, W = console.error, M = console.group, Y = console.groupCollapsed, Q = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        P++;
      }
    }
    function X() {
      {
        if (P--, P === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, A, {
              value: N
            }),
            info: b({}, A, {
              value: z
            }),
            warn: b({}, A, {
              value: j
            }),
            error: b({}, A, {
              value: W
            }),
            group: b({}, A, {
              value: M
            }),
            groupCollapsed: b({}, A, {
              value: Y
            }),
            groupEnd: b({}, A, {
              value: Q
            })
          });
        }
        P < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = k.ReactCurrentDispatcher, se;
    function ae(A, te, he) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var Se = Ie.stack.trim().match(/\n( *(at )?)/);
            se = Se && Se[1] || "";
          }
        return `
` + se + A;
      }
    }
    var ee = !1, ye;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new fe();
    }
    function ne(A, te) {
      if (!A || ee)
        return "";
      {
        var he = ye.get(A);
        if (he !== void 0)
          return he;
      }
      var Se;
      ee = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = U.current, U.current = null, K();
      try {
        if (te) {
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
            } catch (Vt) {
              Se = Vt;
            }
            Reflect.construct(A, [], He);
          } else {
            try {
              He.call();
            } catch (Vt) {
              Se = Vt;
            }
            A.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vt) {
            Se = Vt;
          }
          A();
        }
      } catch (Vt) {
        if (Vt && Se && typeof Vt.stack == "string") {
          for (var Ve = Vt.stack.split(`
`), Nt = Se.stack.split(`
`), rt = Ve.length - 1, at = Nt.length - 1; rt >= 1 && at >= 0 && Ve[rt] !== Nt[at]; )
            at--;
          for (; rt >= 1 && at >= 0; rt--, at--)
            if (Ve[rt] !== Nt[at]) {
              if (rt !== 1 || at !== 1)
                do
                  if (rt--, at--, at < 0 || Ve[rt] !== Nt[at]) {
                    var Yt = `
` + Ve[rt].replace(" at new ", " at ");
                    return A.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", A.displayName)), typeof A == "function" && ye.set(A, Yt), Yt;
                  }
                while (rt >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        ee = !1, U.current = Ye, X(), Error.prepareStackTrace = Ie;
      }
      var Lr = A ? A.displayName || A.name : "", cr = Lr ? ae(Lr) : "";
      return typeof A == "function" && ye.set(A, cr), cr;
    }
    function oe(A, te, he) {
      return ne(A, !1);
    }
    function ge(A) {
      var te = A.prototype;
      return !!(te && te.isReactComponent);
    }
    function ve(A, te, he) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ne(A, ge(A));
      if (typeof A == "string")
        return ae(A);
      switch (A) {
        case u:
          return ae("Suspense");
        case d:
          return ae("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return oe(A.render);
          case f:
            return ve(A.type, te, he);
          case p: {
            var Se = A, Ie = Se._payload, Ye = Se._init;
            try {
              return ve(Ye(Ie), te, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, pe = {}, _e = k.ReactDebugCurrentFrame;
    function Le(A) {
      if (A) {
        var te = A._owner, he = ve(A.type, A._source, te ? te.type : null);
        _e.setExtraStackFrame(he);
      } else
        _e.setExtraStackFrame(null);
    }
    function F(A, te, he, Se, Ie) {
      {
        var Ye = Function.call.bind(xe);
        for (var He in A)
          if (Ye(A, He)) {
            var Ve = void 0;
            try {
              if (typeof A[He] != "function") {
                var Nt = Error((Se || "React class") + ": " + he + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nt.name = "Invariant Violation", Nt;
              }
              Ve = A[He](te, He, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Ve = rt;
            }
            Ve && !(Ve instanceof Error) && (Le(Ie), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, He, typeof Ve), Le(null)), Ve instanceof Error && !(Ve.message in pe) && (pe[Ve.message] = !0, Le(Ie), C("Failed %s type: %s", he, Ve.message), Le(null));
          }
      }
    }
    var Je = Array.isArray;
    function Re(A) {
      return Je(A);
    }
    function We(A) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, he = te && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return he;
      }
    }
    function Ze(A) {
      try {
        return nt(A), !1;
      } catch {
        return !0;
      }
    }
    function nt(A) {
      return "" + A;
    }
    function $t(A) {
      if (Ze(A))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(A)), nt(A);
    }
    var Qe = k.ReactCurrentOwner, je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Be;
    function mt(A) {
      if (xe.call(A, "ref")) {
        var te = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function tt(A) {
      if (xe.call(A, "key")) {
        var te = Object.getOwnPropertyDescriptor(A, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function _t(A, te) {
      typeof A.ref == "string" && Qe.current;
    }
    function ct(A, te) {
      {
        var he = function() {
          me || (me = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        he.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function dt(A, te) {
      {
        var he = function() {
          Be || (Be = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        he.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var gn = function(A, te, he, Se, Ie, Ye, He) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: te,
        ref: he,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function vn(A, te, he, Se, Ie) {
      {
        var Ye, He = {}, Ve = null, Nt = null;
        he !== void 0 && ($t(he), Ve = "" + he), tt(te) && ($t(te.key), Ve = "" + te.key), mt(te) && (Nt = te.ref, _t(te, Ie));
        for (Ye in te)
          xe.call(te, Ye) && !je.hasOwnProperty(Ye) && (He[Ye] = te[Ye]);
        if (A && A.defaultProps) {
          var rt = A.defaultProps;
          for (Ye in rt)
            He[Ye] === void 0 && (He[Ye] = rt[Ye]);
        }
        if (Ve || Nt) {
          var at = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Ve && ct(He, at), Nt && dt(He, at);
        }
        return gn(A, Ve, Nt, Ie, Se, Qe.current, He);
      }
    }
    var Kn = k.ReactCurrentOwner, ur = k.ReactDebugCurrentFrame;
    function Pn(A) {
      if (A) {
        var te = A._owner, he = ve(A.type, A._source, te ? te.type : null);
        ur.setExtraStackFrame(he);
      } else
        ur.setExtraStackFrame(null);
    }
    var ao;
    ao = !1;
    function tn(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ma() {
      {
        if (Kn.current) {
          var A = $(Kn.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Of(A) {
      return "";
    }
    var Va = {};
    function Lf(A) {
      {
        var te = Ma();
        if (!te) {
          var he = typeof A == "string" ? A : A.displayName || A.name;
          he && (te = `

Check the top-level render call using <` + he + ">.");
        }
        return te;
      }
    }
    function Da(A, te) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var he = Lf(te);
        if (Va[he])
          return;
        Va[he] = !0;
        var Se = "";
        A && A._owner && A._owner !== Kn.current && (Se = " It was passed a child from " + $(A._owner.type) + "."), Pn(A), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), Pn(null);
      }
    }
    function za(A, te) {
      {
        if (typeof A != "object")
          return;
        if (Re(A))
          for (var he = 0; he < A.length; he++) {
            var Se = A[he];
            tn(Se) && Da(Se, te);
          }
        else if (tn(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Ie = w(A);
          if (typeof Ie == "function" && Ie !== A.entries)
            for (var Ye = Ie.call(A), He; !(He = Ye.next()).done; )
              tn(He.value) && Da(He.value, te);
        }
      }
    }
    function Mf(A) {
      {
        var te = A.type;
        if (te == null || typeof te == "string")
          return;
        var he;
        if (typeof te == "function")
          he = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === f))
          he = te.propTypes;
        else
          return;
        if (he) {
          var Se = $(te);
          F(he, A.props, "prop", Se, A);
        } else if (te.PropTypes !== void 0 && !ao) {
          ao = !0;
          var Ie = $(te);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vf(A) {
      {
        for (var te = Object.keys(A.props), he = 0; he < te.length; he++) {
          var Se = te[he];
          if (Se !== "children" && Se !== "key") {
            Pn(A), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Pn(null);
            break;
          }
        }
        A.ref !== null && (Pn(A), C("Invalid attribute `ref` supplied to `React.Fragment`."), Pn(null));
      }
    }
    var Ha = {};
    function Aa(A, te, he, Se, Ie, Ye) {
      {
        var He = q(A);
        if (!He) {
          var Ve = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nt = Of();
          Nt ? Ve += Nt : Ve += Ma();
          var rt;
          A === null ? rt = "null" : Re(A) ? rt = "array" : A !== void 0 && A.$$typeof === t ? (rt = "<" + ($(A.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof A, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Ve);
        }
        var at = vn(A, te, he, Ie, Ye);
        if (at == null)
          return at;
        if (He) {
          var Yt = te.children;
          if (Yt !== void 0)
            if (Se)
              if (Re(Yt)) {
                for (var Lr = 0; Lr < Yt.length; Lr++)
                  za(Yt[Lr], A);
                Object.freeze && Object.freeze(Yt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              za(Yt, A);
        }
        if (xe.call(te, "key")) {
          var cr = $(A), Vt = Object.keys(te).filter(function(If) {
            return If !== "key";
          }), ts = Vt.length > 0 ? "{key: someKey, " + Vt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ha[cr + ts]) {
            var Rf = Vt.length > 0 ? "{" + Vt.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ts, cr, Rf, cr), Ha[cr + ts] = !0;
          }
        }
        return A === r ? Vf(at) : Mf(at), at;
      }
    }
    function Df(A, te, he) {
      return Aa(A, te, he, !0);
    }
    function zf(A, te, he) {
      return Aa(A, te, he, !1);
    }
    var Hf = zf, Af = Df;
    uo.Fragment = r, uo.jsx = Hf, uo.jsxs = Af;
  }()), uo;
}
var Ba;
function Yf() {
  return Ba || (Ba = 1, process.env.NODE_ENV === "production" ? Uo.exports = Zf() : Uo.exports = Wf()), Uo.exports;
}
var Ff = Yf();
const qf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(qf);
const Ks = 1, Zs = 2, ru = 4, Xf = 8, Gf = 16, Uf = 1, Jf = 2, ou = 4, Qf = 8, ep = 16, iu = 1, tp = 2, su = "[", Mi = "[!", Ws = "]", wr = {}, ht = Symbol(), np = "http://www.w3.org/1999/xhtml", rp = "http://www.w3.org/2000/svg", op = "@attach", ip = !1;
var Mo = Array.isArray, sp = Array.prototype.indexOf, Ys = Array.from, pi = Object.keys, Br = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertyDescriptors, lu = Object.prototype, ap = Array.prototype, Vi = Object.getPrototypeOf, Ka = Object.isExtensible;
function co(e) {
  return typeof e == "function";
}
const xt = () => {
};
function lp(e) {
  return e();
}
function hi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function up() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Tt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Vo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Kt = 2, Fs = 4, Di = 8, ro = 16, An = 32, nr = 64, qs = 128, Gt = 256, gi = 512, Et = 1024, Ut = 2048, rr = 4096, an = 8192, Sr = 16384, Xs = 32768, Er = 65536, Za = 1 << 17, cp = 1 << 18, Pr = 1 << 19, uu = 1 << 20, ys = 1 << 21, Gs = 1 << 22, hr = 1 << 23, xn = Symbol("$state"), Us = Symbol("legacy props"), dp = Symbol(""), Js = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fp = 1, zi = 3, Nr = 8;
function Qs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function pp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function gp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function vp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function mp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function yp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function wp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function bp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Cp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Do(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $p() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _p() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function Lt(e) {
  Ce = e;
}
let Ne;
function ut(e) {
  if (e === null)
    throw Do(), wr;
  return Ne = e;
}
function zn() {
  return ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ cn(Ne)
  );
}
function I(e) {
  if (Ce) {
    if (/* @__PURE__ */ cn(Ne) !== null)
      throw Do(), wr;
    Ne = e;
  }
}
function be(e = 1) {
  if (Ce) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n);
    Ne = n;
  }
}
function vi(e = !0) {
  for (var t = 0, n = Ne; ; ) {
    if (n.nodeType === Nr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ws) {
        if (t === 0) return n;
        t -= 1;
      } else (r === su || r === Mi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n)
    );
    e && n.remove(), n = o;
  }
}
function cu(e) {
  if (!e || e.nodeType !== Nr)
    throw Do(), wr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function du(e) {
  return e === this.v;
}
function fu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pu(e) {
  return !fu(e, this.v);
}
let oo = !1, Sp = !1;
function Ep() {
  oo = !0;
}
const Pp = [];
function hu(e, t = !1, n = !1) {
  return ii(e, /* @__PURE__ */ new Map(), "", Pp, null, n);
}
function ii(e, t, n, r, o = null, i = !1) {
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
    if (Mo(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = ii(u, t, n, r, null, i));
      }
      return a;
    }
    if (Vi(e) === lu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = ii(
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
      return ii(
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
let Ue = null;
function Kr(e) {
  Ue = e;
}
function Un(e) {
  return (
    /** @type {T} */
    gu().get(e)
  );
}
function Zr(e, t) {
  return gu().set(e, t), t;
}
function ce(e, t = !1, n) {
  Ue = {
    p: Ue,
    c: null,
    e: null,
    s: e,
    x: null,
    l: oo && !t ? { s: null, u: null, $: [] } : null
  };
}
function de(e) {
  var t = (
    /** @type {ComponentContext} */
    Ue
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Vu(r);
  }
  return e !== void 0 && (t.x = e), Ue = t.p, e ?? /** @type {T} */
  {};
}
function zo() {
  return !oo || Ue !== null && Ue.l === null;
}
function gu(e) {
  return Ue === null && Qs(), Ue.c ??= new Map(Np(Ue) || void 0);
}
function Np(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Tp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Wn = [], Wr = [];
function vu() {
  var e = Wn;
  Wn = [], hi(e);
}
function mu() {
  var e = Wr;
  Wr = [], hi(e);
}
function Op() {
  return Wn.length > 0 || Wr.length > 0;
}
function Tr(e) {
  if (Wn.length === 0 && !yo) {
    var t = Wn;
    queueMicrotask(() => {
      t === Wn && vu();
    });
  }
  Wn.push(e);
}
function Lp(e) {
  Wr.length === 0 && Tp(mu), Wr.push(e);
}
function Mp() {
  Wn.length > 0 && vu(), Wr.length > 0 && mu();
}
const Vp = /* @__PURE__ */ new WeakMap();
function yu(e) {
  var t = Te;
  if (t === null)
    return De.f |= hr, e;
  if ((t.f & Xs) === 0) {
    if ((t.f & qs) === 0)
      throw !t.parent && e instanceof Error && wu(e), e;
    t.b.error(e);
  } else
    Yr(e, t);
}
function Yr(e, t) {
  for (; t !== null; ) {
    if ((t.f & qs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && wu(e), e;
}
function wu(e) {
  const t = Vp.get(e);
  t && (Br(e, "message", {
    value: t.message
  }), Br(e, "stack", {
    value: t.stack
  }));
}
const ns = /* @__PURE__ */ new Set();
let gt = null, ws = /* @__PURE__ */ new Set(), br = [], Hi = null, bs = !1, yo = !1;
class Cn {
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
  #a = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #i = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #d = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #f = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #c = [];
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
    br = [];
    for (const o of t)
      this.#p(o);
    if (this.#s.length === 0 && this.#a === 0) {
      this.#h();
      var n = this.#n, r = this.#o;
      this.#n = [], this.#o = [], this.#l = [], gt = null, Wa(n), Wa(r), gt === null ? gt = this : ns.delete(this), this.#i?.resolve();
    } else
      this.#u(this.#n), this.#u(this.#o), this.#u(this.#l);
    for (const o of this.#s)
      Hr(o);
    for (const o of this.#r)
      Hr(o);
    this.#s = [], this.#r = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #p(t) {
    t.f ^= Et;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (An | nr)) !== 0, i = o && (r & Et) !== 0, s = i || (r & an) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= Et;
        else if ((r & Fs) !== 0)
          this.#o.push(n);
        else if ((r & Et) === 0)
          if ((r & Gs) !== 0) {
            var a = n.b?.is_pending() ? this.#r : this.#s;
            a.push(n);
          } else Ri(n) && ((n.f & ro) !== 0 && this.#l.push(n), Hr(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(t) {
    for (const n of t)
      ((n.f & Ut) !== 0 ? this.#f : this.#c).push(n), At(n, Et);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    gt = this;
  }
  deactivate() {
    gt = null;
    for (const t of ws)
      if (ws.delete(t), t(), gt !== null)
        break;
  }
  neuter() {
    this.#d = !0;
  }
  flush() {
    br.length > 0 ? bu() : this.#h(), gt === this && (this.#a === 0 && ns.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#d)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#a += 1;
  }
  decrement() {
    if (this.#a -= 1, this.#a === 0) {
      for (const t of this.#f)
        At(t, Ut), Fr(t);
      for (const t of this.#c)
        At(t, rr), Fr(t);
      this.#n = [], this.#o = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= up()).promise;
  }
  static ensure() {
    if (gt === null) {
      const t = gt = new Cn();
      ns.add(gt), yo || Cn.enqueue(() => {
        gt === t && t.flush();
      });
    }
    return gt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Tr(t);
  }
}
function v(e) {
  var t = yo;
  yo = !0;
  try {
    for (var n; ; ) {
      if (Mp(), br.length === 0 && !Op() && (gt?.flush(), br.length === 0))
        return Hi = null, /** @type {T} */
        n;
      bu();
    }
  } finally {
    yo = t;
  }
}
function bu() {
  var e = zr;
  bs = !0;
  try {
    var t = 0;
    for (Xa(!0); br.length > 0; ) {
      var n = Cn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Dp();
      }
      n.process(br), Xn.clear();
    }
  } finally {
    bs = !1, Xa(e), Hi = null;
  }
}
function Dp() {
  try {
    mp();
  } catch (e) {
    Yr(e, Hi);
  }
}
let dr = null;
function Wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Sr | an)) === 0 && Ri(r) && (dr = [], Hr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ru(r) : r.fn = null), dr?.length > 0)) {
        Xn.clear();
        for (const o of dr)
          Hr(o);
        dr = [];
      }
    }
    dr = null;
  }
}
function Fr(e) {
  for (var t = Hi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (bs && t === Te && (n & ro) !== 0)
      return;
    if ((n & (nr | An)) !== 0) {
      if ((n & Et) === 0) return;
      t.f ^= Et;
    }
  }
  br.push(t);
}
function xu(e) {
  let t = 0, n = Jn(0), r;
  return () => {
    qp() && (c(n), Ao(() => (t === 0 && (r = wt(() => e(() => wo(n)))), t += 1, () => {
      Tr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, wo(n));
      });
    })));
  };
}
var zp = Er | Pr | qs;
function Hp(e, t, n) {
  new Ap(e, t, n);
}
class Ap {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = Ce ? Ne : null;
  /** @type {BoundaryProps} */
  #i;
  /** @type {((anchor: Node) => void)} */
  #d;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  #f = 0;
  #c = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #h = () => {
    this.#u && qr(this.#u, this.#f);
  };
  #y = xu(() => (this.#u = Jn(this.#f), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#i = n, this.#d = r, this.parent = /** @type {Effect} */
    Te.b, this.#t = !!this.#i.pending, this.#s = or(() => {
      if (Te.b = this, Ce) {
        const o = this.#a;
        zn(), /** @type {Comment} */
        o.nodeType === Nr && /** @type {Comment} */
        o.data === Mi ? this.#b() : this.#w();
      } else {
        try {
          this.#r = yt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#c > 0 ? this.#v() : this.#t = !1;
      }
    }, zp), Ce && (this.#e = Ne);
  }
  #w() {
    try {
      this.#r = yt(() => this.#d(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = yt(() => t(this.#e)), Cn.enqueue(() => {
      this.#r = this.#g(() => (Cn.ensure(), yt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : (Gn(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
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
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(t) {
    var n = Te, r = De, o = Ue;
    Qt(this.#s), zt(this.#s), Kr(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return yu(i), null;
    } finally {
      Qt(n), zt(r), Kr(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), Rp(this.#r, this.#l)), this.#n === null && (this.#n = yt(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#n && Gn(this.#n, () => {
      this.#n = null;
    }), this.#l && (this.#e.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#f += t, ws.add(this.#h);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#p || !n && !r)
      throw t;
    this.#r && (vt(this.#r), this.#r = null), this.#n && (vt(this.#n), this.#n = null), this.#o && (vt(this.#o), this.#o = null), Ce && (ut(
      /** @type {TemplateNode} */
      this.#a
    ), be(), ut(vi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        _p();
        return;
      }
      o = !0, i && kp(), Cn.ensure(), this.#f = 0, this.#o !== null && Gn(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#g(() => (this.#p = !1, yt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : this.#t = !1;
    };
    var a = De;
    try {
      zt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Yr(l, this.#s && this.#s.parent);
    } finally {
      zt(a);
    }
    r && Tr(() => {
      this.#o = this.#g(() => {
        this.#p = !0;
        try {
          return yt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Yr(
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
function Rp(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n)
    );
    t.append(n), n = o;
  }
}
function Cu(e, t, n) {
  const r = zo() ? Ho : ea;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = gt, i = (
    /** @type {Effect} */
    Te
  ), s = Ip(), a = Ce;
  Promise.all(t.map((l) => /* @__PURE__ */ jp(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & Sr) === 0 && Yr(u, i);
    }
    a && Lt(!1), o?.deactivate(), ku();
  }).catch((l) => {
    Yr(l, i);
  });
}
function Ip() {
  var e = Te, t = De, n = Ue, r = gt, o = Ce;
  if (o)
    var i = Ne;
  return function() {
    Qt(e), zt(t), Kr(n), r?.activate(), o && (Lt(!0), ut(i));
  };
}
function ku() {
  Qt(null), zt(null), Kr(null);
}
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  var t = Kt | Ut, n = De !== null && (De.f & Kt) !== 0 ? (
    /** @type {Derived} */
    De
  ) : null;
  return Te === null || n !== null && (n.f & Gt) !== 0 ? t |= Gt : Te.f |= Pr, {
    ctx: Ue,
    deps: null,
    effects: null,
    equals: du,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ht
    ),
    wv: 0,
    parent: n ?? Te,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Te
  );
  n === null && pp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Jn(
    /** @type {V} */
    ht
  ), s = null, a = !De;
  return Gp(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (h) {
      l = Promise.reject(h);
    }
    var u = () => l;
    o = s?.then(u, u) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      gt
    ), f = r.is_pending();
    a && (r.update_pending_count(1), f || d.increment());
    const p = (h, g = void 0) => {
      s = null, f || d.activate(), g ? g !== Js && (i.f |= hr, qr(i, g)) : ((i.f & hr) !== 0 && (i.f ^= hr), qr(i, h)), a && (r.update_pending_count(-1), f || d.decrement()), ku();
    };
    if (o.then(p, (h) => p(null, h || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
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
function T(e) {
  const t = /* @__PURE__ */ Ho(e);
  return Bu(t), t;
}
// @__NO_SIDE_EFFECTS__
function ea(e) {
  const t = /* @__PURE__ */ Ho(e);
  return t.equals = pu, t;
}
function $u(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Bp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Kt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ta(e) {
  var t, n = Te;
  Qt(Bp(e));
  try {
    $u(e), t = Yu(e);
  } finally {
    Qt(n);
  }
  return t;
}
function _u(e) {
  var t = ta(e);
  if (e.equals(t) || (e.v = t, e.wv = Zu()), !Or) {
    var n = (Yn || (e.f & Gt) !== 0) && e.deps !== null ? rr : Et;
    At(e, n);
  }
}
const Xn = /* @__PURE__ */ new Map();
function Jn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: du,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  const n = Jn(e);
  return Bu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Su(e, t = !1, n = !0) {
  const r = Jn(e);
  return t || (r.equals = pu), oo && n && Ue !== null && Ue.l !== null && (Ue.l.s ??= []).push(r), r;
}
function G(e, t, n = !1) {
  De !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rn || (De.f & Za) !== 0) && zo() && (De.f & (Kt | ro | Gs | Za)) !== 0 && !Dn?.includes(e) && Cp();
  let r = n ? Xt(t) : t;
  return qr(e, r);
}
function qr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Or ? Xn.set(e, t) : Xn.set(e, n), e.v = t;
    var r = Cn.ensure();
    r.capture(e, n), (e.f & Kt) !== 0 && ((e.f & Ut) !== 0 && ta(
      /** @type {Derived} */
      e
    ), At(e, (e.f & Gt) === 0 ? Et : rr)), e.wv = Zu(), Eu(e, Ut), zo() && Te !== null && (Te.f & Et) !== 0 && (Te.f & (An | nr)) === 0 && (Ft === null ? Jp([e]) : Ft.push(e));
  }
  return t;
}
function Ya(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function wo(e) {
  G(e, e.v + 1);
}
function Eu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = zo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Te)) {
        var l = (a & Ut) === 0;
        l && At(s, t), (a & Kt) !== 0 ? Eu(
          /** @type {Derived} */
          s,
          rr
        ) : l && ((a & ro) !== 0 && dr !== null && dr.push(
          /** @type {Effect} */
          s
        ), Fr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Xt(e) {
  if (typeof e != "object" || e === null || xn in e)
    return e;
  const t = Vi(e);
  if (t !== lu && t !== ap)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mo(e), o = /* @__PURE__ */ Me(0), i = gr, s = (a) => {
    if (gr === i)
      return a();
    var l = De, u = gr;
    zt(null), Ua(i);
    var d = a();
    return zt(l), Ua(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Me(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && bp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Me(u.value);
          return n.set(l, f), f;
        }) : G(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Me(ht));
            n.set(l, d), wo(o);
          }
        } else
          G(u, ht), wo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === xn)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Vn(a, l)?.writable) && (d = s(() => {
          var h = Xt(f ? a[l] : ht), g = /* @__PURE__ */ Me(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === ht ? void 0 : p;
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
          if (f !== void 0 && p !== ht)
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
        if (l === xn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== ht || Reflect.has(a, l);
        if (u !== void 0 || Te !== null && (!d || Vn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Xt(a[l]) : ht, h = /* @__PURE__ */ Me(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === ht)
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
            g !== void 0 ? G(g, ht) : h in a && (g = s(() => /* @__PURE__ */ Me(ht)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || Vn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Me(void 0)), G(f, Xt(u)), n.set(l, f));
        else {
          p = f.v !== ht;
          var y = s(() => Xt(u));
          G(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var k = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= k.v && G(k, C + 1);
          }
          wo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== ht;
        });
        for (var [u, d] of n)
          d.v !== ht && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        xp();
      }
    }
  );
}
function Fa(e) {
  try {
    if (e !== null && typeof e == "object" && xn in e)
      return e[xn];
  } catch {
  }
  return e;
}
function Kp(e, t) {
  return Object.is(Fa(e), Fa(t));
}
var Dt, Pu, Nu, Tu;
function xs() {
  if (Dt === void 0) {
    Dt = window, Pu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Nu = Vn(t, "firstChild").get, Tu = Vn(t, "nextSibling").get, Ka(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ka(n) && (n.__t = void 0);
  }
}
function Jt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return Nu.call(e);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return Tu.call(e);
}
function B(e, t) {
  if (!Ce)
    return /* @__PURE__ */ ft(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ft(Ne)
  );
  if (n === null)
    n = Ne.appendChild(Jt());
  else if (t && n.nodeType !== zi) {
    var r = Jt();
    return n?.before(r), ut(r), r;
  }
  return ut(n), n;
}
function ie(e, t = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ft(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ cn(n) : n;
  }
  if (t && Ne?.nodeType !== zi) {
    var r = Jt();
    return Ne?.before(r), ut(r), r;
  }
  return Ne;
}
function H(e, t = 1, n = !1) {
  let r = Ce ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== zi) {
    var i = Jt();
    return r === null ? o?.after(i) : r.before(i), ut(i), i;
  }
  return ut(r), /** @type {TemplateNode} */
  r;
}
function na(e) {
  e.textContent = "";
}
function Ou() {
  return !1;
}
function Zp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Tr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Wp(e) {
  Ce && /* @__PURE__ */ ft(e) !== null && na(e);
}
let qa = !1;
function Yp() {
  qa || (qa = !0, document.addEventListener(
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
function ra(e) {
  var t = De, n = Te;
  zt(null), Qt(null);
  try {
    return e();
  } finally {
    zt(t), Qt(n);
  }
}
function Lu(e) {
  Te === null && De === null && vp(), De !== null && (De.f & Gt) !== 0 && Te === null && gp(), Or && hp();
}
function Fp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function dn(e, t, n, r = !0) {
  var o = Te;
  o !== null && (o.f & an) !== 0 && (e |= an);
  var i = {
    ctx: Ue,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ut,
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
      Hr(i), i.f |= Xs;
    } catch (l) {
      throw vt(i), l;
    }
  else t !== null && Fr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Pr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && Fp(s, o), De !== null && (De.f & Kt) !== 0 && (e & nr) === 0)) {
      var a = (
        /** @type {Derived} */
        De
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function qp() {
  return De !== null && !rn;
}
function Mu(e) {
  const t = dn(Di, null, !1);
  return At(t, Et), t.teardown = e, t;
}
function ot(e) {
  Lu();
  var t = (
    /** @type {Effect} */
    Te.f
  ), n = !De && (t & An) !== 0 && (t & Xs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ue
    );
    (r.e ??= []).push(e);
  } else
    return Vu(e);
}
function Vu(e) {
  return dn(Fs | uu, e, !1);
}
function Du(e) {
  return Lu(), dn(Di | uu, e, !0);
}
function oa(e) {
  Cn.ensure();
  const t = dn(nr | Pr, e, !0);
  return () => {
    vt(t);
  };
}
function Xp(e) {
  Cn.ensure();
  const t = dn(nr | Pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Gn(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function io(e) {
  return dn(Fs, e, !1);
}
function Gp(e) {
  return dn(Gs | Pr, e, !0);
}
function Ao(e, t = 0) {
  return dn(Di | t, e, !0);
}
function Ee(e, t = [], n = []) {
  Cu(t, n, (r) => {
    dn(Di, () => e(...r.map(c)), !0);
  });
}
function or(e, t = 0) {
  var n = dn(ro | t, e, !0);
  return n;
}
function yt(e, t = !0) {
  return dn(An | Pr, e, !0, t);
}
function zu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Or, r = De;
    Ga(!0), zt(null);
    try {
      t.call(null);
    } finally {
      Ga(n), zt(r);
    }
  }
}
function Hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ra(() => {
      o.abort(Js);
    });
    var r = n.next;
    (n.f & nr) !== 0 ? n.parent = null : vt(n, t), n = r;
  }
}
function Up(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & An) === 0 && vt(t), t = n;
  }
}
function vt(e, t = !0) {
  var n = !1;
  (t || (e.f & cp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Au(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Hu(e, t && !n), mi(e, 0), At(e, Sr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  zu(e);
  var o = e.parent;
  o !== null && o.first !== null && Ru(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Au(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(e)
    );
    e.remove(), e = n;
  }
}
function Ru(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Gn(e, t) {
  var n = [];
  ia(e, n, !0), Iu(n, () => {
    vt(e), t && t();
  });
}
function Iu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ia(e, t, n) {
  if ((e.f & an) === 0) {
    if (e.f ^= an, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Er) !== 0 || (r.f & An) !== 0;
      ia(r, t, i ? n : !1), r = o;
    }
  }
}
function Ai(e) {
  ju(e, !0);
}
function ju(e, t) {
  if ((e.f & an) !== 0) {
    e.f ^= an, (e.f & Et) === 0 && (At(e, Ut), Fr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Er) !== 0 || (n.f & An) !== 0;
      ju(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let zr = !1;
function Xa(e) {
  zr = e;
}
let Or = !1;
function Ga(e) {
  Or = e;
}
let De = null, rn = !1;
function zt(e) {
  De = e;
}
let Te = null;
function Qt(e) {
  Te = e;
}
let Dn = null;
function Bu(e) {
  De !== null && (Dn === null ? Dn = [e] : Dn.push(e));
}
let Ot = null, jt = 0, Ft = null;
function Jp(e) {
  Ft = e;
}
let Ku = 1, xo = 0, gr = xo;
function Ua(e) {
  gr = e;
}
let Yn = !1;
function Zu() {
  return ++Ku;
}
function Ri(e) {
  var t = e.f;
  if ((t & Ut) !== 0)
    return !0;
  if ((t & rr) !== 0) {
    var n = e.deps, r = (t & Gt) !== 0;
    if (n !== null) {
      var o, i, s = (t & gi) !== 0, a = r && Te !== null && !Yn, l = n.length;
      if ((s || a) && (Te === null || (Te.f & Sr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= gi), a && d !== null && (d.f & Gt) === 0 && (u.f ^= Gt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Ri(
          /** @type {Derived} */
          i
        ) && _u(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Te !== null && !Yn) && At(e, Et);
  }
  return !1;
}
function Wu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Dn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Kt) !== 0 ? Wu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? At(i, Ut) : (i.f & Et) !== 0 && At(i, rr), Fr(
        /** @type {Effect} */
        i
      ));
    }
}
function Yu(e) {
  var t = Ot, n = jt, r = Ft, o = De, i = Yn, s = Dn, a = Ue, l = rn, u = gr, d = e.f;
  Ot = /** @type {null | Value[]} */
  null, jt = 0, Ft = null, Yn = (d & Gt) !== 0 && (rn || !zr || De === null), De = (d & (An | nr)) === 0 ? e : null, Dn = null, Kr(e.ctx), rn = !1, gr = ++xo, e.ac !== null && (ra(() => {
    e.ac.abort(Js);
  }), e.ac = null);
  try {
    e.f |= ys;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (Ot !== null) {
      var g;
      if (mi(e, jt), h !== null && jt > 0)
        for (h.length = jt + Ot.length, g = 0; g < Ot.length; g++)
          h[jt + g] = Ot[g];
      else
        e.deps = h = Ot;
      if (!Yn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = jt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && jt < h.length && (mi(e, jt), h.length = jt);
    if (zo() && Ft !== null && !rn && h !== null && (e.f & (Kt | rr | Ut)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ft.length; g++)
        Wu(
          Ft[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, Ft !== null && (r === null ? r = Ft : r.push(.../** @type {Source[]} */
    Ft))), (e.f & hr) !== 0 && (e.f ^= hr), p;
  } catch (y) {
    return yu(y);
  } finally {
    e.f ^= ys, Ot = t, jt = n, Ft = r, De = o, Yn = i, Dn = s, Kr(a), rn = l, gr = u;
  }
}
function Qp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = sp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Kt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ot === null || !Ot.includes(t)) && (At(t, rr), (t.f & (Gt | gi)) === 0 && (t.f ^= gi), $u(
    /** @type {Derived} **/
    t
  ), mi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function mi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Qp(e, n[r]);
}
function Hr(e) {
  var t = e.f;
  if ((t & Sr) === 0) {
    At(e, Et);
    var n = Te, r = zr;
    Te = e, zr = !0;
    try {
      (t & ro) !== 0 ? Up(e) : Hu(e), zu(e);
      var o = Yu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ku;
      var i;
      ip && Sp && (e.f & Ut) !== 0 && e.deps;
    } finally {
      zr = r, Te = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Kt) !== 0;
  if (De !== null && !rn) {
    var r = Te !== null && (Te.f & Sr) !== 0;
    if (!r && !Dn?.includes(e)) {
      var o = De.deps;
      if ((De.f & ys) !== 0)
        e.rv < xo && (e.rv = xo, Ot === null && o !== null && o[jt] === e ? jt++ : Ot === null ? Ot = [e] : (!Yn || !Ot.includes(e)) && Ot.push(e));
      else {
        (De.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [De] : i.includes(De) || i.push(De);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & Gt) === 0 && (s.f ^= Gt);
  }
  if (Or) {
    if (Xn.has(e))
      return Xn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & Et) === 0 && s.reactions !== null || Fu(s)) && (l = ta(s)), Xn.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, Ri(s) && _u(s));
  if ((e.f & hr) !== 0)
    throw e.v;
  return e.v;
}
function Fu(e) {
  if (e.v === ht) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xn.has(t) || (t.f & Kt) !== 0 && Fu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function wt(e) {
  var t = rn;
  try {
    return rn = !0, e();
  } finally {
    rn = t;
  }
}
const eh = -7169;
function At(e, t) {
  e.f = e.f & eh | t;
}
function th(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function sa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (xn in e)
      Cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && xn in n && Cs(n);
      }
  }
}
function Cs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Cs(e[r], t);
      } catch {
      }
    const n = Vi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = au(n);
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
const qu = /* @__PURE__ */ new Set(), ks = /* @__PURE__ */ new Set();
function aa(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ho.call(t, i), !i.cancelBubble)
      return ra(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Tr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function $s(e, t, n, r = {}) {
  var o = aa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ja(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = aa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Mu(() => {
    t.removeEventListener(e, s, i);
  });
}
function ir(e) {
  for (var t = 0; t < e.length; t++)
    qu.add(e[t]);
  for (var n of ks)
    n(e);
}
let Qa = null;
function ho(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Qa = e;
  var s = 0, a = Qa === e && e.__root;
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
    Br(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = De, f = Te;
    zt(null), Qt(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Mo(y)) {
              var [w, ...k] = y;
              w.apply(i, [e, ...k]);
            } else
              y.call(i, e);
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
      e.__root = t, delete e.currentTarget, zt(d), Qt(f);
    }
  }
}
function la(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Rt(e, t) {
  var n = (
    /** @type {Effect} */
    Te
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & iu) !== 0, r = (t & tp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return Rt(Ne, null), Ne;
    o === void 0 && (o = la(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ft(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Pu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Rt(a, l);
    } else
      Rt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function nh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & iu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return Rt(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        la(i)
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
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Rt(d, f);
    } else
      Rt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ nh(e, t, "svg");
}
function Pe(e = "") {
  if (!Ce) {
    var t = Jt(e + "");
    return Rt(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== zi && (n.before(n = Jt()), ut(n)), Rt(n, n), n;
}
function Oe() {
  if (Ce)
    return Rt(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Jt();
  return e.append(t, n), Rt(t, n), e;
}
function V(e, t) {
  if (Ce) {
    Te.nodes_end = Ne, zn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function rh(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const oh = [
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
function ih(e) {
  return oh.includes(e);
}
const sh = {
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
function ah(e) {
  return e = e.toLowerCase(), sh[e] ?? e;
}
const lh = ["touchstart", "touchmove"];
function uh(e) {
  return lh.includes(e);
}
const ch = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function dh(e) {
  return ch.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function qe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Xu(e, t) {
  return Gu(e, t);
}
function fh(e, t) {
  xs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ft(n)
    ); i && (i.nodeType !== Nr || /** @type {Comment} */
    i.data !== su); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ cn(i);
    if (!i)
      throw wr;
    Lt(!0), ut(
      /** @type {Comment} */
      i
    );
    const s = Gu(e, { ...t, anchor: i });
    return Lt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== wr && console.warn("Failed to hydrate: ", s), t.recover === !1 && yp(), xs(), na(n), Lt(!1), Xu(e, t);
  } finally {
    Lt(r), ut(o);
  }
}
const Mr = /* @__PURE__ */ new Map();
function Gu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  xs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = uh(h);
        t.addEventListener(h, ho, { passive: g });
        var y = Mr.get(h);
        y === void 0 ? (document.addEventListener(h, ho, { passive: g }), Mr.set(h, 1)) : Mr.set(h, y + 1);
      }
    }
  };
  l(Ys(qu)), ks.add(l);
  var u = void 0, d = Xp(() => {
    var f = n ?? t.appendChild(Jt());
    return Hp(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          ce({});
          var h = (
            /** @type {ComponentContext} */
            Ue
          );
          h.c = i;
        }
        if (o && (r.$$events = o), Ce && Rt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, Ce && (Te.nodes_end = Ne, Ne === null || Ne.nodeType !== Nr || /** @type {Comment} */
        Ne.data !== Ws))
          throw Do(), wr;
        i && de();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, ho);
        var h = (
          /** @type {number} */
          Mr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, ho), Mr.delete(p)) : Mr.set(p, h);
      }
      ks.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return _s.set(u, d), u;
}
let _s = /* @__PURE__ */ new WeakMap();
function ph(e, t) {
  const n = _s.get(e);
  return n ? (_s.delete(e), n(t)) : Promise.resolve();
}
function it(e, t, ...n) {
  var r = e, o = xt, i;
  or(() => {
    o !== (o = t()) && (i && (vt(i), i = null), i = yt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Er), Ce && (r = Ne);
}
function sr(e) {
  Ue === null && Qs(), oo && Ue.l !== null ? hh(Ue).m.push(e) : ot(() => {
    const t = wt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ii(e) {
  Ue === null && Qs(), sr(() => () => wt(e));
}
function hh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  Ce && zn();
  var r = e, o = null, i = null, s = ht, a = n ? Er : 0, l = !1;
  const u = (p, h = !0) => {
    l = !0, f(h, p);
  };
  function d() {
    var p = s ? o : i, h = s ? i : o;
    p && Ai(p), h && Gn(h, () => {
      s ? i = null : o = null;
    });
  }
  const f = (p, h) => {
    if (s === (s = p)) return;
    let g = !1;
    if (Ce) {
      const k = cu(r) === Mi;
      !!s === k && (r = vi(), ut(r), Lt(!1), g = !0);
    }
    var y = Ou(), w = r;
    s ? o ??= h && yt(() => h(w)) : i ??= h && yt(() => h(w)), y || d(), g && Lt(!0);
  };
  or(() => {
    l = !1, t(u), l || f(null, null);
  }, a), Ce && (r = Ne);
}
function gh(e, t) {
  Ce && ut(
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
function Xr(e, t) {
  return t;
}
function vh(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    ia(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    na(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), yn(e, t[0].prev, t[i - 1].next);
  }
  Iu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), yn(e, d.prev, d.next)), vt(d.e, !a);
    }
  });
}
function Pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & ru) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Ce ? ut(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ft(u)
    ) : u.appendChild(Jt());
  }
  Ce && zn();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ ea(() => {
    var k = n();
    return Mo(k) ? k : k == null ? [] : Ys(k);
  }), g, y;
  function w() {
    mh(
      y,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? Ai(d) : d = yt(() => i(s)) : d !== null && Gn(d, () => {
      d = null;
    }));
  }
  or(() => {
    y ??= /** @type {Effect} */
    Te, g = /** @type {V[]} */
    c(h);
    var k = g.length;
    if (f && k === 0)
      return;
    f = k === 0;
    let C = !1;
    if (Ce) {
      var x = cu(s) === Mi;
      x !== (k === 0) && (s = vi(), ut(s), Lt(!1), C = !0);
    }
    if (Ce) {
      for (var S = null, O, E = 0; E < k; E++) {
        if (Ne.nodeType === Nr && /** @type {Comment} */
        Ne.data === Ws) {
          s = /** @type {Comment} */
          Ne, C = !0, Lt(!1);
          break;
        }
        var L = g[E], D = r(L, E);
        O = Uu(
          Ne,
          a,
          S,
          null,
          L,
          D,
          E,
          o,
          t,
          n
        ), a.items.set(D, O), S = O;
      }
      k > 0 && ut(vi());
    }
    Ce ? k === 0 && i && (d = yt(() => i(s))) : w(), C && Lt(!0), c(h);
  }), Ce && (s = Ne);
}
function mh(e, t, n, r, o, i, s, a, l) {
  var u = (s & Xf) !== 0, d = (s & (Ks | Zs)) !== 0, f = t.length, p = n.items, h = n.first, g = h, y, w = null, k, C = [], x = [], S, O, E, L;
  if (u)
    for (L = 0; L < f; L += 1)
      S = t[L], O = a(S, L), E = p.get(O), E !== void 0 && (E.a?.measure(), (k ??= /* @__PURE__ */ new Set()).add(E));
  for (L = 0; L < f; L += 1) {
    if (S = t[L], O = a(S, L), E = p.get(O), E === void 0) {
      var D = r.get(O);
      if (D !== void 0) {
        r.delete(O), p.set(O, D);
        var Z = w ? w.next : g;
        yn(n, w, D), yn(n, D, Z), rs(D, Z, o), w = D;
      } else {
        var q = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        w = Uu(
          q,
          n,
          w,
          w === null ? n.first : w.next,
          S,
          O,
          L,
          i,
          s,
          l
        );
      }
      p.set(O, w), C = [], x = [], g = w.next;
      continue;
    }
    if (d && yh(E, S, L, s), (E.e.f & an) !== 0 && (Ai(E.e), u && (E.a?.unfix(), (k ??= /* @__PURE__ */ new Set()).delete(E))), E !== g) {
      if (y !== void 0 && y.has(E)) {
        if (C.length < x.length) {
          var R = x[0], _;
          w = R.prev;
          var $ = C[0], b = C[C.length - 1];
          for (_ = 0; _ < C.length; _ += 1)
            rs(C[_], R, o);
          for (_ = 0; _ < x.length; _ += 1)
            y.delete(x[_]);
          yn(n, $.prev, b.next), yn(n, w, $), yn(n, b, R), g = R, w = b, L -= 1, C = [], x = [];
        } else
          y.delete(E), rs(E, g, o), yn(n, E.prev, E.next), yn(n, E, w === null ? n.first : w.next), yn(n, w, E), w = E;
        continue;
      }
      for (C = [], x = []; g !== null && g.k !== O; )
        (g.e.f & an) === 0 && (y ??= /* @__PURE__ */ new Set()).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      E = g;
    }
    C.push(E), w = E, g = E.next;
  }
  if (g !== null || y !== void 0) {
    for (var P = y === void 0 ? [] : Ys(y); g !== null; )
      (g.e.f & an) === 0 && P.push(g), g = g.next;
    var N = P.length;
    if (N > 0) {
      var z = (s & ru) !== 0 && f === 0 ? o : null;
      if (u) {
        for (L = 0; L < N; L += 1)
          P[L].a?.measure();
        for (L = 0; L < N; L += 1)
          P[L].a?.fix();
      }
      vh(n, P, z);
    }
  }
  u && Tr(() => {
    if (k !== void 0)
      for (E of k)
        E.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var j of r.values())
    vt(j.e);
  r.clear();
}
function yh(e, t, n, r) {
  (r & Ks) !== 0 && qr(e.v, t), (r & Zs) !== 0 ? qr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Uu(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & Ks) !== 0, p = (l & Gf) === 0, h = f ? p ? /* @__PURE__ */ Su(o, !1, !1) : Jn(o) : o, g = (l & Zs) === 0 ? s : Jn(s), y = {
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
      var w = document.createDocumentFragment();
      w.append(e = Jt());
    }
    return y.e = yt(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), Ce), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? d || (t.first = y) : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function rs(e, t, n) {
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
      /* @__PURE__ */ cn(i)
    );
    o.before(i), i = s;
  }
}
function yn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ua(e, t, n = !1, r = !1, o = !1) {
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
    if (a.nodes_start !== null && (Au(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Ne.data;
        for (var l = zn(), u = l; l !== null && (l.nodeType !== Nr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ cn(l);
        if (l === null)
          throw Do(), wr;
        Rt(Ne, u), i = ut(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = la(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ ft(f)), Rt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ft(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ft(f)
          );
      else
        i.before(f);
    }
  });
}
function ji(e, t, n) {
  Ce && zn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (Gn(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  or(() => {
    if (o !== (o = t())) {
      var u = Ou();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = Jt()), i && gt.skipped_effects.add(i)), a = yt(() => n(d, o));
      }
      u ? gt.add_callback(l) : l();
    }
  }, Er), Ce && (r = Ne);
}
function wh(e, t, n, r, o, i) {
  let s = Ce;
  Ce && zn();
  var a, l, u = null;
  Ce && Ne.nodeType === fp && (u = /** @type {Element} */
  Ne, zn());
  var d = (
    /** @type {TemplateNode} */
    Ce ? Ne : e
  ), f;
  or(() => {
    const p = t() || null;
    var h = p === "svg" ? rp : null;
    p !== a && (f && (p === null ? Gn(f, () => {
      f = null, l = null;
    }) : p === l ? Ai(f) : vt(f)), p && p !== l && (f = yt(() => {
      if (u = Ce ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, p) : document.createElement(p), Rt(u, u), r) {
        Ce && dh(p) && u.append(document.createComment(""));
        var g = (
          /** @type {TemplateNode} */
          Ce ? /* @__PURE__ */ ft(u) : u.appendChild(Jt())
        );
        Ce && (g === null ? Lt(!1) : ut(g)), r(u, g);
      }
      Te.nodes_end = u, d.before(u);
    })), a = p, a && (l = a));
  }, Er), s && (Lt(!0), ut(d));
}
function Ke(e, t) {
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
function St(e, t, n) {
  io(() => {
    var r = wt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Ao(() => {
        var s = n();
        sa(s), o && fu(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function bh(e, t) {
  var n = void 0, r;
  or(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = yt(() => {
      io(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ju(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ju(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function xh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ju(e)) && (r && (r += " "), r += t);
  return r;
}
function Rn(e) {
  return typeof e == "object" ? xh(e) : e ?? "";
}
const el = [...` 	
\r\f \v\uFEFF`];
function Ch(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || el.includes(r[s - 1])) && (a === r.length || el.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function tl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function os(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function kh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(os)), o && l.push(...Object.keys(o).map(os));
      var u = 0, d = -1;
      const y = e.length;
      for (var f = 0; f < y; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === y - 1) {
            if (d !== -1) {
              var h = os(e.substring(u, d).trim());
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
    return r && (n += tl(r)), o && (n += tl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function It(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = Ch(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function is(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ct(e, t, n, r) {
  var o = e.__style;
  if (Ce || o !== t) {
    var i = kh(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (is(e, n?.[0], r[0]), is(e, n?.[1], r[1], "important")) : is(e, n, r));
  return r;
}
function Ss(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Mo(t))
      return $p();
    for (var r of e.options)
      r.selected = t.includes(nl(r));
    return;
  }
  for (r of e.options) {
    var o = nl(r);
    if (Kp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function $h(e) {
  var t = new MutationObserver(() => {
    Ss(e, e.__value);
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
  }), Mu(() => {
    t.disconnect();
  });
}
function nl(e) {
  return "__value" in e ? e.__value : e.value;
}
const Zn = Symbol("class"), bn = Symbol("style"), Qu = Symbol("is custom element"), ec = Symbol("is html");
function vr(e) {
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
    e.__on_r = n, Lp(n), Yp();
  }
}
function si(e, t) {
  var n = Bi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function rl(e, t) {
  var n = Bi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function _h(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Bi(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[dp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Sh(e, t, n, r, o = !1, i = !1) {
  if (Ce && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || vr(s);
  }
  var l = Bi(e), u = l[Qu], d = !l[ec];
  let f = Ce && u;
  f && Lt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Rn(n.class) : (r || n[Zn]) && (n.class = null), n[bn] && (n.style ??= null);
  var y = tc(e);
  for (const E in n) {
    let L = n[E];
    if (h && E === "value" && L == null) {
      e.value = e.__value = "", p[E] = L;
      continue;
    }
    if (E === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      It(e, w, L, r, t?.[Zn], n[Zn]), p[E] = L, p[Zn] = n[Zn];
      continue;
    }
    if (E === "style") {
      Ct(e, L, t?.[bn], n[bn]), p[E] = L, p[bn] = n[bn];
      continue;
    }
    var k = p[E];
    if (!(L === k && !(L === void 0 && e.hasAttribute(E)))) {
      p[E] = L;
      var C = E[0] + E[1];
      if (C !== "$$")
        if (C === "on") {
          const D = {}, Z = "$$" + E;
          let q = E.slice(2);
          var x = ih(q);
          if (rh(q) && (q = q.slice(0, -7), D.capture = !0), !x && k) {
            if (L != null) continue;
            e.removeEventListener(q, p[Z], D), p[Z] = null;
          }
          if (L != null)
            if (x)
              e[`__${q}`] = L, ir([q]);
            else {
              let R = function(_) {
                p[E].call(this, _);
              };
              p[Z] = aa(q, e, R, D);
            }
          else x && (e[`__${q}`] = void 0);
        } else if (E === "style")
          $e(e, E, L);
        else if (E === "autofocus")
          Zp(
            /** @type {HTMLElement} */
            e,
            !!L
          );
        else if (!u && (E === "__value" || E === "value" && L != null))
          e.value = e.__value = L;
        else if (E === "selected" && h)
          _h(
            /** @type {HTMLOptionElement} */
            e,
            L
          );
        else {
          var S = E;
          d || (S = ah(S));
          var O = S === "defaultValue" || S === "defaultChecked";
          if (L == null && !u && !O)
            if (l[E] = null, S === "value" || S === "checked") {
              let D = (
                /** @type {HTMLInputElement} */
                e
              );
              const Z = t === void 0;
              if (S === "value") {
                let q = D.defaultValue;
                D.removeAttribute(S), D.defaultValue = q, D.value = D.__value = Z ? q : null;
              } else {
                let q = D.defaultChecked;
                D.removeAttribute(S), D.defaultChecked = q, D.checked = Z ? q : !1;
              }
            } else
              e.removeAttribute(E);
          else O || y.includes(S) && (u || typeof L != "string") ? (e[S] = L, S in l && (l[S] = ht)) : typeof L != "function" && $e(e, S, L);
        }
    }
  }
  return f && Lt(!0), p;
}
function pt(e, t, n = [], r = [], o, i = !1, s = !1) {
  Cu(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (or(() => {
      var h = t(...a.map(c)), g = Sh(
        e,
        l,
        h,
        o,
        i,
        s
      );
      f && d && "value" in h && Ss(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let w of Object.getOwnPropertySymbols(u))
        h[w] || vt(u[w]);
      for (let w of Object.getOwnPropertySymbols(h)) {
        var y = h[w];
        w.description === op && (!l || y !== l[w]) && (u[w] && vt(u[w]), u[w] = yt(() => bh(e, () => y))), g[w] = y;
      }
      l = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      io(() => {
        Ss(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), $h(p);
      });
    }
    f = !0;
  });
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Qu]: e.nodeName.includes("-"),
      [ec]: e.namespaceURI === np
    }
  );
}
var ol = /* @__PURE__ */ new Map();
function tc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ol.get(t);
  if (n) return n;
  ol.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = au(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Vi(o);
  }
  return n;
}
class ca {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #a;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#a = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#i().observe(t, this.#a), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #i() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          ca.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Eh = /* @__PURE__ */ new ca({
  box: "border-box"
});
function il(e, t, n) {
  var r = Eh.observe(e, () => n(e[t]));
  io(() => (wt(() => n(e[t])), r));
}
function sl(e, t) {
  return e === t || e?.[xn] === t;
}
function Zt(e = {}, t, n, r) {
  return io(() => {
    var o, i;
    return Ao(() => {
      o = i, i = [], wt(() => {
        e !== n(...i) && (t(e, ...i), o && sl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Tr(() => {
        i && sl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function nc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ue
  ), n = t.l.u;
  if (!n) return;
  let r = () => sa(t.s);
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
  n.b.length && Du(() => {
    al(t, r), hi(n.b);
  }), ot(() => {
    const o = wt(() => n.m.map(lp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && ot(() => {
    al(t, r), hi(n.a);
  });
}
function al(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Jo = !1;
function Ph(e) {
  var t = Jo;
  try {
    return Jo = !1, [e(), Jo];
  } finally {
    Jo = t;
  }
}
const Nh = {
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
    Nh
  );
}
const Th = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Te;
      try {
        Qt(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          ou
        );
      } finally {
        Qt(r);
      }
    }
    return e.special[t](n), Ya(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ya(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ll(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Jn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Te
      )
    },
    Th
  );
}
const Oh = {
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
      const i = Vn(o, t);
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
        const o = Vn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === xn || t === Us) return !1;
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
function Xe(...e) {
  return new Proxy({ props: e }, Oh);
}
function m(e, t, n, r) {
  var o = !oo || (n & Jf) !== 0, i = (n & Qf) !== 0, s = (n & ep) !== 0, a = (
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
    var f = xn in e || Us in e;
    d = Vn(e, t)?.set ?? (f && t in e ? (x) => e[t] = x : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Ph(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && wp(), d(p)));
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
  }, o && (n & ou) === 0)
    return g;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, S) {
        return arguments.length > 0 ? ((!o || !S || y || h) && d(S ? g() : x), x) : g();
      }
    );
  }
  var w = !1, k = ((n & Uf) !== 0 ? Ho : ea)(() => (w = !1, g()));
  i && c(k);
  var C = (
    /** @type {Effect} */
    Te
  );
  return (
    /** @type {() => V} */
    function(x, S) {
      if (arguments.length > 0) {
        const O = S ? c(k) : o && i ? Xt(x) : x;
        return G(k, O), w = !0, a !== void 0 && (a = O), x;
      }
      return Or && w || (C.f & Sr) !== 0 ? k.v : c(k);
    }
  );
}
function Lh(e) {
  return new Mh(e);
}
class Mh {
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
      var a = /* @__PURE__ */ Su(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Us ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return G(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? fh : Xu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Br(this, i, {
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
      ph(this.#e);
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
let rc;
typeof HTMLElement == "function" && (rc = class extends HTMLElement {
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
          r !== "default" && (i.name = r), V(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Vh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ai(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Lh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = oa(() => {
        Ao(() => {
          this.$$r = !0;
          for (const r of pi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ai(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ai(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return pi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ai(e, t, n, r) {
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
function Vh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends rc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return pi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return pi(t).forEach((a) => {
    Br(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ai(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Vn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Br(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Dh = { value: () => {
} };
function Ki() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new li(n);
}
function li(e) {
  this._ = e;
}
function zh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
li.prototype = Ki.prototype = {
  constructor: li,
  on: function(e, t) {
    var n = this._, r = zh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Hh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ul(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ul(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new li(e);
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
function Hh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ul(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Dh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Es = "http://www.w3.org/1999/xhtml";
const cl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), cl.hasOwnProperty(t) ? { space: cl[t], local: e } : e;
}
function Ah(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Es && t.documentElement.namespaceURI === Es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Rh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function oc(e) {
  var t = Zi(e);
  return (t.local ? Rh : Ah)(t);
}
function Ih() {
}
function da(e) {
  return e == null ? Ih : function() {
    return this.querySelector(e);
  };
}
function jh(e) {
  typeof e != "function" && (e = da(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Wt(r, this._parents);
}
function Bh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Kh() {
  return [];
}
function ic(e) {
  return e == null ? Kh : function() {
    return this.querySelectorAll(e);
  };
}
function Zh(e) {
  return function() {
    return Bh(e.apply(this, arguments));
  };
}
function Wh(e) {
  typeof e == "function" ? e = Zh(e) : e = ic(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Wt(r, o);
}
function sc(e) {
  return function() {
    return this.matches(e);
  };
}
function ac(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Yh = Array.prototype.find;
function Fh(e) {
  return function() {
    return Yh.call(this.children, e);
  };
}
function qh() {
  return this.firstElementChild;
}
function Xh(e) {
  return this.select(e == null ? qh : Fh(typeof e == "function" ? e : ac(e)));
}
var Gh = Array.prototype.filter;
function Uh() {
  return Array.from(this.children);
}
function Jh(e) {
  return function() {
    return Gh.call(this.children, e);
  };
}
function Qh(e) {
  return this.selectAll(e == null ? Uh : Jh(typeof e == "function" ? e : ac(e)));
}
function eg(e) {
  typeof e != "function" && (e = sc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Wt(r, this._parents);
}
function lc(e) {
  return new Array(e.length);
}
function tg() {
  return new Wt(this._enter || this._groups.map(lc), this._parents);
}
function yi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
yi.prototype = {
  constructor: yi,
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
function ng(e) {
  return function() {
    return e;
  };
}
function rg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new yi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function og(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new yi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function ig(e) {
  return e.__data__;
}
function sg(e, t) {
  if (!arguments.length) return Array.from(this, ig);
  var n = t ? og : rg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ng(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = ag(e.call(d, d && d.__data__, u, r)), g = h.length, y = a[u] = new Array(g), w = s[u] = new Array(g), k = l[u] = new Array(p);
    n(d, f, y, w, k, h, t);
    for (var C = 0, x = 0, S, O; C < g; ++C)
      if (S = y[C]) {
        for (C >= x && (x = C + 1); !(O = w[x]) && ++x < g; ) ;
        S._next = O || null;
      }
  }
  return s = new Wt(s, r), s._enter = a, s._exit = l, s;
}
function ag(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function lg() {
  return new Wt(this._exit || this._groups.map(lc), this._parents);
}
function ug(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function cg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Wt(a, this._parents);
}
function dg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function fg(e) {
  e || (e = pg);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Wt(o, this._parents).order();
}
function pg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function gg() {
  return Array.from(this);
}
function vg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function mg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function yg() {
  return !this.node();
}
function wg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function bg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function xg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function kg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function $g(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function _g(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Sg(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? xg : bg : typeof t == "function" ? n.local ? _g : $g : n.local ? kg : Cg)(n, t));
}
function uc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Eg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Pg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ng(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Tg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Eg : typeof t == "function" ? Ng : Pg)(e, t, n ?? "")) : Gr(this.node(), e);
}
function Gr(e, t) {
  return e.style.getPropertyValue(t) || uc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Og(e) {
  return function() {
    delete this[e];
  };
}
function Lg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Vg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Mg : Lg)(e, t)) : this.node()[e];
}
function cc(e) {
  return e.trim().split(/^|\s+/);
}
function fa(e) {
  return e.classList || new dc(e);
}
function dc(e) {
  this._node = e, this._names = cc(e.getAttribute("class") || "");
}
dc.prototype = {
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
function fc(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function pc(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Dg(e) {
  return function() {
    fc(this, e);
  };
}
function zg(e) {
  return function() {
    pc(this, e);
  };
}
function Hg(e, t) {
  return function() {
    (t.apply(this, arguments) ? fc : pc)(this, e);
  };
}
function Ag(e, t) {
  var n = cc(e + "");
  if (arguments.length < 2) {
    for (var r = fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Hg : t ? Dg : zg)(n, t));
}
function Rg() {
  this.textContent = "";
}
function Ig(e) {
  return function() {
    this.textContent = e;
  };
}
function jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Bg(e) {
  return arguments.length ? this.each(e == null ? Rg : (typeof e == "function" ? jg : Ig)(e)) : this.node().textContent;
}
function Kg() {
  this.innerHTML = "";
}
function Zg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Wg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Yg(e) {
  return arguments.length ? this.each(e == null ? Kg : (typeof e == "function" ? Wg : Zg)(e)) : this.node().innerHTML;
}
function Fg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qg() {
  return this.each(Fg);
}
function Xg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Gg() {
  return this.each(Xg);
}
function Ug(e) {
  var t = typeof e == "function" ? e : oc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Jg() {
  return null;
}
function Qg(e, t) {
  var n = typeof e == "function" ? e : oc(e), r = t == null ? Jg : typeof t == "function" ? t : da(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ev() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function tv() {
  return this.each(ev);
}
function nv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function rv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ov(e) {
  return this.select(e ? rv : nv);
}
function iv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function sv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function av(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function lv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function uv(e, t, n) {
  return function() {
    var r = this.__on, o, i = sv(t);
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
function cv(e, t, n) {
  var r = av(e + ""), o, i = r.length, s;
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
  for (a = t ? uv : lv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function hc(e, t, n) {
  var r = uc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function dv(e, t) {
  return function() {
    return hc(this, e, t);
  };
}
function fv(e, t) {
  return function() {
    return hc(this, e, t.apply(this, arguments));
  };
}
function pv(e, t) {
  return this.each((typeof t == "function" ? fv : dv)(e, t));
}
function* hv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var gc = [null];
function Wt(e, t) {
  this._groups = e, this._parents = t;
}
function Ro() {
  return new Wt([[document.documentElement]], gc);
}
function gv() {
  return this;
}
Wt.prototype = Ro.prototype = {
  constructor: Wt,
  select: jh,
  selectAll: Wh,
  selectChild: Xh,
  selectChildren: Qh,
  filter: eg,
  data: sg,
  enter: tg,
  exit: lg,
  join: ug,
  merge: cg,
  selection: gv,
  order: dg,
  sort: fg,
  call: hg,
  nodes: gg,
  node: vg,
  size: mg,
  empty: yg,
  each: wg,
  attr: Sg,
  style: Tg,
  property: Vg,
  classed: Ag,
  text: Bg,
  html: Yg,
  raise: qg,
  lower: Gg,
  append: Ug,
  insert: Qg,
  remove: tv,
  clone: ov,
  datum: iv,
  on: cv,
  dispatch: pv,
  [Symbol.iterator]: hv
};
function qt(e) {
  return typeof e == "string" ? new Wt([[document.querySelector(e)]], [document.documentElement]) : new Wt([[e]], gc);
}
function vv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function nn(e, t) {
  if (e = vv(e), t === void 0 && (t = e.currentTarget), t) {
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
const mv = { passive: !1 }, Co = { capture: !0, passive: !1 };
function ss(e) {
  e.stopImmediatePropagation();
}
function Ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = qt(e).on("dragstart.drag", Ar, Co);
  "onselectstart" in t ? n.on("selectstart.drag", Ar, Co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function mc(e, t) {
  var n = e.document.documentElement, r = qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Ar, Co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Qo = (e) => () => e;
function Ps(e, {
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
Ps.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function yv(e) {
  return !e.ctrlKey && !e.button;
}
function wv() {
  return this.parentNode;
}
function bv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function xv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cv() {
  var e = yv, t = wv, n = bv, r = xv, o = {}, i = Ki("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(S) {
    S.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", k, mv).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(S, O) {
    if (!(d || !e.call(this, S, O))) {
      var E = x(this, t.call(this, S, O), S, O, "mouse");
      E && (qt(S.view).on("mousemove.drag", g, Co).on("mouseup.drag", y, Co), vc(S.view), ss(S), u = !1, a = S.clientX, l = S.clientY, E("start", S));
    }
  }
  function g(S) {
    if (Ar(S), !u) {
      var O = S.clientX - a, E = S.clientY - l;
      u = O * O + E * E > f;
    }
    o.mouse("drag", S);
  }
  function y(S) {
    qt(S.view).on("mousemove.drag mouseup.drag", null), mc(S.view, u), Ar(S), o.mouse("end", S);
  }
  function w(S, O) {
    if (e.call(this, S, O)) {
      var E = S.changedTouches, L = t.call(this, S, O), D = E.length, Z, q;
      for (Z = 0; Z < D; ++Z)
        (q = x(this, L, S, O, E[Z].identifier, E[Z])) && (ss(S), q("start", S, E[Z]));
    }
  }
  function k(S) {
    var O = S.changedTouches, E = O.length, L, D;
    for (L = 0; L < E; ++L)
      (D = o[O[L].identifier]) && (Ar(S), D("drag", S, O[L]));
  }
  function C(S) {
    var O = S.changedTouches, E = O.length, L, D;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < E; ++L)
      (D = o[O[L].identifier]) && (ss(S), D("end", S, O[L]));
  }
  function x(S, O, E, L, D, Z) {
    var q = i.copy(), R = nn(Z || E, O), _, $, b;
    if ((b = n.call(S, new Ps("beforestart", {
      sourceEvent: E,
      target: p,
      identifier: D,
      active: s,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: q
    }), L)) != null)
      return _ = b.x - R[0] || 0, $ = b.y - R[1] || 0, function P(N, z, j) {
        var W = R, M;
        switch (N) {
          case "start":
            o[D] = P, M = s++;
            break;
          case "end":
            delete o[D], --s;
          // falls through
          case "drag":
            R = nn(j || z, O), M = s;
            break;
        }
        q.call(
          N,
          S,
          new Ps(N, {
            sourceEvent: z,
            subject: b,
            target: p,
            identifier: D,
            active: M,
            x: R[0] + _,
            y: R[1] + $,
            dx: R[0] - W[0],
            dy: R[1] - W[1],
            dispatch: q
          }),
          L
        );
      };
  }
  return p.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Qo(!!S), p) : e;
  }, p.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Qo(S), p) : t;
  }, p.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : Qo(S), p) : n;
  }, p.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Qo(!!S), p) : r;
  }, p.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? p : S;
  }, p.clickDistance = function(S) {
    return arguments.length ? (f = (S = +S) * S, p) : Math.sqrt(f);
  }, p;
}
function pa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function yc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Io() {
}
var ko = 0.7, wi = 1 / ko, Rr = "\\s*([+-]?\\d+)\\s*", $o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kv = /^#([0-9a-f]{3,8})$/, $v = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`), _v = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), Sv = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${$o}\\)$`), Ev = new RegExp(`^rgba\\(${kn},${kn},${kn},${$o}\\)$`), Pv = new RegExp(`^hsl\\(${$o},${kn},${kn}\\)$`), Nv = new RegExp(`^hsla\\(${$o},${kn},${kn},${$o}\\)$`), dl = {
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
pa(Io, xr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fl,
  // Deprecated! Use color.formatHex.
  formatHex: fl,
  formatHex8: Tv,
  formatHsl: Ov,
  formatRgb: pl,
  toString: pl
});
function fl() {
  return this.rgb().formatHex();
}
function Tv() {
  return this.rgb().formatHex8();
}
function Ov() {
  return wc(this).formatHsl();
}
function pl() {
  return this.rgb().formatRgb();
}
function xr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = kv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? hl(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ei(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ei(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = $v.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = _v.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Sv.exec(e)) ? ei(t[1], t[2], t[3], t[4]) : (t = Ev.exec(e)) ? ei(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Pv.exec(e)) ? ml(t[1], t[2] / 100, t[3] / 100, 1) : (t = Nv.exec(e)) ? ml(t[1], t[2] / 100, t[3] / 100, t[4]) : dl.hasOwnProperty(e) ? hl(dl[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function hl(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ei(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ht(e, t, n, r);
}
function Lv(e) {
  return e instanceof Io || (e = xr(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Ns(e, t, n, r) {
  return arguments.length === 1 ? Lv(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
pa(Ht, Ns, yc(Io, {
  brighter(e) {
    return e = e == null ? wi : Math.pow(wi, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ko : Math.pow(ko, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(mr(this.r), mr(this.g), mr(this.b), bi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gl,
  // Deprecated! Use color.formatHex.
  formatHex: gl,
  formatHex8: Mv,
  formatRgb: vl,
  toString: vl
}));
function gl() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}`;
}
function Mv() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vl() {
  const e = bi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mr(this.r)}, ${mr(this.g)}, ${mr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function bi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fr(e) {
  return e = mr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ml(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function wc(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof Io || (e = xr(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new on(s, a, l, e.opacity);
}
function Vv(e, t, n, r) {
  return arguments.length === 1 ? wc(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
pa(on, Vv, yc(Io, {
  brighter(e) {
    return e = e == null ? wi : Math.pow(wi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ko : Math.pow(ko, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ht(
      as(e >= 240 ? e - 240 : e + 120, o, r),
      as(e, o, r),
      as(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new on(yl(this.h), ti(this.s), ti(this.l), bi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = bi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${yl(this.h)}, ${ti(this.s) * 100}%, ${ti(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function yl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ti(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ha = (e) => () => e;
function Dv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function zv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Hv(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? zv(t, n, e) : ha(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? Dv(e, n) : ha(isNaN(e) ? t : e);
}
const xi = function e(t) {
  var n = Hv(t);
  function r(o, i) {
    var s = n((o = Ns(o)).r, (i = Ns(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = bc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Av(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Rv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Iv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = bo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function jv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function wn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Bv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = bo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ls = new RegExp(Ts.source, "g");
function Kv(e) {
  return function() {
    return e;
  };
}
function Zv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function xc(e, t) {
  var n = Ts.lastIndex = ls.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ts.exec(e)) && (o = ls.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: wn(r, o) })), n = ls.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Zv(l[0].x) : Kv(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function bo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ha(t) : (n === "number" ? wn : n === "string" ? (r = xr(t)) ? (t = r, xi) : xc : t instanceof xr ? xi : t instanceof Date ? jv : Rv(t) ? Av : Array.isArray(t) ? Iv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Bv : wn)(e, t);
}
var wl = 180 / Math.PI, Cc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function kc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * wl,
    skewX: Math.atan(l) * wl,
    scaleX: s,
    scaleY: a
  };
}
var ni;
function Wv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Cc : kc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Yv(e) {
  return e == null || (ni || (ni = document.createElementNS("http://www.w3.org/2000/svg", "g")), ni.setAttribute("transform", e), !(e = ni.transform.baseVal.consolidate())) ? Cc : (e = e.matrix, kc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function $c(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push("translate(", null, t, null, n);
      g.push({ i: y - 4, x: wn(u, f) }, { i: y - 2, x: wn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: wn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: wn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: wn(u, f) }, { i: y - 2, x: wn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, y = p.length, w; ++g < y; ) f[(w = p[g]).i] = w.x(h);
      return f.join("");
    };
  };
}
var Fv = $c(Wv, "px, ", "px)", "deg)"), qv = $c(Yv, ", ", ")", ")"), Xv = 1e-12;
function bl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Gv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Uv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ui = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, y = h * h + g * g, w, k;
    if (y < Xv)
      k = Math.log(p / u) / t, w = function(L) {
        return [
          a + L * h,
          l + L * g,
          u * Math.exp(t * L * k)
        ];
      };
    else {
      var C = Math.sqrt(y), x = (p * p - u * u + r * y) / (2 * u * n * C), S = (p * p - u * u - r * y) / (2 * p * n * C), O = Math.log(Math.sqrt(x * x + 1) - x), E = Math.log(Math.sqrt(S * S + 1) - S);
      k = (E - O) / t, w = function(L) {
        var D = L * k, Z = bl(O), q = u / (n * C) * (Z * Uv(t * D + O) - Gv(O));
        return [
          a + q * h,
          l + q * g,
          u * Z / bl(t * D + O)
        ];
      };
    }
    return w.duration = k * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Ur = 0, go = 0, fo = 0, _c = 1e3, Ci, vo, ki = 0, Cr = 0, Wi = 0, _o = typeof performance == "object" && performance.now ? performance : Date, Sc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ga() {
  return Cr || (Sc(Jv), Cr = _o.now() + Wi);
}
function Jv() {
  Cr = 0;
}
function $i() {
  this._call = this._time = this._next = null;
}
$i.prototype = Ec.prototype = {
  constructor: $i,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ga() : +n) + (t == null ? 0 : +t), !this._next && vo !== this && (vo ? vo._next = this : Ci = this, vo = this), this._call = e, this._time = n, Os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Os());
  }
};
function Ec(e, t, n) {
  var r = new $i();
  return r.restart(e, t, n), r;
}
function Qv() {
  ga(), ++Ur;
  for (var e = Ci, t; e; )
    (t = Cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ur;
}
function xl() {
  Cr = (ki = _o.now()) + Wi, Ur = go = 0;
  try {
    Qv();
  } finally {
    Ur = 0, t1(), Cr = 0;
  }
}
function e1() {
  var e = _o.now(), t = e - ki;
  t > _c && (Wi -= t, ki = e);
}
function t1() {
  for (var e, t = Ci, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ci = n);
  vo = e, Os(r);
}
function Os(e) {
  if (!Ur) {
    go && (go = clearTimeout(go));
    var t = e - Cr;
    t > 24 ? (e < 1 / 0 && (go = setTimeout(xl, e - _o.now() - Wi)), fo && (fo = clearInterval(fo))) : (fo || (ki = _o.now(), fo = setInterval(e1, _c)), Ur = 1, Sc(xl));
  }
}
function Cl(e, t, n) {
  var r = new $i();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var n1 = Ki("start", "end", "cancel", "interrupt"), r1 = [], Pc = 0, kl = 1, Ls = 2, ci = 3, $l = 4, Ms = 5, di = 6;
function Yi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  o1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: n1,
    tween: r1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Pc
  });
}
function va(e, t) {
  var n = fn(e, t);
  if (n.state > Pc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = fn(e, t);
  if (n.state > ci) throw new Error("too late; already running");
  return n;
}
function fn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function o1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ec(i, 0, n.time);
  function i(u) {
    n.state = kl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== kl) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === ci) return Cl(s);
        h.state === $l ? (h.state = di, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = di, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Cl(function() {
      n.state === ci && (n.state = $l, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ls, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ls) {
      for (n.state = ci, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ms, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === Ms && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = di, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function fi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ls && r.state < Ms, r.state = di, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function i1(e) {
  return this.each(function() {
    fi(this, e);
  });
}
function s1(e, t) {
  var n, r;
  return function() {
    var o = En(this, e), i = o.tween;
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
function a1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = En(this, e), s = i.tween;
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
function l1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = fn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? s1 : a1)(n, e, t));
}
function ma(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return fn(o, r).value[t];
  };
}
function Nc(e, t) {
  var n;
  return (typeof t == "number" ? wn : t instanceof xr ? xi : (n = xr(t)) ? (t = n, xi) : xc)(e, t);
}
function u1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function c1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function d1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function f1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function p1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function h1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function g1(e, t) {
  var n = Zi(e), r = n === "transform" ? qv : Nc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? h1 : p1)(n, r, ma(this, "attr." + e, t)) : t == null ? (n.local ? c1 : u1)(n) : (n.local ? f1 : d1)(n, r, t));
}
function v1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function m1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function y1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && m1(e, i)), n;
  }
  return o._value = t, o;
}
function w1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && v1(e, i)), n;
  }
  return o._value = t, o;
}
function b1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? y1 : w1)(r, t));
}
function x1(e, t) {
  return function() {
    va(this, e).delay = +t.apply(this, arguments);
  };
}
function C1(e, t) {
  return t = +t, function() {
    va(this, e).delay = t;
  };
}
function k1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? x1 : C1)(t, e)) : fn(this.node(), t).delay;
}
function $1(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function _1(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function S1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? $1 : _1)(t, e)) : fn(this.node(), t).duration;
}
function E1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function P1(e) {
  var t = this._id;
  return arguments.length ? this.each(E1(t, e)) : fn(this.node(), t).ease;
}
function N1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function T1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(N1(this._id, e));
}
function O1(e) {
  typeof e != "function" && (e = sc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Hn(r, this._parents, this._name, this._id);
}
function L1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Hn(s, this._parents, this._name, this._id);
}
function M1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function V1(e, t, n) {
  var r, o, i = M1(t) ? va : En;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function D1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? fn(this.node(), n).on.on(e) : this.each(V1(n, e, t));
}
function z1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function H1() {
  return this.on("end.remove", z1(this._id));
}
function A1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = da(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Yi(u[p], t, n, p, u, fn(d, n)));
  return new Hn(i, this._parents, t, n);
}
function R1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ic(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = fn(d, n), y = 0, w = p.length; y < w; ++y)
          (h = p[y]) && Yi(h, t, n, y, p, g);
        i.push(p), s.push(d);
      }
  return new Hn(i, s, t, n);
}
var I1 = Ro.prototype.constructor;
function j1() {
  return new I1(this._groups, this._parents);
}
function B1(e, t) {
  var n, r, o;
  return function() {
    var i = Gr(this, e), s = (this.style.removeProperty(e), Gr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Tc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function K1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Gr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Z1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Gr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Gr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function W1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = En(this, e), u = l.on, d = l.value[i] == null ? a || (a = Tc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Y1(e, t, n) {
  var r = (e += "") == "transform" ? Fv : Nc;
  return t == null ? this.styleTween(e, B1(e, r)).on("end.style." + e, Tc(e)) : typeof t == "function" ? this.styleTween(e, Z1(e, r, ma(this, "style." + e, t))).each(W1(this._id, e)) : this.styleTween(e, K1(e, r, t), n).on("end.style." + e, null);
}
function F1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function q1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && F1(e, s, n)), r;
  }
  return i._value = t, i;
}
function X1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, q1(e, t, n ?? ""));
}
function G1(e) {
  return function() {
    this.textContent = e;
  };
}
function U1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function J1(e) {
  return this.tween("text", typeof e == "function" ? U1(ma(this, "text", e)) : G1(e == null ? "" : e + ""));
}
function Q1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function e0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Q1(o)), t;
  }
  return r._value = e, r;
}
function t0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, e0(e));
}
function n0() {
  for (var e = this._name, t = this._id, n = Oc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = fn(l, t);
        Yi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Hn(r, this._parents, e, n);
}
function r0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = En(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var o0 = 0;
function Hn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Oc() {
  return ++o0;
}
var Nn = Ro.prototype;
Hn.prototype = {
  constructor: Hn,
  select: A1,
  selectAll: R1,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: O1,
  merge: L1,
  selection: j1,
  transition: n0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: D1,
  attr: g1,
  attrTween: b1,
  style: Y1,
  styleTween: X1,
  text: J1,
  textTween: t0,
  remove: H1,
  tween: l1,
  delay: k1,
  duration: S1,
  ease: P1,
  easeVarying: T1,
  end: r0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function i0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var s0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: i0
};
function a0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function l0(e) {
  var t, n;
  e instanceof Hn ? (t = e._id, e = e._name) : (t = Oc(), (n = s0).time = ga(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Yi(l, e, t, u, s, n || a0(l, t));
  return new Hn(r, this._parents, e, t);
}
Ro.prototype.interrupt = i1;
Ro.prototype.transition = l0;
const ri = (e) => () => e;
function u0(e, {
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
function On(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
On.prototype = {
  constructor: On,
  scale: function(e) {
    return e === 1 ? this : new On(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new On(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Fi = new On(1, 0, 0);
Lc.prototype = On.prototype;
function Lc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Fi;
  return e.__zoom;
}
function us(e) {
  e.stopImmediatePropagation();
}
function po(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function c0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function d0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function _l() {
  return this.__zoom || Fi;
}
function f0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function p0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function h0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Mc() {
  var e = c0, t = d0, n = h0, r = f0, o = p0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = ui, u = Ki("start", "zoom", "end"), d, f, p, h = 500, g = 150, y = 0, w = 10;
  function k(b) {
    b.property("__zoom", _l).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", Z).on("dblclick.zoom", q).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", $).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(b, P, N, z) {
    var j = b.selection ? b.selection() : b;
    j.property("__zoom", _l), b !== j ? O(b, P, N, z) : j.interrupt().each(function() {
      E(this, arguments).event(z).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, k.scaleBy = function(b, P, N, z) {
    k.scaleTo(b, function() {
      var j = this.__zoom.k, W = typeof P == "function" ? P.apply(this, arguments) : P;
      return j * W;
    }, N, z);
  }, k.scaleTo = function(b, P, N, z) {
    k.transform(b, function() {
      var j = t.apply(this, arguments), W = this.__zoom, M = N == null ? S(j) : typeof N == "function" ? N.apply(this, arguments) : N, Y = W.invert(M), Q = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(C(W, Q), M, Y), j, s);
    }, N, z);
  }, k.translateBy = function(b, P, N, z) {
    k.transform(b, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, z);
  }, k.translateTo = function(b, P, N, z, j) {
    k.transform(b, function() {
      var W = t.apply(this, arguments), M = this.__zoom, Y = z == null ? S(W) : typeof z == "function" ? z.apply(this, arguments) : z;
      return n(Fi.translate(Y[0], Y[1]).scale(M.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), W, s);
    }, z, j);
  };
  function C(b, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === b.k ? b : new On(P, b.x, b.y);
  }
  function x(b, P, N) {
    var z = P[0] - N[0] * b.k, j = P[1] - N[1] * b.k;
    return z === b.x && j === b.y ? b : new On(b.k, z, j);
  }
  function S(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function O(b, P, N, z) {
    b.on("start.zoom", function() {
      E(this, arguments).event(z).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(z).end();
    }).tween("zoom", function() {
      var j = this, W = arguments, M = E(j, W).event(z), Y = t.apply(j, W), Q = N == null ? S(Y) : typeof N == "function" ? N.apply(j, W) : N, re = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), K = j.__zoom, X = typeof P == "function" ? P.apply(j, W) : P, U = l(K.invert(Q).concat(re / K.k), X.invert(Q).concat(re / X.k));
      return function(se) {
        if (se === 1) se = X;
        else {
          var ae = U(se), ee = re / ae[2];
          se = new On(ee, Q[0] - ae[0] * ee, Q[1] - ae[1] * ee);
        }
        M.zoom(null, se);
      };
    });
  }
  function E(b, P, N) {
    return !N && b.__zooming || new L(b, P);
  }
  function L(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, P), this.taps = 0;
  }
  L.prototype = {
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
      var P = qt(this.that).datum();
      u.call(
        b,
        this.that,
        new u0(b, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function D(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var N = E(this, P).event(b), z = this.__zoom, j = Math.max(i[0], Math.min(i[1], z.k * Math.pow(2, r.apply(this, arguments)))), W = nn(b);
    if (N.wheel)
      (N.mouse[0][0] !== W[0] || N.mouse[0][1] !== W[1]) && (N.mouse[1] = z.invert(N.mouse[0] = W)), clearTimeout(N.wheel);
    else {
      if (z.k === j) return;
      N.mouse = [W, z.invert(W)], fi(this), N.start();
    }
    po(b), N.wheel = setTimeout(M, g), N.zoom("mouse", n(x(C(z, j), N.mouse[0], N.mouse[1]), N.extent, s));
    function M() {
      N.wheel = null, N.end();
    }
  }
  function Z(b, ...P) {
    if (p || !e.apply(this, arguments)) return;
    var N = b.currentTarget, z = E(this, P, !0).event(b), j = qt(b.view).on("mousemove.zoom", Q, !0).on("mouseup.zoom", re, !0), W = nn(b, N), M = b.clientX, Y = b.clientY;
    vc(b.view), us(b), z.mouse = [W, this.__zoom.invert(W)], fi(this), z.start();
    function Q(K) {
      if (po(K), !z.moved) {
        var X = K.clientX - M, U = K.clientY - Y;
        z.moved = X * X + U * U > y;
      }
      z.event(K).zoom("mouse", n(x(z.that.__zoom, z.mouse[0] = nn(K, N), z.mouse[1]), z.extent, s));
    }
    function re(K) {
      j.on("mousemove.zoom mouseup.zoom", null), mc(K.view, z.moved), po(K), z.event(K).end();
    }
  }
  function q(b, ...P) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, z = nn(b.changedTouches ? b.changedTouches[0] : b, this), j = N.invert(z), W = N.k * (b.shiftKey ? 0.5 : 2), M = n(x(C(N, W), z, j), t.apply(this, P), s);
      po(b), a > 0 ? qt(this).transition().duration(a).call(O, M, z, b) : qt(this).call(k.transform, M, z, b);
    }
  }
  function R(b, ...P) {
    if (e.apply(this, arguments)) {
      var N = b.touches, z = N.length, j = E(this, P, b.changedTouches.length === z).event(b), W, M, Y, Q;
      for (us(b), M = 0; M < z; ++M)
        Y = N[M], Q = nn(Y, this), Q = [Q, this.__zoom.invert(Q), Y.identifier], j.touch0 ? !j.touch1 && j.touch0[2] !== Q[2] && (j.touch1 = Q, j.taps = 0) : (j.touch0 = Q, W = !0, j.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (j.taps < 2 && (f = Q[0], d = setTimeout(function() {
        d = null;
      }, h)), fi(this), j.start());
    }
  }
  function _(b, ...P) {
    if (this.__zooming) {
      var N = E(this, P).event(b), z = b.changedTouches, j = z.length, W, M, Y, Q;
      for (po(b), W = 0; W < j; ++W)
        M = z[W], Y = nn(M, this), N.touch0 && N.touch0[2] === M.identifier ? N.touch0[0] = Y : N.touch1 && N.touch1[2] === M.identifier && (N.touch1[0] = Y);
      if (M = N.that.__zoom, N.touch1) {
        var re = N.touch0[0], K = N.touch0[1], X = N.touch1[0], U = N.touch1[1], se = (se = X[0] - re[0]) * se + (se = X[1] - re[1]) * se, ae = (ae = U[0] - K[0]) * ae + (ae = U[1] - K[1]) * ae;
        M = C(M, Math.sqrt(se / ae)), Y = [(re[0] + X[0]) / 2, (re[1] + X[1]) / 2], Q = [(K[0] + U[0]) / 2, (K[1] + U[1]) / 2];
      } else if (N.touch0) Y = N.touch0[0], Q = N.touch0[1];
      else return;
      N.zoom("touch", n(x(M, Y, Q), N.extent, s));
    }
  }
  function $(b, ...P) {
    if (this.__zooming) {
      var N = E(this, P).event(b), z = b.changedTouches, j = z.length, W, M;
      for (us(b), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), W = 0; W < j; ++W)
        M = z[W], N.touch0 && N.touch0[2] === M.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === M.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (M = nn(M, this), Math.hypot(f[0] - M[0], f[1] - M[1]) < w)) {
        var Y = qt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : ri(+b), k) : r;
  }, k.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : ri(!!b), k) : e;
  }, k.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : ri(!!b), k) : o;
  }, k.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : ri([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), k) : t;
  }, k.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(b) {
    return arguments.length ? (n = b, k) : n;
  }, k.duration = function(b) {
    return arguments.length ? (a = +b, k) : a;
  }, k.interpolate = function(b) {
    return arguments.length ? (l = b, k) : l;
  }, k.on = function() {
    var b = u.on.apply(u, arguments);
    return b === u ? k : b;
  }, k.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, k) : Math.sqrt(y);
  }, k.tapDistance = function(b) {
    return arguments.length ? (w = +b, k) : w;
  }, k;
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
}, Vs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Vc = ["Enter", " ", "Escape"], g0 = {
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
var Jr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Jr || (Jr = {}));
var yr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yr || (yr = {}));
var _i;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(_i || (_i = {}));
const Ds = {
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
var Tn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tn || (Tn = {}));
var Eo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Eo || (Eo = {}));
var ke;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ke || (ke = {}));
const Sl = {
  [ke.Left]: ke.Right,
  [ke.Right]: ke.Left,
  [ke.Top]: ke.Bottom,
  [ke.Bottom]: ke.Top
};
function v0(e, t) {
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
function El(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function m0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Dc = (e) => "id" in e && "source" in e && "target" in e, y0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ya = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), jo = (e, t = [0, 0]) => {
  const { width: n, height: r } = ar(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, w0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ya(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Si(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return qi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xi(n);
}, Bo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Si(r);
      n = qi(n, o);
    }
  }), Xi(n);
}, wa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Zo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, y = Po(a, eo(u)), w = (h ?? 0) * (g ?? 0), k = i && y > 0;
    (!u.internals.handleBounds || k || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, b0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function x0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function C0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = x0(e, s), l = Bo(a), u = ba(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function zc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  else a && to(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = to(f) ? kr(t, f, s.measured) : t;
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
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = b0(s, l);
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
const Qr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), kr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Qr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Qr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Hc(e, t, n) {
  const { width: r, height: o } = ar(n), { x: i, y: s } = n.internals.positionAbsolute;
  return kr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Pl = (e, t, n) => e < t ? Qr(Math.abs(e - t), 1, t) / t : e > n ? -Qr(Math.abs(e - n), 1, t) / t : 0, Ac = (e, t, n = 15, r = 40) => {
  const o = Pl(e.x, r, t.width - r) * n, i = Pl(e.y, r, t.height - r) * n;
  return [o, i];
}, qi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), zs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Xi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), eo = (e, t = [0, 0]) => {
  const { x: n, y: r } = ya(e) ? e.internals.positionAbsolute : jo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Si = (e, t = [0, 0]) => {
  const { x: n, y: r } = ya(e) ? e.internals.positionAbsolute : jo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Rc = (e, t) => Xi(qi(zs(e), zs(t))), Po = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Nl = (e) => Ln(e.width) && Ln(e.height) && Ln(e.x) && Ln(e.y), Ln = (e) => !isNaN(e) && isFinite(e), $0 = (e, t) => {
}, Ko = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Zo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Ko(a, s) : a;
}, Ei = ({ x: e, y: t }, [n, r, o]) => ({
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
function _0(e, t, n) {
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
function S0(e, t, n, r, o, i) {
  const { x: s, y: a } = Ei(e, [t, n, r]), { x: l, y: u } = Ei({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const ba = (e, t, n, r, o, i) => {
  const s = _0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Qr(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, y = S0(e, h, g, d, t, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - w.left + w.right,
    y: g - w.top + w.bottom,
    zoom: d
  };
}, pr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function to(e) {
  return e != null && e !== "parent";
}
function ar(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ic(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function E0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function P0(e) {
  return { ...g0, ...e || {} };
}
function cs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = Zo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Ko(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const jc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Bc = (e) => e?.getRootNode?.() || window?.document, N0 = ["INPUT", "SELECT", "TEXTAREA"];
function Kc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : N0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Zc = (e) => "clientX" in e, sn = (e, t) => {
  const n = Zc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Tl = (e, t, n, r, o) => {
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
      ...jc(s)
    };
  });
};
function T0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function oi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ol({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ke.Left:
      return [t - oi(t - r, i), n];
    case ke.Right:
      return [t + oi(r - t, i), n];
    case ke.Top:
      return [t, n - oi(n - o, i)];
    case ke.Bottom:
      return [t, n + oi(o - n, i)];
  }
}
function Wc({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, curvature: s = 0.25 }) {
  const [a, l] = Ol({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ol({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = T0({
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
function Yc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function O0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function L0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = qi(Si(e), Si(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Po(s, Xi(i)) > 0;
}
const M0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, V0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), D0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Dc(e) ? n = { ...e } : n = {
    ...e,
    id: M0(e)
  }, V0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Fc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Yc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ll = {
  [ke.Left]: { x: -1, y: 0 },
  [ke.Right]: { x: 1, y: 0 },
  [ke.Top]: { x: 0, y: -1 },
  [ke.Bottom]: { x: 0, y: 1 }
}, z0 = ({ source: e, sourcePosition: t = ke.Bottom, target: n }) => t === ke.Left || t === ke.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ml = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function H0({ source: e, sourcePosition: t = ke.Bottom, target: n, targetPosition: r = ke.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ll[t], l = Ll[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = z0({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], y, w;
  const k = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , x, S] = Yc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const O = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], E = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === h ? g = p === "x" ? O : E : g = p === "x" ? E : O;
  } else {
    const O = [{ x: u.x, y: d.y }], E = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? E : O : g = a.y === h ? O : E, t === r) {
      const R = Math.abs(e[p] - n[p]);
      if (R <= i) {
        const _ = Math.min(i - 1, i - R);
        a[p] === h ? k[p] = (u[p] > e[p] ? -1 : 1) * _ : C[p] = (d[p] > n[p] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const R = p === "x" ? "y" : "x", _ = a[p] === l[R], $ = u[R] > d[R], b = u[R] < d[R];
      (a[p] === 1 && (!_ && $ || _ && b) || a[p] !== 1 && (!_ && b || _ && $)) && (g = p === "x" ? O : E);
    }
    const L = { x: u.x + k.x, y: u.y + k.y }, D = { x: d.x + C.x, y: d.y + C.y }, Z = Math.max(Math.abs(L.x - g[0].x), Math.abs(D.x - g[0].x)), q = Math.max(Math.abs(L.y - g[0].y), Math.abs(D.y - g[0].y));
    Z >= q ? (y = (L.x + D.x) / 2, w = g[0].y) : (y = g[0].x, w = (L.y + D.y) / 2);
  }
  return [[
    e,
    { x: u.x + k.x, y: u.y + k.y },
    ...g,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], y, w, x, S];
}
function A0(e, t, n, r) {
  const o = Math.min(Ml(e, t) / 2, Ml(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function xa({ sourceX: e, sourceY: t, sourcePosition: n = ke.Bottom, targetX: r, targetY: o, targetPosition: i = ke.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, y] = H0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((w, k, C) => {
    let x = "";
    return C > 0 && C < f.length - 1 ? x = A0(f[C - 1], k, f[C + 1], s) : x = `${C === 0 ? "M" : "L"}${k.x} ${k.y}`, w += x, w;
  }, ""), p, h, g, y];
}
function Vl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function R0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Vl(t) || !Vl(n))
    return null;
  const r = t.internals.handleBounds || Dl(t.handles), o = n.internals.handleBounds || Dl(n.handles), i = zl(r?.source ?? [], e.sourceHandle), s = zl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Jr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", So.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ke.Bottom, l = s?.position || ke.Top, u = No(t, i, a), d = No(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Dl(e) {
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
function No(e, t, n = ke.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? ar(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case ke.Top:
      return { x: o + s / 2, y: i };
    case ke.Right:
      return { x: o + s, y: i + a / 2 };
    case ke.Bottom:
      return { x: o + s / 2, y: i + a };
    case ke.Left:
      return { x: o, y: i + a / 2 };
  }
}
function zl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Hs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function I0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Hs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function j0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ke.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ke.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ke.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Ca = {
  nodeOrigin: [0, 0],
  nodeExtent: Vs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, B0 = {
  ...Ca,
  checkEquality: !0
};
function ka(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function K0(e, t, n) {
  const r = ka(Ca, n);
  for (const o of e.values())
    if (o.parentId)
      $a(o, e, t, r);
    else {
      const i = jo(o, r.nodeOrigin), s = to(o.extent) ? o.extent : r.nodeExtent, a = kr(i, s, ar(o));
      o.internals.positionAbsolute = a;
    }
}
function Z0(e, t) {
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
function W0(e, t, n, r) {
  const o = ka(B0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = jo(l, o.nodeOrigin), f = to(l.extent) ? l.extent : o.nodeExtent, p = kr(d, f, ar(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Z0(l, u),
          z: qc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && $a(u, t, n, r);
  }
  return i;
}
function Y0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function $a(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ka(Ca, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Y0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: f, z: p } = F0(e, l, i, s, u), { positionAbsolute: h } = e.internals, g = d !== h.x || f !== h.y;
  (g || p !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: g ? { x: d, y: f } : h,
      z: p
    }
  });
}
function qc(e, t) {
  return (Ln(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function F0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = ar(e), l = jo(e, n), u = to(e.extent) ? kr(l, e.extent, a) : l;
  let d = kr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Hc(d, a, t));
  const f = qc(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function q0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? eo(a), u = Rc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = ar(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (g - d.width) * f[0], k = (y - d.height) * f[1];
    (p > 0 || h > 0 || w || k) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - h + k
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
        width: g + (p ? f[0] * p - w : 0),
        height: y + (h ? f[1] * h - k : 0)
      }
    });
  }), o;
}
function X0(e, t, n, r, o, i) {
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
    const g = jc(p.nodeElement), y = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (y || !h.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), k = to(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = Hc(C, g, t.get(h.parentId)) : k && (C = kr(C, k, g));
      const x = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Tl("source", p.nodeElement, w, d, h.id),
            target: Tl("target", p.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && $a(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: eo(x, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = q0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function G0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Hl(e, t, n, r, o, i) {
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
function U0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Hl("source", l, d, e, o, s), Hl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function J0(e, t) {
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
function Xc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Xc(n, t) : !1;
}
function Al(e, t, n) {
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
function Q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Xc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ds({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function em({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Ko(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function tm({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, y = null;
  function w({ noDragClassName: C, handleSelector: x, domNode: S, isSelectable: O, nodeId: E, nodeClickDistance: L = 0 }) {
    p = qt(S);
    function D({ x: _, y: $ }) {
      const { nodeLookup: b, nodeExtent: P, snapGrid: N, snapToGrid: z, nodeOrigin: j, onNodeDrag: W, onSelectionDrag: M, onError: Y, updateNodePositions: Q } = t();
      i = { x: _, y: $ };
      let re = !1;
      const K = a.size > 1, X = K && P ? zs(Bo(a)) : null, U = K && z ? em({
        dragItems: a,
        snapGrid: N,
        x: _,
        y: $
      }) : null;
      for (const [se, ae] of a) {
        if (!b.has(se))
          continue;
        let ee = { x: _ - ae.distance.x, y: $ - ae.distance.y };
        z && (ee = U ? {
          x: Math.round(ee.x + U.x),
          y: Math.round(ee.y + U.y)
        } : Ko(ee, N));
        let ye = null;
        if (K && P && !ae.extent && X) {
          const { positionAbsolute: oe } = ae.internals, ge = oe.x - X.x + P[0][0], ve = oe.x + ae.measured.width - X.x2 + P[1][0], xe = oe.y - X.y + P[0][1], pe = oe.y + ae.measured.height - X.y2 + P[1][1];
          ye = [
            [ge, xe],
            [ve, pe]
          ];
        }
        const { position: fe, positionAbsolute: ne } = zc({
          nodeId: se,
          nextPosition: ee,
          nodeLookup: b,
          nodeExtent: ye || P,
          nodeOrigin: j,
          onError: Y
        });
        re = re || ae.position.x !== fe.x || ae.position.y !== fe.y, ae.position = fe, ae.internals.positionAbsolute = ne;
      }
      if (g = g || re, !!re && (Q(a, !0), y && (r || W || !E && M))) {
        const [se, ae] = ds({
          nodeId: E,
          dragItems: a,
          nodeLookup: b
        });
        r?.(y, a, se, ae), W?.(y, se, ae), E || M?.(y, ae);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: _, panBy: $, autoPanSpeed: b, autoPanOnNodeDrag: P } = t();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, z] = Ac(u, d, b);
      (N !== 0 || z !== 0) && (i.x = (i.x ?? 0) - N / _[2], i.y = (i.y ?? 0) - z / _[2], await $({ x: N, y: z }) && D(i)), s = requestAnimationFrame(Z);
    }
    function q(_) {
      const { nodeLookup: $, multiSelectionActive: b, nodesDraggable: P, transform: N, snapGrid: z, snapToGrid: j, selectNodesOnDrag: W, onNodeDragStart: M, onSelectionDragStart: Y, unselectNodesAndEdges: Q } = t();
      f = !0, (!W || !O) && !b && E && ($.get(E)?.selected || Q()), O && W && E && e?.(E);
      const re = cs(_.sourceEvent, { transform: N, snapGrid: z, snapToGrid: j, containerBounds: d });
      if (i = re, a = Q0($, P, re, E), a.size > 0 && (n || M || !E && Y)) {
        const [K, X] = ds({
          nodeId: E,
          dragItems: a,
          nodeLookup: $
        });
        n?.(_.sourceEvent, a, K, X), M?.(_.sourceEvent, K, X), E || Y?.(_.sourceEvent, X);
      }
    }
    const R = Cv().clickDistance(L).on("start", (_) => {
      const { domNode: $, nodeDragThreshold: b, transform: P, snapGrid: N, snapToGrid: z } = t();
      d = $?.getBoundingClientRect() || null, h = !1, g = !1, y = _.sourceEvent, b === 0 && q(_), i = cs(_.sourceEvent, { transform: P, snapGrid: N, snapToGrid: z, containerBounds: d }), u = sn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: $, transform: b, snapGrid: P, snapToGrid: N, nodeDragThreshold: z, nodeLookup: j } = t(), W = cs(_.sourceEvent, { transform: b, snapGrid: P, snapToGrid: N, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !j.has(E)) && (h = !0), !h) {
        if (!l && $ && f && (l = !0, Z()), !f) {
          const M = sn(_.sourceEvent, d), Y = M.x - u.x, Q = M.y - u.y;
          Math.sqrt(Y * Y + Q * Q) > z && q(_);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && f && (u = sn(_.sourceEvent, d), D(W));
      }
    }).on("end", (_) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: $, updateNodePositions: b, onNodeDragStop: P, onSelectionDragStop: N } = t();
        if (g && (b(a, !1), g = !1), o || P || !E && N) {
          const [z, j] = ds({
            nodeId: E,
            dragItems: a,
            nodeLookup: $,
            dragging: !1
          });
          o?.(_.sourceEvent, a, z, j), P?.(_.sourceEvent, z, j), E || N?.(_.sourceEvent, j);
        }
      }
    }).filter((_) => {
      const $ = _.target;
      return !_.button && (!C || !Al($, `.${C}`, S)) && (!x || Al($, x, S));
    });
    p.call(R);
  }
  function k() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: k
  };
}
function nm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Po(o, eo(i)) > 0 && r.push(i);
  return r;
}
const rm = 250;
function om(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = nm(e, n, t + rm);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = No(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
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
function Gc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...No(s, l, l.position, !0) } : l;
}
function Uc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function im(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Jc = () => !0;
function sm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: y, onConnectEnd: w, isValidConnection: k = Jc, onReconnectEnd: C, updateConnection: x, getTransform: S, getFromHandle: O, autoPanSpeed: E, dragThreshold: L = 1, handleDomNode: D }) {
  const Z = Bc(e.target);
  let q = 0, R;
  const { x: _, y: $ } = sn(e), b = Uc(i, D), P = a?.getBoundingClientRect();
  let N = !1;
  if (!P || !b)
    return;
  const z = Gc(o, b, r, l, t);
  if (!z)
    return;
  let j = sn(e, P), W = !1, M = null, Y = !1, Q = null;
  function re() {
    if (!d || !P)
      return;
    const [ye, fe] = Ac(j, P, E);
    p({ x: ye, y: fe }), q = requestAnimationFrame(re);
  }
  const K = {
    ...z,
    nodeId: o,
    type: b,
    position: z.position
  }, X = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: No(X, K, ke.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: X,
    to: j,
    toHandle: null,
    toPosition: Sl[K.position],
    toNode: null
  };
  function se() {
    N = !0, x(U), g?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  L === 0 && se();
  function ae(ye) {
    if (!N) {
      const { x: ge, y: ve } = sn(ye), xe = ge - _, pe = ve - $;
      if (!(xe * xe + pe * pe > L * L))
        return;
      se();
    }
    if (!O() || !K) {
      ee(ye);
      return;
    }
    const fe = S();
    j = sn(ye, P), R = om(Zo(j, fe, !1, [1, 1]), n, l, K), W || (re(), W = !0);
    const ne = Qc(ye, {
      handle: R,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: Z,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    Q = ne.handleDomNode, M = ne.connection, Y = im(!!R, ne.isValid);
    const oe = {
      // from stays the same
      ...U,
      isValid: Y,
      to: ne.toHandle && Y ? Ei({ x: ne.toHandle.x, y: ne.toHandle.y }, fe) : j,
      toHandle: ne.toHandle,
      toPosition: Y && ne.toHandle ? ne.toHandle.position : Sl[K.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    Y && R && U.toHandle && oe.toHandle && U.toHandle.type === oe.toHandle.type && U.toHandle.nodeId === oe.toHandle.nodeId && U.toHandle.id === oe.toHandle.id && U.to.x === oe.to.x && U.to.y === oe.to.y || (x(oe), U = oe);
  }
  function ee(ye) {
    if (!("touches" in ye && ye.touches.length > 0)) {
      if (N) {
        (R || Q) && M && Y && y?.(M);
        const { inProgress: fe, ...ne } = U, oe = {
          ...ne,
          toPosition: U.toHandle ? U.toPosition : null
        };
        w?.(ye, oe), i && C?.(ye, oe);
      }
      h(), cancelAnimationFrame(q), W = !1, Y = !1, M = null, Q = null, Z.removeEventListener("mousemove", ae), Z.removeEventListener("mouseup", ee), Z.removeEventListener("touchmove", ae), Z.removeEventListener("touchend", ee);
    }
  }
  Z.addEventListener("mousemove", ae), Z.addEventListener("mouseup", ee), Z.addEventListener("touchmove", ae), Z.addEventListener("touchend", ee);
}
function Qc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Jc, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = sn(e), y = s.elementFromPoint(h, g), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, k = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = Uc(void 0, w), x = w.getAttribute("data-nodeid"), S = w.getAttribute("data-handleid"), O = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!x || !C)
      return k;
    const L = {
      source: f ? x : r,
      sourceHandle: f ? S : o,
      target: f ? r : x,
      targetHandle: f ? o : S
    };
    k.connection = L;
    const D = O && E && (n === Jr.Strict ? f && C === "source" || !f && C === "target" : x !== r || S !== o);
    k.isValid = D && u(L), k.toHandle = Gc(x, C, S, d, n, !0);
  }
  return k;
}
const Rl = {
  onPointerDown: sm,
  isValid: Qc
};
function am({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const S = n(), O = x.sourceEvent.ctrlKey && pr() ? 10 : 1, E = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, L = S[2] * Math.pow(2, E * O);
      t.scaleTo(L);
    };
    let y = [0, 0];
    const w = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, k = (x) => {
      const S = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const O = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], E = [O[0] - y[0], O[1] - y[1]];
      y = O;
      const L = r() * Math.max(S[2], Math.log(S[2])) * (h ? -1 : 1), D = {
        x: S[0] - E[0] * L,
        y: S[1] - E[1] * L
      }, Z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: S[2]
      }, Z, a);
    }, C = Mc().on("start", w).on("zoom", f ? k : null).on("zoom.wheel", p ? g : null);
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
const lm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Gi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), fs = ({ x: e, y: t, zoom: n }) => Fi.translate(e, t).scale(n), Dr = (e, t) => e.target.closest(`.${t}`), ed = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), um = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, ps = (e, t = 0, n = um, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, td = (e) => {
  const t = e.ctrlKey && pr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function cm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Dr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = nn(d), k = td(d), C = f * Math.pow(2, k);
      r.scaleTo(n, C, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === yr.Vertical ? 0 : d.deltaX * p, g = o === yr.Horizontal ? 0 : d.deltaY * p;
    !pr() && d.shiftKey && o !== yr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Gi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function dm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Dr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function fm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Gi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function pm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && ed(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Gi(i.transform));
  };
}
function hm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ed(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && lm(e.prevViewport, s.transform))) {
      const a = Gi(s.transform);
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
function gm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (f) => {
    const p = e || t, h = n && f.ctrlKey, g = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (Dr(f, `${u}-flow__node`) || Dr(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || Dr(f, a) && g || Dr(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && y;
  };
}
function vm({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), p = Mc().clickDistance(!Ln(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = qt(e).call(p);
  x({
    x: i.x,
    y: i.y,
    zoom: Qr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  p.wheelDelta(td);
  function w(_, $) {
    return h ? new Promise((b) => {
      p?.interpolate($?.interpolate === "linear" ? bo : ui).transform(ps(h, $?.duration, $?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: _, noPanClassName: $, onPaneContextMenu: b, userSelectionActive: P, panOnScroll: N, panOnDrag: z, panOnScrollMode: j, panOnScrollSpeed: W, preventScrolling: M, zoomOnPinch: Y, zoomOnScroll: Q, zoomOnDoubleClick: re, zoomActivationKeyPressed: K, lib: X, onTransformChange: U, connectionInProgress: se }) {
    P && !d.isZoomingOrPanning && C();
    const ae = N && !K && !P ? cm({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: j,
      panOnScrollSpeed: W,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : dm({
      noWheelClassName: _,
      preventScrolling: M,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", ae, { passive: !1 }), !P) {
      const ye = fm({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      p.on("start", ye);
      const fe = pm({
        zoomPanValues: d,
        panOnDrag: z,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: U
      });
      p.on("zoom", fe);
      const ne = hm({
        zoomPanValues: d,
        panOnDrag: z,
        panOnScroll: N,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", ne);
    }
    const ee = gm({
      zoomActivationKeyPressed: K,
      panOnDrag: z,
      zoomOnScroll: Q,
      panOnScroll: N,
      zoomOnDoubleClick: re,
      zoomOnPinch: Y,
      userSelectionActive: P,
      noPanClassName: $,
      noWheelClassName: _,
      lib: X,
      connectionInProgress: se
    });
    p.filter(ee), re ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function C() {
    p.on("zoom", null);
  }
  async function x(_, $, b) {
    const P = fs(_), N = p?.constrain()(P, $, b);
    return N && await w(N), new Promise((z) => z(N));
  }
  async function S(_, $) {
    const b = fs(_);
    return await w(b, $), new Promise((P) => P(b));
  }
  function O(_) {
    if (h) {
      const $ = fs(_), b = h.property("__zoom");
      (b.k !== _.zoom || b.x !== _.x || b.y !== _.y) && p?.transform(h, $, null, { sync: !0 });
    }
  }
  function E() {
    const _ = h ? Lc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function L(_, $) {
    return h ? new Promise((b) => {
      p?.interpolate($?.interpolate === "linear" ? bo : ui).scaleTo(ps(h, $?.duration, $?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function D(_, $) {
    return h ? new Promise((b) => {
      p?.interpolate($?.interpolate === "linear" ? bo : ui).scaleBy(ps(h, $?.duration, $?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function Z(_) {
    p?.scaleExtent(_);
  }
  function q(_) {
    p?.translateExtent(_);
  }
  function R(_) {
    const $ = !Ln(_) || _ < 0 ? 0 : _;
    p?.clickDistance($);
  }
  return {
    update: k,
    destroy: C,
    setViewport: S,
    setViewportConstrained: x,
    getViewport: E,
    scaleTo: L,
    scaleBy: D,
    setScaleExtent: Z,
    setTranslateExtent: q,
    syncViewport: O,
    setClickDistance: R
  };
}
var Il;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Il || (Il = {}));
var mm = /* @__PURE__ */ J("<div><!></div>");
function Qn(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ke.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ Fe(t, [
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
  const y = Un("svelteflow__node_id"), w = Un("svelteflow__node_connectable");
  let k = /* @__PURE__ */ T(() => r() === "target"), C = /* @__PURE__ */ T(() => a() !== void 0 ? a() : w.value), x = pn(), S = /* @__PURE__ */ T(() => x.ariaLabelConfig), O = null;
  Du(() => {
    if (f() || p()) {
      x.edges;
      let M = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (O && !v0(M, O)) {
        const Y = M ?? /* @__PURE__ */ new Map();
        El(O, Y, p()), El(Y, O, f());
      }
      O = new Map(M);
    }
  });
  let E = /* @__PURE__ */ T(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: Y, isValid: Q } = x.connection, re = M && M.nodeId === y && M.type === r() && M.id === n(), K = Y && Y.nodeId === y && Y.type === r() && Y.id === n(), X = x.connectionMode === Jr.Strict ? M?.type !== r() : y !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      re,
      K,
      X,
      K && Q
    ];
  }), L = /* @__PURE__ */ T(() => Vo(c(E), 5)), D = /* @__PURE__ */ T(() => c(L)[0]), Z = /* @__PURE__ */ T(() => c(L)[1]), q = /* @__PURE__ */ T(() => c(L)[2]), R = /* @__PURE__ */ T(() => c(L)[3]), _ = /* @__PURE__ */ T(() => c(L)[4]);
  function $(M) {
    const Y = x.onbeforeconnect ? x.onbeforeconnect(M) : M;
    Y && (x.addEdge(Y), x.onconnect?.(M));
  }
  function b(M) {
    const Y = Zc(M);
    M.currentTarget && (Y && M.button === 0 || !Y) && Rl.onPointerDown(M, {
      handleId: n(),
      nodeId: y,
      isTarget: c(k),
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
      onConnect: $,
      onConnectStart: (Q, re) => {
        x.onconnectstart?.(Q, {
          nodeId: re.nodeId,
          handleId: re.handleId,
          handleType: re.handleType
        });
      },
      onConnectEnd: (Q, re) => {
        x.onconnectend?.(Q, re);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function P(M) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(M, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const Y = Bc(M.target), Q = d() ?? x.isValidConnection, { connectionMode: re, clickConnectStartHandle: K, flowId: X, nodeLookup: U } = x, { connection: se, isValid: ae } = Rl.isValid(M, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: re,
      fromNodeId: K.nodeId,
      fromHandleId: K.id ?? null,
      fromType: K.type,
      isValidConnection: Q,
      flowId: X,
      doc: Y,
      lib: "svelte",
      nodeLookup: U
    });
    ae && se && $(se);
    const ee = structuredClone(hu(x.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, x.onclickconnectend?.(M, ee), x.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), v();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), v();
    },
    get position() {
      return o();
    },
    set position(M = ke.Top) {
      o(M), v();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), v();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect(M) {
      f(M), v();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(M) {
      p(M), v();
    },
    get children() {
      return h();
    },
    set children(M) {
      h(M), v();
    }
  }, z = mm(), j = () => {
  };
  pt(
    z,
    (M) => ({
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
      onkeypress: j,
      style: i(),
      role: "button",
      "aria-label": c(S)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [Zn]: M
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(q),
        connectingfrom: c(Z),
        source: !c(k),
        target: c(k),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(C),
        connectionindicator: c(C) && (!c(D) || c(R)) && (c(D) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var W = B(z);
  return it(W, () => h() ?? xt), I(z), V(e, z), de(N);
}
le(
  Qn,
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
var ym = /* @__PURE__ */ J("<!> <!>", 1);
function _a(e, t) {
  ce(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => ke.Top), o = m(t, "sourcePosition", 23, () => ke.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = ke.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ke.Bottom) {
      o(d), v();
    }
  }, s = ym(), a = ie(s);
  Qn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = H(a), u = H(l);
  return Qn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => qe(l, ` ${n()?.label ?? ""} `)), V(e, s), de(i);
}
le(_a, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var wm = /* @__PURE__ */ J(" <!>", 1);
function nd(e, t) {
  ce(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ke.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = ke.Bottom) {
      r(l), v();
    }
  };
  be();
  var i = wm(), s = ie(i), a = H(s);
  return Qn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => qe(s, `${n()?.label ?? ""} `)), V(e, i), de(o);
}
le(nd, { data: {}, sourcePosition: {} }, [], [], !0);
var bm = /* @__PURE__ */ J(" <!>", 1);
function rd(e, t) {
  ce(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ke.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = ke.Top) {
      r(l), v();
    }
  };
  be();
  var i = bm(), s = ie(i), a = H(s);
  return Qn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => qe(s, `${n()?.label ?? ""} `)), V(e, i), de(o);
}
le(rd, { data: {}, targetPosition: {} }, [], [], !0);
function od(e, t) {
}
le(od, {}, [], [], !0);
function hs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function id(e, t) {
  const n = /* @__PURE__ */ T(pn), r = /* @__PURE__ */ T(() => c(n).domNode);
  let o;
  return c(r) ? hs(e, c(r), t) : o = oa(() => {
    ot(() => {
      hs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      hs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function sd() {
  let e = /* @__PURE__ */ Me(typeof window > "u");
  if (c(e)) {
    const t = oa(() => {
      ot(() => {
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
const jl = (e) => y0(e), xm = (e) => Dc(e);
function _n(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Pi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Cm = /* @__PURE__ */ J("<div><!></div>");
const km = {
  hash: "svelte-yagk5c",
  code: ".transparent.svelte-yagk5c {background:transparent;}"
};
function ad(e, t) {
  ce(t, !0), Ke(e, km);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Fe(t, [
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
  const f = pn(), p = Un("svelteflow__edge_id");
  let h = /* @__PURE__ */ T(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), v();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
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
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), v();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), v();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), v();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), v();
    }
  }, y = Cm(), w = () => {
    s() && p && f.handleEdgeSelection(p);
  };
  pt(
    y,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [bn]: C
    }),
    [
      () => ({
        display: sd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: _n(o()),
        height: _n(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    "svelte-yagk5c"
  );
  var k = B(y);
  return it(k, () => u() ?? xt), I(y), St(y, (C, x) => id?.(C, x), () => "edge-labels"), V(e, y), de(g);
}
le(
  ad,
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
var $m = /* @__PURE__ */ we("<path></path>"), _m = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Wo(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), f = m(t, "interactionWidth", 7, 20), p = m(t, "class", 7), h = /* @__PURE__ */ Fe(t, [
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
    set id(O) {
      n(O), v();
    },
    get path() {
      return r();
    },
    set path(O) {
      r(O), v();
    },
    get label() {
      return o();
    },
    set label(O) {
      o(O), v();
    },
    get labelX() {
      return i();
    },
    set labelX(O) {
      i(O), v();
    },
    get labelY() {
      return s();
    },
    set labelY(O) {
      s(O), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(O) {
      a(O), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(O) {
      l(O), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(O) {
      u(O), v();
    },
    get style() {
      return d();
    },
    set style(O) {
      d(O), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(O = 20) {
      f(O), v();
    },
    get class() {
      return p();
    },
    set class(O) {
      p(O), v();
    }
  }, y = _m(), w = ie(y), k = H(w);
  {
    var C = (O) => {
      var E = $m();
      pt(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), V(O, E);
    };
    ue(k, (O) => {
      f() > 0 && O(C);
    });
  }
  var x = H(k);
  {
    var S = (O) => {
      ad(O, {
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
        children: (E, L) => {
          be();
          var D = Pe();
          Ee(() => qe(D, o())), V(E, D);
        },
        $$slots: { default: !0 }
      });
    };
    ue(x, (O) => {
      o() && O(S);
    });
  }
  return Ee(() => {
    $e(w, "id", n()), $e(w, "d", r()), It(w, 0, Rn(["svelte-flow__edge-path", p()])), $e(w, "marker-start", l()), $e(w, "marker-end", u()), Ct(w, d());
  }), V(e, y), de(g);
}
le(
  Wo,
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
function Sa(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), y = m(t, "targetY", 7), w = /* @__PURE__ */ T(() => Wc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), k = /* @__PURE__ */ T(() => Vo(c(w), 3)), C = /* @__PURE__ */ T(() => c(k)[0]), x = /* @__PURE__ */ T(() => c(k)[1]), S = /* @__PURE__ */ T(() => c(k)[2]);
  var O = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), v();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(E) {
      u(E), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(E) {
      f(E), v();
    },
    get style() {
      return p();
    },
    set style(E) {
      p(E), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(E) {
      h(E), v();
    },
    get targetX() {
      return g();
    },
    set targetX(E) {
      g(E), v();
    },
    get targetY() {
      return y();
    },
    set targetY(E) {
      y(E), v();
    }
  };
  return Wo(e, {
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
      return c(S);
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
  }), de(O);
}
le(
  Sa,
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
function ld(e, t) {
  ce(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ T(() => xa({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ T(() => Vo(c(g), 3)), w = /* @__PURE__ */ T(() => c(y)[0]), k = /* @__PURE__ */ T(() => c(y)[1]), C = /* @__PURE__ */ T(() => c(y)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(S) {
      n(S), v();
    },
    get label() {
      return r();
    },
    set label(S) {
      r(S), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(S) {
      o(S), v();
    },
    get style() {
      return i();
    },
    set style(S) {
      i(S), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(S) {
      l(S), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(S) {
      u(S), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(S) {
      d(S), v();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(S) {
      f(S), v();
    },
    get targetX() {
      return p();
    },
    set targetX(S) {
      p(S), v();
    },
    get targetY() {
      return h();
    },
    set targetY(S) {
      h(S), v();
    }
  };
  return Wo(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(k);
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
  }), de(x);
}
le(
  ld,
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
function ud(e, t) {
  ce(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ T(() => Fc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ T(() => Vo(c(p), 3)), g = /* @__PURE__ */ T(() => c(h)[0]), y = /* @__PURE__ */ T(() => c(h)[1]), w = /* @__PURE__ */ T(() => c(h)[2]);
  var k = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), v();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), v();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), v();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), v();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), v();
    }
  };
  return Wo(e, {
    get path() {
      return c(g);
    },
    get labelX() {
      return c(y);
    },
    get labelY() {
      return c(w);
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
  }), de(k);
}
le(
  ud,
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
function cd(e, t) {
  ce(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ T(() => xa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ T(() => Vo(c(g), 3)), w = /* @__PURE__ */ T(() => c(y)[0]), k = /* @__PURE__ */ T(() => c(y)[1]), C = /* @__PURE__ */ T(() => c(y)[2]);
  var x = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(S) {
      o(S), v();
    },
    get targetX() {
      return i();
    },
    set targetX(S) {
      i(S), v();
    },
    get targetY() {
      return s();
    },
    set targetY(S) {
      s(S), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(S) {
      a(S), v();
    },
    get label() {
      return l();
    },
    set label(S) {
      l(S), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(S) {
      u(S), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(S) {
      d(S), v();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(S) {
      f(S), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(S) {
      p(S), v();
    },
    get style() {
      return h();
    },
    set style(S) {
      h(S), v();
    }
  };
  return Wo(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(k);
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
  }), de(x);
}
le(
  cd,
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
class Sm {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = xu(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Em = /\(.+\)/, Pm = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Nm extends Sm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Em.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Pm.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => $s(o, "change", i)
    );
  }
}
function Tm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return wa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Bl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: k, height: C } = e;
      if (L0({
        sourceNode: f,
        targetNode: p,
        width: k,
        height: C,
        transform: w
      }))
        y.set(f.id, f), y.set(p.id, p);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && f == h.sourceNode && p == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const g = R0({
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
      zIndex: O0({
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
const dd = {
  input: nd,
  output: rd,
  default: _a,
  group: od
}, fd = {
  straight: ud,
  smoothstep: ld,
  default: Sa,
  step: cd
};
function Om(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Bo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ba(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Lm(e) {
  class t {
    #t = /* @__PURE__ */ T(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      G(this.#t, r);
    }
    #e = /* @__PURE__ */ Me(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      G(this.#e, r);
    }
    #a = /* @__PURE__ */ Me(null);
    get panZoom() {
      return c(this.#a);
    }
    set panZoom(r) {
      G(this.#a, r);
    }
    #i = /* @__PURE__ */ Me(e.width ?? 0);
    get width() {
      return c(this.#i);
    }
    set width(r) {
      G(this.#i, r);
    }
    #d = /* @__PURE__ */ Me(e.height ?? 0);
    get height() {
      return c(this.#d);
    }
    set height(r) {
      G(this.#d, r);
    }
    #s = /* @__PURE__ */ T(() => {
      const r = W0(e.nodes, this.nodeLookup, this.parentLookup, {
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
    #r = /* @__PURE__ */ T(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#r);
    }
    set viewportInitialized(r) {
      G(this.#r, r);
    }
    #n = /* @__PURE__ */ T(() => (U0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#n);
    }
    set _edges(r) {
      G(this.#n, r);
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
    #o = /* @__PURE__ */ T(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#o);
    }
    set selectedNodes(r) {
      G(this.#o, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ T(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#l);
    }
    set selectedEdges(r) {
      G(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #f = /* @__PURE__ */ T(() => {
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
        const { viewport: g, width: y, height: w } = this, k = [g.x, g.y, g.zoom];
        f = Tm(s, k, y, w), p = Bl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: k,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, p = Bl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#f);
    }
    set visible(r) {
      G(this.#f, r);
    }
    #c = /* @__PURE__ */ T(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#c);
    }
    set nodesDraggable(r) {
      G(this.#c, r);
    }
    #p = /* @__PURE__ */ T(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#p);
    }
    set nodesConnectable(r) {
      G(this.#p, r);
    }
    #u = /* @__PURE__ */ T(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      G(this.#u, r);
    }
    #h = /* @__PURE__ */ T(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      G(this.#h, r);
    }
    #y = /* @__PURE__ */ T(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      G(this.#y, r);
    }
    #w = /* @__PURE__ */ T(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      G(this.#w, r);
    }
    #b = /* @__PURE__ */ T(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      G(this.#b, r);
    }
    #g = /* @__PURE__ */ T(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#g);
    }
    set maxZoom(r) {
      G(this.#g, r);
    }
    #v = /* @__PURE__ */ T(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#v);
    }
    set nodeOrigin(r) {
      G(this.#v, r);
    }
    #m = /* @__PURE__ */ T(() => e.props.nodeExtent ?? Vs);
    get nodeExtent() {
      return c(this.#m);
    }
    set nodeExtent(r) {
      G(this.#m, r);
    }
    #x = /* @__PURE__ */ T(() => e.props.translateExtent ?? Vs);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      G(this.#x, r);
    }
    #C = /* @__PURE__ */ T(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      G(this.#C, r);
    }
    #k = /* @__PURE__ */ T(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      G(this.#k, r);
    }
    #$ = /* @__PURE__ */ T(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      G(this.#$, r);
    }
    #_ = /* @__PURE__ */ T(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      G(this.#_, r);
    }
    #S = /* @__PURE__ */ T(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      G(this.#S, r);
    }
    #E = /* @__PURE__ */ T(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      G(this.#E, r);
    }
    #P = /* @__PURE__ */ T(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      G(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ T(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      G(this.#N, r);
    }
    #T = /* @__PURE__ */ Me(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      G(this.#T, r);
    }
    #O = /* @__PURE__ */ Me(null);
    get selectionRect() {
      return c(this.#O);
    }
    set selectionRect(r) {
      G(this.#O, r);
    }
    #L = /* @__PURE__ */ Me(!1);
    get selectionKeyPressed() {
      return c(this.#L);
    }
    set selectionKeyPressed(r) {
      G(this.#L, r);
    }
    #M = /* @__PURE__ */ Me(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      G(this.#M, r);
    }
    #V = /* @__PURE__ */ Me(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      G(this.#V, r);
    }
    #D = /* @__PURE__ */ Me(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      G(this.#D, r);
    }
    #z = /* @__PURE__ */ Me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      G(this.#z, r);
    }
    #H = /* @__PURE__ */ Me(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      G(this.#H, r);
    }
    #A = /* @__PURE__ */ Me("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      G(this.#A, r);
    }
    #R = /* @__PURE__ */ T(() => e.props.selectionMode ?? _i.Partial);
    get selectionMode() {
      return c(this.#R);
    }
    set selectionMode(r) {
      G(this.#R, r);
    }
    #I = /* @__PURE__ */ T(() => ({ ...dd, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      G(this.#I, r);
    }
    #j = /* @__PURE__ */ T(() => ({ ...fd, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      G(this.#j, r);
    }
    #B = /* @__PURE__ */ T(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      G(this.#B, r);
    }
    #K = /* @__PURE__ */ T(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      G(this.#K, r);
    }
    #Z = /* @__PURE__ */ T(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      G(this.#Z, r);
    }
    #W = /* @__PURE__ */ T(() => P0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      G(this.#W, r);
    }
    #Y = /* @__PURE__ */ Me(Om(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      G(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #F = /* @__PURE__ */ Me(
      // _connection is viewport independent and originating from XYHandle
      Ds
    );
    get _connection() {
      return c(this.#F);
    }
    set _connection(r) {
      G(this.#F, r);
    }
    #q = /* @__PURE__ */ T(() => this._connection.inProgress ? {
      ...this._connection,
      to: Zo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      G(this.#q, r);
    }
    #X = /* @__PURE__ */ T(() => e.props.connectionMode ?? Jr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      G(this.#X, r);
    }
    #G = /* @__PURE__ */ T(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      G(this.#G, r);
    }
    #U = /* @__PURE__ */ T(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      G(this.#U, r);
    }
    #J = /* @__PURE__ */ T(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      G(this.#J, r);
    }
    #Q = /* @__PURE__ */ T(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      G(this.#Q, r);
    }
    #ee = /* @__PURE__ */ T(() => I0(e.edges, {
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
    #te = /* @__PURE__ */ T(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      G(this.#te, r);
    }
    #ne = /* @__PURE__ */ T(() => e.props.onflowerror ?? $0);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      G(this.#ne, r);
    }
    #re = /* @__PURE__ */ T(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      G(this.#re, r);
    }
    #oe = /* @__PURE__ */ T(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      G(this.#oe, r);
    }
    #ie = /* @__PURE__ */ T(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      G(this.#ie, r);
    }
    #se = /* @__PURE__ */ T(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      G(this.#se, r);
    }
    #ae = /* @__PURE__ */ T(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      G(this.#ae, r);
    }
    #le = /* @__PURE__ */ T(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      G(this.#le, r);
    }
    #ue = /* @__PURE__ */ T(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      G(this.#ue, r);
    }
    #ce = /* @__PURE__ */ T(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      G(this.#ce, r);
    }
    #de = /* @__PURE__ */ T(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      G(this.#de, r);
    }
    #fe = /* @__PURE__ */ T(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      G(this.#fe, r);
    }
    #pe = /* @__PURE__ */ T(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      G(this.#pe, r);
    }
    #he = /* @__PURE__ */ T(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      G(this.#he, r);
    }
    #ge = /* @__PURE__ */ T(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      G(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Me(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      G(this.#ve, r);
    }
    #me = /* @__PURE__ */ T(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      G(this.#me, r);
    }
    #ye = /* @__PURE__ */ T(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      G(this.#ye, r);
    }
    #we = /* @__PURE__ */ T(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      G(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await C0(
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
    _prefersDark = new Nm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ T(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      G(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ds, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function pn() {
  const e = Un(Ni);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ni = Symbol();
function pd(e) {
  const t = Lm(e);
  function n(R) {
    t.nodeTypes = {
      ...dd,
      ...R
    };
  }
  function r(R) {
    t.edgeTypes = {
      ...fd,
      ...R
    };
  }
  function o(R) {
    t.edges = D0(R, t.edges);
  }
  const i = (R, _ = !1) => {
    t.nodes = t.nodes.map(($) => {
      const b = R.get($.id);
      return b ? { ...$, position: b.position, dragging: _ } : $;
    });
  };
  function s(R) {
    const { changes: _, updatedInternals: $ } = X0(R, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!$)
      return;
    K0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const P of _) {
      const N = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!N)
        continue;
      const z = { ...N };
      switch (P.type) {
        case "dimensions": {
          const j = { ...z.measured, ...P.dimensions };
          P.setAttributes && (z.width = P.dimensions?.width ?? z.width, z.height = P.dimensions?.height ?? z.height), z.measured = j;
          break;
        }
        case "position":
          z.position = P.position ?? z.position;
          break;
      }
      b.set(P.id, z);
    }
    t.nodes = t.nodes.map((P) => b.get(P.id) ?? P);
  }
  function a(R) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = R, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(R, _, $) {
    const b = typeof $?.zoom < "u" ? $.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - R * b,
      y: t.height / 2 - _ * b,
      zoom: b
    }, { duration: $?.duration, ease: $?.ease, interpolate: $?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(R, _) {
    const $ = t.panZoom;
    return $ ? $.scaleBy(R, _) : Promise.resolve(!1);
  }
  function d(R) {
    return u(1.2, R);
  }
  function f(R) {
    return u(1 / 1.2, R);
  }
  function p(R) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([R, t.maxZoom]), t.minZoom = R);
  }
  function h(R) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, R]), t.maxZoom = R);
  }
  function g(R) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(R), t.translateExtent = R);
  }
  function y(R) {
    t.panZoom?.setClickDistance(R);
  }
  function w(R, _ = null) {
    let $ = !1;
    const b = R.map((P) => (!_ || _.has(P.id)) && P.selected ? ($ = !0, { ...P, selected: !1 }) : P);
    return [$, b];
  }
  function k(R) {
    const _ = R?.nodes ? new Set(R.nodes.map((j) => j.id)) : null, [$, b] = w(t.nodes, _);
    $ && (t.nodes = b);
    const P = R?.edges ? new Set(R.edges.map((j) => j.id)) : null, [N, z] = w(t.edges, P);
    N && (t.edges = z);
  }
  function C(R) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map(($) => {
      const b = R.includes($.id), P = _ && $.selected || b;
      if ($.selected !== P) {
        const N = t.nodeLookup.get($.id);
        return N && (N.selected = P), $.selected = P, { ...$ };
      }
      return $;
    }), _ || k({ nodes: [] });
  }
  function x(R) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map(($) => {
      const b = R.includes($.id), P = _ && $.selected || b;
      return $.selected !== P ? { ...$, selected: P } : $;
    }), _ || k({ edges: [] });
  }
  function S(R, _, $) {
    const b = t.nodeLookup.get(R);
    if (!b) {
      console.warn("012", So.error012(R));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (_ || b.selected && t.multiselectionKeyPressed) && (k({ nodes: [b], edges: [] }), requestAnimationFrame(() => $?.blur())) : C([R]);
  }
  function O(R) {
    const _ = t.edgeLookup.get(R);
    if (!_) {
      console.warn("012", So.error012(R));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && k({ nodes: [], edges: [_] }) : x([R]));
  }
  function E(R, _) {
    const { nodeExtent: $, snapGrid: b, nodeOrigin: P, nodeLookup: N, nodesDraggable: z, onerror: j } = t, W = /* @__PURE__ */ new Map(), M = b?.[0] ?? 5, Y = b?.[1] ?? 5, Q = R.x * M * _, re = R.y * Y * _;
    for (const K of N.values()) {
      if (!(K.selected && (K.draggable || z && typeof K.draggable > "u")))
        continue;
      let X = {
        x: K.internals.positionAbsolute.x + Q,
        y: K.internals.positionAbsolute.y + re
      };
      b && (X = Ko(X, b));
      const { position: U, positionAbsolute: se } = zc({
        nodeId: K.id,
        nextPosition: X,
        nodeLookup: N,
        nodeExtent: $,
        nodeOrigin: P,
        onError: j
      });
      K.position = U, K.internals.positionAbsolute = se, W.set(K.id, K);
    }
    i(W);
  }
  function L(R) {
    return G0({
      delta: R,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const D = (R) => {
    t._connection = { ...R };
  };
  function Z() {
    t._connection = Ds;
  }
  function q() {
    t.resetStoreValues(), k();
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
    setPaneClickDistance: y,
    unselectNodesAndEdges: k,
    addSelectedNodes: C,
    addSelectedEdges: x,
    handleNodeSelection: S,
    handleEdgeSelection: O,
    moveSelectedNodes: E,
    panBy: L,
    updateConnection: D,
    cancelConnection: Z,
    reset: q
  });
}
function Mm(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: f, onTransformChange: p } = t, h = vm({
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
    update(y) {
      h.update(y);
    }
  };
}
var Vm = /* @__PURE__ */ J('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function hd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "onmovestart", 7), h = m(t, "onmove", 7), g = m(t, "onmoveend", 7), y = m(t, "oninit", 7), w = m(t, "children", 7), k = /* @__PURE__ */ T(() => n().panActivationKeyPressed || l()), C = /* @__PURE__ */ T(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let S = !1;
  ot(() => {
    !S && n().viewportInitialized && (y()?.(), S = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(D) {
      n(D), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(D) {
      r(D), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(D) {
      o(D), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(D) {
      i(D), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(D) {
      s(D), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(D) {
      a(D), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(D) {
      l(D), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(D) {
      u(D), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(D) {
      d(D), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(D) {
      f(D), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(D) {
      p(D), v();
    },
    get onmove() {
      return h();
    },
    set onmove(D) {
      h(D), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(D) {
      g(D), v();
    },
    get oninit() {
      return y();
    },
    set oninit(D) {
      y(D), v();
    },
    get children() {
      return w();
    },
    set children(D) {
      w(D), v();
    }
  }, E = Vm(), L = B(E);
  return it(L, w), I(E), St(E, (D, Z) => Mm?.(D, Z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (D) => {
      n(n().dragging = D, !0);
    },
    setPanZoomInstance: (D) => {
      n(n().panZoom = D, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: h(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(C),
    panOnDrag: c(k),
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
    onTransformChange: (D) => {
      n(n().viewport = { x: D[0], y: D[1], zoom: D[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, E), de(O);
}
le(
  hd,
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
function Kl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Zl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Wl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Dm = /* @__PURE__ */ J("<div><!></div>");
function gd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ T(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ T(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), w = /* @__PURE__ */ T(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), k = !1;
  function C($) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    i()?.({ event: $ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x($) {
    if (f = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || $.button !== 0 || $.target !== d || !f)
      return;
    $.target?.setPointerCapture?.($.pointerId);
    const { x: b, y: P } = sn($, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: b, startY: P, x: b, y: P }, !0), a()?.($);
  }
  function S($) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    k = !0;
    const b = sn($, f), { startX: P = 0, startY: N = 0 } = n().selectionRect, z = {
      ...n().selectionRect,
      x: b.x < P ? b.x : P,
      y: b.y < N ? b.y : N,
      width: Math.abs(b.x - P),
      height: Math.abs(b.y - N)
    }, j = p, W = h;
    p = new Set(wa(
      n().nodeLookup,
      z,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === _i.Partial,
      !0
    ).map((Y) => Y.id));
    const M = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const Y of p) {
      const Q = n().connectionLookup.get(Y);
      if (Q)
        for (const { edgeId: re } of Q.values()) {
          const K = n().edgeLookup.get(re);
          K && (K.selectable ?? M) && h.add(re);
        }
    }
    Wl(j, p) || n(n().nodes = n().nodes.map(Zl(p)), !0), Wl(W, h) || n(n().edges = n().edges.map(Zl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = z, !0);
  }
  function O($) {
    $.button === 0 && ($.target?.releasePointerCapture?.($.pointerId), !c(y) && n().selectionRectMode === "user" && $.target === d && C?.($), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (k = !1), l()?.($));
  }
  const E = ($) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      $.preventDefault();
      return;
    }
    s()?.({ event: $ });
  };
  var L = {
    get store() {
      return n();
    },
    set store($) {
      n($), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag($ = !0) {
      r($), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag($) {
      o($), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick($) {
      i($), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu($) {
      s($), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart($) {
      a($), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend($) {
      l($), v();
    },
    get children() {
      return u();
    },
    set children($) {
      u($), v();
    }
  }, D = Dm();
  let Z;
  var q = /* @__PURE__ */ T(() => c(w) ? void 0 : Kl(C, d));
  D.__click = function(...$) {
    c(q)?.apply(this, $);
  }, D.__pointerdown = function(...$) {
    (c(w) ? x : void 0)?.apply(this, $);
  }, D.__pointermove = function(...$) {
    (c(w) ? S : void 0)?.apply(this, $);
  }, D.__pointerup = function(...$) {
    (c(w) ? O : void 0)?.apply(this, $);
  };
  var R = /* @__PURE__ */ T(() => Kl(E, d));
  D.__contextmenu = function(...$) {
    c(R)?.apply(this, $);
  };
  var _ = B(D);
  return it(_, u), I(D), Zt(D, ($) => d = $, () => d), Ee(($) => Z = It(D, 1, "svelte-flow__pane svelte-flow__container", null, Z, $), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), V(e, D), de(L);
}
ir([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
le(
  gd,
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
var zm = /* @__PURE__ */ J('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function vd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), v();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), v();
    }
  }, i = zm();
  let s;
  var a = B(i);
  return it(a, r), I(i), Ee((l) => s = Ct(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), V(e, i), de(o);
}
le(vd, { store: {}, children: {} }, [], [], !0);
function md(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = tm({
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
var Hm = /* @__PURE__ */ J('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-h8i2bw"> </div>'), Am = /* @__PURE__ */ J('<div class="a11y-hidden svelte-h8i2bw"> </div> <div class="a11y-hidden svelte-h8i2bw"> </div> <!>', 1);
const Rm = {
  hash: "svelte-h8i2bw",
  code: ".a11y-hidden.svelte-h8i2bw {display:none;}.a11y-live-msg.svelte-h8i2bw {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function yd(e, t) {
  ce(t, !0), Ke(e, Rm);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = Am(), i = ie(o), s = B(i, !0);
  I(i);
  var a = H(i, 2), l = B(a, !0);
  I(a);
  var u = H(a, 2);
  {
    var d = (f) => {
      var p = Hm(), h = B(p, !0);
      I(p), Ee(() => {
        $e(p, "id", `${Im}-${n().flowId}`), qe(h, n().ariaLiveMessage);
      }), V(f, p);
    };
    ue(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Ee(() => {
    $e(i, "id", `${wd}-${n().flowId}`), qe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(a, "id", `${bd}-${n().flowId}`), qe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, o), de(r);
}
le(yd, { store: {} }, [], [], !0);
const wd = "svelte-flow__node-desc", bd = "svelte-flow__edge-desc", Im = "svelte-flow__aria-live";
var jm = /* @__PURE__ */ J("<div><!></div>");
function xd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ T(() => Tt(r().data, () => ({}), !0)), y = /* @__PURE__ */ T(() => Tt(r().selected, !1)), w = /* @__PURE__ */ T(() => r().draggable), k = /* @__PURE__ */ T(() => r().selectable), C = /* @__PURE__ */ T(() => Tt(r().deletable, !0)), x = /* @__PURE__ */ T(() => r().connectable), S = /* @__PURE__ */ T(() => r().focusable), O = /* @__PURE__ */ T(() => Tt(r().hidden, !1)), E = /* @__PURE__ */ T(() => Tt(r().dragging, !1)), L = /* @__PURE__ */ T(() => Tt(r().style, "")), D = /* @__PURE__ */ T(() => r().class), Z = /* @__PURE__ */ T(() => Tt(r().type, "default")), q = /* @__PURE__ */ T(() => r().parentId), R = /* @__PURE__ */ T(() => r().sourcePosition), _ = /* @__PURE__ */ T(() => r().targetPosition), $ = /* @__PURE__ */ T(() => Tt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ T(() => Tt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ T(() => r().initialWidth), N = /* @__PURE__ */ T(() => r().initialHeight), z = /* @__PURE__ */ T(() => r().width), j = /* @__PURE__ */ T(() => r().height), W = /* @__PURE__ */ T(() => r().dragHandle), M = /* @__PURE__ */ T(() => Tt(r().internals.z, 0)), Y = /* @__PURE__ */ T(() => r().internals.positionAbsolute.x), Q = /* @__PURE__ */ T(() => r().internals.positionAbsolute.y), re = /* @__PURE__ */ T(() => r().internals.userNode), { id: K } = r(), X = /* @__PURE__ */ T(() => c(w) ?? n().nodesDraggable), U = /* @__PURE__ */ T(() => c(k) ?? n().elementsSelectable), se = /* @__PURE__ */ T(() => c(x) ?? n().nodesConnectable), ae = /* @__PURE__ */ T(() => Ic(r())), ee = /* @__PURE__ */ T(() => !!r().internals.handleBounds), ye = /* @__PURE__ */ T(() => c(ae) && c(ee)), fe = /* @__PURE__ */ T(() => c(S) ?? n().nodesFocusable);
  function ne(me) {
    return n().parentLookup.has(me);
  }
  let oe = /* @__PURE__ */ T(() => ne(K)), ge = /* @__PURE__ */ Me(null), ve = null, xe = c(Z), pe = c(R), _e = c(_), Le = /* @__PURE__ */ T(() => n().nodeTypes[c(Z)] ?? _a), F = /* @__PURE__ */ T(() => n().ariaLabelConfig);
  Zr("svelteflow__node_connectable", {
    get value() {
      return c(se);
    }
  }), Zr("svelteflow__node_id", K);
  let Je = /* @__PURE__ */ T(() => {
    const me = c($) === void 0 ? c(z) ?? c(P) : c(z), Be = c(b) === void 0 ? c(j) ?? c(N) : c(j);
    if (!(me === void 0 && Be === void 0 && c(L) === void 0))
      return `${c(L)};${me ? `width:${_n(me)};` : ""}${Be ? `height:${_n(Be)};` : ""}`;
  });
  ot(() => {
    (c(Z) !== xe || c(R) !== pe || c(_) !== _e) && c(ge) !== null && requestAnimationFrame(() => {
      c(ge) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[K, { id: K, nodeElement: c(ge), force: !0 }]]));
    }), xe = c(Z), pe = c(R), _e = c(_);
  }), ot(() => {
    o() && (!c(ye) || c(ge) !== ve) && (ve && o().unobserve(ve), c(ge) && o().observe(c(ge)), ve = c(ge));
  }), Ii(() => {
    ve && o()?.unobserve(ve);
  });
  function Re(me) {
    c(U) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(K), s()?.({ node: c(re), event: me });
  }
  function We(me) {
    if (!(Kc(me) || n().disableKeyboardA11y))
      if (Vc.includes(me.key) && c(U)) {
        const Be = me.key === "Escape";
        n().handleNodeSelection(K, Be, c(ge));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(Pi, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(F)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Pi[me.key], me.shiftKey ? 4 : 1));
  }
  const Ze = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ge)?.matches(":focus-visible"))
      return;
    const { width: me, height: Be, viewport: mt } = n();
    wa(/* @__PURE__ */ new Map([[K, r()]]), { x: 0, y: 0, width: me, height: Be }, [mt.x, mt.y, mt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: mt.zoom });
  };
  var nt = {
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
      return f();
    },
    set onnodepointerleave(me) {
      f(me), v();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(me) {
      p(me), v();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(me) {
      h(me), v();
    }
  }, $t = Oe(), Qe = ie($t);
  {
    var je = (me) => {
      var Be = jm();
      pt(
        Be,
        (tt, _t) => ({
          "data-id": K,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(Z)}`,
            c(D)
          ],
          style: c(Je),
          onclick: Re,
          onpointerenter: d() ? (ct) => d()({ node: c(re), event: ct }) : void 0,
          onpointerleave: f() ? (ct) => f()({ node: c(re), event: ct }) : void 0,
          onpointermove: p() ? (ct) => p()({ node: c(re), event: ct }) : void 0,
          oncontextmenu: h() ? (ct) => h()({ node: c(re), event: ct }) : void 0,
          onkeydown: c(fe) ? We : void 0,
          onfocus: c(fe) ? Ze : void 0,
          tabIndex: c(fe) ? 0 : void 0,
          role: r().ariaRole ?? (c(fe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${wd}-${n().flowId}`,
          ...r().domAttributes,
          [Zn]: tt,
          [bn]: _t
        }),
        [
          () => ({
            dragging: c(E),
            selected: c(y),
            draggable: c(X),
            connectable: c(se),
            selectable: c(U),
            nopan: c(X),
            parent: c(oe)
          }),
          () => ({
            "z-index": c(M),
            transform: `translate(${c(Y) ?? ""}px, ${c(Q) ?? ""}px)`,
            visibility: c(ae) ? "visible" : "hidden"
          })
        ]
      );
      var mt = B(Be);
      ji(mt, () => c(Le), (tt, _t) => {
        _t(tt, {
          get data() {
            return c(g);
          },
          get id() {
            return K;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(R);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(M);
          },
          get dragging() {
            return c(E);
          },
          get draggable() {
            return c(X);
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
            return c(se);
          },
          get positionAbsoluteX() {
            return c(Y);
          },
          get positionAbsoluteY() {
            return c(Q);
          },
          get width() {
            return c(z);
          },
          get height() {
            return c(j);
          }
        });
      }), I(Be), St(Be, (tt, _t) => md?.(tt, _t), () => ({
        nodeId: K,
        isSelectable: c(U),
        disabled: !c(X),
        handleSelector: c(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (tt, _t, ct, dt) => {
          a()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStart: (tt, _t, ct, dt) => {
          l()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStop: (tt, _t, ct, dt) => {
          u()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        store: n()
      })), Zt(Be, (tt) => G(ge, tt), () => c(ge)), V(me, Be);
    };
    ue(Qe, (me) => {
      c(O) || me(je);
    });
  }
  return V(e, $t), de(nt);
}
le(
  xd,
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
var Bm = /* @__PURE__ */ J('<div class="svelte-flow__nodes"></div>');
function Cd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((k) => {
      const C = k.target.getAttribute("data-id");
      w.set(C, { id: C, nodeElement: k.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Ii(() => {
    p?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), v();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(y) {
      u(y), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), v();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(y) {
      f(y), v();
    }
  }, g = Bm();
  return Pt(g, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    xd(y, {
      get node() {
        return c(w);
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
      set store(k) {
        n(k);
      }
    });
  }), I(g), V(e, g), de(h);
}
le(
  Cd,
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
var Km = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function kd(e, t) {
  ce(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ T(() => n().source), u = /* @__PURE__ */ T(() => n().target), d = /* @__PURE__ */ T(() => n().sourceX), f = /* @__PURE__ */ T(() => n().sourceY), p = /* @__PURE__ */ T(() => n().targetX), h = /* @__PURE__ */ T(() => n().targetY), g = /* @__PURE__ */ T(() => n().sourcePosition), y = /* @__PURE__ */ T(() => n().targetPosition), w = /* @__PURE__ */ T(() => Tt(n().animated, !1)), k = /* @__PURE__ */ T(() => Tt(n().selected, !1)), C = /* @__PURE__ */ T(() => n().label), x = /* @__PURE__ */ T(() => n().labelStyle), S = /* @__PURE__ */ T(() => Tt(n().data, () => ({}), !0)), O = /* @__PURE__ */ T(() => n().style), E = /* @__PURE__ */ T(() => n().interactionWidth), L = /* @__PURE__ */ T(() => Tt(n().type, "default")), D = /* @__PURE__ */ T(() => n().sourceHandle), Z = /* @__PURE__ */ T(() => n().targetHandle), q = /* @__PURE__ */ T(() => n().markerStart), R = /* @__PURE__ */ T(() => n().markerEnd), _ = /* @__PURE__ */ T(() => n().selectable), $ = /* @__PURE__ */ T(() => n().focusable), b = /* @__PURE__ */ T(() => Tt(n().deletable, !0)), P = /* @__PURE__ */ T(() => n().hidden), N = /* @__PURE__ */ T(() => n().zIndex), z = /* @__PURE__ */ T(() => n().class), j = /* @__PURE__ */ T(() => n().ariaLabel), W = null;
  const { id: M } = n();
  Zr("svelteflow__edge_id", M);
  let Y = /* @__PURE__ */ T(() => c(_) ?? r().elementsSelectable), Q = /* @__PURE__ */ T(() => c($) ?? r().edgesFocusable), re = /* @__PURE__ */ T(() => r().edgeTypes[c(L)] ?? Sa), K = /* @__PURE__ */ T(() => c(q) ? `url('#${Hs(c(q), r().flowId)}')` : void 0), X = /* @__PURE__ */ T(() => c(R) ? `url('#${Hs(c(R), r().flowId)}')` : void 0);
  function U(oe) {
    const ge = r().edgeLookup.get(M);
    ge && (c(Y) && r().handleEdgeSelection(M), o()?.({ event: oe, edge: ge }));
  }
  function se(oe, ge) {
    const ve = r().edgeLookup.get(M);
    ve && ge({ event: oe, edge: ve });
  }
  function ae(oe) {
    if (!r().disableKeyboardA11y && Vc.includes(oe.key) && c(Y)) {
      const { unselectNodesAndEdges: ge, addSelectedEdges: ve } = r();
      oe.key === "Escape" ? (W?.blur(), ge({ edges: [n()] })) : ve([M]);
    }
  }
  var ee = {
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
  }, ye = Oe(), fe = ie(ye);
  {
    var ne = (oe) => {
      var ge = Km();
      let ve;
      var xe = B(ge);
      pt(
        xe,
        (_e) => ({
          class: ["svelte-flow__edge", c(z)],
          "data-id": M,
          onclick: U,
          oncontextmenu: i() ? (Le) => {
            se(Le, i());
          } : void 0,
          onpointerenter: s() ? (Le) => {
            se(Le, s());
          } : void 0,
          onpointerleave: a() ? (Le) => {
            se(Le, a());
          } : void 0,
          "aria-label": c(j) === null ? void 0 : c(j) ? c(j) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(Q) ? `${bd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(Q) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(Q) ? ae : void 0,
          tabindex: c(Q) ? 0 : void 0,
          ...n().domAttributes,
          [Zn]: _e
        }),
        [
          () => ({
            animated: c(w),
            selected: c(k),
            selectable: c(Y)
          })
        ]
      );
      var pe = B(xe);
      ji(pe, () => c(re), (_e, Le) => {
        Le(_e, {
          get id() {
            return M;
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
            return c(y);
          },
          get animated() {
            return c(w);
          },
          get selected() {
            return c(k);
          },
          get label() {
            return c(C);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(S);
          },
          get style() {
            return c(O);
          },
          get interactionWidth() {
            return c(E);
          },
          get selectable() {
            return c(Y);
          },
          get deletable() {
            return c(b);
          },
          get type() {
            return c(L);
          },
          get sourceHandleId() {
            return c(D);
          },
          get targetHandleId() {
            return c(Z);
          },
          get markerStart() {
            return c(K);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), I(xe), Zt(xe, (_e) => W = _e, () => W), I(ge), Ee((_e) => ve = Ct(ge, "", ve, _e), [() => ({ "z-index": c(N) })]), V(oe, ge);
    };
    ue(fe, (oe) => {
      c(P) || oe(ne);
    });
  }
  return V(e, ye), de(ee);
}
le(
  kd,
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
Ep();
var Zm = /* @__PURE__ */ we("<defs></defs>");
function $d(e, t) {
  ce(t, !1);
  const n = pn();
  nc();
  var r = Zm();
  Pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    _d(o, Xe(() => c(i)));
  }), I(r), V(e, r), de();
}
le($d, {}, [], [], !0);
var Wm = /* @__PURE__ */ we('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Ym = /* @__PURE__ */ we('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Fm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function _d(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7, "none"), u = m(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), v();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), v();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), v();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), v();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), v();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), v();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), v();
    }
  }, f = Fm(), p = B(f);
  {
    var h = (y) => {
      var w = Wm();
      let k;
      Ee(
        (C) => {
          $e(w, "stroke-width", u()), k = Ct(w, "", k, C);
        },
        [() => ({ stroke: l() })]
      ), V(y, w);
    }, g = (y) => {
      var w = Oe(), k = ie(w);
      {
        var C = (x) => {
          var S = Ym();
          let O;
          Ee(
            (E) => {
              $e(S, "stroke-width", u()), O = Ct(S, "", O, E);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), V(x, S);
        };
        ue(
          k,
          (x) => {
            r() === Eo.ArrowClosed && x(C);
          },
          !0
        );
      }
      V(y, w);
    };
    ue(p, (y) => {
      r() === Eo.Arrow ? y(h) : y(g, !1);
    });
  }
  return I(f), Ee(() => {
    $e(f, "id", n()), $e(f, "markerWidth", `${o()}`), $e(f, "markerHeight", `${i()}`), $e(f, "markerUnits", s()), $e(f, "orient", a());
  }), V(e, f), de(d);
}
le(
  _d,
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
var qm = /* @__PURE__ */ J('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Sd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = {
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
  }, l = qm(), u = B(l), d = B(u);
  $d(d, {}), I(u);
  var f = H(u, 2);
  return Pt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    kd(p, {
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
  }), I(l), V(e, l), de(a);
}
le(
  Sd,
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
var Xm = /* @__PURE__ */ J('<div class="svelte-flow__selection svelte-eplraw"></div>');
const Gm = {
  hash: "svelte-eplraw",
  code: ".svelte-flow__selection.svelte-eplraw {position:absolute;top:0;left:0;}"
};
function Ea(e, t) {
  ce(t, !0), Ke(e, Gm);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), v();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), v();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), v();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), v();
    }
  }, l = Oe(), u = ie(l);
  {
    var d = (f) => {
      var p = Xm();
      let h;
      Ee((g) => h = Ct(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : _n(o()),
          height: typeof i() == "string" ? i() : _n(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(f, p);
    };
    ue(u, (f) => {
      s() && f(d);
    });
  }
  return V(e, l), de(a);
}
le(Ea, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Um(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function Jm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var Qm = /* @__PURE__ */ J("<div><!></div>");
const ey = {
  hash: "svelte-jl8ebg",
  code: ".svelte-flow__selection-wrapper.svelte-jl8ebg {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Ed(e, t) {
  ce(t, !0), Ke(e, ey);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Me(void 0);
  ot(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ T(() => n().selectionRectMode === "nodes" ? (n().nodes, Bo(n().nodeLookup, { filter: (y) => !!y.selected })) : null);
  function d(y) {
    Object.prototype.hasOwnProperty.call(Pi, y.key) && (y.preventDefault(), n().moveSelectedNodes(Pi[y.key], y.shiftKey ? 4 : 1));
  }
  var f = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(y) {
      r(y), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(y) {
      o(y), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(y) {
      i(y), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(y) {
      s(y), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(y) {
      a(y), v();
    }
  }, p = Oe(), h = ie(p);
  {
    var g = (y) => {
      var w = Qm();
      w.__contextmenu = [Um, n, a], w.__click = [Jm, n, s], w.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let k;
      var C = B(w);
      Ea(C, { width: "100%", height: "100%", x: 0, y: 0 }), I(w), St(w, (x, S) => md?.(x, S), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, S, O, E) => {
          r()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStart: (x, S, O, E) => {
          o()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStop: (x, S, O, E) => {
          i()?.({ event: x, targetNode: null, nodes: E });
        }
      })), Zt(w, (x) => G(l, x), () => c(l)), Ee(
        (x) => {
          It(w, 1, Rn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-jl8ebg"), $e(w, "role", n().disableKeyboardA11y ? void 0 : "button"), $e(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), k = Ct(w, "", k, x);
        },
        [
          () => ({
            width: _n(c(u).width),
            height: _n(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), V(y, w);
    };
    ue(h, (y) => {
      n().selectionRectMode === "nodes" && c(u) && Ln(c(u).x) && Ln(c(u).y) && y(g);
    });
  }
  return V(e, p), de(f);
}
ir(["contextmenu", "click", "keydown"]);
le(
  Ed,
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
function ty(e) {
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
function mn(e, t) {
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
      }, { modifier: p, key: h, callback: g, preventDefault: y, enabled: w } = f;
      if (w) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const C = Array.isArray(p) ? p : [p];
          let x = !1;
          for (const S of C)
            if ((Array.isArray(S) ? S : [S]).reduce(
              (O, E) => O | ty(E),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const k = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: k })), g?.(k);
      }
    }
  }
  let s;
  return n && (s = $s(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = $s(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function kt() {
  const e = /* @__PURE__ */ T(pn), t = (i) => {
    const s = jl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? E0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return eo(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = wt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && jl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = wt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && xm(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Yl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Yl(c(e).edgeLookup, i),
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
    getViewport: () => hu(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = ba(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = Nl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = eo(f), h = Po(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Nl(i) ? i : t(i);
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
      return Zo(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = Ei(i, [s, a, l]);
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
    getNodesBounds: (i) => w0(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Yl(e, t) {
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
function Pd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => pr() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => pr() ? "Meta" : "Control"), { deleteElements: l } = kt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function f(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function p(w, k) {
    return (Array.isArray(w) ? w : [w]).map((C) => {
      const x = f(C);
      return {
        key: x,
        modifier: d(C),
        enabled: x !== null,
        callback: k
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const w = n().nodes.filter((C) => C.selected), k = n().edges.filter((C) => C.selected);
    l({ nodes: w, edges: k });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = pr() ? "Meta" : "Control") {
      o(w), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = pr() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return Ja("blur", Dt, h), Ja("contextmenu", Dt, h), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Kc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Dt, (w, k) => mn?.(w, k), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), de(y);
}
le(
  Pd,
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
var ny = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), ry = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Nd(e, t) {
  ce(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ T(() => {
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
      case Tn.Bezier: {
        const [h] = Wc(p);
        return h;
      }
      case Tn.Straight: {
        const [h] = Fc(p);
        return h;
      }
      case Tn.Step:
      case Tn.SmoothStep: {
        const [h] = xa({
          ...p,
          borderRadius: r() === Tn.Step ? 0 : void 0
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
  }, u = Oe(), d = ie(u);
  {
    var f = (p) => {
      var h = ry(), g = B(h), y = B(g);
      {
        var w = (C) => {
          var x = Oe(), S = ie(x);
          ji(S, s, (O, E) => {
            E(O, {});
          }), V(C, x);
        }, k = (C) => {
          var x = ny();
          Ee(() => {
            $e(x, "d", c(a)), Ct(x, i());
          }), V(C, x);
        };
        ue(y, (C) => {
          s() ? C(w) : C(k, !1);
        });
      }
      I(g), I(h), Ee(
        (C) => {
          $e(h, "width", n().width), $e(h, "height", n().height), Ct(h, o()), It(g, 0, C);
        },
        [
          () => Rn([
            "svelte-flow__connection",
            m0(n().connection.isValid)
          ])
        ]
      ), V(p, h);
    };
    ue(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return V(e, u), de(l);
}
le(
  Nd,
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
var oy = /* @__PURE__ */ J("<div><!></div>");
function Yo(e, t) {
  ce(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Fe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ T(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(f = "top-right") {
      n(f), v();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), v();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), v();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), v();
    }
  }, u = oy();
  pt(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return it(d, () => i() ?? xt), I(u), V(e, u), de(l);
}
le(Yo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var iy = /* @__PURE__ */ J('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Td(e, t) {
  ce(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), v();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), v();
    }
  }, i = Oe(), s = ie(i);
  {
    var a = (l) => {
      Yo(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = iy();
          V(u, f);
        },
        $$slots: { default: !0 }
      });
    };
    ue(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return V(e, i), de(o);
}
le(Td, { proOptions: {}, position: {} }, [], [], !0);
var sy = /* @__PURE__ */ J("<div><!></div>");
const ay = {
  hash: "svelte-1q89zv",
  code: ".svelte-flow.svelte-1q89zv {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Od(e, t) {
  ce(t, !0), Ke(e, ay);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ T(() => u().class), f = /* @__PURE__ */ T(() => th(u(), [
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
  function p(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var h = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), v();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), v();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), v();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), v();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), v();
    }
  }, g = sy();
  pt(
    g,
    (w) => ({
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
      [bn]: w
    }),
    [
      () => ({ width: _n(n()), height: _n(r()) })
    ],
    void 0,
    "svelte-1q89zv"
  );
  var y = B(g);
  return it(y, () => l() ?? xt), I(g), Zt(g, (w) => i(w), () => i()), il(g, "clientHeight", a), il(g, "clientWidth", s), V(e, g), de(h);
}
le(
  Od,
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
var ly = /* @__PURE__ */ J('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), uy = /* @__PURE__ */ J("<!> <!>", 1), cy = /* @__PURE__ */ J("<!> <!> <!> <!> <!>", 1);
function Ld(e, t) {
  ce(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), y = m(t, "oninit", 7), w = m(t, "onnodeclick", 7), k = m(t, "onnodecontextmenu", 7), C = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), S = m(t, "onnodedragstop", 7), O = m(t, "onnodepointerenter", 7), E = m(t, "onnodepointermove", 7), L = m(t, "onnodepointerleave", 7), D = m(t, "onselectionclick", 7), Z = m(t, "onselectioncontextmenu", 7), q = m(t, "onselectionstart", 7), R = m(t, "onselectionend", 7), _ = m(t, "onedgeclick", 7), $ = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), N = m(t, "onpaneclick", 7), z = m(t, "onpanecontextmenu", 7), j = m(t, "panOnScrollMode", 23, () => yr.Free), W = m(t, "preventScrolling", 7, !0), M = m(t, "zoomOnScroll", 7, !0), Y = m(t, "zoomOnDoubleClick", 7, !0), Q = m(t, "zoomOnPinch", 7, !0), re = m(t, "panOnScroll", 7, !1), K = m(t, "panOnScrollSpeed", 7, 0.5), X = m(t, "panOnDrag", 7, !0), U = m(t, "selectionOnDrag", 7, !0), se = m(t, "connectionLineComponent", 7), ae = m(t, "connectionLineStyle", 7), ee = m(t, "connectionLineContainerStyle", 7), ye = m(t, "connectionLineType", 23, () => Tn.Bezier), fe = m(t, "attributionPosition", 7), ne = m(t, "children", 7), oe = m(t, "nodes", 31, () => Xt([])), ge = m(t, "edges", 31, () => Xt([])), ve = m(t, "viewport", 31, () => {
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
  ]), pe = pd({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(F) {
      oe(F);
    },
    get edges() {
      return ge();
    },
    set edges(F) {
      ge(F);
    },
    get viewport() {
      return ve();
    },
    set viewport(F) {
      ve(F);
    }
  });
  const _e = Un(Ni);
  _e && _e.setStore && _e.setStore(pe), Zr(Ni, {
    provider: !1,
    getStore() {
      return pe;
    }
  }), ot(() => {
    const F = { nodes: pe.selectedNodes, edges: pe.selectedEdges };
    wt(() => t.onselectionchange)?.(F);
    for (const Je of pe.selectionChangeHandlers.values())
      Je(F);
  }), Ii(() => {
    pe.reset();
  });
  var Le = {
    get width() {
      return n();
    },
    set width(F) {
      n(F), v();
    },
    get height() {
      return r();
    },
    set height(F) {
      r(F), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(F) {
      o(F), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(F) {
      i(F), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(F) {
      s(F), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(F) {
      a(F), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(F) {
      l(F), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(F) {
      u(F), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(F = 1) {
      d(F), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(F = 1) {
      f(F), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(F) {
      p(F), v();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(F) {
      h(F), v();
    },
    get onmove() {
      return g();
    },
    set onmove(F) {
      g(F), v();
    },
    get oninit() {
      return y();
    },
    set oninit(F) {
      y(F), v();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(F) {
      w(F), v();
    },
    get onnodecontextmenu() {
      return k();
    },
    set onnodecontextmenu(F) {
      k(F), v();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(F) {
      C(F), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(F) {
      x(F), v();
    },
    get onnodedragstop() {
      return S();
    },
    set onnodedragstop(F) {
      S(F), v();
    },
    get onnodepointerenter() {
      return O();
    },
    set onnodepointerenter(F) {
      O(F), v();
    },
    get onnodepointermove() {
      return E();
    },
    set onnodepointermove(F) {
      E(F), v();
    },
    get onnodepointerleave() {
      return L();
    },
    set onnodepointerleave(F) {
      L(F), v();
    },
    get onselectionclick() {
      return D();
    },
    set onselectionclick(F) {
      D(F), v();
    },
    get onselectioncontextmenu() {
      return Z();
    },
    set onselectioncontextmenu(F) {
      Z(F), v();
    },
    get onselectionstart() {
      return q();
    },
    set onselectionstart(F) {
      q(F), v();
    },
    get onselectionend() {
      return R();
    },
    set onselectionend(F) {
      R(F), v();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(F) {
      _(F), v();
    },
    get onedgecontextmenu() {
      return $();
    },
    set onedgecontextmenu(F) {
      $(F), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(F) {
      b(F), v();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(F) {
      P(F), v();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(F) {
      N(F), v();
    },
    get onpanecontextmenu() {
      return z();
    },
    set onpanecontextmenu(F) {
      z(F), v();
    },
    get panOnScrollMode() {
      return j();
    },
    set panOnScrollMode(F = yr.Free) {
      j(F), v();
    },
    get preventScrolling() {
      return W();
    },
    set preventScrolling(F = !0) {
      W(F), v();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(F = !0) {
      M(F), v();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(F = !0) {
      Y(F), v();
    },
    get zoomOnPinch() {
      return Q();
    },
    set zoomOnPinch(F = !0) {
      Q(F), v();
    },
    get panOnScroll() {
      return re();
    },
    set panOnScroll(F = !1) {
      re(F), v();
    },
    get panOnScrollSpeed() {
      return K();
    },
    set panOnScrollSpeed(F = 0.5) {
      K(F), v();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(F = !0) {
      X(F), v();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(F = !0) {
      U(F), v();
    },
    get connectionLineComponent() {
      return se();
    },
    set connectionLineComponent(F) {
      se(F), v();
    },
    get connectionLineStyle() {
      return ae();
    },
    set connectionLineStyle(F) {
      ae(F), v();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(F) {
      ee(F), v();
    },
    get connectionLineType() {
      return ye();
    },
    set connectionLineType(F = Tn.Bezier) {
      ye(F), v();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(F) {
      fe(F), v();
    },
    get children() {
      return ne();
    },
    set children(F) {
      ne(F), v();
    },
    get nodes() {
      return oe();
    },
    set nodes(F = []) {
      oe(F), v();
    },
    get edges() {
      return ge();
    },
    set edges(F = []) {
      ge(F), v();
    },
    get viewport() {
      return ve();
    },
    set viewport(F = void 0) {
      ve(F), v();
    }
  };
  return Od(e, {
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
    set domNode(F) {
      pe.domNode = F;
    },
    get clientWidth() {
      return pe.width;
    },
    set clientWidth(F) {
      pe.width = F;
    },
    get clientHeight() {
      return pe.height;
    },
    set clientHeight(F) {
      pe.height = F;
    },
    children: (F, Je) => {
      var Re = cy(), We = ie(Re);
      Pd(We, {
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
        set store(je) {
          pe = je;
        }
      });
      var Ze = H(We, 2);
      hd(Ze, {
        get panOnScrollMode() {
          return j();
        },
        get preventScrolling() {
          return W();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return Q();
        },
        get panOnScroll() {
          return re();
        },
        get panOnScrollSpeed() {
          return K();
        },
        get panOnDrag() {
          return X();
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
          return y();
        },
        get store() {
          return pe;
        },
        set store(je) {
          pe = je;
        },
        children: (je, me) => {
          gd(je, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return z();
            },
            get onselectionstart() {
              return q();
            },
            get onselectionend() {
              return R();
            },
            get panOnDrag() {
              return X();
            },
            get selectionOnDrag() {
              return U();
            },
            get store() {
              return pe;
            },
            set store(Be) {
              pe = Be;
            },
            children: (Be, mt) => {
              var tt = uy(), _t = ie(tt);
              vd(_t, {
                get store() {
                  return pe;
                },
                set store(dt) {
                  pe = dt;
                },
                children: (dt, gn) => {
                  var vn = ly(), Kn = H(ie(vn), 2);
                  Sd(Kn, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return $();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return pe;
                    },
                    set store(tn) {
                      pe = tn;
                    }
                  });
                  var ur = H(Kn, 4);
                  Nd(ur, {
                    get type() {
                      return ye();
                    },
                    get LineComponent() {
                      return se();
                    },
                    get containerStyle() {
                      return ee();
                    },
                    get style() {
                      return ae();
                    },
                    get store() {
                      return pe;
                    },
                    set store(tn) {
                      pe = tn;
                    }
                  });
                  var Pn = H(ur, 2);
                  Cd(Pn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return k();
                    },
                    get onnodepointerenter() {
                      return O();
                    },
                    get onnodepointermove() {
                      return E();
                    },
                    get onnodepointerleave() {
                      return L();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return pe;
                    },
                    set store(tn) {
                      pe = tn;
                    }
                  });
                  var ao = H(Pn, 2);
                  Ed(ao, {
                    get onselectionclick() {
                      return D();
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
                      return S();
                    },
                    get store() {
                      return pe;
                    },
                    set store(tn) {
                      pe = tn;
                    }
                  }), be(2), V(dt, vn);
                },
                $$slots: { default: !0 }
              });
              var ct = H(_t, 2);
              {
                let dt = /* @__PURE__ */ T(() => !!(pe.selectionRect && pe.selectionRectMode === "user")), gn = /* @__PURE__ */ T(() => pe.selectionRect?.width), vn = /* @__PURE__ */ T(() => pe.selectionRect?.height), Kn = /* @__PURE__ */ T(() => pe.selectionRect?.x), ur = /* @__PURE__ */ T(() => pe.selectionRect?.y);
                Ea(ct, {
                  get isVisible() {
                    return c(dt);
                  },
                  get width() {
                    return c(gn);
                  },
                  get height() {
                    return c(vn);
                  },
                  get x() {
                    return c(Kn);
                  },
                  get y() {
                    return c(ur);
                  }
                });
              }
              V(Be, tt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var nt = H(Ze, 2);
      Td(nt, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var $t = H(nt, 2);
      yd($t, {
        get store() {
          return pe;
        }
      });
      var Qe = H($t, 2);
      it(Qe, () => ne() ?? xt), V(F, Re);
    },
    $$slots: { default: !0 }
  }), de(Le);
}
le(
  Ld,
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
function Md(e, t) {
  ce(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Me(pd({ props: {}, nodes: [], edges: [] }));
  Zr(Ni, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      G(r, a);
    }
  }), Ii(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Oe(), s = ie(i);
  return it(s, () => n() ?? xt), V(e, i), de(o);
}
le(Md, { children: {} }, [], [], !0);
var dy = /* @__PURE__ */ J("<button><!></button>");
function mo(e, t) {
  ce(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Fe(t, [
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
  }, p = dy();
  pt(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [bn]: g
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
  var h = B(p);
  return it(h, () => u() ?? xt), I(p), V(e, p), de(f);
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
var fy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Vd(e) {
  var t = fy();
  V(e, t);
}
le(Vd, {}, [], [], !0);
var py = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Dd(e) {
  var t = py();
  V(e, t);
}
le(Dd, {}, [], [], !0);
var hy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function zd(e) {
  var t = hy();
  V(e, t);
}
le(zd, {}, [], [], !0);
var gy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Hd(e) {
  var t = gy();
  V(e, t);
}
le(Hd, {}, [], [], !0);
var vy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Ad(e) {
  var t = vy();
  V(e, t);
}
le(Ad, {}, [], [], !0);
var my = /* @__PURE__ */ J("<!> <!>", 1), yy = /* @__PURE__ */ J("<!> <!> <!> <!> <!> <!>", 1);
function Rd(e, t) {
  ce(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), y = m(t, "children", 7), w = m(t, "before", 7), k = m(t, "after", 7), C = /* @__PURE__ */ Fe(t, [
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
  ]), x = /* @__PURE__ */ T(pn);
  const S = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let O = /* @__PURE__ */ T(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), E = /* @__PURE__ */ T(() => c(x).viewport.zoom <= c(x).minZoom), L = /* @__PURE__ */ T(() => c(x).viewport.zoom >= c(x).maxZoom), D = /* @__PURE__ */ T(() => c(x).ariaLabelConfig), Z = /* @__PURE__ */ T(() => r() === "horizontal" ? "horizontal" : "vertical");
  const q = () => {
    c(x).zoomIn();
  }, R = () => {
    c(x).zoomOut();
  }, _ = () => {
    c(x).fitView(g());
  }, $ = () => {
    let P = !c(O);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  };
  var b = {
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
      return f();
    },
    set buttonColor(P) {
      f(P), v();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(P) {
      p(P), v();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(P) {
      h(P), v();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(P) {
      g(P), v();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), v();
    },
    get before() {
      return w();
    },
    set before(P) {
      w(P), v();
    },
    get after() {
      return k();
    },
    set after(P) {
      k(P), v();
    }
  };
  {
    let P = /* @__PURE__ */ T(() => [
      "svelte-flow__controls",
      c(Z),
      l()
    ]);
    Yo(e, Xe(
      {
        get class() {
          return c(P);
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
      () => C,
      {
        children: (N, z) => {
          var j = yy(), W = ie(j);
          {
            var M = (fe) => {
              var ne = Oe(), oe = ie(ne);
              it(oe, w), V(fe, ne);
            };
            ue(W, (fe) => {
              w() && fe(M);
            });
          }
          var Y = H(W, 2);
          {
            var Q = (fe) => {
              var ne = my(), oe = ie(ne);
              mo(oe, Xe(
                {
                  onclick: q,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(D)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(L);
                  }
                },
                () => S,
                {
                  children: (ve, xe) => {
                    Vd(ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ge = H(oe, 2);
              mo(ge, Xe(
                {
                  onclick: R,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(D)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(E);
                  }
                },
                () => S,
                {
                  children: (ve, xe) => {
                    Dd(ve);
                  },
                  $$slots: { default: !0 }
                }
              )), V(fe, ne);
            };
            ue(Y, (fe) => {
              o() && fe(Q);
            });
          }
          var re = H(Y, 2);
          {
            var K = (fe) => {
              mo(fe, Xe(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(D)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.fitView.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ne, oe) => {
                    zd(ne);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(re, (fe) => {
              i() && fe(K);
            });
          }
          var X = H(re, 2);
          {
            var U = (fe) => {
              mo(fe, Xe(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: $,
                  get title() {
                    return c(D)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(D)["controls.interactive.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ne, oe) => {
                    var ge = Oe(), ve = ie(ge);
                    {
                      var xe = (_e) => {
                        Ad(_e);
                      }, pe = (_e) => {
                        Hd(_e);
                      };
                      ue(ve, (_e) => {
                        c(O) ? _e(xe) : _e(pe, !1);
                      });
                    }
                    V(ne, ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(X, (fe) => {
              s() && fe(U);
            });
          }
          var se = H(X, 2);
          {
            var ae = (fe) => {
              var ne = Oe(), oe = ie(ne);
              it(oe, y), V(fe, ne);
            };
            ue(se, (fe) => {
              y() && fe(ae);
            });
          }
          var ee = H(se, 2);
          {
            var ye = (fe) => {
              var ne = Oe(), oe = ie(ne);
              it(oe, k), V(fe, ne);
            };
            ue(ee, (fe) => {
              k() && fe(ye);
            });
          }
          V(N, j);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return de(b);
}
le(
  Rd,
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
var Mn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Mn || (Mn = {}));
var wy = /* @__PURE__ */ we("<circle></circle>");
function Id(e, t) {
  ce(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), v();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), v();
    }
  }, i = wy();
  return Ee(() => {
    $e(i, "cx", n()), $e(i, "cy", n()), $e(i, "r", n()), It(i, 0, Rn(["svelte-flow__background-pattern", "dots", r()]));
  }), V(e, i), de(o);
}
le(Id, { radius: {}, class: {} }, [], [], !0);
var by = /* @__PURE__ */ we("<path></path>");
function jd(e, t) {
  ce(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), v();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), v();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), v();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), v();
    }
  }, a = by();
  return Ee(() => {
    $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), It(a, 0, Rn(["svelte-flow__background-pattern", o(), i()]));
  }), V(e, a), de(s);
}
le(jd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const xy = {
  [Mn.Dots]: 1,
  [Mn.Lines]: 1,
  [Mn.Cross]: 6
};
var Cy = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Bd(e, t) {
  ce(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => Mn.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ T(pn), p = /* @__PURE__ */ T(() => r() === Mn.Dots), h = /* @__PURE__ */ T(() => r() === Mn.Cross), g = /* @__PURE__ */ T(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ T(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ T(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), k = /* @__PURE__ */ T(() => (i() ?? xy[r()]) * c(f).viewport.zoom), C = /* @__PURE__ */ T(() => c(h) ? [c(k), c(k)] : c(w)), x = /* @__PURE__ */ T(() => c(p) ? [c(k) / 2, c(k) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var S = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), v();
    },
    get variant() {
      return r();
    },
    set variant(_ = Mn.Dots) {
      r(_), v();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), v();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), v();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), v();
    }
  }, O = Cy();
  let E;
  var L = B(O), D = B(L);
  {
    var Z = (_) => {
      {
        let $ = /* @__PURE__ */ T(() => c(k) / 2);
        Id(_, {
          get radius() {
            return c($);
          },
          get class() {
            return u();
          }
        });
      }
    }, q = (_) => {
      jd(_, {
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
    ue(D, (_) => {
      c(p) ? _(Z) : _(q, !1);
    });
  }
  I(L);
  var R = H(L);
  return I(O), Ee(
    (_) => {
      It(O, 0, Rn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = Ct(O, "", E, _), $e(L, "id", c(y)), $e(L, "x", c(f).viewport.x % c(w)[0]), $e(L, "y", c(f).viewport.y % c(w)[1]), $e(L, "width", c(w)[0]), $e(L, "height", c(w)[1]), $e(L, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), $e(R, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), V(e, O), de(S);
}
le(
  Bd,
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
function Kd(e, t) {
  ce(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), f = m(t, "selected", 7), p = m(t, "class", 7), h = m(t, "nodeComponent", 7);
  var g = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), v();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), v();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), v();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), v();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), v();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), v();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), v();
    },
    get nodeComponent() {
      return h();
    },
    set nodeComponent(x) {
      h(x), v();
    }
  }, y = Oe(), w = ie(y);
  {
    var k = (x) => {
      const S = /* @__PURE__ */ T(h);
      var O = Oe(), E = ie(O);
      ji(E, () => c(S), (L, D) => {
        D(L, {
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
      }), V(x, O);
    }, C = (x) => {
      var S = ky();
      let O, E;
      Ee(
        (L, D) => {
          O = It(S, 0, Rn(["svelte-flow__minimap-node", p()]), null, O, L), $e(S, "x", n()), $e(S, "y", r()), $e(S, "rx", s()), $e(S, "ry", s()), $e(S, "width", o()), $e(S, "height", i()), $e(S, "shape-rendering", l()), E = Ct(S, "", E, D);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), V(x, S);
    };
    ue(w, (x) => {
      h() ? x(k) : x(C, !1);
    });
  }
  return V(e, y), de(g);
}
le(
  Kd,
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
function $y(e, t) {
  const n = am({
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
const gs = (e) => e instanceof Function ? e : () => e;
var _y = /* @__PURE__ */ we("<title> </title>"), Sy = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Ey = /* @__PURE__ */ J('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Zd(e, t) {
  ce(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), y = m(t, "height", 7, 150), w = m(t, "pannable", 7, !0), k = m(t, "zoomable", 7, !0), C = m(t, "inversePan", 7), x = m(t, "zoomStep", 7), S = m(t, "class", 7), O = /* @__PURE__ */ Fe(t, [
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
  ]), E = /* @__PURE__ */ T(pn), L = /* @__PURE__ */ T(() => c(E).ariaLabelConfig);
  const D = i() === void 0 ? void 0 : gs(i()), Z = gs(o()), q = gs(s()), R = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ T(() => `svelte-flow__minimap-desc-${c(E).flowId}`), $ = /* @__PURE__ */ T(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), b = /* @__PURE__ */ T(() => c(E).nodeLookup.size > 0 ? Rc(Bo(c(E).nodeLookup, { filter: (ee) => !ee.hidden }), c($)) : c($)), P = /* @__PURE__ */ T(() => c(b).width / g()), N = /* @__PURE__ */ T(() => c(b).height / y()), z = /* @__PURE__ */ T(() => Math.max(c(P), c(N))), j = /* @__PURE__ */ T(() => c(z) * g()), W = /* @__PURE__ */ T(() => c(z) * y()), M = /* @__PURE__ */ T(() => 5 * c(z)), Y = /* @__PURE__ */ T(() => c(b).x - (c(j) - c(b).width) / 2 - c(M)), Q = /* @__PURE__ */ T(() => c(b).y - (c(W) - c(b).height) / 2 - c(M)), re = /* @__PURE__ */ T(() => c(j) + c(M) * 2), K = /* @__PURE__ */ T(() => c(W) + c(M) * 2);
  const X = () => c(z);
  var U = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), v();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ee) {
      u(ee), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), v();
    },
    get maskColor() {
      return f();
    },
    set maskColor(ee) {
      f(ee), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(ee) {
      p(ee), v();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(ee) {
      h(ee), v();
    },
    get width() {
      return g();
    },
    set width(ee = 200) {
      g(ee), v();
    },
    get height() {
      return y();
    },
    set height(ee = 150) {
      y(ee), v();
    },
    get pannable() {
      return w();
    },
    set pannable(ee = !0) {
      w(ee), v();
    },
    get zoomable() {
      return k();
    },
    set zoomable(ee = !0) {
      k(ee), v();
    },
    get inversePan() {
      return C();
    },
    set inversePan(ee) {
      C(ee), v();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(ee) {
      x(ee), v();
    },
    get class() {
      return S();
    },
    set class(ee) {
      S(ee), v();
    }
  }, se = Ey(), ae = ie(se);
  {
    let ee = /* @__PURE__ */ T(() => ["svelte-flow__minimap", S()]);
    gh(ae, () => ({ "--xy-minimap-background-color-props": d() })), Yo(ae.lastChild, Xe(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => O,
      {
        children: (ye, fe) => {
          var ne = Oe(), oe = ie(ne);
          {
            var ge = (ve) => {
              var xe = Sy();
              let pe;
              var _e = B(xe);
              {
                var Le = (Re) => {
                  var We = _y(), Ze = B(We, !0);
                  I(We), Ee(() => {
                    $e(We, "id", c(_)), qe(Ze, r() ?? c(L)["minimap.ariaLabel"]);
                  }), V(Re, We);
                };
                ue(_e, (Re) => {
                  (r() ?? c(L)["minimap.ariaLabel"]) && Re(Le);
                });
              }
              var F = H(_e);
              Pt(F, 17, () => c(E).nodes, (Re) => Re.id, (Re, We) => {
                const Ze = /* @__PURE__ */ T(() => c(E).nodeLookup.get(c(We).id));
                var nt = Oe(), $t = ie(nt);
                {
                  var Qe = (je) => {
                    const me = /* @__PURE__ */ T(() => ar(c(Ze)));
                    {
                      let Be = /* @__PURE__ */ T(() => D?.(c(Ze))), mt = /* @__PURE__ */ T(() => Z(c(Ze))), tt = /* @__PURE__ */ T(() => q(c(Ze)));
                      Kd(je, Xe(
                        {
                          get x() {
                            return c(Ze).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ze).internals.positionAbsolute.y;
                          }
                        },
                        () => c(me),
                        {
                          get selected() {
                            return c(Ze).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Be);
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
                            return R;
                          },
                          get class() {
                            return c(tt);
                          }
                        }
                      ));
                    }
                  };
                  ue($t, (je) => {
                    c(Ze) && Ic(c(Ze)) && je(Qe);
                  });
                }
                V(Re, nt);
              });
              var Je = H(F);
              I(xe), St(xe, (Re, We) => $y?.(Re, We), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: X,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: C(),
                zoomStep: x(),
                pannable: w(),
                zoomable: k()
              })), Ee(
                (Re) => {
                  $e(xe, "width", g()), $e(xe, "height", y()), $e(xe, "viewBox", `${c(Y) ?? ""} ${c(Q) ?? ""} ${c(re) ?? ""} ${c(K) ?? ""}`), $e(xe, "aria-labelledby", c(_)), pe = Ct(xe, "", pe, Re), $e(Je, "d", `M${c(Y) - c(M)},${c(Q) - c(M)}h${c(re) + c(M) * 2}v${c(K) + c(M) * 2}h${-c(re) - c(M) * 2}z
      M${c($).x ?? ""},${c($).y ?? ""}h${c($).width ?? ""}v${c($).height ?? ""}h${-c($).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": f(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": h() ? h() * c(z) : void 0
                  })
                ]
              ), V(ve, xe);
            };
            ue(oe, (ve) => {
              c(E).panZoom && ve(ge);
            });
          }
          V(ye, ne);
        },
        $$slots: { default: !0 }
      }
    )), I(ae);
  }
  return V(e, se), de(U);
}
le(
  Zd,
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
var Py = /* @__PURE__ */ J("<div><!></div>");
function Wd(e, t) {
  ce(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ke.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Fe(t, [
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
  const u = pn(), { getNodesBounds: d } = kt(), f = Un("svelteflow__node_id");
  let p = /* @__PURE__ */ T(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (O, E) => {
      const L = u.nodeLookup.get(E);
      return L && O.push(L), O;
    },
    []
  ))), h = /* @__PURE__ */ T(() => {
    const O = d(c(p));
    return O ? j0(O, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ T(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((O) => (O.internals.z || 5) + 1))), y = /* @__PURE__ */ T(() => u.nodes.filter((O) => O.selected).length), w = /* @__PURE__ */ T(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var k = {
    get nodeId() {
      return n();
    },
    set nodeId(O) {
      n(O), v();
    },
    get position() {
      return r();
    },
    set position(O = ke.Top) {
      r(O), v();
    },
    get align() {
      return o();
    },
    set align(O = "center") {
      o(O), v();
    },
    get offset() {
      return i();
    },
    set offset(O = 10) {
      i(O), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(O) {
      s(O), v();
    },
    get children() {
      return a();
    },
    set children(O) {
      a(O), v();
    }
  }, C = Oe(), x = ie(C);
  {
    var S = (O) => {
      var E = Py();
      pt(
        E,
        (D, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": D,
          ...l,
          [bn]: Z
        }),
        [
          () => c(p).reduce((D, Z) => `${D}${Z.id} `, "").trim(),
          () => ({
            display: sd().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var L = B(E);
      it(L, () => a() ?? xt), I(E), St(E, (D, Z) => id?.(D, Z), () => "root"), V(O, E);
    };
    ue(x, (O) => {
      u.domNode && c(w) && c(p) && O(S);
    });
  }
  return V(e, C), de(k);
}
le(
  Wd,
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
function In(e) {
  const t = /* @__PURE__ */ T(pn), n = /* @__PURE__ */ T(() => c(t).nodes), r = /* @__PURE__ */ T(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ T(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!J0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Fl = "tinyflow-component", Ny = [
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
], Pa = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Oy = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Ly = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class My {
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
    const t = document.createElement(Fl);
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
    const n = document.createElement(Fl);
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
  let e = /* @__PURE__ */ Me([]), t = /* @__PURE__ */ Me([]), n = /* @__PURE__ */ Me({ x: 250, y: 100, zoom: 1 });
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
}, et = Vy();
var Dy = /* @__PURE__ */ J("<button><!></button>");
function ze(e, t) {
  ce(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Fe(t, [
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
      n(l), v();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), v();
    }
  }, s = Dy();
  pt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return it(a, () => n() ?? xt), I(s), V(e, s), de(i);
}
le(ze, { children: {}, primary: {} }, [], [], !0);
var zy = /* @__PURE__ */ J("<input/>");
function Yd(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zy();
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
    !0
  ), V(e, r), de();
}
le(Yd, {}, [], [], !0);
var Hy = /* @__PURE__ */ J('<div><input type="hidden"/> <!> <!></div>');
const Ay = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Fd(e, t) {
  ce(t, !0), Ke(e, Ay);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Fe(t, [
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
      n(h), v();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), v();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), v();
    }
  }, u = Hy();
  pt(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = B(u);
  vr(d);
  var f = H(d, 2);
  lt(f, {
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
  return ze(p, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      be();
      var y = Pe();
      Ee(() => qe(y, i())), V(h, y);
    },
    $$slots: { default: !0 }
  }), I(u), Ee(() => si(d, o())), V(e, u), de(l);
}
le(
  Fd,
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
var Ry = /* @__PURE__ */ J("<input/>");
function lt(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
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
    !0
  ), V(e, r), de();
}
le(lt, {}, [], [], !0);
var Iy = /* @__PURE__ */ J("<textarea></textarea>");
function Ge(e, t) {
  ce(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), v();
    }
  }, i = Iy();
  return Wp(i), pt(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), V(e, i), de(o);
}
le(Ge, { value: {} }, [], [], !0);
var jy = /* @__PURE__ */ J('<div role="button"><!></div>'), By = /* @__PURE__ */ J("<div></div>");
function qd(e, t) {
  const n = ll(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ll(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), v();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), v();
    }
  };
  nc();
  var u = By();
  return pt(u, () => ({
    ...r,
    class: `tf-tabs ${sa(r), wt(() => r.class) ?? ""}`
  })), Pt(u, 5, o, Xr, (d, f, p) => {
    var h = jy();
    $e(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(c(f), p));
    };
    var g = B(h);
    {
      var y = (k) => {
        var C = Pe();
        Ee(() => qe(C, (c(f), wt(() => c(f).label)))), V(k, C);
      }, w = (k) => {
        var C = Oe(), x = ie(C);
        it(x, () => (c(f), wt(() => c(f).label) ?? xt)), V(k, C);
      };
      ue(g, (k) => {
        c(f), wt(() => typeof c(f).label == "string") ? k(y) : k(w, !1);
      });
    }
    I(h), Ee(() => It(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), V(d, h);
  }), I(u), V(e, u), de(l);
}
ir(["click", "keydown"]);
le(qd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Ky = (e, t, n) => t(c(n)), Zy = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Wy = /* @__PURE__ */ J('<span class="tf-collapse-item-title-icon"><!></span>'), Yy = /* @__PURE__ */ J('<div class="tf-collapse-item-description"><!></div>'), Fy = /* @__PURE__ */ J('<div class="tf-collapse-item-content"><!></div>'), qy = /* @__PURE__ */ J('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Xy = /* @__PURE__ */ J("<div></div>");
const Gy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Xd(e, t) {
  ce(t, !0), Ke(e, Gy);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Xt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), v();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), v();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), v();
    }
  }, a = Xy();
  return Pt(a, 21, n, Xr, (l, u, d) => {
    var f = qy(), p = B(f);
    $e(p, "tabindex", d), p.__click = [Ky, i, u], p.__keydown = [Zy, i, u];
    var h = B(p);
    {
      var g = (O) => {
        var E = Wy(), L = B(E);
        Fn(L, {
          get target() {
            return c(u).icon;
          }
        }), I(E), V(O, E);
      };
      ue(h, (O) => {
        c(u).icon && O(g);
      });
    }
    var y = H(h, 2);
    Fn(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = H(y, 2);
    I(p);
    var k = H(p, 2);
    {
      var C = (O) => {
        var E = Yy(), L = B(E);
        Fn(L, {
          get target() {
            return c(u).description;
          }
        }), I(E), V(O, E);
      };
      ue(k, (O) => {
        c(u).description && O(C);
      });
    }
    var x = H(k, 2);
    {
      var S = (O) => {
        var E = Fy(), L = B(E);
        Fn(L, {
          get target() {
            return c(u).content;
          }
        }), I(E), V(O, E);
      };
      ue(x, (O) => {
        o().includes(c(u).key) && O(S);
      });
    }
    I(f), Ee((O) => It(w, 1, `tf-collapse-item-title-arrow ${O ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), V(l, f);
  }), I(a), Ee(() => {
    Ct(a, t.style), It(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), V(e, a), de(s);
}
ir(["click", "keydown"]);
le(Xd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Fn(e, t) {
  ce(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Oe(), i = ie(o);
  {
    var s = (l) => {
      var u = Oe(), d = ie(u);
      it(d, () => n() ?? xt), V(l, u);
    }, a = (l) => {
      var u = Oe(), d = ie(u);
      ua(d, n), V(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return V(e, o), de(r);
}
le(Fn, { target: {} }, [], [], !0);
var Uy = (e, t, n) => t(c(n)), Jy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Qy = /* @__PURE__ */ J('<div class="tf-select-content-children"><!></div>'), e2 = /* @__PURE__ */ J('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), t2 = /* @__PURE__ */ J('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), n2 = /* @__PURE__ */ J("<!> <!>", 1), r2 = /* @__PURE__ */ J('<div class="tf-select-input-placeholder"> </div>'), o2 = /* @__PURE__ */ J('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), i2 = /* @__PURE__ */ J("<div><!></div>");
function bt(e, t) {
  ce(t, !0);
  const n = (C, x = xt) => {
    var S = Oe(), O = ie(S);
    Pt(O, 19, x, (E, L) => `${L}_${E.value}`, (E, L) => {
      var D = e2(), Z = ie(D);
      Z.__click = [Uy, g, L];
      var q = B(Z), R = B(q);
      {
        var _ = (N) => {
          var z = Jy();
          V(N, z);
        };
        ue(R, (N) => {
          c(L).children && c(L).children.length > 0 && N(_);
        });
      }
      I(q);
      var $ = H(q, 2);
      Fn($, {
        get target() {
          return c(L).label;
        }
      }), I(Z);
      var b = H(Z, 2);
      {
        var P = (N) => {
          var z = Qy(), j = B(z);
          n(j, () => c(L).children), I(z), V(N, z);
        };
        ue(b, (N) => {
          c(L).children && c(L).children.length > 0 && (a() || u().includes(c(L).value)) && N(P);
        });
      }
      V(E, D);
    }), V(C, S);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ Fe(t, [
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
  ]), p = /* @__PURE__ */ T(() => {
    const C = [], x = (S) => {
      for (let O of S)
        i().length > 0 ? i().includes(O.value) && C.push(O) : s().includes(O.value) && C.push(O), O.children && O.children.length > 0 && x(O.children);
    };
    return x(r()), C;
  }), h;
  function g(C) {
    h?.hide(), o()?.(C);
  }
  var y = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), v();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), v();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), v();
    }
  }, w = i2();
  pt(w, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var k = B(w);
  return Zt(
    lr(k, {
      floating: (C) => {
        var x = t2(), S = B(x);
        n(S, r), I(x), V(C, x);
      },
      children: (C, x) => {
        var S = o2();
        pt(S, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var O = B(S);
        Pt(
          O,
          23,
          () => c(p),
          (E, L) => `${L}_${E.value}`,
          (E, L, D) => {
            var Z = Oe(), q = ie(Z);
            {
              var R = ($) => {
                var b = Oe(), P = ie(b);
                {
                  var N = (z) => {
                    Fn(z, {
                      get target() {
                        return c(L).label;
                      }
                    });
                  };
                  ue(P, (z) => {
                    c(D) === 0 && z(N);
                  });
                }
                V($, b);
              }, _ = ($) => {
                var b = n2(), P = ie(b);
                Fn(P, {
                  get target() {
                    return c(L).label;
                  }
                });
                var N = H(P, 2);
                {
                  var z = (j) => {
                    var W = Pe(",");
                    V(j, W);
                  };
                  ue(N, (j) => {
                    c(D) < c(p).length - 1 && j(z);
                  });
                }
                V($, b);
              };
              ue(q, ($) => {
                l() ? $(_, !1) : $(R);
              });
            }
            V(E, Z);
          },
          (E) => {
            var L = r2(), D = B(L, !0);
            I(L), Ee(() => qe(D, d())), V(E, L);
          }
        ), I(O), be(2), I(S), V(C, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), I(w), V(e, w), de(y);
}
ir(["click"]);
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
const To = Math.min, Ir = Math.max, Ti = Math.round, $n = (e) => ({
  x: e,
  y: e
}), s2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, a2 = {
  start: "end",
  end: "start"
};
function As(e, t, n) {
  return Ir(e, To(t, n));
}
function Fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $r(e) {
  return e.split("-")[0];
}
function qo(e) {
  return e.split("-")[1];
}
function Gd(e) {
  return e === "x" ? "y" : "x";
}
function Na(e) {
  return e === "y" ? "height" : "width";
}
const l2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function qn(e) {
  return l2.has($r(e)) ? "y" : "x";
}
function Ta(e) {
  return Gd(qn(e));
}
function u2(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Ta(e), i = Na(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Oi(s)), [s, Oi(s)];
}
function c2(e) {
  const t = Oi(e);
  return [Rs(e), t, Rs(t)];
}
function Rs(e) {
  return e.replace(/start|end/g, (t) => a2[t]);
}
const ql = ["left", "right"], Xl = ["right", "left"], d2 = ["top", "bottom"], f2 = ["bottom", "top"];
function p2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xl : ql : t ? ql : Xl;
    case "left":
    case "right":
      return t ? d2 : f2;
    default:
      return [];
  }
}
function h2(e, t, n, r) {
  const o = qo(e);
  let i = p2($r(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Rs)))), i;
}
function Oi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => s2[t]);
}
function g2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ud(e) {
  return typeof e != "number" ? g2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Li(e) {
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
function Gl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = qn(t), s = Ta(t), a = Na(s), l = $r(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
const v2 = async (e, t, n) => {
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
  } = Gl(u, r, l), p = r, h = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: k
    } = a[y], {
      x: C,
      y: x,
      data: S,
      reset: O
    } = await k({
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
      [w]: {
        ...h[w],
        ...S
      }
    }, O && g <= 50 && (g++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (u = O.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: d,
      y: f
    } = Gl(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Jd(e, t) {
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
  } = Fo(t, e), g = Ud(h), y = a[p ? f === "floating" ? "reference" : "floating" : f], w = Li(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), k = f === "floating" ? {
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
  }, S = Li(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: C,
    strategy: l
  }) : k);
  return {
    top: (w.top - S.top + g.top) / x.y,
    bottom: (S.bottom - w.bottom + g.bottom) / x.y,
    left: (w.left - S.left + g.left) / x.x,
    right: (S.right - w.right + g.right) / x.x
  };
}
const m2 = (e) => ({
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
    const f = Ud(d), p = {
      x: n,
      y: r
    }, h = Ta(o), g = Na(h), y = await s.getDimensions(u), w = h === "y", k = w ? "top" : "left", C = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = i.reference[g] + i.reference[h] - p[h] - i.floating[g], O = p[h] - i.reference[h], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let L = E ? E[x] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(E))) && (L = a.floating[x] || i.floating[g]);
    const D = S / 2 - O / 2, Z = L / 2 - y[g] / 2 - 1, q = To(f[k], Z), R = To(f[C], Z), _ = q, $ = L - y[g] - R, b = L / 2 - y[g] / 2 + D, P = As(_, b, $), N = !l.arrow && qo(o) != null && b !== P && i.reference[g] / 2 - (b < _ ? q : R) - y[g] / 2 < 0, z = N ? b < _ ? b - _ : b - $ : 0;
    return {
      [h]: p[h] + z,
      data: {
        [h]: P,
        centerOffset: b - P - z,
        ...N && {
          alignmentOffset: z
        }
      },
      reset: N
    };
  }
}), y2 = function(e) {
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
        flipAlignment: y = !0,
        ...w
      } = Fo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = $r(o), C = qn(a), x = $r(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), O = p || (x || !y ? [Oi(a)] : c2(a)), E = g !== "none";
      !p && E && O.push(...h2(a, y, g, S));
      const L = [a, ...O], D = await Jd(t, w), Z = [];
      let q = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Z.push(D[k]), f) {
        const b = u2(o, s, S);
        Z.push(D[b[0]], D[b[1]]);
      }
      if (q = [...q, {
        placement: o,
        overflows: Z
      }], !Z.every((b) => b <= 0)) {
        var R, _;
        const b = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, P = L[b];
        if (P && (!(f === "alignment" && C !== qn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        q.every((z) => qn(z.placement) === C ? z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: b,
              overflows: q
            },
            reset: {
              placement: P
            }
          };
        let N = (_ = q.filter((z) => z.overflows[0] <= 0).sort((z, j) => z.overflows[1] - j.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var $;
              const z = ($ = q.filter((j) => {
                if (E) {
                  const W = qn(j.placement);
                  return W === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((W) => W > 0).reduce((W, M) => W + M, 0)]).sort((j, W) => j[1] - W[1])[0]) == null ? void 0 : $[0];
              z && (N = z);
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
}, w2 = /* @__PURE__ */ new Set(["left", "top"]);
async function b2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = $r(n), a = qo(n), l = qn(n) === "y", u = w2.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = Fo(t, e);
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
const x2 = function(e) {
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
      } = t, l = await b2(t, e);
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
}, C2 = function(e) {
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
          fn: (w) => {
            let {
              x: k,
              y: C
            } = w;
            return {
              x: k,
              y: C
            };
          }
        },
        ...l
      } = Fo(e, t), u = {
        x: n,
        y: r
      }, d = await Jd(t, l), f = qn($r(o)), p = Gd(f);
      let h = u[p], g = u[f];
      if (i) {
        const w = p === "y" ? "top" : "left", k = p === "y" ? "bottom" : "right", C = h + d[w], x = h - d[k];
        h = As(C, h, x);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", C = g + d[w], x = g - d[k];
        g = As(C, g, x);
      }
      const y = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Ui() {
  return typeof window < "u";
}
function so(e) {
  return Qd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  var t;
  return (t = (Qd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qd(e) {
  return Ui() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function ln(e) {
  return Ui() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function Sn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function Ul(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
const k2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Xo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !k2.has(o);
}
const $2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function _2(e) {
  return $2.has(so(e));
}
const S2 = [":popover-open", ":modal"];
function Ji(e) {
  return S2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const E2 = ["transform", "translate", "scale", "rotate", "perspective"], P2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], N2 = ["paint", "layout", "strict", "content"];
function Oa(e) {
  const t = La(), n = ln(e) ? un(e) : e;
  return E2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || P2.some((r) => (n.willChange || "").includes(r)) || N2.some((r) => (n.contain || "").includes(r));
}
function T2(e) {
  let t = er(e);
  for (; Sn(t) && !no(t); ) {
    if (Oa(t))
      return t;
    if (Ji(t))
      return null;
    t = er(t);
  }
  return null;
}
function La() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const O2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function no(e) {
  return O2.has(so(e));
}
function un(e) {
  return Bt(e).getComputedStyle(e);
}
function Qi(e) {
  return ln(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function er(e) {
  if (so(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ul(e) && e.host || // Fallback.
    jn(e)
  );
  return Ul(t) ? t.host : t;
}
function ef(e) {
  const t = er(e);
  return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Sn(t) && Xo(t) ? t : ef(t);
}
function tf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ef(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Bt(o);
  return i ? (Is(s), t.concat(s, s.visualViewport || [], Xo(o) ? o : [], [])) : t.concat(o, tf(o, []));
}
function Is(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nf(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Sn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ti(n) !== i || Ti(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function rf(e) {
  return ln(e) ? e : e.contextElement;
}
function jr(e) {
  const t = rf(e);
  if (!Sn(t))
    return $n(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = nf(t);
  let s = (i ? Ti(n.width) : n.width) / r, a = (i ? Ti(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const L2 = /* @__PURE__ */ $n(0);
function of(e) {
  const t = Bt(e);
  return !La() || !t.visualViewport ? L2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function M2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function Oo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = rf(e);
  let s = $n(1);
  t && (r ? ln(r) && (s = jr(r)) : s = jr(e));
  const a = M2(i, n, r) ? of(i) : $n(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Bt(i), h = r && ln(r) ? Bt(r) : r;
    let g = p, y = Is(g);
    for (; y && r && h !== g; ) {
      const w = jr(y), k = y.getBoundingClientRect(), C = un(y), x = k.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, S = k.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, f *= w.y, l += x, u += S, g = Bt(y), y = Is(g);
    }
  }
  return Li({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function es(e, t) {
  const n = Qi(e).scrollLeft;
  return t ? t.left + n : Oo(jn(e)).left + n;
}
function sf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - es(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function V2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = jn(r), a = t ? Ji(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = $n(1);
  const d = $n(0), f = Sn(r);
  if ((f || !f && !i) && ((so(r) !== "body" || Xo(s)) && (l = Qi(r)), Sn(r))) {
    const h = Oo(r);
    u = jr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? sf(s, l) : $n(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function D2(e) {
  return Array.from(e.getClientRects());
}
function z2(e) {
  const t = jn(e), n = Qi(e), r = e.ownerDocument.body, o = Ir(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ir(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + es(e);
  const a = -n.scrollTop;
  return un(r).direction === "rtl" && (s += Ir(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Jl = 25;
function H2(e, t) {
  const n = Bt(e), r = jn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = La();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = es(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Jl && (i -= g);
  } else u <= Jl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const A2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function R2(e, t) {
  const n = Oo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Sn(e) ? jr(e) : $n(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = H2(e, n);
  else if (t === "document")
    r = z2(jn(e));
  else if (ln(t))
    r = R2(t, n);
  else {
    const o = of(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Li(r);
}
function af(e, t) {
  const n = er(e);
  return n === t || !ln(n) || no(n) ? !1 : un(n).position === "fixed" || af(n, t);
}
function I2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = tf(e, []).filter((a) => ln(a) && so(a) !== "body"), o = null;
  const i = un(e).position === "fixed";
  let s = i ? er(e) : e;
  for (; ln(s) && !no(s); ) {
    const a = un(s), l = Oa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && A2.has(o.position) || Xo(s) && !l && af(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = er(s);
  }
  return t.set(e, r), r;
}
function j2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ji(t) ? [] : I2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Ql(t, u, o);
    return l.top = Ir(d.top, l.top), l.right = To(d.right, l.right), l.bottom = To(d.bottom, l.bottom), l.left = Ir(d.left, l.left), l;
  }, Ql(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function B2(e) {
  const {
    width: t,
    height: n
  } = nf(e);
  return {
    width: t,
    height: n
  };
}
function K2(e, t, n) {
  const r = Sn(t), o = jn(t), i = n === "fixed", s = Oo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = $n(0);
  function u() {
    l.x = es(o);
  }
  if (r || !r && !i)
    if ((so(t) !== "body" || Xo(o)) && (a = Qi(t)), r) {
      const h = Oo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? sf(o, a) : $n(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function vs(e) {
  return un(e).position === "static";
}
function eu(e, t) {
  if (!Sn(e) || un(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return jn(e) === n && (n = n.ownerDocument.body), n;
}
function lf(e, t) {
  const n = Bt(e);
  if (Ji(e))
    return n;
  if (!Sn(e)) {
    let o = er(e);
    for (; o && !no(o); ) {
      if (ln(o) && !vs(o))
        return o;
      o = er(o);
    }
    return n;
  }
  let r = eu(e, t);
  for (; r && _2(r) && vs(r); )
    r = eu(r, t);
  return r && no(r) && vs(r) && !Oa(r) ? n : r || T2(e) || n;
}
const Z2 = async function(e) {
  const t = this.getOffsetParent || lf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: K2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function W2(e) {
  return un(e).direction === "rtl";
}
const Y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: V2,
  getDocumentElement: jn,
  getClippingRect: j2,
  getOffsetParent: lf,
  getElementRects: Z2,
  getClientRects: D2,
  getDimensions: B2,
  getScale: jr,
  isElement: ln,
  isRTL: W2
}, F2 = x2, q2 = C2, X2 = y2, G2 = m2, U2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Y2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return v2(e, t, {
    ...o,
    platform: i
  });
}, J2 = ({
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function f() {
    U2(e, u, {
      placement: r,
      middleware: [
        F2(o),
        // 手动偏移配置
        X2(i),
        //自动翻转
        q2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [G2({ element: d })] : []
      ]
    }).then(({ x: k, y: C, placement: x, middlewareData: S }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${C}px`
      }), l) {
        const { x: O, y: E } = S.arrow, L = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: O != null ? `${O}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [L]: "2px"
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
  function y(k) {
    k.stopPropagation(), p ? g() : h();
  }
  function w(k) {
    u.contains(k.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, y);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      g();
    },
    isVisible() {
      return p;
    }
  };
};
var Q2 = /* @__PURE__ */ J('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function lr(e, t) {
  ce(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  sr(() => (a = J2({
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
    set children(y) {
      n(y), v();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), v();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), v();
    }
  }, d = Q2(), f = B(d), p = B(f);
  it(p, n), I(f), Zt(f, (y) => i = y, () => i);
  var h = H(f, 2), g = B(h);
  return it(g, r), I(h), Zt(h, (y) => s = y, () => s), I(d), V(e, d), de(u);
}
le(lr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ae(e, t) {
  ce(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), v();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), v();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), v();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), v();
    }
  }, a = Oe(), l = ie(a);
  return wh(l, () => `h${r()}`, !1, (u, d) => {
    pt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Oe(), p = ie(f);
    it(p, () => n() ?? xt), V(d, f);
  }), V(e, a), de(s);
}
le(Ae, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ew = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const tw = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Go(e, t) {
  ce(t, !0), Ke(e, tw);
  const n = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  ze(e, Xe(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ew();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
le(Go, {}, [], [], !0);
const nw = () => ({ deleteNode: (e) => {
  et.removeNode(e), et.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), _r = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, rw = () => ({ copyNode: (e) => {
  const t = et.getNode(e);
  if (t) {
    const n = _r(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    et.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), st = () => Un("svelteflow__node_id"), tr = () => Un("tinyflow_options");
var ow = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), aw = /* @__PURE__ */ J('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), lw = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, uw = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, cw = /* @__PURE__ */ J('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), dw = /* @__PURE__ */ J('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), fw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), pw = /* @__PURE__ */ J('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), hw = /* @__PURE__ */ J('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const gw = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function en(e, t) {
  ce(t, !0), Ke(e, gw);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: k } = kt(), C = /* @__PURE__ */ T(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = nw(), { copyNode: S } = rw(), O = tr(), E = () => {
    O.onNodeExecute?.(k(r()));
  };
  let L = st();
  var D = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), v();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), v();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), v();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), v();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(M = !0) {
      f(M), v();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(M = !0) {
      p(M), v();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(M = !0) {
      h(M), v();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(M) {
      g(M), v();
    }
  }, Z = hw(), q = ie(Z);
  {
    var R = (M) => {
      Wd(M, {
        get position() {
          return ke.Top;
        },
        align: "start",
        children: (Y, Q) => {
          var re = pw(), K = B(re);
          {
            var X = (ne) => {
              ze(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, ge) => {
                  var ve = ow();
                  V(oe, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ue(K, (ne) => {
              u() && ne(X);
            });
          }
          var U = H(K, 2);
          {
            var se = (ne) => {
              ze(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  S(r());
                },
                children: (oe, ge) => {
                  var ve = iw();
                  V(oe, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ue(U, (ne) => {
              l() && ne(se);
            });
          }
          var ae = H(U, 2);
          {
            var ee = (ne) => {
              ze(ne, {
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (oe, ge) => {
                  var ve = sw();
                  V(oe, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ue(ae, (ne) => {
              a() && ne(ee);
            });
          }
          var ye = H(ae, 2);
          {
            var fe = (ne) => {
              lr(ne, {
                placement: "bottom",
                floating: (oe) => {
                  var ge = dw(), ve = B(ge), xe = H(B(ve));
                  lt(xe, {
                    style: "width: 100%;",
                    onchange: (Qe) => {
                      const je = Qe.target.value;
                      w(L, { title: je });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(ve);
                  var pe = H(ve, 2), _e = H(B(pe));
                  Ge(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Qe) => {
                      const je = Qe.target.value;
                      w(L, { description: je });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(pe);
                  var Le = H(pe, 2);
                  {
                    var F = (Qe) => {
                      var je = aw(), me = H(B(je));
                      Ge(me, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const mt = Be.target.value;
                          w(L, { condition: mt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(je), V(Qe, je);
                    };
                    ue(Le, (Qe) => {
                      f() && Qe(F);
                    });
                  }
                  var Je = H(Le, 2), Re = H(B(Je), 2);
                  vr(Re), Re.__change = [lw, w, L], I(Je);
                  var We = H(Je, 2), Ze = H(B(We), 2);
                  vr(Ze), Ze.__change = [uw, w, L], I(We);
                  var nt = H(We, 2);
                  {
                    var $t = (Qe) => {
                      var je = cw(), me = ie(je), Be = H(B(me));
                      {
                        let dt = /* @__PURE__ */ T(() => n().loopIntervalMs || "1000");
                        Ge(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gn) => {
                            const vn = gn.target.value;
                            w(L, { loopIntervalMs: vn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      I(me);
                      var mt = H(me, 2), tt = H(B(mt));
                      {
                        let dt = /* @__PURE__ */ T(() => n().maxLoopCount || "0");
                        Ge(tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gn) => {
                            const vn = gn.target.value;
                            w(L, { maxLoopCount: vn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      I(mt);
                      var _t = H(mt, 2), ct = H(B(_t));
                      Ge(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const gn = dt.target.value;
                          w(L, { loopBreakCondition: gn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(_t), V(Qe, je);
                    };
                    ue(nt, (Qe) => {
                      n().loopEnable && Qe($t);
                    });
                  }
                  I(ge), Ee(() => {
                    rl(Re, !!n().async), rl(Ze, !!n().loopEnable);
                  }), V(oe, ge);
                },
                children: (oe, ge) => {
                  ze(oe, {
                    class: "tf-node-toolbar-item",
                    children: (ve, xe) => {
                      var pe = fw();
                      V(ve, pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(ye, (ne) => {
              d() && ne(fe);
            });
          }
          I(re), V(Y, re);
        },
        $$slots: { default: !0 }
      });
    };
    ue(q, (M) => {
      (a() || l() || u()) && M(R);
    });
  }
  var _ = H(q, 2), $ = H(B(_), 2), b = B($);
  Xd(b, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return y;
    },
    onChange: (M, Y) => {
      w(r(), { expand: Y?.includes("key") }), g()?.(Y?.includes("key") ? "key" : "");
    }
  }), I($), I(_);
  var P = H(_, 2);
  {
    var N = (M) => {
      Qn(M, {
        type: "target",
        get position() {
          return ke.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(P, (M) => {
      h() && M(N);
    });
  }
  var z = H(P, 2);
  {
    var j = (M) => {
      Qn(M, {
        type: "source",
        get position() {
          return ke.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(z, (M) => {
      p() && M(j);
    });
  }
  var W = H(z, 2);
  return it(W, () => i() ?? xt), V(e, Z), de(D);
}
ir(["change"]);
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
var vw = /* @__PURE__ */ J('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), mw = /* @__PURE__ */ J('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ww = /* @__PURE__ */ J('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const bw = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function uf(e, t) {
  ce(t, !0), Ke(e, bw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = st(), i = In(o), s = /* @__PURE__ */ T(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = kt(), l = (D, Z) => {
    a(o, (q) => {
      let R = q.data.parameters;
      return R[r()][D] = Z, { parameters: R };
    });
  }, u = (D, Z) => {
    const q = Z.target.value;
    l(D, q);
  }, d = (D) => {
    const Z = D.target.value;
    l("name", Z);
  }, f = (D) => {
    const Z = D.target.checked;
    l("required", Z);
  }, p = (D) => {
    const Z = D.value;
    l("formType", Z);
  }, h = (D) => {
    const Z = D.value;
    l("contentType", Z);
  };
  let g;
  const y = () => {
    a(o, (D) => {
      let Z = D.data.parameters;
      return Z.splice(r(), 1), { parameters: [...Z] };
    }), g?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), v();
    },
    get index() {
      return r();
    },
    set index(D) {
      r(D), v();
    }
  }, k = ww(), C = ie(k), x = B(C);
  lt(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I(C);
  var S = H(C, 2), O = B(S);
  Yd(O, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), I(S);
  var E = H(S, 2), L = B(E);
  return Zt(
    lr(L, {
      placement: "bottom",
      floating: (D) => {
        var Z = mw(), q = B(Z), R = H(B(q));
        {
          let K = /* @__PURE__ */ T(() => c(s).contentType ? [c(s).contentType] : []);
          bt(R, {
            get items() {
              return Pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        I(q);
        var _ = H(q, 2), $ = H(B(_));
        {
          let K = /* @__PURE__ */ T(() => c(s).formType ? [c(s).formType] : []);
          bt($, {
            get items() {
              return Oy;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(K);
            },
            onSelect: p
          });
        }
        I(_);
        var b = H(_, 2);
        {
          var P = (K) => {
            var X = vw(), U = H(B(X));
            {
              let se = /* @__PURE__ */ T(() => c(s).enums?.join(`
`));
              Ge(U, {
                rows: 3,
                style: "width: 100%;",
                onchange: (ae) => {
                  l("enums", ae.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(se);
                },
                placeholder: "一行一个选项"
              });
            }
            I(X), V(K, X);
          };
          ue(b, (K) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && K(P);
          });
        }
        var N = H(b, 2), z = H(B(N));
        Ge(z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            u("formLabel", K);
          },
          get value() {
            return c(s).formLabel;
          }
        }), I(N);
        var j = H(N, 2), W = H(B(j));
        Ge(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formDescription", K);
          },
          get value() {
            return c(s).formDescription;
          }
        }), I(j);
        var M = H(j, 2), Y = H(B(M));
        Ge(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formPlaceholder", K);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), I(M);
        var Q = H(M, 2), re = B(Q);
        ze(re, {
          onclick: y,
          children: (K, X) => {
            be();
            var U = Pe("删除");
            V(K, U);
          },
          $$slots: { default: !0 }
        }), I(Q), I(Z), V(D, Z);
      },
      children: (D, Z) => {
        ze(D, {
          class: "input-btn-more",
          children: (q, R) => {
            var _ = yw();
            V(q, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => g = D,
    () => g
  ), I(E), V(e, k), de(w);
}
le(uf, { parameter: {}, index: {} }, [], [], !0);
var xw = /* @__PURE__ */ J('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), Cw = /* @__PURE__ */ J('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), kw = /* @__PURE__ */ J('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const $w = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function cf(e, t) {
  ce(t, !0), Ke(e, $w);
  let n = st(), r = In(n), o = /* @__PURE__ */ T(() => [...r?.current?.data?.parameters || []]);
  var i = kw(), s = B(i);
  {
    var a = (u) => {
      var d = xw();
      be(4), V(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = H(s, 2);
  Pt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      uf(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = Cw();
      V(u, d);
    }
  ), I(i), V(e, i), de();
}
le(cf, {}, [], [], !0);
const Lo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = _r()), Lo(t.children);
}), e), hn = () => {
  const { updateNodeData: e } = kt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Lo(s?.children)) : Lo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: _r()
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
var _w = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ J('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Pw = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function df(e, t) {
  ce(t, !0), Ke(e, Pw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Xe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = _w();
      V(a, l);
    },
    children: (a, l) => {
      var u = Ew(), d = ie(u), f = B(d);
      Ae(f, {
        level: 3,
        children: (g, y) => {
          be();
          var w = Pe("输入参数");
          V(g, w);
        },
        $$slots: { default: !0 }
      });
      var p = H(f, 2);
      ze(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, y) => {
          var w = Sw();
          V(g, w);
        },
        $$slots: { default: !0 }
      }), I(d);
      var h = H(d, 2);
      cf(h, {}), V(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), de(s);
}
le(df, { data: {} }, [], [], !0);
const ff = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), ff(e, r.source, n));
}, pf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: pf(r.children, t + "." + r.name, n)
})), tu = (e, t, n) => {
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
          children: pf(r, e.id, t)
        };
    }
  }
}, hf = (e = !1) => {
  const t = st(), n = In(t), r = /* @__PURE__ */ T(pn), o = /* @__PURE__ */ T(() => c(r).nodes), i = /* @__PURE__ */ T(() => c(r).edges), s = /* @__PURE__ */ T(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ T(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = tu(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      ff(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = tu(f, p, u);
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
var Nw = /* @__PURE__ */ J('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Tw = /* @__PURE__ */ J('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Ow = /* @__PURE__ */ J('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Lw = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function gf(e, t) {
  ce(t, !0), Ke(e, Lw), sr(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = st(), l = In(a), u = /* @__PURE__ */ T(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = kt(), f = ($, b) => {
    d(a, (P) => {
      let N = P.data?.[o()];
      return N[r()] = { ...N[r()], [$]: b }, { [o()]: N };
    });
  }, p = ($, b) => {
    const P = b.target.value;
    f($, P);
  }, h = ($) => {
    const b = $.value;
    f("ref", b);
  }, g = ($) => {
    const b = $.value;
    f("refType", b);
  }, y = ($) => {
    const b = $.value;
    f("contentType", b);
  };
  let w;
  const k = () => {
    d(a, ($) => {
      let b = $.data?.[o()];
      return b.splice(r(), 1), { [o()]: [...b] };
    }), w?.hide();
  };
  let C = hf(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter($) {
      n($), v();
    },
    get index() {
      return r();
    },
    set index($) {
      r($), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName($) {
      o($), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly($) {
      i($), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType($ = !1) {
      s($), v();
    }
  }, S = Ow(), O = ie(S), E = B(O);
  {
    let $ = /* @__PURE__ */ T(() => c(u).nameDisabled === !0);
    lt(E, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c($);
      },
      oninput: (b) => p("name", b)
    });
  }
  I(O);
  var L = H(O, 2), D = B(L);
  {
    var Z = ($) => {
      lt($, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (b) => p("value", b)
      });
    }, q = ($) => {
      var b = Oe(), P = ie(b);
      {
        var N = (z) => {
          {
            let j = /* @__PURE__ */ T(() => [c(u).ref]);
            bt(z, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ue(
          P,
          (z) => {
            c(u).refType !== "input" && z(N);
          },
          !0
        );
      }
      V($, b);
    };
    ue(D, ($) => {
      c(u).refType === "fixed" ? $(Z) : $(q, !1);
    });
  }
  I(L);
  var R = H(L, 2), _ = B(R);
  return Zt(
    lr(_, {
      placement: "bottom",
      floating: ($) => {
        var b = Tw(), P = B(b), N = H(B(P));
        {
          let X = /* @__PURE__ */ T(() => c(u).refType ? [c(u).refType] : []);
          bt(N, {
            get items() {
              return Ty;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: g
          });
        }
        I(P);
        var z = H(P, 2);
        {
          var j = (X) => {
            var U = Nw(), se = H(B(U));
            {
              let ae = /* @__PURE__ */ T(() => c(u).contentType ? [c(u).contentType] : []);
              bt(se, {
                get items() {
                  return Pa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ae);
                },
                onSelect: y
              });
            }
            I(U), V(X, U);
          };
          ue(z, (X) => {
            s() && X(j);
          });
        }
        var W = H(z, 2), M = H(B(W));
        Ge(M, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), I(W);
        var Y = H(W, 2), Q = H(B(Y));
        Ge(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return c(u).description;
          }
        }), I(Y);
        var re = H(Y, 2), K = B(re);
        ze(K, {
          onclick: k,
          children: (X, U) => {
            be();
            var se = Pe("删除");
            V(X, se);
          },
          $$slots: { default: !0 }
        }), I(re), I(b), V($, b);
      },
      children: ($, b) => {
        Go($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => w = $,
    () => w
  ), I(R), V(e, S), de(x);
}
le(
  gf,
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
var Mw = /* @__PURE__ */ J('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Vw = /* @__PURE__ */ J('<div class="none-params svelte-32f1pk"> </div>'), Dw = /* @__PURE__ */ J('<div class="input-container svelte-32f1pk"><!> <!></div>');
const zw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Mt(e, t) {
  ce(t, !0), Ke(e, zw);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = st(), a = In(s), l = /* @__PURE__ */ T(() => [...a?.current?.data?.[r()] || []]);
  var u = {
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
  }, d = Dw(), f = B(d);
  {
    var p = (g) => {
      var y = Mw();
      be(4), V(g, y);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = H(f, 2);
  return Pt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, y, w) => {
      gf(g, {
        get parameter() {
          return c(y);
        },
        get index() {
          return c(w);
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
      var y = Vw(), w = B(y, !0);
      I(y), Ee(() => qe(w, n())), V(g, y);
    }
  ), I(d), V(e, d), de(u);
}
le(
  Mt,
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
var Hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Aw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ J('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Iw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function vf(e, t) {
  ce(t, !0), Ke(e, Iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Xe(
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
        var l = Hw();
        V(a, l);
      },
      children: (a, l) => {
        var u = Rw(), d = ie(u), f = B(d);
        Ae(f, {
          level: 3,
          children: (g, y) => {
            be();
            var w = Pe("输出参数");
            V(g, w);
          },
          $$slots: { default: !0 }
        });
        var p = H(f, 2);
        ze(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, y) => {
            var w = Aw();
            V(g, w);
          },
          $$slots: { default: !0 }
        }), I(d);
        var h = H(d, 2);
        Mt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(s);
}
le(vf, { data: {} }, [], [], !0);
const ms = (e) => JSON.parse(JSON.stringify(e));
var jw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Bw = /* @__PURE__ */ J('<div class="input-more-item svelte-hwmib9"><!></div>'), Kw = /* @__PURE__ */ J('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Zw = /* @__PURE__ */ J('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Ww = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function mf(e, t) {
  ce(t, !0), Ke(e, Ww);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = st(), a = In(s), l = /* @__PURE__ */ T(() => {
    let _ = a?.current?.data?.[o()], $;
    if (_ && r().length > 0) {
      let b = _;
      for (let P = 0; P < r().length; P++) {
        const N = r()[P];
        P == r().length - 1 ? $ = b[N] : b = b[N].children;
      }
    }
    return { ...n(), ...$ };
  });
  const { updateNodeData: u } = kt(), d = (_, $) => {
    u(s, (b) => {
      const P = b.data?.[o()];
      if (P && r().length > 0) {
        let N = P;
        for (let z = 0; z < r().length; z++) {
          const j = r()[z];
          z == r().length - 1 ? N[j] = { ...N[j], [_]: $ } : N = N[j].children;
        }
      }
      return { [o()]: [...ms(P)] };
    });
  }, f = (_, $) => {
    const b = $.target.value;
    d(_, b);
  }, p = (_) => {
    const $ = _.value;
    d("dataType", $);
  };
  let h;
  const g = () => {
    u(s, (_) => {
      let $ = _.data?.[o()];
      if ($ && r().length > 0) {
        let b = $;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? b.splice(N, 1) : b = b[N].children;
        }
      }
      return { [o()]: [...ms($)] };
    }), h?.hide();
  }, y = () => {
    u(s, (_) => {
      let $ = _.data?.[o()];
      if ($ && r().length > 0) {
        let b = $;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? b[N].children ? b[N].children.push({ id: _r(), name: "newParam", dataType: "String" }) : b[N].children = [{ id: _r(), name: "newParam", dataType: "String" }] : b = b[N].children;
        }
      }
      return { [o()]: [...ms($)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), v();
    }
  }, k = Zw(), C = ie(k), x = B(C);
  {
    var S = (_) => {
      var $ = Oe(), b = ie($);
      Pt(b, 17, r, Xr, (P, N) => {
        be();
        var z = Pe(" ");
        V(P, z);
      }), V(_, $);
    };
    ue(x, (_) => {
      r().length > 1 && _(S);
    });
  }
  var O = H(x, 2);
  {
    let _ = /* @__PURE__ */ T(() => c(l).nameDisabled === !0);
    lt(O, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: ($) => {
        f("name", $);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  I(C);
  var E = H(C, 2), L = B(E);
  {
    let _ = /* @__PURE__ */ T(() => c(l).dataTypeItems || Ny), $ = /* @__PURE__ */ T(() => c(l).dataType ? [c(l).dataType] : []), b = /* @__PURE__ */ T(() => c(l).dataTypeDisabled === !0);
    bt(L, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c($);
      },
      get disabled() {
        return c(b);
      },
      onSelect: p
    });
  }
  var D = H(L, 2);
  {
    var Z = (_) => {
      ze(_, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: ($, b) => {
          var P = jw();
          V($, P);
        },
        $$slots: { default: !0 }
      });
    };
    ue(D, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(Z);
    });
  }
  I(E);
  var q = H(E, 2), R = B(q);
  return Zt(
    lr(R, {
      placement: "bottom",
      floating: (_) => {
        var $ = Kw(), b = B($), P = H(B(b));
        {
          let M = /* @__PURE__ */ T(() => c(l).defaultValue || "");
          Ge(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (Y) => {
              f("defaultValue", Y);
            }
          });
        }
        I(b);
        var N = H(b, 2), z = H(B(N));
        {
          let M = /* @__PURE__ */ T(() => c(l).description || "");
          Ge(z, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (Y) => {
              f("description", Y);
            }
          });
        }
        I(N);
        var j = H(N, 2);
        {
          var W = (M) => {
            var Y = Bw(), Q = B(Y);
            ze(Q, {
              onclick: g,
              children: (re, K) => {
                be();
                var X = Pe("删除");
                V(re, X);
              },
              $$slots: { default: !0 }
            }), I(Y), V(M, Y);
          };
          ue(j, (M) => {
            c(l).deleteDisabled !== !0 && M(W);
          });
        }
        I($), V(_, $);
      },
      children: (_, $) => {
        Go(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => h = _,
    () => h
  ), I(q), V(e, k), de(w);
}
le(
  mf,
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
var Yw = /* @__PURE__ */ J("<!> <!>", 1), Fw = /* @__PURE__ */ J('<div class="none-params svelte-1oz5kx0"> </div>'), qw = /* @__PURE__ */ J('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Xw = /* @__PURE__ */ J('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Gw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Bn(e, t) {
  ce(t, !0), Ke(e, Gw);
  const n = (g, y = xt, w = xt) => {
    var k = Oe(), C = ie(k);
    Pt(
      C,
      19,
      y,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, S, O) => {
        var E = Yw(), L = ie(E);
        {
          let q = /* @__PURE__ */ T(() => [...w(), c(O)]);
          mf(L, {
            get parameter() {
              return c(S);
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
        var D = H(L, 2);
        {
          var Z = (q) => {
            {
              let R = /* @__PURE__ */ T(() => [...w(), c(O)]);
              n(q, () => c(S).children, () => c(R));
            }
          };
          ue(D, (q) => {
            c(S).children && q(Z);
          });
        }
        V(x, E);
      },
      (x) => {
        var S = Oe(), O = ie(S);
        {
          var E = (L) => {
            var D = Fw(), Z = B(D, !0);
            I(D), Ee(() => qe(Z, r())), V(L, D);
          };
          ue(O, (L) => {
            w().length === 0 && L(E);
          });
        }
        V(x, S);
      }
    ), V(g, k);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = st(), a = In(s), l = /* @__PURE__ */ T(() => [...a?.current?.data?.[o()] || []]);
  var u = {
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
  }, d = Xw(), f = B(d);
  {
    var p = (g) => {
      var y = qw();
      be(4), V(g, y);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = H(f, 2);
  return n(h, () => c(l) || [], () => []), I(d), V(e, d), de(u);
}
le(Bn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Uw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Jw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), eb = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), tb = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), nb = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), rb = /* @__PURE__ */ J('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), ob = /* @__PURE__ */ J('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const ib = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function yf(e, t) {
  ce(t, !0), Ke(e, ib);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = tr();
  let a = /* @__PURE__ */ Me(Xt([]));
  sr(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = kt(), u = (f) => {
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
  ot(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = Uw();
        V(f, p);
      },
      children: (f, p) => {
        var h = ob(), g = ie(h), y = B(g);
        Ae(y, {
          level: 3,
          children: (j, W) => {
            be();
            var M = Pe("输入参数");
            V(j, M);
          },
          $$slots: { default: !0 }
        });
        var w = H(y, 2);
        ze(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, W) => {
            var M = Jw();
            V(j, M);
          },
          $$slots: { default: !0 }
        }), I(g);
        var k = H(g, 2);
        Mt(k, {});
        var C = H(k, 2), x = B(C);
        Ae(x, {
          level: 3,
          children: (j, W) => {
            be();
            var M = Pe("图片识别");
            V(j, M);
          },
          $$slots: { default: !0 }
        });
        var S = H(x, 2);
        ze(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (j, W) => {
            var M = Qw();
            V(j, M);
          },
          $$slots: { default: !0 }
        }), I(C);
        var O = H(C, 2);
        Mt(O, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var E = H(O, 2);
        Ae(E, {
          level: 3,
          mt: "10px",
          children: (j, W) => {
            be();
            var M = Pe("模型设置");
            V(j, M);
          },
          $$slots: { default: !0 }
        });
        var L = H(E, 4), D = B(L);
        {
          let j = /* @__PURE__ */ T(() => n().llmId ? [n().llmId] : []);
          bt(D, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (W) => {
              const M = W.value;
              l(o, () => ({ llmId: M }));
            },
            get value() {
              return c(j);
            }
          });
        }
        var Z = H(D, 2);
        lr(Z, {
          placement: "bottom",
          floating: (j) => {
            var W = rb(), M = H(B(W), 2), Y = B(M), Q = B(Y), re = B(Q);
            I(Q);
            var K = H(Q, 2);
            vr(K), K.__input = [eb, l, o], I(Y), I(M);
            var X = H(M, 2), U = B(X), se = B(U), ae = B(se);
            I(se);
            var ee = H(se, 2);
            vr(ee), ee.__input = [tb, l, o], I(U), I(X);
            var ye = H(X, 2), fe = B(ye), ne = B(fe), oe = B(ne);
            I(ne);
            var ge = H(ne, 2);
            vr(ge), ge.__input = [nb, l, o], I(fe), I(ye), I(W), Ee(() => {
              qe(re, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), si(K, n().temperature ?? 0.7), qe(ae, `Top P: ${n().topP ?? 0.9 ?? ""}`), si(ee, n().topP ?? 0.9), qe(oe, `Top K: ${n().topK ?? 50 ?? ""}`), si(ge, n().topK ?? 50);
            }), V(j, W);
          },
          children: (j, W) => {
            Go(j, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), I(L);
        var q = H(L, 4), R = B(q);
        {
          let j = /* @__PURE__ */ T(() => n().systemPrompt || "");
          Ge(R, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (W) => {
              l(o, { systemPrompt: W.target.value });
            }
          });
        }
        I(q);
        var _ = H(q, 4), $ = B(_);
        {
          let j = /* @__PURE__ */ T(() => n().userPrompt || "");
          Ge($, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (W) => {
              l(o, { userPrompt: W.target.value });
            }
          });
        }
        I(_);
        var b = H(_, 2), P = B(b);
        Ae(P, {
          level: 3,
          children: (j, W) => {
            be();
            var M = Pe("输出参数");
            V(j, M);
          },
          $$slots: { default: !0 }
        });
        var N = H(P, 2);
        {
          let j = /* @__PURE__ */ T(() => n().outType ? [n().outType] : []);
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
              return c(j);
            }
          });
        }
        I(b);
        var z = H(b, 2);
        Bn(z, {}), V(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(d);
}
ir(["input"]);
le(yf, { data: {} }, [], [], !0);
var sb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ab = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ub = /* @__PURE__ */ J('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const cb = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function wf(e, t) {
  ce(t, !0), Ke(e, cb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  sr(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = st(), { addParameter: i } = hn(), { updateNodeData: s } = kt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = sb();
        V(u, d);
      },
      children: (u, d) => {
        var f = ub(), p = ie(f), h = B(p);
        Ae(h, {
          level: 3,
          children: (Z, q) => {
            be();
            var R = Pe("输入参数");
            V(Z, R);
          },
          $$slots: { default: !0 }
        });
        var g = H(h, 2);
        ze(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, q) => {
            var R = ab();
            V(Z, R);
          },
          $$slots: { default: !0 }
        }), I(p);
        var y = H(p, 2);
        Mt(y, {});
        var w = H(y, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: (Z, q) => {
            be();
            var R = Pe("代码");
            V(Z, R);
          },
          $$slots: { default: !0 }
        });
        var k = H(w, 4), C = B(k);
        {
          let Z = /* @__PURE__ */ T(() => n().engine ? [n().engine] : ["qlexpress"]);
          bt(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (q) => {
              const R = q.value;
              s(o, () => ({ engine: R }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        I(k);
        var x = H(k, 4), S = B(x);
        {
          let Z = /* @__PURE__ */ T(() => n().code || "");
          Ge(S, {
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
        I(x);
        var O = H(x, 2), E = B(O);
        Ae(E, {
          level: 3,
          mt: "10px",
          children: (Z, q) => {
            be();
            var R = Pe("输出参数");
            V(Z, R);
          },
          $$slots: { default: !0 }
        });
        var L = H(E, 2);
        ze(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, q) => {
            var R = lb();
            V(Z, R);
          },
          $$slots: { default: !0 }
        }), I(O);
        var D = H(O, 2);
        Bn(D, {}), V(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
le(wf, { data: {} }, [], [], !0);
var db = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), fb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ J('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const hb = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function bf(e, t) {
  ce(t, !0), Ke(e, hb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), { updateNodeData: s } = kt();
  ot(() => {
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
      n(l), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = db();
        V(l, u);
      },
      children: (l, u) => {
        var d = pb(), f = ie(d), p = B(f);
        Ae(p, {
          level: 3,
          children: (O, E) => {
            be();
            var L = Pe("输入参数");
            V(O, L);
          },
          $$slots: { default: !0 }
        });
        var h = H(p, 2);
        ze(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, E) => {
            var L = fb();
            V(O, L);
          },
          $$slots: { default: !0 }
        }), I(f);
        var g = H(f, 2);
        Mt(g, {});
        var y = H(g, 2);
        Ae(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (O, E) => {
            be();
            var L = Pe("模板内容");
            V(O, L);
          },
          $$slots: { default: !0 }
        });
        var w = H(y, 2), k = B(w);
        {
          let O = /* @__PURE__ */ T(() => n().template || "");
          Ge(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ template: E.target.value }));
            },
            get value() {
              return c(O);
            }
          });
        }
        I(w);
        var C = H(w, 2), x = B(C);
        Ae(x, {
          level: 3,
          mt: "10px",
          children: (O, E) => {
            be();
            var L = Pe("输出参数");
            V(O, L);
          },
          $$slots: { default: !0 }
        }), I(C);
        var S = H(C, 2);
        Bn(S, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
le(bf, { data: {} }, [], [], !0);
var gb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), vb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yb = /* @__PURE__ */ J('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bb = /* @__PURE__ */ J('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ J('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), kb = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), $b = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), _b = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sb = /* @__PURE__ */ J('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Eb = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function xf(e, t) {
  ce(t, !0), Ke(e, Eb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  sr(() => {
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
  ], i = st(), { addParameter: s } = hn(), { updateNodeData: a } = kt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = gb();
        V(u, d);
      },
      children: (u, d) => {
        var f = Sb(), p = ie(f), h = B(p);
        Ae(h, {
          level: 3,
          children: (K, X) => {
            be();
            var U = Pe("输入参数");
            V(K, U);
          },
          $$slots: { default: !0 }
        });
        var g = H(h, 2);
        ze(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (K, X) => {
            var U = vb();
            V(K, U);
          },
          $$slots: { default: !0 }
        }), I(p);
        var y = H(p, 2);
        Mt(y, {});
        var w = H(y, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: (K, X) => {
            be();
            var U = Pe("URL 地址");
            V(K, U);
          },
          $$slots: { default: !0 }
        });
        var k = H(w, 2), C = B(k), x = B(C);
        {
          let K = /* @__PURE__ */ T(() => n().method ? [n().method] : ["get"]);
          bt(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (X) => {
              const U = X.value;
              a(i, () => ({ method: U }));
            },
            get value() {
              return c(K);
            }
          });
        }
        I(C);
        var S = H(C, 2), O = B(S);
        {
          let K = /* @__PURE__ */ T(() => n().url || "");
          lt(O, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(K);
            }
          });
        }
        I(S), I(k);
        var E = H(k, 2), L = B(E);
        Ae(L, {
          level: 3,
          children: (K, X) => {
            be();
            var U = Pe("Http 头信息");
            V(K, U);
          },
          $$slots: { default: !0 }
        });
        var D = H(L, 2);
        ze(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (K, X) => {
            var U = mb();
            V(K, U);
          },
          $$slots: { default: !0 }
        }), I(E);
        var Z = H(E, 2);
        Mt(Z, { dataKeyName: "headers" });
        var q = H(Z, 2);
        {
          var R = (K) => {
            var X = yb(), U = ie(X);
            Ae(U, {
              level: 3,
              mt: "10px",
              children: (_e, Le) => {
                be();
                var F = Pe("Body");
                V(_e, F);
              },
              $$slots: { default: !0 }
            });
            var se = H(U, 2), ae = B(se), ee = B(ae);
            {
              let _e = /* @__PURE__ */ T(() => !n().bodyType || n().bodyType === "");
              lt(ee, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), I(ae);
            var ye = H(ae, 2), fe = B(ye);
            {
              let _e = /* @__PURE__ */ T(() => n().bodyType === "form-data");
              lt(fe, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), I(ye);
            var ne = H(ye, 2), oe = B(ne);
            {
              let _e = /* @__PURE__ */ T(() => n().bodyType === "x-www-form-urlencoded");
              lt(oe, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), I(ne);
            var ge = H(ne, 2), ve = B(ge);
            {
              let _e = /* @__PURE__ */ T(() => n().bodyType === "json");
              lt(ve, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), I(ge);
            var xe = H(ge, 2), pe = B(xe);
            {
              let _e = /* @__PURE__ */ T(() => n().bodyType === "raw");
              lt(pe, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), I(xe), I(se), V(K, X);
          };
          ue(q, (K) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && K(R);
          });
        }
        var _ = H(q, 2);
        {
          var $ = (K) => {
            var X = bb(), U = ie(X), se = B(U);
            Ae(se, {
              level: 3,
              children: (ye, fe) => {
                be();
                var ne = Pe("参数");
                V(ye, ne);
              },
              $$slots: { default: !0 }
            });
            var ae = H(se, 2);
            ze(ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ye, fe) => {
                var ne = wb();
                V(ye, ne);
              },
              $$slots: { default: !0 }
            }), I(U);
            var ee = H(U, 2);
            Mt(ee, { dataKeyName: "formData" }), V(K, X);
          };
          ue(_, (K) => {
            n().bodyType === "form-data" && K($);
          });
        }
        var b = H(_, 2);
        {
          var P = (K) => {
            var X = Cb(), U = ie(X), se = B(U);
            Ae(se, {
              level: 3,
              children: (ye, fe) => {
                be();
                var ne = Pe("Body 参数");
                V(ye, ne);
              },
              $$slots: { default: !0 }
            });
            var ae = H(se, 2);
            ze(ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ye, fe) => {
                var ne = xb();
                V(ye, ne);
              },
              $$slots: { default: !0 }
            }), I(U);
            var ee = H(U, 2);
            Mt(ee, { dataKeyName: "formUrlencoded" }), V(K, X);
          };
          ue(b, (K) => {
            n().bodyType === "x-www-form-urlencoded" && K(P);
          });
        }
        var N = H(b, 2);
        {
          var z = (K) => {
            var X = kb(), U = B(X);
            Ge(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (se) => {
                a(i, { bodyJson: se.target.value });
              }
            }), I(X), V(K, X);
          };
          ue(N, (K) => {
            n().bodyType === "json" && K(z);
          });
        }
        var j = H(N, 2);
        {
          var W = (K) => {
            var X = $b(), U = B(X);
            Ge(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (se) => {
                a(i, { bodyRaw: se.target.value });
              }
            }), I(X), V(K, X);
          };
          ue(j, (K) => {
            n().bodyType === "raw" && K(W);
          });
        }
        var M = H(j, 2), Y = B(M);
        Ae(Y, {
          level: 3,
          mt: "10px",
          children: (K, X) => {
            be();
            var U = Pe("输出参数");
            V(K, U);
          },
          $$slots: { default: !0 }
        });
        var Q = H(Y, 2);
        ze(Q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (K, X) => {
            var U = _b();
            V(K, U);
          },
          $$slots: { default: !0 }
        }), I(M);
        var re = H(M, 2);
        Bn(re, {}), V(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
le(xf, { data: {} }, [], [], !0);
var Pb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tb = /* @__PURE__ */ J('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Ob = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cf(e, t) {
  ce(t, !0), Ke(e, Ob);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = tr();
  let a = /* @__PURE__ */ Me(Xt([]));
  sr(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = kt();
  ot(() => {
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
      n(d), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Pb();
        V(d, f);
      },
      children: (d, f) => {
        var p = Tb(), h = ie(p), g = B(h);
        Ae(g, {
          level: 3,
          children: (R, _) => {
            be();
            var $ = Pe("输入参数");
            V(R, $);
          },
          $$slots: { default: !0 }
        });
        var y = H(g, 2);
        ze(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, _) => {
            var $ = Nb();
            V(R, $);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = H(h, 2);
        Mt(w, {});
        var k = H(w, 2);
        Ae(k, {
          level: 3,
          mt: "10px",
          children: (R, _) => {
            be();
            var $ = Pe("知识库设置");
            V(R, $);
          },
          $$slots: { default: !0 }
        });
        var C = H(k, 4), x = B(C);
        {
          let R = /* @__PURE__ */ T(() => n().knowledgeId ? [n().knowledgeId] : []);
          bt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const $ = _.value;
              l(o, () => ({ knowledgeId: $ }));
            },
            get value() {
              return c(R);
            }
          });
        }
        I(C);
        var S = H(C, 4), O = B(S);
        lt(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const _ = R.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), I(S);
        var E = H(S, 4), L = B(E);
        {
          let R = /* @__PURE__ */ T(() => n().limit || "");
          lt(L, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const $ = _.target.value;
              l(o, () => ({ limit: $ }));
            },
            get value() {
              return c(R);
            }
          });
        }
        I(E);
        var D = H(E, 2), Z = B(D);
        Ae(Z, {
          level: 3,
          mt: "10px",
          children: (R, _) => {
            be();
            var $ = Pe("输出参数");
            V(R, $);
          },
          $$slots: { default: !0 }
        }), I(D);
        var q = H(D, 2);
        Bn(q, {}), V(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(u);
}
le(Cf, { data: {} }, [], [], !0);
var Lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vb = /* @__PURE__ */ J('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Db = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kf(e, t) {
  ce(t, !0), Ke(e, Db);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = tr();
  let a = /* @__PURE__ */ Me(Xt([]));
  sr(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = kt();
  ot(() => {
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
      n(d), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Lb();
        V(d, f);
      },
      children: (d, f) => {
        var p = Vb(), h = ie(p), g = B(h);
        Ae(g, {
          level: 3,
          children: (R, _) => {
            be();
            var $ = Pe("输入参数");
            V(R, $);
          },
          $$slots: { default: !0 }
        });
        var y = H(g, 2);
        ze(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, _) => {
            var $ = Mb();
            V(R, $);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = H(h, 2);
        Mt(w, {});
        var k = H(w, 2);
        Ae(k, {
          level: 3,
          mt: "10px",
          children: (R, _) => {
            be();
            var $ = Pe("搜索引擎设置");
            V(R, $);
          },
          $$slots: { default: !0 }
        });
        var C = H(k, 4), x = B(C);
        {
          let R = /* @__PURE__ */ T(() => n().engine ? [n().engine] : []);
          bt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const $ = _.value;
              l(o, () => ({ engine: $ }));
            },
            get value() {
              return c(R);
            }
          });
        }
        I(C);
        var S = H(C, 4), O = B(S);
        lt(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const _ = R.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), I(S);
        var E = H(S, 4), L = B(E);
        lt(L, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const _ = R.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), I(E);
        var D = H(E, 2), Z = B(D);
        Ae(Z, {
          level: 3,
          mt: "10px",
          children: (R, _) => {
            be();
            var $ = Pe("输出参数");
            V(R, $);
          },
          $$slots: { default: !0 }
        }), I(D);
        var q = H(D, 2);
        Bn(q, {}), V(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(u);
}
le(kf, { data: {} }, [], [], !0);
var zb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ab = /* @__PURE__ */ J('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Rb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function $f(e, t) {
  ce(t, !0), Ke(e, Rb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  ot(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = zb();
        V(a, l);
      },
      handle: (a) => {
        Qn(a, {
          type: "source",
          get position() {
            return ke.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Ab(), d = ie(u), f = B(d);
        Ae(f, {
          level: 3,
          children: (k, C) => {
            be();
            var x = Pe("循环变量");
            V(k, x);
          },
          $$slots: { default: !0 }
        }), I(d);
        var p = H(d, 2);
        Mt(p, { dataKeyName: "loopVars" });
        var h = H(p, 2), g = B(h);
        Ae(g, {
          level: 3,
          children: (k, C) => {
            be();
            var x = Pe("输出参数");
            V(k, x);
          },
          $$slots: { default: !0 }
        });
        var y = H(g, 2);
        ze(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (k, C) => {
            var x = Hb();
            V(k, x);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = H(h, 2);
        Mt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), V(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), de(s);
}
le($f, { data: {} }, [], [], !0);
var Ib = /* @__PURE__ */ J('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), jb = /* @__PURE__ */ J('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Bb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _f(e, t) {
  ce(t, !0), Ke(e, Bb);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = st(), a = In(s), l = /* @__PURE__ */ T(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = kt(), d = (_, $) => {
    u(s, (b) => {
      let P = b.data?.[o()];
      return P[r()] = { ...P[r()], [_]: $ }, { [o()]: P };
    });
  }, f = (_, $) => {
    const b = $.target.value;
    d(_, b);
  }, p = (_) => {
    const $ = _.value;
    d("ref", $);
  }, h = (_) => {
    const $ = _.value;
    d("formType", $);
  }, g = (_) => {
    const $ = _.value;
    d("contentType", $);
  };
  let y;
  const w = () => {
    u(s, (_) => {
      let $ = _.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), y?.hide();
  };
  let k = hf(i());
  var C = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), v();
    }
  }, x = jb(), S = ie(x), O = B(S);
  {
    let _ = /* @__PURE__ */ T(() => c(l).nameDisabled === !0);
    lt(O, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: ($) => f("name", $)
    });
  }
  I(S);
  var E = H(S, 2), L = B(E);
  {
    var D = (_) => {
      lt(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, Z = (_) => {
      var $ = Oe(), b = ie($);
      {
        var P = (N) => {
          {
            let z = /* @__PURE__ */ T(() => [c(l).ref]);
            bt(N, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(z);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ue(
          b,
          (N) => {
            c(l).refType !== "input" && N(P);
          },
          !0
        );
      }
      V(_, $);
    };
    ue(L, (_) => {
      c(l).refType === "fixed" ? _(D) : _(Z, !1);
    });
  }
  I(E);
  var q = H(E, 2), R = B(q);
  return Zt(
    lr(R, {
      placement: "bottom",
      floating: (_) => {
        var $ = Ib(), b = B($), P = H(B(b));
        {
          let K = /* @__PURE__ */ T(() => c(l).contentType ? [c(l).contentType] : []);
          bt(P, {
            get items() {
              return Pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: g
          });
        }
        I(b);
        var N = H(b, 2), z = H(B(N));
        {
          let K = /* @__PURE__ */ T(() => c(l).formType ? [c(l).formType] : []);
          bt(z, {
            get items() {
              return Ly;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        I(N);
        var j = H(N, 2), W = H(B(j));
        Ge(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            f("formLabel", K);
          },
          get value() {
            return c(l).formLabel;
          }
        }), I(j);
        var M = H(j, 2), Y = H(B(M));
        Ge(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            f("formDescription", K);
          },
          get value() {
            return c(l).formDescription;
          }
        }), I(M);
        var Q = H(M, 2), re = B(Q);
        ze(re, {
          onclick: w,
          children: (K, X) => {
            be();
            var U = Pe("删除");
            V(K, U);
          },
          $$slots: { default: !0 }
        }), I(Q), I($), V(_, $);
      },
      children: (_, $) => {
        Go(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), I(q), V(e, x), de(C);
}
le(
  _f,
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
var Kb = /* @__PURE__ */ J('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Zb = /* @__PURE__ */ J('<div class="none-params svelte-1fllp9b"> </div>'), Wb = /* @__PURE__ */ J('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Yb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Sf(e, t) {
  ce(t, !0), Ke(e, Yb);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = st(), s = In(i), a = /* @__PURE__ */ T(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), v();
    }
  }, u = Wb(), d = B(u);
  {
    var f = (h) => {
      var g = Kb();
      be(4), V(h, g);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = H(d, 2);
  return Pt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, y) => {
      _f(h, {
        get parameter() {
          return c(g);
        },
        get index() {
          return c(y);
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
      var g = Zb(), y = B(g, !0);
      I(g), Ee(() => qe(y, n())), V(h, g);
    }
  ), I(u), V(e, u), de(l);
}
le(Sf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const js = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!js(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !js(e[s], t[s])) return !1;
    return !0;
  }
};
var Fb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xb = /* @__PURE__ */ J('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Gb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ef(e, t) {
  ce(t, !0), Ke(e, Gb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), { updateNodeData: s } = kt();
  ot(() => {
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
      js(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  };
  return en(e, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Fb();
        V(l, u);
      },
      children: (l, u) => {
        var d = Xb(), f = ie(d), p = B(f);
        Ae(p, {
          level: 3,
          children: (O, E) => {
            be();
            var L = Pe("确认数据");
            V(O, L);
          },
          $$slots: { default: !0 }
        });
        var h = H(p, 2);
        ze(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (O, E) => {
            var L = qb();
            V(O, L);
          },
          $$slots: { default: !0 }
        }), I(f);
        var g = H(f, 2);
        Sf(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = H(g, 2);
        Ae(y, {
          level: 3,
          mt: "10px",
          children: (O, E) => {
            be();
            var L = Pe("确认消息");
            V(O, L);
          },
          $$slots: { default: !0 }
        });
        var w = H(y, 4), k = B(w);
        {
          let O = /* @__PURE__ */ T(() => n().message || "");
          Ge(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ message: E.target.value }));
            },
            get value() {
              return c(O);
            }
          });
        }
        I(w);
        var C = H(w, 2), x = B(C);
        Ae(x, {
          level: 3,
          mt: "10px",
          children: (O, E) => {
            be();
            var L = Pe("输出参数");
            V(O, L);
          },
          $$slots: { default: !0 }
        }), I(C);
        var S = H(C, 2);
        Bn(S, { placeholder: "" }), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
le(Ef, { data: {} }, [], [], !0);
const Ub = {
  startNode: df,
  codeNode: wf,
  confirmNode: Ef,
  llmNode: yf,
  templateNode: bf,
  httpNode: xf,
  knowledgeNode: Cf,
  searchEngineNode: kf,
  loopNode: $f,
  endNode: vf
};
var Jb = /* @__PURE__ */ J("<!> ", 1);
function Bs(e, t) {
  ce(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7), a = (u) => {
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
      n(u), v();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), v();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), v();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), v();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), v();
    }
  };
  return ze(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = Jb(), p = ie(f);
      ua(p, n);
      var h = H(p);
      Ee(() => qe(h, ` ${r() ?? ""}`)), V(u, f);
    },
    $$slots: { default: !0 }
  }), de(l);
}
le(Bs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Qb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ex = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), tx = /* @__PURE__ */ J('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Pf(e, t) {
  ce(t, !0);
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
  ], s = [], a = tr(), l = a.customNodes;
  if (l) {
    const k = Object.keys(l).sort((C, x) => (l[C].sortNo || 0) - (l[x].sortNo || 0));
    for (let C of k)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, x) => (C.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const k = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(k)) {
      for (let C of k)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === C) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = tx(), d = B(u), f = B(d), p = B(f);
  qd(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (k) => {
      G(n, k.value.toString(), !0);
    }
  }), I(f);
  var h = H(f, 2), g = B(h);
  Pt(g, 21, () => o, Xr, (k, C) => {
    Bs(k, Xe(() => c(C)));
  }), I(g);
  var y = H(g, 2);
  Pt(y, 21, () => s, Xr, (k, C) => {
    Bs(k, Xe(() => c(C)));
  }), I(y), I(h), I(d);
  var w = H(d, 2);
  ze(w, {
    onclick: () => {
      G(r, c(r) ? "" : "show", !0);
    },
    children: (k, C) => {
      var x = Oe(), S = ie(x);
      {
        var O = (L) => {
          var D = Qb();
          V(L, D);
        }, E = (L) => {
          var D = ex();
          V(L, D);
        };
        ue(S, (L) => {
          c(r) === "show" ? L(O) : L(E, !1);
        });
      }
      V(k, x);
    },
    $$slots: { default: !0 }
  }), I(u), Ee(() => {
    It(u, 1, `tf-toolbar ${c(r) ?? ""}`), Ct(g, `display: ${c(n) === "base" ? "flex" : "none"}`), Ct(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), V(e, u), de();
}
le(Pf, {}, [], [], !0);
const nx = () => ({ getNode: (e) => et.getNode(e) }), rx = () => ({ ensureParentInNodesBefore: (e, t) => {
  et.updateNodes((n) => {
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
} }), ox = () => ({ getEdgesByTarget: (e) => et.getEdges().filter((t) => t.target === e) });
var ix = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sx = /* @__PURE__ */ J('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), ax = /* @__PURE__ */ J('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), lx = /* @__PURE__ */ J('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ux = /* @__PURE__ */ J('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), cx = /* @__PURE__ */ J('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), dx = /* @__PURE__ */ J('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), fx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), px = /* @__PURE__ */ J('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), hx = /* @__PURE__ */ J("<!> <!> <div></div> <!>", 1);
const gx = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Nf(e, t) {
  ce(t, !0), Ke(e, gx);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Fe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = kt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, k) => {
    l({ [w]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = tr().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  ot(() => {
    n().expand && g && g.append(f);
  }), ot(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), ot(() => {
    !n().parameters && p.parameters && l({
      parameters: Lo(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), ot(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: Lo(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), v();
    }
  };
  {
    const w = (C) => {
      var x = Oe(), S = ie(x);
      ua(S, () => p.icon), V(C, x);
    };
    let k = /* @__PURE__ */ T(() => ({ ...n(), description: p.description }));
    en(e, Xe(
      {
        get data() {
          return c(k);
        }
      },
      () => r,
      {
        icon: w,
        children: (C, x) => {
          var S = hx(), O = ie(S);
          {
            var E = (_) => {
              var $ = sx(), b = ie($), P = B(b);
              Ae(P, {
                level: 3,
                children: (W, M) => {
                  be();
                  var Y = Pe("输入参数");
                  V(W, Y);
                },
                $$slots: { default: !0 }
              });
              var N = H(P, 2);
              {
                var z = (W) => {
                  ze(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (M, Y) => {
                      var Q = ix();
                      V(M, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (W) => {
                  p.parametersAddEnable !== !1 && W(z);
                });
              }
              I(b);
              var j = H(b, 2);
              Mt(j, {}), V(_, $);
            };
            ue(O, (_) => {
              p.parametersEnable !== !1 && _(E);
            });
          }
          var L = H(O, 2);
          {
            var D = (_) => {
              var $ = Oe(), b = ie($);
              Pt(b, 17, () => h, Xr, (P, N) => {
                var z = Oe(), j = ie(z);
                {
                  var W = (Y) => {
                    var Q = ax(), re = ie(Q), K = B(re, !0);
                    I(re);
                    var X = H(re, 2), U = B(X);
                    {
                      let se = /* @__PURE__ */ T(() => n()[c(N).name] || c(N).defaultValue);
                      lt(U, Xe(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(se);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (ae) => {
                            u(c(N).name, ae);
                          }
                        }
                      ));
                    }
                    I(X), Ee(() => qe(K, c(N).label)), V(Y, Q);
                  }, M = (Y) => {
                    var Q = Oe(), re = ie(Q);
                    {
                      var K = (U) => {
                        var se = lx(), ae = ie(se), ee = B(ae, !0);
                        I(ae);
                        var ye = H(ae, 2), fe = B(ye);
                        {
                          let ne = /* @__PURE__ */ T(() => n()[c(N).name] || c(N).defaultValue);
                          Ge(fe, Xe(
                            {
                              rows: 3,
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
                              onchange: (oe) => {
                                u(c(N).name, oe);
                              }
                            }
                          ));
                        }
                        I(ye), Ee(() => qe(ee, c(N).label)), V(U, se);
                      }, X = (U) => {
                        var se = Oe(), ae = ie(se);
                        {
                          var ee = (fe) => {
                            var ne = ux(), oe = ie(ne), ge = B(oe, !0);
                            I(oe);
                            var ve = H(oe, 2), xe = B(ve), pe = B(xe), _e = B(pe);
                            I(pe);
                            var Le = H(pe, 2), F = (Je) => l({ [c(N).name]: parseFloat(Je.target.value) });
                            pt(
                              Le,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: F
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), I(xe), I(ve), Ee(() => {
                              qe(ge, c(N).label), qe(_e, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), V(fe, ne);
                          }, ye = (fe) => {
                            var ne = Oe(), oe = ie(ne);
                            {
                              var ge = (xe) => {
                                var pe = cx(), _e = ie(pe), Le = B(_e, !0);
                                I(_e);
                                var F = H(_e, 2), Je = B(F);
                                {
                                  let Re = /* @__PURE__ */ T(() => c(N).options || []), We = /* @__PURE__ */ T(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  bt(Je, {
                                    get items() {
                                      return c(Re);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Ze) => {
                                      const nt = Ze.value;
                                      l({ [c(N).name]: nt });
                                    },
                                    get value() {
                                      return c(We);
                                    }
                                  });
                                }
                                I(F), Ee(() => qe(Le, c(N).label)), V(xe, pe);
                              }, ve = (xe) => {
                                var pe = Oe(), _e = ie(pe);
                                {
                                  var Le = (Je) => {
                                    var Re = dx(), We = ie(Re), Ze = B(We, !0);
                                    I(We);
                                    var nt = H(We, 2), $t = B(nt);
                                    {
                                      let Qe = /* @__PURE__ */ T(() => c(N).chosen?.buttonText);
                                      Fd($t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Qe);
                                        },
                                        onChosen: (je, me, Be) => {
                                          c(N).chosen?.onChosen?.(l, je, me, Be);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    I(nt), Ee(() => qe(Ze, c(N).label)), V(Je, Re);
                                  }, F = (Je) => {
                                    var Re = Oe(), We = ie(Re);
                                    {
                                      var Ze = (nt) => {
                                        Ae(nt, Xe({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: ($t, Qe) => {
                                            be();
                                            var je = Pe();
                                            Ee(() => qe(je, c(N).label)), V($t, je);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        We,
                                        (nt) => {
                                          c(N).type === "heading" && nt(Ze);
                                        },
                                        !0
                                      );
                                    }
                                    V(Je, Re);
                                  };
                                  ue(
                                    _e,
                                    (Je) => {
                                      c(N).type === "chosen" ? Je(Le) : Je(F, !1);
                                    },
                                    !0
                                  );
                                }
                                V(xe, pe);
                              };
                              ue(
                                oe,
                                (xe) => {
                                  c(N).type === "select" ? xe(ge) : xe(ve, !1);
                                },
                                !0
                              );
                            }
                            V(fe, ne);
                          };
                          ue(
                            ae,
                            (fe) => {
                              c(N).type === "slider" ? fe(ee) : fe(ye, !1);
                            },
                            !0
                          );
                        }
                        V(U, se);
                      };
                      ue(
                        re,
                        (U) => {
                          c(N).type === "textarea" ? U(K) : U(X, !1);
                        },
                        !0
                      );
                    }
                    V(Y, Q);
                  };
                  ue(j, (Y) => {
                    c(N).type === "input" ? Y(W) : Y(M, !1);
                  });
                }
                V(P, z);
              }), V(_, $);
            };
            ue(L, (_) => {
              h && _(D);
            });
          }
          var Z = H(L, 2);
          Zt(Z, (_) => g = _, () => g);
          var q = H(Z, 2);
          {
            var R = (_) => {
              var $ = px(), b = ie($), P = B(b);
              Ae(P, {
                level: 3,
                mt: "10px",
                children: (W, M) => {
                  be();
                  var Y = Pe("输出参数");
                  V(W, Y);
                },
                $$slots: { default: !0 }
              });
              var N = H(P, 2);
              {
                var z = (W) => {
                  ze(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (M, Y) => {
                      var Q = fx();
                      V(M, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (W) => {
                  p.outputDefsAddEnable !== !1 && W(z);
                });
              }
              I(b);
              var j = H(b, 2);
              Bn(j, {}), V(_, $);
            };
            ue(q, (_) => {
              p.outputDefsEnable !== !1 && _(R);
            });
          }
          Ee(() => {
            Ct(Z, p.rootStyle || ""), It(Z, 1, Rn(p.rootClass), "svelte-qt4m0r");
          }), V(C, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return de(y);
}
le(Nf, { data: {} }, [], [], !0);
const vx = () => ({ updateEdgeData: (e, t, n) => {
  const r = et.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, et.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), mx = () => ({ deleteEdge: (e) => {
  et.removeEdge(e);
} });
var yx = /* @__PURE__ */ J('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), wx = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), bx = /* @__PURE__ */ J('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const xx = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Tf(e, t) {
  ce(t, !0), Ke(e, xx);
  const n = m(t, "onInit", 7), r = kt();
  n()(r);
  let o = /* @__PURE__ */ Me(!1), i = /* @__PURE__ */ Me(null);
  const { updateEdgeData: s } = vx(), a = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, l = (P) => {
    P.preventDefault();
    const N = r.screenToFlowPosition({ x: P.clientX - 250, y: P.clientY - 100 }), z = P.dataTransfer?.getData("application/tinyflow");
    if (!z)
      return;
    const j = JSON.parse(z), W = { id: `node_${_r()}`, position: N, data: {}, ...j };
    et.addNode(W), et.selectNodeOnly(W.id);
  }, { getNode: u } = nx(), d = (P) => {
    const N = u(P.source), z = u(P.target);
    if (P.sourceHandle === "loop_handle" || N.parentId) {
      const j = r.getEdges();
      for (let W of j)
        if (W.target === P.target) {
          const M = u(W.source);
          if (P.sourceHandle === "loop_handle" && M.parentId !== N.id || N.parentId && M.parentId !== N.parentId)
            return !1;
        }
    }
    return !(!N.parentId && z.parentId && z.parentId !== N.id);
  }, { ensureParentInNodesBefore: f } = rx(), p = (P, N) => {
    if (!N.isValid)
      return;
    const z = N.toNode;
    if (z.parentId)
      return;
    const j = N.fromNode, W = N.fromHandle, M = { position: { ...z.position } };
    if (W.id === "loop_handle" ? M.parentId = j.id : j.parentId && (M.parentId = j.parentId), M.parentId) {
      const Y = u(M.parentId);
      M.position = {
        x: z.position.x - Y.position.x,
        y: z.position.y - Y.position.y
      }, f(M.parentId, z.id), r.updateNode(z.id, M);
    }
    setTimeout(() => {
      et.getEdges().forEach((Y) => {
        Y.target === z.id && Y.source == j.id && (G(o, !0), G(i, Y, !0));
      });
    });
  }, { getEdgesByTarget: h } = ox(), g = (P) => {
    P.edges.forEach((N) => {
      N.id === c(i)?.id && (G(i, null), G(o, !1));
      const z = u(N.target);
      if (z && z.parentId) {
        const j = h(N.target), W = u(z.parentId);
        if (j.length === 0)
          r.updateNode(z.id, {
            parentId: void 0,
            position: {
              x: z.position.x + W.position.x,
              y: z.position.y + W.position.y
            }
          });
        else {
          let M = !1;
          for (let Y = 0; Y < j.length; Y++) {
            const Q = j[Y], re = u(Q.source);
            if (re.parentId || re.type === "loopNode") {
              M = !0;
              break;
            }
          }
          M || r.updateNode(z.id, {
            parentId: void 0,
            position: {
              x: z.position.x + W.position.x,
              y: z.position.y + W.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = mx(), w = (P, N) => {
  }, k = (P) => {
  }, C = {
    // ...nodeTypes
  }, x = tr().customNodes;
  if (x)
    for (let P of Object.keys(x))
      C[P] = Nf;
  const S = tr().onDataChange;
  ot(() => {
    S?.({
      nodes: et.getNodes(),
      edges: et.getEdges(),
      viewport: et.getViewport()
    });
  });
  var O = {
    get onInit() {
      return n();
    },
    set onInit(P) {
      n(P), v();
    }
  }, E = bx(), L = B(E), D = et.getNodes, Z = et.setNodes, q = et.getEdges, R = et.setEdges, _ = et.getViewport, $ = et.setViewport;
  {
    let P = /* @__PURE__ */ T(() => ({ ...Ub, ...C })), N = /* @__PURE__ */ T(() => ({
      markerEnd: { type: Eo.ArrowClosed, width: 20, height: 20 }
    }));
    Ld(L, {
      get nodeTypes() {
        return c(P);
      },
      get nodes() {
        return D();
      },
      set nodes(z) {
        Z(z);
      },
      get edges() {
        return q();
      },
      set edges(z) {
        R(z);
      },
      get viewport() {
        return _();
      },
      set viewport(z) {
        $(z);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: p,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (z) => {
        G(o, !0), G(i, z.edge, !0);
      },
      onbeforeconnect: (z) => ({ ...z, id: _r() }),
      ondelete: g,
      onclick: (z) => {
        const j = z.target;
        j.classList.contains("svelte-flow__edge-interaction") || j.classList.contains("panel-content") || j.closest(".panel-content") || (G(o, !1), G(i, null));
      },
      get defaultEdgeOptions() {
        return c(N);
      },
      children: (z, j) => {
        var W = wx(), M = ie(W);
        Bd(M, {});
        var Y = H(M, 2);
        Rd(Y, {});
        var Q = H(Y, 2);
        Zd(Q, {});
        var re = H(Q, 2);
        {
          var K = (X) => {
            Yo(X, {
              children: (U, se) => {
                var ae = yx(), ee = H(B(ae), 4), ye = B(ee);
                {
                  let ge = /* @__PURE__ */ T(() => c(i)?.data?.condition);
                  Ge(ye, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(ge);
                    },
                    onchange: (ve) => {
                      c(i) && s(c(i).id, { condition: ve.target?.value });
                    }
                  });
                }
                I(ee);
                var fe = H(ee, 2), ne = B(fe);
                ze(ne, {
                  onclick: () => {
                    y(c(i)?.id), G(o, !1);
                  },
                  children: (ge, ve) => {
                    be();
                    var xe = Pe("删除");
                    V(ge, xe);
                  },
                  $$slots: { default: !0 }
                });
                var oe = H(ne, 2);
                ze(oe, {
                  primary: !0,
                  onclick: () => {
                    G(o, !1);
                  },
                  children: (ge, ve) => {
                    be();
                    var xe = Pe("保存");
                    V(ge, xe);
                  },
                  $$slots: { default: !0 }
                }), I(fe), I(ae), V(U, ae);
              },
              $$slots: { default: !0 }
            });
          };
          ue(re, (X) => {
            c(o) && X(K);
          });
        }
        V(z, W);
      },
      $$slots: { default: !0 }
    });
  }
  var b = H(L, 2);
  return Pf(b, {}), I(E), V(e, E), de(O);
}
le(Tf, { onInit: {} }, [], [], !0);
function Cx(e, t) {
  ce(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  et.init(o?.nodes || [], o?.edges || []), Zr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), v();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), v();
    }
  };
  return Md(e, {
    children: (s, a) => {
      Tf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de(i);
}
customElements.define("tinyflow-component", le(Cx, { options: {}, onInit: {} }, [], [], !1));
const $x = jf((e, t) => {
  const n = Ra(null), r = Ra(null);
  Bf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Kf(() => {
    if (n.current) {
      const a = new My({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Ff.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  $x as Tinyflow
};
//# sourceMappingURL=index.js.map
