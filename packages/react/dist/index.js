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
function Cf() {
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
function kf() {
  return Qs || (Qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function $(O) {
      if (O === null || typeof O != "object")
        return null;
      var J = y && O[y] || O[b];
      return typeof J == "function" ? J : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(O) {
      {
        for (var J = arguments.length, pe = new Array(J > 1 ? J - 1 : 0), Ee = 1; Ee < J; Ee++)
          pe[Ee - 1] = arguments[Ee];
        k("error", O, pe);
      }
    }
    function k(O, J, pe) {
      {
        var Ee = C.ReactDebugCurrentFrame, R = Ee.getStackAddendum();
        R !== "" && (J += "%s", pe = pe.concat([R]));
        var ot = pe.map(function(We) {
          return String(We);
        });
        ot.unshift("Warning: " + J), Function.prototype.apply.call(console[O], console, ot);
      }
    }
    var w = !1, _ = !1, T = !1, E = !1, N = !1, H;
    H = Symbol.for("react.module.reference");
    function z(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === i || N || O === o || O === u || O === c || E || O === v || w || _ || T || typeof O == "object" && O !== null && (O.$$typeof === f || O.$$typeof === d || O.$$typeof === a || O.$$typeof === s || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === H || O.getModuleId !== void 0));
    }
    function I(O, J, pe) {
      var Ee = O.displayName;
      if (Ee)
        return Ee;
      var R = J.displayName || J.name || "";
      return R !== "" ? pe + "(" + R + ")" : pe;
    }
    function D(O) {
      return O.displayName || "Context";
    }
    function Y(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
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
      if (typeof O == "object")
        switch (O.$$typeof) {
          case s:
            var J = O;
            return D(J) + ".Consumer";
          case a:
            var pe = O;
            return D(pe._context) + ".Provider";
          case l:
            return I(O, O.render, "ForwardRef");
          case d:
            var Ee = O.displayName || null;
            return Ee !== null ? Ee : Y(O.type) || "Memo";
          case f: {
            var R = O, ot = R._payload, We = R._init;
            try {
              return Y(We(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, V = 0, x, P, M, L, Z, q, K;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function U() {
      {
        if (V === 0) {
          x = console.log, P = console.info, M = console.warn, L = console.error, Z = console.group, q = console.groupCollapsed, K = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        V++;
      }
    }
    function X() {
      {
        if (V--, V === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, O, {
              value: x
            }),
            info: S({}, O, {
              value: P
            }),
            warn: S({}, O, {
              value: M
            }),
            error: S({}, O, {
              value: L
            }),
            group: S({}, O, {
              value: Z
            }),
            groupCollapsed: S({}, O, {
              value: q
            }),
            groupEnd: S({}, O, {
              value: K
            })
          });
        }
        V < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = C.ReactCurrentDispatcher, ve;
    function me(O, J, pe) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (R) {
            var Ee = R.stack.trim().match(/\n( *(at )?)/);
            ve = Ee && Ee[1] || "";
          }
        return `
` + ve + O;
      }
    }
    var ue = !1, Ve;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new le();
    }
    function ce(O, J) {
      if (!O || ue)
        return "";
      {
        var pe = Ve.get(O);
        if (pe !== void 0)
          return pe;
      }
      var Ee;
      ue = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ot;
      ot = ie.current, ie.current = null, U();
      try {
        if (J) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (kt) {
              Ee = kt;
            }
            Reflect.construct(O, [], We);
          } else {
            try {
              We.call();
            } catch (kt) {
              Ee = kt;
            }
            O.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Ee = kt;
          }
          O();
        }
      } catch (kt) {
        if (kt && Ee && typeof kt.stack == "string") {
          for (var Le = kt.stack.split(`
`), Pt = Ee.stack.split(`
`), gt = Le.length - 1, pt = Pt.length - 1; gt >= 1 && pt >= 0 && Le[gt] !== Pt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (Le[gt] !== Pt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || Le[gt] !== Pt[pt]) {
                    var Yt = `
` + Le[gt].replace(" at new ", " at ");
                    return O.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", O.displayName)), typeof O == "function" && Ve.set(O, Yt), Yt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ie.current = ot, X(), Error.prepareStackTrace = R;
      }
      var tr = O ? O.displayName || O.name : "", nr = tr ? me(tr) : "";
      return typeof O == "function" && Ve.set(O, nr), nr;
    }
    function ze(O, J, pe) {
      return ce(O, !1);
    }
    function Ne(O) {
      var J = O.prototype;
      return !!(J && J.isReactComponent);
    }
    function Ze(O, J, pe) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return ce(O, Ne(O));
      if (typeof O == "string")
        return me(O);
      switch (O) {
        case u:
          return me("Suspense");
        case c:
          return me("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            return ze(O.render);
          case d:
            return Ze(O.type, J, pe);
          case f: {
            var Ee = O, R = Ee._payload, ot = Ee._init;
            try {
              return Ze(ot(R), J, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ue = {}, Ge = C.ReactDebugCurrentFrame;
    function ae(O) {
      if (O) {
        var J = O._owner, pe = Ze(O.type, O._source, J ? J.type : null);
        Ge.setExtraStackFrame(pe);
      } else
        Ge.setExtraStackFrame(null);
    }
    function fe(O, J, pe, Ee, R) {
      {
        var ot = Function.call.bind(te);
        for (var We in O)
          if (ot(O, We)) {
            var Le = void 0;
            try {
              if (typeof O[We] != "function") {
                var Pt = Error((Ee || "React class") + ": " + pe + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              Le = O[We](J, We, Ee, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              Le = gt;
            }
            Le && !(Le instanceof Error) && (ae(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", pe, We, typeof Le), ae(null)), Le instanceof Error && !(Le.message in Ue) && (Ue[Le.message] = !0, ae(R), h("Failed %s type: %s", pe, Le.message), ae(null));
          }
      }
    }
    var Se = Array.isArray;
    function Xe(O) {
      return Se(O);
    }
    function Ae(O) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, pe = J && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return pe;
      }
    }
    function vt(O) {
      try {
        return st(O), !1;
      } catch {
        return !0;
      }
    }
    function st(O) {
      return "" + O;
    }
    function ne(O) {
      if (vt(O))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(O)), st(O);
    }
    var Ie = C.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Zt;
    function ln(O) {
      if (te.call(O, "ref")) {
        var J = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function He(O) {
      if (te.call(O, "key")) {
        var J = Object.getOwnPropertyDescriptor(O, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function lt(O, J) {
      typeof O.ref == "string" && Ie.current;
    }
    function Ye(O, J) {
      {
        var pe = function() {
          Rt || (Rt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Re(O, J) {
      {
        var pe = function() {
          Zt || (Zt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        pe.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var ut = function(O, J, pe, Ee, R, ot, We) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: J,
        ref: pe,
        props: We,
        // Record the component responsible for creating this element.
        _owner: ot
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
        value: Ee
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function Jt(O, J, pe, Ee, R) {
      {
        var ot, We = {}, Le = null, Pt = null;
        pe !== void 0 && (ne(pe), Le = "" + pe), He(J) && (ne(J.key), Le = "" + J.key), ln(J) && (Pt = J.ref, lt(J, R));
        for (ot in J)
          te.call(J, ot) && !we.hasOwnProperty(ot) && (We[ot] = J[ot]);
        if (O && O.defaultProps) {
          var gt = O.defaultProps;
          for (ot in gt)
            We[ot] === void 0 && (We[ot] = gt[ot]);
        }
        if (Le || Pt) {
          var pt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Le && Ye(We, pt), Pt && Re(We, pt);
        }
        return ut(O, Le, Pt, R, Ee, Ie.current, We);
      }
    }
    var Et = C.ReactCurrentOwner, Qn = C.ReactDebugCurrentFrame;
    function mt(O) {
      if (O) {
        var J = O._owner, pe = Ze(O.type, O._source, J ? J.type : null);
        Qn.setExtraStackFrame(pe);
      } else
        Qn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Pn(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function rt() {
      {
        if (Et.current) {
          var O = Y(Et.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function vo(O) {
      return "";
    }
    var er = {};
    function Nt(O) {
      {
        var J = rt();
        if (!J) {
          var pe = typeof O == "string" ? O : O.displayName || O.name;
          pe && (J = `

Check the top-level render call using <` + pe + ">.");
        }
        return J;
      }
    }
    function wr(O, J) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var pe = Nt(J);
        if (er[pe])
          return;
        er[pe] = !0;
        var Ee = "";
        O && O._owner && O._owner !== Et.current && (Ee = " It was passed a child from " + Y(O._owner.type) + "."), mt(O), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Ee), mt(null);
      }
    }
    function br(O, J) {
      {
        if (typeof O != "object")
          return;
        if (Xe(O))
          for (var pe = 0; pe < O.length; pe++) {
            var Ee = O[pe];
            Pn(Ee) && wr(Ee, J);
          }
        else if (Pn(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var R = $(O);
          if (typeof R == "function" && R !== O.entries)
            for (var ot = R.call(O), We; !(We = ot.next()).done; )
              Pn(We.value) && wr(We.value, J);
        }
      }
    }
    function Lr(O) {
      {
        var J = O.type;
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
          fe(pe, O.props, "prop", Ee, O);
        } else if (J.PropTypes !== void 0 && !$t) {
          $t = !0;
          var R = Y(J);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function go(O) {
      {
        for (var J = Object.keys(O.props), pe = 0; pe < J.length; pe++) {
          var Ee = J[pe];
          if (Ee !== "children" && Ee !== "key") {
            mt(O), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), mt(null);
            break;
          }
        }
        O.ref !== null && (mt(O), h("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ai = {};
    function si(O, J, pe, Ee, R, ot) {
      {
        var We = z(O);
        if (!We) {
          var Le = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = vo();
          Pt ? Le += Pt : Le += rt();
          var gt;
          O === null ? gt = "null" : Xe(O) ? gt = "array" : O !== void 0 && O.$$typeof === t ? (gt = "<" + (Y(O.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof O, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, Le);
        }
        var pt = Jt(O, J, pe, R, ot);
        if (pt == null)
          return pt;
        if (We) {
          var Yt = J.children;
          if (Yt !== void 0)
            if (Ee)
              if (Xe(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  br(Yt[tr], O);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Yt, O);
        }
        if (te.call(J, "key")) {
          var nr = Y(O), kt = Object.keys(J).filter(function(ui) {
            return ui !== "key";
          }), zr = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ai[nr + zr]) {
            var li = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zr, nr, li, nr), ai[nr + zr] = !0;
          }
        }
        return O === r ? go(pt) : Lr(pt), pt;
      }
    }
    function xa(O, J, pe) {
      return si(O, J, pe, !0);
    }
    function $a(O, J, pe) {
      return si(O, J, pe, !1);
    }
    var Ca = $a, ka = xa;
    po.Fragment = r, po.jsx = Ca, po.jsxs = ka;
  }()), po;
}
var el;
function _f() {
  return el || (el = 1, process.env.NODE_ENV === "production" ? ci.exports = Cf() : ci.exports = kf()), ci.exports;
}
var Sf = _f(), Ef = Object.defineProperty, vu = (e) => {
  throw TypeError(e);
}, Pf = (e, t, n) => t in e ? Ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wt = (e, t, n) => Pf(e, typeof t != "symbol" ? t + "" : t, n), cs = (e, t, n) => t.has(e) || vu("Cannot " + n), yt = (e, t, n) => (cs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? vu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Si = (e, t, n, r) => (cs(e, t, "write to private field"), t.set(e, n), n), Tf = (e, t, n) => (cs(e, t, "access private method"), n);
const Mf = "5";
var tl;
typeof window < "u" && ((tl = window.__svelte ?? (window.__svelte = {})).v ?? (tl.v = /* @__PURE__ */ new Set())).add(Mf);
let so = !1, Vf = !1;
function Hf() {
  so = !0;
}
Hf();
const ds = 1, fs = 2, gu = 4, Nf = 8, Of = 16, Df = 1, Lf = 2, hu = 4, zf = 8, Af = 16, pu = 1, If = 2, vs = "[", gs = "[!", hs = "]", Yr = {}, Bt = Symbol(), Rf = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/2000/svg", Yf = !1;
function Qi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Wo = Array.isArray, Bf = Array.prototype.indexOf, ps = Array.from, Ei = Object.keys, Po = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, mu = Object.getOwnPropertyDescriptors, qf = Object.prototype, Wf = Array.prototype, ms = Object.getPrototypeOf, nl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const Ct = () => {
};
function jf(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bn = 2, yu = 4, ea = 8, ys = 16, Un = 32, Hr = 64, Pi = 128, rn = 256, Ti = 512, At = 1024, Hn = 2048, mr = 4096, Wn = 8192, ta = 16384, Xf = 32768, lo = 65536, Kf = 1 << 17, Ff = 1 << 19, wu = 1 << 20, Aa = 1 << 21, lr = Symbol("$state"), ws = Symbol("legacy props"), Uf = Symbol("");
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
let Me = !1;
function tn(e) {
  Me = e;
}
let qe;
function zt(e) {
  if (e === null)
    throw na(), Yr;
  return qe = e;
}
function Nn() {
  return zt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ An(qe)
  );
}
function W(e) {
  if (Me) {
    if (/* @__PURE__ */ An(qe) !== null)
      throw na(), Yr;
    qe = e;
  }
}
function De(e = 1) {
  if (Me) {
    for (var t = e, n = qe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ An(n);
    qe = n;
  }
}
function Ia() {
  for (var e = 0, t = qe; ; ) {
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
  if (t !== qf && t !== Wf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wo(e), o = /* @__PURE__ */ jt(0), i = Qe, a = (s) => {
    var l = Qe;
    On(i);
    var u = s();
    return On(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ jt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && rv();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ jt(u.value)), n.set(l, c)) : G(
          c,
          a(() => yn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ jt(Bt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && G(c, d);
          }
          G(u, Bt), rl(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === lr)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = qn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ jt(yn(f ? s[l] : Bt))), n.set(l, d)), d !== void 0) {
          var v = g(d);
          return v === Bt ? void 0 : v;
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
          if (d !== void 0 && f !== Bt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Bt || Reflect.has(s, l);
        if (c !== void 0 || et !== null && (!d || (u = qn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ jt(d ? yn(s[l]) : Bt)), n.set(l, c));
          var f = g(c);
          if (f === Bt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var y = u; y < /** @type {Source<number>} */
          f.v; y += 1) {
            var b = n.get(y + "");
            b !== void 0 ? G(b, Bt) : y in s && (b = a(() => /* @__PURE__ */ jt(Bt)), n.set(y + "", b));
          }
        f === void 0 ? (!v || (d = qn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ jt(void 0)), G(
          f,
          a(() => yn(u))
        ), n.set(l, f)) : (v = f.v !== Bt, G(
          f,
          a(() => yn(u))
        ));
        var $ = Reflect.getOwnPropertyDescriptor(s, l);
        if ($ != null && $.set && $.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= C.v && G(C, h + 1);
          }
          rl(o);
        }
        return !0;
      },
      ownKeys(s) {
        g(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Bt;
        });
        for (var [u, c] of n)
          c.v !== Bt && !(u in s) && l.push(u);
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
    xu = qn(t, "firstChild").get, $u = qn(t, "nextSibling").get, nl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nl(n) && (n.__t = void 0);
  }
}
function Xn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return xu.call(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return $u.call(e);
}
function j(e, t) {
  if (!Me)
    return /* @__PURE__ */ Lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Lt(qe)
  );
  if (n === null)
    n = qe.appendChild(Xn());
  else if (t && n.nodeType !== 3) {
    var r = Xn();
    return n == null || n.before(r), zt(r), r;
  }
  return zt(n), n;
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
  return qe;
}
function B(e, t = 1, n = !1) {
  let r = Me ? qe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ An(r);
  if (!Me)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Xn();
    return r === null ? o == null || o.after(a) : r.before(a), zt(a), a;
  }
  return zt(r), /** @type {TemplateNode} */
  r;
}
function bs(e) {
  e.textContent = "";
}
function Cu(e) {
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
  var t = bn | Hn, n = Qe !== null && Qe.f & bn ? (
    /** @type {Derived} */
    Qe
  ) : null;
  return et === null || n !== null && n.f & rn ? t |= rn : et.f |= wu, {
    ctx: Je,
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
    parent: n ?? et
  };
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  const t = /* @__PURE__ */ Kr(e);
  return Du(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Kr(e);
  return t.equals = $s, t;
}
function ku(e) {
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
function _u(e) {
  var t, n = et;
  vr(av(e));
  try {
    ku(e), t = Iu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Su(e) {
  var t = _u(e), n = (ar || e.f & rn) && e.deps !== null ? mr : At;
  gn(e, n), e.equals(t) || (e.v = t, e.wv = zu());
}
function Eu(e) {
  et === null && Qe === null && Qf(), Qe !== null && Qe.f & rn && et === null && Jf(), Xo && Gf();
}
function sv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Nr(e, t, n, r = !0) {
  var o = et, i = {
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
  if (!a && r && (o !== null && sv(i, o), Qe !== null && Qe.f & bn)) {
    var s = (
      /** @type {Derived} */
      Qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Cs(e) {
  const t = Nr(ea, null, !1);
  return gn(t, At), t.teardown = e, t;
}
function fr(e) {
  Eu();
  var t = et !== null && (et.f & Un) !== 0 && Je !== null && !Je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: et,
      reaction: Qe
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
function ye(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = uo(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), Dn(t));
  });
}
function _t() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  uo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & At && gn(n, mr), co(n) && oa(n), t.ran = !1;
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
  return Or(() => e(...r.map(g)));
}
function Or(e, t = 0) {
  return Nr(ea | ys | t, e, !0);
}
function Kn(e, t = !0) {
  return Nr(ea | Un, e, !0, t);
}
function Pu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xo, r = Qe;
    il(!0), On(null);
    try {
      t.call(null);
    } finally {
      il(n), On(r);
    }
  }
}
function Tu(e, t = !1) {
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
  Tu(e, t && !n), Ni(e, 0), gn(e, ta);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Pu(e);
  var s = e.parent;
  s !== null && s.first !== null && Mu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Mu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fr(e, t) {
  var n = [];
  ks(e, n, !0), Vu(n, () => {
    vn(e), t && t();
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
  if (!(e.f & Wn)) {
    if (e.f ^= Wn, e.transitions !== null)
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
  if (e.f & Wn) {
    e.f ^= Wn, e.f & At || (e.f ^= At), co(e) && (gn(e, Hn), ia(e));
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
let Vo = [], Ho = [];
function Nu() {
  var e = Vo;
  Vo = [], To(e);
}
function Ou() {
  var e = Ho;
  Ho = [], To(e);
}
function jo(e) {
  Vo.length === 0 && queueMicrotask(Nu), Vo.push(e);
}
function vv(e) {
  Ho.length === 0 && fv(Ou), Ho.push(e);
}
function ol() {
  Vo.length > 0 && Nu(), Ho.length > 0 && Ou();
}
let yi = !1, Mi = !1, Vi = null, kr = !1, Xo = !1;
function il(e) {
  Xo = e;
}
let _o = [], Qe = null, Tn = !1;
function On(e) {
  Qe = e;
}
let et = null;
function vr(e) {
  et = e;
}
let fn = null;
function gv(e) {
  fn = e;
}
function Du(e) {
  Qe !== null && Qe.f & Aa && (fn === null ? gv([e]) : fn.push(e));
}
let Ot = null, Qt = 0, cn = null;
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
      var i, a, s = (n & Ti) !== 0, l = o && et !== null && !ar, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Ti), l && d !== null && !(d.f & rn) && (c.f ^= rn);
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
    (!o || et !== null && !ar) && gn(e, At);
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
      ) : t === i && (n ? gn(i, Hn) : i.f & At && gn(i, mr), ia(
        /** @type {Effect} */
        i
      )));
    }
}
function Iu(e) {
  var t, n = Ot, r = Qt, o = cn, i = Qe, a = ar, s = fn, l = Je, u = Tn, c = e.f;
  Ot = /** @type {null | Value[]} */
  null, Qt = 0, cn = null, ar = (c & rn) !== 0 && (Tn || !kr || Qe === null), Qe = c & (Un | Hr) ? null : e, fn = null, sl(e.ctx), Tn = !1, Hi++, e.f |= Aa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Ot !== null) {
      var v;
      if (Ni(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + Ot.length, v = 0; v < Ot.length; v++)
          f[Qt + v] = Ot[v];
      else
        e.deps = f = Ot;
      if (!ar)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Ni(e, Qt), f.length = Qt);
    if (aa() && cn !== null && !Tn && f !== null && !(e.f & (bn | mr | Hn)))
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
    Ot = n, Qt = r, cn = o, Qe = i, ar = a, fn = s, sl(l), Tn = u, e.f ^= Aa;
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
  (Ot === null || !Ot.includes(t)) && (gn(t, mr), t.f & (rn | Ti) || (t.f ^= Ti), ku(
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
    gn(e, At);
    var n = et, r = Je, o = kr;
    et = e, kr = !0;
    try {
      t & ys ? dv(e) : Tu(e), Pu(e);
      var i = Iu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Lu;
      var a = e.deps, s;
      Yf && Vf && e.f & Hn;
    } catch (l) {
      ra(l, e, n, r || e.ctx);
    } finally {
      kr = o, et = n;
    }
  }
}
function wv() {
  try {
    ev();
  } catch (e) {
    if (Vi !== null)
      ra(e, Vi, null);
    else
      throw e;
  }
}
function Ru() {
  var e = kr;
  try {
    var t = 0;
    for (kr = !0; _o.length > 0; ) {
      t++ > 1e3 && wv();
      var n = _o, r = n.length;
      _o = [];
      for (var o = 0; o < r; o++) {
        var i = xv(n[o]);
        bv(i);
      }
      No.clear();
    }
  } finally {
    Mi = !1, kr = e, Vi = null;
  }
}
function bv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (ta | Wn)))
        try {
          co(r) && (oa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Mu(r) : r.fn = null));
        } catch (o) {
          ra(o, r, null, r.ctx);
        }
    }
}
function ia(e) {
  Mi || (Mi = !0, queueMicrotask(Ru));
  for (var t = Vi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Hr | Un)) {
      if (!(n & At)) return;
      t.f ^= At;
    }
  }
  _o.push(t);
}
function xv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Un | Hr)) !== 0, i = o && (r & At) !== 0;
    if (!i && !(r & Wn)) {
      if (r & yu)
        t.push(n);
      else if (o)
        n.f ^= At;
      else {
        var a = Qe;
        try {
          Qe = n, co(n) && oa(n);
        } catch (u) {
          ra(u, n, null, n.ctx);
        } finally {
          Qe = a;
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
  for (ol(); _o.length > 0; )
    Mi = !0, Ru(), ol();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & bn) !== 0;
  if (Qe !== null && !Tn) {
    if (!(fn != null && fn.includes(e))) {
      var r = Qe.deps;
      e.rv < Hi && (e.rv = Hi, Ot === null && r !== null && r[Qt] === e ? Qt++ : Ot === null ? Ot = [e] : (!ar || !Ot.includes(e)) && Ot.push(e));
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
function Dn(e) {
  var t = Tn;
  try {
    return Tn = !0, e();
  } finally {
    Tn = t;
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
    equals: Cu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  const n = Ur(e);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t = !1) {
  var n;
  const r = Ur(e);
  return t || (r.equals = $s), so && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function G(e, t, n = !1) {
  Qe !== null && !Tn && aa() && Qe.f & (bn | ys) && !(fn != null && fn.includes(e)) && iv();
  let r = n ? yn(t) : t;
  return Ya(e, r);
}
function Ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Xo ? No.set(e, t) : No.set(e, n), e.v = t, e.f & bn && (e.f & Hn && _u(
      /** @type {Derived} */
      e
    ), gn(e, e.f & rn ? mr : At)), e.wv = zu(), Zu(e, Hn), aa() && et !== null && et.f & At && !(et.f & (Un | Hr)) && (cn === null ? hv([e]) : cn.push(e));
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
      s & Hn || !r && a === et || (gn(a, t), s & (At | rn) && (s & bn ? Zu(
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
    _s().get(e)
  );
}
function Gr(e, t) {
  return _s().set(e, t), t;
}
function Cv(e) {
  return _s().has(e);
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
  }), Cs(() => {
    r.d = !0;
  });
}
function he(e) {
  const t = Je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = et, r = Qe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), On(i.reaction), en(i.fn);
        }
      } finally {
        vr(n), On(r);
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
function _s(e) {
  return Je === null && Qi(), Je.c ?? (Je.c = new Map(kv(Je) || void 0));
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
function _v(e) {
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
function Tv(e) {
  return e = e.toLowerCase(), Pv[e] ?? e;
}
const Mv = ["touchstart", "touchmove"];
function Vv(e) {
  return Mv.includes(e);
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
function Ov(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Dv(e) {
  Me && /* @__PURE__ */ Lt(e) !== null && bs(e);
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
  var t = Qe, n = et;
  On(null), vr(null);
  try {
    return e();
  } finally {
    On(t), vr(n);
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
  (t === document.body || t === window || t === document) && Cs(() => {
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
    var d = Qe, f = et;
    On(null), vr(null);
    try {
      for (var v, y = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var $ = a["__" + o];
          if ($ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Wo($)) {
              var [C, ...h] = $;
              C.apply(a, [e, ...h]);
            } else
              $.call(a, e);
        } catch (k) {
          v ? y.push(k) : v = k;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let k of y)
          queueMicrotask(() => {
            throw k;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, On(d), vr(f);
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
    et
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & pu) !== 0, r = (t & If) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Me)
      return Kt(qe, null), qe;
    o === void 0 && (o = Ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Lt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || bu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(a)
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
function _e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & pu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Me)
      return Kt(qe, null), qe;
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
      Kt(c, d);
    } else
      Kt(u, u);
    return u;
  };
}
function Fe(e = "") {
  if (!Me) {
    var t = Xn(e + "");
    return Kt(t, t), t;
  }
  var n = qe;
  return n.nodeType !== 3 && (n.before(n = Xn()), zt(n)), Kt(n, n), n;
}
function dt() {
  if (Me)
    return Kt(qe, null), qe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xn();
  return e.append(t, n), Kt(t, n), e;
}
function A(e, t) {
  if (Me) {
    et.nodes_end = qe, Nn();
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
function qu(e, t) {
  return Wu(e, t);
}
function Av(e, t) {
  Ra(), t.intro = t.intro ?? !1;
  const n = t.target, r = Me, o = qe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Lt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== vs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ An(i);
    if (!i)
      throw Yr;
    tn(!0), zt(
      /** @type {Comment} */
      i
    ), Nn();
    const a = Wu(e, { ...t, anchor: i });
    if (qe === null || qe.nodeType !== 8 || /** @type {Comment} */
    qe.data !== hs)
      throw na(), Yr;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Yr)
      return t.recover === !1 && tv(), Ra(), bs(n), tn(!1), qu(e, t);
    throw a;
  } finally {
    tn(r), zt(o);
  }
}
const Ar = /* @__PURE__ */ new Map();
function Wu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Ra();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = Vv(v);
        t.addEventListener(v, xo, { passive: y });
        var b = Ar.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: y }), Ar.set(v, 1)) : Ar.set(v, b + 1);
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
      o && (r.$$events = o), Me && Kt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Me && (et.nodes_end = qe), i && he();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var y = (
          /** @type {number} */
          Ar.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, xo), Ar.delete(v)) : Ar.set(v, y);
      }
      Ba.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return qa.set(u, c), u;
}
let qa = /* @__PURE__ */ new WeakMap();
function Iv(e, t) {
  const n = qa.get(e);
  return n ? (qa.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, [n, r] = [0, 0]) {
  Me && n === 0 && Nn();
  var o = e, i = null, a = null, s = Bt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (Me && r !== -1) {
      if (n === 0) {
        const $ = (
          /** @type {Comment} */
          o.data
        );
        $ === vs ? r = 0 : $ === gs ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ia(), zt(o), tn(!1), y = !0, r = -1);
    }
    s ? (i ? Mo(i) : v && (i = Kn(() => v(o))), a && Fr(a, () => {
      a = null;
    })) : (a ? Mo(a) : v && (a = Kn(() => v(o, [n + 1, r]))), i && Fr(i, () => {
      i = null;
    })), y && tn(!0);
  };
  Or(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Me && (o = qe);
}
function Oo(e, t) {
  return t;
}
function Rv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    ks(t[a].e, o, !0);
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
  Vu(o, () => {
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
    a = Me ? zt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Lt(u)
    ) : u.appendChild(Xn());
  }
  Me && Nn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Wo(v) ? v : v == null ? [] : ps(v);
  });
  Or(() => {
    var v = g(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let b = !1;
    if (Me) {
      var $ = (
        /** @type {Comment} */
        a.data === gs
      );
      $ !== (y === 0) && (a = Ia(), zt(a), tn(!1), b = !0);
    }
    if (Me) {
      for (var C = null, h, k = 0; k < y; k++) {
        if (qe.nodeType === 8 && /** @type {Comment} */
        qe.data === hs) {
          a = /** @type {Comment} */
          qe, b = !0, tn(!1);
          break;
        }
        var w = v[k], _ = r(w, k);
        h = ju(
          qe,
          s,
          C,
          null,
          w,
          _,
          k,
          o,
          t,
          n
        ), s.items.set(_, h), C = h;
      }
      y > 0 && zt(Ia());
    }
    Me || Zv(v, s, a, o, t, r, n), i !== null && (y === 0 ? c ? Mo(c) : c = Kn(() => i(a)) : c !== null && Fr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), Me && (a = qe);
}
function Zv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Nf) !== 0, f = (o & (ds | fs)) !== 0, v = e.length, y = t.items, b = t.first, $ = b, C, h = null, k, w = [], _ = [], T, E, N, H;
  if (d)
    for (H = 0; H < v; H += 1)
      T = e[H], E = i(T, H), N = y.get(E), N !== void 0 && ((s = N.a) == null || s.measure(), (k ?? (k = /* @__PURE__ */ new Set())).add(N));
  for (H = 0; H < v; H += 1) {
    if (T = e[H], E = i(T, H), N = y.get(E), N === void 0) {
      var z = $ ? (
        /** @type {TemplateNode} */
        $.e.nodes_start
      ) : n;
      h = ju(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        T,
        E,
        H,
        r,
        o,
        a
      ), y.set(E, h), w = [], _ = [], $ = h.next;
      continue;
    }
    if (f && Yv(N, T, H, o), N.e.f & Wn && (Mo(N.e), d && ((l = N.a) == null || l.unfix(), (k ?? (k = /* @__PURE__ */ new Set())).delete(N))), N !== $) {
      if (C !== void 0 && C.has(N)) {
        if (w.length < _.length) {
          var I = _[0], D;
          h = I.prev;
          var Y = w[0], S = w[w.length - 1];
          for (D = 0; D < w.length; D += 1)
            ul(w[D], I, n);
          for (D = 0; D < _.length; D += 1)
            C.delete(_[D]);
          or(t, Y.prev, S.next), or(t, h, Y), or(t, S, I), $ = I, h = S, H -= 1, w = [], _ = [];
        } else
          C.delete(N), ul(N, $, n), or(t, N.prev, N.next), or(t, N, h === null ? t.first : h.next), or(t, h, N), h = N;
        continue;
      }
      for (w = [], _ = []; $ !== null && $.k !== E; )
        $.e.f & Wn || (C ?? (C = /* @__PURE__ */ new Set())).add($), _.push($), $ = $.next;
      if ($ === null)
        continue;
      N = $;
    }
    w.push(N), h = N, $ = N.next;
  }
  if ($ !== null || C !== void 0) {
    for (var V = C === void 0 ? [] : ps(C); $ !== null; )
      $.e.f & Wn || V.push($), $ = $.next;
    var x = V.length;
    if (x > 0) {
      var P = o & gu && v === 0 ? n : null;
      if (d) {
        for (H = 0; H < x; H += 1)
          (u = V[H].a) == null || u.measure();
        for (H = 0; H < x; H += 1)
          (c = V[H].a) == null || c.fix();
      }
      Rv(t, V, P, y);
    }
  }
  d && jo(() => {
    var M;
    if (k !== void 0)
      for (N of k)
        (M = N.a) == null || M.apply();
  }), et.first = t.first && t.first.e, et.last = h && h.e;
}
function Yv(e, t, n, r) {
  r & ds && Ya(e.v, t), r & fs ? Ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ju(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ds) !== 0, d = (l & Of) === 0, f = c ? d ? /* @__PURE__ */ re(o) : Ur(o) : o, v = l & fs ? Ur(a) : a, y = {
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
    return y.e = Kn(() => s(e, f, v, u), Me), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
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
  Or(() => {
    if (a === (a = t() ?? "")) {
      Me && Nn();
      return;
    }
    s !== void 0 && (vn(s), s = void 0), a !== "" && (s = Kn(() => {
      if (Me) {
        qe.data;
        for (var l = Nn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ An(l);
        if (l === null)
          throw na(), Yr;
        Kt(qe, u), i = zt(l);
        return;
      }
      var c = a + "", d = Ss(c);
      Kt(
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
  Me && Nn();
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
  var r = e, o = Ct, i;
  Or(() => {
    o !== (o = t()) && (i && (vn(i), i = null), i = Kn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), Me && (r = qe);
}
function Xu(e, t, n) {
  Me && Nn();
  var r = e, o, i;
  Or(() => {
    o !== (o = t()) && (i && (Fr(i), i = null), o && (i = Kn(() => n(r, o))));
  }, lo), Me && (r = qe);
}
function qv(e, t, n, r, o, i) {
  let a = Me;
  Me && Nn();
  var s, l, u = null;
  Me && qe.nodeType === 1 && (u = /** @type {Element} */
  qe, Nn());
  var c = (
    /** @type {TemplateNode} */
    Me ? qe : e
  ), d;
  Or(() => {
    const f = t() || null;
    var v = f === "svg" ? Zf : null;
    f !== s && (d && (f === null ? Fr(d, () => {
      d = null, l = null;
    }) : f === l ? Mo(d) : vn(d)), f && f !== l && (d = Kn(() => {
      if (u = Me ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Kt(u, u), r) {
        Me && Nv(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          Me ? /* @__PURE__ */ Lt(u) : u.appendChild(Xn())
        );
        Me && (y === null ? tn(!1) : zt(y)), r(u, y);
      }
      et.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), zt(c));
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
function Tt(e, t, n) {
  en(() => {
    var r = Dn(() => t(e, n == null ? void 0 : n()) || {});
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
function Wv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ku(e)) && (r && (r += " "), r += t);
  return r;
}
function _n(e) {
  return typeof e == "object" ? Wv(e) : e ?? "";
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
function _a(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Xv(e, t) {
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
                var y = e.substring(u, d).trim();
                n += " " + y + ";";
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
function Vt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Me || a !== n || a === void 0) {
    var s = jv(n, r, i);
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
    var i = Xv(t, r);
    (!Me || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Sa(e, n == null ? void 0 : n[0], r[0]), Sa(e, n == null ? void 0 : n[1], r[1], "important")) : Sa(e, n, r));
  return r;
}
const yo = Symbol("class"), xr = Symbol("style"), Fu = Symbol("is custom element"), Uu = Symbol("is html");
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
  Me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Uf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1) {
  var i = Ps(e), a = i[Fu], s = !i[Uu];
  let l = Me && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = _n(n.class) : (r || n[yo]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var f = Gu(e);
  for (const k in n) {
    let w = n[k];
    if (c && k === "value" && w == null) {
      e.value = e.__value = "", u[k] = w;
      continue;
    }
    if (k === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vt(e, v, w, r, t == null ? void 0 : t[yo], n[yo]), u[k] = w, u[yo] = n[yo];
      continue;
    }
    if (k === "style") {
      xt(e, w, t == null ? void 0 : t[xr], n[xr]), u[k] = w, u[xr] = n[xr];
      continue;
    }
    var y = u[k];
    if (w !== y) {
      u[k] = w;
      var b = k[0] + k[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {}, T = "$$" + k;
          let E = k.slice(2);
          var $ = Ev(E);
          if (_v(E) && (E = E.slice(0, -7), _.capture = !0), !$ && y) {
            if (w != null) continue;
            e.removeEventListener(E, u[T], _), u[T] = null;
          }
          if (w != null)
            if ($)
              e[`__${E}`] = w, Ko([E]);
            else {
              let N = function(H) {
                u[k].call(this, H);
              };
              u[T] = Bu(E, e, N, _);
            }
          else $ && (e[`__${E}`] = void 0);
        } else if (k === "style")
          xe(e, k, w);
        else if (k === "autofocus")
          Ov(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (k === "__value" || k === "value" && w != null))
          e.value = e.__value = w;
        else if (k === "selected" && c)
          Kv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = k;
          s || (C = Tv(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !h)
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
          else h || f.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && xe(e, C, w);
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
var $r, Eo, wi, Wa, Ju;
const ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, Wa), Rr(this, $r, /* @__PURE__ */ new WeakMap()), Rr(this, Eo), Rr(this, wi), Si(this, wi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, $r).set(t, r), Tf(this, Wa, Ju).call(this).observe(t, yt(this, wi)), () => {
      var o = yt(this, $r).get(t);
      o.delete(n), o.size === 0 && (yt(this, $r).delete(t), yt(this, Eo).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakSet(), Ju = function() {
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
Wt(ja, "entries", /* @__PURE__ */ new WeakMap());
let Fv = ja;
var Uv = /* @__PURE__ */ new Fv({
  box: "border-box"
});
function vl(e, t, n) {
  var r = Uv.observe(e, () => n(e[t]));
  en(() => (Dn(() => n(e[t])), r));
}
function gl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Ln(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return uo(() => {
      o = i, i = [], Dn(() => {
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
    hl(t, r), To(n.b);
  }), fr(() => {
    const o = Dn(() => n.m.map(jf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && fr(() => {
    hl(t, r), To(n.a);
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
  ), o = Wo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function hn(e) {
  Je === null && Qi(), so && Je.l !== null ? Jv(Je).m.push(e) : fr(() => {
    const t = Dn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ts(e) {
  Je === null && Qi(), hn(() => () => Dn(e));
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
      const a = Wo(i) ? i.slice() : [i], s = Gv(
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
function Ms(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ct;
  const r = Dn(
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
function $e(e, t = Ct) {
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
function ur(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return un(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = Ct;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? u[0] : u, a, s);
      i ? a(y) : d = typeof y == "function" ? y : Ct;
    }, v = o.map(
      (y, b) => Ms(
        y,
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
function F(e) {
  let t;
  return Ms(e, (n) => t = n)(), t;
}
let di = !1, Xa = Symbol();
function ee(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ re(void 0),
    unsubscribe: Ct
  });
  if (r.store !== e && !(Xa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ct;
    else {
      var o = !0;
      r.unsubscribe = Ms(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && Xa in n ? F(e) : g(r.source);
}
function Qv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Ct), e;
}
function Oi(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    Cs(() => {
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
    return t in e.special || (e.special[t] = m(
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
      const i = qn(o, t);
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
        const o = qn(r, t);
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
function m(e, t, n, r) {
  var o, i = (n & Df) !== 0, a = !so || (n & Lf) !== 0, s = (n & zf) !== 0, l = (n & Af) !== 0, u = !1, c;
  s ? [c, u] = e1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || ws in e, f = s && (((o = qn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, b = !1, $ = () => (b = !0, y && (y = !1, l ? v = Dn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && nv(), c = $(), f && f(c));
  var C;
  if (a)
    C = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? $() : (y = !0, b = !1, E);
    };
  else {
    var h = (i ? Kr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Kf, C = () => {
      var E = g(h);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & hu))
    return C;
  if (f) {
    var k = e.$$legacy;
    return function(E, N) {
      return arguments.length > 0 ? ((!a || !N || k || u) && f(N ? C() : E), E) : C();
    };
  }
  var w = !1, _ = /* @__PURE__ */ re(c), T = /* @__PURE__ */ Kr(() => {
    var E = C(), N = g(_);
    return w ? (w = !1, N) : _.v = E;
  });
  return s && g(T), i || (T.equals = $s), function(E, N) {
    if (arguments.length > 0) {
      const H = N ? g(T) : a && s ? yn(E) : E;
      if (!T.equals(H)) {
        if (w = !0, G(_, H), b && v !== void 0 && (v = H), pl(T))
          return E;
        Dn(() => g(T));
      }
      return E;
    }
    return pl(T) ? T.v : g(T);
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
      var l = /* @__PURE__ */ re(s);
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
    Si(this, pn, (t.hydrate ? Av : qu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), Si(this, rr, i.$$events);
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
    super(), Wt(this, "$$ctor"), Wt(this, "$$s"), Wt(this, "$$c"), Wt(this, "$$cn", !1), Wt(this, "$$d", {}), Wt(this, "$$r", !1), Wt(this, "$$p_d", {}), Wt(this, "$$l", {}), Wt(this, "$$l_u", /* @__PURE__ */ new Map()), Wt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          var d = (u = qn(c, s)) == null ? void 0 : u.get;
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
function It(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = It(e[n])) !== "" && (t += (t && " ") + r);
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
function Vs(e) {
  return e == null ? f1 : function() {
    return this.querySelector(e);
  };
}
function v1(e) {
  typeof e != "function" && (e = Vs(e));
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
function C1() {
  return Array.from(this.children);
}
function k1(e) {
  return function() {
    return $1.call(this.children, e);
  };
}
function _1(e) {
  return this.selectAll(e == null ? C1 : k1(typeof e == "function" ? e : rc(e)));
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
function Di(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Di.prototype = {
  constructor: Di,
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
function T1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function M1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new Di(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function V1(e) {
  return e.__data__;
}
function H1(e, t) {
  if (!arguments.length) return Array.from(this, V1);
  var n = t ? M1 : T1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = P1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = N1(e.call(c, c && c.__data__, u, r)), y = v.length, b = s[u] = new Array(y), $ = a[u] = new Array(y), C = l[u] = new Array(f);
    n(c, d, b, $, C, v, t);
    for (var h = 0, k = 0, w, _; h < y; ++h)
      if (w = b[h]) {
        for (h >= k && (k = h + 1); !(_ = $[k]) && ++k < y; ) ;
        w._next = _ || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function N1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function O1() {
  return new sn(this._exit || this._groups.map(oc), this._parents);
}
function D1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function L1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
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
function q1() {
  return !this.node();
}
function W1(e) {
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
function Cg(e) {
  var t = typeof e == "function" ? e : ec(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kg() {
  return null;
}
function _g(e, t) {
  var n = typeof e == "function" ? e : ec(e), r = t == null ? kg : typeof t == "function" ? t : Vs(t);
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
function Tg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mg(e) {
  return this.select(e ? Tg : Pg);
}
function Vg(e) {
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
  for (s = t ? Dg : Og, o = 0; o < i; ++o) this.each(s(r[o], t, n));
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
  selectChildren: _1,
  filter: S1,
  data: H1,
  enter: E1,
  exit: O1,
  join: D1,
  merge: L1,
  selection: Zg,
  order: z1,
  sort: A1,
  call: R1,
  nodes: Z1,
  node: Y1,
  size: B1,
  empty: q1,
  each: W1,
  attr: J1,
  style: ng,
  property: ag,
  classed: cg,
  text: gg,
  html: yg,
  raise: bg,
  lower: $g,
  append: Cg,
  insert: _g,
  remove: Eg,
  clone: Mg,
  datum: Vg,
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
const Bg = { passive: !1 }, Do = { capture: !0, passive: !1 };
function Pa(e) {
  e.stopImmediatePropagation();
}
function Br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function fc(e) {
  var t = e.document.documentElement, n = dn(e).on("dragstart.drag", Br, Do);
  "onselectstart" in t ? n.on("selectstart.drag", Br, Do) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function vc(e, t) {
  var n = e.document.documentElement, r = dn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Br, Do), setTimeout(function() {
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
function qg(e) {
  return !e.ctrlKey && !e.button;
}
function Wg() {
  return this.parentNode;
}
function jg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Xg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Kg() {
  var e = qg, t = Wg, n = jg, r = Xg, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", $).on("touchmove.drag", C, Bg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, _) {
    if (!(c || !e.call(this, w, _))) {
      var T = k(this, t.call(this, w, _), w, _, "mouse");
      T && (dn(w.view).on("mousemove.drag", y, Do).on("mouseup.drag", b, Do), fc(w.view), Pa(w), u = !1, s = w.clientX, l = w.clientY, T("start", w));
    }
  }
  function y(w) {
    if (Br(w), !u) {
      var _ = w.clientX - s, T = w.clientY - l;
      u = _ * _ + T * T > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    dn(w.view).on("mousemove.drag mouseup.drag", null), vc(w.view, u), Br(w), o.mouse("end", w);
  }
  function $(w, _) {
    if (e.call(this, w, _)) {
      var T = w.changedTouches, E = t.call(this, w, _), N = T.length, H, z;
      for (H = 0; H < N; ++H)
        (z = k(this, E, w, _, T[H].identifier, T[H])) && (Pa(w), z("start", w, T[H]));
    }
  }
  function C(w) {
    var _ = w.changedTouches, T = _.length, E, N;
    for (E = 0; E < T; ++E)
      (N = o[_[E].identifier]) && (Br(w), N("drag", w, _[E]));
  }
  function h(w) {
    var _ = w.changedTouches, T = _.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < T; ++E)
      (N = o[_[E].identifier]) && (Pa(w), N("end", w, _[E]));
  }
  function k(w, _, T, E, N, H) {
    var z = i.copy(), I = mn(H || T, _), D, Y, S;
    if ((S = n.call(w, new Fa("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: N,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), E)) != null)
      return D = S.x - I[0] || 0, Y = S.y - I[1] || 0, function V(x, P, M) {
        var L = I, Z;
        switch (x) {
          case "start":
            o[N] = V, Z = a++;
            break;
          case "end":
            delete o[N], --a;
          // falls through
          case "drag":
            I = mn(M || P, _), Z = a;
            break;
        }
        z.call(
          x,
          w,
          new Fa(x, {
            sourceEvent: P,
            subject: S,
            target: f,
            identifier: N,
            active: Z,
            x: I[0] + D,
            y: I[1] + Y,
            dx: I[0] - L[0],
            dy: I[1] - L[1],
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
var Lo = 0.7, Li = 1 / Lo, qr = "\\s*([+-]?\\d+)\\s*", zo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fg = /^#([0-9a-f]{3,8})$/, Ug = new RegExp(`^rgb\\(${qr},${qr},${qr}\\)$`), Gg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Jg = new RegExp(`^rgba\\(${qr},${qr},${qr},${zo}\\)$`), Qg = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${zo}\\)$`), eh = new RegExp(`^hsl\\(${zo},${Mn},${Mn}\\)$`), th = new RegExp(`^hsla\\(${zo},${Mn},${Mn},${zo}\\)$`), wl = {
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
  return e = (e + "").trim().toLowerCase(), (t = Fg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? $l(t) : n === 3 ? new Xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ug.exec(e)) ? new Xt(t[1], t[2], t[3], 1) : (t = Gg.exec(e)) ? new Xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Jg.exec(e)) ? vi(t[1], t[2], t[3], t[4]) : (t = Qg.exec(e)) ? vi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eh.exec(e)) ? _l(t[1], t[2] / 100, t[3] / 100, 1) : (t = th.exec(e)) ? _l(t[1], t[2] / 100, t[3] / 100, t[4]) : wl.hasOwnProperty(e) ? $l(wl[e]) : e === "transparent" ? new Xt(NaN, NaN, NaN, 0) : null;
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
    return new Xt(_r(this.r), _r(this.g), _r(this.b), zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cl,
  // Deprecated! Use color.formatHex.
  formatHex: Cl,
  formatHex8: ih,
  formatRgb: kl,
  toString: kl
}));
function Cl() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
}
function ih() {
  return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = zi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${_r(this.r)}, ${_r(this.g)}, ${_r(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _r(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cr(e) {
  return e = _r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function _l(e, t, n, r) {
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
      Ta(e >= 240 ? e - 240 : e + 120, o, r),
      Ta(e, o, r),
      Ta(e < 120 ? e + 240 : e - 120, o, r),
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
function Ta(e, t, n) {
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
var Ga = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ma = new RegExp(Ga.source, "g");
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
  var n = Ga.lastIndex = Ma.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ga.exec(e)) && (o = Ma.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Ma.lastIndex;
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
  function i(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      y.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, b = f.length, $; ++y < b; ) d[($ = f[y]).i] = $.x(v);
      return d.join("");
    };
  };
}
var hh = bc(vh, "px, ", "px)", "deg)"), ph = bc(gh, ", ", ")", ")"), mh = 1e-12;
function Tl(e) {
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
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, y = d - l, b = v * v + y * y, $, C;
    if (b < mh)
      C = Math.log(f / u) / t, $ = function(E) {
        return [
          s + E * v,
          l + E * y,
          u * Math.exp(t * E * C)
        ];
      };
    else {
      var h = Math.sqrt(b), k = (f * f - u * u + r * b) / (2 * u * n * h), w = (f * f - u * u - r * b) / (2 * f * n * h), _ = Math.log(Math.sqrt(k * k + 1) - k), T = Math.log(Math.sqrt(w * w + 1) - w);
      C = (T - _) / t, $ = function(E) {
        var N = E * C, H = Tl(_), z = u / (n * h) * (H * wh(t * N + _) - yh(_));
        return [
          s + z * v,
          l + z * y,
          u * H / Tl(t * N + _)
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
var Qr = 0, $o = 0, wo = 0, xc = 1e3, Ai, Co, Ii = 0, Pr = 0, ca = 0, Io = typeof performance == "object" && performance.now ? performance : Date, $c = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Os() {
  return Pr || ($c(xh), Pr = Io.now() + ca);
}
function xh() {
  Pr = 0;
}
function Ri() {
  this._call = this._time = this._next = null;
}
Ri.prototype = Cc.prototype = {
  constructor: Ri,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Os() : +n) + (t == null ? 0 : +t), !this._next && Co !== this && (Co ? Co._next = this : Ai = this, Co = this), this._call = e, this._time = n, Ja();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ja());
  }
};
function Cc(e, t, n) {
  var r = new Ri();
  return r.restart(e, t, n), r;
}
function $h() {
  Os(), ++Qr;
  for (var e = Ai, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Ml() {
  Pr = (Ii = Io.now()) + ca, Qr = $o = 0;
  try {
    $h();
  } finally {
    Qr = 0, kh(), Pr = 0;
  }
}
function Ch() {
  var e = Io.now(), t = e - Ii;
  t > xc && (ca -= t, Ii = e);
}
function kh() {
  for (var e, t = Ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ai = n);
  Co = e, Ja(r);
}
function Ja(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Ml, e - Io.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ii = Io.now(), wo = setInterval(Ch, xc)), Qr = 1, $c(Ml));
  }
}
function Vl(e, t, n) {
  var r = new Ri();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var _h = la("start", "end", "cancel", "interrupt"), Sh = [], kc = 0, Hl = 1, Qa = 2, $i = 3, Nl = 4, es = 5, Ci = 6;
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
    on: _h,
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
  var n = Sn(e, t);
  if (n.state > kc) throw new Error("too late; already scheduled");
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
  r[t] = n, n.timer = Cc(i, 0, n.time);
  function i(u) {
    n.state = Hl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Hl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === $i) return Vl(a);
        v.state === Nl ? (v.state = Ci, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Ci, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Vl(function() {
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
    n.state = Ci, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ki(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Qa && r.state < es, r.state = Ci, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Ph(e) {
  return this.each(function() {
    ki(this, e);
  });
}
function Th(e, t) {
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
function Mh(e, t, n) {
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
function Vh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Th : Mh)(n, e, t));
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
function _c(e, t) {
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
function zh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ah(e, t) {
  var n = ua(e), r = n === "transform" ? ph : _c;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zh : Lh)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? Nh : Hh)(n) : (n.local ? Dh : Oh)(n, r, t));
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
function qh(e, t) {
  return function() {
    Ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Wh(e, t) {
  return t = +t, function() {
    Ds(this, e).delay = t;
  };
}
function jh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qh : Wh)(t, e)) : Sn(this.node(), t).delay;
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
  var r, o, i = np(t) ? Ds : In;
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
  typeof e != "function" && (e = Vs(e));
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
        for (var f = e.call(c, c.__data__, d, l), v, y = Sn(c, n), b = 0, $ = f.length; b < $; ++b)
          (v = f[b]) && da(v, t, n, b, f, y);
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
  var r = (e += "") == "transform" ? hh : _c;
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
function Cp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && $p(o)), t;
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
function _p() {
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
  transition: _p,
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
  textTween: kp,
  remove: ap,
  tween: Vh,
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
var Tp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pp
};
function Mp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vp(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Ec(), (n = Tp).time = Os(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Mp(l, t));
  return new Fn(r, this._parents, e, t);
}
Fo.prototype.interrupt = Ph;
Fo.prototype.transition = Vp;
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
function Va(e) {
  e.stopImmediatePropagation();
}
function bo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Np(e) {
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
function zp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Tc() {
  var e = Np, t = Op, n = zp, r = Dp, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = bh, u = la("start", "zoom", "end"), c, d, f, v = 500, y = 150, b = 0, $ = 10;
  function C(S) {
    S.property("__zoom", Ol).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(S, V, x, P) {
    var M = S.selection ? S.selection() : S;
    M.property("__zoom", Ol), S !== M ? _(S, V, x, P) : M.interrupt().each(function() {
      T(this, arguments).event(P).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, C.scaleBy = function(S, V, x, P) {
    C.scaleTo(S, function() {
      var M = this.__zoom.k, L = typeof V == "function" ? V.apply(this, arguments) : V;
      return M * L;
    }, x, P);
  }, C.scaleTo = function(S, V, x, P) {
    C.transform(S, function() {
      var M = t.apply(this, arguments), L = this.__zoom, Z = x == null ? w(M) : typeof x == "function" ? x.apply(this, arguments) : x, q = L.invert(Z), K = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(k(h(L, K), Z, q), M, a);
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
      var L = t.apply(this, arguments), Z = this.__zoom, q = P == null ? w(L) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(fa.translate(q[0], q[1]).scale(Z.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), L, a);
    }, P, M);
  };
  function h(S, V) {
    return V = Math.max(i[0], Math.min(i[1], V)), V === S.k ? S : new Yn(V, S.x, S.y);
  }
  function k(S, V, x) {
    var P = V[0] - x[0] * S.k, M = V[1] - x[1] * S.k;
    return P === S.x && M === S.y ? S : new Yn(S.k, P, M);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function _(S, V, x, P) {
    S.on("start.zoom", function() {
      T(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var M = this, L = arguments, Z = T(M, L).event(P), q = t.apply(M, L), K = x == null ? w(q) : typeof x == "function" ? x.apply(M, L) : x, se = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), U = M.__zoom, X = typeof V == "function" ? V.apply(M, L) : V, ie = l(U.invert(K).concat(se / U.k), X.invert(K).concat(se / X.k));
      return function(ve) {
        if (ve === 1) ve = X;
        else {
          var me = ie(ve), ue = se / me[2];
          ve = new Yn(ue, K[0] - me[0] * ue, K[1] - me[1] * ue);
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
      var V = dn(this.that).datum();
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
  function N(S, ...V) {
    if (!e.apply(this, arguments)) return;
    var x = T(this, V).event(S), P = this.__zoom, M = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), L = mn(S);
    if (x.wheel)
      (x.mouse[0][0] !== L[0] || x.mouse[0][1] !== L[1]) && (x.mouse[1] = P.invert(x.mouse[0] = L)), clearTimeout(x.wheel);
    else {
      if (P.k === M) return;
      x.mouse = [L, P.invert(L)], ki(this), x.start();
    }
    bo(S), x.wheel = setTimeout(Z, y), x.zoom("mouse", n(k(h(P, M), x.mouse[0], x.mouse[1]), x.extent, a));
    function Z() {
      x.wheel = null, x.end();
    }
  }
  function H(S, ...V) {
    if (f || !e.apply(this, arguments)) return;
    var x = S.currentTarget, P = T(this, V, !0).event(S), M = dn(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", se, !0), L = mn(S, x), Z = S.clientX, q = S.clientY;
    fc(S.view), Va(S), P.mouse = [L, this.__zoom.invert(L)], ki(this), P.start();
    function K(U) {
      if (bo(U), !P.moved) {
        var X = U.clientX - Z, ie = U.clientY - q;
        P.moved = X * X + ie * ie > b;
      }
      P.event(U).zoom("mouse", n(k(P.that.__zoom, P.mouse[0] = mn(U, x), P.mouse[1]), P.extent, a));
    }
    function se(U) {
      M.on("mousemove.zoom mouseup.zoom", null), vc(U.view, P.moved), bo(U), P.event(U).end();
    }
  }
  function z(S, ...V) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, P = mn(S.changedTouches ? S.changedTouches[0] : S, this), M = x.invert(P), L = x.k * (S.shiftKey ? 0.5 : 2), Z = n(k(h(x, L), P, M), t.apply(this, V), a);
      bo(S), s > 0 ? dn(this).transition().duration(s).call(_, Z, P, S) : dn(this).call(C.transform, Z, P, S);
    }
  }
  function I(S, ...V) {
    if (e.apply(this, arguments)) {
      var x = S.touches, P = x.length, M = T(this, V, S.changedTouches.length === P).event(S), L, Z, q, K;
      for (Va(S), Z = 0; Z < P; ++Z)
        q = x[Z], K = mn(q, this), K = [K, this.__zoom.invert(K), q.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== K[2] && (M.touch1 = K, M.taps = 0) : (M.touch0 = K, L = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (M.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, v)), ki(this), M.start());
    }
  }
  function D(S, ...V) {
    if (this.__zooming) {
      var x = T(this, V).event(S), P = S.changedTouches, M = P.length, L, Z, q, K;
      for (bo(S), L = 0; L < M; ++L)
        Z = P[L], q = mn(Z, this), x.touch0 && x.touch0[2] === Z.identifier ? x.touch0[0] = q : x.touch1 && x.touch1[2] === Z.identifier && (x.touch1[0] = q);
      if (Z = x.that.__zoom, x.touch1) {
        var se = x.touch0[0], U = x.touch0[1], X = x.touch1[0], ie = x.touch1[1], ve = (ve = X[0] - se[0]) * ve + (ve = X[1] - se[1]) * ve, me = (me = ie[0] - U[0]) * me + (me = ie[1] - U[1]) * me;
        Z = h(Z, Math.sqrt(ve / me)), q = [(se[0] + X[0]) / 2, (se[1] + X[1]) / 2], K = [(U[0] + ie[0]) / 2, (U[1] + ie[1]) / 2];
      } else if (x.touch0) q = x.touch0[0], K = x.touch0[1];
      else return;
      x.zoom("touch", n(k(Z, q, K), x.extent, a));
    }
  }
  function Y(S, ...V) {
    if (this.__zooming) {
      var x = T(this, V).event(S), P = S.changedTouches, M = P.length, L, Z;
      for (Va(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), L = 0; L < M; ++L)
        Z = P[L], x.touch0 && x.touch0[2] === Z.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === Z.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (Z = mn(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < $)) {
        var q = dn(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : pi(+S), C) : r;
  }, C.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : pi(!!S), C) : e;
  }, C.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : pi(!!S), C) : o;
  }, C.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : pi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), C) : t;
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
}, Zi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Tr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Tr || (Tr = {}));
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
var Wr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Wr || (Wr = {}));
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
}, Mc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Qo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, b = Zo(s, no(u)), $ = (v ?? 0) * (y ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= $ || u.dragging) && l.push(u);
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
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
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
    const f = i.has(d.id), v = !f && d.parentId && a.find((y) => y.id === d.parentId);
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
}, Oc = (e, t) => ga(va(rs(e), rs(t))), Zo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Rl = (e) => Bn(e.width) && Bn(e.height) && Bn(e.x) && Bn(e.y), Bn = (e) => !isNaN(e) && isFinite(e), qp = (e, t) => {
}, As = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Qo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? As(s, a) : s;
}, Dc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Is = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = to(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, qi = () => {
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
function Wp(e, t = { width: 0, height: 0 }, n, r, o) {
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
    case Pe.Left:
      return [t - mi(t - r, i), n];
    case Pe.Right:
      return [t + mi(r - t, i), n];
    case Pe.Top:
      return [t, n - mi(n - o, i)];
    case Pe.Bottom:
      return [t, n + mi(o - n, i)];
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
  }), [d, f, v, y] = Fp({
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
    y
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
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, t0 = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ql = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function n0({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Bl[t], s = Bl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = t0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, b;
  const $ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, k, w, _] = Ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    y = o.x ?? h, b = o.y ?? k;
    const T = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? T : E : v = d === "x" ? E : T;
  } else {
    const T = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? E : T : v = a.y === f ? T : E, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const Y = Math.min(i - 1, i - D);
        a[d] === f ? $[d] = (l[d] > e[d] ? -1 : 1) * Y : C[d] = (u[d] > n[d] ? -1 : 1) * Y;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", Y = a[d] === s[D], S = l[D] > u[D], V = l[D] < u[D];
      (a[d] === 1 && (!Y && S || Y && V) || a[d] !== 1 && (!Y && V || Y && S)) && (v = d === "x" ? T : E);
    }
    const N = { x: l.x + $.x, y: l.y + $.y }, H = { x: u.x + C.x, y: u.y + C.y }, z = Math.max(Math.abs(N.x - v[0].x), Math.abs(H.x - v[0].x)), I = Math.max(Math.abs(N.y - v[0].y), Math.abs(H.y - v[0].y));
    z >= I ? (y = (N.x + H.x) / 2, b = v[0].y) : (y = v[0].x, b = (N.y + H.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], y, b, w, _];
}
function r0(e, t, n, r) {
  const o = Math.min(ql(e, t) / 2, ql(t, n) / 2, r), { x: i, y: a } = t;
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
  const [c, d, f, v, y] = n0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, $, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = r0(c[C - 1], $, c[C + 1], a) : h = `${C === 0 ? "M" : "L"}${$.x} ${$.y}`, b += h, b;
  }, ""), d, f, v, y];
}
function Wl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function o0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Wl(n) || !Wl(r))
    return null;
  const o = n.internals.handleBounds || jl(n.handles), i = r.internals.handleBounds || jl(r.handles), a = Xl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Xl(
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
      const i = Go(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Mr(i, a, yr(o));
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
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = c0(e, l, i, a, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Zc(e, t) {
  return (Bn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function c0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Go(e, n), u = ro(e.extent) ? Mr(l, e.extent, s) : l;
  let c = Mr({ x: i + u.x, y: a + u.y }, r, s);
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? no(l), c = Oc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = yr(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, $ = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = ($ - f.width) * v[0], k = (C - f.height) * v[1];
    (y > 0 || b > 0 || h || k) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + h,
        y: l.position.y - b + k
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((_) => _.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + y,
          y: w.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || y || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: $ + (y ? v[0] * y - h : 0),
        height: C + (b ? v[1] * b - k : 0)
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
    const y = Rs(f.nodeElement), b = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (b || !v.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), C = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Hc(h, y, t.get(v.parentId)) : C && (h = Mr(h, C, y));
      const k = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Zl("source", f.nodeElement, $, c, v.id),
            target: Zl("target", f.nodeElement, $, c, v.id)
          }
        }
      };
      t.set(v.id, k), v.parentId && Bs(k, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no(k, o)
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
  function y({ noDragClassName: $, handleSelector: C, domNode: h, isSelectable: k, nodeId: w, nodeClickDistance: _ = 0 }) {
    f = dn(h);
    function T({ x: z, y: I }, D) {
      const { nodeLookup: Y, nodeExtent: S, snapGrid: V, snapToGrid: x, nodeOrigin: P, onNodeDrag: M, onSelectionDrag: L, onError: Z, updateNodePositions: q } = t();
      i = { x: z, y: I };
      let K = !1, se = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const U = Jo(s);
        se = rs(U);
      }
      for (const [U, X] of s) {
        if (!Y.has(U))
          continue;
        let ie = { x: z - X.distance.x, y: I - X.distance.y };
        x && (ie = As(ie, V));
        let ve = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !X.extent) {
          const { positionAbsolute: Ve } = X.internals, le = Ve.x - se.x + S[0][0], ce = Ve.x + X.measured.width - se.x2 + S[1][0], ze = Ve.y - se.y + S[0][1], Ne = Ve.y + X.measured.height - se.y2 + S[1][1];
          ve = [
            [le, ze],
            [ce, Ne]
          ];
        }
        const { position: me, positionAbsolute: ue } = Bp({
          nodeId: U,
          nextPosition: ie,
          nodeLookup: Y,
          nodeExtent: ve,
          nodeOrigin: P,
          onError: Z
        });
        K = K || X.position.x !== me.x || X.position.y !== me.y, X.position = me, X.internals.positionAbsolute = ue;
      }
      if (K && (q(s, !0), D && (r || M || !w && L))) {
        const [U, X] = Na({
          nodeId: w,
          dragItems: s,
          nodeLookup: Y
        });
        r == null || r(D, s, U, X), M == null || M(D, U, X), w || L == null || L(D, X);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: z, panBy: I, autoPanSpeed: D, autoPanOnNodeDrag: Y } = t();
      if (!Y) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, V] = Nc(u, c, D);
      (S !== 0 || V !== 0) && (i.x = (i.x ?? 0) - S / z[2], i.y = (i.y ?? 0) - V / z[2], await I({ x: S, y: V }) && T(i, null)), a = requestAnimationFrame(E);
    }
    function N(z) {
      var I;
      const { nodeLookup: D, multiSelectionActive: Y, nodesDraggable: S, transform: V, snapGrid: x, snapToGrid: P, selectNodesOnDrag: M, onNodeDragStart: L, onSelectionDragStart: Z, unselectNodesAndEdges: q } = t();
      d = !0, (!M || !k) && !Y && w && ((I = D.get(w)) != null && I.selected || q()), k && M && w && (e == null || e(w));
      const K = Ha(z.sourceEvent, { transform: V, snapGrid: x, snapToGrid: P, containerBounds: c });
      if (i = K, s = h0(D, S, K, w), s.size > 0 && (n || L || !w && Z)) {
        const [se, U] = Na({
          nodeId: w,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(z.sourceEvent, s, se, U), L == null || L(z.sourceEvent, se, U), w || Z == null || Z(z.sourceEvent, U);
      }
    }
    const H = Kg().clickDistance(_).on("start", (z) => {
      const { domNode: I, nodeDragThreshold: D, transform: Y, snapGrid: S, snapToGrid: V } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, D === 0 && N(z), i = Ha(z.sourceEvent, { transform: Y, snapGrid: S, snapToGrid: V, containerBounds: c }), u = jn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: I, transform: D, snapGrid: Y, snapToGrid: S, nodeDragThreshold: V, nodeLookup: x } = t(), P = Ha(z.sourceEvent, { transform: D, snapGrid: Y, snapToGrid: S, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !x.has(w)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, E()), !d) {
          const M = P.xSnapped - (i.x ?? 0), L = P.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + L * L) > V && N(z);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && s && d && (u = jn(z.sourceEvent, c), T(P, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: D, onNodeDragStop: Y, onSelectionDragStop: S } = t();
        if (D(s, !1), o || Y || !w && S) {
          const [V, x] = Na({
            nodeId: w,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, V, x), Y == null || Y(z.sourceEvent, V, x), w || S == null || S(z.sourceEvent, x);
        }
      }
    }).filter((z) => {
      const I = z.target;
      return !z.button && (!$ || !Fl(I, `.${$}`, h)) && (!C || Fl(I, C, h));
    });
    f.call(H);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
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
      const { x: f, y: v } = Yo(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (a = [{ ...d, x: f, y: v }], s = y) : y === s && a.push({ ...d, x: f, y: v }));
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
function qc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Yo(u, d, d.position, !0) } : d;
}
function Wc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function b0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const jc = () => !0;
function x0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: b, onConnectEnd: $, isValidConnection: C = jc, onReconnectEnd: h, updateConnection: k, getTransform: w, getFromHandle: _, autoPanSpeed: T }) {
  const E = jp(e.target);
  let N = 0, H;
  const { x: z, y: I } = jn(e), D = E == null ? void 0 : E.elementFromPoint(z, I), Y = Wc(i, D), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !Y)
    return;
  const V = qc(o, Y, r, l, t);
  if (!V)
    return;
  let x = jn(e, S), P = !1, M = null, L = !1, Z = null;
  function q() {
    if (!c || !S)
      return;
    const [me, ue] = Nc(x, S, T);
    f({ x: me, y: ue }), N = requestAnimationFrame(q);
  }
  const K = {
    ...V,
    nodeId: o,
    type: Y,
    position: V.position
  }, se = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: Yo(se, K, Pe.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: se,
    to: x,
    toHandle: null,
    toPosition: Dl[K.position],
    toNode: null
  };
  k(U);
  let X = U;
  y == null || y(e, { nodeId: o, handleId: r, handleType: Y });
  function ie(me) {
    if (!_() || !K) {
      ve(me);
      return;
    }
    const ue = w();
    x = jn(me, S), H = w0(Qo(x, ue, !1, [1, 1]), n, l, K), P || (q(), P = !0);
    const Ve = Xc(me, {
      handle: H,
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
    Z = Ve.handleDomNode, M = Ve.connection, L = b0(!!H, Ve.isValid);
    const le = {
      // from stays the same
      ...X,
      isValid: L,
      to: H && L ? Dc({ x: H.x, y: H.y }, ue) : x,
      toHandle: Ve.toHandle,
      toPosition: L && Ve.toHandle ? Ve.toHandle.position : Dl[K.position],
      toNode: Ve.toHandle ? l.get(Ve.toHandle.nodeId) : null
    };
    L && H && X.toHandle && le.toHandle && X.toHandle.type === le.toHandle.type && X.toHandle.nodeId === le.toHandle.nodeId && X.toHandle.id === le.toHandle.id && X.to.x === le.to.x && X.to.y === le.to.y || (k(le), X = le);
  }
  function ve(me) {
    (H || Z) && M && L && (b == null || b(M));
    const { inProgress: ue, ...Ve } = X, le = {
      ...Ve,
      toPosition: X.toHandle ? X.toPosition : null
    };
    $ == null || $(me, le), i && (h == null || h(me, le)), v(), cancelAnimationFrame(N), P = !1, L = !1, M = null, Z = null, E.removeEventListener("mousemove", ie), E.removeEventListener("mouseup", ve), E.removeEventListener("touchmove", ie), E.removeEventListener("touchend", ve);
  }
  E.addEventListener("mousemove", ie), E.addEventListener("mouseup", ve), E.addEventListener("touchmove", ie), E.addEventListener("touchend", ve);
}
function Xc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = jc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = jn(e), b = a.elementFromPoint(v, y), $ = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, C = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const h = Wc(void 0, $), k = $.getAttribute("data-nodeid"), w = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), T = $.classList.contains("connectableend");
    if (!k || !h)
      return C;
    const E = {
      source: d ? k : r,
      sourceHandle: d ? w : o,
      target: d ? r : k,
      targetHandle: d ? o : w
    };
    C.connection = E;
    const N = _ && T && (n === Tr.Strict ? d && h === "source" || !d && h === "target" : k !== r || w !== o);
    C.isValid = N && u(E), C.toHandle = qc(k, h, w, c, n, !1);
  }
  return C;
}
const $0 = {
  onPointerDown: x0,
  isValid: Xc
};
function C0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = dn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = (k) => {
      const w = n();
      if (k.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -k.sourceEvent.deltaY * (k.sourceEvent.deltaMode === 1 ? 0.05 : k.sourceEvent.deltaMode ? 1 : 2e-3) * c, T = w[2] * Math.pow(2, _);
      t.scaleTo(T);
    };
    let b = [0, 0];
    const $ = (k) => {
      (k.sourceEvent.type === "mousedown" || k.sourceEvent.type === "touchstart") && (b = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ]);
    }, C = (k) => {
      const w = n();
      if (k.sourceEvent.type !== "mousemove" && k.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ], T = [_[0] - b[0], _[1] - b[1]];
      b = _;
      const E = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), N = {
        x: w[0] - T[0] * E,
        y: w[1] - T[1] * E
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: w[2]
      }, H, s);
    }, h = Tc().on("start", $).on("zoom", d ? C : null).on("zoom.wheel", f ? y : null);
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
const k0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ha = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Oa = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Zr = (e, t) => e.target.closest(`.${t}`), Kc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Fc = (e) => {
  const t = e.ctrlKey && qi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function _0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Zr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const $ = mn(c), C = Fc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, $, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === cr.Vertical ? 0 : c.deltaX * f, y = o === cr.Horizontal ? 0 : c.deltaY * f;
    !qi() && c.shiftKey && o !== cr.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(y / d) * i,
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
function T0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Kc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && k0(e.prevViewport, a.transform))) {
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
function M0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
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
  }, d = e.getBoundingClientRect(), f = Tc().clickDistance(!Bn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = dn(e).call(f);
  k({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Fc);
  function $(D, Y) {
    return v ? new Promise((S) => {
      f == null || f.transform(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: D, noPanClassName: Y, onPaneContextMenu: S, userSelectionActive: V, panOnScroll: x, panOnDrag: P, panOnScrollMode: M, panOnScrollSpeed: L, preventScrolling: Z, zoomOnPinch: q, zoomOnScroll: K, zoomOnDoubleClick: se, zoomActivationKeyPressed: U, lib: X, onTransformChange: ie }) {
    V && !c.isZoomingOrPanning && h();
    const ve = x && !U && !V ? _0({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: M,
      panOnScrollSpeed: L,
      zoomOnPinch: q,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : S0({
      noWheelClassName: D,
      preventScrolling: Z,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", ve, { passive: !1 }), !V) {
      const ue = E0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ue);
      const Ve = P0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ie
      });
      f.on("zoom", Ve);
      const le = T0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: x,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", le);
    }
    const me = M0({
      zoomActivationKeyPressed: U,
      panOnDrag: P,
      zoomOnScroll: K,
      panOnScroll: x,
      zoomOnDoubleClick: se,
      zoomOnPinch: q,
      userSelectionActive: V,
      noPanClassName: Y,
      noWheelClassName: D,
      lib: X
    });
    f.filter(me), se ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function k(D, Y, S) {
    const V = Oa(D), x = f == null ? void 0 : f.constrain()(V, Y, S);
    return x && await $(x), new Promise((P) => P(x));
  }
  async function w(D, Y) {
    const S = Oa(D);
    return await $(S, Y), new Promise((V) => V(S));
  }
  function _(D) {
    if (v) {
      const Y = Oa(D), S = v.property("__zoom");
      (S.k !== D.zoom || S.x !== D.x || S.y !== D.y) && (f == null || f.transform(v, Y, null, { sync: !0 }));
    }
  }
  function T() {
    const D = v ? Pc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function E(D, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function N(D, Y) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(Da(v, Y == null ? void 0 : Y.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D) {
    f == null || f.scaleExtent(D);
  }
  function z(D) {
    f == null || f.translateExtent(D);
  }
  function I(D) {
    const Y = !Bn(D) || D < 0 ? 0 : D;
    f == null || f.clickDistance(Y);
  }
  return {
    update: C,
    destroy: h,
    setViewport: w,
    setViewportConstrained: k,
    getViewport: T,
    scaleTo: E,
    scaleBy: N,
    setScaleExtent: H,
    setTranslateExtent: z,
    syncViewport: _,
    setClickDistance: I
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var H0 = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(se, "$connectable", n), i = () => ee(me, "$connectionRadius", n), a = () => ee(ie, "$domNode", n), s = () => ee(ve, "$nodeLookup", n), l = () => ee(X, "$connectionMode", n), u = () => ee(le, "$lib", n), c = () => ee(Ue, "$autoPanOnConnect", n), d = () => ee(Ae, "$flowId", n), f = () => ee(Ve, "$isValidConnectionStore", n), v = () => ee(ze, "$onedgecreate", n), y = () => ee(fe, "$onConnectAction", n), b = () => ee(Se, "$onConnectStartAction", n), $ = () => ee(Xe, "$onConnectEndAction", n), C = () => ee(ue, "$viewport", n), h = () => ee(vt, "$connection", n), k = () => ee(Ge, "$edges", n), w = () => ee(ae, "$connectionLookup", n), _ = /* @__PURE__ */ re(), T = /* @__PURE__ */ re(), E = /* @__PURE__ */ re(), N = /* @__PURE__ */ re(), H = /* @__PURE__ */ re(), z = /* @__PURE__ */ re(), I = /* @__PURE__ */ re(), D = /* @__PURE__ */ re();
  let Y = m(t, "id", 12, void 0), S = m(t, "type", 12, "source"), V = m(t, "position", 28, () => Pe.Top), x = m(t, "style", 12, void 0), P = m(t, "isValidConnection", 12, void 0), M = m(t, "onconnect", 12, void 0), L = m(t, "ondisconnect", 12, void 0), Z = m(t, "isConnectable", 12, void 0), q = m(t, "class", 12, void 0);
  const K = Sr("svelteflow__node_id"), se = Sr("svelteflow__node_connectable"), U = tt(), {
    connectionMode: X,
    domNode: ie,
    nodeLookup: ve,
    connectionRadius: me,
    viewport: ue,
    isValidConnection: Ve,
    lib: le,
    addEdge: ce,
    onedgecreate: ze,
    panBy: Ne,
    cancelConnection: Ze,
    updateConnection: te,
    autoPanOnConnect: Ue,
    edges: Ge,
    connectionLookup: ae,
    onconnect: fe,
    onconnectstart: Se,
    onconnectend: Xe,
    flowId: Ae,
    connection: vt
  } = U;
  function st(He) {
    const lt = zc(He);
    (lt && He.button === 0 || !lt) && $0.onPointerDown(He, {
      handleId: g(E),
      nodeId: K,
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
      panBy: Ne,
      onConnect: (Ye) => {
        var Re;
        const ut = v() ? v()(Ye) : Ye;
        ut && (ce(ut), (Re = y()) == null || Re(Ye));
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
        (ut = $()) == null || ut(Ye, Re);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = /* @__PURE__ */ re(null), Ie = /* @__PURE__ */ re();
  ye(() => Q(S()), () => {
    G(_, S() === "target");
  }), ye(
    () => (Q(Z()), o()),
    () => {
      G(T, Z() !== void 0 ? Z() : o());
    }
  ), ye(() => Q(Y()), () => {
    G(E, Y() || null);
  }), ye(
    () => (Q(M()), Q(L()), k(), w(), Q(S()), Q(Y())),
    () => {
      (M() || L()) && (k(), G(Ie, w().get(`${K}-${S()}${Y() ? `-${Y()}` : ""}`)));
    }
  ), ye(
    () => (g(ne), g(Ie), Q(L()), Q(M())),
    () => {
      if (g(ne) && !Ap(g(Ie), g(ne))) {
        const He = g(Ie) ?? /* @__PURE__ */ new Map();
        Ll(g(ne), He, L()), Ll(He, g(ne), M());
      }
      G(ne, g(Ie) ?? /* @__PURE__ */ new Map());
    }
  ), ye(() => h(), () => {
    G(N, !!h().fromHandle);
  }), ye(
    () => (h(), Q(S()), g(E)),
    () => {
      var He, lt, Ye;
      G(H, ((He = h().fromHandle) == null ? void 0 : He.nodeId) === K && ((lt = h().fromHandle) == null ? void 0 : lt.type) === S() && ((Ye = h().fromHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), ye(
    () => (h(), Q(S()), g(E)),
    () => {
      var He, lt, Ye;
      G(z, ((He = h().toHandle) == null ? void 0 : He.nodeId) === K && ((lt = h().toHandle) == null ? void 0 : lt.type) === S() && ((Ye = h().toHandle) == null ? void 0 : Ye.id) === g(E));
    }
  ), ye(
    () => (l(), h(), Q(S()), g(E)),
    () => {
      var He, lt, Ye;
      G(I, l() === Tr.Strict ? ((He = h().fromHandle) == null ? void 0 : He.type) !== S() : K !== ((lt = h().fromHandle) == null ? void 0 : lt.nodeId) || g(E) !== ((Ye = h().fromHandle) == null ? void 0 : Ye.id));
    }
  ), ye(() => (g(z), h()), () => {
    G(D, g(z) && h().isValid);
  }), _t(), Be();
  var we = H0();
  xe(we, "data-nodeid", K);
  let Rt;
  var Zt = j(we);
  Mt(Zt, t, "default", {}), W(we), Te(
    (He, lt) => {
      xe(we, "data-handleid", g(E)), xe(we, "data-handlepos", V()), xe(we, "data-id", `${d() ?? ""}-${K ?? ""}-${Y() || ""}-${S() ?? ""}`), Rt = Vt(we, 1, He, null, Rt, lt), xt(we, x());
    },
    [
      () => _n(It([
        "svelte-flow__handle",
        `svelte-flow__handle-${V()}`,
        "nodrag",
        "nopan",
        V(),
        q()
      ])),
      () => ({
        valid: g(D),
        connectingto: g(z),
        connectingfrom: g(H),
        source: !g(_),
        target: g(_),
        connectablestart: g(T),
        connectableend: g(T),
        connectable: g(T),
        connectionindicator: g(T) && (!g(N) || g(I))
      })
    ],
    be
  ), ct("mousedown", we, st), ct("touchstart", we, st), A(e, we);
  var ln = he({
    get id() {
      return Y();
    },
    set id(He) {
      Y(He), p();
    },
    get type() {
      return S();
    },
    set type(He) {
      S(He), p();
    },
    get position() {
      return V();
    },
    set position(He) {
      V(He), p();
    },
    get style() {
      return x();
    },
    set style(He) {
      x(He), p();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(He) {
      P(He), p();
    },
    get onconnect() {
      return M();
    },
    set onconnect(He) {
      M(He), p();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(He) {
      L(He), p();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(He) {
      Z(He), p();
    },
    get class() {
      return q();
    },
    set class(He) {
      q(He), p();
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
var N0 = /* @__PURE__ */ oe("<!> <!>", 1);
function ji(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  Be();
  var a = N0(), s = Ce(a);
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
  }), Te(() => {
    var f;
    return on(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), A(e, a), he({
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
var O0 = /* @__PURE__ */ oe(" <!>", 1);
function Uc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Be(), De();
  var i = O0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Bottom);
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
de(Uc, { data: {}, sourcePosition: {} }, [], [], !0);
var D0 = /* @__PURE__ */ oe(" <!>", 1);
function Gc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), ge(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Be(), De();
  var i = D0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Pe.Top);
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
var L0 = /* @__PURE__ */ oe("<div><!></div>");
function Qc(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$domNode", n), { domNode: i } = tt();
  Be();
  var a = L0(), s = j(a);
  Mt(s, t, "default", {}), W(a), Tt(a, (l, u) => Xi == null ? void 0 : Xi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), he(), r();
}
de(Qc, {}, ["default"], [], !0);
function ed() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = tt();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", eo.error012(s));
      return;
    }
    (l.selectable || F(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var z0 = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function td(e, t) {
  ge(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = ed(), a = Sr("svelteflow__edge_id");
  return Be(), Qc(e, {
    children: (s, l) => {
      var u = z0();
      let c;
      var d = j(u);
      Mt(d, t, "default", {}), W(u), Te(() => c = xt(u, "pointer-events: all;" + n(), c, {
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
de(td, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var A0 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), I0 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function ei(e, t) {
  ge(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Be();
  var y = I0(), b = Ce(y), $ = B(b);
  {
    var C = (w) => {
      var _ = A0();
      xe(_, "stroke-opacity", 0), xe(_, "stroke-width", v), Te(() => xe(_, "d", r())), A(w, _);
    };
    ke($, (w) => {
      v && w(C);
    });
  }
  var h = B($);
  {
    var k = (w) => {
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
        children: (_, T) => {
          De();
          var E = Fe();
          Te(() => on(E, o())), A(_, E);
        },
        $$slots: { default: !0 }
      });
    };
    ke(h, (w) => {
      o() && w(k);
    });
  }
  return Te(
    (w) => {
      xe(b, "id", n()), xe(b, "d", r()), Vt(b, 0, w), xe(b, "marker-start", l()), xe(b, "marker-end", u()), xt(b, c());
    },
    [
      () => _n(It(["svelte-flow__edge-path", f()]))
    ],
    be
  ), A(e, y), he({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), p();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), p();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), p();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), p();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), p();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), p();
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
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(y()), Q(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Ac({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), _t(), Be(), ei(e, {
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
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
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(y()), Q(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), _t(), Be(), ei(e, {
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
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
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(y()), Q(b())),
    () => {
      (($) => (G(r, $[0]), G(o, $[1]), G(i, $[2])))(os({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: b()
      }));
    }
  ), _t(), Be(), ei(e, {
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
      a($), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle($) {
      s($), p();
    },
    get style() {
      return l();
    },
    set style($) {
      l($), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart($) {
      u($), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX($) {
      f($), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY($) {
      v($), p();
    },
    get targetX() {
      return y();
    },
    set targetX($) {
      y($), p();
    },
    get targetY() {
      return b();
    },
    set targetY($) {
      b($), p();
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
  const r = /* @__PURE__ */ re(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ re();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), $ = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return ye(
    () => (g(r), g(o), g(i), Q(f()), Q(v()), Q(b()), Q($()), Q(y()), Q(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Wi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: y(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), _t(), Be(), ei(e, {
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
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
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
  }, y = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, q0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
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
}, W0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Zi;
  Rc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = Jo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Is(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: $e(null),
    nodes: B0(e, s, l, d, f),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(c),
    visibleNodes: un([]),
    edges: q0(t, u, c),
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
    connectionMode: $e(Tr.Strict),
    domNode: $e(null),
    connection: un(ts),
    connectionLineType: $e(Wr.Bezier),
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
    onerror: $e(qp),
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
    return n ? Mc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const pa = Symbol();
function sd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = W0({
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
      ...id,
      ...x
    });
  }
  function u(x) {
    s.edgeTypes.set({
      ...ad,
      ...x
    });
  }
  function c(x) {
    const P = F(s.edges);
    s.edges.set(e0(x, P));
  }
  const d = (x, P = !1) => {
    var M;
    const L = F(s.nodeLookup);
    for (const [Z, q] of x) {
      const K = (M = L.get(Z)) == null ? void 0 : M.internals.userNode;
      K && (K.position = q.position, K.dragging = P);
    }
    s.nodes.update((Z) => Z);
  };
  function f(x) {
    var P, M, L;
    const Z = F(s.nodeLookup), q = F(s.parentLookup), { changes: K, updatedInternals: se } = f0(x, Z, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (se) {
      if (l0(Z, q, { nodeOrigin: i, nodeExtent: a }), !F(s.fitViewOnInitDone) && F(s.fitViewOnInit)) {
        const U = F(s.fitViewOptions), X = y({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const U of K) {
        const X = (P = Z.get(U.id)) == null ? void 0 : P.internals.userNode;
        if (X)
          switch (U.type) {
            case "dimensions": {
              const ie = { ...X.measured, ...U.dimensions };
              U.setAttributes && (X.width = ((M = U.dimensions) == null ? void 0 : M.width) ?? X.width, X.height = ((L = U.dimensions) == null ? void 0 : L.height) ?? X.height), X.measured = ie;
              break;
            }
            case "position":
              X.position = U.position ?? X.position;
              break;
          }
      }
      s.nodes.update((U) => U), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(x) {
    const P = F(s.panZoom), M = F(s.domNode);
    if (!P || !M)
      return Promise.resolve(!1);
    const { width: L, height: Z } = Rs(M), q = zl(F(s.nodeLookup), x);
    return Al({
      nodes: q,
      width: L,
      height: Z,
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: P
    }, x);
  }
  function y(x) {
    const P = F(s.panZoom);
    if (!P)
      return !1;
    const M = zl(F(s.nodeLookup), x);
    return Al({
      nodes: M,
      width: F(s.width),
      height: F(s.height),
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: P
    }, x), M.size > 0;
  }
  function b(x, P) {
    const M = F(s.panZoom);
    return M ? M.scaleBy(x, P) : Promise.resolve(!1);
  }
  function $(x) {
    return b(1.2, x);
  }
  function C(x) {
    return b(1 / 1.2, x);
  }
  function h(x) {
    const P = F(s.panZoom);
    P && (P.setScaleExtent([x, F(s.maxZoom)]), s.minZoom.set(x));
  }
  function k(x) {
    const P = F(s.panZoom);
    P && (P.setScaleExtent([F(s.minZoom), x]), s.maxZoom.set(x));
  }
  function w(x) {
    const P = F(s.panZoom);
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
    (P = F(s.panZoom)) == null || P.setClickDistance(x);
  }
  function E(x) {
    _((x == null ? void 0 : x.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), _((x == null ? void 0 : x.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (x) => {
    var P;
    if (x) {
      const M = F(s.nodes), L = F(s.edges), Z = M.filter((U) => U.selected), q = L.filter((U) => U.selected), { nodes: K, edges: se } = await Vc({
        nodesToRemove: Z,
        edgesToRemove: q,
        nodes: M,
        edges: L,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (K.length || se.length) && (s.nodes.update((U) => U.filter((X) => !K.some((ie) => ie.id === X.id))), s.edges.update((U) => U.filter((X) => !se.some((ie) => ie.id === X.id))), (P = F(s.ondelete)) == null || P({
        nodes: K,
        edges: se
      }));
    }
  });
  function N(x) {
    const P = F(s.multiselectionKeyPressed);
    s.nodes.update((M) => M.map((L) => {
      const Z = x.includes(L.id), q = P && L.selected || Z;
      return L.selected = q, L;
    })), P || s.edges.update((M) => M.map((L) => (L.selected = !1, L)));
  }
  function H(x) {
    const P = F(s.multiselectionKeyPressed);
    s.edges.update((M) => M.map((L) => {
      const Z = x.includes(L.id), q = P && L.selected || Z;
      return L.selected = q, L;
    })), P || s.nodes.update((M) => M.map((L) => (L.selected = !1, L)));
  }
  function z(x) {
    var P;
    const M = (P = F(s.nodes)) == null ? void 0 : P.find((L) => L.id === x);
    if (!M) {
      console.warn("012", eo.error012(x));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), M.selected ? M.selected && F(s.multiselectionKeyPressed) && E({ nodes: [M], edges: [] }) : N([x]);
  }
  function I(x) {
    const P = F(s.viewport);
    return v0({
      delta: x,
      panZoom: F(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const D = $e(ts), Y = (x) => {
    D.set({ ...x });
  };
  function S() {
    D.set(ts);
  }
  function V() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: j0(s),
    visibleNodes: X0(s),
    connection: ur([D, s.viewport], ([x, P]) => x.inProgress ? {
      ...x,
      to: Qo(x.to, [P.x, P.y, P.zoom])
    } : { ...x }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([x, P, M]) => i0(x, { defaultColor: P, id: M })),
    initialized: (() => {
      let x = !1;
      const P = F(s.nodes).length, M = F(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([L, Z, q]) => x || (P === 0 ? x = q : M === 0 ? x = q && L : x = q && L && Z, x));
    })(),
    // actions
    syncNodeStores: (x) => R0(s.nodes, x),
    syncEdgeStores: (x) => Z0(s.edges, x),
    syncViewport: (x) => Y0(s.panZoom, s.viewport, x),
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
    setTranslateExtent: w,
    setPaneClickDistance: T,
    unselectNodesAndEdges: E,
    addSelectedNodes: N,
    addSelectedEdges: H,
    handleNodeSelection: z,
    panBy: I,
    updateConnection: Y,
    cancelConnection: S,
    reset: V
  };
}
function tt() {
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
var F0 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const U0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ld(e, t) {
  ge(t, !1), at(e, U0);
  const [n, r] = ft(), o = () => ee(M, "$panActivationKeyPressed", n), i = () => ee(Y, "$minZoom", n), a = () => ee(S, "$maxZoom", n), s = () => ee(L, "$zoomActivationKeyPressed", n), l = () => ee(D, "$selectionRect", n), u = () => ee(x, "$translateExtent", n), c = () => ee(P, "$lib", n), d = /* @__PURE__ */ re(), f = /* @__PURE__ */ re(), v = /* @__PURE__ */ re();
  let y = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), $ = m(t, "onMove", 12, void 0), C = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), k = m(t, "preventScrolling", 12), w = m(t, "zoomOnScroll", 12), _ = m(t, "zoomOnDoubleClick", 12), T = m(t, "zoomOnPinch", 12), E = m(t, "panOnDrag", 12), N = m(t, "panOnScroll", 12), H = m(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: I,
    selectionRect: D,
    minZoom: Y,
    maxZoom: S,
    dragging: V,
    translateExtent: x,
    lib: P,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: L,
    viewportInitialized: Z
  } = tt(), q = (X) => z.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  hn(() => {
    Oi(Z, !0);
  }), ye(() => Q(y()), () => {
    G(d, y() || { x: 0, y: 0, zoom: 1 });
  }), ye(
    () => (o(), Q(E())),
    () => {
      G(f, o() || E());
    }
  ), ye(
    () => (o(), Q(N())),
    () => {
      G(v, o() || N());
    }
  ), _t(), Be();
  var K = F0(), se = j(K);
  Mt(se, t, "default", {}), W(K), Tt(K, (X, ie) => Jl == null ? void 0 : Jl(X, ie), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: V,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: $(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: T(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof k() == "boolean" ? k() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: H(),
    onTransformChange: q
  })), A(e, K);
  var U = he({
    get initialViewport() {
      return y();
    },
    set initialViewport(X) {
      y(X), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), p();
    },
    get onMove() {
      return $();
    },
    set onMove(X) {
      $(X), p();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(X) {
      C(X), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), p();
    },
    get preventScrolling() {
      return k();
    },
    set preventScrolling(X) {
      k(X), p();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), p();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(X) {
      _(X), p();
    },
    get zoomOnPinch() {
      return T();
    },
    set zoomOnPinch(X) {
      T(X), p();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(X) {
      E(X), p();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(X) {
      N(X), p();
    },
    get paneClickDistance() {
      return H();
    },
    set paneClickDistance(X) {
      H(X), p();
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
var G0 = /* @__PURE__ */ oe("<div><!></div>");
const J0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function ud(e, t) {
  ge(t, !1), at(e, J0);
  const [n, r] = ft(), o = () => ee(S, "$panActivationKeyPressed", n), i = () => ee(D, "$selectionKeyPressed", n), a = () => ee(z, "$selectionRect", n), s = () => ee(H, "$elementsSelectable", n), l = () => ee(I, "$selectionRectMode", n), u = () => ee(T, "$edges", n), c = () => ee(_, "$nodeLookup", n), d = () => ee(E, "$viewport", n), f = () => ee(Y, "$selectionMode", n), v = () => ee(N, "$dragging", n), y = /* @__PURE__ */ re(), b = /* @__PURE__ */ re(), $ = /* @__PURE__ */ re();
  let C = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const k = sa(), {
    nodes: w,
    nodeLookup: _,
    edges: T,
    viewport: E,
    dragging: N,
    elementsSelectable: H,
    selectionRect: z,
    selectionRectMode: I,
    selectionKeyPressed: D,
    selectionMode: Y,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: V
  } = tt();
  let x = /* @__PURE__ */ re(), P = null, M = [], L = !1;
  function Z(le) {
    if (L) {
      L = !1;
      return;
    }
    k("paneclick", { event: le }), V(), I.set(null);
  }
  function q(le) {
    var ce, ze;
    if (P = g(x).getBoundingClientRect(), !H || !g(b) || le.button !== 0 || le.target !== g(x) || !P)
      return;
    (ze = (ce = le.target) == null ? void 0 : ce.setPointerCapture) == null || ze.call(ce, le.pointerId);
    const { x: Ne, y: Ze } = jn(le, P);
    V(), z.set({
      width: 0,
      height: 0,
      startX: Ne,
      startY: Ze,
      x: Ne,
      y: Ze
    });
  }
  function K(le) {
    if (!g(b) || !P || !a())
      return;
    L = !0;
    const ce = jn(le, P), ze = a().startX ?? 0, Ne = a().startY ?? 0, Ze = {
      ...a(),
      x: ce.x < ze ? ce.x : ze,
      y: ce.y < Ne ? ce.y : Ne,
      width: Math.abs(ce.x - ze),
      height: Math.abs(ce.y - Ne)
    }, te = M.map((fe) => fe.id), Ue = ns(M, u()).map((fe) => fe.id);
    M = Mc(
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
    const Ge = ns(M, u()).map((fe) => fe.id), ae = M.map((fe) => fe.id);
    (te.length !== ae.length || ae.some((fe) => !te.includes(fe))) && w.update((fe) => fe.map(eu(ae))), (Ue.length !== Ge.length || Ge.some((fe) => !Ue.includes(fe))) && T.update((fe) => fe.map(eu(Ge))), I.set("user"), z.set(Ze);
  }
  function se(le) {
    var ce, ze;
    le.button === 0 && ((ze = (ce = le.target) == null ? void 0 : ce.releasePointerCapture) == null || ze.call(ce, le.pointerId), !g(b) && l() === "user" && le.target === g(x) && (Z == null || Z(le)), z.set(null), M.length > 0 && Oi(I, "nodes"), i() && (L = !1));
  }
  const U = (le) => {
    var ce;
    if (Array.isArray(g(y)) && (ce = g(y)) != null && ce.includes(2)) {
      le.preventDefault();
      return;
    }
    k("panecontextmenu", { event: le });
  };
  ye(
    () => (o(), Q(C())),
    () => {
      G(y, o() || C());
    }
  ), ye(
    () => (i(), a(), Q(h()), g(y)),
    () => {
      G(b, i() || a() || h() && g(y) !== !0);
    }
  ), ye(
    () => (s(), g(b), l()),
    () => {
      G($, s() && (g(b) || l() === "user"));
    }
  ), _t(), Be();
  var X = G0(), ie = /* @__PURE__ */ Oe(() => g($) ? void 0 : Ql(Z, g(x))), ve = /* @__PURE__ */ Oe(() => Ql(U, g(x)));
  let me;
  var ue = j(X);
  Mt(ue, t, "default", {}), W(X), Ln(X, (le) => G(x, le), () => g(x)), Te(
    (le) => me = Vt(X, 1, "svelte-flow__pane svelte-1esy7hx", null, me, le),
    [
      () => ({
        draggable: C() === !0 || Array.isArray(C()) && C().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    be
  ), ct("click", X, function(...le) {
    var ce;
    (ce = g(ie)) == null || ce.apply(this, le);
  }), ct("pointerdown", X, function(...le) {
    var ce;
    (ce = g($) ? q : void 0) == null || ce.apply(this, le);
  }), ct("pointermove", X, function(...le) {
    var ce;
    (ce = g($) ? K : void 0) == null || ce.apply(this, le);
  }), ct("pointerup", X, function(...le) {
    var ce;
    (ce = g($) ? se : void 0) == null || ce.apply(this, le);
  }), ct("contextmenu", X, function(...le) {
    var ce;
    (ce = g(ve)) == null || ce.apply(this, le);
  }), A(e, X);
  var Ve = he({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(le) {
      C(le), p();
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
de(ud, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Q0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const em = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function cd(e, t) {
  ge(t, !1), at(e, em);
  const [n, r] = ft(), o = () => ee(i, "$viewport", n), { viewport: i } = tt();
  Be();
  var a = Q0(), s = j(a);
  Mt(s, t, "default", {}), W(a), Te(() => xt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), he(), r();
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
var nm = /* @__PURE__ */ oe("<div><!></div>");
function dd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(ve, "$nodeTypes", n), i = () => ee(ce, "$elementsSelectable", n), a = () => ee(ze, "$nodesDraggable", n), s = () => ee(Ue, "$connectableStore", n), l = /* @__PURE__ */ re(void 0, !0), u = /* @__PURE__ */ re(void 0, !0), c = /* @__PURE__ */ re(void 0, !0), d = /* @__PURE__ */ re(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), y = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), $ = m(t, "draggable", 13, void 0), C = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), k = m(t, "deletable", 13, !0), w = m(t, "hidden", 13, !1), _ = m(t, "dragging", 13, !1), T = m(t, "resizeObserver", 13, null), E = m(t, "style", 13, void 0), N = m(t, "type", 13, "default"), H = m(t, "isParent", 13, !1), z = m(t, "positionX", 13), I = m(t, "positionY", 13), D = m(t, "sourcePosition", 13, void 0), Y = m(t, "targetPosition", 13, void 0), S = m(t, "zIndex", 13), V = m(t, "measuredWidth", 13, void 0), x = m(t, "measuredHeight", 13, void 0), P = m(t, "initialWidth", 13, void 0), M = m(t, "initialHeight", 13, void 0), L = m(t, "width", 13, void 0), Z = m(t, "height", 13, void 0), q = m(t, "dragHandle", 13, void 0), K = m(t, "initialized", 13, !1), se = m(t, "parentId", 13, void 0), U = m(t, "nodeClickDistance", 13, void 0), X = m(t, "class", 13, "");
  const ie = tt(), {
    nodeTypes: ve,
    nodeDragThreshold: me,
    selectNodesOnDrag: ue,
    handleNodeSelection: Ve,
    updateNodeInternals: le,
    elementsSelectable: ce,
    nodesDraggable: ze
  } = ie;
  let Ne = /* @__PURE__ */ re(void 0, !0), Ze = /* @__PURE__ */ re(null, !0);
  const te = sa(), Ue = $e(h());
  let Ge = /* @__PURE__ */ re(void 0, !0), ae = /* @__PURE__ */ re(void 0, !0), fe = /* @__PURE__ */ re(void 0, !0);
  Gr("svelteflow__node_id", v()), Gr("svelteflow__node_connectable", Ue), Ts(() => {
    var ne;
    g(Ze) && ((ne = T()) == null || ne.unobserve(g(Ze)));
  });
  function Se(ne) {
    C() && (!F(ue) || !$() || F(me) > 0) && Ve(v()), te("nodeclick", { node: f().internals.userNode, event: ne });
  }
  ye(() => Q(N()), () => {
    G(l, N() || "default");
  }), ye(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), ye(
    () => (o(), g(l), ji),
    () => {
      G(c, o()[g(l)] || ji);
    }
  ), ye(
    () => (g(u), Q(N())),
    () => {
      g(u) || console.warn("003", eo.error003(N()));
    }
  ), ye(
    () => (Q(L()), Q(Z()), Q(P()), Q(M()), Q(V()), Q(x())),
    () => {
      G(d, tm({
        width: L(),
        height: Z(),
        initialWidth: P(),
        initialHeight: M(),
        measuredWidth: V(),
        measuredHeight: x()
      }));
    }
  ), ye(() => Q(h()), () => {
    Ue.set(!!h());
  }), ye(
    () => (g(Ge), g(l), g(ae), Q(D()), g(fe), Q(Y()), Q(v()), g(Ne)),
    () => {
      (g(Ge) && g(l) !== g(Ge) || g(ae) && D() !== g(ae) || g(fe) && Y() !== g(fe)) && requestAnimationFrame(() => le(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Ne),
            force: !0
          }
        ]
      ]))), G(Ge, g(l)), G(ae, D()), G(fe, Y());
    }
  ), ye(
    () => (Q(T()), g(Ne), g(Ze), Q(K())),
    () => {
      T() && (g(Ne) !== g(Ze) || !K()) && (g(Ze) && T().unobserve(g(Ze)), g(Ne) && T().observe(g(Ne)), G(Ze, g(Ne)));
    }
  ), _t(), Be(!0);
  var Xe = dt(), Ae = Ce(Xe);
  {
    var vt = (ne) => {
      var Ie = nm();
      let we, Rt;
      var Zt = j(Ie);
      const ln = /* @__PURE__ */ be(() => b() ?? !1), He = /* @__PURE__ */ be(() => C() ?? i() ?? !0), lt = /* @__PURE__ */ be(() => k() ?? !0), Ye = /* @__PURE__ */ be(() => $() ?? a() ?? !0);
      Xu(Zt, () => g(c), (Re, ut) => {
        ut(Re, {
          get data() {
            return y();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(ln);
          },
          get selectable() {
            return g(He);
          },
          get deletable() {
            return g(lt);
          },
          get sourcePosition() {
            return D();
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
            return q();
          },
          get parentId() {
            return se();
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
            return L();
          },
          get height() {
            return Z();
          }
        });
      }), W(Ie), Tt(Ie, (Re, ut) => Fi == null ? void 0 : Fi(Re, ut), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: q(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: Ve,
        onDrag: (Re, ut, Jt, Et) => {
          te("nodedrag", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStart: (Re, ut, Jt, Et) => {
          te("nodedragstart", { event: Re, targetNode: Jt, nodes: Et });
        },
        onDragStop: (Re, ut, Jt, Et) => {
          te("nodedragstop", { event: Re, targetNode: Jt, nodes: Et });
        },
        store: ie
      })), Ln(Ie, (Re) => G(Ne, Re), () => g(Ne)), en(() => ct("click", Ie, Se)), en(() => ct("mouseenter", Ie, (Re) => te("nodemouseenter", { node: f(), event: Re }))), en(() => ct("mouseleave", Ie, (Re) => te("nodemouseleave", { node: f(), event: Re }))), en(() => ct("mousemove", Ie, (Re) => te("nodemousemove", { node: f(), event: Re }))), en(() => ct("contextmenu", Ie, (Re) => te("nodecontextmenu", { node: f(), event: Re }))), Te(
        (Re, ut) => {
          xe(Ie, "data-id", v()), we = Vt(Ie, 1, Re, null, we, ut), Rt = xt(Ie, `${E() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Rt, {
            "z-index": S(),
            transform: `translate(${z() ?? ""}px, ${I() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => _n(It([
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
            parent: H()
          })
        ],
        be
      ), A(ne, Ie);
    };
    ke(Ae, (ne) => {
      w() || ne(vt);
    });
  }
  A(e, Xe);
  var st = he({
    get node() {
      return f();
    },
    set node(ne) {
      f(ne), p();
    },
    get id() {
      return v();
    },
    set id(ne) {
      v(ne), p();
    },
    get data() {
      return y();
    },
    set data(ne) {
      y(ne), p();
    },
    get selected() {
      return b();
    },
    set selected(ne) {
      b(ne), p();
    },
    get draggable() {
      return $();
    },
    set draggable(ne) {
      $(ne), p();
    },
    get selectable() {
      return C();
    },
    set selectable(ne) {
      C(ne), p();
    },
    get connectable() {
      return h();
    },
    set connectable(ne) {
      h(ne), p();
    },
    get deletable() {
      return k();
    },
    set deletable(ne) {
      k(ne), p();
    },
    get hidden() {
      return w();
    },
    set hidden(ne) {
      w(ne), p();
    },
    get dragging() {
      return _();
    },
    set dragging(ne) {
      _(ne), p();
    },
    get resizeObserver() {
      return T();
    },
    set resizeObserver(ne) {
      T(ne), p();
    },
    get style() {
      return E();
    },
    set style(ne) {
      E(ne), p();
    },
    get type() {
      return N();
    },
    set type(ne) {
      N(ne), p();
    },
    get isParent() {
      return H();
    },
    set isParent(ne) {
      H(ne), p();
    },
    get positionX() {
      return z();
    },
    set positionX(ne) {
      z(ne), p();
    },
    get positionY() {
      return I();
    },
    set positionY(ne) {
      I(ne), p();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(ne) {
      D(ne), p();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(ne) {
      Y(ne), p();
    },
    get zIndex() {
      return S();
    },
    set zIndex(ne) {
      S(ne), p();
    },
    get measuredWidth() {
      return V();
    },
    set measuredWidth(ne) {
      V(ne), p();
    },
    get measuredHeight() {
      return x();
    },
    set measuredHeight(ne) {
      x(ne), p();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(ne) {
      P(ne), p();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(ne) {
      M(ne), p();
    },
    get width() {
      return L();
    },
    set width(ne) {
      L(ne), p();
    },
    get height() {
      return Z();
    },
    set height(ne) {
      Z(ne), p();
    },
    get dragHandle() {
      return q();
    },
    set dragHandle(ne) {
      q(ne), p();
    },
    get initialized() {
      return K();
    },
    set initialized(ne) {
      K(ne), p();
    },
    get parentId() {
      return se();
    },
    set parentId(ne) {
      se(ne), p();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(ne) {
      U(ne), p();
    },
    get class() {
      return X();
    },
    set class(ne) {
      X(ne), p();
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
var rm = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const om = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function fd(e, t) {
  ge(t, !1), at(e, om);
  const [n, r] = ft(), o = () => ee(c, "$visibleNodes", n), i = () => ee(d, "$nodesDraggable", n), a = () => ee(v, "$elementsSelectable", n), s = () => ee(f, "$nodesConnectable", n), l = () => ee(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: b
  } = tt(), $ = typeof ResizeObserver > "u" ? null : new ResizeObserver((k) => {
    const w = /* @__PURE__ */ new Map();
    k.forEach((_) => {
      const T = _.target.getAttribute("data-id");
      w.set(T, { id: T, nodeElement: _.target, force: !0 });
    }), y(w);
  });
  Ts(() => {
    $ == null || $.disconnect();
  }), Be();
  var C = rm();
  Ft(C, 5, o, (k) => k.id, (k, w) => {
    const _ = /* @__PURE__ */ be(() => !!g(w).selected), T = /* @__PURE__ */ be(() => !!g(w).hidden), E = /* @__PURE__ */ be(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), N = /* @__PURE__ */ be(() => !!(g(w).selectable || a() && typeof g(w).selectable > "u")), H = /* @__PURE__ */ be(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), z = /* @__PURE__ */ be(() => g(w).deletable ?? !0), I = /* @__PURE__ */ be(() => l().has(g(w).id)), D = /* @__PURE__ */ be(() => g(w).type ?? "default"), Y = /* @__PURE__ */ be(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ be(() => Lc(g(w)));
    dd(k, {
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
        return g(_);
      },
      get hidden() {
        return g(T);
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
        return g(D);
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
      resizeObserver: $,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(V) {
          Ke.call(this, t, V);
        },
        nodemouseenter(V) {
          Ke.call(this, t, V);
        },
        nodemousemove(V) {
          Ke.call(this, t, V);
        },
        nodemouseleave(V) {
          Ke.call(this, t, V);
        },
        nodedrag(V) {
          Ke.call(this, t, V);
        },
        nodedragstart(V) {
          Ke.call(this, t, V);
        },
        nodedragstop(V) {
          Ke.call(this, t, V);
        },
        nodecontextmenu(V) {
          Ke.call(this, t, V);
        }
      }
    });
  }), W(C), A(e, C);
  var h = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(k) {
      u(k), p();
    }
  });
  return r(), h;
}
de(fd, { nodeClickDistance: {} }, [], [], !0);
var im = /* @__PURE__ */ _e('<svg><g role="img"><!></g></svg>');
function vd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(X, "$edgeTypes", n), i = () => ee(ie, "$flowId", n), a = () => ee(ve, "$elementsSelectable", n), s = () => ee(U, "$edgeLookup", n), l = /* @__PURE__ */ re(void 0, !0), u = /* @__PURE__ */ re(void 0, !0), c = /* @__PURE__ */ re(void 0, !0), d = /* @__PURE__ */ re(void 0, !0), f = /* @__PURE__ */ re(void 0, !0);
  let v = m(t, "id", 13), y = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), $ = m(t, "target", 13, ""), C = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), k = m(t, "zIndex", 13, void 0), w = m(t, "animated", 13, !1), _ = m(t, "selected", 13, !1), T = m(t, "selectable", 13, void 0), E = m(t, "deletable", 13, void 0), N = m(t, "hidden", 13, !1), H = m(t, "label", 13, void 0), z = m(t, "labelStyle", 13, void 0), I = m(t, "markerStart", 13, void 0), D = m(t, "markerEnd", 13, void 0), Y = m(t, "sourceHandle", 13, void 0), S = m(t, "targetHandle", 13, void 0), V = m(t, "sourceX", 13), x = m(t, "sourceY", 13), P = m(t, "targetX", 13), M = m(t, "targetY", 13), L = m(t, "sourcePosition", 13), Z = m(t, "targetPosition", 13), q = m(t, "ariaLabel", 13, void 0), K = m(t, "interactionWidth", 13, void 0), se = m(t, "class", 13, "");
  Gr("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: X,
    flowId: ie,
    elementsSelectable: ve
  } = tt(), me = sa(), ue = ed();
  function Ve(te) {
    const Ue = s().get(v());
    Ue && (ue(v()), me("edgeclick", { event: te, edge: Ue }));
  }
  function le(te, Ue) {
    const Ge = s().get(v());
    Ge && me(Ue, { event: te, edge: Ge });
  }
  ye(() => Q(y()), () => {
    G(l, y() || "default");
  }), ye(
    () => (o(), g(l), Ki),
    () => {
      G(u, o()[g(l)] || Ki);
    }
  ), ye(
    () => (Q(I()), i()),
    () => {
      G(c, I() ? `url('#${is(I(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(D()), i()),
    () => {
      G(d, D() ? `url('#${is(D(), i())}')` : void 0);
    }
  ), ye(
    () => (Q(T()), a()),
    () => {
      G(f, T() ?? a());
    }
  ), _t(), Be(!0);
  var ce = dt(), ze = Ce(ce);
  {
    var Ne = (te) => {
      var Ue = im();
      let Ge;
      var ae = j(Ue);
      let fe;
      var Se = j(ae);
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
            return L();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return w();
          },
          get selected() {
            return _();
          },
          get label() {
            return H();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return C();
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
      }), W(ae), W(Ue), Te(
        (Ae, vt) => {
          Ge = xt(Ue, "", Ge, { "z-index": k() }), fe = Vt(ae, 0, Ae, null, fe, vt), xe(ae, "data-id", v()), xe(ae, "aria-label", q() === null ? void 0 : q() ? q() : `Edge from ${b()} to ${$()}`);
        },
        [
          () => _n(It(["svelte-flow__edge", se()])),
          () => ({
            animated: w(),
            selected: _(),
            selectable: g(f)
          })
        ],
        be
      ), ct("click", ae, Ve), ct("contextmenu", ae, (Ae) => {
        le(Ae, "edgecontextmenu");
      }), ct("mouseenter", ae, (Ae) => {
        le(Ae, "edgemouseenter");
      }), ct("mouseleave", ae, (Ae) => {
        le(Ae, "edgemouseleave");
      }), A(te, Ue);
    };
    ke(ze, (te) => {
      N() || te(Ne);
    });
  }
  A(e, ce);
  var Ze = he({
    get id() {
      return v();
    },
    set id(te) {
      v(te), p();
    },
    get type() {
      return y();
    },
    set type(te) {
      y(te), p();
    },
    get source() {
      return b();
    },
    set source(te) {
      b(te), p();
    },
    get target() {
      return $();
    },
    set target(te) {
      $(te), p();
    },
    get data() {
      return C();
    },
    set data(te) {
      C(te), p();
    },
    get style() {
      return h();
    },
    set style(te) {
      h(te), p();
    },
    get zIndex() {
      return k();
    },
    set zIndex(te) {
      k(te), p();
    },
    get animated() {
      return w();
    },
    set animated(te) {
      w(te), p();
    },
    get selected() {
      return _();
    },
    set selected(te) {
      _(te), p();
    },
    get selectable() {
      return T();
    },
    set selectable(te) {
      T(te), p();
    },
    get deletable() {
      return E();
    },
    set deletable(te) {
      E(te), p();
    },
    get hidden() {
      return N();
    },
    set hidden(te) {
      N(te), p();
    },
    get label() {
      return H();
    },
    set label(te) {
      H(te), p();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(te) {
      z(te), p();
    },
    get markerStart() {
      return I();
    },
    set markerStart(te) {
      I(te), p();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(te) {
      D(te), p();
    },
    get sourceHandle() {
      return Y();
    },
    set sourceHandle(te) {
      Y(te), p();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(te) {
      S(te), p();
    },
    get sourceX() {
      return V();
    },
    set sourceX(te) {
      V(te), p();
    },
    get sourceY() {
      return x();
    },
    set sourceY(te) {
      x(te), p();
    },
    get targetX() {
      return P();
    },
    set targetX(te) {
      P(te), p();
    },
    get targetY() {
      return M();
    },
    set targetY(te) {
      M(te), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(te) {
      L(te), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(te) {
      Z(te), p();
    },
    get ariaLabel() {
      return q();
    },
    set ariaLabel(te) {
      q(te), p();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(te) {
      K(te), p();
    },
    get class() {
      return se();
    },
    set class(te) {
      se(te), p();
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
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return hn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Be(), he({
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
de(gd, { onMount: {}, onDestroy: {} }, [], [], !0);
var am = /* @__PURE__ */ _e("<defs></defs>");
function hd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(i, "$markers", n), { markers: i } = tt();
  Be();
  var a = am();
  Ft(a, 5, o, (s) => s.id, (s, l) => {
    pd(s, bt(() => g(l)));
  }), W(a), A(e, a), he(), r();
}
de(hd, {}, [], [], !0);
var sm = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), lm = /* @__PURE__ */ _e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), um = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function pd(e, t) {
  ge(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Be();
  var c = um(), d = j(c);
  {
    var f = (y) => {
      var b = sm();
      Te(() => {
        xe(b, "stroke", l()), xe(b, "stroke-width", u());
      }), A(y, b);
    }, v = (y, b) => {
      {
        var $ = (C) => {
          var h = lm();
          Te(() => {
            xe(h, "stroke", l()), xe(h, "stroke-width", u()), xe(h, "fill", l());
          }), A(C, h);
        };
        ke(
          y,
          (C) => {
            r() === Ro.ArrowClosed && C($);
          },
          b
        );
      }
    };
    ke(d, (y) => {
      r() === Ro.Arrow ? y(f) : y(v, !1);
    });
  }
  return W(c), Te(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${i()}`), xe(c, "markerUnits", a()), xe(c, "orient", s());
  }), A(e, c), he({
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
    set width(y) {
      o(y), p();
    },
    get height() {
      return i();
    },
    set height(y) {
      i(y), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(y) {
      a(y), p();
    },
    get orient() {
      return s();
    },
    set orient(y) {
      s(y), p();
    },
    get color() {
      return l();
    },
    set color(y) {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
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
var cm = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function md(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(s, "$visibleEdges", n), i = () => ee(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = tt();
  hn(() => {
    a() && u(a());
  }), Be();
  var d = cm(), f = j(d), v = j(f);
  hd(v, {}), W(f);
  var y = B(f, 2);
  Ft(y, 1, o, (h) => h.id, (h, k) => {
    const w = /* @__PURE__ */ be(() => g(k).selectable ?? i()), _ = /* @__PURE__ */ be(() => g(k).type || "default");
    vd(h, {
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
        return g(w);
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
          Ke.call(this, t, T);
        },
        edgecontextmenu(T) {
          Ke.call(this, t, T);
        },
        edgemouseenter(T) {
          Ke.call(this, t, T);
        },
        edgemouseleave(T) {
          Ke.call(this, t, T);
        }
      }
    });
  });
  var b = B(y, 2);
  {
    var $ = (h) => {
      gd(h, {
        onMount: () => {
          Oi(l, !0);
        },
        onDestroy: () => {
          Oi(l, !1);
        }
      });
    };
    ke(b, (h) => {
      o().length > 0 && h($);
    });
  }
  W(d), A(e, d);
  var C = he({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
    }
  });
  return r(), C;
}
de(md, { defaultEdgeOptions: {} }, [], [], !0);
var dm = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const fm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function qs(e, t) {
  ge(t, !1), at(e, fm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = dt(), l = Ce(s);
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
    ke(l, (c) => {
      a() && c(u);
    });
  }
  return A(e, s), he({
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
de(
  qs,
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
  const [n, r] = ft(), o = () => ee(a, "$selectionRect", n), i = () => ee(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = tt();
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
  qs(e, {
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
var vm = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const gm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function wd(e, t) {
  ge(t, !1), at(e, gm);
  const [n, r] = ft(), o = () => ee(l, "$selectionRectMode", n), i = () => ee(c, "$nodeLookup", n), a = () => ee(u, "$nodes", n), s = tt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ re(null);
  function v(h) {
    const k = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: k, event: h });
  }
  function y(h) {
    const k = a().filter((w) => w.selected);
    d("selectionclick", { nodes: k, event: h });
  }
  ye(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (G(f, Jo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), _t(), Be();
  var b = dt(), $ = Ce(b);
  {
    var C = (h) => {
      var k = vm(), w = j(k);
      qs(w, { width: "100%", height: "100%", x: 0, y: 0 }), W(k), Tt(k, (_, T) => Fi == null ? void 0 : Fi(_, T), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, T, E, N) => {
          d("nodedrag", { event: _, targetNode: null, nodes: N });
        },
        onDragStart: (_, T, E, N) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: N });
        },
        onDragStop: (_, T, E, N) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: N });
        }
      })), en(() => ct("contextmenu", k, v)), en(() => ct("click", k, y)), en(() => ct("keyup", k, () => {
      })), Te(() => xt(k, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), A(h, k);
    };
    ke($, (h) => {
      o() === "nodes" && g(f) && Bn(g(f).x) && Bn(g(f).y) && h(C);
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
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          ($) => typeof $ == "string" ? [$] : $
        ).some(
          ($) => $.every((C) => l[C])
        ))
          continue;
        if (a.key === f) {
          y && a.preventDefault();
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
function bd(e, t) {
  ge(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => qi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => qi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = tt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function y(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function $(h, k) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const _ = b(w);
      return {
        key: _,
        modifier: y(w),
        enabled: _ !== null,
        callback: k
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Be(), ct("blur", qt, C), ct("contextmenu", qt, C), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(n(), () => s.set(!0)),
    type: "keydown"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(n(), () => s.set(!1)),
    type: "keyup"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(r(), () => l.set(!0)),
    type: "keydown"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(r(), () => l.set(!1)),
    type: "keyup"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Kp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(o(), () => u.set(!1)),
    type: "keyup"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(i(), () => c.set(!0)),
    type: "keydown"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(i(), () => c.set(!1)),
    type: "keyup"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(a(), () => d.set(!0)),
    type: "keydown"
  })), Tt(qt, (h, k) => wt == null ? void 0 : wt(h, k), () => ({
    trigger: $(a(), () => d.set(!1)),
    type: "keyup"
  })), he({
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
var hm = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), pm = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function xd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(v, "$connection", n), i = () => ee(y, "$connectionLineType", n), a = () => ee(d, "$width", n), s = () => ee(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = tt();
  let b = /* @__PURE__ */ re(null);
  ye(
    () => (o(), Q(c()), i(), g(b), os),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: _, fromPosition: T, toPosition: E } = o(), N = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: T,
          targetX: _.x,
          targetY: _.y,
          targetPosition: E
        };
        switch (i()) {
          case Wr.Bezier:
            ((H) => G(b, H[0]))(Ac(N));
            break;
          case Wr.Step:
            ((H) => G(b, H[0]))(Wi({ ...N, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((H) => G(b, H[0]))(Wi(N));
            break;
          default:
            ((H) => G(b, H[0]))(os(N));
        }
      }
    }
  ), _t(), Be();
  var $ = dt(), C = Ce($);
  {
    var h = (w) => {
      var _ = pm(), T = j(_), E = j(T);
      Mt(E, t, "connectionLine", {});
      var N = B(E);
      {
        var H = (z) => {
          var I = hm();
          Te(() => {
            xe(I, "d", g(b)), xt(I, u());
          }), A(z, I);
        };
        ke(N, (z) => {
          c() || z(H);
        });
      }
      W(T), W(_), Te(
        (z) => {
          xe(_, "width", a()), xe(_, "height", s()), xt(_, l()), Vt(T, 0, z);
        },
        [
          () => _n(It([
            "svelte-flow__connection",
            Ip(o().isValid)
          ]))
        ],
        be
      ), A(w, _);
    };
    ke(C, (w) => {
      o().inProgress && w(h);
    });
  }
  A(e, $);
  var k = he({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), p();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), p();
    }
  });
  return r(), k;
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
var mm = /* @__PURE__ */ oe("<div><!></div>");
function ti(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = ft(), a = () => ee(d, "$selectionRectMode", o), s = /* @__PURE__ */ re();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = tt();
  ye(() => Q(l()), () => {
    G(s, `${l()}`.split("-"));
  }), _t(), Be();
  var f = mm();
  let v;
  var y = j(f);
  Mt(y, t, "default", {}), W(f), Te(
    ($) => v = xn(f, v, {
      class: $,
      style: u(),
      ...r,
      [xr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => It([
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
      l($), p();
    },
    get style() {
      return u();
    },
    set style($) {
      u($), p();
    },
    get class() {
      return c();
    },
    set class($) {
      c($), p();
    }
  });
  return i(), b;
}
de(ti, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var ym = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function $d(e, t) {
  ge(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Be();
  var o = dt(), i = Ce(o);
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
var $m = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Cm = /* @__PURE__ */ oe("<!> <!>", 1), km = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const _m = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Cd(e, t) {
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
  ge(t, !1), at(e, _m);
  const [i, a] = ft(), s = () => ee(k(), "$viewport", i), l = () => ee(vo, "$initialized", i), u = () => ee(g(c), "$colorModeClass", i), c = /* @__PURE__ */ re();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), y = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), $ = m(t, "minZoom", 12, void 0), C = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), k = m(t, "viewport", 12, void 0), w = m(t, "nodeTypes", 12, void 0), _ = m(t, "edgeTypes", 12, void 0), T = m(t, "selectionKey", 12, void 0), E = m(t, "selectionMode", 12, void 0), N = m(t, "panActivationKey", 12, void 0), H = m(t, "multiSelectionKey", 12, void 0), z = m(t, "zoomActivationKey", 12, void 0), I = m(t, "nodesDraggable", 12, void 0), D = m(t, "nodesConnectable", 12, void 0), Y = m(t, "nodeDragThreshold", 12, void 0), S = m(t, "elementsSelectable", 12, void 0), V = m(t, "snapGrid", 12, void 0), x = m(t, "deleteKey", 12, void 0), P = m(t, "connectionRadius", 12, void 0), M = m(t, "connectionLineType", 12, void 0), L = m(t, "connectionMode", 28, () => Tr.Strict), Z = m(t, "connectionLineStyle", 12, ""), q = m(t, "connectionLineContainerStyle", 12, ""), K = m(t, "onMoveStart", 12, void 0), se = m(t, "onMove", 12, void 0), U = m(t, "onMoveEnd", 12, void 0), X = m(t, "isValidConnection", 12, void 0), ie = m(t, "translateExtent", 12, void 0), ve = m(t, "nodeExtent", 12, void 0), me = m(t, "onlyRenderVisibleElements", 12, void 0), ue = m(t, "panOnScrollMode", 28, () => cr.Free), Ve = m(t, "preventScrolling", 12, !0), le = m(t, "zoomOnScroll", 12, !0), ce = m(t, "zoomOnDoubleClick", 12, !0), ze = m(t, "zoomOnPinch", 12, !0), Ne = m(t, "panOnScroll", 12, !1), Ze = m(t, "panOnDrag", 12, !0), te = m(t, "selectionOnDrag", 12, void 0), Ue = m(t, "autoPanOnConnect", 12, !0), Ge = m(t, "autoPanOnNodeDrag", 12, !0), ae = m(t, "onerror", 12, void 0), fe = m(t, "ondelete", 12, void 0), Se = m(t, "onedgecreate", 12, void 0), Xe = m(t, "attributionPosition", 12, void 0), Ae = m(t, "proOptions", 12, void 0), vt = m(t, "defaultEdgeOptions", 12, void 0), st = m(t, "width", 12, void 0), ne = m(t, "height", 12, void 0), Ie = m(t, "colorMode", 12, "light"), we = m(t, "onconnect", 12, void 0), Rt = m(t, "onconnectstart", 12, void 0), Zt = m(t, "onconnectend", 12, void 0), ln = m(t, "onbeforedelete", 12, void 0), He = m(t, "oninit", 12, void 0), lt = m(t, "nodeOrigin", 12, void 0), Ye = m(t, "paneClickDistance", 12, 0), Re = m(t, "nodeClickDistance", 12, 0), ut = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = m(t, "style", 12, void 0), Et = m(t, "class", 12, void 0), Qn = /* @__PURE__ */ re(), mt = /* @__PURE__ */ re(), $t = /* @__PURE__ */ re();
  const Pn = s() || h(), rt = Cv(pa) ? tt() : K0({
    nodes: F(f()),
    edges: F(v()),
    width: st(),
    height: ne(),
    fitView: y(),
    nodeOrigin: lt(),
    nodeExtent: ve()
  });
  hn(() => (rt.width.set(g(mt)), rt.height.set(g($t)), rt.domNode.set(g(Qn)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport(k()), y() !== void 0 && rt.fitViewOnInit.set(y()), b() && rt.fitViewOptions.set(b()), tu(rt, {
    nodeTypes: w(),
    edgeTypes: _(),
    minZoom: $(),
    maxZoom: C(),
    translateExtent: ie(),
    paneClickDistance: Ye()
  }), () => {
    rt.reset();
  }));
  const { initialized: vo } = rt;
  let er = /* @__PURE__ */ re(!1);
  ye(
    () => (g(mt), g($t)),
    () => {
      g(mt) !== void 0 && g($t) !== void 0 && (rt.width.set(g(mt)), rt.height.set(g($t)));
    }
  ), ye(
    () => (g(er), l(), Q(He())),
    () => {
      var R;
      !g(er) && l() && ((R = He()) == null || R(), G(er, !0));
    }
  ), ye(
    () => (Q(d()), Q(M()), Q(P()), Q(E()), Q(V()), Q(ut()), Q(I()), Q(D()), Q(S()), Q(me()), Q(X()), Q(Ue()), Q(Ge()), Q(ae()), Q(fe()), Q(Se()), Q(L()), Q(Y()), Q(we()), Q(Rt()), Q(Zt()), Q(ln()), Q(lt()), nu),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: M(),
        connectionRadius: P(),
        selectionMode: E(),
        snapGrid: V(),
        defaultMarkerColor: ut(),
        nodesDraggable: I(),
        nodesConnectable: D(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: me(),
        isValidConnection: X(),
        autoPanOnConnect: Ue(),
        autoPanOnNodeDrag: Ge(),
        onerror: ae(),
        ondelete: fe(),
        onedgecreate: Se(),
        connectionMode: L(),
        nodeDragThreshold: Y(),
        onconnect: we(),
        onconnectstart: Rt(),
        onconnectend: Zt(),
        onbeforedelete: ln(),
        nodeOrigin: lt()
      };
      nu(rt, R);
    }
  ), ye(
    () => (Q(w()), Q(_()), Q($()), Q(C()), Q(ie()), Q(Ye())),
    () => {
      tu(rt, {
        nodeTypes: w(),
        edgeTypes: _(),
        minZoom: $(),
        maxZoom: C(),
        translateExtent: ie(),
        paneClickDistance: Ye()
      });
    }
  ), ye(
    () => Q(Ie()),
    () => {
      Qv(G(c, xm(Ie())), "$colorModeClass", i);
    }
  ), _t(), Be();
  var Nt = km();
  let wr;
  var br = j(Nt);
  bd(br, {
    get selectionKey() {
      return T();
    },
    get deleteKey() {
      return x();
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
  const go = /* @__PURE__ */ be(() => ue() === void 0 ? cr.Free : ue()), ai = /* @__PURE__ */ be(() => Ve() === void 0 ? !0 : Ve()), si = /* @__PURE__ */ be(() => le() === void 0 ? !0 : le()), xa = /* @__PURE__ */ be(() => ce() === void 0 ? !0 : ce()), $a = /* @__PURE__ */ be(() => ze() === void 0 ? !0 : ze()), Ca = /* @__PURE__ */ be(() => Ne() === void 0 ? !1 : Ne()), ka = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze()), O = /* @__PURE__ */ be(() => Ye() === void 0 ? 0 : Ye());
  ld(Lr, {
    initialViewport: Pn,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return se();
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
      return g(Ca);
    },
    get panOnDrag() {
      return g(ka);
    },
    get paneClickDistance() {
      return g(O);
    },
    children: (R, ot) => {
      const We = /* @__PURE__ */ be(() => Ze() === void 0 ? !0 : Ze());
      ud(R, {
        get panOnDrag() {
          return g(We);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(Le) {
            Ke.call(this, t, Le);
          },
          panecontextmenu(Le) {
            Ke.call(this, t, Le);
          }
        },
        children: (Le, Pt) => {
          var gt = Cm(), pt = Ce(gt);
          cd(pt, {
            children: (tr, nr) => {
              var kt = $m(), zr = Ce(kt);
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
                  return q();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (je, Xw) => {
                    var Us = dt(), wf = Ce(Us);
                    Mt(wf, t, "connectionLine", {}), A(je, Us);
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
              }), A(tr, kt);
            },
            $$slots: { default: !0 }
          });
          var Yt = B(pt, 2);
          yd(Yt, {}), A(Le, gt);
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
  Mt(pe, t, "default", {}), W(Nt), Ln(Nt, (R) => G(Qn, R), () => g(Qn)), Te(
    (R) => wr = xn(
      Nt,
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
      () => It([
        "svelte-flow",
        Et(),
        u()
      ])
    ],
    be
  ), vl(Nt, "clientWidth", (R) => G(mt, R)), vl(Nt, "clientHeight", (R) => G($t, R)), ct("dragover", Nt, function(R) {
    Ke.call(this, t, R);
  }), ct("drop", Nt, function(R) {
    Ke.call(this, t, R);
  }), A(e, Nt);
  var Ee = he({
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
      return y();
    },
    set fitView(R) {
      y(R), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), p();
    },
    get minZoom() {
      return $();
    },
    set minZoom(R) {
      $(R), p();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(R) {
      C(R), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), p();
    },
    get viewport() {
      return k();
    },
    set viewport(R) {
      k(R), p();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(R) {
      w(R), p();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(R) {
      _(R), p();
    },
    get selectionKey() {
      return T();
    },
    set selectionKey(R) {
      T(R), p();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(R) {
      E(R), p();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(R) {
      N(R), p();
    },
    get multiSelectionKey() {
      return H();
    },
    set multiSelectionKey(R) {
      H(R), p();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(R) {
      z(R), p();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(R) {
      I(R), p();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(R) {
      D(R), p();
    },
    get nodeDragThreshold() {
      return Y();
    },
    set nodeDragThreshold(R) {
      Y(R), p();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(R) {
      S(R), p();
    },
    get snapGrid() {
      return V();
    },
    set snapGrid(R) {
      V(R), p();
    },
    get deleteKey() {
      return x();
    },
    set deleteKey(R) {
      x(R), p();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(R) {
      P(R), p();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(R) {
      M(R), p();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(R) {
      L(R), p();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(R) {
      Z(R), p();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(R) {
      q(R), p();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(R) {
      K(R), p();
    },
    get onMove() {
      return se();
    },
    set onMove(R) {
      se(R), p();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(R) {
      U(R), p();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(R) {
      X(R), p();
    },
    get translateExtent() {
      return ie();
    },
    set translateExtent(R) {
      ie(R), p();
    },
    get nodeExtent() {
      return ve();
    },
    set nodeExtent(R) {
      ve(R), p();
    },
    get onlyRenderVisibleElements() {
      return me();
    },
    set onlyRenderVisibleElements(R) {
      me(R), p();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(R) {
      ue(R), p();
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
      return ce();
    },
    set zoomOnDoubleClick(R) {
      ce(R), p();
    },
    get zoomOnPinch() {
      return ze();
    },
    set zoomOnPinch(R) {
      ze(R), p();
    },
    get panOnScroll() {
      return Ne();
    },
    set panOnScroll(R) {
      Ne(R), p();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(R) {
      Ze(R), p();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(R) {
      te(R), p();
    },
    get autoPanOnConnect() {
      return Ue();
    },
    set autoPanOnConnect(R) {
      Ue(R), p();
    },
    get autoPanOnNodeDrag() {
      return Ge();
    },
    set autoPanOnNodeDrag(R) {
      Ge(R), p();
    },
    get onerror() {
      return ae();
    },
    set onerror(R) {
      ae(R), p();
    },
    get ondelete() {
      return fe();
    },
    set ondelete(R) {
      fe(R), p();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(R) {
      Se(R), p();
    },
    get attributionPosition() {
      return Xe();
    },
    set attributionPosition(R) {
      Xe(R), p();
    },
    get proOptions() {
      return Ae();
    },
    set proOptions(R) {
      Ae(R), p();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(R) {
      vt(R), p();
    },
    get width() {
      return st();
    },
    set width(R) {
      st(R), p();
    },
    get height() {
      return ne();
    },
    set height(R) {
      ne(R), p();
    },
    get colorMode() {
      return Ie();
    },
    set colorMode(R) {
      Ie(R), p();
    },
    get onconnect() {
      return we();
    },
    set onconnect(R) {
      we(R), p();
    },
    get onconnectstart() {
      return Rt();
    },
    set onconnectstart(R) {
      Rt(R), p();
    },
    get onconnectend() {
      return Zt();
    },
    set onconnectend(R) {
      Zt(R), p();
    },
    get onbeforedelete() {
      return ln();
    },
    set onbeforedelete(R) {
      ln(R), p();
    },
    get oninit() {
      return He();
    },
    set oninit(R) {
      He(R), p();
    },
    get nodeOrigin() {
      return lt();
    },
    set nodeOrigin(R) {
      lt(R), p();
    },
    get paneClickDistance() {
      return Ye();
    },
    set paneClickDistance(R) {
      Ye(R), p();
    },
    get nodeClickDistance() {
      return Re();
    },
    set nodeClickDistance(R) {
      Re(R), p();
    },
    get defaultMarkerColor() {
      return ut();
    },
    set defaultMarkerColor(R) {
      ut(R), p();
    },
    get style() {
      return Jt();
    },
    set style(R) {
      Jt(R), p();
    },
    get class() {
      return Et();
    },
    set class(R) {
      Et(R), p();
    }
  });
  return a(), Ee;
}
de(
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
  ge(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = sd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Gr(pa, { getStore: () => l }), Ts(() => {
    l.reset();
  }), Be();
  var u = dt(), c = Ce(u);
  return Mt(c, t, "default", {}), A(e, u), he({
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
de(
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
var Sm = /* @__PURE__ */ oe("<button><!></button>");
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
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Be();
  var c = Sm();
  let d;
  var f = j(c);
  return Mt(f, t, "default", { class: "button-svg" }), W(c), Te(
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
      () => It([
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
var Em = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function _d(e) {
  var t = Em();
  A(e, t);
}
de(_d, {}, [], [], !0);
var Pm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sd(e) {
  var t = Pm();
  A(e, t);
}
de(Sd, {}, [], [], !0);
var Tm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ed(e) {
  var t = Tm();
  A(e, t);
}
de(Ed, {}, [], [], !0);
var Mm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Pd(e) {
  var t = Mm();
  A(e, t);
}
de(Pd, {}, [], [], !0);
var Vm = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Td(e) {
  var t = Vm();
  A(e, t);
}
de(Td, {}, [], [], !0);
var Hm = /* @__PURE__ */ oe("<!> <!>", 1), Nm = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function Md(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(M, "$nodesDraggable", n), i = () => ee(L, "$nodesConnectable", n), a = () => ee(Z, "$elementsSelectable", n), s = () => ee(V, "$viewport", n), l = () => ee(x, "$minZoom", n), u = () => ee(P, "$maxZoom", n), c = /* @__PURE__ */ re(), d = /* @__PURE__ */ re(), f = /* @__PURE__ */ re(), v = /* @__PURE__ */ re();
  let y = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), $ = m(t, "showFitView", 12, !0), C = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), k = m(t, "buttonBgColorHover", 12, void 0), w = m(t, "buttonColor", 12, void 0), _ = m(t, "buttonColorHover", 12, void 0), T = m(t, "buttonBorderColor", 12, void 0), E = m(t, "ariaLabel", 12, void 0), N = m(t, "style", 12, void 0), H = m(t, "orientation", 12, "vertical"), z = m(t, "fitViewOptions", 12, void 0), I = m(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: Y,
    fitView: S,
    viewport: V,
    minZoom: x,
    maxZoom: P,
    nodesDraggable: M,
    nodesConnectable: L,
    elementsSelectable: Z
  } = tt(), q = {
    bgColor: h(),
    bgColorHover: k(),
    color: w(),
    colorHover: _(),
    borderColor: T()
  }, K = () => {
    D();
  }, se = () => {
    Y();
  }, U = () => {
    S(z());
  }, X = () => {
    G(c, !g(c)), M.set(g(c)), L.set(g(c)), Z.set(g(c));
  };
  ye(
    () => (o(), i(), a()),
    () => {
      G(c, o() || i() || a());
    }
  ), ye(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), ye(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), ye(() => Q(H()), () => {
    G(v, H() === "horizontal" ? "horizontal" : "vertical");
  }), _t(), Be();
  const ie = /* @__PURE__ */ be(() => It([
    "svelte-flow__controls",
    g(v),
    I()
  ])), ve = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  ti(e, {
    get class() {
      return g(ie);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ve);
    },
    get style() {
      return N();
    },
    children: (ue, Ve) => {
      var le = Nm(), ce = Ce(le);
      Mt(ce, t, "before", {});
      var ze = B(ce, 2);
      {
        var Ne = (Se) => {
          var Xe = Hm(), Ae = Ce(Xe);
          ko(Ae, bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            q,
            {
              $$events: { click: K },
              children: (st, ne) => {
                _d(st);
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
            q,
            {
              $$events: { click: se },
              children: (st, ne) => {
                Sd(st);
              },
              $$slots: { default: !0 }
            }
          )), A(Se, Xe);
        };
        ke(ze, (Se) => {
          b() && Se(Ne);
        });
      }
      var Ze = B(ze, 2);
      {
        var te = (Se) => {
          ko(Se, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            q,
            {
              $$events: { click: U },
              children: (Xe, Ae) => {
                Ed(Xe);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Ze, (Se) => {
          $() && Se(te);
        });
      }
      var Ue = B(Ze, 2);
      {
        var Ge = (Se) => {
          ko(Se, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            q,
            {
              $$events: { click: X },
              children: (Xe, Ae) => {
                var vt = dt(), st = Ce(vt);
                {
                  var ne = (we) => {
                    Td(we);
                  }, Ie = (we) => {
                    Pd(we);
                  };
                  ke(st, (we) => {
                    g(c) ? we(ne) : we(Ie, !1);
                  });
                }
                A(Xe, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Ue, (Se) => {
          C() && Se(Ge);
        });
      }
      var ae = B(Ue, 2);
      Mt(ae, t, "default", {});
      var fe = B(ae, 2);
      Mt(fe, t, "after", {}), A(ue, le);
    },
    $$slots: { default: !0 }
  });
  var me = he({
    get position() {
      return y();
    },
    set position(ue) {
      y(ue), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ue) {
      b(ue), p();
    },
    get showFitView() {
      return $();
    },
    set showFitView(ue) {
      $(ue), p();
    },
    get showLock() {
      return C();
    },
    set showLock(ue) {
      C(ue), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ue) {
      h(ue), p();
    },
    get buttonBgColorHover() {
      return k();
    },
    set buttonBgColorHover(ue) {
      k(ue), p();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ue) {
      w(ue), p();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(ue) {
      _(ue), p();
    },
    get buttonBorderColor() {
      return T();
    },
    set buttonBorderColor(ue) {
      T(ue), p();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ue) {
      E(ue), p();
    },
    get style() {
      return N();
    },
    set style(ue) {
      N(ue), p();
    },
    get orientation() {
      return H();
    },
    set orientation(ue) {
      H(ue), p();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(ue) {
      z(ue), p();
    },
    get class() {
      return I();
    },
    set class(ue) {
      I(ue), p();
    }
  });
  return r(), me;
}
de(
  Md,
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
var Om = /* @__PURE__ */ _e("<circle></circle>");
function Vd(e, t) {
  ge(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Be();
  var o = Om();
  return Te(
    (i) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Vt(o, 0, i);
    },
    [
      () => _n(It([
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
de(Vd, { radius: {}, class: {} }, [], [], !0);
var Dm = /* @__PURE__ */ _e("<path></path>");
function Hd(e, t) {
  ge(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Be();
  var a = Dm();
  return Te(
    (s) => {
      xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Vt(a, 0, s);
    },
    [
      () => _n(It([
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
var zm = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Am = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Nd(e, t) {
  ge(t, !1), at(e, Am);
  const [n, r] = ft(), o = () => ee(_, "$flowId", n), i = () => ee(w, "$viewport", n), a = /* @__PURE__ */ re(), s = /* @__PURE__ */ re(), l = /* @__PURE__ */ re(), u = /* @__PURE__ */ re(), c = /* @__PURE__ */ re();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => dr.Dots), v = m(t, "gap", 12, 20), y = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), $ = m(t, "bgColor", 12, void 0), C = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), k = m(t, "class", 12, "");
  const { viewport: w, flowId: _ } = tt(), T = y() || Lm[f()], E = f() === dr.Dots, N = f() === dr.Cross, H = Array.isArray(v()) ? v() : [v(), v()];
  ye(
    () => (o(), Q(d())),
    () => {
      G(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), ye(() => i(), () => {
    G(s, [
      H[0] * i().zoom || 1,
      H[1] * i().zoom || 1
    ]);
  }), ye(() => i(), () => {
    G(l, T * i().zoom);
  }), ye(() => (g(l), g(s)), () => {
    G(u, N ? [g(l), g(l)] : g(s));
  }), ye(
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
  ), _t(), Be();
  var z = zm();
  let I;
  var D = j(z), Y = j(D);
  {
    var S = (M) => {
      const L = /* @__PURE__ */ be(() => g(l) / 2);
      Vd(M, {
        get radius() {
          return g(L);
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
  W(D);
  var x = B(D);
  W(z), Te(
    (M) => {
      Vt(z, 0, M, "svelte-1r7pe8d"), I = xt(z, "", I, {
        "--xy-background-color-props": $(),
        "--xy-background-pattern-color-props": C()
      }), xe(D, "id", g(a)), xe(D, "x", i().x % g(s)[0]), xe(D, "y", i().y % g(s)[1]), xe(D, "width", g(s)[0]), xe(D, "height", g(s)[1]), xe(D, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), xe(x, "fill", `url(#${g(a)})`);
    },
    [
      () => _n(It(["svelte-flow__background", k()]))
    ],
    be
  ), A(e, z);
  var P = he({
    get id() {
      return d();
    },
    set id(M) {
      d(M), p();
    },
    get variant() {
      return f();
    },
    set variant(M) {
      f(M), p();
    },
    get gap() {
      return v();
    },
    set gap(M) {
      v(M), p();
    },
    get size() {
      return y();
    },
    set size(M) {
      y(M), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(M) {
      b(M), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(M) {
      $(M), p();
    },
    get patternColor() {
      return C();
    },
    set patternColor(M) {
      C(M), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), p();
    },
    get class() {
      return k();
    },
    set class(M) {
      k(M), p();
    }
  });
  return r(), P;
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
var Im = /* @__PURE__ */ _e("<rect></rect>");
function Od(e, t) {
  ge(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Be();
  var v = Im();
  let y;
  return Te(
    (b, $) => {
      y = Vt(v, 0, b, null, y, $), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", a()), xe(v, "ry", a()), xe(v, "width", o()), xe(v, "height", i()), xt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l());
    },
    [
      () => _n(It(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), A(e, v), he({
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
function ru(e, t) {
  const n = C0({
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
var Rm = /* @__PURE__ */ _e("<title> </title>"), Zm = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Dd(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(Ze, "$flowId", n), i = () => ee(ce, "$viewport", n), a = () => ee(ze, "$containerWidth", n), s = () => ee(Ne, "$containerHeight", n), l = () => ee(le, "$nodeLookup", n), u = () => ee(Ve, "$nodes", n), c = () => ee(te, "$panZoom", n), d = () => ee(Ue, "$translateExtent", n), f = /* @__PURE__ */ re(), v = /* @__PURE__ */ re(), y = /* @__PURE__ */ re(), b = /* @__PURE__ */ re(), $ = /* @__PURE__ */ re(), C = /* @__PURE__ */ re(), h = /* @__PURE__ */ re(), k = /* @__PURE__ */ re(), w = /* @__PURE__ */ re(), _ = /* @__PURE__ */ re(), T = /* @__PURE__ */ re(), E = /* @__PURE__ */ re(), N = /* @__PURE__ */ re();
  let H = m(t, "position", 12, "bottom-right"), z = m(t, "ariaLabel", 12, "Mini map"), I = m(t, "nodeStrokeColor", 12, "transparent"), D = m(t, "nodeColor", 12, void 0), Y = m(t, "nodeClass", 12, ""), S = m(t, "nodeBorderRadius", 12, 5), V = m(t, "nodeStrokeWidth", 12, 2), x = m(t, "bgColor", 12, void 0), P = m(t, "maskColor", 12, void 0), M = m(t, "maskStrokeColor", 12, void 0), L = m(t, "maskStrokeWidth", 12, void 0), Z = m(t, "width", 12, void 0), q = m(t, "height", 12, void 0), K = m(t, "pannable", 12, !0), se = m(t, "zoomable", 12, !0), U = m(t, "inversePan", 12, void 0), X = m(t, "zoomStep", 12, void 0), ie = m(t, "style", 12, ""), ve = m(t, "class", 12, "");
  const me = 200, ue = 150, {
    nodes: Ve,
    nodeLookup: le,
    viewport: ce,
    width: ze,
    height: Ne,
    flowId: Ze,
    panZoom: te,
    translateExtent: Ue
  } = tt(), Ge = D() === void 0 ? void 0 : La(D()), ae = La(I()), fe = La(Y()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Xe = `svelte-flow__minimap-desc-${o()}`;
  let Ae = /* @__PURE__ */ re(g(f));
  const vt = () => g(C);
  ye(
    () => (i(), a(), s()),
    () => {
      G(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), ye(
    () => (l(), g(f), u()),
    () => {
      G(Ae, l().size > 0 ? Oc(Jo(l()), g(f)) : g(f)), u();
    }
  ), ye(() => Q(Z()), () => {
    G(v, Z() ?? me);
  }), ye(() => Q(q()), () => {
    G(y, q() ?? ue);
  }), ye(
    () => (g(Ae), g(v)),
    () => {
      G(b, g(Ae).width / g(v));
    }
  ), ye(
    () => (g(Ae), g(y)),
    () => {
      G($, g(Ae).height / g(y));
    }
  ), ye(
    () => (g(b), g($)),
    () => {
      G(C, Math.max(g(b), g($)));
    }
  ), ye(() => (g(C), g(v)), () => {
    G(h, g(C) * g(v));
  }), ye(
    () => (g(C), g(y)),
    () => {
      G(k, g(C) * g(y));
    }
  ), ye(() => g(C), () => {
    G(w, 5 * g(C));
  }), ye(
    () => (g(Ae), g(h), g(w)),
    () => {
      G(_, g(Ae).x - (g(h) - g(Ae).width) / 2 - g(w));
    }
  ), ye(
    () => (g(Ae), g(k), g(w)),
    () => {
      G(T, g(Ae).y - (g(k) - g(Ae).height) / 2 - g(w));
    }
  ), ye(() => (g(h), g(w)), () => {
    G(E, g(h) + g(w) * 2);
  }), ye(() => (g(k), g(w)), () => {
    G(N, g(k) + g(w) * 2);
  }), _t(), Be();
  const st = /* @__PURE__ */ be(() => ie() + (x() ? `;--xy-minimap-background-color-props:${x()}` : "")), ne = /* @__PURE__ */ be(() => It(["svelte-flow__minimap", ve()]));
  ti(e, {
    get position() {
      return H();
    },
    get style() {
      return g(st);
    },
    get class() {
      return g(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (we, Rt) => {
      var Zt = dt(), ln = Ce(Zt);
      {
        var He = (lt) => {
          var Ye = Zm();
          xe(Ye, "aria-labelledby", Xe);
          let Re;
          var ut = j(Ye);
          {
            var Jt = (mt) => {
              var $t = Rm();
              xe($t, "id", Xe);
              var Pn = j($t, !0);
              W($t), Te(() => on(Pn, z())), A(mt, $t);
            };
            ke(ut, (mt) => {
              z() && mt(Jt);
            });
          }
          var Et = B(ut);
          Ft(Et, 1, u, (mt) => mt.id, (mt, $t) => {
            var Pn = dt();
            const rt = /* @__PURE__ */ be(() => l().get(g($t).id));
            var vo = Ce(Pn);
            {
              var er = (Nt) => {
                const wr = /* @__PURE__ */ be(() => yr(g(rt))), br = /* @__PURE__ */ be(() => Ge == null ? void 0 : Ge(g(rt))), Lr = /* @__PURE__ */ be(() => ae(g(rt))), go = /* @__PURE__ */ be(() => fe(g(rt)));
                Od(Nt, bt(
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
                      return V();
                    },
                    shapeRendering: Se,
                    get class() {
                      return g(go);
                    }
                  }
                ));
              };
              ke(vo, (Nt) => {
                g(rt) && Lc(g(rt)) && Nt(er);
              });
            }
            A(mt, Pn);
          });
          var Qn = B(Et);
          W(Ye), Tt(Ye, (mt, $t) => ru == null ? void 0 : ru(mt, $t), () => ({
            panZoom: c(),
            viewport: ce,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: U(),
            zoomStep: X(),
            pannable: K(),
            zoomable: se()
          })), Te(() => {
            xe(Ye, "width", g(v)), xe(Ye, "height", g(y)), xe(Ye, "viewBox", `${g(_) ?? ""} ${g(T) ?? ""} ${g(E) ?? ""} ${g(N) ?? ""}`), Re = xt(Ye, "", Re, {
              "--xy-minimap-mask-background-color-props": P(),
              "--xy-minimap-mask-stroke-color-props": M(),
              "--xy-minimap-mask-stroke-width-props": L() ? L() * g(C) : void 0
            }), xe(Qn, "d", `M${g(_) - g(w)},${g(T) - g(w)}h${g(E) + g(w) * 2}v${g(N) + g(w) * 2}h${-g(E) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), A(lt, Ye);
        };
        ke(ln, (lt) => {
          c() && lt(He);
        });
      }
      A(we, Zt);
    },
    $$slots: { default: !0 }
  });
  var Ie = he({
    get position() {
      return H();
    },
    set position(we) {
      H(we), p();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(we) {
      z(we), p();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(we) {
      I(we), p();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(we) {
      D(we), p();
    },
    get nodeClass() {
      return Y();
    },
    set nodeClass(we) {
      Y(we), p();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(we) {
      S(we), p();
    },
    get nodeStrokeWidth() {
      return V();
    },
    set nodeStrokeWidth(we) {
      V(we), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(we) {
      x(we), p();
    },
    get maskColor() {
      return P();
    },
    set maskColor(we) {
      P(we), p();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(we) {
      M(we), p();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(we) {
      L(we), p();
    },
    get width() {
      return Z();
    },
    set width(we) {
      Z(we), p();
    },
    get height() {
      return q();
    },
    set height(we) {
      q(we), p();
    },
    get pannable() {
      return K();
    },
    set pannable(we) {
      K(we), p();
    },
    get zoomable() {
      return se();
    },
    set zoomable(we) {
      se(we), p();
    },
    get inversePan() {
      return U();
    },
    set inversePan(we) {
      U(we), p();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(we) {
      X(we), p();
    },
    get style() {
      return ie();
    },
    set style(we) {
      ie(we), p();
    },
    get class() {
      return ve();
    },
    set class(we) {
      ve(we), p();
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
const ou = (e) => Zp(e);
function Gt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: b, edgeLookup: $, connectionLookup: C } = tt(), h = (_) => {
    var T, E;
    const N = F(y), H = ou(_) ? _ : N.get(_.id), z = H.parentId ? Wp(H.position, H.measured, H.parentId, N, F(b)) : H.position, I = {
      ...H,
      position: z,
      width: ((T = H.measured) == null ? void 0 : T.width) ?? H.width,
      height: ((E = H.measured) == null ? void 0 : E.height) ?? H.height
    };
    return no(I);
  }, k = (_, T, E = { replace: !1 }) => {
    var N;
    const H = (N = F(y).get(_)) == null ? void 0 : N.internals.userNode;
    if (!H)
      return;
    const z = typeof T == "function" ? T(H) : T;
    E.replace ? d.update((I) => I.map((D) => D.id === _ ? ou(z) ? z : { ...D, ...z } : D)) : (Object.assign(H, z), d.update((I) => I));
  }, w = (_) => F(y).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (_) => {
      var T;
      return (T = w(_)) == null ? void 0 : T.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? F(d) : iu(F(y), _),
    getEdge: (_) => F($).get(_),
    getEdges: (_) => _ === void 0 ? F(f) : iu(F($), _),
    setZoom: (_, T) => {
      const E = F(c);
      return E ? E.scaleTo(_, { duration: T == null ? void 0 : T.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(i).zoom,
    setViewport: async (_, T) => {
      const E = F(i), N = F(c);
      return N ? (await N.setViewport({
        x: _.x ?? E.x,
        y: _.y ?? E.y,
        zoom: _.zoom ?? E.zoom
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(i),
    setCenter: async (_, T, E) => {
      const N = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : F(u), H = F(c);
      return H ? (await H.setViewport({
        x: F(a) / 2 - _ * N,
        y: F(s) / 2 - T * N,
        zoom: N
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, T) => {
      const E = F(c);
      if (!E)
        return Promise.resolve(!1);
      const N = Is(_, F(a), F(s), F(l), F(u), (T == null ? void 0 : T.padding) ?? 0.1);
      return await E.setViewport(N, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, T = !0, E) => {
      const N = Rl(_), H = N ? _ : h(_);
      return H ? (E || F(d)).filter((z) => {
        const I = F(y).get(z.id);
        if (!I || !N && z.id === _.id)
          return !1;
        const D = no(I), Y = Zo(D, H);
        return T && Y > 0 || Y >= H.width * H.height;
      }) : [];
    },
    isNodeIntersecting: (_, T, E = !0) => {
      const N = Rl(_) ? _ : h(_);
      if (!N)
        return !1;
      const H = Zo(N, T);
      return E && H > 0 || H >= N.width * N.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: T = [] }) => {
      const { nodes: E, edges: N } = await Vc({
        nodesToRemove: _,
        edgesToRemove: T,
        nodes: F(d),
        edges: F(f),
        onBeforeDelete: F(r)
      });
      return E && d.update((H) => H.filter((z) => !E.some(({ id: I }) => I === z.id))), N && f.update((H) => H.filter((z) => !N.some(({ id: I }) => I === z.id))), {
        deletedNodes: E,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (_, T = { snapToGrid: !0 }) => {
      const E = F(v);
      if (!E)
        return _;
      const N = T.snapToGrid ? F(o) : !1, { x: H, y: z, zoom: I } = F(i), { x: D, y: Y } = E.getBoundingClientRect(), S = {
        x: _.x - D,
        y: _.y - Y
      };
      return Qo(S, [H, z, I], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const T = F(v);
      if (!T)
        return _;
      const { x: E, y: N, zoom: H } = F(i), { x: z, y: I } = T.getBoundingClientRect(), D = Dc(_, [E, N, H]);
      return {
        x: D.x + z,
        y: D.y + I
      };
    },
    toObject: () => ({
      nodes: F(d).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: F(f).map((_) => ({ ..._ })),
      viewport: { ...F(i) }
    }),
    updateNode: k,
    updateNodeData: (_, T, E) => {
      var N;
      const H = (N = F(y).get(_)) == null ? void 0 : N.internals.userNode;
      if (!H)
        return;
      const z = typeof T == "function" ? T(H) : T;
      H.data = E != null && E.replace ? z : { ...H.data, ...z }, d.update((I) => I);
    },
    getNodesBounds: (_) => {
      const T = F(y), E = F(b);
      return Yp(_, { nodeLookup: T, nodeOrigin: E });
    },
    getHandleConnections: ({ type: _, id: T, nodeId: E }) => {
      var N;
      return Array.from(((N = F(C).get(`${E}-${_}-${T ?? null}`)) == null ? void 0 : N.values()) ?? []);
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
var Ym = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function Ld(e, t) {
  ge(t, !1);
  const [n, r] = ft(), o = () => ee(k, "$nodes", n), i = () => ee(h, "$nodeLookup", n), a = () => ee(C, "$viewport", n), s = () => ee($, "$domNode", n), l = /* @__PURE__ */ re(), u = /* @__PURE__ */ re(), c = /* @__PURE__ */ re();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), y = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: $, viewport: C, nodeLookup: h, nodes: k } = tt(), { getNodesBounds: w } = Gt(), _ = Sr("svelteflow__node_id");
  let T = /* @__PURE__ */ re(), E = /* @__PURE__ */ re([]), N = y() !== void 0 ? y() : 10, H = f() !== void 0 ? f() : Pe.Top, z = v() !== void 0 ? v() : "center";
  ye(
    () => (o(), Q(d()), i()),
    () => {
      o();
      const V = Array.isArray(d()) ? d() : [d() || _];
      G(E, V.reduce(
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
      const V = w(g(E));
      V && G(T, a0(V, a(), H, N, z));
    }
  ), ye(() => g(E), () => {
    G(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((V) => (V.internals.z || 5) + 1)));
  }), ye(() => o(), () => {
    G(u, o().filter((V) => V.selected).length);
  }), ye(
    () => (Q(b()), g(E), g(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), _t(), Be();
  var I = dt(), D = Ce(I);
  {
    var Y = (V) => {
      var x = Ym();
      let P;
      var M = j(x);
      Mt(M, t, "default", {}), W(x), Tt(x, (L, Z) => Xi == null ? void 0 : Xi(L, Z), () => ({ domNode: s() })), Te(
        (L) => {
          xe(x, "data-id", L), P = xt(x, "", P, {
            position: "absolute",
            transform: g(T),
            "z-index": g(l)
          });
        },
        [
          () => g(E).reduce((L, Z) => `${L}${Z.id} `, "").trim()
        ],
        be
      ), A(V, x);
    };
    ke(D, (V) => {
      s() && g(c) && g(E) && V(Y);
    });
  }
  A(e, I);
  var S = he({
    get nodeId() {
      return d();
    },
    set nodeId(V) {
      d(V), p();
    },
    get position() {
      return f();
    },
    set position(V) {
      f(V), p();
    },
    get align() {
      return v();
    },
    set align(V) {
      v(V), p();
    },
    get offset() {
      return y();
    },
    set offset(V) {
      y(V), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(V) {
      b(V), p();
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
function Dr(e) {
  const { nodes: t, nodeLookup: n } = tt();
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
    if (Wt(this, "options"), Wt(this, "rootEl"), Wt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
const qm = () => {
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
}, _i = qm();
var Wm = /* @__PURE__ */ oe("<button><!></button>");
function nt(e, t) {
  ge(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Wm();
  let i;
  var a = j(o);
  return Er(a, () => n() ?? Ct), W(o), Te(() => i = xn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), A(e, o), he({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
de(nt, { children: {} }, [], [], !0);
var jm = /* @__PURE__ */ oe("<input>");
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
var Xm = /* @__PURE__ */ oe("<input>");
function Dt(e, t) {
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
de(Dt, {}, [], [], !0);
var Km = /* @__PURE__ */ oe("<textarea></textarea>");
function Ut(e, t) {
  ge(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Km();
  Dv(o);
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
      n(a), p();
    }
  });
}
de(Ut, { value: {} }, [], [], !0);
var Fm = /* @__PURE__ */ oe('<div role="button"><!></div>'), Um = /* @__PURE__ */ oe("<div></div>");
function Ad(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Be();
  var l = Um();
  let u;
  return Ft(l, 5, o, Oo, (c, d, f) => {
    var v = Fm();
    xe(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var y = j(v);
    {
      var b = (C) => {
        var h = Fe();
        Te(() => on(h, g(d).label)), A(C, h);
      }, $ = (C) => {
        var h = dt(), k = Ce(h);
        Er(k, () => g(d).label ?? Ct), A(C, h);
      };
      ke(y, (C) => {
        typeof g(d).label == "string" ? C(b) : C($, !1);
      });
    }
    W(v), Te(() => Vt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), A(c, v);
  }), W(l), Te(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), he({
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
Ko(["click", "keydown"]);
de(Ad, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = (e, t, n) => t(g(n)), Jm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Qm = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), e2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), t2 = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), n2 = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), r2 = /* @__PURE__ */ oe("<div></div>");
const o2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Id(e, t) {
  ge(t, !0), at(e, o2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => yn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = r2();
  return Ft(a, 21, n, Oo, (s, l, u) => {
    var c = n2(), d = j(c);
    xe(d, "tabindex", u), d.__click = [Gm, i, l], d.__keydown = [Jm, i, l];
    var f = j(d);
    {
      var v = (w) => {
        var _ = Qm(), T = j(_);
        sr(T, {
          get target() {
            return g(l).icon;
          }
        }), W(_), A(w, _);
      };
      ke(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var y = B(f, 2);
    sr(y, {
      get target() {
        return g(l).title;
      }
    });
    var b = B(y, 2);
    W(d);
    var $ = B(d, 2);
    {
      var C = (w) => {
        var _ = e2(), T = j(_);
        sr(T, {
          get target() {
            return g(l).description;
          }
        }), W(_), A(w, _);
      };
      ke($, (w) => {
        g(l).description && w(C);
      });
    }
    var h = B($, 2);
    {
      var k = (w) => {
        var _ = t2(), T = j(_);
        sr(T, {
          get target() {
            return g(l).content;
          }
        }), W(_), A(w, _);
      };
      ke(h, (w) => {
        o().includes(g(l).key) && w(k);
      });
    }
    W(c), Te((w) => Vt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), W(a), Te(() => {
    xt(a, t.style), Vt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, a), he({
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
Ko(["click", "keydown"]);
de(Id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  ge(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = Ce(r);
  {
    var i = (s) => {
      var l = dt(), u = Ce(l);
      Er(u, () => n() ?? Ct), A(s, l);
    }, a = (s) => {
      var l = dt(), u = Ce(l);
      Es(u, n), A(s, l);
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
      n(s), p();
    }
  });
}
de(sr, { target: {} }, [], [], !0);
var i2 = (e, t, n) => t(g(n)), a2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), s2 = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), l2 = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), u2 = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), c2 = /* @__PURE__ */ oe("<!> <!>", 1), d2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), f2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), v2 = /* @__PURE__ */ oe("<div><!></div>");
function $n(e, t) {
  ge(t, !0);
  const n = (k, w = Ct) => {
    var _ = dt(), T = Ce(_);
    Ft(T, 19, w, (E, N) => `${N}_${E.value}`, (E, N) => {
      var H = l2(), z = Ce(H);
      z.__click = [i2, b, N];
      var I = j(z), D = j(I);
      {
        var Y = (P) => {
          var M = a2();
          A(P, M);
        };
        ke(D, (P) => {
          g(N).children && g(N).children.length > 0 && P(Y);
        });
      }
      W(I);
      var S = B(I, 2);
      sr(S, {
        get target() {
          return g(N).label;
        }
      }), W(z);
      var V = B(z, 2);
      {
        var x = (P) => {
          var M = s2(), L = j(M);
          n(L, () => g(N).children), W(M), A(P, M);
        };
        ke(V, (P) => {
          g(N).children && g(N).children.length > 0 && (l() || c().includes(g(N).value)) && P(x);
        });
      }
      A(E, H);
    }), A(k, _);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ Ht(t, [
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
    const k = [], w = (_) => {
      for (let T of _)
        a().length > 0 ? a().includes(T.value) && k.push(T) : s().includes(T.value) && k.push(T), T.children && T.children.length > 0 && w(T.children);
    };
    return w(r()), k;
  }), y;
  function b(k) {
    var w, _;
    if (k.children && k.children.length > 0) {
      (w = o()) == null || w(k);
      return;
    } else
      y == null || y.hide(), (_ = i()) == null || _(k);
  }
  var $ = v2();
  let C;
  var h = j($);
  return Ln(
    ii(h, {
      floating: (k) => {
        var w = u2(), _ = j(w);
        n(_, r), W(w), A(k, w);
      },
      children: (k, w) => {
        var _ = f2();
        let T;
        var E = j(_);
        Ft(
          E,
          23,
          () => g(v),
          (N, H) => `${H}_${N.value}`,
          (N, H, z) => {
            var I = dt(), D = Ce(I);
            {
              var Y = (V) => {
                var x = dt(), P = Ce(x);
                {
                  var M = (L) => {
                    sr(L, {
                      get target() {
                        return g(H).label;
                      }
                    });
                  };
                  ke(P, (L) => {
                    g(z) === 0 && L(M);
                  });
                }
                A(V, x);
              }, S = (V) => {
                var x = c2(), P = Ce(x);
                sr(P, {
                  get target() {
                    return g(H).label;
                  }
                });
                var M = B(P, 2);
                {
                  var L = (Z) => {
                    var q = Fe(",");
                    A(Z, q);
                  };
                  ke(M, (Z) => {
                    g(z) < g(v).length - 1 && Z(L);
                  });
                }
                A(V, x);
              };
              ke(D, (V) => {
                u() ? V(S, !1) : V(Y);
              });
            }
            A(N, I);
          },
          (N) => {
            var H = d2(), z = j(H, !0);
            W(H), Te(() => on(z, d())), A(N, H);
          }
        ), W(E), De(2), W(_), Te(() => T = xn(_, T, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), A(k, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => y = k,
    () => y
  ), W($), Te(() => C = xn($, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), A(e, $), he({
    get items() {
      return r();
    },
    set items(k) {
      r(k), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(k) {
      o(k), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect(k) {
      i(k), p();
    },
    get value() {
      return a();
    },
    set value(k = []) {
      a(k), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(k = []) {
      s(k), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(k = !0) {
      l(k), p();
    },
    get multiple() {
      return u();
    },
    set multiple(k = !1) {
      u(k), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(k = []) {
      c(k), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(k) {
      d(k), p();
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
const Bo = Math.min, jr = Math.max, Ui = Math.round, Vn = (e) => ({
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
function Vr(e) {
  return e.split("-")[0];
}
function ri(e) {
  return e.split("-")[1];
}
function Rd(e) {
  return e === "x" ? "y" : "x";
}
function Ws(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(Vr(e)) ? "y" : "x";
}
function js(e) {
  return Rd(oo(e));
}
function p2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ri(e), o = js(e), i = Ws(o);
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
  let i = y2(Vr(e), n === "start", r);
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
  const i = oo(t), a = js(t), s = Ws(a), l = Vr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  } = su(u, r, l), f = r, v = {}, y = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: $,
      fn: C
    } = s[b], {
      x: h,
      y: k,
      data: w,
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
        ...w
      }
    }, _ && y <= 50 && (y++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
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
  } = ni(t, e), y = Zd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], $ = Ji(await i.getClippingRect({
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
  }, w = Ji(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: ($.top - w.top + y.top) / k.y,
    bottom: (w.bottom - $.bottom + y.bottom) / k.y,
    left: ($.left - w.left + y.left) / k.x,
    right: (w.right - $.right + y.right) / k.x
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
    }, v = js(o), y = Ws(v), b = await a.getDimensions(u), $ = v === "y", C = $ ? "top" : "left", h = $ ? "bottom" : "right", k = $ ? "clientHeight" : "clientWidth", w = i.reference[y] + i.reference[v] - f[v] - i.floating[y], _ = f[v] - i.reference[v], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = T ? T[k] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(T))) && (E = s.floating[k] || i.floating[y]);
    const N = w / 2 - _ / 2, H = E / 2 - b[y] / 2 - 1, z = Bo(d[C], H), I = Bo(d[h], H), D = z, Y = E - b[y] - I, S = E / 2 - b[y] / 2 + N, V = as(D, S, Y), x = !l.arrow && ri(o) != null && S !== V && i.reference[y] / 2 - (S < D ? z : I) - b[y] / 2 < 0, P = x ? S < D ? S - D : S - Y : 0;
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: b = !0,
        ...$
      } = ni(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = Vr(o), h = oo(s), k = Vr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (k || !b ? [Gi(s)] : m2(s)), T = y !== "none";
      !f && T && _.push(...w2(s, b, y, w));
      const E = [s, ..._], N = await Yd(t, $), H = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && H.push(N[C]), d) {
        const S = p2(o, a, w);
        H.push(N[S[0]], N[S[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: H
      }], !H.every((S) => S <= 0)) {
        var I, D;
        const S = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, V = E[S];
        if (V)
          return {
            data: {
              index: S,
              overflows: z
            },
            reset: {
              placement: V
            }
          };
        let x = (D = z.filter((P) => P.overflows[0] <= 0).sort((P, M) => P.overflows[1] - M.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!x)
          switch (v) {
            case "bestFit": {
              var Y;
              const P = (Y = z.filter((M) => {
                if (T) {
                  const L = oo(M.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((L) => L > 0).reduce((L, Z) => L + Z, 0)]).sort((M, L) => M[1] - L[1])[0]) == null ? void 0 : Y[0];
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
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Vr(n), s = ri(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ni(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const _2 = function(e) {
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
      } = ni(e, t), u = {
        x: n,
        y: r
      }, c = await Yd(t, l), d = oo(Vr(o)), f = Rd(d);
      let v = u[f], y = u[d];
      if (i) {
        const $ = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[$], k = v - c[C];
        v = as(h, v, k);
      }
      if (a) {
        const $ = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = y + c[$], k = y - c[C];
        y = as(h, y, k);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: y
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
function Cn(e) {
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
  } = kn(e);
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
  const t = Ks(), n = Cn(e) ? kn(e) : e;
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
function qd(e) {
  const t = hr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && oi(t) ? t : qd(t);
}
function Wd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = qd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (ls(a), t.concat(a, a.visualViewport || [], oi(o) ? o : [], [])) : t.concat(o, Wd(o, []));
}
function ls(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jd(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ui(n) !== i || Ui(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Xd(e) {
  return Cn(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = Xd(e);
  if (!zn(t))
    return Vn(1);
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
const T2 = /* @__PURE__ */ Vn(0);
function Kd(e) {
  const t = an(e);
  return !Ks() || !t.visualViewport ? T2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function M2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function qo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Xd(e);
  let a = Vn(1);
  t && (r ? Cn(r) && (a = Xr(r)) : a = Xr(e));
  const s = M2(i, n, r) ? Kd(i) : Vn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = an(i), v = r && Cn(r) ? an(r) : r;
    let y = f, b = ls(y);
    for (; b && r && v !== y; ) {
      const $ = Xr(b), C = b.getBoundingClientRect(), h = kn(b), k = C.left + (b.clientLeft + parseFloat(h.paddingLeft)) * $.x, w = C.top + (b.clientTop + parseFloat(h.paddingTop)) * $.y;
      l *= $.x, u *= $.y, c *= $.x, d *= $.y, l += k, u += w, y = an(b), b = ls(y);
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
  return t ? t.left + n : qo(Gn(e)).left + n;
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
  }, u = Vn(1);
  const c = Vn(0), d = zn(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || oi(a)) && (l = wa(r)), zn(r))) {
    const v = qo(r);
    u = Xr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Fd(a, l, !0) : Vn(0);
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
  return kn(r).direction === "rtl" && (a += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function O2(e, t) {
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
function D2(e, t) {
  const n = qo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = zn(e) ? Xr(e) : Vn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = O2(e, n);
  else if (t === "document")
    r = N2(Gn(e));
  else if (Cn(t))
    r = D2(t, n);
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
  return n === t || !Cn(n) || io(n) ? !1 : kn(n).position === "fixed" || Ud(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wd(e, []).filter((s) => Cn(s) && fo(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; Cn(a) && !io(a); ) {
    const s = kn(a), l = Xs(a);
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
  const r = zn(t), o = Gn(t), i = n === "fixed", a = qo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || oi(o)) && (s = wa(t)), r) {
      const f = qo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Fs(o));
  const u = o && !r && !i ? Fd(o, s) : Vn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function za(e) {
  return kn(e).position === "static";
}
function cu(e, t) {
  if (!zn(e) || kn(e).position === "fixed")
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
      if (Cn(o) && !za(o))
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
  return kn(e).direction === "rtl";
}
const Y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: V2,
  getDocumentElement: Gn,
  getClippingRect: z2,
  getOffsetParent: Gd,
  getElementRects: R2,
  getClientRects: H2,
  getDimensions: A2,
  getScale: Xr,
  isElement: Cn,
  isRTL: Z2
}, B2 = _2, q2 = S2, W2 = C2, j2 = $2, X2 = (e, t, n) => {
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
    X2(e, u, {
      placement: r,
      middleware: [
        B2(o),
        // 手动偏移配置
        W2(i),
        //自动翻转
        q2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [j2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: k, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: _, y: T } = w.arrow, E = {
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
  function y() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(C) {
    C.stopPropagation(), f ? y() : v();
  }
  function $(C) {
    u.contains(C.target) || y();
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
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var F2 = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ii(e, t) {
  ge(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
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
  var u = F2(), c = j(u), d = j(c);
  Er(d, n), W(c), Ln(c, (y) => i = y, () => i);
  var f = B(c, 2), v = j(f);
  return Er(v, r), W(f), Ln(f, (y) => a = y, () => a), W(u), A(e, u), he({
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
  });
}
de(ii, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function it(e, t) {
  ge(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = dt(), s = Ce(a);
  return qv(s, () => `h${r()}`, !1, (l, u) => {
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
de(it, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
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
  const e = tt();
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
  const { nodes: e, nodeLookup: t } = tt();
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
var ey = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ty = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ny = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), ry = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), oy = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const iy = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function En(e, t) {
  ge(t, !0), at(e, iy);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: y, getNode: b } = Gt(), $ = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: C } = J2(), { copyNode: h } = Q2(), k = pr(), w = () => {
    var x;
    (x = k.onNodeExecute) == null || x.call(k, b(r()));
  };
  var _ = oy(), T = Ce(_);
  {
    var E = (x) => {
      Ld(x, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (P, M) => {
          var L = ry(), Z = j(L);
          {
            var q = (ie) => {
              nt(ie, {
                class: "tf-node-toolbar-item",
                onclick: w,
                children: (ve, me) => {
                  var ue = ey();
                  A(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ke(Z, (ie) => {
              s() && ie(q);
            });
          }
          var K = B(Z, 2);
          {
            var se = (ie) => {
              nt(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  h(r());
                },
                children: (ve, me) => {
                  var ue = ty();
                  A(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ke(K, (ie) => {
              l() && ie(se);
            });
          }
          var U = B(K, 2);
          {
            var X = (ie) => {
              nt(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ve, me) => {
                  var ue = ny();
                  A(ve, ue);
                },
                $$slots: { default: !0 }
              });
            };
            ke(U, (ie) => {
              u() && ie(X);
            });
          }
          W(L), A(P, L);
        },
        $$slots: { default: !0 }
      });
    };
    ke(T, (x) => {
      (s() || l() || u()) && x(E);
    });
  }
  var N = B(T, 2), H = B(j(N), 2), z = j(H);
  Id(z, {
    items: $,
    activeKeys: v,
    onChange: (x, P) => {
      var M;
      y(r(), { expand: P == null ? void 0 : P.includes("key") }), (M = f()) == null || M(P != null && P.includes("key") ? "key" : "");
    }
  }), W(H), W(N);
  var I = B(N, 2);
  {
    var D = (x) => {
      gr(x, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ke(I, (x) => {
      d() && x(D);
    });
  }
  var Y = B(I, 2);
  {
    var S = (x) => {
      gr(x, {
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
      n(x), p();
    },
    get id() {
      return r();
    },
    set id(x = "") {
      r(x), p();
    },
    get icon() {
      return o();
    },
    set icon(x) {
      o(x), p();
    },
    get handle() {
      return i();
    },
    set handle(x) {
      i(x), p();
    },
    get children() {
      return a();
    },
    set children(x) {
      a(x), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(x = !0) {
      s(x), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(x = !0) {
      l(x), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(x = !0) {
      u(x), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(x = !0) {
      c(x), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(x = !0) {
      d(x), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(x) {
      f(x), p();
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
var sy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ly = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), uy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qd(e, t) {
  ge(t, !0), at(e, cy);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = St(), l = /* @__PURE__ */ Oe(() => Dr(s)), u = /* @__PURE__ */ Oe(() => {
    var H, z;
    return {
      ...i(),
      ...(z = (H = o()) == null ? void 0 : H.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Gt(), d = (H, z) => {
    c(s, (I) => {
      let D = I.data.parameters;
      return D[a()][H] = z, { parameters: D };
    });
  }, f = (H) => {
    const z = H.target.value;
    d("name", z);
  }, v = (H) => {
    const z = H.target.checked;
    d("required", z);
  }, y = (H) => {
    const z = H.value;
    z && d("dataType", z);
  };
  let b;
  const $ = () => {
    c(s, (H) => {
      let z = H.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), b == null || b.hide();
  };
  var C = uy(), h = Ce(C), k = j(h);
  Dt(k, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), W(h);
  var w = B(h, 2), _ = j(w);
  zd(_, {
    get checked() {
      return g(u).required;
    },
    onchange: v
  }), W(w);
  var T = B(w, 2), E = j(T);
  Ln(
    ii(E, {
      placement: "bottom",
      floating: (H) => {
        var z = sy(), I = j(z), D = B(j(I));
        const Y = /* @__PURE__ */ Oe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        $n(D, {
          items: Jd,
          style: "width: 100%",
          onSelect: y,
          get value() {
            return g(Y);
          }
        }), W(I);
        var S = B(I, 2), V = B(j(S));
        Ut(V, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (Z) => {
            const q = Z.target.value;
            d("defaultValue", q);
          }
        }), W(S);
        var x = B(S, 2), P = B(j(x));
        Ut(P, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (Z) => {
            const q = Z.target.value;
            d("description", q);
          }
        }), W(x);
        var M = B(x, 2), L = j(M);
        nt(L, {
          onclick: $,
          children: (Z, q) => {
            De();
            var K = Fe("删除");
            A(Z, K);
          },
          $$slots: { default: !0 }
        }), W(M), W(z), A(H, z);
      },
      children: (H, z) => {
        nt(H, {
          class: "input-btn-more",
          children: (I, D) => {
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
  ), W(T), A(e, C);
  var N = he({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), p();
    },
    get index() {
      return a();
    },
    set index(H) {
      a(H), p();
    }
  });
  return r(), N;
}
de(Qd, { parameter: {}, index: {} }, [], [], !0);
var dy = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), fy = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), vy = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const gy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function ef(e, t) {
  ge(t, !0), at(e, gy);
  const [n, r] = ft(), o = () => ee(g(a), "$node", n);
  let i = St(), a = /* @__PURE__ */ Oe(() => Dr(i)), s = /* @__PURE__ */ Oe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = vy(), u = j(l);
  {
    var c = (f) => {
      var v = dy();
      De(4), A(f, v);
    };
    ke(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Ft(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, y) => {
      Qd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(y);
        }
      });
    },
    (f) => {
      var v = fy();
      A(f, v);
    }
  ), W(l), A(e, l), he(), r();
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
var hy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const yy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function nf(e, t) {
  ge(t, !0), at(e, yy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
      var l = my(), u = Ce(l), c = j(u);
      it(c, {
        level: 3,
        children: (v, y) => {
          De();
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
        children: (v, y) => {
          var b = py();
          A(v, b);
        },
        $$slots: { default: !0 }
      }), W(u);
      var f = B(u, 2);
      ef(f, {}), A(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
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
  const t = St(), n = Dr(t), { nodes: r, edges: o } = tt();
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
var by = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), xy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  ge(t, !0), at(e, $y);
  const [n, r] = ft(), o = () => ee(g(c), "$node", n), i = () => ee(w, "$selectItems", n);
  hn(() => {
    g(d).refType || C({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = St(), c = /* @__PURE__ */ Oe(() => Dr(u)), d = /* @__PURE__ */ Oe(() => {
    var V;
    return {
      ...a(),
      ...(V = o()) == null ? void 0 : V.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Gt(), v = (V, x) => {
    f(u, (P) => {
      let M = P.data[l()];
      return M[s()] = { ...M[s()], [V]: x }, { [l()]: M };
    });
  }, y = (V) => {
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
  }, w = wy();
  var _ = xy(), T = Ce(_), E = j(T);
  Dt(E, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), W(T);
  var N = B(T, 2), H = j(N);
  {
    var z = (V) => {
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
          const L = /* @__PURE__ */ Oe(() => [g(d).ref]);
          $n(M, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(L);
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
    ke(H, (V) => {
      g(d).refType === "fixed" ? V(z) : V(I, !1);
    });
  }
  W(N);
  var D = B(N, 2), Y = j(D);
  Ln(
    ii(Y, {
      placement: "bottom",
      floating: (V) => {
        var x = by(), P = j(x), M = B(j(P));
        const L = /* @__PURE__ */ Oe(() => g(d).refType ? [g(d).refType] : []);
        $n(M, {
          items: ay,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: C
        }), W(P);
        var Z = B(P, 2), q = B(j(Z));
        Ut(q, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ie) => {
            const ve = ie.target.value;
            v("defaultValue", ve);
          }
        }), W(Z);
        var K = B(Z, 2), se = B(j(K));
        Ut(se, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ie) => {
            const ve = ie.target.value;
            v("description", ve);
          }
        }), W(K);
        var U = B(K, 2), X = j(U);
        nt(X, {
          onclick: k,
          children: (ie, ve) => {
            De();
            var me = Fe("删除");
            A(ie, me);
          },
          $$slots: { default: !0 }
        }), W(U), W(x), A(V, x);
      },
      children: (V, x) => {
        ba(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => h = V,
    () => h
  ), W(D), A(e, _);
  var S = he({
    get parameter() {
      return a();
    },
    set parameter(V) {
      a(V), p();
    },
    get index() {
      return s();
    },
    set index(V) {
      s(V), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(V) {
      l(V), p();
    }
  });
  return r(), S;
}
de(of, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  ge(t, !0), at(e, Sy);
  const [n, r] = ft(), o = () => ee(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = St(), l = /* @__PURE__ */ Oe(() => Dr(s)), u = /* @__PURE__ */ Oe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = _y(), d = j(c);
  {
    var f = (b) => {
      var $ = Cy();
      De(4), A(b, $);
    };
    ke(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = B(d, 2);
  Ft(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, $, C) => {
      of(b, {
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
      var $ = ky(), C = j($, !0);
      W($), Te(() => on(C, i())), A(b, $);
    }
  ), W(c), A(e, c);
  var y = he({
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
  return r(), y;
}
de(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Py = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const My = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function af(e, t) {
  ge(t, !0), at(e, My);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
        var l = Ty(), u = Ce(l), c = j(u);
        it(c, {
          level: 3,
          children: (v, y) => {
            De();
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
          children: (v, y) => {
            var b = Py();
            A(v, b);
          },
          $$slots: { default: !0 }
        }), W(u);
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
      n(a), p();
    }
  });
}
de(af, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Hy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), Ny = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Oy = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Dy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  ge(t, !0), at(e, Dy);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = St(), u = /* @__PURE__ */ Oe(() => Dr(l)), c = /* @__PURE__ */ Oe(() => {
    var P;
    let M = (P = o()) == null ? void 0 : P.data[s()], L;
    if (M && a().length > 0) {
      let Z = M;
      for (let q = 0; q < a().length; q++) {
        const K = a()[q];
        q == a().length - 1 ? L = Z[K] : Z = Z[K].children;
      }
    }
    return { ...i(), ...L };
  });
  const { updateNodeData: d } = Gt(), f = (P, M) => {
    d(l, (L) => {
      const Z = L.data[s()];
      if (Z && a().length > 0) {
        let q = Z;
        for (let K = 0; K < a().length; K++) {
          const se = a()[K];
          K == a().length - 1 ? q[se] = { ...q[se], [P]: M } : q = Z[se].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (P) => {
    const M = P.target.value;
    f("name", M);
  }, y = (P) => {
    const M = P.value;
    f("dataType", M);
  };
  let b;
  const $ = () => {
    d(l, (P) => {
      let M = P.data[s()];
      if (M && a().length > 0) {
        let L = M;
        for (let Z = 0; Z < a().length; Z++) {
          const q = a()[Z];
          Z == a().length - 1 ? L.splice(q, 1) : L = L[q].children;
        }
      }
      return { [s()]: [...M] };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (P) => {
      let M = P.data[s()];
      if (M && a().length > 0) {
        let L = M;
        for (let Z = 0; Z < a().length; Z++) {
          const q = a()[Z];
          Z == a().length - 1 ? L[q].children ? L[q].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : L[q].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[q].children;
        }
      }
      return { [s()]: [...M] };
    });
  };
  var h = Oy(), k = Ce(h), w = j(k);
  {
    var _ = (P) => {
      var M = dt(), L = Ce(M);
      Ft(L, 17, a, Oo, (Z, q) => {
        De();
        var K = Fe(" ");
        A(Z, K);
      }), A(P, M);
    };
    ke(w, (P) => {
      a().length > 1 && P(_);
    });
  }
  var T = B(w, 2);
  const E = /* @__PURE__ */ Oe(() => g(c).nameDisabled === !0);
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
  }), W(k);
  var N = B(k, 2), H = j(N);
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
    onSelect: y
  });
  var D = B(H, 2);
  {
    var Y = (P) => {
      nt(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (M, L) => {
          var Z = Vy();
          A(M, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ke(D, (P) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && P(Y);
    });
  }
  W(N);
  var S = B(N, 2), V = j(S);
  Ln(
    ii(V, {
      placement: "bottom",
      floating: (P) => {
        var M = Ny(), L = j(M), Z = B(j(L));
        const q = /* @__PURE__ */ Oe(() => g(c).defaultValue || "");
        Ut(Z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(q);
          },
          onchange: (ve) => {
            const me = ve.target.value;
            f("defaultValue", me);
          }
        }), W(L);
        var K = B(L, 2), se = B(j(K));
        const U = /* @__PURE__ */ Oe(() => g(c).description || "");
        Ut(se, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(U);
          },
          onchange: (ve) => {
            const me = ve.target.value;
            f("description", me);
          }
        }), W(K);
        var X = B(K, 2);
        {
          var ie = (ve) => {
            var me = Hy(), ue = j(me);
            nt(ue, {
              onclick: $,
              children: (Ve, le) => {
                De();
                var ce = Fe("删除");
                A(Ve, ce);
              },
              $$slots: { default: !0 }
            }), W(me), A(ve, me);
          };
          ke(X, (ve) => {
            g(c).deleteDisabled !== !0 && ve(ie);
          });
        }
        W(M), A(P, M);
      },
      children: (P, M) => {
        ba(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), W(S), A(e, h);
  var x = he({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), p();
    },
    get position() {
      return a();
    },
    set position(P) {
      a(P), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(P) {
      s(P), p();
    }
  });
  return r(), x;
}
de(sf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ oe("<!> <!>", 1), zy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Iy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  ge(t, !0), at(e, Ry);
  const [n, r] = ft(), o = () => ee(g(u), "$node", n), i = ($, C = Ct, h = Ct) => {
    var k = dt(), w = Ce(k);
    Ft(
      w,
      19,
      C,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, T, E) => {
        var N = Ly(), H = Ce(N);
        const z = /* @__PURE__ */ Oe(() => [...h(), g(E)]);
        sf(H, {
          get parameter() {
            return g(T);
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
          var D = (Y) => {
            var S = /* @__PURE__ */ be(() => [...h(), g(E)]);
            i(Y, () => g(T).children, () => g(S));
          };
          ke(I, (Y) => {
            g(T).children && Y(D);
          });
        }
        A(_, N);
      },
      (_) => {
        var T = dt(), E = Ce(T);
        {
          var N = (H) => {
            var z = zy(), I = j(z, !0);
            W(z), Te(() => on(I, a())), A(H, z);
          };
          ke(E, (H) => {
            h().length === 0 && H(N);
          });
        }
        A(_, T);
      }
    ), A($, k);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = St(), u = /* @__PURE__ */ Oe(() => Dr(l)), c = /* @__PURE__ */ Oe(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[s()]) || []];
  });
  var d = Iy(), f = j(d);
  {
    var v = ($) => {
      var C = Ay();
      De(4), A($, C);
    };
    ke(f, ($) => {
      g(c).length !== 0 && $(v);
    });
  }
  var y = B(f, 2);
  i(y, () => g(c) || [], () => []), W(d), A(e, d);
  var b = he({
    get noneParameterText() {
      return a();
    },
    set noneParameterText($ = "无输出参数") {
      a($), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName($ = "outputDefs") {
      s($), p();
    }
  });
  return r(), b;
}
de(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Yy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), qy = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Wy = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), jy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ oe('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  ge(t, !0), at(e, Ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ jt(yn([]));
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
        var d = Xy(), f = Ce(d), v = j(f);
        it(v, {
          level: 3,
          children: (ce, ze) => {
            De();
            var Ne = Fe("输入参数");
            A(ce, Ne);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        nt(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ce, ze) => {
            var Ne = Yy();
            A(ce, Ne);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        it($, {
          level: 3,
          mt: "10px",
          children: (ce, ze) => {
            De();
            var Ne = Fe("模型设置");
            A(ce, Ne);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ Oe(() => n().llmId ? [n().llmId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ce) => {
            const ze = ce.value;
            l(o, () => ({ llmId: ze }));
          },
          get value() {
            return g(k);
          }
        });
        var w = B(h, 2);
        ba(w, {}), W(C);
        var _ = B(C, 4), T = j(_), E = j(T), N = j(E);
        W(E);
        var H = B(E, 2);
        So(H), H.__input = [By, l, o], W(T), W(_);
        var z = B(_, 2), I = j(z), D = j(I), Y = j(D);
        W(D);
        var S = B(D, 2);
        So(S), S.__input = [qy, l, o], W(I), W(z);
        var V = B(z, 2), x = j(V), P = j(x), M = j(P);
        W(P);
        var L = B(P, 2);
        So(L), L.__input = [Wy, l, o], W(x), W(V);
        var Z = B(V, 4), q = j(Z);
        const K = /* @__PURE__ */ Oe(() => n().systemPrompt || "");
        Ut(q, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(K);
          },
          oninput: (ce) => {
            l(o, { systemPrompt: ce.target.value });
          }
        }), W(Z);
        var se = B(Z, 4), U = j(se);
        const X = /* @__PURE__ */ Oe(() => n().userPrompt || "");
        Ut(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (ce) => {
            l(o, { userPrompt: ce.target.value });
          }
        }), W(se);
        var ie = B(se, 2), ve = j(ie);
        it(ve, {
          level: 3,
          mt: "10px",
          children: (ce, ze) => {
            De();
            var Ne = Fe("输出参数");
            A(ce, Ne);
          },
          $$slots: { default: !0 }
        });
        var me = B(ve, 2);
        const ue = /* @__PURE__ */ Oe(() => n().outType ? [n().outType] : []);
        $n(me, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ce) => {
            const ze = ce.value;
            l(o, () => ({ outType: ze }));
          },
          get value() {
            return g(ue);
          }
        });
        var Ve = B(me, 2);
        nt(Ve, {
          class: "input-btn-more",
          style: "margin-left: 10px",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ce, ze) => {
            var Ne = jy();
            A(ce, Ne);
          },
          $$slots: { default: !0 }
        }), W(ie);
        var le = B(ie, 2);
        Jn(le, {}), Te(() => {
          on(N, `Temperature: ${n().temperature ?? 0.5}`), Ea(H, n().temperature ?? 0.5), on(Y, `Top P: ${n().topP ?? 0.9}`), Ea(S, n().topP ?? 0.9), on(M, `Top K: ${n().topK ?? 50}`), Ea(L, n().topK ?? 50);
        }), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
Ko(["input"]);
de(lf, { data: {} }, [], [], !0);
var Fy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Uy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Qy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  ge(t, !0), at(e, Qy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
        var c = Jy(), d = Ce(c), f = j(d);
        it(f, {
          level: 3,
          children: (z, I) => {
            De();
            var D = Fe("输入参数");
            A(z, D);
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
            var D = Uy();
            A(z, D);
          },
          $$slots: { default: !0 }
        }), W(d);
        var y = B(d, 2);
        nn(y, {});
        var b = B(y, 2);
        it(b, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            De();
            var D = Fe("代码");
            A(z, D);
          },
          $$slots: { default: !0 }
        });
        var $ = B(b, 4), C = j($);
        const h = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : ["qlexpress"]);
        $n(C, {
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
        }), W($);
        var k = B($, 4), w = j(k);
        const _ = /* @__PURE__ */ Oe(() => n().code || "");
        Ut(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(_);
          }
        }), W(k);
        var T = B(k, 2), E = j(T);
        it(E, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            De();
            var D = Fe("输出参数");
            A(z, D);
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
            var D = Gy();
            A(z, D);
          },
          $$slots: { default: !0 }
        }), W(T);
        var H = B(T, 2);
        Jn(H, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
de(uf, { data: {} }, [], [], !0);
var ew = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), tw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const rw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  ge(t, !0), at(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
        var u = nw(), c = Ce(u), d = j(c);
        it(d, {
          level: 3,
          children: (_, T) => {
            De();
            var E = Fe("输入参数");
            A(_, E);
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
          children: (_, T) => {
            var E = tw();
            A(_, E);
          },
          $$slots: { default: !0 }
        }), W(c);
        var v = B(c, 2);
        nn(v, {});
        var y = B(v, 2);
        it(y, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            De();
            var E = Fe("代码");
            A(_, E);
          },
          $$slots: { default: !0 }
        });
        var b = B(y, 4), $ = j(b);
        const C = /* @__PURE__ */ Oe(() => n().template || "");
        Ut($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            a(o, () => ({ template: _.target.value }));
          },
          get value() {
            return g(C);
          }
        }), W(b);
        var h = B(b, 2), k = j(h);
        it(k, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            De();
            var E = Fe("输出参数");
            A(_, E);
          },
          $$slots: { default: !0 }
        }), W(h);
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
      n(s), p();
    }
  });
}
de(cf, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), iw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ oe('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ oe('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), dw = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), fw = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), vw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function df(e, t) {
  ge(t, !0), at(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
        var c = gw(), d = Ce(c), f = j(d), v = j(f);
        const y = /* @__PURE__ */ Oe(() => n().method ? [n().method] : ["get"]);
        $n(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const fe = ae.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return g(y);
          }
        }), W(f);
        var b = B(f, 2), $ = j(b);
        const C = /* @__PURE__ */ Oe(() => n().url || "");
        Dt($, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            s(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return g(C);
          }
        }), W(b), W(d);
        var h = B(d, 2), k = j(h);
        it(k, {
          level: 3,
          children: (ae, fe) => {
            De();
            var Se = Fe("Http 头信息");
            A(ae, Se);
          },
          $$slots: { default: !0 }
        });
        var w = B(k, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ae, fe) => {
            var Se = iw();
            A(ae, Se);
          },
          $$slots: { default: !0 }
        }), W(h);
        var _ = B(h, 2);
        nn(_, { dataKeyName: "headers" });
        var T = B(_, 2), E = j(T);
        it(E, {
          level: 3,
          children: (ae, fe) => {
            De();
            var Se = Fe("参数");
            A(ae, Se);
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
          children: (ae, fe) => {
            var Se = aw();
            A(ae, Se);
          },
          $$slots: { default: !0 }
        }), W(T);
        var H = B(T, 2);
        nn(H, { dataKeyName: "urlParameters" });
        var z = B(H, 2);
        it(z, {
          level: 3,
          mt: "10px",
          children: (ae, fe) => {
            De();
            var Se = Fe("Body");
            A(ae, Se);
          },
          $$slots: { default: !0 }
        });
        var I = B(z, 2), D = j(I), Y = j(D);
        const S = /* @__PURE__ */ Oe(() => !n().bodyType);
        Dt(Y, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (ae) => {
            var fe;
            (fe = ae.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), De(), W(D);
        var V = B(D, 2), x = j(V);
        const P = /* @__PURE__ */ Oe(() => n().bodyType === "form-data");
        Dt(x, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (ae) => {
            var fe;
            (fe = ae.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), De(), W(V);
        var M = B(V, 2), L = j(M);
        const Z = /* @__PURE__ */ Oe(() => n().bodyType === "x-www-form-urlencoded");
        Dt(L, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Z);
          },
          onchange: (ae) => {
            var fe;
            (fe = ae.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), De(), W(M);
        var q = B(M, 2), K = j(q);
        const se = /* @__PURE__ */ Oe(() => n().bodyType === "json");
        Dt(K, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(se);
          },
          onchange: (ae) => {
            var fe;
            (fe = ae.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), De(), W(q);
        var U = B(q, 2), X = j(U);
        const ie = /* @__PURE__ */ Oe(() => n().bodyType === "raw");
        Dt(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ie);
          },
          onchange: (ae) => {
            var fe;
            (fe = ae.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), De(), W(U), W(I);
        var ve = B(I, 2);
        {
          var me = (ae) => {
            var fe = lw(), Se = Ce(fe), Xe = j(Se);
            it(Xe, {
              level: 3,
              children: (st, ne) => {
                De();
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
              children: (st, ne) => {
                var Ie = sw();
                A(st, Ie);
              },
              $$slots: { default: !0 }
            }), W(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromData" }), A(ae, fe);
          };
          ke(ve, (ae) => {
            n().bodyType === "form-data" && ae(me);
          });
        }
        var ue = B(ve, 2);
        {
          var Ve = (ae) => {
            var fe = cw(), Se = Ce(fe), Xe = j(Se);
            it(Xe, {
              level: 3,
              children: (st, ne) => {
                De();
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
              children: (st, ne) => {
                var Ie = uw();
                A(st, Ie);
              },
              $$slots: { default: !0 }
            }), W(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), A(ae, fe);
          };
          ke(ue, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(Ve);
          });
        }
        var le = B(ue, 2);
        {
          var ce = (ae) => {
            var fe = dw(), Se = j(fe);
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
            }), W(fe), A(ae, fe);
          };
          ke(le, (ae) => {
            n().bodyType === "json" && ae(ce);
          });
        }
        var ze = B(le, 2);
        {
          var Ne = (ae) => {
            var fe = fw(), Se = j(fe);
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
            }), W(fe), A(ae, fe);
          };
          ke(ze, (ae) => {
            n().bodyType === "raw" && ae(Ne);
          });
        }
        var Ze = B(ze, 2), te = j(Ze);
        it(te, {
          level: 3,
          mt: "10px",
          children: (ae, fe) => {
            De();
            var Se = Fe("输出参数");
            A(ae, Se);
          },
          $$slots: { default: !0 }
        });
        var Ue = B(te, 2);
        nt(Ue, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ae, fe) => {
            var Se = vw();
            A(ae, Se);
          },
          $$slots: { default: !0 }
        }), W(Ze);
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
      n(l), p();
    }
  });
}
de(df, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), mw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  ge(t, !0), at(e, ww);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ jt(yn([]));
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
        var d = yw(), f = Ce(d), v = j(f);
        it(v, {
          level: 3,
          children: (D, Y) => {
            De();
            var S = Fe("输入参数");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        nt(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, Y) => {
            var S = mw();
            A(D, S);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        it($, {
          level: 3,
          mt: "10px",
          children: (D, Y) => {
            De();
            var S = Fe("知识库设置");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ Oe(() => n().knowledgeId ? [n().knowledgeId] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const Y = D.value;
            l(o, () => ({ knowledgeId: Y }));
          },
          get value() {
            return g(k);
          }
        }), W(C);
        var w = B(C, 4), _ = j(w);
        Dt(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const Y = D.target.value;
            l(o, () => ({ keyword: Y }));
          }
        }), W(w);
        var T = B(w, 4), E = j(T);
        const N = /* @__PURE__ */ Oe(() => n().limit || "");
        Dt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const Y = D.target.value;
            l(o, () => ({ limit: Y }));
          },
          get value() {
            return g(N);
          }
        }), W(T);
        var H = B(T, 2), z = j(H);
        it(z, {
          level: 3,
          mt: "10px",
          children: (D, Y) => {
            De();
            var S = Fe("输出参数");
            A(D, S);
          },
          $$slots: { default: !0 }
        }), W(H);
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
      n(u), p();
    }
  });
}
de(ff, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), xw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  ge(t, !0), at(e, Cw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = Rn(), a = pr();
  let s = /* @__PURE__ */ jt(yn([]));
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
        var d = $w(), f = Ce(d), v = j(f);
        it(v, {
          level: 3,
          children: (I, D) => {
            De();
            var Y = Fe("输入参数");
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        nt(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, D) => {
            var Y = xw();
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), W(f);
        var b = B(f, 2);
        nn(b, {});
        var $ = B(b, 2);
        it($, {
          level: 3,
          mt: "10px",
          children: (I, D) => {
            De();
            var Y = Fe("搜索引擎设置");
            A(I, Y);
          },
          $$slots: { default: !0 }
        });
        var C = B($, 4), h = j(C);
        const k = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : []);
        $n(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (I) => {
            const D = I.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return g(k);
          }
        }), W(C);
        var w = B(C, 4), _ = j(w);
        Dt(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const D = I.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), W(w);
        var T = B(w, 4), E = j(T);
        Dt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const D = I.target.value;
            l(o, () => ({ limit: D }));
          }
        }), W(T);
        var N = B(T, 2), H = j(N);
        it(H, {
          level: 3,
          mt: "10px",
          children: (I, D) => {
            De();
            var Y = Fe("输出参数");
            A(I, Y);
          },
          $$slots: { default: !0 }
        }), W(N);
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
      n(u), p();
    }
  });
}
de(vf, { data: {} }, [], [], !0);
var kw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), _w = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Ew = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gf(e, t) {
  ge(t, !0), at(e, Ew);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
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
        var s = kw();
        A(a, s);
      },
      handle: (a) => {
        gr(a, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Sw(), u = Ce(l), c = j(u);
        it(c, {
          level: 3,
          children: ($, C) => {
            De();
            var h = Fe("循环变量");
            A($, h);
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
          children: ($, C) => {
            var h = _w();
            A($, h);
          },
          $$slots: { default: !0 }
        }), W(u);
        var f = B(u, 2);
        nn(f, {});
        var v = B(f, 2), y = j(v);
        it(y, {
          level: 3,
          mt: "10px",
          children: ($, C) => {
            De();
            var h = Fe("输出参数");
            A($, h);
          },
          $$slots: { default: !0 }
        }), W(v);
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
      n(a), p();
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
var Tw = /* @__PURE__ */ oe("<!> ", 1);
function us(e, t) {
  ge(t, !0);
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
      var u = Tw(), c = Ce(u);
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
var Mw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Vw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Hw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function hf(e, t) {
  ge(t, !0);
  let n = /* @__PURE__ */ jt("base"), r = /* @__PURE__ */ jt("show");
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
    const $ = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of $)
      a.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = Hw(), u = j(l), c = j(u), d = j(c);
  Ad(d, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      G(n, $.value.toString(), !0);
    }
  }), W(c);
  var f = B(c, 2), v = j(f);
  Ft(v, 21, () => o, Oo, ($, C) => {
    us($, bt(() => g(C)));
  }), W(v);
  var y = B(v, 2);
  Ft(y, 21, () => a, Oo, ($, C) => {
    us($, bt(() => g(C)));
  }), W(y), W(f), W(u);
  var b = B(u, 2);
  nt(b, {
    onclick: () => {
      G(r, g(r) ? "" : "show", !0);
    },
    children: ($, C) => {
      var h = dt(), k = Ce(h);
      {
        var w = (T) => {
          var E = Mw();
          A(T, E);
        }, _ = (T) => {
          var E = Vw();
          A(T, E);
        };
        ke(k, (T) => {
          g(r) === "show" ? T(w) : T(_, !1);
        });
      }
      A($, h);
    },
    $$slots: { default: !0 }
  }), W(l), Te(() => {
    Vt(l, 1, `tf-toolbar ${g(r) ?? ""}`), xt(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), xt(y, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), A(e, l), he();
}
de(hf, {}, [], [], !0);
const Nw = () => {
  const { nodeLookup: e } = tt();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Ow = () => {
  const { nodes: e } = tt();
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
}, Dw = () => {
  const { edges: e } = tt();
  return {
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var Lw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Rw = /* @__PURE__ */ oe("<!> <div></div> <!>", 1);
const Zw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function pf(e, t) {
  var n;
  ge(t, !0), at(e, Zw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ Ht(t, [
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
        var y = dt(), b = Ce(y);
        Es(b, () => c.icon), A(v, y);
      },
      children: (v, y) => {
        var b = Rw(), $ = Ce(b);
        {
          var C = (_) => {
            var T = zw(), E = Ce(T), N = j(E);
            it(N, {
              level: 3,
              children: (I, D) => {
                De();
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
              children: (I, D) => {
                var Y = Lw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), W(E);
            var z = B(E, 2);
            nn(z, {}), A(_, T);
          };
          ke($, (_) => {
            c.parametersEnable !== !1 && _(C);
          });
        }
        var h = B($, 2);
        Ln(h, (_) => d = _, () => d);
        var k = B(h, 2);
        {
          var w = (_) => {
            var T = Iw(), E = Ce(T), N = j(E);
            it(N, {
              level: 3,
              mt: "10px",
              children: (I, D) => {
                De();
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
              children: (I, D) => {
                var Y = Aw();
                A(I, Y);
              },
              $$slots: { default: !0 }
            }), W(E);
            var z = B(E, 2);
            Jn(z, {}), A(_, T);
          };
          ke(k, (_) => {
            c.outputDefsEnable !== !1 && _(w);
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
      r(v), p();
    }
  });
}
de(pf, { data: {} }, [], [], !0);
var Yw = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Bw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), qw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Ww = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function mf(e, t) {
  ge(t, !0), at(e, Ww);
  const [n, r] = ft(), o = () => ee(T, "$nodes", n), i = () => ee(E, "$edges", n), a = () => ee(N, "$viewport", n), s = m(t, "onInit", 7), l = Gt();
  s()(l);
  let u = /* @__PURE__ */ jt(!1);
  const c = (x) => {
    x.preventDefault(), x.dataTransfer && (x.dataTransfer.dropEffect = "move");
  }, d = (x) => {
    var P;
    x.preventDefault();
    const M = l.screenToFlowPosition({
      x: x.clientX - 250,
      y: x.clientY - 100
    }), L = (P = x.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), Z = L ? JSON.parse(L) : {}, q = {
      id: `node_${ao()}`,
      position: M,
      data: {},
      ...Z
    };
    _i.addNode(q), _i.selectNodeOnly(q.id);
  }, { getNode: f } = Nw(), v = (x) => {
    const P = f(x.source), M = f(x.target);
    if (x.sourceHandle === "loop_handle" || P.parentId) {
      const L = l.getEdges();
      for (let Z of L)
        if (Z.target === x.target) {
          const q = f(Z.source);
          if (x.sourceHandle === "loop_handle" && q.parentId !== P.id || P.parentId && q.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && M.parentId && M.parentId !== P.id);
  }, { ensureParentInNodesBefore: y } = Ow(), b = (x, P) => {
    if (!P.isValid)
      return;
    const M = P.toNode;
    if (M.parentId)
      return;
    const L = P.fromNode, Z = P.fromHandle, q = { position: { ...M.position } };
    if (Z.id === "loop_handle" ? q.parentId = L.id : L.parentId && (q.parentId = L.parentId), q.parentId) {
      const K = f(q.parentId);
      q.position = {
        x: M.position.x - K.position.x,
        y: M.position.y - K.position.y
      }, y(q.parentId, M.id), l.updateNode(M.id, q);
    }
  }, { getEdgesByTarget: $ } = Dw(), C = (x) => {
    x.edges.forEach((P) => {
      const M = f(P.target);
      if (M.parentId) {
        const L = $(P.target), Z = f(M.parentId);
        if (L.length === 0)
          l.updateNode(M.id, {
            parentId: void 0,
            position: {
              x: M.position.x + Z.position.x,
              y: M.position.y + Z.position.y
            }
          });
        else {
          let q = !1;
          for (let K = 0; K < L.length; K++) {
            const se = L[K], U = f(se.source);
            if (U.parentId || U.type === "loopNode") {
              q = !0;
              break;
            }
          }
          q || l.updateNode(M.id, {
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
  }, w = {}, _ = pr().customNodes;
  if (_)
    for (let x of Object.keys(_))
      w[x] = pf;
  const { nodes: T, edges: E, viewport: N } = tt(), H = pr().onDataChange;
  H && (T.subscribe(() => {
    H(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), E.subscribe(() => {
    H(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), N.subscribe(() => {
    H(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var z = qw(), I = j(z);
  const D = /* @__PURE__ */ Oe(() => ({ ...Pw, ...w })), Y = /* @__PURE__ */ Oe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Cd(I, bt(
    {
      get nodeTypes() {
        return g(D);
      }
    },
    _i,
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
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || G(u, !1);
      },
      get defaultEdgeOptions() {
        return g(Y);
      },
      $$events: {
        drop: d,
        dragover: c,
        edgeclick: () => {
          G(u, !0);
        }
      },
      children: (x, P) => {
        var M = Bw(), L = Ce(M);
        Nd(L, {});
        var Z = B(L, 2);
        Md(Z, {});
        var q = B(Z, 2);
        Dd(q, {});
        var K = B(q, 2);
        {
          var se = (U) => {
            ti(U, {
              children: (X, ie) => {
                var ve = Yw(), me = B(j(ve), 4), ue = j(me);
                Ut(ue, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Ve) => {
                  }
                }), W(me), W(ve), A(X, ve);
              },
              $$slots: { default: !0 }
            });
          };
          ke(K, (U) => {
            g(u) && U(se);
          });
        }
        A(x, M);
      },
      $$slots: { default: !0 }
    }
  ));
  var S = B(I, 2);
  hf(S, {}), W(z), A(e, z);
  var V = he({
    get onInit() {
      return s();
    },
    set onInit(x) {
      s(x), p();
    }
  });
  return r(), V;
}
de(mf, { onInit: {} }, [], [], !0);
function jw(e, t) {
  ge(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return _i.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Gr("tinyflow_options", n()), kd(e, {
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
customElements.define("tinyflow-component", de(jw, { options: {}, onInit: {} }, [], [], !1));
const Uw = bf((e, t) => {
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
  Uw as Tinyflow
};
//# sourceMappingURL=index.js.map
