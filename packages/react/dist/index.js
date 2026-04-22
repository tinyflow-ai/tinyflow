import Md, { forwardRef as Ov, useRef as Xu, useImperativeHandle as Tv, useEffect as Nv } from "react";
var Ki = { exports: {} }, Fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uu;
function Av() {
  if (Uu) return Fo;
  Uu = 1;
  var t = Md, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, h = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: e, type: a, key: f, ref: v, props: h, _owner: o.current };
  }
  return Fo.Fragment = n, Fo.jsx = s, Fo.jsxs = s, Fo;
}
var Ko = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ju;
function Dv() {
  return Ju || (Ju = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Md, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function w(R) {
      if (R === null || typeof R != "object")
        return null;
      var fe = m && R[m] || R[y];
      return typeof fe == "function" ? fe : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(R) {
      {
        for (var fe = arguments.length, ke = new Array(fe > 1 ? fe - 1 : 0), Le = 1; Le < fe; Le++)
          ke[Le - 1] = arguments[Le];
        _("error", R, ke);
      }
    }
    function _(R, fe, ke) {
      {
        var Le = b.ReactDebugCurrentFrame, tt = Le.getStackAddendum();
        tt !== "" && (fe += "%s", ke = ke.concat([tt]));
        var ut = ke.map(function(Ue) {
          return String(Ue);
        });
        ut.unshift("Warning: " + fe), Function.prototype.apply.call(console[R], console, ut);
      }
    }
    var k = !1, C = !1, O = !1, z = !1, W = !1, B;
    B = Symbol.for("react.module.reference");
    function D(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === i || W || R === o || R === u || R === d || z || R === v || k || C || O || typeof R == "object" && R !== null && (R.$$typeof === f || R.$$typeof === h || R.$$typeof === s || R.$$typeof === a || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === B || R.getModuleId !== void 0));
    }
    function P(R, fe, ke) {
      var Le = R.displayName;
      if (Le)
        return Le;
      var tt = fe.displayName || fe.name || "";
      return tt !== "" ? ke + "(" + tt + ")" : ke;
    }
    function S(R) {
      return R.displayName || "Context";
    }
    function H(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
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
      if (typeof R == "object")
        switch (R.$$typeof) {
          case a:
            var fe = R;
            return S(fe) + ".Consumer";
          case s:
            var ke = R;
            return S(ke._context) + ".Provider";
          case l:
            return P(R, R.render, "ForwardRef");
          case h:
            var Le = R.displayName || null;
            return Le !== null ? Le : H(R.type) || "Memo";
          case f: {
            var tt = R, ut = tt._payload, Ue = tt._init;
            try {
              return H(Ue(ut));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, A = 0, N, I, U, G, L, X, Y;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function q() {
      {
        if (A === 0) {
          N = console.log, I = console.info, U = console.warn, G = console.error, L = console.group, X = console.groupCollapsed, Y = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        A++;
      }
    }
    function ee() {
      {
        if (A--, A === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, R, {
              value: N
            }),
            info: E({}, R, {
              value: I
            }),
            warn: E({}, R, {
              value: U
            }),
            error: E({}, R, {
              value: G
            }),
            group: E({}, R, {
              value: L
            }),
            groupCollapsed: E({}, R, {
              value: X
            }),
            groupEnd: E({}, R, {
              value: Y
            })
          });
        }
        A < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = b.ReactCurrentDispatcher, oe;
    function M(R, fe, ke) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (tt) {
            var Le = tt.stack.trim().match(/\n( *(at )?)/);
            oe = Le && Le[1] || "";
          }
        return `
` + oe + R;
      }
    }
    var re = !1, ge;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new pe();
    }
    function ie(R, fe) {
      if (!R || re)
        return "";
      {
        var ke = ge.get(R);
        if (ke !== void 0)
          return ke;
      }
      var Le;
      re = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ut;
      ut = te.current, te.current = null, q();
      try {
        if (fe) {
          var Ue = function() {
            throw Error();
          };
          if (Object.defineProperty(Ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ue, []);
            } catch (Gt) {
              Le = Gt;
            }
            Reflect.construct(R, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (Gt) {
              Le = Gt;
            }
            R.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gt) {
            Le = Gt;
          }
          R();
        }
      } catch (Gt) {
        if (Gt && Le && typeof Gt.stack == "string") {
          for (var Ze = Gt.stack.split(`
`), Wt = Le.stack.split(`
`), bt = Ze.length - 1, St = Wt.length - 1; bt >= 1 && St >= 0 && Ze[bt] !== Wt[St]; )
            St--;
          for (; bt >= 1 && St >= 0; bt--, St--)
            if (Ze[bt] !== Wt[St]) {
              if (bt !== 1 || St !== 1)
                do
                  if (bt--, St--, St < 0 || Ze[bt] !== Wt[St]) {
                    var pn = `
` + Ze[bt].replace(" at new ", " at ");
                    return R.displayName && pn.includes("<anonymous>") && (pn = pn.replace("<anonymous>", R.displayName)), typeof R == "function" && ge.set(R, pn), pn;
                  }
                while (bt >= 1 && St >= 0);
              break;
            }
        }
      } finally {
        re = !1, te.current = ut, ee(), Error.prepareStackTrace = tt;
      }
      var po = R ? R.displayName || R.name : "", Rr = po ? M(po) : "";
      return typeof R == "function" && ge.set(R, Rr), Rr;
    }
    function ce(R, fe, ke) {
      return ie(R, !1);
    }
    function me(R) {
      var fe = R.prototype;
      return !!(fe && fe.isReactComponent);
    }
    function be(R, fe, ke) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ie(R, me(R));
      if (typeof R == "string")
        return M(R);
      switch (R) {
        case u:
          return M("Suspense");
        case d:
          return M("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case l:
            return ce(R.render);
          case h:
            return be(R.type, fe, ke);
          case f: {
            var Le = R, tt = Le._payload, ut = Le._init;
            try {
              return be(ut(tt), fe, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, he = {}, Ce = b.ReactDebugCurrentFrame;
    function De(R) {
      if (R) {
        var fe = R._owner, ke = be(R.type, R._source, fe ? fe.type : null);
        Ce.setExtraStackFrame(ke);
      } else
        Ce.setExtraStackFrame(null);
    }
    function J(R, fe, ke, Le, tt) {
      {
        var ut = Function.call.bind(xe);
        for (var Ue in R)
          if (ut(R, Ue)) {
            var Ze = void 0;
            try {
              if (typeof R[Ue] != "function") {
                var Wt = Error((Le || "React class") + ": " + ke + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wt.name = "Invariant Violation", Wt;
              }
              Ze = R[Ue](fe, Ue, Le, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (bt) {
              Ze = bt;
            }
            Ze && !(Ze instanceof Error) && (De(tt), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", ke, Ue, typeof Ze), De(null)), Ze instanceof Error && !(Ze.message in he) && (he[Ze.message] = !0, De(tt), x("Failed %s type: %s", ke, Ze.message), De(null));
          }
      }
    }
    var Ie = Array.isArray;
    function Se(R) {
      return Ie(R);
    }
    function Me(R) {
      {
        var fe = typeof Symbol == "function" && Symbol.toStringTag, ke = fe && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ke;
      }
    }
    function Re(R) {
      try {
        return Ge(R), !1;
      } catch {
        return !0;
      }
    }
    function Ge(R) {
      return "" + R;
    }
    function st(R) {
      if (Re(R))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(R)), Ge(R);
    }
    var it = b.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ne;
    function at(R) {
      if (xe.call(R, "ref")) {
        var fe = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (fe && fe.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function We(R) {
      if (xe.call(R, "key")) {
        var fe = Object.getOwnPropertyDescriptor(R, "key").get;
        if (fe && fe.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function pt(R, fe) {
      typeof R.ref == "string" && it.current;
    }
    function Lt(R, fe) {
      {
        var ke = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", fe));
        };
        ke.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function lt(R, fe) {
      {
        var ke = function() {
          Ne || (Ne = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", fe));
        };
        ke.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var Nt = function(R, fe, ke, Le, tt, ut, Ue) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: R,
        key: fe,
        ref: ke,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: ut
      };
      return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function dt(R, fe, ke, Le, tt) {
      {
        var ut, Ue = {}, Ze = null, Wt = null;
        ke !== void 0 && (st(ke), Ze = "" + ke), We(fe) && (st(fe.key), Ze = "" + fe.key), at(fe) && (Wt = fe.ref, pt(fe, tt));
        for (ut in fe)
          xe.call(fe, ut) && !ct.hasOwnProperty(ut) && (Ue[ut] = fe[ut]);
        if (R && R.defaultProps) {
          var bt = R.defaultProps;
          for (ut in bt)
            Ue[ut] === void 0 && (Ue[ut] = bt[ut]);
        }
        if (Ze || Wt) {
          var St = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ze && Lt(Ue, St), Wt && lt(Ue, St);
        }
        return Nt(R, Ze, Wt, tt, Le, it.current, Ue);
      }
    }
    var ht = b.ReactCurrentOwner, mt = b.ReactDebugCurrentFrame;
    function Ft(R) {
      if (R) {
        var fe = R._owner, ke = be(R.type, R._source, fe ? fe.type : null);
        mt.setExtraStackFrame(ke);
      } else
        mt.setExtraStackFrame(null);
    }
    var er;
    er = !1;
    function Kt(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function ho() {
      {
        if (ht.current) {
          var R = H(ht.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function jo(R) {
      return "";
    }
    var fo = {};
    function yt(R) {
      {
        var fe = ho();
        if (!fe) {
          var ke = typeof R == "string" ? R : R.displayName || R.name;
          ke && (fe = `

Check the top-level render call using <` + ke + ">.");
        }
        return fe;
      }
    }
    function Jt(R, fe) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ke = yt(fe);
        if (fo[ke])
          return;
        fo[ke] = !0;
        var Le = "";
        R && R._owner && R._owner !== ht.current && (Le = " It was passed a child from " + H(R._owner.type) + "."), Ft(R), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, Le), Ft(null);
      }
    }
    function Zu(R, fe) {
      {
        if (typeof R != "object")
          return;
        if (Se(R))
          for (var ke = 0; ke < R.length; ke++) {
            var Le = R[ke];
            Kt(Le) && Jt(Le, fe);
          }
        else if (Kt(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var tt = w(R);
          if (typeof tt == "function" && tt !== R.entries)
            for (var ut = tt.call(R), Ue; !(Ue = ut.next()).done; )
              Kt(Ue.value) && Jt(Ue.value, fe);
        }
      }
    }
    function xv(R) {
      {
        var fe = R.type;
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
          var Le = H(fe);
          J(ke, R.props, "prop", Le, R);
        } else if (fe.PropTypes !== void 0 && !er) {
          er = !0;
          var tt = H(fe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof fe.getDefaultProps == "function" && !fe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cv(R) {
      {
        for (var fe = Object.keys(R.props), ke = 0; ke < fe.length; ke++) {
          var Le = fe[ke];
          if (Le !== "children" && Le !== "key") {
            Ft(R), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), Ft(null);
            break;
          }
        }
        R.ref !== null && (Ft(R), x("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var qu = {};
    function Yu(R, fe, ke, Le, tt, ut) {
      {
        var Ue = D(R);
        if (!Ue) {
          var Ze = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wt = jo();
          Wt ? Ze += Wt : Ze += ho();
          var bt;
          R === null ? bt = "null" : Se(R) ? bt = "array" : R !== void 0 && R.$$typeof === e ? (bt = "<" + (H(R.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : bt = typeof R, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", bt, Ze);
        }
        var St = dt(R, fe, ke, tt, ut);
        if (St == null)
          return St;
        if (Ue) {
          var pn = fe.children;
          if (pn !== void 0)
            if (Le)
              if (Se(pn)) {
                for (var po = 0; po < pn.length; po++)
                  Zu(pn[po], R);
                Object.freeze && Object.freeze(pn);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zu(pn, R);
        }
        if (xe.call(fe, "key")) {
          var Rr = H(R), Gt = Object.keys(fe).filter(function(Pv) {
            return Pv !== "key";
          }), ka = Gt.length > 0 ? "{key: someKey, " + Gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qu[Rr + ka]) {
            var Ev = Gt.length > 0 ? "{" + Gt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ka, Rr, Ev, Rr), qu[Rr + ka] = !0;
          }
        }
        return R === r ? Cv(St) : xv(St), St;
      }
    }
    function kv(R, fe, ke) {
      return Yu(R, fe, ke, !0);
    }
    function $v(R, fe, ke) {
      return Yu(R, fe, ke, !1);
    }
    var Sv = $v, _v = kv;
    Ko.Fragment = r, Ko.jsx = Sv, Ko.jsxs = _v;
  }()), Ko;
}
var Gu;
function Mv() {
  return Gu || (Gu = 1, process.env.NODE_ENV === "production" ? Ki.exports = Av() : Ki.exports = Dv()), Ki.exports;
}
var Lv = Mv();
const Hv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Hv);
const Ld = 1, Hd = 2, zd = 4, zv = 8, Vv = 16, Iv = 1, Rv = 2, Vd = 4, Bv = 8, jv = 16, Id = 1, Fv = 2, Rd = "[", Js = "[!", Ll = "]", Ur = {}, Ht = Symbol(), Kv = "http://www.w3.org/1999/xhtml", Wv = "http://www.w3.org/2000/svg", Bd = "@attach", Zv = !1;
var Gs = Array.isArray, qv = Array.prototype.indexOf, Hl = Array.from, vs = Object.keys, ms = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, jd = Object.getOwnPropertyDescriptors, Fd = Object.prototype, Yv = Array.prototype, Qs = Object.getPrototypeOf, Qu = Object.isExtensible;
function Wo(t) {
  return typeof t == "function";
}
const Fe = () => {
};
function Xv(t) {
  return t();
}
function Ka(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Kd() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Zt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function Lo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const zt = 2, zl = 4, ea = 8, Wd = 1 << 24, yr = 16, wr = 32, Lr = 64, ta = 128, On = 512, Bt = 1024, on = 2048, br = 4096, cn = 8192, ur = 16384, na = 32768, fr = 65536, ec = 1 << 17, Vl = 1 << 18, oo = 1 << 19, Zd = 1 << 20, si = 32768, Wa = 1 << 21, Il = 1 << 22, Er = 1 << 23, Kn = Symbol("$state"), Rl = Symbol("legacy props"), Uv = Symbol(""), yo = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Jv = 1, ra = 3, xr = 8;
function Bl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Gv() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Qv(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function e1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function t1(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function n1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function r1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function o1(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function i1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function s1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function a1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function l1() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ki(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function u1() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function c1() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let _e = !1;
function Yt(t) {
  _e = t;
}
let ze;
function wt(t) {
  if (t === null)
    throw ki(), Ur;
  return ze = t;
}
function Tn() {
  return wt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ hn(ze)
  );
}
function K(t) {
  if (_e) {
    if (/* @__PURE__ */ hn(ze) !== null)
      throw ki(), Ur;
    ze = t;
  }
}
function Ee(t = 1) {
  if (_e) {
    for (var e = t, n = ze; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n);
    ze = n;
  }
}
function ys(t = !0) {
  for (var e = 0, n = ze; ; ) {
    if (n.nodeType === xr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ll) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Rd || r === Js) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n)
    );
    t && n.remove(), n = o;
  }
}
function qd(t) {
  if (!t || t.nodeType !== xr)
    throw ki(), Ur;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Yd(t) {
  return t === this.v;
}
function Xd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ud(t) {
  return !Xd(t, this.v);
}
let Ho = !1, d1 = !1;
function h1() {
  Ho = !0;
}
const f1 = [];
function jl(t, e = !1, n = !1) {
  return rs(t, /* @__PURE__ */ new Map(), "", f1, null, n);
}
function rs(t, e, n, r, o = null, i = !1) {
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
    if (Gs(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = rs(u, e, n, r, null, i));
      }
      return a;
    }
    if (Qs(t) === Fd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = rs(
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
      return rs(
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
let gt = null;
function $o(t) {
  gt = t;
}
function wn(t) {
  return (
    /** @type {T} */
    oa().get(t)
  );
}
function Jr(t, e) {
  return oa().set(t, e), e;
}
function p1(t) {
  return oa().has(t);
}
function g1() {
  return oa();
}
function le(t, e = !1, n) {
  gt = {
    p: gt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Ho && !e ? { s: null, u: null, $: [] } : null
  };
}
function ue(t) {
  var e = (
    /** @type {ComponentContext} */
    gt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      gh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, gt = e.p, t ?? /** @type {T} */
  {};
}
function zo() {
  return !Ho || gt !== null && gt.l === null;
}
function oa(t) {
  return gt === null && Bl(), gt.c ??= new Map(v1(gt) || void 0);
}
function v1(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Fr = [];
function Jd() {
  var t = Fr;
  Fr = [], Ka(t);
}
function Hr(t) {
  if (Fr.length === 0 && !ni) {
    var e = Fr;
    queueMicrotask(() => {
      e === Fr && Jd();
    });
  }
  Fr.push(t);
}
function m1() {
  for (; Fr.length > 0; )
    Jd();
}
function Gd(t) {
  var e = qe;
  if (e === null)
    return Qe.f |= Er, t;
  if ((e.f & na) === 0) {
    if ((e.f & ta) === 0)
      throw t;
    e.b.error(t);
  } else
    So(t, e);
}
function So(t, e) {
  for (; e !== null; ) {
    if ((e.f & ta) !== 0)
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
const Wi = /* @__PURE__ */ new Set();
let ot = null, os = null, mn = null, vn = [], ia = null, Za = !1, ni = !1;
class _n {
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
    vn = [], os = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (os = this, ot = null, tc(n.render_effects), tc(n.effects), os = null, this.#o?.resolve()), mn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Bt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (wr | Lr)) !== 0, s = i && (o & Bt) !== 0, a = s || (o & cn) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ta) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Bt : (o & zl) !== 0 ? n.effects.push(r) : Si(r) && ((r.f & yr) !== 0 && n.block_effects.push(r), ui(r));
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
      ((n.f & on) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), jt(n, Bt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & zt) === 0 || (n.f & si) === 0 || (n.f ^= si, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & Er) === 0 && (this.current.set(e, e.v), mn?.set(e, e.v));
  }
  activate() {
    ot = this, this.apply();
  }
  deactivate() {
    ot === this && (ot = null, mn = null);
  }
  flush() {
    if (this.activate(), vn.length > 0) {
      if (Qd(), ot !== null && ot !== this)
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
    if (Wi.size > 1) {
      this.previous.clear();
      var e = mn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Wi) {
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
          var o = vn;
          vn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            eh(d, a, l, u);
          if (vn.length > 0) {
            ot = i, i.apply();
            for (const d of vn)
              i.#s(d, r);
            i.deactivate();
          }
          vn = o;
        }
      }
      ot = null, mn = e;
    }
    this.committed = !0, Wi.delete(this);
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
      jt(e, on), Gr(e);
    for (const e of this.#a)
      jt(e, br), Gr(e);
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
    return (this.#o ??= Kd()).promise;
  }
  static ensure() {
    if (ot === null) {
      const e = ot = new _n();
      Wi.add(ot), ni || _n.enqueue(() => {
        ot === e && e.flush();
      });
    }
    return ot;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Hr(e);
  }
  apply() {
  }
}
function p(t) {
  var e = ni;
  ni = !0;
  try {
    for (var n; ; ) {
      if (m1(), vn.length === 0 && (ot?.flush(), vn.length === 0))
        return ia = null, /** @type {T} */
        n;
      Qd();
    }
  } finally {
    ni = e;
  }
}
function Qd() {
  var t = Or;
  Za = !0;
  try {
    var e = 0;
    for (bs(!0); vn.length > 0; ) {
      var n = _n.ensure();
      if (e++ > 1e3) {
        var r, o;
        y1();
      }
      n.process(vn), Pr.clear();
    }
  } finally {
    Za = !1, bs(t), ia = null;
  }
}
function y1() {
  try {
    n1();
  } catch (t) {
    So(t, ia);
  }
}
let nr = null;
function tc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (ur | cn)) === 0 && Si(r) && (nr = /* @__PURE__ */ new Set(), ui(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? bh(r) : r.fn = null), nr?.size > 0)) {
        Pr.clear();
        for (const o of nr) {
          if ((o.f & (ur | cn)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            nr.has(s) && (nr.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (ur | cn)) === 0 && ui(l);
          }
        }
        nr.clear();
      }
    }
    nr = null;
  }
}
function eh(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & zt) !== 0 ? eh(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (Il | yr)) !== 0 && (i & on) === 0 && th(o, e, r) && (jt(o, on), Gr(
        /** @type {Effect} */
        o
      ));
    }
}
function th(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & zt) !== 0 && th(
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
function Gr(t) {
  for (var e = ia = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Za && e === qe && (n & yr) !== 0 && (n & Vl) === 0)
      return;
    if ((n & (Lr | wr)) !== 0) {
      if ((n & Bt) === 0) return;
      e.f ^= Bt;
    }
  }
  vn.push(e);
}
function io(t) {
  let e = 0, n = pr(0), r;
  return () => {
    ai() && (c(n), ao(() => (e === 0 && (r = vt(() => t(() => In(n)))), e += 1, () => {
      Hr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, In(n));
      });
    })));
  };
}
var w1 = fr | oo | ta;
function b1(t, e, n) {
  new x1(t, e, n);
}
class x1 {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = _e ? ze : null;
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
  #y = io(() => (this.#f = pr(this.#d), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    qe.b, this.#e = !!this.#r.pending, this.#i = zr(() => {
      if (qe.b = this, _e) {
        const i = this.#n;
        Tn(), /** @type {Comment} */
        i.nodeType === xr && /** @type {Comment} */
        i.data === Js ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = ln(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, w1), _e && (this.#t = ze);
  }
  #v() {
    try {
      this.#a = ln(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = ln(() => e(this.#t)), _n.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (_n.ensure(), ln(() => this.#o(n)))), this.#h > 0 ? this.#b() : (bo(
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
    return this.#e && (this.#c = Ut(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = qe, r = Qe, o = gt;
    bn(this.#i), tn(this.#i), $o(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Gd(i), null;
    } finally {
      bn(n), tn(r), $o(o);
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
    ), kh(this.#a, this.#u)), this.#s === null && (this.#s = ln(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && bo(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#f && _o(this.#f, this.#d);
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
    this.#a && (Mt(this.#a), this.#a = null), this.#s && (Mt(this.#s), this.#s = null), this.#l && (Mt(this.#l), this.#l = null), _e && (wt(
      /** @type {TemplateNode} */
      this.#n
    ), Ee(), wt(ys()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        c1();
        return;
      }
      o = !0, i && l1(), _n.ensure(), this.#d = 0, this.#l !== null && bo(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#p = !1, ln(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = Qe;
    try {
      tn(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      So(l, this.#i && this.#i.parent);
    } finally {
      tn(a);
    }
    r && Hr(() => {
      this.#l = this.#g(() => {
        _n.ensure(), this.#p = !0;
        try {
          return ln(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return So(
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
function Qr(t, e) {
  return e;
}
function C1(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    Zl(e[i].e, r, !0);
  xh(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Wl(l), l.append(a), t.items.clear(), kn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), kn(t, d.prev, d.next)), Mt(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function Ot(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & zd) !== 0, d = (e & Ld) !== 0, h = (e & Hd) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      t
    );
    s = _e ? wt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ _t(f)
    ) : f.appendChild(Ut());
  }
  _e && Tn();
  var v = null, m = /* @__PURE__ */ Fl(() => {
    var k = n();
    return Gs(k) ? k : k == null ? [] : Hl(k);
  }), y, w = !0;
  function b() {
    k1(_, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : ql(v.effect), x.first = v.effect) : bo(v.effect, () => {
      v = null;
    }));
  }
  var x = zr(() => {
    y = /** @type {V[]} */
    c(m);
    var k = y.length;
    let C = !1;
    if (_e) {
      var O = qd(s) === Js;
      O !== (k === 0) && (s = ys(), wt(s), Yt(!1), C = !0);
    }
    for (var z = /* @__PURE__ */ new Set(), W = (
      /** @type {Batch} */
      ot
    ), B = null, D = dh(), P = 0; P < k; P += 1) {
      _e && ze.nodeType === xr && /** @type {Comment} */
      ze.data === Ll && (s = /** @type {Comment} */
      ze, C = !0, Yt(!1));
      var S = y[P], H = r(S, P), E = w ? null : a.get(H);
      E ? (d && _o(E.v, S), h ? _o(
        /** @type {Value<number>} */
        E.i,
        P
      ) : E.i = P, D && W.skipped_effects.delete(E.e)) : (E = $1(
        w ? s : null,
        B,
        S,
        H,
        P,
        o,
        e,
        n
      ), w && (E.o = !0, B === null ? l = E : B.next = E, B = E), a.set(H, E)), z.add(H);
    }
    if (k === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: ln(() => i(s))
        };
      else {
        var A = document.createDocumentFragment(), N = Ut();
        A.append(N), v = {
          fragment: A,
          effect: ln(() => i(N))
        };
      }
    if (_e && k > 0 && wt(ys()), !w)
      if (D) {
        for (const [I, U] of a)
          z.has(I) || W.skipped_effects.add(U.e);
        W.oncommit(b), W.ondiscard(() => {
        });
      } else
        b();
    C && Yt(!0), c(m);
  }), _ = { effect: x, items: a, first: l };
  w = !1, _e && (s = ze);
}
function k1(t, e, n, r, o) {
  var i = (r & zv) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, f = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var x = d ? d.next : l;
      kn(t, d, w), kn(t, w, x), $a(w, x, n), d = w, f = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & cn) !== 0 && (ql(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (f.length < v.length) {
          var _ = v[0], k;
          d = _.prev;
          var C = f[0], O = f[f.length - 1];
          for (k = 0; k < f.length; k += 1)
            $a(f[k], _, n);
          for (k = 0; k < v.length; k += 1)
            u.delete(v[k]);
          kn(t, C.prev, O.next), kn(t, d, C), kn(t, O, _), l = _, d = O, b -= 1, f = [], v = [];
        } else
          u.delete(w), $a(w, l, n), kn(t, w.prev, w.next), kn(t, w, d === null ? t.first : d.next), kn(t, d, w), d = w;
        continue;
      }
      for (f = [], v = []; l !== null && l.k !== y; )
        (l.e.f & cn) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let z = a.size > s;
  if (l !== null || u !== void 0) {
    for (var W = u === void 0 ? [] : Hl(u); l !== null; )
      (l.e.f & cn) === 0 && W.push(l), l = l.next;
    var B = W.length;
    if (z = a.size - B > s, B > 0) {
      var D = (r & zd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < B; b += 1)
          W[b].a?.measure();
        for (b = 0; b < B; b += 1)
          W[b].a?.fix();
      }
      C1(t, W, D);
    }
  }
  if (z)
    for (const P of a.values())
      P.o || (kn(t, d, P), d = P);
  t.effect.last = d && d.e, i && Hr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function $1(t, e, n, r, o, i, s, a) {
  var l = (s & Ld) !== 0, u = (s & Vv) === 0, d = l ? u ? /* @__PURE__ */ sh(n, !1, !1) : pr(n) : n, h = (s & Hd) === 0 ? o : pr(o), f = {
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
      v.append(t = Ut());
    }
    return f.e = ln(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = f), f;
  } finally {
  }
}
function $a(t, e, n) {
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
      /* @__PURE__ */ hn(i)
    );
    o.before(i), i = s;
  }
}
function kn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function nh(t, e, n, r) {
  const o = zo() ? $i : Fl;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = ot, s = (
    /** @type {Effect} */
    qe
  ), a = S1();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ _1(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & ur) === 0 && So(d, s);
      }
      i?.deactivate(), ws();
    }).catch((u) => {
      So(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ws();
    }
  }) : l();
}
function S1() {
  var t = qe, e = Qe, n = gt, r = ot;
  return function(o = !0) {
    bn(t), tn(e), $o(n), o && r?.activate();
  };
}
function ws() {
  bn(null), tn(null), $o(null);
}
// @__NO_SIDE_EFFECTS__
function $i(t) {
  var e = zt | on, n = Qe !== null && (Qe.f & zt) !== 0 ? (
    /** @type {Derived} */
    Qe
  ) : null;
  return qe !== null && (qe.f |= oo), {
    ctx: gt,
    deps: null,
    effects: null,
    equals: Yd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? qe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _1(t, e) {
  let n = (
    /** @type {Effect | null} */
    qe
  );
  n === null && Gv();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = pr(
    /** @type {V} */
    Ht
  ), s = !Qe, a = /* @__PURE__ */ new Map();
  return M1(() => {
    var l = Kd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === ot && u.committed && u.deactivate(), ws();
      });
    } catch (f) {
      l.reject(f), ws();
    }
    var u = (
      /** @type {Batch} */
      ot
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(yo), a.delete(u), a.set(u, l);
    }
    const h = (f, v = void 0) => {
      if (u.activate(), v)
        v !== yo && (i.f |= Er, _o(i, v));
      else {
        (i.f & Er) !== 0 && (i.f ^= Er), _o(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(yo);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), aa(() => {
    for (const l of a.values())
      l.reject(yo);
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
function $(t) {
  const e = /* @__PURE__ */ $i(t);
  return $h(e), e;
}
// @__NO_SIDE_EFFECTS__
function Fl(t) {
  const e = /* @__PURE__ */ $i(t);
  return e.equals = Ud, e;
}
function rh(t) {
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
function E1(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & zt) === 0)
      return (e.f & ur) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Kl(t) {
  var e, n = qe;
  bn(E1(t));
  try {
    t.f &= ~si, rh(t), e = Ph(t);
  } finally {
    bn(n);
  }
  return e;
}
function oh(t) {
  var e = Kl(t);
  if (t.equals(e) || (ot?.is_fork || (t.v = e), t.wv = _h()), !lo)
    if (mn !== null)
      (ai() || ot?.is_fork) && mn.set(t, e);
    else {
      var n = (t.f & On) === 0 ? br : Bt;
      jt(t, n);
    }
}
let qa = /* @__PURE__ */ new Set();
const Pr = /* @__PURE__ */ new Map();
let ih = !1;
function pr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Yd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(t, e) {
  const n = pr(t);
  return $h(n), n;
}
// @__NO_SIDE_EFFECTS__
function sh(t, e = !1, n = !0) {
  const r = pr(t);
  return e || (r.equals = Ud), Ho && n && gt !== null && gt.l !== null && (gt.l.s ??= []).push(r), r;
}
function F(t, e, n = !1) {
  Qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Bn || (Qe.f & ec) !== 0) && zo() && (Qe.f & (zt | yr | Il | ec)) !== 0 && !cr?.includes(t) && a1();
  let r = n ? Ct(e) : e;
  return _o(t, r);
}
function _o(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    lo ? Pr.set(t, e) : Pr.set(t, n), t.v = e;
    var r = _n.ensure();
    r.capture(t, n), (t.f & zt) !== 0 && ((t.f & on) !== 0 && Kl(
      /** @type {Derived} */
      t
    ), jt(t, (t.f & On) !== 0 ? Bt : br)), t.wv = _h(), ah(t, on), zo() && qe !== null && (qe.f & Bt) !== 0 && (qe.f & (wr | Lr)) === 0 && (gn === null ? H1([t]) : gn.push(t)), !r.is_fork && qa.size > 0 && !ih && P1();
  }
  return e;
}
function P1() {
  ih = !1;
  var t = Or;
  bs(!0);
  const e = Array.from(qa);
  try {
    for (const n of e)
      (n.f & Bt) !== 0 && jt(n, br), Si(n) && ui(n);
  } finally {
    bs(t);
  }
  qa.clear();
}
function nc(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return F(t, n), r;
}
function In(t) {
  F(t, t.v + 1);
}
function ah(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = zo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === qe)) {
        var l = (a & on) === 0;
        if (l && jt(s, e), (a & zt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          mn?.delete(u), (a & si) === 0 && (a & On && (s.f |= si), ah(u, br));
        } else l && ((a & yr) !== 0 && nr !== null && nr.add(
          /** @type {Effect} */
          s
        ), Gr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ct(t) {
  if (typeof t != "object" || t === null || Kn in t)
    return t;
  const e = Qs(t);
  if (e !== Fd && e !== Yv)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Gs(t), o = /* @__PURE__ */ we(0), i = dr, s = (a) => {
    if (dr === i)
      return a();
    var l = Qe, u = dr;
    tn(null), sc(i);
    var d = a();
    return tn(l), sc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && i1();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ we(u.value);
          return n.set(l, h), h;
        }) : F(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ we(Ht));
            n.set(l, d), In(o);
          }
        } else
          F(u, Ht), In(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Kn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || lr(a, l)?.writable) && (d = s(() => {
          var v = Ct(h ? a[l] : Ht), m = /* @__PURE__ */ we(v);
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
        if (l === Kn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ht || Reflect.has(a, l);
        if (u !== void 0 || qe !== null && (!d || lr(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Ct(a[l]) : Ht, v = /* @__PURE__ */ we(f);
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
            m !== void 0 ? F(m, Ht) : v in a && (m = s(() => /* @__PURE__ */ we(Ht)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || lr(a, l)?.writable) && (h = s(() => /* @__PURE__ */ we(void 0)), F(h, Ct(u)), n.set(l, h));
        else {
          f = h.v !== Ht;
          var y = s(() => Ct(u));
          F(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && F(b, x + 1);
          }
          In(o);
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
        s1();
      }
    }
  );
}
function rc(t) {
  try {
    if (t !== null && typeof t == "object" && Kn in t)
      return t[Kn];
  } catch {
  }
  return t;
}
function O1(t, e) {
  return Object.is(rc(t), rc(e));
}
var Qt, lh, uh, ch;
function Ya() {
  if (Qt === void 0) {
    Qt = window, lh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    uh = lr(e, "firstChild").get, ch = lr(e, "nextSibling").get, Qu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Qu(n) && (n.__t = void 0);
  }
}
function Ut(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function _t(t) {
  return uh.call(t);
}
// @__NO_SIDE_EFFECTS__
function hn(t) {
  return ch.call(t);
}
function Z(t, e) {
  if (!_e)
    return /* @__PURE__ */ _t(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ _t(ze)
  );
  if (n === null)
    n = ze.appendChild(Ut());
  else if (e && n.nodeType !== ra) {
    var r = Ut();
    return n?.before(r), wt(r), r;
  }
  return wt(n), n;
}
function Q(t, e = !1) {
  if (!_e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _t(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ hn(n) : n;
  }
  if (e && ze?.nodeType !== ra) {
    var r = Ut();
    return ze?.before(r), wt(r), r;
  }
  return ze;
}
function V(t, e = 1, n = !1) {
  let r = _e ? ze : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ hn(r);
  if (!_e)
    return r;
  if (n && r?.nodeType !== ra) {
    var i = Ut();
    return r === null ? o?.after(i) : r.before(i), wt(i), i;
  }
  return wt(r), /** @type {TemplateNode} */
  r;
}
function Wl(t) {
  t.textContent = "";
}
function dh() {
  return !1;
}
function T1(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Hr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function N1(t) {
  _e && /* @__PURE__ */ _t(t) !== null && Wl(t);
}
let oc = !1;
function hh() {
  oc || (oc = !0, document.addEventListener(
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
function sa(t) {
  var e = Qe, n = qe;
  tn(null), bn(null);
  try {
    return t();
  } finally {
    tn(e), bn(n);
  }
}
function fh(t, e, n, r = n) {
  t.addEventListener(e, () => sa(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), hh();
}
function ph(t) {
  qe === null && (Qe === null && t1(), e1()), lo && Qv();
}
function A1(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function xn(t, e, n) {
  var r = qe;
  r !== null && (r.f & cn) !== 0 && (t |= cn);
  var o = {
    ctx: gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | on | On,
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
      ui(o), o.f |= na;
    } catch (a) {
      throw Mt(o), a;
    }
  else e !== null && Gr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & oo) === 0 && (i = i.first, (t & yr) !== 0 && (t & fr) !== 0 && i !== null && (i.f |= fr)), i !== null && (i.parent = r, r !== null && A1(i, r), Qe !== null && (Qe.f & zt) !== 0 && (t & Lr) === 0)) {
    var s = (
      /** @type {Derived} */
      Qe
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function ai() {
  return Qe !== null && !Bn;
}
function aa(t) {
  const e = xn(ea, null, !1);
  return jt(e, Bt), e.teardown = t, e;
}
function Be(t) {
  ph();
  var e = (
    /** @type {Effect} */
    qe.f
  ), n = !Qe && (e & wr) !== 0 && (e & na) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      gt
    );
    (r.e ??= []).push(t);
  } else
    return gh(t);
}
function gh(t) {
  return xn(zl | Zd, t, !1);
}
function en(t) {
  return ph(), xn(ea | Zd, t, !0);
}
function so(t) {
  _n.ensure();
  const e = xn(Lr | oo, t, !0);
  return () => {
    Mt(e);
  };
}
function D1(t) {
  _n.ensure();
  const e = xn(Lr | oo, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? bo(e, () => {
      Mt(e), r(void 0);
    }) : (Mt(e), r(void 0));
  });
}
function Vo(t) {
  return xn(zl, t, !1);
}
function M1(t) {
  return xn(Il | oo, t, !0);
}
function ao(t, e = 0) {
  return xn(ea | e, t, !0);
}
function Ae(t, e = [], n = [], r = []) {
  nh(r, e, n, (o) => {
    xn(ea, () => t(...o.map(c)), !0);
  });
}
function zr(t, e = 0) {
  var n = xn(yr | e, t, !0);
  return n;
}
function vh(t, e = 0) {
  var n = xn(Wd | e, t, !0);
  return n;
}
function ln(t) {
  return xn(wr | oo, t, !0);
}
function mh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = lo, r = Qe;
    ic(!0), tn(null);
    try {
      e.call(null);
    } finally {
      ic(n), tn(r);
    }
  }
}
function yh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && sa(() => {
      o.abort(yo);
    });
    var r = n.next;
    (n.f & Lr) !== 0 ? n.parent = null : Mt(n, e), n = r;
  }
}
function L1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & wr) === 0 && Mt(e), e = n;
  }
}
function Mt(t, e = !0) {
  var n = !1;
  (e || (t.f & Vl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (wh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), yh(t, e && !n), xs(t, 0), jt(t, ur);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  mh(t);
  var o = t.parent;
  o !== null && o.first !== null && bh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function wh(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(t)
    );
    t.remove(), t = n;
  }
}
function bh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function bo(t, e, n = !0) {
  var r = [];
  Zl(t, r, !0), xh(r, () => {
    n && Mt(t), e && e();
  });
}
function xh(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function Zl(t, e, n) {
  if ((t.f & cn) === 0) {
    if (t.f ^= cn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & fr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & wr) !== 0 && (t.f & yr) !== 0;
      Zl(r, e, i ? n : !1), r = o;
    }
  }
}
function ql(t) {
  Ch(t, !0);
}
function Ch(t, e) {
  if ((t.f & cn) !== 0) {
    t.f ^= cn, (t.f & Bt) === 0 && (jt(t, on), Gr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & fr) !== 0 || (n.f & wr) !== 0;
      Ch(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function kh(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n)
    );
    e.append(n), n = o;
  }
}
let Or = !1;
function bs(t) {
  Or = t;
}
let lo = !1;
function ic(t) {
  lo = t;
}
let Qe = null, Bn = !1;
function tn(t) {
  Qe = t;
}
let qe = null;
function bn(t) {
  qe = t;
}
let cr = null;
function $h(t) {
  Qe !== null && (cr === null ? cr = [t] : cr.push(t));
}
let qt = null, an = 0, gn = null;
function H1(t) {
  gn = t;
}
let Sh = 1, li = 0, dr = li;
function sc(t) {
  dr = t;
}
function _h() {
  return ++Sh;
}
function Si(t) {
  var e = t.f;
  if ((e & on) !== 0)
    return !0;
  if (e & zt && (t.f &= -32769), (e & br) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Si(
          /** @type {Derived} */
          i
        ) && oh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & On) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    mn === null && jt(t, Bt);
  }
  return !1;
}
function Eh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !cr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & zt) !== 0 ? Eh(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? jt(i, on) : (i.f & Bt) !== 0 && jt(i, br), Gr(
        /** @type {Effect} */
        i
      ));
    }
}
function Ph(t) {
  var e = qt, n = an, r = gn, o = Qe, i = cr, s = gt, a = Bn, l = dr, u = t.f;
  qt = /** @type {null | Value[]} */
  null, an = 0, gn = null, Qe = (u & (wr | Lr)) === 0 ? t : null, cr = null, $o(t.ctx), Bn = !1, dr = ++li, t.ac !== null && (sa(() => {
    t.ac.abort(yo);
  }), t.ac = null);
  try {
    t.f |= Wa;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), f = t.deps;
    if (qt !== null) {
      var v;
      if (xs(t, an), f !== null && an > 0)
        for (f.length = an + qt.length, v = 0; v < qt.length; v++)
          f[an + v] = qt[v];
      else
        t.deps = f = qt;
      if (Or && ai() && (t.f & On) !== 0)
        for (v = an; v < f.length; v++)
          (f[v].reactions ??= []).push(t);
    } else f !== null && an < f.length && (xs(t, an), f.length = an);
    if (zo() && gn !== null && !Bn && f !== null && (t.f & (zt | br | on)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      gn.length; v++)
        Eh(
          gn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (li++, gn !== null && (r === null ? r = gn : r.push(.../** @type {Source[]} */
    gn))), (t.f & Er) !== 0 && (t.f ^= Er), h;
  } catch (m) {
    return Gd(m);
  } finally {
    t.f ^= Wa, qt = e, an = n, gn = r, Qe = o, cr = i, $o(s), Bn = a, dr = l;
  }
}
function z1(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = qv.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & zt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qt === null || !qt.includes(e)) && (jt(e, br), (e.f & On) !== 0 && (e.f ^= On, e.f &= -32769), rh(
    /** @type {Derived} **/
    e
  ), xs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function xs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      z1(t, n[r]);
}
function ui(t) {
  var e = t.f;
  if ((e & ur) === 0) {
    jt(t, Bt);
    var n = qe, r = Or;
    qe = t, Or = !0;
    try {
      (e & (yr | Wd)) !== 0 ? L1(t) : yh(t), mh(t);
      var o = Ph(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Sh;
      var i;
      Zv && d1 && (t.f & on) !== 0 && t.deps;
    } finally {
      Or = r, qe = n;
    }
  }
}
async function Oh() {
  await Promise.resolve(), p();
}
function c(t) {
  var e = t.f, n = (e & zt) !== 0;
  if (Qe !== null && !Bn) {
    var r = qe !== null && (qe.f & ur) !== 0;
    if (!r && !cr?.includes(t)) {
      var o = Qe.deps;
      if ((Qe.f & Wa) !== 0)
        t.rv < li && (t.rv = li, qt === null && o !== null && o[an] === t ? an++ : qt === null ? qt = [t] : qt.includes(t) || qt.push(t));
      else {
        (Qe.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [Qe] : i.includes(Qe) || i.push(Qe);
      }
    }
  }
  if (lo) {
    if (Pr.has(t))
      return Pr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Bt) === 0 && s.reactions !== null || Nh(s)) && (a = Kl(s)), Pr.set(s, a), a;
    }
  } else n && (!mn?.has(t) || ot?.is_fork && !ai()) && (s = /** @type {Derived} */
  t, Si(s) && oh(s), Or && ai() && (s.f & On) === 0 && Th(s));
  if (mn?.has(t))
    return mn.get(t);
  if ((t.f & Er) !== 0)
    throw t.v;
  return t.v;
}
function Th(t) {
  if (t.deps !== null) {
    t.f ^= On;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & zt) !== 0 && (e.f & On) === 0 && Th(
        /** @type {Derived} */
        e
      );
  }
}
function Nh(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Pr.has(e) || (e.f & zt) !== 0 && Nh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function vt(t) {
  var e = Bn;
  try {
    return Bn = !0, t();
  } finally {
    Bn = e;
  }
}
const V1 = -7169;
function jt(t, e) {
  t.f = t.f & V1 | e;
}
function I1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Yl(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Kn in t)
      Xa(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Kn in n && Xa(n);
      }
  }
}
function Xa(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Xa(t[r], e);
      } catch {
      }
    const n = Qs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = jd(n);
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
const Ah = /* @__PURE__ */ new Set(), Ua = /* @__PURE__ */ new Set();
function Xl(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || Uo.call(e, i), !i.cancelBubble)
      return sa(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Hr(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function kt(t, e, n, r = {}) {
  var o = Xl(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function Cs(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Xl(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && aa(() => {
    e.removeEventListener(t, s, i);
  });
}
function uo(t) {
  for (var e = 0; e < t.length; e++)
    Ah.add(t[e]);
  for (var n of Ua)
    n(t);
}
let ac = null;
function Uo(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  ac = t;
  var s = 0, a = ac === t && t.__root;
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
    ms(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Qe, h = qe;
    tn(null), bn(null);
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
      t.__root = e, delete t.currentTarget, tn(d), bn(h);
    }
  }
}
function Ul(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function rn(t, e) {
  var n = (
    /** @type {Effect} */
    qe
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & Id) !== 0, r = (e & Fv) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (_e)
      return rn(ze, null), ze;
    o === void 0 && (o = Ul(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ _t(o)));
    var s = (
      /** @type {TemplateNode} */
      r || lh ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      rn(a, l);
    } else
      rn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function R1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & Id) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (_e)
      return rn(ze, null), ze;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ul(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ _t(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ _t(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ _t(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ _t(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      rn(d, h);
    } else
      rn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(t, e) {
  return /* @__PURE__ */ R1(t, e, "svg");
}
function He(t = "") {
  if (!_e) {
    var e = Ut(t + "");
    return rn(e, e), e;
  }
  var n = ze;
  return n.nodeType !== ra && (n.before(n = Ut()), wt(n)), rn(n, n), n;
}
function de() {
  if (_e)
    return rn(ze, null), ze;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ut();
  return t.append(e, n), rn(e, n), t;
}
function T(t, e) {
  if (_e) {
    var n = (
      /** @type {Effect} */
      qe
    );
    ((n.f & na) === 0 || n.nodes_end === null) && (n.nodes_end = ze), Tn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function _i() {
  if (_e && ze && ze.nodeType === xr && ze.textContent?.startsWith("$")) {
    const t = ze.textContent.substring(1);
    return Tn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function B1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const j1 = [
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
function F1(t) {
  return j1.includes(t);
}
const K1 = {
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
function W1(t) {
  return t = t.toLowerCase(), K1[t] ?? t;
}
const Z1 = ["touchstart", "touchmove"];
function q1(t) {
  return Z1.includes(t);
}
const Y1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function X1(t) {
  return Y1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function ft(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Jl(t, e) {
  return Dh(t, e);
}
function U1(t, e) {
  Ya(), e.intro = e.intro ?? !1;
  const n = e.target, r = _e, o = ze;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _t(n)
    ); i && (i.nodeType !== xr || /** @type {Comment} */
    i.data !== Rd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(i);
    if (!i)
      throw Ur;
    Yt(!0), wt(
      /** @type {Comment} */
      i
    );
    const s = Dh(t, { ...e, anchor: i });
    return Yt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Ur && console.warn("Failed to hydrate: ", s), e.recover === !1 && r1(), Ya(), Wl(n), Yt(!1), Jl(t, e);
  } finally {
    Yt(r), wt(o);
  }
}
const go = /* @__PURE__ */ new Map();
function Dh(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ya();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!a.has(v)) {
        a.add(v);
        var m = q1(v);
        e.addEventListener(v, Uo, { passive: m });
        var y = go.get(v);
        y === void 0 ? (document.addEventListener(v, Uo, { passive: m }), go.set(v, 1)) : go.set(v, y + 1);
      }
    }
  };
  l(Hl(Ah)), Ua.add(l);
  var u = void 0, d = D1(() => {
    var h = n ?? e.appendChild(Ut());
    return b1(
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
            gt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), _e && rn(
          /** @type {TemplateNode} */
          f,
          null
        ), u = t(f, r) || {}, _e && (qe.nodes_end = ze, ze === null || ze.nodeType !== xr || /** @type {Comment} */
        ze.data !== Ll))
          throw ki(), Ur;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        e.removeEventListener(f, Uo);
        var v = (
          /** @type {number} */
          go.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, Uo), go.delete(f)) : go.set(f, v);
      }
      Ua.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Ja.set(u, d), u;
}
let Ja = /* @__PURE__ */ new WeakMap();
function Mh(t, e) {
  const n = Ja.get(t);
  return n ? (Ja.delete(t), n(e)) : Promise.resolve();
}
class Ei {
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
      ot
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        ql(r), this.#r.delete(n);
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
            kh(s, l), l.append(Ut()), this.#n.set(i, { effect: s, fragment: l });
          } else
            Mt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), bo(s, a, !1)) : a();
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
      ot
    ), o = dh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      ln(() => n(this.anchor))
    ), this.#e.set(r, e), o || (_e && (this.anchor = ze), this.#i());
  }
}
function Te(t, e, ...n) {
  var r = new Ei(t);
  zr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, fr);
}
function Dn(t) {
  gt === null && Bl(), Ho && gt.l !== null ? J1(gt).m.push(t) : Be(() => {
    const e = vt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Pi(t) {
  gt === null && Bl(), Dn(() => () => vt(t));
}
function J1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function G1() {
  return Symbol(Bd);
}
function se(t, e, n = !1) {
  _e && Tn();
  var r = new Ei(t), o = n ? fr : 0;
  function i(s, a) {
    if (_e) {
      const u = qd(t) === Js;
      if (s === u) {
        var l = ys();
        wt(l), r.anchor = l, Yt(!1), r.ensure(s, a), Yt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  zr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Q1(t, e, n) {
  _e && Tn();
  var r = new Ei(t), o = !zo();
  zr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function em(t, e) {
  _e && wt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _t(t)
  ), ao(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function la(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Ae(() => {
    var a = (
      /** @type {Effect} */
      qe
    );
    if (s === (s = e() ?? "")) {
      _e && Tn();
      return;
    }
    if (a.nodes_start !== null && (wh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (_e) {
        ze.data;
        for (var l = Tn(), u = l; l !== null && (l.nodeType !== xr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ hn(l);
        if (l === null)
          throw ki(), Ur;
        rn(ze, u), i = wt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Ul(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ _t(h)), rn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ _t(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ _t(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ _t(h)
          );
      else
        i.before(h);
    }
  });
}
function At(t, e, n) {
  _e && Tn();
  var r = new Ei(t);
  zr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, fr);
}
function Lh(t, e, n, r, o, i) {
  let s = _e;
  _e && Tn();
  var a = null;
  _e && ze.nodeType === Jv && (a = /** @type {Element} */
  ze, Tn());
  var l = (
    /** @type {TemplateNode} */
    _e ? ze : t
  ), u = new Ei(l, !1);
  zr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? Wv : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = _e ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), rn(a, a), r) {
          _e && X1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            _e ? /* @__PURE__ */ _t(a) : a.appendChild(Ut())
          );
          _e && (v === null ? Yt(!1) : wt(v)), r(a, v);
        }
        qe.nodes_end = a, f.before(a);
      }
      _e && wt(f);
    }), () => {
    };
  }, fr), aa(() => {
  }), s && (Yt(!0), wt(l));
}
function tm(t, e) {
  let n = null, r = _e;
  var o;
  if (_e) {
    n = ze;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _t(document.head)
    ); i !== null && (i.nodeType !== xr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(i);
    if (i === null)
      Yt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ hn(i)
      );
      i.remove(), wt(s);
    }
  }
  _e || (o = document.head.appendChild(Ut()));
  try {
    zr(() => e(o), Vl);
  } finally {
    r && (Yt(!0), wt(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function rt(t, e) {
  Vo(() => {
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
function Rt(t, e, n) {
  Vo(() => {
    var r = vt(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ao(() => {
        var s = n();
        Yl(s), o && Xd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function nm(t, e) {
  var n = void 0, r;
  vh(() => {
    n !== (n = e()) && (r && (Mt(r), r = null), n && (r = ln(() => {
      Vo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Hh(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = Hh(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function ri() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = Hh(t)) && (r && (r += " "), r += e);
  return r;
}
function Cr(t) {
  return typeof t == "object" ? ri(t) : t ?? "";
}
const lc = [...` 	
\r\f \v\uFEFF`];
function rm(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || lc.includes(r[s - 1])) && (a === r.length || lc.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function uc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Sa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function om(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Sa)), o && l.push(...Object.keys(o).map(Sa));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var f = t[h];
        if (a ? f === "/" && t[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && t[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var v = Sa(t.substring(u, d).trim());
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
    return r && (n += uc(r)), o && (n += uc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function sn(t, e, n, r, o, i) {
  var s = t.__className;
  if (_e || s !== n || s === void 0) {
    var a = rm(n, r, i);
    (!_e || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function _a(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Vt(t, e, n, r) {
  var o = t.__style;
  if (_e || o !== e) {
    var i = om(e, r);
    (!_e || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (_a(t, n?.[0], r[0]), _a(t, n?.[1], r[1], "important")) : _a(t, n, r));
  return r;
}
function Ga(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Gs(e))
      return u1();
    for (var r of t.options)
      r.selected = e.includes(cc(r));
    return;
  }
  for (r of t.options) {
    var o = cc(r);
    if (O1(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function im(t) {
  var e = new MutationObserver(() => {
    Ga(t, t.__value);
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
  }), aa(() => {
    e.disconnect();
  });
}
function cc(t) {
  return "__value" in t ? t.__value : t.value;
}
const Sr = Symbol("class"), Rn = Symbol("style"), zh = Symbol("is custom element"), Vh = Symbol("is html");
function Tr(t) {
  if (_e) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Oe(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Oe(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Hr(n), hh();
  }
}
function is(t, e) {
  var n = ua(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Ea(t, e) {
  var n = ua(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function sm(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Oe(t, e, n, r) {
  var o = ua(t);
  _e && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[Uv] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ih(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function am(t, e, n, r, o = !1, i = !1) {
  if (_e && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Tr(s);
  }
  var l = ua(t), u = l[zh], d = !l[Vh];
  let h = _e && u;
  h && Yt(!1);
  var f = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Cr(n.class) : (r || n[Sr]) && (n.class = null), n[Rn] && (n.style ??= null);
  var y = Ih(t);
  for (const O in n) {
    let z = n[O];
    if (v && O === "value" && z == null) {
      t.value = t.__value = "", f[O] = z;
      continue;
    }
    if (O === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      sn(t, w, z, r, e?.[Sr], n[Sr]), f[O] = z, f[Sr] = n[Sr];
      continue;
    }
    if (O === "style") {
      Vt(t, z, e?.[Rn], n[Rn]), f[O] = z, f[Rn] = n[Rn];
      continue;
    }
    var b = f[O];
    if (!(z === b && !(z === void 0 && t.hasAttribute(O)))) {
      f[O] = z;
      var x = O[0] + O[1];
      if (x !== "$$")
        if (x === "on") {
          const W = {}, B = "$$" + O;
          let D = O.slice(2);
          var _ = F1(D);
          if (B1(D) && (D = D.slice(0, -7), W.capture = !0), !_ && b) {
            if (z != null) continue;
            t.removeEventListener(D, f[B], W), f[B] = null;
          }
          if (z != null)
            if (_)
              t[`__${D}`] = z, uo([D]);
            else {
              let P = function(S) {
                f[O].call(this, S);
              };
              f[B] = Xl(D, t, P, W);
            }
          else _ && (t[`__${D}`] = void 0);
        } else if (O === "style")
          Oe(t, O, z);
        else if (O === "autofocus")
          T1(
            /** @type {HTMLElement} */
            t,
            !!z
          );
        else if (!u && (O === "__value" || O === "value" && z != null))
          t.value = t.__value = z;
        else if (O === "selected" && v)
          sm(
            /** @type {HTMLOptionElement} */
            t,
            z
          );
        else {
          var k = O;
          d || (k = W1(k));
          var C = k === "defaultValue" || k === "defaultChecked";
          if (z == null && !u && !C)
            if (l[O] = null, k === "value" || k === "checked") {
              let W = (
                /** @type {HTMLInputElement} */
                t
              );
              const B = e === void 0;
              if (k === "value") {
                let D = W.defaultValue;
                W.removeAttribute(k), W.defaultValue = D, W.value = W.__value = B ? D : null;
              } else {
                let D = W.defaultChecked;
                W.removeAttribute(k), W.defaultChecked = D, W.checked = B ? D : !1;
              }
            } else
              t.removeAttribute(O);
          else C || y.includes(k) && (u || typeof z != "string") ? (t[k] = z, k in l && (l[k] = Ht)) : typeof z != "function" && Oe(t, k, z);
        }
    }
  }
  return h && Yt(!0), f;
}
function nt(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  nh(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", f = !1;
    if (vh(() => {
      var m = e(...l.map(c)), y = am(
        t,
        u,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && Ga(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || Mt(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === Bd && (!u || w !== u[b]) && (d[b] && Mt(d[b]), d[b] = ln(() => nm(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Vo(() => {
        Ga(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), im(v);
      });
    }
    f = !0;
  });
}
function ua(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [zh]: t.nodeName.includes("-"),
      [Vh]: t.namespaceURI === Kv
    }
  );
}
var dc = /* @__PURE__ */ new Map();
function Ih(t) {
  var e = t.getAttribute("is") || t.nodeName, n = dc.get(e);
  if (n) return n;
  dc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = jd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Qs(o);
  }
  return n;
}
function ks(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  fh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Pa(t) ? Oa(i) : i, n(i), ot !== null && r.add(ot), await Oh(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (_e && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  vt(e) == null && t.value) && (n(Pa(t) ? Oa(t.value) : t.value), ot !== null && r.add(ot)), ao(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        os ?? ot
      );
      if (r.has(i))
        return;
    }
    Pa(t) && o === Oa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function Pa(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Oa(t) {
  return t === "" ? null : +t;
}
function lm(t, e, n = e) {
  fh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  _e && t.files && n(t.files), ao(() => {
    t.files = e();
  });
}
class Gl {
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
          Gl.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var um = /* @__PURE__ */ new Gl({
  box: "border-box"
});
function hc(t, e, n) {
  var r = um.observe(t, () => n(t[e]));
  Vo(() => (vt(() => n(t[e])), r));
}
function fc(t, e) {
  return t === e || t?.[Kn] === e;
}
function It(t = {}, e, n, r) {
  return Vo(() => {
    var o, i;
    return ao(() => {
      o = i, i = [], vt(() => {
        t !== n(...i) && (e(t, ...i), o && fc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Hr(() => {
        i && fc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Ql(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    gt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Yl(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ $i(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && en(() => {
    pc(e, r), Ka(n.b);
  }), Be(() => {
    const o = vt(() => n.m.map(Xv));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Be(() => {
    pc(e, r), Ka(n.a);
  });
}
function pc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Zi = !1;
function cm(t) {
  var e = Zi;
  try {
    return Zi = !1, [t(), Zi];
  } finally {
    Zi = e;
  }
}
const dm = {
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
function Ve(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    dm
  );
}
const hm = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = qe;
      try {
        bn(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Vd
        );
      } finally {
        bn(r);
      }
    }
    return t.special[e](n), nc(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), nc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function gc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: pr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        qe
      )
    },
    hm
  );
}
const fm = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Wo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Wo(o) && (o = o());
      const i = lr(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Wo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = lr(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Kn || e === Rl) return !1;
    for (let n of t.props)
      if (Wo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Wo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function je(...t) {
  return new Proxy({ props: t }, fm);
}
function g(t, e, n, r) {
  var o = !Ho || (n & Rv) !== 0, i = (n & Bv) !== 0, s = (n & jv) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? vt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = Kn in t || Rl in t;
    d = lr(t, e)?.set ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, v = !1;
  i ? [f, v] = cm(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (o && o1(), d(f)));
  var m;
  if (o ? m = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : m = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (a = /** @type {V} */
    void 0), _ === void 0 ? a : _;
  }, o && (n & Vd) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, k) {
        return arguments.length > 0 ? ((!o || !k || y || v) && d(k ? m() : _), _) : m();
      }
    );
  }
  var w = !1, b = ((n & Iv) !== 0 ? $i : Fl)(() => (w = !1, m()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    qe
  );
  return (
    /** @type {() => V} */
    function(_, k) {
      if (arguments.length > 0) {
        const C = k ? c(b) : o && i ? Ct(_) : _;
        return F(b, C), w = !0, a !== void 0 && (a = C), _;
      }
      return lo && w || (x.f & ur) !== 0 ? b.v : c(b);
    }
  );
}
function pm(t) {
  return new gm(t);
}
class gm {
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
      var a = /* @__PURE__ */ sh(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Rl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? U1 : Jl)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && p(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || ms(this, i, {
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
      Mh(this.#t);
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
let Rh;
typeof HTMLElement == "function" && (Rh = class extends HTMLElement {
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
          r !== "default" && (i.name = r), T(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = vm(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ss(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = pm({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = so(() => {
        ao(() => {
          this.$$r = !0;
          for (const r of vs(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ss(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ss(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return vs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ss(t, e, n, r) {
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
function vm(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ae(t, e, n, r, o, i) {
  let s = class extends Rh {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return vs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return vs(e).forEach((a) => {
    ms(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ss(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = lr(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ms(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var mm = { value: () => {
} };
function ca() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new as(n);
}
function as(t) {
  this._ = t;
}
function ym(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
as.prototype = ca.prototype = {
  constructor: as,
  on: function(t, e) {
    var n = this._, r = ym(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = wm(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = vc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = vc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new as(t);
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
function wm(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function vc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = mm, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Qa = "http://www.w3.org/1999/xhtml";
const mc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function da(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), mc.hasOwnProperty(e) ? { space: mc[e], local: t } : t;
}
function bm(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Qa && e.documentElement.namespaceURI === Qa ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function xm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Bh(t) {
  var e = da(t);
  return (e.local ? xm : bm)(e);
}
function Cm() {
}
function eu(t) {
  return t == null ? Cm : function() {
    return this.querySelector(t);
  };
}
function km(t) {
  typeof t != "function" && (t = eu(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new fn(r, this._parents);
}
function $m(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Sm() {
  return [];
}
function jh(t) {
  return t == null ? Sm : function() {
    return this.querySelectorAll(t);
  };
}
function _m(t) {
  return function() {
    return $m(t.apply(this, arguments));
  };
}
function Em(t) {
  typeof t == "function" ? t = _m(t) : t = jh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new fn(r, o);
}
function Fh(t) {
  return function() {
    return this.matches(t);
  };
}
function Kh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Pm = Array.prototype.find;
function Om(t) {
  return function() {
    return Pm.call(this.children, t);
  };
}
function Tm() {
  return this.firstElementChild;
}
function Nm(t) {
  return this.select(t == null ? Tm : Om(typeof t == "function" ? t : Kh(t)));
}
var Am = Array.prototype.filter;
function Dm() {
  return Array.from(this.children);
}
function Mm(t) {
  return function() {
    return Am.call(this.children, t);
  };
}
function Lm(t) {
  return this.selectAll(t == null ? Dm : Mm(typeof t == "function" ? t : Kh(t)));
}
function Hm(t) {
  typeof t != "function" && (t = Fh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new fn(r, this._parents);
}
function Wh(t) {
  return new Array(t.length);
}
function zm() {
  return new fn(this._enter || this._groups.map(Wh), this._parents);
}
function $s(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
$s.prototype = {
  constructor: $s,
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
function Vm(t) {
  return function() {
    return t;
  };
}
function Im(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new $s(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function Rm(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, f = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (f[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new $s(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Bm(t) {
  return t.__data__;
}
function jm(t, e) {
  if (!arguments.length) return Array.from(this, Bm);
  var n = e ? Rm : Im, r = this._parents, o = this._groups;
  typeof t != "function" && (t = Vm(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, v = Fm(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(f);
    n(d, h, y, w, b, v, e);
    for (var x = 0, _ = 0, k, C; x < m; ++x)
      if (k = y[x]) {
        for (x >= _ && (_ = x + 1); !(C = w[_]) && ++_ < m; ) ;
        k._next = C || null;
      }
  }
  return s = new fn(s, r), s._enter = a, s._exit = l, s;
}
function Fm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Km() {
  return new fn(this._exit || this._groups.map(Wh), this._parents);
}
function Wm(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Zm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, f = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (f[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new fn(a, this._parents);
}
function qm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ym(t) {
  t || (t = Xm);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new fn(o, this._parents).order();
}
function Xm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Um() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Jm() {
  return Array.from(this);
}
function Gm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Qm() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function e0() {
  return !this.node();
}
function t0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function n0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function r0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function o0(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function i0(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function s0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function a0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function l0(t, e) {
  var n = da(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? r0 : n0 : typeof e == "function" ? n.local ? a0 : s0 : n.local ? i0 : o0)(n, e));
}
function Zh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function u0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function c0(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function d0(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function h0(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? u0 : typeof e == "function" ? d0 : c0)(t, e, n ?? "")) : Eo(this.node(), t);
}
function Eo(t, e) {
  return t.style.getPropertyValue(e) || Zh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function f0(t) {
  return function() {
    delete this[t];
  };
}
function p0(t, e) {
  return function() {
    this[t] = e;
  };
}
function g0(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function v0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? f0 : typeof e == "function" ? g0 : p0)(t, e)) : this.node()[t];
}
function qh(t) {
  return t.trim().split(/^|\s+/);
}
function tu(t) {
  return t.classList || new Yh(t);
}
function Yh(t) {
  this._node = t, this._names = qh(t.getAttribute("class") || "");
}
Yh.prototype = {
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
function Xh(t, e) {
  for (var n = tu(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Uh(t, e) {
  for (var n = tu(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function m0(t) {
  return function() {
    Xh(this, t);
  };
}
function y0(t) {
  return function() {
    Uh(this, t);
  };
}
function w0(t, e) {
  return function() {
    (e.apply(this, arguments) ? Xh : Uh)(this, t);
  };
}
function b0(t, e) {
  var n = qh(t + "");
  if (arguments.length < 2) {
    for (var r = tu(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? w0 : e ? m0 : y0)(n, e));
}
function x0() {
  this.textContent = "";
}
function C0(t) {
  return function() {
    this.textContent = t;
  };
}
function k0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function $0(t) {
  return arguments.length ? this.each(t == null ? x0 : (typeof t == "function" ? k0 : C0)(t)) : this.node().textContent;
}
function S0() {
  this.innerHTML = "";
}
function _0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function E0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function P0(t) {
  return arguments.length ? this.each(t == null ? S0 : (typeof t == "function" ? E0 : _0)(t)) : this.node().innerHTML;
}
function O0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function T0() {
  return this.each(O0);
}
function N0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function A0() {
  return this.each(N0);
}
function D0(t) {
  var e = typeof t == "function" ? t : Bh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function M0() {
  return null;
}
function L0(t, e) {
  var n = typeof t == "function" ? t : Bh(t), r = e == null ? M0 : typeof e == "function" ? e : eu(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function H0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function z0() {
  return this.each(H0);
}
function V0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function I0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function R0(t) {
  return this.select(t ? I0 : V0);
}
function B0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function j0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function F0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function K0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function W0(t, e, n) {
  return function() {
    var r = this.__on, o, i = j0(e);
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
function Z0(t, e, n) {
  var r = F0(t + ""), o, i = r.length, s;
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
  for (a = e ? W0 : K0, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Jh(t, e, n) {
  var r = Zh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function q0(t, e) {
  return function() {
    return Jh(this, t, e);
  };
}
function Y0(t, e) {
  return function() {
    return Jh(this, t, e.apply(this, arguments));
  };
}
function X0(t, e) {
  return this.each((typeof e == "function" ? Y0 : q0)(t, e));
}
function* U0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gh = [null];
function fn(t, e) {
  this._groups = t, this._parents = e;
}
function Oi() {
  return new fn([[document.documentElement]], Gh);
}
function J0() {
  return this;
}
fn.prototype = Oi.prototype = {
  constructor: fn,
  select: km,
  selectAll: Em,
  selectChild: Nm,
  selectChildren: Lm,
  filter: Hm,
  data: jm,
  enter: zm,
  exit: Km,
  join: Wm,
  merge: Zm,
  selection: J0,
  order: qm,
  sort: Ym,
  call: Um,
  nodes: Jm,
  node: Gm,
  size: Qm,
  empty: e0,
  each: t0,
  attr: l0,
  style: h0,
  property: v0,
  classed: b0,
  text: $0,
  html: P0,
  raise: T0,
  lower: A0,
  append: D0,
  insert: L0,
  remove: z0,
  clone: R0,
  datum: B0,
  on: Z0,
  dispatch: X0,
  [Symbol.iterator]: U0
};
function yn(t) {
  return typeof t == "string" ? new fn([[document.querySelector(t)]], [document.documentElement]) : new fn([[t]], Gh);
}
function G0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function $n(t, e) {
  if (t = G0(t), e === void 0 && (e = t.currentTarget), e) {
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
const Q0 = { passive: !1 }, ci = { capture: !0, passive: !1 };
function Ta(t) {
  t.stopImmediatePropagation();
}
function xo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Qh(t) {
  var e = t.document.documentElement, n = yn(t).on("dragstart.drag", xo, ci);
  "onselectstart" in e ? n.on("selectstart.drag", xo, ci) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ef(t, e) {
  var n = t.document.documentElement, r = yn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", xo, ci), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const qi = (t) => () => t;
function el(t, {
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
el.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ey(t) {
  return !t.ctrlKey && !t.button;
}
function ty() {
  return this.parentNode;
}
function ny(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ry() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function oy() {
  var t = ey, e = ty, n = ny, r = ry, o = {}, i = ca("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(k) {
    k.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Q0).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(k, C) {
    if (!(d || !t.call(this, k, C))) {
      var O = _(this, e.call(this, k, C), k, C, "mouse");
      O && (yn(k.view).on("mousemove.drag", m, ci).on("mouseup.drag", y, ci), Qh(k.view), Ta(k), u = !1, a = k.clientX, l = k.clientY, O("start", k));
    }
  }
  function m(k) {
    if (xo(k), !u) {
      var C = k.clientX - a, O = k.clientY - l;
      u = C * C + O * O > h;
    }
    o.mouse("drag", k);
  }
  function y(k) {
    yn(k.view).on("mousemove.drag mouseup.drag", null), ef(k.view, u), xo(k), o.mouse("end", k);
  }
  function w(k, C) {
    if (t.call(this, k, C)) {
      var O = k.changedTouches, z = e.call(this, k, C), W = O.length, B, D;
      for (B = 0; B < W; ++B)
        (D = _(this, z, k, C, O[B].identifier, O[B])) && (Ta(k), D("start", k, O[B]));
    }
  }
  function b(k) {
    var C = k.changedTouches, O = C.length, z, W;
    for (z = 0; z < O; ++z)
      (W = o[C[z].identifier]) && (xo(k), W("drag", k, C[z]));
  }
  function x(k) {
    var C = k.changedTouches, O = C.length, z, W;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < O; ++z)
      (W = o[C[z].identifier]) && (Ta(k), W("end", k, C[z]));
  }
  function _(k, C, O, z, W, B) {
    var D = i.copy(), P = $n(B || O, C), S, H, E;
    if ((E = n.call(k, new el("beforestart", {
      sourceEvent: O,
      target: f,
      identifier: W,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), z)) != null)
      return S = E.x - P[0] || 0, H = E.y - P[1] || 0, function A(N, I, U) {
        var G = P, L;
        switch (N) {
          case "start":
            o[W] = A, L = s++;
            break;
          case "end":
            delete o[W], --s;
          // falls through
          case "drag":
            P = $n(U || I, C), L = s;
            break;
        }
        D.call(
          N,
          k,
          new el(N, {
            sourceEvent: I,
            subject: E,
            target: f,
            identifier: W,
            active: L,
            x: P[0] + S,
            y: P[1] + H,
            dx: P[0] - G[0],
            dy: P[1] - G[1],
            dispatch: D
          }),
          z
        );
      };
  }
  return f.filter = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : qi(!!k), f) : t;
  }, f.container = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : qi(k), f) : e;
  }, f.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : qi(k), f) : n;
  }, f.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : qi(!!k), f) : r;
  }, f.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? f : k;
  }, f.clickDistance = function(k) {
    return arguments.length ? (h = (k = +k) * k, f) : Math.sqrt(h);
  }, f;
}
function nu(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function tf(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ti() {
}
var di = 0.7, Ss = 1 / di, Co = "\\s*([+-]?\\d+)\\s*", hi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iy = /^#([0-9a-f]{3,8})$/, sy = new RegExp(`^rgb\\(${Co},${Co},${Co}\\)$`), ay = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), ly = new RegExp(`^rgba\\(${Co},${Co},${Co},${hi}\\)$`), uy = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${hi}\\)$`), cy = new RegExp(`^hsl\\(${hi},${Wn},${Wn}\\)$`), dy = new RegExp(`^hsla\\(${hi},${Wn},${Wn},${hi}\\)$`), yc = {
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
nu(Ti, eo, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wc,
  // Deprecated! Use color.formatHex.
  formatHex: wc,
  formatHex8: hy,
  formatHsl: fy,
  formatRgb: bc,
  toString: bc
});
function wc() {
  return this.rgb().formatHex();
}
function hy() {
  return this.rgb().formatHex8();
}
function fy() {
  return nf(this).formatHsl();
}
function bc() {
  return this.rgb().formatRgb();
}
function eo(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = iy.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? xc(e) : n === 3 ? new nn(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Yi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Yi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = sy.exec(t)) ? new nn(e[1], e[2], e[3], 1) : (e = ay.exec(t)) ? new nn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ly.exec(t)) ? Yi(e[1], e[2], e[3], e[4]) : (e = uy.exec(t)) ? Yi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = cy.exec(t)) ? $c(e[1], e[2] / 100, e[3] / 100, 1) : (e = dy.exec(t)) ? $c(e[1], e[2] / 100, e[3] / 100, e[4]) : yc.hasOwnProperty(t) ? xc(yc[t]) : t === "transparent" ? new nn(NaN, NaN, NaN, 0) : null;
}
function xc(t) {
  return new nn(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yi(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new nn(t, e, n, r);
}
function py(t) {
  return t instanceof Ti || (t = eo(t)), t ? (t = t.rgb(), new nn(t.r, t.g, t.b, t.opacity)) : new nn();
}
function tl(t, e, n, r) {
  return arguments.length === 1 ? py(t) : new nn(t, e, n, r ?? 1);
}
function nn(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
nu(nn, tl, tf(Ti, {
  brighter(t) {
    return t = t == null ? Ss : Math.pow(Ss, t), new nn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? di : Math.pow(di, t), new nn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new nn(Yr(this.r), Yr(this.g), Yr(this.b), _s(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cc,
  // Deprecated! Use color.formatHex.
  formatHex: Cc,
  formatHex8: gy,
  formatRgb: kc,
  toString: kc
}));
function Cc() {
  return `#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}`;
}
function gy() {
  return `#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}${Kr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kc() {
  const t = _s(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Yr(this.r)}, ${Yr(this.g)}, ${Yr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _s(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Yr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Kr(t) {
  return t = Yr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $c(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Sn(t, e, n, r);
}
function nf(t) {
  if (t instanceof Sn) return new Sn(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ti || (t = eo(t)), !t) return new Sn();
  if (t instanceof Sn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Sn(s, a, l, t.opacity);
}
function vy(t, e, n, r) {
  return arguments.length === 1 ? nf(t) : new Sn(t, e, n, r ?? 1);
}
function Sn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
nu(Sn, vy, tf(Ti, {
  brighter(t) {
    return t = t == null ? Ss : Math.pow(Ss, t), new Sn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? di : Math.pow(di, t), new Sn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new nn(
      Na(t >= 240 ? t - 240 : t + 120, o, r),
      Na(t, o, r),
      Na(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Sn(Sc(this.h), Xi(this.s), Xi(this.l), _s(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _s(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Sc(this.h)}, ${Xi(this.s) * 100}%, ${Xi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Sc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Xi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Na(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ru = (t) => () => t;
function my(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function yy(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function wy(t) {
  return (t = +t) == 1 ? rf : function(e, n) {
    return n - e ? yy(e, n, t) : ru(isNaN(e) ? n : e);
  };
}
function rf(t, e) {
  var n = e - t;
  return n ? my(t, n) : ru(isNaN(t) ? e : t);
}
const Es = function t(e) {
  var n = wy(e);
  function r(o, i) {
    var s = n((o = tl(o)).r, (i = tl(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = rf(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function by(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function xy(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Cy(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = oi(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function ky(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Vn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function $y(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = oi(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var nl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Aa = new RegExp(nl.source, "g");
function Sy(t) {
  return function() {
    return t;
  };
}
function _y(t) {
  return function(e) {
    return t(e) + "";
  };
}
function of(t, e) {
  var n = nl.lastIndex = Aa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = nl.exec(t)) && (o = Aa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Vn(r, o) })), n = Aa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? _y(l[0].x) : Sy(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function oi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ru(e) : (n === "number" ? Vn : n === "string" ? (r = eo(e)) ? (e = r, Es) : of : e instanceof eo ? Es : e instanceof Date ? ky : xy(e) ? by : Array.isArray(e) ? Cy : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? $y : Vn)(t, e);
}
var _c = 180 / Math.PI, sf = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function af(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * _c,
    skewX: Math.atan(l) * _c,
    scaleX: s,
    scaleY: a
  };
}
var Ui;
function Ey(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? sf : af(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Py(t) {
  return t == null || (Ui || (Ui = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ui.setAttribute("transform", t), !(t = Ui.transform.baseVal.consolidate())) ? sf : (t = t.matrix, af(t.a, t.b, t.c, t.d, t.e, t.f));
}
function lf(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Vn(u, h) }, { i: y - 2, x: Vn(d, f) });
    } else (h || f) && v.push("translate(" + h + e + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Vn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Vn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Vn(u, h) }, { i: y - 2, x: Vn(d, f) });
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
var Oy = lf(Ey, "px, ", "px)", "deg)"), Ty = lf(Py, ", ", ")", ")"), Ny = 1e-12;
function Ec(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Ay(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Dy(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const ls = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], f = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < Ny)
      b = Math.log(f / u) / e, w = function(z) {
        return [
          a + z * v,
          l + z * m,
          u * Math.exp(e * z * b)
        ];
      };
    else {
      var x = Math.sqrt(y), _ = (f * f - u * u + r * y) / (2 * u * n * x), k = (f * f - u * u - r * y) / (2 * f * n * x), C = Math.log(Math.sqrt(_ * _ + 1) - _), O = Math.log(Math.sqrt(k * k + 1) - k);
      b = (O - C) / e, w = function(z) {
        var W = z * b, B = Ec(C), D = u / (n * x) * (B * Dy(e * W + C) - Ay(C));
        return [
          a + D * v,
          l + D * m,
          u * B / Ec(e * W + C)
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
var Po = 0, Jo = 0, Zo = 0, uf = 1e3, Ps, Go, Os = 0, to = 0, ha = 0, fi = typeof performance == "object" && performance.now ? performance : Date, cf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ou() {
  return to || (cf(My), to = fi.now() + ha);
}
function My() {
  to = 0;
}
function Ts() {
  this._call = this._time = this._next = null;
}
Ts.prototype = df.prototype = {
  constructor: Ts,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ou() : +n) + (e == null ? 0 : +e), !this._next && Go !== this && (Go ? Go._next = this : Ps = this, Go = this), this._call = t, this._time = n, rl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rl());
  }
};
function df(t, e, n) {
  var r = new Ts();
  return r.restart(t, e, n), r;
}
function Ly() {
  ou(), ++Po;
  for (var t = Ps, e; t; )
    (e = to - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Po;
}
function Pc() {
  to = (Os = fi.now()) + ha, Po = Jo = 0;
  try {
    Ly();
  } finally {
    Po = 0, zy(), to = 0;
  }
}
function Hy() {
  var t = fi.now(), e = t - Os;
  e > uf && (ha -= e, Os = t);
}
function zy() {
  for (var t, e = Ps, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ps = n);
  Go = t, rl(r);
}
function rl(t) {
  if (!Po) {
    Jo && (Jo = clearTimeout(Jo));
    var e = t - to;
    e > 24 ? (t < 1 / 0 && (Jo = setTimeout(Pc, t - fi.now() - ha)), Zo && (Zo = clearInterval(Zo))) : (Zo || (Os = fi.now(), Zo = setInterval(Hy, uf)), Po = 1, cf(Pc));
  }
}
function Oc(t, e, n) {
  var r = new Ts();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Vy = ca("start", "end", "cancel", "interrupt"), Iy = [], hf = 0, Tc = 1, ol = 2, us = 3, Nc = 4, il = 5, cs = 6;
function fa(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Ry(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Vy,
    tween: Iy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: hf
  });
}
function iu(t, e) {
  var n = Mn(t, e);
  if (n.state > hf) throw new Error("too late; already scheduled");
  return n;
}
function Gn(t, e) {
  var n = Mn(t, e);
  if (n.state > us) throw new Error("too late; already running");
  return n;
}
function Mn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Ry(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = df(i, 0, n.time);
  function i(u) {
    n.state = Tc, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, v;
    if (n.state !== Tc) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === us) return Oc(s);
        v.state === Nc ? (v.state = cs, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = cs, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (Oc(function() {
      n.state === us && (n.state = Nc, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ol, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ol) {
      for (n.state = us, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = il, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(t, d);
    n.state === il && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = cs, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ds(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > ol && r.state < il, r.state = cs, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function By(t) {
  return this.each(function() {
    ds(this, t);
  });
}
function jy(t, e) {
  var n, r;
  return function() {
    var o = Gn(this, t), i = o.tween;
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
function Fy(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Gn(this, t), s = i.tween;
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
function Ky(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Mn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? jy : Fy)(n, t, e));
}
function su(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Gn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Mn(o, r).value[e];
  };
}
function ff(t, e) {
  var n;
  return (typeof e == "number" ? Vn : e instanceof eo ? Es : (n = eo(e)) ? (e = n, Es) : of)(t, e);
}
function Wy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zy(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Yy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Xy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function Uy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function Jy(t, e) {
  var n = da(t), r = n === "transform" ? Ty : ff;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Uy : Xy)(n, r, su(this, "attr." + t, e)) : e == null ? (n.local ? Zy : Wy)(n) : (n.local ? Yy : qy)(n, r, e));
}
function Gy(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Qy(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function ew(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Qy(t, i)), n;
  }
  return o._value = e, o;
}
function tw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Gy(t, i)), n;
  }
  return o._value = e, o;
}
function nw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = da(t);
  return this.tween(n, (r.local ? ew : tw)(r, e));
}
function rw(t, e) {
  return function() {
    iu(this, t).delay = +e.apply(this, arguments);
  };
}
function ow(t, e) {
  return e = +e, function() {
    iu(this, t).delay = e;
  };
}
function iw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rw : ow)(e, t)) : Mn(this.node(), e).delay;
}
function sw(t, e) {
  return function() {
    Gn(this, t).duration = +e.apply(this, arguments);
  };
}
function aw(t, e) {
  return e = +e, function() {
    Gn(this, t).duration = e;
  };
}
function lw(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? sw : aw)(e, t)) : Mn(this.node(), e).duration;
}
function uw(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Gn(this, t).ease = e;
  };
}
function cw(t) {
  var e = this._id;
  return arguments.length ? this.each(uw(e, t)) : Mn(this.node(), e).ease;
}
function dw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Gn(this, t).ease = n;
  };
}
function hw(t) {
  if (typeof t != "function") throw new Error();
  return this.each(dw(this._id, t));
}
function fw(t) {
  typeof t != "function" && (t = Fh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new gr(r, this._parents, this._name, this._id);
}
function pw(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, v = 0; v < d; ++v)
      (f = l[v] || u[v]) && (h[v] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new gr(s, this._parents, this._name, this._id);
}
function gw(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function vw(t, e, n) {
  var r, o, i = gw(e) ? iu : Gn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function mw(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Mn(this.node(), n).on.on(t) : this.each(vw(n, t, e));
}
function yw(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ww() {
  return this.on("end.remove", yw(this._id));
}
function bw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = eu(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = t.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, fa(u[f], e, n, f, u, Mn(d, n)));
  return new gr(i, this._parents, e, n);
}
function xw(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = jh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = t.call(d, d.__data__, h, l), v, m = Mn(d, n), y = 0, w = f.length; y < w; ++y)
          (v = f[y]) && fa(v, e, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new gr(i, s, e, n);
}
var Cw = Oi.prototype.constructor;
function kw() {
  return new Cw(this._groups, this._parents);
}
function $w(t, e) {
  var n, r, o;
  return function() {
    var i = Eo(this, t), s = (this.style.removeProperty(t), Eo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function pf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Sw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = Eo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function _w(t, e, n) {
  var r, o, i;
  return function() {
    var s = Eo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), Eo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Ew(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Gn(this, t), u = l.on, d = l.value[i] == null ? a || (a = pf(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Pw(t, e, n) {
  var r = (t += "") == "transform" ? Oy : ff;
  return e == null ? this.styleTween(t, $w(t, r)).on("end.style." + t, pf(t)) : typeof e == "function" ? this.styleTween(t, _w(t, r, su(this, "style." + t, e))).each(Ew(this._id, t)) : this.styleTween(t, Sw(t, r, e), n).on("end.style." + t, null);
}
function Ow(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Tw(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Ow(t, s, n)), r;
  }
  return i._value = e, i;
}
function Nw(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Tw(t, e, n ?? ""));
}
function Aw(t) {
  return function() {
    this.textContent = t;
  };
}
function Dw(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Mw(t) {
  return this.tween("text", typeof t == "function" ? Dw(su(this, "text", t)) : Aw(t == null ? "" : t + ""));
}
function Lw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Hw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && Lw(o)), e;
  }
  return r._value = t, r;
}
function zw(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Hw(t));
}
function Vw() {
  for (var t = this._name, e = this._id, n = gf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Mn(l, e);
        fa(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new gr(r, this._parents, t, n);
}
function Iw() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Gn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var Rw = 0;
function gr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function gf() {
  return ++Rw;
}
var tr = Oi.prototype;
gr.prototype = {
  constructor: gr,
  select: bw,
  selectAll: xw,
  selectChild: tr.selectChild,
  selectChildren: tr.selectChildren,
  filter: fw,
  merge: pw,
  selection: kw,
  transition: Vw,
  call: tr.call,
  nodes: tr.nodes,
  node: tr.node,
  size: tr.size,
  empty: tr.empty,
  each: tr.each,
  on: mw,
  attr: Jy,
  attrTween: nw,
  style: Pw,
  styleTween: Nw,
  text: Mw,
  textTween: zw,
  remove: ww,
  tween: Ky,
  delay: iw,
  duration: lw,
  ease: cw,
  easeVarying: hw,
  end: Iw,
  [Symbol.iterator]: tr[Symbol.iterator]
};
function Bw(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var jw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Bw
};
function Fw(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Kw(t) {
  var e, n;
  t instanceof gr ? (e = t._id, t = t._name) : (e = gf(), (n = jw).time = ou(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && fa(l, t, e, u, s, n || Fw(l, e));
  return new gr(r, this._parents, t, e);
}
Oi.prototype.interrupt = By;
Oi.prototype.transition = Kw;
const Ji = (t) => () => t;
function Ww(t, {
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
function or(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
or.prototype = {
  constructor: or,
  scale: function(t) {
    return t === 1 ? this : new or(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new or(this.k, this.x + this.k * t, this.y + this.k * e);
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
var pa = new or(1, 0, 0);
vf.prototype = or.prototype;
function vf(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return pa;
  return t.__zoom;
}
function Da(t) {
  t.stopImmediatePropagation();
}
function qo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Zw(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function qw() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Ac() {
  return this.__zoom || pa;
}
function Yw(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Xw() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Uw(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function mf() {
  var t = Zw, e = qw, n = Uw, r = Yw, o = Xw, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = ls, u = ca("start", "zoom", "end"), d, h, f, v = 500, m = 150, y = 0, w = 10;
  function b(E) {
    E.property("__zoom", Ac).on("wheel.zoom", W, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(E, A, N, I) {
    var U = E.selection ? E.selection() : E;
    U.property("__zoom", Ac), E !== U ? C(E, A, N, I) : U.interrupt().each(function() {
      O(this, arguments).event(I).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, b.scaleBy = function(E, A, N, I) {
    b.scaleTo(E, function() {
      var U = this.__zoom.k, G = typeof A == "function" ? A.apply(this, arguments) : A;
      return U * G;
    }, N, I);
  }, b.scaleTo = function(E, A, N, I) {
    b.transform(E, function() {
      var U = e.apply(this, arguments), G = this.__zoom, L = N == null ? k(U) : typeof N == "function" ? N.apply(this, arguments) : N, X = G.invert(L), Y = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(_(x(G, Y), L, X), U, s);
    }, N, I);
  }, b.translateBy = function(E, A, N, I) {
    b.transform(E, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), e.apply(this, arguments), s);
    }, null, I);
  }, b.translateTo = function(E, A, N, I, U) {
    b.transform(E, function() {
      var G = e.apply(this, arguments), L = this.__zoom, X = I == null ? k(G) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(pa.translate(X[0], X[1]).scale(L.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), G, s);
    }, I, U);
  };
  function x(E, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === E.k ? E : new or(A, E.x, E.y);
  }
  function _(E, A, N) {
    var I = A[0] - N[0] * E.k, U = A[1] - N[1] * E.k;
    return I === E.x && U === E.y ? E : new or(E.k, I, U);
  }
  function k(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function C(E, A, N, I) {
    E.on("start.zoom", function() {
      O(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var U = this, G = arguments, L = O(U, G).event(I), X = e.apply(U, G), Y = N == null ? k(X) : typeof N == "function" ? N.apply(U, G) : N, j = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), q = U.__zoom, ee = typeof A == "function" ? A.apply(U, G) : A, te = l(q.invert(Y).concat(j / q.k), ee.invert(Y).concat(j / ee.k));
      return function(oe) {
        if (oe === 1) oe = ee;
        else {
          var M = te(oe), re = j / M[2];
          oe = new or(re, Y[0] - M[0] * re, Y[1] - M[1] * re);
        }
        L.zoom(null, oe);
      };
    });
  }
  function O(E, A, N) {
    return !N && E.__zooming || new z(E, A);
  }
  function z(E, A) {
    this.that = E, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = e.apply(E, A), this.taps = 0;
  }
  z.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, A) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var A = yn(this.that).datum();
      u.call(
        E,
        this.that,
        new Ww(E, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        A
      );
    }
  };
  function W(E, ...A) {
    if (!t.apply(this, arguments)) return;
    var N = O(this, A).event(E), I = this.__zoom, U = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), G = $n(E);
    if (N.wheel)
      (N.mouse[0][0] !== G[0] || N.mouse[0][1] !== G[1]) && (N.mouse[1] = I.invert(N.mouse[0] = G)), clearTimeout(N.wheel);
    else {
      if (I.k === U) return;
      N.mouse = [G, I.invert(G)], ds(this), N.start();
    }
    qo(E), N.wheel = setTimeout(L, m), N.zoom("mouse", n(_(x(I, U), N.mouse[0], N.mouse[1]), N.extent, s));
    function L() {
      N.wheel = null, N.end();
    }
  }
  function B(E, ...A) {
    if (f || !t.apply(this, arguments)) return;
    var N = E.currentTarget, I = O(this, A, !0).event(E), U = yn(E.view).on("mousemove.zoom", Y, !0).on("mouseup.zoom", j, !0), G = $n(E, N), L = E.clientX, X = E.clientY;
    Qh(E.view), Da(E), I.mouse = [G, this.__zoom.invert(G)], ds(this), I.start();
    function Y(q) {
      if (qo(q), !I.moved) {
        var ee = q.clientX - L, te = q.clientY - X;
        I.moved = ee * ee + te * te > y;
      }
      I.event(q).zoom("mouse", n(_(I.that.__zoom, I.mouse[0] = $n(q, N), I.mouse[1]), I.extent, s));
    }
    function j(q) {
      U.on("mousemove.zoom mouseup.zoom", null), ef(q.view, I.moved), qo(q), I.event(q).end();
    }
  }
  function D(E, ...A) {
    if (t.apply(this, arguments)) {
      var N = this.__zoom, I = $n(E.changedTouches ? E.changedTouches[0] : E, this), U = N.invert(I), G = N.k * (E.shiftKey ? 0.5 : 2), L = n(_(x(N, G), I, U), e.apply(this, A), s);
      qo(E), a > 0 ? yn(this).transition().duration(a).call(C, L, I, E) : yn(this).call(b.transform, L, I, E);
    }
  }
  function P(E, ...A) {
    if (t.apply(this, arguments)) {
      var N = E.touches, I = N.length, U = O(this, A, E.changedTouches.length === I).event(E), G, L, X, Y;
      for (Da(E), L = 0; L < I; ++L)
        X = N[L], Y = $n(X, this), Y = [Y, this.__zoom.invert(Y), X.identifier], U.touch0 ? !U.touch1 && U.touch0[2] !== Y[2] && (U.touch1 = Y, U.taps = 0) : (U.touch0 = Y, G = !0, U.taps = 1 + !!d);
      d && (d = clearTimeout(d)), G && (U.taps < 2 && (h = Y[0], d = setTimeout(function() {
        d = null;
      }, v)), ds(this), U.start());
    }
  }
  function S(E, ...A) {
    if (this.__zooming) {
      var N = O(this, A).event(E), I = E.changedTouches, U = I.length, G, L, X, Y;
      for (qo(E), G = 0; G < U; ++G)
        L = I[G], X = $n(L, this), N.touch0 && N.touch0[2] === L.identifier ? N.touch0[0] = X : N.touch1 && N.touch1[2] === L.identifier && (N.touch1[0] = X);
      if (L = N.that.__zoom, N.touch1) {
        var j = N.touch0[0], q = N.touch0[1], ee = N.touch1[0], te = N.touch1[1], oe = (oe = ee[0] - j[0]) * oe + (oe = ee[1] - j[1]) * oe, M = (M = te[0] - q[0]) * M + (M = te[1] - q[1]) * M;
        L = x(L, Math.sqrt(oe / M)), X = [(j[0] + ee[0]) / 2, (j[1] + ee[1]) / 2], Y = [(q[0] + te[0]) / 2, (q[1] + te[1]) / 2];
      } else if (N.touch0) X = N.touch0[0], Y = N.touch0[1];
      else return;
      N.zoom("touch", n(_(L, X, Y), N.extent, s));
    }
  }
  function H(E, ...A) {
    if (this.__zooming) {
      var N = O(this, A).event(E), I = E.changedTouches, U = I.length, G, L;
      for (Da(E), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), G = 0; G < U; ++G)
        L = I[G], N.touch0 && N.touch0[2] === L.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === L.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (L = $n(L, this), Math.hypot(h[0] - L[0], h[1] - L[1]) < w)) {
        var X = yn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Ji(+E), b) : r;
  }, b.filter = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Ji(!!E), b) : t;
  }, b.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Ji(!!E), b) : o;
  }, b.extent = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Ji([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), b) : e;
  }, b.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(E) {
    return arguments.length ? (n = E, b) : n;
  }, b.duration = function(E) {
    return arguments.length ? (a = +E, b) : a;
  }, b.interpolate = function(E) {
    return arguments.length ? (l = E, b) : l;
  }, b.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? b : E;
  }, b.clickDistance = function(E) {
    return arguments.length ? (y = (E = +E) * E, b) : Math.sqrt(y);
  }, b.tapDistance = function(E) {
    return arguments.length ? (w = +E, b) : w;
  }, b;
}
const pi = {
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
}, sl = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], yf = ["Enter", " ", "Escape"], Jw = {
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
var Oo;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(Oo || (Oo = {}));
var Xr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Xr || (Xr = {}));
var Ns;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Ns || (Ns = {}));
const al = {
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
var rr;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(rr || (rr = {}));
var gi;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(gi || (gi = {}));
var Pe;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Pe || (Pe = {}));
const Dc = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
};
function Gw(t, e) {
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
function Mc(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Qw(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const wf = (t) => "id" in t && "source" in t && "target" in t, e2 = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), au = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), Ni = (t, e = [0, 0]) => {
  const { width: n, height: r } = Vr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, t2 = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : au(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? As(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ga(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return va(n);
}, Ai = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = ga(n, As(o)), r = !0);
  }), r ? va(n) : { x: 0, y: 0, width: 0, height: 0 };
}, lu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Mi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = vi(a, No(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, n2 = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function r2(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function o2({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = r2(t, s), l = Ai(a), u = uu(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function bf({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", pi.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && Ao(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Ao(h) ? no(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", pi.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function i2({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const f = i.has(h.id), v = !f && h.parentId && s.find((m) => m.id === h.parentId);
    (f || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = n2(s, l);
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
const To = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), no = (t = { x: 0, y: 0 }, e, n) => ({
  x: To(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: To(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function xf(t, e, n) {
  const { width: r, height: o } = Vr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return no(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const Lc = (t, e, n) => t < e ? To(Math.abs(t - e), 1, e) / e : t > n ? -To(Math.abs(t - n), 1, e) / e : 0, Cf = (t, e, n = 15, r = 40) => {
  const o = Lc(t.x, r, e.width - r) * n, i = Lc(t.y, r, e.height - r) * n;
  return [o, i];
}, ga = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), ll = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), va = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), No = (t, e = [0, 0]) => {
  const { x: n, y: r } = au(t) ? t.internals.positionAbsolute : Ni(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, As = (t, e = [0, 0]) => {
  const { x: n, y: r } = au(t) ? t.internals.positionAbsolute : Ni(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, kf = (t, e) => va(ga(ll(t), ll(e))), vi = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, Hc = (t) => ir(t.width) && ir(t.height) && ir(t.x) && ir(t.y), ir = (t) => !isNaN(t) && isFinite(t), s2 = (t, e) => {
}, Di = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Mi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? Di(a, s) : a;
}, Ds = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function vo(t, e) {
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
function a2(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = vo(t, n), o = vo(t, e);
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
    const r = vo(t.top ?? t.y ?? 0, n), o = vo(t.bottom ?? t.y ?? 0, n), i = vo(t.left ?? t.x ?? 0, e), s = vo(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function l2(t, e, n, r, o, i) {
  const { x: s, y: a } = Ds(t, [e, n, r]), { x: l, y: u } = Ds({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const uu = (t, e, n, r, o, i) => {
  const s = a2(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = To(u, r, o), h = t.x + t.width / 2, f = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - f * d, y = l2(t, v, m, d, e, n), w = {
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
}, Wr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ao(t) {
  return t != null && t !== "parent";
}
function Vr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function $f(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function u2(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function c2(t) {
  return { ...Jw, ...t || {} };
}
function Ma(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = En(t), a = Mi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Di(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Sf = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), _f = (t) => t?.getRootNode?.() || window?.document, d2 = ["INPUT", "SELECT", "TEXTAREA"];
function Ef(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : d2.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const Pf = (t) => "clientX" in t, En = (t, e) => {
  const n = Pf(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, zc = (t, e, n, r, o) => {
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
      ...Sf(s)
    };
  });
};
function h2({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function Gi(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function Vc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Pe.Left:
      return [e - Gi(e - r, i), n];
    case Pe.Right:
      return [e + Gi(r - e, i), n];
    case Pe.Top:
      return [e, n - Gi(n - o, i)];
    case Pe.Bottom:
      return [e, n + Gi(o - n, i)];
  }
}
function Of({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: s = 0.25 }) {
  const [a, l] = Vc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Vc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, f, v, m] = h2({
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
function Tf({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function f2({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function p2({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = ga(As(t), As(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return vi(s, va(i)) > 0;
}
const g2 = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, v2 = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), m2 = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return wf(t) ? n = { ...t } : n = {
    ...t,
    id: g2(t)
  }, v2(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function Nf({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = Tf({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const Ic = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, y2 = ({ source: t, sourcePosition: e = Pe.Bottom, target: n }) => e === Pe.Left || e === Pe.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Rc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function w2({ source: t, sourcePosition: e = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ic[e], l = Ic[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = y2({
    source: u,
    sourcePosition: e,
    target: d
  }), f = h.x !== 0 ? "x" : "y", v = h[f];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , _, k] = Tf({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const C = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], O = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === v ? m = f === "x" ? C : O : m = f === "x" ? O : C;
  } else {
    const C = [{ x: u.x, y: d.y }], O = [{ x: d.x, y: u.y }];
    if (f === "x" ? m = a.x === v ? O : C : m = a.y === v ? C : O, e === r) {
      const P = Math.abs(t[f] - n[f]);
      if (P <= i) {
        const S = Math.min(i - 1, i - P);
        a[f] === v ? b[f] = (u[f] > t[f] ? -1 : 1) * S : x[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (e !== r) {
      const P = f === "x" ? "y" : "x", S = a[f] === l[P], H = u[P] > d[P], E = u[P] < d[P];
      (a[f] === 1 && (!S && H || S && E) || a[f] !== 1 && (!S && E || S && H)) && (m = f === "x" ? C : O);
    }
    const z = { x: u.x + b.x, y: u.y + b.y }, W = { x: d.x + x.x, y: d.y + x.y }, B = Math.max(Math.abs(z.x - m[0].x), Math.abs(W.x - m[0].x)), D = Math.max(Math.abs(z.y - m[0].y), Math.abs(W.y - m[0].y));
    B >= D ? (y = (z.x + W.x) / 2, w = m[0].y) : (y = m[0].x, w = (z.y + W.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], y, w, _, k];
}
function b2(t, e, n, r) {
  const o = Math.min(Rc(t, e) / 2, Rc(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function cu({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, v, m, y] = w2({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, x) => {
    let _ = "";
    return x > 0 && x < h.length - 1 ? _ = b2(h[x - 1], b, h[x + 1], s) : _ = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, w += _, w;
  }, ""), f, v, m, y];
}
function Bc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function x2(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!Bc(e) || !Bc(n))
    return null;
  const r = e.internals.handleBounds || jc(e.handles), o = n.internals.handleBounds || jc(n.handles), i = Fc(r?.source ?? [], t.sourceHandle), s = Fc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === Oo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", pi.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || Pe.Bottom, l = s?.position || Pe.Top, u = mi(e, i, a), d = mi(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function jc(t) {
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
function mi(t, e, n = Pe.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Vr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Pe.Top:
      return { x: o + s / 2, y: i };
    case Pe.Right:
      return { x: o + s, y: i + a / 2 };
    case Pe.Bottom:
      return { x: o + s / 2, y: i + a };
    case Pe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Fc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function ul(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function C2(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ul(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function k2(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Pe.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Pe.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Pe.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const Af = 1e3, $2 = 10, du = {
  nodeOrigin: [0, 0],
  nodeExtent: sl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, S2 = {
  ...du,
  checkEquality: !0
};
function hu(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function _2(t, e, n) {
  const r = hu(du, n);
  for (const o of t.values())
    if (o.parentId)
      fu(o, t, e, r);
    else {
      const i = Ni(o, r.nodeOrigin), s = Ao(o.extent) ? o.extent : r.nodeExtent, a = no(i, s, Vr(o));
      o.internals.positionAbsolute = a;
    }
}
function E2(t, e) {
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
function P2(t, e, n, r) {
  const o = hu(S2, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? Af : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = Ni(u, o.nodeOrigin), f = Ao(u.extent) ? u.extent : o.nodeExtent, v = no(h, f, Vr(u));
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
          handleBounds: E2(u, d),
          z: Df(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && fu(d, e, n, r, i);
  }
  return s;
}
function O2(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function fu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = hu(du, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  O2(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * $2), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? Af : 0, { x: h, y: f, z: v } = T2(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || f !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: v
    }
  });
}
function Df(t, e) {
  return (ir(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function T2(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Vr(t), l = Ni(t, n), u = Ao(t.extent) ? no(l, t.extent, a) : l;
  let d = no({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = xf(d, a, e));
  const h = Df(t, o), f = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function N2(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? No(a), u = kf(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Vr(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (f > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((x) => {
      t.some((_) => _.id === x.id) || o.push({
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
function A2(t, e, n, r, o, i) {
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
    const m = Sf(f.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = Ao(v.extent) ? v.extent : i;
      let { positionAbsolute: x } = v.internals;
      v.parentId && v.extent === "parent" ? x = xf(x, m, e.get(v.parentId)) : b && (x = no(x, b, m));
      const _ = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: x,
          handleBounds: {
            source: zc("source", f.nodeElement, w, d, v.id),
            target: zc("target", f.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, _), v.parentId && fu(_, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: No(_, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = N2(h, e, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function D2({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function Kc(t, e, n, r, o, i) {
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
function M2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Kc("source", l, d, t, o, s), Kc("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function L2(t, e) {
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
function Mf(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : Mf(n, e) : !1;
}
function Wc(t, e, n) {
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
function H2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !Mf(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function La({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function z2({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Di(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function V2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: x, handleSelector: _, domNode: k, isSelectable: C, nodeId: O, nodeClickDistance: z = 0 }) {
    f = yn(k);
    function W({ x: S, y: H }) {
      const { nodeLookup: E, nodeExtent: A, snapGrid: N, snapToGrid: I, nodeOrigin: U, onNodeDrag: G, onSelectionDrag: L, onError: X, updateNodePositions: Y } = e();
      i = { x: S, y: H };
      let j = !1;
      const q = a.size > 1, ee = q && A ? ll(Ai(a)) : null, te = q && I ? z2({
        dragItems: a,
        snapGrid: N,
        x: S,
        y: H
      }) : null;
      for (const [oe, M] of a) {
        if (!E.has(oe))
          continue;
        let re = { x: S - M.distance.x, y: H - M.distance.y };
        I && (re = te ? {
          x: Math.round(re.x + te.x),
          y: Math.round(re.y + te.y)
        } : Di(re, N));
        let ge = null;
        if (q && A && !M.extent && ee) {
          const { positionAbsolute: ce } = M.internals, me = ce.x - ee.x + A[0][0], be = ce.x + M.measured.width - ee.x2 + A[1][0], xe = ce.y - ee.y + A[0][1], he = ce.y + M.measured.height - ee.y2 + A[1][1];
          ge = [
            [me, xe],
            [be, he]
          ];
        }
        const { position: pe, positionAbsolute: ie } = bf({
          nodeId: oe,
          nextPosition: re,
          nodeLookup: E,
          nodeExtent: ge || A,
          nodeOrigin: U,
          onError: X
        });
        j = j || M.position.x !== pe.x || M.position.y !== pe.y, M.position = pe, M.internals.positionAbsolute = ie;
      }
      if (m = m || j, !!j && (Y(a, !0), y && (r || G || !O && L))) {
        const [oe, M] = La({
          nodeId: O,
          dragItems: a,
          nodeLookup: E
        });
        r?.(y, a, oe, M), G?.(y, oe, M), O || L?.(y, M);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: S, panBy: H, autoPanSpeed: E, autoPanOnNodeDrag: A } = e();
      if (!A) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, I] = Cf(u, d, E);
      (N !== 0 || I !== 0) && (i.x = (i.x ?? 0) - N / S[2], i.y = (i.y ?? 0) - I / S[2], await H({ x: N, y: I }) && W(i)), s = requestAnimationFrame(B);
    }
    function D(S) {
      const { nodeLookup: H, multiSelectionActive: E, nodesDraggable: A, transform: N, snapGrid: I, snapToGrid: U, selectNodesOnDrag: G, onNodeDragStart: L, onSelectionDragStart: X, unselectNodesAndEdges: Y } = e();
      h = !0, (!G || !C) && !E && O && (H.get(O)?.selected || Y()), C && G && O && t?.(O);
      const j = Ma(S.sourceEvent, { transform: N, snapGrid: I, snapToGrid: U, containerBounds: d });
      if (i = j, a = H2(H, A, j, O), a.size > 0 && (n || L || !O && X)) {
        const [q, ee] = La({
          nodeId: O,
          dragItems: a,
          nodeLookup: H
        });
        n?.(S.sourceEvent, a, q, ee), L?.(S.sourceEvent, q, ee), O || X?.(S.sourceEvent, ee);
      }
    }
    const P = oy().clickDistance(z).on("start", (S) => {
      const { domNode: H, nodeDragThreshold: E, transform: A, snapGrid: N, snapToGrid: I } = e();
      d = H?.getBoundingClientRect() || null, v = !1, m = !1, y = S.sourceEvent, E === 0 && D(S), i = Ma(S.sourceEvent, { transform: A, snapGrid: N, snapToGrid: I, containerBounds: d }), u = En(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: H, transform: E, snapGrid: A, snapToGrid: N, nodeDragThreshold: I, nodeLookup: U } = e(), G = Ma(S.sourceEvent, { transform: E, snapGrid: A, snapToGrid: N, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      O && !U.has(O)) && (v = !0), !v) {
        if (!l && H && h && (l = !0, B()), !h) {
          const L = En(S.sourceEvent, d), X = L.x - u.x, Y = L.y - u.y;
          Math.sqrt(X * X + Y * Y) > I && D(S);
        }
        (i.x !== G.xSnapped || i.y !== G.ySnapped) && a && h && (u = En(S.sourceEvent, d), W(G));
      }
    }).on("end", (S) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: H, updateNodePositions: E, onNodeDragStop: A, onSelectionDragStop: N } = e();
        if (m && (E(a, !1), m = !1), o || A || !O && N) {
          const [I, U] = La({
            nodeId: O,
            dragItems: a,
            nodeLookup: H,
            dragging: !1
          });
          o?.(S.sourceEvent, a, I, U), A?.(S.sourceEvent, I, U), O || N?.(S.sourceEvent, U);
        }
      }
    }).filter((S) => {
      const H = S.target;
      return !S.button && (!x || !Wc(H, `.${x}`, k)) && (!_ || Wc(H, _, k));
    });
    f.call(P);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function I2(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    vi(o, No(i)) > 0 && r.push(i);
  return r;
}
const R2 = 250;
function B2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = I2(t, n, e + R2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = mi(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
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
function Lf(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...mi(s, l, l.position, !0) } : l;
}
function Hf(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function j2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const zf = () => !0;
function F2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = zf, onReconnectEnd: x, updateConnection: _, getTransform: k, getFromHandle: C, autoPanSpeed: O, dragThreshold: z = 1, handleDomNode: W }) {
  const B = _f(t.target);
  let D = 0, P;
  const { x: S, y: H } = En(t), E = Hf(i, W), A = a?.getBoundingClientRect();
  let N = !1;
  if (!A || !E)
    return;
  const I = Lf(o, E, r, l, e);
  if (!I)
    return;
  let U = En(t, A), G = !1, L = null, X = !1, Y = null;
  function j() {
    if (!d || !A)
      return;
    const [ge, pe] = Cf(U, A, O);
    f({ x: ge, y: pe }), D = requestAnimationFrame(j);
  }
  const q = {
    ...I,
    nodeId: o,
    type: E,
    position: I.position
  }, ee = l.get(o);
  let te = {
    inProgress: !0,
    isValid: null,
    from: mi(ee, q, Pe.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: ee,
    to: U,
    toHandle: null,
    toPosition: Dc[q.position],
    toNode: null,
    pointer: U
  };
  function oe() {
    N = !0, _(te), m?.(t, { nodeId: o, handleId: r, handleType: E });
  }
  z === 0 && oe();
  function M(ge) {
    if (!N) {
      const { x: me, y: be } = En(ge), xe = me - S, he = be - H;
      if (!(xe * xe + he * he > z * z))
        return;
      oe();
    }
    if (!C() || !q) {
      re(ge);
      return;
    }
    const pe = k();
    U = En(ge, A), P = B2(Mi(U, pe, !1, [1, 1]), n, l, q), G || (j(), G = !0);
    const ie = Vf(ge, {
      handle: P,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    Y = ie.handleDomNode, L = ie.connection, X = j2(!!P, ie.isValid);
    const ce = {
      // from stays the same
      ...te,
      isValid: X,
      to: ie.toHandle && X ? Ds({ x: ie.toHandle.x, y: ie.toHandle.y }, pe) : U,
      toHandle: ie.toHandle,
      toPosition: X && ie.toHandle ? ie.toHandle.position : Dc[q.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: U
    };
    _(ce), te = ce;
  }
  function re(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (N) {
        (P || Y) && L && X && y?.(L);
        const { inProgress: pe, ...ie } = te, ce = {
          ...ie,
          toPosition: te.toHandle ? te.toPosition : null
        };
        w?.(ge, ce), i && x?.(ge, ce);
      }
      v(), cancelAnimationFrame(D), G = !1, X = !1, L = null, Y = null, B.removeEventListener("mousemove", M), B.removeEventListener("mouseup", re), B.removeEventListener("touchmove", M), B.removeEventListener("touchend", re);
    }
  }
  B.addEventListener("mousemove", M), B.addEventListener("mouseup", re), B.addEventListener("touchmove", M), B.addEventListener("touchend", re);
}
function Vf(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = zf, nodeLookup: d }) {
  const h = i === "target", f = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = En(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const x = Hf(void 0, w), _ = w.getAttribute("data-nodeid"), k = w.getAttribute("data-handleid"), C = w.classList.contains("connectable"), O = w.classList.contains("connectableend");
    if (!_ || !x)
      return b;
    const z = {
      source: h ? _ : r,
      sourceHandle: h ? k : o,
      target: h ? r : _,
      targetHandle: h ? o : k
    };
    b.connection = z;
    const W = C && O && (n === Oo.Strict ? h && x === "source" || !h && x === "target" : _ !== r || k !== o);
    b.isValid = W && u(z), b.toHandle = Lf(_, x, k, d, n, !0);
  }
  return b;
}
const Zc = {
  onPointerDown: F2,
  isValid: Vf
};
function K2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = yn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (_) => {
      if (_.sourceEvent.type !== "wheel" || !e)
        return;
      const k = n(), C = _.sourceEvent.ctrlKey && Wr() ? 10 : 1, O = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = k[2] * Math.pow(2, O * C);
      e.scaleTo(z);
    };
    let y = [0, 0];
    const w = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const k = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !e)
        return;
      const C = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], O = [C[0] - y[0], C[1] - y[1]];
      y = C;
      const z = r() * Math.max(k[2], Math.log(k[2])) * (v ? -1 : 1), W = {
        x: k[0] - O[0] * z,
        y: k[1] - O[1] * z
      }, B = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: W.x,
        y: W.y,
        zoom: k[2]
      }, B, a);
    }, x = mf().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", f ? m : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: $n
  };
}
const ma = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Ha = ({ x: t, y: e, zoom: n }) => pa.translate(t, e).scale(n), wo = (t, e) => t.target.closest(`.${e}`), If = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), W2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, za = (t, e = 0, n = W2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, Rf = (t) => {
  const e = t.ctrlKey && Wr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function Z2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (wo(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = $n(d), b = Rf(d), x = h * Math.pow(2, b);
      r.scaleTo(n, x, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let v = o === Xr.Vertical ? 0 : d.deltaX * f, m = o === Xr.Horizontal ? 0 : d.deltaY * f;
    !Wr() && d.shiftKey && o !== Xr.Vertical && (v = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = ma(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function q2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = wo(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Y2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ma(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function X2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && If(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ma(i.transform));
  };
}
function U2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && If(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = ma(s.transform);
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
function J2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (wo(h, `${u}-flow__node`) || wo(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || wo(h, a) && m || wo(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function G2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = mf().scaleExtent([e, n]).translateExtent(r), f = yn(t).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: To(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(Rf);
  function y(P, S) {
    return f ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? oi : ls).transform(za(f, S?.duration, S?.ease, () => H(!0)), P);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: P, noPanClassName: S, onPaneContextMenu: H, userSelectionActive: E, panOnScroll: A, panOnDrag: N, panOnScrollMode: I, panOnScrollSpeed: U, preventScrolling: G, zoomOnPinch: L, zoomOnScroll: X, zoomOnDoubleClick: Y, zoomActivationKeyPressed: j, lib: q, onTransformChange: ee, connectionInProgress: te, paneClickDistance: oe, selectionOnDrag: M }) {
    E && !u.isZoomingOrPanning && b();
    const re = A && !j && !E;
    h.clickDistance(M ? 1 / 0 : !ir(oe) || oe < 0 ? 0 : oe);
    const ge = re ? Z2({
      zoomPanValues: u,
      noWheelClassName: P,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: I,
      panOnScrollSpeed: U,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : q2({
      noWheelClassName: P,
      preventScrolling: G,
      d3ZoomHandler: v
    });
    if (f.on("wheel.zoom", ge, { passive: !1 }), !E) {
      const ie = Y2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ie);
      const ce = X2({
        zoomPanValues: u,
        panOnDrag: N,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: ee
      });
      h.on("zoom", ce);
      const me = U2({
        zoomPanValues: u,
        panOnDrag: N,
        panOnScroll: A,
        onPaneContextMenu: H,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", me);
    }
    const pe = J2({
      zoomActivationKeyPressed: j,
      panOnDrag: N,
      zoomOnScroll: X,
      panOnScroll: A,
      zoomOnDoubleClick: Y,
      zoomOnPinch: L,
      userSelectionActive: E,
      noPanClassName: S,
      noWheelClassName: P,
      lib: q,
      connectionInProgress: te
    });
    h.filter(pe), Y ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function x(P, S, H) {
    const E = Ha(P), A = h?.constrain()(E, S, H);
    return A && await y(A), new Promise((N) => N(A));
  }
  async function _(P, S) {
    const H = Ha(P);
    return await y(H, S), new Promise((E) => E(H));
  }
  function k(P) {
    if (f) {
      const S = Ha(P), H = f.property("__zoom");
      (H.k !== P.zoom || H.x !== P.x || H.y !== P.y) && h?.transform(f, S, null, { sync: !0 });
    }
  }
  function C() {
    const P = f ? vf(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function O(P, S) {
    return f ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? oi : ls).scaleTo(za(f, S?.duration, S?.ease, () => H(!0)), P);
    }) : Promise.resolve(!1);
  }
  function z(P, S) {
    return f ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? oi : ls).scaleBy(za(f, S?.duration, S?.ease, () => H(!0)), P);
    }) : Promise.resolve(!1);
  }
  function W(P) {
    h?.scaleExtent(P);
  }
  function B(P) {
    h?.translateExtent(P);
  }
  function D(P) {
    const S = !ir(P) || P < 0 ? 0 : P;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: b,
    setViewport: _,
    setViewportConstrained: x,
    getViewport: C,
    scaleTo: O,
    scaleBy: z,
    setScaleExtent: W,
    setTranslateExtent: B,
    syncViewport: k,
    setClickDistance: D
  };
}
var qc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(qc || (qc = {}));
var Q2 = /* @__PURE__ */ ne("<div><!></div>");
function Ar(t, e) {
  le(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => Pe.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), f = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ Ve(e, [
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
  const y = wn("svelteflow__node_id"), w = wn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ $(() => r() === "target"), x = /* @__PURE__ */ $(() => a() !== void 0 ? a() : w.value), _ = Ln(), k = /* @__PURE__ */ $(() => _.ariaLabelConfig), C = null;
  en(() => {
    if (h() || f()) {
      _.edges;
      let L = _.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (C && !Gw(L, C)) {
        const X = L ?? /* @__PURE__ */ new Map();
        Mc(C, X, f()), Mc(X, C, h());
      }
      C = new Map(L);
    }
  });
  let O = /* @__PURE__ */ $(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: X, isValid: Y } = _.connection, j = L && L.nodeId === y && L.type === r() && L.id === n(), q = X && X.nodeId === y && X.type === r() && X.id === n(), ee = _.connectionMode === Oo.Strict ? L?.type !== r() : y !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      j,
      q,
      ee,
      q && Y
    ];
  }), z = /* @__PURE__ */ $(() => Lo(c(O), 5)), W = /* @__PURE__ */ $(() => c(z)[0]), B = /* @__PURE__ */ $(() => c(z)[1]), D = /* @__PURE__ */ $(() => c(z)[2]), P = /* @__PURE__ */ $(() => c(z)[3]), S = /* @__PURE__ */ $(() => c(z)[4]);
  function H(L) {
    const X = _.onbeforeconnect ? _.onbeforeconnect(L) : L;
    X && (_.addEdge(X), _.onconnect?.(L));
  }
  function E(L) {
    const X = Pf(L);
    L.currentTarget && (X && L.button === 0 || !X) && Zc.onPointerDown(L, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
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
      onConnect: H,
      onConnectStart: (Y, j) => {
        _.onconnectstart?.(Y, {
          nodeId: j.nodeId,
          handleId: j.handleId,
          handleType: j.handleType
        });
      },
      onConnectEnd: (Y, j) => {
        _.onconnectend?.(Y, j);
      },
      getTransform: () => [_.viewport.x, _.viewport.y, _.viewport.zoom],
      getFromHandle: () => _.connection.fromHandle,
      dragThreshold: _.connectionDragThreshold,
      handleDomNode: L.currentTarget
    });
  }
  function A(L) {
    if (!y || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(L, { nodeId: y, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const X = _f(L.target), Y = d() ?? _.isValidConnection, { connectionMode: j, clickConnectStartHandle: q, flowId: ee, nodeLookup: te } = _, { connection: oe, isValid: M } = Zc.isValid(L, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: j,
      fromNodeId: q.nodeId,
      fromHandleId: q.id ?? null,
      fromType: q.type,
      isValidConnection: Y,
      flowId: ee,
      doc: X,
      lib: "svelte",
      nodeLookup: te
    });
    M && oe && H(oe);
    const re = structuredClone(jl(_.connection));
    delete re.inProgress, re.toPosition = re.toHandle ? re.toHandle.position : null, _.onclickconnectend?.(L, re), _.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(L = null) {
      n(L), p();
    },
    get type() {
      return r();
    },
    set type(L = "source") {
      r(L), p();
    },
    get position() {
      return o();
    },
    set position(L = Pe.Top) {
      o(L), p();
    },
    get style() {
      return i();
    },
    set style(L) {
      i(L), p();
    },
    get class() {
      return s();
    },
    set class(L) {
      s(L), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(L) {
      a(L), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(L = !0) {
      l(L), p();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(L = !0) {
      u(L), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(L) {
      d(L), p();
    },
    get onconnect() {
      return h();
    },
    set onconnect(L) {
      h(L), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(L) {
      f(L), p();
    },
    get children() {
      return v();
    },
    set children(L) {
      v(L), p();
    }
  }, I = Q2(), U = () => {
  };
  nt(I, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${_.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      _.noDragClass,
      _.noPanClass,
      o(),
      s()
    ],
    onmousedown: E,
    ontouchstart: E,
    onclick: _.clickConnect ? A : void 0,
    onkeypress: U,
    style: i(),
    role: "button",
    "aria-label": c(k)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Sr]: {
      valid: c(S),
      connectingto: c(D),
      connectingfrom: c(B),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(W) || c(P)) && (c(W) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var G = Z(I);
  return Te(G, () => v() ?? Fe), K(I), T(t, I), ue(N);
}
ae(
  Ar,
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
var eb = /* @__PURE__ */ ne("<!> <!>", 1);
function pu(t, e) {
  le(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => Pe.Top), o = g(e, "sourcePosition", 23, () => Pe.Bottom);
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
    set targetPosition(d = Pe.Top) {
      r(d), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Pe.Bottom) {
      o(d), p();
    }
  }, s = eb(), a = Q(s);
  Ar(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), u = V(l);
  return Ar(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ae(() => ft(l, ` ${n()?.label ?? ""} `)), T(t, s), ue(i);
}
ae(pu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var tb = /* @__PURE__ */ ne(" <!>", 1);
function Bf(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => Pe.Bottom);
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
    set sourcePosition(l = Pe.Bottom) {
      r(l), p();
    }
  };
  Ee();
  var i = tb(), s = Q(i), a = V(s);
  return Ar(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ae(() => ft(s, `${n()?.label ?? ""} `)), T(t, i), ue(o);
}
ae(Bf, { data: {}, sourcePosition: {} }, [], [], !0);
var nb = /* @__PURE__ */ ne(" <!>", 1);
function jf(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => Pe.Top);
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
    set targetPosition(l = Pe.Top) {
      r(l), p();
    }
  };
  Ee();
  var i = nb(), s = Q(i), a = V(s);
  return Ar(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ae(() => ft(s, `${n()?.label ?? ""} `)), T(t, i), ue(o);
}
ae(jf, { data: {}, targetPosition: {} }, [], [], !0);
function Ff(t, e) {
}
ae(Ff, {}, [], [], !0);
function Va(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function Kf(t, e) {
  const n = /* @__PURE__ */ $(Ln), r = /* @__PURE__ */ $(() => c(n).domNode);
  let o;
  return c(r) ? Va(t, c(r), e) : o = so(() => {
    Be(() => {
      Va(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      Va(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function Wf() {
  let t = /* @__PURE__ */ we(typeof window > "u");
  if (c(t)) {
    const e = so(() => {
      Be(() => {
        F(t, !1), e?.();
      });
    });
  }
  return {
    get value() {
      return c(t);
    }
  };
}
const Yc = (t) => e2(t), rb = (t) => wf(t);
function Yn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Ms = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var ob = /* @__PURE__ */ ne("<div><!></div>");
const ib = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Zf(t, e) {
  le(e, !0), rt(t, ib);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ve(e, [
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
  const h = Ln(), f = wn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ $(() => h.visible.edges.get(f)?.zIndex);
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
  }, y = ob(), w = () => {
    s() && h.handleEdgeSelection(f);
  };
  nt(
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
      [Rn]: x
    }),
    [
      () => ({
        display: Wf().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Yn(o()),
        height: Yn(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = Z(y);
  return Te(b, () => u() ?? Fe), K(y), Rt(y, (x, _) => Kf?.(x, _), () => "edge-labels"), T(t, y), ue(m);
}
ae(
  Zf,
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
var sb = /* @__PURE__ */ $e("<path></path>"), ab = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function Li(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), f = g(e, "class", 7), v = /* @__PURE__ */ Ve(e, [
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
    set id(C) {
      n(C), p();
    },
    get path() {
      return r();
    },
    set path(C) {
      r(C), p();
    },
    get label() {
      return o();
    },
    set label(C) {
      o(C), p();
    },
    get labelX() {
      return i();
    },
    set labelX(C) {
      i(C), p();
    },
    get labelY() {
      return s();
    },
    set labelY(C) {
      s(C), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), p();
    },
    get style() {
      return d();
    },
    set style(C) {
      d(C), p();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(C = 20) {
      h(C), p();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), p();
    }
  }, y = ab(), w = Q(y), b = V(w);
  {
    var x = (C) => {
      var O = sb();
      nt(O, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), T(C, O);
    };
    se(b, (C) => {
      h() > 0 && C(x);
    });
  }
  var _ = V(b);
  {
    var k = (C) => {
      Zf(C, {
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
        children: (O, z) => {
          Ee();
          var W = He();
          Ae(() => ft(W, o())), T(O, W);
        },
        $$slots: { default: !0 }
      });
    };
    se(_, (C) => {
      o() && C(k);
    });
  }
  return Ae(() => {
    Oe(w, "id", n()), Oe(w, "d", r()), sn(w, 0, Cr(["svelte-flow__edge-path", f()])), Oe(w, "marker-start", l()), Oe(w, "marker-end", u()), Vt(w, d());
  }), T(t, y), ue(m);
}
ae(
  Li,
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
function gu(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), f = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ $(() => Of({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ $(() => Lo(c(w), 3)), x = /* @__PURE__ */ $(() => c(b)[0]), _ = /* @__PURE__ */ $(() => c(b)[1]), k = /* @__PURE__ */ $(() => c(b)[2]);
  var C = {
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
  return Li(t, {
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
      return f();
    }
  }), ue(C);
}
ae(
  gu,
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
function qf(t, e) {
  le(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), f = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ $(() => cu({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ $(() => Lo(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), x = /* @__PURE__ */ $(() => c(y)[2]);
  var _ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), p();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), p();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), p();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), p();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), p();
    },
    get sourceX() {
      return u();
    },
    set sourceX(k) {
      u(k), p();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), p();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(k) {
      h(k), p();
    },
    get targetX() {
      return f();
    },
    set targetX(k) {
      f(k), p();
    },
    get targetY() {
      return v();
    },
    set targetY(k) {
      v(k), p();
    }
  };
  return Li(t, {
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
  }), ue(_);
}
ae(
  qf,
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
function Yf(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), f = /* @__PURE__ */ $(() => Nf({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ $(() => Lo(c(f), 3)), m = /* @__PURE__ */ $(() => c(v)[0]), y = /* @__PURE__ */ $(() => c(v)[1]), w = /* @__PURE__ */ $(() => c(v)[2]);
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
  return Li(t, {
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
ae(
  Yf,
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
function Xf(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), f = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ $(() => cu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ $(() => Lo(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), x = /* @__PURE__ */ $(() => c(y)[2]);
  var _ = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), p();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), p();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), p();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), p();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), p();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(k) {
      u(k), p();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), p();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(k) {
      h(k), p();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(k) {
      f(k), p();
    },
    get style() {
      return v();
    },
    set style(k) {
      v(k), p();
    }
  };
  return Li(t, {
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
  }), ue(_);
}
ae(
  Xf,
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
class lb extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ we(0);
  #n = /* @__PURE__ */ we(0);
  #r = dr || -1;
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
    return dr === this.#r ? /* @__PURE__ */ we(e) : pr(e);
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
      o = this.#o(0), r.set(e, o), F(this.#n, super.size), In(a);
    else if (i !== n) {
      In(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && In(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), F(this.#n, super.size), F(r, -1), In(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      F(this.#n, 0);
      for (var n of e.values())
        F(n, -1);
      In(this.#t), e.clear();
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
class ub {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = io(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const cb = /\(.+\)/, db = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Uf extends ub {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = cb.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => db.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => kt(o, "change", i)
    );
  }
}
function hb(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return lu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Xc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: x } = t;
      if (p2({
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
    const m = x2({
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
      zIndex: f2({
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
const Jf = {
  input: Bf,
  output: jf,
  default: pu,
  group: Ff
}, Gf = {
  straight: Yf,
  smoothstep: qf,
  default: gu,
  step: Xf
};
function fb(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = Ai(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return uu(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function pb(t) {
  class e {
    #e = /* @__PURE__ */ $(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      F(this.#e, r);
    }
    #t = /* @__PURE__ */ we(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      F(this.#t, r);
    }
    #n = /* @__PURE__ */ we(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      F(this.#n, r);
    }
    #r = /* @__PURE__ */ we(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      F(this.#r, r);
    }
    #o = /* @__PURE__ */ we(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      F(this.#o, r);
    }
    #i = /* @__PURE__ */ $(() => {
      const r = P2(t.nodes, this.nodeLookup, this.parentLookup, {
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
      F(this.#i, r);
    }
    #a = /* @__PURE__ */ $(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      F(this.#a, r);
    }
    #s = /* @__PURE__ */ $(() => (M2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      F(this.#s, r);
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
    #l = /* @__PURE__ */ $(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      F(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ $(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      F(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ $(() => {
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
        h = hb(s, b, y, w), f = Xc({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = Xc(v);
      return { nodes: h, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      F(this.#c, r);
    }
    #d = /* @__PURE__ */ $(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      F(this.#d, r);
    }
    #h = /* @__PURE__ */ $(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      F(this.#h, r);
    }
    #p = /* @__PURE__ */ $(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      F(this.#p, r);
    }
    #f = /* @__PURE__ */ $(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#f);
    }
    set nodesFocusable(r) {
      F(this.#f, r);
    }
    #y = /* @__PURE__ */ $(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      F(this.#y, r);
    }
    #v = /* @__PURE__ */ $(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      F(this.#v, r);
    }
    #w = /* @__PURE__ */ $(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      F(this.#w, r);
    }
    #m = /* @__PURE__ */ $(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      F(this.#m, r);
    }
    #g = /* @__PURE__ */ $(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      F(this.#g, r);
    }
    #b = /* @__PURE__ */ $(() => t.props.nodeExtent ?? sl);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      F(this.#b, r);
    }
    #x = /* @__PURE__ */ $(() => t.props.translateExtent ?? sl);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      F(this.#x, r);
    }
    #C = /* @__PURE__ */ $(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      F(this.#C, r);
    }
    #k = /* @__PURE__ */ $(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      F(this.#k, r);
    }
    #$ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      F(this.#$, r);
    }
    #S = /* @__PURE__ */ $(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      F(this.#S, r);
    }
    #_ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      F(this.#_, r);
    }
    #E = /* @__PURE__ */ $(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      F(this.#E, r);
    }
    #P = /* @__PURE__ */ $(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      F(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ $(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#O);
    }
    set snapGrid(r) {
      F(this.#O, r);
    }
    #T = /* @__PURE__ */ we(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      F(this.#T, r);
    }
    #N = /* @__PURE__ */ we(null);
    get selectionRect() {
      return c(this.#N);
    }
    set selectionRect(r) {
      F(this.#N, r);
    }
    #A = /* @__PURE__ */ we(!1);
    get selectionKeyPressed() {
      return c(this.#A);
    }
    set selectionKeyPressed(r) {
      F(this.#A, r);
    }
    #D = /* @__PURE__ */ we(!1);
    get multiselectionKeyPressed() {
      return c(this.#D);
    }
    set multiselectionKeyPressed(r) {
      F(this.#D, r);
    }
    #M = /* @__PURE__ */ we(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      F(this.#M, r);
    }
    #L = /* @__PURE__ */ we(!1);
    get panActivationKeyPressed() {
      return c(this.#L);
    }
    set panActivationKeyPressed(r) {
      F(this.#L, r);
    }
    #H = /* @__PURE__ */ we(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      F(this.#H, r);
    }
    #z = /* @__PURE__ */ we(null);
    get selectionRectMode() {
      return c(this.#z);
    }
    set selectionRectMode(r) {
      F(this.#z, r);
    }
    #V = /* @__PURE__ */ we("");
    get ariaLiveMessage() {
      return c(this.#V);
    }
    set ariaLiveMessage(r) {
      F(this.#V, r);
    }
    #I = /* @__PURE__ */ $(() => t.props.selectionMode ?? Ns.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      F(this.#I, r);
    }
    #R = /* @__PURE__ */ $(() => ({ ...Jf, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      F(this.#R, r);
    }
    #B = /* @__PURE__ */ $(() => ({ ...Gf, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      F(this.#B, r);
    }
    #j = /* @__PURE__ */ $(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#j);
    }
    set noPanClass(r) {
      F(this.#j, r);
    }
    #F = /* @__PURE__ */ $(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#F);
    }
    set noDragClass(r) {
      F(this.#F, r);
    }
    #K = /* @__PURE__ */ $(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#K);
    }
    set noWheelClass(r) {
      F(this.#K, r);
    }
    #W = /* @__PURE__ */ $(() => c2(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      F(this.#W, r);
    }
    #Z = /* @__PURE__ */ we(fb(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Z);
    }
    set _viewport(r) {
      F(this.#Z, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ we(
      // _connection is viewport independent and originating from XYHandle
      al
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      F(this.#q, r);
    }
    #Y = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: Mi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#Y);
    }
    set connection(r) {
      F(this.#Y, r);
    }
    #X = /* @__PURE__ */ $(() => t.props.connectionMode ?? Oo.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      F(this.#X, r);
    }
    #U = /* @__PURE__ */ $(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      F(this.#U, r);
    }
    #J = /* @__PURE__ */ $(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      F(this.#J, r);
    }
    #G = /* @__PURE__ */ $(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      F(this.#G, r);
    }
    #Q = /* @__PURE__ */ $(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      F(this.#Q, r);
    }
    #ee = /* @__PURE__ */ $(() => C2(t.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      F(this.#ee, r);
    }
    #te = /* @__PURE__ */ $(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      F(this.#te, r);
    }
    #ne = /* @__PURE__ */ $(() => t.props.onflowerror ?? s2);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      F(this.#ne, r);
    }
    #re = /* @__PURE__ */ $(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      F(this.#re, r);
    }
    #oe = /* @__PURE__ */ $(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      F(this.#oe, r);
    }
    #ie = /* @__PURE__ */ $(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      F(this.#ie, r);
    }
    #se = /* @__PURE__ */ $(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      F(this.#se, r);
    }
    #ae = /* @__PURE__ */ $(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      F(this.#ae, r);
    }
    #le = /* @__PURE__ */ $(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      F(this.#le, r);
    }
    #ue = /* @__PURE__ */ $(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      F(this.#ue, r);
    }
    #ce = /* @__PURE__ */ $(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      F(this.#ce, r);
    }
    #de = /* @__PURE__ */ $(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      F(this.#de, r);
    }
    #he = /* @__PURE__ */ $(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      F(this.#he, r);
    }
    #fe = /* @__PURE__ */ $(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      F(this.#fe, r);
    }
    #pe = /* @__PURE__ */ $(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      F(this.#pe, r);
    }
    #ge = /* @__PURE__ */ $(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      F(this.#ge, r);
    }
    #ve = /* @__PURE__ */ we(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      F(this.#ve, r);
    }
    #me = /* @__PURE__ */ $(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      F(this.#me, r);
    }
    #ye = /* @__PURE__ */ $(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      F(this.#ye, r);
    }
    #we = /* @__PURE__ */ $(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      F(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await o2(
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
    _prefersDark = new Uf("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ $(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      F(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = al, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Ln() {
  const t = wn(Ls);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const Ls = Symbol();
function Qf(t) {
  const e = pb(t);
  function n(D) {
    e.nodeTypes = {
      ...Jf,
      ...D
    };
  }
  function r(D) {
    e.edgeTypes = {
      ...Gf,
      ...D
    };
  }
  function o(D) {
    e.edges = m2(D, e.edges);
  }
  const i = (D, P = !1) => {
    e.nodes = e.nodes.map((S) => {
      const H = D.get(S.id);
      return H ? { ...S, position: H.position, dragging: P } : S;
    });
  };
  function s(D) {
    const { changes: P, updatedInternals: S } = A2(D, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!S)
      return;
    _2(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const H = /* @__PURE__ */ new Map();
    for (const E of P) {
      const A = e.nodeLookup.get(E.id)?.internals.userNode;
      if (!A)
        continue;
      const N = { ...A };
      switch (E.type) {
        case "dimensions": {
          const I = { ...N.measured, ...E.dimensions };
          E.setAttributes && (N.width = E.dimensions?.width ?? N.width, N.height = E.dimensions?.height ?? N.height), N.measured = I;
          break;
        }
        case "position":
          N.position = E.position ?? N.position;
          break;
      }
      H.set(E.id, N);
    }
    e.nodes = e.nodes.map((E) => H.get(E.id) ?? E);
  }
  function a(D) {
    const P = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = D, e.fitViewResolver = P, e.nodes = [...e.nodes], P.promise;
  }
  async function l(D, P, S) {
    const H = typeof S?.zoom < "u" ? S.zoom : e.maxZoom, E = e.panZoom;
    return E ? (await E.setViewport({
      x: e.width / 2 - D * H,
      y: e.height / 2 - P * H,
      zoom: H
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(D, P) {
    const S = e.panZoom;
    return S ? S.scaleBy(D, P) : Promise.resolve(!1);
  }
  function d(D) {
    return u(1.2, D);
  }
  function h(D) {
    return u(1 / 1.2, D);
  }
  function f(D) {
    const P = e.panZoom;
    P && (P.setScaleExtent([D, e.maxZoom]), e.minZoom = D);
  }
  function v(D) {
    const P = e.panZoom;
    P && (P.setScaleExtent([e.minZoom, D]), e.maxZoom = D);
  }
  function m(D) {
    const P = e.panZoom;
    P && (P.setTranslateExtent(D), e.translateExtent = D);
  }
  function y(D, P = null) {
    let S = !1;
    const H = D.map((E) => (!P || P.has(E.id)) && E.selected ? (S = !0, { ...E, selected: !1 }) : E);
    return [S, H];
  }
  function w(D) {
    const P = D?.nodes ? new Set(D.nodes.map((I) => I.id)) : null, [S, H] = y(e.nodes, P);
    S && (e.nodes = H);
    const E = D?.edges ? new Set(D.edges.map((I) => I.id)) : null, [A, N] = y(e.edges, E);
    A && (e.edges = N);
  }
  function b(D) {
    const P = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((S) => {
      const H = D.includes(S.id), E = P && S.selected || H;
      return !!S.selected !== E ? { ...S, selected: E } : S;
    }), P || w({ nodes: [] });
  }
  function x(D) {
    const P = e.multiselectionKeyPressed;
    e.edges = e.edges.map((S) => {
      const H = D.includes(S.id), E = P && S.selected || H;
      return !!S.selected !== E ? { ...S, selected: E } : S;
    }), P || w({ edges: [] });
  }
  function _(D, P, S) {
    const H = e.nodeLookup.get(D);
    if (!H) {
      console.warn("012", pi.error012(D));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, H.selected ? (P || H.selected && e.multiselectionKeyPressed) && (w({ nodes: [H], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([D]);
  }
  function k(D) {
    const P = e.edgeLookup.get(D);
    if (!P) {
      console.warn("012", pi.error012(D));
      return;
    }
    (P.selectable || e.elementsSelectable && typeof P.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, P.selected ? P.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [P] }) : x([D]));
  }
  function C(D, P) {
    const { nodeExtent: S, snapGrid: H, nodeOrigin: E, nodeLookup: A, nodesDraggable: N, onerror: I } = e, U = /* @__PURE__ */ new Map(), G = H?.[0] ?? 5, L = H?.[1] ?? 5, X = D.x * G * P, Y = D.y * L * P;
    for (const j of A.values()) {
      if (!(j.selected && (j.draggable || N && typeof j.draggable > "u")))
        continue;
      let q = {
        x: j.internals.positionAbsolute.x + X,
        y: j.internals.positionAbsolute.y + Y
      };
      H && (q = Di(q, H));
      const { position: ee, positionAbsolute: te } = bf({
        nodeId: j.id,
        nextPosition: q,
        nodeLookup: A,
        nodeExtent: S,
        nodeOrigin: E,
        onError: I
      });
      j.position = ee, j.internals.positionAbsolute = te, U.set(j.id, j);
    }
    i(U);
  }
  function O(D) {
    return D2({
      delta: D,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const z = (D) => {
    e._connection = { ...D };
  };
  function W() {
    e._connection = al;
  }
  function B() {
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
    handleNodeSelection: _,
    handleEdgeSelection: k,
    moveSelectedNodes: C,
    panBy: O,
    updateConnection: z,
    cancelConnection: W,
    reset: B
  });
}
function gb(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, f = G2({
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
var vb = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function ep(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), f = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), x = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ $(() => n().panActivationKeyPressed || u());
  const { viewport: k } = n();
  let C = !1;
  Be(() => {
    !C && n().viewportInitialized && (w()?.(), C = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(B) {
      n(B), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(B) {
      r(B), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(B) {
      o(B), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(B) {
      i(B), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(B) {
      s(B), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(B) {
      a(B), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(B) {
      l(B), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(B) {
      u(B), p();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(B) {
      d(B), p();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(B) {
      h(B), p();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(B) {
      f(B), p();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(B) {
      v(B), p();
    },
    get onmove() {
      return m();
    },
    set onmove(B) {
      m(B), p();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(B) {
      y(B), p();
    },
    get oninit() {
      return w();
    },
    set oninit(B) {
      w(B), p();
    },
    get children() {
      return b();
    },
    set children(B) {
      b(B), p();
    }
  }, z = vb(), W = Z(z);
  return Te(W, b), K(z), Rt(z, (B, D) => gb?.(B, D), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: k,
    onDraggingChange: (B) => {
      n(n().dragging = B, !0);
    },
    setPanZoomInstance: (B) => {
      n(n().panZoom = B, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
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
    paneClickDistance: h(),
    selectionOnDrag: f(),
    onTransformChange: (B) => {
      n(n().viewport = { x: B[0], y: B[1], zoom: B[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), T(t, z), ue(O);
}
ae(
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
function Uc(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function Jc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Gc(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var mb = /* @__PURE__ */ ne("<div><!></div>");
function tp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, f = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ $(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ $(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), x = !1;
  function _(A) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const N = A.target === h, I = !N && !!A.target.closest(".nokey"), U = i() && N || n().selectionKeyPressed;
    if (I || !c(w) || !U || A.button !== 0 || !A.isPrimary)
      return;
    A.target?.setPointerCapture?.(A.pointerId), x = !1;
    const { x: G, y: L } = En(A, f);
    n(n().selectionRect = { width: 0, height: 0, startX: G, startY: L, x: G, y: L }, !0), N || (A.stopPropagation(), A.preventDefault());
  }
  function k(A) {
    if (!c(w) || !f || !n().selectionRect)
      return;
    const N = En(A, f), { startX: I = 0, startY: U = 0 } = n().selectionRect;
    if (!x) {
      const j = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(N.x - I, N.y - U) <= j)
        return;
      n().unselectNodesAndEdges(), l()?.(A);
    }
    x = !0;
    const G = {
      ...n().selectionRect,
      x: N.x < I ? N.x : I,
      y: N.y < U ? N.y : U,
      width: Math.abs(N.x - I),
      height: Math.abs(N.y - U)
    }, L = v, X = m;
    v = new Set(lu(
      n().nodeLookup,
      G,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Ns.Partial,
      !0
    ).map((j) => j.id));
    const Y = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const j of v) {
      const q = n().connectionLookup.get(j);
      if (q)
        for (const { edgeId: ee } of q.values()) {
          const te = n().edgeLookup.get(ee);
          te && (te.selectable ?? Y) && m.add(ee);
        }
    }
    Gc(L, v) || n(n().nodes = n().nodes.map(Jc(v)), !0), Gc(X, m) || n(n().edges = n().edges.map(Jc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = G, !0);
  }
  function C(A) {
    A.button === 0 && (A.target?.releasePointerCapture?.(A.pointerId), !x && A.target === h && W?.(A), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), x && u()?.(A));
  }
  const O = (A) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      A.preventDefault();
      return;
    }
    a()?.({ event: A });
  }, z = (A) => {
    x && (A.stopPropagation(), x = !1);
  };
  function W(A) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: A }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var B = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(A = !0) {
      r(A), p();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(A = 1) {
      o(A), p();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(A) {
      i(A), p();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(A) {
      s(A), p();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(A) {
      a(A), p();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(A) {
      l(A), p();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(A) {
      u(A), p();
    },
    get children() {
      return d();
    },
    set children(A) {
      d(A), p();
    }
  }, D = mb();
  let P;
  var S = /* @__PURE__ */ $(() => c(b) ? void 0 : Uc(W, h));
  D.__click = function(...A) {
    c(S)?.apply(this, A);
  }, D.__pointermove = function(...A) {
    (c(b) ? k : void 0)?.apply(this, A);
  }, D.__pointerup = function(...A) {
    (c(b) ? C : void 0)?.apply(this, A);
  };
  var H = /* @__PURE__ */ $(() => Uc(O, h));
  D.__contextmenu = function(...A) {
    c(H)?.apply(this, A);
  };
  var E = Z(D);
  return Te(E, d), K(D), It(D, (A) => h = A, () => h), Ae((A) => P = sn(D, 1, "svelte-flow__pane svelte-flow__container", null, P, A), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), Cs(
    "pointerdown",
    D,
    function(...A) {
      (c(b) ? _ : void 0)?.apply(this, A);
    },
    !0
  ), Cs(
    "click",
    D,
    function(...A) {
      (c(b) ? z : void 0)?.apply(this, A);
    },
    !0
  ), T(t, D), ue(B);
}
uo(["click", "pointermove", "pointerup", "contextmenu"]);
ae(
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
var yb = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function np(t, e) {
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
  }, i = yb();
  let s;
  var a = Z(i);
  return Te(a, r), K(i), Ae(() => s = Vt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), T(t, i), ue(o);
}
ae(np, { store: {}, children: {} }, [], [], !0);
function rp(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = V2({
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
var wb = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), bb = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const xb = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function op(t, e) {
  le(e, !0), rt(t, xb);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), p();
    }
  }, o = bb(), i = Q(o), s = Z(i, !0);
  K(i);
  var a = V(i, 2), l = Z(a, !0);
  K(a);
  var u = V(a, 2);
  {
    var d = (h) => {
      var f = wb(), v = Z(f, !0);
      K(f), Ae(() => {
        Oe(f, "id", `${Cb}-${n().flowId}`), ft(v, n().ariaLiveMessage);
      }), T(h, f);
    };
    se(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ae(() => {
    Oe(i, "id", `${ip}-${n().flowId}`), ft(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Oe(a, "id", `${sp}-${n().flowId}`), ft(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), T(t, o), ue(r);
}
ae(op, { store: {} }, [], [], !0);
const ip = "svelte-flow__node-desc", sp = "svelte-flow__edge-desc", Cb = "svelte-flow__aria-live";
var kb = /* @__PURE__ */ ne("<div><!></div>");
function ap(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), f = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ $(() => Zt(r().data, () => ({}), !0)), y = /* @__PURE__ */ $(() => Zt(r().selected, !1)), w = /* @__PURE__ */ $(() => r().draggable), b = /* @__PURE__ */ $(() => r().selectable), x = /* @__PURE__ */ $(() => Zt(r().deletable, !0)), _ = /* @__PURE__ */ $(() => r().connectable), k = /* @__PURE__ */ $(() => r().focusable), C = /* @__PURE__ */ $(() => Zt(r().hidden, !1)), O = /* @__PURE__ */ $(() => Zt(r().dragging, !1)), z = /* @__PURE__ */ $(() => Zt(r().style, "")), W = /* @__PURE__ */ $(() => r().class), B = /* @__PURE__ */ $(() => Zt(r().type, "default")), D = /* @__PURE__ */ $(() => r().parentId), P = /* @__PURE__ */ $(() => r().sourcePosition), S = /* @__PURE__ */ $(() => r().targetPosition), H = /* @__PURE__ */ $(() => Zt(r().measured, () => ({ width: 0, height: 0 }), !0).width), E = /* @__PURE__ */ $(() => Zt(r().measured, () => ({ width: 0, height: 0 }), !0).height), A = /* @__PURE__ */ $(() => r().initialWidth), N = /* @__PURE__ */ $(() => r().initialHeight), I = /* @__PURE__ */ $(() => r().width), U = /* @__PURE__ */ $(() => r().height), G = /* @__PURE__ */ $(() => r().dragHandle), L = /* @__PURE__ */ $(() => Zt(r().internals.z, 0)), X = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), Y = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), j = /* @__PURE__ */ $(() => r().internals.userNode), { id: q } = r(), ee = /* @__PURE__ */ $(() => c(w) ?? n().nodesDraggable), te = /* @__PURE__ */ $(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ $(() => c(_) ?? n().nodesConnectable), M = /* @__PURE__ */ $(() => $f(r())), re = /* @__PURE__ */ $(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ $(() => c(M) && c(re)), pe = /* @__PURE__ */ $(() => c(k) ?? n().nodesFocusable);
  function ie(ye) {
    return n().parentLookup.has(ye);
  }
  let ce = /* @__PURE__ */ $(() => ie(q)), me = /* @__PURE__ */ we(null), be = null, xe = c(B), he = c(P), Ce = c(S), De = /* @__PURE__ */ $(() => n().nodeTypes[c(B)] ?? pu), J = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  Jr("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), Jr("svelteflow__node_id", q);
  let Ie = /* @__PURE__ */ $(() => {
    const ye = c(H) === void 0 ? c(I) ?? c(A) : c(I), Ne = c(E) === void 0 ? c(U) ?? c(N) : c(U);
    if (!(ye === void 0 && Ne === void 0 && c(z) === void 0))
      return `${c(z)};${ye ? `width:${Yn(ye)};` : ""}${Ne ? `height:${Yn(Ne)};` : ""}`;
  });
  Be(() => {
    (c(B) !== xe || c(P) !== he || c(S) !== Ce) && c(me) !== null && requestAnimationFrame(() => {
      c(me) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[q, { id: q, nodeElement: c(me), force: !0 }]]));
    }), xe = c(B), he = c(P), Ce = c(S);
  }), Be(() => {
    o() && (!c(ge) || c(me) !== be) && (be && o().unobserve(be), c(me) && o().observe(c(me)), be = c(me));
  }), Pi(() => {
    be && o()?.unobserve(be);
  });
  function Se(ye) {
    c(te) && (!n().selectNodesOnDrag || !c(ee) || n().nodeDragThreshold > 0) && n().handleNodeSelection(q), s()?.({ node: c(j), event: ye });
  }
  function Me(ye) {
    if (!(Ef(ye) || n().disableKeyboardA11y))
      if (yf.includes(ye.key) && c(te)) {
        const Ne = ye.key === "Escape";
        n().handleNodeSelection(q, Ne, c(me));
      } else c(ee) && r().selected && Object.prototype.hasOwnProperty.call(Ms, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(J)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Ms[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Re = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(me)?.matches(":focus-visible"))
      return;
    const { width: ye, height: Ne, viewport: at } = n();
    lu(/* @__PURE__ */ new Map([[q, r()]]), { x: 0, y: 0, width: ye, height: Ne }, [at.x, at.y, at.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: at.zoom });
  };
  var Ge = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), p();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), p();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), p();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ye) {
      h(ye), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ye) {
      f(ye), p();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(ye) {
      v(ye), p();
    }
  }, st = de(), it = Q(st);
  {
    var ct = (ye) => {
      var Ne = kb();
      nt(Ne, () => ({
        "data-id": q,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(B)}`,
          c(W)
        ],
        style: c(Ie),
        onclick: Se,
        onpointerenter: d() ? (We) => d()({ node: c(j), event: We }) : void 0,
        onpointerleave: h() ? (We) => h()({ node: c(j), event: We }) : void 0,
        onpointermove: f() ? (We) => f()({ node: c(j), event: We }) : void 0,
        oncontextmenu: v() ? (We) => v()({ node: c(j), event: We }) : void 0,
        onkeydown: c(pe) ? Me : void 0,
        onfocus: c(pe) ? Re : void 0,
        tabIndex: c(pe) ? 0 : void 0,
        role: r().ariaRole ?? (c(pe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${ip}-${n().flowId}`,
        ...r().domAttributes,
        [Sr]: {
          dragging: c(O),
          selected: c(y),
          draggable: c(ee),
          connectable: c(oe),
          selectable: c(te),
          nopan: c(ee),
          parent: c(ce)
        },
        [Rn]: {
          "z-index": c(L),
          transform: `translate(${c(X) ?? ""}px, ${c(Y) ?? ""}px)`,
          visibility: c(M) ? "visible" : "hidden"
        }
      }));
      var at = Z(Ne);
      At(at, () => c(De), (We, pt) => {
        pt(We, {
          get data() {
            return c(m);
          },
          get id() {
            return q;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(te);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(P);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(L);
          },
          get dragging() {
            return c(O);
          },
          get draggable() {
            return c(ee);
          },
          get dragHandle() {
            return c(G);
          },
          get parentId() {
            return c(D);
          },
          get type() {
            return c(B);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(Y);
          },
          get width() {
            return c(I);
          },
          get height() {
            return c(U);
          }
        });
      }), K(Ne), Rt(Ne, (We, pt) => rp?.(We, pt), () => ({
        nodeId: q,
        isSelectable: c(te),
        disabled: !c(ee),
        handleSelector: c(G),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (We, pt, Lt, lt) => {
          a()?.({ event: We, targetNode: Lt, nodes: lt });
        },
        onDragStart: (We, pt, Lt, lt) => {
          l()?.({ event: We, targetNode: Lt, nodes: lt });
        },
        onDragStop: (We, pt, Lt, lt) => {
          u()?.({ event: We, targetNode: Lt, nodes: lt });
        },
        store: n()
      })), It(Ne, (We) => F(me, We), () => c(me)), T(ye, Ne);
    };
    se(it, (ye) => {
      c(C) || ye(ct);
    });
  }
  return T(t, st), ue(Ge);
}
ae(
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
var $b = /* @__PURE__ */ ne('<div class="svelte-flow__nodes"></div>');
function lp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      w.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Pi(() => {
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
  }, m = $b();
  return Ot(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    ap(y, {
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
  }), K(m), T(t, m), ue(v);
}
ae(
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
var Sb = /* @__PURE__ */ $e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function up(t, e) {
  le(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), u = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), h = /* @__PURE__ */ $(() => n().sourceY), f = /* @__PURE__ */ $(() => n().targetX), v = /* @__PURE__ */ $(() => n().targetY), m = /* @__PURE__ */ $(() => n().sourcePosition), y = /* @__PURE__ */ $(() => n().targetPosition), w = /* @__PURE__ */ $(() => Zt(n().animated, !1)), b = /* @__PURE__ */ $(() => Zt(n().selected, !1)), x = /* @__PURE__ */ $(() => n().label), _ = /* @__PURE__ */ $(() => n().labelStyle), k = /* @__PURE__ */ $(() => Zt(n().data, () => ({}), !0)), C = /* @__PURE__ */ $(() => n().style), O = /* @__PURE__ */ $(() => n().interactionWidth), z = /* @__PURE__ */ $(() => Zt(n().type, "default")), W = /* @__PURE__ */ $(() => n().sourceHandle), B = /* @__PURE__ */ $(() => n().targetHandle), D = /* @__PURE__ */ $(() => n().markerStart), P = /* @__PURE__ */ $(() => n().markerEnd), S = /* @__PURE__ */ $(() => n().selectable), H = /* @__PURE__ */ $(() => n().focusable), E = /* @__PURE__ */ $(() => Zt(n().deletable, !0)), A = /* @__PURE__ */ $(() => n().hidden), N = /* @__PURE__ */ $(() => n().zIndex), I = /* @__PURE__ */ $(() => n().class), U = /* @__PURE__ */ $(() => n().ariaLabel), G = null;
  const { id: L } = n();
  Jr("svelteflow__edge_id", L);
  let X = /* @__PURE__ */ $(() => c(S) ?? r().elementsSelectable), Y = /* @__PURE__ */ $(() => c(H) ?? r().edgesFocusable), j = /* @__PURE__ */ $(() => r().edgeTypes[c(z)] ?? gu), q = /* @__PURE__ */ $(() => c(D) ? `url('#${ul(c(D), r().flowId)}')` : void 0), ee = /* @__PURE__ */ $(() => c(P) ? `url('#${ul(c(P), r().flowId)}')` : void 0);
  function te(ce) {
    const me = r().edgeLookup.get(L);
    me && (c(X) && r().handleEdgeSelection(L), o()?.({ event: ce, edge: me }));
  }
  function oe(ce, me) {
    const be = r().edgeLookup.get(L);
    be && me({ event: ce, edge: be });
  }
  function M(ce) {
    if (!r().disableKeyboardA11y && yf.includes(ce.key) && c(X)) {
      const { unselectNodesAndEdges: me, addSelectedEdges: be } = r();
      ce.key === "Escape" ? (G?.blur(), me({ edges: [n()] })) : be([L]);
    }
  }
  var re = {
    get edge() {
      return n();
    },
    set edge(ce) {
      n(ce), p();
    },
    get store() {
      return r();
    },
    set store(ce) {
      r(ce), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ce) {
      o(ce), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ce) {
      i(ce), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ce) {
      s(ce), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ce) {
      a(ce), p();
    }
  }, ge = de(), pe = Q(ge);
  {
    var ie = (ce) => {
      var me = Sb();
      let be;
      var xe = Z(me);
      nt(xe, () => ({
        class: ["svelte-flow__edge", c(I)],
        "data-id": L,
        onclick: te,
        oncontextmenu: i() ? (Ce) => {
          oe(Ce, i());
        } : void 0,
        onpointerenter: s() ? (Ce) => {
          oe(Ce, s());
        } : void 0,
        onpointerleave: a() ? (Ce) => {
          oe(Ce, a());
        } : void 0,
        "aria-label": c(U) === null ? void 0 : c(U) ? c(U) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(Y) ? `${sp}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(Y) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(Y) ? M : void 0,
        tabindex: c(Y) ? 0 : void 0,
        ...n().domAttributes,
        [Sr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(X)
        }
      }));
      var he = Z(xe);
      At(he, () => c(j), (Ce, De) => {
        De(Ce, {
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
            return c(_);
          },
          get data() {
            return c(k);
          },
          get style() {
            return c(C);
          },
          get interactionWidth() {
            return c(O);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(E);
          },
          get type() {
            return c(z);
          },
          get sourceHandleId() {
            return c(W);
          },
          get targetHandleId() {
            return c(B);
          },
          get markerStart() {
            return c(q);
          },
          get markerEnd() {
            return c(ee);
          }
        });
      }), K(xe), It(xe, (Ce) => G = Ce, () => G), K(me), Ae(() => be = Vt(me, "", be, { "z-index": c(N) })), T(ce, me);
    };
    se(pe, (ce) => {
      c(A) || ce(ie);
    });
  }
  return T(t, ge), ue(re);
}
ae(
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
h1();
var _b = /* @__PURE__ */ $e("<defs></defs>");
function cp(t, e) {
  le(e, !1);
  const n = Ln();
  Ql();
  var r = _b();
  Ot(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    dp(o, je(() => c(i)));
  }), K(r), T(t, r), ue();
}
ae(cp, {}, [], [], !0);
var Eb = /* @__PURE__ */ $e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Pb = /* @__PURE__ */ $e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Ob = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function dp(t, e) {
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
  }, h = Ob(), f = Z(h);
  {
    var v = (y) => {
      var w = Eb();
      let b;
      Ae(() => {
        Oe(w, "stroke-width", u()), b = Vt(w, "", b, { stroke: l() });
      }), T(y, w);
    }, m = (y) => {
      var w = de(), b = Q(w);
      {
        var x = (_) => {
          var k = Pb();
          let C;
          Ae(() => {
            Oe(k, "stroke-width", u()), C = Vt(k, "", C, { stroke: l(), fill: l() });
          }), T(_, k);
        };
        se(
          b,
          (_) => {
            r() === gi.ArrowClosed && _(x);
          },
          !0
        );
      }
      T(y, w);
    };
    se(f, (y) => {
      r() === gi.Arrow ? y(v) : y(m, !1);
    });
  }
  return K(h), Ae(() => {
    Oe(h, "id", n()), Oe(h, "markerWidth", `${o()}`), Oe(h, "markerHeight", `${i()}`), Oe(h, "markerUnits", s()), Oe(h, "orient", a());
  }), T(t, h), ue(d);
}
ae(
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
var Tb = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function hp(t, e) {
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
  }, l = Tb(), u = Z(l), d = Z(u);
  cp(d, {}), K(u);
  var h = V(u, 2);
  return Ot(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, v) => {
    up(f, {
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
  }), K(l), T(t, l), ue(a);
}
ae(
  hp,
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
var Nb = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const Ab = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function vu(t, e) {
  le(e, !0), rt(t, Ab);
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
  }, l = de(), u = Q(l);
  {
    var d = (h) => {
      var f = Nb();
      let v;
      Ae((m) => v = Vt(f, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Yn(o()),
          height: typeof i() == "string" ? i() : Yn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), T(h, f);
    };
    se(u, (h) => {
      s() && h(d);
    });
  }
  return T(t, l), ue(a);
}
ae(vu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Db = /* @__PURE__ */ ne("<div><!></div>");
const Mb = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function fp(t, e) {
  le(e, !0), rt(t, Mb);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ we(void 0);
  Be(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ $(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Ai(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter((_) => _.selected);
    a()?.({ nodes: x, event: b });
  }
  function h(b) {
    const x = n().nodes.filter((_) => _.selected);
    s()?.({ nodes: x, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(Ms, b.key) && (b.preventDefault(), n().moveSelectedNodes(Ms[b.key], b.shiftKey ? 4 : 1));
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
  }, m = de(), y = Q(m);
  {
    var w = (b) => {
      var x = Db();
      x.__contextmenu = d, x.__click = h, x.__keydown = function(...C) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, C);
      };
      let _;
      var k = Z(x);
      vu(k, { width: "100%", height: "100%", x: 0, y: 0 }), K(x), Rt(x, (C, O) => rp?.(C, O), () => ({
        disabled: !1,
        store: n(),
        onDrag: (C, O, z, W) => {
          r()?.({ event: C, targetNode: null, nodes: W });
        },
        onDragStart: (C, O, z, W) => {
          o()?.({ event: C, targetNode: null, nodes: W });
        },
        onDragStop: (C, O, z, W) => {
          i()?.({ event: C, targetNode: null, nodes: W });
        }
      })), It(x, (C) => F(l, C), () => c(l)), Ae(
        (C) => {
          sn(x, 1, Cr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Oe(x, "role", n().disableKeyboardA11y ? void 0 : "button"), Oe(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = Vt(x, "", _, C);
        },
        [
          () => ({
            width: Yn(c(u).width),
            height: Yn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), T(b, x);
    };
    se(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && ir(c(u).x) && ir(c(u).y) && b(w);
    });
  }
  return T(t, m), ue(v);
}
uo(["contextmenu", "click", "keydown"]);
ae(
  fp,
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
function Lb(t) {
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
function zn(t, e) {
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
          let _ = !1;
          for (const k of x)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (C, O) => C | Lb(O),
              0
            ) === u) {
              _ = !0;
              break;
            }
          if (!_) continue;
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
  return n && (s = kt(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = kt(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Tt() {
  const t = /* @__PURE__ */ $(Ln), e = (i) => {
    const s = Yc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? u2(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return No(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = vt(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Yc(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = vt(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && rb(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(t).nodes : Qc(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : Qc(c(t).edgeLookup, i),
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
    getViewport: () => jl(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = uu(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = Hc(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = No(h), v = vi(f, u);
        return s && v > 0 || v >= f.width * f.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Hc(i) ? i : e(i);
      if (!l)
        return !1;
      const u = vi(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await i2({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = vt(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = vt(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: f } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - f };
      return Mi(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ds(i, [s, a, l]);
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
    getNodesBounds: (i) => t2(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Qc(t, e) {
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
function pp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Wr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Wr() ? "Meta" : "Control"), { deleteElements: l } = Tt();
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
      const _ = h(x);
      return {
        key: _,
        modifier: d(x),
        enabled: _ !== null,
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
    set multiSelectionKey(w = Wr() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Wr() ? "Meta" : "Control") {
      a(w), p();
    }
  };
  return Cs("blur", Qt, v), Cs("contextmenu", Qt, v), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Ef(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Rt(Qt, (w, b) => zn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(y);
}
ae(
  pp,
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
var Hb = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__connection-path"></path>'), zb = /* @__PURE__ */ $e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function gp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ $(() => {
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
      case rr.Bezier: {
        const [v] = Of(f);
        return v;
      }
      case rr.Straight: {
        const [v] = Nf(f);
        return v;
      }
      case rr.Step:
      case rr.SmoothStep: {
        const [v] = cu({
          ...f,
          borderRadius: r() === rr.Step ? 0 : void 0
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
  }, u = de(), d = Q(u);
  {
    var h = (f) => {
      var v = zb(), m = Z(v), y = Z(m);
      {
        var w = (x) => {
          var _ = de(), k = Q(_);
          At(k, s, (C, O) => {
            O(C, {});
          }), T(x, _);
        }, b = (x) => {
          var _ = Hb();
          Ae(() => {
            Oe(_, "d", c(a)), Vt(_, i());
          }), T(x, _);
        };
        se(y, (x) => {
          s() ? x(w) : x(b, !1);
        });
      }
      K(m), K(v), Ae(
        (x) => {
          Oe(v, "width", n().width), Oe(v, "height", n().height), Vt(v, o()), sn(m, 0, x);
        },
        [
          () => Cr([
            "svelte-flow__connection",
            Qw(n().connection.isValid)
          ])
        ]
      ), T(f, v);
    };
    se(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return T(t, u), ue(l);
}
ae(
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
var Vb = /* @__PURE__ */ ne("<div><!></div>");
function Hi(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ $(() => `${n()}`.split("-"));
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
  }, u = Vb();
  nt(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Z(u);
  return Te(d, () => i() ?? Fe), K(u), T(t, u), ue(l);
}
ae(Hi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Ib = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function vp(t, e) {
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
  }, i = de(), s = Q(i);
  {
    var a = (l) => {
      Hi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = Ib();
          T(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    se(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return T(t, i), ue(o);
}
ae(vp, { proOptions: {}, position: {} }, [], [], !0);
var Rb = /* @__PURE__ */ ne("<div><!></div>");
const Bb = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function mp(t, e) {
  le(e, !0), rt(t, Bb);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ $(() => u().class), h = /* @__PURE__ */ $(() => I1(u(), [
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
  }, m = Rb();
  nt(
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
      [Rn]: w
    }),
    [
      () => ({ width: Yn(n()), height: Yn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = Z(m);
  return Te(y, () => l() ?? Fe), K(m), It(m, (w) => i(w), () => i()), hc(m, "clientHeight", a), hc(m, "clientWidth", s), T(t, m), ue(v);
}
ae(
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
var jb = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Fb = /* @__PURE__ */ ne("<!> <!>", 1), Kb = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function yp(t, e) {
  le(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), f = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), x = g(e, "onnodedrag", 7), _ = g(e, "onnodedragstart", 7), k = g(e, "onnodedragstop", 7), C = g(e, "onnodepointerenter", 7), O = g(e, "onnodepointermove", 7), z = g(e, "onnodepointerleave", 7), W = g(e, "onselectionclick", 7), B = g(e, "onselectioncontextmenu", 7), D = g(e, "onselectionstart", 7), P = g(e, "onselectionend", 7), S = g(e, "onedgeclick", 7), H = g(e, "onedgecontextmenu", 7), E = g(e, "onedgepointerenter", 7), A = g(e, "onedgepointerleave", 7), N = g(e, "onpaneclick", 7), I = g(e, "onpanecontextmenu", 7), U = g(e, "panOnScrollMode", 23, () => Xr.Free), G = g(e, "preventScrolling", 7, !0), L = g(e, "zoomOnScroll", 7, !0), X = g(e, "zoomOnDoubleClick", 7, !0), Y = g(e, "zoomOnPinch", 7, !0), j = g(e, "panOnScroll", 7, !1), q = g(e, "panOnScrollSpeed", 7, 0.5), ee = g(e, "panOnDrag", 7, !0), te = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), M = g(e, "connectionLineStyle", 7), re = g(e, "connectionLineContainerStyle", 7), ge = g(e, "connectionLineType", 23, () => rr.Bezier), pe = g(e, "attributionPosition", 7), ie = g(e, "children", 7), ce = g(e, "nodes", 31, () => Ct([])), me = g(e, "edges", 31, () => Ct([])), be = g(e, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ Ve(e, [
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
  ]), he = Qf({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return ce();
    },
    set nodes(J) {
      ce(J);
    },
    get edges() {
      return me();
    },
    set edges(J) {
      me(J);
    },
    get viewport() {
      return be();
    },
    set viewport(J) {
      be(J);
    }
  });
  const Ce = wn(Ls);
  Ce && Ce.setStore && Ce.setStore(he), Jr(Ls, {
    provider: !1,
    getStore() {
      return he;
    }
  }), Be(() => {
    const J = { nodes: he.selectedNodes, edges: he.selectedEdges };
    vt(() => e.onselectionchange)?.(J);
    for (const Ie of he.selectionChangeHandlers.values())
      Ie(J);
  }), Pi(() => {
    he.reset();
  });
  var De = {
    get width() {
      return n();
    },
    set width(J) {
      n(J), p();
    },
    get height() {
      return r();
    },
    set height(J) {
      r(J), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(J) {
      o(J), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(J) {
      i(J), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(J) {
      s(J), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(J) {
      a(J), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(J) {
      l(J), p();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(J) {
      u(J), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(J = 1) {
      d(J), p();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(J = 1) {
      h(J), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(J) {
      f(J), p();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(J) {
      v(J), p();
    },
    get onmove() {
      return m();
    },
    set onmove(J) {
      m(J), p();
    },
    get oninit() {
      return y();
    },
    set oninit(J) {
      y(J), p();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(J) {
      w(J), p();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(J) {
      b(J), p();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(J) {
      x(J), p();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(J) {
      _(J), p();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(J) {
      k(J), p();
    },
    get onnodepointerenter() {
      return C();
    },
    set onnodepointerenter(J) {
      C(J), p();
    },
    get onnodepointermove() {
      return O();
    },
    set onnodepointermove(J) {
      O(J), p();
    },
    get onnodepointerleave() {
      return z();
    },
    set onnodepointerleave(J) {
      z(J), p();
    },
    get onselectionclick() {
      return W();
    },
    set onselectionclick(J) {
      W(J), p();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(J) {
      B(J), p();
    },
    get onselectionstart() {
      return D();
    },
    set onselectionstart(J) {
      D(J), p();
    },
    get onselectionend() {
      return P();
    },
    set onselectionend(J) {
      P(J), p();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(J) {
      S(J), p();
    },
    get onedgecontextmenu() {
      return H();
    },
    set onedgecontextmenu(J) {
      H(J), p();
    },
    get onedgepointerenter() {
      return E();
    },
    set onedgepointerenter(J) {
      E(J), p();
    },
    get onedgepointerleave() {
      return A();
    },
    set onedgepointerleave(J) {
      A(J), p();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(J) {
      N(J), p();
    },
    get onpanecontextmenu() {
      return I();
    },
    set onpanecontextmenu(J) {
      I(J), p();
    },
    get panOnScrollMode() {
      return U();
    },
    set panOnScrollMode(J = Xr.Free) {
      U(J), p();
    },
    get preventScrolling() {
      return G();
    },
    set preventScrolling(J = !0) {
      G(J), p();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(J = !0) {
      L(J), p();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(J = !0) {
      X(J), p();
    },
    get zoomOnPinch() {
      return Y();
    },
    set zoomOnPinch(J = !0) {
      Y(J), p();
    },
    get panOnScroll() {
      return j();
    },
    set panOnScroll(J = !1) {
      j(J), p();
    },
    get panOnScrollSpeed() {
      return q();
    },
    set panOnScrollSpeed(J = 0.5) {
      q(J), p();
    },
    get panOnDrag() {
      return ee();
    },
    set panOnDrag(J = !0) {
      ee(J), p();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(J = !1) {
      te(J), p();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(J) {
      oe(J), p();
    },
    get connectionLineStyle() {
      return M();
    },
    set connectionLineStyle(J) {
      M(J), p();
    },
    get connectionLineContainerStyle() {
      return re();
    },
    set connectionLineContainerStyle(J) {
      re(J), p();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(J = rr.Bezier) {
      ge(J), p();
    },
    get attributionPosition() {
      return pe();
    },
    set attributionPosition(J) {
      pe(J), p();
    },
    get children() {
      return ie();
    },
    set children(J) {
      ie(J), p();
    },
    get nodes() {
      return ce();
    },
    set nodes(J = []) {
      ce(J), p();
    },
    get edges() {
      return me();
    },
    set edges(J = []) {
      me(J), p();
    },
    get viewport() {
      return be();
    },
    set viewport(J = void 0) {
      be(J), p();
    }
  };
  return mp(t, {
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
      return xe;
    },
    get domNode() {
      return he.domNode;
    },
    set domNode(J) {
      he.domNode = J;
    },
    get clientWidth() {
      return he.width;
    },
    set clientWidth(J) {
      he.width = J;
    },
    get clientHeight() {
      return he.height;
    },
    set clientHeight(J) {
      he.height = J;
    },
    children: (J, Ie) => {
      var Se = Kb(), Me = Q(Se);
      pp(Me, {
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
        set store(ct) {
          he = ct;
        }
      });
      var Re = V(Me, 2);
      ep(Re, {
        get panOnScrollMode() {
          return U();
        },
        get preventScrolling() {
          return G();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return Y();
        },
        get panOnScroll() {
          return j();
        },
        get panOnScrollSpeed() {
          return q();
        },
        get panOnDrag() {
          return ee();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return te();
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
        set store(ct) {
          he = ct;
        },
        children: (ct, ye) => {
          tp(ct, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return I();
            },
            get onselectionstart() {
              return D();
            },
            get onselectionend() {
              return P();
            },
            get panOnDrag() {
              return ee();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return te();
            },
            get store() {
              return he;
            },
            set store(Ne) {
              he = Ne;
            },
            children: (Ne, at) => {
              var We = Fb(), pt = Q(We);
              np(pt, {
                get store() {
                  return he;
                },
                set store(lt) {
                  he = lt;
                },
                children: (lt, Nt) => {
                  var dt = jb(), ht = V(Q(dt), 2);
                  hp(ht, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return H();
                    },
                    get onedgepointerenter() {
                      return E();
                    },
                    get onedgepointerleave() {
                      return A();
                    },
                    get store() {
                      return he;
                    },
                    set store(Kt) {
                      he = Kt;
                    }
                  });
                  var mt = V(ht, 4);
                  gp(mt, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return re();
                    },
                    get style() {
                      return M();
                    },
                    get store() {
                      return he;
                    },
                    set store(Kt) {
                      he = Kt;
                    }
                  });
                  var Ft = V(mt, 2);
                  lp(Ft, {
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
                      return C();
                    },
                    get onnodepointermove() {
                      return O();
                    },
                    get onnodepointerleave() {
                      return z();
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
                      return he;
                    },
                    set store(Kt) {
                      he = Kt;
                    }
                  });
                  var er = V(Ft, 2);
                  fp(er, {
                    get onselectionclick() {
                      return W();
                    },
                    get onselectioncontextmenu() {
                      return B();
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
                      return he;
                    },
                    set store(Kt) {
                      he = Kt;
                    }
                  }), Ee(2), T(lt, dt);
                },
                $$slots: { default: !0 }
              });
              var Lt = V(pt, 2);
              {
                let lt = /* @__PURE__ */ $(() => !!(he.selectionRect && he.selectionRectMode === "user")), Nt = /* @__PURE__ */ $(() => he.selectionRect?.width), dt = /* @__PURE__ */ $(() => he.selectionRect?.height), ht = /* @__PURE__ */ $(() => he.selectionRect?.x), mt = /* @__PURE__ */ $(() => he.selectionRect?.y);
                vu(Lt, {
                  get isVisible() {
                    return c(lt);
                  },
                  get width() {
                    return c(Nt);
                  },
                  get height() {
                    return c(dt);
                  },
                  get x() {
                    return c(ht);
                  },
                  get y() {
                    return c(mt);
                  }
                });
              }
              T(Ne, We);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ge = V(Re, 2);
      vp(Ge, {
        get proOptions() {
          return o();
        },
        get position() {
          return pe();
        }
      });
      var st = V(Ge, 2);
      op(st, {
        get store() {
          return he;
        }
      });
      var it = V(st, 2);
      Te(it, () => ie() ?? Fe), T(J, Se);
    },
    $$slots: { default: !0 }
  }), ue(De);
}
ae(
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
function wp(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ we(Qf({ props: {}, nodes: [], edges: [] }));
  Jr(Ls, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), Pi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    }
  }, i = de(), s = Q(i);
  return Te(s, () => n() ?? Fe), T(t, i), ue(o);
}
ae(wp, { children: {} }, [], [], !0);
var Wb = /* @__PURE__ */ ne("<button><!></button>");
function Qo(t, e) {
  le(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ve(e, [
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
  }, f = Wb();
  nt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Rn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Z(f);
  return Te(v, () => u() ?? Fe), K(f), T(t, f), ue(h);
}
ae(
  Qo,
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
var Zb = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function bp(t) {
  var e = Zb();
  T(t, e);
}
ae(bp, {}, [], [], !0);
var qb = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function xp(t) {
  var e = qb();
  T(t, e);
}
ae(xp, {}, [], [], !0);
var Yb = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Cp(t) {
  var e = Yb();
  T(t, e);
}
ae(Cp, {}, [], [], !0);
var Xb = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function kp(t) {
  var e = Xb();
  T(t, e);
}
ae(kp, {}, [], [], !0);
var Ub = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function $p(t) {
  var e = Ub();
  T(t, e);
}
ae($p, {}, [], [], !0);
var Jb = /* @__PURE__ */ ne("<!> <!>", 1), Gb = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Sp(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), f = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), x = /* @__PURE__ */ Ve(e, [
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
  ]), _ = /* @__PURE__ */ $(Ln);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: v()
  };
  let C = /* @__PURE__ */ $(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), O = /* @__PURE__ */ $(() => c(_).viewport.zoom <= c(_).minZoom), z = /* @__PURE__ */ $(() => c(_).viewport.zoom >= c(_).maxZoom), W = /* @__PURE__ */ $(() => c(_).ariaLabelConfig), B = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const D = () => {
    c(_).zoomIn();
  }, P = () => {
    c(_).zoomOut();
  }, S = () => {
    c(_).fitView(m());
  }, H = () => {
    let A = !c(C);
    c(_).nodesDraggable = A, c(_).nodesConnectable = A, c(_).elementsSelectable = A;
  };
  var E = {
    get position() {
      return n();
    },
    set position(A = "bottom-left") {
      n(A), p();
    },
    get orientation() {
      return r();
    },
    set orientation(A = "vertical") {
      r(A), p();
    },
    get showZoom() {
      return o();
    },
    set showZoom(A = !0) {
      o(A), p();
    },
    get showFitView() {
      return i();
    },
    set showFitView(A = !0) {
      i(A), p();
    },
    get showLock() {
      return s();
    },
    set showLock(A = !0) {
      s(A), p();
    },
    get style() {
      return a();
    },
    set style(A) {
      a(A), p();
    },
    get class() {
      return l();
    },
    set class(A) {
      l(A), p();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(A) {
      u(A), p();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(A) {
      d(A), p();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(A) {
      h(A), p();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(A) {
      f(A), p();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(A) {
      v(A), p();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(A) {
      m(A), p();
    },
    get children() {
      return y();
    },
    set children(A) {
      y(A), p();
    },
    get before() {
      return w();
    },
    set before(A) {
      w(A), p();
    },
    get after() {
      return b();
    },
    set after(A) {
      b(A), p();
    }
  };
  {
    let A = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      c(B),
      l()
    ]);
    Hi(t, je(
      {
        get class() {
          return c(A);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(W)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (N, I) => {
          var U = Gb(), G = Q(U);
          {
            var L = (pe) => {
              var ie = de(), ce = Q(ie);
              Te(ce, w), T(pe, ie);
            };
            se(G, (pe) => {
              w() && pe(L);
            });
          }
          var X = V(G, 2);
          {
            var Y = (pe) => {
              var ie = Jb(), ce = Q(ie);
              Qo(ce, je(
                {
                  onclick: D,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(W)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(W)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(z);
                  }
                },
                () => k,
                {
                  children: (be, xe) => {
                    bp(be);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var me = V(ce, 2);
              Qo(me, je(
                {
                  onclick: P,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(W)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(W)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => k,
                {
                  children: (be, xe) => {
                    xp(be);
                  },
                  $$slots: { default: !0 }
                }
              )), T(pe, ie);
            };
            se(X, (pe) => {
              o() && pe(Y);
            });
          }
          var j = V(X, 2);
          {
            var q = (pe) => {
              Qo(pe, je(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return c(W)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(W)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, ce) => {
                    Cp(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(j, (pe) => {
              i() && pe(q);
            });
          }
          var ee = V(j, 2);
          {
            var te = (pe) => {
              Qo(pe, je(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: H,
                  get title() {
                    return c(W)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(W)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ie, ce) => {
                    var me = de(), be = Q(me);
                    {
                      var xe = (Ce) => {
                        $p(Ce);
                      }, he = (Ce) => {
                        kp(Ce);
                      };
                      se(be, (Ce) => {
                        c(C) ? Ce(xe) : Ce(he, !1);
                      });
                    }
                    T(ie, me);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(ee, (pe) => {
              s() && pe(te);
            });
          }
          var oe = V(ee, 2);
          {
            var M = (pe) => {
              var ie = de(), ce = Q(ie);
              Te(ce, y), T(pe, ie);
            };
            se(oe, (pe) => {
              y() && pe(M);
            });
          }
          var re = V(oe, 2);
          {
            var ge = (pe) => {
              var ie = de(), ce = Q(ie);
              Te(ce, b), T(pe, ie);
            };
            se(re, (pe) => {
              b() && pe(ge);
            });
          }
          T(N, U);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(E);
}
ae(
  Sp,
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
var sr;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(sr || (sr = {}));
var Qb = /* @__PURE__ */ $e("<circle></circle>");
function _p(t, e) {
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
  }, i = Qb();
  return Ae(() => {
    Oe(i, "cx", n()), Oe(i, "cy", n()), Oe(i, "r", n()), sn(i, 0, Cr(["svelte-flow__background-pattern", "dots", r()]));
  }), T(t, i), ue(o);
}
ae(_p, { radius: {}, class: {} }, [], [], !0);
var ex = /* @__PURE__ */ $e("<path></path>");
function Ep(t, e) {
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
  }, a = ex();
  return Ae(() => {
    Oe(a, "stroke-width", n()), Oe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), sn(a, 0, Cr(["svelte-flow__background-pattern", o(), i()]));
  }), T(t, a), ue(s);
}
ae(Ep, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const tx = {
  [sr.Dots]: 1,
  [sr.Lines]: 1,
  [sr.Cross]: 6
};
var nx = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Pp(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => sr.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ $(Ln), f = /* @__PURE__ */ $(() => r() === sr.Dots), v = /* @__PURE__ */ $(() => r() === sr.Cross), m = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ $(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ $(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ $(() => (i() ?? tx[r()]) * c(h).viewport.zoom), x = /* @__PURE__ */ $(() => c(v) ? [c(b), c(b)] : c(w)), _ = /* @__PURE__ */ $(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), p();
    },
    get variant() {
      return r();
    },
    set variant(S = sr.Dots) {
      r(S), p();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), p();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), p();
    },
    get patternClass() {
      return u();
    },
    set patternClass(S) {
      u(S), p();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), p();
    }
  }, C = nx();
  let O;
  var z = Z(C), W = Z(z);
  {
    var B = (S) => {
      {
        let H = /* @__PURE__ */ $(() => c(b) / 2);
        _p(S, {
          get radius() {
            return c(H);
          },
          get class() {
            return u();
          }
        });
      }
    }, D = (S) => {
      Ep(S, {
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
    se(W, (S) => {
      c(f) ? S(B) : S(D, !1);
    });
  }
  K(z);
  var P = V(z);
  return K(C), Ae(() => {
    sn(C, 0, Cr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), O = Vt(C, "", O, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Oe(z, "id", c(y)), Oe(z, "x", c(h).viewport.x % c(w)[0]), Oe(z, "y", c(h).viewport.y % c(w)[1]), Oe(z, "width", c(w)[0]), Oe(z, "height", c(w)[1]), Oe(z, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), Oe(P, "fill", `url(#${c(y)})`);
  }), T(t, C), ue(k);
}
ae(
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
var rx = /* @__PURE__ */ $e("<rect></rect>");
function Op(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "x", 7), o = g(e, "y", 7), i = g(e, "width", 7), s = g(e, "height", 7), a = g(e, "borderRadius", 7, 5), l = g(e, "color", 7), u = g(e, "shapeRendering", 7), d = g(e, "strokeColor", 7), h = g(e, "strokeWidth", 7, 2), f = g(e, "selected", 7), v = g(e, "class", 7), m = g(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), p();
    },
    get x() {
      return r();
    },
    set x(k) {
      r(k), p();
    },
    get y() {
      return o();
    },
    set y(k) {
      o(k), p();
    },
    get width() {
      return i();
    },
    set width(k) {
      i(k), p();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(k = 5) {
      a(k), p();
    },
    get color() {
      return l();
    },
    set color(k) {
      l(k), p();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(k) {
      u(k), p();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(k) {
      d(k), p();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(k = 2) {
      h(k), p();
    },
    get selected() {
      return f();
    },
    set selected(k) {
      f(k), p();
    },
    get class() {
      return v();
    },
    set class(k) {
      v(k), p();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(k) {
      m(k), p();
    }
  }, w = de(), b = Q(w);
  {
    var x = (k) => {
      const C = /* @__PURE__ */ $(m);
      var O = de(), z = Q(O);
      At(z, () => c(C), (W, B) => {
        B(W, {
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
      }), T(k, O);
    }, _ = (k) => {
      var C = rx();
      let O, z;
      Ae(() => {
        O = sn(C, 0, Cr(["svelte-flow__minimap-node", v()]), null, O, { selected: f() }), Oe(C, "x", r()), Oe(C, "y", o()), Oe(C, "rx", a()), Oe(C, "ry", a()), Oe(C, "width", i()), Oe(C, "height", s()), Oe(C, "shape-rendering", u()), z = Vt(C, "", z, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), T(k, C);
    };
    se(b, (k) => {
      m() ? k(x) : k(_, !1);
    });
  }
  return T(t, w), ue(y);
}
ae(
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
function ox(t, e) {
  const n = K2({
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
const Ia = (t) => t instanceof Function ? t : () => t;
var ix = /* @__PURE__ */ $e("<title> </title>"), sx = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), ax = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Tp(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), f = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), x = g(e, "inversePan", 7), _ = g(e, "zoomStep", 7), k = g(e, "class", 7), C = /* @__PURE__ */ Ve(e, [
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
  ]), O = /* @__PURE__ */ $(Ln), z = /* @__PURE__ */ $(() => c(O).ariaLabelConfig);
  const W = i() === void 0 ? void 0 : Ia(i()), B = Ia(o()), D = Ia(s()), P = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${c(O).flowId}`), H = /* @__PURE__ */ $(() => ({
    x: -c(O).viewport.x / c(O).viewport.zoom,
    y: -c(O).viewport.y / c(O).viewport.zoom,
    width: c(O).width / c(O).viewport.zoom,
    height: c(O).height / c(O).viewport.zoom
  })), E = /* @__PURE__ */ $(() => kf(Ai(c(O).nodeLookup, { filter: (re) => !re.hidden }), c(H))), A = /* @__PURE__ */ $(() => c(E).width / m()), N = /* @__PURE__ */ $(() => c(E).height / y()), I = /* @__PURE__ */ $(() => Math.max(c(A), c(N))), U = /* @__PURE__ */ $(() => c(I) * m()), G = /* @__PURE__ */ $(() => c(I) * y()), L = /* @__PURE__ */ $(() => 5 * c(I)), X = /* @__PURE__ */ $(() => c(E).x - (c(U) - c(E).width) / 2 - c(L)), Y = /* @__PURE__ */ $(() => c(E).y - (c(G) - c(E).height) / 2 - c(L)), j = /* @__PURE__ */ $(() => c(U) + c(L) * 2), q = /* @__PURE__ */ $(() => c(G) + c(L) * 2);
  const ee = () => c(I);
  var te = {
    get position() {
      return n();
    },
    set position(re = "bottom-right") {
      n(re), p();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(re) {
      r(re), p();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(re = "transparent") {
      o(re), p();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(re) {
      i(re), p();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(re = "") {
      s(re), p();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(re = 5) {
      a(re), p();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(re = 2) {
      l(re), p();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(re) {
      u(re), p();
    },
    get bgColor() {
      return d();
    },
    set bgColor(re) {
      d(re), p();
    },
    get maskColor() {
      return h();
    },
    set maskColor(re) {
      h(re), p();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(re) {
      f(re), p();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(re) {
      v(re), p();
    },
    get width() {
      return m();
    },
    set width(re = 200) {
      m(re), p();
    },
    get height() {
      return y();
    },
    set height(re = 150) {
      y(re), p();
    },
    get pannable() {
      return w();
    },
    set pannable(re = !0) {
      w(re), p();
    },
    get zoomable() {
      return b();
    },
    set zoomable(re = !0) {
      b(re), p();
    },
    get inversePan() {
      return x();
    },
    set inversePan(re) {
      x(re), p();
    },
    get zoomStep() {
      return _();
    },
    set zoomStep(re) {
      _(re), p();
    },
    get class() {
      return k();
    },
    set class(re) {
      k(re), p();
    }
  }, oe = ax(), M = Q(oe);
  {
    let re = /* @__PURE__ */ $(() => ["svelte-flow__minimap", k()]);
    em(M, () => ({ "--xy-minimap-background-color-props": d() })), Hi(M.lastChild, je(
      {
        get position() {
          return n();
        },
        get class() {
          return c(re);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => C,
      {
        children: (ge, pe) => {
          var ie = de(), ce = Q(ie);
          {
            var me = (be) => {
              var xe = sx();
              let he;
              var Ce = Z(xe);
              {
                var De = (Se) => {
                  var Me = ix(), Re = Z(Me, !0);
                  K(Me), Ae(() => {
                    Oe(Me, "id", c(S)), ft(Re, r() ?? c(z)["minimap.ariaLabel"]);
                  }), T(Se, Me);
                };
                se(Ce, (Se) => {
                  (r() ?? c(z)["minimap.ariaLabel"]) && Se(De);
                });
              }
              var J = V(Ce);
              Ot(J, 17, () => c(O).nodes, (Se) => Se.id, (Se, Me) => {
                const Re = /* @__PURE__ */ $(() => c(O).nodeLookup.get(c(Me).id));
                var Ge = de(), st = Q(Ge);
                {
                  var it = (ct) => {
                    const ye = /* @__PURE__ */ $(() => Vr(c(Re)));
                    {
                      let Ne = /* @__PURE__ */ $(() => W?.(c(Re))), at = /* @__PURE__ */ $(() => B(c(Re))), We = /* @__PURE__ */ $(() => D(c(Re)));
                      Op(ct, je(
                        {
                          get id() {
                            return c(Re).id;
                          },
                          get x() {
                            return c(Re).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Re).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Re).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ne);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(at);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return P;
                          },
                          get class() {
                            return c(We);
                          }
                        }
                      ));
                    }
                  };
                  se(st, (ct) => {
                    c(Re) && $f(c(Re)) && !c(Re).hidden && ct(it);
                  });
                }
                T(Se, Ge);
              });
              var Ie = V(J);
              K(xe), Rt(xe, (Se, Me) => ox?.(Se, Me), () => ({
                store: c(O),
                panZoom: c(O).panZoom,
                getViewScale: ee,
                translateExtent: c(O).translateExtent,
                width: c(O).width,
                height: c(O).height,
                inversePan: x(),
                zoomStep: _(),
                pannable: w(),
                zoomable: b()
              })), Ae(() => {
                Oe(xe, "width", m()), Oe(xe, "height", y()), Oe(xe, "viewBox", `${c(X) ?? ""} ${c(Y) ?? ""} ${c(j) ?? ""} ${c(q) ?? ""}`), Oe(xe, "aria-labelledby", c(S)), he = Vt(xe, "", he, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(I) : void 0
                }), Oe(Ie, "d", `M${c(X) - c(L)},${c(Y) - c(L)}h${c(j) + c(L) * 2}v${c(q) + c(L) * 2}h${-c(j) - c(L) * 2}z
      M${c(H).x ?? ""},${c(H).y ?? ""}h${c(H).width ?? ""}v${c(H).height ?? ""}h${-c(H).width}z`);
              }), T(be, xe);
            };
            se(ce, (be) => {
              c(O).panZoom && be(me);
            });
          }
          T(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), K(M);
  }
  return T(t, oe), ue(te);
}
ae(
  Tp,
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
var lx = /* @__PURE__ */ ne("<div><!></div>");
function Np(t, e) {
  le(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => Pe.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ Ve(e, [
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
  const u = Ln(), { getNodesBounds: d } = Tt(), h = wn("svelteflow__node_id");
  let f = /* @__PURE__ */ $(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (C, O) => {
      const z = u.nodeLookup.get(O);
      return z && C.push(z), C;
    },
    []
  ))), v = /* @__PURE__ */ $(() => {
    const C = d(c(f));
    return C ? k2(C, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ $(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((C) => (C.internals.z || 5) + 1))), y = /* @__PURE__ */ $(() => u.nodes.filter((C) => C.selected).length), w = /* @__PURE__ */ $(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(C) {
      n(C), p();
    },
    get position() {
      return r();
    },
    set position(C = Pe.Top) {
      r(C), p();
    },
    get align() {
      return o();
    },
    set align(C = "center") {
      o(C), p();
    },
    get offset() {
      return i();
    },
    set offset(C = 10) {
      i(C), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(C) {
      s(C), p();
    },
    get children() {
      return a();
    },
    set children(C) {
      a(C), p();
    }
  }, x = de(), _ = Q(x);
  {
    var k = (C) => {
      var O = lx();
      nt(
        O,
        (W, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": W,
          ...l,
          [Rn]: B
        }),
        [
          () => c(f).reduce((W, B) => `${W}${B.id} `, "").trim(),
          () => ({
            display: Wf().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var z = Z(O);
      Te(z, () => a() ?? Fe), K(O), Rt(O, (W, B) => Kf?.(W, B), () => "root"), T(C, O);
    };
    se(_, (C) => {
      u.domNode && c(w) && c(f) && C(k);
    });
  }
  return T(t, x), ue(b);
}
ae(
  Np,
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
function kr(t) {
  const e = /* @__PURE__ */ $(Ln), n = /* @__PURE__ */ $(() => c(e).nodes), r = /* @__PURE__ */ $(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!L2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const ed = "tinyflow-component", ux = [
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
], cx = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "fixed",
    label: "固定值"
  },
  {
    value: "input",
    label: "输入"
  }
], mu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Ap = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Dp = [
  // { label: '单行输入框', value: 'input' },
  // { label: '多行输入框', value: 'textarea' },
  // { label: '下拉菜单', value: 'select' },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], dx = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Mp = typeof window < "u" ? window : void 0;
function hx(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let fx = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = Mp, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = io((r) => {
      const o = kt(e, "focusin", r), i = kt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? hx(this.#e) : null;
  }
};
new fx();
function px(t, e) {
  switch (t) {
    case "post":
      Be(e);
      break;
    case "pre":
      en(e);
      break;
  }
}
function Lp(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  px(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = vt(() => n(a, s));
    return s = a, l;
  });
}
function yu(t, e, n) {
  Lp(t, "post", e, n);
}
function gx(t, e, n) {
  Lp(t, "pre", e, n);
}
yu.pre = gx;
function vx(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class Hp {
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
      window: a = Mp
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = vx(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = io(() => kt(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), c(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#i), r(Reflect.get(s, a))),
        set: (s, a, l) => (F(this.#i, c(this.#i) + 1), Reflect.set(s, a, l), this.#l(e), !0)
      }), n.set(o, i)), i;
    };
    return r(e);
  }
  set current(e) {
    this.#l(e), F(this.#i, c(this.#i) + 1);
  }
  #a = (e) => {
    e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), F(this.#i, c(this.#i) + 1));
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
function td(t) {
  return t.filter((e) => e.length > 0);
}
const zp = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, zi = typeof document < "u";
function mx(t) {
  return typeof t == "function";
}
function yx(t) {
  return t !== null && typeof t == "object";
}
const yi = Symbol("box"), wu = Symbol("is-writable");
function wx(t) {
  return yx(t) && yi in t;
}
function bx(t) {
  return Et.isBox(t) && wu in t;
}
function Et(t) {
  let e = /* @__PURE__ */ we(Ct(t));
  return {
    [yi]: !0,
    [wu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function xx(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [yi]: !0,
    [wu]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [yi]: !0,
    get current() {
      return t();
    }
  };
}
function Cx(t) {
  return Et.isBox(t) ? t : mx(t) ? Et.with(t) : Et(t);
}
function kx(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => Et.isBox(r) ? (Et.isWritableBox(r) ? Object.defineProperty(e, n, {
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
function $x(t) {
  return Et.isWritableBox(t) ? {
    [yi]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
Et.from = Cx;
Et.with = xx;
Et.flatten = kx;
Et.readonly = $x;
Et.isBox = wx;
Et.isWritableBox = bx;
var nd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Sx = /\n/g, _x = /^\s*/, Ex = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Px = /^:\s*/, Ox = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Tx = /^[;\s]*/, Nx = /^\s+|\s+$/g, Ax = `
`, rd = "/", od = "*", jr = "", Dx = "comment", Mx = "declaration";
function Lx(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(Sx);
    y && (n += y.length);
    var w = m.lastIndexOf(Ax);
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
    l(_x);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(rd != t.charAt(0) || od != t.charAt(1))) {
      for (var y = 2; jr != t.charAt(y) && (od != t.charAt(y) || rd != t.charAt(y + 1)); )
        ++y;
      if (y += 2, jr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: Dx,
        comment: w
      });
    }
  }
  function f() {
    var m = i(), y = l(Ex);
    if (y) {
      if (h(), !l(Px)) return a("property missing ':'");
      var w = l(Ox), b = m({
        type: Mx,
        property: id(y[0].replace(nd, jr)),
        value: w ? id(w[0].replace(nd, jr)) : jr
      });
      return l(Tx), b;
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
function id(t) {
  return t ? t.replace(Nx, jr) : jr;
}
function Hx(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = Lx(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
function zx(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Vx = zx(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Ix(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Vx(e)}: ${t[e]};`).join(`
`);
}
function Rx(t = {}) {
  return Ix(t).replace(`
`, " ");
}
const Bx = {
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
Rx(Bx);
const jx = typeof window < "u" ? window : void 0;
function Fx(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let Kx = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = jx, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = io((r) => {
      const o = kt(e, "focusin", r), i = kt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Fx(this.#e) : null;
  }
};
new Kx();
const Zr = Et("mode-watcher-mode"), qr = Et("mode-watcher-theme"), Wx = ["dark", "light", "system"];
function cl(t) {
  return typeof t != "string" ? !1 : Wx.includes(t);
}
class Zx {
  #e = "system";
  #t = zi ? localStorage : zp;
  #n = this.#t.getItem(Zr.current);
  #r = cl(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ we(Ct(this.#i()));
  #i(e = this.#r) {
    return new Hp(Zr.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => cl(n) ? n : this.#e
      }
    });
  }
  constructor() {
    so(() => yu.pre(() => Zr.current, (e, n) => {
      const r = c(this.#o).current;
      F(this.#o, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return c(this.#o).current;
  }
  set current(e) {
    c(this.#o).current = e;
  }
}
class qx {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ we(Ct(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Uf("prefers-color-scheme: light") : { current: !1 };
  query() {
    zi && F(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    so(() => {
      en(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const dl = new Zx(), wi = new qx();
class Yx {
  #e = zi ? localStorage : zp;
  #t = this.#e.getItem(qr.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ we(Ct(this.#o()));
  #o(e = this.#n) {
    return new Hp(qr.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    so(() => yu.pre(() => qr.current, (e, n) => {
      const r = c(this.#r).current;
      F(this.#r, this.#o(r), !0), n && localStorage.removeItem(n);
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
const hs = new Yx();
let sd, ad, ld = !1, Qi = null;
function Xx() {
  return Qi || (Qi = document.createElement("style"), Qi.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Qi);
}
function Vp(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!ld) {
    ld = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(sd), clearTimeout(ad);
  const n = Xx(), r = () => document.head.appendChild(n), o = () => {
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
  r(), sd = window.setTimeout(() => {
    t(), ad = window.setTimeout(o, 16);
  }, 16);
}
const _r = Et(void 0), Hs = Et(!0), zs = Et(!1), hl = Et([]), fl = Et([]);
function Ux() {
  const t = /* @__PURE__ */ $(() => {
    if (!zi) return;
    const e = dl.current === "system" ? wi.current : dl.current, n = td(hl.current), r = td(fl.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && _r.current && s.setAttribute("content", _r.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && _r.current && s.setAttribute("content", _r.current.dark));
    }
    return Hs.current ? Vp(o, zs.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function Jx() {
  const t = /* @__PURE__ */ $(() => {
    if (hs.current, !zi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", hs.current);
    }
    return Hs.current ? Vp(e, vt(() => zs.current)) : e(), hs.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const Gx = Ux(), Qx = Jx();
function e7(t) {
  dl.current = t;
}
function t7(t) {
  hs.current = t;
}
function n7({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var r7 = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function Ip(t, e) {
  le(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), p();
    }
  }, o = de(), i = Q(o);
  {
    var s = (a) => {
      var l = r7();
      Ae(() => Oe(l, "content", n().dark)), T(a, l);
    };
    se(i, (a) => {
      n() && a(s);
    });
  }
  return T(t, o), ue(r);
}
ae(Ip, { themeColors: {} }, [], [], !0);
var o7 = /* @__PURE__ */ ne('<meta name="theme-color"/>'), i7 = /* @__PURE__ */ ne("<!> <!>", 1);
function Rp(t, e) {
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
  return tm("171tvz2", (s) => {
    var a = i7(), l = Q(a);
    {
      var u = (h) => {
        var f = o7();
        Ae(() => Oe(f, "content", o().dark)), T(h, f);
      };
      se(l, (h) => {
        o() && h(u);
      });
    }
    var d = V(l, 2);
    la(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + n7.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), T(s, a);
  }), ue(i);
}
ae(Rp, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function s7(t, e) {
  le(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), f = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Zr.current = h(), qr.current = d(), hl.current = s(), fl.current = a(), Hs.current = i(), _r.current = o(), zs.current = v(), en(() => {
    zs.current = v();
  }), en(() => {
    Hs.current = i();
  }), en(() => {
    _r.current = o();
  }), en(() => {
    hl.current = s();
  }), en(() => {
    fl.current = a();
  }), en(() => {
    Zr.current = h();
  }), en(() => {
    qr.current = d();
  }), en(() => {
    Gx.current, Zr.current, qr.current, Qx.current;
  }), Dn(() => {
    wi.tracking(n()), wi.query();
    const C = localStorage.getItem(Zr.current);
    e7(cl(C) ? C : r());
    const O = localStorage.getItem(qr.current);
    t7(O || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: h(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ $(() => typeof window > "u" ? u() : "");
  var w = {
    get track() {
      return n();
    },
    set track(C = !0) {
      n(C), p();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(C = "system") {
      r(C), p();
    },
    get themeColors() {
      return o();
    },
    set themeColors(C) {
      o(C), p();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(C = !0) {
      i(C), p();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(C = ["dark"]) {
      s(C), p();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(C = []) {
      a(C), p();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(C = "") {
      l(C), p();
    },
    get nonce() {
      return u();
    },
    set nonce(C = "") {
      u(C), p();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(C = "mode-watcher-theme") {
      d(C), p();
    },
    get modeStorageKey() {
      return h();
    },
    set modeStorageKey(C = "mode-watcher-mode") {
      h(C), p();
    },
    get disableHeadScriptInjection() {
      return f();
    },
    set disableHeadScriptInjection(C = !1) {
      f(C), p();
    },
    get synchronousModeChanges() {
      return v();
    },
    set synchronousModeChanges(C = !1) {
      v(C), p();
    }
  }, b = de(), x = Q(b);
  {
    var _ = (C) => {
      Ip(C, {
        get themeColors() {
          return _r.current;
        }
      });
    }, k = (C) => {
      Rp(C, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return _r.current;
        }
      });
    };
    se(x, (C) => {
      f() ? C(_) : C(k, !1);
    });
  }
  return T(t, b), ue(w);
}
ae(
  s7,
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
class a7 {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(e) {
    if (typeof e.element != "string" && !(e.element instanceof Element))
      throw new Error("element must be a string or Element");
    (!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = wi.current), this._setOptions(e), this._init();
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
    const e = document.createElement(ed);
    e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add(
      ...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]
    ), e.options = this.options, e.onInit = (n) => {
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
    const n = document.createElement(ed);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add(
      ...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]
    ), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  setTheme(e) {
    e === "system" ? this.options.defaultTheme = wi.current : this.options.defaultTheme = e, this.destroy(), this._init();
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const l7 = () => {
  let t = /* @__PURE__ */ we([]), e = /* @__PURE__ */ we([]), n = /* @__PURE__ */ we({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      F(t, r), F(e, o);
    },
    getNodes: () => c(t),
    setNodes: (r) => {
      F(t, r);
    },
    getEdges: () => c(e),
    setEdges: (r) => {
      F(e, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      F(n, r);
    },
    getNode: (r) => c(t).find((o) => o.id === r),
    addNode: (r) => {
      F(t, [...c(t), r]);
    },
    removeNode: (r) => {
      F(t, c(t).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      F(t, r(c(t)));
    },
    updateNodeData: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      F(t, c(t).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(e).find((o) => o.id === r),
    addEdge: (r) => {
      F(e, [...c(e), r]);
    },
    removeEdge: (r) => {
      F(e, c(e).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      F(e, r(c(e)));
    },
    updateEdgeData: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ye = l7();
function Pn(...t) {
  return ri(t);
}
const ud = {
  default: "tf-btn-default",
  outline: "tf-btn-outline",
  secondary: "tf-btn-secondary",
  ghost: "tf-btn-ghost",
  destructive: "tf-btn-destructive",
  link: "tf-btn-link"
}, cd = {
  default: "tf-btn-size-default",
  xs: "tf-btn-xs",
  sm: "tf-btn-sm",
  lg: "tf-btn-lg",
  icon: "tf-btn-icon",
  "icon-xs": "tf-btn-icon-xs",
  "icon-sm": "tf-btn-icon-sm",
  "icon-lg": "tf-btn-icon-lg"
};
var u7 = /* @__PURE__ */ ne("<a><!></a>"), c7 = /* @__PURE__ */ ne("<button><!></button>");
function Xe(t, e) {
  le(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ Ve(e, [
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
  }, v = de(), m = Q(v);
  {
    var y = (b) => {
      var x = u7();
      nt(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...h
        }),
        [
          () => Pn("nopan nodrag tf-btn", ud[r()], cd[o()], n())
        ]
      );
      var _ = Z(x);
      Te(_, () => u() ?? Fe), K(x), It(x, (k) => i(k), () => i()), T(b, x);
    }, w = (b) => {
      var x = c7();
      nt(
        x,
        (k) => ({
          "data-slot": "button",
          class: k,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => Pn("nopan nodrag tf-btn", ud[r()], cd[o()], n())
        ]
      );
      var _ = Z(x);
      Te(_, () => u() ?? Fe), K(x), It(x, (k) => i(k), () => i()), T(b, x);
    };
    se(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return T(t, v), ue(f);
}
ae(
  Xe,
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
function d7(t) {
  return typeof t == "function";
}
function Vi(t) {
  return t !== null && typeof t == "object";
}
const h7 = ["string", "number", "bigint", "boolean"];
function pl(t) {
  return t == null || h7.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => pl(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const Vs = Symbol("box"), Bp = Symbol("is-writable");
function ve(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [Vs]: !0,
    [Bp]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Vs]: !0,
    get current() {
      return t();
    }
  };
}
function jp(t) {
  return Vi(t) && Vs in t;
}
function f7(t) {
  return jp(t) ? t : d7(t) ? ve(t) : jn(t);
}
function jn(t) {
  let e = /* @__PURE__ */ we(Ct(t));
  return {
    [Vs]: !0,
    [Bp]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function Fp(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
const p7 = /\d/, g7 = ["-", "_", "/", "."];
function v7(t = "") {
  if (!p7.test(t))
    return t !== t.toLowerCase();
}
function m7(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = g7.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = v7(i);
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
function Kp(t) {
  return t ? m7(t).map((e) => w7(e)).join("") : "";
}
function y7(t) {
  return b7(Kp(t || ""));
}
function w7(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function b7(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function ei(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[Kp(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[y7(r)] = o;
  }
  return Hx(t, n), e;
}
function ii(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function x7(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const C7 = x7(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function k7(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${C7(e)}: ${t[e]};`).join(`
`);
}
function bu(t = {}) {
  return k7(t).replace(`
`, " ");
}
const $7 = [
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
], S7 = new Set($7);
function _7(t) {
  return S7.has(t);
}
function Zn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && _7(o)) {
          const u = i, d = s;
          e[o] = Fp(u, d);
        } else if (a && l)
          e[o] = ii(i, s);
        else if (o === "class") {
          const u = pl(i), d = pl(s);
          u && d ? e[o] = ri(i, s) : u ? e[o] = ri(i) : d && (e[o] = ri(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", f = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && f) {
            const v = ei(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = ei(i);
            e[o] = { ...v, ...s };
          } else if (h && f) {
            const v = ei(i), m = ei(s);
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
  return typeof e.style == "object" && (e.style = bu(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const E7 = {
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
}, P7 = bu(E7), Wp = typeof window < "u" ? window : void 0;
function O7(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class T7 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = Wp, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = io((o) => {
      const i = kt(n, "focusin", o), s = kt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? O7(this.#e) : null;
  }
}
new T7();
function N7(t) {
  return typeof t == "function";
}
class Ir {
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
    return p1(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = wn(this.#t);
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
    const n = wn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return Jr(this.#t, e);
  }
}
function A7(t, e) {
  switch (t) {
    case "post":
      Be(e);
      break;
    case "pre":
      en(e);
      break;
  }
}
function Zp(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  A7(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = vt(() => n(a, s));
    return s = a, l;
  });
}
function Pt(t, e, n) {
  Zp(t, "post", e, n);
}
function D7(t, e, n) {
  Zp(t, "pre", e, n);
}
Pt.pre = D7;
function dd(t) {
  return N7(t) ? t() : t;
}
class M7 {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ $(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ $(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ $(() => {
    const e = dd(this.#r);
    if (e)
      return io((n) => {
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
    this.#o = n.window ?? Wp, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = dd(this.#r);
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
class L7 {
  #e = () => {
  };
  #t = /* @__PURE__ */ $(() => this.#e());
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
function Io(t) {
  Be(() => () => {
    t();
  });
}
function H7(t) {
  Be(() => vt(() => t()));
}
function z7(t, e) {
  return setTimeout(e, t);
}
function Ii(t) {
  Oh().then(t);
}
const V7 = 1, I7 = 9, R7 = 11;
function gl(t) {
  return Vi(t) && t.nodeType === V7 && typeof t.nodeName == "string";
}
function qp(t) {
  return Vi(t) && t.nodeType === I7;
}
function B7(t) {
  return Vi(t) && t.constructor?.name === "VisualViewport";
}
function j7(t) {
  return Vi(t) && t.nodeType !== void 0;
}
function Yp(t) {
  return j7(t) && t.nodeType === R7 && "host" in t;
}
function F7(t, e) {
  if (!t || !e || !gl(t) || !gl(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Yp(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function K7(t) {
  return qp(t) ? t : B7(t) ? t.document : t?.ownerDocument ?? document;
}
function Xp(t) {
  return Yp(t) ? Xp(t.host) : qp(t) ? t.defaultView ?? window : gl(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function W7(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Ri {
  element;
  #e = /* @__PURE__ */ $(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    F(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ve(e) : this.element = e;
  }
  getDocument = () => K7(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => W7(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function Nr(t, e) {
  return {
    [G1()]: (n) => jp(t) ? (t.current = n, vt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), vt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function vl(t) {
  return t ? "true" : "false";
}
function Is(t) {
  return t ? "" : void 0;
}
function hd(t) {
  return t ? !0 : void 0;
}
function Up(t) {
  return t ? "open" : "closed";
}
function Z7(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class q7 {
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
function xu(t) {
  const e = new q7(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const ti = "ArrowDown", mo = "ArrowUp", Jp = "End", ml = "Enter", Y7 = "Escape", Gp = "Home", Qp = "PageDown", eg = "PageUp", fs = " ", fd = "Tab", tg = typeof document < "u", yl = X7();
function X7() {
  return tg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function wl(t) {
  return t instanceof HTMLElement;
}
function U7(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function J7(t) {
  return t !== null;
}
class G7 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, Io(() => this.#n());
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
    this.#e.afterTick ? Ii(n) : n();
  }
}
class Q7 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ we(!1);
  constructor(e) {
    this.#e = e, F(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new G7({ ref: this.#e.ref, afterTick: this.#e.open }), Pt(() => this.#e.open.current, (n) => {
      n && F(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || F(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Ke() {
}
function Xn(t, e) {
  return `bits-${t}`;
}
function ng(t, e) {
  le(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  }, o = de(), i = Q(o);
  return Q1(i, n, (s) => {
    var a = de(), l = Q(a);
    Te(l, () => n() ?? Fe), T(s, a);
  }), T(t, o), ue(r);
}
ae(ng, { children: {} }, [], [], !0);
const e5 = new Ir("BitsConfig");
function t5() {
  const t = new n5(null, {});
  return e5.getOr(t).opts;
}
class n5 {
  opts;
  constructor(e, n) {
    const r = r5(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function r5(t, e) {
  return (n) => ve(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function o5(t, e) {
  return (n) => {
    const r = t5();
    return ve(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const i5 = o5((t) => t.defaultPortalTo, "body");
function bl(t, e) {
  le(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = i5(() => n()), s = g1();
  let a = /* @__PURE__ */ $(l);
  function l() {
    if (!tg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (Mh(u), u = null);
  }
  Pt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = Jl(ng, { target: y, props: { children: r() }, context: s }), () => {
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
  }, f = de(), v = Q(f);
  {
    var m = (y) => {
      var w = de(), b = Q(w);
      Te(b, () => r() ?? Fe), T(y, w);
    };
    se(v, (y) => {
      o() && y(m);
    });
  }
  return T(t, f), ue(h);
}
ae(bl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function pd(t, e = 500) {
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
function rg(t, e) {
  return t === e || t.contains(e);
}
function og(t) {
  return t?.ownerDocument ?? document;
}
function s5(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var ig = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], xl = /* @__PURE__ */ ig.join(","), sg = typeof Element > "u", Do = sg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Rs = !sg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Bs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Bs(t.parentNode));
  return i;
}, a5 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, ag = function(t, e, n) {
  if (Bs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(xl));
  return e && Do.call(t, xl) && r.unshift(t), r = r.filter(n), r;
}, js = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!Bs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = js(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Do.call(i, xl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !Bs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var f = js(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: i,
            candidates: f
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, lg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ug = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || a5(t)) && !lg(t) ? 0 : t.tabIndex;
}, l5 = function(t, e) {
  var n = ug(t);
  return n < 0 && e && !lg(t) ? 0 : n;
}, u5 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, cg = function(t) {
  return t.tagName === "INPUT";
}, c5 = function(t) {
  return cg(t) && t.type === "hidden";
}, d5 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, h5 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, f5 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Rs(t), n = function(i) {
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
  var o = h5(r, t.form);
  return !o || o === t;
}, p5 = function(t) {
  return cg(t) && t.type === "radio";
}, g5 = function(t) {
  return p5(t) && !f5(t);
}, v5 = function(t) {
  var e, n = t && Rs(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Rs(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, gd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, m5 = function(t, e) {
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
  var i = Do.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Do.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Rs(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return gd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (v5(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return gd(t);
  return !1;
}, y5 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return Do.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, Fs = function(t, e) {
  return !(e.disabled || c5(e) || m5(e, t) || // For a details element with a summary, the summary element gets the focus
  d5(e) || y5(e));
}, vd = function(t, e) {
  return !(g5(e) || ug(e) < 0 || !Fs(t, e));
}, w5 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, dg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = l5(s, i), l = i ? dg(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(u5).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, b5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = js([t], e.includeContainer, {
    filter: vd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: w5
  }) : n = ag(t, e.includeContainer, vd.bind(null, e)), dg(n);
}, x5 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = js([t], e.includeContainer, {
    filter: Fs.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = ag(t, e.includeContainer, Fs.bind(null, e)), n;
}, C5 = /* @__PURE__ */ ig.concat("iframe:not([inert]):not([inert] *)").join(","), k5 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return Do.call(t, C5) === !1 ? !1 : Fs(e, t);
};
function $5(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function S5(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function _5(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function E5(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function Cu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((f) => f.toLowerCase().startsWith(u)).length <= 1)
      return Cu(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((f) => f.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const f = n ? t.indexOf(n) : -1;
      return md(h, Math.max(f, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = md(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function md(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const P5 = { afterMs: 1e4, onChange: Ke };
function hg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...P5, ...e };
  let i = null, s = /* @__PURE__ */ we(Ct(t));
  function a() {
    return o().setTimeout(
      () => {
        F(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Be(() => () => {
    i && o().clearTimeout(i);
  }), ve(() => c(s), (l) => {
    F(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class O5 {
  #e;
  #t;
  #n = /* @__PURE__ */ $(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ $(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = hg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Cu(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const T5 = "data-context-menu-trigger", N5 = "data-context-menu-content";
xu({
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
class ku {
  static create(e) {
    return new ku(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = Ke;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Be(() => {
      this.#i = og(this.opts.ref.current);
    });
    let n = Ke;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    Pt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return z7(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), Io(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Ii(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return ii(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      kt(this.#i, "pointerdown", ii(this.#h, this.#f), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      kt(this.#i, "pointerdown", ii(this.#p, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      kt(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = yd(e)), this.#e.current(e);
  };
  #d = pd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || M5(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = yd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = kt(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
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
    this.opts.ref.current && (this.#r = D5(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? rg(this.opts.ref.current, e) : !1;
  #v = pd(
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
function A5(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function D5(t) {
  const e = [...globalThis.bitsDismissableLayers], n = A5(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function M5(t, e) {
  const n = t.target;
  if (!U7(n)) return !1;
  const r = !!n.closest(`[${T5}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${N5}]`);
  return r && o ? !1 : og(n).documentElement.contains(n) && !rg(e, n) && s5(t, e);
}
function yd(t) {
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
function fg(t, e) {
  le(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Ke), o = g(e, "onFocusOutside", 7, Ke), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = ku.create({
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
    set onInteractOutside(m = Ke) {
      r(m), p();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Ke) {
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
  }, f = de(), v = Q(f);
  return Te(v, () => s() ?? Fe, () => ({ props: d.props })), T(t, f), ue(h);
}
ae(
  fg,
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
class $u {
  static create(e) {
    return new $u(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Ri(this.opts.ref);
    let n = Ke;
    Pt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => kt(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== Y7 || !L5(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function L5(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function pg(t, e) {
  le(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Ke), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  $u.create({
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
    set onEscapeKeydown(d = Ke) {
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
  }, l = de(), u = Q(l);
  return Te(u, () => o() ?? Fe), T(t, l), ue(a);
}
ae(
  pg,
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
class Su {
  static instance;
  #e = jn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Su()), this.instance;
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
class _u {
  #e = !1;
  #t = null;
  #n = Su.getInstance();
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
          if (l && e.contains(l) && k5(l))
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
    this.#r.push(kt(n, "focusin", r, { capture: !0 }), kt(e, "keydown", o));
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
    return this.#t ? b5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? x5(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return Pt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new _u(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Io(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function gg(t, e) {
  le(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Ke), s = g(e, "onOpenAutoFocus", 7, Ke), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = _u.use({
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
    set onCloseAutoFocus(v = Ke) {
      i(v), p();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Ke) {
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
  }, h = de(), f = Q(h);
  return Te(f, () => a() ?? Fe, () => ({ props: u.props })), T(t, h), ue(d);
}
ae(
  gg,
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
class Eu {
  static create(e) {
    return new Eu(e);
  }
  opts;
  domContext;
  #e = Ke;
  constructor(e) {
    this.opts = e, this.domContext = new Ri(e.ref);
    let n = Ke;
    Pt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return ii(kt(this.domContext.getDocument(), "pointerdown", this.#n), kt(this.domContext.getDocument(), "pointerup", Fp(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !wl(n) || !wl(r) || !this.opts.enabled.current || !z5(this) || !F7(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = H5(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Ke;
  };
}
const wd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function H5(t, e) {
  const n = wd(e), r = wd(t);
  return es(e, "none"), es(t, "text"), () => {
    es(e, n), es(t, r);
  };
}
function es(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function z5(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function vg(t, e) {
  le(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Ke), o = g(e, "onPointerUp", 7, Ke), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  Eu.create({
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
    set onPointerDown(f = Ke) {
      r(f), p();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(f = Ke) {
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
  }, d = de(), h = Q(d);
  return Te(h, () => s() ?? Fe), T(t, d), ue(u);
}
ae(
  vg,
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
function Ks(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class V5 {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ we();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), F(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = so(() => {
      F(this.#n, this.#e(...e), !0);
    })), Be(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const ps = new lb();
let ts = /* @__PURE__ */ we(null), Ra = null, Yo = null, Xo = !1;
const bd = ve(() => {
  for (const t of ps.values())
    if (t) return !0;
  return !1;
});
let Ba = null;
const I5 = new V5(() => {
  function t() {
    document.body.setAttribute("style", c(ts) ?? ""), document.body.style.removeProperty("--scrollbar-width"), yl && Ra?.(), F(ts, null);
  }
  function e() {
    Yo !== null && (window.clearTimeout(Yo), Yo = null);
  }
  function n(o, i) {
    e(), Xo = !0, Ba = Date.now();
    const s = Ba, a = () => {
      Yo = null, Ba === s && (mg(ps) ? Xo = !1 : (Xo = !1, i()));
    }, l = o === null ? 24 : o;
    Yo = window.setTimeout(a, l);
  }
  function r() {
    c(ts) === null && ps.size === 0 && !Xo && F(ts, document.body.getAttribute("style"), !0);
  }
  return Pt(() => bd.current, () => {
    if (!bd.current) return;
    r(), Xo = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", yl && (Ra = kt(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Ii(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Io(() => () => {
    Ra?.();
  }), {
    get lockMap() {
      return ps;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class R5 {
  #e = Ks();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = I5.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ve(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), Io(() => {
      if (this.#r.lockMap.delete(this.#e), mg(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function mg(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function Cl(t, e) {
  le(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new R5(n(), () => r());
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
ae(Cl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const B5 = xu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), j5 = new Ir("Checkbox.Group"), yg = new Ir("Checkbox.Root");
class Pu {
  static create(e, n = null) {
    return yg.set(new Pu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ $(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    F(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = Nr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Pt.pre(
      [
        () => jl(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), Pt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === ml) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === fs && (e.preventDefault(), this.#o());
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
  #i = /* @__PURE__ */ $(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    F(this.#i, e);
  }
  #a = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": Z7(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": vl(this.trueRequired),
    "aria-readonly": vl(this.trueReadonly),
    "data-disabled": Is(this.trueDisabled),
    "data-readonly": Is(this.trueReadonly),
    "data-state": F5(this.opts.checked.current, this.opts.indeterminate.current),
    [B5.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return c(this.#a);
  }
  set props(e) {
    F(this.#a, e);
  }
}
class Ou {
  static create() {
    return new Ou(yg.get());
  }
  root;
  #e = /* @__PURE__ */ $(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#t);
  }
  set shouldRender(e) {
    F(this.#t, e);
  }
  constructor(e) {
    this.root = e, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    wl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ $(() => ({
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
    F(this.#n, e);
  }
}
function F5(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var K5 = /* @__PURE__ */ ne("<input/>"), W5 = /* @__PURE__ */ ne("<input/>");
function Tu(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ $(() => Zn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: P7
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), p();
    }
  }, s = de(), a = Q(s);
  {
    var l = (d) => {
      var h = K5();
      nt(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), T(d, h);
    }, u = (d) => {
      var h = W5();
      nt(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ks(h, n), T(d, h);
    };
    se(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return T(t, s), ue(i);
}
ae(Tu, { value: {} }, [], [], !0);
function wg(t, e) {
  le(e, !1);
  const n = Ou.create();
  Ql();
  var r = de(), o = Q(r);
  {
    var i = (s) => {
      Tu(s, je(() => n.props));
    };
    se(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  T(t, r), ue();
}
ae(wg, {}, [], [], !0);
var Z5 = /* @__PURE__ */ ne("<button><!></button>"), q5 = /* @__PURE__ */ ne("<!> <!>", 1);
function bg(t, e) {
  const n = _i();
  le(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Xn(n)), f = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ Ve(e, [
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
  const x = j5.getOr(null);
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), Pt.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const _ = Pu.create(
    {
      checked: ve(() => r(), (P) => {
        r(P), i()?.(P);
      }),
      disabled: ve(() => a() ?? !1),
      required: ve(() => l()),
      name: ve(() => u()),
      value: ve(() => d()),
      id: ve(() => h()),
      ref: ve(() => o(), (P) => o(P)),
      indeterminate: ve(() => f(), (P) => {
        f(P), v()?.(P);
      }),
      type: ve(() => y()),
      readonly: ve(() => !!w())
    },
    x
  ), k = /* @__PURE__ */ $(() => Zn({ ...b }, _.props));
  var C = {
    get checked() {
      return r();
    },
    set checked(P = !1) {
      r(P), p();
    },
    get ref() {
      return o();
    },
    set ref(P = null) {
      o(P), p();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(P) {
      i(P), p();
    },
    get children() {
      return s();
    },
    set children(P) {
      s(P), p();
    },
    get disabled() {
      return a();
    },
    set disabled(P = !1) {
      a(P), p();
    },
    get required() {
      return l();
    },
    set required(P = !1) {
      l(P), p();
    },
    get name() {
      return u();
    },
    set name(P = void 0) {
      u(P), p();
    },
    get value() {
      return d();
    },
    set value(P = "on") {
      d(P), p();
    },
    get id() {
      return h();
    },
    set id(P = Xn(n)) {
      h(P), p();
    },
    get indeterminate() {
      return f();
    },
    set indeterminate(P = !1) {
      f(P), p();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(P) {
      v(P), p();
    },
    get child() {
      return m();
    },
    set child(P) {
      m(P), p();
    },
    get type() {
      return y();
    },
    set type(P = "button") {
      y(P), p();
    },
    get readonly() {
      return w();
    },
    set readonly(P) {
      w(P), p();
    }
  }, O = q5(), z = Q(O);
  {
    var W = (P) => {
      var S = de(), H = Q(S);
      {
        let E = /* @__PURE__ */ $(() => ({ props: c(k), ..._.snippetProps }));
        Te(H, m, () => c(E));
      }
      T(P, S);
    }, B = (P) => {
      var S = Z5();
      nt(S, () => ({ ...c(k) }));
      var H = Z(S);
      Te(H, () => s() ?? Fe, () => _.snippetProps), K(S), T(P, S);
    };
    se(z, (P) => {
      m() ? P(W) : P(B, !1);
    });
  }
  var D = V(z, 2);
  return wg(D, {}), T(t, O), ue(C);
}
ae(
  bg,
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
const Y5 = ["top", "right", "bottom", "left"], Dr = Math.min, un = Math.max, Ws = Math.round, ns = Math.floor, qn = (t) => ({
  x: t,
  y: t
}), X5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U5 = {
  start: "end",
  end: "start"
};
function kl(t, e, n) {
  return un(t, Dr(e, n));
}
function vr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mr(t) {
  return t.split("-")[0];
}
function Ro(t) {
  return t.split("-")[1];
}
function Nu(t) {
  return t === "x" ? "y" : "x";
}
function Au(t) {
  return t === "y" ? "height" : "width";
}
const J5 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Fn(t) {
  return J5.has(mr(t)) ? "y" : "x";
}
function Du(t) {
  return Nu(Fn(t));
}
function G5(t, e, n) {
  n === void 0 && (n = !1);
  const r = Ro(t), o = Du(t), i = Au(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Zs(s)), [s, Zs(s)];
}
function Q5(t) {
  const e = Zs(t);
  return [$l(t), e, $l(e)];
}
function $l(t) {
  return t.replace(/start|end/g, (e) => U5[e]);
}
const xd = ["left", "right"], Cd = ["right", "left"], e3 = ["top", "bottom"], t3 = ["bottom", "top"];
function n3(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Cd : xd : e ? xd : Cd;
    case "left":
    case "right":
      return e ? e3 : t3;
    default:
      return [];
  }
}
function r3(t, e, n, r) {
  const o = Ro(t);
  let i = n3(mr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map($l)))), i;
}
function Zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => X5[e]);
}
function o3(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function xg(t) {
  return typeof t != "number" ? o3(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function qs(t) {
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
function kd(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = Fn(e), s = Du(e), a = Au(s), l = mr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Ro(e)) {
    case "start":
      v[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const i3 = async (t, e, n) => {
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
  } = kd(u, r, l), f = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x,
      y: _,
      data: k,
      reset: C
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
    d = x ?? d, h = _ ?? h, v = {
      ...v,
      [w]: {
        ...v[w],
        ...k
      }
    }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : C.rects), {
      x: d,
      y: h
    } = kd(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function bi(t, e) {
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
  } = vr(e, t), m = xg(v), y = a[f ? h === "floating" ? "reference" : "floating" : h], w = qs(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
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
  }, k = qs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - k.top + m.top) / _.y,
    bottom: (k.bottom - w.bottom + m.bottom) / _.y,
    left: (w.left - k.left + m.left) / _.x,
    right: (k.right - w.right + m.right) / _.x
  };
}
const s3 = (t) => ({
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
    } = vr(t, e) || {};
    if (u == null)
      return {};
    const h = xg(d), f = {
      x: n,
      y: r
    }, v = Du(o), m = Au(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", _ = w ? "clientHeight" : "clientWidth", k = i.reference[m] + i.reference[v] - f[v] - i.floating[m], C = f[v] - i.reference[v], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let z = O ? O[_] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(O))) && (z = a.floating[_] || i.floating[m]);
    const W = k / 2 - C / 2, B = z / 2 - y[m] / 2 - 1, D = Dr(h[b], B), P = Dr(h[x], B), S = D, H = z - y[m] - P, E = z / 2 - y[m] / 2 + W, A = kl(S, E, H), N = !l.arrow && Ro(o) != null && E !== A && i.reference[m] / 2 - (E < S ? D : P) - y[m] / 2 < 0, I = N ? E < S ? E - S : E - H : 0;
    return {
      [v]: f[v] + I,
      data: {
        [v]: A,
        centerOffset: E - A - I,
        ...N && {
          alignmentOffset: I
        }
      },
      reset: N
    };
  }
}), a3 = function(t) {
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
      } = vr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = mr(o), x = Fn(a), _ = mr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (_ || !y ? [Zs(a)] : Q5(a)), O = m !== "none";
      !f && O && C.push(...r3(a, y, m, k));
      const z = [a, ...C], W = await bi(e, w), B = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(W[b]), h) {
        const E = G5(o, s, k);
        B.push(W[E[0]], W[E[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: B
      }], !B.every((E) => E <= 0)) {
        var P, S;
        const E = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, A = z[E];
        if (A && (!(h === "alignment" && x !== Fn(A)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((I) => Fn(I.placement) === x ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: E,
              overflows: D
            },
            reset: {
              placement: A
            }
          };
        let N = (S = D.filter((I) => I.overflows[0] <= 0).sort((I, U) => I.overflows[1] - U.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!N)
          switch (v) {
            case "bestFit": {
              var H;
              const I = (H = D.filter((U) => {
                if (O) {
                  const G = Fn(U.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((G) => G > 0).reduce((G, L) => G + L, 0)]).sort((U, G) => U[1] - G[1])[0]) == null ? void 0 : H[0];
              I && (N = I);
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
};
function $d(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Sd(t) {
  return Y5.some((e) => t[e] >= 0);
}
const l3 = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = vr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await bi(e, {
            ...o,
            elementContext: "reference"
          }), s = $d(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Sd(s)
            }
          };
        }
        case "escaped": {
          const i = await bi(e, {
            ...o,
            altBoundary: !0
          }), s = $d(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Sd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Cg = /* @__PURE__ */ new Set(["left", "top"]);
async function u3(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = mr(n), a = Ro(n), l = Fn(n) === "y", u = Cg.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = vr(e, t);
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
const c3 = function(t) {
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
      } = e, l = await u3(e, t);
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
}, d3 = function(t) {
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
      } = vr(t, e), u = {
        x: n,
        y: r
      }, d = await bi(e, l), h = Fn(mr(o)), f = Nu(h);
      let v = u[f], m = u[h];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = v + d[w], _ = v - d[b];
        v = kl(x, v, _);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = m + d[w], _ = m - d[b];
        m = kl(x, m, _);
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
}, h3 = function(t) {
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
      } = vr(t, e), d = {
        x: n,
        y: r
      }, h = Fn(o), f = Nu(h);
      let v = d[f], m = d[h];
      const y = vr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const _ = f === "y" ? "height" : "width", k = i.reference[f] - i.floating[_] + w.mainAxis, C = i.reference[f] + i.reference[_] - w.mainAxis;
        v < k ? v = k : v > C && (v = C);
      }
      if (u) {
        var b, x;
        const _ = f === "y" ? "width" : "height", k = Cg.has(mr(o)), C = i.reference[h] - i.floating[_] + (k && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (k ? 0 : w.crossAxis), O = i.reference[h] + i.reference[_] + (k ? 0 : ((x = s.offset) == null ? void 0 : x[h]) || 0) - (k ? w.crossAxis : 0);
        m < C ? m = C : m > O && (m = O);
      }
      return {
        [f]: v,
        [h]: m
      };
    }
  };
}, f3 = function(t) {
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
      } = vr(t, e), d = await bi(e, u), h = mr(o), f = Ro(o), v = Fn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = f === "end" ? "top" : "bottom");
      const x = y - d.top - d.bottom, _ = m - d.left - d.right, k = Dr(y - d[w], x), C = Dr(m - d[b], _), O = !e.middlewareData.shift;
      let z = k, W = C;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (W = _), (r = e.middlewareData.shift) != null && r.enabled.y && (z = x), O && !f) {
        const D = un(d.left, 0), P = un(d.right, 0), S = un(d.top, 0), H = un(d.bottom, 0);
        v ? W = m - 2 * (D !== 0 || P !== 0 ? D + P : un(d.left, d.right)) : z = y - 2 * (S !== 0 || H !== 0 ? S + H : un(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: W,
        availableHeight: z
      });
      const B = await s.getDimensions(a.floating);
      return m !== B.width || y !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ya() {
  return typeof window < "u";
}
function Bo(t) {
  return kg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function dn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Qn(t) {
  var e;
  return (e = (kg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function kg(t) {
  return ya() ? t instanceof Node || t instanceof dn(t).Node : !1;
}
function Nn(t) {
  return ya() ? t instanceof Element || t instanceof dn(t).Element : !1;
}
function Un(t) {
  return ya() ? t instanceof HTMLElement || t instanceof dn(t).HTMLElement : !1;
}
function _d(t) {
  return !ya() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof dn(t).ShadowRoot;
}
const p3 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = An(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !p3.has(o);
}
const g3 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function v3(t) {
  return g3.has(Bo(t));
}
const m3 = [":popover-open", ":modal"];
function wa(t) {
  return m3.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const y3 = ["transform", "translate", "scale", "rotate", "perspective"], w3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], b3 = ["paint", "layout", "strict", "content"];
function Mu(t) {
  const e = Lu(), n = Nn(t) ? An(t) : t;
  return y3.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || w3.some((r) => (n.willChange || "").includes(r)) || b3.some((r) => (n.contain || "").includes(r));
}
function x3(t) {
  let e = Mr(t);
  for (; Un(e) && !Mo(e); ) {
    if (Mu(e))
      return e;
    if (wa(e))
      return null;
    e = Mr(e);
  }
  return null;
}
function Lu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const C3 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Mo(t) {
  return C3.has(Bo(t));
}
function An(t) {
  return dn(t).getComputedStyle(t);
}
function ba(t) {
  return Nn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Mr(t) {
  if (Bo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    _d(t) && t.host || // Fallback.
    Qn(t)
  );
  return _d(e) ? e.host : e;
}
function $g(t) {
  const e = Mr(t);
  return Mo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Un(e) && Bi(e) ? e : $g(e);
}
function xi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = $g(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = dn(o);
  if (i) {
    const a = Sl(s);
    return e.concat(s, s.visualViewport || [], Bi(o) ? o : [], a && n ? xi(a) : []);
  }
  return e.concat(o, xi(o, [], n));
}
function Sl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Sg(t) {
  const e = An(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Un(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Ws(n) !== i || Ws(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Hu(t) {
  return Nn(t) ? t : t.contextElement;
}
function ko(t) {
  const e = Hu(t);
  if (!Un(e))
    return qn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Sg(e);
  let s = (i ? Ws(n.width) : n.width) / r, a = (i ? Ws(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const k3 = /* @__PURE__ */ qn(0);
function _g(t) {
  const e = dn(t);
  return !Lu() || !e.visualViewport ? k3 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function $3(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== dn(t) ? !1 : e;
}
function ro(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = Hu(t);
  let s = qn(1);
  e && (r ? Nn(r) && (s = ko(r)) : s = ko(t));
  const a = $3(i, n, r) ? _g(i) : qn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = dn(i), v = r && Nn(r) ? dn(r) : r;
    let m = f, y = Sl(m);
    for (; y && r && v !== m; ) {
      const w = ko(y), b = y.getBoundingClientRect(), x = An(y), _ = b.left + (y.clientLeft + parseFloat(x.paddingLeft)) * w.x, k = b.top + (y.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += _, u += k, m = dn(y), y = Sl(m);
    }
  }
  return qs({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function xa(t, e) {
  const n = ba(t).scrollLeft;
  return e ? e.left + n : ro(Qn(t)).left + n;
}
function Eg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - xa(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function S3(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = Qn(r), a = e ? wa(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = qn(1);
  const d = qn(0), h = Un(r);
  if ((h || !h && !i) && ((Bo(r) !== "body" || Bi(s)) && (l = ba(r)), Un(r))) {
    const v = ro(r);
    u = ko(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const f = s && !h && !i ? Eg(s, l) : qn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function _3(t) {
  return Array.from(t.getClientRects());
}
function E3(t) {
  const e = Qn(t), n = ba(t), r = t.ownerDocument.body, o = un(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = un(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + xa(t);
  const a = -n.scrollTop;
  return An(r).direction === "rtl" && (s += un(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Ed = 25;
function P3(t, e) {
  const n = dn(t), r = Qn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Lu();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = xa(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= Ed && (i -= m);
  } else u <= Ed && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const O3 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function T3(t, e) {
  const n = ro(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Un(t) ? ko(t) : qn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Pd(t, e, n) {
  let r;
  if (e === "viewport")
    r = P3(t, n);
  else if (e === "document")
    r = E3(Qn(t));
  else if (Nn(e))
    r = T3(e, n);
  else {
    const o = _g(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return qs(r);
}
function Pg(t, e) {
  const n = Mr(t);
  return n === e || !Nn(n) || Mo(n) ? !1 : An(n).position === "fixed" || Pg(n, e);
}
function N3(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = xi(t, [], !1).filter((a) => Nn(a) && Bo(a) !== "body"), o = null;
  const i = An(t).position === "fixed";
  let s = i ? Mr(t) : t;
  for (; Nn(s) && !Mo(s); ) {
    const a = An(s), l = Mu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && O3.has(o.position) || Bi(s) && !l && Pg(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = Mr(s);
  }
  return e.set(t, r), r;
}
function A3(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? wa(e) ? [] : N3(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Pd(e, u, o);
    return l.top = un(d.top, l.top), l.right = Dr(d.right, l.right), l.bottom = Dr(d.bottom, l.bottom), l.left = un(d.left, l.left), l;
  }, Pd(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function D3(t) {
  const {
    width: e,
    height: n
  } = Sg(t);
  return {
    width: e,
    height: n
  };
}
function M3(t, e, n) {
  const r = Un(e), o = Qn(e), i = n === "fixed", s = ro(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = qn(0);
  function u() {
    l.x = xa(o);
  }
  if (r || !r && !i)
    if ((Bo(e) !== "body" || Bi(o)) && (a = ba(e)), r) {
      const v = ro(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Eg(o, a) : qn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ja(t) {
  return An(t).position === "static";
}
function Od(t, e) {
  if (!Un(t) || An(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Qn(t) === n && (n = n.ownerDocument.body), n;
}
function Og(t, e) {
  const n = dn(t);
  if (wa(t))
    return n;
  if (!Un(t)) {
    let o = Mr(t);
    for (; o && !Mo(o); ) {
      if (Nn(o) && !ja(o))
        return o;
      o = Mr(o);
    }
    return n;
  }
  let r = Od(t, e);
  for (; r && v3(r) && ja(r); )
    r = Od(r, e);
  return r && Mo(r) && ja(r) && !Mu(r) ? n : r || x3(t) || n;
}
const L3 = async function(t) {
  const e = this.getOffsetParent || Og, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: M3(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function H3(t) {
  return An(t).direction === "rtl";
}
const z3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: S3,
  getDocumentElement: Qn,
  getClippingRect: A3,
  getOffsetParent: Og,
  getElementRects: L3,
  getClientRects: _3,
  getDimensions: D3,
  getScale: ko,
  isElement: Nn,
  isRTL: H3
};
function Tg(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function V3(t, e) {
  let n = null, r;
  const o = Qn(t);
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
    const m = ns(h), y = ns(o.clientWidth - (d + f)), w = ns(o.clientHeight - (h + v)), b = ns(d), x = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: un(0, Dr(1, l)) || 1
    };
    let _ = !0;
    function k(C) {
      const O = C[0].intersectionRatio;
      if (O !== l) {
        if (!_)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Tg(u, t.getBoundingClientRect()) && s(), _ = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, x);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function I3(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Hu(t), d = o || i ? [...u ? xi(u) : [], ...xi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? V3(u, n) : null;
  let f = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === u && v && (v.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var _;
      (_ = v) == null || _.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? ro(t) : null;
  l && w();
  function w() {
    const b = ro(t);
    y && !Tg(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const Ng = c3, Ag = d3, Dg = a3, R3 = f3, B3 = l3, Mg = s3, j3 = h3, Lg = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: z3,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return i3(t, e, {
    ...o,
    platform: i
  });
};
function Br(t) {
  return typeof t == "function" ? t() : t;
}
function Hg(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Td(t, e) {
  const n = Hg(t);
  return Math.round(e * n) / n;
}
function F3(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function K3(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ $(() => Br(t.open) ?? !0), r = /* @__PURE__ */ $(() => Br(t.middleware)), o = /* @__PURE__ */ $(() => Br(t.transform) ?? !0), i = /* @__PURE__ */ $(() => Br(t.placement) ?? "bottom"), s = /* @__PURE__ */ $(() => Br(t.strategy) ?? "absolute"), a = /* @__PURE__ */ $(() => Br(t.sideOffset) ?? 0), l = /* @__PURE__ */ $(() => Br(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ we(0), h = /* @__PURE__ */ we(0);
  const f = jn(null);
  let v = /* @__PURE__ */ we(Ct(c(s))), m = /* @__PURE__ */ we(Ct(c(i))), y = /* @__PURE__ */ we(Ct({})), w = /* @__PURE__ */ we(!1), b = !1, x = 0;
  const _ = /* @__PURE__ */ $(() => {
    const D = f.current ? Td(f.current, c(d)) : c(d), P = f.current ? Td(f.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${D}px, ${P}px)`,
      ...f.current && Hg(f.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${D}px`,
      top: `${P}px`
    };
  });
  let k;
  function C() {
    if (u.current === null || f.current === null) return;
    const D = u.current, P = f.current, S = ++x;
    Lg(D, P, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((H) => {
      if (!(S !== x || u.current !== D || f.current !== P)) {
        if (W3(D)) {
          F(
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
          const E = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (H.x <= E && H.y <= E) return;
        }
        F(d, H.x, !0), F(h, H.y, !0), F(v, H.strategy, !0), F(m, H.placement, !0), F(y, H.middlewareData, !0), F(w, !0);
      }
    });
  }
  function O() {
    typeof k == "function" && (k(), k = void 0), x++;
  }
  function z() {
    if (O(), e === void 0) {
      C();
      return;
    }
    c(n) && (u.current === null || f.current === null || (k = e(u.current, f.current, C)));
  }
  function W() {
    !c(n) && f.current === null && F(w, !1);
  }
  function B() {
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
    e === void 0 && c(n) && C();
  }), Be(z), Be(() => {
    if (e !== void 0) {
      if (B(), !c(n)) {
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
      C();
    }
  }), Be(W), Be(() => O), {
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
      return c(_);
    },
    get update() {
      return C;
    }
  };
}
function W3(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const Z3 = { top: "bottom", right: "left", bottom: "top", left: "right" }, zu = new Ir("Floating.Root"), Nd = new Ir("Floating.Content"), Vu = new Ir("Floating.Root");
class Ys {
  static create(e = !1) {
    return e ? Vu.set(new Ys()) : zu.set(new Ys());
  }
  anchorNode = jn(null);
  customAnchorNode = jn(null);
  triggerNode = jn(null);
  constructor() {
    Be(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Xs {
  static create(e, n = !1) {
    return n ? Nd.set(new Xs(e, Vu.get())) : Nd.set(new Xs(e, zu.get()));
  }
  opts;
  root;
  // nodes
  contentRef = jn(null);
  wrapperRef = jn(null);
  arrowRef = jn(null);
  contentAttachment = Nr(this.contentRef);
  wrapperAttachment = Nr(this.wrapperRef);
  arrowAttachment = Nr(this.arrowRef);
  // ids
  arrowId = jn(Ks());
  #e = /* @__PURE__ */ $(() => {
    if (typeof this.opts.style == "string") return ei(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new M7(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ $(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ $(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ $(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ $(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ $(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(J7),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ we(void 0);
  #c = /* @__PURE__ */ we(void 0);
  #d = /* @__PURE__ */ we(void 0);
  #h = /* @__PURE__ */ we(void 0);
  #p = /* @__PURE__ */ $(() => [
    Ng({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && Ag({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? j3() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && Dg({ ...this.detectOverflowOptions }),
    R3({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        F(this.#u, n, !0), F(this.#c, r, !0), F(this.#d, o, !0), F(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && Mg({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    q3({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && B3({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#p);
  }
  set middleware(e) {
    F(this.#p, e);
  }
  floating;
  #f = /* @__PURE__ */ $(() => Y3(this.floating.placement));
  get placedSide() {
    return c(this.#f);
  }
  set placedSide(e) {
    F(this.#f, e);
  }
  #y = /* @__PURE__ */ $(() => X3(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    F(this.#y, e);
  }
  #v = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    F(this.#v, e);
  }
  #w = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    F(this.#w, e);
  }
  #m = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    F(this.#m, e);
  }
  #g = /* @__PURE__ */ we();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    F(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ $(() => Z3[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    F(this.#b, e);
  }
  #x = /* @__PURE__ */ $(() => ({
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
    F(this.#x, e);
  }
  #C = /* @__PURE__ */ $(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: bu({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#C);
  }
  set props(e) {
    F(this.#C, e);
  }
  #k = /* @__PURE__ */ $(() => ({
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
    return c(this.#k);
  }
  set arrowStyle(e) {
    F(this.#k, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Pt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = K3({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => I3(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Be(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), Pt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Xp(r), i = o.requestAnimationFrame(() => {
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
class Us {
  static create(e, n = !1) {
    return n ? new Us(e, Vu.get()) : new Us(e, zu.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = f7(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function q3(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = Iu(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${f}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${f}px`), { data: { x: v, y: m } };
    }
  };
}
function Iu(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function Y3(t) {
  return Iu(t)[0];
}
function X3(t) {
  return Iu(t)[1];
}
function zg(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  Ys.create(r());
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
  }, i = de(), s = Q(i);
  return Te(s, () => n() ?? Fe), T(t, i), ue(o);
}
ae(zg, { children: {}, tooltip: {} }, [], [], !0);
class U3 {
  #e;
  #t = /* @__PURE__ */ $(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = hg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = Cu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const J3 = [ti, eg, Gp], G3 = [mo, Qp, Jp], Q3 = [...J3, ...G3], e4 = xu({
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
}), ji = new Ir("Select.Root | Combobox.Root"), Vg = new Ir("Select.Content | Combobox.Content");
class Ig {
  opts;
  #e = /* @__PURE__ */ we(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    F(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ we(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    F(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ we(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    F(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ we(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    F(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ we(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    F(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ we("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    F(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ we(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    F(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    F(this.#u, e);
  }
  #c = /* @__PURE__ */ we(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    F(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new Ri(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new Q7({
      ref: ve(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), en(() => {
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
  getBitsAttr = (e) => e4.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class t4 extends Ig {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ $(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    F(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Be(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Pt(() => this.opts.open.current, () => {
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
    Ii(() => {
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
class n4 extends Ig {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ $(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Be(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Pt(() => this.opts.open.current, () => {
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
    Ii(() => {
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
class r4 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new t4(r) : new n4(r);
    return ji.set(o);
  }
}
class Ru {
  static create(e) {
    return new Ru(e, ji.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Nr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Ri(e.ref), this.#e = new O5({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new U3({
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
    if (this.root.isUsingKeyboard = !0, (e.key === mo || e.key === ti) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === ml || e.key === fs || e.key === ti || e.key === mo)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === ti) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === mo) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === fd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === ml || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === fs && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === mo && e.altKey && this.root.handleClose(), Q3.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === ti ? d = $5(s, l, u) : e.key === mo ? d = S5(s, l, u) : e.key === Qp ? d = _5(s, l, 10, u) : e.key === eg ? d = E5(s, l, 10, u) : e.key === Gp ? d = s[0] : e.key === Jp && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === fs, i = this.root.getCandidateNodes();
    if (e.key !== fd) {
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
  #i = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": vl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": Up(this.root.opts.open.current),
    "data-disabled": Is(this.root.opts.disabled.current),
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
    F(this.#i, e);
  }
}
class Bu {
  static create(e) {
    return Vg.set(new Bu(e, ji.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ we(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    F(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Nr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Ri(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), Io(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), Pt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), Pt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ $(() => F3(this.root.isCombobox ? "combobox" : "select"));
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
  #n = /* @__PURE__ */ $(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": Up(this.root.opts.open.current),
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
    F(this.#r, e);
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
class ju {
  static create(e) {
    return new ju(e, ji.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ $(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    F(this.#t, e);
  }
  prevHighlighted = new L7(() => this.isHighlighted);
  #n = /* @__PURE__ */ we(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    F(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Nr(e.ref), Pt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), Pt(() => this.mounted, () => {
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
  #r = /* @__PURE__ */ $(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return c(this.#r);
  }
  set snippetProps(e) {
    F(this.#r, e);
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
      if (e.pointerType === "touch" && !yl) {
        kt(
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
  #o = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": Is(this.opts.disabled.current),
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
    F(this.#o, e);
  }
}
class Fu {
  static create(e) {
    return new Fu(e, ji.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ $(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return c(this.#e);
  }
  set shouldRender(e) {
    F(this.#e, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
  }
  #t = /* @__PURE__ */ $(() => ({
    disabled: hd(this.root.opts.disabled.current),
    required: hd(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    F(this.#t, e);
  }
}
class Ku {
  static create(e) {
    return new Ku(e, Vg.get());
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
    F(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = Nr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ $(() => ({
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
    F(this.#t, e);
  }
}
function gs(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = Fu.create({ value: ve(() => n()) });
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
  }, s = de(), a = Q(s);
  {
    var l = (u) => {
      Tu(u, je(() => o.props, {
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
    se(a, (u) => {
      o.shouldRender && u(l);
    });
  }
  return T(t, s), ue(i);
}
ae(gs, { value: {}, autocomplete: {} }, [], [], !0);
function Rg(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  Us.create(
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
  }, l = de(), u = Q(l);
  return Te(u, () => r() ?? Fe), T(t, l), ue(a);
}
ae(Rg, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Bg(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), f = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), x = g(e, "style", 23, () => ({})), _ = g(e, "wrapperId", 23, Ks), k = g(e, "customAnchor", 7, null), C = g(e, "enabled", 7), O = g(e, "tooltip", 7, !1);
  const z = Xs.create(
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
      enabled: ve(() => C()),
      wrapperId: ve(() => _()),
      customAnchor: ve(() => k())
    },
    O()
  ), W = /* @__PURE__ */ $(() => Zn(z.wrapperProps, { style: { pointerEvents: "auto" } }));
  var B = {
    get content() {
      return n();
    },
    set content(S) {
      n(S), p();
    },
    get side() {
      return r();
    },
    set side(S = "bottom") {
      r(S), p();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(S = 0) {
      o(S), p();
    },
    get align() {
      return i();
    },
    set align(S = "center") {
      i(S), p();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(S = 0) {
      s(S), p();
    },
    get id() {
      return a();
    },
    set id(S) {
      a(S), p();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(S = 0) {
      l(S), p();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(S = !0) {
      u(S), p();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(S = []) {
      d(S), p();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(S = 0) {
      h(S), p();
    },
    get hideWhenDetached() {
      return f();
    },
    set hideWhenDetached(S = !1) {
      f(S), p();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(S = () => {
    }) {
      v(S), p();
    },
    get sticky() {
      return m();
    },
    set sticky(S = "partial") {
      m(S), p();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(S = "optimized") {
      y(S), p();
    },
    get strategy() {
      return w();
    },
    set strategy(S = "fixed") {
      w(S), p();
    },
    get dir() {
      return b();
    },
    set dir(S = "ltr") {
      b(S), p();
    },
    get style() {
      return x();
    },
    set style(S = {}) {
      x(S), p();
    },
    get wrapperId() {
      return _();
    },
    set wrapperId(S = Ks()) {
      _(S), p();
    },
    get customAnchor() {
      return k();
    },
    set customAnchor(S = null) {
      k(S), p();
    },
    get enabled() {
      return C();
    },
    set enabled(S) {
      C(S), p();
    },
    get tooltip() {
      return O();
    },
    set tooltip(S = !1) {
      O(S), p();
    }
  }, D = de(), P = Q(D);
  return Te(P, () => n() ?? Fe, () => ({ props: z.props, wrapperProps: c(W) })), T(t, D), ue(B);
}
ae(
  Bg,
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
function jg(t, e) {
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
  }, i = de(), s = Q(i);
  return Te(s, () => n() ?? Fe, () => ({ props: {}, wrapperProps: {} })), T(t, i), ue(o);
}
ae(jg, { content: {}, onPlaced: {} }, [], [], !0);
function Fg(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ Ve(e, [
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
  }, a = de(), l = Q(a);
  {
    var u = (h) => {
      jg(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Bg(h, je(
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
    se(l, (h) => {
      r() ? h(u) : h(d, !1);
    });
  }
  return T(t, a), ue(s);
}
ae(Fg, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var o4 = /* @__PURE__ */ ne("<!> <!>", 1);
function Wu(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), _ = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), C = g(e, "dir", 7), O = g(e, "preventScroll", 7), z = g(e, "wrapperId", 7), W = g(e, "style", 7), B = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), P = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), H = g(e, "onFocusOutside", 7), E = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), N = g(e, "trapFocus", 7, !0), I = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), L = g(e, "enabled", 7), X = g(e, "ref", 7), Y = g(e, "tooltip", 7, !1), j = g(e, "contentPointerEvents", 7, "auto"), q = /* @__PURE__ */ Ve(e, [
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
  const ee = /* @__PURE__ */ $(() => O() ?? !0), te = /* @__PURE__ */ $(() => k() ?? (c(ee) ? "fixed" : "absolute"));
  var oe = {
    get popper() {
      return n();
    },
    set popper(M) {
      n(M), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(M) {
      r(M), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(M) {
      o(M), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(M) {
      i(M), p();
    },
    get id() {
      return s();
    },
    set id(M) {
      s(M), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(M) {
      a(M), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(M) {
      l(M), p();
    },
    get side() {
      return u();
    },
    set side(M) {
      u(M), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(M) {
      d(M), p();
    },
    get align() {
      return h();
    },
    set align(M) {
      h(M), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(M) {
      f(M), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(M) {
      v(M), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(M) {
      m(M), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(M) {
      y(M), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(M) {
      w(M), p();
    },
    get sticky() {
      return b();
    },
    set sticky(M) {
      b(M), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(M) {
      x(M), p();
    },
    get updatePositionStrategy() {
      return _();
    },
    set updatePositionStrategy(M) {
      _(M), p();
    },
    get strategy() {
      return k();
    },
    set strategy(M) {
      k(M), p();
    },
    get dir() {
      return C();
    },
    set dir(M) {
      C(M), p();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(M) {
      O(M), p();
    },
    get wrapperId() {
      return z();
    },
    set wrapperId(M) {
      z(M), p();
    },
    get style() {
      return W();
    },
    set style(M) {
      W(M), p();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(M) {
      B(M), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(M) {
      D(M), p();
    },
    get onCloseAutoFocus() {
      return P();
    },
    set onCloseAutoFocus(M) {
      P(M), p();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(M) {
      S(M), p();
    },
    get onFocusOutside() {
      return H();
    },
    set onFocusOutside(M) {
      H(M), p();
    },
    get interactOutsideBehavior() {
      return E();
    },
    set interactOutsideBehavior(M = "close") {
      E(M), p();
    },
    get loop() {
      return A();
    },
    set loop(M) {
      A(M), p();
    },
    get trapFocus() {
      return N();
    },
    set trapFocus(M = !0) {
      N(M), p();
    },
    get isValidEvent() {
      return I();
    },
    set isValidEvent(M = () => !1) {
      I(M), p();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(M = null) {
      U(M), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(M = !1) {
      G(M), p();
    },
    get enabled() {
      return L();
    },
    set enabled(M) {
      L(M), p();
    },
    get ref() {
      return X();
    },
    set ref(M) {
      X(M), p();
    },
    get tooltip() {
      return Y();
    },
    set tooltip(M = !1) {
      Y(M), p();
    },
    get contentPointerEvents() {
      return j();
    },
    set contentPointerEvents(M = "auto") {
      j(M), p();
    }
  };
  return Fg(t, {
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
      return _();
    },
    get strategy() {
      return c(te);
    },
    get dir() {
      return C();
    },
    get wrapperId() {
      return z();
    },
    get style() {
      return W();
    },
    get onPlaced() {
      return B();
    },
    get customAnchor() {
      return U();
    },
    get enabled() {
      return L();
    },
    get tooltip() {
      return Y();
    },
    content: (M, re) => {
      let ge = () => re?.().props, pe = () => re?.().wrapperProps;
      var ie = o4(), ce = Q(ie);
      {
        var me = (he) => {
          Cl(he, {
            get preventScroll() {
              return c(ee);
            }
          });
        }, be = (he) => {
          var Ce = de(), De = Q(Ce);
          {
            var J = (Ie) => {
              Cl(Ie, {
                get preventScroll() {
                  return c(ee);
                }
              });
            };
            se(
              De,
              (Ie) => {
                e.forceMount || Ie(J);
              },
              !0
            );
          }
          T(he, Ce);
        };
        se(ce, (he) => {
          e.forceMount && L() ? he(me) : he(be, !1);
        });
      }
      var xe = V(ce, 2);
      gg(xe, {
        get onOpenAutoFocus() {
          return S();
        },
        get onCloseAutoFocus() {
          return P();
        },
        get loop() {
          return A();
        },
        get enabled() {
          return L();
        },
        get trapFocus() {
          return N();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return X();
        },
        focusScope: (he, Ce) => {
          let De = () => Ce?.().props;
          pg(he, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return L();
            },
            get ref() {
              return X();
            },
            children: (J, Ie) => {
              fg(J, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return D();
                },
                get onFocusOutside() {
                  return H();
                },
                get interactOutsideBehavior() {
                  return E();
                },
                get isValidEvent() {
                  return I();
                },
                get enabled() {
                  return L();
                },
                get ref() {
                  return X();
                },
                children: (Se, Me) => {
                  let Re = () => Me?.().props;
                  vg(Se, {
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
                      return L();
                    },
                    get ref() {
                      return X();
                    },
                    children: (Ge, st) => {
                      var it = de(), ct = Q(it);
                      {
                        let ye = /* @__PURE__ */ $(() => ({
                          props: Zn(q, ge(), Re(), De(), { style: { pointerEvents: j() } }),
                          wrapperProps: pe()
                        }));
                        Te(ct, () => n() ?? Fe, () => c(ye));
                      }
                      T(Ge, it);
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
      }), T(M, ie);
    },
    $$slots: { content: !0 }
  }), ue(oe);
}
ae(
  Wu,
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
function Kg(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), f = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), x = g(e, "sticky", 7), _ = g(e, "hideWhenDetached", 7), k = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), O = g(e, "dir", 7), z = g(e, "preventScroll", 7), W = g(e, "wrapperId", 7), B = g(e, "style", 7), D = g(e, "onPlaced", 7), P = g(e, "onInteractOutside", 7), S = g(e, "onCloseAutoFocus", 7), H = g(e, "onOpenAutoFocus", 7), E = g(e, "onFocusOutside", 7), A = g(e, "interactOutsideBehavior", 7, "close"), N = g(e, "loop", 7), I = g(e, "trapFocus", 7, !0), U = g(e, "isValidEvent", 7, () => !1), G = g(e, "customAnchor", 7, null), L = g(e, "isStatic", 7, !1), X = g(e, "ref", 7), Y = g(e, "shouldRender", 7), j = /* @__PURE__ */ Ve(e, [
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
  var q = {
    get popper() {
      return n();
    },
    set popper(M) {
      n(M), p();
    },
    get open() {
      return r();
    },
    set open(M) {
      r(M), p();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(M) {
      o(M), p();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(M) {
      i(M), p();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(M) {
      s(M), p();
    },
    get id() {
      return a();
    },
    set id(M) {
      a(M), p();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(M) {
      l(M), p();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(M) {
      u(M), p();
    },
    get side() {
      return d();
    },
    set side(M) {
      d(M), p();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(M) {
      h(M), p();
    },
    get align() {
      return f();
    },
    set align(M) {
      f(M), p();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(M) {
      v(M), p();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(M) {
      m(M), p();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(M) {
      y(M), p();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(M) {
      w(M), p();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(M) {
      b(M), p();
    },
    get sticky() {
      return x();
    },
    set sticky(M) {
      x(M), p();
    },
    get hideWhenDetached() {
      return _();
    },
    set hideWhenDetached(M) {
      _(M), p();
    },
    get updatePositionStrategy() {
      return k();
    },
    set updatePositionStrategy(M) {
      k(M), p();
    },
    get strategy() {
      return C();
    },
    set strategy(M) {
      C(M), p();
    },
    get dir() {
      return O();
    },
    set dir(M) {
      O(M), p();
    },
    get preventScroll() {
      return z();
    },
    set preventScroll(M) {
      z(M), p();
    },
    get wrapperId() {
      return W();
    },
    set wrapperId(M) {
      W(M), p();
    },
    get style() {
      return B();
    },
    set style(M) {
      B(M), p();
    },
    get onPlaced() {
      return D();
    },
    set onPlaced(M) {
      D(M), p();
    },
    get onInteractOutside() {
      return P();
    },
    set onInteractOutside(M) {
      P(M), p();
    },
    get onCloseAutoFocus() {
      return S();
    },
    set onCloseAutoFocus(M) {
      S(M), p();
    },
    get onOpenAutoFocus() {
      return H();
    },
    set onOpenAutoFocus(M) {
      H(M), p();
    },
    get onFocusOutside() {
      return E();
    },
    set onFocusOutside(M) {
      E(M), p();
    },
    get interactOutsideBehavior() {
      return A();
    },
    set interactOutsideBehavior(M = "close") {
      A(M), p();
    },
    get loop() {
      return N();
    },
    set loop(M) {
      N(M), p();
    },
    get trapFocus() {
      return I();
    },
    set trapFocus(M = !0) {
      I(M), p();
    },
    get isValidEvent() {
      return U();
    },
    set isValidEvent(M = () => !1) {
      U(M), p();
    },
    get customAnchor() {
      return G();
    },
    set customAnchor(M = null) {
      G(M), p();
    },
    get isStatic() {
      return L();
    },
    set isStatic(M = !1) {
      L(M), p();
    },
    get ref() {
      return X();
    },
    set ref(M) {
      X(M), p();
    },
    get shouldRender() {
      return Y();
    },
    set shouldRender(M) {
      Y(M), p();
    }
  }, ee = de(), te = Q(ee);
  {
    var oe = (M) => {
      Wu(M, je(
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
            return _();
          },
          get updatePositionStrategy() {
            return k();
          },
          get strategy() {
            return C();
          },
          get dir() {
            return O();
          },
          get preventScroll() {
            return z();
          },
          get wrapperId() {
            return W();
          },
          get style() {
            return B();
          },
          get onPlaced() {
            return D();
          },
          get customAnchor() {
            return G();
          },
          get isStatic() {
            return L();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return P();
          },
          get onCloseAutoFocus() {
            return S();
          },
          get onOpenAutoFocus() {
            return H();
          },
          get interactOutsideBehavior() {
            return A();
          },
          get loop() {
            return N();
          },
          get trapFocus() {
            return I();
          },
          get isValidEvent() {
            return U();
          },
          get onFocusOutside() {
            return E();
          },
          forceMount: !1,
          get ref() {
            return X();
          }
        },
        () => j
      ));
    };
    se(te, (M) => {
      Y() && M(oe);
    });
  }
  return T(t, ee), ue(q);
}
ae(
  Kg,
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
function Wg(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), _ = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), C = g(e, "dir", 7), O = g(e, "preventScroll", 7), z = g(e, "wrapperId", 7), W = g(e, "style", 7), B = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), P = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), H = g(e, "onFocusOutside", 7), E = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), N = g(e, "trapFocus", 7, !0), I = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), L = g(e, "enabled", 7), X = /* @__PURE__ */ Ve(e, [
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
  var Y = {
    get popper() {
      return n();
    },
    set popper(j) {
      n(j), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(j) {
      r(j), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(j) {
      o(j), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(j) {
      i(j), p();
    },
    get id() {
      return s();
    },
    set id(j) {
      s(j), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(j) {
      a(j), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(j) {
      l(j), p();
    },
    get side() {
      return u();
    },
    set side(j) {
      u(j), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(j) {
      d(j), p();
    },
    get align() {
      return h();
    },
    set align(j) {
      h(j), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(j) {
      f(j), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(j) {
      v(j), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(j) {
      m(j), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(j) {
      y(j), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(j) {
      w(j), p();
    },
    get sticky() {
      return b();
    },
    set sticky(j) {
      b(j), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(j) {
      x(j), p();
    },
    get updatePositionStrategy() {
      return _();
    },
    set updatePositionStrategy(j) {
      _(j), p();
    },
    get strategy() {
      return k();
    },
    set strategy(j) {
      k(j), p();
    },
    get dir() {
      return C();
    },
    set dir(j) {
      C(j), p();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(j) {
      O(j), p();
    },
    get wrapperId() {
      return z();
    },
    set wrapperId(j) {
      z(j), p();
    },
    get style() {
      return W();
    },
    set style(j) {
      W(j), p();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(j) {
      B(j), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(j) {
      D(j), p();
    },
    get onCloseAutoFocus() {
      return P();
    },
    set onCloseAutoFocus(j) {
      P(j), p();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(j) {
      S(j), p();
    },
    get onFocusOutside() {
      return H();
    },
    set onFocusOutside(j) {
      H(j), p();
    },
    get interactOutsideBehavior() {
      return E();
    },
    set interactOutsideBehavior(j = "close") {
      E(j), p();
    },
    get loop() {
      return A();
    },
    set loop(j) {
      A(j), p();
    },
    get trapFocus() {
      return N();
    },
    set trapFocus(j = !0) {
      N(j), p();
    },
    get isValidEvent() {
      return I();
    },
    set isValidEvent(j = () => !1) {
      I(j), p();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(j = null) {
      U(j), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(j = !1) {
      G(j), p();
    },
    get enabled() {
      return L();
    },
    set enabled(j) {
      L(j), p();
    }
  };
  return Wu(t, je(
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
        return _();
      },
      get strategy() {
        return k();
      },
      get dir() {
        return C();
      },
      get preventScroll() {
        return O();
      },
      get wrapperId() {
        return z();
      },
      get style() {
        return W();
      },
      get onPlaced() {
        return B();
      },
      get customAnchor() {
        return U();
      },
      get isStatic() {
        return G();
      },
      get enabled() {
        return L();
      },
      get onInteractOutside() {
        return D();
      },
      get onCloseAutoFocus() {
        return P();
      },
      get onOpenAutoFocus() {
        return S();
      },
      get interactOutsideBehavior() {
        return E();
      },
      get loop() {
        return A();
      },
      get trapFocus() {
        return N();
      },
      get isValidEvent() {
        return I();
      },
      get onFocusOutside() {
        return H();
      }
    },
    () => X,
    { forceMount: !0 }
  )), ue(Y);
}
ae(
  Wg,
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
var i4 = /* @__PURE__ */ ne("<div><div><!></div></div>"), s4 = /* @__PURE__ */ ne("<div><div><!></div></div>");
function _l(t, e) {
  const n = _i();
  le(e, !0);
  let r = g(e, "id", 23, () => Xn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Ke), l = g(e, "onEscapeKeydown", 7, Ke), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), f = g(e, "style", 7), v = /* @__PURE__ */ Ve(e, [
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
  const m = Bu.create({
    id: ve(() => r()),
    ref: ve(() => o(), (C) => o(C)),
    onInteractOutside: ve(() => a()),
    onEscapeKeydown: ve(() => l())
  }), y = /* @__PURE__ */ $(() => Zn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(C = Xn(n)) {
      r(C), p();
    },
    get ref() {
      return o();
    },
    set ref(C = null) {
      o(C), p();
    },
    get forceMount() {
      return i();
    },
    set forceMount(C = !1) {
      i(C), p();
    },
    get side() {
      return s();
    },
    set side(C = "bottom") {
      s(C), p();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(C = Ke) {
      a(C), p();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(C = Ke) {
      l(C), p();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), p();
    },
    get child() {
      return d();
    },
    set child(C) {
      d(C), p();
    },
    get preventScroll() {
      return h();
    },
    set preventScroll(C = !1) {
      h(C), p();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), p();
    }
  }, b = de(), x = Q(b);
  {
    var _ = (C) => {
      Wg(C, je(() => c(y), () => m.popperProps, {
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
        popper: (O, z) => {
          let W = () => z?.().props, B = () => z?.().wrapperProps;
          const D = /* @__PURE__ */ $(() => Zn(W(), { style: m.props.style }, { style: f() }));
          var P = de(), S = Q(P);
          {
            var H = (A) => {
              var N = de(), I = Q(N);
              {
                let U = /* @__PURE__ */ $(() => ({
                  props: c(D),
                  wrapperProps: B(),
                  ...m.snippetProps
                }));
                Te(I, d, () => c(U));
              }
              T(A, N);
            }, E = (A) => {
              var N = i4();
              nt(N, () => ({ ...B() }));
              var I = Z(N);
              nt(I, () => ({ ...c(D) }));
              var U = Z(I);
              Te(U, () => u() ?? Fe), K(I), K(N), T(A, N);
            };
            se(S, (A) => {
              d() ? A(H) : A(E, !1);
            });
          }
          T(O, P);
        },
        $$slots: { popper: !0 }
      }));
    }, k = (C) => {
      var O = de(), z = Q(O);
      {
        var W = (B) => {
          Kg(B, je(() => c(y), () => m.popperProps, {
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
            popper: (D, P) => {
              let S = () => P?.().props, H = () => P?.().wrapperProps;
              const E = /* @__PURE__ */ $(() => Zn(S(), { style: m.props.style }, { style: f() }));
              var A = de(), N = Q(A);
              {
                var I = (G) => {
                  var L = de(), X = Q(L);
                  {
                    let Y = /* @__PURE__ */ $(() => ({
                      props: c(E),
                      wrapperProps: H(),
                      ...m.snippetProps
                    }));
                    Te(X, d, () => c(Y));
                  }
                  T(G, L);
                }, U = (G) => {
                  var L = s4();
                  nt(L, () => ({ ...H() }));
                  var X = Z(L);
                  nt(X, () => ({ ...c(E) }));
                  var Y = Z(X);
                  Te(Y, () => u() ?? Fe), K(X), K(L), T(G, L);
                };
                se(N, (G) => {
                  d() ? G(I) : G(U, !1);
                });
              }
              T(D, A);
            },
            $$slots: { popper: !0 }
          }));
        };
        se(
          z,
          (B) => {
            i() || B(W);
          },
          !0
        );
      }
      T(C, O);
    };
    se(x, (C) => {
      i() ? C(_) : C(k, !1);
    });
  }
  return T(t, b), ue(w);
}
ae(
  _l,
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
function Zg(t, e) {
  le(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Ke);
  H7(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = Ke) {
      r(i), p();
    }
  };
  return ue(o);
}
ae(Zg, { mounted: {}, onMountedChange: {} }, [], [], !0);
var a4 = /* @__PURE__ */ ne("<div><!></div>"), l4 = /* @__PURE__ */ ne("<!> <!>", 1);
function El(t, e) {
  const n = _i();
  le(e, !0);
  let r = g(e, "id", 23, () => Xn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Ke), h = g(e, "onUnhighlight", 7, Ke), f = /* @__PURE__ */ Ve(e, [
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
  const v = ju.create({
    id: ve(() => r()),
    ref: ve(() => o(), (C) => o(C)),
    value: ve(() => i()),
    disabled: ve(() => a()),
    label: ve(() => s()),
    onHighlight: ve(() => d()),
    onUnhighlight: ve(() => h())
  }), m = /* @__PURE__ */ $(() => Zn(f, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(C = Xn(n)) {
      r(C), p();
    },
    get ref() {
      return o();
    },
    set ref(C = null) {
      o(C), p();
    },
    get value() {
      return i();
    },
    set value(C) {
      i(C), p();
    },
    get label() {
      return s();
    },
    set label(C = i) {
      s(C), p();
    },
    get disabled() {
      return a();
    },
    set disabled(C = !1) {
      a(C), p();
    },
    get children() {
      return l();
    },
    set children(C) {
      l(C), p();
    },
    get child() {
      return u();
    },
    set child(C) {
      u(C), p();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(C = Ke) {
      d(C), p();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(C = Ke) {
      h(C), p();
    }
  }, w = l4(), b = Q(w);
  {
    var x = (C) => {
      var O = de(), z = Q(O);
      {
        let W = /* @__PURE__ */ $(() => ({ props: c(m), ...v.snippetProps }));
        Te(z, u, () => c(W));
      }
      T(C, O);
    }, _ = (C) => {
      var O = a4();
      nt(O, () => ({ ...c(m) }));
      var z = Z(O);
      Te(z, () => l() ?? Fe, () => v.snippetProps), K(O), T(C, O);
    };
    se(b, (C) => {
      u() ? C(x) : C(_, !1);
    });
  }
  var k = V(b, 2);
  return Zg(k, {
    get mounted() {
      return v.mounted;
    },
    set mounted(C) {
      v.mounted = C;
    }
  }), T(t, w), ue(y);
}
ae(
  El,
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
var u4 = /* @__PURE__ */ ne("<div><!></div>");
const c4 = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Pl(t, e) {
  const n = _i();
  le(e, !0), rt(t, c4);
  let r = g(e, "id", 23, () => Xn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = Ku.create({
    id: ve(() => r()),
    ref: ve(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ $(() => Zn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Xn(n)) {
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
  }, h = de(), f = Q(h);
  {
    var v = (y) => {
      var w = de(), b = Q(w);
      Te(b, s, () => ({ props: c(u) })), T(y, w);
    }, m = (y) => {
      var w = u4();
      nt(w, () => ({ ...c(u) }));
      var b = Z(w);
      Te(b, () => i() ?? Fe), K(w), T(y, w);
    };
    se(f, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return T(t, h), ue(d);
}
ae(Pl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var d4 = /* @__PURE__ */ ne("<!> <!>", 1);
function Ol(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Ke), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Ke), u = g(e, "onOpenChangeComplete", 7, Ke), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), f = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), Pt.pre(() => n(), () => {
    b();
  });
  let x = /* @__PURE__ */ we("");
  const _ = r4.create({
    type: s(),
    value: ve(() => n(), (D) => {
      n(D), r()(D);
    }),
    disabled: ve(() => i()),
    required: ve(() => f()),
    open: ve(() => a(), (D) => {
      a(D), l()(D);
    }),
    loop: ve(() => d()),
    scrollAlignment: ve(() => h()),
    name: ve(() => o()),
    isCombobox: !1,
    items: ve(() => v()),
    allowDeselect: ve(() => m()),
    inputValue: ve(() => c(x), (D) => F(x, D, !0)),
    onOpenChangeComplete: ve(() => u())
  });
  var k = {
    get value() {
      return n();
    },
    set value(D) {
      n(D), p();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(D = Ke) {
      r(D), p();
    },
    get name() {
      return o();
    },
    set name(D = "") {
      o(D), p();
    },
    get disabled() {
      return i();
    },
    set disabled(D = !1) {
      i(D), p();
    },
    get type() {
      return s();
    },
    set type(D) {
      s(D), p();
    },
    get open() {
      return a();
    },
    set open(D = !1) {
      a(D), p();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(D = Ke) {
      l(D), p();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(D = Ke) {
      u(D), p();
    },
    get loop() {
      return d();
    },
    set loop(D = !1) {
      d(D), p();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(D = "nearest") {
      h(D), p();
    },
    get required() {
      return f();
    },
    set required(D = !1) {
      f(D), p();
    },
    get items() {
      return v();
    },
    set items(D = []) {
      v(D), p();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(D = !1) {
      m(D), p();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(D) {
      y(D), p();
    },
    get children() {
      return w();
    },
    set children(D) {
      w(D), p();
    }
  }, C = d4(), O = Q(C);
  zg(O, {
    children: (D, P) => {
      var S = de(), H = Q(S);
      Te(H, () => w() ?? Fe), T(D, S);
    },
    $$slots: { default: !0 }
  });
  var z = V(O, 2);
  {
    var W = (D) => {
      var P = de(), S = Q(P);
      {
        var H = (A) => {
          gs(A, {
            get autocomplete() {
              return y();
            }
          });
        }, E = (A) => {
          var N = de(), I = Q(N);
          Ot(I, 16, () => _.opts.value.current, (U) => U, (U, G) => {
            gs(U, {
              get value() {
                return G;
              },
              get autocomplete() {
                return y();
              }
            });
          }), T(A, N);
        };
        se(S, (A) => {
          _.opts.value.current.length === 0 ? A(H) : A(E, !1);
        });
      }
      T(D, P);
    }, B = (D) => {
      gs(D, {
        get autocomplete() {
          return y();
        },
        get value() {
          return _.opts.value.current;
        },
        set value(P) {
          _.opts.value.current = P;
        }
      });
    };
    se(z, (D) => {
      Array.isArray(_.opts.value.current) ? D(W) : D(B, !1);
    });
  }
  return T(t, C), ue(k);
}
ae(
  Ol,
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
var h4 = /* @__PURE__ */ ne("<button><!></button>");
function Tl(t, e) {
  const n = _i();
  le(e, !0);
  let r = g(e, "id", 23, () => Xn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ Ve(e, [
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
  const u = Ru.create({
    id: ve(() => r()),
    ref: ve(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ $(() => Zn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Xn(n)) {
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
  }, f = de(), v = Q(f);
  return At(v, () => Rg, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var x = de(), _ = Q(x);
        {
          var k = (O) => {
            var z = de(), W = Q(z);
            Te(W, i, () => ({ props: c(d) })), T(O, z);
          }, C = (O) => {
            var z = h4();
            nt(z, () => ({ ...c(d) }));
            var W = Z(z);
            Te(W, () => s() ?? Fe), K(z), T(O, z);
          };
          se(_, (O) => {
            i() ? O(k) : O(C, !1);
          });
        }
        T(w, x);
      },
      $$slots: { default: !0 }
    });
  }), T(t, f), ue(h);
}
ae(Tl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const f4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, p4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, g4 = Symbol("lucide-context"), v4 = () => wn(g4);
var m4 = /* @__PURE__ */ $e("<svg><!><!></svg>");
function Ca(t, e) {
  le(e, !0);
  const n = v4() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ Ve(e, [
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
  ]), h = /* @__PURE__ */ $(() => a() ? Number(s()) * 24 / Number(i()) : s());
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
  }, v = m4();
  nt(
    v,
    (w) => ({
      ...f4,
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
      () => !u() && !p4(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Z(v);
  Ot(m, 17, l, Qr, (w, b) => {
    var x = /* @__PURE__ */ $(() => Lo(c(b), 2));
    let _ = () => c(x)[0], k = () => c(x)[1];
    var C = de(), O = Q(C);
    Lh(O, _, !0, (z, W) => {
      nt(z, () => ({ ...k() }));
    }), T(w, C);
  });
  var y = V(m);
  return Te(y, () => u() ?? Fe), K(v), T(t, v), ue(f);
}
ae(
  Ca,
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
function qg(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Ca(t, je({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Te(a, () => e.children ?? Fe), T(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
ae(qg, {}, [], [], !0);
function Yg(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Ca(t, je({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Te(a, () => e.children ?? Fe), T(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
ae(Yg, {}, [], [], !0);
var y4 = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="tf-checkbox-indicator"><!></div>');
function Xg(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ Ve(e, [
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
  }, l = de(), u = Q(l);
  {
    const d = (f, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = y4(), b = Z(w);
      {
        var x = (k) => {
          qg(k, {});
        }, _ = (k) => {
          var C = de(), O = Q(C);
          {
            var z = (W) => {
              Yg(W, {});
            };
            se(
              O,
              (W) => {
                y() && W(z);
              },
              !0
            );
          }
          T(k, C);
        };
        se(b, (k) => {
          m() ? k(x) : k(_, !1);
        });
      }
      K(w), T(f, w);
    };
    let h = /* @__PURE__ */ $(() => Pn("nopan nodrag tf-checkbox peer", i()));
    At(u, () => bg, (f, v) => {
      v(f, je(
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
  return T(t, l), ue(a);
}
ae(Xg, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var w4 = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const b4 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Ug(t, e) {
  le(e, !0), rt(t, b4);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ Ve(e, [
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
  }, u = w4();
  nt(
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
  var d = Z(u);
  Tr(d);
  var h = V(d, 2);
  xt(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = V(h, 2);
  return Xe(f, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Ee();
      var y = He();
      Ae(() => ft(y, i())), T(v, y);
    },
    $$slots: { default: !0 }
  }), K(u), Ae(() => is(d, o())), T(t, u), ue(l);
}
ae(
  Ug,
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
var x4 = /* @__PURE__ */ ne("<input/>"), C4 = /* @__PURE__ */ ne("<input/>");
function xt(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ Ve(e, [
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
  }, d = de(), h = Q(d);
  {
    var f = (m) => {
      var y = x4();
      nt(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [() => Pn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), It(y, (w) => n(w), () => n()), lm(y, i), ks(y, r), T(m, y);
    }, v = (m) => {
      var y = C4();
      nt(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [() => Pn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), It(y, (w) => n(w), () => n()), ks(y, r), T(m, y);
    };
    se(h, (m) => {
      o() === "file" ? m(f) : m(v, !1);
    });
  }
  return T(t, d), ue(u);
}
ae(
  xt,
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
var k4 = /* @__PURE__ */ ne("<textarea></textarea>");
function et(t, e) {
  le(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ Ve(e, [
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
        const _ = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = _, h.style.overflowY = "hidden", u()?.(_);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let x = h.scrollHeight;
      if (!f) {
        const _ = e.rows || 1, k = getComputedStyle(h);
        f = parseFloat(k.fontSize) * 1.2 * _ + parseFloat(k.paddingTop) + parseFloat(k.paddingBottom) + parseFloat(k.borderTopWidth);
      }
      if (x < f && (x = f), l()) {
        const _ = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(_) ? (h.style.height = _, h.style.overflowY = "auto") : h.style.height = `${x}px`;
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
  }, y = k4();
  N1(y);
  var w = (x) => {
    v(), e.oninput?.(x);
  }, b = (x) => {
    v(), e.onchange?.(x);
  };
  return nt(
    y,
    (x) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: x
    }),
    [() => Pn("nodrag nowheel tf-textarea", o())]
  ), It(y, (x) => h = x, () => h), ks(y, r), T(t, y), ue(m);
}
ae(
  et,
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
var $4 = /* @__PURE__ */ ne('<div role="button"><!></div>'), S4 = /* @__PURE__ */ ne("<div></div>");
function Jg(t, e) {
  const n = gc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = gc(n, ["items", "onChange", "activeIndex"]);
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
  Ql();
  var u = S4();
  return nt(u, () => ({
    ...r,
    class: `tf-tabs ${Yl(r), vt(() => r.class) ?? ""}`
  })), Ot(u, 5, o, Qr, (d, h, f) => {
    var v = $4();
    Oe(v, "tabindex", f), v.__click = () => a(c(h), f), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), f));
    };
    var m = Z(v);
    {
      var y = (b) => {
        var x = He();
        Ae(() => ft(x, (c(h), vt(() => c(h).label)))), T(b, x);
      }, w = (b) => {
        var x = de(), _ = Q(x);
        Te(_, () => (c(h), vt(() => c(h).label) ?? Fe)), T(b, x);
      };
      se(m, (b) => {
        c(h), vt(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    K(v), Ae(() => sn(v, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), T(d, v);
  }), K(u), T(t, u), ue(l);
}
uo(["click", "keydown"]);
ae(Jg, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var _4 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), E4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), P4 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), O4 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), T4 = /* @__PURE__ */ ne("<div></div>");
const N4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Gg(t, e) {
  le(e, !0), rt(t, N4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => Ct([]));
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
  }, a = T4();
  return Ot(a, 21, n, Qr, (l, u, d) => {
    var h = O4(), f = Z(h);
    Oe(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), i(c(u)));
    };
    var v = Z(f);
    {
      var m = (C) => {
        var O = _4(), z = Z(O);
        ar(z, {
          get target() {
            return c(u).icon;
          }
        }), K(O), T(C, O);
      };
      se(v, (C) => {
        c(u).icon && C(m);
      });
    }
    var y = V(v, 2);
    ar(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = V(y, 2);
    K(f);
    var b = V(f, 2);
    {
      var x = (C) => {
        var O = E4(), z = Z(O);
        ar(z, {
          get target() {
            return c(u).description;
          }
        }), K(O), T(C, O);
      };
      se(b, (C) => {
        c(u).description && C(x);
      });
    }
    var _ = V(b, 2);
    {
      var k = (C) => {
        var O = P4(), z = Z(O);
        ar(z, {
          get target() {
            return c(u).content;
          }
        }), K(O), T(C, O);
      };
      se(_, (C) => {
        o().includes(c(u).key) && C(k);
      });
    }
    K(h), Ae((C) => sn(w, 1, `tf-collapse-item-title-arrow ${C ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), T(l, h);
  }), K(a), Ae(() => {
    Vt(a, e.style), sn(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), T(t, a), ue(s);
}
uo(["click", "keydown"]);
ae(Gg, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function ar(t, e) {
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
  }, o = de(), i = Q(o);
  {
    var s = (l) => {
      var u = de(), d = Q(u);
      Te(d, () => n() ?? Fe), T(l, u);
    }, a = (l) => {
      var u = de(), d = Q(u);
      la(d, n), T(l, u);
    };
    se(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return T(t, o), ue(r);
}
ae(ar, { target: {} }, [], [], !0);
function Nl(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Ca(t, je({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = de(), a = Q(s);
      Te(a, () => e.children ?? Fe), T(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
ae(Nl, {}, [], [], !0);
var A4 = /* @__PURE__ */ ne('<span class="tf-select-heading-item">,</span>'), D4 = /* @__PURE__ */ ne("<!> <!>", 1), M4 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), L4 = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), H4 = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), z4 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), V4 = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), I4 = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), R4 = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), B4 = /* @__PURE__ */ ne("<!> <!>", 1), j4 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), F4 = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), K4 = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), W4 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Z4 = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), q4 = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), Y4 = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), X4 = /* @__PURE__ */ ne("<!> <!>", 1);
function Dt(t, e) {
  le(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), f = /* @__PURE__ */ Ve(e, [
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
    "disabled",
    "class"
  ]), v = wn("tinyflow_options"), m = /* @__PURE__ */ $(() => {
    const P = [], S = (H) => {
      for (const E of H)
        P.push(E), E.children?.length && S(E.children);
    };
    return S(n()), P;
  }), y = /* @__PURE__ */ $(() => {
    const P = [], S = o().length > 0 ? o() : i();
    for (const H of S) {
      if (H == null) continue;
      const E = c(m).find((A) => A.value === H);
      E && P.push(E);
    }
    return P;
  }), w = /* @__PURE__ */ $(() => !a() && c(y).length > 0 ? String(c(y)[0].value) : ""), b = /* @__PURE__ */ $(() => a() ? c(y).map((P) => String(P.value)) : []);
  function x(P, S) {
    P.stopPropagation(), r()?.(S);
  }
  function _(P, S = 0) {
    const H = [];
    if (P)
      for (const E of P) {
        H.push({ item: E, level: S });
        const A = s() || l().includes(E.value);
        E.children?.length && A && H.push(..._(E.children, S + 1));
      }
    return H;
  }
  let k = /* @__PURE__ */ $(() => _(n()));
  function C(P) {
    return {
      value: String(P.value),
      label: typeof P.label == "string" ? P.label : String(P.value),
      disabled: !1
    };
  }
  var O = {
    get items() {
      return n();
    },
    set items(P) {
      n(P), p();
    },
    get onSelect() {
      return r();
    },
    set onSelect(P) {
      r(P), p();
    },
    get value() {
      return o();
    },
    set value(P = []) {
      o(P), p();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(P = []) {
      i(P), p();
    },
    get expandAll() {
      return s();
    },
    set expandAll(P = !0) {
      s(P), p();
    },
    get multiple() {
      return a();
    },
    set multiple(P = !1) {
      a(P), p();
    },
    get expandValue() {
      return l();
    },
    set expandValue(P = []) {
      l(P), p();
    },
    get placeholder() {
      return u();
    },
    set placeholder(P) {
      u(P), p();
    },
    get disabled() {
      return d();
    },
    set disabled(P = !1) {
      d(P), p();
    },
    get class() {
      return h();
    },
    set class(P) {
      h(P), p();
    }
  }, z = de(), W = Q(z);
  {
    var B = (P) => {
      var S = de(), H = Q(S);
      At(H, () => Ol, (E, A) => {
        A(E, je(
          {
            type: "multiple",
            get value() {
              return c(b);
            }
          },
          () => f,
          {
            children: (N, I) => {
              var U = B4(), G = Q(U);
              {
                let X = /* @__PURE__ */ $(() => Pn("nopan nodrag tf-select", d() && "tf-select-disabled", h()));
                At(G, () => Tl, (Y, j) => {
                  j(Y, {
                    get class() {
                      return c(X);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (q, ee) => {
                      var te = L4(), oe = Q(te), M = Z(oe);
                      {
                        var re = (ie) => {
                          var ce = de(), me = Q(ce);
                          Ot(me, 19, () => c(y), (be) => be.value, (be, xe, he) => {
                            var Ce = D4(), De = Q(Ce);
                            ar(De, {
                              get target() {
                                return c(xe).label;
                              }
                            });
                            var J = V(De, 2);
                            {
                              var Ie = (Se) => {
                                var Me = A4();
                                T(Se, Me);
                              };
                              se(J, (Se) => {
                                c(he) < c(y).length - 1 && Se(Ie);
                              });
                            }
                            T(be, Ce);
                          }), T(ie, ce);
                        }, ge = (ie) => {
                          var ce = M4(), me = Z(ce, !0);
                          K(ce), Ae(() => ft(me, u() ?? "")), T(ie, ce);
                        };
                        se(M, (ie) => {
                          c(y).length > 0 ? ie(re) : ie(ge, !1);
                        });
                      }
                      K(oe);
                      var pe = V(oe, 2);
                      Nl(pe, { class: "tf-select-heading-icon" }), T(q, te);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var L = V(G, 2);
              At(L, () => bl, (X, Y) => {
                Y(X, {
                  children: (j, q) => {
                    var ee = de(), te = Q(ee);
                    {
                      let oe = /* @__PURE__ */ $(() => Pn("nopan nodrag nowheel tf-root tf-select-content", v.theme === "dark" && "dark"));
                      At(te, () => _l, (M, re) => {
                        re(M, {
                          get class() {
                            return c(oe);
                          },
                          children: (ge, pe) => {
                            var ie = de(), ce = Q(ie);
                            At(ce, () => Pl, (me, be) => {
                              be(me, {
                                style: "padding: 4px;",
                                children: (xe, he) => {
                                  var Ce = de(), De = Q(Ce);
                                  {
                                    var J = (Se) => {
                                      var Me = H4();
                                      T(Se, Me);
                                    }, Ie = (Se) => {
                                      var Me = de(), Re = Q(Me);
                                      Ot(Re, 17, () => c(k), ({ item: Ge, level: st }) => Ge.value, (Ge, st) => {
                                        let it = () => c(st).item, ct = () => c(st).level;
                                        const ye = /* @__PURE__ */ $(() => it().children && it().children.length > 0), Ne = /* @__PURE__ */ $(() => C(it()));
                                        var at = de(), We = Q(at);
                                        {
                                          const pt = (lt, Nt) => {
                                            let dt = () => Nt?.().selected;
                                            var ht = R4(), mt = Q(ht), Ft = Z(mt);
                                            {
                                              var er = (yt) => {
                                                var Jt = z4();
                                                T(yt, Jt);
                                              }, Kt = (yt) => {
                                                var Jt = V4();
                                                T(yt, Jt);
                                              };
                                              se(Ft, (yt) => {
                                                c(ye) ? yt(er) : yt(Kt, !1);
                                              });
                                            }
                                            var ho = V(Ft, 2);
                                            ar(ho, {
                                              get target() {
                                                return it().label;
                                              }
                                            }), K(mt);
                                            var jo = V(mt, 2);
                                            {
                                              var fo = (yt) => {
                                                var Jt = I4();
                                                T(yt, Jt);
                                              };
                                              se(jo, (yt) => {
                                                dt() && yt(fo);
                                              });
                                            }
                                            T(lt, ht);
                                          };
                                          let Lt = /* @__PURE__ */ $(() => ct() * 4);
                                          At(We, () => El, (lt, Nt) => {
                                            Nt(lt, {
                                              get value() {
                                                return c(Ne).value;
                                              },
                                              get label() {
                                                return c(Ne).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Lt) ?? ""}px`;
                                              },
                                              onclick: (dt) => x(dt, it()),
                                              children: pt,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        T(Ge, at);
                                      }), T(Se, Me);
                                    };
                                    se(De, (Se) => {
                                      c(k).length === 0 ? Se(J) : Se(Ie, !1);
                                    });
                                  }
                                  T(xe, Ce);
                                },
                                $$slots: { default: !0 }
                              });
                            }), T(ge, ie);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    T(j, ee);
                  },
                  $$slots: { default: !0 }
                });
              }), T(N, U);
            },
            $$slots: { default: !0 }
          }
        ));
      }), T(P, S);
    }, D = (P) => {
      var S = de(), H = Q(S);
      At(H, () => Ol, (E, A) => {
        A(E, je(
          {
            type: "single",
            get value() {
              return c(w);
            }
          },
          () => f,
          {
            children: (N, I) => {
              var U = X4(), G = Q(U);
              {
                let X = /* @__PURE__ */ $(() => Pn("nopan nodrag tf-select", d() && " tf-select-disabled", h()));
                At(G, () => Tl, (Y, j) => {
                  j(Y, {
                    get class() {
                      return c(X);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (q, ee) => {
                      var te = F4(), oe = Q(te), M = Z(oe);
                      {
                        var re = (ie) => {
                          ar(ie, {
                            get target() {
                              return c(y)[0].label;
                            }
                          });
                        }, ge = (ie) => {
                          var ce = j4(), me = Z(ce, !0);
                          K(ce), Ae(() => ft(me, u() ?? "")), T(ie, ce);
                        };
                        se(M, (ie) => {
                          c(y).length > 0 ? ie(re) : ie(ge, !1);
                        });
                      }
                      K(oe);
                      var pe = V(oe, 2);
                      Nl(pe, { class: "tf-select-icon" }), T(q, te);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var L = V(G, 2);
              At(L, () => bl, (X, Y) => {
                Y(X, {
                  children: (j, q) => {
                    var ee = de(), te = Q(ee);
                    {
                      let oe = /* @__PURE__ */ $(() => Pn("nopan nodrag nowheel tf-root tf-select-content", v.theme === "dark" && "dark"));
                      At(te, () => _l, (M, re) => {
                        re(M, {
                          get class() {
                            return c(oe);
                          },
                          children: (ge, pe) => {
                            var ie = de(), ce = Q(ie);
                            At(ce, () => Pl, (me, be) => {
                              be(me, {
                                style: "padding: 4px;",
                                children: (xe, he) => {
                                  var Ce = de(), De = Q(Ce);
                                  {
                                    var J = (Se) => {
                                      var Me = K4();
                                      T(Se, Me);
                                    }, Ie = (Se) => {
                                      var Me = de(), Re = Q(Me);
                                      Ot(Re, 17, () => c(k), ({ item: Ge, level: st }) => Ge.value, (Ge, st) => {
                                        let it = () => c(st).item, ct = () => c(st).level;
                                        const ye = /* @__PURE__ */ $(() => it().children && it().children.length > 0), Ne = /* @__PURE__ */ $(() => C(it()));
                                        var at = de(), We = Q(at);
                                        {
                                          const pt = (lt, Nt) => {
                                            let dt = () => Nt?.().selected;
                                            var ht = Y4(), mt = Q(ht), Ft = Z(mt);
                                            {
                                              var er = (yt) => {
                                                var Jt = W4();
                                                T(yt, Jt);
                                              }, Kt = (yt) => {
                                                var Jt = Z4();
                                                T(yt, Jt);
                                              };
                                              se(Ft, (yt) => {
                                                c(ye) ? yt(er) : yt(Kt, !1);
                                              });
                                            }
                                            var ho = V(Ft, 2);
                                            ar(ho, {
                                              get target() {
                                                return it().label;
                                              }
                                            }), K(mt);
                                            var jo = V(mt, 2);
                                            {
                                              var fo = (yt) => {
                                                var Jt = q4();
                                                T(yt, Jt);
                                              };
                                              se(jo, (yt) => {
                                                dt() && yt(fo);
                                              });
                                            }
                                            T(lt, ht);
                                          };
                                          let Lt = /* @__PURE__ */ $(() => ct() * 4);
                                          At(We, () => El, (lt, Nt) => {
                                            Nt(lt, {
                                              get value() {
                                                return c(Ne).value;
                                              },
                                              get label() {
                                                return c(Ne).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Lt) ?? ""}px`;
                                              },
                                              onclick: (dt) => x(dt, it()),
                                              children: pt,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        T(Ge, at);
                                      }), T(Se, Me);
                                    };
                                    se(De, (Se) => {
                                      c(k).length === 0 ? Se(J) : Se(Ie, !1);
                                    });
                                  }
                                  T(xe, Ce);
                                },
                                $$slots: { default: !0 }
                              });
                            }), T(ge, ie);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    T(j, ee);
                  },
                  $$slots: { default: !0 }
                });
              }), T(N, U);
            },
            $$slots: { default: !0 }
          }
        ));
      }), T(P, S);
    };
    se(W, (P) => {
      a() ? P(B) : P(D, !1);
    });
  }
  return T(t, z), ue(O);
}
ae(
  Dt,
  {
    items: {},
    onSelect: {},
    value: {},
    defaultValue: {},
    expandAll: {},
    multiple: {},
    expandValue: {},
    placeholder: {},
    disabled: {},
    class: {}
  },
  [],
  [],
  !0
);
const U4 = ({
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
    Lg(t, u, {
      placement: r,
      middleware: [
        Ng(o),
        // 手动偏移配置
        Dg(i),
        //自动翻转
        Ag(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Mg({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: _, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: C, y: O } = k.arrow, z = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [z]: "2px"
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
var J4 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function co(t, e) {
  le(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  Dn(() => (a = U4({
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
  }, d = J4(), h = Z(d), f = Z(h);
  Te(f, n), K(h), It(h, (y) => i = y, () => i);
  var v = V(h, 2), m = Z(v);
  return Te(m, r), K(v), It(v, (y) => s = y, () => s), K(d), T(t, d), ue(u);
}
ae(co, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(t, e) {
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
  }, a = de(), l = Q(a);
  return Lh(l, () => `h${r()}`, !1, (u, d) => {
    nt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = de(), f = Q(h);
    Te(f, () => n() ?? Fe), T(d, h);
  }), T(t, a), ue(s);
}
ae(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var G4 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const Q4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function Fi(t, e) {
  le(e, !0), rt(t, Q4);
  const n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ $(() => Pn("input-btn-more", e.class));
    Xe(t, je(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = G4();
          T(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ue();
}
ae(Fi, {}, [], [], !0);
const eC = () => ({ deleteNode: (t) => {
  Ye.removeNode(t), Ye.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), Jn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, tC = () => ({ copyNode: (t) => {
  const e = Ye.getNode(t);
  if (e) {
    const n = Jn(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Ye.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), $t = () => wn("svelteflow__node_id"), hr = () => wn("tinyflow_options");
var nC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), rC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), oC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), iC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), sC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), aC = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), lC = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), uC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), cC = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), dC = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const hC = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Cn(t, e) {
  le(e, !0), rt(t, hC);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), f = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Tt(), x = /* @__PURE__ */ $(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = eC(), { copyNode: k } = tC(), C = hr(), O = () => {
    C.onNodeExecute?.(b(r()));
  };
  let z = $t();
  var W = {
    get data() {
      return n();
    },
    set data(L) {
      n(L), p();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), p();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), p();
    },
    get handle() {
      return i();
    },
    set handle(L) {
      i(L), p();
    },
    get children() {
      return s();
    },
    set children(L) {
      s(L), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(L = !0) {
      a(L), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(L = !0) {
      u(L), p();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(L = !0) {
      d(L), p();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(L = !0) {
      h(L), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(L = !0) {
      f(L), p();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(L = !0) {
      v(L), p();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(L) {
      m(L), p();
    }
  }, B = dC(), D = Q(B);
  {
    var P = (L) => {
      Np(L, {
        get position() {
          return Pe.Top;
        },
        align: "start",
        children: (X, Y) => {
          var j = cC(), q = Z(j);
          {
            var ee = (ie) => {
              Xe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ce, me) => {
                  var be = nC();
                  T(ce, be);
                },
                $$slots: { default: !0 }
              });
            };
            se(q, (ie) => {
              u() && ie(ee);
            });
          }
          var te = V(q, 2);
          {
            var oe = (ie) => {
              Xe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ce, me) => {
                  var be = rC();
                  T(ce, be);
                },
                $$slots: { default: !0 }
              });
            };
            se(te, (ie) => {
              l() && ie(oe);
            });
          }
          var M = V(te, 2);
          {
            var re = (ie) => {
              Xe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (ce, me) => {
                  var be = oC();
                  T(ce, be);
                },
                $$slots: { default: !0 }
              });
            };
            se(M, (ie) => {
              a() && ie(re);
            });
          }
          var ge = V(M, 2);
          {
            var pe = (ie) => {
              co(ie, {
                placement: "bottom",
                floating: (ce) => {
                  var me = lC(), be = Z(me), xe = V(Z(be));
                  xt(xe, {
                    style: "width: 100%;",
                    onchange: (ye) => {
                      const Ne = ye.target.value;
                      w(z, { title: Ne });
                    },
                    get value() {
                      return n().title;
                    }
                  }), K(be);
                  var he = V(be, 2), Ce = V(Z(he));
                  et(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ye) => {
                      const Ne = ye.target.value;
                      w(z, { description: Ne });
                    },
                    get value() {
                      return n().description;
                    }
                  }), K(he);
                  var De = V(he, 2);
                  {
                    var J = (ye) => {
                      var Ne = iC(), at = V(Z(Ne));
                      et(at, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (We) => {
                          const pt = We.target.value;
                          w(z, { condition: pt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), K(Ne), T(ye, Ne);
                    };
                    se(De, (ye) => {
                      h() && ye(J);
                    });
                  }
                  var Ie = V(De, 2), Se = V(Z(Ie), 2);
                  Tr(Se), Se.__change = (ye) => {
                    const Ne = ye.target.checked;
                    w(z, { loopEnable: Ne });
                  }, K(Ie);
                  var Me = V(Ie, 2);
                  {
                    var Re = (ye) => {
                      var Ne = sC(), at = Q(Ne), We = V(Z(at));
                      {
                        let dt = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        et(We, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ht) => {
                            const mt = ht.target.value;
                            w(z, { loopIntervalMs: mt });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(at);
                      var pt = V(at, 2), Lt = V(Z(pt));
                      {
                        let dt = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        et(Lt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ht) => {
                            const mt = ht.target.value;
                            w(z, { maxLoopCount: mt });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(pt);
                      var lt = V(pt, 2), Nt = V(Z(lt));
                      et(Nt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const ht = dt.target.value;
                          w(z, { loopBreakCondition: ht });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), K(lt), T(ye, Ne);
                    };
                    se(Me, (ye) => {
                      n().loopEnable && ye(Re);
                    });
                  }
                  var Ge = V(Me, 2), st = V(Z(Ge), 2);
                  Tr(st), st.__change = (ye) => {
                    const Ne = ye.target.checked;
                    w(z, { retryEnable: Ne });
                  }, K(Ge);
                  var it = V(Ge, 2);
                  {
                    var ct = (ye) => {
                      var Ne = aC(), at = Q(Ne), We = V(Z(at));
                      {
                        let dt = /* @__PURE__ */ $(() => n().retryIntervalMs || "1000");
                        et(We, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ht) => {
                            const mt = ht.target.value;
                            w(z, { retryIntervalMs: mt });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(at);
                      var pt = V(at, 2), Lt = V(Z(pt));
                      {
                        let dt = /* @__PURE__ */ $(() => n().maxRetryCount || "3");
                        et(Lt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (ht) => {
                            const mt = ht.target.value;
                            w(z, { maxRetryCount: mt });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(pt);
                      var lt = V(pt, 2), Nt = V(Z(lt), 2);
                      Tr(Nt), Nt.__change = (dt) => {
                        const ht = dt.target.checked;
                        w(z, { resetRetryCountAfterNormal: ht });
                      }, K(lt), Ae(() => Ea(Nt, !!n().resetRetryCountAfterNormal)), T(ye, Ne);
                    };
                    se(it, (ye) => {
                      n().retryEnable && ye(ct);
                    });
                  }
                  K(me), Ae(() => {
                    Ea(Se, !!n().loopEnable), Ea(st, !!n().retryEnable);
                  }), T(ce, me);
                },
                children: (ce, me) => {
                  Xe(ce, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (be, xe) => {
                      var he = uC();
                      T(be, he);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            se(ge, (ie) => {
              d() && ie(pe);
            });
          }
          K(j), T(X, j);
        },
        $$slots: { default: !0 }
      });
    };
    se(D, (L) => {
      (a() || l() || u()) && L(P);
    });
  }
  var S = V(D, 2), H = V(Z(S), 2), E = Z(H);
  Gg(E, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return y;
    },
    onChange: (L, X) => {
      w(r(), { expand: X?.includes("key") }), m()?.(X?.includes("key") ? "key" : "");
    }
  }), K(H), K(S);
  var A = V(S, 2);
  {
    var N = (L) => {
      Ar(L, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    se(A, (L) => {
      v() && L(N);
    });
  }
  var I = V(A, 2);
  {
    var U = (L) => {
      Ar(L, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    se(I, (L) => {
      f() && L(U);
    });
  }
  var G = V(I, 2);
  return Te(G, () => i() ?? Fe), T(t, B), ue(W);
}
uo(["change"]);
ae(
  Cn,
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
var fC = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), pC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj">参数描述： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), gC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), vC = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const mC = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Qg(t, e) {
  le(e, !0), rt(t, mC);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = $t(), i = kr(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] })), a = /* @__PURE__ */ $(() => ["text", "other"].includes(c(s).contentType || "text") ? Ap : Dp), l = /* @__PURE__ */ $(() => c(s).contentType === "text" || !c(s).contentType);
  const { updateNodeData: u } = Tt(), d = (D, P) => {
    u(o, (S) => {
      let H = S.data.parameters;
      return H[r()][D] = P, { parameters: H };
    });
  }, h = (D, P) => {
    const S = P.target.value;
    d(D, S);
  }, f = (D) => {
    const P = D.target.value;
    d("name", P);
  }, v = (D) => {
    d("required", D);
  }, m = (D) => {
    const P = D.value;
    d("formType", P);
  }, y = (D) => {
    const P = D.value;
    d("contentType", P);
  };
  let w;
  const b = () => {
    u(o, (D) => {
      let P = D.data.parameters;
      return P.splice(r(), 1), { parameters: [...P] };
    }), w?.hide();
  };
  var x = {
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), p();
    },
    get index() {
      return r();
    },
    set index(D) {
      r(D), p();
    }
  }, _ = vC(), k = Q(_), C = Z(k);
  xt(C, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), K(k);
  var O = V(k, 2), z = Z(O);
  Xg(z, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: v
  }), K(O);
  var W = V(O, 2), B = Z(W);
  return It(
    co(B, {
      placement: "bottom",
      floating: (D) => {
        var P = pC(), S = Z(P), H = V(Z(S));
        {
          let M = /* @__PURE__ */ $(() => c(s).contentType ? [c(s).contentType] : []);
          Dt(H, {
            get items() {
              return mu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(M);
            },
            onSelect: y
          });
        }
        K(S);
        var E = V(S, 2), A = V(Z(E));
        {
          let M = /* @__PURE__ */ $(() => c(s).formType ? [c(s).formType] : []);
          Dt(A, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(M);
            },
            onSelect: m
          });
        }
        K(E);
        var N = V(E, 2);
        {
          var I = (M) => {
            var re = fC(), ge = V(Z(re));
            {
              let pe = /* @__PURE__ */ $(() => c(s).enums?.join(`
`));
              et(ge, {
                rows: 3,
                style: "width: 100%;",
                onchange: (ie) => {
                  d("enums", ie.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(pe);
                },
                placeholder: "一行一个选项"
              });
            }
            K(re), T(M, re);
          };
          se(N, (M) => {
            c(l) && (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && M(I);
          });
        }
        var U = V(N, 2), G = V(Z(U));
        et(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (M) => {
            h("formLabel", M);
          },
          get value() {
            return c(s).formLabel;
          },
          placeholder: "请输入数据标题"
        }), K(U);
        var L = V(U, 2), X = V(Z(L));
        et(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (M) => {
            h("formDescription", M);
          },
          get value() {
            return c(s).formDescription;
          },
          placeholder: "请输入数据描述"
        }), K(L);
        var Y = V(L, 2), j = V(Z(Y));
        et(j, {
          rows: 2,
          style: "width: 100%;",
          onchange: (M) => {
            h("formPlaceholder", M);
          },
          get value() {
            return c(s).formPlaceholder;
          },
          placeholder: "请输入占位符"
        }), K(Y);
        var q = V(Y, 2), ee = V(Z(q));
        et(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (M) => {
            h("description", M);
          },
          get value() {
            return c(s).description;
          },
          placeholder: "请输入参数描述"
        }), K(q);
        var te = V(q, 2), oe = Z(te);
        Xe(oe, {
          variant: "destructive",
          onclick: b,
          children: (M, re) => {
            Ee();
            var ge = He("删除");
            T(M, ge);
          },
          $$slots: { default: !0 }
        }), K(te), K(P), T(D, P);
      },
      children: (D, P) => {
        Xe(D, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (S, H) => {
            var E = gC();
            T(S, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => w = D,
    () => w
  ), K(W), T(t, _), ue(x);
}
ae(Qg, { parameter: {}, index: {} }, [], [], !0);
var yC = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), wC = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), bC = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const xC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function ev(t, e) {
  le(e, !0), rt(t, xC);
  let n = $t(), r = kr(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = bC(), s = Z(i);
  {
    var a = (u) => {
      var d = yC();
      Ee(4), T(u, d);
    };
    se(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  Ot(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      Qg(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = wC();
      T(u, d);
    }
  ), K(i), T(t, i), ue();
}
ae(ev, {}, [], [], !0);
const Ci = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Jn()), Ci(e.children);
}), t), Hn = () => {
  const { updateNodeData: t } = Tt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Ci(s?.children)) : Ci(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Jn()
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
var CC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), kC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $C = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const SC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function tv(t, e) {
  le(e, !0), rt(t, SC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return Cn(t, je(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = CC();
      T(a, l);
    },
    children: (a, l) => {
      var u = $C(), d = Q(u), h = Z(d);
      Je(h, {
        level: 3,
        children: (m, y) => {
          Ee();
          var w = He("输入参数");
          T(m, w);
        },
        $$slots: { default: !0 }
      });
      var f = V(h, 2);
      Xe(f, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = kC();
          T(m, w);
        },
        $$slots: { default: !0 }
      }), K(d);
      var v = V(d, 2);
      ev(v, {}), T(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
ae(tv, { data: {} }, [], [], !0);
const nv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), nv(t, r.source, n));
}, rv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: rv(r.children, e + "." + r.name, n)
})), Ad = (t, e, n) => {
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
          children: rv(r, t.id, e)
        };
    }
  }
}, ov = (t = !1) => {
  const e = $t(), n = kr(e), r = /* @__PURE__ */ $(Ln), o = /* @__PURE__ */ $(() => c(r).nodes), i = /* @__PURE__ */ $(() => c(r).edges), s = /* @__PURE__ */ $(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = Ad(d, h, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      nv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, v = Ad(h, f, u);
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
var _C = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), EC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据选项： <!></div>'), PC = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">输入方式： <!></div> <!> <div class="input-more-item svelte-jmeys3">数据标题： <!></div> <div class="input-more-item svelte-jmeys3">数据描述： <!></div> <div class="input-more-item svelte-jmeys3">占位符： <!></div>', 1), OC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), TC = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const NC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function iv(t, e) {
  le(e, !0), rt(t, NC), Dn(() => {
    c(u).refType || w({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = $t(), l = kr(a), u = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  })), d = /* @__PURE__ */ $(() => ["text", "other"].includes(c(u).contentType || "text") ? Ap : Dp), h = /* @__PURE__ */ $(() => c(u).contentType === "text" || !c(u).contentType);
  const { updateNodeData: f } = Tt(), v = (N, I) => {
    f(a, (U) => {
      let G = U.data?.[o()];
      return G[r()] = { ...G[r()], [N]: I }, { [o()]: G };
    });
  }, m = (N, I) => {
    const U = I.target.value;
    v(N, U);
  }, y = (N) => {
    const I = N.value;
    v("ref", I);
  }, w = (N) => {
    const I = N.value;
    v("refType", I);
  }, b = (N) => {
    const I = N.value;
    v("contentType", I);
  }, x = (N) => {
    const I = N.value;
    v("formType", I);
  };
  let _;
  const k = () => {
    f(a, (N) => {
      let I = N.data?.[o()];
      return I.splice(r(), 1), { [o()]: [...I] };
    }), _?.hide();
  };
  let C = ov(i());
  var O = {
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
  }, z = TC(), W = Q(z), B = Z(W);
  {
    let N = /* @__PURE__ */ $(() => c(u).nameDisabled === !0);
    xt(B, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(N);
      },
      oninput: (I) => m("name", I)
    });
  }
  K(W);
  var D = V(W, 2), P = Z(D);
  {
    var S = (N) => {
      xt(N, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (I) => m("value", I)
      });
    }, H = (N) => {
      var I = de(), U = Q(I);
      {
        var G = (X) => {
          {
            let Y = /* @__PURE__ */ $(() => [c(u).ref]);
            Dt(X, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Y);
              },
              expandAll: !0,
              onSelect: y
            });
          }
        }, L = (X) => {
          var Y = de(), j = Q(Y);
          {
            var q = (ee) => {
              xt(ee, { placeholder: "在执行期间，由用户输入", disabled: !0 });
            };
            se(
              j,
              (ee) => {
                c(u).refType === "input" && ee(q);
              },
              !0
            );
          }
          T(X, Y);
        };
        se(
          U,
          (X) => {
            c(u).refType === "ref" ? X(G) : X(L, !1);
          },
          !0
        );
      }
      T(N, I);
    };
    se(P, (N) => {
      c(u).refType === "fixed" ? N(S) : N(H, !1);
    });
  }
  K(D);
  var E = V(D, 2), A = Z(E);
  return It(
    co(A, {
      placement: "bottom",
      floating: (N) => {
        var I = OC(), U = Z(I), G = V(Z(U));
        {
          let M = /* @__PURE__ */ $(() => c(u).refType ? [c(u).refType] : []);
          Dt(G, {
            get items() {
              return cx;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(M);
            },
            onSelect: w
          });
        }
        K(U);
        var L = V(U, 2);
        {
          var X = (M) => {
            var re = _C(), ge = V(Z(re));
            {
              let pe = /* @__PURE__ */ $(() => c(u).contentType ? [c(u).contentType] : []);
              Dt(ge, {
                get items() {
                  return mu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(pe);
                },
                onSelect: b
              });
            }
            K(re), T(M, re);
          };
          se(L, (M) => {
            (s() || c(u).refType === "input") && M(X);
          });
        }
        var Y = V(L, 2);
        {
          var j = (M) => {
            var re = PC(), ge = Q(re), pe = V(Z(ge));
            {
              let J = /* @__PURE__ */ $(() => c(u).formType ? [c(u).formType] : []);
              Dt(pe, {
                get items() {
                  return c(d);
                },
                style: "width: 100%",
                defaultValue: ["input"],
                get value() {
                  return c(J);
                },
                onSelect: x
              });
            }
            K(ge);
            var ie = V(ge, 2);
            {
              var ce = (J) => {
                var Ie = EC(), Se = V(Z(Ie));
                {
                  let Me = /* @__PURE__ */ $(() => c(u).enums?.join(`
`));
                  et(Se, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Re) => {
                      v("enums", Re.target?.value.trim().split(`
`));
                    },
                    get value() {
                      return c(Me);
                    },
                    placeholder: "一行一个选项"
                  });
                }
                K(Ie), T(J, Ie);
              };
              se(ie, (J) => {
                c(h) && (c(u).formType === "radio" || c(u).formType === "checkbox" || c(u).formType === "select") && J(ce);
              });
            }
            var me = V(ie, 2), be = V(Z(me));
            et(be, {
              rows: 1,
              placeholder: "请输入数据标题",
              style: "width: 100%;",
              onchange: (J) => {
                m("formLabel", J);
              },
              get value() {
                return c(u).formLabel;
              }
            }), K(me);
            var xe = V(me, 2), he = V(Z(xe));
            et(he, {
              rows: 2,
              placeholder: "请输入数据描述",
              style: "width: 100%;",
              onchange: (J) => {
                m("formDescription", J);
              },
              get value() {
                return c(u).formDescription;
              }
            }), K(xe);
            var Ce = V(xe, 2), De = V(Z(Ce));
            et(De, {
              rows: 2,
              placeholder: "请输入占位符内容",
              style: "width: 100%;",
              onchange: (J) => {
                m("formPlaceholder", J);
              },
              get value() {
                return c(u).formPlaceholder;
              }
            }), K(Ce), T(M, re);
          };
          se(Y, (M) => {
            c(u).refType === "input" && M(j);
          });
        }
        var q = V(Y, 2), ee = V(Z(q));
        et(ee, {
          rows: 1,
          style: "width: 100%;",
          onchange: (M) => {
            m("defaultValue", M);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), K(q);
        var te = V(q, 2), oe = Z(te);
        Xe(oe, {
          variant: "destructive",
          onclick: k,
          children: (M, re) => {
            Ee();
            var ge = He("删除");
            T(M, ge);
          },
          $$slots: { default: !0 }
        }), K(te), K(I), T(N, I);
      },
      children: (N, I) => {
        Fi(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => _ = N,
    () => _
  ), K(E), T(t, z), ue(O);
}
ae(
  iv,
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
var AC = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), DC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), MC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const LC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Xt(t, e) {
  le(e, !0), rt(t, LC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = $t(), a = kr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = MC(), h = Z(d);
  {
    var f = (m) => {
      var y = AC();
      Ee(4), T(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = V(h, 2);
  return Ot(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      iv(m, {
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
      var y = DC(), w = Z(y, !0);
      K(y), Ae(() => ft(w, n())), T(m, y);
    }
  ), K(d), T(t, d), ue(u);
}
ae(
  Xt,
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
var HC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), zC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), VC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const IC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function sv(t, e) {
  le(e, !0), rt(t, IC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return Cn(t, je(
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
        var l = HC();
        T(a, l);
      },
      children: (a, l) => {
        var u = VC(), d = Q(u), h = Z(d);
        Je(h, {
          level: 3,
          children: (m, y) => {
            Ee();
            var w = He("输出参数");
            T(m, w);
          },
          $$slots: { default: !0 }
        });
        var f = V(h, 2);
        Xe(f, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = zC();
            T(m, w);
          },
          $$slots: { default: !0 }
        }), K(d);
        var v = V(d, 2);
        Xt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
ae(sv, { data: {} }, [], [], !0);
const Fa = (t) => JSON.parse(JSON.stringify(t));
var RC = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), BC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), jC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), FC = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const KC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function av(t, e) {
  le(e, !0), rt(t, KC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = $t(), a = kr(s), l = /* @__PURE__ */ $(() => {
    let S = a?.current?.data?.[o()], H;
    if (S && r().length > 0) {
      let E = S;
      for (let A = 0; A < r().length; A++) {
        const N = r()[A];
        A == r().length - 1 ? H = E[N] : E = E[N].children;
      }
    }
    return { ...n(), ...H };
  });
  const { updateNodeData: u } = Tt(), d = (S, H) => {
    u(s, (E) => {
      const A = E.data?.[o()];
      if (A && r().length > 0) {
        let N = A;
        for (let I = 0; I < r().length; I++) {
          const U = r()[I];
          I == r().length - 1 ? N[U] = { ...N[U], [S]: H } : N = N[U].children;
        }
      }
      return { [o()]: [...Fa(A)] };
    });
  }, h = (S, H) => {
    const E = H.target.value;
    d(S, E);
  }, f = (S) => {
    const H = S.value;
    d("dataType", H);
  };
  let v;
  const m = () => {
    u(s, (S) => {
      let H = S.data?.[o()];
      if (H && r().length > 0) {
        let E = H;
        for (let A = 0; A < r().length; A++) {
          const N = r()[A];
          A == r().length - 1 ? E.splice(N, 1) : E = E[N].children;
        }
      }
      return { [o()]: [...Fa(H)] };
    }), v?.hide();
  }, y = () => {
    u(s, (S) => {
      let H = S.data?.[o()];
      if (H && r().length > 0) {
        let E = H;
        for (let A = 0; A < r().length; A++) {
          const N = r()[A];
          A == r().length - 1 ? E[N].children ? E[N].children.push({ id: Jn(), name: "newParam", dataType: "String" }) : E[N].children = [{ id: Jn(), name: "newParam", dataType: "String" }] : E = E[N].children;
        }
      }
      return { [o()]: [...Fa(H)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), p();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), p();
    }
  }, b = FC(), x = Q(b), _ = Z(x);
  {
    var k = (S) => {
      var H = de(), E = Q(H);
      Ot(E, 17, r, Qr, (A, N) => {
        Ee();
        var I = He(" ");
        T(A, I);
      }), T(S, H);
    };
    se(_, (S) => {
      r().length > 1 && S(k);
    });
  }
  var C = V(_, 2);
  {
    let S = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    xt(C, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (H) => {
        h("name", H);
      },
      get disabled() {
        return c(S);
      }
    });
  }
  K(x);
  var O = V(x, 2), z = Z(O);
  {
    let S = /* @__PURE__ */ $(() => c(l).dataTypeItems || ux), H = /* @__PURE__ */ $(() => c(l).dataType ? [c(l).dataType] : []), E = /* @__PURE__ */ $(() => c(l).dataTypeDisabled === !0);
    Dt(z, {
      get items() {
        return c(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(H);
      },
      get disabled() {
        return c(E);
      },
      onSelect: f
    });
  }
  var W = V(z, 2);
  {
    var B = (S) => {
      Xe(S, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (H, E) => {
          var A = RC();
          T(H, A);
        },
        $$slots: { default: !0 }
      });
    };
    se(W, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(B);
    });
  }
  K(O);
  var D = V(O, 2), P = Z(D);
  return It(
    co(P, {
      placement: "bottom",
      floating: (S) => {
        var H = jC(), E = Z(H), A = V(Z(E));
        {
          let L = /* @__PURE__ */ $(() => c(l).defaultValue || "");
          et(A, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (X) => {
              h("defaultValue", X);
            }
          });
        }
        K(E);
        var N = V(E, 2), I = V(Z(N));
        {
          let L = /* @__PURE__ */ $(() => c(l).description || "");
          et(I, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (X) => {
              h("description", X);
            }
          });
        }
        K(N);
        var U = V(N, 2);
        {
          var G = (L) => {
            var X = BC(), Y = Z(X);
            Xe(Y, {
              variant: "destructive",
              onclick: m,
              children: (j, q) => {
                Ee();
                var ee = He("删除");
                T(j, ee);
              },
              $$slots: { default: !0 }
            }), K(X), T(L, X);
          };
          se(U, (L) => {
            c(l).deleteDisabled !== !0 && L(G);
          });
        }
        K(H), T(S, H);
      },
      children: (S, H) => {
        Fi(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => v = S,
    () => v
  ), K(D), T(t, b), ue(w);
}
ae(
  av,
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
var WC = /* @__PURE__ */ ne("<!> <!>", 1), ZC = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), qC = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), YC = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const XC = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function $r(t, e) {
  le(e, !0), rt(t, XC);
  const n = (m, y = Fe, w = Fe) => {
    var b = de(), x = Q(b);
    Ot(
      x,
      19,
      y,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, k, C) => {
        var O = WC(), z = Q(O);
        {
          let D = /* @__PURE__ */ $(() => [...w(), c(C)]);
          av(z, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(D);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var W = V(z, 2);
        {
          var B = (D) => {
            {
              let P = /* @__PURE__ */ $(() => [...w(), c(C)]);
              n(D, () => c(k).children, () => c(P));
            }
          };
          se(W, (D) => {
            c(k).children && D(B);
          });
        }
        T(_, O);
      },
      (_) => {
        var k = de(), C = Q(k);
        {
          var O = (z) => {
            var W = ZC(), B = Z(W, !0);
            K(W), Ae(() => ft(B, r())), T(z, W);
          };
          se(C, (z) => {
            w().length === 0 && z(O);
          });
        }
        T(_, k);
      }
    ), T(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = $t(), a = kr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = YC(), h = Z(d);
  {
    var f = (m) => {
      var y = qC();
      Ee(4), T(m, y);
    };
    se(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = V(h, 2);
  return n(v, () => c(l) || [], () => []), K(d), T(t, d), ue(u);
}
ae($r, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var UC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), JC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), GC = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), QC = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), ek = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), tk = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const nk = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function lv(t, e) {
  le(e, !0), rt(t, nk);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), s = hr();
  let a = /* @__PURE__ */ we(Ct([]));
  Dn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = Tt(), u = (h) => {
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = UC();
        T(h, f);
      },
      children: (h, f) => {
        var v = tk(), m = Q(v), y = Z(m);
        Je(y, {
          level: 3,
          children: (L, X) => {
            Ee();
            var Y = He("输入参数");
            T(L, Y);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2);
        Xe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, X) => {
            var Y = JC();
            T(L, Y);
          },
          $$slots: { default: !0 }
        }), K(m);
        var b = V(m, 2);
        Xt(b, {});
        var x = V(b, 2), _ = Z(x);
        Je(_, {
          level: 3,
          children: (L, X) => {
            Ee();
            var Y = He("图片识别");
            T(L, Y);
          },
          $$slots: { default: !0 }
        });
        var k = V(_, 2);
        Xe(k, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (L, X) => {
            var Y = GC();
            T(L, Y);
          },
          $$slots: { default: !0 }
        }), K(x);
        var C = V(x, 2);
        Xt(C, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var O = V(C, 2);
        Je(O, {
          level: 3,
          mt: "10px",
          children: (L, X) => {
            Ee();
            var Y = He("模型设置");
            T(L, Y);
          },
          $$slots: { default: !0 }
        });
        var z = V(O, 4), W = Z(z);
        {
          let L = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          Dt(W, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (X) => {
              const Y = X.value;
              l(o, () => ({ llmId: Y }));
            },
            get value() {
              return c(L);
            }
          });
        }
        var B = V(W, 2);
        co(B, {
          placement: "bottom",
          floating: (L) => {
            var X = QC(), Y = V(Z(X), 2), j = Z(Y), q = Z(j), ee = Z(q);
            K(q);
            var te = V(q, 2);
            Tr(te), te.__input = (he) => l(o, { temperature: parseFloat(he.target.value) }), K(j), K(Y);
            var oe = V(Y, 2), M = Z(oe), re = Z(M), ge = Z(re);
            K(re);
            var pe = V(re, 2);
            Tr(pe), pe.__input = (he) => l(o, { topP: parseFloat(he.target.value) }), K(M), K(oe);
            var ie = V(oe, 2), ce = Z(ie), me = Z(ce), be = Z(me);
            K(me);
            var xe = V(me, 2);
            Tr(xe), xe.__input = (he) => l(o, { topK: parseInt(he.target.value) }), K(ce), K(ie), K(X), Ae(() => {
              ft(ee, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), is(te, n().temperature ?? 0.5), ft(ge, `Top P: ${n().topP ?? 0.9 ?? ""}`), is(pe, n().topP ?? 0.9), ft(be, `Top K: ${n().topK ?? 50 ?? ""}`), is(xe, n().topK ?? 50);
            }), T(L, X);
          },
          children: (L, X) => {
            Fi(L, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), K(z);
        var D = V(z, 4), P = Z(D);
        {
          let L = /* @__PURE__ */ $(() => n().systemPrompt || "");
          et(P, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(L);
            },
            oninput: (X) => {
              l(o, { systemPrompt: X.target.value });
            }
          });
        }
        K(D);
        var S = V(D, 4), H = Z(S);
        {
          let L = /* @__PURE__ */ $(() => n().userPrompt || "");
          et(H, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(L);
            },
            oninput: (X) => {
              l(o, { userPrompt: X.target.value });
            }
          });
        }
        K(S);
        var E = V(S, 2);
        {
          var A = (L) => {
            var X = ek(), Y = V(Q(X), 2), j = Z(Y);
            {
              let q = /* @__PURE__ */ $(() => n().jsonSchema || "");
              et(j, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(q);
                },
                oninput: (ee) => {
                  l(o, { jsonSchema: ee.target.value });
                }
              });
            }
            K(Y), T(L, X);
          };
          se(E, (L) => {
            n().outType === "json" && L(A);
          });
        }
        var N = V(E, 2), I = Z(N);
        Je(I, {
          level: 3,
          children: (L, X) => {
            Ee();
            var Y = He("输出参数");
            T(L, Y);
          },
          $$slots: { default: !0 }
        });
        var U = V(I, 2);
        {
          let L = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          Dt(U, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (X) => {
              u(X.value);
            },
            get value() {
              return c(L);
            }
          });
        }
        K(N);
        var G = V(N, 2);
        $r(G, {}), T(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
uo(["input"]);
ae(lv, { data: {} }, [], [], !0);
var rk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ok = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ik = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sk = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const ak = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uv(t, e) {
  le(e, !0), rt(t, ak);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Dn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = $t(), { addParameter: i } = Hn(), { updateNodeData: s } = Tt(), a = [
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = rk();
        T(u, d);
      },
      children: (u, d) => {
        var h = sk(), f = Q(h), v = Z(f);
        Je(v, {
          level: 3,
          children: (B, D) => {
            Ee();
            var P = He("输入参数");
            T(B, P);
          },
          $$slots: { default: !0 }
        });
        var m = V(v, 2);
        Xe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, D) => {
            var P = ok();
            T(B, P);
          },
          $$slots: { default: !0 }
        }), K(f);
        var y = V(f, 2);
        Xt(y, {});
        var w = V(y, 2);
        Je(w, {
          level: 3,
          mt: "10px",
          children: (B, D) => {
            Ee();
            var P = He("代码");
            T(B, P);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 4), x = Z(b);
        {
          let B = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
          Dt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (D) => {
              const P = D.value;
              s(o, () => ({ engine: P }));
            },
            get value() {
              return c(B);
            }
          });
        }
        K(b);
        var _ = V(b, 4), k = Z(_);
        {
          let B = /* @__PURE__ */ $(() => n().code || "");
          et(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ code: D.target.value }));
            },
            get value() {
              return c(B);
            }
          });
        }
        K(_);
        var C = V(_, 2), O = Z(C);
        Je(O, {
          level: 3,
          mt: "10px",
          children: (B, D) => {
            Ee();
            var P = He("输出参数");
            T(B, P);
          },
          $$slots: { default: !0 }
        });
        var z = V(O, 2);
        Xe(z, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, D) => {
            var P = ik();
            T(B, P);
          },
          $$slots: { default: !0 }
        }), K(C);
        var W = V(C, 2);
        $r(W, {}), T(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ae(uv, { data: {} }, [], [], !0);
var lk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), uk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ck = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const dk = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cv(t, e) {
  le(e, !0), rt(t, dk);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), { updateNodeData: s } = Tt();
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = lk();
        T(l, u);
      },
      children: (l, u) => {
        var d = ck(), h = Q(d), f = Z(h);
        Je(f, {
          level: 3,
          children: (C, O) => {
            Ee();
            var z = He("输入参数");
            T(C, z);
          },
          $$slots: { default: !0 }
        });
        var v = V(f, 2);
        Xe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, O) => {
            var z = uk();
            T(C, z);
          },
          $$slots: { default: !0 }
        }), K(h);
        var m = V(h, 2);
        Xt(m, {});
        var y = V(m, 2);
        Je(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (C, O) => {
            Ee();
            var z = He("模板内容");
            T(C, z);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2), b = Z(w);
        {
          let C = /* @__PURE__ */ $(() => n().template || "");
          et(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ template: O.target.value }));
            },
            get value() {
              return c(C);
            }
          });
        }
        K(w);
        var x = V(w, 2), _ = Z(x);
        Je(_, {
          level: 3,
          mt: "10px",
          children: (C, O) => {
            Ee();
            var z = He("输出参数");
            T(C, z);
          },
          $$slots: { default: !0 }
        }), K(x);
        var k = V(x, 2);
        $r(k, {}), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ae(cv, { data: {} }, [], [], !0);
var hk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), fk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gk = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), vk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mk = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), yk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wk = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), bk = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), xk = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), Ck = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kk = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const $k = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function dv(t, e) {
  le(e, !0), rt(t, $k);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
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
  ], i = $t(), { addParameter: s } = Hn(), { updateNodeData: a } = Tt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = hk();
        T(u, d);
      },
      children: (u, d) => {
        var h = kk(), f = Q(h), v = Z(f);
        Je(v, {
          level: 3,
          children: (q, ee) => {
            Ee();
            var te = He("输入参数");
            T(q, te);
          },
          $$slots: { default: !0 }
        });
        var m = V(v, 2);
        Xe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (q, ee) => {
            var te = fk();
            T(q, te);
          },
          $$slots: { default: !0 }
        }), K(f);
        var y = V(f, 2);
        Xt(y, {});
        var w = V(y, 2);
        Je(w, {
          level: 3,
          mt: "10px",
          children: (q, ee) => {
            Ee();
            var te = He("URL 地址");
            T(q, te);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2), x = Z(b), _ = Z(x);
        {
          let q = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          Dt(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (ee) => {
              const te = ee.value;
              a(i, () => ({ method: te }));
            },
            get value() {
              return c(q);
            }
          });
        }
        K(x);
        var k = V(x, 2), C = Z(k);
        {
          let q = /* @__PURE__ */ $(() => n().url || "");
          xt(C, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (ee) => {
              a(i, () => ({ url: ee.target.value }));
            },
            get value() {
              return c(q);
            }
          });
        }
        K(k), K(b);
        var O = V(b, 2), z = Z(O);
        Je(z, {
          level: 3,
          children: (q, ee) => {
            Ee();
            var te = He("Http 头信息");
            T(q, te);
          },
          $$slots: { default: !0 }
        });
        var W = V(z, 2);
        Xe(W, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (q, ee) => {
            var te = pk();
            T(q, te);
          },
          $$slots: { default: !0 }
        }), K(O);
        var B = V(O, 2);
        Xt(B, { dataKeyName: "headers" });
        var D = V(B, 2);
        {
          var P = (q) => {
            var ee = gk(), te = Q(ee);
            Je(te, {
              level: 3,
              mt: "10px",
              children: (Ce, De) => {
                Ee();
                var J = He("Body");
                T(Ce, J);
              },
              $$slots: { default: !0 }
            });
            var oe = V(te, 2), M = Z(oe), re = Z(M);
            {
              let Ce = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              xt(re, {
                type: "radio",
                value: "",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Ee(), K(M);
            var ge = V(M, 2), pe = Z(ge);
            {
              let Ce = /* @__PURE__ */ $(() => n().bodyType === "form-data");
              xt(pe, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Ee(), K(ge);
            var ie = V(ge, 2), ce = Z(ie);
            {
              let Ce = /* @__PURE__ */ $(() => n().bodyType === "x-www-form-urlencoded");
              xt(ce, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Ee(), K(ie);
            var me = V(ie, 2), be = Z(me);
            {
              let Ce = /* @__PURE__ */ $(() => n().bodyType === "json");
              xt(be, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Ee(), K(me);
            var xe = V(me, 2), he = Z(xe);
            {
              let Ce = /* @__PURE__ */ $(() => n().bodyType === "raw");
              xt(he, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Ee(), K(xe), K(oe), T(q, ee);
          };
          se(D, (q) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && q(P);
          });
        }
        var S = V(D, 2);
        {
          var H = (q) => {
            var ee = mk(), te = Q(ee), oe = Z(te);
            Je(oe, {
              level: 3,
              children: (ge, pe) => {
                Ee();
                var ie = He("参数");
                T(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var M = V(oe, 2);
            Xe(M, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ge, pe) => {
                var ie = vk();
                T(ge, ie);
              },
              $$slots: { default: !0 }
            }), K(te);
            var re = V(te, 2);
            Xt(re, { dataKeyName: "formData" }), T(q, ee);
          };
          se(S, (q) => {
            n().bodyType === "form-data" && q(H);
          });
        }
        var E = V(S, 2);
        {
          var A = (q) => {
            var ee = wk(), te = Q(ee), oe = Z(te);
            Je(oe, {
              level: 3,
              children: (ge, pe) => {
                Ee();
                var ie = He("Body 参数");
                T(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var M = V(oe, 2);
            Xe(M, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, pe) => {
                var ie = yk();
                T(ge, ie);
              },
              $$slots: { default: !0 }
            }), K(te);
            var re = V(te, 2);
            Xt(re, { dataKeyName: "formUrlencoded" }), T(q, ee);
          };
          se(E, (q) => {
            n().bodyType === "x-www-form-urlencoded" && q(A);
          });
        }
        var N = V(E, 2);
        {
          var I = (q) => {
            var ee = bk(), te = Z(ee);
            et(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), K(ee), T(q, ee);
          };
          se(N, (q) => {
            n().bodyType === "json" && q(I);
          });
        }
        var U = V(N, 2);
        {
          var G = (q) => {
            var ee = xk(), te = Z(ee);
            et(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), K(ee), T(q, ee);
          };
          se(U, (q) => {
            n().bodyType === "raw" && q(G);
          });
        }
        var L = V(U, 2), X = Z(L);
        Je(X, {
          level: 3,
          mt: "10px",
          children: (q, ee) => {
            Ee();
            var te = He("输出参数");
            T(q, te);
          },
          $$slots: { default: !0 }
        });
        var Y = V(X, 2);
        Xe(Y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (q, ee) => {
            var te = Ck();
            T(q, te);
          },
          $$slots: { default: !0 }
        }), K(L);
        var j = V(L, 2);
        $r(j, {}), T(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ae(dv, { data: {} }, [], [], !0);
var Sk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), _k = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ek = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Pk = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hv(t, e) {
  le(e, !0), rt(t, Pk);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), s = hr();
  let a = /* @__PURE__ */ we(Ct([]));
  Dn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Tt();
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = Sk();
        T(d, h);
      },
      children: (d, h) => {
        var f = Ek(), v = Q(f), m = Z(v);
        Je(m, {
          level: 3,
          children: (P, S) => {
            Ee();
            var H = He("输入参数");
            T(P, H);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Xe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, S) => {
            var H = _k();
            T(P, H);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = V(v, 2);
        Xt(w, {});
        var b = V(w, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            Ee();
            var H = He("知识库设置");
            T(P, H);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), _ = Z(x);
        {
          let P = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          Dt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const H = S.value;
              l(o, () => ({ knowledgeId: H }));
            },
            get value() {
              return c(P);
            }
          });
        }
        K(x);
        var k = V(x, 4), C = Z(k);
        xt(C, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (P) => {
            const S = P.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), K(k);
        var O = V(k, 4), z = Z(O);
        {
          let P = /* @__PURE__ */ $(() => n().limit || "");
          xt(z, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const H = S.target.value;
              l(o, () => ({ limit: H }));
            },
            get value() {
              return c(P);
            }
          });
        }
        K(O);
        var W = V(O, 2), B = Z(W);
        Je(B, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            Ee();
            var H = He("输出参数");
            T(P, H);
          },
          $$slots: { default: !0 }
        }), K(W);
        var D = V(W, 2);
        $r(D, {}), T(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
ae(hv, { data: {} }, [], [], !0);
var Ok = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Tk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nk = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Ak = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function fv(t, e) {
  le(e, !0), rt(t, Ak);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), s = hr();
  let a = /* @__PURE__ */ we(Ct([]));
  Dn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Tt();
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = Ok();
        T(d, h);
      },
      children: (d, h) => {
        var f = Nk(), v = Q(f), m = Z(v);
        Je(m, {
          level: 3,
          children: (P, S) => {
            Ee();
            var H = He("输入参数");
            T(P, H);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Xe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, S) => {
            var H = Tk();
            T(P, H);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = V(v, 2);
        Xt(w, {});
        var b = V(w, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            Ee();
            var H = He("搜索引擎设置");
            T(P, H);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), _ = Z(x);
        {
          let P = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          Dt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const H = S.value;
              l(o, () => ({ engine: H }));
            },
            get value() {
              return c(P);
            }
          });
        }
        K(x);
        var k = V(x, 4), C = Z(k);
        xt(C, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (P) => {
            const S = P.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), K(k);
        var O = V(k, 4), z = Z(O);
        xt(z, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (P) => {
            const S = P.target.value;
            l(o, () => ({ limit: S }));
          }
        }), K(O);
        var W = V(O, 2), B = Z(W);
        Je(B, {
          level: 3,
          mt: "10px",
          children: (P, S) => {
            Ee();
            var H = He("输出参数");
            T(P, H);
          },
          $$slots: { default: !0 }
        }), K(W);
        var D = V(W, 2);
        $r(D, {}), T(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
ae(fv, { data: {} }, [], [], !0);
var Dk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Mk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lk = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Hk = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function pv(t, e) {
  le(e, !0), rt(t, Hk);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn();
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Dk();
        T(a, l);
      },
      handle: (a) => {
        Ar(a, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Lk(), d = Q(u), h = Z(d);
        Je(h, {
          level: 3,
          children: (b, x) => {
            Ee();
            var _ = He("循环变量");
            T(b, _);
          },
          $$slots: { default: !0 }
        }), K(d);
        var f = V(d, 2);
        Xt(f, { dataKeyName: "loopVars" });
        var v = V(f, 2), m = Z(v);
        Je(m, {
          level: 3,
          children: (b, x) => {
            Ee();
            var _ = He("输出参数");
            T(b, _);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Xe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var _ = Mk();
            T(b, _);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = V(v, 2);
        Xt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
ae(pv, { data: {} }, [], [], !0);
var zk = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Vk = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Ik = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function gv(t, e) {
  le(e, !0), rt(t, Ik);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = $t(), a = kr(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Tt(), d = (S, H) => {
    u(s, (E) => {
      let A = E.data?.[o()];
      return A[r()] = { ...A[r()], [S]: H }, { [o()]: A };
    });
  }, h = (S, H) => {
    const E = H.target.value;
    d(S, E);
  }, f = (S) => {
    const H = S.value;
    d("ref", H);
  }, v = (S) => {
    const H = S.value;
    d("formType", H);
  }, m = (S) => {
    const H = S.value;
    d("contentType", H);
  };
  let y;
  const w = () => {
    u(s, (S) => {
      let H = S.data?.[o()];
      return H.splice(r(), 1), { [o()]: [...H] };
    }), y?.hide();
  };
  let b = ov(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), p();
    },
    get index() {
      return r();
    },
    set index(S) {
      r(S), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(S) {
      i(S), p();
    }
  }, _ = Vk(), k = Q(_), C = Z(k);
  {
    let S = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    xt(C, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (H) => h("name", H)
    });
  }
  K(k);
  var O = V(k, 2), z = Z(O);
  {
    var W = (S) => {
      xt(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (H) => h("value", H)
      });
    }, B = (S) => {
      var H = de(), E = Q(H);
      {
        var A = (N) => {
          {
            let I = /* @__PURE__ */ $(() => [c(l).ref]);
            Dt(N, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(I);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        se(
          E,
          (N) => {
            c(l).refType !== "input" && N(A);
          },
          !0
        );
      }
      T(S, H);
    };
    se(z, (S) => {
      c(l).refType === "fixed" ? S(W) : S(B, !1);
    });
  }
  K(O);
  var D = V(O, 2), P = Z(D);
  return It(
    co(P, {
      placement: "bottom",
      floating: (S) => {
        var H = zk(), E = Z(H), A = V(Z(E));
        {
          let q = /* @__PURE__ */ $(() => c(l).contentType ? [c(l).contentType] : []);
          Dt(A, {
            get items() {
              return mu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(q);
            },
            onSelect: m
          });
        }
        K(E);
        var N = V(E, 2), I = V(Z(N));
        {
          let q = /* @__PURE__ */ $(() => c(l).formType ? [c(l).formType] : []);
          Dt(I, {
            get items() {
              return dx;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(q);
            },
            onSelect: v
          });
        }
        K(N);
        var U = V(N, 2), G = V(Z(U));
        et(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (q) => {
            h("formLabel", q);
          },
          get value() {
            return c(l).formLabel;
          }
        }), K(U);
        var L = V(U, 2), X = V(Z(L));
        et(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (q) => {
            h("formDescription", q);
          },
          get value() {
            return c(l).formDescription;
          }
        }), K(L);
        var Y = V(L, 2), j = Z(Y);
        Xe(j, {
          variant: "destructive",
          onclick: w,
          children: (q, ee) => {
            Ee();
            var te = He("删除");
            T(q, te);
          },
          $$slots: { default: !0 }
        }), K(Y), K(H), T(S, H);
      },
      children: (S, H) => {
        Fi(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => y = S,
    () => y
  ), K(D), T(t, _), ue(x);
}
ae(
  gv,
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
var Rk = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Bk = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), jk = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Fk = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function vv(t, e) {
  le(e, !0), rt(t, Fk);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = $t(), s = kr(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = jk(), d = Z(u);
  {
    var h = (v) => {
      var m = Rk();
      Ee(4), T(v, m);
    };
    se(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var f = V(d, 2);
  return Ot(
    f,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      gv(v, {
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
      var m = Bk(), y = Z(m, !0);
      K(m), Ae(() => ft(y, n())), T(v, m);
    }
  ), K(u), T(t, u), ue(l);
}
ae(vv, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Al = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!Al(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !Al(t[s], e[s])) return !1;
    return !0;
  }
};
var Kk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Wk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zk = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const qk = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function mv(t, e) {
  le(e, !0), rt(t, qk);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), { updateNodeData: s } = Tt();
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
      Al(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Cn(t, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Kk();
        T(l, u);
      },
      children: (l, u) => {
        var d = Zk(), h = Q(d), f = Z(h);
        Je(f, {
          level: 3,
          children: (C, O) => {
            Ee();
            var z = He("确认数据");
            T(C, z);
          },
          $$slots: { default: !0 }
        });
        var v = V(f, 2);
        Xe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (C, O) => {
            var z = Wk();
            T(C, z);
          },
          $$slots: { default: !0 }
        }), K(h);
        var m = V(h, 2);
        vv(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = V(m, 2);
        Je(y, {
          level: 3,
          mt: "10px",
          children: (C, O) => {
            Ee();
            var z = He("确认消息");
            T(C, z);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 4), b = Z(w);
        {
          let C = /* @__PURE__ */ $(() => n().message || "");
          et(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ message: O.target.value }));
            },
            get value() {
              return c(C);
            }
          });
        }
        K(w);
        var x = V(w, 2), _ = Z(x);
        Je(_, {
          level: 3,
          mt: "10px",
          children: (C, O) => {
            Ee();
            var z = He("输出参数");
            T(C, z);
          },
          $$slots: { default: !0 }
        }), K(x);
        var k = V(x, 2);
        $r(k, { placeholder: "" }), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ae(mv, { data: {} }, [], [], !0);
const Yk = {
  startNode: tv,
  codeNode: uv,
  confirmNode: mv,
  llmNode: lv,
  templateNode: cv,
  httpNode: dv,
  knowledgeNode: hv,
  searchEngineNode: fv,
  loopNode: pv,
  endNode: sv
};
var Xk = /* @__PURE__ */ ne("<!> ", 1);
function Dl(t, e) {
  le(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = Tt(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const f = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(f)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, f = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: f / 2 }), m = {
      id: `node_${Jn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Ye.addNode(m), Ye.selectNodeOnly(m.id);
  };
  var d = {
    get icon() {
      return n();
    },
    set icon(h) {
      n(h), p();
    },
    get title() {
      return r();
    },
    set title(h) {
      r(h), p();
    },
    get type() {
      return o();
    },
    set type(h) {
      o(h), p();
    },
    get description() {
      return i();
    },
    set description(h) {
      i(h), p();
    },
    get extra() {
      return s();
    },
    set extra(h) {
      s(h), p();
    }
  };
  return Xe(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, f) => {
      var v = Xk(), m = Q(v);
      la(m, n);
      var y = V(m);
      Ae(() => ft(y, ` ${r() ?? ""}`)), T(h, v);
    },
    $$slots: { default: !0 }
  }), ue(d);
}
ae(Dl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Uk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Jk = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Gk = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function yv(t, e) {
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
  ], s = [], a = hr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, _) => (l[x].sortNo || 0) - (l[_].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, _) => (x.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === x) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = Gk(), d = Z(u), h = Z(d), f = Z(h);
  Jg(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), K(h);
  var v = V(h, 2), m = Z(v);
  Ot(m, 21, () => o, Qr, (b, x) => {
    Dl(b, je(() => c(x)));
  }), K(m);
  var y = V(m, 2);
  Ot(y, 21, () => s, Qr, (b, x) => {
    Dl(b, je(() => c(x)));
  }), K(y), K(v), K(d);
  var w = V(d, 2);
  Xe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var _ = de(), k = Q(_);
      {
        var C = (z) => {
          var W = Uk();
          T(z, W);
        }, O = (z) => {
          var W = Jk();
          T(z, W);
        };
        se(k, (z) => {
          c(r) === "show" ? z(C) : z(O, !1);
        });
      }
      T(b, _);
    },
    $$slots: { default: !0 }
  }), K(u), Ae(() => {
    sn(u, 1, `tf-toolbar ${c(r) ?? ""}`), Vt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Vt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), T(t, u), ue();
}
ae(yv, {}, [], [], !0);
const Qk = () => ({ getNode: (t) => Ye.getNode(t) }), e6 = () => ({ ensureParentInNodesBefore: (t, e) => {
  Ye.updateNodes((n) => {
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
} }), t6 = () => ({ getEdgesByTarget: (t) => Ye.getEdges().filter((e) => e.target === t) });
var n6 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), r6 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), o6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), i6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), s6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), a6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), l6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), u6 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), c6 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), d6 = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const h6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function wv(t, e) {
  le(e, !0), rt(t, h6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = $t(), { addParameter: i } = Hn(), s = Tt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), f = hr().customNodes[e.type];
  f.render?.(h, d, s);
  const v = f.forms;
  let m;
  Be(() => {
    n().expand && m && m.append(h);
  }), Be(() => {
    n() && f.onUpdate?.(h, { ...d, data: n() });
  }), Be(() => {
    !n().parameters && f.parameters && l({
      parameters: Ci(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Be(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Ci(JSON.parse(JSON.stringify(f.outputDefs)))
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
      var _ = de(), k = Q(_);
      la(k, () => f.icon), T(x, _);
    };
    let b = /* @__PURE__ */ $(() => ({ ...n(), description: f.description }));
    Cn(t, je(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (x, _) => {
          var k = d6(), C = Q(k);
          {
            var O = (S) => {
              var H = r6(), E = Q(H), A = Z(E);
              Je(A, {
                level: 3,
                children: (G, L) => {
                  Ee();
                  var X = He("输入参数");
                  T(G, X);
                },
                $$slots: { default: !0 }
              });
              var N = V(A, 2);
              {
                var I = (G) => {
                  Xe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (L, X) => {
                      var Y = n6();
                      T(L, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(N, (G) => {
                  f.parametersAddEnable !== !1 && G(I);
                });
              }
              K(E);
              var U = V(E, 2);
              Xt(U, {}), T(S, H);
            };
            se(C, (S) => {
              f.parametersEnable !== !1 && S(O);
            });
          }
          var z = V(C, 2);
          {
            var W = (S) => {
              var H = de(), E = Q(H);
              Ot(E, 17, () => v, Qr, (A, N) => {
                var I = de(), U = Q(I);
                {
                  var G = (X) => {
                    var Y = o6(), j = Q(Y), q = Z(j, !0);
                    K(j);
                    var ee = V(j, 2), te = Z(ee);
                    {
                      let oe = /* @__PURE__ */ $(() => n()[c(N).name] || c(N).defaultValue);
                      xt(te, je(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (M) => {
                            u(c(N).name, M);
                          }
                        }
                      ));
                    }
                    K(ee), Ae(() => ft(q, c(N).label)), T(X, Y);
                  }, L = (X) => {
                    var Y = de(), j = Q(Y);
                    {
                      var q = (te) => {
                        var oe = i6(), M = Q(oe), re = Z(M, !0);
                        K(M);
                        var ge = V(M, 2), pe = Z(ge);
                        {
                          let ie = /* @__PURE__ */ $(() => n()[c(N).name] || c(N).defaultValue);
                          et(pe, je(
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
                              onchange: (ce) => {
                                u(c(N).name, ce);
                              }
                            }
                          ));
                        }
                        K(ge), Ae(() => ft(re, c(N).label)), T(te, oe);
                      }, ee = (te) => {
                        var oe = de(), M = Q(oe);
                        {
                          var re = (pe) => {
                            var ie = s6(), ce = Q(ie), me = Z(ce, !0);
                            K(ce);
                            var be = V(ce, 2), xe = Z(be), he = Z(xe), Ce = Z(he);
                            K(he);
                            var De = V(he, 2), J = (Ie) => l({ [c(N).name]: parseFloat(Ie.target.value) });
                            nt(
                              De,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: J
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), K(xe), K(be), Ae(() => {
                              ft(me, c(N).label), ft(Ce, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), T(pe, ie);
                          }, ge = (pe) => {
                            var ie = de(), ce = Q(ie);
                            {
                              var me = (xe) => {
                                var he = a6(), Ce = Q(he), De = Z(Ce, !0);
                                K(Ce);
                                var J = V(Ce, 2), Ie = Z(J);
                                {
                                  let Se = /* @__PURE__ */ $(() => c(N).options || []), Me = /* @__PURE__ */ $(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  Dt(Ie, {
                                    get items() {
                                      return c(Se);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Re) => {
                                      const Ge = Re.value;
                                      l({ [c(N).name]: Ge });
                                    },
                                    get value() {
                                      return c(Me);
                                    }
                                  });
                                }
                                K(J), Ae(() => ft(De, c(N).label)), T(xe, he);
                              }, be = (xe) => {
                                var he = de(), Ce = Q(he);
                                {
                                  var De = (Ie) => {
                                    var Se = l6(), Me = Q(Se), Re = Z(Me, !0);
                                    K(Me);
                                    var Ge = V(Me, 2), st = Z(Ge);
                                    {
                                      let it = /* @__PURE__ */ $(() => c(N).chosen?.buttonText);
                                      Ug(st, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(it);
                                        },
                                        onChosen: (ct, ye, Ne) => {
                                          c(N).chosen?.onChosen?.(l, ct, ye, Ne);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    K(Ge), Ae(() => ft(Re, c(N).label)), T(Ie, Se);
                                  }, J = (Ie) => {
                                    var Se = de(), Me = Q(Se);
                                    {
                                      var Re = (Ge) => {
                                        Je(Ge, je({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: (st, it) => {
                                            Ee();
                                            var ct = He();
                                            Ae(() => ft(ct, c(N).label)), T(st, ct);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      se(
                                        Me,
                                        (Ge) => {
                                          c(N).type === "heading" && Ge(Re);
                                        },
                                        !0
                                      );
                                    }
                                    T(Ie, Se);
                                  };
                                  se(
                                    Ce,
                                    (Ie) => {
                                      c(N).type === "chosen" ? Ie(De) : Ie(J, !1);
                                    },
                                    !0
                                  );
                                }
                                T(xe, he);
                              };
                              se(
                                ce,
                                (xe) => {
                                  c(N).type === "select" ? xe(me) : xe(be, !1);
                                },
                                !0
                              );
                            }
                            T(pe, ie);
                          };
                          se(
                            M,
                            (pe) => {
                              c(N).type === "slider" ? pe(re) : pe(ge, !1);
                            },
                            !0
                          );
                        }
                        T(te, oe);
                      };
                      se(
                        j,
                        (te) => {
                          c(N).type === "textarea" ? te(q) : te(ee, !1);
                        },
                        !0
                      );
                    }
                    T(X, Y);
                  };
                  se(U, (X) => {
                    c(N).type === "input" ? X(G) : X(L, !1);
                  });
                }
                T(A, I);
              }), T(S, H);
            };
            se(z, (S) => {
              v && S(W);
            });
          }
          var B = V(z, 2);
          It(B, (S) => m = S, () => m);
          var D = V(B, 2);
          {
            var P = (S) => {
              var H = c6(), E = Q(H), A = Z(E);
              Je(A, {
                level: 3,
                mt: "10px",
                children: (G, L) => {
                  Ee();
                  var X = He("输出参数");
                  T(G, X);
                },
                $$slots: { default: !0 }
              });
              var N = V(A, 2);
              {
                var I = (G) => {
                  Xe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (L, X) => {
                      var Y = u6();
                      T(L, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                se(N, (G) => {
                  f.outputDefsAddEnable !== !1 && G(I);
                });
              }
              K(E);
              var U = V(E, 2);
              $r(U, {}), T(S, H);
            };
            se(D, (S) => {
              f.outputDefsEnable !== !1 && S(P);
            });
          }
          Ae(() => {
            Vt(B, f.rootStyle || ""), sn(B, 1, Cr(f.rootClass), "svelte-qt4m0r");
          }), T(x, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
ae(wv, { data: {} }, [], [], !0);
const f6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = Ye.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ye.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), p6 = () => ({ deleteEdge: (t) => {
  Ye.removeEdge(t);
} }), g6 = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Ye.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ye.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, v6 = () => ({ getNodeRelativePosition: (t) => {
  let e = Ye.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Ye.getNode(e.parentId) : e = void 0;
  return n;
} });
function m6(t) {
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
function y6(t) {
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
function w6(t) {
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
function Ml(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Ml(n, e));
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
      Object.hasOwn(t, r) && (n[r] = Ml(t[r], e));
    return n;
  }
  return t;
}
const b6 = () => (Tt(), { copyHandler: async (t) => {
  const e = Ye.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Ye.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(m6), o = n.map(w6), i = JSON.stringify({
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
  const r = y6(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Jn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Ml(l.data, i);
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
      id: `edge_${Jn()}`,
      source: u,
      target: d
    });
  }
  Ye.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ye.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Dd = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var x6 = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), C6 = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), k6 = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const $6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function bv(t, e) {
  le(e, !0), rt(t, $6);
  const n = g(e, "onInit", 7), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = Tt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ we(!1), s = /* @__PURE__ */ we(null);
  const { updateEdgeData: a } = f6(), l = (Y) => {
    Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
  }, u = (Y) => {
    Y.preventDefault();
    const j = o.screenToFlowPosition({ x: Y.clientX - 250, y: Y.clientY - 100 }), q = Y.dataTransfer?.getData("application/tinyflow");
    if (!q)
      return;
    const ee = JSON.parse(q), te = { id: `node_${Jn()}`, position: j, data: {}, ...ee };
    Ye.addNode(te), Ye.selectNodeOnly(te.id);
  }, { getNode: d } = Qk(), h = (Y) => {
    const j = d(Y.source), q = d(Y.target);
    if (Y.sourceHandle === "loop_handle" || j.parentId) {
      const ee = o.getEdges();
      for (let te of ee)
        if (te.target === Y.target) {
          const oe = d(te.source);
          if (Y.sourceHandle === "loop_handle" && oe.parentId !== j.id || j.parentId && oe.parentId !== j.parentId)
            return !1;
        }
    }
    return !(!j.parentId && q.parentId && q.parentId !== j.id);
  }, { getNodesFromSource: f } = g6(), { getNodeRelativePosition: v } = v6(), { ensureParentInNodesBefore: m } = e6(), y = (Y, j) => {
    if (!j.isValid)
      return;
    const q = j.toNode;
    if (q.parentId)
      return;
    const ee = j.fromNode, te = j.fromHandle, oe = { position: { ...q.position } };
    if (te.id === "loop_handle" ? oe.parentId = ee.id : ee.parentId && (oe.parentId = ee.parentId), oe.parentId) {
      const { x: M, y: re } = v(oe.parentId);
      oe.position = { x: q.position.x - M, y: q.position.y - re }, o.updateNode(q.id, oe), f(q.id).forEach((ge) => {
        o.updateNode(ge.id, {
          parentId: oe.parentId,
          position: { x: ge.position.x - M, y: ge.position.y - re }
        });
      }), m(oe.parentId, q.id);
    }
    setTimeout(() => {
      Ye.getEdges().forEach((M) => {
        M.target === q.id && M.source == ee.id && (F(i, !0), F(s, M, !0));
      });
    });
  }, { getEdgesByTarget: w } = t6(), b = (Y) => {
    Y.edges.forEach((j) => {
      j.id === c(s)?.id && (F(s, null), F(i, !1));
      const q = d(j.target);
      if (q && q.parentId) {
        const ee = w(j.target), { x: te, y: oe } = v(q.parentId);
        if (ee.length === 0)
          o.updateNode(q.id, {
            parentId: void 0,
            position: { x: q.position.x + te, y: q.position.y + oe }
          }), f(q.id).forEach((M) => {
            o.updateNode(M.id, {
              parentId: void 0,
              position: { x: M.position.x + te, y: M.position.y + oe }
            });
          });
        else {
          let M = !1;
          for (let re = 0; re < ee.length; re++) {
            const ge = ee[re], pe = d(ge.source);
            if (pe.parentId || pe.type === "loopNode") {
              M = !0;
              break;
            }
          }
          M || (o.updateNode(q.id, {
            parentId: void 0,
            position: { x: q.position.x + te, y: q.position.y + oe }
          }), f(q.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + te, y: re.position.y + oe }
            });
          }));
        }
      }
    });
  }, { deleteEdge: x } = p6(), _ = (Y, j) => {
  }, k = (Y) => {
  }, { copyHandler: C, pasteHandler: O } = b6(), z = (Y) => {
    Dd() || ((Y.ctrlKey || Y.metaKey) && Y.key === "c" && (Y.preventDefault(), C(Y)), (Y.ctrlKey || Y.metaKey) && Y.key === "a" && (Y.preventDefault(), Ye.updateNodes((j) => j.map((q) => ({ ...q, selected: !0 }))), Ye.updateEdges((j) => j.map((q) => ({ ...q, selected: !0 })))));
  }, W = async (Y) => {
    Dd() || O(Y);
  };
  Dn(() => {
    window.addEventListener("keydown", z), window.addEventListener("paste", W);
  }), Pi(() => {
    window.removeEventListener("keydown", z), window.removeEventListener("paste", W);
  });
  const B = {
    // ...nodeTypes
  }, D = hr().customNodes;
  if (D)
    for (let Y of Object.keys(D))
      B[Y] = wv;
  const P = hr().onDataChange;
  Be(() => {
    P?.({
      nodes: Ye.getNodes(),
      edges: Ye.getEdges(),
      viewport: Ye.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(Y) {
      n(Y), p();
    }
  }, H = k6(), E = Z(H), A = Ye.getNodes, N = Ye.setNodes, I = Ye.getEdges, U = Ye.setEdges, G = Ye.getViewport, L = Ye.setViewport;
  {
    let Y = /* @__PURE__ */ $(() => hr().defaultTheme ?? "system"), j = /* @__PURE__ */ $(() => ({ ...Yk, ...B })), q = /* @__PURE__ */ $(() => ({
      markerEnd: { type: gi.ArrowClosed, width: 20, height: 20 }
    }));
    yp(E, {
      get colorMode() {
        return c(Y);
      },
      get nodeTypes() {
        return c(j);
      },
      get nodes() {
        return A();
      },
      set nodes(ee) {
        N(ee);
      },
      get edges() {
        return I();
      },
      set edges(ee) {
        U(ee);
      },
      get viewport() {
        return G();
      },
      set viewport(ee) {
        L(ee);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: h,
      onconnectend: y,
      onconnectstart: _,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (ee) => {
        F(i, !0), F(s, ee.edge, !0);
      },
      onbeforeconnect: (ee) => ({ ...ee, id: Jn() }),
      ondelete: b,
      onclick: (ee) => {
        const te = ee.target;
        te.classList.contains("svelte-flow__edge-interaction") || te.classList.contains("panel-content") || te.closest(".panel-content") || (F(i, !1), F(s, null));
      },
      get defaultEdgeOptions() {
        return c(q);
      },
      children: (ee, te) => {
        var oe = C6(), M = Q(oe);
        Pp(M, {});
        var re = V(M, 2);
        Sp(re, {});
        var ge = V(re, 2);
        Tp(ge, {});
        var pe = V(ge, 2);
        {
          var ie = (ce) => {
            Hi(ce, {
              children: (me, be) => {
                var xe = x6(), he = V(Z(xe), 4), Ce = Z(he);
                {
                  let Se = /* @__PURE__ */ $(() => c(s)?.data?.condition);
                  et(Ce, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Se);
                    },
                    onchange: (Me) => {
                      c(s) && a(c(s).id, { condition: Me.target?.value });
                    }
                  });
                }
                K(he);
                var De = V(he, 2), J = Z(De);
                Xe(J, {
                  variant: "destructive",
                  onclick: () => {
                    x(c(s)?.id), F(i, !1);
                  },
                  children: (Se, Me) => {
                    Ee();
                    var Re = He("删除");
                    T(Se, Re);
                  },
                  $$slots: { default: !0 }
                });
                var Ie = V(J, 2);
                Xe(Ie, {
                  variant: "default",
                  onclick: () => {
                    F(i, !1);
                  },
                  children: (Se, Me) => {
                    Ee();
                    var Re = He("保存");
                    T(Se, Re);
                  },
                  $$slots: { default: !0 }
                }), K(De), K(xe), T(me, xe);
              },
              $$slots: { default: !0 }
            });
          };
          se(pe, (ce) => {
            c(i) && ce(ie);
          });
        }
        T(ee, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var X = V(E, 2);
  return yv(X, {}), K(H), T(t, H), ue(S);
}
ae(bv, { onInit: {} }, [], [], !0);
function S6(t, e) {
  le(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ye.init(o?.nodes || [], o?.edges || []), Jr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), p();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), p();
    }
  };
  return wp(t, {
    children: (s, a) => {
      bv(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", ae(S6, { options: {}, onInit: {} }, [], [], !1));
const E6 = Ov((t, e) => {
  const n = Xu(null), r = Xu(null);
  Tv(e, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
    getInstance: () => r.current ? r.current : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = t;
  return Nv(() => {
    if (n.current) {
      const a = new a7({
        ...t,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Lv.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  E6 as Tinyflow
};
//# sourceMappingURL=index.js.map
