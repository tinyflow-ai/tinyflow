import iu, { forwardRef as Gf, useRef as Ba, useImperativeHandle as Jf, useEffect as Qf } from "react";
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
var Wa;
function ep() {
  if (Wa) return so;
  Wa = 1;
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
var Fa;
function tp() {
  return Fa || (Fa = 1, process.env.NODE_ENV !== "production" && function() {
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
        for (var oe = arguments.length, he = new Array(oe > 1 ? oe - 1 : 0), Ee = 1; Ee < oe; Ee++)
          he[Ee - 1] = arguments[Ee];
        $("error", A, he);
      }
    }
    function $(A, oe, he) {
      {
        var Ee = b.ReactDebugCurrentFrame, We = Ee.getStackAddendum();
        We !== "" && (oe += "%s", he = he.concat([We]));
        var Ue = he.map(function(He) {
          return String(He);
        });
        Ue.unshift("Warning: " + oe), Function.prototype.apply.call(console[A], console, Ue);
      }
    }
    var C = !1, S = !1, T = !1, D = !1, Z = !1, H;
    H = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === i || Z || A === o || A === u || A === d || D || A === h || C || S || T || typeof A == "object" && A !== null && (A.$$typeof === f || A.$$typeof === p || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === H || A.getModuleId !== void 0));
    }
    function z(A, oe, he) {
      var Ee = A.displayName;
      if (Ee)
        return Ee;
      var We = oe.displayName || oe.name || "";
      return We !== "" ? he + "(" + We + ")" : he;
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
            var he = A;
            return k(he._context) + ".Provider";
          case l:
            return z(A, A.render, "ForwardRef");
          case p:
            var Ee = A.displayName || null;
            return Ee !== null ? Ee : O(A.type) || "Memo";
          case f: {
            var We = A, Ue = We._payload, He = We._init;
            try {
              return O(He(Ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, E = 0, N, K, W, F, L, U, X;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function R() {
      {
        if (E === 0) {
          N = console.log, K = console.info, W = console.warn, F = console.error, L = console.group, U = console.groupCollapsed, X = console.groupEnd;
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
    function q() {
      {
        if (E--, E === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, A, {
              value: N
            }),
            info: _({}, A, {
              value: K
            }),
            warn: _({}, A, {
              value: W
            }),
            error: _({}, A, {
              value: F
            }),
            group: _({}, A, {
              value: L
            }),
            groupCollapsed: _({}, A, {
              value: U
            }),
            groupEnd: _({}, A, {
              value: X
            })
          });
        }
        E < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = b.ReactCurrentDispatcher, ne;
    function re(A, oe, he) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (We) {
            var Ee = We.stack.trim().match(/\n( *(at )?)/);
            ne = Ee && Ee[1] || "";
          }
        return `
` + ne + A;
      }
    }
    var ee = !1, ve;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new ce();
    }
    function ie(A, oe) {
      if (!A || ee)
        return "";
      {
        var he = ve.get(A);
        if (he !== void 0)
          return he;
      }
      var Ee;
      ee = !0;
      var We = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ue;
      Ue = G.current, G.current = null, R();
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
            } catch (zt) {
              Ee = zt;
            }
            Reflect.construct(A, [], He);
          } else {
            try {
              He.call();
            } catch (zt) {
              Ee = zt;
            }
            A.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            Ee = zt;
          }
          A();
        }
      } catch (zt) {
        if (zt && Ee && typeof zt.stack == "string") {
          for (var De = zt.stack.split(`
`), Mt = Ee.stack.split(`
`), lt = De.length - 1, dt = Mt.length - 1; lt >= 1 && dt >= 0 && De[lt] !== Mt[dt]; )
            dt--;
          for (; lt >= 1 && dt >= 0; lt--, dt--)
            if (De[lt] !== Mt[dt]) {
              if (lt !== 1 || dt !== 1)
                do
                  if (lt--, dt--, dt < 0 || De[lt] !== Mt[dt]) {
                    var en = `
` + De[lt].replace(" at new ", " at ");
                    return A.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", A.displayName)), typeof A == "function" && ve.set(A, en), en;
                  }
                while (lt >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        ee = !1, G.current = Ue, q(), Error.prepareStackTrace = We;
      }
      var Lr = A ? A.displayName || A.name : "", yr = Lr ? re(Lr) : "";
      return typeof A == "function" && ve.set(A, yr), yr;
    }
    function ae(A, oe, he) {
      return ie(A, !1);
    }
    function me(A) {
      var oe = A.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function ge(A, oe, he) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ie(A, me(A));
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
            return ge(A.type, oe, he);
          case f: {
            var Ee = A, We = Ee._payload, Ue = Ee._init;
            try {
              return ge(Ue(We), oe, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, de = {}, _e = b.ReactDebugCurrentFrame;
    function Ve(A) {
      if (A) {
        var oe = A._owner, he = ge(A.type, A._source, oe ? oe.type : null);
        _e.setExtraStackFrame(he);
      } else
        _e.setExtraStackFrame(null);
    }
    function Y(A, oe, he, Ee, We) {
      {
        var Ue = Function.call.bind(xe);
        for (var He in A)
          if (Ue(A, He)) {
            var De = void 0;
            try {
              if (typeof A[He] != "function") {
                var Mt = Error((Ee || "React class") + ": " + he + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mt.name = "Invariant Violation", Mt;
              }
              De = A[He](oe, He, Ee, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (lt) {
              De = lt;
            }
            De && !(De instanceof Error) && (Ve(We), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", he, He, typeof De), Ve(null)), De instanceof Error && !(De.message in de) && (de[De.message] = !0, Ve(We), x("Failed %s type: %s", he, De.message), Ve(null));
          }
      }
    }
    var Fe = Array.isArray;
    function ze(A) {
      return Fe(A);
    }
    function Ke(A) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, he = oe && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return he;
      }
    }
    function Be(A) {
      try {
        return rt(A), !1;
      } catch {
        return !0;
      }
    }
    function rt(A) {
      return "" + A;
    }
    function $t(A) {
      if (Be(A))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(A)), rt(A);
    }
    var Nt = b.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Xe;
    function Re(A) {
      if (xe.call(A, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Se(A) {
      if (xe.call(A, "key")) {
        var oe = Object.getOwnPropertyDescriptor(A, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function st(A, oe) {
      typeof A.ref == "string" && Nt.current;
    }
    function Ot(A, oe) {
      {
        var he = function() {
          we || (we = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function nt(A, oe) {
      {
        var he = function() {
          Xe || (Xe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var tr = function(A, oe, he, Ee, We, Ue, He) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: oe,
        ref: he,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ue
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
        value: We
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Qt(A, oe, he, Ee, We) {
      {
        var Ue, He = {}, De = null, Mt = null;
        he !== void 0 && ($t(he), De = "" + he), Se(oe) && ($t(oe.key), De = "" + oe.key), Re(oe) && (Mt = oe.ref, st(oe, We));
        for (Ue in oe)
          xe.call(oe, Ue) && !ot.hasOwnProperty(Ue) && (He[Ue] = oe[Ue]);
        if (A && A.defaultProps) {
          var lt = A.defaultProps;
          for (Ue in lt)
            He[Ue] === void 0 && (He[Ue] = lt[Ue]);
        }
        if (De || Mt) {
          var dt = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          De && Ot(He, dt), Mt && nt(He, dt);
        }
        return tr(A, De, Mt, We, Ee, Nt.current, He);
      }
    }
    var At = b.ReactCurrentOwner, ht = b.ReactDebugCurrentFrame;
    function at(A) {
      if (A) {
        var oe = A._owner, he = ge(A.type, A._source, oe ? oe.type : null);
        ht.setExtraStackFrame(he);
      } else
        ht.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function cn(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ha() {
      {
        if (At.current) {
          var A = O(At.current.type);
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
          var he = typeof A == "string" ? A : A.displayName || A.name;
          he && (oe = `

Check the top-level render call using <` + he + ">.");
        }
        return oe;
      }
    }
    function Ra(A, oe) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var he = Zf(oe);
        if (Ia[he])
          return;
        Ia[he] = !0;
        var Ee = "";
        A && A._owner && A._owner !== At.current && (Ee = " It was passed a child from " + O(A._owner.type) + "."), at(A), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Ee), at(null);
      }
    }
    function ja(A, oe) {
      {
        if (typeof A != "object")
          return;
        if (ze(A))
          for (var he = 0; he < A.length; he++) {
            var Ee = A[he];
            cn(Ee) && Ra(Ee, oe);
          }
        else if (cn(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var We = m(A);
          if (typeof We == "function" && We !== A.entries)
            for (var Ue = We.call(A), He; !(He = Ue.next()).done; )
              cn(He.value) && Ra(He.value, oe);
        }
      }
    }
    function Kf(A) {
      {
        var oe = A.type;
        if (oe == null || typeof oe == "string")
          return;
        var he;
        if (typeof oe == "function")
          he = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === p))
          he = oe.propTypes;
        else
          return;
        if (he) {
          var Ee = O(oe);
          Y(he, A.props, "prop", Ee, A);
        } else if (oe.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var We = O(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", We || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bf(A) {
      {
        for (var oe = Object.keys(A.props), he = 0; he < oe.length; he++) {
          var Ee = oe[he];
          if (Ee !== "children" && Ee !== "key") {
            at(A), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), at(null);
            break;
          }
        }
        A.ref !== null && (at(A), x("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var Za = {};
    function Ka(A, oe, he, Ee, We, Ue) {
      {
        var He = I(A);
        if (!He) {
          var De = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mt = jf();
          Mt ? De += Mt : De += Ha();
          var lt;
          A === null ? lt = "null" : ze(A) ? lt = "array" : A !== void 0 && A.$$typeof === t ? (lt = "<" + (O(A.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof A, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, De);
        }
        var dt = Qt(A, oe, he, We, Ue);
        if (dt == null)
          return dt;
        if (He) {
          var en = oe.children;
          if (en !== void 0)
            if (Ee)
              if (ze(en)) {
                for (var Lr = 0; Lr < en.length; Lr++)
                  ja(en[Lr], A);
                Object.freeze && Object.freeze(en);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ja(en, A);
        }
        if (xe.call(oe, "key")) {
          var yr = O(A), zt = Object.keys(oe).filter(function(Uf) {
            return Uf !== "key";
          }), us = zt.length > 0 ? "{key: someKey, " + zt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Za[yr + us]) {
            var Xf = zt.length > 0 ? "{" + zt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, us, yr, Xf, yr), Za[yr + us] = !0;
          }
        }
        return A === r ? Bf(dt) : Kf(dt), dt;
      }
    }
    function Wf(A, oe, he) {
      return Ka(A, oe, he, !0);
    }
    function Ff(A, oe, he) {
      return Ka(A, oe, he, !1);
    }
    var Yf = Ff, qf = Wf;
    ao.Fragment = r, ao.jsx = Yf, ao.jsxs = qf;
  }()), ao;
}
var Ya;
function np() {
  return Ya || (Ya = 1, process.env.NODE_ENV === "production" ? Qo.exports = ep() : Qo.exports = tp()), Qo.exports;
}
var rp = np();
const op = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(op);
const su = 1, au = 2, lu = 4, ip = 8, sp = 16, ap = 1, lp = 2, uu = 4, up = 8, cp = 16, cu = 1, dp = 2, du = "[", Ii = "[!", Js = "]", kr = {}, wt = Symbol(), fp = "http://www.w3.org/1999/xhtml", pp = "http://www.w3.org/2000/svg", hp = "@attach", gp = !1;
var Ri = Array.isArray, vp = Array.prototype.indexOf, Qs = Array.from, mi = Object.keys, yi = Object.defineProperty, Rn = Object.getOwnPropertyDescriptor, fu = Object.getOwnPropertyDescriptors, pu = Object.prototype, mp = Array.prototype, ji = Object.getPrototypeOf, qa = Object.isExtensible;
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
function Lo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const _t = 2, ea = 4, Zi = 8, gu = 1 << 24, Yn = 16, qn = 32, pr = 64, Ki = 128, vn = 512, St = 1024, Zt = 2048, Xn = 4096, Ut = 8192, jn = 16384, Bi = 32768, Kn = 65536, Xa = 1 << 17, vu = 1 << 18, Or = 1 << 19, mu = 1 << 20, wo = 32768, Ss = 1 << 21, ta = 1 << 22, ir = 1 << 23, En = Symbol("$state"), na = Symbol("legacy props"), wp = Symbol(""), zr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), bp = 1, Wi = 3, Mr = 8;
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
function Vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Mp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Dp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function Xt(e) {
  $e = e;
}
let Me;
function pt(e) {
  if (e === null)
    throw Vo(), kr;
  return Me = e;
}
function Bn() {
  return pt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ wn(Me)
  );
}
function j(e) {
  if ($e) {
    if (/* @__PURE__ */ wn(Me) !== null)
      throw Vo(), kr;
    Me = e;
  }
}
function be(e = 1) {
  if ($e) {
    for (var t = e, n = Me; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ wn(n);
    Me = n;
  }
}
function wi(e = !0) {
  for (var t = 0, n = Me; ; ) {
    if (n.nodeType === Mr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Js) {
        if (t === 0) return n;
        t -= 1;
      } else (r === du || r === Ii) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wn(n)
    );
    e && n.remove(), n = o;
  }
}
function yu(e) {
  if (!e || e.nodeType !== Mr)
    throw Vo(), kr;
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
let no = !1, Lp = !1;
function Vp() {
  no = !0;
}
const Ap = [];
function _u(e, t = !1, n = !1) {
  return ui(e, /* @__PURE__ */ new Map(), "", Ap, null, n);
}
function ui(e, t, n, r, o = null, i = !1) {
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
    if (Ri(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = ui(u, t, n, r, null, i));
      }
      return a;
    }
    if (ji(e) === pu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = ui(
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
      return ui(
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
let et = null;
function Br(e) {
  et = e;
}
function lr(e) {
  return (
    /** @type {T} */
    Cu().get(e)
  );
}
function Wr(e, t) {
  return Cu().set(e, t), t;
}
function fe(e, t = !1, n) {
  et = {
    p: et,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: no && !t ? { s: null, u: null, $: [] } : null
  };
}
function pe(e) {
  var t = (
    /** @type {ComponentContext} */
    et
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ju(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, et = t.p, e ?? /** @type {T} */
  {};
}
function Ao() {
  return !no || et !== null && et.l === null;
}
function Cu(e) {
  return et === null && ra(), et.c ??= new Map(zp(et) || void 0);
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
let wr = [];
function $u() {
  var e = wr;
  wr = [], ks(e);
}
function hr(e) {
  if (wr.length === 0 && !vo) {
    var t = wr;
    queueMicrotask(() => {
      t === wr && $u();
    });
  }
  wr.push(e);
}
function Hp() {
  for (; wr.length > 0; )
    $u();
}
function ku(e) {
  var t = Le;
  if (t === null)
    return Ze.f |= ir, e;
  if ((t.f & Bi) === 0) {
    if ((t.f & Ki) === 0)
      throw e;
    t.b.error(e);
  } else
    Fr(e, t);
}
function Fr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ki) !== 0)
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
let tt = null, rn = null, nn = [], Fi = null, Es = !1, vo = !1;
class hn {
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
    nn = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (tt = null, Ua(n.render_effects), Ua(n.effects), this.#l?.resolve()), rn = null;
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
      var o = r.f, i = (o & (qn | pr)) !== 0, s = i && (o & St) !== 0, a = s || (o & Ut) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ki) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= St : (o & ea) !== 0 ? n.effects.push(r) : Io(r) && ((r.f & Yn) !== 0 && n.block_effects.push(r), _o(r));
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
      ((n.f & Zt) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), Et(n, St);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & _t) === 0 || (n.f & wo) === 0 || (n.f ^= wo, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & ir) === 0 && (this.current.set(t, t.v), rn?.set(t, t.v));
  }
  activate() {
    tt = this, this.apply();
  }
  deactivate() {
    tt === this && (tt = null, rn = null);
  }
  flush() {
    if (this.activate(), nn.length > 0) {
      if (Su(), tt !== null && tt !== this)
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
      var t = rn, n = !0, r = {
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
          var o = nn;
          nn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Eu(d, a, l, u);
          if (nn.length > 0) {
            tt = i, i.apply();
            for (const d of nn)
              i.#i(d, r);
            i.deactivate();
          }
          nn = o;
        }
      }
      tt = null, rn = t;
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
      Et(t, Zt), Sr(t);
    for (const t of this.#o)
      Et(t, Xn), Sr(t);
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
    if (tt === null) {
      const t = tt = new hn();
      ei.add(tt), vo || hn.enqueue(() => {
        tt === t && t.flush();
      });
    }
    return tt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    hr(t);
  }
  apply() {
  }
}
function g(e) {
  var t = vo;
  vo = !0;
  try {
    for (var n; ; ) {
      if (Hp(), nn.length === 0 && (tt?.flush(), nn.length === 0))
        return Fi = null, /** @type {T} */
        n;
      Su();
    }
  } finally {
    vo = t;
  }
}
function Su() {
  var e = ar;
  Es = !0;
  try {
    var t = 0;
    for (xi(!0); nn.length > 0; ) {
      var n = hn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Ip();
      }
      n.process(nn), sr.clear();
    }
  } finally {
    Es = !1, xi(e), Fi = null;
  }
}
function Ip() {
  try {
    kp();
  } catch (e) {
    Fr(e, Fi);
  }
}
let Ln = null;
function Ua(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (jn | Ut)) === 0 && Io(r) && (Ln = /* @__PURE__ */ new Set(), _o(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Yu(r) : r.fn = null), Ln?.size > 0)) {
        sr.clear();
        for (const o of Ln) {
          if ((o.f & (jn | Ut)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Ln.has(s) && (Ln.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (jn | Ut)) === 0 && _o(l);
          }
        }
        Ln.clear();
      }
    }
    Ln = null;
  }
}
function Eu(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & _t) !== 0 ? Eu(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ta | Yn)) !== 0 && (i & Zt) === 0 && Pu(o, t, r) && (Et(o, Zt), Sr(
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
      if ((o.f & _t) !== 0 && Pu(
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
function Sr(e) {
  for (var t = Fi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Es && t === Le && (n & Yn) !== 0 && (n & vu) === 0)
      return;
    if ((n & (pr | qn)) !== 0) {
      if ((n & St) === 0) return;
      t.f ^= St;
    }
  }
  nn.push(t);
}
function Tu(e) {
  let t = 0, n = ur(0), r;
  return () => {
    bo() && (c(n), Ho(() => (t === 0 && (r = bt(() => e(() => mo(n)))), t += 1, () => {
      hr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, mo(n));
      });
    })));
  };
}
var Rp = Kn | Or | Ki;
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
  #n = $e ? Me : null;
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
  #w = Tu(() => (this.#p = ur(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Le.b, this.#e = !!this.#r.pending, this.#a = oo(() => {
      if (Le.b = this, $e) {
        const i = this.#n;
        Bn(), /** @type {Comment} */
        i.nodeType === Mr && /** @type {Comment} */
        i.data === Ii ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#o = qt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Rp), $e && (this.#t = Me);
  }
  #b() {
    try {
      this.#o = qt(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#i = qt(() => t(this.#t)), hn.enqueue(() => {
      var n = this.#m();
      this.#o = this.#g(() => (hn.ensure(), qt(() => this.#l(n)))), this.#f > 0 ? this.#v() : (Ir(
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
    return this.#e && (this.#c = Kt(), this.#t.before(this.#c), t = this.#c), t;
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
    var n = Le, r = Ze, o = et;
    an(this.#a), It(this.#a), Br(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return ku(i), null;
    } finally {
      an(n), It(r), Br(o);
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
    ), Uu(this.#o, this.#u)), this.#i === null && (this.#i = qt(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && Ir(this.#i, () => {
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
    this.#y(t), this.#d += t, this.#p && qr(this.#p, this.#d);
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
    this.#o && (mt(this.#o), this.#o = null), this.#i && (mt(this.#i), this.#i = null), this.#s && (mt(this.#s), this.#s = null), $e && (pt(
      /** @type {TemplateNode} */
      this.#n
    ), be(), pt(wi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Dp();
        return;
      }
      o = !0, i && Op(), hn.ensure(), this.#d = 0, this.#s !== null && Ir(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, qt(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = Ze;
    try {
      It(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Fr(l, this.#a && this.#a.parent);
    } finally {
      It(a);
    }
    r && hr(() => {
      this.#s = this.#g(() => {
        hn.ensure(), this.#h = !0;
        try {
          return qt(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Fr(
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
function Yr(e, t) {
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
      sa(l), l.append(a), e.items.clear(), dn(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), dn(e, d.prev, d.next)), mt(d.e, !s);
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
    s = $e ? pt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ gt(f)
    ) : f.appendChild(Kt());
  }
  $e && Bn();
  var h = null, y = /* @__PURE__ */ oa(() => {
    var C = n();
    return Ri(C) ? C : C == null ? [] : Qs(C);
  }), w, m = !0;
  function b() {
    Bp($, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : ca(h.effect), x.first = h.effect) : Ir(h.effect, () => {
      h = null;
    }));
  }
  var x = oo(() => {
    w = /** @type {V[]} */
    c(y);
    var C = w.length;
    let S = !1;
    if ($e) {
      var T = yu(s) === Ii;
      T !== (C === 0) && (s = wi(), pt(s), Xt(!1), S = !0);
    }
    for (var D = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      tt
    ), H = null, I = Iu(), z = 0; z < C; z += 1) {
      $e && Me.nodeType === Mr && /** @type {Comment} */
      Me.data === Js && (s = /** @type {Comment} */
      Me, S = !0, Xt(!1));
      var k = w[z], O = r(k, z), _ = m ? null : a.get(O);
      _ ? (d && qr(_.v, k), p ? qr(
        /** @type {Value<number>} */
        _.i,
        z
      ) : _.i = z, I && Z.skipped_effects.delete(_.e)) : (_ = Wp(
        m ? s : null,
        H,
        k,
        O,
        z,
        o,
        t,
        n
      ), m && (_.o = !0, H === null ? l = _ : H.next = _, H = _), a.set(O, _)), D.add(O);
    }
    if (C === 0 && i && !h)
      if (m)
        h = {
          fragment: null,
          effect: qt(() => i(s))
        };
      else {
        var E = document.createDocumentFragment(), N = Kt();
        E.append(N), h = {
          fragment: E,
          effect: qt(() => i(N))
        };
      }
    if ($e && C > 0 && pt(wi()), !m)
      if (I) {
        for (const [K, W] of a)
          D.has(K) || Z.skipped_effects.add(W.e);
        Z.oncommit(b), Z.ondiscard(() => {
        });
      } else
        b();
    S && Xt(!0), c(y);
  }), $ = { effect: x, items: a, first: l };
  m = !1, $e && (s = Me);
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
      dn(e, d, m), dn(e, m, x), cs(m, x, n), d = m, f = [], h = [], l = d.next;
      continue;
    }
    if ((m.e.f & Ut) !== 0 && (ca(m.e), i && (m.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < h.length) {
          var $ = h[0], C;
          d = $.prev;
          var S = f[0], T = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            cs(f[C], $, n);
          for (C = 0; C < h.length; C += 1)
            u.delete(h[C]);
          dn(e, S.prev, T.next), dn(e, d, S), dn(e, T, $), l = $, d = T, b -= 1, f = [], h = [];
        } else
          u.delete(m), cs(m, l, n), dn(e, m.prev, m.next), dn(e, m, d === null ? e.first : d.next), dn(e, d, m), d = m;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Ut) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    f.push(m), d = m, l = m.next;
  }
  let D = a.size > s;
  if (l !== null || u !== void 0) {
    for (var Z = u === void 0 ? [] : Qs(u); l !== null; )
      (l.e.f & Ut) === 0 && Z.push(l), l = l.next;
    var H = Z.length;
    if (D = a.size - H > s, H > 0) {
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
  if (D)
    for (const z of a.values())
      z.o || (dn(e, d, z), d = z);
  e.effect.last = d && d.e, i && hr(() => {
    if (p !== void 0)
      for (m of p)
        m.a?.apply();
  });
}
function Wp(e, t, n, r, o, i, s, a) {
  var l = (s & su) !== 0, u = (s & sp) === 0, d = l ? u ? /* @__PURE__ */ Lu(n, !1, !1) : ur(n) : n, p = (s & au) === 0 ? o : ur(o), f = {
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
      h.append(e = Kt());
    }
    return f.e = qt(() => i(
      /** @type {Node} */
      e,
      d,
      p,
      a
    )), t !== null && (t.next = f), f;
  } finally {
  }
}
function cs(e, t, n) {
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
      /* @__PURE__ */ wn(i)
    );
    o.before(i), i = s;
  }
}
function dn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Nu(e, t, n, r) {
  const o = Ao() ? zo : oa;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = tt, s = (
    /** @type {Effect} */
    Le
  ), a = Fp();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Yp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & jn) === 0 && Fr(d, s);
      }
      i?.deactivate(), bi();
    }).catch((u) => {
      Fr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), bi();
    }
  }) : l();
}
function Fp() {
  var e = Le, t = Ze, n = et, r = tt;
  return function(o = !0) {
    an(e), It(t), Br(n), o && r?.activate();
  };
}
function bi() {
  an(null), It(null), Br(null);
}
// @__NO_SIDE_EFFECTS__
function zo(e) {
  var t = _t | Zt, n = Ze !== null && (Ze.f & _t) !== 0 ? (
    /** @type {Derived} */
    Ze
  ) : null;
  return Le !== null && (Le.f |= Or), {
    ctx: et,
    deps: null,
    effects: null,
    equals: wu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      wt
    ),
    wv: 0,
    parent: n ?? Le,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Yp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Le
  );
  n === null && xp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ur(
    /** @type {V} */
    wt
  ), s = !Ze, a = /* @__PURE__ */ new Map();
  return nh(() => {
    var l = hu();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === tt && u.committed && u.deactivate(), bi();
      });
    } catch (f) {
      l.reject(f), bi();
    }
    var u = (
      /** @type {Batch} */
      tt
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(zr), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== zr && (i.f |= ir, qr(i, h));
      else {
        (i.f & ir) !== 0 && (i.f ^= ir), qr(i, f);
        for (const [y, w] of a) {
          if (a.delete(y), y === u) break;
          w.reject(zr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Yi(() => {
    for (const l of a.values())
      l.reject(zr);
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
  return Gu(t), t;
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
      mt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & _t) === 0)
      return (t.f & jn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ia(e) {
  var t, n = Le;
  an(qp(e));
  try {
    e.f &= ~wo, Ou(e), t = tc(e);
  } finally {
    an(n);
  }
  return t;
}
function Mu(e) {
  var t = ia(e);
  if (e.equals(t) || (tt?.is_fork || (e.v = t), e.wv = Qu()), !Dr)
    if (rn !== null)
      (bo() || tt?.is_fork) && rn.set(e, t);
    else {
      var n = (e.f & vn) === 0 ? Xn : St;
      Et(e, n);
    }
}
let Ps = /* @__PURE__ */ new Set();
const sr = /* @__PURE__ */ new Map();
let Du = !1;
function ur(e, t) {
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
  const n = ur(e);
  return Gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Lu(e, t = !1, n = !0) {
  const r = ur(e);
  return t || (r.equals = xu), no && n && et !== null && et.l !== null && (et.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  Ze !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Sn || (Ze.f & Xa) !== 0) && Ao() && (Ze.f & (_t | Yn | ta | Xa)) !== 0 && !Zn?.includes(e) && Np();
  let r = n ? sn(t) : t;
  return qr(e, r);
}
function qr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Dr ? sr.set(e, t) : sr.set(e, n), e.v = t;
    var r = hn.ensure();
    r.capture(e, n), (e.f & _t) !== 0 && ((e.f & Zt) !== 0 && ia(
      /** @type {Derived} */
      e
    ), Et(e, (e.f & vn) !== 0 ? St : Xn)), e.wv = Qu(), Vu(e, Zt), Ao() && Le !== null && (Le.f & St) !== 0 && (Le.f & (qn | pr)) === 0 && (tn === null ? oh([e]) : tn.push(e)), !r.is_fork && Ps.size > 0 && !Du && Xp();
  }
  return t;
}
function Xp() {
  Du = !1;
  var e = ar;
  xi(!0);
  const t = Array.from(Ps);
  try {
    for (const n of t)
      (n.f & St) !== 0 && Et(n, Xn), Io(n) && _o(n);
  } finally {
    xi(e);
  }
  Ps.clear();
}
function Ga(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function mo(e) {
  Q(e, e.v + 1);
}
function Vu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ao(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Le)) {
        var l = (a & Zt) === 0;
        if (l && Et(s, t), (a & _t) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          rn?.delete(u), (a & wo) === 0 && (a & vn && (s.f |= wo), Vu(u, Xn));
        } else l && ((a & Yn) !== 0 && Ln !== null && Ln.add(
          /** @type {Effect} */
          s
        ), Sr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function sn(e) {
  if (typeof e != "object" || e === null || En in e)
    return e;
  const t = ji(e);
  if (t !== pu && t !== mp)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ri(e), o = /* @__PURE__ */ Oe(0), i = _r, s = (a) => {
    if (_r === i)
      return a();
    var l = Ze, u = _r;
    It(null), tl(i);
    var d = a();
    return It(l), tl(u), d;
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
            const d = s(() => /* @__PURE__ */ Oe(wt));
            n.set(l, d), mo(o);
          }
        } else
          Q(u, wt), mo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === En)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Rn(a, l)?.writable) && (d = s(() => {
          var h = sn(p ? a[l] : wt), y = /* @__PURE__ */ Oe(h);
          return y;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === wt ? void 0 : f;
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
          if (p !== void 0 && f !== wt)
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
        if (l === En)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== wt || Reflect.has(a, l);
        if (u !== void 0 || Le !== null && (!d || Rn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? sn(a[l]) : wt, h = /* @__PURE__ */ Oe(f);
            return h;
          }), n.set(l, u));
          var p = c(u);
          if (p === wt)
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
            y !== void 0 ? Q(y, wt) : h in a && (y = s(() => /* @__PURE__ */ Oe(wt)), n.set(h + "", y));
          }
        if (p === void 0)
          (!f || Rn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Oe(void 0)), Q(p, sn(u)), n.set(l, p));
        else {
          f = p.v !== wt;
          var w = s(() => sn(u));
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
          return f === void 0 || f.v !== wt;
        });
        for (var [u, d] of n)
          d.v !== wt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Tp();
      }
    }
  );
}
function Ja(e) {
  try {
    if (e !== null && typeof e == "object" && En in e)
      return e[En];
  } catch {
  }
  return e;
}
function Up(e, t) {
  return Object.is(Ja(e), Ja(t));
}
var Ht, Au, zu, Hu;
function Ts() {
  if (Ht === void 0) {
    Ht = window, Au = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    zu = Rn(t, "firstChild").get, Hu = Rn(t, "nextSibling").get, qa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qa(n) && (n.__t = void 0);
  }
}
function Kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return zu.call(e);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return Hu.call(e);
}
function B(e, t) {
  if (!$e)
    return /* @__PURE__ */ gt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ gt(Me)
  );
  if (n === null)
    n = Me.appendChild(Kt());
  else if (t && n.nodeType !== Wi) {
    var r = Kt();
    return n?.before(r), pt(r), r;
  }
  return pt(n), n;
}
function se(e, t = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ wn(n) : n;
  }
  if (t && Me?.nodeType !== Wi) {
    var r = Kt();
    return Me?.before(r), pt(r), r;
  }
  return Me;
}
function V(e, t = 1, n = !1) {
  let r = $e ? Me : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ wn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Wi) {
    var i = Kt();
    return r === null ? o?.after(i) : r.before(i), pt(i), i;
  }
  return pt(r), /** @type {TemplateNode} */
  r;
}
function sa(e) {
  e.textContent = "";
}
function Iu() {
  return !1;
}
function Gp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, hr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Jp(e) {
  $e && /* @__PURE__ */ gt(e) !== null && sa(e);
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
  var t = Ze, n = Le;
  It(null), an(null);
  try {
    return e();
  } finally {
    It(t), an(n);
  }
}
function Ru(e) {
  Le === null && (Ze === null && $p(), Cp()), Dr && _p();
}
function eh(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ln(e, t, n) {
  var r = Le;
  r !== null && (r.f & Ut) !== 0 && (e |= Ut);
  var o = {
    ctx: et,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Zt | vn,
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
      _o(o), o.f |= Bi;
    } catch (a) {
      throw mt(o), a;
    }
  else t !== null && Sr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Or) === 0 && (i = i.first, (e & Yn) !== 0 && (e & Kn) !== 0 && i !== null && (i.f |= Kn)), i !== null && (i.parent = r, r !== null && eh(i, r), Ze !== null && (Ze.f & _t) !== 0 && (e & pr) === 0)) {
    var s = (
      /** @type {Derived} */
      Ze
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function bo() {
  return Ze !== null && !Sn;
}
function Yi(e) {
  const t = ln(Zi, null, !1);
  return Et(t, St), t.teardown = e, t;
}
function it(e) {
  Ru();
  var t = (
    /** @type {Effect} */
    Le.f
  ), n = !Ze && (t & qn) !== 0 && (t & Bi) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      et
    );
    (r.e ??= []).push(e);
  } else
    return ju(e);
}
function ju(e) {
  return ln(ea | mu, e, !1);
}
function Zu(e) {
  return Ru(), ln(Zi | mu, e, !0);
}
function la(e) {
  hn.ensure();
  const t = ln(pr | Or, e, !0);
  return () => {
    mt(t);
  };
}
function th(e) {
  hn.ensure();
  const t = ln(pr | Or, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ir(t, () => {
      mt(t), r(void 0);
    }) : (mt(t), r(void 0));
  });
}
function ro(e) {
  return ln(ea, e, !1);
}
function nh(e) {
  return ln(ta | Or, e, !0);
}
function Ho(e, t = 0) {
  return ln(Zi | t, e, !0);
}
function Pe(e, t = [], n = [], r = []) {
  Nu(r, t, n, (o) => {
    ln(Zi, () => e(...o.map(c)), !0);
  });
}
function oo(e, t = 0) {
  var n = ln(Yn | t, e, !0);
  return n;
}
function Ku(e, t = 0) {
  var n = ln(gu | t, e, !0);
  return n;
}
function qt(e) {
  return ln(qn | Or, e, !0);
}
function Bu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Dr, r = Ze;
    el(!0), It(null);
    try {
      t.call(null);
    } finally {
      el(n), It(r);
    }
  }
}
function Wu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && aa(() => {
      o.abort(zr);
    });
    var r = n.next;
    (n.f & pr) !== 0 ? n.parent = null : mt(n, t), n = r;
  }
}
function rh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & qn) === 0 && mt(t), t = n;
  }
}
function mt(e, t = !0) {
  var n = !1;
  (t || (e.f & vu) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Fu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Wu(e, t && !n), _i(e, 0), Et(e, jn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Bu(e);
  var o = e.parent;
  o !== null && o.first !== null && Yu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Fu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wn(e)
    );
    e.remove(), e = n;
  }
}
function Yu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ir(e, t, n = !0) {
  var r = [];
  ua(e, r, !0), qu(r, () => {
    n && mt(e), t && t();
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
  if ((e.f & Ut) === 0) {
    if (e.f ^= Ut, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Kn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & qn) !== 0 && (e.f & Yn) !== 0;
      ua(r, t, i ? n : !1), r = o;
    }
  }
}
function ca(e) {
  Xu(e, !0);
}
function Xu(e, t) {
  if ((e.f & Ut) !== 0) {
    e.f ^= Ut, (e.f & St) === 0 && (Et(e, Zt), Sr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Kn) !== 0 || (n.f & qn) !== 0;
      Xu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Uu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wn(n)
    );
    t.append(n), n = o;
  }
}
let ar = !1;
function xi(e) {
  ar = e;
}
let Dr = !1;
function el(e) {
  Dr = e;
}
let Ze = null, Sn = !1;
function It(e) {
  Ze = e;
}
let Le = null;
function an(e) {
  Le = e;
}
let Zn = null;
function Gu(e) {
  Ze !== null && (Zn === null ? Zn = [e] : Zn.push(e));
}
let Lt = null, Yt = 0, tn = null;
function oh(e) {
  tn = e;
}
let Ju = 1, xo = 0, _r = xo;
function tl(e) {
  _r = e;
}
function Qu() {
  return ++Ju;
}
function Io(e) {
  var t = e.f;
  if ((t & Zt) !== 0)
    return !0;
  if (t & _t && (e.f &= -32769), (t & Xn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Io(
          /** @type {Derived} */
          i
        ) && Mu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & vn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    rn === null && Et(e, St);
  }
  return !1;
}
function ec(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Zn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & _t) !== 0 ? ec(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Et(i, Zt) : (i.f & St) !== 0 && Et(i, Xn), Sr(
        /** @type {Effect} */
        i
      ));
    }
}
function tc(e) {
  var t = Lt, n = Yt, r = tn, o = Ze, i = Zn, s = et, a = Sn, l = _r, u = e.f;
  Lt = /** @type {null | Value[]} */
  null, Yt = 0, tn = null, Ze = (u & (qn | pr)) === 0 ? e : null, Zn = null, Br(e.ctx), Sn = !1, _r = ++xo, e.ac !== null && (aa(() => {
    e.ac.abort(zr);
  }), e.ac = null);
  try {
    e.f |= Ss;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (Lt !== null) {
      var h;
      if (_i(e, Yt), f !== null && Yt > 0)
        for (f.length = Yt + Lt.length, h = 0; h < Lt.length; h++)
          f[Yt + h] = Lt[h];
      else
        e.deps = f = Lt;
      if (ar && bo() && (e.f & vn) !== 0)
        for (h = Yt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Yt < f.length && (_i(e, Yt), f.length = Yt);
    if (Ao() && tn !== null && !Sn && f !== null && (e.f & (_t | Xn | Zt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      tn.length; h++)
        ec(
          tn[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, tn !== null && (r === null ? r = tn : r.push(.../** @type {Source[]} */
    tn))), (e.f & ir) !== 0 && (e.f ^= ir), p;
  } catch (y) {
    return ku(y);
  } finally {
    e.f ^= Ss, Lt = t, Yt = n, tn = r, Ze = o, Zn = i, Br(s), Sn = a, _r = l;
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
  n === null && (t.f & _t) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(t)) && (Et(t, Xn), (t.f & vn) !== 0 && (t.f ^= vn, t.f &= -32769), Ou(
    /** @type {Derived} **/
    t
  ), _i(
    /** @type {Derived} **/
    t,
    0
  ));
}
function _i(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ih(e, n[r]);
}
function _o(e) {
  var t = e.f;
  if ((t & jn) === 0) {
    Et(e, St);
    var n = Le, r = ar;
    Le = e, ar = !0;
    try {
      (t & (Yn | gu)) !== 0 ? rh(e) : Wu(e), Bu(e);
      var o = tc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ju;
      var i;
      gp && Lp && (e.f & Zt) !== 0 && e.deps;
    } finally {
      ar = r, Le = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & _t) !== 0;
  if (Ze !== null && !Sn) {
    var r = Le !== null && (Le.f & jn) !== 0;
    if (!r && !Zn?.includes(e)) {
      var o = Ze.deps;
      if ((Ze.f & Ss) !== 0)
        e.rv < xo && (e.rv = xo, Lt === null && o !== null && o[Yt] === e ? Yt++ : Lt === null ? Lt = [e] : Lt.includes(e) || Lt.push(e));
      else {
        (Ze.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Ze] : i.includes(Ze) || i.push(Ze);
      }
    }
  }
  if (Dr) {
    if (sr.has(e))
      return sr.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & St) === 0 && s.reactions !== null || rc(s)) && (a = ia(s)), sr.set(s, a), a;
    }
  } else n && (!rn?.has(e) || tt?.is_fork && !bo()) && (s = /** @type {Derived} */
  e, Io(s) && Mu(s), ar && bo() && (s.f & vn) === 0 && nc(s));
  if (rn?.has(e))
    return rn.get(e);
  if ((e.f & ir) !== 0)
    throw e.v;
  return e.v;
}
function nc(e) {
  if (e.deps !== null) {
    e.f ^= vn;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & _t) !== 0 && (t.f & vn) === 0 && nc(
        /** @type {Derived} */
        t
      );
  }
}
function rc(e) {
  if (e.v === wt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (sr.has(t) || (t.f & _t) !== 0 && rc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function bt(e) {
  var t = Sn;
  try {
    return Sn = !0, e();
  } finally {
    Sn = t;
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
    if (En in e)
      Ns(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && En in n && Ns(n);
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
    const n = ji(e);
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
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? hr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ms(e, t, n, r = {}) {
  var o = fa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ci(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = fa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Yi(() => {
    t.removeEventListener(e, s, i);
  });
}
function gr(e) {
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
    yi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ze, p = Le;
    It(null), an(null);
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
      e.__root = t, delete e.currentTarget, It(d), an(p);
    }
  }
}
function pa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function jt(e, t) {
  var n = (
    /** @type {Effect} */
    Le
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & cu) !== 0, r = (t & dp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return jt(Me, null), Me;
    o === void 0 && (o = pa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ gt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Au ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      jt(a, l);
    } else
      jt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & cu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return jt(Me, null), Me;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        pa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ gt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ gt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ gt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ gt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      jt(d, p);
    } else
      jt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  return /* @__PURE__ */ lh(e, t, "svg");
}
function Te(e = "") {
  if (!$e) {
    var t = Kt(e + "");
    return jt(t, t), t;
  }
  var n = Me;
  return n.nodeType !== Wi && (n.before(n = Kt()), pt(n)), jt(n, n), n;
}
function Ne() {
  if ($e)
    return jt(Me, null), Me;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kt();
  return e.append(t, n), jt(t, n), e;
}
function M(e, t) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      Le
    );
    ((n.f & Bi) === 0 || n.nodes_end === null) && (n.nodes_end = Me), Bn();
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
  const n = t.target, r = $e, o = Me;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gt(n)
    ); i && (i.nodeType !== Mr || /** @type {Comment} */
    i.data !== du); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ wn(i);
    if (!i)
      throw kr;
    Xt(!0), pt(
      /** @type {Comment} */
      i
    );
    const s = sc(e, { ...t, anchor: i });
    return Xt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== kr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Sp(), Ts(), sa(n), Xt(!1), ic(e, t);
  } finally {
    Xt(r), pt(o);
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
    var p = n ?? t.appendChild(Kt());
    return jp(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          fe({});
          var h = (
            /** @type {ComponentContext} */
            et
          );
          h.c = i;
        }
        if (o && (r.$$events = o), $e && jt(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, $e && (Le.nodes_end = Me, Me === null || Me.nodeType !== Mr || /** @type {Comment} */
        Me.data !== Js))
          throw Vo(), kr;
        i && pe();
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
  return Ds.set(u, d), u;
}
let Ds = /* @__PURE__ */ new WeakMap();
function wh(e, t) {
  const n = Ds.get(e);
  return n ? (Ds.delete(e), n(t)) : Promise.resolve();
}
class qi {
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
      tt
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
        a && (mt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Uu(s, l), l.append(Kt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            mt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Ir(s, a, !1)) : a();
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
      n.includes(r) || (mt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      tt
    ), o = Iu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      qt(() => n(this.anchor))
    ), this.#e.set(r, t), o || ($e && (this.anchor = Me), this.#a());
  }
}
function ut(e, t, ...n) {
  var r = new qi(e);
  oo(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Kn);
}
function Un(e) {
  et === null && ra(), no && et.l !== null ? bh(et).m.push(e) : it(() => {
    const t = bt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ro(e) {
  et === null && ra(), Un(() => () => bt(e));
}
function bh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  $e && Bn();
  var r = new qi(e), o = n ? Kn : 0;
  function i(s, a) {
    if ($e) {
      const u = yu(e) === Ii;
      if (s === u) {
        var l = wi();
        pt(l), r.anchor = l, Xt(!1), r.ensure(s, a), Xt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  oo(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function xh(e, t) {
  $e && pt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ gt(e)
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
  Pe(() => {
    var a = (
      /** @type {Effect} */
      Le
    );
    if (s === (s = t() ?? "")) {
      $e && Bn();
      return;
    }
    if (a.nodes_start !== null && (Fu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Me.data;
        for (var l = Bn(), u = l; l !== null && (l.nodeType !== Mr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ wn(l);
        if (l === null)
          throw Vo(), kr;
        jt(Me, u), i = pt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = pa(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ gt(p)), jt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ gt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ gt(p)
          );
      else
        i.before(p);
    }
  });
}
function Xi(e, t, n) {
  $e && Bn();
  var r = new qi(e);
  oo(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Kn);
}
function _h(e, t, n, r, o, i) {
  let s = $e;
  $e && Bn();
  var a = null;
  $e && Me.nodeType === bp && (a = /** @type {Element} */
  Me, Bn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Me : e
  ), u = new qi(l, !1);
  oo(() => {
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
        ) : p ? document.createElementNS(p, d) : document.createElement(d), jt(a, a), r) {
          $e && mh(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ gt(a) : a.appendChild(Kt())
          );
          $e && (h === null ? Xt(!1) : pt(h)), r(a, h);
        }
        Le.nodes_end = a, f.before(a);
      }
      $e && pt(f);
    }), () => {
    };
  }, Kn), Yi(() => {
  }), s && (Xt(!0), pt(l));
}
function Ye(e, t) {
  ro(() => {
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
  ro(() => {
    var r = bt(() => t(e, n?.()) || {});
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
    n !== (n = t()) && (r && (mt(r), r = null), n && (r = qt(() => {
      ro(() => (
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
function ds(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Sh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ds)), o && l.push(...Object.keys(o).map(ds));
      var u = 0, d = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === w - 1) {
            if (d !== -1) {
              var h = ds(e.substring(u, d).trim());
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
function Bt(e, t, n, r, o, i) {
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
function fs(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ct(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = Sh(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (fs(e, n?.[0], r[0]), fs(e, n?.[1], r[1], "important")) : fs(e, n, r));
  return r;
}
function Ls(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ri(t))
      return Mp();
    for (var r of e.options)
      r.selected = t.includes(il(r));
    return;
  }
  for (r of e.options) {
    var o = il(r);
    if (Up(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Eh(e) {
  var t = new MutationObserver(() => {
    Ls(e, e.__value);
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
  }), Yi(() => {
    t.disconnect();
  });
}
function il(e) {
  return "__value" in e ? e.__value : e.value;
}
const nr = Symbol("class"), kn = Symbol("style"), lc = Symbol("is custom element"), uc = Symbol("is html");
function An(e) {
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
    e.__on_r = n, hr(n), Qp();
  }
}
function ci(e, t) {
  var n = Ui(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ti(e, t) {
  var n = Ui(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Ph(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = Ui(e);
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[wp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && cc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Th(e, t, n, r, o = !1, i = !1) {
  if ($e && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || An(s);
  }
  var l = Ui(e), u = l[lc], d = !l[uc];
  let p = $e && u;
  p && Xt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = Gn(n.class) : (r || n[nr]) && (n.class = null), n[kn] && (n.style ??= null);
  var w = cc(e);
  for (const T in n) {
    let D = n[T];
    if (h && T === "value" && D == null) {
      e.value = e.__value = "", f[T] = D;
      continue;
    }
    if (T === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Bt(e, m, D, r, t?.[nr], n[nr]), f[T] = D, f[nr] = n[nr];
      continue;
    }
    if (T === "style") {
      Ct(e, D, t?.[kn], n[kn]), f[T] = D, f[kn] = n[kn];
      continue;
    }
    var b = f[T];
    if (!(D === b && !(D === void 0 && e.hasAttribute(T)))) {
      f[T] = D;
      var x = T[0] + T[1];
      if (x !== "$$")
        if (x === "on") {
          const Z = {}, H = "$$" + T;
          let I = T.slice(2);
          var $ = dh(I);
          if (uh(I) && (I = I.slice(0, -7), Z.capture = !0), !$ && b) {
            if (D != null) continue;
            e.removeEventListener(I, f[H], Z), f[H] = null;
          }
          if (D != null)
            if ($)
              e[`__${I}`] = D, gr([I]);
            else {
              let z = function(k) {
                f[T].call(this, k);
              };
              f[H] = fa(I, e, z, Z);
            }
          else $ && (e[`__${I}`] = void 0);
        } else if (T === "style")
          ke(e, T, D);
        else if (T === "autofocus")
          Gp(
            /** @type {HTMLElement} */
            e,
            !!D
          );
        else if (!u && (T === "__value" || T === "value" && D != null))
          e.value = e.__value = D;
        else if (T === "selected" && h)
          Ph(
            /** @type {HTMLOptionElement} */
            e,
            D
          );
        else {
          var C = T;
          d || (C = ph(C));
          var S = C === "defaultValue" || C === "defaultChecked";
          if (D == null && !u && !S)
            if (l[T] = null, C === "value" || C === "checked") {
              let Z = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (C === "value") {
                let I = Z.defaultValue;
                Z.removeAttribute(C), Z.defaultValue = I, Z.value = Z.__value = H ? I : null;
              } else {
                let I = Z.defaultChecked;
                Z.removeAttribute(C), Z.defaultChecked = I, Z.checked = H ? I : !1;
              }
            } else
              e.removeAttribute(T);
          else S || w.includes(C) && (u || typeof D != "string") ? (e[C] = D, C in l && (l[C] = wt)) : typeof D != "function" && ke(e, C, D);
        }
    }
  }
  return p && Xt(!0), f;
}
function vt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
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
      f && p && "value" in y && Ls(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        y[b] || mt(d[b]);
      for (let b of Object.getOwnPropertySymbols(y)) {
        var m = y[b];
        b.description === hp && (!u || m !== u[b]) && (d[b] && mt(d[b]), d[b] = qt(() => Ch(e, () => m))), w[b] = m;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      ro(() => {
        Ls(
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
function Ui(e) {
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
    o = ji(o);
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
  ro(() => (bt(() => n(e[t])), r));
}
function ll(e, t) {
  return e === t || e?.[En] === t;
}
function Wt(e = {}, t, n, r) {
  return ro(() => {
    var o, i;
    return Ho(() => {
      o = i, i = [], bt(() => {
        e !== n(...i) && (t(e, ...i), o && ll(n(...o), e) && t(null, ...o));
      });
    }), () => {
      hr(() => {
        i && ll(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function dc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    et
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
  }), it(() => {
    const o = bt(() => n.m.map(yp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && it(() => {
    ul(t, r), ks(n.a);
  });
}
function ul(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let ni = !1;
function Oh(e) {
  var t = ni;
  try {
    return ni = !1, [e(), ni];
  } finally {
    ni = t;
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
function qe(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Mh
  );
}
const Dh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Le;
      try {
        an(e.parent_effect), e.special[t] = v(
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
        an(r);
      }
    }
    return e.special[t](n), Ga(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ga(e.version)), !0;
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
      version: ur(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Le
      )
    },
    Dh
  );
}
const Lh = {
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
      const i = Rn(o, t);
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
        const o = Rn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === En || t === na) return !1;
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
function Qe(...e) {
  return new Proxy({ props: e }, Lh);
}
function v(e, t, n, r) {
  var o = !no || (n & lp) !== 0, i = (n & up) !== 0, s = (n & cp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? bt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = En in e || na in e;
    d = Rn(e, t)?.set ?? (p && t in e ? ($) => e[t] = $ : void 0);
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
      function($, C) {
        return arguments.length > 0 ? ((!o || !C || w || h) && d(C ? y() : $), $) : y();
      }
    );
  }
  var m = !1, b = ((n & ap) !== 0 ? zo : oa)(() => (m = !1, y()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Le
  );
  return (
    /** @type {() => V} */
    function($, C) {
      if (arguments.length > 0) {
        const S = C ? c(b) : o && i ? sn($) : $;
        return Q(b, S), m = !0, a !== void 0 && (a = S), $;
      }
      return Dr && m || (x.f & jn) !== 0 ? b.v : c(b);
    }
  );
}
function Vh(e) {
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
      var a = /* @__PURE__ */ Lu(s, !1, !1);
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
      i === "$set" || i === "$destroy" || i === "$on" || yi(this, i, {
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
          r !== "default" && (i.name = r), M(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = zh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = di(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Vh({
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
          for (const r of mi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = di(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = di(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return mi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function di(e, t, n, r) {
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
function le(e, t, n, r, o, i) {
  let s = class extends fc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return mi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return mi(t).forEach((a) => {
    yi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = di(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Rn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    yi(s.prototype, a, {
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
  return new fi(n);
}
function fi(e) {
  this._ = e;
}
function Ih(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
fi.prototype = Gi.prototype = {
  constructor: fi,
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
    return new fi(e);
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
var Vs = "http://www.w3.org/1999/xhtml";
const fl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vs,
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
    return n === Vs && t.documentElement.namespaceURI === Vs ? t.createElement(e) : t.createElementNS(n, e);
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
function Wh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Fh() {
  return [];
}
function hc(e) {
  return e == null ? Fh : function() {
    return this.querySelectorAll(e);
  };
}
function Yh(e) {
  return function() {
    return Wh(e.apply(this, arguments));
  };
}
function qh(e) {
  typeof e == "function" ? e = Yh(e) : e = hc(e);
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
function Uh(e) {
  return function() {
    return Xh.call(this.children, e);
  };
}
function Gh() {
  return this.firstElementChild;
}
function Jh(e) {
  return this.select(e == null ? Gh : Uh(typeof e == "function" ? e : vc(e)));
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
function $i(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
$i.prototype = {
  constructor: $i,
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
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new $i(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function ag(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < p; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new $i(e, i[a]);
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
    for (var x = 0, $ = 0, C, S; x < y; ++x)
      if (C = w[x]) {
        for (x >= $ && ($ = x + 1); !(S = m[$]) && ++$ < y; ) ;
        C._next = S || null;
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
function Mg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Dg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ng : typeof t == "function" ? Mg : Og)(e, t, n ?? "")) : Xr(this.node(), e);
}
function Xr(e, t) {
  return e.style.getPropertyValue(t) || yc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Lg(e) {
  return function() {
    delete this[e];
  };
}
function Vg(e, t) {
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
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? Ag : Vg)(e, t)) : this.node()[e];
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
function Wg(e) {
  return arguments.length ? this.each(e == null ? Zg : (typeof e == "function" ? Bg : Kg)(e)) : this.node().textContent;
}
function Fg() {
  this.innerHTML = "";
}
function Yg(e) {
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
  return arguments.length ? this.each(e == null ? Fg : (typeof e == "function" ? qg : Yg)(e)) : this.node().innerHTML;
}
function Ug() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Gg() {
  return this.each(Ug);
}
function Jg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qg() {
  return this.each(Jg);
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
  selectChild: Jh,
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
  style: Dg,
  property: zg,
  classed: jg,
  text: Wg,
  html: Xg,
  raise: Gg,
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
function on(e) {
  return typeof e == "string" ? new Jt([[document.querySelector(e)]], [document.documentElement]) : new Jt([[e]], $c);
}
function wv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
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
function Rr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kc(e) {
  var t = e.document.documentElement, n = on(e).on("dragstart.drag", Rr, Co);
  "onselectstart" in t ? n.on("selectstart.drag", Rr, Co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sc(e, t) {
  var n = e.document.documentElement, r = on(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Rr, Co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ri = (e) => () => e;
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
  function f(C) {
    C.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, bv).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(C, S) {
    if (!(d || !e.call(this, C, S))) {
      var T = $(this, t.call(this, C, S), C, S, "mouse");
      T && (on(C.view).on("mousemove.drag", y, Co).on("mouseup.drag", w, Co), kc(C.view), ps(C), u = !1, a = C.clientX, l = C.clientY, T("start", C));
    }
  }
  function y(C) {
    if (Rr(C), !u) {
      var S = C.clientX - a, T = C.clientY - l;
      u = S * S + T * T > p;
    }
    o.mouse("drag", C);
  }
  function w(C) {
    on(C.view).on("mousemove.drag mouseup.drag", null), Sc(C.view, u), Rr(C), o.mouse("end", C);
  }
  function m(C, S) {
    if (e.call(this, C, S)) {
      var T = C.changedTouches, D = t.call(this, C, S), Z = T.length, H, I;
      for (H = 0; H < Z; ++H)
        (I = $(this, D, C, S, T[H].identifier, T[H])) && (ps(C), I("start", C, T[H]));
    }
  }
  function b(C) {
    var S = C.changedTouches, T = S.length, D, Z;
    for (D = 0; D < T; ++D)
      (Z = o[S[D].identifier]) && (Rr(C), Z("drag", C, S[D]));
  }
  function x(C) {
    var S = C.changedTouches, T = S.length, D, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), D = 0; D < T; ++D)
      (Z = o[S[D].identifier]) && (ps(C), Z("end", C, S[D]));
  }
  function $(C, S, T, D, Z, H) {
    var I = i.copy(), z = fn(H || T, S), k, O, _;
    if ((_ = n.call(C, new As("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: Z,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), D)) != null)
      return k = _.x - z[0] || 0, O = _.y - z[1] || 0, function E(N, K, W) {
        var F = z, L;
        switch (N) {
          case "start":
            o[Z] = E, L = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            z = fn(W || K, S), L = s;
            break;
        }
        I.call(
          N,
          C,
          new As(N, {
            sourceEvent: K,
            subject: _,
            target: f,
            identifier: Z,
            active: L,
            x: z[0] + k,
            y: z[1] + O,
            dx: z[0] - F[0],
            dy: z[1] - F[1],
            dispatch: I
          }),
          D
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : ri(!!C), f) : e;
  }, f.container = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : ri(C), f) : t;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : ri(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : ri(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (p = (C = +C) * C, f) : Math.sqrt(p);
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
var $o = 0.7, ki = 1 / $o, jr = "\\s*([+-]?\\d+)\\s*", ko = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sv = /^#([0-9a-f]{3,8})$/, Ev = new RegExp(`^rgb\\(${jr},${jr},${jr}\\)$`), Pv = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), Tv = new RegExp(`^rgba\\(${jr},${jr},${jr},${ko}\\)$`), Nv = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${ko}\\)$`), Ov = new RegExp(`^hsl\\(${ko},${Pn},${Pn}\\)$`), Mv = new RegExp(`^hsla\\(${ko},${Pn},${Pn},${ko}\\)$`), pl = {
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
ya(Zo, Er, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hl,
  // Deprecated! Use color.formatHex.
  formatHex: hl,
  formatHex8: Dv,
  formatHsl: Lv,
  formatRgb: gl,
  toString: gl
});
function hl() {
  return this.rgb().formatHex();
}
function Dv() {
  return this.rgb().formatHex8();
}
function Lv() {
  return Pc(this).formatHsl();
}
function gl() {
  return this.rgb().formatRgb();
}
function Er(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Sv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? vl(t) : n === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? oi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? oi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ev.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = Pv.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Tv.exec(e)) ? oi(t[1], t[2], t[3], t[4]) : (t = Nv.exec(e)) ? oi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ov.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mv.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, t[4]) : pl.hasOwnProperty(e) ? vl(pl[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function vl(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function oi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Rt(e, t, n, r);
}
function Vv(e) {
  return e instanceof Zo || (e = Er(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function zs(e, t, n, r) {
  return arguments.length === 1 ? Vv(e) : new Rt(e, t, n, r ?? 1);
}
function Rt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ya(Rt, zs, Ec(Zo, {
  brighter(e) {
    return e = e == null ? ki : Math.pow(ki, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(Cr(this.r), Cr(this.g), Cr(this.b), Si(this.opacity));
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
  return `#${br(this.r)}${br(this.g)}${br(this.b)}`;
}
function Av() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}${br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yl() {
  const e = Si(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Cr(this.r)}, ${Cr(this.g)}, ${Cr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Si(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Cr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function br(e) {
  return e = Cr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function wl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new pn(e, t, n, r);
}
function Pc(e) {
  if (e instanceof pn) return new pn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Zo || (e = Er(e)), !e) return new pn();
  if (e instanceof pn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new pn(s, a, l, e.opacity);
}
function zv(e, t, n, r) {
  return arguments.length === 1 ? Pc(e) : new pn(e, t, n, r ?? 1);
}
function pn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ya(pn, zv, Ec(Zo, {
  brighter(e) {
    return e = e == null ? ki : Math.pow(ki, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Rt(
      hs(e >= 240 ? e - 240 : e + 120, o, r),
      hs(e, o, r),
      hs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new pn(bl(this.h), ii(this.s), ii(this.l), Si(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Si(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bl(this.h)}, ${ii(this.s) * 100}%, ${ii(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ii(e) {
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
const Ei = function e(t) {
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
function $n(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Wv(e, t) {
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
function Fv(e) {
  return function() {
    return e;
  };
}
function Yv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Nc(e, t) {
  var n = Hs.lastIndex = gs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Hs.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: $n(r, o) })), n = gs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Yv(l[0].x) : Fv(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function yo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? wa(t) : (n === "number" ? $n : n === "string" ? (r = Er(t)) ? (t = r, Ei) : Nc : t instanceof Er ? Ei : t instanceof Date ? Bv : Zv(t) ? jv : Array.isArray(t) ? Kv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Wv : $n)(e, t);
}
var xl = 180 / Math.PI, Oc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mc(e, t, n, r, o, i) {
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
var si;
function qv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Oc : Mc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Xv(e) {
  return e == null || (si || (si = document.createElementNS("http://www.w3.org/2000/svg", "g")), si.setAttribute("transform", e), !(e = si.transform.baseVal.consolidate())) ? Oc : (e = e.matrix, Mc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Dc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: $n(u, p) }, { i: w - 2, x: $n(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: $n(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: $n(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: $n(u, p) }, { i: w - 2, x: $n(d, f) });
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
var Uv = Dc(qv, "px, ", "px)", "deg)"), Gv = Dc(Xv, ", ", ")", ")"), Jv = 1e-12;
function _l(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Qv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function e1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const pi = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], h = d - a, y = p - l, w = h * h + y * y, m, b;
    if (w < Jv)
      b = Math.log(f / u) / t, m = function(D) {
        return [
          a + D * h,
          l + D * y,
          u * Math.exp(t * D * b)
        ];
      };
    else {
      var x = Math.sqrt(w), $ = (f * f - u * u + r * w) / (2 * u * n * x), C = (f * f - u * u - r * w) / (2 * f * n * x), S = Math.log(Math.sqrt($ * $ + 1) - $), T = Math.log(Math.sqrt(C * C + 1) - C);
      b = (T - S) / t, m = function(D) {
        var Z = D * b, H = _l(S), I = u / (n * x) * (H * e1(t * Z + S) - Qv(S));
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
var Ur = 0, po = 0, uo = 0, Lc = 1e3, Pi, ho, Ti = 0, Pr = 0, Qi = 0, So = typeof performance == "object" && performance.now ? performance : Date, Vc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ba() {
  return Pr || (Vc(t1), Pr = So.now() + Qi);
}
function t1() {
  Pr = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = Ac.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ba() : +n) + (t == null ? 0 : +t), !this._next && ho !== this && (ho ? ho._next = this : Pi = this, ho = this), this._call = e, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function Ac(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function n1() {
  ba(), ++Ur;
  for (var e = Pi, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ur;
}
function Cl() {
  Pr = (Ti = So.now()) + Qi, Ur = po = 0;
  try {
    n1();
  } finally {
    Ur = 0, o1(), Pr = 0;
  }
}
function r1() {
  var e = So.now(), t = e - Ti;
  t > Lc && (Qi -= t, Ti = e);
}
function o1() {
  for (var e, t = Pi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Pi = n);
  ho = e, Is(r);
}
function Is(e) {
  if (!Ur) {
    po && (po = clearTimeout(po));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && (po = setTimeout(Cl, e - So.now() - Qi)), uo && (uo = clearInterval(uo))) : (uo || (Ti = So.now(), uo = setInterval(r1, Lc)), Ur = 1, Vc(Cl));
  }
}
function $l(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var i1 = Gi("start", "end", "cancel", "interrupt"), s1 = [], zc = 0, kl = 1, Rs = 2, hi = 3, Sl = 4, js = 5, gi = 6;
function es(e, t, n, r, o, i) {
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
  var n = bn(e, t);
  if (n.state > zc) throw new Error("too late; already scheduled");
  return n;
}
function Mn(e, t) {
  var n = bn(e, t);
  if (n.state > hi) throw new Error("too late; already running");
  return n;
}
function bn(e, t) {
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
        if (h.state === hi) return $l(s);
        h.state === Sl ? (h.state = gi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = gi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if ($l(function() {
      n.state === hi && (n.state = Sl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Rs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Rs) {
      for (n.state = hi, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
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
    n.state = gi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function vi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Rs && r.state < js, r.state = gi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function l1(e) {
  return this.each(function() {
    vi(this, e);
  });
}
function u1(e, t) {
  var n, r;
  return function() {
    var o = Mn(this, e), i = o.tween;
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
    var i = Mn(this, e), s = i.tween;
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
    for (var r = bn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? u1 : c1)(n, e, t));
}
function _a(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return bn(o, r).value[t];
  };
}
function Hc(e, t) {
  var n;
  return (typeof t == "number" ? $n : t instanceof Er ? Ei : (n = Er(t)) ? (t = n, Ei) : Nc)(e, t);
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
  var n = Ji(e), r = n === "transform" ? Gv : Hc;
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
  return arguments.length ? this.each((typeof e == "function" ? $1 : k1)(t, e)) : bn(this.node(), t).delay;
}
function E1(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function P1(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function T1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? E1 : P1)(t, e)) : bn(this.node(), t).duration;
}
function N1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function O1(e) {
  var t = this._id;
  return arguments.length ? this.each(N1(t, e)) : bn(this.node(), t).ease;
}
function M1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mn(this, e).ease = n;
  };
}
function D1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(M1(this._id, e));
}
function L1(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Wn(r, this._parents, this._name, this._id);
}
function V1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Wn(s, this._parents, this._name, this._id);
}
function A1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function z1(e, t, n) {
  var r, o, i = A1(t) ? xa : Mn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function H1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? bn(this.node(), n).on.on(e) : this.each(z1(n, e, t));
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
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, es(u[f], t, n, f, u, bn(d, n)));
  return new Wn(i, this._parents, t, n);
}
function Z1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = hc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, y = bn(d, n), w = 0, m = f.length; w < m; ++w)
          (h = f[w]) && es(h, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new Wn(i, s, t, n);
}
var K1 = jo.prototype.constructor;
function B1() {
  return new K1(this._groups, this._parents);
}
function W1(e, t) {
  var n, r, o;
  return function() {
    var i = Xr(this, e), s = (this.style.removeProperty(e), Xr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ic(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function F1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Xr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Y1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Xr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Xr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function q1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Mn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ic(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function X1(e, t, n) {
  var r = (e += "") == "transform" ? Uv : Hc;
  return t == null ? this.styleTween(e, W1(e, r)).on("end.style." + e, Ic(e)) : typeof t == "function" ? this.styleTween(e, Y1(e, r, _a(this, "style." + e, t))).each(q1(this._id, e)) : this.styleTween(e, F1(e, r, t), n).on("end.style." + e, null);
}
function U1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function G1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && U1(e, s, n)), r;
  }
  return i._value = t, i;
}
function J1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, G1(e, t, n ?? ""));
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
        var d = bn(l, t);
        es(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Wn(r, this._parents, e, n);
}
function s0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Mn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var a0 = 0;
function Wn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Rc() {
  return ++a0;
}
var Dn = jo.prototype;
Wn.prototype = {
  constructor: Wn,
  select: j1,
  selectAll: Z1,
  selectChild: Dn.selectChild,
  selectChildren: Dn.selectChildren,
  filter: L1,
  merge: V1,
  selection: B1,
  transition: i0,
  call: Dn.call,
  nodes: Dn.nodes,
  node: Dn.node,
  size: Dn.size,
  empty: Dn.empty,
  each: Dn.each,
  on: H1,
  attr: y1,
  attrTween: C1,
  style: X1,
  styleTween: J1,
  text: t0,
  textTween: o0,
  remove: R1,
  tween: d1,
  delay: S1,
  duration: T1,
  ease: O1,
  easeVarying: D1,
  end: s0,
  [Symbol.iterator]: Dn[Symbol.iterator]
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
  e instanceof Wn ? (t = e._id, e = e._name) : (t = Rc(), (n = u0).time = ba(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && es(l, e, t, u, s, n || c0(l, t));
  return new Wn(r, this._parents, e, t);
}
jo.prototype.interrupt = l1;
jo.prototype.transition = d0;
const ai = (e) => () => e;
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
function zn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
zn.prototype = {
  constructor: zn,
  scale: function(e) {
    return e === 1 ? this : new zn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new zn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ts = new zn(1, 0, 0);
jc.prototype = zn.prototype;
function jc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ts;
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
  return this.__zoom || ts;
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
  var e = p0, t = h0, n = m0, r = g0, o = v0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = pi, u = Gi("start", "zoom", "end"), d, p, f, h = 500, y = 150, w = 0, m = 10;
  function b(_) {
    _.property("__zoom", El).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(_, E, N, K) {
    var W = _.selection ? _.selection() : _;
    W.property("__zoom", El), _ !== W ? S(_, E, N, K) : W.interrupt().each(function() {
      T(this, arguments).event(K).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, b.scaleBy = function(_, E, N, K) {
    b.scaleTo(_, function() {
      var W = this.__zoom.k, F = typeof E == "function" ? E.apply(this, arguments) : E;
      return W * F;
    }, N, K);
  }, b.scaleTo = function(_, E, N, K) {
    b.transform(_, function() {
      var W = t.apply(this, arguments), F = this.__zoom, L = N == null ? C(W) : typeof N == "function" ? N.apply(this, arguments) : N, U = F.invert(L), X = typeof E == "function" ? E.apply(this, arguments) : E;
      return n($(x(F, X), L, U), W, s);
    }, N, K);
  }, b.translateBy = function(_, E, N, K) {
    b.transform(_, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function(_, E, N, K, W) {
    b.transform(_, function() {
      var F = t.apply(this, arguments), L = this.__zoom, U = K == null ? C(F) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(ts.translate(U[0], U[1]).scale(L.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), F, s);
    }, K, W);
  };
  function x(_, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === _.k ? _ : new zn(E, _.x, _.y);
  }
  function $(_, E, N) {
    var K = E[0] - N[0] * _.k, W = E[1] - N[1] * _.k;
    return K === _.x && W === _.y ? _ : new zn(_.k, K, W);
  }
  function C(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function S(_, E, N, K) {
    _.on("start.zoom", function() {
      T(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var W = this, F = arguments, L = T(W, F).event(K), U = t.apply(W, F), X = N == null ? C(U) : typeof N == "function" ? N.apply(W, F) : N, J = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), R = W.__zoom, q = typeof E == "function" ? E.apply(W, F) : E, G = l(R.invert(X).concat(J / R.k), q.invert(X).concat(J / q.k));
      return function(ne) {
        if (ne === 1) ne = q;
        else {
          var re = G(ne), ee = J / re[2];
          ne = new zn(ee, X[0] - re[0] * ee, X[1] - re[1] * ee);
        }
        L.zoom(null, ne);
      };
    });
  }
  function T(_, E, N) {
    return !N && _.__zooming || new D(_, E);
  }
  function D(_, E) {
    this.that = _, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, E), this.taps = 0;
  }
  D.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, E) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var E = on(this.that).datum();
      u.call(
        _,
        this.that,
        new f0(_, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function Z(_, ...E) {
    if (!e.apply(this, arguments)) return;
    var N = T(this, E).event(_), K = this.__zoom, W = Math.max(i[0], Math.min(i[1], K.k * Math.pow(2, r.apply(this, arguments)))), F = fn(_);
    if (N.wheel)
      (N.mouse[0][0] !== F[0] || N.mouse[0][1] !== F[1]) && (N.mouse[1] = K.invert(N.mouse[0] = F)), clearTimeout(N.wheel);
    else {
      if (K.k === W) return;
      N.mouse = [F, K.invert(F)], vi(this), N.start();
    }
    co(_), N.wheel = setTimeout(L, y), N.zoom("mouse", n($(x(K, W), N.mouse[0], N.mouse[1]), N.extent, s));
    function L() {
      N.wheel = null, N.end();
    }
  }
  function H(_, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var N = _.currentTarget, K = T(this, E, !0).event(_), W = on(_.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", J, !0), F = fn(_, N), L = _.clientX, U = _.clientY;
    kc(_.view), vs(_), K.mouse = [F, this.__zoom.invert(F)], vi(this), K.start();
    function X(R) {
      if (co(R), !K.moved) {
        var q = R.clientX - L, G = R.clientY - U;
        K.moved = q * q + G * G > w;
      }
      K.event(R).zoom("mouse", n($(K.that.__zoom, K.mouse[0] = fn(R, N), K.mouse[1]), K.extent, s));
    }
    function J(R) {
      W.on("mousemove.zoom mouseup.zoom", null), Sc(R.view, K.moved), co(R), K.event(R).end();
    }
  }
  function I(_, ...E) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, K = fn(_.changedTouches ? _.changedTouches[0] : _, this), W = N.invert(K), F = N.k * (_.shiftKey ? 0.5 : 2), L = n($(x(N, F), K, W), t.apply(this, E), s);
      co(_), a > 0 ? on(this).transition().duration(a).call(S, L, K, _) : on(this).call(b.transform, L, K, _);
    }
  }
  function z(_, ...E) {
    if (e.apply(this, arguments)) {
      var N = _.touches, K = N.length, W = T(this, E, _.changedTouches.length === K).event(_), F, L, U, X;
      for (vs(_), L = 0; L < K; ++L)
        U = N[L], X = fn(U, this), X = [X, this.__zoom.invert(X), U.identifier], W.touch0 ? !W.touch1 && W.touch0[2] !== X[2] && (W.touch1 = X, W.taps = 0) : (W.touch0 = X, F = !0, W.taps = 1 + !!d);
      d && (d = clearTimeout(d)), F && (W.taps < 2 && (p = X[0], d = setTimeout(function() {
        d = null;
      }, h)), vi(this), W.start());
    }
  }
  function k(_, ...E) {
    if (this.__zooming) {
      var N = T(this, E).event(_), K = _.changedTouches, W = K.length, F, L, U, X;
      for (co(_), F = 0; F < W; ++F)
        L = K[F], U = fn(L, this), N.touch0 && N.touch0[2] === L.identifier ? N.touch0[0] = U : N.touch1 && N.touch1[2] === L.identifier && (N.touch1[0] = U);
      if (L = N.that.__zoom, N.touch1) {
        var J = N.touch0[0], R = N.touch0[1], q = N.touch1[0], G = N.touch1[1], ne = (ne = q[0] - J[0]) * ne + (ne = q[1] - J[1]) * ne, re = (re = G[0] - R[0]) * re + (re = G[1] - R[1]) * re;
        L = x(L, Math.sqrt(ne / re)), U = [(J[0] + q[0]) / 2, (J[1] + q[1]) / 2], X = [(R[0] + G[0]) / 2, (R[1] + G[1]) / 2];
      } else if (N.touch0) U = N.touch0[0], X = N.touch0[1];
      else return;
      N.zoom("touch", n($(L, U, X), N.extent, s));
    }
  }
  function O(_, ...E) {
    if (this.__zooming) {
      var N = T(this, E).event(_), K = _.changedTouches, W = K.length, F, L;
      for (vs(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), F = 0; F < W; ++F)
        L = K[F], N.touch0 && N.touch0[2] === L.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === L.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (L = fn(L, this), Math.hypot(p[0] - L[0], p[1] - L[1]) < m)) {
        var U = on(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : ai(+_), b) : r;
  }, b.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : ai(!!_), b) : e;
  }, b.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : ai(!!_), b) : o;
  }, b.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : ai([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), b) : t;
  }, b.scaleExtent = function(_) {
    return arguments.length ? (i[0] = +_[0], i[1] = +_[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(_) {
    return arguments.length ? (n = _, b) : n;
  }, b.duration = function(_) {
    return arguments.length ? (a = +_, b) : a;
  }, b.interpolate = function(_) {
    return arguments.length ? (l = _, b) : l;
  }, b.on = function() {
    var _ = u.on.apply(u, arguments);
    return _ === u ? b : _;
  }, b.clickDistance = function(_) {
    return arguments.length ? (w = (_ = +_) * _, b) : Math.sqrt(w);
  }, b.tapDistance = function(_) {
    return arguments.length ? (m = +_, b) : m;
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
var $r;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})($r || ($r = {}));
var Oi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Oi || (Oi = {}));
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
var Vn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Vn || (Vn = {}));
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
  const { width: n, height: r } = vr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    const a = s ? Mi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ns(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return rs(n);
}, Bo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ns(n, Mi(o)), r = !0);
  }), r ? rs(n) : { x: 0, y: 0, width: 0, height: 0 };
}, $a = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Fo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = To(a, Qr(u)), m = (h ?? 0) * (y ?? 0), b = i && w > 0;
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
function Wc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  else a && eo(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = eo(p) ? Tr(t, p, s.measured) : t;
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
const Jr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Tr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Jr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Jr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Fc(e, t, n) {
  const { width: r, height: o } = vr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Tr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Nl = (e, t, n) => e < t ? Jr(Math.abs(e - t), 1, t) / t : e > n ? -Jr(Math.abs(e - n), 1, t) / t : 0, Yc = (e, t, n = 15, r = 40) => {
  const o = Nl(e.x, r, t.width - r) * n, i = Nl(e.y, r, t.height - r) * n;
  return [o, i];
}, ns = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Bs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), rs = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Qr = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Mi = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ca(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, qc = (e, t) => rs(ns(Bs(e), Bs(t))), To = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ol = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), E0 = (e, t) => {
}, Wo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Wo(a, s) : a;
}, Di = ({ x: e, y: t }, [n, r, o]) => ({
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
function P0(e, t, n) {
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
}, xr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function eo(e) {
  return e != null && e !== "parent";
}
function vr(e) {
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
  const { x: i, y: s } = gn(e), a = Fo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Wo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Uc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Gc = (e) => e?.getRootNode?.() || window?.document, M0 = ["INPUT", "SELECT", "TEXTAREA"];
function Jc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : M0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Qc = (e) => "clientX" in e, gn = (e, t) => {
  const n = Qc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ml = (e, t, n, r, o) => {
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
      ...Uc(s)
    };
  });
};
function D0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function li(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Dl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ce.Left:
      return [t - li(t - r, i), n];
    case Ce.Right:
      return [t + li(r - t, i), n];
    case Ce.Top:
      return [t, n - li(n - o, i)];
    case Ce.Bottom:
      return [t, n + li(o - n, i)];
  }
}
function ed({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
  const [a, l] = Dl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Dl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, h, y] = D0({
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
function L0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function V0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ns(Mi(e), Mi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return To(s, rs(i)) > 0;
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
const Ll = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Vl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function R0({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ll[t], l = Ll[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = I0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", h = p[f];
  let y = [], w, m;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , $, C] = td({
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
    ], T = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === h ? y = f === "x" ? S : T : y = f === "x" ? T : S;
  } else {
    const S = [{ x: u.x, y: d.y }], T = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = a.x === h ? T : S : y = a.y === h ? S : T, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const k = Math.min(i - 1, i - z);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * k : x[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", k = a[f] === l[z], O = u[z] > d[z], _ = u[z] < d[z];
      (a[f] === 1 && (!k && O || k && _) || a[f] !== 1 && (!k && _ || k && O)) && (y = f === "x" ? S : T);
    }
    const D = { x: u.x + b.x, y: u.y + b.y }, Z = { x: d.x + x.x, y: d.y + x.y }, H = Math.max(Math.abs(D.x - y[0].x), Math.abs(Z.x - y[0].x)), I = Math.max(Math.abs(D.y - y[0].y), Math.abs(Z.y - y[0].y));
    H >= I ? (w = (D.x + Z.x) / 2, m = y[0].y) : (w = y[0].x, m = (D.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...y,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], w, m, $, C];
}
function j0(e, t, n, r) {
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
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? vr(e);
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
function Ws(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function K0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ws(l, t);
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
const rd = 1e3, W0 = 10, Ea = {
  nodeOrigin: [0, 0],
  nodeExtent: Zs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, F0 = {
  ...Ea,
  checkEquality: !0
};
function Pa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Y0(e, t, n) {
  const r = Pa(Ea, n);
  for (const o of e.values())
    if (o.parentId)
      Ta(o, e, t, r);
    else {
      const i = Ko(o, r.nodeOrigin), s = eo(o.extent) ? o.extent : r.nodeExtent, a = Tr(i, s, vr(o));
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
  const o = Pa(F0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? rd : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = Ko(u, o.nodeOrigin), f = eo(u.extent) ? u.extent : o.nodeExtent, h = Tr(p, f, vr(u));
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
function U0(e, t) {
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
  U0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * W0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? rd : 0, { x: p, y: f, z: h } = G0(e, u, s, a, d), { positionAbsolute: y } = e.internals, w = p !== y.x || f !== y.y;
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
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function G0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = vr(e), l = Ko(e, n), u = eo(e.extent) ? Tr(l, e.extent, a) : l;
  let d = Tr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Fc(d, a, t));
  const p = od(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function J0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Qr(a), u = qc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = vr(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), m = (y - d.width) * p[0], b = (w - d.height) * p[1];
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
    const y = Uc(f.nodeElement), w = h.measured.width !== y.width || h.measured.height !== y.height;
    if (y.width && y.height && (w || !h.internals.handleBounds || f.force)) {
      const m = f.nodeElement.getBoundingClientRect(), b = eo(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Fc(x, y, t.get(h.parentId)) : b && (x = Tr(x, b, y));
      const $ = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Ml("source", f.nodeElement, m, d, h.id),
            target: Ml("target", f.nodeElement, m, d, h.id)
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
        rect: Qr($, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = J0(p, t, n, o);
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
  }, s = Wo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function im({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, y = !1, w = null;
  function m({ noDragClassName: x, handleSelector: $, domNode: C, isSelectable: S, nodeId: T, nodeClickDistance: D = 0 }) {
    f = on(C);
    function Z({ x: k, y: O }) {
      const { nodeLookup: _, nodeExtent: E, snapGrid: N, snapToGrid: K, nodeOrigin: W, onNodeDrag: F, onSelectionDrag: L, onError: U, updateNodePositions: X } = t();
      i = { x: k, y: O };
      let J = !1;
      const R = a.size > 1, q = R && E ? Bs(Bo(a)) : null, G = R && K ? om({
        dragItems: a,
        snapGrid: N,
        x: k,
        y: O
      }) : null;
      for (const [ne, re] of a) {
        if (!_.has(ne))
          continue;
        let ee = { x: k - re.distance.x, y: O - re.distance.y };
        K && (ee = G ? {
          x: Math.round(ee.x + G.x),
          y: Math.round(ee.y + G.y)
        } : Wo(ee, N));
        let ve = null;
        if (R && E && !re.extent && q) {
          const { positionAbsolute: ae } = re.internals, me = ae.x - q.x + E[0][0], ge = ae.x + re.measured.width - q.x2 + E[1][0], xe = ae.y - q.y + E[0][1], de = ae.y + re.measured.height - q.y2 + E[1][1];
          ve = [
            [me, xe],
            [ge, de]
          ];
        }
        const { position: ce, positionAbsolute: ie } = Wc({
          nodeId: ne,
          nextPosition: ee,
          nodeLookup: _,
          nodeExtent: ve || E,
          nodeOrigin: W,
          onError: U
        });
        J = J || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = ie;
      }
      if (y = y || J, !!J && (X(a, !0), w && (r || F || !T && L))) {
        const [ne, re] = ys({
          nodeId: T,
          dragItems: a,
          nodeLookup: _
        });
        r?.(w, a, ne, re), F?.(w, ne, re), T || L?.(w, re);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: k, panBy: O, autoPanSpeed: _, autoPanOnNodeDrag: E } = t();
      if (!E) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, K] = Yc(u, d, _);
      (N !== 0 || K !== 0) && (i.x = (i.x ?? 0) - N / k[2], i.y = (i.y ?? 0) - K / k[2], await O({ x: N, y: K }) && Z(i)), s = requestAnimationFrame(H);
    }
    function I(k) {
      const { nodeLookup: O, multiSelectionActive: _, nodesDraggable: E, transform: N, snapGrid: K, snapToGrid: W, selectNodesOnDrag: F, onNodeDragStart: L, onSelectionDragStart: U, unselectNodesAndEdges: X } = t();
      p = !0, (!F || !S) && !_ && T && (O.get(T)?.selected || X()), S && F && T && e?.(T);
      const J = ms(k.sourceEvent, { transform: N, snapGrid: K, snapToGrid: W, containerBounds: d });
      if (i = J, a = rm(O, E, J, T), a.size > 0 && (n || L || !T && U)) {
        const [R, q] = ys({
          nodeId: T,
          dragItems: a,
          nodeLookup: O
        });
        n?.(k.sourceEvent, a, R, q), L?.(k.sourceEvent, R, q), T || U?.(k.sourceEvent, q);
      }
    }
    const z = kv().clickDistance(D).on("start", (k) => {
      const { domNode: O, nodeDragThreshold: _, transform: E, snapGrid: N, snapToGrid: K } = t();
      d = O?.getBoundingClientRect() || null, h = !1, y = !1, w = k.sourceEvent, _ === 0 && I(k), i = ms(k.sourceEvent, { transform: E, snapGrid: N, snapToGrid: K, containerBounds: d }), u = gn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: O, transform: _, snapGrid: E, snapToGrid: N, nodeDragThreshold: K, nodeLookup: W } = t(), F = ms(k.sourceEvent, { transform: _, snapGrid: E, snapToGrid: N, containerBounds: d });
      if (w = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !W.has(T)) && (h = !0), !h) {
        if (!l && O && p && (l = !0, H()), !p) {
          const L = gn(k.sourceEvent, d), U = L.x - u.x, X = L.y - u.y;
          Math.sqrt(U * U + X * X) > K && I(k);
        }
        (i.x !== F.xSnapped || i.y !== F.ySnapped) && a && p && (u = gn(k.sourceEvent, d), Z(F));
      }
    }).on("end", (k) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: O, updateNodePositions: _, onNodeDragStop: E, onSelectionDragStop: N } = t();
        if (y && (_(a, !1), y = !1), o || E || !T && N) {
          const [K, W] = ys({
            nodeId: T,
            dragItems: a,
            nodeLookup: O,
            dragging: !1
          });
          o?.(k.sourceEvent, a, K, W), E?.(k.sourceEvent, K, W), T || N?.(k.sourceEvent, W);
        }
      }
    }).filter((k) => {
      const O = k.target;
      return !k.button && (!x || !Rl(O, `.${x}`, C)) && (!$ || Rl(O, $, C));
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
    To(o, Qr(i)) > 0 && r.push(i);
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
function cm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: w, onConnectEnd: m, isValidConnection: b = ld, onReconnectEnd: x, updateConnection: $, getTransform: C, getFromHandle: S, autoPanSpeed: T, dragThreshold: D = 1, handleDomNode: Z }) {
  const H = Gc(e.target);
  let I = 0, z;
  const { x: k, y: O } = gn(e), _ = ad(i, Z), E = a?.getBoundingClientRect();
  let N = !1;
  if (!E || !_)
    return;
  const K = sd(o, _, r, l, t);
  if (!K)
    return;
  let W = gn(e, E), F = !1, L = null, U = !1, X = null;
  function J() {
    if (!d || !E)
      return;
    const [ve, ce] = Yc(W, E, T);
    f({ x: ve, y: ce }), I = requestAnimationFrame(J);
  }
  const R = {
    ...K,
    nodeId: o,
    type: _,
    position: K.position
  }, q = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: No(q, R, Ce.Left, !0),
    fromHandle: R,
    fromPosition: R.position,
    fromNode: q,
    to: W,
    toHandle: null,
    toPosition: Pl[R.position],
    toNode: null,
    pointer: W
  };
  function ne() {
    N = !0, $(G), y?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  D === 0 && ne();
  function re(ve) {
    if (!N) {
      const { x: me, y: ge } = gn(ve), xe = me - k, de = ge - O;
      if (!(xe * xe + de * de > D * D))
        return;
      ne();
    }
    if (!S() || !R) {
      ee(ve);
      return;
    }
    const ce = C();
    W = gn(ve, E), z = lm(Fo(W, ce, !1, [1, 1]), n, l, R), F || (J(), F = !0);
    const ie = ud(ve, {
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
    X = ie.handleDomNode, L = ie.connection, U = um(!!z, ie.isValid);
    const ae = {
      // from stays the same
      ...G,
      isValid: U,
      to: ie.toHandle && U ? Di({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : W,
      toHandle: ie.toHandle,
      toPosition: U && ie.toHandle ? ie.toHandle.position : Pl[R.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: W
    };
    $(ae), G = ae;
  }
  function ee(ve) {
    if (!("touches" in ve && ve.touches.length > 0)) {
      if (N) {
        (z || X) && L && U && w?.(L);
        const { inProgress: ce, ...ie } = G, ae = {
          ...ie,
          toPosition: G.toHandle ? G.toPosition : null
        };
        m?.(ve, ae), i && x?.(ve, ae);
      }
      h(), cancelAnimationFrame(I), F = !1, U = !1, L = null, X = null, H.removeEventListener("mousemove", re), H.removeEventListener("mouseup", ee), H.removeEventListener("touchmove", re), H.removeEventListener("touchend", ee);
    }
  }
  H.addEventListener("mousemove", re), H.addEventListener("mouseup", ee), H.addEventListener("touchmove", re), H.addEventListener("touchend", ee);
}
function ud(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ld, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = gn(e), w = s.elementFromPoint(h, y), m = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const x = ad(void 0, m), $ = m.getAttribute("data-nodeid"), C = m.getAttribute("data-handleid"), S = m.classList.contains("connectable"), T = m.classList.contains("connectableend");
    if (!$ || !x)
      return b;
    const D = {
      source: p ? $ : r,
      sourceHandle: p ? C : o,
      target: p ? r : $,
      targetHandle: p ? o : C
    };
    b.connection = D;
    const Z = S && T && (n === Gr.Strict ? p && x === "source" || !p && x === "target" : $ !== r || C !== o);
    b.isValid = Z && u(D), b.toHandle = sd($, x, C, d, n, !0);
  }
  return b;
}
const jl = {
  onPointerDown: cm,
  isValid: ud
};
function dm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = on(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = ($) => {
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const C = n(), S = $.sourceEvent.ctrlKey && xr() ? 10 : 1, T = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = C[2] * Math.pow(2, T * S);
      t.scaleTo(D);
    };
    let w = [0, 0];
    const m = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (w = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, b = ($) => {
      const C = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], T = [S[0] - w[0], S[1] - w[1]];
      w = S;
      const D = r() * Math.max(C[2], Math.log(C[2])) * (h ? -1 : 1), Z = {
        x: C[0] - T[0] * D,
        y: C[1] - T[1] * D
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: C[2]
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
    pointer: fn
  };
}
const os = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ws = ({ x: e, y: t, zoom: n }) => ts.translate(e, t).scale(n), Hr = (e, t) => e.target.closest(`.${t}`), cd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), fm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, bs = (e, t = 0, n = fm, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, dd = (e) => {
  const t = e.ctrlKey && xr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function pm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Hr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = fn(d), b = dd(d), x = p * Math.pow(2, b);
      r.scaleTo(n, x, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === $r.Vertical ? 0 : d.deltaX * f, y = o === $r.Horizontal ? 0 : d.deltaY * f;
    !xr() && d.shiftKey && o !== $r.Vertical && (h = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(h / p) * i,
      -(y / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = os(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function hm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Hr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function gm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = os(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function vm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && cd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, os(i.transform));
  };
}
function mm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && cd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = os(s.transform);
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
    if (p.button === 1 && p.type === "mousedown" && (Hr(p, `${u}-flow__node`) || Hr(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || Hr(p, a) && y || Hr(p, l) && (!y || o && y && !e) || !n && p.ctrlKey && y)
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
  }, d = e.getBoundingClientRect(), p = Zc().scaleExtent([t, n]).translateExtent(r), f = on(e).call(p);
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
      p?.interpolate(k?.interpolate === "linear" ? yo : pi).transform(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: k, onPaneContextMenu: O, userSelectionActive: _, panOnScroll: E, panOnDrag: N, panOnScrollMode: K, panOnScrollSpeed: W, preventScrolling: F, zoomOnPinch: L, zoomOnScroll: U, zoomOnDoubleClick: X, zoomActivationKeyPressed: J, lib: R, onTransformChange: q, connectionInProgress: G, paneClickDistance: ne, selectionOnDrag: re }) {
    _ && !u.isZoomingOrPanning && b();
    const ee = E && !J && !_;
    p.clickDistance(re ? 1 / 0 : !Hn(ne) || ne < 0 ? 0 : ne);
    const ve = ee ? pm({
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
      preventScrolling: F,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", ve, { passive: !1 }), !_) {
      const ie = gm({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", ie);
      const ae = vm({
        zoomPanValues: u,
        panOnDrag: N,
        onPaneContextMenu: !!O,
        onPanZoom: i,
        onTransformChange: q
      });
      p.on("zoom", ae);
      const me = mm({
        zoomPanValues: u,
        panOnDrag: N,
        panOnScroll: E,
        onPaneContextMenu: O,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", me);
    }
    const ce = ym({
      zoomActivationKeyPressed: J,
      panOnDrag: N,
      zoomOnScroll: U,
      panOnScroll: E,
      zoomOnDoubleClick: X,
      zoomOnPinch: L,
      userSelectionActive: _,
      noPanClassName: k,
      noWheelClassName: z,
      lib: R,
      connectionInProgress: G
    });
    p.filter(ce), X ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function x(z, k, O) {
    const _ = ws(z), E = p?.constrain()(_, k, O);
    return E && await w(E), new Promise((N) => N(E));
  }
  async function $(z, k) {
    const O = ws(z);
    return await w(O, k), new Promise((_) => _(O));
  }
  function C(z) {
    if (f) {
      const k = ws(z), O = f.property("__zoom");
      (O.k !== z.zoom || O.x !== z.x || O.y !== z.y) && p?.transform(f, k, null, { sync: !0 });
    }
  }
  function S() {
    const z = f ? jc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function T(z, k) {
    return f ? new Promise((O) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : pi).scaleTo(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function D(z, k) {
    return f ? new Promise((O) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : pi).scaleBy(bs(f, k?.duration, k?.ease, () => O(!0)), z);
    }) : Promise.resolve(!1);
  }
  function Z(z) {
    p?.scaleExtent(z);
  }
  function H(z) {
    p?.translateExtent(z);
  }
  function I(z) {
    const k = !Hn(z) || z < 0 ? 0 : z;
    p?.clickDistance(k);
  }
  return {
    update: m,
    destroy: b,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: T,
    scaleBy: D,
    setScaleExtent: Z,
    setTranslateExtent: H,
    syncViewport: C,
    setClickDistance: I
  };
}
var Zl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Zl || (Zl = {}));
var bm = /* @__PURE__ */ te("<div><!></div>");
function cr(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => Ce.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), y = /* @__PURE__ */ qe(t, [
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
  const w = lr("svelteflow__node_id"), m = lr("svelteflow__node_connectable");
  let b = /* @__PURE__ */ P(() => r() === "target"), x = /* @__PURE__ */ P(() => a() !== void 0 ? a() : m.value), $ = xn(), C = /* @__PURE__ */ P(() => $.ariaLabelConfig), S = null;
  Zu(() => {
    if (p() || f()) {
      $.edges;
      let L = $.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !w0(L, S)) {
        const U = L ?? /* @__PURE__ */ new Map();
        Tl(S, U, f()), Tl(U, S, p());
      }
      S = new Map(L);
    }
  });
  let T = /* @__PURE__ */ P(() => {
    if (!$.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: U, isValid: X } = $.connection, J = L && L.nodeId === w && L.type === r() && L.id === n(), R = U && U.nodeId === w && U.type === r() && U.id === n(), q = $.connectionMode === Gr.Strict ? L?.type !== r() : w !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      J,
      R,
      q,
      R && X
    ];
  }), D = /* @__PURE__ */ P(() => Lo(c(T), 5)), Z = /* @__PURE__ */ P(() => c(D)[0]), H = /* @__PURE__ */ P(() => c(D)[1]), I = /* @__PURE__ */ P(() => c(D)[2]), z = /* @__PURE__ */ P(() => c(D)[3]), k = /* @__PURE__ */ P(() => c(D)[4]);
  function O(L) {
    const U = $.onbeforeconnect ? $.onbeforeconnect(L) : L;
    U && ($.addEdge(U), $.onconnect?.(L));
  }
  function _(L) {
    const U = Qc(L);
    L.currentTarget && (U && L.button === 0 || !U) && jl.onPointerDown(L, {
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
      onConnectStart: (X, J) => {
        $.onconnectstart?.(X, {
          nodeId: J.nodeId,
          handleId: J.handleId,
          handleType: J.handleType
        });
      },
      onConnectEnd: (X, J) => {
        $.onconnectend?.(X, J);
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
    const U = Gc(L.target), X = d() ?? $.isValidConnection, { connectionMode: J, clickConnectStartHandle: R, flowId: q, nodeLookup: G } = $, { connection: ne, isValid: re } = jl.isValid(L, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: J,
      fromNodeId: R.nodeId,
      fromHandleId: R.id ?? null,
      fromType: R.type,
      isValidConnection: X,
      flowId: q,
      doc: U,
      lib: "svelte",
      nodeLookup: G
    });
    re && ne && O(ne);
    const ee = structuredClone(_u($.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, $.onclickconnectend?.(L, ee), $.clickConnectStartHandle = null;
  }
  var N = {
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
  vt(K, () => ({
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
    onmousedown: _,
    ontouchstart: _,
    onclick: $.clickConnect ? E : void 0,
    onkeypress: W,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...y,
    [nr]: {
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
  var F = B(K);
  return ut(F, () => h() ?? Pt), j(K), M(e, K), pe(N);
}
le(
  cr,
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
  fe(t, !0);
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
  cr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), u = V(l);
  return cr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Pe(() => Je(l, ` ${n()?.label ?? ""} `)), M(e, s), pe(i);
}
le(Na, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var _m = /* @__PURE__ */ te(" <!>", 1);
function fd(e, t) {
  fe(t, !0);
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
  be();
  var i = _m(), s = se(i), a = V(s);
  return cr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Pe(() => Je(s, `${n()?.label ?? ""} `)), M(e, i), pe(o);
}
le(fd, { data: {}, sourcePosition: {} }, [], [], !0);
var Cm = /* @__PURE__ */ te(" <!>", 1);
function pd(e, t) {
  fe(t, !0);
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
  be();
  var i = Cm(), s = se(i), a = V(s);
  return cr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Pe(() => Je(s, `${n()?.label ?? ""} `)), M(e, i), pe(o);
}
le(pd, { data: {}, targetPosition: {} }, [], [], !0);
function hd(e, t) {
}
le(hd, {}, [], [], !0);
function xs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gd(e, t) {
  const n = /* @__PURE__ */ P(xn), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? xs(e, c(r), t) : o = la(() => {
    it(() => {
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
      it(() => {
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
function Nn(e) {
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
  fe(t, !0), Ye(e, Sm);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7), i = v(t, "height", 7), s = v(t, "selectEdgeOnClick", 7, !1), a = v(t, "transparent", 7, !1), l = v(t, "class", 7), u = v(t, "children", 7), d = /* @__PURE__ */ qe(t, [
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
  const p = xn(), f = lr("svelteflow__edge_id");
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
  vt(
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
      [kn]: x
    }),
    [
      () => ({
        display: vd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Nn(o()),
        height: Nn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = B(w);
  return ut(b, () => u() ?? Pt), j(w), kt(w, (x, $) => gd?.(x, $), () => "edge-labels"), M(e, w), pe(y);
}
le(
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
var Em = /* @__PURE__ */ ye("<path></path>"), Pm = /* @__PURE__ */ ye('<path fill="none"></path><!><!>', 1);
function Yo(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "path", 7), o = v(t, "label", 7), i = v(t, "labelX", 7), s = v(t, "labelY", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "style", 7), p = v(t, "interactionWidth", 7, 20), f = v(t, "class", 7), h = /* @__PURE__ */ qe(t, [
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
  }, w = Pm(), m = se(w), b = V(m);
  {
    var x = (S) => {
      var T = Em();
      vt(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), M(S, T);
    };
    ue(b, (S) => {
      p() > 0 && S(x);
    });
  }
  var $ = V(b);
  {
    var C = (S) => {
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
        children: (T, D) => {
          be();
          var Z = Te();
          Pe(() => Je(Z, o())), M(T, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ue($, (S) => {
      o() && S(C);
    });
  }
  return Pe(() => {
    ke(m, "id", n()), ke(m, "d", r()), Bt(m, 0, Gn(["svelte-flow__edge-path", f()])), ke(m, "marker-start", l()), ke(m, "marker-end", u()), Ct(m, d());
  }), M(e, w), pe(y);
}
le(
  Yo,
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
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), y = v(t, "targetX", 7), w = v(t, "targetY", 7), m = /* @__PURE__ */ P(() => ed({
    sourceX: d(),
    sourceY: p(),
    targetX: y(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ P(() => Lo(c(m), 3)), x = /* @__PURE__ */ P(() => c(b)[0]), $ = /* @__PURE__ */ P(() => c(b)[1]), C = /* @__PURE__ */ P(() => c(b)[2]);
  var S = {
    get id() {
      return n();
    },
    set id(T) {
      n(T), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(T) {
      r(T), g();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(T) {
      i(T), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(T) {
      s(T), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(T) {
      a(T), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(T) {
      l(T), g();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(T) {
      u(T), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(T) {
      d(T), g();
    },
    get sourceY() {
      return p();
    },
    set sourceY(T) {
      p(T), g();
    },
    get style() {
      return f();
    },
    set style(T) {
      f(T), g();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(T) {
      h(T), g();
    },
    get targetX() {
      return y();
    },
    set targetX(T) {
      y(T), g();
    },
    get targetY() {
      return w();
    },
    set targetY(T) {
      w(T), g();
    }
  };
  return Yo(e, {
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
      return c(C);
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
  }), pe(S);
}
le(
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
  fe(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), y = /* @__PURE__ */ P(() => Sa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ P(() => Lo(c(y), 3)), m = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(C) {
      n(C), g();
    },
    get label() {
      return r();
    },
    set label(C) {
      r(C), g();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(C) {
      o(C), g();
    },
    get style() {
      return i();
    },
    set style(C) {
      i(C), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(C) {
      l(C), g();
    },
    get sourceX() {
      return u();
    },
    set sourceX(C) {
      u(C), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(C) {
      d(C), g();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(C) {
      p(C), g();
    },
    get targetX() {
      return f();
    },
    set targetX(C) {
      f(C), g();
    },
    get targetY() {
      return h();
    },
    set targetY(C) {
      h(C), g();
    }
  };
  return Yo(e, {
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
  }), pe($);
}
le(
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
  fe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ P(() => nd({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => Lo(c(f), 3)), y = /* @__PURE__ */ P(() => c(h)[0]), w = /* @__PURE__ */ P(() => c(h)[1]), m = /* @__PURE__ */ P(() => c(h)[2]);
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
  return Yo(e, {
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
  }), pe(b);
}
le(
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
  fe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), y = /* @__PURE__ */ P(() => Sa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ P(() => Lo(c(y), 3)), m = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(C) {
      o(C), g();
    },
    get targetX() {
      return i();
    },
    set targetX(C) {
      i(C), g();
    },
    get targetY() {
      return s();
    },
    set targetY(C) {
      s(C), g();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(C) {
      a(C), g();
    },
    get label() {
      return l();
    },
    set label(C) {
      l(C), g();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(C) {
      u(C), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(C) {
      d(C), g();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(C) {
      p(C), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), g();
    },
    get style() {
      return h();
    },
    set style(C) {
      h(C), g();
    }
  };
  return Yo(e, {
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
  }), pe($);
}
le(
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
class Mm extends Tm {
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
      (i) => Ms(o, "change", i)
    );
  }
}
function Dm(e, t, n, r) {
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
      if (V0({
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
      zIndex: L0({
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
function Lm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Bo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ka(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Vm(e) {
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
        p = Dm(s, b, w, m), f = Bl({
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
    #M = /* @__PURE__ */ Oe(!1);
    get selectionKeyPressed() {
      return c(this.#M);
    }
    set selectionKeyPressed(r) {
      Q(this.#M, r);
    }
    #D = /* @__PURE__ */ Oe(!1);
    get multiselectionKeyPressed() {
      return c(this.#D);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#D, r);
    }
    #L = /* @__PURE__ */ Oe(!1);
    get deleteKeyPressed() {
      return c(this.#L);
    }
    set deleteKeyPressed(r) {
      Q(this.#L, r);
    }
    #V = /* @__PURE__ */ Oe(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      Q(this.#V, r);
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
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? Oi.Partial);
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
    #W = /* @__PURE__ */ P(() => O0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      Q(this.#W, r);
    }
    #F = /* @__PURE__ */ Oe(Lm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#F);
    }
    set _viewport(r) {
      Q(this.#F, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Oe(
      // _connection is viewport independent and originating from XYHandle
      Ks
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      Q(this.#Y, r);
    }
    #q = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Fo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
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
    #U = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      Q(this.#U, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      Q(this.#G, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      Q(this.#J, r);
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
    _prefersDark = new Mm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
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
function xn() {
  const e = lr(Vi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Vi = Symbol();
function Cd(e) {
  const t = Vm(e);
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
    Y0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const O = /* @__PURE__ */ new Map();
    for (const _ of z) {
      const E = t.nodeLookup.get(_.id)?.internals.userNode;
      if (!E)
        continue;
      const N = { ...E };
      switch (_.type) {
        case "dimensions": {
          const K = { ...N.measured, ..._.dimensions };
          _.setAttributes && (N.width = _.dimensions?.width ?? N.width, N.height = _.dimensions?.height ?? N.height), N.measured = K;
          break;
        }
        case "position":
          N.position = _.position ?? N.position;
          break;
      }
      O.set(_.id, N);
    }
    t.nodes = t.nodes.map((_) => O.get(_.id) ?? _);
  }
  function a(I) {
    const z = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = z, t.nodes = [...t.nodes], z.promise;
  }
  async function l(I, z, k) {
    const O = typeof k?.zoom < "u" ? k.zoom : t.maxZoom, _ = t.panZoom;
    return _ ? (await _.setViewport({
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
    const O = I.map((_) => (!z || z.has(_.id)) && _.selected ? (k = !0, { ..._, selected: !1 }) : _);
    return [k, O];
  }
  function m(I) {
    const z = I?.nodes ? new Set(I.nodes.map((K) => K.id)) : null, [k, O] = w(t.nodes, z);
    k && (t.nodes = O);
    const _ = I?.edges ? new Set(I.edges.map((K) => K.id)) : null, [E, N] = w(t.edges, _);
    E && (t.edges = N);
  }
  function b(I) {
    const z = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((k) => {
      const O = I.includes(k.id), _ = z && k.selected || O;
      return !!k.selected !== _ ? { ...k, selected: _ } : k;
    }), z || m({ nodes: [] });
  }
  function x(I) {
    const z = t.multiselectionKeyPressed;
    t.edges = t.edges.map((k) => {
      const O = I.includes(k.id), _ = z && k.selected || O;
      return !!k.selected !== _ ? { ...k, selected: _ } : k;
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
  function C(I) {
    const z = t.edgeLookup.get(I);
    if (!z) {
      console.warn("012", Eo.error012(I));
      return;
    }
    (z.selectable || t.elementsSelectable && typeof z.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, z.selected ? z.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [z] }) : x([I]));
  }
  function S(I, z) {
    const { nodeExtent: k, snapGrid: O, nodeOrigin: _, nodeLookup: E, nodesDraggable: N, onerror: K } = t, W = /* @__PURE__ */ new Map(), F = O?.[0] ?? 5, L = O?.[1] ?? 5, U = I.x * F * z, X = I.y * L * z;
    for (const J of E.values()) {
      if (!(J.selected && (J.draggable || N && typeof J.draggable > "u")))
        continue;
      let R = {
        x: J.internals.positionAbsolute.x + U,
        y: J.internals.positionAbsolute.y + X
      };
      O && (R = Wo(R, O));
      const { position: q, positionAbsolute: G } = Wc({
        nodeId: J.id,
        nextPosition: R,
        nodeLookup: E,
        nodeExtent: k,
        nodeOrigin: _,
        onError: K
      });
      J.position = q, J.internals.positionAbsolute = G, W.set(J.id, J);
    }
    i(W);
  }
  function T(I) {
    return em({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const D = (I) => {
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
    handleEdgeSelection: C,
    moveSelectedNodes: S,
    panBy: T,
    updateConnection: D,
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
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), y = v(t, "onmove", 7), w = v(t, "onmoveend", 7), m = v(t, "oninit", 7), b = v(t, "children", 7), x = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let S = !1;
  it(() => {
    !S && n().viewportInitialized && (m()?.(), S = !0);
  });
  var T = {
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
  }, D = zm(), Z = B(D);
  return ut(Z, b), j(D), kt(D, (H, I) => Am?.(H, I), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
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
  })), M(e, D), pe(T);
}
le(
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
function Wl(e, t) {
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
function Yl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Hm = /* @__PURE__ */ te("<div><!></div>");
function kd(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), m = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ P(() => n().elementsSelectable && (c(m) || n().selectionRectMode === "user")), x = !1;
  function $(E) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const N = E.target === p, K = !N && !!E.target.closest(".nokey"), W = i() && N || n().selectionKeyPressed;
    if (K || !c(m) || !W || E.button !== 0 || !E.isPrimary)
      return;
    E.target?.setPointerCapture?.(E.pointerId), x = !1;
    const { x: F, y: L } = gn(E, f);
    n(n().selectionRect = { width: 0, height: 0, startX: F, startY: L, x: F, y: L }, !0), N || (E.stopPropagation(), E.preventDefault());
  }
  function C(E) {
    if (!c(m) || !f || !n().selectionRect)
      return;
    const N = gn(E, f), { startX: K = 0, startY: W = 0 } = n().selectionRect;
    if (!x) {
      const J = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(N.x - K, N.y - W) <= J)
        return;
      n().unselectNodesAndEdges(), l()?.(E);
    }
    x = !0;
    const F = {
      ...n().selectionRect,
      x: N.x < K ? N.x : K,
      y: N.y < W ? N.y : W,
      width: Math.abs(N.x - K),
      height: Math.abs(N.y - W)
    }, L = h, U = y;
    h = new Set($a(
      n().nodeLookup,
      F,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Oi.Partial,
      !0
    ).map((J) => J.id));
    const X = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const J of h) {
      const R = n().connectionLookup.get(J);
      if (R)
        for (const { edgeId: q } of R.values()) {
          const G = n().edgeLookup.get(q);
          G && (G.selectable ?? X) && y.add(q);
        }
    }
    Yl(L, h) || n(n().nodes = n().nodes.map(Fl(h)), !0), Yl(U, y) || n(n().edges = n().edges.map(Fl(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = F, !0);
  }
  function S(E) {
    E.button === 0 && (E.target?.releasePointerCapture?.(E.pointerId), !x && E.target === p && Z?.(E), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), x && u()?.(E));
  }
  const T = (E) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      E.preventDefault();
      return;
    }
    a()?.({ event: E });
  }, D = (E) => {
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
  var k = /* @__PURE__ */ P(() => c(b) ? void 0 : Wl(Z, p));
  I.__click = function(...E) {
    c(k)?.apply(this, E);
  }, I.__pointermove = function(...E) {
    (c(b) ? C : void 0)?.apply(this, E);
  }, I.__pointerup = function(...E) {
    (c(b) ? S : void 0)?.apply(this, E);
  };
  var O = /* @__PURE__ */ P(() => Wl(T, p));
  I.__contextmenu = function(...E) {
    c(O)?.apply(this, E);
  };
  var _ = B(I);
  return ut(_, d), j(I), Wt(I, (E) => p = E, () => p), Pe((E) => z = Bt(I, 1, "svelte-flow__pane svelte-flow__container", null, z, E), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(m)
    })
  ]), Ci(
    "pointerdown",
    I,
    function(...E) {
      (c(b) ? $ : void 0)?.apply(this, E);
    },
    !0
  ), Ci(
    "click",
    I,
    function(...E) {
      (c(b) ? D : void 0)?.apply(this, E);
    },
    !0
  ), M(e, I), pe(H);
}
gr(["click", "pointermove", "pointerup", "contextmenu"]);
le(
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
  fe(t, !0);
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
  return ut(a, r), j(i), Pe(() => s = Ct(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), M(e, i), pe(o);
}
le(Sd, { store: {}, children: {} }, [], [], !0);
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
  fe(t, !0), Ye(e, Zm);
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
  var a = V(i, 2), l = B(a, !0);
  j(a);
  var u = V(a, 2);
  {
    var d = (p) => {
      var f = Rm(), h = B(f, !0);
      j(f), Pe(() => {
        ke(f, "id", `${Km}-${n().flowId}`), Je(h, n().ariaLiveMessage);
      }), M(p, f);
    };
    ue(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Pe(() => {
    ke(i, "id", `${Td}-${n().flowId}`), Je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Nd}-${n().flowId}`), Je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(e, o), pe(r);
}
le(Pd, { store: {} }, [], [], !0);
const Td = "svelte-flow__node-desc", Nd = "svelte-flow__edge-desc", Km = "svelte-flow__aria-live";
var Bm = /* @__PURE__ */ te("<div><!></div>");
function Od(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ P(() => Dt(r().data, () => ({}), !0)), w = /* @__PURE__ */ P(() => Dt(r().selected, !1)), m = /* @__PURE__ */ P(() => r().draggable), b = /* @__PURE__ */ P(() => r().selectable), x = /* @__PURE__ */ P(() => Dt(r().deletable, !0)), $ = /* @__PURE__ */ P(() => r().connectable), C = /* @__PURE__ */ P(() => r().focusable), S = /* @__PURE__ */ P(() => Dt(r().hidden, !1)), T = /* @__PURE__ */ P(() => Dt(r().dragging, !1)), D = /* @__PURE__ */ P(() => Dt(r().style, "")), Z = /* @__PURE__ */ P(() => r().class), H = /* @__PURE__ */ P(() => Dt(r().type, "default")), I = /* @__PURE__ */ P(() => r().parentId), z = /* @__PURE__ */ P(() => r().sourcePosition), k = /* @__PURE__ */ P(() => r().targetPosition), O = /* @__PURE__ */ P(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ P(() => Dt(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ P(() => r().initialWidth), N = /* @__PURE__ */ P(() => r().initialHeight), K = /* @__PURE__ */ P(() => r().width), W = /* @__PURE__ */ P(() => r().height), F = /* @__PURE__ */ P(() => r().dragHandle), L = /* @__PURE__ */ P(() => Dt(r().internals.z, 0)), U = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), J = /* @__PURE__ */ P(() => r().internals.userNode), { id: R } = r(), q = /* @__PURE__ */ P(() => c(m) ?? n().nodesDraggable), G = /* @__PURE__ */ P(() => c(b) ?? n().elementsSelectable), ne = /* @__PURE__ */ P(() => c($) ?? n().nodesConnectable), re = /* @__PURE__ */ P(() => Xc(r())), ee = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ P(() => c(re) && c(ee)), ce = /* @__PURE__ */ P(() => c(C) ?? n().nodesFocusable);
  function ie(we) {
    return n().parentLookup.has(we);
  }
  let ae = /* @__PURE__ */ P(() => ie(R)), me = /* @__PURE__ */ Oe(null), ge = null, xe = c(H), de = c(z), _e = c(k), Ve = /* @__PURE__ */ P(() => n().nodeTypes[c(H)] ?? Na), Y = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Wr("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Wr("svelteflow__node_id", R);
  let Fe = /* @__PURE__ */ P(() => {
    const we = c(O) === void 0 ? c(K) ?? c(E) : c(K), Xe = c(_) === void 0 ? c(W) ?? c(N) : c(W);
    if (!(we === void 0 && Xe === void 0 && c(D) === void 0))
      return `${c(D)};${we ? `width:${Nn(we)};` : ""}${Xe ? `height:${Nn(Xe)};` : ""}`;
  });
  it(() => {
    (c(H) !== xe || c(z) !== de || c(k) !== _e) && c(me) !== null && requestAnimationFrame(() => {
      c(me) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[R, { id: R, nodeElement: c(me), force: !0 }]]));
    }), xe = c(H), de = c(z), _e = c(k);
  }), it(() => {
    o() && (!c(ve) || c(me) !== ge) && (ge && o().unobserve(ge), c(me) && o().observe(c(me)), ge = c(me));
  }), Ro(() => {
    ge && o()?.unobserve(ge);
  });
  function ze(we) {
    c(G) && (!n().selectNodesOnDrag || !c(q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(R), s()?.({ node: c(J), event: we });
  }
  function Ke(we) {
    if (!(Jc(we) || n().disableKeyboardA11y))
      if (Kc.includes(we.key) && c(G)) {
        const Xe = we.key === "Escape";
        n().handleNodeSelection(R, Xe, c(me));
      } else c(q) && r().selected && Object.prototype.hasOwnProperty.call(Li, we.key) && (we.preventDefault(), n(
        n().ariaLiveMessage = c(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: we.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Li[we.key], we.shiftKey ? 4 : 1));
  }
  const Be = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(me)?.matches(":focus-visible"))
      return;
    const { width: we, height: Xe, viewport: Re } = n();
    $a(/* @__PURE__ */ new Map([[R, r()]]), { x: 0, y: 0, width: we, height: Xe }, [Re.x, Re.y, Re.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: Re.zoom });
  };
  var rt = {
    get store() {
      return n();
    },
    set store(we) {
      n(we), g();
    },
    get node() {
      return r();
    },
    set node(we) {
      r(we), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(we) {
      o(we), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(we) {
      i(we), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(we) {
      s(we), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(we) {
      a(we), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(we) {
      l(we), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(we) {
      u(we), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(we) {
      d(we), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(we) {
      p(we), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(we) {
      f(we), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(we) {
      h(we), g();
    }
  }, $t = Ne(), Nt = se($t);
  {
    var ot = (we) => {
      var Xe = Bm();
      vt(Xe, () => ({
        "data-id": R,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(Z)
        ],
        style: c(Fe),
        onclick: ze,
        onpointerenter: d() ? (Se) => d()({ node: c(J), event: Se }) : void 0,
        onpointerleave: p() ? (Se) => p()({ node: c(J), event: Se }) : void 0,
        onpointermove: f() ? (Se) => f()({ node: c(J), event: Se }) : void 0,
        oncontextmenu: h() ? (Se) => h()({ node: c(J), event: Se }) : void 0,
        onkeydown: c(ce) ? Ke : void 0,
        onfocus: c(ce) ? Be : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Td}-${n().flowId}`,
        ...r().domAttributes,
        [nr]: {
          dragging: c(T),
          selected: c(w),
          draggable: c(q),
          connectable: c(ne),
          selectable: c(G),
          nopan: c(q),
          parent: c(ae)
        },
        [kn]: {
          "z-index": c(L),
          transform: `translate(${c(U) ?? ""}px, ${c(X) ?? ""}px)`,
          visibility: c(re) ? "visible" : "hidden"
        }
      }));
      var Re = B(Xe);
      Xi(Re, () => c(Ve), (Se, st) => {
        st(Se, {
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
            return c(G);
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
            return c(T);
          },
          get draggable() {
            return c(q);
          },
          get dragHandle() {
            return c(F);
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
            return c(U);
          },
          get positionAbsoluteY() {
            return c(X);
          },
          get width() {
            return c(K);
          },
          get height() {
            return c(W);
          }
        });
      }), j(Xe), kt(Xe, (Se, st) => Ed?.(Se, st), () => ({
        nodeId: R,
        isSelectable: c(G),
        disabled: !c(q),
        handleSelector: c(F),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Se, st, Ot, nt) => {
          a()?.({ event: Se, targetNode: Ot, nodes: nt });
        },
        onDragStart: (Se, st, Ot, nt) => {
          l()?.({ event: Se, targetNode: Ot, nodes: nt });
        },
        onDragStop: (Se, st, Ot, nt) => {
          u()?.({ event: Se, targetNode: Ot, nodes: nt });
        },
        store: n()
      })), Wt(Xe, (Se) => Q(me, Se), () => c(me)), M(we, Xe);
    };
    ue(Nt, (we) => {
      c(S) || we(ot);
    });
  }
  return M(e, $t), pe(rt);
}
le(
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
var Wm = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function Md(e, t) {
  fe(t, !0);
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
  }, y = Wm();
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
  }), j(y), M(e, y), pe(h);
}
le(
  Md,
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
var Fm = /* @__PURE__ */ ye('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Dd(e, t) {
  fe(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), p = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), y = /* @__PURE__ */ P(() => n().sourcePosition), w = /* @__PURE__ */ P(() => n().targetPosition), m = /* @__PURE__ */ P(() => Dt(n().animated, !1)), b = /* @__PURE__ */ P(() => Dt(n().selected, !1)), x = /* @__PURE__ */ P(() => n().label), $ = /* @__PURE__ */ P(() => n().labelStyle), C = /* @__PURE__ */ P(() => Dt(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), T = /* @__PURE__ */ P(() => n().interactionWidth), D = /* @__PURE__ */ P(() => Dt(n().type, "default")), Z = /* @__PURE__ */ P(() => n().sourceHandle), H = /* @__PURE__ */ P(() => n().targetHandle), I = /* @__PURE__ */ P(() => n().markerStart), z = /* @__PURE__ */ P(() => n().markerEnd), k = /* @__PURE__ */ P(() => n().selectable), O = /* @__PURE__ */ P(() => n().focusable), _ = /* @__PURE__ */ P(() => Dt(n().deletable, !0)), E = /* @__PURE__ */ P(() => n().hidden), N = /* @__PURE__ */ P(() => n().zIndex), K = /* @__PURE__ */ P(() => n().class), W = /* @__PURE__ */ P(() => n().ariaLabel), F = null;
  const { id: L } = n();
  Wr("svelteflow__edge_id", L);
  let U = /* @__PURE__ */ P(() => c(k) ?? r().elementsSelectable), X = /* @__PURE__ */ P(() => c(O) ?? r().edgesFocusable), J = /* @__PURE__ */ P(() => r().edgeTypes[c(D)] ?? Oa), R = /* @__PURE__ */ P(() => c(I) ? `url('#${Ws(c(I), r().flowId)}')` : void 0), q = /* @__PURE__ */ P(() => c(z) ? `url('#${Ws(c(z), r().flowId)}')` : void 0);
  function G(ae) {
    const me = r().edgeLookup.get(L);
    me && (c(U) && r().handleEdgeSelection(L), o()?.({ event: ae, edge: me }));
  }
  function ne(ae, me) {
    const ge = r().edgeLookup.get(L);
    ge && me({ event: ae, edge: ge });
  }
  function re(ae) {
    if (!r().disableKeyboardA11y && Kc.includes(ae.key) && c(U)) {
      const { unselectNodesAndEdges: me, addSelectedEdges: ge } = r();
      ae.key === "Escape" ? (F?.blur(), me({ edges: [n()] })) : ge([L]);
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
  }, ve = Ne(), ce = se(ve);
  {
    var ie = (ae) => {
      var me = Fm();
      let ge;
      var xe = B(me);
      vt(xe, () => ({
        class: ["svelte-flow__edge", c(K)],
        "data-id": L,
        onclick: G,
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
        "aria-describedby": c(X) ? `${Nd}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(X) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(X) ? re : void 0,
        tabindex: c(X) ? 0 : void 0,
        ...n().domAttributes,
        [nr]: {
          animated: c(m),
          selected: c(b),
          selectable: c(U)
        }
      }));
      var de = B(xe);
      Xi(de, () => c(J), (_e, Ve) => {
        Ve(_e, {
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
            return c(C);
          },
          get style() {
            return c(S);
          },
          get interactionWidth() {
            return c(T);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(_);
          },
          get type() {
            return c(D);
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
            return c(q);
          }
        });
      }), j(xe), Wt(xe, (_e) => F = _e, () => F), j(me), Pe(() => ge = Ct(me, "", ge, { "z-index": c(N) })), M(ae, me);
    };
    ue(ce, (ae) => {
      c(E) || ae(ie);
    });
  }
  return M(e, ve), pe(ee);
}
le(
  Dd,
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
Vp();
var Ym = /* @__PURE__ */ ye("<defs></defs>");
function Ld(e, t) {
  fe(t, !1);
  const n = xn();
  dc();
  var r = Ym();
  Tt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Vd(o, Qe(() => c(i)));
  }), j(r), M(e, r), pe();
}
le(Ld, {}, [], [], !0);
var qm = /* @__PURE__ */ ye('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Xm = /* @__PURE__ */ ye('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Um = /* @__PURE__ */ ye('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Vd(e, t) {
  fe(t, !0);
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
  }, p = Um(), f = B(p);
  {
    var h = (w) => {
      var m = qm();
      let b;
      Pe(() => {
        ke(m, "stroke-width", u()), b = Ct(m, "", b, { stroke: l() });
      }), M(w, m);
    }, y = (w) => {
      var m = Ne(), b = se(m);
      {
        var x = ($) => {
          var C = Xm();
          let S;
          Pe(() => {
            ke(C, "stroke-width", u()), S = Ct(C, "", S, { stroke: l(), fill: l() });
          }), M($, C);
        };
        ue(
          b,
          ($) => {
            r() === Po.ArrowClosed && $(x);
          },
          !0
        );
      }
      M(w, m);
    };
    ue(f, (w) => {
      r() === Po.Arrow ? w(h) : w(y, !1);
    });
  }
  return j(p), Pe(() => {
    ke(p, "id", n()), ke(p, "markerWidth", `${o()}`), ke(p, "markerHeight", `${i()}`), ke(p, "markerUnits", s()), ke(p, "orient", a());
  }), M(e, p), pe(d);
}
le(
  Vd,
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
var Gm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ad(e, t) {
  fe(t, !0);
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
  }, l = Gm(), u = B(l), d = B(u);
  Ld(d, {}), j(u);
  var p = V(u, 2);
  return Tt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    Dd(f, {
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
  }), j(l), M(e, l), pe(a);
}
le(
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
var Jm = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Qm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Ma(e, t) {
  fe(t, !0), Ye(e, Qm);
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
      var f = Jm();
      let h;
      Pe((y) => h = Ct(f, "", h, y), [
        () => ({
          width: typeof o() == "string" ? o() : Nn(o()),
          height: typeof i() == "string" ? i() : Nn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), M(p, f);
    };
    ue(u, (p) => {
      s() && p(d);
    });
  }
  return M(e, l), pe(a);
}
le(Ma, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var ey = /* @__PURE__ */ te("<div><!></div>");
const ty = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function zd(e, t) {
  fe(t, !0), Ye(e, ty);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Oe(void 0);
  it(() => {
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
      var C = B(x);
      Ma(C, { width: "100%", height: "100%", x: 0, y: 0 }), j(x), kt(x, (S, T) => Ed?.(S, T), () => ({
        disabled: !1,
        store: n(),
        onDrag: (S, T, D, Z) => {
          r()?.({ event: S, targetNode: null, nodes: Z });
        },
        onDragStart: (S, T, D, Z) => {
          o()?.({ event: S, targetNode: null, nodes: Z });
        },
        onDragStop: (S, T, D, Z) => {
          i()?.({ event: S, targetNode: null, nodes: Z });
        }
      })), Wt(x, (S) => Q(l, S), () => c(l)), Pe(
        (S) => {
          Bt(x, 1, Gn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), ke(x, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = Ct(x, "", $, S);
        },
        [
          () => ({
            width: Nn(c(u).width),
            height: Nn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), M(b, x);
    };
    ue(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Hn(c(u).x) && Hn(c(u).y) && b(m);
    });
  }
  return M(e, y), pe(h);
}
gr(["contextmenu", "click", "keydown"]);
le(
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
function Cn(e, t) {
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
          for (const C of x)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (S, T) => S | ny(T),
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
  return n && (s = Ms(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ms(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function yt() {
  const e = /* @__PURE__ */ P(xn), t = (i) => {
    const s = Kl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? N0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Qr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = bt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Kl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = bt(() => c(e).edges).map((l) => {
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
        const f = Qr(p), h = To(f, u);
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
      return a && (c(e).nodes = bt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = bt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - p, y: i.y - f };
      return Fo(h, [l, u, d], a !== null, a || [1, 1]);
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
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => xr() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => xr() ? "Meta" : "Control"), { deleteElements: l } = yt();
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
    set multiSelectionKey(m = xr() ? "Meta" : "Control") {
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
    set zoomActivationKey(m = xr() ? "Meta" : "Control") {
      a(m), g();
    }
  };
  return Ci("blur", Ht, h), Ci("contextmenu", Ht, h), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !Jc(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), kt(Ht, (m, b) => Cn?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pe(w);
}
le(
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
var ry = /* @__PURE__ */ ye('<path fill="none" class="svelte-flow__connection-path"></path>'), oy = /* @__PURE__ */ ye('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Id(e, t) {
  fe(t, !0);
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
      case Vn.Bezier: {
        const [h] = ed(f);
        return h;
      }
      case Vn.Straight: {
        const [h] = nd(f);
        return h;
      }
      case Vn.Step:
      case Vn.SmoothStep: {
        const [h] = Sa({
          ...f,
          borderRadius: r() === Vn.Step ? 0 : void 0
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
          var $ = Ne(), C = se($);
          Xi(C, s, (S, T) => {
            T(S, {});
          }), M(x, $);
        }, b = (x) => {
          var $ = ry();
          Pe(() => {
            ke($, "d", c(a)), Ct($, i());
          }), M(x, $);
        };
        ue(w, (x) => {
          s() ? x(m) : x(b, !1);
        });
      }
      j(y), j(h), Pe(
        (x) => {
          ke(h, "width", n().width), ke(h, "height", n().height), Ct(h, o()), Bt(y, 0, x);
        },
        [
          () => Gn([
            "svelte-flow__connection",
            b0(n().connection.isValid)
          ])
        ]
      ), M(f, h);
    };
    ue(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return M(e, u), pe(l);
}
le(
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
  fe(t, !0);
  let n = v(t, "position", 7, "top-right"), r = v(t, "style", 7), o = v(t, "class", 7), i = v(t, "children", 7), s = /* @__PURE__ */ qe(t, [
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
  vt(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return ut(d, () => i() ?? Pt), j(u), M(e, u), pe(l);
}
le(qo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var sy = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rd(e, t) {
  fe(t, !0);
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
          M(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    ue(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return M(e, i), pe(o);
}
le(Rd, { proOptions: {}, position: {} }, [], [], !0);
var ay = /* @__PURE__ */ te("<div><!></div>");
const ly = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function jd(e, t) {
  fe(t, !0), Ye(e, ly);
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
  vt(
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
      [kn]: m
    }),
    [
      () => ({ width: Nn(n()), height: Nn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = B(y);
  return ut(w, () => l() ?? Pt), j(y), Wt(y, (m) => i(m), () => i()), al(y, "clientHeight", a), al(y, "clientWidth", s), M(e, y), pe(h);
}
le(
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
  fe(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), y = v(t, "onmove", 7), w = v(t, "oninit", 7), m = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), x = v(t, "onnodedrag", 7), $ = v(t, "onnodedragstart", 7), C = v(t, "onnodedragstop", 7), S = v(t, "onnodepointerenter", 7), T = v(t, "onnodepointermove", 7), D = v(t, "onnodepointerleave", 7), Z = v(t, "onselectionclick", 7), H = v(t, "onselectioncontextmenu", 7), I = v(t, "onselectionstart", 7), z = v(t, "onselectionend", 7), k = v(t, "onedgeclick", 7), O = v(t, "onedgecontextmenu", 7), _ = v(t, "onedgepointerenter", 7), E = v(t, "onedgepointerleave", 7), N = v(t, "onpaneclick", 7), K = v(t, "onpanecontextmenu", 7), W = v(t, "panOnScrollMode", 23, () => $r.Free), F = v(t, "preventScrolling", 7, !0), L = v(t, "zoomOnScroll", 7, !0), U = v(t, "zoomOnDoubleClick", 7, !0), X = v(t, "zoomOnPinch", 7, !0), J = v(t, "panOnScroll", 7, !1), R = v(t, "panOnScrollSpeed", 7, 0.5), q = v(t, "panOnDrag", 7, !0), G = v(t, "selectionOnDrag", 7, !1), ne = v(t, "connectionLineComponent", 7), re = v(t, "connectionLineStyle", 7), ee = v(t, "connectionLineContainerStyle", 7), ve = v(t, "connectionLineType", 23, () => Vn.Bezier), ce = v(t, "attributionPosition", 7), ie = v(t, "children", 7), ae = v(t, "nodes", 31, () => sn([])), me = v(t, "edges", 31, () => sn([])), ge = v(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ qe(t, [
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
  ]), de = Cd({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return ae();
    },
    set nodes(Y) {
      ae(Y);
    },
    get edges() {
      return me();
    },
    set edges(Y) {
      me(Y);
    },
    get viewport() {
      return ge();
    },
    set viewport(Y) {
      ge(Y);
    }
  });
  const _e = lr(Vi);
  _e && _e.setStore && _e.setStore(de), Wr(Vi, {
    provider: !1,
    getStore() {
      return de;
    }
  }), it(() => {
    const Y = { nodes: de.selectedNodes, edges: de.selectedEdges };
    bt(() => t.onselectionchange)?.(Y);
    for (const Fe of de.selectionChangeHandlers.values())
      Fe(Y);
  }), Ro(() => {
    de.reset();
  });
  var Ve = {
    get width() {
      return n();
    },
    set width(Y) {
      n(Y), g();
    },
    get height() {
      return r();
    },
    set height(Y) {
      r(Y), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Y) {
      o(Y), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Y) {
      i(Y), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Y) {
      s(Y), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Y) {
      a(Y), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Y) {
      l(Y), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(Y) {
      u(Y), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Y = 1) {
      d(Y), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(Y = 1) {
      p(Y), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Y) {
      f(Y), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(Y) {
      h(Y), g();
    },
    get onmove() {
      return y();
    },
    set onmove(Y) {
      y(Y), g();
    },
    get oninit() {
      return w();
    },
    set oninit(Y) {
      w(Y), g();
    },
    get onnodeclick() {
      return m();
    },
    set onnodeclick(Y) {
      m(Y), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Y) {
      b(Y), g();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(Y) {
      x(Y), g();
    },
    get onnodedragstart() {
      return $();
    },
    set onnodedragstart(Y) {
      $(Y), g();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(Y) {
      C(Y), g();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(Y) {
      S(Y), g();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(Y) {
      T(Y), g();
    },
    get onnodepointerleave() {
      return D();
    },
    set onnodepointerleave(Y) {
      D(Y), g();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(Y) {
      Z(Y), g();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(Y) {
      H(Y), g();
    },
    get onselectionstart() {
      return I();
    },
    set onselectionstart(Y) {
      I(Y), g();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(Y) {
      z(Y), g();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(Y) {
      k(Y), g();
    },
    get onedgecontextmenu() {
      return O();
    },
    set onedgecontextmenu(Y) {
      O(Y), g();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(Y) {
      _(Y), g();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(Y) {
      E(Y), g();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(Y) {
      N(Y), g();
    },
    get onpanecontextmenu() {
      return K();
    },
    set onpanecontextmenu(Y) {
      K(Y), g();
    },
    get panOnScrollMode() {
      return W();
    },
    set panOnScrollMode(Y = $r.Free) {
      W(Y), g();
    },
    get preventScrolling() {
      return F();
    },
    set preventScrolling(Y = !0) {
      F(Y), g();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(Y = !0) {
      L(Y), g();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(Y = !0) {
      U(Y), g();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(Y = !0) {
      X(Y), g();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(Y = !1) {
      J(Y), g();
    },
    get panOnScrollSpeed() {
      return R();
    },
    set panOnScrollSpeed(Y = 0.5) {
      R(Y), g();
    },
    get panOnDrag() {
      return q();
    },
    set panOnDrag(Y = !0) {
      q(Y), g();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(Y = !1) {
      G(Y), g();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(Y) {
      ne(Y), g();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(Y) {
      re(Y), g();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(Y) {
      ee(Y), g();
    },
    get connectionLineType() {
      return ve();
    },
    set connectionLineType(Y = Vn.Bezier) {
      ve(Y), g();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(Y) {
      ce(Y), g();
    },
    get children() {
      return ie();
    },
    set children(Y) {
      ie(Y), g();
    },
    get nodes() {
      return ae();
    },
    set nodes(Y = []) {
      ae(Y), g();
    },
    get edges() {
      return me();
    },
    set edges(Y = []) {
      me(Y), g();
    },
    get viewport() {
      return ge();
    },
    set viewport(Y = void 0) {
      ge(Y), g();
    }
  };
  return jd(e, {
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
    set domNode(Y) {
      de.domNode = Y;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(Y) {
      de.width = Y;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(Y) {
      de.height = Y;
    },
    children: (Y, Fe) => {
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
          return de;
        },
        set store(ot) {
          de = ot;
        }
      });
      var Be = V(Ke, 2);
      $d(Be, {
        get panOnScrollMode() {
          return W();
        },
        get preventScrolling() {
          return F();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return U();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return J();
        },
        get panOnScrollSpeed() {
          return R();
        },
        get panOnDrag() {
          return q();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return G();
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
          return de;
        },
        set store(ot) {
          de = ot;
        },
        children: (ot, we) => {
          kd(ot, {
            get onpaneclick() {
              return N();
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
              return q();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return G();
            },
            get store() {
              return de;
            },
            set store(Xe) {
              de = Xe;
            },
            children: (Xe, Re) => {
              var Se = cy(), st = se(Se);
              Sd(st, {
                get store() {
                  return de;
                },
                set store(nt) {
                  de = nt;
                },
                children: (nt, tr) => {
                  var Qt = uy(), At = V(se(Qt), 2);
                  Ad(At, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return O();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return de;
                    },
                    set store(cn) {
                      de = cn;
                    }
                  });
                  var ht = V(At, 4);
                  Id(ht, {
                    get type() {
                      return ve();
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
                    set store(cn) {
                      de = cn;
                    }
                  });
                  var at = V(ht, 2);
                  Md(at, {
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
                      return T();
                    },
                    get onnodepointerleave() {
                      return D();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(cn) {
                      de = cn;
                    }
                  });
                  var Ft = V(at, 2);
                  zd(Ft, {
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
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(cn) {
                      de = cn;
                    }
                  }), be(2), M(nt, Qt);
                },
                $$slots: { default: !0 }
              });
              var Ot = V(st, 2);
              {
                let nt = /* @__PURE__ */ P(() => !!(de.selectionRect && de.selectionRectMode === "user")), tr = /* @__PURE__ */ P(() => de.selectionRect?.width), Qt = /* @__PURE__ */ P(() => de.selectionRect?.height), At = /* @__PURE__ */ P(() => de.selectionRect?.x), ht = /* @__PURE__ */ P(() => de.selectionRect?.y);
                Ma(Ot, {
                  get isVisible() {
                    return c(nt);
                  },
                  get width() {
                    return c(tr);
                  },
                  get height() {
                    return c(Qt);
                  },
                  get x() {
                    return c(At);
                  },
                  get y() {
                    return c(ht);
                  }
                });
              }
              M(Xe, Se);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var rt = V(Be, 2);
      Rd(rt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var $t = V(rt, 2);
      Pd($t, {
        get store() {
          return de;
        }
      });
      var Nt = V($t, 2);
      ut(Nt, () => ie() ?? Pt), M(Y, ze);
    },
    $$slots: { default: !0 }
  }), pe(Ve);
}
le(
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
  fe(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Oe(Cd({ props: {}, nodes: [], edges: [] }));
  Wr(Vi, {
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
  return ut(s, () => n() ?? Pt), M(e, i), pe(o);
}
le(Kd, { children: {} }, [], [], !0);
var fy = /* @__PURE__ */ te("<button><!></button>");
function go(e, t) {
  fe(t, !0);
  let n = v(t, "class", 7), r = v(t, "bgColor", 7), o = v(t, "bgColorHover", 7), i = v(t, "color", 7), s = v(t, "colorHover", 7), a = v(t, "borderColor", 7), l = v(t, "onclick", 7), u = v(t, "children", 7), d = /* @__PURE__ */ qe(t, [
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
  vt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [kn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = B(f);
  return ut(h, () => u() ?? Pt), j(f), M(e, f), pe(p);
}
le(
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
var py = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Bd(e) {
  var t = py();
  M(e, t);
}
le(Bd, {}, [], [], !0);
var hy = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Wd(e) {
  var t = hy();
  M(e, t);
}
le(Wd, {}, [], [], !0);
var gy = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Fd(e) {
  var t = gy();
  M(e, t);
}
le(Fd, {}, [], [], !0);
var vy = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Yd(e) {
  var t = vy();
  M(e, t);
}
le(Yd, {}, [], [], !0);
var my = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function qd(e) {
  var t = my();
  M(e, t);
}
le(qd, {}, [], [], !0);
var yy = /* @__PURE__ */ te("<!> <!>", 1), wy = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function Xd(e, t) {
  fe(t, !0);
  let n = v(t, "position", 7, "bottom-left"), r = v(t, "orientation", 7, "vertical"), o = v(t, "showZoom", 7, !0), i = v(t, "showFitView", 7, !0), s = v(t, "showLock", 7, !0), a = v(t, "style", 7), l = v(t, "class", 7), u = v(t, "buttonBgColor", 7), d = v(t, "buttonBgColorHover", 7), p = v(t, "buttonColor", 7), f = v(t, "buttonColorHover", 7), h = v(t, "buttonBorderColor", 7), y = v(t, "fitViewOptions", 7), w = v(t, "children", 7), m = v(t, "before", 7), b = v(t, "after", 7), x = /* @__PURE__ */ qe(t, [
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
  ]), $ = /* @__PURE__ */ P(xn);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: h()
  };
  let S = /* @__PURE__ */ P(() => c($).nodesDraggable || c($).nodesConnectable || c($).elementsSelectable), T = /* @__PURE__ */ P(() => c($).viewport.zoom <= c($).minZoom), D = /* @__PURE__ */ P(() => c($).viewport.zoom >= c($).maxZoom), Z = /* @__PURE__ */ P(() => c($).ariaLabelConfig), H = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
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
  var _ = {
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
    qo(e, Qe(
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
        children: (N, K) => {
          var W = wy(), F = se(W);
          {
            var L = (ce) => {
              var ie = Ne(), ae = se(ie);
              ut(ae, m), M(ce, ie);
            };
            ue(F, (ce) => {
              m() && ce(L);
            });
          }
          var U = V(F, 2);
          {
            var X = (ce) => {
              var ie = yy(), ae = se(ie);
              go(ae, Qe(
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
                    return c(D);
                  }
                },
                () => C,
                {
                  children: (ge, xe) => {
                    Bd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var me = V(ae, 2);
              go(me, Qe(
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
                    return c(T);
                  }
                },
                () => C,
                {
                  children: (ge, xe) => {
                    Wd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), M(ce, ie);
            };
            ue(U, (ce) => {
              o() && ce(X);
            });
          }
          var J = V(U, 2);
          {
            var R = (ce) => {
              go(ce, Qe(
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
                () => C,
                {
                  children: (ie, ae) => {
                    Fd(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(J, (ce) => {
              i() && ce(R);
            });
          }
          var q = V(J, 2);
          {
            var G = (ce) => {
              go(ce, Qe(
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
                () => C,
                {
                  children: (ie, ae) => {
                    var me = Ne(), ge = se(me);
                    {
                      var xe = (_e) => {
                        qd(_e);
                      }, de = (_e) => {
                        Yd(_e);
                      };
                      ue(ge, (_e) => {
                        c(S) ? _e(xe) : _e(de, !1);
                      });
                    }
                    M(ie, me);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(q, (ce) => {
              s() && ce(G);
            });
          }
          var ne = V(q, 2);
          {
            var re = (ce) => {
              var ie = Ne(), ae = se(ie);
              ut(ae, w), M(ce, ie);
            };
            ue(ne, (ce) => {
              w() && ce(re);
            });
          }
          var ee = V(ne, 2);
          {
            var ve = (ce) => {
              var ie = Ne(), ae = se(ie);
              ut(ae, b), M(ce, ie);
            };
            ue(ee, (ce) => {
              b() && ce(ve);
            });
          }
          M(N, W);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return pe(_);
}
le(
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
var In;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(In || (In = {}));
var by = /* @__PURE__ */ ye("<circle></circle>");
function Ud(e, t) {
  fe(t, !0);
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
  return Pe(() => {
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Bt(i, 0, Gn(["svelte-flow__background-pattern", "dots", r()]));
  }), M(e, i), pe(o);
}
le(Ud, { radius: {}, class: {} }, [], [], !0);
var xy = /* @__PURE__ */ ye("<path></path>");
function Gd(e, t) {
  fe(t, !0);
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
  return Pe(() => {
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Bt(a, 0, Gn(["svelte-flow__background-pattern", o(), i()]));
  }), M(e, a), pe(s);
}
le(Gd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const _y = {
  [In.Dots]: 1,
  [In.Lines]: 1,
  [In.Cross]: 6
};
var Cy = /* @__PURE__ */ ye('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Jd(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => In.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ P(xn), f = /* @__PURE__ */ P(() => r() === In.Dots), h = /* @__PURE__ */ P(() => r() === In.Cross), y = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ P(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), m = /* @__PURE__ */ P(() => [
    c(y)[0] * c(p).viewport.zoom || 1,
    c(y)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ P(() => (i() ?? _y[r()]) * c(p).viewport.zoom), x = /* @__PURE__ */ P(() => c(h) ? [c(b), c(b)] : c(m)), $ = /* @__PURE__ */ P(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), g();
    },
    get variant() {
      return r();
    },
    set variant(k = In.Dots) {
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
  let T;
  var D = B(S), Z = B(D);
  {
    var H = (k) => {
      {
        let O = /* @__PURE__ */ P(() => c(b) / 2);
        Ud(k, {
          get radius() {
            return c(O);
          },
          get class() {
            return u();
          }
        });
      }
    }, I = (k) => {
      Gd(k, {
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
  j(D);
  var z = V(D);
  return j(S), Pe(() => {
    Bt(S, 0, Gn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), T = Ct(S, "", T, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), ke(D, "id", c(w)), ke(D, "x", c(p).viewport.x % c(m)[0]), ke(D, "y", c(p).viewport.y % c(m)[1]), ke(D, "width", c(m)[0]), ke(D, "height", c(m)[1]), ke(D, "patternTransform", `translate(-${c($)[0]},-${c($)[1]})`), ke(z, "fill", `url(#${c(w)})`);
  }), M(e, S), pe(C);
}
le(
  Jd,
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
var $y = /* @__PURE__ */ ye("<rect></rect>");
function Qd(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "x", 7), o = v(t, "y", 7), i = v(t, "width", 7), s = v(t, "height", 7), a = v(t, "borderRadius", 7, 5), l = v(t, "color", 7), u = v(t, "shapeRendering", 7), d = v(t, "strokeColor", 7), p = v(t, "strokeWidth", 7, 2), f = v(t, "selected", 7), h = v(t, "class", 7), y = v(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), g();
    },
    get x() {
      return r();
    },
    set x(C) {
      r(C), g();
    },
    get y() {
      return o();
    },
    set y(C) {
      o(C), g();
    },
    get width() {
      return i();
    },
    set width(C) {
      i(C), g();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), g();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(C = 5) {
      a(C), g();
    },
    get color() {
      return l();
    },
    set color(C) {
      l(C), g();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(C) {
      u(C), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(C) {
      d(C), g();
    },
    get strokeWidth() {
      return p();
    },
    set strokeWidth(C = 2) {
      p(C), g();
    },
    get selected() {
      return f();
    },
    set selected(C) {
      f(C), g();
    },
    get class() {
      return h();
    },
    set class(C) {
      h(C), g();
    },
    get nodeComponent() {
      return y();
    },
    set nodeComponent(C) {
      y(C), g();
    }
  }, m = Ne(), b = se(m);
  {
    var x = (C) => {
      const S = /* @__PURE__ */ P(y);
      var T = Ne(), D = se(T);
      Xi(D, () => c(S), (Z, H) => {
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
      }), M(C, T);
    }, $ = (C) => {
      var S = $y();
      let T, D;
      Pe(() => {
        T = Bt(S, 0, Gn(["svelte-flow__minimap-node", h()]), null, T, { selected: f() }), ke(S, "x", r()), ke(S, "y", o()), ke(S, "rx", a()), ke(S, "ry", a()), ke(S, "width", i()), ke(S, "height", s()), ke(S, "shape-rendering", u()), D = Ct(S, "", D, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), M(C, S);
    };
    ue(b, (C) => {
      y() ? C(x) : C($, !1);
    });
  }
  return M(e, m), pe(w);
}
le(
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
var Sy = /* @__PURE__ */ ye("<title> </title>"), Ey = /* @__PURE__ */ ye('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Py = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ef(e, t) {
  fe(t, !0);
  let n = v(t, "position", 7, "bottom-right"), r = v(t, "ariaLabel", 7), o = v(t, "nodeStrokeColor", 7, "transparent"), i = v(t, "nodeColor", 7), s = v(t, "nodeClass", 7, ""), a = v(t, "nodeBorderRadius", 7, 5), l = v(t, "nodeStrokeWidth", 7, 2), u = v(t, "nodeComponent", 7), d = v(t, "bgColor", 7), p = v(t, "maskColor", 7), f = v(t, "maskStrokeColor", 7), h = v(t, "maskStrokeWidth", 7), y = v(t, "width", 7, 200), w = v(t, "height", 7, 150), m = v(t, "pannable", 7, !0), b = v(t, "zoomable", 7, !0), x = v(t, "inversePan", 7), $ = v(t, "zoomStep", 7), C = v(t, "class", 7), S = /* @__PURE__ */ qe(t, [
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
  ]), T = /* @__PURE__ */ P(xn), D = /* @__PURE__ */ P(() => c(T).ariaLabelConfig);
  const Z = i() === void 0 ? void 0 : _s(i()), H = _s(o()), I = _s(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(T).flowId}`), O = /* @__PURE__ */ P(() => ({
    x: -c(T).viewport.x / c(T).viewport.zoom,
    y: -c(T).viewport.y / c(T).viewport.zoom,
    width: c(T).width / c(T).viewport.zoom,
    height: c(T).height / c(T).viewport.zoom
  })), _ = /* @__PURE__ */ P(() => qc(Bo(c(T).nodeLookup, { filter: (ee) => !ee.hidden }), c(O))), E = /* @__PURE__ */ P(() => c(_).width / y()), N = /* @__PURE__ */ P(() => c(_).height / w()), K = /* @__PURE__ */ P(() => Math.max(c(E), c(N))), W = /* @__PURE__ */ P(() => c(K) * y()), F = /* @__PURE__ */ P(() => c(K) * w()), L = /* @__PURE__ */ P(() => 5 * c(K)), U = /* @__PURE__ */ P(() => c(_).x - (c(W) - c(_).width) / 2 - c(L)), X = /* @__PURE__ */ P(() => c(_).y - (c(F) - c(_).height) / 2 - c(L)), J = /* @__PURE__ */ P(() => c(W) + c(L) * 2), R = /* @__PURE__ */ P(() => c(F) + c(L) * 2);
  const q = () => c(K);
  var G = {
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
      return C();
    },
    set class(ee) {
      C(ee), g();
    }
  }, ne = Py(), re = se(ne);
  {
    let ee = /* @__PURE__ */ P(() => ["svelte-flow__minimap", C()]);
    xh(re, () => ({ "--xy-minimap-background-color-props": d() })), qo(re.lastChild, Qe(
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
        children: (ve, ce) => {
          var ie = Ne(), ae = se(ie);
          {
            var me = (ge) => {
              var xe = Ey();
              let de;
              var _e = B(xe);
              {
                var Ve = (ze) => {
                  var Ke = Sy(), Be = B(Ke, !0);
                  j(Ke), Pe(() => {
                    ke(Ke, "id", c(k)), Je(Be, r() ?? c(D)["minimap.ariaLabel"]);
                  }), M(ze, Ke);
                };
                ue(_e, (ze) => {
                  (r() ?? c(D)["minimap.ariaLabel"]) && ze(Ve);
                });
              }
              var Y = V(_e);
              Tt(Y, 17, () => c(T).nodes, (ze) => ze.id, (ze, Ke) => {
                const Be = /* @__PURE__ */ P(() => c(T).nodeLookup.get(c(Ke).id));
                var rt = Ne(), $t = se(rt);
                {
                  var Nt = (ot) => {
                    const we = /* @__PURE__ */ P(() => vr(c(Be)));
                    {
                      let Xe = /* @__PURE__ */ P(() => Z?.(c(Be))), Re = /* @__PURE__ */ P(() => H(c(Be))), Se = /* @__PURE__ */ P(() => I(c(Be)));
                      Qd(ot, Qe(
                        {
                          get id() {
                            return c(Be).id;
                          },
                          get x() {
                            return c(Be).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Be).internals.positionAbsolute.y;
                          }
                        },
                        () => c(we),
                        {
                          get selected() {
                            return c(Be).selected;
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
                            return c(Re);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return c(Se);
                          }
                        }
                      ));
                    }
                  };
                  ue($t, (ot) => {
                    c(Be) && Xc(c(Be)) && !c(Be).hidden && ot(Nt);
                  });
                }
                M(ze, rt);
              });
              var Fe = V(Y);
              j(xe), kt(xe, (ze, Ke) => ky?.(ze, Ke), () => ({
                store: c(T),
                panZoom: c(T).panZoom,
                getViewScale: q,
                translateExtent: c(T).translateExtent,
                width: c(T).width,
                height: c(T).height,
                inversePan: x(),
                zoomStep: $(),
                pannable: m(),
                zoomable: b()
              })), Pe(() => {
                ke(xe, "width", y()), ke(xe, "height", w()), ke(xe, "viewBox", `${c(U) ?? ""} ${c(X) ?? ""} ${c(J) ?? ""} ${c(R) ?? ""}`), ke(xe, "aria-labelledby", c(k)), de = Ct(xe, "", de, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(K) : void 0
                }), ke(Fe, "d", `M${c(U) - c(L)},${c(X) - c(L)}h${c(J) + c(L) * 2}v${c(R) + c(L) * 2}h${-c(J) - c(L) * 2}z
      M${c(O).x ?? ""},${c(O).y ?? ""}h${c(O).width ?? ""}v${c(O).height ?? ""}h${-c(O).width}z`);
              }), M(ge, xe);
            };
            ue(ae, (ge) => {
              c(T).panZoom && ge(me);
            });
          }
          M(ve, ie);
        },
        $$slots: { default: !0 }
      }
    )), j(re);
  }
  return M(e, ne), pe(G);
}
le(
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
  fe(t, !0);
  let n = v(t, "nodeId", 7), r = v(t, "position", 23, () => Ce.Top), o = v(t, "align", 7, "center"), i = v(t, "offset", 7, 10), s = v(t, "isVisible", 7), a = v(t, "children", 7), l = /* @__PURE__ */ qe(t, [
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
  const u = xn(), { getNodesBounds: d } = yt(), p = lr("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (S, T) => {
      const D = u.nodeLookup.get(T);
      return D && S.push(D), S;
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
    var C = (S) => {
      var T = Ty();
      vt(
        T,
        (Z, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": Z,
          ...l,
          [kn]: H
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
      var D = B(T);
      ut(D, () => a() ?? Pt), j(T), kt(T, (Z, H) => gd?.(Z, H), () => "root"), M(S, T);
    };
    ue($, (S) => {
      u.domNode && c(m) && c(f) && S(C);
    });
  }
  return M(e, x), pe(b);
}
le(
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
  const t = /* @__PURE__ */ P(xn), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
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
], Da = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], My = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Dy = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Ly {
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
const Vy = () => {
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
}, je = Vy();
var Ay = /* @__PURE__ */ te("<button><!></button>");
function Ae(e, t) {
  fe(t, !0);
  const n = v(t, "children", 7), r = v(t, "primary", 7), o = /* @__PURE__ */ qe(t, [
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
  vt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return ut(a, () => n() ?? Pt), j(s), M(e, s), pe(i);
}
le(Ae, { children: {}, primary: {} }, [], [], !0);
var zy = /* @__PURE__ */ te("<input/>");
function nf(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zy();
  vt(
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
  ), M(e, r), pe();
}
le(nf, {}, [], [], !0);
var Hy = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Iy = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function rf(e, t) {
  fe(t, !0), Ye(e, Iy);
  const n = v(t, "placeholder", 7), r = v(t, "label", 7), o = v(t, "value", 7), i = v(t, "buttonText", 7, "选择..."), s = v(t, "onChosen", 7), a = /* @__PURE__ */ qe(t, [
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
  vt(
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
  An(d);
  var p = V(d, 2);
  ft(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = V(p, 2);
  return Ae(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, y) => {
      be();
      var w = Te();
      Pe(() => Je(w, i())), M(h, w);
    },
    $$slots: { default: !0 }
  }), j(u), Pe(() => ci(d, o())), M(e, u), pe(l);
}
le(
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
function ft(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Ry();
  vt(
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
  ), M(e, r), pe();
}
le(ft, {}, [], [], !0);
var jy = /* @__PURE__ */ te("<textarea></textarea>");
function Ge(e, t) {
  fe(t, !0);
  const n = v(t, "value", 7), r = v(t, "height", 7), o = v(t, "autoHeight", 7, !0), i = v(t, "maxHeight", 7), s = v(t, "onHeightChange", 7), a = /* @__PURE__ */ qe(t, [
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
  it(() => {
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
  Jp(f);
  var h = (w) => {
    d(), t.oninput?.(w);
  }, y = (w) => {
    d(), t.onchange?.(w);
  };
  return vt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Wt(f, (w) => l = w, () => l), M(e, f), pe(p);
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
var Zy = /* @__PURE__ */ te('<div role="button"><!></div>'), Ky = /* @__PURE__ */ te("<div></div>");
function of(e, t) {
  const n = cl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = cl(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
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
  return vt(u, () => ({
    ...r,
    class: `tf-tabs ${da(r), bt(() => r.class) ?? ""}`
  })), Tt(u, 5, o, Yr, (d, p, f) => {
    var h = Zy();
    ke(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var y = B(h);
    {
      var w = (b) => {
        var x = Te();
        Pe(() => Je(x, (c(p), bt(() => c(p).label)))), M(b, x);
      }, m = (b) => {
        var x = Ne(), $ = se(x);
        ut($, () => (c(p), bt(() => c(p).label) ?? Pt)), M(b, x);
      };
      ue(y, (b) => {
        c(p), bt(() => typeof c(p).label == "string") ? b(w) : b(m, !1);
      });
    }
    j(h), Pe(() => Bt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), M(d, h);
  }), j(u), M(e, u), pe(l);
}
gr(["click", "keydown"]);
le(of, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var By = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Wy = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Fy = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Yy = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), qy = /* @__PURE__ */ te("<div></div>");
const Xy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function sf(e, t) {
  fe(t, !0), Ye(e, Xy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => sn([]));
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
  return Tt(a, 21, n, Yr, (l, u, d) => {
    var p = Yy(), f = B(p);
    ke(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), i(c(u)));
    };
    var h = B(f);
    {
      var y = (S) => {
        var T = By(), D = B(T);
        rr(D, {
          get target() {
            return c(u).icon;
          }
        }), j(T), M(S, T);
      };
      ue(h, (S) => {
        c(u).icon && S(y);
      });
    }
    var w = V(h, 2);
    rr(w, {
      get target() {
        return c(u).title;
      }
    });
    var m = V(w, 2);
    j(f);
    var b = V(f, 2);
    {
      var x = (S) => {
        var T = Wy(), D = B(T);
        rr(D, {
          get target() {
            return c(u).description;
          }
        }), j(T), M(S, T);
      };
      ue(b, (S) => {
        c(u).description && S(x);
      });
    }
    var $ = V(b, 2);
    {
      var C = (S) => {
        var T = Fy(), D = B(T);
        rr(D, {
          get target() {
            return c(u).content;
          }
        }), j(T), M(S, T);
      };
      ue($, (S) => {
        o().includes(c(u).key) && S(C);
      });
    }
    j(p), Pe((S) => Bt(m, 1, `tf-collapse-item-title-arrow ${S ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), M(l, p);
  }), j(a), Pe(() => {
    Ct(a, t.style), Bt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), M(e, a), pe(s);
}
gr(["click", "keydown"]);
le(sf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function rr(e, t) {
  fe(t, !0);
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
      ut(d, () => n() ?? Pt), M(l, u);
    }, a = (l) => {
      var u = Ne(), d = se(u);
      ha(d, n), M(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return M(e, o), pe(r);
}
le(rr, { target: {} }, [], [], !0);
var Uy = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gy = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), Jy = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Qy = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), e2 = /* @__PURE__ */ te("<!> <!>", 1), t2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), n2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), r2 = /* @__PURE__ */ te("<div><!></div>");
function xt(e, t) {
  fe(t, !0);
  const n = (x, $ = Pt) => {
    var C = Ne(), S = se(C);
    Tt(S, 19, $, (T, D) => `${D}_${T.value}`, (T, D) => {
      var Z = Jy(), H = se(Z);
      H.__click = () => y(c(D));
      var I = B(H), z = B(I);
      {
        var k = (N) => {
          var K = Uy();
          M(N, K);
        };
        ue(z, (N) => {
          c(D).children && c(D).children.length > 0 && N(k);
        });
      }
      j(I);
      var O = V(I, 2);
      rr(O, {
        get target() {
          return c(D).label;
        }
      }), j(H);
      var _ = V(H, 2);
      {
        var E = (N) => {
          var K = Gy(), W = B(K);
          n(W, () => c(D).children), j(K), M(N, K);
        };
        ue(_, (N) => {
          c(D).children && c(D).children.length > 0 && (a() || u().includes(c(D).value)) && N(E);
        });
      }
      M(T, Z);
    }), M(x, C);
  };
  let r = v(t, "items", 7), o = v(t, "onSelect", 7), i = v(t, "value", 23, () => []), s = v(t, "defaultValue", 23, () => []), a = v(t, "expandAll", 7, !0), l = v(t, "multiple", 7, !1), u = v(t, "expandValue", 23, () => []), d = v(t, "placeholder", 7), p = /* @__PURE__ */ qe(t, [
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
    const x = [], $ = (C) => {
      for (let S of C)
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
  vt(m, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = B(m);
  return Wt(
    mr(b, {
      floating: (x) => {
        var $ = Qy(), C = B($);
        n(C, r), j($), M(x, $);
      },
      children: (x, $) => {
        var C = n2();
        vt(C, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var S = B(C);
        Tt(
          S,
          23,
          () => c(f),
          (T, D) => `${D}_${T.value}`,
          (T, D, Z) => {
            var H = Ne(), I = se(H);
            {
              var z = (O) => {
                var _ = Ne(), E = se(_);
                {
                  var N = (K) => {
                    rr(K, {
                      get target() {
                        return c(D).label;
                      }
                    });
                  };
                  ue(E, (K) => {
                    c(Z) === 0 && K(N);
                  });
                }
                M(O, _);
              }, k = (O) => {
                var _ = e2(), E = se(_);
                rr(E, {
                  get target() {
                    return c(D).label;
                  }
                });
                var N = V(E, 2);
                {
                  var K = (W) => {
                    var F = Te(",");
                    M(W, F);
                  };
                  ue(N, (W) => {
                    c(Z) < c(f).length - 1 && W(K);
                  });
                }
                M(O, _);
              };
              ue(I, (O) => {
                l() ? O(k, !1) : O(z);
              });
            }
            M(T, H);
          },
          (T) => {
            var D = t2(), Z = B(D, !0);
            j(D), Pe(() => Je(Z, d())), M(T, D);
          }
        ), j(S), be(2), j(C), M(x, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => h = x,
    () => h
  ), j(m), M(e, m), pe(w);
}
gr(["click"]);
le(
  xt,
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
const Oo = Math.min, Zr = Math.max, Ai = Math.round, Tn = (e) => ({
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
function Fs(e, t, n) {
  return Zr(e, Oo(t, n));
}
function Xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nr(e) {
  return e.split("-")[0];
}
function Uo(e) {
  return e.split("-")[1];
}
function af(e) {
  return e === "x" ? "y" : "x";
}
function La(e) {
  return e === "y" ? "height" : "width";
}
const s2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function or(e) {
  return s2.has(Nr(e)) ? "y" : "x";
}
function Va(e) {
  return af(or(e));
}
function a2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Uo(e), o = Va(e), i = La(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = zi(s)), [s, zi(s)];
}
function l2(e) {
  const t = zi(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => i2[t]);
}
const Ul = ["left", "right"], Gl = ["right", "left"], u2 = ["top", "bottom"], c2 = ["bottom", "top"];
function d2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Gl : Ul : t ? Ul : Gl;
    case "left":
    case "right":
      return t ? u2 : c2;
    default:
      return [];
  }
}
function f2(e, t, n, r) {
  const o = Uo(e);
  let i = d2(Nr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ys)))), i;
}
function zi(e) {
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
function Jl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = or(t), s = Va(t), a = La(s), l = Nr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Uo(t)) {
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
  } = Jl(u, r, l), f = r, h = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: m,
      fn: b
    } = a[w], {
      x,
      y: $,
      data: C,
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
        ...C
      }
    }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = Jl(u, f, l)), w = -1);
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
  } = Xo(t, e), y = lf(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], m = Hi(await i.getClippingRect({
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
  }, C = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (m.top - C.top + y.top) / $.y,
    bottom: (C.bottom - m.bottom + y.bottom) / $.y,
    left: (m.left - C.left + y.left) / $.x,
    right: (C.right - m.right + y.right) / $.x
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
    }, h = Va(o), y = La(h), w = await s.getDimensions(u), m = h === "y", b = m ? "top" : "left", x = m ? "bottom" : "right", $ = m ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[h] - f[h] - i.floating[y], S = f[h] - i.reference[h], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let D = T ? T[$] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(T))) && (D = a.floating[$] || i.floating[y]);
    const Z = C / 2 - S / 2, H = D / 2 - w[y] / 2 - 1, I = Oo(p[b], H), z = Oo(p[x], H), k = I, O = D - w[y] - z, _ = D / 2 - w[y] / 2 + Z, E = Fs(k, _, O), N = !l.arrow && Uo(o) != null && _ !== E && i.reference[y] / 2 - (_ < k ? I : z) - w[y] / 2 < 0, K = N ? _ < k ? _ - k : _ - O : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: E,
        centerOffset: _ - E - K,
        ...N && {
          alignmentOffset: K
        }
      },
      reset: N
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
      const b = Nr(o), x = or(a), $ = Nr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = f || ($ || !w ? [zi(a)] : l2(a)), T = y !== "none";
      !f && T && S.push(...f2(a, w, y, C));
      const D = [a, ...S], Z = await uf(t, m), H = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(Z[b]), p) {
        const _ = a2(o, s, C);
        H.push(Z[_[0]], Z[_[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: H
      }], !H.every((_) => _ <= 0)) {
        var z, k;
        const _ = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, E = D[_];
        if (E && (!(p === "alignment" && x !== or(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((K) => or(K.placement) === x ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: I
            },
            reset: {
              placement: E
            }
          };
        let N = (k = I.filter((K) => K.overflows[0] <= 0).sort((K, W) => K.overflows[1] - W.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var O;
              const K = (O = I.filter((W) => {
                if (T) {
                  const F = or(W.placement);
                  return F === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, L) => F + L, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : O[0];
              K && (N = K);
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
}, m2 = /* @__PURE__ */ new Set(["left", "top"]);
async function y2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Nr(n), a = Uo(n), l = or(n) === "y", u = m2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Xo(t, e);
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
      }, d = await uf(t, l), p = or(Nr(o)), f = af(p);
      let h = u[f], y = u[p];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + d[m], $ = h - d[b];
        h = Fs(x, h, $);
      }
      if (s) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[m], $ = y - d[b];
        y = Fs(x, y, $);
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
function is() {
  return typeof window < "u";
}
function io(e) {
  return cf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Gt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qn(e) {
  var t;
  return (t = (cf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cf(e) {
  return is() ? e instanceof Node || e instanceof Gt(e).Node : !1;
}
function mn(e) {
  return is() ? e instanceof Element || e instanceof Gt(e).Element : !1;
}
function On(e) {
  return is() ? e instanceof HTMLElement || e instanceof Gt(e).HTMLElement : !1;
}
function Ql(e) {
  return !is() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Gt(e).ShadowRoot;
}
const x2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !x2.has(o);
}
const _2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function C2(e) {
  return _2.has(io(e));
}
const $2 = [":popover-open", ":modal"];
function ss(e) {
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
  const t = za(), n = mn(e) ? yn(e) : e;
  return k2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || S2.some((r) => (n.willChange || "").includes(r)) || E2.some((r) => (n.contain || "").includes(r));
}
function P2(e) {
  let t = dr(e);
  for (; On(t) && !to(t); ) {
    if (Aa(t))
      return t;
    if (ss(t))
      return null;
    t = dr(t);
  }
  return null;
}
function za() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const T2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function to(e) {
  return T2.has(io(e));
}
function yn(e) {
  return Gt(e).getComputedStyle(e);
}
function as(e) {
  return mn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dr(e) {
  if (io(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ql(e) && e.host || // Fallback.
    Qn(e)
  );
  return Ql(t) ? t.host : t;
}
function df(e) {
  const t = dr(e);
  return to(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : On(t) && Go(t) ? t : df(t);
}
function ff(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = df(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Gt(o);
  return i ? (qs(s), t.concat(s, s.visualViewport || [], Go(o) ? o : [], [])) : t.concat(o, ff(o, []));
}
function qs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pf(e) {
  const t = yn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = On(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ai(n) !== i || Ai(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function hf(e) {
  return mn(e) ? e : e.contextElement;
}
function Kr(e) {
  const t = hf(e);
  if (!On(t))
    return Tn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = pf(t);
  let s = (i ? Ai(n.width) : n.width) / r, a = (i ? Ai(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const N2 = /* @__PURE__ */ Tn(0);
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
function Mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = hf(e);
  let s = Tn(1);
  t && (r ? mn(r) && (s = Kr(r)) : s = Kr(e));
  const a = O2(i, n, r) ? gf(i) : Tn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Gt(i), h = r && mn(r) ? Gt(r) : r;
    let y = f, w = qs(y);
    for (; w && r && h !== y; ) {
      const m = Kr(w), b = w.getBoundingClientRect(), x = yn(w), $ = b.left + (w.clientLeft + parseFloat(x.paddingLeft)) * m.x, C = b.top + (w.clientTop + parseFloat(x.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, p *= m.y, l += $, u += C, y = Gt(w), w = qs(y);
    }
  }
  return Hi({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function ls(e, t) {
  const n = as(e).scrollLeft;
  return t ? t.left + n : Mo(Qn(e)).left + n;
}
function vf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ls(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function M2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Qn(r), a = t ? ss(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Tn(1);
  const d = Tn(0), p = On(r);
  if ((p || !p && !i) && ((io(r) !== "body" || Go(s)) && (l = as(r)), On(r))) {
    const h = Mo(r);
    u = Kr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? vf(s, l) : Tn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function D2(e) {
  return Array.from(e.getClientRects());
}
function L2(e) {
  const t = Qn(e), n = as(e), r = e.ownerDocument.body, o = Zr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Zr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ls(e);
  const a = -n.scrollTop;
  return yn(r).direction === "rtl" && (s += Zr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const eu = 25;
function V2(e, t) {
  const n = Gt(e), r = Qn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = za();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ls(r);
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
  const n = Mo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = On(e) ? Kr(e) : Tn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = V2(e, n);
  else if (t === "document")
    r = L2(Qn(e));
  else if (mn(t))
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
  return Hi(r);
}
function mf(e, t) {
  const n = dr(e);
  return n === t || !mn(n) || to(n) ? !1 : yn(n).position === "fixed" || mf(n, t);
}
function H2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ff(e, []).filter((a) => mn(a) && io(a) !== "body"), o = null;
  const i = yn(e).position === "fixed";
  let s = i ? dr(e) : e;
  for (; mn(s) && !to(s); ) {
    const a = yn(s), l = Aa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && A2.has(o.position) || Go(s) && !l && mf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = dr(s);
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
  const i = [...n === "clippingAncestors" ? ss(t) ? [] : H2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = tu(t, u, o);
    return l.top = Zr(d.top, l.top), l.right = Oo(d.right, l.right), l.bottom = Oo(d.bottom, l.bottom), l.left = Zr(d.left, l.left), l;
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
  const r = On(t), o = Qn(t), i = n === "fixed", s = Mo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Tn(0);
  function u() {
    l.x = ls(o);
  }
  if (r || !r && !i)
    if ((io(t) !== "body" || Go(o)) && (a = as(t)), r) {
      const h = Mo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? vf(o, a) : Tn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Cs(e) {
  return yn(e).position === "static";
}
function nu(e, t) {
  if (!On(e) || yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qn(e) === n && (n = n.ownerDocument.body), n;
}
function yf(e, t) {
  const n = Gt(e);
  if (ss(e))
    return n;
  if (!On(e)) {
    let o = dr(e);
    for (; o && !to(o); ) {
      if (mn(o) && !Cs(o))
        return o;
      o = dr(o);
    }
    return n;
  }
  let r = nu(e, t);
  for (; r && C2(r) && Cs(r); )
    r = nu(r, t);
  return r && to(r) && Cs(r) && !Aa(r) ? n : r || P2(e) || n;
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
  return yn(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: M2,
  getDocumentElement: Qn,
  getClippingRect: I2,
  getOffsetParent: yf,
  getElementRects: Z2,
  getClientRects: D2,
  getDimensions: R2,
  getScale: Kr,
  isElement: mn,
  isRTL: K2
}, W2 = w2, F2 = b2, Y2 = v2, q2 = g2, X2 = (e, t, n) => {
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
}, U2 = ({
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
        W2(o),
        // 手动偏移配置
        Y2(i),
        //自动翻转
        F2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [q2({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: $, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: S, y: T } = C.arrow, D = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: S != null ? `${S}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [D]: "2px"
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
var G2 = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  fe(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  Un(() => (a = U2({
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
  }, d = G2(), p = B(d), f = B(p);
  ut(f, n), j(p), Wt(p, (w) => i = w, () => i);
  var h = V(p, 2), y = B(h);
  return ut(y, r), j(h), Wt(h, (w) => s = w, () => s), j(d), M(e, d), pe(u);
}
le(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ie(e, t) {
  fe(t, !0);
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
    vt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = Ne(), f = se(p);
    ut(f, () => n() ?? Pt), M(d, p);
  }), M(e, a), pe(s);
}
le(Ie, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var J2 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const Q2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Jo(e, t) {
  fe(t, !0), Ye(e, Q2);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ae(e, Qe(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = J2();
      M(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
le(Jo, {}, [], [], !0);
const ew = () => ({ deleteNode: (e) => {
  je.removeNode(e), je.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Fn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, tw = () => ({ copyNode: (e) => {
  const t = je.getNode(e);
  if (t) {
    const n = Fn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    je.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ct = () => lr("svelteflow__node_id"), fr = () => lr("tinyflow_options");
var nw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), rw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ow = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), iw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), sw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), aw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), lw = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), uw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), cw = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), dw = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const fw = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function un(e, t) {
  fe(t, !0), Ye(e, fw);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), y = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: m, getNode: b } = yt(), x = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: $ } = ew(), { copyNode: C } = tw(), S = fr(), T = () => {
    S.onNodeExecute?.(b(r()));
  };
  let D = ct();
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
        children: (U, X) => {
          var J = cw(), R = B(J);
          {
            var q = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ae, me) => {
                  var ge = nw();
                  M(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(R, (ie) => {
              u() && ie(q);
            });
          }
          var G = V(R, 2);
          {
            var ne = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ae, me) => {
                  var ge = rw();
                  M(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(G, (ie) => {
              l() && ie(ne);
            });
          }
          var re = V(G, 2);
          {
            var ee = (ie) => {
              Ae(ie, {
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (ae, me) => {
                  var ge = ow();
                  M(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(re, (ie) => {
              a() && ie(ee);
            });
          }
          var ve = V(re, 2);
          {
            var ce = (ie) => {
              mr(ie, {
                placement: "bottom",
                floating: (ae) => {
                  var me = lw(), ge = B(me), xe = V(B(ge));
                  ft(xe, {
                    style: "width: 100%;",
                    onchange: (Re) => {
                      const Se = Re.target.value;
                      m(D, { title: Se });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(ge);
                  var de = V(ge, 2), _e = V(B(de));
                  Ge(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Re) => {
                      const Se = Re.target.value;
                      m(D, { description: Se });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(de);
                  var Ve = V(de, 2);
                  {
                    var Y = (Re) => {
                      var Se = iw(), st = V(B(Se));
                      Ge(st, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ot) => {
                          const nt = Ot.target.value;
                          m(D, { condition: nt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Se), M(Re, Se);
                    };
                    ue(Ve, (Re) => {
                      p() && Re(Y);
                    });
                  }
                  var Fe = V(Ve, 2), ze = V(B(Fe), 2);
                  An(ze), ze.__change = (Re) => {
                    const Se = Re.target.checked;
                    m(D, { async: Se });
                  }, j(Fe);
                  var Ke = V(Fe, 2), Be = V(B(Ke), 2);
                  An(Be), Be.__change = (Re) => {
                    const Se = Re.target.checked;
                    m(D, { loopEnable: Se });
                  }, j(Ke);
                  var rt = V(Ke, 2);
                  {
                    var $t = (Re) => {
                      var Se = sw(), st = se(Se), Ot = V(B(st));
                      {
                        let ht = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Ge(Ot, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (at) => {
                            const Ft = at.target.value;
                            m(D, { loopIntervalMs: Ft });
                          },
                          get value() {
                            return c(ht);
                          }
                        });
                      }
                      j(st);
                      var nt = V(st, 2), tr = V(B(nt));
                      {
                        let ht = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Ge(tr, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (at) => {
                            const Ft = at.target.value;
                            m(D, { maxLoopCount: Ft });
                          },
                          get value() {
                            return c(ht);
                          }
                        });
                      }
                      j(nt);
                      var Qt = V(nt, 2), At = V(B(Qt));
                      Ge(At, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ht) => {
                          const at = ht.target.value;
                          m(D, { loopBreakCondition: at });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), j(Qt), M(Re, Se);
                    };
                    ue(rt, (Re) => {
                      n().loopEnable && Re($t);
                    });
                  }
                  var Nt = V(rt, 2), ot = V(B(Nt), 2);
                  An(ot), ot.__change = (Re) => {
                    const Se = Re.target.checked;
                    m(D, { retryEnable: Se });
                  }, j(Nt);
                  var we = V(Nt, 2);
                  {
                    var Xe = (Re) => {
                      var Se = aw(), st = se(Se), Ot = V(B(st));
                      {
                        let ht = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
                        Ge(Ot, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (at) => {
                            const Ft = at.target.value;
                            m(D, { retryIntervalMs: Ft });
                          },
                          get value() {
                            return c(ht);
                          }
                        });
                      }
                      j(st);
                      var nt = V(st, 2), tr = V(B(nt));
                      {
                        let ht = /* @__PURE__ */ P(() => n().maxRetryCount || "3");
                        Ge(tr, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (at) => {
                            const Ft = at.target.value;
                            m(D, { maxRetryCount: Ft });
                          },
                          get value() {
                            return c(ht);
                          }
                        });
                      }
                      j(nt);
                      var Qt = V(nt, 2), At = V(B(Qt), 2);
                      An(At), At.__change = (ht) => {
                        const at = ht.target.checked;
                        m(D, { resetRetryCountAfterNormal: at });
                      }, j(Qt), Pe(() => ti(At, !!n().resetRetryCountAfterNormal)), M(Re, Se);
                    };
                    ue(we, (Re) => {
                      n().retryEnable && Re(Xe);
                    });
                  }
                  j(me), Pe(() => {
                    ti(ze, !!n().async), ti(Be, !!n().loopEnable), ti(ot, !!n().retryEnable);
                  }), M(ae, me);
                },
                children: (ae, me) => {
                  Ae(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ge, xe) => {
                      var de = uw();
                      M(ge, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(ve, (ie) => {
              d() && ie(ce);
            });
          }
          j(J), M(U, J);
        },
        $$slots: { default: !0 }
      });
    };
    ue(I, (L) => {
      (a() || l() || u()) && L(z);
    });
  }
  var k = V(I, 2), O = V(B(k), 2), _ = B(O);
  sf(_, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return w;
    },
    onChange: (L, U) => {
      m(r(), { expand: U?.includes("key") }), y()?.(U?.includes("key") ? "key" : "");
    }
  }), j(O), j(k);
  var E = V(k, 2);
  {
    var N = (L) => {
      cr(L, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(E, (L) => {
      h() && L(N);
    });
  }
  var K = V(E, 2);
  {
    var W = (L) => {
      cr(L, {
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
  var F = V(K, 2);
  return ut(F, () => i() ?? Pt), M(e, H), pe(Z);
}
gr(["change"]);
le(
  un,
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
var pw = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), hw = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), gw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), vw = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const mw = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wf(e, t) {
  fe(t, !0), Ye(e, mw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = ct(), i = Jn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = yt(), l = (Z, H) => {
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
  ft($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), j(x);
  var C = V(x, 2), S = B(C);
  nf(S, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), j(C);
  var T = V(C, 2), D = B(T);
  return Wt(
    mr(D, {
      placement: "bottom",
      floating: (Z) => {
        var H = hw(), I = B(H), z = V(B(I));
        {
          let R = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          xt(z, {
            get items() {
              return Da;
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
        var k = V(I, 2), O = V(B(k));
        {
          let R = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          xt(O, {
            get items() {
              return My;
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
        var _ = V(k, 2);
        {
          var E = (R) => {
            var q = pw(), G = V(B(q));
            {
              let ne = /* @__PURE__ */ P(() => c(s).enums?.join(`
`));
              Ge(G, {
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
            j(q), M(R, q);
          };
          ue(_, (R) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && R(E);
          });
        }
        var N = V(_, 2), K = V(B(N));
        Ge(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            u("formLabel", R);
          },
          get value() {
            return c(s).formLabel;
          }
        }), j(N);
        var W = V(N, 2), F = V(B(W));
        Ge(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formDescription", R);
          },
          get value() {
            return c(s).formDescription;
          }
        }), j(W);
        var L = V(W, 2), U = V(B(L));
        Ge(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formPlaceholder", R);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), j(L);
        var X = V(L, 2), J = B(X);
        Ae(J, {
          onclick: w,
          children: (R, q) => {
            be();
            var G = Te("删除");
            M(R, G);
          },
          $$slots: { default: !0 }
        }), j(X), j(H), M(Z, H);
      },
      children: (Z, H) => {
        Ae(Z, {
          class: "input-btn-more",
          children: (I, z) => {
            var k = gw();
            M(I, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (Z) => y = Z,
    () => y
  ), j(T), M(e, b), pe(m);
}
le(wf, { parameter: {}, index: {} }, [], [], !0);
var yw = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), ww = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), bw = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const xw = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function bf(e, t) {
  fe(t, !0), Ye(e, xw);
  let n = ct(), r = Jn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = bw(), s = B(i);
  {
    var a = (u) => {
      var d = yw();
      be(4), M(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
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
      M(u, d);
    }
  ), j(i), M(e, i), pe();
}
le(bf, {}, [], [], !0);
const Do = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Fn()), Do(t.children);
}), e), _n = () => {
  const { updateNodeData: e } = yt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Do(s?.children)) : Do(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Fn()
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
var _w = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Cw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function xf(e, t) {
  fe(t, !0), Ye(e, kw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return un(e, Qe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = _w();
      M(a, l);
    },
    children: (a, l) => {
      var u = $w(), d = se(u), p = B(d);
      Ie(p, {
        level: 3,
        children: (y, w) => {
          be();
          var m = Te("输入参数");
          M(y, m);
        },
        $$slots: { default: !0 }
      });
      var f = V(p, 2);
      Ae(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var m = Cw();
          M(y, m);
        },
        $$slots: { default: !0 }
      }), j(d);
      var h = V(d, 2);
      bf(h, {}), M(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe(s);
}
le(xf, { data: {} }, [], [], !0);
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
  const t = ct(), n = Jn(t), r = /* @__PURE__ */ P(xn), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
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
  fe(t, !0), Ye(e, Tw), Un(() => {
    c(u).refType || y({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = ct(), l = Jn(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = yt(), p = (O, _) => {
    d(a, (E) => {
      let N = E.data?.[o()];
      return N[r()] = { ...N[r()], [O]: _ }, { [o()]: N };
    });
  }, f = (O, _) => {
    const E = _.target.value;
    p(O, E);
  }, h = (O) => {
    const _ = O.value;
    p("ref", _);
  }, y = (O) => {
    const _ = O.value;
    p("refType", _);
  }, w = (O) => {
    const _ = O.value;
    p("contentType", _);
  };
  let m;
  const b = () => {
    d(a, (O) => {
      let _ = O.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
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
  }, C = Pw(), S = se(C), T = B(S);
  {
    let O = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    ft(T, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(O);
      },
      oninput: (_) => f("name", _)
    });
  }
  j(S);
  var D = V(S, 2), Z = B(D);
  {
    var H = (O) => {
      ft(O, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => f("value", _)
      });
    }, I = (O) => {
      var _ = Ne(), E = se(_);
      {
        var N = (K) => {
          {
            let W = /* @__PURE__ */ P(() => [c(u).ref]);
            xt(K, {
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
            c(u).refType !== "input" && K(N);
          },
          !0
        );
      }
      M(O, _);
    };
    ue(Z, (O) => {
      c(u).refType === "fixed" ? O(H) : O(I, !1);
    });
  }
  j(D);
  var z = V(D, 2), k = B(z);
  return Wt(
    mr(k, {
      placement: "bottom",
      floating: (O) => {
        var _ = Ew(), E = B(_), N = V(B(E));
        {
          let q = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          xt(N, {
            get items() {
              return Oy;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(q);
            },
            onSelect: y
          });
        }
        j(E);
        var K = V(E, 2);
        {
          var W = (q) => {
            var G = Sw(), ne = V(B(G));
            {
              let re = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              xt(ne, {
                get items() {
                  return Da;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: w
              });
            }
            j(G), M(q, G);
          };
          ue(K, (q) => {
            s() && q(W);
          });
        }
        var F = V(K, 2), L = V(B(F));
        Ge(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (q) => {
            f("defaultValue", q);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), j(F);
        var U = V(F, 2), X = V(B(U));
        Ge(X, {
          rows: 3,
          style: "width: 100%;",
          onchange: (q) => {
            f("description", q);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), j(U);
        var J = V(U, 2), R = B(J);
        Ae(R, {
          onclick: b,
          children: (q, G) => {
            be();
            var ne = Te("删除");
            M(q, ne);
          },
          $$slots: { default: !0 }
        }), j(J), j(_), M(O, _);
      },
      children: (O, _) => {
        Jo(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => m = O,
    () => m
  ), j(z), M(e, C), pe($);
}
le(
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
var Nw = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Ow = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Mw = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Dw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Vt(e, t) {
  fe(t, !0), Ye(e, Dw);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = ct(), a = Jn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = Mw(), p = B(d);
  {
    var f = (y) => {
      var w = Nw();
      be(4), M(y, w);
    };
    ue(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = V(p, 2);
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
      j(w), Pe(() => Je(m, n())), M(y, w);
    }
  ), j(d), M(e, d), pe(u);
}
le(
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
var Lw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Vw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Sf(e, t) {
  fe(t, !0), Ye(e, zw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return un(e, Qe(
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
        var l = Lw();
        M(a, l);
      },
      children: (a, l) => {
        var u = Aw(), d = se(u), p = B(d);
        Ie(p, {
          level: 3,
          children: (y, w) => {
            be();
            var m = Te("输出参数");
            M(y, m);
          },
          $$slots: { default: !0 }
        });
        var f = V(p, 2);
        Ae(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var m = Vw();
            M(y, m);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = V(d, 2);
        Vt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(s);
}
le(Sf, { data: {} }, [], [], !0);
const $s = (e) => JSON.parse(JSON.stringify(e));
var Hw = /* @__PURE__ */ ye('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Iw = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Rw = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), jw = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Zw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ef(e, t) {
  fe(t, !0), Ye(e, Zw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = ct(), a = Jn(s), l = /* @__PURE__ */ P(() => {
    let k = a?.current?.data?.[o()], O;
    if (k && r().length > 0) {
      let _ = k;
      for (let E = 0; E < r().length; E++) {
        const N = r()[E];
        E == r().length - 1 ? O = _[N] : _ = _[N].children;
      }
    }
    return { ...n(), ...O };
  });
  const { updateNodeData: u } = yt(), d = (k, O) => {
    u(s, (_) => {
      const E = _.data?.[o()];
      if (E && r().length > 0) {
        let N = E;
        for (let K = 0; K < r().length; K++) {
          const W = r()[K];
          K == r().length - 1 ? N[W] = { ...N[W], [k]: O } : N = N[W].children;
        }
      }
      return { [o()]: [...$s(E)] };
    });
  }, p = (k, O) => {
    const _ = O.target.value;
    d(k, _);
  }, f = (k) => {
    const O = k.value;
    d("dataType", O);
  };
  let h;
  const y = () => {
    u(s, (k) => {
      let O = k.data?.[o()];
      if (O && r().length > 0) {
        let _ = O;
        for (let E = 0; E < r().length; E++) {
          const N = r()[E];
          E == r().length - 1 ? _.splice(N, 1) : _ = _[N].children;
        }
      }
      return { [o()]: [...$s(O)] };
    }), h?.hide();
  }, w = () => {
    u(s, (k) => {
      let O = k.data?.[o()];
      if (O && r().length > 0) {
        let _ = O;
        for (let E = 0; E < r().length; E++) {
          const N = r()[E];
          E == r().length - 1 ? _[N].children ? _[N].children.push({ id: Fn(), name: "newParam", dataType: "String" }) : _[N].children = [{ id: Fn(), name: "newParam", dataType: "String" }] : _ = _[N].children;
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
    var C = (k) => {
      var O = Ne(), _ = se(O);
      Tt(_, 17, r, Yr, (E, N) => {
        be();
        var K = Te(" ");
        M(E, K);
      }), M(k, O);
    };
    ue($, (k) => {
      r().length > 1 && k(C);
    });
  }
  var S = V($, 2);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    ft(S, {
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
  var T = V(x, 2), D = B(T);
  {
    let k = /* @__PURE__ */ P(() => c(l).dataTypeItems || Ny), O = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), _ = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    xt(D, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(O);
      },
      get disabled() {
        return c(_);
      },
      onSelect: f
    });
  }
  var Z = V(D, 2);
  {
    var H = (k) => {
      Ae(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (O, _) => {
          var E = Hw();
          M(O, E);
        },
        $$slots: { default: !0 }
      });
    };
    ue(Z, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(H);
    });
  }
  j(T);
  var I = V(T, 2), z = B(I);
  return Wt(
    mr(z, {
      placement: "bottom",
      floating: (k) => {
        var O = Rw(), _ = B(O), E = V(B(_));
        {
          let L = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          Ge(E, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (U) => {
              p("defaultValue", U);
            }
          });
        }
        j(_);
        var N = V(_, 2), K = V(B(N));
        {
          let L = /* @__PURE__ */ P(() => c(l).description || "");
          Ge(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (U) => {
              p("description", U);
            }
          });
        }
        j(N);
        var W = V(N, 2);
        {
          var F = (L) => {
            var U = Iw(), X = B(U);
            Ae(X, {
              onclick: y,
              children: (J, R) => {
                be();
                var q = Te("删除");
                M(J, q);
              },
              $$slots: { default: !0 }
            }), j(U), M(L, U);
          };
          ue(W, (L) => {
            c(l).deleteDisabled !== !0 && L(F);
          });
        }
        j(O), M(k, O);
      },
      children: (k, O) => {
        Jo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), j(I), M(e, b), pe(m);
}
le(
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
var Kw = /* @__PURE__ */ te("<!> <!>", 1), Bw = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Ww = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Fw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Yw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function er(e, t) {
  fe(t, !0), Ye(e, Yw);
  const n = (y, w = Pt, m = Pt) => {
    var b = Ne(), x = se(b);
    Tt(
      x,
      19,
      w,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, C, S) => {
        var T = Kw(), D = se(T);
        {
          let I = /* @__PURE__ */ P(() => [...m(), c(S)]);
          Ef(D, {
            get parameter() {
              return c(C);
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
        var Z = V(D, 2);
        {
          var H = (I) => {
            {
              let z = /* @__PURE__ */ P(() => [...m(), c(S)]);
              n(I, () => c(C).children, () => c(z));
            }
          };
          ue(Z, (I) => {
            c(C).children && I(H);
          });
        }
        M($, T);
      },
      ($) => {
        var C = Ne(), S = se(C);
        {
          var T = (D) => {
            var Z = Bw(), H = B(Z, !0);
            j(Z), Pe(() => Je(H, r())), M(D, Z);
          };
          ue(S, (D) => {
            m().length === 0 && D(T);
          });
        }
        M($, C);
      }
    ), M(y, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = ct(), a = Jn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = Fw(), p = B(d);
  {
    var f = (y) => {
      var w = Ww();
      be(4), M(y, w);
    };
    ue(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = V(p, 2);
  return n(h, () => c(l) || [], () => []), j(d), M(e, d), pe(u);
}
le(er, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var qw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Xw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), Jw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const Qw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Pf(e, t) {
  fe(t, !0), Ye(e, Qw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), s = fr();
  let a = /* @__PURE__ */ Oe(sn([]));
  Un(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = yt(), u = (p) => {
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
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = qw();
        M(p, f);
      },
      children: (p, f) => {
        var h = Jw(), y = se(h), w = B(y);
        Ie(w, {
          level: 3,
          children: (W, F) => {
            be();
            var L = Te("输入参数");
            M(W, L);
          },
          $$slots: { default: !0 }
        });
        var m = V(w, 2);
        Ae(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (W, F) => {
            var L = Xw();
            M(W, L);
          },
          $$slots: { default: !0 }
        }), j(y);
        var b = V(y, 2);
        Vt(b, {});
        var x = V(b, 2), $ = B(x);
        Ie($, {
          level: 3,
          children: (W, F) => {
            be();
            var L = Te("图片识别");
            M(W, L);
          },
          $$slots: { default: !0 }
        });
        var C = V($, 2);
        Ae(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (W, F) => {
            var L = Uw();
            M(W, L);
          },
          $$slots: { default: !0 }
        }), j(x);
        var S = V(x, 2);
        Vt(S, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var T = V(S, 2);
        Ie(T, {
          level: 3,
          mt: "10px",
          children: (W, F) => {
            be();
            var L = Te("模型设置");
            M(W, L);
          },
          $$slots: { default: !0 }
        });
        var D = V(T, 4), Z = B(D);
        {
          let W = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          xt(Z, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (F) => {
              const L = F.value;
              l(o, () => ({ llmId: L }));
            },
            get value() {
              return c(W);
            }
          });
        }
        var H = V(Z, 2);
        mr(H, {
          placement: "bottom",
          floating: (W) => {
            var F = Gw(), L = V(B(F), 2), U = B(L), X = B(U), J = B(X);
            j(X);
            var R = V(X, 2);
            An(R), R.__input = (ge) => l(o, { temperature: parseFloat(ge.target.value) }), j(U), j(L);
            var q = V(L, 2), G = B(q), ne = B(G), re = B(ne);
            j(ne);
            var ee = V(ne, 2);
            An(ee), ee.__input = (ge) => l(o, { topP: parseFloat(ge.target.value) }), j(G), j(q);
            var ve = V(q, 2), ce = B(ve), ie = B(ce), ae = B(ie);
            j(ie);
            var me = V(ie, 2);
            An(me), me.__input = (ge) => l(o, { topK: parseInt(ge.target.value) }), j(ce), j(ve), j(F), Pe(() => {
              Je(J, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), ci(R, n().temperature ?? 0.7), Je(re, `Top P: ${n().topP ?? 0.9 ?? ""}`), ci(ee, n().topP ?? 0.9), Je(ae, `Top K: ${n().topK ?? 50 ?? ""}`), ci(me, n().topK ?? 50);
            }), M(W, F);
          },
          children: (W, F) => {
            Jo(W, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), j(D);
        var I = V(D, 4), z = B(I);
        {
          let W = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Ge(z, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(W);
            },
            oninput: (F) => {
              l(o, { systemPrompt: F.target.value });
            }
          });
        }
        j(I);
        var k = V(I, 4), O = B(k);
        {
          let W = /* @__PURE__ */ P(() => n().userPrompt || "");
          Ge(O, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(W);
            },
            oninput: (F) => {
              l(o, { userPrompt: F.target.value });
            }
          });
        }
        j(k);
        var _ = V(k, 2), E = B(_);
        Ie(E, {
          level: 3,
          children: (W, F) => {
            be();
            var L = Te("输出参数");
            M(W, L);
          },
          $$slots: { default: !0 }
        });
        var N = V(E, 2);
        {
          let W = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          xt(N, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (F) => {
              u(F.value);
            },
            get value() {
              return c(W);
            }
          });
        }
        j(_);
        var K = V(_, 2);
        er(K, {}), M(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(d);
}
gr(["input"]);
le(Pf, { data: {} }, [], [], !0);
var eb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), tb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const ob = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Tf(e, t) {
  fe(t, !0), Ye(e, ob);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Un(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ct(), { addParameter: i } = _n(), { updateNodeData: s } = yt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = eb();
        M(u, d);
      },
      children: (u, d) => {
        var p = rb(), f = se(p), h = B(f);
        Ie(h, {
          level: 3,
          children: (H, I) => {
            be();
            var z = Te("输入参数");
            M(H, z);
          },
          $$slots: { default: !0 }
        });
        var y = V(h, 2);
        Ae(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, I) => {
            var z = tb();
            M(H, z);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = V(f, 2);
        Vt(w, {});
        var m = V(w, 2);
        Ie(m, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            be();
            var z = Te("代码");
            M(H, z);
          },
          $$slots: { default: !0 }
        });
        var b = V(m, 4), x = B(b);
        {
          let H = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          xt(x, {
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
        var $ = V(b, 4), C = B($);
        {
          let H = /* @__PURE__ */ P(() => n().code || "");
          Ge(C, {
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
        var S = V($, 2), T = B(S);
        Ie(T, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            be();
            var z = Te("输出参数");
            M(H, z);
          },
          $$slots: { default: !0 }
        });
        var D = V(T, 2);
        Ae(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, I) => {
            var z = nb();
            M(H, z);
          },
          $$slots: { default: !0 }
        }), j(S);
        var Z = V(S, 2);
        er(Z, {}), M(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(Tf, { data: {} }, [], [], !0);
var ib = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), sb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ab = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const lb = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nf(e, t) {
  fe(t, !0), Ye(e, lb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), { updateNodeData: s } = yt();
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ib();
        M(l, u);
      },
      children: (l, u) => {
        var d = ab(), p = se(d), f = B(p);
        Ie(f, {
          level: 3,
          children: (S, T) => {
            be();
            var D = Te("输入参数");
            M(S, D);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Ae(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var D = sb();
            M(S, D);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = V(p, 2);
        Vt(y, {});
        var w = V(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (S, T) => {
            be();
            var D = Te("模板内容");
            M(S, D);
          },
          $$slots: { default: !0 }
        });
        var m = V(w, 2), b = B(m);
        {
          let S = /* @__PURE__ */ P(() => n().template || "");
          Ge(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ template: T.target.value }));
            },
            get value() {
              return c(S);
            }
          });
        }
        j(m);
        var x = V(m, 2), $ = B(x);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            be();
            var D = Te("输出参数");
            M(S, D);
          },
          $$slots: { default: !0 }
        }), j(x);
        var C = V(x, 2);
        er(C, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Nf, { data: {} }, [], [], !0);
var ub = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), cb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), db = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), pb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), gb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), mb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), yb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), wb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const xb = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Of(e, t) {
  fe(t, !0), Ye(e, xb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Un(() => {
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
  ], i = ct(), { addParameter: s } = _n(), { updateNodeData: a } = yt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = ub();
        M(u, d);
      },
      children: (u, d) => {
        var p = bb(), f = se(p), h = B(f);
        Ie(h, {
          level: 3,
          children: (R, q) => {
            be();
            var G = Te("输入参数");
            M(R, G);
          },
          $$slots: { default: !0 }
        });
        var y = V(h, 2);
        Ae(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, q) => {
            var G = cb();
            M(R, G);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = V(f, 2);
        Vt(w, {});
        var m = V(w, 2);
        Ie(m, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            be();
            var G = Te("URL 地址");
            M(R, G);
          },
          $$slots: { default: !0 }
        });
        var b = V(m, 2), x = B(b), $ = B(x);
        {
          let R = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          xt($, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (q) => {
              const G = q.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return c(R);
            }
          });
        }
        j(x);
        var C = V(x, 2), S = B(C);
        {
          let R = /* @__PURE__ */ P(() => n().url || "");
          ft(S, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (q) => {
              a(i, () => ({ url: q.target.value }));
            },
            get value() {
              return c(R);
            }
          });
        }
        j(C), j(b);
        var T = V(b, 2), D = B(T);
        Ie(D, {
          level: 3,
          children: (R, q) => {
            be();
            var G = Te("Http 头信息");
            M(R, G);
          },
          $$slots: { default: !0 }
        });
        var Z = V(D, 2);
        Ae(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, q) => {
            var G = db();
            M(R, G);
          },
          $$slots: { default: !0 }
        }), j(T);
        var H = V(T, 2);
        Vt(H, { dataKeyName: "headers" });
        var I = V(H, 2);
        {
          var z = (R) => {
            var q = fb(), G = se(q);
            Ie(G, {
              level: 3,
              mt: "10px",
              children: (_e, Ve) => {
                be();
                var Y = Te("Body");
                M(_e, Y);
              },
              $$slots: { default: !0 }
            });
            var ne = V(G, 2), re = B(ne), ee = B(re);
            {
              let _e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              ft(ee, {
                type: "radio",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), j(re);
            var ve = V(re, 2), ce = B(ve);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              ft(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), j(ve);
            var ie = V(ve, 2), ae = B(ie);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              ft(ae, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), j(ie);
            var me = V(ie, 2), ge = B(me);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "json");
              ft(ge, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), j(me);
            var xe = V(me, 2), de = B(xe);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "raw");
              ft(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), j(xe), j(ne), M(R, q);
          };
          ue(I, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(z);
          });
        }
        var k = V(I, 2);
        {
          var O = (R) => {
            var q = hb(), G = se(q), ne = B(G);
            Ie(ne, {
              level: 3,
              children: (ve, ce) => {
                be();
                var ie = Te("参数");
                M(ve, ie);
              },
              $$slots: { default: !0 }
            });
            var re = V(ne, 2);
            Ae(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ve, ce) => {
                var ie = pb();
                M(ve, ie);
              },
              $$slots: { default: !0 }
            }), j(G);
            var ee = V(G, 2);
            Vt(ee, { dataKeyName: "formData" }), M(R, q);
          };
          ue(k, (R) => {
            n().bodyType === "form-data" && R(O);
          });
        }
        var _ = V(k, 2);
        {
          var E = (R) => {
            var q = vb(), G = se(q), ne = B(G);
            Ie(ne, {
              level: 3,
              children: (ve, ce) => {
                be();
                var ie = Te("Body 参数");
                M(ve, ie);
              },
              $$slots: { default: !0 }
            });
            var re = V(ne, 2);
            Ae(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ve, ce) => {
                var ie = gb();
                M(ve, ie);
              },
              $$slots: { default: !0 }
            }), j(G);
            var ee = V(G, 2);
            Vt(ee, { dataKeyName: "formUrlencoded" }), M(R, q);
          };
          ue(_, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(E);
          });
        }
        var N = V(_, 2);
        {
          var K = (R) => {
            var q = mb(), G = B(q);
            Ge(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), j(q), M(R, q);
          };
          ue(N, (R) => {
            n().bodyType === "json" && R(K);
          });
        }
        var W = V(N, 2);
        {
          var F = (R) => {
            var q = yb(), G = B(q);
            Ge(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), j(q), M(R, q);
          };
          ue(W, (R) => {
            n().bodyType === "raw" && R(F);
          });
        }
        var L = V(W, 2), U = B(L);
        Ie(U, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            be();
            var G = Te("输出参数");
            M(R, G);
          },
          $$slots: { default: !0 }
        });
        var X = V(U, 2);
        Ae(X, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, q) => {
            var G = wb();
            M(R, G);
          },
          $$slots: { default: !0 }
        }), j(L);
        var J = V(L, 2);
        er(J, {}), M(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(Of, { data: {} }, [], [], !0);
var _b = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Cb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $b = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const kb = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mf(e, t) {
  fe(t, !0), Ye(e, kb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), s = fr();
  let a = /* @__PURE__ */ Oe(sn([]));
  Un(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = yt();
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = _b();
        M(d, p);
      },
      children: (d, p) => {
        var f = $b(), h = se(f), y = B(h);
        Ie(y, {
          level: 3,
          children: (z, k) => {
            be();
            var O = Te("输入参数");
            M(z, O);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var O = Cb();
            M(z, O);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = V(h, 2);
        Vt(m, {});
        var b = V(m, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            be();
            var O = Te("知识库设置");
            M(z, O);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = B(x);
        {
          let z = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          xt($, {
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
        var C = V(x, 4), S = B(C);
        ft(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(C);
        var T = V(C, 4), D = B(T);
        {
          let z = /* @__PURE__ */ P(() => n().limit || "");
          ft(D, {
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
        j(T);
        var Z = V(T, 2), H = B(Z);
        Ie(H, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            be();
            var O = Te("输出参数");
            M(z, O);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = V(Z, 2);
        er(I, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Mf, { data: {} }, [], [], !0);
var Sb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Eb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pb = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Tb = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Df(e, t) {
  fe(t, !0), Ye(e, Tb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), s = fr();
  let a = /* @__PURE__ */ Oe(sn([]));
  Un(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = yt();
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Sb();
        M(d, p);
      },
      children: (d, p) => {
        var f = Pb(), h = se(f), y = B(h);
        Ie(y, {
          level: 3,
          children: (z, k) => {
            be();
            var O = Te("输入参数");
            M(z, O);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var O = Eb();
            M(z, O);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = V(h, 2);
        Vt(m, {});
        var b = V(m, 2);
        Ie(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            be();
            var O = Te("搜索引擎设置");
            M(z, O);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = B(x);
        {
          let z = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          xt($, {
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
        var C = V(x, 4), S = B(C);
        ft(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(C);
        var T = V(C, 4), D = B(T);
        ft(D, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ limit: k }));
          }
        }), j(T);
        var Z = V(T, 2), H = B(Z);
        Ie(H, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            be();
            var O = Te("输出参数");
            M(z, O);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = V(Z, 2);
        er(I, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Df, { data: {} }, [], [], !0);
var Nb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ob = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mb = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Db = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Lf(e, t) {
  fe(t, !0), Ye(e, Db);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n();
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Nb();
        M(a, l);
      },
      handle: (a) => {
        cr(a, {
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
        var u = Mb(), d = se(u), p = B(d);
        Ie(p, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Te("循环变量");
            M(b, $);
          },
          $$slots: { default: !0 }
        }), j(d);
        var f = V(d, 2);
        Vt(f, { dataKeyName: "loopVars" });
        var h = V(f, 2), y = B(h);
        Ie(y, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Te("输出参数");
            M(b, $);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var $ = Ob();
            M(b, $);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = V(h, 2);
        Vt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe(s);
}
le(Lf, { data: {} }, [], [], !0);
var Lb = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Vb = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Ab = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vf(e, t) {
  fe(t, !0), Ye(e, Ab);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = ct(), a = Jn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = yt(), d = (k, O) => {
    u(s, (_) => {
      let E = _.data?.[o()];
      return E[r()] = { ...E[r()], [k]: O }, { [o()]: E };
    });
  }, p = (k, O) => {
    const _ = O.target.value;
    d(k, _);
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
  }, $ = Vb(), C = se($), S = B(C);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    ft(S, {
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
  j(C);
  var T = V(C, 2), D = B(T);
  {
    var Z = (k) => {
      ft(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (O) => p("value", O)
      });
    }, H = (k) => {
      var O = Ne(), _ = se(O);
      {
        var E = (N) => {
          {
            let K = /* @__PURE__ */ P(() => [c(l).ref]);
            xt(N, {
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
          _,
          (N) => {
            c(l).refType !== "input" && N(E);
          },
          !0
        );
      }
      M(k, O);
    };
    ue(D, (k) => {
      c(l).refType === "fixed" ? k(Z) : k(H, !1);
    });
  }
  j(T);
  var I = V(T, 2), z = B(I);
  return Wt(
    mr(z, {
      placement: "bottom",
      floating: (k) => {
        var O = Lb(), _ = B(O), E = V(B(_));
        {
          let R = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          xt(E, {
            get items() {
              return Da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: y
          });
        }
        j(_);
        var N = V(_, 2), K = V(B(N));
        {
          let R = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          xt(K, {
            get items() {
              return Dy;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(R);
            },
            onSelect: h
          });
        }
        j(N);
        var W = V(N, 2), F = V(B(W));
        Ge(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            p("formLabel", R);
          },
          get value() {
            return c(l).formLabel;
          }
        }), j(W);
        var L = V(W, 2), U = V(B(L));
        Ge(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            p("formDescription", R);
          },
          get value() {
            return c(l).formDescription;
          }
        }), j(L);
        var X = V(L, 2), J = B(X);
        Ae(J, {
          onclick: m,
          children: (R, q) => {
            be();
            var G = Te("删除");
            M(R, G);
          },
          $$slots: { default: !0 }
        }), j(X), j(O), M(k, O);
      },
      children: (k, O) => {
        Jo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => w = k,
    () => w
  ), j(I), M(e, $), pe(x);
}
le(
  Vf,
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
var zb = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Hb = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Ib = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Rb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Af(e, t) {
  fe(t, !0), Ye(e, Rb);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = ct(), s = Jn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = Ib(), d = B(u);
  {
    var p = (h) => {
      var y = zb();
      be(4), M(h, y);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = V(d, 2);
  return Tt(
    f,
    19,
    () => c(a),
    (h) => h.id,
    (h, y, w) => {
      Vf(h, {
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
      var y = Hb(), w = B(y, !0);
      j(y), Pe(() => Je(w, n())), M(h, y);
    }
  ), j(u), M(e, u), pe(l);
}
le(Af, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var jb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Zb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Kb = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Bb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zf(e, t) {
  fe(t, !0), Ye(e, Bb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), { updateNodeData: s } = yt();
  it(() => {
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
  return un(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = jb();
        M(l, u);
      },
      children: (l, u) => {
        var d = Kb(), p = se(d), f = B(p);
        Ie(f, {
          level: 3,
          children: (S, T) => {
            be();
            var D = Te("确认数据");
            M(S, D);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Ae(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (S, T) => {
            var D = Zb();
            M(S, D);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = V(p, 2);
        Af(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = V(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            be();
            var D = Te("确认消息");
            M(S, D);
          },
          $$slots: { default: !0 }
        });
        var m = V(w, 4), b = B(m);
        {
          let S = /* @__PURE__ */ P(() => n().message || "");
          Ge(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ message: T.target.value }));
            },
            get value() {
              return c(S);
            }
          });
        }
        j(m);
        var x = V(m, 2), $ = B(x);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            be();
            var D = Te("输出参数");
            M(S, D);
          },
          $$slots: { default: !0 }
        }), j(x);
        var C = V(x, 2);
        er(C, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(zf, { data: {} }, [], [], !0);
const Wb = {
  startNode: xf,
  codeNode: Tf,
  confirmNode: zf,
  llmNode: Pf,
  templateNode: Nf,
  httpNode: Of,
  knowledgeNode: Mf,
  searchEngineNode: Df,
  loopNode: Lf,
  endNode: Sf
};
var Fb = /* @__PURE__ */ te("<!> ", 1);
function Us(e, t) {
  fe(t, !0);
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
      var h = V(f);
      Pe(() => Je(h, ` ${r() ?? ""}`)), M(u, p);
    },
    $$slots: { default: !0 }
  }), pe(l);
}
le(Us, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Yb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), qb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Xb = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Hf(e, t) {
  fe(t, !0);
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
  ], s = [], a = fr(), l = a.customNodes;
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
  var u = Xb(), d = B(u), p = B(d), f = B(p);
  of(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), j(p);
  var h = V(p, 2), y = B(h);
  Tt(y, 21, () => o, Yr, (b, x) => {
    Us(b, Qe(() => c(x)));
  }), j(y);
  var w = V(y, 2);
  Tt(w, 21, () => s, Yr, (b, x) => {
    Us(b, Qe(() => c(x)));
  }), j(w), j(h), j(d);
  var m = V(d, 2);
  Ae(m, {
    onclick: () => {
      Q(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var $ = Ne(), C = se($);
      {
        var S = (D) => {
          var Z = Yb();
          M(D, Z);
        }, T = (D) => {
          var Z = qb();
          M(D, Z);
        };
        ue(C, (D) => {
          c(r) === "show" ? D(S) : D(T, !1);
        });
      }
      M(b, $);
    },
    $$slots: { default: !0 }
  }), j(u), Pe(() => {
    Bt(u, 1, `tf-toolbar ${c(r) ?? ""}`), Ct(y, `display: ${c(n) === "base" ? "flex" : "none"}`), Ct(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), M(e, u), pe();
}
le(Hf, {}, [], [], !0);
const Ub = () => ({ getNode: (e) => je.getNode(e) }), Gb = () => ({ ensureParentInNodesBefore: (e, t) => {
  je.updateNodes((n) => {
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
} }), Jb = () => ({ getEdgesByTarget: (e) => je.getEdges().filter((t) => t.target === e) });
var Qb = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ex = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), tx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), nx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), rx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), ox = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ix = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), sx = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ax = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), lx = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const ux = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function If(e, t) {
  fe(t, !0), Ye(e, ux);
  const n = v(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = _n(), s = yt(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, u = (m, b) => {
    l({ [m]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = fr().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let y;
  it(() => {
    n().expand && y && y.append(p);
  }), it(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), it(() => {
    !n().parameters && f.parameters && l({
      parameters: Do(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), it(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Do(JSON.parse(JSON.stringify(f.outputDefs)))
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
      var $ = Ne(), C = se($);
      ha(C, () => f.icon), M(x, $);
    };
    let b = /* @__PURE__ */ P(() => ({ ...n(), description: f.description }));
    un(e, Qe(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: m,
        children: (x, $) => {
          var C = lx(), S = se(C);
          {
            var T = (k) => {
              var O = ex(), _ = se(O), E = B(_);
              Ie(E, {
                level: 3,
                children: (F, L) => {
                  be();
                  var U = Te("输入参数");
                  M(F, U);
                },
                $$slots: { default: !0 }
              });
              var N = V(E, 2);
              {
                var K = (F) => {
                  Ae(F, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (L, U) => {
                      var X = Qb();
                      M(L, X);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (F) => {
                  f.parametersAddEnable !== !1 && F(K);
                });
              }
              j(_);
              var W = V(_, 2);
              Vt(W, {}), M(k, O);
            };
            ue(S, (k) => {
              f.parametersEnable !== !1 && k(T);
            });
          }
          var D = V(S, 2);
          {
            var Z = (k) => {
              var O = Ne(), _ = se(O);
              Tt(_, 17, () => h, Yr, (E, N) => {
                var K = Ne(), W = se(K);
                {
                  var F = (U) => {
                    var X = tx(), J = se(X), R = B(J, !0);
                    j(J);
                    var q = V(J, 2), G = B(q);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[c(N).name] || c(N).defaultValue);
                      ft(G, Qe(
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
                    j(q), Pe(() => Je(R, c(N).label)), M(U, X);
                  }, L = (U) => {
                    var X = Ne(), J = se(X);
                    {
                      var R = (G) => {
                        var ne = nx(), re = se(ne), ee = B(re, !0);
                        j(re);
                        var ve = V(re, 2), ce = B(ve);
                        {
                          let ie = /* @__PURE__ */ P(() => n()[c(N).name] || c(N).defaultValue);
                          Ge(ce, Qe(
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
                              onchange: (ae) => {
                                u(c(N).name, ae);
                              }
                            }
                          ));
                        }
                        j(ve), Pe(() => Je(ee, c(N).label)), M(G, ne);
                      }, q = (G) => {
                        var ne = Ne(), re = se(ne);
                        {
                          var ee = (ce) => {
                            var ie = rx(), ae = se(ie), me = B(ae, !0);
                            j(ae);
                            var ge = V(ae, 2), xe = B(ge), de = B(xe), _e = B(de);
                            j(de);
                            var Ve = V(de, 2), Y = (Fe) => l({ [c(N).name]: parseFloat(Fe.target.value) });
                            vt(
                              Ve,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: Y
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), j(xe), j(ge), Pe(() => {
                              Je(me, c(N).label), Je(_e, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), M(ce, ie);
                          }, ve = (ce) => {
                            var ie = Ne(), ae = se(ie);
                            {
                              var me = (xe) => {
                                var de = ox(), _e = se(de), Ve = B(_e, !0);
                                j(_e);
                                var Y = V(_e, 2), Fe = B(Y);
                                {
                                  let ze = /* @__PURE__ */ P(() => c(N).options || []), Ke = /* @__PURE__ */ P(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  xt(Fe, {
                                    get items() {
                                      return c(ze);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Be) => {
                                      const rt = Be.value;
                                      l({ [c(N).name]: rt });
                                    },
                                    get value() {
                                      return c(Ke);
                                    }
                                  });
                                }
                                j(Y), Pe(() => Je(Ve, c(N).label)), M(xe, de);
                              }, ge = (xe) => {
                                var de = Ne(), _e = se(de);
                                {
                                  var Ve = (Fe) => {
                                    var ze = ix(), Ke = se(ze), Be = B(Ke, !0);
                                    j(Ke);
                                    var rt = V(Ke, 2), $t = B(rt);
                                    {
                                      let Nt = /* @__PURE__ */ P(() => c(N).chosen?.buttonText);
                                      rf($t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Nt);
                                        },
                                        onChosen: (ot, we, Xe) => {
                                          c(N).chosen?.onChosen?.(l, ot, we, Xe);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    j(rt), Pe(() => Je(Be, c(N).label)), M(Fe, ze);
                                  }, Y = (Fe) => {
                                    var ze = Ne(), Ke = se(ze);
                                    {
                                      var Be = (rt) => {
                                        Ie(rt, Qe({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: ($t, Nt) => {
                                            be();
                                            var ot = Te();
                                            Pe(() => Je(ot, c(N).label)), M($t, ot);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        Ke,
                                        (rt) => {
                                          c(N).type === "heading" && rt(Be);
                                        },
                                        !0
                                      );
                                    }
                                    M(Fe, ze);
                                  };
                                  ue(
                                    _e,
                                    (Fe) => {
                                      c(N).type === "chosen" ? Fe(Ve) : Fe(Y, !1);
                                    },
                                    !0
                                  );
                                }
                                M(xe, de);
                              };
                              ue(
                                ae,
                                (xe) => {
                                  c(N).type === "select" ? xe(me) : xe(ge, !1);
                                },
                                !0
                              );
                            }
                            M(ce, ie);
                          };
                          ue(
                            re,
                            (ce) => {
                              c(N).type === "slider" ? ce(ee) : ce(ve, !1);
                            },
                            !0
                          );
                        }
                        M(G, ne);
                      };
                      ue(
                        J,
                        (G) => {
                          c(N).type === "textarea" ? G(R) : G(q, !1);
                        },
                        !0
                      );
                    }
                    M(U, X);
                  };
                  ue(W, (U) => {
                    c(N).type === "input" ? U(F) : U(L, !1);
                  });
                }
                M(E, K);
              }), M(k, O);
            };
            ue(D, (k) => {
              h && k(Z);
            });
          }
          var H = V(D, 2);
          Wt(H, (k) => y = k, () => y);
          var I = V(H, 2);
          {
            var z = (k) => {
              var O = ax(), _ = se(O), E = B(_);
              Ie(E, {
                level: 3,
                mt: "10px",
                children: (F, L) => {
                  be();
                  var U = Te("输出参数");
                  M(F, U);
                },
                $$slots: { default: !0 }
              });
              var N = V(E, 2);
              {
                var K = (F) => {
                  Ae(F, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (L, U) => {
                      var X = sx();
                      M(L, X);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(N, (F) => {
                  f.outputDefsAddEnable !== !1 && F(K);
                });
              }
              j(_);
              var W = V(_, 2);
              er(W, {}), M(k, O);
            };
            ue(I, (k) => {
              f.outputDefsEnable !== !1 && k(z);
            });
          }
          Pe(() => {
            Ct(H, f.rootStyle || ""), Bt(H, 1, Gn(f.rootClass), "svelte-qt4m0r");
          }), M(x, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return pe(w);
}
le(If, { data: {} }, [], [], !0);
const cx = () => ({ updateEdgeData: (e, t, n) => {
  const r = je.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, je.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), dx = () => ({ deleteEdge: (e) => {
  je.removeEdge(e);
} }), fx = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = je.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(je.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, px = () => ({ getNodeRelativePosition: (e) => {
  let t = je.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = je.getNode(t.parentId) : t = void 0;
  return n;
} });
function hx(e) {
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
function gx(e) {
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
function vx(e) {
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
function Gs(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Gs(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Gs(e[r], t));
    return n;
  }
  return e;
}
const mx = () => (yt(), { copyHandler: async (e) => {
  const t = je.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = je.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(hx), o = n.map(vx), i = JSON.stringify({
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
  const r = gx(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Fn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, p = Gs(l.data, i);
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
      id: `edge_${Fn()}`,
      source: u,
      target: d
    });
  }
  je.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), je.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ou = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var yx = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), wx = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), bx = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const xx = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Rf(e, t) {
  fe(t, !0), Ye(e, xx);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = yt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Oe(!1), s = /* @__PURE__ */ Oe(null);
  const { updateEdgeData: a } = cx(), l = (X) => {
    X.preventDefault(), X.dataTransfer && (X.dataTransfer.dropEffect = "move");
  }, u = (X) => {
    X.preventDefault();
    const J = o.screenToFlowPosition({ x: X.clientX - 250, y: X.clientY - 100 }), R = X.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const q = JSON.parse(R), G = { id: `node_${Fn()}`, position: J, data: {}, ...q };
    je.addNode(G), je.selectNodeOnly(G.id);
  }, { getNode: d } = Ub(), p = (X) => {
    const J = d(X.source), R = d(X.target);
    if (X.sourceHandle === "loop_handle" || J.parentId) {
      const q = o.getEdges();
      for (let G of q)
        if (G.target === X.target) {
          const ne = d(G.source);
          if (X.sourceHandle === "loop_handle" && ne.parentId !== J.id || J.parentId && ne.parentId !== J.parentId)
            return !1;
        }
    }
    return !(!J.parentId && R.parentId && R.parentId !== J.id);
  }, { getNodesFromSource: f } = fx(), { getNodeRelativePosition: h } = px(), { ensureParentInNodesBefore: y } = Gb(), w = (X, J) => {
    if (!J.isValid)
      return;
    const R = J.toNode;
    if (R.parentId)
      return;
    const q = J.fromNode, G = J.fromHandle, ne = { position: { ...R.position } };
    if (G.id === "loop_handle" ? ne.parentId = q.id : q.parentId && (ne.parentId = q.parentId), ne.parentId) {
      const { x: re, y: ee } = h(ne.parentId);
      ne.position = { x: R.position.x - re, y: R.position.y - ee }, o.updateNode(R.id, ne), f(R.id).forEach((ve) => {
        o.updateNode(ve.id, {
          parentId: ne.parentId,
          position: { x: ve.position.x - re, y: ve.position.y - ee }
        });
      }), y(ne.parentId, R.id);
    }
    setTimeout(() => {
      je.getEdges().forEach((re) => {
        re.target === R.id && re.source == q.id && (Q(i, !0), Q(s, re, !0));
      });
    });
  }, { getEdgesByTarget: m } = Jb(), b = (X) => {
    X.edges.forEach((J) => {
      J.id === c(s)?.id && (Q(s, null), Q(i, !1));
      const R = d(J.target);
      if (R && R.parentId) {
        const q = m(J.target), { x: G, y: ne } = h(R.parentId);
        if (q.length === 0)
          o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + G, y: R.position.y + ne }
          }), f(R.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + G, y: re.position.y + ne }
            });
          });
        else {
          let re = !1;
          for (let ee = 0; ee < q.length; ee++) {
            const ve = q[ee], ce = d(ve.source);
            if (ce.parentId || ce.type === "loopNode") {
              re = !0;
              break;
            }
          }
          re || (o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + G, y: R.position.y + ne }
          }), f(R.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + G, y: ee.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: x } = dx(), $ = (X, J) => {
  }, C = (X) => {
  }, { copyHandler: S, pasteHandler: T } = mx(), D = (X) => {
    ou() || ((X.ctrlKey || X.metaKey) && X.key === "c" && (X.preventDefault(), S(X)), (X.ctrlKey || X.metaKey) && X.key === "a" && (X.preventDefault(), je.updateNodes((J) => J.map((R) => ({ ...R, selected: !0 }))), je.updateEdges((J) => J.map((R) => ({ ...R, selected: !0 })))));
  }, Z = async (X) => {
    ou() || T(X);
  };
  Un(() => {
    window.addEventListener("keydown", D), window.addEventListener("paste", Z);
  }), Ro(() => {
    window.removeEventListener("keydown", D), window.removeEventListener("paste", Z);
  });
  const H = {
    // ...nodeTypes
  }, I = fr().customNodes;
  if (I)
    for (let X of Object.keys(I))
      H[X] = If;
  const z = fr().onDataChange;
  it(() => {
    z?.({
      nodes: je.getNodes(),
      edges: je.getEdges(),
      viewport: je.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(X) {
      n(X), g();
    }
  }, O = bx(), _ = B(O), E = je.getNodes, N = je.setNodes, K = je.getEdges, W = je.setEdges, F = je.getViewport, L = je.setViewport;
  {
    let X = /* @__PURE__ */ P(() => ({ ...Wb, ...H })), J = /* @__PURE__ */ P(() => ({
      markerEnd: { type: Po.ArrowClosed, width: 20, height: 20 }
    }));
    Zd(_, {
      get nodeTypes() {
        return c(X);
      },
      get nodes() {
        return E();
      },
      set nodes(R) {
        N(R);
      },
      get edges() {
        return K();
      },
      set edges(R) {
        W(R);
      },
      get viewport() {
        return F();
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
      onconnect: C,
      connectionRadius: 50,
      onedgeclick: (R) => {
        Q(i, !0), Q(s, R.edge, !0);
      },
      onbeforeconnect: (R) => ({ ...R, id: Fn() }),
      ondelete: b,
      onclick: (R) => {
        const q = R.target;
        q.classList.contains("svelte-flow__edge-interaction") || q.classList.contains("panel-content") || q.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return c(J);
      },
      children: (R, q) => {
        var G = wx(), ne = se(G);
        Jd(ne, {});
        var re = V(ne, 2);
        Xd(re, {});
        var ee = V(re, 2);
        ef(ee, {});
        var ve = V(ee, 2);
        {
          var ce = (ie) => {
            qo(ie, {
              children: (ae, me) => {
                var ge = yx(), xe = V(B(ge), 4), de = B(xe);
                {
                  let Fe = /* @__PURE__ */ P(() => c(s)?.data?.condition);
                  Ge(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Fe);
                    },
                    onchange: (ze) => {
                      c(s) && a(c(s).id, { condition: ze.target?.value });
                    }
                  });
                }
                j(xe);
                var _e = V(xe, 2), Ve = B(_e);
                Ae(Ve, {
                  onclick: () => {
                    x(c(s)?.id), Q(i, !1);
                  },
                  children: (Fe, ze) => {
                    be();
                    var Ke = Te("删除");
                    M(Fe, Ke);
                  },
                  $$slots: { default: !0 }
                });
                var Y = V(Ve, 2);
                Ae(Y, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (Fe, ze) => {
                    be();
                    var Ke = Te("保存");
                    M(Fe, Ke);
                  },
                  $$slots: { default: !0 }
                }), j(_e), j(ge), M(ae, ge);
              },
              $$slots: { default: !0 }
            });
          };
          ue(ve, (ie) => {
            c(i) && ie(ce);
          });
        }
        M(R, G);
      },
      $$slots: { default: !0 }
    });
  }
  var U = V(_, 2);
  return Hf(U, {}), j(O), M(e, O), pe(k);
}
le(Rf, { onInit: {} }, [], [], !0);
function _x(e, t) {
  fe(t, !0);
  const n = v(t, "options", 7), r = v(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  je.init(o?.nodes || [], o?.edges || []), Wr("tinyflow_options", n());
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
  }), pe(i);
}
customElements.define("tinyflow-component", le(_x, { options: {}, onInit: {} }, [], [], !1));
const $x = Gf((e, t) => {
  const n = Ba(null), r = Ba(null);
  Jf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Qf(() => {
    if (n.current) {
      const a = new Ly({
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
  $x as Tinyflow
};
//# sourceMappingURL=index.js.map
