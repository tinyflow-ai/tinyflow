import iu, { forwardRef as Jf, useRef as Ba, useImperativeHandle as Uf, useEffect as Qf } from "react";
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
var Ya;
function ep() {
  if (Ya) return so;
  Ya = 1;
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
var Wa;
function tp() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = iu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, w = "@@iterator";
    function m(A) {
      if (A === null || typeof A != "object")
        return null;
      var oe = y && A[y] || A[w];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(A) {
      {
        for (var oe = arguments.length, ge = new Array(oe > 1 ? oe - 1 : 0), Se = 1; Se < oe; Se++)
          ge[Se - 1] = arguments[Se];
        $("error", A, ge);
      }
    }
    function $(A, oe, ge) {
      {
        var Se = b.ReactDebugCurrentFrame, Be = Se.getStackAddendum();
        Be !== "" && (oe += "%s", ge = ge.concat([Be]));
        var Ge = ge.map(function(He) {
          return String(He);
        });
        Ge.unshift("Warning: " + oe), Function.prototype.apply.call(console[A], console, Ge);
      }
    }
    var _ = !1, S = !1, N = !1, V = !1, Z = !1, H;
    H = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === i || Z || A === o || A === u || A === d || V || A === h || _ || S || N || typeof A == "object" && A !== null && (A.$$typeof === f || A.$$typeof === p || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === H || A.getModuleId !== void 0));
    }
    function z(A, oe, ge) {
      var Se = A.displayName;
      if (Se)
        return Se;
      var Be = oe.displayName || oe.name || "";
      return Be !== "" ? ge + "(" + Be + ")" : ge;
    }
    function k(A) {
      return A.displayName || "Context";
    }
    function O(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
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
            var oe = A;
            return k(oe) + ".Consumer";
          case s:
            var ge = A;
            return k(ge._context) + ".Provider";
          case l:
            return z(A, A.render, "ForwardRef");
          case p:
            var Se = A.displayName || null;
            return Se !== null ? Se : O(A.type) || "Memo";
          case f: {
            var Be = A, Ge = Be._payload, He = Be._init;
            try {
              return O(He(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, E = 0, T, K, W, G, L, F, Y;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function R() {
      {
        if (E === 0) {
          T = console.log, K = console.info, W = console.warn, G = console.error, L = console.group, F = console.groupCollapsed, Y = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        E++;
      }
    }
    function X() {
      {
        if (E--, E === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, A, {
              value: T
            }),
            info: C({}, A, {
              value: K
            }),
            warn: C({}, A, {
              value: W
            }),
            error: C({}, A, {
              value: G
            }),
            group: C({}, A, {
              value: L
            }),
            groupCollapsed: C({}, A, {
              value: F
            }),
            groupEnd: C({}, A, {
              value: Y
            })
          });
        }
        E < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = b.ReactCurrentDispatcher, ne;
    function re(A, oe, ge) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Be) {
            var Se = Be.stack.trim().match(/\n( *(at )?)/);
            ne = Se && Se[1] || "";
          }
        return `
` + ne + A;
      }
    }
    var ee = !1, me;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      me = new de();
    }
    function ie(A, oe) {
      if (!A || ee)
        return "";
      {
        var ge = me.get(A);
        if (ge !== void 0)
          return ge;
      }
      var Se;
      ee = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = U.current, U.current = null, R();
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
            Reflect.construct(A, [], He);
          } else {
            try {
              He.call();
            } catch (Mt) {
              Se = Mt;
            }
            A.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mt) {
            Se = Mt;
          }
          A();
        }
      } catch (Mt) {
        if (Mt && Se && typeof Mt.stack == "string") {
          for (var Le = Mt.stack.split(`
`), Ot = Se.stack.split(`
`), it = Le.length - 1, ct = Ot.length - 1; it >= 1 && ct >= 0 && Le[it] !== Ot[ct]; )
            ct--;
          for (; it >= 1 && ct >= 0; it--, ct--)
            if (Le[it] !== Ot[ct]) {
              if (it !== 1 || ct !== 1)
                do
                  if (it--, ct--, ct < 0 || Le[it] !== Ot[ct]) {
                    var Ut = `
` + Le[it].replace(" at new ", " at ");
                    return A.displayName && Ut.includes("<anonymous>") && (Ut = Ut.replace("<anonymous>", A.displayName)), typeof A == "function" && me.set(A, Ut), Ut;
                  }
                while (it >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        ee = !1, U.current = Ge, X(), Error.prepareStackTrace = Be;
      }
      var Lr = A ? A.displayName || A.name : "", mr = Lr ? re(Lr) : "";
      return typeof A == "function" && me.set(A, mr), mr;
    }
    function ae(A, oe, ge) {
      return ie(A, !1);
    }
    function ve(A) {
      var oe = A.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function ye(A, oe, ge) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ie(A, ve(A));
      if (typeof A == "string")
        return re(A);
      switch (A) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return ae(A.render);
          case p:
            return ye(A.type, oe, ge);
          case f: {
            var Se = A, Be = Se._payload, Ge = Se._init;
            try {
              return ye(Ge(Be), oe, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, le = {}, _e = b.ReactDebugCurrentFrame;
    function Me(A) {
      if (A) {
        var oe = A._owner, ge = ye(A.type, A._source, oe ? oe.type : null);
        _e.setExtraStackFrame(ge);
      } else
        _e.setExtraStackFrame(null);
    }
    function q(A, oe, ge, Se, Be) {
      {
        var Ge = Function.call.bind(we);
        for (var He in A)
          if (Ge(A, He)) {
            var Le = void 0;
            try {
              if (typeof A[He] != "function") {
                var Ot = Error((Se || "React class") + ": " + ge + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              Le = A[He](oe, He, Se, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              Le = it;
            }
            Le && !(Le instanceof Error) && (Me(Be), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", ge, He, typeof Le), Me(null)), Le instanceof Error && !(Le.message in le) && (le[Le.message] = !0, Me(Be), x("Failed %s type: %s", ge, Le.message), Me(null));
          }
      }
    }
    var Ye = Array.isArray;
    function ze(A) {
      return Ye(A);
    }
    function Ke(A) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, ge = oe && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ge;
      }
    }
    function Fe(A) {
      try {
        return tt(A), !1;
      } catch {
        return !0;
      }
    }
    function tt(A) {
      return "" + A;
    }
    function vt(A) {
      if (Fe(A))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(A)), tt(A);
    }
    var Bt = b.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, Te;
    function rt(A) {
      if (we.call(A, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Ze(A) {
      if (we.call(A, "key")) {
        var oe = Object.getOwnPropertyDescriptor(A, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function ot(A, oe) {
      typeof A.ref == "string" && Bt.current;
    }
    function Yt(A, oe) {
      {
        var ge = function() {
          fe || (fe = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ge.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function pt(A, oe) {
      {
        var ge = function() {
          Te || (Te = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ge.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var xn = function(A, oe, ge, Se, Be, Ge, He) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: oe,
        ref: ge,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ge
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
        value: Se
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function mt(A, oe, ge, Se, Be) {
      {
        var Ge, He = {}, Le = null, Ot = null;
        ge !== void 0 && (vt(ge), Le = "" + ge), Ze(oe) && (vt(oe.key), Le = "" + oe.key), rt(oe) && (Ot = oe.ref, ot(oe, Be));
        for (Ge in oe)
          we.call(oe, Ge) && !lt.hasOwnProperty(Ge) && (He[Ge] = oe[Ge]);
        if (A && A.defaultProps) {
          var it = A.defaultProps;
          for (Ge in it)
            He[Ge] === void 0 && (He[Ge] = it[Ge]);
        }
        if (Le || Ot) {
          var ct = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Le && Yt(He, ct), Ot && pt(He, ct);
        }
        return xn(A, Le, Ot, Be, Se, Bt.current, He);
      }
    }
    var ut = b.ReactCurrentOwner, Nt = b.ReactDebugCurrentFrame;
    function Dn(A) {
      if (A) {
        var oe = A._owner, ge = ye(A.type, A._source, oe ? oe.type : null);
        Nt.setExtraStackFrame(ge);
      } else
        Nt.setExtraStackFrame(null);
    }
    var io;
    io = !1;
    function ln(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ha() {
      {
        if (ut.current) {
          var A = O(ut.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function jf(A) {
      return "";
    }
    var Ia = {};
    function Zf(A) {
      {
        var oe = Ha();
        if (!oe) {
          var ge = typeof A == "string" ? A : A.displayName || A.name;
          ge && (oe = `

Check the top-level render call using <` + ge + ">.");
        }
        return oe;
      }
    }
    function Ra(A, oe) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var ge = Zf(oe);
        if (Ia[ge])
          return;
        Ia[ge] = !0;
        var Se = "";
        A && A._owner && A._owner !== ut.current && (Se = " It was passed a child from " + O(A._owner.type) + "."), Dn(A), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Se), Dn(null);
      }
    }
    function ja(A, oe) {
      {
        if (typeof A != "object")
          return;
        if (ze(A))
          for (var ge = 0; ge < A.length; ge++) {
            var Se = A[ge];
            ln(Se) && Ra(Se, oe);
          }
        else if (ln(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Be = m(A);
          if (typeof Be == "function" && Be !== A.entries)
            for (var Ge = Be.call(A), He; !(He = Ge.next()).done; )
              ln(He.value) && Ra(He.value, oe);
        }
      }
    }
    function Kf(A) {
      {
        var oe = A.type;
        if (oe == null || typeof oe == "string")
          return;
        var ge;
        if (typeof oe == "function")
          ge = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === p))
          ge = oe.propTypes;
        else
          return;
        if (ge) {
          var Se = O(oe);
          q(ge, A.props, "prop", Se, A);
        } else if (oe.PropTypes !== void 0 && !io) {
          io = !0;
          var Be = O(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bf(A) {
      {
        for (var oe = Object.keys(A.props), ge = 0; ge < oe.length; ge++) {
          var Se = oe[ge];
          if (Se !== "children" && Se !== "key") {
            Dn(A), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Dn(null);
            break;
          }
        }
        A.ref !== null && (Dn(A), x("Invalid attribute `ref` supplied to `React.Fragment`."), Dn(null));
      }
    }
    var Za = {};
    function Ka(A, oe, ge, Se, Be, Ge) {
      {
        var He = I(A);
        if (!He) {
          var Le = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = jf();
          Ot ? Le += Ot : Le += Ha();
          var it;
          A === null ? it = "null" : ze(A) ? it = "array" : A !== void 0 && A.$$typeof === t ? (it = "<" + (O(A.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : it = typeof A, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", it, Le);
        }
        var ct = mt(A, oe, ge, Be, Ge);
        if (ct == null)
          return ct;
        if (He) {
          var Ut = oe.children;
          if (Ut !== void 0)
            if (Se)
              if (ze(Ut)) {
                for (var Lr = 0; Lr < Ut.length; Lr++)
                  ja(Ut[Lr], A);
                Object.freeze && Object.freeze(Ut);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ja(Ut, A);
        }
        if (we.call(oe, "key")) {
          var mr = O(A), Mt = Object.keys(oe).filter(function(Gf) {
            return Gf !== "key";
          }), ls = Mt.length > 0 ? "{key: someKey, " + Mt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Za[mr + ls]) {
            var Xf = Mt.length > 0 ? "{" + Mt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ls, mr, Xf, mr), Za[mr + ls] = !0;
          }
        }
        return A === r ? Bf(ct) : Kf(ct), ct;
      }
    }
    function Yf(A, oe, ge) {
      return Ka(A, oe, ge, !0);
    }
    function Wf(A, oe, ge) {
      return Ka(A, oe, ge, !1);
    }
    var Ff = Wf, qf = Yf;
    ao.Fragment = r, ao.jsx = Ff, ao.jsxs = qf;
  }()), ao;
}
var Fa;
function np() {
  return Fa || (Fa = 1, process.env.NODE_ENV === "production" ? Qo.exports = ep() : Qo.exports = tp()), Qo.exports;
}
var rp = np();
const op = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(op);
const su = 1, au = 2, lu = 4, ip = 8, sp = 16, ap = 1, lp = 2, uu = 4, up = 8, cp = 16, cu = 1, dp = 2, du = "[", Hi = "[!", Us = "]", $r = {}, bt = Symbol(), fp = "http://www.w3.org/1999/xhtml", pp = "http://www.w3.org/2000/svg", hp = "@attach", gp = !1;
var Ii = Array.isArray, vp = Array.prototype.indexOf, Qs = Array.from, vi = Object.keys, mi = Object.defineProperty, In = Object.getOwnPropertyDescriptor, fu = Object.getOwnPropertyDescriptors, pu = Object.prototype, mp = Array.prototype, Ri = Object.getPrototypeOf, qa = Object.isExtensible;
function lo(e) {
  return typeof e == "function";
}
const Pt = () => {
};
function yp(e) {
  return e();
}
function ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hu() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Dt(e, t, n = !1) {
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
const Ct = 2, ea = 4, ji = 8, gu = 1 << 24, Wn = 16, Fn = 32, fr = 64, Zi = 128, hn = 512, St = 1024, Rt = 2048, qn = 4096, Xt = 8192, Rn = 16384, Ki = 32768, Zn = 65536, Xa = 1 << 17, vu = 1 << 18, Nr = 1 << 19, mu = 1 << 20, wo = 32768, Ss = 1 << 21, ta = 1 << 22, rr = 1 << 23, Sn = Symbol("$state"), na = Symbol("legacy props"), wp = Symbol(""), Ar = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), bp = 1, Bi = 3, Or = 8;
function ra(e) {
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
function Tp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Np() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Op() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Mo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Dp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Lp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function qt(e) {
  $e = e;
}
let De;
function ft(e) {
  if (e === null)
    throw Mo(), $r;
  return De = e;
}
function Kn() {
  return ft(
    /** @type {TemplateNode} */
    /* @__PURE__ */ mn(De)
  );
}
function j(e) {
  if ($e) {
    if (/* @__PURE__ */ mn(De) !== null)
      throw Mo(), $r;
    De = e;
  }
}
function xe(e = 1) {
  if ($e) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n);
    De = n;
  }
}
function yi(e = !0) {
  for (var t = 0, n = De; ; ) {
    if (n.nodeType === Or) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Us) {
        if (t === 0) return n;
        t -= 1;
      } else (r === du || r === Hi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n)
    );
    e && n.remove(), n = o;
  }
}
function yu(e) {
  if (!e || e.nodeType !== Or)
    throw Mo(), $r;
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
let to = !1, Vp = !1;
function Mp() {
  to = !0;
}
const Ap = [];
function _u(e, t = !1, n = !1) {
  return li(e, /* @__PURE__ */ new Map(), "", Ap, null, n);
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
let Qe = null;
function Kr(e) {
  Qe = e;
}
function ar(e) {
  return (
    /** @type {T} */
    Cu().get(e)
  );
}
function Br(e, t) {
  return Cu().set(e, t), t;
}
function pe(e, t = !1, n) {
  Qe = {
    p: Qe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: to && !t ? { s: null, u: null, $: [] } : null
  };
}
function he(e) {
  var t = (
    /** @type {ComponentContext} */
    Qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ju(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Qe = t.p, e ?? /** @type {T} */
  {};
}
function Ao() {
  return !to || Qe !== null && Qe.l === null;
}
function Cu(e) {
  return Qe === null && ra(), Qe.c ??= new Map(zp(Qe) || void 0);
}
function zp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let yr = [];
function $u() {
  var e = yr;
  yr = [], ks(e);
}
function pr(e) {
  if (yr.length === 0 && !vo) {
    var t = yr;
    queueMicrotask(() => {
      t === yr && $u();
    });
  }
  yr.push(e);
}
function Hp() {
  for (; yr.length > 0; )
    $u();
}
function ku(e) {
  var t = Ve;
  if (t === null)
    return je.f |= rr, e;
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
let et = null, tn = null, en = [], Yi = null, Es = !1, vo = !1;
class fn {
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
    en = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (et = null, Ga(n.render_effects), Ga(n.effects), this.#l?.resolve()), tn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, n) {
    t.f ^= St;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Fn | fr)) !== 0, s = i && (o & St) !== 0, a = s || (o & Xt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Zi) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= St : (o & ea) !== 0 ? n.effects.push(r) : Io(r) && ((r.f & Wn) !== 0 && n.block_effects.push(r), _o(r));
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
      ((n.f & Rt) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), Et(n, St);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Ct) === 0 || (n.f & wo) === 0 || (n.f ^= wo, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & rr) === 0 && (this.current.set(t, t.v), tn?.set(t, t.v));
  }
  activate() {
    et = this, this.apply();
  }
  deactivate() {
    et === this && (et = null, tn = null);
  }
  flush() {
    if (this.activate(), en.length > 0) {
      if (Su(), et !== null && et !== this)
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
      var t = tn, n = !0, r = {
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
          var o = en;
          en = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Eu(d, a, l, u);
          if (en.length > 0) {
            et = i, i.apply();
            for (const d of en)
              i.#i(d, r);
            i.deactivate();
          }
          en = o;
        }
      }
      et = null, tn = t;
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
      Et(t, Rt), kr(t);
    for (const t of this.#o)
      Et(t, qn), kr(t);
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
    if (et === null) {
      const t = et = new fn();
      ei.add(et), vo || fn.enqueue(() => {
        et === t && t.flush();
      });
    }
    return et;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    pr(t);
  }
  apply() {
  }
}
function g(e) {
  var t = vo;
  vo = !0;
  try {
    for (var n; ; ) {
      if (Hp(), en.length === 0 && (et?.flush(), en.length === 0))
        return Yi = null, /** @type {T} */
        n;
      Su();
    }
  } finally {
    vo = t;
  }
}
function Su() {
  var e = ir;
  Es = !0;
  try {
    var t = 0;
    for (bi(!0); en.length > 0; ) {
      var n = fn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Ip();
      }
      n.process(en), or.clear();
    }
  } finally {
    Es = !1, bi(e), Yi = null;
  }
}
function Ip() {
  try {
    kp();
  } catch (e) {
    Yr(e, Yi);
  }
}
let Vn = null;
function Ga(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Rn | Xt)) === 0 && Io(r) && (Vn = /* @__PURE__ */ new Set(), _o(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Fu(r) : r.fn = null), Vn?.size > 0)) {
        or.clear();
        for (const o of Vn) {
          if ((o.f & (Rn | Xt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Vn.has(s) && (Vn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Rn | Xt)) === 0 && _o(l);
          }
        }
        Vn.clear();
      }
    }
    Vn = null;
  }
}
function Eu(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ct) !== 0 ? Eu(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ta | Wn)) !== 0 && (i & Rt) === 0 && Pu(o, t, r) && (Et(o, Rt), kr(
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
      if ((o.f & Ct) !== 0 && Pu(
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
    if (Es && t === Ve && (n & Wn) !== 0 && (n & vu) === 0)
      return;
    if ((n & (fr | Fn)) !== 0) {
      if ((n & St) === 0) return;
      t.f ^= St;
    }
  }
  en.push(t);
}
function Tu(e) {
  let t = 0, n = lr(0), r;
  return () => {
    bo() && (c(n), Ho(() => (t === 0 && (r = xt(() => e(() => mo(n)))), t += 1, () => {
      pr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, mo(n));
      });
    })));
  };
}
var Rp = Zn | Nr | Zi;
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
  #n = $e ? De : null;
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
  #w = Tu(() => (this.#p = lr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Ve.b, this.#e = !!this.#r.pending, this.#a = ro(() => {
      if (Ve.b = this, $e) {
        const i = this.#n;
        Kn(), /** @type {Comment} */
        i.nodeType === Or && /** @type {Comment} */
        i.data === Hi ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#o = Ft(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Rp), $e && (this.#t = De);
  }
  #b() {
    try {
      this.#o = Ft(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#i = Ft(() => t(this.#t)), fn.enqueue(() => {
      var n = this.#m();
      this.#o = this.#g(() => (fn.ensure(), Ft(() => this.#l(n)))), this.#f > 0 ? this.#v() : (Hr(
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
    return this.#e && (this.#c = jt(), this.#t.before(this.#c), t = this.#c), t;
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
    var n = Ve, r = je, o = Qe;
    on(this.#a), zt(this.#a), Kr(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return ku(i), null;
    } finally {
      on(n), zt(r), Kr(o);
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
    ), Gu(this.#o, this.#u)), this.#i === null && (this.#i = Ft(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && Hr(this.#i, () => {
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
    this.#o && (yt(this.#o), this.#o = null), this.#i && (yt(this.#i), this.#i = null), this.#s && (yt(this.#s), this.#s = null), $e && (ft(
      /** @type {TemplateNode} */
      this.#n
    ), xe(), ft(yi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Lp();
        return;
      }
      o = !0, i && Op(), fn.ensure(), this.#d = 0, this.#s !== null && Hr(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, Ft(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = je;
    try {
      zt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Yr(l, this.#a && this.#a.parent);
    } finally {
      zt(a);
    }
    r && pr(() => {
      this.#s = this.#g(() => {
        fn.ensure(), this.#h = !0;
        try {
          return Ft(() => {
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
    ua(t[i].e, r, !0);
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
      sa(l), l.append(a), e.items.clear(), un(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), un(e, d.prev, d.next)), yt(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function Tt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & lu) !== 0, d = (t & su) !== 0, p = (t & au) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    s = $e ? ft(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ht(f)
    ) : f.appendChild(jt());
  }
  $e && Kn();
  var h = null, y = /* @__PURE__ */ oa(() => {
    var _ = n();
    return Ii(_) ? _ : _ == null ? [] : Qs(_);
  }), w, m = !0;
  function b() {
    Bp($, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : ca(h.effect), x.first = h.effect) : Hr(h.effect, () => {
      h = null;
    }));
  }
  var x = ro(() => {
    w = /** @type {V[]} */
    c(y);
    var _ = w.length;
    let S = !1;
    if ($e) {
      var N = yu(s) === Hi;
      N !== (_ === 0) && (s = yi(), ft(s), qt(!1), S = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      et
    ), H = null, I = Iu(), z = 0; z < _; z += 1) {
      $e && De.nodeType === Or && /** @type {Comment} */
      De.data === Us && (s = /** @type {Comment} */
      De, S = !0, qt(!1));
      var k = w[z], O = r(k, z), C = m ? null : a.get(O);
      C ? (d && Fr(C.v, k), p ? Fr(
        /** @type {Value<number>} */
        C.i,
        z
      ) : C.i = z, I && Z.skipped_effects.delete(C.e)) : (C = Yp(
        m ? s : null,
        H,
        k,
        O,
        z,
        o,
        t,
        n
      ), m && (C.o = !0, H === null ? l = C : H.next = C, H = C), a.set(O, C)), V.add(O);
    }
    if (_ === 0 && i && !h)
      if (m)
        h = {
          fragment: null,
          effect: Ft(() => i(s))
        };
      else {
        var E = document.createDocumentFragment(), T = jt();
        E.append(T), h = {
          fragment: E,
          effect: Ft(() => i(T))
        };
      }
    if ($e && _ > 0 && ft(yi()), !m)
      if (I) {
        for (const [K, W] of a)
          V.has(K) || Z.skipped_effects.add(W.e);
        Z.oncommit(b), Z.ondiscard(() => {
        });
      } else
        b();
    S && qt(!0), c(y);
  }), $ = { effect: x, items: a, first: l };
  m = !1, $e && (s = De);
}
function Bp(e, t, n, r, o) {
  var i = (r & ip) !== 0, s = t.length, a = e.items, l = e.first, u, d = null, p, f = [], h = [], y, w, m, b;
  if (i)
    for (b = 0; b < s; b += 1)
      y = t[b], w = o(y, b), m = /** @type {EachItem} */
      a.get(w), m.o && (m.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(m));
  for (b = 0; b < s; b += 1) {
    if (y = t[b], w = o(y, b), m = /** @type {EachItem} */
    a.get(w), e.first ??= m, !m.o) {
      m.o = !0;
      var x = d ? d.next : l;
      un(e, d, m), un(e, m, x), us(m, x, n), d = m, f = [], h = [], l = d.next;
      continue;
    }
    if ((m.e.f & Xt) !== 0 && (ca(m.e), i && (m.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < h.length) {
          var $ = h[0], _;
          d = $.prev;
          var S = f[0], N = f[f.length - 1];
          for (_ = 0; _ < f.length; _ += 1)
            us(f[_], $, n);
          for (_ = 0; _ < h.length; _ += 1)
            u.delete(h[_]);
          un(e, S.prev, N.next), un(e, d, S), un(e, N, $), l = $, d = N, b -= 1, f = [], h = [];
        } else
          u.delete(m), us(m, l, n), un(e, m.prev, m.next), un(e, m, d === null ? e.first : d.next), un(e, d, m), d = m;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Xt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    f.push(m), d = m, l = m.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var Z = u === void 0 ? [] : Qs(u); l !== null; )
      (l.e.f & Xt) === 0 && Z.push(l), l = l.next;
    var H = Z.length;
    if (V = a.size - H > s, H > 0) {
      var I = (r & lu) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          Z[b].a?.measure();
        for (b = 0; b < H; b += 1)
          Z[b].a?.fix();
      }
      Kp(e, Z, I);
    }
  }
  if (V)
    for (const z of a.values())
      z.o || (un(e, d, z), d = z);
  e.effect.last = d && d.e, i && pr(() => {
    if (p !== void 0)
      for (m of p)
        m.a?.apply();
  });
}
function Yp(e, t, n, r, o, i, s, a) {
  var l = (s & su) !== 0, u = (s & sp) === 0, d = l ? u ? /* @__PURE__ */ Vu(n, !1, !1) : lr(n) : n, p = (s & au) === 0 ? o : lr(o), f = {
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
      h.append(e = jt());
    }
    return f.e = Ft(() => i(
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
      /* @__PURE__ */ mn(i)
    );
    o.before(i), i = s;
  }
}
function un(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Nu(e, t, n, r) {
  const o = Ao() ? zo : oa;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = et, s = (
    /** @type {Effect} */
    Ve
  ), a = Wp();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Fp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & Rn) === 0 && Yr(d, s);
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
  var e = Ve, t = je, n = Qe, r = et;
  return function(o = !0) {
    on(e), zt(t), Kr(n), o && r?.activate();
  };
}
function wi() {
  on(null), zt(null), Kr(null);
}
// @__NO_SIDE_EFFECTS__
function zo(e) {
  var t = Ct | Rt, n = je !== null && (je.f & Ct) !== 0 ? (
    /** @type {Derived} */
    je
  ) : null;
  return Ve !== null && (Ve.f |= Nr), {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: wu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      bt
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && xp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = lr(
    /** @type {V} */
    bt
  ), s = !je, a = /* @__PURE__ */ new Map();
  return nh(() => {
    var l = hu();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === et && u.committed && u.deactivate(), wi();
      });
    } catch (f) {
      l.reject(f), wi();
    }
    var u = (
      /** @type {Batch} */
      et
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Ar), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== Ar && (i.f |= rr, Fr(i, h));
      else {
        (i.f & rr) !== 0 && (i.f ^= rr), Fr(i, f);
        for (const [y, w] of a) {
          if (a.delete(y), y === u) break;
          w.reject(Ar);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Wi(() => {
    for (const l of a.values())
      l.reject(Ar);
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
  const t = /* @__PURE__ */ zo(e);
  return Ju(t), t;
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  const t = /* @__PURE__ */ zo(e);
  return t.equals = xu, t;
}
function Ou(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      yt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ct) === 0)
      return (t.f & Rn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ia(e) {
  var t, n = Ve;
  on(qp(e));
  try {
    e.f &= ~wo, Ou(e), t = tc(e);
  } finally {
    on(n);
  }
  return t;
}
function Du(e) {
  var t = ia(e);
  if (e.equals(t) || (et?.is_fork || (e.v = t), e.wv = Qu()), !Dr)
    if (tn !== null)
      (bo() || et?.is_fork) && tn.set(e, t);
    else {
      var n = (e.f & hn) === 0 ? qn : St;
      Et(e, n);
    }
}
let Ps = /* @__PURE__ */ new Set();
const or = /* @__PURE__ */ new Map();
let Lu = !1;
function lr(e, t) {
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
  const n = lr(e);
  return Ju(n), n;
}
// @__NO_SIDE_EFFECTS__
function Vu(e, t = !1, n = !0) {
  const r = lr(e);
  return t || (r.equals = xu), to && n && Qe !== null && Qe.l !== null && (Qe.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  je !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!kn || (je.f & Xa) !== 0) && Ao() && (je.f & (Ct | Wn | ta | Xa)) !== 0 && !jn?.includes(e) && Np();
  let r = n ? rn(t) : t;
  return Fr(e, r);
}
function Fr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Dr ? or.set(e, t) : or.set(e, n), e.v = t;
    var r = fn.ensure();
    r.capture(e, n), (e.f & Ct) !== 0 && ((e.f & Rt) !== 0 && ia(
      /** @type {Derived} */
      e
    ), Et(e, (e.f & hn) !== 0 ? St : qn)), e.wv = Qu(), Mu(e, Rt), Ao() && Ve !== null && (Ve.f & St) !== 0 && (Ve.f & (Fn | fr)) === 0 && (Qt === null ? oh([e]) : Qt.push(e)), !r.is_fork && Ps.size > 0 && !Lu && Xp();
  }
  return t;
}
function Xp() {
  Lu = !1;
  var e = ir;
  bi(!0);
  const t = Array.from(Ps);
  try {
    for (const n of t)
      (n.f & St) !== 0 && Et(n, qn), Io(n) && _o(n);
  } finally {
    bi(e);
  }
  Ps.clear();
}
function Ja(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function mo(e) {
  Q(e, e.v + 1);
}
function Mu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ao(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ve)) {
        var l = (a & Rt) === 0;
        if (l && Et(s, t), (a & Ct) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          tn?.delete(u), (a & wo) === 0 && (a & hn && (s.f |= wo), Mu(u, qn));
        } else l && ((a & Wn) !== 0 && Vn !== null && Vn.add(
          /** @type {Effect} */
          s
        ), kr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function rn(e) {
  if (typeof e != "object" || e === null || Sn in e)
    return e;
  const t = Ri(e);
  if (t !== pu && t !== mp)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ii(e), o = /* @__PURE__ */ Oe(0), i = xr, s = (a) => {
    if (xr === i)
      return a();
    var l = je, u = xr;
    zt(null), tl(i);
    var d = a();
    return zt(l), tl(u), d;
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
            const d = s(() => /* @__PURE__ */ Oe(bt));
            n.set(l, d), mo(o);
          }
        } else
          Q(u, bt), mo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Sn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || In(a, l)?.writable) && (d = s(() => {
          var h = rn(p ? a[l] : bt), y = /* @__PURE__ */ Oe(h);
          return y;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === bt ? void 0 : f;
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
          if (p !== void 0 && f !== bt)
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
        if (l === Sn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== bt || Reflect.has(a, l);
        if (u !== void 0 || Ve !== null && (!d || In(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? rn(a[l]) : bt, h = /* @__PURE__ */ Oe(f);
            return h;
          }), n.set(l, u));
          var p = c(u);
          if (p === bt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var y = n.get(h + "");
            y !== void 0 ? Q(y, bt) : h in a && (y = s(() => /* @__PURE__ */ Oe(bt)), n.set(h + "", y));
          }
        if (p === void 0)
          (!f || In(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Oe(void 0)), Q(p, rn(u)), n.set(l, p));
        else {
          f = p.v !== bt;
          var w = s(() => rn(u));
          Q(p, w);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(d, u), !f) {
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
          return f === void 0 || f.v !== bt;
        });
        for (var [u, d] of n)
          d.v !== bt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Tp();
      }
    }
  );
}
function Ua(e) {
  try {
    if (e !== null && typeof e == "object" && Sn in e)
      return e[Sn];
  } catch {
  }
  return e;
}
function Gp(e, t) {
  return Object.is(Ua(e), Ua(t));
}
var At, Au, zu, Hu;
function Ts() {
  if (At === void 0) {
    At = window, Au = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    zu = In(t, "firstChild").get, Hu = In(t, "nextSibling").get, qa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qa(n) && (n.__t = void 0);
  }
}
function jt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return zu.call(e);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return Hu.call(e);
}
function B(e, t) {
  if (!$e)
    return /* @__PURE__ */ ht(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ht(De)
  );
  if (n === null)
    n = De.appendChild(jt());
  else if (t && n.nodeType !== Bi) {
    var r = jt();
    return n?.before(r), ft(r), r;
  }
  return ft(n), n;
}
function se(e, t = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ht(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ mn(n) : n;
  }
  if (t && De?.nodeType !== Bi) {
    var r = jt();
    return De?.before(r), ft(r), r;
  }
  return De;
}
function M(e, t = 1, n = !1) {
  let r = $e ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ mn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Bi) {
    var i = jt();
    return r === null ? o?.after(i) : r.before(i), ft(i), i;
  }
  return ft(r), /** @type {TemplateNode} */
  r;
}
function sa(e) {
  e.textContent = "";
}
function Iu() {
  return !1;
}
function Jp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, pr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Up(e) {
  $e && /* @__PURE__ */ ht(e) !== null && sa(e);
}
let Qa = !1;
function Qp() {
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
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function aa(e) {
  var t = je, n = Ve;
  zt(null), on(null);
  try {
    return e();
  } finally {
    zt(t), on(n);
  }
}
function Ru(e) {
  Ve === null && (je === null && $p(), Cp()), Dr && _p();
}
function eh(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function sn(e, t, n) {
  var r = Ve;
  r !== null && (r.f & Xt) !== 0 && (e |= Xt);
  var o = {
    ctx: Qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Rt | hn,
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
      throw yt(o), a;
    }
  else t !== null && kr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Nr) === 0 && (i = i.first, (e & Wn) !== 0 && (e & Zn) !== 0 && i !== null && (i.f |= Zn)), i !== null && (i.parent = r, r !== null && eh(i, r), je !== null && (je.f & Ct) !== 0 && (e & fr) === 0)) {
    var s = (
      /** @type {Derived} */
      je
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function bo() {
  return je !== null && !kn;
}
function Wi(e) {
  const t = sn(ji, null, !1);
  return Et(t, St), t.teardown = e, t;
}
function nt(e) {
  Ru();
  var t = (
    /** @type {Effect} */
    Ve.f
  ), n = !je && (t & Fn) !== 0 && (t & Ki) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Qe
    );
    (r.e ??= []).push(e);
  } else
    return ju(e);
}
function ju(e) {
  return sn(ea | mu, e, !1);
}
function Zu(e) {
  return Ru(), sn(ji | mu, e, !0);
}
function la(e) {
  fn.ensure();
  const t = sn(fr | Nr, e, !0);
  return () => {
    yt(t);
  };
}
function th(e) {
  fn.ensure();
  const t = sn(fr | Nr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      yt(t), r(void 0);
    }) : (yt(t), r(void 0));
  });
}
function no(e) {
  return sn(ea, e, !1);
}
function nh(e) {
  return sn(ta | Nr, e, !0);
}
function Ho(e, t = 0) {
  return sn(ji | t, e, !0);
}
function Ee(e, t = [], n = [], r = []) {
  Nu(r, t, n, (o) => {
    sn(ji, () => e(...o.map(c)), !0);
  });
}
function ro(e, t = 0) {
  var n = sn(Wn | t, e, !0);
  return n;
}
function Ku(e, t = 0) {
  var n = sn(gu | t, e, !0);
  return n;
}
function Ft(e) {
  return sn(Fn | Nr, e, !0);
}
function Bu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Dr, r = je;
    el(!0), zt(null);
    try {
      t.call(null);
    } finally {
      el(n), zt(r);
    }
  }
}
function Yu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && aa(() => {
      o.abort(Ar);
    });
    var r = n.next;
    (n.f & fr) !== 0 ? n.parent = null : yt(n, t), n = r;
  }
}
function rh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Fn) === 0 && yt(t), t = n;
  }
}
function yt(e, t = !0) {
  var n = !1;
  (t || (e.f & vu) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Wu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Yu(e, t && !n), xi(e, 0), Et(e, Rn);
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
      /* @__PURE__ */ mn(e)
    );
    e.remove(), e = n;
  }
}
function Fu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hr(e, t, n = !0) {
  var r = [];
  ua(e, r, !0), qu(r, () => {
    n && yt(e), t && t();
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
function ua(e, t, n) {
  if ((e.f & Xt) === 0) {
    if (e.f ^= Xt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Zn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Fn) !== 0 && (e.f & Wn) !== 0;
      ua(r, t, i ? n : !1), r = o;
    }
  }
}
function ca(e) {
  Xu(e, !0);
}
function Xu(e, t) {
  if ((e.f & Xt) !== 0) {
    e.f ^= Xt, (e.f & St) === 0 && (Et(e, Rt), kr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zn) !== 0 || (n.f & Fn) !== 0;
      Xu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Gu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n)
    );
    t.append(n), n = o;
  }
}
let ir = !1;
function bi(e) {
  ir = e;
}
let Dr = !1;
function el(e) {
  Dr = e;
}
let je = null, kn = !1;
function zt(e) {
  je = e;
}
let Ve = null;
function on(e) {
  Ve = e;
}
let jn = null;
function Ju(e) {
  je !== null && (jn === null ? jn = [e] : jn.push(e));
}
let Lt = null, Wt = 0, Qt = null;
function oh(e) {
  Qt = e;
}
let Uu = 1, xo = 0, xr = xo;
function tl(e) {
  xr = e;
}
function Qu() {
  return ++Uu;
}
function Io(e) {
  var t = e.f;
  if ((t & Rt) !== 0)
    return !0;
  if (t & Ct && (e.f &= -32769), (t & qn) !== 0) {
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
    (t & hn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    tn === null && Et(e, St);
  }
  return !1;
}
function ec(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !jn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ct) !== 0 ? ec(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Et(i, Rt) : (i.f & St) !== 0 && Et(i, qn), kr(
        /** @type {Effect} */
        i
      ));
    }
}
function tc(e) {
  var t = Lt, n = Wt, r = Qt, o = je, i = jn, s = Qe, a = kn, l = xr, u = e.f;
  Lt = /** @type {null | Value[]} */
  null, Wt = 0, Qt = null, je = (u & (Fn | fr)) === 0 ? e : null, jn = null, Kr(e.ctx), kn = !1, xr = ++xo, e.ac !== null && (aa(() => {
    e.ac.abort(Ar);
  }), e.ac = null);
  try {
    e.f |= Ss;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (Lt !== null) {
      var h;
      if (xi(e, Wt), f !== null && Wt > 0)
        for (f.length = Wt + Lt.length, h = 0; h < Lt.length; h++)
          f[Wt + h] = Lt[h];
      else
        e.deps = f = Lt;
      if (ir && bo() && (e.f & hn) !== 0)
        for (h = Wt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Wt < f.length && (xi(e, Wt), f.length = Wt);
    if (Ao() && Qt !== null && !kn && f !== null && (e.f & (Ct | qn | Rt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Qt.length; h++)
        ec(
          Qt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, Qt !== null && (r === null ? r = Qt : r.push(.../** @type {Source[]} */
    Qt))), (e.f & rr) !== 0 && (e.f ^= rr), p;
  } catch (y) {
    return ku(y);
  } finally {
    e.f ^= Ss, Lt = t, Wt = n, Qt = r, je = o, jn = i, Kr(s), kn = a, xr = l;
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
  n === null && (t.f & Ct) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(t)) && (Et(t, qn), (t.f & hn) !== 0 && (t.f ^= hn, t.f &= -32769), Ou(
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
  if ((t & Rn) === 0) {
    Et(e, St);
    var n = Ve, r = ir;
    Ve = e, ir = !0;
    try {
      (t & (Wn | gu)) !== 0 ? rh(e) : Yu(e), Bu(e);
      var o = tc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Uu;
      var i;
      gp && Vp && (e.f & Rt) !== 0 && e.deps;
    } finally {
      ir = r, Ve = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Ct) !== 0;
  if (je !== null && !kn) {
    var r = Ve !== null && (Ve.f & Rn) !== 0;
    if (!r && !jn?.includes(e)) {
      var o = je.deps;
      if ((je.f & Ss) !== 0)
        e.rv < xo && (e.rv = xo, Lt === null && o !== null && o[Wt] === e ? Wt++ : Lt === null ? Lt = [e] : Lt.includes(e) || Lt.push(e));
      else {
        (je.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [je] : i.includes(je) || i.push(je);
      }
    }
  }
  if (Dr) {
    if (or.has(e))
      return or.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & St) === 0 && s.reactions !== null || rc(s)) && (a = ia(s)), or.set(s, a), a;
    }
  } else n && (!tn?.has(e) || et?.is_fork && !bo()) && (s = /** @type {Derived} */
  e, Io(s) && Du(s), ir && bo() && (s.f & hn) === 0 && nc(s));
  if (tn?.has(e))
    return tn.get(e);
  if ((e.f & rr) !== 0)
    throw e.v;
  return e.v;
}
function nc(e) {
  if (e.deps !== null) {
    e.f ^= hn;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ct) !== 0 && (t.f & hn) === 0 && nc(
        /** @type {Derived} */
        t
      );
  }
}
function rc(e) {
  if (e.v === bt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (or.has(t) || (t.f & Ct) !== 0 && rc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function xt(e) {
  var t = kn;
  try {
    return kn = !0, e();
  } finally {
    kn = t;
  }
}
const sh = -7169;
function Et(e, t) {
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
function da(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Sn in e)
      Ns(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Sn in n && Ns(n);
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
function fa(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || fo.call(t, i), !i.cancelBubble)
      return aa(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ds(e, t, n, r = {}) {
  var o = fa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function _i(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = fa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Wi(() => {
    t.removeEventListener(e, s, i);
  });
}
function hr(e) {
  for (var t = 0; t < e.length; t++)
    oc.add(e[t]);
  for (var n of Os)
    n(e);
}
let nl = null;
function fo(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  nl = e;
  var s = 0, a = nl === e && e.__root;
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
    var d = je, p = Ve;
    zt(null), on(null);
    try {
      for (var f, h = []; i !== null; ) {
        var y = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (m) {
          f ? h.push(m) : f = m;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        i = y;
      }
      if (f) {
        for (let m of h)
          queueMicrotask(() => {
            throw m;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, zt(d), on(p);
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
    Ve
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & cu) !== 0, r = (t & dp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return It(De, null), De;
    o === void 0 && (o = pa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ht(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Au ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(s)
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
function lh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & cu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return It(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        pa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ht(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ht(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ ht(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ht(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      It(d, p);
    } else
      It(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  return /* @__PURE__ */ lh(e, t, "svg");
}
function Pe(e = "") {
  if (!$e) {
    var t = jt(e + "");
    return It(t, t), t;
  }
  var n = De;
  return n.nodeType !== Bi && (n.before(n = jt()), ft(n)), It(n, n), n;
}
function Ne() {
  if ($e)
    return It(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = jt();
  return e.append(t, n), It(t, n), e;
}
function D(e, t) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      Ve
    );
    ((n.f & Ki) === 0 || n.nodes_end === null) && (n.nodes_end = De), Kn();
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
  Ts(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ht(n)
    ); i && (i.nodeType !== Or || /** @type {Comment} */
    i.data !== du); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ mn(i);
    if (!i)
      throw $r;
    qt(!0), ft(
      /** @type {Comment} */
      i
    );
    const s = sc(e, { ...t, anchor: i });
    return qt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== $r && console.warn("Failed to hydrate: ", s), t.recover === !1 && Sp(), Ts(), sa(n), qt(!1), ic(e, t);
  } finally {
    qt(r), ft(o);
  }
}
const Vr = /* @__PURE__ */ new Map();
function sc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ts();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var h = p[f];
      if (!a.has(h)) {
        a.add(h);
        var y = gh(h);
        t.addEventListener(h, fo, { passive: y });
        var w = Vr.get(h);
        w === void 0 ? (document.addEventListener(h, fo, { passive: y }), Vr.set(h, 1)) : Vr.set(h, w + 1);
      }
    }
  };
  l(Qs(oc)), Os.add(l);
  var u = void 0, d = th(() => {
    var p = n ?? t.appendChild(jt());
    return jp(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          pe({});
          var h = (
            /** @type {ComponentContext} */
            Qe
          );
          h.c = i;
        }
        if (o && (r.$$events = o), $e && It(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, $e && (Ve.nodes_end = De, De === null || De.nodeType !== Or || /** @type {Comment} */
        De.data !== Us))
          throw Mo(), $r;
        i && he();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, fo);
        var h = (
          /** @type {number} */
          Vr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, fo), Vr.delete(f)) : Vr.set(f, h);
      }
      Os.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Ls.set(u, d), u;
}
let Ls = /* @__PURE__ */ new WeakMap();
function wh(e, t) {
  const n = Ls.get(e);
  return n ? (Ls.delete(e), n(t)) : Promise.resolve();
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
      et
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        ca(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (yt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Gu(s, l), l.append(jt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            yt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Hr(s, a, !1)) : a();
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
      n.includes(r) || (yt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      et
    ), o = Iu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      Ft(() => n(this.anchor))
    ), this.#e.set(r, t), o || ($e && (this.anchor = De), this.#a());
  }
}
function st(e, t, ...n) {
  var r = new Fi(e);
  ro(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Zn);
}
function Xn(e) {
  Qe === null && ra(), to && Qe.l !== null ? bh(Qe).m.push(e) : nt(() => {
    const t = xt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ro(e) {
  Qe === null && ra(), Xn(() => () => xt(e));
}
function bh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  $e && Kn();
  var r = new Fi(e), o = n ? Zn : 0;
  function i(s, a) {
    if ($e) {
      const u = yu(e) === Hi;
      if (s === u) {
        var l = yi();
        ft(l), r.anchor = l, qt(!1), r.ensure(s, a), qt(!0);
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
  $e && ft(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ht(e)
  ), Ho(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function ha(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      Ve
    );
    if (s === (s = t() ?? "")) {
      $e && Kn();
      return;
    }
    if (a.nodes_start !== null && (Wu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        De.data;
        for (var l = Kn(), u = l; l !== null && (l.nodeType !== Or || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ mn(l);
        if (l === null)
          throw Mo(), $r;
        It(De, u), i = ft(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = pa(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ ht(p)), It(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ht(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ht(p)
          );
      else
        i.before(p);
    }
  });
}
function qi(e, t, n) {
  $e && Kn();
  var r = new Fi(e);
  ro(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Zn);
}
function _h(e, t, n, r, o, i) {
  let s = $e;
  $e && Kn();
  var a = null;
  $e && De.nodeType === bp && (a = /** @type {Element} */
  De, Kn());
  var l = (
    /** @type {TemplateNode} */
    $e ? De : e
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
        ) : p ? document.createElementNS(p, d) : document.createElement(d), It(a, a), r) {
          $e && mh(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ ht(a) : a.appendChild(jt())
          );
          $e && (h === null ? qt(!1) : ft(h)), r(a, h);
        }
        Ve.nodes_end = a, f.before(a);
      }
      $e && ft(f);
    }), () => {
    };
  }, Zn), Wi(() => {
  }), s && (qt(!0), ft(l));
}
function We(e, t) {
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
function kt(e, t, n) {
  no(() => {
    var r = xt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Ho(() => {
        var s = n();
        da(s), o && bu(i, s) && (i = s, r.update(s));
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
    n !== (n = t()) && (r && (yt(r), r = null), n && (r = Ft(() => {
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
function Gn(e) {
  return typeof e == "object" ? $h(e) : e ?? "";
}
const rl = [...` 	
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
          (s === 0 || rl.includes(r[s - 1])) && (a === r.length || rl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ol(e, t = !1) {
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
                var y = e.substring(u, p).trim();
                n += " " + y + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += ol(r)), o && (n += ol(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Zt(e, t, n, r, o, i) {
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
function $t(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = Sh(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ds(e, n?.[0], r[0]), ds(e, n?.[1], r[1], "important")) : ds(e, n, r));
  return r;
}
function Vs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ii(t))
      return Dp();
    for (var r of e.options)
      r.selected = t.includes(il(r));
    return;
  }
  for (r of e.options) {
    var o = il(r);
    if (Gp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Eh(e) {
  var t = new MutationObserver(() => {
    Vs(e, e.__value);
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
function il(e) {
  return "__value" in e ? e.__value : e.value;
}
const er = Symbol("class"), $n = Symbol("style"), lc = Symbol("is custom element"), uc = Symbol("is html");
function sr(e) {
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
    e.__on_r = n, pr(n), Qp();
  }
}
function ui(e, t) {
  var n = Xi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function fs(e, t) {
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
function Th(e, t, n, r, o = !1, i = !1) {
  if ($e && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || sr(s);
  }
  var l = Xi(e), u = l[lc], d = !l[uc];
  let p = $e && u;
  p && qt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = Gn(n.class) : (r || n[er]) && (n.class = null), n[$n] && (n.style ??= null);
  var w = cc(e);
  for (const N in n) {
    let V = n[N];
    if (h && N === "value" && V == null) {
      e.value = e.__value = "", f[N] = V;
      continue;
    }
    if (N === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Zt(e, m, V, r, t?.[er], n[er]), f[N] = V, f[er] = n[er];
      continue;
    }
    if (N === "style") {
      $t(e, V, t?.[$n], n[$n]), f[N] = V, f[$n] = n[$n];
      continue;
    }
    var b = f[N];
    if (!(V === b && !(V === void 0 && e.hasAttribute(N)))) {
      f[N] = V;
      var x = N[0] + N[1];
      if (x !== "$$")
        if (x === "on") {
          const Z = {}, H = "$$" + N;
          let I = N.slice(2);
          var $ = dh(I);
          if (uh(I) && (I = I.slice(0, -7), Z.capture = !0), !$ && b) {
            if (V != null) continue;
            e.removeEventListener(I, f[H], Z), f[H] = null;
          }
          if (V != null)
            if ($)
              e[`__${I}`] = V, hr([I]);
            else {
              let z = function(k) {
                f[N].call(this, k);
              };
              f[H] = fa(I, e, z, Z);
            }
          else $ && (e[`__${I}`] = void 0);
        } else if (N === "style")
          ke(e, N, V);
        else if (N === "autofocus")
          Jp(
            /** @type {HTMLElement} */
            e,
            !!V
          );
        else if (!u && (N === "__value" || N === "value" && V != null))
          e.value = e.__value = V;
        else if (N === "selected" && h)
          Ph(
            /** @type {HTMLOptionElement} */
            e,
            V
          );
        else {
          var _ = N;
          d || (_ = ph(_));
          var S = _ === "defaultValue" || _ === "defaultChecked";
          if (V == null && !u && !S)
            if (l[N] = null, _ === "value" || _ === "checked") {
              let Z = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (_ === "value") {
                let I = Z.defaultValue;
                Z.removeAttribute(_), Z.defaultValue = I, Z.value = Z.__value = H ? I : null;
              } else {
                let I = Z.defaultChecked;
                Z.removeAttribute(_), Z.defaultChecked = I, Z.checked = H ? I : !1;
              }
            } else
              e.removeAttribute(N);
          else S || w.includes(_) && (u || typeof V != "string") ? (e[_] = V, _ in l && (l[_] = bt)) : typeof V != "function" && ke(e, _, V);
        }
    }
  }
  return p && qt(!0), f;
}
function gt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Nu(o, n, r, (l) => {
    var u = void 0, d = {}, p = e.nodeName === "SELECT", f = !1;
    if (Ku(() => {
      var y = t(...l.map(c)), w = Th(
        e,
        u,
        y,
        i,
        s,
        a
      );
      f && p && "value" in y && Vs(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        y[b] || yt(d[b]);
      for (let b of Object.getOwnPropertySymbols(y)) {
        var m = y[b];
        b.description === hp && (!u || m !== u[b]) && (d[b] && yt(d[b]), d[b] = Ft(() => Ch(e, () => m))), w[b] = m;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      no(() => {
        Vs(
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
class ga {
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
          ga.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Nh = /* @__PURE__ */ new ga({
  box: "border-box"
});
function al(e, t, n) {
  var r = Nh.observe(e, () => n(e[t]));
  no(() => (xt(() => n(e[t])), r));
}
function ll(e, t) {
  return e === t || e?.[Sn] === t;
}
function Kt(e = {}, t, n, r) {
  return no(() => {
    var o, i;
    return Ho(() => {
      o = i, i = [], xt(() => {
        e !== n(...i) && (t(e, ...i), o && ll(n(...o), e) && t(null, ...o));
      });
    }), () => {
      pr(() => {
        i && ll(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function dc(e = !1) {
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
    const s = /* @__PURE__ */ zo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Zu(() => {
    ul(t, r), ks(n.b);
  }), nt(() => {
    const o = xt(() => n.m.map(yp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nt(() => {
    ul(t, r), ks(n.a);
  });
}
function ul(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let ti = !1;
function Oh(e) {
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
const Lh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ve;
      try {
        on(e.parent_effect), e.special[t] = v(
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
        on(r);
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
function cl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: lr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ve
      )
    },
    Lh
  );
}
const Vh = {
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
      const i = In(o, t);
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
        const o = In(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Sn || t === na) return !1;
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
function Ue(...e) {
  return new Proxy({ props: e }, Vh);
}
function v(e, t, n, r) {
  var o = !to || (n & lp) !== 0, i = (n & up) !== 0, s = (n & cp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? xt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = Sn in e || na in e;
    d = In(e, t)?.set ?? (p && t in e ? ($) => e[t] = $ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = Oh(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Ep(), d(f)));
  var y;
  if (o ? y = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? u() : (l = !0, $);
  } : y = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ !== void 0 && (a = /** @type {V} */
    void 0), $ === void 0 ? a : $;
  }, o && (n & uu) === 0)
    return y;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      function($, _) {
        return arguments.length > 0 ? ((!o || !_ || w || h) && d(_ ? y() : $), $) : y();
      }
    );
  }
  var m = !1, b = ((n & ap) !== 0 ? zo : oa)(() => (m = !1, y()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function($, _) {
      if (arguments.length > 0) {
        const S = _ ? c(b) : o && i ? rn($) : $;
        return Q(b, S), m = !0, a !== void 0 && (a = S), $;
      }
      return Dr && m || (x.f & Rn) !== 0 ? b.v : c(b);
    }
  );
}
function Mh(e) {
  return new Ah(e);
}
class Ah {
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
      var a = /* @__PURE__ */ Vu(s, !1, !1);
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
      const t = {}, n = zh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ci(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Mh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = la(() => {
        Ho(() => {
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
function zh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ce(e, t, n, r, o, i) {
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
          var d = In(u, a)?.get;
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
var Hh = { value: () => {
} };
function Gi() {
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
di.prototype = Gi.prototype = {
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
      e[r] = Hh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ms = "http://www.w3.org/1999/xhtml";
const fl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ms,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ji(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), fl.hasOwnProperty(t) ? { space: fl[t], local: e } : e;
}
function jh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ms && t.documentElement.namespaceURI === Ms ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Zh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function pc(e) {
  var t = Ji(e);
  return (t.local ? Zh : jh)(t);
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
  return new Jt(r, this._parents);
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
  return new Jt(r, o);
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
function Gh(e) {
  return function() {
    return Xh.call(this.children, e);
  };
}
function Jh() {
  return this.firstElementChild;
}
function Uh(e) {
  return this.select(e == null ? Jh : Gh(typeof e == "function" ? e : vc(e)));
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
  return new Jt(r, this._parents);
}
function mc(e) {
  return new Array(e.length);
}
function og() {
  return new Jt(this._enter || this._groups.map(mc), this._parents);
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
    var d = r[u], p = o[u], f = p.length, h = cg(e.call(d, d && d.__data__, u, r)), y = h.length, w = a[u] = new Array(y), m = s[u] = new Array(y), b = l[u] = new Array(f);
    n(d, p, w, m, b, h, t);
    for (var x = 0, $ = 0, _, S; x < y; ++x)
      if (_ = w[x]) {
        for (x >= $ && ($ = x + 1); !(S = m[$]) && ++$ < y; ) ;
        _._next = S || null;
      }
  }
  return s = new Jt(s, r), s._enter = a, s._exit = l, s;
}
function cg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dg() {
  return new Jt(this._exit || this._groups.map(mc), this._parents);
}
function fg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function pg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), h, y = 0; y < p; ++y)
      (h = u[y] || d[y]) && (f[y] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Jt(a, this._parents);
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
  return new Jt(o, this._parents).order();
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
function Tg(e, t) {
  var n = Ji(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? $g : Cg : typeof t == "function" ? n.local ? Pg : Eg : n.local ? Sg : kg)(n, t));
}
function yc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ng(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Og(e, t, n) {
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
function Lg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ng : typeof t == "function" ? Dg : Og)(e, t, n ?? "")) : qr(this.node(), e);
}
function qr(e, t) {
  return e.style.getPropertyValue(t) || yc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Vg(e) {
  return function() {
    delete this[e];
  };
}
function Mg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ag(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function zg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Vg : typeof t == "function" ? Ag : Mg)(e, t)) : this.node()[e];
}
function wc(e) {
  return e.trim().split(/^|\s+/);
}
function ma(e) {
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
  for (var n = ma(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function _c(e, t) {
  for (var n = ma(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Hg(e) {
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
    for (var r = ma(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rg : t ? Hg : Ig)(n, t));
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
function Gg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Jg() {
  return this.each(Gg);
}
function Ug() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qg() {
  return this.each(Ug);
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
  var n = typeof e == "function" ? e : pc(e), r = t == null ? tv : typeof t == "function" ? t : va(t);
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
function Jt(e, t) {
  this._groups = e, this._parents = t;
}
function jo() {
  return new Jt([[document.documentElement]], $c);
}
function yv() {
  return this;
}
Jt.prototype = jo.prototype = {
  constructor: Jt,
  select: Bh,
  selectAll: qh,
  selectChild: Uh,
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
  attr: Tg,
  style: Lg,
  property: zg,
  classed: jg,
  text: Yg,
  html: Xg,
  raise: Jg,
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
function nn(e) {
  return typeof e == "string" ? new Jt([[document.querySelector(e)]], [document.documentElement]) : new Jt([[e]], $c);
}
function wv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function cn(e, t) {
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
function ps(e) {
  e.stopImmediatePropagation();
}
function Ir(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kc(e) {
  var t = e.document.documentElement, n = nn(e).on("dragstart.drag", Ir, Co);
  "onselectstart" in t ? n.on("selectstart.drag", Ir, Co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sc(e, t) {
  var n = e.document.documentElement, r = nn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Ir, Co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ni = (e) => () => e;
function As(e, {
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
As.prototype.on = function() {
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
  var e = xv, t = _v, n = Cv, r = $v, o = {}, i = Gi("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(_) {
    _.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, bv).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(_, S) {
    if (!(d || !e.call(this, _, S))) {
      var N = $(this, t.call(this, _, S), _, S, "mouse");
      N && (nn(_.view).on("mousemove.drag", y, Co).on("mouseup.drag", w, Co), kc(_.view), ps(_), u = !1, a = _.clientX, l = _.clientY, N("start", _));
    }
  }
  function y(_) {
    if (Ir(_), !u) {
      var S = _.clientX - a, N = _.clientY - l;
      u = S * S + N * N > p;
    }
    o.mouse("drag", _);
  }
  function w(_) {
    nn(_.view).on("mousemove.drag mouseup.drag", null), Sc(_.view, u), Ir(_), o.mouse("end", _);
  }
  function m(_, S) {
    if (e.call(this, _, S)) {
      var N = _.changedTouches, V = t.call(this, _, S), Z = N.length, H, I;
      for (H = 0; H < Z; ++H)
        (I = $(this, V, _, S, N[H].identifier, N[H])) && (ps(_), I("start", _, N[H]));
    }
  }
  function b(_) {
    var S = _.changedTouches, N = S.length, V, Z;
    for (V = 0; V < N; ++V)
      (Z = o[S[V].identifier]) && (Ir(_), Z("drag", _, S[V]));
  }
  function x(_) {
    var S = _.changedTouches, N = S.length, V, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < N; ++V)
      (Z = o[S[V].identifier]) && (ps(_), Z("end", _, S[V]));
  }
  function $(_, S, N, V, Z, H) {
    var I = i.copy(), z = cn(H || N, S), k, O, C;
    if ((C = n.call(_, new As("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: Z,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), V)) != null)
      return k = C.x - z[0] || 0, O = C.y - z[1] || 0, function E(T, K, W) {
        var G = z, L;
        switch (T) {
          case "start":
            o[Z] = E, L = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            z = cn(W || K, S), L = s;
            break;
        }
        I.call(
          T,
          _,
          new As(T, {
            sourceEvent: K,
            subject: C,
            target: f,
            identifier: Z,
            active: L,
            x: z[0] + k,
            y: z[1] + O,
            dx: z[0] - G[0],
            dy: z[1] - G[1],
            dispatch: I
          }),
          V
        );
      };
  }
  return f.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : ni(!!_), f) : e;
  }, f.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : ni(_), f) : t;
  }, f.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : ni(_), f) : n;
  }, f.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : ni(!!_), f) : r;
  }, f.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? f : _;
  }, f.clickDistance = function(_) {
    return arguments.length ? (p = (_ = +_) * _, f) : Math.sqrt(p);
  }, f;
}
function ya(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Zo() {
}
var $o = 0.7, $i = 1 / $o, Rr = "\\s*([+-]?\\d+)\\s*", ko = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sv = /^#([0-9a-f]{3,8})$/, Ev = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`), Pv = new RegExp(`^rgb\\(${En},${En},${En}\\)$`), Tv = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${ko}\\)$`), Nv = new RegExp(`^rgba\\(${En},${En},${En},${ko}\\)$`), Ov = new RegExp(`^hsl\\(${ko},${En},${En}\\)$`), Dv = new RegExp(`^hsla\\(${ko},${En},${En},${ko}\\)$`), pl = {
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
ya(Zo, Sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hl,
  // Deprecated! Use color.formatHex.
  formatHex: hl,
  formatHex8: Lv,
  formatHsl: Vv,
  formatRgb: gl,
  toString: gl
});
function hl() {
  return this.rgb().formatHex();
}
function Lv() {
  return this.rgb().formatHex8();
}
function Vv() {
  return Pc(this).formatHsl();
}
function gl() {
  return this.rgb().formatRgb();
}
function Sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Sv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? vl(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ri(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ri(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ev.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = Pv.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Tv.exec(e)) ? ri(t[1], t[2], t[3], t[4]) : (t = Nv.exec(e)) ? ri(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ov.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Dv.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, t[4]) : pl.hasOwnProperty(e) ? vl(pl[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function vl(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ri(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ht(e, t, n, r);
}
function Mv(e) {
  return e instanceof Zo || (e = Sr(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function zs(e, t, n, r) {
  return arguments.length === 1 ? Mv(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ya(Ht, zs, Ec(Zo, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(_r(this.r), _r(this.g), _r(this.b), ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ml,
  // Deprecated! Use color.formatHex.
  formatHex: ml,
  formatHex8: Av,
  formatRgb: yl,
  toString: yl
}));
function ml() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}`;
}
function Av() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}${wr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
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
function wr(e) {
  return e = _r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function wl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, n, r);
}
function Pc(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Zo || (e = Sr(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new dn(s, a, l, e.opacity);
}
function zv(e, t, n, r) {
  return arguments.length === 1 ? Pc(e) : new dn(e, t, n, r ?? 1);
}
function dn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ya(dn, zv, Ec(Zo, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ht(
      hs(e >= 240 ? e - 240 : e + 120, o, r),
      hs(e, o, r),
      hs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new dn(bl(this.h), oi(this.s), oi(this.l), ki(this.opacity));
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
function hs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wa = (e) => () => e;
function Hv(e, t) {
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
  return (e = +e) == 1 ? Tc : function(t, n) {
    return n - t ? Iv(t, n, e) : wa(isNaN(t) ? n : t);
  };
}
function Tc(e, t) {
  var n = t - e;
  return n ? Hv(e, n) : wa(isNaN(e) ? t : e);
}
const Si = function e(t) {
  var n = Rv(t);
  function r(o, i) {
    var s = n((o = zs(o)).r, (i = zs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Tc(o.opacity, i.opacity);
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
function Cn(e, t) {
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
var Hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gs = new RegExp(Hs.source, "g");
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
function Nc(e, t) {
  var n = Hs.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Hs.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Cn(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Fv(l[0].x) : Wv(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function yo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? wa(t) : (n === "number" ? Cn : n === "string" ? (r = Sr(t)) ? (t = r, Si) : Nc : t instanceof Sr ? Si : t instanceof Date ? Bv : Zv(t) ? jv : Array.isArray(t) ? Kv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Yv : Cn)(e, t);
}
var xl = 180 / Math.PI, Oc = {
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
  return t.isIdentity ? Oc : Dc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Xv(e) {
  return e == null || (ii || (ii = document.createElementNS("http://www.w3.org/2000/svg", "g")), ii.setAttribute("transform", e), !(e = ii.transform.baseVal.consolidate())) ? Oc : (e = e.matrix, Dc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Lc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: Cn(u, p) }, { i: w - 2, x: Cn(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: Cn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: Cn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: Cn(u, p) }, { i: w - 2, x: Cn(d, f) });
    } else (p !== 1 || f !== 1) && h.push(o(h) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(h) {
      for (var y = -1, w = f.length, m; ++y < w; ) p[(m = f[y]).i] = m.x(h);
      return p.join("");
    };
  };
}
var Gv = Lc(qv, "px, ", "px)", "deg)"), Jv = Lc(Xv, ", ", ")", ")"), Uv = 1e-12;
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
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], h = d - a, y = p - l, w = h * h + y * y, m, b;
    if (w < Uv)
      b = Math.log(f / u) / t, m = function(V) {
        return [
          a + V * h,
          l + V * y,
          u * Math.exp(t * V * b)
        ];
      };
    else {
      var x = Math.sqrt(w), $ = (f * f - u * u + r * w) / (2 * u * n * x), _ = (f * f - u * u - r * w) / (2 * f * n * x), S = Math.log(Math.sqrt($ * $ + 1) - $), N = Math.log(Math.sqrt(_ * _ + 1) - _);
      b = (N - S) / t, m = function(V) {
        var Z = V * b, H = _l(S), I = u / (n * x) * (H * e1(t * Z + S) - Qv(S));
        return [
          a + I * h,
          l + I * y,
          u * H / _l(t * Z + S)
        ];
      };
    }
    return m.duration = b * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Xr = 0, po = 0, uo = 0, Vc = 1e3, Ei, ho, Pi = 0, Er = 0, Ui = 0, So = typeof performance == "object" && performance.now ? performance : Date, Mc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ba() {
  return Er || (Mc(t1), Er = So.now() + Ui);
}
function t1() {
  Er = 0;
}
function Ti() {
  this._call = this._time = this._next = null;
}
Ti.prototype = Ac.prototype = {
  constructor: Ti,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ba() : +n) + (t == null ? 0 : +t), !this._next && ho !== this && (ho ? ho._next = this : Ei = this, ho = this), this._call = e, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function Ac(e, t, n) {
  var r = new Ti();
  return r.restart(e, t, n), r;
}
function n1() {
  ba(), ++Xr;
  for (var e = Ei, t; e; )
    (t = Er - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Xr;
}
function Cl() {
  Er = (Pi = So.now()) + Ui, Xr = po = 0;
  try {
    n1();
  } finally {
    Xr = 0, o1(), Er = 0;
  }
}
function r1() {
  var e = So.now(), t = e - Pi;
  t > Vc && (Ui -= t, Pi = e);
}
function o1() {
  for (var e, t = Ei, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ei = n);
  ho = e, Is(r);
}
function Is(e) {
  if (!Xr) {
    po && (po = clearTimeout(po));
    var t = e - Er;
    t > 24 ? (e < 1 / 0 && (po = setTimeout(Cl, e - So.now() - Ui)), uo && (uo = clearInterval(uo))) : (uo || (Pi = So.now(), uo = setInterval(r1, Vc)), Xr = 1, Mc(Cl));
  }
}
function $l(e, t, n) {
  var r = new Ti();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var i1 = Gi("start", "end", "cancel", "interrupt"), s1 = [], zc = 0, kl = 1, Rs = 2, pi = 3, Sl = 4, js = 5, hi = 6;
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
    state: zc
  });
}
function xa(e, t) {
  var n = yn(e, t);
  if (n.state > zc) throw new Error("too late; already scheduled");
  return n;
}
function On(e, t) {
  var n = yn(e, t);
  if (n.state > pi) throw new Error("too late; already running");
  return n;
}
function yn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function a1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ac(i, 0, n.time);
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
    }), n.state = Rs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Rs) {
      for (n.state = pi, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = h);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = js, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === js && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Rs && r.state < js, r.state = hi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
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
    var o = On(this, e), i = o.tween;
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
    var i = On(this, e), s = i.tween;
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
    for (var r = yn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? u1 : c1)(n, e, t));
}
function _a(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = On(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return yn(o, r).value[t];
  };
}
function Hc(e, t) {
  var n;
  return (typeof t == "number" ? Cn : t instanceof Sr ? Si : (n = Sr(t)) ? (t = n, Si) : Nc)(e, t);
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
  var n = Ji(e), r = n === "transform" ? Jv : Hc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? m1 : v1)(n, r, _a(this, "attr." + e, t)) : t == null ? (n.local ? p1 : f1)(n) : (n.local ? g1 : h1)(n, r, t));
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
  var r = Ji(e);
  return this.tween(n, (r.local ? x1 : _1)(r, t));
}
function $1(e, t) {
  return function() {
    xa(this, e).delay = +t.apply(this, arguments);
  };
}
function k1(e, t) {
  return t = +t, function() {
    xa(this, e).delay = t;
  };
}
function S1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? $1 : k1)(t, e)) : yn(this.node(), t).delay;
}
function E1(e, t) {
  return function() {
    On(this, e).duration = +t.apply(this, arguments);
  };
}
function P1(e, t) {
  return t = +t, function() {
    On(this, e).duration = t;
  };
}
function T1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? E1 : P1)(t, e)) : yn(this.node(), t).duration;
}
function N1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    On(this, e).ease = t;
  };
}
function O1(e) {
  var t = this._id;
  return arguments.length ? this.each(N1(t, e)) : yn(this.node(), t).ease;
}
function D1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    On(this, e).ease = n;
  };
}
function L1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(D1(this._id, e));
}
function V1(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Bn(r, this._parents, this._name, this._id);
}
function M1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Bn(s, this._parents, this._name, this._id);
}
function A1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function z1(e, t, n) {
  var r, o, i = A1(t) ? xa : On;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function H1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? yn(this.node(), n).on.on(e) : this.each(z1(n, e, t));
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
  typeof e != "function" && (e = va(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Qi(u[f], t, n, f, u, yn(d, n)));
  return new Bn(i, this._parents, t, n);
}
function Z1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = hc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, y = yn(d, n), w = 0, m = f.length; w < m; ++w)
          (h = f[w]) && Qi(h, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new Bn(i, s, t, n);
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
    var l = On(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ic(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function X1(e, t, n) {
  var r = (e += "") == "transform" ? Gv : Hc;
  return t == null ? this.styleTween(e, Y1(e, r)).on("end.style." + e, Ic(e)) : typeof t == "function" ? this.styleTween(e, F1(e, r, _a(this, "style." + e, t))).each(q1(this._id, e)) : this.styleTween(e, W1(e, r, t), n).on("end.style." + e, null);
}
function G1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function J1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && G1(e, s, n)), r;
  }
  return i._value = t, i;
}
function U1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, J1(e, t, n ?? ""));
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
  return this.tween("text", typeof e == "function" ? e0(_a(this, "text", e)) : Q1(e == null ? "" : e + ""));
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
        var d = yn(l, t);
        Qi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Bn(r, this._parents, e, n);
}
function s0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = On(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var a0 = 0;
function Bn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Rc() {
  return ++a0;
}
var Ln = jo.prototype;
Bn.prototype = {
  constructor: Bn,
  select: j1,
  selectAll: Z1,
  selectChild: Ln.selectChild,
  selectChildren: Ln.selectChildren,
  filter: V1,
  merge: M1,
  selection: B1,
  transition: i0,
  call: Ln.call,
  nodes: Ln.nodes,
  node: Ln.node,
  size: Ln.size,
  empty: Ln.empty,
  each: Ln.each,
  on: H1,
  attr: y1,
  attrTween: C1,
  style: X1,
  styleTween: U1,
  text: t0,
  textTween: o0,
  remove: R1,
  tween: d1,
  delay: S1,
  duration: T1,
  ease: O1,
  easeVarying: L1,
  end: s0,
  [Symbol.iterator]: Ln[Symbol.iterator]
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
  e instanceof Bn ? (t = e._id, e = e._name) : (t = Rc(), (n = u0).time = ba(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Qi(l, e, t, u, s, n || c0(l, t));
  return new Bn(r, this._parents, e, t);
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
function An(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
An.prototype = {
  constructor: An,
  scale: function(e) {
    return e === 1 ? this : new An(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new An(this.k, this.x + this.k * e, this.y + this.k * t);
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
var es = new An(1, 0, 0);
jc.prototype = An.prototype;
function jc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return es;
  return e.__zoom;
}
function vs(e) {
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
  var e = p0, t = h0, n = m0, r = g0, o = v0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = fi, u = Gi("start", "zoom", "end"), d, p, f, h = 500, y = 150, w = 0, m = 10;
  function b(C) {
    C.property("__zoom", El).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, E, T, K) {
    var W = C.selection ? C.selection() : C;
    W.property("__zoom", El), C !== W ? S(C, E, T, K) : W.interrupt().each(function() {
      N(this, arguments).event(K).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, b.scaleBy = function(C, E, T, K) {
    b.scaleTo(C, function() {
      var W = this.__zoom.k, G = typeof E == "function" ? E.apply(this, arguments) : E;
      return W * G;
    }, T, K);
  }, b.scaleTo = function(C, E, T, K) {
    b.transform(C, function() {
      var W = t.apply(this, arguments), G = this.__zoom, L = T == null ? _(W) : typeof T == "function" ? T.apply(this, arguments) : T, F = G.invert(L), Y = typeof E == "function" ? E.apply(this, arguments) : E;
      return n($(x(G, Y), L, F), W, s);
    }, T, K);
  }, b.translateBy = function(C, E, T, K) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof T == "function" ? T.apply(this, arguments) : T
      ), t.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function(C, E, T, K, W) {
    b.transform(C, function() {
      var G = t.apply(this, arguments), L = this.__zoom, F = K == null ? _(G) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(es.translate(F[0], F[1]).scale(L.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof T == "function" ? -T.apply(this, arguments) : -T
      ), G, s);
    }, K, W);
  };
  function x(C, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === C.k ? C : new An(E, C.x, C.y);
  }
  function $(C, E, T) {
    var K = E[0] - T[0] * C.k, W = E[1] - T[1] * C.k;
    return K === C.x && W === C.y ? C : new An(C.k, K, W);
  }
  function _(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function S(C, E, T, K) {
    C.on("start.zoom", function() {
      N(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var W = this, G = arguments, L = N(W, G).event(K), F = t.apply(W, G), Y = T == null ? _(F) : typeof T == "function" ? T.apply(W, G) : T, J = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), R = W.__zoom, X = typeof E == "function" ? E.apply(W, G) : E, U = l(R.invert(Y).concat(J / R.k), X.invert(Y).concat(J / X.k));
      return function(ne) {
        if (ne === 1) ne = X;
        else {
          var re = U(ne), ee = J / re[2];
          ne = new An(ee, Y[0] - re[0] * ee, Y[1] - re[1] * ee);
        }
        L.zoom(null, ne);
      };
    });
  }
  function N(C, E, T) {
    return !T && C.__zooming || new V(C, E);
  }
  function V(C, E) {
    this.that = C, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, E), this.taps = 0;
  }
  V.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, E) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var E = nn(this.that).datum();
      u.call(
        C,
        this.that,
        new f0(C, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function Z(C, ...E) {
    if (!e.apply(this, arguments)) return;
    var T = N(this, E).event(C), K = this.__zoom, W = Math.max(i[0], Math.min(i[1], K.k * Math.pow(2, r.apply(this, arguments)))), G = cn(C);
    if (T.wheel)
      (T.mouse[0][0] !== G[0] || T.mouse[0][1] !== G[1]) && (T.mouse[1] = K.invert(T.mouse[0] = G)), clearTimeout(T.wheel);
    else {
      if (K.k === W) return;
      T.mouse = [G, K.invert(G)], gi(this), T.start();
    }
    co(C), T.wheel = setTimeout(L, y), T.zoom("mouse", n($(x(K, W), T.mouse[0], T.mouse[1]), T.extent, s));
    function L() {
      T.wheel = null, T.end();
    }
  }
  function H(C, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var T = C.currentTarget, K = N(this, E, !0).event(C), W = nn(C.view).on("mousemove.zoom", Y, !0).on("mouseup.zoom", J, !0), G = cn(C, T), L = C.clientX, F = C.clientY;
    kc(C.view), vs(C), K.mouse = [G, this.__zoom.invert(G)], gi(this), K.start();
    function Y(R) {
      if (co(R), !K.moved) {
        var X = R.clientX - L, U = R.clientY - F;
        K.moved = X * X + U * U > w;
      }
      K.event(R).zoom("mouse", n($(K.that.__zoom, K.mouse[0] = cn(R, T), K.mouse[1]), K.extent, s));
    }
    function J(R) {
      W.on("mousemove.zoom mouseup.zoom", null), Sc(R.view, K.moved), co(R), K.event(R).end();
    }
  }
  function I(C, ...E) {
    if (e.apply(this, arguments)) {
      var T = this.__zoom, K = cn(C.changedTouches ? C.changedTouches[0] : C, this), W = T.invert(K), G = T.k * (C.shiftKey ? 0.5 : 2), L = n($(x(T, G), K, W), t.apply(this, E), s);
      co(C), a > 0 ? nn(this).transition().duration(a).call(S, L, K, C) : nn(this).call(b.transform, L, K, C);
    }
  }
  function z(C, ...E) {
    if (e.apply(this, arguments)) {
      var T = C.touches, K = T.length, W = N(this, E, C.changedTouches.length === K).event(C), G, L, F, Y;
      for (vs(C), L = 0; L < K; ++L)
        F = T[L], Y = cn(F, this), Y = [Y, this.__zoom.invert(Y), F.identifier], W.touch0 ? !W.touch1 && W.touch0[2] !== Y[2] && (W.touch1 = Y, W.taps = 0) : (W.touch0 = Y, G = !0, W.taps = 1 + !!d);
      d && (d = clearTimeout(d)), G && (W.taps < 2 && (p = Y[0], d = setTimeout(function() {
        d = null;
      }, h)), gi(this), W.start());
    }
  }
  function k(C, ...E) {
    if (this.__zooming) {
      var T = N(this, E).event(C), K = C.changedTouches, W = K.length, G, L, F, Y;
      for (co(C), G = 0; G < W; ++G)
        L = K[G], F = cn(L, this), T.touch0 && T.touch0[2] === L.identifier ? T.touch0[0] = F : T.touch1 && T.touch1[2] === L.identifier && (T.touch1[0] = F);
      if (L = T.that.__zoom, T.touch1) {
        var J = T.touch0[0], R = T.touch0[1], X = T.touch1[0], U = T.touch1[1], ne = (ne = X[0] - J[0]) * ne + (ne = X[1] - J[1]) * ne, re = (re = U[0] - R[0]) * re + (re = U[1] - R[1]) * re;
        L = x(L, Math.sqrt(ne / re)), F = [(J[0] + X[0]) / 2, (J[1] + X[1]) / 2], Y = [(R[0] + U[0]) / 2, (R[1] + U[1]) / 2];
      } else if (T.touch0) F = T.touch0[0], Y = T.touch0[1];
      else return;
      T.zoom("touch", n($(L, F, Y), T.extent, s));
    }
  }
  function O(C, ...E) {
    if (this.__zooming) {
      var T = N(this, E).event(C), K = C.changedTouches, W = K.length, G, L;
      for (vs(C), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), G = 0; G < W; ++G)
        L = K[G], T.touch0 && T.touch0[2] === L.identifier ? delete T.touch0 : T.touch1 && T.touch1[2] === L.identifier && delete T.touch1;
      if (T.touch1 && !T.touch0 && (T.touch0 = T.touch1, delete T.touch1), T.touch0) T.touch0[1] = this.__zoom.invert(T.touch0[0]);
      else if (T.end(), T.taps === 2 && (L = cn(L, this), Math.hypot(p[0] - L[0], p[1] - L[1]) < m)) {
        var F = nn(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : si(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : si(!!C), b) : e;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : si(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : si([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : t;
  }, b.scaleExtent = function(C) {
    return arguments.length ? (i[0] = +C[0], i[1] = +C[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(C) {
    return arguments.length ? (s[0][0] = +C[0][0], s[1][0] = +C[1][0], s[0][1] = +C[0][1], s[1][1] = +C[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(C) {
    return arguments.length ? (n = C, b) : n;
  }, b.duration = function(C) {
    return arguments.length ? (a = +C, b) : a;
  }, b.interpolate = function(C) {
    return arguments.length ? (l = C, b) : l;
  }, b.on = function() {
    var C = u.on.apply(u, arguments);
    return C === u ? b : C;
  }, b.clickDistance = function(C) {
    return arguments.length ? (w = (C = +C) * C, b) : Math.sqrt(w);
  }, b.tapDistance = function(C) {
    return arguments.length ? (m = +C, b) : m;
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
}, Zs = [
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
var Gr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Gr || (Gr = {}));
var Cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Cr || (Cr = {}));
var Ni;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ni || (Ni = {}));
const Ks = {
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
function Tl(e, t, n) {
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
const Bc = (e) => "id" in e && "source" in e && "target" in e, x0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ca = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ko = (e, t = [0, 0]) => {
  const { width: n, height: r } = gr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ca(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Oi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ts(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ns(n);
}, Bo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ts(n, Oi(o)), r = !0);
  }), r ? ns(n) : { x: 0, y: 0, width: 0, height: 0 };
}, $a = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Wo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = To(a, Ur(u)), m = (h ?? 0) * (y ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= m || u.dragging) && l.push(u);
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
  const a = $0(e, s), l = Bo(a), u = ka(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
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
      const h = a.measured.width, y = a.measured.height;
      h && y && (p = [
        [l, u],
        [l + h, u + y]
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
    const f = i.has(p.id), h = !f && p.parentId && s.find((y) => y.id === p.parentId);
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
const Jr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Jr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Jr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Wc(e, t, n) {
  const { width: r, height: o } = gr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Pr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Nl = (e, t, n) => e < t ? Jr(Math.abs(e - t), 1, t) / t : e > n ? -Jr(Math.abs(e - n), 1, t) / t : 0, Fc = (e, t, n = 15, r = 40) => {
  const o = Nl(e.x, r, t.width - r) * n, i = Nl(e.y, r, t.height - r) * n;
  return [o, i];
}, ts = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Bs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ns = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ur = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Oi = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, qc = (e, t) => ns(ts(Bs(e), Bs(t))), To = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ol = (e) => zn(e.width) && zn(e.height) && zn(e.x) && zn(e.y), zn = (e) => !isNaN(e) && isFinite(e), E0 = (e, t) => {
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
function Mr(e, t) {
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
    const r = Mr(e, n), o = Mr(e, t);
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
    const r = Mr(e.top ?? e.y ?? 0, n), o = Mr(e.bottom ?? e.y ?? 0, n), i = Mr(e.left ?? e.x ?? 0, t), s = Mr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function T0(e, t, n, r, o, i) {
  const { x: s, y: a } = Di(e, [t, n, r]), { x: l, y: u } = Di({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const ka = (e, t, n, r, o, i) => {
  const s = P0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Jr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - p * d, y = n / 2 - f * d, w = T0(e, h, y, d, t, n), m = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: h - m.left + m.right,
    y: y - m.top + m.bottom,
    zoom: d
  };
}, br = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Qr(e) {
  return e != null && e !== "parent";
}
function gr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Xc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function N0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function O0(e) {
  return { ...y0, ...e || {} };
}
function ms(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = pn(e), a = Wo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Yo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Gc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Jc = (e) => e?.getRootNode?.() || window?.document, D0 = ["INPUT", "SELECT", "TEXTAREA"];
function Uc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : D0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Qc = (e) => "clientX" in e, pn = (e, t) => {
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
      ...Gc(s)
    };
  });
};
function L0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function ai(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ll({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
  const [a, l] = Ll({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ll({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, h, y] = L0({
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
    y
  ];
}
function td({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function V0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function M0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ts(Oi(e), Oi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return To(s, ns(i)) > 0;
}
const A0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, z0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), H0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Bc(e) ? n = { ...e } : n = {
    ...e,
    id: A0(e)
  }, z0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
const Vl = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ml = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function R0({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i, stepPosition: s }) {
  const a = Vl[t], l = Vl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = I0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", h = p[f];
  let y = [], w, m;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , $, _] = td({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, m = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, m = o.y ?? u.y + (d.y - u.y) * s);
    const S = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], N = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === h ? y = f === "x" ? S : N : y = f === "x" ? N : S;
  } else {
    const S = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = a.x === h ? N : S : y = a.y === h ? S : N, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const k = Math.min(i - 1, i - z);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * k : x[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", k = a[f] === l[z], O = u[z] > d[z], C = u[z] < d[z];
      (a[f] === 1 && (!k && O || k && C) || a[f] !== 1 && (!k && C || k && O)) && (y = f === "x" ? S : N);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, Z = { x: d.x + x.x, y: d.y + x.y }, H = Math.max(Math.abs(V.x - y[0].x), Math.abs(Z.x - y[0].x)), I = Math.max(Math.abs(V.y - y[0].y), Math.abs(Z.y - y[0].y));
    H >= I ? (w = (V.x + Z.x) / 2, m = y[0].y) : (w = y[0].x, m = (V.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...y,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], w, m, $, _];
}
function j0(e, t, n, r) {
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
function Sa({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, h, y, w] = R0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((m, b, x) => {
    let $ = "";
    return x > 0 && x < p.length - 1 ? $ = j0(p[x - 1], b, p[x + 1], s) : $ = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, m += $, m;
  }, ""), f, h, y, w];
}
function Al(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Z0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Al(t) || !Al(n))
    return null;
  const r = t.internals.handleBounds || zl(t.handles), o = n.internals.handleBounds || zl(n.handles), i = Hl(r?.source ?? [], e.sourceHandle), s = Hl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Gr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Eo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || Ce.Bottom, l = s?.position || Ce.Top, u = No(t, i, a), d = No(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function zl(e) {
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
function No(e, t, n = Ce.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? gr(e);
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
function Hl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ys(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function K0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ys(l, t);
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
const rd = 1e3, Y0 = 10, Ea = {
  nodeOrigin: [0, 0],
  nodeExtent: Zs,
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
function F0(e, t, n) {
  const r = Pa(Ea, n);
  for (const o of e.values())
    if (o.parentId)
      Ta(o, e, t, r);
    else {
      const i = Ko(o, r.nodeOrigin), s = Qr(o.extent) ? o.extent : r.nodeExtent, a = Pr(i, s, gr(o));
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
  const o = Pa(W0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? rd : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = Ko(u, o.nodeOrigin), f = Qr(u.extent) ? u.extent : o.nodeExtent, h = Pr(p, f, gr(u));
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
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Ta(d, t, n, r, i);
  }
  return s;
}
function G0(e, t) {
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
  G0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Y0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? rd : 0, { x: p, y: f, z: h } = J0(e, u, s, a, d), { positionAbsolute: y } = e.internals, w = p !== y.x || f !== y.y;
  (w || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: p, y: f } : y,
      z: h
    }
  });
}
function od(e, t) {
  return (zn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function J0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = gr(e), l = Ko(e, n), u = Qr(e.extent) ? Pr(l, e.extent, a) : l;
  let d = Pr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Wc(d, a, t));
  const p = od(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function U0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ur(a), u = qc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = gr(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), m = (y - d.width) * p[0], b = (w - d.height) * p[1];
    (f > 0 || h > 0 || m || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + m,
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
        width: y + (f ? p[0] * f - m : 0),
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
    const y = Gc(f.nodeElement), w = h.measured.width !== y.width || h.measured.height !== y.height;
    if (y.width && y.height && (w || !h.internals.handleBounds || f.force)) {
      const m = f.nodeElement.getBoundingClientRect(), b = Qr(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Wc(x, y, t.get(h.parentId)) : b && (x = Pr(x, b, y));
      const $ = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Dl("source", f.nodeElement, m, d, h.id),
            target: Dl("target", f.nodeElement, m, d, h.id)
          }
        }
      };
      t.set(h.id, $), h.parentId && Ta($, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: y
      }), h.expandParent && h.parentId && p.push({
        id: h.id,
        parentId: h.parentId,
        rect: Ur($, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = U0(p, t, n, o);
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
function ys({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, y = !1, w = null;
  function m({ noDragClassName: x, handleSelector: $, domNode: _, isSelectable: S, nodeId: N, nodeClickDistance: V = 0 }) {
    f = nn(_);
    function Z({ x: k, y: O }) {
      const { nodeLookup: C, nodeExtent: E, snapGrid: T, snapToGrid: K, nodeOrigin: W, onNodeDrag: G, onSelectionDrag: L, onError: F, updateNodePositions: Y } = t();
      i = { x: k, y: O };
      let J = !1;
      const R = a.size > 1, X = R && E ? Bs(Bo(a)) : null, U = R && K ? om({
        dragItems: a,
        snapGrid: T,
        x: k,
        y: O
      }) : null;
      for (const [ne, re] of a) {
        if (!C.has(ne))
          continue;
        let ee = { x: k - re.distance.x, y: O - re.distance.y };
        K && (ee = U ? {
          x: Math.round(ee.x + U.x),
          y: Math.round(ee.y + U.y)
        } : Yo(ee, T));
        let me = null;
        if (R && E && !re.extent && X) {
          const { positionAbsolute: ae } = re.internals, ve = ae.x - X.x + E[0][0], ye = ae.x + re.measured.width - X.x2 + E[1][0], we = ae.y - X.y + E[0][1], le = ae.y + re.measured.height - X.y2 + E[1][1];
          me = [
            [ve, we],
            [ye, le]
          ];
        }
        const { position: de, positionAbsolute: ie } = Yc({
          nodeId: ne,
          nextPosition: ee,
          nodeLookup: C,
          nodeExtent: me || E,
          nodeOrigin: W,
          onError: F
        });
        J = J || re.position.x !== de.x || re.position.y !== de.y, re.position = de, re.internals.positionAbsolute = ie;
      }
      if (y = y || J, !!J && (Y(a, !0), w && (r || G || !N && L))) {
        const [ne, re] = ys({
          nodeId: N,
          dragItems: a,
          nodeLookup: C
        });
        r?.(w, a, ne, re), G?.(w, ne, re), N || L?.(w, re);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: k, panBy: O, autoPanSpeed: C, autoPanOnNodeDrag: E } = t();
      if (!E) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [T, K] = Fc(u, d, C);
      (T !== 0 || K !== 0) && (i.x = (i.x ?? 0) - T / k[2], i.y = (i.y ?? 0) - K / k[2], await O({ x: T, y: K }) && Z(i)), s = requestAnimationFrame(H);
    }
    function I(k) {
      const { nodeLookup: O, multiSelectionActive: C, nodesDraggable: E, transform: T, snapGrid: K, snapToGrid: W, selectNodesOnDrag: G, onNodeDragStart: L, onSelectionDragStart: F, unselectNodesAndEdges: Y } = t();
      p = !0, (!G || !S) && !C && N && (O.get(N)?.selected || Y()), S && G && N && e?.(N);
      const J = ms(k.sourceEvent, { transform: T, snapGrid: K, snapToGrid: W, containerBounds: d });
      if (i = J, a = rm(O, E, J, N), a.size > 0 && (n || L || !N && F)) {
        const [R, X] = ys({
          nodeId: N,
          dragItems: a,
          nodeLookup: O
        });
        n?.(k.sourceEvent, a, R, X), L?.(k.sourceEvent, R, X), N || F?.(k.sourceEvent, X);
      }
    }
    const z = kv().clickDistance(V).on("start", (k) => {
      const { domNode: O, nodeDragThreshold: C, transform: E, snapGrid: T, snapToGrid: K } = t();
      d = O?.getBoundingClientRect() || null, h = !1, y = !1, w = k.sourceEvent, C === 0 && I(k), i = ms(k.sourceEvent, { transform: E, snapGrid: T, snapToGrid: K, containerBounds: d }), u = pn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: O, transform: C, snapGrid: E, snapToGrid: T, nodeDragThreshold: K, nodeLookup: W } = t(), G = ms(k.sourceEvent, { transform: C, snapGrid: E, snapToGrid: T, containerBounds: d });
      if (w = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !W.has(N)) && (h = !0), !h) {
        if (!l && O && p && (l = !0, H()), !p) {
          const L = pn(k.sourceEvent, d), F = L.x - u.x, Y = L.y - u.y;
          Math.sqrt(F * F + Y * Y) > K && I(k);
        }
        (i.x !== G.xSnapped || i.y !== G.ySnapped) && a && p && (u = pn(k.sourceEvent, d), Z(G));
      }
    }).on("end", (k) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: O, updateNodePositions: C, onNodeDragStop: E, onSelectionDragStop: T } = t();
        if (y && (C(a, !1), y = !1), o || E || !N && T) {
          const [K, W] = ys({
            nodeId: N,
            dragItems: a,
            nodeLookup: O,
            dragging: !1
          });
          o?.(k.sourceEvent, a, K, W), E?.(k.sourceEvent, K, W), N || T?.(k.sourceEvent, W);
        }
      }
    }).filter((k) => {
      const O = k.target;
      return !k.button && (!x || !Rl(O, `.${x}`, _)) && (!$ || Rl(O, $, _));
    });
    f.call(z);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: m,
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
    To(o, Ur(i)) > 0 && r.push(i);
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
      const { x: d, y: p } = No(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
  return l && i ? { ...l, ...No(s, l, l.position, !0) } : l;
}
function ad(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function um(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ld = () => !0;
function cm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: w, onConnectEnd: m, isValidConnection: b = ld, onReconnectEnd: x, updateConnection: $, getTransform: _, getFromHandle: S, autoPanSpeed: N, dragThreshold: V = 1, handleDomNode: Z }) {
  const H = Jc(e.target);
  let I = 0, z;
  const { x: k, y: O } = pn(e), C = ad(i, Z), E = a?.getBoundingClientRect();
  let T = !1;
  if (!E || !C)
    return;
  const K = sd(o, C, r, l, t);
  if (!K)
    return;
  let W = pn(e, E), G = !1, L = null, F = !1, Y = null;
  function J() {
    if (!d || !E)
      return;
    const [me, de] = Fc(W, E, N);
    f({ x: me, y: de }), I = requestAnimationFrame(J);
  }
  const R = {
    ...K,
    nodeId: o,
    type: C,
    position: K.position
  }, X = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: No(X, R, Ce.Left, !0),
    fromHandle: R,
    fromPosition: R.position,
    fromNode: X,
    to: W,
    toHandle: null,
    toPosition: Pl[R.position],
    toNode: null,
    pointer: W
  };
  function ne() {
    T = !0, $(U), y?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  V === 0 && ne();
  function re(me) {
    if (!T) {
      const { x: ve, y: ye } = pn(me), we = ve - k, le = ye - O;
      if (!(we * we + le * le > V * V))
        return;
      ne();
    }
    if (!S() || !R) {
      ee(me);
      return;
    }
    const de = _();
    W = pn(me, E), z = lm(Wo(W, de, !1, [1, 1]), n, l, R), G || (J(), G = !0);
    const ie = ud(me, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    Y = ie.handleDomNode, L = ie.connection, F = um(!!z, ie.isValid);
    const ae = {
      // from stays the same
      ...U,
      isValid: F,
      to: ie.toHandle && F ? Di({ x: ie.toHandle.x, y: ie.toHandle.y }, de) : W,
      toHandle: ie.toHandle,
      toPosition: F && ie.toHandle ? ie.toHandle.position : Pl[R.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: W
    };
    $(ae), U = ae;
  }
  function ee(me) {
    if (!("touches" in me && me.touches.length > 0)) {
      if (T) {
        (z || Y) && L && F && w?.(L);
        const { inProgress: de, ...ie } = U, ae = {
          ...ie,
          toPosition: U.toHandle ? U.toPosition : null
        };
        m?.(me, ae), i && x?.(me, ae);
      }
      h(), cancelAnimationFrame(I), G = !1, F = !1, L = null, Y = null, H.removeEventListener("mousemove", re), H.removeEventListener("mouseup", ee), H.removeEventListener("touchmove", re), H.removeEventListener("touchend", ee);
    }
  }
  H.addEventListener("mousemove", re), H.addEventListener("mouseup", ee), H.addEventListener("touchmove", re), H.addEventListener("touchend", ee);
}
function ud(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ld, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = pn(e), w = s.elementFromPoint(h, y), m = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const x = ad(void 0, m), $ = m.getAttribute("data-nodeid"), _ = m.getAttribute("data-handleid"), S = m.classList.contains("connectable"), N = m.classList.contains("connectableend");
    if (!$ || !x)
      return b;
    const V = {
      source: p ? $ : r,
      sourceHandle: p ? _ : o,
      target: p ? r : $,
      targetHandle: p ? o : _
    };
    b.connection = V;
    const Z = S && N && (n === Gr.Strict ? p && x === "source" || !p && x === "target" : $ !== r || _ !== o);
    b.isValid = Z && u(V), b.toHandle = sd($, x, _, d, n, !0);
  }
  return b;
}
const jl = {
  onPointerDown: cm,
  isValid: ud
};
function dm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = nn(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = ($) => {
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), S = $.sourceEvent.ctrlKey && br() ? 10 : 1, N = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = _[2] * Math.pow(2, N * S);
      t.scaleTo(V);
    };
    let w = [0, 0];
    const m = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (w = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, b = ($) => {
      const _ = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], N = [S[0] - w[0], S[1] - w[1]];
      w = S;
      const V = r() * Math.max(_[2], Math.log(_[2])) * (h ? -1 : 1), Z = {
        x: _[0] - N[0] * V,
        y: _[1] - N[1] * V
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: _[2]
      }, H, a);
    }, x = Zc().on("start", m).on("zoom", p ? b : null).on("zoom.wheel", f ? y : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: cn
  };
}
const rs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ws = ({ x: e, y: t, zoom: n }) => es.translate(e, t).scale(n), zr = (e, t) => e.target.closest(`.${t}`), cd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), fm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, bs = (e, t = 0, n = fm, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, dd = (e) => {
  const t = e.ctrlKey && br() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function pm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (zr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = cn(d), b = dd(d), x = p * Math.pow(2, b);
      r.scaleTo(n, x, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === Cr.Vertical ? 0 : d.deltaX * f, y = o === Cr.Horizontal ? 0 : d.deltaY * f;
    !br() && d.shiftKey && o !== Cr.Vertical && (h = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(h / p) * i,
      -(y / p) * i,
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
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = zr(r, e);
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
    const f = e || t, h = n && p.ctrlKey, y = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (zr(p, `${u}-flow__node`) || zr(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || zr(p, a) && y || zr(p, l) && (!y || o && y && !e) || !n && p.ctrlKey && y)
      return !1;
    if (!n && p.type === "touchstart" && p.touches?.length > 1)
      return p.preventDefault(), !1;
    if (!f && !o && !h && y || !r && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(r) && !r.includes(p.button) && p.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || y) && w;
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
  }, d = e.getBoundingClientRect(), p = Zc().scaleExtent([t, n]).translateExtent(r), f = nn(e).call(p);
  x({
    x: o.x,
    y: o.y,
    zoom: Jr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  p.wheelDelta(dd);
  function w(z, k) {
    return f ? new Promise((O) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).transform(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: k, onPaneContextMenu: O, userSelectionActive: C, panOnScroll: E, panOnDrag: T, panOnScrollMode: K, panOnScrollSpeed: W, preventScrolling: G, zoomOnPinch: L, zoomOnScroll: F, zoomOnDoubleClick: Y, zoomActivationKeyPressed: J, lib: R, onTransformChange: X, connectionInProgress: U, paneClickDistance: ne, selectionOnDrag: re }) {
    C && !u.isZoomingOrPanning && b();
    const ee = E && !J && !C;
    p.clickDistance(re ? 1 / 0 : !zn(ne) || ne < 0 ? 0 : ne);
    const me = ee ? pm({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: W,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : hm({
      noWheelClassName: z,
      preventScrolling: G,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", me, { passive: !1 }), !C) {
      const ie = gm({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", ie);
      const ae = vm({
        zoomPanValues: u,
        panOnDrag: T,
        onPaneContextMenu: !!O,
        onPanZoom: i,
        onTransformChange: X
      });
      p.on("zoom", ae);
      const ve = mm({
        zoomPanValues: u,
        panOnDrag: T,
        panOnScroll: E,
        onPaneContextMenu: O,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", ve);
    }
    const de = ym({
      zoomActivationKeyPressed: J,
      panOnDrag: T,
      zoomOnScroll: F,
      panOnScroll: E,
      zoomOnDoubleClick: Y,
      zoomOnPinch: L,
      userSelectionActive: C,
      noPanClassName: k,
      noWheelClassName: z,
      lib: R,
      connectionInProgress: U
    });
    p.filter(de), Y ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function x(z, k, O) {
    const C = ws(z), E = p?.constrain()(C, k, O);
    return E && await w(E), new Promise((T) => T(E));
  }
  async function $(z, k) {
    const O = ws(z);
    return await w(O, k), new Promise((C) => C(O));
  }
  function _(z) {
    if (f) {
      const k = ws(z), O = f.property("__zoom");
      (O.k !== z.zoom || O.x !== z.x || O.y !== z.y) && p?.transform(f, k, null, { sync: !0 });
    }
  }
  function S() {
    const z = f ? jc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function N(z, k) {
    return f ? new Promise((O) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).scaleTo(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z, k) {
    return f ? new Promise((O) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).scaleBy(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function Z(z) {
    p?.scaleExtent(z);
  }
  function H(z) {
    p?.translateExtent(z);
  }
  function I(z) {
    const k = !zn(z) || z < 0 ? 0 : z;
    p?.clickDistance(k);
  }
  return {
    update: m,
    destroy: b,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: N,
    scaleBy: V,
    setScaleExtent: Z,
    setTranslateExtent: H,
    syncViewport: _,
    setClickDistance: I
  };
}
var Zl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Zl || (Zl = {}));
var bm = /* @__PURE__ */ te("<div><!></div>");
function ur(e, t) {
  pe(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => Ce.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), y = /* @__PURE__ */ Xe(t, [
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
  const w = ar("svelteflow__node_id"), m = ar("svelteflow__node_connectable");
  let b = /* @__PURE__ */ P(() => r() === "target"), x = /* @__PURE__ */ P(() => a() !== void 0 ? a() : m.value), $ = wn(), _ = /* @__PURE__ */ P(() => $.ariaLabelConfig), S = null;
  Zu(() => {
    if (p() || f()) {
      $.edges;
      let L = $.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !w0(L, S)) {
        const F = L ?? /* @__PURE__ */ new Map();
        Tl(S, F, f()), Tl(F, S, p());
      }
      S = new Map(L);
    }
  });
  let N = /* @__PURE__ */ P(() => {
    if (!$.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: F, isValid: Y } = $.connection, J = L && L.nodeId === w && L.type === r() && L.id === n(), R = F && F.nodeId === w && F.type === r() && F.id === n(), X = $.connectionMode === Gr.Strict ? L?.type !== r() : w !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      J,
      R,
      X,
      R && Y
    ];
  }), V = /* @__PURE__ */ P(() => Vo(c(N), 5)), Z = /* @__PURE__ */ P(() => c(V)[0]), H = /* @__PURE__ */ P(() => c(V)[1]), I = /* @__PURE__ */ P(() => c(V)[2]), z = /* @__PURE__ */ P(() => c(V)[3]), k = /* @__PURE__ */ P(() => c(V)[4]);
  function O(L) {
    const F = $.onbeforeconnect ? $.onbeforeconnect(L) : L;
    F && ($.addEdge(F), $.onconnect?.(L));
  }
  function C(L) {
    const F = Qc(L);
    L.currentTarget && (F && L.button === 0 || !F) && jl.onPointerDown(L, {
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
      onConnect: O,
      onConnectStart: (Y, J) => {
        $.onconnectstart?.(Y, {
          nodeId: J.nodeId,
          handleId: J.handleId,
          handleType: J.handleType
        });
      },
      onConnectEnd: (Y, J) => {
        $.onconnectend?.(Y, J);
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
    const F = Jc(L.target), Y = d() ?? $.isValidConnection, { connectionMode: J, clickConnectStartHandle: R, flowId: X, nodeLookup: U } = $, { connection: ne, isValid: re } = jl.isValid(L, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: J,
      fromNodeId: R.nodeId,
      fromHandleId: R.id ?? null,
      fromType: R.type,
      isValidConnection: Y,
      flowId: X,
      doc: F,
      lib: "svelte",
      nodeLookup: U
    });
    re && ne && O(ne);
    const ee = structuredClone(_u($.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, $.onclickconnectend?.(L, ee), $.clickConnectStartHandle = null;
  }
  var T = {
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
  }, K = bm(), W = () => {
  };
  gt(K, () => ({
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
    onmousedown: C,
    ontouchstart: C,
    onclick: $.clickConnect ? E : void 0,
    onkeypress: W,
    style: i(),
    role: "button",
    "aria-label": c(_)["handle.ariaLabel"],
    tabindex: "-1",
    ...y,
    [er]: {
      valid: c(k),
      connectingto: c(I),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(Z) || c(z)) && (c(Z) || $.clickConnectStartHandle ? u() : l())
    }
  }));
  var G = B(K);
  return st(G, () => h() ?? Pt), j(K), D(e, K), he(T);
}
ce(
  ur,
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
  pe(t, !0);
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
  ur(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = M(a), u = M(l);
  return ur(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => Je(l, ` ${n()?.label ?? ""} `)), D(e, s), he(i);
}
ce(Na, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var _m = /* @__PURE__ */ te(" <!>", 1);
function fd(e, t) {
  pe(t, !0);
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
  xe();
  var i = _m(), s = se(i), a = M(s);
  return ur(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), D(e, i), he(o);
}
ce(fd, { data: {}, sourcePosition: {} }, [], [], !0);
var Cm = /* @__PURE__ */ te(" <!>", 1);
function pd(e, t) {
  pe(t, !0);
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
  xe();
  var i = Cm(), s = se(i), a = M(s);
  return ur(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), D(e, i), he(o);
}
ce(pd, { data: {}, targetPosition: {} }, [], [], !0);
function hd(e, t) {
}
ce(hd, {}, [], [], !0);
function xs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gd(e, t) {
  const n = /* @__PURE__ */ P(wn), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? xs(e, c(r), t) : o = la(() => {
    nt(() => {
      xs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      xs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function vd() {
  let e = /* @__PURE__ */ Oe(typeof window > "u");
  if (c(e)) {
    const t = la(() => {
      nt(() => {
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
function Tn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Li = {
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
  pe(t, !0), We(e, Sm);
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
  const p = wn(), f = ar("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ P(() => p.visible.edges.get(f)?.zIndex);
  var y = {
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
  }, w = km(), m = () => {
    s() && p.handleEdgeSelection(f);
  };
  gt(
    w,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: m,
      ...d,
      [$n]: x
    }),
    [
      () => ({
        display: vd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Tn(o()),
        height: Tn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = B(w);
  return st(b, () => u() ?? Pt), j(w), kt(w, (x, $) => gd?.(x, $), () => "edge-labels"), D(e, w), he(y);
}
ce(
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
var Em = /* @__PURE__ */ be("<path></path>"), Pm = /* @__PURE__ */ be('<path fill="none"></path><!><!>', 1);
function Fo(e, t) {
  pe(t, !0);
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
  var y = {
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
  }, w = Pm(), m = se(w), b = M(m);
  {
    var x = (S) => {
      var N = Em();
      gt(N, () => ({
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
  var $ = M(b);
  {
    var _ = (S) => {
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
        children: (N, V) => {
          xe();
          var Z = Pe();
          Ee(() => Je(Z, o())), D(N, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ue($, (S) => {
      o() && S(_);
    });
  }
  return Ee(() => {
    ke(m, "id", n()), ke(m, "d", r()), Zt(m, 0, Gn(["svelte-flow__edge-path", f()])), ke(m, "marker-start", l()), ke(m, "marker-end", u()), $t(m, d());
  }), D(e, w), he(y);
}
ce(
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
  pe(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), y = v(t, "targetX", 7), w = v(t, "targetY", 7), m = /* @__PURE__ */ P(() => ed({
    sourceX: d(),
    sourceY: p(),
    targetX: y(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ P(() => Vo(c(m), 3)), x = /* @__PURE__ */ P(() => c(b)[0]), $ = /* @__PURE__ */ P(() => c(b)[1]), _ = /* @__PURE__ */ P(() => c(b)[2]);
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
      return y();
    },
    set targetX(N) {
      y(N), g();
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
      return c(_);
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
  }), he(S);
}
ce(
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
  pe(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), y = /* @__PURE__ */ P(() => Sa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ P(() => Vo(c(y), 3)), m = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(_) {
      n(_), g();
    },
    get label() {
      return r();
    },
    set label(_) {
      r(_), g();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(_) {
      o(_), g();
    },
    get style() {
      return i();
    },
    set style(_) {
      i(_), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(_) {
      l(_), g();
    },
    get sourceX() {
      return u();
    },
    set sourceX(_) {
      u(_), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(_) {
      d(_), g();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(_) {
      p(_), g();
    },
    get targetX() {
      return f();
    },
    set targetX(_) {
      f(_), g();
    },
    get targetY() {
      return h();
    },
    set targetY(_) {
      h(_), g();
    }
  };
  return Fo(e, {
    get path() {
      return c(m);
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
  }), he($);
}
ce(
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
  pe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ P(() => nd({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => Vo(c(f), 3)), y = /* @__PURE__ */ P(() => c(h)[0]), w = /* @__PURE__ */ P(() => c(h)[1]), m = /* @__PURE__ */ P(() => c(h)[2]);
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
      return c(y);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(m);
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
  }), he(b);
}
ce(
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
  pe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), y = /* @__PURE__ */ P(() => Sa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ P(() => Vo(c(y), 3)), m = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(_) {
      n(_), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(_) {
      r(_), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(_) {
      o(_), g();
    },
    get targetX() {
      return i();
    },
    set targetX(_) {
      i(_), g();
    },
    get targetY() {
      return s();
    },
    set targetY(_) {
      s(_), g();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(_) {
      a(_), g();
    },
    get label() {
      return l();
    },
    set label(_) {
      l(_), g();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(_) {
      u(_), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(_) {
      d(_), g();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(_) {
      p(_), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(_) {
      f(_), g();
    },
    get style() {
      return h();
    },
    set style(_) {
      h(_), g();
    }
  };
  return Fo(e, {
    get path() {
      return c(m);
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
  }), he($);
}
ce(
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
class Tm {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Tu(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Nm = /\(.+\)/, Om = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Dm extends Tm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Nm.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Om.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ds(o, "change", i)
    );
  }
}
function Lm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return $a(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
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
      const { visibleNodes: w, transform: m, width: b, height: x } = e;
      if (M0({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: x,
        transform: m
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
    const y = Z0({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    y && u.set(d.id, {
      ...n,
      ...d,
      ...y,
      zIndex: V0({
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
function Vm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Bo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ka(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Mm(e) {
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
        const { viewport: y, width: w, height: m } = this, b = [y.x, y.y, y.zoom];
        p = Lm(s, b, w, m), f = Bl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: w,
          height: m
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
    #v = /* @__PURE__ */ P(() => e.props.nodeExtent ?? Zs);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      Q(this.#v, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.translateExtent ?? Zs);
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
    #T = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#T);
    }
    set snapGrid(r) {
      Q(this.#T, r);
    }
    #N = /* @__PURE__ */ Oe(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      Q(this.#N, r);
    }
    #O = /* @__PURE__ */ Oe(null);
    get selectionRect() {
      return c(this.#O);
    }
    set selectionRect(r) {
      Q(this.#O, r);
    }
    #D = /* @__PURE__ */ Oe(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      Q(this.#D, r);
    }
    #L = /* @__PURE__ */ Oe(!1);
    get multiselectionKeyPressed() {
      return c(this.#L);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#L, r);
    }
    #V = /* @__PURE__ */ Oe(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      Q(this.#V, r);
    }
    #M = /* @__PURE__ */ Oe(!1);
    get panActivationKeyPressed() {
      return c(this.#M);
    }
    set panActivationKeyPressed(r) {
      Q(this.#M, r);
    }
    #A = /* @__PURE__ */ Oe(!1);
    get zoomActivationKeyPressed() {
      return c(this.#A);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#A, r);
    }
    #z = /* @__PURE__ */ Oe(null);
    get selectionRectMode() {
      return c(this.#z);
    }
    set selectionRectMode(r) {
      Q(this.#z, r);
    }
    #H = /* @__PURE__ */ Oe("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      Q(this.#H, r);
    }
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? Ni.Partial);
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
    #Y = /* @__PURE__ */ P(() => O0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      Q(this.#Y, r);
    }
    #W = /* @__PURE__ */ Oe(Vm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      Ks
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
    #X = /* @__PURE__ */ P(() => e.props.connectionMode ?? Gr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      Q(this.#X, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      Q(this.#G, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      Q(this.#J, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      Q(this.#U, r);
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
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ks, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function wn() {
  const e = ar(Vi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Vi = Symbol();
function Cd(e) {
  const t = Mm(e);
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
    t.edges = H0(I, t.edges);
  }
  const i = (I, z = !1) => {
    t.nodes = t.nodes.map((k) => {
      const O = I.get(k.id);
      return O ? { ...k, position: O.position, dragging: z } : k;
    });
  };
  function s(I) {
    const { changes: z, updatedInternals: k } = Q0(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!k)
      return;
    F0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const O = /* @__PURE__ */ new Map();
    for (const C of z) {
      const E = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!E)
        continue;
      const T = { ...E };
      switch (C.type) {
        case "dimensions": {
          const K = { ...T.measured, ...C.dimensions };
          C.setAttributes && (T.width = C.dimensions?.width ?? T.width, T.height = C.dimensions?.height ?? T.height), T.measured = K;
          break;
        }
        case "position":
          T.position = C.position ?? T.position;
          break;
      }
      O.set(C.id, T);
    }
    t.nodes = t.nodes.map((C) => O.get(C.id) ?? C);
  }
  function a(I) {
    const z = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = z, t.nodes = [...t.nodes], z.promise;
  }
  async function l(I, z, k) {
    const O = typeof k?.zoom < "u" ? k.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - I * O,
      y: t.height / 2 - z * O,
      zoom: O
    }, { duration: k?.duration, ease: k?.ease, interpolate: k?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(I, z) {
    const k = t.panZoom;
    return k ? k.scaleBy(I, z) : Promise.resolve(!1);
  }
  function d(I) {
    return u(1.2, I);
  }
  function p(I) {
    return u(1 / 1.2, I);
  }
  function f(I) {
    const z = t.panZoom;
    z && (z.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function h(I) {
    const z = t.panZoom;
    z && (z.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function y(I) {
    const z = t.panZoom;
    z && (z.setTranslateExtent(I), t.translateExtent = I);
  }
  function w(I, z = null) {
    let k = !1;
    const O = I.map((C) => (!z || z.has(C.id)) && C.selected ? (k = !0, { ...C, selected: !1 }) : C);
    return [k, O];
  }
  function m(I) {
    const z = I?.nodes ? new Set(I.nodes.map((K) => K.id)) : null, [k, O] = w(t.nodes, z);
    k && (t.nodes = O);
    const C = I?.edges ? new Set(I.edges.map((K) => K.id)) : null, [E, T] = w(t.edges, C);
    E && (t.edges = T);
  }
  function b(I) {
    const z = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((k) => {
      const O = I.includes(k.id), C = z && k.selected || O;
      return !!k.selected !== C ? { ...k, selected: C } : k;
    }), z || m({ nodes: [] });
  }
  function x(I) {
    const z = t.multiselectionKeyPressed;
    t.edges = t.edges.map((k) => {
      const O = I.includes(k.id), C = z && k.selected || O;
      return !!k.selected !== C ? { ...k, selected: C } : k;
    }), z || m({ edges: [] });
  }
  function $(I, z, k) {
    const O = t.nodeLookup.get(I);
    if (!O) {
      console.warn("012", Eo.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, O.selected ? (z || O.selected && t.multiselectionKeyPressed) && (m({ nodes: [O], edges: [] }), requestAnimationFrame(() => k?.blur())) : b([I]);
  }
  function _(I) {
    const z = t.edgeLookup.get(I);
    if (!z) {
      console.warn("012", Eo.error012(I));
      return;
    }
    (z.selectable || t.elementsSelectable && typeof z.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, z.selected ? z.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [z] }) : x([I]));
  }
  function S(I, z) {
    const { nodeExtent: k, snapGrid: O, nodeOrigin: C, nodeLookup: E, nodesDraggable: T, onerror: K } = t, W = /* @__PURE__ */ new Map(), G = O?.[0] ?? 5, L = O?.[1] ?? 5, F = I.x * G * z, Y = I.y * L * z;
    for (const J of E.values()) {
      if (!(J.selected && (J.draggable || T && typeof J.draggable > "u")))
        continue;
      let R = {
        x: J.internals.positionAbsolute.x + F,
        y: J.internals.positionAbsolute.y + Y
      };
      O && (R = Yo(R, O));
      const { position: X, positionAbsolute: U } = Yc({
        nodeId: J.id,
        nextPosition: R,
        nodeLookup: E,
        nodeExtent: k,
        nodeOrigin: C,
        onError: K
      });
      J.position = X, J.internals.positionAbsolute = U, W.set(J.id, J);
    }
    i(W);
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
  const V = (I) => {
    t._connection = { ...I };
  };
  function Z() {
    t._connection = Ks;
  }
  function H() {
    t.resetStoreValues(), m();
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
    setTranslateExtent: y,
    unselectNodesAndEdges: m,
    addSelectedNodes: b,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: _,
    moveSelectedNodes: S,
    panBy: N,
    updateConnection: V,
    cancelConnection: Z,
    reset: H
  });
}
function Am(e, t) {
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
    update(y) {
      f.update(y);
    }
  };
}
var zm = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function $d(e, t) {
  pe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), y = v(t, "onmove", 7), w = v(t, "onmoveend", 7), m = v(t, "oninit", 7), b = v(t, "children", 7), x = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: _ } = n();
  let S = !1;
  nt(() => {
    !S && n().viewportInitialized && (m()?.(), S = !0);
  });
  var N = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), g();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), g();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), g();
    },
    get paneClickDistance() {
      return p();
    },
    set paneClickDistance(H) {
      p(H), g();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(H) {
      f(H), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(H) {
      h(H), g();
    },
    get onmove() {
      return y();
    },
    set onmove(H) {
      y(H), g();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(H) {
      w(H), g();
    },
    get oninit() {
      return m();
    },
    set oninit(H) {
      m(H), g();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), g();
    }
  }, V = zm(), Z = B(V);
  return st(Z, b), j(V), kt(V, (H, I) => Am?.(H, I), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: _,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: h(),
    onPanZoom: y(),
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
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), D(e, V), he(N);
}
ce(
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
var Hm = /* @__PURE__ */ te("<div><!></div>");
function kd(e, t) {
  pe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), m = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ P(() => n().elementsSelectable && (c(m) || n().selectionRectMode === "user")), x = !1;
  function $(E) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const T = E.target === p, K = !T && !!E.target.closest(".nokey"), W = i() && T || n().selectionKeyPressed;
    if (K || !c(m) || !W || E.button !== 0 || !E.isPrimary)
      return;
    E.target?.setPointerCapture?.(E.pointerId), x = !1;
    const { x: G, y: L } = pn(E, f);
    n(n().selectionRect = { width: 0, height: 0, startX: G, startY: L, x: G, y: L }, !0), T || (E.stopPropagation(), E.preventDefault());
  }
  function _(E) {
    if (!c(m) || !f || !n().selectionRect)
      return;
    const T = pn(E, f), { startX: K = 0, startY: W = 0 } = n().selectionRect;
    if (!x) {
      const J = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(T.x - K, T.y - W) <= J)
        return;
      n().unselectNodesAndEdges(), l()?.(E);
    }
    x = !0;
    const G = {
      ...n().selectionRect,
      x: T.x < K ? T.x : K,
      y: T.y < W ? T.y : W,
      width: Math.abs(T.x - K),
      height: Math.abs(T.y - W)
    }, L = h, F = y;
    h = new Set($a(
      n().nodeLookup,
      G,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Ni.Partial,
      !0
    ).map((J) => J.id));
    const Y = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const J of h) {
      const R = n().connectionLookup.get(J);
      if (R)
        for (const { edgeId: X } of R.values()) {
          const U = n().edgeLookup.get(X);
          U && (U.selectable ?? Y) && y.add(X);
        }
    }
    Fl(L, h) || n(n().nodes = n().nodes.map(Wl(h)), !0), Fl(F, y) || n(n().edges = n().edges.map(Wl(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = G, !0);
  }
  function S(E) {
    E.button === 0 && (E.target?.releasePointerCapture?.(E.pointerId), !x && E.target === p && Z?.(E), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), x && u()?.(E));
  }
  const N = (E) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      E.preventDefault();
      return;
    }
    a()?.({ event: E });
  }, V = (E) => {
    x && (E.stopPropagation(), x = !1);
  };
  function Z(E) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: E }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
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
  }, I = Hm();
  let z;
  var k = /* @__PURE__ */ P(() => c(b) ? void 0 : Yl(Z, p));
  I.__click = function(...E) {
    c(k)?.apply(this, E);
  }, I.__pointermove = function(...E) {
    (c(b) ? _ : void 0)?.apply(this, E);
  }, I.__pointerup = function(...E) {
    (c(b) ? S : void 0)?.apply(this, E);
  };
  var O = /* @__PURE__ */ P(() => Yl(N, p));
  I.__contextmenu = function(...E) {
    c(O)?.apply(this, E);
  };
  var C = B(I);
  return st(C, d), j(I), Kt(I, (E) => p = E, () => p), Ee((E) => z = Zt(I, 1, "svelte-flow__pane svelte-flow__container", null, z, E), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(m)
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
      (c(b) ? V : void 0)?.apply(this, E);
    },
    !0
  ), D(e, I), he(H);
}
hr(["click", "pointermove", "pointerup", "contextmenu"]);
ce(
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
  pe(t, !0);
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
  return st(a, r), j(i), Ee(() => s = $t(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), he(o);
}
ce(Sd, { store: {}, children: {} }, [], [], !0);
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
  pe(t, !0), We(e, Zm);
  let n = v(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), g();
    }
  }, o = jm(), i = se(o), s = B(i, !0);
  j(i);
  var a = M(i, 2), l = B(a, !0);
  j(a);
  var u = M(a, 2);
  {
    var d = (p) => {
      var f = Rm(), h = B(f, !0);
      j(f), Ee(() => {
        ke(f, "id", `${Km}-${n().flowId}`), Je(h, n().ariaLiveMessage);
      }), D(p, f);
    };
    ue(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Ee(() => {
    ke(i, "id", `${Td}-${n().flowId}`), Je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Nd}-${n().flowId}`), Je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), he(r);
}
ce(Pd, { store: {} }, [], [], !0);
const Td = "svelte-flow__node-desc", Nd = "svelte-flow__edge-desc", Km = "svelte-flow__aria-live";
var Bm = /* @__PURE__ */ te("<div><!></div>");
function Od(e, t) {
  pe(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ P(() => Dt(r().data, () => ({}), !0)), w = /* @__PURE__ */ P(() => Dt(r().selected, !1)), m = /* @__PURE__ */ P(() => r().draggable), b = /* @__PURE__ */ P(() => r().selectable), x = /* @__PURE__ */ P(() => Dt(r().deletable, !0)), $ = /* @__PURE__ */ P(() => r().connectable), _ = /* @__PURE__ */ P(() => r().focusable), S = /* @__PURE__ */ P(() => Dt(r().hidden, !1)), N = /* @__PURE__ */ P(() => Dt(r().dragging, !1)), V = /* @__PURE__ */ P(() => Dt(r().style, "")), Z = /* @__PURE__ */ P(() => r().class), H = /* @__PURE__ */ P(() => Dt(r().type, "default")), I = /* @__PURE__ */ P(() => r().parentId), z = /* @__PURE__ */ P(() => r().sourcePosition), k = /* @__PURE__ */ P(() => r().targetPosition), O = /* @__PURE__ */ P(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ P(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ P(() => r().initialWidth), T = /* @__PURE__ */ P(() => r().initialHeight), K = /* @__PURE__ */ P(() => r().width), W = /* @__PURE__ */ P(() => r().height), G = /* @__PURE__ */ P(() => r().dragHandle), L = /* @__PURE__ */ P(() => Dt(r().internals.z, 0)), F = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), Y = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), J = /* @__PURE__ */ P(() => r().internals.userNode), { id: R } = r(), X = /* @__PURE__ */ P(() => c(m) ?? n().nodesDraggable), U = /* @__PURE__ */ P(() => c(b) ?? n().elementsSelectable), ne = /* @__PURE__ */ P(() => c($) ?? n().nodesConnectable), re = /* @__PURE__ */ P(() => Xc(r())), ee = /* @__PURE__ */ P(() => !!r().internals.handleBounds), me = /* @__PURE__ */ P(() => c(re) && c(ee)), de = /* @__PURE__ */ P(() => c(_) ?? n().nodesFocusable);
  function ie(fe) {
    return n().parentLookup.has(fe);
  }
  let ae = /* @__PURE__ */ P(() => ie(R)), ve = /* @__PURE__ */ Oe(null), ye = null, we = c(H), le = c(z), _e = c(k), Me = /* @__PURE__ */ P(() => n().nodeTypes[c(H)] ?? Na), q = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Br("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Br("svelteflow__node_id", R);
  let Ye = /* @__PURE__ */ P(() => {
    const fe = c(O) === void 0 ? c(K) ?? c(E) : c(K), Te = c(C) === void 0 ? c(W) ?? c(T) : c(W);
    if (!(fe === void 0 && Te === void 0 && c(V) === void 0))
      return `${c(V)};${fe ? `width:${Tn(fe)};` : ""}${Te ? `height:${Tn(Te)};` : ""}`;
  });
  nt(() => {
    (c(H) !== we || c(z) !== le || c(k) !== _e) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[R, { id: R, nodeElement: c(ve), force: !0 }]]));
    }), we = c(H), le = c(z), _e = c(k);
  }), nt(() => {
    o() && (!c(me) || c(ve) !== ye) && (ye && o().unobserve(ye), c(ve) && o().observe(c(ve)), ye = c(ve));
  }), Ro(() => {
    ye && o()?.unobserve(ye);
  });
  function ze(fe) {
    c(U) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(R), s()?.({ node: c(J), event: fe });
  }
  function Ke(fe) {
    if (!(Uc(fe) || n().disableKeyboardA11y))
      if (Kc.includes(fe.key) && c(U)) {
        const Te = fe.key === "Escape";
        n().handleNodeSelection(R, Te, c(ve));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(Li, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = c(q)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Li[fe.key], fe.shiftKey ? 4 : 1));
  }
  const Fe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: fe, height: Te, viewport: rt } = n();
    $a(/* @__PURE__ */ new Map([[R, r()]]), { x: 0, y: 0, width: fe, height: Te }, [rt.x, rt.y, rt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: rt.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(fe) {
      n(fe), g();
    },
    get node() {
      return r();
    },
    set node(fe) {
      r(fe), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(fe) {
      o(fe), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(fe) {
      i(fe), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(fe) {
      s(fe), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(fe) {
      a(fe), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(fe) {
      l(fe), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(fe) {
      u(fe), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(fe) {
      d(fe), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(fe) {
      p(fe), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(fe) {
      f(fe), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(fe) {
      h(fe), g();
    }
  }, vt = Ne(), Bt = se(vt);
  {
    var lt = (fe) => {
      var Te = Bm();
      gt(Te, () => ({
        "data-id": R,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(Z)
        ],
        style: c(Ye),
        onclick: ze,
        onpointerenter: d() ? (Ze) => d()({ node: c(J), event: Ze }) : void 0,
        onpointerleave: p() ? (Ze) => p()({ node: c(J), event: Ze }) : void 0,
        onpointermove: f() ? (Ze) => f()({ node: c(J), event: Ze }) : void 0,
        oncontextmenu: h() ? (Ze) => h()({ node: c(J), event: Ze }) : void 0,
        onkeydown: c(de) ? Ke : void 0,
        onfocus: c(de) ? Fe : void 0,
        tabIndex: c(de) ? 0 : void 0,
        role: r().ariaRole ?? (c(de) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Td}-${n().flowId}`,
        ...r().domAttributes,
        [er]: {
          dragging: c(N),
          selected: c(w),
          draggable: c(X),
          connectable: c(ne),
          selectable: c(U),
          nopan: c(X),
          parent: c(ae)
        },
        [$n]: {
          "z-index": c(L),
          transform: `translate(${c(F) ?? ""}px, ${c(Y) ?? ""}px)`,
          visibility: c(re) ? "visible" : "hidden"
        }
      }));
      var rt = B(Te);
      qi(rt, () => c(Me), (Ze, ot) => {
        ot(Ze, {
          get data() {
            return c(y);
          },
          get id() {
            return R;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(z);
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
            return c(X);
          },
          get dragHandle() {
            return c(G);
          },
          get parentId() {
            return c(I);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(F);
          },
          get positionAbsoluteY() {
            return c(Y);
          },
          get width() {
            return c(K);
          },
          get height() {
            return c(W);
          }
        });
      }), j(Te), kt(Te, (Ze, ot) => Ed?.(Ze, ot), () => ({
        nodeId: R,
        isSelectable: c(U),
        disabled: !c(X),
        handleSelector: c(G),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ze, ot, Yt, pt) => {
          a()?.({ event: Ze, targetNode: Yt, nodes: pt });
        },
        onDragStart: (Ze, ot, Yt, pt) => {
          l()?.({ event: Ze, targetNode: Yt, nodes: pt });
        },
        onDragStop: (Ze, ot, Yt, pt) => {
          u()?.({ event: Ze, targetNode: Yt, nodes: pt });
        },
        store: n()
      })), Kt(Te, (Ze) => Q(ve, Ze), () => c(ve)), D(fe, Te);
    };
    ue(Bt, (fe) => {
      c(S) || fe(lt);
    });
  }
  return D(e, vt), he(tt);
}
ce(
  Od,
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
  pe(t, !0);
  let n = v(t, "store", 15), r = v(t, "nodeClickDistance", 7), o = v(t, "onnodeclick", 7), i = v(t, "onnodecontextmenu", 7), s = v(t, "onnodepointerenter", 7), a = v(t, "onnodepointermove", 7), l = v(t, "onnodepointerleave", 7), u = v(t, "onnodedrag", 7), d = v(t, "onnodedragstart", 7), p = v(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const m = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      m.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(m);
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
  }, y = Ym();
  return Tt(y, 21, () => n().visible.nodes.values(), (w) => w.id, (w, m) => {
    Od(w, {
      get node() {
        return c(m);
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
  }), j(y), D(e, y), he(h);
}
ce(
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
var Wm = /* @__PURE__ */ be('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Ld(e, t) {
  pe(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), p = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), y = /* @__PURE__ */ P(() => n().sourcePosition), w = /* @__PURE__ */ P(() => n().targetPosition), m = /* @__PURE__ */ P(() => Dt(n().animated, !1)), b = /* @__PURE__ */ P(() => Dt(n().selected, !1)), x = /* @__PURE__ */ P(() => n().label), $ = /* @__PURE__ */ P(() => n().labelStyle), _ = /* @__PURE__ */ P(() => Dt(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), N = /* @__PURE__ */ P(() => n().interactionWidth), V = /* @__PURE__ */ P(() => Dt(n().type, "default")), Z = /* @__PURE__ */ P(() => n().sourceHandle), H = /* @__PURE__ */ P(() => n().targetHandle), I = /* @__PURE__ */ P(() => n().markerStart), z = /* @__PURE__ */ P(() => n().markerEnd), k = /* @__PURE__ */ P(() => n().selectable), O = /* @__PURE__ */ P(() => n().focusable), C = /* @__PURE__ */ P(() => Dt(n().deletable, !0)), E = /* @__PURE__ */ P(() => n().hidden), T = /* @__PURE__ */ P(() => n().zIndex), K = /* @__PURE__ */ P(() => n().class), W = /* @__PURE__ */ P(() => n().ariaLabel), G = null;
  const { id: L } = n();
  Br("svelteflow__edge_id", L);
  let F = /* @__PURE__ */ P(() => c(k) ?? r().elementsSelectable), Y = /* @__PURE__ */ P(() => c(O) ?? r().edgesFocusable), J = /* @__PURE__ */ P(() => r().edgeTypes[c(V)] ?? Oa), R = /* @__PURE__ */ P(() => c(I) ? `url('#${Ys(c(I), r().flowId)}')` : void 0), X = /* @__PURE__ */ P(() => c(z) ? `url('#${Ys(c(z), r().flowId)}')` : void 0);
  function U(ae) {
    const ve = r().edgeLookup.get(L);
    ve && (c(F) && r().handleEdgeSelection(L), o()?.({ event: ae, edge: ve }));
  }
  function ne(ae, ve) {
    const ye = r().edgeLookup.get(L);
    ye && ve({ event: ae, edge: ye });
  }
  function re(ae) {
    if (!r().disableKeyboardA11y && Kc.includes(ae.key) && c(F)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: ye } = r();
      ae.key === "Escape" ? (G?.blur(), ve({ edges: [n()] })) : ye([L]);
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
  }, me = Ne(), de = se(me);
  {
    var ie = (ae) => {
      var ve = Wm();
      let ye;
      var we = B(ve);
      gt(we, () => ({
        class: ["svelte-flow__edge", c(K)],
        "data-id": L,
        onclick: U,
        oncontextmenu: i() ? (_e) => {
          ne(_e, i());
        } : void 0,
        onpointerenter: s() ? (_e) => {
          ne(_e, s());
        } : void 0,
        onpointerleave: a() ? (_e) => {
          ne(_e, a());
        } : void 0,
        "aria-label": c(W) === null ? void 0 : c(W) ? c(W) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(Y) ? `${Nd}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(Y) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(Y) ? re : void 0,
        tabindex: c(Y) ? 0 : void 0,
        ...n().domAttributes,
        [er]: {
          animated: c(m),
          selected: c(b),
          selectable: c(F)
        }
      }));
      var le = B(we);
      qi(le, () => c(J), (_e, Me) => {
        Me(_e, {
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
            return c(y);
          },
          get targetPosition() {
            return c(w);
          },
          get animated() {
            return c(m);
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
            return c(_);
          },
          get style() {
            return c(S);
          },
          get interactionWidth() {
            return c(N);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(Z);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(R);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), j(we), Kt(we, (_e) => G = _e, () => G), j(ve), Ee(() => ye = $t(ve, "", ye, { "z-index": c(T) })), D(ae, ve);
    };
    ue(de, (ae) => {
      c(E) || ae(ie);
    });
  }
  return D(e, me), he(ee);
}
ce(
  Ld,
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
Mp();
var Fm = /* @__PURE__ */ be("<defs></defs>");
function Vd(e, t) {
  pe(t, !1);
  const n = wn();
  dc();
  var r = Fm();
  Tt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Md(o, Ue(() => c(i)));
  }), j(r), D(e, r), he();
}
ce(Vd, {}, [], [], !0);
var qm = /* @__PURE__ */ be('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Xm = /* @__PURE__ */ be('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Gm = /* @__PURE__ */ be('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Md(e, t) {
  pe(t, !0);
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
  }, p = Gm(), f = B(p);
  {
    var h = (w) => {
      var m = qm();
      let b;
      Ee(() => {
        ke(m, "stroke-width", u()), b = $t(m, "", b, { stroke: l() });
      }), D(w, m);
    }, y = (w) => {
      var m = Ne(), b = se(m);
      {
        var x = ($) => {
          var _ = Xm();
          let S;
          Ee(() => {
            ke(_, "stroke-width", u()), S = $t(_, "", S, { stroke: l(), fill: l() });
          }), D($, _);
        };
        ue(
          b,
          ($) => {
            r() === Po.ArrowClosed && $(x);
          },
          !0
        );
      }
      D(w, m);
    };
    ue(f, (w) => {
      r() === Po.Arrow ? w(h) : w(y, !1);
    });
  }
  return j(p), Ee(() => {
    ke(p, "id", n()), ke(p, "markerWidth", `${o()}`), ke(p, "markerHeight", `${i()}`), ke(p, "markerUnits", s()), ke(p, "orient", a());
  }), D(e, p), he(d);
}
ce(
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
var Jm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ad(e, t) {
  pe(t, !0);
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
  }, l = Jm(), u = B(l), d = B(u);
  Vd(d, {}), j(u);
  var p = M(u, 2);
  return Tt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    Ld(f, {
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
      set store(y) {
        n(y);
      }
    });
  }), j(l), D(e, l), he(a);
}
ce(
  Ad,
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
var Um = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Qm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Da(e, t) {
  pe(t, !0), We(e, Qm);
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
      var f = Um();
      let h;
      Ee((y) => h = $t(f, "", h, y), [
        () => ({
          width: typeof o() == "string" ? o() : Tn(o()),
          height: typeof i() == "string" ? i() : Tn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(p, f);
    };
    ue(u, (p) => {
      s() && p(d);
    });
  }
  return D(e, l), he(a);
}
ce(Da, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var ey = /* @__PURE__ */ te("<div><!></div>");
const ty = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function zd(e, t) {
  pe(t, !0), We(e, ty);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Oe(void 0);
  nt(() => {
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
    Object.prototype.hasOwnProperty.call(Li, b.key) && (b.preventDefault(), n().moveSelectedNodes(Li[b.key], b.shiftKey ? 4 : 1));
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
  }, y = Ne(), w = se(y);
  {
    var m = (b) => {
      var x = ey();
      x.__contextmenu = d, x.__click = p, x.__keydown = function(...S) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, S);
      };
      let $;
      var _ = B(x);
      Da(_, { width: "100%", height: "100%", x: 0, y: 0 }), j(x), kt(x, (S, N) => Ed?.(S, N), () => ({
        disabled: !1,
        store: n(),
        onDrag: (S, N, V, Z) => {
          r()?.({ event: S, targetNode: null, nodes: Z });
        },
        onDragStart: (S, N, V, Z) => {
          o()?.({ event: S, targetNode: null, nodes: Z });
        },
        onDragStop: (S, N, V, Z) => {
          i()?.({ event: S, targetNode: null, nodes: Z });
        }
      })), Kt(x, (S) => Q(l, S), () => c(l)), Ee(
        (S) => {
          Zt(x, 1, Gn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), ke(x, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = $t(x, "", $, S);
        },
        [
          () => ({
            width: Tn(c(u).width),
            height: Tn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), D(b, x);
    };
    ue(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && zn(c(u).x) && zn(c(u).y) && b(m);
    });
  }
  return D(e, y), he(h);
}
hr(["contextmenu", "click", "keydown"]);
ce(
  zd,
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
function _n(e, t) {
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
      }, { modifier: f, key: h, callback: y, preventDefault: w, enabled: m } = p;
      if (m) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let $ = !1;
          for (const _ of x)
            if ((Array.isArray(_) ? _ : [_]).reduce(
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
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), y?.(b);
      }
    }
  }
  let s;
  return n && (s = Ds(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ds(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function wt() {
  const e = /* @__PURE__ */ P(wn), t = (i) => {
    const s = Kl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? N0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ur(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = xt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Kl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = xt(() => c(e).edges).map((l) => {
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
      const l = Ol(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Ur(p), h = To(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ol(i) ? i : t(i);
      if (!l)
        return !1;
      const u = To(l, s);
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
      return a && (c(e).nodes = xt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = xt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
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
function Hd(e, t) {
  pe(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => br() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => br() ? "Meta" : "Control"), { deleteElements: l } = wt();
  function u(m) {
    return m !== null && typeof m == "object";
  }
  function d(m) {
    return u(m) ? m.modifier || [] : [];
  }
  function p(m) {
    return m == null ? "" : u(m) ? m.key : m;
  }
  function f(m, b) {
    return (Array.isArray(m) ? m : [m]).map((x) => {
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
  function y() {
    const m = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: m, edges: b });
  }
  var w = {
    get store() {
      return n();
    },
    set store(m) {
      n(m), g();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(m = "Shift") {
      r(m), g();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(m = br() ? "Meta" : "Control") {
      o(m), g();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(m = "Backspace") {
      i(m), g();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(m = " ") {
      s(m), g();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(m = br() ? "Meta" : "Control") {
      a(m), g();
    }
  };
  return _i("blur", At, h), _i("contextmenu", At, h), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !Uc(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(At, (m, b) => _n?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), he(w);
}
ce(
  Hd,
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
var ry = /* @__PURE__ */ be('<path fill="none" class="svelte-flow__connection-path"></path>'), oy = /* @__PURE__ */ be('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Id(e, t) {
  pe(t, !0);
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
        const [h] = Sa({
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
      var h = oy(), y = B(h), w = B(y);
      {
        var m = (x) => {
          var $ = Ne(), _ = se($);
          qi(_, s, (S, N) => {
            N(S, {});
          }), D(x, $);
        }, b = (x) => {
          var $ = ry();
          Ee(() => {
            ke($, "d", c(a)), $t($, i());
          }), D(x, $);
        };
        ue(w, (x) => {
          s() ? x(m) : x(b, !1);
        });
      }
      j(y), j(h), Ee(
        (x) => {
          ke(h, "width", n().width), ke(h, "height", n().height), $t(h, o()), Zt(y, 0, x);
        },
        [
          () => Gn([
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
  return D(e, u), he(l);
}
ce(
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
  pe(t, !0);
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
  gt(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return st(d, () => i() ?? Pt), j(u), D(e, u), he(l);
}
ce(qo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var sy = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rd(e, t) {
  pe(t, !0);
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
  return D(e, i), he(o);
}
ce(Rd, { proOptions: {}, position: {} }, [], [], !0);
var ay = /* @__PURE__ */ te("<div><!></div>");
const ly = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function jd(e, t) {
  pe(t, !0), We(e, ly);
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
  function f(m) {
    m.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(m);
  }
  var h = {
    get width() {
      return n();
    },
    set width(m) {
      n(m), g();
    },
    get height() {
      return r();
    },
    set height(m) {
      r(m), g();
    },
    get colorMode() {
      return o();
    },
    set colorMode(m) {
      o(m), g();
    },
    get domNode() {
      return i();
    },
    set domNode(m) {
      i(m), g();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(m) {
      s(m), g();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(m) {
      a(m), g();
    },
    get children() {
      return l();
    },
    set children(m) {
      l(m), g();
    },
    get rest() {
      return u();
    },
    set rest(m) {
      u(m), g();
    }
  }, y = ay();
  gt(
    y,
    (m) => ({
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
      [$n]: m
    }),
    [
      () => ({ width: Tn(n()), height: Tn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = B(y);
  return st(w, () => l() ?? Pt), j(y), Kt(y, (m) => i(m), () => i()), al(y, "clientHeight", a), al(y, "clientWidth", s), D(e, y), he(h);
}
ce(
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
  pe(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), y = v(t, "onmove", 7), w = v(t, "oninit", 7), m = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), x = v(t, "onnodedrag", 7), $ = v(t, "onnodedragstart", 7), _ = v(t, "onnodedragstop", 7), S = v(t, "onnodepointerenter", 7), N = v(t, "onnodepointermove", 7), V = v(t, "onnodepointerleave", 7), Z = v(t, "onselectionclick", 7), H = v(t, "onselectioncontextmenu", 7), I = v(t, "onselectionstart", 7), z = v(t, "onselectionend", 7), k = v(t, "onedgeclick", 7), O = v(t, "onedgecontextmenu", 7), C = v(t, "onedgepointerenter", 7), E = v(t, "onedgepointerleave", 7), T = v(t, "onpaneclick", 7), K = v(t, "onpanecontextmenu", 7), W = v(t, "panOnScrollMode", 23, () => Cr.Free), G = v(t, "preventScrolling", 7, !0), L = v(t, "zoomOnScroll", 7, !0), F = v(t, "zoomOnDoubleClick", 7, !0), Y = v(t, "zoomOnPinch", 7, !0), J = v(t, "panOnScroll", 7, !1), R = v(t, "panOnScrollSpeed", 7, 0.5), X = v(t, "panOnDrag", 7, !0), U = v(t, "selectionOnDrag", 7, !1), ne = v(t, "connectionLineComponent", 7), re = v(t, "connectionLineStyle", 7), ee = v(t, "connectionLineContainerStyle", 7), me = v(t, "connectionLineType", 23, () => Mn.Bezier), de = v(t, "attributionPosition", 7), ie = v(t, "children", 7), ae = v(t, "nodes", 31, () => rn([])), ve = v(t, "edges", 31, () => rn([])), ye = v(t, "viewport", 31, () => {
  }), we = /* @__PURE__ */ Xe(t, [
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
  ]), le = Cd({
    props: we,
    width: n(),
    height: r(),
    get nodes() {
      return ae();
    },
    set nodes(q) {
      ae(q);
    },
    get edges() {
      return ve();
    },
    set edges(q) {
      ve(q);
    },
    get viewport() {
      return ye();
    },
    set viewport(q) {
      ye(q);
    }
  });
  const _e = ar(Vi);
  _e && _e.setStore && _e.setStore(le), Br(Vi, {
    provider: !1,
    getStore() {
      return le;
    }
  }), nt(() => {
    const q = { nodes: le.selectedNodes, edges: le.selectedEdges };
    xt(() => t.onselectionchange)?.(q);
    for (const Ye of le.selectionChangeHandlers.values())
      Ye(q);
  }), Ro(() => {
    le.reset();
  });
  var Me = {
    get width() {
      return n();
    },
    set width(q) {
      n(q), g();
    },
    get height() {
      return r();
    },
    set height(q) {
      r(q), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(q) {
      o(q), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(q) {
      i(q), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(q) {
      s(q), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(q) {
      a(q), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(q) {
      l(q), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(q) {
      u(q), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(q = 1) {
      d(q), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(q = 1) {
      p(q), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(q) {
      f(q), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(q) {
      h(q), g();
    },
    get onmove() {
      return y();
    },
    set onmove(q) {
      y(q), g();
    },
    get oninit() {
      return w();
    },
    set oninit(q) {
      w(q), g();
    },
    get onnodeclick() {
      return m();
    },
    set onnodeclick(q) {
      m(q), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(q) {
      b(q), g();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(q) {
      x(q), g();
    },
    get onnodedragstart() {
      return $();
    },
    set onnodedragstart(q) {
      $(q), g();
    },
    get onnodedragstop() {
      return _();
    },
    set onnodedragstop(q) {
      _(q), g();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(q) {
      S(q), g();
    },
    get onnodepointermove() {
      return N();
    },
    set onnodepointermove(q) {
      N(q), g();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(q) {
      V(q), g();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(q) {
      Z(q), g();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(q) {
      H(q), g();
    },
    get onselectionstart() {
      return I();
    },
    set onselectionstart(q) {
      I(q), g();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(q) {
      z(q), g();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(q) {
      k(q), g();
    },
    get onedgecontextmenu() {
      return O();
    },
    set onedgecontextmenu(q) {
      O(q), g();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(q) {
      C(q), g();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(q) {
      E(q), g();
    },
    get onpaneclick() {
      return T();
    },
    set onpaneclick(q) {
      T(q), g();
    },
    get onpanecontextmenu() {
      return K();
    },
    set onpanecontextmenu(q) {
      K(q), g();
    },
    get panOnScrollMode() {
      return W();
    },
    set panOnScrollMode(q = Cr.Free) {
      W(q), g();
    },
    get preventScrolling() {
      return G();
    },
    set preventScrolling(q = !0) {
      G(q), g();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(q = !0) {
      L(q), g();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(q = !0) {
      F(q), g();
    },
    get zoomOnPinch() {
      return Y();
    },
    set zoomOnPinch(q = !0) {
      Y(q), g();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(q = !1) {
      J(q), g();
    },
    get panOnScrollSpeed() {
      return R();
    },
    set panOnScrollSpeed(q = 0.5) {
      R(q), g();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(q = !0) {
      X(q), g();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(q = !1) {
      U(q), g();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(q) {
      ne(q), g();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(q) {
      re(q), g();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(q) {
      ee(q), g();
    },
    get connectionLineType() {
      return me();
    },
    set connectionLineType(q = Mn.Bezier) {
      me(q), g();
    },
    get attributionPosition() {
      return de();
    },
    set attributionPosition(q) {
      de(q), g();
    },
    get children() {
      return ie();
    },
    set children(q) {
      ie(q), g();
    },
    get nodes() {
      return ae();
    },
    set nodes(q = []) {
      ae(q), g();
    },
    get edges() {
      return ve();
    },
    set edges(q = []) {
      ve(q), g();
    },
    get viewport() {
      return ye();
    },
    set viewport(q = void 0) {
      ye(q), g();
    }
  };
  return jd(e, {
    get colorMode() {
      return le.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return we;
    },
    get domNode() {
      return le.domNode;
    },
    set domNode(q) {
      le.domNode = q;
    },
    get clientWidth() {
      return le.width;
    },
    set clientWidth(q) {
      le.width = q;
    },
    get clientHeight() {
      return le.height;
    },
    set clientHeight(q) {
      le.height = q;
    },
    children: (q, Ye) => {
      var ze = dy(), Ke = se(ze);
      Hd(Ke, {
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
          return le;
        },
        set store(lt) {
          le = lt;
        }
      });
      var Fe = M(Ke, 2);
      $d(Fe, {
        get panOnScrollMode() {
          return W();
        },
        get preventScrolling() {
          return G();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return F();
        },
        get zoomOnPinch() {
          return Y();
        },
        get panOnScroll() {
          return J();
        },
        get panOnScrollSpeed() {
          return R();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return U();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return y();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return w();
        },
        get store() {
          return le;
        },
        set store(lt) {
          le = lt;
        },
        children: (lt, fe) => {
          kd(lt, {
            get onpaneclick() {
              return T();
            },
            get onpanecontextmenu() {
              return K();
            },
            get onselectionstart() {
              return I();
            },
            get onselectionend() {
              return z();
            },
            get panOnDrag() {
              return X();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return U();
            },
            get store() {
              return le;
            },
            set store(Te) {
              le = Te;
            },
            children: (Te, rt) => {
              var Ze = cy(), ot = se(Ze);
              Sd(ot, {
                get store() {
                  return le;
                },
                set store(pt) {
                  le = pt;
                },
                children: (pt, xn) => {
                  var mt = uy(), ut = M(se(mt), 2);
                  Ad(ut, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return O();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return le;
                    },
                    set store(ln) {
                      le = ln;
                    }
                  });
                  var Nt = M(ut, 4);
                  Id(Nt, {
                    get type() {
                      return me();
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
                      return le;
                    },
                    set store(ln) {
                      le = ln;
                    }
                  });
                  var Dn = M(Nt, 2);
                  Dd(Dn, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return m();
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
                      return V();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return le;
                    },
                    set store(ln) {
                      le = ln;
                    }
                  });
                  var io = M(Dn, 2);
                  zd(io, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return le;
                    },
                    set store(ln) {
                      le = ln;
                    }
                  }), xe(2), D(pt, mt);
                },
                $$slots: { default: !0 }
              });
              var Yt = M(ot, 2);
              {
                let pt = /* @__PURE__ */ P(() => !!(le.selectionRect && le.selectionRectMode === "user")), xn = /* @__PURE__ */ P(() => le.selectionRect?.width), mt = /* @__PURE__ */ P(() => le.selectionRect?.height), ut = /* @__PURE__ */ P(() => le.selectionRect?.x), Nt = /* @__PURE__ */ P(() => le.selectionRect?.y);
                Da(Yt, {
                  get isVisible() {
                    return c(pt);
                  },
                  get width() {
                    return c(xn);
                  },
                  get height() {
                    return c(mt);
                  },
                  get x() {
                    return c(ut);
                  },
                  get y() {
                    return c(Nt);
                  }
                });
              }
              D(Te, Ze);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var tt = M(Fe, 2);
      Rd(tt, {
        get proOptions() {
          return o();
        },
        get position() {
          return de();
        }
      });
      var vt = M(tt, 2);
      Pd(vt, {
        get store() {
          return le;
        }
      });
      var Bt = M(vt, 2);
      st(Bt, () => ie() ?? Pt), D(q, ze);
    },
    $$slots: { default: !0 }
  }), he(Me);
}
ce(
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
  pe(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Oe(Cd({ props: {}, nodes: [], edges: [] }));
  Br(Vi, {
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
  return st(s, () => n() ?? Pt), D(e, i), he(o);
}
ce(Kd, { children: {} }, [], [], !0);
var fy = /* @__PURE__ */ te("<button><!></button>");
function go(e, t) {
  pe(t, !0);
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
    set class(y) {
      n(y), g();
    },
    get bgColor() {
      return r();
    },
    set bgColor(y) {
      r(y), g();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(y) {
      o(y), g();
    },
    get color() {
      return i();
    },
    set color(y) {
      i(y), g();
    },
    get colorHover() {
      return s();
    },
    set colorHover(y) {
      s(y), g();
    },
    get borderColor() {
      return a();
    },
    set borderColor(y) {
      a(y), g();
    },
    get onclick() {
      return l();
    },
    set onclick(y) {
      l(y), g();
    },
    get children() {
      return u();
    },
    set children(y) {
      u(y), g();
    }
  }, f = fy();
  gt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [$n]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = B(f);
  return st(h, () => u() ?? Pt), j(f), D(e, f), he(p);
}
ce(
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
var py = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Bd(e) {
  var t = py();
  D(e, t);
}
ce(Bd, {}, [], [], !0);
var hy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Yd(e) {
  var t = hy();
  D(e, t);
}
ce(Yd, {}, [], [], !0);
var gy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Wd(e) {
  var t = gy();
  D(e, t);
}
ce(Wd, {}, [], [], !0);
var vy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Fd(e) {
  var t = vy();
  D(e, t);
}
ce(Fd, {}, [], [], !0);
var my = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function qd(e) {
  var t = my();
  D(e, t);
}
ce(qd, {}, [], [], !0);
var yy = /* @__PURE__ */ te("<!> <!>", 1), wy = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function Xd(e, t) {
  pe(t, !0);
  let n = v(t, "position", 7, "bottom-left"), r = v(t, "orientation", 7, "vertical"), o = v(t, "showZoom", 7, !0), i = v(t, "showFitView", 7, !0), s = v(t, "showLock", 7, !0), a = v(t, "style", 7), l = v(t, "class", 7), u = v(t, "buttonBgColor", 7), d = v(t, "buttonBgColorHover", 7), p = v(t, "buttonColor", 7), f = v(t, "buttonColorHover", 7), h = v(t, "buttonBorderColor", 7), y = v(t, "fitViewOptions", 7), w = v(t, "children", 7), m = v(t, "before", 7), b = v(t, "after", 7), x = /* @__PURE__ */ Xe(t, [
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
  ]), $ = /* @__PURE__ */ P(wn);
  const _ = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: h()
  };
  let S = /* @__PURE__ */ P(() => c($).nodesDraggable || c($).nodesConnectable || c($).elementsSelectable), N = /* @__PURE__ */ P(() => c($).viewport.zoom <= c($).minZoom), V = /* @__PURE__ */ P(() => c($).viewport.zoom >= c($).maxZoom), Z = /* @__PURE__ */ P(() => c($).ariaLabelConfig), H = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const I = () => {
    c($).zoomIn();
  }, z = () => {
    c($).zoomOut();
  }, k = () => {
    c($).fitView(y());
  }, O = () => {
    let E = !c(S);
    c($).nodesDraggable = E, c($).nodesConnectable = E, c($).elementsSelectable = E;
  };
  var C = {
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
      return y();
    },
    set fitViewOptions(E) {
      y(E), g();
    },
    get children() {
      return w();
    },
    set children(E) {
      w(E), g();
    },
    get before() {
      return m();
    },
    set before(E) {
      m(E), g();
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
      c(H),
      l()
    ]);
    qo(e, Ue(
      {
        get class() {
          return c(E);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(Z)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (T, K) => {
          var W = wy(), G = se(W);
          {
            var L = (de) => {
              var ie = Ne(), ae = se(ie);
              st(ae, m), D(de, ie);
            };
            ue(G, (de) => {
              m() && de(L);
            });
          }
          var F = M(G, 2);
          {
            var Y = (de) => {
              var ie = yy(), ae = se(ie);
              go(ae, Ue(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(Z)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => _,
                {
                  children: (ye, we) => {
                    Bd(ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = M(ae, 2);
              go(ve, Ue(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(Z)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(N);
                  }
                },
                () => _,
                {
                  children: (ye, we) => {
                    Yd(ye);
                  },
                  $$slots: { default: !0 }
                }
              )), D(de, ie);
            };
            ue(F, (de) => {
              o() && de(Y);
            });
          }
          var J = M(F, 2);
          {
            var R = (de) => {
              go(de, Ue(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(Z)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ie, ae) => {
                    Wd(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(J, (de) => {
              i() && de(R);
            });
          }
          var X = M(J, 2);
          {
            var U = (de) => {
              go(de, Ue(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: O,
                  get title() {
                    return c(Z)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.interactive.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ie, ae) => {
                    var ve = Ne(), ye = se(ve);
                    {
                      var we = (_e) => {
                        qd(_e);
                      }, le = (_e) => {
                        Fd(_e);
                      };
                      ue(ye, (_e) => {
                        c(S) ? _e(we) : _e(le, !1);
                      });
                    }
                    D(ie, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(X, (de) => {
              s() && de(U);
            });
          }
          var ne = M(X, 2);
          {
            var re = (de) => {
              var ie = Ne(), ae = se(ie);
              st(ae, w), D(de, ie);
            };
            ue(ne, (de) => {
              w() && de(re);
            });
          }
          var ee = M(ne, 2);
          {
            var me = (de) => {
              var ie = Ne(), ae = se(ie);
              st(ae, b), D(de, ie);
            };
            ue(ee, (de) => {
              b() && de(me);
            });
          }
          D(T, W);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return he(C);
}
ce(
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
var Hn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Hn || (Hn = {}));
var by = /* @__PURE__ */ be("<circle></circle>");
function Gd(e, t) {
  pe(t, !0);
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
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Zt(i, 0, Gn(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), he(o);
}
ce(Gd, { radius: {}, class: {} }, [], [], !0);
var xy = /* @__PURE__ */ be("<path></path>");
function Jd(e, t) {
  pe(t, !0);
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
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Zt(a, 0, Gn(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), he(s);
}
ce(Jd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const _y = {
  [Hn.Dots]: 1,
  [Hn.Lines]: 1,
  [Hn.Cross]: 6
};
var Cy = /* @__PURE__ */ be('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Ud(e, t) {
  pe(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => Hn.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ P(wn), f = /* @__PURE__ */ P(() => r() === Hn.Dots), h = /* @__PURE__ */ P(() => r() === Hn.Cross), y = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ P(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), m = /* @__PURE__ */ P(() => [
    c(y)[0] * c(p).viewport.zoom || 1,
    c(y)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ P(() => (i() ?? _y[r()]) * c(p).viewport.zoom), x = /* @__PURE__ */ P(() => c(h) ? [c(b), c(b)] : c(m)), $ = /* @__PURE__ */ P(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var _ = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), g();
    },
    get variant() {
      return r();
    },
    set variant(k = Hn.Dots) {
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
  var V = B(S), Z = B(V);
  {
    var H = (k) => {
      {
        let O = /* @__PURE__ */ P(() => c(b) / 2);
        Gd(k, {
          get radius() {
            return c(O);
          },
          get class() {
            return u();
          }
        });
      }
    }, I = (k) => {
      Jd(k, {
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
    ue(Z, (k) => {
      c(f) ? k(H) : k(I, !1);
    });
  }
  j(V);
  var z = M(V);
  return j(S), Ee(() => {
    Zt(S, 0, Gn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), N = $t(S, "", N, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), ke(V, "id", c(w)), ke(V, "x", c(p).viewport.x % c(m)[0]), ke(V, "y", c(p).viewport.y % c(m)[1]), ke(V, "width", c(m)[0]), ke(V, "height", c(m)[1]), ke(V, "patternTransform", `translate(-${c($)[0]},-${c($)[1]})`), ke(z, "fill", `url(#${c(w)})`);
  }), D(e, S), he(_);
}
ce(
  Ud,
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
var $y = /* @__PURE__ */ be("<rect></rect>");
function Qd(e, t) {
  pe(t, !0);
  let n = v(t, "id", 7), r = v(t, "x", 7), o = v(t, "y", 7), i = v(t, "width", 7), s = v(t, "height", 7), a = v(t, "borderRadius", 7, 5), l = v(t, "color", 7), u = v(t, "shapeRendering", 7), d = v(t, "strokeColor", 7), p = v(t, "strokeWidth", 7, 2), f = v(t, "selected", 7), h = v(t, "class", 7), y = v(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), g();
    },
    get x() {
      return r();
    },
    set x(_) {
      r(_), g();
    },
    get y() {
      return o();
    },
    set y(_) {
      o(_), g();
    },
    get width() {
      return i();
    },
    set width(_) {
      i(_), g();
    },
    get height() {
      return s();
    },
    set height(_) {
      s(_), g();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(_ = 5) {
      a(_), g();
    },
    get color() {
      return l();
    },
    set color(_) {
      l(_), g();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(_) {
      u(_), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(_) {
      d(_), g();
    },
    get strokeWidth() {
      return p();
    },
    set strokeWidth(_ = 2) {
      p(_), g();
    },
    get selected() {
      return f();
    },
    set selected(_) {
      f(_), g();
    },
    get class() {
      return h();
    },
    set class(_) {
      h(_), g();
    },
    get nodeComponent() {
      return y();
    },
    set nodeComponent(_) {
      y(_), g();
    }
  }, m = Ne(), b = se(m);
  {
    var x = (_) => {
      const S = /* @__PURE__ */ P(y);
      var N = Ne(), V = se(N);
      qi(V, () => c(S), (Z, H) => {
        H(Z, {
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
      }), D(_, N);
    }, $ = (_) => {
      var S = $y();
      let N, V;
      Ee(() => {
        N = Zt(S, 0, Gn(["svelte-flow__minimap-node", h()]), null, N, { selected: f() }), ke(S, "x", r()), ke(S, "y", o()), ke(S, "rx", a()), ke(S, "ry", a()), ke(S, "width", i()), ke(S, "height", s()), ke(S, "shape-rendering", u()), V = $t(S, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), D(_, S);
    };
    ue(b, (_) => {
      y() ? _(x) : _($, !1);
    });
  }
  return D(e, m), he(w);
}
ce(
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
const _s = (e) => e instanceof Function ? e : () => e;
var Sy = /* @__PURE__ */ be("<title> </title>"), Ey = /* @__PURE__ */ be('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Py = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ef(e, t) {
  pe(t, !0);
  let n = v(t, "position", 7, "bottom-right"), r = v(t, "ariaLabel", 7), o = v(t, "nodeStrokeColor", 7, "transparent"), i = v(t, "nodeColor", 7), s = v(t, "nodeClass", 7, ""), a = v(t, "nodeBorderRadius", 7, 5), l = v(t, "nodeStrokeWidth", 7, 2), u = v(t, "nodeComponent", 7), d = v(t, "bgColor", 7), p = v(t, "maskColor", 7), f = v(t, "maskStrokeColor", 7), h = v(t, "maskStrokeWidth", 7), y = v(t, "width", 7, 200), w = v(t, "height", 7, 150), m = v(t, "pannable", 7, !0), b = v(t, "zoomable", 7, !0), x = v(t, "inversePan", 7), $ = v(t, "zoomStep", 7), _ = v(t, "class", 7), S = /* @__PURE__ */ Xe(t, [
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
  ]), N = /* @__PURE__ */ P(wn), V = /* @__PURE__ */ P(() => c(N).ariaLabelConfig);
  const Z = i() === void 0 ? void 0 : _s(i()), H = _s(o()), I = _s(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(N).flowId}`), O = /* @__PURE__ */ P(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), C = /* @__PURE__ */ P(() => qc(Bo(c(N).nodeLookup, { filter: (ee) => !ee.hidden }), c(O))), E = /* @__PURE__ */ P(() => c(C).width / y()), T = /* @__PURE__ */ P(() => c(C).height / w()), K = /* @__PURE__ */ P(() => Math.max(c(E), c(T))), W = /* @__PURE__ */ P(() => c(K) * y()), G = /* @__PURE__ */ P(() => c(K) * w()), L = /* @__PURE__ */ P(() => 5 * c(K)), F = /* @__PURE__ */ P(() => c(C).x - (c(W) - c(C).width) / 2 - c(L)), Y = /* @__PURE__ */ P(() => c(C).y - (c(G) - c(C).height) / 2 - c(L)), J = /* @__PURE__ */ P(() => c(W) + c(L) * 2), R = /* @__PURE__ */ P(() => c(G) + c(L) * 2);
  const X = () => c(K);
  var U = {
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
      return y();
    },
    set width(ee = 200) {
      y(ee), g();
    },
    get height() {
      return w();
    },
    set height(ee = 150) {
      w(ee), g();
    },
    get pannable() {
      return m();
    },
    set pannable(ee = !0) {
      m(ee), g();
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
      return _();
    },
    set class(ee) {
      _(ee), g();
    }
  }, ne = Py(), re = se(ne);
  {
    let ee = /* @__PURE__ */ P(() => ["svelte-flow__minimap", _()]);
    xh(re, () => ({ "--xy-minimap-background-color-props": d() })), qo(re.lastChild, Ue(
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
        children: (me, de) => {
          var ie = Ne(), ae = se(ie);
          {
            var ve = (ye) => {
              var we = Ey();
              let le;
              var _e = B(we);
              {
                var Me = (ze) => {
                  var Ke = Sy(), Fe = B(Ke, !0);
                  j(Ke), Ee(() => {
                    ke(Ke, "id", c(k)), Je(Fe, r() ?? c(V)["minimap.ariaLabel"]);
                  }), D(ze, Ke);
                };
                ue(_e, (ze) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && ze(Me);
                });
              }
              var q = M(_e);
              Tt(q, 17, () => c(N).nodes, (ze) => ze.id, (ze, Ke) => {
                const Fe = /* @__PURE__ */ P(() => c(N).nodeLookup.get(c(Ke).id));
                var tt = Ne(), vt = se(tt);
                {
                  var Bt = (lt) => {
                    const fe = /* @__PURE__ */ P(() => gr(c(Fe)));
                    {
                      let Te = /* @__PURE__ */ P(() => Z?.(c(Fe))), rt = /* @__PURE__ */ P(() => H(c(Fe))), Ze = /* @__PURE__ */ P(() => I(c(Fe)));
                      Qd(lt, Ue(
                        {
                          get id() {
                            return c(Fe).id;
                          },
                          get x() {
                            return c(Fe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Fe).internals.positionAbsolute.y;
                          }
                        },
                        () => c(fe),
                        {
                          get selected() {
                            return c(Fe).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Te);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(rt);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return c(Ze);
                          }
                        }
                      ));
                    }
                  };
                  ue(vt, (lt) => {
                    c(Fe) && Xc(c(Fe)) && !c(Fe).hidden && lt(Bt);
                  });
                }
                D(ze, tt);
              });
              var Ye = M(q);
              j(we), kt(we, (ze, Ke) => ky?.(ze, Ke), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: X,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: x(),
                zoomStep: $(),
                pannable: m(),
                zoomable: b()
              })), Ee(() => {
                ke(we, "width", y()), ke(we, "height", w()), ke(we, "viewBox", `${c(F) ?? ""} ${c(Y) ?? ""} ${c(J) ?? ""} ${c(R) ?? ""}`), ke(we, "aria-labelledby", c(k)), le = $t(we, "", le, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(K) : void 0
                }), ke(Ye, "d", `M${c(F) - c(L)},${c(Y) - c(L)}h${c(J) + c(L) * 2}v${c(R) + c(L) * 2}h${-c(J) - c(L) * 2}z
      M${c(O).x ?? ""},${c(O).y ?? ""}h${c(O).width ?? ""}v${c(O).height ?? ""}h${-c(O).width}z`);
              }), D(ye, we);
            };
            ue(ae, (ye) => {
              c(N).panZoom && ye(ve);
            });
          }
          D(me, ie);
        },
        $$slots: { default: !0 }
      }
    )), j(re);
  }
  return D(e, ne), he(U);
}
ce(
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
var Ty = /* @__PURE__ */ te("<div><!></div>");
function tf(e, t) {
  pe(t, !0);
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
  const u = wn(), { getNodesBounds: d } = wt(), p = ar("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (S, N) => {
      const V = u.nodeLookup.get(N);
      return V && S.push(V), S;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const S = d(c(f));
    return S ? B0(S, u.viewport, r(), i(), o()) : "";
  }), y = /* @__PURE__ */ P(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((S) => (S.internals.z || 5) + 1))), w = /* @__PURE__ */ P(() => u.nodes.filter((S) => S.selected).length), m = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(w) === 1);
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
    var _ = (S) => {
      var N = Ty();
      gt(
        N,
        (Z, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": Z,
          ...l,
          [$n]: H
        }),
        [
          () => c(f).reduce((Z, H) => `${Z}${H.id} `, "").trim(),
          () => ({
            display: vd().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(y)
          })
        ]
      );
      var V = B(N);
      st(V, () => a() ?? Pt), j(N), kt(N, (Z, H) => gd?.(Z, H), () => "root"), D(S, N);
    };
    ue($, (S) => {
      u.domNode && c(m) && c(f) && S(_);
    });
  }
  return D(e, x), he(b);
}
ce(
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
function Jn(e) {
  const t = /* @__PURE__ */ P(wn), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
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
const Xl = "tinyflow-component", Ny = [
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
], Dy = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Ly = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Vy {
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
const My = () => {
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
}, Re = My();
var Ay = /* @__PURE__ */ te("<button><!></button>");
function Ae(e, t) {
  pe(t, !0);
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
  }, s = Ay();
  gt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return st(a, () => n() ?? Pt), j(s), D(e, s), he(i);
}
ce(Ae, { children: {}, primary: {} }, [], [], !0);
var zy = /* @__PURE__ */ te("<input/>");
function nf(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zy();
  gt(
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
  ), D(e, r), he();
}
ce(nf, {}, [], [], !0);
var Hy = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Iy = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function rf(e, t) {
  pe(t, !0), We(e, Iy);
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
  }, u = Hy();
  gt(
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
  sr(d);
  var p = M(d, 2);
  dt(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = M(p, 2);
  return Ae(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, y) => {
      xe();
      var w = Pe();
      Ee(() => Je(w, i())), D(h, w);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => ui(d, o())), D(e, u), he(l);
}
ce(
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
function dt(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Ry();
  gt(
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
  ), D(e, r), he();
}
ce(dt, {}, [], [], !0);
var jy = /* @__PURE__ */ te("<textarea></textarea>");
function qe(e, t) {
  pe(t, !0);
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
        const m = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = m, l.style.overflowY = "hidden", s()?.(m);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let w = l.scrollHeight;
      if (!u) {
        const m = t.rows || 1, b = getComputedStyle(l);
        u = parseFloat(b.fontSize) * 1.2 * m + parseFloat(b.paddingTop) + parseFloat(b.paddingBottom) + parseFloat(b.borderTopWidth);
      }
      if (w < u && (w = u), i()) {
        const m = typeof i() == "number" ? `${i()}px` : i();
        w > parseInt(m) ? (l.style.height = m, l.style.overflowY = "auto") : l.style.height = `${w}px`;
      } else
        l.style.height = `${w}px`;
      s()?.(l.style.height);
    }
  }
  nt(() => {
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
  Up(f);
  var h = (w) => {
    d(), t.oninput?.(w);
  }, y = (w) => {
    d(), t.onchange?.(w);
  };
  return gt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Kt(f, (w) => l = w, () => l), D(e, f), he(p);
}
ce(
  qe,
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
  pe(t, !1);
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
  return gt(u, () => ({
    ...r,
    class: `tf-tabs ${da(r), xt(() => r.class) ?? ""}`
  })), Tt(u, 5, o, Wr, (d, p, f) => {
    var h = Zy();
    ke(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var y = B(h);
    {
      var w = (b) => {
        var x = Pe();
        Ee(() => Je(x, (c(p), xt(() => c(p).label)))), D(b, x);
      }, m = (b) => {
        var x = Ne(), $ = se(x);
        st($, () => (c(p), xt(() => c(p).label) ?? Pt)), D(b, x);
      };
      ue(y, (b) => {
        c(p), xt(() => typeof c(p).label == "string") ? b(w) : b(m, !1);
      });
    }
    j(h), Ee(() => Zt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(d, h);
  }), j(u), D(e, u), he(l);
}
hr(["click", "keydown"]);
ce(of, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var By = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Yy = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Wy = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Fy = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), qy = /* @__PURE__ */ te("<div></div>");
const Xy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function sf(e, t) {
  pe(t, !0), We(e, Xy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => rn([]));
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
  return Tt(a, 21, n, Wr, (l, u, d) => {
    var p = Fy(), f = B(p);
    ke(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), i(c(u)));
    };
    var h = B(f);
    {
      var y = (S) => {
        var N = By(), V = B(N);
        tr(V, {
          get target() {
            return c(u).icon;
          }
        }), j(N), D(S, N);
      };
      ue(h, (S) => {
        c(u).icon && S(y);
      });
    }
    var w = M(h, 2);
    tr(w, {
      get target() {
        return c(u).title;
      }
    });
    var m = M(w, 2);
    j(f);
    var b = M(f, 2);
    {
      var x = (S) => {
        var N = Yy(), V = B(N);
        tr(V, {
          get target() {
            return c(u).description;
          }
        }), j(N), D(S, N);
      };
      ue(b, (S) => {
        c(u).description && S(x);
      });
    }
    var $ = M(b, 2);
    {
      var _ = (S) => {
        var N = Wy(), V = B(N);
        tr(V, {
          get target() {
            return c(u).content;
          }
        }), j(N), D(S, N);
      };
      ue($, (S) => {
        o().includes(c(u).key) && S(_);
      });
    }
    j(p), Ee((S) => Zt(m, 1, `tf-collapse-item-title-arrow ${S ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), D(l, p);
  }), j(a), Ee(() => {
    $t(a, t.style), Zt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), he(s);
}
hr(["click", "keydown"]);
ce(sf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function tr(e, t) {
  pe(t, !0);
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
      st(d, () => n() ?? Pt), D(l, u);
    }, a = (l) => {
      var u = Ne(), d = se(u);
      ha(d, n), D(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), he(r);
}
ce(tr, { target: {} }, [], [], !0);
var Gy = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Jy = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), Uy = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Qy = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), e2 = /* @__PURE__ */ te("<!> <!>", 1), t2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), n2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), r2 = /* @__PURE__ */ te("<div><!></div>");
function _t(e, t) {
  pe(t, !0);
  const n = (x, $ = Pt) => {
    var _ = Ne(), S = se(_);
    Tt(S, 19, $, (N, V) => `${V}_${N.value}`, (N, V) => {
      var Z = Uy(), H = se(Z);
      H.__click = () => y(c(V));
      var I = B(H), z = B(I);
      {
        var k = (T) => {
          var K = Gy();
          D(T, K);
        };
        ue(z, (T) => {
          c(V).children && c(V).children.length > 0 && T(k);
        });
      }
      j(I);
      var O = M(I, 2);
      tr(O, {
        get target() {
          return c(V).label;
        }
      }), j(H);
      var C = M(H, 2);
      {
        var E = (T) => {
          var K = Jy(), W = B(K);
          n(W, () => c(V).children), j(K), D(T, K);
        };
        ue(C, (T) => {
          c(V).children && c(V).children.length > 0 && (a() || u().includes(c(V).value)) && T(E);
        });
      }
      D(N, Z);
    }), D(x, _);
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
    const x = [], $ = (_) => {
      for (let S of _)
        i().length > 0 ? i().includes(S.value) && x.push(S) : s().includes(S.value) && x.push(S), S.children && S.children.length > 0 && $(S.children);
    };
    return $(r()), x;
  }), h;
  function y(x) {
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
  }, m = r2();
  gt(m, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = B(m);
  return Kt(
    vr(b, {
      floating: (x) => {
        var $ = Qy(), _ = B($);
        n(_, r), j($), D(x, $);
      },
      children: (x, $) => {
        var _ = n2();
        gt(_, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var S = B(_);
        Tt(
          S,
          23,
          () => c(f),
          (N, V) => `${V}_${N.value}`,
          (N, V, Z) => {
            var H = Ne(), I = se(H);
            {
              var z = (O) => {
                var C = Ne(), E = se(C);
                {
                  var T = (K) => {
                    tr(K, {
                      get target() {
                        return c(V).label;
                      }
                    });
                  };
                  ue(E, (K) => {
                    c(Z) === 0 && K(T);
                  });
                }
                D(O, C);
              }, k = (O) => {
                var C = e2(), E = se(C);
                tr(E, {
                  get target() {
                    return c(V).label;
                  }
                });
                var T = M(E, 2);
                {
                  var K = (W) => {
                    var G = Pe(",");
                    D(W, G);
                  };
                  ue(T, (W) => {
                    c(Z) < c(f).length - 1 && W(K);
                  });
                }
                D(O, C);
              };
              ue(I, (O) => {
                l() ? O(k, !1) : O(z);
              });
            }
            D(N, H);
          },
          (N) => {
            var V = t2(), Z = B(V, !0);
            j(V), Ee(() => Je(Z, d())), D(N, V);
          }
        ), j(S), xe(2), j(_), D(x, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => h = x,
    () => h
  ), j(m), D(e, m), he(w);
}
hr(["click"]);
ce(
  _t,
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
const Oo = Math.min, jr = Math.max, Mi = Math.round, Pn = (e) => ({
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
function Ws(e, t, n) {
  return jr(e, Oo(t, n));
}
function Xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(e) {
  return e.split("-")[0];
}
function Go(e) {
  return e.split("-")[1];
}
function af(e) {
  return e === "x" ? "y" : "x";
}
function Va(e) {
  return e === "y" ? "height" : "width";
}
const s2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function nr(e) {
  return s2.has(Tr(e)) ? "y" : "x";
}
function Ma(e) {
  return af(nr(e));
}
function a2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Go(e), o = Ma(e), i = Va(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ai(s)), [s, Ai(s)];
}
function l2(e) {
  const t = Ai(e);
  return [Fs(e), t, Fs(t)];
}
function Fs(e) {
  return e.replace(/start|end/g, (t) => i2[t]);
}
const Gl = ["left", "right"], Jl = ["right", "left"], u2 = ["top", "bottom"], c2 = ["bottom", "top"];
function d2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Jl : Gl : t ? Gl : Jl;
    case "left":
    case "right":
      return t ? u2 : c2;
    default:
      return [];
  }
}
function f2(e, t, n, r) {
  const o = Go(e);
  let i = d2(Tr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Fs)))), i;
}
function Ai(e) {
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
function zi(e) {
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
function Ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = nr(t), s = Ma(t), a = Va(s), l = Tr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Go(t)) {
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
  } = Ul(u, r, l), f = r, h = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: m,
      fn: b
    } = a[w], {
      x,
      y: $,
      data: _,
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
      [m]: {
        ...h[m],
        ..._
      }
    }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = Ul(u, f, l)), w = -1);
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
  } = Xo(t, e), y = lf(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], m = zi(await i.getClippingRect({
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
  }, _ = zi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (m.top - _.top + y.top) / $.y,
    bottom: (_.bottom - m.bottom + y.bottom) / $.y,
    left: (m.left - _.left + y.left) / $.x,
    right: (_.right - m.right + y.right) / $.x
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
    }, h = Ma(o), y = Va(h), w = await s.getDimensions(u), m = h === "y", b = m ? "top" : "left", x = m ? "bottom" : "right", $ = m ? "clientHeight" : "clientWidth", _ = i.reference[y] + i.reference[h] - f[h] - i.floating[y], S = f[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = N ? N[$] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(N))) && (V = a.floating[$] || i.floating[y]);
    const Z = _ / 2 - S / 2, H = V / 2 - w[y] / 2 - 1, I = Oo(p[b], H), z = Oo(p[x], H), k = I, O = V - w[y] - z, C = V / 2 - w[y] / 2 + Z, E = Ws(k, C, O), T = !l.arrow && Go(o) != null && C !== E && i.reference[y] / 2 - (C < k ? I : z) - w[y] / 2 < 0, K = T ? C < k ? C - k : C - O : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: E,
        centerOffset: C - E - K,
        ...T && {
          alignmentOffset: K
        }
      },
      reset: T
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: w = !0,
        ...m
      } = Xo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Tr(o), x = nr(a), $ = Tr(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = f || ($ || !w ? [Ai(a)] : l2(a)), N = y !== "none";
      !f && N && S.push(...f2(a, w, y, _));
      const V = [a, ...S], Z = await uf(t, m), H = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(Z[b]), p) {
        const C = a2(o, s, _);
        H.push(Z[C[0]], Z[C[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var z, k;
        const C = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, E = V[C];
        if (E && (!(p === "alignment" && x !== nr(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((K) => nr(K.placement) === x ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: I
            },
            reset: {
              placement: E
            }
          };
        let T = (k = I.filter((K) => K.overflows[0] <= 0).sort((K, W) => K.overflows[1] - W.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!T)
          switch (h) {
            case "bestFit": {
              var O;
              const K = (O = I.filter((W) => {
                if (N) {
                  const G = nr(W.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((G) => G > 0).reduce((G, L) => G + L, 0)]).sort((W, G) => W[1] - G[1])[0]) == null ? void 0 : O[0];
              K && (T = K);
              break;
            }
            case "initialPlacement":
              T = a;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Tr(n), a = Go(n), l = nr(n) === "y", u = m2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Xo(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof y == "number" && (h = a === "end" ? y * -1 : y), l ? {
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
          fn: (m) => {
            let {
              x: b,
              y: x
            } = m;
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
      }, d = await uf(t, l), p = nr(Tr(o)), f = af(p);
      let h = u[f], y = u[p];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + d[m], $ = h - d[b];
        h = Ws(x, h, $);
      }
      if (s) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[m], $ = y - d[b];
        y = Ws(x, y, $);
      }
      const w = a.fn({
        ...t,
        [f]: h,
        [p]: y
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
function Gt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (cf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cf(e) {
  return os() ? e instanceof Node || e instanceof Gt(e).Node : !1;
}
function gn(e) {
  return os() ? e instanceof Element || e instanceof Gt(e).Element : !1;
}
function Nn(e) {
  return os() ? e instanceof HTMLElement || e instanceof Gt(e).HTMLElement : !1;
}
function Ql(e) {
  return !os() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Gt(e).ShadowRoot;
}
const x2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Jo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = vn(e);
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
function Aa(e) {
  const t = za(), n = gn(e) ? vn(e) : e;
  return k2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || S2.some((r) => (n.willChange || "").includes(r)) || E2.some((r) => (n.contain || "").includes(r));
}
function P2(e) {
  let t = cr(e);
  for (; Nn(t) && !eo(t); ) {
    if (Aa(t))
      return t;
    if (is(t))
      return null;
    t = cr(t);
  }
  return null;
}
function za() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const T2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function eo(e) {
  return T2.has(oo(e));
}
function vn(e) {
  return Gt(e).getComputedStyle(e);
}
function ss(e) {
  return gn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cr(e) {
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
  const t = cr(e);
  return eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nn(t) && Jo(t) ? t : df(t);
}
function ff(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = df(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Gt(o);
  return i ? (qs(s), t.concat(s, s.visualViewport || [], Jo(o) ? o : [], [])) : t.concat(o, ff(o, []));
}
function qs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pf(e) {
  const t = vn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Nn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Mi(n) !== i || Mi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function hf(e) {
  return gn(e) ? e : e.contextElement;
}
function Zr(e) {
  const t = hf(e);
  if (!Nn(t))
    return Pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = pf(t);
  let s = (i ? Mi(n.width) : n.width) / r, a = (i ? Mi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const N2 = /* @__PURE__ */ Pn(0);
function gf(e) {
  const t = Gt(e);
  return !za() || !t.visualViewport ? N2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function O2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Gt(e) ? !1 : t;
}
function Do(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = hf(e);
  let s = Pn(1);
  t && (r ? gn(r) && (s = Zr(r)) : s = Zr(e));
  const a = O2(i, n, r) ? gf(i) : Pn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Gt(i), h = r && gn(r) ? Gt(r) : r;
    let y = f, w = qs(y);
    for (; w && r && h !== y; ) {
      const m = Zr(w), b = w.getBoundingClientRect(), x = vn(w), $ = b.left + (w.clientLeft + parseFloat(x.paddingLeft)) * m.x, _ = b.top + (w.clientTop + parseFloat(x.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, p *= m.y, l += $, u += _, y = Gt(w), w = qs(y);
    }
  }
  return zi({
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
  }, u = Pn(1);
  const d = Pn(0), p = Nn(r);
  if ((p || !p && !i) && ((oo(r) !== "body" || Jo(s)) && (l = ss(r)), Nn(r))) {
    const h = Do(r);
    u = Zr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? vf(s, l) : Pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function L2(e) {
  return Array.from(e.getClientRects());
}
function V2(e) {
  const t = Un(e), n = ss(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + as(e);
  const a = -n.scrollTop;
  return vn(r).direction === "rtl" && (s += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const eu = 25;
function M2(e, t) {
  const n = Gt(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = za();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = as(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, y = Math.abs(r.clientWidth - p.clientWidth - h);
    y <= eu && (i -= y);
  } else u <= eu && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const A2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function z2(e, t) {
  const n = Do(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Nn(e) ? Zr(e) : Pn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = M2(e, n);
  else if (t === "document")
    r = V2(Un(e));
  else if (gn(t))
    r = z2(t, n);
  else {
    const o = gf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return zi(r);
}
function mf(e, t) {
  const n = cr(e);
  return n === t || !gn(n) || eo(n) ? !1 : vn(n).position === "fixed" || mf(n, t);
}
function H2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ff(e, []).filter((a) => gn(a) && oo(a) !== "body"), o = null;
  const i = vn(e).position === "fixed";
  let s = i ? cr(e) : e;
  for (; gn(s) && !eo(s); ) {
    const a = vn(s), l = Aa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && A2.has(o.position) || Jo(s) && !l && mf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = cr(s);
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
  const i = [...n === "clippingAncestors" ? is(t) ? [] : H2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = tu(t, u, o);
    return l.top = jr(d.top, l.top), l.right = Oo(d.right, l.right), l.bottom = Oo(d.bottom, l.bottom), l.left = jr(d.left, l.left), l;
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
  const r = Nn(t), o = Un(t), i = n === "fixed", s = Do(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Pn(0);
  function u() {
    l.x = as(o);
  }
  if (r || !r && !i)
    if ((oo(t) !== "body" || Jo(o)) && (a = ss(t)), r) {
      const h = Do(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? vf(o, a) : Pn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Cs(e) {
  return vn(e).position === "static";
}
function nu(e, t) {
  if (!Nn(e) || vn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function yf(e, t) {
  const n = Gt(e);
  if (is(e))
    return n;
  if (!Nn(e)) {
    let o = cr(e);
    for (; o && !eo(o); ) {
      if (gn(o) && !Cs(o))
        return o;
      o = cr(o);
    }
    return n;
  }
  let r = nu(e, t);
  for (; r && C2(r) && Cs(r); )
    r = nu(r, t);
  return r && eo(r) && Cs(r) && !Aa(r) ? n : r || P2(e) || n;
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
  return vn(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: D2,
  getDocumentElement: Un,
  getClippingRect: I2,
  getOffsetParent: yf,
  getElementRects: Z2,
  getClientRects: L2,
  getDimensions: R2,
  getScale: Zr,
  isElement: gn,
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
}, G2 = ({
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
    }).then(({ x: b, y: x, placement: $, middlewareData: _ }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: S, y: N } = _.arrow, V = {
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
          [V]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function y() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function w(b) {
    b.stopPropagation(), f ? y() : h();
  }
  function m(b) {
    u.contains(b.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, w);
  }), document.addEventListener("click", m), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, w);
      }), document.removeEventListener("click", m);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var J2 = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function vr(e, t) {
  pe(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  Xn(() => (a = G2({
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
  }, d = J2(), p = B(d), f = B(p);
  st(f, n), j(p), Kt(p, (w) => i = w, () => i);
  var h = M(p, 2), y = B(h);
  return st(y, r), j(h), Kt(h, (w) => s = w, () => s), j(d), D(e, d), he(u);
}
ce(vr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ie(e, t) {
  pe(t, !0);
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
    gt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = Ne(), f = se(p);
    st(f, () => n() ?? Pt), D(d, p);
  }), D(e, a), he(s);
}
ce(Ie, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const Q2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Uo(e, t) {
  pe(t, !0), We(e, Q2);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ae(e, Ue(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = U2();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
ce(Uo, {}, [], [], !0);
const ew = () => ({ deleteNode: (e) => {
  Re.removeNode(e), Re.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Yn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, tw = () => ({ copyNode: (e) => {
  const t = Re.getNode(e);
  if (t) {
    const n = Yn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Re.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), at = () => ar("svelteflow__node_id"), dr = () => ar("tinyflow_options");
var nw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), rw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ow = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), iw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), sw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), aw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), lw = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), uw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), cw = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), dw = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const fw = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function an(e, t) {
  pe(t, !0), We(e, fw);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), y = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: m, getNode: b } = wt(), x = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: $ } = ew(), { copyNode: _ } = tw(), S = dr(), N = () => {
    S.onNodeExecute?.(b(r()));
  };
  let V = at();
  var Z = {
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
      return y();
    },
    set onCollapse(L) {
      y(L), g();
    }
  }, H = dw(), I = se(H);
  {
    var z = (L) => {
      tf(L, {
        get position() {
          return Ce.Top;
        },
        align: "start",
        children: (F, Y) => {
          var J = cw(), R = B(J);
          {
            var X = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ae, ve) => {
                  var ye = nw();
                  D(ae, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ue(R, (ie) => {
              u() && ie(X);
            });
          }
          var U = M(R, 2);
          {
            var ne = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ae, ve) => {
                  var ye = rw();
                  D(ae, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ue(U, (ie) => {
              l() && ie(ne);
            });
          }
          var re = M(U, 2);
          {
            var ee = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ae, ve) => {
                  var ye = ow();
                  D(ae, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ue(re, (ie) => {
              a() && ie(ee);
            });
          }
          var me = M(re, 2);
          {
            var de = (ie) => {
              vr(ie, {
                placement: "bottom",
                floating: (ae) => {
                  var ve = lw(), ye = B(ve), we = M(B(ye));
                  dt(we, {
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Te = fe.target.value;
                      m(V, { title: Te });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(ye);
                  var le = M(ye, 2), _e = M(B(le));
                  qe(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (fe) => {
                      const Te = fe.target.value;
                      m(V, { description: Te });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(le);
                  var Me = M(le, 2);
                  {
                    var q = (fe) => {
                      var Te = iw(), rt = M(B(Te));
                      qe(rt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const ot = Ze.target.value;
                          m(V, { condition: ot });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Te), D(fe, Te);
                    };
                    ue(Me, (fe) => {
                      p() && fe(q);
                    });
                  }
                  var Ye = M(Me, 2), ze = M(B(Ye), 2);
                  sr(ze), ze.__change = (fe) => {
                    const Te = fe.target.checked;
                    m(V, { loopEnable: Te });
                  }, j(Ye);
                  var Ke = M(Ye, 2);
                  {
                    var Fe = (fe) => {
                      var Te = sw(), rt = se(Te), Ze = M(B(rt));
                      {
                        let mt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        qe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ut) => {
                            const Nt = ut.target.value;
                            m(V, { loopIntervalMs: Nt });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      j(rt);
                      var ot = M(rt, 2), Yt = M(B(ot));
                      {
                        let mt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        qe(Yt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ut) => {
                            const Nt = ut.target.value;
                            m(V, { maxLoopCount: Nt });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      j(ot);
                      var pt = M(ot, 2), xn = M(B(pt));
                      qe(xn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (mt) => {
                          const ut = mt.target.value;
                          m(V, { loopBreakCondition: ut });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), j(pt), D(fe, Te);
                    };
                    ue(Ke, (fe) => {
                      n().loopEnable && fe(Fe);
                    });
                  }
                  var tt = M(Ke, 2), vt = M(B(tt), 2);
                  sr(vt), vt.__change = (fe) => {
                    const Te = fe.target.checked;
                    m(V, { retryEnable: Te });
                  }, j(tt);
                  var Bt = M(tt, 2);
                  {
                    var lt = (fe) => {
                      var Te = aw(), rt = se(Te), Ze = M(B(rt));
                      {
                        let mt = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
                        qe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ut) => {
                            const Nt = ut.target.value;
                            m(V, { retryIntervalMs: Nt });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      j(rt);
                      var ot = M(rt, 2), Yt = M(B(ot));
                      {
                        let mt = /* @__PURE__ */ P(() => n().maxRetryCount || "3");
                        qe(Yt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ut) => {
                            const Nt = ut.target.value;
                            m(V, { maxRetryCount: Nt });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      j(ot);
                      var pt = M(ot, 2), xn = M(B(pt), 2);
                      sr(xn), xn.__change = (mt) => {
                        const ut = mt.target.checked;
                        m(V, { resetRetryCountAfterNormal: ut });
                      }, j(pt), Ee(() => fs(xn, !!n().resetRetryCountAfterNormal)), D(fe, Te);
                    };
                    ue(Bt, (fe) => {
                      n().retryEnable && fe(lt);
                    });
                  }
                  j(ve), Ee(() => {
                    fs(ze, !!n().loopEnable), fs(vt, !!n().retryEnable);
                  }), D(ae, ve);
                },
                children: (ae, ve) => {
                  Ae(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ye, we) => {
                      var le = uw();
                      D(ye, le);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(me, (ie) => {
              d() && ie(de);
            });
          }
          j(J), D(F, J);
        },
        $$slots: { default: !0 }
      });
    };
    ue(I, (L) => {
      (a() || l() || u()) && L(z);
    });
  }
  var k = M(I, 2), O = M(B(k), 2), C = B(O);
  sf(C, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return w;
    },
    onChange: (L, F) => {
      m(r(), { expand: F?.includes("key") }), y()?.(F?.includes("key") ? "key" : "");
    }
  }), j(O), j(k);
  var E = M(k, 2);
  {
    var T = (L) => {
      ur(L, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(E, (L) => {
      h() && L(T);
    });
  }
  var K = M(E, 2);
  {
    var W = (L) => {
      ur(L, {
        type: "source",
        get position() {
          return Ce.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(K, (L) => {
      f() && L(W);
    });
  }
  var G = M(K, 2);
  return st(G, () => i() ?? Pt), D(e, H), he(Z);
}
hr(["change"]);
ce(
  an,
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
var pw = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), hw = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), gw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), vw = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const mw = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wf(e, t) {
  pe(t, !0), We(e, mw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = at(), i = Jn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = wt(), l = (Z, H) => {
    a(o, (I) => {
      let z = I.data.parameters;
      return z[r()][Z] = H, { parameters: z };
    });
  }, u = (Z, H) => {
    const I = H.target.value;
    l(Z, I);
  }, d = (Z) => {
    const H = Z.target.value;
    l("name", H);
  }, p = (Z) => {
    const H = Z.target.checked;
    l("required", H);
  }, f = (Z) => {
    const H = Z.value;
    l("formType", H);
  }, h = (Z) => {
    const H = Z.value;
    l("contentType", H);
  };
  let y;
  const w = () => {
    a(o, (Z) => {
      let H = Z.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), y?.hide();
  };
  var m = {
    get parameter() {
      return n();
    },
    set parameter(Z) {
      n(Z), g();
    },
    get index() {
      return r();
    },
    set index(Z) {
      r(Z), g();
    }
  }, b = vw(), x = se(b), $ = B(x);
  dt($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), j(x);
  var _ = M(x, 2), S = B(_);
  nf(S, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), j(_);
  var N = M(_, 2), V = B(N);
  return Kt(
    vr(V, {
      placement: "bottom",
      floating: (Z) => {
        var H = hw(), I = B(H), z = M(B(I));
        {
          let R = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          _t(z, {
            get items() {
              return La;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: h
          });
        }
        j(I);
        var k = M(I, 2), O = M(B(k));
        {
          let R = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          _t(O, {
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
        j(k);
        var C = M(k, 2);
        {
          var E = (R) => {
            var X = pw(), U = M(B(X));
            {
              let ne = /* @__PURE__ */ P(() => c(s).enums?.join(`
`));
              qe(U, {
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
            j(X), D(R, X);
          };
          ue(C, (R) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && R(E);
          });
        }
        var T = M(C, 2), K = M(B(T));
        qe(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            u("formLabel", R);
          },
          get value() {
            return c(s).formLabel;
          }
        }), j(T);
        var W = M(T, 2), G = M(B(W));
        qe(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formDescription", R);
          },
          get value() {
            return c(s).formDescription;
          }
        }), j(W);
        var L = M(W, 2), F = M(B(L));
        qe(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formPlaceholder", R);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), j(L);
        var Y = M(L, 2), J = B(Y);
        Ae(J, {
          onclick: w,
          children: (R, X) => {
            xe();
            var U = Pe("删除");
            D(R, U);
          },
          $$slots: { default: !0 }
        }), j(Y), j(H), D(Z, H);
      },
      children: (Z, H) => {
        Ae(Z, {
          class: "input-btn-more",
          children: (I, z) => {
            var k = gw();
            D(I, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (Z) => y = Z,
    () => y
  ), j(N), D(e, b), he(m);
}
ce(wf, { parameter: {}, index: {} }, [], [], !0);
var yw = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), ww = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), bw = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const xw = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function bf(e, t) {
  pe(t, !0), We(e, xw);
  let n = at(), r = Jn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = bw(), s = B(i);
  {
    var a = (u) => {
      var d = yw();
      xe(4), D(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = M(s, 2);
  Tt(
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
      var d = ww();
      D(u, d);
    }
  ), j(i), D(e, i), he();
}
ce(bf, {}, [], [], !0);
const Lo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Yn()), Lo(t.children);
}), e), bn = () => {
  const { updateNodeData: e } = wt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Lo(s?.children)) : Lo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Yn()
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
var _w = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Cw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function xf(e, t) {
  pe(t, !0), We(e, kw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return an(e, Ue(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = _w();
      D(a, l);
    },
    children: (a, l) => {
      var u = $w(), d = se(u), p = B(d);
      Ie(p, {
        level: 3,
        children: (y, w) => {
          xe();
          var m = Pe("输入参数");
          D(y, m);
        },
        $$slots: { default: !0 }
      });
      var f = M(p, 2);
      Ae(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var m = Cw();
          D(y, m);
        },
        $$slots: { default: !0 }
      }), j(d);
      var h = M(d, 2);
      bf(h, {}), D(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), he(s);
}
ce(xf, { data: {} }, [], [], !0);
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
  const t = at(), n = Jn(t), r = /* @__PURE__ */ P(wn), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
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
var Sw = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Ew = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Pw = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Tw = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kf(e, t) {
  pe(t, !0), We(e, Tw), Xn(() => {
    c(u).refType || y({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = at(), l = Jn(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = wt(), p = (O, C) => {
    d(a, (E) => {
      let T = E.data?.[o()];
      return T[r()] = { ...T[r()], [O]: C }, { [o()]: T };
    });
  }, f = (O, C) => {
    const E = C.target.value;
    p(O, E);
  }, h = (O) => {
    const C = O.value;
    p("ref", C);
  }, y = (O) => {
    const C = O.value;
    p("refType", C);
  }, w = (O) => {
    const C = O.value;
    p("contentType", C);
  };
  let m;
  const b = () => {
    d(a, (O) => {
      let C = O.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), m?.hide();
  };
  let x = $f(i());
  var $ = {
    get parameter() {
      return n();
    },
    set parameter(O) {
      n(O), g();
    },
    get index() {
      return r();
    },
    set index(O) {
      r(O), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(O) {
      o(O), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(O) {
      i(O), g();
    },
    get showContentType() {
      return s();
    },
    set showContentType(O = !1) {
      s(O), g();
    }
  }, _ = Pw(), S = se(_), N = B(S);
  {
    let O = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    dt(N, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(O);
      },
      oninput: (C) => f("name", C)
    });
  }
  j(S);
  var V = M(S, 2), Z = B(V);
  {
    var H = (O) => {
      dt(O, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => f("value", C)
      });
    }, I = (O) => {
      var C = Ne(), E = se(C);
      {
        var T = (K) => {
          {
            let W = /* @__PURE__ */ P(() => [c(u).ref]);
            _t(K, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(W);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ue(
          E,
          (K) => {
            c(u).refType !== "input" && K(T);
          },
          !0
        );
      }
      D(O, C);
    };
    ue(Z, (O) => {
      c(u).refType === "fixed" ? O(H) : O(I, !1);
    });
  }
  j(V);
  var z = M(V, 2), k = B(z);
  return Kt(
    vr(k, {
      placement: "bottom",
      floating: (O) => {
        var C = Ew(), E = B(C), T = M(B(E));
        {
          let X = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          _t(T, {
            get items() {
              return Oy;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: y
          });
        }
        j(E);
        var K = M(E, 2);
        {
          var W = (X) => {
            var U = Sw(), ne = M(B(U));
            {
              let re = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              _t(ne, {
                get items() {
                  return La;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: w
              });
            }
            j(U), D(X, U);
          };
          ue(K, (X) => {
            s() && X(W);
          });
        }
        var G = M(K, 2), L = M(B(G));
        qe(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            f("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), j(G);
        var F = M(G, 2), Y = M(B(F));
        qe(Y, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            f("description", X);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), j(F);
        var J = M(F, 2), R = B(J);
        Ae(R, {
          onclick: b,
          children: (X, U) => {
            xe();
            var ne = Pe("删除");
            D(X, ne);
          },
          $$slots: { default: !0 }
        }), j(J), j(C), D(O, C);
      },
      children: (O, C) => {
        Uo(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => m = O,
    () => m
  ), j(z), D(e, _), he($);
}
ce(
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
var Nw = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Ow = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Dw = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Lw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Vt(e, t) {
  pe(t, !0), We(e, Lw);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = at(), a = Jn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(y = "无输入参数") {
      n(y), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(y = "parameters") {
      r(y), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(y) {
      o(y), g();
    },
    get showContentType() {
      return i();
    },
    set showContentType(y = !1) {
      i(y), g();
    }
  }, d = Dw(), p = B(d);
  {
    var f = (y) => {
      var w = Nw();
      xe(4), D(y, w);
    };
    ue(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = M(p, 2);
  return Tt(
    h,
    19,
    () => c(l),
    (y) => y.id,
    (y, w, m) => {
      kf(y, {
        get parameter() {
          return c(w);
        },
        get index() {
          return c(m);
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
    (y) => {
      var w = Ow(), m = B(w, !0);
      j(w), Ee(() => Je(m, n())), D(y, w);
    }
  ), j(d), D(e, d), he(u);
}
ce(
  Vt,
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
var Vw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Mw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Sf(e, t) {
  pe(t, !0), We(e, zw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return an(e, Ue(
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
        var l = Vw();
        D(a, l);
      },
      children: (a, l) => {
        var u = Aw(), d = se(u), p = B(d);
        Ie(p, {
          level: 3,
          children: (y, w) => {
            xe();
            var m = Pe("输出参数");
            D(y, m);
          },
          $$slots: { default: !0 }
        });
        var f = M(p, 2);
        Ae(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var m = Mw();
            D(y, m);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = M(d, 2);
        Vt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(s);
}
ce(Sf, { data: {} }, [], [], !0);
const $s = (e) => JSON.parse(JSON.stringify(e));
var Hw = /* @__PURE__ */ be('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Iw = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Rw = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), jw = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Zw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ef(e, t) {
  pe(t, !0), We(e, Zw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = at(), a = Jn(s), l = /* @__PURE__ */ P(() => {
    let k = a?.current?.data?.[o()], O;
    if (k && r().length > 0) {
      let C = k;
      for (let E = 0; E < r().length; E++) {
        const T = r()[E];
        E == r().length - 1 ? O = C[T] : C = C[T].children;
      }
    }
    return { ...n(), ...O };
  });
  const { updateNodeData: u } = wt(), d = (k, O) => {
    u(s, (C) => {
      const E = C.data?.[o()];
      if (E && r().length > 0) {
        let T = E;
        for (let K = 0; K < r().length; K++) {
          const W = r()[K];
          K == r().length - 1 ? T[W] = { ...T[W], [k]: O } : T = T[W].children;
        }
      }
      return { [o()]: [...$s(E)] };
    });
  }, p = (k, O) => {
    const C = O.target.value;
    d(k, C);
  }, f = (k) => {
    const O = k.value;
    d("dataType", O);
  };
  let h;
  const y = () => {
    u(s, (k) => {
      let O = k.data?.[o()];
      if (O && r().length > 0) {
        let C = O;
        for (let E = 0; E < r().length; E++) {
          const T = r()[E];
          E == r().length - 1 ? C.splice(T, 1) : C = C[T].children;
        }
      }
      return { [o()]: [...$s(O)] };
    }), h?.hide();
  }, w = () => {
    u(s, (k) => {
      let O = k.data?.[o()];
      if (O && r().length > 0) {
        let C = O;
        for (let E = 0; E < r().length; E++) {
          const T = r()[E];
          E == r().length - 1 ? C[T].children ? C[T].children.push({ id: Yn(), name: "newParam", dataType: "String" }) : C[T].children = [{ id: Yn(), name: "newParam", dataType: "String" }] : C = C[T].children;
        }
      }
      return { [o()]: [...$s(O)] };
    });
  };
  var m = {
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
  }, b = jw(), x = se(b), $ = B(x);
  {
    var _ = (k) => {
      var O = Ne(), C = se(O);
      Tt(C, 17, r, Wr, (E, T) => {
        xe();
        var K = Pe(" ");
        D(E, K);
      }), D(k, O);
    };
    ue($, (k) => {
      r().length > 1 && k(_);
    });
  }
  var S = M($, 2);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    dt(S, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (O) => {
        p("name", O);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  j(x);
  var N = M(x, 2), V = B(N);
  {
    let k = /* @__PURE__ */ P(() => c(l).dataTypeItems || Ny), O = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), C = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    _t(V, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(O);
      },
      get disabled() {
        return c(C);
      },
      onSelect: f
    });
  }
  var Z = M(V, 2);
  {
    var H = (k) => {
      Ae(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (O, C) => {
          var E = Hw();
          D(O, E);
        },
        $$slots: { default: !0 }
      });
    };
    ue(Z, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(H);
    });
  }
  j(N);
  var I = M(N, 2), z = B(I);
  return Kt(
    vr(z, {
      placement: "bottom",
      floating: (k) => {
        var O = Rw(), C = B(O), E = M(B(C));
        {
          let L = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          qe(E, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (F) => {
              p("defaultValue", F);
            }
          });
        }
        j(C);
        var T = M(C, 2), K = M(B(T));
        {
          let L = /* @__PURE__ */ P(() => c(l).description || "");
          qe(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (F) => {
              p("description", F);
            }
          });
        }
        j(T);
        var W = M(T, 2);
        {
          var G = (L) => {
            var F = Iw(), Y = B(F);
            Ae(Y, {
              onclick: y,
              children: (J, R) => {
                xe();
                var X = Pe("删除");
                D(J, X);
              },
              $$slots: { default: !0 }
            }), j(F), D(L, F);
          };
          ue(W, (L) => {
            c(l).deleteDisabled !== !0 && L(G);
          });
        }
        j(O), D(k, O);
      },
      children: (k, O) => {
        Uo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), j(I), D(e, b), he(m);
}
ce(
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
var Kw = /* @__PURE__ */ te("<!> <!>", 1), Bw = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Yw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Ww = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Fw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  pe(t, !0), We(e, Fw);
  const n = (y, w = Pt, m = Pt) => {
    var b = Ne(), x = se(b);
    Tt(
      x,
      19,
      w,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, _, S) => {
        var N = Kw(), V = se(N);
        {
          let I = /* @__PURE__ */ P(() => [...m(), c(S)]);
          Ef(V, {
            get parameter() {
              return c(_);
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
        var Z = M(V, 2);
        {
          var H = (I) => {
            {
              let z = /* @__PURE__ */ P(() => [...m(), c(S)]);
              n(I, () => c(_).children, () => c(z));
            }
          };
          ue(Z, (I) => {
            c(_).children && I(H);
          });
        }
        D($, N);
      },
      ($) => {
        var _ = Ne(), S = se(_);
        {
          var N = (V) => {
            var Z = Bw(), H = B(Z, !0);
            j(Z), Ee(() => Je(H, r())), D(V, Z);
          };
          ue(S, (V) => {
            m().length === 0 && V(N);
          });
        }
        D($, _);
      }
    ), D(y, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = at(), a = Jn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(y = "无输出参数") {
      r(y), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(y = "outputDefs") {
      o(y), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(y = "请输入参数名称") {
      i(y), g();
    }
  }, d = Ww(), p = B(d);
  {
    var f = (y) => {
      var w = Yw();
      xe(4), D(y, w);
    };
    ue(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = M(p, 2);
  return n(h, () => c(l) || [], () => []), j(d), D(e, d), he(u);
}
ce(Qn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var qw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Xw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), Uw = /* @__PURE__ */ te('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), Qw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const eb = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Pf(e, t) {
  pe(t, !0), We(e, eb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), s = dr();
  let a = /* @__PURE__ */ Oe(rn([]));
  Xn(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = wt(), u = (p) => {
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
  nt(() => {
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
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = qw();
        D(p, f);
      },
      children: (p, f) => {
        var h = Qw(), y = se(h), w = B(y);
        Ie(w, {
          level: 3,
          children: (L, F) => {
            xe();
            var Y = Pe("输入参数");
            D(L, Y);
          },
          $$slots: { default: !0 }
        });
        var m = M(w, 2);
        Ae(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, F) => {
            var Y = Xw();
            D(L, Y);
          },
          $$slots: { default: !0 }
        }), j(y);
        var b = M(y, 2);
        Vt(b, {});
        var x = M(b, 2), $ = B(x);
        Ie($, {
          level: 3,
          children: (L, F) => {
            xe();
            var Y = Pe("图片识别");
            D(L, Y);
          },
          $$slots: { default: !0 }
        });
        var _ = M($, 2);
        Ae(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (L, F) => {
            var Y = Gw();
            D(L, Y);
          },
          $$slots: { default: !0 }
        }), j(x);
        var S = M(x, 2);
        Vt(S, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = M(S, 2);
        Ie(N, {
          level: 3,
          mt: "10px",
          children: (L, F) => {
            xe();
            var Y = Pe("模型设置");
            D(L, Y);
          },
          $$slots: { default: !0 }
        });
        var V = M(N, 4), Z = B(V);
        {
          let L = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          _t(Z, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (F) => {
              const Y = F.value;
              l(o, () => ({ llmId: Y }));
            },
            get value() {
              return c(L);
            }
          });
        }
        var H = M(Z, 2);
        vr(H, {
          placement: "bottom",
          floating: (L) => {
            var F = Jw(), Y = M(B(F), 2), J = B(Y), R = B(J), X = B(R);
            j(R);
            var U = M(R, 2);
            sr(U), U.__input = (le) => l(o, { temperature: parseFloat(le.target.value) }), j(J), j(Y);
            var ne = M(Y, 2), re = B(ne), ee = B(re), me = B(ee);
            j(ee);
            var de = M(ee, 2);
            sr(de), de.__input = (le) => l(o, { topP: parseFloat(le.target.value) }), j(re), j(ne);
            var ie = M(ne, 2), ae = B(ie), ve = B(ae), ye = B(ve);
            j(ve);
            var we = M(ve, 2);
            sr(we), we.__input = (le) => l(o, { topK: parseInt(le.target.value) }), j(ae), j(ie), j(F), Ee(() => {
              Je(X, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ui(U, n().temperature ?? 0.5), Je(me, `Top P: ${n().topP ?? 0.9 ?? ""}`), ui(de, n().topP ?? 0.9), Je(ye, `Top K: ${n().topK ?? 50 ?? ""}`), ui(we, n().topK ?? 50);
            }), D(L, F);
          },
          children: (L, F) => {
            Uo(L, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), j(V);
        var I = M(V, 4), z = B(I);
        {
          let L = /* @__PURE__ */ P(() => n().systemPrompt || "");
          qe(z, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(L);
            },
            oninput: (F) => {
              l(o, { systemPrompt: F.target.value });
            }
          });
        }
        j(I);
        var k = M(I, 4), O = B(k);
        {
          let L = /* @__PURE__ */ P(() => n().userPrompt || "");
          qe(O, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(L);
            },
            oninput: (F) => {
              l(o, { userPrompt: F.target.value });
            }
          });
        }
        j(k);
        var C = M(k, 2);
        {
          var E = (L) => {
            var F = Uw(), Y = M(se(F), 2), J = B(Y);
            {
              let R = /* @__PURE__ */ P(() => n().jsonSchema || "");
              qe(J, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(R);
                },
                oninput: (X) => {
                  l(o, { jsonSchema: X.target.value });
                }
              });
            }
            j(Y), D(L, F);
          };
          ue(C, (L) => {
            n().outType === "json" && L(E);
          });
        }
        var T = M(C, 2), K = B(T);
        Ie(K, {
          level: 3,
          children: (L, F) => {
            xe();
            var Y = Pe("输出参数");
            D(L, Y);
          },
          $$slots: { default: !0 }
        });
        var W = M(K, 2);
        {
          let L = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          _t(W, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (F) => {
              u(F.value);
            },
            get value() {
              return c(L);
            }
          });
        }
        j(T);
        var G = M(T, 2);
        Qn(G, {}), D(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(d);
}
hr(["input"]);
ce(Pf, { data: {} }, [], [], !0);
var tb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), nb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const ib = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Tf(e, t) {
  pe(t, !0), We(e, ib);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Xn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = at(), { addParameter: i } = bn(), { updateNodeData: s } = wt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = tb();
        D(u, d);
      },
      children: (u, d) => {
        var p = ob(), f = se(p), h = B(f);
        Ie(h, {
          level: 3,
          children: (H, I) => {
            xe();
            var z = Pe("输入参数");
            D(H, z);
          },
          $$slots: { default: !0 }
        });
        var y = M(h, 2);
        Ae(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, I) => {
            var z = nb();
            D(H, z);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = M(f, 2);
        Vt(w, {});
        var m = M(w, 2);
        Ie(m, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            xe();
            var z = Pe("代码");
            D(H, z);
          },
          $$slots: { default: !0 }
        });
        var b = M(m, 4), x = B(b);
        {
          let H = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          _t(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (I) => {
              const z = I.value;
              s(o, () => ({ engine: z }));
            },
            get value() {
              return c(H);
            }
          });
        }
        j(b);
        var $ = M(b, 4), _ = B($);
        {
          let H = /* @__PURE__ */ P(() => n().code || "");
          qe(_, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ code: I.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        j($);
        var S = M($, 2), N = B(S);
        Ie(N, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            xe();
            var z = Pe("输出参数");
            D(H, z);
          },
          $$slots: { default: !0 }
        });
        var V = M(N, 2);
        Ae(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, I) => {
            var z = rb();
            D(H, z);
          },
          $$slots: { default: !0 }
        }), j(S);
        var Z = M(S, 2);
        Qn(Z, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(l);
}
ce(Tf, { data: {} }, [], [], !0);
var sb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ab = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lb = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const ub = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nf(e, t) {
  pe(t, !0), We(e, ub);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), { updateNodeData: s } = wt();
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
      n(l), g();
    }
  };
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = sb();
        D(l, u);
      },
      children: (l, u) => {
        var d = lb(), p = se(d), f = B(p);
        Ie(f, {
          level: 3,
          children: (S, N) => {
            xe();
            var V = Pe("输入参数");
            D(S, V);
          },
          $$slots: { default: !0 }
        });
        var h = M(f, 2);
        Ae(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, N) => {
            var V = ab();
            D(S, V);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = M(p, 2);
        Vt(y, {});
        var w = M(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (S, N) => {
            xe();
            var V = Pe("模板内容");
            D(S, V);
          },
          $$slots: { default: !0 }
        });
        var m = M(w, 2), b = B(m);
        {
          let S = /* @__PURE__ */ P(() => n().template || "");
          qe(b, {
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
        j(m);
        var x = M(m, 2), $ = B(x);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            xe();
            var V = Pe("输出参数");
            D(S, V);
          },
          $$slots: { default: !0 }
        }), j(x);
        var _ = M(x, 2);
        Qn(_, {}), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(a);
}
ce(Nf, { data: {} }, [], [], !0);
var cb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), db = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), hb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), vb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), yb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), wb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), bb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const _b = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Of(e, t) {
  pe(t, !0), We(e, _b);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Xn(() => {
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
  ], i = at(), { addParameter: s } = bn(), { updateNodeData: a } = wt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = cb();
        D(u, d);
      },
      children: (u, d) => {
        var p = xb(), f = se(p), h = B(f);
        Ie(h, {
          level: 3,
          children: (R, X) => {
            xe();
            var U = Pe("输入参数");
            D(R, U);
          },
          $$slots: { default: !0 }
        });
        var y = M(h, 2);
        Ae(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, X) => {
            var U = db();
            D(R, U);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = M(f, 2);
        Vt(w, {});
        var m = M(w, 2);
        Ie(m, {
          level: 3,
          mt: "10px",
          children: (R, X) => {
            xe();
            var U = Pe("URL 地址");
            D(R, U);
          },
          $$slots: { default: !0 }
        });
        var b = M(m, 2), x = B(b), $ = B(x);
        {
          let R = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          _t($, {
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
              return c(R);
            }
          });
        }
        j(x);
        var _ = M(x, 2), S = B(_);
        {
          let R = /* @__PURE__ */ P(() => n().url || "");
          dt(S, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(R);
            }
          });
        }
        j(_), j(b);
        var N = M(b, 2), V = B(N);
        Ie(V, {
          level: 3,
          children: (R, X) => {
            xe();
            var U = Pe("Http 头信息");
            D(R, U);
          },
          $$slots: { default: !0 }
        });
        var Z = M(V, 2);
        Ae(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, X) => {
            var U = fb();
            D(R, U);
          },
          $$slots: { default: !0 }
        }), j(N);
        var H = M(N, 2);
        Vt(H, { dataKeyName: "headers" });
        var I = M(H, 2);
        {
          var z = (R) => {
            var X = pb(), U = se(X);
            Ie(U, {
              level: 3,
              mt: "10px",
              children: (_e, Me) => {
                xe();
                var q = Pe("Body");
                D(_e, q);
              },
              $$slots: { default: !0 }
            });
            var ne = M(U, 2), re = B(ne), ee = B(re);
            {
              let _e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              dt(ee, {
                type: "radio",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            xe(), j(re);
            var me = M(re, 2), de = B(me);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              dt(de, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            xe(), j(me);
            var ie = M(me, 2), ae = B(ie);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              dt(ae, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            xe(), j(ie);
            var ve = M(ie, 2), ye = B(ve);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "json");
              dt(ye, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            xe(), j(ve);
            var we = M(ve, 2), le = B(we);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "raw");
              dt(le, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            xe(), j(we), j(ne), D(R, X);
          };
          ue(I, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(z);
          });
        }
        var k = M(I, 2);
        {
          var O = (R) => {
            var X = gb(), U = se(X), ne = B(U);
            Ie(ne, {
              level: 3,
              children: (me, de) => {
                xe();
                var ie = Pe("参数");
                D(me, ie);
              },
              $$slots: { default: !0 }
            });
            var re = M(ne, 2);
            Ae(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (me, de) => {
                var ie = hb();
                D(me, ie);
              },
              $$slots: { default: !0 }
            }), j(U);
            var ee = M(U, 2);
            Vt(ee, { dataKeyName: "formData" }), D(R, X);
          };
          ue(k, (R) => {
            n().bodyType === "form-data" && R(O);
          });
        }
        var C = M(k, 2);
        {
          var E = (R) => {
            var X = mb(), U = se(X), ne = B(U);
            Ie(ne, {
              level: 3,
              children: (me, de) => {
                xe();
                var ie = Pe("Body 参数");
                D(me, ie);
              },
              $$slots: { default: !0 }
            });
            var re = M(ne, 2);
            Ae(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (me, de) => {
                var ie = vb();
                D(me, ie);
              },
              $$slots: { default: !0 }
            }), j(U);
            var ee = M(U, 2);
            Vt(ee, { dataKeyName: "formUrlencoded" }), D(R, X);
          };
          ue(C, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(E);
          });
        }
        var T = M(C, 2);
        {
          var K = (R) => {
            var X = yb(), U = B(X);
            qe(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), j(X), D(R, X);
          };
          ue(T, (R) => {
            n().bodyType === "json" && R(K);
          });
        }
        var W = M(T, 2);
        {
          var G = (R) => {
            var X = wb(), U = B(X);
            qe(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), j(X), D(R, X);
          };
          ue(W, (R) => {
            n().bodyType === "raw" && R(G);
          });
        }
        var L = M(W, 2), F = B(L);
        Ie(F, {
          level: 3,
          mt: "10px",
          children: (R, X) => {
            xe();
            var U = Pe("输出参数");
            D(R, U);
          },
          $$slots: { default: !0 }
        });
        var Y = M(F, 2);
        Ae(Y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, X) => {
            var U = bb();
            D(R, U);
          },
          $$slots: { default: !0 }
        }), j(L);
        var J = M(L, 2);
        Qn(J, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(l);
}
ce(Of, { data: {} }, [], [], !0);
var Cb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), $b = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kb = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Sb = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Df(e, t) {
  pe(t, !0), We(e, Sb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), s = dr();
  let a = /* @__PURE__ */ Oe(rn([]));
  Xn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
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
      n(d), g();
    }
  };
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Cb();
        D(d, p);
      },
      children: (d, p) => {
        var f = kb(), h = se(f), y = B(h);
        Ie(y, {
          level: 3,
          children: (z, k) => {
            xe();
            var O = Pe("输入参数");
            D(z, O);
          },
          $$slots: { default: !0 }
        });
        var w = M(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var O = $b();
            D(z, O);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = M(h, 2);
        Vt(m, {});
        var b = M(m, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            xe();
            var O = Pe("知识库设置");
            D(z, O);
          },
          $$slots: { default: !0 }
        });
        var x = M(b, 4), $ = B(x);
        {
          let z = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          _t($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const O = k.value;
              l(o, () => ({ knowledgeId: O }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(x);
        var _ = M(x, 4), S = B(_);
        dt(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(_);
        var N = M(_, 4), V = B(N);
        {
          let z = /* @__PURE__ */ P(() => n().limit || "");
          dt(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const O = k.target.value;
              l(o, () => ({ limit: O }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(N);
        var Z = M(N, 2), H = B(Z);
        Ie(H, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            xe();
            var O = Pe("输出参数");
            D(z, O);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = M(Z, 2);
        Qn(I, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(u);
}
ce(Df, { data: {} }, [], [], !0);
var Eb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Pb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tb = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Nb = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Lf(e, t) {
  pe(t, !0), We(e, Nb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), s = dr();
  let a = /* @__PURE__ */ Oe(rn([]));
  Xn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
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
      n(d), g();
    }
  };
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Eb();
        D(d, p);
      },
      children: (d, p) => {
        var f = Tb(), h = se(f), y = B(h);
        Ie(y, {
          level: 3,
          children: (z, k) => {
            xe();
            var O = Pe("输入参数");
            D(z, O);
          },
          $$slots: { default: !0 }
        });
        var w = M(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var O = Pb();
            D(z, O);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = M(h, 2);
        Vt(m, {});
        var b = M(m, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            xe();
            var O = Pe("搜索引擎设置");
            D(z, O);
          },
          $$slots: { default: !0 }
        });
        var x = M(b, 4), $ = B(x);
        {
          let z = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          _t($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const O = k.value;
              l(o, () => ({ engine: O }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(x);
        var _ = M(x, 4), S = B(_);
        dt(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(_);
        var N = M(_, 4), V = B(N);
        dt(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ limit: k }));
          }
        }), j(N);
        var Z = M(N, 2), H = B(Z);
        Ie(H, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            xe();
            var O = Pe("输出参数");
            D(z, O);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = M(Z, 2);
        Qn(I, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(u);
}
ce(Lf, { data: {} }, [], [], !0);
var Ob = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Db = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lb = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Vb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Vf(e, t) {
  pe(t, !0), We(e, Vb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn();
  nt(() => {
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
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Ob();
        D(a, l);
      },
      handle: (a) => {
        ur(a, {
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
        var u = Lb(), d = se(u), p = B(d);
        Ie(p, {
          level: 3,
          children: (b, x) => {
            xe();
            var $ = Pe("循环变量");
            D(b, $);
          },
          $$slots: { default: !0 }
        }), j(d);
        var f = M(d, 2);
        Vt(f, { dataKeyName: "loopVars" });
        var h = M(f, 2), y = B(h);
        Ie(y, {
          level: 3,
          children: (b, x) => {
            xe();
            var $ = Pe("输出参数");
            D(b, $);
          },
          $$slots: { default: !0 }
        });
        var w = M(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var $ = Db();
            D(b, $);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = M(h, 2);
        Vt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he(s);
}
ce(Vf, { data: {} }, [], [], !0);
var Mb = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Ab = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const zb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Mf(e, t) {
  pe(t, !0), We(e, zb);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = at(), a = Jn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = wt(), d = (k, O) => {
    u(s, (C) => {
      let E = C.data?.[o()];
      return E[r()] = { ...E[r()], [k]: O }, { [o()]: E };
    });
  }, p = (k, O) => {
    const C = O.target.value;
    d(k, C);
  }, f = (k) => {
    const O = k.value;
    d("ref", O);
  }, h = (k) => {
    const O = k.value;
    d("formType", O);
  }, y = (k) => {
    const O = k.value;
    d("contentType", O);
  };
  let w;
  const m = () => {
    u(s, (k) => {
      let O = k.data?.[o()];
      return O.splice(r(), 1), { [o()]: [...O] };
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
  }, $ = Ab(), _ = se($), S = B(_);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    dt(S, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (O) => p("name", O)
    });
  }
  j(_);
  var N = M(_, 2), V = B(N);
  {
    var Z = (k) => {
      dt(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (O) => p("value", O)
      });
    }, H = (k) => {
      var O = Ne(), C = se(O);
      {
        var E = (T) => {
          {
            let K = /* @__PURE__ */ P(() => [c(l).ref]);
            _t(T, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(K);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ue(
          C,
          (T) => {
            c(l).refType !== "input" && T(E);
          },
          !0
        );
      }
      D(k, O);
    };
    ue(V, (k) => {
      c(l).refType === "fixed" ? k(Z) : k(H, !1);
    });
  }
  j(N);
  var I = M(N, 2), z = B(I);
  return Kt(
    vr(z, {
      placement: "bottom",
      floating: (k) => {
        var O = Mb(), C = B(O), E = M(B(C));
        {
          let R = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          _t(E, {
            get items() {
              return La;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: y
          });
        }
        j(C);
        var T = M(C, 2), K = M(B(T));
        {
          let R = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          _t(K, {
            get items() {
              return Ly;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(R);
            },
            onSelect: h
          });
        }
        j(T);
        var W = M(T, 2), G = M(B(W));
        qe(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            p("formLabel", R);
          },
          get value() {
            return c(l).formLabel;
          }
        }), j(W);
        var L = M(W, 2), F = M(B(L));
        qe(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            p("formDescription", R);
          },
          get value() {
            return c(l).formDescription;
          }
        }), j(L);
        var Y = M(L, 2), J = B(Y);
        Ae(J, {
          onclick: m,
          children: (R, X) => {
            xe();
            var U = Pe("删除");
            D(R, U);
          },
          $$slots: { default: !0 }
        }), j(Y), j(O), D(k, O);
      },
      children: (k, O) => {
        Uo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => w = k,
    () => w
  ), j(I), D(e, $), he(x);
}
ce(
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
var Hb = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Ib = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Rb = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const jb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Af(e, t) {
  pe(t, !0), We(e, jb);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = at(), s = Jn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = Rb(), d = B(u);
  {
    var p = (h) => {
      var y = Hb();
      xe(4), D(h, y);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = M(d, 2);
  return Tt(
    f,
    19,
    () => c(a),
    (h) => h.id,
    (h, y, w) => {
      Mf(h, {
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
        }
      });
    },
    (h) => {
      var y = Ib(), w = B(y, !0);
      j(y), Ee(() => Je(w, n())), D(h, y);
    }
  ), j(u), D(e, u), he(l);
}
ce(Af, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Xs = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Xs(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Xs(e[s], t[s])) return !1;
    return !0;
  }
};
var Zb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Kb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bb = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Yb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zf(e, t) {
  pe(t, !0), We(e, Yb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), { updateNodeData: s } = wt();
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
      Xs(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return an(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Zb();
        D(l, u);
      },
      children: (l, u) => {
        var d = Bb(), p = se(d), f = B(p);
        Ie(f, {
          level: 3,
          children: (S, N) => {
            xe();
            var V = Pe("确认数据");
            D(S, V);
          },
          $$slots: { default: !0 }
        });
        var h = M(f, 2);
        Ae(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (S, N) => {
            var V = Kb();
            D(S, V);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = M(p, 2);
        Af(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = M(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            xe();
            var V = Pe("确认消息");
            D(S, V);
          },
          $$slots: { default: !0 }
        });
        var m = M(w, 4), b = B(m);
        {
          let S = /* @__PURE__ */ P(() => n().message || "");
          qe(b, {
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
        j(m);
        var x = M(m, 2), $ = B(x);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            xe();
            var V = Pe("输出参数");
            D(S, V);
          },
          $$slots: { default: !0 }
        }), j(x);
        var _ = M(x, 2);
        Qn(_, { placeholder: "" }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he(a);
}
ce(zf, { data: {} }, [], [], !0);
const Wb = {
  startNode: xf,
  codeNode: Tf,
  confirmNode: zf,
  llmNode: Pf,
  templateNode: Nf,
  httpNode: Of,
  knowledgeNode: Df,
  searchEngineNode: Lf,
  loopNode: Vf,
  endNode: Sf
};
var Fb = /* @__PURE__ */ te("<!> ", 1);
function Gs(e, t) {
  pe(t, !0);
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
  return Ae(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = Fb(), f = se(p);
      ha(f, n);
      var h = M(f);
      Ee(() => Je(h, ` ${r() ?? ""}`)), D(u, p);
    },
    $$slots: { default: !0 }
  }), he(l);
}
ce(Gs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var qb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Xb = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Gb = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Hf(e, t) {
  pe(t, !0);
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
  ], s = [], a = dr(), l = a.customNodes;
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
  var u = Gb(), d = B(u), p = B(d), f = B(p);
  of(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), j(p);
  var h = M(p, 2), y = B(h);
  Tt(y, 21, () => o, Wr, (b, x) => {
    Gs(b, Ue(() => c(x)));
  }), j(y);
  var w = M(y, 2);
  Tt(w, 21, () => s, Wr, (b, x) => {
    Gs(b, Ue(() => c(x)));
  }), j(w), j(h), j(d);
  var m = M(d, 2);
  Ae(m, {
    onclick: () => {
      Q(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var $ = Ne(), _ = se($);
      {
        var S = (V) => {
          var Z = qb();
          D(V, Z);
        }, N = (V) => {
          var Z = Xb();
          D(V, Z);
        };
        ue(_, (V) => {
          c(r) === "show" ? V(S) : V(N, !1);
        });
      }
      D(b, $);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => {
    Zt(u, 1, `tf-toolbar ${c(r) ?? ""}`), $t(y, `display: ${c(n) === "base" ? "flex" : "none"}`), $t(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), he();
}
ce(Hf, {}, [], [], !0);
const Jb = () => ({ getNode: (e) => Re.getNode(e) }), Ub = () => ({ ensureParentInNodesBefore: (e, t) => {
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
} }), Qb = () => ({ getEdgesByTarget: (e) => Re.getEdges().filter((t) => t.target === e) });
var ex = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tx = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), nx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), rx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ox = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), ix = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), sx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ax = /* @__PURE__ */ be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lx = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), ux = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const cx = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function If(e, t) {
  pe(t, !0), We(e, cx);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = bn(), s = wt(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, u = (m, b) => {
    l({ [m]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = dr().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let y;
  nt(() => {
    n().expand && y && y.append(p);
  }), nt(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), nt(() => {
    !n().parameters && f.parameters && l({
      parameters: Lo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), nt(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Lo(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(m) {
      n(m), g();
    }
  };
  {
    const m = (x) => {
      var $ = Ne(), _ = se($);
      ha(_, () => f.icon), D(x, $);
    };
    let b = /* @__PURE__ */ P(() => ({ ...n(), description: f.description }));
    an(e, Ue(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: m,
        children: (x, $) => {
          var _ = ux(), S = se(_);
          {
            var N = (k) => {
              var O = tx(), C = se(O), E = B(C);
              Ie(E, {
                level: 3,
                children: (G, L) => {
                  xe();
                  var F = Pe("输入参数");
                  D(G, F);
                },
                $$slots: { default: !0 }
              });
              var T = M(E, 2);
              {
                var K = (G) => {
                  Ae(G, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (L, F) => {
                      var Y = ex();
                      D(L, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(T, (G) => {
                  f.parametersAddEnable !== !1 && G(K);
                });
              }
              j(C);
              var W = M(C, 2);
              Vt(W, {}), D(k, O);
            };
            ue(S, (k) => {
              f.parametersEnable !== !1 && k(N);
            });
          }
          var V = M(S, 2);
          {
            var Z = (k) => {
              var O = Ne(), C = se(O);
              Tt(C, 17, () => h, Wr, (E, T) => {
                var K = Ne(), W = se(K);
                {
                  var G = (F) => {
                    var Y = nx(), J = se(Y), R = B(J, !0);
                    j(J);
                    var X = M(J, 2), U = B(X);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[c(T).name] || c(T).defaultValue);
                      dt(U, Ue(
                        {
                          get placeholder() {
                            return c(T).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(T).attrs,
                        {
                          onchange: (re) => {
                            u(c(T).name, re);
                          }
                        }
                      ));
                    }
                    j(X), Ee(() => Je(R, c(T).label)), D(F, Y);
                  }, L = (F) => {
                    var Y = Ne(), J = se(Y);
                    {
                      var R = (U) => {
                        var ne = rx(), re = se(ne), ee = B(re, !0);
                        j(re);
                        var me = M(re, 2), de = B(me);
                        {
                          let ie = /* @__PURE__ */ P(() => n()[c(T).name] || c(T).defaultValue);
                          qe(de, Ue(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(T).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(T).attrs,
                            {
                              onchange: (ae) => {
                                u(c(T).name, ae);
                              }
                            }
                          ));
                        }
                        j(me), Ee(() => Je(ee, c(T).label)), D(U, ne);
                      }, X = (U) => {
                        var ne = Ne(), re = se(ne);
                        {
                          var ee = (de) => {
                            var ie = ox(), ae = se(ie), ve = B(ae, !0);
                            j(ae);
                            var ye = M(ae, 2), we = B(ye), le = B(we), _e = B(le);
                            j(le);
                            var Me = M(le, 2), q = (Ye) => l({ [c(T).name]: parseFloat(Ye.target.value) });
                            gt(
                              Me,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(T).attrs,
                                value: n()[c(T).name] ?? c(T).defaultValue,
                                oninput: q
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), j(we), j(ye), Ee(() => {
                              Je(ve, c(T).label), Je(_e, `${c(T).description ?? ""}: ${n()[c(T).name] ?? c(T).defaultValue ?? ""}`);
                            }), D(de, ie);
                          }, me = (de) => {
                            var ie = Ne(), ae = se(ie);
                            {
                              var ve = (we) => {
                                var le = ix(), _e = se(le), Me = B(_e, !0);
                                j(_e);
                                var q = M(_e, 2), Ye = B(q);
                                {
                                  let ze = /* @__PURE__ */ P(() => c(T).options || []), Ke = /* @__PURE__ */ P(() => n()[c(T).name] ? [n()[c(T).name]] : [c(T).defaultValue]);
                                  _t(Ye, {
                                    get items() {
                                      return c(ze);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(T).placeholder;
                                    },
                                    onSelect: (Fe) => {
                                      const tt = Fe.value;
                                      l({ [c(T).name]: tt });
                                    },
                                    get value() {
                                      return c(Ke);
                                    }
                                  });
                                }
                                j(q), Ee(() => Je(Me, c(T).label)), D(we, le);
                              }, ye = (we) => {
                                var le = Ne(), _e = se(le);
                                {
                                  var Me = (Ye) => {
                                    var ze = sx(), Ke = se(ze), Fe = B(Ke, !0);
                                    j(Ke);
                                    var tt = M(Ke, 2), vt = B(tt);
                                    {
                                      let Bt = /* @__PURE__ */ P(() => c(T).chosen?.buttonText);
                                      rf(vt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(T).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Bt);
                                        },
                                        onChosen: (lt, fe, Te) => {
                                          c(T).chosen?.onChosen?.(l, lt, fe, Te);
                                        },
                                        get value() {
                                          return n()[c(T).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(T).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    j(tt), Ee(() => Je(Fe, c(T).label)), D(Ye, ze);
                                  }, q = (Ye) => {
                                    var ze = Ne(), Ke = se(ze);
                                    {
                                      var Fe = (tt) => {
                                        Ie(tt, Ue({ level: 3, mt: "10px" }, () => c(T).attrs, {
                                          children: (vt, Bt) => {
                                            xe();
                                            var lt = Pe();
                                            Ee(() => Je(lt, c(T).label)), D(vt, lt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        Ke,
                                        (tt) => {
                                          c(T).type === "heading" && tt(Fe);
                                        },
                                        !0
                                      );
                                    }
                                    D(Ye, ze);
                                  };
                                  ue(
                                    _e,
                                    (Ye) => {
                                      c(T).type === "chosen" ? Ye(Me) : Ye(q, !1);
                                    },
                                    !0
                                  );
                                }
                                D(we, le);
                              };
                              ue(
                                ae,
                                (we) => {
                                  c(T).type === "select" ? we(ve) : we(ye, !1);
                                },
                                !0
                              );
                            }
                            D(de, ie);
                          };
                          ue(
                            re,
                            (de) => {
                              c(T).type === "slider" ? de(ee) : de(me, !1);
                            },
                            !0
                          );
                        }
                        D(U, ne);
                      };
                      ue(
                        J,
                        (U) => {
                          c(T).type === "textarea" ? U(R) : U(X, !1);
                        },
                        !0
                      );
                    }
                    D(F, Y);
                  };
                  ue(W, (F) => {
                    c(T).type === "input" ? F(G) : F(L, !1);
                  });
                }
                D(E, K);
              }), D(k, O);
            };
            ue(V, (k) => {
              h && k(Z);
            });
          }
          var H = M(V, 2);
          Kt(H, (k) => y = k, () => y);
          var I = M(H, 2);
          {
            var z = (k) => {
              var O = lx(), C = se(O), E = B(C);
              Ie(E, {
                level: 3,
                mt: "10px",
                children: (G, L) => {
                  xe();
                  var F = Pe("输出参数");
                  D(G, F);
                },
                $$slots: { default: !0 }
              });
              var T = M(E, 2);
              {
                var K = (G) => {
                  Ae(G, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (L, F) => {
                      var Y = ax();
                      D(L, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(T, (G) => {
                  f.outputDefsAddEnable !== !1 && G(K);
                });
              }
              j(C);
              var W = M(C, 2);
              Qn(W, {}), D(k, O);
            };
            ue(I, (k) => {
              f.outputDefsEnable !== !1 && k(z);
            });
          }
          Ee(() => {
            $t(H, f.rootStyle || ""), Zt(H, 1, Gn(f.rootClass), "svelte-qt4m0r");
          }), D(x, _);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return he(w);
}
ce(If, { data: {} }, [], [], !0);
const dx = () => ({ updateEdgeData: (e, t, n) => {
  const r = Re.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Re.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), fx = () => ({ deleteEdge: (e) => {
  Re.removeEdge(e);
} }), px = () => {
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
}, hx = () => ({ getNodeRelativePosition: (e) => {
  let t = Re.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Re.getNode(t.parentId) : t = void 0;
  return n;
} });
function gx(e) {
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
function vx(e) {
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
function mx(e) {
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
function Js(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Js(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Js(e[r], t));
    return n;
  }
  return e;
}
const yx = () => (wt(), { copyHandler: async (e) => {
  const t = Re.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Re.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(gx), o = n.map(mx), i = JSON.stringify({
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
  const r = vx(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Yn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, p = Js(l.data, i);
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
      id: `edge_${Yn()}`,
      source: u,
      target: d
    });
  }
  Re.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Re.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ou = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var wx = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), bx = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), xx = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const _x = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Rf(e, t) {
  pe(t, !0), We(e, _x);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = wt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Oe(!1), s = /* @__PURE__ */ Oe(null);
  const { updateEdgeData: a } = dx(), l = (Y) => {
    Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
  }, u = (Y) => {
    Y.preventDefault();
    const J = o.screenToFlowPosition({ x: Y.clientX - 250, y: Y.clientY - 100 }), R = Y.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const X = JSON.parse(R), U = { id: `node_${Yn()}`, position: J, data: {}, ...X };
    Re.addNode(U), Re.selectNodeOnly(U.id);
  }, { getNode: d } = Jb(), p = (Y) => {
    const J = d(Y.source), R = d(Y.target);
    if (Y.sourceHandle === "loop_handle" || J.parentId) {
      const X = o.getEdges();
      for (let U of X)
        if (U.target === Y.target) {
          const ne = d(U.source);
          if (Y.sourceHandle === "loop_handle" && ne.parentId !== J.id || J.parentId && ne.parentId !== J.parentId)
            return !1;
        }
    }
    return !(!J.parentId && R.parentId && R.parentId !== J.id);
  }, { getNodesFromSource: f } = px(), { getNodeRelativePosition: h } = hx(), { ensureParentInNodesBefore: y } = Ub(), w = (Y, J) => {
    if (!J.isValid)
      return;
    const R = J.toNode;
    if (R.parentId)
      return;
    const X = J.fromNode, U = J.fromHandle, ne = { position: { ...R.position } };
    if (U.id === "loop_handle" ? ne.parentId = X.id : X.parentId && (ne.parentId = X.parentId), ne.parentId) {
      const { x: re, y: ee } = h(ne.parentId);
      ne.position = { x: R.position.x - re, y: R.position.y - ee }, o.updateNode(R.id, ne), f(R.id).forEach((me) => {
        o.updateNode(me.id, {
          parentId: ne.parentId,
          position: { x: me.position.x - re, y: me.position.y - ee }
        });
      }), y(ne.parentId, R.id);
    }
    setTimeout(() => {
      Re.getEdges().forEach((re) => {
        re.target === R.id && re.source == X.id && (Q(i, !0), Q(s, re, !0));
      });
    });
  }, { getEdgesByTarget: m } = Qb(), b = (Y) => {
    Y.edges.forEach((J) => {
      J.id === c(s)?.id && (Q(s, null), Q(i, !1));
      const R = d(J.target);
      if (R && R.parentId) {
        const X = m(J.target), { x: U, y: ne } = h(R.parentId);
        if (X.length === 0)
          o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + U, y: R.position.y + ne }
          }), f(R.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + U, y: re.position.y + ne }
            });
          });
        else {
          let re = !1;
          for (let ee = 0; ee < X.length; ee++) {
            const me = X[ee], de = d(me.source);
            if (de.parentId || de.type === "loopNode") {
              re = !0;
              break;
            }
          }
          re || (o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + U, y: R.position.y + ne }
          }), f(R.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + U, y: ee.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: x } = fx(), $ = (Y, J) => {
  }, _ = (Y) => {
  }, { copyHandler: S, pasteHandler: N } = yx(), V = (Y) => {
    ou() || ((Y.ctrlKey || Y.metaKey) && Y.key === "c" && (Y.preventDefault(), S(Y)), (Y.ctrlKey || Y.metaKey) && Y.key === "a" && (Y.preventDefault(), Re.updateNodes((J) => J.map((R) => ({ ...R, selected: !0 }))), Re.updateEdges((J) => J.map((R) => ({ ...R, selected: !0 })))));
  }, Z = async (Y) => {
    ou() || N(Y);
  };
  Xn(() => {
    window.addEventListener("keydown", V), window.addEventListener("paste", Z);
  }), Ro(() => {
    window.removeEventListener("keydown", V), window.removeEventListener("paste", Z);
  });
  const H = {
    // ...nodeTypes
  }, I = dr().customNodes;
  if (I)
    for (let Y of Object.keys(I))
      H[Y] = If;
  const z = dr().onDataChange;
  nt(() => {
    z?.({
      nodes: Re.getNodes(),
      edges: Re.getEdges(),
      viewport: Re.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(Y) {
      n(Y), g();
    }
  }, O = xx(), C = B(O), E = Re.getNodes, T = Re.setNodes, K = Re.getEdges, W = Re.setEdges, G = Re.getViewport, L = Re.setViewport;
  {
    let Y = /* @__PURE__ */ P(() => ({ ...Wb, ...H })), J = /* @__PURE__ */ P(() => ({
      markerEnd: { type: Po.ArrowClosed, width: 20, height: 20 }
    }));
    Zd(C, {
      get nodeTypes() {
        return c(Y);
      },
      get nodes() {
        return E();
      },
      set nodes(R) {
        T(R);
      },
      get edges() {
        return K();
      },
      set edges(R) {
        W(R);
      },
      get viewport() {
        return G();
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
      onconnect: _,
      connectionRadius: 50,
      onedgeclick: (R) => {
        Q(i, !0), Q(s, R.edge, !0);
      },
      onbeforeconnect: (R) => ({ ...R, id: Yn() }),
      ondelete: b,
      onclick: (R) => {
        const X = R.target;
        X.classList.contains("svelte-flow__edge-interaction") || X.classList.contains("panel-content") || X.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return c(J);
      },
      children: (R, X) => {
        var U = bx(), ne = se(U);
        Ud(ne, {});
        var re = M(ne, 2);
        Xd(re, {});
        var ee = M(re, 2);
        ef(ee, {});
        var me = M(ee, 2);
        {
          var de = (ie) => {
            qo(ie, {
              children: (ae, ve) => {
                var ye = wx(), we = M(B(ye), 4), le = B(we);
                {
                  let Ye = /* @__PURE__ */ P(() => c(s)?.data?.condition);
                  qe(le, {
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
                j(we);
                var _e = M(we, 2), Me = B(_e);
                Ae(Me, {
                  onclick: () => {
                    x(c(s)?.id), Q(i, !1);
                  },
                  children: (Ye, ze) => {
                    xe();
                    var Ke = Pe("删除");
                    D(Ye, Ke);
                  },
                  $$slots: { default: !0 }
                });
                var q = M(Me, 2);
                Ae(q, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (Ye, ze) => {
                    xe();
                    var Ke = Pe("保存");
                    D(Ye, Ke);
                  },
                  $$slots: { default: !0 }
                }), j(_e), j(ye), D(ae, ye);
              },
              $$slots: { default: !0 }
            });
          };
          ue(me, (ie) => {
            c(i) && ie(de);
          });
        }
        D(R, U);
      },
      $$slots: { default: !0 }
    });
  }
  var F = M(C, 2);
  return Hf(F, {}), j(O), D(e, O), he(k);
}
ce(Rf, { onInit: {} }, [], [], !0);
function Cx(e, t) {
  pe(t, !0);
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
  }), he(i);
}
customElements.define("tinyflow-component", ce(Cx, { options: {}, onInit: {} }, [], [], !1));
const kx = Jf((e, t) => {
  const n = Ba(null), r = Ba(null);
  Uf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
    getInstance: () => r.current ? r.current : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Qf(() => {
    if (n.current) {
      const a = new Vy({
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
  kx as Tinyflow
};
//# sourceMappingURL=index.js.map
