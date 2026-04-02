import dh, { forwardRef as _m, useRef as bc, useImperativeHandle as Em, useEffect as Pm } from "react";
var Ji = { exports: {} }, Uo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function Om() {
  if (xc) return Uo;
  xc = 1;
  var t = dh, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, h = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: e, type: a, key: f, ref: v, props: h, _owner: o.current };
  }
  return Uo.Fragment = n, Uo.jsx = s, Uo.jsxs = s, Uo;
}
var Go = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc;
function Nm() {
  return kc || (kc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = dh, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function w(F) {
      if (F === null || typeof F != "object")
        return null;
      var fe = m && F[m] || F[y];
      return typeof fe == "function" ? fe : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(F) {
      {
        for (var fe = arguments.length, ke = new Array(fe > 1 ? fe - 1 : 0), Ve = 1; Ve < fe; Ve++)
          ke[Ve - 1] = arguments[Ve];
        E("error", F, ke);
      }
    }
    function E(F, fe, ke) {
      {
        var Ve = b.ReactDebugCurrentFrame, rt = Ve.getStackAddendum();
        rt !== "" && (fe += "%s", ke = ke.concat([rt]));
        var dt = ke.map(function(Je) {
          return String(Je);
        });
        dt.unshift("Warning: " + fe), Function.prototype.apply.call(console[F], console, dt);
      }
    }
    var C = !1, k = !1, O = !1, V = !1, H = !1, L;
    L = Symbol.for("react.module.reference");
    function M(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === i || H || F === o || F === u || F === d || V || F === v || C || k || O || typeof F == "object" && F !== null && (F.$$typeof === f || F.$$typeof === h || F.$$typeof === s || F.$$typeof === a || F.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === L || F.getModuleId !== void 0));
    }
    function D(F, fe, ke) {
      var Ve = F.displayName;
      if (Ve)
        return Ve;
      var rt = fe.displayName || fe.name || "";
      return rt !== "" ? ke + "(" + rt + ")" : ke;
    }
    function _(F) {
      return F.displayName || "Context";
    }
    function N(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
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
      if (typeof F == "object")
        switch (F.$$typeof) {
          case a:
            var fe = F;
            return _(fe) + ".Consumer";
          case s:
            var ke = F;
            return _(ke._context) + ".Provider";
          case l:
            return D(F, F.render, "ForwardRef");
          case h:
            var Ve = F.displayName || null;
            return Ve !== null ? Ve : N(F.type) || "Memo";
          case f: {
            var rt = F, dt = rt._payload, Je = rt._init;
            try {
              return N(Je(dt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, P = 0, A, j, q, G, T, U, ee;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function Z() {
      {
        if (P === 0) {
          A = console.log, j = console.info, q = console.warn, G = console.error, T = console.group, U = console.groupCollapsed, ee = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: F,
            log: F,
            warn: F,
            error: F,
            group: F,
            groupCollapsed: F,
            groupEnd: F
          });
        }
        P++;
      }
    }
    function W() {
      {
        if (P--, P === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, F, {
              value: A
            }),
            info: $({}, F, {
              value: j
            }),
            warn: $({}, F, {
              value: q
            }),
            error: $({}, F, {
              value: G
            }),
            group: $({}, F, {
              value: T
            }),
            groupCollapsed: $({}, F, {
              value: U
            }),
            groupEnd: $({}, F, {
              value: ee
            })
          });
        }
        P < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, oe;
    function I(F, fe, ke) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (rt) {
            var Ve = rt.stack.trim().match(/\n( *(at )?)/);
            oe = Ve && Ve[1] || "";
          }
        return `
` + oe + F;
      }
    }
    var ne = !1, ge;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ce();
    }
    function ie(F, fe) {
      if (!F || ne)
        return "";
      {
        var ke = ge.get(F);
        if (ke !== void 0)
          return ke;
      }
      var Ve;
      ne = !0;
      var rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var dt;
      dt = J.current, J.current = null, Z();
      try {
        if (fe) {
          var Je = function() {
            throw Error();
          };
          if (Object.defineProperty(Je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Je, []);
            } catch (Jt) {
              Ve = Jt;
            }
            Reflect.construct(F, [], Je);
          } else {
            try {
              Je.call();
            } catch (Jt) {
              Ve = Jt;
            }
            F.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Jt) {
            Ve = Jt;
          }
          F();
        }
      } catch (Jt) {
        if (Jt && Ve && typeof Jt.stack == "string") {
          for (var Ye = Jt.stack.split(`
`), Wt = Ve.stack.split(`
`), xt = Ye.length - 1, _t = Wt.length - 1; xt >= 1 && _t >= 0 && Ye[xt] !== Wt[_t]; )
            _t--;
          for (; xt >= 1 && _t >= 0; xt--, _t--)
            if (Ye[xt] !== Wt[_t]) {
              if (xt !== 1 || _t !== 1)
                do
                  if (xt--, _t--, _t < 0 || Ye[xt] !== Wt[_t]) {
                    var gn = `
` + Ye[xt].replace(" at new ", " at ");
                    return F.displayName && gn.includes("<anonymous>") && (gn = gn.replace("<anonymous>", F.displayName)), typeof F == "function" && ge.set(F, gn), gn;
                  }
                while (xt >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        ne = !1, J.current = dt, W(), Error.prepareStackTrace = rt;
      }
      var xo = F ? F.displayName || F.name : "", Xr = xo ? I(xo) : "";
      return typeof F == "function" && ge.set(F, Xr), Xr;
    }
    function de(F, fe, ke) {
      return ie(F, !1);
    }
    function ye(F) {
      var fe = F.prototype;
      return !!(fe && fe.isReactComponent);
    }
    function Ce(F, fe, ke) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return ie(F, ye(F));
      if (typeof F == "string")
        return I(F);
      switch (F) {
        case u:
          return I("Suspense");
        case d:
          return I("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case l:
            return de(F.render);
          case h:
            return Ce(F.type, fe, ke);
          case f: {
            var Ve = F, rt = Ve._payload, dt = Ve._init;
            try {
              return Ce(dt(rt), fe, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, he = {}, xe = b.ReactDebugCurrentFrame;
    function Pe(F) {
      if (F) {
        var fe = F._owner, ke = Ce(F.type, F._source, fe ? fe.type : null);
        xe.setExtraStackFrame(ke);
      } else
        xe.setExtraStackFrame(null);
    }
    function te(F, fe, ke, Ve, rt) {
      {
        var dt = Function.call.bind(be);
        for (var Je in F)
          if (dt(F, Je)) {
            var Ye = void 0;
            try {
              if (typeof F[Je] != "function") {
                var Wt = Error((Ve || "React class") + ": " + ke + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wt.name = "Invariant Violation", Wt;
              }
              Ye = F[Je](fe, Je, Ve, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xt) {
              Ye = xt;
            }
            Ye && !(Ye instanceof Error) && (Pe(rt), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", ke, Je, typeof Ye), Pe(null)), Ye instanceof Error && !(Ye.message in he) && (he[Ye.message] = !0, Pe(rt), x("Failed %s type: %s", ke, Ye.message), Pe(null));
          }
      }
    }
    var Re = Array.isArray;
    function De(F) {
      return Re(F);
    }
    function Xe(F) {
      {
        var fe = typeof Symbol == "function" && Symbol.toStringTag, ke = fe && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return ke;
      }
    }
    function Fe(F) {
      try {
        return st(F), !1;
      } catch {
        return !0;
      }
    }
    function st(F) {
      return "" + F;
    }
    function ut(F) {
      if (Fe(F))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(F)), st(F);
    }
    var mt = b.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Ae;
    function ct(F) {
      if (be.call(F, "ref")) {
        var fe = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (fe && fe.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function qe(F) {
      if (be.call(F, "key")) {
        var fe = Object.getOwnPropertyDescriptor(F, "key").get;
        if (fe && fe.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function gt(F, fe) {
      typeof F.ref == "string" && mt.current;
    }
    function Vt(F, fe) {
      {
        var ke = function() {
          me || (me = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", fe));
        };
        ke.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function wt(F, fe) {
      {
        var ke = function() {
          Ae || (Ae = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", fe));
        };
        ke.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var ht = function(F, fe, ke, Ve, rt, dt, Je) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: F,
        key: fe,
        ref: ke,
        props: Je,
        // Record the component responsible for creating this element.
        _owner: dt
      };
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function ft(F, fe, ke, Ve, rt) {
      {
        var dt, Je = {}, Ye = null, Wt = null;
        ke !== void 0 && (ut(ke), Ye = "" + ke), qe(fe) && (ut(fe.key), Ye = "" + fe.key), ct(fe) && (Wt = fe.ref, gt(fe, rt));
        for (dt in fe)
          be.call(fe, dt) && !nt.hasOwnProperty(dt) && (Je[dt] = fe[dt]);
        if (F && F.defaultProps) {
          var xt = F.defaultProps;
          for (dt in xt)
            Je[dt] === void 0 && (Je[dt] = xt[dt]);
        }
        if (Ye || Wt) {
          var _t = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          Ye && Vt(Je, _t), Wt && wt(Je, _t);
        }
        return ht(F, Ye, Wt, rt, Ve, mt.current, Je);
      }
    }
    var St = b.ReactCurrentOwner, Zt = b.ReactDebugCurrentFrame;
    function tr(F) {
      if (F) {
        var fe = F._owner, ke = Ce(F.type, F._source, fe ? fe.type : null);
        Zt.setExtraStackFrame(ke);
      } else
        Zt.setExtraStackFrame(null);
    }
    var Yo;
    Yo = !1;
    function Cn(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function pc() {
      {
        if (St.current) {
          var F = N(St.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function vm(F) {
      return "";
    }
    var gc = {};
    function mm(F) {
      {
        var fe = pc();
        if (!fe) {
          var ke = typeof F == "string" ? F : F.displayName || F.name;
          ke && (fe = `

Check the top-level render call using <` + ke + ">.");
        }
        return fe;
      }
    }
    function vc(F, fe) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var ke = mm(fe);
        if (gc[ke])
          return;
        gc[ke] = !0;
        var Ve = "";
        F && F._owner && F._owner !== St.current && (Ve = " It was passed a child from " + N(F._owner.type) + "."), tr(F), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, Ve), tr(null);
      }
    }
    function mc(F, fe) {
      {
        if (typeof F != "object")
          return;
        if (De(F))
          for (var ke = 0; ke < F.length; ke++) {
            var Ve = F[ke];
            Cn(Ve) && vc(Ve, fe);
          }
        else if (Cn(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var rt = w(F);
          if (typeof rt == "function" && rt !== F.entries)
            for (var dt = rt.call(F), Je; !(Je = dt.next()).done; )
              Cn(Je.value) && vc(Je.value, fe);
        }
      }
    }
    function ym(F) {
      {
        var fe = F.type;
        if (fe == null || typeof fe == "string")
          return;
        var ke;
        if (typeof fe == "function")
          ke = fe.propTypes;
        else if (typeof fe == "object" && (fe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        fe.$$typeof === h))
          ke = fe.propTypes;
        else
          return;
        if (ke) {
          var Ve = N(fe);
          te(ke, F.props, "prop", Ve, F);
        } else if (fe.PropTypes !== void 0 && !Yo) {
          Yo = !0;
          var rt = N(fe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof fe.getDefaultProps == "function" && !fe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wm(F) {
      {
        for (var fe = Object.keys(F.props), ke = 0; ke < fe.length; ke++) {
          var Ve = fe[ke];
          if (Ve !== "children" && Ve !== "key") {
            tr(F), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), tr(null);
            break;
          }
        }
        F.ref !== null && (tr(F), x("Invalid attribute `ref` supplied to `React.Fragment`."), tr(null));
      }
    }
    var yc = {};
    function wc(F, fe, ke, Ve, rt, dt) {
      {
        var Je = M(F);
        if (!Je) {
          var Ye = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wt = vm();
          Wt ? Ye += Wt : Ye += pc();
          var xt;
          F === null ? xt = "null" : De(F) ? xt = "array" : F !== void 0 && F.$$typeof === e ? (xt = "<" + (N(F.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : xt = typeof F, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xt, Ye);
        }
        var _t = ft(F, fe, ke, rt, dt);
        if (_t == null)
          return _t;
        if (Je) {
          var gn = fe.children;
          if (gn !== void 0)
            if (Ve)
              if (De(gn)) {
                for (var xo = 0; xo < gn.length; xo++)
                  mc(gn[xo], F);
                Object.freeze && Object.freeze(gn);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mc(gn, F);
        }
        if (be.call(fe, "key")) {
          var Xr = N(F), Jt = Object.keys(fe).filter(function(Sm) {
            return Sm !== "key";
          }), Ha = Jt.length > 0 ? "{key: someKey, " + Jt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yc[Xr + Ha]) {
            var $m = Jt.length > 0 ? "{" + Jt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ha, Xr, $m, Xr), yc[Xr + Ha] = !0;
          }
        }
        return F === r ? wm(_t) : ym(_t), _t;
      }
    }
    function bm(F, fe, ke) {
      return wc(F, fe, ke, !0);
    }
    function xm(F, fe, ke) {
      return wc(F, fe, ke, !1);
    }
    var km = xm, Cm = bm;
    Go.Fragment = r, Go.jsx = km, Go.jsxs = Cm;
  }()), Go;
}
var Cc;
function Tm() {
  return Cc || (Cc = 1, process.env.NODE_ENV === "production" ? Ji.exports = Om() : Ji.exports = Nm()), Ji.exports;
}
var Am = Tm();
const zm = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(zm);
const hh = 1, fh = 2, ph = 4, Mm = 8, Dm = 16, Vm = 1, Hm = 2, gh = 4, Im = 8, Lm = 16, vh = 1, Rm = 2, mh = "[", da = "[!", tu = "]", oo = {}, Ht = Symbol(), jm = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/2000/svg", yh = "@attach", Fm = !1;
var ha = Array.isArray, Km = Array.prototype.indexOf, nu = Array.from, Ps = Object.keys, Os = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, wh = Object.getOwnPropertyDescriptors, bh = Object.prototype, Zm = Array.prototype, fa = Object.getPrototypeOf, $c = Object.isExtensible;
function Jo(t) {
  return typeof t == "function";
}
const Ze = () => {
};
function Wm(t) {
  return t();
}
function il(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function xh() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Xt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function Bo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Lt = 2, ru = 4, pa = 8, kh = 1 << 24, xr = 16, kr = 32, jr = 64, ga = 128, Nn = 512, Ft = 1024, sn = 2048, Cr = 4096, dn = 8192, hr = 16384, va = 32768, gr = 65536, Sc = 1 << 17, ou = 1 << 18, fo = 1 << 19, Ch = 1 << 20, gi = 32768, sl = 1 << 21, iu = 1 << 22, Ar = 1 << 23, Wn = Symbol("$state"), su = Symbol("legacy props"), Xm = Symbol(""), So = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), qm = 1, ma = 3, $r = 8;
function au(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ym() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Um(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function e1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function t1(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function n1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function r1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function o1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function i1() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ti(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function s1() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function a1() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ee = !1;
function Yt(t) {
  Ee = t;
}
let Ie;
function bt(t) {
  if (t === null)
    throw Ti(), oo;
  return Ie = t;
}
function Tn() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ fn(Ie)
  );
}
function X(t) {
  if (Ee) {
    if (/* @__PURE__ */ fn(Ie) !== null)
      throw Ti(), oo;
    Ie = t;
  }
}
function Oe(t = 1) {
  if (Ee) {
    for (var e = t, n = Ie; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n);
    Ie = n;
  }
}
function Ns(t = !0) {
  for (var e = 0, n = Ie; ; ) {
    if (n.nodeType === $r) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === tu) {
        if (e === 0) return n;
        e -= 1;
      } else (r === mh || r === da) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n)
    );
    t && n.remove(), n = o;
  }
}
function $h(t) {
  if (!t || t.nodeType !== $r)
    throw Ti(), oo;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Sh(t) {
  return t === this.v;
}
function _h(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Eh(t) {
  return !_h(t, this.v);
}
let Fo = !1, l1 = !1;
function u1() {
  Fo = !0;
}
const c1 = [];
function lu(t, e = !1, n = !1) {
  return gs(t, /* @__PURE__ */ new Map(), "", c1, null, n);
}
function gs(t, e, n, r, o = null, i = !1) {
  if (typeof t == "object" && t !== null) {
    var s = e.get(t);
    if (s !== void 0) return s;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (ha(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = gs(u, e, n, r, null, i));
      }
      return a;
    }
    if (fa(t) === bh) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = gs(
          // @ts-expect-error
          t[d],
          e,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function" && !i)
      return gs(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        n,
        r,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
let vt = null;
function To(t) {
  vt = t;
}
function An(t) {
  return (
    /** @type {T} */
    ya().get(t)
  );
}
function io(t, e) {
  return ya().set(t, e), e;
}
function d1(t) {
  return ya().has(t);
}
function h1() {
  return ya();
}
function le(t, e = !1, n) {
  vt = {
    p: vt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Fo && !e ? { s: null, u: null, $: [] } : null
  };
}
function ue(t) {
  var e = (
    /** @type {ComponentContext} */
    vt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Wh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, vt = e.p, t ?? /** @type {T} */
  {};
}
function Ko() {
  return !Fo || vt !== null && vt.l === null;
}
function ya(t) {
  return vt === null && au(), vt.c ??= new Map(f1(vt) || void 0);
}
function f1(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Gr = [];
function Ph() {
  var t = Gr;
  Gr = [], il(t);
}
function Br(t) {
  if (Gr.length === 0 && !di) {
    var e = Gr;
    queueMicrotask(() => {
      e === Gr && Ph();
    });
  }
  Gr.push(t);
}
function p1() {
  for (; Gr.length > 0; )
    Ph();
}
function Oh(t) {
  var e = Ue;
  if (e === null)
    return tt.f |= Ar, t;
  if ((e.f & va) === 0) {
    if ((e.f & ga) === 0)
      throw t;
    e.b.error(t);
  } else
    Ao(t, e);
}
function Ao(t, e) {
  for (; e !== null; ) {
    if ((e.f & ga) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const Qi = /* @__PURE__ */ new Set();
let at = null, vs = null, yn = null, mn = [], wa = null, al = !1, di = !1;
class En {
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
  #o = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #a = [];
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
  process(e) {
    mn = [], vs = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (vs = this, at = null, _c(n.render_effects), _c(n.effects), vs = null, this.#o?.resolve()), yn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Ft;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (kr | jr)) !== 0, s = i && (o & Ft) !== 0, a = s || (o & dn) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ga) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Ft : (o & ru) !== 0 ? n.effects.push(r) : zi(r) && ((r.f & xr) !== 0 && n.block_effects.push(r), yi(r));
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
  #l(e) {
    for (const n of e)
      ((n.f & sn) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Kt(n, Ft);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & Lt) === 0 || (n.f & gi) === 0 || (n.f ^= gi, this.#u(
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
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), (e.f & Ar) === 0 && (this.current.set(e, e.v), yn?.set(e, e.v));
  }
  activate() {
    at = this, this.apply();
  }
  deactivate() {
    at === this && (at = null, yn = null);
  }
  flush() {
    if (this.activate(), mn.length > 0) {
      if (Nh(), at !== null && at !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Qi.size > 1) {
      this.previous.clear();
      var e = yn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Qi) {
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
          var o = mn;
          mn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Th(d, a, l, u);
          if (mn.length > 0) {
            at = i, i.apply();
            for (const d of mn)
              i.#s(d, r);
            i.deactivate();
          }
          mn = o;
        }
      }
      at = null, yn = e;
    }
    this.committed = !0, Qi.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const e of this.#i)
      Kt(e, sn), so(e);
    for (const e of this.#a)
      Kt(e, Cr), so(e);
    this.#i = [], this.#a = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#o ??= xh()).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new En();
      Qi.add(at), di || En.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Br(e);
  }
  apply() {
  }
}
function p(t) {
  var e = di;
  di = !0;
  try {
    for (var n; ; ) {
      if (p1(), mn.length === 0 && (at?.flush(), mn.length === 0))
        return wa = null, /** @type {T} */
        n;
      Nh();
    }
  } finally {
    di = e;
  }
}
function Nh() {
  var t = Mr;
  al = !0;
  try {
    var e = 0;
    for (As(!0); mn.length > 0; ) {
      var n = En.ensure();
      if (e++ > 1e3) {
        var r, o;
        g1();
      }
      n.process(mn), zr.clear();
    }
  } finally {
    al = !1, As(t), wa = null;
  }
}
function g1() {
  try {
    Qm();
  } catch (t) {
    Ao(t, wa);
  }
}
let or = null;
function _c(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (hr | dn)) === 0 && zi(r) && (or = /* @__PURE__ */ new Set(), yi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Gh(r) : r.fn = null), or?.size > 0)) {
        zr.clear();
        for (const o of or) {
          if ((o.f & (hr | dn)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            or.has(s) && (or.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (hr | dn)) === 0 && yi(l);
          }
        }
        or.clear();
      }
    }
    or = null;
  }
}
function Th(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & Lt) !== 0 ? Th(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (iu | xr)) !== 0 && (i & sn) === 0 && Ah(o, e, r) && (Kt(o, sn), so(
        /** @type {Effect} */
        o
      ));
    }
}
function Ah(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & Lt) !== 0 && Ah(
        /** @type {Derived} */
        o,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function so(t) {
  for (var e = wa = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (al && e === Ue && (n & xr) !== 0 && (n & ou) === 0)
      return;
    if ((n & (jr | kr)) !== 0) {
      if ((n & Ft) === 0) return;
      e.f ^= Ft;
    }
  }
  mn.push(e);
}
function po(t) {
  let e = 0, n = vr(0), r;
  return () => {
    vi() && (c(n), vo(() => (e === 0 && (r = yt(() => t(() => jn(n)))), e += 1, () => {
      Br(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, jn(n));
      });
    })));
  };
}
var v1 = gr | fo | ga;
function m1(t, e, n) {
  new y1(t, e, n);
}
class y1 {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = Ee ? Ie : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #d = 0;
  #h = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #y = po(() => (this.#f = vr(this.#d), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Ue.b, this.#e = !!this.#r.pending, this.#i = Fr(() => {
      if (Ue.b = this, Ee) {
        const i = this.#n;
        Tn(), /** @type {Comment} */
        i.nodeType === $r && /** @type {Comment} */
        i.data === da ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = un(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, v1), Ee && (this.#t = Ie);
  }
  #v() {
    try {
      this.#a = un(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = un(() => e(this.#t)), En.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (En.ensure(), un(() => this.#o(n)))), this.#h > 0 ? this.#b() : (Eo(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var e = this.#t;
    return this.#e && (this.#c = Gt(), this.#t.before(this.#c), e = this.#c), e;
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
  #g(e) {
    var n = Ue, r = tt, o = vt;
    bn(this.#i), nn(this.#i), To(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Oh(i), null;
    } finally {
      bn(n), nn(r), To(o);
    }
  }
  #b() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#a !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), ef(this.#a, this.#u)), this.#s === null && (this.#s = un(() => e(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #x(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(e);
      return;
    }
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && Eo(this.#s, () => {
      this.#s = null;
    }), this.#u && (this.#t.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#x(e), this.#d += e, this.#f && zo(this.#f, this.#d);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#p || !n && !r)
      throw e;
    this.#a && (Mt(this.#a), this.#a = null), this.#s && (Mt(this.#s), this.#s = null), this.#l && (Mt(this.#l), this.#l = null), Ee && (bt(
      /** @type {TemplateNode} */
      this.#n
    ), Oe(), bt(Ns()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        a1();
        return;
      }
      o = !0, i && i1(), En.ensure(), this.#d = 0, this.#l !== null && Eo(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#p = !1, un(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = tt;
    try {
      nn(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      Ao(l, this.#i && this.#i.parent);
    } finally {
      nn(a);
    }
    r && Br(() => {
      this.#l = this.#g(() => {
        En.ensure(), this.#p = !0;
        try {
          return un(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ao(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function ao(t, e) {
  return e;
}
function w1(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    hu(e[i].e, r, !0);
  Jh(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      du(l), l.append(a), t.items.clear(), $n(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), $n(t, d.prev, d.next)), Mt(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function At(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & ph) !== 0, d = (e & hh) !== 0, h = (e & fh) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      t
    );
    s = Ee ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Pt(f)
    ) : f.appendChild(Gt());
  }
  Ee && Tn();
  var v = null, m = /* @__PURE__ */ uu(() => {
    var C = n();
    return ha(C) ? C : C == null ? [] : nu(C);
  }), y, w = !0;
  function b() {
    b1(E, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : fu(v.effect), x.first = v.effect) : Eo(v.effect, () => {
      v = null;
    }));
  }
  var x = Fr(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let k = !1;
    if (Ee) {
      var O = $h(s) === da;
      O !== (C === 0) && (s = Ns(), bt(s), Yt(!1), k = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      at
    ), L = null, M = Bh(), D = 0; D < C; D += 1) {
      Ee && Ie.nodeType === $r && /** @type {Comment} */
      Ie.data === tu && (s = /** @type {Comment} */
      Ie, k = !0, Yt(!1));
      var _ = y[D], N = r(_, D), $ = w ? null : a.get(N);
      $ ? (d && zo($.v, _), h ? zo(
        /** @type {Value<number>} */
        $.i,
        D
      ) : $.i = D, M && H.skipped_effects.delete($.e)) : ($ = x1(
        w ? s : null,
        L,
        _,
        N,
        D,
        o,
        e,
        n
      ), w && ($.o = !0, L === null ? l = $ : L.next = $, L = $), a.set(N, $)), V.add(N);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: un(() => i(s))
        };
      else {
        var P = document.createDocumentFragment(), A = Gt();
        P.append(A), v = {
          fragment: P,
          effect: un(() => i(A))
        };
      }
    if (Ee && C > 0 && bt(Ns()), !w)
      if (M) {
        for (const [j, q] of a)
          V.has(j) || H.skipped_effects.add(q.e);
        H.oncommit(b), H.ondiscard(() => {
        });
      } else
        b();
    k && Yt(!0), c(m);
  }), E = { effect: x, items: a, first: l };
  w = !1, Ee && (s = Ie);
}
function b1(t, e, n, r, o) {
  var i = (r & Mm) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, f = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var x = d ? d.next : l;
      $n(t, d, w), $n(t, w, x), Ia(w, x, n), d = w, f = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & dn) !== 0 && (fu(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (f.length < v.length) {
          var E = v[0], C;
          d = E.prev;
          var k = f[0], O = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            Ia(f[C], E, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          $n(t, k.prev, O.next), $n(t, d, k), $n(t, O, E), l = E, d = O, b -= 1, f = [], v = [];
        } else
          u.delete(w), Ia(w, l, n), $n(t, w.prev, w.next), $n(t, w, d === null ? t.first : d.next), $n(t, d, w), d = w;
        continue;
      }
      for (f = [], v = []; l !== null && l.k !== y; )
        (l.e.f & dn) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var H = u === void 0 ? [] : nu(u); l !== null; )
      (l.e.f & dn) === 0 && H.push(l), l = l.next;
    var L = H.length;
    if (V = a.size - L > s, L > 0) {
      var M = (r & ph) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < L; b += 1)
          H[b].a?.measure();
        for (b = 0; b < L; b += 1)
          H[b].a?.fix();
      }
      w1(t, H, M);
    }
  }
  if (V)
    for (const D of a.values())
      D.o || ($n(t, d, D), d = D);
  t.effect.last = d && d.e, i && Br(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function x1(t, e, n, r, o, i, s, a) {
  var l = (s & hh) !== 0, u = (s & Dm) === 0, d = l ? u ? /* @__PURE__ */ Hh(n, !1, !1) : vr(n) : n, h = (s & fh) === 0 ? o : vr(o), f = {
    i: h,
    v: d,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: e,
    next: null
  };
  try {
    if (t === null) {
      var v = document.createDocumentFragment();
      v.append(t = Gt());
    }
    return f.e = un(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = f), f;
  } finally {
  }
}
function Ia(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, o = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); i !== null && i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(i)
    );
    o.before(i), i = s;
  }
}
function $n(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function zh(t, e, n, r) {
  const o = Ko() ? Ai : uu;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = at, s = (
    /** @type {Effect} */
    Ue
  ), a = k1();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ C1(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & hr) === 0 && Ao(d, s);
      }
      i?.deactivate(), Ts();
    }).catch((u) => {
      Ao(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Ts();
    }
  }) : l();
}
function k1() {
  var t = Ue, e = tt, n = vt, r = at;
  return function(o = !0) {
    bn(t), nn(e), To(n), o && r?.activate();
  };
}
function Ts() {
  bn(null), nn(null), To(null);
}
// @__NO_SIDE_EFFECTS__
function Ai(t) {
  var e = Lt | sn, n = tt !== null && (tt.f & Lt) !== 0 ? (
    /** @type {Derived} */
    tt
  ) : null;
  return Ue !== null && (Ue.f |= fo), {
    ctx: vt,
    deps: null,
    effects: null,
    equals: Sh,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? Ue,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function C1(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ue
  );
  n === null && Ym();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = vr(
    /** @type {V} */
    Ht
  ), s = !tt, a = /* @__PURE__ */ new Map();
  return T1(() => {
    var l = xh();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === at && u.committed && u.deactivate(), Ts();
      });
    } catch (f) {
      l.reject(f), Ts();
    }
    var u = (
      /** @type {Batch} */
      at
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(So), a.delete(u), a.set(u, l);
    }
    const h = (f, v = void 0) => {
      if (u.activate(), v)
        v !== So && (i.f |= Ar, zo(i, v));
      else {
        (i.f & Ar) !== 0 && (i.f ^= Ar), zo(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(So);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), xa(() => {
    for (const l of a.values())
      l.reject(So);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === o ? l(i) : u(o);
      }
      d.then(h, h);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function S(t) {
  const e = /* @__PURE__ */ Ai(t);
  return tf(e), e;
}
// @__NO_SIDE_EFFECTS__
function uu(t) {
  const e = /* @__PURE__ */ Ai(t);
  return e.equals = Eh, e;
}
function Mh(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Mt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $1(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Lt) === 0)
      return (e.f & hr) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function cu(t) {
  var e, n = Ue;
  bn($1(t));
  try {
    t.f &= ~gi, Mh(t), e = sf(t);
  } finally {
    bn(n);
  }
  return e;
}
function Dh(t) {
  var e = cu(t);
  if (t.equals(e) || (at?.is_fork || (t.v = e), t.wv = rf()), !mo)
    if (yn !== null)
      (vi() || at?.is_fork) && yn.set(t, e);
    else {
      var n = (t.f & Nn) === 0 ? Cr : Ft;
      Kt(t, n);
    }
}
let ll = /* @__PURE__ */ new Set();
const zr = /* @__PURE__ */ new Map();
let Vh = !1;
function vr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Sh,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(t, e) {
  const n = vr(t);
  return tf(n), n;
}
// @__NO_SIDE_EFFECTS__
function Hh(t, e = !1, n = !0) {
  const r = vr(t);
  return e || (r.equals = Eh), Fo && n && vt !== null && vt.l !== null && (vt.l.s ??= []).push(r), r;
}
function K(t, e, n = !1) {
  tt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fn || (tt.f & Sc) !== 0) && Ko() && (tt.f & (Lt | xr | iu | Sc)) !== 0 && !fr?.includes(t) && o1();
  let r = n ? kt(e) : e;
  return zo(t, r);
}
function zo(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    mo ? zr.set(t, e) : zr.set(t, n), t.v = e;
    var r = En.ensure();
    r.capture(t, n), (t.f & Lt) !== 0 && ((t.f & sn) !== 0 && cu(
      /** @type {Derived} */
      t
    ), Kt(t, (t.f & Nn) !== 0 ? Ft : Cr)), t.wv = rf(), Ih(t, sn), Ko() && Ue !== null && (Ue.f & Ft) !== 0 && (Ue.f & (kr | jr)) === 0 && (vn === null ? z1([t]) : vn.push(t)), !r.is_fork && ll.size > 0 && !Vh && S1();
  }
  return e;
}
function S1() {
  Vh = !1;
  var t = Mr;
  As(!0);
  const e = Array.from(ll);
  try {
    for (const n of e)
      (n.f & Ft) !== 0 && Kt(n, Cr), zi(n) && yi(n);
  } finally {
    As(t);
  }
  ll.clear();
}
function Ec(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return K(t, n), r;
}
function jn(t) {
  K(t, t.v + 1);
}
function Ih(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ko(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ue)) {
        var l = (a & sn) === 0;
        if (l && Kt(s, e), (a & Lt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          yn?.delete(u), (a & gi) === 0 && (a & Nn && (s.f |= gi), Ih(u, Cr));
        } else l && ((a & xr) !== 0 && or !== null && or.add(
          /** @type {Effect} */
          s
        ), so(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function kt(t) {
  if (typeof t != "object" || t === null || Wn in t)
    return t;
  const e = fa(t);
  if (e !== bh && e !== Zm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ha(t), o = /* @__PURE__ */ we(0), i = pr, s = (a) => {
    if (pr === i)
      return a();
    var l = tt, u = pr;
    nn(null), Tc(i);
    var d = a();
    return nn(l), Tc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && n1();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ we(u.value);
          return n.set(l, h), h;
        }) : K(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ we(Ht));
            n.set(l, d), jn(o);
          }
        } else
          K(u, Ht), jn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Wn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || dr(a, l)?.writable) && (d = s(() => {
          var v = kt(h ? a[l] : Ht), m = /* @__PURE__ */ we(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === Ht ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== Ht)
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
        if (l === Wn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ht || Reflect.has(a, l);
        if (u !== void 0 || Ue !== null && (!d || dr(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? kt(a[l]) : Ht, v = /* @__PURE__ */ we(f);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === Ht)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? K(m, Ht) : v in a && (m = s(() => /* @__PURE__ */ we(Ht)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || dr(a, l)?.writable) && (h = s(() => /* @__PURE__ */ we(void 0)), K(h, kt(u)), n.set(l, h));
        else {
          f = h.v !== Ht;
          var y = s(() => kt(u));
          K(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && K(b, x + 1);
          }
          jn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ht;
        });
        for (var [u, d] of n)
          d.v !== Ht && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        r1();
      }
    }
  );
}
function Pc(t) {
  try {
    if (t !== null && typeof t == "object" && Wn in t)
      return t[Wn];
  } catch {
  }
  return t;
}
function _1(t, e) {
  return Object.is(Pc(t), Pc(e));
}
var en, Lh, Rh, jh;
function ul() {
  if (en === void 0) {
    en = window, Lh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Rh = dr(e, "firstChild").get, jh = dr(e, "nextSibling").get, $c(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), $c(n) && (n.__t = void 0);
  }
}
function Gt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pt(t) {
  return Rh.call(t);
}
// @__NO_SIDE_EFFECTS__
function fn(t) {
  return jh.call(t);
}
function Y(t, e) {
  if (!Ee)
    return /* @__PURE__ */ Pt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(Ie)
  );
  if (n === null)
    n = Ie.appendChild(Gt());
  else if (e && n.nodeType !== ma) {
    var r = Gt();
    return n?.before(r), bt(r), r;
  }
  return bt(n), n;
}
function Q(t, e = !1) {
  if (!Ee) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Pt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fn(n) : n;
  }
  if (e && Ie?.nodeType !== ma) {
    var r = Gt();
    return Ie?.before(r), bt(r), r;
  }
  return Ie;
}
function R(t, e = 1, n = !1) {
  let r = Ee ? Ie : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(r);
  if (!Ee)
    return r;
  if (n && r?.nodeType !== ma) {
    var i = Gt();
    return r === null ? o?.after(i) : r.before(i), bt(i), i;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function du(t) {
  t.textContent = "";
}
function Bh() {
  return !1;
}
function E1(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Br(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function P1(t) {
  Ee && /* @__PURE__ */ Pt(t) !== null && du(t);
}
let Oc = !1;
function Fh() {
  Oc || (Oc = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ba(t) {
  var e = tt, n = Ue;
  nn(null), bn(null);
  try {
    return t();
  } finally {
    nn(e), bn(n);
  }
}
function Kh(t, e, n, r = n) {
  t.addEventListener(e, () => ba(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), Fh();
}
function Zh(t) {
  Ue === null && (tt === null && Jm(), Gm()), mo && Um();
}
function O1(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function xn(t, e, n) {
  var r = Ue;
  r !== null && (r.f & dn) !== 0 && (t |= dn);
  var o = {
    ctx: vt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | sn | Nn,
    first: null,
    fn: e,
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
      yi(o), o.f |= va;
    } catch (a) {
      throw Mt(o), a;
    }
  else e !== null && so(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & fo) === 0 && (i = i.first, (t & xr) !== 0 && (t & gr) !== 0 && i !== null && (i.f |= gr)), i !== null && (i.parent = r, r !== null && O1(i, r), tt !== null && (tt.f & Lt) !== 0 && (t & jr) === 0)) {
    var s = (
      /** @type {Derived} */
      tt
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function vi() {
  return tt !== null && !Fn;
}
function xa(t) {
  const e = xn(pa, null, !1);
  return Kt(e, Ft), e.teardown = t, e;
}
function Be(t) {
  Zh();
  var e = (
    /** @type {Effect} */
    Ue.f
  ), n = !tt && (e & kr) !== 0 && (e & va) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      vt
    );
    (r.e ??= []).push(t);
  } else
    return Wh(t);
}
function Wh(t) {
  return xn(ru | Ch, t, !1);
}
function tn(t) {
  return Zh(), xn(pa | Ch, t, !0);
}
function go(t) {
  En.ensure();
  const e = xn(jr | fo, t, !0);
  return () => {
    Mt(e);
  };
}
function N1(t) {
  En.ensure();
  const e = xn(jr | fo, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Eo(e, () => {
      Mt(e), r(void 0);
    }) : (Mt(e), r(void 0));
  });
}
function Zo(t) {
  return xn(ru, t, !1);
}
function T1(t) {
  return xn(iu | fo, t, !0);
}
function vo(t, e = 0) {
  return xn(pa | e, t, !0);
}
function Me(t, e = [], n = [], r = []) {
  zh(r, e, n, (o) => {
    xn(pa, () => t(...o.map(c)), !0);
  });
}
function Fr(t, e = 0) {
  var n = xn(xr | e, t, !0);
  return n;
}
function Xh(t, e = 0) {
  var n = xn(kh | e, t, !0);
  return n;
}
function un(t) {
  return xn(kr | fo, t, !0);
}
function qh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = mo, r = tt;
    Nc(!0), nn(null);
    try {
      e.call(null);
    } finally {
      Nc(n), nn(r);
    }
  }
}
function Yh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ba(() => {
      o.abort(So);
    });
    var r = n.next;
    (n.f & jr) !== 0 ? n.parent = null : Mt(n, e), n = r;
  }
}
function A1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & kr) === 0 && Mt(e), e = n;
  }
}
function Mt(t, e = !0) {
  var n = !1;
  (e || (t.f & ou) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Uh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Yh(t, e && !n), zs(t, 0), Kt(t, hr);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  qh(t);
  var o = t.parent;
  o !== null && o.first !== null && Gh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Uh(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(t)
    );
    t.remove(), t = n;
  }
}
function Gh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Eo(t, e, n = !0) {
  var r = [];
  hu(t, r, !0), Jh(r, () => {
    n && Mt(t), e && e();
  });
}
function Jh(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function hu(t, e, n) {
  if ((t.f & dn) === 0) {
    if (t.f ^= dn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & gr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & kr) !== 0 && (t.f & xr) !== 0;
      hu(r, e, i ? n : !1), r = o;
    }
  }
}
function fu(t) {
  Qh(t, !0);
}
function Qh(t, e) {
  if ((t.f & dn) !== 0) {
    t.f ^= dn, (t.f & Ft) === 0 && (Kt(t, sn), so(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & gr) !== 0 || (n.f & kr) !== 0;
      Qh(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function ef(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n)
    );
    e.append(n), n = o;
  }
}
let Mr = !1;
function As(t) {
  Mr = t;
}
let mo = !1;
function Nc(t) {
  mo = t;
}
let tt = null, Fn = !1;
function nn(t) {
  tt = t;
}
let Ue = null;
function bn(t) {
  Ue = t;
}
let fr = null;
function tf(t) {
  tt !== null && (fr === null ? fr = [t] : fr.push(t));
}
let qt = null, ln = 0, vn = null;
function z1(t) {
  vn = t;
}
let nf = 1, mi = 0, pr = mi;
function Tc(t) {
  pr = t;
}
function rf() {
  return ++nf;
}
function zi(t) {
  var e = t.f;
  if ((e & sn) !== 0)
    return !0;
  if (e & Lt && (t.f &= -32769), (e & Cr) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (zi(
          /** @type {Derived} */
          i
        ) && Dh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & Nn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    yn === null && Kt(t, Ft);
  }
  return !1;
}
function of(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !fr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Lt) !== 0 ? of(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Kt(i, sn) : (i.f & Ft) !== 0 && Kt(i, Cr), so(
        /** @type {Effect} */
        i
      ));
    }
}
function sf(t) {
  var e = qt, n = ln, r = vn, o = tt, i = fr, s = vt, a = Fn, l = pr, u = t.f;
  qt = /** @type {null | Value[]} */
  null, ln = 0, vn = null, tt = (u & (kr | jr)) === 0 ? t : null, fr = null, To(t.ctx), Fn = !1, pr = ++mi, t.ac !== null && (ba(() => {
    t.ac.abort(So);
  }), t.ac = null);
  try {
    t.f |= sl;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), f = t.deps;
    if (qt !== null) {
      var v;
      if (zs(t, ln), f !== null && ln > 0)
        for (f.length = ln + qt.length, v = 0; v < qt.length; v++)
          f[ln + v] = qt[v];
      else
        t.deps = f = qt;
      if (Mr && vi() && (t.f & Nn) !== 0)
        for (v = ln; v < f.length; v++)
          (f[v].reactions ??= []).push(t);
    } else f !== null && ln < f.length && (zs(t, ln), f.length = ln);
    if (Ko() && vn !== null && !Fn && f !== null && (t.f & (Lt | Cr | sn)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      vn.length; v++)
        of(
          vn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (mi++, vn !== null && (r === null ? r = vn : r.push(.../** @type {Source[]} */
    vn))), (t.f & Ar) !== 0 && (t.f ^= Ar), h;
  } catch (m) {
    return Oh(m);
  } finally {
    t.f ^= sl, qt = e, ln = n, vn = r, tt = o, fr = i, To(s), Fn = a, pr = l;
  }
}
function M1(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Km.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & Lt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qt === null || !qt.includes(e)) && (Kt(e, Cr), (e.f & Nn) !== 0 && (e.f ^= Nn, e.f &= -32769), Mh(
    /** @type {Derived} **/
    e
  ), zs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function zs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      M1(t, n[r]);
}
function yi(t) {
  var e = t.f;
  if ((e & hr) === 0) {
    Kt(t, Ft);
    var n = Ue, r = Mr;
    Ue = t, Mr = !0;
    try {
      (e & (xr | kh)) !== 0 ? A1(t) : Yh(t), qh(t);
      var o = sf(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = nf;
      var i;
      Fm && l1 && (t.f & sn) !== 0 && t.deps;
    } finally {
      Mr = r, Ue = n;
    }
  }
}
async function af() {
  await Promise.resolve(), p();
}
function c(t) {
  var e = t.f, n = (e & Lt) !== 0;
  if (tt !== null && !Fn) {
    var r = Ue !== null && (Ue.f & hr) !== 0;
    if (!r && !fr?.includes(t)) {
      var o = tt.deps;
      if ((tt.f & sl) !== 0)
        t.rv < mi && (t.rv = mi, qt === null && o !== null && o[ln] === t ? ln++ : qt === null ? qt = [t] : qt.includes(t) || qt.push(t));
      else {
        (tt.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [tt] : i.includes(tt) || i.push(tt);
      }
    }
  }
  if (mo) {
    if (zr.has(t))
      return zr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Ft) === 0 && s.reactions !== null || uf(s)) && (a = cu(s)), zr.set(s, a), a;
    }
  } else n && (!yn?.has(t) || at?.is_fork && !vi()) && (s = /** @type {Derived} */
  t, zi(s) && Dh(s), Mr && vi() && (s.f & Nn) === 0 && lf(s));
  if (yn?.has(t))
    return yn.get(t);
  if ((t.f & Ar) !== 0)
    throw t.v;
  return t.v;
}
function lf(t) {
  if (t.deps !== null) {
    t.f ^= Nn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Lt) !== 0 && (e.f & Nn) === 0 && lf(
        /** @type {Derived} */
        e
      );
  }
}
function uf(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (zr.has(e) || (e.f & Lt) !== 0 && uf(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function yt(t) {
  var e = Fn;
  try {
    return Fn = !0, t();
  } finally {
    Fn = e;
  }
}
const D1 = -7169;
function Kt(t, e) {
  t.f = t.f & D1 | e;
}
function V1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function pu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Wn in t)
      cl(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Wn in n && cl(n);
      }
  }
}
function cl(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        cl(t[r], e);
      } catch {
      }
    const n = fa(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wh(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
const cf = /* @__PURE__ */ new Set(), dl = /* @__PURE__ */ new Set();
function gu(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || oi.call(e, i), !i.cancelBubble)
      return ba(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Br(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function Ct(t, e, n, r = {}) {
  var o = gu(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function Ms(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = gu(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && xa(() => {
    e.removeEventListener(t, s, i);
  });
}
function yo(t) {
  for (var e = 0; e < t.length; e++)
    cf.add(t[e]);
  for (var n of dl)
    n(t);
}
let Ac = null;
function oi(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  Ac = t;
  var s = 0, a = Ac === t && t.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = o.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || t.target, i !== e) {
    Os(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = tt, h = Ue;
    nn(null), bn(null);
    try {
      for (var f, v = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && y.call(i, t);
        } catch (w) {
          f ? v.push(w) : f = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, nn(d), bn(h);
    }
  }
}
function vu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function on(t, e) {
  var n = (
    /** @type {Effect} */
    Ue
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function re(t, e) {
  var n = (e & vh) !== 0, r = (e & Rm) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ee)
      return on(Ie, null), Ie;
    o === void 0 && (o = vu(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ Pt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Lh ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      on(a, l);
    } else
      on(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function H1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & vh) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ee)
      return on(Ie, null), Ie;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        vu(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Pt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Pt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Pt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Pt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      on(d, h);
    } else
      on(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  return /* @__PURE__ */ H1(t, e, "svg");
}
function He(t = "") {
  if (!Ee) {
    var e = Gt(t + "");
    return on(e, e), e;
  }
  var n = Ie;
  return n.nodeType !== ma && (n.before(n = Gt()), bt(n)), on(n, n), n;
}
function pe() {
  if (Ee)
    return on(Ie, null), Ie;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Gt();
  return t.append(e, n), on(e, n), t;
}
function z(t, e) {
  if (Ee) {
    var n = (
      /** @type {Effect} */
      Ue
    );
    ((n.f & va) === 0 || n.nodes_end === null) && (n.nodes_end = Ie), Tn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Mi() {
  if (Ee && Ie && Ie.nodeType === $r && Ie.textContent?.startsWith("$")) {
    const t = Ie.textContent.substring(1);
    return Tn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function I1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const L1 = [
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
function R1(t) {
  return L1.includes(t);
}
const j1 = {
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
function B1(t) {
  return t = t.toLowerCase(), j1[t] ?? t;
}
const F1 = ["touchstart", "touchmove"];
function K1(t) {
  return F1.includes(t);
}
const Z1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function W1(t) {
  return Z1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function pt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function mu(t, e) {
  return df(t, e);
}
function X1(t, e) {
  ul(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ee, o = Ie;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(n)
    ); i && (i.nodeType !== $r || /** @type {Comment} */
    i.data !== mh); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(i);
    if (!i)
      throw oo;
    Yt(!0), bt(
      /** @type {Comment} */
      i
    );
    const s = df(t, { ...e, anchor: i });
    return Yt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== oo && console.warn("Failed to hydrate: ", s), e.recover === !1 && e1(), ul(), du(n), Yt(!1), mu(t, e);
  } finally {
    Yt(r), bt(o);
  }
}
const ko = /* @__PURE__ */ new Map();
function df(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ul();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!a.has(v)) {
        a.add(v);
        var m = K1(v);
        e.addEventListener(v, oi, { passive: m });
        var y = ko.get(v);
        y === void 0 ? (document.addEventListener(v, oi, { passive: m }), ko.set(v, 1)) : ko.set(v, y + 1);
      }
    }
  };
  l(nu(cf)), dl.add(l);
  var u = void 0, d = N1(() => {
    var h = n ?? e.appendChild(Gt());
    return m1(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          le({});
          var v = (
            /** @type {ComponentContext} */
            vt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Ee && on(
          /** @type {TemplateNode} */
          f,
          null
        ), u = t(f, r) || {}, Ee && (Ue.nodes_end = Ie, Ie === null || Ie.nodeType !== $r || /** @type {Comment} */
        Ie.data !== tu))
          throw Ti(), oo;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        e.removeEventListener(f, oi);
        var v = (
          /** @type {number} */
          ko.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, oi), ko.delete(f)) : ko.set(f, v);
      }
      dl.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return hl.set(u, d), u;
}
let hl = /* @__PURE__ */ new WeakMap();
function hf(t, e) {
  const n = hl.get(t);
  return n ? (hl.delete(t), n(e)) : Promise.resolve();
}
class Di {
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
  #o = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#o = n;
  }
  #i = () => {
    var e = (
      /** @type {Batch} */
      at
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        fu(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (Mt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            ef(s, l), l.append(Gt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            Mt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), Eo(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #a = (e) => {
    this.#e.delete(e);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (Mt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      at
    ), o = Bh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      un(() => n(this.anchor))
    ), this.#e.set(r, e), o || (Ee && (this.anchor = Ie), this.#i());
  }
}
function ze(t, e, ...n) {
  var r = new Di(t);
  Fr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, gr);
}
function Dn(t) {
  vt === null && au(), Fo && vt.l !== null ? q1(vt).m.push(t) : Be(() => {
    const e = yt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Vi(t) {
  vt === null && au(), Dn(() => () => yt(t));
}
function q1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function Y1() {
  return Symbol(yh);
}
function ae(t, e, n = !1) {
  Ee && Tn();
  var r = new Di(t), o = n ? gr : 0;
  function i(s, a) {
    if (Ee) {
      const u = $h(t) === da;
      if (s === u) {
        var l = Ns();
        bt(l), r.anchor = l, Yt(!1), r.ensure(s, a), Yt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Fr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function U1(t, e, n) {
  Ee && Tn();
  var r = new Di(t), o = !Ko();
  Fr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function G1(t, e) {
  Ee && bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(t)
  ), vo(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function ka(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Me(() => {
    var a = (
      /** @type {Effect} */
      Ue
    );
    if (s === (s = e() ?? "")) {
      Ee && Tn();
      return;
    }
    if (a.nodes_start !== null && (Uh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ee) {
        Ie.data;
        for (var l = Tn(), u = l; l !== null && (l.nodeType !== $r || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ fn(l);
        if (l === null)
          throw Ti(), oo;
        on(Ie, u), i = bt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = vu(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ Pt(h)), on(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Pt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Pt(h)
          );
      else
        i.before(h);
    }
  });
}
function zt(t, e, n) {
  Ee && Tn();
  var r = new Di(t);
  Fr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, gr);
}
function ff(t, e, n, r, o, i) {
  let s = Ee;
  Ee && Tn();
  var a = null;
  Ee && Ie.nodeType === qm && (a = /** @type {Element} */
  Ie, Tn());
  var l = (
    /** @type {TemplateNode} */
    Ee ? Ie : t
  ), u = new Di(l, !1);
  Fr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? Bm : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = Ee ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), on(a, a), r) {
          Ee && W1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Ee ? /* @__PURE__ */ Pt(a) : a.appendChild(Gt())
          );
          Ee && (v === null ? Yt(!1) : bt(v)), r(a, v);
        }
        Ue.nodes_end = a, f.before(a);
      }
      Ee && bt(f);
    }), () => {
    };
  }, gr), xa(() => {
  }), s && (Yt(!0), bt(l));
}
function J1(t, e) {
  let n = null, r = Ee;
  var o;
  if (Ee) {
    n = Ie;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(document.head)
    ); i !== null && (i.nodeType !== $r || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(i);
    if (i === null)
      Yt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fn(i)
      );
      i.remove(), bt(s);
    }
  }
  Ee || (o = document.head.appendChild(Gt()));
  try {
    Fr(() => e(o), ou);
  } finally {
    r && (Yt(!0), bt(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function it(t, e) {
  Zo(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const o = document.createElement("style");
      o.id = e.hash, o.textContent = e.code, r.appendChild(o);
    }
  });
}
function Bt(t, e, n) {
  Zo(() => {
    var r = yt(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      vo(() => {
        var s = n();
        pu(s), o && _h(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Q1(t, e) {
  var n = void 0, r;
  Xh(() => {
    n !== (n = e()) && (r && (Mt(r), r = null), n && (r = un(() => {
      Zo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function pf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = pf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function hi() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = pf(t)) && (r && (r += " "), r += e);
  return r;
}
function Sr(t) {
  return typeof t == "object" ? hi(t) : t ?? "";
}
const zc = [...` 	
\r\f \v\uFEFF`];
function e0(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || zc.includes(r[s - 1])) && (a === r.length || zc.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Mc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function La(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function t0(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(La)), o && l.push(...Object.keys(o).map(La));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var f = t[h];
        if (a ? f === "/" && t[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && t[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var v = La(t.substring(u, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var m = t.substring(u, h).trim();
                n += " " + m + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Mc(r)), o && (n += Mc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function an(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ee || s !== n || s === void 0) {
    var a = e0(n, r, i);
    (!Ee || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function Ra(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Rt(t, e, n, r) {
  var o = t.__style;
  if (Ee || o !== e) {
    var i = t0(e, r);
    (!Ee || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (Ra(t, n?.[0], r[0]), Ra(t, n?.[1], r[1], "important")) : Ra(t, n, r));
  return r;
}
function fl(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ha(e))
      return s1();
    for (var r of t.options)
      r.selected = e.includes(Dc(r));
    return;
  }
  for (r of t.options) {
    var o = Dc(r);
    if (_1(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function n0(t) {
  var e = new MutationObserver(() => {
    fl(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), xa(() => {
    e.disconnect();
  });
}
function Dc(t) {
  return "__value" in t ? t.__value : t.value;
}
const Nr = Symbol("class"), Bn = Symbol("style"), gf = Symbol("is custom element"), vf = Symbol("is html");
function Dr(t) {
  if (Ee) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Te(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Te(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Br(n), Fh();
  }
}
function ms(t, e) {
  var n = Ca(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function ja(t, e) {
  var n = Ca(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function r0(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Te(t, e, n, r) {
  var o = Ca(t);
  Ee && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[Xm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && mf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function o0(t, e, n, r, o = !1, i = !1) {
  if (Ee && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Dr(s);
  }
  var l = Ca(t), u = l[gf], d = !l[vf];
  let h = Ee && u;
  h && Yt(!1);
  var f = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Sr(n.class) : (r || n[Nr]) && (n.class = null), n[Bn] && (n.style ??= null);
  var y = mf(t);
  for (const O in n) {
    let V = n[O];
    if (v && O === "value" && V == null) {
      t.value = t.__value = "", f[O] = V;
      continue;
    }
    if (O === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      an(t, w, V, r, e?.[Nr], n[Nr]), f[O] = V, f[Nr] = n[Nr];
      continue;
    }
    if (O === "style") {
      Rt(t, V, e?.[Bn], n[Bn]), f[O] = V, f[Bn] = n[Bn];
      continue;
    }
    var b = f[O];
    if (!(V === b && !(V === void 0 && t.hasAttribute(O)))) {
      f[O] = V;
      var x = O[0] + O[1];
      if (x !== "$$")
        if (x === "on") {
          const H = {}, L = "$$" + O;
          let M = O.slice(2);
          var E = R1(M);
          if (I1(M) && (M = M.slice(0, -7), H.capture = !0), !E && b) {
            if (V != null) continue;
            t.removeEventListener(M, f[L], H), f[L] = null;
          }
          if (V != null)
            if (E)
              t[`__${M}`] = V, yo([M]);
            else {
              let D = function(_) {
                f[O].call(this, _);
              };
              f[L] = gu(M, t, D, H);
            }
          else E && (t[`__${M}`] = void 0);
        } else if (O === "style")
          Te(t, O, V);
        else if (O === "autofocus")
          E1(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (O === "__value" || O === "value" && V != null))
          t.value = t.__value = V;
        else if (O === "selected" && v)
          r0(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = O;
          d || (C = B1(C));
          var k = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !k)
            if (l[O] = null, C === "value" || C === "checked") {
              let H = (
                /** @type {HTMLInputElement} */
                t
              );
              const L = e === void 0;
              if (C === "value") {
                let M = H.defaultValue;
                H.removeAttribute(C), H.defaultValue = M, H.value = H.__value = L ? M : null;
              } else {
                let M = H.defaultChecked;
                H.removeAttribute(C), H.defaultChecked = M, H.checked = L ? M : !1;
              }
            } else
              t.removeAttribute(O);
          else k || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = Ht)) : typeof V != "function" && Te(t, C, V);
        }
    }
  }
  return h && Yt(!0), f;
}
function ot(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  zh(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", f = !1;
    if (Xh(() => {
      var m = e(...l.map(c)), y = o0(
        t,
        u,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && fl(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || Mt(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === yh && (!u || w !== u[b]) && (d[b] && Mt(d[b]), d[b] = un(() => Q1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Zo(() => {
        fl(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), n0(v);
      });
    }
    f = !0;
  });
}
function Ca(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [gf]: t.nodeName.includes("-"),
      [vf]: t.namespaceURI === jm
    }
  );
}
var Vc = /* @__PURE__ */ new Map();
function mf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Vc.get(e);
  if (n) return n;
  Vc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = wh(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = fa(o);
  }
  return n;
}
function Ds(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Kh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Ba(t) ? Fa(i) : i, n(i), at !== null && r.add(at), await af(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ee && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  yt(e) == null && t.value) && (n(Ba(t) ? Fa(t.value) : t.value), at !== null && r.add(at)), vo(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        vs ?? at
      );
      if (r.has(i))
        return;
    }
    Ba(t) && o === Fa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function Ba(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Fa(t) {
  return t === "" ? null : +t;
}
function i0(t, e, n = e) {
  Kh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ee && t.files && n(t.files), vo(() => {
    t.files = e();
  });
}
class yu {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    this.#n = e;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(e, n) {
    var r = this.#e.get(e) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(e, r), this.#r().observe(e, this.#n), () => {
      var o = this.#e.get(e);
      o.delete(n), o.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (e) => {
        for (var n of e) {
          yu.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var s0 = /* @__PURE__ */ new yu({
  box: "border-box"
});
function Hc(t, e, n) {
  var r = s0.observe(t, () => n(t[e]));
  Zo(() => (yt(() => n(t[e])), r));
}
function Ic(t, e) {
  return t === e || t?.[Wn] === e;
}
function jt(t = {}, e, n, r) {
  return Zo(() => {
    var o, i;
    return vo(() => {
      o = i, i = [], yt(() => {
        t !== n(...i) && (e(t, ...i), o && Ic(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Br(() => {
        i && Ic(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function wu(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    vt
  ), n = e.l.u;
  if (!n) return;
  let r = () => pu(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ai(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && tn(() => {
    Lc(e, r), il(n.b);
  }), Be(() => {
    const o = yt(() => n.m.map(Wm));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Be(() => {
    Lc(e, r), il(n.a);
  });
}
function Lc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let es = !1;
function a0(t) {
  var e = es;
  try {
    return es = !1, [t(), es];
  } finally {
    es = e;
  }
}
const l0 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function Le(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    l0
  );
}
const u0 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Ue;
      try {
        bn(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          gh
        );
      } finally {
        bn(r);
      }
    }
    return t.special[e](n), Ec(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  deleteProperty(t, e) {
    return t.exclude.includes(e) || (t.exclude.push(e), Ec(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Rc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: vr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ue
      )
    },
    u0
  );
}
const c0 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Jo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Jo(o) && (o = o());
      const i = dr(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Jo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = dr(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Wn || e === su) return !1;
    for (let n of t.props)
      if (Jo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Jo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ke(...t) {
  return new Proxy({ props: t }, c0);
}
function g(t, e, n, r) {
  var o = !Fo || (n & Hm) !== 0, i = (n & Im) !== 0, s = (n & Lm) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? yt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = Wn in t || su in t;
    d = dr(t, e)?.set ?? (h && e in t ? (E) => t[e] = E : void 0);
  }
  var f, v = !1;
  i ? [f, v] = a0(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (o && t1(), d(f)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? u() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & gh) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(E, C) {
        return arguments.length > 0 ? ((!o || !C || y || v) && d(C ? m() : E), E) : m();
      }
    );
  }
  var w = !1, b = ((n & Vm) !== 0 ? Ai : uu)(() => (w = !1, m()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Ue
  );
  return (
    /** @type {() => V} */
    function(E, C) {
      if (arguments.length > 0) {
        const k = C ? c(b) : o && i ? kt(E) : E;
        return K(b, k), w = !0, a !== void 0 && (a = k), E;
      }
      return mo && w || (x.f & hr) !== 0 ? b.v : c(b);
    }
  );
}
function d0(t) {
  return new h0(t);
}
class h0 {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Hh(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === su ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? X1 : mu)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && p(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Os(this, i, {
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
      hf(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#e[e] = this.#e[e] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let yf;
typeof HTMLElement == "function" && (yf = class extends HTMLElement {
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
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (o) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), z(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = f0(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ys(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = d0({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = go(() => {
        vo(() => {
          this.$$r = !0;
          for (const r of Ps(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ys(
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
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ys(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ps(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ys(t, e, n, r) {
  const o = n[t]?.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function f0(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function se(t, e, n, r, o, i) {
  let s = class extends yf {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ps(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ps(e).forEach((a) => {
    Os(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ys(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = dr(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Os(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var p0 = { value: () => {
} };
function $a() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ws(n);
}
function ws(t) {
  this._ = t;
}
function g0(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ws.prototype = $a.prototype = {
  constructor: ws,
  on: function(t, e) {
    var n = this._, r = g0(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = v0(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = jc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = jc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ws(t);
  },
  call: function(t, e) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (i = this._[t], r = 0, o = i.length; r < o; ++r) i[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(e, n);
  }
};
function v0(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function jc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = p0, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var pl = "http://www.w3.org/1999/xhtml";
const Bc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: pl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Sa(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Bc.hasOwnProperty(e) ? { space: Bc[e], local: t } : t;
}
function m0(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === pl && e.documentElement.namespaceURI === pl ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function y0(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function wf(t) {
  var e = Sa(t);
  return (e.local ? y0 : m0)(e);
}
function w0() {
}
function bu(t) {
  return t == null ? w0 : function() {
    return this.querySelector(t);
  };
}
function b0(t) {
  typeof t != "function" && (t = bu(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new pn(r, this._parents);
}
function x0(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function k0() {
  return [];
}
function bf(t) {
  return t == null ? k0 : function() {
    return this.querySelectorAll(t);
  };
}
function C0(t) {
  return function() {
    return x0(t.apply(this, arguments));
  };
}
function $0(t) {
  typeof t == "function" ? t = C0(t) : t = bf(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new pn(r, o);
}
function xf(t) {
  return function() {
    return this.matches(t);
  };
}
function kf(t) {
  return function(e) {
    return e.matches(t);
  };
}
var S0 = Array.prototype.find;
function _0(t) {
  return function() {
    return S0.call(this.children, t);
  };
}
function E0() {
  return this.firstElementChild;
}
function P0(t) {
  return this.select(t == null ? E0 : _0(typeof t == "function" ? t : kf(t)));
}
var O0 = Array.prototype.filter;
function N0() {
  return Array.from(this.children);
}
function T0(t) {
  return function() {
    return O0.call(this.children, t);
  };
}
function A0(t) {
  return this.selectAll(t == null ? N0 : T0(typeof t == "function" ? t : kf(t)));
}
function z0(t) {
  typeof t != "function" && (t = xf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new pn(r, this._parents);
}
function Cf(t) {
  return new Array(t.length);
}
function M0() {
  return new pn(this._enter || this._groups.map(Cf), this._parents);
}
function Vs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Vs.prototype = {
  constructor: Vs,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function D0(t) {
  return function() {
    return t;
  };
}
function V0(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Vs(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function H0(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, f = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (f[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new Vs(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(f[a]) === l && (o[a] = l);
}
function I0(t) {
  return t.__data__;
}
function L0(t, e) {
  if (!arguments.length) return Array.from(this, I0);
  var n = e ? H0 : V0, r = this._parents, o = this._groups;
  typeof t != "function" && (t = D0(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, v = R0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(f);
    n(d, h, y, w, b, v, e);
    for (var x = 0, E = 0, C, k; x < m; ++x)
      if (C = y[x]) {
        for (x >= E && (E = x + 1); !(k = w[E]) && ++E < m; ) ;
        C._next = k || null;
      }
  }
  return s = new pn(s, r), s._enter = a, s._exit = l, s;
}
function R0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function j0() {
  return new pn(this._exit || this._groups.map(Cf), this._parents);
}
function B0(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function F0(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, f = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (f[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new pn(a, this._parents);
}
function K0() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Z0(t) {
  t || (t = W0);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new pn(o, this._parents).order();
}
function W0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function X0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function q0() {
  return Array.from(this);
}
function Y0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function U0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function G0() {
  return !this.node();
}
function J0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function Q0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ey(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ty(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ny(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ry(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function oy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function iy(t, e) {
  var n = Sa(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ey : Q0 : typeof e == "function" ? n.local ? oy : ry : n.local ? ny : ty)(n, e));
}
function $f(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function sy(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ay(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ly(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function uy(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? sy : typeof e == "function" ? ly : ay)(t, e, n ?? "")) : Mo(this.node(), t);
}
function Mo(t, e) {
  return t.style.getPropertyValue(e) || $f(t).getComputedStyle(t, null).getPropertyValue(e);
}
function cy(t) {
  return function() {
    delete this[t];
  };
}
function dy(t, e) {
  return function() {
    this[t] = e;
  };
}
function hy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function fy(t, e) {
  return arguments.length > 1 ? this.each((e == null ? cy : typeof e == "function" ? hy : dy)(t, e)) : this.node()[t];
}
function Sf(t) {
  return t.trim().split(/^|\s+/);
}
function xu(t) {
  return t.classList || new _f(t);
}
function _f(t) {
  this._node = t, this._names = Sf(t.getAttribute("class") || "");
}
_f.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ef(t, e) {
  for (var n = xu(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Pf(t, e) {
  for (var n = xu(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function py(t) {
  return function() {
    Ef(this, t);
  };
}
function gy(t) {
  return function() {
    Pf(this, t);
  };
}
function vy(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ef : Pf)(this, t);
  };
}
function my(t, e) {
  var n = Sf(t + "");
  if (arguments.length < 2) {
    for (var r = xu(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? vy : e ? py : gy)(n, e));
}
function yy() {
  this.textContent = "";
}
function wy(t) {
  return function() {
    this.textContent = t;
  };
}
function by(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function xy(t) {
  return arguments.length ? this.each(t == null ? yy : (typeof t == "function" ? by : wy)(t)) : this.node().textContent;
}
function ky() {
  this.innerHTML = "";
}
function Cy(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $y(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Sy(t) {
  return arguments.length ? this.each(t == null ? ky : (typeof t == "function" ? $y : Cy)(t)) : this.node().innerHTML;
}
function _y() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ey() {
  return this.each(_y);
}
function Py() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Oy() {
  return this.each(Py);
}
function Ny(t) {
  var e = typeof t == "function" ? t : wf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ty() {
  return null;
}
function Ay(t, e) {
  var n = typeof t == "function" ? t : wf(t), r = e == null ? Ty : typeof e == "function" ? e : bu(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function zy() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function My() {
  return this.each(zy);
}
function Dy() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Vy() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Hy(t) {
  return this.select(t ? Vy : Dy);
}
function Iy(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ly(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ry(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function jy(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function By(t, e, n) {
  return function() {
    var r = this.__on, o, i = Ly(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === t.type && o.name === t.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = e;
          return;
        }
    }
    this.addEventListener(t.type, i, n), o = { type: t.type, name: t.name, value: e, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Fy(t, e, n) {
  var r = Ry(t + ""), o, i = r.length, s;
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
  for (a = e ? By : jy, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Of(t, e, n) {
  var r = $f(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Ky(t, e) {
  return function() {
    return Of(this, t, e);
  };
}
function Zy(t, e) {
  return function() {
    return Of(this, t, e.apply(this, arguments));
  };
}
function Wy(t, e) {
  return this.each((typeof e == "function" ? Zy : Ky)(t, e));
}
function* Xy() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Nf = [null];
function pn(t, e) {
  this._groups = t, this._parents = e;
}
function Hi() {
  return new pn([[document.documentElement]], Nf);
}
function qy() {
  return this;
}
pn.prototype = Hi.prototype = {
  constructor: pn,
  select: b0,
  selectAll: $0,
  selectChild: P0,
  selectChildren: A0,
  filter: z0,
  data: L0,
  enter: M0,
  exit: j0,
  join: B0,
  merge: F0,
  selection: qy,
  order: K0,
  sort: Z0,
  call: X0,
  nodes: q0,
  node: Y0,
  size: U0,
  empty: G0,
  each: J0,
  attr: iy,
  style: uy,
  property: fy,
  classed: my,
  text: xy,
  html: Sy,
  raise: Ey,
  lower: Oy,
  append: Ny,
  insert: Ay,
  remove: My,
  clone: Hy,
  datum: Iy,
  on: Fy,
  dispatch: Wy,
  [Symbol.iterator]: Xy
};
function wn(t) {
  return typeof t == "string" ? new pn([[document.querySelector(t)]], [document.documentElement]) : new pn([[t]], Nf);
}
function Yy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Sn(t, e) {
  if (t = Yy(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect();
      return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Uy = { passive: !1 }, wi = { capture: !0, passive: !1 };
function Ka(t) {
  t.stopImmediatePropagation();
}
function Po(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Tf(t) {
  var e = t.document.documentElement, n = wn(t).on("dragstart.drag", Po, wi);
  "onselectstart" in e ? n.on("selectstart.drag", Po, wi) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Af(t, e) {
  var n = t.document.documentElement, r = wn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Po, wi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ts = (t) => () => t;
function gl(t, {
  sourceEvent: e,
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
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
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
gl.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Gy(t) {
  return !t.ctrlKey && !t.button;
}
function Jy() {
  return this.parentNode;
}
function Qy(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ew() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tw() {
  var t = Gy, e = Jy, n = Qy, r = ew, o = {}, i = $a("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Uy).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, k) {
    if (!(d || !t.call(this, C, k))) {
      var O = E(this, e.call(this, C, k), C, k, "mouse");
      O && (wn(C.view).on("mousemove.drag", m, wi).on("mouseup.drag", y, wi), Tf(C.view), Ka(C), u = !1, a = C.clientX, l = C.clientY, O("start", C));
    }
  }
  function m(C) {
    if (Po(C), !u) {
      var k = C.clientX - a, O = C.clientY - l;
      u = k * k + O * O > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    wn(C.view).on("mousemove.drag mouseup.drag", null), Af(C.view, u), Po(C), o.mouse("end", C);
  }
  function w(C, k) {
    if (t.call(this, C, k)) {
      var O = C.changedTouches, V = e.call(this, C, k), H = O.length, L, M;
      for (L = 0; L < H; ++L)
        (M = E(this, V, C, k, O[L].identifier, O[L])) && (Ka(C), M("start", C, O[L]));
    }
  }
  function b(C) {
    var k = C.changedTouches, O = k.length, V, H;
    for (V = 0; V < O; ++V)
      (H = o[k[V].identifier]) && (Po(C), H("drag", C, k[V]));
  }
  function x(C) {
    var k = C.changedTouches, O = k.length, V, H;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < O; ++V)
      (H = o[k[V].identifier]) && (Ka(C), H("end", C, k[V]));
  }
  function E(C, k, O, V, H, L) {
    var M = i.copy(), D = Sn(L || O, k), _, N, $;
    if (($ = n.call(C, new gl("beforestart", {
      sourceEvent: O,
      target: f,
      identifier: H,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: M
    }), V)) != null)
      return _ = $.x - D[0] || 0, N = $.y - D[1] || 0, function P(A, j, q) {
        var G = D, T;
        switch (A) {
          case "start":
            o[H] = P, T = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            D = Sn(q || j, k), T = s;
            break;
        }
        M.call(
          A,
          C,
          new gl(A, {
            sourceEvent: j,
            subject: $,
            target: f,
            identifier: H,
            active: T,
            x: D[0] + _,
            y: D[1] + N,
            dx: D[0] - G[0],
            dy: D[1] - G[1],
            dispatch: M
          }),
          V
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : ts(!!C), f) : t;
  }, f.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : ts(C), f) : e;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : ts(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : ts(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, f) : Math.sqrt(h);
  }, f;
}
function ku(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function zf(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ii() {
}
var bi = 0.7, Hs = 1 / bi, Oo = "\\s*([+-]?\\d+)\\s*", xi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nw = /^#([0-9a-f]{3,8})$/, rw = new RegExp(`^rgb\\(${Oo},${Oo},${Oo}\\)$`), ow = new RegExp(`^rgb\\(${Xn},${Xn},${Xn}\\)$`), iw = new RegExp(`^rgba\\(${Oo},${Oo},${Oo},${xi}\\)$`), sw = new RegExp(`^rgba\\(${Xn},${Xn},${Xn},${xi}\\)$`), aw = new RegExp(`^hsl\\(${xi},${Xn},${Xn}\\)$`), lw = new RegExp(`^hsla\\(${xi},${Xn},${Xn},${xi}\\)$`), Fc = {
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
ku(Ii, lo, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Kc,
  // Deprecated! Use color.formatHex.
  formatHex: Kc,
  formatHex8: uw,
  formatHsl: cw,
  formatRgb: Zc,
  toString: Zc
});
function Kc() {
  return this.rgb().formatHex();
}
function uw() {
  return this.rgb().formatHex8();
}
function cw() {
  return Mf(this).formatHsl();
}
function Zc() {
  return this.rgb().formatRgb();
}
function lo(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = nw.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Wc(e) : n === 3 ? new rn(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ns(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ns(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rw.exec(t)) ? new rn(e[1], e[2], e[3], 1) : (e = ow.exec(t)) ? new rn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = iw.exec(t)) ? ns(e[1], e[2], e[3], e[4]) : (e = sw.exec(t)) ? ns(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = aw.exec(t)) ? Yc(e[1], e[2] / 100, e[3] / 100, 1) : (e = lw.exec(t)) ? Yc(e[1], e[2] / 100, e[3] / 100, e[4]) : Fc.hasOwnProperty(t) ? Wc(Fc[t]) : t === "transparent" ? new rn(NaN, NaN, NaN, 0) : null;
}
function Wc(t) {
  return new rn(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ns(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new rn(t, e, n, r);
}
function dw(t) {
  return t instanceof Ii || (t = lo(t)), t ? (t = t.rgb(), new rn(t.r, t.g, t.b, t.opacity)) : new rn();
}
function vl(t, e, n, r) {
  return arguments.length === 1 ? dw(t) : new rn(t, e, n, r ?? 1);
}
function rn(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ku(rn, vl, zf(Ii, {
  brighter(t) {
    return t = t == null ? Hs : Math.pow(Hs, t), new rn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? bi : Math.pow(bi, t), new rn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rn(no(this.r), no(this.g), no(this.b), Is(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xc,
  // Deprecated! Use color.formatHex.
  formatHex: Xc,
  formatHex8: hw,
  formatRgb: qc,
  toString: qc
}));
function Xc() {
  return `#${Jr(this.r)}${Jr(this.g)}${Jr(this.b)}`;
}
function hw() {
  return `#${Jr(this.r)}${Jr(this.g)}${Jr(this.b)}${Jr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qc() {
  const t = Is(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${no(this.r)}, ${no(this.g)}, ${no(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Is(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function no(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Jr(t) {
  return t = no(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Yc(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new _n(t, e, n, r);
}
function Mf(t) {
  if (t instanceof _n) return new _n(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ii || (t = lo(t)), !t) return new _n();
  if (t instanceof _n) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new _n(s, a, l, t.opacity);
}
function fw(t, e, n, r) {
  return arguments.length === 1 ? Mf(t) : new _n(t, e, n, r ?? 1);
}
function _n(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ku(_n, fw, zf(Ii, {
  brighter(t) {
    return t = t == null ? Hs : Math.pow(Hs, t), new _n(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? bi : Math.pow(bi, t), new _n(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new rn(
      Za(t >= 240 ? t - 240 : t + 120, o, r),
      Za(t, o, r),
      Za(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new _n(Uc(this.h), rs(this.s), rs(this.l), Is(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Is(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Uc(this.h)}, ${rs(this.s) * 100}%, ${rs(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Uc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function rs(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Za(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Cu = (t) => () => t;
function pw(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function gw(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function vw(t) {
  return (t = +t) == 1 ? Df : function(e, n) {
    return n - e ? gw(e, n, t) : Cu(isNaN(e) ? n : e);
  };
}
function Df(t, e) {
  var n = e - t;
  return n ? pw(t, n) : Cu(isNaN(t) ? e : t);
}
const Ls = function t(e) {
  var n = vw(e);
  function r(o, i) {
    var s = n((o = vl(o)).r, (i = vl(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Df(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function mw(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function yw(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ww(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = fi(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function bw(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Rn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function xw(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = fi(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ml = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wa = new RegExp(ml.source, "g");
function kw(t) {
  return function() {
    return t;
  };
}
function Cw(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Vf(t, e) {
  var n = ml.lastIndex = Wa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = ml.exec(t)) && (o = Wa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Rn(r, o) })), n = Wa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Cw(l[0].x) : kw(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function fi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Cu(e) : (n === "number" ? Rn : n === "string" ? (r = lo(e)) ? (e = r, Ls) : Vf : e instanceof lo ? Ls : e instanceof Date ? bw : yw(e) ? mw : Array.isArray(e) ? ww : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xw : Rn)(t, e);
}
var Gc = 180 / Math.PI, Hf = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function If(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * Gc,
    skewX: Math.atan(l) * Gc,
    scaleX: s,
    scaleY: a
  };
}
var os;
function $w(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Hf : If(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Sw(t) {
  return t == null || (os || (os = document.createElementNS("http://www.w3.org/2000/svg", "g")), os.setAttribute("transform", t), !(t = os.transform.baseVal.consolidate())) ? Hf : (t = t.matrix, If(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Lf(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Rn(u, h) }, { i: y - 2, x: Rn(d, f) });
    } else (h || f) && v.push("translate(" + h + e + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Rn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Rn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Rn(u, h) }, { i: y - 2, x: Rn(d, f) });
    } else (h !== 1 || f !== 1) && v.push(o(v) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = t(u), d = t(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, f), s(u.rotate, d.rotate, h, f), a(u.skewX, d.skewX, h, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(v) {
      for (var m = -1, y = f.length, w; ++m < y; ) h[(w = f[m]).i] = w.x(v);
      return h.join("");
    };
  };
}
var _w = Lf($w, "px, ", "px)", "deg)"), Ew = Lf(Sw, ", ", ")", ")"), Pw = 1e-12;
function Jc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Ow(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Nw(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const bs = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], f = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < Pw)
      b = Math.log(f / u) / e, w = function(V) {
        return [
          a + V * v,
          l + V * m,
          u * Math.exp(e * V * b)
        ];
      };
    else {
      var x = Math.sqrt(y), E = (f * f - u * u + r * y) / (2 * u * n * x), C = (f * f - u * u - r * y) / (2 * f * n * x), k = Math.log(Math.sqrt(E * E + 1) - E), O = Math.log(Math.sqrt(C * C + 1) - C);
      b = (O - k) / e, w = function(V) {
        var H = V * b, L = Jc(k), M = u / (n * x) * (L * Nw(e * H + k) - Ow(k));
        return [
          a + M * v,
          l + M * m,
          u * L / Jc(e * H + k)
        ];
      };
    }
    return w.duration = b * 1e3 * e / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return t(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Do = 0, ii = 0, Qo = 0, Rf = 1e3, Rs, si, js = 0, uo = 0, _a = 0, ki = typeof performance == "object" && performance.now ? performance : Date, jf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function $u() {
  return uo || (jf(Tw), uo = ki.now() + _a);
}
function Tw() {
  uo = 0;
}
function Bs() {
  this._call = this._time = this._next = null;
}
Bs.prototype = Bf.prototype = {
  constructor: Bs,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? $u() : +n) + (e == null ? 0 : +e), !this._next && si !== this && (si ? si._next = this : Rs = this, si = this), this._call = t, this._time = n, yl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, yl());
  }
};
function Bf(t, e, n) {
  var r = new Bs();
  return r.restart(t, e, n), r;
}
function Aw() {
  $u(), ++Do;
  for (var t = Rs, e; t; )
    (e = uo - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Do;
}
function Qc() {
  uo = (js = ki.now()) + _a, Do = ii = 0;
  try {
    Aw();
  } finally {
    Do = 0, Mw(), uo = 0;
  }
}
function zw() {
  var t = ki.now(), e = t - js;
  e > Rf && (_a -= e, js = t);
}
function Mw() {
  for (var t, e = Rs, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Rs = n);
  si = t, yl(r);
}
function yl(t) {
  if (!Do) {
    ii && (ii = clearTimeout(ii));
    var e = t - uo;
    e > 24 ? (t < 1 / 0 && (ii = setTimeout(Qc, t - ki.now() - _a)), Qo && (Qo = clearInterval(Qo))) : (Qo || (js = ki.now(), Qo = setInterval(zw, Rf)), Do = 1, jf(Qc));
  }
}
function ed(t, e, n) {
  var r = new Bs();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Dw = $a("start", "end", "cancel", "interrupt"), Vw = [], Ff = 0, td = 1, wl = 2, xs = 3, nd = 4, bl = 5, ks = 6;
function Ea(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Hw(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Dw,
    tween: Vw,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ff
  });
}
function Su(t, e) {
  var n = Vn(t, e);
  if (n.state > Ff) throw new Error("too late; already scheduled");
  return n;
}
function Qn(t, e) {
  var n = Vn(t, e);
  if (n.state > xs) throw new Error("too late; already running");
  return n;
}
function Vn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Hw(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = Bf(i, 0, n.time);
  function i(u) {
    n.state = td, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, v;
    if (n.state !== td) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === xs) return ed(s);
        v.state === nd ? (v.state = ks, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = ks, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (ed(function() {
      n.state === xs && (n.state = nd, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = wl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === wl) {
      for (n.state = xs, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = bl, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(t, d);
    n.state === bl && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ks, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Cs(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > wl && r.state < bl, r.state = ks, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function Iw(t) {
  return this.each(function() {
    Cs(this, t);
  });
}
function Lw(t, e) {
  var n, r;
  return function() {
    var o = Qn(this, t), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Rw(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Qn(this, t), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: e, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === e) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function jw(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Vn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Lw : Rw)(n, t, e));
}
function _u(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Qn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Vn(o, r).value[e];
  };
}
function Kf(t, e) {
  var n;
  return (typeof e == "number" ? Rn : e instanceof lo ? Ls : (n = lo(e)) ? (e = n, Ls) : Vf)(t, e);
}
function Bw(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fw(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Kw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Zw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Ww(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function Xw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function qw(t, e) {
  var n = Sa(t), r = n === "transform" ? Ew : Kf;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Xw : Ww)(n, r, _u(this, "attr." + t, e)) : e == null ? (n.local ? Fw : Bw)(n) : (n.local ? Zw : Kw)(n, r, e));
}
function Yw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Uw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Gw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Uw(t, i)), n;
  }
  return o._value = e, o;
}
function Jw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Yw(t, i)), n;
  }
  return o._value = e, o;
}
function Qw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Sa(t);
  return this.tween(n, (r.local ? Gw : Jw)(r, e));
}
function eb(t, e) {
  return function() {
    Su(this, t).delay = +e.apply(this, arguments);
  };
}
function tb(t, e) {
  return e = +e, function() {
    Su(this, t).delay = e;
  };
}
function nb(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eb : tb)(e, t)) : Vn(this.node(), e).delay;
}
function rb(t, e) {
  return function() {
    Qn(this, t).duration = +e.apply(this, arguments);
  };
}
function ob(t, e) {
  return e = +e, function() {
    Qn(this, t).duration = e;
  };
}
function ib(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rb : ob)(e, t)) : Vn(this.node(), e).duration;
}
function sb(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Qn(this, t).ease = e;
  };
}
function ab(t) {
  var e = this._id;
  return arguments.length ? this.each(sb(e, t)) : Vn(this.node(), e).ease;
}
function lb(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Qn(this, t).ease = n;
  };
}
function ub(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lb(this._id, t));
}
function cb(t) {
  typeof t != "function" && (t = xf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new mr(r, this._parents, this._name, this._id);
}
function db(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, v = 0; v < d; ++v)
      (f = l[v] || u[v]) && (h[v] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new mr(s, this._parents, this._name, this._id);
}
function hb(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function fb(t, e, n) {
  var r, o, i = hb(e) ? Su : Qn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function pb(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Vn(this.node(), n).on.on(t) : this.each(fb(n, t, e));
}
function gb(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function vb() {
  return this.on("end.remove", gb(this._id));
}
function mb(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bu(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = t.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, Ea(u[f], e, n, f, u, Vn(d, n)));
  return new mr(i, this._parents, e, n);
}
function yb(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bf(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = t.call(d, d.__data__, h, l), v, m = Vn(d, n), y = 0, w = f.length; y < w; ++y)
          (v = f[y]) && Ea(v, e, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new mr(i, s, e, n);
}
var wb = Hi.prototype.constructor;
function bb() {
  return new wb(this._groups, this._parents);
}
function xb(t, e) {
  var n, r, o;
  return function() {
    var i = Mo(this, t), s = (this.style.removeProperty(t), Mo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Zf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function kb(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = Mo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Cb(t, e, n) {
  var r, o, i;
  return function() {
    var s = Mo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), Mo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function $b(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Qn(this, t), u = l.on, d = l.value[i] == null ? a || (a = Zf(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Sb(t, e, n) {
  var r = (t += "") == "transform" ? _w : Kf;
  return e == null ? this.styleTween(t, xb(t, r)).on("end.style." + t, Zf(t)) : typeof e == "function" ? this.styleTween(t, Cb(t, r, _u(this, "style." + t, e))).each($b(this._id, t)) : this.styleTween(t, kb(t, r, e), n).on("end.style." + t, null);
}
function _b(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Eb(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && _b(t, s, n)), r;
  }
  return i._value = e, i;
}
function Pb(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Eb(t, e, n ?? ""));
}
function Ob(t) {
  return function() {
    this.textContent = t;
  };
}
function Nb(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Tb(t) {
  return this.tween("text", typeof t == "function" ? Nb(_u(this, "text", t)) : Ob(t == null ? "" : t + ""));
}
function Ab(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function zb(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Ab(o)), e;
  }
  return r._value = t, r;
}
function Mb(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, zb(t));
}
function Db() {
  for (var t = this._name, e = this._id, n = Wf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Vn(l, e);
        Ea(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new mr(r, this._parents, t, n);
}
function Vb() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Qn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var Hb = 0;
function mr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Wf() {
  return ++Hb;
}
var nr = Hi.prototype;
mr.prototype = {
  constructor: mr,
  select: mb,
  selectAll: yb,
  selectChild: nr.selectChild,
  selectChildren: nr.selectChildren,
  filter: cb,
  merge: db,
  selection: bb,
  transition: Db,
  call: nr.call,
  nodes: nr.nodes,
  node: nr.node,
  size: nr.size,
  empty: nr.empty,
  each: nr.each,
  on: pb,
  attr: qw,
  attrTween: Qw,
  style: Sb,
  styleTween: Pb,
  text: Tb,
  textTween: Mb,
  remove: vb,
  tween: jw,
  delay: nb,
  duration: ib,
  ease: ab,
  easeVarying: ub,
  end: Vb,
  [Symbol.iterator]: nr[Symbol.iterator]
};
function Ib(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Lb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ib
};
function Rb(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function jb(t) {
  var e, n;
  t instanceof mr ? (e = t._id, t = t._name) : (e = Wf(), (n = Lb).time = $u(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ea(l, t, e, u, s, n || Rb(l, e));
  return new mr(r, this._parents, t, e);
}
Hi.prototype.interrupt = Iw;
Hi.prototype.transition = jb;
const is = (t) => () => t;
function Bb(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function ar(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
ar.prototype = {
  constructor: ar,
  scale: function(t) {
    return t === 1 ? this : new ar(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ar(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Pa = new ar(1, 0, 0);
Xf.prototype = ar.prototype;
function Xf(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return Pa;
  return t.__zoom;
}
function Xa(t) {
  t.stopImmediatePropagation();
}
function ei(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Fb(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Kb() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function rd() {
  return this.__zoom || Pa;
}
function Zb(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Wb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xb(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function qf() {
  var t = Fb, e = Kb, n = Xb, r = Zb, o = Wb, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = bs, u = $a("start", "zoom", "end"), d, h, f, v = 500, m = 150, y = 0, w = 10;
  function b($) {
    $.property("__zoom", rd).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", M).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, P, A, j) {
    var q = $.selection ? $.selection() : $;
    q.property("__zoom", rd), $ !== q ? k($, P, A, j) : q.interrupt().each(function() {
      O(this, arguments).event(j).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function($, P, A, j) {
    b.scaleTo($, function() {
      var q = this.__zoom.k, G = typeof P == "function" ? P.apply(this, arguments) : P;
      return q * G;
    }, A, j);
  }, b.scaleTo = function($, P, A, j) {
    b.transform($, function() {
      var q = e.apply(this, arguments), G = this.__zoom, T = A == null ? C(q) : typeof A == "function" ? A.apply(this, arguments) : A, U = G.invert(T), ee = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(E(x(G, ee), T, U), q, s);
    }, A, j);
  }, b.translateBy = function($, P, A, j) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), e.apply(this, arguments), s);
    }, null, j);
  }, b.translateTo = function($, P, A, j, q) {
    b.transform($, function() {
      var G = e.apply(this, arguments), T = this.__zoom, U = j == null ? C(G) : typeof j == "function" ? j.apply(this, arguments) : j;
      return n(Pa.translate(U[0], U[1]).scale(T.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), G, s);
    }, j, q);
  };
  function x($, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === $.k ? $ : new ar(P, $.x, $.y);
  }
  function E($, P, A) {
    var j = P[0] - A[0] * $.k, q = P[1] - A[1] * $.k;
    return j === $.x && q === $.y ? $ : new ar($.k, j, q);
  }
  function C($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function k($, P, A, j) {
    $.on("start.zoom", function() {
      O(this, arguments).event(j).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(j).end();
    }).tween("zoom", function() {
      var q = this, G = arguments, T = O(q, G).event(j), U = e.apply(q, G), ee = A == null ? C(U) : typeof A == "function" ? A.apply(q, G) : A, B = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), Z = q.__zoom, W = typeof P == "function" ? P.apply(q, G) : P, J = l(Z.invert(ee).concat(B / Z.k), W.invert(ee).concat(B / W.k));
      return function(oe) {
        if (oe === 1) oe = W;
        else {
          var I = J(oe), ne = B / I[2];
          oe = new ar(ne, ee[0] - I[0] * ne, ee[1] - I[1] * ne);
        }
        T.zoom(null, oe);
      };
    });
  }
  function O($, P, A) {
    return !A && $.__zooming || new V($, P);
  }
  function V($, P) {
    this.that = $, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = e.apply($, P), this.taps = 0;
  }
  V.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, P) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var P = wn(this.that).datum();
      u.call(
        $,
        this.that,
        new Bb($, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function H($, ...P) {
    if (!t.apply(this, arguments)) return;
    var A = O(this, P).event($), j = this.__zoom, q = Math.max(i[0], Math.min(i[1], j.k * Math.pow(2, r.apply(this, arguments)))), G = Sn($);
    if (A.wheel)
      (A.mouse[0][0] !== G[0] || A.mouse[0][1] !== G[1]) && (A.mouse[1] = j.invert(A.mouse[0] = G)), clearTimeout(A.wheel);
    else {
      if (j.k === q) return;
      A.mouse = [G, j.invert(G)], Cs(this), A.start();
    }
    ei($), A.wheel = setTimeout(T, m), A.zoom("mouse", n(E(x(j, q), A.mouse[0], A.mouse[1]), A.extent, s));
    function T() {
      A.wheel = null, A.end();
    }
  }
  function L($, ...P) {
    if (f || !t.apply(this, arguments)) return;
    var A = $.currentTarget, j = O(this, P, !0).event($), q = wn($.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", B, !0), G = Sn($, A), T = $.clientX, U = $.clientY;
    Tf($.view), Xa($), j.mouse = [G, this.__zoom.invert(G)], Cs(this), j.start();
    function ee(Z) {
      if (ei(Z), !j.moved) {
        var W = Z.clientX - T, J = Z.clientY - U;
        j.moved = W * W + J * J > y;
      }
      j.event(Z).zoom("mouse", n(E(j.that.__zoom, j.mouse[0] = Sn(Z, A), j.mouse[1]), j.extent, s));
    }
    function B(Z) {
      q.on("mousemove.zoom mouseup.zoom", null), Af(Z.view, j.moved), ei(Z), j.event(Z).end();
    }
  }
  function M($, ...P) {
    if (t.apply(this, arguments)) {
      var A = this.__zoom, j = Sn($.changedTouches ? $.changedTouches[0] : $, this), q = A.invert(j), G = A.k * ($.shiftKey ? 0.5 : 2), T = n(E(x(A, G), j, q), e.apply(this, P), s);
      ei($), a > 0 ? wn(this).transition().duration(a).call(k, T, j, $) : wn(this).call(b.transform, T, j, $);
    }
  }
  function D($, ...P) {
    if (t.apply(this, arguments)) {
      var A = $.touches, j = A.length, q = O(this, P, $.changedTouches.length === j).event($), G, T, U, ee;
      for (Xa($), T = 0; T < j; ++T)
        U = A[T], ee = Sn(U, this), ee = [ee, this.__zoom.invert(ee), U.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== ee[2] && (q.touch1 = ee, q.taps = 0) : (q.touch0 = ee, G = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), G && (q.taps < 2 && (h = ee[0], d = setTimeout(function() {
        d = null;
      }, v)), Cs(this), q.start());
    }
  }
  function _($, ...P) {
    if (this.__zooming) {
      var A = O(this, P).event($), j = $.changedTouches, q = j.length, G, T, U, ee;
      for (ei($), G = 0; G < q; ++G)
        T = j[G], U = Sn(T, this), A.touch0 && A.touch0[2] === T.identifier ? A.touch0[0] = U : A.touch1 && A.touch1[2] === T.identifier && (A.touch1[0] = U);
      if (T = A.that.__zoom, A.touch1) {
        var B = A.touch0[0], Z = A.touch0[1], W = A.touch1[0], J = A.touch1[1], oe = (oe = W[0] - B[0]) * oe + (oe = W[1] - B[1]) * oe, I = (I = J[0] - Z[0]) * I + (I = J[1] - Z[1]) * I;
        T = x(T, Math.sqrt(oe / I)), U = [(B[0] + W[0]) / 2, (B[1] + W[1]) / 2], ee = [(Z[0] + J[0]) / 2, (Z[1] + J[1]) / 2];
      } else if (A.touch0) U = A.touch0[0], ee = A.touch0[1];
      else return;
      A.zoom("touch", n(E(T, U, ee), A.extent, s));
    }
  }
  function N($, ...P) {
    if (this.__zooming) {
      var A = O(this, P).event($), j = $.changedTouches, q = j.length, G, T;
      for (Xa($), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), G = 0; G < q; ++G)
        T = j[G], A.touch0 && A.touch0[2] === T.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === T.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (T = Sn(T, this), Math.hypot(h[0] - T[0], h[1] - T[1]) < w)) {
        var U = wn(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : is(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : is(!!$), b) : t;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : is(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : is([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : e;
  }, b.scaleExtent = function($) {
    return arguments.length ? (i[0] = +$[0], i[1] = +$[1], b) : [i[0], i[1]];
  }, b.translateExtent = function($) {
    return arguments.length ? (s[0][0] = +$[0][0], s[1][0] = +$[1][0], s[0][1] = +$[0][1], s[1][1] = +$[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function($) {
    return arguments.length ? (n = $, b) : n;
  }, b.duration = function($) {
    return arguments.length ? (a = +$, b) : a;
  }, b.interpolate = function($) {
    return arguments.length ? (l = $, b) : l;
  }, b.on = function() {
    var $ = u.on.apply(u, arguments);
    return $ === u ? b : $;
  }, b.clickDistance = function($) {
    return arguments.length ? (y = ($ = +$) * $, b) : Math.sqrt(y);
  }, b.tapDistance = function($) {
    return arguments.length ? (w = +$, b) : w;
  }, b;
}
const Ci = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (t) => `Node type "${t}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (t) => `The old edge with id=${t} does not exist.`,
  error009: (t) => `Marker type "${t}" doesn't exist.`,
  error008: (t, { id: e, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${t} handle id: "${t === "source" ? n : r}", edge id: ${e}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (t) => `Edge type "${t}" not found. Using fallback type "default".`,
  error012: (t) => `Node with id "${t}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (t = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${t}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, xl = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Yf = ["Enter", " ", "Escape"], qb = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: t, x: e, y: n }) => `Moved selected node ${t}. New position, x: ${e}, y: ${n}`,
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
var Vo;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(Vo || (Vo = {}));
var ro;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(ro || (ro = {}));
var Fs;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Fs || (Fs = {}));
const kl = {
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
var sr;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(sr || (sr = {}));
var $i;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})($i || ($i = {}));
var Ne;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Ne || (Ne = {}));
const od = {
  [Ne.Left]: Ne.Right,
  [Ne.Right]: Ne.Left,
  [Ne.Top]: Ne.Bottom,
  [Ne.Bottom]: Ne.Top
};
function Yb(t, e) {
  if (!t && !e)
    return !0;
  if (!t || !e || t.size !== e.size)
    return !1;
  if (!t.size && !e.size)
    return !0;
  for (const n of t.keys())
    if (!e.has(n))
      return !1;
  return !0;
}
function id(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Ub(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Uf = (t) => "id" in t && "source" in t && "target" in t, Gb = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Eu = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), Li = (t, e = [0, 0]) => {
  const { width: n, height: r } = Kr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, Jb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Eu(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? Ks(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Oa(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Na(n);
}, Ri = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = Oa(n, Ks(o)), r = !0);
  }), r ? Na(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Pu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Bi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = Si(a, Io(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, Qb = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function e2(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function t2({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = e2(t, s), l = Ri(a), u = Ou(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Gf({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Ci.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && Lo(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Lo(h) ? co(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Ci.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function n2({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const f = i.has(h.id), v = !f && h.parentId && s.find((m) => m.id === h.parentId);
    (f || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = Qb(s, l);
  for (const h of l)
    a.has(h.id) && !u.find((f) => f.id === h.id) && u.push(h);
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
const Ho = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), co = (t = { x: 0, y: 0 }, e, n) => ({
  x: Ho(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: Ho(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function Jf(t, e, n) {
  const { width: r, height: o } = Kr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return co(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const sd = (t, e, n) => t < e ? Ho(Math.abs(t - e), 1, e) / e : t > n ? -Ho(Math.abs(t - n), 1, e) / e : 0, Qf = (t, e, n = 15, r = 40) => {
  const o = sd(t.x, r, e.width - r) * n, i = sd(t.y, r, e.height - r) * n;
  return [o, i];
}, Oa = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), Cl = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Na = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), Io = (t, e = [0, 0]) => {
  const { x: n, y: r } = Eu(t) ? t.internals.positionAbsolute : Li(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, Ks = (t, e = [0, 0]) => {
  const { x: n, y: r } = Eu(t) ? t.internals.positionAbsolute : Li(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, ep = (t, e) => Na(Oa(Cl(t), Cl(e))), Si = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, ad = (t) => lr(t.width) && lr(t.height) && lr(t.x) && lr(t.y), lr = (t) => !isNaN(t) && isFinite(t), r2 = (t, e) => {
}, ji = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Bi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? ji(a, s) : a;
}, Zs = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function Co(t, e) {
  if (typeof t == "number")
    return Math.floor((e - e / (1 + t)) * 0.5);
  if (typeof t == "string" && t.endsWith("px")) {
    const n = parseFloat(t);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof t == "string" && t.endsWith("%")) {
    const n = parseFloat(t);
    if (!Number.isNaN(n))
      return Math.floor(e * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function o2(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = Co(t, n), o = Co(t, e);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof t == "object") {
    const r = Co(t.top ?? t.y ?? 0, n), o = Co(t.bottom ?? t.y ?? 0, n), i = Co(t.left ?? t.x ?? 0, e), s = Co(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function i2(t, e, n, r, o, i) {
  const { x: s, y: a } = Zs(t, [e, n, r]), { x: l, y: u } = Zs({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Ou = (t, e, n, r, o, i) => {
  const s = o2(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = Ho(u, r, o), h = t.x + t.width / 2, f = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - f * d, y = i2(t, v, m, d, e, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: v - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, Qr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Lo(t) {
  return t != null && t !== "parent";
}
function Kr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function tp(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function s2(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function a2(t) {
  return { ...qb, ...t || {} };
}
function qa(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Pn(t), a = Bi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? ji(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const np = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), rp = (t) => t?.getRootNode?.() || window?.document, l2 = ["INPUT", "SELECT", "TEXTAREA"];
function op(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : l2.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const ip = (t) => "clientX" in t, Pn = (t, e) => {
  const n = ip(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, ld = (t, e, n, r, o) => {
  const i = e.querySelectorAll(`.${t}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: t,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...np(s)
    };
  });
};
function u2({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function ss(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function ud({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Ne.Left:
      return [e - ss(e - r, i), n];
    case Ne.Right:
      return [e + ss(r - e, i), n];
    case Ne.Top:
      return [e, n - ss(n - o, i)];
    case Ne.Bottom:
      return [e, n + ss(o - n, i)];
  }
}
function sp({ sourceX: t, sourceY: e, sourcePosition: n = Ne.Bottom, targetX: r, targetY: o, targetPosition: i = Ne.Top, curvature: s = 0.25 }) {
  const [a, l] = ud({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ud({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, f, v, m] = u2({
    sourceX: t,
    sourceY: e,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${t},${e} C${a},${l} ${u},${d} ${r},${o}`,
    h,
    f,
    v,
    m
  ];
}
function ap({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function c2({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function d2({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = Oa(Ks(t), Ks(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Si(s, Na(i)) > 0;
}
const h2 = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, f2 = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), p2 = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Uf(t) ? n = { ...t } : n = {
    ...t,
    id: h2(t)
  }, f2(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function lp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = ap({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const cd = {
  [Ne.Left]: { x: -1, y: 0 },
  [Ne.Right]: { x: 1, y: 0 },
  [Ne.Top]: { x: 0, y: -1 },
  [Ne.Bottom]: { x: 0, y: 1 }
}, g2 = ({ source: t, sourcePosition: e = Ne.Bottom, target: n }) => e === Ne.Left || e === Ne.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, dd = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function v2({ source: t, sourcePosition: e = Ne.Bottom, target: n, targetPosition: r = Ne.Top, center: o, offset: i, stepPosition: s }) {
  const a = cd[e], l = cd[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = g2({
    source: u,
    sourcePosition: e,
    target: d
  }), f = h.x !== 0 ? "x" : "y", v = h[f];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , E, C] = ap({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const k = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], O = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === v ? m = f === "x" ? k : O : m = f === "x" ? O : k;
  } else {
    const k = [{ x: u.x, y: d.y }], O = [{ x: d.x, y: u.y }];
    if (f === "x" ? m = a.x === v ? O : k : m = a.y === v ? k : O, e === r) {
      const D = Math.abs(t[f] - n[f]);
      if (D <= i) {
        const _ = Math.min(i - 1, i - D);
        a[f] === v ? b[f] = (u[f] > t[f] ? -1 : 1) * _ : x[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (e !== r) {
      const D = f === "x" ? "y" : "x", _ = a[f] === l[D], N = u[D] > d[D], $ = u[D] < d[D];
      (a[f] === 1 && (!_ && N || _ && $) || a[f] !== 1 && (!_ && $ || _ && N)) && (m = f === "x" ? k : O);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, H = { x: d.x + x.x, y: d.y + x.y }, L = Math.max(Math.abs(V.x - m[0].x), Math.abs(H.x - m[0].x)), M = Math.max(Math.abs(V.y - m[0].y), Math.abs(H.y - m[0].y));
    L >= M ? (y = (V.x + H.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + H.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], y, w, E, C];
}
function m2(t, e, n, r) {
  const o = Math.min(dd(t, e) / 2, dd(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Nu({ sourceX: t, sourceY: e, sourcePosition: n = Ne.Bottom, targetX: r, targetY: o, targetPosition: i = Ne.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, v, m, y] = v2({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, x) => {
    let E = "";
    return x > 0 && x < h.length - 1 ? E = m2(h[x - 1], b, h[x + 1], s) : E = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, w += E, w;
  }, ""), f, v, m, y];
}
function hd(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function y2(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!hd(e) || !hd(n))
    return null;
  const r = e.internals.handleBounds || fd(e.handles), o = n.internals.handleBounds || fd(n.handles), i = pd(r?.source ?? [], t.sourceHandle), s = pd(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === Vo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", Ci.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || Ne.Bottom, l = s?.position || Ne.Top, u = _i(e, i, a), d = _i(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function fd(t) {
  if (!t)
    return null;
  const e = [], n = [];
  for (const r of t)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? e.push(r) : r.type === "target" && n.push(r);
  return {
    source: e,
    target: n
  };
}
function _i(t, e, n = Ne.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Kr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Ne.Top:
      return { x: o + s / 2, y: i };
    case Ne.Right:
      return { x: o + s, y: i + a / 2 };
    case Ne.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ne.Left:
      return { x: o, y: i + a / 2 };
  }
}
function pd(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function $l(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function w2(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = $l(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function b2(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ne.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Ne.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Ne.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const up = 1e3, x2 = 10, Tu = {
  nodeOrigin: [0, 0],
  nodeExtent: xl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, k2 = {
  ...Tu,
  checkEquality: !0
};
function Au(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function C2(t, e, n) {
  const r = Au(Tu, n);
  for (const o of t.values())
    if (o.parentId)
      zu(o, t, e, r);
    else {
      const i = Li(o, r.nodeOrigin), s = Lo(o.extent) ? o.extent : r.nodeExtent, a = co(i, s, Kr(o));
      o.internals.positionAbsolute = a;
    }
}
function $2(t, e) {
  if (!t.handles)
    return t.measured ? e?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of t.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: t.id,
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
function S2(t, e, n, r) {
  const o = Au(k2, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? up : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = Li(u, o.nodeOrigin), f = Lo(u.extent) ? u.extent : o.nodeExtent, v = co(h, f, Kr(u));
      d = {
        ...o.defaults,
        ...u,
        measured: {
          width: u.measured?.width,
          height: u.measured?.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: $2(u, d),
          z: cp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && zu(d, e, n, r, i);
  }
  return s;
}
function _2(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function zu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Au(Tu, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  _2(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * x2), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? up : 0, { x: h, y: f, z: v } = E2(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || f !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: v
    }
  });
}
function cp(t, e) {
  return (lr(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function E2(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Kr(t), l = Li(t, n), u = Lo(t.extent) ? co(l, t.extent, a) : l;
  let d = co({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = Jf(d, a, e));
  const h = cp(t, o), f = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function P2(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Io(a), u = ep(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Kr(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (f > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((x) => {
      t.some((E) => E.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + v
        }
      });
    })), (d.width < s.width || d.height < s.height || f || v) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (f ? h[0] * f - w : 0),
        height: y + (v ? h[1] * v - b : 0)
      }
    });
  }), o;
}
function O2(t, e, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), h = [];
  for (const f of t.values()) {
    const v = e.get(f.id);
    if (!v)
      continue;
    if (v.hidden) {
      e.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const m = np(f.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = Lo(v.extent) ? v.extent : i;
      let { positionAbsolute: x } = v.internals;
      v.parentId && v.extent === "parent" ? x = Jf(x, m, e.get(v.parentId)) : b && (x = co(x, b, m));
      const E = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: x,
          handleBounds: {
            source: ld("source", f.nodeElement, w, d, v.id),
            target: ld("target", f.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, E), v.parentId && zu(E, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: Io(E, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = P2(h, e, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function N2({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
  if (!e || !t.x && !t.y)
    return Promise.resolve(!1);
  const s = await e.setViewportConstrained({
    x: n[0] + t.x,
    y: n[1] + t.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function gd(t, e, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, e)), s = `${o}-${t}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, e)), i) {
    s = `${o}-${t}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, e));
  }
}
function T2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    gd("source", l, d, t, o, s), gd("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function A2(t, e) {
  if (t === null || e === null)
    return !1;
  const n = Array.isArray(t) ? t : [t], r = Array.isArray(e) ? e : [e];
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (n[o].id !== r[o].id || n[o].type !== r[o].type || !Object.is(n[o].data, r[o].data))
      return !1;
  return !0;
}
function dp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : dp(n, e) : !1;
}
function vd(t, e, n) {
  let r = t;
  do {
    if (r?.matches?.(e))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function z2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !dp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
      const a = t.get(i);
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
function Ya({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of e) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!t)
    return [o[0], o];
  const i = n.get(t)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: e.get(t)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function M2({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ji(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function D2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: x, handleSelector: E, domNode: C, isSelectable: k, nodeId: O, nodeClickDistance: V = 0 }) {
    f = wn(C);
    function H({ x: _, y: N }) {
      const { nodeLookup: $, nodeExtent: P, snapGrid: A, snapToGrid: j, nodeOrigin: q, onNodeDrag: G, onSelectionDrag: T, onError: U, updateNodePositions: ee } = e();
      i = { x: _, y: N };
      let B = !1;
      const Z = a.size > 1, W = Z && P ? Cl(Ri(a)) : null, J = Z && j ? M2({
        dragItems: a,
        snapGrid: A,
        x: _,
        y: N
      }) : null;
      for (const [oe, I] of a) {
        if (!$.has(oe))
          continue;
        let ne = { x: _ - I.distance.x, y: N - I.distance.y };
        j && (ne = J ? {
          x: Math.round(ne.x + J.x),
          y: Math.round(ne.y + J.y)
        } : ji(ne, A));
        let ge = null;
        if (Z && P && !I.extent && W) {
          const { positionAbsolute: de } = I.internals, ye = de.x - W.x + P[0][0], Ce = de.x + I.measured.width - W.x2 + P[1][0], be = de.y - W.y + P[0][1], he = de.y + I.measured.height - W.y2 + P[1][1];
          ge = [
            [ye, be],
            [Ce, he]
          ];
        }
        const { position: ce, positionAbsolute: ie } = Gf({
          nodeId: oe,
          nextPosition: ne,
          nodeLookup: $,
          nodeExtent: ge || P,
          nodeOrigin: q,
          onError: U
        });
        B = B || I.position.x !== ce.x || I.position.y !== ce.y, I.position = ce, I.internals.positionAbsolute = ie;
      }
      if (m = m || B, !!B && (ee(a, !0), y && (r || G || !O && T))) {
        const [oe, I] = Ya({
          nodeId: O,
          dragItems: a,
          nodeLookup: $
        });
        r?.(y, a, oe, I), G?.(y, oe, I), O || T?.(y, I);
      }
    }
    async function L() {
      if (!d)
        return;
      const { transform: _, panBy: N, autoPanSpeed: $, autoPanOnNodeDrag: P } = e();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [A, j] = Qf(u, d, $);
      (A !== 0 || j !== 0) && (i.x = (i.x ?? 0) - A / _[2], i.y = (i.y ?? 0) - j / _[2], await N({ x: A, y: j }) && H(i)), s = requestAnimationFrame(L);
    }
    function M(_) {
      const { nodeLookup: N, multiSelectionActive: $, nodesDraggable: P, transform: A, snapGrid: j, snapToGrid: q, selectNodesOnDrag: G, onNodeDragStart: T, onSelectionDragStart: U, unselectNodesAndEdges: ee } = e();
      h = !0, (!G || !k) && !$ && O && (N.get(O)?.selected || ee()), k && G && O && t?.(O);
      const B = qa(_.sourceEvent, { transform: A, snapGrid: j, snapToGrid: q, containerBounds: d });
      if (i = B, a = z2(N, P, B, O), a.size > 0 && (n || T || !O && U)) {
        const [Z, W] = Ya({
          nodeId: O,
          dragItems: a,
          nodeLookup: N
        });
        n?.(_.sourceEvent, a, Z, W), T?.(_.sourceEvent, Z, W), O || U?.(_.sourceEvent, W);
      }
    }
    const D = tw().clickDistance(V).on("start", (_) => {
      const { domNode: N, nodeDragThreshold: $, transform: P, snapGrid: A, snapToGrid: j } = e();
      d = N?.getBoundingClientRect() || null, v = !1, m = !1, y = _.sourceEvent, $ === 0 && M(_), i = qa(_.sourceEvent, { transform: P, snapGrid: A, snapToGrid: j, containerBounds: d }), u = Pn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: N, transform: $, snapGrid: P, snapToGrid: A, nodeDragThreshold: j, nodeLookup: q } = e(), G = qa(_.sourceEvent, { transform: $, snapGrid: P, snapToGrid: A, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      O && !q.has(O)) && (v = !0), !v) {
        if (!l && N && h && (l = !0, L()), !h) {
          const T = Pn(_.sourceEvent, d), U = T.x - u.x, ee = T.y - u.y;
          Math.sqrt(U * U + ee * ee) > j && M(_);
        }
        (i.x !== G.xSnapped || i.y !== G.ySnapped) && a && h && (u = Pn(_.sourceEvent, d), H(G));
      }
    }).on("end", (_) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: $, onNodeDragStop: P, onSelectionDragStop: A } = e();
        if (m && ($(a, !1), m = !1), o || P || !O && A) {
          const [j, q] = Ya({
            nodeId: O,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(_.sourceEvent, a, j, q), P?.(_.sourceEvent, j, q), O || A?.(_.sourceEvent, q);
        }
      }
    }).filter((_) => {
      const N = _.target;
      return !_.button && (!x || !vd(N, `.${x}`, C)) && (!E || vd(N, E, C));
    });
    f.call(D);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function V2(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    Si(o, Io(i)) > 0 && r.push(i);
  return r;
}
const H2 = 250;
function I2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = V2(t, n, e + H2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = _i(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
      f > e || (f < i ? (o = [{ ...u, x: d, y: h }], i = f) : f === i && o.push({ ...u, x: d, y: h }));
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
function hp(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ..._i(s, l, l.position, !0) } : l;
}
function fp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function L2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const pp = () => !0;
function R2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = pp, onReconnectEnd: x, updateConnection: E, getTransform: C, getFromHandle: k, autoPanSpeed: O, dragThreshold: V = 1, handleDomNode: H }) {
  const L = rp(t.target);
  let M = 0, D;
  const { x: _, y: N } = Pn(t), $ = fp(i, H), P = a?.getBoundingClientRect();
  let A = !1;
  if (!P || !$)
    return;
  const j = hp(o, $, r, l, e);
  if (!j)
    return;
  let q = Pn(t, P), G = !1, T = null, U = !1, ee = null;
  function B() {
    if (!d || !P)
      return;
    const [ge, ce] = Qf(q, P, O);
    f({ x: ge, y: ce }), M = requestAnimationFrame(B);
  }
  const Z = {
    ...j,
    nodeId: o,
    type: $,
    position: j.position
  }, W = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: _i(W, Z, Ne.Left, !0),
    fromHandle: Z,
    fromPosition: Z.position,
    fromNode: W,
    to: q,
    toHandle: null,
    toPosition: od[Z.position],
    toNode: null,
    pointer: q
  };
  function oe() {
    A = !0, E(J), m?.(t, { nodeId: o, handleId: r, handleType: $ });
  }
  V === 0 && oe();
  function I(ge) {
    if (!A) {
      const { x: ye, y: Ce } = Pn(ge), be = ye - _, he = Ce - N;
      if (!(be * be + he * he > V * V))
        return;
      oe();
    }
    if (!k() || !Z) {
      ne(ge);
      return;
    }
    const ce = C();
    q = Pn(ge, P), D = I2(Bi(q, ce, !1, [1, 1]), n, l, Z), G || (B(), G = !0);
    const ie = gp(ge, {
      handle: D,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: L,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    ee = ie.handleDomNode, T = ie.connection, U = L2(!!D, ie.isValid);
    const de = {
      // from stays the same
      ...J,
      isValid: U,
      to: ie.toHandle && U ? Zs({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : q,
      toHandle: ie.toHandle,
      toPosition: U && ie.toHandle ? ie.toHandle.position : od[Z.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: q
    };
    E(de), J = de;
  }
  function ne(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (A) {
        (D || ee) && T && U && y?.(T);
        const { inProgress: ce, ...ie } = J, de = {
          ...ie,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(ge, de), i && x?.(ge, de);
      }
      v(), cancelAnimationFrame(M), G = !1, U = !1, T = null, ee = null, L.removeEventListener("mousemove", I), L.removeEventListener("mouseup", ne), L.removeEventListener("touchmove", I), L.removeEventListener("touchend", ne);
    }
  }
  L.addEventListener("mousemove", I), L.addEventListener("mouseup", ne), L.addEventListener("touchmove", I), L.addEventListener("touchend", ne);
}
function gp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = pp, nodeLookup: d }) {
  const h = i === "target", f = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = Pn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const x = fp(void 0, w), E = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), k = w.classList.contains("connectable"), O = w.classList.contains("connectableend");
    if (!E || !x)
      return b;
    const V = {
      source: h ? E : r,
      sourceHandle: h ? C : o,
      target: h ? r : E,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const H = k && O && (n === Vo.Strict ? h && x === "source" || !h && x === "target" : E !== r || C !== o);
    b.isValid = H && u(V), b.toHandle = hp(E, x, C, d, n, !0);
  }
  return b;
}
const md = {
  onPointerDown: R2,
  isValid: gp
};
function j2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = wn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), k = E.sourceEvent.ctrlKey && Qr() ? 10 : 1, O = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, O * k);
      e.scaleTo(V);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, b = (E) => {
      const C = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !e)
        return;
      const k = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], O = [k[0] - y[0], k[1] - y[1]];
      y = k;
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), H = {
        x: C[0] - O[0] * V,
        y: C[1] - O[1] * V
      }, L = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: C[2]
      }, L, a);
    }, x = qf().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", f ? m : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Sn
  };
}
const Ta = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Ua = ({ x: t, y: e, zoom: n }) => Pa.translate(t, e).scale(n), _o = (t, e) => t.target.closest(`.${e}`), vp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), B2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Ga = (t, e = 0, n = B2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, mp = (t) => {
  const e = t.ctrlKey && Qr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function F2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (_o(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Sn(d), b = mp(d), x = h * Math.pow(2, b);
      r.scaleTo(n, x, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let v = o === ro.Vertical ? 0 : d.deltaX * f, m = o === ro.Horizontal ? 0 : d.deltaY * f;
    !Qr() && d.shiftKey && o !== ro.Vertical && (v = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ta(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function K2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = _o(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Z2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ta(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function W2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && vp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ta(i.transform));
  };
}
function X2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && vp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = Ta(s.transform);
      t.prevViewport = a, clearTimeout(t.timerId), t.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function q2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (_o(h, `${u}-flow__node`) || _o(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || _o(h, a) && m || _o(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function Y2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = qf().scaleExtent([e, n]).translateExtent(r), f = wn(t).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: Ho(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(mp);
  function y(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? fi : bs).transform(Ga(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: D, noPanClassName: _, onPaneContextMenu: N, userSelectionActive: $, panOnScroll: P, panOnDrag: A, panOnScrollMode: j, panOnScrollSpeed: q, preventScrolling: G, zoomOnPinch: T, zoomOnScroll: U, zoomOnDoubleClick: ee, zoomActivationKeyPressed: B, lib: Z, onTransformChange: W, connectionInProgress: J, paneClickDistance: oe, selectionOnDrag: I }) {
    $ && !u.isZoomingOrPanning && b();
    const ne = P && !B && !$;
    h.clickDistance(I ? 1 / 0 : !lr(oe) || oe < 0 ? 0 : oe);
    const ge = ne ? F2({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: j,
      panOnScrollSpeed: q,
      zoomOnPinch: T,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : K2({
      noWheelClassName: D,
      preventScrolling: G,
      d3ZoomHandler: v
    });
    if (f.on("wheel.zoom", ge, { passive: !1 }), !$) {
      const ie = Z2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ie);
      const de = W2({
        zoomPanValues: u,
        panOnDrag: A,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: W
      });
      h.on("zoom", de);
      const ye = X2({
        zoomPanValues: u,
        panOnDrag: A,
        panOnScroll: P,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ye);
    }
    const ce = q2({
      zoomActivationKeyPressed: B,
      panOnDrag: A,
      zoomOnScroll: U,
      panOnScroll: P,
      zoomOnDoubleClick: ee,
      zoomOnPinch: T,
      userSelectionActive: $,
      noPanClassName: _,
      noWheelClassName: D,
      lib: Z,
      connectionInProgress: J
    });
    h.filter(ce), ee ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function x(D, _, N) {
    const $ = Ua(D), P = h?.constrain()($, _, N);
    return P && await y(P), new Promise((A) => A(P));
  }
  async function E(D, _) {
    const N = Ua(D);
    return await y(N, _), new Promise(($) => $(N));
  }
  function C(D) {
    if (f) {
      const _ = Ua(D), N = f.property("__zoom");
      (N.k !== D.zoom || N.x !== D.x || N.y !== D.y) && h?.transform(f, _, null, { sync: !0 });
    }
  }
  function k() {
    const D = f ? Xf(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function O(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? fi : bs).scaleTo(Ga(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function V(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? fi : bs).scaleBy(Ga(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D) {
    h?.scaleExtent(D);
  }
  function L(D) {
    h?.translateExtent(D);
  }
  function M(D) {
    const _ = !lr(D) || D < 0 ? 0 : D;
    h?.clickDistance(_);
  }
  return {
    update: w,
    destroy: b,
    setViewport: E,
    setViewportConstrained: x,
    getViewport: k,
    scaleTo: O,
    scaleBy: V,
    setScaleExtent: H,
    setTranslateExtent: L,
    syncViewport: C,
    setClickDistance: M
  };
}
var yd;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(yd || (yd = {}));
var U2 = /* @__PURE__ */ re("<div><!></div>");
function Hr(t, e) {
  le(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => Ne.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), f = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ Le(e, [
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
  const y = An("svelteflow__node_id"), w = An("svelteflow__node_connectable");
  let b = /* @__PURE__ */ S(() => r() === "target"), x = /* @__PURE__ */ S(() => a() !== void 0 ? a() : w.value), E = Hn(), C = /* @__PURE__ */ S(() => E.ariaLabelConfig), k = null;
  tn(() => {
    if (h() || f()) {
      E.edges;
      let T = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Yb(T, k)) {
        const U = T ?? /* @__PURE__ */ new Map();
        id(k, U, f()), id(U, k, h());
      }
      k = new Map(T);
    }
  });
  let O = /* @__PURE__ */ S(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: T, toHandle: U, isValid: ee } = E.connection, B = T && T.nodeId === y && T.type === r() && T.id === n(), Z = U && U.nodeId === y && U.type === r() && U.id === n(), W = E.connectionMode === Vo.Strict ? T?.type !== r() : y !== T?.nodeId || n() !== T?.id;
    return [
      !0,
      B,
      Z,
      W,
      Z && ee
    ];
  }), V = /* @__PURE__ */ S(() => Bo(c(O), 5)), H = /* @__PURE__ */ S(() => c(V)[0]), L = /* @__PURE__ */ S(() => c(V)[1]), M = /* @__PURE__ */ S(() => c(V)[2]), D = /* @__PURE__ */ S(() => c(V)[3]), _ = /* @__PURE__ */ S(() => c(V)[4]);
  function N(T) {
    const U = E.onbeforeconnect ? E.onbeforeconnect(T) : T;
    U && (E.addEdge(U), E.onconnect?.(T));
  }
  function $(T) {
    const U = ip(T);
    T.currentTarget && (U && T.button === 0 || !U) && md.onPointerDown(T, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
      connectionRadius: E.connectionRadius,
      domNode: E.domNode,
      nodeLookup: E.nodeLookup,
      connectionMode: E.connectionMode,
      lib: "svelte",
      autoPanOnConnect: E.autoPanOnConnect,
      autoPanSpeed: E.autoPanSpeed,
      flowId: E.flowId,
      isValidConnection: d() ?? E.isValidConnection,
      updateConnection: E.updateConnection,
      cancelConnection: E.cancelConnection,
      panBy: E.panBy,
      onConnect: N,
      onConnectStart: (ee, B) => {
        E.onconnectstart?.(ee, {
          nodeId: B.nodeId,
          handleId: B.handleId,
          handleType: B.handleType
        });
      },
      onConnectEnd: (ee, B) => {
        E.onconnectend?.(ee, B);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: T.currentTarget
    });
  }
  function P(T) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(T, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const U = rp(T.target), ee = d() ?? E.isValidConnection, { connectionMode: B, clickConnectStartHandle: Z, flowId: W, nodeLookup: J } = E, { connection: oe, isValid: I } = md.isValid(T, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: B,
      fromNodeId: Z.nodeId,
      fromHandleId: Z.id ?? null,
      fromType: Z.type,
      isValidConnection: ee,
      flowId: W,
      doc: U,
      lib: "svelte",
      nodeLookup: J
    });
    I && oe && N(oe);
    const ne = structuredClone(lu(E.connection));
    delete ne.inProgress, ne.toPosition = ne.toHandle ? ne.toHandle.position : null, E.onclickconnectend?.(T, ne), E.clickConnectStartHandle = null;
  }
  var A = {
    get id() {
      return n();
    },
    set id(T = null) {
      n(T), p();
    },
    get type() {
      return r();
    },
    set type(T = "source") {
      r(T), p();
    },
    get position() {
      return o();
    },
    set position(T = Ne.Top) {
      o(T), p();
    },
    get style() {
      return i();
    },
    set style(T) {
      i(T), p();
    },
    get class() {
      return s();
    },
    set class(T) {
      s(T), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(T) {
      a(T), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(T = !0) {
      l(T), p();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(T = !0) {
      u(T), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(T) {
      d(T), p();
    },
    get onconnect() {
      return h();
    },
    set onconnect(T) {
      h(T), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(T) {
      f(T), p();
    },
    get children() {
      return v();
    },
    set children(T) {
      v(T), p();
    }
  }, j = U2(), q = () => {
  };
  ot(j, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${E.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      E.noDragClass,
      E.noPanClass,
      o(),
      s()
    ],
    onmousedown: $,
    ontouchstart: $,
    onclick: E.clickConnect ? P : void 0,
    onkeypress: q,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Nr]: {
      valid: c(_),
      connectingto: c(M),
      connectingfrom: c(L),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(H) || c(D)) && (c(H) || E.clickConnectStartHandle ? u() : l())
    }
  }));
  var G = Y(j);
  return ze(G, () => v() ?? Ze), X(j), z(t, j), ue(A);
}
se(
  Hr,
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
var G2 = /* @__PURE__ */ re("<!> <!>", 1);
function Mu(t, e) {
  le(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => Ne.Top), o = g(e, "sourcePosition", 23, () => Ne.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = Ne.Top) {
      r(d), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Ne.Bottom) {
      o(d), p();
    }
  }, s = G2(), a = Q(s);
  Hr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = R(a), u = R(l);
  return Hr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Me(() => pt(l, ` ${n()?.label ?? ""} `)), z(t, s), ue(i);
}
se(Mu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var J2 = /* @__PURE__ */ re(" <!>", 1);
function yp(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => Ne.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), p();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = Ne.Bottom) {
      r(l), p();
    }
  };
  Oe();
  var i = J2(), s = Q(i), a = R(s);
  return Hr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Me(() => pt(s, `${n()?.label ?? ""} `)), z(t, i), ue(o);
}
se(yp, { data: {}, sourcePosition: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ re(" <!>", 1);
function wp(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => Ne.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = Ne.Top) {
      r(l), p();
    }
  };
  Oe();
  var i = Q2(), s = Q(i), a = R(s);
  return Hr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Me(() => pt(s, `${n()?.label ?? ""} `)), z(t, i), ue(o);
}
se(wp, { data: {}, targetPosition: {} }, [], [], !0);
function bp(t, e) {
}
se(bp, {}, [], [], !0);
function Ja(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function xp(t, e) {
  const n = /* @__PURE__ */ S(Hn), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? Ja(t, c(r), e) : o = go(() => {
    Be(() => {
      Ja(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      Ja(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function kp() {
  let t = /* @__PURE__ */ we(typeof window > "u");
  if (c(t)) {
    const e = go(() => {
      Be(() => {
        K(t, !1), e?.();
      });
    });
  }
  return {
    get value() {
      return c(t);
    }
  };
}
const wd = (t) => Gb(t), ex = (t) => Uf(t);
function Un(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Ws = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var tx = /* @__PURE__ */ re("<div><!></div>");
const nx = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Cp(t, e) {
  le(e, !0), it(t, nx);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  const h = Hn(), f = An("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ S(() => h.visible.edges.get(f)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(x = 0) {
      n(x), p();
    },
    get y() {
      return r();
    },
    set y(x = 0) {
      r(x), p();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), p();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), p();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(x = !1) {
      s(x), p();
    },
    get transparent() {
      return a();
    },
    set transparent(x = !1) {
      a(x), p();
    },
    get class() {
      return l();
    },
    set class(x) {
      l(x), p();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), p();
    }
  }, y = tx(), w = () => {
    s() && h.handleEdgeSelection(f);
  };
  ot(
    y,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [Bn]: x
    }),
    [
      () => ({
        display: kp().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Un(o()),
        height: Un(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = Y(y);
  return ze(b, () => u() ?? Ze), X(y), Bt(y, (x, E) => xp?.(x, E), () => "edge-labels"), z(t, y), ue(m);
}
se(
  Cp,
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
var rx = /* @__PURE__ */ _e("<path></path>"), ox = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Fi(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), f = g(e, "class", 7), v = /* @__PURE__ */ Le(e, [
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
  var m = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), p();
    },
    get path() {
      return r();
    },
    set path(k) {
      r(k), p();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), p();
    },
    get labelX() {
      return i();
    },
    set labelX(k) {
      i(k), p();
    },
    get labelY() {
      return s();
    },
    set labelY(k) {
      s(k), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(k) {
      u(k), p();
    },
    get style() {
      return d();
    },
    set style(k) {
      d(k), p();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(k = 20) {
      h(k), p();
    },
    get class() {
      return f();
    },
    set class(k) {
      f(k), p();
    }
  }, y = ox(), w = Q(y), b = R(w);
  {
    var x = (k) => {
      var O = rx();
      ot(O, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), z(k, O);
    };
    ae(b, (k) => {
      h() > 0 && k(x);
    });
  }
  var E = R(b);
  {
    var C = (k) => {
      Cp(k, {
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
        children: (O, V) => {
          Oe();
          var H = He();
          Me(() => pt(H, o())), z(O, H);
        },
        $$slots: { default: !0 }
      });
    };
    ae(E, (k) => {
      o() && k(C);
    });
  }
  return Me(() => {
    Te(w, "id", n()), Te(w, "d", r()), an(w, 0, Sr(["svelte-flow__edge-path", f()])), Te(w, "marker-start", l()), Te(w, "marker-end", u()), Rt(w, d());
  }), z(t, y), ue(m);
}
se(
  Fi,
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
function Du(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), f = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ S(() => sp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ S(() => Bo(c(w), 3)), x = /* @__PURE__ */ S(() => c(b)[0]), E = /* @__PURE__ */ S(() => c(b)[1]), C = /* @__PURE__ */ S(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(O) {
      n(O), p();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(O) {
      r(O), p();
    },
    get label() {
      return o();
    },
    set label(O) {
      o(O), p();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(O) {
      i(O), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(O) {
      s(O), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(O) {
      a(O), p();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(O) {
      l(O), p();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(O) {
      u(O), p();
    },
    get sourceX() {
      return d();
    },
    set sourceX(O) {
      d(O), p();
    },
    get sourceY() {
      return h();
    },
    set sourceY(O) {
      h(O), p();
    },
    get style() {
      return f();
    },
    set style(O) {
      f(O), p();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(O) {
      v(O), p();
    },
    get targetX() {
      return m();
    },
    set targetX(O) {
      m(O), p();
    },
    get targetY() {
      return y();
    },
    set targetY(O) {
      y(O), p();
    }
  };
  return Fi(t, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c(E);
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
  }), ue(k);
}
se(
  Du,
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
function $p(t, e) {
  le(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), f = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ S(() => Nu({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ S(() => Bo(c(m), 3)), w = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), x = /* @__PURE__ */ S(() => c(y)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(C) {
      n(C), p();
    },
    get label() {
      return r();
    },
    set label(C) {
      r(C), p();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(C) {
      o(C), p();
    },
    get style() {
      return i();
    },
    set style(C) {
      i(C), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), p();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(C) {
      l(C), p();
    },
    get sourceX() {
      return u();
    },
    set sourceX(C) {
      u(C), p();
    },
    get sourceY() {
      return d();
    },
    set sourceY(C) {
      d(C), p();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(C) {
      h(C), p();
    },
    get targetX() {
      return f();
    },
    set targetX(C) {
      f(C), p();
    },
    get targetY() {
      return v();
    },
    set targetY(C) {
      v(C), p();
    }
  };
  return Fi(t, {
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
  }), ue(E);
}
se(
  $p,
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
function Sp(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), f = /* @__PURE__ */ S(() => lp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ S(() => Bo(c(f), 3)), m = /* @__PURE__ */ S(() => c(v)[0]), y = /* @__PURE__ */ S(() => c(v)[1]), w = /* @__PURE__ */ S(() => c(v)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), p();
    },
    get targetX() {
      return o();
    },
    set targetX(x) {
      o(x), p();
    },
    get targetY() {
      return i();
    },
    set targetY(x) {
      i(x), p();
    },
    get label() {
      return s();
    },
    set label(x) {
      s(x), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get style() {
      return h();
    },
    set style(x) {
      h(x), p();
    }
  };
  return Fi(t, {
    get path() {
      return c(m);
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
      return h();
    }
  }), ue(b);
}
se(
  Sp,
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
function _p(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), f = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ S(() => Nu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => Bo(c(m), 3)), w = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), x = /* @__PURE__ */ S(() => c(y)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(C) {
      o(C), p();
    },
    get targetX() {
      return i();
    },
    set targetX(C) {
      i(C), p();
    },
    get targetY() {
      return s();
    },
    set targetY(C) {
      s(C), p();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(C) {
      a(C), p();
    },
    get label() {
      return l();
    },
    set label(C) {
      l(C), p();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(C) {
      u(C), p();
    },
    get markerStart() {
      return d();
    },
    set markerStart(C) {
      d(C), p();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(C) {
      h(C), p();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), p();
    },
    get style() {
      return v();
    },
    set style(C) {
      v(C), p();
    }
  };
  return Fi(t, {
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
      return h();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return v();
    }
  }), ue(E);
}
se(
  _p,
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
class ix extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ we(0);
  #n = /* @__PURE__ */ we(0);
  #r = pr || -1;
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(e) {
    if (super(), e) {
      for (var [n, r] of e)
        super.set(n, r);
      this.#n.v = super.size;
    }
  }
  /**
   * If the source is being created inside the same reaction as the SvelteMap instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #o(e) {
    return pr === this.#r ? /* @__PURE__ */ we(e) : vr(e);
  }
  /** @param {K} key */
  has(e) {
    var n = this.#e, r = n.get(e);
    if (r === void 0) {
      var o = super.get(e);
      if (o !== void 0)
        r = this.#o(0), n.set(e, r);
      else
        return c(this.#t), !1;
    }
    return c(r), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(e, n) {
    this.#i(), super.forEach(e, n);
  }
  /** @param {K} key */
  get(e) {
    var n = this.#e, r = n.get(e);
    if (r === void 0) {
      var o = super.get(e);
      if (o !== void 0)
        r = this.#o(0), n.set(e, r);
      else {
        c(this.#t);
        return;
      }
    }
    return c(r), super.get(e);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(e, n) {
    var r = this.#e, o = r.get(e), i = super.get(e), s = super.set(e, n), a = this.#t;
    if (o === void 0)
      o = this.#o(0), r.set(e, o), K(this.#n, super.size), jn(a);
    else if (i !== n) {
      jn(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && jn(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), K(this.#n, super.size), K(r, -1), jn(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      K(this.#n, 0);
      for (var n of e.values())
        K(n, -1);
      jn(this.#t), e.clear();
    }
  }
  #i() {
    c(this.#t);
    var e = this.#e;
    if (this.#n.v !== e.size) {
      for (var n of super.keys())
        if (!e.has(n)) {
          var r = this.#o(0);
          e.set(n, r);
        }
    }
    for ([, r] of this.#e)
      c(r);
  }
  keys() {
    return c(this.#t), super.keys();
  }
  values() {
    return this.#i(), super.values();
  }
  entries() {
    return this.#i(), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return c(this.#n), super.size;
  }
}
class sx {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = po(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const ax = /\(.+\)/, lx = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Ep extends sx {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = ax.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => lx.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ct(o, "change", i)
    );
  }
}
function ux(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Pu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function bd(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: x } = t;
      if (d2({
        sourceNode: h,
        targetNode: f,
        width: b,
        height: x,
        transform: w
      }))
        y.set(h.id, h), y.set(f.id, f);
      else
        continue;
    }
    const v = o.get(d.id);
    if (v && d === v.edge && h == v.sourceNode && f == v.targetNode) {
      u.set(d.id, v);
      continue;
    }
    const m = y2({
      id: d.id,
      sourceNode: h,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && u.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: c2({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: h,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: h,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const Pp = {
  input: yp,
  output: wp,
  default: Mu,
  group: bp
}, Op = {
  straight: Sp,
  smoothstep: $p,
  default: Du,
  step: _p
};
function cx(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = Ri(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Ou(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function dx(t) {
  class e {
    #e = /* @__PURE__ */ S(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      K(this.#e, r);
    }
    #t = /* @__PURE__ */ we(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      K(this.#t, r);
    }
    #n = /* @__PURE__ */ we(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      K(this.#n, r);
    }
    #r = /* @__PURE__ */ we(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      K(this.#r, r);
    }
    #o = /* @__PURE__ */ we(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      K(this.#o, r);
    }
    #i = /* @__PURE__ */ S(() => {
      const r = S2(t.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: t.props.elevateNodesOnSelect ?? !0,
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
      K(this.#i, r);
    }
    #a = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      K(this.#a, r);
    }
    #s = /* @__PURE__ */ S(() => (T2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      K(this.#s, r);
    }
    get nodes() {
      return this.nodesInitialized, t.nodes;
    }
    set nodes(r) {
      t.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      t.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      K(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      K(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ S(() => {
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
      let h, f;
      const v = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: t.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: m, width: y, height: w } = this, b = [m.x, m.y, m.zoom];
        h = ux(s, b, y, w), f = bd({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = bd(v);
      return { nodes: h, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #h = /* @__PURE__ */ S(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      K(this.#h, r);
    }
    #p = /* @__PURE__ */ S(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      K(this.#p, r);
    }
    #f = /* @__PURE__ */ S(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#f);
    }
    set nodesFocusable(r) {
      K(this.#f, r);
    }
    #y = /* @__PURE__ */ S(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      K(this.#y, r);
    }
    #v = /* @__PURE__ */ S(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #w = /* @__PURE__ */ S(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      K(this.#w, r);
    }
    #m = /* @__PURE__ */ S(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      K(this.#m, r);
    }
    #g = /* @__PURE__ */ S(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      K(this.#g, r);
    }
    #b = /* @__PURE__ */ S(() => t.props.nodeExtent ?? xl);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => t.props.translateExtent ?? xl);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #k = /* @__PURE__ */ S(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      K(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      K(this.#C, r);
    }
    #$ = /* @__PURE__ */ S(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#$, r);
    }
    #S = /* @__PURE__ */ S(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      K(this.#S, r);
    }
    #_ = /* @__PURE__ */ S(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#_, r);
    }
    #E = /* @__PURE__ */ S(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      K(this.#E, r);
    }
    #P = /* @__PURE__ */ S(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      K(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ S(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#O);
    }
    set snapGrid(r) {
      K(this.#O, r);
    }
    #N = /* @__PURE__ */ we(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      K(this.#N, r);
    }
    #T = /* @__PURE__ */ we(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      K(this.#T, r);
    }
    #A = /* @__PURE__ */ we(!1);
    get selectionKeyPressed() {
      return c(this.#A);
    }
    set selectionKeyPressed(r) {
      K(this.#A, r);
    }
    #z = /* @__PURE__ */ we(!1);
    get multiselectionKeyPressed() {
      return c(this.#z);
    }
    set multiselectionKeyPressed(r) {
      K(this.#z, r);
    }
    #M = /* @__PURE__ */ we(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      K(this.#M, r);
    }
    #D = /* @__PURE__ */ we(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      K(this.#D, r);
    }
    #V = /* @__PURE__ */ we(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#V, r);
    }
    #H = /* @__PURE__ */ we(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      K(this.#H, r);
    }
    #I = /* @__PURE__ */ we("");
    get ariaLiveMessage() {
      return c(this.#I);
    }
    set ariaLiveMessage(r) {
      K(this.#I, r);
    }
    #L = /* @__PURE__ */ S(() => t.props.selectionMode ?? Fs.Partial);
    get selectionMode() {
      return c(this.#L);
    }
    set selectionMode(r) {
      K(this.#L, r);
    }
    #R = /* @__PURE__ */ S(() => ({ ...Pp, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      K(this.#R, r);
    }
    #j = /* @__PURE__ */ S(() => ({ ...Op, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      K(this.#j, r);
    }
    #B = /* @__PURE__ */ S(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      K(this.#B, r);
    }
    #F = /* @__PURE__ */ S(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#F);
    }
    set noDragClass(r) {
      K(this.#F, r);
    }
    #K = /* @__PURE__ */ S(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      K(this.#K, r);
    }
    #Z = /* @__PURE__ */ S(() => a2(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      K(this.#Z, r);
    }
    #W = /* @__PURE__ */ we(cx(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      K(this.#W, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ we(
      // _connection is viewport independent and originating from XYHandle
      kl
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      K(this.#X, r);
    }
    #q = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: Bi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      K(this.#q, r);
    }
    #Y = /* @__PURE__ */ S(() => t.props.connectionMode ?? Vo.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      K(this.#Y, r);
    }
    #U = /* @__PURE__ */ S(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      K(this.#U, r);
    }
    #G = /* @__PURE__ */ S(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #J = /* @__PURE__ */ S(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      K(this.#J, r);
    }
    #Q = /* @__PURE__ */ S(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      K(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => w2(t.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      K(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => t.props.onflowerror ?? r2);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      K(this.#de, r);
    }
    #he = /* @__PURE__ */ S(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      K(this.#he, r);
    }
    #fe = /* @__PURE__ */ S(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      K(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      K(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      K(this.#ge, r);
    }
    #ve = /* @__PURE__ */ we(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      K(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      K(this.#ye, r);
    }
    #we = /* @__PURE__ */ S(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      K(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await t2(
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
    _prefersDark = new Ep("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ S(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      K(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = kl, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Hn() {
  const t = An(Xs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const Xs = Symbol();
function Np(t) {
  const e = dx(t);
  function n(M) {
    e.nodeTypes = {
      ...Pp,
      ...M
    };
  }
  function r(M) {
    e.edgeTypes = {
      ...Op,
      ...M
    };
  }
  function o(M) {
    e.edges = p2(M, e.edges);
  }
  const i = (M, D = !1) => {
    e.nodes = e.nodes.map((_) => {
      const N = M.get(_.id);
      return N ? { ..._, position: N.position, dragging: D } : _;
    });
  };
  function s(M) {
    const { changes: D, updatedInternals: _ } = O2(M, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!_)
      return;
    C2(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const N = /* @__PURE__ */ new Map();
    for (const $ of D) {
      const P = e.nodeLookup.get($.id)?.internals.userNode;
      if (!P)
        continue;
      const A = { ...P };
      switch ($.type) {
        case "dimensions": {
          const j = { ...A.measured, ...$.dimensions };
          $.setAttributes && (A.width = $.dimensions?.width ?? A.width, A.height = $.dimensions?.height ?? A.height), A.measured = j;
          break;
        }
        case "position":
          A.position = $.position ?? A.position;
          break;
      }
      N.set($.id, A);
    }
    e.nodes = e.nodes.map(($) => N.get($.id) ?? $);
  }
  function a(M) {
    const D = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = M, e.fitViewResolver = D, e.nodes = [...e.nodes], D.promise;
  }
  async function l(M, D, _) {
    const N = typeof _?.zoom < "u" ? _.zoom : e.maxZoom, $ = e.panZoom;
    return $ ? (await $.setViewport({
      x: e.width / 2 - M * N,
      y: e.height / 2 - D * N,
      zoom: N
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(M, D) {
    const _ = e.panZoom;
    return _ ? _.scaleBy(M, D) : Promise.resolve(!1);
  }
  function d(M) {
    return u(1.2, M);
  }
  function h(M) {
    return u(1 / 1.2, M);
  }
  function f(M) {
    const D = e.panZoom;
    D && (D.setScaleExtent([M, e.maxZoom]), e.minZoom = M);
  }
  function v(M) {
    const D = e.panZoom;
    D && (D.setScaleExtent([e.minZoom, M]), e.maxZoom = M);
  }
  function m(M) {
    const D = e.panZoom;
    D && (D.setTranslateExtent(M), e.translateExtent = M);
  }
  function y(M, D = null) {
    let _ = !1;
    const N = M.map(($) => (!D || D.has($.id)) && $.selected ? (_ = !0, { ...$, selected: !1 }) : $);
    return [_, N];
  }
  function w(M) {
    const D = M?.nodes ? new Set(M.nodes.map((j) => j.id)) : null, [_, N] = y(e.nodes, D);
    _ && (e.nodes = N);
    const $ = M?.edges ? new Set(M.edges.map((j) => j.id)) : null, [P, A] = y(e.edges, $);
    P && (e.edges = A);
  }
  function b(M) {
    const D = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((_) => {
      const N = M.includes(_.id), $ = D && _.selected || N;
      return !!_.selected !== $ ? { ..._, selected: $ } : _;
    }), D || w({ nodes: [] });
  }
  function x(M) {
    const D = e.multiselectionKeyPressed;
    e.edges = e.edges.map((_) => {
      const N = M.includes(_.id), $ = D && _.selected || N;
      return !!_.selected !== $ ? { ..._, selected: $ } : _;
    }), D || w({ edges: [] });
  }
  function E(M, D, _) {
    const N = e.nodeLookup.get(M);
    if (!N) {
      console.warn("012", Ci.error012(M));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, N.selected ? (D || N.selected && e.multiselectionKeyPressed) && (w({ nodes: [N], edges: [] }), requestAnimationFrame(() => _?.blur())) : b([M]);
  }
  function C(M) {
    const D = e.edgeLookup.get(M);
    if (!D) {
      console.warn("012", Ci.error012(M));
      return;
    }
    (D.selectable || e.elementsSelectable && typeof D.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, D.selected ? D.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : x([M]));
  }
  function k(M, D) {
    const { nodeExtent: _, snapGrid: N, nodeOrigin: $, nodeLookup: P, nodesDraggable: A, onerror: j } = e, q = /* @__PURE__ */ new Map(), G = N?.[0] ?? 5, T = N?.[1] ?? 5, U = M.x * G * D, ee = M.y * T * D;
    for (const B of P.values()) {
      if (!(B.selected && (B.draggable || A && typeof B.draggable > "u")))
        continue;
      let Z = {
        x: B.internals.positionAbsolute.x + U,
        y: B.internals.positionAbsolute.y + ee
      };
      N && (Z = ji(Z, N));
      const { position: W, positionAbsolute: J } = Gf({
        nodeId: B.id,
        nextPosition: Z,
        nodeLookup: P,
        nodeExtent: _,
        nodeOrigin: $,
        onError: j
      });
      B.position = W, B.internals.positionAbsolute = J, q.set(B.id, B);
    }
    i(q);
  }
  function O(M) {
    return N2({
      delta: M,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const V = (M) => {
    e._connection = { ...M };
  };
  function H() {
    e._connection = kl;
  }
  function L() {
    e.resetStoreValues(), w();
  }
  return Object.assign(e, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: v,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: x,
    handleNodeSelection: E,
    handleEdgeSelection: C,
    moveSelectedNodes: k,
    panBy: O,
    updateConnection: V,
    cancelConnection: H,
    reset: L
  });
}
function hx(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, f = Y2({
    domNode: t,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), v = f.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && h([v.x, v.y, v.zoom]), u(f), f.update(e), {
    update(m) {
      f.update(m);
    }
  };
}
var fx = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Tp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), f = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), x = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let k = !1;
  Be(() => {
    !k && n().viewportInitialized && (w()?.(), k = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(L) {
      n(L), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(L) {
      r(L), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(L) {
      o(L), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(L) {
      i(L), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(L) {
      s(L), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(L) {
      a(L), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(L) {
      l(L), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(L) {
      u(L), p();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(L) {
      d(L), p();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(L) {
      h(L), p();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(L) {
      f(L), p();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(L) {
      v(L), p();
    },
    get onmove() {
      return m();
    },
    set onmove(L) {
      m(L), p();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(L) {
      y(L), p();
    },
    get oninit() {
      return w();
    },
    set oninit(L) {
      w(L), p();
    },
    get children() {
      return b();
    },
    set children(L) {
      b(L), p();
    }
  }, V = fx(), H = Y(V);
  return ze(H, b), X(V), Bt(V, (L, M) => hx?.(L, M), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (L) => {
      n(n().dragging = L, !0);
    },
    setPanZoomInstance: (L) => {
      n(n().panZoom = L, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(E),
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
    paneClickDistance: h(),
    selectionOnDrag: f(),
    onTransformChange: (L) => {
      n(n().viewport = { x: L[0], y: L[1], zoom: L[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), z(t, V), ue(O);
}
se(
  Tp,
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
function xd(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function kd(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Cd(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var px = /* @__PURE__ */ re("<div><!></div>");
function Ap(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, f = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ S(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ S(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), x = !1;
  function E(P) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const A = P.target === h, j = !A && !!P.target.closest(".nokey"), q = i() && A || n().selectionKeyPressed;
    if (j || !c(w) || !q || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), x = !1;
    const { x: G, y: T } = Pn(P, f);
    n(n().selectionRect = { width: 0, height: 0, startX: G, startY: T, x: G, y: T }, !0), A || (P.stopPropagation(), P.preventDefault());
  }
  function C(P) {
    if (!c(w) || !f || !n().selectionRect)
      return;
    const A = Pn(P, f), { startX: j = 0, startY: q = 0 } = n().selectionRect;
    if (!x) {
      const B = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(A.x - j, A.y - q) <= B)
        return;
      n().unselectNodesAndEdges(), l()?.(P);
    }
    x = !0;
    const G = {
      ...n().selectionRect,
      x: A.x < j ? A.x : j,
      y: A.y < q ? A.y : q,
      width: Math.abs(A.x - j),
      height: Math.abs(A.y - q)
    }, T = v, U = m;
    v = new Set(Pu(
      n().nodeLookup,
      G,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Fs.Partial,
      !0
    ).map((B) => B.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const B of v) {
      const Z = n().connectionLookup.get(B);
      if (Z)
        for (const { edgeId: W } of Z.values()) {
          const J = n().edgeLookup.get(W);
          J && (J.selectable ?? ee) && m.add(W);
        }
    }
    Cd(T, v) || n(n().nodes = n().nodes.map(kd(v)), !0), Cd(U, m) || n(n().edges = n().edges.map(kd(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = G, !0);
  }
  function k(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !x && P.target === h && H?.(P), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), x && u()?.(P));
  }
  const O = (P) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      P.preventDefault();
      return;
    }
    a()?.({ event: P });
  }, V = (P) => {
    x && (P.stopPropagation(), x = !1);
  };
  function H(P) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: P }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var L = {
    get store() {
      return n();
    },
    set store(P) {
      n(P), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(P = !0) {
      r(P), p();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(P = 1) {
      o(P), p();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(P) {
      i(P), p();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(P) {
      s(P), p();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(P) {
      a(P), p();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(P) {
      l(P), p();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(P) {
      u(P), p();
    },
    get children() {
      return d();
    },
    set children(P) {
      d(P), p();
    }
  }, M = px();
  let D;
  var _ = /* @__PURE__ */ S(() => c(b) ? void 0 : xd(H, h));
  M.__click = function(...P) {
    c(_)?.apply(this, P);
  }, M.__pointermove = function(...P) {
    (c(b) ? C : void 0)?.apply(this, P);
  }, M.__pointerup = function(...P) {
    (c(b) ? k : void 0)?.apply(this, P);
  };
  var N = /* @__PURE__ */ S(() => xd(O, h));
  M.__contextmenu = function(...P) {
    c(N)?.apply(this, P);
  };
  var $ = Y(M);
  return ze($, d), X(M), jt(M, (P) => h = P, () => h), Me((P) => D = an(M, 1, "svelte-flow__pane svelte-flow__container", null, D, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), Ms(
    "pointerdown",
    M,
    function(...P) {
      (c(b) ? E : void 0)?.apply(this, P);
    },
    !0
  ), Ms(
    "click",
    M,
    function(...P) {
      (c(b) ? V : void 0)?.apply(this, P);
    },
    !0
  ), z(t, M), ue(L);
}
yo(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Ap,
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
var gx = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function zp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), p();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), p();
    }
  }, i = gx();
  let s;
  var a = Y(i);
  return ze(a, r), X(i), Me(() => s = Rt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), z(t, i), ue(o);
}
se(zp, { store: {}, children: {} }, [], [], !0);
function Mp(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = D2({
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
  return l(t, e), {
    update(u) {
      l(t, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var vx = /* @__PURE__ */ re('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), mx = /* @__PURE__ */ re('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const yx = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Dp(t, e) {
  le(e, !0), it(t, yx);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), p();
    }
  }, o = mx(), i = Q(o), s = Y(i, !0);
  X(i);
  var a = R(i, 2), l = Y(a, !0);
  X(a);
  var u = R(a, 2);
  {
    var d = (h) => {
      var f = vx(), v = Y(f, !0);
      X(f), Me(() => {
        Te(f, "id", `${wx}-${n().flowId}`), pt(v, n().ariaLiveMessage);
      }), z(h, f);
    };
    ae(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Me(() => {
    Te(i, "id", `${Vp}-${n().flowId}`), pt(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Te(a, "id", `${Hp}-${n().flowId}`), pt(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), z(t, o), ue(r);
}
se(Dp, { store: {} }, [], [], !0);
const Vp = "svelte-flow__node-desc", Hp = "svelte-flow__edge-desc", wx = "svelte-flow__aria-live";
var bx = /* @__PURE__ */ re("<div><!></div>");
function Ip(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), f = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ S(() => Xt(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => Xt(r().selected, !1)), w = /* @__PURE__ */ S(() => r().draggable), b = /* @__PURE__ */ S(() => r().selectable), x = /* @__PURE__ */ S(() => Xt(r().deletable, !0)), E = /* @__PURE__ */ S(() => r().connectable), C = /* @__PURE__ */ S(() => r().focusable), k = /* @__PURE__ */ S(() => Xt(r().hidden, !1)), O = /* @__PURE__ */ S(() => Xt(r().dragging, !1)), V = /* @__PURE__ */ S(() => Xt(r().style, "")), H = /* @__PURE__ */ S(() => r().class), L = /* @__PURE__ */ S(() => Xt(r().type, "default")), M = /* @__PURE__ */ S(() => r().parentId), D = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), N = /* @__PURE__ */ S(() => Xt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ S(() => Xt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ S(() => r().initialWidth), A = /* @__PURE__ */ S(() => r().initialHeight), j = /* @__PURE__ */ S(() => r().width), q = /* @__PURE__ */ S(() => r().height), G = /* @__PURE__ */ S(() => r().dragHandle), T = /* @__PURE__ */ S(() => Xt(r().internals.z, 0)), U = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), B = /* @__PURE__ */ S(() => r().internals.userNode), { id: Z } = r(), W = /* @__PURE__ */ S(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ S(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ S(() => c(E) ?? n().nodesConnectable), I = /* @__PURE__ */ S(() => tp(r())), ne = /* @__PURE__ */ S(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ S(() => c(I) && c(ne)), ce = /* @__PURE__ */ S(() => c(C) ?? n().nodesFocusable);
  function ie(me) {
    return n().parentLookup.has(me);
  }
  let de = /* @__PURE__ */ S(() => ie(Z)), ye = /* @__PURE__ */ we(null), Ce = null, be = c(L), he = c(D), xe = c(_), Pe = /* @__PURE__ */ S(() => n().nodeTypes[c(L)] ?? Mu), te = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  io("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), io("svelteflow__node_id", Z);
  let Re = /* @__PURE__ */ S(() => {
    const me = c(N) === void 0 ? c(j) ?? c(P) : c(j), Ae = c($) === void 0 ? c(q) ?? c(A) : c(q);
    if (!(me === void 0 && Ae === void 0 && c(V) === void 0))
      return `${c(V)};${me ? `width:${Un(me)};` : ""}${Ae ? `height:${Un(Ae)};` : ""}`;
  });
  Be(() => {
    (c(L) !== be || c(D) !== he || c(_) !== xe) && c(ye) !== null && requestAnimationFrame(() => {
      c(ye) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Z, { id: Z, nodeElement: c(ye), force: !0 }]]));
    }), be = c(L), he = c(D), xe = c(_);
  }), Be(() => {
    o() && (!c(ge) || c(ye) !== Ce) && (Ce && o().unobserve(Ce), c(ye) && o().observe(c(ye)), Ce = c(ye));
  }), Vi(() => {
    Ce && o()?.unobserve(Ce);
  });
  function De(me) {
    c(J) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Z), s()?.({ node: c(B), event: me });
  }
  function Xe(me) {
    if (!(op(me) || n().disableKeyboardA11y))
      if (Yf.includes(me.key) && c(J)) {
        const Ae = me.key === "Escape";
        n().handleNodeSelection(Z, Ae, c(ye));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(Ws, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(te)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Ws[me.key], me.shiftKey ? 4 : 1));
  }
  const Fe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ye)?.matches(":focus-visible"))
      return;
    const { width: me, height: Ae, viewport: ct } = n();
    Pu(/* @__PURE__ */ new Map([[Z, r()]]), { x: 0, y: 0, width: me, height: Ae }, [ct.x, ct.y, ct.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ct.zoom });
  };
  var st = {
    get store() {
      return n();
    },
    set store(me) {
      n(me), p();
    },
    get node() {
      return r();
    },
    set node(me) {
      r(me), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(me) {
      o(me), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(me) {
      i(me), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(me) {
      s(me), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(me) {
      a(me), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(me) {
      l(me), p();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(me) {
      u(me), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(me) {
      d(me), p();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(me) {
      h(me), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(me) {
      f(me), p();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(me) {
      v(me), p();
    }
  }, ut = pe(), mt = Q(ut);
  {
    var nt = (me) => {
      var Ae = bx();
      ot(Ae, () => ({
        "data-id": Z,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(L)}`,
          c(H)
        ],
        style: c(Re),
        onclick: De,
        onpointerenter: d() ? (qe) => d()({ node: c(B), event: qe }) : void 0,
        onpointerleave: h() ? (qe) => h()({ node: c(B), event: qe }) : void 0,
        onpointermove: f() ? (qe) => f()({ node: c(B), event: qe }) : void 0,
        oncontextmenu: v() ? (qe) => v()({ node: c(B), event: qe }) : void 0,
        onkeydown: c(ce) ? Xe : void 0,
        onfocus: c(ce) ? Fe : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Vp}-${n().flowId}`,
        ...r().domAttributes,
        [Nr]: {
          dragging: c(O),
          selected: c(y),
          draggable: c(W),
          connectable: c(oe),
          selectable: c(J),
          nopan: c(W),
          parent: c(de)
        },
        [Bn]: {
          "z-index": c(T),
          transform: `translate(${c(U) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(I) ? "visible" : "hidden"
        }
      }));
      var ct = Y(Ae);
      zt(ct, () => c(Pe), (qe, gt) => {
        gt(qe, {
          get data() {
            return c(m);
          },
          get id() {
            return Z;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(D);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(T);
          },
          get dragging() {
            return c(O);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(G);
          },
          get parentId() {
            return c(M);
          },
          get type() {
            return c(L);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(U);
          },
          get positionAbsoluteY() {
            return c(ee);
          },
          get width() {
            return c(j);
          },
          get height() {
            return c(q);
          }
        });
      }), X(Ae), Bt(Ae, (qe, gt) => Mp?.(qe, gt), () => ({
        nodeId: Z,
        isSelectable: c(J),
        disabled: !c(W),
        handleSelector: c(G),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (qe, gt, Vt, wt) => {
          a()?.({ event: qe, targetNode: Vt, nodes: wt });
        },
        onDragStart: (qe, gt, Vt, wt) => {
          l()?.({ event: qe, targetNode: Vt, nodes: wt });
        },
        onDragStop: (qe, gt, Vt, wt) => {
          u()?.({ event: qe, targetNode: Vt, nodes: wt });
        },
        store: n()
      })), jt(Ae, (qe) => K(ye, qe), () => c(ye)), z(me, Ae);
    };
    ae(mt, (me) => {
      c(k) || me(nt);
    });
  }
  return z(t, ut), ue(st);
}
se(
  Ip,
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
var xx = /* @__PURE__ */ re('<div class="svelte-flow__nodes"></div>');
function Lp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      w.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Vi(() => {
    f?.disconnect();
  });
  var v = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), p();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), p();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), p();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), p();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), p();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), p();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), p();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(y) {
      u(y), p();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), p();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(y) {
      h(y), p();
    }
  }, m = xx();
  return At(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Ip(y, {
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
        return h();
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
  }), X(m), z(t, m), ue(v);
}
se(
  Lp,
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
var kx = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Rp(t, e) {
  le(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), h = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), v = /* @__PURE__ */ S(() => n().targetY), m = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), w = /* @__PURE__ */ S(() => Xt(n().animated, !1)), b = /* @__PURE__ */ S(() => Xt(n().selected, !1)), x = /* @__PURE__ */ S(() => n().label), E = /* @__PURE__ */ S(() => n().labelStyle), C = /* @__PURE__ */ S(() => Xt(n().data, () => ({}), !0)), k = /* @__PURE__ */ S(() => n().style), O = /* @__PURE__ */ S(() => n().interactionWidth), V = /* @__PURE__ */ S(() => Xt(n().type, "default")), H = /* @__PURE__ */ S(() => n().sourceHandle), L = /* @__PURE__ */ S(() => n().targetHandle), M = /* @__PURE__ */ S(() => n().markerStart), D = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), N = /* @__PURE__ */ S(() => n().focusable), $ = /* @__PURE__ */ S(() => Xt(n().deletable, !0)), P = /* @__PURE__ */ S(() => n().hidden), A = /* @__PURE__ */ S(() => n().zIndex), j = /* @__PURE__ */ S(() => n().class), q = /* @__PURE__ */ S(() => n().ariaLabel), G = null;
  const { id: T } = n();
  io("svelteflow__edge_id", T);
  let U = /* @__PURE__ */ S(() => c(_) ?? r().elementsSelectable), ee = /* @__PURE__ */ S(() => c(N) ?? r().edgesFocusable), B = /* @__PURE__ */ S(() => r().edgeTypes[c(V)] ?? Du), Z = /* @__PURE__ */ S(() => c(M) ? `url('#${$l(c(M), r().flowId)}')` : void 0), W = /* @__PURE__ */ S(() => c(D) ? `url('#${$l(c(D), r().flowId)}')` : void 0);
  function J(de) {
    const ye = r().edgeLookup.get(T);
    ye && (c(U) && r().handleEdgeSelection(T), o()?.({ event: de, edge: ye }));
  }
  function oe(de, ye) {
    const Ce = r().edgeLookup.get(T);
    Ce && ye({ event: de, edge: Ce });
  }
  function I(de) {
    if (!r().disableKeyboardA11y && Yf.includes(de.key) && c(U)) {
      const { unselectNodesAndEdges: ye, addSelectedEdges: Ce } = r();
      de.key === "Escape" ? (G?.blur(), ye({ edges: [n()] })) : Ce([T]);
    }
  }
  var ne = {
    get edge() {
      return n();
    },
    set edge(de) {
      n(de), p();
    },
    get store() {
      return r();
    },
    set store(de) {
      r(de), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(de) {
      o(de), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(de) {
      i(de), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(de) {
      s(de), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(de) {
      a(de), p();
    }
  }, ge = pe(), ce = Q(ge);
  {
    var ie = (de) => {
      var ye = kx();
      let Ce;
      var be = Y(ye);
      ot(be, () => ({
        class: ["svelte-flow__edge", c(j)],
        "data-id": T,
        onclick: J,
        oncontextmenu: i() ? (xe) => {
          oe(xe, i());
        } : void 0,
        onpointerenter: s() ? (xe) => {
          oe(xe, s());
        } : void 0,
        onpointerleave: a() ? (xe) => {
          oe(xe, a());
        } : void 0,
        "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${Hp}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? I : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [Nr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(U)
        }
      }));
      var he = Y(be);
      zt(he, () => c(B), (xe, Pe) => {
        Pe(xe, {
          get id() {
            return T;
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
            return c(h);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(v);
          },
          get sourcePosition() {
            return c(m);
          },
          get targetPosition() {
            return c(y);
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
            return c(E);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(k);
          },
          get interactionWidth() {
            return c(O);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c($);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(H);
          },
          get targetHandleId() {
            return c(L);
          },
          get markerStart() {
            return c(Z);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), X(be), jt(be, (xe) => G = xe, () => G), X(ye), Me(() => Ce = Rt(ye, "", Ce, { "z-index": c(A) })), z(de, ye);
    };
    ae(ce, (de) => {
      c(P) || de(ie);
    });
  }
  return z(t, ge), ue(ne);
}
se(
  Rp,
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
u1();
var Cx = /* @__PURE__ */ _e("<defs></defs>");
function jp(t, e) {
  le(e, !1);
  const n = Hn();
  wu();
  var r = Cx();
  At(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Bp(o, Ke(() => c(i)));
  }), X(r), z(t, r), ue();
}
se(jp, {}, [], [], !0);
var $x = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Sx = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), _x = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Bp(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "type", 7), o = g(e, "width", 7, 12.5), i = g(e, "height", 7, 12.5), s = g(e, "markerUnits", 7, "strokeWidth"), a = g(e, "orient", 7, "auto-start-reverse"), l = g(e, "color", 7, "none"), u = g(e, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), p();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), p();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), p();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), p();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), p();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
    }
  }, h = _x(), f = Y(h);
  {
    var v = (y) => {
      var w = $x();
      let b;
      Me(() => {
        Te(w, "stroke-width", u()), b = Rt(w, "", b, { stroke: l() });
      }), z(y, w);
    }, m = (y) => {
      var w = pe(), b = Q(w);
      {
        var x = (E) => {
          var C = Sx();
          let k;
          Me(() => {
            Te(C, "stroke-width", u()), k = Rt(C, "", k, { stroke: l(), fill: l() });
          }), z(E, C);
        };
        ae(
          b,
          (E) => {
            r() === $i.ArrowClosed && E(x);
          },
          !0
        );
      }
      z(y, w);
    };
    ae(f, (y) => {
      r() === $i.Arrow ? y(v) : y(m, !1);
    });
  }
  return X(h), Me(() => {
    Te(h, "id", n()), Te(h, "markerWidth", `${o()}`), Te(h, "markerHeight", `${i()}`), Te(h, "markerUnits", s()), Te(h, "orient", a());
  }), z(t, h), ue(d);
}
se(
  Bp,
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
var Ex = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Fp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "onedgeclick", 7), o = g(e, "onedgecontextmenu", 7), i = g(e, "onedgepointerenter", 7), s = g(e, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), p();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), p();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), p();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), p();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), p();
    }
  }, l = Ex(), u = Y(l), d = Y(u);
  jp(d, {}), X(u);
  var h = R(u, 2);
  return At(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, v) => {
    Rp(f, {
      get edge() {
        return c(v);
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
      set store(m) {
        n(m);
      }
    });
  }), X(l), z(t, l), ue(a);
}
se(
  Fp,
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
var Px = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const Ox = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function Vu(t, e) {
  le(e, !0), it(t, Ox);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7, 0), i = g(e, "height", 7, 0), s = g(e, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), p();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), p();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), p();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), p();
    }
  }, l = pe(), u = Q(l);
  {
    var d = (h) => {
      var f = Px();
      let v;
      Me((m) => v = Rt(f, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Un(o()),
          height: typeof i() == "string" ? i() : Un(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), z(h, f);
    };
    ae(u, (h) => {
      s() && h(d);
    });
  }
  return z(t, l), ue(a);
}
se(Vu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Nx = /* @__PURE__ */ re("<div><!></div>");
const Tx = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function Kp(t, e) {
  le(e, !0), it(t, Tx);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ we(void 0);
  Be(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Ri(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: x, event: b });
  }
  function h(b) {
    const x = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: x, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(Ws, b.key) && (b.preventDefault(), n().moveSelectedNodes(Ws[b.key], b.shiftKey ? 4 : 1));
  }
  var v = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), p();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), p();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), p();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), p();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), p();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), p();
    }
  }, m = pe(), y = Q(m);
  {
    var w = (b) => {
      var x = Nx();
      x.__contextmenu = d, x.__click = h, x.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let E;
      var C = Y(x);
      Vu(C, { width: "100%", height: "100%", x: 0, y: 0 }), X(x), Bt(x, (k, O) => Mp?.(k, O), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, O, V, H) => {
          r()?.({ event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, O, V, H) => {
          o()?.({ event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, O, V, H) => {
          i()?.({ event: k, targetNode: null, nodes: H });
        }
      })), jt(x, (k) => K(l, k), () => c(l)), Me(
        (k) => {
          an(x, 1, Sr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Te(x, "role", n().disableKeyboardA11y ? void 0 : "button"), Te(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = Rt(x, "", E, k);
        },
        [
          () => ({
            width: Un(c(u).width),
            height: Un(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), z(b, x);
    };
    ae(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && lr(c(u).x) && lr(c(u).y) && b(w);
    });
  }
  return z(t, m), ue(v);
}
yo(["contextmenu", "click", "keydown"]);
se(
  Kp,
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
function Ax(t) {
  switch (t) {
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
function Ln(t, e) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = e;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: v, callback: m, preventDefault: y, enabled: w } = h;
      if (w) {
        if (a.key !== v) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const C of x)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (k, O) => k | Ax(O),
              0
            ) === u) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        y && a.preventDefault();
        const b = {
          node: t,
          trigger: h,
          originalEvent: a
        };
        t.dispatchEvent(new CustomEvent("shortcut", { detail: b })), m?.(b);
      }
    }
  }
  let s;
  return n && (s = Ct(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ct(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Dt() {
  const t = /* @__PURE__ */ S(Hn), e = (i) => {
    const s = wd(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? s2(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Io(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = yt(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && wd(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = yt(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && ex(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(t).nodeLookup.get(i);
  return {
    zoomIn: c(t).zoomIn,
    zoomOut: c(t).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(t).nodes : $d(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : $d(c(t).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(t).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(t).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(t).viewport;
      return c(t).panZoom ? (await c(t).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => lu(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = Ou(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
      return await c(t).panZoom.setViewport(a, {
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
      const l = ad(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Io(h), v = Si(f, u);
        return s && v > 0 || v >= f.width * f.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = ad(i) ? i : e(i);
      if (!l)
        return !1;
      const u = Si(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await n2({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = yt(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = yt(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: f } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - f };
      return Bi(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Zs(i, [s, a, l]);
      return { x: h.x + u, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(t).nodes],
      edges: [...c(t).edges],
      viewport: { ...c(t).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(t).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Jb(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function $d(t, e) {
  const n = [];
  for (const r of e) {
    const o = t.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function Zp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Qr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Qr() ? "Meta" : "Control"), { deleteElements: l } = Dt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function f(w, b) {
    return (Array.isArray(w) ? w : [w]).map((x) => {
      const E = h(x);
      return {
        key: E,
        modifier: d(x),
        enabled: E !== null,
        callback: b
      };
    });
  }
  function v() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: w, edges: b });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), p();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), p();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = Qr() ? "Meta" : "Control") {
      o(w), p();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), p();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = Qr() ? "Meta" : "Control") {
      a(w), p();
    }
  };
  return Ms("blur", en, v), Ms("contextmenu", en, v), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !op(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Bt(en, (w, b) => Ln?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(y);
}
se(
  Zp,
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
var zx = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), Mx = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Wp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
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
      case sr.Bezier: {
        const [v] = sp(f);
        return v;
      }
      case sr.Straight: {
        const [v] = lp(f);
        return v;
      }
      case sr.Step:
      case sr.SmoothStep: {
        const [v] = Nu({
          ...f,
          borderRadius: r() === sr.Step ? 0 : void 0
        });
        return v;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), p();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), p();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), p();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), p();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), p();
    }
  }, u = pe(), d = Q(u);
  {
    var h = (f) => {
      var v = Mx(), m = Y(v), y = Y(m);
      {
        var w = (x) => {
          var E = pe(), C = Q(E);
          zt(C, s, (k, O) => {
            O(k, {});
          }), z(x, E);
        }, b = (x) => {
          var E = zx();
          Me(() => {
            Te(E, "d", c(a)), Rt(E, i());
          }), z(x, E);
        };
        ae(y, (x) => {
          s() ? x(w) : x(b, !1);
        });
      }
      X(m), X(v), Me(
        (x) => {
          Te(v, "width", n().width), Te(v, "height", n().height), Rt(v, o()), an(m, 0, x);
        },
        [
          () => Sr([
            "svelte-flow__connection",
            Ub(n().connection.isValid)
          ])
        ]
      ), z(f, v);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return z(t, u), ue(l);
}
se(
  Wp,
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
var Dx = /* @__PURE__ */ re("<div><!></div>");
function Ki(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(h = "top-right") {
      n(h), p();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), p();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), p();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), p();
    }
  }, u = Dx();
  ot(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Y(u);
  return ze(d, () => i() ?? Ze), X(u), z(t, u), ue(l);
}
se(Ki, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Vx = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Xp(t, e) {
  le(e, !0);
  let n = g(e, "proOptions", 7), r = g(e, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), p();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), p();
    }
  }, i = pe(), s = Q(i);
  {
    var a = (l) => {
      Ki(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = Vx();
          z(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return z(t, i), ue(o);
}
se(Xp, { proOptions: {}, position: {} }, [], [], !0);
var Hx = /* @__PURE__ */ re("<div><!></div>");
const Ix = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function qp(t, e) {
  le(e, !0), it(t, Ix);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ S(() => u().class), h = /* @__PURE__ */ S(() => V1(u(), [
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
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var v = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), p();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), p();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), p();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), p();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), p();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), p();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), p();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), p();
    }
  }, m = Hx();
  ot(
    m,
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
      ...c(h),
      [Bn]: w
    }),
    [
      () => ({ width: Un(n()), height: Un(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = Y(m);
  return ze(y, () => l() ?? Ze), X(m), jt(m, (w) => i(w), () => i()), Hc(m, "clientHeight", a), Hc(m, "clientWidth", s), z(t, m), ue(v);
}
se(
  qp,
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
var Lx = /* @__PURE__ */ re('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Rx = /* @__PURE__ */ re("<!> <!>", 1), jx = /* @__PURE__ */ re("<!> <!> <!> <!> <!>", 1);
function Yp(t, e) {
  le(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), f = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), x = g(e, "onnodedrag", 7), E = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), k = g(e, "onnodepointerenter", 7), O = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), H = g(e, "onselectionclick", 7), L = g(e, "onselectioncontextmenu", 7), M = g(e, "onselectionstart", 7), D = g(e, "onselectionend", 7), _ = g(e, "onedgeclick", 7), N = g(e, "onedgecontextmenu", 7), $ = g(e, "onedgepointerenter", 7), P = g(e, "onedgepointerleave", 7), A = g(e, "onpaneclick", 7), j = g(e, "onpanecontextmenu", 7), q = g(e, "panOnScrollMode", 23, () => ro.Free), G = g(e, "preventScrolling", 7, !0), T = g(e, "zoomOnScroll", 7, !0), U = g(e, "zoomOnDoubleClick", 7, !0), ee = g(e, "zoomOnPinch", 7, !0), B = g(e, "panOnScroll", 7, !1), Z = g(e, "panOnScrollSpeed", 7, 0.5), W = g(e, "panOnDrag", 7, !0), J = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), I = g(e, "connectionLineStyle", 7), ne = g(e, "connectionLineContainerStyle", 7), ge = g(e, "connectionLineType", 23, () => sr.Bezier), ce = g(e, "attributionPosition", 7), ie = g(e, "children", 7), de = g(e, "nodes", 31, () => kt([])), ye = g(e, "edges", 31, () => kt([])), Ce = g(e, "viewport", 31, () => {
  }), be = /* @__PURE__ */ Le(e, [
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
  ]), he = Np({
    props: be,
    width: n(),
    height: r(),
    get nodes() {
      return de();
    },
    set nodes(te) {
      de(te);
    },
    get edges() {
      return ye();
    },
    set edges(te) {
      ye(te);
    },
    get viewport() {
      return Ce();
    },
    set viewport(te) {
      Ce(te);
    }
  });
  const xe = An(Xs);
  xe && xe.setStore && xe.setStore(he), io(Xs, {
    provider: !1,
    getStore() {
      return he;
    }
  }), Be(() => {
    const te = { nodes: he.selectedNodes, edges: he.selectedEdges };
    yt(() => e.onselectionchange)?.(te);
    for (const Re of he.selectionChangeHandlers.values())
      Re(te);
  }), Vi(() => {
    he.reset();
  });
  var Pe = {
    get width() {
      return n();
    },
    set width(te) {
      n(te), p();
    },
    get height() {
      return r();
    },
    set height(te) {
      r(te), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(te) {
      o(te), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(te) {
      i(te), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(te) {
      s(te), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(te) {
      a(te), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(te) {
      l(te), p();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(te) {
      u(te), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(te = 1) {
      d(te), p();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(te = 1) {
      h(te), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(te) {
      f(te), p();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(te) {
      v(te), p();
    },
    get onmove() {
      return m();
    },
    set onmove(te) {
      m(te), p();
    },
    get oninit() {
      return y();
    },
    set oninit(te) {
      y(te), p();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(te) {
      w(te), p();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(te) {
      b(te), p();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(te) {
      x(te), p();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(te) {
      E(te), p();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(te) {
      C(te), p();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(te) {
      k(te), p();
    },
    get onnodepointermove() {
      return O();
    },
    set onnodepointermove(te) {
      O(te), p();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(te) {
      V(te), p();
    },
    get onselectionclick() {
      return H();
    },
    set onselectionclick(te) {
      H(te), p();
    },
    get onselectioncontextmenu() {
      return L();
    },
    set onselectioncontextmenu(te) {
      L(te), p();
    },
    get onselectionstart() {
      return M();
    },
    set onselectionstart(te) {
      M(te), p();
    },
    get onselectionend() {
      return D();
    },
    set onselectionend(te) {
      D(te), p();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(te) {
      _(te), p();
    },
    get onedgecontextmenu() {
      return N();
    },
    set onedgecontextmenu(te) {
      N(te), p();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(te) {
      $(te), p();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(te) {
      P(te), p();
    },
    get onpaneclick() {
      return A();
    },
    set onpaneclick(te) {
      A(te), p();
    },
    get onpanecontextmenu() {
      return j();
    },
    set onpanecontextmenu(te) {
      j(te), p();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(te = ro.Free) {
      q(te), p();
    },
    get preventScrolling() {
      return G();
    },
    set preventScrolling(te = !0) {
      G(te), p();
    },
    get zoomOnScroll() {
      return T();
    },
    set zoomOnScroll(te = !0) {
      T(te), p();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(te = !0) {
      U(te), p();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(te = !0) {
      ee(te), p();
    },
    get panOnScroll() {
      return B();
    },
    set panOnScroll(te = !1) {
      B(te), p();
    },
    get panOnScrollSpeed() {
      return Z();
    },
    set panOnScrollSpeed(te = 0.5) {
      Z(te), p();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(te = !0) {
      W(te), p();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(te = !1) {
      J(te), p();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(te) {
      oe(te), p();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(te) {
      I(te), p();
    },
    get connectionLineContainerStyle() {
      return ne();
    },
    set connectionLineContainerStyle(te) {
      ne(te), p();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(te = sr.Bezier) {
      ge(te), p();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(te) {
      ce(te), p();
    },
    get children() {
      return ie();
    },
    set children(te) {
      ie(te), p();
    },
    get nodes() {
      return de();
    },
    set nodes(te = []) {
      de(te), p();
    },
    get edges() {
      return ye();
    },
    set edges(te = []) {
      ye(te), p();
    },
    get viewport() {
      return Ce();
    },
    set viewport(te = void 0) {
      Ce(te), p();
    }
  };
  return qp(t, {
    get colorMode() {
      return he.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return be;
    },
    get domNode() {
      return he.domNode;
    },
    set domNode(te) {
      he.domNode = te;
    },
    get clientWidth() {
      return he.width;
    },
    set clientWidth(te) {
      he.width = te;
    },
    get clientHeight() {
      return he.height;
    },
    set clientHeight(te) {
      he.height = te;
    },
    children: (te, Re) => {
      var De = jx(), Xe = Q(De);
      Zp(Xe, {
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
          return he;
        },
        set store(nt) {
          he = nt;
        }
      });
      var Fe = R(Xe, 2);
      Tp(Fe, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return G();
        },
        get zoomOnScroll() {
          return T();
        },
        get zoomOnDoubleClick() {
          return U();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return B();
        },
        get panOnScrollSpeed() {
          return Z();
        },
        get panOnDrag() {
          return W();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return J();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return m();
        },
        get onmoveend() {
          return v();
        },
        get oninit() {
          return y();
        },
        get store() {
          return he;
        },
        set store(nt) {
          he = nt;
        },
        children: (nt, me) => {
          Ap(nt, {
            get onpaneclick() {
              return A();
            },
            get onpanecontextmenu() {
              return j();
            },
            get onselectionstart() {
              return M();
            },
            get onselectionend() {
              return D();
            },
            get panOnDrag() {
              return W();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return he;
            },
            set store(Ae) {
              he = Ae;
            },
            children: (Ae, ct) => {
              var qe = Rx(), gt = Q(qe);
              zp(gt, {
                get store() {
                  return he;
                },
                set store(wt) {
                  he = wt;
                },
                children: (wt, ht) => {
                  var ft = Lx(), St = R(Q(ft), 2);
                  Fp(St, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return N();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return he;
                    },
                    set store(Cn) {
                      he = Cn;
                    }
                  });
                  var Zt = R(St, 4);
                  Wp(Zt, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return ne();
                    },
                    get style() {
                      return I();
                    },
                    get store() {
                      return he;
                    },
                    set store(Cn) {
                      he = Cn;
                    }
                  });
                  var tr = R(Zt, 2);
                  Lp(tr, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return O();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(Cn) {
                      he = Cn;
                    }
                  });
                  var Yo = R(tr, 2);
                  Kp(Yo, {
                    get onselectionclick() {
                      return H();
                    },
                    get onselectioncontextmenu() {
                      return L();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(Cn) {
                      he = Cn;
                    }
                  }), Oe(2), z(wt, ft);
                },
                $$slots: { default: !0 }
              });
              var Vt = R(gt, 2);
              {
                let wt = /* @__PURE__ */ S(() => !!(he.selectionRect && he.selectionRectMode === "user")), ht = /* @__PURE__ */ S(() => he.selectionRect?.width), ft = /* @__PURE__ */ S(() => he.selectionRect?.height), St = /* @__PURE__ */ S(() => he.selectionRect?.x), Zt = /* @__PURE__ */ S(() => he.selectionRect?.y);
                Vu(Vt, {
                  get isVisible() {
                    return c(wt);
                  },
                  get width() {
                    return c(ht);
                  },
                  get height() {
                    return c(ft);
                  },
                  get x() {
                    return c(St);
                  },
                  get y() {
                    return c(Zt);
                  }
                });
              }
              z(Ae, qe);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var st = R(Fe, 2);
      Xp(st, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var ut = R(st, 2);
      Dp(ut, {
        get store() {
          return he;
        }
      });
      var mt = R(ut, 2);
      ze(mt, () => ie() ?? Ze), z(te, De);
    },
    $$slots: { default: !0 }
  }), ue(Pe);
}
se(
  Yp,
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
function Up(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ we(Np({ props: {}, nodes: [], edges: [] }));
  io(Xs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      K(r, a);
    }
  }), Vi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    }
  }, i = pe(), s = Q(i);
  return ze(s, () => n() ?? Ze), z(t, i), ue(o);
}
se(Up, { children: {} }, [], [], !0);
var Bx = /* @__PURE__ */ re("<button><!></button>");
function ai(t, e) {
  le(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  var h = {
    get class() {
      return n();
    },
    set class(m) {
      n(m), p();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), p();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), p();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), p();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), p();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), p();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), p();
    },
    get children() {
      return u();
    },
    set children(m) {
      u(m), p();
    }
  }, f = Bx();
  ot(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Bn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Y(f);
  return ze(v, () => u() ?? Ze), X(f), z(t, f), ue(h);
}
se(
  ai,
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
var Fx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Gp(t) {
  var e = Fx();
  z(t, e);
}
se(Gp, {}, [], [], !0);
var Kx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Jp(t) {
  var e = Kx();
  z(t, e);
}
se(Jp, {}, [], [], !0);
var Zx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Qp(t) {
  var e = Zx();
  z(t, e);
}
se(Qp, {}, [], [], !0);
var Wx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function eg(t) {
  var e = Wx();
  z(t, e);
}
se(eg, {}, [], [], !0);
var Xx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function tg(t) {
  var e = Xx();
  z(t, e);
}
se(tg, {}, [], [], !0);
var qx = /* @__PURE__ */ re("<!> <!>", 1), Yx = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ng(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), f = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), x = /* @__PURE__ */ Le(e, [
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
  ]), E = /* @__PURE__ */ S(Hn);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: v()
  };
  let k = /* @__PURE__ */ S(() => c(E).nodesDraggable || c(E).nodesConnectable || c(E).elementsSelectable), O = /* @__PURE__ */ S(() => c(E).viewport.zoom <= c(E).minZoom), V = /* @__PURE__ */ S(() => c(E).viewport.zoom >= c(E).maxZoom), H = /* @__PURE__ */ S(() => c(E).ariaLabelConfig), L = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const M = () => {
    c(E).zoomIn();
  }, D = () => {
    c(E).zoomOut();
  }, _ = () => {
    c(E).fitView(m());
  }, N = () => {
    let P = !c(k);
    c(E).nodesDraggable = P, c(E).nodesConnectable = P, c(E).elementsSelectable = P;
  };
  var $ = {
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), p();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), p();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), p();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), p();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), p();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), p();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), p();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), p();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), p();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(P) {
      h(P), p();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), p();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(P) {
      v(P), p();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(P) {
      m(P), p();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), p();
    },
    get before() {
      return w();
    },
    set before(P) {
      w(P), p();
    },
    get after() {
      return b();
    },
    set after(P) {
      b(P), p();
    }
  };
  {
    let P = /* @__PURE__ */ S(() => [
      "svelte-flow__controls",
      c(L),
      l()
    ]);
    Ki(t, Ke(
      {
        get class() {
          return c(P);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(H)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (A, j) => {
          var q = Yx(), G = Q(q);
          {
            var T = (ce) => {
              var ie = pe(), de = Q(ie);
              ze(de, w), z(ce, ie);
            };
            ae(G, (ce) => {
              w() && ce(T);
            });
          }
          var U = R(G, 2);
          {
            var ee = (ce) => {
              var ie = qx(), de = Q(ie);
              ai(de, Ke(
                {
                  onclick: M,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(H)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => C,
                {
                  children: (Ce, be) => {
                    Gp(Ce);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ye = R(de, 2);
              ai(ye, Ke(
                {
                  onclick: D,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(H)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => C,
                {
                  children: (Ce, be) => {
                    Jp(Ce);
                  },
                  $$slots: { default: !0 }
                }
              )), z(ce, ie);
            };
            ae(U, (ce) => {
              o() && ce(ee);
            });
          }
          var B = R(U, 2);
          {
            var Z = (ce) => {
              ai(ce, Ke(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(H)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.fitView.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, de) => {
                    Qp(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(B, (ce) => {
              i() && ce(Z);
            });
          }
          var W = R(B, 2);
          {
            var J = (ce) => {
              ai(ce, Ke(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: N,
                  get title() {
                    return c(H)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, de) => {
                    var ye = pe(), Ce = Q(ye);
                    {
                      var be = (xe) => {
                        tg(xe);
                      }, he = (xe) => {
                        eg(xe);
                      };
                      ae(Ce, (xe) => {
                        c(k) ? xe(be) : xe(he, !1);
                      });
                    }
                    z(ie, ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(W, (ce) => {
              s() && ce(J);
            });
          }
          var oe = R(W, 2);
          {
            var I = (ce) => {
              var ie = pe(), de = Q(ie);
              ze(de, y), z(ce, ie);
            };
            ae(oe, (ce) => {
              y() && ce(I);
            });
          }
          var ne = R(oe, 2);
          {
            var ge = (ce) => {
              var ie = pe(), de = Q(ie);
              ze(de, b), z(ce, ie);
            };
            ae(ne, (ce) => {
              b() && ce(ge);
            });
          }
          z(A, q);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue($);
}
se(
  ng,
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
var ur;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(ur || (ur = {}));
var Ux = /* @__PURE__ */ _e("<circle></circle>");
function rg(t, e) {
  le(e, !0);
  let n = g(e, "radius", 7), r = g(e, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), p();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), p();
    }
  }, i = Ux();
  return Me(() => {
    Te(i, "cx", n()), Te(i, "cy", n()), Te(i, "r", n()), an(i, 0, Sr(["svelte-flow__background-pattern", "dots", r()]));
  }), z(t, i), ue(o);
}
se(rg, { radius: {}, class: {} }, [], [], !0);
var Gx = /* @__PURE__ */ _e("<path></path>");
function og(t, e) {
  le(e, !0);
  let n = g(e, "lineWidth", 7), r = g(e, "dimensions", 7), o = g(e, "variant", 7), i = g(e, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), p();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), p();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), p();
    }
  }, a = Gx();
  return Me(() => {
    Te(a, "stroke-width", n()), Te(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), an(a, 0, Sr(["svelte-flow__background-pattern", o(), i()]));
  }), z(t, a), ue(s);
}
se(og, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Jx = {
  [ur.Dots]: 1,
  [ur.Lines]: 1,
  [ur.Cross]: 6
};
var Qx = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ig(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => ur.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ S(Hn), f = /* @__PURE__ */ S(() => r() === ur.Dots), v = /* @__PURE__ */ S(() => r() === ur.Cross), m = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ S(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ S(() => (i() ?? Jx[r()]) * c(h).viewport.zoom), x = /* @__PURE__ */ S(() => c(v) ? [c(b), c(b)] : c(w)), E = /* @__PURE__ */ S(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), p();
    },
    get variant() {
      return r();
    },
    set variant(_ = ur.Dots) {
      r(_), p();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), p();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), p();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), p();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), p();
    }
  }, k = Qx();
  let O;
  var V = Y(k), H = Y(V);
  {
    var L = (_) => {
      {
        let N = /* @__PURE__ */ S(() => c(b) / 2);
        rg(_, {
          get radius() {
            return c(N);
          },
          get class() {
            return u();
          }
        });
      }
    }, M = (_) => {
      og(_, {
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
    ae(H, (_) => {
      c(f) ? _(L) : _(M, !1);
    });
  }
  X(V);
  var D = R(V);
  return X(k), Me(() => {
    an(k, 0, Sr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), O = Rt(k, "", O, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Te(V, "id", c(y)), Te(V, "x", c(h).viewport.x % c(w)[0]), Te(V, "y", c(h).viewport.y % c(w)[1]), Te(V, "width", c(w)[0]), Te(V, "height", c(w)[1]), Te(V, "patternTransform", `translate(-${c(E)[0]},-${c(E)[1]})`), Te(D, "fill", `url(#${c(y)})`);
  }), z(t, k), ue(C);
}
se(
  ig,
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
var e7 = /* @__PURE__ */ _e("<rect></rect>");
function sg(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "x", 7), o = g(e, "y", 7), i = g(e, "width", 7), s = g(e, "height", 7), a = g(e, "borderRadius", 7, 5), l = g(e, "color", 7), u = g(e, "shapeRendering", 7), d = g(e, "strokeColor", 7), h = g(e, "strokeWidth", 7, 2), f = g(e, "selected", 7), v = g(e, "class", 7), m = g(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), p();
    },
    get x() {
      return r();
    },
    set x(C) {
      r(C), p();
    },
    get y() {
      return o();
    },
    set y(C) {
      o(C), p();
    },
    get width() {
      return i();
    },
    set width(C) {
      i(C), p();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(C = 5) {
      a(C), p();
    },
    get color() {
      return l();
    },
    set color(C) {
      l(C), p();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(C) {
      u(C), p();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(C) {
      d(C), p();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(C = 2) {
      h(C), p();
    },
    get selected() {
      return f();
    },
    set selected(C) {
      f(C), p();
    },
    get class() {
      return v();
    },
    set class(C) {
      v(C), p();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(C) {
      m(C), p();
    }
  }, w = pe(), b = Q(w);
  {
    var x = (C) => {
      const k = /* @__PURE__ */ S(m);
      var O = pe(), V = Q(O);
      zt(V, () => c(k), (H, L) => {
        L(H, {
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
            return v();
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
            return h();
          },
          get selected() {
            return f();
          }
        });
      }), z(C, O);
    }, E = (C) => {
      var k = e7();
      let O, V;
      Me(() => {
        O = an(k, 0, Sr(["svelte-flow__minimap-node", v()]), null, O, { selected: f() }), Te(k, "x", r()), Te(k, "y", o()), Te(k, "rx", a()), Te(k, "ry", a()), Te(k, "width", i()), Te(k, "height", s()), Te(k, "shape-rendering", u()), V = Rt(k, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), z(C, k);
    };
    ae(b, (C) => {
      m() ? C(x) : C(E, !1);
    });
  }
  return z(t, w), ue(y);
}
se(
  sg,
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
function t7(t, e) {
  const n = j2({
    domNode: t,
    panZoom: e.panZoom,
    getTransform: () => {
      const { viewport: o } = e.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: e.getViewScale
  });
  n.update({
    translateExtent: e.translateExtent,
    width: e.width,
    height: e.height,
    inversePan: e.inversePan,
    zoomStep: e.zoomStep,
    pannable: e.pannable,
    zoomable: e.zoomable
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
const Qa = (t) => t instanceof Function ? t : () => t;
var n7 = /* @__PURE__ */ _e("<title> </title>"), r7 = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), o7 = /* @__PURE__ */ re('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ag(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), f = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), x = g(e, "inversePan", 7), E = g(e, "zoomStep", 7), C = g(e, "class", 7), k = /* @__PURE__ */ Le(e, [
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
  ]), O = /* @__PURE__ */ S(Hn), V = /* @__PURE__ */ S(() => c(O).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Qa(i()), L = Qa(o()), M = Qa(s()), D = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(O).flowId}`), N = /* @__PURE__ */ S(() => ({
    x: -c(O).viewport.x / c(O).viewport.zoom,
    y: -c(O).viewport.y / c(O).viewport.zoom,
    width: c(O).width / c(O).viewport.zoom,
    height: c(O).height / c(O).viewport.zoom
  })), $ = /* @__PURE__ */ S(() => ep(Ri(c(O).nodeLookup, { filter: (ne) => !ne.hidden }), c(N))), P = /* @__PURE__ */ S(() => c($).width / m()), A = /* @__PURE__ */ S(() => c($).height / y()), j = /* @__PURE__ */ S(() => Math.max(c(P), c(A))), q = /* @__PURE__ */ S(() => c(j) * m()), G = /* @__PURE__ */ S(() => c(j) * y()), T = /* @__PURE__ */ S(() => 5 * c(j)), U = /* @__PURE__ */ S(() => c($).x - (c(q) - c($).width) / 2 - c(T)), ee = /* @__PURE__ */ S(() => c($).y - (c(G) - c($).height) / 2 - c(T)), B = /* @__PURE__ */ S(() => c(q) + c(T) * 2), Z = /* @__PURE__ */ S(() => c(G) + c(T) * 2);
  const W = () => c(j);
  var J = {
    get position() {
      return n();
    },
    set position(ne = "bottom-right") {
      n(ne), p();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ne) {
      r(ne), p();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ne = "transparent") {
      o(ne), p();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ne) {
      i(ne), p();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ne = "") {
      s(ne), p();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ne = 5) {
      a(ne), p();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ne = 2) {
      l(ne), p();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ne) {
      u(ne), p();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ne) {
      d(ne), p();
    },
    get maskColor() {
      return h();
    },
    set maskColor(ne) {
      h(ne), p();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ne) {
      f(ne), p();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(ne) {
      v(ne), p();
    },
    get width() {
      return m();
    },
    set width(ne = 200) {
      m(ne), p();
    },
    get height() {
      return y();
    },
    set height(ne = 150) {
      y(ne), p();
    },
    get pannable() {
      return w();
    },
    set pannable(ne = !0) {
      w(ne), p();
    },
    get zoomable() {
      return b();
    },
    set zoomable(ne = !0) {
      b(ne), p();
    },
    get inversePan() {
      return x();
    },
    set inversePan(ne) {
      x(ne), p();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(ne) {
      E(ne), p();
    },
    get class() {
      return C();
    },
    set class(ne) {
      C(ne), p();
    }
  }, oe = o7(), I = Q(oe);
  {
    let ne = /* @__PURE__ */ S(() => ["svelte-flow__minimap", C()]);
    G1(I, () => ({ "--xy-minimap-background-color-props": d() })), Ki(I.lastChild, Ke(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ne);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => k,
      {
        children: (ge, ce) => {
          var ie = pe(), de = Q(ie);
          {
            var ye = (Ce) => {
              var be = r7();
              let he;
              var xe = Y(be);
              {
                var Pe = (De) => {
                  var Xe = n7(), Fe = Y(Xe, !0);
                  X(Xe), Me(() => {
                    Te(Xe, "id", c(_)), pt(Fe, r() ?? c(V)["minimap.ariaLabel"]);
                  }), z(De, Xe);
                };
                ae(xe, (De) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && De(Pe);
                });
              }
              var te = R(xe);
              At(te, 17, () => c(O).nodes, (De) => De.id, (De, Xe) => {
                const Fe = /* @__PURE__ */ S(() => c(O).nodeLookup.get(c(Xe).id));
                var st = pe(), ut = Q(st);
                {
                  var mt = (nt) => {
                    const me = /* @__PURE__ */ S(() => Kr(c(Fe)));
                    {
                      let Ae = /* @__PURE__ */ S(() => H?.(c(Fe))), ct = /* @__PURE__ */ S(() => L(c(Fe))), qe = /* @__PURE__ */ S(() => M(c(Fe)));
                      sg(nt, Ke(
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
                        () => c(me),
                        {
                          get selected() {
                            return c(Fe).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ae);
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
                            return D;
                          },
                          get class() {
                            return c(qe);
                          }
                        }
                      ));
                    }
                  };
                  ae(ut, (nt) => {
                    c(Fe) && tp(c(Fe)) && !c(Fe).hidden && nt(mt);
                  });
                }
                z(De, st);
              });
              var Re = R(te);
              X(be), Bt(be, (De, Xe) => t7?.(De, Xe), () => ({
                store: c(O),
                panZoom: c(O).panZoom,
                getViewScale: W,
                translateExtent: c(O).translateExtent,
                width: c(O).width,
                height: c(O).height,
                inversePan: x(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Me(() => {
                Te(be, "width", m()), Te(be, "height", y()), Te(be, "viewBox", `${c(U) ?? ""} ${c(ee) ?? ""} ${c(B) ?? ""} ${c(Z) ?? ""}`), Te(be, "aria-labelledby", c(_)), he = Rt(be, "", he, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(j) : void 0
                }), Te(Re, "d", `M${c(U) - c(T)},${c(ee) - c(T)}h${c(B) + c(T) * 2}v${c(Z) + c(T) * 2}h${-c(B) - c(T) * 2}z
      M${c(N).x ?? ""},${c(N).y ?? ""}h${c(N).width ?? ""}v${c(N).height ?? ""}h${-c(N).width}z`);
              }), z(Ce, be);
            };
            ae(de, (Ce) => {
              c(O).panZoom && Ce(ye);
            });
          }
          z(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), X(I);
  }
  return z(t, oe), ue(J);
}
se(
  ag,
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
var i7 = /* @__PURE__ */ re("<div><!></div>");
function lg(t, e) {
  le(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => Ne.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ Le(e, [
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
  const u = Hn(), { getNodesBounds: d } = Dt(), h = An("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (k, O) => {
      const V = u.nodeLookup.get(O);
      return V && k.push(V), k;
    },
    []
  ))), v = /* @__PURE__ */ S(() => {
    const k = d(c(f));
    return k ? b2(k, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((k) => (k.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => u.nodes.filter((k) => k.selected).length), w = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(k) {
      n(k), p();
    },
    get position() {
      return r();
    },
    set position(k = Ne.Top) {
      r(k), p();
    },
    get align() {
      return o();
    },
    set align(k = "center") {
      o(k), p();
    },
    get offset() {
      return i();
    },
    set offset(k = 10) {
      i(k), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(k) {
      s(k), p();
    },
    get children() {
      return a();
    },
    set children(k) {
      a(k), p();
    }
  }, x = pe(), E = Q(x);
  {
    var C = (k) => {
      var O = i7();
      ot(
        O,
        (H, L) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [Bn]: L
        }),
        [
          () => c(f).reduce((H, L) => `${H}${L.id} `, "").trim(),
          () => ({
            display: kp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = Y(O);
      ze(V, () => a() ?? Ze), X(O), Bt(O, (H, L) => xp?.(H, L), () => "root"), z(k, O);
    };
    ae(E, (k) => {
      u.domNode && c(w) && c(f) && k(C);
    });
  }
  return z(t, x), ue(b);
}
se(
  lg,
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
function _r(t) {
  const e = /* @__PURE__ */ S(Hn), n = /* @__PURE__ */ S(() => c(e).nodes), r = /* @__PURE__ */ S(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!A2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Sd = "tinyflow-component", s7 = [
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
], a7 = [
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
], Hu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], l7 = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], u7 = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class c7 {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(e) {
    if (typeof e.element != "string" && !(e.element instanceof Element))
      throw new Error("element must be a string or Element");
    this._setOptions(e), this._init();
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
    const e = document.createElement(Sd);
    e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add("tf-theme-light"), e.options = this.options, e.onInit = (n) => {
      this.svelteFlowInstance = n;
    }, this.rootEl.appendChild(e);
  }
  _setOptions(e) {
    this.options = {
      ...e
    };
  }
  getOptions() {
    return this.options;
  }
  getData() {
    return this.svelteFlowInstance.toObject();
  }
  setData(e) {
    this.options.data = e;
    const n = document.createElement(Sd);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const d7 = () => {
  let t = /* @__PURE__ */ we([]), e = /* @__PURE__ */ we([]), n = /* @__PURE__ */ we({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      K(t, r), K(e, o);
    },
    getNodes: () => c(t),
    setNodes: (r) => {
      K(t, r);
    },
    getEdges: () => c(e),
    setEdges: (r) => {
      K(e, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      K(n, r);
    },
    getNode: (r) => c(t).find((o) => o.id === r),
    addNode: (r) => {
      K(t, [...c(t), r]);
    },
    removeNode: (r) => {
      K(t, c(t).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      K(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      K(t, r(c(t)));
    },
    updateNodeData: (r, o) => {
      K(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      K(t, c(t).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(e).find((o) => o.id === r),
    addEdge: (r) => {
      K(e, [...c(e), r]);
    },
    removeEdge: (r) => {
      K(e, c(e).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      K(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      K(e, r(c(e)));
    },
    updateEdgeData: (r, o) => {
      K(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, et = d7(), h7 = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, f7 = (t, e) => ({
  classGroupId: t,
  validator: e
}), ug = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), qs = "-", _d = [], p7 = "arbitrary..", g7 = (t) => {
  const e = m7(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return v7(o);
      const i = o.split(qs), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return cg(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? h7(a, s) : s : a || _d;
      }
      return n[o] || _d;
    }
  };
}, cg = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = cg(t, e + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = e === 0 ? t.join(qs) : t.slice(e).join(qs), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, v7 = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? p7 + r : void 0;
})(), m7 = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return y7(n, e);
}, y7 = (t, e) => {
  const n = ug();
  for (const r in t) {
    const o = t[r];
    Iu(o, n, r, e);
  }
  return n;
}, Iu = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    w7(s, e, n, r);
  }
}, w7 = (t, e, n, r) => {
  if (typeof t == "string") {
    b7(t, e, n);
    return;
  }
  if (typeof t == "function") {
    x7(t, e, n, r);
    return;
  }
  k7(t, e, n, r);
}, b7 = (t, e, n) => {
  const r = t === "" ? e : dg(e, t);
  r.classGroupId = n;
}, x7 = (t, e, n, r) => {
  if (C7(t)) {
    Iu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(f7(n, t));
}, k7 = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    Iu(l, dg(e, a), n, r);
  }
}, dg = (t, e) => {
  let n = t;
  const r = e.split(qs), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = ug(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, C7 = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, $7 = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ Object.create(null));
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
}, Sl = "!", Ed = ":", S7 = [], Pd = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), _7 = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, u;
    const d = o.length;
    for (let y = 0; y < d; y++) {
      const w = o[y];
      if (s === 0 && a === 0) {
        if (w === Ed) {
          i.push(o.slice(l, y)), l = y + 1;
          continue;
        }
        if (w === "/") {
          u = y;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? a++ : w === ")" && a--;
    }
    const h = i.length === 0 ? o : o.slice(l);
    let f = h, v = !1;
    h.endsWith(Sl) ? (f = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(Sl) && (f = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return Pd(i, v, f, m);
  };
  if (e) {
    const o = e + Ed, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Pd(S7, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, E7 = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((n, r) => {
    e.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = e.has(s);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, P7 = (t) => ({
  cache: $7(t.cacheSize),
  parseClassName: _7(t),
  sortModifiers: E7(t),
  ...g7(t)
}), O7 = /\s+/, N7 = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(O7);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: h,
      modifiers: f,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: y
    } = n(d);
    if (h) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let w = !!y, b = r(w ? m.substring(0, y) : m);
    if (!b) {
      if (!w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(m), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const x = f.length === 0 ? "" : f.length === 1 ? f[0] : i(f).join(":"), E = v ? x + Sl : x, C = E + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const k = o(b, w);
    for (let O = 0; O < k.length; ++O) {
      const V = k[O];
      s.push(E + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, T7 = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = hg(n)) && (o && (o += " "), o += r);
  return o;
}, hg = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = hg(t[r])) && (n && (n += " "), n += e);
  return n;
}, _l = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const u = e.reduce((d, h) => h(d), t());
    return n = P7(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = N7(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(T7(...l));
}, A7 = [], Tt = (t) => {
  const e = (n) => n[t] || A7;
  return e.isThemeGetter = !0, e;
}, fg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, z7 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, M7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, D7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, V7 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, H7 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, I7 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pr = (t) => z7.test(t), je = (t) => !!t && !Number.isNaN(Number(t)), Or = (t) => !!t && Number.isInteger(Number(t)), el = (t) => t.endsWith("%") && je(t.slice(0, -1)), rr = (t) => M7.test(t), gg = () => !0, L7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  D7.test(t) && !V7.test(t)
), Lu = () => !1, R7 = (t) => H7.test(t), j7 = (t) => I7.test(t), B7 = (t) => !$e(t) && !Se(t), F7 = (t) => Zr(t, yg, Lu), $e = (t) => fg.test(t), qr = (t) => Zr(t, wg, L7), Od = (t) => Zr(t, G7, je), K7 = (t) => Zr(t, xg, gg), Z7 = (t) => Zr(t, bg, Lu), Nd = (t) => Zr(t, vg, Lu), W7 = (t) => Zr(t, mg, j7), as = (t) => Zr(t, kg, R7), Se = (t) => pg.test(t), ti = (t) => wo(t, wg), X7 = (t) => wo(t, bg), Td = (t) => wo(t, vg), q7 = (t) => wo(t, yg), Y7 = (t) => wo(t, mg), ls = (t) => wo(t, kg, !0), U7 = (t) => wo(t, xg, !0), Zr = (t, e, n) => {
  const r = fg.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, wo = (t, e, n = !1) => {
  const r = pg.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, vg = (t) => t === "position" || t === "percentage", mg = (t) => t === "image" || t === "url", yg = (t) => t === "length" || t === "size" || t === "bg-size", wg = (t) => t === "length", G7 = (t) => t === "number", bg = (t) => t === "family-name", xg = (t) => t === "number" || t === "weight", kg = (t) => t === "shadow", El = () => {
  const t = Tt("color"), e = Tt("font"), n = Tt("text"), r = Tt("font-weight"), o = Tt("tracking"), i = Tt("leading"), s = Tt("breakpoint"), a = Tt("container"), l = Tt("spacing"), u = Tt("radius"), d = Tt("shadow"), h = Tt("inset-shadow"), f = Tt("text-shadow"), v = Tt("drop-shadow"), m = Tt("blur"), y = Tt("perspective"), w = Tt("aspect"), b = Tt("ease"), x = Tt("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], k = () => [...C(), Se, $e], O = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], H = () => [Se, $e, l], L = () => [Pr, "full", "auto", ...H()], M = () => [Or, "none", "subgrid", Se, $e], D = () => ["auto", {
    span: ["full", Or, Se, $e]
  }, Or, Se, $e], _ = () => [Or, "auto", Se, $e], N = () => ["auto", "min", "max", "fr", Se, $e], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...H()], j = () => [Pr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], q = () => [Pr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()], G = () => [Pr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()], T = () => [t, Se, $e], U = () => [...C(), Td, Nd, {
    position: [Se, $e]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", q7, F7, {
    size: [Se, $e]
  }], Z = () => [el, ti, qr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Se,
    $e
  ], J = () => ["", je, ti, qr], oe = () => ["solid", "dashed", "dotted", "double"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => [je, el, Td, Nd], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    Se,
    $e
  ], ce = () => ["none", je, Se, $e], ie = () => ["none", je, Se, $e], de = () => [je, Se, $e], ye = () => [Pr, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [rr],
      breakpoint: [rr],
      color: [gg],
      container: [rr],
      "drop-shadow": [rr],
      ease: ["in", "out", "in-out"],
      font: [B7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [rr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [rr],
      shadow: [rr],
      spacing: ["px", je],
      text: [rr],
      "text-shadow": [rr],
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
        aspect: ["auto", "square", Pr, $e, Se, w]
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
        columns: [je, $e, Se, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
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
        inset: L()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: L()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: L()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": L()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [Or, "auto", Se, $e]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Pr, "full", "auto", a, ...H()]
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
        flex: [je, Pr, "auto", "initial", "none", $e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", je, Se, $e]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", je, Se, $e]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Or, "first", "last", "none", Se, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: D()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: D()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": N()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": N()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: H()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": H()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": H()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: H()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: H()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: H()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: H()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: H()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: H()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: H()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: H()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: H()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: H()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: H()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: A()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": H()
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
        "space-y": H()
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
        inline: ["auto", ...q()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...q()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...q()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...G()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...G()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...G()]
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
        text: ["base", n, ti, qr]
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
        font: [r, U7, K7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", el, $e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [X7, Z7, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [$e]
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
        tracking: [o, Se, $e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [je, "none", Se, Od]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...H()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Se, $e]
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
        list: ["disc", "decimal", "none", Se, $e]
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
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
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
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [je, "from-font", "auto", Se, qr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [je, "auto", Se, $e]
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
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Se, $e]
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
        content: ["none", Se, $e]
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
        bg: U()
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
        bg: B()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Or, Se, $e],
          radial: ["", Se, $e],
          conic: [Or, Se, $e]
        }, Y7, W7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
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
        border: J()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": J()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
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
        "divide-y": J()
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
        border: [...oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [je, Se, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", je, ti, qr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
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
          ls,
          as
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, ls, as]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
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
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [je, qr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, ls, as]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [je, Se, $e]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...I(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": I()
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
        "mask-linear": [je]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ne()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ne()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ne()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ne()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ne()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ne()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ne()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ne()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ne()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ne()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ne()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ne()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ne()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ne()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [Se, $e]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ne()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ne()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [je]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ne()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ne()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
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
        mask: U()
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
        mask: B()
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
        mask: ["none", Se, $e]
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
          Se,
          $e
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
        brightness: [je, Se, $e]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [je, Se, $e]
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
          v,
          ls,
          as
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", je, Se, $e]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [je, Se, $e]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", je, Se, $e]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [je, Se, $e]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", je, Se, $e]
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
          Se,
          $e
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
        "backdrop-brightness": [je, Se, $e]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [je, Se, $e]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", je, Se, $e]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [je, Se, $e]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", je, Se, $e]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [je, Se, $e]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [je, Se, $e]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", je, Se, $e]
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
        "border-spacing": H()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": H()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": H()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Se, $e]
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
        duration: [je, "initial", Se, $e]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, Se, $e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [je, Se, $e]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, Se, $e]
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
        perspective: [y, Se, $e]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Se, $e, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: ye()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ye()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ye()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ye()
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
        accent: T()
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
        caret: T()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Se, $e]
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
        "scroll-m": H()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": H()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": H()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
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
        "will-change": ["auto", "scroll", "contents", "transform", Se, $e]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [je, ti, qr, Od]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
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
}, J7 = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (li(t, "cacheSize", e), li(t, "prefix", n), li(t, "experimentalParseClassName", r), us(t.theme, i.theme), us(t.classGroups, i.classGroups), us(t.conflictingClassGroups, i.conflictingClassGroups), us(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), li(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), cs(t.theme, o.theme), cs(t.classGroups, o.classGroups), cs(t.conflictingClassGroups, o.conflictingClassGroups), cs(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Cg(t, o, "orderSensitiveModifiers"), t), li = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, us = (t, e) => {
  if (e)
    for (const n in e)
      li(t, n, e[n]);
}, cs = (t, e) => {
  if (e)
    for (const n in e)
      Cg(t, e, n);
}, Cg = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, Q7 = (t, ...e) => typeof t == "function" ? _l(El, t, ...e) : _l(() => J7(El(), t), ...e), $g = /* @__PURE__ */ _l(El);
function On(...t) {
  return $g(hi(t));
}
var e5 = /\s+/g, t5 = (t) => typeof t != "string" || !t ? t : t.replace(e5, " ").trim(), Ys = (...t) => {
  const e = [], n = (r) => {
    if (!r && r !== 0 && r !== 0n) return;
    if (Array.isArray(r)) {
      for (let i = 0, s = r.length; i < s; i++) n(r[i]);
      return;
    }
    const o = typeof r;
    if (o === "string" || o === "number" || o === "bigint") {
      if (o === "number" && r !== r) return;
      e.push(String(r));
    } else if (o === "object") {
      const i = Object.keys(r);
      for (let s = 0, a = i.length; s < a; s++) {
        const l = i[s];
        r[l] && e.push(l);
      }
    }
  };
  for (let r = 0, o = t.length; r < o; r++) {
    const i = t[r];
    i != null && n(i);
  }
  return e.length > 0 ? t5(e.join(" ")) : void 0;
}, Ad = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, Qt = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, n5 = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, r5 = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = Ys(t[n], r) : t[n] = r;
    }
  return t;
}, Sg = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Sg(r, e) : r && e.push(r);
  }
}, _g = (...t) => {
  const e = [];
  Sg(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, Pl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = _g(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = Pl(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, o5 = {
  twMerge: !0,
  twMergeConfig: {}
};
function i5() {
  let t = null, e = {}, n = !1;
  return {
    get cachedTwMerge() {
      return t;
    },
    set cachedTwMerge(r) {
      t = r;
    },
    get cachedTwMergeConfig() {
      return e;
    },
    set cachedTwMergeConfig(r) {
      e = r;
    },
    get didTwMergeConfigChange() {
      return n;
    },
    set didTwMergeConfigChange(r) {
      n = r;
    },
    reset() {
      t = null, e = {}, n = !1;
    }
  };
}
var ir = i5(), s5 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...o5, ...r }, h = o?.base ? Ys(o.base, n?.base) : n?.base, f = o?.variants && !Qt(o.variants) ? Pl(s, o.variants) : s, v = o?.defaultVariants && !Qt(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !Qt(d.twMergeConfig) && !n5(d.twMergeConfig, ir.cachedTwMergeConfig) && (ir.didTwMergeConfigChange = !0, ir.cachedTwMergeConfig = d.twMergeConfig);
    const m = Qt(o?.slots), y = Qt(i) ? {} : {
      // add "base" to the slots object
      base: Ys(n?.base, m && o?.base),
      ...i
    }, w = m ? y : r5(
      { ...o?.slots },
      Qt(y) ? { base: n?.base } : y
    ), b = Qt(o?.compoundVariants) ? a : _g(o?.compoundVariants, a), x = (C) => {
      if (Qt(f) && Qt(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const k = (N, $ = f, P = null, A = null) => {
        const j = $[N];
        if (!j || Qt(j))
          return null;
        const q = A?.[N] ?? C?.[N];
        if (q === null) return null;
        const G = Ad(q);
        if (typeof G == "object")
          return null;
        const T = v?.[N], U = G ?? Ad(T);
        return j[U || "false"];
      }, O = () => {
        if (!f) return null;
        const N = Object.keys(f), $ = [];
        for (let P = 0; P < N.length; P++) {
          const A = k(N[P], f);
          A && $.push(A);
        }
        return $;
      }, V = (N, $) => {
        if (!f || typeof f != "object") return null;
        const P = [];
        for (const A in f) {
          const j = k(A, f, N, $), q = N === "base" && typeof j == "string" ? j : j && j[N];
          q && P.push(q);
        }
        return P;
      }, H = {};
      for (const N in C) {
        const $ = C[N];
        $ !== void 0 && (H[N] = $);
      }
      const L = (N, $) => {
        const P = typeof C?.[N] == "object" ? {
          [N]: C[N]?.initial
        } : {};
        return {
          ...v,
          ...H,
          ...P,
          ...$
        };
      }, M = (N = [], $) => {
        const P = [], A = N.length;
        for (let j = 0; j < A; j++) {
          const { class: q, className: G, ...T } = N[j];
          let U = !0;
          const ee = L(null, $);
          for (const B in T) {
            const Z = T[B], W = ee[B];
            if (Array.isArray(Z)) {
              if (!Z.includes(W)) {
                U = !1;
                break;
              }
            } else {
              if ((Z == null || Z === !1) && (W == null || W === !1))
                continue;
              if (W !== Z) {
                U = !1;
                break;
              }
            }
          }
          U && (q && P.push(q), G && P.push(G));
        }
        return P;
      }, D = (N) => {
        const $ = M(b, N);
        if (!Array.isArray($)) return $;
        const P = {}, A = t;
        for (let j = 0; j < $.length; j++) {
          const q = $[j];
          if (typeof q == "string")
            P.base = A(P.base, q)(d);
          else if (typeof q == "object")
            for (const G in q)
              P[G] = A(P[G], q[G])(d);
        }
        return P;
      }, _ = (N) => {
        if (l.length < 1) return null;
        const $ = {}, P = L(null, N);
        for (let A = 0; A < l.length; A++) {
          const {
            slots: j = [],
            class: q,
            className: G,
            ...T
          } = l[A];
          if (!Qt(T)) {
            let U = !0;
            for (const ee in T) {
              const B = P[ee], Z = T[ee];
              if (B === void 0 || (Array.isArray(Z) ? !Z.includes(B) : Z !== B)) {
                U = !1;
                break;
              }
            }
            if (!U) continue;
          }
          for (let U = 0; U < j.length; U++) {
            const ee = j[U];
            $[ee] || ($[ee] = []), $[ee].push([q, G]);
          }
        }
        return $;
      };
      if (!Qt(i) || !m) {
        const N = {};
        if (typeof w == "object" && !Qt(w)) {
          const $ = t;
          for (const P in w)
            N[P] = (A) => {
              const j = D(A), q = _(A);
              return $(
                w[P],
                V(P, A),
                j ? j[P] : void 0,
                q ? q[P] : void 0,
                A?.class,
                A?.className
              )(d);
            };
        }
        return N;
      }
      return t(
        h,
        O(),
        M(b),
        C?.class,
        C?.className
      )(d);
    }, E = () => {
      if (!(!f || typeof f != "object"))
        return Object.keys(f);
    };
    return x.variantKeys = E(), x.extend = o, x.base = h, x.slots = w, x.variants = f, x.defaultVariants = v, x.compoundSlots = l, x.compoundVariants = b, x;
  };
  return {
    tv: e,
    createTV: (n) => (r, o) => e(r, o ? Pl(n, o) : n)
  };
}, a5 = (t) => Qt(t) ? $g : Q7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), l5 = (t, e) => {
  const n = Ys(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!ir.cachedTwMerge || ir.didTwMergeConfigChange) && (ir.didTwMergeConfigChange = !1, ir.cachedTwMerge = a5(ir.cachedTwMergeConfig)), ir.cachedTwMerge(n) || void 0);
}, u5 = (...t) => (e) => l5(t, e), { tv: c5 } = s5(u5);
const zd = c5({
  base: "nopan nodrag focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-sm border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
var d5 = /* @__PURE__ */ re("<a><!></a>"), h5 = /* @__PURE__ */ re("<button><!></button>");
function Ge(t, e) {
  le(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ Le(e, [
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
  var f = {
    get class() {
      return n();
    },
    set class(b) {
      n(b), p();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), p();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), p();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), p();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), p();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), p();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), p();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), p();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), p();
    }
  }, v = pe(), m = Q(v);
  {
    var y = (b) => {
      var x = d5();
      ot(
        x,
        (C) => ({
          "data-slot": "button",
          class: C,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...h
        }),
        [
          () => On(zd({ variant: r(), size: o() }), n())
        ]
      );
      var E = Y(x);
      ze(E, () => u() ?? Ze), X(x), jt(x, (C) => i(C), () => i()), z(b, x);
    }, w = (b) => {
      var x = h5();
      ot(
        x,
        (C) => ({
          "data-slot": "button",
          class: C,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => On(zd({ variant: r(), size: o() }), n())
        ]
      );
      var E = Y(x);
      ze(E, () => u() ?? Ze), X(x), jt(x, (C) => i(C), () => i()), z(b, x);
    };
    ae(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return z(t, v), ue(f);
}
se(
  Ge,
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
function f5(t) {
  return typeof t == "function";
}
function Zi(t) {
  return t !== null && typeof t == "object";
}
const p5 = ["string", "number", "bigint", "boolean"];
function Ol(t) {
  return t == null || p5.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Ol(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const Us = Symbol("box"), Eg = Symbol("is-writable");
function ve(t, e) {
  const n = /* @__PURE__ */ S(t);
  return e ? {
    [Us]: !0,
    [Eg]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Us]: !0,
    get current() {
      return t();
    }
  };
}
function Pg(t) {
  return Zi(t) && Us in t;
}
function g5(t) {
  return Pg(t) ? t : f5(t) ? ve(t) : Kn(t);
}
function Kn(t) {
  let e = /* @__PURE__ */ we(kt(t));
  return {
    [Us]: !0,
    [Eg]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function Og(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var Md = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, v5 = /\n/g, m5 = /^\s*/, y5 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, w5 = /^:\s*/, b5 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, x5 = /^[;\s]*/, k5 = /^\s+|\s+$/g, C5 = `
`, Dd = "/", Vd = "*", Ur = "", $5 = "comment", S5 = "declaration";
function _5(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(v5);
    y && (n += y.length);
    var w = m.lastIndexOf(C5);
    r = ~w ? m.length - w : r + m.length;
  }
  function i() {
    var m = { line: n, column: r };
    return function(y) {
      return y.position = new s(m), u(), y;
    };
  }
  function s(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = e.source;
  }
  s.prototype.content = t;
  function a(m) {
    var y = new Error(
      e.source + ":" + n + ":" + r + ": " + m
    );
    if (y.reason = m, y.filename = e.source, y.line = n, y.column = r, y.source = t, !e.silent) throw y;
  }
  function l(m) {
    var y = m.exec(t);
    if (y) {
      var w = y[0];
      return o(w), t = t.slice(w.length), y;
    }
  }
  function u() {
    l(m5);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(Dd != t.charAt(0) || Vd != t.charAt(1))) {
      for (var y = 2; Ur != t.charAt(y) && (Vd != t.charAt(y) || Dd != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Ur === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: $5,
        comment: w
      });
    }
  }
  function f() {
    var m = i(), y = l(y5);
    if (y) {
      if (h(), !l(w5)) return a("property missing ':'");
      var w = l(b5), b = m({
        type: S5,
        property: Hd(y[0].replace(Md, Ur)),
        value: w ? Hd(w[0].replace(Md, Ur)) : Ur
      });
      return l(x5), b;
    }
  }
  function v() {
    var m = [];
    d(m);
    for (var y; y = f(); )
      y !== !1 && (m.push(y), d(m));
    return m;
  }
  return u(), v();
}
function Hd(t) {
  return t ? t.replace(k5, Ur) : Ur;
}
function E5(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = _5(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const P5 = /\d/, O5 = ["-", "_", "/", "."];
function N5(t = "") {
  if (!P5.test(t))
    return t !== t.toLowerCase();
}
function T5(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = O5.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = N5(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        e.push(n), n = i, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const l = n.at(-1);
        e.push(n.slice(0, Math.max(0, n.length - 1))), n = l + i, r = a;
        continue;
      }
    }
    n += i, r = a, o = s;
  }
  return e.push(n), e;
}
function Ng(t) {
  return t ? T5(t).map((e) => z5(e)).join("") : "";
}
function A5(t) {
  return M5(Ng(t || ""));
}
function z5(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function M5(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function ui(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[Ng(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[A5(r)] = o;
  }
  return E5(t, n), e;
}
function pi(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function D5(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const V5 = D5(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function H5(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${V5(e)}: ${t[e]};`).join(`
`);
}
function Ru(t = {}) {
  return H5(t).replace(`
`, " ");
}
const I5 = [
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
], L5 = new Set(I5);
function R5(t) {
  return L5.has(t);
}
function qn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && R5(o)) {
          const u = i, d = s;
          e[o] = Og(u, d);
        } else if (a && l)
          e[o] = pi(i, s);
        else if (o === "class") {
          const u = Ol(i), d = Ol(s);
          u && d ? e[o] = hi(i, s) : u ? e[o] = hi(i) : d && (e[o] = hi(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", f = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && f) {
            const v = ui(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = ui(i);
            e[o] = { ...v, ...s };
          } else if (h && f) {
            const v = ui(i), m = ui(s);
            e[o] = { ...v, ...m };
          } else u ? e[o] = i : d ? e[o] = s : h ? e[o] = i : f && (e[o] = s);
        } else
          e[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o], s = r[o];
        e[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof e.style == "object" && (e.style = Ru(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const j5 = {
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
}, B5 = Ru(j5), Tg = typeof window < "u" ? window : void 0;
function F5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let K5 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = Tg, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = po((r) => {
      const o = Ct(e, "focusin", r), i = Ct(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? F5(this.#e) : null;
  }
};
new K5();
function Z5(t) {
  return typeof t == "function";
}
class Wr {
  #e;
  #t;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(e) {
    this.#e = e, this.#t = Symbol(e);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#t;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return d1(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = An(this.#t);
    if (e === void 0)
      throw new Error(`Context "${this.#e}" not found`);
    return e;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(e) {
    const n = An(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return io(this.#t, e);
  }
}
function W5(t, e) {
  switch (t) {
    case "post":
      Be(e);
      break;
    case "pre":
      tn(e);
      break;
  }
}
function Ag(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  W5(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = yt(() => n(a, s));
    return s = a, l;
  });
}
function Nt(t, e, n) {
  Ag(t, "post", e, n);
}
function X5(t, e, n) {
  Ag(t, "pre", e, n);
}
Nt.pre = X5;
function Id(t) {
  return Z5(t) ? t() : t;
}
class q5 {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ S(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ S(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ S(() => {
    const e = Id(this.#r);
    if (e)
      return po((n) => {
        if (!this.#o) return;
        const r = new this.#o.ResizeObserver((o) => {
          this.#t = !0;
          for (const i of o) {
            const s = this.#n.box === "content-box" ? i.contentBoxSize : i.borderBoxSize, a = Array.isArray(s) ? s : [s];
            this.#e.width = a.reduce((l, u) => Math.max(l, u.inlineSize), 0), this.#e.height = a.reduce((l, u) => Math.max(l, u.blockSize), 0);
          }
          n();
        });
        return r.observe(e), () => {
          this.#t = !1, r.disconnect();
        };
      });
  });
  constructor(e, n = { box: "border-box" }) {
    this.#o = n.window ?? Tg, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = Id(this.#r);
    if (!e || !this.#o)
      return;
    const n = e.offsetWidth, r = e.offsetHeight;
    if (this.#n.box === "border-box")
      return { width: n, height: r };
    const o = this.#o.getComputedStyle(e), i = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), s = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom), a = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), l = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), u = n - i - a, d = r - s - l;
    return { width: u, height: d };
  }
  getSize() {
    return this.#t ? this.#e : this.calculateSize() ?? this.#e;
  }
  get current() {
    return c(this.#s)?.(), this.getSize();
  }
  get width() {
    return c(this.#i);
  }
  get height() {
    return c(this.#a);
  }
}
class Y5 {
  #e = () => {
  };
  #t = /* @__PURE__ */ S(() => this.#e());
  constructor(e, n) {
    let r;
    n !== void 0 && (r = n), this.#e = () => {
      try {
        return r;
      } finally {
        r = e();
      }
    };
  }
  get current() {
    return c(this.#t);
  }
}
function Wo(t) {
  Be(() => () => {
    t();
  });
}
function U5(t) {
  Be(() => yt(() => t()));
}
function G5(t, e) {
  return setTimeout(e, t);
}
function Wi(t) {
  af().then(t);
}
const J5 = 1, Q5 = 9, e3 = 11;
function Nl(t) {
  return Zi(t) && t.nodeType === J5 && typeof t.nodeName == "string";
}
function zg(t) {
  return Zi(t) && t.nodeType === Q5;
}
function t3(t) {
  return Zi(t) && t.constructor?.name === "VisualViewport";
}
function n3(t) {
  return Zi(t) && t.nodeType !== void 0;
}
function Mg(t) {
  return n3(t) && t.nodeType === e3 && "host" in t;
}
function r3(t, e) {
  if (!t || !e || !Nl(t) || !Nl(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Mg(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function o3(t) {
  return zg(t) ? t : t3(t) ? t.document : t?.ownerDocument ?? document;
}
function Dg(t) {
  return Mg(t) ? Dg(t.host) : zg(t) ? t.defaultView ?? window : Nl(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function i3(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Xi {
  element;
  #e = /* @__PURE__ */ S(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    K(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ve(e) : this.element = e;
  }
  getDocument = () => o3(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => i3(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function Vr(t, e) {
  return {
    [Y1()]: (n) => Pg(t) ? (t.current = n, yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function Tl(t) {
  return t ? "true" : "false";
}
function Gs(t) {
  return t ? "" : void 0;
}
function Ld(t) {
  return t ? !0 : void 0;
}
function Vg(t) {
  return t ? "open" : "closed";
}
function s3(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class a3 {
  #e;
  #t;
  attrs;
  constructor(e) {
    this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((n) => [n, this.getAttr(n)]));
  }
  getAttr(e, n) {
    return n ? `data-${n}-${e}` : `${this.#t}${e}`;
  }
  selector(e, n) {
    return `[${this.getAttr(e, n)}]`;
  }
}
function ju(t) {
  const e = new a3(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const ci = "ArrowDown", $o = "ArrowUp", Hg = "End", Al = "Enter", l3 = "Escape", Ig = "Home", Lg = "PageDown", Rg = "PageUp", $s = " ", Rd = "Tab", jg = typeof document < "u", zl = u3();
function u3() {
  return jg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Ml(t) {
  return t instanceof HTMLElement;
}
function c3(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function d3(t) {
  return t !== null;
}
class h3 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, Wo(() => this.#n());
  }
  #n() {
    this.#t && (window.cancelAnimationFrame(this.#t), this.#t = null);
  }
  run(e) {
    this.#n();
    const n = this.#e.ref.current;
    if (n) {
      if (typeof n.getAnimations != "function") {
        this.#r(e);
        return;
      }
      this.#t = window.requestAnimationFrame(() => {
        const r = n.getAnimations();
        if (r.length === 0) {
          this.#r(e);
          return;
        }
        Promise.allSettled(r.map((o) => o.finished)).then(() => {
          this.#r(e);
        });
      });
    }
  }
  #r(e) {
    const n = () => {
      e();
    };
    this.#e.afterTick ? Wi(n) : n();
  }
}
class f3 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ we(!1);
  constructor(e) {
    this.#e = e, K(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new h3({ ref: this.#e.ref, afterTick: this.#e.open }), Nt(() => this.#e.open.current, (n) => {
      n && K(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || K(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function We() {
}
function Gn(t, e) {
  return `bits-${t}`;
}
function Bg(t, e) {
  le(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  }, o = pe(), i = Q(o);
  return U1(i, n, (s) => {
    var a = pe(), l = Q(a);
    ze(l, () => n() ?? Ze), z(s, a);
  }), z(t, o), ue(r);
}
se(Bg, { children: {} }, [], [], !0);
const p3 = new Wr("BitsConfig");
function g3() {
  const t = new v3(null, {});
  return p3.getOr(t).opts;
}
class v3 {
  opts;
  constructor(e, n) {
    const r = m3(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function m3(t, e) {
  return (n) => ve(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function y3(t, e) {
  return (n) => {
    const r = g3();
    return ve(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const w3 = y3((t) => t.defaultPortalTo, "body");
function Dl(t, e) {
  le(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = w3(() => n()), s = h1();
  let a = /* @__PURE__ */ S(l);
  function l() {
    if (!jg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (hf(u), u = null);
  }
  Nt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = mu(Bg, { target: y, props: { children: r() }, context: s }), () => {
      d();
    };
  });
  var h = {
    get to() {
      return n();
    },
    set to(y) {
      n(y), p();
    },
    get children() {
      return r();
    },
    set children(y) {
      r(y), p();
    },
    get disabled() {
      return o();
    },
    set disabled(y) {
      o(y), p();
    }
  }, f = pe(), v = Q(f);
  {
    var m = (y) => {
      var w = pe(), b = Q(w);
      ze(b, () => r() ?? Ze), z(y, w);
    };
    ae(v, (y) => {
      o() && y(m);
    });
  }
  return z(t, f), ue(h);
}
se(Dl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function jd(t, e = 500) {
  let n = null;
  const r = (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      t(...o);
    }, e);
  };
  return r.destroy = () => {
    n !== null && (clearTimeout(n), n = null);
  }, r;
}
function Fg(t, e) {
  return t === e || t.contains(e);
}
function Kg(t) {
  return t?.ownerDocument ?? document;
}
function b3(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Zg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Vl = /* @__PURE__ */ Zg.join(","), Wg = typeof Element > "u", Ro = Wg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Js = !Wg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Qs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Qs(t.parentNode));
  return i;
}, x3 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, Xg = function(t, e, n) {
  if (Qs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(Vl));
  return e && Ro.call(t, Vl) && r.unshift(t), r = r.filter(n), r;
}, ea = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!Qs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = ea(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Ro.call(i, Vl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !Qs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var f = ea(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: i,
            candidates: f
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, qg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Yg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || x3(t)) && !qg(t) ? 0 : t.tabIndex;
}, k3 = function(t, e) {
  var n = Yg(t);
  return n < 0 && e && !qg(t) ? 0 : n;
}, C3 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, Ug = function(t) {
  return t.tagName === "INPUT";
}, $3 = function(t) {
  return Ug(t) && t.type === "hidden";
}, S3 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, _3 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, E3 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Js(t), n = function(i) {
    return e.querySelectorAll('input[type="radio"][name="' + i + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = n(window.CSS.escape(t.name));
  else
    try {
      r = n(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var o = _3(r, t.form);
  return !o || o === t;
}, P3 = function(t) {
  return Ug(t) && t.type === "radio";
}, O3 = function(t) {
  return P3(t) && !E3(t);
}, N3 = function(t) {
  var e, n = t && Js(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Js(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, Bd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, T3 = function(t, e) {
  var n = e.displayCheck, r = e.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
    var o = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !o;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Ro.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Ro.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Js(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return Bd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (N3(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Bd(t);
  return !1;
}, A3 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return Ro.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, ta = function(t, e) {
  return !(e.disabled || $3(e) || T3(e, t) || // For a details element with a summary, the summary element gets the focus
  S3(e) || A3(e));
}, Fd = function(t, e) {
  return !(O3(e) || Yg(e) < 0 || !ta(t, e));
}, z3 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, Gg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = k3(s, i), l = i ? Gg(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(C3).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, M3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = ea([t], e.includeContainer, {
    filter: Fd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: z3
  }) : n = Xg(t, e.includeContainer, Fd.bind(null, e)), Gg(n);
}, D3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = ea([t], e.includeContainer, {
    filter: ta.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = Xg(t, e.includeContainer, ta.bind(null, e)), n;
}, V3 = /* @__PURE__ */ Zg.concat("iframe:not([inert]):not([inert] *)").join(","), H3 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return Ro.call(t, V3) === !1 ? !1 : ta(e, t);
};
function I3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function L3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function R3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function j3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function Bu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((f) => f.toLowerCase().startsWith(u)).length <= 1)
      return Bu(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((f) => f.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const f = n ? t.indexOf(n) : -1;
      return Kd(h, Math.max(f, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = Kd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function Kd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const B3 = { afterMs: 1e4, onChange: We };
function Jg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...B3, ...e };
  let i = null, s = /* @__PURE__ */ we(kt(t));
  function a() {
    return o().setTimeout(
      () => {
        K(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Be(() => () => {
    i && o().clearTimeout(i);
  }), ve(() => c(s), (l) => {
    K(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class F3 {
  #e;
  #t;
  #n = /* @__PURE__ */ S(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ S(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Jg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Bu(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const K3 = "data-context-menu-trigger", Z3 = "data-context-menu-content";
ju({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class Fu {
  static create(e) {
    return new Fu(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = We;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Be(() => {
      this.#i = Kg(this.opts.ref.current);
    });
    let n = We;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    Nt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return G5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), Wo(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Wi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return pi(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      Ct(this.#i, "pointerdown", pi(this.#h, this.#f), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      Ct(this.#i, "pointerdown", pi(this.#p, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      Ct(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = Zd(e)), this.#e.current(e);
  };
  #d = jd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || q3(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = Zd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = Ct(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
    },
    10
  );
  #h = (e) => {
    this.#n[e.type] = !0;
  };
  #p = (e) => {
    this.#n[e.type] = !1;
  };
  #f = () => {
    this.opts.ref.current && (this.#r = X3(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? Fg(this.opts.ref.current, e) : !1;
  #v = jd(
    () => {
      for (const e in this.#n)
        this.#n[e] = !1;
      this.#r = !1;
    },
    20
  );
  #w() {
    return Object.values(this.#n).some(Boolean);
  }
  #m = () => {
    this.#o = !0;
  };
  #g = () => {
    this.#o = !1;
  };
  props = {
    onfocuscapture: this.#m,
    onblurcapture: this.#g
  };
}
function W3(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function X3(t) {
  const e = [...globalThis.bitsDismissableLayers], n = W3(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function q3(t, e) {
  const n = t.target;
  if (!c3(n)) return !1;
  const r = !!n.closest(`[${K3}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${Z3}]`);
  return r && o ? !1 : Kg(n).documentElement.contains(n) && !Fg(e, n) && b3(t, e);
}
function Zd(t) {
  const e = t.currentTarget, n = t.target;
  let r;
  t instanceof PointerEvent ? r = new PointerEvent(t.type, t) : r = new PointerEvent("pointerdown", t);
  let o = !1;
  return new Proxy(r, {
    get: (i, s) => s === "currentTarget" ? e : s === "target" ? n : s === "preventDefault" ? () => {
      o = !0, typeof i.preventDefault == "function" && i.preventDefault();
    } : s === "defaultPrevented" ? o : s in i ? i[s] : t[s]
  });
}
function Qg(t, e) {
  le(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, We), o = g(e, "onFocusOutside", 7, We), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = Fu.create({
    id: ve(() => i()),
    interactOutsideBehavior: ve(() => n()),
    onInteractOutside: ve(() => r()),
    enabled: ve(() => a()),
    onFocusOutside: ve(() => o()),
    isValidEvent: ve(() => l()),
    ref: u()
  });
  var h = {
    get interactOutsideBehavior() {
      return n();
    },
    set interactOutsideBehavior(m = "close") {
      n(m), p();
    },
    get onInteractOutside() {
      return r();
    },
    set onInteractOutside(m = We) {
      r(m), p();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = We) {
      o(m), p();
    },
    get id() {
      return i();
    },
    set id(m) {
      i(m), p();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), p();
    },
    get enabled() {
      return a();
    },
    set enabled(m) {
      a(m), p();
    },
    get isValidEvent() {
      return l();
    },
    set isValidEvent(m = () => !1) {
      l(m), p();
    },
    get ref() {
      return u();
    },
    set ref(m) {
      u(m), p();
    }
  }, f = pe(), v = Q(f);
  return ze(v, () => s() ?? Ze, () => ({ props: d.props })), z(t, f), ue(h);
}
se(
  Qg,
  {
    interactOutsideBehavior: {},
    onInteractOutside: {},
    onFocusOutside: {},
    id: {},
    children: {},
    enabled: {},
    isValidEvent: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class Ku {
  static create(e) {
    return new Ku(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Xi(this.opts.ref);
    let n = We;
    Nt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => Ct(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== l3 || !Y3(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function Y3(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function ev(t, e) {
  le(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, We), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  Ku.create({
    escapeKeydownBehavior: ve(() => n()),
    onEscapeKeydown: ve(() => r()),
    enabled: ve(() => i()),
    ref: s()
  });
  var a = {
    get escapeKeydownBehavior() {
      return n();
    },
    set escapeKeydownBehavior(d = "close") {
      n(d), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(d = We) {
      r(d), p();
    },
    get children() {
      return o();
    },
    set children(d) {
      o(d), p();
    },
    get enabled() {
      return i();
    },
    set enabled(d) {
      i(d), p();
    },
    get ref() {
      return s();
    },
    set ref(d) {
      s(d), p();
    }
  }, l = pe(), u = Q(l);
  return ze(u, () => o() ?? Ze), z(t, l), ue(a);
}
se(
  ev,
  {
    escapeKeydownBehavior: {},
    onEscapeKeydown: {},
    children: {},
    enabled: {},
    ref: {}
  },
  [],
  [],
  !0
);
class Zu {
  static instance;
  #e = Kn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Zu()), this.instance;
  }
  register(e) {
    const n = this.getActive();
    n && n !== e && n.pause();
    const r = document.activeElement;
    r && r !== document.body && this.#n.set(e, r), this.#e.current = this.#e.current.filter((o) => o !== e), this.#e.current.unshift(e);
  }
  unregister(e) {
    this.#e.current = this.#e.current.filter((r) => r !== e);
    const n = this.getActive();
    n && n.resume();
  }
  getActive() {
    return this.#e.current[0];
  }
  setFocusMemory(e, n) {
    this.#t.set(e, n);
  }
  getFocusMemory(e) {
    return this.#t.get(e);
  }
  isActiveScope(e) {
    return this.getActive() === e;
  }
  setPreFocusMemory(e, n) {
    this.#n.set(e, n);
  }
  getPreFocusMemory(e) {
    return this.#n.get(e);
  }
  clearPreFocusMemory(e) {
    this.#n.delete(e);
  }
}
class Wu {
  #e = !1;
  #t = null;
  #n = Zu.getInstance();
  #r = [];
  #o;
  constructor(e) {
    this.#o = e;
  }
  get paused() {
    return this.#e;
  }
  pause() {
    this.#e = !0;
  }
  resume() {
    this.#e = !1;
  }
  #i() {
    for (const e of this.#r)
      e();
    this.#r = [];
  }
  mount(e) {
    this.#t && this.unmount(), this.#t = e, this.#n.register(this), this.#l(), this.#a();
  }
  unmount() {
    this.#t && (this.#i(), this.#s(), this.#n.unregister(this), this.#n.clearPreFocusMemory(this), this.#t = null);
  }
  #a() {
    if (!this.#t) return;
    const e = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: !1, cancelable: !0 });
    this.#o.onOpenAutoFocus.current(e), e.defaultPrevented || requestAnimationFrame(() => {
      if (!this.#t) return;
      const n = this.#c();
      n ? (n.focus(), this.#n.setFocusMemory(this, n)) : this.#t.focus();
    });
  }
  #s() {
    const e = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: !1, cancelable: !0 });
    if (this.#o.onCloseAutoFocus.current?.(e), !e.defaultPrevented) {
      const n = this.#n.getPreFocusMemory(this);
      if (n && document.contains(n))
        try {
          n.focus();
        } catch {
          document.body.focus();
        }
    }
  }
  #l() {
    if (!this.#t || !this.#o.trap.current) return;
    const e = this.#t, n = e.ownerDocument, r = (s) => {
      if (this.#e || !this.#n.isActiveScope(this)) return;
      const a = s.target;
      if (a)
        if (e.contains(a))
          this.#n.setFocusMemory(this, a);
        else {
          const l = this.#n.getFocusMemory(this);
          if (l && e.contains(l) && H3(l))
            s.preventDefault(), l.focus();
          else {
            const u = this.#c(), d = this.#d()[0];
            (u || d || e).focus();
          }
        }
    }, o = (s) => {
      if (!this.#o.loop || this.#e || s.key !== "Tab" || !this.#n.isActiveScope(this)) return;
      const a = this.#u();
      if (a.length === 0) return;
      const l = a[0], u = a[a.length - 1];
      !s.shiftKey && n.activeElement === u ? (s.preventDefault(), l.focus()) : s.shiftKey && n.activeElement === l && (s.preventDefault(), u.focus());
    };
    this.#r.push(Ct(n, "focusin", r, { capture: !0 }), Ct(e, "keydown", o));
    const i = new MutationObserver(() => {
      const s = this.#n.getFocusMemory(this);
      if (s && !e.contains(s)) {
        const a = this.#c(), l = this.#d()[0], u = a || l;
        u ? (u.focus(), this.#n.setFocusMemory(this, u)) : e.focus();
      }
    });
    i.observe(e, { childList: !0, subtree: !0 }), this.#r.push(() => i.disconnect());
  }
  #u() {
    return this.#t ? M3(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? D3(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return Nt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new Wu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Wo(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function tv(t, e) {
  le(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, We), s = g(e, "onOpenAutoFocus", 7, We), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = Wu.use({
    enabled: ve(() => n()),
    trap: ve(() => r()),
    loop: o(),
    onCloseAutoFocus: ve(() => i()),
    onOpenAutoFocus: ve(() => s()),
    ref: l()
  });
  var d = {
    get enabled() {
      return n();
    },
    set enabled(v = !1) {
      n(v), p();
    },
    get trapFocus() {
      return r();
    },
    set trapFocus(v = !1) {
      r(v), p();
    },
    get loop() {
      return o();
    },
    set loop(v = !1) {
      o(v), p();
    },
    get onCloseAutoFocus() {
      return i();
    },
    set onCloseAutoFocus(v = We) {
      i(v), p();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = We) {
      s(v), p();
    },
    get focusScope() {
      return a();
    },
    set focusScope(v) {
      a(v), p();
    },
    get ref() {
      return l();
    },
    set ref(v) {
      l(v), p();
    }
  }, h = pe(), f = Q(h);
  return ze(f, () => a() ?? Ze, () => ({ props: u.props })), z(t, h), ue(d);
}
se(
  tv,
  {
    enabled: {},
    trapFocus: {},
    loop: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    focusScope: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class Xu {
  static create(e) {
    return new Xu(e);
  }
  opts;
  domContext;
  #e = We;
  constructor(e) {
    this.opts = e, this.domContext = new Xi(e.ref);
    let n = We;
    Nt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return pi(Ct(this.domContext.getDocument(), "pointerdown", this.#n), Ct(this.domContext.getDocument(), "pointerup", Og(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !Ml(n) || !Ml(r) || !this.opts.enabled.current || !G3(this) || !r3(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = U3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = We;
  };
}
const Wd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function U3(t, e) {
  const n = Wd(e), r = Wd(t);
  return ds(e, "none"), ds(t, "text"), () => {
    ds(e, n), ds(t, r);
  };
}
function ds(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function G3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function nv(t, e) {
  le(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, We), o = g(e, "onPointerUp", 7, We), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  Xu.create({
    id: ve(() => i()),
    onPointerDown: ve(() => r()),
    onPointerUp: ve(() => o()),
    enabled: ve(() => a() && n()),
    ref: l()
  });
  var u = {
    get preventOverflowTextSelection() {
      return n();
    },
    set preventOverflowTextSelection(f = !0) {
      n(f), p();
    },
    get onPointerDown() {
      return r();
    },
    set onPointerDown(f = We) {
      r(f), p();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(f = We) {
      o(f), p();
    },
    get id() {
      return i();
    },
    set id(f) {
      i(f), p();
    },
    get children() {
      return s();
    },
    set children(f) {
      s(f), p();
    },
    get enabled() {
      return a();
    },
    set enabled(f) {
      a(f), p();
    },
    get ref() {
      return l();
    },
    set ref(f) {
      l(f), p();
    }
  }, d = pe(), h = Q(d);
  return ze(h, () => s() ?? Ze), z(t, d), ue(u);
}
se(
  nv,
  {
    preventOverflowTextSelection: {},
    onPointerDown: {},
    onPointerUp: {},
    id: {},
    children: {},
    enabled: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsIdCounter ??= { current: 0 };
function na(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class J3 {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ we();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), K(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = go(() => {
      K(this.#n, this.#e(...e), !0);
    })), Be(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const Ss = new ix();
let hs = /* @__PURE__ */ we(null), tl = null, ni = null, ri = !1;
const Xd = ve(() => {
  for (const t of Ss.values())
    if (t) return !0;
  return !1;
});
let nl = null;
const Q3 = new J3(() => {
  function t() {
    document.body.setAttribute("style", c(hs) ?? ""), document.body.style.removeProperty("--scrollbar-width"), zl && tl?.(), K(hs, null);
  }
  function e() {
    ni !== null && (window.clearTimeout(ni), ni = null);
  }
  function n(o, i) {
    e(), ri = !0, nl = Date.now();
    const s = nl, a = () => {
      ni = null, nl === s && (rv(Ss) ? ri = !1 : (ri = !1, i()));
    }, l = o === null ? 24 : o;
    ni = window.setTimeout(a, l);
  }
  function r() {
    c(hs) === null && Ss.size === 0 && !ri && K(hs, document.body.getAttribute("style"), !0);
  }
  return Nt(() => Xd.current, () => {
    if (!Xd.current) return;
    r(), ri = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", zl && (tl = Ct(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Wi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Wo(() => () => {
    tl?.();
  }), {
    get lockMap() {
      return Ss;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class ek {
  #e = na();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = Q3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ve(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), Wo(() => {
      if (this.#r.lockMap.delete(this.#e), rv(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function rv(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function Hl(t, e) {
  le(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new ek(n(), () => r());
  var o = {
    get preventScroll() {
      return n();
    },
    set preventScroll(i = !0) {
      n(i), p();
    },
    get restoreScrollDelay() {
      return r();
    },
    set restoreScrollDelay(i = null) {
      r(i), p();
    }
  };
  return ue(o);
}
se(Hl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const tk = ju({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), nk = new Wr("Checkbox.Group"), ov = new Wr("Checkbox.Root");
class qu {
  static create(e, n = null) {
    return ov.set(new qu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ S(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ S(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    K(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = Vr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Nt.pre(
      [
        () => lu(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), Nt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === Al) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === $s && (e.preventDefault(), this.#o());
    }
  }
  #o() {
    this.opts.indeterminate.current ? (this.opts.indeterminate.current = !1, this.opts.checked.current = !0) : this.opts.checked.current = !this.opts.checked.current;
  }
  onclick(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (this.opts.type.current === "submit") {
        this.#o();
        return;
      }
      e.preventDefault(), this.#o();
    }
  }
  #i = /* @__PURE__ */ S(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    K(this.#i, e);
  }
  #a = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": s3(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Tl(this.trueRequired),
    "aria-readonly": Tl(this.trueReadonly),
    "data-disabled": Gs(this.trueDisabled),
    "data-readonly": Gs(this.trueReadonly),
    "data-state": rk(this.opts.checked.current, this.opts.indeterminate.current),
    [tk.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return c(this.#a);
  }
  set props(e) {
    K(this.#a, e);
  }
}
class Yu {
  static create() {
    return new Yu(ov.get());
  }
  root;
  #e = /* @__PURE__ */ S(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#t);
  }
  set shouldRender(e) {
    K(this.#t, e);
  }
  constructor(e) {
    this.root = e, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    Ml(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ S(() => ({
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
  set props(e) {
    K(this.#n, e);
  }
}
function rk(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var ok = /* @__PURE__ */ re("<input/>"), ik = /* @__PURE__ */ re("<input/>");
function Uu(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ S(() => qn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: B5
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), p();
    }
  }, s = pe(), a = Q(s);
  {
    var l = (d) => {
      var h = ok();
      ot(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), z(d, h);
    }, u = (d) => {
      var h = ik();
      ot(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), Ds(h, n), z(d, h);
    };
    ae(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return z(t, s), ue(i);
}
se(Uu, { value: {} }, [], [], !0);
function iv(t, e) {
  le(e, !1);
  const n = Yu.create();
  wu();
  var r = pe(), o = Q(r);
  {
    var i = (s) => {
      Uu(s, Ke(() => n.props));
    };
    ae(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  z(t, r), ue();
}
se(iv, {}, [], [], !0);
var sk = /* @__PURE__ */ re("<button><!></button>"), ak = /* @__PURE__ */ re("<!> <!>", 1);
function sv(t, e) {
  const n = Mi();
  le(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Gn(n)), f = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ Le(e, [
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
  const x = nk.getOr(null);
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), Nt.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const E = qu.create(
    {
      checked: ve(() => r(), (D) => {
        r(D), i()?.(D);
      }),
      disabled: ve(() => a() ?? !1),
      required: ve(() => l()),
      name: ve(() => u()),
      value: ve(() => d()),
      id: ve(() => h()),
      ref: ve(() => o(), (D) => o(D)),
      indeterminate: ve(() => f(), (D) => {
        f(D), v()?.(D);
      }),
      type: ve(() => y()),
      readonly: ve(() => !!w())
    },
    x
  ), C = /* @__PURE__ */ S(() => qn({ ...b }, E.props));
  var k = {
    get checked() {
      return r();
    },
    set checked(D = !1) {
      r(D), p();
    },
    get ref() {
      return o();
    },
    set ref(D = null) {
      o(D), p();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(D) {
      i(D), p();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), p();
    },
    get disabled() {
      return a();
    },
    set disabled(D = !1) {
      a(D), p();
    },
    get required() {
      return l();
    },
    set required(D = !1) {
      l(D), p();
    },
    get name() {
      return u();
    },
    set name(D = void 0) {
      u(D), p();
    },
    get value() {
      return d();
    },
    set value(D = "on") {
      d(D), p();
    },
    get id() {
      return h();
    },
    set id(D = Gn(n)) {
      h(D), p();
    },
    get indeterminate() {
      return f();
    },
    set indeterminate(D = !1) {
      f(D), p();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(D) {
      v(D), p();
    },
    get child() {
      return m();
    },
    set child(D) {
      m(D), p();
    },
    get type() {
      return y();
    },
    set type(D = "button") {
      y(D), p();
    },
    get readonly() {
      return w();
    },
    set readonly(D) {
      w(D), p();
    }
  }, O = ak(), V = Q(O);
  {
    var H = (D) => {
      var _ = pe(), N = Q(_);
      {
        let $ = /* @__PURE__ */ S(() => ({ props: c(C), ...E.snippetProps }));
        ze(N, m, () => c($));
      }
      z(D, _);
    }, L = (D) => {
      var _ = sk();
      ot(_, () => ({ ...c(C) }));
      var N = Y(_);
      ze(N, () => s() ?? Ze, () => E.snippetProps), X(_), z(D, _);
    };
    ae(V, (D) => {
      m() ? D(H) : D(L, !1);
    });
  }
  var M = R(V, 2);
  return iv(M, {}), z(t, O), ue(k);
}
se(
  sv,
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
const lk = ["top", "right", "bottom", "left"], Ir = Math.min, cn = Math.max, ra = Math.round, fs = Math.floor, Yn = (t) => ({
  x: t,
  y: t
}), uk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ck = {
  start: "end",
  end: "start"
};
function Il(t, e, n) {
  return cn(t, Ir(e, n));
}
function yr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function wr(t) {
  return t.split("-")[0];
}
function Xo(t) {
  return t.split("-")[1];
}
function Gu(t) {
  return t === "x" ? "y" : "x";
}
function Ju(t) {
  return t === "y" ? "height" : "width";
}
const dk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Zn(t) {
  return dk.has(wr(t)) ? "y" : "x";
}
function Qu(t) {
  return Gu(Zn(t));
}
function hk(t, e, n) {
  n === void 0 && (n = !1);
  const r = Xo(t), o = Qu(t), i = Ju(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = oa(s)), [s, oa(s)];
}
function fk(t) {
  const e = oa(t);
  return [Ll(t), e, Ll(e)];
}
function Ll(t) {
  return t.replace(/start|end/g, (e) => ck[e]);
}
const qd = ["left", "right"], Yd = ["right", "left"], pk = ["top", "bottom"], gk = ["bottom", "top"];
function vk(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Yd : qd : e ? qd : Yd;
    case "left":
    case "right":
      return e ? pk : gk;
    default:
      return [];
  }
}
function mk(t, e, n, r) {
  const o = Xo(t);
  let i = vk(wr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Ll)))), i;
}
function oa(t) {
  return t.replace(/left|right|bottom|top/g, (e) => uk[e]);
}
function yk(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function av(t) {
  return typeof t != "number" ? yk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ia(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Ud(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = Zn(e), s = Qu(e), a = Ju(s), l = wr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Xo(e)) {
    case "start":
      v[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const wk = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let u = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: h
  } = Ud(u, r, l), f = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x,
      y: E,
      data: C,
      reset: k
    } = await b({
      x: d,
      y: h,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = x ?? d, h = E ?? h, v = {
      ...v,
      [w]: {
        ...v[w],
        ...C
      }
    }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : k.rects), {
      x: d,
      y: h
    } = Ud(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Ei(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = yr(e, t), m = av(v), y = a[f ? h === "floating" ? "reference" : "floating" : h], w = ia(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), E = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ia(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + m.top) / E.y,
    bottom: (C.bottom - w.bottom + m.bottom) / E.y,
    left: (w.left - C.left + m.left) / E.x,
    right: (C.right - w.right + m.right) / E.x
  };
}
const bk = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: u,
      padding: d = 0
    } = yr(t, e) || {};
    if (u == null)
      return {};
    const h = av(d), f = {
      x: n,
      y: r
    }, v = Qu(o), m = Ju(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - f[v] - i.floating[m], k = f[v] - i.reference[v], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = O ? O[E] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(O))) && (V = a.floating[E] || i.floating[m]);
    const H = C / 2 - k / 2, L = V / 2 - y[m] / 2 - 1, M = Ir(h[b], L), D = Ir(h[x], L), _ = M, N = V - y[m] - D, $ = V / 2 - y[m] / 2 + H, P = Il(_, $, N), A = !l.arrow && Xo(o) != null && $ !== P && i.reference[m] / 2 - ($ < _ ? M : D) - y[m] / 2 < 0, j = A ? $ < _ ? $ - _ : $ - N : 0;
    return {
      [v]: f[v] + j,
      data: {
        [v]: P,
        centerOffset: $ - P - j,
        ...A && {
          alignmentOffset: j
        }
      },
      reset: A
    };
  }
}), xk = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = e, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = yr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = wr(o), x = Zn(a), E = wr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (E || !y ? [oa(a)] : fk(a)), O = m !== "none";
      !f && O && k.push(...mk(a, y, m, C));
      const V = [a, ...k], H = await Ei(e, w), L = [];
      let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && L.push(H[b]), h) {
        const $ = hk(o, s, C);
        L.push(H[$[0]], H[$[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: L
      }], !L.every(($) => $ <= 0)) {
        var D, _;
        const $ = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, P = V[$];
        if (P && (!(h === "alignment" && x !== Zn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((j) => Zn(j.placement) === x ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: M
            },
            reset: {
              placement: P
            }
          };
        let A = (_ = M.filter((j) => j.overflows[0] <= 0).sort((j, q) => j.overflows[1] - q.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!A)
          switch (v) {
            case "bestFit": {
              var N;
              const j = (N = M.filter((q) => {
                if (O) {
                  const G = Zn(q.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((G) => G > 0).reduce((G, T) => G + T, 0)]).sort((q, G) => q[1] - G[1])[0]) == null ? void 0 : N[0];
              j && (A = j);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function Gd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Jd(t) {
  return lk.some((e) => t[e] >= 0);
}
const kk = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = yr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await Ei(e, {
            ...o,
            elementContext: "reference"
          }), s = Gd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Jd(s)
            }
          };
        }
        case "escaped": {
          const i = await Ei(e, {
            ...o,
            altBoundary: !0
          }), s = Gd(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Jd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, lv = /* @__PURE__ */ new Set(["left", "top"]);
async function Ck(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = wr(n), a = Xo(n), l = Zn(n) === "y", u = lv.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = yr(e, t);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof m == "number" && (v = a === "end" ? m * -1 : m), l ? {
    x: v * d,
    y: f * u
  } : {
    x: f * u,
    y: v * d
  };
}
const $k = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, l = await Ck(e, t);
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
}, Sk = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
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
      } = yr(t, e), u = {
        x: n,
        y: r
      }, d = await Ei(e, l), h = Zn(wr(o)), f = Gu(h);
      let v = u[f], m = u[h];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = v + d[w], E = v - d[b];
        v = Il(x, v, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = m + d[w], E = m - d[b];
        m = Il(x, m, E);
      }
      const y = a.fn({
        ...e,
        [f]: v,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [h]: s
          }
        }
      };
    }
  };
}, _k = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = e, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = yr(t, e), d = {
        x: n,
        y: r
      }, h = Zn(o), f = Gu(h);
      let v = d[f], m = d[h];
      const y = yr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const E = f === "y" ? "height" : "width", C = i.reference[f] - i.floating[E] + w.mainAxis, k = i.reference[f] + i.reference[E] - w.mainAxis;
        v < C ? v = C : v > k && (v = k);
      }
      if (u) {
        var b, x;
        const E = f === "y" ? "width" : "height", C = lv.has(wr(o)), k = i.reference[h] - i.floating[E] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), O = i.reference[h] + i.reference[E] + (C ? 0 : ((x = s.offset) == null ? void 0 : x[h]) || 0) - (C ? w.crossAxis : 0);
        m < k ? m = k : m > O && (m = O);
      }
      return {
        [f]: v,
        [h]: m
      };
    }
  };
}, Ek = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = e, {
        apply: l = () => {
        },
        ...u
      } = yr(t, e), d = await Ei(e, u), h = wr(o), f = Xo(o), v = Zn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = f === "end" ? "top" : "bottom");
      const x = y - d.top - d.bottom, E = m - d.left - d.right, C = Ir(y - d[w], x), k = Ir(m - d[b], E), O = !e.middlewareData.shift;
      let V = C, H = k;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (H = E), (r = e.middlewareData.shift) != null && r.enabled.y && (V = x), O && !f) {
        const M = cn(d.left, 0), D = cn(d.right, 0), _ = cn(d.top, 0), N = cn(d.bottom, 0);
        v ? H = m - 2 * (M !== 0 || D !== 0 ? M + D : cn(d.left, d.right)) : V = y - 2 * (_ !== 0 || N !== 0 ? _ + N : cn(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: H,
        availableHeight: V
      });
      const L = await s.getDimensions(a.floating);
      return m !== L.width || y !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Aa() {
  return typeof window < "u";
}
function qo(t) {
  return uv(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function hn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function er(t) {
  var e;
  return (e = (uv(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function uv(t) {
  return Aa() ? t instanceof Node || t instanceof hn(t).Node : !1;
}
function zn(t) {
  return Aa() ? t instanceof Element || t instanceof hn(t).Element : !1;
}
function Jn(t) {
  return Aa() ? t instanceof HTMLElement || t instanceof hn(t).HTMLElement : !1;
}
function Qd(t) {
  return !Aa() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof hn(t).ShadowRoot;
}
const Pk = /* @__PURE__ */ new Set(["inline", "contents"]);
function qi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Mn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !Pk.has(o);
}
const Ok = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Nk(t) {
  return Ok.has(qo(t));
}
const Tk = [":popover-open", ":modal"];
function za(t) {
  return Tk.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Ak = ["transform", "translate", "scale", "rotate", "perspective"], zk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Mk = ["paint", "layout", "strict", "content"];
function ec(t) {
  const e = tc(), n = zn(t) ? Mn(t) : t;
  return Ak.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || zk.some((r) => (n.willChange || "").includes(r)) || Mk.some((r) => (n.contain || "").includes(r));
}
function Dk(t) {
  let e = Lr(t);
  for (; Jn(e) && !jo(e); ) {
    if (ec(e))
      return e;
    if (za(e))
      return null;
    e = Lr(e);
  }
  return null;
}
function tc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Vk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function jo(t) {
  return Vk.has(qo(t));
}
function Mn(t) {
  return hn(t).getComputedStyle(t);
}
function Ma(t) {
  return zn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Lr(t) {
  if (qo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Qd(t) && t.host || // Fallback.
    er(t)
  );
  return Qd(e) ? e.host : e;
}
function cv(t) {
  const e = Lr(t);
  return jo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Jn(e) && qi(e) ? e : cv(e);
}
function Pi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = cv(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = hn(o);
  if (i) {
    const a = Rl(s);
    return e.concat(s, s.visualViewport || [], qi(o) ? o : [], a && n ? Pi(a) : []);
  }
  return e.concat(o, Pi(o, [], n));
}
function Rl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function dv(t) {
  const e = Mn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Jn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = ra(n) !== i || ra(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function nc(t) {
  return zn(t) ? t : t.contextElement;
}
function No(t) {
  const e = nc(t);
  if (!Jn(e))
    return Yn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = dv(e);
  let s = (i ? ra(n.width) : n.width) / r, a = (i ? ra(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Hk = /* @__PURE__ */ Yn(0);
function hv(t) {
  const e = hn(t);
  return !tc() || !e.visualViewport ? Hk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ik(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== hn(t) ? !1 : e;
}
function ho(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = nc(t);
  let s = Yn(1);
  e && (r ? zn(r) && (s = No(r)) : s = No(t));
  const a = Ik(i, n, r) ? hv(i) : Yn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = hn(i), v = r && zn(r) ? hn(r) : r;
    let m = f, y = Rl(m);
    for (; y && r && v !== m; ) {
      const w = No(y), b = y.getBoundingClientRect(), x = Mn(y), E = b.left + (y.clientLeft + parseFloat(x.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += E, u += C, m = hn(y), y = Rl(m);
    }
  }
  return ia({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function Da(t, e) {
  const n = Ma(t).scrollLeft;
  return e ? e.left + n : ho(er(t)).left + n;
}
function fv(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Da(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Lk(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = er(r), a = e ? za(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Yn(1);
  const d = Yn(0), h = Jn(r);
  if ((h || !h && !i) && ((qo(r) !== "body" || qi(s)) && (l = Ma(r)), Jn(r))) {
    const v = ho(r);
    u = No(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const f = s && !h && !i ? fv(s, l) : Yn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function Rk(t) {
  return Array.from(t.getClientRects());
}
function jk(t) {
  const e = er(t), n = Ma(t), r = t.ownerDocument.body, o = cn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = cn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Da(t);
  const a = -n.scrollTop;
  return Mn(r).direction === "rtl" && (s += cn(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const eh = 25;
function Bk(t, e) {
  const n = hn(t), r = er(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = tc();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Da(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= eh && (i -= m);
  } else u <= eh && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Fk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Kk(t, e) {
  const n = ho(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Jn(t) ? No(t) : Yn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function th(t, e, n) {
  let r;
  if (e === "viewport")
    r = Bk(t, n);
  else if (e === "document")
    r = jk(er(t));
  else if (zn(e))
    r = Kk(e, n);
  else {
    const o = hv(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return ia(r);
}
function pv(t, e) {
  const n = Lr(t);
  return n === e || !zn(n) || jo(n) ? !1 : Mn(n).position === "fixed" || pv(n, e);
}
function Zk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Pi(t, [], !1).filter((a) => zn(a) && qo(a) !== "body"), o = null;
  const i = Mn(t).position === "fixed";
  let s = i ? Lr(t) : t;
  for (; zn(s) && !jo(s); ) {
    const a = Mn(s), l = ec(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Fk.has(o.position) || qi(s) && !l && pv(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = Lr(s);
  }
  return e.set(t, r), r;
}
function Wk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? za(e) ? [] : Zk(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = th(e, u, o);
    return l.top = cn(d.top, l.top), l.right = Ir(d.right, l.right), l.bottom = Ir(d.bottom, l.bottom), l.left = cn(d.left, l.left), l;
  }, th(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Xk(t) {
  const {
    width: e,
    height: n
  } = dv(t);
  return {
    width: e,
    height: n
  };
}
function qk(t, e, n) {
  const r = Jn(e), o = er(e), i = n === "fixed", s = ho(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yn(0);
  function u() {
    l.x = Da(o);
  }
  if (r || !r && !i)
    if ((qo(e) !== "body" || qi(o)) && (a = Ma(e)), r) {
      const v = ho(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? fv(o, a) : Yn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rl(t) {
  return Mn(t).position === "static";
}
function nh(t, e) {
  if (!Jn(t) || Mn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return er(t) === n && (n = n.ownerDocument.body), n;
}
function gv(t, e) {
  const n = hn(t);
  if (za(t))
    return n;
  if (!Jn(t)) {
    let o = Lr(t);
    for (; o && !jo(o); ) {
      if (zn(o) && !rl(o))
        return o;
      o = Lr(o);
    }
    return n;
  }
  let r = nh(t, e);
  for (; r && Nk(r) && rl(r); )
    r = nh(r, e);
  return r && jo(r) && rl(r) && !ec(r) ? n : r || Dk(t) || n;
}
const Yk = async function(t) {
  const e = this.getOffsetParent || gv, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: qk(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Uk(t) {
  return Mn(t).direction === "rtl";
}
const Gk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lk,
  getDocumentElement: er,
  getClippingRect: Wk,
  getOffsetParent: gv,
  getElementRects: Yk,
  getClientRects: Rk,
  getDimensions: Xk,
  getScale: No,
  isElement: zn,
  isRTL: Uk
};
function vv(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Jk(t, e) {
  let n = null, r;
  const o = er(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = t.getBoundingClientRect(), {
      left: d,
      top: h,
      width: f,
      height: v
    } = u;
    if (a || e(), !f || !v)
      return;
    const m = fs(h), y = fs(o.clientWidth - (d + f)), w = fs(o.clientHeight - (h + v)), b = fs(d), x = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: cn(0, Ir(1, l)) || 1
    };
    let E = !0;
    function C(k) {
      const O = k[0].intersectionRatio;
      if (O !== l) {
        if (!E)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !vv(u, t.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function Qk(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = nc(t), d = o || i ? [...u ? Pi(u) : [], ...Pi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? Jk(u, n) : null;
  let f = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === u && v && (v.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? ho(t) : null;
  l && w();
  function w() {
    const b = ho(t);
    y && !vv(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const mv = $k, yv = Sk, wv = xk, e4 = Ek, t4 = kk, bv = bk, n4 = _k, xv = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gk,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return wk(t, e, {
    ...o,
    platform: i
  });
};
function Yr(t) {
  return typeof t == "function" ? t() : t;
}
function kv(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rh(t, e) {
  const n = kv(t);
  return Math.round(e * n) / n;
}
function r4(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function o4(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ S(() => Yr(t.open) ?? !0), r = /* @__PURE__ */ S(() => Yr(t.middleware)), o = /* @__PURE__ */ S(() => Yr(t.transform) ?? !0), i = /* @__PURE__ */ S(() => Yr(t.placement) ?? "bottom"), s = /* @__PURE__ */ S(() => Yr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ S(() => Yr(t.sideOffset) ?? 0), l = /* @__PURE__ */ S(() => Yr(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ we(0), h = /* @__PURE__ */ we(0);
  const f = Kn(null);
  let v = /* @__PURE__ */ we(kt(c(s))), m = /* @__PURE__ */ we(kt(c(i))), y = /* @__PURE__ */ we(kt({})), w = /* @__PURE__ */ we(!1), b = !1, x = 0;
  const E = /* @__PURE__ */ S(() => {
    const M = f.current ? rh(f.current, c(d)) : c(d), D = f.current ? rh(f.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${M}px, ${D}px)`,
      ...f.current && kv(f.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${M}px`,
      top: `${D}px`
    };
  });
  let C;
  function k() {
    if (u.current === null || f.current === null) return;
    const M = u.current, D = f.current, _ = ++x;
    xv(M, D, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((N) => {
      if (!(_ !== x || u.current !== M || f.current !== D)) {
        if (i4(M)) {
          K(
            y,
            {
              ...c(y),
              hide: {
                // oxlint-disable-next-line no-explicit-any
                ...c(y).hide,
                referenceHidden: !0
              }
            },
            !0
          );
          return;
        }
        if (!c(n) && c(d) !== 0 && c(h) !== 0) {
          const $ = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (N.x <= $ && N.y <= $) return;
        }
        K(d, N.x, !0), K(h, N.y, !0), K(v, N.strategy, !0), K(m, N.placement, !0), K(y, N.middlewareData, !0), K(w, !0);
      }
    });
  }
  function O() {
    typeof C == "function" && (C(), C = void 0), x++;
  }
  function V() {
    if (O(), e === void 0) {
      k();
      return;
    }
    c(n) && (u.current === null || f.current === null || (C = e(u.current, f.current, k)));
  }
  function H() {
    !c(n) && f.current === null && K(w, !1);
  }
  function L() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(l),
      c(n)
    ];
  }
  return Be(() => {
    e === void 0 && c(n) && k();
  }), Be(V), Be(() => {
    if (e !== void 0) {
      if (L(), !c(n)) {
        b = !1;
        return;
      }
      if (!c(w)) {
        b = !1;
        return;
      }
      if (!b) {
        b = !0;
        return;
      }
      k();
    }
  }), Be(H), Be(() => O), {
    floating: f,
    reference: u,
    get strategy() {
      return c(v);
    },
    get placement() {
      return c(m);
    },
    get middlewareData() {
      return c(y);
    },
    get isPositioned() {
      return c(w);
    },
    get floatingStyles() {
      return c(E);
    },
    get update() {
      return k;
    }
  };
}
function i4(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const s4 = { top: "bottom", right: "left", bottom: "top", left: "right" }, rc = new Wr("Floating.Root"), oh = new Wr("Floating.Content"), oc = new Wr("Floating.Root");
class sa {
  static create(e = !1) {
    return e ? oc.set(new sa()) : rc.set(new sa());
  }
  anchorNode = Kn(null);
  customAnchorNode = Kn(null);
  triggerNode = Kn(null);
  constructor() {
    Be(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class aa {
  static create(e, n = !1) {
    return n ? oh.set(new aa(e, oc.get())) : oh.set(new aa(e, rc.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Kn(null);
  wrapperRef = Kn(null);
  arrowRef = Kn(null);
  contentAttachment = Vr(this.contentRef);
  wrapperAttachment = Vr(this.wrapperRef);
  arrowAttachment = Vr(this.arrowRef);
  // ids
  arrowId = Kn(na());
  #e = /* @__PURE__ */ S(() => {
    if (typeof this.opts.style == "string") return ui(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new q5(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ S(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ S(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ S(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ S(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ S(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ S(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(d3),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ we(void 0);
  #c = /* @__PURE__ */ we(void 0);
  #d = /* @__PURE__ */ we(void 0);
  #h = /* @__PURE__ */ we(void 0);
  #p = /* @__PURE__ */ S(() => [
    mv({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && yv({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? n4() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && wv({ ...this.detectOverflowOptions }),
    e4({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        K(this.#u, n, !0), K(this.#c, r, !0), K(this.#d, o, !0), K(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && bv({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    a4({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && t4({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#p);
  }
  set middleware(e) {
    K(this.#p, e);
  }
  floating;
  #f = /* @__PURE__ */ S(() => l4(this.floating.placement));
  get placedSide() {
    return c(this.#f);
  }
  set placedSide(e) {
    K(this.#f, e);
  }
  #y = /* @__PURE__ */ S(() => u4(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    K(this.#y, e);
  }
  #v = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    K(this.#v, e);
  }
  #w = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    K(this.#w, e);
  }
  #m = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    K(this.#m, e);
  }
  #g = /* @__PURE__ */ we();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    K(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ S(() => s4[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    K(this.#b, e);
  }
  #x = /* @__PURE__ */ S(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${c(this.#u)}px`,
      "--bits-floating-available-height": `${c(this.#c)}px`,
      "--bits-floating-anchor-width": `${c(this.#d)}px`,
      "--bits-floating-anchor-height": `${c(this.#h)}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...c(this.#e)
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return c(this.#x);
  }
  set wrapperProps(e) {
    K(this.#x, e);
  }
  #k = /* @__PURE__ */ S(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: Ru({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    K(this.#k, e);
  }
  #C = /* @__PURE__ */ S(() => ({
    position: "absolute",
    left: this.arrowX ? `${this.arrowX}px` : void 0,
    top: this.arrowY ? `${this.arrowY}px` : void 0,
    [this.arrowBaseSide]: 0,
    "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
    transform: {
      top: "translateY(100%)",
      right: "translateY(50%) rotate(90deg) translateX(-50%)",
      bottom: "rotate(180deg)",
      left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[this.placedSide],
    visibility: this.cannotCenterArrow ? "hidden" : void 0
  }));
  get arrowStyle() {
    return c(this.#C);
  }
  set arrowStyle(e) {
    K(this.#C, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Nt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = o4({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => Qk(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Be(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), Nt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Dg(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), Be(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class la {
  static create(e, n = !1) {
    return n ? new la(e, oc.get()) : new la(e, rc.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = g5(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function a4(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = ic(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${f}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${f}px`), { data: { x: v, y: m } };
    }
  };
}
function ic(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function l4(t) {
  return ic(t)[0];
}
function u4(t) {
  return ic(t)[1];
}
function Cv(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  sa.create(r());
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    },
    get tooltip() {
      return r();
    },
    set tooltip(a = !1) {
      r(a), p();
    }
  }, i = pe(), s = Q(i);
  return ze(s, () => n() ?? Ze), z(t, i), ue(o);
}
se(Cv, { children: {}, tooltip: {} }, [], [], !0);
class c4 {
  #e;
  #t = /* @__PURE__ */ S(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Jg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = Bu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const d4 = [ci, Rg, Ig], h4 = [$o, Lg, Hg], f4 = [...d4, ...h4], p4 = ju({
  component: "select",
  parts: [
    "trigger",
    "content",
    "item",
    "viewport",
    "scroll-up-button",
    "scroll-down-button",
    "group",
    "group-label",
    "separator",
    "arrow",
    "input",
    "content-wrapper",
    "item-text",
    "value"
  ]
}), Yi = new Wr("Select.Root | Combobox.Root"), $v = new Wr("Select.Content | Combobox.Content");
class Sv {
  opts;
  #e = /* @__PURE__ */ we(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    K(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ we(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    K(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ we(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    K(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ we(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    K(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ we(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    K(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ we("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    K(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ we(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    K(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ S(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ S(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ S(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    K(this.#u, e);
  }
  #c = /* @__PURE__ */ we(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    K(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new Xi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new f3({
      ref: ve(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), tn(() => {
      this.opts.open.current || this.setHighlightedNode(null);
    });
  }
  setHighlightedNode(e, n = !1) {
    this.highlightedNode = e, e && (this.isUsingKeyboard || n) && this.scrollHighlightedNodeIntoView(e);
  }
  scrollHighlightedNodeIntoView(e) {
    !this.viewportNode || !this.contentIsPositioned || e.scrollIntoView({ block: this.opts.scrollAlignment.current });
  }
  getCandidateNodes() {
    const e = this.contentNode;
    return e ? Array.from(e.querySelectorAll(`[${this.getBitsAttr("item")}]:not([data-disabled])`)) : [];
  }
  setHighlightedToFirstCandidate(e = !1) {
    this.setHighlightedNode(null);
    let n = this.getCandidateNodes();
    if (n.length) {
      if (this.viewportNode) {
        const r = this.viewportNode.getBoundingClientRect();
        n = n.filter((o) => {
          if (!this.viewportNode) return !1;
          const i = o.getBoundingClientRect();
          return i.right <= r.right && i.left >= r.left && i.bottom <= r.bottom && i.top >= r.top;
        });
      }
      this.setHighlightedNode(n[0], e);
    }
  }
  getNodeByValue(e) {
    return this.getCandidateNodes().find((n) => n.dataset.value === e) ?? null;
  }
  setOpen(e) {
    this.opts.open.current = e;
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleOpen() {
    this.setOpen(!0);
  }
  handleClose() {
    this.setHighlightedNode(null), this.setOpen(!1);
  }
  toggleMenu() {
    this.toggleOpen();
  }
  getBitsAttr = (e) => p4.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class g4 extends Sv {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ S(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ S(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    K(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Be(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Nt(() => this.opts.open.current, () => {
      this.opts.open.current && this.setInitialHighlightedNode();
    });
  }
  includesItem(e) {
    return this.opts.value.current === e;
  }
  toggleItem(e, n = e) {
    const r = this.includesItem(e) ? "" : e;
    this.opts.value.current = r, r !== "" && (this.opts.inputValue.current = n);
  }
  setInitialHighlightedNode() {
    Wi(() => {
      if (!(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
        if (this.opts.value.current !== "") {
          const e = this.getNodeByValue(this.opts.value.current);
          if (e) {
            this.setHighlightedNode(e, !0);
            return;
          }
        }
        this.setHighlightedToFirstCandidate(!0);
      }
    });
  }
}
class v4 extends Sv {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ S(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Be(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Nt(() => this.opts.open.current, () => {
      this.opts.open.current && this.setInitialHighlightedNode();
    });
  }
  includesItem(e) {
    return this.opts.value.current.includes(e);
  }
  toggleItem(e, n = e) {
    this.includesItem(e) ? this.opts.value.current = this.opts.value.current.filter((r) => r !== e) : this.opts.value.current = [...this.opts.value.current, e], this.opts.inputValue.current = n;
  }
  setInitialHighlightedNode() {
    Wi(() => {
      if (this.domContext && !(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
        if (this.opts.value.current.length && this.opts.value.current[0] !== "") {
          const e = this.getNodeByValue(this.opts.value.current[0]);
          if (e) {
            this.setHighlightedNode(e, !0);
            return;
          }
        }
        this.setHighlightedToFirstCandidate(!0);
      }
    });
  }
}
class m4 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new g4(r) : new v4(r);
    return Yi.set(o);
  }
}
class sc {
  static create(e) {
    return new sc(e, Yi.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Vr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Xi(e.ref), this.#e = new F3({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new c4({
      getCurrentItem: () => this.root.isMulti ? "" : this.root.currentLabel,
      onMatch: (r) => {
        if (this.root.isMulti || !this.root.opts.items.current) return;
        const o = this.root.opts.items.current.find((i) => i.label === r);
        o && (this.root.opts.value.current = o.value);
      },
      enabled: () => !this.root.isMulti && this.root.dataTypeaheadEnabled,
      candidateValues: () => this.root.isMulti ? [] : this.root.candidateLabels,
      getWindow: () => this.root.domContext.getWindow()
    }), this.onkeydown = this.onkeydown.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onclick = this.onclick.bind(this);
  }
  #n() {
    this.root.opts.open.current = !0, this.#t.resetTypeahead(), this.#e.resetTypeahead();
  }
  #r(e) {
    this.#n();
  }
  /**
   * Logic used to handle keyboard selection/deselection.
   *
   * If it returns true, it means the item was selected and whatever is calling
   * this function should return early
   *
   */
  #o() {
    const e = this.root.highlightedValue === this.root.opts.value.current;
    return !this.root.opts.allowDeselect.current && e && !this.root.isMulti ? (this.root.handleClose(), !0) : (this.root.highlightedValue !== null && this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0), !this.root.isMulti && !e ? (this.root.handleClose(), !0) : !1);
  }
  onkeydown(e) {
    if (this.root.isUsingKeyboard = !0, (e.key === $o || e.key === ci) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === Al || e.key === $s || e.key === ci || e.key === $o)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === ci) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === $o) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === Rd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === Al || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === $s && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === $o && e.altKey && this.root.handleClose(), f4.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === ci ? d = I3(s, l, u) : e.key === $o ? d = L3(s, l, u) : e.key === Lg ? d = R3(s, l, 10, u) : e.key === Rg ? d = j3(s, l, 10, u) : e.key === Ig ? d = s[0] : e.key === Hg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === $s, i = this.root.getCandidateNodes();
    if (e.key !== Rd) {
      if (!n && (r || o)) {
        !this.#e.handleTypeaheadSearch(e.key, i) && o && (e.preventDefault(), this.#o());
        return;
      }
      this.root.highlightedNode || this.root.setHighlightedToFirstCandidate();
    }
  }
  onclick(e) {
    e.currentTarget.focus();
  }
  onpointerdown(e) {
    if (this.root.opts.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    const n = e.target;
    n?.hasPointerCapture(e.pointerId) && n?.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose());
  }
  onpointerup(e) {
    this.root.opts.disabled.current || (e.preventDefault(), e.pointerType === "touch" && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose()));
  }
  #i = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": Tl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": Vg(this.root.opts.open.current),
    "data-disabled": Gs(this.root.opts.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.getBitsAttr("trigger")]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return c(this.#i);
  }
  set props(e) {
    K(this.#i, e);
  }
}
class ac {
  static create(e) {
    return $v.set(new ac(e, Yi.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ we(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    K(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Vr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Xi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), Wo(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), Nt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), Nt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ S(() => r4(this.root.isCombobox ? "combobox" : "select"));
  onInteractOutside = (e) => {
    if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e), !e.defaultPrevented && this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #n = /* @__PURE__ */ S(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": Vg(this.root.opts.open.current),
    [this.root.getBitsAttr("content")]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...c(this.#t)
    },
    onpointermove: this.onpointermove,
    ...this.attachment
  }));
  get props() {
    return c(this.#r);
  }
  set props(e) {
    K(this.#r, e);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus,
    trapFocus: !1,
    loop: !1,
    onPlaced: () => {
      this.root.opts.open.current && (this.root.contentIsPositioned = !0, this.isPositioned = !0);
    }
  };
}
class lc {
  static create(e) {
    return new lc(e, Yi.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ S(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    K(this.#t, e);
  }
  prevHighlighted = new Y5(() => this.isHighlighted);
  #n = /* @__PURE__ */ we(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    K(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Vr(e.ref), Nt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), Nt(() => this.mounted, () => {
      this.mounted && this.root.setInitialHighlightedNode();
    }), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onpointermove = this.onpointermove.bind(this);
  }
  handleSelect() {
    if (this.opts.disabled.current) return;
    const e = this.opts.value.current === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && e && !this.root.isMulti) {
      this.root.handleClose();
      return;
    }
    this.root.toggleItem(this.opts.value.current, this.opts.label.current), !this.root.isMulti && !e && this.root.handleClose();
  }
  #r = /* @__PURE__ */ S(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return c(this.#r);
  }
  set snippetProps(e) {
    K(this.#r, e);
  }
  onpointerdown(e) {
    e.preventDefault();
  }
  /**
   * Using `pointerup` instead of `click` allows power users to pointerdown
   * the trigger, then release pointerup on an item to select it vs having to do
   * multiple clicks.
   */
  onpointerup(e) {
    if (!(e.defaultPrevented || !this.opts.ref.current)) {
      if (e.pointerType === "touch" && !zl) {
        Ct(
          this.opts.ref.current,
          "click",
          () => {
            this.handleSelect(), this.root.setHighlightedNode(this.opts.ref.current);
          },
          { once: !0 }
        );
        return;
      }
      e.preventDefault(), this.handleSelect(), e.pointerType === "touch" && this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  onpointermove(e) {
    e.pointerType !== "touch" && this.root.highlightedNode !== this.opts.ref.current && this.root.setHighlightedNode(this.opts.ref.current);
  }
  #o = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": Gs(this.opts.disabled.current),
    "data-highlighted": this.root.highlightedValue === this.opts.value.current && !this.opts.disabled.current ? "" : void 0,
    "data-selected": this.root.includesItem(this.opts.value.current) ? "" : void 0,
    "data-label": this.opts.label.current,
    [this.root.getBitsAttr("item")]: "",
    onpointermove: this.onpointermove,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return c(this.#o);
  }
  set props(e) {
    K(this.#o, e);
  }
}
class uc {
  static create(e) {
    return new uc(e, Yi.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ S(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return c(this.#e);
  }
  set shouldRender(e) {
    K(this.#e, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
  }
  #t = /* @__PURE__ */ S(() => ({
    disabled: Ld(this.root.opts.disabled.current),
    required: Ld(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    K(this.#t, e);
  }
}
class cc {
  static create(e) {
    return new cc(e, $v.get());
  }
  opts;
  content;
  root;
  attachment;
  #e = /* @__PURE__ */ we(0);
  get prevScrollTop() {
    return c(this.#e);
  }
  set prevScrollTop(e) {
    K(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = Vr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "presentation",
    [this.root.getBitsAttr("viewport")]: "",
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto"
    },
    ...this.attachment
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    K(this.#t, e);
  }
}
function _s(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = uc.create({ value: ve(() => n()) });
  var i = {
    get value() {
      return n();
    },
    set value(u) {
      n(u), p();
    },
    get autocomplete() {
      return r();
    },
    set autocomplete(u) {
      r(u), p();
    }
  }, s = pe(), a = Q(s);
  {
    var l = (u) => {
      Uu(u, Ke(() => o.props, {
        get autocomplete() {
          return r();
        },
        get value() {
          return n();
        },
        set value(d) {
          n(d);
        }
      }));
    };
    ae(a, (u) => {
      o.shouldRender && u(l);
    });
  }
  return z(t, s), ue(i);
}
se(_s, { value: {}, autocomplete: {} }, [], [], !0);
function _v(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  la.create(
    {
      id: ve(() => n()),
      virtualEl: ve(() => o()),
      ref: i()
    },
    s()
  );
  var a = {
    get id() {
      return n();
    },
    set id(d) {
      n(d), p();
    },
    get children() {
      return r();
    },
    set children(d) {
      r(d), p();
    },
    get virtualEl() {
      return o();
    },
    set virtualEl(d) {
      o(d), p();
    },
    get ref() {
      return i();
    },
    set ref(d) {
      i(d), p();
    },
    get tooltip() {
      return s();
    },
    set tooltip(d = !1) {
      s(d), p();
    }
  }, l = pe(), u = Q(l);
  return ze(u, () => r() ?? Ze), z(t, l), ue(a);
}
se(_v, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Ev(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), f = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), x = g(e, "style", 23, () => ({})), E = g(e, "wrapperId", 23, na), C = g(e, "customAnchor", 7, null), k = g(e, "enabled", 7), O = g(e, "tooltip", 7, !1);
  const V = aa.create(
    {
      side: ve(() => r()),
      sideOffset: ve(() => o()),
      align: ve(() => i()),
      alignOffset: ve(() => s()),
      id: ve(() => a()),
      arrowPadding: ve(() => l()),
      avoidCollisions: ve(() => u()),
      collisionBoundary: ve(() => d()),
      collisionPadding: ve(() => h()),
      hideWhenDetached: ve(() => f()),
      onPlaced: ve(() => v()),
      sticky: ve(() => m()),
      updatePositionStrategy: ve(() => y()),
      strategy: ve(() => w()),
      dir: ve(() => b()),
      style: ve(() => x()),
      enabled: ve(() => k()),
      wrapperId: ve(() => E()),
      customAnchor: ve(() => C())
    },
    O()
  ), H = /* @__PURE__ */ S(() => qn(V.wrapperProps, { style: { pointerEvents: "auto" } }));
  var L = {
    get content() {
      return n();
    },
    set content(_) {
      n(_), p();
    },
    get side() {
      return r();
    },
    set side(_ = "bottom") {
      r(_), p();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(_ = 0) {
      o(_), p();
    },
    get align() {
      return i();
    },
    set align(_ = "center") {
      i(_), p();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(_ = 0) {
      s(_), p();
    },
    get id() {
      return a();
    },
    set id(_) {
      a(_), p();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(_ = 0) {
      l(_), p();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(_ = !0) {
      u(_), p();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(_ = []) {
      d(_), p();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(_ = 0) {
      h(_), p();
    },
    get hideWhenDetached() {
      return f();
    },
    set hideWhenDetached(_ = !1) {
      f(_), p();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(_ = () => {
    }) {
      v(_), p();
    },
    get sticky() {
      return m();
    },
    set sticky(_ = "partial") {
      m(_), p();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(_ = "optimized") {
      y(_), p();
    },
    get strategy() {
      return w();
    },
    set strategy(_ = "fixed") {
      w(_), p();
    },
    get dir() {
      return b();
    },
    set dir(_ = "ltr") {
      b(_), p();
    },
    get style() {
      return x();
    },
    set style(_ = {}) {
      x(_), p();
    },
    get wrapperId() {
      return E();
    },
    set wrapperId(_ = na()) {
      E(_), p();
    },
    get customAnchor() {
      return C();
    },
    set customAnchor(_ = null) {
      C(_), p();
    },
    get enabled() {
      return k();
    },
    set enabled(_) {
      k(_), p();
    },
    get tooltip() {
      return O();
    },
    set tooltip(_ = !1) {
      O(_), p();
    }
  }, M = pe(), D = Q(M);
  return ze(D, () => n() ?? Ze, () => ({ props: V.props, wrapperProps: c(H) })), z(t, M), ue(L);
}
se(
  Ev,
  {
    content: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    id: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    hideWhenDetached: {},
    onPlaced: {},
    sticky: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    style: {},
    wrapperId: {},
    customAnchor: {},
    enabled: {},
    tooltip: {}
  },
  [],
  [],
  !0
);
function Pv(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  Dn(() => {
    r()?.();
  });
  var o = {
    get content() {
      return n();
    },
    set content(a) {
      n(a), p();
    },
    get onPlaced() {
      return r();
    },
    set onPlaced(a) {
      r(a), p();
    }
  }, i = pe(), s = Q(i);
  return ze(s, () => n() ?? Ze, () => ({ props: {}, wrapperProps: {} })), z(t, i), ue(o);
}
se(Pv, { content: {}, onPlaced: {} }, [], [], !0);
function Ov(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var s = {
    get content() {
      return n();
    },
    set content(h) {
      n(h), p();
    },
    get isStatic() {
      return r();
    },
    set isStatic(h = !1) {
      r(h), p();
    },
    get onPlaced() {
      return o();
    },
    set onPlaced(h) {
      o(h), p();
    }
  }, a = pe(), l = Q(a);
  {
    var u = (h) => {
      Pv(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Ev(h, Ke(
        {
          get content() {
            return n();
          },
          get onPlaced() {
            return o();
          }
        },
        () => i
      ));
    };
    ae(l, (h) => {
      r() ? h(u) : h(d, !1);
    });
  }
  return z(t, a), ue(s);
}
se(Ov, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var y4 = /* @__PURE__ */ re("<!> <!>", 1);
function dc(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), O = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), L = g(e, "onPlaced", 7), M = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), N = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), A = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), U = g(e, "ref", 7), ee = g(e, "tooltip", 7, !1), B = g(e, "contentPointerEvents", 7, "auto"), Z = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled",
    "ref",
    "tooltip",
    "contentPointerEvents"
  ]);
  const W = /* @__PURE__ */ S(() => O() ?? !0), J = /* @__PURE__ */ S(() => C() ?? (c(W) ? "fixed" : "absolute"));
  var oe = {
    get popper() {
      return n();
    },
    set popper(I) {
      n(I), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(I) {
      r(I), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(I) {
      o(I), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(I) {
      i(I), p();
    },
    get id() {
      return s();
    },
    set id(I) {
      s(I), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(I) {
      a(I), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(I) {
      l(I), p();
    },
    get side() {
      return u();
    },
    set side(I) {
      u(I), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(I) {
      d(I), p();
    },
    get align() {
      return h();
    },
    set align(I) {
      h(I), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(I) {
      f(I), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(I) {
      v(I), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(I) {
      m(I), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(I) {
      y(I), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(I) {
      w(I), p();
    },
    get sticky() {
      return b();
    },
    set sticky(I) {
      b(I), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(I) {
      x(I), p();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(I) {
      E(I), p();
    },
    get strategy() {
      return C();
    },
    set strategy(I) {
      C(I), p();
    },
    get dir() {
      return k();
    },
    set dir(I) {
      k(I), p();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(I) {
      O(I), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(I) {
      V(I), p();
    },
    get style() {
      return H();
    },
    set style(I) {
      H(I), p();
    },
    get onPlaced() {
      return L();
    },
    set onPlaced(I) {
      L(I), p();
    },
    get onInteractOutside() {
      return M();
    },
    set onInteractOutside(I) {
      M(I), p();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(I) {
      D(I), p();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(I) {
      _(I), p();
    },
    get onFocusOutside() {
      return N();
    },
    set onFocusOutside(I) {
      N(I), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(I = "close") {
      $(I), p();
    },
    get loop() {
      return P();
    },
    set loop(I) {
      P(I), p();
    },
    get trapFocus() {
      return A();
    },
    set trapFocus(I = !0) {
      A(I), p();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(I = () => !1) {
      j(I), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(I = null) {
      q(I), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(I = !1) {
      G(I), p();
    },
    get enabled() {
      return T();
    },
    set enabled(I) {
      T(I), p();
    },
    get ref() {
      return U();
    },
    set ref(I) {
      U(I), p();
    },
    get tooltip() {
      return ee();
    },
    set tooltip(I = !1) {
      ee(I), p();
    },
    get contentPointerEvents() {
      return B();
    },
    set contentPointerEvents(I = "auto") {
      B(I), p();
    }
  };
  return Ov(t, {
    get isStatic() {
      return G();
    },
    get id() {
      return s();
    },
    get side() {
      return u();
    },
    get sideOffset() {
      return d();
    },
    get align() {
      return h();
    },
    get alignOffset() {
      return f();
    },
    get arrowPadding() {
      return v();
    },
    get avoidCollisions() {
      return m();
    },
    get collisionBoundary() {
      return y();
    },
    get collisionPadding() {
      return w();
    },
    get sticky() {
      return b();
    },
    get hideWhenDetached() {
      return x();
    },
    get updatePositionStrategy() {
      return E();
    },
    get strategy() {
      return c(J);
    },
    get dir() {
      return k();
    },
    get wrapperId() {
      return V();
    },
    get style() {
      return H();
    },
    get onPlaced() {
      return L();
    },
    get customAnchor() {
      return q();
    },
    get enabled() {
      return T();
    },
    get tooltip() {
      return ee();
    },
    content: (I, ne) => {
      let ge = () => ne?.().props, ce = () => ne?.().wrapperProps;
      var ie = y4(), de = Q(ie);
      {
        var ye = (he) => {
          Hl(he, {
            get preventScroll() {
              return c(W);
            }
          });
        }, Ce = (he) => {
          var xe = pe(), Pe = Q(xe);
          {
            var te = (Re) => {
              Hl(Re, {
                get preventScroll() {
                  return c(W);
                }
              });
            };
            ae(
              Pe,
              (Re) => {
                e.forceMount || Re(te);
              },
              !0
            );
          }
          z(he, xe);
        };
        ae(de, (he) => {
          e.forceMount && T() ? he(ye) : he(Ce, !1);
        });
      }
      var be = R(de, 2);
      tv(be, {
        get onOpenAutoFocus() {
          return _();
        },
        get onCloseAutoFocus() {
          return D();
        },
        get loop() {
          return P();
        },
        get enabled() {
          return T();
        },
        get trapFocus() {
          return A();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return U();
        },
        focusScope: (he, xe) => {
          let Pe = () => xe?.().props;
          ev(he, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return T();
            },
            get ref() {
              return U();
            },
            children: (te, Re) => {
              Qg(te, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return M();
                },
                get onFocusOutside() {
                  return N();
                },
                get interactOutsideBehavior() {
                  return $();
                },
                get isValidEvent() {
                  return j();
                },
                get enabled() {
                  return T();
                },
                get ref() {
                  return U();
                },
                children: (De, Xe) => {
                  let Fe = () => Xe?.().props;
                  nv(De, {
                    get id() {
                      return s();
                    },
                    get preventOverflowTextSelection() {
                      return i();
                    },
                    get onPointerDown() {
                      return a();
                    },
                    get onPointerUp() {
                      return l();
                    },
                    get enabled() {
                      return T();
                    },
                    get ref() {
                      return U();
                    },
                    children: (st, ut) => {
                      var mt = pe(), nt = Q(mt);
                      {
                        let me = /* @__PURE__ */ S(() => ({
                          props: qn(Z, ge(), Fe(), Pe(), { style: { pointerEvents: B() } }),
                          wrapperProps: ce()
                        }));
                        ze(nt, () => n() ?? Ze, () => c(me));
                      }
                      z(st, mt);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { focusScope: !0 }
      }), z(I, ie);
    },
    $$slots: { content: !0 }
  }), ue(oe);
}
se(
  dc,
  {
    popper: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    enabled: {},
    ref: {},
    tooltip: {},
    contentPointerEvents: {}
  },
  [],
  [],
  !0
);
function Nv(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), f = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), x = g(e, "sticky", 7), E = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), O = g(e, "dir", 7), V = g(e, "preventScroll", 7), H = g(e, "wrapperId", 7), L = g(e, "style", 7), M = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), N = g(e, "onOpenAutoFocus", 7), $ = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), j = g(e, "trapFocus", 7, !0), q = g(e, "isValidEvent", 7, () => !1), G = g(e, "customAnchor", 7, null), T = g(e, "isStatic", 7, !1), U = g(e, "ref", 7), ee = g(e, "shouldRender", 7), B = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "open",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "ref",
    "shouldRender"
  ]);
  var Z = {
    get popper() {
      return n();
    },
    set popper(I) {
      n(I), p();
    },
    get open() {
      return r();
    },
    set open(I) {
      r(I), p();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(I) {
      o(I), p();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(I) {
      i(I), p();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(I) {
      s(I), p();
    },
    get id() {
      return a();
    },
    set id(I) {
      a(I), p();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(I) {
      l(I), p();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(I) {
      u(I), p();
    },
    get side() {
      return d();
    },
    set side(I) {
      d(I), p();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(I) {
      h(I), p();
    },
    get align() {
      return f();
    },
    set align(I) {
      f(I), p();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(I) {
      v(I), p();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(I) {
      m(I), p();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(I) {
      y(I), p();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(I) {
      w(I), p();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(I) {
      b(I), p();
    },
    get sticky() {
      return x();
    },
    set sticky(I) {
      x(I), p();
    },
    get hideWhenDetached() {
      return E();
    },
    set hideWhenDetached(I) {
      E(I), p();
    },
    get updatePositionStrategy() {
      return C();
    },
    set updatePositionStrategy(I) {
      C(I), p();
    },
    get strategy() {
      return k();
    },
    set strategy(I) {
      k(I), p();
    },
    get dir() {
      return O();
    },
    set dir(I) {
      O(I), p();
    },
    get preventScroll() {
      return V();
    },
    set preventScroll(I) {
      V(I), p();
    },
    get wrapperId() {
      return H();
    },
    set wrapperId(I) {
      H(I), p();
    },
    get style() {
      return L();
    },
    set style(I) {
      L(I), p();
    },
    get onPlaced() {
      return M();
    },
    set onPlaced(I) {
      M(I), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(I) {
      D(I), p();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(I) {
      _(I), p();
    },
    get onOpenAutoFocus() {
      return N();
    },
    set onOpenAutoFocus(I) {
      N(I), p();
    },
    get onFocusOutside() {
      return $();
    },
    set onFocusOutside(I) {
      $(I), p();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(I = "close") {
      P(I), p();
    },
    get loop() {
      return A();
    },
    set loop(I) {
      A(I), p();
    },
    get trapFocus() {
      return j();
    },
    set trapFocus(I = !0) {
      j(I), p();
    },
    get isValidEvent() {
      return q();
    },
    set isValidEvent(I = () => !1) {
      q(I), p();
    },
    get customAnchor() {
      return G();
    },
    set customAnchor(I = null) {
      G(I), p();
    },
    get isStatic() {
      return T();
    },
    set isStatic(I = !1) {
      T(I), p();
    },
    get ref() {
      return U();
    },
    set ref(I) {
      U(I), p();
    },
    get shouldRender() {
      return ee();
    },
    set shouldRender(I) {
      ee(I), p();
    }
  }, W = pe(), J = Q(W);
  {
    var oe = (I) => {
      dc(I, Ke(
        {
          get popper() {
            return n();
          },
          get onEscapeKeydown() {
            return o();
          },
          get escapeKeydownBehavior() {
            return i();
          },
          get preventOverflowTextSelection() {
            return s();
          },
          get id() {
            return a();
          },
          get onPointerDown() {
            return l();
          },
          get onPointerUp() {
            return u();
          },
          get side() {
            return d();
          },
          get sideOffset() {
            return h();
          },
          get align() {
            return f();
          },
          get alignOffset() {
            return v();
          },
          get arrowPadding() {
            return m();
          },
          get avoidCollisions() {
            return y();
          },
          get collisionBoundary() {
            return w();
          },
          get collisionPadding() {
            return b();
          },
          get sticky() {
            return x();
          },
          get hideWhenDetached() {
            return E();
          },
          get updatePositionStrategy() {
            return C();
          },
          get strategy() {
            return k();
          },
          get dir() {
            return O();
          },
          get preventScroll() {
            return V();
          },
          get wrapperId() {
            return H();
          },
          get style() {
            return L();
          },
          get onPlaced() {
            return M();
          },
          get customAnchor() {
            return G();
          },
          get isStatic() {
            return T();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return D();
          },
          get onCloseAutoFocus() {
            return _();
          },
          get onOpenAutoFocus() {
            return N();
          },
          get interactOutsideBehavior() {
            return P();
          },
          get loop() {
            return A();
          },
          get trapFocus() {
            return j();
          },
          get isValidEvent() {
            return q();
          },
          get onFocusOutside() {
            return $();
          },
          forceMount: !1,
          get ref() {
            return U();
          }
        },
        () => B
      ));
    };
    ae(J, (I) => {
      ee() && I(oe);
    });
  }
  return z(t, W), ue(Z);
}
se(
  Nv,
  {
    popper: {},
    open: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    ref: {},
    shouldRender: {}
  },
  [],
  [],
  !0
);
function Tv(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), O = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), H = g(e, "style", 7), L = g(e, "onPlaced", 7), M = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), N = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), P = g(e, "loop", 7), A = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), U = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  var ee = {
    get popper() {
      return n();
    },
    set popper(B) {
      n(B), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(B) {
      r(B), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(B) {
      o(B), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(B) {
      i(B), p();
    },
    get id() {
      return s();
    },
    set id(B) {
      s(B), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(B) {
      a(B), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(B) {
      l(B), p();
    },
    get side() {
      return u();
    },
    set side(B) {
      u(B), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(B) {
      d(B), p();
    },
    get align() {
      return h();
    },
    set align(B) {
      h(B), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(B) {
      f(B), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(B) {
      v(B), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(B) {
      m(B), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(B) {
      y(B), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(B) {
      w(B), p();
    },
    get sticky() {
      return b();
    },
    set sticky(B) {
      b(B), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(B) {
      x(B), p();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(B) {
      E(B), p();
    },
    get strategy() {
      return C();
    },
    set strategy(B) {
      C(B), p();
    },
    get dir() {
      return k();
    },
    set dir(B) {
      k(B), p();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(B) {
      O(B), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(B) {
      V(B), p();
    },
    get style() {
      return H();
    },
    set style(B) {
      H(B), p();
    },
    get onPlaced() {
      return L();
    },
    set onPlaced(B) {
      L(B), p();
    },
    get onInteractOutside() {
      return M();
    },
    set onInteractOutside(B) {
      M(B), p();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(B) {
      D(B), p();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(B) {
      _(B), p();
    },
    get onFocusOutside() {
      return N();
    },
    set onFocusOutside(B) {
      N(B), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(B = "close") {
      $(B), p();
    },
    get loop() {
      return P();
    },
    set loop(B) {
      P(B), p();
    },
    get trapFocus() {
      return A();
    },
    set trapFocus(B = !0) {
      A(B), p();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(B = () => !1) {
      j(B), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(B = null) {
      q(B), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(B = !1) {
      G(B), p();
    },
    get enabled() {
      return T();
    },
    set enabled(B) {
      T(B), p();
    }
  };
  return dc(t, Ke(
    {
      get popper() {
        return n();
      },
      get onEscapeKeydown() {
        return r();
      },
      get escapeKeydownBehavior() {
        return o();
      },
      get preventOverflowTextSelection() {
        return i();
      },
      get id() {
        return s();
      },
      get onPointerDown() {
        return a();
      },
      get onPointerUp() {
        return l();
      },
      get side() {
        return u();
      },
      get sideOffset() {
        return d();
      },
      get align() {
        return h();
      },
      get alignOffset() {
        return f();
      },
      get arrowPadding() {
        return v();
      },
      get avoidCollisions() {
        return m();
      },
      get collisionBoundary() {
        return y();
      },
      get collisionPadding() {
        return w();
      },
      get sticky() {
        return b();
      },
      get hideWhenDetached() {
        return x();
      },
      get updatePositionStrategy() {
        return E();
      },
      get strategy() {
        return C();
      },
      get dir() {
        return k();
      },
      get preventScroll() {
        return O();
      },
      get wrapperId() {
        return V();
      },
      get style() {
        return H();
      },
      get onPlaced() {
        return L();
      },
      get customAnchor() {
        return q();
      },
      get isStatic() {
        return G();
      },
      get enabled() {
        return T();
      },
      get onInteractOutside() {
        return M();
      },
      get onCloseAutoFocus() {
        return D();
      },
      get onOpenAutoFocus() {
        return _();
      },
      get interactOutsideBehavior() {
        return $();
      },
      get loop() {
        return P();
      },
      get trapFocus() {
        return A();
      },
      get isValidEvent() {
        return j();
      },
      get onFocusOutside() {
        return N();
      }
    },
    () => U,
    { forceMount: !0 }
  )), ue(ee);
}
se(
  Tv,
  {
    popper: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    enabled: {}
  },
  [],
  [],
  !0
);
var w4 = /* @__PURE__ */ re("<div><div><!></div></div>"), b4 = /* @__PURE__ */ re("<div><div><!></div></div>");
function jl(t, e) {
  const n = Mi();
  le(e, !0);
  let r = g(e, "id", 23, () => Gn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, We), l = g(e, "onEscapeKeydown", 7, We), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), f = g(e, "style", 7), v = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "forceMount",
    "side",
    "onInteractOutside",
    "onEscapeKeydown",
    "children",
    "child",
    "preventScroll",
    "style"
  ]);
  const m = ac.create({
    id: ve(() => r()),
    ref: ve(() => o(), (k) => o(k)),
    onInteractOutside: ve(() => a()),
    onEscapeKeydown: ve(() => l())
  }), y = /* @__PURE__ */ S(() => qn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(k = Gn(n)) {
      r(k), p();
    },
    get ref() {
      return o();
    },
    set ref(k = null) {
      o(k), p();
    },
    get forceMount() {
      return i();
    },
    set forceMount(k = !1) {
      i(k), p();
    },
    get side() {
      return s();
    },
    set side(k = "bottom") {
      s(k), p();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(k = We) {
      a(k), p();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(k = We) {
      l(k), p();
    },
    get children() {
      return u();
    },
    set children(k) {
      u(k), p();
    },
    get child() {
      return d();
    },
    set child(k) {
      d(k), p();
    },
    get preventScroll() {
      return h();
    },
    set preventScroll(k = !1) {
      h(k), p();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), p();
    }
  }, b = pe(), x = Q(b);
  {
    var E = (k) => {
      Tv(k, Ke(() => c(y), () => m.popperProps, {
        get ref() {
          return m.opts.ref;
        },
        get side() {
          return s();
        },
        get enabled() {
          return m.root.opts.open.current;
        },
        get id() {
          return r();
        },
        get preventScroll() {
          return h();
        },
        forceMount: !0,
        get shouldRender() {
          return m.shouldRender;
        },
        popper: (O, V) => {
          let H = () => V?.().props, L = () => V?.().wrapperProps;
          const M = /* @__PURE__ */ S(() => qn(H(), { style: m.props.style }, { style: f() }));
          var D = pe(), _ = Q(D);
          {
            var N = (P) => {
              var A = pe(), j = Q(A);
              {
                let q = /* @__PURE__ */ S(() => ({
                  props: c(M),
                  wrapperProps: L(),
                  ...m.snippetProps
                }));
                ze(j, d, () => c(q));
              }
              z(P, A);
            }, $ = (P) => {
              var A = w4();
              ot(A, () => ({ ...L() }));
              var j = Y(A);
              ot(j, () => ({ ...c(M) }));
              var q = Y(j);
              ze(q, () => u() ?? Ze), X(j), X(A), z(P, A);
            };
            ae(_, (P) => {
              d() ? P(N) : P($, !1);
            });
          }
          z(O, D);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (k) => {
      var O = pe(), V = Q(O);
      {
        var H = (L) => {
          Nv(L, Ke(() => c(y), () => m.popperProps, {
            get ref() {
              return m.opts.ref;
            },
            get side() {
              return s();
            },
            get open() {
              return m.root.opts.open.current;
            },
            get id() {
              return r();
            },
            get preventScroll() {
              return h();
            },
            forceMount: !1,
            get shouldRender() {
              return m.shouldRender;
            },
            popper: (M, D) => {
              let _ = () => D?.().props, N = () => D?.().wrapperProps;
              const $ = /* @__PURE__ */ S(() => qn(_(), { style: m.props.style }, { style: f() }));
              var P = pe(), A = Q(P);
              {
                var j = (G) => {
                  var T = pe(), U = Q(T);
                  {
                    let ee = /* @__PURE__ */ S(() => ({
                      props: c($),
                      wrapperProps: N(),
                      ...m.snippetProps
                    }));
                    ze(U, d, () => c(ee));
                  }
                  z(G, T);
                }, q = (G) => {
                  var T = b4();
                  ot(T, () => ({ ...N() }));
                  var U = Y(T);
                  ot(U, () => ({ ...c($) }));
                  var ee = Y(U);
                  ze(ee, () => u() ?? Ze), X(U), X(T), z(G, T);
                };
                ae(A, (G) => {
                  d() ? G(j) : G(q, !1);
                });
              }
              z(M, P);
            },
            $$slots: { popper: !0 }
          }));
        };
        ae(
          V,
          (L) => {
            i() || L(H);
          },
          !0
        );
      }
      z(k, O);
    };
    ae(x, (k) => {
      i() ? k(E) : k(C, !1);
    });
  }
  return z(t, b), ue(w);
}
se(
  jl,
  {
    id: {},
    ref: {},
    forceMount: {},
    side: {},
    onInteractOutside: {},
    onEscapeKeydown: {},
    children: {},
    child: {},
    preventScroll: {},
    style: {}
  },
  [],
  [],
  !0
);
function Av(t, e) {
  le(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, We);
  U5(() => (n(!0), r()(!0), () => {
    n(!1), r()(!1);
  }));
  var o = {
    get mounted() {
      return n();
    },
    set mounted(i = !1) {
      n(i), p();
    },
    get onMountedChange() {
      return r();
    },
    set onMountedChange(i = We) {
      r(i), p();
    }
  };
  return ue(o);
}
se(Av, { mounted: {}, onMountedChange: {} }, [], [], !0);
var x4 = /* @__PURE__ */ re("<div><!></div>"), k4 = /* @__PURE__ */ re("<!> <!>", 1);
function Bl(t, e) {
  const n = Mi();
  le(e, !0);
  let r = g(e, "id", 23, () => Gn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, We), h = g(e, "onUnhighlight", 7, We), f = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "value",
    "label",
    "disabled",
    "children",
    "child",
    "onHighlight",
    "onUnhighlight"
  ]);
  const v = lc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (k) => o(k)),
    value: ve(() => i()),
    disabled: ve(() => a()),
    label: ve(() => s()),
    onHighlight: ve(() => d()),
    onUnhighlight: ve(() => h())
  }), m = /* @__PURE__ */ S(() => qn(f, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(k = Gn(n)) {
      r(k), p();
    },
    get ref() {
      return o();
    },
    set ref(k = null) {
      o(k), p();
    },
    get value() {
      return i();
    },
    set value(k) {
      i(k), p();
    },
    get label() {
      return s();
    },
    set label(k = i) {
      s(k), p();
    },
    get disabled() {
      return a();
    },
    set disabled(k = !1) {
      a(k), p();
    },
    get children() {
      return l();
    },
    set children(k) {
      l(k), p();
    },
    get child() {
      return u();
    },
    set child(k) {
      u(k), p();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(k = We) {
      d(k), p();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(k = We) {
      h(k), p();
    }
  }, w = k4(), b = Q(w);
  {
    var x = (k) => {
      var O = pe(), V = Q(O);
      {
        let H = /* @__PURE__ */ S(() => ({ props: c(m), ...v.snippetProps }));
        ze(V, u, () => c(H));
      }
      z(k, O);
    }, E = (k) => {
      var O = x4();
      ot(O, () => ({ ...c(m) }));
      var V = Y(O);
      ze(V, () => l() ?? Ze, () => v.snippetProps), X(O), z(k, O);
    };
    ae(b, (k) => {
      u() ? k(x) : k(E, !1);
    });
  }
  var C = R(b, 2);
  return Av(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(k) {
      v.mounted = k;
    }
  }), z(t, w), ue(y);
}
se(
  Bl,
  {
    id: {},
    ref: {},
    value: {},
    label: {},
    disabled: {},
    children: {},
    child: {},
    onHighlight: {},
    onUnhighlight: {}
  },
  [],
  [],
  !0
);
var C4 = /* @__PURE__ */ re("<div><!></div>");
const $4 = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Fl(t, e) {
  const n = Mi();
  le(e, !0), it(t, $4);
  let r = g(e, "id", 23, () => Gn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = cc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ S(() => qn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Gn(n)) {
      r(y), p();
    },
    get ref() {
      return o();
    },
    set ref(y = null) {
      o(y), p();
    },
    get children() {
      return i();
    },
    set children(y) {
      i(y), p();
    },
    get child() {
      return s();
    },
    set child(y) {
      s(y), p();
    }
  }, h = pe(), f = Q(h);
  {
    var v = (y) => {
      var w = pe(), b = Q(w);
      ze(b, s, () => ({ props: c(u) })), z(y, w);
    }, m = (y) => {
      var w = C4();
      ot(w, () => ({ ...c(u) }));
      var b = Y(w);
      ze(b, () => i() ?? Ze), X(w), z(y, w);
    };
    ae(f, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return z(t, h), ue(d);
}
se(Fl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var S4 = /* @__PURE__ */ re("<!> <!>", 1);
function Kl(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, We), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, We), u = g(e, "onOpenChangeComplete", 7, We), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), f = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), Nt.pre(() => n(), () => {
    b();
  });
  let x = /* @__PURE__ */ we("");
  const E = m4.create({
    type: s(),
    value: ve(() => n(), (M) => {
      n(M), r()(M);
    }),
    disabled: ve(() => i()),
    required: ve(() => f()),
    open: ve(() => a(), (M) => {
      a(M), l()(M);
    }),
    loop: ve(() => d()),
    scrollAlignment: ve(() => h()),
    name: ve(() => o()),
    isCombobox: !1,
    items: ve(() => v()),
    allowDeselect: ve(() => m()),
    inputValue: ve(() => c(x), (M) => K(x, M, !0)),
    onOpenChangeComplete: ve(() => u())
  });
  var C = {
    get value() {
      return n();
    },
    set value(M) {
      n(M), p();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(M = We) {
      r(M), p();
    },
    get name() {
      return o();
    },
    set name(M = "") {
      o(M), p();
    },
    get disabled() {
      return i();
    },
    set disabled(M = !1) {
      i(M), p();
    },
    get type() {
      return s();
    },
    set type(M) {
      s(M), p();
    },
    get open() {
      return a();
    },
    set open(M = !1) {
      a(M), p();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(M = We) {
      l(M), p();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(M = We) {
      u(M), p();
    },
    get loop() {
      return d();
    },
    set loop(M = !1) {
      d(M), p();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(M = "nearest") {
      h(M), p();
    },
    get required() {
      return f();
    },
    set required(M = !1) {
      f(M), p();
    },
    get items() {
      return v();
    },
    set items(M = []) {
      v(M), p();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(M = !1) {
      m(M), p();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(M) {
      y(M), p();
    },
    get children() {
      return w();
    },
    set children(M) {
      w(M), p();
    }
  }, k = S4(), O = Q(k);
  Cv(O, {
    children: (M, D) => {
      var _ = pe(), N = Q(_);
      ze(N, () => w() ?? Ze), z(M, _);
    },
    $$slots: { default: !0 }
  });
  var V = R(O, 2);
  {
    var H = (M) => {
      var D = pe(), _ = Q(D);
      {
        var N = (P) => {
          _s(P, {
            get autocomplete() {
              return y();
            }
          });
        }, $ = (P) => {
          var A = pe(), j = Q(A);
          At(j, 16, () => E.opts.value.current, (q) => q, (q, G) => {
            _s(q, {
              get value() {
                return G;
              },
              get autocomplete() {
                return y();
              }
            });
          }), z(P, A);
        };
        ae(_, (P) => {
          E.opts.value.current.length === 0 ? P(N) : P($, !1);
        });
      }
      z(M, D);
    }, L = (M) => {
      _s(M, {
        get autocomplete() {
          return y();
        },
        get value() {
          return E.opts.value.current;
        },
        set value(D) {
          E.opts.value.current = D;
        }
      });
    };
    ae(V, (M) => {
      Array.isArray(E.opts.value.current) ? M(H) : M(L, !1);
    });
  }
  return z(t, k), ue(C);
}
se(
  Kl,
  {
    value: {},
    onValueChange: {},
    name: {},
    disabled: {},
    type: {},
    open: {},
    onOpenChange: {},
    onOpenChangeComplete: {},
    loop: {},
    scrollAlignment: {},
    required: {},
    items: {},
    allowDeselect: {},
    autocomplete: {},
    children: {}
  },
  [],
  [],
  !0
);
var _4 = /* @__PURE__ */ re("<button><!></button>");
function Zl(t, e) {
  const n = Mi();
  le(e, !0);
  let r = g(e, "id", 23, () => Gn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "child",
    "children",
    "type"
  ]);
  const u = sc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ S(() => qn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Gn(n)) {
      r(m), p();
    },
    get ref() {
      return o();
    },
    set ref(m = null) {
      o(m), p();
    },
    get child() {
      return i();
    },
    set child(m) {
      i(m), p();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), p();
    },
    get type() {
      return a();
    },
    set type(m = "button") {
      a(m), p();
    }
  }, f = pe(), v = Q(f);
  return zt(v, () => _v, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var x = pe(), E = Q(x);
        {
          var C = (O) => {
            var V = pe(), H = Q(V);
            ze(H, i, () => ({ props: c(d) })), z(O, V);
          }, k = (O) => {
            var V = _4();
            ot(V, () => ({ ...c(d) }));
            var H = Y(V);
            ze(H, () => s() ?? Ze), X(V), z(O, V);
          };
          ae(E, (O) => {
            i() ? O(C) : O(k, !1);
          });
        }
        z(w, x);
      },
      $$slots: { default: !0 }
    });
  }), z(t, f), ue(h);
}
se(Zl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const E4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, P4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, O4 = Symbol("lucide-context"), N4 = () => An(O4);
var T4 = /* @__PURE__ */ _e("<svg><!><!></svg>");
function Va(t, e) {
  le(e, !0);
  const n = N4() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  ]), h = /* @__PURE__ */ S(() => a() ? Number(s()) * 24 / Number(i()) : s());
  var f = {
    get name() {
      return r();
    },
    set name(w) {
      r(w), p();
    },
    get color() {
      return o();
    },
    set color(w = n.color ?? "currentColor") {
      o(w), p();
    },
    get size() {
      return i();
    },
    set size(w = n.size ?? 24) {
      i(w), p();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(w = n.strokeWidth ?? 2) {
      s(w), p();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(w = n.absoluteStrokeWidth ?? !1) {
      a(w), p();
    },
    get iconNode() {
      return l();
    },
    set iconNode(w = []) {
      l(w), p();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), p();
    }
  }, v = T4();
  ot(
    v,
    (w) => ({
      ...E4,
      ...w,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": c(h),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        e.class
      ]
    }),
    [
      () => !u() && !P4(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Y(v);
  At(m, 17, l, ao, (w, b) => {
    var x = /* @__PURE__ */ S(() => Bo(c(b), 2));
    let E = () => c(x)[0], C = () => c(x)[1];
    var k = pe(), O = Q(k);
    ff(O, E, !0, (V, H) => {
      ot(V, () => ({ ...C() }));
    }), z(w, k);
  });
  var y = R(m);
  return ze(y, () => u() ?? Ze), X(v), z(t, v), ue(f);
}
se(
  Va,
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
function zv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Va(t, Ke({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = pe(), a = Q(s);
      ze(a, () => e.children ?? Ze), z(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(zv, {}, [], [], !0);
function Mv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Va(t, Ke({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = pe(), a = Q(s);
      ze(a, () => e.children ?? Ze), z(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Mv, {}, [], [], !0);
var A4 = /* @__PURE__ */ re('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function Dv(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ Le(e, [
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
      n(d), p();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), p();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), p();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), p();
    }
  }, l = pe(), u = Q(l);
  {
    const d = (f, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = A4(), b = Y(w);
      {
        var x = (C) => {
          zv(C, {});
        }, E = (C) => {
          var k = pe(), O = Q(k);
          {
            var V = (H) => {
              Mv(H, {});
            };
            ae(
              O,
              (H) => {
                y() && H(V);
              },
              !0
            );
          }
          z(C, k);
        };
        ae(b, (C) => {
          m() ? C(x) : C(E, !1);
        });
      }
      X(w), z(f, w);
    };
    let h = /* @__PURE__ */ S(() => On("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    zt(u, () => sv, (f, v) => {
      v(f, Ke(
        {
          "data-slot": "checkbox",
          get class() {
            return c(h);
          }
        },
        () => s,
        {
          get ref() {
            return n();
          },
          set ref(m) {
            n(m);
          },
          get checked() {
            return r();
          },
          set checked(m) {
            r(m);
          },
          get indeterminate() {
            return o();
          },
          set indeterminate(m) {
            o(m);
          },
          children: d,
          $$slots: { default: !0 }
        }
      ));
    });
  }
  return z(t, l), ue(a);
}
se(Dv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var z4 = /* @__PURE__ */ re('<div><input type="hidden"/> <!> <!></div>');
const M4 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Vv(t, e) {
  le(e, !0), it(t, M4);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ Le(e, [
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
    set placeholder(v) {
      n(v), p();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), p();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), p();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), p();
    },
    get onChosen() {
      return s();
    },
    set onChosen(v) {
      s(v), p();
    }
  }, u = z4();
  ot(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${e.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = Y(u);
  Dr(d);
  var h = R(d, 2);
  Et(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = R(h, 2);
  return Ge(f, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Oe();
      var y = He();
      Me(() => pt(y, i())), z(v, y);
    },
    $$slots: { default: !0 }
  }), X(u), Me(() => ms(d, o())), z(t, u), ue(l);
}
se(
  Vv,
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
var D4 = /* @__PURE__ */ re("<input/>"), V4 = /* @__PURE__ */ re("<input/>");
function Et(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ Le(e, [
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
    set ref(m = null) {
      n(m), p();
    },
    get value() {
      return r();
    },
    set value(m) {
      r(m), p();
    },
    get type() {
      return o();
    },
    set type(m) {
      o(m), p();
    },
    get files() {
      return i();
    },
    set files(m) {
      i(m), p();
    },
    get class() {
      return s();
    },
    set class(m) {
      s(m), p();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(m = "input") {
      a(m), p();
    }
  }, d = pe(), h = Q(d);
  {
    var f = (m) => {
      var y = D4();
      ot(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => On("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), jt(y, (w) => n(w), () => n()), i0(y, i), Ds(y, r), z(m, y);
    }, v = (m) => {
      var y = V4();
      ot(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => On("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), jt(y, (w) => n(w), () => n()), Ds(y, r), z(m, y);
    };
    ae(h, (m) => {
      o() === "file" ? m(f) : m(v, !1);
    });
  }
  return z(t, d), ue(u);
}
se(
  Et,
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
var H4 = /* @__PURE__ */ re("<textarea></textarea>");
function lt(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ Le(e, [
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
  ]), h, f;
  function v() {
    if (h && a()) {
      if (s() !== void 0) {
        const E = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = E, h.style.overflowY = "hidden", u()?.(E);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let x = h.scrollHeight;
      if (!f) {
        const E = e.rows || 1, C = getComputedStyle(h);
        f = parseFloat(C.fontSize) * 1.2 * E + parseFloat(C.paddingTop) + parseFloat(C.paddingBottom) + parseFloat(C.borderTopWidth);
      }
      if (x < f && (x = f), l()) {
        const E = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(E) ? (h.style.height = E, h.style.overflowY = "auto") : h.style.height = `${x}px`;
      } else
        h.style.height = `${x}px`;
      u()?.(h.style.height);
    }
  }
  Be(() => {
    v();
  });
  var m = {
    get ref() {
      return n();
    },
    set ref(x = null) {
      n(x), p();
    },
    get value() {
      return r();
    },
    set value(x) {
      r(x), p();
    },
    get class() {
      return o();
    },
    set class(x) {
      o(x), p();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(x = "textarea") {
      i(x), p();
    },
    get height() {
      return s();
    },
    set height(x) {
      s(x), p();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(x = !0) {
      a(x), p();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(x) {
      l(x), p();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(x) {
      u(x), p();
    }
  }, y = H4();
  P1(y);
  var w = (x) => {
    v(), e.oninput?.(x);
  }, b = (x) => {
    v(), e.onchange?.(x);
  };
  return ot(
    y,
    (x) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: x
    }),
    [
      () => On("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), jt(y, (x) => h = x, () => h), Ds(y, r), z(t, y), ue(m);
}
se(
  lt,
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
var I4 = /* @__PURE__ */ re('<div role="button"><!></div>'), L4 = /* @__PURE__ */ re("<div></div>");
function Hv(t, e) {
  const n = Rc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Rc(n, ["items", "onChange", "activeIndex"]);
  le(e, !1);
  let o = g(e, "items", 28, () => []), i = g(e, "onChange", 12, () => {
  }), s = g(e, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), p();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), p();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), p();
    }
  };
  wu();
  var u = L4();
  return ot(u, () => ({
    ...r,
    class: `tf-tabs ${pu(r), yt(() => r.class) ?? ""}`
  })), At(u, 5, o, ao, (d, h, f) => {
    var v = I4();
    Te(v, "tabindex", f), v.__click = () => a(c(h), f), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), f));
    };
    var m = Y(v);
    {
      var y = (b) => {
        var x = He();
        Me(() => pt(x, (c(h), yt(() => c(h).label)))), z(b, x);
      }, w = (b) => {
        var x = pe(), E = Q(x);
        ze(E, () => (c(h), yt(() => c(h).label) ?? Ze)), z(b, x);
      };
      ae(m, (b) => {
        c(h), yt(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    X(v), Me(() => an(v, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), z(d, v);
  }), X(u), z(t, u), ue(l);
}
yo(["click", "keydown"]);
se(Hv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var R4 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), j4 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), B4 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), F4 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), K4 = /* @__PURE__ */ re("<div></div>");
const Z4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Iv(t, e) {
  le(e, !0), it(t, Z4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => kt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), p();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), p();
    }
  }, a = K4();
  return At(a, 21, n, ao, (l, u, d) => {
    var h = F4(), f = Y(h);
    Te(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var v = Y(f);
    {
      var m = (k) => {
        var O = R4(), V = Y(O);
        cr(V, {
          get target() {
            return c(u).icon;
          }
        }), X(O), z(k, O);
      };
      ae(v, (k) => {
        c(u).icon && k(m);
      });
    }
    var y = R(v, 2);
    cr(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = R(y, 2);
    X(f);
    var b = R(f, 2);
    {
      var x = (k) => {
        var O = j4(), V = Y(O);
        cr(V, {
          get target() {
            return c(u).description;
          }
        }), X(O), z(k, O);
      };
      ae(b, (k) => {
        c(u).description && k(x);
      });
    }
    var E = R(b, 2);
    {
      var C = (k) => {
        var O = B4(), V = Y(O);
        cr(V, {
          get target() {
            return c(u).content;
          }
        }), X(O), z(k, O);
      };
      ae(E, (k) => {
        o().includes(c(u).key) && k(C);
      });
    }
    X(h), Me((k) => an(w, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), z(l, h);
  }), X(a), Me(() => {
    Rt(a, e.style), an(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), z(t, a), ue(s);
}
yo(["click", "keydown"]);
se(Iv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function cr(t, e) {
  le(e, !0);
  let n = g(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), p();
    }
  }, o = pe(), i = Q(o);
  {
    var s = (l) => {
      var u = pe(), d = Q(u);
      ze(d, () => n() ?? Ze), z(l, u);
    }, a = (l) => {
      var u = pe(), d = Q(u);
      ka(d, n), z(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return z(t, o), ue(r);
}
se(cr, { target: {} }, [], [], !0);
function Wl(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Va(t, Ke({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = pe(), a = Q(s);
      ze(a, () => e.children ?? Ze), z(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Wl, {}, [], [], !0);
var W4 = /* @__PURE__ */ re('<span class="mx-1">,</span>'), X4 = /* @__PURE__ */ re("<!> <!>", 1), q4 = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), Y4 = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), U4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), G4 = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), J4 = /* @__PURE__ */ re('<span class="flex items-center gap-2"><!> <!></span> <!>', 1), Q4 = /* @__PURE__ */ re("<!> <!>", 1), eC = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), tC = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), nC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), rC = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), oC = /* @__PURE__ */ re('<span class="flex items-center gap-2"><!> <!></span> <!>', 1), iC = /* @__PURE__ */ re("<!> <!>", 1);
function It(t, e) {
  le(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "class", 7), h = /* @__PURE__ */ Le(e, [
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
    "placeholder",
    "class"
  ]), f = /* @__PURE__ */ S(() => {
    const M = [], D = (_) => {
      for (const N of _)
        M.push(N), N.children?.length && D(N.children);
    };
    return D(n()), M;
  }), v = /* @__PURE__ */ S(() => {
    const M = [], D = o().length > 0 ? o() : i();
    for (const _ of D) {
      if (_ == null) continue;
      const N = c(f).find(($) => $.value === _);
      N && M.push(N);
    }
    return M;
  }), m = /* @__PURE__ */ S(() => !a() && c(v).length > 0 ? String(c(v)[0].value) : ""), y = /* @__PURE__ */ S(() => a() ? c(v).map((M) => String(M.value)) : []);
  function w(M, D) {
    M.stopPropagation(), r()?.(D);
  }
  function b(M, D = 0) {
    const _ = [];
    for (const N of M) {
      _.push(N);
      const $ = s() || l().includes(N.value);
      N.children?.length && $ && _.push(...b(N.children, D + 1));
    }
    return _;
  }
  let x = /* @__PURE__ */ S(() => b(n()));
  function E(M) {
    return n().findIndex((D) => D.value === M.value) === -1;
  }
  function C(M) {
    return {
      value: String(M.value),
      label: typeof M.label == "string" ? M.label : String(M.value),
      disabled: !1
    };
  }
  var k = {
    get items() {
      return n();
    },
    set items(M) {
      n(M), p();
    },
    get onSelect() {
      return r();
    },
    set onSelect(M) {
      r(M), p();
    },
    get value() {
      return o();
    },
    set value(M = []) {
      o(M), p();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(M = []) {
      i(M), p();
    },
    get expandAll() {
      return s();
    },
    set expandAll(M = !0) {
      s(M), p();
    },
    get multiple() {
      return a();
    },
    set multiple(M = !1) {
      a(M), p();
    },
    get expandValue() {
      return l();
    },
    set expandValue(M = []) {
      l(M), p();
    },
    get placeholder() {
      return u();
    },
    set placeholder(M) {
      u(M), p();
    },
    get class() {
      return d();
    },
    set class(M) {
      d(M), p();
    }
  }, O = pe(), V = Q(O);
  {
    var H = (M) => {
      var D = pe(), _ = Q(D);
      zt(_, () => Kl, (N, $) => {
        $(N, Ke(
          {
            type: "multiple",
            get value() {
              return c(y);
            }
          },
          () => h,
          {
            children: (P, A) => {
              var j = Q4(), q = Q(j);
              {
                let T = /* @__PURE__ */ S(() => On("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d()));
                zt(q, () => Zl, (U, ee) => {
                  ee(U, {
                    get class() {
                      return c(T);
                    },
                    children: (B, Z) => {
                      var W = Y4(), J = Q(W), oe = Y(J);
                      {
                        var I = (ce) => {
                          var ie = pe(), de = Q(ie);
                          At(de, 19, () => c(v), (ye) => ye.value, (ye, Ce, be) => {
                            var he = X4(), xe = Q(he);
                            cr(xe, {
                              get target() {
                                return c(Ce).label;
                              }
                            });
                            var Pe = R(xe, 2);
                            {
                              var te = (Re) => {
                                var De = W4();
                                z(Re, De);
                              };
                              ae(Pe, (Re) => {
                                c(be) < c(v).length - 1 && Re(te);
                              });
                            }
                            z(ye, he);
                          }), z(ce, ie);
                        }, ne = (ce) => {
                          var ie = q4(), de = Y(ie, !0);
                          X(ie), Me(() => pt(de, u() ?? "")), z(ce, ie);
                        };
                        ae(oe, (ce) => {
                          c(v).length > 0 ? ce(I) : ce(ne, !1);
                        });
                      }
                      X(J);
                      var ge = R(J, 2);
                      Wl(ge, { class: "size-4 opacity-50" }), z(B, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var G = R(q, 2);
              zt(G, () => Dl, (T, U) => {
                U(T, {
                  children: (ee, B) => {
                    var Z = pe(), W = Q(Z);
                    zt(W, () => jl, (J, oe) => {
                      oe(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (I, ne) => {
                          var ge = pe(), ce = Q(ge);
                          zt(ce, () => Fl, (ie, de) => {
                            de(ie, {
                              class: "p-1",
                              children: (ye, Ce) => {
                                var be = pe(), he = Q(be);
                                At(he, 17, () => c(x), (xe) => xe.value, (xe, Pe) => {
                                  const te = /* @__PURE__ */ S(() => c(Pe).children && c(Pe).children.length > 0), Re = /* @__PURE__ */ S(() => C(c(Pe)));
                                  var De = pe(), Xe = Q(De);
                                  {
                                    const Fe = (ut, mt) => {
                                      let nt = () => mt?.().selected;
                                      var me = J4(), Ae = Q(me), ct = Y(Ae);
                                      {
                                        var qe = (ht) => {
                                          var ft = U4();
                                          z(ht, ft);
                                        };
                                        ae(ct, (ht) => {
                                          c(te) && ht(qe);
                                        });
                                      }
                                      var gt = R(ct, 2);
                                      cr(gt, {
                                        get target() {
                                          return c(Pe).label;
                                        }
                                      }), X(Ae);
                                      var Vt = R(Ae, 2);
                                      {
                                        var wt = (ht) => {
                                          var ft = G4();
                                          z(ht, ft);
                                        };
                                        ae(Vt, (ht) => {
                                          nt() && ht(wt);
                                        });
                                      }
                                      z(ut, me);
                                    };
                                    let st = /* @__PURE__ */ S(() => On("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", E(c(Pe)) && "pl-6"));
                                    zt(Xe, () => Bl, (ut, mt) => {
                                      mt(ut, {
                                        get value() {
                                          return c(Re).value;
                                        },
                                        get label() {
                                          return c(Re).label;
                                        },
                                        get class() {
                                          return c(st);
                                        },
                                        onclick: (nt) => w(nt, c(Pe)),
                                        children: Fe,
                                        $$slots: { default: !0 }
                                      });
                                    });
                                  }
                                  z(xe, De);
                                }), z(ye, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(I, ge);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(ee, Z);
                  },
                  $$slots: { default: !0 }
                });
              }), z(P, j);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(M, D);
    }, L = (M) => {
      var D = pe(), _ = Q(D);
      zt(_, () => Kl, (N, $) => {
        $(N, Ke(
          {
            type: "single",
            get value() {
              return c(m);
            }
          },
          () => h,
          {
            children: (P, A) => {
              var j = iC(), q = Q(j);
              {
                let T = /* @__PURE__ */ S(() => On("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d()));
                zt(q, () => Zl, (U, ee) => {
                  ee(U, {
                    get class() {
                      return c(T);
                    },
                    children: (B, Z) => {
                      var W = tC(), J = Q(W), oe = Y(J);
                      {
                        var I = (ce) => {
                          cr(ce, {
                            get target() {
                              return c(v)[0].label;
                            }
                          });
                        }, ne = (ce) => {
                          var ie = eC(), de = Y(ie, !0);
                          X(ie), Me(() => pt(de, u() ?? "")), z(ce, ie);
                        };
                        ae(oe, (ce) => {
                          c(v).length > 0 ? ce(I) : ce(ne, !1);
                        });
                      }
                      X(J);
                      var ge = R(J, 2);
                      Wl(ge, { class: "size-4 opacity-50" }), z(B, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var G = R(q, 2);
              zt(G, () => Dl, (T, U) => {
                U(T, {
                  children: (ee, B) => {
                    var Z = pe(), W = Q(Z);
                    zt(W, () => jl, (J, oe) => {
                      oe(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (I, ne) => {
                          var ge = pe(), ce = Q(ge);
                          zt(ce, () => Fl, (ie, de) => {
                            de(ie, {
                              class: "p-1",
                              children: (ye, Ce) => {
                                var be = pe(), he = Q(be);
                                At(he, 17, () => c(x), (xe) => xe.value, (xe, Pe) => {
                                  const te = /* @__PURE__ */ S(() => c(Pe).children && c(Pe).children.length > 0), Re = /* @__PURE__ */ S(() => C(c(Pe)));
                                  var De = pe(), Xe = Q(De);
                                  {
                                    const Fe = (ut, mt) => {
                                      let nt = () => mt?.().selected;
                                      var me = oC(), Ae = Q(me), ct = Y(Ae);
                                      {
                                        var qe = (ht) => {
                                          var ft = nC();
                                          z(ht, ft);
                                        };
                                        ae(ct, (ht) => {
                                          c(te) && ht(qe);
                                        });
                                      }
                                      var gt = R(ct, 2);
                                      cr(gt, {
                                        get target() {
                                          return c(Pe).label;
                                        }
                                      }), X(Ae);
                                      var Vt = R(Ae, 2);
                                      {
                                        var wt = (ht) => {
                                          var ft = rC();
                                          z(ht, ft);
                                        };
                                        ae(Vt, (ht) => {
                                          nt() && ht(wt);
                                        });
                                      }
                                      z(ut, me);
                                    };
                                    let st = /* @__PURE__ */ S(() => On("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", E(c(Pe)) && "pl-6"));
                                    zt(Xe, () => Bl, (ut, mt) => {
                                      mt(ut, {
                                        get value() {
                                          return c(Re).value;
                                        },
                                        get label() {
                                          return c(Re).label;
                                        },
                                        get class() {
                                          return c(st);
                                        },
                                        onclick: (nt) => w(nt, c(Pe)),
                                        children: Fe,
                                        $$slots: { default: !0 }
                                      });
                                    });
                                  }
                                  z(xe, De);
                                }), z(ye, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), z(I, ge);
                        },
                        $$slots: { default: !0 }
                      });
                    }), z(ee, Z);
                  },
                  $$slots: { default: !0 }
                });
              }), z(P, j);
            },
            $$slots: { default: !0 }
          }
        ));
      }), z(M, D);
    };
    ae(V, (M) => {
      a() ? M(H) : M(L, !1);
    });
  }
  return z(t, O), ue(k);
}
se(
  It,
  {
    items: {},
    onSelect: {},
    value: {},
    defaultValue: {},
    expandAll: {},
    multiple: {},
    expandValue: {},
    placeholder: {},
    class: {}
  },
  [],
  [],
  !0
);
const sC = ({
  trigger: t,
  triggerEvent: e,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
  showArrow: l
}) => {
  if (typeof t == "string") {
    const b = document.querySelector(t);
    if (b)
      t = b;
    else
      throw new Error("element not found by document.querySelector('" + t + "')");
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
  function h() {
    xv(t, u, {
      placement: r,
      middleware: [
        mv(o),
        // 手动偏移配置
        wv(i),
        //自动翻转
        yv(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [bv({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: E, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: k, y: O } = C.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, h();
  }
  function m() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(b) {
    b.stopPropagation(), f ? m() : v();
  }
  function w(b) {
    u.contains(b.target) || m();
  }
  return (!e || e.length == 0) && (e = ["click"]), e.forEach((b) => {
    t.addEventListener(b, y);
  }), document.addEventListener("click", w), {
    destroy() {
      e.forEach((b) => {
        t.removeEventListener(b, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var aC = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function bo(t, e) {
  le(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  Dn(() => (a = sC({
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
      n(y), p();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), p();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), p();
    }
  }, d = aC(), h = Y(d), f = Y(h);
  ze(f, n), X(h), jt(h, (y) => i = y, () => i);
  var v = R(h, 2), m = Y(v);
  return ze(m, r), X(v), jt(v, (y) => s = y, () => s), X(d), z(t, d), ue(u);
}
se(bo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(t, e) {
  le(e, !0);
  const n = g(e, "children", 7), r = g(e, "level", 7, 1), o = g(e, "mt", 7), i = g(e, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), p();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), p();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), p();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), p();
    }
  }, a = pe(), l = Q(a);
  return ff(l, () => `h${r()}`, !1, (u, d) => {
    ot(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = pe(), f = Q(h);
    ze(f, () => n() ?? Ze), z(d, h);
  }), z(t, a), ue(s);
}
se(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var lC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const uC = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Ui(t, e) {
  le(e, !0), it(t, uC);
  const n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ S(() => On("input-btn-more", e.class));
    Ge(t, Ke(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = lC();
          z(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ue();
}
se(Ui, {}, [], [], !0);
const cC = () => ({ deleteNode: (t) => {
  et.removeNode(t), et.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), br = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, dC = () => ({ copyNode: (t) => {
  const e = et.getNode(t);
  if (e) {
    const n = br(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    et.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), $t = () => An("svelteflow__node_id"), Rr = () => An("tinyflow_options");
var hC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), fC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), pC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), gC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), vC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), mC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), yC = /* @__PURE__ */ re('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), wC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), bC = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), xC = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const kC = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function kn(t, e) {
  le(e, !0), it(t, kC);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), f = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Dt(), x = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = cC(), { copyNode: C } = dC(), k = Rr(), O = () => {
    k.onNodeExecute?.(b(r()));
  };
  let V = $t();
  var H = {
    get data() {
      return n();
    },
    set data(T) {
      n(T), p();
    },
    get id() {
      return r();
    },
    set id(T = "") {
      r(T), p();
    },
    get icon() {
      return o();
    },
    set icon(T) {
      o(T), p();
    },
    get handle() {
      return i();
    },
    set handle(T) {
      i(T), p();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(T = !0) {
      a(T), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(T = !0) {
      l(T), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(T = !0) {
      u(T), p();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(T = !0) {
      d(T), p();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(T = !0) {
      h(T), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(T = !0) {
      f(T), p();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(T = !0) {
      v(T), p();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(T) {
      m(T), p();
    }
  }, L = xC(), M = Q(L);
  {
    var D = (T) => {
      lg(T, {
        get position() {
          return Ne.Top;
        },
        align: "start",
        children: (U, ee) => {
          var B = bC(), Z = Y(B);
          {
            var W = (ie) => {
              Ge(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (de, ye) => {
                  var Ce = hC();
                  z(de, Ce);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Z, (ie) => {
              u() && ie(W);
            });
          }
          var J = R(Z, 2);
          {
            var oe = (ie) => {
              Ge(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (de, ye) => {
                  var Ce = fC();
                  z(de, Ce);
                },
                $$slots: { default: !0 }
              });
            };
            ae(J, (ie) => {
              l() && ie(oe);
            });
          }
          var I = R(J, 2);
          {
            var ne = (ie) => {
              Ge(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (de, ye) => {
                  var Ce = pC();
                  z(de, Ce);
                },
                $$slots: { default: !0 }
              });
            };
            ae(I, (ie) => {
              a() && ie(ne);
            });
          }
          var ge = R(I, 2);
          {
            var ce = (ie) => {
              bo(ie, {
                placement: "bottom",
                floating: (de) => {
                  var ye = yC(), Ce = Y(ye), be = R(Y(Ce));
                  Et(be, {
                    style: "width: 100%;",
                    onchange: (me) => {
                      const Ae = me.target.value;
                      w(V, { title: Ae });
                    },
                    get value() {
                      return n().title;
                    }
                  }), X(Ce);
                  var he = R(Ce, 2), xe = R(Y(he));
                  lt(xe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (me) => {
                      const Ae = me.target.value;
                      w(V, { description: Ae });
                    },
                    get value() {
                      return n().description;
                    }
                  }), X(he);
                  var Pe = R(he, 2);
                  {
                    var te = (me) => {
                      var Ae = gC(), ct = R(Y(Ae));
                      lt(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (qe) => {
                          const gt = qe.target.value;
                          w(V, { condition: gt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), X(Ae), z(me, Ae);
                    };
                    ae(Pe, (me) => {
                      h() && me(te);
                    });
                  }
                  var Re = R(Pe, 2), De = R(Y(Re), 2);
                  Dr(De), De.__change = (me) => {
                    const Ae = me.target.checked;
                    w(V, { loopEnable: Ae });
                  }, X(Re);
                  var Xe = R(Re, 2);
                  {
                    var Fe = (me) => {
                      var Ae = vC(), ct = Q(Ae), qe = R(Y(ct));
                      {
                        let ft = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                        lt(qe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (St) => {
                            const Zt = St.target.value;
                            w(V, { loopIntervalMs: Zt });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      X(ct);
                      var gt = R(ct, 2), Vt = R(Y(gt));
                      {
                        let ft = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                        lt(Vt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (St) => {
                            const Zt = St.target.value;
                            w(V, { maxLoopCount: Zt });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      X(gt);
                      var wt = R(gt, 2), ht = R(Y(wt));
                      lt(ht, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ft) => {
                          const St = ft.target.value;
                          w(V, { loopBreakCondition: St });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), X(wt), z(me, Ae);
                    };
                    ae(Xe, (me) => {
                      n().loopEnable && me(Fe);
                    });
                  }
                  var st = R(Xe, 2), ut = R(Y(st), 2);
                  Dr(ut), ut.__change = (me) => {
                    const Ae = me.target.checked;
                    w(V, { retryEnable: Ae });
                  }, X(st);
                  var mt = R(st, 2);
                  {
                    var nt = (me) => {
                      var Ae = mC(), ct = Q(Ae), qe = R(Y(ct));
                      {
                        let ft = /* @__PURE__ */ S(() => n().retryIntervalMs || "1000");
                        lt(qe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (St) => {
                            const Zt = St.target.value;
                            w(V, { retryIntervalMs: Zt });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      X(ct);
                      var gt = R(ct, 2), Vt = R(Y(gt));
                      {
                        let ft = /* @__PURE__ */ S(() => n().maxRetryCount || "3");
                        lt(Vt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (St) => {
                            const Zt = St.target.value;
                            w(V, { maxRetryCount: Zt });
                          },
                          get value() {
                            return c(ft);
                          }
                        });
                      }
                      X(gt);
                      var wt = R(gt, 2), ht = R(Y(wt), 2);
                      Dr(ht), ht.__change = (ft) => {
                        const St = ft.target.checked;
                        w(V, { resetRetryCountAfterNormal: St });
                      }, X(wt), Me(() => ja(ht, !!n().resetRetryCountAfterNormal)), z(me, Ae);
                    };
                    ae(mt, (me) => {
                      n().retryEnable && me(nt);
                    });
                  }
                  X(ye), Me(() => {
                    ja(De, !!n().loopEnable), ja(ut, !!n().retryEnable);
                  }), z(de, ye);
                },
                children: (de, ye) => {
                  Ge(de, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (Ce, be) => {
                      var he = wC();
                      z(Ce, he);
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
          X(B), z(U, B);
        },
        $$slots: { default: !0 }
      });
    };
    ae(M, (T) => {
      (a() || l() || u()) && T(D);
    });
  }
  var _ = R(M, 2), N = R(Y(_), 2), $ = Y(N);
  Iv($, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return y;
    },
    onChange: (T, U) => {
      w(r(), { expand: U?.includes("key") }), m()?.(U?.includes("key") ? "key" : "");
    }
  }), X(N), X(_);
  var P = R(_, 2);
  {
    var A = (T) => {
      Hr(T, {
        type: "target",
        get position() {
          return Ne.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(P, (T) => {
      v() && T(A);
    });
  }
  var j = R(P, 2);
  {
    var q = (T) => {
      Hr(T, {
        type: "source",
        get position() {
          return Ne.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(j, (T) => {
      f() && T(q);
    });
  }
  var G = R(j, 2);
  return ze(G, () => i() ?? Ze), z(t, L), ue(H);
}
yo(["change"]);
se(
  kn,
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
var CC = /* @__PURE__ */ re('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), $C = /* @__PURE__ */ re('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), SC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), _C = /* @__PURE__ */ re('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const EC = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Lv(t, e) {
  le(e, !0), it(t, EC);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = $t(), i = _r(o), s = /* @__PURE__ */ S(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = Dt(), l = (H, L) => {
    a(o, (M) => {
      let D = M.data.parameters;
      return D[r()][H] = L, { parameters: D };
    });
  }, u = (H, L) => {
    const M = L.target.value;
    l(H, M);
  }, d = (H) => {
    const L = H.target.value;
    l("name", L);
  }, h = (H) => {
    l("required", H);
  }, f = (H) => {
    const L = H.value;
    l("formType", L);
  }, v = (H) => {
    const L = H.value;
    l("contentType", L);
  };
  let m;
  const y = () => {
    a(o, (H) => {
      let L = H.data.parameters;
      return L.splice(r(), 1), { parameters: [...L] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), p();
    },
    get index() {
      return r();
    },
    set index(H) {
      r(H), p();
    }
  }, b = _C(), x = Q(b), E = Y(x);
  Et(E, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), X(x);
  var C = R(x, 2), k = Y(C);
  Dv(k, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), X(C);
  var O = R(C, 2), V = Y(O);
  return jt(
    bo(V, {
      placement: "bottom",
      floating: (H) => {
        var L = $C(), M = Y(L), D = R(Y(M));
        {
          let Z = /* @__PURE__ */ S(() => c(s).contentType ? [c(s).contentType] : []);
          It(D, {
            get items() {
              return Hu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: v
          });
        }
        X(M);
        var _ = R(M, 2), N = R(Y(_));
        {
          let Z = /* @__PURE__ */ S(() => c(s).formType ? [c(s).formType] : []);
          It(N, {
            get items() {
              return l7;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(Z);
            },
            onSelect: f
          });
        }
        X(_);
        var $ = R(_, 2);
        {
          var P = (Z) => {
            var W = CC(), J = R(Y(W));
            {
              let oe = /* @__PURE__ */ S(() => c(s).enums?.join(`
`));
              lt(J, {
                rows: 3,
                style: "width: 100%;",
                onchange: (I) => {
                  l("enums", I.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(oe);
                },
                placeholder: "一行一个选项"
              });
            }
            X(W), z(Z, W);
          };
          ae($, (Z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && Z(P);
          });
        }
        var A = R($, 2), j = R(Y(A));
        lt(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formLabel", Z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), X(A);
        var q = R(A, 2), G = R(Y(q));
        lt(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formDescription", Z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), X(q);
        var T = R(q, 2), U = R(Y(T));
        lt(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formPlaceholder", Z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), X(T);
        var ee = R(T, 2), B = Y(ee);
        Ge(B, {
          variant: "destructive",
          onclick: y,
          children: (Z, W) => {
            Oe();
            var J = He("删除");
            z(Z, J);
          },
          $$slots: { default: !0 }
        }), X(ee), X(L), z(H, L);
      },
      children: (H, L) => {
        Ge(H, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (M, D) => {
            var _ = SC();
            z(M, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => m = H,
    () => m
  ), X(O), z(t, b), ue(w);
}
se(Lv, { parameter: {}, index: {} }, [], [], !0);
var PC = /* @__PURE__ */ re('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), OC = /* @__PURE__ */ re('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), NC = /* @__PURE__ */ re('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const TC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function Rv(t, e) {
  le(e, !0), it(t, TC);
  let n = $t(), r = _r(n), o = /* @__PURE__ */ S(() => [...r?.current?.data?.parameters || []]);
  var i = NC(), s = Y(i);
  {
    var a = (u) => {
      var d = PC();
      Oe(4), z(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = R(s, 2);
  At(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      Lv(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = OC();
      z(u, d);
    }
  ), X(i), z(t, i), ue();
}
se(Rv, {}, [], [], !0);
const Oi = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = br()), Oi(e.children);
}), t), In = () => {
  const { updateNodeData: t } = Dt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Oi(s?.children)) : Oi(r?.children);
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
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), t(e, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var AC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), zC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), MC = /* @__PURE__ */ re('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const DC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function jv(t, e) {
  le(e, !0), it(t, DC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return kn(t, Ke(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = AC();
      z(a, l);
    },
    children: (a, l) => {
      var u = MC(), d = Q(u), h = Y(d);
      Qe(h, {
        level: 3,
        children: (m, y) => {
          Oe();
          var w = He("输入参数");
          z(m, w);
        },
        $$slots: { default: !0 }
      });
      var f = R(h, 2);
      Ge(f, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = zC();
          z(m, w);
        },
        $$slots: { default: !0 }
      }), X(d);
      var v = R(d, 2);
      Rv(v, {}), z(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(jv, { data: {} }, [], [], !0);
const Bv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), Bv(t, r.source, n));
}, Fv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: Fv(r.children, e + "." + r.name, n)
})), ih = (t, e, n) => {
  if (t.type === "startNode") {
    const r = t.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (e ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: t.id + "." + i.name
      });
    return { label: t.data.title, value: t.id, children: o };
  } else {
    if (t.type === "loopNode" && n.parentId)
      return {
        label: t.data.title,
        value: t.id,
        children: [
          { label: "loopItem", value: t.id + ".loopItem" },
          { label: "index (Number)", value: t.id + ".index" }
        ]
      };
    {
      const r = t.data.outputDefs;
      if (r)
        return {
          label: t.data.title,
          value: t.id,
          children: Fv(r, t.id, e)
        };
    }
  }
}, Kv = (t = !1) => {
  const e = $t(), n = _r(e), r = /* @__PURE__ */ S(Hn), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = ih(d, h, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Bv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, v = ih(h, f, u);
          v && l.push(v);
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
var VC = /* @__PURE__ */ re('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), HC = /* @__PURE__ */ re('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), IC = /* @__PURE__ */ re('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const LC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Zv(t, e) {
  le(e, !0), it(t, LC), Dn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = $t(), l = _r(a), u = /* @__PURE__ */ S(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = Dt(), h = (N, $) => {
    d(a, (P) => {
      let A = P.data?.[o()];
      return A[r()] = { ...A[r()], [N]: $ }, { [o()]: A };
    });
  }, f = (N, $) => {
    const P = $.target.value;
    h(N, P);
  }, v = (N) => {
    const $ = N.value;
    h("ref", $);
  }, m = (N) => {
    const $ = N.value;
    h("refType", $);
  }, y = (N) => {
    const $ = N.value;
    h("contentType", $);
  };
  let w;
  const b = () => {
    d(a, (N) => {
      let $ = N.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), w?.hide();
  };
  let x = Kv(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), p();
    },
    get index() {
      return r();
    },
    set index(N) {
      r(N), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(N) {
      i(N), p();
    },
    get showContentType() {
      return s();
    },
    set showContentType(N = !1) {
      s(N), p();
    }
  }, C = IC(), k = Q(C), O = Y(k);
  {
    let N = /* @__PURE__ */ S(() => c(u).nameDisabled === !0);
    Et(O, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(N);
      },
      oninput: ($) => f("name", $)
    });
  }
  X(k);
  var V = R(k, 2), H = Y(V);
  {
    var L = (N) => {
      Et(N, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, M = (N) => {
      var $ = pe(), P = Q($);
      {
        var A = (j) => {
          {
            let q = /* @__PURE__ */ S(() => [c(u).ref]);
            It(j, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(q);
              },
              expandAll: !0,
              onSelect: v
            });
          }
        };
        ae(
          P,
          (j) => {
            c(u).refType !== "input" && j(A);
          },
          !0
        );
      }
      z(N, $);
    };
    ae(H, (N) => {
      c(u).refType === "fixed" ? N(L) : N(M, !1);
    });
  }
  X(V);
  var D = R(V, 2), _ = Y(D);
  return jt(
    bo(_, {
      placement: "bottom",
      floating: (N) => {
        var $ = HC(), P = Y($), A = R(Y(P));
        {
          let W = /* @__PURE__ */ S(() => c(u).refType ? [c(u).refType] : []);
          It(A, {
            get items() {
              return a7;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: m
          });
        }
        X(P);
        var j = R(P, 2);
        {
          var q = (W) => {
            var J = VC(), oe = R(Y(J));
            {
              let I = /* @__PURE__ */ S(() => c(u).contentType ? [c(u).contentType] : []);
              It(oe, {
                get items() {
                  return Hu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(I);
                },
                onSelect: y
              });
            }
            X(J), z(W, J);
          };
          ae(j, (W) => {
            s() && W(q);
          });
        }
        var G = R(j, 2), T = R(Y(G));
        lt(T, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            f("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), X(G);
        var U = R(G, 2), ee = R(Y(U));
        lt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            f("description", W);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), X(U);
        var B = R(U, 2), Z = Y(B);
        Ge(Z, {
          variant: "destructive",
          onclick: b,
          children: (W, J) => {
            Oe();
            var oe = He("删除");
            z(W, oe);
          },
          $$slots: { default: !0 }
        }), X(B), X($), z(N, $);
      },
      children: (N, $) => {
        Ui(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => w = N,
    () => w
  ), X(D), z(t, C), ue(E);
}
se(
  Zv,
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
var RC = /* @__PURE__ */ re('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), jC = /* @__PURE__ */ re('<div class="none-params svelte-32f1pk"> </div>'), BC = /* @__PURE__ */ re('<div class="input-container svelte-32f1pk"><!> <!></div>');
const FC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Ut(t, e) {
  le(e, !0), it(t, FC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = $t(), a = _r(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), p();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), p();
    }
  }, d = BC(), h = Y(d);
  {
    var f = (m) => {
      var y = RC();
      Oe(4), z(m, y);
    };
    ae(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = R(h, 2);
  return At(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      Zv(m, {
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
    (m) => {
      var y = jC(), w = Y(y, !0);
      X(y), Me(() => pt(w, n())), z(m, y);
    }
  ), X(d), z(t, d), ue(u);
}
se(
  Ut,
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
var KC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), ZC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), WC = /* @__PURE__ */ re('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const XC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Wv(t, e) {
  le(e, !0), it(t, XC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return kn(t, Ke(
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
        var l = KC();
        z(a, l);
      },
      children: (a, l) => {
        var u = WC(), d = Q(u), h = Y(d);
        Qe(h, {
          level: 3,
          children: (m, y) => {
            Oe();
            var w = He("输出参数");
            z(m, w);
          },
          $$slots: { default: !0 }
        });
        var f = R(h, 2);
        Ge(f, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = ZC();
            z(m, w);
          },
          $$slots: { default: !0 }
        }), X(d);
        var v = R(d, 2);
        Ut(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Wv, { data: {} }, [], [], !0);
const ol = (t) => JSON.parse(JSON.stringify(t));
var qC = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), YC = /* @__PURE__ */ re('<div class="input-more-item svelte-hwmib9"><!></div>'), UC = /* @__PURE__ */ re('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), GC = /* @__PURE__ */ re('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const JC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Xv(t, e) {
  le(e, !0), it(t, JC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = $t(), a = _r(s), l = /* @__PURE__ */ S(() => {
    let _ = a?.current?.data?.[o()], N;
    if (_ && r().length > 0) {
      let $ = _;
      for (let P = 0; P < r().length; P++) {
        const A = r()[P];
        P == r().length - 1 ? N = $[A] : $ = $[A].children;
      }
    }
    return { ...n(), ...N };
  });
  const { updateNodeData: u } = Dt(), d = (_, N) => {
    u(s, ($) => {
      const P = $.data?.[o()];
      if (P && r().length > 0) {
        let A = P;
        for (let j = 0; j < r().length; j++) {
          const q = r()[j];
          j == r().length - 1 ? A[q] = { ...A[q], [_]: N } : A = A[q].children;
        }
      }
      return { [o()]: [...ol(P)] };
    });
  }, h = (_, N) => {
    const $ = N.target.value;
    d(_, $);
  }, f = (_) => {
    const N = _.value;
    d("dataType", N);
  };
  let v;
  const m = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      if (N && r().length > 0) {
        let $ = N;
        for (let P = 0; P < r().length; P++) {
          const A = r()[P];
          P == r().length - 1 ? $.splice(A, 1) : $ = $[A].children;
        }
      }
      return { [o()]: [...ol(N)] };
    }), v?.hide();
  }, y = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      if (N && r().length > 0) {
        let $ = N;
        for (let P = 0; P < r().length; P++) {
          const A = r()[P];
          P == r().length - 1 ? $[A].children ? $[A].children.push({ id: br(), name: "newParam", dataType: "String" }) : $[A].children = [{ id: br(), name: "newParam", dataType: "String" }] : $ = $[A].children;
        }
      }
      return { [o()]: [...ol(N)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), p();
    }
  }, b = GC(), x = Q(b), E = Y(x);
  {
    var C = (_) => {
      var N = pe(), $ = Q(N);
      At($, 17, r, ao, (P, A) => {
        Oe();
        var j = He(" ");
        z(P, j);
      }), z(_, N);
    };
    ae(E, (_) => {
      r().length > 1 && _(C);
    });
  }
  var k = R(E, 2);
  {
    let _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
    Et(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (N) => {
        h("name", N);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  X(x);
  var O = R(x, 2), V = Y(O);
  {
    let _ = /* @__PURE__ */ S(() => c(l).dataTypeItems || s7), N = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), $ = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
    It(V, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(N);
      },
      get disabled() {
        return c($);
      },
      onSelect: f
    });
  }
  var H = R(V, 2);
  {
    var L = (_) => {
      Ge(_, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (N, $) => {
          var P = qC();
          z(N, P);
        },
        $$slots: { default: !0 }
      });
    };
    ae(H, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(L);
    });
  }
  X(O);
  var M = R(O, 2), D = Y(M);
  return jt(
    bo(D, {
      placement: "bottom",
      floating: (_) => {
        var N = UC(), $ = Y(N), P = R(Y($));
        {
          let T = /* @__PURE__ */ S(() => c(l).defaultValue || "");
          lt(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (U) => {
              h("defaultValue", U);
            }
          });
        }
        X($);
        var A = R($, 2), j = R(Y(A));
        {
          let T = /* @__PURE__ */ S(() => c(l).description || "");
          lt(j, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (U) => {
              h("description", U);
            }
          });
        }
        X(A);
        var q = R(A, 2);
        {
          var G = (T) => {
            var U = YC(), ee = Y(U);
            Ge(ee, {
              variant: "destructive",
              onclick: m,
              children: (B, Z) => {
                Oe();
                var W = He("删除");
                z(B, W);
              },
              $$slots: { default: !0 }
            }), X(U), z(T, U);
          };
          ae(q, (T) => {
            c(l).deleteDisabled !== !0 && T(G);
          });
        }
        X(N), z(_, N);
      },
      children: (_, N) => {
        Ui(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => v = _,
    () => v
  ), X(M), z(t, b), ue(w);
}
se(
  Xv,
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
var QC = /* @__PURE__ */ re("<!> <!>", 1), e$ = /* @__PURE__ */ re('<div class="none-params svelte-1oz5kx0"> </div>'), t$ = /* @__PURE__ */ re('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), n$ = /* @__PURE__ */ re('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const r$ = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Er(t, e) {
  le(e, !0), it(t, r$);
  const n = (m, y = Ze, w = Ze) => {
    var b = pe(), x = Q(b);
    At(
      x,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, C, k) => {
        var O = QC(), V = Q(O);
        {
          let M = /* @__PURE__ */ S(() => [...w(), c(k)]);
          Xv(V, {
            get parameter() {
              return c(C);
            },
            get position() {
              return c(M);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var H = R(V, 2);
        {
          var L = (M) => {
            {
              let D = /* @__PURE__ */ S(() => [...w(), c(k)]);
              n(M, () => c(C).children, () => c(D));
            }
          };
          ae(H, (M) => {
            c(C).children && M(L);
          });
        }
        z(E, O);
      },
      (E) => {
        var C = pe(), k = Q(C);
        {
          var O = (V) => {
            var H = e$(), L = Y(H, !0);
            X(H), Me(() => pt(L, r())), z(V, H);
          };
          ae(k, (V) => {
            w().length === 0 && V(O);
          });
        }
        z(E, C);
      }
    ), z(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = $t(), a = _r(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), p();
    }
  }, d = n$(), h = Y(d);
  {
    var f = (m) => {
      var y = t$();
      Oe(4), z(m, y);
    };
    ae(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = R(h, 2);
  return n(v, () => c(l) || [], () => []), X(d), z(t, d), ue(u);
}
se(Er, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var o$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), i$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), s$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), a$ = /* @__PURE__ */ re('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), l$ = /* @__PURE__ */ re('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), u$ = /* @__PURE__ */ re('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const c$ = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function qv(t, e) {
  le(e, !0), it(t, c$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), s = Rr();
  let a = /* @__PURE__ */ we(kt([]));
  Dn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = Dt(), u = (h) => {
    l(o, () => ({ outType: h })), h === "text" ? l(o, {
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
  Be(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(h) {
      n(h), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = o$();
        z(h, f);
      },
      children: (h, f) => {
        var v = u$(), m = Q(v), y = Y(m);
        Qe(y, {
          level: 3,
          children: (T, U) => {
            Oe();
            var ee = He("输入参数");
            z(T, ee);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2);
        Ge(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, U) => {
            var ee = i$();
            z(T, ee);
          },
          $$slots: { default: !0 }
        }), X(m);
        var b = R(m, 2);
        Ut(b, {});
        var x = R(b, 2), E = Y(x);
        Qe(E, {
          level: 3,
          children: (T, U) => {
            Oe();
            var ee = He("图片识别");
            z(T, ee);
          },
          $$slots: { default: !0 }
        });
        var C = R(E, 2);
        Ge(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (T, U) => {
            var ee = s$();
            z(T, ee);
          },
          $$slots: { default: !0 }
        }), X(x);
        var k = R(x, 2);
        Ut(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var O = R(k, 2);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (T, U) => {
            Oe();
            var ee = He("模型设置");
            z(T, ee);
          },
          $$slots: { default: !0 }
        });
        var V = R(O, 4), H = Y(V);
        {
          let T = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
          It(H, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (U) => {
              const ee = U.value;
              l(o, () => ({ llmId: ee }));
            },
            get value() {
              return c(T);
            }
          });
        }
        var L = R(H, 2);
        bo(L, {
          placement: "bottom",
          floating: (T) => {
            var U = a$(), ee = R(Y(U), 2), B = Y(ee), Z = Y(B), W = Y(Z);
            X(Z);
            var J = R(Z, 2);
            Dr(J), J.__input = (he) => l(o, { temperature: parseFloat(he.target.value) }), X(B), X(ee);
            var oe = R(ee, 2), I = Y(oe), ne = Y(I), ge = Y(ne);
            X(ne);
            var ce = R(ne, 2);
            Dr(ce), ce.__input = (he) => l(o, { topP: parseFloat(he.target.value) }), X(I), X(oe);
            var ie = R(oe, 2), de = Y(ie), ye = Y(de), Ce = Y(ye);
            X(ye);
            var be = R(ye, 2);
            Dr(be), be.__input = (he) => l(o, { topK: parseInt(he.target.value) }), X(de), X(ie), X(U), Me(() => {
              pt(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ms(J, n().temperature ?? 0.5), pt(ge, `Top P: ${n().topP ?? 0.9 ?? ""}`), ms(ce, n().topP ?? 0.9), pt(Ce, `Top K: ${n().topK ?? 50 ?? ""}`), ms(be, n().topK ?? 50);
            }), z(T, U);
          },
          children: (T, U) => {
            Ui(T, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), X(V);
        var M = R(V, 4), D = Y(M);
        {
          let T = /* @__PURE__ */ S(() => n().systemPrompt || "");
          lt(D, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (U) => {
              l(o, { systemPrompt: U.target.value });
            }
          });
        }
        X(M);
        var _ = R(M, 4), N = Y(_);
        {
          let T = /* @__PURE__ */ S(() => n().userPrompt || "");
          lt(N, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (U) => {
              l(o, { userPrompt: U.target.value });
            }
          });
        }
        X(_);
        var $ = R(_, 2);
        {
          var P = (T) => {
            var U = l$(), ee = R(Q(U), 2), B = Y(ee);
            {
              let Z = /* @__PURE__ */ S(() => n().jsonSchema || "");
              lt(B, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(Z);
                },
                oninput: (W) => {
                  l(o, { jsonSchema: W.target.value });
                }
              });
            }
            X(ee), z(T, U);
          };
          ae($, (T) => {
            n().outType === "json" && T(P);
          });
        }
        var A = R($, 2), j = Y(A);
        Qe(j, {
          level: 3,
          children: (T, U) => {
            Oe();
            var ee = He("输出参数");
            z(T, ee);
          },
          $$slots: { default: !0 }
        });
        var q = R(j, 2);
        {
          let T = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
          It(q, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (U) => {
              u(U.value);
            },
            get value() {
              return c(T);
            }
          });
        }
        X(A);
        var G = R(A, 2);
        Er(G, {}), z(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
yo(["input"]);
se(qv, { data: {} }, [], [], !0);
var d$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), h$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), p$ = /* @__PURE__ */ re('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const g$ = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yv(t, e) {
  le(e, !0), it(t, g$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Dn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = $t(), { addParameter: i } = In(), { updateNodeData: s } = Dt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = d$();
        z(u, d);
      },
      children: (u, d) => {
        var h = p$(), f = Q(h), v = Y(f);
        Qe(v, {
          level: 3,
          children: (L, M) => {
            Oe();
            var D = He("输入参数");
            z(L, D);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Ge(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, M) => {
            var D = h$();
            z(L, D);
          },
          $$slots: { default: !0 }
        }), X(f);
        var y = R(f, 2);
        Ut(y, {});
        var w = R(y, 2);
        Qe(w, {
          level: 3,
          mt: "10px",
          children: (L, M) => {
            Oe();
            var D = He("代码");
            z(L, D);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 4), x = Y(b);
        {
          let L = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
          It(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (M) => {
              const D = M.value;
              s(o, () => ({ engine: D }));
            },
            get value() {
              return c(L);
            }
          });
        }
        X(b);
        var E = R(b, 4), C = Y(E);
        {
          let L = /* @__PURE__ */ S(() => n().code || "");
          lt(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (M) => {
              s(o, () => ({ code: M.target.value }));
            },
            get value() {
              return c(L);
            }
          });
        }
        X(E);
        var k = R(E, 2), O = Y(k);
        Qe(O, {
          level: 3,
          mt: "10px",
          children: (L, M) => {
            Oe();
            var D = He("输出参数");
            z(L, D);
          },
          $$slots: { default: !0 }
        });
        var V = R(O, 2);
        Ge(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (L, M) => {
            var D = f$();
            z(L, D);
          },
          $$slots: { default: !0 }
        }), X(k);
        var H = R(k, 2);
        Er(H, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Yv, { data: {} }, [], [], !0);
var v$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), m$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), y$ = /* @__PURE__ */ re('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const w$ = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Uv(t, e) {
  le(e, !0), it(t, w$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), { updateNodeData: s } = Dt();
  Be(() => {
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
      n(l), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = v$();
        z(l, u);
      },
      children: (l, u) => {
        var d = y$(), h = Q(d), f = Y(h);
        Qe(f, {
          level: 3,
          children: (k, O) => {
            Oe();
            var V = He("输入参数");
            z(k, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(f, 2);
        Ge(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, O) => {
            var V = m$();
            z(k, V);
          },
          $$slots: { default: !0 }
        }), X(h);
        var m = R(h, 2);
        Ut(m, {});
        var y = R(m, 2);
        Qe(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, O) => {
            Oe();
            var V = He("模板内容");
            z(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2), b = Y(w);
        {
          let k = /* @__PURE__ */ S(() => n().template || "");
          lt(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ template: O.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        X(w);
        var x = R(w, 2), E = Y(x);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Oe();
            var V = He("输出参数");
            z(k, V);
          },
          $$slots: { default: !0 }
        }), X(x);
        var C = R(x, 2);
        Er(C, {}), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Uv, { data: {} }, [], [], !0);
var b$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), x$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), k$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), C$ = /* @__PURE__ */ re('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), $$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), S$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), _$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), E$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), P$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), O$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), N$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const A$ = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Gv(t, e) {
  le(e, !0), it(t, A$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Dn(() => {
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
  ], i = $t(), { addParameter: s } = In(), { updateNodeData: a } = Dt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = b$();
        z(u, d);
      },
      children: (u, d) => {
        var h = T$(), f = Q(h), v = Y(f);
        Qe(v, {
          level: 3,
          children: (Z, W) => {
            Oe();
            var J = He("输入参数");
            z(Z, J);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Ge(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (Z, W) => {
            var J = x$();
            z(Z, J);
          },
          $$slots: { default: !0 }
        }), X(f);
        var y = R(f, 2);
        Ut(y, {});
        var w = R(y, 2);
        Qe(w, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            Oe();
            var J = He("URL 地址");
            z(Z, J);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 2), x = Y(b), E = Y(x);
        {
          let Z = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
          It(E, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (W) => {
              const J = W.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        X(x);
        var C = R(x, 2), k = Y(C);
        {
          let Z = /* @__PURE__ */ S(() => n().url || "");
          Et(k, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        X(C), X(b);
        var O = R(b, 2), V = Y(O);
        Qe(V, {
          level: 3,
          children: (Z, W) => {
            Oe();
            var J = He("Http 头信息");
            z(Z, J);
          },
          $$slots: { default: !0 }
        });
        var H = R(V, 2);
        Ge(H, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (Z, W) => {
            var J = k$();
            z(Z, J);
          },
          $$slots: { default: !0 }
        }), X(O);
        var L = R(O, 2);
        Ut(L, { dataKeyName: "headers" });
        var M = R(L, 2);
        {
          var D = (Z) => {
            var W = C$(), J = Q(W);
            Qe(J, {
              level: 3,
              mt: "10px",
              children: (xe, Pe) => {
                Oe();
                var te = He("Body");
                z(xe, te);
              },
              $$slots: { default: !0 }
            });
            var oe = R(J, 2), I = Y(oe), ne = Y(I);
            {
              let xe = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
              Et(ne, {
                type: "radio",
                value: "",
                get checked() {
                  return c(xe);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Oe(), X(I);
            var ge = R(I, 2), ce = Y(ge);
            {
              let xe = /* @__PURE__ */ S(() => n().bodyType === "form-data");
              Et(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(xe);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Oe(), X(ge);
            var ie = R(ge, 2), de = Y(ie);
            {
              let xe = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
              Et(de, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(xe);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Oe(), X(ie);
            var ye = R(ie, 2), Ce = Y(ye);
            {
              let xe = /* @__PURE__ */ S(() => n().bodyType === "json");
              Et(Ce, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(xe);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Oe(), X(ye);
            var be = R(ye, 2), he = Y(be);
            {
              let xe = /* @__PURE__ */ S(() => n().bodyType === "raw");
              Et(he, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(xe);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Oe(), X(be), X(oe), z(Z, W);
          };
          ae(M, (Z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && Z(D);
          });
        }
        var _ = R(M, 2);
        {
          var N = (Z) => {
            var W = S$(), J = Q(W), oe = Y(J);
            Qe(oe, {
              level: 3,
              children: (ge, ce) => {
                Oe();
                var ie = He("参数");
                z(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var I = R(oe, 2);
            Ge(I, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ge, ce) => {
                var ie = $$();
                z(ge, ie);
              },
              $$slots: { default: !0 }
            }), X(J);
            var ne = R(J, 2);
            Ut(ne, { dataKeyName: "formData" }), z(Z, W);
          };
          ae(_, (Z) => {
            n().bodyType === "form-data" && Z(N);
          });
        }
        var $ = R(_, 2);
        {
          var P = (Z) => {
            var W = E$(), J = Q(W), oe = Y(J);
            Qe(oe, {
              level: 3,
              children: (ge, ce) => {
                Oe();
                var ie = He("Body 参数");
                z(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var I = R(oe, 2);
            Ge(I, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, ce) => {
                var ie = _$();
                z(ge, ie);
              },
              $$slots: { default: !0 }
            }), X(J);
            var ne = R(J, 2);
            Ut(ne, { dataKeyName: "formUrlencoded" }), z(Z, W);
          };
          ae($, (Z) => {
            n().bodyType === "x-www-form-urlencoded" && Z(P);
          });
        }
        var A = R($, 2);
        {
          var j = (Z) => {
            var W = P$(), J = Y(W);
            lt(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), X(W), z(Z, W);
          };
          ae(A, (Z) => {
            n().bodyType === "json" && Z(j);
          });
        }
        var q = R(A, 2);
        {
          var G = (Z) => {
            var W = O$(), J = Y(W);
            lt(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), X(W), z(Z, W);
          };
          ae(q, (Z) => {
            n().bodyType === "raw" && Z(G);
          });
        }
        var T = R(q, 2), U = Y(T);
        Qe(U, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            Oe();
            var J = He("输出参数");
            z(Z, J);
          },
          $$slots: { default: !0 }
        });
        var ee = R(U, 2);
        Ge(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (Z, W) => {
            var J = N$();
            z(Z, J);
          },
          $$slots: { default: !0 }
        }), X(T);
        var B = R(T, 2);
        Er(B, {}), z(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Gv, { data: {} }, [], [], !0);
var z$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), M$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), D$ = /* @__PURE__ */ re('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const V$ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jv(t, e) {
  le(e, !0), it(t, V$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), s = Rr();
  let a = /* @__PURE__ */ we(kt([]));
  Dn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Be(() => {
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
      n(d), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = z$();
        z(d, h);
      },
      children: (d, h) => {
        var f = D$(), v = Q(f), m = Y(v);
        Qe(m, {
          level: 3,
          children: (D, _) => {
            Oe();
            var N = He("输入参数");
            z(D, N);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ge(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var N = M$();
            z(D, N);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Ut(w, {});
        var b = R(w, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("知识库设置");
            z(D, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), E = Y(x);
        {
          let D = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
          It(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const N = _.value;
              l(o, () => ({ knowledgeId: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(x);
        var C = R(x, 4), k = Y(C);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), X(C);
        var O = R(C, 4), V = Y(O);
        {
          let D = /* @__PURE__ */ S(() => n().limit || "");
          Et(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const N = _.target.value;
              l(o, () => ({ limit: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(O);
        var H = R(O, 2), L = Y(H);
        Qe(L, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("输出参数");
            z(D, N);
          },
          $$slots: { default: !0 }
        }), X(H);
        var M = R(H, 2);
        Er(M, {}), z(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(Jv, { data: {} }, [], [], !0);
var H$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), I$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L$ = /* @__PURE__ */ re('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const R$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qv(t, e) {
  le(e, !0), it(t, R$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), s = Rr();
  let a = /* @__PURE__ */ we(kt([]));
  Dn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Be(() => {
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
      n(d), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = H$();
        z(d, h);
      },
      children: (d, h) => {
        var f = L$(), v = Q(f), m = Y(v);
        Qe(m, {
          level: 3,
          children: (D, _) => {
            Oe();
            var N = He("输入参数");
            z(D, N);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ge(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, _) => {
            var N = I$();
            z(D, N);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Ut(w, {});
        var b = R(w, 2);
        Qe(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("搜索引擎设置");
            z(D, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), E = Y(x);
        {
          let D = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
          It(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const N = _.value;
              l(o, () => ({ engine: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(x);
        var C = R(x, 4), k = Y(C);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), X(C);
        var O = R(C, 4), V = Y(O);
        Et(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), X(O);
        var H = R(O, 2), L = Y(H);
        Qe(L, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("输出参数");
            z(D, N);
          },
          $$slots: { default: !0 }
        }), X(H);
        var M = R(H, 2);
        Er(M, {}), z(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(Qv, { data: {} }, [], [], !0);
var j$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), B$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), F$ = /* @__PURE__ */ re('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const K$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function em(t, e) {
  le(e, !0), it(t, K$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In();
  Be(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = j$();
        z(a, l);
      },
      handle: (a) => {
        Hr(a, {
          type: "source",
          get position() {
            return Ne.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = F$(), d = Q(u), h = Y(d);
        Qe(h, {
          level: 3,
          children: (b, x) => {
            Oe();
            var E = He("循环变量");
            z(b, E);
          },
          $$slots: { default: !0 }
        }), X(d);
        var f = R(d, 2);
        Ut(f, { dataKeyName: "loopVars" });
        var v = R(f, 2), m = Y(v);
        Qe(m, {
          level: 3,
          children: (b, x) => {
            Oe();
            var E = He("输出参数");
            z(b, E);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Ge(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var E = B$();
            z(b, E);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Ut(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), z(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(em, { data: {} }, [], [], !0);
var Z$ = /* @__PURE__ */ re('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), W$ = /* @__PURE__ */ re('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const X$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function tm(t, e) {
  le(e, !0), it(t, X$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = $t(), a = _r(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Dt(), d = (_, N) => {
    u(s, ($) => {
      let P = $.data?.[o()];
      return P[r()] = { ...P[r()], [_]: N }, { [o()]: P };
    });
  }, h = (_, N) => {
    const $ = N.target.value;
    d(_, $);
  }, f = (_) => {
    const N = _.value;
    d("ref", N);
  }, v = (_) => {
    const N = _.value;
    d("formType", N);
  }, m = (_) => {
    const N = _.value;
    d("contentType", N);
  };
  let y;
  const w = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      return N.splice(r(), 1), { [o()]: [...N] };
    }), y?.hide();
  };
  let b = Kv(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), p();
    }
  }, E = W$(), C = Q(E), k = Y(C);
  {
    let _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
    Et(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (N) => h("name", N)
    });
  }
  X(C);
  var O = R(C, 2), V = Y(O);
  {
    var H = (_) => {
      Et(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => h("value", N)
      });
    }, L = (_) => {
      var N = pe(), $ = Q(N);
      {
        var P = (A) => {
          {
            let j = /* @__PURE__ */ S(() => [c(l).ref]);
            It(A, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ae(
          $,
          (A) => {
            c(l).refType !== "input" && A(P);
          },
          !0
        );
      }
      z(_, N);
    };
    ae(V, (_) => {
      c(l).refType === "fixed" ? _(H) : _(L, !1);
    });
  }
  X(O);
  var M = R(O, 2), D = Y(M);
  return jt(
    bo(D, {
      placement: "bottom",
      floating: (_) => {
        var N = Z$(), $ = Y(N), P = R(Y($));
        {
          let Z = /* @__PURE__ */ S(() => c(l).contentType ? [c(l).contentType] : []);
          It(P, {
            get items() {
              return Hu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: m
          });
        }
        X($);
        var A = R($, 2), j = R(Y(A));
        {
          let Z = /* @__PURE__ */ S(() => c(l).formType ? [c(l).formType] : []);
          It(j, {
            get items() {
              return u7;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(Z);
            },
            onSelect: v
          });
        }
        X(A);
        var q = R(A, 2), G = R(Y(q));
        lt(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formLabel", Z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), X(q);
        var T = R(q, 2), U = R(Y(T));
        lt(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formDescription", Z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), X(T);
        var ee = R(T, 2), B = Y(ee);
        Ge(B, {
          variant: "destructive",
          onclick: w,
          children: (Z, W) => {
            Oe();
            var J = He("删除");
            z(Z, J);
          },
          $$slots: { default: !0 }
        }), X(ee), X(N), z(_, N);
      },
      children: (_, N) => {
        Ui(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), X(M), z(t, E), ue(x);
}
se(
  tm,
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
var q$ = /* @__PURE__ */ re('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Y$ = /* @__PURE__ */ re('<div class="none-params svelte-1fllp9b"> </div>'), U$ = /* @__PURE__ */ re('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const G$ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function nm(t, e) {
  le(e, !0), it(t, G$);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = $t(), s = _r(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无确认数据") {
      n(v), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), p();
    }
  }, u = U$(), d = Y(u);
  {
    var h = (v) => {
      var m = q$();
      Oe(4), z(v, m);
    };
    ae(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var f = R(d, 2);
  return At(
    f,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      tm(v, {
        get parameter() {
          return c(m);
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
    (v) => {
      var m = Y$(), y = Y(m, !0);
      X(m), Me(() => pt(y, n())), z(v, m);
    }
  ), X(u), z(t, u), ue(l);
}
se(nm, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Xl = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!Xl(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !Xl(t[s], e[s])) return !1;
    return !0;
  }
};
var J$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Q$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), e6 = /* @__PURE__ */ re('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const t6 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rm(t, e) {
  le(e, !0), it(t, t6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), { updateNodeData: s } = Dt();
  Be(() => {
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
      Xl(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  };
  return kn(t, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = J$();
        z(l, u);
      },
      children: (l, u) => {
        var d = e6(), h = Q(d), f = Y(h);
        Qe(f, {
          level: 3,
          children: (k, O) => {
            Oe();
            var V = He("确认数据");
            z(k, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(f, 2);
        Ge(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, O) => {
            var V = Q$();
            z(k, V);
          },
          $$slots: { default: !0 }
        }), X(h);
        var m = R(h, 2);
        nm(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = R(m, 2);
        Qe(y, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Oe();
            var V = He("确认消息");
            z(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 4), b = Y(w);
        {
          let k = /* @__PURE__ */ S(() => n().message || "");
          lt(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ message: O.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        X(w);
        var x = R(w, 2), E = Y(x);
        Qe(E, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Oe();
            var V = He("输出参数");
            z(k, V);
          },
          $$slots: { default: !0 }
        }), X(x);
        var C = R(x, 2);
        Er(C, { placeholder: "" }), z(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(rm, { data: {} }, [], [], !0);
const n6 = {
  startNode: jv,
  codeNode: Yv,
  confirmNode: rm,
  llmNode: qv,
  templateNode: Uv,
  httpNode: Gv,
  knowledgeNode: Jv,
  searchEngineNode: Qv,
  loopNode: em,
  endNode: Wv
};
var r6 = /* @__PURE__ */ re("<!> ", 1);
function ql(t, e) {
  le(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = (u) => {
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
      n(u), p();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), p();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), p();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), p();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), p();
    }
  };
  return Ge(t, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var h = r6(), f = Q(h);
      ka(f, n);
      var v = R(f);
      Me(() => pt(v, ` ${r() ?? ""}`)), z(u, h);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(ql, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var o6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), i6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), s6 = /* @__PURE__ */ re('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function om(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ we("base"), r = /* @__PURE__ */ we("show");
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
  ], s = [], a = Rr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, E) => (l[x].sortNo || 0) - (l[E].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, E) => (x.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === x) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var u = s6(), d = Y(u), h = Y(d), f = Y(h);
  Hv(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      K(n, b.value.toString(), !0);
    }
  }), X(h);
  var v = R(h, 2), m = Y(v);
  At(m, 21, () => o, ao, (b, x) => {
    ql(b, Ke(() => c(x)));
  }), X(m);
  var y = R(m, 2);
  At(y, 21, () => s, ao, (b, x) => {
    ql(b, Ke(() => c(x)));
  }), X(y), X(v), X(d);
  var w = R(d, 2);
  Ge(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var E = pe(), C = Q(E);
      {
        var k = (V) => {
          var H = o6();
          z(V, H);
        }, O = (V) => {
          var H = i6();
          z(V, H);
        };
        ae(C, (V) => {
          c(r) === "show" ? V(k) : V(O, !1);
        });
      }
      z(b, E);
    },
    $$slots: { default: !0 }
  }), X(u), Me(() => {
    an(u, 1, `tf-toolbar ${c(r) ?? ""}`), Rt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Rt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), z(t, u), ue();
}
se(om, {}, [], [], !0);
const a6 = () => ({ getNode: (t) => et.getNode(t) }), l6 = () => ({ ensureParentInNodesBefore: (t, e) => {
  et.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === t) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === t || n[s].id === e) {
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
} }), u6 = () => ({ getEdgesByTarget: (t) => et.getEdges().filter((e) => e.target === t) });
var c6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), d6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), h6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), f6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), p6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), g6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), v6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), m6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), y6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), w6 = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const b6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function im(t, e) {
  le(e, !0), it(t, b6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = In(), s = Dt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), f = Rr().customNodes[e.type];
  f.render?.(h, d, s);
  const v = f.forms;
  let m;
  Be(() => {
    n().expand && m && m.append(h);
  }), Be(() => {
    n() && f.onUpdate?.(h, { ...d, data: n() });
  }), Be(() => {
    !n().parameters && f.parameters && l({
      parameters: Oi(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Be(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Oi(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), p();
    }
  };
  {
    const w = (x) => {
      var E = pe(), C = Q(E);
      ka(C, () => f.icon), z(x, E);
    };
    let b = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
    kn(t, Ke(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (x, E) => {
          var C = w6(), k = Q(C);
          {
            var O = (_) => {
              var N = d6(), $ = Q(N), P = Y($);
              Qe(P, {
                level: 3,
                children: (G, T) => {
                  Oe();
                  var U = He("输入参数");
                  z(G, U);
                },
                $$slots: { default: !0 }
              });
              var A = R(P, 2);
              {
                var j = (G) => {
                  Ge(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (T, U) => {
                      var ee = c6();
                      z(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(A, (G) => {
                  f.parametersAddEnable !== !1 && G(j);
                });
              }
              X($);
              var q = R($, 2);
              Ut(q, {}), z(_, N);
            };
            ae(k, (_) => {
              f.parametersEnable !== !1 && _(O);
            });
          }
          var V = R(k, 2);
          {
            var H = (_) => {
              var N = pe(), $ = Q(N);
              At($, 17, () => v, ao, (P, A) => {
                var j = pe(), q = Q(j);
                {
                  var G = (U) => {
                    var ee = h6(), B = Q(ee), Z = Y(B, !0);
                    X(B);
                    var W = R(B, 2), J = Y(W);
                    {
                      let oe = /* @__PURE__ */ S(() => n()[c(A).name] || c(A).defaultValue);
                      Et(J, Ke(
                        {
                          get placeholder() {
                            return c(A).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(A).attrs,
                        {
                          onchange: (I) => {
                            u(c(A).name, I);
                          }
                        }
                      ));
                    }
                    X(W), Me(() => pt(Z, c(A).label)), z(U, ee);
                  }, T = (U) => {
                    var ee = pe(), B = Q(ee);
                    {
                      var Z = (J) => {
                        var oe = f6(), I = Q(oe), ne = Y(I, !0);
                        X(I);
                        var ge = R(I, 2), ce = Y(ge);
                        {
                          let ie = /* @__PURE__ */ S(() => n()[c(A).name] || c(A).defaultValue);
                          lt(ce, Ke(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(A).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(A).attrs,
                            {
                              onchange: (de) => {
                                u(c(A).name, de);
                              }
                            }
                          ));
                        }
                        X(ge), Me(() => pt(ne, c(A).label)), z(J, oe);
                      }, W = (J) => {
                        var oe = pe(), I = Q(oe);
                        {
                          var ne = (ce) => {
                            var ie = p6(), de = Q(ie), ye = Y(de, !0);
                            X(de);
                            var Ce = R(de, 2), be = Y(Ce), he = Y(be), xe = Y(he);
                            X(he);
                            var Pe = R(he, 2), te = (Re) => l({ [c(A).name]: parseFloat(Re.target.value) });
                            ot(
                              Pe,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(A).attrs,
                                value: n()[c(A).name] ?? c(A).defaultValue,
                                oninput: te
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), X(be), X(Ce), Me(() => {
                              pt(ye, c(A).label), pt(xe, `${c(A).description ?? ""}: ${n()[c(A).name] ?? c(A).defaultValue ?? ""}`);
                            }), z(ce, ie);
                          }, ge = (ce) => {
                            var ie = pe(), de = Q(ie);
                            {
                              var ye = (be) => {
                                var he = g6(), xe = Q(he), Pe = Y(xe, !0);
                                X(xe);
                                var te = R(xe, 2), Re = Y(te);
                                {
                                  let De = /* @__PURE__ */ S(() => c(A).options || []), Xe = /* @__PURE__ */ S(() => n()[c(A).name] ? [n()[c(A).name]] : [c(A).defaultValue]);
                                  It(Re, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(A).placeholder;
                                    },
                                    onSelect: (Fe) => {
                                      const st = Fe.value;
                                      l({ [c(A).name]: st });
                                    },
                                    get value() {
                                      return c(Xe);
                                    }
                                  });
                                }
                                X(te), Me(() => pt(Pe, c(A).label)), z(be, he);
                              }, Ce = (be) => {
                                var he = pe(), xe = Q(he);
                                {
                                  var Pe = (Re) => {
                                    var De = v6(), Xe = Q(De), Fe = Y(Xe, !0);
                                    X(Xe);
                                    var st = R(Xe, 2), ut = Y(st);
                                    {
                                      let mt = /* @__PURE__ */ S(() => c(A).chosen?.buttonText);
                                      Vv(ut, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(A).placeholder;
                                        },
                                        get buttonText() {
                                          return c(mt);
                                        },
                                        onChosen: (nt, me, Ae) => {
                                          c(A).chosen?.onChosen?.(l, nt, me, Ae);
                                        },
                                        get value() {
                                          return n()[c(A).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(A).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    X(st), Me(() => pt(Fe, c(A).label)), z(Re, De);
                                  }, te = (Re) => {
                                    var De = pe(), Xe = Q(De);
                                    {
                                      var Fe = (st) => {
                                        Qe(st, Ke({ level: 3, mt: "10px" }, () => c(A).attrs, {
                                          children: (ut, mt) => {
                                            Oe();
                                            var nt = He();
                                            Me(() => pt(nt, c(A).label)), z(ut, nt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Xe,
                                        (st) => {
                                          c(A).type === "heading" && st(Fe);
                                        },
                                        !0
                                      );
                                    }
                                    z(Re, De);
                                  };
                                  ae(
                                    xe,
                                    (Re) => {
                                      c(A).type === "chosen" ? Re(Pe) : Re(te, !1);
                                    },
                                    !0
                                  );
                                }
                                z(be, he);
                              };
                              ae(
                                de,
                                (be) => {
                                  c(A).type === "select" ? be(ye) : be(Ce, !1);
                                },
                                !0
                              );
                            }
                            z(ce, ie);
                          };
                          ae(
                            I,
                            (ce) => {
                              c(A).type === "slider" ? ce(ne) : ce(ge, !1);
                            },
                            !0
                          );
                        }
                        z(J, oe);
                      };
                      ae(
                        B,
                        (J) => {
                          c(A).type === "textarea" ? J(Z) : J(W, !1);
                        },
                        !0
                      );
                    }
                    z(U, ee);
                  };
                  ae(q, (U) => {
                    c(A).type === "input" ? U(G) : U(T, !1);
                  });
                }
                z(P, j);
              }), z(_, N);
            };
            ae(V, (_) => {
              v && _(H);
            });
          }
          var L = R(V, 2);
          jt(L, (_) => m = _, () => m);
          var M = R(L, 2);
          {
            var D = (_) => {
              var N = y6(), $ = Q(N), P = Y($);
              Qe(P, {
                level: 3,
                mt: "10px",
                children: (G, T) => {
                  Oe();
                  var U = He("输出参数");
                  z(G, U);
                },
                $$slots: { default: !0 }
              });
              var A = R(P, 2);
              {
                var j = (G) => {
                  Ge(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (T, U) => {
                      var ee = m6();
                      z(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(A, (G) => {
                  f.outputDefsAddEnable !== !1 && G(j);
                });
              }
              X($);
              var q = R($, 2);
              Er(q, {}), z(_, N);
            };
            ae(M, (_) => {
              f.outputDefsEnable !== !1 && _(D);
            });
          }
          Me(() => {
            Rt(L, f.rootStyle || ""), an(L, 1, Sr(f.rootClass), "svelte-qt4m0r");
          }), z(x, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
se(im, { data: {} }, [], [], !0);
const x6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = et.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, et.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), k6 = () => ({ deleteEdge: (t) => {
  et.removeEdge(t);
} }), C6 = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = et.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(et.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, $6 = () => ({ getNodeRelativePosition: (t) => {
  let e = et.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = et.getNode(e.parentId) : e = void 0;
  return n;
} });
function S6(t) {
  const { id: e, type: n, position: r, data: o, parentId: i } = t;
  return {
    id: e,
    type: n,
    position: { x: r.x, y: r.y },
    parentId: i || void 0,
    data: o ? JSON.parse(JSON.stringify(o)) : {},
    ...i !== void 0 && { parentId: i }
  };
}
function _6(t) {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const a of t)
    e.set(a.id, a), n.set(a.id, 0), a.parentId && (n.set(a.id, 1), r.has(a.parentId) || r.set(a.parentId, []), r.get(a.parentId).push(a.id));
  const o = [];
  for (const a of t)
    (!a.parentId || !e.has(a.parentId)) && o.push(a);
  const i = [], s = /* @__PURE__ */ new Set();
  for (; o.length > 0; ) {
    const a = o.shift();
    if (s.has(a.id)) continue;
    s.add(a.id), i.push(a);
    const l = r.get(a.id) || [];
    for (const u of l)
      s.has(u) || o.push(e.get(u));
  }
  for (const a of t)
    s.has(a.id) || i.push(a);
  return i;
}
function E6(t) {
  const { id: e, source: n, target: r, sourceHandle: o, targetHandle: i, type: s, data: a } = t;
  return {
    id: e,
    source: n,
    target: r,
    ...o !== void 0 && { sourceHandle: o },
    ...i !== void 0 && { targetHandle: i },
    ...s !== void 0 && { type: s },
    data: a ? JSON.parse(JSON.stringify(a)) : {}
  };
}
function Yl(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Yl(n, e));
  if (typeof t == "object") {
    if (t.refType === "ref" && typeof t.ref == "string") {
      const r = t.ref.match(/^([^.\s]+)\.(.+)$/);
      if (r) {
        const [o, i, s] = r, a = e.get(i);
        if (a !== void 0)
          return { ...t, ref: `${a}.${s}` };
      }
    }
    const n = {};
    for (const r in t)
      Object.hasOwn(t, r) && (n[r] = Yl(t[r], e));
    return n;
  }
  return t;
}
const P6 = () => (Dt(), { copyHandler: async (t) => {
  const e = et.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = et.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(S6), o = n.map(E6), i = JSON.stringify({
    tinyflowNodes: r,
    tinyflowEdges: o,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in t && t.clipboardData ? (t.clipboardData.setData("text/plain", i), t instanceof ClipboardEvent && t.preventDefault()) : await navigator.clipboard.writeText(i), console.log("Copied nodes and edges to clipboard");
  } catch (s) {
    console.error("Failed to copy:", s);
    try {
      sessionStorage.setItem("tinyflow_clipboard", i);
    } catch {
    }
  }
}, pasteHandler: (t) => {
  const e = t.clipboardData?.getData("text/plain");
  if (!e) return;
  let n = null;
  try {
    n = JSON.parse(e);
  } catch {
    return;
  }
  if (!n?.tinyflowNodes || !Array.isArray(n.tinyflowNodes))
    return;
  t.preventDefault();
  const r = _6(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${br()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Yl(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: h,
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
      id: `edge_${br()}`,
      source: u,
      target: d
    });
  }
  et.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), et.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), sh = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var O6 = /* @__PURE__ */ re('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), N6 = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), T6 = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const A6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function sm(t, e) {
  le(e, !0), it(t, A6);
  const n = g(e, "onInit", 7), r = g(e, "colorMode", 7), o = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = Dt();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(null);
  const { updateEdgeData: l } = x6(), u = (B) => {
    B.preventDefault(), B.dataTransfer && (B.dataTransfer.dropEffect = "move");
  }, d = (B) => {
    B.preventDefault();
    const Z = i.screenToFlowPosition({ x: B.clientX - 250, y: B.clientY - 100 }), W = B.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const J = JSON.parse(W), oe = { id: `node_${br()}`, position: Z, data: {}, ...J };
    et.addNode(oe), et.selectNodeOnly(oe.id);
  }, { getNode: h } = a6(), f = (B) => {
    const Z = h(B.source), W = h(B.target);
    if (B.sourceHandle === "loop_handle" || Z.parentId) {
      const J = i.getEdges();
      for (let oe of J)
        if (oe.target === B.target) {
          const I = h(oe.source);
          if (B.sourceHandle === "loop_handle" && I.parentId !== Z.id || Z.parentId && I.parentId !== Z.parentId)
            return !1;
        }
    }
    return !(!Z.parentId && W.parentId && W.parentId !== Z.id);
  }, { getNodesFromSource: v } = C6(), { getNodeRelativePosition: m } = $6(), { ensureParentInNodesBefore: y } = l6(), w = (B, Z) => {
    if (!Z.isValid)
      return;
    const W = Z.toNode;
    if (W.parentId)
      return;
    const J = Z.fromNode, oe = Z.fromHandle, I = { position: { ...W.position } };
    if (oe.id === "loop_handle" ? I.parentId = J.id : J.parentId && (I.parentId = J.parentId), I.parentId) {
      const { x: ne, y: ge } = m(I.parentId);
      I.position = { x: W.position.x - ne, y: W.position.y - ge }, i.updateNode(W.id, I), v(W.id).forEach((ce) => {
        i.updateNode(ce.id, {
          parentId: I.parentId,
          position: { x: ce.position.x - ne, y: ce.position.y - ge }
        });
      }), y(I.parentId, W.id);
    }
    setTimeout(() => {
      et.getEdges().forEach((ne) => {
        ne.target === W.id && ne.source == J.id && (K(s, !0), K(a, ne, !0));
      });
    });
  }, { getEdgesByTarget: b } = u6(), x = (B) => {
    B.edges.forEach((Z) => {
      Z.id === c(a)?.id && (K(a, null), K(s, !1));
      const W = h(Z.target);
      if (W && W.parentId) {
        const J = b(Z.target), { x: oe, y: I } = m(W.parentId);
        if (J.length === 0)
          i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + oe, y: W.position.y + I }
          }), v(W.id).forEach((ne) => {
            i.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + oe, y: ne.position.y + I }
            });
          });
        else {
          let ne = !1;
          for (let ge = 0; ge < J.length; ge++) {
            const ce = J[ge], ie = h(ce.source);
            if (ie.parentId || ie.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + oe, y: W.position.y + I }
          }), v(W.id).forEach((ge) => {
            i.updateNode(ge.id, {
              parentId: void 0,
              position: { x: ge.position.x + oe, y: ge.position.y + I }
            });
          }));
        }
      }
    });
  }, { deleteEdge: E } = k6(), C = (B, Z) => {
  }, k = (B) => {
  }, { copyHandler: O, pasteHandler: V } = P6(), H = (B) => {
    sh() || ((B.ctrlKey || B.metaKey) && B.key === "c" && (B.preventDefault(), O(B)), (B.ctrlKey || B.metaKey) && B.key === "a" && (B.preventDefault(), et.updateNodes((Z) => Z.map((W) => ({ ...W, selected: !0 }))), et.updateEdges((Z) => Z.map((W) => ({ ...W, selected: !0 })))));
  }, L = async (B) => {
    sh() || V(B);
  };
  Dn(() => {
    window.addEventListener("keydown", H), window.addEventListener("paste", L);
  }), Vi(() => {
    window.removeEventListener("keydown", H), window.removeEventListener("paste", L);
  });
  const M = {
    // ...nodeTypes
  }, D = Rr().customNodes;
  if (D)
    for (let B of Object.keys(D))
      M[B] = im;
  const _ = Rr().onDataChange;
  Be(() => {
    _?.({
      nodes: et.getNodes(),
      edges: et.getEdges(),
      viewport: et.getViewport()
    });
  });
  var N = {
    get onInit() {
      return n();
    },
    set onInit(B) {
      n(B), p();
    },
    get colorMode() {
      return r();
    },
    set colorMode(B) {
      r(B), p();
    }
  }, $ = T6(), P = Y($), A = et.getNodes, j = et.setNodes, q = et.getEdges, G = et.setEdges, T = et.getViewport, U = et.setViewport;
  {
    let B = /* @__PURE__ */ S(() => ({ ...n6, ...M })), Z = /* @__PURE__ */ S(() => ({
      markerEnd: { type: $i.ArrowClosed, width: 20, height: 20 }
    }));
    Yp(P, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(B);
      },
      get nodes() {
        return A();
      },
      set nodes(W) {
        j(W);
      },
      get edges() {
        return q();
      },
      set edges(W) {
        G(W);
      },
      get viewport() {
        return T();
      },
      set viewport(W) {
        U(W);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: f,
      onconnectend: w,
      onconnectstart: C,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (W) => {
        K(s, !0), K(a, W.edge, !0);
      },
      onbeforeconnect: (W) => ({ ...W, id: br() }),
      ondelete: x,
      onclick: (W) => {
        const J = W.target;
        J.classList.contains("svelte-flow__edge-interaction") || J.classList.contains("panel-content") || J.closest(".panel-content") || (K(s, !1), K(a, null));
      },
      get defaultEdgeOptions() {
        return c(Z);
      },
      children: (W, J) => {
        var oe = N6(), I = Q(oe);
        ig(I, {});
        var ne = R(I, 2);
        ng(ne, {});
        var ge = R(ne, 2);
        ag(ge, {});
        var ce = R(ge, 2);
        {
          var ie = (de) => {
            Ki(de, {
              children: (ye, Ce) => {
                var be = O6(), he = R(Y(be), 4), xe = Y(he);
                {
                  let De = /* @__PURE__ */ S(() => c(a)?.data?.condition);
                  lt(xe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(De);
                    },
                    onchange: (Xe) => {
                      c(a) && l(c(a).id, { condition: Xe.target?.value });
                    }
                  });
                }
                X(he);
                var Pe = R(he, 2), te = Y(Pe);
                Ge(te, {
                  variant: "destructive",
                  onclick: () => {
                    E(c(a)?.id), K(s, !1);
                  },
                  children: (De, Xe) => {
                    Oe();
                    var Fe = He("删除");
                    z(De, Fe);
                  },
                  $$slots: { default: !0 }
                });
                var Re = R(te, 2);
                Ge(Re, {
                  variant: "default",
                  onclick: () => {
                    K(s, !1);
                  },
                  children: (De, Xe) => {
                    Oe();
                    var Fe = He("保存");
                    z(De, Fe);
                  },
                  $$slots: { default: !0 }
                }), X(Pe), X(be), z(ye, be);
              },
              $$slots: { default: !0 }
            });
          };
          ae(ce, (de) => {
            c(s) && de(ie);
          });
        }
        z(W, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = R(P, 2);
  return om(ee, {}), X($), z(t, $), ue(N);
}
se(sm, { onInit: {}, colorMode: {} }, [], [], !0);
const am = typeof window < "u" ? window : void 0;
function z6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let M6 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = am, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = po((r) => {
      const o = Ct(e, "focusin", r), i = Ct(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? z6(this.#e) : null;
  }
};
new M6();
function D6(t, e) {
  switch (t) {
    case "post":
      Be(e);
      break;
    case "pre":
      tn(e);
      break;
  }
}
function lm(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  D6(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = yt(() => n(a, s));
    return s = a, l;
  });
}
function hc(t, e, n) {
  lm(t, "post", e, n);
}
function V6(t, e, n) {
  lm(t, "pre", e, n);
}
hc.pre = V6;
function H6(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class um {
  #e;
  #t;
  #n;
  #r;
  #o;
  #i = /* @__PURE__ */ we(0);
  constructor(e, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = am
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = H6(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = po(() => Ct(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), c(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#i), r(Reflect.get(s, a))),
        set: (s, a, l) => (K(this.#i, c(this.#i) + 1), Reflect.set(s, a, l), this.#l(e), !0)
      }), n.set(o, i)), i;
    };
    return r(e);
  }
  set current(e) {
    this.#l(e), K(this.#i, c(this.#i) + 1);
  }
  #a = (e) => {
    e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), K(this.#i, c(this.#i) + 1));
  };
  #s(e) {
    try {
      return this.#n.deserialize(e);
    } catch (n) {
      console.error(`Error when parsing "${e}" from persisted store "${this.#t}"`, n);
      return;
    }
  }
  #l(e) {
    try {
      e != null && this.#r?.setItem(this.#t, this.#n.serialize(e));
    } catch (n) {
      console.error(`Error when writing value from persisted store "${this.#t}" to ${this.#r}`, n);
    }
  }
}
function ah(t) {
  return t.filter((e) => e.length > 0);
}
const cm = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, Gi = typeof document < "u";
function I6(t) {
  return typeof t == "function";
}
function L6(t) {
  return t !== null && typeof t == "object";
}
const Ni = Symbol("box"), fc = Symbol("is-writable");
function R6(t) {
  return L6(t) && Ni in t;
}
function j6(t) {
  return Ot.isBox(t) && fc in t;
}
function Ot(t) {
  let e = /* @__PURE__ */ we(kt(t));
  return {
    [Ni]: !0,
    [fc]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function B6(t, e) {
  const n = /* @__PURE__ */ S(t);
  return e ? {
    [Ni]: !0,
    [fc]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Ni]: !0,
    get current() {
      return t();
    }
  };
}
function F6(t) {
  return Ot.isBox(t) ? t : I6(t) ? Ot.with(t) : Ot(t);
}
function K6(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => Ot.isBox(r) ? (Ot.isWritableBox(r) ? Object.defineProperty(e, n, {
      get() {
        return r.current;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        r.current = o;
      }
    }) : Object.defineProperty(e, n, {
      get() {
        return r.current;
      }
    }), e) : Object.assign(e, { [n]: r }),
    {}
  );
}
function Z6(t) {
  return Ot.isWritableBox(t) ? {
    [Ni]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
Ot.from = F6;
Ot.with = B6;
Ot.flatten = K6;
Ot.readonly = Z6;
Ot.isBox = R6;
Ot.isWritableBox = j6;
function W6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const X6 = W6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function q6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${X6(e)}: ${t[e]};`).join(`
`);
}
function Y6(t = {}) {
  return q6(t).replace(`
`, " ");
}
const U6 = {
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
Y6(U6);
const G6 = typeof window < "u" ? window : void 0;
function J6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Q6 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = G6, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = po((o) => {
      const i = Ct(n, "focusin", o), s = Ct(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? J6(this.#e) : null;
  }
}
new Q6();
const eo = Ot("mode-watcher-mode"), to = Ot("mode-watcher-theme"), e9 = ["dark", "light", "system"];
function Ul(t) {
  return typeof t != "string" ? !1 : e9.includes(t);
}
class t9 {
  #e = "system";
  #t = Gi ? localStorage : cm;
  #n = this.#t.getItem(eo.current);
  #r = Ul(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ we(kt(this.#i()));
  #i(e = this.#r) {
    return new um(eo.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Ul(n) ? n : this.#e
      }
    });
  }
  constructor() {
    go(() => hc.pre(() => eo.current, (e, n) => {
      const r = c(this.#o).current;
      K(this.#o, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return c(this.#o).current;
  }
  set current(e) {
    c(this.#o).current = e;
  }
}
class n9 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ we(kt(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Ep("prefers-color-scheme: light") : { current: !1 };
  query() {
    Gi && K(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    go(() => {
      tn(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Gl = new t9(), Jl = new n9();
class r9 {
  #e = Gi ? localStorage : cm;
  #t = this.#e.getItem(to.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ we(kt(this.#o()));
  #o(e = this.#n) {
    return new um(to.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    go(() => hc.pre(() => to.current, (e, n) => {
      const r = c(this.#r).current;
      K(this.#r, this.#o(r), !0), n && localStorage.removeItem(n);
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
  set current(e) {
    c(this.#r).current = e;
  }
}
const Es = new r9();
let lh, uh, ch = !1, ps = null;
function o9() {
  return ps || (ps = document.createElement("style"), ps.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), ps);
}
function dm(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!ch) {
    ch = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(lh), clearTimeout(uh);
  const n = o9(), r = () => document.head.appendChild(n), o = () => {
    n.parentNode && document.head.removeChild(n);
  };
  function i() {
    t(), window.requestAnimationFrame(o);
  }
  if (typeof window.requestAnimationFrame < "u") {
    r(), e ? i() : window.requestAnimationFrame(() => {
      i();
    });
    return;
  }
  r(), lh = window.setTimeout(() => {
    t(), uh = window.setTimeout(o, 16);
  }, 16);
}
const Tr = Ot(void 0), ua = Ot(!0), ca = Ot(!1), Ql = Ot([]), eu = Ot([]);
function i9() {
  const t = /* @__PURE__ */ S(() => {
    if (!Gi) return;
    const e = Gl.current === "system" ? Jl.current : Gl.current, n = ah(Ql.current), r = ah(eu.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && Tr.current && s.setAttribute("content", Tr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && Tr.current && s.setAttribute("content", Tr.current.dark));
    }
    return ua.current ? dm(o, ca.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function s9() {
  const t = /* @__PURE__ */ S(() => {
    if (Es.current, !Gi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Es.current);
    }
    return ua.current ? dm(e, yt(() => ca.current)) : e(), Es.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const a9 = i9(), l9 = s9();
function hm(t) {
  Gl.current = t;
}
function u9(t) {
  Es.current = t;
}
function c9({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var d9 = /* @__PURE__ */ re('<meta name="theme-color"/>');
function fm(t, e) {
  le(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), p();
    }
  }, o = pe(), i = Q(o);
  {
    var s = (a) => {
      var l = d9();
      Me(() => Te(l, "content", n().dark)), z(a, l);
    };
    ae(i, (a) => {
      n() && a(s);
    });
  }
  return z(t, o), ue(r);
}
se(fm, { themeColors: {} }, [], [], !0);
var h9 = /* @__PURE__ */ re('<meta name="theme-color"/>'), f9 = /* @__PURE__ */ re("<!> <!>", 1);
function pm(t, e) {
  le(e, !0);
  let n = g(e, "trueNonce", 7, ""), r = g(e, "initConfig", 7), o = g(e, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), p();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), p();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), p();
    }
  };
  return J1("171tvz2", (s) => {
    var a = f9(), l = Q(a);
    {
      var u = (h) => {
        var f = h9();
        Me(() => Te(f, "content", o().dark)), z(h, f);
      };
      ae(l, (h) => {
        o() && h(u);
      });
    }
    var d = R(l, 2);
    ka(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + c9.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), z(s, a);
  }), ue(i);
}
se(pm, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function gm(t, e) {
  le(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), f = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  eo.current = h(), to.current = d(), Ql.current = s(), eu.current = a(), ua.current = i(), Tr.current = o(), ca.current = v(), tn(() => {
    ca.current = v();
  }), tn(() => {
    ua.current = i();
  }), tn(() => {
    Tr.current = o();
  }), tn(() => {
    Ql.current = s();
  }), tn(() => {
    eu.current = a();
  }), tn(() => {
    eo.current = h();
  }), tn(() => {
    to.current = d();
  }), tn(() => {
    a9.current, eo.current, to.current, l9.current;
  }), Dn(() => {
    Jl.tracking(n()), Jl.query();
    const k = localStorage.getItem(eo.current);
    hm(Ul(k) ? k : r());
    const O = localStorage.getItem(to.current);
    u9(O || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: h(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ S(() => typeof window > "u" ? u() : "");
  var w = {
    get track() {
      return n();
    },
    set track(k = !0) {
      n(k), p();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(k = "system") {
      r(k), p();
    },
    get themeColors() {
      return o();
    },
    set themeColors(k) {
      o(k), p();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(k = !0) {
      i(k), p();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(k = ["dark"]) {
      s(k), p();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(k = []) {
      a(k), p();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(k = "") {
      l(k), p();
    },
    get nonce() {
      return u();
    },
    set nonce(k = "") {
      u(k), p();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(k = "mode-watcher-theme") {
      d(k), p();
    },
    get modeStorageKey() {
      return h();
    },
    set modeStorageKey(k = "mode-watcher-mode") {
      h(k), p();
    },
    get disableHeadScriptInjection() {
      return f();
    },
    set disableHeadScriptInjection(k = !1) {
      f(k), p();
    },
    get synchronousModeChanges() {
      return v();
    },
    set synchronousModeChanges(k = !1) {
      v(k), p();
    }
  }, b = pe(), x = Q(b);
  {
    var E = (k) => {
      fm(k, {
        get themeColors() {
          return Tr.current;
        }
      });
    }, C = (k) => {
      pm(k, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return Tr.current;
        }
      });
    };
    ae(x, (k) => {
      f() ? k(E) : k(C, !1);
    });
  }
  return z(t, b), ue(w);
}
se(
  gm,
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
var p9 = /* @__PURE__ */ re("<!> <!>", 1);
function g9(t, e) {
  le(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (hm(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  et.init(o?.nodes || [], o?.edges || []), io("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), p();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), p();
    }
  }, a = p9(), l = Q(a);
  gm(l, {});
  var u = R(l, 2);
  return Up(u, {
    children: (d, h) => {
      sm(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), z(t, a), ue(s);
}
customElements.define("tinyflow-component", se(g9, { options: {}, onInit: {} }, [], [], !1));
const m9 = _m((t, e) => {
  const n = bc(null), r = bc(null);
  Em(e, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
    getInstance: () => r.current ? r.current : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = t;
  return Pm(() => {
    if (n.current) {
      const a = new c7({
        ...t,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Am.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  m9 as Tinyflow
};
//# sourceMappingURL=index.js.map
