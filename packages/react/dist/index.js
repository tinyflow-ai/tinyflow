import nu, { forwardRef as qf, useRef as Ra, useImperativeHandle as Zf, useEffect as Bf } from "react";
var Xo = { exports: {} }, eo = {};
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
function Kf() {
  if (Ia) return eo;
  Ia = 1;
  var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, p = {}, f = null, g = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: g, props: p, _owner: o.current };
  }
  return eo.Fragment = n, eo.jsx = s, eo.jsxs = s, eo;
}
var to = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function jf() {
  return qa || (qa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function w(z) {
      if (z === null || typeof z != "object")
        return null;
      var ne = h && z[h] || z[v];
      return typeof ne == "function" ? ne : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(z) {
      {
        for (var ne = arguments.length, pe = new Array(ne > 1 ? ne - 1 : 0), _e = 1; _e < ne; _e++)
          pe[_e - 1] = arguments[_e];
        $("error", z, pe);
      }
    }
    function $(z, ne, pe) {
      {
        var _e = b.ReactDebugCurrentFrame, Ie = _e.getStackAddendum();
        Ie !== "" && (ne += "%s", pe = pe.concat([Ie]));
        var Ke = pe.map(function(He) {
          return String(He);
        });
        Ke.unshift("Warning: " + ne), Function.prototype.apply.call(console[z], console, Ke);
      }
    }
    var S = !1, E = !1, D = !1, O = !1, q = !1, K;
    K = Symbol.for("react.module.reference");
    function J(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || q || z === o || z === u || z === d || O || z === g || S || E || D || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === p || z.$$typeof === s || z.$$typeof === a || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === K || z.getModuleId !== void 0));
    }
    function A(z, ne, pe) {
      var _e = z.displayName;
      if (_e)
        return _e;
      var Ie = ne.displayName || ne.name || "";
      return Ie !== "" ? pe + "(" + Ie + ")" : pe;
    }
    function _(z) {
      return z.displayName || "Context";
    }
    function k(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
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
        case d:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case a:
            var ne = z;
            return _(ne) + ".Consumer";
          case s:
            var pe = z;
            return _(pe._context) + ".Provider";
          case l:
            return A(z, z.render, "ForwardRef");
          case p:
            var _e = z.displayName || null;
            return _e !== null ? _e : k(z.type) || "Memo";
          case f: {
            var Ie = z, Ke = Ie._payload, He = Ie._init;
            try {
              return k(He(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, N = 0, P, H, Z, Y, M, X, te;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function j() {
      {
        if (N === 0) {
          P = console.log, H = console.info, Z = console.warn, Y = console.error, M = console.group, X = console.groupCollapsed, te = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        N++;
      }
    }
    function G() {
      {
        if (N--, N === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, z, {
              value: P
            }),
            info: C({}, z, {
              value: H
            }),
            warn: C({}, z, {
              value: Z
            }),
            error: C({}, z, {
              value: Y
            }),
            group: C({}, z, {
              value: M
            }),
            groupCollapsed: C({}, z, {
              value: X
            }),
            groupEnd: C({}, z, {
              value: te
            })
          });
        }
        N < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = b.ReactCurrentDispatcher, se;
    function W(z, ne, pe) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var _e = Ie.stack.trim().match(/\n( *(at )?)/);
            se = _e && _e[1] || "";
          }
        return `
` + se + z;
      }
    }
    var ye = !1, we;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      we = new ie();
    }
    function ee(z, ne) {
      if (!z || ye)
        return "";
      {
        var pe = we.get(z);
        if (pe !== void 0)
          return pe;
      }
      var _e;
      ye = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = F.current, F.current = null, j();
      try {
        if (ne) {
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
            } catch (Dt) {
              _e = Dt;
            }
            Reflect.construct(z, [], He);
          } else {
            try {
              He.call();
            } catch (Dt) {
              _e = Dt;
            }
            z.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            _e = Dt;
          }
          z();
        }
      } catch (Dt) {
        if (Dt && _e && typeof Dt.stack == "string") {
          for (var Le = Dt.stack.split(`
`), Et = _e.stack.split(`
`), et = Le.length - 1, st = Et.length - 1; et >= 1 && st >= 0 && Le[et] !== Et[st]; )
            st--;
          for (; et >= 1 && st >= 0; et--, st--)
            if (Le[et] !== Et[st]) {
              if (et !== 1 || st !== 1)
                do
                  if (et--, st--, st < 0 || Le[et] !== Et[st]) {
                    var jt = `
` + Le[et].replace(" at new ", " at ");
                    return z.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", z.displayName)), typeof z == "function" && we.set(z, jt), jt;
                  }
                while (et >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        ye = !1, F.current = Ke, G(), Error.prepareStackTrace = Ie;
      }
      var _r = z ? z.displayName || z.name : "", ir = _r ? W(_r) : "";
      return typeof z == "function" && we.set(z, ir), ir;
    }
    function re(z, ne, pe) {
      return ee(z, !1);
    }
    function ge(z) {
      var ne = z.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function he(z, ne, pe) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return ee(z, ge(z));
      if (typeof z == "string")
        return W(z);
      switch (z) {
        case u:
          return W("Suspense");
        case d:
          return W("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return re(z.render);
          case p:
            return he(z.type, ne, pe);
          case f: {
            var _e = z, Ie = _e._payload, Ke = _e._init;
            try {
              return he(Ke(Ie), ne, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Ne = {}, ke = b.ReactDebugCurrentFrame;
    function B(z) {
      if (z) {
        var ne = z._owner, pe = he(z.type, z._source, ne ? ne.type : null);
        ke.setExtraStackFrame(pe);
      } else
        ke.setExtraStackFrame(null);
    }
    function lt(z, ne, pe, _e, Ie) {
      {
        var Ke = Function.call.bind(ae);
        for (var He in z)
          if (Ke(z, He)) {
            var Le = void 0;
            try {
              if (typeof z[He] != "function") {
                var Et = Error((_e || "React class") + ": " + pe + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              Le = z[He](ne, He, _e, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Le = et;
            }
            Le && !(Le instanceof Error) && (B(Ie), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", pe, He, typeof Le), B(null)), Le instanceof Error && !(Le.message in Ne) && (Ne[Le.message] = !0, B(Ie), x("Failed %s type: %s", pe, Le.message), B(null));
          }
      }
    }
    var ze = Array.isArray;
    function qe(z) {
      return ze(z);
    }
    function Re(z) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, pe = ne && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return pe;
      }
    }
    function ut(z) {
      try {
        return ot(z), !1;
      } catch {
        return !0;
      }
    }
    function ot(z) {
      return "" + z;
    }
    function _t(z) {
      if (ut(z))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(z)), ot(z);
    }
    var Ze = b.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, Ye;
    function ct(z) {
      if (ae.call(z, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function it(z) {
      if (ae.call(z, "key")) {
        var ne = Object.getOwnPropertyDescriptor(z, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function St(z, ne) {
      typeof z.ref == "string" && Ze.current;
    }
    function Ue(z, ne) {
      {
        var pe = function() {
          ve || (ve = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        pe.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function bt(z, ne) {
      {
        var pe = function() {
          Ye || (Ye = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        pe.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var Kt = function(z, ne, pe, _e, Ie, Ke, He) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: ne,
        ref: pe,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ke
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
        value: _e
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function fn(z, ne, pe, _e, Ie) {
      {
        var Ke, He = {}, Le = null, Et = null;
        pe !== void 0 && (_t(pe), Le = "" + pe), it(ne) && (_t(ne.key), Le = "" + ne.key), ct(ne) && (Et = ne.ref, St(ne, Ie));
        for (Ke in ne)
          ae.call(ne, Ke) && !Qe.hasOwnProperty(Ke) && (He[Ke] = ne[Ke]);
        if (z && z.defaultProps) {
          var et = z.defaultProps;
          for (Ke in et)
            He[Ke] === void 0 && (He[Ke] = et[Ke]);
        }
        if (Le || Et) {
          var st = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          Le && Ue(He, st), Et && bt(He, st);
        }
        return Kt(z, Le, Et, Ie, _e, Ze.current, He);
      }
    }
    var Kn = b.ReactCurrentOwner, Qr = b.ReactDebugCurrentFrame;
    function jn(z) {
      if (z) {
        var ne = z._owner, pe = he(z.type, z._source, ne ? ne.type : null);
        Qr.setExtraStackFrame(pe);
      } else
        Qr.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Gi(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function La() {
      {
        if (Kn.current) {
          var z = k(Kn.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function Df(z) {
      return "";
    }
    var Ma = {};
    function Of(z) {
      {
        var ne = La();
        if (!ne) {
          var pe = typeof z == "string" ? z : z.displayName || z.name;
          pe && (ne = `

Check the top-level render call using <` + pe + ">.");
        }
        return ne;
      }
    }
    function Ha(z, ne) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var pe = Of(ne);
        if (Ma[pe])
          return;
        Ma[pe] = !0;
        var _e = "";
        z && z._owner && z._owner !== Kn.current && (_e = " It was passed a child from " + k(z._owner.type) + "."), jn(z), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, _e), jn(null);
      }
    }
    function Va(z, ne) {
      {
        if (typeof z != "object")
          return;
        if (qe(z))
          for (var pe = 0; pe < z.length; pe++) {
            var _e = z[pe];
            Gi(_e) && Ha(_e, ne);
          }
        else if (Gi(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Ie = w(z);
          if (typeof Ie == "function" && Ie !== z.entries)
            for (var Ke = Ie.call(z), He; !(He = Ke.next()).done; )
              Gi(He.value) && Ha(He.value, ne);
        }
      }
    }
    function Lf(z) {
      {
        var ne = z.type;
        if (ne == null || typeof ne == "string")
          return;
        var pe;
        if (typeof ne == "function")
          pe = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === p))
          pe = ne.propTypes;
        else
          return;
        if (pe) {
          var _e = k(ne);
          lt(pe, z.props, "prop", _e, z);
        } else if (ne.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var Ie = k(ne);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mf(z) {
      {
        for (var ne = Object.keys(z.props), pe = 0; pe < ne.length; pe++) {
          var _e = ne[pe];
          if (_e !== "children" && _e !== "key") {
            jn(z), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), jn(null);
            break;
          }
        }
        z.ref !== null && (jn(z), x("Invalid attribute `ref` supplied to `React.Fragment`."), jn(null));
      }
    }
    var za = {};
    function Aa(z, ne, pe, _e, Ie, Ke) {
      {
        var He = J(z);
        if (!He) {
          var Le = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = Df();
          Et ? Le += Et : Le += La();
          var et;
          z === null ? et = "null" : qe(z) ? et = "array" : z !== void 0 && z.$$typeof === t ? (et = "<" + (k(z.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : et = typeof z, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Le);
        }
        var st = fn(z, ne, pe, Ie, Ke);
        if (st == null)
          return st;
        if (He) {
          var jt = ne.children;
          if (jt !== void 0)
            if (_e)
              if (qe(jt)) {
                for (var _r = 0; _r < jt.length; _r++)
                  Va(jt[_r], z);
                Object.freeze && Object.freeze(jt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Va(jt, z);
        }
        if (ae.call(ne, "key")) {
          var ir = k(z), Dt = Object.keys(ne).filter(function(If) {
            return If !== "key";
          }), Ui = Dt.length > 0 ? "{key: someKey, " + Dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!za[ir + Ui]) {
            var Rf = Dt.length > 0 ? "{" + Dt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ui, ir, Rf, ir), za[ir + Ui] = !0;
          }
        }
        return z === r ? Mf(st) : Lf(st), st;
      }
    }
    function Hf(z, ne, pe) {
      return Aa(z, ne, pe, !0);
    }
    function Vf(z, ne, pe) {
      return Aa(z, ne, pe, !1);
    }
    var zf = Vf, Af = Hf;
    to.Fragment = r, to.jsx = zf, to.jsxs = Af;
  }()), to;
}
var Za;
function Yf() {
  return Za || (Za = 1, process.env.NODE_ENV === "production" ? Xo.exports = Kf() : Xo.exports = jf()), Xo.exports;
}
var Xf = Yf();
const Ff = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ff);
const Is = 1, qs = 2, ru = 4, Wf = 8, Gf = 16, Uf = 1, Jf = 2, ou = 4, Qf = 8, ep = 16, iu = 1, tp = 2, su = "[", Zs = "[!", Bs = "]", ur = {}, pt = Symbol(), np = "http://www.w3.org/1999/xhtml", rp = "http://www.w3.org/2000/svg", op = "@attach", ip = !1;
var Eo = Array.isArray, sp = Array.prototype.indexOf, Ks = Array.from, ci = Object.keys, Hr = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertyDescriptors, lu = Object.prototype, ap = Array.prototype, Di = Object.getPrototypeOf, Ba = Object.isExtensible;
function no(e) {
  return typeof e == "function";
}
const mt = () => {
};
function lp(e) {
  return e();
}
function di(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function up() {
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
function Po(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const qt = 2, js = 4, Oi = 8, Xr = 16, An = 32, tr = 64, uu = 128, Wt = 256, fi = 512, Ct = 1024, Gt = 2048, nr = 4096, nn = 8192, xr = 16384, Ys = 32768, Fr = 65536, Ka = 1 << 17, cp = 1 << 18, Wr = 1 << 19, cu = 1 << 20, gs = 1 << 21, Xs = 1 << 22, cr = 1 << 23, yn = Symbol("$state"), Fs = Symbol("legacy props"), dp = Symbol(""), Ws = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fp = 1, Gs = 3, Vr = 8;
function pp() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Us(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function gp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function vp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function yp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function bp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function xp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $p() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function No(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function kp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let $e = !1;
function Rt(e) {
  $e = e;
}
let Oe;
function $t(e) {
  if (e === null)
    throw No(), ur;
  return Oe = e;
}
function Vn() {
  return $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Oe)
  );
}
function R(e) {
  if ($e) {
    if (/* @__PURE__ */ En(Oe) !== null)
      throw No(), ur;
    Oe = e;
  }
}
function be(e = 1) {
  if ($e) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Oe = n;
  }
}
function hs() {
  for (var e = 0, t = Oe; ; ) {
    if (t.nodeType === Vr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Bs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === su || n === Zs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(t)
    );
    t.remove(), t = r;
  }
}
function du(e) {
  if (!e || e.nodeType !== Vr)
    throw No(), ur;
  return (
    /** @type {Comment} */
    e.data
  );
}
function fu(e) {
  return e === this.v;
}
function pu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gu(e) {
  return !pu(e, this.v);
}
let Gr = !1, _p = !1;
function Sp() {
  Gr = !0;
}
const Ep = [];
function hu(e, t = !1, n = !1) {
  return ti(e, /* @__PURE__ */ new Map(), "", Ep, null, n);
}
function ti(e, t, n, r, o = null, i = !1) {
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
    if (Eo(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = ti(u, t, n, r, null, i));
      }
      return a;
    }
    if (Di(e) === lu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = ti(
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
      return ti(
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
let Ge = null;
function pi(e) {
  Ge = e;
}
function Un(e) {
  return (
    /** @type {T} */
    vu().get(e)
  );
}
function zr(e, t) {
  return vu().set(e, t), t;
}
function de(e, t = !1, n) {
  Ge = {
    p: Ge,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Gr && !t ? { s: null, u: null, $: [] } : null
  };
}
function fe(e) {
  var t = (
    /** @type {ComponentContext} */
    Ge
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Mu(r);
  }
  return e !== void 0 && (t.x = e), Ge = t.p, e ?? /** @type {T} */
  {};
}
function To() {
  return !Gr || Ge !== null && Ge.l === null;
}
function vu(e) {
  return Ge === null && Us(), Ge.c ??= new Map(Pp(Ge) || void 0);
}
function Pp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Np = /* @__PURE__ */ new WeakMap();
function Tp(e) {
  var t = Pe;
  if (t === null)
    return Ve.f |= cr, e;
  if ((t.f & Ys) === 0) {
    if ((t.f & uu) === 0)
      throw !t.parent && e instanceof Error && mu(e), e;
    t.b.error(e);
  } else
    Js(e, t);
}
function Js(e, t) {
  for (; t !== null; ) {
    if ((t.f & uu) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && mu(e), e;
}
function mu(e) {
  const t = Np.get(e);
  t && (Hr(e, "message", {
    value: t.message
  }), Hr(e, "stack", {
    value: t.stack
  }));
}
const Dp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let fo = [], po = [];
function yu() {
  var e = fo;
  fo = [], di(e);
}
function wu() {
  var e = po;
  po = [], di(e);
}
function Do(e) {
  fo.length === 0 && queueMicrotask(yu), fo.push(e);
}
function Op(e) {
  po.length === 0 && Dp(wu), po.push(e);
}
function Lp() {
  fo.length > 0 && yu(), po.length > 0 && wu();
}
function Mp(e) {
  let t = 0, n = hr(0), r;
  return () => {
    jp() && (c(n), Lo(() => (t === 0 && (r = ht(() => e(() => uo(n)))), t += 1, () => {
      Do(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, uo(n));
      });
    })));
  };
}
function Hp() {
  for (var e = (
    /** @type {Effect} */
    Pe.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && pp(), e;
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  var t = qt | Gt, n = Ve !== null && (Ve.f & qt) !== 0 ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return Pe === null || n !== null && (n.f & Wt) !== 0 ? t |= Wt : Pe.f |= Wr, {
    ctx: Ge,
    deps: null,
    effects: null,
    equals: fu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      pt
    ),
    wv: 0,
    parent: n ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Pe
  );
  n === null && gp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = hr(
    /** @type {V} */
    pt
  ), s = null, a = !Ve;
  return Xp(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (g) {
      l = Promise.reject(g);
    }
    var u = () => l;
    o = s?.then(u, u) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      gt
    ), p = r.pending;
    a && (r.update_pending_count(1), p || d.increment());
    const f = (g, h = void 0) => {
      s = null, p || d.activate(), h ? h !== Ws && (i.f |= cr, go(i, h)) : ((i.f & cr) !== 0 && (i.f ^= cr), go(i, g)), a && (r.update_pending_count(-1), p || d.decrement()), $u();
    };
    if (o.then(f, (g) => f(null, g || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
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
function T(e) {
  const t = /* @__PURE__ */ Oo(e);
  return Zu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  const t = /* @__PURE__ */ Oo(e);
  return t.equals = gu, t;
}
function bu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Tt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function zp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & qt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ea(e) {
  var t, n = Pe;
  kn(zp(e));
  try {
    bu(e), t = Yu(e);
  } finally {
    kn(n);
  }
  return t;
}
function xu(e) {
  var t = ea(e);
  if (e.equals(t) || (e.v = t, e.wv = Ku()), !$r) {
    var n = (Xn || (e.f & Wt) !== 0) && e.deps !== null ? nr : Ct;
    Ht(e, n);
  }
}
function Cu(e, t, n) {
  const r = To() ? Oo : Qs;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = gt, i = (
    /** @type {Effect} */
    Pe
  ), s = Ap(), a = Hp();
  Promise.all(t.map((l) => /* @__PURE__ */ Vp(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & xr) === 0 && Js(u, i);
    }
    o?.deactivate(), $u();
  }).catch((l) => {
    a.error(l);
  });
}
function Ap() {
  var e = Pe, t = Ve, n = Ge, r = gt;
  return function() {
    kn(e), $n(t), pi(n), r?.activate();
  };
}
function $u() {
  kn(null), $n(null), pi(null);
}
const Ji = /* @__PURE__ */ new Set();
let gt = null, ja = /* @__PURE__ */ new Set(), gi = [];
function ku() {
  const e = (
    /** @type {() => void} */
    gi.shift()
  );
  gi.length > 0 && queueMicrotask(ku), e();
}
let pr = [], Li = null, vs = !1, ni = !1;
class gr {
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
  #o = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #c = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
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
  #d = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #f = [];
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
    pr = [];
    for (const o of t)
      this.#g(o);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#p();
      var n = this.#s, r = this.#r;
      this.#s = [], this.#r = [], this.#l = [], gt = null, Ya(n), Ya(r), gt === null ? gt = this : Ji.delete(this), this.#o?.resolve();
    } else
      this.#u(this.#s), this.#u(this.#r), this.#u(this.#l);
    for (const o of this.#i)
      Tr(o);
    for (const o of this.#a)
      Tr(o);
    this.#i = [], this.#a = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #g(t) {
    t.f ^= Ct;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (An | tr)) !== 0, i = o && (r & Ct) !== 0, s = i || (r & nn) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= Ct;
        else if ((r & js) !== 0)
          this.#r.push(n);
        else if ((r & Ct) === 0)
          if ((r & Xs) !== 0) {
            var a = n.b?.pending ? this.#a : this.#i;
            a.push(n);
          } else Hi(n) && ((n.f & Xr) !== 0 && this.#l.push(n), Tr(n));
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
      ((n.f & Gt) !== 0 ? this.#d : this.#f).push(n), Ht(n, Ct);
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
    for (const t of ja)
      if (ja.delete(t), t(), gt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    pr.length > 0 ? _u() : this.#p(), gt === this && (this.#n === 0 && Ji.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #p() {
    if (!this.#c)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#d)
        Ht(t, Gt), Ar(t);
      for (const t of this.#f)
        Ht(t, nr), Ar(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#o ??= up()).promise;
  }
  static ensure() {
    if (gt === null) {
      const t = gt = new gr();
      Ji.add(gt), ni || gr.enqueue(() => {
        gt === t && t.flush();
      });
    }
    return gt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    gi.length === 0 && queueMicrotask(ku), gi.unshift(t);
  }
}
function m(e) {
  var t = ni;
  ni = !0;
  try {
    for (var n; ; ) {
      if (Lp(), pr.length === 0 && (gt?.flush(), pr.length === 0))
        return Li = null, /** @type {T} */
        n;
      _u();
    }
  } finally {
    ni = t;
  }
}
function _u() {
  var e = Nr;
  vs = !0;
  try {
    var t = 0;
    for (Ga(!0); pr.length > 0; ) {
      var n = gr.ensure();
      if (t++ > 1e3) {
        var r, o;
        Rp();
      }
      n.process(pr), Gn.clear();
    }
  } finally {
    vs = !1, Ga(e), Li = null;
  }
}
function Rp() {
  try {
    yp();
  } catch (e) {
    Js(e, Li);
  }
}
let sr = null;
function Ya(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (xr | nn)) === 0 && Hi(r) && (sr = [], Tr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ru(r) : r.fn = null), sr?.length > 0)) {
        Gn.clear();
        for (const o of sr)
          Tr(o);
        sr = [];
      }
    }
    sr = null;
  }
}
function Ar(e) {
  for (var t = Li = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (vs && t === Pe && (n & Xr) !== 0)
      return;
    if ((n & (tr | An)) !== 0) {
      if ((n & Ct) === 0) return;
      t.f ^= Ct;
    }
  }
  pr.push(t);
}
const Gn = /* @__PURE__ */ new Map();
function hr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: fu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  const n = hr(e);
  return Zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Su(e, t = !1, n = !0) {
  const r = hr(e);
  return t || (r.equals = gu), Gr && n && Ge !== null && Ge.l !== null && (Ge.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!en || (Ve.f & Ka) !== 0) && To() && (Ve.f & (qt | Xr | Xs | Ka)) !== 0 && !Hn?.includes(e) && $p();
  let r = n ? Ft(t) : t;
  return go(e, r);
}
function go(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    $r ? Gn.set(e, t) : Gn.set(e, n), e.v = t;
    var r = gr.ensure();
    r.capture(e, n), (e.f & qt) !== 0 && ((e.f & Gt) !== 0 && ea(
      /** @type {Derived} */
      e
    ), Ht(e, (e.f & Wt) === 0 ? Ct : nr)), e.wv = Ku(), Eu(e, Gt), To() && Pe !== null && (Pe.f & Ct) !== 0 && (Pe.f & (An | tr)) === 0 && (Yt === null ? Wp([e]) : Yt.push(e));
  }
  return t;
}
function Xa(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function uo(e) {
  U(e, e.v + 1);
}
function Eu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = To(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Pe)) {
        var l = (a & Gt) === 0;
        l && Ht(s, t), (a & qt) !== 0 ? Eu(
          /** @type {Derived} */
          s,
          nr
        ) : l && ((a & Xr) !== 0 && sr !== null && sr.push(
          /** @type {Effect} */
          s
        ), Ar(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ft(e) {
  if (typeof e != "object" || e === null || yn in e)
    return e;
  const t = Di(e);
  if (t !== lu && t !== ap)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Eo(e), o = /* @__PURE__ */ De(0), i = dr, s = (a) => {
    if (dr === i)
      return a();
    var l = Ve, u = dr;
    $n(null), Ja(i);
    var d = a();
    return $n(l), Ja(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ De(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && xp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ De(u.value);
          return n.set(l, p), p;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ De(pt));
            n.set(l, d), uo(o);
          }
        } else
          U(u, pt), uo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === yn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Mn(a, l)?.writable) && (d = s(() => {
          var g = Ft(p ? a[l] : pt), h = /* @__PURE__ */ De(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === pt ? void 0 : f;
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
          if (p !== void 0 && f !== pt)
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
        if (l === yn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== pt || Reflect.has(a, l);
        if (u !== void 0 || Pe !== null && (!d || Mn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Ft(a[l]) : pt, g = /* @__PURE__ */ De(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === pt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? U(h, pt) : g in a && (h = s(() => /* @__PURE__ */ De(pt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || Mn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ De(void 0)), U(p, Ft(u)), n.set(l, p));
        else {
          f = p.v !== pt;
          var v = s(() => Ft(u));
          U(p, v);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && U(b, x + 1);
          }
          uo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== pt;
        });
        for (var [u, d] of n)
          d.v !== pt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Cp();
      }
    }
  );
}
function Fa(e) {
  try {
    if (e !== null && typeof e == "object" && yn in e)
      return e[yn];
  } catch {
  }
  return e;
}
function Ip(e, t) {
  return Object.is(Fa(e), Fa(t));
}
var Ot, Pu, Nu, Tu;
function ms() {
  if (Ot === void 0) {
    Ot = window, Pu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Nu = Mn(t, "firstChild").get, Tu = Mn(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0);
  }
}
function rn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return Nu.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return Tu.call(e);
}
function I(e, t) {
  if (!$e)
    return /* @__PURE__ */ dt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ dt(Oe)
  );
  if (n === null)
    n = Oe.appendChild(rn());
  else if (t && n.nodeType !== Gs) {
    var r = rn();
    return n?.before(r), $t(r), r;
  }
  return $t(n), n;
}
function le(e, t) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ dt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Oe;
}
function V(e, t = 1, n = !1) {
  let r = $e ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Gs) {
    var i = rn();
    return r === null ? o?.after(i) : r.before(i), $t(i), i;
  }
  return $t(r), /** @type {TemplateNode} */
  r;
}
function ta(e) {
  e.textContent = "";
}
function Du() {
  return !1;
}
function qp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Do(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Zp(e) {
  $e && /* @__PURE__ */ dt(e) !== null && ta(e);
}
let Wa = !1;
function Bp() {
  Wa || (Wa = !0, document.addEventListener(
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
function na(e) {
  var t = Ve, n = Pe;
  $n(null), kn(null);
  try {
    return e();
  } finally {
    $n(t), kn(n);
  }
}
function Ou(e) {
  Pe === null && Ve === null && mp(), Ve !== null && (Ve.f & Wt) !== 0 && Pe === null && vp(), $r && hp();
}
function Kp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ln(e, t, n, r = !0) {
  var o = Pe;
  o !== null && (o.f & nn) !== 0 && (e |= nn);
  var i = {
    ctx: Ge,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Gt,
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
      Tr(i), i.f |= Ys;
    } catch (l) {
      throw Tt(i), l;
    }
  else t !== null && Ar(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Wr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && Kp(s, o), Ve !== null && (Ve.f & qt) !== 0 && (e & tr) === 0)) {
      var a = (
        /** @type {Derived} */
        Ve
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function jp() {
  return Ve !== null && !en;
}
function Lu(e) {
  const t = ln(Oi, null, !1);
  return Ht(t, Ct), t.teardown = e, t;
}
function tt(e) {
  Ou();
  var t = (
    /** @type {Effect} */
    Pe.f
  ), n = !Ve && (t & An) !== 0 && (t & Ys) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ge
    );
    (r.e ??= []).push(e);
  } else
    return Mu(e);
}
function Mu(e) {
  return ln(js | cu, e, !1);
}
function Hu(e) {
  return Ou(), ln(Oi | cu, e, !0);
}
function ra(e) {
  gr.ensure();
  const t = ln(tr | Wr, e, !0);
  return () => {
    Tt(t);
  };
}
function Yp(e) {
  gr.ensure();
  const t = ln(tr | Wr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mo(t, () => {
      Tt(t), r(void 0);
    }) : (Tt(t), r(void 0));
  });
}
function Ur(e) {
  return ln(js, e, !1);
}
function Xp(e) {
  return ln(Xs | Wr, e, !0);
}
function Lo(e, t = 0) {
  return ln(Oi | t, e, !0);
}
function Se(e, t = [], n = []) {
  Cu(t, n, (r) => {
    ln(Oi, () => e(...r.map(c)), !0);
  });
}
function Cr(e, t = 0) {
  var n = ln(Xr | t, e, !0);
  return n;
}
function on(e, t = !0) {
  return ln(An | Wr, e, !0, t);
}
function Vu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $r, r = Ve;
    Ua(!0), $n(null);
    try {
      t.call(null);
    } finally {
      Ua(n), $n(r);
    }
  }
}
function zu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && na(() => {
      o.abort(Ws);
    });
    var r = n.next;
    (n.f & tr) !== 0 ? n.parent = null : Tt(n, t), n = r;
  }
}
function Fp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & An) === 0 && Tt(t), t = n;
  }
}
function Tt(e, t = !0) {
  var n = !1;
  (t || (e.f & cp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Au(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), zu(e, t && !n), hi(e, 0), Ht(e, xr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Vu(e);
  var o = e.parent;
  o !== null && o.first !== null && Ru(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Au(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(e)
    );
    e.remove(), e = n;
  }
}
function Ru(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mo(e, t) {
  var n = [];
  oa(e, n, !0), Iu(n, () => {
    Tt(e), t && t();
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
function oa(e, t, n) {
  if ((e.f & nn) === 0) {
    if (e.f ^= nn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Fr) !== 0 || (r.f & An) !== 0;
      oa(r, t, i ? n : !1), r = o;
    }
  }
}
function Mi(e) {
  qu(e, !0);
}
function qu(e, t) {
  if ((e.f & nn) !== 0) {
    e.f ^= nn, (e.f & Ct) === 0 && (Ht(e, Gt), Ar(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Fr) !== 0 || (n.f & An) !== 0;
      qu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Nr = !1;
function Ga(e) {
  Nr = e;
}
let $r = !1;
function Ua(e) {
  $r = e;
}
let Ve = null, en = !1;
function $n(e) {
  Ve = e;
}
let Pe = null;
function kn(e) {
  Pe = e;
}
let Hn = null;
function Zu(e) {
  Ve !== null && (Hn === null ? Hn = [e] : Hn.push(e));
}
let Nt = null, At = 0, Yt = null;
function Wp(e) {
  Yt = e;
}
let Bu = 1, ho = 0, dr = ho;
function Ja(e) {
  dr = e;
}
let Xn = !1;
function Ku() {
  return ++Bu;
}
function Hi(e) {
  var t = e.f;
  if ((t & Gt) !== 0)
    return !0;
  if ((t & nr) !== 0) {
    var n = e.deps, r = (t & Wt) !== 0;
    if (n !== null) {
      var o, i, s = (t & fi) !== 0, a = r && Pe !== null && !Xn, l = n.length;
      if ((s || a) && (Pe === null || (Pe.f & xr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= fi), a && d !== null && (d.f & Wt) === 0 && (u.f ^= Wt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Hi(
          /** @type {Derived} */
          i
        ) && xu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Pe !== null && !Xn) && Ht(e, Ct);
  }
  return !1;
}
function ju(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Hn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & qt) !== 0 ? ju(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ht(i, Gt) : (i.f & Ct) !== 0 && Ht(i, nr), Ar(
        /** @type {Effect} */
        i
      ));
    }
}
function Yu(e) {
  var t = Nt, n = At, r = Yt, o = Ve, i = Xn, s = Hn, a = Ge, l = en, u = dr, d = e.f;
  Nt = /** @type {null | Value[]} */
  null, At = 0, Yt = null, Xn = (d & Wt) !== 0 && (en || !Nr || Ve === null), Ve = (d & (An | tr)) === 0 ? e : null, Hn = null, pi(e.ctx), en = !1, dr = ++ho, e.ac !== null && (na(() => {
    e.ac.abort(Ws);
  }), e.ac = null);
  try {
    e.f |= gs;
    var p = (
      /** @type {Function} */
      e.fn
    ), f = p(), g = e.deps;
    if (Nt !== null) {
      var h;
      if (hi(e, At), g !== null && At > 0)
        for (g.length = At + Nt.length, h = 0; h < Nt.length; h++)
          g[At + h] = Nt[h];
      else
        e.deps = g = Nt;
      if (!Xn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & qt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = At; h < g.length; h++)
          (g[h].reactions ??= []).push(e);
    } else g !== null && At < g.length && (hi(e, At), g.length = At);
    if (To() && Yt !== null && !en && g !== null && (e.f & (qt | nr | Gt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Yt.length; h++)
        ju(
          Yt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ho++, Yt !== null && (r === null ? r = Yt : r.push(.../** @type {Source[]} */
    Yt))), (e.f & cr) !== 0 && (e.f ^= cr), f;
  } catch (v) {
    return Tp(v);
  } finally {
    e.f ^= gs, Nt = t, At = n, Yt = r, Ve = o, Xn = i, Hn = s, pi(a), en = l, dr = u;
  }
}
function Gp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = sp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & qt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Nt === null || !Nt.includes(t)) && (Ht(t, nr), (t.f & (Wt | fi)) === 0 && (t.f ^= fi), bu(
    /** @type {Derived} **/
    t
  ), hi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function hi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Gp(e, n[r]);
}
function Tr(e) {
  var t = e.f;
  if ((t & xr) === 0) {
    Ht(e, Ct);
    var n = Pe, r = Nr;
    Pe = e, Nr = !0;
    try {
      (t & Xr) !== 0 ? Fp(e) : zu(e), Vu(e);
      var o = Yu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Bu;
      var i;
      ip && _p && (e.f & Gt) !== 0 && e.deps;
    } finally {
      Nr = r, Pe = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & qt) !== 0;
  if (Ve !== null && !en) {
    var r = Pe !== null && (Pe.f & xr) !== 0;
    if (!r && !Hn?.includes(e)) {
      var o = Ve.deps;
      if ((Ve.f & gs) !== 0)
        e.rv < ho && (e.rv = ho, Nt === null && o !== null && o[At] === e ? At++ : Nt === null ? Nt = [e] : (!Xn || !Nt.includes(e)) && Nt.push(e));
      else {
        (Ve.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Ve] : i.includes(Ve) || i.push(Ve);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & Wt) === 0 && (s.f ^= Wt);
  }
  if ($r) {
    if (Gn.has(e))
      return Gn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & Ct) === 0 && s.reactions !== null || Xu(s)) && (l = ea(s)), Gn.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, Hi(s) && xu(s));
  if ((e.f & cr) !== 0)
    throw e.v;
  return e.v;
}
function Xu(e) {
  if (e.v === pt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Gn.has(t) || (t.f & qt) !== 0 && Xu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ht(e) {
  var t = en;
  try {
    return en = !0, e();
  } finally {
    en = t;
  }
}
const Up = -7169;
function Ht(e, t) {
  e.f = e.f & Up | t;
}
function Jp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function ia(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (yn in e)
      ys(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && yn in n && ys(n);
      }
  }
}
function ys(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ys(e[r], t);
      } catch {
      }
    const n = Di(e);
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
const Fu = /* @__PURE__ */ new Set(), ws = /* @__PURE__ */ new Set();
function sa(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || io.call(t, i), !i.cancelBubble)
      return na(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Do(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function bs(e, t, n, r = {}) {
  var o = sa(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Qa(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = sa(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Lu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Rn(e) {
  for (var t = 0; t < e.length; t++)
    Fu.add(e[t]);
  for (var n of ws)
    n(e);
}
let el = null;
function io(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  el = e;
  var s = 0, a = el === e && e.__root;
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
    Hr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ve, p = Pe;
    $n(null), kn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var v = i["__" + r];
          if (v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Eo(v)) {
              var [w, ...b] = v;
              w.apply(i, [e, ...b]);
            } else
              v.call(i, e);
        } catch (x) {
          f ? g.push(x) : f = x;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let x of g)
          queueMicrotask(() => {
            throw x;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, $n(d), kn(p);
    }
  }
}
function aa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Vt(e, t) {
  var n = (
    /** @type {Effect} */
    Pe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & iu) !== 0, r = (t & tp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Vt(Oe, null), Oe;
    o === void 0 && (o = aa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ dt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Pu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Vt(a, l);
    } else
      Vt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Qp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & iu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Vt(Oe, null), Oe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        aa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ dt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ dt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ dt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ dt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Vt(d, p);
    } else
      Vt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ Qp(e, t, "svg");
}
function Ee(e = "") {
  if (!$e) {
    var t = rn(e + "");
    return Vt(t, t), t;
  }
  var n = Oe;
  return n.nodeType !== Gs && (n.before(n = rn()), $t(n)), Vt(n, n), n;
}
function Te() {
  if ($e)
    return Vt(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = rn();
  return e.append(t, n), Vt(t, n), e;
}
function L(e, t) {
  if ($e) {
    Pe.nodes_end = Oe, Vn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function eg(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const tg = [
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
function ng(e) {
  return tg.includes(e);
}
const rg = {
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
function og(e) {
  return e = e.toLowerCase(), rg[e] ?? e;
}
const ig = ["touchstart", "touchmove"];
function sg(e) {
  return ig.includes(e);
}
const ag = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function lg(e) {
  return ag.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Xe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Wu(e, t) {
  return Gu(e, t);
}
function ug(e, t) {
  ms(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = Oe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(n)
    ); i && (i.nodeType !== Vr || /** @type {Comment} */
    i.data !== su); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw ur;
    Rt(!0), $t(
      /** @type {Comment} */
      i
    ), Vn();
    const s = Gu(e, { ...t, anchor: i });
    if (Oe === null || Oe.nodeType !== Vr || /** @type {Comment} */
    Oe.data !== Bs)
      throw No(), ur;
    return Rt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ur && console.warn("Failed to hydrate: ", s), t.recover === !1 && wp(), ms(), ta(n), Rt(!1), Wu(e, t);
  } finally {
    Rt(r), $t(o);
  }
}
const Sr = /* @__PURE__ */ new Map();
function Gu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ms();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = sg(g);
        t.addEventListener(g, io, { passive: h });
        var v = Sr.get(g);
        v === void 0 ? (document.addEventListener(g, io, { passive: h }), Sr.set(g, 1)) : Sr.set(g, v + 1);
      }
    }
  };
  l(Ks(Fu)), ws.add(l);
  var u = void 0, d = Yp(() => {
    var p = n ?? t.appendChild(rn());
    return on(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Ge
        );
        f.c = i;
      }
      o && (r.$$events = o), $e && Vt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, $e && (Pe.nodes_end = Oe), i && fe();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, io);
        var g = (
          /** @type {number} */
          Sr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, io), Sr.delete(f)) : Sr.set(f, g);
      }
      ws.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return xs.set(u, d), u;
}
let xs = /* @__PURE__ */ new WeakMap();
function cg(e, t) {
  const n = xs.get(e);
  return n ? (xs.delete(e), n(t)) : Promise.resolve();
}
function nt(e, t, ...n) {
  var r = e, o = mt, i;
  Cr(() => {
    o !== (o = t()) && (i && (Tt(i), i = null), i = on(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Fr), $e && (r = Oe);
}
function rr(e) {
  Ge === null && Us(), Gr && Ge.l !== null ? dg(Ge).m.push(e) : tt(() => {
    const t = ht(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Vi(e) {
  Ge === null && Us(), rr(() => () => ht(e));
}
function dg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ce(e, t, n = !1) {
  $e && Vn();
  var r = e, o = null, i = null, s = pt, a = n ? Fr : 0, l = !1;
  const u = (f, g = !0) => {
    l = !0, p(g, f);
  };
  function d() {
    var f = s ? o : i, g = s ? i : o;
    f && Mi(f), g && Mo(g, () => {
      s ? i = null : o = null;
    });
  }
  const p = (f, g) => {
    if (s === (s = f)) return;
    let h = !1;
    if ($e) {
      const b = du(r) === Zs;
      !!s === b && (r = hs(), $t(r), Rt(!1), h = !0);
    }
    var v = Du(), w = r;
    s ? o ??= g && on(() => g(w)) : i ??= g && on(() => g(w)), v || d(), h && Rt(!0);
  };
  Cr(() => {
    l = !1, t(u), l || p(null, null);
  }, a), $e && (r = Oe);
}
function fg(e, t) {
  $e && $t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ dt(e)
  ), Lo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Rr(e, t) {
  return t;
}
function pg(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    oa(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ta(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), gn(e, t[0].prev, t[i - 1].next);
  }
  Iu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), gn(e, d.prev, d.next)), Tt(d.e, !a);
    }
  });
}
function kt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & ru) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = $e ? $t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ dt(u)
    ) : u.appendChild(rn());
  }
  $e && Vn();
  var d = null, p = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Qs(() => {
    var b = n();
    return Eo(b) ? b : b == null ? [] : Ks(b);
  }), h, v;
  function w() {
    gg(
      v,
      h,
      a,
      f,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (h.length === 0 ? d ? Mi(d) : d = on(() => i(s)) : d !== null && Mo(d, () => {
      d = null;
    }));
  }
  Cr(() => {
    v ??= /** @type {Effect} */
    Pe, h = /** @type {V[]} */
    c(g);
    var b = h.length;
    if (p && b === 0)
      return;
    p = b === 0;
    let x = !1;
    if ($e) {
      var $ = du(s) === Zs;
      $ !== (b === 0) && (s = hs(), $t(s), Rt(!1), x = !0);
    }
    if ($e) {
      for (var S = null, E, D = 0; D < b; D++) {
        if (Oe.nodeType === Vr && /** @type {Comment} */
        Oe.data === Bs) {
          s = /** @type {Comment} */
          Oe, x = !0, Rt(!1);
          break;
        }
        var O = h[D], q = r(O, D);
        E = Uu(
          Oe,
          a,
          S,
          null,
          O,
          q,
          D,
          o,
          t,
          n
        ), a.items.set(q, E), S = E;
      }
      b > 0 && $t(hs());
    }
    $e ? b === 0 && i && (d = on(() => i(s))) : w(), x && Rt(!0), c(g);
  }), $e && (s = Oe);
}
function gg(e, t, n, r, o, i, s, a, l) {
  var u = (s & Wf) !== 0, d = (s & (Is | qs)) !== 0, p = t.length, f = n.items, g = n.first, h = g, v, w = null, b, x = [], $ = [], S, E, D, O;
  if (u)
    for (O = 0; O < p; O += 1)
      S = t[O], E = a(S, O), D = f.get(E), D !== void 0 && (D.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(D));
  for (O = 0; O < p; O += 1) {
    if (S = t[O], E = a(S, O), D = f.get(E), D === void 0) {
      var q = r.get(E);
      if (q !== void 0) {
        r.delete(E), f.set(E, q);
        var K = w ? w.next : h;
        gn(n, w, q), gn(n, q, K), Qi(q, K, o), w = q;
      } else {
        var J = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : o;
        w = Uu(
          J,
          n,
          w,
          w === null ? n.first : w.next,
          S,
          E,
          O,
          i,
          s,
          l
        );
      }
      f.set(E, w), x = [], $ = [], h = w.next;
      continue;
    }
    if (d && hg(D, S, O, s), (D.e.f & nn) !== 0 && (Mi(D.e), u && (D.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(D))), D !== h) {
      if (v !== void 0 && v.has(D)) {
        if (x.length < $.length) {
          var A = $[0], _;
          w = A.prev;
          var k = x[0], C = x[x.length - 1];
          for (_ = 0; _ < x.length; _ += 1)
            Qi(x[_], A, o);
          for (_ = 0; _ < $.length; _ += 1)
            v.delete($[_]);
          gn(n, k.prev, C.next), gn(n, w, k), gn(n, C, A), h = A, w = C, O -= 1, x = [], $ = [];
        } else
          v.delete(D), Qi(D, h, o), gn(n, D.prev, D.next), gn(n, D, w === null ? n.first : w.next), gn(n, w, D), w = D;
        continue;
      }
      for (x = [], $ = []; h !== null && h.k !== E; )
        (h.e.f & nn) === 0 && (v ??= /* @__PURE__ */ new Set()).add(h), $.push(h), h = h.next;
      if (h === null)
        continue;
      D = h;
    }
    x.push(D), w = D, h = D.next;
  }
  if (h !== null || v !== void 0) {
    for (var N = v === void 0 ? [] : Ks(v); h !== null; )
      (h.e.f & nn) === 0 && N.push(h), h = h.next;
    var P = N.length;
    if (P > 0) {
      var H = (s & ru) !== 0 && p === 0 ? o : null;
      if (u) {
        for (O = 0; O < P; O += 1)
          N[O].a?.measure();
        for (O = 0; O < P; O += 1)
          N[O].a?.fix();
      }
      pg(n, N, H);
    }
  }
  u && Do(() => {
    if (b !== void 0)
      for (D of b)
        D.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var Z of r.values())
    Tt(Z.e);
  r.clear();
}
function hg(e, t, n, r) {
  (r & Is) !== 0 && go(e.v, t), (r & qs) !== 0 ? go(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Uu(e, t, n, r, o, i, s, a, l, u, d) {
  var p = (l & Is) !== 0, f = (l & Gf) === 0, g = p ? f ? /* @__PURE__ */ Su(o, !1, !1) : hr(o) : o, h = (l & qs) === 0 ? s : hr(s), v = {
    i: h,
    v: g,
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
      w.append(e = rn());
    }
    return v.e = on(() => a(
      /** @type {Node} */
      e,
      g,
      h,
      u
    ), $e), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? d || (t.first = v) : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function Qi(e, t, n) {
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
      /* @__PURE__ */ En(i)
    );
    o.before(i), i = s;
  }
}
function gn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function la(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Se(() => {
    var a = (
      /** @type {Effect} */
      Pe
    );
    if (s === (s = t() ?? "")) {
      $e && Vn();
      return;
    }
    if (a.nodes_start !== null && (Au(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Oe.data;
        for (var l = Vn(), u = l; l !== null && (l.nodeType !== Vr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw No(), ur;
        Vt(Oe, u), i = $t(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = aa(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ dt(p)), Vt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ dt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ dt(p)
          );
      else
        i.before(p);
    }
  });
}
function ua(e, t, n) {
  $e && Vn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (Mo(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  Cr(() => {
    if (o !== (o = t())) {
      var u = Du();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = rn()), i && gt.skipped_effects.add(i)), a = on(() => n(d, o));
      }
      u ? gt.add_callback(l) : l();
    }
  }, Fr), $e && (r = Oe);
}
function vg(e, t, n, r, o, i) {
  let s = $e;
  $e && Vn();
  var a, l, u = null;
  $e && Oe.nodeType === fp && (u = /** @type {Element} */
  Oe, Vn());
  var d = (
    /** @type {TemplateNode} */
    $e ? Oe : e
  ), p;
  Cr(() => {
    const f = t() || null;
    var g = f === "svg" ? rp : null;
    f !== a && (p && (f === null ? Mo(p, () => {
      p = null, l = null;
    }) : f === l ? Mi(p) : Tt(p)), f && f !== l && (p = on(() => {
      if (u = $e ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Vt(u, u), r) {
        $e && lg(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          $e ? /* @__PURE__ */ dt(u) : u.appendChild(rn())
        );
        $e && (h === null ? Rt(!1) : $t(h)), r(u, h);
      }
      Pe.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, Fr), s && (Rt(!0), $t(d));
}
function Be(e, t) {
  Ur(() => {
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
function xt(e, t, n) {
  Ur(() => {
    var r = ht(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Lo(() => {
        var s = n();
        ia(s), o && pu(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function mg(e, t) {
  var n = void 0, r;
  Cr(() => {
    n !== (n = t()) && (r && (Tt(r), r = null), n && (r = on(() => {
      Ur(() => (
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
function yg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ju(e)) && (r && (r += " "), r += t);
  return r;
}
function In(e) {
  return typeof e == "object" ? yg(e) : e ?? "";
}
const tl = [...` 	
\r\f \v\uFEFF`];
function wg(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || tl.includes(r[s - 1])) && (a === r.length || tl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function nl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function es(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function bg(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(es)), o && l.push(...Object.keys(o).map(es));
      var u = 0, d = -1;
      const v = e.length;
      for (var p = 0; p < v; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === v - 1) {
            if (d !== -1) {
              var g = es(e.substring(u, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(u, p).trim();
                n += " " + h + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += nl(r)), o && (n += nl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function zt(e, t, n, r, o, i) {
  var s = e.__className;
  if ($e || s !== n || s === void 0) {
    var a = wg(n, r, i);
    (!$e || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ts(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function yt(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = bg(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ts(e, n?.[0], r[0]), ts(e, n?.[1], r[1], "important")) : ts(e, n, r));
  return r;
}
function Cs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Eo(t))
      return kp();
    for (var r of e.options)
      r.selected = t.includes(rl(r));
    return;
  }
  for (r of e.options) {
    var o = rl(r);
    if (Ip(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function xg(e) {
  var t = new MutationObserver(() => {
    Cs(e, e.__value);
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
  }), Lu(() => {
    t.disconnect();
  });
}
function rl(e) {
  return "__value" in e ? e.__value : e.value;
}
const Yn = Symbol("class"), vn = Symbol("style"), Qu = Symbol("is custom element"), ec = Symbol("is html");
function wn(e) {
  if ($e) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Op(n), Bp();
  }
}
function ri(e, t) {
  var n = zi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $s(e, t) {
  var n = zi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Cg(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ce(e, t, n, r) {
  var o = zi(e);
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[dp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $g(e, t, n, r, o = !1) {
  var i = zi(e), s = i[Qu], a = !i[ec];
  let l = $e && s;
  l && Rt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = In(n.class) : (r || n[Yn]) && (n.class = null), n[vn] && (n.style ??= null);
  var f = tc(e);
  for (const $ in n) {
    let S = n[$];
    if (d && $ === "value" && S == null) {
      e.value = e.__value = "", u[$] = S;
      continue;
    }
    if ($ === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      zt(e, g, S, r, t?.[Yn], n[Yn]), u[$] = S, u[Yn] = n[Yn];
      continue;
    }
    if ($ === "style") {
      yt(e, S, t?.[vn], n[vn]), u[$] = S, u[vn] = n[vn];
      continue;
    }
    var h = u[$];
    if (!(S === h && !(S === void 0 && e.hasAttribute($)))) {
      u[$] = S;
      var v = $[0] + $[1];
      if (v !== "$$")
        if (v === "on") {
          const E = {}, D = "$$" + $;
          let O = $.slice(2);
          var w = ng(O);
          if (eg(O) && (O = O.slice(0, -7), E.capture = !0), !w && h) {
            if (S != null) continue;
            e.removeEventListener(O, u[D], E), u[D] = null;
          }
          if (S != null)
            if (w)
              e[`__${O}`] = S, Rn([O]);
            else {
              let q = function(K) {
                u[$].call(this, K);
              };
              u[D] = sa(O, e, q, E);
            }
          else w && (e[`__${O}`] = void 0);
        } else if ($ === "style")
          Ce(e, $, S);
        else if ($ === "autofocus")
          qp(
            /** @type {HTMLElement} */
            e,
            !!S
          );
        else if (!s && ($ === "__value" || $ === "value" && S != null))
          e.value = e.__value = S;
        else if ($ === "selected" && d)
          Cg(
            /** @type {HTMLOptionElement} */
            e,
            S
          );
        else {
          var b = $;
          a || (b = og(b));
          var x = b === "defaultValue" || b === "defaultChecked";
          if (S == null && !s && !x)
            if (i[$] = null, b === "value" || b === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const D = t === void 0;
              if (b === "value") {
                let O = E.defaultValue;
                E.removeAttribute(b), E.defaultValue = O, E.value = E.__value = D ? O : null;
              } else {
                let O = E.defaultChecked;
                E.removeAttribute(b), E.defaultChecked = O, E.checked = D ? O : !1;
              }
            } else
              e.removeAttribute($);
          else x || f.includes(b) && (s || typeof S != "string") ? (e[b] = S, b in i && (i[b] = pt)) : typeof S != "function" && Ce(e, b, S);
        }
    }
  }
  return l && Rt(!0), u;
}
function ft(e, t, n = [], r = [], o, i = !1) {
  Cu(n, r, (s) => {
    var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
    if (Cr(() => {
      var f = t(...s.map(c)), g = $g(e, a, f, o, i);
      d && u && "value" in f && Cs(
        /** @type {HTMLSelectElement} */
        e,
        f.value
      );
      for (let v of Object.getOwnPropertySymbols(l))
        f[v] || Tt(l[v]);
      for (let v of Object.getOwnPropertySymbols(f)) {
        var h = f[v];
        v.description === op && (!a || h !== a[v]) && (l[v] && Tt(l[v]), l[v] = on(() => mg(e, () => h))), g[v] = h;
      }
      a = g;
    }), u) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ur(() => {
        Cs(
          p,
          /** @type {Record<string | symbol, any>} */
          a.value,
          !0
        ), xg(p);
      });
    }
    d = !0;
  });
}
function zi(e) {
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
    o = Di(o);
  }
  return n;
}
class ca {
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
    return r.add(n), this.#t.set(t, r), this.#o().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #o() {
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
var kg = /* @__PURE__ */ new ca({
  box: "border-box"
});
function il(e, t, n) {
  var r = kg.observe(e, () => n(e[t]));
  Ur(() => (ht(() => n(e[t])), r));
}
function sl(e, t) {
  return e === t || e?.[yn] === t;
}
function Zt(e = {}, t, n, r) {
  return Ur(() => {
    var o, i;
    return Lo(() => {
      o = i, i = [], ht(() => {
        e !== n(...i) && (t(e, ...i), o && sl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Do(() => {
        i && sl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function nc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ge
  ), n = t.l.u;
  if (!n) return;
  let r = () => ia(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Oo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Hu(() => {
    al(t, r), di(n.b);
  }), tt(() => {
    const o = ht(() => n.m.map(lp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && tt(() => {
    al(t, r), di(n.a);
  });
}
function al(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Fo = !1;
function _g(e) {
  var t = Fo;
  try {
    return Fo = !1, [e(), Fo];
  } finally {
    Fo = t;
  }
}
const Sg = {
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
function je(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Sg
  );
}
const Eg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Pe;
      try {
        kn(e.parent_effect), e.special[t] = y(
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
        kn(r);
      }
    }
    return e.special[t](n), Xa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Xa(e.version)), !0;
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
      version: hr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Pe
      )
    },
    Eg
  );
}
const Pg = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (no(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      no(o) && (o = o());
      const i = Mn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (no(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Mn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === yn || t === Fs) return !1;
    for (let n of e.props)
      if (no(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (no(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Fe(...e) {
  return new Proxy({ props: e }, Pg);
}
function y(e, t, n, r) {
  var o = !Gr || (n & Jf) !== 0, i = (n & Qf) !== 0, s = (n & ep) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? ht(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = yn in e || Fs in e;
    d = Mn(e, t)?.set ?? (p && t in e ? ($) => e[t] = $ : void 0);
  }
  var f, g = !1;
  i ? [f, g] = _g(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && bp(), d(f)));
  var h;
  if (o ? h = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? u() : (l = !0, $);
  } : h = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ !== void 0 && (a = /** @type {V} */
    void 0), $ === void 0 ? a : $;
  }, o && (n & ou) === 0)
    return h;
  if (d) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function($, S) {
        return arguments.length > 0 ? ((!o || !S || v || g) && d(S ? h() : $), $) : h();
      }
    );
  }
  var w = !1, b = ((n & Uf) !== 0 ? Oo : Qs)(() => (w = !1, h()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function($, S) {
      if (arguments.length > 0) {
        const E = S ? c(b) : o && i ? Ft($) : $;
        return U(b, E), w = !0, a !== void 0 && (a = E), $;
      }
      return $r && w || (x.f & xr) !== 0 ? b.v : c(b);
    }
  );
}
function Ng(e) {
  return new Tg(e);
}
class Tg {
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
          return s === Fs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return U(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? ug : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Hr(this, i, {
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
      cg(this.#e);
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
          r !== "default" && (i.name = r), L(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Dg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = oi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Ng({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ra(() => {
        Lo(() => {
          this.$$r = !0;
          for (const r of ci(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = oi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = oi(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return ci(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function oi(e, t, n, r) {
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
function Dg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let s = class extends rc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ci(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ci(t).forEach((a) => {
    Hr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = oi(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Mn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Hr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Og = { value: () => {
} };
function Ai() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ii(n);
}
function ii(e) {
  this._ = e;
}
function Lg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ii.prototype = Ai.prototype = {
  constructor: ii,
  on: function(e, t) {
    var n = this._, r = Lg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Mg(n[o], e.name))) return o;
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
    return new ii(e);
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
function Mg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ul(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Og, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ks = "http://www.w3.org/1999/xhtml";
const cl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ks,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ri(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), cl.hasOwnProperty(t) ? { space: cl[t], local: e } : e;
}
function Hg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ks && t.documentElement.namespaceURI === ks ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Vg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function oc(e) {
  var t = Ri(e);
  return (t.local ? Vg : Hg)(t);
}
function zg() {
}
function da(e) {
  return e == null ? zg : function() {
    return this.querySelector(e);
  };
}
function Ag(e) {
  typeof e != "function" && (e = da(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Bt(r, this._parents);
}
function Rg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ig() {
  return [];
}
function ic(e) {
  return e == null ? Ig : function() {
    return this.querySelectorAll(e);
  };
}
function qg(e) {
  return function() {
    return Rg(e.apply(this, arguments));
  };
}
function Zg(e) {
  typeof e == "function" ? e = qg(e) : e = ic(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Bt(r, o);
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
var Bg = Array.prototype.find;
function Kg(e) {
  return function() {
    return Bg.call(this.children, e);
  };
}
function jg() {
  return this.firstElementChild;
}
function Yg(e) {
  return this.select(e == null ? jg : Kg(typeof e == "function" ? e : ac(e)));
}
var Xg = Array.prototype.filter;
function Fg() {
  return Array.from(this.children);
}
function Wg(e) {
  return function() {
    return Xg.call(this.children, e);
  };
}
function Gg(e) {
  return this.selectAll(e == null ? Fg : Wg(typeof e == "function" ? e : ac(e)));
}
function Ug(e) {
  typeof e != "function" && (e = sc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Bt(r, this._parents);
}
function lc(e) {
  return new Array(e.length);
}
function Jg() {
  return new Bt(this._enter || this._groups.map(lc), this._parents);
}
function vi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
vi.prototype = {
  constructor: vi,
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
function Qg(e) {
  return function() {
    return e;
  };
}
function eh(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new vi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function th(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new vi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function nh(e) {
  return e.__data__;
}
function rh(e, t) {
  if (!arguments.length) return Array.from(this, nh);
  var n = t ? th : eh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Qg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = oh(e.call(d, d && d.__data__, u, r)), h = g.length, v = a[u] = new Array(h), w = s[u] = new Array(h), b = l[u] = new Array(f);
    n(d, p, v, w, b, g, t);
    for (var x = 0, $ = 0, S, E; x < h; ++x)
      if (S = v[x]) {
        for (x >= $ && ($ = x + 1); !(E = w[$]) && ++$ < h; ) ;
        S._next = E || null;
      }
  }
  return s = new Bt(s, r), s._enter = a, s._exit = l, s;
}
function oh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ih() {
  return new Bt(this._exit || this._groups.map(lc), this._parents);
}
function sh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function ah(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Bt(a, this._parents);
}
function lh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function uh(e) {
  e || (e = ch);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Bt(o, this._parents).order();
}
function ch(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function fh() {
  return Array.from(this);
}
function ph() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function gh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function hh() {
  return !this.node();
}
function vh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function mh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function yh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function bh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ch(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function $h(e, t) {
  var n = Ri(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? yh : mh : typeof t == "function" ? n.local ? Ch : xh : n.local ? bh : wh)(n, t));
}
function uc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function kh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function _h(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Sh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Eh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? kh : typeof t == "function" ? Sh : _h)(e, t, n ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || uc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ph(e) {
  return function() {
    delete this[e];
  };
}
function Nh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Th(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Dh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ph : typeof t == "function" ? Th : Nh)(e, t)) : this.node()[e];
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
function Oh(e) {
  return function() {
    fc(this, e);
  };
}
function Lh(e) {
  return function() {
    pc(this, e);
  };
}
function Mh(e, t) {
  return function() {
    (t.apply(this, arguments) ? fc : pc)(this, e);
  };
}
function Hh(e, t) {
  var n = cc(e + "");
  if (arguments.length < 2) {
    for (var r = fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Mh : t ? Oh : Lh)(n, t));
}
function Vh() {
  this.textContent = "";
}
function zh(e) {
  return function() {
    this.textContent = e;
  };
}
function Ah(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Rh(e) {
  return arguments.length ? this.each(e == null ? Vh : (typeof e == "function" ? Ah : zh)(e)) : this.node().textContent;
}
function Ih() {
  this.innerHTML = "";
}
function qh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Zh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Bh(e) {
  return arguments.length ? this.each(e == null ? Ih : (typeof e == "function" ? Zh : qh)(e)) : this.node().innerHTML;
}
function Kh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jh() {
  return this.each(Kh);
}
function Yh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xh() {
  return this.each(Yh);
}
function Fh(e) {
  var t = typeof e == "function" ? e : oc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Wh() {
  return null;
}
function Gh(e, t) {
  var n = typeof e == "function" ? e : oc(e), r = t == null ? Wh : typeof t == "function" ? t : da(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Uh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Jh() {
  return this.each(Uh);
}
function Qh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ev() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function tv(e) {
  return this.select(e ? ev : Qh);
}
function nv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function rv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function ov(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function iv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function sv(e, t, n) {
  return function() {
    var r = this.__on, o, i = rv(t);
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
function av(e, t, n) {
  var r = ov(e + ""), o, i = r.length, s;
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
  for (a = t ? sv : iv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function gc(e, t, n) {
  var r = uc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function lv(e, t) {
  return function() {
    return gc(this, e, t);
  };
}
function uv(e, t) {
  return function() {
    return gc(this, e, t.apply(this, arguments));
  };
}
function cv(e, t) {
  return this.each((typeof t == "function" ? uv : lv)(e, t));
}
function* dv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var hc = [null];
function Bt(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Bt([[document.documentElement]], hc);
}
function fv() {
  return this;
}
Bt.prototype = Ho.prototype = {
  constructor: Bt,
  select: Ag,
  selectAll: Zg,
  selectChild: Yg,
  selectChildren: Gg,
  filter: Ug,
  data: rh,
  enter: Jg,
  exit: ih,
  join: sh,
  merge: ah,
  selection: fv,
  order: lh,
  sort: uh,
  call: dh,
  nodes: fh,
  node: ph,
  size: gh,
  empty: hh,
  each: vh,
  attr: $h,
  style: Eh,
  property: Dh,
  classed: Hh,
  text: Rh,
  html: Bh,
  raise: jh,
  lower: Xh,
  append: Fh,
  insert: Gh,
  remove: Jh,
  clone: tv,
  datum: nv,
  on: av,
  dispatch: cv,
  [Symbol.iterator]: dv
};
function Xt(e) {
  return typeof e == "string" ? new Bt([[document.querySelector(e)]], [document.documentElement]) : new Bt([[e]], hc);
}
function pv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Qt(e, t) {
  if (e = pv(e), t === void 0 && (t = e.currentTarget), t) {
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
const gv = { passive: !1 }, vo = { capture: !0, passive: !1 };
function ns(e) {
  e.stopImmediatePropagation();
}
function Dr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = Xt(e).on("dragstart.drag", Dr, vo);
  "onselectstart" in t ? n.on("selectstart.drag", Dr, vo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function mc(e, t) {
  var n = e.document.documentElement, r = Xt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Dr, vo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Wo = (e) => () => e;
function _s(e, {
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
_s.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function hv(e) {
  return !e.ctrlKey && !e.button;
}
function vv() {
  return this.parentNode;
}
function mv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function yv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function wv() {
  var e = hv, t = vv, n = mv, r = yv, o = {}, i = Ai("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(S) {
    S.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, gv).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(S, E) {
    if (!(d || !e.call(this, S, E))) {
      var D = $(this, t.call(this, S, E), S, E, "mouse");
      D && (Xt(S.view).on("mousemove.drag", h, vo).on("mouseup.drag", v, vo), vc(S.view), ns(S), u = !1, a = S.clientX, l = S.clientY, D("start", S));
    }
  }
  function h(S) {
    if (Dr(S), !u) {
      var E = S.clientX - a, D = S.clientY - l;
      u = E * E + D * D > p;
    }
    o.mouse("drag", S);
  }
  function v(S) {
    Xt(S.view).on("mousemove.drag mouseup.drag", null), mc(S.view, u), Dr(S), o.mouse("end", S);
  }
  function w(S, E) {
    if (e.call(this, S, E)) {
      var D = S.changedTouches, O = t.call(this, S, E), q = D.length, K, J;
      for (K = 0; K < q; ++K)
        (J = $(this, O, S, E, D[K].identifier, D[K])) && (ns(S), J("start", S, D[K]));
    }
  }
  function b(S) {
    var E = S.changedTouches, D = E.length, O, q;
    for (O = 0; O < D; ++O)
      (q = o[E[O].identifier]) && (Dr(S), q("drag", S, E[O]));
  }
  function x(S) {
    var E = S.changedTouches, D = E.length, O, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < D; ++O)
      (q = o[E[O].identifier]) && (ns(S), q("end", S, E[O]));
  }
  function $(S, E, D, O, q, K) {
    var J = i.copy(), A = Qt(K || D, E), _, k, C;
    if ((C = n.call(S, new _s("beforestart", {
      sourceEvent: D,
      target: f,
      identifier: q,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), O)) != null)
      return _ = C.x - A[0] || 0, k = C.y - A[1] || 0, function N(P, H, Z) {
        var Y = A, M;
        switch (P) {
          case "start":
            o[q] = N, M = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            A = Qt(Z || H, E), M = s;
            break;
        }
        J.call(
          P,
          S,
          new _s(P, {
            sourceEvent: H,
            subject: C,
            target: f,
            identifier: q,
            active: M,
            x: A[0] + _,
            y: A[1] + k,
            dx: A[0] - Y[0],
            dy: A[1] - Y[1],
            dispatch: J
          }),
          O
        );
      };
  }
  return f.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Wo(!!S), f) : e;
  }, f.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Wo(S), f) : t;
  }, f.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : Wo(S), f) : n;
  }, f.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Wo(!!S), f) : r;
  }, f.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? f : S;
  }, f.clickDistance = function(S) {
    return arguments.length ? (p = (S = +S) * S, f) : Math.sqrt(p);
  }, f;
}
function pa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function yc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Vo() {
}
var mo = 0.7, mi = 1 / mo, Or = "\\s*([+-]?\\d+)\\s*", yo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bv = /^#([0-9a-f]{3,8})$/, xv = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`), Cv = new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`), $v = new RegExp(`^rgba\\(${Or},${Or},${Or},${yo}\\)$`), kv = new RegExp(`^rgba\\(${bn},${bn},${bn},${yo}\\)$`), _v = new RegExp(`^hsl\\(${yo},${bn},${bn}\\)$`), Sv = new RegExp(`^hsla\\(${yo},${bn},${bn},${yo}\\)$`), dl = {
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
pa(Vo, vr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fl,
  // Deprecated! Use color.formatHex.
  formatHex: fl,
  formatHex8: Ev,
  formatHsl: Pv,
  formatRgb: pl,
  toString: pl
});
function fl() {
  return this.rgb().formatHex();
}
function Ev() {
  return this.rgb().formatHex8();
}
function Pv() {
  return wc(this).formatHsl();
}
function pl() {
  return this.rgb().formatRgb();
}
function vr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = bv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? gl(t) : n === 3 ? new Lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Go(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Go(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = xv.exec(e)) ? new Lt(t[1], t[2], t[3], 1) : (t = Cv.exec(e)) ? new Lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $v.exec(e)) ? Go(t[1], t[2], t[3], t[4]) : (t = kv.exec(e)) ? Go(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = _v.exec(e)) ? ml(t[1], t[2] / 100, t[3] / 100, 1) : (t = Sv.exec(e)) ? ml(t[1], t[2] / 100, t[3] / 100, t[4]) : dl.hasOwnProperty(e) ? gl(dl[e]) : e === "transparent" ? new Lt(NaN, NaN, NaN, 0) : null;
}
function gl(e) {
  return new Lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Go(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Lt(e, t, n, r);
}
function Nv(e) {
  return e instanceof Vo || (e = vr(e)), e ? (e = e.rgb(), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt();
}
function Ss(e, t, n, r) {
  return arguments.length === 1 ? Nv(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
pa(Lt, Ss, yc(Vo, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mo : Math.pow(mo, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Lt(fr(this.r), fr(this.g), fr(this.b), yi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: hl,
  // Deprecated! Use color.formatHex.
  formatHex: hl,
  formatHex8: Tv,
  formatRgb: vl,
  toString: vl
}));
function hl() {
  return `#${ar(this.r)}${ar(this.g)}${ar(this.b)}`;
}
function Tv() {
  return `#${ar(this.r)}${ar(this.g)}${ar(this.b)}${ar((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vl() {
  const e = yi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fr(this.r)}, ${fr(this.g)}, ${fr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function yi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ar(e) {
  return e = fr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ml(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new tn(e, t, n, r);
}
function wc(e) {
  if (e instanceof tn) return new tn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vo || (e = vr(e)), !e) return new tn();
  if (e instanceof tn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new tn(s, a, l, e.opacity);
}
function Dv(e, t, n, r) {
  return arguments.length === 1 ? wc(e) : new tn(e, t, n, r ?? 1);
}
function tn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
pa(tn, Dv, yc(Vo, {
  brighter(e) {
    return e = e == null ? mi : Math.pow(mi, e), new tn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mo : Math.pow(mo, e), new tn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Lt(
      rs(e >= 240 ? e - 240 : e + 120, o, r),
      rs(e, o, r),
      rs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new tn(yl(this.h), Uo(this.s), Uo(this.l), yi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${yl(this.h)}, ${Uo(this.s) * 100}%, ${Uo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function yl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Uo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ga = (e) => () => e;
function Ov(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Lv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Mv(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? Lv(t, n, e) : ga(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? Ov(e, n) : ga(isNaN(e) ? t : e);
}
const wi = function e(t) {
  var n = Mv(t);
  function r(o, i) {
    var s = n((o = Ss(o)).r, (i = Ss(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = bc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Hv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Vv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function zv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = co(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Av(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function hn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Rv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = co(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Es = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, os = new RegExp(Es.source, "g");
function Iv(e) {
  return function() {
    return e;
  };
}
function qv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function xc(e, t) {
  var n = Es.lastIndex = os.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Es.exec(e)) && (o = os.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: hn(r, o) })), n = os.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? qv(l[0].x) : Iv(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function co(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ga(t) : (n === "number" ? hn : n === "string" ? (r = vr(t)) ? (t = r, wi) : xc : t instanceof vr ? wi : t instanceof Date ? Av : Vv(t) ? Hv : Array.isArray(t) ? zv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rv : hn)(e, t);
}
var wl = 180 / Math.PI, Cc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $c(e, t, n, r, o, i) {
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
var Jo;
function Zv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Cc : $c(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Bv(e) {
  return e == null || (Jo || (Jo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jo.setAttribute("transform", e), !(e = Jo.transform.baseVal.consolidate())) ? Cc : (e = e.matrix, $c(e.a, e.b, e.c, e.d, e.e, e.f));
}
function kc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push("translate(", null, t, null, n);
      h.push({ i: v - 4, x: hn(u, p) }, { i: v - 2, x: hn(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: hn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: hn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: v - 4, x: hn(u, p) }, { i: v - 2, x: hn(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, v = f.length, w; ++h < v; ) p[(w = f[h]).i] = w.x(g);
      return p.join("");
    };
  };
}
var Kv = kc(Zv, "px, ", "px)", "deg)"), jv = kc(Bv, ", ", ")", ")"), Yv = 1e-12;
function bl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Xv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Fv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const si = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, v = g * g + h * h, w, b;
    if (v < Yv)
      b = Math.log(f / u) / t, w = function(O) {
        return [
          a + O * g,
          l + O * h,
          u * Math.exp(t * O * b)
        ];
      };
    else {
      var x = Math.sqrt(v), $ = (f * f - u * u + r * v) / (2 * u * n * x), S = (f * f - u * u - r * v) / (2 * f * n * x), E = Math.log(Math.sqrt($ * $ + 1) - $), D = Math.log(Math.sqrt(S * S + 1) - S);
      b = (D - E) / t, w = function(O) {
        var q = O * b, K = bl(E), J = u / (n * x) * (K * Fv(t * q + E) - Xv(E));
        return [
          a + J * g,
          l + J * h,
          u * K / bl(t * q + E)
        ];
      };
    }
    return w.duration = b * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var qr = 0, so = 0, ro = 0, _c = 1e3, bi, ao, xi = 0, mr = 0, Ii = 0, wo = typeof performance == "object" && performance.now ? performance : Date, Sc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ha() {
  return mr || (Sc(Wv), mr = wo.now() + Ii);
}
function Wv() {
  mr = 0;
}
function Ci() {
  this._call = this._time = this._next = null;
}
Ci.prototype = Ec.prototype = {
  constructor: Ci,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ha() : +n) + (t == null ? 0 : +t), !this._next && ao !== this && (ao ? ao._next = this : bi = this, ao = this), this._call = e, this._time = n, Ps();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ps());
  }
};
function Ec(e, t, n) {
  var r = new Ci();
  return r.restart(e, t, n), r;
}
function Gv() {
  ha(), ++qr;
  for (var e = bi, t; e; )
    (t = mr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --qr;
}
function xl() {
  mr = (xi = wo.now()) + Ii, qr = so = 0;
  try {
    Gv();
  } finally {
    qr = 0, Jv(), mr = 0;
  }
}
function Uv() {
  var e = wo.now(), t = e - xi;
  t > _c && (Ii -= t, xi = e);
}
function Jv() {
  for (var e, t = bi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : bi = n);
  ao = e, Ps(r);
}
function Ps(e) {
  if (!qr) {
    so && (so = clearTimeout(so));
    var t = e - mr;
    t > 24 ? (e < 1 / 0 && (so = setTimeout(xl, e - wo.now() - Ii)), ro && (ro = clearInterval(ro))) : (ro || (xi = wo.now(), ro = setInterval(Uv, _c)), qr = 1, Sc(xl));
  }
}
function Cl(e, t, n) {
  var r = new Ci();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Qv = Ai("start", "end", "cancel", "interrupt"), e1 = [], Pc = 0, $l = 1, Ns = 2, ai = 3, kl = 4, Ts = 5, li = 6;
function qi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  t1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Qv,
    tween: e1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Pc
  });
}
function va(e, t) {
  var n = un(e, t);
  if (n.state > Pc) throw new Error("too late; already scheduled");
  return n;
}
function Pn(e, t) {
  var n = un(e, t);
  if (n.state > ai) throw new Error("too late; already running");
  return n;
}
function un(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function t1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ec(i, 0, n.time);
  function i(u) {
    n.state = $l, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== $l) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === ai) return Cl(s);
        g.state === kl ? (g.state = li, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = li, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Cl(function() {
      n.state === ai && (n.state = kl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ns, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ns) {
      for (n.state = ai, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ts, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Ts && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = li, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ui(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ns && r.state < Ts, r.state = li, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function n1(e) {
  return this.each(function() {
    ui(this, e);
  });
}
function r1(e, t) {
  var n, r;
  return function() {
    var o = Pn(this, e), i = o.tween;
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
function o1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Pn(this, e), s = i.tween;
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
function i1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = un(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? r1 : o1)(n, e, t));
}
function ma(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Pn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return un(o, r).value[t];
  };
}
function Nc(e, t) {
  var n;
  return (typeof t == "number" ? hn : t instanceof vr ? wi : (n = vr(t)) ? (t = n, wi) : xc)(e, t);
}
function s1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function a1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function l1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function u1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function c1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function d1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function f1(e, t) {
  var n = Ri(e), r = n === "transform" ? jv : Nc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? d1 : c1)(n, r, ma(this, "attr." + e, t)) : t == null ? (n.local ? a1 : s1)(n) : (n.local ? u1 : l1)(n, r, t));
}
function p1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function g1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function h1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && g1(e, i)), n;
  }
  return o._value = t, o;
}
function v1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && p1(e, i)), n;
  }
  return o._value = t, o;
}
function m1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ri(e);
  return this.tween(n, (r.local ? h1 : v1)(r, t));
}
function y1(e, t) {
  return function() {
    va(this, e).delay = +t.apply(this, arguments);
  };
}
function w1(e, t) {
  return t = +t, function() {
    va(this, e).delay = t;
  };
}
function b1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? y1 : w1)(t, e)) : un(this.node(), t).delay;
}
function x1(e, t) {
  return function() {
    Pn(this, e).duration = +t.apply(this, arguments);
  };
}
function C1(e, t) {
  return t = +t, function() {
    Pn(this, e).duration = t;
  };
}
function $1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? x1 : C1)(t, e)) : un(this.node(), t).duration;
}
function k1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Pn(this, e).ease = t;
  };
}
function _1(e) {
  var t = this._id;
  return arguments.length ? this.each(k1(t, e)) : un(this.node(), t).ease;
}
function S1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Pn(this, e).ease = n;
  };
}
function E1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(S1(this._id, e));
}
function P1(e) {
  typeof e != "function" && (e = sc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new zn(r, this._parents, this._name, this._id);
}
function N1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new zn(s, this._parents, this._name, this._id);
}
function T1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function D1(e, t, n) {
  var r, o, i = T1(t) ? va : Pn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function O1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? un(this.node(), n).on.on(e) : this.each(D1(n, e, t));
}
function L1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function M1() {
  return this.on("end.remove", L1(this._id));
}
function H1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = da(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, qi(u[f], t, n, f, u, un(d, n)));
  return new zn(i, this._parents, t, n);
}
function V1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ic(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = un(d, n), v = 0, w = f.length; v < w; ++v)
          (g = f[v]) && qi(g, t, n, v, f, h);
        i.push(f), s.push(d);
      }
  return new zn(i, s, t, n);
}
var z1 = Ho.prototype.constructor;
function A1() {
  return new z1(this._groups, this._parents);
}
function R1(e, t) {
  var n, r, o;
  return function() {
    var i = Ir(this, e), s = (this.style.removeProperty(e), Ir(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Tc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function I1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ir(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function q1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ir(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Z1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Pn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Tc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function B1(e, t, n) {
  var r = (e += "") == "transform" ? Kv : Nc;
  return t == null ? this.styleTween(e, R1(e, r)).on("end.style." + e, Tc(e)) : typeof t == "function" ? this.styleTween(e, q1(e, r, ma(this, "style." + e, t))).each(Z1(this._id, e)) : this.styleTween(e, I1(e, r, t), n).on("end.style." + e, null);
}
function K1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function j1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && K1(e, s, n)), r;
  }
  return i._value = t, i;
}
function Y1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, j1(e, t, n ?? ""));
}
function X1(e) {
  return function() {
    this.textContent = e;
  };
}
function F1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function W1(e) {
  return this.tween("text", typeof e == "function" ? F1(ma(this, "text", e)) : X1(e == null ? "" : e + ""));
}
function G1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function U1(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && G1(o)), t;
  }
  return r._value = e, r;
}
function J1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, U1(e));
}
function Q1() {
  for (var e = this._name, t = this._id, n = Dc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = un(l, t);
        qi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new zn(r, this._parents, e, n);
}
function e0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Pn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var t0 = 0;
function zn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Dc() {
  return ++t0;
}
var Nn = Ho.prototype;
zn.prototype = {
  constructor: zn,
  select: H1,
  selectAll: V1,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: P1,
  merge: N1,
  selection: A1,
  transition: Q1,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: O1,
  attr: f1,
  attrTween: m1,
  style: B1,
  styleTween: Y1,
  text: W1,
  textTween: J1,
  remove: M1,
  tween: i1,
  delay: b1,
  duration: $1,
  ease: _1,
  easeVarying: E1,
  end: e0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function n0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var r0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: n0
};
function o0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function i0(e) {
  var t, n;
  e instanceof zn ? (t = e._id, e = e._name) : (t = Dc(), (n = r0).time = ha(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && qi(l, e, t, u, s, n || o0(l, t));
  return new zn(r, this._parents, e, t);
}
Ho.prototype.interrupt = n1;
Ho.prototype.transition = i0;
const Qo = (e) => () => e;
function s0(e, {
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
function Dn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Dn.prototype = {
  constructor: Dn,
  scale: function(e) {
    return e === 1 ? this : new Dn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Dn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Zi = new Dn(1, 0, 0);
Oc.prototype = Dn.prototype;
function Oc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Zi;
  return e.__zoom;
}
function is(e) {
  e.stopImmediatePropagation();
}
function oo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function a0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function l0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function _l() {
  return this.__zoom || Zi;
}
function u0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function c0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function d0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Lc() {
  var e = a0, t = l0, n = d0, r = u0, o = c0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = si, u = Ai("start", "zoom", "end"), d, p, f, g = 500, h = 150, v = 0, w = 10;
  function b(C) {
    C.property("__zoom", _l).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", K).on("dblclick.zoom", J).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(C, N, P, H) {
    var Z = C.selection ? C.selection() : C;
    Z.property("__zoom", _l), C !== Z ? E(C, N, P, H) : Z.interrupt().each(function() {
      D(this, arguments).event(H).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, b.scaleBy = function(C, N, P, H) {
    b.scaleTo(C, function() {
      var Z = this.__zoom.k, Y = typeof N == "function" ? N.apply(this, arguments) : N;
      return Z * Y;
    }, P, H);
  }, b.scaleTo = function(C, N, P, H) {
    b.transform(C, function() {
      var Z = t.apply(this, arguments), Y = this.__zoom, M = P == null ? S(Z) : typeof P == "function" ? P.apply(this, arguments) : P, X = Y.invert(M), te = typeof N == "function" ? N.apply(this, arguments) : N;
      return n($(x(Y, te), M, X), Z, s);
    }, P, H);
  }, b.translateBy = function(C, N, P, H) {
    b.transform(C, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, H);
  }, b.translateTo = function(C, N, P, H, Z) {
    b.transform(C, function() {
      var Y = t.apply(this, arguments), M = this.__zoom, X = H == null ? S(Y) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Zi.translate(X[0], X[1]).scale(M.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), Y, s);
    }, H, Z);
  };
  function x(C, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === C.k ? C : new Dn(N, C.x, C.y);
  }
  function $(C, N, P) {
    var H = N[0] - P[0] * C.k, Z = N[1] - P[1] * C.k;
    return H === C.x && Z === C.y ? C : new Dn(C.k, H, Z);
  }
  function S(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function E(C, N, P, H) {
    C.on("start.zoom", function() {
      D(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var Z = this, Y = arguments, M = D(Z, Y).event(H), X = t.apply(Z, Y), te = P == null ? S(X) : typeof P == "function" ? P.apply(Z, Y) : P, oe = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), j = Z.__zoom, G = typeof N == "function" ? N.apply(Z, Y) : N, F = l(j.invert(te).concat(oe / j.k), G.invert(te).concat(oe / G.k));
      return function(se) {
        if (se === 1) se = G;
        else {
          var W = F(se), ye = oe / W[2];
          se = new Dn(ye, te[0] - W[0] * ye, te[1] - W[1] * ye);
        }
        M.zoom(null, se);
      };
    });
  }
  function D(C, N, P) {
    return !P && C.__zooming || new O(C, N);
  }
  function O(C, N) {
    this.that = C, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, N), this.taps = 0;
  }
  O.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, N) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var N = Xt(this.that).datum();
      u.call(
        C,
        this.that,
        new s0(C, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function q(C, ...N) {
    if (!e.apply(this, arguments)) return;
    var P = D(this, N).event(C), H = this.__zoom, Z = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), Y = Qt(C);
    if (P.wheel)
      (P.mouse[0][0] !== Y[0] || P.mouse[0][1] !== Y[1]) && (P.mouse[1] = H.invert(P.mouse[0] = Y)), clearTimeout(P.wheel);
    else {
      if (H.k === Z) return;
      P.mouse = [Y, H.invert(Y)], ui(this), P.start();
    }
    oo(C), P.wheel = setTimeout(M, h), P.zoom("mouse", n($(x(H, Z), P.mouse[0], P.mouse[1]), P.extent, s));
    function M() {
      P.wheel = null, P.end();
    }
  }
  function K(C, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var P = C.currentTarget, H = D(this, N, !0).event(C), Z = Xt(C.view).on("mousemove.zoom", te, !0).on("mouseup.zoom", oe, !0), Y = Qt(C, P), M = C.clientX, X = C.clientY;
    vc(C.view), is(C), H.mouse = [Y, this.__zoom.invert(Y)], ui(this), H.start();
    function te(j) {
      if (oo(j), !H.moved) {
        var G = j.clientX - M, F = j.clientY - X;
        H.moved = G * G + F * F > v;
      }
      H.event(j).zoom("mouse", n($(H.that.__zoom, H.mouse[0] = Qt(j, P), H.mouse[1]), H.extent, s));
    }
    function oe(j) {
      Z.on("mousemove.zoom mouseup.zoom", null), mc(j.view, H.moved), oo(j), H.event(j).end();
    }
  }
  function J(C, ...N) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, H = Qt(C.changedTouches ? C.changedTouches[0] : C, this), Z = P.invert(H), Y = P.k * (C.shiftKey ? 0.5 : 2), M = n($(x(P, Y), H, Z), t.apply(this, N), s);
      oo(C), a > 0 ? Xt(this).transition().duration(a).call(E, M, H, C) : Xt(this).call(b.transform, M, H, C);
    }
  }
  function A(C, ...N) {
    if (e.apply(this, arguments)) {
      var P = C.touches, H = P.length, Z = D(this, N, C.changedTouches.length === H).event(C), Y, M, X, te;
      for (is(C), M = 0; M < H; ++M)
        X = P[M], te = Qt(X, this), te = [te, this.__zoom.invert(te), X.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== te[2] && (Z.touch1 = te, Z.taps = 0) : (Z.touch0 = te, Y = !0, Z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), Y && (Z.taps < 2 && (p = te[0], d = setTimeout(function() {
        d = null;
      }, g)), ui(this), Z.start());
    }
  }
  function _(C, ...N) {
    if (this.__zooming) {
      var P = D(this, N).event(C), H = C.changedTouches, Z = H.length, Y, M, X, te;
      for (oo(C), Y = 0; Y < Z; ++Y)
        M = H[Y], X = Qt(M, this), P.touch0 && P.touch0[2] === M.identifier ? P.touch0[0] = X : P.touch1 && P.touch1[2] === M.identifier && (P.touch1[0] = X);
      if (M = P.that.__zoom, P.touch1) {
        var oe = P.touch0[0], j = P.touch0[1], G = P.touch1[0], F = P.touch1[1], se = (se = G[0] - oe[0]) * se + (se = G[1] - oe[1]) * se, W = (W = F[0] - j[0]) * W + (W = F[1] - j[1]) * W;
        M = x(M, Math.sqrt(se / W)), X = [(oe[0] + G[0]) / 2, (oe[1] + G[1]) / 2], te = [(j[0] + F[0]) / 2, (j[1] + F[1]) / 2];
      } else if (P.touch0) X = P.touch0[0], te = P.touch0[1];
      else return;
      P.zoom("touch", n($(M, X, te), P.extent, s));
    }
  }
  function k(C, ...N) {
    if (this.__zooming) {
      var P = D(this, N).event(C), H = C.changedTouches, Z = H.length, Y, M;
      for (is(C), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), Y = 0; Y < Z; ++Y)
        M = H[Y], P.touch0 && P.touch0[2] === M.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === M.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (M = Qt(M, this), Math.hypot(p[0] - M[0], p[1] - M[1]) < w)) {
        var X = Xt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Qo(+C), b) : r;
  }, b.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Qo(!!C), b) : e;
  }, b.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Qo(!!C), b) : o;
  }, b.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Qo([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), b) : t;
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
    return arguments.length ? (v = (C = +C) * C, b) : Math.sqrt(v);
  }, b.tapDistance = function(C) {
    return arguments.length ? (w = +C, b) : w;
  }, b;
}
const bo = {
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
}, Ds = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Mc = ["Enter", " ", "Escape"], f0 = {
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
var Zr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Zr || (Zr = {}));
var xn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(xn || (xn = {}));
var $i;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})($i || ($i = {}));
const Os = {
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
var xo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(xo || (xo = {}));
var xe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(xe || (xe = {}));
const Sl = {
  [xe.Left]: xe.Right,
  [xe.Right]: xe.Left,
  [xe.Top]: xe.Bottom,
  [xe.Bottom]: xe.Top
};
function p0(e, t) {
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
function g0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Hc = (e) => "id" in e && "source" in e && "target" in e, h0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ya = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), zo = (e, t = [0, 0]) => {
  const { width: n, height: r } = or(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, v0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ya(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ki(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ki(n);
}, Ao = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ki(r);
      n = Bi(n, o);
    }
  }), Ki(n);
}, wa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Io(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, v = Co(a, Kr(u)), w = (g ?? 0) * (h ?? 0), b = i && v > 0;
    (!u.internals.handleBounds || b || v >= w || u.dragging) && l.push(u);
  }
  return l;
}, m0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function y0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function w0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = y0(e, s), l = Ao(a), u = ba(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Vc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", bo.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && jr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = jr(p) ? yr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", bo.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function b0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = m0(s, l);
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
const Br = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), yr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Br(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Br(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function zc(e, t, n) {
  const { width: r, height: o } = or(n), { x: i, y: s } = n.internals.positionAbsolute;
  return yr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Pl = (e, t, n) => e < t ? Br(Math.abs(e - t), 1, t) / t : e > n ? -Br(Math.abs(e - n), 1, t) / t : 0, Ac = (e, t, n = 15, r = 40) => {
  const o = Pl(e.x, r, t.width - r) * n, i = Pl(e.y, r, t.height - r) * n;
  return [o, i];
}, Bi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ls = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ki = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Kr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ya(e) ? e.internals.positionAbsolute : zo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ki = (e, t = [0, 0]) => {
  const { x: n, y: r } = ya(e) ? e.internals.positionAbsolute : zo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Rc = (e, t) => Ki(Bi(Ls(e), Ls(t))), Co = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Nl = (e) => On(e.width) && On(e.height) && On(e.x) && On(e.y), On = (e) => !isNaN(e) && isFinite(e), x0 = (e, t) => {
}, Ro = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Io = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Ro(a, s) : a;
}, _i = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Er(e, t) {
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
function C0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Er(e, n), o = Er(e, t);
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
    const r = Er(e.top ?? e.y ?? 0, n), o = Er(e.bottom ?? e.y ?? 0, n), i = Er(e.left ?? e.x ?? 0, t), s = Er(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function $0(e, t, n, r, o, i) {
  const { x: s, y: a } = _i(e, [t, n, r]), { x: l, y: u } = _i({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const ba = (e, t, n, r, o, i) => {
  const s = C0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Br(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, v = $0(e, g, h, d, t, n), w = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: h - w.top + w.bottom,
    zoom: d
  };
}, lr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function jr(e) {
  return e != null && e !== "parent";
}
function or(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ic(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function k0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function _0(e) {
  return { ...f0, ...e || {} };
}
function ss(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = mn(e), a = Io({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Ro(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const qc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Zc = (e) => e?.getRootNode?.() || window?.document, S0 = ["INPUT", "SELECT", "TEXTAREA"];
function Bc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : S0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Kc = (e) => "clientX" in e, mn = (e, t) => {
  const n = Kc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...qc(s)
    };
  });
};
function E0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function ei(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Dl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case xe.Left:
      return [t - ei(t - r, i), n];
    case xe.Right:
      return [t + ei(r - t, i), n];
    case xe.Top:
      return [t, n - ei(n - o, i)];
    case xe.Bottom:
      return [t, n + ei(o - n, i)];
  }
}
function jc({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, curvature: s = 0.25 }) {
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
  }), [p, f, g, h] = E0({
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
    g,
    h
  ];
}
function Yc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function P0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function N0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Bi(ki(e), ki(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Co(s, Ki(i)) > 0;
}
const T0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, D0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), O0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Hc(e) ? n = { ...e } : n = {
    ...e,
    id: T0(e)
  }, D0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Xc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Yc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ol = {
  [xe.Left]: { x: -1, y: 0 },
  [xe.Right]: { x: 1, y: 0 },
  [xe.Top]: { x: 0, y: -1 },
  [xe.Bottom]: { x: 0, y: 1 }
}, L0 = ({ source: e, sourcePosition: t = xe.Bottom, target: n }) => t === xe.Left || t === xe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ll = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function M0({ source: e, sourcePosition: t = xe.Bottom, target: n, targetPosition: r = xe.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ol[t], l = Ol[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = L0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], v, w;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , $, S] = Yc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (v = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (v = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const E = [
      { x: v, y: u.y },
      { x: v, y: d.y }
    ], D = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === g ? h = f === "x" ? E : D : h = f === "x" ? D : E;
  } else {
    const E = [{ x: u.x, y: d.y }], D = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? D : E : h = a.y === g ? E : D, t === r) {
      const A = Math.abs(e[f] - n[f]);
      if (A <= i) {
        const _ = Math.min(i - 1, i - A);
        a[f] === g ? b[f] = (u[f] > e[f] ? -1 : 1) * _ : x[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const A = f === "x" ? "y" : "x", _ = a[f] === l[A], k = u[A] > d[A], C = u[A] < d[A];
      (a[f] === 1 && (!_ && k || _ && C) || a[f] !== 1 && (!_ && C || _ && k)) && (h = f === "x" ? E : D);
    }
    const O = { x: u.x + b.x, y: u.y + b.y }, q = { x: d.x + x.x, y: d.y + x.y }, K = Math.max(Math.abs(O.x - h[0].x), Math.abs(q.x - h[0].x)), J = Math.max(Math.abs(O.y - h[0].y), Math.abs(q.y - h[0].y));
    K >= J ? (v = (O.x + q.x) / 2, w = h[0].y) : (v = h[0].x, w = (O.y + q.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...h,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], v, w, $, S];
}
function H0(e, t, n, r) {
  const o = Math.min(Ll(e, t) / 2, Ll(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function xa({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, v] = M0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((w, b, x) => {
    let $ = "";
    return x > 0 && x < p.length - 1 ? $ = H0(p[x - 1], b, p[x + 1], s) : $ = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, w += $, w;
  }, ""), f, g, h, v];
}
function Ml(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function V0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Ml(t) || !Ml(n))
    return null;
  const r = t.internals.handleBounds || Hl(t.handles), o = n.internals.handleBounds || Hl(n.handles), i = Vl(r?.source ?? [], e.sourceHandle), s = Vl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Zr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", bo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || xe.Bottom, l = s?.position || xe.Top, u = $o(t, i, a), d = $o(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Hl(e) {
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
function $o(e, t, n = xe.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? or(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case xe.Top:
      return { x: o + s / 2, y: i };
    case xe.Right:
      return { x: o + s, y: i + a / 2 };
    case xe.Bottom:
      return { x: o + s / 2, y: i + a };
    case xe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Vl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ms(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function z0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ms(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function A0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case xe.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case xe.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case xe.Left:
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
  nodeExtent: Ds,
  elevateNodesOnSelect: !0,
  defaults: {}
}, R0 = {
  ...Ca,
  checkEquality: !0
};
function $a(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function I0(e, t, n) {
  const r = $a(Ca, n);
  for (const o of e.values())
    if (o.parentId)
      ka(o, e, t, r);
    else {
      const i = zo(o, r.nodeOrigin), s = jr(o.extent) ? o.extent : r.nodeExtent, a = yr(i, s, or(o));
      o.internals.positionAbsolute = a;
    }
}
function q0(e, t, n, r) {
  const o = $a(R0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = zo(l, o.nodeOrigin), p = jr(l.extent) ? l.extent : o.nodeExtent, f = yr(d, p, or(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? u?.internals.handleBounds : void 0,
          z: Fc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && ka(u, t, n, r);
  }
  return i;
}
function Z0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ka(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = $a(Ca, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Z0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = B0(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function Fc(e, t) {
  return (On(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function B0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = or(e), l = zo(e, n), u = jr(e.extent) ? yr(l, e.extent, a) : l;
  let d = yr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = zc(d, a, t));
  const p = Fc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function K0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Kr(a), u = Rc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = or(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), v = Math.max(d.height, Math.round(s.height)), w = (h - d.width) * p[0], b = (v - d.height) * p[1];
    (f > 0 || g > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((x) => {
      e.some(($) => $.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - w : 0),
        height: v + (g ? p[1] * g - b : 0)
      }
    });
  }), o;
}
function j0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
  for (const f of e.values()) {
    const g = t.get(f.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const h = qc(f.nodeElement), v = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (v || !g.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = jr(g.extent) ? g.extent : i;
      let { positionAbsolute: x } = g.internals;
      g.parentId && g.extent === "parent" ? x = zc(x, h, t.get(g.parentId)) : b && (x = yr(x, b, h));
      const $ = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Tl("source", f.nodeElement, w, d, g.id),
            target: Tl("target", f.nodeElement, w, d, g.id)
          }
        }
      };
      t.set(g.id, $), g.parentId && ka($, t, n, { nodeOrigin: o }), a = !0, v && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: Kr($, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = K0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Y0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function zl(e, t, n, r, o, i) {
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
function X0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    zl("source", l, d, e, o, s), zl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function F0(e, t) {
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
function W0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Wc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function as({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function G0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Ro(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function U0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1, v = null;
  function w({ noDragClassName: x, handleSelector: $, domNode: S, isSelectable: E, nodeId: D, nodeClickDistance: O = 0 }) {
    f = Xt(S);
    function q({ x: _, y: k }) {
      const { nodeLookup: C, nodeExtent: N, snapGrid: P, snapToGrid: H, nodeOrigin: Z, onNodeDrag: Y, onSelectionDrag: M, onError: X, updateNodePositions: te } = t();
      i = { x: _, y: k };
      let oe = !1;
      const j = a.size > 1, G = j && N ? Ls(Ao(a)) : null, F = j && H ? G0({
        dragItems: a,
        snapGrid: P,
        x: _,
        y: k
      }) : null;
      for (const [se, W] of a) {
        if (!C.has(se))
          continue;
        let ye = { x: _ - W.distance.x, y: k - W.distance.y };
        H && (ye = F ? {
          x: Math.round(ye.x + F.x),
          y: Math.round(ye.y + F.y)
        } : Ro(ye, P));
        let we = null;
        if (j && N && !W.extent && G) {
          const { positionAbsolute: re } = W.internals, ge = re.x - G.x + N[0][0], he = re.x + W.measured.width - G.x2 + N[1][0], ae = re.y - G.y + N[0][1], Ne = re.y + W.measured.height - G.y2 + N[1][1];
          we = [
            [ge, ae],
            [he, Ne]
          ];
        }
        const { position: ie, positionAbsolute: ee } = Vc({
          nodeId: se,
          nextPosition: ye,
          nodeLookup: C,
          nodeExtent: we || N,
          nodeOrigin: Z,
          onError: X
        });
        oe = oe || W.position.x !== ie.x || W.position.y !== ie.y, W.position = ie, W.internals.positionAbsolute = ee;
      }
      if (h = h || oe, !!oe && (te(a, !0), v && (r || Y || !D && M))) {
        const [se, W] = as({
          nodeId: D,
          dragItems: a,
          nodeLookup: C
        });
        r?.(v, a, se, W), Y?.(v, se, W), D || M?.(v, W);
      }
    }
    async function K() {
      if (!d)
        return;
      const { transform: _, panBy: k, autoPanSpeed: C, autoPanOnNodeDrag: N } = t();
      if (!N) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, H] = Ac(u, d, C);
      (P !== 0 || H !== 0) && (i.x = (i.x ?? 0) - P / _[2], i.y = (i.y ?? 0) - H / _[2], await k({ x: P, y: H }) && q(i)), s = requestAnimationFrame(K);
    }
    function J(_) {
      const { nodeLookup: k, multiSelectionActive: C, nodesDraggable: N, transform: P, snapGrid: H, snapToGrid: Z, selectNodesOnDrag: Y, onNodeDragStart: M, onSelectionDragStart: X, unselectNodesAndEdges: te } = t();
      p = !0, (!Y || !E) && !C && D && (k.get(D)?.selected || te()), E && Y && D && e?.(D);
      const oe = ss(_.sourceEvent, { transform: P, snapGrid: H, snapToGrid: Z, containerBounds: d });
      if (i = oe, a = W0(k, N, oe, D), a.size > 0 && (n || M || !D && X)) {
        const [j, G] = as({
          nodeId: D,
          dragItems: a,
          nodeLookup: k
        });
        n?.(_.sourceEvent, a, j, G), M?.(_.sourceEvent, j, G), D || X?.(_.sourceEvent, G);
      }
    }
    const A = wv().clickDistance(O).on("start", (_) => {
      const { domNode: k, nodeDragThreshold: C, transform: N, snapGrid: P, snapToGrid: H } = t();
      d = k?.getBoundingClientRect() || null, g = !1, h = !1, v = _.sourceEvent, C === 0 && J(_), i = ss(_.sourceEvent, { transform: N, snapGrid: P, snapToGrid: H, containerBounds: d }), u = mn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: k, transform: C, snapGrid: N, snapToGrid: P, nodeDragThreshold: H, nodeLookup: Z } = t(), Y = ss(_.sourceEvent, { transform: C, snapGrid: N, snapToGrid: P, containerBounds: d });
      if (v = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      D && !Z.has(D)) && (g = !0), !g) {
        if (!l && k && p && (l = !0, K()), !p) {
          const M = Y.xSnapped - (i.x ?? 0), X = Y.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + X * X) > H && J(_);
        }
        (i.x !== Y.xSnapped || i.y !== Y.ySnapped) && a && p && (u = mn(_.sourceEvent, d), q(Y));
      }
    }).on("end", (_) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: k, updateNodePositions: C, onNodeDragStop: N, onSelectionDragStop: P } = t();
        if (h && (C(a, !1), h = !1), o || N || !D && P) {
          const [H, Z] = as({
            nodeId: D,
            dragItems: a,
            nodeLookup: k,
            dragging: !1
          });
          o?.(_.sourceEvent, a, H, Z), N?.(_.sourceEvent, H, Z), D || P?.(_.sourceEvent, Z);
        }
      }
    }).filter((_) => {
      const k = _.target;
      return !_.button && (!x || !Al(k, `.${x}`, S)) && (!$ || Al(k, $, S));
    });
    f.call(A);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function J0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Co(o, Kr(i)) > 0 && r.push(i);
  return r;
}
const Q0 = 250;
function em(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = J0(e, n, t + Q0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = $o(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function Gc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...$o(s, l, l.position, !0) } : l;
}
function Uc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function tm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Jc = () => !0;
function nm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: v, onConnectEnd: w, isValidConnection: b = Jc, onReconnectEnd: x, updateConnection: $, getTransform: S, getFromHandle: E, autoPanSpeed: D, dragThreshold: O = 1, handleDomNode: q }) {
  const K = Zc(e.target);
  let J = 0, A;
  const { x: _, y: k } = mn(e), C = Uc(i, q), N = a?.getBoundingClientRect();
  let P = !1;
  if (!N || !C)
    return;
  const H = Gc(o, C, r, l, t);
  if (!H)
    return;
  let Z = mn(e, N), Y = !1, M = null, X = !1, te = null;
  function oe() {
    if (!d || !N)
      return;
    const [we, ie] = Ac(Z, N, D);
    f({ x: we, y: ie }), J = requestAnimationFrame(oe);
  }
  const j = {
    ...H,
    nodeId: o,
    type: C,
    position: H.position
  }, G = l.get(o);
  let F = {
    inProgress: !0,
    isValid: null,
    from: $o(G, j, xe.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: G,
    to: Z,
    toHandle: null,
    toPosition: Sl[j.position],
    toNode: null
  };
  function se() {
    P = !0, $(F), h?.(e, { nodeId: o, handleId: r, handleType: C });
  }
  O === 0 && se();
  function W(we) {
    if (!P) {
      const { x: ge, y: he } = mn(we), ae = ge - _, Ne = he - k;
      if (!(ae * ae + Ne * Ne > O * O))
        return;
      se();
    }
    if (!E() || !j) {
      ye(we);
      return;
    }
    const ie = S();
    Z = mn(we, N), A = em(Io(Z, ie, !1, [1, 1]), n, l, j), Y || (oe(), Y = !0);
    const ee = Qc(we, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: K,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    te = ee.handleDomNode, M = ee.connection, X = tm(!!A, ee.isValid);
    const re = {
      // from stays the same
      ...F,
      isValid: X,
      to: ee.toHandle && X ? _i({ x: ee.toHandle.x, y: ee.toHandle.y }, ie) : Z,
      toHandle: ee.toHandle,
      toPosition: X && ee.toHandle ? ee.toHandle.position : Sl[j.position],
      toNode: ee.toHandle ? l.get(ee.toHandle.nodeId) : null
    };
    X && A && F.toHandle && re.toHandle && F.toHandle.type === re.toHandle.type && F.toHandle.nodeId === re.toHandle.nodeId && F.toHandle.id === re.toHandle.id && F.to.x === re.to.x && F.to.y === re.to.y || ($(re), F = re);
  }
  function ye(we) {
    if (P) {
      (A || te) && M && X && v?.(M);
      const { inProgress: ie, ...ee } = F, re = {
        ...ee,
        toPosition: F.toHandle ? F.toPosition : null
      };
      w?.(we, re), i && x?.(we, re);
    }
    g(), cancelAnimationFrame(J), Y = !1, X = !1, M = null, te = null, K.removeEventListener("mousemove", W), K.removeEventListener("mouseup", ye), K.removeEventListener("touchmove", W), K.removeEventListener("touchend", ye);
  }
  K.addEventListener("mousemove", W), K.addEventListener("mouseup", ye), K.addEventListener("touchmove", W), K.addEventListener("touchend", ye);
}
function Qc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Jc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = mn(e), v = s.elementFromPoint(g, h), w = v?.classList.contains(`${a}-flow__handle`) ? v : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const x = Uc(void 0, w), $ = w.getAttribute("data-nodeid"), S = w.getAttribute("data-handleid"), E = w.classList.contains("connectable"), D = w.classList.contains("connectableend");
    if (!$ || !x)
      return b;
    const O = {
      source: p ? $ : r,
      sourceHandle: p ? S : o,
      target: p ? r : $,
      targetHandle: p ? o : S
    };
    b.connection = O;
    const q = E && D && (n === Zr.Strict ? p && x === "source" || !p && x === "target" : $ !== r || S !== o);
    b.isValid = q && u(O), b.toHandle = Gc($, x, S, d, n, !0);
  }
  return b;
}
const Rl = {
  onPointerDown: nm,
  isValid: Qc
};
function rm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Xt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = ($) => {
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const S = n(), E = $.sourceEvent.ctrlKey && lr() ? 10 : 1, D = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = S[2] * Math.pow(2, D * E);
      t.scaleTo(O);
    };
    let v = [0, 0];
    const w = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (v = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, b = ($) => {
      const S = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], D = [E[0] - v[0], E[1] - v[1]];
      v = E;
      const O = r() * Math.max(S[2], Math.log(S[2])) * (g ? -1 : 1), q = {
        x: S[0] - D[0] * O,
        y: S[1] - D[1] * O
      }, K = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: S[2]
      }, K, a);
    }, x = Lc().on("start", w).on("zoom", p ? b : null).on("zoom.wheel", f ? h : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Qt
  };
}
const om = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ji = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ls = ({ x: e, y: t, zoom: n }) => Zi.translate(e, t).scale(n), Pr = (e, t) => e.target.closest(`.${t}`), ed = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), im = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, us = (e, t = 0, n = im, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, td = (e) => {
  const t = e.ctrlKey && lr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function sm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Pr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Qt(d), b = td(d), x = p * Math.pow(2, b);
      r.scaleTo(n, x, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === xn.Vertical ? 0 : d.deltaX * f, h = o === xn.Horizontal ? 0 : d.deltaY * f;
    !lr() && d.shiftKey && o !== xn.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = ji(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, v)), e.isPanScrolling && (l?.(d, v), e.panScrollTimeout = setTimeout(() => {
      u?.(d, v), e.isPanScrolling = !1;
    }, 150));
  };
}
function am({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Pr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function lm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ji(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function um({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && ed(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ji(i.transform));
  };
}
function cm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ed(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && om(e.prevViewport, s.transform))) {
      const a = ji(s.transform);
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
function dm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (Pr(d, `${u}-flow__node`) || Pr(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || Pr(d, a) && d.type === "wheel" || Pr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function fm({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = Lc().clickDistance(!On(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Xt(e).call(f);
  $({
    x: i.x,
    y: i.y,
    zoom: Br(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), v = g.on("dblclick.zoom");
  f.wheelDelta(td);
  function w(_, k) {
    return g ? new Promise((C) => {
      f?.interpolate(k?.interpolate === "linear" ? co : si).transform(us(g, k?.duration, k?.ease, () => C(!0)), _);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: _, noPanClassName: k, onPaneContextMenu: C, userSelectionActive: N, panOnScroll: P, panOnDrag: H, panOnScrollMode: Z, panOnScrollSpeed: Y, preventScrolling: M, zoomOnPinch: X, zoomOnScroll: te, zoomOnDoubleClick: oe, zoomActivationKeyPressed: j, lib: G, onTransformChange: F }) {
    N && !d.isZoomingOrPanning && x();
    const se = P && !j && !N ? sm({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: Z,
      panOnScrollSpeed: Y,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : am({
      noWheelClassName: _,
      preventScrolling: M,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", se, { passive: !1 }), !N) {
      const ye = lm({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ye);
      const we = um({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!C,
        onPanZoom: s,
        onTransformChange: F
      });
      f.on("zoom", we);
      const ie = cm({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: P,
        onPaneContextMenu: C,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const W = dm({
      zoomActivationKeyPressed: j,
      panOnDrag: H,
      zoomOnScroll: te,
      panOnScroll: P,
      zoomOnDoubleClick: oe,
      zoomOnPinch: X,
      userSelectionActive: N,
      noPanClassName: k,
      noWheelClassName: _,
      lib: G
    });
    f.filter(W), oe ? g.on("dblclick.zoom", v) : g.on("dblclick.zoom", null);
  }
  function x() {
    f.on("zoom", null);
  }
  async function $(_, k, C) {
    const N = ls(_), P = f?.constrain()(N, k, C);
    return P && await w(P), new Promise((H) => H(P));
  }
  async function S(_, k) {
    const C = ls(_);
    return await w(C, k), new Promise((N) => N(C));
  }
  function E(_) {
    if (g) {
      const k = ls(_), C = g.property("__zoom");
      (C.k !== _.zoom || C.x !== _.x || C.y !== _.y) && f?.transform(g, k, null, { sync: !0 });
    }
  }
  function D() {
    const _ = g ? Oc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function O(_, k) {
    return g ? new Promise((C) => {
      f?.interpolate(k?.interpolate === "linear" ? co : si).scaleTo(us(g, k?.duration, k?.ease, () => C(!0)), _);
    }) : Promise.resolve(!1);
  }
  function q(_, k) {
    return g ? new Promise((C) => {
      f?.interpolate(k?.interpolate === "linear" ? co : si).scaleBy(us(g, k?.duration, k?.ease, () => C(!0)), _);
    }) : Promise.resolve(!1);
  }
  function K(_) {
    f?.scaleExtent(_);
  }
  function J(_) {
    f?.translateExtent(_);
  }
  function A(_) {
    const k = !On(_) || _ < 0 ? 0 : _;
    f?.clickDistance(k);
  }
  return {
    update: b,
    destroy: x,
    setViewport: S,
    setViewportConstrained: $,
    getViewport: D,
    scaleTo: O,
    scaleBy: q,
    setScaleExtent: K,
    setTranslateExtent: J,
    syncViewport: E,
    setClickDistance: A
  };
}
var Il;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Il || (Il = {}));
var pm = /* @__PURE__ */ Q("<div><!></div>");
function Jn(e, t) {
  de(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => xe.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), u = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), p = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), g = y(t, "children", 7), h = /* @__PURE__ */ je(t, [
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
  const v = Un("svelteflow__node_id"), w = Un("svelteflow__node_connectable");
  let b = /* @__PURE__ */ T(() => r() === "target"), x = /* @__PURE__ */ T(() => a() !== void 0 ? a() : w.value), $ = cn(), S = /* @__PURE__ */ T(() => $.ariaLabelConfig), E = null;
  Hu(() => {
    if (p() || f()) {
      $.edges;
      let M = $.connectionLookup.get(`${v}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !p0(M, E)) {
        const X = M ?? /* @__PURE__ */ new Map();
        El(E, X, f()), El(X, E, p());
      }
      E = new Map(M);
    }
  });
  let D = /* @__PURE__ */ T(() => {
    if (!$.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: X, isValid: te } = $.connection, oe = M && M.nodeId === v && M.type === r() && M.id === n(), j = X && X.nodeId === v && X.type === r() && X.id === n(), G = $.connectionMode === Zr.Strict ? M?.type !== r() : v !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      oe,
      j,
      G,
      j && te
    ];
  }), O = /* @__PURE__ */ T(() => Po(c(D), 5)), q = /* @__PURE__ */ T(() => c(O)[0]), K = /* @__PURE__ */ T(() => c(O)[1]), J = /* @__PURE__ */ T(() => c(O)[2]), A = /* @__PURE__ */ T(() => c(O)[3]), _ = /* @__PURE__ */ T(() => c(O)[4]);
  function k(M) {
    const X = $.onbeforeconnect ? $.onbeforeconnect(M) : M;
    X && ($.addEdge(X), $.onconnect?.(M));
  }
  function C(M) {
    const X = Kc(M);
    M.currentTarget && (X && M.button === 0 || !X) && Rl.onPointerDown(M, {
      handleId: n(),
      nodeId: v,
      isTarget: c(b),
      connectionRadius: $.connectionRadius,
      domNode: $.domNode,
      nodeLookup: $.nodeLookup,
      connectionMode: $.connectionMode,
      lib: "svelte",
      autoPanOnConnect: $.autoPanOnConnect,
      flowId: $.flowId,
      isValidConnection: d() ?? $.isValidConnection,
      updateConnection: $.updateConnection,
      cancelConnection: $.cancelConnection,
      panBy: $.panBy,
      onConnect: k,
      onConnectStart: (te, oe) => {
        $.onconnectstart?.(te, {
          nodeId: oe.nodeId,
          handleId: oe.handleId,
          handleType: oe.handleType
        });
      },
      onConnectEnd: (te, oe) => {
        $.onconnectend?.(te, oe);
      },
      getTransform: () => [$.viewport.x, $.viewport.y, $.viewport.zoom],
      getFromHandle: () => $.connection.fromHandle,
      dragThreshold: $.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function N(M) {
    if (!v || !$.clickConnectStartHandle && !l())
      return;
    if (!$.clickConnectStartHandle) {
      $.onclickconnectstart?.(M, { nodeId: v, handleId: n(), handleType: r() }), $.clickConnectStartHandle = { nodeId: v, type: r(), id: n() };
      return;
    }
    const X = Zc(M.target), te = d() ?? $.isValidConnection, { connectionMode: oe, clickConnectStartHandle: j, flowId: G, nodeLookup: F } = $, { connection: se, isValid: W } = Rl.isValid(M, {
      handle: { nodeId: v, id: n(), type: r() },
      connectionMode: oe,
      fromNodeId: j.nodeId,
      fromHandleId: j.id ?? null,
      fromType: j.type,
      isValidConnection: te,
      flowId: G,
      doc: X,
      lib: "svelte",
      nodeLookup: F
    });
    W && se && k(se);
    const ye = structuredClone(hu($.connection));
    delete ye.inProgress, ye.toPosition = ye.toHandle ? ye.toHandle.position : null, $.onclickconnectend?.(M, ye), $.clickConnectStartHandle = null;
  }
  var P = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), m();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), m();
    },
    get position() {
      return o();
    },
    set position(M = xe.Top) {
      o(M), m();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), m();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), m();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), m();
    },
    get onconnect() {
      return p();
    },
    set onconnect(M) {
      p(M), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(M) {
      f(M), m();
    },
    get children() {
      return g();
    },
    set children(M) {
      g(M), m();
    }
  }, H = pm(), Z = () => {
  };
  ft(
    H,
    (M) => ({
      "data-handleid": n(),
      "data-nodeid": v,
      "data-handlepos": o(),
      "data-id": `${$.flowId ?? ""}-${v ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
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
      onclick: $.clickConnect ? N : void 0,
      onkeypress: Z,
      style: i(),
      role: "button",
      "aria-label": c(S)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Yn]: M
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(J),
        connectingfrom: c(K),
        source: !c(b),
        target: c(b),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(x),
        connectionindicator: c(x) && (!c(q) || c(A)) && (c(q) || $.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var Y = I(H);
  return nt(Y, () => g() ?? mt), R(H), L(e, H), fe(P);
}
ue(
  Jn,
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
var gm = /* @__PURE__ */ Q("<!> <!>", 1);
function _a(e, t) {
  de(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => xe.Top), o = y(t, "sourcePosition", 23, () => xe.Bottom);
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
    set targetPosition(d = xe.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = xe.Bottom) {
      o(d), m();
    }
  }, s = gm(), a = le(s);
  Jn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), u = V(l);
  return Jn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Se(() => Xe(l, ` ${n()?.label ?? ""} `)), L(e, s), fe(i);
}
ue(_a, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var hm = /* @__PURE__ */ Q(" <!>", 1);
function nd(e, t) {
  de(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => xe.Bottom);
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
    set sourcePosition(l = xe.Bottom) {
      r(l), m();
    }
  };
  be();
  var i = hm(), s = le(i), a = V(s);
  return Jn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Se(() => Xe(s, `${n()?.label ?? ""} `)), L(e, i), fe(o);
}
ue(nd, { data: {}, sourcePosition: {} }, [], [], !0);
var vm = /* @__PURE__ */ Q(" <!>", 1);
function rd(e, t) {
  de(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => xe.Top);
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
    set targetPosition(l = xe.Top) {
      r(l), m();
    }
  };
  be();
  var i = vm(), s = le(i), a = V(s);
  return Jn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Se(() => Xe(s, `${n()?.label ?? ""} `)), L(e, i), fe(o);
}
ue(rd, { data: {}, targetPosition: {} }, [], [], !0);
function od(e, t) {
}
ue(od, {}, [], [], !0);
function cs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function id(e, t) {
  const n = /* @__PURE__ */ T(cn), r = /* @__PURE__ */ T(() => c(n).domNode);
  let o;
  return c(r) ? cs(e, c(r), t) : o = ra(() => {
    tt(() => {
      cs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      cs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function sd() {
  let e = /* @__PURE__ */ De(typeof window > "u");
  if (c(e)) {
    const t = ra(() => {
      tt(() => {
        U(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const ql = (e) => h0(e), mm = (e) => Hc(e);
function _n(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Si = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var ym = /* @__PURE__ */ Q("<div><!></div>");
const wm = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function ad(e, t) {
  de(t, !0), Be(e, wm);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), u = y(t, "children", 7), d = /* @__PURE__ */ je(t, [
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
  const p = cn(), f = Un("svelteflow__edge_id");
  let g = /* @__PURE__ */ T(() => p.visible.edges.get(f)?.zIndex);
  var h = {
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
  }, v = ym(), w = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  ft(
    v,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [vn]: x
    }),
    [
      () => ({
        display: sd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: _n(o()),
        height: _n(i()),
        "z-index": c(g)
      })
    ],
    void 0,
    "svelte-w2n27y"
  );
  var b = I(v);
  return nt(b, () => u() ?? mt), R(v), xt(v, (x, $) => id?.(x, $), () => "edge-labels"), L(e, v), fe(h);
}
ue(
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
var bm = /* @__PURE__ */ me("<path></path>"), xm = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function qo(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "style", 7), p = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), g = /* @__PURE__ */ je(t, [
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
  var h = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), m();
    },
    get path() {
      return r();
    },
    set path(E) {
      r(E), m();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), m();
    },
    get labelX() {
      return i();
    },
    set labelX(E) {
      i(E), m();
    },
    get labelY() {
      return s();
    },
    set labelY(E) {
      s(E), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(E) {
      a(E), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(E) {
      l(E), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(E) {
      u(E), m();
    },
    get style() {
      return d();
    },
    set style(E) {
      d(E), m();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(E = 20) {
      p(E), m();
    },
    get class() {
      return f();
    },
    set class(E) {
      f(E), m();
    }
  }, v = xm(), w = le(v), b = V(w);
  {
    var x = (E) => {
      var D = bm();
      ft(D, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), L(E, D);
    };
    ce(b, (E) => {
      p() > 0 && E(x);
    });
  }
  var $ = V(b);
  {
    var S = (E) => {
      ad(E, {
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
        children: (D, O) => {
          be();
          var q = Ee();
          Se(() => Xe(q, o())), L(D, q);
        },
        $$slots: { default: !0 }
      });
    };
    ce($, (E) => {
      o() && E(S);
    });
  }
  return Se(() => {
    Ce(w, "id", n()), Ce(w, "d", r()), zt(w, 0, In(["svelte-flow__edge-path", f()])), Ce(w, "marker-start", l()), Ce(w, "marker-end", u()), yt(w, d());
  }), L(e, v), fe(h);
}
ue(
  qo,
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
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), u = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), p = y(t, "sourceY", 7), f = y(t, "style", 7), g = y(t, "targetPosition", 7), h = y(t, "targetX", 7), v = y(t, "targetY", 7), w = /* @__PURE__ */ T(() => jc({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: v(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ T(() => Po(c(w), 3)), x = /* @__PURE__ */ T(() => c(b)[0]), $ = /* @__PURE__ */ T(() => c(b)[1]), S = /* @__PURE__ */ T(() => c(b)[2]);
  var E = {
    get id() {
      return n();
    },
    set id(D) {
      n(D), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(D) {
      r(D), m();
    },
    get label() {
      return o();
    },
    set label(D) {
      o(D), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(D) {
      i(D), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(D) {
      s(D), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(D) {
      a(D), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(D) {
      l(D), m();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(D) {
      u(D), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(D) {
      d(D), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(D) {
      p(D), m();
    },
    get style() {
      return f();
    },
    set style(D) {
      f(D), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(D) {
      g(D), m();
    },
    get targetX() {
      return h();
    },
    set targetX(D) {
      h(D), m();
    },
    get targetY() {
      return v();
    },
    set targetY(D) {
      v(D), m();
    }
  };
  return qo(e, {
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
      return f();
    }
  }), fe(E);
}
ue(
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
  de(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), u = y(t, "sourceX", 7), d = y(t, "sourceY", 7), p = y(t, "targetPosition", 7), f = y(t, "targetX", 7), g = y(t, "targetY", 7), h = /* @__PURE__ */ T(() => xa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), v = /* @__PURE__ */ T(() => Po(c(h), 3)), w = /* @__PURE__ */ T(() => c(v)[0]), b = /* @__PURE__ */ T(() => c(v)[1]), x = /* @__PURE__ */ T(() => c(v)[2]);
  var $ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(S) {
      n(S), m();
    },
    get label() {
      return r();
    },
    set label(S) {
      r(S), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(S) {
      o(S), m();
    },
    get style() {
      return i();
    },
    set style(S) {
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
    get sourcePosition() {
      return l();
    },
    set sourcePosition(S) {
      l(S), m();
    },
    get sourceX() {
      return u();
    },
    set sourceX(S) {
      u(S), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(S) {
      d(S), m();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(S) {
      p(S), m();
    },
    get targetX() {
      return f();
    },
    set targetX(S) {
      f(S), m();
    },
    get targetY() {
      return g();
    },
    set targetY(S) {
      g(S), m();
    }
  };
  return qo(e, {
    get path() {
      return c(w);
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
  }), fe($);
}
ue(
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
  de(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), p = y(t, "style", 7), f = /* @__PURE__ */ T(() => Xc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ T(() => Po(c(f), 3)), h = /* @__PURE__ */ T(() => c(g)[0]), v = /* @__PURE__ */ T(() => c(g)[1]), w = /* @__PURE__ */ T(() => c(g)[2]);
  var b = {
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
      return p();
    },
    set style(x) {
      p(x), m();
    }
  };
  return qo(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(v);
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
      return p();
    }
  }), fe(b);
}
ue(
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
  de(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), u = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), p = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), g = y(t, "style", 7), h = /* @__PURE__ */ T(() => xa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), v = /* @__PURE__ */ T(() => Po(c(h), 3)), w = /* @__PURE__ */ T(() => c(v)[0]), b = /* @__PURE__ */ T(() => c(v)[1]), x = /* @__PURE__ */ T(() => c(v)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(S) {
      o(S), m();
    },
    get targetX() {
      return i();
    },
    set targetX(S) {
      i(S), m();
    },
    get targetY() {
      return s();
    },
    set targetY(S) {
      s(S), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(S) {
      a(S), m();
    },
    get label() {
      return l();
    },
    set label(S) {
      l(S), m();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(S) {
      u(S), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(S) {
      d(S), m();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(S) {
      p(S), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(S) {
      f(S), m();
    },
    get style() {
      return g();
    },
    set style(S) {
      g(S), m();
    }
  };
  return qo(e, {
    get path() {
      return c(w);
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
      return g();
    }
  }), fe($);
}
ue(
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
class Cm {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Mp(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const $m = /\(.+\)/, km = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class _m extends Cm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = $m.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => km.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => bs(o, "change", i)
    );
  }
}
function Sm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return wa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Zl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: v, transform: w, width: b, height: x } = e;
      if (N0({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: x,
        transform: w
      }))
        v.set(p.id, p), v.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      u.set(d.id, g);
      continue;
    }
    const h = V0({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && u.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: P0({
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
function Em(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Ao(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ba(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Pm(e) {
  class t {
    #t = /* @__PURE__ */ T(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      U(this.#t, r);
    }
    #e = /* @__PURE__ */ De(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      U(this.#e, r);
    }
    #n = /* @__PURE__ */ De(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      U(this.#n, r);
    }
    #o = /* @__PURE__ */ De(e.width ?? 0);
    get width() {
      return c(this.#o);
    }
    set width(r) {
      U(this.#o, r);
    }
    #c = /* @__PURE__ */ De(e.height ?? 0);
    get height() {
      return c(this.#c);
    }
    set height(r) {
      U(this.#c, r);
    }
    #i = /* @__PURE__ */ T(() => {
      const r = q0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#i);
    }
    set nodesInitialized(r) {
      U(this.#i, r);
    }
    #a = /* @__PURE__ */ T(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      U(this.#a, r);
    }
    #s = /* @__PURE__ */ T(() => (X0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      U(this.#s, r);
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
    #r = /* @__PURE__ */ T(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#r);
    }
    set selectedNodes(r) {
      U(this.#r, r);
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
      U(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ T(() => {
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
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: h, width: v, height: w } = this, b = [h.x, h.y, h.zoom];
        p = Sm(s, b, v, w), f = Zl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: v,
          height: w
        });
      } else
        p = this.nodeLookup, f = Zl(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#d);
    }
    set visible(r) {
      U(this.#d, r);
    }
    #f = /* @__PURE__ */ T(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#f);
    }
    set nodesDraggable(r) {
      U(this.#f, r);
    }
    #g = /* @__PURE__ */ T(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#g);
    }
    set nodesConnectable(r) {
      U(this.#g, r);
    }
    #u = /* @__PURE__ */ T(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      U(this.#u, r);
    }
    #p = /* @__PURE__ */ T(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      U(this.#p, r);
    }
    #h = /* @__PURE__ */ T(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      U(this.#h, r);
    }
    #v = /* @__PURE__ */ T(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      U(this.#v, r);
    }
    #m = /* @__PURE__ */ T(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      U(this.#m, r);
    }
    #y = /* @__PURE__ */ T(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      U(this.#y, r);
    }
    #w = /* @__PURE__ */ T(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      U(this.#w, r);
    }
    #b = /* @__PURE__ */ T(() => e.props.nodeExtent ?? Ds);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      U(this.#b, r);
    }
    #x = /* @__PURE__ */ T(() => e.props.translateExtent ?? Ds);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      U(this.#x, r);
    }
    #C = /* @__PURE__ */ T(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      U(this.#C, r);
    }
    #$ = /* @__PURE__ */ T(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      U(this.#$, r);
    }
    #k = /* @__PURE__ */ T(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      U(this.#k, r);
    }
    #_ = /* @__PURE__ */ T(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      U(this.#_, r);
    }
    #S = /* @__PURE__ */ T(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      U(this.#S, r);
    }
    #E = /* @__PURE__ */ T(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      U(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ T(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      U(this.#P, r);
    }
    #N = /* @__PURE__ */ De(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      U(this.#N, r);
    }
    #T = /* @__PURE__ */ De(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      U(this.#T, r);
    }
    #D = /* @__PURE__ */ De(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      U(this.#D, r);
    }
    #O = /* @__PURE__ */ De(!1);
    get multiselectionKeyPressed() {
      return c(this.#O);
    }
    set multiselectionKeyPressed(r) {
      U(this.#O, r);
    }
    #L = /* @__PURE__ */ De(!1);
    get deleteKeyPressed() {
      return c(this.#L);
    }
    set deleteKeyPressed(r) {
      U(this.#L, r);
    }
    #M = /* @__PURE__ */ De(!1);
    get panActivationKeyPressed() {
      return c(this.#M);
    }
    set panActivationKeyPressed(r) {
      U(this.#M, r);
    }
    #H = /* @__PURE__ */ De(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      U(this.#H, r);
    }
    #V = /* @__PURE__ */ De(null);
    get selectionRectMode() {
      return c(this.#V);
    }
    set selectionRectMode(r) {
      U(this.#V, r);
    }
    #z = /* @__PURE__ */ De("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      U(this.#z, r);
    }
    #A = /* @__PURE__ */ T(() => e.props.selectionMode ?? $i.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      U(this.#A, r);
    }
    #R = /* @__PURE__ */ T(() => ({ ...dd, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      U(this.#R, r);
    }
    #I = /* @__PURE__ */ T(() => ({ ...fd, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#I);
    }
    set edgeTypes(r) {
      U(this.#I, r);
    }
    #q = /* @__PURE__ */ T(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#q);
    }
    set noPanClass(r) {
      U(this.#q, r);
    }
    #Z = /* @__PURE__ */ T(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#Z);
    }
    set noDragClass(r) {
      U(this.#Z, r);
    }
    #B = /* @__PURE__ */ T(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      U(this.#B, r);
    }
    #K = /* @__PURE__ */ T(() => _0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      U(this.#K, r);
    }
    #j = /* @__PURE__ */ De(Em(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      U(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ De(
      // _connection is viewport independent and originating from XYHandle
      Os
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      U(this.#Y, r);
    }
    #X = /* @__PURE__ */ T(() => this._connection.inProgress ? {
      ...this._connection,
      to: Io(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      U(this.#X, r);
    }
    #F = /* @__PURE__ */ T(() => e.props.connectionMode ?? Zr.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      U(this.#F, r);
    }
    #W = /* @__PURE__ */ T(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#W);
    }
    set connectionRadius(r) {
      U(this.#W, r);
    }
    #G = /* @__PURE__ */ T(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      U(this.#G, r);
    }
    #U = /* @__PURE__ */ T(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      U(this.#U, r);
    }
    #J = /* @__PURE__ */ T(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      U(this.#J, r);
    }
    #Q = /* @__PURE__ */ T(() => z0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      U(this.#Q, r);
    }
    #ee = /* @__PURE__ */ T(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      U(this.#ee, r);
    }
    #te = /* @__PURE__ */ T(() => e.props.onflowerror ?? x0);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      U(this.#te, r);
    }
    #ne = /* @__PURE__ */ T(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      U(this.#ne, r);
    }
    #re = /* @__PURE__ */ T(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      U(this.#re, r);
    }
    #oe = /* @__PURE__ */ T(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      U(this.#oe, r);
    }
    #ie = /* @__PURE__ */ T(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      U(this.#ie, r);
    }
    #se = /* @__PURE__ */ T(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      U(this.#se, r);
    }
    #ae = /* @__PURE__ */ T(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      U(this.#ae, r);
    }
    #le = /* @__PURE__ */ T(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      U(this.#le, r);
    }
    #ue = /* @__PURE__ */ T(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      U(this.#ue, r);
    }
    #ce = /* @__PURE__ */ T(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      U(this.#ce, r);
    }
    #de = /* @__PURE__ */ T(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      U(this.#de, r);
    }
    #fe = /* @__PURE__ */ T(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      U(this.#fe, r);
    }
    #pe = /* @__PURE__ */ T(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      U(this.#pe, r);
    }
    #ge = /* @__PURE__ */ T(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      U(this.#ge, r);
    }
    #he = /* @__PURE__ */ De(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      U(this.#he, r);
    }
    #ve = /* @__PURE__ */ T(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      U(this.#ve, r);
    }
    #me = /* @__PURE__ */ T(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      U(this.#me, r);
    }
    #ye = /* @__PURE__ */ T(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      U(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await w0(
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
    _prefersDark = new _m("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ T(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      U(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Os, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function cn() {
  const e = Un(Ei);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ei = Symbol();
function pd(e) {
  const t = Pm(e);
  function n(A) {
    t.nodeTypes = {
      ...dd,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...fd,
      ...A
    };
  }
  function o(A) {
    t.edges = O0(A, t.edges);
  }
  const i = (A, _ = !1) => {
    t.nodes = t.nodes.map((k) => {
      const C = A.get(k.id);
      return C ? { ...k, position: C.position, dragging: _ } : k;
    });
  };
  function s(A) {
    const { changes: _, updatedInternals: k } = j0(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!k)
      return;
    I0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const C = /* @__PURE__ */ new Map();
    for (const N of _) {
      const P = t.nodeLookup.get(N.id)?.internals.userNode;
      if (!P)
        continue;
      const H = { ...P };
      switch (N.type) {
        case "dimensions": {
          const Z = { ...H.measured, ...N.dimensions };
          N.setAttributes && (H.width = N.dimensions?.width ?? H.width, H.height = N.dimensions?.height ?? H.height), H.measured = Z;
          break;
        }
        case "position":
          H.position = N.position ?? H.position;
          break;
      }
      C.set(N.id, H);
    }
    t.nodes = t.nodes.map((N) => C.get(N.id) ?? N);
  }
  function a(A) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(A, _, k) {
    const C = typeof k?.zoom < "u" ? k.zoom : t.maxZoom, N = t.panZoom;
    return N ? (await N.setViewport({
      x: t.width / 2 - A * C,
      y: t.height / 2 - _ * C,
      zoom: C
    }, { duration: k?.duration, ease: k?.ease, interpolate: k?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, _) {
    const k = t.panZoom;
    return k ? k.scaleBy(A, _) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function p(A) {
    return u(1 / 1.2, A);
  }
  function f(A) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([A, t.maxZoom]), t.minZoom = A);
  }
  function g(A) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, A]), t.maxZoom = A);
  }
  function h(A) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(A), t.translateExtent = A);
  }
  function v(A) {
    t.panZoom?.setClickDistance(A);
  }
  function w(A, _ = null) {
    let k = !1;
    const C = A.map((N) => (!_ || _.has(N.id)) && N.selected ? (k = !0, { ...N, selected: !1 }) : N);
    return [k, C];
  }
  function b(A) {
    const _ = A?.nodes ? new Set(A.nodes.map((Z) => Z.id)) : null, [k, C] = w(t.nodes, _);
    k && (t.nodes = C);
    const N = A?.edges ? new Set(A.edges.map((Z) => Z.id)) : null, [P, H] = w(t.edges, N);
    P && (t.edges = H);
  }
  function x(A) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((k) => {
      const C = A.includes(k.id), N = _ && k.selected || C;
      if (k.selected !== N) {
        const P = t.nodeLookup.get(k.id);
        return P && (P.selected = N), k.selected = N, { ...k };
      }
      return k;
    }), _ || b({ nodes: [] });
  }
  function $(A) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((k) => {
      const C = A.includes(k.id), N = _ && k.selected || C;
      return k.selected !== N ? { ...k, selected: N } : k;
    }), _ || b({ edges: [] });
  }
  function S(A, _, k) {
    const C = t.nodeLookup.get(A);
    if (!C) {
      console.warn("012", bo.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, C.selected ? (_ || C.selected && t.multiselectionKeyPressed) && (b({ nodes: [C], edges: [] }), requestAnimationFrame(() => k?.blur())) : x([A]);
  }
  function E(A) {
    const _ = t.edgeLookup.get(A);
    if (!_) {
      console.warn("012", bo.error012(A));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [_] }) : $([A]));
  }
  function D(A, _) {
    const { nodeExtent: k, snapGrid: C, nodeOrigin: N, nodeLookup: P, nodesDraggable: H, onerror: Z } = t, Y = /* @__PURE__ */ new Map(), M = C?.[0] ?? 5, X = C?.[1] ?? 5, te = A.x * M * _, oe = A.y * X * _;
    for (const j of P.values()) {
      if (!(j.selected && (j.draggable || H && typeof j.draggable > "u")))
        continue;
      let G = {
        x: j.internals.positionAbsolute.x + te,
        y: j.internals.positionAbsolute.y + oe
      };
      C && (G = Ro(G, C));
      const { position: F, positionAbsolute: se } = Vc({
        nodeId: j.id,
        nextPosition: G,
        nodeLookup: P,
        nodeExtent: k,
        nodeOrigin: N,
        onError: Z
      });
      j.position = F, j.internals.positionAbsolute = se, Y.set(j.id, j);
    }
    i(Y);
  }
  function O(A) {
    return Y0({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (A) => {
    t._connection = { ...A };
  };
  function K() {
    t._connection = Os;
  }
  function J() {
    t.resetStoreValues(), b();
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
    setMaxZoom: g,
    setTranslateExtent: h,
    setPaneClickDistance: v,
    unselectNodesAndEdges: b,
    addSelectedNodes: x,
    addSelectedEdges: $,
    handleNodeSelection: S,
    handleEdgeSelection: E,
    moveSelectedNodes: D,
    panBy: O,
    updateConnection: q,
    cancelConnection: K,
    reset: J
  });
}
function Nm(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = fm({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: p
  }), h = g.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), d(g), g.update(t), {
    update(v) {
      g.update(v);
    }
  };
}
var Tm = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function gd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 23, () => xn.Free), o = y(t, "preventScrolling", 7, !0), i = y(t, "zoomOnScroll", 7, !0), s = y(t, "zoomOnDoubleClick", 7, !0), a = y(t, "zoomOnPinch", 7, !0), l = y(t, "panOnDrag", 7, !0), u = y(t, "panOnScroll", 7, !1), d = y(t, "paneClickDistance", 7, 1), p = y(t, "onmovestart", 7), f = y(t, "onmove", 7), g = y(t, "onmoveend", 7), h = y(t, "oninit", 7), v = y(t, "children", 7), w = /* @__PURE__ */ T(() => n().panActivationKeyPressed || l()), b = /* @__PURE__ */ T(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let $ = !1;
  tt(() => {
    !$ && n().viewportInitialized && (h()?.(), $ = !0);
  });
  var S = {
    get store() {
      return n();
    },
    set store(O) {
      n(O), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(O = xn.Free) {
      r(O), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(O = !0) {
      o(O), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(O = !0) {
      i(O), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(O = !0) {
      s(O), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(O = !0) {
      a(O), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(O = !0) {
      l(O), m();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(O = !1) {
      u(O), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(O = 1) {
      d(O), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(O) {
      p(O), m();
    },
    get onmove() {
      return f();
    },
    set onmove(O) {
      f(O), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(O) {
      g(O), m();
    },
    get oninit() {
      return h();
    },
    set oninit(O) {
      h(O), m();
    },
    get children() {
      return v();
    },
    set children(O) {
      v(O), m();
    }
  }, E = Tm(), D = I(E);
  return nt(D, v), R(E), xt(E, (O, q) => Nm?.(O, q), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (O) => {
      n(n().dragging = O, !0);
    },
    setPanZoomInstance: (O) => {
      n(n().panZoom = O, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(b),
    panOnDrag: c(w),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || xn.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (O) => {
      n(n().viewport = { x: O[0], y: O[1], zoom: O[2] }, !0);
    }
  })), L(e, E), fe(S);
}
ue(
  gd,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
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
function Bl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Kl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function jl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Dm = /* @__PURE__ */ Q("<div><!></div>");
function hd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), u = y(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ T(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ T(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), w = /* @__PURE__ */ T(() => n().elementsSelectable && (c(v) || n().selectionRectMode === "user")), b = !1;
  function x(k) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function $(k) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(v) || k.button !== 0 || k.target !== d || !p)
      return;
    k.target?.setPointerCapture?.(k.pointerId);
    const { x: C, y: N } = mn(k, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: C, startY: N, x: C, y: N }, !0), a()?.(k);
  }
  function S(k) {
    if (!c(v) || !p || !n().selectionRect)
      return;
    b = !0;
    const C = mn(k, p), { startX: N = 0, startY: P = 0 } = n().selectionRect, H = {
      ...n().selectionRect,
      x: C.x < N ? C.x : N,
      y: C.y < P ? C.y : P,
      width: Math.abs(C.x - N),
      height: Math.abs(C.y - P)
    }, Z = f, Y = g;
    f = new Set(wa(
      n().nodeLookup,
      H,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === $i.Partial,
      !0
    ).map((X) => X.id));
    const M = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const X of f) {
      const te = n().connectionLookup.get(X);
      if (te)
        for (const { edgeId: oe } of te.values()) {
          const j = n().edgeLookup.get(oe);
          j && (j.selectable ?? M) && g.add(oe);
        }
    }
    jl(Z, f) || n(n().nodes = n().nodes.map(Kl(f)), !0), jl(Y, g) || n(n().edges = n().edges.map(Kl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = H, !0);
  }
  function E(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !c(v) && n().selectionRectMode === "user" && k.target === d && x?.(k), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(k));
  }
  const D = (k) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      k.preventDefault();
      return;
    }
    s()?.({ event: k });
  };
  var O = {
    get store() {
      return n();
    },
    set store(k) {
      n(k), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(k = !0) {
      r(k), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(k) {
      o(k), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(k) {
      i(k), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(k) {
      s(k), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(k) {
      a(k), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(k) {
      l(k), m();
    },
    get children() {
      return u();
    },
    set children(k) {
      u(k), m();
    }
  }, q = Dm();
  let K;
  var J = /* @__PURE__ */ T(() => c(w) ? void 0 : Bl(x, d));
  q.__click = function(...k) {
    c(J)?.apply(this, k);
  }, q.__pointerdown = function(...k) {
    (c(w) ? $ : void 0)?.apply(this, k);
  }, q.__pointermove = function(...k) {
    (c(w) ? S : void 0)?.apply(this, k);
  }, q.__pointerup = function(...k) {
    (c(w) ? E : void 0)?.apply(this, k);
  };
  var A = /* @__PURE__ */ T(() => Bl(D, d));
  q.__contextmenu = function(...k) {
    c(A)?.apply(this, k);
  };
  var _ = I(q);
  return nt(_, u), R(q), Zt(q, (k) => d = k, () => d), Se((k) => K = zt(q, 1, "svelte-flow__pane svelte-flow__container", null, K, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(v)
    })
  ]), L(e, q), fe(O);
}
Rn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
ue(
  hd,
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
var Om = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function vd(e, t) {
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
  }, i = Om();
  let s;
  var a = I(i);
  return nt(a, r), R(i), Se((l) => s = yt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), L(e, i), fe(o);
}
ue(vd, { store: {}, children: {} }, [], [], !0);
function md(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = U0({
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
var Lm = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), Mm = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const Hm = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function yd(e, t) {
  de(t, !0), Be(e, Hm);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    }
  }, o = Mm(), i = le(o), s = I(i, !0);
  R(i);
  var a = V(i, 2), l = I(a, !0);
  R(a);
  var u = V(a, 2);
  {
    var d = (p) => {
      var f = Lm(), g = I(f, !0);
      R(f), Se(() => {
        Ce(f, "id", `${Vm}-${n().flowId}`), Xe(g, n().ariaLiveMessage);
      }), L(p, f);
    };
    ce(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Se(() => {
    Ce(i, "id", `${wd}-${n().flowId}`), Xe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ce(a, "id", `${bd}-${n().flowId}`), Xe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), fe(r);
}
ue(yd, { store: {} }, [], [], !0);
const wd = "svelte-flow__node-desc", bd = "svelte-flow__edge-desc", Vm = "svelte-flow__aria-live";
var zm = /* @__PURE__ */ Q("<div><!></div>");
function xd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), u = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), p = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ T(() => Pt(r().data, () => ({}), !0)), v = /* @__PURE__ */ T(() => Pt(r().selected, !1)), w = /* @__PURE__ */ T(() => r().draggable), b = /* @__PURE__ */ T(() => r().selectable), x = /* @__PURE__ */ T(() => Pt(r().deletable, !0)), $ = /* @__PURE__ */ T(() => r().connectable), S = /* @__PURE__ */ T(() => r().focusable), E = /* @__PURE__ */ T(() => Pt(r().hidden, !1)), D = /* @__PURE__ */ T(() => Pt(r().dragging, !1)), O = /* @__PURE__ */ T(() => Pt(r().style, "")), q = /* @__PURE__ */ T(() => r().class), K = /* @__PURE__ */ T(() => Pt(r().type, "default")), J = /* @__PURE__ */ T(() => r().parentId), A = /* @__PURE__ */ T(() => r().sourcePosition), _ = /* @__PURE__ */ T(() => r().targetPosition), k = /* @__PURE__ */ T(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ T(() => Pt(r().measured, () => ({ width: 0, height: 0 }), !0).height), N = /* @__PURE__ */ T(() => r().initialWidth), P = /* @__PURE__ */ T(() => r().initialHeight), H = /* @__PURE__ */ T(() => r().width), Z = /* @__PURE__ */ T(() => r().height), Y = /* @__PURE__ */ T(() => r().dragHandle), M = /* @__PURE__ */ T(() => Pt(r().internals.z, 0)), X = /* @__PURE__ */ T(() => r().internals.positionAbsolute.x), te = /* @__PURE__ */ T(() => r().internals.positionAbsolute.y), oe = /* @__PURE__ */ T(() => r().internals.userNode), { id: j } = r(), G = /* @__PURE__ */ T(() => c(w) ?? n().nodesDraggable), F = /* @__PURE__ */ T(() => c(b) ?? n().elementsSelectable), se = /* @__PURE__ */ T(() => c($) ?? n().nodesConnectable), W = /* @__PURE__ */ T(() => Ic(r())), ye = /* @__PURE__ */ T(() => !!r().internals.handleBounds), we = /* @__PURE__ */ T(() => c(W) && c(ye)), ie = /* @__PURE__ */ T(() => c(S) ?? n().nodesFocusable);
  function ee(ve) {
    return n().parentLookup.has(ve);
  }
  let re = /* @__PURE__ */ T(() => ee(j)), ge = /* @__PURE__ */ De(null), he = null, ae = c(K), Ne = c(A), ke = c(_), B = /* @__PURE__ */ T(() => n().nodeTypes[c(K)] ?? _a), lt = /* @__PURE__ */ T(() => n().ariaLabelConfig);
  zr("svelteflow__node_connectable", {
    get value() {
      return c(se);
    }
  }), zr("svelteflow__node_id", j);
  let ze = /* @__PURE__ */ T(() => {
    const ve = c(k) === void 0 ? c(H) ?? c(N) : c(H), Ye = c(C) === void 0 ? c(Z) ?? c(P) : c(Z);
    if (!(ve === void 0 && Ye === void 0 && c(O) === void 0))
      return `${c(O)};${ve ? `width:${_n(ve)};` : ""}${Ye ? `height:${_n(Ye)};` : ""}`;
  });
  tt(() => {
    (c(K) !== ae || c(A) !== Ne || c(_) !== ke) && c(ge) !== null && requestAnimationFrame(() => {
      c(ge) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: c(ge), force: !0 }]]));
    }), ae = c(K), Ne = c(A), ke = c(_);
  }), tt(() => {
    o() && (!c(we) || c(ge) !== he) && (he && o().unobserve(he), c(ge) && o().observe(c(ge)), he = c(ge));
  }), Vi(() => {
    he && o()?.unobserve(he);
  });
  function qe(ve) {
    c(F) && (!n().selectNodesOnDrag || !c(G) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: c(oe), event: ve });
  }
  function Re(ve) {
    if (!(Bc(ve) || n().disableKeyboardA11y))
      if (Mc.includes(ve.key) && c(F)) {
        const Ye = ve.key === "Escape";
        n().handleNodeSelection(j, Ye, c(ge));
      } else c(G) && r().selected && Object.prototype.hasOwnProperty.call(Si, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = c(lt)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Si[ve.key], ve.shiftKey ? 4 : 1));
  }
  const ut = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ge)?.matches(":focus-visible"))
      return;
    const { width: ve, height: Ye, viewport: ct } = n();
    wa(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: ve, height: Ye }, [ct.x, ct.y, ct.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ct.zoom });
  };
  var ot = {
    get store() {
      return n();
    },
    set store(ve) {
      n(ve), m();
    },
    get node() {
      return r();
    },
    set node(ve) {
      r(ve), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ve) {
      o(ve), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ve) {
      i(ve), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ve) {
      s(ve), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ve) {
      a(ve), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ve) {
      l(ve), m();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ve) {
      u(ve), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ve) {
      d(ve), m();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(ve) {
      p(ve), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ve) {
      f(ve), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(ve) {
      g(ve), m();
    }
  }, _t = Te(), Ze = le(_t);
  {
    var Qe = (ve) => {
      var Ye = zm();
      ft(
        Ye,
        (it, St) => ({
          "data-id": j,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(K)}`,
            c(q)
          ],
          style: c(ze),
          onclick: qe,
          onpointerenter: d() ? (Ue) => d()({ node: c(oe), event: Ue }) : void 0,
          onpointerleave: p() ? (Ue) => p()({ node: c(oe), event: Ue }) : void 0,
          onpointermove: f() ? (Ue) => f()({ node: c(oe), event: Ue }) : void 0,
          oncontextmenu: g() ? (Ue) => g()({ node: c(oe), event: Ue }) : void 0,
          onkeydown: c(ie) ? Re : void 0,
          onfocus: c(ie) ? ut : void 0,
          tabIndex: c(ie) ? 0 : void 0,
          role: r().ariaRole ?? (c(ie) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${wd}-${n().flowId}`,
          ...r().domAttributes,
          [Yn]: it,
          [vn]: St
        }),
        [
          () => ({
            dragging: c(D),
            selected: c(v),
            draggable: c(G),
            connectable: c(se),
            selectable: c(F),
            nopan: c(G),
            parent: c(re)
          }),
          () => ({
            "z-index": c(M),
            transform: `translate(${c(X) ?? ""}px, ${c(te) ?? ""}px)`,
            visibility: c(W) ? "visible" : "hidden"
          })
        ]
      );
      var ct = I(Ye);
      ua(ct, () => c(B), (it, St) => {
        St(it, {
          get data() {
            return c(h);
          },
          get id() {
            return j;
          },
          get selected() {
            return c(v);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(A);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(M);
          },
          get dragging() {
            return c(D);
          },
          get draggable() {
            return c(G);
          },
          get dragHandle() {
            return c(Y);
          },
          get parentId() {
            return c(J);
          },
          get type() {
            return c(K);
          },
          get isConnectable() {
            return c(se);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(te);
          },
          get width() {
            return c(H);
          },
          get height() {
            return c(Z);
          }
        });
      }), R(Ye), xt(Ye, (it, St) => md?.(it, St), () => ({
        nodeId: j,
        isSelectable: c(F),
        disabled: !c(G),
        handleSelector: c(Y),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (it, St, Ue, bt) => {
          a()?.({ event: it, targetNode: Ue, nodes: bt });
        },
        onDragStart: (it, St, Ue, bt) => {
          l()?.({ event: it, targetNode: Ue, nodes: bt });
        },
        onDragStop: (it, St, Ue, bt) => {
          u()?.({ event: it, targetNode: Ue, nodes: bt });
        },
        store: n()
      })), Zt(Ye, (it) => U(ge, it), () => c(ge)), L(ve, Ye);
    };
    ce(Ze, (ve) => {
      c(E) || ve(Qe);
    });
  }
  return L(e, _t), fe(ot);
}
ue(
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
var Am = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function Cd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), u = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), p = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((v) => {
    const w = /* @__PURE__ */ new Map();
    v.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      w.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Vi(() => {
    f?.disconnect();
  });
  var g = {
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
      return p();
    },
    set onnodedragstop(v) {
      p(v), m();
    }
  }, h = Am();
  return kt(h, 21, () => n().visible.nodes.values(), (v) => v.id, (v, w) => {
    xd(v, {
      get node() {
        return c(w);
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
  }), R(h), L(e, h), fe(g);
}
ue(
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
var Rm = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function $d(e, t) {
  de(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ T(() => n().source), u = /* @__PURE__ */ T(() => n().target), d = /* @__PURE__ */ T(() => n().sourceX), p = /* @__PURE__ */ T(() => n().sourceY), f = /* @__PURE__ */ T(() => n().targetX), g = /* @__PURE__ */ T(() => n().targetY), h = /* @__PURE__ */ T(() => n().sourcePosition), v = /* @__PURE__ */ T(() => n().targetPosition), w = /* @__PURE__ */ T(() => Pt(n().animated, !1)), b = /* @__PURE__ */ T(() => Pt(n().selected, !1)), x = /* @__PURE__ */ T(() => n().label), $ = /* @__PURE__ */ T(() => n().labelStyle), S = /* @__PURE__ */ T(() => Pt(n().data, () => ({}), !0)), E = /* @__PURE__ */ T(() => n().style), D = /* @__PURE__ */ T(() => n().interactionWidth), O = /* @__PURE__ */ T(() => Pt(n().type, "default")), q = /* @__PURE__ */ T(() => n().sourceHandle), K = /* @__PURE__ */ T(() => n().targetHandle), J = /* @__PURE__ */ T(() => n().markerStart), A = /* @__PURE__ */ T(() => n().markerEnd), _ = /* @__PURE__ */ T(() => n().selectable), k = /* @__PURE__ */ T(() => n().focusable), C = /* @__PURE__ */ T(() => Pt(n().deletable, !0)), N = /* @__PURE__ */ T(() => n().hidden), P = /* @__PURE__ */ T(() => n().zIndex), H = /* @__PURE__ */ T(() => n().class), Z = /* @__PURE__ */ T(() => n().ariaLabel), Y = null;
  const { id: M } = n();
  zr("svelteflow__edge_id", M);
  let X = /* @__PURE__ */ T(() => c(_) ?? r().elementsSelectable), te = /* @__PURE__ */ T(() => c(k) ?? r().edgesFocusable), oe = /* @__PURE__ */ T(() => r().edgeTypes[c(O)] ?? Sa), j = /* @__PURE__ */ T(() => c(J) ? `url('#${Ms(c(J), r().flowId)}')` : void 0), G = /* @__PURE__ */ T(() => c(A) ? `url('#${Ms(c(A), r().flowId)}')` : void 0);
  function F(re) {
    const ge = r().edgeLookup.get(M);
    ge && (c(X) && r().handleEdgeSelection(M), o()?.({ event: re, edge: ge }));
  }
  function se(re, ge) {
    const he = r().edgeLookup.get(M);
    he && ge({ event: re, edge: he });
  }
  function W(re) {
    if (!r().disableKeyboardA11y && Mc.includes(re.key) && c(X)) {
      const { unselectNodesAndEdges: ge, addSelectedEdges: he } = r();
      re.key === "Escape" ? (Y?.blur(), ge({ edges: [n()] })) : he([M]);
    }
  }
  var ye = {
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), m();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), m();
    }
  }, we = Te(), ie = le(we);
  {
    var ee = (re) => {
      var ge = Rm();
      let he;
      var ae = I(ge);
      ft(
        ae,
        (ke) => ({
          class: ["svelte-flow__edge", c(H)],
          "data-id": M,
          onclick: F,
          oncontextmenu: i() ? (B) => {
            se(B, i());
          } : void 0,
          onpointerenter: s() ? (B) => {
            se(B, s());
          } : void 0,
          onpointerleave: a() ? (B) => {
            se(B, a());
          } : void 0,
          "aria-label": c(Z) === null ? void 0 : c(Z) ? c(Z) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(te) ? `${bd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(te) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(te) ? W : void 0,
          tabindex: c(te) ? 0 : void 0,
          ...n().domAttributes,
          [Yn]: ke
        }),
        [
          () => ({
            animated: c(w),
            selected: c(b),
            selectable: c(X)
          })
        ]
      );
      var Ne = I(ae);
      ua(Ne, () => c(oe), (ke, B) => {
        B(ke, {
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
            return c(p);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(g);
          },
          get sourcePosition() {
            return c(h);
          },
          get targetPosition() {
            return c(v);
          },
          get animated() {
            return c(w);
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
            return c(S);
          },
          get style() {
            return c(E);
          },
          get interactionWidth() {
            return c(D);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(C);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(q);
          },
          get targetHandleId() {
            return c(K);
          },
          get markerStart() {
            return c(j);
          },
          get markerEnd() {
            return c(G);
          }
        });
      }), R(ae), Zt(ae, (ke) => Y = ke, () => Y), R(ge), Se((ke) => he = yt(ge, "", he, ke), [() => ({ "z-index": c(P) })]), L(re, ge);
    };
    ce(ie, (re) => {
      c(N) || re(ee);
    });
  }
  return L(e, we), fe(ye);
}
ue(
  $d,
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
Sp();
var Im = /* @__PURE__ */ me("<defs></defs>");
function kd(e, t) {
  de(t, !1);
  const n = cn();
  nc();
  var r = Im();
  kt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    _d(o, Fe(() => c(i)));
  }), R(r), L(e, r), fe();
}
ue(kd, {}, [], [], !0);
var qm = /* @__PURE__ */ me('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Zm = /* @__PURE__ */ me('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Bm = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function _d(e, t) {
  de(t, !0);
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
  }, p = Bm(), f = I(p);
  {
    var g = (v) => {
      var w = qm();
      let b;
      Se(
        (x) => {
          Ce(w, "stroke-width", u()), b = yt(w, "", b, x);
        },
        [() => ({ stroke: l() })]
      ), L(v, w);
    }, h = (v) => {
      var w = Te(), b = le(w);
      {
        var x = ($) => {
          var S = Zm();
          let E;
          Se(
            (D) => {
              Ce(S, "stroke-width", u()), E = yt(S, "", E, D);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), L($, S);
        };
        ce(
          b,
          ($) => {
            r() === xo.ArrowClosed && $(x);
          },
          !0
        );
      }
      L(v, w);
    };
    ce(f, (v) => {
      r() === xo.Arrow ? v(g) : v(h, !1);
    });
  }
  return R(p), Se(() => {
    Ce(p, "id", n()), Ce(p, "markerWidth", `${o()}`), Ce(p, "markerHeight", `${i()}`), Ce(p, "markerUnits", s()), Ce(p, "orient", a());
  }), L(e, p), fe(d);
}
ue(
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
var Km = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Sd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), m();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), m();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), m();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), m();
    }
  }, l = Km(), u = I(l), d = I(u);
  kd(d, {}), R(u);
  var p = V(u, 2);
  return kt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    $d(f, {
      get edge() {
        return c(g);
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
      set store(h) {
        n(h);
      }
    });
  }), R(l), L(e, l), fe(a);
}
ue(
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
var jm = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Ym = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ea(e, t) {
  de(t, !0), Be(e, Ym);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(p = 0) {
      n(p), m();
    },
    get y() {
      return r();
    },
    set y(p = 0) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p = 0) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p = 0) {
      i(p), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(p = !0) {
      s(p), m();
    }
  }, l = Te(), u = le(l);
  {
    var d = (p) => {
      var f = jm();
      let g;
      Se((h) => g = yt(f, "", g, h), [
        () => ({
          width: typeof o() == "string" ? o() : _n(o()),
          height: typeof i() == "string" ? i() : _n(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), L(p, f);
    };
    ce(u, (p) => {
      s() && p(d);
    });
  }
  return L(e, l), fe(a);
}
ue(Ea, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Xm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function Fm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var Wm = /* @__PURE__ */ Q("<div><!></div>");
const Gm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Ed(e, t) {
  de(t, !0), Be(e, Gm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ De(void 0);
  tt(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ T(() => n().selectionRectMode === "nodes" ? (n().nodes, Ao(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(Si, v.key) && (v.preventDefault(), n().moveSelectedNodes(Si[v.key], v.shiftKey ? 4 : 1));
  }
  var p = {
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
  }, f = Te(), g = le(f);
  {
    var h = (v) => {
      var w = Wm();
      w.__contextmenu = [Xm, n, a], w.__click = [Fm, n, s], w.__keydown = function(...$) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, $);
      };
      let b;
      var x = I(w);
      Ea(x, { width: "100%", height: "100%", x: 0, y: 0 }), R(w), xt(w, ($, S) => md?.($, S), () => ({
        disabled: !1,
        store: n(),
        onDrag: ($, S, E, D) => {
          r()?.({ event: $, targetNode: null, nodes: D });
        },
        onDragStart: ($, S, E, D) => {
          o()?.({ event: $, targetNode: null, nodes: D });
        },
        onDragStop: ($, S, E, D) => {
          i()?.({ event: $, targetNode: null, nodes: D });
        }
      })), Zt(w, ($) => U(l, $), () => c(l)), Se(
        ($) => {
          zt(w, 1, In(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), Ce(w, "role", n().disableKeyboardA11y ? void 0 : "button"), Ce(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), b = yt(w, "", b, $);
        },
        [
          () => ({
            width: _n(c(u).width),
            height: _n(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(v, w);
    };
    ce(g, (v) => {
      n().selectionRectMode === "nodes" && c(u) && On(c(u).x) && On(c(u).y) && v(h);
    });
  }
  return L(e, f), fe(p);
}
Rn(["contextmenu", "click", "keydown"]);
ue(
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
function Um(e) {
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
function pn(e, t) {
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
      }, { modifier: f, key: g, callback: h, preventDefault: v, enabled: w } = p;
      if (w) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let $ = !1;
          for (const S of x)
            if ((Array.isArray(S) ? S : [S]).reduce(
              (E, D) => E | Um(D),
              0
            ) === u) {
              $ = !0;
              break;
            }
          if (!$) continue;
        }
        v && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), h?.(b);
      }
    }
  }
  let s;
  return n && (s = bs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = bs(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function wt() {
  const e = /* @__PURE__ */ T(cn), t = (i) => {
    const s = ql(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? k0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Kr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = ht(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && ql(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = ht(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && mm(u) ? u : { ...l, ...u };
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
    getIntersectingNodes: (i, s = !0, a) => {
      const l = Nl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Kr(p), g = Co(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Nl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = Co(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await b0({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = ht(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = ht(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return Io(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = _i(i, [s, a, l]);
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
    getNodesBounds: (i) => v0(i, {
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
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => lr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => lr() ? "Meta" : "Control"), { deleteElements: l } = wt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function p(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function f(w, b) {
    return (Array.isArray(w) ? w : [w]).map((x) => {
      const $ = p(x);
      return {
        key: $,
        modifier: d(x),
        enabled: $ !== null,
        callback: b
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function h() {
    const w = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: w, edges: b });
  }
  var v = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = lr() ? "Meta" : "Control") {
      o(w), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = lr() ? "Meta" : "Control") {
      a(w), m();
    }
  };
  return Qa("blur", Ot, g), Qa("contextmenu", Ot, g), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Bc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), xt(Ot, (w, b) => pn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), fe(v);
}
ue(
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
var Jm = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), Qm = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Nd(e, t) {
  de(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ T(() => {
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
      case Tn.Bezier: {
        const [g] = jc(f);
        return g;
      }
      case Tn.Straight: {
        const [g] = Xc(f);
        return g;
      }
      case Tn.Step:
      case Tn.SmoothStep: {
        const [g] = xa({
          ...f,
          borderRadius: r() === Tn.Step ? 0 : void 0
        });
        return g;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), m();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), m();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), m();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), m();
    }
  }, u = Te(), d = le(u);
  {
    var p = (f) => {
      var g = Qm(), h = I(g), v = I(h);
      {
        var w = (x) => {
          var $ = Te(), S = le($);
          ua(S, s, (E, D) => {
            D(E, {});
          }), L(x, $);
        }, b = (x) => {
          var $ = Jm();
          Se(() => {
            Ce($, "d", c(a)), yt($, i());
          }), L(x, $);
        };
        ce(v, (x) => {
          s() ? x(w) : x(b, !1);
        });
      }
      R(h), R(g), Se(
        (x) => {
          Ce(g, "width", n().width), Ce(g, "height", n().height), yt(g, o()), zt(h, 0, x);
        },
        [
          () => In([
            "svelte-flow__connection",
            g0(n().connection.isValid)
          ])
        ]
      ), L(f, g);
    };
    ce(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return L(e, u), fe(l);
}
ue(
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
var e2 = /* @__PURE__ */ Q("<div><!></div>");
function Zo(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ je(t, [
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
    set position(p = "top-right") {
      n(p), m();
    },
    get style() {
      return r();
    },
    set style(p) {
      r(p), m();
    },
    get class() {
      return o();
    },
    set class(p) {
      o(p), m();
    },
    get children() {
      return i();
    },
    set children(p) {
      i(p), m();
    }
  }, u = e2();
  ft(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = I(u);
  return nt(d, () => i() ?? mt), R(u), L(e, u), fe(l);
}
ue(Zo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var t2 = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Td(e, t) {
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
  }, i = Te(), s = le(i);
  {
    var a = (l) => {
      Zo(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var p = t2();
          L(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    ce(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return L(e, i), fe(o);
}
ue(Td, { proOptions: {}, position: {} }, [], [], !0);
var n2 = /* @__PURE__ */ Q("<div><!></div>");
const r2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Dd(e, t) {
  de(t, !0), Be(e, r2);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), u = y(t, "rest", 7), d = /* @__PURE__ */ T(() => u().class), p = /* @__PURE__ */ T(() => Jp(u(), [
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
    "style",
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
    "ariaLabelConfig"
  ]));
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var g = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), m();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), m();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), m();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), m();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), m();
    }
  }, h = n2();
  ft(
    h,
    (w) => ({
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
      [vn]: w
    }),
    [
      () => ({ width: _n(n()), height: _n(r()) })
    ],
    void 0,
    "svelte-12wlba6"
  );
  var v = I(h);
  return nt(v, () => l() ?? mt), R(h), Zt(h, (w) => i(w), () => i()), il(h, "clientHeight", a), il(h, "clientWidth", s), L(e, h), fe(g);
}
ue(
  Dd,
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
var o2 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), i2 = /* @__PURE__ */ Q("<!> <!>", 1), s2 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function Od(e, t) {
  de(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), u = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), p = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), h = y(t, "onmove", 7), v = y(t, "oninit", 7), w = y(t, "onnodeclick", 7), b = y(t, "onnodecontextmenu", 7), x = y(t, "onnodedrag", 7), $ = y(t, "onnodedragstart", 7), S = y(t, "onnodedragstop", 7), E = y(t, "onnodepointerenter", 7), D = y(t, "onnodepointermove", 7), O = y(t, "onnodepointerleave", 7), q = y(t, "onselectionclick", 7), K = y(t, "onselectioncontextmenu", 7), J = y(t, "onselectionstart", 7), A = y(t, "onselectionend", 7), _ = y(t, "onedgeclick", 7), k = y(t, "onedgecontextmenu", 7), C = y(t, "onedgepointerenter", 7), N = y(t, "onedgepointerleave", 7), P = y(t, "onpaneclick", 7), H = y(t, "onpanecontextmenu", 7), Z = y(t, "panOnScrollMode", 23, () => xn.Free), Y = y(t, "preventScrolling", 7, !0), M = y(t, "zoomOnScroll", 7, !0), X = y(t, "zoomOnDoubleClick", 7, !0), te = y(t, "zoomOnPinch", 7, !0), oe = y(t, "panOnScroll", 7, !1), j = y(t, "panOnDrag", 7, !0), G = y(t, "selectionOnDrag", 7, !0), F = y(t, "connectionLineComponent", 7), se = y(t, "connectionLineStyle", 7), W = y(t, "connectionLineContainerStyle", 7), ye = y(t, "connectionLineType", 23, () => Tn.Bezier), we = y(t, "attributionPosition", 7), ie = y(t, "children", 7), ee = y(t, "nodes", 31, () => Ft([])), re = y(t, "edges", 31, () => Ft([])), ge = y(t, "viewport", 31, () => {
  }), he = /* @__PURE__ */ je(t, [
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
  ]), ae = pd({
    props: he,
    width: n(),
    height: r(),
    get nodes() {
      return ee();
    },
    set nodes(B) {
      ee(B);
    },
    get edges() {
      return re();
    },
    set edges(B) {
      re(B);
    },
    get viewport() {
      return ge();
    },
    set viewport(B) {
      ge(B);
    }
  });
  const Ne = Un(Ei);
  Ne && Ne.setStore && Ne.setStore(ae), zr(Ei, {
    provider: !1,
    getStore() {
      return ae;
    }
  }), tt(() => {
    const B = { nodes: ae.selectedNodes, edges: ae.selectedEdges };
    ht(() => t.onselectionchange)?.(B);
    for (const lt of ae.selectionChangeHandlers.values())
      lt(B);
  }), Vi(() => {
    ae.reset();
  });
  var ke = {
    get width() {
      return n();
    },
    set width(B) {
      n(B), m();
    },
    get height() {
      return r();
    },
    set height(B) {
      r(B), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(B) {
      o(B), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(B) {
      i(B), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(B) {
      s(B), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(B) {
      a(B), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(B) {
      l(B), m();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(B) {
      u(B), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(B = 1) {
      d(B), m();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(B = 1) {
      p(B), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(B) {
      f(B), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(B) {
      g(B), m();
    },
    get onmove() {
      return h();
    },
    set onmove(B) {
      h(B), m();
    },
    get oninit() {
      return v();
    },
    set oninit(B) {
      v(B), m();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(B) {
      w(B), m();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(B) {
      b(B), m();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(B) {
      x(B), m();
    },
    get onnodedragstart() {
      return $();
    },
    set onnodedragstart(B) {
      $(B), m();
    },
    get onnodedragstop() {
      return S();
    },
    set onnodedragstop(B) {
      S(B), m();
    },
    get onnodepointerenter() {
      return E();
    },
    set onnodepointerenter(B) {
      E(B), m();
    },
    get onnodepointermove() {
      return D();
    },
    set onnodepointermove(B) {
      D(B), m();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(B) {
      O(B), m();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(B) {
      q(B), m();
    },
    get onselectioncontextmenu() {
      return K();
    },
    set onselectioncontextmenu(B) {
      K(B), m();
    },
    get onselectionstart() {
      return J();
    },
    set onselectionstart(B) {
      J(B), m();
    },
    get onselectionend() {
      return A();
    },
    set onselectionend(B) {
      A(B), m();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(B) {
      _(B), m();
    },
    get onedgecontextmenu() {
      return k();
    },
    set onedgecontextmenu(B) {
      k(B), m();
    },
    get onedgepointerenter() {
      return C();
    },
    set onedgepointerenter(B) {
      C(B), m();
    },
    get onedgepointerleave() {
      return N();
    },
    set onedgepointerleave(B) {
      N(B), m();
    },
    get onpaneclick() {
      return P();
    },
    set onpaneclick(B) {
      P(B), m();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(B) {
      H(B), m();
    },
    get panOnScrollMode() {
      return Z();
    },
    set panOnScrollMode(B = xn.Free) {
      Z(B), m();
    },
    get preventScrolling() {
      return Y();
    },
    set preventScrolling(B = !0) {
      Y(B), m();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(B = !0) {
      M(B), m();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(B = !0) {
      X(B), m();
    },
    get zoomOnPinch() {
      return te();
    },
    set zoomOnPinch(B = !0) {
      te(B), m();
    },
    get panOnScroll() {
      return oe();
    },
    set panOnScroll(B = !1) {
      oe(B), m();
    },
    get panOnDrag() {
      return j();
    },
    set panOnDrag(B = !0) {
      j(B), m();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(B = !0) {
      G(B), m();
    },
    get connectionLineComponent() {
      return F();
    },
    set connectionLineComponent(B) {
      F(B), m();
    },
    get connectionLineStyle() {
      return se();
    },
    set connectionLineStyle(B) {
      se(B), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(B) {
      W(B), m();
    },
    get connectionLineType() {
      return ye();
    },
    set connectionLineType(B = Tn.Bezier) {
      ye(B), m();
    },
    get attributionPosition() {
      return we();
    },
    set attributionPosition(B) {
      we(B), m();
    },
    get children() {
      return ie();
    },
    set children(B) {
      ie(B), m();
    },
    get nodes() {
      return ee();
    },
    set nodes(B = []) {
      ee(B), m();
    },
    get edges() {
      return re();
    },
    set edges(B = []) {
      re(B), m();
    },
    get viewport() {
      return ge();
    },
    set viewport(B = void 0) {
      ge(B), m();
    }
  };
  return Dd(e, {
    get colorMode() {
      return ae.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return he;
    },
    get domNode() {
      return ae.domNode;
    },
    set domNode(B) {
      ae.domNode = B;
    },
    get clientWidth() {
      return ae.width;
    },
    set clientWidth(B) {
      ae.width = B;
    },
    get clientHeight() {
      return ae.height;
    },
    set clientHeight(B) {
      ae.height = B;
    },
    children: (B, lt) => {
      var ze = s2(), qe = le(ze);
      Pd(qe, {
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
          return ae;
        },
        set store(Ze) {
          ae = Ze;
        }
      });
      var Re = V(qe, 2);
      gd(Re, {
        get panOnScrollMode() {
          return Z();
        },
        get preventScrolling() {
          return Y();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return te();
        },
        get panOnScroll() {
          return oe();
        },
        get panOnDrag() {
          return j();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return h();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return v();
        },
        get store() {
          return ae;
        },
        set store(Ze) {
          ae = Ze;
        },
        children: (Ze, Qe) => {
          hd(Ze, {
            get onpaneclick() {
              return P();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return J();
            },
            get onselectionend() {
              return A();
            },
            get panOnDrag() {
              return j();
            },
            get selectionOnDrag() {
              return G();
            },
            get store() {
              return ae;
            },
            set store(ve) {
              ae = ve;
            },
            children: (ve, Ye) => {
              var ct = i2(), it = le(ct);
              vd(it, {
                get store() {
                  return ae;
                },
                set store(Ue) {
                  ae = Ue;
                },
                children: (Ue, bt) => {
                  var Kt = o2(), fn = V(le(Kt), 2);
                  Sd(fn, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return k();
                    },
                    get onedgepointerenter() {
                      return C();
                    },
                    get onedgepointerleave() {
                      return N();
                    },
                    get store() {
                      return ae;
                    },
                    set store(Jt) {
                      ae = Jt;
                    }
                  });
                  var Kn = V(fn, 4);
                  Nd(Kn, {
                    get type() {
                      return ye();
                    },
                    get LineComponent() {
                      return F();
                    },
                    get containerStyle() {
                      return W();
                    },
                    get style() {
                      return se();
                    },
                    get store() {
                      return ae;
                    },
                    set store(Jt) {
                      ae = Jt;
                    }
                  });
                  var Qr = V(Kn, 2);
                  Cd(Qr, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return E();
                    },
                    get onnodepointermove() {
                      return D();
                    },
                    get onnodepointerleave() {
                      return O();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return ae;
                    },
                    set store(Jt) {
                      ae = Jt;
                    }
                  });
                  var jn = V(Qr, 2);
                  Ed(jn, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return K();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return ae;
                    },
                    set store(Jt) {
                      ae = Jt;
                    }
                  }), be(2), L(Ue, Kt);
                },
                $$slots: { default: !0 }
              });
              var St = V(it, 2);
              {
                let Ue = /* @__PURE__ */ T(() => !!(ae.selectionRect && ae.selectionRectMode === "user")), bt = /* @__PURE__ */ T(() => ae.selectionRect?.width), Kt = /* @__PURE__ */ T(() => ae.selectionRect?.height), fn = /* @__PURE__ */ T(() => ae.selectionRect?.x), Kn = /* @__PURE__ */ T(() => ae.selectionRect?.y);
                Ea(St, {
                  get isVisible() {
                    return c(Ue);
                  },
                  get width() {
                    return c(bt);
                  },
                  get height() {
                    return c(Kt);
                  },
                  get x() {
                    return c(fn);
                  },
                  get y() {
                    return c(Kn);
                  }
                });
              }
              L(ve, ct);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var ut = V(Re, 2);
      Td(ut, {
        get proOptions() {
          return o();
        },
        get position() {
          return we();
        }
      });
      var ot = V(ut, 2);
      yd(ot, {
        get store() {
          return ae;
        }
      });
      var _t = V(ot, 2);
      nt(_t, () => ie() ?? mt), L(B, ze);
    },
    $$slots: { default: !0 }
  }), fe(ke);
}
ue(
  Od,
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
function Ld(e, t) {
  de(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ De(pd({ props: {}, nodes: [], edges: [] }));
  zr(Ei, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      U(r, a);
    }
  }), Vi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = Te(), s = le(i);
  return nt(s, () => n() ?? mt), L(e, i), fe(o);
}
ue(Ld, { children: {} }, [], [], !0);
var a2 = /* @__PURE__ */ Q("<button><!></button>");
function lo(e, t) {
  de(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), u = y(t, "children", 7), d = /* @__PURE__ */ je(t, [
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
    set class(h) {
      n(h), m();
    },
    get bgColor() {
      return r();
    },
    set bgColor(h) {
      r(h), m();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(h) {
      o(h), m();
    },
    get color() {
      return i();
    },
    set color(h) {
      i(h), m();
    },
    get colorHover() {
      return s();
    },
    set colorHover(h) {
      s(h), m();
    },
    get borderColor() {
      return a();
    },
    set borderColor(h) {
      a(h), m();
    },
    get onclick() {
      return l();
    },
    set onclick(h) {
      l(h), m();
    },
    get children() {
      return u();
    },
    set children(h) {
      u(h), m();
    }
  }, f = a2();
  ft(
    f,
    (h) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [vn]: h
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
  var g = I(f);
  return nt(g, () => u() ?? mt), R(f), L(e, f), fe(p);
}
ue(
  lo,
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
var l2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Md(e) {
  var t = l2();
  L(e, t);
}
ue(Md, {}, [], [], !0);
var u2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Hd(e) {
  var t = u2();
  L(e, t);
}
ue(Hd, {}, [], [], !0);
var c2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Vd(e) {
  var t = c2();
  L(e, t);
}
ue(Vd, {}, [], [], !0);
var d2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function zd(e) {
  var t = d2();
  L(e, t);
}
ue(zd, {}, [], [], !0);
var f2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Ad(e) {
  var t = f2();
  L(e, t);
}
ue(Ad, {}, [], [], !0);
var p2 = /* @__PURE__ */ Q("<!> <!>", 1), g2 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function Rd(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), u = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), p = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), h = y(t, "fitViewOptions", 7), v = y(t, "children", 7), w = y(t, "before", 7), b = y(t, "after", 7), x = /* @__PURE__ */ je(t, [
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
  ]), $ = /* @__PURE__ */ T(cn);
  const S = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let E = /* @__PURE__ */ T(() => c($).nodesDraggable || c($).nodesConnectable || c($).elementsSelectable), D = /* @__PURE__ */ T(() => c($).viewport.zoom <= c($).minZoom), O = /* @__PURE__ */ T(() => c($).viewport.zoom >= c($).maxZoom), q = /* @__PURE__ */ T(() => c($).ariaLabelConfig), K = /* @__PURE__ */ T(() => r() === "horizontal" ? "horizontal" : "vertical");
  const J = () => {
    c($).zoomIn();
  }, A = () => {
    c($).zoomOut();
  }, _ = () => {
    c($).fitView(h());
  }, k = () => {
    let N = !c(E);
    c($).nodesDraggable = N, c($).nodesConnectable = N, c($).elementsSelectable = N;
  };
  var C = {
    get position() {
      return n();
    },
    set position(N = "bottom-left") {
      n(N), m();
    },
    get orientation() {
      return r();
    },
    set orientation(N = "vertical") {
      r(N), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(N = !0) {
      o(N), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(N = !0) {
      i(N), m();
    },
    get showLock() {
      return s();
    },
    set showLock(N = !0) {
      s(N), m();
    },
    get style() {
      return a();
    },
    set style(N) {
      a(N), m();
    },
    get class() {
      return l();
    },
    set class(N) {
      l(N), m();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(N) {
      u(N), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(N) {
      d(N), m();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(N) {
      p(N), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(N) {
      f(N), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(N) {
      g(N), m();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(N) {
      h(N), m();
    },
    get children() {
      return v();
    },
    set children(N) {
      v(N), m();
    },
    get before() {
      return w();
    },
    set before(N) {
      w(N), m();
    },
    get after() {
      return b();
    },
    set after(N) {
      b(N), m();
    }
  };
  {
    let N = /* @__PURE__ */ T(() => [
      "svelte-flow__controls",
      c(K),
      l()
    ]);
    Zo(e, Fe(
      {
        get class() {
          return c(N);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(q)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (P, H) => {
          var Z = g2(), Y = le(Z);
          {
            var M = (ie) => {
              var ee = Te(), re = le(ee);
              nt(re, w), L(ie, ee);
            };
            ce(Y, (ie) => {
              w() && ie(M);
            });
          }
          var X = V(Y, 2);
          {
            var te = (ie) => {
              var ee = p2(), re = le(ee);
              lo(re, Fe(
                {
                  onclick: J,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(q)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => S,
                {
                  children: (he, ae) => {
                    Md(he);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ge = V(re, 2);
              lo(ge, Fe(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(q)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(D);
                  }
                },
                () => S,
                {
                  children: (he, ae) => {
                    Hd(he);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ie, ee);
            };
            ce(X, (ie) => {
              o() && ie(te);
            });
          }
          var oe = V(X, 2);
          {
            var j = (ie) => {
              lo(ie, Fe(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(q)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.fitView.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ee, re) => {
                    Vd(ee);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ce(oe, (ie) => {
              i() && ie(j);
            });
          }
          var G = V(oe, 2);
          {
            var F = (ie) => {
              lo(ie, Fe(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: k,
                  get title() {
                    return c(q)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.interactive.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ee, re) => {
                    var ge = Te(), he = le(ge);
                    {
                      var ae = (ke) => {
                        Ad(ke);
                      }, Ne = (ke) => {
                        zd(ke);
                      };
                      ce(he, (ke) => {
                        c(E) ? ke(ae) : ke(Ne, !1);
                      });
                    }
                    L(ee, ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ce(G, (ie) => {
              s() && ie(F);
            });
          }
          var se = V(G, 2);
          {
            var W = (ie) => {
              var ee = Te(), re = le(ee);
              nt(re, v), L(ie, ee);
            };
            ce(se, (ie) => {
              v() && ie(W);
            });
          }
          var ye = V(se, 2);
          {
            var we = (ie) => {
              var ee = Te(), re = le(ee);
              nt(re, b), L(ie, ee);
            };
            ce(ye, (ie) => {
              b() && ie(we);
            });
          }
          L(P, Z);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return fe(C);
}
ue(
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
var Ln;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ln || (Ln = {}));
var h2 = /* @__PURE__ */ me("<circle></circle>");
function Id(e, t) {
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
  }, i = h2();
  return Se(() => {
    Ce(i, "cx", n()), Ce(i, "cy", n()), Ce(i, "r", n()), zt(i, 0, In(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), fe(o);
}
ue(Id, { radius: {}, class: {} }, [], [], !0);
var v2 = /* @__PURE__ */ me("<path></path>");
function qd(e, t) {
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
  }, a = v2();
  return Se(() => {
    Ce(a, "stroke-width", n()), Ce(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), zt(a, 0, In(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), fe(s);
}
ue(qd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const m2 = {
  [Ln.Dots]: 1,
  [Ln.Lines]: 1,
  [Ln.Cross]: 6
};
var y2 = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Zd(e, t) {
  de(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => Ln.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), u = y(t, "patternClass", 7), d = y(t, "class", 7), p = /* @__PURE__ */ T(cn), f = /* @__PURE__ */ T(() => r() === Ln.Dots), g = /* @__PURE__ */ T(() => r() === Ln.Cross), h = /* @__PURE__ */ T(() => Array.isArray(o()) ? o() : [o(), o()]), v = /* @__PURE__ */ T(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ T(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ T(() => (i() ?? m2[r()]) * c(p).viewport.zoom), x = /* @__PURE__ */ T(() => c(g) ? [c(b), c(b)] : c(w)), $ = /* @__PURE__ */ T(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var S = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), m();
    },
    get variant() {
      return r();
    },
    set variant(_ = Ln.Dots) {
      r(_), m();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), m();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), m();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), m();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), m();
    }
  }, E = y2();
  let D;
  var O = I(E), q = I(O);
  {
    var K = (_) => {
      {
        let k = /* @__PURE__ */ T(() => c(b) / 2);
        Id(_, {
          get radius() {
            return c(k);
          },
          get class() {
            return u();
          }
        });
      }
    }, J = (_) => {
      qd(_, {
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
    ce(q, (_) => {
      c(f) ? _(K) : _(J, !1);
    });
  }
  R(O);
  var A = V(O);
  return R(E), Se(
    (_) => {
      zt(E, 0, In([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), D = yt(E, "", D, _), Ce(O, "id", c(v)), Ce(O, "x", c(p).viewport.x % c(w)[0]), Ce(O, "y", c(p).viewport.y % c(w)[1]), Ce(O, "width", c(w)[0]), Ce(O, "height", c(w)[1]), Ce(O, "patternTransform", `translate(-${c($)[0]},-${c($)[1]})`), Ce(A, "fill", `url(#${c(v)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), L(e, E), fe(S);
}
ue(
  Zd,
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
var w2 = /* @__PURE__ */ me("<rect></rect>");
function Bd(e, t) {
  de(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), u = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), p = y(t, "selected", 7), f = y(t, "class", 7);
  var g = {
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
      return s();
    },
    set borderRadius(b = 5) {
      s(b), m();
    },
    get color() {
      return a();
    },
    set color(b) {
      a(b), m();
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
      return d();
    },
    set strokeWidth(b = 2) {
      d(b), m();
    },
    get selected() {
      return p();
    },
    set selected(b) {
      p(b), m();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), m();
    }
  }, h = w2();
  let v, w;
  return Se(
    (b, x) => {
      v = zt(h, 0, In(["svelte-flow__minimap-node", f()]), null, v, b), Ce(h, "x", n()), Ce(h, "y", r()), Ce(h, "rx", s()), Ce(h, "ry", s()), Ce(h, "width", o()), Ce(h, "height", i()), Ce(h, "shape-rendering", l()), w = yt(h, "", w, x);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), L(e, h), fe(g);
}
ue(
  Bd,
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
function b2(e, t) {
  const n = rm({
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
const ds = (e) => e instanceof Function ? e : () => e;
var x2 = /* @__PURE__ */ me("<title> </title>"), C2 = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), $2 = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Kd(e, t) {
  de(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), u = y(t, "bgColor", 7), d = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), f = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), h = y(t, "height", 7, 150), v = y(t, "pannable", 7, !0), w = y(t, "zoomable", 7, !0), b = y(t, "inversePan", 7), x = y(t, "zoomStep", 7), $ = y(t, "class", 7), S = /* @__PURE__ */ je(t, [
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
  ]), E = /* @__PURE__ */ T(cn), D = /* @__PURE__ */ T(() => c(E).ariaLabelConfig);
  const O = i() === void 0 ? void 0 : ds(i()), q = ds(o()), K = ds(s()), J = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let A = /* @__PURE__ */ T(() => `svelte-flow__minimap-desc-${c(E).flowId}`), _ = /* @__PURE__ */ T(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), k = /* @__PURE__ */ T(() => c(E).nodeLookup.size > 0 ? Rc(Ao(c(E).nodeLookup, { filter: (W) => !W.hidden }), c(_)) : c(_)), C = /* @__PURE__ */ T(() => c(k).width / g()), N = /* @__PURE__ */ T(() => c(k).height / h()), P = /* @__PURE__ */ T(() => Math.max(c(C), c(N))), H = /* @__PURE__ */ T(() => c(P) * g()), Z = /* @__PURE__ */ T(() => c(P) * h()), Y = /* @__PURE__ */ T(() => 5 * c(P)), M = /* @__PURE__ */ T(() => c(k).x - (c(H) - c(k).width) / 2 - c(Y)), X = /* @__PURE__ */ T(() => c(k).y - (c(Z) - c(k).height) / 2 - c(Y)), te = /* @__PURE__ */ T(() => c(H) + c(Y) * 2), oe = /* @__PURE__ */ T(() => c(Z) + c(Y) * 2);
  const j = () => c(P);
  var G = {
    get position() {
      return n();
    },
    set position(W = "bottom-right") {
      n(W), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(W) {
      r(W), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(W = "transparent") {
      o(W), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(W) {
      i(W), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(W = "") {
      s(W), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(W = 5) {
      a(W), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(W = 2) {
      l(W), m();
    },
    get bgColor() {
      return u();
    },
    set bgColor(W) {
      u(W), m();
    },
    get maskColor() {
      return d();
    },
    set maskColor(W) {
      d(W), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(W) {
      p(W), m();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(W) {
      f(W), m();
    },
    get width() {
      return g();
    },
    set width(W = 200) {
      g(W), m();
    },
    get height() {
      return h();
    },
    set height(W = 150) {
      h(W), m();
    },
    get pannable() {
      return v();
    },
    set pannable(W = !0) {
      v(W), m();
    },
    get zoomable() {
      return w();
    },
    set zoomable(W = !0) {
      w(W), m();
    },
    get inversePan() {
      return b();
    },
    set inversePan(W) {
      b(W), m();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(W) {
      x(W), m();
    },
    get class() {
      return $();
    },
    set class(W) {
      $(W), m();
    }
  }, F = $2(), se = le(F);
  {
    let W = /* @__PURE__ */ T(() => ["svelte-flow__minimap", $()]);
    fg(se, () => ({ "--xy-minimap-background-color-props": u() })), Zo(se.lastChild, Fe(
      {
        get position() {
          return n();
        },
        get class() {
          return c(W);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => S,
      {
        children: (ye, we) => {
          var ie = Te(), ee = le(ie);
          {
            var re = (ge) => {
              var he = C2();
              let ae;
              var Ne = I(he);
              {
                var ke = (ze) => {
                  var qe = x2(), Re = I(qe, !0);
                  R(qe), Se(() => {
                    Ce(qe, "id", c(A)), Xe(Re, r() ?? c(D)["minimap.ariaLabel"]);
                  }), L(ze, qe);
                };
                ce(Ne, (ze) => {
                  (r() ?? c(D)["minimap.ariaLabel"]) && ze(ke);
                });
              }
              var B = V(Ne);
              kt(B, 17, () => c(E).nodes, (ze) => ze.id, (ze, qe) => {
                const Re = /* @__PURE__ */ T(() => c(E).nodeLookup.get(c(qe).id));
                var ut = Te(), ot = le(ut);
                {
                  var _t = (Ze) => {
                    const Qe = /* @__PURE__ */ T(() => or(c(Re)));
                    {
                      let ve = /* @__PURE__ */ T(() => O?.(c(Re))), Ye = /* @__PURE__ */ T(() => q(c(Re))), ct = /* @__PURE__ */ T(() => K(c(Re)));
                      Bd(Ze, Fe(
                        {
                          get x() {
                            return c(Re).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Re).internals.positionAbsolute.y;
                          }
                        },
                        () => c(Qe),
                        {
                          get selected() {
                            return c(Re).selected;
                          },
                          get color() {
                            return c(ve);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(Ye);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return J;
                          },
                          get class() {
                            return c(ct);
                          }
                        }
                      ));
                    }
                  };
                  ce(ot, (Ze) => {
                    c(Re) && Ic(c(Re)) && Ze(_t);
                  });
                }
                L(ze, ut);
              });
              var lt = V(B);
              R(he), xt(he, (ze, qe) => b2?.(ze, qe), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: j,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: b(),
                zoomStep: x(),
                pannable: v(),
                zoomable: w()
              })), Se(
                (ze) => {
                  Ce(he, "width", g()), Ce(he, "height", h()), Ce(he, "viewBox", `${c(M) ?? ""} ${c(X) ?? ""} ${c(te) ?? ""} ${c(oe) ?? ""}`), Ce(he, "aria-labelledby", c(A)), ae = yt(he, "", ae, ze), Ce(lt, "d", `M${c(M) - c(Y)},${c(X) - c(Y)}h${c(te) + c(Y) * 2}v${c(oe) + c(Y) * 2}h${-c(te) - c(Y) * 2}z
      M${c(_).x ?? ""},${c(_).y ?? ""}h${c(_).width ?? ""}v${c(_).height ?? ""}h${-c(_).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": d(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": f() ? f() * c(P) : void 0
                  })
                ]
              ), L(ge, he);
            };
            ce(ee, (ge) => {
              c(E).panZoom && ge(re);
            });
          }
          L(ye, ie);
        },
        $$slots: { default: !0 }
      }
    )), R(se);
  }
  return L(e, F), fe(G);
}
ue(
  Kd,
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
    class: {}
  },
  [],
  [],
  !0
);
var k2 = /* @__PURE__ */ Q("<div><!></div>");
function jd(e, t) {
  de(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => xe.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ je(t, [
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
  const u = cn(), { getNodesBounds: d } = wt(), p = Un("svelteflow__node_id");
  let f = /* @__PURE__ */ T(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (E, D) => {
      const O = u.nodeLookup.get(D);
      return O && E.push(O), E;
    },
    []
  ))), g = /* @__PURE__ */ T(() => {
    const E = d(c(f));
    return E ? A0(E, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ T(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((E) => (E.internals.z || 5) + 1))), v = /* @__PURE__ */ T(() => u.nodes.filter((E) => E.selected).length), w = /* @__PURE__ */ T(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(v) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(E) {
      n(E), m();
    },
    get position() {
      return r();
    },
    set position(E = xe.Top) {
      r(E), m();
    },
    get align() {
      return o();
    },
    set align(E = "center") {
      o(E), m();
    },
    get offset() {
      return i();
    },
    set offset(E = 10) {
      i(E), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(E) {
      s(E), m();
    },
    get children() {
      return a();
    },
    set children(E) {
      a(E), m();
    }
  }, x = Te(), $ = le(x);
  {
    var S = (E) => {
      var D = k2();
      ft(
        D,
        (q, K) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": q,
          ...l,
          [vn]: K
        }),
        [
          () => c(f).reduce((q, K) => `${q}${K.id} `, "").trim(),
          () => ({
            display: sd().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var O = I(D);
      nt(O, () => a() ?? mt), R(D), xt(D, (q, K) => id?.(q, K), () => "root"), L(E, D);
    };
    ce($, (E) => {
      u.domNode && c(w) && c(f) && E(S);
    });
  }
  return L(e, x), fe(b);
}
ue(
  jd,
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
function qn(e) {
  const t = /* @__PURE__ */ T(cn), n = /* @__PURE__ */ T(() => c(t).nodes), r = /* @__PURE__ */ T(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ T(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!F0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Xl = "tinyflow-component", _2 = [
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
], S2 = [
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
], E2 = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], P2 = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class N2 {
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
const T2 = () => {
  let e = /* @__PURE__ */ De([]), t = /* @__PURE__ */ De([]), n = /* @__PURE__ */ De({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      U(e, r), U(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      U(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      U(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      U(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      U(e, [...c(e), r]);
    },
    removeNode: (r) => {
      U(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      U(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      U(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      U(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      U(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      U(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Je = T2();
var D2 = /* @__PURE__ */ Q("<button><!></button>");
function Me(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ je(t, [
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
  }, s = D2();
  ft(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = I(s);
  return nt(a, () => n() ?? mt), R(s), L(e, s), fe(i);
}
ue(Me, { children: {}, primary: {} }, [], [], !0);
var O2 = /* @__PURE__ */ Q("<input/>");
function Yd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = O2();
  wn(r), ft(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), fe();
}
ue(Yd, {}, [], [], !0);
var L2 = /* @__PURE__ */ Q('<div><input type="hidden"/> <!> <!></div>');
const M2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Xd(e, t) {
  de(t, !0), Be(e, M2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ je(t, [
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
    set placeholder(g) {
      n(g), m();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), m();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(g) {
      s(g), m();
    }
  }, u = L2();
  ft(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1swt2gg"
  );
  var d = I(u);
  wn(d);
  var p = V(d, 2);
  at(p, {
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
  return Me(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, h) => {
      be();
      var v = Ee();
      Se(() => Xe(v, i())), L(g, v);
    },
    $$slots: { default: !0 }
  }), R(u), Se(() => ri(d, o())), L(e, u), fe(l);
}
ue(
  Xd,
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
var H2 = /* @__PURE__ */ Q("<input/>");
function at(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = H2();
  wn(r), ft(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), fe();
}
ue(at, {}, [], [], !0);
var V2 = /* @__PURE__ */ Q("<textarea></textarea>");
function We(e, t) {
  de(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), m();
    }
  }, i = V2();
  return Zp(i), ft(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, i), fe(o);
}
ue(We, { value: {} }, [], [], !0);
var z2 = /* @__PURE__ */ Q('<div role="button"><!></div>'), A2 = /* @__PURE__ */ Q("<div></div>");
function Fd(e, t) {
  const n = ll(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ll(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, p) {
    s(p), i()?.(d, p);
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
  nc();
  var u = A2();
  return ft(u, () => ({
    ...r,
    class: `tf-tabs ${ia(r), ht(() => r.class) ?? ""}`
  })), kt(u, 5, o, Rr, (d, p, f) => {
    var g = z2();
    Ce(g, "tabindex", f), g.__click = () => a(c(p), f), g.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var h = I(g);
    {
      var v = (b) => {
        var x = Ee();
        Se(() => Xe(x, (c(p), ht(() => c(p).label)))), L(b, x);
      }, w = (b) => {
        var x = Te(), $ = le(x);
        nt($, () => (c(p), ht(() => c(p).label) ?? mt)), L(b, x);
      };
      ce(h, (b) => {
        c(p), ht(() => typeof c(p).label == "string") ? b(v) : b(w, !1);
      });
    }
    R(g), Se(() => zt(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), L(d, g);
  }), R(u), L(e, u), fe(l);
}
Rn(["click", "keydown"]);
ue(Fd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var R2 = (e, t, n) => t(c(n)), I2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, q2 = /* @__PURE__ */ Q('<span class="tf-collapse-item-title-icon"><!></span>'), Z2 = /* @__PURE__ */ Q('<div class="tf-collapse-item-description"><!></div>'), B2 = /* @__PURE__ */ Q('<div class="tf-collapse-item-content"><!></div>'), K2 = /* @__PURE__ */ Q('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), j2 = /* @__PURE__ */ Q("<div></div>");
const Y2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Wd(e, t) {
  de(t, !0), Be(e, Y2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Ft([]));
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
  }, a = j2();
  return kt(a, 21, n, Rr, (l, u, d) => {
    var p = K2(), f = I(p);
    Ce(f, "tabindex", d), f.__click = [R2, i, u], f.__keydown = [I2, i, u];
    var g = I(f);
    {
      var h = (E) => {
        var D = q2(), O = I(D);
        Fn(O, {
          get target() {
            return c(u).icon;
          }
        }), R(D), L(E, D);
      };
      ce(g, (E) => {
        c(u).icon && E(h);
      });
    }
    var v = V(g, 2);
    Fn(v, {
      get target() {
        return c(u).title;
      }
    });
    var w = V(v, 2);
    R(f);
    var b = V(f, 2);
    {
      var x = (E) => {
        var D = Z2(), O = I(D);
        Fn(O, {
          get target() {
            return c(u).description;
          }
        }), R(D), L(E, D);
      };
      ce(b, (E) => {
        c(u).description && E(x);
      });
    }
    var $ = V(b, 2);
    {
      var S = (E) => {
        var D = B2(), O = I(D);
        Fn(O, {
          get target() {
            return c(u).content;
          }
        }), R(D), L(E, D);
      };
      ce($, (E) => {
        o().includes(c(u).key) && E(S);
      });
    }
    R(p), Se((E) => zt(w, 1, `tf-collapse-item-title-arrow ${E ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, p);
  }), R(a), Se(() => {
    yt(a, t.style), zt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, a), fe(s);
}
Rn(["click", "keydown"]);
ue(Wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Fn(e, t) {
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
  }, o = Te(), i = le(o);
  {
    var s = (l) => {
      var u = Te(), d = le(u);
      nt(d, () => n() ?? mt), L(l, u);
    }, a = (l) => {
      var u = Te(), d = le(u);
      la(d, n), L(l, u);
    };
    ce(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), fe(r);
}
ue(Fn, { target: {} }, [], [], !0);
var X2 = (e, t, n) => t(c(n)), F2 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), W2 = /* @__PURE__ */ Q('<div class="tf-select-content-children"><!></div>'), G2 = /* @__PURE__ */ Q('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), U2 = /* @__PURE__ */ Q('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), J2 = /* @__PURE__ */ Q("<!> <!>", 1), Q2 = /* @__PURE__ */ Q('<div class="tf-select-input-placeholder"> </div>'), ey = /* @__PURE__ */ Q('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), ty = /* @__PURE__ */ Q("<div><!></div>");
function vt(e, t) {
  de(t, !0);
  const n = (x, $ = mt) => {
    var S = Te(), E = le(S);
    kt(E, 19, $, (D, O) => `${O}_${D.value}`, (D, O) => {
      var q = G2(), K = le(q);
      K.__click = [X2, h, O];
      var J = I(K), A = I(J);
      {
        var _ = (P) => {
          var H = F2();
          L(P, H);
        };
        ce(A, (P) => {
          c(O).children && c(O).children.length > 0 && P(_);
        });
      }
      R(J);
      var k = V(J, 2);
      Fn(k, {
        get target() {
          return c(O).label;
        }
      }), R(K);
      var C = V(K, 2);
      {
        var N = (P) => {
          var H = W2(), Z = I(H);
          n(Z, () => c(O).children), R(H), L(P, H);
        };
        ce(C, (P) => {
          c(O).children && c(O).children.length > 0 && (a() || u().includes(c(O).value)) && P(N);
        });
      }
      L(D, q);
    }), L(x, S);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), p = /* @__PURE__ */ je(t, [
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
  ]), f = /* @__PURE__ */ T(() => {
    const x = [], $ = (S) => {
      for (let E of S)
        i().length > 0 ? i().includes(E.value) && x.push(E) : s().includes(E.value) && x.push(E), E.children && E.children.length > 0 && $(E.children);
    };
    return $(r()), x;
  }), g;
  function h(x) {
    g?.hide(), o()?.(x);
  }
  var v = {
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
  }, w = ty();
  ft(w, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = I(w);
  return Zt(
    kr(b, {
      floating: (x) => {
        var $ = U2(), S = I($);
        n(S, r), R($), L(x, $);
      },
      children: (x, $) => {
        var S = ey();
        ft(S, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var E = I(S);
        kt(
          E,
          23,
          () => c(f),
          (D, O) => `${O}_${D.value}`,
          (D, O, q) => {
            var K = Te(), J = le(K);
            {
              var A = (k) => {
                var C = Te(), N = le(C);
                {
                  var P = (H) => {
                    Fn(H, {
                      get target() {
                        return c(O).label;
                      }
                    });
                  };
                  ce(N, (H) => {
                    c(q) === 0 && H(P);
                  });
                }
                L(k, C);
              }, _ = (k) => {
                var C = J2(), N = le(C);
                Fn(N, {
                  get target() {
                    return c(O).label;
                  }
                });
                var P = V(N, 2);
                {
                  var H = (Z) => {
                    var Y = Ee(",");
                    L(Z, Y);
                  };
                  ce(P, (Z) => {
                    c(q) < c(f).length - 1 && Z(H);
                  });
                }
                L(k, C);
              };
              ce(J, (k) => {
                l() ? k(_, !1) : k(A);
              });
            }
            L(D, K);
          },
          (D) => {
            var O = Q2(), q = I(O, !0);
            R(O), Se(() => Xe(q, d())), L(D, O);
          }
        ), R(E), be(2), R(S), L(x, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => g = x,
    () => g
  ), R(w), L(e, w), fe(v);
}
Rn(["click"]);
ue(
  vt,
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
const ko = Math.min, Lr = Math.max, Pi = Math.round, Cn = (e) => ({
  x: e,
  y: e
}), ny = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ry = {
  start: "end",
  end: "start"
};
function Hs(e, t, n) {
  return Lr(e, ko(t, n));
}
function Bo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wr(e) {
  return e.split("-")[0];
}
function Ko(e) {
  return e.split("-")[1];
}
function Gd(e) {
  return e === "x" ? "y" : "x";
}
function Na(e) {
  return e === "y" ? "height" : "width";
}
const oy = /* @__PURE__ */ new Set(["top", "bottom"]);
function Wn(e) {
  return oy.has(wr(e)) ? "y" : "x";
}
function Ta(e) {
  return Gd(Wn(e));
}
function iy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ko(e), o = Ta(e), i = Na(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ni(s)), [s, Ni(s)];
}
function sy(e) {
  const t = Ni(e);
  return [Vs(e), t, Vs(t)];
}
function Vs(e) {
  return e.replace(/start|end/g, (t) => ry[t]);
}
const Fl = ["left", "right"], Wl = ["right", "left"], ay = ["top", "bottom"], ly = ["bottom", "top"];
function uy(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Wl : Fl : t ? Fl : Wl;
    case "left":
    case "right":
      return t ? ay : ly;
    default:
      return [];
  }
}
function cy(e, t, n, r) {
  const o = Ko(e);
  let i = uy(wr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Vs)))), i;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ny[t]);
}
function dy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ud(e) {
  return typeof e != "number" ? dy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ti(e) {
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
  const i = Wn(t), s = Ta(t), a = Na(s), l = wr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ko(t)) {
    case "start":
      g[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const fy = async (e, t, n) => {
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
  } = Gl(u, r, l), f = r, g = {}, h = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: w,
      fn: b
    } = a[v], {
      x,
      y: $,
      data: S,
      reset: E
    } = await b({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, p = $ ?? p, g = {
      ...g,
      [w]: {
        ...g[w],
        ...S
      }
    }, E && h <= 50 && (h++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: p
    } = Gl(u, f, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
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
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Bo(t, e), h = Ud(g), v = a[f ? p === "floating" ? "reference" : "floating" : p], w = Ti(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, S = Ti(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - S.top + h.top) / $.y,
    bottom: (S.bottom - w.bottom + h.bottom) / $.y,
    left: (w.left - S.left + h.left) / $.x,
    right: (S.right - w.right + h.right) / $.x
  };
}
const py = (e) => ({
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
    } = Bo(e, t) || {};
    if (u == null)
      return {};
    const p = Ud(d), f = {
      x: n,
      y: r
    }, g = Ta(o), h = Na(g), v = await s.getDimensions(u), w = g === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", $ = w ? "clientHeight" : "clientWidth", S = i.reference[h] + i.reference[g] - f[g] - i.floating[h], E = f[g] - i.reference[g], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = D ? D[$] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(D))) && (O = a.floating[$] || i.floating[h]);
    const q = S / 2 - E / 2, K = O / 2 - v[h] / 2 - 1, J = ko(p[b], K), A = ko(p[x], K), _ = J, k = O - v[h] - A, C = O / 2 - v[h] / 2 + q, N = Hs(_, C, k), P = !l.arrow && Ko(o) != null && C !== N && i.reference[h] / 2 - (C < _ ? J : A) - v[h] / 2 < 0, H = P ? C < _ ? C - _ : C - k : 0;
    return {
      [g]: f[g] + H,
      data: {
        [g]: N,
        centerOffset: C - N - H,
        ...P && {
          alignmentOffset: H
        }
      },
      reset: P
    };
  }
}), gy = function(e) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...w
      } = Bo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = wr(o), x = Wn(a), $ = wr(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = f || ($ || !v ? [Ni(a)] : sy(a)), D = h !== "none";
      !f && D && E.push(...cy(a, v, h, S));
      const O = [a, ...E], q = await Jd(t, w), K = [];
      let J = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && K.push(q[b]), p) {
        const C = iy(o, s, S);
        K.push(q[C[0]], q[C[1]]);
      }
      if (J = [...J, {
        placement: o,
        overflows: K
      }], !K.every((C) => C <= 0)) {
        var A, _;
        const C = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, N = O[C];
        if (N && (!(p === "alignment" && x !== Wn(N)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every((H) => Wn(H.placement) === x ? H.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: J
            },
            reset: {
              placement: N
            }
          };
        let P = (_ = J.filter((H) => H.overflows[0] <= 0).sort((H, Z) => H.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var k;
              const H = (k = J.filter((Z) => {
                if (D) {
                  const Y = Wn(Z.placement);
                  return Y === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((Y) => Y > 0).reduce((Y, M) => Y + M, 0)]).sort((Z, Y) => Z[1] - Y[1])[0]) == null ? void 0 : k[0];
              H && (P = H);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
}, hy = /* @__PURE__ */ new Set(["left", "top"]);
async function vy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = wr(n), a = Ko(n), l = Wn(n) === "y", u = hy.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Bo(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: f * u
  } : {
    x: f * u,
    y: g * d
  };
}
const my = function(e) {
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
      } = t, l = await vy(t, e);
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
}, yy = function(e) {
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
              x: b,
              y: x
            } = w;
            return {
              x: b,
              y: x
            };
          }
        },
        ...l
      } = Bo(e, t), u = {
        x: n,
        y: r
      }, d = await Jd(t, l), p = Wn(wr(o)), f = Gd(p);
      let g = u[f], h = u[p];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = g + d[w], $ = g - d[b];
        g = Hs(x, g, $);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = h + d[w], $ = h - d[b];
        h = Hs(x, h, $);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Yi() {
  return typeof window < "u";
}
function Jr(e) {
  return Qd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function It(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zn(e) {
  var t;
  return (t = (Qd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qd(e) {
  return Yi() ? e instanceof Node || e instanceof It(e).Node : !1;
}
function sn(e) {
  return Yi() ? e instanceof Element || e instanceof It(e).Element : !1;
}
function Sn(e) {
  return Yi() ? e instanceof HTMLElement || e instanceof It(e).HTMLElement : !1;
}
function Ul(e) {
  return !Yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof It(e).ShadowRoot;
}
const wy = /* @__PURE__ */ new Set(["inline", "contents"]);
function jo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !wy.has(o);
}
const by = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xy(e) {
  return by.has(Jr(e));
}
const Cy = [":popover-open", ":modal"];
function Xi(e) {
  return Cy.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const $y = ["transform", "translate", "scale", "rotate", "perspective"], ky = ["transform", "translate", "scale", "rotate", "perspective", "filter"], _y = ["paint", "layout", "strict", "content"];
function Da(e) {
  const t = Oa(), n = sn(e) ? an(e) : e;
  return $y.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ky.some((r) => (n.willChange || "").includes(r)) || _y.some((r) => (n.contain || "").includes(r));
}
function Sy(e) {
  let t = Qn(e);
  for (; Sn(t) && !Yr(t); ) {
    if (Da(t))
      return t;
    if (Xi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Oa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ey = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Yr(e) {
  return Ey.has(Jr(e));
}
function an(e) {
  return It(e).getComputedStyle(e);
}
function Fi(e) {
  return sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Jr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ul(e) && e.host || // Fallback.
    Zn(e)
  );
  return Ul(t) ? t.host : t;
}
function ef(e) {
  const t = Qn(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Sn(t) && jo(t) ? t : ef(t);
}
function tf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = ef(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = It(o);
  return i ? (zs(s), t.concat(s, s.visualViewport || [], jo(o) ? o : [], [])) : t.concat(o, tf(o, []));
}
function zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nf(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Sn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Pi(n) !== i || Pi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function rf(e) {
  return sn(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = rf(e);
  if (!Sn(t))
    return Cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = nf(t);
  let s = (i ? Pi(n.width) : n.width) / r, a = (i ? Pi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Py = /* @__PURE__ */ Cn(0);
function of(e) {
  const t = It(e);
  return !Oa() || !t.visualViewport ? Py : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ny(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== It(e) ? !1 : t;
}
function _o(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = rf(e);
  let s = Cn(1);
  t && (r ? sn(r) && (s = Mr(r)) : s = Mr(e));
  const a = Ny(i, n, r) ? of(i) : Cn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = It(i), g = r && sn(r) ? It(r) : r;
    let h = f, v = zs(h);
    for (; v && r && g !== h; ) {
      const w = Mr(v), b = v.getBoundingClientRect(), x = an(v), $ = b.left + (v.clientLeft + parseFloat(x.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, p *= w.y, l += $, u += S, h = It(v), v = zs(h);
    }
  }
  return Ti({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Wi(e, t) {
  const n = Fi(e).scrollLeft;
  return t ? t.left + n : _o(Zn(e)).left + n;
}
function sf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Wi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ty(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Zn(r), a = t ? Xi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Cn(1);
  const d = Cn(0), p = Sn(r);
  if ((p || !p && !i) && ((Jr(r) !== "body" || jo(s)) && (l = Fi(r)), Sn(r))) {
    const g = _o(r);
    u = Mr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? sf(s, l) : Cn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function Dy(e) {
  return Array.from(e.getClientRects());
}
function Oy(e) {
  const t = Zn(e), n = Fi(e), r = e.ownerDocument.body, o = Lr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Lr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wi(e);
  const a = -n.scrollTop;
  return an(r).direction === "rtl" && (s += Lr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Jl = 25;
function Ly(e, t) {
  const n = It(e), r = Zn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Oa();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Wi(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, h = Math.abs(r.clientWidth - p.clientWidth - g);
    h <= Jl && (i -= h);
  } else u <= Jl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const My = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Hy(e, t) {
  const n = _o(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Sn(e) ? Mr(e) : Cn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Ly(e, n);
  else if (t === "document")
    r = Oy(Zn(e));
  else if (sn(t))
    r = Hy(t, n);
  else {
    const o = of(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ti(r);
}
function af(e, t) {
  const n = Qn(e);
  return n === t || !sn(n) || Yr(n) ? !1 : an(n).position === "fixed" || af(n, t);
}
function Vy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = tf(e, []).filter((a) => sn(a) && Jr(a) !== "body"), o = null;
  const i = an(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; sn(s) && !Yr(s); ) {
    const a = an(s), l = Da(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && My.has(o.position) || jo(s) && !l && af(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function zy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Xi(t) ? [] : Vy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Ql(t, u, o);
    return l.top = Lr(d.top, l.top), l.right = ko(d.right, l.right), l.bottom = ko(d.bottom, l.bottom), l.left = Lr(d.left, l.left), l;
  }, Ql(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Ay(e) {
  const {
    width: t,
    height: n
  } = nf(e);
  return {
    width: t,
    height: n
  };
}
function Ry(e, t, n) {
  const r = Sn(t), o = Zn(t), i = n === "fixed", s = _o(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Cn(0);
  function u() {
    l.x = Wi(o);
  }
  if (r || !r && !i)
    if ((Jr(t) !== "body" || jo(o)) && (a = Fi(t)), r) {
      const g = _o(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? sf(o, a) : Cn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function fs(e) {
  return an(e).position === "static";
}
function eu(e, t) {
  if (!Sn(e) || an(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Zn(e) === n && (n = n.ownerDocument.body), n;
}
function lf(e, t) {
  const n = It(e);
  if (Xi(e))
    return n;
  if (!Sn(e)) {
    let o = Qn(e);
    for (; o && !Yr(o); ) {
      if (sn(o) && !fs(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = eu(e, t);
  for (; r && xy(r) && fs(r); )
    r = eu(r, t);
  return r && Yr(r) && fs(r) && !Da(r) ? n : r || Sy(e) || n;
}
const Iy = async function(e) {
  const t = this.getOffsetParent || lf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ry(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qy(e) {
  return an(e).direction === "rtl";
}
const Zy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ty,
  getDocumentElement: Zn,
  getClippingRect: zy,
  getOffsetParent: lf,
  getElementRects: Iy,
  getClientRects: Dy,
  getDimensions: Ay,
  getScale: Mr,
  isElement: sn,
  isRTL: qy
}, By = my, Ky = yy, jy = gy, Yy = py, Xy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fy(e, t, {
    ...o,
    platform: i
  });
}, Fy = ({
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
    Xy(e, u, {
      placement: r,
      middleware: [
        By(o),
        // 手动偏移配置
        jy(i),
        //自动翻转
        Ky(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Yy({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: $, middlewareData: S }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: E, y: D } = S.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: D != null ? `${D}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function v(b) {
    b.stopPropagation(), f ? h() : g();
  }
  function w(b) {
    u.contains(b.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, v);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, v);
      }), document.removeEventListener("click", w);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var Wy = /* @__PURE__ */ Q('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function kr(e, t) {
  de(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  rr(() => (a = Fy({
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
  }, d = Wy(), p = I(d), f = I(p);
  nt(f, n), R(p), Zt(p, (v) => i = v, () => i);
  var g = V(p, 2), h = I(g);
  return nt(h, r), R(g), Zt(g, (v) => s = v, () => s), R(d), L(e, d), fe(u);
}
ue(kr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ae(e, t) {
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
  }, a = Te(), l = le(a);
  return vg(l, () => `h${r()}`, !1, (u, d) => {
    ft(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = Te(), f = le(p);
    nt(f, () => n() ?? mt), L(d, p);
  }), L(e, a), fe(s);
}
ue(Ae, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Gy = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Uy = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Yo(e, t) {
  de(t, !0), Be(e, Uy);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Me(e, Fe(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Gy();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
ue(Yo, {}, [], [], !0);
const Jy = () => ({ deleteNode: (e) => {
  Je.removeNode(e), Je.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), br = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Qy = () => ({ copyNode: (e) => {
  const t = Je.getNode(e);
  if (t) {
    const n = br(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Je.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), rt = () => Un("svelteflow__node_id"), er = () => Un("tinyflow_options");
var ew = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), tw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), nw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), rw = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), ow = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, iw = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, sw = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), aw = /* @__PURE__ */ Q('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), lw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), uw = /* @__PURE__ */ Q('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), cw = /* @__PURE__ */ Q('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const dw = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ut(e, t) {
  de(t, !0), Be(e, dw);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), p = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = wt(), x = /* @__PURE__ */ T(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: $ } = Jy(), { copyNode: S } = Qy(), E = er(), D = () => {
    E.onNodeExecute?.(b(r()));
  };
  let O = rt();
  var q = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), m();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), m();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), m();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), m();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), m();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(M = !0) {
      p(M), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(M = !0) {
      g(M), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(M) {
      h(M), m();
    }
  }, K = cw(), J = le(K);
  {
    var A = (M) => {
      jd(M, {
        get position() {
          return xe.Top;
        },
        align: "start",
        children: (X, te) => {
          var oe = uw(), j = I(oe);
          {
            var G = (ee) => {
              Me(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (re, ge) => {
                  var he = ew();
                  L(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ce(j, (ee) => {
              u() && ee(G);
            });
          }
          var F = V(j, 2);
          {
            var se = (ee) => {
              Me(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  S(r());
                },
                children: (re, ge) => {
                  var he = tw();
                  L(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ce(F, (ee) => {
              l() && ee(se);
            });
          }
          var W = V(F, 2);
          {
            var ye = (ee) => {
              Me(ee, {
                class: "tf-node-toolbar-item",
                onclick: D,
                children: (re, ge) => {
                  var he = nw();
                  L(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ce(W, (ee) => {
              a() && ee(ye);
            });
          }
          var we = V(W, 2);
          {
            var ie = (ee) => {
              kr(ee, {
                placement: "bottom",
                floating: (re) => {
                  var ge = aw(), he = I(ge), ae = V(I(he));
                  at(ae, {
                    style: "width: 100%;",
                    onchange: (Ze) => {
                      const Qe = Ze.target.value;
                      w(O, { title: Qe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(he);
                  var Ne = V(he, 2), ke = V(I(Ne));
                  We(ke, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ze) => {
                      const Qe = Ze.target.value;
                      w(O, { description: Qe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(Ne);
                  var B = V(Ne, 2);
                  {
                    var lt = (Ze) => {
                      var Qe = rw(), ve = V(I(Qe));
                      We(ve, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ye) => {
                          const ct = Ye.target.value;
                          w(O, { condition: ct });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Qe), L(Ze, Qe);
                    };
                    ce(B, (Ze) => {
                      p() && Ze(lt);
                    });
                  }
                  var ze = V(B, 2), qe = V(I(ze), 2);
                  wn(qe), qe.__change = [ow, w, O], R(ze);
                  var Re = V(ze, 2), ut = V(I(Re), 2);
                  wn(ut), ut.__change = [iw, w, O], R(Re);
                  var ot = V(Re, 2);
                  {
                    var _t = (Ze) => {
                      var Qe = sw(), ve = le(Qe), Ye = V(I(ve));
                      {
                        let bt = /* @__PURE__ */ T(() => n().loopIntervalMs || "1000");
                        We(Ye, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Kt) => {
                            const fn = Kt.target.value;
                            w(O, { loopIntervalMs: fn });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(ve);
                      var ct = V(ve, 2), it = V(I(ct));
                      {
                        let bt = /* @__PURE__ */ T(() => n().maxLoopCount || "0");
                        We(it, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Kt) => {
                            const fn = Kt.target.value;
                            w(O, { maxLoopCount: fn });
                          },
                          get value() {
                            return c(bt);
                          }
                        });
                      }
                      R(ct);
                      var St = V(ct, 2), Ue = V(I(St));
                      We(Ue, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (bt) => {
                          const Kt = bt.target.value;
                          w(O, { loopBreakCondition: Kt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(St), L(Ze, Qe);
                    };
                    ce(ot, (Ze) => {
                      n().loopEnable && Ze(_t);
                    });
                  }
                  R(ge), Se(() => {
                    $s(qe, !!n().async), $s(ut, !!n().loopEnable);
                  }), L(re, ge);
                },
                children: (re, ge) => {
                  Me(re, {
                    class: "tf-node-toolbar-item",
                    children: (he, ae) => {
                      var Ne = lw();
                      L(he, Ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ce(we, (ee) => {
              d() && ee(ie);
            });
          }
          R(oe), L(X, oe);
        },
        $$slots: { default: !0 }
      });
    };
    ce(J, (M) => {
      (a() || l() || u()) && M(A);
    });
  }
  var _ = V(J, 2), k = V(I(_), 2), C = I(k);
  Wd(C, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return v;
    },
    onChange: (M, X) => {
      w(r(), { expand: X?.includes("key") }), h()?.(X?.includes("key") ? "key" : "");
    }
  }), R(k), R(_);
  var N = V(_, 2);
  {
    var P = (M) => {
      Jn(M, {
        type: "target",
        get position() {
          return xe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ce(N, (M) => {
      g() && M(P);
    });
  }
  var H = V(N, 2);
  {
    var Z = (M) => {
      Jn(M, {
        type: "source",
        get position() {
          return xe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ce(H, (M) => {
      f() && M(Z);
    });
  }
  var Y = V(H, 2);
  return nt(Y, () => i() ?? mt), L(e, K), fe(q);
}
Rn(["change"]);
ue(
  Ut,
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
var fw = /* @__PURE__ */ Q('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), pw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc">占位符： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), gw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), hw = /* @__PURE__ */ Q('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const vw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function uf(e, t) {
  de(t, !0), Be(e, vw);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = rt(), i = qn(o), s = /* @__PURE__ */ T(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = wt(), l = (q, K) => {
    a(o, (J) => {
      let A = J.data.parameters;
      return A[r()][q] = K, { parameters: A };
    });
  }, u = (q, K) => {
    const J = K.target.value;
    l(q, J);
  }, d = (q) => {
    const K = q.target.value;
    l("name", K);
  }, p = (q) => {
    const K = q.target.checked;
    l("required", K);
  }, f = (q) => {
    const K = q.value;
    l("formType", K);
  }, g = (q) => {
    const K = q.value;
    l("contentType", K);
  };
  let h;
  const v = () => {
    a(o, (q) => {
      let K = q.data.parameters;
      return K.splice(r(), 1), { parameters: [...K] };
    }), h?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(q) {
      n(q), m();
    },
    get index() {
      return r();
    },
    set index(q) {
      r(q), m();
    }
  }, b = hw(), x = le(b), $ = I(x);
  at($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(x);
  var S = V(x, 2), E = I(S);
  Yd(E, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), R(S);
  var D = V(S, 2), O = I(D);
  return Zt(
    kr(O, {
      placement: "bottom",
      floating: (q) => {
        var K = pw(), J = I(K), A = V(I(J));
        {
          let j = /* @__PURE__ */ T(() => c(s).contentType ? [c(s).contentType] : []);
          vt(A, {
            get items() {
              return Pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(j);
            },
            onSelect: g
          });
        }
        R(J);
        var _ = V(J, 2), k = V(I(_));
        {
          let j = /* @__PURE__ */ T(() => c(s).formType ? [c(s).formType] : []);
          vt(k, {
            get items() {
              return E2;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(j);
            },
            onSelect: f
          });
        }
        R(_);
        var C = V(_, 2);
        {
          var N = (j) => {
            var G = fw(), F = V(I(G));
            {
              let se = /* @__PURE__ */ T(() => c(s).enums?.join(`
`));
              We(F, {
                rows: 3,
                style: "width: 100%;",
                onchange: (W) => {
                  l("enums", W.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(se);
                },
                placeholder: "一行一个选项"
              });
            }
            R(G), L(j, G);
          };
          ce(C, (j) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && j(N);
          });
        }
        var P = V(C, 2), H = V(I(P));
        We(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            u("formLabel", j);
          },
          get value() {
            return c(s).formLabel;
          }
        }), R(P);
        var Z = V(P, 2), Y = V(I(Z));
        We(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (j) => {
            u("formDescription", j);
          },
          get value() {
            return c(s).formDescription;
          }
        }), R(Z);
        var M = V(Z, 2), X = V(I(M));
        We(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (j) => {
            u("formPlaceholder", j);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), R(M);
        var te = V(M, 2), oe = I(te);
        Me(oe, {
          onclick: v,
          children: (j, G) => {
            be();
            var F = Ee("删除");
            L(j, F);
          },
          $$slots: { default: !0 }
        }), R(te), R(K), L(q, K);
      },
      children: (q, K) => {
        Me(q, {
          class: "input-btn-more",
          children: (J, A) => {
            var _ = gw();
            L(J, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (q) => h = q,
    () => h
  ), R(D), L(e, b), fe(w);
}
ue(uf, { parameter: {}, index: {} }, [], [], !0);
var mw = /* @__PURE__ */ Q('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), yw = /* @__PURE__ */ Q('<div class="none-params svelte-3n0wca">无输入参数</div>'), ww = /* @__PURE__ */ Q('<div class="input-container svelte-3n0wca"><!> <!></div>');
const bw = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function cf(e, t) {
  de(t, !0), Be(e, bw);
  let n = rt(), r = qn(n), o = /* @__PURE__ */ T(() => [...r?.current?.data?.parameters || []]);
  var i = ww(), s = I(i);
  {
    var a = (u) => {
      var d = mw();
      be(4), L(u, d);
    };
    ce(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  kt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      uf(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = yw();
      L(u, d);
    }
  ), R(i), L(e, i), fe();
}
ue(cf, {}, [], [], !0);
const So = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = br()), So(t.children);
}), e), dn = () => {
  const { updateNodeData: e } = wt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => So(s?.children)) : So(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: br()
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
var xw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Cw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ Q('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function df(e, t) {
  de(t, !0), Be(e, kw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return Ut(e, Fe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = xw();
      L(a, l);
    },
    children: (a, l) => {
      var u = $w(), d = le(u), p = I(d);
      Ae(p, {
        level: 3,
        children: (h, v) => {
          be();
          var w = Ee("输入参数");
          L(h, w);
        },
        $$slots: { default: !0 }
      });
      var f = V(p, 2);
      Me(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (h, v) => {
          var w = Cw();
          L(h, w);
        },
        $$slots: { default: !0 }
      }), R(d);
      var g = V(d, 2);
      cf(g, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe(s);
}
ue(df, { data: {} }, [], [], !0);
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
}, gf = (e = !1) => {
  const t = rt(), n = qn(t), r = /* @__PURE__ */ T(cn), o = /* @__PURE__ */ T(() => c(r).nodes), i = /* @__PURE__ */ T(() => c(r).edges), s = /* @__PURE__ */ T(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ T(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = tu(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      ff(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = tu(p, f, u);
          g && l.push(g);
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
var _w = /* @__PURE__ */ Q('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), Sw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ew = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Pw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function hf(e, t) {
  de(t, !0), Be(e, Pw), rr(() => {
    c(u).refType || h({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = rt(), l = qn(a), u = /* @__PURE__ */ T(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = wt(), p = (k, C) => {
    d(a, (N) => {
      let P = N.data?.[o()];
      return P[r()] = { ...P[r()], [k]: C }, { [o()]: P };
    });
  }, f = (k, C) => {
    const N = C.target.value;
    p(k, N);
  }, g = (k) => {
    const C = k.value;
    p("ref", C);
  }, h = (k) => {
    const C = k.value;
    p("refType", C);
  }, v = (k) => {
    const C = k.value;
    p("contentType", C);
  };
  let w;
  const b = () => {
    d(a, (k) => {
      let C = k.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), w?.hide();
  };
  let x = gf(i());
  var $ = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), m();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(k = !1) {
      s(k), m();
    }
  }, S = Ew(), E = le(S), D = I(E);
  {
    let k = /* @__PURE__ */ T(() => c(u).nameDisabled === !0);
    at(D, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (C) => f("name", C)
    });
  }
  R(E);
  var O = V(E, 2), q = I(O);
  {
    var K = (k) => {
      at(k, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => f("value", C)
      });
    }, J = (k) => {
      var C = Te(), N = le(C);
      {
        var P = (H) => {
          {
            let Z = /* @__PURE__ */ T(() => [c(u).ref]);
            vt(H, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Z);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        ce(
          N,
          (H) => {
            c(u).refType !== "input" && H(P);
          },
          !0
        );
      }
      L(k, C);
    };
    ce(q, (k) => {
      c(u).refType === "fixed" ? k(K) : k(J, !1);
    });
  }
  R(O);
  var A = V(O, 2), _ = I(A);
  return Zt(
    kr(_, {
      placement: "bottom",
      floating: (k) => {
        var C = Sw(), N = I(C), P = V(I(N));
        {
          let G = /* @__PURE__ */ T(() => c(u).refType ? [c(u).refType] : []);
          vt(P, {
            get items() {
              return S2;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(G);
            },
            onSelect: h
          });
        }
        R(N);
        var H = V(N, 2);
        {
          var Z = (G) => {
            var F = _w(), se = V(I(F));
            {
              let W = /* @__PURE__ */ T(() => c(u).contentType ? [c(u).contentType] : []);
              vt(se, {
                get items() {
                  return Pa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(W);
                },
                onSelect: v
              });
            }
            R(F), L(G, F);
          };
          ce(H, (G) => {
            s() && G(Z);
          });
        }
        var Y = V(H, 2), M = V(I(Y));
        We(M, {
          rows: 1,
          style: "width: 100%;",
          onchange: (G) => {
            f("defaultValue", G);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), R(Y);
        var X = V(Y, 2), te = V(I(X));
        We(te, {
          rows: 3,
          style: "width: 100%;",
          onchange: (G) => {
            f("description", G);
          },
          get value() {
            return c(u).description;
          }
        }), R(X);
        var oe = V(X, 2), j = I(oe);
        Me(j, {
          onclick: b,
          children: (G, F) => {
            be();
            var se = Ee("删除");
            L(G, se);
          },
          $$slots: { default: !0 }
        }), R(oe), R(C), L(k, C);
      },
      children: (k, C) => {
        Yo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => w = k,
    () => w
  ), R(A), L(e, S), fe($);
}
ue(
  hf,
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
var Nw = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Tw = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Dw = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ow = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Mt(e, t) {
  de(t, !0), Be(e, Ow);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = rt(), a = qn(s), l = /* @__PURE__ */ T(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无输入参数") {
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
    },
    get showContentType() {
      return i();
    },
    set showContentType(h = !1) {
      i(h), m();
    }
  }, d = Dw(), p = I(d);
  {
    var f = (h) => {
      var v = Nw();
      be(4), L(h, v);
    };
    ce(p, (h) => {
      c(l).length !== 0 && h(f);
    });
  }
  var g = V(p, 2);
  return kt(
    g,
    19,
    () => c(l),
    (h) => h.id,
    (h, v, w) => {
      hf(h, {
        get parameter() {
          return c(v);
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
    (h) => {
      var v = Tw(), w = I(v, !0);
      R(v), Se(() => Xe(w, n())), L(h, v);
    }
  ), R(d), L(e, d), fe(u);
}
ue(
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
var Lw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Mw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ Q('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Vw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function vf(e, t) {
  de(t, !0), Be(e, Vw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return Ut(e, Fe(
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
        L(a, l);
      },
      children: (a, l) => {
        var u = Hw(), d = le(u), p = I(d);
        Ae(p, {
          level: 3,
          children: (h, v) => {
            be();
            var w = Ee("输出参数");
            L(h, w);
          },
          $$slots: { default: !0 }
        });
        var f = V(p, 2);
        Me(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (h, v) => {
            var w = Mw();
            L(h, w);
          },
          $$slots: { default: !0 }
        }), R(d);
        var g = V(d, 2);
        Mt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(s);
}
ue(vf, { data: {} }, [], [], !0);
const ps = (e) => JSON.parse(JSON.stringify(e));
var zw = /* @__PURE__ */ me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Aw = /* @__PURE__ */ Q('<div class="input-more-item svelte-1cfeest"><!></div>'), Rw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Iw = /* @__PURE__ */ Q('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const qw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function mf(e, t) {
  de(t, !0), Be(e, qw);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = rt(), a = qn(s), l = /* @__PURE__ */ T(() => {
    let _ = a?.current?.data?.[o()], k;
    if (_ && r().length > 0) {
      let C = _;
      for (let N = 0; N < r().length; N++) {
        const P = r()[N];
        N == r().length - 1 ? k = C[P] : C = C[P].children;
      }
    }
    return { ...n(), ...k };
  });
  const { updateNodeData: u } = wt(), d = (_, k) => {
    u(s, (C) => {
      const N = C.data?.[o()];
      if (N && r().length > 0) {
        let P = N;
        for (let H = 0; H < r().length; H++) {
          const Z = r()[H];
          H == r().length - 1 ? P[Z] = { ...P[Z], [_]: k } : P = P[Z].children;
        }
      }
      return { [o()]: [...ps(N)] };
    });
  }, p = (_, k) => {
    const C = k.target.value;
    d(_, C);
  }, f = (_) => {
    const k = _.value;
    d("dataType", k);
  };
  let g;
  const h = () => {
    u(s, (_) => {
      let k = _.data?.[o()];
      if (k && r().length > 0) {
        let C = k;
        for (let N = 0; N < r().length; N++) {
          const P = r()[N];
          N == r().length - 1 ? C.splice(P, 1) : C = C[P].children;
        }
      }
      return { [o()]: [...ps(k)] };
    }), g?.hide();
  }, v = () => {
    u(s, (_) => {
      let k = _.data?.[o()];
      if (k && r().length > 0) {
        let C = k;
        for (let N = 0; N < r().length; N++) {
          const P = r()[N];
          N == r().length - 1 ? C[P].children ? C[P].children.push({ id: br(), name: "newParam", dataType: "String" }) : C[P].children = [{ id: br(), name: "newParam", dataType: "String" }] : C = C[P].children;
        }
      }
      return { [o()]: [...ps(k)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), m();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), m();
    }
  }, b = Iw(), x = le(b), $ = I(x);
  {
    var S = (_) => {
      var k = Te(), C = le(k);
      kt(C, 17, r, Rr, (N, P) => {
        be();
        var H = Ee(" ");
        L(N, H);
      }), L(_, k);
    };
    ce($, (_) => {
      r().length > 1 && _(S);
    });
  }
  var E = V($, 2);
  {
    let _ = /* @__PURE__ */ T(() => c(l).nameDisabled === !0);
    at(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (k) => {
        p("name", k);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  R(x);
  var D = V(x, 2), O = I(D);
  {
    let _ = /* @__PURE__ */ T(() => c(l).dataType ? [c(l).dataType] : []), k = /* @__PURE__ */ T(() => c(l).dataTypeDisabled === !0);
    vt(O, {
      get items() {
        return _2;
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(_);
      },
      get disabled() {
        return c(k);
      },
      onSelect: f
    });
  }
  var q = V(O, 2);
  {
    var K = (_) => {
      Me(_, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: v,
        children: (k, C) => {
          var N = zw();
          L(k, N);
        },
        $$slots: { default: !0 }
      });
    };
    ce(q, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(K);
    });
  }
  R(D);
  var J = V(D, 2), A = I(J);
  return Zt(
    kr(A, {
      placement: "bottom",
      floating: (_) => {
        var k = Rw(), C = I(k), N = V(I(C));
        {
          let M = /* @__PURE__ */ T(() => c(l).defaultValue || "");
          We(N, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (X) => {
              p("defaultValue", X);
            }
          });
        }
        R(C);
        var P = V(C, 2), H = V(I(P));
        {
          let M = /* @__PURE__ */ T(() => c(l).description || "");
          We(H, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(M);
            },
            onchange: (X) => {
              p("description", X);
            }
          });
        }
        R(P);
        var Z = V(P, 2);
        {
          var Y = (M) => {
            var X = Aw(), te = I(X);
            Me(te, {
              onclick: h,
              children: (oe, j) => {
                be();
                var G = Ee("删除");
                L(oe, G);
              },
              $$slots: { default: !0 }
            }), R(X), L(M, X);
          };
          ce(Z, (M) => {
            c(l).deleteDisabled !== !0 && M(Y);
          });
        }
        R(k), L(_, k);
      },
      children: (_, k) => {
        Yo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => g = _,
    () => g
  ), R(J), L(e, b), fe(w);
}
ue(
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
var Zw = /* @__PURE__ */ Q("<!> <!>", 1), Bw = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Kw = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), jw = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Yw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bn(e, t) {
  de(t, !0), Be(e, Yw);
  const n = (h, v = mt, w = mt) => {
    var b = Te(), x = le(b);
    kt(
      x,
      19,
      v,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, S, E) => {
        var D = Zw(), O = le(D);
        {
          let J = /* @__PURE__ */ T(() => [...w(), c(E)]);
          mf(O, {
            get parameter() {
              return c(S);
            },
            get position() {
              return c(J);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var q = V(O, 2);
        {
          var K = (J) => {
            {
              let A = /* @__PURE__ */ T(() => [...w(), c(E)]);
              n(J, () => c(S).children, () => c(A));
            }
          };
          ce(q, (J) => {
            c(S).children && J(K);
          });
        }
        L($, D);
      },
      ($) => {
        var S = Te(), E = le(S);
        {
          var D = (O) => {
            var q = Bw(), K = I(q, !0);
            R(q), Se(() => Xe(K, r())), L(O, q);
          };
          ce(E, (O) => {
            w().length === 0 && O(D);
          });
        }
        L($, S);
      }
    ), L(h, b);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = rt(), a = qn(s), l = /* @__PURE__ */ T(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(h = "无输出参数") {
      r(h), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(h = "outputDefs") {
      o(h), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(h = "请输入参数名称") {
      i(h), m();
    }
  }, d = jw(), p = I(d);
  {
    var f = (h) => {
      var v = Kw();
      be(4), L(h, v);
    };
    ce(p, (h) => {
      c(l).length !== 0 && h(f);
    });
  }
  var g = V(p, 2);
  return n(g, () => c(l) || [], () => []), R(d), L(e, d), fe(u);
}
ue(Bn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Xw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Fw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Gw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Uw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Jw = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const eb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function yf(e, t) {
  de(t, !0), Be(e, eb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), s = er();
  let a = /* @__PURE__ */ De(Ft([]));
  rr(async () => {
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
    }) : l(o, { outputDefs: [] });
  };
  tt(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(p) {
      n(p), m();
    }
  };
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = Xw();
        L(p, f);
      },
      children: (p, f) => {
        var g = Qw(), h = le(g), v = I(h);
        Ae(v, {
          level: 3,
          children: (ie, ee) => {
            be();
            var re = Ee("输入参数");
            L(ie, re);
          },
          $$slots: { default: !0 }
        });
        var w = V(v, 2);
        Me(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ie, ee) => {
            var re = Fw();
            L(ie, re);
          },
          $$slots: { default: !0 }
        }), R(h);
        var b = V(h, 2);
        Mt(b, {});
        var x = V(b, 2);
        Ae(x, {
          level: 3,
          mt: "10px",
          children: (ie, ee) => {
            be();
            var re = Ee("模型设置");
            L(ie, re);
          },
          $$slots: { default: !0 }
        });
        var $ = V(x, 4), S = I($);
        {
          let ie = /* @__PURE__ */ T(() => n().llmId ? [n().llmId] : []);
          vt(S, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (ee) => {
              const re = ee.value;
              l(o, () => ({ llmId: re }));
            },
            get value() {
              return c(ie);
            }
          });
        }
        var E = V(S, 2);
        Yo(E, {}), R($);
        var D = V($, 4), O = I(D), q = I(O), K = I(q);
        R(q);
        var J = V(q, 2);
        wn(J), J.__input = [Ww, l, o], R(O), R(D);
        var A = V(D, 2), _ = I(A), k = I(_), C = I(k);
        R(k);
        var N = V(k, 2);
        wn(N), N.__input = [Gw, l, o], R(_), R(A);
        var P = V(A, 2), H = I(P), Z = I(H), Y = I(Z);
        R(Z);
        var M = V(Z, 2);
        wn(M), M.__input = [Uw, l, o], R(H), R(P);
        var X = V(P, 4), te = I(X);
        {
          let ie = /* @__PURE__ */ T(() => n().systemPrompt || "");
          We(te, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(ie);
            },
            oninput: (ee) => {
              l(o, { systemPrompt: ee.target.value });
            }
          });
        }
        R(X);
        var oe = V(X, 4), j = I(oe);
        {
          let ie = /* @__PURE__ */ T(() => n().userPrompt || "");
          We(j, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(ie);
            },
            oninput: (ee) => {
              l(o, { userPrompt: ee.target.value });
            }
          });
        }
        R(oe);
        var G = V(oe, 2), F = I(G);
        Ae(F, {
          level: 3,
          children: (ie, ee) => {
            be();
            var re = Ee("输出参数");
            L(ie, re);
          },
          $$slots: { default: !0 }
        });
        var se = V(F, 2);
        {
          let ie = /* @__PURE__ */ T(() => n().outType ? [n().outType] : []);
          vt(se, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            defaultValue: "text",
            onSelect: (ee) => {
              u(ee.value);
            },
            get value() {
              return c(ie);
            }
          });
        }
        var W = V(se, 2);
        {
          var ye = (ie) => {
            Me(ie, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ee, re) => {
                var ge = Jw();
                L(ee, ge);
              },
              $$slots: { default: !0 }
            });
          };
          ce(W, (ie) => {
            n().outType === "json" && ie(ye);
          });
        }
        R(G);
        var we = V(G, 2);
        Bn(we, {}), Se(() => {
          Xe(K, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ri(J, n().temperature ?? 0.5), Xe(C, `Top P: ${n().topP ?? 0.9 ?? ""}`), ri(N, n().topP ?? 0.9), Xe(Y, `Top K: ${n().topK ?? 50 ?? ""}`), ri(M, n().topK ?? 50);
        }), L(p, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(d);
}
Rn(["input"]);
ue(yf, { data: {} }, [], [], !0);
var tb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), nb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ib = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function wf(e, t) {
  de(t, !0), Be(e, ib);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  rr(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = rt(), { addParameter: i } = dn(), { updateNodeData: s } = wt(), a = [
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = tb();
        L(u, d);
      },
      children: (u, d) => {
        var p = ob(), f = le(p), g = I(f);
        Ae(g, {
          level: 3,
          children: (K, J) => {
            be();
            var A = Ee("输入参数");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var h = V(g, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, J) => {
            var A = nb();
            L(K, A);
          },
          $$slots: { default: !0 }
        }), R(f);
        var v = V(f, 2);
        Mt(v, {});
        var w = V(v, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: (K, J) => {
            be();
            var A = Ee("代码");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 4), x = I(b);
        {
          let K = /* @__PURE__ */ T(() => n().engine ? [n().engine] : ["qlexpress"]);
          vt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (J) => {
              const A = J.value;
              s(o, () => ({ engine: A }));
            },
            get value() {
              return c(K);
            }
          });
        }
        R(b);
        var $ = V(b, 4), S = I($);
        {
          let K = /* @__PURE__ */ T(() => n().code || "");
          We(S, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
            style: "width: 100%",
            onchange: (J) => {
              s(o, () => ({ code: J.target.value }));
            },
            get value() {
              return c(K);
            }
          });
        }
        R($);
        var E = V($, 2), D = I(E);
        Ae(D, {
          level: 3,
          mt: "10px",
          children: (K, J) => {
            be();
            var A = Ee("输出参数");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var O = V(D, 2);
        Me(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (K, J) => {
            var A = rb();
            L(K, A);
          },
          $$slots: { default: !0 }
        }), R(E);
        var q = V(E, 2);
        Bn(q, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(l);
}
ue(wf, { data: {} }, [], [], !0);
var sb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ab = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lb = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ub = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function bf(e, t) {
  de(t, !0), Be(e, ub);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), { updateNodeData: s } = wt();
  tt(() => {
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = sb();
        L(l, u);
      },
      children: (l, u) => {
        var d = lb(), p = le(d), f = I(p);
        Ae(f, {
          level: 3,
          children: (E, D) => {
            be();
            var O = Ee("输入参数");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var g = V(f, 2);
        Me(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, D) => {
            var O = ab();
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(p);
        var h = V(p, 2);
        Mt(h, {});
        var v = V(h, 2);
        Ae(v, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (E, D) => {
            be();
            var O = Ee("模板内容");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var w = V(v, 2), b = I(w);
        {
          let E = /* @__PURE__ */ T(() => n().template || "");
          We(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ template: D.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        R(w);
        var x = V(w, 2), $ = I(x);
        Ae($, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            be();
            var O = Ee("输出参数");
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(x);
        var S = V(x, 2);
        Bn(S, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(a);
}
ue(bf, { data: {} }, [], [], !0);
var cb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), db = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ Q('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), gb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), vb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), yb = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), wb = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), bb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const Cb = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function xf(e, t) {
  de(t, !0), Be(e, Cb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  rr(() => {
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
  ], i = rt(), { addParameter: s } = dn(), { updateNodeData: a } = wt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = cb();
        L(u, d);
      },
      children: (u, d) => {
        var p = xb(), f = le(p), g = I(f);
        Ae(g, {
          level: 3,
          children: (j, G) => {
            be();
            var F = Ee("输入参数");
            L(j, F);
          },
          $$slots: { default: !0 }
        });
        var h = V(g, 2);
        Me(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (j, G) => {
            var F = db();
            L(j, F);
          },
          $$slots: { default: !0 }
        }), R(f);
        var v = V(f, 2);
        Mt(v, {});
        var w = V(v, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: (j, G) => {
            be();
            var F = Ee("URL 地址");
            L(j, F);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2), x = I(b), $ = I(x);
        {
          let j = /* @__PURE__ */ T(() => n().method ? [n().method] : ["get"]);
          vt($, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (G) => {
              const F = G.value;
              a(i, () => ({ method: F }));
            },
            get value() {
              return c(j);
            }
          });
        }
        R(x);
        var S = V(x, 2), E = I(S);
        {
          let j = /* @__PURE__ */ T(() => n().url || "");
          at(E, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (G) => {
              a(i, () => ({ url: G.target.value }));
            },
            get value() {
              return c(j);
            }
          });
        }
        R(S), R(b);
        var D = V(b, 2), O = I(D);
        Ae(O, {
          level: 3,
          children: (j, G) => {
            be();
            var F = Ee("Http 头信息");
            L(j, F);
          },
          $$slots: { default: !0 }
        });
        var q = V(O, 2);
        Me(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (j, G) => {
            var F = fb();
            L(j, F);
          },
          $$slots: { default: !0 }
        }), R(D);
        var K = V(D, 2);
        Mt(K, { dataKeyName: "headers" });
        var J = V(K, 2);
        {
          var A = (j) => {
            var G = pb(), F = le(G);
            Ae(F, {
              level: 3,
              mt: "10px",
              children: (ke, B) => {
                be();
                var lt = Ee("Body");
                L(ke, lt);
              },
              $$slots: { default: !0 }
            });
            var se = V(F, 2), W = I(se), ye = I(W);
            {
              let ke = /* @__PURE__ */ T(() => !n().bodyType || n().bodyType === "");
              at(ye, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c(ke);
                },
                onchange: (B) => {
                  B.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), R(W);
            var we = V(W, 2), ie = I(we);
            {
              let ke = /* @__PURE__ */ T(() => n().bodyType === "form-data");
              at(ie, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c(ke);
                },
                onchange: (B) => {
                  B.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), R(we);
            var ee = V(we, 2), re = I(ee);
            {
              let ke = /* @__PURE__ */ T(() => n().bodyType === "x-www-form-urlencoded");
              at(re, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(ke);
                },
                onchange: (B) => {
                  B.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), R(ee);
            var ge = V(ee, 2), he = I(ge);
            {
              let ke = /* @__PURE__ */ T(() => n().bodyType === "json");
              at(he, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c(ke);
                },
                onchange: (B) => {
                  B.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), R(ge);
            var ae = V(ge, 2), Ne = I(ae);
            {
              let ke = /* @__PURE__ */ T(() => n().bodyType === "raw");
              at(Ne, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c(ke);
                },
                onchange: (B) => {
                  B.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), R(ae), R(se), L(j, G);
          };
          ce(J, (j) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && j(A);
          });
        }
        var _ = V(J, 2);
        {
          var k = (j) => {
            var G = hb(), F = le(G), se = I(F);
            Ae(se, {
              level: 3,
              children: (we, ie) => {
                be();
                var ee = Ee("参数");
                L(we, ee);
              },
              $$slots: { default: !0 }
            });
            var W = V(se, 2);
            Me(W, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (we, ie) => {
                var ee = gb();
                L(we, ee);
              },
              $$slots: { default: !0 }
            }), R(F);
            var ye = V(F, 2);
            Mt(ye, { dataKeyName: "formData" }), L(j, G);
          };
          ce(_, (j) => {
            n().bodyType === "form-data" && j(k);
          });
        }
        var C = V(_, 2);
        {
          var N = (j) => {
            var G = mb(), F = le(G), se = I(F);
            Ae(se, {
              level: 3,
              children: (we, ie) => {
                be();
                var ee = Ee("Body 参数");
                L(we, ee);
              },
              $$slots: { default: !0 }
            });
            var W = V(se, 2);
            Me(W, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (we, ie) => {
                var ee = vb();
                L(we, ee);
              },
              $$slots: { default: !0 }
            }), R(F);
            var ye = V(F, 2);
            Mt(ye, { dataKeyName: "formUrlencoded" }), L(j, G);
          };
          ce(C, (j) => {
            n().bodyType === "x-www-form-urlencoded" && j(N);
          });
        }
        var P = V(C, 2);
        {
          var H = (j) => {
            var G = yb(), F = I(G);
            We(F, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (se) => {
                a(i, { bodyJson: se.target.value });
              }
            }), R(G), L(j, G);
          };
          ce(P, (j) => {
            n().bodyType === "json" && j(H);
          });
        }
        var Z = V(P, 2);
        {
          var Y = (j) => {
            var G = wb(), F = I(G);
            We(F, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (se) => {
                a(i, { bodyRaw: se.target.value });
              }
            }), R(G), L(j, G);
          };
          ce(Z, (j) => {
            n().bodyType === "raw" && j(Y);
          });
        }
        var M = V(Z, 2), X = I(M);
        Ae(X, {
          level: 3,
          mt: "10px",
          children: (j, G) => {
            be();
            var F = Ee("输出参数");
            L(j, F);
          },
          $$slots: { default: !0 }
        });
        var te = V(X, 2);
        Me(te, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (j, G) => {
            var F = bb();
            L(j, F);
          },
          $$slots: { default: !0 }
        }), R(M);
        var oe = V(M, 2);
        Bn(oe, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(l);
}
ue(xf, { data: {} }, [], [], !0);
var $b = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), kb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _b = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Sb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cf(e, t) {
  de(t, !0), Be(e, Sb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), s = er();
  let a = /* @__PURE__ */ De(Ft([]));
  rr(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
  tt(() => {
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = $b();
        L(d, p);
      },
      children: (d, p) => {
        var f = _b(), g = le(f), h = I(g);
        Ae(h, {
          level: 3,
          children: (A, _) => {
            be();
            var k = Ee("输入参数");
            L(A, k);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Me(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, _) => {
            var k = kb();
            L(A, k);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = V(g, 2);
        Mt(w, {});
        var b = V(w, 2);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            be();
            var k = Ee("知识库设置");
            L(A, k);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = I(x);
        {
          let A = /* @__PURE__ */ T(() => n().knowledgeId ? [n().knowledgeId] : []);
          vt($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const k = _.value;
              l(o, () => ({ knowledgeId: k }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(x);
        var S = V(x, 4), E = I(S);
        at(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), R(S);
        var D = V(S, 4), O = I(D);
        {
          let A = /* @__PURE__ */ T(() => n().limit || "");
          at(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const k = _.target.value;
              l(o, () => ({ limit: k }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(D);
        var q = V(D, 2), K = I(q);
        Ae(K, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            be();
            var k = Ee("输出参数");
            L(A, k);
          },
          $$slots: { default: !0 }
        }), R(q);
        var J = V(q, 2);
        Bn(J, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(u);
}
ue(Cf, { data: {} }, [], [], !0);
var Eb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Pb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nb = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Tb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $f(e, t) {
  de(t, !0), Be(e, Tb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), s = er();
  let a = /* @__PURE__ */ De(Ft([]));
  rr(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
  tt(() => {
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Eb();
        L(d, p);
      },
      children: (d, p) => {
        var f = Nb(), g = le(f), h = I(g);
        Ae(h, {
          level: 3,
          children: (A, _) => {
            be();
            var k = Ee("输入参数");
            L(A, k);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Me(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, _) => {
            var k = Pb();
            L(A, k);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = V(g, 2);
        Mt(w, {});
        var b = V(w, 2);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            be();
            var k = Ee("搜索引擎设置");
            L(A, k);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = I(x);
        {
          let A = /* @__PURE__ */ T(() => n().engine ? [n().engine] : []);
          vt($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const k = _.value;
              l(o, () => ({ engine: k }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(x);
        var S = V(x, 4), E = I(S);
        at(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), R(S);
        var D = V(S, 4), O = I(D);
        at(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), R(D);
        var q = V(D, 2), K = I(q);
        Ae(K, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            be();
            var k = Ee("输出参数");
            L(A, k);
          },
          $$slots: { default: !0 }
        }), R(q);
        var J = V(q, 2);
        Bn(J, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(u);
}
ue($f, { data: {} }, [], [], !0);
var Db = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ob = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lb = /* @__PURE__ */ Q('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Mb = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function kf(e, t) {
  de(t, !0), Be(e, Mb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn();
  tt(() => {
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Db();
        L(a, l);
      },
      handle: (a) => {
        Jn(a, {
          type: "source",
          get position() {
            return xe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Lb(), d = le(u), p = I(d);
        Ae(p, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Ee("循环变量");
            L(b, $);
          },
          $$slots: { default: !0 }
        }), R(d);
        var f = V(d, 2);
        Mt(f, { dataKeyName: "loopVars" });
        var g = V(f, 2), h = I(g);
        Ae(h, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Ee("输出参数");
            L(b, $);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Me(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var $ = Ob();
            L(b, $);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = V(g, 2);
        Mt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe(s);
}
ue(kf, { data: {} }, [], [], !0);
const Hb = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var Vb = /* @__PURE__ */ Q('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), zb = /* @__PURE__ */ Q('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Ab = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function _f(e, t) {
  de(t, !0), Be(e, Ab);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = rt(), a = qn(s), l = /* @__PURE__ */ T(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = wt(), d = (_, k) => {
    u(s, (C) => {
      let N = C.data?.[o()];
      return N[r()] = { ...N[r()], [_]: k }, { [o()]: N };
    });
  }, p = (_, k) => {
    const C = k.target.value;
    d(_, C);
  }, f = (_) => {
    const k = _.value;
    d("ref", k);
  }, g = (_) => {
    const k = _.value;
    d("formType", k);
  }, h = (_) => {
    const k = _.value;
    d("contentType", k);
  };
  let v;
  const w = () => {
    u(s, (_) => {
      let k = _.data?.[o()];
      return k.splice(r(), 1), { [o()]: [...k] };
    }), v?.hide();
  };
  let b = gf(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), m();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), m();
    }
  }, $ = zb(), S = le($), E = I(S);
  {
    let _ = /* @__PURE__ */ T(() => c(l).nameDisabled === !0);
    at(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (k) => p("name", k)
    });
  }
  R(S);
  var D = V(S, 2), O = I(D);
  {
    var q = (_) => {
      at(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (k) => p("value", k)
      });
    }, K = (_) => {
      var k = Te(), C = le(k);
      {
        var N = (P) => {
          {
            let H = /* @__PURE__ */ T(() => [c(l).ref]);
            vt(P, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(H);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ce(
          C,
          (P) => {
            c(l).refType !== "input" && P(N);
          },
          !0
        );
      }
      L(_, k);
    };
    ce(O, (_) => {
      c(l).refType === "fixed" ? _(q) : _(K, !1);
    });
  }
  R(D);
  var J = V(D, 2), A = I(J);
  return Zt(
    kr(A, {
      placement: "bottom",
      floating: (_) => {
        var k = Vb(), C = I(k), N = V(I(C));
        {
          let F = /* @__PURE__ */ T(() => c(l).contentType ? [c(l).contentType] : []);
          vt(N, {
            get items() {
              return Pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(F);
            },
            onSelect: h
          });
        }
        R(C);
        var P = V(C, 2), H = V(I(P));
        {
          let F = /* @__PURE__ */ T(() => c(l).formType ? [c(l).formType] : []);
          vt(H, {
            get items() {
              return P2;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(F);
            },
            onSelect: g
          });
        }
        R(P);
        var Z = V(P, 2), Y = V(I(Z));
        We(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            p("formLabel", F);
          },
          get value() {
            return c(l).formLabel;
          }
        }), R(Z);
        var M = V(Z, 2), X = V(I(M));
        We(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            p("formDescription", F);
          },
          get value() {
            return c(l).formDescription;
          }
        }), R(M);
        var te = V(M, 2), oe = V(I(te), 2);
        wn(oe), $s(oe, !1), oe.__change = [Hb, d], R(te);
        var j = V(te, 2), G = I(j);
        Me(G, {
          onclick: w,
          children: (F, se) => {
            be();
            var W = Ee("删除");
            L(F, W);
          },
          $$slots: { default: !0 }
        }), R(j), R(k), L(_, k);
      },
      children: (_, k) => {
        Yo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => v = _,
    () => v
  ), R(J), L(e, $), fe(x);
}
Rn(["change"]);
ue(
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
var Rb = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ib = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), qb = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Zb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Sf(e, t) {
  de(t, !0), Be(e, Zb);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = rt(), s = qn(i), a = /* @__PURE__ */ T(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无确认数据") {
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
    }
  }, u = qb(), d = I(u);
  {
    var p = (g) => {
      var h = Rb();
      be(4), L(g, h);
    };
    ce(d, (g) => {
      c(a).length !== 0 && g(p);
    });
  }
  var f = V(d, 2);
  return kt(
    f,
    19,
    () => c(a),
    (g) => g.id,
    (g, h, v) => {
      _f(g, {
        get parameter() {
          return c(h);
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
    (g) => {
      var h = Ib(), v = I(h, !0);
      R(h), Se(() => Xe(v, n())), L(g, h);
    }
  ), R(u), L(e, u), fe(l);
}
ue(Sf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const As = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!As(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !As(e[s], t[s])) return !1;
    return !0;
  }
};
var Bb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Kb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jb = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Yb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ef(e, t) {
  de(t, !0), Be(e, Yb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), { updateNodeData: s } = wt();
  tt(() => {
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
      As(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Ut(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Bb();
        L(l, u);
      },
      children: (l, u) => {
        var d = jb(), p = le(d), f = I(p);
        Ae(f, {
          level: 3,
          children: (E, D) => {
            be();
            var O = Ee("确认数据");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var g = V(f, 2);
        Me(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (E, D) => {
            var O = Kb();
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(p);
        var h = V(p, 2);
        Sf(h, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var v = V(h, 2);
        Ae(v, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            be();
            var O = Ee("确认消息");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var w = V(v, 4), b = I(w);
        {
          let E = /* @__PURE__ */ T(() => n().message || "");
          We(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ message: D.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        R(w);
        var x = V(w, 2), $ = I(x);
        Ae($, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            be();
            var O = Ee("输出参数");
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(x);
        var S = V(x, 2);
        Bn(S, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe(a);
}
ue(Ef, { data: {} }, [], [], !0);
const Xb = {
  startNode: df,
  codeNode: wf,
  confirmNode: Ef,
  llmNode: yf,
  templateNode: bf,
  httpNode: xf,
  knowledgeNode: Cf,
  searchEngineNode: $f,
  loopNode: kf,
  endNode: vf
};
var Fb = /* @__PURE__ */ Q("<!> ", 1);
function Rs(e, t) {
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
  return Me(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = Fb(), f = le(p);
      la(f, n);
      var g = V(f);
      Se(() => Xe(g, ` ${r() ?? ""}`)), L(u, p);
    },
    $$slots: { default: !0 }
  }), fe(l);
}
ue(Rs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Wb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Gb = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Ub = /* @__PURE__ */ Q('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Pf(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ De("base"), r = /* @__PURE__ */ De("show");
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
  ], s = [], a = er(), l = a.customNodes;
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
  var u = Ub(), d = I(u), p = I(d), f = I(p);
  Fd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      U(n, b.value.toString(), !0);
    }
  }), R(p);
  var g = V(p, 2), h = I(g);
  kt(h, 21, () => o, Rr, (b, x) => {
    Rs(b, Fe(() => c(x)));
  }), R(h);
  var v = V(h, 2);
  kt(v, 21, () => s, Rr, (b, x) => {
    Rs(b, Fe(() => c(x)));
  }), R(v), R(g), R(d);
  var w = V(d, 2);
  Me(w, {
    onclick: () => {
      U(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var $ = Te(), S = le($);
      {
        var E = (O) => {
          var q = Wb();
          L(O, q);
        }, D = (O) => {
          var q = Gb();
          L(O, q);
        };
        ce(S, (O) => {
          c(r) === "show" ? O(E) : O(D, !1);
        });
      }
      L(b, $);
    },
    $$slots: { default: !0 }
  }), R(u), Se(() => {
    zt(u, 1, `tf-toolbar ${c(r) ?? ""}`), yt(h, `display: ${c(n) === "base" ? "flex" : "none"}`), yt(v, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), fe();
}
ue(Pf, {}, [], [], !0);
const Jb = () => ({ getNode: (e) => Je.getNode(e) }), Qb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Je.updateNodes((n) => {
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
} }), ex = () => ({ getEdgesByTarget: (e) => Je.getEdges().filter((t) => t.target === e) });
var tx = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nx = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), rx = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), ox = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), ix = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), sx = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), ax = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), lx = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ux = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), cx = /* @__PURE__ */ Q("<!> <!> <div></div> <!>", 1);
const dx = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Nf(e, t) {
  de(t, !0), Be(e, dx);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = rt(), { addParameter: i } = dn(), s = wt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = er().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  tt(() => {
    n().expand && h && h.append(p);
  }), tt(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), tt(() => {
    !n().parameters && f.parameters && l({
      parameters: So(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), tt(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: So(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var v = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), m();
    }
  };
  {
    const w = (x) => {
      var $ = Te(), S = le($);
      la(S, () => f.icon), L(x, $);
    };
    let b = /* @__PURE__ */ T(() => ({ ...n(), description: f.description }));
    Ut(e, Fe(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (x, $) => {
          var S = cx(), E = le(S);
          {
            var D = (_) => {
              var k = nx(), C = le(k), N = I(C);
              Ae(N, {
                level: 3,
                children: (Y, M) => {
                  be();
                  var X = Ee("输入参数");
                  L(Y, X);
                },
                $$slots: { default: !0 }
              });
              var P = V(N, 2);
              {
                var H = (Y) => {
                  Me(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (M, X) => {
                      var te = tx();
                      L(M, te);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ce(P, (Y) => {
                  f.parametersAddEnable !== !1 && Y(H);
                });
              }
              R(C);
              var Z = V(C, 2);
              Mt(Z, {}), L(_, k);
            };
            ce(E, (_) => {
              f.parametersEnable !== !1 && _(D);
            });
          }
          var O = V(E, 2);
          {
            var q = (_) => {
              var k = Te(), C = le(k);
              kt(C, 17, () => g, Rr, (N, P) => {
                var H = Te(), Z = le(H);
                {
                  var Y = (X) => {
                    var te = rx(), oe = le(te), j = I(oe, !0);
                    R(oe);
                    var G = V(oe, 2), F = I(G);
                    {
                      let se = /* @__PURE__ */ T(() => n()[c(P).name] || c(P).defaultValue);
                      at(F, Fe(
                        {
                          get placeholder() {
                            return c(P).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(se);
                          }
                        },
                        () => c(P).attrs,
                        {
                          onchange: (W) => {
                            u(c(P).name, W);
                          }
                        }
                      ));
                    }
                    R(G), Se(() => Xe(j, c(P).label)), L(X, te);
                  }, M = (X) => {
                    var te = Te(), oe = le(te);
                    {
                      var j = (F) => {
                        var se = ox(), W = le(se), ye = I(W, !0);
                        R(W);
                        var we = V(W, 2), ie = I(we);
                        {
                          let ee = /* @__PURE__ */ T(() => n()[c(P).name] || c(P).defaultValue);
                          We(ie, Fe(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(P).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ee);
                              }
                            },
                            () => c(P).attrs,
                            {
                              onchange: (re) => {
                                u(c(P).name, re);
                              }
                            }
                          ));
                        }
                        R(we), Se(() => Xe(ye, c(P).label)), L(F, se);
                      }, G = (F) => {
                        var se = Te(), W = le(se);
                        {
                          var ye = (ie) => {
                            var ee = ix(), re = le(ee), ge = I(re, !0);
                            R(re);
                            var he = V(re, 2), ae = I(he), Ne = I(ae), ke = I(Ne);
                            R(Ne);
                            var B = V(Ne, 2);
                            wn(B);
                            var lt = (ze) => l({ [c(P).name]: parseFloat(ze.target.value) });
                            ft(
                              B,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(P).attrs,
                                value: n()[c(P).name] ?? c(P).defaultValue,
                                oninput: lt
                              }),
                              void 0,
                              void 0,
                              "svelte-q0cqsa"
                            ), R(ae), R(he), Se(() => {
                              Xe(ge, c(P).label), Xe(ke, `${c(P).description ?? ""}: ${n()[c(P).name] ?? c(P).defaultValue ?? ""}`);
                            }), L(ie, ee);
                          }, we = (ie) => {
                            var ee = Te(), re = le(ee);
                            {
                              var ge = (ae) => {
                                var Ne = sx(), ke = le(Ne), B = I(ke, !0);
                                R(ke);
                                var lt = V(ke, 2), ze = I(lt);
                                {
                                  let qe = /* @__PURE__ */ T(() => c(P).options || []), Re = /* @__PURE__ */ T(() => n()[c(P).name] ? [n()[c(P).name]] : [c(P).defaultValue]);
                                  vt(ze, {
                                    get items() {
                                      return c(qe);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(P).placeholder;
                                    },
                                    onSelect: (ut) => {
                                      const ot = ut.value;
                                      l({ [c(P).name]: ot });
                                    },
                                    get value() {
                                      return c(Re);
                                    }
                                  });
                                }
                                R(lt), Se(() => Xe(B, c(P).label)), L(ae, Ne);
                              }, he = (ae) => {
                                var Ne = Te(), ke = le(Ne);
                                {
                                  var B = (ze) => {
                                    var qe = ax(), Re = le(qe), ut = I(Re, !0);
                                    R(Re);
                                    var ot = V(Re, 2), _t = I(ot);
                                    {
                                      let Ze = /* @__PURE__ */ T(() => c(P).chosen?.buttonText);
                                      Xd(_t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(P).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Ze);
                                        },
                                        onChosen: (Qe, ve, Ye) => {
                                          c(P).chosen?.onChosen?.(l, Qe, ve, Ye);
                                        },
                                        get value() {
                                          return n()[c(P).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(P).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(ot), Se(() => Xe(ut, c(P).label)), L(ze, qe);
                                  }, lt = (ze) => {
                                    var qe = Te(), Re = le(qe);
                                    {
                                      var ut = (ot) => {
                                        Ae(ot, Fe({ level: 3, mt: "10px" }, () => c(P).attrs, {
                                          children: (_t, Ze) => {
                                            be();
                                            var Qe = Ee();
                                            Se(() => Xe(Qe, c(P).label)), L(_t, Qe);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ce(
                                        Re,
                                        (ot) => {
                                          c(P).type === "heading" && ot(ut);
                                        },
                                        !0
                                      );
                                    }
                                    L(ze, qe);
                                  };
                                  ce(
                                    ke,
                                    (ze) => {
                                      c(P).type === "chosen" ? ze(B) : ze(lt, !1);
                                    },
                                    !0
                                  );
                                }
                                L(ae, Ne);
                              };
                              ce(
                                re,
                                (ae) => {
                                  c(P).type === "select" ? ae(ge) : ae(he, !1);
                                },
                                !0
                              );
                            }
                            L(ie, ee);
                          };
                          ce(
                            W,
                            (ie) => {
                              c(P).type === "slider" ? ie(ye) : ie(we, !1);
                            },
                            !0
                          );
                        }
                        L(F, se);
                      };
                      ce(
                        oe,
                        (F) => {
                          c(P).type === "textarea" ? F(j) : F(G, !1);
                        },
                        !0
                      );
                    }
                    L(X, te);
                  };
                  ce(Z, (X) => {
                    c(P).type === "input" ? X(Y) : X(M, !1);
                  });
                }
                L(N, H);
              }), L(_, k);
            };
            ce(O, (_) => {
              g && _(q);
            });
          }
          var K = V(O, 2);
          Zt(K, (_) => h = _, () => h);
          var J = V(K, 2);
          {
            var A = (_) => {
              var k = ux(), C = le(k), N = I(C);
              Ae(N, {
                level: 3,
                mt: "10px",
                children: (Y, M) => {
                  be();
                  var X = Ee("输出参数");
                  L(Y, X);
                },
                $$slots: { default: !0 }
              });
              var P = V(N, 2);
              {
                var H = (Y) => {
                  Me(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (M, X) => {
                      var te = lx();
                      L(M, te);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ce(P, (Y) => {
                  f.outputDefsAddEnable !== !1 && Y(H);
                });
              }
              R(C);
              var Z = V(C, 2);
              Bn(Z, {}), L(_, k);
            };
            ce(J, (_) => {
              f.outputDefsEnable !== !1 && _(A);
            });
          }
          Se(() => {
            yt(K, f.rootStyle || ""), zt(K, 1, In(f.rootClass), "svelte-q0cqsa");
          }), L(x, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return fe(v);
}
ue(Nf, { data: {} }, [], [], !0);
const fx = () => ({ updateEdgeData: (e, t, n) => {
  const r = Je.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Je.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), px = () => ({ deleteEdge: (e) => {
  Je.removeEdge(e);
} });
var gx = /* @__PURE__ */ Q('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), hx = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), vx = /* @__PURE__ */ Q('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const mx = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Tf(e, t) {
  de(t, !0), Be(e, mx);
  const n = y(t, "onInit", 7), r = wt();
  n()(r);
  let o = /* @__PURE__ */ De(!1), i = /* @__PURE__ */ De(null);
  const { updateEdgeData: s } = fx(), a = (N) => {
    N.preventDefault(), N.dataTransfer && (N.dataTransfer.dropEffect = "move");
  }, l = (N) => {
    N.preventDefault();
    const P = r.screenToFlowPosition({ x: N.clientX - 250, y: N.clientY - 100 }), H = N.dataTransfer?.getData("application/tinyflow");
    if (!H)
      return;
    const Z = JSON.parse(H), Y = { id: `node_${br()}`, position: P, data: {}, ...Z };
    Je.addNode(Y), Je.selectNodeOnly(Y.id);
  }, { getNode: u } = Jb(), d = (N) => {
    const P = u(N.source), H = u(N.target);
    if (N.sourceHandle === "loop_handle" || P.parentId) {
      const Z = r.getEdges();
      for (let Y of Z)
        if (Y.target === N.target) {
          const M = u(Y.source);
          if (N.sourceHandle === "loop_handle" && M.parentId !== P.id || P.parentId && M.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && H.parentId && H.parentId !== P.id);
  }, { ensureParentInNodesBefore: p } = Qb(), f = (N, P) => {
    if (!P.isValid)
      return;
    const H = P.toNode;
    if (H.parentId)
      return;
    const Z = P.fromNode, Y = P.fromHandle, M = { position: { ...H.position } };
    if (Y.id === "loop_handle" ? M.parentId = Z.id : Z.parentId && (M.parentId = Z.parentId), M.parentId) {
      const X = u(M.parentId);
      M.position = {
        x: H.position.x - X.position.x,
        y: H.position.y - X.position.y
      }, p(M.parentId, H.id), r.updateNode(H.id, M);
    }
    setTimeout(() => {
      Je.getEdges().forEach((X) => {
        X.target === H.id && X.source == Z.id && (U(o, !0), U(i, X, !0));
      });
    });
  }, { getEdgesByTarget: g } = ex(), h = (N) => {
    N.edges.forEach((P) => {
      P.id === c(i)?.id && (U(i, null), U(o, !1));
      const H = u(P.target);
      if (H && H.parentId) {
        const Z = g(P.target), Y = u(H.parentId);
        if (Z.length === 0)
          r.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + Y.position.x,
              y: H.position.y + Y.position.y
            }
          });
        else {
          let M = !1;
          for (let X = 0; X < Z.length; X++) {
            const te = Z[X], oe = u(te.source);
            if (oe.parentId || oe.type === "loopNode") {
              M = !0;
              break;
            }
          }
          M || r.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + Y.position.x,
              y: H.position.y + Y.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: v } = px(), w = (N, P) => {
  }, b = (N) => {
  }, x = {
    // ...nodeTypes
  }, $ = er().customNodes;
  if ($)
    for (let N of Object.keys($))
      x[N] = Nf;
  const S = er().onDataChange;
  tt(() => {
    S?.({
      nodes: Je.getNodes(),
      edges: Je.getEdges(),
      viewport: Je.getViewport()
    });
  });
  var E = {
    get onInit() {
      return n();
    },
    set onInit(N) {
      n(N), m();
    }
  }, D = vx(), O = I(D), q = Je.getNodes, K = Je.setNodes, J = Je.getEdges, A = Je.setEdges, _ = Je.getViewport, k = Je.setViewport;
  {
    let N = /* @__PURE__ */ T(() => ({ ...Xb, ...x })), P = /* @__PURE__ */ T(() => ({
      markerEnd: { type: xo.ArrowClosed, width: 20, height: 20 }
    }));
    Od(O, {
      get nodeTypes() {
        return c(N);
      },
      get nodes() {
        return q();
      },
      set nodes(H) {
        K(H);
      },
      get edges() {
        return J();
      },
      set edges(H) {
        A(H);
      },
      get viewport() {
        return _();
      },
      set viewport(H) {
        k(H);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: f,
      onconnectstart: w,
      onconnect: b,
      connectionRadius: 50,
      onedgeclick: (H) => {
        U(o, !0), U(i, H.edge, !0);
      },
      onbeforeconnect: (H) => ({ ...H, id: br() }),
      ondelete: h,
      onclick: (H) => {
        const Z = H.target;
        Z.classList.contains("svelte-flow__edge-interaction") || Z.classList.contains("panel-content") || Z.closest(".panel-content") || (U(o, !1), U(i, null));
      },
      get defaultEdgeOptions() {
        return c(P);
      },
      children: (H, Z) => {
        var Y = hx(), M = le(Y);
        Zd(M, {});
        var X = V(M, 2);
        Rd(X, {});
        var te = V(X, 2);
        Kd(te, {});
        var oe = V(te, 2);
        {
          var j = (G) => {
            Zo(G, {
              children: (F, se) => {
                var W = gx(), ye = V(I(W), 4), we = I(ye);
                {
                  let ge = /* @__PURE__ */ T(() => c(i)?.data?.condition);
                  We(we, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(ge);
                    },
                    onchange: (he) => {
                      c(i) && s(c(i).id, { condition: he.target?.value });
                    }
                  });
                }
                R(ye);
                var ie = V(ye, 2), ee = I(ie);
                Me(ee, {
                  onclick: () => {
                    v(c(i)?.id), U(o, !1);
                  },
                  children: (ge, he) => {
                    be();
                    var ae = Ee("删除");
                    L(ge, ae);
                  },
                  $$slots: { default: !0 }
                });
                var re = V(ee, 2);
                Me(re, {
                  primary: !0,
                  onclick: () => {
                    U(o, !1);
                  },
                  children: (ge, he) => {
                    be();
                    var ae = Ee("保存");
                    L(ge, ae);
                  },
                  $$slots: { default: !0 }
                }), R(ie), R(W), L(F, W);
              },
              $$slots: { default: !0 }
            });
          };
          ce(oe, (G) => {
            c(o) && G(j);
          });
        }
        L(H, Y);
      },
      $$slots: { default: !0 }
    });
  }
  var C = V(O, 2);
  return Pf(C, {}), R(D), L(e, D), fe(E);
}
ue(Tf, { onInit: {} }, [], [], !0);
function yx(e, t) {
  de(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Je.init(o?.nodes || [], o?.edges || []), zr("tinyflow_options", n());
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
  return Ld(e, {
    children: (s, a) => {
      Tf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), fe(i);
}
customElements.define("tinyflow-component", ue(yx, { options: {}, onInit: {} }, [], [], !1));
const bx = qf((e, t) => {
  const n = Ra(null), r = Ra(null);
  Zf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Bf(() => {
    if (n.current) {
      const a = new N2({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Xf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  bx as Tinyflow
};
//# sourceMappingURL=index.js.map
