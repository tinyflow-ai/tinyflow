var Li = { exports: {} }, Ho = {}, Ai = { exports: {} }, Fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul;
function Av() {
  if (Ul) return Fe;
  Ul = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), d = Symbol.iterator;
  function f(R) {
    return R === null || typeof R != "object" ? null : (R = d && R[d] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, m = Object.assign, _ = {};
  function x(R, I, ne) {
    this.props = R, this.context = I, this.refs = _, this.updater = ne || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(R, I) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, I, "setState");
  }, x.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function S() {
  }
  S.prototype = x.prototype;
  function h(R, I, ne) {
    this.props = R, this.context = I, this.refs = _, this.updater = ne || v;
  }
  var $ = h.prototype = new S();
  $.constructor = h, m($, x.prototype), $.isPureReactComponent = !0;
  var b = Array.isArray, E = Object.prototype.hasOwnProperty, O = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(R, I, ne) {
    var J, Z = {}, se = null, ge = null;
    if (I != null) for (J in I.ref !== void 0 && (ge = I.ref), I.key !== void 0 && (se = "" + I.key), I) E.call(I, J) && !T.hasOwnProperty(J) && (Z[J] = I[J]);
    var ve = arguments.length - 2;
    if (ve === 1) Z.children = ne;
    else if (1 < ve) {
      for (var ue = Array(ve), ae = 0; ae < ve; ae++) ue[ae] = arguments[ae + 2];
      Z.children = ue;
    }
    if (R && R.defaultProps) for (J in ve = R.defaultProps, ve) Z[J] === void 0 && (Z[J] = ve[J]);
    return { $$typeof: e, type: R, key: se, ref: ge, props: Z, _owner: O.current };
  }
  function z(R, I) {
    return { $$typeof: e, type: R.type, key: I, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function D(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }
  function W(R) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ne) {
      return I[ne];
    });
  }
  var j = /\/+/g;
  function X(R, I) {
    return typeof R == "object" && R !== null && R.key != null ? W("" + R.key) : I.toString(36);
  }
  function P(R, I, ne, J, Z) {
    var se = typeof R;
    (se === "undefined" || se === "boolean") && (R = null);
    var ge = !1;
    if (R === null) ge = !0;
    else switch (se) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case e:
          case t:
            ge = !0;
        }
    }
    if (ge) return ge = R, Z = Z(ge), R = J === "" ? "." + X(ge, 0) : J, b(Z) ? (ne = "", R != null && (ne = R.replace(j, "$&/") + "/"), P(Z, I, ne, "", function(ae) {
      return ae;
    })) : Z != null && (D(Z) && (Z = z(Z, ne + (!Z.key || ge && ge.key === Z.key ? "" : ("" + Z.key).replace(j, "$&/") + "/") + R)), I.push(Z)), 1;
    if (ge = 0, J = J === "" ? "." : J + ":", b(R)) for (var ve = 0; ve < R.length; ve++) {
      se = R[ve];
      var ue = J + X(se, ve);
      ge += P(se, I, ne, ue, Z);
    }
    else if (ue = f(R), typeof ue == "function") for (R = ue.call(R), ve = 0; !(se = R.next()).done; ) se = se.value, ue = J + X(se, ve++), ge += P(se, I, ne, ue, Z);
    else if (se === "object") throw I = String(R), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function M(R, I, ne) {
    if (R == null) return R;
    var J = [], Z = 0;
    return P(R, J, "", "", function(se) {
      return I.call(ne, se, Z++);
    }), J;
  }
  function k(R) {
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
  var C = { current: null }, A = { transition: null }, H = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: A, ReactCurrentOwner: O };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Fe.Children = { map: M, forEach: function(R, I, ne) {
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
    if (!D(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Fe.Component = x, Fe.Fragment = n, Fe.Profiler = o, Fe.PureComponent = h, Fe.StrictMode = r, Fe.Suspense = l, Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, Fe.act = K, Fe.cloneElement = function(R, I, ne) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var J = m({}, R.props), Z = R.key, se = R.ref, ge = R._owner;
    if (I != null) {
      if (I.ref !== void 0 && (se = I.ref, ge = O.current), I.key !== void 0 && (Z = "" + I.key), R.type && R.type.defaultProps) var ve = R.type.defaultProps;
      for (ue in I) E.call(I, ue) && !T.hasOwnProperty(ue) && (J[ue] = I[ue] === void 0 && ve !== void 0 ? ve[ue] : I[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) J.children = ne;
    else if (1 < ue) {
      ve = Array(ue);
      for (var ae = 0; ae < ue; ae++) ve[ae] = arguments[ae + 2];
      J.children = ve;
    }
    return { $$typeof: e, type: R.type, key: Z, ref: se, props: J, _owner: ge };
  }, Fe.createContext = function(R) {
    return R = { $$typeof: i, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: a, _context: R }, R.Consumer = R;
  }, Fe.createElement = N, Fe.createFactory = function(R) {
    var I = N.bind(null, R);
    return I.type = R, I;
  }, Fe.createRef = function() {
    return { current: null };
  }, Fe.forwardRef = function(R) {
    return { $$typeof: s, render: R };
  }, Fe.isValidElement = D, Fe.lazy = function(R) {
    return { $$typeof: c, _payload: { _status: -1, _result: R }, _init: k };
  }, Fe.memo = function(R, I) {
    return { $$typeof: u, type: R, compare: I === void 0 ? null : I };
  }, Fe.startTransition = function(R) {
    var I = A.transition;
    A.transition = {};
    try {
      R();
    } finally {
      A.transition = I;
    }
  }, Fe.unstable_act = K, Fe.useCallback = function(R, I) {
    return C.current.useCallback(R, I);
  }, Fe.useContext = function(R) {
    return C.current.useContext(R);
  }, Fe.useDebugValue = function() {
  }, Fe.useDeferredValue = function(R) {
    return C.current.useDeferredValue(R);
  }, Fe.useEffect = function(R, I) {
    return C.current.useEffect(R, I);
  }, Fe.useId = function() {
    return C.current.useId();
  }, Fe.useImperativeHandle = function(R, I, ne) {
    return C.current.useImperativeHandle(R, I, ne);
  }, Fe.useInsertionEffect = function(R, I) {
    return C.current.useInsertionEffect(R, I);
  }, Fe.useLayoutEffect = function(R, I) {
    return C.current.useLayoutEffect(R, I);
  }, Fe.useMemo = function(R, I) {
    return C.current.useMemo(R, I);
  }, Fe.useReducer = function(R, I, ne) {
    return C.current.useReducer(R, I, ne);
  }, Fe.useRef = function(R) {
    return C.current.useRef(R);
  }, Fe.useState = function(R) {
    return C.current.useState(R);
  }, Fe.useSyncExternalStore = function(R, I, ne) {
    return C.current.useSyncExternalStore(R, I, ne);
  }, Fe.useTransition = function() {
    return C.current.useTransition();
  }, Fe.version = "18.3.1", Fe;
}
var Wo = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wo.exports;
var Gl;
function zv() {
  return Gl || (Gl = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), x = Symbol.iterator, S = "@@iterator";
      function h(g) {
        if (g === null || typeof g != "object")
          return null;
        var V = x && g[x] || g[S];
        return typeof V == "function" ? V : null;
      }
      var $ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, b = {
        transition: null
      }, E = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, O = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, T = {}, N = null;
      function z(g) {
        N = g;
      }
      T.setExtraStackFrame = function(g) {
        N = g;
      }, T.getCurrentStack = null, T.getStackAddendum = function() {
        var g = "";
        N && (g += N);
        var V = T.getCurrentStack;
        return V && (g += V() || ""), g;
      };
      var D = !1, W = !1, j = !1, X = !1, P = !1, M = {
        ReactCurrentDispatcher: $,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: O
      };
      M.ReactDebugCurrentFrame = T, M.ReactCurrentActQueue = E;
      function k(g) {
        {
          for (var V = arguments.length, F = new Array(V > 1 ? V - 1 : 0), U = 1; U < V; U++)
            F[U - 1] = arguments[U];
          A("warn", g, F);
        }
      }
      function C(g) {
        {
          for (var V = arguments.length, F = new Array(V > 1 ? V - 1 : 0), U = 1; U < V; U++)
            F[U - 1] = arguments[U];
          A("error", g, F);
        }
      }
      function A(g, V, F) {
        {
          var U = M.ReactDebugCurrentFrame, de = U.getStackAddendum();
          de !== "" && (V += "%s", F = F.concat([de]));
          var Ve = F.map(function(Se) {
            return String(Se);
          });
          Ve.unshift("Warning: " + V), Function.prototype.apply.call(console[g], console, Ve);
        }
      }
      var H = {};
      function K(g, V) {
        {
          var F = g.constructor, U = F && (F.displayName || F.name) || "ReactClass", de = U + "." + V;
          if (H[de])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", V, U), H[de] = !0;
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
        isMounted: function(g) {
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
        enqueueForceUpdate: function(g, V, F) {
          K(g, "forceUpdate");
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
        enqueueReplaceState: function(g, V, F, U) {
          K(g, "replaceState");
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
        enqueueSetState: function(g, V, F, U) {
          K(g, "setState");
        }
      }, I = Object.assign, ne = {};
      Object.freeze(ne);
      function J(g, V, F) {
        this.props = g, this.context = V, this.refs = ne, this.updater = F || R;
      }
      J.prototype.isReactComponent = {}, J.prototype.setState = function(g, V) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, V, "setState");
      }, J.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var Z = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, se = function(g, V) {
          Object.defineProperty(J.prototype, g, {
            get: function() {
              k("%s(...) is deprecated in plain JavaScript React classes. %s", V[0], V[1]);
            }
          });
        };
        for (var ge in Z)
          Z.hasOwnProperty(ge) && se(ge, Z[ge]);
      }
      function ve() {
      }
      ve.prototype = J.prototype;
      function ue(g, V, F) {
        this.props = g, this.context = V, this.refs = ne, this.updater = F || R;
      }
      var ae = ue.prototype = new ve();
      ae.constructor = ue, I(ae, J.prototype), ae.isPureReactComponent = !0;
      function ye() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var Xe = Array.isArray;
      function tt(g) {
        return Xe(g);
      }
      function Ge(g) {
        {
          var V = typeof Symbol == "function" && Symbol.toStringTag, F = V && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return F;
        }
      }
      function Qe(g) {
        try {
          return q(g), !1;
        } catch {
          return !0;
        }
      }
      function q(g) {
        return "" + g;
      }
      function me(g) {
        if (Qe(g))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(g)), q(g);
      }
      function $e(g, V, F) {
        var U = g.displayName;
        if (U)
          return U;
        var de = V.displayName || V.name || "";
        return de !== "" ? F + "(" + de + ")" : F;
      }
      function Te(g) {
        return g.displayName || "Context";
      }
      function at(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
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
        if (typeof g == "object")
          switch (g.$$typeof) {
            case u:
              var V = g;
              return Te(V) + ".Consumer";
            case l:
              var F = g;
              return Te(F._context) + ".Provider";
            case c:
              return $e(g, g.render, "ForwardRef");
            case v:
              var U = g.displayName || null;
              return U !== null ? U : at(g.type) || "Memo";
            case m: {
              var de = g, Ve = de._payload, Se = de._init;
              try {
                return at(Se(Ve));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ie = Object.prototype.hasOwnProperty, et = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, it, dt, St;
      St = {};
      function ce(g) {
        if (Ie.call(g, "ref")) {
          var V = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (V && V.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function Be(g) {
        if (Ie.call(g, "key")) {
          var V = Object.getOwnPropertyDescriptor(g, "key").get;
          if (V && V.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function pe(g, V) {
        var F = function() {
          it || (it = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: F,
          configurable: !0
        });
      }
      function rn(g, V) {
        var F = function() {
          dt || (dt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: F,
          configurable: !0
        });
      }
      function Xt(g) {
        if (typeof g.ref == "string" && O.current && g.__self && O.current.stateNode !== g.__self) {
          var V = at(O.current.type);
          St[V] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V, g.ref), St[V] = !0);
        }
      }
      var Ne = function(g, V, F, U, de, Ve, Se) {
        var Ye = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: g,
          key: V,
          ref: F,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: Ve
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
          value: U
        }), Object.defineProperty(Ye, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
      };
      function $t(g, V, F) {
        var U, de = {}, Ve = null, Se = null, Ye = null, nt = null;
        if (V != null) {
          ce(V) && (Se = V.ref, Xt(V)), Be(V) && (me(V.key), Ve = "" + V.key), Ye = V.__self === void 0 ? null : V.__self, nt = V.__source === void 0 ? null : V.__source;
          for (U in V)
            Ie.call(V, U) && !et.hasOwnProperty(U) && (de[U] = V[U]);
        }
        var ft = arguments.length - 2;
        if (ft === 1)
          de.children = F;
        else if (ft > 1) {
          for (var Ct = Array(ft), kt = 0; kt < ft; kt++)
            Ct[kt] = arguments[kt + 2];
          Object.freeze && Object.freeze(Ct), de.children = Ct;
        }
        if (g && g.defaultProps) {
          var Ot = g.defaultProps;
          for (U in Ot)
            de[U] === void 0 && (de[U] = Ot[U]);
        }
        if (Ve || Se) {
          var Vt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Ve && pe(de, Vt), Se && rn(de, Vt);
        }
        return Ne(g, Ve, Se, Ye, nt, O.current, de);
      }
      function Re(g, V) {
        var F = Ne(g.type, V, g.ref, g._self, g._source, g._owner, g.props);
        return F;
      }
      function We(g, V, F) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var U, de = I({}, g.props), Ve = g.key, Se = g.ref, Ye = g._self, nt = g._source, ft = g._owner;
        if (V != null) {
          ce(V) && (Se = V.ref, ft = O.current), Be(V) && (me(V.key), Ve = "" + V.key);
          var Ct;
          g.type && g.type.defaultProps && (Ct = g.type.defaultProps);
          for (U in V)
            Ie.call(V, U) && !et.hasOwnProperty(U) && (V[U] === void 0 && Ct !== void 0 ? de[U] = Ct[U] : de[U] = V[U]);
        }
        var kt = arguments.length - 2;
        if (kt === 1)
          de.children = F;
        else if (kt > 1) {
          for (var Ot = Array(kt), Vt = 0; Vt < kt; Vt++)
            Ot[Vt] = arguments[Vt + 2];
          de.children = Ot;
        }
        return Ne(g.type, Ve, Se, Ye, nt, ft, de);
      }
      function lt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === r;
      }
      var Bt = ".", zn = ":";
      function kn(g) {
        var V = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, U = g.replace(V, function(de) {
          return F[de];
        });
        return "$" + U;
      }
      var At = !1, Pt = /\/+/g;
      function jt(g) {
        return g.replace(Pt, "$&/");
      }
      function zt(g, V) {
        return typeof g == "object" && g !== null && g.key != null ? (me(g.key), kn("" + g.key)) : V.toString(36);
      }
      function yt(g, V, F, U, de) {
        var Ve = typeof g;
        (Ve === "undefined" || Ve === "boolean") && (g = null);
        var Se = !1;
        if (g === null)
          Se = !0;
        else
          switch (Ve) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case r:
                case o:
                  Se = !0;
              }
          }
        if (Se) {
          var Ye = g, nt = de(Ye), ft = U === "" ? Bt + zt(Ye, 0) : U;
          if (tt(nt)) {
            var Ct = "";
            ft != null && (Ct = jt(ft) + "/"), yt(nt, V, Ct, "", function(Lv) {
              return Lv;
            });
          } else nt != null && (lt(nt) && (nt.key && (!Ye || Ye.key !== nt.key) && me(nt.key), nt = Re(
            nt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (nt.key && (!Ye || Ye.key !== nt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              jt("" + nt.key) + "/"
            ) : "") + ft
          )), V.push(nt));
          return 1;
        }
        var kt, Ot, Vt = 0, Yt = U === "" ? Bt : U + zn;
        if (tt(g))
          for (var Vi = 0; Vi < g.length; Vi++)
            kt = g[Vi], Ot = Yt + zt(kt, Vi), Vt += yt(kt, V, F, Ot, de);
        else {
          var ss = h(g);
          if (typeof ss == "function") {
            var Kl = g;
            ss === Kl.entries && (At || k("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var Nv = ss.call(Kl), Fl, Vv = 0; !(Fl = Nv.next()).done; )
              kt = Fl.value, Ot = Yt + zt(kt, Vv++), Vt += yt(kt, V, F, Ot, de);
          } else if (Ve === "object") {
            var ql = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (ql === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : ql) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Vt;
      }
      function Dn(g, V, F) {
        if (g == null)
          return g;
        var U = [], de = 0;
        return yt(g, U, "", "", function(Ve) {
          return V.call(F, Ve, de++);
        }), U;
      }
      function wn(g) {
        var V = 0;
        return Dn(g, function() {
          V++;
        }), V;
      }
      function Gt(g, V, F) {
        Dn(g, function() {
          V.apply(this, arguments);
        }, F);
      }
      function Qn(g) {
        return Dn(g, function(V) {
          return V;
        }) || [];
      }
      function er(g) {
        if (!lt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function mr(g) {
        var V = {
          $$typeof: u,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
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
        V.Provider = {
          $$typeof: l,
          _context: V
        };
        var F = !1, U = !1, de = !1;
        {
          var Ve = {
            $$typeof: u,
            _context: V
          };
          Object.defineProperties(Ve, {
            Provider: {
              get: function() {
                return U || (U = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), V.Provider;
              },
              set: function(Se) {
                V.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return V._currentValue;
              },
              set: function(Se) {
                V._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return V._currentValue2;
              },
              set: function(Se) {
                V._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return V._threadCount;
              },
              set: function(Se) {
                V._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), V.Consumer;
              }
            },
            displayName: {
              get: function() {
                return V.displayName;
              },
              set: function(Se) {
                de || (k("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), de = !0);
              }
            }
          }), V.Consumer = Ve;
        }
        return V._currentRenderer = null, V._currentRenderer2 = null, V;
      }
      var tr = -1, yr = 0, Vr = 1, Vo = 2;
      function Lo(g) {
        if (g._status === tr) {
          var V = g._result, F = V();
          if (F.then(function(Ve) {
            if (g._status === yr || g._status === tr) {
              var Se = g;
              Se._status = Vr, Se._result = Ve;
            }
          }, function(Ve) {
            if (g._status === yr || g._status === tr) {
              var Se = g;
              Se._status = Vo, Se._result = Ve;
            }
          }), g._status === tr) {
            var U = g;
            U._status = yr, U._result = F;
          }
        }
        if (g._status === Vr) {
          var de = g._result;
          return de === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw g._result;
      }
      function Ao(g) {
        var V = {
          // We use these fields to store the result.
          _status: tr,
          _result: g
        }, F = {
          $$typeof: m,
          _payload: V,
          _init: Lo
        };
        {
          var U, de;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return U;
              },
              set: function(Ve) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = Ve, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(Ve) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = Ve, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function zo(g) {
        g != null && g.$$typeof === v ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? C("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var V = {
          $$typeof: c,
          render: g
        };
        {
          var F;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(U) {
              F = U, !g.name && !g.displayName && (g.displayName = U);
            }
          });
        }
        return V;
      }
      var L;
      L = Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === a || g === s || P || g === i || g === d || g === f || X || g === _ || D || W || j || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === v || g.$$typeof === l || g.$$typeof === u || g.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === L || g.getModuleId !== void 0));
      }
      function we(g, V) {
        re(g) || C("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var F = {
          $$typeof: v,
          type: g,
          compare: V === void 0 ? null : V
        };
        {
          var U;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(de) {
              U = de, !g.name && !g.displayName && (g.displayName = de);
            }
          });
        }
        return F;
      }
      function Ee() {
        var g = $.current;
        return g === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function B(g) {
        var V = Ee();
        if (g._context !== void 0) {
          var F = g._context;
          F.Consumer === g ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === g && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return V.useContext(g);
      }
      function ut(g) {
        var V = Ee();
        return V.useState(g);
      }
      function Ke(g, V, F) {
        var U = Ee();
        return U.useReducer(g, V, F);
      }
      function je(g) {
        var V = Ee();
        return V.useRef(g);
      }
      function Ht(g, V) {
        var F = Ee();
        return F.useEffect(g, V);
      }
      function pt(g, V) {
        var F = Ee();
        return F.useInsertionEffect(g, V);
      }
      function wt(g, V) {
        var F = Ee();
        return F.useLayoutEffect(g, V);
      }
      function Kt(g, V) {
        var F = Ee();
        return F.useCallback(g, V);
      }
      function Hn(g, V) {
        var F = Ee();
        return F.useMemo(g, V);
      }
      function In(g, V, F) {
        var U = Ee();
        return U.useImperativeHandle(g, V, F);
      }
      function Dt(g, V) {
        {
          var F = Ee();
          return F.useDebugValue(g, V);
        }
      }
      function wr() {
        var g = Ee();
        return g.useTransition();
      }
      function Jr(g) {
        var V = Ee();
        return V.useDeferredValue(g);
      }
      function Qr() {
        var g = Ee();
        return g.useId();
      }
      function Ja(g, V, F) {
        var U = Ee();
        return U.useSyncExternalStore(g, V, F);
      }
      var Ze = 0, Qa, Do, Si, Ol, Tl, Rl, Ml;
      function Nl() {
      }
      Nl.__reactDisabledLog = !0;
      function gv() {
        {
          if (Ze === 0) {
            Qa = console.log, Do = console.info, Si = console.warn, Ol = console.error, Tl = console.group, Rl = console.groupCollapsed, Ml = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: Nl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          Ze++;
        }
      }
      function hv() {
        {
          if (Ze--, Ze === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, g, {
                value: Qa
              }),
              info: I({}, g, {
                value: Do
              }),
              warn: I({}, g, {
                value: Si
              }),
              error: I({}, g, {
                value: Ol
              }),
              group: I({}, g, {
                value: Tl
              }),
              groupCollapsed: I({}, g, {
                value: Rl
              }),
              groupEnd: I({}, g, {
                value: Ml
              })
            });
          }
          Ze < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var es = M.ReactCurrentDispatcher, ts;
      function Pi(g, V, F) {
        {
          if (ts === void 0)
            try {
              throw Error();
            } catch (de) {
              var U = de.stack.trim().match(/\n( *(at )?)/);
              ts = U && U[1] || "";
            }
          return `
` + ts + g;
        }
      }
      var ns = !1, Oi;
      {
        var mv = typeof WeakMap == "function" ? WeakMap : Map;
        Oi = new mv();
      }
      function Vl(g, V) {
        if (!g || ns)
          return "";
        {
          var F = Oi.get(g);
          if (F !== void 0)
            return F;
        }
        var U;
        ns = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ve;
        Ve = es.current, es.current = null, gv();
        try {
          if (V) {
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
              } catch (Yt) {
                U = Yt;
              }
              Reflect.construct(g, [], Se);
            } else {
              try {
                Se.call();
              } catch (Yt) {
                U = Yt;
              }
              g.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Yt) {
              U = Yt;
            }
            g();
          }
        } catch (Yt) {
          if (Yt && U && typeof Yt.stack == "string") {
            for (var Ye = Yt.stack.split(`
`), nt = U.stack.split(`
`), ft = Ye.length - 1, Ct = nt.length - 1; ft >= 1 && Ct >= 0 && Ye[ft] !== nt[Ct]; )
              Ct--;
            for (; ft >= 1 && Ct >= 0; ft--, Ct--)
              if (Ye[ft] !== nt[Ct]) {
                if (ft !== 1 || Ct !== 1)
                  do
                    if (ft--, Ct--, Ct < 0 || Ye[ft] !== nt[Ct]) {
                      var kt = `
` + Ye[ft].replace(" at new ", " at ");
                      return g.displayName && kt.includes("<anonymous>") && (kt = kt.replace("<anonymous>", g.displayName)), typeof g == "function" && Oi.set(g, kt), kt;
                    }
                  while (ft >= 1 && Ct >= 0);
                break;
              }
          }
        } finally {
          ns = !1, es.current = Ve, hv(), Error.prepareStackTrace = de;
        }
        var Ot = g ? g.displayName || g.name : "", Vt = Ot ? Pi(Ot) : "";
        return typeof g == "function" && Oi.set(g, Vt), Vt;
      }
      function yv(g, V, F) {
        return Vl(g, !1);
      }
      function wv(g) {
        var V = g.prototype;
        return !!(V && V.isReactComponent);
      }
      function Ti(g, V, F) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return Vl(g, wv(g));
        if (typeof g == "string")
          return Pi(g);
        switch (g) {
          case d:
            return Pi("Suspense");
          case f:
            return Pi("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case c:
              return yv(g.render);
            case v:
              return Ti(g.type, V, F);
            case m: {
              var U = g, de = U._payload, Ve = U._init;
              try {
                return Ti(Ve(de), V, F);
              } catch {
              }
            }
          }
        return "";
      }
      var Ll = {}, Al = M.ReactDebugCurrentFrame;
      function Ri(g) {
        if (g) {
          var V = g._owner, F = Ti(g.type, g._source, V ? V.type : null);
          Al.setExtraStackFrame(F);
        } else
          Al.setExtraStackFrame(null);
      }
      function bv(g, V, F, U, de) {
        {
          var Ve = Function.call.bind(Ie);
          for (var Se in g)
            if (Ve(g, Se)) {
              var Ye = void 0;
              try {
                if (typeof g[Se] != "function") {
                  var nt = Error((U || "React class") + ": " + F + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw nt.name = "Invariant Violation", nt;
                }
                Ye = g[Se](V, Se, U, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ft) {
                Ye = ft;
              }
              Ye && !(Ye instanceof Error) && (Ri(de), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", F, Se, typeof Ye), Ri(null)), Ye instanceof Error && !(Ye.message in Ll) && (Ll[Ye.message] = !0, Ri(de), C("Failed %s type: %s", F, Ye.message), Ri(null));
            }
        }
      }
      function eo(g) {
        if (g) {
          var V = g._owner, F = Ti(g.type, g._source, V ? V.type : null);
          z(F);
        } else
          z(null);
      }
      var rs;
      rs = !1;
      function zl() {
        if (O.current) {
          var g = at(O.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function xv(g) {
        if (g !== void 0) {
          var V = g.fileName.replace(/^.*[\\\/]/, ""), F = g.lineNumber;
          return `

Check your code at ` + V + ":" + F + ".";
        }
        return "";
      }
      function _v(g) {
        return g != null ? xv(g.__source) : "";
      }
      var Dl = {};
      function $v(g) {
        var V = zl();
        if (!V) {
          var F = typeof g == "string" ? g : g.displayName || g.name;
          F && (V = `

Check the top-level render call using <` + F + ">.");
        }
        return V;
      }
      function Hl(g, V) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var F = $v(V);
          if (!Dl[F]) {
            Dl[F] = !0;
            var U = "";
            g && g._owner && g._owner !== O.current && (U = " It was passed a child from " + at(g._owner.type) + "."), eo(g), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, U), eo(null);
          }
        }
      }
      function Il(g, V) {
        if (typeof g == "object") {
          if (tt(g))
            for (var F = 0; F < g.length; F++) {
              var U = g[F];
              lt(U) && Hl(U, V);
            }
          else if (lt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var de = h(g);
            if (typeof de == "function" && de !== g.entries)
              for (var Ve = de.call(g), Se; !(Se = Ve.next()).done; )
                lt(Se.value) && Hl(Se.value, V);
          }
        }
      }
      function Bl(g) {
        {
          var V = g.type;
          if (V == null || typeof V == "string")
            return;
          var F;
          if (typeof V == "function")
            F = V.propTypes;
          else if (typeof V == "object" && (V.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          V.$$typeof === v))
            F = V.propTypes;
          else
            return;
          if (F) {
            var U = at(V);
            bv(F, g.props, "prop", U, g);
          } else if (V.PropTypes !== void 0 && !rs) {
            rs = !0;
            var de = at(V);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cv(g) {
        {
          for (var V = Object.keys(g.props), F = 0; F < V.length; F++) {
            var U = V[F];
            if (U !== "children" && U !== "key") {
              eo(g), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), eo(null);
              break;
            }
          }
          g.ref !== null && (eo(g), C("Invalid attribute `ref` supplied to `React.Fragment`."), eo(null));
        }
      }
      function jl(g, V, F) {
        var U = re(g);
        if (!U) {
          var de = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = _v(V);
          Ve ? de += Ve : de += zl();
          var Se;
          g === null ? Se = "null" : tt(g) ? Se = "array" : g !== void 0 && g.$$typeof === r ? (Se = "<" + (at(g.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof g, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, de);
        }
        var Ye = $t.apply(this, arguments);
        if (Ye == null)
          return Ye;
        if (U)
          for (var nt = 2; nt < arguments.length; nt++)
            Il(arguments[nt], g);
        return g === a ? Cv(Ye) : Bl(Ye), Ye;
      }
      var Yl = !1;
      function kv(g) {
        var V = jl.bind(null, g);
        return V.type = g, Yl || (Yl = !0, k("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function() {
            return k("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), V;
      }
      function Ev(g, V, F) {
        for (var U = We.apply(this, arguments), de = 2; de < arguments.length; de++)
          Il(arguments[de], U.type);
        return Bl(U), U;
      }
      function Sv(g, V) {
        var F = b.transition;
        b.transition = {};
        var U = b.transition;
        b.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (b.transition = F, F === null && U._updatedFibers) {
            var de = U._updatedFibers.size;
            de > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
          }
        }
      }
      var Zl = !1, Mi = null;
      function Pv(g) {
        if (Mi === null)
          try {
            var V = ("require" + Math.random()).slice(0, 7), F = e && e[V];
            Mi = F.call(e, "timers").setImmediate;
          } catch {
            Mi = function(de) {
              Zl === !1 && (Zl = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ve = new MessageChannel();
              Ve.port1.onmessage = de, Ve.port2.postMessage(void 0);
            };
          }
        return Mi(g);
      }
      var to = 0, Wl = !1;
      function Xl(g) {
        {
          var V = to;
          to++, E.current === null && (E.current = []);
          var F = E.isBatchingLegacy, U;
          try {
            if (E.isBatchingLegacy = !0, U = g(), !F && E.didScheduleLegacyUpdate) {
              var de = E.current;
              de !== null && (E.didScheduleLegacyUpdate = !1, as(de));
            }
          } catch (Ot) {
            throw Ni(V), Ot;
          } finally {
            E.isBatchingLegacy = F;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var Ve = U, Se = !1, Ye = {
              then: function(Ot, Vt) {
                Se = !0, Ve.then(function(Yt) {
                  Ni(V), to === 0 ? os(Yt, Ot, Vt) : Ot(Yt);
                }, function(Yt) {
                  Ni(V), Vt(Yt);
                });
              }
            };
            return !Wl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (Wl = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ye;
          } else {
            var nt = U;
            if (Ni(V), to === 0) {
              var ft = E.current;
              ft !== null && (as(ft), E.current = null);
              var Ct = {
                then: function(Ot, Vt) {
                  E.current === null ? (E.current = [], os(nt, Ot, Vt)) : Ot(nt);
                }
              };
              return Ct;
            } else {
              var kt = {
                then: function(Ot, Vt) {
                  Ot(nt);
                }
              };
              return kt;
            }
          }
        }
      }
      function Ni(g) {
        g !== to - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), to = g;
      }
      function os(g, V, F) {
        {
          var U = E.current;
          if (U !== null)
            try {
              as(U), Pv(function() {
                U.length === 0 ? (E.current = null, V(g)) : os(g, V, F);
              });
            } catch (de) {
              F(de);
            }
          else
            V(g);
        }
      }
      var is = !1;
      function as(g) {
        if (!is) {
          is = !0;
          var V = 0;
          try {
            for (; V < g.length; V++) {
              var F = g[V];
              do
                F = F(!0);
              while (F !== null);
            }
            g.length = 0;
          } catch (U) {
            throw g = g.slice(V + 1), U;
          } finally {
            is = !1;
          }
        }
      }
      var Ov = jl, Tv = Ev, Rv = kv, Mv = {
        map: Dn,
        forEach: Gt,
        count: wn,
        toArray: Qn,
        only: er
      };
      t.Children = Mv, t.Component = J, t.Fragment = a, t.Profiler = s, t.PureComponent = ue, t.StrictMode = i, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.act = Xl, t.cloneElement = Tv, t.createContext = mr, t.createElement = Ov, t.createFactory = Rv, t.createRef = ye, t.forwardRef = zo, t.isValidElement = lt, t.lazy = Ao, t.memo = we, t.startTransition = Sv, t.unstable_act = Xl, t.useCallback = Kt, t.useContext = B, t.useDebugValue = Dt, t.useDeferredValue = Jr, t.useEffect = Ht, t.useId = Qr, t.useImperativeHandle = In, t.useInsertionEffect = pt, t.useLayoutEffect = wt, t.useMemo = Hn, t.useReducer = Ke, t.useRef = je, t.useState = ut, t.useSyncExternalStore = Ja, t.useTransition = wr, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wo, Wo.exports)), Wo.exports;
}
var Jl;
function Ws() {
  return Jl || (Jl = 1, process.env.NODE_ENV === "production" ? Ai.exports = Av() : Ai.exports = zv()), Ai.exports;
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
var Ql;
function Dv() {
  if (Ql) return Ho;
  Ql = 1;
  var e = Ws(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var eu;
function Hv() {
  return eu || (eu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ws(), t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, _ = "@@iterator";
    function x(L) {
      if (L === null || typeof L != "object")
        return null;
      var re = m && L[m] || L[_];
      return typeof re == "function" ? re : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(L) {
      {
        for (var re = arguments.length, we = new Array(re > 1 ? re - 1 : 0), Ee = 1; Ee < re; Ee++)
          we[Ee - 1] = arguments[Ee];
        $("error", L, we);
      }
    }
    function $(L, re, we) {
      {
        var Ee = S.ReactDebugCurrentFrame, B = Ee.getStackAddendum();
        B !== "" && (re += "%s", we = we.concat([B]));
        var ut = we.map(function(Ke) {
          return String(Ke);
        });
        ut.unshift("Warning: " + re), Function.prototype.apply.call(console[L], console, ut);
      }
    }
    var b = !1, E = !1, O = !1, T = !1, N = !1, z;
    z = Symbol.for("react.module.reference");
    function D(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === a || N || L === o || L === u || L === c || T || L === v || b || E || O || typeof L == "object" && L !== null && (L.$$typeof === f || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === z || L.getModuleId !== void 0));
    }
    function W(L, re, we) {
      var Ee = L.displayName;
      if (Ee)
        return Ee;
      var B = re.displayName || re.name || "";
      return B !== "" ? we + "(" + B + ")" : we;
    }
    function j(L) {
      return L.displayName || "Context";
    }
    function X(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
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
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var re = L;
            return j(re) + ".Consumer";
          case i:
            var we = L;
            return j(we._context) + ".Provider";
          case l:
            return W(L, L.render, "ForwardRef");
          case d:
            var Ee = L.displayName || null;
            return Ee !== null ? Ee : X(L.type) || "Memo";
          case f: {
            var B = L, ut = B._payload, Ke = B._init;
            try {
              return X(Ke(ut));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, k, C, A, H, K, R, I;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function J() {
      {
        if (M === 0) {
          k = console.log, C = console.info, A = console.warn, H = console.error, K = console.group, R = console.groupCollapsed, I = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        M++;
      }
    }
    function Z() {
      {
        if (M--, M === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, L, {
              value: k
            }),
            info: P({}, L, {
              value: C
            }),
            warn: P({}, L, {
              value: A
            }),
            error: P({}, L, {
              value: H
            }),
            group: P({}, L, {
              value: K
            }),
            groupCollapsed: P({}, L, {
              value: R
            }),
            groupEnd: P({}, L, {
              value: I
            })
          });
        }
        M < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = S.ReactCurrentDispatcher, ge;
    function ve(L, re, we) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (B) {
            var Ee = B.stack.trim().match(/\n( *(at )?)/);
            ge = Ee && Ee[1] || "";
          }
        return `
` + ge + L;
      }
    }
    var ue = !1, ae;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ye();
    }
    function Xe(L, re) {
      if (!L || ue)
        return "";
      {
        var we = ae.get(L);
        if (we !== void 0)
          return we;
      }
      var Ee;
      ue = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ut;
      ut = se.current, se.current = null, J();
      try {
        if (re) {
          var Ke = function() {
            throw Error();
          };
          if (Object.defineProperty(Ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ke, []);
            } catch (Dt) {
              Ee = Dt;
            }
            Reflect.construct(L, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Dt) {
              Ee = Dt;
            }
            L.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            Ee = Dt;
          }
          L();
        }
      } catch (Dt) {
        if (Dt && Ee && typeof Dt.stack == "string") {
          for (var je = Dt.stack.split(`
`), Ht = Ee.stack.split(`
`), pt = je.length - 1, wt = Ht.length - 1; pt >= 1 && wt >= 0 && je[pt] !== Ht[wt]; )
            wt--;
          for (; pt >= 1 && wt >= 0; pt--, wt--)
            if (je[pt] !== Ht[wt]) {
              if (pt !== 1 || wt !== 1)
                do
                  if (pt--, wt--, wt < 0 || je[pt] !== Ht[wt]) {
                    var Kt = `
` + je[pt].replace(" at new ", " at ");
                    return L.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", L.displayName)), typeof L == "function" && ae.set(L, Kt), Kt;
                  }
                while (pt >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = ut, Z(), Error.prepareStackTrace = B;
      }
      var Hn = L ? L.displayName || L.name : "", In = Hn ? ve(Hn) : "";
      return typeof L == "function" && ae.set(L, In), In;
    }
    function tt(L, re, we) {
      return Xe(L, !1);
    }
    function Ge(L) {
      var re = L.prototype;
      return !!(re && re.isReactComponent);
    }
    function Qe(L, re, we) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Xe(L, Ge(L));
      if (typeof L == "string")
        return ve(L);
      switch (L) {
        case u:
          return ve("Suspense");
        case c:
          return ve("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case l:
            return tt(L.render);
          case d:
            return Qe(L.type, re, we);
          case f: {
            var Ee = L, B = Ee._payload, ut = Ee._init;
            try {
              return Qe(ut(B), re, we);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, me = {}, $e = S.ReactDebugCurrentFrame;
    function Te(L) {
      if (L) {
        var re = L._owner, we = Qe(L.type, L._source, re ? re.type : null);
        $e.setExtraStackFrame(we);
      } else
        $e.setExtraStackFrame(null);
    }
    function at(L, re, we, Ee, B) {
      {
        var ut = Function.call.bind(q);
        for (var Ke in L)
          if (ut(L, Ke)) {
            var je = void 0;
            try {
              if (typeof L[Ke] != "function") {
                var Ht = Error((Ee || "React class") + ": " + we + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ht.name = "Invariant Violation", Ht;
              }
              je = L[Ke](re, Ke, Ee, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              je = pt;
            }
            je && !(je instanceof Error) && (Te(B), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", we, Ke, typeof je), Te(null)), je instanceof Error && !(je.message in me) && (me[je.message] = !0, Te(B), h("Failed %s type: %s", we, je.message), Te(null));
          }
      }
    }
    var Ie = Array.isArray;
    function et(L) {
      return Ie(L);
    }
    function it(L) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, we = re && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return we;
      }
    }
    function dt(L) {
      try {
        return St(L), !1;
      } catch {
        return !0;
      }
    }
    function St(L) {
      return "" + L;
    }
    function ce(L) {
      if (dt(L))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(L)), St(L);
    }
    var Be = S.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rn, Xt;
    function Ne(L) {
      if (q.call(L, "ref")) {
        var re = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function $t(L) {
      if (q.call(L, "key")) {
        var re = Object.getOwnPropertyDescriptor(L, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Re(L, re) {
      typeof L.ref == "string" && Be.current;
    }
    function We(L, re) {
      {
        var we = function() {
          rn || (rn = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function lt(L, re) {
      {
        var we = function() {
          Xt || (Xt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var Bt = function(L, re, we, Ee, B, ut, Ke) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: L,
        key: re,
        ref: we,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: ut
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
        value: Ee
      }), Object.defineProperty(je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function zn(L, re, we, Ee, B) {
      {
        var ut, Ke = {}, je = null, Ht = null;
        we !== void 0 && (ce(we), je = "" + we), $t(re) && (ce(re.key), je = "" + re.key), Ne(re) && (Ht = re.ref, Re(re, B));
        for (ut in re)
          q.call(re, ut) && !pe.hasOwnProperty(ut) && (Ke[ut] = re[ut]);
        if (L && L.defaultProps) {
          var pt = L.defaultProps;
          for (ut in pt)
            Ke[ut] === void 0 && (Ke[ut] = pt[ut]);
        }
        if (je || Ht) {
          var wt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          je && We(Ke, wt), Ht && lt(Ke, wt);
        }
        return Bt(L, je, Ht, B, Ee, Be.current, Ke);
      }
    }
    var kn = S.ReactCurrentOwner, At = S.ReactDebugCurrentFrame;
    function Pt(L) {
      if (L) {
        var re = L._owner, we = Qe(L.type, L._source, re ? re.type : null);
        At.setExtraStackFrame(we);
      } else
        At.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function zt(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function yt() {
      {
        if (kn.current) {
          var L = X(kn.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Dn(L) {
      return "";
    }
    var wn = {};
    function Gt(L) {
      {
        var re = yt();
        if (!re) {
          var we = typeof L == "string" ? L : L.displayName || L.name;
          we && (re = `

Check the top-level render call using <` + we + ">.");
        }
        return re;
      }
    }
    function Qn(L, re) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var we = Gt(re);
        if (wn[we])
          return;
        wn[we] = !0;
        var Ee = "";
        L && L._owner && L._owner !== kn.current && (Ee = " It was passed a child from " + X(L._owner.type) + "."), Pt(L), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Ee), Pt(null);
      }
    }
    function er(L, re) {
      {
        if (typeof L != "object")
          return;
        if (et(L))
          for (var we = 0; we < L.length; we++) {
            var Ee = L[we];
            zt(Ee) && Qn(Ee, re);
          }
        else if (zt(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var B = x(L);
          if (typeof B == "function" && B !== L.entries)
            for (var ut = B.call(L), Ke; !(Ke = ut.next()).done; )
              zt(Ke.value) && Qn(Ke.value, re);
        }
      }
    }
    function mr(L) {
      {
        var re = L.type;
        if (re == null || typeof re == "string")
          return;
        var we;
        if (typeof re == "function")
          we = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === d))
          we = re.propTypes;
        else
          return;
        if (we) {
          var Ee = X(re);
          at(we, L.props, "prop", Ee, L);
        } else if (re.PropTypes !== void 0 && !jt) {
          jt = !0;
          var B = X(re);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(L) {
      {
        for (var re = Object.keys(L.props), we = 0; we < re.length; we++) {
          var Ee = re[we];
          if (Ee !== "children" && Ee !== "key") {
            Pt(L), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), Pt(null);
            break;
          }
        }
        L.ref !== null && (Pt(L), h("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var yr = {};
    function Vr(L, re, we, Ee, B, ut) {
      {
        var Ke = D(L);
        if (!Ke) {
          var je = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ht = Dn();
          Ht ? je += Ht : je += yt();
          var pt;
          L === null ? pt = "null" : et(L) ? pt = "array" : L !== void 0 && L.$$typeof === t ? (pt = "<" + (X(L.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof L, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, je);
        }
        var wt = zn(L, re, we, B, ut);
        if (wt == null)
          return wt;
        if (Ke) {
          var Kt = re.children;
          if (Kt !== void 0)
            if (Ee)
              if (et(Kt)) {
                for (var Hn = 0; Hn < Kt.length; Hn++)
                  er(Kt[Hn], L);
                Object.freeze && Object.freeze(Kt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(Kt, L);
        }
        if (q.call(re, "key")) {
          var In = X(L), Dt = Object.keys(re).filter(function(Qr) {
            return Qr !== "key";
          }), wr = Dt.length > 0 ? "{key: someKey, " + Dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yr[In + wr]) {
            var Jr = Dt.length > 0 ? "{" + Dt.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wr, In, Jr, In), yr[In + wr] = !0;
          }
        }
        return L === r ? tr(wt) : mr(wt), wt;
      }
    }
    function Vo(L, re, we) {
      return Vr(L, re, we, !0);
    }
    function Lo(L, re, we) {
      return Vr(L, re, we, !1);
    }
    var Ao = Lo, zo = Vo;
    Io.Fragment = r, Io.jsx = Ao, Io.jsxs = zo;
  }()), Io;
}
var tu;
function Iv() {
  return tu || (tu = 1, process.env.NODE_ENV === "production" ? Li.exports = Dv() : Li.exports = Hv()), Li.exports;
}
var Bv = Iv(), Bo = Ws(), jv = Object.defineProperty, lc = (e) => {
  throw TypeError(e);
}, Yv = (e, t, n) => t in e ? jv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sn = (e, t, n) => Yv(e, typeof t != "symbol" ? t + "" : t, n), Xs = (e, t, n) => t.has(e) || lc("Cannot " + n), Nt = (e, t, n) => (Xs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), oo = (e, t, n) => t.has(e) ? lc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qi = (e, t, n, r) => (Xs(e, t, "write to private field"), t.set(e, n), n), Zv = (e, t, n) => (Xs(e, t, "access private method"), n);
const Wv = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Wv);
let Eo = !1, Xv = !1;
function Kv() {
  Eo = !0;
}
Kv();
const Ks = 1, Fs = 2, uc = 4, Fv = 8, qv = 16, Uv = 1, Gv = 2, cc = 4, Jv = 8, Qv = 16, dc = 1, ep = 2, fc = "[", qs = "[!", Us = "]", ao = {}, on = Symbol(), vc = "http://www.w3.org/2000/svg", tp = !1, Tn = 2, pc = 4, Sa = 8, Gs = 16, pr = 32, So = 64, ea = 128, _n = 256, ta = 512, Ut = 1024, gr = 2048, Wr = 4096, sr = 8192, Pa = 16384, np = 32768, Po = 65536, rp = 1 << 17, op = 1 << 19, gc = 1 << 20, kr = Symbol("$state"), Js = Symbol("legacy props"), ip = Symbol("");
var vi = Array.isArray, ap = Array.prototype.indexOf, Qs = Array.from, na = Object.keys, Go = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, hc = Object.getOwnPropertyDescriptors, sp = Object.prototype, lp = Array.prototype, el = Object.getPrototypeOf;
function jo(e) {
  return typeof e == "function";
}
const Zt = () => {
};
function up(e) {
  return e();
}
function Jo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ra = !1, oa = !1, ys = [], ws = [];
function mc() {
  ra = !1;
  const e = ys.slice();
  ys = [], Jo(e);
}
function yc() {
  oa = !1;
  const e = ws.slice();
  ws = [], Jo(e);
}
function pi(e) {
  ra || (ra = !0, queueMicrotask(mc)), ys.push(e);
}
function dp(e) {
  oa || (oa = !0, cp(yc)), ws.push(e);
}
function fp() {
  ra && mc(), oa && yc();
}
function wc(e) {
  return e === this.v;
}
function tl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function nl(e) {
  return !tl(e, this.v);
}
function vp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function mp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function yp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function wp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xp() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function _p() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ln(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wc,
    rv: 0,
    wv: 0
  };
  return n;
}
function bs(e) {
  return /* @__PURE__ */ bc(ln(e));
}
// @__NO_SIDE_EFFECTS__
function gi(e, t = !1) {
  var n;
  const r = ln(e);
  return t || (r.equals = nl), Eo && st !== null && st.l !== null && ((n = st.l).s ?? (n.s = [])).push(r), r;
}
function fe(e, t = !1) {
  return /* @__PURE__ */ bc(/* @__PURE__ */ gi(e, t));
}
// @__NO_SIDE_EFFECTS__
function bc(e) {
  return vt !== null && !jn && vt.f & Tn && (Yn === null ? Ep([e]) : Yn.push(e)), e;
}
function ie(e, t) {
  return vt !== null && !jn && Va() && vt.f & (Tn | Gs) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Yn === null || !Yn.includes(e)) && _p(), xs(e, t);
}
function xs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Oc(), xc(e, gr), Va() && ct !== null && ct.f & Ut && !(ct.f & (pr | So)) && (rr === null ? Sp([e]) : rr.push(e))), t;
}
function nu(e, t = 1) {
  var n = p(e), r = t === 1 ? n++ : n--;
  return ie(e, n), r;
}
function xc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Va(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & gr || !r && i === ct || (Rn(i, t), s & (Ut | _n) && (s & Tn ? xc(
        /** @type {Derived} */
        i,
        Wr
      ) : Ma(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  var t = Tn | gr, n = vt !== null && vt.f & Tn ? (
    /** @type {Derived} */
    vt
  ) : null;
  return ct === null || n !== null && n.f & _n ? t |= _n : ct.f |= gc, {
    ctx: st,
    deps: null,
    effects: null,
    equals: wc,
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
  const t = /* @__PURE__ */ Je(e);
  return t.equals = nl, t;
}
function _c(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      $n(
        /** @type {Effect} */
        t[n]
      );
  }
}
function $p(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Tn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Cp(e) {
  var t, n = ct;
  Tr($p(e));
  try {
    _c(e), t = Rc(e);
  } finally {
    Tr(n);
  }
  return t;
}
function $c(e) {
  var t = Cp(e), n = ($r || e.f & _n) && e.deps !== null ? Wr : Ut;
  Rn(e, n), e.equals(t) || (e.v = t, e.wv = Oc());
}
function Oa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ae = !1;
function vn(e) {
  Ae = e;
}
let Ue;
function tn(e) {
  if (e === null)
    throw Oa(), ao;
  return Ue = e;
}
function Xn() {
  return tn(
    /** @type {TemplateNode} */
    /* @__PURE__ */ qn(Ue)
  );
}
function ee(e) {
  if (Ae) {
    if (/* @__PURE__ */ qn(Ue) !== null)
      throw Oa(), ao;
    Ue = e;
  }
}
function ot(e = 1) {
  if (Ae) {
    for (var t = e, n = Ue; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ qn(n);
    Ue = n;
  }
}
function _s() {
  for (var e = 0, t = Ue; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Us) {
        if (e === 0) return t;
        e -= 1;
      } else (n === fc || n === qs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qn(t)
    );
    t.remove(), t = r;
  }
}
function Bn(e, t = null, n) {
  if (typeof e != "object" || e === null || kr in e)
    return e;
  const r = el(e);
  if (r !== sp && r !== lp)
    return e;
  var o = /* @__PURE__ */ new Map(), a = vi(e), i = ln(0);
  a && o.set("length", ln(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && wp();
        var d = o.get(u);
        return d === void 0 ? (d = ln(c.value), o.set(u, d)) : ie(d, Bn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, ln(on));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && ie(d, f);
          }
          ie(c, on), ru(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === kr)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = lr(l, u)) != null && d.writable) && (f = ln(Bn(v ? l[u] : on, s)), o.set(u, f)), f !== void 0) {
          var m = p(f);
          return m === on ? void 0 : m;
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
          if (f !== void 0 && v !== on)
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
        if (u === kr)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== on || Reflect.has(l, u);
        if (d !== void 0 || ct !== null && (!f || (c = lr(l, u)) != null && c.writable)) {
          d === void 0 && (d = ln(f ? Bn(l[u], s) : on), o.set(u, d));
          var v = p(d);
          if (v === on)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), m = u in l;
        if (a && u === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var x = o.get(_ + "");
            x !== void 0 ? ie(x, on) : _ in l && (x = ln(on), o.set(_ + "", x));
          }
        v === void 0 ? (!m || (f = lr(l, u)) != null && f.writable) && (v = ln(void 0), ie(v, Bn(c, s)), o.set(u, v)) : (m = v.v !== on, ie(v, Bn(c, s)));
        var S = Reflect.getOwnPropertyDescriptor(l, u);
        if (S != null && S.set && S.set.call(d, c), !m) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= h.v && ie(h, $ + 1);
          }
          ru(i);
        }
        return !0;
      },
      ownKeys(l) {
        p(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== on;
        });
        for (var [c, d] of o)
          d.v !== on && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        bp();
      }
    }
  );
}
function ru(e, t = 1) {
  ie(e, e.v + t);
}
var an, Cc, kc, Ec;
function $s() {
  if (an === void 0) {
    an = window, Cc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    kc = lr(t, "firstChild").get, Ec = lr(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function cr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return kc.call(e);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return Ec.call(e);
}
function te(e, t) {
  if (!Ae)
    return /* @__PURE__ */ Qt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(Ue)
  );
  if (n === null)
    n = Ue.appendChild(cr());
  else if (t && n.nodeType !== 3) {
    var r = cr();
    return n == null || n.before(r), tn(r), r;
  }
  return tn(n), n;
}
function Me(e, t) {
  if (!Ae) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ qn(n) : n;
  }
  return Ue;
}
function G(e, t = 1, n = !1) {
  let r = Ae ? Ue : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ qn(r);
  if (!Ae)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = cr();
    return r === null ? o == null || o.after(i) : r.before(i), tn(i), i;
  }
  return tn(r), /** @type {TemplateNode} */
  r;
}
function rl(e) {
  e.textContent = "";
}
const Sc = 0, kp = 1;
let Zi = !1, Wi = Sc, Qo = !1, ei = null, so = !1, ol = !1;
function ou(e) {
  so = e;
}
function iu(e) {
  ol = e;
}
let Ar = [], lo = 0, vt = null, jn = !1;
function Or(e) {
  vt = e;
}
let ct = null;
function Tr(e) {
  ct = e;
}
let Yn = null;
function Ep(e) {
  Yn = e;
}
let Jt = null, dn = 0, rr = null;
function Sp(e) {
  rr = e;
}
let Pc = 1, ia = 0, $r = !1;
function Oc() {
  return ++Pc;
}
function Oo(e) {
  var t, n = e.f;
  if (n & gr)
    return !0;
  if (n & Wr) {
    var r = e.deps, o = (n & _n) !== 0;
    if (r !== null) {
      var a, i, s = (n & ta) !== 0, l = o && ct !== null && !$r, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ta), l && d !== null && !(d.f & _n) && (c.f ^= _n);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], Oo(
          /** @type {Derived} */
          i
        ) && $c(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || ct !== null && !$r) && Rn(e, Ut);
  }
  return !1;
}
function Pp(e, t) {
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
  throw Zi = !1, e;
}
function Op(e) {
  return (e.f & Pa) === 0 && (e.parent === null || (e.parent.f & ea) === 0);
}
function Ta(e, t, n, r) {
  if (Zi) {
    if (n === null && (Zi = !1), Op(t))
      throw e;
    return;
  }
  n !== null && (Zi = !0);
  {
    Pp(e, t);
    return;
  }
}
function Tc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & Tn ? Tc(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Rn(a, gr) : a.f & Ut && Rn(a, Wr), Ma(
        /** @type {Effect} */
        a
      ));
    }
}
function Rc(e) {
  var t, n = Jt, r = dn, o = rr, a = vt, i = $r, s = Yn, l = st, u = jn, c = e.f;
  Jt = /** @type {null | Value[]} */
  null, dn = 0, rr = null, vt = c & (pr | So) ? null : e, $r = (c & _n) !== 0 && (!so || a === null || u), Yn = null, au(e.ctx), jn = !1, ia++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Jt !== null) {
      var v;
      if (aa(e, dn), f !== null && dn > 0)
        for (f.length = dn + Jt.length, v = 0; v < Jt.length; v++)
          f[dn + v] = Jt[v];
      else
        e.deps = f = Jt;
      if (!$r)
        for (v = dn; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && dn < f.length && (aa(e, dn), f.length = dn);
    if (Va() && rr !== null && !jn && f !== null && !(e.f & (Tn | Wr | gr)))
      for (v = 0; v < /** @type {Source[]} */
      rr.length; v++)
        Tc(
          rr[v],
          /** @type {Effect} */
          e
        );
    return a !== null && ia++, d;
  } finally {
    Jt = n, dn = r, rr = o, vt = a, $r = i, Yn = s, au(l), jn = u;
  }
}
function Tp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ap.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Jt === null || !Jt.includes(t)) && (Rn(t, Wr), t.f & (_n | ta) || (t.f ^= ta), _c(
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
      Tp(e, n[r]);
}
function Ra(e) {
  var t = e.f;
  if (!(t & Pa)) {
    Rn(e, Ut);
    var n = ct, r = st;
    ct = e;
    try {
      t & Gs ? Hp(e) : zc(e), Ac(e);
      var o = Rc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Pc;
      var a = e.deps, i;
      tp && Xv && e.f & gr;
    } catch (s) {
      Ta(s, e, n, r || e.ctx);
    } finally {
      ct = n;
    }
  }
}
function Mc() {
  if (lo > 1e3) {
    lo = 0;
    try {
      hp();
    } catch (e) {
      if (ei !== null)
        Ta(e, ei, null);
      else
        throw e;
    }
  }
  lo++;
}
function Nc(e) {
  var t = e.length;
  if (t !== 0) {
    Mc();
    var n = so;
    so = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & Ut || (o.f ^= Ut);
        var a = Np(o);
        Rp(a);
      }
    } finally {
      so = n;
    }
  }
}
function Rp(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Pa | sr)))
        try {
          Oo(r) && (Ra(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Dc(r) : r.fn = null));
        } catch (o) {
          Ta(o, r, null, r.ctx);
        }
    }
}
function Mp() {
  if (Qo = !1, lo > 1001)
    return;
  const e = Ar;
  Ar = [], Nc(e), Qo || (lo = 0, ei = null);
}
function Ma(e) {
  Wi === Sc && (Qo || (Qo = !0, queueMicrotask(Mp))), ei = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (So | pr)) {
      if (!(n & Ut)) return;
      t.f ^= Ut;
    }
  }
  Ar.push(t);
}
function Np(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & pr) !== 0, a = o && (r & Ut) !== 0, i = n.next;
    if (!a && !(r & sr)) {
      if (r & pc)
        t.push(n);
      else if (o)
        n.f ^= Ut;
      else {
        var s = vt;
        try {
          vt = n, Oo(n) && Ra(n);
        } catch (c) {
          Ta(c, n, null, n.ctx);
        } finally {
          vt = s;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    if (i === null) {
      let c = n.parent;
      for (; c !== null; ) {
        if (e === c)
          break e;
        var u = c.next;
        if (u !== null) {
          n = u;
          continue e;
        }
        c = c.parent;
      }
    }
    n = i;
  }
  return t;
}
function y(e) {
  var t = Wi, n = Ar;
  try {
    Mc();
    const o = [];
    Wi = kp, Ar = o, Qo = !1, Nc(n);
    var r = e == null ? void 0 : e();
    return fp(), (Ar.length > 0 || o.length > 0) && y(), lo = 0, ei = null, r;
  } finally {
    Wi = t, Ar = n;
  }
}
function p(e) {
  var t = e.f, n = (t & Tn) !== 0;
  if (vt !== null && !jn) {
    Yn !== null && Yn.includes(e) && xp();
    var r = vt.deps;
    e.rv < ia && (e.rv = ia, Jt === null && r !== null && r[dn] === e ? dn++ : Jt === null ? Jt = [e] : (!$r || !Jt.includes(e)) && Jt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & _n) && (o.f ^= _n);
  }
  return n && (o = /** @type {Derived} */
  e, Oo(o) && $c(o)), e.v;
}
function Kn(e) {
  var t = jn;
  try {
    return jn = !0, e();
  } finally {
    jn = t;
  }
}
const Vp = -7169;
function Rn(e, t) {
  e.f = e.f & Vp | t;
}
function oe(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (kr in e)
      Cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && kr in n && Cs(n);
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
    const n = el(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = hc(n);
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
function Vc(e) {
  ct === null && vt === null && gp(), vt !== null && vt.f & _n && ct === null && pp(), ol && vp();
}
function Lp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Xr(e, t, n, r = !0) {
  var o = (e & So) !== 0, a = ct, i = {
    ctx: st,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | gr,
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
  if (n) {
    var s = so;
    try {
      ou(!0), Ra(i), i.f |= np;
    } catch (c) {
      throw $n(i), c;
    } finally {
      ou(s);
    }
  } else t !== null && Ma(i);
  var l = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (gc | ea)) === 0;
  if (!l && !o && r && (a !== null && Lp(i, a), vt !== null && vt.f & Tn)) {
    var u = (
      /** @type {Derived} */
      vt
    );
    (u.effects ?? (u.effects = [])).push(i);
  }
  return i;
}
function Lc(e) {
  const t = Xr(Sa, null, !1);
  return Rn(t, Ut), t.teardown = e, t;
}
function sa(e) {
  Vc();
  var t = ct !== null && (ct.f & pr) !== 0 && st !== null && !st.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      st
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: ct,
      reaction: vt
    });
  } else {
    var r = fn(e);
    return r;
  }
}
function Ap(e) {
  return Vc(), To(e);
}
function zp(e) {
  const t = Xr(So, e, !0);
  return () => {
    $n(t);
  };
}
function Dp(e) {
  const t = Xr(So, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? go(t, () => {
      $n(t), r(void 0);
    }) : ($n(t), r(void 0));
  });
}
function fn(e) {
  return Xr(pc, e, !1);
}
function _e(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    st
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = To(() => {
    e(), !r.ran && (r.ran = !0, ie(n.l.r2, !0), Kn(t));
  });
}
function Wt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    st
  );
  To(() => {
    if (p(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Ut && Rn(n, Wr), Oo(n) && Ra(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function To(e) {
  return Xr(Sa, e, !0);
}
function He(e, t = [], n = Je) {
  const r = t.map(n);
  return Kr(() => e(...r.map(p)));
}
function Kr(e, t = 0) {
  return Xr(Sa | Gs | t, e, !0);
}
function dr(e, t = !0) {
  return Xr(Sa | pr, e, !0, t);
}
function Ac(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ol, r = vt;
    iu(!0), Or(null);
    try {
      t.call(null);
    } finally {
      iu(n), Or(r);
    }
  }
}
function zc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    $n(n, t), n = r;
  }
}
function Hp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & pr || $n(t), t = n;
  }
}
function $n(e, t = !0) {
  var n = !1;
  if ((t || e.f & op) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  zc(e, t && !n), aa(e, 0), Rn(e, Pa);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  Ac(e);
  var s = e.parent;
  s !== null && s.first !== null && Dc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Dc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function go(e, t) {
  var n = [];
  il(e, n, !0), Hc(n, () => {
    $n(e), t && t();
  });
}
function Hc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function il(e, t, n) {
  if (!(e.f & sr)) {
    if (e.f ^= sr, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Po) !== 0 || (r.f & pr) !== 0;
      il(r, t, a ? n : !1), r = o;
    }
  }
}
function ti(e) {
  Ic(e, !0);
}
function Ic(e, t) {
  if (e.f & sr) {
    e.f ^= sr, e.f & Ut || (e.f ^= Ut), Oo(e) && (Rn(e, gr), Ma(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Po) !== 0 || (n.f & pr) !== 0;
      Ic(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Na(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let st = null;
function au(e) {
  st = e;
}
function Hr(e) {
  return (
    /** @type {T} */
    al().get(e)
  );
}
function ho(e, t) {
  return al().set(e, t), t;
}
function Ip(e) {
  return al().has(e);
}
function Ce(e, t = !1, n) {
  st = {
    p: st,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Eo && !t && (st.l = {
    s: null,
    u: null,
    r1: [],
    r2: ln(!1)
  });
}
function ke(e) {
  const t = st;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = ct, r = vt;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Tr(a.effect), Or(a.reaction), fn(a.fn);
        }
      } finally {
        Tr(n), Or(r);
      }
    }
    st = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Va() {
  return !Eo || st !== null && st.l === null;
}
function al(e) {
  return st === null && Na(), st.c ?? (st.c = new Map(Bp(st) || void 0));
}
function Bp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function jp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Yp = [
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
function Zp(e) {
  return Yp.includes(e);
}
const Wp = {
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
function Xp(e) {
  return e = e.toLowerCase(), Wp[e] ?? e;
}
const Kp = ["touchstart", "touchmove"];
function Fp(e) {
  return Kp.includes(e);
}
const qp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Up(e) {
  return qp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Gp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, pi(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Jp(e) {
  Ae && /* @__PURE__ */ Qt(e) !== null && rl(e);
}
let su = !1;
function Qp() {
  su || (su = !0, document.addEventListener(
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
function eg(e) {
  var t = vt, n = ct;
  Or(null), Tr(null);
  try {
    return e();
  } finally {
    Or(t), Tr(n);
  }
}
const Bc = /* @__PURE__ */ new Set(), ks = /* @__PURE__ */ new Set();
function jc(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Xo.call(t, a), !a.cancelBubble)
      return eg(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pi(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function gt(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = jc(e, t, n, a);
  (t === document.body || t === window || t === document) && Lc(() => {
    t.removeEventListener(e, i, a);
  });
}
function La(e) {
  for (var t = 0; t < e.length; t++)
    Bc.add(e[t]);
  for (var n of ks)
    n(e);
}
function Xo(e) {
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
    Go(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = vt, f = ct;
    Or(null), Tr(null);
    try {
      for (var v, m = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (vi(x)) {
              var [S, ...h] = x;
              S.apply(i, [e, ...h]);
            } else
              x.call(i, e);
        } catch ($) {
          v ? m.push($) : v = $;
        }
        if (e.cancelBubble || _ === n || _ === null)
          break;
        i = _;
      }
      if (v) {
        for (let $ of m)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Or(d), Tr(f);
    }
  }
}
function sl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function cn(e, t) {
  var n = (
    /** @type {Effect} */
    ct
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  var n = (t & dc) !== 0, r = (t & ep) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Ae)
      return cn(Ue, null), Ue;
    o === void 0 && (o = sl(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Qt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || Cc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      cn(s, l);
    } else
      cn(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function De(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & dc) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Ae)
      return cn(Ue, null), Ue;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        sl(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Qt(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ Qt(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Qt(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ Qt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      cn(c, d);
    } else
      cn(u, u);
    return u;
  };
}
function bt(e = "") {
  if (!Ae) {
    var t = cr(e + "");
    return cn(t, t), t;
  }
  var n = Ue;
  return n.nodeType !== 3 && (n.before(n = cr()), tn(n)), cn(n, n), n;
}
function ht() {
  if (Ae)
    return cn(Ue, null), Ue;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = cr();
  return e.append(t, n), cn(t, n), e;
}
function Y(e, t) {
  if (Ae) {
    ct.nodes_end = Ue, Xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Un(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Yc(e, t) {
  return Zc(e, t);
}
function tg(e, t) {
  $s(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ae, o = Ue;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== fc); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ qn(a);
    if (!a)
      throw ao;
    vn(!0), tn(
      /** @type {Comment} */
      a
    ), Xn();
    const i = Zc(e, { ...t, anchor: a });
    if (Ue === null || Ue.nodeType !== 8 || /** @type {Comment} */
    Ue.data !== Us)
      throw Oa(), ao;
    return vn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === ao)
      return t.recover === !1 && mp(), $s(), rl(n), vn(!1), Yc(e, t);
    throw i;
  } finally {
    vn(r), tn(o);
  }
}
const no = /* @__PURE__ */ new Map();
function Zc(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  $s();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var m = Fp(v);
        t.addEventListener(v, Xo, { passive: m });
        var _ = no.get(v);
        _ === void 0 ? (document.addEventListener(v, Xo, { passive: m }), no.set(v, 1)) : no.set(v, _ + 1);
      }
    }
  };
  l(Qs(Bc)), ks.add(l);
  var u = void 0, c = Dp(() => {
    var d = n ?? t.appendChild(cr());
    return dr(() => {
      if (a) {
        Ce({});
        var f = (
          /** @type {ComponentContext} */
          st
        );
        f.c = a;
      }
      o && (r.$$events = o), Ae && cn(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ae && (ct.nodes_end = Ue), a && ke();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Xo);
        var m = (
          /** @type {number} */
          no.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, Xo), no.delete(v)) : no.set(v, m);
      }
      ks.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Es.set(u, c), u;
}
let Es = /* @__PURE__ */ new WeakMap();
function ng(e, t) {
  const n = Es.get(e);
  return n ? (Es.delete(e), n(t)) : Promise.resolve();
}
function Le(e, t, n = !1) {
  Ae && Xn();
  var r = e, o = null, a = null, i = on, s = n ? Po : 0, l = !1;
  const u = (d, f = !0) => {
    l = !0, c(f, d);
  }, c = (d, f) => {
    if (i === (i = d)) return;
    let v = !1;
    if (Ae) {
      const m = (
        /** @type {Comment} */
        r.data === qs
      );
      !!i === m && (r = _s(), tn(r), vn(!1), v = !0);
    }
    i ? (o ? ti(o) : f && (o = dr(() => f(r))), a && go(a, () => {
      a = null;
    })) : (a ? ti(a) : f && (a = dr(() => f(r))), o && go(o, () => {
      o = null;
    })), v && vn(!0);
  };
  Kr(() => {
    l = !1, t(u), l || c(null, null);
  }, s), Ae && (r = Ue);
}
function Aa(e, t) {
  return t;
}
function rg(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    il(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    rl(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), xr(e, t[0].prev, t[a - 1].next);
  }
  Hc(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), xr(e, c.prev, c.next)), $n(c.e, !s);
    }
  });
}
function gn(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & uc) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Ae ? tn(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Qt(u)
    ) : u.appendChild(cr());
  }
  Ae && Xn();
  var c = null, d = !1, f = /* @__PURE__ */ Pe(() => {
    var v = n();
    return vi(v) ? v : v == null ? [] : Qs(v);
  });
  Kr(() => {
    var v = p(f), m = v.length;
    if (d && m === 0)
      return;
    d = m === 0;
    let _ = !1;
    if (Ae) {
      var x = (
        /** @type {Comment} */
        i.data === qs
      );
      x !== (m === 0) && (i = _s(), tn(i), vn(!1), _ = !0);
    }
    if (Ae) {
      for (var S = null, h, $ = 0; $ < m; $++) {
        if (Ue.nodeType === 8 && /** @type {Comment} */
        Ue.data === Us) {
          i = /** @type {Comment} */
          Ue, _ = !0, vn(!1);
          break;
        }
        var b = v[$], E = r(b, $);
        h = Wc(
          Ue,
          s,
          S,
          null,
          b,
          E,
          $,
          o,
          t,
          n
        ), s.items.set(E, h), S = h;
      }
      m > 0 && tn(_s());
    }
    Ae || og(v, s, i, o, t, r, n), a !== null && (m === 0 ? c ? ti(c) : c = dr(() => a(i)) : c !== null && go(c, () => {
      c = null;
    })), _ && vn(!0), p(f);
  }), Ae && (i = Ue);
}
function og(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & Fv) !== 0, f = (o & (Ks | Fs)) !== 0, v = e.length, m = t.items, _ = t.first, x = _, S, h = null, $, b = [], E = [], O, T, N, z;
  if (d)
    for (z = 0; z < v; z += 1)
      O = e[z], T = a(O, z), N = m.get(T), N !== void 0 && ((s = N.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(N));
  for (z = 0; z < v; z += 1) {
    if (O = e[z], T = a(O, z), N = m.get(T), N === void 0) {
      var D = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Wc(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        O,
        T,
        z,
        r,
        o,
        i
      ), m.set(T, h), b = [], E = [], x = h.next;
      continue;
    }
    if (f && ig(N, O, z, o), N.e.f & sr && (ti(N.e), d && ((l = N.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(N))), N !== x) {
      if (S !== void 0 && S.has(N)) {
        if (b.length < E.length) {
          var W = E[0], j;
          h = W.prev;
          var X = b[0], P = b[b.length - 1];
          for (j = 0; j < b.length; j += 1)
            lu(b[j], W, n);
          for (j = 0; j < E.length; j += 1)
            S.delete(E[j]);
          xr(t, X.prev, P.next), xr(t, h, X), xr(t, P, W), x = W, h = P, z -= 1, b = [], E = [];
        } else
          S.delete(N), lu(N, x, n), xr(t, N.prev, N.next), xr(t, N, h === null ? t.first : h.next), xr(t, h, N), h = N;
        continue;
      }
      for (b = [], E = []; x !== null && x.k !== T; )
        x.e.f & sr || (S ?? (S = /* @__PURE__ */ new Set())).add(x), E.push(x), x = x.next;
      if (x === null)
        continue;
      N = x;
    }
    b.push(N), h = N, x = N.next;
  }
  if (x !== null || S !== void 0) {
    for (var M = S === void 0 ? [] : Qs(S); x !== null; )
      x.e.f & sr || M.push(x), x = x.next;
    var k = M.length;
    if (k > 0) {
      var C = o & uc && v === 0 ? n : null;
      if (d) {
        for (z = 0; z < k; z += 1)
          (u = M[z].a) == null || u.measure();
        for (z = 0; z < k; z += 1)
          (c = M[z].a) == null || c.fix();
      }
      rg(t, M, C, m);
    }
  }
  d && pi(() => {
    var A;
    if ($ !== void 0)
      for (N of $)
        (A = N.a) == null || A.apply();
  }), ct.first = t.first && t.first.e, ct.last = h && h.e;
}
function ig(e, t, n, r) {
  r & Ks && xs(e.v, t), r & Fs ? xs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Wc(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Ks) !== 0, d = (l & qv) === 0, f = c ? d ? /* @__PURE__ */ gi(o) : ln(o) : o, v = l & Fs ? ln(i) : i, m = {
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
    return m.e = dr(() => s(e, f, v, u), Ae), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? t.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function lu(e, t, n) {
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
      /* @__PURE__ */ qn(a)
    );
    o.before(a), a = i;
  }
}
function xr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Xc(e, t, n, r, o) {
  var a = e, i = "", s;
  Kr(() => {
    if (i === (i = t() ?? "")) {
      Ae && Xn();
      return;
    }
    s !== void 0 && ($n(s), s = void 0), i !== "" && (s = dr(() => {
      if (Ae) {
        Ue.data;
        for (var l = Xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ qn(l);
        if (l === null)
          throw Oa(), ao;
        cn(Ue, u), a = tn(l);
        return;
      }
      var c = i + "", d = sl(c);
      cn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function qt(e, t, n, r, o) {
  var a;
  Ae && Xn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function ag(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function mo(e, t, ...n) {
  var r = e, o = Zt, a;
  Kr(() => {
    o !== (o = t()) && (a && ($n(a), a = null), a = dr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Po), Ae && (r = Ue);
}
function Kc(e, t, n) {
  Ae && Xn();
  var r = e, o, a;
  Kr(() => {
    o !== (o = t()) && (a && (go(a), a = null), o && (a = dr(() => n(r, o))));
  }, Po), Ae && (r = Ue);
}
function sg(e, t, n, r, o, a) {
  let i = Ae;
  Ae && Xn();
  var s, l, u = null;
  Ae && Ue.nodeType === 1 && (u = /** @type {Element} */
  Ue, Xn());
  var c = (
    /** @type {TemplateNode} */
    Ae ? Ue : e
  ), d;
  Kr(() => {
    const f = t() || null;
    var v = f === "svg" ? vc : null;
    f !== s && (d && (f === null ? go(d, () => {
      d = null, l = null;
    }) : f === l ? ti(d) : $n(d)), f && f !== l && (d = dr(() => {
      if (u = Ae ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), cn(u, u), r) {
        Ae && Up(f) && u.append(document.createComment(""));
        var m = (
          /** @type {TemplateNode} */
          Ae ? /* @__PURE__ */ Qt(u) : u.appendChild(cr())
        );
        Ae && (m === null ? vn(!1) : tn(m)), r(u, m);
      }
      ct.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Po), i && (vn(!0), tn(c));
}
function Rt(e, t) {
  pi(() => {
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
function Ft(e, t, n) {
  fn(() => {
    var r = Kn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      To(() => {
        var i = n();
        oe(i), o && tl(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Fc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function lg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Fc(e)) && (r && (r += " "), r += t);
  return r;
}
function Gn(e) {
  return typeof e == "object" ? lg(e) : e ?? "";
}
function qc(e) {
  if (Ae) {
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
    e.__on_r = n, dp(n), Qp();
  }
}
function ug(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ae && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ip] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Uc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Mn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Ae && a;
  s && vn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = Gn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = Uc(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const h in n) {
    let $ = n[h];
    if (u && h === "value" && $ == null) {
      e.value = e.__value = "", l[h] = $;
      continue;
    }
    var v = l[h];
    if ($ !== v) {
      l[h] = $;
      var m = h[0] + h[1];
      if (m !== "$$") {
        if (m === "on") {
          const b = {}, E = "$$" + h;
          let O = h.slice(2);
          var _ = Zp(O);
          if (jp(O) && (O = O.slice(0, -7), b.capture = !0), !_ && v) {
            if ($ != null) continue;
            e.removeEventListener(O, l[E], b), l[E] = null;
          }
          if ($ != null)
            if (_)
              e[`__${O}`] = $, La([O]);
            else {
              let T = function(N) {
                l[h].call(this, N);
              };
              l[E] = jc(O, e, T, b);
            }
          else _ && (e[`__${O}`] = void 0);
        } else if (h === "style" && $ != null)
          e.style.cssText = $ + "";
        else if (h === "autofocus")
          Gp(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!a && (h === "__value" || h === "value" && $ != null))
          e.value = e.__value = $;
        else if (h === "selected" && u)
          ug(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var x = h;
          o || (x = Xp(x));
          var S = x === "defaultValue" || x === "defaultChecked";
          if ($ == null && !a && !S)
            if (f[h] = null, x === "value" || x === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (x === "value") {
                let O = b.defaultValue;
                b.removeAttribute(x), b.defaultValue = O, b.value = b.__value = E ? O : null;
              } else {
                let O = b.defaultChecked;
                b.removeAttribute(x), b.defaultChecked = O, b.checked = E ? O : !1;
              }
            } else
              e.removeAttribute(h);
          else S || d.includes(x) && (a || typeof $ != "string") ? e[x] = $ : typeof $ != "function" && xe(e, x, $);
        }
        h === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && vn(!0), l;
}
var uu = /* @__PURE__ */ new Map();
function Uc(e) {
  var t = uu.get(e.nodeName);
  if (t) return t;
  uu.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = hc(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = el(r);
  }
  return t;
}
function Fr(e, t, n) {
  var r = e.__className, o = Gc(t, n);
  Ae && e.getAttribute("class") === o ? e.__className = o : (r !== o || Ae && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function yo(e, t, n) {
  var r = e.__className, o = Gc(t, n);
  Ae && e.className === o ? e.__className = o : (r !== o || Ae && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function Gc(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function Tt(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Mt(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Lr, Uo, Xi, Ss, Jc;
const Ps = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    oo(this, Ss), oo(this, Lr, /* @__PURE__ */ new WeakMap()), oo(this, Uo), oo(this, Xi), Qi(this, Xi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Nt(this, Lr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Nt(this, Lr).set(t, r), Zv(this, Ss, Jc).call(this).observe(t, Nt(this, Xi)), () => {
      var o = Nt(this, Lr).get(t);
      o.delete(n), o.size === 0 && (Nt(this, Lr).delete(t), Nt(this, Uo).unobserve(t));
    };
  }
};
Lr = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakSet(), Jc = function() {
  return Nt(this, Uo) ?? Qi(this, Uo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ps.entries.set(t.target, t);
        for (var n of Nt(this, Lr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
sn(Ps, "entries", /* @__PURE__ */ new WeakMap());
let cg = Ps;
var dg = /* @__PURE__ */ new cg({
  box: "border-box"
});
function cu(e, t, n) {
  var r = dg.observe(e, () => n(e[t]));
  fn(() => (Kn(() => n(e[t])), r));
}
function du(e, t) {
  return e === t || (e == null ? void 0 : e[kr]) === t;
}
function fr(e = {}, t, n, r) {
  return fn(() => {
    var o, a;
    return To(() => {
      o = a, a = [], Kn(() => {
        e !== n(...a) && (t(e, ...a), o && du(n(...o), e) && t(null, ...o));
      });
    }), () => {
      pi(() => {
        a && du(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function qe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    st
  ), n = t.l.u;
  if (!n) return;
  let r = () => oe(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Je(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => p(i);
  }
  n.b.length && Ap(() => {
    fu(t, r), Jo(n.b);
  }), sa(() => {
    const o = Kn(() => n.m.map(up));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && sa(() => {
    fu(t, r), Jo(n.a);
  });
}
function fu(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function rt(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = vi(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function qr(e) {
  st === null && Na(), Eo && st.l !== null ? vg(st).m.push(e) : sa(() => {
    const t = Kn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ll(e) {
  st === null && Na(), qr(() => () => Kn(e));
}
function fg(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function za() {
  const e = st;
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
      const i = vi(a) ? a.slice() : [a], s = fg(
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
function vg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ul(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Zt;
  const r = Kn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ro = [];
function bn(e, t) {
  return {
    subscribe: Oe(e, t).subscribe
  };
}
function Oe(e, t = Zt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (tl(e, s) && (e = s, n)) {
      const l = !ro.length;
      for (const u of r)
        u[1](), ro.push(u, e);
      if (l) {
        for (let u = 0; u < ro.length; u += 2)
          ro[u][0](ro[u + 1]);
        ro.length = 0;
      }
    }
  }
  function a(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = Zt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || Zt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function Er(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return bn(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = Zt;
    const f = () => {
      if (c)
        return;
      d();
      const m = t(r ? u[0] : u, i, s);
      a ? i(m) : d = typeof m == "function" ? m : Zt;
    }, v = o.map(
      (m, _) => ul(
        m,
        (x) => {
          u[_] = x, c &= ~(1 << _), l && f();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return l = !0, f(), function() {
      Jo(v), d(), l = !1;
    };
  });
}
function Q(e) {
  let t;
  return ul(e, (n) => t = n)(), t;
}
let zi = !1, Os = Symbol();
function le(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ gi(void 0),
    unsubscribe: Zt
  });
  if (r.store !== e && !(Os in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Zt;
    else {
      var o = !0;
      r.unsubscribe = ul(e, (a) => {
        o ? r.source.v = a : ie(r.source, a);
      }), o = !1;
    }
  return e && Os in n ? Q(e) : p(r.source);
}
function pg(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Zt), e;
}
function la(e, t) {
  return e.set(t), t;
}
function _t() {
  const e = {};
  function t() {
    Lc(() => {
      for (var n in e)
        e[n].unsubscribe();
      Go(e, Os, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function gg(e) {
  var t = zi;
  try {
    return zi = !1, [e(), zi];
  } finally {
    zi = t;
  }
}
const hg = {
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
function Cn(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    hg
  );
}
const mg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return p(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      cc
    )), e.special[t](n), nu(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), nu(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Et(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: ln(0) }, mg);
}
const yg = {
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
      const a = lr(o, t);
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
        const o = lr(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === kr || t === Js) return !1;
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
function en(...e) {
  return new Proxy({ props: e }, yg);
}
function w(e, t, n, r) {
  var o, a = (n & Uv) !== 0, i = !Eo || (n & Gv) !== 0, s = (n & Jv) !== 0, l = (n & Qv) !== 0, u = !1, c;
  s ? [c, u] = gg(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = kr in e || Js in e, f = s && (((o = lr(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((T) => e[t] = T))) || void 0, v = (
    /** @type {V} */
    r
  ), m = !0, _ = !1, x = () => (_ = !0, m && (m = !1, l ? v = Kn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && yp(), c = x(), f && f(c));
  var S;
  if (i)
    S = () => {
      var T = (
        /** @type {V} */
        e[t]
      );
      return T === void 0 ? x() : (m = !0, _ = !1, T);
    };
  else {
    var h = (a ? Je : Pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= rp, S = () => {
      var T = p(h);
      return T !== void 0 && (v = /** @type {V} */
      void 0), T === void 0 ? v : T;
    };
  }
  if (!(n & cc))
    return S;
  if (f) {
    var $ = e.$$legacy;
    return function(T, N) {
      return arguments.length > 0 ? ((!i || !N || $ || u) && f(N ? S() : T), T) : S();
    };
  }
  var b = !1, E = /* @__PURE__ */ gi(c), O = /* @__PURE__ */ Je(() => {
    var T = S(), N = p(E);
    return b ? (b = !1, N) : E.v = T;
  });
  return a || (O.equals = nl), function(T, N) {
    if (arguments.length > 0) {
      const z = N ? p(O) : i && s ? Bn(T) : T;
      return O.equals(z) || (b = !0, ie(E, z), _ && v !== void 0 && (v = z), Kn(() => p(O))), T;
    }
    return p(O);
  };
}
function wg(e) {
  return new bg(e);
}
var br, En;
class bg {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    oo(this, br), oo(this, En);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ gi(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return p(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Js ? !0 : (p(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return ie(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Qi(this, En, (t.hydrate ? tg : Yc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), Qi(this, br, a.$$events);
    for (const i of Object.keys(Nt(this, En)))
      i === "$set" || i === "$destroy" || i === "$on" || Go(this, i, {
        get() {
          return Nt(this, En)[i];
        },
        /** @param {any} value */
        set(s) {
          Nt(this, En)[i] = s;
        },
        enumerable: !0
      });
    Nt(this, En).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, Nt(this, En).$destroy = () => {
      ng(Nt(this, En));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Nt(this, En).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    Nt(this, br)[t] = Nt(this, br)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return Nt(this, br)[t].push(r), () => {
      Nt(this, br)[t] = Nt(this, br)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    Nt(this, En).$destroy();
  }
}
br = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap();
let Qc;
typeof HTMLElement == "function" && (Qc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), sn(this, "$$ctor"), sn(this, "$$s"), sn(this, "$$c"), sn(this, "$$cn", !1), sn(this, "$$d", {}), sn(this, "$$r", !1), sn(this, "$$p_d", {}), sn(this, "$$l", {}), sn(this, "$$l_u", /* @__PURE__ */ new Map()), sn(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (a.name = r), Y(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = xg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ki(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = wg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = zp(() => {
        To(() => {
          var r;
          this.$$r = !0;
          for (const o of na(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = Ki(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ki(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function Ki(e, t, n, r) {
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
function xg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function be(e, t, n, r, o, a) {
  let i = class extends Qc {
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
    Go(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Ki(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = lr(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Go(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function nn(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = nn(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var _g = { value: () => {
} };
function Da() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Fi(n);
}
function Fi(e) {
  this._ = e;
}
function $g(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Fi.prototype = Da.prototype = {
  constructor: Fi,
  on: function(e, t) {
    var n = this._, r = $g(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = Cg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = vu(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = vu(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Fi(e);
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
function Cg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function vu(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = _g, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ts = "http://www.w3.org/1999/xhtml";
const pu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ts,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ha(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), pu.hasOwnProperty(t) ? { space: pu[t], local: e } : e;
}
function kg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ts && t.documentElement.namespaceURI === Ts ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Eg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ed(e) {
  var t = Ha(e);
  return (t.local ? Eg : kg)(t);
}
function Sg() {
}
function cl(e) {
  return e == null ? Sg : function() {
    return this.querySelector(e);
  };
}
function Pg(e) {
  typeof e != "function" && (e = cl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new hn(r, this._parents);
}
function Og(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Tg() {
  return [];
}
function td(e) {
  return e == null ? Tg : function() {
    return this.querySelectorAll(e);
  };
}
function Rg(e) {
  return function() {
    return Og(e.apply(this, arguments));
  };
}
function Mg(e) {
  typeof e == "function" ? e = Rg(e) : e = td(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new hn(r, o);
}
function nd(e) {
  return function() {
    return this.matches(e);
  };
}
function rd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ng = Array.prototype.find;
function Vg(e) {
  return function() {
    return Ng.call(this.children, e);
  };
}
function Lg() {
  return this.firstElementChild;
}
function Ag(e) {
  return this.select(e == null ? Lg : Vg(typeof e == "function" ? e : rd(e)));
}
var zg = Array.prototype.filter;
function Dg() {
  return Array.from(this.children);
}
function Hg(e) {
  return function() {
    return zg.call(this.children, e);
  };
}
function Ig(e) {
  return this.selectAll(e == null ? Dg : Hg(typeof e == "function" ? e : rd(e)));
}
function Bg(e) {
  typeof e != "function" && (e = nd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new hn(r, this._parents);
}
function od(e) {
  return new Array(e.length);
}
function jg() {
  return new hn(this._enter || this._groups.map(od), this._parents);
}
function ua(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ua.prototype = {
  constructor: ua,
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
function Yg(e) {
  return function() {
    return e;
  };
}
function Zg(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new ua(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function Wg(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new ua(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function Xg(e) {
  return e.__data__;
}
function Kg(e, t) {
  if (!arguments.length) return Array.from(this, Xg);
  var n = t ? Wg : Zg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Yg(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = Fg(e.call(c, c && c.__data__, u, r)), m = v.length, _ = s[u] = new Array(m), x = i[u] = new Array(m), S = l[u] = new Array(f);
    n(c, d, _, x, S, v, t);
    for (var h = 0, $ = 0, b, E; h < m; ++h)
      if (b = _[h]) {
        for (h >= $ && ($ = h + 1); !(E = x[$]) && ++$ < m; ) ;
        b._next = E || null;
      }
  }
  return i = new hn(i, r), i._enter = s, i._exit = l, i;
}
function Fg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qg() {
  return new hn(this._exit || this._groups.map(od), this._parents);
}
function Ug(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Gg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || c[m]) && (f[m] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new hn(s, this._parents);
}
function Jg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function Qg(e) {
  e || (e = eh);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new hn(o, this._parents).order();
}
function eh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function th() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function nh() {
  return Array.from(this);
}
function rh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function oh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ih() {
  return !this.node();
}
function ah(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function sh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function lh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function uh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ch(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function dh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function fh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function vh(e, t) {
  var n = Ha(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? lh : sh : typeof t == "function" ? n.local ? fh : dh : n.local ? ch : uh)(n, t));
}
function id(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ph(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function hh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function mh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ph : typeof t == "function" ? hh : gh)(e, t, n ?? "")) : wo(this.node(), e);
}
function wo(e, t) {
  return e.style.getPropertyValue(t) || id(e).getComputedStyle(e, null).getPropertyValue(t);
}
function yh(e) {
  return function() {
    delete this[e];
  };
}
function wh(e, t) {
  return function() {
    this[e] = t;
  };
}
function bh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function xh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? yh : typeof t == "function" ? bh : wh)(e, t)) : this.node()[e];
}
function ad(e) {
  return e.trim().split(/^|\s+/);
}
function dl(e) {
  return e.classList || new sd(e);
}
function sd(e) {
  this._node = e, this._names = ad(e.getAttribute("class") || "");
}
sd.prototype = {
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
function ld(e, t) {
  for (var n = dl(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function ud(e, t) {
  for (var n = dl(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function _h(e) {
  return function() {
    ld(this, e);
  };
}
function $h(e) {
  return function() {
    ud(this, e);
  };
}
function Ch(e, t) {
  return function() {
    (t.apply(this, arguments) ? ld : ud)(this, e);
  };
}
function kh(e, t) {
  var n = ad(e + "");
  if (arguments.length < 2) {
    for (var r = dl(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ch : t ? _h : $h)(n, t));
}
function Eh() {
  this.textContent = "";
}
function Sh(e) {
  return function() {
    this.textContent = e;
  };
}
function Ph(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Oh(e) {
  return arguments.length ? this.each(e == null ? Eh : (typeof e == "function" ? Ph : Sh)(e)) : this.node().textContent;
}
function Th() {
  this.innerHTML = "";
}
function Rh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Mh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Nh(e) {
  return arguments.length ? this.each(e == null ? Th : (typeof e == "function" ? Mh : Rh)(e)) : this.node().innerHTML;
}
function Vh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Lh() {
  return this.each(Vh);
}
function Ah() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zh() {
  return this.each(Ah);
}
function Dh(e) {
  var t = typeof e == "function" ? e : ed(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Hh() {
  return null;
}
function Ih(e, t) {
  var n = typeof e == "function" ? e : ed(e), r = t == null ? Hh : typeof t == "function" ? t : cl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Bh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jh() {
  return this.each(Bh);
}
function Yh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Zh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Wh(e) {
  return this.select(e ? Zh : Yh);
}
function Xh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Kh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Fh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function qh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Uh(e, t, n) {
  return function() {
    var r = this.__on, o, a = Kh(t);
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
function Gh(e, t, n) {
  var r = Fh(e + ""), o, a = r.length, i;
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
  for (s = t ? Uh : qh, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function cd(e, t, n) {
  var r = id(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Jh(e, t) {
  return function() {
    return cd(this, e, t);
  };
}
function Qh(e, t) {
  return function() {
    return cd(this, e, t.apply(this, arguments));
  };
}
function e1(e, t) {
  return this.each((typeof t == "function" ? Qh : Jh)(e, t));
}
function* t1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var dd = [null];
function hn(e, t) {
  this._groups = e, this._parents = t;
}
function hi() {
  return new hn([[document.documentElement]], dd);
}
function n1() {
  return this;
}
hn.prototype = hi.prototype = {
  constructor: hn,
  select: Pg,
  selectAll: Mg,
  selectChild: Ag,
  selectChildren: Ig,
  filter: Bg,
  data: Kg,
  enter: jg,
  exit: qg,
  join: Ug,
  merge: Gg,
  selection: n1,
  order: Jg,
  sort: Qg,
  call: th,
  nodes: nh,
  node: rh,
  size: oh,
  empty: ih,
  each: ah,
  attr: vh,
  style: mh,
  property: xh,
  classed: kh,
  text: Oh,
  html: Nh,
  raise: Lh,
  lower: zh,
  append: Dh,
  insert: Ih,
  remove: jh,
  clone: Wh,
  datum: Xh,
  on: Gh,
  dispatch: e1,
  [Symbol.iterator]: t1
};
function xn(e) {
  return typeof e == "string" ? new hn([[document.querySelector(e)]], [document.documentElement]) : new hn([[e]], dd);
}
function r1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Sn(e, t) {
  if (e = r1(e), t === void 0 && (t = e.currentTarget), t) {
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
const o1 = { passive: !1 }, ni = { capture: !0, passive: !1 };
function ls(e) {
  e.stopImmediatePropagation();
}
function uo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function fd(e) {
  var t = e.document.documentElement, n = xn(e).on("dragstart.drag", uo, ni);
  "onselectstart" in t ? n.on("selectstart.drag", uo, ni) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function vd(e, t) {
  var n = e.document.documentElement, r = xn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", uo, ni), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Di = (e) => () => e;
function Rs(e, {
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
Rs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function i1(e) {
  return !e.ctrlKey && !e.button;
}
function a1() {
  return this.parentNode;
}
function s1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function l1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function u1() {
  var e = i1, t = a1, n = s1, r = l1, o = {}, a = Da("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(b) {
    b.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", S, o1).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(b, E) {
    if (!(c || !e.call(this, b, E))) {
      var O = $(this, t.call(this, b, E), b, E, "mouse");
      O && (xn(b.view).on("mousemove.drag", m, ni).on("mouseup.drag", _, ni), fd(b.view), ls(b), u = !1, s = b.clientX, l = b.clientY, O("start", b));
    }
  }
  function m(b) {
    if (uo(b), !u) {
      var E = b.clientX - s, O = b.clientY - l;
      u = E * E + O * O > d;
    }
    o.mouse("drag", b);
  }
  function _(b) {
    xn(b.view).on("mousemove.drag mouseup.drag", null), vd(b.view, u), uo(b), o.mouse("end", b);
  }
  function x(b, E) {
    if (e.call(this, b, E)) {
      var O = b.changedTouches, T = t.call(this, b, E), N = O.length, z, D;
      for (z = 0; z < N; ++z)
        (D = $(this, T, b, E, O[z].identifier, O[z])) && (ls(b), D("start", b, O[z]));
    }
  }
  function S(b) {
    var E = b.changedTouches, O = E.length, T, N;
    for (T = 0; T < O; ++T)
      (N = o[E[T].identifier]) && (uo(b), N("drag", b, E[T]));
  }
  function h(b) {
    var E = b.changedTouches, O = E.length, T, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), T = 0; T < O; ++T)
      (N = o[E[T].identifier]) && (ls(b), N("end", b, E[T]));
  }
  function $(b, E, O, T, N, z) {
    var D = a.copy(), W = Sn(z || O, E), j, X, P;
    if ((P = n.call(b, new Rs("beforestart", {
      sourceEvent: O,
      target: f,
      identifier: N,
      active: i,
      x: W[0],
      y: W[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), T)) != null)
      return j = P.x - W[0] || 0, X = P.y - W[1] || 0, function M(k, C, A) {
        var H = W, K;
        switch (k) {
          case "start":
            o[N] = M, K = i++;
            break;
          case "end":
            delete o[N], --i;
          // falls through
          case "drag":
            W = Sn(A || C, E), K = i;
            break;
        }
        D.call(
          k,
          b,
          new Rs(k, {
            sourceEvent: C,
            subject: P,
            target: f,
            identifier: N,
            active: K,
            x: W[0] + j,
            y: W[1] + X,
            dx: W[0] - H[0],
            dy: W[1] - H[1],
            dispatch: D
          }),
          T
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Di(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Di(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Di(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Di(!!b), f) : r;
  }, f.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (d = (b = +b) * b, f) : Math.sqrt(d);
  }, f;
}
function fl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function pd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function mi() {
}
var ri = 0.7, ca = 1 / ri, co = "\\s*([+-]?\\d+)\\s*", oi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", c1 = /^#([0-9a-f]{3,8})$/, d1 = new RegExp(`^rgb\\(${co},${co},${co}\\)$`), f1 = new RegExp(`^rgb\\(${Zn},${Zn},${Zn}\\)$`), v1 = new RegExp(`^rgba\\(${co},${co},${co},${oi}\\)$`), p1 = new RegExp(`^rgba\\(${Zn},${Zn},${Zn},${oi}\\)$`), g1 = new RegExp(`^hsl\\(${oi},${Zn},${Zn}\\)$`), h1 = new RegExp(`^hsla\\(${oi},${Zn},${Zn},${oi}\\)$`), gu = {
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
fl(mi, ii, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hu,
  // Deprecated! Use color.formatHex.
  formatHex: hu,
  formatHex8: m1,
  formatHsl: y1,
  formatRgb: mu,
  toString: mu
});
function hu() {
  return this.rgb().formatHex();
}
function m1() {
  return this.rgb().formatHex8();
}
function y1() {
  return gd(this).formatHsl();
}
function mu() {
  return this.rgb().formatRgb();
}
function ii(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = c1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? yu(t) : n === 3 ? new un(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Hi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Hi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = d1.exec(e)) ? new un(t[1], t[2], t[3], 1) : (t = f1.exec(e)) ? new un(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = v1.exec(e)) ? Hi(t[1], t[2], t[3], t[4]) : (t = p1.exec(e)) ? Hi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = g1.exec(e)) ? xu(t[1], t[2] / 100, t[3] / 100, 1) : (t = h1.exec(e)) ? xu(t[1], t[2] / 100, t[3] / 100, t[4]) : gu.hasOwnProperty(e) ? yu(gu[e]) : e === "transparent" ? new un(NaN, NaN, NaN, 0) : null;
}
function yu(e) {
  return new un(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Hi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new un(e, t, n, r);
}
function w1(e) {
  return e instanceof mi || (e = ii(e)), e ? (e = e.rgb(), new un(e.r, e.g, e.b, e.opacity)) : new un();
}
function Ms(e, t, n, r) {
  return arguments.length === 1 ? w1(e) : new un(e, t, n, r ?? 1);
}
function un(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
fl(un, Ms, pd(mi, {
  brighter(e) {
    return e = e == null ? ca : Math.pow(ca, e), new un(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ri : Math.pow(ri, e), new un(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new un(Dr(this.r), Dr(this.g), Dr(this.b), da(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: wu,
  // Deprecated! Use color.formatHex.
  formatHex: wu,
  formatHex8: b1,
  formatRgb: bu,
  toString: bu
}));
function wu() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}`;
}
function b1() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bu() {
  const e = da(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dr(this.r)}, ${Dr(this.g)}, ${Dr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function da(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Dr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zr(e) {
  return e = Dr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new On(e, t, n, r);
}
function gd(e) {
  if (e instanceof On) return new On(e.h, e.s, e.l, e.opacity);
  if (e instanceof mi || (e = ii(e)), !e) return new On();
  if (e instanceof On) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new On(i, s, l, e.opacity);
}
function x1(e, t, n, r) {
  return arguments.length === 1 ? gd(e) : new On(e, t, n, r ?? 1);
}
function On(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
fl(On, x1, pd(mi, {
  brighter(e) {
    return e = e == null ? ca : Math.pow(ca, e), new On(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ri : Math.pow(ri, e), new On(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new un(
      us(e >= 240 ? e - 240 : e + 120, o, r),
      us(e, o, r),
      us(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new On(_u(this.h), Ii(this.s), Ii(this.l), da(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = da(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_u(this.h)}, ${Ii(this.s) * 100}%, ${Ii(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _u(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ii(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function us(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const hd = (e) => () => e;
function _1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function $1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function C1(e) {
  return (e = +e) == 1 ? md : function(t, n) {
    return n - t ? $1(t, n, e) : hd(isNaN(t) ? n : t);
  };
}
function md(e, t) {
  var n = t - e;
  return n ? _1(e, n) : hd(isNaN(e) ? t : e);
}
const $u = function e(t) {
  var n = C1(t);
  function r(o, a) {
    var i = n((o = Ms(o)).r, (a = Ms(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = md(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function _r(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ns = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cs = new RegExp(Ns.source, "g");
function k1(e) {
  return function() {
    return e;
  };
}
function E1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function S1(e, t) {
  var n = Ns.lastIndex = cs.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ns.exec(e)) && (o = cs.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: _r(r, o) })), n = cs.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? E1(l[0].x) : k1(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Cu = 180 / Math.PI, yd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wd(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * Cu,
    skewX: Math.atan(l) * Cu,
    scaleX: i,
    scaleY: s
  };
}
var Bi;
function P1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? yd : wd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function O1(e) {
  return e == null || (Bi || (Bi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Bi.setAttribute("transform", e), !(e = Bi.transform.baseVal.consolidate())) ? yd : (e = e.matrix, wd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bd(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var _ = v.push("translate(", null, t, null, n);
      m.push({ i: _ - 4, x: _r(u, d) }, { i: _ - 2, x: _r(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: _r(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: _r(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var _ = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: _r(u, d) }, { i: _ - 2, x: _r(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var m = -1, _ = f.length, x; ++m < _; ) d[(x = f[m]).i] = x.x(v);
      return d.join("");
    };
  };
}
var T1 = bd(P1, "px, ", "px)", "deg)"), R1 = bd(O1, ", ", ")", ")"), M1 = 1e-12;
function ku(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function N1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function V1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const L1 = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, m = d - l, _ = v * v + m * m, x, S;
    if (_ < M1)
      S = Math.log(f / u) / t, x = function(T) {
        return [
          s + T * v,
          l + T * m,
          u * Math.exp(t * T * S)
        ];
      };
    else {
      var h = Math.sqrt(_), $ = (f * f - u * u + r * _) / (2 * u * n * h), b = (f * f - u * u - r * _) / (2 * f * n * h), E = Math.log(Math.sqrt($ * $ + 1) - $), O = Math.log(Math.sqrt(b * b + 1) - b);
      S = (O - E) / t, x = function(T) {
        var N = T * S, z = ku(E), D = u / (n * h) * (z * V1(t * N + E) - N1(E));
        return [
          s + D * v,
          l + D * m,
          u * z / ku(t * N + E)
        ];
      };
    }
    return x.duration = S * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var bo = 0, Ko = 0, Yo = 0, xd = 1e3, fa, Fo, va = 0, Ir = 0, Ia = 0, ai = typeof performance == "object" && performance.now ? performance : Date, _d = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function vl() {
  return Ir || (_d(A1), Ir = ai.now() + Ia);
}
function A1() {
  Ir = 0;
}
function pa() {
  this._call = this._time = this._next = null;
}
pa.prototype = $d.prototype = {
  constructor: pa,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? vl() : +n) + (t == null ? 0 : +t), !this._next && Fo !== this && (Fo ? Fo._next = this : fa = this, Fo = this), this._call = e, this._time = n, Vs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vs());
  }
};
function $d(e, t, n) {
  var r = new pa();
  return r.restart(e, t, n), r;
}
function z1() {
  vl(), ++bo;
  for (var e = fa, t; e; )
    (t = Ir - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bo;
}
function Eu() {
  Ir = (va = ai.now()) + Ia, bo = Ko = 0;
  try {
    z1();
  } finally {
    bo = 0, H1(), Ir = 0;
  }
}
function D1() {
  var e = ai.now(), t = e - va;
  t > xd && (Ia -= t, va = e);
}
function H1() {
  for (var e, t = fa, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : fa = n);
  Fo = e, Vs(r);
}
function Vs(e) {
  if (!bo) {
    Ko && (Ko = clearTimeout(Ko));
    var t = e - Ir;
    t > 24 ? (e < 1 / 0 && (Ko = setTimeout(Eu, e - ai.now() - Ia)), Yo && (Yo = clearInterval(Yo))) : (Yo || (va = ai.now(), Yo = setInterval(D1, xd)), bo = 1, _d(Eu));
  }
}
function Su(e, t, n) {
  var r = new pa();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var I1 = Da("start", "end", "cancel", "interrupt"), B1 = [], Cd = 0, Pu = 1, Ls = 2, qi = 3, Ou = 4, As = 5, Ui = 6;
function Ba(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  j1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: I1,
    tween: B1,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Cd
  });
}
function pl(e, t) {
  var n = Ln(e, t);
  if (n.state > Cd) throw new Error("too late; already scheduled");
  return n;
}
function Jn(e, t) {
  var n = Ln(e, t);
  if (n.state > qi) throw new Error("too late; already running");
  return n;
}
function Ln(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function j1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = $d(a, 0, n.time);
  function a(u) {
    n.state = Pu, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== Pu) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === qi) return Su(i);
        v.state === Ou ? (v.state = Ui, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Ui, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Su(function() {
      n.state === qi && (n.state = Ou, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ls, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ls) {
      for (n.state = qi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = As, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === As && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ls && r.state < As, r.state = Ui, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function Y1(e) {
  return this.each(function() {
    Gi(this, e);
  });
}
function Z1(e, t) {
  var n, r;
  return function() {
    var o = Jn(this, e), a = o.tween;
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
function W1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = Jn(this, e), i = a.tween;
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
function X1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ln(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? Z1 : W1)(n, e, t));
}
function gl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Jn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ln(o, r).value[t];
  };
}
function kd(e, t) {
  var n;
  return (typeof t == "number" ? _r : t instanceof ii ? $u : (n = ii(t)) ? (t = n, $u) : S1)(e, t);
}
function K1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function F1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function q1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function U1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function G1(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function J1(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function Q1(e, t) {
  var n = Ha(e), r = n === "transform" ? R1 : kd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? J1 : G1)(n, r, gl(this, "attr." + e, t)) : t == null ? (n.local ? F1 : K1)(n) : (n.local ? U1 : q1)(n, r, t));
}
function e0(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function t0(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function n0(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && t0(e, a)), n;
  }
  return o._value = t, o;
}
function r0(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && e0(e, a)), n;
  }
  return o._value = t, o;
}
function o0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ha(e);
  return this.tween(n, (r.local ? n0 : r0)(r, t));
}
function i0(e, t) {
  return function() {
    pl(this, e).delay = +t.apply(this, arguments);
  };
}
function a0(e, t) {
  return t = +t, function() {
    pl(this, e).delay = t;
  };
}
function s0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? i0 : a0)(t, e)) : Ln(this.node(), t).delay;
}
function l0(e, t) {
  return function() {
    Jn(this, e).duration = +t.apply(this, arguments);
  };
}
function u0(e, t) {
  return t = +t, function() {
    Jn(this, e).duration = t;
  };
}
function c0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? l0 : u0)(t, e)) : Ln(this.node(), t).duration;
}
function d0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Jn(this, e).ease = t;
  };
}
function f0(e) {
  var t = this._id;
  return arguments.length ? this.each(d0(t, e)) : Ln(this.node(), t).ease;
}
function v0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Jn(this, e).ease = n;
  };
}
function p0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(v0(this._id, e));
}
function g0(e) {
  typeof e != "function" && (e = nd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new vr(r, this._parents, this._name, this._id);
}
function h0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new vr(i, this._parents, this._name, this._id);
}
function m0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function y0(e, t, n) {
  var r, o, a = m0(t) ? pl : Jn;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function w0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ln(this.node(), n).on.on(e) : this.each(y0(n, e, t));
}
function b0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function x0() {
  return this.on("end.remove", b0(this._id));
}
function _0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = cl(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ba(u[f], t, n, f, u, Ln(c, n)));
  return new vr(a, this._parents, t, n);
}
function $0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = td(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, m = Ln(c, n), _ = 0, x = f.length; _ < x; ++_)
          (v = f[_]) && Ba(v, t, n, _, f, m);
        a.push(f), i.push(c);
      }
  return new vr(a, i, t, n);
}
var C0 = hi.prototype.constructor;
function k0() {
  return new C0(this._groups, this._parents);
}
function E0(e, t) {
  var n, r, o;
  return function() {
    var a = wo(this, e), i = (this.style.removeProperty(e), wo(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Ed(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function S0(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = wo(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function P0(e, t, n) {
  var r, o, a;
  return function() {
    var i = wo(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), wo(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function O0(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = Jn(this, e), u = l.on, c = l.value[a] == null ? s || (s = Ed(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function T0(e, t, n) {
  var r = (e += "") == "transform" ? T1 : kd;
  return t == null ? this.styleTween(e, E0(e, r)).on("end.style." + e, Ed(e)) : typeof t == "function" ? this.styleTween(e, P0(e, r, gl(this, "style." + e, t))).each(O0(this._id, e)) : this.styleTween(e, S0(e, r, t), n).on("end.style." + e, null);
}
function R0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function M0(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && R0(e, i, n)), r;
  }
  return a._value = t, a;
}
function N0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, M0(e, t, n ?? ""));
}
function V0(e) {
  return function() {
    this.textContent = e;
  };
}
function L0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function A0(e) {
  return this.tween("text", typeof e == "function" ? L0(gl(this, "text", e)) : V0(e == null ? "" : e + ""));
}
function z0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function D0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && z0(o)), t;
  }
  return r._value = e, r;
}
function H0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, D0(e));
}
function I0() {
  for (var e = this._name, t = this._id, n = Sd(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = Ln(l, t);
        Ba(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new vr(r, this._parents, e, n);
}
function B0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = Jn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var j0 = 0;
function vr(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Sd() {
  return ++j0;
}
var nr = hi.prototype;
vr.prototype = {
  constructor: vr,
  select: _0,
  selectAll: $0,
  selectChild: nr.selectChild,
  selectChildren: nr.selectChildren,
  filter: g0,
  merge: h0,
  selection: k0,
  transition: I0,
  call: nr.call,
  nodes: nr.nodes,
  node: nr.node,
  size: nr.size,
  empty: nr.empty,
  each: nr.each,
  on: w0,
  attr: Q1,
  attrTween: o0,
  style: T0,
  styleTween: N0,
  text: A0,
  textTween: H0,
  remove: x0,
  tween: X1,
  delay: s0,
  duration: c0,
  ease: f0,
  easeVarying: p0,
  end: B0,
  [Symbol.iterator]: nr[Symbol.iterator]
};
function Y0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Z0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Y0
};
function W0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function X0(e) {
  var t, n;
  e instanceof vr ? (t = e._id, e = e._name) : (t = Sd(), (n = Z0).time = vl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Ba(l, e, t, u, i, n || W0(l, t));
  return new vr(r, this._parents, e, t);
}
hi.prototype.interrupt = Y1;
hi.prototype.transition = X0;
const ji = (e) => () => e;
function K0(e, {
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
function or(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
or.prototype = {
  constructor: or,
  scale: function(e) {
    return e === 1 ? this : new or(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new or(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ja = new or(1, 0, 0);
Pd.prototype = or.prototype;
function Pd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ja;
  return e.__zoom;
}
function ds(e) {
  e.stopImmediatePropagation();
}
function Zo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function F0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function q0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Tu() {
  return this.__zoom || ja;
}
function U0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function G0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function J0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Od() {
  var e = F0, t = q0, n = J0, r = U0, o = G0, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = L1, u = Da("start", "zoom", "end"), c, d, f, v = 500, m = 150, _ = 0, x = 10;
  function S(P) {
    P.property("__zoom", Tu).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", W).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(P, M, k, C) {
    var A = P.selection ? P.selection() : P;
    A.property("__zoom", Tu), P !== A ? E(P, M, k, C) : A.interrupt().each(function() {
      O(this, arguments).event(C).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, S.scaleBy = function(P, M, k, C) {
    S.scaleTo(P, function() {
      var A = this.__zoom.k, H = typeof M == "function" ? M.apply(this, arguments) : M;
      return A * H;
    }, k, C);
  }, S.scaleTo = function(P, M, k, C) {
    S.transform(P, function() {
      var A = t.apply(this, arguments), H = this.__zoom, K = k == null ? b(A) : typeof k == "function" ? k.apply(this, arguments) : k, R = H.invert(K), I = typeof M == "function" ? M.apply(this, arguments) : M;
      return n($(h(H, I), K, R), A, i);
    }, k, C);
  }, S.translateBy = function(P, M, k, C) {
    S.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), i);
    }, null, C);
  }, S.translateTo = function(P, M, k, C, A) {
    S.transform(P, function() {
      var H = t.apply(this, arguments), K = this.__zoom, R = C == null ? b(H) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(ja.translate(R[0], R[1]).scale(K.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), H, i);
    }, C, A);
  };
  function h(P, M) {
    return M = Math.max(a[0], Math.min(a[1], M)), M === P.k ? P : new or(M, P.x, P.y);
  }
  function $(P, M, k) {
    var C = M[0] - k[0] * P.k, A = M[1] - k[1] * P.k;
    return C === P.x && A === P.y ? P : new or(P.k, C, A);
  }
  function b(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function E(P, M, k, C) {
    P.on("start.zoom", function() {
      O(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var A = this, H = arguments, K = O(A, H).event(C), R = t.apply(A, H), I = k == null ? b(R) : typeof k == "function" ? k.apply(A, H) : k, ne = Math.max(R[1][0] - R[0][0], R[1][1] - R[0][1]), J = A.__zoom, Z = typeof M == "function" ? M.apply(A, H) : M, se = l(J.invert(I).concat(ne / J.k), Z.invert(I).concat(ne / Z.k));
      return function(ge) {
        if (ge === 1) ge = Z;
        else {
          var ve = se(ge), ue = ne / ve[2];
          ge = new or(ue, I[0] - ve[0] * ue, I[1] - ve[1] * ue);
        }
        K.zoom(null, ge);
      };
    });
  }
  function O(P, M, k) {
    return !k && P.__zooming || new T(P, M);
  }
  function T(P, M) {
    this.that = P, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, M), this.taps = 0;
  }
  T.prototype = {
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
      var M = xn(this.that).datum();
      u.call(
        P,
        this.that,
        new K0(P, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function N(P, ...M) {
    if (!e.apply(this, arguments)) return;
    var k = O(this, M).event(P), C = this.__zoom, A = Math.max(a[0], Math.min(a[1], C.k * Math.pow(2, r.apply(this, arguments)))), H = Sn(P);
    if (k.wheel)
      (k.mouse[0][0] !== H[0] || k.mouse[0][1] !== H[1]) && (k.mouse[1] = C.invert(k.mouse[0] = H)), clearTimeout(k.wheel);
    else {
      if (C.k === A) return;
      k.mouse = [H, C.invert(H)], Gi(this), k.start();
    }
    Zo(P), k.wheel = setTimeout(K, m), k.zoom("mouse", n($(h(C, A), k.mouse[0], k.mouse[1]), k.extent, i));
    function K() {
      k.wheel = null, k.end();
    }
  }
  function z(P, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var k = P.currentTarget, C = O(this, M, !0).event(P), A = xn(P.view).on("mousemove.zoom", I, !0).on("mouseup.zoom", ne, !0), H = Sn(P, k), K = P.clientX, R = P.clientY;
    fd(P.view), ds(P), C.mouse = [H, this.__zoom.invert(H)], Gi(this), C.start();
    function I(J) {
      if (Zo(J), !C.moved) {
        var Z = J.clientX - K, se = J.clientY - R;
        C.moved = Z * Z + se * se > _;
      }
      C.event(J).zoom("mouse", n($(C.that.__zoom, C.mouse[0] = Sn(J, k), C.mouse[1]), C.extent, i));
    }
    function ne(J) {
      A.on("mousemove.zoom mouseup.zoom", null), vd(J.view, C.moved), Zo(J), C.event(J).end();
    }
  }
  function D(P, ...M) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, C = Sn(P.changedTouches ? P.changedTouches[0] : P, this), A = k.invert(C), H = k.k * (P.shiftKey ? 0.5 : 2), K = n($(h(k, H), C, A), t.apply(this, M), i);
      Zo(P), s > 0 ? xn(this).transition().duration(s).call(E, K, C, P) : xn(this).call(S.transform, K, C, P);
    }
  }
  function W(P, ...M) {
    if (e.apply(this, arguments)) {
      var k = P.touches, C = k.length, A = O(this, M, P.changedTouches.length === C).event(P), H, K, R, I;
      for (ds(P), K = 0; K < C; ++K)
        R = k[K], I = Sn(R, this), I = [I, this.__zoom.invert(I), R.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== I[2] && (A.touch1 = I, A.taps = 0) : (A.touch0 = I, H = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (A.taps < 2 && (d = I[0], c = setTimeout(function() {
        c = null;
      }, v)), Gi(this), A.start());
    }
  }
  function j(P, ...M) {
    if (this.__zooming) {
      var k = O(this, M).event(P), C = P.changedTouches, A = C.length, H, K, R, I;
      for (Zo(P), H = 0; H < A; ++H)
        K = C[H], R = Sn(K, this), k.touch0 && k.touch0[2] === K.identifier ? k.touch0[0] = R : k.touch1 && k.touch1[2] === K.identifier && (k.touch1[0] = R);
      if (K = k.that.__zoom, k.touch1) {
        var ne = k.touch0[0], J = k.touch0[1], Z = k.touch1[0], se = k.touch1[1], ge = (ge = Z[0] - ne[0]) * ge + (ge = Z[1] - ne[1]) * ge, ve = (ve = se[0] - J[0]) * ve + (ve = se[1] - J[1]) * ve;
        K = h(K, Math.sqrt(ge / ve)), R = [(ne[0] + Z[0]) / 2, (ne[1] + Z[1]) / 2], I = [(J[0] + se[0]) / 2, (J[1] + se[1]) / 2];
      } else if (k.touch0) R = k.touch0[0], I = k.touch0[1];
      else return;
      k.zoom("touch", n($(K, R, I), k.extent, i));
    }
  }
  function X(P, ...M) {
    if (this.__zooming) {
      var k = O(this, M).event(P), C = P.changedTouches, A = C.length, H, K;
      for (ds(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), H = 0; H < A; ++H)
        K = C[H], k.touch0 && k.touch0[2] === K.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === K.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (K = Sn(K, this), Math.hypot(d[0] - K[0], d[1] - K[1]) < x)) {
        var R = xn(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : ji(+P), S) : r;
  }, S.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : ji(!!P), S) : e;
  }, S.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : ji(!!P), S) : o;
  }, S.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : ji([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), S) : t;
  }, S.scaleExtent = function(P) {
    return arguments.length ? (a[0] = +P[0], a[1] = +P[1], S) : [a[0], a[1]];
  }, S.translateExtent = function(P) {
    return arguments.length ? (i[0][0] = +P[0][0], i[1][0] = +P[1][0], i[0][1] = +P[0][1], i[1][1] = +P[1][1], S) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, S.constrain = function(P) {
    return arguments.length ? (n = P, S) : n;
  }, S.duration = function(P) {
    return arguments.length ? (s = +P, S) : s;
  }, S.interpolate = function(P) {
    return arguments.length ? (l = P, S) : l;
  }, S.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? S : P;
  }, S.clickDistance = function(P) {
    return arguments.length ? (_ = (P = +P) * P, S) : Math.sqrt(_);
  }, S.tapDistance = function(P) {
    return arguments.length ? (x = +P, S) : x;
  }, S;
}
const Ro = {
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
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID."
}, ga = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Br;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Br || (Br = {}));
var Sr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Sr || (Sr = {}));
var ha;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ha || (ha = {}));
const zs = {
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
var fo;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(fo || (fo = {}));
var si;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(si || (si = {}));
var ze;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ze || (ze = {}));
const Ru = {
  [ze.Left]: ze.Right,
  [ze.Right]: ze.Left,
  [ze.Top]: ze.Bottom,
  [ze.Bottom]: ze.Top
};
function Q0(e, t) {
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
function em(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const tm = (e) => "id" in e && "source" in e && "target" in e, nm = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), hl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), yi = (e, t = [0, 0]) => {
  const { width: n, height: r } = Nr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, rm = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : hl(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? ma(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Za(n);
}, wi = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ma(r);
      n = Ya(n, o);
    }
  }), Za(n);
}, Td = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...bi(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, m = c.height ?? u.height ?? u.initialHeight ?? null, _ = li(s, _o(u)), x = (v ?? 0) * (m ?? 0), S = a && _ > 0;
    (!u.internals.handleBounds || S || _ >= x || u.dragging) && l.push(u);
  }
  return l;
}, Ds = (e, t) => {
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
async function Vu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = wi(e), l = yl(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function om({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Ro.error005());
    else {
      const v = s.measured.width, m = s.measured.height;
      v && m && (d = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else s && $o(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = $o(d) ? jr(t, d, i.measured) : t;
  return {
    position: {
      x: f.x - l + i.measured.width * c[0],
      y: f.y - u + i.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Rd({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((m) => m.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Ds(i, l);
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
const xo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), jr = (e = { x: 0, y: 0 }, t, n) => ({
  x: xo(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: xo(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Md(e, t, n) {
  const { width: r, height: o } = Nr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return jr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Lu = (e, t, n) => e < t ? xo(Math.abs(e - t), 1, t) / t : e > n ? -xo(Math.abs(e - n), 1, t) / t : 0, Nd = (e, t, n = 15, r = 40) => {
  const o = Lu(e.x, r, t.width - r) * n, a = Lu(e.y, r, t.height - r) * n;
  return [o, a];
}, Ya = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Hs = ({ x: e, y: t, width: n, height: r }) => ({
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
  const { x: o, y: a } = hl(e) ? e.internals.positionAbsolute : yi(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ma = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = hl(e) ? e.internals.positionAbsolute : yi(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Vd = (e, t) => Za(Ya(Hs(e), Hs(t))), li = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Au = (e) => ir(e.width) && ir(e.height) && ir(e.x) && ir(e.y), ir = (e) => !isNaN(e) && isFinite(e), Ld = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, ml = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), bi = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? ml(s, i) : s;
}, Ad = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), yl = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = xo(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, ya = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function $o(e) {
  return e !== void 0 && e !== "parent";
}
function Nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function zd(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function im(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function fs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = ur(e), s = bi({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ml(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const wl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), am = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, sm = ["INPUT", "SELECT", "TEXTAREA"];
function lm(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : sm.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Dd = (e) => "clientX" in e, ur = (e, t) => {
  var n, r;
  const o = Dd(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, zu = (e, t, n, r, o) => {
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
      ...wl(i)
    };
  });
};
function um({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Du({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case ze.Left:
      return [t - Yi(t - r, a), n];
    case ze.Right:
      return [t + Yi(r - t, a), n];
    case ze.Top:
      return [t, n - Yi(n - o, a)];
    case ze.Bottom:
      return [t, n + Yi(o - n, a)];
  }
}
function Hd({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: a = ze.Top, curvature: i = 0.25 }) {
  const [s, l] = Du({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = Du({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, m] = um({
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
    m
  ];
}
function Id({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function cm({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function dm({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = Ya(ma(e), ma(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return li(i, Za(a)) > 0;
}
const fm = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, vm = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), pm = (e, t) => {
  if (!e.source || !e.target)
    return Ld("006", Ro.error006()), t;
  let n;
  return tm(e) ? n = { ...e } : n = {
    ...e,
    id: fm(e)
  }, vm(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Is({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Id({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const Hu = {
  [ze.Left]: { x: -1, y: 0 },
  [ze.Right]: { x: 1, y: 0 },
  [ze.Top]: { x: 0, y: -1 },
  [ze.Bottom]: { x: 0, y: 1 }
}, gm = ({ source: e, sourcePosition: t = ze.Bottom, target: n }) => t === ze.Left || t === ze.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Iu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function hm({ source: e, sourcePosition: t = ze.Bottom, target: n, targetPosition: r = ze.Top, center: o, offset: a }) {
  const i = Hu[t], s = Hu[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = gm({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], m, _;
  const x = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [h, $, b, E] = Id({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    m = o.x ?? h, _ = o.y ?? $;
    const O = [
      { x: m, y: l.y },
      { x: m, y: u.y }
    ], T = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    i[d] === f ? v = d === "x" ? O : T : v = d === "x" ? T : O;
  } else {
    const O = [{ x: l.x, y: u.y }], T = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? T : O : v = i.y === f ? O : T, t === r) {
      const j = Math.abs(e[d] - n[d]);
      if (j <= a) {
        const X = Math.min(a - 1, a - j);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * X : S[d] = (u[d] > n[d] ? -1 : 1) * X;
      }
    }
    if (t !== r) {
      const j = d === "x" ? "y" : "x", X = i[d] === s[j], P = l[j] > u[j], M = l[j] < u[j];
      (i[d] === 1 && (!X && P || X && M) || i[d] !== 1 && (!X && M || X && P)) && (v = d === "x" ? O : T);
    }
    const N = { x: l.x + x.x, y: l.y + x.y }, z = { x: u.x + S.x, y: u.y + S.y }, D = Math.max(Math.abs(N.x - v[0].x), Math.abs(z.x - v[0].x)), W = Math.max(Math.abs(N.y - v[0].y), Math.abs(z.y - v[0].y));
    D >= W ? (m = (N.x + z.x) / 2, _ = v[0].y) : (m = v[0].x, _ = (N.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + S.x, y: u.y + S.y },
    n
  ], m, _, b, E];
}
function mm(e, t, n, r) {
  const o = Math.min(Iu(e, t) / 2, Iu(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function wa({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: a = ze.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, m] = hm({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((_, x, S) => {
    let h = "";
    return S > 0 && S < c.length - 1 ? h = mm(c[S - 1], x, c[S + 1], i) : h = `${S === 0 ? "M" : "L"}${x.x} ${x.y}`, _ += h, _;
  }, ""), d, f, v, m];
}
function Bu(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function ym(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Bu(n) || !Bu(r))
    return null;
  const o = n.internals.handleBounds || ju(n.handles), a = r.internals.handleBounds || ju(r.handles), i = Yu((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Yu(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Br.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Ro.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || ze.Bottom, u = (s == null ? void 0 : s.position) || ze.Top, c = ui(n, i, l), d = ui(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function ju(e) {
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
function ui(e, t, n = ze.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? Nr(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ze.Top:
      return { x: o + i / 2, y: a };
    case ze.Right:
      return { x: o + i, y: a + s / 2 };
    case ze.Bottom:
      return { x: o + i / 2, y: a + s };
    case ze.Left:
      return { x: o, y: a + s / 2 };
  }
}
function Yu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Bs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function wm(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Bs(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function bm(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case ze.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case ze.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case ze.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const bl = {
  nodeOrigin: [0, 0],
  nodeExtent: ga,
  elevateNodesOnSelect: !0,
  defaults: {}
}, xm = {
  ...bl,
  checkEquality: !0
};
function xl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function _m(e, t, n) {
  const r = xl(bl, n);
  for (const o of e.values())
    if (o.parentId)
      _l(o, e, t, r);
    else {
      const a = yi(o, r.nodeOrigin), i = $o(o.extent) ? o.extent : r.nodeExtent, s = jr(a, i, Nr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bd(e, t, n, r) {
  var o, a;
  const i = xl(xm, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = yi(u, i.nodeOrigin), f = $o(u.extent) ? u.extent : i.nodeExtent, v = jr(d, f, Nr(u));
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
          z: jd(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && _l(c, t, n, r);
  }
}
function $m(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function _l(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = xl(bl, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  $m(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Cm(e, l, a, i, u), { positionAbsolute: v } = e.internals, m = c !== v.x || d !== v.y;
  (m || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: c, y: d } : v,
      z: f
    }
  });
}
function jd(e, t) {
  return (ir(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Cm(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = Nr(e), l = yi(e, n), u = $o(e.extent) ? jr(l, e.extent, s) : l;
  let c = jr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Md(c, s, t));
  const d = jd(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function km(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? _o(l), c = Vd(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = Nr(l), v = l.origin ?? r, m = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, _ = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), S = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], $ = (S - f.height) * v[1];
    (m > 0 || _ > 0 || h || $) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - m + h,
        y: l.position.y - _ + $
      }
    }), (c = n.get(u)) == null || c.forEach((b) => {
      e.some((E) => E.id === b.id) || a.push({
        id: b.id,
        type: "position",
        position: {
          x: b.position.x + m,
          y: b.position.y + _
        }
      });
    })), (f.width < s.width || f.height < s.height || m || _) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (m ? v[0] * m - h : 0),
        height: S + (_ ? v[1] * _ - $ : 0)
      }
    });
  }), a;
}
function Em(e, t, n, r, o, a) {
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
    const m = wl(f.nodeElement), _ = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (_ || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), S = $o(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Md(h, m, t.get(v.parentId)) : S && (h = jr(h, S, m));
      const $ = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: zu("source", f.nodeElement, x, c, v.id),
            target: zu("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && _l($, t, n, { nodeOrigin: o }), s = !0, _ && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: _o($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = km(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Sm({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function Yd(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Zu("source", l, c, e, o, i), Zu("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function Pm(e, t) {
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
function Zd(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Zd(n, t) : !1;
}
function Wu(e, t, n) {
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
function Om(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !Zd(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
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
function vs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Tm({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function m({ noDragClassName: x, handleSelector: S, domNode: h, isSelectable: $, nodeId: b, nodeClickDistance: E = 0 }) {
    f = xn(h);
    function O({ x: D, y: W }, j) {
      const { nodeLookup: X, nodeExtent: P, snapGrid: M, snapToGrid: k, nodeOrigin: C, onNodeDrag: A, onSelectionDrag: H, onError: K, updateNodePositions: R } = t();
      a = { x: D, y: W };
      let I = !1, ne = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const J = wi(s);
        ne = Hs(J);
      }
      for (const [J, Z] of s) {
        if (!X.has(J))
          continue;
        let se = { x: D - Z.distance.x, y: W - Z.distance.y };
        k && (se = ml(se, M));
        let ge = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !Z.extent) {
          const { positionAbsolute: ae } = Z.internals, ye = ae.x - ne.x + P[0][0], Xe = ae.x + Z.measured.width - ne.x2 + P[1][0], tt = ae.y - ne.y + P[0][1], Ge = ae.y + Z.measured.height - ne.y2 + P[1][1];
          ge = [
            [ye, tt],
            [Xe, Ge]
          ];
        }
        const { position: ve, positionAbsolute: ue } = om({
          nodeId: J,
          nextPosition: se,
          nodeLookup: X,
          nodeExtent: ge,
          nodeOrigin: C,
          onError: K
        });
        I = I || Z.position.x !== ve.x || Z.position.y !== ve.y, Z.position = ve, Z.internals.positionAbsolute = ue;
      }
      if (I && (R(s, !0), j && (r || A || !b && H))) {
        const [J, Z] = vs({
          nodeId: b,
          dragItems: s,
          nodeLookup: X
        });
        r == null || r(j, s, J, Z), A == null || A(j, J, Z), b || H == null || H(j, Z);
      }
    }
    async function T() {
      if (!c)
        return;
      const { transform: D, panBy: W, autoPanSpeed: j, autoPanOnNodeDrag: X } = t();
      if (!X) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, M] = Nd(u, c, j);
      (P !== 0 || M !== 0) && (a.x = (a.x ?? 0) - P / D[2], a.y = (a.y ?? 0) - M / D[2], await W({ x: P, y: M }) && O(a, null)), i = requestAnimationFrame(T);
    }
    function N(D) {
      var W;
      const { nodeLookup: j, multiSelectionActive: X, nodesDraggable: P, transform: M, snapGrid: k, snapToGrid: C, selectNodesOnDrag: A, onNodeDragStart: H, onSelectionDragStart: K, unselectNodesAndEdges: R } = t();
      d = !0, (!A || !$) && !X && b && ((W = j.get(b)) != null && W.selected || R()), $ && A && b && (e == null || e(b));
      const I = fs(D.sourceEvent, { transform: M, snapGrid: k, snapToGrid: C, containerBounds: c });
      if (a = I, s = Om(j, P, I, b), s.size > 0 && (n || H || !b && K)) {
        const [ne, J] = vs({
          nodeId: b,
          dragItems: s,
          nodeLookup: j
        });
        n == null || n(D.sourceEvent, s, ne, J), H == null || H(D.sourceEvent, ne, J), b || K == null || K(D.sourceEvent, J);
      }
    }
    const z = u1().clickDistance(E).on("start", (D) => {
      const { domNode: W, nodeDragThreshold: j, transform: X, snapGrid: P, snapToGrid: M } = t();
      c = (W == null ? void 0 : W.getBoundingClientRect()) || null, v = !1, j === 0 && N(D), a = fs(D.sourceEvent, { transform: X, snapGrid: P, snapToGrid: M, containerBounds: c }), u = ur(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: W, transform: j, snapGrid: X, snapToGrid: P, nodeDragThreshold: M, nodeLookup: k } = t(), C = fs(D.sourceEvent, { transform: j, snapGrid: X, snapToGrid: P, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      b && !k.has(b)) && (v = !0), !v) {
        if (!l && W && d && (l = !0, T()), !d) {
          const A = C.xSnapped - (a.x ?? 0), H = C.ySnapped - (a.y ?? 0);
          Math.sqrt(A * A + H * H) > M && N(D);
        }
        (a.x !== C.xSnapped || a.y !== C.ySnapped) && s && d && (u = ur(D.sourceEvent, c), O(C, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: W, updateNodePositions: j, onNodeDragStop: X, onSelectionDragStop: P } = t();
        if (j(s, !1), o || X || !b && P) {
          const [M, k] = vs({
            nodeId: b,
            dragItems: s,
            nodeLookup: W,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, M, k), X == null || X(D.sourceEvent, M, k), b || P == null || P(D.sourceEvent, k);
        }
      }
    }).filter((D) => {
      const W = D.target;
      return !D.button && (!x || !Wu(W, `.${x}`, h)) && (!S || Wu(W, S, h));
    });
    f.call(z);
  }
  function _() {
    f == null || f.on(".drag", null);
  }
  return {
    update: m,
    destroy: _
  };
}
function Rm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    li(o, _o(a)) > 0 && r.push(a);
  return r;
}
const Mm = 250;
function Nm(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Rm(e, n, t + Mm);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = ui(u, d, d.position, !0), m = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      m > t || (m < s ? (i = [{ ...d, x: f, y: v }], s = m) : m === s && i.push({ ...d, x: f, y: v }));
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
function Wd(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...ui(u, d, d.position, !0) } : d;
}
function Xd(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Vm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Kd = () => !0;
function Lm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: _, onConnectEnd: x, isValidConnection: S = Kd, onReconnectEnd: h, updateConnection: $, getTransform: b, getFromHandle: E, autoPanSpeed: O }) {
  const T = am(e.target);
  let N = 0, z;
  const { x: D, y: W } = ur(e), j = T == null ? void 0 : T.elementFromPoint(D, W), X = Xd(a, j), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !X)
    return;
  const M = Wd(o, X, r, l, t);
  if (!M)
    return;
  let k = ur(e, P), C = !1, A = null, H = !1, K = null;
  function R() {
    if (!c || !P)
      return;
    const [ve, ue] = Nd(k, P, O);
    f({ x: ve, y: ue }), N = requestAnimationFrame(R);
  }
  const I = {
    ...M,
    nodeId: o,
    type: X,
    position: M.position
  }, ne = l.get(o), J = {
    inProgress: !0,
    isValid: null,
    from: ui(ne, I, ze.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: ne,
    to: k,
    toHandle: null,
    toPosition: Ru[I.position],
    toNode: null
  };
  $(J);
  let Z = J;
  m == null || m(e, { nodeId: o, handleId: r, handleType: X });
  function se(ve) {
    if (!E() || !I) {
      ge(ve);
      return;
    }
    const ue = b();
    k = ur(ve, P), z = Nm(bi(k, ue, !1, [1, 1]), n, l, I), C || (R(), C = !0);
    const ae = Fd(ve, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: S,
      doc: T,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    K = ae.handleDomNode, A = ae.connection, H = Vm(!!z, ae.isValid);
    const ye = {
      // from stays the same
      ...Z,
      isValid: H,
      to: z && H ? Ad({ x: z.x, y: z.y }, ue) : k,
      toHandle: ae.toHandle,
      toPosition: H && ae.toHandle ? ae.toHandle.position : Ru[I.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null
    };
    H && z && Z.toHandle && ye.toHandle && Z.toHandle.type === ye.toHandle.type && Z.toHandle.nodeId === ye.toHandle.nodeId && Z.toHandle.id === ye.toHandle.id && Z.to.x === ye.to.x && Z.to.y === ye.to.y || ($(ye), Z = ye);
  }
  function ge(ve) {
    (z || K) && A && H && (_ == null || _(A));
    const { inProgress: ue, ...ae } = Z, ye = {
      ...ae,
      toPosition: Z.toHandle ? Z.toPosition : null
    };
    x == null || x(ve, ye), a && (h == null || h(ve, ye)), v(), cancelAnimationFrame(N), C = !1, H = !1, A = null, K = null, T.removeEventListener("mousemove", se), T.removeEventListener("mouseup", ge), T.removeEventListener("touchmove", se), T.removeEventListener("touchend", ge);
  }
  T.addEventListener("mousemove", se), T.addEventListener("mouseup", ge), T.addEventListener("touchmove", se), T.addEventListener("touchend", ge);
}
function Fd(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Kd, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: m } = ur(e), _ = i.elementFromPoint(v, m), x = _ != null && _.classList.contains(`${s}-flow__handle`) ? _ : f, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Xd(void 0, x), $ = x.getAttribute("data-nodeid"), b = x.getAttribute("data-handleid"), E = x.classList.contains("connectable"), O = x.classList.contains("connectableend");
    if (!$ || !h)
      return S;
    const T = {
      source: d ? $ : r,
      sourceHandle: d ? b : o,
      target: d ? r : $,
      targetHandle: d ? o : b
    };
    S.connection = T;
    const N = E && O && (n === Br.Strict ? d && h === "source" || !d && h === "target" : $ !== r || b !== o);
    S.isValid = N && u(T), S.toHandle = Wd($, h, b, c, n, !1);
  }
  return S;
}
const Am = {
  onPointerDown: Lm,
  isValid: Fd
};
function zm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = xn(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = ($) => {
      const b = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const E = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, O = b[2] * Math.pow(2, E);
      t.scaleTo(O);
    };
    let _ = [0, 0];
    const x = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (_ = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, S = ($) => {
      const b = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], O = [E[0] - _[0], E[1] - _[1]];
      _ = E;
      const T = r() * Math.max(b[2], Math.log(b[2])) * (v ? -1 : 1), N = {
        x: b[0] - O[0] * T,
        y: b[1] - O[1] * T
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: b[2]
      }, z, s);
    }, h = Od().on("start", x).on("zoom", d ? S : null).on("zoom.wheel", f ? m : null);
    o.call(h, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: Sn
  };
}
const Dm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wa = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ps = ({ x: e, y: t, zoom: n }) => ja.translate(e, t).scale(n), io = (e, t) => e.target.closest(`.${t}`), qd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), gs = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ud = (e) => {
  const t = e.ctrlKey && ya() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Hm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (io(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = Sn(c), S = Ud(c), h = d * Math.pow(2, S);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === Sr.Vertical ? 0 : c.deltaX * f, m = o === Sr.Horizontal ? 0 : c.deltaY * f;
    !ya() && c.shiftKey && o !== Sr.Vertical && (v = c.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(m / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Wa(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function Im({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || io(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Bm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Wa(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function jm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && qd(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Wa(a.transform)));
  };
}
function Ym({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && qd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Dm(e.prevViewport, i.transform))) {
      const l = Wa(i.transform);
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
function Zm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (io(c, `${u}-flow__node`) || io(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || io(c, s) && c.type === "wheel" || io(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const m = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && m;
  };
}
function Wm({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Od().clickDistance(!ir(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = xn(e).call(f);
  $({
    x: a.x,
    y: a.y,
    zoom: xo(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = v.on("wheel.zoom"), _ = v.on("dblclick.zoom");
  f.wheelDelta(Ud);
  function x(j, X) {
    return v ? new Promise((P) => {
      f == null || f.transform(gs(v, X == null ? void 0 : X.duration, () => P(!0)), j);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: j, noPanClassName: X, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: k, panOnDrag: C, panOnScrollMode: A, panOnScrollSpeed: H, preventScrolling: K, zoomOnPinch: R, zoomOnScroll: I, zoomOnDoubleClick: ne, zoomActivationKeyPressed: J, lib: Z, onTransformChange: se }) {
    M && !c.isZoomingOrPanning && h();
    const ge = k && !J && !M ? Hm({
      zoomPanValues: c,
      noWheelClassName: j,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: A,
      panOnScrollSpeed: H,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : Im({
      noWheelClassName: j,
      preventScrolling: K,
      d3ZoomHandler: m
    });
    if (v.on("wheel.zoom", ge, { passive: !1 }), !M) {
      const ue = Bm({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ue);
      const ae = jm({
        zoomPanValues: c,
        panOnDrag: C,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: se
      });
      f.on("zoom", ae);
      const ye = Ym({
        zoomPanValues: c,
        panOnDrag: C,
        panOnScroll: k,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ye);
    }
    const ve = Zm({
      zoomActivationKeyPressed: J,
      panOnDrag: C,
      zoomOnScroll: I,
      panOnScroll: k,
      zoomOnDoubleClick: ne,
      zoomOnPinch: R,
      userSelectionActive: M,
      noPanClassName: X,
      noWheelClassName: j,
      lib: Z
    });
    f.filter(ve), ne ? v.on("dblclick.zoom", _) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function $(j, X, P) {
    const M = ps(j), k = f == null ? void 0 : f.constrain()(M, X, P);
    return k && await x(k), new Promise((C) => C(k));
  }
  async function b(j, X) {
    const P = ps(j);
    return await x(P, X), new Promise((M) => M(P));
  }
  function E(j) {
    if (v) {
      const X = ps(j), P = v.property("__zoom");
      (P.k !== j.zoom || P.x !== j.x || P.y !== j.y) && (f == null || f.transform(v, X, null, { sync: !0 }));
    }
  }
  function O() {
    const j = v ? Pd(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: j.x, y: j.y, zoom: j.k };
  }
  function T(j, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(gs(v, X == null ? void 0 : X.duration, () => P(!0)), j);
    }) : Promise.resolve(!1);
  }
  function N(j, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(gs(v, X == null ? void 0 : X.duration, () => P(!0)), j);
    }) : Promise.resolve(!1);
  }
  function z(j) {
    f == null || f.scaleExtent(j);
  }
  function D(j) {
    f == null || f.translateExtent(j);
  }
  function W(j) {
    const X = !ir(j) || j < 0 ? 0 : j;
    f == null || f.clickDistance(X);
  }
  return {
    update: S,
    destroy: h,
    setViewport: b,
    setViewportConstrained: $,
    getViewport: O,
    scaleTo: T,
    scaleBy: N,
    setScaleExtent: z,
    setTranslateExtent: D,
    syncViewport: E,
    setClickDistance: W
  };
}
var Xu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Xu || (Xu = {}));
var Xm = /* @__PURE__ */ he('<div role="button" tabindex="-1"><!></div>');
function Yr(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(ne, "$connectable", n), a = () => le(ve, "$connectionRadius", n), i = () => le(se, "$domNode", n), s = () => le(ge, "$nodeLookup", n), l = () => le(Z, "$connectionMode", n), u = () => le(ye, "$lib", n), c = () => le(me, "$autoPanOnConnect", n), d = () => le(it, "$flowId", n), f = () => le(ae, "$isValidConnectionStore", n), v = () => le(tt, "$onedgecreate", n), m = () => le(at, "$onConnectAction", n), _ = () => le(Ie, "$onConnectStartAction", n), x = () => le(et, "$onConnectEndAction", n), S = () => le(ue, "$viewport", n), h = () => le(dt, "$connection", n), $ = () => le($e, "$edges", n), b = () => le(Te, "$connectionLookup", n), E = fe(), O = fe(), T = fe(), N = fe(), z = fe(), D = fe(), W = fe(), j = fe();
  let X = w(t, "id", 12, void 0), P = w(t, "type", 12, "source"), M = w(t, "position", 28, () => ze.Top), k = w(t, "style", 12, void 0), C = w(t, "isValidConnection", 12, void 0), A = w(t, "onconnect", 12, void 0), H = w(t, "ondisconnect", 12, void 0), K = w(t, "isConnectable", 12, void 0), R = w(t, "class", 12, void 0);
  const I = Hr("svelteflow__node_id"), ne = Hr("svelteflow__node_connectable"), J = mt(), {
    connectionMode: Z,
    domNode: se,
    nodeLookup: ge,
    connectionRadius: ve,
    viewport: ue,
    isValidConnection: ae,
    lib: ye,
    addEdge: Xe,
    onedgecreate: tt,
    panBy: Ge,
    cancelConnection: Qe,
    updateConnection: q,
    autoPanOnConnect: me,
    edges: $e,
    connectionLookup: Te,
    onconnect: at,
    onconnectstart: Ie,
    onconnectend: et,
    flowId: it,
    connection: dt
  } = J;
  function St(Ne) {
    const $t = Dd(Ne);
    ($t && Ne.button === 0 || !$t) && Am.onPointerDown(Ne, {
      handleId: p(T),
      nodeId: I,
      isTarget: p(E),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: C() ?? f(),
      updateConnection: q,
      cancelConnection: Qe,
      panBy: Ge,
      onConnect: (Re) => {
        var We;
        const lt = v() ? v()(Re) : Re;
        lt && (Xe(lt), (We = m()) == null || We(Re));
      },
      onConnectStart: (Re, We) => {
        var lt;
        (lt = _()) == null || lt(Re, {
          nodeId: We.nodeId,
          handleId: We.handleId,
          handleType: We.handleType
        });
      },
      onConnectEnd: (Re, We) => {
        var lt;
        (lt = x()) == null || lt(Re, We);
      },
      getTransform: () => [
        S().x,
        S().y,
        S().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ce = fe(null), Be = fe();
  _e(() => oe(P()), () => {
    ie(E, P() === "target");
  }), _e(
    () => (oe(K()), o()),
    () => {
      ie(O, K() !== void 0 ? K() : o());
    }
  ), _e(() => oe(X()), () => {
    ie(T, X() || null);
  }), _e(
    () => (oe(A()), oe(H()), $(), b(), oe(P()), oe(X())),
    () => {
      (A() || H()) && ($(), ie(Be, b().get(`${I}-${P()}${X() ? `-${X()}` : ""}`)));
    }
  ), _e(
    () => (p(ce), p(Be), oe(H()), oe(A())),
    () => {
      if (p(ce) && !Q0(p(Be), p(ce))) {
        const Ne = p(Be) ?? /* @__PURE__ */ new Map();
        Mu(p(ce), Ne, H()), Mu(Ne, p(ce), A());
      }
      ie(ce, p(Be) ?? /* @__PURE__ */ new Map());
    }
  ), _e(() => h(), () => {
    ie(N, !!h().fromHandle);
  }), _e(
    () => (h(), oe(P()), p(T)),
    () => {
      var Ne, $t, Re;
      ie(z, ((Ne = h().fromHandle) == null ? void 0 : Ne.nodeId) === I && (($t = h().fromHandle) == null ? void 0 : $t.type) === P() && ((Re = h().fromHandle) == null ? void 0 : Re.id) === p(T));
    }
  ), _e(
    () => (h(), oe(P()), p(T)),
    () => {
      var Ne, $t, Re;
      ie(D, ((Ne = h().toHandle) == null ? void 0 : Ne.nodeId) === I && (($t = h().toHandle) == null ? void 0 : $t.type) === P() && ((Re = h().toHandle) == null ? void 0 : Re.id) === p(T));
    }
  ), _e(
    () => (l(), h(), oe(P()), p(T)),
    () => {
      var Ne, $t, Re;
      ie(W, l() === Br.Strict ? ((Ne = h().fromHandle) == null ? void 0 : Ne.type) !== P() : I !== (($t = h().fromHandle) == null ? void 0 : $t.nodeId) || p(T) !== ((Re = h().fromHandle) == null ? void 0 : Re.id));
    }
  ), _e(() => (p(D), h()), () => {
    ie(j, p(D) && h().isValid);
  }), Wt(), qe();
  var pe = Xm();
  xe(pe, "data-nodeid", I);
  var rn = te(pe);
  qt(rn, t, "default", {}), ee(pe), He(
    (Ne) => {
      xe(pe, "data-handleid", p(T)), xe(pe, "data-handlepos", M()), xe(pe, "data-id", `${d() ?? ""}-${I ?? ""}-${X() || ""}-${P() ?? ""}`), yo(pe, Gn(Ne)), xe(pe, "style", k()), Tt(pe, "valid", p(j)), Tt(pe, "connectingto", p(D)), Tt(pe, "connectingfrom", p(z)), Tt(pe, "source", !p(E)), Tt(pe, "target", p(E)), Tt(pe, "connectablestart", p(O)), Tt(pe, "connectableend", p(O)), Tt(pe, "connectable", p(O)), Tt(pe, "connectionindicator", p(O) && (!p(N) || p(W)));
    },
    [
      () => nn([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        R()
      ])
    ],
    Pe
  ), gt("mousedown", pe, St), gt("touchstart", pe, St), Y(e, pe);
  var Xt = ke({
    get id() {
      return X();
    },
    set id(Ne) {
      X(Ne), y();
    },
    get type() {
      return P();
    },
    set type(Ne) {
      P(Ne), y();
    },
    get position() {
      return M();
    },
    set position(Ne) {
      M(Ne), y();
    },
    get style() {
      return k();
    },
    set style(Ne) {
      k(Ne), y();
    },
    get isValidConnection() {
      return C();
    },
    set isValidConnection(Ne) {
      C(Ne), y();
    },
    get onconnect() {
      return A();
    },
    set onconnect(Ne) {
      A(Ne), y();
    },
    get ondisconnect() {
      return H();
    },
    set ondisconnect(Ne) {
      H(Ne), y();
    },
    get isConnectable() {
      return K();
    },
    set isConnectable(Ne) {
      K(Ne), y();
    },
    get class() {
      return R();
    },
    set class(Ne) {
      R(Ne), y();
    }
  });
  return r(), Xt;
}
be(
  Yr,
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
var Km = /* @__PURE__ */ he("<!> <!>", 1);
function ba(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, ["data", "targetPosition", "sourcePosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), a = w(t, "sourcePosition", 12, void 0);
  qe();
  var i = Km(), s = Me(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Top);
  Yr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  });
  var u = G(s), c = G(u);
  const d = /* @__PURE__ */ Pe(() => a() ?? ze.Bottom);
  return Yr(c, {
    type: "source",
    get position() {
      return p(d);
    }
  }), He(() => {
    var f;
    return Un(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), Y(e, i), ke({
    get data() {
      return r();
    },
    set data(f) {
      r(f), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), y();
    },
    get sourcePosition() {
      return a();
    },
    set sourcePosition(f) {
      a(f), y();
    }
  });
}
be(
  ba,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Fm = /* @__PURE__ */ he(" <!>", 1);
function Gd(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, ["data", "sourcePosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  qe(), ot();
  var a = Fm(), i = Me(a), s = G(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Bottom);
  return Yr(s, {
    type: "source",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Un(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), Y(e, a), ke({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), y();
    }
  });
}
be(Gd, { data: {}, sourcePosition: {} }, [], [], !0);
var qm = /* @__PURE__ */ he(" <!>", 1);
function Jd(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, ["data", "targetPosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  qe(), ot();
  var a = qm(), i = Me(a), s = G(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Top);
  return Yr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Un(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), Y(e, a), ke({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), y();
    }
  });
}
be(Jd, { data: {}, targetPosition: {} }, [], [], !0);
function Qd(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, []);
}
be(Qd, {}, [], [], !0);
function Ku(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function xa(e, { target: t, domNode: n }) {
  return Ku(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ku(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Um = /* @__PURE__ */ he("<div><!></div>");
function ef(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(a, "$domNode", n), { domNode: a } = mt();
  qe();
  var i = Um(), s = te(i);
  qt(s, t, "default", {}), ee(i), Ft(i, (l, u) => xa == null ? void 0 : xa(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), Y(e, i), ke(), r();
}
be(ef, {}, ["default"], [], !0);
function tf() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = mt();
  return (s) => {
    const l = Q(e).get(s);
    if (!l) {
      console.warn("012", Ro.error012(s));
      return;
    }
    (l.selectable || Q(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && Q(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var Gm = /* @__PURE__ */ he('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function nf(e, t) {
  Ce(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const a = tf(), i = Hr("svelteflow__edge_id");
  return qe(), ef(e, {
    children: (s, l) => {
      var u = Gm(), c = te(u);
      qt(c, t, "default", {}), ee(u), He(() => {
        xe(u, "style", "pointer-events: all;" + n()), Mt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), gt("keyup", u, () => {
      }), gt("click", u, () => {
        i && a(i);
      }), Y(s, u);
    },
    $$slots: { default: !0 }
  }), ke({
    get style() {
      return n();
    },
    set style(s) {
      n(s), y();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), y();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), y();
    }
  });
}
be(nf, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var Jm = /* @__PURE__ */ De('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Qm = /* @__PURE__ */ De('<path fill="none"></path><!><!>', 1);
function xi(e, t) {
  Ce(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), a = w(t, "labelX", 12, void 0), i = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  qe();
  var m = Qm(), _ = Me(m), x = G(_);
  {
    var S = (b) => {
      var E = Jm();
      xe(E, "stroke-opacity", 0), xe(E, "stroke-width", v), He(() => xe(E, "d", r())), Y(b, E);
    };
    Le(x, (b) => {
      v && b(S);
    });
  }
  var h = G(x);
  {
    var $ = (b) => {
      nf(b, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (E, O) => {
          ot();
          var T = bt();
          He(() => Un(T, o())), Y(E, T);
        },
        $$slots: { default: !0 }
      });
    };
    Le(h, (b) => {
      o() && b($);
    });
  }
  return He(
    (b) => {
      xe(_, "id", n()), xe(_, "d", r()), Fr(_, Gn(b)), xe(_, "marker-start", l()), xe(_, "marker-end", u()), xe(_, "style", c());
    },
    [
      () => nn(["svelte-flow__edge-path", f()])
    ],
    Pe
  ), Y(e, m), ke({
    get id() {
      return n();
    },
    set id(b) {
      n(b), y();
    },
    get path() {
      return r();
    },
    set path(b) {
      r(b), y();
    },
    get label() {
      return o();
    },
    set label(b) {
      o(b), y();
    },
    get labelX() {
      return a();
    },
    set labelX(b) {
      a(b), y();
    },
    get labelY() {
      return i();
    },
    set labelY(b) {
      i(b), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(b) {
      l(b), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(b) {
      u(b), y();
    },
    get style() {
      return c();
    },
    set style(b) {
      c(b), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), y();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), y();
    }
  });
}
be(
  xi,
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
function _a(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, [
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
  ]), Ce(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(S())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(Hd({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S()
      }));
    }
  ), Wt(), qe(), xi(e, {
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
  }), ke({
    get label() {
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return _();
    },
    set targetX(h) {
      _(h), y();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(h) {
      S(h), y();
    }
  });
}
be(
  _a,
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
function rf(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, [
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
  ]), Ce(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(S())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(wa({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S()
      }));
    }
  ), Wt(), qe(), xi(e, {
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
  }), ke({
    get label() {
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return _();
    },
    set targetX(h) {
      _(h), y();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(h) {
      S(h), y();
    }
  });
}
be(
  rf,
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
function of(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, [
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
  ]), Ce(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(m()), oe(_())),
    () => {
      ((x) => (ie(r, x[0]), ie(o, x[1]), ie(a, x[2])))(Is({
        sourceX: f(),
        sourceY: v(),
        targetX: m(),
        targetY: _()
      }));
    }
  ), Wt(), qe(), xi(e, {
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
  }), ke({
    get label() {
      return i();
    },
    set label(x) {
      i(x), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), y();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), y();
    },
    get targetX() {
      return m();
    },
    set targetX(x) {
      m(x), y();
    },
    get targetY() {
      return _();
    },
    set targetY(x) {
      _(x), y();
    }
  });
}
be(
  of,
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
function af(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Et(n, [
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
  ]), Ce(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), S = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(S())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(wa({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S(),
        borderRadius: 0
      }));
    }
  ), Wt(), qe(), xi(e, {
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
  }), ke({
    get label() {
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return _();
    },
    set targetX(h) {
      _(h), y();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(h) {
      S(h), y();
    }
  });
}
be(
  af,
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
function ey(e, t) {
  const n = e.set, r = t.set, o = Q(e), a = Q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function ty(e, t) {
  const n = e.set, r = t.set;
  let o = Q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const ny = (e, t, n) => {
  if (!n)
    return;
  const r = Q(e), o = t.set, a = n.set;
  let i = n ? Q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, ry = (e, t, n, r = [0, 0], o = ga) => {
  const { subscribe: a, set: i, update: s } = Oe([]);
  let l = e, u = {}, c = !0;
  const d = (_) => (Bd(_, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = _, i(l), l), f = (_) => d(_(l)), v = (_) => {
    u = _;
  }, m = (_) => {
    c = _.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: m
  };
}, oy = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = Oe([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((m) => ({ ...l, ...m })) : f;
    Yd(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, sf = {
  input: Gd,
  output: Jd,
  default: ba,
  group: Qd
}, lf = {
  straight: of,
  smoothstep: rf,
  default: _a,
  step: af
}, iy = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? ga;
  Bd(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yd(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const m = wi(s, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    v = yl(m, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Oe(null),
    nodes: ry(e, s, l, d, f),
    nodeLookup: bn(s),
    parentLookup: bn(l),
    edgeLookup: bn(c),
    visibleNodes: bn([]),
    edges: oy(t, u, c),
    visibleEdges: bn([]),
    connectionLookup: bn(u),
    height: Oe(500),
    width: Oe(500),
    minZoom: Oe(0.5),
    maxZoom: Oe(2),
    nodeOrigin: Oe(d),
    nodeDragThreshold: Oe(1),
    nodeExtent: Oe(f),
    translateExtent: Oe(ga),
    autoPanOnNodeDrag: Oe(!0),
    autoPanOnConnect: Oe(!0),
    fitViewOnInit: Oe(!1),
    fitViewOnInitDone: Oe(!1),
    fitViewOptions: Oe(void 0),
    panZoom: Oe(null),
    snapGrid: Oe(null),
    dragging: Oe(!1),
    selectionRect: Oe(null),
    selectionKeyPressed: Oe(!1),
    multiselectionKeyPressed: Oe(!1),
    deleteKeyPressed: Oe(!1),
    panActivationKeyPressed: Oe(!1),
    zoomActivationKeyPressed: Oe(!1),
    selectionRectMode: Oe(null),
    selectionMode: Oe(ha.Partial),
    nodeTypes: Oe(sf),
    edgeTypes: Oe(lf),
    viewport: Oe(v),
    connectionMode: Oe(Br.Strict),
    domNode: Oe(null),
    connection: bn(zs),
    connectionLineType: Oe(fo.Bezier),
    connectionRadius: Oe(20),
    isValidConnection: Oe(() => !0),
    nodesDraggable: Oe(!0),
    nodesConnectable: Oe(!0),
    elementsSelectable: Oe(!0),
    selectNodesOnDrag: Oe(!0),
    markers: bn([]),
    defaultMarkerColor: Oe("#b1b1b7"),
    lib: bn("svelte"),
    onlyRenderVisibleElements: Oe(!1),
    onerror: Oe(Ld),
    ondelete: Oe(void 0),
    onedgecreate: Oe(void 0),
    onconnect: Oe(void 0),
    onconnectstart: Oe(void 0),
    onconnectend: Oe(void 0),
    onbeforedelete: Oe(void 0),
    nodesInitialized: Oe(!1),
    edgesInitialized: Oe(!1),
    viewportInitialized: Oe(!1),
    initialized: bn(!1)
  };
};
function ay(e) {
  const t = Er([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && dm({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Er([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = ym({
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
      zIndex: cm({
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
function sy(e) {
  return Er([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? Td(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Xa = Symbol();
function uf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = iy({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(k) {
    s.nodeTypes.set({
      ...sf,
      ...k
    });
  }
  function u(k) {
    s.edgeTypes.set({
      ...lf,
      ...k
    });
  }
  function c(k) {
    const C = Q(s.edges);
    s.edges.set(pm(k, C));
  }
  const d = (k, C = !1) => {
    var A;
    const H = Q(s.nodeLookup);
    for (const [K, R] of k) {
      const I = (A = H.get(K)) == null ? void 0 : A.internals.userNode;
      I && (I.position = R.position, I.dragging = C);
    }
    s.nodes.update((K) => K);
  };
  function f(k) {
    var C, A, H;
    const K = Q(s.nodeLookup), R = Q(s.parentLookup), { changes: I, updatedInternals: ne } = Em(k, K, Q(s.parentLookup), Q(s.domNode), Q(s.nodeOrigin));
    if (ne) {
      if (_m(K, R, { nodeOrigin: a, nodeExtent: i }), !Q(s.fitViewOnInitDone) && Q(s.fitViewOnInit)) {
        const J = Q(s.fitViewOptions), Z = m({
          ...J,
          nodes: J == null ? void 0 : J.nodes
        });
        s.fitViewOnInitDone.set(Z);
      }
      for (const J of I) {
        const Z = (C = K.get(J.id)) == null ? void 0 : C.internals.userNode;
        if (Z)
          switch (J.type) {
            case "dimensions": {
              const se = { ...Z.measured, ...J.dimensions };
              J.setAttributes && (Z.width = ((A = J.dimensions) == null ? void 0 : A.width) ?? Z.width, Z.height = ((H = J.dimensions) == null ? void 0 : H.height) ?? Z.height), Z.measured = se;
              break;
            }
            case "position":
              Z.position = J.position ?? Z.position;
              break;
          }
      }
      s.nodes.update((J) => J), Q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(k) {
    const C = Q(s.panZoom), A = Q(s.domNode);
    if (!C || !A)
      return Promise.resolve(!1);
    const { width: H, height: K } = wl(A), R = Nu(Q(s.nodeLookup), k);
    return Vu({
      nodes: R,
      width: H,
      height: K,
      minZoom: Q(s.minZoom),
      maxZoom: Q(s.maxZoom),
      panZoom: C
    }, k);
  }
  function m(k) {
    const C = Q(s.panZoom);
    if (!C)
      return !1;
    const A = Nu(Q(s.nodeLookup), k);
    return Vu({
      nodes: A,
      width: Q(s.width),
      height: Q(s.height),
      minZoom: Q(s.minZoom),
      maxZoom: Q(s.maxZoom),
      panZoom: C
    }, k), A.size > 0;
  }
  function _(k, C) {
    const A = Q(s.panZoom);
    return A ? A.scaleBy(k, C) : Promise.resolve(!1);
  }
  function x(k) {
    return _(1.2, k);
  }
  function S(k) {
    return _(1 / 1.2, k);
  }
  function h(k) {
    const C = Q(s.panZoom);
    C && (C.setScaleExtent([k, Q(s.maxZoom)]), s.minZoom.set(k));
  }
  function $(k) {
    const C = Q(s.panZoom);
    C && (C.setScaleExtent([Q(s.minZoom), k]), s.maxZoom.set(k));
  }
  function b(k) {
    const C = Q(s.panZoom);
    C && (C.setTranslateExtent(k), s.translateExtent.set(k));
  }
  function E(k) {
    let C = !1;
    return k.forEach((A) => {
      A.selected && (A.selected = !1, C = !0);
    }), C;
  }
  function O(k) {
    var C;
    (C = Q(s.panZoom)) == null || C.setClickDistance(k);
  }
  function T(k) {
    E((k == null ? void 0 : k.nodes) || Q(s.nodes)) && s.nodes.set(Q(s.nodes)), E((k == null ? void 0 : k.edges) || Q(s.edges)) && s.edges.set(Q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var C;
    if (k) {
      const A = Q(s.nodes), H = Q(s.edges), K = A.filter((J) => J.selected), R = H.filter((J) => J.selected), { nodes: I, edges: ne } = await Rd({
        nodesToRemove: K,
        edgesToRemove: R,
        nodes: A,
        edges: H,
        onBeforeDelete: Q(s.onbeforedelete)
      });
      (I.length || ne.length) && (s.nodes.update((J) => J.filter((Z) => !I.some((se) => se.id === Z.id))), s.edges.update((J) => J.filter((Z) => !ne.some((se) => se.id === Z.id))), (C = Q(s.ondelete)) == null || C({
        nodes: I,
        edges: ne
      }));
    }
  });
  function N(k) {
    const C = Q(s.multiselectionKeyPressed);
    s.nodes.update((A) => A.map((H) => {
      const K = k.includes(H.id), R = C && H.selected || K;
      return H.selected = R, H;
    })), C || s.edges.update((A) => A.map((H) => (H.selected = !1, H)));
  }
  function z(k) {
    const C = Q(s.multiselectionKeyPressed);
    s.edges.update((A) => A.map((H) => {
      const K = k.includes(H.id), R = C && H.selected || K;
      return H.selected = R, H;
    })), C || s.nodes.update((A) => A.map((H) => (H.selected = !1, H)));
  }
  function D(k) {
    var C;
    const A = (C = Q(s.nodes)) == null ? void 0 : C.find((H) => H.id === k);
    if (!A) {
      console.warn("012", Ro.error012(k));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), A.selected ? A.selected && Q(s.multiselectionKeyPressed) && T({ nodes: [A], edges: [] }) : N([k]);
  }
  function W(k) {
    const C = Q(s.viewport);
    return Sm({
      delta: k,
      panZoom: Q(s.panZoom),
      transform: [C.x, C.y, C.zoom],
      translateExtent: Q(s.translateExtent),
      width: Q(s.width),
      height: Q(s.height)
    });
  }
  const j = Oe(zs), X = (k) => {
    j.set({ ...k });
  };
  function P() {
    j.set(zs);
  }
  function M() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), T(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: ay(s),
    visibleNodes: sy(s),
    connection: Er([j, s.viewport], ([k, C]) => k.inProgress ? {
      ...k,
      to: bi(k.to, [C.x, C.y, C.zoom])
    } : { ...k }),
    markers: Er([s.edges, s.defaultMarkerColor, s.flowId], ([k, C, A]) => wm(k, { defaultColor: C, id: A })),
    initialized: (() => {
      let k = !1;
      const C = Q(s.nodes).length, A = Q(s.edges).length;
      return Er([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, K, R]) => k || (C === 0 ? k = R : A === 0 ? k = R && H : k = R && H && K, k));
    })(),
    // actions
    syncNodeStores: (k) => ey(s.nodes, k),
    syncEdgeStores: (k) => ty(s.edges, k),
    syncViewport: (k) => ny(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: S,
    fitView: (k) => v(k),
    setMinZoom: h,
    setMaxZoom: $,
    setTranslateExtent: b,
    setPaneClickDistance: O,
    unselectNodesAndEdges: T,
    addSelectedNodes: N,
    addSelectedEdges: z,
    handleNodeSelection: D,
    panBy: W,
    updateConnection: X,
    cancelConnection: P,
    reset: M
  };
}
function mt() {
  const e = Hr(Xa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function ly({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = uf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return ho(Xa, {
    getStore: () => s
  }), s;
}
function Fu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = Wm({
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
var uy = /* @__PURE__ */ he('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const cy = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function cf(e, t) {
  Ce(t, !1), Rt(e, cy);
  const [n, r] = _t(), o = () => le(A, "$panActivationKeyPressed", n), a = () => le(X, "$minZoom", n), i = () => le(P, "$maxZoom", n), s = () => le(H, "$zoomActivationKeyPressed", n), l = () => le(j, "$selectionRect", n), u = () => le(k, "$translateExtent", n), c = () => le(C, "$lib", n), d = fe(), f = fe(), v = fe();
  let m = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), S = w(t, "onMoveEnd", 12, void 0), h = w(t, "panOnScrollMode", 12), $ = w(t, "preventScrolling", 12), b = w(t, "zoomOnScroll", 12), E = w(t, "zoomOnDoubleClick", 12), O = w(t, "zoomOnPinch", 12), T = w(t, "panOnDrag", 12), N = w(t, "panOnScroll", 12), z = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: W,
    selectionRect: j,
    minZoom: X,
    maxZoom: P,
    dragging: M,
    translateExtent: k,
    lib: C,
    panActivationKeyPressed: A,
    zoomActivationKeyPressed: H,
    viewportInitialized: K
  } = mt(), R = (Z) => D.set({
    x: Z[0],
    y: Z[1],
    zoom: Z[2]
  });
  qr(() => {
    la(K, !0);
  }), _e(() => oe(m()), () => {
    ie(d, m() || { x: 0, y: 0, zoom: 1 });
  }), _e(
    () => (o(), oe(T())),
    () => {
      ie(f, o() || T());
    }
  ), _e(
    () => (o(), oe(N())),
    () => {
      ie(v, o() || N());
    }
  ), Wt(), qe();
  var I = uy(), ne = te(I);
  qt(ne, t, "default", {}), ee(I), Ft(I, (Z, se) => Fu == null ? void 0 : Fu(Z, se), () => ({
    viewport: D,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: p(d),
    dragging: M,
    panZoom: W,
    onPanZoomStart: _(),
    onPanZoom: x(),
    onPanZoomEnd: S(),
    zoomOnScroll: b(),
    zoomOnDoubleClick: E(),
    zoomOnPinch: O(),
    panOnScroll: p(v),
    panOnDrag: p(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || Sr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: R
  })), Y(e, I);
  var J = ke({
    get initialViewport() {
      return m();
    },
    set initialViewport(Z) {
      m(Z), y();
    },
    get onMoveStart() {
      return _();
    },
    set onMoveStart(Z) {
      _(Z), y();
    },
    get onMove() {
      return x();
    },
    set onMove(Z) {
      x(Z), y();
    },
    get onMoveEnd() {
      return S();
    },
    set onMoveEnd(Z) {
      S(Z), y();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(Z) {
      h(Z), y();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(Z) {
      $(Z), y();
    },
    get zoomOnScroll() {
      return b();
    },
    set zoomOnScroll(Z) {
      b(Z), y();
    },
    get zoomOnDoubleClick() {
      return E();
    },
    set zoomOnDoubleClick(Z) {
      E(Z), y();
    },
    get zoomOnPinch() {
      return O();
    },
    set zoomOnPinch(Z) {
      O(Z), y();
    },
    get panOnDrag() {
      return T();
    },
    set panOnDrag(Z) {
      T(Z), y();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(Z) {
      N(Z), y();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(Z) {
      z(Z), y();
    }
  });
  return r(), J;
}
be(
  cf,
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
function qu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Uu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var dy = /* @__PURE__ */ he('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const fy = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function df(e, t) {
  Ce(t, !1), Rt(e, fy);
  const [n, r] = _t(), o = () => le(P, "$panActivationKeyPressed", n), a = () => le(j, "$selectionKeyPressed", n), i = () => le(D, "$selectionRect", n), s = () => le(z, "$elementsSelectable", n), l = () => le(W, "$selectionRectMode", n), u = () => le(O, "$edges", n), c = () => le(E, "$nodeLookup", n), d = () => le(T, "$viewport", n), f = () => le(X, "$selectionMode", n), v = () => le(N, "$dragging", n), m = fe(), _ = fe(), x = fe();
  let S = w(t, "panOnDrag", 12, void 0), h = w(t, "selectionOnDrag", 12, void 0);
  const $ = za(), {
    nodes: b,
    nodeLookup: E,
    edges: O,
    viewport: T,
    dragging: N,
    elementsSelectable: z,
    selectionRect: D,
    selectionRectMode: W,
    selectionKeyPressed: j,
    selectionMode: X,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: M
  } = mt();
  let k = fe(), C = null, A = [], H = !1;
  function K(ae) {
    if (H) {
      H = !1;
      return;
    }
    $("paneclick", { event: ae }), M(), W.set(null);
  }
  function R(ae) {
    var ye, Xe;
    if (C = p(k).getBoundingClientRect(), !z || !p(_) || ae.button !== 0 || ae.target !== p(k) || !C)
      return;
    (Xe = (ye = ae.target) == null ? void 0 : ye.setPointerCapture) == null || Xe.call(ye, ae.pointerId);
    const { x: tt, y: Ge } = ur(ae, C);
    M(), D.set({
      width: 0,
      height: 0,
      startX: tt,
      startY: Ge,
      x: tt,
      y: Ge
    });
  }
  function I(ae) {
    if (!p(_) || !C || !i())
      return;
    H = !0;
    const ye = ur(ae, C), Xe = i().startX ?? 0, tt = i().startY ?? 0, Ge = {
      ...i(),
      x: ye.x < Xe ? ye.x : Xe,
      y: ye.y < tt ? ye.y : tt,
      width: Math.abs(ye.x - Xe),
      height: Math.abs(ye.y - tt)
    }, Qe = A.map((Te) => Te.id), q = Ds(A, u()).map((Te) => Te.id);
    A = Td(
      c(),
      Ge,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === ha.Partial,
      !0
    );
    const me = Ds(A, u()).map((Te) => Te.id), $e = A.map((Te) => Te.id);
    (Qe.length !== $e.length || $e.some((Te) => !Qe.includes(Te))) && b.update((Te) => Te.map(Uu($e))), (q.length !== me.length || me.some((Te) => !q.includes(Te))) && O.update((Te) => Te.map(Uu(me))), W.set("user"), D.set(Ge);
  }
  function ne(ae) {
    var ye, Xe;
    ae.button === 0 && ((Xe = (ye = ae.target) == null ? void 0 : ye.releasePointerCapture) == null || Xe.call(ye, ae.pointerId), !p(_) && l() === "user" && ae.target === p(k) && (K == null || K(ae)), D.set(null), A.length > 0 && la(W, "nodes"), a() && (H = !1));
  }
  const J = (ae) => {
    var ye;
    if (Array.isArray(p(m)) && (ye = p(m)) != null && ye.includes(2)) {
      ae.preventDefault();
      return;
    }
    $("panecontextmenu", { event: ae });
  };
  _e(
    () => (o(), oe(S())),
    () => {
      ie(m, o() || S());
    }
  ), _e(
    () => (a(), i(), oe(h()), p(m)),
    () => {
      ie(_, a() || i() || h() && p(m) !== !0);
    }
  ), _e(
    () => (s(), p(_), l()),
    () => {
      ie(x, s() && (p(_) || l() === "user"));
    }
  ), Wt(), qe();
  var Z = dy(), se = /* @__PURE__ */ Je(() => p(x) ? void 0 : qu(K, p(k))), ge = /* @__PURE__ */ Je(() => qu(J, p(k))), ve = te(Z);
  qt(ve, t, "default", {}), ee(Z), fr(Z, (ae) => ie(k, ae), () => p(k)), He(
    (ae) => {
      Tt(Z, "draggable", ae), Tt(Z, "dragging", v()), Tt(Z, "selection", p(_));
    },
    [
      () => S() === !0 || Array.isArray(S()) && S().includes(0)
    ],
    Pe
  ), gt("click", Z, function(...ae) {
    var ye;
    (ye = p(se)) == null || ye.apply(this, ae);
  }), gt("pointerdown", Z, function(...ae) {
    var ye;
    (ye = p(x) ? R : void 0) == null || ye.apply(this, ae);
  }), gt("pointermove", Z, function(...ae) {
    var ye;
    (ye = p(x) ? I : void 0) == null || ye.apply(this, ae);
  }), gt("pointerup", Z, function(...ae) {
    var ye;
    (ye = p(x) ? ne : void 0) == null || ye.apply(this, ae);
  }), gt("contextmenu", Z, function(...ae) {
    var ye;
    (ye = p(ge)) == null || ye.apply(this, ae);
  }), Y(e, Z);
  var ue = ke({
    get panOnDrag() {
      return S();
    },
    set panOnDrag(ae) {
      S(ae), y();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ae) {
      h(ae), y();
    }
  });
  return r(), ue;
}
be(df, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var vy = /* @__PURE__ */ he('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const py = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function ff(e, t) {
  Ce(t, !1), Rt(e, py);
  const [n, r] = _t(), o = () => le(a, "$viewport", n), { viewport: a } = mt();
  qe();
  var i = vy(), s = te(i);
  qt(s, t, "default", {}), ee(i), He(() => xe(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), Y(e, i), ke(), r();
}
be(ff, {}, ["default"], [], !0);
function $a(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Tm({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
    getStoreItems: () => {
      const u = Q(n.snapGrid), c = Q(n.viewport);
      return {
        nodes: Q(n.nodes),
        nodeLookup: Q(n.nodeLookup),
        edges: Q(n.edges),
        nodeExtent: Q(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: Q(n.nodeOrigin),
        multiSelectionActive: Q(n.multiselectionKeyPressed),
        domNode: Q(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: Q(n.autoPanOnNodeDrag),
        nodesDraggable: Q(n.nodesDraggable),
        selectNodesOnDrag: Q(n.selectNodesOnDrag),
        nodeDragThreshold: Q(n.nodeDragThreshold),
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
function gy({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var hy = /* @__PURE__ */ he("<div><!></div>");
function vf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(ge, "$nodeTypes", n), a = () => le(Xe, "$elementsSelectable", n), i = () => le(tt, "$nodesDraggable", n), s = () => le(me, "$connectableStore", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0);
  let f = w(t, "node", 13), v = w(t, "id", 13), m = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), S = w(t, "selectable", 13, void 0), h = w(t, "connectable", 13, !0), $ = w(t, "deletable", 13, !0), b = w(t, "hidden", 13, !1), E = w(t, "dragging", 13, !1), O = w(t, "resizeObserver", 13, null), T = w(t, "style", 13, void 0), N = w(t, "type", 13, "default"), z = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), W = w(t, "positionY", 13), j = w(t, "sourcePosition", 13, void 0), X = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), k = w(t, "measuredHeight", 13, void 0), C = w(t, "initialWidth", 13, void 0), A = w(t, "initialHeight", 13, void 0), H = w(t, "width", 13, void 0), K = w(t, "height", 13, void 0), R = w(t, "dragHandle", 13, void 0), I = w(t, "initialized", 13, !1), ne = w(t, "parentId", 13, void 0), J = w(t, "nodeClickDistance", 13, void 0), Z = w(t, "class", 13, "");
  const se = mt(), {
    nodeTypes: ge,
    nodeDragThreshold: ve,
    selectNodesOnDrag: ue,
    handleNodeSelection: ae,
    updateNodeInternals: ye,
    elementsSelectable: Xe,
    nodesDraggable: tt
  } = se;
  let Ge = fe(void 0, !0), Qe = fe(null, !0);
  const q = za(), me = Oe(h());
  let $e = fe(void 0, !0), Te = fe(void 0, !0), at = fe(void 0, !0);
  ho("svelteflow__node_id", v()), ho("svelteflow__node_connectable", me), ll(() => {
    var ce;
    p(Qe) && ((ce = O()) == null || ce.unobserve(p(Qe)));
  });
  function Ie(ce) {
    S() && (!Q(ue) || !x() || Q(ve) > 0) && ae(v()), q("nodeclick", { node: f().internals.userNode, event: ce });
  }
  _e(() => oe(N()), () => {
    ie(l, N() || "default");
  }), _e(() => (o(), p(l)), () => {
    ie(u, !!o()[p(l)]);
  }), _e(
    () => (o(), p(l), ba),
    () => {
      ie(c, o()[p(l)] || ba);
    }
  ), _e(
    () => (p(u), oe(N())),
    () => {
      p(u) || console.warn("003", Ro.error003(N()));
    }
  ), _e(
    () => (oe(H()), oe(K()), oe(C()), oe(A()), oe(M()), oe(k())),
    () => {
      ie(d, gy({
        width: H(),
        height: K(),
        initialWidth: C(),
        initialHeight: A(),
        measuredWidth: M(),
        measuredHeight: k()
      }));
    }
  ), _e(() => oe(h()), () => {
    me.set(!!h());
  }), _e(
    () => (p($e), p(l), p(Te), oe(j()), p(at), oe(X()), oe(v()), p(Ge)),
    () => {
      (p($e) && p(l) !== p($e) || p(Te) && j() !== p(Te) || p(at) && X() !== p(at)) && requestAnimationFrame(() => ye(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: p(Ge),
            force: !0
          }
        ]
      ]))), ie($e, p(l)), ie(Te, j()), ie(at, X());
    }
  ), _e(
    () => (oe(O()), p(Ge), p(Qe), oe(I())),
    () => {
      O() && (p(Ge) !== p(Qe) || !I()) && (p(Qe) && O().unobserve(p(Qe)), p(Ge) && O().observe(p(Ge)), ie(Qe, p(Ge)));
    }
  ), Wt(), qe(!0);
  var et = ht(), it = Me(et);
  {
    var dt = (ce) => {
      var Be = hy(), pe = te(Be);
      const rn = /* @__PURE__ */ Pe(() => _() ?? !1), Xt = /* @__PURE__ */ Pe(() => S() ?? a() ?? !0), Ne = /* @__PURE__ */ Pe(() => $() ?? !0), $t = /* @__PURE__ */ Pe(() => x() ?? i() ?? !0);
      Kc(pe, () => p(c), (Re, We) => {
        We(Re, {
          get data() {
            return m();
          },
          get id() {
            return v();
          },
          get selected() {
            return p(rn);
          },
          get selectable() {
            return p(Xt);
          },
          get deletable() {
            return p(Ne);
          },
          get sourcePosition() {
            return j();
          },
          get targetPosition() {
            return X();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return E();
          },
          get draggable() {
            return p($t);
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
            return D();
          },
          get positionAbsoluteY() {
            return W();
          },
          get width() {
            return H();
          },
          get height() {
            return K();
          }
        });
      }), ee(Be), Ft(Be, (Re, We) => $a == null ? void 0 : $a(Re, We), () => ({
        nodeId: v(),
        isSelectable: S(),
        disabled: !1,
        handleSelector: R(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: ae,
        onDrag: (Re, We, lt, Bt) => {
          q("nodedrag", { event: Re, targetNode: lt, nodes: Bt });
        },
        onDragStart: (Re, We, lt, Bt) => {
          q("nodedragstart", { event: Re, targetNode: lt, nodes: Bt });
        },
        onDragStop: (Re, We, lt, Bt) => {
          q("nodedragstop", { event: Re, targetNode: lt, nodes: Bt });
        },
        store: se
      })), fr(Be, (Re) => ie(Ge, Re), () => p(Ge)), fn(() => gt("click", Be, Ie)), fn(() => gt("mouseenter", Be, (Re) => q("nodemouseenter", { node: f(), event: Re }))), fn(() => gt("mouseleave", Be, (Re) => q("nodemouseleave", { node: f(), event: Re }))), fn(() => gt("mousemove", Be, (Re) => q("nodemousemove", { node: f(), event: Re }))), fn(() => gt("contextmenu", Be, (Re) => q("nodecontextmenu", { node: f(), event: Re }))), He(
        (Re) => {
          xe(Be, "data-id", v()), yo(Be, Gn(Re)), xe(Be, "style", `${T() ?? ""};${p(d).width ?? ""}${p(d).height ?? ""}`), Tt(Be, "dragging", E()), Tt(Be, "selected", _()), Tt(Be, "draggable", x()), Tt(Be, "connectable", h()), Tt(Be, "selectable", S()), Tt(Be, "nopan", x()), Tt(Be, "parent", z()), Mt(Be, "z-index", P()), Mt(Be, "transform", `translate(${D() ?? ""}px, ${W() ?? ""}px)`), Mt(Be, "visibility", I() ? "visible" : "hidden");
        },
        [
          () => nn([
            "svelte-flow__node",
            `svelte-flow__node-${p(l)}`,
            Z()
          ])
        ],
        Pe
      ), Y(ce, Be);
    };
    Le(it, (ce) => {
      b() || ce(dt);
    });
  }
  Y(e, et);
  var St = ke({
    get node() {
      return f();
    },
    set node(ce) {
      f(ce), y();
    },
    get id() {
      return v();
    },
    set id(ce) {
      v(ce), y();
    },
    get data() {
      return m();
    },
    set data(ce) {
      m(ce), y();
    },
    get selected() {
      return _();
    },
    set selected(ce) {
      _(ce), y();
    },
    get draggable() {
      return x();
    },
    set draggable(ce) {
      x(ce), y();
    },
    get selectable() {
      return S();
    },
    set selectable(ce) {
      S(ce), y();
    },
    get connectable() {
      return h();
    },
    set connectable(ce) {
      h(ce), y();
    },
    get deletable() {
      return $();
    },
    set deletable(ce) {
      $(ce), y();
    },
    get hidden() {
      return b();
    },
    set hidden(ce) {
      b(ce), y();
    },
    get dragging() {
      return E();
    },
    set dragging(ce) {
      E(ce), y();
    },
    get resizeObserver() {
      return O();
    },
    set resizeObserver(ce) {
      O(ce), y();
    },
    get style() {
      return T();
    },
    set style(ce) {
      T(ce), y();
    },
    get type() {
      return N();
    },
    set type(ce) {
      N(ce), y();
    },
    get isParent() {
      return z();
    },
    set isParent(ce) {
      z(ce), y();
    },
    get positionX() {
      return D();
    },
    set positionX(ce) {
      D(ce), y();
    },
    get positionY() {
      return W();
    },
    set positionY(ce) {
      W(ce), y();
    },
    get sourcePosition() {
      return j();
    },
    set sourcePosition(ce) {
      j(ce), y();
    },
    get targetPosition() {
      return X();
    },
    set targetPosition(ce) {
      X(ce), y();
    },
    get zIndex() {
      return P();
    },
    set zIndex(ce) {
      P(ce), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ce) {
      M(ce), y();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(ce) {
      k(ce), y();
    },
    get initialWidth() {
      return C();
    },
    set initialWidth(ce) {
      C(ce), y();
    },
    get initialHeight() {
      return A();
    },
    set initialHeight(ce) {
      A(ce), y();
    },
    get width() {
      return H();
    },
    set width(ce) {
      H(ce), y();
    },
    get height() {
      return K();
    },
    set height(ce) {
      K(ce), y();
    },
    get dragHandle() {
      return R();
    },
    set dragHandle(ce) {
      R(ce), y();
    },
    get initialized() {
      return I();
    },
    set initialized(ce) {
      I(ce), y();
    },
    get parentId() {
      return ne();
    },
    set parentId(ce) {
      ne(ce), y();
    },
    get nodeClickDistance() {
      return J();
    },
    set nodeClickDistance(ce) {
      J(ce), y();
    },
    get class() {
      return Z();
    },
    set class(ce) {
      Z(ce), y();
    }
  });
  return r(), St;
}
be(
  vf,
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
var my = /* @__PURE__ */ he('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const yy = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function pf(e, t) {
  Ce(t, !1), Rt(e, yy);
  const [n, r] = _t(), o = () => le(c, "$visibleNodes", n), a = () => le(d, "$nodesDraggable", n), i = () => le(v, "$elementsSelectable", n), s = () => le(f, "$nodesConnectable", n), l = () => le(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: m,
    parentLookup: _
  } = mt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const b = /* @__PURE__ */ new Map();
    $.forEach((E) => {
      const O = E.target.getAttribute("data-id");
      b.set(O, { id: O, nodeElement: E.target, force: !0 });
    }), m(b);
  });
  ll(() => {
    x == null || x.disconnect();
  }), qe();
  var S = my();
  gn(S, 5, o, ($) => $.id, ($, b) => {
    const E = /* @__PURE__ */ Pe(() => !!p(b).selected), O = /* @__PURE__ */ Pe(() => !!p(b).hidden), T = /* @__PURE__ */ Pe(() => !!(p(b).draggable || a() && typeof p(b).draggable > "u")), N = /* @__PURE__ */ Pe(() => !!(p(b).selectable || i() && typeof p(b).selectable > "u")), z = /* @__PURE__ */ Pe(() => !!(p(b).connectable || s() && typeof p(b).connectable > "u")), D = /* @__PURE__ */ Pe(() => p(b).deletable ?? !0), W = /* @__PURE__ */ Pe(() => l().has(p(b).id)), j = /* @__PURE__ */ Pe(() => p(b).type ?? "default"), X = /* @__PURE__ */ Pe(() => p(b).internals.z ?? 0), P = /* @__PURE__ */ Pe(() => zd(p(b)));
    vf($, {
      get node() {
        return p(b);
      },
      get id() {
        return p(b).id;
      },
      get data() {
        return p(b).data;
      },
      get selected() {
        return p(E);
      },
      get hidden() {
        return p(O);
      },
      get draggable() {
        return p(T);
      },
      get selectable() {
        return p(N);
      },
      get connectable() {
        return p(z);
      },
      get deletable() {
        return p(D);
      },
      get positionX() {
        return p(b).internals.positionAbsolute.x;
      },
      get positionY() {
        return p(b).internals.positionAbsolute.y;
      },
      get isParent() {
        return p(W);
      },
      get style() {
        return p(b).style;
      },
      get class() {
        return p(b).class;
      },
      get type() {
        return p(j);
      },
      get sourcePosition() {
        return p(b).sourcePosition;
      },
      get targetPosition() {
        return p(b).targetPosition;
      },
      get dragging() {
        return p(b).dragging;
      },
      get zIndex() {
        return p(X);
      },
      get dragHandle() {
        return p(b).dragHandle;
      },
      get initialized() {
        return p(P);
      },
      get width() {
        return p(b).width;
      },
      get height() {
        return p(b).height;
      },
      get initialWidth() {
        return p(b).initialWidth;
      },
      get initialHeight() {
        return p(b).initialHeight;
      },
      get measuredWidth() {
        return p(b).measured.width;
      },
      get measuredHeight() {
        return p(b).measured.height;
      },
      get parentId() {
        return p(b).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          rt.call(this, t, M);
        },
        nodemouseenter(M) {
          rt.call(this, t, M);
        },
        nodemousemove(M) {
          rt.call(this, t, M);
        },
        nodemouseleave(M) {
          rt.call(this, t, M);
        },
        nodedrag(M) {
          rt.call(this, t, M);
        },
        nodedragstart(M) {
          rt.call(this, t, M);
        },
        nodedragstop(M) {
          rt.call(this, t, M);
        },
        nodecontextmenu(M) {
          rt.call(this, t, M);
        }
      }
    });
  }), ee(S), Y(e, S);
  var h = ke({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), y();
    }
  });
  return r(), h;
}
be(pf, { nodeClickDistance: {} }, [], [], !0);
var wy = /* @__PURE__ */ De('<svg><g role="img"><!></g></svg>');
function gf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(Z, "$edgeTypes", n), a = () => le(se, "$flowId", n), i = () => le(ge, "$elementsSelectable", n), s = () => le(J, "$edgeLookup", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0), f = fe(void 0, !0);
  let v = w(t, "id", 13), m = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), x = w(t, "target", 13, ""), S = w(t, "data", 29, () => ({})), h = w(t, "style", 13, void 0), $ = w(t, "zIndex", 13, void 0), b = w(t, "animated", 13, !1), E = w(t, "selected", 13, !1), O = w(t, "selectable", 13, void 0), T = w(t, "deletable", 13, void 0), N = w(t, "hidden", 13, !1), z = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), W = w(t, "markerStart", 13, void 0), j = w(t, "markerEnd", 13, void 0), X = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), k = w(t, "sourceY", 13), C = w(t, "targetX", 13), A = w(t, "targetY", 13), H = w(t, "sourcePosition", 13), K = w(t, "targetPosition", 13), R = w(t, "ariaLabel", 13, void 0), I = w(t, "interactionWidth", 13, void 0), ne = w(t, "class", 13, "");
  ho("svelteflow__edge_id", v());
  const {
    edgeLookup: J,
    edgeTypes: Z,
    flowId: se,
    elementsSelectable: ge
  } = mt(), ve = za(), ue = tf();
  function ae(q) {
    const me = s().get(v());
    me && (ue(v()), ve("edgeclick", { event: q, edge: me }));
  }
  function ye(q, me) {
    const $e = s().get(v());
    $e && ve(me, { event: q, edge: $e });
  }
  _e(() => oe(m()), () => {
    ie(l, m() || "default");
  }), _e(
    () => (o(), p(l), _a),
    () => {
      ie(u, o()[p(l)] || _a);
    }
  ), _e(
    () => (oe(W()), a()),
    () => {
      ie(c, W() ? `url('#${Bs(W(), a())}')` : void 0);
    }
  ), _e(
    () => (oe(j()), a()),
    () => {
      ie(d, j() ? `url('#${Bs(j(), a())}')` : void 0);
    }
  ), _e(
    () => (oe(O()), i()),
    () => {
      ie(f, O() ?? i());
    }
  ), Wt(), qe(!0);
  var Xe = ht(), tt = Me(Xe);
  {
    var Ge = (q) => {
      var me = wy(), $e = te(me), Te = te($e);
      const at = /* @__PURE__ */ Pe(() => T() ?? !0);
      Kc(Te, () => p(u), (Ie, et) => {
        et(Ie, {
          get id() {
            return v();
          },
          get source() {
            return _();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return k();
          },
          get targetX() {
            return C();
          },
          get targetY() {
            return A();
          },
          get sourcePosition() {
            return H();
          },
          get targetPosition() {
            return K();
          },
          get animated() {
            return b();
          },
          get selected() {
            return E();
          },
          get label() {
            return z();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return S();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return I();
          },
          get selectable() {
            return p(f);
          },
          get deletable() {
            return p(at);
          },
          get type() {
            return p(l);
          },
          get sourceHandleId() {
            return X();
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
      }), ee($e), ee(me), He(
        (Ie) => {
          Mt(me, "z-index", $()), Fr($e, Gn(Ie)), xe($e, "data-id", v()), xe($e, "aria-label", R() === null ? void 0 : R() ? R() : `Edge from ${_()} to ${x()}`), Tt($e, "animated", b()), Tt($e, "selected", E()), Tt($e, "selectable", p(f));
        },
        [
          () => nn(["svelte-flow__edge", ne()])
        ],
        Pe
      ), gt("click", $e, ae), gt("contextmenu", $e, (Ie) => {
        ye(Ie, "edgecontextmenu");
      }), gt("mouseenter", $e, (Ie) => {
        ye(Ie, "edgemouseenter");
      }), gt("mouseleave", $e, (Ie) => {
        ye(Ie, "edgemouseleave");
      }), Y(q, me);
    };
    Le(tt, (q) => {
      N() || q(Ge);
    });
  }
  Y(e, Xe);
  var Qe = ke({
    get id() {
      return v();
    },
    set id(q) {
      v(q), y();
    },
    get type() {
      return m();
    },
    set type(q) {
      m(q), y();
    },
    get source() {
      return _();
    },
    set source(q) {
      _(q), y();
    },
    get target() {
      return x();
    },
    set target(q) {
      x(q), y();
    },
    get data() {
      return S();
    },
    set data(q) {
      S(q), y();
    },
    get style() {
      return h();
    },
    set style(q) {
      h(q), y();
    },
    get zIndex() {
      return $();
    },
    set zIndex(q) {
      $(q), y();
    },
    get animated() {
      return b();
    },
    set animated(q) {
      b(q), y();
    },
    get selected() {
      return E();
    },
    set selected(q) {
      E(q), y();
    },
    get selectable() {
      return O();
    },
    set selectable(q) {
      O(q), y();
    },
    get deletable() {
      return T();
    },
    set deletable(q) {
      T(q), y();
    },
    get hidden() {
      return N();
    },
    set hidden(q) {
      N(q), y();
    },
    get label() {
      return z();
    },
    set label(q) {
      z(q), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(q) {
      D(q), y();
    },
    get markerStart() {
      return W();
    },
    set markerStart(q) {
      W(q), y();
    },
    get markerEnd() {
      return j();
    },
    set markerEnd(q) {
      j(q), y();
    },
    get sourceHandle() {
      return X();
    },
    set sourceHandle(q) {
      X(q), y();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(q) {
      P(q), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(q) {
      M(q), y();
    },
    get sourceY() {
      return k();
    },
    set sourceY(q) {
      k(q), y();
    },
    get targetX() {
      return C();
    },
    set targetX(q) {
      C(q), y();
    },
    get targetY() {
      return A();
    },
    set targetY(q) {
      A(q), y();
    },
    get sourcePosition() {
      return H();
    },
    set sourcePosition(q) {
      H(q), y();
    },
    get targetPosition() {
      return K();
    },
    set targetPosition(q) {
      K(q), y();
    },
    get ariaLabel() {
      return R();
    },
    set ariaLabel(q) {
      R(q), y();
    },
    get interactionWidth() {
      return I();
    },
    set interactionWidth(q) {
      I(q), y();
    },
    get class() {
      return ne();
    },
    set class(q) {
      ne(q), y();
    }
  });
  return r(), Qe;
}
be(
  gf,
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
function hf(e, t) {
  Ce(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return qr(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), qe(), ke({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), y();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), y();
    }
  });
}
be(hf, { onMount: {}, onDestroy: {} }, [], [], !0);
var by = /* @__PURE__ */ De("<defs></defs>");
function mf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(a, "$markers", n), { markers: a } = mt();
  qe();
  var i = by();
  gn(i, 5, o, (s) => s.id, (s, l) => {
    yf(s, en(() => p(l)));
  }), ee(i), Y(e, i), ke(), r();
}
be(mf, {}, [], [], !0);
var xy = /* @__PURE__ */ De('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), _y = /* @__PURE__ */ De('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), $y = /* @__PURE__ */ De('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function yf(e, t) {
  Ce(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), a = w(t, "height", 12, 12.5), i = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  qe();
  var c = $y(), d = te(c);
  {
    var f = (m) => {
      var _ = xy();
      He(() => {
        xe(_, "stroke", l()), xe(_, "stroke-width", u());
      }), Y(m, _);
    }, v = (m) => {
      var _ = ht(), x = Me(_);
      {
        var S = (h) => {
          var $ = _y();
          He(() => {
            xe($, "stroke", l()), xe($, "stroke-width", u()), xe($, "fill", l());
          }), Y(h, $);
        };
        Le(
          x,
          (h) => {
            r() === si.ArrowClosed && h(S);
          },
          !0
        );
      }
      Y(m, _);
    };
    Le(d, (m) => {
      r() === si.Arrow ? m(f) : m(v, !1);
    });
  }
  return ee(c), He(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${a()}`), xe(c, "markerUnits", i()), xe(c, "orient", s());
  }), Y(e, c), ke({
    get id() {
      return n();
    },
    set id(m) {
      n(m), y();
    },
    get type() {
      return r();
    },
    set type(m) {
      r(m), y();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), y();
    },
    get height() {
      return a();
    },
    set height(m) {
      a(m), y();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(m) {
      i(m), y();
    },
    get orient() {
      return s();
    },
    set orient(m) {
      s(m), y();
    },
    get color() {
      return l();
    },
    set color(m) {
      l(m), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(m) {
      u(m), y();
    }
  });
}
be(
  yf,
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
var Cy = /* @__PURE__ */ he('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function wf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(s, "$visibleEdges", n), a = () => le(c, "$elementsSelectable", n);
  let i = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = mt();
  qr(() => {
    i() && u(i());
  }), qe();
  var d = Cy(), f = te(d), v = te(f);
  mf(v, {}), ee(f);
  var m = G(f, 2);
  gn(m, 1, o, (h) => h.id, (h, $) => {
    const b = /* @__PURE__ */ Pe(() => p($).selectable ?? a()), E = /* @__PURE__ */ Pe(() => p($).type || "default");
    gf(h, {
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
        return p(b);
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
        return p(E);
      },
      get zIndex() {
        return p($).zIndex;
      },
      $$events: {
        edgeclick(O) {
          rt.call(this, t, O);
        },
        edgecontextmenu(O) {
          rt.call(this, t, O);
        },
        edgemouseenter(O) {
          rt.call(this, t, O);
        },
        edgemouseleave(O) {
          rt.call(this, t, O);
        }
      }
    });
  });
  var _ = G(m, 2);
  {
    var x = (h) => {
      hf(h, {
        onMount: () => {
          la(l, !0);
        },
        onDestroy: () => {
          la(l, !1);
        }
      });
    };
    Le(_, (h) => {
      o().length > 0 && h(x);
    });
  }
  ee(d), Y(e, d);
  var S = ke({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), y();
    }
  });
  return r(), S;
}
be(wf, { defaultEdgeOptions: {} }, [], [], !0);
var ky = /* @__PURE__ */ he('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Ey = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function $l(e, t) {
  Ce(t, !1), Rt(e, Ey);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "isVisible", 12, !0);
  var s = ht(), l = Me(s);
  {
    var u = (c) => {
      var d = ky();
      He(() => {
        Mt(d, "width", typeof o() == "string" ? o() : `${o()}px`), Mt(d, "height", typeof a() == "string" ? a() : `${a()}px`), Mt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), Y(c, d);
    };
    Le(l, (c) => {
      i() && c(u);
    });
  }
  return Y(e, s), ke({
    get x() {
      return n();
    },
    set x(c) {
      n(c), y();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), y();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), y();
    },
    get height() {
      return a();
    },
    set height(c) {
      a(c), y();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), y();
    }
  });
}
be(
  $l,
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
function bf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(i, "$selectionRect", n), a = () => le(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = mt();
  qe();
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
  $l(e, {
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
  }), ke(), r();
}
be(bf, {}, [], [], !0);
var Sy = /* @__PURE__ */ he('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Py = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function xf(e, t) {
  Ce(t, !1), Rt(e, Py);
  const [n, r] = _t(), o = () => le(l, "$selectionRectMode", n), a = () => le(c, "$nodeLookup", n), i = () => le(u, "$nodes", n), s = mt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = za();
  let f = fe(null);
  function v(h) {
    const $ = i().filter((b) => b.selected);
    d("selectioncontextmenu", { nodes: $, event: h });
  }
  function m(h) {
    const $ = i().filter((b) => b.selected);
    d("selectionclick", { nodes: $, event: h });
  }
  _e(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (ie(f, wi(a(), { filter: (h) => !!h.selected })), i());
    }
  ), Wt(), qe();
  var _ = ht(), x = Me(_);
  {
    var S = (h) => {
      var $ = Sy(), b = te($);
      $l(b, { width: "100%", height: "100%", x: 0, y: 0 }), ee($), Ft($, (E, O) => $a == null ? void 0 : $a(E, O), () => ({
        disabled: !1,
        store: s,
        onDrag: (E, O, T, N) => {
          d("nodedrag", { event: E, targetNode: null, nodes: N });
        },
        onDragStart: (E, O, T, N) => {
          d("nodedragstart", { event: E, targetNode: null, nodes: N });
        },
        onDragStop: (E, O, T, N) => {
          d("nodedragstop", { event: E, targetNode: null, nodes: N });
        }
      })), fn(() => gt("contextmenu", $, v)), fn(() => gt("click", $, m)), fn(() => gt("keyup", $, () => {
      })), He(() => xe($, "style", `width: ${p(f).width ?? ""}px; height: ${p(f).height ?? ""}px; transform: translate(${p(f).x ?? ""}px, ${p(f).y ?? ""}px)`)), Y(h, $);
    };
    Le(x, (h) => {
      o() === "nodes" && p(f) && ir(p(f).x) && ir(p(f).y) && h(S);
    });
  }
  Y(e, _), ke(), r();
}
be(xf, {}, [], [], !0);
function Lt(e, t) {
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
      }, { modifier: d, key: f, callback: v, preventDefault: m, enabled: _ } = c;
      if (_) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((S) => l[S])
        ))
          continue;
        if (i.key === f) {
          m && i.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function _f(e, t) {
  Ce(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => ya() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), a = w(t, "panActivationKey", 12, " "), i = w(t, "zoomActivationKey", 28, () => ya() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = mt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function m(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function _(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, $) {
    return (Array.isArray(h) ? h : [h]).map((b) => {
      const E = _(b);
      return {
        key: E,
        modifier: m(b),
        enabled: E !== null,
        callback: $
      };
    });
  }
  function S() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return qe(), gt("blur", an, S), gt("contextmenu", an, S), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !lm(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(a(), () => c.set(!0)),
    type: "keydown"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(a(), () => c.set(!1)),
    type: "keyup"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(i(), () => d.set(!0)),
    type: "keydown"
  })), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
    trigger: x(i(), () => d.set(!1)),
    type: "keyup"
  })), ke({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), y();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(h) {
      a(h), y();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(h) {
      i(h), y();
    }
  });
}
be(
  _f,
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
var Oy = /* @__PURE__ */ De('<path fill="none" class="svelte-flow__connection-path"></path>'), Ty = /* @__PURE__ */ De('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function $f(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(v, "$connection", n), a = () => le(m, "$connectionLineType", n), i = () => le(d, "$width", n), s = () => le(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: m
  } = mt();
  let _ = fe(null);
  _e(
    () => (o(), oe(c()), a(), p(_), Is),
    () => {
      if (o().inProgress && !c()) {
        const { from: b, to: E, fromPosition: O, toPosition: T } = o(), N = {
          sourceX: b.x,
          sourceY: b.y,
          sourcePosition: O,
          targetX: E.x,
          targetY: E.y,
          targetPosition: T
        };
        switch (a()) {
          case fo.Bezier:
            ((z) => ie(_, z[0]))(Hd(N));
            break;
          case fo.Step:
            ((z) => ie(_, z[0]))(wa({ ...N, borderRadius: 0 }));
            break;
          case fo.SmoothStep:
            ((z) => ie(_, z[0]))(wa(N));
            break;
          default:
            ((z) => ie(_, z[0]))(Is(N));
        }
      }
    }
  ), Wt(), qe();
  var x = ht(), S = Me(x);
  {
    var h = (b) => {
      var E = Ty(), O = te(E), T = te(O);
      qt(T, t, "connectionLine", {});
      var N = G(T);
      {
        var z = (D) => {
          var W = Oy();
          He(() => {
            xe(W, "d", p(_)), xe(W, "style", u());
          }), Y(D, W);
        };
        Le(N, (D) => {
          c() || D(z);
        });
      }
      ee(O), ee(E), He(
        (D) => {
          xe(E, "width", i()), xe(E, "height", s()), xe(E, "style", l()), Fr(O, Gn(D));
        },
        [
          () => nn([
            "svelte-flow__connection",
            em(o().isValid)
          ])
        ],
        Pe
      ), Y(b, E);
    };
    Le(S, (b) => {
      o().inProgress && b(h);
    });
  }
  Y(e, x);
  var $ = ke({
    get containerStyle() {
      return l();
    },
    set containerStyle(b) {
      l(b), y();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(b) {
      c(b), y();
    }
  });
  return r(), $;
}
be(
  $f,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Ry = /* @__PURE__ */ he("<div><!></div>");
function Ka(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Et(n, ["position", "style", "class"]);
  Ce(t, !1);
  const [o, a] = _t(), i = () => le(d, "$selectionRectMode", o), s = fe();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = mt();
  _e(() => oe(l()), () => {
    ie(s, `${l()}`.split("-"));
  }), Wt(), qe();
  var f = Ry();
  let v;
  var m = te(f);
  qt(m, t, "default", {}), ee(f), He(
    (x) => {
      v = Mn(f, v, {
        class: x,
        style: u(),
        ...r
      }), Mt(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => nn([
        "svelte-flow__panel",
        c(),
        ...p(s)
      ])
    ],
    Pe
  ), Y(e, f);
  var _ = ke({
    get position() {
      return l();
    },
    set position(x) {
      l(x), y();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), y();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), y();
    }
  });
  return a(), _;
}
be(Ka, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var My = /* @__PURE__ */ he('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Cf(e, t) {
  Ce(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  qe();
  var o = ht(), a = Me(o);
  {
    var i = (s) => {
      Ka(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = My();
          Y(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Le(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return Y(e, o), ke({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), y();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), y();
    }
  });
}
be(Cf, { proOptions: {}, position: {} }, [], [], !0);
function Gu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const Ny = (e) => Object.keys(e);
function Ju(e, t) {
  Ny(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Vy() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Ly(e = "light") {
  return bn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Vy(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Ay = /* @__PURE__ */ he('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), zy = /* @__PURE__ */ he("<!> <!>", 1), Dy = /* @__PURE__ */ he("<div><!> <!> <!> <!></div>");
const Hy = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function kf(e, t) {
  const n = ag(t), r = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = Et(r, [
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
  Ce(t, !1), Rt(e, Hy);
  const [a, i] = _t(), s = () => le($(), "$viewport", a), l = () => le(Dn, "$initialized", a), u = () => le(p(c), "$colorModeClass", a), c = fe();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), v = w(t, "edges", 12), m = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), S = w(t, "maxZoom", 12, void 0), h = w(t, "initialViewport", 12, void 0), $ = w(t, "viewport", 12, void 0), b = w(t, "nodeTypes", 12, void 0), E = w(t, "edgeTypes", 12, void 0), O = w(t, "selectionKey", 12, void 0), T = w(t, "selectionMode", 12, void 0), N = w(t, "panActivationKey", 12, void 0), z = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), W = w(t, "nodesDraggable", 12, void 0), j = w(t, "nodesConnectable", 12, void 0), X = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), k = w(t, "deleteKey", 12, void 0), C = w(t, "connectionRadius", 12, void 0), A = w(t, "connectionLineType", 12, void 0), H = w(t, "connectionMode", 28, () => Br.Strict), K = w(t, "connectionLineStyle", 12, ""), R = w(t, "connectionLineContainerStyle", 12, ""), I = w(t, "onMoveStart", 12, void 0), ne = w(t, "onMove", 12, void 0), J = w(t, "onMoveEnd", 12, void 0), Z = w(t, "isValidConnection", 12, void 0), se = w(t, "translateExtent", 12, void 0), ge = w(t, "nodeExtent", 12, void 0), ve = w(t, "onlyRenderVisibleElements", 12, void 0), ue = w(t, "panOnScrollMode", 28, () => Sr.Free), ae = w(t, "preventScrolling", 12, !0), ye = w(t, "zoomOnScroll", 12, !0), Xe = w(t, "zoomOnDoubleClick", 12, !0), tt = w(t, "zoomOnPinch", 12, !0), Ge = w(t, "panOnScroll", 12, !1), Qe = w(t, "panOnDrag", 12, !0), q = w(t, "selectionOnDrag", 12, void 0), me = w(t, "autoPanOnConnect", 12, !0), $e = w(t, "autoPanOnNodeDrag", 12, !0), Te = w(t, "onerror", 12, void 0), at = w(t, "ondelete", 12, void 0), Ie = w(t, "onedgecreate", 12, void 0), et = w(t, "attributionPosition", 12, void 0), it = w(t, "proOptions", 12, void 0), dt = w(t, "defaultEdgeOptions", 12, void 0), St = w(t, "width", 12, void 0), ce = w(t, "height", 12, void 0), Be = w(t, "colorMode", 12, "light"), pe = w(t, "onconnect", 12, void 0), rn = w(t, "onconnectstart", 12, void 0), Xt = w(t, "onconnectend", 12, void 0), Ne = w(t, "onbeforedelete", 12, void 0), $t = w(t, "oninit", 12, void 0), Re = w(t, "nodeOrigin", 12, void 0), We = w(t, "paneClickDistance", 12, 0), lt = w(t, "nodeClickDistance", 12, 0), Bt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), zn = w(t, "style", 12, void 0), kn = w(t, "class", 12, void 0), At = fe(), Pt = fe(), jt = fe();
  const zt = s() || h(), yt = Ip(Xa) ? mt() : ly({
    nodes: Q(f()),
    edges: Q(v()),
    width: St(),
    height: ce(),
    fitView: m(),
    nodeOrigin: Re(),
    nodeExtent: ge()
  });
  qr(() => (yt.width.set(p(Pt)), yt.height.set(p(jt)), yt.domNode.set(p(At)), yt.syncNodeStores(f()), yt.syncEdgeStores(v()), yt.syncViewport($()), m() !== void 0 && yt.fitViewOnInit.set(m()), _() && yt.fitViewOptions.set(_()), Gu(yt, {
    nodeTypes: b(),
    edgeTypes: E(),
    minZoom: x(),
    maxZoom: S(),
    translateExtent: se(),
    paneClickDistance: We()
  }), () => {
    yt.reset();
  }));
  const { initialized: Dn } = yt;
  let wn = fe(!1);
  _e(
    () => (p(Pt), p(jt)),
    () => {
      p(Pt) !== void 0 && p(jt) !== void 0 && (yt.width.set(p(Pt)), yt.height.set(p(jt)));
    }
  ), _e(
    () => (p(wn), l(), oe($t())),
    () => {
      var B;
      !p(wn) && l() && ((B = $t()) == null || B(), ie(wn, !0));
    }
  ), _e(
    () => (oe(d()), oe(A()), oe(C()), oe(T()), oe(M()), oe(Bt()), oe(W()), oe(j()), oe(P()), oe(ve()), oe(Z()), oe(me()), oe($e()), oe(Te()), oe(at()), oe(Ie()), oe(H()), oe(X()), oe(pe()), oe(rn()), oe(Xt()), oe(Ne()), oe(Re()), Ju),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: A(),
        connectionRadius: C(),
        selectionMode: T(),
        snapGrid: M(),
        defaultMarkerColor: Bt(),
        nodesDraggable: W(),
        nodesConnectable: j(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: ve(),
        isValidConnection: Z(),
        autoPanOnConnect: me(),
        autoPanOnNodeDrag: $e(),
        onerror: Te(),
        ondelete: at(),
        onedgecreate: Ie(),
        connectionMode: H(),
        nodeDragThreshold: X(),
        onconnect: pe(),
        onconnectstart: rn(),
        onconnectend: Xt(),
        onbeforedelete: Ne(),
        nodeOrigin: Re()
      };
      Ju(yt, B);
    }
  ), _e(
    () => (oe(b()), oe(E()), oe(x()), oe(S()), oe(se()), oe(We())),
    () => {
      Gu(yt, {
        nodeTypes: b(),
        edgeTypes: E(),
        minZoom: x(),
        maxZoom: S(),
        translateExtent: se(),
        paneClickDistance: We()
      });
    }
  ), _e(
    () => oe(Be()),
    () => {
      pg(ie(c, Ly(Be())), "$colorModeClass", a);
    }
  ), Wt(), qe();
  var Gt = Dy();
  let Qn;
  var er = te(Gt);
  _f(er, {
    get selectionKey() {
      return O();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var mr = G(er, 2);
  const tr = /* @__PURE__ */ Pe(() => ue() === void 0 ? Sr.Free : ue()), yr = /* @__PURE__ */ Pe(() => ae() === void 0 ? !0 : ae()), Vr = /* @__PURE__ */ Pe(() => ye() === void 0 ? !0 : ye()), Vo = /* @__PURE__ */ Pe(() => Xe() === void 0 ? !0 : Xe()), Lo = /* @__PURE__ */ Pe(() => tt() === void 0 ? !0 : tt()), Ao = /* @__PURE__ */ Pe(() => Ge() === void 0 ? !1 : Ge()), zo = /* @__PURE__ */ Pe(() => Qe() === void 0 ? !0 : Qe()), L = /* @__PURE__ */ Pe(() => We() === void 0 ? 0 : We());
  cf(mr, {
    initialViewport: zt,
    get onMoveStart() {
      return I();
    },
    get onMove() {
      return ne();
    },
    get onMoveEnd() {
      return J();
    },
    get panOnScrollMode() {
      return p(tr);
    },
    get preventScrolling() {
      return p(yr);
    },
    get zoomOnScroll() {
      return p(Vr);
    },
    get zoomOnDoubleClick() {
      return p(Vo);
    },
    get zoomOnPinch() {
      return p(Lo);
    },
    get panOnScroll() {
      return p(Ao);
    },
    get panOnDrag() {
      return p(zo);
    },
    get paneClickDistance() {
      return p(L);
    },
    children: (B, ut) => {
      const Ke = /* @__PURE__ */ Pe(() => Qe() === void 0 ? !0 : Qe());
      df(B, {
        get panOnDrag() {
          return p(Ke);
        },
        get selectionOnDrag() {
          return q();
        },
        $$events: {
          paneclick(je) {
            rt.call(this, t, je);
          },
          panecontextmenu(je) {
            rt.call(this, t, je);
          }
        },
        children: (je, Ht) => {
          var pt = zy(), wt = Me(pt);
          ff(wt, {
            children: (Hn, In) => {
              var Dt = Ay(), wr = Me(Dt);
              wf(wr, {
                get defaultEdgeOptions() {
                  return dt();
                },
                $$events: {
                  edgeclick(Ze) {
                    rt.call(this, t, Ze);
                  },
                  edgecontextmenu(Ze) {
                    rt.call(this, t, Ze);
                  },
                  edgemouseenter(Ze) {
                    rt.call(this, t, Ze);
                  },
                  edgemouseleave(Ze) {
                    rt.call(this, t, Ze);
                  }
                }
              });
              var Jr = G(wr, 2);
              $f(Jr, {
                get containerStyle() {
                  return R();
                },
                get style() {
                  return K();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, Qa) => {
                    var Do = ht(), Si = Me(Do);
                    qt(Si, t, "connectionLine", {}), Y(Ze, Do);
                  }
                }
              });
              var Qr = G(Jr, 6);
              pf(Qr, {
                get nodeClickDistance() {
                  return lt();
                },
                $$events: {
                  nodeclick(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodemouseenter(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodemousemove(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodemouseleave(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodecontextmenu(Ze) {
                    rt.call(this, t, Ze);
                  }
                }
              });
              var Ja = G(Qr, 2);
              xf(Ja, {
                $$events: {
                  selectionclick(Ze) {
                    rt.call(this, t, Ze);
                  },
                  selectioncontextmenu(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedragstart(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedrag(Ze) {
                    rt.call(this, t, Ze);
                  },
                  nodedragstop(Ze) {
                    rt.call(this, t, Ze);
                  }
                }
              }), Y(Hn, Dt);
            },
            $$slots: { default: !0 }
          });
          var Kt = G(wt, 2);
          bf(Kt, {}), Y(je, pt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var re = G(mr, 2);
  Cf(re, {
    get proOptions() {
      return it();
    },
    get position() {
      return et();
    }
  });
  var we = G(re, 2);
  qt(we, t, "default", {}), ee(Gt), fr(Gt, (B) => ie(At, B), () => p(At)), He(
    (B) => Qn = Mn(
      Gt,
      Qn,
      {
        style: zn(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => nn([
        "svelte-flow",
        kn(),
        u()
      ])
    ],
    Pe
  ), cu(Gt, "clientWidth", (B) => ie(Pt, B)), cu(Gt, "clientHeight", (B) => ie(jt, B)), gt("dragover", Gt, function(B) {
    rt.call(this, t, B);
  }), gt("drop", Gt, function(B) {
    rt.call(this, t, B);
  }), Y(e, Gt);
  var Ee = ke({
    get id() {
      return d();
    },
    set id(B) {
      d(B), y();
    },
    get nodes() {
      return f();
    },
    set nodes(B) {
      f(B), y();
    },
    get edges() {
      return v();
    },
    set edges(B) {
      v(B), y();
    },
    get fitView() {
      return m();
    },
    set fitView(B) {
      m(B), y();
    },
    get fitViewOptions() {
      return _();
    },
    set fitViewOptions(B) {
      _(B), y();
    },
    get minZoom() {
      return x();
    },
    set minZoom(B) {
      x(B), y();
    },
    get maxZoom() {
      return S();
    },
    set maxZoom(B) {
      S(B), y();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), y();
    },
    get viewport() {
      return $();
    },
    set viewport(B) {
      $(B), y();
    },
    get nodeTypes() {
      return b();
    },
    set nodeTypes(B) {
      b(B), y();
    },
    get edgeTypes() {
      return E();
    },
    set edgeTypes(B) {
      E(B), y();
    },
    get selectionKey() {
      return O();
    },
    set selectionKey(B) {
      O(B), y();
    },
    get selectionMode() {
      return T();
    },
    set selectionMode(B) {
      T(B), y();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(B) {
      N(B), y();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(B) {
      z(B), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(B) {
      D(B), y();
    },
    get nodesDraggable() {
      return W();
    },
    set nodesDraggable(B) {
      W(B), y();
    },
    get nodesConnectable() {
      return j();
    },
    set nodesConnectable(B) {
      j(B), y();
    },
    get nodeDragThreshold() {
      return X();
    },
    set nodeDragThreshold(B) {
      X(B), y();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(B) {
      P(B), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(B) {
      M(B), y();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(B) {
      k(B), y();
    },
    get connectionRadius() {
      return C();
    },
    set connectionRadius(B) {
      C(B), y();
    },
    get connectionLineType() {
      return A();
    },
    set connectionLineType(B) {
      A(B), y();
    },
    get connectionMode() {
      return H();
    },
    set connectionMode(B) {
      H(B), y();
    },
    get connectionLineStyle() {
      return K();
    },
    set connectionLineStyle(B) {
      K(B), y();
    },
    get connectionLineContainerStyle() {
      return R();
    },
    set connectionLineContainerStyle(B) {
      R(B), y();
    },
    get onMoveStart() {
      return I();
    },
    set onMoveStart(B) {
      I(B), y();
    },
    get onMove() {
      return ne();
    },
    set onMove(B) {
      ne(B), y();
    },
    get onMoveEnd() {
      return J();
    },
    set onMoveEnd(B) {
      J(B), y();
    },
    get isValidConnection() {
      return Z();
    },
    set isValidConnection(B) {
      Z(B), y();
    },
    get translateExtent() {
      return se();
    },
    set translateExtent(B) {
      se(B), y();
    },
    get nodeExtent() {
      return ge();
    },
    set nodeExtent(B) {
      ge(B), y();
    },
    get onlyRenderVisibleElements() {
      return ve();
    },
    set onlyRenderVisibleElements(B) {
      ve(B), y();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(B) {
      ue(B), y();
    },
    get preventScrolling() {
      return ae();
    },
    set preventScrolling(B) {
      ae(B), y();
    },
    get zoomOnScroll() {
      return ye();
    },
    set zoomOnScroll(B) {
      ye(B), y();
    },
    get zoomOnDoubleClick() {
      return Xe();
    },
    set zoomOnDoubleClick(B) {
      Xe(B), y();
    },
    get zoomOnPinch() {
      return tt();
    },
    set zoomOnPinch(B) {
      tt(B), y();
    },
    get panOnScroll() {
      return Ge();
    },
    set panOnScroll(B) {
      Ge(B), y();
    },
    get panOnDrag() {
      return Qe();
    },
    set panOnDrag(B) {
      Qe(B), y();
    },
    get selectionOnDrag() {
      return q();
    },
    set selectionOnDrag(B) {
      q(B), y();
    },
    get autoPanOnConnect() {
      return me();
    },
    set autoPanOnConnect(B) {
      me(B), y();
    },
    get autoPanOnNodeDrag() {
      return $e();
    },
    set autoPanOnNodeDrag(B) {
      $e(B), y();
    },
    get onerror() {
      return Te();
    },
    set onerror(B) {
      Te(B), y();
    },
    get ondelete() {
      return at();
    },
    set ondelete(B) {
      at(B), y();
    },
    get onedgecreate() {
      return Ie();
    },
    set onedgecreate(B) {
      Ie(B), y();
    },
    get attributionPosition() {
      return et();
    },
    set attributionPosition(B) {
      et(B), y();
    },
    get proOptions() {
      return it();
    },
    set proOptions(B) {
      it(B), y();
    },
    get defaultEdgeOptions() {
      return dt();
    },
    set defaultEdgeOptions(B) {
      dt(B), y();
    },
    get width() {
      return St();
    },
    set width(B) {
      St(B), y();
    },
    get height() {
      return ce();
    },
    set height(B) {
      ce(B), y();
    },
    get colorMode() {
      return Be();
    },
    set colorMode(B) {
      Be(B), y();
    },
    get onconnect() {
      return pe();
    },
    set onconnect(B) {
      pe(B), y();
    },
    get onconnectstart() {
      return rn();
    },
    set onconnectstart(B) {
      rn(B), y();
    },
    get onconnectend() {
      return Xt();
    },
    set onconnectend(B) {
      Xt(B), y();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(B) {
      Ne(B), y();
    },
    get oninit() {
      return $t();
    },
    set oninit(B) {
      $t(B), y();
    },
    get nodeOrigin() {
      return Re();
    },
    set nodeOrigin(B) {
      Re(B), y();
    },
    get paneClickDistance() {
      return We();
    },
    set paneClickDistance(B) {
      We(B), y();
    },
    get nodeClickDistance() {
      return lt();
    },
    set nodeClickDistance(B) {
      lt(B), y();
    },
    get defaultMarkerColor() {
      return Bt();
    },
    set defaultMarkerColor(B) {
      Bt(B), y();
    },
    get style() {
      return zn();
    },
    set style(B) {
      zn(B), y();
    },
    get class() {
      return kn();
    },
    set class(B) {
      kn(B), y();
    }
  });
  return i(), Ee;
}
be(
  kf,
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
function Ef(e, t) {
  Ce(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), a = w(t, "initialHeight", 12, void 0), i = w(t, "fitView", 12, void 0), s = w(t, "nodeOrigin", 12, void 0);
  const l = uf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  ho(Xa, { getStore: () => l }), ll(() => {
    l.reset();
  }), qe();
  var u = ht(), c = Me(u);
  return qt(c, t, "default", {}), Y(e, u), ke({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), y();
    },
    get initialHeight() {
      return a();
    },
    set initialHeight(d) {
      a(d), y();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), y();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), y();
    }
  });
}
be(
  Ef,
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
var Iy = /* @__PURE__ */ he("<button><!></button>");
function qo(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Et(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  Ce(t, !1);
  let o = w(t, "class", 12, void 0), a = w(t, "bgColor", 12, void 0), i = w(t, "bgColorHover", 12, void 0), s = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  qe();
  var c = Iy();
  let d;
  var f = te(c);
  return qt(f, t, "default", { class: "button-svg" }), ee(c), He(
    (v) => {
      d = Mn(c, d, { type: "button", class: v, ...r }), Mt(c, "--xy-controls-button-background-color-props", a()), Mt(c, "--xy-controls-button-background-color-hover-props", i()), Mt(c, "--xy-controls-button-color-props", s()), Mt(c, "--xy-controls-button-color-hover-props", l()), Mt(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => nn([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    Pe
  ), gt("click", c, function(v) {
    rt.call(this, t, v);
  }), Y(e, c), ke({
    get class() {
      return o();
    },
    set class(v) {
      o(v), y();
    },
    get bgColor() {
      return a();
    },
    set bgColor(v) {
      a(v), y();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(v) {
      i(v), y();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), y();
    }
  });
}
be(
  qo,
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
var By = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Sf(e) {
  var t = By();
  Y(e, t);
}
be(Sf, {}, [], [], !0);
var jy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Pf(e) {
  var t = jy();
  Y(e, t);
}
be(Pf, {}, [], [], !0);
var Yy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Of(e) {
  var t = Yy();
  Y(e, t);
}
be(Of, {}, [], [], !0);
var Zy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Tf(e) {
  var t = Zy();
  Y(e, t);
}
be(Tf, {}, [], [], !0);
var Wy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Rf(e) {
  var t = Wy();
  Y(e, t);
}
be(Rf, {}, [], [], !0);
var Xy = /* @__PURE__ */ he("<!> <!>", 1), Ky = /* @__PURE__ */ he("<!> <!> <!> <!> <!> <!>", 1);
function Mf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(A, "$nodesDraggable", n), a = () => le(H, "$nodesConnectable", n), i = () => le(K, "$elementsSelectable", n), s = () => le(M, "$viewport", n), l = () => le(k, "$minZoom", n), u = () => le(C, "$maxZoom", n), c = fe(), d = fe(), f = fe(), v = fe();
  let m = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), S = w(t, "showLock", 12, !0), h = w(t, "buttonBgColor", 12, void 0), $ = w(t, "buttonBgColorHover", 12, void 0), b = w(t, "buttonColor", 12, void 0), E = w(t, "buttonColorHover", 12, void 0), O = w(t, "buttonBorderColor", 12, void 0), T = w(t, "ariaLabel", 12, void 0), N = w(t, "style", 12, void 0), z = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), W = w(t, "class", 12, "");
  const {
    zoomIn: j,
    zoomOut: X,
    fitView: P,
    viewport: M,
    minZoom: k,
    maxZoom: C,
    nodesDraggable: A,
    nodesConnectable: H,
    elementsSelectable: K
  } = mt(), R = {
    bgColor: h(),
    bgColorHover: $(),
    color: b(),
    colorHover: E(),
    borderColor: O()
  }, I = () => {
    j();
  }, ne = () => {
    X();
  }, J = () => {
    P(D());
  }, Z = () => {
    ie(c, !p(c)), A.set(p(c)), H.set(p(c)), K.set(p(c));
  };
  _e(
    () => (o(), a(), i()),
    () => {
      ie(c, o() || a() || i());
    }
  ), _e(() => (s(), l()), () => {
    ie(d, s().zoom <= l());
  }), _e(() => (s(), u()), () => {
    ie(f, s().zoom >= u());
  }), _e(() => oe(z()), () => {
    ie(v, z() === "horizontal" ? "horizontal" : "vertical");
  }), Wt(), qe();
  const se = /* @__PURE__ */ Pe(() => nn([
    "svelte-flow__controls",
    p(v),
    W()
  ])), ge = /* @__PURE__ */ Pe(() => T() ?? "Svelte Flow controls");
  Ka(e, {
    get class() {
      return p(se);
    },
    get position() {
      return m();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return p(ge);
    },
    get style() {
      return N();
    },
    children: (ue, ae) => {
      var ye = Ky(), Xe = Me(ye);
      qt(Xe, t, "before", {});
      var tt = G(Xe, 2);
      {
        var Ge = (Ie) => {
          var et = Xy(), it = Me(et);
          qo(it, en(
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
              children: (St, ce) => {
                Sf(St);
              },
              $$slots: { default: !0 }
            }
          ));
          var dt = G(it, 2);
          qo(dt, en(
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
              children: (St, ce) => {
                Pf(St);
              },
              $$slots: { default: !0 }
            }
          )), Y(Ie, et);
        };
        Le(tt, (Ie) => {
          _() && Ie(Ge);
        });
      }
      var Qe = G(tt, 2);
      {
        var q = (Ie) => {
          qo(Ie, en(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            R,
            {
              $$events: { click: J },
              children: (et, it) => {
                Of(et);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Le(Qe, (Ie) => {
          x() && Ie(q);
        });
      }
      var me = G(Qe, 2);
      {
        var $e = (Ie) => {
          qo(Ie, en(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            R,
            {
              $$events: { click: Z },
              children: (et, it) => {
                var dt = ht(), St = Me(dt);
                {
                  var ce = (pe) => {
                    Rf(pe);
                  }, Be = (pe) => {
                    Tf(pe);
                  };
                  Le(St, (pe) => {
                    p(c) ? pe(ce) : pe(Be, !1);
                  });
                }
                Y(et, dt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Le(me, (Ie) => {
          S() && Ie($e);
        });
      }
      var Te = G(me, 2);
      qt(Te, t, "default", {});
      var at = G(Te, 2);
      qt(at, t, "after", {}), Y(ue, ye);
    },
    $$slots: { default: !0 }
  });
  var ve = ke({
    get position() {
      return m();
    },
    set position(ue) {
      m(ue), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(ue) {
      _(ue), y();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ue) {
      x(ue), y();
    },
    get showLock() {
      return S();
    },
    set showLock(ue) {
      S(ue), y();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ue) {
      h(ue), y();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(ue) {
      $(ue), y();
    },
    get buttonColor() {
      return b();
    },
    set buttonColor(ue) {
      b(ue), y();
    },
    get buttonColorHover() {
      return E();
    },
    set buttonColorHover(ue) {
      E(ue), y();
    },
    get buttonBorderColor() {
      return O();
    },
    set buttonBorderColor(ue) {
      O(ue), y();
    },
    get ariaLabel() {
      return T();
    },
    set ariaLabel(ue) {
      T(ue), y();
    },
    get style() {
      return N();
    },
    set style(ue) {
      N(ue), y();
    },
    get orientation() {
      return z();
    },
    set orientation(ue) {
      z(ue), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(ue) {
      D(ue), y();
    },
    get class() {
      return W();
    },
    set class(ue) {
      W(ue), y();
    }
  });
  return r(), ve;
}
be(
  Mf,
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
var Pr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Pr || (Pr = {}));
var Fy = /* @__PURE__ */ De("<circle></circle>");
function Nf(e, t) {
  Ce(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  qe();
  var o = Fy();
  return He(
    (a) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Fr(o, Gn(a));
    },
    [
      () => nn([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    Pe
  ), Y(e, o), ke({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), y();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), y();
    }
  });
}
be(Nf, { radius: {}, class: {} }, [], [], !0);
var qy = /* @__PURE__ */ De("<path></path>");
function Vf(e, t) {
  Ce(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), a = w(t, "class", 12, "");
  qe();
  var i = qy();
  return He(
    (s) => {
      xe(i, "stroke-width", n()), xe(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Fr(i, Gn(s));
    },
    [
      () => nn([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    Pe
  ), Y(e, i), ke({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), y();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), y();
    },
    get class() {
      return a();
    },
    set class(s) {
      a(s), y();
    }
  });
}
be(
  Vf,
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
const Uy = {
  [Pr.Dots]: 1,
  [Pr.Lines]: 1,
  [Pr.Cross]: 6
};
var Gy = /* @__PURE__ */ De('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Jy = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Lf(e, t) {
  Ce(t, !1), Rt(e, Jy);
  const [n, r] = _t(), o = () => le(E, "$flowId", n), a = () => le(b, "$viewport", n), i = fe(), s = fe(), l = fe(), u = fe(), c = fe();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => Pr.Dots), v = w(t, "gap", 12, 20), m = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), S = w(t, "patternColor", 12, void 0), h = w(t, "patternClass", 12, void 0), $ = w(t, "class", 12, "");
  const { viewport: b, flowId: E } = mt(), O = m() || Uy[f()], T = f() === Pr.Dots, N = f() === Pr.Cross, z = Array.isArray(v()) ? v() : [v(), v()];
  _e(
    () => (o(), oe(d())),
    () => {
      ie(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), _e(() => a(), () => {
    ie(s, [
      z[0] * a().zoom || 1,
      z[1] * a().zoom || 1
    ]);
  }), _e(() => a(), () => {
    ie(l, O * a().zoom);
  }), _e(() => (p(l), p(s)), () => {
    ie(u, N ? [p(l), p(l)] : p(s));
  }), _e(
    () => (p(l), p(u)),
    () => {
      ie(c, T ? [
        p(l) / 2,
        p(l) / 2
      ] : [
        p(u)[0] / 2,
        p(u)[1] / 2
      ]);
    }
  ), Wt(), qe();
  var D = Gy(), W = te(D), j = te(W);
  {
    var X = (C) => {
      const A = /* @__PURE__ */ Pe(() => p(l) / 2);
      Nf(C, {
        get radius() {
          return p(A);
        },
        get class() {
          return h();
        }
      });
    }, P = (C) => {
      Vf(C, {
        get dimensions() {
          return p(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return _();
        },
        get class() {
          return h();
        }
      });
    };
    Le(j, (C) => {
      T ? C(X) : C(P, !1);
    });
  }
  ee(W);
  var M = G(W);
  ee(D), He(
    (C) => {
      Fr(D, Gn(C), "svelte-1r7pe8d"), Mt(D, "--xy-background-color-props", x()), Mt(D, "--xy-background-pattern-color-props", S()), xe(W, "id", p(i)), xe(W, "x", a().x % p(s)[0]), xe(W, "y", a().y % p(s)[1]), xe(W, "width", p(s)[0]), xe(W, "height", p(s)[1]), xe(W, "patternTransform", `translate(-${p(c)[0]},-${p(c)[1]})`), xe(M, "fill", `url(#${p(i)})`);
    },
    [
      () => nn(["svelte-flow__background", $()])
    ],
    Pe
  ), Y(e, D);
  var k = ke({
    get id() {
      return d();
    },
    set id(C) {
      d(C), y();
    },
    get variant() {
      return f();
    },
    set variant(C) {
      f(C), y();
    },
    get gap() {
      return v();
    },
    set gap(C) {
      v(C), y();
    },
    get size() {
      return m();
    },
    set size(C) {
      m(C), y();
    },
    get lineWidth() {
      return _();
    },
    set lineWidth(C) {
      _(C), y();
    },
    get bgColor() {
      return x();
    },
    set bgColor(C) {
      x(C), y();
    },
    get patternColor() {
      return S();
    },
    set patternColor(C) {
      S(C), y();
    },
    get patternClass() {
      return h();
    },
    set patternClass(C) {
      h(C), y();
    },
    get class() {
      return $();
    },
    set class(C) {
      $(C), y();
    }
  });
  return r(), k;
}
be(
  Lf,
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
var Qy = /* @__PURE__ */ De("<rect></rect>");
function Af(e, t) {
  Ce(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  qe();
  var v = Qy();
  return He(
    (m) => {
      Fr(v, Gn(m)), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", i()), xe(v, "ry", i()), xe(v, "width", o()), xe(v, "height", a()), xe(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l()), Tt(v, "selected", d());
    },
    [
      () => nn(["svelte-flow__minimap-node", f()])
    ],
    Pe
  ), Y(e, v), ke({
    get x() {
      return n();
    },
    set x(m) {
      n(m), y();
    },
    get y() {
      return r();
    },
    set y(m) {
      r(m), y();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), y();
    },
    get height() {
      return a();
    },
    set height(m) {
      a(m), y();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(m) {
      i(m), y();
    },
    get color() {
      return s();
    },
    set color(m) {
      s(m), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(m) {
      l(m), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(m) {
      u(m), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(m) {
      c(m), y();
    },
    get selected() {
      return d();
    },
    set selected(m) {
      d(m), y();
    },
    get class() {
      return f();
    },
    set class(m) {
      f(m), y();
    }
  });
}
be(
  Af,
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
function Qu(e, t) {
  const n = zm({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = Q(t.viewport);
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
const hs = (e) => e instanceof Function ? e : () => e;
var e2 = /* @__PURE__ */ De("<title> </title>"), t2 = /* @__PURE__ */ De('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function zf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(Qe, "$flowId", n), a = () => le(Xe, "$viewport", n), i = () => le(tt, "$containerWidth", n), s = () => le(Ge, "$containerHeight", n), l = () => le(ye, "$nodeLookup", n), u = () => le(ae, "$nodes", n), c = () => le(q, "$panZoom", n), d = () => le(me, "$translateExtent", n), f = fe(), v = fe(), m = fe(), _ = fe(), x = fe(), S = fe(), h = fe(), $ = fe(), b = fe(), E = fe(), O = fe(), T = fe(), N = fe();
  let z = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), W = w(t, "nodeStrokeColor", 12, "transparent"), j = w(t, "nodeColor", 12, void 0), X = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), k = w(t, "bgColor", 12, void 0), C = w(t, "maskColor", 12, void 0), A = w(t, "maskStrokeColor", 12, void 0), H = w(t, "maskStrokeWidth", 12, void 0), K = w(t, "width", 12, void 0), R = w(t, "height", 12, void 0), I = w(t, "pannable", 12, !0), ne = w(t, "zoomable", 12, !0), J = w(t, "inversePan", 12, void 0), Z = w(t, "zoomStep", 12, void 0), se = w(t, "style", 12, ""), ge = w(t, "class", 12, "");
  const ve = 200, ue = 150, {
    nodes: ae,
    nodeLookup: ye,
    viewport: Xe,
    width: tt,
    height: Ge,
    flowId: Qe,
    panZoom: q,
    translateExtent: me
  } = mt(), $e = j() === void 0 ? void 0 : hs(j()), Te = hs(W()), at = hs(X()), Ie = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), et = `svelte-flow__minimap-desc-${o()}`;
  let it = fe(p(f));
  const dt = () => p(S);
  _e(
    () => (a(), i(), s()),
    () => {
      ie(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), _e(
    () => (l(), p(f), u()),
    () => {
      ie(it, l().size > 0 ? Vd(wi(l()), p(f)) : p(f)), u();
    }
  ), _e(() => oe(K()), () => {
    ie(v, K() ?? ve);
  }), _e(() => oe(R()), () => {
    ie(m, R() ?? ue);
  }), _e(
    () => (p(it), p(v)),
    () => {
      ie(_, p(it).width / p(v));
    }
  ), _e(
    () => (p(it), p(m)),
    () => {
      ie(x, p(it).height / p(m));
    }
  ), _e(
    () => (p(_), p(x)),
    () => {
      ie(S, Math.max(p(_), p(x)));
    }
  ), _e(() => (p(S), p(v)), () => {
    ie(h, p(S) * p(v));
  }), _e(
    () => (p(S), p(m)),
    () => {
      ie($, p(S) * p(m));
    }
  ), _e(() => p(S), () => {
    ie(b, 5 * p(S));
  }), _e(
    () => (p(it), p(h), p(b)),
    () => {
      ie(E, p(it).x - (p(h) - p(it).width) / 2 - p(b));
    }
  ), _e(
    () => (p(it), p($), p(b)),
    () => {
      ie(O, p(it).y - (p($) - p(it).height) / 2 - p(b));
    }
  ), _e(() => (p(h), p(b)), () => {
    ie(T, p(h) + p(b) * 2);
  }), _e(() => (p($), p(b)), () => {
    ie(N, p($) + p(b) * 2);
  }), Wt(), qe();
  const St = /* @__PURE__ */ Pe(() => se() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), ce = /* @__PURE__ */ Pe(() => nn(["svelte-flow__minimap", ge()]));
  Ka(e, {
    get position() {
      return z();
    },
    get style() {
      return p(St);
    },
    get class() {
      return p(ce);
    },
    "data-testid": "svelte-flow__minimap",
    children: (pe, rn) => {
      var Xt = ht(), Ne = Me(Xt);
      {
        var $t = (Re) => {
          var We = t2();
          xe(We, "aria-labelledby", et);
          var lt = te(We);
          {
            var Bt = (At) => {
              var Pt = e2();
              xe(Pt, "id", et);
              var jt = te(Pt, !0);
              ee(Pt), He(() => Un(jt, D())), Y(At, Pt);
            };
            Le(lt, (At) => {
              D() && At(Bt);
            });
          }
          var zn = G(lt);
          gn(zn, 1, u, (At) => At.id, (At, Pt) => {
            var jt = ht();
            const zt = /* @__PURE__ */ Pe(() => l().get(p(Pt).id));
            var yt = Me(jt);
            {
              var Dn = (wn) => {
                const Gt = /* @__PURE__ */ Pe(() => Nr(p(zt))), Qn = /* @__PURE__ */ Pe(() => $e == null ? void 0 : $e(p(zt))), er = /* @__PURE__ */ Pe(() => Te(p(zt))), mr = /* @__PURE__ */ Pe(() => at(p(zt)));
                Af(wn, en(
                  {
                    get x() {
                      return p(zt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return p(zt).internals.positionAbsolute.y;
                    }
                  },
                  () => p(Gt),
                  {
                    get selected() {
                      return p(zt).selected;
                    },
                    get color() {
                      return p(Qn);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return p(er);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: Ie,
                    get class() {
                      return p(mr);
                    }
                  }
                ));
              };
              Le(yt, (wn) => {
                p(zt) && zd(p(zt)) && wn(Dn);
              });
            }
            Y(At, jt);
          });
          var kn = G(zn);
          ee(We), Ft(We, (At, Pt) => Qu == null ? void 0 : Qu(At, Pt), () => ({
            panZoom: c(),
            viewport: Xe,
            getViewScale: dt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: J(),
            zoomStep: Z(),
            pannable: I(),
            zoomable: ne()
          })), He(() => {
            xe(We, "width", p(v)), xe(We, "height", p(m)), xe(We, "viewBox", `${p(E) ?? ""} ${p(O) ?? ""} ${p(T) ?? ""} ${p(N) ?? ""}`), Mt(We, "--xy-minimap-mask-background-color-props", C()), Mt(We, "--xy-minimap-mask-stroke-color-props", A()), Mt(We, "--xy-minimap-mask-stroke-width-props", H() ? H() * p(S) : void 0), xe(kn, "d", `M${p(E) - p(b)},${p(O) - p(b)}h${p(T) + p(b) * 2}v${p(N) + p(b) * 2}h${-p(T) - p(b) * 2}z
      M${p(f).x ?? ""},${p(f).y ?? ""}h${p(f).width ?? ""}v${p(f).height ?? ""}h${-p(f).width}z`);
          }), Y(Re, We);
        };
        Le(Ne, (Re) => {
          c() && Re($t);
        });
      }
      Y(pe, Xt);
    },
    $$slots: { default: !0 }
  });
  var Be = ke({
    get position() {
      return z();
    },
    set position(pe) {
      z(pe), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(pe) {
      D(pe), y();
    },
    get nodeStrokeColor() {
      return W();
    },
    set nodeStrokeColor(pe) {
      W(pe), y();
    },
    get nodeColor() {
      return j();
    },
    set nodeColor(pe) {
      j(pe), y();
    },
    get nodeClass() {
      return X();
    },
    set nodeClass(pe) {
      X(pe), y();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(pe) {
      P(pe), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(pe) {
      M(pe), y();
    },
    get bgColor() {
      return k();
    },
    set bgColor(pe) {
      k(pe), y();
    },
    get maskColor() {
      return C();
    },
    set maskColor(pe) {
      C(pe), y();
    },
    get maskStrokeColor() {
      return A();
    },
    set maskStrokeColor(pe) {
      A(pe), y();
    },
    get maskStrokeWidth() {
      return H();
    },
    set maskStrokeWidth(pe) {
      H(pe), y();
    },
    get width() {
      return K();
    },
    set width(pe) {
      K(pe), y();
    },
    get height() {
      return R();
    },
    set height(pe) {
      R(pe), y();
    },
    get pannable() {
      return I();
    },
    set pannable(pe) {
      I(pe), y();
    },
    get zoomable() {
      return ne();
    },
    set zoomable(pe) {
      ne(pe), y();
    },
    get inversePan() {
      return J();
    },
    set inversePan(pe) {
      J(pe), y();
    },
    get zoomStep() {
      return Z();
    },
    set zoomStep(pe) {
      Z(pe), y();
    },
    get style() {
      return se();
    },
    set style(pe) {
      se(pe), y();
    },
    get class() {
      return ge();
    },
    set class(pe) {
      ge(pe), y();
    }
  });
  return r(), Be;
}
be(
  zf,
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
const ec = (e) => nm(e);
function An() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: m, nodeOrigin: _, edgeLookup: x, connectionLookup: S } = mt(), h = (E) => {
    var O, T;
    const N = Q(m), z = ec(E) ? E : N.get(E.id), D = z.parentId ? im(z.position, z.measured, z.parentId, N, Q(_)) : z.position, W = {
      ...z,
      position: D,
      width: ((O = z.measured) == null ? void 0 : O.width) ?? z.width,
      height: ((T = z.measured) == null ? void 0 : T.height) ?? z.height
    };
    return _o(W);
  }, $ = (E, O, T = { replace: !1 }) => {
    var N;
    const z = (N = Q(m).get(E)) == null ? void 0 : N.internals.userNode;
    if (!z)
      return;
    const D = typeof O == "function" ? O(z) : O;
    T.replace ? d.update((W) => W.map((j) => j.id === E ? ec(D) ? D : { ...j, ...D } : j)) : (Object.assign(z, D), d.update((W) => W));
  }, b = (E) => Q(m).get(E);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: b,
    getNode: (E) => {
      var O;
      return (O = b(E)) == null ? void 0 : O.internals.userNode;
    },
    getNodes: (E) => E === void 0 ? Q(d) : tc(Q(m), E),
    getEdge: (E) => Q(x).get(E),
    getEdges: (E) => E === void 0 ? Q(f) : tc(Q(x), E),
    setZoom: (E, O) => {
      const T = Q(c);
      return T ? T.scaleTo(E, { duration: O == null ? void 0 : O.duration }) : Promise.resolve(!1);
    },
    getZoom: () => Q(a).zoom,
    setViewport: async (E, O) => {
      const T = Q(a), N = Q(c);
      return N ? (await N.setViewport({
        x: E.x ?? T.x,
        y: E.y ?? T.y,
        zoom: E.zoom ?? T.zoom
      }, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Q(a),
    setCenter: async (E, O, T) => {
      const N = typeof (T == null ? void 0 : T.zoom) < "u" ? T.zoom : Q(u), z = Q(c);
      return z ? (await z.setViewport({
        x: Q(i) / 2 - E * N,
        y: Q(s) / 2 - O * N,
        zoom: N
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (E, O) => {
      const T = Q(c);
      if (!T)
        return Promise.resolve(!1);
      const N = yl(E, Q(i), Q(s), Q(l), Q(u), (O == null ? void 0 : O.padding) ?? 0.1);
      return await T.setViewport(N, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (E, O = !0, T) => {
      const N = Au(E), z = N ? E : h(E);
      return z ? (T || Q(d)).filter((D) => {
        const W = Q(m).get(D.id);
        if (!W || !N && D.id === E.id)
          return !1;
        const j = _o(W), X = li(j, z);
        return O && X > 0 || X >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (E, O, T = !0) => {
      const N = Au(E) ? E : h(E);
      if (!N)
        return !1;
      const z = li(N, O);
      return T && z > 0 || z >= N.width * N.height;
    },
    deleteElements: async ({ nodes: E = [], edges: O = [] }) => {
      const { nodes: T, edges: N } = await Rd({
        nodesToRemove: E,
        edgesToRemove: O,
        nodes: Q(d),
        edges: Q(f),
        onBeforeDelete: Q(r)
      });
      return T && d.update((z) => z.filter((D) => !T.some(({ id: W }) => W === D.id))), N && f.update((z) => z.filter((D) => !N.some(({ id: W }) => W === D.id))), {
        deletedNodes: T,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (E, O = { snapToGrid: !0 }) => {
      const T = Q(v);
      if (!T)
        return E;
      const N = O.snapToGrid ? Q(o) : !1, { x: z, y: D, zoom: W } = Q(a), { x: j, y: X } = T.getBoundingClientRect(), P = {
        x: E.x - j,
        y: E.y - X
      };
      return bi(P, [z, D, W], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (E) => {
      const O = Q(v);
      if (!O)
        return E;
      const { x: T, y: N, zoom: z } = Q(a), { x: D, y: W } = O.getBoundingClientRect(), j = Ad(E, [T, N, z]);
      return {
        x: j.x + D,
        y: j.y + W
      };
    },
    toObject: () => ({
      nodes: Q(d).map((E) => ({
        ...E,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...E.position },
        data: { ...E.data }
      })),
      edges: Q(f).map((E) => ({ ...E })),
      viewport: { ...Q(a) }
    }),
    updateNode: $,
    updateNodeData: (E, O, T) => {
      var N;
      const z = (N = Q(m).get(E)) == null ? void 0 : N.internals.userNode;
      if (!z)
        return;
      const D = typeof O == "function" ? O(z) : O;
      z.data = T != null && T.replace ? D : { ...z.data, ...D }, d.update((W) => W);
    },
    getNodesBounds: (E) => {
      const O = Q(m), T = Q(_);
      return rm(E, { nodeLookup: O, nodeOrigin: T });
    },
    getHandleConnections: ({ type: E, id: O, nodeId: T }) => {
      var N;
      return Array.from(((N = Q(S).get(`${T}-${E}-${O ?? null}`)) == null ? void 0 : N.values()) ?? []);
    },
    viewport: a
  };
}
function tc(e, t) {
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
var n2 = /* @__PURE__ */ he('<div class="svelte-flow__node-toolbar"><!></div>');
function Df(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le($, "$nodes", n), a = () => le(h, "$nodeLookup", n), i = () => le(S, "$viewport", n), s = () => le(x, "$domNode", n), l = fe(), u = fe(), c = fe();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), v = w(t, "align", 12, void 0), m = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: S, nodeLookup: h, nodes: $ } = mt(), { getNodesBounds: b } = An(), E = Hr("svelteflow__node_id");
  let O = fe(), T = fe([]), N = m() !== void 0 ? m() : 10, z = f() !== void 0 ? f() : ze.Top, D = v() !== void 0 ? v() : "center";
  _e(
    () => (o(), oe(d()), a()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || E];
      ie(T, M.reduce(
        (k, C) => {
          const A = a().get(C);
          return A && k.push(A), k;
        },
        []
      ));
    }
  ), _e(
    () => (p(T), i()),
    () => {
      const M = b(p(T));
      M && ie(O, bm(M, i(), z, N, D));
    }
  ), _e(() => p(T), () => {
    ie(l, p(T).length === 0 ? 1 : Math.max(...p(T).map((M) => (M.internals.z || 5) + 1)));
  }), _e(() => o(), () => {
    ie(u, o().filter((M) => M.selected).length);
  }), _e(
    () => (oe(_()), p(T), p(u)),
    () => {
      ie(c, typeof _() == "boolean" ? _() : p(T).length === 1 && p(T)[0].selected && p(u) === 1);
    }
  ), Wt(), qe();
  var W = ht(), j = Me(W);
  {
    var X = (M) => {
      var k = n2(), C = te(k);
      qt(C, t, "default", {}), ee(k), Ft(k, (A, H) => xa == null ? void 0 : xa(A, H), () => ({ domNode: s() })), He(
        (A) => {
          xe(k, "data-id", A), Mt(k, "position", "absolute"), Mt(k, "transform", p(O)), Mt(k, "z-index", p(l));
        },
        [
          () => p(T).reduce((A, H) => `${A}${H.id} `, "").trim()
        ],
        Pe
      ), Y(M, k);
    };
    Le(j, (M) => {
      s() && p(c) && p(T) && M(X);
    });
  }
  Y(e, W);
  var P = ke({
    get nodeId() {
      return d();
    },
    set nodeId(M) {
      d(M), y();
    },
    get position() {
      return f();
    },
    set position(M) {
      f(M), y();
    },
    get align() {
      return v();
    },
    set align(M) {
      v(M), y();
    },
    get offset() {
      return m();
    },
    set offset(M) {
      m(M), y();
    },
    get isVisible() {
      return _();
    },
    set isVisible(M) {
      _(M), y();
    }
  });
  return r(), P;
}
be(
  Df,
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
function Ur(e) {
  const { nodes: t, nodeLookup: n } = mt();
  let r = [], o = !0;
  return Er([t, n], ([, a], i) => {
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
    (!Pm(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const nc = "tinyflow-component";
class r2 {
  constructor(t) {
    if (sn(this, "options"), sn(this, "rootEl"), sn(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(nc);
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
    const n = document.createElement(nc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const o2 = () => {
  const e = Oe([]), t = Oe([]), n = Oe({ x: 250, y: 100, zoom: 1 });
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
}, Ji = o2();
var i2 = /* @__PURE__ */ he("<button><!></button>");
function xt(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = i2();
  let a;
  var i = te(o);
  return mo(i, () => n() ?? Zt), ee(o), He(() => a = Mn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), Y(e, o), ke({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
be(xt, { children: {} }, [], [], !0);
var a2 = /* @__PURE__ */ he("<input>");
function Hf(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ Cn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = a2();
  qc(r);
  let o;
  He(() => o = Mn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), Y(e, r), ke();
}
be(Hf, {}, [], [], !0);
var s2 = /* @__PURE__ */ he("<input>");
function Pn(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ Cn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = s2();
  qc(r);
  let o;
  He(() => o = Mn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), Y(e, r), ke();
}
be(Pn, {}, [], [], !0);
var l2 = /* @__PURE__ */ he("<textarea></textarea>");
function mn(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ Cn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = l2();
  Jp(r);
  let o;
  He(() => o = Mn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), Y(e, r), ke();
}
be(mn, {}, [], [], !0);
var u2 = /* @__PURE__ */ he('<div role="button"><!></div>'), c2 = /* @__PURE__ */ he("<div></div>");
function If(e, t) {
  const n = Et(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Et(n, ["items", "onChange", "activeIndex"]);
  Ce(t, !1);
  let o = w(t, "items", 28, () => []), a = w(t, "onChange", 12, () => {
  }), i = w(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  qe();
  var l = c2();
  let u;
  return gn(l, 5, o, Aa, (c, d, f) => {
    var v = u2();
    xe(v, "tabindex", f), v.__click = () => s(p(d), f), v.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), s(p(d), f));
    };
    var m = te(v);
    {
      var _ = (S) => {
        var h = bt();
        He(() => Un(h, p(d).label)), Y(S, h);
      }, x = (S) => {
        var h = ht(), $ = Me(h);
        mo($, () => p(d).label ?? Zt), Y(S, h);
      };
      Le(m, (S) => {
        typeof p(d).label == "string" ? S(_) : S(x, !1);
      });
    }
    ee(v), He(() => yo(v, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), Y(c, v);
  }), ee(l), He(() => u = Mn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), Y(e, l), ke({
    get items() {
      return o();
    },
    set items(c) {
      o(c), y();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), y();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), y();
    }
  });
}
La(["click", "keydown"]);
be(If, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var d2 = (e, t, n) => t(p(n)), f2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(p(n)));
}, v2 = /* @__PURE__ */ he('<div class="tf-collapse-item-description"><!></div>'), p2 = /* @__PURE__ */ he('<div class="tf-collapse-item-content"><!></div>'), g2 = /* @__PURE__ */ he('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), h2 = /* @__PURE__ */ he("<div></div>");
const m2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Bf(e, t) {
  Ce(t, !0), Rt(e, m2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Bn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = h2();
  return gn(i, 21, n, Aa, (s, l, u) => {
    var c = g2(), d = te(c);
    xe(d, "tabindex", u), d.__click = [d2, a, l], d.__keydown = [f2, a, l];
    var f = te(d), v = te(f);
    Cr(v, {
      get target() {
        return p(l).icon;
      }
    }), ee(f);
    var m = G(f, 2);
    Cr(m, {
      get target() {
        return p(l).title;
      }
    });
    var _ = G(m, 2);
    ee(d);
    var x = G(d, 2);
    {
      var S = (b) => {
        var E = v2(), O = te(E);
        Cr(O, {
          get target() {
            return p(l).description;
          }
        }), ee(E), Y(b, E);
      };
      Le(x, (b) => {
        p(l).description && b(S);
      });
    }
    var h = G(x, 2);
    {
      var $ = (b) => {
        var E = p2(), O = te(E);
        Cr(O, {
          get target() {
            return p(l).content;
          }
        }), ee(E), Y(b, E);
      };
      Le(h, (b) => {
        o().includes(p(l).key) && b($);
      });
    }
    ee(c), He((b) => yo(_, `tf-collapse-item-title-arrow ${b ?? ""} svelte-1jfktzw`), [
      () => o().includes(p(l).key) ? "rotate-90" : ""
    ]), Y(s, c);
  }), ee(i), He(() => {
    xe(i, "style", t.style), yo(i, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), Y(e, i), ke({
    get items() {
      return n();
    },
    set items(s) {
      n(s), y();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), y();
    }
  });
}
La(["click", "keydown"]);
be(Bf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Cr(e, t) {
  Ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = ht(), o = Me(r);
  {
    var a = (s) => {
      var l = ht(), u = Me(l);
      mo(u, () => n() ?? Zt), Y(s, l);
    }, i = (s) => {
      var l = ht(), u = Me(l);
      Xc(u, n), Y(s, l);
    };
    Le(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return Y(e, r), ke({
    get target() {
      return n();
    },
    set target(s) {
      n(s), y();
    }
  });
}
be(Cr, { target: {} }, [], [], !0);
var y2 = (e, t, n) => t(p(n)), w2 = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), b2 = /* @__PURE__ */ he('<div class="tf-select-content-children"><!></div>'), x2 = /* @__PURE__ */ he('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), _2 = /* @__PURE__ */ he('<div class="tf-select-content nopan nodrag"><!></div>'), $2 = /* @__PURE__ */ he("<!> <!>", 1), C2 = /* @__PURE__ */ he('<div class="tf-select-input-placeholder"> </div>'), k2 = /* @__PURE__ */ he('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), E2 = /* @__PURE__ */ he("<div><!></div>");
function Rr(e, t) {
  Ce(t, !0);
  const n = ($, b = Zt) => {
    var E = ht(), O = Me(E);
    gn(O, 19, b, (T, N) => `${N}_${T.value}`, (T, N) => {
      var z = x2(), D = Me(z);
      D.__click = [y2, _, N];
      var W = te(D), j = te(W);
      {
        var X = (C) => {
          var A = w2();
          Y(C, A);
        };
        Le(j, (C) => {
          p(N).children && p(N).children.length > 0 && C(X);
        });
      }
      ee(W);
      var P = G(W, 2);
      Cr(P, {
        get target() {
          return p(N).label;
        }
      }), ee(D);
      var M = G(D, 2);
      {
        var k = (C) => {
          var A = b2(), H = te(A);
          n(H, () => p(N).children), ee(A), Y(C, A);
        };
        Le(M, (C) => {
          p(N).children && p(N).children.length > 0 && (l() || c().includes(p(N).value)) && C(k);
        });
      }
      Y(T, z);
    }), Y($, E);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), a = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), f = /* @__PURE__ */ Cn(t, [
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
  ]), v = /* @__PURE__ */ Je(() => {
    const $ = [], b = (E) => {
      for (let O of E)
        i().length > 0 ? i().includes(O.value) && $.push(O) : s().includes(O.value) && $.push(O), O.children && O.children.length > 0 && b(O.children);
    };
    return b(r()), $;
  }), m;
  function _($) {
    var b, E;
    if ($.children && $.children.length > 0) {
      (b = o()) == null || b($);
      return;
    } else
      m == null || m.hide(), (E = a()) == null || E($);
  }
  var x = E2();
  let S;
  var h = te(x);
  return fr(
    ki(h, {
      floating: ($) => {
        var b = _2(), E = te(b);
        n(E, r), ee(b), Y($, b);
      },
      children: ($, b) => {
        var E = k2();
        let O;
        var T = te(E);
        gn(
          T,
          23,
          () => p(v),
          (N, z) => `${z}_${N.value}`,
          (N, z, D) => {
            var W = ht(), j = Me(W);
            {
              var X = (M) => {
                var k = ht(), C = Me(k);
                {
                  var A = (H) => {
                    Cr(H, {
                      get target() {
                        return p(z).label;
                      }
                    });
                  };
                  Le(C, (H) => {
                    p(D) === 0 && H(A);
                  });
                }
                Y(M, k);
              }, P = (M) => {
                var k = $2(), C = Me(k);
                Cr(C, {
                  get target() {
                    return p(z).label;
                  }
                });
                var A = G(C, 2);
                {
                  var H = (K) => {
                    var R = bt(",");
                    Y(K, R);
                  };
                  Le(A, (K) => {
                    p(D) < p(v).length - 1 && K(H);
                  });
                }
                Y(M, k);
              };
              Le(j, (M) => {
                u() ? M(P, !1) : M(X);
              });
            }
            Y(N, W);
          },
          (N) => {
            var z = C2(), D = te(z, !0);
            ee(z), He(() => Un(D, d())), Y(N, z);
          }
        ), ee(T), ot(2), ee(E), He(() => O = Mn(E, O, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), Y($, E);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => m = $,
    () => m
  ), ee(x), He(() => S = Mn(x, S, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), Y(e, x), ke({
    get items() {
      return r();
    },
    set items($) {
      r($), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), y();
    },
    get onSelect() {
      return a();
    },
    set onSelect($) {
      a($), y();
    },
    get value() {
      return i();
    },
    set value($ = []) {
      i($), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), y();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), y();
    }
  });
}
La(["click"]);
be(
  Rr,
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
const ci = Math.min, vo = Math.max, Ca = Math.round, Wn = (e) => ({
  x: e,
  y: e
}), S2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, P2 = {
  start: "end",
  end: "start"
};
function js(e, t, n) {
  return vo(e, ci(t, n));
}
function _i(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zr(e) {
  return e.split("-")[0];
}
function $i(e) {
  return e.split("-")[1];
}
function jf(e) {
  return e === "x" ? "y" : "x";
}
function Cl(e) {
  return e === "y" ? "height" : "width";
}
function Co(e) {
  return ["top", "bottom"].includes(Zr(e)) ? "y" : "x";
}
function kl(e) {
  return jf(Co(e));
}
function O2(e, t, n) {
  n === void 0 && (n = !1);
  const r = $i(e), o = kl(e), a = Cl(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ka(i)), [i, ka(i)];
}
function T2(e) {
  const t = ka(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => P2[t]);
}
function R2(e, t, n) {
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
  const o = $i(e);
  let a = R2(Zr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ys)))), a;
}
function ka(e) {
  return e.replace(/left|right|bottom|top/g, (t) => S2[t]);
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
function Yf(e) {
  return typeof e != "number" ? N2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ea(e) {
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
function rc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Co(t), i = kl(t), s = Cl(i), l = Zr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch ($i(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const V2 = async (e, t, n) => {
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
  } = rc(u, r, l), f = r, v = {}, m = 0;
  for (let _ = 0; _ < s.length; _++) {
    const {
      name: x,
      fn: S
    } = s[_], {
      x: h,
      y: $,
      data: b,
      reset: E
    } = await S({
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
    c = h ?? c, d = $ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...b
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: c,
      y: d
    } = rc(u, f, l)), _ = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Zf(e, t) {
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
  } = _i(t, e), m = Yf(v), _ = s[f ? d === "floating" ? "reference" : "floating" : d], x = Ea(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(_))) == null || n ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), S = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), $ = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Ea(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: S,
    offsetParent: h,
    strategy: l
  }) : S);
  return {
    top: (x.top - b.top + m.top) / $.y,
    bottom: (b.bottom - x.bottom + m.bottom) / $.y,
    left: (x.left - b.left + m.left) / $.x,
    right: (b.right - x.right + m.right) / $.x
  };
}
const L2 = (e) => ({
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
    } = _i(e, t) || {};
    if (u == null)
      return {};
    const d = Yf(c), f = {
      x: n,
      y: r
    }, v = kl(o), m = Cl(v), _ = await i.getDimensions(u), x = v === "y", S = x ? "top" : "left", h = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[v] - f[v] - a.floating[m], E = f[v] - a.reference[v], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let T = O ? O[$] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(O))) && (T = s.floating[$] || a.floating[m]);
    const N = b / 2 - E / 2, z = T / 2 - _[m] / 2 - 1, D = ci(d[S], z), W = ci(d[h], z), j = D, X = T - _[m] - W, P = T / 2 - _[m] / 2 + N, M = js(j, P, X), k = !l.arrow && $i(o) != null && P !== M && a.reference[m] / 2 - (P < j ? D : W) - _[m] / 2 < 0, C = k ? P < j ? P - j : P - X : 0;
    return {
      [v]: f[v] + C,
      data: {
        [v]: M,
        centerOffset: P - M - C,
        ...k && {
          alignmentOffset: C
        }
      },
      reset: k
    };
  }
}), A2 = function(e) {
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
        fallbackAxisSideDirection: m = "none",
        flipAlignment: _ = !0,
        ...x
      } = _i(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = Zr(o), h = Co(s), $ = Zr(s) === s, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = f || ($ || !_ ? [ka(s)] : T2(s)), O = m !== "none";
      !f && O && E.push(...M2(s, _, m, b));
      const T = [s, ...E], N = await Zf(t, x), z = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(N[S]), d) {
        const P = O2(o, i, b);
        z.push(N[P[0]], N[P[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: z
      }], !z.every((P) => P <= 0)) {
        var W, j;
        const P = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, M = T[P];
        if (M)
          return {
            data: {
              index: P,
              overflows: D
            },
            reset: {
              placement: M
            }
          };
        let k = (j = D.filter((C) => C.overflows[0] <= 0).sort((C, A) => C.overflows[1] - A.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var X;
              const C = (X = D.filter((A) => {
                if (O) {
                  const H = Co(A.placement);
                  return H === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((H) => H > 0).reduce((H, K) => H + K, 0)]).sort((A, H) => A[1] - H[1])[0]) == null ? void 0 : X[0];
              C && (k = C);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function z2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Zr(n), s = $i(n), l = Co(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = _i(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof m == "number" && (v = s === "end" ? m * -1 : m), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const D2 = function(e) {
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
      } = t, l = await z2(t, e);
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
}, H2 = function(e) {
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
          fn: (x) => {
            let {
              x: S,
              y: h
            } = x;
            return {
              x: S,
              y: h
            };
          }
        },
        ...l
      } = _i(e, t), u = {
        x: n,
        y: r
      }, c = await Zf(t, l), d = Co(Zr(o)), f = jf(d);
      let v = u[f], m = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", h = v + c[x], $ = v - c[S];
        v = js(h, v, $);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", S = d === "y" ? "bottom" : "right", h = m + c[x], $ = m - c[S];
        m = js(h, m, $);
      }
      const _ = s.fn({
        ...t,
        [f]: v,
        [d]: m
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
};
function Fa() {
  return typeof window < "u";
}
function Mo(e) {
  return Wf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function hr(e) {
  var t;
  return (t = (Wf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wf(e) {
  return Fa() ? e instanceof Node || e instanceof pn(e).Node : !1;
}
function Nn(e) {
  return Fa() ? e instanceof Element || e instanceof pn(e).Element : !1;
}
function Fn(e) {
  return Fa() ? e instanceof HTMLElement || e instanceof pn(e).HTMLElement : !1;
}
function oc(e) {
  return !Fa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pn(e).ShadowRoot;
}
function Ci(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function I2(e) {
  return ["table", "td", "th"].includes(Mo(e));
}
function qa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function El(e) {
  const t = Sl(), n = Nn(e) ? Vn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function B2(e) {
  let t = Mr(e);
  for (; Fn(t) && !ko(t); ) {
    if (El(t))
      return t;
    if (qa(t))
      return null;
    t = Mr(t);
  }
  return null;
}
function Sl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ko(e) {
  return ["html", "body", "#document"].includes(Mo(e));
}
function Vn(e) {
  return pn(e).getComputedStyle(e);
}
function Ua(e) {
  return Nn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mr(e) {
  if (Mo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    oc(e) && e.host || // Fallback.
    hr(e)
  );
  return oc(t) ? t.host : t;
}
function Xf(e) {
  const t = Mr(e);
  return ko(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fn(t) && Ci(t) ? t : Xf(t);
}
function Kf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Xf(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pn(o);
  return a ? (Zs(i), t.concat(i, i.visualViewport || [], Ci(o) ? o : [], [])) : t.concat(o, Kf(o, []));
}
function Zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ff(e) {
  const t = Vn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Fn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Ca(n) !== a || Ca(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function qf(e) {
  return Nn(e) ? e : e.contextElement;
}
function po(e) {
  const t = qf(e);
  if (!Fn(t))
    return Wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ff(t);
  let i = (a ? Ca(n.width) : n.width) / r, s = (a ? Ca(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const j2 = /* @__PURE__ */ Wn(0);
function Uf(e) {
  const t = pn(e);
  return !Sl() || !t.visualViewport ? j2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Y2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pn(e) ? !1 : t;
}
function di(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qf(e);
  let i = Wn(1);
  t && (r ? Nn(r) && (i = po(r)) : i = po(e));
  const s = Y2(a, n, r) ? Uf(a) : Wn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = pn(a), v = r && Nn(r) ? pn(r) : r;
    let m = f, _ = Zs(m);
    for (; _ && r && v !== m; ) {
      const x = po(_), S = _.getBoundingClientRect(), h = Vn(_), $ = S.left + (_.clientLeft + parseFloat(h.paddingLeft)) * x.x, b = S.top + (_.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += $, u += b, m = pn(_), _ = Zs(m);
    }
  }
  return Ea({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Pl(e, t) {
  const n = Ua(e).scrollLeft;
  return t ? t.left + n : di(hr(e)).left + n;
}
function Gf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Pl(e, r)
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
  const a = o === "fixed", i = hr(r), s = t ? qa(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Wn(1);
  const c = Wn(0), d = Fn(r);
  if ((d || !d && !a) && ((Mo(r) !== "body" || Ci(i)) && (l = Ua(r)), Fn(r))) {
    const v = di(r);
    u = po(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Gf(i, l, !0) : Wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function W2(e) {
  return Array.from(e.getClientRects());
}
function X2(e) {
  const t = hr(e), n = Ua(e), r = e.ownerDocument.body, o = vo(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = vo(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Pl(e);
  const s = -n.scrollTop;
  return Vn(r).direction === "rtl" && (i += vo(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function K2(e, t) {
  const n = pn(e), r = hr(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Sl();
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
  const n = di(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Fn(e) ? po(e) : Wn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function ic(e, t, n) {
  let r;
  if (t === "viewport")
    r = K2(e, n);
  else if (t === "document")
    r = X2(hr(e));
  else if (Nn(t))
    r = F2(t, n);
  else {
    const o = Uf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ea(r);
}
function Jf(e, t) {
  const n = Mr(e);
  return n === t || !Nn(n) || ko(n) ? !1 : Vn(n).position === "fixed" || Jf(n, t);
}
function q2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Kf(e, []).filter((s) => Nn(s) && Mo(s) !== "body"), o = null;
  const a = Vn(e).position === "fixed";
  let i = a ? Mr(e) : e;
  for (; Nn(i) && !ko(i); ) {
    const s = Vn(i), l = El(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Ci(i) && !l && Jf(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Mr(i);
  }
  return t.set(e, r), r;
}
function U2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? qa(t) ? [] : q2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = ic(t, u, o);
    return l.top = vo(c.top, l.top), l.right = ci(c.right, l.right), l.bottom = ci(c.bottom, l.bottom), l.left = vo(c.left, l.left), l;
  }, ic(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function G2(e) {
  const {
    width: t,
    height: n
  } = Ff(e);
  return {
    width: t,
    height: n
  };
}
function J2(e, t, n) {
  const r = Fn(t), o = hr(t), a = n === "fixed", i = di(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Wn(0);
  if (r || !r && !a)
    if ((Mo(t) !== "body" || Ci(o)) && (s = Ua(t)), r) {
      const f = di(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Pl(o));
  const u = o && !r && !a ? Gf(o, s) : Wn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function ms(e) {
  return Vn(e).position === "static";
}
function ac(e, t) {
  if (!Fn(e) || Vn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return hr(e) === n && (n = n.ownerDocument.body), n;
}
function Qf(e, t) {
  const n = pn(e);
  if (qa(e))
    return n;
  if (!Fn(e)) {
    let o = Mr(e);
    for (; o && !ko(o); ) {
      if (Nn(o) && !ms(o))
        return o;
      o = Mr(o);
    }
    return n;
  }
  let r = ac(e, t);
  for (; r && I2(r) && ms(r); )
    r = ac(r, t);
  return r && ko(r) && ms(r) && !El(r) ? n : r || B2(e) || n;
}
const Q2 = async function(e) {
  const t = this.getOffsetParent || Qf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: J2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ew(e) {
  return Vn(e).direction === "rtl";
}
const tw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Z2,
  getDocumentElement: hr,
  getClippingRect: U2,
  getOffsetParent: Qf,
  getElementRects: Q2,
  getClientRects: W2,
  getDimensions: G2,
  getScale: po,
  isElement: Nn,
  isRTL: ew
}, nw = D2, rw = H2, ow = A2, iw = L2, aw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: tw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return V2(e, t, {
    ...o,
    platform: a
  });
}, sw = ({
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
    const S = document.querySelector(e);
    if (S)
      e = S;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const S = document.querySelector(n);
    if (S)
      u = S;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    aw(e, u, {
      placement: r,
      middleware: [
        nw(o),
        // 手动偏移配置
        ow(a),
        //自动翻转
        rw(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [iw({ element: c })] : []
      ]
    }).then(({ x: S, y: h, placement: $, middlewareData: b }) => {
      if (Object.assign(u.style, {
        left: `${S}px`,
        top: `${h}px`
      }), l) {
        const { x: E, y: O } = b.arrow, T = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [T]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function m() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function _(S) {
    S.stopPropagation(), f ? m() : v();
  }
  function x(S) {
    u.contains(S.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((S) => {
    e.addEventListener(S, _);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((S) => {
        e.removeEventListener(S, _);
      }), document.removeEventListener("click", x);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var lw = /* @__PURE__ */ he('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ki(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let a, i, s;
  qr(() => (s = sw({
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
  var u = lw(), c = te(u), d = te(c);
  mo(d, n), ee(c), fr(c, (m) => a = m, () => a);
  var f = G(c, 2), v = te(f);
  return mo(v, r), ee(f), fr(f, (m) => i = m, () => i), ee(u), Y(e, u), ke({
    hide: l,
    get children() {
      return n();
    },
    set children(m) {
      n(m), y();
    },
    get floating() {
      return r();
    },
    set floating(m) {
      r(m), y();
    },
    get placement() {
      return o();
    },
    set placement(m = "bottom") {
      o(m), y();
    }
  });
}
be(ki, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function It(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), a = w(t, "mb", 7);
  var i = ht(), s = Me(i);
  return sg(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    He(() => c = Mn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === vc,
      l.nodeName.includes("-")
    ));
    var d = ht(), f = Me(d);
    mo(f, () => n() ?? Zt), Y(u, d);
  }), Y(e, i), ke({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), y();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), y();
    },
    get mb() {
      return a();
    },
    set mb(l) {
      a(l), y();
    }
  });
}
be(It, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var uw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const cw = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ga(e, t) {
  Ce(t, !0), Rt(e, cw);
  const n = /* @__PURE__ */ Cn(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  xt(e, en(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = uw();
      Y(r, a);
    },
    $$slots: { default: !0 }
  })), ke();
}
be(Ga, {}, [], [], !0);
const dw = () => {
  const e = mt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, fi = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, fw = () => {
  const { nodes: e, nodeLookup: t } = mt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = Q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = fi(), i = {
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
var vw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), pw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), gw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), hw = /* @__PURE__ */ he('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), mw = /* @__PURE__ */ he('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const yw = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Gr(e, t) {
  Ce(t, !0), Rt(e, yw);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), a = w(t, "children", 7), i = w(t, "allowExecute", 7, !0), s = w(t, "allowCopy", 7, !0), l = w(t, "allowDelete", 7, !0);
  let u = n().expand ? ["key"] : [];
  const { updateNodeData: c } = An(), d = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: f } = dw(), { copyNode: v } = fw();
  var m = mw(), _ = Me(m);
  {
    var x = (O) => {
      Df(O, {
        get position() {
          return ze.Top;
        },
        align: "end",
        children: (T, N) => {
          var z = hw(), D = te(z);
          {
            var W = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                children: (C, A) => {
                  var H = vw();
                  Y(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(D, (k) => {
              i() && k(W);
            });
          }
          var j = G(D, 2);
          {
            var X = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  v(r());
                },
                children: (C, A) => {
                  var H = pw();
                  Y(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(j, (k) => {
              s() && k(X);
            });
          }
          var P = G(j, 2);
          {
            var M = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  f(r());
                },
                children: (C, A) => {
                  var H = gw();
                  Y(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(P, (k) => {
              l() && k(M);
            });
          }
          ee(z), Y(T, z);
        },
        $$slots: { default: !0 }
      });
    };
    Le(_, (O) => {
      (i() || s() || l()) && O(x);
    });
  }
  var S = G(_, 2), h = G(te(S), 2), $ = te(h);
  Bf($, {
    items: d,
    activeKeys: u,
    onChange: (O, T) => {
      c(r(), { expand: T == null ? void 0 : T.includes("key") });
    }
  }), ee(h), ee(S);
  var b = G(S, 2);
  Yr(b, {
    type: "target",
    get position() {
      return ze.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var E = G(b, 2);
  return Yr(E, {
    type: "source",
    get position() {
      return ze.Right;
    },
    style: "right: -12px;top: 20px"
  }), Y(e, m), ke({
    get data() {
      return n();
    },
    set data(O) {
      n(O), y();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), y();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), y();
    },
    get children() {
      return a();
    },
    set children(O) {
      a(O), y();
    },
    get allowExecute() {
      return i();
    },
    set allowExecute(O = !0) {
      i(O), y();
    },
    get allowCopy() {
      return s();
    },
    set allowCopy(O = !0) {
      s(O), y();
    },
    get allowDelete() {
      return l();
    },
    set allowDelete(O = !0) {
      l(O), y();
    }
  });
}
be(
  Gr,
  {
    data: {},
    id: {},
    icon: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {}
  },
  [],
  [],
  !0
);
function yn() {
  return Hr("svelteflow__node_id");
}
const ev = [
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
], ww = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var bw = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), xw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), _w = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const $w = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function tv(e, t) {
  Ce(t, !0), Rt(e, $w);
  const [n, r] = _t(), o = () => le(p(l), "$node", n), a = w(t, "parameter", 7), i = w(t, "index", 7);
  let s = yn(), l = /* @__PURE__ */ Je(() => Ur(s)), u = /* @__PURE__ */ Je(() => {
    var T, N;
    return {
      ...a(),
      ...(N = (T = o()) == null ? void 0 : T.data) == null ? void 0 : N.parameters[i()]
    };
  });
  const { updateNodeData: c } = An(), d = (T) => {
    const N = T.target.value;
    c(s, (z) => {
      let D = z.data.parameters;
      return D[i()].name = N, { parameters: D };
    });
  }, f = (T) => {
    const N = T.target.checked;
    c(s, (z) => {
      let D = z.data.parameters;
      return D[i()].required = N, { parameters: D };
    });
  };
  let v;
  const m = () => {
    c(s, (T) => {
      let N = T.data.parameters;
      return N.splice(i(), 1), { parameters: [...N] };
    }), v == null || v.hide();
  };
  var _ = _w(), x = Me(_), S = te(x);
  Pn(S, {
    style: "width: 100%;",
    get value() {
      return p(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), ee(x);
  var h = G(x, 2), $ = te(h);
  Hf($, {
    get checked() {
      return p(u).required;
    },
    onchange: f
  }), ee(h);
  var b = G(h, 2), E = te(b);
  fr(
    ki(E, {
      placement: "bottom",
      floating: (T) => {
        var N = bw(), z = te(N), D = G(te(z));
        Rr(D, {
          items: ev,
          style: "width: 100%"
        }), ee(z);
        var W = G(z, 2), j = G(te(W));
        mn(j, { rows: 1, style: "width: 100%;" }), ee(W);
        var X = G(W, 2), P = G(te(X));
        mn(P, { rows: 3, style: "width: 100%;" }), ee(X);
        var M = G(X, 2), k = te(M);
        xt(k, {
          onclick: m,
          children: (C, A) => {
            ot();
            var H = bt("删除");
            Y(C, H);
          },
          $$slots: { default: !0 }
        }), ee(M), ee(N), Y(T, N);
      },
      children: (T, N) => {
        xt(T, {
          class: "input-btn-more",
          children: (z, D) => {
            var W = xw();
            Y(z, W);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => v = T,
    () => v
  ), ee(b), Y(e, _);
  var O = ke({
    get parameter() {
      return a();
    },
    set parameter(T) {
      a(T), y();
    },
    get index() {
      return i();
    },
    set index(T) {
      i(T), y();
    }
  });
  return r(), O;
}
be(tv, { parameter: {}, index: {} }, [], [], !0);
var Cw = /* @__PURE__ */ he('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), kw = /* @__PURE__ */ he('<div class="none-params svelte-3n0wca">无输入参数</div>'), Ew = /* @__PURE__ */ he('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Sw = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function nv(e, t) {
  Ce(t, !0), Rt(e, Sw);
  const [n, r] = _t(), o = () => le(p(i), "$node", n);
  let a = yn(), i = /* @__PURE__ */ Je(() => Ur(a)), s = /* @__PURE__ */ Je(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = Ew(), u = te(l);
  {
    var c = (f) => {
      var v = Cw();
      ot(4), Y(f, v);
    };
    Le(u, (f) => {
      p(s).length !== 0 && f(c);
    });
  }
  var d = G(u, 2);
  gn(
    d,
    19,
    () => p(s),
    (f) => f.id,
    (f, v, m) => {
      tv(f, {
        get parameter() {
          return p(v);
        },
        get index() {
          return p(m);
        }
      });
    },
    (f) => {
      var v = kw();
      Y(f, v);
    }
  ), ee(l), Y(e, l), ke(), r();
}
be(nv, {}, [], [], !0);
const No = () => {
  const { updateNodeData: e } = An();
  return {
    addParameter: (t, n = "parameters", r) => {
      const o = {
        ...r,
        id: fi()
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
var Pw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Ow = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ he('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Rw = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function rv(e, t) {
  Ce(t, !0), Rt(e, Rw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No();
  return Gr(e, en(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (i) => {
      var s = Pw();
      Y(i, s);
    },
    children: (i, s) => {
      var l = Tw(), u = Me(l), c = te(u);
      It(c, {
        level: 3,
        children: (v, m) => {
          ot();
          var _ = bt("输入参数");
          Y(v, _);
        },
        $$slots: { default: !0 }
      });
      var d = G(c, 2);
      xt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, m) => {
          var _ = Ow();
          Y(v, _);
        },
        $$slots: { default: !0 }
      }), ee(u);
      var f = G(u, 2);
      nv(f, {}), Y(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ke({
    get data() {
      return n();
    },
    set data(i) {
      n(i), y();
    }
  });
}
be(rv, { data: {} }, [], [], !0);
const ov = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), ov(e, r.source, n));
}, sc = (e, t) => {
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
  const t = yn(), n = Ur(t), { nodes: r, edges: o } = mt();
  return Er([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = sc(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      ov(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = sc(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Nw = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Vw = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Lw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function iv(e, t) {
  Ce(t, !0), Rt(e, Lw);
  const [n, r] = _t(), o = () => le(p(c), "$node", n), a = () => le(b, "$selectItems", n), i = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = yn(), c = /* @__PURE__ */ Je(() => Ur(u)), d = /* @__PURE__ */ Je(() => {
    var M;
    return {
      ...i(),
      ...(M = o()) == null ? void 0 : M.data[l()][s()]
    };
  });
  const { updateNodeData: f } = An(), v = (M, k) => {
    f(u, (C) => {
      let A = C.data[l()];
      return A[s()] = { ...A[s()], [M]: k }, { [l()]: A };
    });
  }, m = (M) => {
    const k = M.target.value;
    v("name", k);
  }, _ = (M) => {
    const k = M.target.value;
    v("value", k);
  }, x = (M) => {
    const k = M.value;
    v("ref", k);
  }, S = (M) => {
    const k = M.value;
    v("refType", k);
  };
  let h;
  const $ = () => {
    f(u, (M) => {
      let k = M.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, b = Mw();
  var E = Vw(), O = Me(E), T = te(O);
  Pn(T, {
    style: "width: 100%;",
    get value() {
      return p(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: m
  }), ee(O);
  var N = G(O, 2), z = te(N);
  {
    var D = (M) => {
      Pn(M, {
        get value() {
          return p(d).value;
        },
        placeholder: "请输入参数值",
        oninput: _
      });
    }, W = (M) => {
      const k = /* @__PURE__ */ Je(() => [p(d).ref]);
      Rr(M, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return p(k);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    Le(z, (M) => {
      p(d).refType === "input" ? M(D) : M(W, !1);
    });
  }
  ee(N);
  var j = G(N, 2), X = te(j);
  fr(
    ki(X, {
      placement: "bottom",
      floating: (M) => {
        var k = Nw(), C = te(k), A = G(te(C));
        const H = /* @__PURE__ */ Je(() => p(d).refType ? [p(d).refType] : []);
        Rr(A, {
          items: ww,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return p(H);
          },
          onSelect: S
        }), ee(C);
        var K = G(C, 2), R = G(te(K));
        mn(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            const ge = se.target.value;
            v("defaultValue", ge);
          }
        }), ee(K);
        var I = G(K, 2), ne = G(te(I));
        mn(ne, {
          rows: 3,
          style: "width: 100%;",
          onchange: (se) => {
            const ge = se.target.value;
            v("description", ge);
          }
        }), ee(I);
        var J = G(I, 2), Z = te(J);
        xt(Z, {
          onclick: $,
          children: (se, ge) => {
            ot();
            var ve = bt("删除");
            Y(se, ve);
          },
          $$slots: { default: !0 }
        }), ee(J), ee(k), Y(M, k);
      },
      children: (M, k) => {
        Ga(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => h = M,
    () => h
  ), ee(j), Y(e, E);
  var P = ke({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), y();
    },
    get index() {
      return s();
    },
    set index(M) {
      s(M), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), y();
    }
  });
  return r(), P;
}
be(iv, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Aw = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), zw = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), Dw = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Hw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ar(e, t) {
  Ce(t, !0), Rt(e, Hw);
  const [n, r] = _t(), o = () => le(p(l), "$node", n), a = w(t, "noneParameterText", 7, "无输入参数"), i = w(t, "dataKeyName", 7, "parameters");
  let s = yn(), l = /* @__PURE__ */ Je(() => Ur(s)), u = /* @__PURE__ */ Je(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[i()]) || []];
  });
  var c = Dw(), d = te(c);
  {
    var f = (_) => {
      var x = Aw();
      ot(4), Y(_, x);
    };
    Le(d, (_) => {
      p(u).length !== 0 && _(f);
    });
  }
  var v = G(d, 2);
  gn(
    v,
    19,
    () => p(u),
    (_) => _.id,
    (_, x, S) => {
      iv(_, {
        get parameter() {
          return p(x);
        },
        get index() {
          return p(S);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (_) => {
      var x = zw(), S = te(x, !0);
      ee(x), He(() => Un(S, a())), Y(_, x);
    }
  ), ee(c), Y(e, c);
  var m = ke({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(_ = "无输入参数") {
      a(_), y();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(_ = "parameters") {
      i(_), y();
    }
  });
  return r(), m;
}
be(ar, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Iw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Bw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ he('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Yw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function av(e, t) {
  Ce(t, !0), Rt(e, Yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No();
  return Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (i) => {
        var s = Iw();
        Y(i, s);
      },
      children: (i, s) => {
        var l = jw(), u = Me(l), c = te(u);
        It(c, {
          level: 3,
          children: (v, m) => {
            ot();
            var _ = bt("输出参数");
            Y(v, _);
          },
          $$slots: { default: !0 }
        });
        var d = G(c, 2);
        xt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, m) => {
            var _ = Bw();
            Y(v, _);
          },
          $$slots: { default: !0 }
        }), ee(u);
        var f = G(u, 2);
        ar(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), Y(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ke({
    get data() {
      return n();
    },
    set data(i) {
      n(i), y();
    }
  });
}
be(av, { data: {} }, [], [], !0);
const Zw = () => Hr("tinyflow_options");
var Ww = /* @__PURE__ */ De('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Xw = /* @__PURE__ */ he('<div class="input-more-item svelte-1cfeest"><!></div>'), Kw = /* @__PURE__ */ he('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Fw = /* @__PURE__ */ he('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const qw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sv(e, t) {
  Ce(t, !0), Rt(e, qw);
  const [n, r] = _t(), o = () => le(p(u), "$node", n), a = w(t, "parameter", 7), i = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = yn(), u = /* @__PURE__ */ Je(() => Ur(l)), c = /* @__PURE__ */ Je(() => {
    var C;
    let A = (C = o()) == null ? void 0 : C.data[s()], H;
    if (A && i().length > 0) {
      let K = A;
      for (let R = 0; R < i().length; R++) {
        const I = i()[R];
        R == i().length - 1 ? H = K[I] : K = K[I].children;
      }
    }
    return { ...a(), ...H };
  });
  const { updateNodeData: d } = An(), f = (C, A) => {
    d(l, (H) => {
      const K = H.data[s()];
      if (K && i().length > 0) {
        let R = K;
        for (let I = 0; I < i().length; I++) {
          const ne = i()[I];
          I == i().length - 1 ? R[ne] = { ...R[ne], [C]: A } : R = K[ne].children;
        }
      }
      return { [s()]: K };
    });
  }, v = (C) => {
    const A = C.target.value;
    f("name", A);
  }, m = (C) => {
    const A = C.value;
    f("dataType", A);
  };
  let _;
  const x = () => {
    d(l, (C) => {
      let A = C.data[s()];
      if (A && i().length > 0) {
        let H = A;
        for (let K = 0; K < i().length; K++) {
          const R = i()[K];
          K == i().length - 1 ? H.splice(R, 1) : H = H[R].children;
        }
      }
      return { [s()]: [...A] };
    }), _ == null || _.hide();
  }, S = () => {
    d(l, (C) => {
      let A = C.data[s()];
      if (A && i().length > 0) {
        let H = A;
        for (let K = 0; K < i().length; K++) {
          const R = i()[K];
          K == i().length - 1 ? H[R].children ? H[R].children.push({
            id: fi(),
            name: "newParam",
            dataType: "String"
          }) : H[R].children = [
            {
              id: fi(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[R].children;
        }
      }
      return { [s()]: [...A] };
    });
  };
  var h = Fw(), $ = Me(h), b = te($);
  {
    var E = (C) => {
      var A = ht(), H = Me(A);
      gn(H, 17, i, Aa, (K, R) => {
        ot();
        var I = bt(" ");
        Y(K, I);
      }), Y(C, A);
    };
    Le(b, (C) => {
      i().length > 1 && C(E);
    });
  }
  var O = G(b, 2);
  const T = /* @__PURE__ */ Je(() => p(c).nameDisabled === !0);
  Pn(O, {
    style: "width: 100%;",
    get value() {
      return p(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return p(T);
    }
  }), ee($);
  var N = G($, 2), z = te(N);
  const D = /* @__PURE__ */ Je(() => p(c).dataType ? [p(c).dataType] : []), W = /* @__PURE__ */ Je(() => p(c).dataTypeDisabled === !0);
  Rr(z, {
    items: ev,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return p(D);
    },
    get disabled() {
      return p(W);
    },
    onSelect: m
  });
  var j = G(z, 2);
  {
    var X = (C) => {
      xt(C, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: S,
        children: (A, H) => {
          var K = Ww();
          Y(A, K);
        },
        $$slots: { default: !0 }
      });
    };
    Le(j, (C) => {
      (p(c).dataType === "Object" || p(c).dataType === "Array") && C(X);
    });
  }
  ee(N);
  var P = G(N, 2), M = te(P);
  fr(
    ki(M, {
      placement: "bottom",
      floating: (C) => {
        var A = Kw(), H = te(A), K = G(te(H));
        mn(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            const se = Z.target.value;
            f("defaultValue", se);
          }
        }), ee(H);
        var R = G(H, 2), I = G(te(R));
        mn(I, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Z) => {
            const se = Z.target.value;
            f("description", se);
          }
        }), ee(R);
        var ne = G(R, 2);
        {
          var J = (Z) => {
            var se = Xw(), ge = te(se);
            xt(ge, {
              onclick: x,
              children: (ve, ue) => {
                ot();
                var ae = bt("删除");
                Y(ve, ae);
              },
              $$slots: { default: !0 }
            }), ee(se), Y(Z, se);
          };
          Le(ne, (Z) => {
            p(c).deleteDisabled !== !0 && Z(J);
          });
        }
        ee(A), Y(C, A);
      },
      children: (C, A) => {
        Ga(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => _ = C,
    () => _
  ), ee(P), Y(e, h);
  var k = ke({
    get parameter() {
      return a();
    },
    set parameter(C) {
      a(C), y();
    },
    get position() {
      return i();
    },
    set position(C) {
      i(C), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(C) {
      s(C), y();
    }
  });
  return r(), k;
}
be(sv, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Uw = /* @__PURE__ */ he("<!> <!>", 1), Gw = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), Jw = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Qw = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const eb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ei(e, t) {
  Ce(t, !0), Rt(e, eb);
  const [n, r] = _t(), o = () => le(p(u), "$node", n), a = (x, S = Zt, h = Zt) => {
    var $ = ht(), b = Me($);
    gn(
      b,
      19,
      S,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, O, T) => {
        var N = Uw(), z = Me(N);
        const D = /* @__PURE__ */ Je(() => [...h(), p(T)]);
        sv(z, {
          get parameter() {
            return p(O);
          },
          get position() {
            return p(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var W = G(z, 2);
        {
          var j = (X) => {
            var P = /* @__PURE__ */ Pe(() => [...h(), p(T)]);
            a(X, () => p(O).children, () => p(P));
          };
          Le(W, (X) => {
            p(O).children && X(j);
          });
        }
        Y(E, N);
      },
      (E) => {
        var O = ht(), T = Me(O);
        {
          var N = (z) => {
            var D = Gw(), W = te(D, !0);
            ee(D), He(() => Un(W, i())), Y(z, D);
          };
          Le(T, (z) => {
            h().length === 0 && z(N);
          });
        }
        Y(E, O);
      }
    ), Y(x, $);
  }, i = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = yn(), u = /* @__PURE__ */ Je(() => Ur(l)), c = /* @__PURE__ */ Je(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Qw(), f = te(d);
  {
    var v = (x) => {
      var S = Jw();
      ot(4), Y(x, S);
    };
    Le(f, (x) => {
      p(c).length !== 0 && x(v);
    });
  }
  var m = G(f, 2);
  a(m, () => p(c) || [], () => []), ee(d), Y(e, d);
  var _ = ke({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输出参数") {
      i(x), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), y();
    }
  });
  return r(), _;
}
be(Ei, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var tb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), nb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ib = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function lv(e, t) {
  Ce(t, !0), Rt(e, ib);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No(), i = Zw();
  let s = bs(Bn([]));
  qr(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.llms());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = An();
  return Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = tb();
        Y(u, c);
      },
      children: (u, c) => {
        var d = ob(), f = Me(d), v = te(f);
        It(v, {
          level: 3,
          children: (X, P) => {
            ot();
            var M = bt("输入参数");
            Y(X, M);
          },
          $$slots: { default: !0 }
        });
        var m = G(v, 2);
        xt(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (X, P) => {
            var M = nb();
            Y(X, M);
          },
          $$slots: { default: !0 }
        }), ee(f);
        var _ = G(f, 2);
        ar(_, {});
        var x = G(_, 2);
        It(x, {
          level: 3,
          mt: "10px",
          children: (X, P) => {
            ot();
            var M = bt("模型设置");
            Y(X, M);
          },
          $$slots: { default: !0 }
        });
        var S = G(x, 4), h = te(S);
        const $ = /* @__PURE__ */ Je(() => n().llmId ? [n().llmId] : []);
        Rr(h, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (X) => {
            const P = X.value;
            l(o, () => ({ llmId: P }));
          },
          get value() {
            return p($);
          }
        });
        var b = G(h, 2);
        Ga(b, {}), ee(S);
        var E = G(S, 4), O = te(E);
        mn(O, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), ee(E);
        var T = G(E, 4), N = te(T);
        mn(N, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), ee(T);
        var z = G(T, 2), D = te(z);
        It(D, {
          level: 3,
          mt: "10px",
          children: (X, P) => {
            ot();
            var M = bt("输出参数");
            Y(X, M);
          },
          $$slots: { default: !0 }
        });
        var W = G(D, 2);
        xt(W, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (X, P) => {
            var M = rb();
            Y(X, M);
          },
          $$slots: { default: !0 }
        }), ee(z);
        var j = G(z, 2);
        Ei(j, {}), Y(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ke({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
be(lv, { data: {} }, [], [], !0);
var ab = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), sb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ub = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const cb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uv(e, t) {
  Ce(t, !0), Rt(e, cb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No(), { updateNodeData: i } = An(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ab();
        Y(l, u);
      },
      children: (l, u) => {
        var c = ub(), d = Me(c), f = te(d);
        It(f, {
          level: 3,
          children: (D, W) => {
            ot();
            var j = bt("输入参数");
            Y(D, j);
          },
          $$slots: { default: !0 }
        });
        var v = G(f, 2);
        xt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (D, W) => {
            var j = sb();
            Y(D, j);
          },
          $$slots: { default: !0 }
        }), ee(d);
        var m = G(d, 2);
        ar(m, {});
        var _ = G(m, 2);
        It(_, {
          level: 3,
          mt: "10px",
          children: (D, W) => {
            ot();
            var j = bt("代码");
            Y(D, j);
          },
          $$slots: { default: !0 }
        });
        var x = G(_, 4), S = te(x);
        const h = /* @__PURE__ */ Je(() => n().engine ? [n().engine] : ["qlexpress"]);
        Rr(S, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const W = D.value;
            i(o, () => ({ engine: W }));
          },
          get value() {
            return p(h);
          }
        }), ee(x);
        var $ = G(x, 4), b = te($);
        const E = /* @__PURE__ */ Je(() => n().code || "");
        mn(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (D) => {
            i(o, () => ({ code: D.target.value }));
          },
          get value() {
            return p(E);
          }
        }), ee($);
        var O = G($, 2), T = te(O);
        It(T, {
          level: 3,
          mt: "10px",
          children: (D, W) => {
            ot();
            var j = bt("输出参数");
            Y(D, j);
          },
          $$slots: { default: !0 }
        });
        var N = G(T, 2);
        xt(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (D, W) => {
            var j = lb();
            Y(D, j);
          },
          $$slots: { default: !0 }
        }), ee(O);
        var z = G(O, 2);
        Ei(z, {}), Y(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ke({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
be(uv, { data: {} }, [], [], !0);
var db = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), fb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const pb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cv(e, t) {
  Ce(t, !0), Rt(e, pb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No(), { updateNodeData: i } = An();
  return sa(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = db();
        Y(s, l);
      },
      children: (s, l) => {
        var u = vb(), c = Me(u), d = te(c);
        It(d, {
          level: 3,
          children: (E, O) => {
            ot();
            var T = bt("输入参数");
            Y(E, T);
          },
          $$slots: { default: !0 }
        });
        var f = G(d, 2);
        xt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (E, O) => {
            var T = fb();
            Y(E, T);
          },
          $$slots: { default: !0 }
        }), ee(c);
        var v = G(c, 2);
        ar(v, {});
        var m = G(v, 2);
        It(m, {
          level: 3,
          mt: "10px",
          children: (E, O) => {
            ot();
            var T = bt("代码");
            Y(E, T);
          },
          $$slots: { default: !0 }
        });
        var _ = G(m, 4), x = te(_);
        const S = /* @__PURE__ */ Je(() => n().template || "");
        mn(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (E) => {
            i(o, () => ({ template: E.target.value }));
          },
          get value() {
            return p(S);
          }
        }), ee(_);
        var h = G(_, 2), $ = te(h);
        It($, {
          level: 3,
          mt: "10px",
          children: (E, O) => {
            ot();
            var T = bt("输出参数");
            Y(E, T);
          },
          $$slots: { default: !0 }
        }), ee(h);
        var b = G(h, 2);
        Ei(b, {}), Y(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ke({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
be(cv, { data: {} }, [], [], !0);
var gb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), hb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), bb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), _b = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), $b = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), Cb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kb = /* @__PURE__ */ he('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Eb = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function dv(e, t) {
  Ce(t, !0), Rt(e, Eb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Cn(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = yn(), { addParameter: a } = No(), { updateNodeData: i } = An();
  return Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = gb();
        Y(s, l);
      },
      children: (s, l) => {
        var u = kb(), c = Me(u), d = te(c), f = te(d);
        Rr(f, {
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
        }), ee(d);
        var v = G(d, 2), m = te(v);
        Pn(m, { placeholder: "请输入url", style: "width: 100%" }), ee(v), ee(c);
        var _ = G(c, 2), x = te(_);
        It(x, {
          level: 3,
          children: (q, me) => {
            ot();
            var $e = bt("Http 头信息");
            Y(q, $e);
          },
          $$slots: { default: !0 }
        });
        var S = G(x, 2);
        xt(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (q, me) => {
            var $e = hb();
            Y(q, $e);
          },
          $$slots: { default: !0 }
        }), ee(_);
        var h = G(_, 2);
        ar(h, { dataKeyName: "headers" });
        var $ = G(h, 2), b = te($);
        It(b, {
          level: 3,
          children: (q, me) => {
            ot();
            var $e = bt("参数");
            Y(q, $e);
          },
          $$slots: { default: !0 }
        });
        var E = G(b, 2);
        xt(E, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (q, me) => {
            var $e = mb();
            Y(q, $e);
          },
          $$slots: { default: !0 }
        }), ee($);
        var O = G($, 2);
        ar(O, { dataKeyName: "urlParameters" });
        var T = G(O, 2);
        It(T, {
          level: 3,
          mt: "10px",
          children: (q, me) => {
            ot();
            var $e = bt("Body");
            Y(q, $e);
          },
          $$slots: { default: !0 }
        });
        var N = G(T, 2), z = te(N), D = te(z);
        const W = /* @__PURE__ */ Je(() => !n().bodyType);
        Pn(D, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return p(W);
          },
          onchange: (q) => {
            var me;
            (me = q.target) != null && me.checked && i(o, { bodyType: "" });
          }
        }), ot(), ee(z);
        var j = G(z, 2), X = te(j);
        const P = /* @__PURE__ */ Je(() => n().bodyType === "form-data");
        Pn(X, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return p(P);
          },
          onchange: (q) => {
            var me;
            (me = q.target) != null && me.checked && i(o, { bodyType: "form-data" });
          }
        }), ot(), ee(j);
        var M = G(j, 2), k = te(M);
        const C = /* @__PURE__ */ Je(() => n().bodyType === "x-www-form-urlencoded");
        Pn(k, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return p(C);
          },
          onchange: (q) => {
            var me;
            (me = q.target) != null && me.checked && i(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), ot(), ee(M);
        var A = G(M, 2), H = te(A);
        const K = /* @__PURE__ */ Je(() => n().bodyType === "json");
        Pn(H, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return p(K);
          },
          onchange: (q) => {
            var me;
            (me = q.target) != null && me.checked && i(o, { bodyType: "json" });
          }
        }), ot(), ee(A);
        var R = G(A, 2), I = te(R);
        const ne = /* @__PURE__ */ Je(() => n().bodyType === "raw");
        Pn(I, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return p(ne);
          },
          onchange: (q) => {
            var me;
            (me = q.target) != null && me.checked && i(o, { bodyType: "raw" });
          }
        }), ot(), ee(R), ee(N);
        var J = G(N, 2);
        {
          var Z = (q) => {
            var me = wb(), $e = Me(me), Te = te($e);
            It(Te, {
              level: 3,
              children: (et, it) => {
                ot();
                var dt = bt("参数");
                Y(et, dt);
              },
              $$slots: { default: !0 }
            });
            var at = G(Te, 2);
            xt(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromData");
              },
              children: (et, it) => {
                var dt = yb();
                Y(et, dt);
              },
              $$slots: { default: !0 }
            }), ee($e);
            var Ie = G($e, 2);
            ar(Ie, { dataKeyName: "fromData" }), Y(q, me);
          };
          Le(J, (q) => {
            n().bodyType === "form-data" && q(Z);
          });
        }
        var se = G(J, 2);
        {
          var ge = (q) => {
            var me = xb(), $e = Me(me), Te = te($e);
            It(Te, {
              level: 3,
              children: (et, it) => {
                ot();
                var dt = bt("参数");
                Y(et, dt);
              },
              $$slots: { default: !0 }
            });
            var at = G(Te, 2);
            xt(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromUrlencoded");
              },
              children: (et, it) => {
                var dt = bb();
                Y(et, dt);
              },
              $$slots: { default: !0 }
            }), ee($e);
            var Ie = G($e, 2);
            ar(Ie, { dataKeyName: "fromUrlencoded" }), Y(q, me);
          };
          Le(se, (q) => {
            n().bodyType === "x-www-form-urlencoded" && q(ge);
          });
        }
        var ve = G(se, 2);
        {
          var ue = (q) => {
            var me = _b(), $e = te(me);
            mn($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Te) => {
                i(o, { bodyJson: Te.target.value });
              }
            }), ee(me), Y(q, me);
          };
          Le(ve, (q) => {
            n().bodyType === "json" && q(ue);
          });
        }
        var ae = G(ve, 2);
        {
          var ye = (q) => {
            var me = $b(), $e = te(me);
            mn($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Te) => {
                i(o, { bodyRaw: Te.target.value });
              }
            }), ee(me), Y(q, me);
          };
          Le(ae, (q) => {
            n().bodyType === "raw" && q(ye);
          });
        }
        var Xe = G(ae, 2), tt = te(Xe);
        It(tt, {
          level: 3,
          mt: "10px",
          children: (q, me) => {
            ot();
            var $e = bt("输出参数");
            Y(q, $e);
          },
          $$slots: { default: !0 }
        });
        var Ge = G(tt, 2);
        xt(Ge, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (q, me) => {
            var $e = Cb();
            Y(q, $e);
          },
          $$slots: { default: !0 }
        }), ee(Xe);
        var Qe = G(Xe, 2);
        Ei(Qe, {}), Y(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ke({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
be(dv, { data: {} }, [], [], !0);
const Sb = {
  startNode: rv,
  codeNode: uv,
  llmNode: lv,
  templateNode: cv,
  httpNode: dv,
  endNode: av
};
var Pb = /* @__PURE__ */ he("<!> ", 1);
function fv(e, t) {
  Ce(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), a = w(t, "description", 7), i = w(t, "extra", 7);
  return xt(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: a(),
          extra: i()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Pb(), c = Me(u);
      Xc(c, n);
      var d = G(c);
      He(() => Un(d, ` ${r() ?? ""}`)), Y(s, u);
    },
    $$slots: { default: !0 }
  }), ke({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), y();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), y();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), y();
    },
    get description() {
      return a();
    },
    set description(s) {
      a(s), y();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), y();
    }
  });
}
be(
  fv,
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
var Ob = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Tb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Rb = /* @__PURE__ */ he('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function vv(e) {
  let t = bs("base"), n = bs("show");
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
      type: "startNode",
      description: "startNode"
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
      type: "startNode",
      description: "startNode"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "startNode",
      description: "startNode"
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
  var a = Rb(), i = te(a), s = te(i), l = te(s);
  If(l, {
    style: "width: 100%",
    items: o,
    onChange: (m) => {
      ie(t, Bn(m.value.toString()));
    }
  }), ee(s);
  var u = G(s, 2), c = te(u);
  gn(c, 21, () => r, Aa, (m, _) => {
    fv(m, en(() => p(_)));
  }), ee(c);
  var d = G(c, 2), f = te(d);
  xt(f, {
    children: (m, _) => {
      ot();
      var x = bt("测试业务按钮");
      Y(m, x);
    },
    $$slots: { default: !0 }
  }), ee(d), ee(u), ee(i);
  var v = G(i, 2);
  xt(v, {
    onclick: () => {
      ie(n, Bn(p(n) ? "" : "show"));
    },
    children: (m, _) => {
      var x = ht(), S = Me(x);
      {
        var h = (b) => {
          var E = Ob();
          Y(b, E);
        }, $ = (b) => {
          var E = Tb();
          Y(b, E);
        };
        Le(S, (b) => {
          p(n) === "show" ? b(h) : b($, !1);
        });
      }
      Y(m, x);
    },
    $$slots: { default: !0 }
  }), ee(a), He(() => {
    yo(a, `tf-toolbar ${p(n) ?? ""}`), xe(c, "style", `display: ${(p(t) === "base" ? "flex" : "none") ?? ""}`), xe(d, "style", `display: ${(p(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), Y(e, a);
}
be(vv, {}, [], [], !0);
var Mb = /* @__PURE__ */ he("<!> <!> <!>", 1), Nb = /* @__PURE__ */ he('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function pv(e, t) {
  Ce(t, !0);
  const n = w(t, "onInit", 7), r = An();
  n()(r);
  const o = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, a = (c) => {
    var d;
    c.preventDefault();
    const f = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), v = (d = c.dataTransfer) == null ? void 0 : d.getData("application/tinyflow"), m = v ? JSON.parse(v) : {}, _ = {
      id: `node_${fi()}`,
      position: f,
      data: {},
      ...m
    };
    Ji.addNode(_), Ji.selectNodeOnly(_.id);
  };
  var i = Nb(), s = te(i);
  vv(s);
  var l = G(s, 2);
  const u = /* @__PURE__ */ Je(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: si.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return kf(l, en({ nodeTypes: Sb }, Ji, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return p(u);
    },
    $$events: { drop: a, dragover: o },
    children: (c, d) => {
      var f = Mb(), v = Me(f);
      Lf(v, {});
      var m = G(v, 2);
      Mf(m, {});
      var _ = G(m, 2);
      zf(_, {}), Y(c, f);
    },
    $$slots: { default: !0 }
  })), ee(i), Y(e, i), ke({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), y();
    }
  });
}
be(pv, { onInit: {} }, [], [], !0);
function Vb(e, t) {
  Ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return Ji.init(o.nodes || [], o.edges || []), ho("tinyflow_options", n()), Ef(e, {
    fitView: !0,
    children: (a, i) => {
      pv(a, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ke({
    get options() {
      return n();
    },
    set options(a) {
      n(a), y();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), y();
    }
  });
}
customElements.define("tinyflow-component", be(Vb, { options: {}, onInit: {} }, [], [], !1));
Bo.forwardRef(({ data: e, style: t, className: n }, r) => {
  const o = Bo.useRef(null), a = Bo.useRef(null);
  return Bo.useImperativeHandle(r, () => ({
    getData: () => a.current ? a.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  })), Bo.useEffect(() => {
    if (o.current) {
      const i = new r2({
        element: o.current,
        data: e
      });
      return a.current = i, () => {
        i.destroy(), a.current = null;
      };
    }
  }, [e]), /* @__PURE__ */ Bv.jsx("div", { ref: o, style: { height: "600px", ...t }, className: n });
});
//# sourceMappingURL=index.js.map
