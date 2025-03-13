var Ai = { exports: {} }, Ho = {}, zi = { exports: {} }, Ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fl;
function Vv() {
  if (Fl) return Ue;
  Fl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), d = Symbol.iterator;
  function f(R) {
    return R === null || typeof R != "object" ? null : (R = d && R[d] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, y = Object.assign, x = {};
  function C(R, I, ne) {
    this.props = R, this.context = I, this.refs = x, this.updater = ne || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, I) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, I, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function E() {
  }
  E.prototype = C.prototype;
  function m(R, I, ne) {
    this.props = R, this.context = I, this.refs = x, this.updater = ne || v;
  }
  var $ = m.prototype = new E();
  $.constructor = m, y($, C.prototype), $.isPureReactComponent = !0;
  var g = Array.isArray, _ = Object.prototype.hasOwnProperty, T = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(R, I, ne) {
    var Q, W = {}, ae = null, pe = null;
    if (I != null) for (Q in I.ref !== void 0 && (pe = I.ref), I.key !== void 0 && (ae = "" + I.key), I) _.call(I, Q) && !O.hasOwnProperty(Q) && (W[Q] = I[Q]);
    var de = arguments.length - 2;
    if (de === 1) W.children = ne;
    else if (1 < de) {
      for (var le = Array(de), Te = 0; Te < de; Te++) le[Te] = arguments[Te + 2];
      W.children = le;
    }
    if (R && R.defaultProps) for (Q in de = R.defaultProps, de) W[Q] === void 0 && (W[Q] = de[Q]);
    return { $$typeof: e, type: R, key: ae, ref: pe, props: W, _owner: T.current };
  }
  function V(R, I) {
    return { $$typeof: e, type: R.type, key: I, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function H(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }
  function Z(R) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ne) {
      return I[ne];
    });
  }
  var L = /\/+/g;
  function F(R, I) {
    return typeof R == "object" && R !== null && R.key != null ? Z("" + R.key) : I.toString(36);
  }
  function P(R, I, ne, Q, W) {
    var ae = typeof R;
    (ae === "undefined" || ae === "boolean") && (R = null);
    var pe = !1;
    if (R === null) pe = !0;
    else switch (ae) {
      case "string":
      case "number":
        pe = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case e:
          case t:
            pe = !0;
        }
    }
    if (pe) return pe = R, W = W(pe), R = Q === "" ? "." + F(pe, 0) : Q, g(W) ? (ne = "", R != null && (ne = R.replace(L, "$&/") + "/"), P(W, I, ne, "", function(Te) {
      return Te;
    })) : W != null && (H(W) && (W = V(W, ne + (!W.key || pe && pe.key === W.key ? "" : ("" + W.key).replace(L, "$&/") + "/") + R)), I.push(W)), 1;
    if (pe = 0, Q = Q === "" ? "." : Q + ":", g(R)) for (var de = 0; de < R.length; de++) {
      ae = R[de];
      var le = Q + F(ae, de);
      pe += P(ae, I, ne, le, W);
    }
    else if (le = f(R), typeof le == "function") for (R = le.call(R), de = 0; !(ae = R.next()).done; ) ae = ae.value, le = Q + F(ae, de++), pe += P(ae, I, ne, le, W);
    else if (ae === "object") throw I = String(R), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return pe;
  }
  function M(R, I, ne) {
    if (R == null) return R;
    var Q = [], W = 0;
    return P(R, Q, "", "", function(ae) {
      return I.call(ne, ae, W++);
    }), Q;
  }
  function S(R) {
    if (R._status === -1) {
      var I = R._result;
      I = I(), I.then(function(ne) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ne);
      }, function(ne) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ne);
      }), R._status === -1 && (R._status = 0, R._result = I);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var k = { current: null }, z = { transition: null }, j = { ReactCurrentDispatcher: k, ReactCurrentBatchConfig: z, ReactCurrentOwner: T };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ue.Children = { map: M, forEach: function(R, I, ne) {
    M(R, function() {
      I.apply(this, arguments);
    }, ne);
  }, count: function(R) {
    var I = 0;
    return M(R, function() {
      I++;
    }), I;
  }, toArray: function(R) {
    return M(R, function(I) {
      return I;
    }) || [];
  }, only: function(R) {
    if (!H(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Ue.Component = C, Ue.Fragment = n, Ue.Profiler = o, Ue.PureComponent = m, Ue.StrictMode = r, Ue.Suspense = l, Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, Ue.act = K, Ue.cloneElement = function(R, I, ne) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Q = y({}, R.props), W = R.key, ae = R.ref, pe = R._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ae = I.ref, pe = T.current), I.key !== void 0 && (W = "" + I.key), R.type && R.type.defaultProps) var de = R.type.defaultProps;
      for (le in I) _.call(I, le) && !O.hasOwnProperty(le) && (Q[le] = I[le] === void 0 && de !== void 0 ? de[le] : I[le]);
    }
    var le = arguments.length - 2;
    if (le === 1) Q.children = ne;
    else if (1 < le) {
      de = Array(le);
      for (var Te = 0; Te < le; Te++) de[Te] = arguments[Te + 2];
      Q.children = de;
    }
    return { $$typeof: e, type: R.type, key: W, ref: ae, props: Q, _owner: pe };
  }, Ue.createContext = function(R) {
    return R = { $$typeof: i, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: a, _context: R }, R.Consumer = R;
  }, Ue.createElement = N, Ue.createFactory = function(R) {
    var I = N.bind(null, R);
    return I.type = R, I;
  }, Ue.createRef = function() {
    return { current: null };
  }, Ue.forwardRef = function(R) {
    return { $$typeof: s, render: R };
  }, Ue.isValidElement = H, Ue.lazy = function(R) {
    return { $$typeof: c, _payload: { _status: -1, _result: R }, _init: S };
  }, Ue.memo = function(R, I) {
    return { $$typeof: u, type: R, compare: I === void 0 ? null : I };
  }, Ue.startTransition = function(R) {
    var I = z.transition;
    z.transition = {};
    try {
      R();
    } finally {
      z.transition = I;
    }
  }, Ue.unstable_act = K, Ue.useCallback = function(R, I) {
    return k.current.useCallback(R, I);
  }, Ue.useContext = function(R) {
    return k.current.useContext(R);
  }, Ue.useDebugValue = function() {
  }, Ue.useDeferredValue = function(R) {
    return k.current.useDeferredValue(R);
  }, Ue.useEffect = function(R, I) {
    return k.current.useEffect(R, I);
  }, Ue.useId = function() {
    return k.current.useId();
  }, Ue.useImperativeHandle = function(R, I, ne) {
    return k.current.useImperativeHandle(R, I, ne);
  }, Ue.useInsertionEffect = function(R, I) {
    return k.current.useInsertionEffect(R, I);
  }, Ue.useLayoutEffect = function(R, I) {
    return k.current.useLayoutEffect(R, I);
  }, Ue.useMemo = function(R, I) {
    return k.current.useMemo(R, I);
  }, Ue.useReducer = function(R, I, ne) {
    return k.current.useReducer(R, I, ne);
  }, Ue.useRef = function(R) {
    return k.current.useRef(R);
  }, Ue.useState = function(R) {
    return k.current.useState(R);
  }, Ue.useSyncExternalStore = function(R, I, ne) {
    return k.current.useSyncExternalStore(R, I, ne);
  }, Ue.useTransition = function() {
    return k.current.useTransition();
  }, Ue.version = "18.3.1", Ue;
}
var Ko = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ko.exports;
var Xl;
function Dv() {
  return Xl || (Xl = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = Symbol.iterator, E = "@@iterator";
      function m(h) {
        if (h === null || typeof h != "object")
          return null;
        var D = C && h[C] || h[E];
        return typeof D == "function" ? D : null;
      }
      var $ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, g = {
        transition: null
      }, _ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, T = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, O = {}, N = null;
      function V(h) {
        N = h;
      }
      O.setExtraStackFrame = function(h) {
        N = h;
      }, O.getCurrentStack = null, O.getStackAddendum = function() {
        var h = "";
        N && (h += N);
        var D = O.getCurrentStack;
        return D && (h += D() || ""), h;
      };
      var H = !1, Z = !1, L = !1, F = !1, P = !1, M = {
        ReactCurrentDispatcher: $,
        ReactCurrentBatchConfig: g,
        ReactCurrentOwner: T
      };
      M.ReactDebugCurrentFrame = O, M.ReactCurrentActQueue = _;
      function S(h) {
        {
          for (var D = arguments.length, q = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            q[J - 1] = arguments[J];
          z("warn", h, q);
        }
      }
      function k(h) {
        {
          for (var D = arguments.length, q = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            q[J - 1] = arguments[J];
          z("error", h, q);
        }
      }
      function z(h, D, q) {
        {
          var J = M.ReactDebugCurrentFrame, ce = J.getStackAddendum();
          ce !== "" && (D += "%s", q = q.concat([ce]));
          var De = q.map(function(Se) {
            return String(Se);
          });
          De.unshift("Warning: " + D), Function.prototype.apply.call(console[h], console, De);
        }
      }
      var j = {};
      function K(h, D) {
        {
          var q = h.constructor, J = q && (q.displayName || q.name) || "ReactClass", ce = J + "." + D;
          if (j[ce])
            return;
          k("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, J), j[ce] = !0;
        }
      }
      var R = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, D, q) {
          K(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, D, q, J) {
          K(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, D, q, J) {
          K(h, "setState");
        }
      }, I = Object.assign, ne = {};
      Object.freeze(ne);
      function Q(h, D, q) {
        this.props = h, this.context = D, this.refs = ne, this.updater = q || R;
      }
      Q.prototype.isReactComponent = {}, Q.prototype.setState = function(h, D) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, D, "setState");
      }, Q.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ae = function(h, D) {
          Object.defineProperty(Q.prototype, h, {
            get: function() {
              S("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var pe in W)
          W.hasOwnProperty(pe) && ae(pe, W[pe]);
      }
      function de() {
      }
      de.prototype = Q.prototype;
      function le(h, D, q) {
        this.props = h, this.context = D, this.refs = ne, this.updater = q || R;
      }
      var Te = le.prototype = new de();
      Te.constructor = le, I(Te, Q.prototype), Te.isPureReactComponent = !0;
      function ge() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Oe = Array.isArray;
      function Je(h) {
        return Oe(h);
      }
      function Qe(h) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, q = D && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return q;
        }
      }
      function Xe(h) {
        try {
          return U(h), !1;
        } catch {
          return !0;
        }
      }
      function U(h) {
        return "" + h;
      }
      function me(h) {
        if (Xe(h))
          return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(h)), U(h);
      }
      function Ce(h, D, q) {
        var J = h.displayName;
        if (J)
          return J;
        var ce = D.displayName || D.name || "";
        return ce !== "" ? q + "(" + ce + ")" : q;
      }
      function We(h) {
        return h.displayName || "Context";
      }
      function Ae(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case a:
            return "Fragment";
          case o:
            return "Portal";
          case s:
            return "Profiler";
          case i:
            return "StrictMode";
          case d:
            return "Suspense";
          case f:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case u:
              var D = h;
              return We(D) + ".Consumer";
            case l:
              var q = h;
              return We(q._context) + ".Provider";
            case c:
              return Ce(h, h.render, "ForwardRef");
            case v:
              var J = h.displayName || null;
              return J !== null ? J : Ae(h.type) || "Memo";
            case y: {
              var ce = h, De = ce._payload, Se = ce._init;
              try {
                return Ae(Se(De));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var nt = Object.prototype.hasOwnProperty, Ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rt, pt, Ot;
      Ot = {};
      function ue(h) {
        if (nt.call(h, "ref")) {
          var D = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function et(h) {
        if (nt.call(h, "key")) {
          var D = Object.getOwnPropertyDescriptor(h, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function we(h, D) {
        var q = function() {
          rt || (rt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        q.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: q,
          configurable: !0
        });
      }
      function Qt(h, D) {
        var q = function() {
          pt || (pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        q.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: q,
          configurable: !0
        });
      }
      function Wt(h) {
        if (typeof h.ref == "string" && T.current && h.__self && T.current.stateNode !== h.__self) {
          var D = Ae(T.current.type);
          Ot[D] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, h.ref), Ot[D] = !0);
        }
      }
      var Kt = function(h, D, q, J, ce, De, Se) {
        var je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: h,
          key: D,
          ref: q,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: De
        };
        return je._store = {}, Object.defineProperty(je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
      };
      function ze(h, D, q) {
        var J, ce = {}, De = null, Se = null, je = null, ot = null;
        if (D != null) {
          ue(D) && (Se = D.ref, Wt(D)), et(D) && (me(D.key), De = "" + D.key), je = D.__self === void 0 ? null : D.__self, ot = D.__source === void 0 ? null : D.__source;
          for (J in D)
            nt.call(D, J) && !Ze.hasOwnProperty(J) && (ce[J] = D[J]);
        }
        var ht = arguments.length - 2;
        if (ht === 1)
          ce.children = q;
        else if (ht > 1) {
          for (var Et = Array(ht), St = 0; St < ht; St++)
            Et[St] = arguments[St + 2];
          Object.freeze && Object.freeze(Et), ce.children = Et;
        }
        if (h && h.defaultProps) {
          var Mt = h.defaultProps;
          for (J in Mt)
            ce[J] === void 0 && (ce[J] = Mt[J]);
        }
        if (De || Se) {
          var Vt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          De && we(ce, Vt), Se && Qt(ce, Vt);
        }
        return Kt(h, De, Se, je, ot, T.current, ce);
      }
      function gt(h, D) {
        var q = Kt(h.type, D, h.ref, h._self, h._source, h._owner, h.props);
        return q;
      }
      function Ee(h, D, q) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var J, ce = I({}, h.props), De = h.key, Se = h.ref, je = h._self, ot = h._source, ht = h._owner;
        if (D != null) {
          ue(D) && (Se = D.ref, ht = T.current), et(D) && (me(D.key), De = "" + D.key);
          var Et;
          h.type && h.type.defaultProps && (Et = h.type.defaultProps);
          for (J in D)
            nt.call(D, J) && !Ze.hasOwnProperty(J) && (D[J] === void 0 && Et !== void 0 ? ce[J] = Et[J] : ce[J] = D[J]);
        }
        var St = arguments.length - 2;
        if (St === 1)
          ce.children = q;
        else if (St > 1) {
          for (var Mt = Array(St), Vt = 0; Vt < St; Vt++)
            Mt[Vt] = arguments[Vt + 2];
          ce.children = Mt;
        }
        return Kt(h.type, De, Se, je, ot, ht, ce);
      }
      function st(h) {
        return typeof h == "object" && h !== null && h.$$typeof === r;
      }
      var yt = ".", Ft = ":";
      function Tn(h) {
        var D = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, J = h.replace(D, function(ce) {
          return q[ce];
        });
        return "$" + J;
      }
      var At = !1, Tt = /\/+/g;
      function jt(h) {
        return h.replace(Tt, "$&/");
      }
      function zt(h, D) {
        return typeof h == "object" && h !== null && h.key != null ? (me(h.key), Tn("" + h.key)) : D.toString(36);
      }
      function $t(h, D, q, J, ce) {
        var De = typeof h;
        (De === "undefined" || De === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (De) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case r:
                case o:
                  Se = !0;
              }
          }
        if (Se) {
          var je = h, ot = ce(je), ht = J === "" ? yt + zt(je, 0) : J;
          if (Je(ot)) {
            var Et = "";
            ht != null && (Et = jt(ht) + "/"), $t(ot, D, Et, "", function(Rv) {
              return Rv;
            });
          } else ot != null && (st(ot) && (ot.key && (!je || je.key !== ot.key) && me(ot.key), ot = gt(
            ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ot.key && (!je || je.key !== ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              jt("" + ot.key) + "/"
            ) : "") + ht
          )), D.push(ot));
          return 1;
        }
        var St, Mt, Vt = 0, Zt = J === "" ? yt : J + Ft;
        if (Je(h))
          for (var Di = 0; Di < h.length; Di++)
            St = h[Di], Mt = Zt + zt(St, Di), Vt += $t(St, D, q, Mt, ce);
        else {
          var as = m(h);
          if (typeof as == "function") {
            var Yl = h;
            as === Yl.entries && (At || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var Mv = as.call(Yl), Wl, Nv = 0; !(Wl = Mv.next()).done; )
              St = Wl.value, Mt = Zt + zt(St, Nv++), Vt += $t(St, D, q, Mt, ce);
          } else if (De === "object") {
            var Kl = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Kl === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Kl) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Vt;
      }
      function Bn(h, D, q) {
        if (h == null)
          return h;
        var J = [], ce = 0;
        return $t(h, J, "", "", function(De) {
          return D.call(q, De, ce++);
        }), J;
      }
      function Cn(h) {
        var D = 0;
        return Bn(h, function() {
          D++;
        }), D;
      }
      function en(h, D, q) {
        Bn(h, function() {
          D.apply(this, arguments);
        }, q);
      }
      function rr(h) {
        return Bn(h, function(D) {
          return D;
        }) || [];
      }
      function or(h) {
        if (!st(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function xr(h) {
        var D = {
          $$typeof: u,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: l,
          _context: D
        };
        var q = !1, J = !1, ce = !1;
        {
          var De = {
            $$typeof: u,
            _context: D
          };
          Object.defineProperties(De, {
            Provider: {
              get: function() {
                return J || (J = !0, k("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Se) {
                D.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Se) {
                D._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Se) {
                D._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Se) {
                D._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, k("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Se) {
                ce || (S("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), ce = !0);
              }
            }
          }), D.Consumer = De;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var ir = -1, $r = 0, Hr = 1, Vo = 2;
      function Do(h) {
        if (h._status === ir) {
          var D = h._result, q = D();
          if (q.then(function(De) {
            if (h._status === $r || h._status === ir) {
              var Se = h;
              Se._status = Hr, Se._result = De;
            }
          }, function(De) {
            if (h._status === $r || h._status === ir) {
              var Se = h;
              Se._status = Vo, Se._result = De;
            }
          }), h._status === ir) {
            var J = h;
            J._status = $r, J._result = q;
          }
        }
        if (h._status === Hr) {
          var ce = h._result;
          return ce === void 0 && k(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || k(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw h._result;
      }
      function Ao(h) {
        var D = {
          // We use these fields to store the result.
          _status: ir,
          _result: h
        }, q = {
          $$typeof: y,
          _payload: D,
          _init: Do
        };
        {
          var J, ce;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(De) {
                k("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = De, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(De) {
                k("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = De, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function zo(h) {
        h != null && h.$$typeof === v ? k("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? k("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && k("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && k("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: c,
          render: h
        };
        {
          var q;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(J) {
              q = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return D;
      }
      var A;
      A = Symbol.for("react.module.reference");
      function re(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === a || h === s || P || h === i || h === d || h === f || F || h === x || H || Z || L || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === v || h.$$typeof === l || h.$$typeof === u || h.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === A || h.getModuleId !== void 0));
      }
      function ye(h, D) {
        re(h) || k("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var q = {
          $$typeof: v,
          type: h,
          compare: D === void 0 ? null : D
        };
        {
          var J;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(ce) {
              J = ce, !h.name && !h.displayName && (h.displayName = ce);
            }
          });
        }
        return q;
      }
      function ke() {
        var h = $.current;
        return h === null && k(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Y(h) {
        var D = ke();
        if (h._context !== void 0) {
          var q = h._context;
          q.Consumer === h ? k("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === h && k("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(h);
      }
      function ut(h) {
        var D = ke();
        return D.useState(h);
      }
      function qe(h, D, q) {
        var J = ke();
        return J.useReducer(h, D, q);
      }
      function Be(h) {
        var D = ke();
        return D.useRef(h);
      }
      function Ht(h, D) {
        var q = ke();
        return q.useEffect(h, D);
      }
      function wt(h, D) {
        var q = ke();
        return q.useInsertionEffect(h, D);
      }
      function _t(h, D) {
        var q = ke();
        return q.useLayoutEffect(h, D);
      }
      function Xt(h, D) {
        var q = ke();
        return q.useCallback(h, D);
      }
      function jn(h, D) {
        var q = ke();
        return q.useMemo(h, D);
      }
      function Zn(h, D, q) {
        var J = ke();
        return J.useImperativeHandle(h, D, q);
      }
      function Lt(h, D) {
        {
          var q = ke();
          return q.useDebugValue(h, D);
        }
      }
      function _r() {
        var h = ke();
        return h.useTransition();
      }
      function to(h) {
        var D = ke();
        return D.useDeferredValue(h);
      }
      function no() {
        var h = ke();
        return h.useId();
      }
      function Ga(h, D, q) {
        var J = ke();
        return J.useSyncExternalStore(h, D, q);
      }
      var Ke = 0, Ja, Lo, Pi, El, Sl, Pl, Ol;
      function Tl() {
      }
      Tl.__reactDisabledLog = !0;
      function vv() {
        {
          if (Ke === 0) {
            Ja = console.log, Lo = console.info, Pi = console.warn, El = console.error, Sl = console.group, Pl = console.groupCollapsed, Ol = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Tl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ke++;
        }
      }
      function pv() {
        {
          if (Ke--, Ke === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, h, {
                value: Ja
              }),
              info: I({}, h, {
                value: Lo
              }),
              warn: I({}, h, {
                value: Pi
              }),
              error: I({}, h, {
                value: El
              }),
              group: I({}, h, {
                value: Sl
              }),
              groupCollapsed: I({}, h, {
                value: Pl
              }),
              groupEnd: I({}, h, {
                value: Ol
              })
            });
          }
          Ke < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qa = M.ReactCurrentDispatcher, es;
      function Oi(h, D, q) {
        {
          if (es === void 0)
            try {
              throw Error();
            } catch (ce) {
              var J = ce.stack.trim().match(/\n( *(at )?)/);
              es = J && J[1] || "";
            }
          return `
` + es + h;
        }
      }
      var ts = !1, Ti;
      {
        var gv = typeof WeakMap == "function" ? WeakMap : Map;
        Ti = new gv();
      }
      function Ml(h, D) {
        if (!h || ts)
          return "";
        {
          var q = Ti.get(h);
          if (q !== void 0)
            return q;
        }
        var J;
        ts = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var De;
        De = Qa.current, Qa.current = null, vv();
        try {
          if (D) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (Zt) {
                J = Zt;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (Zt) {
                J = Zt;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Zt) {
              J = Zt;
            }
            h();
          }
        } catch (Zt) {
          if (Zt && J && typeof Zt.stack == "string") {
            for (var je = Zt.stack.split(`
`), ot = J.stack.split(`
`), ht = je.length - 1, Et = ot.length - 1; ht >= 1 && Et >= 0 && je[ht] !== ot[Et]; )
              Et--;
            for (; ht >= 1 && Et >= 0; ht--, Et--)
              if (je[ht] !== ot[Et]) {
                if (ht !== 1 || Et !== 1)
                  do
                    if (ht--, Et--, Et < 0 || je[ht] !== ot[Et]) {
                      var St = `
` + je[ht].replace(" at new ", " at ");
                      return h.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", h.displayName)), typeof h == "function" && Ti.set(h, St), St;
                    }
                  while (ht >= 1 && Et >= 0);
                break;
              }
          }
        } finally {
          ts = !1, Qa.current = De, pv(), Error.prepareStackTrace = ce;
        }
        var Mt = h ? h.displayName || h.name : "", Vt = Mt ? Oi(Mt) : "";
        return typeof h == "function" && Ti.set(h, Vt), Vt;
      }
      function hv(h, D, q) {
        return Ml(h, !1);
      }
      function mv(h) {
        var D = h.prototype;
        return !!(D && D.isReactComponent);
      }
      function Mi(h, D, q) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ml(h, mv(h));
        if (typeof h == "string")
          return Oi(h);
        switch (h) {
          case d:
            return Oi("Suspense");
          case f:
            return Oi("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case c:
              return hv(h.render);
            case v:
              return Mi(h.type, D, q);
            case y: {
              var J = h, ce = J._payload, De = J._init;
              try {
                return Mi(De(ce), D, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Nl = {}, Rl = M.ReactDebugCurrentFrame;
      function Ni(h) {
        if (h) {
          var D = h._owner, q = Mi(h.type, h._source, D ? D.type : null);
          Rl.setExtraStackFrame(q);
        } else
          Rl.setExtraStackFrame(null);
      }
      function yv(h, D, q, J, ce) {
        {
          var De = Function.call.bind(nt);
          for (var Se in h)
            if (De(h, Se)) {
              var je = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var ot = Error((J || "React class") + ": " + q + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ot.name = "Invariant Violation", ot;
                }
                je = h[Se](D, Se, J, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ht) {
                je = ht;
              }
              je && !(je instanceof Error) && (Ni(ce), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", q, Se, typeof je), Ni(null)), je instanceof Error && !(je.message in Nl) && (Nl[je.message] = !0, Ni(ce), k("Failed %s type: %s", q, je.message), Ni(null));
            }
        }
      }
      function ro(h) {
        if (h) {
          var D = h._owner, q = Mi(h.type, h._source, D ? D.type : null);
          V(q);
        } else
          V(null);
      }
      var ns;
      ns = !1;
      function Vl() {
        if (T.current) {
          var h = Ae(T.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function wv(h) {
        if (h !== void 0) {
          var D = h.fileName.replace(/^.*[\\\/]/, ""), q = h.lineNumber;
          return `

Check your code at ` + D + ":" + q + ".";
        }
        return "";
      }
      function bv(h) {
        return h != null ? wv(h.__source) : "";
      }
      var Dl = {};
      function xv(h) {
        var D = Vl();
        if (!D) {
          var q = typeof h == "string" ? h : h.displayName || h.name;
          q && (D = `

Check the top-level render call using <` + q + ">.");
        }
        return D;
      }
      function Al(h, D) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var q = xv(D);
          if (!Dl[q]) {
            Dl[q] = !0;
            var J = "";
            h && h._owner && h._owner !== T.current && (J = " It was passed a child from " + Ae(h._owner.type) + "."), ro(h), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, J), ro(null);
          }
        }
      }
      function zl(h, D) {
        if (typeof h == "object") {
          if (Je(h))
            for (var q = 0; q < h.length; q++) {
              var J = h[q];
              st(J) && Al(J, D);
            }
          else if (st(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ce = m(h);
            if (typeof ce == "function" && ce !== h.entries)
              for (var De = ce.call(h), Se; !(Se = De.next()).done; )
                st(Se.value) && Al(Se.value, D);
          }
        }
      }
      function Ll(h) {
        {
          var D = h.type;
          if (D == null || typeof D == "string")
            return;
          var q;
          if (typeof D == "function")
            q = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === v))
            q = D.propTypes;
          else
            return;
          if (q) {
            var J = Ae(D);
            yv(q, h.props, "prop", J, h);
          } else if (D.PropTypes !== void 0 && !ns) {
            ns = !0;
            var ce = Ae(D);
            k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $v(h) {
        {
          for (var D = Object.keys(h.props), q = 0; q < D.length; q++) {
            var J = D[q];
            if (J !== "children" && J !== "key") {
              ro(h), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), ro(null);
              break;
            }
          }
          h.ref !== null && (ro(h), k("Invalid attribute `ref` supplied to `React.Fragment`."), ro(null));
        }
      }
      function Hl(h, D, q) {
        var J = re(h);
        if (!J) {
          var ce = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = bv(D);
          De ? ce += De : ce += Vl();
          var Se;
          h === null ? Se = "null" : Je(h) ? Se = "array" : h !== void 0 && h.$$typeof === r ? (Se = "<" + (Ae(h.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, k("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ce);
        }
        var je = ze.apply(this, arguments);
        if (je == null)
          return je;
        if (J)
          for (var ot = 2; ot < arguments.length; ot++)
            zl(arguments[ot], h);
        return h === a ? $v(je) : Ll(je), je;
      }
      var Il = !1;
      function _v(h) {
        var D = Hl.bind(null, h);
        return D.type = h, Il || (Il = !0, S("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return S("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), D;
      }
      function Cv(h, D, q) {
        for (var J = Ee.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          zl(arguments[ce], J.type);
        return Ll(J), J;
      }
      function kv(h, D) {
        var q = g.transition;
        g.transition = {};
        var J = g.transition;
        g.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (g.transition = q, q === null && J._updatedFibers) {
            var ce = J._updatedFibers.size;
            ce > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var Bl = !1, Ri = null;
      function Ev(h) {
        if (Ri === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), q = e && e[D];
            Ri = q.call(e, "timers").setImmediate;
          } catch {
            Ri = function(ce) {
              Bl === !1 && (Bl = !0, typeof MessageChannel > "u" && k("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var De = new MessageChannel();
              De.port1.onmessage = ce, De.port2.postMessage(void 0);
            };
          }
        return Ri(h);
      }
      var oo = 0, jl = !1;
      function Zl(h) {
        {
          var D = oo;
          oo++, _.current === null && (_.current = []);
          var q = _.isBatchingLegacy, J;
          try {
            if (_.isBatchingLegacy = !0, J = h(), !q && _.didScheduleLegacyUpdate) {
              var ce = _.current;
              ce !== null && (_.didScheduleLegacyUpdate = !1, is(ce));
            }
          } catch (Mt) {
            throw Vi(D), Mt;
          } finally {
            _.isBatchingLegacy = q;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var De = J, Se = !1, je = {
              then: function(Mt, Vt) {
                Se = !0, De.then(function(Zt) {
                  Vi(D), oo === 0 ? rs(Zt, Mt, Vt) : Mt(Zt);
                }, function(Zt) {
                  Vi(D), Vt(Zt);
                });
              }
            };
            return !jl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (jl = !0, k("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), je;
          } else {
            var ot = J;
            if (Vi(D), oo === 0) {
              var ht = _.current;
              ht !== null && (is(ht), _.current = null);
              var Et = {
                then: function(Mt, Vt) {
                  _.current === null ? (_.current = [], rs(ot, Mt, Vt)) : Mt(ot);
                }
              };
              return Et;
            } else {
              var St = {
                then: function(Mt, Vt) {
                  Mt(ot);
                }
              };
              return St;
            }
          }
        }
      }
      function Vi(h) {
        h !== oo - 1 && k("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), oo = h;
      }
      function rs(h, D, q) {
        {
          var J = _.current;
          if (J !== null)
            try {
              is(J), Ev(function() {
                J.length === 0 ? (_.current = null, D(h)) : rs(h, D, q);
              });
            } catch (ce) {
              q(ce);
            }
          else
            D(h);
        }
      }
      var os = !1;
      function is(h) {
        if (!os) {
          os = !0;
          var D = 0;
          try {
            for (; D < h.length; D++) {
              var q = h[D];
              do
                q = q(!0);
              while (q !== null);
            }
            h.length = 0;
          } catch (J) {
            throw h = h.slice(D + 1), J;
          } finally {
            os = !1;
          }
        }
      }
      var Sv = Hl, Pv = Cv, Ov = _v, Tv = {
        map: Bn,
        forEach: en,
        count: Cn,
        toArray: rr,
        only: or
      };
      t.Children = Tv, t.Component = Q, t.Fragment = a, t.Profiler = s, t.PureComponent = le, t.StrictMode = i, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.act = Zl, t.cloneElement = Pv, t.createContext = xr, t.createElement = Sv, t.createFactory = Ov, t.createRef = ge, t.forwardRef = zo, t.isValidElement = st, t.lazy = Ao, t.memo = ye, t.startTransition = kv, t.unstable_act = Zl, t.useCallback = Xt, t.useContext = Y, t.useDebugValue = Lt, t.useDeferredValue = to, t.useEffect = Ht, t.useId = no, t.useImperativeHandle = Zn, t.useInsertionEffect = wt, t.useLayoutEffect = _t, t.useMemo = jn, t.useReducer = qe, t.useRef = Be, t.useState = ut, t.useSyncExternalStore = Ga, t.useTransition = _r, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ko, Ko.exports)), Ko.exports;
}
var ql;
function Bs() {
  return ql || (ql = 1, process.env.NODE_ENV === "production" ? zi.exports = Vv() : zi.exports = Dv()), zi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul;
function Av() {
  if (Ul) return Ho;
  Ul = 1;
  var e = Bs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return Ho.Fragment = n, Ho.jsx = i, Ho.jsxs = i, Ho;
}
var Io = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl;
function zv() {
  return Gl || (Gl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bs(), t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, x = "@@iterator";
    function C(A) {
      if (A === null || typeof A != "object")
        return null;
      var re = y && A[y] || A[x];
      return typeof re == "function" ? re : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(A) {
      {
        for (var re = arguments.length, ye = new Array(re > 1 ? re - 1 : 0), ke = 1; ke < re; ke++)
          ye[ke - 1] = arguments[ke];
        $("error", A, ye);
      }
    }
    function $(A, re, ye) {
      {
        var ke = E.ReactDebugCurrentFrame, Y = ke.getStackAddendum();
        Y !== "" && (re += "%s", ye = ye.concat([Y]));
        var ut = ye.map(function(qe) {
          return String(qe);
        });
        ut.unshift("Warning: " + re), Function.prototype.apply.call(console[A], console, ut);
      }
    }
    var g = !1, _ = !1, T = !1, O = !1, N = !1, V;
    V = Symbol.for("react.module.reference");
    function H(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === a || N || A === o || A === u || A === c || O || A === v || g || _ || T || typeof A == "object" && A !== null && (A.$$typeof === f || A.$$typeof === d || A.$$typeof === i || A.$$typeof === s || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === V || A.getModuleId !== void 0));
    }
    function Z(A, re, ye) {
      var ke = A.displayName;
      if (ke)
        return ke;
      var Y = re.displayName || re.name || "";
      return Y !== "" ? ye + "(" + Y + ")" : ye;
    }
    function L(A) {
      return A.displayName || "Context";
    }
    function F(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            var re = A;
            return L(re) + ".Consumer";
          case i:
            var ye = A;
            return L(ye._context) + ".Provider";
          case l:
            return Z(A, A.render, "ForwardRef");
          case d:
            var ke = A.displayName || null;
            return ke !== null ? ke : F(A.type) || "Memo";
          case f: {
            var Y = A, ut = Y._payload, qe = Y._init;
            try {
              return F(qe(ut));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, S, k, z, j, K, R, I;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function Q() {
      {
        if (M === 0) {
          S = console.log, k = console.info, z = console.warn, j = console.error, K = console.group, R = console.groupCollapsed, I = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
        M++;
      }
    }
    function W() {
      {
        if (M--, M === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, A, {
              value: S
            }),
            info: P({}, A, {
              value: k
            }),
            warn: P({}, A, {
              value: z
            }),
            error: P({}, A, {
              value: j
            }),
            group: P({}, A, {
              value: K
            }),
            groupCollapsed: P({}, A, {
              value: R
            }),
            groupEnd: P({}, A, {
              value: I
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = E.ReactCurrentDispatcher, pe;
    function de(A, re, ye) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (Y) {
            var ke = Y.stack.trim().match(/\n( *(at )?)/);
            pe = ke && ke[1] || "";
          }
        return `
` + pe + A;
      }
    }
    var le = !1, Te;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      Te = new ge();
    }
    function Oe(A, re) {
      if (!A || le)
        return "";
      {
        var ye = Te.get(A);
        if (ye !== void 0)
          return ye;
      }
      var ke;
      le = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ut;
      ut = ae.current, ae.current = null, Q();
      try {
        if (re) {
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
            } catch (Lt) {
              ke = Lt;
            }
            Reflect.construct(A, [], qe);
          } else {
            try {
              qe.call();
            } catch (Lt) {
              ke = Lt;
            }
            A.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Lt) {
            ke = Lt;
          }
          A();
        }
      } catch (Lt) {
        if (Lt && ke && typeof Lt.stack == "string") {
          for (var Be = Lt.stack.split(`
`), Ht = ke.stack.split(`
`), wt = Be.length - 1, _t = Ht.length - 1; wt >= 1 && _t >= 0 && Be[wt] !== Ht[_t]; )
            _t--;
          for (; wt >= 1 && _t >= 0; wt--, _t--)
            if (Be[wt] !== Ht[_t]) {
              if (wt !== 1 || _t !== 1)
                do
                  if (wt--, _t--, _t < 0 || Be[wt] !== Ht[_t]) {
                    var Xt = `
` + Be[wt].replace(" at new ", " at ");
                    return A.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", A.displayName)), typeof A == "function" && Te.set(A, Xt), Xt;
                  }
                while (wt >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        le = !1, ae.current = ut, W(), Error.prepareStackTrace = Y;
      }
      var jn = A ? A.displayName || A.name : "", Zn = jn ? de(jn) : "";
      return typeof A == "function" && Te.set(A, Zn), Zn;
    }
    function Je(A, re, ye) {
      return Oe(A, !1);
    }
    function Qe(A) {
      var re = A.prototype;
      return !!(re && re.isReactComponent);
    }
    function Xe(A, re, ye) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Oe(A, Qe(A));
      if (typeof A == "string")
        return de(A);
      switch (A) {
        case u:
          return de("Suspense");
        case c:
          return de("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return Je(A.render);
          case d:
            return Xe(A.type, re, ye);
          case f: {
            var ke = A, Y = ke._payload, ut = ke._init;
            try {
              return Xe(ut(Y), re, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, me = {}, Ce = E.ReactDebugCurrentFrame;
    function We(A) {
      if (A) {
        var re = A._owner, ye = Xe(A.type, A._source, re ? re.type : null);
        Ce.setExtraStackFrame(ye);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ae(A, re, ye, ke, Y) {
      {
        var ut = Function.call.bind(U);
        for (var qe in A)
          if (ut(A, qe)) {
            var Be = void 0;
            try {
              if (typeof A[qe] != "function") {
                var Ht = Error((ke || "React class") + ": " + ye + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ht.name = "Invariant Violation", Ht;
              }
              Be = A[qe](re, qe, ke, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (wt) {
              Be = wt;
            }
            Be && !(Be instanceof Error) && (We(Y), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", ye, qe, typeof Be), We(null)), Be instanceof Error && !(Be.message in me) && (me[Be.message] = !0, We(Y), m("Failed %s type: %s", ye, Be.message), We(null));
          }
      }
    }
    var nt = Array.isArray;
    function Ze(A) {
      return nt(A);
    }
    function rt(A) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, ye = re && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ye;
      }
    }
    function pt(A) {
      try {
        return Ot(A), !1;
      } catch {
        return !0;
      }
    }
    function Ot(A) {
      return "" + A;
    }
    function ue(A) {
      if (pt(A))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(A)), Ot(A);
    }
    var et = E.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Wt;
    function Kt(A) {
      if (U.call(A, "ref")) {
        var re = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function ze(A) {
      if (U.call(A, "key")) {
        var re = Object.getOwnPropertyDescriptor(A, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function gt(A, re) {
      typeof A.ref == "string" && et.current;
    }
    function Ee(A, re) {
      {
        var ye = function() {
          Qt || (Qt = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ye.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function st(A, re) {
      {
        var ye = function() {
          Wt || (Wt = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ye.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var yt = function(A, re, ye, ke, Y, ut, qe) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: re,
        ref: ye,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: ut
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function Ft(A, re, ye, ke, Y) {
      {
        var ut, qe = {}, Be = null, Ht = null;
        ye !== void 0 && (ue(ye), Be = "" + ye), ze(re) && (ue(re.key), Be = "" + re.key), Kt(re) && (Ht = re.ref, gt(re, Y));
        for (ut in re)
          U.call(re, ut) && !we.hasOwnProperty(ut) && (qe[ut] = re[ut]);
        if (A && A.defaultProps) {
          var wt = A.defaultProps;
          for (ut in wt)
            qe[ut] === void 0 && (qe[ut] = wt[ut]);
        }
        if (Be || Ht) {
          var _t = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Be && Ee(qe, _t), Ht && st(qe, _t);
        }
        return yt(A, Be, Ht, Y, ke, et.current, qe);
      }
    }
    var Tn = E.ReactCurrentOwner, At = E.ReactDebugCurrentFrame;
    function Tt(A) {
      if (A) {
        var re = A._owner, ye = Xe(A.type, A._source, re ? re.type : null);
        At.setExtraStackFrame(ye);
      } else
        At.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function zt(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function $t() {
      {
        if (Tn.current) {
          var A = F(Tn.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Bn(A) {
      return "";
    }
    var Cn = {};
    function en(A) {
      {
        var re = $t();
        if (!re) {
          var ye = typeof A == "string" ? A : A.displayName || A.name;
          ye && (re = `

Check the top-level render call using <` + ye + ">.");
        }
        return re;
      }
    }
    function rr(A, re) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var ye = en(re);
        if (Cn[ye])
          return;
        Cn[ye] = !0;
        var ke = "";
        A && A._owner && A._owner !== Tn.current && (ke = " It was passed a child from " + F(A._owner.type) + "."), Tt(A), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, ke), Tt(null);
      }
    }
    function or(A, re) {
      {
        if (typeof A != "object")
          return;
        if (Ze(A))
          for (var ye = 0; ye < A.length; ye++) {
            var ke = A[ye];
            zt(ke) && rr(ke, re);
          }
        else if (zt(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Y = C(A);
          if (typeof Y == "function" && Y !== A.entries)
            for (var ut = Y.call(A), qe; !(qe = ut.next()).done; )
              zt(qe.value) && rr(qe.value, re);
        }
      }
    }
    function xr(A) {
      {
        var re = A.type;
        if (re == null || typeof re == "string")
          return;
        var ye;
        if (typeof re == "function")
          ye = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === d))
          ye = re.propTypes;
        else
          return;
        if (ye) {
          var ke = F(re);
          Ae(ye, A.props, "prop", ke, A);
        } else if (re.PropTypes !== void 0 && !jt) {
          jt = !0;
          var Y = F(re);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(A) {
      {
        for (var re = Object.keys(A.props), ye = 0; ye < re.length; ye++) {
          var ke = re[ye];
          if (ke !== "children" && ke !== "key") {
            Tt(A), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), Tt(null);
            break;
          }
        }
        A.ref !== null && (Tt(A), m("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var $r = {};
    function Hr(A, re, ye, ke, Y, ut) {
      {
        var qe = H(A);
        if (!qe) {
          var Be = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ht = Bn();
          Ht ? Be += Ht : Be += $t();
          var wt;
          A === null ? wt = "null" : Ze(A) ? wt = "array" : A !== void 0 && A.$$typeof === t ? (wt = "<" + (F(A.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : wt = typeof A, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", wt, Be);
        }
        var _t = Ft(A, re, ye, Y, ut);
        if (_t == null)
          return _t;
        if (qe) {
          var Xt = re.children;
          if (Xt !== void 0)
            if (ke)
              if (Ze(Xt)) {
                for (var jn = 0; jn < Xt.length; jn++)
                  or(Xt[jn], A);
                Object.freeze && Object.freeze(Xt);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(Xt, A);
        }
        if (U.call(re, "key")) {
          var Zn = F(A), Lt = Object.keys(re).filter(function(no) {
            return no !== "key";
          }), _r = Lt.length > 0 ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$r[Zn + _r]) {
            var to = Lt.length > 0 ? "{" + Lt.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, Zn, to, Zn), $r[Zn + _r] = !0;
          }
        }
        return A === r ? ir(_t) : xr(_t), _t;
      }
    }
    function Vo(A, re, ye) {
      return Hr(A, re, ye, !0);
    }
    function Do(A, re, ye) {
      return Hr(A, re, ye, !1);
    }
    var Ao = Do, zo = Vo;
    Io.Fragment = r, Io.jsx = Ao, Io.jsxs = zo;
  }()), Io;
}
var Jl;
function Lv() {
  return Jl || (Jl = 1, process.env.NODE_ENV === "production" ? Ai.exports = Av() : Ai.exports = zv()), Ai.exports;
}
var Hv = Lv(), Bo = Bs(), Iv = Object.defineProperty, sc = (e) => {
  throw TypeError(e);
}, Bv = (e, t, n) => t in e ? Iv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fn = (e, t, n) => Bv(e, typeof t != "symbol" ? t + "" : t, n), js = (e, t, n) => t.has(e) || sc("Cannot " + n), Rt = (e, t, n) => (js(e, t, "read from private field"), n ? n.call(e) : t.get(e)), so = (e, t, n) => t.has(e) ? sc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qi = (e, t, n, r) => (js(e, t, "write to private field"), t.set(e, n), n), jv = (e, t, n) => (js(e, t, "access private method"), n);
const Zv = "5";
var Ql;
typeof window < "u" && ((Ql = window.__svelte ?? (window.__svelte = {})).v ?? (Ql.v = /* @__PURE__ */ new Set())).add(Zv);
let Po = !1, Yv = !1;
function Wv() {
  Po = !0;
}
Wv();
const Zs = 1, Ys = 2, lc = 4, Kv = 8, Fv = 16, Xv = 1, qv = 2, uc = 4, Uv = 8, Gv = 16, cc = 1, Jv = 2, Ws = "[", Ks = "[!", Fs = "]", uo = {}, cn = Symbol(), dc = "http://www.w3.org/2000/svg", Qv = !1, Dn = 2, fc = 4, Ea = 8, Xs = 16, mr = 32, Oo = 64, ea = 128, Pn = 256, ta = 512, Gt = 1024, yr = 2048, Gr = 4096, cr = 8192, Sa = 16384, ep = 32768, To = 65536, tp = 1 << 17, np = 1 << 19, vc = 1 << 20, Or = Symbol("$state"), qs = Symbol("legacy props"), rp = Symbol("");
var pi = Array.isArray, op = Array.prototype.indexOf, Us = Array.from, na = Object.keys, Qo = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, pc = Object.getOwnPropertyDescriptors, ip = Object.prototype, ap = Array.prototype, Gs = Object.getPrototypeOf;
function jo(e) {
  return typeof e == "function";
}
const Bt = () => {
};
function sp(e) {
  return e();
}
function ei(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const lp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ti = [], ni = [];
function gc() {
  var e = ti;
  ti = [], ei(e);
}
function hc() {
  var e = ni;
  ni = [], ei(e);
}
function gi(e) {
  ti.length === 0 && queueMicrotask(gc), ti.push(e);
}
function up(e) {
  ni.length === 0 && lp(hc), ni.push(e);
}
function eu() {
  ti.length > 0 && gc(), ni.length > 0 && hc();
}
function mc(e) {
  return e === this.v;
}
function Js(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qs(e) {
  return !Js(e, this.v);
}
function cp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function dp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function gp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function hp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function mp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yp() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function wp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mc,
    rv: 0,
    wv: 0
  };
  return n;
}
function Yr(e) {
  return /* @__PURE__ */ yc(vn(e));
}
// @__NO_SIDE_EFFECTS__
function hi(e, t = !1) {
  var n;
  const r = vn(e);
  return t || (r.equals = Qs), Po && lt !== null && lt.l !== null && ((n = lt.l).s ?? (n.s = [])).push(r), r;
}
function fe(e, t = !1) {
  return /* @__PURE__ */ yc(/* @__PURE__ */ hi(e, t));
}
// @__NO_SIDE_EFFECTS__
function yc(e) {
  return vt !== null && !Rn && vt.f & Dn && (Yn === null ? $p([e]) : Yn.push(e)), e;
}
function oe(e, t) {
  return vt !== null && !Rn && Ra() && vt.f & (Dn | Xs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Yn === null || !Yn.includes(e)) && wp(), ms(e, t);
}
function ms(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ec(), wc(e, yr), Ra() && ct !== null && ct.f & Gt && !(ct.f & (mr | Oo)) && (sr === null ? _p([e]) : sr.push(e))), t;
}
function tu(e, t = 1) {
  var n = p(e), r = t === 1 ? n++ : n--;
  return oe(e, n), r;
}
function wc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ra(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & yr || !r && i === ct || (An(i, t), s & (Gt | Pn) && (s & Dn ? wc(
        /** @type {Derived} */
        i,
        Gr
      ) : Ma(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  var t = Dn | yr, n = vt !== null && vt.f & Dn ? (
    /** @type {Derived} */
    vt
  ) : null;
  return ct === null || n !== null && n.f & Pn ? t |= Pn : ct.f |= vc, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: mc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? ct
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Fe(e);
  return t.equals = Qs, t;
}
function bc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      On(
        /** @type {Effect} */
        t[n]
      );
  }
}
function bp(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Dn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function xp(e) {
  var t, n = ct;
  Vr(bp(e));
  try {
    bc(e), t = Pc(e);
  } finally {
    Vr(n);
  }
  return t;
}
function xc(e) {
  var t = xp(e), n = (Sr || e.f & Pn) && e.deps !== null ? Gr : Gt;
  An(e, n), e.equals(t) || (e.v = t, e.wv = Ec());
}
function Pa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ie = !1;
function wn(e) {
  Ie = e;
}
let tt;
function on(e) {
  if (e === null)
    throw Pa(), uo;
  return tt = e;
}
function Fn() {
  return on(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gn(tt)
  );
}
function G(e) {
  if (Ie) {
    if (/* @__PURE__ */ Gn(tt) !== null)
      throw Pa(), uo;
    tt = e;
  }
}
function Ye(e = 1) {
  if (Ie) {
    for (var t = e, n = tt; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(n);
    tt = n;
  }
}
function ys() {
  for (var e = 0, t = tt; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Fs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ws || n === Ks) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(t)
    );
    t.remove(), t = r;
  }
}
function mn(e, t = null, n) {
  if (typeof e != "object" || e === null || Or in e)
    return e;
  const r = Gs(e);
  if (r !== ip && r !== ap)
    return e;
  var o = /* @__PURE__ */ new Map(), a = pi(e), i = vn(0);
  a && o.set("length", vn(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && hp();
        var d = o.get(u);
        return d === void 0 ? (d = vn(c.value), o.set(u, d)) : oe(d, mn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, vn(cn));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && oe(d, f);
          }
          oe(c, cn), nu(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Or)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = dr(l, u)) != null && d.writable) && (f = vn(mn(v ? l[u] : cn, s)), o.set(u, f)), f !== void 0) {
          var y = p(f);
          return y === cn ? void 0 : y;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = p(d));
        } else if (c === void 0) {
          var f = o.get(u), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== cn)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === Or)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== cn || Reflect.has(l, u);
        if (d !== void 0 || ct !== null && (!f || (c = dr(l, u)) != null && c.writable)) {
          d === void 0 && (d = vn(f ? mn(l[u], s) : cn), o.set(u, d));
          var v = p(d);
          if (v === cn)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), y = u in l;
        if (a && u === "length")
          for (var x = c; x < /** @type {Source<number>} */
          v.v; x += 1) {
            var C = o.get(x + "");
            C !== void 0 ? oe(C, cn) : x in l && (C = vn(cn), o.set(x + "", C));
          }
        v === void 0 ? (!y || (f = dr(l, u)) != null && f.writable) && (v = vn(void 0), oe(v, mn(c, s)), o.set(u, v)) : (y = v.v !== cn, oe(v, mn(c, s)));
        var E = Reflect.getOwnPropertyDescriptor(l, u);
        if (E != null && E.set && E.set.call(d, c), !y) {
          if (a && typeof u == "string") {
            var m = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= m.v && oe(m, $ + 1);
          }
          nu(i);
        }
        return !0;
      },
      ownKeys(l) {
        p(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== cn;
        });
        for (var [c, d] of o)
          d.v !== cn && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        mp();
      }
    }
  );
}
function nu(e, t = 1) {
  oe(e, e.v + t);
}
var dn, $c, _c, Cc;
function ws() {
  if (dn === void 0) {
    dn = window, $c = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    _c = dr(t, "firstChild").get, Cc = dr(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return _c.call(e);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return Cc.call(e);
}
function ee(e, t) {
  if (!Ie)
    return /* @__PURE__ */ rn(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ rn(tt)
  );
  if (n === null)
    n = tt.appendChild(vr());
  else if (t && n.nodeType !== 3) {
    var r = vr();
    return n == null || n.before(r), on(r), r;
  }
  return on(n), n;
}
function Ne(e, t) {
  if (!Ie) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rn(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gn(n) : n;
  }
  return tt;
}
function X(e, t = 1, n = !1) {
  let r = Ie ? tt : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gn(r);
  if (!Ie)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = vr();
    return r === null ? o == null || o.after(i) : r.before(i), on(i), i;
  }
  return on(r), /** @type {TemplateNode} */
  r;
}
function el(e) {
  e.textContent = "";
}
let Wi = !1, ra = !1, oa = null, jr = !1, tl = !1;
function ru(e) {
  tl = e;
}
let Go = [], vt = null, Rn = !1;
function Rr(e) {
  vt = e;
}
let ct = null;
function Vr(e) {
  ct = e;
}
let Yn = null;
function $p(e) {
  Yn = e;
}
let tn = null, hn = 0, sr = null;
function _p(e) {
  sr = e;
}
let kc = 1, ia = 0, Sr = !1;
function Ec() {
  return ++kc;
}
function Mo(e) {
  var t, n = e.f;
  if (n & yr)
    return !0;
  if (n & Gr) {
    var r = e.deps, o = (n & Pn) !== 0;
    if (r !== null) {
      var a, i, s = (n & ta) !== 0, l = o && ct !== null && !Sr, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ta), l && d !== null && !(d.f & Pn) && (c.f ^= Pn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], Mo(
          /** @type {Derived} */
          i
        ) && xc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || ct !== null && !Sr) && An(e, Gt);
  }
  return !1;
}
function Cp(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ea)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ea;
      }
    n = n.parent;
  }
  throw Wi = !1, e;
}
function kp(e) {
  return (e.f & Sa) === 0 && (e.parent === null || (e.parent.f & ea) === 0);
}
function Oa(e, t, n, r) {
  if (Wi) {
    if (n === null && (Wi = !1), kp(t))
      throw e;
    return;
  }
  n !== null && (Wi = !0);
  {
    Cp(e, t);
    return;
  }
}
function Sc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & Dn ? Sc(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? An(a, yr) : a.f & Gt && An(a, Gr), Ma(
        /** @type {Effect} */
        a
      ));
    }
}
function Pc(e) {
  var t, n = tn, r = hn, o = sr, a = vt, i = Sr, s = Yn, l = lt, u = Rn, c = e.f;
  tn = /** @type {null | Value[]} */
  null, hn = 0, sr = null, Sr = (c & Pn) !== 0 && (Rn || !jr || vt === null), vt = c & (mr | Oo) ? null : e, Yn = null, ou(e.ctx), Rn = !1, ia++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (tn !== null) {
      var v;
      if (aa(e, hn), f !== null && hn > 0)
        for (f.length = hn + tn.length, v = 0; v < tn.length; v++)
          f[hn + v] = tn[v];
      else
        e.deps = f = tn;
      if (!Sr)
        for (v = hn; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && hn < f.length && (aa(e, hn), f.length = hn);
    if (Ra() && sr !== null && !Rn && f !== null && !(e.f & (Dn | Gr | yr)))
      for (v = 0; v < /** @type {Source[]} */
      sr.length; v++)
        Sc(
          sr[v],
          /** @type {Effect} */
          e
        );
    return a !== null && ia++, d;
  } finally {
    tn = n, hn = r, sr = o, vt = a, Sr = i, Yn = s, ou(l), Rn = u;
  }
}
function Ep(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = op.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Dn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (tn === null || !tn.includes(t)) && (An(t, Gr), t.f & (Pn | ta) || (t.f ^= ta), bc(
    /** @type {Derived} **/
    t
  ), aa(
    /** @type {Derived} **/
    t,
    0
  ));
}
function aa(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ep(e, n[r]);
}
function Ta(e) {
  var t = e.f;
  if (!(t & Sa)) {
    An(e, Gt);
    var n = ct, r = lt, o = jr;
    ct = e, jr = !0;
    try {
      t & Xs ? Dp(e) : Rc(e), Nc(e);
      var a = Pc(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = kc;
      var i = e.deps, s;
      Qv && Yv && e.f & yr;
    } catch (l) {
      Oa(l, e, n, r || e.ctx);
    } finally {
      jr = o, ct = n;
    }
  }
}
function Sp() {
  try {
    vp();
  } catch (e) {
    if (oa !== null)
      Oa(e, oa, null);
    else
      throw e;
  }
}
function Oc() {
  var e = jr;
  try {
    var t = 0;
    for (jr = !0; Go.length > 0; ) {
      t++ > 1e3 && Sp();
      var n = Go, r = n.length;
      Go = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & Gt || (a.f ^= Gt);
        var i = Op(a);
        Pp(i);
      }
    }
  } finally {
    ra = !1, jr = e, oa = null;
  }
}
function Pp(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Sa | cr)))
        try {
          Mo(r) && (Ta(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Vc(r) : r.fn = null));
        } catch (o) {
          Oa(o, r, null, r.ctx);
        }
    }
}
function Ma(e) {
  ra || (ra = !0, queueMicrotask(Oc));
  for (var t = oa = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Oo | mr)) {
      if (!(n & Gt)) return;
      t.f ^= Gt;
    }
  }
  Go.push(t);
}
function Op(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & mr) !== 0, a = o && (r & Gt) !== 0;
    if (!a && !(r & cr)) {
      if (r & fc)
        t.push(n);
      else if (o)
        n.f ^= Gt;
      else {
        var i = vt;
        try {
          vt = n, Mo(n) && Ta(n);
        } catch (u) {
          Oa(u, n, null, n.ctx);
        } finally {
          vt = i;
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
function w(e) {
  var t;
  for (eu(); Go.length > 0; )
    ra = !0, Oc(), eu();
  return (
    /** @type {T} */
    t
  );
}
function p(e) {
  var t = e.f, n = (t & Dn) !== 0;
  if (vt !== null && !Rn) {
    Yn !== null && Yn.includes(e) && yp();
    var r = vt.deps;
    e.rv < ia && (e.rv = ia, tn === null && r !== null && r[hn] === e ? hn++ : tn === null ? tn = [e] : (!Sr || !tn.includes(e)) && tn.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & Pn) && (o.f ^= Pn);
  }
  return n && (o = /** @type {Derived} */
  e, Mo(o) && xc(o)), e.v;
}
function Xn(e) {
  var t = Rn;
  try {
    return Rn = !0, e();
  } finally {
    Rn = t;
  }
}
const Tp = -7169;
function An(e, t) {
  e.f = e.f & Tp | t;
}
function ie(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Or in e)
      bs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Or in n && bs(n);
      }
  }
}
function bs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        bs(e[r], t);
      } catch {
      }
    const n = Gs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = pc(n);
      for (let o in r) {
        const a = r[o].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
function Tc(e) {
  ct === null && vt === null && fp(), vt !== null && vt.f & Pn && ct === null && dp(), tl && cp();
}
function Mp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jr(e, t, n, r = !0) {
  var o = (e & Oo) !== 0, a = ct, i = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | yr,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Ta(i), i.f |= ep;
    } catch (u) {
      throw On(i), u;
    }
  else t !== null && Ma(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (vc | ea)) === 0;
  if (!s && !o && r && (a !== null && Mp(i, a), vt !== null && vt.f & Dn)) {
    var l = (
      /** @type {Derived} */
      vt
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function Mc(e) {
  const t = Jr(Ea, null, !1);
  return An(t, Gt), t.teardown = e, t;
}
function ho(e) {
  Tc();
  var t = ct !== null && (ct.f & mr) !== 0 && lt !== null && !lt.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      lt
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: ct,
      reaction: vt
    });
  } else {
    var r = yn(e);
    return r;
  }
}
function Np(e) {
  return Tc(), No(e);
}
function Rp(e) {
  const t = Jr(Oo, e, !0);
  return () => {
    On(t);
  };
}
function Vp(e) {
  const t = Jr(Oo, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? mo(t, () => {
      On(t), r(void 0);
    }) : (On(t), r(void 0));
  });
}
function yn(e) {
  return Jr(fc, e, !1);
}
function xe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    lt
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = No(() => {
    e(), !r.ran && (r.ran = !0, oe(n.l.r2, !0), Xn(t));
  });
}
function Yt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    lt
  );
  No(() => {
    if (p(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Gt && An(n, Gr), Mo(n) && Ta(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function No(e) {
  return Jr(Ea, e, !0);
}
function He(e, t = [], n = Fe) {
  const r = t.map(n);
  return Qr(() => e(...r.map(p)));
}
function Qr(e, t = 0) {
  return Jr(Ea | Xs | t, e, !0);
}
function pr(e, t = !0) {
  return Jr(Ea | mr, e, !0, t);
}
function Nc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = tl, r = vt;
    ru(!0), Rr(null);
    try {
      t.call(null);
    } finally {
      ru(n), Rr(r);
    }
  }
}
function Rc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    On(n, t), n = r;
  }
}
function Dp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & mr || On(t), t = n;
  }
}
function On(e, t = !0) {
  var n = !1;
  if ((t || e.f & np) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Rc(e, t && !n), aa(e, 0), An(e, Sa);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  Nc(e);
  var s = e.parent;
  s !== null && s.first !== null && Vc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Vc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function mo(e, t) {
  var n = [];
  nl(e, n, !0), Dc(n, () => {
    On(e), t && t();
  });
}
function Dc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function nl(e, t, n) {
  if (!(e.f & cr)) {
    if (e.f ^= cr, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & To) !== 0 || (r.f & mr) !== 0;
      nl(r, t, a ? n : !1), r = o;
    }
  }
}
function ri(e) {
  Ac(e, !0);
}
function Ac(e, t) {
  if (e.f & cr) {
    e.f ^= cr, e.f & Gt || (e.f ^= Gt), Mo(e) && (An(e, yr), Ma(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & To) !== 0 || (n.f & mr) !== 0;
      Ac(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Na(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let lt = null;
function ou(e) {
  lt = e;
}
function Wr(e) {
  return (
    /** @type {T} */
    rl().get(e)
  );
}
function yo(e, t) {
  return rl().set(e, t), t;
}
function Ap(e) {
  return rl().has(e);
}
function $e(e, t = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Po && !t && (lt.l = {
    s: null,
    u: null,
    r1: [],
    r2: vn(!1)
  });
}
function _e(e) {
  const t = lt;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = ct, r = vt;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Vr(a.effect), Rr(a.reaction), yn(a.fn);
        }
      } finally {
        Vr(n), Rr(r);
      }
    }
    lt = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ra() {
  return !Po || lt !== null && lt.l === null;
}
function rl(e) {
  return lt === null && Na(), lt.c ?? (lt.c = new Map(zp(lt) || void 0));
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
function Lp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Hp = [
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
function Ip(e) {
  return Hp.includes(e);
}
const Bp = {
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
function jp(e) {
  return e = e.toLowerCase(), Bp[e] ?? e;
}
const Zp = ["touchstart", "touchmove"];
function Yp(e) {
  return Zp.includes(e);
}
const Wp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Kp(e) {
  return Wp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Fp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, gi(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Xp(e) {
  Ie && /* @__PURE__ */ rn(e) !== null && el(e);
}
let iu = !1;
function qp() {
  iu || (iu = !0, document.addEventListener(
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
function Up(e) {
  var t = vt, n = ct;
  Rr(null), Vr(null);
  try {
    return e();
  } finally {
    Rr(t), Vr(n);
  }
}
const zc = /* @__PURE__ */ new Set(), xs = /* @__PURE__ */ new Set();
function Lc(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Fo.call(t, a), !a.cancelBubble)
      return Up(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gi(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function xt(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Lc(e, t, n, a);
  (t === document.body || t === window || t === document) && Mc(() => {
    t.removeEventListener(e, i, a);
  });
}
function Va(e) {
  for (var t = 0; t < e.length; t++)
    zc.add(e[t]);
  for (var n of xs)
    n(e);
}
function Fo(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, a = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = a.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = a.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== n) {
    Qo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = vt, f = ct;
    Rr(null), Vr(null);
    try {
      for (var v, y = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = i["__" + o];
          if (C !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (pi(C)) {
              var [E, ...m] = C;
              E.apply(i, [e, ...m]);
            } else
              C.call(i, e);
        } catch ($) {
          v ? y.push($) : v = $;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        i = x;
      }
      if (v) {
        for (let $ of y)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Rr(d), Vr(f);
    }
  }
}
function ol(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function gn(e, t) {
  var n = (
    /** @type {Effect} */
    ct
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var n = (t & cc) !== 0, r = (t & Jv) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Ie)
      return gn(tt, null), tt;
    o === void 0 && (o = ol(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ rn(o)));
    var i = (
      /** @type {TemplateNode} */
      r || $c ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rn(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      gn(s, l);
    } else
      gn(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function Re(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & cc) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Ie)
      return gn(tt, null), tt;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        ol(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ rn(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ rn(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ rn(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ rn(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rn(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      gn(c, d);
    } else
      gn(u, u);
    return u;
  };
}
function at(e = "") {
  if (!Ie) {
    var t = vr(e + "");
    return gn(t, t), t;
  }
  var n = tt;
  return n.nodeType !== 3 && (n.before(n = vr()), on(n)), gn(n, n), n;
}
function Ct() {
  if (Ie)
    return gn(tt, null), tt;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = vr();
  return e.append(t, n), gn(t, n), e;
}
function B(e, t) {
  if (Ie) {
    ct.nodes_end = tt, Fn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Jn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Hc(e, t) {
  return Ic(e, t);
}
function Gp(e, t) {
  ws(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ie, o = tt;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rn(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ws); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(a);
    if (!a)
      throw uo;
    wn(!0), on(
      /** @type {Comment} */
      a
    ), Fn();
    const i = Ic(e, { ...t, anchor: a });
    if (tt === null || tt.nodeType !== 8 || /** @type {Comment} */
    tt.data !== Fs)
      throw Pa(), uo;
    return wn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === uo)
      return t.recover === !1 && pp(), ws(), el(n), wn(!1), Hc(e, t);
    throw i;
  } finally {
    wn(r), on(o);
  }
}
const io = /* @__PURE__ */ new Map();
function Ic(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  ws();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = Yp(v);
        t.addEventListener(v, Fo, { passive: y });
        var x = io.get(v);
        x === void 0 ? (document.addEventListener(v, Fo, { passive: y }), io.set(v, 1)) : io.set(v, x + 1);
      }
    }
  };
  l(Us(zc)), xs.add(l);
  var u = void 0, c = Vp(() => {
    var d = n ?? t.appendChild(vr());
    return pr(() => {
      if (a) {
        $e({});
        var f = (
          /** @type {ComponentContext} */
          lt
        );
        f.c = a;
      }
      o && (r.$$events = o), Ie && gn(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ie && (ct.nodes_end = tt), a && _e();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Fo);
        var y = (
          /** @type {number} */
          io.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, Fo), io.delete(v)) : io.set(v, y);
      }
      xs.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return $s.set(u, c), u;
}
let $s = /* @__PURE__ */ new WeakMap();
function Jp(e, t) {
  const n = $s.get(e);
  return n ? ($s.delete(e), n(t)) : Promise.resolve();
}
function Ve(e, t, [n, r] = [0, 0]) {
  Ie && n === 0 && Fn();
  var o = e, a = null, i = null, s = cn, l = n > 0 ? To : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (Ie && r !== -1) {
      if (n === 0) {
        const C = (
          /** @type {Comment} */
          o.data
        );
        C === Ws ? r = 0 : C === Ks ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ys(), on(o), wn(!1), y = !0, r = -1);
    }
    s ? (a ? ri(a) : v && (a = pr(() => v(o))), i && mo(i, () => {
      i = null;
    })) : (i ? ri(i) : v && (i = pr(() => v(o, [n + 1, r]))), a && mo(a, () => {
      a = null;
    })), y && wn(!0);
  };
  Qr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ie && (o = tt);
}
function Da(e, t) {
  return t;
}
function Qp(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    nl(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    el(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kr(e, t[0].prev, t[a - 1].next);
  }
  Dc(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), kr(e, c.prev, c.next)), On(c.e, !s);
    }
  });
}
function xn(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & lc) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Ie ? on(
      /** @type {Comment | Text} */
      /* @__PURE__ */ rn(u)
    ) : u.appendChild(vr());
  }
  Ie && Fn();
  var c = null, d = !1, f = /* @__PURE__ */ Pe(() => {
    var v = n();
    return pi(v) ? v : v == null ? [] : Us(v);
  });
  Qr(() => {
    var v = p(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let x = !1;
    if (Ie) {
      var C = (
        /** @type {Comment} */
        i.data === Ks
      );
      C !== (y === 0) && (i = ys(), on(i), wn(!1), x = !0);
    }
    if (Ie) {
      for (var E = null, m, $ = 0; $ < y; $++) {
        if (tt.nodeType === 8 && /** @type {Comment} */
        tt.data === Fs) {
          i = /** @type {Comment} */
          tt, x = !0, wn(!1);
          break;
        }
        var g = v[$], _ = r(g, $);
        m = Bc(
          tt,
          s,
          E,
          null,
          g,
          _,
          $,
          o,
          t,
          n
        ), s.items.set(_, m), E = m;
      }
      y > 0 && on(ys());
    }
    Ie || eg(v, s, i, o, t, r, n), a !== null && (y === 0 ? c ? ri(c) : c = pr(() => a(i)) : c !== null && mo(c, () => {
      c = null;
    })), x && wn(!0), p(f);
  }), Ie && (i = tt);
}
function eg(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & Kv) !== 0, f = (o & (Zs | Ys)) !== 0, v = e.length, y = t.items, x = t.first, C = x, E, m = null, $, g = [], _ = [], T, O, N, V;
  if (d)
    for (V = 0; V < v; V += 1)
      T = e[V], O = a(T, V), N = y.get(O), N !== void 0 && ((s = N.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(N));
  for (V = 0; V < v; V += 1) {
    if (T = e[V], O = a(T, V), N = y.get(O), N === void 0) {
      var H = C ? (
        /** @type {TemplateNode} */
        C.e.nodes_start
      ) : n;
      m = Bc(
        H,
        t,
        m,
        m === null ? t.first : m.next,
        T,
        O,
        V,
        r,
        o,
        i
      ), y.set(O, m), g = [], _ = [], C = m.next;
      continue;
    }
    if (f && tg(N, T, V, o), N.e.f & cr && (ri(N.e), d && ((l = N.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(N))), N !== C) {
      if (E !== void 0 && E.has(N)) {
        if (g.length < _.length) {
          var Z = _[0], L;
          m = Z.prev;
          var F = g[0], P = g[g.length - 1];
          for (L = 0; L < g.length; L += 1)
            au(g[L], Z, n);
          for (L = 0; L < _.length; L += 1)
            E.delete(_[L]);
          kr(t, F.prev, P.next), kr(t, m, F), kr(t, P, Z), C = Z, m = P, V -= 1, g = [], _ = [];
        } else
          E.delete(N), au(N, C, n), kr(t, N.prev, N.next), kr(t, N, m === null ? t.first : m.next), kr(t, m, N), m = N;
        continue;
      }
      for (g = [], _ = []; C !== null && C.k !== O; )
        C.e.f & cr || (E ?? (E = /* @__PURE__ */ new Set())).add(C), _.push(C), C = C.next;
      if (C === null)
        continue;
      N = C;
    }
    g.push(N), m = N, C = N.next;
  }
  if (C !== null || E !== void 0) {
    for (var M = E === void 0 ? [] : Us(E); C !== null; )
      C.e.f & cr || M.push(C), C = C.next;
    var S = M.length;
    if (S > 0) {
      var k = o & lc && v === 0 ? n : null;
      if (d) {
        for (V = 0; V < S; V += 1)
          (u = M[V].a) == null || u.measure();
        for (V = 0; V < S; V += 1)
          (c = M[V].a) == null || c.fix();
      }
      Qp(t, M, k, y);
    }
  }
  d && gi(() => {
    var z;
    if ($ !== void 0)
      for (N of $)
        (z = N.a) == null || z.apply();
  }), ct.first = t.first && t.first.e, ct.last = m && m.e;
}
function tg(e, t, n, r) {
  r & Zs && ms(e.v, t), r & Ys ? ms(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Bc(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Zs) !== 0, d = (l & Fv) === 0, f = c ? d ? /* @__PURE__ */ hi(o) : vn(o) : o, v = l & Ys ? vn(i) : i, y = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return y.e = pr(() => s(e, f, v, u), Ie), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function au(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== r; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(a)
    );
    o.before(a), a = i;
  }
}
function kr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function jc(e, t, n, r, o) {
  var a = e, i = "", s;
  Qr(() => {
    if (i === (i = t() ?? "")) {
      Ie && Fn();
      return;
    }
    s !== void 0 && (On(s), s = void 0), i !== "" && (s = pr(() => {
      if (Ie) {
        tt.data;
        for (var l = Fn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Gn(l);
        if (l === null)
          throw Pa(), uo;
        gn(tt, u), a = on(l);
        return;
      }
      var c = i + "", d = ol(c);
      gn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ rn(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function Ut(e, t, n, r, o) {
  var a;
  Ie && Fn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function ng(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Kr(e, t, ...n) {
  var r = e, o = Bt, a;
  Qr(() => {
    o !== (o = t()) && (a && (On(a), a = null), a = pr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, To), Ie && (r = tt);
}
function Zc(e, t, n) {
  Ie && Fn();
  var r = e, o, a;
  Qr(() => {
    o !== (o = t()) && (a && (mo(a), a = null), o && (a = pr(() => n(r, o))));
  }, To), Ie && (r = tt);
}
function rg(e, t, n, r, o, a) {
  let i = Ie;
  Ie && Fn();
  var s, l, u = null;
  Ie && tt.nodeType === 1 && (u = /** @type {Element} */
  tt, Fn());
  var c = (
    /** @type {TemplateNode} */
    Ie ? tt : e
  ), d;
  Qr(() => {
    const f = t() || null;
    var v = f === "svg" ? dc : null;
    f !== s && (d && (f === null ? mo(d, () => {
      d = null, l = null;
    }) : f === l ? ri(d) : On(d)), f && f !== l && (d = pr(() => {
      if (u = Ie ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), gn(u, u), r) {
        Ie && Kp(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          Ie ? /* @__PURE__ */ rn(u) : u.appendChild(vr())
        );
        Ie && (y === null ? wn(!1) : on(y)), r(u, y);
      }
      ct.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, To), i && (wn(!0), on(c));
}
function mt(e, t) {
  gi(() => {
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
function qt(e, t, n) {
  yn(() => {
    var r = Xn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      No(() => {
        var i = n();
        ie(i), o && Js(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Yc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Yc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function og() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Yc(e)) && (r && (r += " "), r += t);
  return r;
}
function Qn(e) {
  return typeof e == "object" ? og(e) : e ?? "";
}
const su = [...` 	
\r\f \v\uFEFF`];
function ig(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || su.includes(r[i - 1])) && (s === r.length || su.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function an(e, t, n, r, o, a) {
  var i = e.__className;
  if (Ie || i !== n) {
    var s = ig(n, r, a);
    (!Ie || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const Zo = Symbol("class");
function Wc(e) {
  if (Ie) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          be(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          be(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, up(n), qp();
  }
}
function ag(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ie && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[rp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Kc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function zn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Ie && a;
  s && wn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Qn(n.class) : (r || n[Zo]) && (n.class = null);
  var d = Kc(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const $ in n) {
    let g = n[$];
    if (u && $ === "value" && g == null) {
      e.value = e.__value = "", l[$] = g;
      continue;
    }
    if ($ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      an(e, v, g, r, t == null ? void 0 : t[Zo], n[Zo]), l[$] = g, l[Zo] = n[Zo];
      continue;
    }
    var y = l[$];
    if (g !== y) {
      l[$] = g;
      var x = $[0] + $[1];
      if (x !== "$$") {
        if (x === "on") {
          const _ = {}, T = "$$" + $;
          let O = $.slice(2);
          var C = Ip(O);
          if (Lp(O) && (O = O.slice(0, -7), _.capture = !0), !C && y) {
            if (g != null) continue;
            e.removeEventListener(O, l[T], _), l[T] = null;
          }
          if (g != null)
            if (C)
              e[`__${O}`] = g, Va([O]);
            else {
              let N = function(V) {
                l[$].call(this, V);
              };
              l[T] = Lc(O, e, N, _);
            }
          else C && (e[`__${O}`] = void 0);
        } else if ($ === "style" && g != null)
          e.style.cssText = g + "";
        else if ($ === "autofocus")
          Fp(
            /** @type {HTMLElement} */
            e,
            !!g
          );
        else if (!a && ($ === "__value" || $ === "value" && g != null))
          e.value = e.__value = g;
        else if ($ === "selected" && u)
          ag(
            /** @type {HTMLOptionElement} */
            e,
            g
          );
        else {
          var E = $;
          o || (E = jp(E));
          var m = E === "defaultValue" || E === "defaultChecked";
          if (g == null && !a && !m)
            if (f[$] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const T = t === void 0;
              if (E === "value") {
                let O = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = O, _.value = _.__value = T ? O : null;
              } else {
                let O = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = O, _.checked = T ? O : !1;
              }
            } else
              e.removeAttribute($);
          else m || d.includes(E) && (a || typeof g != "string") ? e[E] = g : typeof g != "function" && be(e, E, g);
        }
        $ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && wn(!0), l;
}
var lu = /* @__PURE__ */ new Map();
function Kc(e) {
  var t = lu.get(e.nodeName);
  if (t) return t;
  lu.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = pc(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = Gs(r);
  }
  return t;
}
function Nt(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Ir, Jo, Ki, _s, Fc;
const Cs = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    so(this, _s), so(this, Ir, /* @__PURE__ */ new WeakMap()), so(this, Jo), so(this, Ki), Qi(this, Ki, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Rt(this, Ir).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Rt(this, Ir).set(t, r), jv(this, _s, Fc).call(this).observe(t, Rt(this, Ki)), () => {
      var o = Rt(this, Ir).get(t);
      o.delete(n), o.size === 0 && (Rt(this, Ir).delete(t), Rt(this, Jo).unobserve(t));
    };
  }
};
Ir = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakSet(), Fc = function() {
  return Rt(this, Jo) ?? Qi(this, Jo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Cs.entries.set(t.target, t);
        for (var n of Rt(this, Ir).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
fn(Cs, "entries", /* @__PURE__ */ new WeakMap());
let sg = Cs;
var lg = /* @__PURE__ */ new sg({
  box: "border-box"
});
function uu(e, t, n) {
  var r = lg.observe(e, () => n(e[t]));
  yn(() => (Xn(() => n(e[t])), r));
}
function cu(e, t) {
  return e === t || (e == null ? void 0 : e[Or]) === t;
}
function gr(e = {}, t, n, r) {
  return yn(() => {
    var o, a;
    return No(() => {
      o = a, a = [], Xn(() => {
        e !== n(...a) && (t(e, ...a), o && cu(n(...o), e) && t(null, ...o));
      });
    }), () => {
      gi(() => {
        a && cu(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ge(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = t.l.u;
  if (!n) return;
  let r = () => ie(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Fe(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => p(i);
  }
  n.b.length && Np(() => {
    du(t, r), ei(n.b);
  }), ho(() => {
    const o = Xn(() => n.m.map(sp));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && ho(() => {
    du(t, r), ei(n.a);
  });
}
function du(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function it(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = pi(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function er(e) {
  lt === null && Na(), Po && lt.l !== null ? cg(lt).m.push(e) : ho(() => {
    const t = Xn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function il(e) {
  lt === null && Na(), er(() => () => Xn(e));
}
function ug(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Aa() {
  const e = lt;
  return e === null && Na(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = pi(a) ? a.slice() : [a], s = ug(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of i)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function cg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function al(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Bt;
  const r = Xn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ao = [];
function kn(e, t) {
  return {
    subscribe: Me(e, t).subscribe
  };
}
function Me(e, t = Bt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Js(e, s) && (e = s, n)) {
      const l = !ao.length;
      for (const u of r)
        u[1](), ao.push(u, e);
      if (l) {
        for (let u = 0; u < ao.length; u += 2)
          ao[u][0](ao[u + 1]);
        ao.length = 0;
      }
    }
  }
  function a(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = Bt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || Bt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function Tr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return kn(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = Bt;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? u[0] : u, i, s);
      a ? i(y) : d = typeof y == "function" ? y : Bt;
    }, v = o.map(
      (y, x) => al(
        y,
        (C) => {
          u[x] = C, c &= ~(1 << x), l && f();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, f(), function() {
      ei(v), d(), l = !1;
    };
  });
}
function te(e) {
  let t;
  return al(e, (n) => t = n)(), t;
}
let Li = !1, ks = Symbol();
function se(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ hi(void 0),
    unsubscribe: Bt
  });
  if (r.store !== e && !(ks in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Bt;
    else {
      var o = !0;
      r.unsubscribe = al(e, (a) => {
        o ? r.source.v = a : oe(r.source, a);
      }), o = !1;
    }
  return e && ks in n ? te(e) : p(r.source);
}
function dg(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Bt), e;
}
function sa(e, t) {
  return e.set(t), t;
}
function kt() {
  const e = {};
  function t() {
    Mc(() => {
      for (var n in e)
        e[n].unsubscribe();
      Qo(e, ks, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function fg(e) {
  var t = Li;
  try {
    return Li = !1, [e(), Li];
  } finally {
    Li = t;
  }
}
const vg = {
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
function ln(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    vg
  );
}
const pg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return p(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = b(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      uc
    )), e.special[t](n), tu(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), tu(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Pt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: vn(0) }, pg);
}
const gg = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      jo(o) && (o = o());
      const a = dr(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = dr(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Or || t === qs) return !1;
    for (let n of e.props)
      if (jo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      jo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function It(...e) {
  return new Proxy({ props: e }, gg);
}
function b(e, t, n, r) {
  var o, a = (n & Xv) !== 0, i = !Po || (n & qv) !== 0, s = (n & Uv) !== 0, l = (n & Gv) !== 0, u = !1, c;
  s ? [c, u] = fg(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Or in e || qs in e, f = s && (((o = dr(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((O) => e[t] = O))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, x = !1, C = () => (x = !0, y && (y = !1, l ? v = Xn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && gp(), c = C(), f && f(c));
  var E;
  if (i)
    E = () => {
      var O = (
        /** @type {V} */
        e[t]
      );
      return O === void 0 ? C() : (y = !0, x = !1, O);
    };
  else {
    var m = (a ? Fe : Pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    m.f |= tp, E = () => {
      var O = p(m);
      return O !== void 0 && (v = /** @type {V} */
      void 0), O === void 0 ? v : O;
    };
  }
  if (!(n & uc))
    return E;
  if (f) {
    var $ = e.$$legacy;
    return function(O, N) {
      return arguments.length > 0 ? ((!i || !N || $ || u) && f(N ? E() : O), O) : E();
    };
  }
  var g = !1, _ = /* @__PURE__ */ hi(c), T = /* @__PURE__ */ Fe(() => {
    var O = E(), N = p(_);
    return g ? (g = !1, N) : _.v = O;
  });
  return a || (T.equals = Qs), function(O, N) {
    if (arguments.length > 0) {
      const V = N ? p(T) : i && s ? mn(O) : O;
      return T.equals(V) || (g = !0, oe(_, V), x && v !== void 0 && (v = V), Xn(() => p(T))), O;
    }
    return p(T);
  };
}
function hg(e) {
  return new mg(e);
}
var Cr, Mn;
class mg {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    so(this, Cr), so(this, Mn);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ hi(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return p(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === qs ? !0 : (p(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return oe(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Qi(this, Mn, (t.hydrate ? Gp : Hc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && w(), Qi(this, Cr, a.$$events);
    for (const i of Object.keys(Rt(this, Mn)))
      i === "$set" || i === "$destroy" || i === "$on" || Qo(this, i, {
        get() {
          return Rt(this, Mn)[i];
        },
        /** @param {any} value */
        set(s) {
          Rt(this, Mn)[i] = s;
        },
        enumerable: !0
      });
    Rt(this, Mn).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, Rt(this, Mn).$destroy = () => {
      Jp(Rt(this, Mn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Rt(this, Mn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    Rt(this, Cr)[t] = Rt(this, Cr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return Rt(this, Cr)[t].push(r), () => {
      Rt(this, Cr)[t] = Rt(this, Cr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    Rt(this, Mn).$destroy();
  }
}
Cr = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap();
let Xc;
typeof HTMLElement == "function" && (Xc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), fn(this, "$$ctor"), fn(this, "$$s"), fn(this, "$$c"), fn(this, "$$cn", !1), fn(this, "$$d", {}), fn(this, "$$r", !1), fn(this, "$$p_d", {}), fn(this, "$$l", {}), fn(this, "$$l_u", /* @__PURE__ */ new Map()), fn(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), B(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = yg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Fi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = hg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Rp(() => {
        No(() => {
          var r;
          this.$$r = !0;
          for (const o of na(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = Fi(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const a = this.$$c.$on(r, o);
          this.$$l_u.set(o, a);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Fi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return na(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Fi(e, t, n, r) {
  var o;
  const a = (o = n[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function yg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function he(e, t, n, r, o, a) {
  let i = class extends Xc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return na(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return na(t).forEach((s) => {
    Qo(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Fi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = dr(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Qo(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function un(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = un(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var wg = { value: () => {
} };
function za() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xi(n);
}
function Xi(e) {
  this._ = e;
}
function bg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xi.prototype = za.prototype = {
  constructor: Xi,
  on: function(e, t) {
    var n = this._, r = bg(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = xg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = fu(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = fu(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Xi(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, a; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], r = 0, o = a.length; r < o; ++r) a[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, a = r.length; o < a; ++o) r[o].value.apply(t, n);
  }
};
function xg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function fu(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = wg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Es = "http://www.w3.org/1999/xhtml";
const vu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function La(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vu.hasOwnProperty(t) ? { space: vu[t], local: e } : e;
}
function $g(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Es && t.documentElement.namespaceURI === Es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function _g(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function qc(e) {
  var t = La(e);
  return (t.local ? _g : $g)(t);
}
function Cg() {
}
function sl(e) {
  return e == null ? Cg : function() {
    return this.querySelector(e);
  };
}
function kg(e) {
  typeof e != "function" && (e = sl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new $n(r, this._parents);
}
function Eg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Sg() {
  return [];
}
function Uc(e) {
  return e == null ? Sg : function() {
    return this.querySelectorAll(e);
  };
}
function Pg(e) {
  return function() {
    return Eg(e.apply(this, arguments));
  };
}
function Og(e) {
  typeof e == "function" ? e = Pg(e) : e = Uc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new $n(r, o);
}
function Gc(e) {
  return function() {
    return this.matches(e);
  };
}
function Jc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Tg = Array.prototype.find;
function Mg(e) {
  return function() {
    return Tg.call(this.children, e);
  };
}
function Ng() {
  return this.firstElementChild;
}
function Rg(e) {
  return this.select(e == null ? Ng : Mg(typeof e == "function" ? e : Jc(e)));
}
var Vg = Array.prototype.filter;
function Dg() {
  return Array.from(this.children);
}
function Ag(e) {
  return function() {
    return Vg.call(this.children, e);
  };
}
function zg(e) {
  return this.selectAll(e == null ? Dg : Ag(typeof e == "function" ? e : Jc(e)));
}
function Lg(e) {
  typeof e != "function" && (e = Gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new $n(r, this._parents);
}
function Qc(e) {
  return new Array(e.length);
}
function Hg() {
  return new $n(this._enter || this._groups.map(Qc), this._parents);
}
function la(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
la.prototype = {
  constructor: la,
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
function Ig(e) {
  return function() {
    return e;
  };
}
function Bg(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new la(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function jg(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new la(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function Zg(e) {
  return e.__data__;
}
function Yg(e, t) {
  if (!arguments.length) return Array.from(this, Zg);
  var n = t ? jg : Bg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ig(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = Wg(e.call(c, c && c.__data__, u, r)), y = v.length, x = s[u] = new Array(y), C = i[u] = new Array(y), E = l[u] = new Array(f);
    n(c, d, x, C, E, v, t);
    for (var m = 0, $ = 0, g, _; m < y; ++m)
      if (g = x[m]) {
        for (m >= $ && ($ = m + 1); !(_ = C[$]) && ++$ < y; ) ;
        g._next = _ || null;
      }
  }
  return i = new $n(i, r), i._enter = s, i._exit = l, i;
}
function Wg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Kg() {
  return new $n(this._exit || this._groups.map(Qc), this._parents);
}
function Fg(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Xg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new $n(s, this._parents);
}
function qg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function Ug(e) {
  e || (e = Gg);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new $n(o, this._parents).order();
}
function Gg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Qg() {
  return Array.from(this);
}
function eh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function th() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function nh() {
  return !this.node();
}
function rh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function oh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ih(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ah(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function lh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function uh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ch(e, t) {
  var n = La(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ih : oh : typeof t == "function" ? n.local ? uh : lh : n.local ? sh : ah)(n, t));
}
function ed(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function dh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function vh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ph(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? dh : typeof t == "function" ? vh : fh)(e, t, n ?? "")) : wo(this.node(), e);
}
function wo(e, t) {
  return e.style.getPropertyValue(t) || ed(e).getComputedStyle(e, null).getPropertyValue(t);
}
function gh(e) {
  return function() {
    delete this[e];
  };
}
function hh(e, t) {
  return function() {
    this[e] = t;
  };
}
function mh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function yh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? gh : typeof t == "function" ? mh : hh)(e, t)) : this.node()[e];
}
function td(e) {
  return e.trim().split(/^|\s+/);
}
function ll(e) {
  return e.classList || new nd(e);
}
function nd(e) {
  this._node = e, this._names = td(e.getAttribute("class") || "");
}
nd.prototype = {
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
function rd(e, t) {
  for (var n = ll(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function od(e, t) {
  for (var n = ll(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function wh(e) {
  return function() {
    rd(this, e);
  };
}
function bh(e) {
  return function() {
    od(this, e);
  };
}
function xh(e, t) {
  return function() {
    (t.apply(this, arguments) ? rd : od)(this, e);
  };
}
function $h(e, t) {
  var n = td(e + "");
  if (arguments.length < 2) {
    for (var r = ll(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xh : t ? wh : bh)(n, t));
}
function _h() {
  this.textContent = "";
}
function Ch(e) {
  return function() {
    this.textContent = e;
  };
}
function kh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Eh(e) {
  return arguments.length ? this.each(e == null ? _h : (typeof e == "function" ? kh : Ch)(e)) : this.node().textContent;
}
function Sh() {
  this.innerHTML = "";
}
function Ph(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Oh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Th(e) {
  return arguments.length ? this.each(e == null ? Sh : (typeof e == "function" ? Oh : Ph)(e)) : this.node().innerHTML;
}
function Mh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Nh() {
  return this.each(Mh);
}
function Rh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vh() {
  return this.each(Rh);
}
function Dh(e) {
  var t = typeof e == "function" ? e : qc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ah() {
  return null;
}
function zh(e, t) {
  var n = typeof e == "function" ? e : qc(e), r = t == null ? Ah : typeof t == "function" ? t : sl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Lh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Hh() {
  return this.each(Lh);
}
function Ih() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jh(e) {
  return this.select(e ? Bh : Ih);
}
function Zh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Wh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Kh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Fh(e, t, n) {
  return function() {
    var r = this.__on, o, a = Yh(t);
    if (r) {
      for (var i = 0, s = r.length; i < s; ++i)
        if ((o = r[i]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), o = { type: e.type, name: e.name, value: t, listener: a, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Xh(e, t, n) {
  var r = Wh(e + ""), o, a = r.length, i;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < a; ++o)
          if ((i = r[o]).type === c.type && i.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Fh : Kh, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function id(e, t, n) {
  var r = ed(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function qh(e, t) {
  return function() {
    return id(this, e, t);
  };
}
function Uh(e, t) {
  return function() {
    return id(this, e, t.apply(this, arguments));
  };
}
function Gh(e, t) {
  return this.each((typeof t == "function" ? Uh : qh)(e, t));
}
function* Jh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var ad = [null];
function $n(e, t) {
  this._groups = e, this._parents = t;
}
function mi() {
  return new $n([[document.documentElement]], ad);
}
function Qh() {
  return this;
}
$n.prototype = mi.prototype = {
  constructor: $n,
  select: kg,
  selectAll: Og,
  selectChild: Rg,
  selectChildren: zg,
  filter: Lg,
  data: Yg,
  enter: Hg,
  exit: Kg,
  join: Fg,
  merge: Xg,
  selection: Qh,
  order: qg,
  sort: Ug,
  call: Jg,
  nodes: Qg,
  node: eh,
  size: th,
  empty: nh,
  each: rh,
  attr: ch,
  style: ph,
  property: yh,
  classed: $h,
  text: Eh,
  html: Th,
  raise: Nh,
  lower: Vh,
  append: Dh,
  insert: zh,
  remove: Hh,
  clone: jh,
  datum: Zh,
  on: Xh,
  dispatch: Gh,
  [Symbol.iterator]: Jh
};
function En(e) {
  return typeof e == "string" ? new $n([[document.querySelector(e)]], [document.documentElement]) : new $n([[e]], ad);
}
function e1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Nn(e, t) {
  if (e = e1(e), t === void 0 && (t = e.currentTarget), t) {
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
const t1 = { passive: !1 }, oi = { capture: !0, passive: !1 };
function ss(e) {
  e.stopImmediatePropagation();
}
function co(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function sd(e) {
  var t = e.document.documentElement, n = En(e).on("dragstart.drag", co, oi);
  "onselectstart" in t ? n.on("selectstart.drag", co, oi) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ld(e, t) {
  var n = e.document.documentElement, r = En(e).on("dragstart.drag", null);
  t && (r.on("click.drag", co, oi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Hi = (e) => () => e;
function Ss(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: a,
  x: i,
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
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: i, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ss.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function n1(e) {
  return !e.ctrlKey && !e.button;
}
function r1() {
  return this.parentNode;
}
function o1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function i1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function a1() {
  var e = n1, t = r1, n = o1, r = i1, o = {}, a = za("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(g) {
    g.on("mousedown.drag", v).filter(r).on("touchstart.drag", C).on("touchmove.drag", E, t1).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(g, _) {
    if (!(c || !e.call(this, g, _))) {
      var T = $(this, t.call(this, g, _), g, _, "mouse");
      T && (En(g.view).on("mousemove.drag", y, oi).on("mouseup.drag", x, oi), sd(g.view), ss(g), u = !1, s = g.clientX, l = g.clientY, T("start", g));
    }
  }
  function y(g) {
    if (co(g), !u) {
      var _ = g.clientX - s, T = g.clientY - l;
      u = _ * _ + T * T > d;
    }
    o.mouse("drag", g);
  }
  function x(g) {
    En(g.view).on("mousemove.drag mouseup.drag", null), ld(g.view, u), co(g), o.mouse("end", g);
  }
  function C(g, _) {
    if (e.call(this, g, _)) {
      var T = g.changedTouches, O = t.call(this, g, _), N = T.length, V, H;
      for (V = 0; V < N; ++V)
        (H = $(this, O, g, _, T[V].identifier, T[V])) && (ss(g), H("start", g, T[V]));
    }
  }
  function E(g) {
    var _ = g.changedTouches, T = _.length, O, N;
    for (O = 0; O < T; ++O)
      (N = o[_[O].identifier]) && (co(g), N("drag", g, _[O]));
  }
  function m(g) {
    var _ = g.changedTouches, T = _.length, O, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), O = 0; O < T; ++O)
      (N = o[_[O].identifier]) && (ss(g), N("end", g, _[O]));
  }
  function $(g, _, T, O, N, V) {
    var H = a.copy(), Z = Nn(V || T, _), L, F, P;
    if ((P = n.call(g, new Ss("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: N,
      active: i,
      x: Z[0],
      y: Z[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), O)) != null)
      return L = P.x - Z[0] || 0, F = P.y - Z[1] || 0, function M(S, k, z) {
        var j = Z, K;
        switch (S) {
          case "start":
            o[N] = M, K = i++;
            break;
          case "end":
            delete o[N], --i;
          // falls through
          case "drag":
            Z = Nn(z || k, _), K = i;
            break;
        }
        H.call(
          S,
          g,
          new Ss(S, {
            sourceEvent: k,
            subject: P,
            target: f,
            identifier: N,
            active: K,
            x: Z[0] + L,
            y: Z[1] + F,
            dx: Z[0] - j[0],
            dy: Z[1] - j[1],
            dispatch: H
          }),
          O
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Hi(!!g), f) : e;
  }, f.container = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Hi(g), f) : t;
  }, f.subject = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Hi(g), f) : n;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Hi(!!g), f) : r;
  }, f.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (d = (g = +g) * g, f) : Math.sqrt(d);
  }, f;
}
function ul(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ud(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function yi() {
}
var ii = 0.7, ua = 1 / ii, fo = "\\s*([+-]?\\d+)\\s*", ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", s1 = /^#([0-9a-f]{3,8})$/, l1 = new RegExp(`^rgb\\(${fo},${fo},${fo}\\)$`), u1 = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), c1 = new RegExp(`^rgba\\(${fo},${fo},${fo},${ai}\\)$`), d1 = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${ai}\\)$`), f1 = new RegExp(`^hsl\\(${ai},${Wn},${Wn}\\)$`), v1 = new RegExp(`^hsla\\(${ai},${Wn},${Wn},${ai}\\)$`), pu = {
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
ul(yi, si, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gu,
  // Deprecated! Use color.formatHex.
  formatHex: gu,
  formatHex8: p1,
  formatHsl: g1,
  formatRgb: hu,
  toString: hu
});
function gu() {
  return this.rgb().formatHex();
}
function p1() {
  return this.rgb().formatHex8();
}
function g1() {
  return cd(this).formatHsl();
}
function hu() {
  return this.rgb().formatRgb();
}
function si(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = s1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mu(t) : n === 3 ? new pn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ii(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ii(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = l1.exec(e)) ? new pn(t[1], t[2], t[3], 1) : (t = u1.exec(e)) ? new pn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = c1.exec(e)) ? Ii(t[1], t[2], t[3], t[4]) : (t = d1.exec(e)) ? Ii(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = f1.exec(e)) ? bu(t[1], t[2] / 100, t[3] / 100, 1) : (t = v1.exec(e)) ? bu(t[1], t[2] / 100, t[3] / 100, t[4]) : pu.hasOwnProperty(e) ? mu(pu[e]) : e === "transparent" ? new pn(NaN, NaN, NaN, 0) : null;
}
function mu(e) {
  return new pn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ii(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pn(e, t, n, r);
}
function h1(e) {
  return e instanceof yi || (e = si(e)), e ? (e = e.rgb(), new pn(e.r, e.g, e.b, e.opacity)) : new pn();
}
function Ps(e, t, n, r) {
  return arguments.length === 1 ? h1(e) : new pn(e, t, n, r ?? 1);
}
function pn(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ul(pn, Ps, ud(yi, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new pn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new pn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pn(Zr(this.r), Zr(this.g), Zr(this.b), ca(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: yu,
  // Deprecated! Use color.formatHex.
  formatHex: yu,
  formatHex8: m1,
  formatRgb: wu,
  toString: wu
}));
function yu() {
  return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}`;
}
function m1() {
  return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}${Br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wu() {
  const e = ca(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ca(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Br(e) {
  return e = Zr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vn(e, t, n, r);
}
function cd(e) {
  if (e instanceof Vn) return new Vn(e.h, e.s, e.l, e.opacity);
  if (e instanceof yi || (e = si(e)), !e) return new Vn();
  if (e instanceof Vn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new Vn(i, s, l, e.opacity);
}
function y1(e, t, n, r) {
  return arguments.length === 1 ? cd(e) : new Vn(e, t, n, r ?? 1);
}
function Vn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ul(Vn, y1, ud(yi, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new Vn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new Vn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pn(
      ls(e >= 240 ? e - 240 : e + 120, o, r),
      ls(e, o, r),
      ls(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Vn(xu(this.h), Bi(this.s), Bi(this.l), ca(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ca(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${xu(this.h)}, ${Bi(this.s) * 100}%, ${Bi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function xu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ls(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const dd = (e) => () => e;
function w1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function b1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function x1(e) {
  return (e = +e) == 1 ? fd : function(t, n) {
    return n - t ? b1(t, n, e) : dd(isNaN(t) ? n : t);
  };
}
function fd(e, t) {
  var n = t - e;
  return n ? w1(e, n) : dd(isNaN(e) ? t : e);
}
const $u = function e(t) {
  var n = x1(t);
  function r(o, a) {
    var i = n((o = Ps(o)).r, (a = Ps(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = fd(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Er(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Os = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, us = new RegExp(Os.source, "g");
function $1(e) {
  return function() {
    return e;
  };
}
function _1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function C1(e, t) {
  var n = Os.lastIndex = us.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Os.exec(e)) && (o = us.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: Er(r, o) })), n = us.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? _1(l[0].x) : $1(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var _u = 180 / Math.PI, vd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pd(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * _u,
    skewX: Math.atan(l) * _u,
    scaleX: i,
    scaleY: s
  };
}
var ji;
function k1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? vd : pd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function E1(e) {
  return e == null || (ji || (ji = document.createElementNS("http://www.w3.org/2000/svg", "g")), ji.setAttribute("transform", e), !(e = ji.transform.baseVal.consolidate())) ? vd : (e = e.matrix, pd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function gd(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: Er(u, d) }, { i: x - 2, x: Er(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Er(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Er(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: Er(u, d) }, { i: x - 2, x: Er(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, x = f.length, C; ++y < x; ) d[(C = f[y]).i] = C.x(v);
      return d.join("");
    };
  };
}
var S1 = gd(k1, "px, ", "px)", "deg)"), P1 = gd(E1, ", ", ")", ")"), O1 = 1e-12;
function Cu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function T1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function M1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const N1 = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, y = d - l, x = v * v + y * y, C, E;
    if (x < O1)
      E = Math.log(f / u) / t, C = function(O) {
        return [
          s + O * v,
          l + O * y,
          u * Math.exp(t * O * E)
        ];
      };
    else {
      var m = Math.sqrt(x), $ = (f * f - u * u + r * x) / (2 * u * n * m), g = (f * f - u * u - r * x) / (2 * f * n * m), _ = Math.log(Math.sqrt($ * $ + 1) - $), T = Math.log(Math.sqrt(g * g + 1) - g);
      E = (T - _) / t, C = function(O) {
        var N = O * E, V = Cu(_), H = u / (n * m) * (V * M1(t * N + _) - T1(_));
        return [
          s + H * v,
          l + H * y,
          u * V / Cu(t * N + _)
        ];
      };
    }
    return C.duration = E * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var bo = 0, Xo = 0, Yo = 0, hd = 1e3, da, qo, fa = 0, Fr = 0, Ha = 0, li = typeof performance == "object" && performance.now ? performance : Date, md = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cl() {
  return Fr || (md(R1), Fr = li.now() + Ha);
}
function R1() {
  Fr = 0;
}
function va() {
  this._call = this._time = this._next = null;
}
va.prototype = yd.prototype = {
  constructor: va,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cl() : +n) + (t == null ? 0 : +t), !this._next && qo !== this && (qo ? qo._next = this : da = this, qo = this), this._call = e, this._time = n, Ts();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ts());
  }
};
function yd(e, t, n) {
  var r = new va();
  return r.restart(e, t, n), r;
}
function V1() {
  cl(), ++bo;
  for (var e = da, t; e; )
    (t = Fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bo;
}
function ku() {
  Fr = (fa = li.now()) + Ha, bo = Xo = 0;
  try {
    V1();
  } finally {
    bo = 0, A1(), Fr = 0;
  }
}
function D1() {
  var e = li.now(), t = e - fa;
  t > hd && (Ha -= t, fa = e);
}
function A1() {
  for (var e, t = da, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : da = n);
  qo = e, Ts(r);
}
function Ts(e) {
  if (!bo) {
    Xo && (Xo = clearTimeout(Xo));
    var t = e - Fr;
    t > 24 ? (e < 1 / 0 && (Xo = setTimeout(ku, e - li.now() - Ha)), Yo && (Yo = clearInterval(Yo))) : (Yo || (fa = li.now(), Yo = setInterval(D1, hd)), bo = 1, md(ku));
  }
}
function Eu(e, t, n) {
  var r = new va();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var z1 = za("start", "end", "cancel", "interrupt"), L1 = [], wd = 0, Su = 1, Ms = 2, qi = 3, Pu = 4, Ns = 5, Ui = 6;
function Ia(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  H1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: z1,
    tween: L1,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: wd
  });
}
function dl(e, t) {
  var n = In(e, t);
  if (n.state > wd) throw new Error("too late; already scheduled");
  return n;
}
function tr(e, t) {
  var n = In(e, t);
  if (n.state > qi) throw new Error("too late; already running");
  return n;
}
function In(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function H1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = yd(a, 0, n.time);
  function a(u) {
    n.state = Su, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== Su) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === qi) return Eu(i);
        v.state === Pu ? (v.state = Ui, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Ui, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Eu(function() {
      n.state === qi && (n.state = Pu, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ms, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ms) {
      for (n.state = qi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ns, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ns && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ui, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Gi(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ms && r.state < Ns, r.state = Ui, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function I1(e) {
  return this.each(function() {
    Gi(this, e);
  });
}
function B1(e, t) {
  var n, r;
  return function() {
    var o = tr(this, e), a = o.tween;
    if (a !== n) {
      r = n = a;
      for (var i = 0, s = r.length; i < s; ++i)
        if (r[i].name === t) {
          r = r.slice(), r.splice(i, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function j1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = tr(this, e), i = a.tween;
    if (i !== r) {
      o = (r = i).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    a.tween = o;
  };
}
function Z1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = In(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? B1 : j1)(n, e, t));
}
function fl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = tr(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return In(o, r).value[t];
  };
}
function bd(e, t) {
  var n;
  return (typeof t == "number" ? Er : t instanceof si ? $u : (n = si(t)) ? (t = n, $u) : C1)(e, t);
}
function Y1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function W1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function K1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function F1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function X1(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function q1(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function U1(e, t) {
  var n = La(e), r = n === "transform" ? P1 : bd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? q1 : X1)(n, r, fl(this, "attr." + e, t)) : t == null ? (n.local ? W1 : Y1)(n) : (n.local ? F1 : K1)(n, r, t));
}
function G1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function J1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Q1(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && J1(e, a)), n;
  }
  return o._value = t, o;
}
function e0(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && G1(e, a)), n;
  }
  return o._value = t, o;
}
function t0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = La(e);
  return this.tween(n, (r.local ? Q1 : e0)(r, t));
}
function n0(e, t) {
  return function() {
    dl(this, e).delay = +t.apply(this, arguments);
  };
}
function r0(e, t) {
  return t = +t, function() {
    dl(this, e).delay = t;
  };
}
function o0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? n0 : r0)(t, e)) : In(this.node(), t).delay;
}
function i0(e, t) {
  return function() {
    tr(this, e).duration = +t.apply(this, arguments);
  };
}
function a0(e, t) {
  return t = +t, function() {
    tr(this, e).duration = t;
  };
}
function s0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? i0 : a0)(t, e)) : In(this.node(), t).duration;
}
function l0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tr(this, e).ease = t;
  };
}
function u0(e) {
  var t = this._id;
  return arguments.length ? this.each(l0(t, e)) : In(this.node(), t).ease;
}
function c0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tr(this, e).ease = n;
  };
}
function d0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(c0(this._id, e));
}
function f0(e) {
  typeof e != "function" && (e = Gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new hr(r, this._parents, this._name, this._id);
}
function v0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new hr(i, this._parents, this._name, this._id);
}
function p0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function g0(e, t, n) {
  var r, o, a = p0(t) ? dl : tr;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function h0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? In(this.node(), n).on.on(e) : this.each(g0(n, e, t));
}
function m0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function y0() {
  return this.on("end.remove", m0(this._id));
}
function w0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = sl(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ia(u[f], t, n, f, u, In(c, n)));
  return new hr(a, this._parents, t, n);
}
function b0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Uc(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, y = In(c, n), x = 0, C = f.length; x < C; ++x)
          (v = f[x]) && Ia(v, t, n, x, f, y);
        a.push(f), i.push(c);
      }
  return new hr(a, i, t, n);
}
var x0 = mi.prototype.constructor;
function $0() {
  return new x0(this._groups, this._parents);
}
function _0(e, t) {
  var n, r, o;
  return function() {
    var a = wo(this, e), i = (this.style.removeProperty(e), wo(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function xd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function C0(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = wo(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function k0(e, t, n) {
  var r, o, a;
  return function() {
    var i = wo(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), wo(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function E0(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = tr(this, e), u = l.on, c = l.value[a] == null ? s || (s = xd(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function S0(e, t, n) {
  var r = (e += "") == "transform" ? S1 : bd;
  return t == null ? this.styleTween(e, _0(e, r)).on("end.style." + e, xd(e)) : typeof t == "function" ? this.styleTween(e, k0(e, r, fl(this, "style." + e, t))).each(E0(this._id, e)) : this.styleTween(e, C0(e, r, t), n).on("end.style." + e, null);
}
function P0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function O0(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && P0(e, i, n)), r;
  }
  return a._value = t, a;
}
function T0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, O0(e, t, n ?? ""));
}
function M0(e) {
  return function() {
    this.textContent = e;
  };
}
function N0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function R0(e) {
  return this.tween("text", typeof e == "function" ? N0(fl(this, "text", e)) : M0(e == null ? "" : e + ""));
}
function V0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function D0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && V0(o)), t;
  }
  return r._value = e, r;
}
function A0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, D0(e));
}
function z0() {
  for (var e = this._name, t = this._id, n = $d(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = In(l, t);
        Ia(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new hr(r, this._parents, e, n);
}
function L0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = tr(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var H0 = 0;
function hr(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function $d() {
  return ++H0;
}
var ar = mi.prototype;
hr.prototype = {
  constructor: hr,
  select: w0,
  selectAll: b0,
  selectChild: ar.selectChild,
  selectChildren: ar.selectChildren,
  filter: f0,
  merge: v0,
  selection: $0,
  transition: z0,
  call: ar.call,
  nodes: ar.nodes,
  node: ar.node,
  size: ar.size,
  empty: ar.empty,
  each: ar.each,
  on: h0,
  attr: U1,
  attrTween: t0,
  style: S0,
  styleTween: T0,
  text: R0,
  textTween: A0,
  remove: y0,
  tween: Z1,
  delay: o0,
  duration: s0,
  ease: u0,
  easeVarying: d0,
  end: L0,
  [Symbol.iterator]: ar[Symbol.iterator]
};
function I0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var B0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: I0
};
function j0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Z0(e) {
  var t, n;
  e instanceof hr ? (t = e._id, e = e._name) : (t = $d(), (n = B0).time = cl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Ia(l, e, t, u, i, n || j0(l, t));
  return new hr(r, this._parents, e, t);
}
mi.prototype.interrupt = I1;
mi.prototype.transition = Z0;
const Zi = (e) => () => e;
function Y0(e, {
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
function lr(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
lr.prototype = {
  constructor: lr,
  scale: function(e) {
    return e === 1 ? this : new lr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new lr(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ba = new lr(1, 0, 0);
_d.prototype = lr.prototype;
function _d(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ba;
  return e.__zoom;
}
function cs(e) {
  e.stopImmediatePropagation();
}
function Wo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function W0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function K0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ou() {
  return this.__zoom || Ba;
}
function F0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function X0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function q0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Cd() {
  var e = W0, t = K0, n = q0, r = F0, o = X0, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = N1, u = za("start", "zoom", "end"), c, d, f, v = 500, y = 150, x = 0, C = 10;
  function E(P) {
    P.property("__zoom", Ou).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", Z).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", F).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(P, M, S, k) {
    var z = P.selection ? P.selection() : P;
    z.property("__zoom", Ou), P !== z ? _(P, M, S, k) : z.interrupt().each(function() {
      T(this, arguments).event(k).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, E.scaleBy = function(P, M, S, k) {
    E.scaleTo(P, function() {
      var z = this.__zoom.k, j = typeof M == "function" ? M.apply(this, arguments) : M;
      return z * j;
    }, S, k);
  }, E.scaleTo = function(P, M, S, k) {
    E.transform(P, function() {
      var z = t.apply(this, arguments), j = this.__zoom, K = S == null ? g(z) : typeof S == "function" ? S.apply(this, arguments) : S, R = j.invert(K), I = typeof M == "function" ? M.apply(this, arguments) : M;
      return n($(m(j, I), K, R), z, i);
    }, S, k);
  }, E.translateBy = function(P, M, S, k) {
    E.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), i);
    }, null, k);
  }, E.translateTo = function(P, M, S, k, z) {
    E.transform(P, function() {
      var j = t.apply(this, arguments), K = this.__zoom, R = k == null ? g(j) : typeof k == "function" ? k.apply(this, arguments) : k;
      return n(Ba.translate(R[0], R[1]).scale(K.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), j, i);
    }, k, z);
  };
  function m(P, M) {
    return M = Math.max(a[0], Math.min(a[1], M)), M === P.k ? P : new lr(M, P.x, P.y);
  }
  function $(P, M, S) {
    var k = M[0] - S[0] * P.k, z = M[1] - S[1] * P.k;
    return k === P.x && z === P.y ? P : new lr(P.k, k, z);
  }
  function g(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function _(P, M, S, k) {
    P.on("start.zoom", function() {
      T(this, arguments).event(k).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(k).end();
    }).tween("zoom", function() {
      var z = this, j = arguments, K = T(z, j).event(k), R = t.apply(z, j), I = S == null ? g(R) : typeof S == "function" ? S.apply(z, j) : S, ne = Math.max(R[1][0] - R[0][0], R[1][1] - R[0][1]), Q = z.__zoom, W = typeof M == "function" ? M.apply(z, j) : M, ae = l(Q.invert(I).concat(ne / Q.k), W.invert(I).concat(ne / W.k));
      return function(pe) {
        if (pe === 1) pe = W;
        else {
          var de = ae(pe), le = ne / de[2];
          pe = new lr(le, I[0] - de[0] * le, I[1] - de[1] * le);
        }
        K.zoom(null, pe);
      };
    });
  }
  function T(P, M, S) {
    return !S && P.__zooming || new O(P, M);
  }
  function O(P, M) {
    this.that = P, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, M), this.taps = 0;
  }
  O.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, M) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var M = En(this.that).datum();
      u.call(
        P,
        this.that,
        new Y0(P, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function N(P, ...M) {
    if (!e.apply(this, arguments)) return;
    var S = T(this, M).event(P), k = this.__zoom, z = Math.max(a[0], Math.min(a[1], k.k * Math.pow(2, r.apply(this, arguments)))), j = Nn(P);
    if (S.wheel)
      (S.mouse[0][0] !== j[0] || S.mouse[0][1] !== j[1]) && (S.mouse[1] = k.invert(S.mouse[0] = j)), clearTimeout(S.wheel);
    else {
      if (k.k === z) return;
      S.mouse = [j, k.invert(j)], Gi(this), S.start();
    }
    Wo(P), S.wheel = setTimeout(K, y), S.zoom("mouse", n($(m(k, z), S.mouse[0], S.mouse[1]), S.extent, i));
    function K() {
      S.wheel = null, S.end();
    }
  }
  function V(P, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var S = P.currentTarget, k = T(this, M, !0).event(P), z = En(P.view).on("mousemove.zoom", I, !0).on("mouseup.zoom", ne, !0), j = Nn(P, S), K = P.clientX, R = P.clientY;
    sd(P.view), cs(P), k.mouse = [j, this.__zoom.invert(j)], Gi(this), k.start();
    function I(Q) {
      if (Wo(Q), !k.moved) {
        var W = Q.clientX - K, ae = Q.clientY - R;
        k.moved = W * W + ae * ae > x;
      }
      k.event(Q).zoom("mouse", n($(k.that.__zoom, k.mouse[0] = Nn(Q, S), k.mouse[1]), k.extent, i));
    }
    function ne(Q) {
      z.on("mousemove.zoom mouseup.zoom", null), ld(Q.view, k.moved), Wo(Q), k.event(Q).end();
    }
  }
  function H(P, ...M) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, k = Nn(P.changedTouches ? P.changedTouches[0] : P, this), z = S.invert(k), j = S.k * (P.shiftKey ? 0.5 : 2), K = n($(m(S, j), k, z), t.apply(this, M), i);
      Wo(P), s > 0 ? En(this).transition().duration(s).call(_, K, k, P) : En(this).call(E.transform, K, k, P);
    }
  }
  function Z(P, ...M) {
    if (e.apply(this, arguments)) {
      var S = P.touches, k = S.length, z = T(this, M, P.changedTouches.length === k).event(P), j, K, R, I;
      for (cs(P), K = 0; K < k; ++K)
        R = S[K], I = Nn(R, this), I = [I, this.__zoom.invert(I), R.identifier], z.touch0 ? !z.touch1 && z.touch0[2] !== I[2] && (z.touch1 = I, z.taps = 0) : (z.touch0 = I, j = !0, z.taps = 1 + !!c);
      c && (c = clearTimeout(c)), j && (z.taps < 2 && (d = I[0], c = setTimeout(function() {
        c = null;
      }, v)), Gi(this), z.start());
    }
  }
  function L(P, ...M) {
    if (this.__zooming) {
      var S = T(this, M).event(P), k = P.changedTouches, z = k.length, j, K, R, I;
      for (Wo(P), j = 0; j < z; ++j)
        K = k[j], R = Nn(K, this), S.touch0 && S.touch0[2] === K.identifier ? S.touch0[0] = R : S.touch1 && S.touch1[2] === K.identifier && (S.touch1[0] = R);
      if (K = S.that.__zoom, S.touch1) {
        var ne = S.touch0[0], Q = S.touch0[1], W = S.touch1[0], ae = S.touch1[1], pe = (pe = W[0] - ne[0]) * pe + (pe = W[1] - ne[1]) * pe, de = (de = ae[0] - Q[0]) * de + (de = ae[1] - Q[1]) * de;
        K = m(K, Math.sqrt(pe / de)), R = [(ne[0] + W[0]) / 2, (ne[1] + W[1]) / 2], I = [(Q[0] + ae[0]) / 2, (Q[1] + ae[1]) / 2];
      } else if (S.touch0) R = S.touch0[0], I = S.touch0[1];
      else return;
      S.zoom("touch", n($(K, R, I), S.extent, i));
    }
  }
  function F(P, ...M) {
    if (this.__zooming) {
      var S = T(this, M).event(P), k = P.changedTouches, z = k.length, j, K;
      for (cs(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), j = 0; j < z; ++j)
        K = k[j], S.touch0 && S.touch0[2] === K.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === K.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (K = Nn(K, this), Math.hypot(d[0] - K[0], d[1] - K[1]) < C)) {
        var R = En(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Zi(+P), E) : r;
  }, E.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Zi(!!P), E) : e;
  }, E.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Zi(!!P), E) : o;
  }, E.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Zi([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), E) : t;
  }, E.scaleExtent = function(P) {
    return arguments.length ? (a[0] = +P[0], a[1] = +P[1], E) : [a[0], a[1]];
  }, E.translateExtent = function(P) {
    return arguments.length ? (i[0][0] = +P[0][0], i[1][0] = +P[1][0], i[0][1] = +P[0][1], i[1][1] = +P[1][1], E) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, E.constrain = function(P) {
    return arguments.length ? (n = P, E) : n;
  }, E.duration = function(P) {
    return arguments.length ? (s = +P, E) : s;
  }, E.interpolate = function(P) {
    return arguments.length ? (l = P, E) : l;
  }, E.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? E : P;
  }, E.clickDistance = function(P) {
    return arguments.length ? (x = (P = +P) * P, E) : Math.sqrt(x);
  }, E.tapDistance = function(P) {
    return arguments.length ? (C = +P, E) : C;
  }, E;
}
const xo = {
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
}, pa = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Xr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Xr || (Xr = {}));
var Mr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Mr || (Mr = {}));
var ga;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ga || (ga = {}));
const Rs = {
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
var vo;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(vo || (vo = {}));
var ui;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ui || (ui = {}));
var Le;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Le || (Le = {}));
const Tu = {
  [Le.Left]: Le.Right,
  [Le.Right]: Le.Left,
  [Le.Top]: Le.Bottom,
  [Le.Bottom]: Le.Top
};
function U0(e, t) {
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
function Mu(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function G0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const J0 = (e) => "id" in e && "source" in e && "target" in e, Q0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), wi = (e, t = [0, 0]) => {
  const { width: n, height: r } = zr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, em = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : vl(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? ha(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ja(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Za(n);
}, bi = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ha(r);
      n = ja(n, o);
    }
  }), Za(n);
}, kd = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...xi(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, x = ci(s, _o(u)), C = (v ?? 0) * (y ?? 0), E = a && x > 0;
    (!u.internals.handleBounds || E || x >= C || u.dragging) && l.push(u);
  }
  return l;
}, Vs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Nu(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ru({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = bi(e), l = gl(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function tm({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", xo.error005());
    else {
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
      ]);
    }
  else s && Co(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = Co(d) ? qr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", xo.error015())), {
    position: {
      x: f.x - l + (i.measured.width ?? 0) * c[0],
      y: f.y - u + (i.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Ed({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((y) => y.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Vs(i, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: i
    };
  const c = await o({
    nodes: i,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: i } : { edges: [], nodes: [] } : c;
}
const $o = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), qr = (e = { x: 0, y: 0 }, t, n) => ({
  x: $o(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: $o(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Sd(e, t, n) {
  const { width: r, height: o } = zr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return qr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Vu = (e, t, n) => e < t ? $o(Math.abs(e - t), 1, t) / t : e > n ? -$o(Math.abs(e - n), 1, t) / t : 0, Pd = (e, t, n = 15, r = 40) => {
  const o = Vu(e.x, r, t.width - r) * n, a = Vu(e.y, r, t.height - r) * n;
  return [o, a];
}, ja = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ds = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Za = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), _o = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = vl(e) ? e.internals.positionAbsolute : wi(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ha = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = vl(e) ? e.internals.positionAbsolute : wi(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Od = (e, t) => Za(ja(Ds(e), Ds(t))), ci = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Du = (e) => ur(e.width) && ur(e.height) && ur(e.x) && ur(e.y), ur = (e) => !isNaN(e) && isFinite(e), nm = (e, t) => {
}, pl = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), xi = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? pl(s, i) : s;
}, Td = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), gl = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = $o(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, ma = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Co(e) {
  return e !== void 0 && e !== "parent";
}
function zr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Md(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function rm(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function ds(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = fr(e), s = xi({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? pl(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const hl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), om = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, im = ["INPUT", "SELECT", "TEXTAREA"];
function am(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : im.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Nd = (e) => "clientX" in e, fr = (e, t) => {
  var n, r;
  const o = Nd(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Au = (e, t, n, r, o) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((i) => {
    const s = i.getBoundingClientRect();
    return {
      id: i.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: i.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...hl(i)
    };
  });
};
function sm({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function zu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Le.Left:
      return [t - Yi(t - r, a), n];
    case Le.Right:
      return [t + Yi(r - t, a), n];
    case Le.Top:
      return [t, n - Yi(n - o, a)];
    case Le.Bottom:
      return [t, n + Yi(o - n, a)];
  }
}
function Rd({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: a = Le.Top, curvature: i = 0.25 }) {
  const [s, l] = zu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = zu({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, y] = sm({
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
function Vd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function lm({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function um({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = ja(ha(e), ha(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ci(i, Za(a)) > 0;
}
const cm = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, dm = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), fm = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return J0(e) ? n = { ...e } : n = {
    ...e,
    id: cm(e)
  }, dm(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function As({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Vd({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const Lu = {
  [Le.Left]: { x: -1, y: 0 },
  [Le.Right]: { x: 1, y: 0 },
  [Le.Top]: { x: 0, y: -1 },
  [Le.Bottom]: { x: 0, y: 1 }
}, vm = ({ source: e, sourcePosition: t = Le.Bottom, target: n }) => t === Le.Left || t === Le.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Hu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function pm({ source: e, sourcePosition: t = Le.Bottom, target: n, targetPosition: r = Le.Top, center: o, offset: a }) {
  const i = Lu[t], s = Lu[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = vm({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, x;
  const C = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, $, g, _] = Vd({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    y = o.x ?? m, x = o.y ?? $;
    const T = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], O = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    i[d] === f ? v = d === "x" ? T : O : v = d === "x" ? O : T;
  } else {
    const T = [{ x: l.x, y: u.y }], O = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? O : T : v = i.y === f ? T : O, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= a) {
        const F = Math.min(a - 1, a - L);
        i[d] === f ? C[d] = (l[d] > e[d] ? -1 : 1) * F : E[d] = (u[d] > n[d] ? -1 : 1) * F;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", F = i[d] === s[L], P = l[L] > u[L], M = l[L] < u[L];
      (i[d] === 1 && (!F && P || F && M) || i[d] !== 1 && (!F && M || F && P)) && (v = d === "x" ? T : O);
    }
    const N = { x: l.x + C.x, y: l.y + C.y }, V = { x: u.x + E.x, y: u.y + E.y }, H = Math.max(Math.abs(N.x - v[0].x), Math.abs(V.x - v[0].x)), Z = Math.max(Math.abs(N.y - v[0].y), Math.abs(V.y - v[0].y));
    H >= Z ? (y = (N.x + V.x) / 2, x = v[0].y) : (y = v[0].x, x = (N.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + C.x, y: l.y + C.y },
    ...v,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], y, x, g, _];
}
function gm(e, t, n, r) {
  const o = Math.min(Hu(e, t) / 2, Hu(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function ya({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: a = Le.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, y] = pm({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, C, E) => {
    let m = "";
    return E > 0 && E < c.length - 1 ? m = gm(c[E - 1], C, c[E + 1], i) : m = `${E === 0 ? "M" : "L"}${C.x} ${C.y}`, x += m, x;
  }, ""), d, f, v, y];
}
function Iu(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function hm(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Iu(n) || !Iu(r))
    return null;
  const o = n.internals.handleBounds || Bu(n.handles), a = r.internals.handleBounds || Bu(r.handles), i = ju((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = ju(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Xr.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", xo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Le.Bottom, u = (s == null ? void 0 : s.position) || Le.Top, c = di(n, i, l), d = di(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Bu(e) {
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
function di(e, t, n = Le.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? zr(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Le.Top:
      return { x: o + i / 2, y: a };
    case Le.Right:
      return { x: o + i, y: a + s / 2 };
    case Le.Bottom:
      return { x: o + i / 2, y: a + s };
    case Le.Left:
      return { x: o, y: a + s / 2 };
  }
}
function ju(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function zs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function mm(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = zs(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function ym(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case Le.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Le.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Le.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const ml = {
  nodeOrigin: [0, 0],
  nodeExtent: pa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, wm = {
  ...ml,
  checkEquality: !0
};
function yl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function bm(e, t, n) {
  const r = yl(ml, n);
  for (const o of e.values())
    if (o.parentId)
      wl(o, e, t, r);
    else {
      const a = wi(o, r.nodeOrigin), i = Co(o.extent) ? o.extent : r.nodeExtent, s = qr(a, i, zr(o));
      o.internals.positionAbsolute = s;
    }
}
function Dd(e, t, n, r) {
  var o, a;
  const i = yl(wm, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = wi(u, i.nodeOrigin), f = Co(u.extent) ? u.extent : i.nodeExtent, v = qr(d, f, zr(u));
      c = {
        ...i.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (a = u.measured) == null ? void 0 : a.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: Ad(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && wl(c, t, n, r);
  }
}
function xm(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function wl(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = yl(ml, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  xm(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = $m(e, l, a, i, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Ad(e, t) {
  return (ur(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function $m(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = zr(e), l = wi(e, n), u = Co(e.extent) ? qr(l, e.extent, s) : l;
  let c = qr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Sd(c, s, t));
  const d = Ad(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function _m(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? _o(l), c = Od(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = zr(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, C = Math.max(f.width, Math.round(s.width)), E = Math.max(f.height, Math.round(s.height)), m = (C - f.width) * v[0], $ = (E - f.height) * v[1];
    (y > 0 || x > 0 || m || $) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + m,
        y: l.position.y - x + $
      }
    }), (c = n.get(u)) == null || c.forEach((g) => {
      e.some((_) => _.id === g.id) || a.push({
        id: g.id,
        type: "position",
        position: {
          x: g.position.x + y,
          y: g.position.y + x
        }
      });
    })), (f.width < s.width || f.height < s.height || y || x) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: C + (y ? v[0] * y - m : 0),
        height: E + (x ? v[1] * x - $ : 0)
      }
    });
  }), a;
}
function Cm(e, t, n, r, o, a) {
  const i = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!i)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(i), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const y = hl(f.nodeElement), x = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (x || !v.internals.handleBounds || f.force)) {
      const C = f.nodeElement.getBoundingClientRect(), E = Co(v.extent) ? v.extent : a;
      let { positionAbsolute: m } = v.internals;
      v.parentId && v.extent === "parent" ? m = Sd(m, y, t.get(v.parentId)) : E && (m = qr(m, E, y));
      const $ = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: m,
          handleBounds: {
            source: Au("source", f.nodeElement, C, c, v.id),
            target: Au("target", f.nodeElement, C, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && wl($, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: _o($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = _m(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function km({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const i = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, a]
  ], r), s = !!i && (i.x !== n[0] || i.y !== n[1] || i.k !== n[2]);
  return Promise.resolve(s);
}
function Zu(e, t, n, r, o, a) {
  let i = o;
  const s = r.get(i) || /* @__PURE__ */ new Map();
  r.set(i, s.set(n, t)), i = `${o}-${e}`;
  const l = r.get(i) || /* @__PURE__ */ new Map();
  if (r.set(i, l.set(n, t)), a) {
    i = `${o}-${e}-${a}`;
    const u = r.get(i) || /* @__PURE__ */ new Map();
    r.set(i, u.set(n, t));
  }
}
function zd(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Zu("source", l, c, e, o, i), Zu("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function Em(e, t) {
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
function Ld(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Ld(n, t) : !1;
}
function Yu(e, t, n) {
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
function Sm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !Ld(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
      const s = e.get(a);
      s && o.set(a, {
        id: a,
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
function fs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, a, i;
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
  const l = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((i = t.get(e)) == null ? void 0 : i.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function Pm({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function y({ noDragClassName: C, handleSelector: E, domNode: m, isSelectable: $, nodeId: g, nodeClickDistance: _ = 0 }) {
    f = En(m);
    function T({ x: H, y: Z }, L) {
      const { nodeLookup: F, nodeExtent: P, snapGrid: M, snapToGrid: S, nodeOrigin: k, onNodeDrag: z, onSelectionDrag: j, onError: K, updateNodePositions: R } = t();
      a = { x: H, y: Z };
      let I = !1, ne = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = bi(s);
        ne = Ds(Q);
      }
      for (const [Q, W] of s) {
        if (!F.has(Q))
          continue;
        let ae = { x: H - W.distance.x, y: Z - W.distance.y };
        S && (ae = pl(ae, M));
        let pe = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !W.extent) {
          const { positionAbsolute: Te } = W.internals, ge = Te.x - ne.x + P[0][0], Oe = Te.x + W.measured.width - ne.x2 + P[1][0], Je = Te.y - ne.y + P[0][1], Qe = Te.y + W.measured.height - ne.y2 + P[1][1];
          pe = [
            [ge, Je],
            [Oe, Qe]
          ];
        }
        const { position: de, positionAbsolute: le } = tm({
          nodeId: Q,
          nextPosition: ae,
          nodeLookup: F,
          nodeExtent: pe,
          nodeOrigin: k,
          onError: K
        });
        I = I || W.position.x !== de.x || W.position.y !== de.y, W.position = de, W.internals.positionAbsolute = le;
      }
      if (I && (R(s, !0), L && (r || z || !g && j))) {
        const [Q, W] = fs({
          nodeId: g,
          dragItems: s,
          nodeLookup: F
        });
        r == null || r(L, s, Q, W), z == null || z(L, Q, W), g || j == null || j(L, W);
      }
    }
    async function O() {
      if (!c)
        return;
      const { transform: H, panBy: Z, autoPanSpeed: L, autoPanOnNodeDrag: F } = t();
      if (!F) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, M] = Pd(u, c, L);
      (P !== 0 || M !== 0) && (a.x = (a.x ?? 0) - P / H[2], a.y = (a.y ?? 0) - M / H[2], await Z({ x: P, y: M }) && T(a, null)), i = requestAnimationFrame(O);
    }
    function N(H) {
      var Z;
      const { nodeLookup: L, multiSelectionActive: F, nodesDraggable: P, transform: M, snapGrid: S, snapToGrid: k, selectNodesOnDrag: z, onNodeDragStart: j, onSelectionDragStart: K, unselectNodesAndEdges: R } = t();
      d = !0, (!z || !$) && !F && g && ((Z = L.get(g)) != null && Z.selected || R()), $ && z && g && (e == null || e(g));
      const I = ds(H.sourceEvent, { transform: M, snapGrid: S, snapToGrid: k, containerBounds: c });
      if (a = I, s = Sm(L, P, I, g), s.size > 0 && (n || j || !g && K)) {
        const [ne, Q] = fs({
          nodeId: g,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(H.sourceEvent, s, ne, Q), j == null || j(H.sourceEvent, ne, Q), g || K == null || K(H.sourceEvent, Q);
      }
    }
    const V = a1().clickDistance(_).on("start", (H) => {
      const { domNode: Z, nodeDragThreshold: L, transform: F, snapGrid: P, snapToGrid: M } = t();
      c = (Z == null ? void 0 : Z.getBoundingClientRect()) || null, v = !1, L === 0 && N(H), a = ds(H.sourceEvent, { transform: F, snapGrid: P, snapToGrid: M, containerBounds: c }), u = fr(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: Z, transform: L, snapGrid: F, snapToGrid: P, nodeDragThreshold: M, nodeLookup: S } = t(), k = ds(H.sourceEvent, { transform: L, snapGrid: F, snapToGrid: P, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      g && !S.has(g)) && (v = !0), !v) {
        if (!l && Z && d && (l = !0, O()), !d) {
          const z = k.xSnapped - (a.x ?? 0), j = k.ySnapped - (a.y ?? 0);
          Math.sqrt(z * z + j * j) > M && N(H);
        }
        (a.x !== k.xSnapped || a.y !== k.ySnapped) && s && d && (u = fr(H.sourceEvent, c), T(k, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: Z, updateNodePositions: L, onNodeDragStop: F, onSelectionDragStop: P } = t();
        if (L(s, !1), o || F || !g && P) {
          const [M, S] = fs({
            nodeId: g,
            dragItems: s,
            nodeLookup: Z,
            dragging: !1
          });
          o == null || o(H.sourceEvent, s, M, S), F == null || F(H.sourceEvent, M, S), g || P == null || P(H.sourceEvent, S);
        }
      }
    }).filter((H) => {
      const Z = H.target;
      return !H.button && (!C || !Yu(Z, `.${C}`, m)) && (!E || Yu(Z, E, m));
    });
    f.call(V);
  }
  function x() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
    destroy: x
  };
}
function Om(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    ci(o, _o(a)) > 0 && r.push(a);
  return r;
}
const Tm = 250;
function Mm(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Om(e, n, t + Tm);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = di(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (i = [{ ...d, x: f, y: v }], s = y) : y === s && i.push({ ...d, x: f, y: v }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((c) => c.type === u) ?? i[0];
  }
  return i[0];
}
function Hd(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...di(u, d, d.position, !0) } : d;
}
function Id(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Nm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Bd = () => !0;
function Rm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: x, onConnectEnd: C, isValidConnection: E = Bd, onReconnectEnd: m, updateConnection: $, getTransform: g, getFromHandle: _, autoPanSpeed: T }) {
  const O = om(e.target);
  let N = 0, V;
  const { x: H, y: Z } = fr(e), L = O == null ? void 0 : O.elementFromPoint(H, Z), F = Id(a, L), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !F)
    return;
  const M = Hd(o, F, r, l, t);
  if (!M)
    return;
  let S = fr(e, P), k = !1, z = null, j = !1, K = null;
  function R() {
    if (!c || !P)
      return;
    const [de, le] = Pd(S, P, T);
    f({ x: de, y: le }), N = requestAnimationFrame(R);
  }
  const I = {
    ...M,
    nodeId: o,
    type: F,
    position: M.position
  }, ne = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: di(ne, I, Le.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: ne,
    to: S,
    toHandle: null,
    toPosition: Tu[I.position],
    toNode: null
  };
  $(Q);
  let W = Q;
  y == null || y(e, { nodeId: o, handleId: r, handleType: F });
  function ae(de) {
    if (!_() || !I) {
      pe(de);
      return;
    }
    const le = g();
    S = fr(de, P), V = Mm(xi(S, le, !1, [1, 1]), n, l, I), k || (R(), k = !0);
    const Te = jd(de, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: E,
      doc: O,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    K = Te.handleDomNode, z = Te.connection, j = Nm(!!V, Te.isValid);
    const ge = {
      // from stays the same
      ...W,
      isValid: j,
      to: V && j ? Td({ x: V.x, y: V.y }, le) : S,
      toHandle: Te.toHandle,
      toPosition: j && Te.toHandle ? Te.toHandle.position : Tu[I.position],
      toNode: Te.toHandle ? l.get(Te.toHandle.nodeId) : null
    };
    j && V && W.toHandle && ge.toHandle && W.toHandle.type === ge.toHandle.type && W.toHandle.nodeId === ge.toHandle.nodeId && W.toHandle.id === ge.toHandle.id && W.to.x === ge.to.x && W.to.y === ge.to.y || ($(ge), W = ge);
  }
  function pe(de) {
    (V || K) && z && j && (x == null || x(z));
    const { inProgress: le, ...Te } = W, ge = {
      ...Te,
      toPosition: W.toHandle ? W.toPosition : null
    };
    C == null || C(de, ge), a && (m == null || m(de, ge)), v(), cancelAnimationFrame(N), k = !1, j = !1, z = null, K = null, O.removeEventListener("mousemove", ae), O.removeEventListener("mouseup", pe), O.removeEventListener("touchmove", ae), O.removeEventListener("touchend", pe);
  }
  O.addEventListener("mousemove", ae), O.addEventListener("mouseup", pe), O.addEventListener("touchmove", ae), O.addEventListener("touchend", pe);
}
function jd(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Bd, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = fr(e), x = i.elementFromPoint(v, y), C = x != null && x.classList.contains(`${s}-flow__handle`) ? x : f, E = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const m = Id(void 0, C), $ = C.getAttribute("data-nodeid"), g = C.getAttribute("data-handleid"), _ = C.classList.contains("connectable"), T = C.classList.contains("connectableend");
    if (!$ || !m)
      return E;
    const O = {
      source: d ? $ : r,
      sourceHandle: d ? g : o,
      target: d ? r : $,
      targetHandle: d ? o : g
    };
    E.connection = O;
    const N = _ && T && (n === Xr.Strict ? d && m === "source" || !d && m === "target" : $ !== r || g !== o);
    E.isValid = N && u(O), E.toHandle = Hd($, m, g, c, n, !1);
  }
  return E;
}
const Vm = {
  onPointerDown: Rm,
  isValid: jd
};
function Dm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = En(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = ($) => {
      const g = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, T = g[2] * Math.pow(2, _);
      t.scaleTo(T);
    };
    let x = [0, 0];
    const C = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (x = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, E = ($) => {
      const g = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], T = [_[0] - x[0], _[1] - x[1]];
      x = _;
      const O = r() * Math.max(g[2], Math.log(g[2])) * (v ? -1 : 1), N = {
        x: g[0] - T[0] * O,
        y: g[1] - T[1] * O
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: g[2]
      }, V, s);
    }, m = Cd().on("start", C).on("zoom", d ? E : null).on("zoom.wheel", f ? y : null);
    o.call(m, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: Nn
  };
}
const Am = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ya = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), vs = ({ x: e, y: t, zoom: n }) => Ba.translate(e, t).scale(n), lo = (e, t) => e.target.closest(`.${t}`), Zd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ps = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Yd = (e) => {
  const t = e.ctrlKey && ma() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function zm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (lo(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const C = Nn(c), E = Yd(c), m = d * Math.pow(2, E);
      r.scaleTo(n, m, C, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === Mr.Vertical ? 0 : c.deltaX * f, y = o === Mr.Horizontal ? 0 : c.deltaY * f;
    !ma() && c.shiftKey && o !== Mr.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(y / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Ya(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function Lm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || lo(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Hm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ya(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function Im({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && Zd(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Ya(a.transform)));
  };
}
function Bm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && Zd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Am(e.prevViewport, i.transform))) {
      const l = Ya(i.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(i.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function jm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (lo(c, `${u}-flow__node`) || lo(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || lo(c, s) && c.type === "wheel" || lo(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
  };
}
function Zm({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Cd().clickDistance(!ur(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = En(e).call(f);
  $({
    x: a.x,
    y: a.y,
    zoom: $o(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), x = v.on("dblclick.zoom");
  f.wheelDelta(Yd);
  function C(L, F) {
    return v ? new Promise((P) => {
      f == null || f.transform(ps(v, F == null ? void 0 : F.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: L, noPanClassName: F, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: S, panOnDrag: k, panOnScrollMode: z, panOnScrollSpeed: j, preventScrolling: K, zoomOnPinch: R, zoomOnScroll: I, zoomOnDoubleClick: ne, zoomActivationKeyPressed: Q, lib: W, onTransformChange: ae }) {
    M && !c.isZoomingOrPanning && m();
    const pe = S && !Q && !M ? zm({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: z,
      panOnScrollSpeed: j,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : Lm({
      noWheelClassName: L,
      preventScrolling: K,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", pe, { passive: !1 }), !M) {
      const le = Hm({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", le);
      const Te = Im({
        zoomPanValues: c,
        panOnDrag: k,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: ae
      });
      f.on("zoom", Te);
      const ge = Bm({
        zoomPanValues: c,
        panOnDrag: k,
        panOnScroll: S,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ge);
    }
    const de = jm({
      zoomActivationKeyPressed: Q,
      panOnDrag: k,
      zoomOnScroll: I,
      panOnScroll: S,
      zoomOnDoubleClick: ne,
      zoomOnPinch: R,
      userSelectionActive: M,
      noPanClassName: F,
      noWheelClassName: L,
      lib: W
    });
    f.filter(de), ne ? v.on("dblclick.zoom", x) : v.on("dblclick.zoom", null);
  }
  function m() {
    f.on("zoom", null);
  }
  async function $(L, F, P) {
    const M = vs(L), S = f == null ? void 0 : f.constrain()(M, F, P);
    return S && await C(S), new Promise((k) => k(S));
  }
  async function g(L, F) {
    const P = vs(L);
    return await C(P, F), new Promise((M) => M(P));
  }
  function _(L) {
    if (v) {
      const F = vs(L), P = v.property("__zoom");
      (P.k !== L.zoom || P.x !== L.x || P.y !== L.y) && (f == null || f.transform(v, F, null, { sync: !0 }));
    }
  }
  function T() {
    const L = v ? _d(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function O(L, F) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(ps(v, F == null ? void 0 : F.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L, F) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(ps(v, F == null ? void 0 : F.duration, () => P(!0)), L);
    }) : Promise.resolve(!1);
  }
  function V(L) {
    f == null || f.scaleExtent(L);
  }
  function H(L) {
    f == null || f.translateExtent(L);
  }
  function Z(L) {
    const F = !ur(L) || L < 0 ? 0 : L;
    f == null || f.clickDistance(F);
  }
  return {
    update: E,
    destroy: m,
    setViewport: g,
    setViewportConstrained: $,
    getViewport: T,
    scaleTo: O,
    scaleBy: N,
    setScaleExtent: V,
    setTranslateExtent: H,
    syncViewport: _,
    setClickDistance: Z
  };
}
var Wu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Wu || (Wu = {}));
var Ym = /* @__PURE__ */ ve('<div role="button" tabindex="-1"><!></div>');
function Dr(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(ne, "$connectable", n), a = () => se(de, "$connectionRadius", n), i = () => se(ae, "$domNode", n), s = () => se(pe, "$nodeLookup", n), l = () => se(W, "$connectionMode", n), u = () => se(ge, "$lib", n), c = () => se(me, "$autoPanOnConnect", n), d = () => se(rt, "$flowId", n), f = () => se(Te, "$isValidConnectionStore", n), v = () => se(Je, "$onedgecreate", n), y = () => se(Ae, "$onConnectAction", n), x = () => se(nt, "$onConnectStartAction", n), C = () => se(Ze, "$onConnectEndAction", n), E = () => se(le, "$viewport", n), m = () => se(pt, "$connection", n), $ = () => se(Ce, "$edges", n), g = () => se(We, "$connectionLookup", n), _ = fe(), T = fe(), O = fe(), N = fe(), V = fe(), H = fe(), Z = fe(), L = fe();
  let F = b(t, "id", 12, void 0), P = b(t, "type", 12, "source"), M = b(t, "position", 28, () => Le.Top), S = b(t, "style", 12, void 0), k = b(t, "isValidConnection", 12, void 0), z = b(t, "onconnect", 12, void 0), j = b(t, "ondisconnect", 12, void 0), K = b(t, "isConnectable", 12, void 0), R = b(t, "class", 12, void 0);
  const I = Wr("svelteflow__node_id"), ne = Wr("svelteflow__node_connectable"), Q = dt(), {
    connectionMode: W,
    domNode: ae,
    nodeLookup: pe,
    connectionRadius: de,
    viewport: le,
    isValidConnection: Te,
    lib: ge,
    addEdge: Oe,
    onedgecreate: Je,
    panBy: Qe,
    cancelConnection: Xe,
    updateConnection: U,
    autoPanOnConnect: me,
    edges: Ce,
    connectionLookup: We,
    onconnect: Ae,
    onconnectstart: nt,
    onconnectend: Ze,
    flowId: rt,
    connection: pt
  } = Q;
  function Ot(ze) {
    const gt = Nd(ze);
    (gt && ze.button === 0 || !gt) && Vm.onPointerDown(ze, {
      handleId: p(O),
      nodeId: I,
      isTarget: p(_),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: k() ?? f(),
      updateConnection: U,
      cancelConnection: Xe,
      panBy: Qe,
      onConnect: (Ee) => {
        var st;
        const yt = v() ? v()(Ee) : Ee;
        yt && (Oe(yt), (st = y()) == null || st(Ee));
      },
      onConnectStart: (Ee, st) => {
        var yt;
        (yt = x()) == null || yt(Ee, {
          nodeId: st.nodeId,
          handleId: st.handleId,
          handleType: st.handleType
        });
      },
      onConnectEnd: (Ee, st) => {
        var yt;
        (yt = C()) == null || yt(Ee, st);
      },
      getTransform: () => [
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let ue = fe(null), et = fe();
  xe(() => ie(P()), () => {
    oe(_, P() === "target");
  }), xe(
    () => (ie(K()), o()),
    () => {
      oe(T, K() !== void 0 ? K() : o());
    }
  ), xe(() => ie(F()), () => {
    oe(O, F() || null);
  }), xe(
    () => (ie(z()), ie(j()), $(), g(), ie(P()), ie(F())),
    () => {
      (z() || j()) && ($(), oe(et, g().get(`${I}-${P()}${F() ? `-${F()}` : ""}`)));
    }
  ), xe(
    () => (p(ue), p(et), ie(j()), ie(z())),
    () => {
      if (p(ue) && !U0(p(et), p(ue))) {
        const ze = p(et) ?? /* @__PURE__ */ new Map();
        Mu(p(ue), ze, j()), Mu(ze, p(ue), z());
      }
      oe(ue, p(et) ?? /* @__PURE__ */ new Map());
    }
  ), xe(() => m(), () => {
    oe(N, !!m().fromHandle);
  }), xe(
    () => (m(), ie(P()), p(O)),
    () => {
      var ze, gt, Ee;
      oe(V, ((ze = m().fromHandle) == null ? void 0 : ze.nodeId) === I && ((gt = m().fromHandle) == null ? void 0 : gt.type) === P() && ((Ee = m().fromHandle) == null ? void 0 : Ee.id) === p(O));
    }
  ), xe(
    () => (m(), ie(P()), p(O)),
    () => {
      var ze, gt, Ee;
      oe(H, ((ze = m().toHandle) == null ? void 0 : ze.nodeId) === I && ((gt = m().toHandle) == null ? void 0 : gt.type) === P() && ((Ee = m().toHandle) == null ? void 0 : Ee.id) === p(O));
    }
  ), xe(
    () => (l(), m(), ie(P()), p(O)),
    () => {
      var ze, gt, Ee;
      oe(Z, l() === Xr.Strict ? ((ze = m().fromHandle) == null ? void 0 : ze.type) !== P() : I !== ((gt = m().fromHandle) == null ? void 0 : gt.nodeId) || p(O) !== ((Ee = m().fromHandle) == null ? void 0 : Ee.id));
    }
  ), xe(() => (p(H), m()), () => {
    oe(L, p(H) && m().isValid);
  }), Yt(), Ge();
  var we = Ym();
  be(we, "data-nodeid", I);
  let Qt;
  var Wt = ee(we);
  Ut(Wt, t, "default", {}), G(we), He(
    (ze) => {
      be(we, "data-handleid", p(O)), be(we, "data-handlepos", M()), be(we, "data-id", `${d() ?? ""}-${I ?? ""}-${F() || ""}-${P() ?? ""}`), Qt = an(we, 1, Qn(ze), null, Qt, {
        valid: p(L),
        connectingto: p(H),
        connectingfrom: p(V),
        source: !p(_),
        target: p(_),
        connectablestart: p(T),
        connectableend: p(T),
        connectable: p(T),
        connectionindicator: p(T) && (!p(N) || p(Z))
      }), be(we, "style", S());
    },
    [
      () => un([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        R()
      ])
    ],
    Pe
  ), xt("mousedown", we, Ot), xt("touchstart", we, Ot), B(e, we);
  var Kt = _e({
    get id() {
      return F();
    },
    set id(ze) {
      F(ze), w();
    },
    get type() {
      return P();
    },
    set type(ze) {
      P(ze), w();
    },
    get position() {
      return M();
    },
    set position(ze) {
      M(ze), w();
    },
    get style() {
      return S();
    },
    set style(ze) {
      S(ze), w();
    },
    get isValidConnection() {
      return k();
    },
    set isValidConnection(ze) {
      k(ze), w();
    },
    get onconnect() {
      return z();
    },
    set onconnect(ze) {
      z(ze), w();
    },
    get ondisconnect() {
      return j();
    },
    set ondisconnect(ze) {
      j(ze), w();
    },
    get isConnectable() {
      return K();
    },
    set isConnectable(ze) {
      K(ze), w();
    },
    get class() {
      return R();
    },
    set class(ze) {
      R(ze), w();
    }
  });
  return r(), Kt;
}
he(
  Dr,
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
var Wm = /* @__PURE__ */ ve("<!> <!>", 1);
function wa(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "targetPosition", "sourcePosition"]), $e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "targetPosition", 12, void 0), a = b(t, "sourcePosition", 12, void 0);
  Ge();
  var i = Wm(), s = Ne(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Top);
  Dr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  });
  var u = X(s), c = X(u);
  const d = /* @__PURE__ */ Pe(() => a() ?? Le.Bottom);
  return Dr(c, {
    type: "source",
    get position() {
      return p(d);
    }
  }), He(() => {
    var f;
    return Jn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), B(e, i), _e({
    get data() {
      return r();
    },
    set data(f) {
      r(f), w();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), w();
    },
    get sourcePosition() {
      return a();
    },
    set sourcePosition(f) {
      a(f), w();
    }
  });
}
he(
  wa,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Km = /* @__PURE__ */ ve(" <!>", 1);
function Wd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "sourcePosition"]), $e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "sourcePosition", 12, void 0);
  Ge(), Ye();
  var a = Km(), i = Ne(a), s = X(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Bottom);
  return Dr(s, {
    type: "source",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Jn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), B(e, a), _e({
    get data() {
      return r();
    },
    set data(u) {
      r(u), w();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), w();
    }
  });
}
he(Wd, { data: {}, sourcePosition: {} }, [], [], !0);
var Fm = /* @__PURE__ */ ve(" <!>", 1);
function Kd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "targetPosition"]), $e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "targetPosition", 12, void 0);
  Ge(), Ye();
  var a = Fm(), i = Ne(a), s = X(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Top);
  return Dr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Jn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), B(e, a), _e({
    get data() {
      return r();
    },
    set data(u) {
      r(u), w();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), w();
    }
  });
}
he(Kd, { data: {}, targetPosition: {} }, [], [], !0);
function Fd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, []);
}
he(Fd, {}, [], [], !0);
function Ku(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ba(e, { target: t, domNode: n }) {
  return Ku(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ku(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Xm = /* @__PURE__ */ ve("<div><!></div>");
function Xd(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(a, "$domNode", n), { domNode: a } = dt();
  Ge();
  var i = Xm(), s = ee(i);
  Ut(s, t, "default", {}), G(i), qt(i, (l, u) => ba == null ? void 0 : ba(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), B(e, i), _e(), r();
}
he(Xd, {}, ["default"], [], !0);
function qd() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = dt();
  return (s) => {
    const l = te(e).get(s);
    if (!l) {
      console.warn("012", xo.error012(s));
      return;
    }
    (l.selectable || te(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && te(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var qm = /* @__PURE__ */ ve('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Ud(e, t) {
  $e(t, !1);
  let n = b(t, "style", 12, void 0), r = b(t, "x", 12, void 0), o = b(t, "y", 12, void 0);
  const a = qd(), i = Wr("svelteflow__edge_id");
  return Ge(), Xd(e, {
    children: (s, l) => {
      var u = qm(), c = ee(u);
      Ut(c, t, "default", {}), G(u), He(() => {
        be(u, "style", "pointer-events: all;" + n()), Nt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), xt("keyup", u, () => {
      }), xt("click", u, () => {
        i && a(i);
      }), B(s, u);
    },
    $$slots: { default: !0 }
  }), _e({
    get style() {
      return n();
    },
    set style(s) {
      n(s), w();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), w();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), w();
    }
  });
}
he(Ud, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Um = /* @__PURE__ */ Re('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Gm = /* @__PURE__ */ Re('<path fill="none"></path><!><!>', 1);
function $i(e, t) {
  $e(t, !1);
  let n = b(t, "id", 12, void 0), r = b(t, "path", 12), o = b(t, "label", 12, void 0), a = b(t, "labelX", 12, void 0), i = b(t, "labelY", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "markerStart", 12, void 0), u = b(t, "markerEnd", 12, void 0), c = b(t, "style", 12, void 0), d = b(t, "interactionWidth", 12, 20), f = b(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ge();
  var y = Gm(), x = Ne(y), C = X(x);
  {
    var E = (g) => {
      var _ = Um();
      be(_, "stroke-opacity", 0), be(_, "stroke-width", v), He(() => be(_, "d", r())), B(g, _);
    };
    Ve(C, (g) => {
      v && g(E);
    });
  }
  var m = X(C);
  {
    var $ = (g) => {
      Ud(g, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (_, T) => {
          Ye();
          var O = at();
          He(() => Jn(O, o())), B(_, O);
        },
        $$slots: { default: !0 }
      });
    };
    Ve(m, (g) => {
      o() && g($);
    });
  }
  return He(
    (g) => {
      be(x, "id", n()), be(x, "d", r()), an(x, 0, Qn(g)), be(x, "marker-start", l()), be(x, "marker-end", u()), be(x, "style", c());
    },
    [
      () => un(["svelte-flow__edge-path", f()])
    ],
    Pe
  ), B(e, y), _e({
    get id() {
      return n();
    },
    set id(g) {
      n(g), w();
    },
    get path() {
      return r();
    },
    set path(g) {
      r(g), w();
    },
    get label() {
      return o();
    },
    set label(g) {
      o(g), w();
    },
    get labelX() {
      return a();
    },
    set labelX(g) {
      a(g), w();
    },
    get labelY() {
      return i();
    },
    set labelY(g) {
      i(g), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), w();
    },
    get markerStart() {
      return l();
    },
    set markerStart(g) {
      l(g), w();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(g) {
      u(g), w();
    },
    get style() {
      return c();
    },
    set style(g) {
      c(g), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), w();
    },
    get class() {
      return f();
    },
    set class(g) {
      f(g), w();
    }
  });
}
he(
  $i,
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
function xa(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, [
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
  ]), $e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), y = b(t, "sourcePosition", 12), x = b(t, "targetX", 12), C = b(t, "targetY", 12), E = b(t, "targetPosition", 12);
  return xe(
    () => (p(r), p(o), p(a), ie(f()), ie(v()), ie(x()), ie(C()), ie(y()), ie(E())),
    () => {
      ((m) => (oe(r, m[0]), oe(o, m[1]), oe(a, m[2])))(Rd({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: E()
      }));
    }
  ), Yt(), Ge(), $i(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(a);
    },
    get label() {
      return i();
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
  }), _e({
    get label() {
      return i();
    },
    set label(m) {
      i(m), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(m) {
      s(m), w();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(m) {
      v(m), w();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(m) {
      y(m), w();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), w();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), w();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), w();
    }
  });
}
he(
  xa,
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
function Gd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, [
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
  ]), $e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), y = b(t, "sourcePosition", 12), x = b(t, "targetX", 12), C = b(t, "targetY", 12), E = b(t, "targetPosition", 12);
  return xe(
    () => (p(r), p(o), p(a), ie(f()), ie(v()), ie(x()), ie(C()), ie(y()), ie(E())),
    () => {
      ((m) => (oe(r, m[0]), oe(o, m[1]), oe(a, m[2])))(ya({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: E()
      }));
    }
  ), Yt(), Ge(), $i(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(a);
    },
    get label() {
      return i();
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
  }), _e({
    get label() {
      return i();
    },
    set label(m) {
      i(m), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(m) {
      s(m), w();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(m) {
      v(m), w();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(m) {
      y(m), w();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), w();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), w();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), w();
    }
  });
}
he(
  Gd,
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
function Jd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, [
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
  ]), $e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), y = b(t, "targetX", 12), x = b(t, "targetY", 12);
  return xe(
    () => (p(r), p(o), p(a), ie(f()), ie(v()), ie(y()), ie(x())),
    () => {
      ((C) => (oe(r, C[0]), oe(o, C[1]), oe(a, C[2])))(As({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: x()
      }));
    }
  ), Yt(), Ge(), $i(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(a);
    },
    get label() {
      return i();
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
  }), _e({
    get label() {
      return i();
    },
    set label(C) {
      i(C), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(C) {
      s(C), w();
    },
    get style() {
      return l();
    },
    set style(C) {
      l(C), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(C) {
      u(C), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(C) {
      c(C), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(C) {
      f(C), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(C) {
      v(C), w();
    },
    get targetX() {
      return y();
    },
    set targetX(C) {
      y(C), w();
    },
    get targetY() {
      return x();
    },
    set targetY(C) {
      x(C), w();
    }
  });
}
he(
  Jd,
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
function Qd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, [
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
  ]), $e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), y = b(t, "sourcePosition", 12), x = b(t, "targetX", 12), C = b(t, "targetY", 12), E = b(t, "targetPosition", 12);
  return xe(
    () => (p(r), p(o), p(a), ie(f()), ie(v()), ie(x()), ie(C()), ie(y()), ie(E())),
    () => {
      ((m) => (oe(r, m[0]), oe(o, m[1]), oe(a, m[2])))(ya({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: C(),
        sourcePosition: y(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), Yt(), Ge(), $i(e, {
    get path() {
      return p(r);
    },
    get labelX() {
      return p(o);
    },
    get labelY() {
      return p(a);
    },
    get label() {
      return i();
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
  }), _e({
    get label() {
      return i();
    },
    set label(m) {
      i(m), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(m) {
      s(m), w();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(m) {
      v(m), w();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(m) {
      y(m), w();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), w();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), w();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), w();
    }
  });
}
he(
  Qd,
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
function Jm(e, t) {
  const n = e.set, r = t.set, o = te(e), a = te(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function Qm(e, t) {
  const n = e.set, r = t.set;
  let o = te(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const ey = (e, t, n) => {
  if (!n)
    return;
  const r = te(e), o = t.set, a = n.set;
  let i = n ? te(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, ty = (e, t, n, r = [0, 0], o = pa) => {
  const { subscribe: a, set: i, update: s } = Me([]);
  let l = e, u = {}, c = !0;
  const d = (x) => (Dd(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, i(l), l), f = (x) => d(x(l)), v = (x) => {
    u = x;
  }, y = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, ny = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = Me([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
    zd(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ef = {
  input: Wd,
  output: Kd,
  default: wa,
  group: Fd
}, tf = {
  straight: Jd,
  smoothstep: Gd,
  default: xa,
  step: Qd
}, ry = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? pa;
  Dd(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), zd(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = bi(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    v = gl(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Me(null),
    nodes: ty(e, s, l, d, f),
    nodeLookup: kn(s),
    parentLookup: kn(l),
    edgeLookup: kn(c),
    visibleNodes: kn([]),
    edges: ny(t, u, c),
    visibleEdges: kn([]),
    connectionLookup: kn(u),
    height: Me(500),
    width: Me(500),
    minZoom: Me(0.5),
    maxZoom: Me(2),
    nodeOrigin: Me(d),
    nodeDragThreshold: Me(1),
    nodeExtent: Me(f),
    translateExtent: Me(pa),
    autoPanOnNodeDrag: Me(!0),
    autoPanOnConnect: Me(!0),
    fitViewOnInit: Me(!1),
    fitViewOnInitDone: Me(!1),
    fitViewOptions: Me(void 0),
    panZoom: Me(null),
    snapGrid: Me(null),
    dragging: Me(!1),
    selectionRect: Me(null),
    selectionKeyPressed: Me(!1),
    multiselectionKeyPressed: Me(!1),
    deleteKeyPressed: Me(!1),
    panActivationKeyPressed: Me(!1),
    zoomActivationKeyPressed: Me(!1),
    selectionRectMode: Me(null),
    selectionMode: Me(ga.Partial),
    nodeTypes: Me(ef),
    edgeTypes: Me(tf),
    viewport: Me(v),
    connectionMode: Me(Xr.Strict),
    domNode: Me(null),
    connection: kn(Rs),
    connectionLineType: Me(vo.Bezier),
    connectionRadius: Me(20),
    isValidConnection: Me(() => !0),
    nodesDraggable: Me(!0),
    nodesConnectable: Me(!0),
    elementsSelectable: Me(!0),
    selectNodesOnDrag: Me(!0),
    markers: kn([]),
    defaultMarkerColor: Me("#b1b1b7"),
    lib: kn("svelte"),
    onlyRenderVisibleElements: Me(!1),
    onerror: Me(nm),
    ondelete: Me(void 0),
    onedgecreate: Me(void 0),
    onconnect: Me(void 0),
    onconnectstart: Me(void 0),
    onconnectend: Me(void 0),
    onbeforedelete: Me(void 0),
    nodesInitialized: Me(!1),
    edgesInitialized: Me(!1),
    viewportInitialized: Me(!1),
    initialized: kn(!1)
  };
};
function oy(e) {
  const t = Tr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && um({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Tr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = hm({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: a
    });
    return c && i.push({
      ...s,
      zIndex: lm({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), i;
  }, []));
}
function iy(e) {
  return Tr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? kd(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Wa = Symbol();
function nf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = ry({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(S) {
    s.nodeTypes.set({
      ...ef,
      ...S
    });
  }
  function u(S) {
    s.edgeTypes.set({
      ...tf,
      ...S
    });
  }
  function c(S) {
    const k = te(s.edges);
    s.edges.set(fm(S, k));
  }
  const d = (S, k = !1) => {
    var z;
    const j = te(s.nodeLookup);
    for (const [K, R] of S) {
      const I = (z = j.get(K)) == null ? void 0 : z.internals.userNode;
      I && (I.position = R.position, I.dragging = k);
    }
    s.nodes.update((K) => K);
  };
  function f(S) {
    var k, z, j;
    const K = te(s.nodeLookup), R = te(s.parentLookup), { changes: I, updatedInternals: ne } = Cm(S, K, te(s.parentLookup), te(s.domNode), te(s.nodeOrigin));
    if (ne) {
      if (bm(K, R, { nodeOrigin: a, nodeExtent: i }), !te(s.fitViewOnInitDone) && te(s.fitViewOnInit)) {
        const Q = te(s.fitViewOptions), W = y({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of I) {
        const W = (k = K.get(Q.id)) == null ? void 0 : k.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const ae = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((z = Q.dimensions) == null ? void 0 : z.width) ?? W.width, W.height = ((j = Q.dimensions) == null ? void 0 : j.height) ?? W.height), W.measured = ae;
              break;
            }
            case "position":
              W.position = Q.position ?? W.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), te(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(S) {
    const k = te(s.panZoom), z = te(s.domNode);
    if (!k || !z)
      return Promise.resolve(!1);
    const { width: j, height: K } = hl(z), R = Nu(te(s.nodeLookup), S);
    return Ru({
      nodes: R,
      width: j,
      height: K,
      minZoom: te(s.minZoom),
      maxZoom: te(s.maxZoom),
      panZoom: k
    }, S);
  }
  function y(S) {
    const k = te(s.panZoom);
    if (!k)
      return !1;
    const z = Nu(te(s.nodeLookup), S);
    return Ru({
      nodes: z,
      width: te(s.width),
      height: te(s.height),
      minZoom: te(s.minZoom),
      maxZoom: te(s.maxZoom),
      panZoom: k
    }, S), z.size > 0;
  }
  function x(S, k) {
    const z = te(s.panZoom);
    return z ? z.scaleBy(S, k) : Promise.resolve(!1);
  }
  function C(S) {
    return x(1.2, S);
  }
  function E(S) {
    return x(1 / 1.2, S);
  }
  function m(S) {
    const k = te(s.panZoom);
    k && (k.setScaleExtent([S, te(s.maxZoom)]), s.minZoom.set(S));
  }
  function $(S) {
    const k = te(s.panZoom);
    k && (k.setScaleExtent([te(s.minZoom), S]), s.maxZoom.set(S));
  }
  function g(S) {
    const k = te(s.panZoom);
    k && (k.setTranslateExtent(S), s.translateExtent.set(S));
  }
  function _(S) {
    let k = !1;
    return S.forEach((z) => {
      z.selected && (z.selected = !1, k = !0);
    }), k;
  }
  function T(S) {
    var k;
    (k = te(s.panZoom)) == null || k.setClickDistance(S);
  }
  function O(S) {
    _((S == null ? void 0 : S.nodes) || te(s.nodes)) && s.nodes.set(te(s.nodes)), _((S == null ? void 0 : S.edges) || te(s.edges)) && s.edges.set(te(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (S) => {
    var k;
    if (S) {
      const z = te(s.nodes), j = te(s.edges), K = z.filter((Q) => Q.selected), R = j.filter((Q) => Q.selected), { nodes: I, edges: ne } = await Ed({
        nodesToRemove: K,
        edgesToRemove: R,
        nodes: z,
        edges: j,
        onBeforeDelete: te(s.onbeforedelete)
      });
      (I.length || ne.length) && (s.nodes.update((Q) => Q.filter((W) => !I.some((ae) => ae.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ne.some((ae) => ae.id === W.id))), (k = te(s.ondelete)) == null || k({
        nodes: I,
        edges: ne
      }));
    }
  });
  function N(S) {
    const k = te(s.multiselectionKeyPressed);
    s.nodes.update((z) => z.map((j) => {
      const K = S.includes(j.id), R = k && j.selected || K;
      return j.selected = R, j;
    })), k || s.edges.update((z) => z.map((j) => (j.selected = !1, j)));
  }
  function V(S) {
    const k = te(s.multiselectionKeyPressed);
    s.edges.update((z) => z.map((j) => {
      const K = S.includes(j.id), R = k && j.selected || K;
      return j.selected = R, j;
    })), k || s.nodes.update((z) => z.map((j) => (j.selected = !1, j)));
  }
  function H(S) {
    var k;
    const z = (k = te(s.nodes)) == null ? void 0 : k.find((j) => j.id === S);
    if (!z) {
      console.warn("012", xo.error012(S));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), z.selected ? z.selected && te(s.multiselectionKeyPressed) && O({ nodes: [z], edges: [] }) : N([S]);
  }
  function Z(S) {
    const k = te(s.viewport);
    return km({
      delta: S,
      panZoom: te(s.panZoom),
      transform: [k.x, k.y, k.zoom],
      translateExtent: te(s.translateExtent),
      width: te(s.width),
      height: te(s.height)
    });
  }
  const L = Me(Rs), F = (S) => {
    L.set({ ...S });
  };
  function P() {
    L.set(Rs);
  }
  function M() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), O(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: oy(s),
    visibleNodes: iy(s),
    connection: Tr([L, s.viewport], ([S, k]) => S.inProgress ? {
      ...S,
      to: xi(S.to, [k.x, k.y, k.zoom])
    } : { ...S }),
    markers: Tr([s.edges, s.defaultMarkerColor, s.flowId], ([S, k, z]) => mm(S, { defaultColor: k, id: z })),
    initialized: (() => {
      let S = !1;
      const k = te(s.nodes).length, z = te(s.edges).length;
      return Tr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([j, K, R]) => S || (k === 0 ? S = R : z === 0 ? S = R && j : S = R && j && K, S));
    })(),
    // actions
    syncNodeStores: (S) => Jm(s.nodes, S),
    syncEdgeStores: (S) => Qm(s.edges, S),
    syncViewport: (S) => ey(s.panZoom, s.viewport, S),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: C,
    zoomOut: E,
    fitView: (S) => v(S),
    setMinZoom: m,
    setMaxZoom: $,
    setTranslateExtent: g,
    setPaneClickDistance: T,
    unselectNodesAndEdges: O,
    addSelectedNodes: N,
    addSelectedEdges: V,
    handleNodeSelection: H,
    panBy: Z,
    updateConnection: F,
    cancelConnection: P,
    reset: M
  };
}
function dt() {
  const e = Wr(Wa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function ay({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = nf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return yo(Wa, {
    getStore: () => s
  }), s;
}
function Fu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = Zm({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: a,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return i.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var sy = /* @__PURE__ */ ve('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const ly = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function rf(e, t) {
  $e(t, !1), mt(e, ly);
  const [n, r] = kt(), o = () => se(z, "$panActivationKeyPressed", n), a = () => se(F, "$minZoom", n), i = () => se(P, "$maxZoom", n), s = () => se(j, "$zoomActivationKeyPressed", n), l = () => se(L, "$selectionRect", n), u = () => se(S, "$translateExtent", n), c = () => se(k, "$lib", n), d = fe(), f = fe(), v = fe();
  let y = b(t, "initialViewport", 12, void 0), x = b(t, "onMoveStart", 12, void 0), C = b(t, "onMove", 12, void 0), E = b(t, "onMoveEnd", 12, void 0), m = b(t, "panOnScrollMode", 12), $ = b(t, "preventScrolling", 12), g = b(t, "zoomOnScroll", 12), _ = b(t, "zoomOnDoubleClick", 12), T = b(t, "zoomOnPinch", 12), O = b(t, "panOnDrag", 12), N = b(t, "panOnScroll", 12), V = b(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: Z,
    selectionRect: L,
    minZoom: F,
    maxZoom: P,
    dragging: M,
    translateExtent: S,
    lib: k,
    panActivationKeyPressed: z,
    zoomActivationKeyPressed: j,
    viewportInitialized: K
  } = dt(), R = (W) => H.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  er(() => {
    sa(K, !0);
  }), xe(() => ie(y()), () => {
    oe(d, y() || { x: 0, y: 0, zoom: 1 });
  }), xe(
    () => (o(), ie(O())),
    () => {
      oe(f, o() || O());
    }
  ), xe(
    () => (o(), ie(N())),
    () => {
      oe(v, o() || N());
    }
  ), Yt(), Ge();
  var I = sy(), ne = ee(I);
  Ut(ne, t, "default", {}), G(I), qt(I, (W, ae) => Fu == null ? void 0 : Fu(W, ae), () => ({
    viewport: H,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: p(d),
    dragging: M,
    panZoom: Z,
    onPanZoomStart: x(),
    onPanZoom: C(),
    onPanZoomEnd: E(),
    zoomOnScroll: g(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: T(),
    panOnScroll: p(v),
    panOnDrag: p(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Mr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: R
  })), B(e, I);
  var Q = _e({
    get initialViewport() {
      return y();
    },
    set initialViewport(W) {
      y(W), w();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(W) {
      x(W), w();
    },
    get onMove() {
      return C();
    },
    set onMove(W) {
      C(W), w();
    },
    get onMoveEnd() {
      return E();
    },
    set onMoveEnd(W) {
      E(W), w();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(W) {
      m(W), w();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(W) {
      $(W), w();
    },
    get zoomOnScroll() {
      return g();
    },
    set zoomOnScroll(W) {
      g(W), w();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(W) {
      _(W), w();
    },
    get zoomOnPinch() {
      return T();
    },
    set zoomOnPinch(W) {
      T(W), w();
    },
    get panOnDrag() {
      return O();
    },
    set panOnDrag(W) {
      O(W), w();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(W) {
      N(W), w();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(W) {
      V(W), w();
    }
  });
  return r(), Q;
}
he(
  rf,
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
function Xu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function qu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var uy = /* @__PURE__ */ ve("<div><!></div>");
const cy = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function of(e, t) {
  $e(t, !1), mt(e, cy);
  const [n, r] = kt(), o = () => se(P, "$panActivationKeyPressed", n), a = () => se(L, "$selectionKeyPressed", n), i = () => se(H, "$selectionRect", n), s = () => se(V, "$elementsSelectable", n), l = () => se(Z, "$selectionRectMode", n), u = () => se(T, "$edges", n), c = () => se(_, "$nodeLookup", n), d = () => se(O, "$viewport", n), f = () => se(F, "$selectionMode", n), v = () => se(N, "$dragging", n), y = fe(), x = fe(), C = fe();
  let E = b(t, "panOnDrag", 12, void 0), m = b(t, "selectionOnDrag", 12, void 0);
  const $ = Aa(), {
    nodes: g,
    nodeLookup: _,
    edges: T,
    viewport: O,
    dragging: N,
    elementsSelectable: V,
    selectionRect: H,
    selectionRectMode: Z,
    selectionKeyPressed: L,
    selectionMode: F,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: M
  } = dt();
  let S = fe(), k = null, z = [], j = !1;
  function K(ge) {
    if (j) {
      j = !1;
      return;
    }
    $("paneclick", { event: ge }), M(), Z.set(null);
  }
  function R(ge) {
    var Oe, Je;
    if (k = p(S).getBoundingClientRect(), !V || !p(x) || ge.button !== 0 || ge.target !== p(S) || !k)
      return;
    (Je = (Oe = ge.target) == null ? void 0 : Oe.setPointerCapture) == null || Je.call(Oe, ge.pointerId);
    const { x: Qe, y: Xe } = fr(ge, k);
    M(), H.set({
      width: 0,
      height: 0,
      startX: Qe,
      startY: Xe,
      x: Qe,
      y: Xe
    });
  }
  function I(ge) {
    if (!p(x) || !k || !i())
      return;
    j = !0;
    const Oe = fr(ge, k), Je = i().startX ?? 0, Qe = i().startY ?? 0, Xe = {
      ...i(),
      x: Oe.x < Je ? Oe.x : Je,
      y: Oe.y < Qe ? Oe.y : Qe,
      width: Math.abs(Oe.x - Je),
      height: Math.abs(Oe.y - Qe)
    }, U = z.map((Ae) => Ae.id), me = Vs(z, u()).map((Ae) => Ae.id);
    z = kd(
      c(),
      Xe,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === ga.Partial,
      !0
    );
    const Ce = Vs(z, u()).map((Ae) => Ae.id), We = z.map((Ae) => Ae.id);
    (U.length !== We.length || We.some((Ae) => !U.includes(Ae))) && g.update((Ae) => Ae.map(qu(We))), (me.length !== Ce.length || Ce.some((Ae) => !me.includes(Ae))) && T.update((Ae) => Ae.map(qu(Ce))), Z.set("user"), H.set(Xe);
  }
  function ne(ge) {
    var Oe, Je;
    ge.button === 0 && ((Je = (Oe = ge.target) == null ? void 0 : Oe.releasePointerCapture) == null || Je.call(Oe, ge.pointerId), !p(x) && l() === "user" && ge.target === p(S) && (K == null || K(ge)), H.set(null), z.length > 0 && sa(Z, "nodes"), a() && (j = !1));
  }
  const Q = (ge) => {
    var Oe;
    if (Array.isArray(p(y)) && (Oe = p(y)) != null && Oe.includes(2)) {
      ge.preventDefault();
      return;
    }
    $("panecontextmenu", { event: ge });
  };
  xe(
    () => (o(), ie(E())),
    () => {
      oe(y, o() || E());
    }
  ), xe(
    () => (a(), i(), ie(m()), p(y)),
    () => {
      oe(x, a() || i() || m() && p(y) !== !0);
    }
  ), xe(
    () => (s(), p(x), l()),
    () => {
      oe(C, s() && (p(x) || l() === "user"));
    }
  ), Yt(), Ge();
  var W = uy(), ae = /* @__PURE__ */ Fe(() => p(C) ? void 0 : Xu(K, p(S))), pe = /* @__PURE__ */ Fe(() => Xu(Q, p(S)));
  let de;
  var le = ee(W);
  Ut(le, t, "default", {}), G(W), gr(W, (ge) => oe(S, ge), () => p(S)), He(
    (ge) => de = an(W, 1, "svelte-flow__pane svelte-1esy7hx", null, de, {
      draggable: ge,
      dragging: v(),
      selection: p(x)
    }),
    [
      () => E() === !0 || Array.isArray(E()) && E().includes(0)
    ],
    Pe
  ), xt("click", W, function(...ge) {
    var Oe;
    (Oe = p(ae)) == null || Oe.apply(this, ge);
  }), xt("pointerdown", W, function(...ge) {
    var Oe;
    (Oe = p(C) ? R : void 0) == null || Oe.apply(this, ge);
  }), xt("pointermove", W, function(...ge) {
    var Oe;
    (Oe = p(C) ? I : void 0) == null || Oe.apply(this, ge);
  }), xt("pointerup", W, function(...ge) {
    var Oe;
    (Oe = p(C) ? ne : void 0) == null || Oe.apply(this, ge);
  }), xt("contextmenu", W, function(...ge) {
    var Oe;
    (Oe = p(pe)) == null || Oe.apply(this, ge);
  }), B(e, W);
  var Te = _e({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(ge) {
      E(ge), w();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(ge) {
      m(ge), w();
    }
  });
  return r(), Te;
}
he(of, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var dy = /* @__PURE__ */ ve('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const fy = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function af(e, t) {
  $e(t, !1), mt(e, fy);
  const [n, r] = kt(), o = () => se(a, "$viewport", n), { viewport: a } = dt();
  Ge();
  var i = dy(), s = ee(i);
  Ut(s, t, "default", {}), G(i), He(() => be(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), B(e, i), _e(), r();
}
he(af, {}, ["default"], [], !0);
function $a(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Pm({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
    getStoreItems: () => {
      const u = te(n.snapGrid), c = te(n.viewport);
      return {
        nodes: te(n.nodes),
        nodeLookup: te(n.nodeLookup),
        edges: te(n.edges),
        nodeExtent: te(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: te(n.nodeOrigin),
        multiSelectionActive: te(n.multiselectionKeyPressed),
        domNode: te(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: te(n.autoPanOnNodeDrag),
        nodesDraggable: te(n.nodesDraggable),
        selectNodesOnDrag: te(n.selectNodesOnDrag),
        nodeDragThreshold: te(n.nodeDragThreshold),
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
function vy({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
  if (o === void 0 && a === void 0) {
    const i = e ?? n, s = t ?? r;
    return {
      width: i ? `width:${i}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var py = /* @__PURE__ */ ve("<div><!></div>");
function sf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(pe, "$nodeTypes", n), a = () => se(Oe, "$elementsSelectable", n), i = () => se(Je, "$nodesDraggable", n), s = () => se(me, "$connectableStore", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0);
  let f = b(t, "node", 13), v = b(t, "id", 13), y = b(t, "data", 29, () => ({})), x = b(t, "selected", 13, !1), C = b(t, "draggable", 13, void 0), E = b(t, "selectable", 13, void 0), m = b(t, "connectable", 13, !0), $ = b(t, "deletable", 13, !0), g = b(t, "hidden", 13, !1), _ = b(t, "dragging", 13, !1), T = b(t, "resizeObserver", 13, null), O = b(t, "style", 13, void 0), N = b(t, "type", 13, "default"), V = b(t, "isParent", 13, !1), H = b(t, "positionX", 13), Z = b(t, "positionY", 13), L = b(t, "sourcePosition", 13, void 0), F = b(t, "targetPosition", 13, void 0), P = b(t, "zIndex", 13), M = b(t, "measuredWidth", 13, void 0), S = b(t, "measuredHeight", 13, void 0), k = b(t, "initialWidth", 13, void 0), z = b(t, "initialHeight", 13, void 0), j = b(t, "width", 13, void 0), K = b(t, "height", 13, void 0), R = b(t, "dragHandle", 13, void 0), I = b(t, "initialized", 13, !1), ne = b(t, "parentId", 13, void 0), Q = b(t, "nodeClickDistance", 13, void 0), W = b(t, "class", 13, "");
  const ae = dt(), {
    nodeTypes: pe,
    nodeDragThreshold: de,
    selectNodesOnDrag: le,
    handleNodeSelection: Te,
    updateNodeInternals: ge,
    elementsSelectable: Oe,
    nodesDraggable: Je
  } = ae;
  let Qe = fe(void 0, !0), Xe = fe(null, !0);
  const U = Aa(), me = Me(m());
  let Ce = fe(void 0, !0), We = fe(void 0, !0), Ae = fe(void 0, !0);
  yo("svelteflow__node_id", v()), yo("svelteflow__node_connectable", me), il(() => {
    var ue;
    p(Xe) && ((ue = T()) == null || ue.unobserve(p(Xe)));
  });
  function nt(ue) {
    E() && (!te(le) || !C() || te(de) > 0) && Te(v()), U("nodeclick", { node: f().internals.userNode, event: ue });
  }
  xe(() => ie(N()), () => {
    oe(l, N() || "default");
  }), xe(() => (o(), p(l)), () => {
    oe(u, !!o()[p(l)]);
  }), xe(
    () => (o(), p(l), wa),
    () => {
      oe(c, o()[p(l)] || wa);
    }
  ), xe(
    () => (p(u), ie(N())),
    () => {
      p(u) || console.warn("003", xo.error003(N()));
    }
  ), xe(
    () => (ie(j()), ie(K()), ie(k()), ie(z()), ie(M()), ie(S())),
    () => {
      oe(d, vy({
        width: j(),
        height: K(),
        initialWidth: k(),
        initialHeight: z(),
        measuredWidth: M(),
        measuredHeight: S()
      }));
    }
  ), xe(() => ie(m()), () => {
    me.set(!!m());
  }), xe(
    () => (p(Ce), p(l), p(We), ie(L()), p(Ae), ie(F()), ie(v()), p(Qe)),
    () => {
      (p(Ce) && p(l) !== p(Ce) || p(We) && L() !== p(We) || p(Ae) && F() !== p(Ae)) && requestAnimationFrame(() => ge(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: p(Qe),
            force: !0
          }
        ]
      ]))), oe(Ce, p(l)), oe(We, L()), oe(Ae, F());
    }
  ), xe(
    () => (ie(T()), p(Qe), p(Xe), ie(I())),
    () => {
      T() && (p(Qe) !== p(Xe) || !I()) && (p(Xe) && T().unobserve(p(Xe)), p(Qe) && T().observe(p(Qe)), oe(Xe, p(Qe)));
    }
  ), Yt(), Ge(!0);
  var Ze = Ct(), rt = Ne(Ze);
  {
    var pt = (ue) => {
      var et = py();
      let we;
      var Qt = ee(et);
      const Wt = /* @__PURE__ */ Pe(() => x() ?? !1), Kt = /* @__PURE__ */ Pe(() => E() ?? a() ?? !0), ze = /* @__PURE__ */ Pe(() => $() ?? !0), gt = /* @__PURE__ */ Pe(() => C() ?? i() ?? !0);
      Zc(Qt, () => p(c), (Ee, st) => {
        st(Ee, {
          get data() {
            return y();
          },
          get id() {
            return v();
          },
          get selected() {
            return p(Wt);
          },
          get selectable() {
            return p(Kt);
          },
          get deletable() {
            return p(ze);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return F();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return p(gt);
          },
          get dragHandle() {
            return R();
          },
          get parentId() {
            return ne();
          },
          get type() {
            return p(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return H();
          },
          get positionAbsoluteY() {
            return Z();
          },
          get width() {
            return j();
          },
          get height() {
            return K();
          }
        });
      }), G(et), qt(et, (Ee, st) => $a == null ? void 0 : $a(Ee, st), () => ({
        nodeId: v(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: R(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: Te,
        onDrag: (Ee, st, yt, Ft) => {
          U("nodedrag", { event: Ee, targetNode: yt, nodes: Ft });
        },
        onDragStart: (Ee, st, yt, Ft) => {
          U("nodedragstart", { event: Ee, targetNode: yt, nodes: Ft });
        },
        onDragStop: (Ee, st, yt, Ft) => {
          U("nodedragstop", { event: Ee, targetNode: yt, nodes: Ft });
        },
        store: ae
      })), gr(et, (Ee) => oe(Qe, Ee), () => p(Qe)), yn(() => xt("click", et, nt)), yn(() => xt("mouseenter", et, (Ee) => U("nodemouseenter", { node: f(), event: Ee }))), yn(() => xt("mouseleave", et, (Ee) => U("nodemouseleave", { node: f(), event: Ee }))), yn(() => xt("mousemove", et, (Ee) => U("nodemousemove", { node: f(), event: Ee }))), yn(() => xt("contextmenu", et, (Ee) => U("nodecontextmenu", { node: f(), event: Ee }))), He(
        (Ee) => {
          be(et, "data-id", v()), we = an(et, 1, Qn(Ee), null, we, {
            dragging: _(),
            selected: x(),
            draggable: C(),
            connectable: m(),
            selectable: E(),
            nopan: C(),
            parent: V()
          }), be(et, "style", `${O() ?? ""};${p(d).width ?? ""}${p(d).height ?? ""}`), Nt(et, "z-index", P()), Nt(et, "transform", `translate(${H() ?? ""}px, ${Z() ?? ""}px)`), Nt(et, "visibility", I() ? "visible" : "hidden");
        },
        [
          () => un([
            "svelte-flow__node",
            `svelte-flow__node-${p(l)}`,
            W()
          ])
        ],
        Pe
      ), B(ue, et);
    };
    Ve(rt, (ue) => {
      g() || ue(pt);
    });
  }
  B(e, Ze);
  var Ot = _e({
    get node() {
      return f();
    },
    set node(ue) {
      f(ue), w();
    },
    get id() {
      return v();
    },
    set id(ue) {
      v(ue), w();
    },
    get data() {
      return y();
    },
    set data(ue) {
      y(ue), w();
    },
    get selected() {
      return x();
    },
    set selected(ue) {
      x(ue), w();
    },
    get draggable() {
      return C();
    },
    set draggable(ue) {
      C(ue), w();
    },
    get selectable() {
      return E();
    },
    set selectable(ue) {
      E(ue), w();
    },
    get connectable() {
      return m();
    },
    set connectable(ue) {
      m(ue), w();
    },
    get deletable() {
      return $();
    },
    set deletable(ue) {
      $(ue), w();
    },
    get hidden() {
      return g();
    },
    set hidden(ue) {
      g(ue), w();
    },
    get dragging() {
      return _();
    },
    set dragging(ue) {
      _(ue), w();
    },
    get resizeObserver() {
      return T();
    },
    set resizeObserver(ue) {
      T(ue), w();
    },
    get style() {
      return O();
    },
    set style(ue) {
      O(ue), w();
    },
    get type() {
      return N();
    },
    set type(ue) {
      N(ue), w();
    },
    get isParent() {
      return V();
    },
    set isParent(ue) {
      V(ue), w();
    },
    get positionX() {
      return H();
    },
    set positionX(ue) {
      H(ue), w();
    },
    get positionY() {
      return Z();
    },
    set positionY(ue) {
      Z(ue), w();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ue) {
      L(ue), w();
    },
    get targetPosition() {
      return F();
    },
    set targetPosition(ue) {
      F(ue), w();
    },
    get zIndex() {
      return P();
    },
    set zIndex(ue) {
      P(ue), w();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ue) {
      M(ue), w();
    },
    get measuredHeight() {
      return S();
    },
    set measuredHeight(ue) {
      S(ue), w();
    },
    get initialWidth() {
      return k();
    },
    set initialWidth(ue) {
      k(ue), w();
    },
    get initialHeight() {
      return z();
    },
    set initialHeight(ue) {
      z(ue), w();
    },
    get width() {
      return j();
    },
    set width(ue) {
      j(ue), w();
    },
    get height() {
      return K();
    },
    set height(ue) {
      K(ue), w();
    },
    get dragHandle() {
      return R();
    },
    set dragHandle(ue) {
      R(ue), w();
    },
    get initialized() {
      return I();
    },
    set initialized(ue) {
      I(ue), w();
    },
    get parentId() {
      return ne();
    },
    set parentId(ue) {
      ne(ue), w();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ue) {
      Q(ue), w();
    },
    get class() {
      return W();
    },
    set class(ue) {
      W(ue), w();
    }
  });
  return r(), Ot;
}
he(
  sf,
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
var gy = /* @__PURE__ */ ve('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const hy = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function lf(e, t) {
  $e(t, !1), mt(e, hy);
  const [n, r] = kt(), o = () => se(c, "$visibleNodes", n), a = () => se(d, "$nodesDraggable", n), i = () => se(v, "$elementsSelectable", n), s = () => se(f, "$nodesConnectable", n), l = () => se(x, "$parentLookup", n);
  let u = b(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: x
  } = dt(), C = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const g = /* @__PURE__ */ new Map();
    $.forEach((_) => {
      const T = _.target.getAttribute("data-id");
      g.set(T, { id: T, nodeElement: _.target, force: !0 });
    }), y(g);
  });
  il(() => {
    C == null || C.disconnect();
  }), Ge();
  var E = gy();
  xn(E, 5, o, ($) => $.id, ($, g) => {
    const _ = /* @__PURE__ */ Pe(() => !!p(g).selected), T = /* @__PURE__ */ Pe(() => !!p(g).hidden), O = /* @__PURE__ */ Pe(() => !!(p(g).draggable || a() && typeof p(g).draggable > "u")), N = /* @__PURE__ */ Pe(() => !!(p(g).selectable || i() && typeof p(g).selectable > "u")), V = /* @__PURE__ */ Pe(() => !!(p(g).connectable || s() && typeof p(g).connectable > "u")), H = /* @__PURE__ */ Pe(() => p(g).deletable ?? !0), Z = /* @__PURE__ */ Pe(() => l().has(p(g).id)), L = /* @__PURE__ */ Pe(() => p(g).type ?? "default"), F = /* @__PURE__ */ Pe(() => p(g).internals.z ?? 0), P = /* @__PURE__ */ Pe(() => Md(p(g)));
    sf($, {
      get node() {
        return p(g);
      },
      get id() {
        return p(g).id;
      },
      get data() {
        return p(g).data;
      },
      get selected() {
        return p(_);
      },
      get hidden() {
        return p(T);
      },
      get draggable() {
        return p(O);
      },
      get selectable() {
        return p(N);
      },
      get connectable() {
        return p(V);
      },
      get deletable() {
        return p(H);
      },
      get positionX() {
        return p(g).internals.positionAbsolute.x;
      },
      get positionY() {
        return p(g).internals.positionAbsolute.y;
      },
      get isParent() {
        return p(Z);
      },
      get style() {
        return p(g).style;
      },
      get class() {
        return p(g).class;
      },
      get type() {
        return p(L);
      },
      get sourcePosition() {
        return p(g).sourcePosition;
      },
      get targetPosition() {
        return p(g).targetPosition;
      },
      get dragging() {
        return p(g).dragging;
      },
      get zIndex() {
        return p(F);
      },
      get dragHandle() {
        return p(g).dragHandle;
      },
      get initialized() {
        return p(P);
      },
      get width() {
        return p(g).width;
      },
      get height() {
        return p(g).height;
      },
      get initialWidth() {
        return p(g).initialWidth;
      },
      get initialHeight() {
        return p(g).initialHeight;
      },
      get measuredWidth() {
        return p(g).measured.width;
      },
      get measuredHeight() {
        return p(g).measured.height;
      },
      get parentId() {
        return p(g).parentId;
      },
      resizeObserver: C,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          it.call(this, t, M);
        },
        nodemouseenter(M) {
          it.call(this, t, M);
        },
        nodemousemove(M) {
          it.call(this, t, M);
        },
        nodemouseleave(M) {
          it.call(this, t, M);
        },
        nodedrag(M) {
          it.call(this, t, M);
        },
        nodedragstart(M) {
          it.call(this, t, M);
        },
        nodedragstop(M) {
          it.call(this, t, M);
        },
        nodecontextmenu(M) {
          it.call(this, t, M);
        }
      }
    });
  }), G(E), B(e, E);
  var m = _e({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), w();
    }
  });
  return r(), m;
}
he(lf, { nodeClickDistance: {} }, [], [], !0);
var my = /* @__PURE__ */ Re('<svg><g role="img"><!></g></svg>');
function uf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(W, "$edgeTypes", n), a = () => se(ae, "$flowId", n), i = () => se(pe, "$elementsSelectable", n), s = () => se(Q, "$edgeLookup", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0), f = fe(void 0, !0);
  let v = b(t, "id", 13), y = b(t, "type", 13, "default"), x = b(t, "source", 13, ""), C = b(t, "target", 13, ""), E = b(t, "data", 29, () => ({})), m = b(t, "style", 13, void 0), $ = b(t, "zIndex", 13, void 0), g = b(t, "animated", 13, !1), _ = b(t, "selected", 13, !1), T = b(t, "selectable", 13, void 0), O = b(t, "deletable", 13, void 0), N = b(t, "hidden", 13, !1), V = b(t, "label", 13, void 0), H = b(t, "labelStyle", 13, void 0), Z = b(t, "markerStart", 13, void 0), L = b(t, "markerEnd", 13, void 0), F = b(t, "sourceHandle", 13, void 0), P = b(t, "targetHandle", 13, void 0), M = b(t, "sourceX", 13), S = b(t, "sourceY", 13), k = b(t, "targetX", 13), z = b(t, "targetY", 13), j = b(t, "sourcePosition", 13), K = b(t, "targetPosition", 13), R = b(t, "ariaLabel", 13, void 0), I = b(t, "interactionWidth", 13, void 0), ne = b(t, "class", 13, "");
  yo("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: ae,
    elementsSelectable: pe
  } = dt(), de = Aa(), le = qd();
  function Te(U) {
    const me = s().get(v());
    me && (le(v()), de("edgeclick", { event: U, edge: me }));
  }
  function ge(U, me) {
    const Ce = s().get(v());
    Ce && de(me, { event: U, edge: Ce });
  }
  xe(() => ie(y()), () => {
    oe(l, y() || "default");
  }), xe(
    () => (o(), p(l), xa),
    () => {
      oe(u, o()[p(l)] || xa);
    }
  ), xe(
    () => (ie(Z()), a()),
    () => {
      oe(c, Z() ? `url('#${zs(Z(), a())}')` : void 0);
    }
  ), xe(
    () => (ie(L()), a()),
    () => {
      oe(d, L() ? `url('#${zs(L(), a())}')` : void 0);
    }
  ), xe(
    () => (ie(T()), i()),
    () => {
      oe(f, T() ?? i());
    }
  ), Yt(), Ge(!0);
  var Oe = Ct(), Je = Ne(Oe);
  {
    var Qe = (U) => {
      var me = my(), Ce = ee(me);
      let We;
      var Ae = ee(Ce);
      const nt = /* @__PURE__ */ Pe(() => O() ?? !0);
      Zc(Ae, () => p(u), (Ze, rt) => {
        rt(Ze, {
          get id() {
            return v();
          },
          get source() {
            return x();
          },
          get target() {
            return C();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return S();
          },
          get targetX() {
            return k();
          },
          get targetY() {
            return z();
          },
          get sourcePosition() {
            return j();
          },
          get targetPosition() {
            return K();
          },
          get animated() {
            return g();
          },
          get selected() {
            return _();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return H();
          },
          get data() {
            return E();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return I();
          },
          get selectable() {
            return p(f);
          },
          get deletable() {
            return p(nt);
          },
          get type() {
            return p(l);
          },
          get sourceHandleId() {
            return F();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return p(c);
          },
          get markerEnd() {
            return p(d);
          }
        });
      }), G(Ce), G(me), He(
        (Ze) => {
          Nt(me, "z-index", $()), We = an(Ce, 0, Qn(Ze), null, We, {
            animated: g(),
            selected: _(),
            selectable: p(f)
          }), be(Ce, "data-id", v()), be(Ce, "aria-label", R() === null ? void 0 : R() ? R() : `Edge from ${x()} to ${C()}`);
        },
        [
          () => un(["svelte-flow__edge", ne()])
        ],
        Pe
      ), xt("click", Ce, Te), xt("contextmenu", Ce, (Ze) => {
        ge(Ze, "edgecontextmenu");
      }), xt("mouseenter", Ce, (Ze) => {
        ge(Ze, "edgemouseenter");
      }), xt("mouseleave", Ce, (Ze) => {
        ge(Ze, "edgemouseleave");
      }), B(U, me);
    };
    Ve(Je, (U) => {
      N() || U(Qe);
    });
  }
  B(e, Oe);
  var Xe = _e({
    get id() {
      return v();
    },
    set id(U) {
      v(U), w();
    },
    get type() {
      return y();
    },
    set type(U) {
      y(U), w();
    },
    get source() {
      return x();
    },
    set source(U) {
      x(U), w();
    },
    get target() {
      return C();
    },
    set target(U) {
      C(U), w();
    },
    get data() {
      return E();
    },
    set data(U) {
      E(U), w();
    },
    get style() {
      return m();
    },
    set style(U) {
      m(U), w();
    },
    get zIndex() {
      return $();
    },
    set zIndex(U) {
      $(U), w();
    },
    get animated() {
      return g();
    },
    set animated(U) {
      g(U), w();
    },
    get selected() {
      return _();
    },
    set selected(U) {
      _(U), w();
    },
    get selectable() {
      return T();
    },
    set selectable(U) {
      T(U), w();
    },
    get deletable() {
      return O();
    },
    set deletable(U) {
      O(U), w();
    },
    get hidden() {
      return N();
    },
    set hidden(U) {
      N(U), w();
    },
    get label() {
      return V();
    },
    set label(U) {
      V(U), w();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(U) {
      H(U), w();
    },
    get markerStart() {
      return Z();
    },
    set markerStart(U) {
      Z(U), w();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(U) {
      L(U), w();
    },
    get sourceHandle() {
      return F();
    },
    set sourceHandle(U) {
      F(U), w();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(U) {
      P(U), w();
    },
    get sourceX() {
      return M();
    },
    set sourceX(U) {
      M(U), w();
    },
    get sourceY() {
      return S();
    },
    set sourceY(U) {
      S(U), w();
    },
    get targetX() {
      return k();
    },
    set targetX(U) {
      k(U), w();
    },
    get targetY() {
      return z();
    },
    set targetY(U) {
      z(U), w();
    },
    get sourcePosition() {
      return j();
    },
    set sourcePosition(U) {
      j(U), w();
    },
    get targetPosition() {
      return K();
    },
    set targetPosition(U) {
      K(U), w();
    },
    get ariaLabel() {
      return R();
    },
    set ariaLabel(U) {
      R(U), w();
    },
    get interactionWidth() {
      return I();
    },
    set interactionWidth(U) {
      I(U), w();
    },
    get class() {
      return ne();
    },
    set class(U) {
      ne(U), w();
    }
  });
  return r(), Xe;
}
he(
  uf,
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
function cf(e, t) {
  $e(t, !1);
  let n = b(t, "onMount", 12, void 0), r = b(t, "onDestroy", 12, void 0);
  return er(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ge(), _e({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), w();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), w();
    }
  });
}
he(cf, { onMount: {}, onDestroy: {} }, [], [], !0);
var yy = /* @__PURE__ */ Re("<defs></defs>");
function df(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(a, "$markers", n), { markers: a } = dt();
  Ge();
  var i = yy();
  xn(i, 5, o, (s) => s.id, (s, l) => {
    ff(s, It(() => p(l)));
  }), G(i), B(e, i), _e(), r();
}
he(df, {}, [], [], !0);
var wy = /* @__PURE__ */ Re('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), by = /* @__PURE__ */ Re('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), xy = /* @__PURE__ */ Re('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ff(e, t) {
  $e(t, !1);
  let n = b(t, "id", 12), r = b(t, "type", 12), o = b(t, "width", 12, 12.5), a = b(t, "height", 12, 12.5), i = b(t, "markerUnits", 12, "strokeWidth"), s = b(t, "orient", 12, "auto-start-reverse"), l = b(t, "color", 12, void 0), u = b(t, "strokeWidth", 12, void 0);
  Ge();
  var c = xy(), d = ee(c);
  {
    var f = (y) => {
      var x = wy();
      He(() => {
        be(x, "stroke", l()), be(x, "stroke-width", u());
      }), B(y, x);
    }, v = (y, x) => {
      {
        var C = (E) => {
          var m = by();
          He(() => {
            be(m, "stroke", l()), be(m, "stroke-width", u()), be(m, "fill", l());
          }), B(E, m);
        };
        Ve(
          y,
          (E) => {
            r() === ui.ArrowClosed && E(C);
          },
          x
        );
      }
    };
    Ve(d, (y) => {
      r() === ui.Arrow ? y(f) : y(v, !1);
    });
  }
  return G(c), He(() => {
    be(c, "id", n()), be(c, "markerWidth", `${o()}`), be(c, "markerHeight", `${a()}`), be(c, "markerUnits", i()), be(c, "orient", s());
  }), B(e, c), _e({
    get id() {
      return n();
    },
    set id(y) {
      n(y), w();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), w();
    },
    get width() {
      return o();
    },
    set width(y) {
      o(y), w();
    },
    get height() {
      return a();
    },
    set height(y) {
      a(y), w();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(y) {
      i(y), w();
    },
    get orient() {
      return s();
    },
    set orient(y) {
      s(y), w();
    },
    get color() {
      return l();
    },
    set color(y) {
      l(y), w();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), w();
    }
  });
}
he(
  ff,
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
var $y = /* @__PURE__ */ ve('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function vf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(s, "$visibleEdges", n), a = () => se(c, "$elementsSelectable", n);
  let i = b(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = dt();
  er(() => {
    i() && u(i());
  }), Ge();
  var d = $y(), f = ee(d), v = ee(f);
  df(v, {}), G(f);
  var y = X(f, 2);
  xn(y, 1, o, (m) => m.id, (m, $) => {
    const g = /* @__PURE__ */ Pe(() => p($).selectable ?? a()), _ = /* @__PURE__ */ Pe(() => p($).type || "default");
    uf(m, {
      get id() {
        return p($).id;
      },
      get source() {
        return p($).source;
      },
      get target() {
        return p($).target;
      },
      get data() {
        return p($).data;
      },
      get style() {
        return p($).style;
      },
      get animated() {
        return p($).animated;
      },
      get selected() {
        return p($).selected;
      },
      get selectable() {
        return p(g);
      },
      get deletable() {
        return p($).deletable;
      },
      get hidden() {
        return p($).hidden;
      },
      get label() {
        return p($).label;
      },
      get labelStyle() {
        return p($).labelStyle;
      },
      get markerStart() {
        return p($).markerStart;
      },
      get markerEnd() {
        return p($).markerEnd;
      },
      get sourceHandle() {
        return p($).sourceHandle;
      },
      get targetHandle() {
        return p($).targetHandle;
      },
      get sourceX() {
        return p($).sourceX;
      },
      get sourceY() {
        return p($).sourceY;
      },
      get targetX() {
        return p($).targetX;
      },
      get targetY() {
        return p($).targetY;
      },
      get sourcePosition() {
        return p($).sourcePosition;
      },
      get targetPosition() {
        return p($).targetPosition;
      },
      get ariaLabel() {
        return p($).ariaLabel;
      },
      get interactionWidth() {
        return p($).interactionWidth;
      },
      get class() {
        return p($).class;
      },
      get type() {
        return p(_);
      },
      get zIndex() {
        return p($).zIndex;
      },
      $$events: {
        edgeclick(T) {
          it.call(this, t, T);
        },
        edgecontextmenu(T) {
          it.call(this, t, T);
        },
        edgemouseenter(T) {
          it.call(this, t, T);
        },
        edgemouseleave(T) {
          it.call(this, t, T);
        }
      }
    });
  });
  var x = X(y, 2);
  {
    var C = (m) => {
      cf(m, {
        onMount: () => {
          sa(l, !0);
        },
        onDestroy: () => {
          sa(l, !1);
        }
      });
    };
    Ve(x, (m) => {
      o().length > 0 && m(C);
    });
  }
  G(d), B(e, d);
  var E = _e({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(m) {
      i(m), w();
    }
  });
  return r(), E;
}
he(vf, { defaultEdgeOptions: {} }, [], [], !0);
var _y = /* @__PURE__ */ ve('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Cy = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function bl(e, t) {
  $e(t, !1), mt(e, Cy);
  let n = b(t, "x", 12, 0), r = b(t, "y", 12, 0), o = b(t, "width", 12, 0), a = b(t, "height", 12, 0), i = b(t, "isVisible", 12, !0);
  var s = Ct(), l = Ne(s);
  {
    var u = (c) => {
      var d = _y();
      He(() => {
        Nt(d, "width", typeof o() == "string" ? o() : `${o()}px`), Nt(d, "height", typeof a() == "string" ? a() : `${a()}px`), Nt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), B(c, d);
    };
    Ve(l, (c) => {
      i() && c(u);
    });
  }
  return B(e, s), _e({
    get x() {
      return n();
    },
    set x(c) {
      n(c), w();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), w();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), w();
    },
    get height() {
      return a();
    },
    set height(c) {
      a(c), w();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), w();
    }
  });
}
he(
  bl,
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
function pf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(i, "$selectionRect", n), a = () => se(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = dt();
  Ge();
  const l = /* @__PURE__ */ Pe(() => !!(o() && a() === "user")), u = /* @__PURE__ */ Pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ Pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ Pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ Pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  bl(e, {
    get isVisible() {
      return p(l);
    },
    get width() {
      return p(u);
    },
    get height() {
      return p(c);
    },
    get x() {
      return p(d);
    },
    get y() {
      return p(f);
    }
  }), _e(), r();
}
he(pf, {}, [], [], !0);
var ky = /* @__PURE__ */ ve('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Ey = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function gf(e, t) {
  $e(t, !1), mt(e, Ey);
  const [n, r] = kt(), o = () => se(l, "$selectionRectMode", n), a = () => se(c, "$nodeLookup", n), i = () => se(u, "$nodes", n), s = dt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Aa();
  let f = fe(null);
  function v(m) {
    const $ = i().filter((g) => g.selected);
    d("selectioncontextmenu", { nodes: $, event: m });
  }
  function y(m) {
    const $ = i().filter((g) => g.selected);
    d("selectionclick", { nodes: $, event: m });
  }
  xe(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (oe(f, bi(a(), { filter: (m) => !!m.selected })), i());
    }
  ), Yt(), Ge();
  var x = Ct(), C = Ne(x);
  {
    var E = (m) => {
      var $ = ky(), g = ee($);
      bl(g, { width: "100%", height: "100%", x: 0, y: 0 }), G($), qt($, (_, T) => $a == null ? void 0 : $a(_, T), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, T, O, N) => {
          d("nodedrag", { event: _, targetNode: null, nodes: N });
        },
        onDragStart: (_, T, O, N) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: N });
        },
        onDragStop: (_, T, O, N) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: N });
        }
      })), yn(() => xt("contextmenu", $, v)), yn(() => xt("click", $, y)), yn(() => xt("keyup", $, () => {
      })), He(() => be($, "style", `width: ${p(f).width ?? ""}px; height: ${p(f).height ?? ""}px; transform: translate(${p(f).x ?? ""}px, ${p(f).y ?? ""}px)`)), B(m, $);
    };
    Ve(C, (m) => {
      o() === "nodes" && p(f) && ur(p(f).x) && ur(p(f).y) && m(E);
    });
  }
  B(e, x), _e(), r();
}
he(gf, {}, [], [], !0);
function Dt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function a(i) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: i.altKey,
      ctrl: i.ctrlKey,
      shift: i.shiftKey,
      meta: i.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (C) => typeof C == "string" ? [C] : C
        ).some(
          (C) => C.every((E) => l[E])
        ))
          continue;
        if (i.key === f) {
          y && i.preventDefault();
          const C = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: C })), v == null || v(C);
        }
      }
    }
  }
  return n && e.addEventListener(o, a), {
    update: (i) => {
      const { enabled: s = !0, type: l = "keydown" } = i;
      n && (!s || o !== l) ? e.removeEventListener(o, a) : !n && s && e.addEventListener(l, a), n = s, o = l, r = i.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, a);
    }
  };
}
function hf(e, t) {
  $e(t, !1);
  let n = b(t, "selectionKey", 12, "Shift"), r = b(t, "multiSelectionKey", 28, () => ma() ? "Meta" : "Control"), o = b(t, "deleteKey", 12, "Backspace"), a = b(t, "panActivationKey", 12, " "), i = b(t, "zoomActivationKey", 28, () => ma() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = dt();
  function v(m) {
    return m !== null && typeof m == "object";
  }
  function y(m) {
    return v(m) ? m.modifier || [] : [];
  }
  function x(m) {
    return m == null ? "" : v(m) ? m.key : m;
  }
  function C(m, $) {
    return (Array.isArray(m) ? m : [m]).map((g) => {
      const _ = x(g);
      return {
        key: _,
        modifier: y(g),
        enabled: _ !== null,
        callback: $
      };
    });
  }
  function E() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ge(), xt("blur", dn, E), xt("contextmenu", dn, E), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(n(), () => s.set(!0)),
    type: "keydown"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(n(), () => s.set(!1)),
    type: "keyup"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(r(), () => l.set(!0)),
    type: "keydown"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(r(), () => l.set(!1)),
    type: "keyup"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !am(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(o(), () => u.set(!1)),
    type: "keyup"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(a(), () => c.set(!0)),
    type: "keydown"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(a(), () => c.set(!1)),
    type: "keyup"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(i(), () => d.set(!0)),
    type: "keydown"
  })), qt(dn, (m, $) => Dt == null ? void 0 : Dt(m, $), () => ({
    trigger: C(i(), () => d.set(!1)),
    type: "keyup"
  })), _e({
    get selectionKey() {
      return n();
    },
    set selectionKey(m) {
      n(m), w();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(m) {
      r(m), w();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(m) {
      o(m), w();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(m) {
      a(m), w();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(m) {
      i(m), w();
    }
  });
}
he(
  hf,
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
var Sy = /* @__PURE__ */ Re('<path fill="none" class="svelte-flow__connection-path"></path>'), Py = /* @__PURE__ */ Re('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function mf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(v, "$connection", n), a = () => se(y, "$connectionLineType", n), i = () => se(d, "$width", n), s = () => se(f, "$height", n);
  let l = b(t, "containerStyle", 12, ""), u = b(t, "style", 12, ""), c = b(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = dt();
  let x = fe(null);
  xe(
    () => (o(), ie(c()), a(), p(x), As),
    () => {
      if (o().inProgress && !c()) {
        const { from: g, to: _, fromPosition: T, toPosition: O } = o(), N = {
          sourceX: g.x,
          sourceY: g.y,
          sourcePosition: T,
          targetX: _.x,
          targetY: _.y,
          targetPosition: O
        };
        switch (a()) {
          case vo.Bezier:
            ((V) => oe(x, V[0]))(Rd(N));
            break;
          case vo.Step:
            ((V) => oe(x, V[0]))(ya({ ...N, borderRadius: 0 }));
            break;
          case vo.SmoothStep:
            ((V) => oe(x, V[0]))(ya(N));
            break;
          default:
            ((V) => oe(x, V[0]))(As(N));
        }
      }
    }
  ), Yt(), Ge();
  var C = Ct(), E = Ne(C);
  {
    var m = (g) => {
      var _ = Py(), T = ee(_), O = ee(T);
      Ut(O, t, "connectionLine", {});
      var N = X(O);
      {
        var V = (H) => {
          var Z = Sy();
          He(() => {
            be(Z, "d", p(x)), be(Z, "style", u());
          }), B(H, Z);
        };
        Ve(N, (H) => {
          c() || H(V);
        });
      }
      G(T), G(_), He(
        (H) => {
          be(_, "width", i()), be(_, "height", s()), be(_, "style", l()), an(T, 0, Qn(H));
        },
        [
          () => un([
            "svelte-flow__connection",
            G0(o().isValid)
          ])
        ],
        Pe
      ), B(g, _);
    };
    Ve(E, (g) => {
      o().inProgress && g(m);
    });
  }
  B(e, C);
  var $ = _e({
    get containerStyle() {
      return l();
    },
    set containerStyle(g) {
      l(g), w();
    },
    get style() {
      return u();
    },
    set style(g) {
      u(g), w();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(g) {
      c(g), w();
    }
  });
  return r(), $;
}
he(
  mf,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Oy = /* @__PURE__ */ ve("<div><!></div>");
function _i(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Pt(n, ["position", "style", "class"]);
  $e(t, !1);
  const [o, a] = kt(), i = () => se(d, "$selectionRectMode", o), s = fe();
  let l = b(t, "position", 12, "top-right"), u = b(t, "style", 12, void 0), c = b(t, "class", 12, void 0);
  const { selectionRectMode: d } = dt();
  xe(() => ie(l()), () => {
    oe(s, `${l()}`.split("-"));
  }), Yt(), Ge();
  var f = Oy();
  let v;
  var y = ee(f);
  Ut(y, t, "default", {}), G(f), He(
    (C) => {
      v = zn(f, v, {
        class: C,
        style: u(),
        ...r
      }), Nt(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => un([
        "svelte-flow__panel",
        c(),
        ...p(s)
      ])
    ],
    Pe
  ), B(e, f);
  var x = _e({
    get position() {
      return l();
    },
    set position(C) {
      l(C), w();
    },
    get style() {
      return u();
    },
    set style(C) {
      u(C), w();
    },
    get class() {
      return c();
    },
    set class(C) {
      c(C), w();
    }
  });
  return a(), x;
}
he(_i, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Ty = /* @__PURE__ */ ve('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function yf(e, t) {
  $e(t, !1);
  let n = b(t, "proOptions", 12, void 0), r = b(t, "position", 12, "bottom-right");
  Ge();
  var o = Ct(), a = Ne(o);
  {
    var i = (s) => {
      _i(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Ty();
          B(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ve(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return B(e, o), _e({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), w();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), w();
    }
  });
}
he(yf, { proOptions: {}, position: {} }, [], [], !0);
function Uu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const My = (e) => Object.keys(e);
function Gu(e, t) {
  My(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Ny() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Ry(e = "light") {
  return kn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Ny(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Vy = /* @__PURE__ */ ve('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Dy = /* @__PURE__ */ ve("<!> <!>", 1), Ay = /* @__PURE__ */ ve("<div><!> <!> <!> <!></div>");
const zy = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function wf(e, t) {
  const n = ng(t), r = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = Pt(r, [
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
  $e(t, !1), mt(e, zy);
  const [a, i] = kt(), s = () => se($(), "$viewport", a), l = () => se(Bn, "$initialized", a), u = () => se(p(c), "$colorModeClass", a), c = fe();
  let d = b(t, "id", 12, "1"), f = b(t, "nodes", 12), v = b(t, "edges", 12), y = b(t, "fitView", 12, void 0), x = b(t, "fitViewOptions", 12, void 0), C = b(t, "minZoom", 12, void 0), E = b(t, "maxZoom", 12, void 0), m = b(t, "initialViewport", 12, void 0), $ = b(t, "viewport", 12, void 0), g = b(t, "nodeTypes", 12, void 0), _ = b(t, "edgeTypes", 12, void 0), T = b(t, "selectionKey", 12, void 0), O = b(t, "selectionMode", 12, void 0), N = b(t, "panActivationKey", 12, void 0), V = b(t, "multiSelectionKey", 12, void 0), H = b(t, "zoomActivationKey", 12, void 0), Z = b(t, "nodesDraggable", 12, void 0), L = b(t, "nodesConnectable", 12, void 0), F = b(t, "nodeDragThreshold", 12, void 0), P = b(t, "elementsSelectable", 12, void 0), M = b(t, "snapGrid", 12, void 0), S = b(t, "deleteKey", 12, void 0), k = b(t, "connectionRadius", 12, void 0), z = b(t, "connectionLineType", 12, void 0), j = b(t, "connectionMode", 28, () => Xr.Strict), K = b(t, "connectionLineStyle", 12, ""), R = b(t, "connectionLineContainerStyle", 12, ""), I = b(t, "onMoveStart", 12, void 0), ne = b(t, "onMove", 12, void 0), Q = b(t, "onMoveEnd", 12, void 0), W = b(t, "isValidConnection", 12, void 0), ae = b(t, "translateExtent", 12, void 0), pe = b(t, "nodeExtent", 12, void 0), de = b(t, "onlyRenderVisibleElements", 12, void 0), le = b(t, "panOnScrollMode", 28, () => Mr.Free), Te = b(t, "preventScrolling", 12, !0), ge = b(t, "zoomOnScroll", 12, !0), Oe = b(t, "zoomOnDoubleClick", 12, !0), Je = b(t, "zoomOnPinch", 12, !0), Qe = b(t, "panOnScroll", 12, !1), Xe = b(t, "panOnDrag", 12, !0), U = b(t, "selectionOnDrag", 12, void 0), me = b(t, "autoPanOnConnect", 12, !0), Ce = b(t, "autoPanOnNodeDrag", 12, !0), We = b(t, "onerror", 12, void 0), Ae = b(t, "ondelete", 12, void 0), nt = b(t, "onedgecreate", 12, void 0), Ze = b(t, "attributionPosition", 12, void 0), rt = b(t, "proOptions", 12, void 0), pt = b(t, "defaultEdgeOptions", 12, void 0), Ot = b(t, "width", 12, void 0), ue = b(t, "height", 12, void 0), et = b(t, "colorMode", 12, "light"), we = b(t, "onconnect", 12, void 0), Qt = b(t, "onconnectstart", 12, void 0), Wt = b(t, "onconnectend", 12, void 0), Kt = b(t, "onbeforedelete", 12, void 0), ze = b(t, "oninit", 12, void 0), gt = b(t, "nodeOrigin", 12, void 0), Ee = b(t, "paneClickDistance", 12, 0), st = b(t, "nodeClickDistance", 12, 0), yt = b(t, "defaultMarkerColor", 12, "#b1b1b7"), Ft = b(t, "style", 12, void 0), Tn = b(t, "class", 12, void 0), At = fe(), Tt = fe(), jt = fe();
  const zt = s() || m(), $t = Ap(Wa) ? dt() : ay({
    nodes: te(f()),
    edges: te(v()),
    width: Ot(),
    height: ue(),
    fitView: y(),
    nodeOrigin: gt(),
    nodeExtent: pe()
  });
  er(() => ($t.width.set(p(Tt)), $t.height.set(p(jt)), $t.domNode.set(p(At)), $t.syncNodeStores(f()), $t.syncEdgeStores(v()), $t.syncViewport($()), y() !== void 0 && $t.fitViewOnInit.set(y()), x() && $t.fitViewOptions.set(x()), Uu($t, {
    nodeTypes: g(),
    edgeTypes: _(),
    minZoom: C(),
    maxZoom: E(),
    translateExtent: ae(),
    paneClickDistance: Ee()
  }), () => {
    $t.reset();
  }));
  const { initialized: Bn } = $t;
  let Cn = fe(!1);
  xe(
    () => (p(Tt), p(jt)),
    () => {
      p(Tt) !== void 0 && p(jt) !== void 0 && ($t.width.set(p(Tt)), $t.height.set(p(jt)));
    }
  ), xe(
    () => (p(Cn), l(), ie(ze())),
    () => {
      var Y;
      !p(Cn) && l() && ((Y = ze()) == null || Y(), oe(Cn, !0));
    }
  ), xe(
    () => (ie(d()), ie(z()), ie(k()), ie(O()), ie(M()), ie(yt()), ie(Z()), ie(L()), ie(P()), ie(de()), ie(W()), ie(me()), ie(Ce()), ie(We()), ie(Ae()), ie(nt()), ie(j()), ie(F()), ie(we()), ie(Qt()), ie(Wt()), ie(Kt()), ie(gt()), Gu),
    () => {
      const Y = {
        flowId: d(),
        connectionLineType: z(),
        connectionRadius: k(),
        selectionMode: O(),
        snapGrid: M(),
        defaultMarkerColor: yt(),
        nodesDraggable: Z(),
        nodesConnectable: L(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: de(),
        isValidConnection: W(),
        autoPanOnConnect: me(),
        autoPanOnNodeDrag: Ce(),
        onerror: We(),
        ondelete: Ae(),
        onedgecreate: nt(),
        connectionMode: j(),
        nodeDragThreshold: F(),
        onconnect: we(),
        onconnectstart: Qt(),
        onconnectend: Wt(),
        onbeforedelete: Kt(),
        nodeOrigin: gt()
      };
      Gu($t, Y);
    }
  ), xe(
    () => (ie(g()), ie(_()), ie(C()), ie(E()), ie(ae()), ie(Ee())),
    () => {
      Uu($t, {
        nodeTypes: g(),
        edgeTypes: _(),
        minZoom: C(),
        maxZoom: E(),
        translateExtent: ae(),
        paneClickDistance: Ee()
      });
    }
  ), xe(
    () => ie(et()),
    () => {
      dg(oe(c, Ry(et())), "$colorModeClass", a);
    }
  ), Yt(), Ge();
  var en = Ay();
  let rr;
  var or = ee(en);
  hf(or, {
    get selectionKey() {
      return T();
    },
    get deleteKey() {
      return S();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var xr = X(or, 2);
  const ir = /* @__PURE__ */ Pe(() => le() === void 0 ? Mr.Free : le()), $r = /* @__PURE__ */ Pe(() => Te() === void 0 ? !0 : Te()), Hr = /* @__PURE__ */ Pe(() => ge() === void 0 ? !0 : ge()), Vo = /* @__PURE__ */ Pe(() => Oe() === void 0 ? !0 : Oe()), Do = /* @__PURE__ */ Pe(() => Je() === void 0 ? !0 : Je()), Ao = /* @__PURE__ */ Pe(() => Qe() === void 0 ? !1 : Qe()), zo = /* @__PURE__ */ Pe(() => Xe() === void 0 ? !0 : Xe()), A = /* @__PURE__ */ Pe(() => Ee() === void 0 ? 0 : Ee());
  rf(xr, {
    initialViewport: zt,
    get onMoveStart() {
      return I();
    },
    get onMove() {
      return ne();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return p(ir);
    },
    get preventScrolling() {
      return p($r);
    },
    get zoomOnScroll() {
      return p(Hr);
    },
    get zoomOnDoubleClick() {
      return p(Vo);
    },
    get zoomOnPinch() {
      return p(Do);
    },
    get panOnScroll() {
      return p(Ao);
    },
    get panOnDrag() {
      return p(zo);
    },
    get paneClickDistance() {
      return p(A);
    },
    children: (Y, ut) => {
      const qe = /* @__PURE__ */ Pe(() => Xe() === void 0 ? !0 : Xe());
      of(Y, {
        get panOnDrag() {
          return p(qe);
        },
        get selectionOnDrag() {
          return U();
        },
        $$events: {
          paneclick(Be) {
            it.call(this, t, Be);
          },
          panecontextmenu(Be) {
            it.call(this, t, Be);
          }
        },
        children: (Be, Ht) => {
          var wt = Dy(), _t = Ne(wt);
          af(_t, {
            children: (jn, Zn) => {
              var Lt = Vy(), _r = Ne(Lt);
              vf(_r, {
                get defaultEdgeOptions() {
                  return pt();
                },
                $$events: {
                  edgeclick(Ke) {
                    it.call(this, t, Ke);
                  },
                  edgecontextmenu(Ke) {
                    it.call(this, t, Ke);
                  },
                  edgemouseenter(Ke) {
                    it.call(this, t, Ke);
                  },
                  edgemouseleave(Ke) {
                    it.call(this, t, Ke);
                  }
                }
              });
              var to = X(_r, 2);
              mf(to, {
                get containerStyle() {
                  return R();
                },
                get style() {
                  return K();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ke, Ja) => {
                    var Lo = Ct(), Pi = Ne(Lo);
                    Ut(Pi, t, "connectionLine", {}), B(Ke, Lo);
                  }
                }
              });
              var no = X(to, 6);
              lf(no, {
                get nodeClickDistance() {
                  return st();
                },
                $$events: {
                  nodeclick(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodemouseenter(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodemousemove(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodemouseleave(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodecontextmenu(Ke) {
                    it.call(this, t, Ke);
                  }
                }
              });
              var Ga = X(no, 2);
              gf(Ga, {
                $$events: {
                  selectionclick(Ke) {
                    it.call(this, t, Ke);
                  },
                  selectioncontextmenu(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    it.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    it.call(this, t, Ke);
                  }
                }
              }), B(jn, Lt);
            },
            $$slots: { default: !0 }
          });
          var Xt = X(_t, 2);
          pf(Xt, {}), B(Be, wt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var re = X(xr, 2);
  yf(re, {
    get proOptions() {
      return rt();
    },
    get position() {
      return Ze();
    }
  });
  var ye = X(re, 2);
  Ut(ye, t, "default", {}), G(en), gr(en, (Y) => oe(At, Y), () => p(At)), He(
    (Y) => rr = zn(
      en,
      rr,
      {
        style: Ft(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => un([
        "svelte-flow",
        Tn(),
        u()
      ])
    ],
    Pe
  ), uu(en, "clientWidth", (Y) => oe(Tt, Y)), uu(en, "clientHeight", (Y) => oe(jt, Y)), xt("dragover", en, function(Y) {
    it.call(this, t, Y);
  }), xt("drop", en, function(Y) {
    it.call(this, t, Y);
  }), B(e, en);
  var ke = _e({
    get id() {
      return d();
    },
    set id(Y) {
      d(Y), w();
    },
    get nodes() {
      return f();
    },
    set nodes(Y) {
      f(Y), w();
    },
    get edges() {
      return v();
    },
    set edges(Y) {
      v(Y), w();
    },
    get fitView() {
      return y();
    },
    set fitView(Y) {
      y(Y), w();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Y) {
      x(Y), w();
    },
    get minZoom() {
      return C();
    },
    set minZoom(Y) {
      C(Y), w();
    },
    get maxZoom() {
      return E();
    },
    set maxZoom(Y) {
      E(Y), w();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Y) {
      m(Y), w();
    },
    get viewport() {
      return $();
    },
    set viewport(Y) {
      $(Y), w();
    },
    get nodeTypes() {
      return g();
    },
    set nodeTypes(Y) {
      g(Y), w();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(Y) {
      _(Y), w();
    },
    get selectionKey() {
      return T();
    },
    set selectionKey(Y) {
      T(Y), w();
    },
    get selectionMode() {
      return O();
    },
    set selectionMode(Y) {
      O(Y), w();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(Y) {
      N(Y), w();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(Y) {
      V(Y), w();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(Y) {
      H(Y), w();
    },
    get nodesDraggable() {
      return Z();
    },
    set nodesDraggable(Y) {
      Z(Y), w();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Y) {
      L(Y), w();
    },
    get nodeDragThreshold() {
      return F();
    },
    set nodeDragThreshold(Y) {
      F(Y), w();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(Y) {
      P(Y), w();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(Y) {
      M(Y), w();
    },
    get deleteKey() {
      return S();
    },
    set deleteKey(Y) {
      S(Y), w();
    },
    get connectionRadius() {
      return k();
    },
    set connectionRadius(Y) {
      k(Y), w();
    },
    get connectionLineType() {
      return z();
    },
    set connectionLineType(Y) {
      z(Y), w();
    },
    get connectionMode() {
      return j();
    },
    set connectionMode(Y) {
      j(Y), w();
    },
    get connectionLineStyle() {
      return K();
    },
    set connectionLineStyle(Y) {
      K(Y), w();
    },
    get connectionLineContainerStyle() {
      return R();
    },
    set connectionLineContainerStyle(Y) {
      R(Y), w();
    },
    get onMoveStart() {
      return I();
    },
    set onMoveStart(Y) {
      I(Y), w();
    },
    get onMove() {
      return ne();
    },
    set onMove(Y) {
      ne(Y), w();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(Y) {
      Q(Y), w();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Y) {
      W(Y), w();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(Y) {
      ae(Y), w();
    },
    get nodeExtent() {
      return pe();
    },
    set nodeExtent(Y) {
      pe(Y), w();
    },
    get onlyRenderVisibleElements() {
      return de();
    },
    set onlyRenderVisibleElements(Y) {
      de(Y), w();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(Y) {
      le(Y), w();
    },
    get preventScrolling() {
      return Te();
    },
    set preventScrolling(Y) {
      Te(Y), w();
    },
    get zoomOnScroll() {
      return ge();
    },
    set zoomOnScroll(Y) {
      ge(Y), w();
    },
    get zoomOnDoubleClick() {
      return Oe();
    },
    set zoomOnDoubleClick(Y) {
      Oe(Y), w();
    },
    get zoomOnPinch() {
      return Je();
    },
    set zoomOnPinch(Y) {
      Je(Y), w();
    },
    get panOnScroll() {
      return Qe();
    },
    set panOnScroll(Y) {
      Qe(Y), w();
    },
    get panOnDrag() {
      return Xe();
    },
    set panOnDrag(Y) {
      Xe(Y), w();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(Y) {
      U(Y), w();
    },
    get autoPanOnConnect() {
      return me();
    },
    set autoPanOnConnect(Y) {
      me(Y), w();
    },
    get autoPanOnNodeDrag() {
      return Ce();
    },
    set autoPanOnNodeDrag(Y) {
      Ce(Y), w();
    },
    get onerror() {
      return We();
    },
    set onerror(Y) {
      We(Y), w();
    },
    get ondelete() {
      return Ae();
    },
    set ondelete(Y) {
      Ae(Y), w();
    },
    get onedgecreate() {
      return nt();
    },
    set onedgecreate(Y) {
      nt(Y), w();
    },
    get attributionPosition() {
      return Ze();
    },
    set attributionPosition(Y) {
      Ze(Y), w();
    },
    get proOptions() {
      return rt();
    },
    set proOptions(Y) {
      rt(Y), w();
    },
    get defaultEdgeOptions() {
      return pt();
    },
    set defaultEdgeOptions(Y) {
      pt(Y), w();
    },
    get width() {
      return Ot();
    },
    set width(Y) {
      Ot(Y), w();
    },
    get height() {
      return ue();
    },
    set height(Y) {
      ue(Y), w();
    },
    get colorMode() {
      return et();
    },
    set colorMode(Y) {
      et(Y), w();
    },
    get onconnect() {
      return we();
    },
    set onconnect(Y) {
      we(Y), w();
    },
    get onconnectstart() {
      return Qt();
    },
    set onconnectstart(Y) {
      Qt(Y), w();
    },
    get onconnectend() {
      return Wt();
    },
    set onconnectend(Y) {
      Wt(Y), w();
    },
    get onbeforedelete() {
      return Kt();
    },
    set onbeforedelete(Y) {
      Kt(Y), w();
    },
    get oninit() {
      return ze();
    },
    set oninit(Y) {
      ze(Y), w();
    },
    get nodeOrigin() {
      return gt();
    },
    set nodeOrigin(Y) {
      gt(Y), w();
    },
    get paneClickDistance() {
      return Ee();
    },
    set paneClickDistance(Y) {
      Ee(Y), w();
    },
    get nodeClickDistance() {
      return st();
    },
    set nodeClickDistance(Y) {
      st(Y), w();
    },
    get defaultMarkerColor() {
      return yt();
    },
    set defaultMarkerColor(Y) {
      yt(Y), w();
    },
    get style() {
      return Ft();
    },
    set style(Y) {
      Ft(Y), w();
    },
    get class() {
      return Tn();
    },
    set class(Y) {
      Tn(Y), w();
    }
  });
  return i(), ke;
}
he(
  wf,
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
function bf(e, t) {
  $e(t, !1);
  let n = b(t, "initialNodes", 12, void 0), r = b(t, "initialEdges", 12, void 0), o = b(t, "initialWidth", 12, void 0), a = b(t, "initialHeight", 12, void 0), i = b(t, "fitView", 12, void 0), s = b(t, "nodeOrigin", 12, void 0);
  const l = nf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  yo(Wa, { getStore: () => l }), il(() => {
    l.reset();
  }), Ge();
  var u = Ct(), c = Ne(u);
  return Ut(c, t, "default", {}), B(e, u), _e({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), w();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), w();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), w();
    },
    get initialHeight() {
      return a();
    },
    set initialHeight(d) {
      a(d), w();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), w();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), w();
    }
  });
}
he(
  bf,
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
var Ly = /* @__PURE__ */ ve("<button><!></button>");
function Uo(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Pt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  $e(t, !1);
  let o = b(t, "class", 12, void 0), a = b(t, "bgColor", 12, void 0), i = b(t, "bgColorHover", 12, void 0), s = b(t, "color", 12, void 0), l = b(t, "colorHover", 12, void 0), u = b(t, "borderColor", 12, void 0);
  Ge();
  var c = Ly();
  let d;
  var f = ee(c);
  return Ut(f, t, "default", { class: "button-svg" }), G(c), He(
    (v) => {
      d = zn(c, d, { type: "button", class: v, ...r }), Nt(c, "--xy-controls-button-background-color-props", a()), Nt(c, "--xy-controls-button-background-color-hover-props", i()), Nt(c, "--xy-controls-button-color-props", s()), Nt(c, "--xy-controls-button-color-hover-props", l()), Nt(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => un([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    Pe
  ), xt("click", c, function(v) {
    it.call(this, t, v);
  }), B(e, c), _e({
    get class() {
      return o();
    },
    set class(v) {
      o(v), w();
    },
    get bgColor() {
      return a();
    },
    set bgColor(v) {
      a(v), w();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(v) {
      i(v), w();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), w();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), w();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), w();
    }
  });
}
he(
  Uo,
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
var Hy = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function xf(e) {
  var t = Hy();
  B(e, t);
}
he(xf, {}, [], [], !0);
var Iy = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function $f(e) {
  var t = Iy();
  B(e, t);
}
he($f, {}, [], [], !0);
var By = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function _f(e) {
  var t = By();
  B(e, t);
}
he(_f, {}, [], [], !0);
var jy = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Cf(e) {
  var t = jy();
  B(e, t);
}
he(Cf, {}, [], [], !0);
var Zy = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function kf(e) {
  var t = Zy();
  B(e, t);
}
he(kf, {}, [], [], !0);
var Yy = /* @__PURE__ */ ve("<!> <!>", 1), Wy = /* @__PURE__ */ ve("<!> <!> <!> <!> <!> <!>", 1);
function Ef(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(z, "$nodesDraggable", n), a = () => se(j, "$nodesConnectable", n), i = () => se(K, "$elementsSelectable", n), s = () => se(M, "$viewport", n), l = () => se(S, "$minZoom", n), u = () => se(k, "$maxZoom", n), c = fe(), d = fe(), f = fe(), v = fe();
  let y = b(t, "position", 12, "bottom-left"), x = b(t, "showZoom", 12, !0), C = b(t, "showFitView", 12, !0), E = b(t, "showLock", 12, !0), m = b(t, "buttonBgColor", 12, void 0), $ = b(t, "buttonBgColorHover", 12, void 0), g = b(t, "buttonColor", 12, void 0), _ = b(t, "buttonColorHover", 12, void 0), T = b(t, "buttonBorderColor", 12, void 0), O = b(t, "ariaLabel", 12, void 0), N = b(t, "style", 12, void 0), V = b(t, "orientation", 12, "vertical"), H = b(t, "fitViewOptions", 12, void 0), Z = b(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: F,
    fitView: P,
    viewport: M,
    minZoom: S,
    maxZoom: k,
    nodesDraggable: z,
    nodesConnectable: j,
    elementsSelectable: K
  } = dt(), R = {
    bgColor: m(),
    bgColorHover: $(),
    color: g(),
    colorHover: _(),
    borderColor: T()
  }, I = () => {
    L();
  }, ne = () => {
    F();
  }, Q = () => {
    P(H());
  }, W = () => {
    oe(c, !p(c)), z.set(p(c)), j.set(p(c)), K.set(p(c));
  };
  xe(
    () => (o(), a(), i()),
    () => {
      oe(c, o() || a() || i());
    }
  ), xe(() => (s(), l()), () => {
    oe(d, s().zoom <= l());
  }), xe(() => (s(), u()), () => {
    oe(f, s().zoom >= u());
  }), xe(() => ie(V()), () => {
    oe(v, V() === "horizontal" ? "horizontal" : "vertical");
  }), Yt(), Ge();
  const ae = /* @__PURE__ */ Pe(() => un([
    "svelte-flow__controls",
    p(v),
    Z()
  ])), pe = /* @__PURE__ */ Pe(() => O() ?? "Svelte Flow controls");
  _i(e, {
    get class() {
      return p(ae);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return p(pe);
    },
    get style() {
      return N();
    },
    children: (le, Te) => {
      var ge = Wy(), Oe = Ne(ge);
      Ut(Oe, t, "before", {});
      var Je = X(Oe, 2);
      {
        var Qe = (nt) => {
          var Ze = Yy(), rt = Ne(Ze);
          Uo(rt, It(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return p(f);
              }
            },
            R,
            {
              $$events: { click: I },
              children: (Ot, ue) => {
                xf(Ot);
              },
              $$slots: { default: !0 }
            }
          ));
          var pt = X(rt, 2);
          Uo(pt, It(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return p(d);
              }
            },
            R,
            {
              $$events: { click: ne },
              children: (Ot, ue) => {
                $f(Ot);
              },
              $$slots: { default: !0 }
            }
          )), B(nt, Ze);
        };
        Ve(Je, (nt) => {
          x() && nt(Qe);
        });
      }
      var Xe = X(Je, 2);
      {
        var U = (nt) => {
          Uo(nt, It(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            R,
            {
              $$events: { click: Q },
              children: (Ze, rt) => {
                _f(Ze);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ve(Xe, (nt) => {
          C() && nt(U);
        });
      }
      var me = X(Xe, 2);
      {
        var Ce = (nt) => {
          Uo(nt, It(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            R,
            {
              $$events: { click: W },
              children: (Ze, rt) => {
                var pt = Ct(), Ot = Ne(pt);
                {
                  var ue = (we) => {
                    kf(we);
                  }, et = (we) => {
                    Cf(we);
                  };
                  Ve(Ot, (we) => {
                    p(c) ? we(ue) : we(et, !1);
                  });
                }
                B(Ze, pt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ve(me, (nt) => {
          E() && nt(Ce);
        });
      }
      var We = X(me, 2);
      Ut(We, t, "default", {});
      var Ae = X(We, 2);
      Ut(Ae, t, "after", {}), B(le, ge);
    },
    $$slots: { default: !0 }
  });
  var de = _e({
    get position() {
      return y();
    },
    set position(le) {
      y(le), w();
    },
    get showZoom() {
      return x();
    },
    set showZoom(le) {
      x(le), w();
    },
    get showFitView() {
      return C();
    },
    set showFitView(le) {
      C(le), w();
    },
    get showLock() {
      return E();
    },
    set showLock(le) {
      E(le), w();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(le) {
      m(le), w();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(le) {
      $(le), w();
    },
    get buttonColor() {
      return g();
    },
    set buttonColor(le) {
      g(le), w();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(le) {
      _(le), w();
    },
    get buttonBorderColor() {
      return T();
    },
    set buttonBorderColor(le) {
      T(le), w();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(le) {
      O(le), w();
    },
    get style() {
      return N();
    },
    set style(le) {
      N(le), w();
    },
    get orientation() {
      return V();
    },
    set orientation(le) {
      V(le), w();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(le) {
      H(le), w();
    },
    get class() {
      return Z();
    },
    set class(le) {
      Z(le), w();
    }
  });
  return r(), de;
}
he(
  Ef,
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
var Nr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Nr || (Nr = {}));
var Ky = /* @__PURE__ */ Re("<circle></circle>");
function Sf(e, t) {
  $e(t, !1);
  let n = b(t, "radius", 12, 5), r = b(t, "class", 12, "");
  Ge();
  var o = Ky();
  return He(
    (a) => {
      be(o, "cx", n()), be(o, "cy", n()), be(o, "r", n()), an(o, 0, Qn(a));
    },
    [
      () => un([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    Pe
  ), B(e, o), _e({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), w();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), w();
    }
  });
}
he(Sf, { radius: {}, class: {} }, [], [], !0);
var Fy = /* @__PURE__ */ Re("<path></path>");
function Pf(e, t) {
  $e(t, !1);
  let n = b(t, "lineWidth", 12, 1), r = b(t, "dimensions", 12), o = b(t, "variant", 12, void 0), a = b(t, "class", 12, "");
  Ge();
  var i = Fy();
  return He(
    (s) => {
      be(i, "stroke-width", n()), be(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), an(i, 0, Qn(s));
    },
    [
      () => un([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    Pe
  ), B(e, i), _e({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), w();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), w();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), w();
    },
    get class() {
      return a();
    },
    set class(s) {
      a(s), w();
    }
  });
}
he(
  Pf,
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
const Xy = {
  [Nr.Dots]: 1,
  [Nr.Lines]: 1,
  [Nr.Cross]: 6
};
var qy = /* @__PURE__ */ Re('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Uy = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Of(e, t) {
  $e(t, !1), mt(e, Uy);
  const [n, r] = kt(), o = () => se(_, "$flowId", n), a = () => se(g, "$viewport", n), i = fe(), s = fe(), l = fe(), u = fe(), c = fe();
  let d = b(t, "id", 12, void 0), f = b(t, "variant", 28, () => Nr.Dots), v = b(t, "gap", 12, 20), y = b(t, "size", 12, 1), x = b(t, "lineWidth", 12, 1), C = b(t, "bgColor", 12, void 0), E = b(t, "patternColor", 12, void 0), m = b(t, "patternClass", 12, void 0), $ = b(t, "class", 12, "");
  const { viewport: g, flowId: _ } = dt(), T = y() || Xy[f()], O = f() === Nr.Dots, N = f() === Nr.Cross, V = Array.isArray(v()) ? v() : [v(), v()];
  xe(
    () => (o(), ie(d())),
    () => {
      oe(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), xe(() => a(), () => {
    oe(s, [
      V[0] * a().zoom || 1,
      V[1] * a().zoom || 1
    ]);
  }), xe(() => a(), () => {
    oe(l, T * a().zoom);
  }), xe(() => (p(l), p(s)), () => {
    oe(u, N ? [p(l), p(l)] : p(s));
  }), xe(
    () => (p(l), p(u)),
    () => {
      oe(c, O ? [
        p(l) / 2,
        p(l) / 2
      ] : [
        p(u)[0] / 2,
        p(u)[1] / 2
      ]);
    }
  ), Yt(), Ge();
  var H = qy(), Z = ee(H), L = ee(Z);
  {
    var F = (k) => {
      const z = /* @__PURE__ */ Pe(() => p(l) / 2);
      Sf(k, {
        get radius() {
          return p(z);
        },
        get class() {
          return m();
        }
      });
    }, P = (k) => {
      Pf(k, {
        get dimensions() {
          return p(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return m();
        }
      });
    };
    Ve(L, (k) => {
      O ? k(F) : k(P, !1);
    });
  }
  G(Z);
  var M = X(Z);
  G(H), He(
    (k) => {
      an(H, 0, Qn(k), "svelte-1r7pe8d"), Nt(H, "--xy-background-color-props", C()), Nt(H, "--xy-background-pattern-color-props", E()), be(Z, "id", p(i)), be(Z, "x", a().x % p(s)[0]), be(Z, "y", a().y % p(s)[1]), be(Z, "width", p(s)[0]), be(Z, "height", p(s)[1]), be(Z, "patternTransform", `translate(-${p(c)[0]},-${p(c)[1]})`), be(M, "fill", `url(#${p(i)})`);
    },
    [
      () => un(["svelte-flow__background", $()])
    ],
    Pe
  ), B(e, H);
  var S = _e({
    get id() {
      return d();
    },
    set id(k) {
      d(k), w();
    },
    get variant() {
      return f();
    },
    set variant(k) {
      f(k), w();
    },
    get gap() {
      return v();
    },
    set gap(k) {
      v(k), w();
    },
    get size() {
      return y();
    },
    set size(k) {
      y(k), w();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(k) {
      x(k), w();
    },
    get bgColor() {
      return C();
    },
    set bgColor(k) {
      C(k), w();
    },
    get patternColor() {
      return E();
    },
    set patternColor(k) {
      E(k), w();
    },
    get patternClass() {
      return m();
    },
    set patternClass(k) {
      m(k), w();
    },
    get class() {
      return $();
    },
    set class(k) {
      $(k), w();
    }
  });
  return r(), S;
}
he(
  Of,
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
var Gy = /* @__PURE__ */ Re("<rect></rect>");
function Tf(e, t) {
  $e(t, !1);
  let n = b(t, "x", 12), r = b(t, "y", 12), o = b(t, "width", 12, 0), a = b(t, "height", 12, 0), i = b(t, "borderRadius", 12, 5), s = b(t, "color", 12, void 0), l = b(t, "shapeRendering", 12), u = b(t, "strokeColor", 12, void 0), c = b(t, "strokeWidth", 12, 2), d = b(t, "selected", 12, !1), f = b(t, "class", 12, "");
  Ge();
  var v = Gy();
  let y;
  return He(
    (x) => {
      y = an(v, 0, Qn(x), null, y, { selected: d() }), be(v, "x", n()), be(v, "y", r()), be(v, "rx", i()), be(v, "ry", i()), be(v, "width", o()), be(v, "height", a()), be(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), be(v, "shape-rendering", l());
    },
    [
      () => un(["svelte-flow__minimap-node", f()])
    ],
    Pe
  ), B(e, v), _e({
    get x() {
      return n();
    },
    set x(x) {
      n(x), w();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), w();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), w();
    },
    get height() {
      return a();
    },
    set height(x) {
      a(x), w();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(x) {
      i(x), w();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), w();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), w();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), w();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), w();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), w();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), w();
    }
  });
}
he(
  Tf,
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
function Ju(e, t) {
  const n = Dm({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = te(t.viewport);
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
const gs = (e) => e instanceof Function ? e : () => e;
var Jy = /* @__PURE__ */ Re("<title> </title>"), Qy = /* @__PURE__ */ Re('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Mf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se(Xe, "$flowId", n), a = () => se(Oe, "$viewport", n), i = () => se(Je, "$containerWidth", n), s = () => se(Qe, "$containerHeight", n), l = () => se(ge, "$nodeLookup", n), u = () => se(Te, "$nodes", n), c = () => se(U, "$panZoom", n), d = () => se(me, "$translateExtent", n), f = fe(), v = fe(), y = fe(), x = fe(), C = fe(), E = fe(), m = fe(), $ = fe(), g = fe(), _ = fe(), T = fe(), O = fe(), N = fe();
  let V = b(t, "position", 12, "bottom-right"), H = b(t, "ariaLabel", 12, "Mini map"), Z = b(t, "nodeStrokeColor", 12, "transparent"), L = b(t, "nodeColor", 12, void 0), F = b(t, "nodeClass", 12, ""), P = b(t, "nodeBorderRadius", 12, 5), M = b(t, "nodeStrokeWidth", 12, 2), S = b(t, "bgColor", 12, void 0), k = b(t, "maskColor", 12, void 0), z = b(t, "maskStrokeColor", 12, void 0), j = b(t, "maskStrokeWidth", 12, void 0), K = b(t, "width", 12, void 0), R = b(t, "height", 12, void 0), I = b(t, "pannable", 12, !0), ne = b(t, "zoomable", 12, !0), Q = b(t, "inversePan", 12, void 0), W = b(t, "zoomStep", 12, void 0), ae = b(t, "style", 12, ""), pe = b(t, "class", 12, "");
  const de = 200, le = 150, {
    nodes: Te,
    nodeLookup: ge,
    viewport: Oe,
    width: Je,
    height: Qe,
    flowId: Xe,
    panZoom: U,
    translateExtent: me
  } = dt(), Ce = L() === void 0 ? void 0 : gs(L()), We = gs(Z()), Ae = gs(F()), nt = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ze = `svelte-flow__minimap-desc-${o()}`;
  let rt = fe(p(f));
  const pt = () => p(E);
  xe(
    () => (a(), i(), s()),
    () => {
      oe(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), xe(
    () => (l(), p(f), u()),
    () => {
      oe(rt, l().size > 0 ? Od(bi(l()), p(f)) : p(f)), u();
    }
  ), xe(() => ie(K()), () => {
    oe(v, K() ?? de);
  }), xe(() => ie(R()), () => {
    oe(y, R() ?? le);
  }), xe(
    () => (p(rt), p(v)),
    () => {
      oe(x, p(rt).width / p(v));
    }
  ), xe(
    () => (p(rt), p(y)),
    () => {
      oe(C, p(rt).height / p(y));
    }
  ), xe(
    () => (p(x), p(C)),
    () => {
      oe(E, Math.max(p(x), p(C)));
    }
  ), xe(() => (p(E), p(v)), () => {
    oe(m, p(E) * p(v));
  }), xe(
    () => (p(E), p(y)),
    () => {
      oe($, p(E) * p(y));
    }
  ), xe(() => p(E), () => {
    oe(g, 5 * p(E));
  }), xe(
    () => (p(rt), p(m), p(g)),
    () => {
      oe(_, p(rt).x - (p(m) - p(rt).width) / 2 - p(g));
    }
  ), xe(
    () => (p(rt), p($), p(g)),
    () => {
      oe(T, p(rt).y - (p($) - p(rt).height) / 2 - p(g));
    }
  ), xe(() => (p(m), p(g)), () => {
    oe(O, p(m) + p(g) * 2);
  }), xe(() => (p($), p(g)), () => {
    oe(N, p($) + p(g) * 2);
  }), Yt(), Ge();
  const Ot = /* @__PURE__ */ Pe(() => ae() + (S() ? `;--xy-minimap-background-color-props:${S()}` : "")), ue = /* @__PURE__ */ Pe(() => un(["svelte-flow__minimap", pe()]));
  _i(e, {
    get position() {
      return V();
    },
    get style() {
      return p(Ot);
    },
    get class() {
      return p(ue);
    },
    "data-testid": "svelte-flow__minimap",
    children: (we, Qt) => {
      var Wt = Ct(), Kt = Ne(Wt);
      {
        var ze = (gt) => {
          var Ee = Qy();
          be(Ee, "aria-labelledby", Ze);
          var st = ee(Ee);
          {
            var yt = (At) => {
              var Tt = Jy();
              be(Tt, "id", Ze);
              var jt = ee(Tt, !0);
              G(Tt), He(() => Jn(jt, H())), B(At, Tt);
            };
            Ve(st, (At) => {
              H() && At(yt);
            });
          }
          var Ft = X(st);
          xn(Ft, 1, u, (At) => At.id, (At, Tt) => {
            var jt = Ct();
            const zt = /* @__PURE__ */ Pe(() => l().get(p(Tt).id));
            var $t = Ne(jt);
            {
              var Bn = (Cn) => {
                const en = /* @__PURE__ */ Pe(() => zr(p(zt))), rr = /* @__PURE__ */ Pe(() => Ce == null ? void 0 : Ce(p(zt))), or = /* @__PURE__ */ Pe(() => We(p(zt))), xr = /* @__PURE__ */ Pe(() => Ae(p(zt)));
                Tf(Cn, It(
                  {
                    get x() {
                      return p(zt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return p(zt).internals.positionAbsolute.y;
                    }
                  },
                  () => p(en),
                  {
                    get selected() {
                      return p(zt).selected;
                    },
                    get color() {
                      return p(rr);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return p(or);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: nt,
                    get class() {
                      return p(xr);
                    }
                  }
                ));
              };
              Ve($t, (Cn) => {
                p(zt) && Md(p(zt)) && Cn(Bn);
              });
            }
            B(At, jt);
          });
          var Tn = X(Ft);
          G(Ee), qt(Ee, (At, Tt) => Ju == null ? void 0 : Ju(At, Tt), () => ({
            panZoom: c(),
            viewport: Oe,
            getViewScale: pt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: I(),
            zoomable: ne()
          })), He(() => {
            be(Ee, "width", p(v)), be(Ee, "height", p(y)), be(Ee, "viewBox", `${p(_) ?? ""} ${p(T) ?? ""} ${p(O) ?? ""} ${p(N) ?? ""}`), Nt(Ee, "--xy-minimap-mask-background-color-props", k()), Nt(Ee, "--xy-minimap-mask-stroke-color-props", z()), Nt(Ee, "--xy-minimap-mask-stroke-width-props", j() ? j() * p(E) : void 0), be(Tn, "d", `M${p(_) - p(g)},${p(T) - p(g)}h${p(O) + p(g) * 2}v${p(N) + p(g) * 2}h${-p(O) - p(g) * 2}z
      M${p(f).x ?? ""},${p(f).y ?? ""}h${p(f).width ?? ""}v${p(f).height ?? ""}h${-p(f).width}z`);
          }), B(gt, Ee);
        };
        Ve(Kt, (gt) => {
          c() && gt(ze);
        });
      }
      B(we, Wt);
    },
    $$slots: { default: !0 }
  });
  var et = _e({
    get position() {
      return V();
    },
    set position(we) {
      V(we), w();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(we) {
      H(we), w();
    },
    get nodeStrokeColor() {
      return Z();
    },
    set nodeStrokeColor(we) {
      Z(we), w();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(we) {
      L(we), w();
    },
    get nodeClass() {
      return F();
    },
    set nodeClass(we) {
      F(we), w();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(we) {
      P(we), w();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(we) {
      M(we), w();
    },
    get bgColor() {
      return S();
    },
    set bgColor(we) {
      S(we), w();
    },
    get maskColor() {
      return k();
    },
    set maskColor(we) {
      k(we), w();
    },
    get maskStrokeColor() {
      return z();
    },
    set maskStrokeColor(we) {
      z(we), w();
    },
    get maskStrokeWidth() {
      return j();
    },
    set maskStrokeWidth(we) {
      j(we), w();
    },
    get width() {
      return K();
    },
    set width(we) {
      K(we), w();
    },
    get height() {
      return R();
    },
    set height(we) {
      R(we), w();
    },
    get pannable() {
      return I();
    },
    set pannable(we) {
      I(we), w();
    },
    get zoomable() {
      return ne();
    },
    set zoomable(we) {
      ne(we), w();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(we) {
      Q(we), w();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(we) {
      W(we), w();
    },
    get style() {
      return ae();
    },
    set style(we) {
      ae(we), w();
    },
    get class() {
      return pe();
    },
    set class(we) {
      pe(we), w();
    }
  });
  return r(), et;
}
he(
  Mf,
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
const Qu = (e) => Q0(e);
function _n() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: x, edgeLookup: C, connectionLookup: E } = dt(), m = (_) => {
    var T, O;
    const N = te(y), V = Qu(_) ? _ : N.get(_.id), H = V.parentId ? rm(V.position, V.measured, V.parentId, N, te(x)) : V.position, Z = {
      ...V,
      position: H,
      width: ((T = V.measured) == null ? void 0 : T.width) ?? V.width,
      height: ((O = V.measured) == null ? void 0 : O.height) ?? V.height
    };
    return _o(Z);
  }, $ = (_, T, O = { replace: !1 }) => {
    var N;
    const V = (N = te(y).get(_)) == null ? void 0 : N.internals.userNode;
    if (!V)
      return;
    const H = typeof T == "function" ? T(V) : T;
    O.replace ? d.update((Z) => Z.map((L) => L.id === _ ? Qu(H) ? H : { ...L, ...H } : L)) : (Object.assign(V, H), d.update((Z) => Z));
  }, g = (_) => te(y).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: g,
    getNode: (_) => {
      var T;
      return (T = g(_)) == null ? void 0 : T.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? te(d) : ec(te(y), _),
    getEdge: (_) => te(C).get(_),
    getEdges: (_) => _ === void 0 ? te(f) : ec(te(C), _),
    setZoom: (_, T) => {
      const O = te(c);
      return O ? O.scaleTo(_, { duration: T == null ? void 0 : T.duration }) : Promise.resolve(!1);
    },
    getZoom: () => te(a).zoom,
    setViewport: async (_, T) => {
      const O = te(a), N = te(c);
      return N ? (await N.setViewport({
        x: _.x ?? O.x,
        y: _.y ?? O.y,
        zoom: _.zoom ?? O.zoom
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => te(a),
    setCenter: async (_, T, O) => {
      const N = typeof (O == null ? void 0 : O.zoom) < "u" ? O.zoom : te(u), V = te(c);
      return V ? (await V.setViewport({
        x: te(i) / 2 - _ * N,
        y: te(s) / 2 - T * N,
        zoom: N
      }, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, T) => {
      const O = te(c);
      if (!O)
        return Promise.resolve(!1);
      const N = gl(_, te(i), te(s), te(l), te(u), (T == null ? void 0 : T.padding) ?? 0.1);
      return await O.setViewport(N, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, T = !0, O) => {
      const N = Du(_), V = N ? _ : m(_);
      return V ? (O || te(d)).filter((H) => {
        const Z = te(y).get(H.id);
        if (!Z || !N && H.id === _.id)
          return !1;
        const L = _o(Z), F = ci(L, V);
        return T && F > 0 || F >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (_, T, O = !0) => {
      const N = Du(_) ? _ : m(_);
      if (!N)
        return !1;
      const V = ci(N, T);
      return O && V > 0 || V >= N.width * N.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: T = [] }) => {
      const { nodes: O, edges: N } = await Ed({
        nodesToRemove: _,
        edgesToRemove: T,
        nodes: te(d),
        edges: te(f),
        onBeforeDelete: te(r)
      });
      return O && d.update((V) => V.filter((H) => !O.some(({ id: Z }) => Z === H.id))), N && f.update((V) => V.filter((H) => !N.some(({ id: Z }) => Z === H.id))), {
        deletedNodes: O,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (_, T = { snapToGrid: !0 }) => {
      const O = te(v);
      if (!O)
        return _;
      const N = T.snapToGrid ? te(o) : !1, { x: V, y: H, zoom: Z } = te(a), { x: L, y: F } = O.getBoundingClientRect(), P = {
        x: _.x - L,
        y: _.y - F
      };
      return xi(P, [V, H, Z], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const T = te(v);
      if (!T)
        return _;
      const { x: O, y: N, zoom: V } = te(a), { x: H, y: Z } = T.getBoundingClientRect(), L = Td(_, [O, N, V]);
      return {
        x: L.x + H,
        y: L.y + Z
      };
    },
    toObject: () => ({
      nodes: te(d).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: te(f).map((_) => ({ ..._ })),
      viewport: { ...te(a) }
    }),
    updateNode: $,
    updateNodeData: (_, T, O) => {
      var N;
      const V = (N = te(y).get(_)) == null ? void 0 : N.internals.userNode;
      if (!V)
        return;
      const H = typeof T == "function" ? T(V) : T;
      V.data = O != null && O.replace ? H : { ...V.data, ...H }, d.update((Z) => Z);
    },
    getNodesBounds: (_) => {
      const T = te(y), O = te(x);
      return em(_, { nodeLookup: T, nodeOrigin: O });
    },
    getHandleConnections: ({ type: _, id: T, nodeId: O }) => {
      var N;
      return Array.from(((N = te(E).get(`${O}-${_}-${T ?? null}`)) == null ? void 0 : N.values()) ?? []);
    },
    viewport: a
  };
}
function ec(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const a = e.get(o);
    if (a) {
      const i = "internals" in a ? (n = a.internals) == null ? void 0 : n.userNode : a;
      r.push(i);
    }
  }
  return r;
}
var e2 = /* @__PURE__ */ ve('<div class="svelte-flow__node-toolbar"><!></div>');
function Nf(e, t) {
  $e(t, !1);
  const [n, r] = kt(), o = () => se($, "$nodes", n), a = () => se(m, "$nodeLookup", n), i = () => se(E, "$viewport", n), s = () => se(C, "$domNode", n), l = fe(), u = fe(), c = fe();
  let d = b(t, "nodeId", 12, void 0), f = b(t, "position", 12, void 0), v = b(t, "align", 12, void 0), y = b(t, "offset", 12, void 0), x = b(t, "isVisible", 12, void 0);
  const { domNode: C, viewport: E, nodeLookup: m, nodes: $ } = dt(), { getNodesBounds: g } = _n(), _ = Wr("svelteflow__node_id");
  let T = fe(), O = fe([]), N = y() !== void 0 ? y() : 10, V = f() !== void 0 ? f() : Le.Top, H = v() !== void 0 ? v() : "center";
  xe(
    () => (o(), ie(d()), a()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || _];
      oe(O, M.reduce(
        (S, k) => {
          const z = a().get(k);
          return z && S.push(z), S;
        },
        []
      ));
    }
  ), xe(
    () => (p(O), i()),
    () => {
      const M = g(p(O));
      M && oe(T, ym(M, i(), V, N, H));
    }
  ), xe(() => p(O), () => {
    oe(l, p(O).length === 0 ? 1 : Math.max(...p(O).map((M) => (M.internals.z || 5) + 1)));
  }), xe(() => o(), () => {
    oe(u, o().filter((M) => M.selected).length);
  }), xe(
    () => (ie(x()), p(O), p(u)),
    () => {
      oe(c, typeof x() == "boolean" ? x() : p(O).length === 1 && p(O)[0].selected && p(u) === 1);
    }
  ), Yt(), Ge();
  var Z = Ct(), L = Ne(Z);
  {
    var F = (M) => {
      var S = e2(), k = ee(S);
      Ut(k, t, "default", {}), G(S), qt(S, (z, j) => ba == null ? void 0 : ba(z, j), () => ({ domNode: s() })), He(
        (z) => {
          be(S, "data-id", z), Nt(S, "position", "absolute"), Nt(S, "transform", p(T)), Nt(S, "z-index", p(l));
        },
        [
          () => p(O).reduce((z, j) => `${z}${j.id} `, "").trim()
        ],
        Pe
      ), B(M, S);
    };
    Ve(L, (M) => {
      s() && p(c) && p(O) && M(F);
    });
  }
  B(e, Z);
  var P = _e({
    get nodeId() {
      return d();
    },
    set nodeId(M) {
      d(M), w();
    },
    get position() {
      return f();
    },
    set position(M) {
      f(M), w();
    },
    get align() {
      return v();
    },
    set align(M) {
      v(M), w();
    },
    get offset() {
      return y();
    },
    set offset(M) {
      y(M), w();
    },
    get isVisible() {
      return x();
    },
    set isVisible(M) {
      x(M), w();
    }
  });
  return r(), P;
}
he(
  Nf,
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
function eo(e) {
  const { nodes: t, nodeLookup: n } = dt();
  let r = [], o = !0;
  return Tr([t, n], ([, a], i) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = a.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!Em(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const tc = "tinyflow-component";
class t2 {
  constructor(t) {
    if (fn(this, "options"), fn(this, "rootEl"), fn(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(tc);
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
    const n = document.createElement(tc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const n2 = () => {
  const e = Me([]), t = Me([]), n = Me({ x: 250, y: 100, zoom: 1 });
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
      e.update((o) => o.filter((a) => a.id !== r));
    },
    updateNode: (r, o) => {
      e.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateNodeData: (r, o) => {
      e.update(
        (a) => a.map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (a) => a.id === r ? { ...a, selected: !0 } : { ...a, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((a) => a.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateEdgeData: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? { ...i, data: o } : i));
    }
  };
}, Ji = n2();
var r2 = /* @__PURE__ */ ve("<button><!></button>");
function ft(e, t) {
  $e(t, !0);
  const n = b(t, "children", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = r2();
  let a;
  var i = ee(o);
  return Kr(i, () => n() ?? Bt), G(o), He(() => a = zn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), B(e, o), _e({
    get children() {
      return n();
    },
    set children(s) {
      n(s), w();
    }
  });
}
he(ft, { children: {} }, [], [], !0);
var o2 = /* @__PURE__ */ ve("<input>");
function Rf(e, t) {
  $e(t, !0);
  const n = /* @__PURE__ */ ln(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = o2();
  Wc(r);
  let o;
  He(() => o = zn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), B(e, r), _e();
}
he(Rf, {}, [], [], !0);
var i2 = /* @__PURE__ */ ve("<input>");
function nn(e, t) {
  $e(t, !0);
  const n = /* @__PURE__ */ ln(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = i2();
  Wc(r);
  let o;
  He(() => o = zn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), B(e, r), _e();
}
he(nn, {}, [], [], !0);
var a2 = /* @__PURE__ */ ve("<textarea></textarea>");
function sn(e, t) {
  $e(t, !0);
  const n = /* @__PURE__ */ ln(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = a2();
  Xp(r);
  let o;
  He(() => o = zn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), B(e, r), _e();
}
he(sn, {}, [], [], !0);
var s2 = /* @__PURE__ */ ve('<div role="button"><!></div>'), l2 = /* @__PURE__ */ ve("<div></div>");
function Vf(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Pt(n, ["items", "onChange", "activeIndex"]);
  $e(t, !1);
  let o = b(t, "items", 28, () => []), a = b(t, "onChange", 12, () => {
  }), i = b(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Ge();
  var l = l2();
  let u;
  return xn(l, 5, o, Da, (c, d, f) => {
    var v = s2();
    be(v, "tabindex", f), v.__click = () => s(p(d), f), v.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), s(p(d), f));
    };
    var y = ee(v);
    {
      var x = (E) => {
        var m = at();
        He(() => Jn(m, p(d).label)), B(E, m);
      }, C = (E) => {
        var m = Ct(), $ = Ne(m);
        Kr($, () => p(d).label ?? Bt), B(E, m);
      };
      Ve(y, (E) => {
        typeof p(d).label == "string" ? E(x) : E(C, !1);
      });
    }
    G(v), He(() => an(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), B(c, v);
  }), G(l), He(() => u = zn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), B(e, l), _e({
    get items() {
      return o();
    },
    set items(c) {
      o(c), w();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), w();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), w();
    }
  });
}
Va(["click", "keydown"]);
he(Vf, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var u2 = (e, t, n) => t(p(n)), c2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(p(n)));
}, d2 = /* @__PURE__ */ ve('<span class="tf-collapse-item-title-icon"><!></span>'), f2 = /* @__PURE__ */ ve('<div class="tf-collapse-item-description"><!></div>'), v2 = /* @__PURE__ */ ve('<div class="tf-collapse-item-content"><!></div>'), p2 = /* @__PURE__ */ ve('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), g2 = /* @__PURE__ */ ve("<div></div>");
const h2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Df(e, t) {
  $e(t, !0), mt(e, h2);
  let n = b(t, "items", 7), r = b(t, "onChange", 7), o = b(t, "activeKeys", 31, () => mn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = g2();
  return xn(i, 21, n, Da, (s, l, u) => {
    var c = p2(), d = ee(c);
    be(d, "tabindex", u), d.__click = [u2, a, l], d.__keydown = [c2, a, l];
    var f = ee(d);
    {
      var v = (g) => {
        var _ = d2(), T = ee(_);
        Pr(T, {
          get target() {
            return p(l).icon;
          }
        }), G(_), B(g, _);
      };
      Ve(f, (g) => {
        p(l).icon && g(v);
      });
    }
    var y = X(f, 2);
    Pr(y, {
      get target() {
        return p(l).title;
      }
    });
    var x = X(y, 2);
    G(d);
    var C = X(d, 2);
    {
      var E = (g) => {
        var _ = f2(), T = ee(_);
        Pr(T, {
          get target() {
            return p(l).description;
          }
        }), G(_), B(g, _);
      };
      Ve(C, (g) => {
        p(l).description && g(E);
      });
    }
    var m = X(C, 2);
    {
      var $ = (g) => {
        var _ = v2(), T = ee(_);
        Pr(T, {
          get target() {
            return p(l).content;
          }
        }), G(_), B(g, _);
      };
      Ve(m, (g) => {
        o().includes(p(l).key) && g($);
      });
    }
    G(c), He((g) => an(x, 1, `tf-collapse-item-title-arrow ${g ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(p(l).key) ? "rotate-90" : ""
    ]), B(s, c);
  }), G(i), He(() => {
    be(i, "style", t.style), an(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), B(e, i), _e({
    get items() {
      return n();
    },
    set items(s) {
      n(s), w();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), w();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), w();
    }
  });
}
Va(["click", "keydown"]);
he(Df, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Pr(e, t) {
  $e(t, !0);
  let n = b(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ct(), o = Ne(r);
  {
    var a = (s) => {
      var l = Ct(), u = Ne(l);
      Kr(u, () => n() ?? Bt), B(s, l);
    }, i = (s) => {
      var l = Ct(), u = Ne(l);
      jc(u, n), B(s, l);
    };
    Ve(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return B(e, r), _e({
    get target() {
      return n();
    },
    set target(s) {
      n(s), w();
    }
  });
}
he(Pr, { target: {} }, [], [], !0);
var m2 = (e, t, n) => t(p(n)), y2 = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), w2 = /* @__PURE__ */ ve('<div class="tf-select-content-children"><!></div>'), b2 = /* @__PURE__ */ ve('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), x2 = /* @__PURE__ */ ve('<div class="tf-select-content nopan nodrag"><!></div>'), $2 = /* @__PURE__ */ ve("<!> <!>", 1), _2 = /* @__PURE__ */ ve('<div class="tf-select-input-placeholder"> </div>'), C2 = /* @__PURE__ */ ve('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), k2 = /* @__PURE__ */ ve("<div><!></div>");
function qn(e, t) {
  $e(t, !0);
  const n = ($, g = Bt) => {
    var _ = Ct(), T = Ne(_);
    xn(T, 19, g, (O, N) => `${N}_${O.value}`, (O, N) => {
      var V = b2(), H = Ne(V);
      H.__click = [m2, x, N];
      var Z = ee(H), L = ee(Z);
      {
        var F = (k) => {
          var z = y2();
          B(k, z);
        };
        Ve(L, (k) => {
          p(N).children && p(N).children.length > 0 && k(F);
        });
      }
      G(Z);
      var P = X(Z, 2);
      Pr(P, {
        get target() {
          return p(N).label;
        }
      }), G(H);
      var M = X(H, 2);
      {
        var S = (k) => {
          var z = w2(), j = ee(z);
          n(j, () => p(N).children), G(z), B(k, z);
        };
        Ve(M, (k) => {
          p(N).children && p(N).children.length > 0 && (l() || c().includes(p(N).value)) && k(S);
        });
      }
      B(O, V);
    }), B($, _);
  };
  let r = b(t, "items", 7), o = b(t, "onExpand", 7), a = b(t, "onSelect", 7), i = b(t, "value", 23, () => []), s = b(t, "defaultValue", 23, () => []), l = b(t, "expandAll", 7, !0), u = b(t, "multiple", 7, !1), c = b(t, "expandValue", 23, () => []), d = b(t, "placeholder", 7), f = /* @__PURE__ */ ln(t, [
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
  ]), v = /* @__PURE__ */ Fe(() => {
    const $ = [], g = (_) => {
      for (let T of _)
        i().length > 0 ? i().includes(T.value) && $.push(T) : s().includes(T.value) && $.push(T), T.children && T.children.length > 0 && g(T.children);
    };
    return g(r()), $;
  }), y;
  function x($) {
    var g, _;
    if ($.children && $.children.length > 0) {
      (g = o()) == null || g($);
      return;
    } else
      y == null || y.hide(), (_ = a()) == null || _($);
  }
  var C = k2();
  let E;
  var m = ee(C);
  return gr(
    Si(m, {
      floating: ($) => {
        var g = x2(), _ = ee(g);
        n(_, r), G(g), B($, g);
      },
      children: ($, g) => {
        var _ = C2();
        let T;
        var O = ee(_);
        xn(
          O,
          23,
          () => p(v),
          (N, V) => `${V}_${N.value}`,
          (N, V, H) => {
            var Z = Ct(), L = Ne(Z);
            {
              var F = (M) => {
                var S = Ct(), k = Ne(S);
                {
                  var z = (j) => {
                    Pr(j, {
                      get target() {
                        return p(V).label;
                      }
                    });
                  };
                  Ve(k, (j) => {
                    p(H) === 0 && j(z);
                  });
                }
                B(M, S);
              }, P = (M) => {
                var S = $2(), k = Ne(S);
                Pr(k, {
                  get target() {
                    return p(V).label;
                  }
                });
                var z = X(k, 2);
                {
                  var j = (K) => {
                    var R = at(",");
                    B(K, R);
                  };
                  Ve(z, (K) => {
                    p(H) < p(v).length - 1 && K(j);
                  });
                }
                B(M, S);
              };
              Ve(L, (M) => {
                u() ? M(P, !1) : M(F);
              });
            }
            B(N, Z);
          },
          (N) => {
            var V = _2(), H = ee(V, !0);
            G(V), He(() => Jn(H, d())), B(N, V);
          }
        ), G(O), Ye(2), G(_), He(() => T = zn(_, T, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), B($, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => y = $,
    () => y
  ), G(C), He(() => E = zn(C, E, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), B(e, C), _e({
    get items() {
      return r();
    },
    set items($) {
      r($), w();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), w();
    },
    get onSelect() {
      return a();
    },
    set onSelect($) {
      a($), w();
    },
    get value() {
      return i();
    },
    set value($ = []) {
      i($), w();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), w();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), w();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), w();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), w();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), w();
    }
  });
}
Va(["click"]);
he(
  qn,
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
const fi = Math.min, po = Math.max, _a = Math.round, Kn = (e) => ({
  x: e,
  y: e
}), E2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, S2 = {
  start: "end",
  end: "start"
};
function Ls(e, t, n) {
  return po(e, fi(t, n));
}
function Ci(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ur(e) {
  return e.split("-")[0];
}
function ki(e) {
  return e.split("-")[1];
}
function Af(e) {
  return e === "x" ? "y" : "x";
}
function xl(e) {
  return e === "y" ? "height" : "width";
}
function ko(e) {
  return ["top", "bottom"].includes(Ur(e)) ? "y" : "x";
}
function $l(e) {
  return Af(ko(e));
}
function P2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ki(e), o = $l(e), a = xl(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ca(i)), [i, Ca(i)];
}
function O2(e) {
  const t = Ca(e);
  return [Hs(e), t, Hs(t)];
}
function Hs(e) {
  return e.replace(/start|end/g, (t) => S2[t]);
}
function T2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function M2(e, t, n, r) {
  const o = ki(e);
  let a = T2(Ur(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Hs)))), a;
}
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, (t) => E2[t]);
}
function N2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zf(e) {
  return typeof e != "number" ? N2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ka(e) {
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
function nc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ko(t), i = $l(t), s = xl(i), l = Ur(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (ki(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const R2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = nc(u, r, l), f = r, v = {}, y = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: C,
      fn: E
    } = s[x], {
      x: m,
      y: $,
      data: g,
      reset: _
    } = await E({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, d = $ ?? d, v = {
      ...v,
      [C]: {
        ...v[C],
        ...g
      }
    }, _ && y <= 50 && (y++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: c,
      y: d
    } = nc(u, f, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Lf(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = Ci(t, e), y = zf(v), x = s[f ? d === "floating" ? "reference" : "floating" : d], C = ka(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), E = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, m = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), $ = await (a.isElement == null ? void 0 : a.isElement(m)) ? await (a.getScale == null ? void 0 : a.getScale(m)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = ka(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: E,
    offsetParent: m,
    strategy: l
  }) : E);
  return {
    top: (C.top - g.top + y.top) / $.y,
    bottom: (g.bottom - C.bottom + y.bottom) / $.y,
    left: (C.left - g.left + y.left) / $.x,
    right: (g.right - C.right + y.right) / $.x
  };
}
const V2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Ci(e, t) || {};
    if (u == null)
      return {};
    const d = zf(c), f = {
      x: n,
      y: r
    }, v = $l(o), y = xl(v), x = await i.getDimensions(u), C = v === "y", E = C ? "top" : "left", m = C ? "bottom" : "right", $ = C ? "clientHeight" : "clientWidth", g = a.reference[y] + a.reference[v] - f[v] - a.floating[y], _ = f[v] - a.reference[v], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let O = T ? T[$] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(T))) && (O = s.floating[$] || a.floating[y]);
    const N = g / 2 - _ / 2, V = O / 2 - x[y] / 2 - 1, H = fi(d[E], V), Z = fi(d[m], V), L = H, F = O - x[y] - Z, P = O / 2 - x[y] / 2 + N, M = Ls(L, P, F), S = !l.arrow && ki(o) != null && P !== M && a.reference[y] / 2 - (P < L ? H : Z) - x[y] / 2 < 0, k = S ? P < L ? P - L : P - F : 0;
    return {
      [v]: f[v] + k,
      data: {
        [v]: M,
        centerOffset: P - M - k,
        ...S && {
          alignmentOffset: k
        }
      },
      reset: S
    };
  }
}), D2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: x = !0,
        ...C
      } = Ci(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const E = Ur(o), m = ko(s), $ = Ur(s) === s, g = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || ($ || !x ? [Ca(s)] : O2(s)), T = y !== "none";
      !f && T && _.push(...M2(s, x, y, g));
      const O = [s, ..._], N = await Lf(t, C), V = [];
      let H = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(N[E]), d) {
        const P = P2(o, i, g);
        V.push(N[P[0]], N[P[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: V
      }], !V.every((P) => P <= 0)) {
        var Z, L;
        const P = (((Z = a.flip) == null ? void 0 : Z.index) || 0) + 1, M = O[P];
        if (M)
          return {
            data: {
              index: P,
              overflows: H
            },
            reset: {
              placement: M
            }
          };
        let S = (L = H.filter((k) => k.overflows[0] <= 0).sort((k, z) => k.overflows[1] - z.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!S)
          switch (v) {
            case "bestFit": {
              var F;
              const k = (F = H.filter((z) => {
                if (T) {
                  const j = ko(z.placement);
                  return j === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((j) => j > 0).reduce((j, K) => j + K, 0)]).sort((z, j) => z[1] - j[1])[0]) == null ? void 0 : F[0];
              k && (S = k);
              break;
            }
            case "initialPlacement":
              S = s;
              break;
          }
        if (o !== S)
          return {
            reset: {
              placement: S
            }
          };
      }
      return {};
    }
  };
};
async function A2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ur(n), s = ki(n), l = ko(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Ci(t, e);
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
const z2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await A2(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, L2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (C) => {
            let {
              x: E,
              y: m
            } = C;
            return {
              x: E,
              y: m
            };
          }
        },
        ...l
      } = Ci(e, t), u = {
        x: n,
        y: r
      }, c = await Lf(t, l), d = ko(Ur(o)), f = Af(d);
      let v = u[f], y = u[d];
      if (a) {
        const C = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", m = v + c[C], $ = v - c[E];
        v = Ls(m, v, $);
      }
      if (i) {
        const C = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", m = y + c[C], $ = y - c[E];
        y = Ls(m, y, $);
      }
      const x = s.fn({
        ...t,
        [f]: v,
        [d]: y
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
};
function Ka() {
  return typeof window < "u";
}
function Ro(e) {
  return Hf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wr(e) {
  var t;
  return (t = (Hf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hf(e) {
  return Ka() ? e instanceof Node || e instanceof bn(e).Node : !1;
}
function Ln(e) {
  return Ka() ? e instanceof Element || e instanceof bn(e).Element : !1;
}
function Un(e) {
  return Ka() ? e instanceof HTMLElement || e instanceof bn(e).HTMLElement : !1;
}
function rc(e) {
  return !Ka() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bn(e).ShadowRoot;
}
function Ei(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Hn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function H2(e) {
  return ["table", "td", "th"].includes(Ro(e));
}
function Fa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _l(e) {
  const t = Cl(), n = Ln(e) ? Hn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function I2(e) {
  let t = Ar(e);
  for (; Un(t) && !Eo(t); ) {
    if (_l(t))
      return t;
    if (Fa(t))
      return null;
    t = Ar(t);
  }
  return null;
}
function Cl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Eo(e) {
  return ["html", "body", "#document"].includes(Ro(e));
}
function Hn(e) {
  return bn(e).getComputedStyle(e);
}
function Xa(e) {
  return Ln(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ar(e) {
  if (Ro(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    rc(e) && e.host || // Fallback.
    wr(e)
  );
  return rc(t) ? t.host : t;
}
function If(e) {
  const t = Ar(e);
  return Eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Un(t) && Ei(t) ? t : If(t);
}
function Bf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = If(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bn(o);
  return a ? (Is(i), t.concat(i, i.visualViewport || [], Ei(o) ? o : [], [])) : t.concat(o, Bf(o, []));
}
function Is(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jf(e) {
  const t = Hn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Un(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = _a(n) !== a || _a(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Zf(e) {
  return Ln(e) ? e : e.contextElement;
}
function go(e) {
  const t = Zf(e);
  if (!Un(t))
    return Kn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = jf(t);
  let i = (a ? _a(n.width) : n.width) / r, s = (a ? _a(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const B2 = /* @__PURE__ */ Kn(0);
function Yf(e) {
  const t = bn(e);
  return !Cl() || !t.visualViewport ? B2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function j2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bn(e) ? !1 : t;
}
function vi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Zf(e);
  let i = Kn(1);
  t && (r ? Ln(r) && (i = go(r)) : i = go(e));
  const s = j2(a, n, r) ? Yf(a) : Kn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = bn(a), v = r && Ln(r) ? bn(r) : r;
    let y = f, x = Is(y);
    for (; x && r && v !== y; ) {
      const C = go(x), E = x.getBoundingClientRect(), m = Hn(x), $ = E.left + (x.clientLeft + parseFloat(m.paddingLeft)) * C.x, g = E.top + (x.clientTop + parseFloat(m.paddingTop)) * C.y;
      l *= C.x, u *= C.y, c *= C.x, d *= C.y, l += $, u += g, y = bn(x), x = Is(y);
    }
  }
  return ka({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function kl(e, t) {
  const n = Xa(e).scrollLeft;
  return t ? t.left + n : vi(wr(e)).left + n;
}
function Wf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kl(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Z2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = wr(r), s = t ? Fa(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Kn(1);
  const c = Kn(0), d = Un(r);
  if ((d || !d && !a) && ((Ro(r) !== "body" || Ei(i)) && (l = Xa(r)), Un(r))) {
    const v = vi(r);
    u = go(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Wf(i, l, !0) : Kn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function Y2(e) {
  return Array.from(e.getClientRects());
}
function W2(e) {
  const t = wr(e), n = Xa(e), r = e.ownerDocument.body, o = po(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = po(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + kl(e);
  const s = -n.scrollTop;
  return Hn(r).direction === "rtl" && (i += po(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function K2(e, t) {
  const n = bn(e), r = wr(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Cl();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function F2(e, t) {
  const n = vi(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Un(e) ? go(e) : Kn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function oc(e, t, n) {
  let r;
  if (t === "viewport")
    r = K2(e, n);
  else if (t === "document")
    r = W2(wr(e));
  else if (Ln(t))
    r = F2(t, n);
  else {
    const o = Yf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ka(r);
}
function Kf(e, t) {
  const n = Ar(e);
  return n === t || !Ln(n) || Eo(n) ? !1 : Hn(n).position === "fixed" || Kf(n, t);
}
function X2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Bf(e, []).filter((s) => Ln(s) && Ro(s) !== "body"), o = null;
  const a = Hn(e).position === "fixed";
  let i = a ? Ar(e) : e;
  for (; Ln(i) && !Eo(i); ) {
    const s = Hn(i), l = _l(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Ei(i) && !l && Kf(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Ar(i);
  }
  return t.set(e, r), r;
}
function q2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Fa(t) ? [] : X2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = oc(t, u, o);
    return l.top = po(c.top, l.top), l.right = fi(c.right, l.right), l.bottom = fi(c.bottom, l.bottom), l.left = po(c.left, l.left), l;
  }, oc(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function U2(e) {
  const {
    width: t,
    height: n
  } = jf(e);
  return {
    width: t,
    height: n
  };
}
function G2(e, t, n) {
  const r = Un(t), o = wr(t), a = n === "fixed", i = vi(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Kn(0);
  if (r || !r && !a)
    if ((Ro(t) !== "body" || Ei(o)) && (s = Xa(t)), r) {
      const f = vi(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = kl(o));
  const u = o && !r && !a ? Wf(o, s) : Kn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function hs(e) {
  return Hn(e).position === "static";
}
function ic(e, t) {
  if (!Un(e) || Hn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return wr(e) === n && (n = n.ownerDocument.body), n;
}
function Ff(e, t) {
  const n = bn(e);
  if (Fa(e))
    return n;
  if (!Un(e)) {
    let o = Ar(e);
    for (; o && !Eo(o); ) {
      if (Ln(o) && !hs(o))
        return o;
      o = Ar(o);
    }
    return n;
  }
  let r = ic(e, t);
  for (; r && H2(r) && hs(r); )
    r = ic(r, t);
  return r && Eo(r) && hs(r) && !_l(r) ? n : r || I2(e) || n;
}
const J2 = async function(e) {
  const t = this.getOffsetParent || Ff, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: G2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Q2(e) {
  return Hn(e).direction === "rtl";
}
const ew = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Z2,
  getDocumentElement: wr,
  getClippingRect: q2,
  getOffsetParent: Ff,
  getElementRects: J2,
  getClientRects: Y2,
  getDimensions: U2,
  getScale: go,
  isElement: Ln,
  isRTL: Q2
}, tw = z2, nw = L2, rw = D2, ow = V2, iw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ew,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return R2(e, t, {
    ...o,
    platform: a
  });
}, aw = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: a,
  shiftOptions: i,
  interactive: s,
  showArrow: l
}) => {
  if (typeof e == "string") {
    const E = document.querySelector(e);
    if (E)
      e = E;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const E = document.querySelector(n);
    if (E)
      u = E;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    iw(e, u, {
      placement: r,
      middleware: [
        tw(o),
        // 手动偏移配置
        rw(a),
        //自动翻转
        nw(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ow({ element: c })] : []
      ]
    }).then(({ x: E, y: m, placement: $, middlewareData: g }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${m}px`
      }), l) {
        const { x: _, y: T } = g.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
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
  function x(E) {
    E.stopPropagation(), f ? y() : v();
  }
  function C(E) {
    u.contains(E.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, x);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, x);
      }), document.removeEventListener("click", C);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var sw = /* @__PURE__ */ ve('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Si(e, t) {
  $e(t, !0);
  const n = b(t, "children", 7), r = b(t, "floating", 7), o = b(t, "placement", 7, "bottom");
  let a, i, s;
  er(() => (s = aw({
    trigger: a,
    floatContent: i,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = sw(), c = ee(u), d = ee(c);
  Kr(d, n), G(c), gr(c, (y) => a = y, () => a);
  var f = X(c, 2), v = ee(f);
  return Kr(v, r), G(f), gr(f, (y) => i = y, () => i), G(u), B(e, u), _e({
    hide: l,
    get children() {
      return n();
    },
    set children(y) {
      n(y), w();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), w();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), w();
    }
  });
}
he(Si, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function bt(e, t) {
  $e(t, !0);
  const n = b(t, "children", 7), r = b(t, "level", 7, 1), o = b(t, "mt", 7), a = b(t, "mb", 7);
  var i = Ct(), s = Ne(i);
  return rg(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    He(() => c = zn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === dc,
      l.nodeName.includes("-")
    ));
    var d = Ct(), f = Ne(d);
    Kr(f, () => n() ?? Bt), B(u, d);
  }), B(e, i), _e({
    get children() {
      return n();
    },
    set children(l) {
      n(l), w();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), w();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), w();
    },
    get mb() {
      return a();
    },
    set mb(l) {
      a(l), w();
    }
  });
}
he(bt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var lw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const uw = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function qa(e, t) {
  $e(t, !0), mt(e, uw);
  const n = /* @__PURE__ */ ln(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  ft(e, It(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = lw();
      B(r, a);
    },
    $$slots: { default: !0 }
  })), _e();
}
he(qa, {}, [], [], !0);
const cw = () => {
  const e = dt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, So = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, dw = () => {
  const { nodes: e, nodeLookup: t } = dt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = te(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = So(), i = {
          ...o,
          id: a,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, i]), e.update(
          (s) => s.map(
            (l) => l.id === a ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var fw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), vw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), pw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), gw = /* @__PURE__ */ ve('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), hw = /* @__PURE__ */ ve('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const mw = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function nr(e, t) {
  $e(t, !0), mt(e, mw);
  const n = b(t, "data", 7), r = b(t, "id", 7, ""), o = b(t, "icon", 7), a = b(t, "handle", 7), i = b(t, "children", 7), s = b(t, "allowExecute", 7, !0), l = b(t, "allowCopy", 7, !0), u = b(t, "allowDelete", 7, !0), c = b(t, "showSourceHandle", 7, !0), d = b(t, "showTargetHandle", 7, !0);
  let f = n().expand ? ["key"] : [];
  const { updateNodeData: v } = _n(), y = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: x } = cw(), { copyNode: C } = dw();
  var E = hw(), m = Ne(E);
  {
    var $ = (L) => {
      Nf(L, {
        get position() {
          return Le.Top;
        },
        align: "end",
        children: (F, P) => {
          var M = gw(), S = ee(M);
          {
            var k = (I) => {
              ft(I, {
                class: "tf-node-toolbar-item",
                children: (ne, Q) => {
                  var W = fw();
                  B(ne, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ve(S, (I) => {
              s() && I(k);
            });
          }
          var z = X(S, 2);
          {
            var j = (I) => {
              ft(I, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ne, Q) => {
                  var W = vw();
                  B(ne, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ve(z, (I) => {
              l() && I(j);
            });
          }
          var K = X(z, 2);
          {
            var R = (I) => {
              ft(I, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ne, Q) => {
                  var W = pw();
                  B(ne, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ve(K, (I) => {
              u() && I(R);
            });
          }
          G(M), B(F, M);
        },
        $$slots: { default: !0 }
      });
    };
    Ve(m, (L) => {
      (s() || l() || u()) && L($);
    });
  }
  var g = X(m, 2), _ = X(ee(g), 2), T = ee(_);
  Df(T, {
    items: y,
    activeKeys: f,
    onChange: (L, F) => {
      v(r(), { expand: F == null ? void 0 : F.includes("key") });
    }
  }), G(_), G(g);
  var O = X(g, 2);
  {
    var N = (L) => {
      Dr(L, {
        type: "target",
        get position() {
          return Le.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ve(O, (L) => {
      d() && L(N);
    });
  }
  var V = X(O, 2);
  {
    var H = (L) => {
      Dr(L, {
        type: "source",
        get position() {
          return Le.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ve(V, (L) => {
      c() && L(H);
    });
  }
  var Z = X(V, 2);
  return Kr(Z, () => a() ?? Bt), B(e, E), _e({
    get data() {
      return n();
    },
    set data(L) {
      n(L), w();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), w();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), w();
    },
    get handle() {
      return a();
    },
    set handle(L) {
      a(L), w();
    },
    get children() {
      return i();
    },
    set children(L) {
      i(L), w();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(L = !0) {
      s(L), w();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), w();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(L = !0) {
      u(L), w();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(L = !0) {
      c(L), w();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(L = !0) {
      d(L), w();
    }
  });
}
he(
  nr,
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
    showTargetHandle: {}
  },
  [],
  [],
  !0
);
function Jt() {
  return Wr("svelteflow__node_id");
}
const Xf = [
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
], yw = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var ww = /* @__PURE__ */ ve('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), bw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), xw = /* @__PURE__ */ ve('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $w = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qf(e, t) {
  $e(t, !0), mt(e, $w);
  const [n, r] = kt(), o = () => se(p(l), "$node", n), a = b(t, "parameter", 7), i = b(t, "index", 7);
  let s = Jt(), l = /* @__PURE__ */ Fe(() => eo(s)), u = /* @__PURE__ */ Fe(() => {
    var N, V;
    return {
      ...a(),
      ...(V = (N = o()) == null ? void 0 : N.data) == null ? void 0 : V.parameters[i()]
    };
  });
  const { updateNodeData: c } = _n(), d = (N) => {
    const V = N.target.value;
    c(s, (H) => {
      let Z = H.data.parameters;
      return Z[i()].name = V, { parameters: Z };
    });
  }, f = (N) => {
    const V = N.target.checked;
    c(s, (H) => {
      let Z = H.data.parameters;
      return Z[i()].required = V, { parameters: Z };
    });
  }, v = (N) => {
    const V = N.value;
    V && c(s, (H) => {
      let Z = H.data.parameters;
      return Z[i()].dataType = V, { parameters: Z };
    });
  };
  let y;
  const x = () => {
    c(s, (N) => {
      let V = N.data.parameters;
      return V.splice(i(), 1), { parameters: [...V] };
    }), y == null || y.hide();
  };
  var C = xw(), E = Ne(C), m = ee(E);
  nn(m, {
    style: "width: 100%;",
    get value() {
      return p(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), G(E);
  var $ = X(E, 2), g = ee($);
  Rf(g, {
    get checked() {
      return p(u).required;
    },
    onchange: f
  }), G($);
  var _ = X($, 2), T = ee(_);
  gr(
    Si(T, {
      placement: "bottom",
      floating: (N) => {
        var V = ww(), H = ee(V), Z = X(ee(H));
        const L = /* @__PURE__ */ Fe(() => p(u).dataType ? [p(u).dataType] : ["String"]);
        qn(Z, {
          items: Xf,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return p(L);
          }
        }), G(H);
        var F = X(H, 2), P = X(ee(F));
        sn(P, { rows: 1, style: "width: 100%;" }), G(F);
        var M = X(F, 2), S = X(ee(M));
        sn(S, { rows: 3, style: "width: 100%;" }), G(M);
        var k = X(M, 2), z = ee(k);
        ft(z, {
          onclick: x,
          children: (j, K) => {
            Ye();
            var R = at("删除");
            B(j, R);
          },
          $$slots: { default: !0 }
        }), G(k), G(V), B(N, V);
      },
      children: (N, V) => {
        ft(N, {
          class: "input-btn-more",
          children: (H, Z) => {
            var L = bw();
            B(H, L);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => y = N,
    () => y
  ), G(_), B(e, C);
  var O = _e({
    get parameter() {
      return a();
    },
    set parameter(N) {
      a(N), w();
    },
    get index() {
      return i();
    },
    set index(N) {
      i(N), w();
    }
  });
  return r(), O;
}
he(qf, { parameter: {}, index: {} }, [], [], !0);
var _w = /* @__PURE__ */ ve('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Cw = /* @__PURE__ */ ve('<div class="none-params svelte-3n0wca">无输入参数</div>'), kw = /* @__PURE__ */ ve('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Ew = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Uf(e, t) {
  $e(t, !0), mt(e, Ew);
  const [n, r] = kt(), o = () => se(p(i), "$node", n);
  let a = Jt(), i = /* @__PURE__ */ Fe(() => eo(a)), s = /* @__PURE__ */ Fe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = kw(), u = ee(l);
  {
    var c = (f) => {
      var v = _w();
      Ye(4), B(f, v);
    };
    Ve(u, (f) => {
      p(s).length !== 0 && f(c);
    });
  }
  var d = X(u, 2);
  xn(
    d,
    19,
    () => p(s),
    (f) => f.id,
    (f, v, y) => {
      qf(f, {
        get parameter() {
          return p(v);
        },
        get index() {
          return p(y);
        }
      });
    },
    (f) => {
      var v = Cw();
      B(f, v);
    }
  ), G(l), B(e, l), _e(), r();
}
he(Uf, {}, [], [], !0);
const Gf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = So()), Gf(t.children);
  });
}, br = () => {
  const { updateNodeData: e } = _n();
  return {
    addParameter: (t, n = "parameters", r) => {
      Gf(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: So()
      };
      e(t, (a) => {
        let i = a.data[n];
        return i ? i.push(o) : i = [o], {
          [n]: [...i]
        };
      });
    }
  };
};
var Sw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Pw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ve('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Tw = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Jf(e, t) {
  $e(t, !0), mt(e, Tw);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br();
  return nr(e, It(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = Sw();
      B(i, s);
    },
    children: (i, s) => {
      var l = Ow(), u = Ne(l), c = ee(u);
      bt(c, {
        level: 3,
        children: (v, y) => {
          Ye();
          var x = at("输入参数");
          B(v, x);
        },
        $$slots: { default: !0 }
      });
      var d = X(c, 2);
      ft(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, y) => {
          var x = Pw();
          B(v, x);
        },
        $$slots: { default: !0 }
      }), G(u);
      var f = X(u, 2);
      Uf(f, {}), B(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), _e({
    get data() {
      return n();
    },
    set data(i) {
      n(i), w();
    }
  });
}
he(Jf, { data: {} }, [], [], !0);
const Qf = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Qf(e, r.source, n));
}, ac = (e, t) => {
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
        const r = (o, a) => !o || o.length === 0 ? [] : o.map((i) => ({
          label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
          // label: param.name ,
          value: a + "." + i.name,
          children: r(i.children, a + "." + i.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, Mw = (e = !1) => {
  const t = Jt(), n = eo(t), { nodes: r, edges: o } = dt();
  return Tr([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = ac(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Qf(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = ac(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Nw = /* @__PURE__ */ ve('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Rw = /* @__PURE__ */ ve('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Vw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ev(e, t) {
  $e(t, !0), mt(e, Vw);
  const [n, r] = kt(), o = () => se(p(c), "$node", n), a = () => se(g, "$selectItems", n), i = b(t, "parameter", 7), s = b(t, "index", 7), l = b(t, "dataKeyName", 7);
  let u = Jt(), c = /* @__PURE__ */ Fe(() => eo(u)), d = /* @__PURE__ */ Fe(() => {
    var M;
    return {
      ...i(),
      ...(M = o()) == null ? void 0 : M.data[l()][s()]
    };
  });
  const { updateNodeData: f } = _n(), v = (M, S) => {
    f(u, (k) => {
      let z = k.data[l()];
      return z[s()] = { ...z[s()], [M]: S }, { [l()]: z };
    });
  }, y = (M) => {
    const S = M.target.value;
    v("name", S);
  }, x = (M) => {
    const S = M.target.value;
    v("value", S);
  }, C = (M) => {
    const S = M.value;
    v("ref", S);
  }, E = (M) => {
    const S = M.value;
    v("refType", S);
  };
  let m;
  const $ = () => {
    f(u, (M) => {
      let S = M.data[l()];
      return S.splice(s(), 1), { [l()]: [...S] };
    }), m == null || m.hide();
  }, g = Mw();
  var _ = Rw(), T = Ne(_), O = ee(T);
  nn(O, {
    style: "width: 100%;",
    get value() {
      return p(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), G(T);
  var N = X(T, 2), V = ee(N);
  {
    var H = (M) => {
      nn(M, {
        get value() {
          return p(d).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, Z = (M) => {
      const S = /* @__PURE__ */ Fe(() => [p(d).ref]);
      qn(M, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return p(S);
        },
        expandAll: !0,
        onSelect: C
      });
    };
    Ve(V, (M) => {
      p(d).refType === "input" ? M(H) : M(Z, !1);
    });
  }
  G(N);
  var L = X(N, 2), F = ee(L);
  gr(
    Si(F, {
      placement: "bottom",
      floating: (M) => {
        var S = Nw(), k = ee(S), z = X(ee(k));
        const j = /* @__PURE__ */ Fe(() => p(d).refType ? [p(d).refType] : []);
        qn(z, {
          items: yw,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return p(j);
          },
          onSelect: E
        }), G(k);
        var K = X(k, 2), R = X(ee(K));
        sn(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const pe = ae.target.value;
            v("defaultValue", pe);
          }
        }), G(K);
        var I = X(K, 2), ne = X(ee(I));
        sn(ne, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const pe = ae.target.value;
            v("description", pe);
          }
        }), G(I);
        var Q = X(I, 2), W = ee(Q);
        ft(W, {
          onclick: $,
          children: (ae, pe) => {
            Ye();
            var de = at("删除");
            B(ae, de);
          },
          $$slots: { default: !0 }
        }), G(Q), G(S), B(M, S);
      },
      children: (M, S) => {
        qa(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => m = M,
    () => m
  ), G(L), B(e, _);
  var P = _e({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), w();
    },
    get index() {
      return s();
    },
    set index(M) {
      s(M), w();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), w();
    }
  });
  return r(), P;
}
he(ev, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Dw = /* @__PURE__ */ ve('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Aw = /* @__PURE__ */ ve('<div class="none-params svelte-1sm1mgi"> </div>'), zw = /* @__PURE__ */ ve('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Lw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Sn(e, t) {
  $e(t, !0), mt(e, Lw);
  const [n, r] = kt(), o = () => se(p(l), "$node", n), a = b(t, "noneParameterText", 7, "无输入参数"), i = b(t, "dataKeyName", 7, "parameters");
  let s = Jt(), l = /* @__PURE__ */ Fe(() => eo(s)), u = /* @__PURE__ */ Fe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[i()]) || []];
  });
  var c = zw(), d = ee(c);
  {
    var f = (x) => {
      var C = Dw();
      Ye(4), B(x, C);
    };
    Ve(d, (x) => {
      p(u).length !== 0 && x(f);
    });
  }
  var v = X(d, 2);
  xn(
    v,
    19,
    () => p(u),
    (x) => x.id,
    (x, C, E) => {
      ev(x, {
        get parameter() {
          return p(C);
        },
        get index() {
          return p(E);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (x) => {
      var C = Aw(), E = ee(C, !0);
      G(C), He(() => Jn(E, a())), B(x, C);
    }
  ), G(c), B(e, c);
  var y = _e({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输入参数") {
      a(x), w();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(x = "parameters") {
      i(x), w();
    }
  });
  return r(), y;
}
he(Sn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Hw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Iw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ ve('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const jw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function tv(e, t) {
  $e(t, !0), mt(e, jw);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br();
  return nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (i) => {
        var s = Hw();
        B(i, s);
      },
      children: (i, s) => {
        var l = Bw(), u = Ne(l), c = ee(u);
        bt(c, {
          level: 3,
          children: (v, y) => {
            Ye();
            var x = at("输出参数");
            B(v, x);
          },
          $$slots: { default: !0 }
        });
        var d = X(c, 2);
        ft(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, y) => {
            var x = Iw();
            B(v, x);
          },
          $$slots: { default: !0 }
        }), G(u);
        var f = X(u, 2);
        Sn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), B(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(i) {
      n(i), w();
    }
  });
}
he(tv, { data: {} }, [], [], !0);
const Ua = () => Wr("tinyflow_options");
var Zw = /* @__PURE__ */ Re('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Yw = /* @__PURE__ */ ve('<div class="input-more-item svelte-1cfeest"><!></div>'), Ww = /* @__PURE__ */ ve('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Kw = /* @__PURE__ */ ve('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Fw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function nv(e, t) {
  $e(t, !0), mt(e, Fw);
  const [n, r] = kt(), o = () => se(p(u), "$node", n), a = b(t, "parameter", 7), i = b(t, "position", 7), s = b(t, "dataKeyName", 7);
  let l = Jt(), u = /* @__PURE__ */ Fe(() => eo(l)), c = /* @__PURE__ */ Fe(() => {
    var k;
    let z = (k = o()) == null ? void 0 : k.data[s()], j;
    if (z && i().length > 0) {
      let K = z;
      for (let R = 0; R < i().length; R++) {
        const I = i()[R];
        R == i().length - 1 ? j = K[I] : K = K[I].children;
      }
    }
    return { ...a(), ...j };
  });
  const { updateNodeData: d } = _n(), f = (k, z) => {
    d(l, (j) => {
      const K = j.data[s()];
      if (K && i().length > 0) {
        let R = K;
        for (let I = 0; I < i().length; I++) {
          const ne = i()[I];
          I == i().length - 1 ? R[ne] = { ...R[ne], [k]: z } : R = K[ne].children;
        }
      }
      return { [s()]: K };
    });
  }, v = (k) => {
    const z = k.target.value;
    f("name", z);
  }, y = (k) => {
    const z = k.value;
    f("dataType", z);
  };
  let x;
  const C = () => {
    d(l, (k) => {
      let z = k.data[s()];
      if (z && i().length > 0) {
        let j = z;
        for (let K = 0; K < i().length; K++) {
          const R = i()[K];
          K == i().length - 1 ? j.splice(R, 1) : j = j[R].children;
        }
      }
      return { [s()]: [...z] };
    }), x == null || x.hide();
  }, E = () => {
    d(l, (k) => {
      let z = k.data[s()];
      if (z && i().length > 0) {
        let j = z;
        for (let K = 0; K < i().length; K++) {
          const R = i()[K];
          K == i().length - 1 ? j[R].children ? j[R].children.push({
            id: So(),
            name: "newParam",
            dataType: "String"
          }) : j[R].children = [
            {
              id: So(),
              name: "newParam",
              dataType: "String"
            }
          ] : j = j[R].children;
        }
      }
      return { [s()]: [...z] };
    });
  };
  var m = Kw(), $ = Ne(m), g = ee($);
  {
    var _ = (k) => {
      var z = Ct(), j = Ne(z);
      xn(j, 17, i, Da, (K, R) => {
        Ye();
        var I = at(" ");
        B(K, I);
      }), B(k, z);
    };
    Ve(g, (k) => {
      i().length > 1 && k(_);
    });
  }
  var T = X(g, 2);
  const O = /* @__PURE__ */ Fe(() => p(c).nameDisabled === !0);
  nn(T, {
    style: "width: 100%;",
    get value() {
      return p(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return p(O);
    }
  }), G($);
  var N = X($, 2), V = ee(N);
  const H = /* @__PURE__ */ Fe(() => p(c).dataType ? [p(c).dataType] : []), Z = /* @__PURE__ */ Fe(() => p(c).dataTypeDisabled === !0);
  qn(V, {
    items: Xf,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return p(H);
    },
    get disabled() {
      return p(Z);
    },
    onSelect: y
  });
  var L = X(V, 2);
  {
    var F = (k) => {
      ft(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (z, j) => {
          var K = Zw();
          B(z, K);
        },
        $$slots: { default: !0 }
      });
    };
    Ve(L, (k) => {
      (p(c).dataType === "Object" || p(c).dataType === "Array") && p(c).addChildDisabled !== !0 && k(F);
    });
  }
  G(N);
  var P = X(N, 2), M = ee(P);
  gr(
    Si(M, {
      placement: "bottom",
      floating: (k) => {
        var z = Ww(), j = ee(z), K = X(ee(j));
        sn(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const ae = W.target.value;
            f("defaultValue", ae);
          }
        }), G(j);
        var R = X(j, 2), I = X(ee(R));
        sn(I, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const ae = W.target.value;
            f("description", ae);
          }
        }), G(R);
        var ne = X(R, 2);
        {
          var Q = (W) => {
            var ae = Yw(), pe = ee(ae);
            ft(pe, {
              onclick: C,
              children: (de, le) => {
                Ye();
                var Te = at("删除");
                B(de, Te);
              },
              $$slots: { default: !0 }
            }), G(ae), B(W, ae);
          };
          Ve(ne, (W) => {
            p(c).deleteDisabled !== !0 && W(Q);
          });
        }
        G(z), B(k, z);
      },
      children: (k, z) => {
        qa(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => x = k,
    () => x
  ), G(P), B(e, m);
  var S = _e({
    get parameter() {
      return a();
    },
    set parameter(k) {
      a(k), w();
    },
    get position() {
      return i();
    },
    set position(k) {
      i(k), w();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(k) {
      s(k), w();
    }
  });
  return r(), S;
}
he(nv, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Xw = /* @__PURE__ */ ve("<!> <!>", 1), qw = /* @__PURE__ */ ve('<div class="none-params svelte-1sm1mgi"> </div>'), Uw = /* @__PURE__ */ ve('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Gw = /* @__PURE__ */ ve('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Jw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Lr(e, t) {
  $e(t, !0), mt(e, Jw);
  const [n, r] = kt(), o = () => se(p(u), "$node", n), a = (C, E = Bt, m = Bt) => {
    var $ = Ct(), g = Ne($);
    xn(
      g,
      19,
      E,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, T, O) => {
        var N = Xw(), V = Ne(N);
        const H = /* @__PURE__ */ Fe(() => [...m(), p(O)]);
        nv(V, {
          get parameter() {
            return p(T);
          },
          get position() {
            return p(H);
          },
          get dataKeyName() {
            return s();
          }
        });
        var Z = X(V, 2);
        {
          var L = (F) => {
            var P = /* @__PURE__ */ Pe(() => [...m(), p(O)]);
            a(F, () => p(T).children, () => p(P));
          };
          Ve(Z, (F) => {
            p(T).children && F(L);
          });
        }
        B(_, N);
      },
      (_) => {
        var T = Ct(), O = Ne(T);
        {
          var N = (V) => {
            var H = qw(), Z = ee(H, !0);
            G(H), He(() => Jn(Z, i())), B(V, H);
          };
          Ve(O, (V) => {
            m().length === 0 && V(N);
          });
        }
        B(_, T);
      }
    ), B(C, $);
  }, i = b(t, "noneParameterText", 7, "无输出参数"), s = b(t, "dataKeyName", 7, "outputDefs");
  let l = Jt(), u = /* @__PURE__ */ Fe(() => eo(l)), c = /* @__PURE__ */ Fe(() => {
    var C;
    return [...((C = o()) == null ? void 0 : C.data[s()]) || []];
  });
  var d = Gw(), f = ee(d);
  {
    var v = (C) => {
      var E = Uw();
      Ye(4), B(C, E);
    };
    Ve(f, (C) => {
      p(c).length !== 0 && C(v);
    });
  }
  var y = X(f, 2);
  a(y, () => p(c) || [], () => []), G(d), B(e, d);
  var x = _e({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(C = "无输出参数") {
      i(C), w();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(C = "outputDefs") {
      s(C), w();
    }
  });
  return r(), x;
}
he(Lr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Qw = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), eb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = /* @__PURE__ */ ve('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const rb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rv(e, t) {
  $e(t, !0), mt(e, rb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Ua();
  let s = Yr(mn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.llm());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = _n();
  return nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Qw();
        B(u, c);
      },
      children: (u, c) => {
        var d = nb(), f = Ne(d), v = ee(f);
        bt(v, {
          level: 3,
          children: (M, S) => {
            Ye();
            var k = at("输入参数");
            B(M, k);
          },
          $$slots: { default: !0 }
        });
        var y = X(v, 2);
        ft(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (M, S) => {
            var k = eb();
            B(M, k);
          },
          $$slots: { default: !0 }
        }), G(f);
        var x = X(f, 2);
        Sn(x, {});
        var C = X(x, 2);
        bt(C, {
          level: 3,
          mt: "10px",
          children: (M, S) => {
            Ye();
            var k = at("模型设置");
            B(M, k);
          },
          $$slots: { default: !0 }
        });
        var E = X(C, 4), m = ee(E);
        const $ = /* @__PURE__ */ Fe(() => n().llmId ? [n().llmId] : []);
        qn(m, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (M) => {
            const S = M.value;
            l(o, () => ({ llmId: S }));
          },
          get value() {
            return p($);
          }
        });
        var g = X(m, 2);
        qa(g, {}), G(E);
        var _ = X(E, 4), T = ee(_);
        const O = /* @__PURE__ */ Fe(() => n().systemPrompt || "");
        sn(T, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return p(O);
          },
          oninput: (M) => {
            l(o, { systemPrompt: M.target.value });
          }
        }), G(_);
        var N = X(_, 4), V = ee(N);
        const H = /* @__PURE__ */ Fe(() => n().userPrompt || "");
        sn(V, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return p(H);
          },
          oninput: (M) => {
            l(o, { userPrompt: M.target.value });
          }
        }), G(N);
        var Z = X(N, 2), L = ee(Z);
        bt(L, {
          level: 3,
          mt: "10px",
          children: (M, S) => {
            Ye();
            var k = at("输出参数");
            B(M, k);
          },
          $$slots: { default: !0 }
        });
        var F = X(L, 2);
        ft(F, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (M, S) => {
            var k = tb();
            B(M, k);
          },
          $$slots: { default: !0 }
        }), G(Z);
        var P = X(Z, 2);
        Lr(P, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
he(rv, { data: {} }, [], [], !0);
var ob = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ib = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ab = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sb = /* @__PURE__ */ ve('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const lb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ov(e, t) {
  $e(t, !0), mt(e, lb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = _n(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ob();
        B(l, u);
      },
      children: (l, u) => {
        var c = sb(), d = Ne(c), f = ee(d);
        bt(f, {
          level: 3,
          children: (H, Z) => {
            Ye();
            var L = at("输入参数");
            B(H, L);
          },
          $$slots: { default: !0 }
        });
        var v = X(f, 2);
        ft(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (H, Z) => {
            var L = ib();
            B(H, L);
          },
          $$slots: { default: !0 }
        }), G(d);
        var y = X(d, 2);
        Sn(y, {});
        var x = X(y, 2);
        bt(x, {
          level: 3,
          mt: "10px",
          children: (H, Z) => {
            Ye();
            var L = at("代码");
            B(H, L);
          },
          $$slots: { default: !0 }
        });
        var C = X(x, 4), E = ee(C);
        const m = /* @__PURE__ */ Fe(() => n().engine ? [n().engine] : ["qlexpress"]);
        qn(E, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (H) => {
            const Z = H.value;
            i(o, () => ({ engine: Z }));
          },
          get value() {
            return p(m);
          }
        }), G(C);
        var $ = X(C, 4), g = ee($);
        const _ = /* @__PURE__ */ Fe(() => n().code || "");
        sn(g, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (H) => {
            i(o, () => ({ code: H.target.value }));
          },
          get value() {
            return p(_);
          }
        }), G($);
        var T = X($, 2), O = ee(T);
        bt(O, {
          level: 3,
          mt: "10px",
          children: (H, Z) => {
            Ye();
            var L = at("输出参数");
            B(H, L);
          },
          $$slots: { default: !0 }
        });
        var N = X(O, 2);
        ft(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (H, Z) => {
            var L = ab();
            B(H, L);
          },
          $$slots: { default: !0 }
        }), G(T);
        var V = X(T, 2);
        Lr(V, {}), B(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(l) {
      n(l), w();
    }
  });
}
he(ov, { data: {} }, [], [], !0);
var ub = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), cb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), db = /* @__PURE__ */ ve('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const fb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function iv(e, t) {
  $e(t, !0), mt(e, fb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = _n();
  return ho(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = ub();
        B(s, l);
      },
      children: (s, l) => {
        var u = db(), c = Ne(u), d = ee(c);
        bt(d, {
          level: 3,
          children: (_, T) => {
            Ye();
            var O = at("输入参数");
            B(_, O);
          },
          $$slots: { default: !0 }
        });
        var f = X(d, 2);
        ft(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (_, T) => {
            var O = cb();
            B(_, O);
          },
          $$slots: { default: !0 }
        }), G(c);
        var v = X(c, 2);
        Sn(v, {});
        var y = X(v, 2);
        bt(y, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            Ye();
            var O = at("代码");
            B(_, O);
          },
          $$slots: { default: !0 }
        });
        var x = X(y, 4), C = ee(x);
        const E = /* @__PURE__ */ Fe(() => n().template || "");
        sn(C, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            i(o, () => ({ template: _.target.value }));
          },
          get value() {
            return p(E);
          }
        }), G(x);
        var m = X(x, 2), $ = ee(m);
        bt($, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            Ye();
            var O = at("输出参数");
            B(_, O);
          },
          $$slots: { default: !0 }
        }), G(m);
        var g = X(m, 2);
        Lr(g, {}), B(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(s) {
      n(s), w();
    }
  });
}
he(iv, { data: {} }, [], [], !0);
var vb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), pb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ ve('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), yb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ ve('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), bb = /* @__PURE__ */ ve('<div style="width: 100%"><!></div>'), xb = /* @__PURE__ */ ve('<div style="width: 100%"><!></div>'), $b = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _b = /* @__PURE__ */ ve('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Cb = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function av(e, t) {
  $e(t, !0), mt(e, Cb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = _n();
  return nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = vb();
        B(s, l);
      },
      children: (s, l) => {
        var u = _b(), c = Ne(u), d = ee(c), f = ee(d);
        qn(f, {
          items: [
            { value: "get", label: "GET" },
            { value: "post", label: "POST" },
            { value: "put", label: "PUT" },
            { value: "delete", label: "DELETE" },
            { value: "head", label: "HEAD" },
            { value: "patch", label: "PATCH" }
          ],
          style: "width: 100%",
          placeholder: "请选择模型",
          value: ["get"]
        }), G(d);
        var v = X(d, 2), y = ee(v);
        nn(y, { placeholder: "请输入url", style: "width: 100%" }), G(v), G(c);
        var x = X(c, 2), C = ee(x);
        bt(C, {
          level: 3,
          children: (U, me) => {
            Ye();
            var Ce = at("Http 头信息");
            B(U, Ce);
          },
          $$slots: { default: !0 }
        });
        var E = X(C, 2);
        ft(E, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (U, me) => {
            var Ce = pb();
            B(U, Ce);
          },
          $$slots: { default: !0 }
        }), G(x);
        var m = X(x, 2);
        Sn(m, { dataKeyName: "headers" });
        var $ = X(m, 2), g = ee($);
        bt(g, {
          level: 3,
          children: (U, me) => {
            Ye();
            var Ce = at("参数");
            B(U, Ce);
          },
          $$slots: { default: !0 }
        });
        var _ = X(g, 2);
        ft(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (U, me) => {
            var Ce = gb();
            B(U, Ce);
          },
          $$slots: { default: !0 }
        }), G($);
        var T = X($, 2);
        Sn(T, { dataKeyName: "urlParameters" });
        var O = X(T, 2);
        bt(O, {
          level: 3,
          mt: "10px",
          children: (U, me) => {
            Ye();
            var Ce = at("Body");
            B(U, Ce);
          },
          $$slots: { default: !0 }
        });
        var N = X(O, 2), V = ee(N), H = ee(V);
        const Z = /* @__PURE__ */ Fe(() => !n().bodyType);
        nn(H, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return p(Z);
          },
          onchange: (U) => {
            var me;
            (me = U.target) != null && me.checked && i(o, { bodyType: "" });
          }
        }), Ye(), G(V);
        var L = X(V, 2), F = ee(L);
        const P = /* @__PURE__ */ Fe(() => n().bodyType === "form-data");
        nn(F, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return p(P);
          },
          onchange: (U) => {
            var me;
            (me = U.target) != null && me.checked && i(o, { bodyType: "form-data" });
          }
        }), Ye(), G(L);
        var M = X(L, 2), S = ee(M);
        const k = /* @__PURE__ */ Fe(() => n().bodyType === "x-www-form-urlencoded");
        nn(S, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return p(k);
          },
          onchange: (U) => {
            var me;
            (me = U.target) != null && me.checked && i(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ye(), G(M);
        var z = X(M, 2), j = ee(z);
        const K = /* @__PURE__ */ Fe(() => n().bodyType === "json");
        nn(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return p(K);
          },
          onchange: (U) => {
            var me;
            (me = U.target) != null && me.checked && i(o, { bodyType: "json" });
          }
        }), Ye(), G(z);
        var R = X(z, 2), I = ee(R);
        const ne = /* @__PURE__ */ Fe(() => n().bodyType === "raw");
        nn(I, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return p(ne);
          },
          onchange: (U) => {
            var me;
            (me = U.target) != null && me.checked && i(o, { bodyType: "raw" });
          }
        }), Ye(), G(R), G(N);
        var Q = X(N, 2);
        {
          var W = (U) => {
            var me = mb(), Ce = Ne(me), We = ee(Ce);
            bt(We, {
              level: 3,
              children: (Ze, rt) => {
                Ye();
                var pt = at("参数");
                B(Ze, pt);
              },
              $$slots: { default: !0 }
            });
            var Ae = X(We, 2);
            ft(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromData");
              },
              children: (Ze, rt) => {
                var pt = hb();
                B(Ze, pt);
              },
              $$slots: { default: !0 }
            }), G(Ce);
            var nt = X(Ce, 2);
            Sn(nt, { dataKeyName: "fromData" }), B(U, me);
          };
          Ve(Q, (U) => {
            n().bodyType === "form-data" && U(W);
          });
        }
        var ae = X(Q, 2);
        {
          var pe = (U) => {
            var me = wb(), Ce = Ne(me), We = ee(Ce);
            bt(We, {
              level: 3,
              children: (Ze, rt) => {
                Ye();
                var pt = at("参数");
                B(Ze, pt);
              },
              $$slots: { default: !0 }
            });
            var Ae = X(We, 2);
            ft(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromUrlencoded");
              },
              children: (Ze, rt) => {
                var pt = yb();
                B(Ze, pt);
              },
              $$slots: { default: !0 }
            }), G(Ce);
            var nt = X(Ce, 2);
            Sn(nt, { dataKeyName: "fromUrlencoded" }), B(U, me);
          };
          Ve(ae, (U) => {
            n().bodyType === "x-www-form-urlencoded" && U(pe);
          });
        }
        var de = X(ae, 2);
        {
          var le = (U) => {
            var me = bb(), Ce = ee(me);
            sn(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (We) => {
                i(o, { bodyJson: We.target.value });
              }
            }), G(me), B(U, me);
          };
          Ve(de, (U) => {
            n().bodyType === "json" && U(le);
          });
        }
        var Te = X(de, 2);
        {
          var ge = (U) => {
            var me = xb(), Ce = ee(me);
            sn(Ce, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (We) => {
                i(o, { bodyRaw: We.target.value });
              }
            }), G(me), B(U, me);
          };
          Ve(Te, (U) => {
            n().bodyType === "raw" && U(ge);
          });
        }
        var Oe = X(Te, 2), Je = ee(Oe);
        bt(Je, {
          level: 3,
          mt: "10px",
          children: (U, me) => {
            Ye();
            var Ce = at("输出参数");
            B(U, Ce);
          },
          $$slots: { default: !0 }
        });
        var Qe = X(Je, 2);
        ft(Qe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (U, me) => {
            var Ce = $b();
            B(U, Ce);
          },
          $$slots: { default: !0 }
        }), G(Oe);
        var Xe = X(Oe, 2);
        Lr(Xe, {}), B(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(s) {
      n(s), w();
    }
  });
}
he(av, { data: {} }, [], [], !0);
var kb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Eb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sb = /* @__PURE__ */ ve('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Pb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sv(e, t) {
  $e(t, !0), mt(e, Pb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Ua();
  let s = Yr(mn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = _n();
  return ho(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = kb();
        B(u, c);
      },
      children: (u, c) => {
        var d = Sb(), f = Ne(d), v = ee(f);
        bt(v, {
          level: 3,
          children: (V, H) => {
            Ye();
            var Z = at("输入参数");
            B(V, Z);
          },
          $$slots: { default: !0 }
        });
        var y = X(v, 2);
        ft(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (V, H) => {
            var Z = Eb();
            B(V, Z);
          },
          $$slots: { default: !0 }
        }), G(f);
        var x = X(f, 2);
        Sn(x, {});
        var C = X(x, 2);
        bt(C, {
          level: 3,
          mt: "10px",
          children: (V, H) => {
            Ye();
            var Z = at("知识库设置");
            B(V, Z);
          },
          $$slots: { default: !0 }
        });
        var E = X(C, 4), m = ee(E);
        const $ = /* @__PURE__ */ Fe(() => n().knowledgeId ? [n().knowledgeId] : []);
        qn(m, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (V) => {
            const H = V.value;
            l(o, () => ({ knowledgeId: H }));
          },
          get value() {
            return p($);
          }
        }), G(E);
        var g = X(E, 4), _ = ee(g);
        nn(_, { placeholder: "搜索的数据条数", style: "width: 100%" }), G(g);
        var T = X(g, 2), O = ee(T);
        bt(O, {
          level: 3,
          mt: "10px",
          children: (V, H) => {
            Ye();
            var Z = at("输出参数");
            B(V, Z);
          },
          $$slots: { default: !0 }
        }), G(T);
        var N = X(T, 2);
        Lr(N, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
he(sv, { data: {} }, [], [], !0);
var Ob = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Tb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mb = /* @__PURE__ */ ve('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Nb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function lv(e, t) {
  $e(t, !0), mt(e, Nb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Ua();
  let s = Yr(mn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = _n();
  return ho(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ob();
        B(u, c);
      },
      children: (u, c) => {
        var d = Mb(), f = Ne(d), v = ee(f);
        bt(v, {
          level: 3,
          children: (M, S) => {
            Ye();
            var k = at("输入参数");
            B(M, k);
          },
          $$slots: { default: !0 }
        });
        var y = X(v, 2);
        ft(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (M, S) => {
            var k = Tb();
            B(M, k);
          },
          $$slots: { default: !0 }
        }), G(f);
        var x = X(f, 2);
        Sn(x, {});
        var C = X(x, 2);
        bt(C, {
          level: 3,
          mt: "10px",
          children: (M, S) => {
            Ye();
            var k = at("搜索引擎设置");
            B(M, k);
          },
          $$slots: { default: !0 }
        });
        var E = X(C, 4), m = ee(E);
        const $ = /* @__PURE__ */ Fe(() => n().knowledgeId ? [n().knowledgeId] : []);
        qn(m, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (M) => {
            const S = M.value;
            l(o, () => ({ knowledgeId: S }));
          },
          get value() {
            return p($);
          }
        }), G(E);
        var g = X(E, 4), _ = ee(g);
        nn(_, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), G(g);
        var T = X(g, 4), O = ee(T);
        nn(O, { placeholder: "请输入关键字", style: "width: 100%" }), G(T);
        var N = X(T, 4), V = ee(N);
        nn(V, { placeholder: "搜索的数据条数", style: "width: 100%" }), G(N);
        var H = X(N, 4), Z = ee(H);
        sn(Z, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), G(H);
        var L = X(H, 2), F = ee(L);
        bt(F, {
          level: 3,
          mt: "10px",
          children: (M, S) => {
            Ye();
            var k = at("输出参数");
            B(M, k);
          },
          $$slots: { default: !0 }
        }), G(L);
        var P = X(L, 2);
        Lr(P, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
he(lv, { data: {} }, [], [], !0);
var Rb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Vb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Db = /* @__PURE__ */ ve('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Ab = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function uv(e, t) {
  $e(t, !0), mt(e, Ab);
  const n = b(t, "data", 7), r = /* @__PURE__ */ ln(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Ua();
  let s = Yr(mn([]));
  return er(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    p(s).push(...u || []);
  }), nr(e, It(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Rb();
        B(l, u);
      },
      handle: (l) => {
        Dr(l, {
          type: "source",
          get position() {
            return Le.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = Db(), d = Ne(c), f = ee(d);
        bt(f, {
          level: 3,
          children: (m, $) => {
            Ye();
            var g = at("循环变量");
            B(m, g);
          },
          $$slots: { default: !0 }
        });
        var v = X(f, 2);
        ft(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (m, $) => {
            var g = Vb();
            B(m, g);
          },
          $$slots: { default: !0 }
        }), G(d);
        var y = X(d, 2);
        Sn(y, {});
        var x = X(y, 2), C = ee(x);
        bt(C, {
          level: 3,
          mt: "10px",
          children: (m, $) => {
            Ye();
            var g = at("输出参数");
            B(m, g);
          },
          $$slots: { default: !0 }
        }), G(x);
        var E = X(x, 2);
        Lr(E, {}), B(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), _e({
    get data() {
      return n();
    },
    set data(l) {
      n(l), w();
    }
  });
}
he(uv, { data: {} }, [], [], !0);
const zb = {
  startNode: Jf,
  codeNode: ov,
  llmNode: rv,
  templateNode: iv,
  httpNode: av,
  knowledgeNode: sv,
  searchEngineNode: lv,
  loopNode: uv,
  endNode: tv
};
var Lb = /* @__PURE__ */ ve("<!> ", 1);
function cv(e, t) {
  $e(t, !0);
  const n = b(t, "icon", 7), r = b(t, "title", 7), o = b(t, "type", 7), a = b(t, "description", 7), i = b(t, "extra", 7);
  return ft(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: a(),
          systemPrompt: "",
          userPrompt: "",
          ...i()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Lb(), c = Ne(u);
      jc(c, n);
      var d = X(c);
      He(() => Jn(d, ` ${r() ?? ""}`)), B(s, u);
    },
    $$slots: { default: !0 }
  }), _e({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), w();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), w();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), w();
    },
    get description() {
      return a();
    },
    set description(s) {
      a(s), w();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), w();
    }
  });
}
he(
  cv,
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
var Hb = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Ib = /* @__PURE__ */ Re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Bb = /* @__PURE__ */ ve('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function dv(e) {
  let t = Yr("base"), n = Yr("show");
  const r = [
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
  ], o = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ];
  var a = Bb(), i = ee(a), s = ee(i), l = ee(s);
  Vf(l, {
    style: "width: 100%",
    items: o,
    onChange: (y) => {
      oe(t, mn(y.value.toString()));
    }
  }), G(s);
  var u = X(s, 2), c = ee(u);
  xn(c, 21, () => r, Da, (y, x) => {
    cv(y, It(() => p(x)));
  }), G(c);
  var d = X(c, 2), f = ee(d);
  ft(f, {
    children: (y, x) => {
      Ye();
      var C = at("测试业务按钮");
      B(y, C);
    },
    $$slots: { default: !0 }
  }), G(d), G(u), G(i);
  var v = X(i, 2);
  ft(v, {
    onclick: () => {
      oe(n, mn(p(n) ? "" : "show"));
    },
    children: (y, x) => {
      var C = Ct(), E = Ne(C);
      {
        var m = (g) => {
          var _ = Hb();
          B(g, _);
        }, $ = (g) => {
          var _ = Ib();
          B(g, _);
        };
        Ve(E, (g) => {
          p(n) === "show" ? g(m) : g($, !1);
        });
      }
      B(y, C);
    },
    $$slots: { default: !0 }
  }), G(a), He(() => {
    an(a, 1, `tf-toolbar ${p(n) ?? ""}`), be(c, "style", `display: ${(p(t) === "base" ? "flex" : "none") ?? ""}`), be(d, "style", `display: ${(p(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), B(e, a);
}
he(dv, {}, [], [], !0);
const jb = () => {
  const { nodeLookup: e } = dt();
  return {
    getNode: (t) => {
      var n;
      return (n = te(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Zb = () => {
  const { nodes: e } = dt();
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
        let a = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            a = s;
            break;
          }
        if (a == -1)
          return r;
        const i = r[o];
        for (let s = o; s > a; s--)
          r[s] = r[s - 1];
        return r[a] = i, r;
      });
    }
  };
}, Yb = () => {
  const { edges: e } = dt();
  return {
    getEdgesByTarget: (t) => te(e).filter((n) => n.target === t)
  };
};
var Wb = /* @__PURE__ */ ve('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Kb = /* @__PURE__ */ ve("<!> <!> <!> <!>", 1), Fb = /* @__PURE__ */ ve('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const Xb = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function fv(e, t) {
  $e(t, !0), mt(e, Xb);
  const n = b(t, "onInit", 7), r = _n();
  n()(r);
  let o = Yr(!1);
  const a = ($) => {
    $.preventDefault(), $.dataTransfer && ($.dataTransfer.dropEffect = "move");
  }, i = ($) => {
    var g;
    $.preventDefault();
    const _ = r.screenToFlowPosition({
      x: $.clientX - 250,
      y: $.clientY - 100
    }), T = (g = $.dataTransfer) == null ? void 0 : g.getData("application/tinyflow"), O = T ? JSON.parse(T) : {}, N = {
      id: `node_${So()}`,
      position: _,
      data: {},
      ...O
    };
    Ji.addNode(N), Ji.selectNodeOnly(N.id);
  }, { getNode: s } = jb(), l = ($) => {
    const g = s($.source), _ = s($.target);
    if ($.sourceHandle === "loop_handle" || g.parentId) {
      const T = r.getEdges();
      for (let O of T)
        if (O.target === $.target) {
          const N = s(O.source);
          if ($.sourceHandle === "loop_handle" && N.parentId !== g.id || g.parentId && N.parentId !== g.parentId)
            return !1;
        }
    }
    return !(!g.parentId && _.parentId && _.parentId !== g.id);
  }, { ensureParentInNodesBefore: u } = Zb(), c = ($, g) => {
    if (!g.isValid)
      return;
    const _ = g.toNode;
    if (_.parentId)
      return;
    const T = g.fromNode, O = g.fromHandle, N = { position: { ..._.position } };
    if (O.id === "loop_handle" ? N.parentId = T.id : T.parentId && (N.parentId = T.parentId), N.parentId) {
      const V = s(N.parentId);
      N.position = {
        x: _.position.x - V.position.x,
        y: _.position.y - V.position.y
      }, u(N.parentId, _.id), r.updateNode(_.id, N);
    }
  }, { getEdgesByTarget: d } = Yb(), f = ($) => {
    $.edges.forEach((g) => {
      const _ = s(g.target);
      if (_.parentId) {
        const T = d(g.target), O = s(_.parentId);
        if (T.length === 0)
          r.updateNode(_.id, {
            parentId: void 0,
            position: {
              x: _.position.x + O.position.x,
              y: _.position.y + O.position.y
            }
          });
        else {
          let N = !1;
          for (let V = 0; V < T.length; V++) {
            const H = T[V], Z = s(H.source);
            if (Z.parentId || Z.type === "loopNode") {
              N = !0;
              break;
            }
          }
          N || r.updateNode(_.id, {
            parentId: void 0,
            position: {
              x: _.position.x + O.position.x,
              y: _.position.y + O.position.y
            }
          });
        }
      }
    });
  }, v = ($, g) => {
    console.log("onconnectstart: ", $, g);
  }, y = ($) => {
    console.log("onconnect: ", $);
  };
  var x = Fb(), C = ee(x);
  dv(C);
  var E = X(C, 2);
  const m = /* @__PURE__ */ Fe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ui.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return wf(E, It({ nodeTypes: zb }, Ji, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: v,
    onconnect: y,
    connectionRadius: 50,
    ondelete: f,
    onclick: ($) => {
      const g = $.target;
      g.classList.contains("svelte-flow__edge-interaction") || g.classList.contains("panel-content") || g.closest(".panel-content") || oe(o, !1);
    },
    get defaultEdgeOptions() {
      return p(m);
    },
    $$events: {
      drop: i,
      dragover: a,
      edgeclick: () => {
        oe(o, !0);
      }
    },
    children: ($, g) => {
      var _ = Kb(), T = Ne(_);
      Of(T, {});
      var O = X(T, 2);
      Ef(O, {});
      var N = X(O, 2);
      Mf(N, {});
      var V = X(N, 2);
      {
        var H = (Z) => {
          _i(Z, {
            children: (L, F) => {
              var P = Wb(), M = X(ee(P), 4), S = ee(M);
              sn(S, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (k) => {
                }
              }), G(M), G(P), B(L, P);
            },
            $$slots: { default: !0 }
          });
        };
        Ve(V, (Z) => {
          p(o) && Z(H);
        });
      }
      B($, _);
    },
    $$slots: { default: !0 }
  })), G(x), B(e, x), _e({
    get onInit() {
      return n();
    },
    set onInit($) {
      n($), w();
    }
  });
}
he(fv, { onInit: {} }, [], [], !0);
function qb(e, t) {
  $e(t, !0);
  const n = b(t, "options", 7), r = b(t, "onInit", 7), { data: o } = n();
  return Ji.init(o.nodes || [], o.edges || []), yo("tinyflow_options", n()), bf(e, {
    fitView: !0,
    children: (a, i) => {
      fv(a, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), _e({
    get options() {
      return n();
    },
    set options(a) {
      n(a), w();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), w();
    }
  });
}
customElements.define("tinyflow-component", he(qb, { options: {}, onInit: {} }, [], [], !1));
Bo.forwardRef(({ data: e, style: t, className: n }, r) => {
  const o = Bo.useRef(null), a = Bo.useRef(null);
  return Bo.useImperativeHandle(r, () => ({
    getData: () => a.current ? a.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  })), Bo.useEffect(() => {
    if (o.current) {
      const i = new t2({
        element: o.current,
        data: e
      });
      return a.current = i, () => {
        i.destroy(), a.current = null;
      };
    }
  }, [e]), /* @__PURE__ */ Hv.jsx("div", { ref: o, style: { height: "600px", ...t }, className: n });
});
//# sourceMappingURL=index.js.map
