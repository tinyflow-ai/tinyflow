var Vi = { exports: {} }, Ho = {}, Li = { exports: {} }, Fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ql;
function Vv() {
  if (ql) return Fe;
  ql = 1;
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
  function E() {
  }
  E.prototype = x.prototype;
  function h(R, I, ne) {
    this.props = R, this.context = I, this.refs = _, this.updater = ne || v;
  }
  var $ = h.prototype = new E();
  $.constructor = h, m($, x.prototype), $.isPureReactComponent = !0;
  var b = Array.isArray, S = Object.prototype.hasOwnProperty, O = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(R, I, ne) {
    var J, Z = {}, se = null, ge = null;
    if (I != null) for (J in I.ref !== void 0 && (ge = I.ref), I.key !== void 0 && (se = "" + I.key), I) S.call(I, J) && !T.hasOwnProperty(J) && (Z[J] = I[J]);
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
  var Y = /\/+/g;
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
    if (ge) return ge = R, Z = Z(ge), R = J === "" ? "." + X(ge, 0) : J, b(Z) ? (ne = "", R != null && (ne = R.replace(Y, "$&/") + "/"), P(Z, I, ne, "", function(ae) {
      return ae;
    })) : Z != null && (D(Z) && (Z = z(Z, ne + (!Z.key || ge && ge.key === Z.key ? "" : ("" + Z.key).replace(Y, "$&/") + "/") + R)), I.push(Z)), 1;
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
      for (ue in I) S.call(I, ue) && !T.hasOwnProperty(ue) && (J[ue] = I[ue] === void 0 && ve !== void 0 ? ve[ue] : I[ue]);
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
var Zo = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zo.exports;
var Ul;
function Lv() {
  return Ul || (Ul = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), x = Symbol.iterator, E = "@@iterator";
      function h(g) {
        if (g === null || typeof g != "object")
          return null;
        var V = x && g[x] || g[E];
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
      }, S = {
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
      var D = !1, W = !1, Y = !1, X = !1, P = !1, M = {
        ReactCurrentDispatcher: $,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: O
      };
      M.ReactDebugCurrentFrame = T, M.ReactCurrentActQueue = S;
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
          var Ve = F.map(function(Ee) {
            return String(Ee);
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
              var de = g, Ve = de._payload, Ee = de._init;
              try {
                return at(Ee(Ve));
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
      }, it, dt, Et;
      Et = {};
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
          Et[V] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V, g.ref), Et[V] = !0);
        }
      }
      var Ne = function(g, V, F, U, de, Ve, Ee) {
        var je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: g,
          key: V,
          ref: F,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: Ve
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
          value: U
        }), Object.defineProperty(je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
      };
      function $t(g, V, F) {
        var U, de = {}, Ve = null, Ee = null, je = null, nt = null;
        if (V != null) {
          ce(V) && (Ee = V.ref, Xt(V)), Be(V) && (me(V.key), Ve = "" + V.key), je = V.__self === void 0 ? null : V.__self, nt = V.__source === void 0 ? null : V.__source;
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
        if (Ve || Ee) {
          var Vt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Ve && pe(de, Vt), Ee && rn(de, Vt);
        }
        return Ne(g, Ve, Ee, je, nt, O.current, de);
      }
      function Re(g, V) {
        var F = Ne(g.type, V, g.ref, g._self, g._source, g._owner, g.props);
        return F;
      }
      function We(g, V, F) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var U, de = I({}, g.props), Ve = g.key, Ee = g.ref, je = g._self, nt = g._source, ft = g._owner;
        if (V != null) {
          ce(V) && (Ee = V.ref, ft = O.current), Be(V) && (me(V.key), Ve = "" + V.key);
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
        return Ne(g.type, Ve, Ee, je, nt, ft, de);
      }
      function lt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === r;
      }
      var Bt = ".", zn = ":";
      function Cn(g) {
        var V = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, U = g.replace(V, function(de) {
          return F[de];
        });
        return "$" + U;
      }
      var At = !1, Pt = /\/+/g;
      function Yt(g) {
        return g.replace(Pt, "$&/");
      }
      function zt(g, V) {
        return typeof g == "object" && g !== null && g.key != null ? (me(g.key), Cn("" + g.key)) : V.toString(36);
      }
      function yt(g, V, F, U, de) {
        var Ve = typeof g;
        (Ve === "undefined" || Ve === "boolean") && (g = null);
        var Ee = !1;
        if (g === null)
          Ee = !0;
        else
          switch (Ve) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case r:
                case o:
                  Ee = !0;
              }
          }
        if (Ee) {
          var je = g, nt = de(je), ft = U === "" ? Bt + zt(je, 0) : U;
          if (tt(nt)) {
            var Ct = "";
            ft != null && (Ct = Yt(ft) + "/"), yt(nt, V, Ct, "", function(Nv) {
              return Nv;
            });
          } else nt != null && (lt(nt) && (nt.key && (!je || je.key !== nt.key) && me(nt.key), nt = Re(
            nt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (nt.key && (!je || je.key !== nt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Yt("" + nt.key) + "/"
            ) : "") + ft
          )), V.push(nt));
          return 1;
        }
        var kt, Ot, Vt = 0, jt = U === "" ? Bt : U + zn;
        if (tt(g))
          for (var Ni = 0; Ni < g.length; Ni++)
            kt = g[Ni], Ot = jt + zt(kt, Ni), Vt += yt(kt, V, F, Ot, de);
        else {
          var as = h(g);
          if (typeof as == "function") {
            var Xl = g;
            as === Xl.entries && (At || k("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var Rv = as.call(Xl), Kl, Mv = 0; !(Kl = Rv.next()).done; )
              kt = Kl.value, Ot = jt + zt(kt, Mv++), Vt += yt(kt, V, F, Ot, de);
          } else if (Ve === "object") {
            var Fl = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (Fl === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : Fl) + "). If you meant to render a collection of children, use an array instead.");
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
      function yn(g) {
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
              set: function(Ee) {
                V.Provider = Ee;
              }
            },
            _currentValue: {
              get: function() {
                return V._currentValue;
              },
              set: function(Ee) {
                V._currentValue = Ee;
              }
            },
            _currentValue2: {
              get: function() {
                return V._currentValue2;
              },
              set: function(Ee) {
                V._currentValue2 = Ee;
              }
            },
            _threadCount: {
              get: function() {
                return V._threadCount;
              },
              set: function(Ee) {
                V._threadCount = Ee;
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
              set: function(Ee) {
                de || (k("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ee), de = !0);
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
              var Ee = g;
              Ee._status = Vr, Ee._result = Ve;
            }
          }, function(Ve) {
            if (g._status === yr || g._status === tr) {
              var Ee = g;
              Ee._status = Vo, Ee._result = Ve;
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
        return !!(typeof g == "string" || typeof g == "function" || g === a || g === s || P || g === i || g === d || g === f || X || g === _ || D || W || Y || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === v || g.$$typeof === l || g.$$typeof === u || g.$$typeof === c || // This needs to include all possible module reference object
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
      function Se() {
        var g = $.current;
        return g === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function B(g) {
        var V = Se();
        if (g._context !== void 0) {
          var F = g._context;
          F.Consumer === g ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === g && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return V.useContext(g);
      }
      function ut(g) {
        var V = Se();
        return V.useState(g);
      }
      function Ke(g, V, F) {
        var U = Se();
        return U.useReducer(g, V, F);
      }
      function Ye(g) {
        var V = Se();
        return V.useRef(g);
      }
      function Ht(g, V) {
        var F = Se();
        return F.useEffect(g, V);
      }
      function pt(g, V) {
        var F = Se();
        return F.useInsertionEffect(g, V);
      }
      function wt(g, V) {
        var F = Se();
        return F.useLayoutEffect(g, V);
      }
      function Kt(g, V) {
        var F = Se();
        return F.useCallback(g, V);
      }
      function Hn(g, V) {
        var F = Se();
        return F.useMemo(g, V);
      }
      function In(g, V, F) {
        var U = Se();
        return U.useImperativeHandle(g, V, F);
      }
      function Dt(g, V) {
        {
          var F = Se();
          return F.useDebugValue(g, V);
        }
      }
      function wr() {
        var g = Se();
        return g.useTransition();
      }
      function Jr(g) {
        var V = Se();
        return V.useDeferredValue(g);
      }
      function Qr() {
        var g = Se();
        return g.useId();
      }
      function Ga(g, V, F) {
        var U = Se();
        return U.useSyncExternalStore(g, V, F);
      }
      var Ze = 0, Ja, Do, Si, Pl, Ol, Tl, Rl;
      function Ml() {
      }
      Ml.__reactDisabledLog = !0;
      function vv() {
        {
          if (Ze === 0) {
            Ja = console.log, Do = console.info, Si = console.warn, Pl = console.error, Ol = console.group, Tl = console.groupCollapsed, Rl = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: Ml,
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
      function pv() {
        {
          if (Ze--, Ze === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, g, {
                value: Ja
              }),
              info: I({}, g, {
                value: Do
              }),
              warn: I({}, g, {
                value: Si
              }),
              error: I({}, g, {
                value: Pl
              }),
              group: I({}, g, {
                value: Ol
              }),
              groupCollapsed: I({}, g, {
                value: Tl
              }),
              groupEnd: I({}, g, {
                value: Rl
              })
            });
          }
          Ze < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qa = M.ReactCurrentDispatcher, es;
      function Ei(g, V, F) {
        {
          if (es === void 0)
            try {
              throw Error();
            } catch (de) {
              var U = de.stack.trim().match(/\n( *(at )?)/);
              es = U && U[1] || "";
            }
          return `
` + es + g;
        }
      }
      var ts = !1, Pi;
      {
        var gv = typeof WeakMap == "function" ? WeakMap : Map;
        Pi = new gv();
      }
      function Nl(g, V) {
        if (!g || ts)
          return "";
        {
          var F = Pi.get(g);
          if (F !== void 0)
            return F;
        }
        var U;
        ts = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ve;
        Ve = Qa.current, Qa.current = null, vv();
        try {
          if (V) {
            var Ee = function() {
              throw Error();
            };
            if (Object.defineProperty(Ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ee, []);
              } catch (jt) {
                U = jt;
              }
              Reflect.construct(g, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (jt) {
                U = jt;
              }
              g.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (jt) {
              U = jt;
            }
            g();
          }
        } catch (jt) {
          if (jt && U && typeof jt.stack == "string") {
            for (var je = jt.stack.split(`
`), nt = U.stack.split(`
`), ft = je.length - 1, Ct = nt.length - 1; ft >= 1 && Ct >= 0 && je[ft] !== nt[Ct]; )
              Ct--;
            for (; ft >= 1 && Ct >= 0; ft--, Ct--)
              if (je[ft] !== nt[Ct]) {
                if (ft !== 1 || Ct !== 1)
                  do
                    if (ft--, Ct--, Ct < 0 || je[ft] !== nt[Ct]) {
                      var kt = `
` + je[ft].replace(" at new ", " at ");
                      return g.displayName && kt.includes("<anonymous>") && (kt = kt.replace("<anonymous>", g.displayName)), typeof g == "function" && Pi.set(g, kt), kt;
                    }
                  while (ft >= 1 && Ct >= 0);
                break;
              }
          }
        } finally {
          ts = !1, Qa.current = Ve, pv(), Error.prepareStackTrace = de;
        }
        var Ot = g ? g.displayName || g.name : "", Vt = Ot ? Ei(Ot) : "";
        return typeof g == "function" && Pi.set(g, Vt), Vt;
      }
      function hv(g, V, F) {
        return Nl(g, !1);
      }
      function mv(g) {
        var V = g.prototype;
        return !!(V && V.isReactComponent);
      }
      function Oi(g, V, F) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return Nl(g, mv(g));
        if (typeof g == "string")
          return Ei(g);
        switch (g) {
          case d:
            return Ei("Suspense");
          case f:
            return Ei("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case c:
              return hv(g.render);
            case v:
              return Oi(g.type, V, F);
            case m: {
              var U = g, de = U._payload, Ve = U._init;
              try {
                return Oi(Ve(de), V, F);
              } catch {
              }
            }
          }
        return "";
      }
      var Vl = {}, Ll = M.ReactDebugCurrentFrame;
      function Ti(g) {
        if (g) {
          var V = g._owner, F = Oi(g.type, g._source, V ? V.type : null);
          Ll.setExtraStackFrame(F);
        } else
          Ll.setExtraStackFrame(null);
      }
      function yv(g, V, F, U, de) {
        {
          var Ve = Function.call.bind(Ie);
          for (var Ee in g)
            if (Ve(g, Ee)) {
              var je = void 0;
              try {
                if (typeof g[Ee] != "function") {
                  var nt = Error((U || "React class") + ": " + F + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw nt.name = "Invariant Violation", nt;
                }
                je = g[Ee](V, Ee, U, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ft) {
                je = ft;
              }
              je && !(je instanceof Error) && (Ti(de), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", F, Ee, typeof je), Ti(null)), je instanceof Error && !(je.message in Vl) && (Vl[je.message] = !0, Ti(de), C("Failed %s type: %s", F, je.message), Ti(null));
            }
        }
      }
      function eo(g) {
        if (g) {
          var V = g._owner, F = Oi(g.type, g._source, V ? V.type : null);
          z(F);
        } else
          z(null);
      }
      var ns;
      ns = !1;
      function Al() {
        if (O.current) {
          var g = at(O.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function wv(g) {
        if (g !== void 0) {
          var V = g.fileName.replace(/^.*[\\\/]/, ""), F = g.lineNumber;
          return `

Check your code at ` + V + ":" + F + ".";
        }
        return "";
      }
      function bv(g) {
        return g != null ? wv(g.__source) : "";
      }
      var zl = {};
      function xv(g) {
        var V = Al();
        if (!V) {
          var F = typeof g == "string" ? g : g.displayName || g.name;
          F && (V = `

Check the top-level render call using <` + F + ">.");
        }
        return V;
      }
      function Dl(g, V) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var F = xv(V);
          if (!zl[F]) {
            zl[F] = !0;
            var U = "";
            g && g._owner && g._owner !== O.current && (U = " It was passed a child from " + at(g._owner.type) + "."), eo(g), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, U), eo(null);
          }
        }
      }
      function Hl(g, V) {
        if (typeof g == "object") {
          if (tt(g))
            for (var F = 0; F < g.length; F++) {
              var U = g[F];
              lt(U) && Dl(U, V);
            }
          else if (lt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var de = h(g);
            if (typeof de == "function" && de !== g.entries)
              for (var Ve = de.call(g), Ee; !(Ee = Ve.next()).done; )
                lt(Ee.value) && Dl(Ee.value, V);
          }
        }
      }
      function Il(g) {
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
            yv(F, g.props, "prop", U, g);
          } else if (V.PropTypes !== void 0 && !ns) {
            ns = !0;
            var de = at(V);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function _v(g) {
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
      function Bl(g, V, F) {
        var U = re(g);
        if (!U) {
          var de = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = bv(V);
          Ve ? de += Ve : de += Al();
          var Ee;
          g === null ? Ee = "null" : tt(g) ? Ee = "array" : g !== void 0 && g.$$typeof === r ? (Ee = "<" + (at(g.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, de);
        }
        var je = $t.apply(this, arguments);
        if (je == null)
          return je;
        if (U)
          for (var nt = 2; nt < arguments.length; nt++)
            Hl(arguments[nt], g);
        return g === a ? _v(je) : Il(je), je;
      }
      var Yl = !1;
      function $v(g) {
        var V = Bl.bind(null, g);
        return V.type = g, Yl || (Yl = !0, k("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function() {
            return k("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), V;
      }
      function Cv(g, V, F) {
        for (var U = We.apply(this, arguments), de = 2; de < arguments.length; de++)
          Hl(arguments[de], U.type);
        return Il(U), U;
      }
      function kv(g, V) {
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
      var jl = !1, Ri = null;
      function Sv(g) {
        if (Ri === null)
          try {
            var V = ("require" + Math.random()).slice(0, 7), F = e && e[V];
            Ri = F.call(e, "timers").setImmediate;
          } catch {
            Ri = function(de) {
              jl === !1 && (jl = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ve = new MessageChannel();
              Ve.port1.onmessage = de, Ve.port2.postMessage(void 0);
            };
          }
        return Ri(g);
      }
      var to = 0, Zl = !1;
      function Wl(g) {
        {
          var V = to;
          to++, S.current === null && (S.current = []);
          var F = S.isBatchingLegacy, U;
          try {
            if (S.isBatchingLegacy = !0, U = g(), !F && S.didScheduleLegacyUpdate) {
              var de = S.current;
              de !== null && (S.didScheduleLegacyUpdate = !1, is(de));
            }
          } catch (Ot) {
            throw Mi(V), Ot;
          } finally {
            S.isBatchingLegacy = F;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var Ve = U, Ee = !1, je = {
              then: function(Ot, Vt) {
                Ee = !0, Ve.then(function(jt) {
                  Mi(V), to === 0 ? rs(jt, Ot, Vt) : Ot(jt);
                }, function(jt) {
                  Mi(V), Vt(jt);
                });
              }
            };
            return !Zl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (Zl = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), je;
          } else {
            var nt = U;
            if (Mi(V), to === 0) {
              var ft = S.current;
              ft !== null && (is(ft), S.current = null);
              var Ct = {
                then: function(Ot, Vt) {
                  S.current === null ? (S.current = [], rs(nt, Ot, Vt)) : Ot(nt);
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
      function Mi(g) {
        g !== to - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), to = g;
      }
      function rs(g, V, F) {
        {
          var U = S.current;
          if (U !== null)
            try {
              is(U), Sv(function() {
                U.length === 0 ? (S.current = null, V(g)) : rs(g, V, F);
              });
            } catch (de) {
              F(de);
            }
          else
            V(g);
        }
      }
      var os = !1;
      function is(g) {
        if (!os) {
          os = !0;
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
            os = !1;
          }
        }
      }
      var Ev = Bl, Pv = Cv, Ov = $v, Tv = {
        map: Dn,
        forEach: Gt,
        count: yn,
        toArray: Qn,
        only: er
      };
      t.Children = Tv, t.Component = J, t.Fragment = a, t.Profiler = s, t.PureComponent = ue, t.StrictMode = i, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.act = Wl, t.cloneElement = Pv, t.createContext = mr, t.createElement = Ev, t.createFactory = Ov, t.createRef = ye, t.forwardRef = zo, t.isValidElement = lt, t.lazy = Ao, t.memo = we, t.startTransition = kv, t.unstable_act = Wl, t.useCallback = Kt, t.useContext = B, t.useDebugValue = Dt, t.useDeferredValue = Jr, t.useEffect = Ht, t.useId = Qr, t.useImperativeHandle = In, t.useInsertionEffect = pt, t.useLayoutEffect = wt, t.useMemo = Hn, t.useReducer = Ke, t.useRef = Ye, t.useState = ut, t.useSyncExternalStore = Ga, t.useTransition = wr, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zo, Zo.exports)), Zo.exports;
}
var Gl;
function Zs() {
  return Gl || (Gl = 1, process.env.NODE_ENV === "production" ? Li.exports = Vv() : Li.exports = Lv()), Li.exports;
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
var Jl;
function Av() {
  if (Jl) return Ho;
  Jl = 1;
  var e = Zs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Ql;
function zv() {
  return Ql || (Ql = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Zs(), t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, _ = "@@iterator";
    function x(L) {
      if (L === null || typeof L != "object")
        return null;
      var re = m && L[m] || L[_];
      return typeof re == "function" ? re : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(L) {
      {
        for (var re = arguments.length, we = new Array(re > 1 ? re - 1 : 0), Se = 1; Se < re; Se++)
          we[Se - 1] = arguments[Se];
        $("error", L, we);
      }
    }
    function $(L, re, we) {
      {
        var Se = E.ReactDebugCurrentFrame, B = Se.getStackAddendum();
        B !== "" && (re += "%s", we = we.concat([B]));
        var ut = we.map(function(Ke) {
          return String(Ke);
        });
        ut.unshift("Warning: " + re), Function.prototype.apply.call(console[L], console, ut);
      }
    }
    var b = !1, S = !1, O = !1, T = !1, N = !1, z;
    z = Symbol.for("react.module.reference");
    function D(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === a || N || L === o || L === u || L === c || T || L === v || b || S || O || typeof L == "object" && L !== null && (L.$$typeof === f || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === z || L.getModuleId !== void 0));
    }
    function W(L, re, we) {
      var Se = L.displayName;
      if (Se)
        return Se;
      var B = re.displayName || re.name || "";
      return B !== "" ? we + "(" + B + ")" : we;
    }
    function Y(L) {
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
            return Y(re) + ".Consumer";
          case i:
            var we = L;
            return Y(we._context) + ".Provider";
          case l:
            return W(L, L.render, "ForwardRef");
          case d:
            var Se = L.displayName || null;
            return Se !== null ? Se : X(L.type) || "Memo";
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
    var se = E.ReactCurrentDispatcher, ge;
    function ve(L, re, we) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (B) {
            var Se = B.stack.trim().match(/\n( *(at )?)/);
            ge = Se && Se[1] || "";
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
      var Se;
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
              Se = Dt;
            }
            Reflect.construct(L, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Dt) {
              Se = Dt;
            }
            L.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            Se = Dt;
          }
          L();
        }
      } catch (Dt) {
        if (Dt && Se && typeof Dt.stack == "string") {
          for (var Ye = Dt.stack.split(`
`), Ht = Se.stack.split(`
`), pt = Ye.length - 1, wt = Ht.length - 1; pt >= 1 && wt >= 0 && Ye[pt] !== Ht[wt]; )
            wt--;
          for (; pt >= 1 && wt >= 0; pt--, wt--)
            if (Ye[pt] !== Ht[wt]) {
              if (pt !== 1 || wt !== 1)
                do
                  if (pt--, wt--, wt < 0 || Ye[pt] !== Ht[wt]) {
                    var Kt = `
` + Ye[pt].replace(" at new ", " at ");
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
            var Se = L, B = Se._payload, ut = Se._init;
            try {
              return Qe(ut(B), re, we);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, me = {}, $e = E.ReactDebugCurrentFrame;
    function Te(L) {
      if (L) {
        var re = L._owner, we = Qe(L.type, L._source, re ? re.type : null);
        $e.setExtraStackFrame(we);
      } else
        $e.setExtraStackFrame(null);
    }
    function at(L, re, we, Se, B) {
      {
        var ut = Function.call.bind(q);
        for (var Ke in L)
          if (ut(L, Ke)) {
            var Ye = void 0;
            try {
              if (typeof L[Ke] != "function") {
                var Ht = Error((Se || "React class") + ": " + we + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ht.name = "Invariant Violation", Ht;
              }
              Ye = L[Ke](re, Ke, Se, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ye = pt;
            }
            Ye && !(Ye instanceof Error) && (Te(B), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", we, Ke, typeof Ye), Te(null)), Ye instanceof Error && !(Ye.message in me) && (me[Ye.message] = !0, Te(B), h("Failed %s type: %s", we, Ye.message), Te(null));
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
        return Et(L), !1;
      } catch {
        return !0;
      }
    }
    function Et(L) {
      return "" + L;
    }
    function ce(L) {
      if (dt(L))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(L)), Et(L);
    }
    var Be = E.ReactCurrentOwner, pe = {
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
    var Bt = function(L, re, we, Se, B, ut, Ke) {
      var Ye = {
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
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function zn(L, re, we, Se, B) {
      {
        var ut, Ke = {}, Ye = null, Ht = null;
        we !== void 0 && (ce(we), Ye = "" + we), $t(re) && (ce(re.key), Ye = "" + re.key), Ne(re) && (Ht = re.ref, Re(re, B));
        for (ut in re)
          q.call(re, ut) && !pe.hasOwnProperty(ut) && (Ke[ut] = re[ut]);
        if (L && L.defaultProps) {
          var pt = L.defaultProps;
          for (ut in pt)
            Ke[ut] === void 0 && (Ke[ut] = pt[ut]);
        }
        if (Ye || Ht) {
          var wt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ye && We(Ke, wt), Ht && lt(Ke, wt);
        }
        return Bt(L, Ye, Ht, B, Se, Be.current, Ke);
      }
    }
    var Cn = E.ReactCurrentOwner, At = E.ReactDebugCurrentFrame;
    function Pt(L) {
      if (L) {
        var re = L._owner, we = Qe(L.type, L._source, re ? re.type : null);
        At.setExtraStackFrame(we);
      } else
        At.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function zt(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function yt() {
      {
        if (Cn.current) {
          var L = X(Cn.current.type);
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
    var yn = {};
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
        if (yn[we])
          return;
        yn[we] = !0;
        var Se = "";
        L && L._owner && L._owner !== Cn.current && (Se = " It was passed a child from " + X(L._owner.type) + "."), Pt(L), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Se), Pt(null);
      }
    }
    function er(L, re) {
      {
        if (typeof L != "object")
          return;
        if (et(L))
          for (var we = 0; we < L.length; we++) {
            var Se = L[we];
            zt(Se) && Qn(Se, re);
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
          var Se = X(re);
          at(we, L.props, "prop", Se, L);
        } else if (re.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var B = X(re);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(L) {
      {
        for (var re = Object.keys(L.props), we = 0; we < re.length; we++) {
          var Se = re[we];
          if (Se !== "children" && Se !== "key") {
            Pt(L), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Pt(null);
            break;
          }
        }
        L.ref !== null && (Pt(L), h("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var yr = {};
    function Vr(L, re, we, Se, B, ut) {
      {
        var Ke = D(L);
        if (!Ke) {
          var Ye = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ht = Dn();
          Ht ? Ye += Ht : Ye += yt();
          var pt;
          L === null ? pt = "null" : et(L) ? pt = "array" : L !== void 0 && L.$$typeof === t ? (pt = "<" + (X(L.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof L, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ye);
        }
        var wt = zn(L, re, we, B, ut);
        if (wt == null)
          return wt;
        if (Ke) {
          var Kt = re.children;
          if (Kt !== void 0)
            if (Se)
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
var eu;
function Dv() {
  return eu || (eu = 1, process.env.NODE_ENV === "production" ? Vi.exports = Av() : Vi.exports = zv()), Vi.exports;
}
Dv();
Zs();
var Hv = Object.defineProperty, ac = (e) => {
  throw TypeError(e);
}, Iv = (e, t, n) => t in e ? Hv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kn = (e, t, n) => Iv(e, typeof t != "symbol" ? t + "" : t, n), Ws = (e, t, n) => t.has(e) || ac("Cannot " + n), Nt = (e, t, n) => (Ws(e, t, "read from private field"), n ? n.call(e) : t.get(e)), oo = (e, t, n) => t.has(e) ? ac("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ji = (e, t, n, r) => (Ws(e, t, "write to private field"), t.set(e, n), n), Bv = (e, t, n) => (Ws(e, t, "access private method"), n);
const Yv = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yv);
let So = !1, jv = !1;
function Zv() {
  So = !0;
}
Zv();
const Xs = 1, Ks = 2, sc = 4, Wv = 8, Xv = 16, Kv = 1, Fv = 2, lc = 4, qv = 8, Uv = 16, uc = 1, Gv = 2, cc = "[", Fs = "[!", qs = "]", ao = {}, on = Symbol(), dc = "http://www.w3.org/2000/svg", Jv = !1, Tn = 2, fc = 4, Sa = 8, Us = 16, pr = 32, Eo = 64, Qi = 128, xn = 256, ea = 512, Ut = 1024, gr = 2048, Wr = 4096, sr = 8192, Ea = 16384, Qv = 32768, Po = 65536, ep = 1 << 17, tp = 1 << 19, vc = 1 << 20, kr = Symbol("$state"), Gs = Symbol("legacy props"), np = Symbol("");
var fi = Array.isArray, rp = Array.prototype.indexOf, Js = Array.from, ta = Object.keys, Uo = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, pc = Object.getOwnPropertyDescriptors, op = Object.prototype, ip = Array.prototype, Qs = Object.getPrototypeOf;
function Bo(e) {
  return typeof e == "function";
}
const Zt = () => {
};
function ap(e) {
  return e();
}
function Go(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const sp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let na = !1, ra = !1, ms = [], ys = [];
function gc() {
  na = !1;
  const e = ms.slice();
  ms = [], Go(e);
}
function hc() {
  ra = !1;
  const e = ys.slice();
  ys = [], Go(e);
}
function vi(e) {
  na || (na = !0, queueMicrotask(gc)), ms.push(e);
}
function lp(e) {
  ra || (ra = !0, sp(hc)), ys.push(e);
}
function up() {
  na && gc(), ra && hc();
}
function mc(e) {
  return e === this.v;
}
function el(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function tl(e) {
  return !el(e, this.v);
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
function sn(e, t) {
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
function ws(e) {
  return /* @__PURE__ */ yc(sn(e));
}
// @__NO_SIDE_EFFECTS__
function pi(e, t = !1) {
  var n;
  const r = sn(e);
  return t || (r.equals = tl), So && st !== null && st.l !== null && ((n = st.l).s ?? (n.s = [])).push(r), r;
}
function fe(e, t = !1) {
  return /* @__PURE__ */ yc(/* @__PURE__ */ pi(e, t));
}
// @__NO_SIDE_EFFECTS__
function yc(e) {
  return vt !== null && !Yn && vt.f & Tn && (jn === null ? $p([e]) : jn.push(e)), e;
}
function ie(e, t) {
  return vt !== null && !Yn && Na() && vt.f & (Tn | Us) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (jn === null || !jn.includes(e)) && wp(), bs(e, t);
}
function bs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ec(), wc(e, gr), Na() && ct !== null && ct.f & Ut && !(ct.f & (pr | Eo)) && (rr === null ? Cp([e]) : rr.push(e))), t;
}
function tu(e, t = 1) {
  var n = p(e), r = t === 1 ? n++ : n--;
  return ie(e, n), r;
}
function wc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Na(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & gr || !r && i === ct || (Rn(i, t), s & (Ut | xn) && (s & Tn ? wc(
        /** @type {Derived} */
        i,
        Wr
      ) : Ra(
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
  return ct === null || n !== null && n.f & xn ? t |= xn : ct.f |= vc, {
    ctx: st,
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
  const t = /* @__PURE__ */ Je(e);
  return t.equals = tl, t;
}
function bc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _n(
        /** @type {Effect} */
        t[n]
      );
  }
}
function bp(e) {
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
function xp(e) {
  var t, n = ct;
  Tr(bp(e));
  try {
    bc(e), t = Oc(e);
  } finally {
    Tr(n);
  }
  return t;
}
function xc(e) {
  var t = xp(e), n = ($r || e.f & xn) && e.deps !== null ? Wr : Ut;
  Rn(e, n), e.equals(t) || (e.v = t, e.wv = Ec());
}
function Pa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ae = !1;
function fn(e) {
  Ae = e;
}
let Ue;
function tn(e) {
  if (e === null)
    throw Pa(), ao;
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
      throw Pa(), ao;
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
function xs() {
  for (var e = 0, t = Ue; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === qs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === cc || n === Fs) && (e += 1);
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
  const r = Qs(e);
  if (r !== op && r !== ip)
    return e;
  var o = /* @__PURE__ */ new Map(), a = fi(e), i = sn(0);
  a && o.set("length", sn(
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
        return d === void 0 ? (d = sn(c.value), o.set(u, d)) : ie(d, Bn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, sn(on));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && ie(d, f);
          }
          ie(c, on), nu(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === kr)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = lr(l, u)) != null && d.writable) && (f = sn(Bn(v ? l[u] : on, s)), o.set(u, f)), f !== void 0) {
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
          d === void 0 && (d = sn(f ? Bn(l[u], s) : on), o.set(u, d));
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
            x !== void 0 ? ie(x, on) : _ in l && (x = sn(on), o.set(_ + "", x));
          }
        v === void 0 ? (!m || (f = lr(l, u)) != null && f.writable) && (v = sn(void 0), ie(v, Bn(c, s)), o.set(u, v)) : (m = v.v !== on, ie(v, Bn(c, s)));
        var E = Reflect.getOwnPropertyDescriptor(l, u);
        if (E != null && E.set && E.set.call(d, c), !m) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= h.v && ie(h, $ + 1);
          }
          nu(i);
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
        mp();
      }
    }
  );
}
function nu(e, t = 1) {
  ie(e, e.v + t);
}
var an, _c, $c, Cc;
function _s() {
  if (an === void 0) {
    an = window, _c = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    $c = lr(t, "firstChild").get, Cc = lr(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function cr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return $c.call(e);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return Cc.call(e);
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
function nl(e) {
  e.textContent = "";
}
const kc = 0, _p = 1;
let ji = !1, Zi = kc, Jo = !1, Qo = null, so = !1, rl = !1;
function ru(e) {
  so = e;
}
function ou(e) {
  rl = e;
}
let Ar = [], lo = 0, vt = null, Yn = !1;
function Or(e) {
  vt = e;
}
let ct = null;
function Tr(e) {
  ct = e;
}
let jn = null;
function $p(e) {
  jn = e;
}
let Jt = null, cn = 0, rr = null;
function Cp(e) {
  rr = e;
}
let Sc = 1, oa = 0, $r = !1;
function Ec() {
  return ++Sc;
}
function Oo(e) {
  var t, n = e.f;
  if (n & gr)
    return !0;
  if (n & Wr) {
    var r = e.deps, o = (n & xn) !== 0;
    if (r !== null) {
      var a, i, s = (n & ea) !== 0, l = o && ct !== null && !$r, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ea), l && d !== null && !(d.f & xn) && (c.f ^= xn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], Oo(
          /** @type {Derived} */
          i
        ) && xc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || ct !== null && !$r) && Rn(e, Ut);
  }
  return !1;
}
function kp(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Qi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Qi;
      }
    n = n.parent;
  }
  throw ji = !1, e;
}
function Sp(e) {
  return (e.f & Ea) === 0 && (e.parent === null || (e.parent.f & Qi) === 0);
}
function Oa(e, t, n, r) {
  if (ji) {
    if (n === null && (ji = !1), Sp(t))
      throw e;
    return;
  }
  n !== null && (ji = !0);
  {
    kp(e, t);
    return;
  }
}
function Pc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & Tn ? Pc(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Rn(a, gr) : a.f & Ut && Rn(a, Wr), Ra(
        /** @type {Effect} */
        a
      ));
    }
}
function Oc(e) {
  var t, n = Jt, r = cn, o = rr, a = vt, i = $r, s = jn, l = st, u = Yn, c = e.f;
  Jt = /** @type {null | Value[]} */
  null, cn = 0, rr = null, vt = c & (pr | Eo) ? null : e, $r = (c & xn) !== 0 && (!so || a === null || u), jn = null, iu(e.ctx), Yn = !1, oa++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Jt !== null) {
      var v;
      if (ia(e, cn), f !== null && cn > 0)
        for (f.length = cn + Jt.length, v = 0; v < Jt.length; v++)
          f[cn + v] = Jt[v];
      else
        e.deps = f = Jt;
      if (!$r)
        for (v = cn; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && cn < f.length && (ia(e, cn), f.length = cn);
    if (Na() && rr !== null && !Yn && f !== null && !(e.f & (Tn | Wr | gr)))
      for (v = 0; v < /** @type {Source[]} */
      rr.length; v++)
        Pc(
          rr[v],
          /** @type {Effect} */
          e
        );
    return a !== null && oa++, d;
  } finally {
    Jt = n, cn = r, rr = o, vt = a, $r = i, jn = s, iu(l), Yn = u;
  }
}
function Ep(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = rp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Jt === null || !Jt.includes(t)) && (Rn(t, Wr), t.f & (xn | ea) || (t.f ^= ea), bc(
    /** @type {Derived} **/
    t
  ), ia(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ia(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ep(e, n[r]);
}
function Ta(e) {
  var t = e.f;
  if (!(t & Ea)) {
    Rn(e, Ut);
    var n = ct, r = st;
    ct = e;
    try {
      t & Us ? Ap(e) : Lc(e), Vc(e);
      var o = Oc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Sc;
      var a = e.deps, i;
      Jv && jv && e.f & gr;
    } catch (s) {
      Oa(s, e, n, r || e.ctx);
    } finally {
      ct = n;
    }
  }
}
function Tc() {
  if (lo > 1e3) {
    lo = 0;
    try {
      vp();
    } catch (e) {
      if (Qo !== null)
        Oa(e, Qo, null);
      else
        throw e;
    }
  }
  lo++;
}
function Rc(e) {
  var t = e.length;
  if (t !== 0) {
    Tc();
    var n = so;
    so = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & Ut || (o.f ^= Ut);
        var a = Tp(o);
        Pp(a);
      }
    } finally {
      so = n;
    }
  }
}
function Pp(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ea | sr)))
        try {
          Oo(r) && (Ta(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Ac(r) : r.fn = null));
        } catch (o) {
          Oa(o, r, null, r.ctx);
        }
    }
}
function Op() {
  if (Jo = !1, lo > 1001)
    return;
  const e = Ar;
  Ar = [], Rc(e), Jo || (lo = 0, Qo = null);
}
function Ra(e) {
  Zi === kc && (Jo || (Jo = !0, queueMicrotask(Op))), Qo = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Eo | pr)) {
      if (!(n & Ut)) return;
      t.f ^= Ut;
    }
  }
  Ar.push(t);
}
function Tp(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & pr) !== 0, a = o && (r & Ut) !== 0, i = n.next;
    if (!a && !(r & sr)) {
      if (r & fc)
        t.push(n);
      else if (o)
        n.f ^= Ut;
      else {
        var s = vt;
        try {
          vt = n, Oo(n) && Ta(n);
        } catch (c) {
          Oa(c, n, null, n.ctx);
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
  var t = Zi, n = Ar;
  try {
    Tc();
    const o = [];
    Zi = _p, Ar = o, Jo = !1, Rc(n);
    var r = e == null ? void 0 : e();
    return up(), (Ar.length > 0 || o.length > 0) && y(), lo = 0, Qo = null, r;
  } finally {
    Zi = t, Ar = n;
  }
}
function p(e) {
  var t = e.f, n = (t & Tn) !== 0;
  if (vt !== null && !Yn) {
    jn !== null && jn.includes(e) && yp();
    var r = vt.deps;
    e.rv < oa && (e.rv = oa, Jt === null && r !== null && r[cn] === e ? cn++ : Jt === null ? Jt = [e] : (!$r || !Jt.includes(e)) && Jt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & xn) && (o.f ^= xn);
  }
  return n && (o = /** @type {Derived} */
  e, Oo(o) && xc(o)), e.v;
}
function Kn(e) {
  var t = Yn;
  try {
    return Yn = !0, e();
  } finally {
    Yn = t;
  }
}
const Rp = -7169;
function Rn(e, t) {
  e.f = e.f & Rp | t;
}
function oe(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (kr in e)
      $s(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && kr in n && $s(n);
      }
  }
}
function $s(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        $s(e[r], t);
      } catch {
      }
    const n = Qs(e);
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
function Mc(e) {
  ct === null && vt === null && fp(), vt !== null && vt.f & xn && ct === null && dp(), rl && cp();
}
function Mp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Xr(e, t, n, r = !0) {
  var o = (e & Eo) !== 0, a = ct, i = {
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
      ru(!0), Ta(i), i.f |= Qv;
    } catch (c) {
      throw _n(i), c;
    } finally {
      ru(s);
    }
  } else t !== null && Ra(i);
  var l = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (vc | Qi)) === 0;
  if (!l && !o && r && (a !== null && Mp(i, a), vt !== null && vt.f & Tn)) {
    var u = (
      /** @type {Derived} */
      vt
    );
    (u.effects ?? (u.effects = [])).push(i);
  }
  return i;
}
function Nc(e) {
  const t = Xr(Sa, null, !1);
  return Rn(t, Ut), t.teardown = e, t;
}
function aa(e) {
  Mc();
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
    var r = dn(e);
    return r;
  }
}
function Np(e) {
  return Mc(), To(e);
}
function Vp(e) {
  const t = Xr(Eo, e, !0);
  return () => {
    _n(t);
  };
}
function Lp(e) {
  const t = Xr(Eo, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? go(t, () => {
      _n(t), r(void 0);
    }) : (_n(t), r(void 0));
  });
}
function dn(e) {
  return Xr(fc, e, !1);
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
        n.f & Ut && Rn(n, Wr), Oo(n) && Ta(n), t.ran = !1;
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
  return Xr(Sa | Us | t, e, !0);
}
function dr(e, t = !0) {
  return Xr(Sa | pr, e, !0, t);
}
function Vc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = rl, r = vt;
    ou(!0), Or(null);
    try {
      t.call(null);
    } finally {
      ou(n), Or(r);
    }
  }
}
function Lc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    _n(n, t), n = r;
  }
}
function Ap(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & pr || _n(t), t = n;
  }
}
function _n(e, t = !0) {
  var n = !1;
  if ((t || e.f & tp) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Lc(e, t && !n), ia(e, 0), Rn(e, Ea);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  Vc(e);
  var s = e.parent;
  s !== null && s.first !== null && Ac(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ac(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function go(e, t) {
  var n = [];
  ol(e, n, !0), zc(n, () => {
    _n(e), t && t();
  });
}
function zc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ol(e, t, n) {
  if (!(e.f & sr)) {
    if (e.f ^= sr, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Po) !== 0 || (r.f & pr) !== 0;
      ol(r, t, a ? n : !1), r = o;
    }
  }
}
function ei(e) {
  Dc(e, !0);
}
function Dc(e, t) {
  if (e.f & sr) {
    e.f ^= sr, e.f & Ut || (e.f ^= Ut), Oo(e) && (Rn(e, gr), Ra(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Po) !== 0 || (n.f & pr) !== 0;
      Dc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ma(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let st = null;
function iu(e) {
  st = e;
}
function Hr(e) {
  return (
    /** @type {T} */
    il().get(e)
  );
}
function ho(e, t) {
  return il().set(e, t), t;
}
function zp(e) {
  return il().has(e);
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
  }, So && !t && (st.l = {
    s: null,
    u: null,
    r1: [],
    r2: sn(!1)
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
          Tr(a.effect), Or(a.reaction), dn(a.fn);
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
function Na() {
  return !So || st !== null && st.l === null;
}
function il(e) {
  return st === null && Ma(), st.c ?? (st.c = new Map(Dp(st) || void 0));
}
function Dp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Hp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ip = [
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
function Bp(e) {
  return Ip.includes(e);
}
const Yp = {
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
  return e = e.toLowerCase(), Yp[e] ?? e;
}
const Zp = ["touchstart", "touchmove"];
function Wp(e) {
  return Zp.includes(e);
}
const Xp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Kp(e) {
  return Xp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Fp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, vi(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function qp(e) {
  Ae && /* @__PURE__ */ Qt(e) !== null && nl(e);
}
let au = !1;
function Up() {
  au || (au = !0, document.addEventListener(
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
function Gp(e) {
  var t = vt, n = ct;
  Or(null), Tr(null);
  try {
    return e();
  } finally {
    Or(t), Tr(n);
  }
}
const Hc = /* @__PURE__ */ new Set(), Cs = /* @__PURE__ */ new Set();
function Ic(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || Wo.call(t, a), !a.cancelBubble)
      return Gp(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? vi(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function gt(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Ic(e, t, n, a);
  (t === document.body || t === window || t === document) && Nc(() => {
    t.removeEventListener(e, i, a);
  });
}
function Va(e) {
  for (var t = 0; t < e.length; t++)
    Hc.add(e[t]);
  for (var n of Cs)
    n(e);
}
function Wo(e) {
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
    Uo(e, "currentTarget", {
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
            if (fi(x)) {
              var [E, ...h] = x;
              E.apply(i, [e, ...h]);
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
function al(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function un(e, t) {
  var n = (
    /** @type {Effect} */
    ct
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  var n = (t & uc) !== 0, r = (t & Gv) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Ae)
      return un(Ue, null), Ue;
    o === void 0 && (o = al(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Qt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || _c ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      un(s, l);
    } else
      un(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function De(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & uc) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Ae)
      return un(Ue, null), Ue;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        al(a)
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
      un(c, d);
    } else
      un(u, u);
    return u;
  };
}
function bt(e = "") {
  if (!Ae) {
    var t = cr(e + "");
    return un(t, t), t;
  }
  var n = Ue;
  return n.nodeType !== 3 && (n.before(n = cr()), tn(n)), un(n, n), n;
}
function ht() {
  if (Ae)
    return un(Ue, null), Ue;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = cr();
  return e.append(t, n), un(t, n), e;
}
function j(e, t) {
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
function Bc(e, t) {
  return Yc(e, t);
}
function Jp(e, t) {
  _s(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ae, o = Ue;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== cc); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ qn(a);
    if (!a)
      throw ao;
    fn(!0), tn(
      /** @type {Comment} */
      a
    ), Xn();
    const i = Yc(e, { ...t, anchor: a });
    if (Ue === null || Ue.nodeType !== 8 || /** @type {Comment} */
    Ue.data !== qs)
      throw Pa(), ao;
    return fn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === ao)
      return t.recover === !1 && pp(), _s(), nl(n), fn(!1), Bc(e, t);
    throw i;
  } finally {
    fn(r), tn(o);
  }
}
const no = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  _s();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var m = Wp(v);
        t.addEventListener(v, Wo, { passive: m });
        var _ = no.get(v);
        _ === void 0 ? (document.addEventListener(v, Wo, { passive: m }), no.set(v, 1)) : no.set(v, _ + 1);
      }
    }
  };
  l(Js(Hc)), Cs.add(l);
  var u = void 0, c = Lp(() => {
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
      o && (r.$$events = o), Ae && un(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ae && (ct.nodes_end = Ue), a && ke();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Wo);
        var m = (
          /** @type {number} */
          no.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, Wo), no.delete(v)) : no.set(v, m);
      }
      Cs.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return ks.set(u, c), u;
}
let ks = /* @__PURE__ */ new WeakMap();
function Qp(e, t) {
  const n = ks.get(e);
  return n ? (ks.delete(e), n(t)) : Promise.resolve();
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
        r.data === Fs
      );
      !!i === m && (r = xs(), tn(r), fn(!1), v = !0);
    }
    i ? (o ? ei(o) : f && (o = dr(() => f(r))), a && go(a, () => {
      a = null;
    })) : (a ? ei(a) : f && (a = dr(() => f(r))), o && go(o, () => {
      o = null;
    })), v && fn(!0);
  };
  Kr(() => {
    l = !1, t(u), l || c(null, null);
  }, s), Ae && (r = Ue);
}
function La(e, t) {
  return t;
}
function eg(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    ol(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    nl(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), xr(e, t[0].prev, t[a - 1].next);
  }
  zc(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), xr(e, c.prev, c.next)), _n(c.e, !s);
    }
  });
}
function pn(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & sc) !== 0;
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
    return fi(v) ? v : v == null ? [] : Js(v);
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
        i.data === Fs
      );
      x !== (m === 0) && (i = xs(), tn(i), fn(!1), _ = !0);
    }
    if (Ae) {
      for (var E = null, h, $ = 0; $ < m; $++) {
        if (Ue.nodeType === 8 && /** @type {Comment} */
        Ue.data === qs) {
          i = /** @type {Comment} */
          Ue, _ = !0, fn(!1);
          break;
        }
        var b = v[$], S = r(b, $);
        h = jc(
          Ue,
          s,
          E,
          null,
          b,
          S,
          $,
          o,
          t,
          n
        ), s.items.set(S, h), E = h;
      }
      m > 0 && tn(xs());
    }
    Ae || tg(v, s, i, o, t, r, n), a !== null && (m === 0 ? c ? ei(c) : c = dr(() => a(i)) : c !== null && go(c, () => {
      c = null;
    })), _ && fn(!0), p(f);
  }), Ae && (i = Ue);
}
function tg(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & Wv) !== 0, f = (o & (Xs | Ks)) !== 0, v = e.length, m = t.items, _ = t.first, x = _, E, h = null, $, b = [], S = [], O, T, N, z;
  if (d)
    for (z = 0; z < v; z += 1)
      O = e[z], T = a(O, z), N = m.get(T), N !== void 0 && ((s = N.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(N));
  for (z = 0; z < v; z += 1) {
    if (O = e[z], T = a(O, z), N = m.get(T), N === void 0) {
      var D = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = jc(
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
      ), m.set(T, h), b = [], S = [], x = h.next;
      continue;
    }
    if (f && ng(N, O, z, o), N.e.f & sr && (ei(N.e), d && ((l = N.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(N))), N !== x) {
      if (E !== void 0 && E.has(N)) {
        if (b.length < S.length) {
          var W = S[0], Y;
          h = W.prev;
          var X = b[0], P = b[b.length - 1];
          for (Y = 0; Y < b.length; Y += 1)
            su(b[Y], W, n);
          for (Y = 0; Y < S.length; Y += 1)
            E.delete(S[Y]);
          xr(t, X.prev, P.next), xr(t, h, X), xr(t, P, W), x = W, h = P, z -= 1, b = [], S = [];
        } else
          E.delete(N), su(N, x, n), xr(t, N.prev, N.next), xr(t, N, h === null ? t.first : h.next), xr(t, h, N), h = N;
        continue;
      }
      for (b = [], S = []; x !== null && x.k !== T; )
        x.e.f & sr || (E ?? (E = /* @__PURE__ */ new Set())).add(x), S.push(x), x = x.next;
      if (x === null)
        continue;
      N = x;
    }
    b.push(N), h = N, x = N.next;
  }
  if (x !== null || E !== void 0) {
    for (var M = E === void 0 ? [] : Js(E); x !== null; )
      x.e.f & sr || M.push(x), x = x.next;
    var k = M.length;
    if (k > 0) {
      var C = o & sc && v === 0 ? n : null;
      if (d) {
        for (z = 0; z < k; z += 1)
          (u = M[z].a) == null || u.measure();
        for (z = 0; z < k; z += 1)
          (c = M[z].a) == null || c.fix();
      }
      eg(t, M, C, m);
    }
  }
  d && vi(() => {
    var A;
    if ($ !== void 0)
      for (N of $)
        (A = N.a) == null || A.apply();
  }), ct.first = t.first && t.first.e, ct.last = h && h.e;
}
function ng(e, t, n, r) {
  r & Xs && bs(e.v, t), r & Ks ? bs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function jc(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Xs) !== 0, d = (l & Xv) === 0, f = c ? d ? /* @__PURE__ */ pi(o) : sn(o) : o, v = l & Ks ? sn(i) : i, m = {
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
function su(e, t, n) {
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
function Zc(e, t, n, r, o) {
  var a = e, i = "", s;
  Kr(() => {
    if (i === (i = t() ?? "")) {
      Ae && Xn();
      return;
    }
    s !== void 0 && (_n(s), s = void 0), i !== "" && (s = dr(() => {
      if (Ae) {
        Ue.data;
        for (var l = Xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ qn(l);
        if (l === null)
          throw Pa(), ao;
        un(Ue, u), a = tn(l);
        return;
      }
      var c = i + "", d = al(c);
      un(
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
function rg(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function mo(e, t, ...n) {
  var r = e, o = Zt, a;
  Kr(() => {
    o !== (o = t()) && (a && (_n(a), a = null), a = dr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Po), Ae && (r = Ue);
}
function Wc(e, t, n) {
  Ae && Xn();
  var r = e, o, a;
  Kr(() => {
    o !== (o = t()) && (a && (go(a), a = null), o && (a = dr(() => n(r, o))));
  }, Po), Ae && (r = Ue);
}
function og(e, t, n, r, o, a) {
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
    var v = f === "svg" ? dc : null;
    f !== s && (d && (f === null ? go(d, () => {
      d = null, l = null;
    }) : f === l ? ei(d) : _n(d)), f && f !== l && (d = dr(() => {
      if (u = Ae ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), un(u, u), r) {
        Ae && Kp(f) && u.append(document.createComment(""));
        var m = (
          /** @type {TemplateNode} */
          Ae ? /* @__PURE__ */ Qt(u) : u.appendChild(cr())
        );
        Ae && (m === null ? fn(!1) : tn(m)), r(u, m);
      }
      ct.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Po), i && (fn(!0), tn(c));
}
function Rt(e, t) {
  vi(() => {
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
  dn(() => {
    var r = Kn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      To(() => {
        var i = n();
        oe(i), o && el(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Xc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Xc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ig() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Xc(e)) && (r && (r += " "), r += t);
  return r;
}
function Gn(e) {
  return typeof e == "object" ? ig(e) : e ?? "";
}
function Kc(e) {
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
    e.__on_r = n, lp(n), Up();
  }
}
function ag(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ae && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[np] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Fc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Mn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Ae && a;
  s && fn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = Gn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = Fc(e), f = (
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
          const b = {}, S = "$$" + h;
          let O = h.slice(2);
          var _ = Bp(O);
          if (Hp(O) && (O = O.slice(0, -7), b.capture = !0), !_ && v) {
            if ($ != null) continue;
            e.removeEventListener(O, l[S], b), l[S] = null;
          }
          if ($ != null)
            if (_)
              e[`__${O}`] = $, Va([O]);
            else {
              let T = function(N) {
                l[h].call(this, N);
              };
              l[S] = Ic(O, e, T, b);
            }
          else _ && (e[`__${O}`] = void 0);
        } else if (h === "style" && $ != null)
          e.style.cssText = $ + "";
        else if (h === "autofocus")
          Fp(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!a && (h === "__value" || h === "value" && $ != null))
          e.value = e.__value = $;
        else if (h === "selected" && u)
          ag(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var x = h;
          o || (x = jp(x));
          var E = x === "defaultValue" || x === "defaultChecked";
          if ($ == null && !a && !E)
            if (f[h] = null, x === "value" || x === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (x === "value") {
                let O = b.defaultValue;
                b.removeAttribute(x), b.defaultValue = O, b.value = b.__value = S ? O : null;
              } else {
                let O = b.defaultChecked;
                b.removeAttribute(x), b.defaultChecked = O, b.checked = S ? O : !1;
              }
            } else
              e.removeAttribute(h);
          else E || d.includes(x) && (a || typeof $ != "string") ? e[x] = $ : typeof $ != "function" && xe(e, x, $);
        }
        h === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && fn(!0), l;
}
var lu = /* @__PURE__ */ new Map();
function Fc(e) {
  var t = lu.get(e.nodeName);
  if (t) return t;
  lu.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = pc(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = Qs(r);
  }
  return t;
}
function Fr(e, t, n) {
  var r = e.__className, o = qc(t, n);
  Ae && e.getAttribute("class") === o ? e.__className = o : (r !== o || Ae && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function yo(e, t, n) {
  var r = e.__className, o = qc(t, n);
  Ae && e.className === o ? e.__className = o : (r !== o || Ae && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function qc(e, t) {
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
var Lr, qo, Wi, Ss, Uc;
const Es = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    oo(this, Ss), oo(this, Lr, /* @__PURE__ */ new WeakMap()), oo(this, qo), oo(this, Wi), Ji(this, Wi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Nt(this, Lr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Nt(this, Lr).set(t, r), Bv(this, Ss, Uc).call(this).observe(t, Nt(this, Wi)), () => {
      var o = Nt(this, Lr).get(t);
      o.delete(n), o.size === 0 && (Nt(this, Lr).delete(t), Nt(this, qo).unobserve(t));
    };
  }
};
Lr = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakSet(), Uc = function() {
  return Nt(this, qo) ?? Ji(this, qo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Es.entries.set(t.target, t);
        for (var n of Nt(this, Lr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
kn(Es, "entries", /* @__PURE__ */ new WeakMap());
let sg = Es;
var lg = /* @__PURE__ */ new sg({
  box: "border-box"
});
function uu(e, t, n) {
  var r = lg.observe(e, () => n(e[t]));
  dn(() => (Kn(() => n(e[t])), r));
}
function cu(e, t) {
  return e === t || (e == null ? void 0 : e[kr]) === t;
}
function fr(e = {}, t, n, r) {
  return dn(() => {
    var o, a;
    return To(() => {
      o = a, a = [], Kn(() => {
        e !== n(...a) && (t(e, ...a), o && cu(n(...o), e) && t(null, ...o));
      });
    }), () => {
      vi(() => {
        a && cu(n(...a), e) && t(null, ...a);
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
  n.b.length && Np(() => {
    du(t, r), Go(n.b);
  }), aa(() => {
    const o = Kn(() => n.m.map(ap));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && aa(() => {
    du(t, r), Go(n.a);
  });
}
function du(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function rt(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = fi(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function qr(e) {
  st === null && Ma(), So && st.l !== null ? cg(st).m.push(e) : aa(() => {
    const t = Kn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function sl(e) {
  st === null && Ma(), qr(() => () => Kn(e));
}
function ug(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Aa() {
  const e = st;
  return e === null && Ma(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = fi(a) ? a.slice() : [a], s = ug(
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
function ll(e, t, n) {
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
function wn(e, t) {
  return {
    subscribe: Oe(e, t).subscribe
  };
}
function Oe(e, t = Zt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (el(e, s) && (e = s, n)) {
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
function Sr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return wn(n, (i, s) => {
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
      (m, _) => ll(
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
      Go(v), d(), l = !1;
    };
  });
}
function Q(e) {
  let t;
  return ll(e, (n) => t = n)(), t;
}
let Ai = !1, Ps = Symbol();
function le(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ pi(void 0),
    unsubscribe: Zt
  });
  if (r.store !== e && !(Ps in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Zt;
    else {
      var o = !0;
      r.unsubscribe = ll(e, (a) => {
        o ? r.source.v = a : ie(r.source, a);
      }), o = !1;
    }
  return e && Ps in n ? Q(e) : p(r.source);
}
function dg(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Zt), e;
}
function sa(e, t) {
  return e.set(t), t;
}
function _t() {
  const e = {};
  function t() {
    Nc(() => {
      for (var n in e)
        e[n].unsubscribe();
      Uo(e, Ps, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function fg(e) {
  var t = Ai;
  try {
    return Ai = !1, [e(), Ai];
  } finally {
    Ai = t;
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
function $n(e, t, n) {
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
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      lc
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
function St(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: sn(0) }, pg);
}
const gg = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Bo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Bo(o) && (o = o());
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
      if (Bo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = lr(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === kr || t === Gs) return !1;
    for (let n of e.props)
      if (Bo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Bo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function en(...e) {
  return new Proxy({ props: e }, gg);
}
function w(e, t, n, r) {
  var o, a = (n & Kv) !== 0, i = !So || (n & Fv) !== 0, s = (n & qv) !== 0, l = (n & Uv) !== 0, u = !1, c;
  s ? [c, u] = fg(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = kr in e || Gs in e, f = s && (((o = lr(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((T) => e[t] = T))) || void 0, v = (
    /** @type {V} */
    r
  ), m = !0, _ = !1, x = () => (_ = !0, m && (m = !1, l ? v = Kn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && gp(), c = x(), f && f(c));
  var E;
  if (i)
    E = () => {
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
    h.f |= ep, E = () => {
      var T = p(h);
      return T !== void 0 && (v = /** @type {V} */
      void 0), T === void 0 ? v : T;
    };
  }
  if (!(n & lc))
    return E;
  if (f) {
    var $ = e.$$legacy;
    return function(T, N) {
      return arguments.length > 0 ? ((!i || !N || $ || u) && f(N ? E() : T), T) : E();
    };
  }
  var b = !1, S = /* @__PURE__ */ pi(c), O = /* @__PURE__ */ Je(() => {
    var T = E(), N = p(S);
    return b ? (b = !1, N) : S.v = T;
  });
  return a || (O.equals = tl), function(T, N) {
    if (arguments.length > 0) {
      const z = N ? p(O) : i && s ? Bn(T) : T;
      return O.equals(z) || (b = !0, ie(S, z), _ && v !== void 0 && (v = z), Kn(() => p(O))), T;
    }
    return p(O);
  };
}
function hg(e) {
  return new mg(e);
}
var br, Sn;
class mg {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    oo(this, br), oo(this, Sn);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ pi(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return p(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Gs ? !0 : (p(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return ie(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    Ji(this, Sn, (t.hydrate ? Jp : Bc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), Ji(this, br, a.$$events);
    for (const i of Object.keys(Nt(this, Sn)))
      i === "$set" || i === "$destroy" || i === "$on" || Uo(this, i, {
        get() {
          return Nt(this, Sn)[i];
        },
        /** @param {any} value */
        set(s) {
          Nt(this, Sn)[i] = s;
        },
        enumerable: !0
      });
    Nt(this, Sn).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, Nt(this, Sn).$destroy = () => {
      Qp(Nt(this, Sn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Nt(this, Sn).$set(t);
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
    Nt(this, Sn).$destroy();
  }
}
br = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
let Gc;
typeof HTMLElement == "function" && (Gc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), kn(this, "$$ctor"), kn(this, "$$s"), kn(this, "$$c"), kn(this, "$$cn", !1), kn(this, "$$d", {}), kn(this, "$$r", !1), kn(this, "$$p_d", {}), kn(this, "$$l", {}), kn(this, "$$l_u", /* @__PURE__ */ new Map()), kn(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (a.name = r), j(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = yg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Xi(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = Vp(() => {
        To(() => {
          var r;
          this.$$r = !0;
          for (const o of ta(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = Xi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Xi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ta(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Xi(e, t, n, r) {
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
function be(e, t, n, r, o, a) {
  let i = class extends Gc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ta(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ta(t).forEach((s) => {
    Uo(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Xi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = lr(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Uo(i.prototype, s, {
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
var wg = { value: () => {
} };
function za() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ki(n);
}
function Ki(e) {
  this._ = e;
}
function bg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ki.prototype = za.prototype = {
  constructor: Ki,
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
    return new Ki(e);
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
var Os = "http://www.w3.org/1999/xhtml";
const vu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Os,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Da(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vu.hasOwnProperty(t) ? { space: vu[t], local: e } : e;
}
function _g(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Os && t.documentElement.namespaceURI === Os ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function $g(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Jc(e) {
  var t = Da(e);
  return (t.local ? $g : _g)(t);
}
function Cg() {
}
function ul(e) {
  return e == null ? Cg : function() {
    return this.querySelector(e);
  };
}
function kg(e) {
  typeof e != "function" && (e = ul(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new gn(r, this._parents);
}
function Sg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Eg() {
  return [];
}
function Qc(e) {
  return e == null ? Eg : function() {
    return this.querySelectorAll(e);
  };
}
function Pg(e) {
  return function() {
    return Sg(e.apply(this, arguments));
  };
}
function Og(e) {
  typeof e == "function" ? e = Pg(e) : e = Qc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new gn(r, o);
}
function ed(e) {
  return function() {
    return this.matches(e);
  };
}
function td(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Tg = Array.prototype.find;
function Rg(e) {
  return function() {
    return Tg.call(this.children, e);
  };
}
function Mg() {
  return this.firstElementChild;
}
function Ng(e) {
  return this.select(e == null ? Mg : Rg(typeof e == "function" ? e : td(e)));
}
var Vg = Array.prototype.filter;
function Lg() {
  return Array.from(this.children);
}
function Ag(e) {
  return function() {
    return Vg.call(this.children, e);
  };
}
function zg(e) {
  return this.selectAll(e == null ? Lg : Ag(typeof e == "function" ? e : td(e)));
}
function Dg(e) {
  typeof e != "function" && (e = ed(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new gn(r, this._parents);
}
function nd(e) {
  return new Array(e.length);
}
function Hg() {
  return new gn(this._enter || this._groups.map(nd), this._parents);
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
function Yg(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new la(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function jg(e) {
  return e.__data__;
}
function Zg(e, t) {
  if (!arguments.length) return Array.from(this, jg);
  var n = t ? Yg : Bg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ig(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = Wg(e.call(c, c && c.__data__, u, r)), m = v.length, _ = s[u] = new Array(m), x = i[u] = new Array(m), E = l[u] = new Array(f);
    n(c, d, _, x, E, v, t);
    for (var h = 0, $ = 0, b, S; h < m; ++h)
      if (b = _[h]) {
        for (h >= $ && ($ = h + 1); !(S = x[$]) && ++$ < m; ) ;
        b._next = S || null;
      }
  }
  return i = new gn(i, r), i._enter = s, i._exit = l, i;
}
function Wg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xg() {
  return new gn(this._exit || this._groups.map(nd), this._parents);
}
function Kg(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Fg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || c[m]) && (f[m] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new gn(s, this._parents);
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
  return new gn(o, this._parents).order();
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
  var n = Da(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ih : oh : typeof t == "function" ? n.local ? uh : lh : n.local ? sh : ah)(n, t));
}
function rd(e) {
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
  return e.style.getPropertyValue(t) || rd(e).getComputedStyle(e, null).getPropertyValue(t);
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
function od(e) {
  return e.trim().split(/^|\s+/);
}
function cl(e) {
  return e.classList || new id(e);
}
function id(e) {
  this._node = e, this._names = od(e.getAttribute("class") || "");
}
id.prototype = {
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
function ad(e, t) {
  for (var n = cl(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function sd(e, t) {
  for (var n = cl(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function wh(e) {
  return function() {
    ad(this, e);
  };
}
function bh(e) {
  return function() {
    sd(this, e);
  };
}
function xh(e, t) {
  return function() {
    (t.apply(this, arguments) ? ad : sd)(this, e);
  };
}
function _h(e, t) {
  var n = od(e + "");
  if (arguments.length < 2) {
    for (var r = cl(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xh : t ? wh : bh)(n, t));
}
function $h() {
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
function Sh(e) {
  return arguments.length ? this.each(e == null ? $h : (typeof e == "function" ? kh : Ch)(e)) : this.node().textContent;
}
function Eh() {
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
  return arguments.length ? this.each(e == null ? Eh : (typeof e == "function" ? Oh : Ph)(e)) : this.node().innerHTML;
}
function Rh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mh() {
  return this.each(Rh);
}
function Nh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vh() {
  return this.each(Nh);
}
function Lh(e) {
  var t = typeof e == "function" ? e : Jc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ah() {
  return null;
}
function zh(e, t) {
  var n = typeof e == "function" ? e : Jc(e), r = t == null ? Ah : typeof t == "function" ? t : ul(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Dh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Hh() {
  return this.each(Dh);
}
function Ih() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yh(e) {
  return this.select(e ? Bh : Ih);
}
function jh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Zh(e) {
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
function Xh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Kh(e, t, n) {
  return function() {
    var r = this.__on, o, a = Zh(t);
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
function Fh(e, t, n) {
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
  for (s = t ? Kh : Xh, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function ld(e, t, n) {
  var r = rd(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function qh(e, t) {
  return function() {
    return ld(this, e, t);
  };
}
function Uh(e, t) {
  return function() {
    return ld(this, e, t.apply(this, arguments));
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
var ud = [null];
function gn(e, t) {
  this._groups = e, this._parents = t;
}
function gi() {
  return new gn([[document.documentElement]], ud);
}
function Qh() {
  return this;
}
gn.prototype = gi.prototype = {
  constructor: gn,
  select: kg,
  selectAll: Og,
  selectChild: Ng,
  selectChildren: zg,
  filter: Dg,
  data: Zg,
  enter: Hg,
  exit: Xg,
  join: Kg,
  merge: Fg,
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
  classed: _h,
  text: Sh,
  html: Th,
  raise: Mh,
  lower: Vh,
  append: Lh,
  insert: zh,
  remove: Hh,
  clone: Yh,
  datum: jh,
  on: Fh,
  dispatch: Gh,
  [Symbol.iterator]: Jh
};
function bn(e) {
  return typeof e == "string" ? new gn([[document.querySelector(e)]], [document.documentElement]) : new gn([[e]], ud);
}
function e1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function En(e, t) {
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
const t1 = { passive: !1 }, ti = { capture: !0, passive: !1 };
function ss(e) {
  e.stopImmediatePropagation();
}
function uo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function cd(e) {
  var t = e.document.documentElement, n = bn(e).on("dragstart.drag", uo, ti);
  "onselectstart" in t ? n.on("selectstart.drag", uo, ti) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function dd(e, t) {
  var n = e.document.documentElement, r = bn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", uo, ti), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const zi = (e) => () => e;
function Ts(e, {
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
Ts.prototype.on = function() {
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
  function f(b) {
    b.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", E, t1).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(b, S) {
    if (!(c || !e.call(this, b, S))) {
      var O = $(this, t.call(this, b, S), b, S, "mouse");
      O && (bn(b.view).on("mousemove.drag", m, ti).on("mouseup.drag", _, ti), cd(b.view), ss(b), u = !1, s = b.clientX, l = b.clientY, O("start", b));
    }
  }
  function m(b) {
    if (uo(b), !u) {
      var S = b.clientX - s, O = b.clientY - l;
      u = S * S + O * O > d;
    }
    o.mouse("drag", b);
  }
  function _(b) {
    bn(b.view).on("mousemove.drag mouseup.drag", null), dd(b.view, u), uo(b), o.mouse("end", b);
  }
  function x(b, S) {
    if (e.call(this, b, S)) {
      var O = b.changedTouches, T = t.call(this, b, S), N = O.length, z, D;
      for (z = 0; z < N; ++z)
        (D = $(this, T, b, S, O[z].identifier, O[z])) && (ss(b), D("start", b, O[z]));
    }
  }
  function E(b) {
    var S = b.changedTouches, O = S.length, T, N;
    for (T = 0; T < O; ++T)
      (N = o[S[T].identifier]) && (uo(b), N("drag", b, S[T]));
  }
  function h(b) {
    var S = b.changedTouches, O = S.length, T, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), T = 0; T < O; ++T)
      (N = o[S[T].identifier]) && (ss(b), N("end", b, S[T]));
  }
  function $(b, S, O, T, N, z) {
    var D = a.copy(), W = En(z || O, S), Y, X, P;
    if ((P = n.call(b, new Ts("beforestart", {
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
      return Y = P.x - W[0] || 0, X = P.y - W[1] || 0, function M(k, C, A) {
        var H = W, K;
        switch (k) {
          case "start":
            o[N] = M, K = i++;
            break;
          case "end":
            delete o[N], --i;
          // falls through
          case "drag":
            W = En(A || C, S), K = i;
            break;
        }
        D.call(
          k,
          b,
          new Ts(k, {
            sourceEvent: C,
            subject: P,
            target: f,
            identifier: N,
            active: K,
            x: W[0] + Y,
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
    return arguments.length ? (e = typeof b == "function" ? b : zi(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : zi(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : zi(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : zi(!!b), f) : r;
  }, f.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (d = (b = +b) * b, f) : Math.sqrt(d);
  }, f;
}
function dl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function fd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function hi() {
}
var ni = 0.7, ua = 1 / ni, co = "\\s*([+-]?\\d+)\\s*", ri = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", s1 = /^#([0-9a-f]{3,8})$/, l1 = new RegExp(`^rgb\\(${co},${co},${co}\\)$`), u1 = new RegExp(`^rgb\\(${Zn},${Zn},${Zn}\\)$`), c1 = new RegExp(`^rgba\\(${co},${co},${co},${ri}\\)$`), d1 = new RegExp(`^rgba\\(${Zn},${Zn},${Zn},${ri}\\)$`), f1 = new RegExp(`^hsl\\(${ri},${Zn},${Zn}\\)$`), v1 = new RegExp(`^hsla\\(${ri},${Zn},${Zn},${ri}\\)$`), pu = {
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
dl(hi, oi, {
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
  return vd(this).formatHsl();
}
function hu() {
  return this.rgb().formatRgb();
}
function oi(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = s1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mu(t) : n === 3 ? new ln(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Di(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Di(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = l1.exec(e)) ? new ln(t[1], t[2], t[3], 1) : (t = u1.exec(e)) ? new ln(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = c1.exec(e)) ? Di(t[1], t[2], t[3], t[4]) : (t = d1.exec(e)) ? Di(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = f1.exec(e)) ? bu(t[1], t[2] / 100, t[3] / 100, 1) : (t = v1.exec(e)) ? bu(t[1], t[2] / 100, t[3] / 100, t[4]) : pu.hasOwnProperty(e) ? mu(pu[e]) : e === "transparent" ? new ln(NaN, NaN, NaN, 0) : null;
}
function mu(e) {
  return new ln(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Di(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ln(e, t, n, r);
}
function h1(e) {
  return e instanceof hi || (e = oi(e)), e ? (e = e.rgb(), new ln(e.r, e.g, e.b, e.opacity)) : new ln();
}
function Rs(e, t, n, r) {
  return arguments.length === 1 ? h1(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
dl(ln, Rs, fd(hi, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new ln(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ni : Math.pow(ni, e), new ln(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ln(Dr(this.r), Dr(this.g), Dr(this.b), ca(this.opacity));
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
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}`;
}
function m1() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wu() {
  const e = ca(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dr(this.r)}, ${Dr(this.g)}, ${Dr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ca(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Dr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zr(e) {
  return e = Dr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new On(e, t, n, r);
}
function vd(e) {
  if (e instanceof On) return new On(e.h, e.s, e.l, e.opacity);
  if (e instanceof hi || (e = oi(e)), !e) return new On();
  if (e instanceof On) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new On(i, s, l, e.opacity);
}
function y1(e, t, n, r) {
  return arguments.length === 1 ? vd(e) : new On(e, t, n, r ?? 1);
}
function On(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
dl(On, y1, fd(hi, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new On(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ni : Math.pow(ni, e), new On(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new ln(
      ls(e >= 240 ? e - 240 : e + 120, o, r),
      ls(e, o, r),
      ls(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new On(xu(this.h), Hi(this.s), Hi(this.l), ca(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ca(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${xu(this.h)}, ${Hi(this.s) * 100}%, ${Hi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function xu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Hi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ls(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const pd = (e) => () => e;
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
  return (e = +e) == 1 ? gd : function(t, n) {
    return n - t ? b1(t, n, e) : pd(isNaN(t) ? n : t);
  };
}
function gd(e, t) {
  var n = t - e;
  return n ? w1(e, n) : pd(isNaN(e) ? t : e);
}
const _u = function e(t) {
  var n = x1(t);
  function r(o, a) {
    var i = n((o = Rs(o)).r, (a = Rs(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = gd(o.opacity, a.opacity);
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
var Ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, us = new RegExp(Ms.source, "g");
function _1(e) {
  return function() {
    return e;
  };
}
function $1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function C1(e, t) {
  var n = Ms.lastIndex = us.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ms.exec(e)) && (o = us.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: _r(r, o) })), n = us.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? $1(l[0].x) : _1(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var $u = 180 / Math.PI, hd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function md(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * $u,
    skewX: Math.atan(l) * $u,
    scaleX: i,
    scaleY: s
  };
}
var Ii;
function k1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? hd : md(t.a, t.b, t.c, t.d, t.e, t.f);
}
function S1(e) {
  return e == null || (Ii || (Ii = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ii.setAttribute("transform", e), !(e = Ii.transform.baseVal.consolidate())) ? hd : (e = e.matrix, md(e.a, e.b, e.c, e.d, e.e, e.f));
}
function yd(e, t, n, r) {
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
var E1 = yd(k1, "px, ", "px)", "deg)"), P1 = yd(S1, ", ", ")", ")"), O1 = 1e-12;
function Cu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function T1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function R1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const M1 = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, m = d - l, _ = v * v + m * m, x, E;
    if (_ < O1)
      E = Math.log(f / u) / t, x = function(T) {
        return [
          s + T * v,
          l + T * m,
          u * Math.exp(t * T * E)
        ];
      };
    else {
      var h = Math.sqrt(_), $ = (f * f - u * u + r * _) / (2 * u * n * h), b = (f * f - u * u - r * _) / (2 * f * n * h), S = Math.log(Math.sqrt($ * $ + 1) - $), O = Math.log(Math.sqrt(b * b + 1) - b);
      E = (O - S) / t, x = function(T) {
        var N = T * E, z = Cu(S), D = u / (n * h) * (z * R1(t * N + S) - T1(S));
        return [
          s + D * v,
          l + D * m,
          u * z / Cu(t * N + S)
        ];
      };
    }
    return x.duration = E * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var bo = 0, Xo = 0, Yo = 0, wd = 1e3, da, Ko, fa = 0, Ir = 0, Ha = 0, ii = typeof performance == "object" && performance.now ? performance : Date, bd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function fl() {
  return Ir || (bd(N1), Ir = ii.now() + Ha);
}
function N1() {
  Ir = 0;
}
function va() {
  this._call = this._time = this._next = null;
}
va.prototype = xd.prototype = {
  constructor: va,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? fl() : +n) + (t == null ? 0 : +t), !this._next && Ko !== this && (Ko ? Ko._next = this : da = this, Ko = this), this._call = e, this._time = n, Ns();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ns());
  }
};
function xd(e, t, n) {
  var r = new va();
  return r.restart(e, t, n), r;
}
function V1() {
  fl(), ++bo;
  for (var e = da, t; e; )
    (t = Ir - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bo;
}
function ku() {
  Ir = (fa = ii.now()) + Ha, bo = Xo = 0;
  try {
    V1();
  } finally {
    bo = 0, A1(), Ir = 0;
  }
}
function L1() {
  var e = ii.now(), t = e - fa;
  t > wd && (Ha -= t, fa = e);
}
function A1() {
  for (var e, t = da, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : da = n);
  Ko = e, Ns(r);
}
function Ns(e) {
  if (!bo) {
    Xo && (Xo = clearTimeout(Xo));
    var t = e - Ir;
    t > 24 ? (e < 1 / 0 && (Xo = setTimeout(ku, e - ii.now() - Ha)), Yo && (Yo = clearInterval(Yo))) : (Yo || (fa = ii.now(), Yo = setInterval(L1, wd)), bo = 1, bd(ku));
  }
}
function Su(e, t, n) {
  var r = new va();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var z1 = za("start", "end", "cancel", "interrupt"), D1 = [], _d = 0, Eu = 1, Vs = 2, Fi = 3, Pu = 4, Ls = 5, qi = 6;
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
    tween: D1,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: _d
  });
}
function vl(e, t) {
  var n = Ln(e, t);
  if (n.state > _d) throw new Error("too late; already scheduled");
  return n;
}
function Jn(e, t) {
  var n = Ln(e, t);
  if (n.state > Fi) throw new Error("too late; already running");
  return n;
}
function Ln(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function H1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = xd(a, 0, n.time);
  function a(u) {
    n.state = Eu, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== Eu) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === Fi) return Su(i);
        v.state === Pu ? (v.state = qi, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = qi, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Su(function() {
      n.state === Fi && (n.state = Pu, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Vs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Vs) {
      for (n.state = Fi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ls, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Ls && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = qi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ui(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Vs && r.state < Ls, r.state = qi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function I1(e) {
  return this.each(function() {
    Ui(this, e);
  });
}
function B1(e, t) {
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
function Y1(e, t, n) {
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
function j1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ln(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? B1 : Y1)(n, e, t));
}
function pl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Jn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ln(o, r).value[t];
  };
}
function $d(e, t) {
  var n;
  return (typeof t == "number" ? _r : t instanceof oi ? _u : (n = oi(t)) ? (t = n, _u) : C1)(e, t);
}
function Z1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function W1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function X1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function K1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function F1(e, t, n) {
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
  var n = Da(e), r = n === "transform" ? P1 : $d;
  return this.attrTween(e, typeof t == "function" ? (n.local ? q1 : F1)(n, r, pl(this, "attr." + e, t)) : t == null ? (n.local ? W1 : Z1)(n) : (n.local ? K1 : X1)(n, r, t));
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
  var r = Da(e);
  return this.tween(n, (r.local ? Q1 : e0)(r, t));
}
function n0(e, t) {
  return function() {
    vl(this, e).delay = +t.apply(this, arguments);
  };
}
function r0(e, t) {
  return t = +t, function() {
    vl(this, e).delay = t;
  };
}
function o0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? n0 : r0)(t, e)) : Ln(this.node(), t).delay;
}
function i0(e, t) {
  return function() {
    Jn(this, e).duration = +t.apply(this, arguments);
  };
}
function a0(e, t) {
  return t = +t, function() {
    Jn(this, e).duration = t;
  };
}
function s0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? i0 : a0)(t, e)) : Ln(this.node(), t).duration;
}
function l0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Jn(this, e).ease = t;
  };
}
function u0(e) {
  var t = this._id;
  return arguments.length ? this.each(l0(t, e)) : Ln(this.node(), t).ease;
}
function c0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Jn(this, e).ease = n;
  };
}
function d0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(c0(this._id, e));
}
function f0(e) {
  typeof e != "function" && (e = ed(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new vr(r, this._parents, this._name, this._id);
}
function v0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new vr(i, this._parents, this._name, this._id);
}
function p0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function g0(e, t, n) {
  var r, o, a = p0(t) ? vl : Jn;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function h0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ln(this.node(), n).on.on(e) : this.each(g0(n, e, t));
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
  typeof e != "function" && (e = ul(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ia(u[f], t, n, f, u, Ln(c, n)));
  return new vr(a, this._parents, t, n);
}
function b0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Qc(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, m = Ln(c, n), _ = 0, x = f.length; _ < x; ++_)
          (v = f[_]) && Ia(v, t, n, _, f, m);
        a.push(f), i.push(c);
      }
  return new vr(a, i, t, n);
}
var x0 = gi.prototype.constructor;
function _0() {
  return new x0(this._groups, this._parents);
}
function $0(e, t) {
  var n, r, o;
  return function() {
    var a = wo(this, e), i = (this.style.removeProperty(e), wo(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Cd(e) {
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
function S0(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = Jn(this, e), u = l.on, c = l.value[a] == null ? s || (s = Cd(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function E0(e, t, n) {
  var r = (e += "") == "transform" ? E1 : $d;
  return t == null ? this.styleTween(e, $0(e, r)).on("end.style." + e, Cd(e)) : typeof t == "function" ? this.styleTween(e, k0(e, r, pl(this, "style." + e, t))).each(S0(this._id, e)) : this.styleTween(e, C0(e, r, t), n).on("end.style." + e, null);
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
function R0(e) {
  return function() {
    this.textContent = e;
  };
}
function M0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function N0(e) {
  return this.tween("text", typeof e == "function" ? M0(pl(this, "text", e)) : R0(e == null ? "" : e + ""));
}
function V0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function L0(e) {
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
  return this.tween(t, L0(e));
}
function z0() {
  for (var e = this._name, t = this._id, n = kd(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = Ln(l, t);
        Ia(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new vr(r, this._parents, e, n);
}
function D0() {
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
var H0 = 0;
function vr(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function kd() {
  return ++H0;
}
var nr = gi.prototype;
vr.prototype = {
  constructor: vr,
  select: w0,
  selectAll: b0,
  selectChild: nr.selectChild,
  selectChildren: nr.selectChildren,
  filter: f0,
  merge: v0,
  selection: _0,
  transition: z0,
  call: nr.call,
  nodes: nr.nodes,
  node: nr.node,
  size: nr.size,
  empty: nr.empty,
  each: nr.each,
  on: h0,
  attr: U1,
  attrTween: t0,
  style: E0,
  styleTween: T0,
  text: N0,
  textTween: A0,
  remove: y0,
  tween: j1,
  delay: o0,
  duration: s0,
  ease: u0,
  easeVarying: d0,
  end: D0,
  [Symbol.iterator]: nr[Symbol.iterator]
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
function Y0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function j0(e) {
  var t, n;
  e instanceof vr ? (t = e._id, e = e._name) : (t = kd(), (n = B0).time = fl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && Ia(l, e, t, u, i, n || Y0(l, t));
  return new vr(r, this._parents, e, t);
}
gi.prototype.interrupt = I1;
gi.prototype.transition = j0;
const Bi = (e) => () => e;
function Z0(e, {
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
var Ba = new or(1, 0, 0);
Sd.prototype = or.prototype;
function Sd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ba;
  return e.__zoom;
}
function cs(e) {
  e.stopImmediatePropagation();
}
function jo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function W0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function X0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ou() {
  return this.__zoom || Ba;
}
function K0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function F0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function q0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Ed() {
  var e = W0, t = X0, n = q0, r = K0, o = F0, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = M1, u = za("start", "zoom", "end"), c, d, f, v = 500, m = 150, _ = 0, x = 10;
  function E(P) {
    P.property("__zoom", Ou).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", W).on("touchmove.zoom", Y).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(P, M, k, C) {
    var A = P.selection ? P.selection() : P;
    A.property("__zoom", Ou), P !== A ? S(P, M, k, C) : A.interrupt().each(function() {
      O(this, arguments).event(C).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, E.scaleBy = function(P, M, k, C) {
    E.scaleTo(P, function() {
      var A = this.__zoom.k, H = typeof M == "function" ? M.apply(this, arguments) : M;
      return A * H;
    }, k, C);
  }, E.scaleTo = function(P, M, k, C) {
    E.transform(P, function() {
      var A = t.apply(this, arguments), H = this.__zoom, K = k == null ? b(A) : typeof k == "function" ? k.apply(this, arguments) : k, R = H.invert(K), I = typeof M == "function" ? M.apply(this, arguments) : M;
      return n($(h(H, I), K, R), A, i);
    }, k, C);
  }, E.translateBy = function(P, M, k, C) {
    E.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), i);
    }, null, C);
  }, E.translateTo = function(P, M, k, C, A) {
    E.transform(P, function() {
      var H = t.apply(this, arguments), K = this.__zoom, R = C == null ? b(H) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Ba.translate(R[0], R[1]).scale(K.k).translate(
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
  function S(P, M, k, C) {
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
      var M = bn(this.that).datum();
      u.call(
        P,
        this.that,
        new Z0(P, {
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
    var k = O(this, M).event(P), C = this.__zoom, A = Math.max(a[0], Math.min(a[1], C.k * Math.pow(2, r.apply(this, arguments)))), H = En(P);
    if (k.wheel)
      (k.mouse[0][0] !== H[0] || k.mouse[0][1] !== H[1]) && (k.mouse[1] = C.invert(k.mouse[0] = H)), clearTimeout(k.wheel);
    else {
      if (C.k === A) return;
      k.mouse = [H, C.invert(H)], Ui(this), k.start();
    }
    jo(P), k.wheel = setTimeout(K, m), k.zoom("mouse", n($(h(C, A), k.mouse[0], k.mouse[1]), k.extent, i));
    function K() {
      k.wheel = null, k.end();
    }
  }
  function z(P, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var k = P.currentTarget, C = O(this, M, !0).event(P), A = bn(P.view).on("mousemove.zoom", I, !0).on("mouseup.zoom", ne, !0), H = En(P, k), K = P.clientX, R = P.clientY;
    cd(P.view), cs(P), C.mouse = [H, this.__zoom.invert(H)], Ui(this), C.start();
    function I(J) {
      if (jo(J), !C.moved) {
        var Z = J.clientX - K, se = J.clientY - R;
        C.moved = Z * Z + se * se > _;
      }
      C.event(J).zoom("mouse", n($(C.that.__zoom, C.mouse[0] = En(J, k), C.mouse[1]), C.extent, i));
    }
    function ne(J) {
      A.on("mousemove.zoom mouseup.zoom", null), dd(J.view, C.moved), jo(J), C.event(J).end();
    }
  }
  function D(P, ...M) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, C = En(P.changedTouches ? P.changedTouches[0] : P, this), A = k.invert(C), H = k.k * (P.shiftKey ? 0.5 : 2), K = n($(h(k, H), C, A), t.apply(this, M), i);
      jo(P), s > 0 ? bn(this).transition().duration(s).call(S, K, C, P) : bn(this).call(E.transform, K, C, P);
    }
  }
  function W(P, ...M) {
    if (e.apply(this, arguments)) {
      var k = P.touches, C = k.length, A = O(this, M, P.changedTouches.length === C).event(P), H, K, R, I;
      for (cs(P), K = 0; K < C; ++K)
        R = k[K], I = En(R, this), I = [I, this.__zoom.invert(I), R.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== I[2] && (A.touch1 = I, A.taps = 0) : (A.touch0 = I, H = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (A.taps < 2 && (d = I[0], c = setTimeout(function() {
        c = null;
      }, v)), Ui(this), A.start());
    }
  }
  function Y(P, ...M) {
    if (this.__zooming) {
      var k = O(this, M).event(P), C = P.changedTouches, A = C.length, H, K, R, I;
      for (jo(P), H = 0; H < A; ++H)
        K = C[H], R = En(K, this), k.touch0 && k.touch0[2] === K.identifier ? k.touch0[0] = R : k.touch1 && k.touch1[2] === K.identifier && (k.touch1[0] = R);
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
      for (cs(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), H = 0; H < A; ++H)
        K = C[H], k.touch0 && k.touch0[2] === K.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === K.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (K = En(K, this), Math.hypot(d[0] - K[0], d[1] - K[1]) < x)) {
        var R = bn(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Bi(+P), E) : r;
  }, E.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Bi(!!P), E) : e;
  }, E.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Bi(!!P), E) : o;
  }, E.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Bi([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), E) : t;
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
    return arguments.length ? (_ = (P = +P) * P, E) : Math.sqrt(_);
  }, E.tapDistance = function(P) {
    return arguments.length ? (x = +P, E) : x;
  }, E;
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
}, pa = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Br;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Br || (Br = {}));
var Er;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Er || (Er = {}));
var ga;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ga || (ga = {}));
const As = {
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
var ai;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ai || (ai = {}));
var ze;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ze || (ze = {}));
const Tu = {
  [ze.Left]: ze.Right,
  [ze.Right]: ze.Left,
  [ze.Top]: ze.Bottom,
  [ze.Bottom]: ze.Top
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
function Ru(e, t, n) {
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
const J0 = (e) => "id" in e && "source" in e && "target" in e, Q0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), gl = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), mi = (e, t = [0, 0]) => {
  const { width: n, height: r } = Nr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, em = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : gl(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? ha(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ja(n);
}, yi = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ha(r);
      n = Ya(n, o);
    }
  }), ja(n);
}, Pd = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...wi(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, m = c.height ?? u.height ?? u.initialHeight ?? null, _ = si(s, _o(u)), x = (v ?? 0) * (m ?? 0), E = a && _ > 0;
    (!u.internals.handleBounds || E || _ >= x || u.dragging) && l.push(u);
  }
  return l;
}, zs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Mu(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Nu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = yi(e), l = ml(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function tm({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
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
  const f = $o(d) ? Yr(t, d, i.measured) : t;
  return {
    position: {
      x: f.x - l + i.measured.width * c[0],
      y: f.y - u + i.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Od({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((m) => m.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = zs(i, l);
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
const xo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Yr = (e = { x: 0, y: 0 }, t, n) => ({
  x: xo(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: xo(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Td(e, t, n) {
  const { width: r, height: o } = Nr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return Yr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Vu = (e, t, n) => e < t ? xo(Math.abs(e - t), 1, t) / t : e > n ? -xo(Math.abs(e - n), 1, t) / t : 0, Rd = (e, t, n = 15, r = 40) => {
  const o = Vu(e.x, r, t.width - r) * n, a = Vu(e.y, r, t.height - r) * n;
  return [o, a];
}, Ya = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ds = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ja = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), _o = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = gl(e) ? e.internals.positionAbsolute : mi(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ha = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = gl(e) ? e.internals.positionAbsolute : mi(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Md = (e, t) => ja(Ya(Ds(e), Ds(t))), si = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Lu = (e) => ir(e.width) && ir(e.height) && ir(e.x) && ir(e.y), ir = (e) => !isNaN(e) && isFinite(e), Nd = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, hl = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), wi = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? hl(s, i) : s;
}, Vd = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ml = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = xo(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, ma = () => {
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
function Ld(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function nm(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function ds(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = ur(e), s = wi({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? hl(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const yl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), rm = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, om = ["INPUT", "SELECT", "TEXTAREA"];
function im(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : om.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ad = (e) => "clientX" in e, ur = (e, t) => {
  var n, r;
  const o = Ad(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
      ...yl(i)
    };
  });
};
function am({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function zu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
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
function zd({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: a = ze.Top, curvature: i = 0.25 }) {
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
  }), [d, f, v, m] = am({
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
function Dd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function sm({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function lm({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = Ya(ha(e), ha(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return si(i, ja(a)) > 0;
}
const um = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, cm = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), dm = (e, t) => {
  if (!e.source || !e.target)
    return Nd("006", Ro.error006()), t;
  let n;
  return J0(e) ? n = { ...e } : n = {
    ...e,
    id: um(e)
  }, cm(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Hs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Dd({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const Du = {
  [ze.Left]: { x: -1, y: 0 },
  [ze.Right]: { x: 1, y: 0 },
  [ze.Top]: { x: 0, y: -1 },
  [ze.Bottom]: { x: 0, y: 1 }
}, fm = ({ source: e, sourcePosition: t = ze.Bottom, target: n }) => t === ze.Left || t === ze.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Hu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function vm({ source: e, sourcePosition: t = ze.Bottom, target: n, targetPosition: r = ze.Top, center: o, offset: a }) {
  const i = Du[t], s = Du[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = fm({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], m, _;
  const x = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [h, $, b, S] = Dd({
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
      const Y = Math.abs(e[d] - n[d]);
      if (Y <= a) {
        const X = Math.min(a - 1, a - Y);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * X : E[d] = (u[d] > n[d] ? -1 : 1) * X;
      }
    }
    if (t !== r) {
      const Y = d === "x" ? "y" : "x", X = i[d] === s[Y], P = l[Y] > u[Y], M = l[Y] < u[Y];
      (i[d] === 1 && (!X && P || X && M) || i[d] !== 1 && (!X && M || X && P)) && (v = d === "x" ? O : T);
    }
    const N = { x: l.x + x.x, y: l.y + x.y }, z = { x: u.x + E.x, y: u.y + E.y }, D = Math.max(Math.abs(N.x - v[0].x), Math.abs(z.x - v[0].x)), W = Math.max(Math.abs(N.y - v[0].y), Math.abs(z.y - v[0].y));
    D >= W ? (m = (N.x + z.x) / 2, _ = v[0].y) : (m = v[0].x, _ = (N.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], m, _, b, S];
}
function pm(e, t, n, r) {
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
function ya({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: a = ze.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, m] = vm({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((_, x, E) => {
    let h = "";
    return E > 0 && E < c.length - 1 ? h = pm(c[E - 1], x, c[E + 1], i) : h = `${E === 0 ? "M" : "L"}${x.x} ${x.y}`, _ += h, _;
  }, ""), d, f, v, m];
}
function Iu(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function gm(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Iu(n) || !Iu(r))
    return null;
  const o = n.internals.handleBounds || Bu(n.handles), a = r.internals.handleBounds || Bu(r.handles), i = Yu((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Yu(
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
  const l = (i == null ? void 0 : i.position) || ze.Bottom, u = (s == null ? void 0 : s.position) || ze.Top, c = li(n, i, l), d = li(r, s, u);
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
function li(e, t, n = ze.Left, r = !1) {
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
function Is(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function hm(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Is(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function mm(e, t, n, r, o) {
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
const wl = {
  nodeOrigin: [0, 0],
  nodeExtent: pa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, ym = {
  ...wl,
  checkEquality: !0
};
function bl(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function wm(e, t, n) {
  const r = bl(wl, n);
  for (const o of e.values())
    if (o.parentId)
      xl(o, e, t, r);
    else {
      const a = mi(o, r.nodeOrigin), i = $o(o.extent) ? o.extent : r.nodeExtent, s = Yr(a, i, Nr(o));
      o.internals.positionAbsolute = s;
    }
}
function Hd(e, t, n, r) {
  var o, a;
  const i = bl(ym, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = mi(u, i.nodeOrigin), f = $o(u.extent) ? u.extent : i.nodeExtent, v = Yr(d, f, Nr(u));
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
          z: Id(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && xl(c, t, n, r);
  }
}
function bm(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function xl(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = bl(wl, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  bm(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = xm(e, l, a, i, u), { positionAbsolute: v } = e.internals, m = c !== v.x || d !== v.y;
  (m || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Id(e, t) {
  return (ir(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function xm(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = Nr(e), l = mi(e, n), u = $o(e.extent) ? Yr(l, e.extent, s) : l;
  let c = Yr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Td(c, s, t));
  const d = Id(e, o), f = t.internals.z ?? 0;
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
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? _o(l), c = Md(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = Nr(l), v = l.origin ?? r, m = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, _ = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), E = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], $ = (E - f.height) * v[1];
    (m > 0 || _ > 0 || h || $) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - m + h,
        y: l.position.y - _ + $
      }
    }), (c = n.get(u)) == null || c.forEach((b) => {
      e.some((S) => S.id === b.id) || a.push({
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
        height: E + (_ ? v[1] * _ - $ : 0)
      }
    });
  }), a;
}
function $m(e, t, n, r, o, a) {
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
    const m = yl(f.nodeElement), _ = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (_ || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), E = $o(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Td(h, m, t.get(v.parentId)) : E && (h = Yr(h, E, m));
      const $ = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Au("source", f.nodeElement, x, c, v.id),
            target: Au("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && xl($, t, n, { nodeOrigin: o }), s = !0, _ && (l.push({
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
    const f = _m(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Cm({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function ju(e, t, n, r, o, a) {
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
function Bd(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    ju("source", l, c, e, o, i), ju("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function km(e, t) {
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
function Yd(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Yd(n, t) : !1;
}
function Zu(e, t, n) {
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
    if ((i.selected || i.id === r) && (!i.parentId || !Yd(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
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
function Em({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function m({ noDragClassName: x, handleSelector: E, domNode: h, isSelectable: $, nodeId: b, nodeClickDistance: S = 0 }) {
    f = bn(h);
    function O({ x: D, y: W }, Y) {
      const { nodeLookup: X, nodeExtent: P, snapGrid: M, snapToGrid: k, nodeOrigin: C, onNodeDrag: A, onSelectionDrag: H, onError: K, updateNodePositions: R } = t();
      a = { x: D, y: W };
      let I = !1, ne = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const J = yi(s);
        ne = Ds(J);
      }
      for (const [J, Z] of s) {
        if (!X.has(J))
          continue;
        let se = { x: D - Z.distance.x, y: W - Z.distance.y };
        k && (se = hl(se, M));
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
        const { position: ve, positionAbsolute: ue } = tm({
          nodeId: J,
          nextPosition: se,
          nodeLookup: X,
          nodeExtent: ge,
          nodeOrigin: C,
          onError: K
        });
        I = I || Z.position.x !== ve.x || Z.position.y !== ve.y, Z.position = ve, Z.internals.positionAbsolute = ue;
      }
      if (I && (R(s, !0), Y && (r || A || !b && H))) {
        const [J, Z] = fs({
          nodeId: b,
          dragItems: s,
          nodeLookup: X
        });
        r == null || r(Y, s, J, Z), A == null || A(Y, J, Z), b || H == null || H(Y, Z);
      }
    }
    async function T() {
      if (!c)
        return;
      const { transform: D, panBy: W, autoPanSpeed: Y, autoPanOnNodeDrag: X } = t();
      if (!X) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, M] = Rd(u, c, Y);
      (P !== 0 || M !== 0) && (a.x = (a.x ?? 0) - P / D[2], a.y = (a.y ?? 0) - M / D[2], await W({ x: P, y: M }) && O(a, null)), i = requestAnimationFrame(T);
    }
    function N(D) {
      var W;
      const { nodeLookup: Y, multiSelectionActive: X, nodesDraggable: P, transform: M, snapGrid: k, snapToGrid: C, selectNodesOnDrag: A, onNodeDragStart: H, onSelectionDragStart: K, unselectNodesAndEdges: R } = t();
      d = !0, (!A || !$) && !X && b && ((W = Y.get(b)) != null && W.selected || R()), $ && A && b && (e == null || e(b));
      const I = ds(D.sourceEvent, { transform: M, snapGrid: k, snapToGrid: C, containerBounds: c });
      if (a = I, s = Sm(Y, P, I, b), s.size > 0 && (n || H || !b && K)) {
        const [ne, J] = fs({
          nodeId: b,
          dragItems: s,
          nodeLookup: Y
        });
        n == null || n(D.sourceEvent, s, ne, J), H == null || H(D.sourceEvent, ne, J), b || K == null || K(D.sourceEvent, J);
      }
    }
    const z = a1().clickDistance(S).on("start", (D) => {
      const { domNode: W, nodeDragThreshold: Y, transform: X, snapGrid: P, snapToGrid: M } = t();
      c = (W == null ? void 0 : W.getBoundingClientRect()) || null, v = !1, Y === 0 && N(D), a = ds(D.sourceEvent, { transform: X, snapGrid: P, snapToGrid: M, containerBounds: c }), u = ur(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: W, transform: Y, snapGrid: X, snapToGrid: P, nodeDragThreshold: M, nodeLookup: k } = t(), C = ds(D.sourceEvent, { transform: Y, snapGrid: X, snapToGrid: P, containerBounds: c });
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
        const { nodeLookup: W, updateNodePositions: Y, onNodeDragStop: X, onSelectionDragStop: P } = t();
        if (Y(s, !1), o || X || !b && P) {
          const [M, k] = fs({
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
      return !D.button && (!x || !Zu(W, `.${x}`, h)) && (!E || Zu(W, E, h));
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
function Pm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    si(o, _o(a)) > 0 && r.push(a);
  return r;
}
const Om = 250;
function Tm(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Pm(e, n, t + Om);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = li(u, d, d.position, !0), m = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
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
function jd(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...li(u, d, d.position, !0) } : d;
}
function Zd(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Rm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Wd = () => !0;
function Mm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: _, onConnectEnd: x, isValidConnection: E = Wd, onReconnectEnd: h, updateConnection: $, getTransform: b, getFromHandle: S, autoPanSpeed: O }) {
  const T = rm(e.target);
  let N = 0, z;
  const { x: D, y: W } = ur(e), Y = T == null ? void 0 : T.elementFromPoint(D, W), X = Zd(a, Y), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !X)
    return;
  const M = jd(o, X, r, l, t);
  if (!M)
    return;
  let k = ur(e, P), C = !1, A = null, H = !1, K = null;
  function R() {
    if (!c || !P)
      return;
    const [ve, ue] = Rd(k, P, O);
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
    from: li(ne, I, ze.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: ne,
    to: k,
    toHandle: null,
    toPosition: Tu[I.position],
    toNode: null
  };
  $(J);
  let Z = J;
  m == null || m(e, { nodeId: o, handleId: r, handleType: X });
  function se(ve) {
    if (!S() || !I) {
      ge(ve);
      return;
    }
    const ue = b();
    k = ur(ve, P), z = Tm(wi(k, ue, !1, [1, 1]), n, l, I), C || (R(), C = !0);
    const ae = Xd(ve, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: E,
      doc: T,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    K = ae.handleDomNode, A = ae.connection, H = Rm(!!z, ae.isValid);
    const ye = {
      // from stays the same
      ...Z,
      isValid: H,
      to: z && H ? Vd({ x: z.x, y: z.y }, ue) : k,
      toHandle: ae.toHandle,
      toPosition: H && ae.toHandle ? ae.toHandle.position : Tu[I.position],
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
function Xd(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Wd, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: m } = ur(e), _ = i.elementFromPoint(v, m), x = _ != null && _.classList.contains(`${s}-flow__handle`) ? _ : f, E = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Zd(void 0, x), $ = x.getAttribute("data-nodeid"), b = x.getAttribute("data-handleid"), S = x.classList.contains("connectable"), O = x.classList.contains("connectableend");
    if (!$ || !h)
      return E;
    const T = {
      source: d ? $ : r,
      sourceHandle: d ? b : o,
      target: d ? r : $,
      targetHandle: d ? o : b
    };
    E.connection = T;
    const N = S && O && (n === Br.Strict ? d && h === "source" || !d && h === "target" : $ !== r || b !== o);
    E.isValid = N && u(T), E.toHandle = jd($, h, b, c, n, !1);
  }
  return E;
}
const Nm = {
  onPointerDown: Mm,
  isValid: Xd
};
function Vm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = bn(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = ($) => {
      const b = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const S = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, O = b[2] * Math.pow(2, S);
      t.scaleTo(O);
    };
    let _ = [0, 0];
    const x = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (_ = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, E = ($) => {
      const b = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], O = [S[0] - _[0], S[1] - _[1]];
      _ = S;
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
    }, h = Ed().on("start", x).on("zoom", d ? E : null).on("zoom.wheel", f ? m : null);
    o.call(h, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: En
  };
}
const Lm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Za = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), vs = ({ x: e, y: t, zoom: n }) => Ba.translate(e, t).scale(n), io = (e, t) => e.target.closest(`.${t}`), Kd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ps = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Fd = (e) => {
  const t = e.ctrlKey && ma() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Am({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (io(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = En(c), E = Fd(c), h = d * Math.pow(2, E);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === Er.Vertical ? 0 : c.deltaX * f, m = o === Er.Horizontal ? 0 : c.deltaY * f;
    !ma() && c.shiftKey && o !== Er.Vertical && (v = c.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(m / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Za(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function zm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || io(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Dm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Za(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function Hm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && Kd(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Za(a.transform)));
  };
}
function Im({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && Kd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Lm(e.prevViewport, i.transform))) {
      const l = Za(i.transform);
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
function Bm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
function Ym({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Ed().clickDistance(!ir(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = bn(e).call(f);
  $({
    x: a.x,
    y: a.y,
    zoom: xo(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = v.on("wheel.zoom"), _ = v.on("dblclick.zoom");
  f.wheelDelta(Fd);
  function x(Y, X) {
    return v ? new Promise((P) => {
      f == null || f.transform(ps(v, X == null ? void 0 : X.duration, () => P(!0)), Y);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: Y, noPanClassName: X, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: k, panOnDrag: C, panOnScrollMode: A, panOnScrollSpeed: H, preventScrolling: K, zoomOnPinch: R, zoomOnScroll: I, zoomOnDoubleClick: ne, zoomActivationKeyPressed: J, lib: Z, onTransformChange: se }) {
    M && !c.isZoomingOrPanning && h();
    const ge = k && !J && !M ? Am({
      zoomPanValues: c,
      noWheelClassName: Y,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: A,
      panOnScrollSpeed: H,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : zm({
      noWheelClassName: Y,
      preventScrolling: K,
      d3ZoomHandler: m
    });
    if (v.on("wheel.zoom", ge, { passive: !1 }), !M) {
      const ue = Dm({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ue);
      const ae = Hm({
        zoomPanValues: c,
        panOnDrag: C,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: se
      });
      f.on("zoom", ae);
      const ye = Im({
        zoomPanValues: c,
        panOnDrag: C,
        panOnScroll: k,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ye);
    }
    const ve = Bm({
      zoomActivationKeyPressed: J,
      panOnDrag: C,
      zoomOnScroll: I,
      panOnScroll: k,
      zoomOnDoubleClick: ne,
      zoomOnPinch: R,
      userSelectionActive: M,
      noPanClassName: X,
      noWheelClassName: Y,
      lib: Z
    });
    f.filter(ve), ne ? v.on("dblclick.zoom", _) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function $(Y, X, P) {
    const M = vs(Y), k = f == null ? void 0 : f.constrain()(M, X, P);
    return k && await x(k), new Promise((C) => C(k));
  }
  async function b(Y, X) {
    const P = vs(Y);
    return await x(P, X), new Promise((M) => M(P));
  }
  function S(Y) {
    if (v) {
      const X = vs(Y), P = v.property("__zoom");
      (P.k !== Y.zoom || P.x !== Y.x || P.y !== Y.y) && (f == null || f.transform(v, X, null, { sync: !0 }));
    }
  }
  function O() {
    const Y = v ? Sd(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: Y.x, y: Y.y, zoom: Y.k };
  }
  function T(Y, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(ps(v, X == null ? void 0 : X.duration, () => P(!0)), Y);
    }) : Promise.resolve(!1);
  }
  function N(Y, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(ps(v, X == null ? void 0 : X.duration, () => P(!0)), Y);
    }) : Promise.resolve(!1);
  }
  function z(Y) {
    f == null || f.scaleExtent(Y);
  }
  function D(Y) {
    f == null || f.translateExtent(Y);
  }
  function W(Y) {
    const X = !ir(Y) || Y < 0 ? 0 : Y;
    f == null || f.clickDistance(X);
  }
  return {
    update: E,
    destroy: h,
    setViewport: b,
    setViewportConstrained: $,
    getViewport: O,
    scaleTo: T,
    scaleBy: N,
    setScaleExtent: z,
    setTranslateExtent: D,
    syncViewport: S,
    setClickDistance: W
  };
}
var Wu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Wu || (Wu = {}));
var jm = /* @__PURE__ */ he('<div role="button" tabindex="-1"><!></div>');
function jr(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(ne, "$connectable", n), a = () => le(ve, "$connectionRadius", n), i = () => le(se, "$domNode", n), s = () => le(ge, "$nodeLookup", n), l = () => le(Z, "$connectionMode", n), u = () => le(ye, "$lib", n), c = () => le(me, "$autoPanOnConnect", n), d = () => le(it, "$flowId", n), f = () => le(ae, "$isValidConnectionStore", n), v = () => le(tt, "$onedgecreate", n), m = () => le(at, "$onConnectAction", n), _ = () => le(Ie, "$onConnectStartAction", n), x = () => le(et, "$onConnectEndAction", n), E = () => le(ue, "$viewport", n), h = () => le(dt, "$connection", n), $ = () => le($e, "$edges", n), b = () => le(Te, "$connectionLookup", n), S = fe(), O = fe(), T = fe(), N = fe(), z = fe(), D = fe(), W = fe(), Y = fe();
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
  function Et(Ne) {
    const $t = Ad(Ne);
    ($t && Ne.button === 0 || !$t) && Nm.onPointerDown(Ne, {
      handleId: p(T),
      nodeId: I,
      isTarget: p(S),
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
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ce = fe(null), Be = fe();
  _e(() => oe(P()), () => {
    ie(S, P() === "target");
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
      if (p(ce) && !U0(p(Be), p(ce))) {
        const Ne = p(Be) ?? /* @__PURE__ */ new Map();
        Ru(p(ce), Ne, H()), Ru(Ne, p(ce), A());
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
    ie(Y, p(D) && h().isValid);
  }), Wt(), qe();
  var pe = jm();
  xe(pe, "data-nodeid", I);
  var rn = te(pe);
  qt(rn, t, "default", {}), ee(pe), He(
    (Ne) => {
      xe(pe, "data-handleid", p(T)), xe(pe, "data-handlepos", M()), xe(pe, "data-id", `${d() ?? ""}-${I ?? ""}-${X() || ""}-${P() ?? ""}`), yo(pe, Gn(Ne)), xe(pe, "style", k()), Tt(pe, "valid", p(Y)), Tt(pe, "connectingto", p(D)), Tt(pe, "connectingfrom", p(z)), Tt(pe, "source", !p(S)), Tt(pe, "target", p(S)), Tt(pe, "connectablestart", p(O)), Tt(pe, "connectableend", p(O)), Tt(pe, "connectable", p(O)), Tt(pe, "connectionindicator", p(O) && (!p(N) || p(W)));
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
  ), gt("mousedown", pe, Et), gt("touchstart", pe, Et), j(e, pe);
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
  jr,
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
var Zm = /* @__PURE__ */ he("<!> <!>", 1);
function wa(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, ["data", "targetPosition", "sourcePosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), a = w(t, "sourcePosition", 12, void 0);
  qe();
  var i = Zm(), s = Me(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Top);
  jr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  });
  var u = G(s), c = G(u);
  const d = /* @__PURE__ */ Pe(() => a() ?? ze.Bottom);
  return jr(c, {
    type: "source",
    get position() {
      return p(d);
    }
  }), He(() => {
    var f;
    return Un(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), j(e, i), ke({
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
var Wm = /* @__PURE__ */ he(" <!>", 1);
function qd(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, ["data", "sourcePosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  qe(), ot();
  var a = Wm(), i = Me(a), s = G(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Bottom);
  return jr(s, {
    type: "source",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Un(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), j(e, a), ke({
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
be(qd, { data: {}, sourcePosition: {} }, [], [], !0);
var Xm = /* @__PURE__ */ he(" <!>", 1);
function Ud(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, ["data", "targetPosition"]), Ce(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  qe(), ot();
  var a = Xm(), i = Me(a), s = G(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? ze.Top);
  return jr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Un(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), j(e, a), ke({
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
be(Ud, { data: {}, targetPosition: {} }, [], [], !0);
function Gd(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, []);
}
be(Gd, {}, [], [], !0);
function Xu(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ba(e, { target: t, domNode: n }) {
  return Xu(e, n, t), {
    async update({ target: r, domNode: o }) {
      Xu(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Km = /* @__PURE__ */ he("<div><!></div>");
function Jd(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(a, "$domNode", n), { domNode: a } = mt();
  qe();
  var i = Km(), s = te(i);
  qt(s, t, "default", {}), ee(i), Ft(i, (l, u) => ba == null ? void 0 : ba(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), j(e, i), ke(), r();
}
be(Jd, {}, ["default"], [], !0);
function Qd() {
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
var Fm = /* @__PURE__ */ he('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function ef(e, t) {
  Ce(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const a = Qd(), i = Hr("svelteflow__edge_id");
  return qe(), Jd(e, {
    children: (s, l) => {
      var u = Fm(), c = te(u);
      qt(c, t, "default", {}), ee(u), He(() => {
        xe(u, "style", "pointer-events: all;" + n()), Mt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), gt("keyup", u, () => {
      }), gt("click", u, () => {
        i && a(i);
      }), j(s, u);
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
be(ef, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var qm = /* @__PURE__ */ De('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Um = /* @__PURE__ */ De('<path fill="none"></path><!><!>', 1);
function bi(e, t) {
  Ce(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), a = w(t, "labelX", 12, void 0), i = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  qe();
  var m = Um(), _ = Me(m), x = G(_);
  {
    var E = (b) => {
      var S = qm();
      xe(S, "stroke-opacity", 0), xe(S, "stroke-width", v), He(() => xe(S, "d", r())), j(b, S);
    };
    Le(x, (b) => {
      v && b(E);
    });
  }
  var h = G(x);
  {
    var $ = (b) => {
      ef(b, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (S, O) => {
          ot();
          var T = bt();
          He(() => Un(T, o())), j(S, T);
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
  ), j(e, m), ke({
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
  bi,
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
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, [
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
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(E())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(zd({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: E()
      }));
    }
  ), Wt(), qe(), bi(e, {
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
      return E();
    },
    set targetPosition(h) {
      E(h), y();
    }
  });
}
be(
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
function tf(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, [
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
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(E())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(ya({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: E()
      }));
    }
  ), Wt(), qe(), bi(e, {
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
      return E();
    },
    set targetPosition(h) {
      E(h), y();
    }
  });
}
be(
  tf,
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
function nf(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, [
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
      ((x) => (ie(r, x[0]), ie(o, x[1]), ie(a, x[2])))(Hs({
        sourceX: f(),
        sourceY: v(),
        targetX: m(),
        targetY: _()
      }));
    }
  ), Wt(), qe(), bi(e, {
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
  nf,
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
function rf(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  St(n, [
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
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return _e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(_()), oe(x()), oe(m()), oe(E())),
    () => {
      ((h) => (ie(r, h[0]), ie(o, h[1]), ie(a, h[2])))(ya({
        sourceX: f(),
        sourceY: v(),
        targetX: _(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), Wt(), qe(), bi(e, {
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
      return E();
    },
    set targetPosition(h) {
      E(h), y();
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
function Gm(e, t) {
  const n = e.set, r = t.set, o = Q(e), a = Q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function Jm(e, t) {
  const n = e.set, r = t.set;
  let o = Q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const Qm = (e, t, n) => {
  if (!n)
    return;
  const r = Q(e), o = t.set, a = n.set;
  let i = n ? Q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, ey = (e, t, n, r = [0, 0], o = pa) => {
  const { subscribe: a, set: i, update: s } = Oe([]);
  let l = e, u = {}, c = !0;
  const d = (_) => (Hd(_, t, n, {
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
}, ty = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = Oe([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((m) => ({ ...l, ...m })) : f;
    Bd(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, of = {
  input: qd,
  output: Ud,
  default: wa,
  group: Gd
}, af = {
  straight: nf,
  smoothstep: tf,
  default: xa,
  step: rf
}, ny = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? pa;
  Hd(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Bd(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const m = yi(s, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    v = ml(m, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Oe(null),
    nodes: ey(e, s, l, d, f),
    nodeLookup: wn(s),
    parentLookup: wn(l),
    edgeLookup: wn(c),
    visibleNodes: wn([]),
    edges: ty(t, u, c),
    visibleEdges: wn([]),
    connectionLookup: wn(u),
    height: Oe(500),
    width: Oe(500),
    minZoom: Oe(0.5),
    maxZoom: Oe(2),
    nodeOrigin: Oe(d),
    nodeDragThreshold: Oe(1),
    nodeExtent: Oe(f),
    translateExtent: Oe(pa),
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
    selectionMode: Oe(ga.Partial),
    nodeTypes: Oe(of),
    edgeTypes: Oe(af),
    viewport: Oe(v),
    connectionMode: Oe(Br.Strict),
    domNode: Oe(null),
    connection: wn(As),
    connectionLineType: Oe(fo.Bezier),
    connectionRadius: Oe(20),
    isValidConnection: Oe(() => !0),
    nodesDraggable: Oe(!0),
    nodesConnectable: Oe(!0),
    elementsSelectable: Oe(!0),
    selectNodesOnDrag: Oe(!0),
    markers: wn([]),
    defaultMarkerColor: Oe("#b1b1b7"),
    lib: wn("svelte"),
    onlyRenderVisibleElements: Oe(!1),
    onerror: Oe(Nd),
    ondelete: Oe(void 0),
    onedgecreate: Oe(void 0),
    onconnect: Oe(void 0),
    onconnectstart: Oe(void 0),
    onconnectend: Oe(void 0),
    onbeforedelete: Oe(void 0),
    nodesInitialized: Oe(!1),
    edgesInitialized: Oe(!1),
    viewportInitialized: Oe(!1),
    initialized: wn(!1)
  };
};
function ry(e) {
  const t = Sr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && lm({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Sr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = gm({
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
      zIndex: sm({
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
function oy(e) {
  return Sr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? Pd(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Wa = Symbol();
function sf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = ny({
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
      ...of,
      ...k
    });
  }
  function u(k) {
    s.edgeTypes.set({
      ...af,
      ...k
    });
  }
  function c(k) {
    const C = Q(s.edges);
    s.edges.set(dm(k, C));
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
    const K = Q(s.nodeLookup), R = Q(s.parentLookup), { changes: I, updatedInternals: ne } = $m(k, K, Q(s.parentLookup), Q(s.domNode), Q(s.nodeOrigin));
    if (ne) {
      if (wm(K, R, { nodeOrigin: a, nodeExtent: i }), !Q(s.fitViewOnInitDone) && Q(s.fitViewOnInit)) {
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
    const { width: H, height: K } = yl(A), R = Mu(Q(s.nodeLookup), k);
    return Nu({
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
    const A = Mu(Q(s.nodeLookup), k);
    return Nu({
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
  function E(k) {
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
  function S(k) {
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
    S((k == null ? void 0 : k.nodes) || Q(s.nodes)) && s.nodes.set(Q(s.nodes)), S((k == null ? void 0 : k.edges) || Q(s.edges)) && s.edges.set(Q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var C;
    if (k) {
      const A = Q(s.nodes), H = Q(s.edges), K = A.filter((J) => J.selected), R = H.filter((J) => J.selected), { nodes: I, edges: ne } = await Od({
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
    return Cm({
      delta: k,
      panZoom: Q(s.panZoom),
      transform: [C.x, C.y, C.zoom],
      translateExtent: Q(s.translateExtent),
      width: Q(s.width),
      height: Q(s.height)
    });
  }
  const Y = Oe(As), X = (k) => {
    Y.set({ ...k });
  };
  function P() {
    Y.set(As);
  }
  function M() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), T(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: ry(s),
    visibleNodes: oy(s),
    connection: Sr([Y, s.viewport], ([k, C]) => k.inProgress ? {
      ...k,
      to: wi(k.to, [C.x, C.y, C.zoom])
    } : { ...k }),
    markers: Sr([s.edges, s.defaultMarkerColor, s.flowId], ([k, C, A]) => hm(k, { defaultColor: C, id: A })),
    initialized: (() => {
      let k = !1;
      const C = Q(s.nodes).length, A = Q(s.edges).length;
      return Sr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, K, R]) => k || (C === 0 ? k = R : A === 0 ? k = R && H : k = R && H && K, k));
    })(),
    // actions
    syncNodeStores: (k) => Gm(s.nodes, k),
    syncEdgeStores: (k) => Jm(s.edges, k),
    syncViewport: (k) => Qm(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: E,
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
  const e = Hr(Wa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function iy({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = sf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return ho(Wa, {
    getStore: () => s
  }), s;
}
function Ku(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = Ym({
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
var ay = /* @__PURE__ */ he('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const sy = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function lf(e, t) {
  Ce(t, !1), Rt(e, sy);
  const [n, r] = _t(), o = () => le(A, "$panActivationKeyPressed", n), a = () => le(X, "$minZoom", n), i = () => le(P, "$maxZoom", n), s = () => le(H, "$zoomActivationKeyPressed", n), l = () => le(Y, "$selectionRect", n), u = () => le(k, "$translateExtent", n), c = () => le(C, "$lib", n), d = fe(), f = fe(), v = fe();
  let m = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), h = w(t, "panOnScrollMode", 12), $ = w(t, "preventScrolling", 12), b = w(t, "zoomOnScroll", 12), S = w(t, "zoomOnDoubleClick", 12), O = w(t, "zoomOnPinch", 12), T = w(t, "panOnDrag", 12), N = w(t, "panOnScroll", 12), z = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: W,
    selectionRect: Y,
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
    sa(K, !0);
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
  var I = ay(), ne = te(I);
  qt(ne, t, "default", {}), ee(I), Ft(I, (Z, se) => Ku == null ? void 0 : Ku(Z, se), () => ({
    viewport: D,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: p(d),
    dragging: M,
    panZoom: W,
    onPanZoomStart: _(),
    onPanZoom: x(),
    onPanZoomEnd: E(),
    zoomOnScroll: b(),
    zoomOnDoubleClick: S(),
    zoomOnPinch: O(),
    panOnScroll: p(v),
    panOnDrag: p(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || Er.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: R
  })), j(e, I);
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
      return E();
    },
    set onMoveEnd(Z) {
      E(Z), y();
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
      return S();
    },
    set zoomOnDoubleClick(Z) {
      S(Z), y();
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
  lf,
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
function Fu(e, t) {
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
var ly = /* @__PURE__ */ he('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const uy = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function uf(e, t) {
  Ce(t, !1), Rt(e, uy);
  const [n, r] = _t(), o = () => le(P, "$panActivationKeyPressed", n), a = () => le(Y, "$selectionKeyPressed", n), i = () => le(D, "$selectionRect", n), s = () => le(z, "$elementsSelectable", n), l = () => le(W, "$selectionRectMode", n), u = () => le(O, "$edges", n), c = () => le(S, "$nodeLookup", n), d = () => le(T, "$viewport", n), f = () => le(X, "$selectionMode", n), v = () => le(N, "$dragging", n), m = fe(), _ = fe(), x = fe();
  let E = w(t, "panOnDrag", 12, void 0), h = w(t, "selectionOnDrag", 12, void 0);
  const $ = Aa(), {
    nodes: b,
    nodeLookup: S,
    edges: O,
    viewport: T,
    dragging: N,
    elementsSelectable: z,
    selectionRect: D,
    selectionRectMode: W,
    selectionKeyPressed: Y,
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
    }, Qe = A.map((Te) => Te.id), q = zs(A, u()).map((Te) => Te.id);
    A = Pd(
      c(),
      Ge,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === ga.Partial,
      !0
    );
    const me = zs(A, u()).map((Te) => Te.id), $e = A.map((Te) => Te.id);
    (Qe.length !== $e.length || $e.some((Te) => !Qe.includes(Te))) && b.update((Te) => Te.map(qu($e))), (q.length !== me.length || me.some((Te) => !q.includes(Te))) && O.update((Te) => Te.map(qu(me))), W.set("user"), D.set(Ge);
  }
  function ne(ae) {
    var ye, Xe;
    ae.button === 0 && ((Xe = (ye = ae.target) == null ? void 0 : ye.releasePointerCapture) == null || Xe.call(ye, ae.pointerId), !p(_) && l() === "user" && ae.target === p(k) && (K == null || K(ae)), D.set(null), A.length > 0 && sa(W, "nodes"), a() && (H = !1));
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
    () => (o(), oe(E())),
    () => {
      ie(m, o() || E());
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
  var Z = ly(), se = /* @__PURE__ */ Je(() => p(x) ? void 0 : Fu(K, p(k))), ge = /* @__PURE__ */ Je(() => Fu(J, p(k))), ve = te(Z);
  qt(ve, t, "default", {}), ee(Z), fr(Z, (ae) => ie(k, ae), () => p(k)), He(
    (ae) => {
      Tt(Z, "draggable", ae), Tt(Z, "dragging", v()), Tt(Z, "selection", p(_));
    },
    [
      () => E() === !0 || Array.isArray(E()) && E().includes(0)
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
  }), j(e, Z);
  var ue = ke({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(ae) {
      E(ae), y();
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
be(uf, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var cy = /* @__PURE__ */ he('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const dy = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function cf(e, t) {
  Ce(t, !1), Rt(e, dy);
  const [n, r] = _t(), o = () => le(a, "$viewport", n), { viewport: a } = mt();
  qe();
  var i = cy(), s = te(i);
  qt(s, t, "default", {}), ee(i), He(() => xe(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), j(e, i), ke(), r();
}
be(cf, {}, ["default"], [], !0);
function _a(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Em({
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
function fy({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var vy = /* @__PURE__ */ he("<div><!></div>");
function df(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(ge, "$nodeTypes", n), a = () => le(Xe, "$elementsSelectable", n), i = () => le(tt, "$nodesDraggable", n), s = () => le(me, "$connectableStore", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0);
  let f = w(t, "node", 13), v = w(t, "id", 13), m = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), h = w(t, "connectable", 13, !0), $ = w(t, "deletable", 13, !0), b = w(t, "hidden", 13, !1), S = w(t, "dragging", 13, !1), O = w(t, "resizeObserver", 13, null), T = w(t, "style", 13, void 0), N = w(t, "type", 13, "default"), z = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), W = w(t, "positionY", 13), Y = w(t, "sourcePosition", 13, void 0), X = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), k = w(t, "measuredHeight", 13, void 0), C = w(t, "initialWidth", 13, void 0), A = w(t, "initialHeight", 13, void 0), H = w(t, "width", 13, void 0), K = w(t, "height", 13, void 0), R = w(t, "dragHandle", 13, void 0), I = w(t, "initialized", 13, !1), ne = w(t, "parentId", 13, void 0), J = w(t, "nodeClickDistance", 13, void 0), Z = w(t, "class", 13, "");
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
  const q = Aa(), me = Oe(h());
  let $e = fe(void 0, !0), Te = fe(void 0, !0), at = fe(void 0, !0);
  ho("svelteflow__node_id", v()), ho("svelteflow__node_connectable", me), sl(() => {
    var ce;
    p(Qe) && ((ce = O()) == null || ce.unobserve(p(Qe)));
  });
  function Ie(ce) {
    E() && (!Q(ue) || !x() || Q(ve) > 0) && ae(v()), q("nodeclick", { node: f().internals.userNode, event: ce });
  }
  _e(() => oe(N()), () => {
    ie(l, N() || "default");
  }), _e(() => (o(), p(l)), () => {
    ie(u, !!o()[p(l)]);
  }), _e(
    () => (o(), p(l), wa),
    () => {
      ie(c, o()[p(l)] || wa);
    }
  ), _e(
    () => (p(u), oe(N())),
    () => {
      p(u) || console.warn("003", Ro.error003(N()));
    }
  ), _e(
    () => (oe(H()), oe(K()), oe(C()), oe(A()), oe(M()), oe(k())),
    () => {
      ie(d, fy({
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
    () => (p($e), p(l), p(Te), oe(Y()), p(at), oe(X()), oe(v()), p(Ge)),
    () => {
      (p($e) && p(l) !== p($e) || p(Te) && Y() !== p(Te) || p(at) && X() !== p(at)) && requestAnimationFrame(() => ye(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: p(Ge),
            force: !0
          }
        ]
      ]))), ie($e, p(l)), ie(Te, Y()), ie(at, X());
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
      var Be = vy(), pe = te(Be);
      const rn = /* @__PURE__ */ Pe(() => _() ?? !1), Xt = /* @__PURE__ */ Pe(() => E() ?? a() ?? !0), Ne = /* @__PURE__ */ Pe(() => $() ?? !0), $t = /* @__PURE__ */ Pe(() => x() ?? i() ?? !0);
      Wc(pe, () => p(c), (Re, We) => {
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
            return Y();
          },
          get targetPosition() {
            return X();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return S();
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
      }), ee(Be), Ft(Be, (Re, We) => _a == null ? void 0 : _a(Re, We), () => ({
        nodeId: v(),
        isSelectable: E(),
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
      })), fr(Be, (Re) => ie(Ge, Re), () => p(Ge)), dn(() => gt("click", Be, Ie)), dn(() => gt("mouseenter", Be, (Re) => q("nodemouseenter", { node: f(), event: Re }))), dn(() => gt("mouseleave", Be, (Re) => q("nodemouseleave", { node: f(), event: Re }))), dn(() => gt("mousemove", Be, (Re) => q("nodemousemove", { node: f(), event: Re }))), dn(() => gt("contextmenu", Be, (Re) => q("nodecontextmenu", { node: f(), event: Re }))), He(
        (Re) => {
          xe(Be, "data-id", v()), yo(Be, Gn(Re)), xe(Be, "style", `${T() ?? ""};${p(d).width ?? ""}${p(d).height ?? ""}`), Tt(Be, "dragging", S()), Tt(Be, "selected", _()), Tt(Be, "draggable", x()), Tt(Be, "connectable", h()), Tt(Be, "selectable", E()), Tt(Be, "nopan", x()), Tt(Be, "parent", z()), Mt(Be, "z-index", P()), Mt(Be, "transform", `translate(${D() ?? ""}px, ${W() ?? ""}px)`), Mt(Be, "visibility", I() ? "visible" : "hidden");
        },
        [
          () => nn([
            "svelte-flow__node",
            `svelte-flow__node-${p(l)}`,
            Z()
          ])
        ],
        Pe
      ), j(ce, Be);
    };
    Le(it, (ce) => {
      b() || ce(dt);
    });
  }
  j(e, et);
  var Et = ke({
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
      return E();
    },
    set selectable(ce) {
      E(ce), y();
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
      return S();
    },
    set dragging(ce) {
      S(ce), y();
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
      return Y();
    },
    set sourcePosition(ce) {
      Y(ce), y();
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
  return r(), Et;
}
be(
  df,
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
var py = /* @__PURE__ */ he('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const gy = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function ff(e, t) {
  Ce(t, !1), Rt(e, gy);
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
    $.forEach((S) => {
      const O = S.target.getAttribute("data-id");
      b.set(O, { id: O, nodeElement: S.target, force: !0 });
    }), m(b);
  });
  sl(() => {
    x == null || x.disconnect();
  }), qe();
  var E = py();
  pn(E, 5, o, ($) => $.id, ($, b) => {
    const S = /* @__PURE__ */ Pe(() => !!p(b).selected), O = /* @__PURE__ */ Pe(() => !!p(b).hidden), T = /* @__PURE__ */ Pe(() => !!(p(b).draggable || a() && typeof p(b).draggable > "u")), N = /* @__PURE__ */ Pe(() => !!(p(b).selectable || i() && typeof p(b).selectable > "u")), z = /* @__PURE__ */ Pe(() => !!(p(b).connectable || s() && typeof p(b).connectable > "u")), D = /* @__PURE__ */ Pe(() => p(b).deletable ?? !0), W = /* @__PURE__ */ Pe(() => l().has(p(b).id)), Y = /* @__PURE__ */ Pe(() => p(b).type ?? "default"), X = /* @__PURE__ */ Pe(() => p(b).internals.z ?? 0), P = /* @__PURE__ */ Pe(() => Ld(p(b)));
    df($, {
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
        return p(S);
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
        return p(Y);
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
  }), ee(E), j(e, E);
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
be(ff, { nodeClickDistance: {} }, [], [], !0);
var hy = /* @__PURE__ */ De('<svg><g role="img"><!></g></svg>');
function vf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(Z, "$edgeTypes", n), a = () => le(se, "$flowId", n), i = () => le(ge, "$elementsSelectable", n), s = () => le(J, "$edgeLookup", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0), f = fe(void 0, !0);
  let v = w(t, "id", 13), m = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), x = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), h = w(t, "style", 13, void 0), $ = w(t, "zIndex", 13, void 0), b = w(t, "animated", 13, !1), S = w(t, "selected", 13, !1), O = w(t, "selectable", 13, void 0), T = w(t, "deletable", 13, void 0), N = w(t, "hidden", 13, !1), z = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), W = w(t, "markerStart", 13, void 0), Y = w(t, "markerEnd", 13, void 0), X = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), k = w(t, "sourceY", 13), C = w(t, "targetX", 13), A = w(t, "targetY", 13), H = w(t, "sourcePosition", 13), K = w(t, "targetPosition", 13), R = w(t, "ariaLabel", 13, void 0), I = w(t, "interactionWidth", 13, void 0), ne = w(t, "class", 13, "");
  ho("svelteflow__edge_id", v());
  const {
    edgeLookup: J,
    edgeTypes: Z,
    flowId: se,
    elementsSelectable: ge
  } = mt(), ve = Aa(), ue = Qd();
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
    () => (o(), p(l), xa),
    () => {
      ie(u, o()[p(l)] || xa);
    }
  ), _e(
    () => (oe(W()), a()),
    () => {
      ie(c, W() ? `url('#${Is(W(), a())}')` : void 0);
    }
  ), _e(
    () => (oe(Y()), a()),
    () => {
      ie(d, Y() ? `url('#${Is(Y(), a())}')` : void 0);
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
      var me = hy(), $e = te(me), Te = te($e);
      const at = /* @__PURE__ */ Pe(() => T() ?? !0);
      Wc(Te, () => p(u), (Ie, et) => {
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
            return S();
          },
          get label() {
            return z();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return E();
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
          Mt(me, "z-index", $()), Fr($e, Gn(Ie)), xe($e, "data-id", v()), xe($e, "aria-label", R() === null ? void 0 : R() ? R() : `Edge from ${_()} to ${x()}`), Tt($e, "animated", b()), Tt($e, "selected", S()), Tt($e, "selectable", p(f));
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
      }), j(q, me);
    };
    Le(tt, (q) => {
      N() || q(Ge);
    });
  }
  j(e, Xe);
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
      return E();
    },
    set data(q) {
      E(q), y();
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
      return S();
    },
    set selected(q) {
      S(q), y();
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
      return Y();
    },
    set markerEnd(q) {
      Y(q), y();
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
  vf,
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
function pf(e, t) {
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
be(pf, { onMount: {}, onDestroy: {} }, [], [], !0);
var my = /* @__PURE__ */ De("<defs></defs>");
function gf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(a, "$markers", n), { markers: a } = mt();
  qe();
  var i = my();
  pn(i, 5, o, (s) => s.id, (s, l) => {
    hf(s, en(() => p(l)));
  }), ee(i), j(e, i), ke(), r();
}
be(gf, {}, [], [], !0);
var yy = /* @__PURE__ */ De('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), wy = /* @__PURE__ */ De('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), by = /* @__PURE__ */ De('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function hf(e, t) {
  Ce(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), a = w(t, "height", 12, 12.5), i = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  qe();
  var c = by(), d = te(c);
  {
    var f = (m) => {
      var _ = yy();
      He(() => {
        xe(_, "stroke", l()), xe(_, "stroke-width", u());
      }), j(m, _);
    }, v = (m) => {
      var _ = ht(), x = Me(_);
      {
        var E = (h) => {
          var $ = wy();
          He(() => {
            xe($, "stroke", l()), xe($, "stroke-width", u()), xe($, "fill", l());
          }), j(h, $);
        };
        Le(
          x,
          (h) => {
            r() === ai.ArrowClosed && h(E);
          },
          !0
        );
      }
      j(m, _);
    };
    Le(d, (m) => {
      r() === ai.Arrow ? m(f) : m(v, !1);
    });
  }
  return ee(c), He(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${a()}`), xe(c, "markerUnits", i()), xe(c, "orient", s());
  }), j(e, c), ke({
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
  hf,
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
var xy = /* @__PURE__ */ he('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function mf(e, t) {
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
  var d = xy(), f = te(d), v = te(f);
  gf(v, {}), ee(f);
  var m = G(f, 2);
  pn(m, 1, o, (h) => h.id, (h, $) => {
    const b = /* @__PURE__ */ Pe(() => p($).selectable ?? a()), S = /* @__PURE__ */ Pe(() => p($).type || "default");
    vf(h, {
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
        return p(S);
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
      pf(h, {
        onMount: () => {
          sa(l, !0);
        },
        onDestroy: () => {
          sa(l, !1);
        }
      });
    };
    Le(_, (h) => {
      o().length > 0 && h(x);
    });
  }
  ee(d), j(e, d);
  var E = ke({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), y();
    }
  });
  return r(), E;
}
be(mf, { defaultEdgeOptions: {} }, [], [], !0);
var _y = /* @__PURE__ */ he('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const $y = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function _l(e, t) {
  Ce(t, !1), Rt(e, $y);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "isVisible", 12, !0);
  var s = ht(), l = Me(s);
  {
    var u = (c) => {
      var d = _y();
      He(() => {
        Mt(d, "width", typeof o() == "string" ? o() : `${o()}px`), Mt(d, "height", typeof a() == "string" ? a() : `${a()}px`), Mt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), j(c, d);
    };
    Le(l, (c) => {
      i() && c(u);
    });
  }
  return j(e, s), ke({
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
  _l,
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
function yf(e, t) {
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
  _l(e, {
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
be(yf, {}, [], [], !0);
var Cy = /* @__PURE__ */ he('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const ky = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function wf(e, t) {
  Ce(t, !1), Rt(e, ky);
  const [n, r] = _t(), o = () => le(l, "$selectionRectMode", n), a = () => le(c, "$nodeLookup", n), i = () => le(u, "$nodes", n), s = mt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Aa();
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
      o() === "nodes" && (ie(f, yi(a(), { filter: (h) => !!h.selected })), i());
    }
  ), Wt(), qe();
  var _ = ht(), x = Me(_);
  {
    var E = (h) => {
      var $ = Cy(), b = te($);
      _l(b, { width: "100%", height: "100%", x: 0, y: 0 }), ee($), Ft($, (S, O) => _a == null ? void 0 : _a(S, O), () => ({
        disabled: !1,
        store: s,
        onDrag: (S, O, T, N) => {
          d("nodedrag", { event: S, targetNode: null, nodes: N });
        },
        onDragStart: (S, O, T, N) => {
          d("nodedragstart", { event: S, targetNode: null, nodes: N });
        },
        onDragStop: (S, O, T, N) => {
          d("nodedragstop", { event: S, targetNode: null, nodes: N });
        }
      })), dn(() => gt("contextmenu", $, v)), dn(() => gt("click", $, m)), dn(() => gt("keyup", $, () => {
      })), He(() => xe($, "style", `width: ${p(f).width ?? ""}px; height: ${p(f).height ?? ""}px; transform: translate(${p(f).x ?? ""}px, ${p(f).y ?? ""}px)`)), j(h, $);
    };
    Le(x, (h) => {
      o() === "nodes" && p(f) && ir(p(f).x) && ir(p(f).y) && h(E);
    });
  }
  j(e, _), ke(), r();
}
be(wf, {}, [], [], !0);
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
          (x) => x.every((E) => l[E])
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
function bf(e, t) {
  Ce(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => ma() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), a = w(t, "panActivationKey", 12, " "), i = w(t, "zoomActivationKey", 28, () => ma() ? "Meta" : "Control");
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
      const S = _(b);
      return {
        key: S,
        modifier: m(b),
        enabled: S !== null,
        callback: $
      };
    });
  }
  function E() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return qe(), gt("blur", an, E), gt("contextmenu", an, E), Ft(an, (h, $) => Lt == null ? void 0 : Lt(h, $), () => ({
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
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !im(h.originalEvent) && u.set(!0);
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
  bf,
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
var Sy = /* @__PURE__ */ De('<path fill="none" class="svelte-flow__connection-path"></path>'), Ey = /* @__PURE__ */ De('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function xf(e, t) {
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
    () => (o(), oe(c()), a(), p(_), Hs),
    () => {
      if (o().inProgress && !c()) {
        const { from: b, to: S, fromPosition: O, toPosition: T } = o(), N = {
          sourceX: b.x,
          sourceY: b.y,
          sourcePosition: O,
          targetX: S.x,
          targetY: S.y,
          targetPosition: T
        };
        switch (a()) {
          case fo.Bezier:
            ((z) => ie(_, z[0]))(zd(N));
            break;
          case fo.Step:
            ((z) => ie(_, z[0]))(ya({ ...N, borderRadius: 0 }));
            break;
          case fo.SmoothStep:
            ((z) => ie(_, z[0]))(ya(N));
            break;
          default:
            ((z) => ie(_, z[0]))(Hs(N));
        }
      }
    }
  ), Wt(), qe();
  var x = ht(), E = Me(x);
  {
    var h = (b) => {
      var S = Ey(), O = te(S), T = te(O);
      qt(T, t, "connectionLine", {});
      var N = G(T);
      {
        var z = (D) => {
          var W = Sy();
          He(() => {
            xe(W, "d", p(_)), xe(W, "style", u());
          }), j(D, W);
        };
        Le(N, (D) => {
          c() || D(z);
        });
      }
      ee(O), ee(S), He(
        (D) => {
          xe(S, "width", i()), xe(S, "height", s()), xe(S, "style", l()), Fr(O, Gn(D));
        },
        [
          () => nn([
            "svelte-flow__connection",
            G0(o().isValid)
          ])
        ],
        Pe
      ), j(b, S);
    };
    Le(E, (b) => {
      o().inProgress && b(h);
    });
  }
  j(e, x);
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
  xf,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Py = /* @__PURE__ */ he("<div><!></div>");
function Xa(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = St(n, ["position", "style", "class"]);
  Ce(t, !1);
  const [o, a] = _t(), i = () => le(d, "$selectionRectMode", o), s = fe();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = mt();
  _e(() => oe(l()), () => {
    ie(s, `${l()}`.split("-"));
  }), Wt(), qe();
  var f = Py();
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
  ), j(e, f);
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
be(Xa, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Oy = /* @__PURE__ */ he('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function _f(e, t) {
  Ce(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  qe();
  var o = ht(), a = Me(o);
  {
    var i = (s) => {
      Xa(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Oy();
          j(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Le(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return j(e, o), ke({
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
be(_f, { proOptions: {}, position: {} }, [], [], !0);
function Uu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const Ty = (e) => Object.keys(e);
function Gu(e, t) {
  Ty(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Ry() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function My(e = "light") {
  return wn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Ry(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Ny = /* @__PURE__ */ he('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Vy = /* @__PURE__ */ he("<!> <!>", 1), Ly = /* @__PURE__ */ he("<div><!> <!> <!> <!></div>");
const Ay = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function $f(e, t) {
  const n = rg(t), r = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = St(r, [
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
  Ce(t, !1), Rt(e, Ay);
  const [a, i] = _t(), s = () => le($(), "$viewport", a), l = () => le(Dn, "$initialized", a), u = () => le(p(c), "$colorModeClass", a), c = fe();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), v = w(t, "edges", 12), m = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), h = w(t, "initialViewport", 12, void 0), $ = w(t, "viewport", 12, void 0), b = w(t, "nodeTypes", 12, void 0), S = w(t, "edgeTypes", 12, void 0), O = w(t, "selectionKey", 12, void 0), T = w(t, "selectionMode", 12, void 0), N = w(t, "panActivationKey", 12, void 0), z = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), W = w(t, "nodesDraggable", 12, void 0), Y = w(t, "nodesConnectable", 12, void 0), X = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), k = w(t, "deleteKey", 12, void 0), C = w(t, "connectionRadius", 12, void 0), A = w(t, "connectionLineType", 12, void 0), H = w(t, "connectionMode", 28, () => Br.Strict), K = w(t, "connectionLineStyle", 12, ""), R = w(t, "connectionLineContainerStyle", 12, ""), I = w(t, "onMoveStart", 12, void 0), ne = w(t, "onMove", 12, void 0), J = w(t, "onMoveEnd", 12, void 0), Z = w(t, "isValidConnection", 12, void 0), se = w(t, "translateExtent", 12, void 0), ge = w(t, "nodeExtent", 12, void 0), ve = w(t, "onlyRenderVisibleElements", 12, void 0), ue = w(t, "panOnScrollMode", 28, () => Er.Free), ae = w(t, "preventScrolling", 12, !0), ye = w(t, "zoomOnScroll", 12, !0), Xe = w(t, "zoomOnDoubleClick", 12, !0), tt = w(t, "zoomOnPinch", 12, !0), Ge = w(t, "panOnScroll", 12, !1), Qe = w(t, "panOnDrag", 12, !0), q = w(t, "selectionOnDrag", 12, void 0), me = w(t, "autoPanOnConnect", 12, !0), $e = w(t, "autoPanOnNodeDrag", 12, !0), Te = w(t, "onerror", 12, void 0), at = w(t, "ondelete", 12, void 0), Ie = w(t, "onedgecreate", 12, void 0), et = w(t, "attributionPosition", 12, void 0), it = w(t, "proOptions", 12, void 0), dt = w(t, "defaultEdgeOptions", 12, void 0), Et = w(t, "width", 12, void 0), ce = w(t, "height", 12, void 0), Be = w(t, "colorMode", 12, "light"), pe = w(t, "onconnect", 12, void 0), rn = w(t, "onconnectstart", 12, void 0), Xt = w(t, "onconnectend", 12, void 0), Ne = w(t, "onbeforedelete", 12, void 0), $t = w(t, "oninit", 12, void 0), Re = w(t, "nodeOrigin", 12, void 0), We = w(t, "paneClickDistance", 12, 0), lt = w(t, "nodeClickDistance", 12, 0), Bt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), zn = w(t, "style", 12, void 0), Cn = w(t, "class", 12, void 0), At = fe(), Pt = fe(), Yt = fe();
  const zt = s() || h(), yt = zp(Wa) ? mt() : iy({
    nodes: Q(f()),
    edges: Q(v()),
    width: Et(),
    height: ce(),
    fitView: m(),
    nodeOrigin: Re(),
    nodeExtent: ge()
  });
  qr(() => (yt.width.set(p(Pt)), yt.height.set(p(Yt)), yt.domNode.set(p(At)), yt.syncNodeStores(f()), yt.syncEdgeStores(v()), yt.syncViewport($()), m() !== void 0 && yt.fitViewOnInit.set(m()), _() && yt.fitViewOptions.set(_()), Uu(yt, {
    nodeTypes: b(),
    edgeTypes: S(),
    minZoom: x(),
    maxZoom: E(),
    translateExtent: se(),
    paneClickDistance: We()
  }), () => {
    yt.reset();
  }));
  const { initialized: Dn } = yt;
  let yn = fe(!1);
  _e(
    () => (p(Pt), p(Yt)),
    () => {
      p(Pt) !== void 0 && p(Yt) !== void 0 && (yt.width.set(p(Pt)), yt.height.set(p(Yt)));
    }
  ), _e(
    () => (p(yn), l(), oe($t())),
    () => {
      var B;
      !p(yn) && l() && ((B = $t()) == null || B(), ie(yn, !0));
    }
  ), _e(
    () => (oe(d()), oe(A()), oe(C()), oe(T()), oe(M()), oe(Bt()), oe(W()), oe(Y()), oe(P()), oe(ve()), oe(Z()), oe(me()), oe($e()), oe(Te()), oe(at()), oe(Ie()), oe(H()), oe(X()), oe(pe()), oe(rn()), oe(Xt()), oe(Ne()), oe(Re()), Gu),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: A(),
        connectionRadius: C(),
        selectionMode: T(),
        snapGrid: M(),
        defaultMarkerColor: Bt(),
        nodesDraggable: W(),
        nodesConnectable: Y(),
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
      Gu(yt, B);
    }
  ), _e(
    () => (oe(b()), oe(S()), oe(x()), oe(E()), oe(se()), oe(We())),
    () => {
      Uu(yt, {
        nodeTypes: b(),
        edgeTypes: S(),
        minZoom: x(),
        maxZoom: E(),
        translateExtent: se(),
        paneClickDistance: We()
      });
    }
  ), _e(
    () => oe(Be()),
    () => {
      dg(ie(c, My(Be())), "$colorModeClass", a);
    }
  ), Wt(), qe();
  var Gt = Ly();
  let Qn;
  var er = te(Gt);
  bf(er, {
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
  const tr = /* @__PURE__ */ Pe(() => ue() === void 0 ? Er.Free : ue()), yr = /* @__PURE__ */ Pe(() => ae() === void 0 ? !0 : ae()), Vr = /* @__PURE__ */ Pe(() => ye() === void 0 ? !0 : ye()), Vo = /* @__PURE__ */ Pe(() => Xe() === void 0 ? !0 : Xe()), Lo = /* @__PURE__ */ Pe(() => tt() === void 0 ? !0 : tt()), Ao = /* @__PURE__ */ Pe(() => Ge() === void 0 ? !1 : Ge()), zo = /* @__PURE__ */ Pe(() => Qe() === void 0 ? !0 : Qe()), L = /* @__PURE__ */ Pe(() => We() === void 0 ? 0 : We());
  lf(mr, {
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
      uf(B, {
        get panOnDrag() {
          return p(Ke);
        },
        get selectionOnDrag() {
          return q();
        },
        $$events: {
          paneclick(Ye) {
            rt.call(this, t, Ye);
          },
          panecontextmenu(Ye) {
            rt.call(this, t, Ye);
          }
        },
        children: (Ye, Ht) => {
          var pt = Vy(), wt = Me(pt);
          cf(wt, {
            children: (Hn, In) => {
              var Dt = Ny(), wr = Me(Dt);
              mf(wr, {
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
              xf(Jr, {
                get containerStyle() {
                  return R();
                },
                get style() {
                  return K();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ze, Ja) => {
                    var Do = ht(), Si = Me(Do);
                    qt(Si, t, "connectionLine", {}), j(Ze, Do);
                  }
                }
              });
              var Qr = G(Jr, 6);
              ff(Qr, {
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
              var Ga = G(Qr, 2);
              wf(Ga, {
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
              }), j(Hn, Dt);
            },
            $$slots: { default: !0 }
          });
          var Kt = G(wt, 2);
          yf(Kt, {}), j(Ye, pt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var re = G(mr, 2);
  _f(re, {
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
        Cn(),
        u()
      ])
    ],
    Pe
  ), uu(Gt, "clientWidth", (B) => ie(Pt, B)), uu(Gt, "clientHeight", (B) => ie(Yt, B)), gt("dragover", Gt, function(B) {
    rt.call(this, t, B);
  }), gt("drop", Gt, function(B) {
    rt.call(this, t, B);
  }), j(e, Gt);
  var Se = ke({
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
      return E();
    },
    set maxZoom(B) {
      E(B), y();
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
      return S();
    },
    set edgeTypes(B) {
      S(B), y();
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
      return Y();
    },
    set nodesConnectable(B) {
      Y(B), y();
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
      return Et();
    },
    set width(B) {
      Et(B), y();
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
      return Cn();
    },
    set class(B) {
      Cn(B), y();
    }
  });
  return i(), Se;
}
be(
  $f,
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
function Cf(e, t) {
  Ce(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), a = w(t, "initialHeight", 12, void 0), i = w(t, "fitView", 12, void 0), s = w(t, "nodeOrigin", 12, void 0);
  const l = sf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  ho(Wa, { getStore: () => l }), sl(() => {
    l.reset();
  }), qe();
  var u = ht(), c = Me(u);
  return qt(c, t, "default", {}), j(e, u), ke({
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
  Cf,
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
var zy = /* @__PURE__ */ he("<button><!></button>");
function Fo(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = St(n, [
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
  var c = zy();
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
  }), j(e, c), ke({
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
  Fo,
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
var Dy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function kf(e) {
  var t = Dy();
  j(e, t);
}
be(kf, {}, [], [], !0);
var Hy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sf(e) {
  var t = Hy();
  j(e, t);
}
be(Sf, {}, [], [], !0);
var Iy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ef(e) {
  var t = Iy();
  j(e, t);
}
be(Ef, {}, [], [], !0);
var By = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Pf(e) {
  var t = By();
  j(e, t);
}
be(Pf, {}, [], [], !0);
var Yy = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Of(e) {
  var t = Yy();
  j(e, t);
}
be(Of, {}, [], [], !0);
var jy = /* @__PURE__ */ he("<!> <!>", 1), Zy = /* @__PURE__ */ he("<!> <!> <!> <!> <!> <!>", 1);
function Tf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(A, "$nodesDraggable", n), a = () => le(H, "$nodesConnectable", n), i = () => le(K, "$elementsSelectable", n), s = () => le(M, "$viewport", n), l = () => le(k, "$minZoom", n), u = () => le(C, "$maxZoom", n), c = fe(), d = fe(), f = fe(), v = fe();
  let m = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), h = w(t, "buttonBgColor", 12, void 0), $ = w(t, "buttonBgColorHover", 12, void 0), b = w(t, "buttonColor", 12, void 0), S = w(t, "buttonColorHover", 12, void 0), O = w(t, "buttonBorderColor", 12, void 0), T = w(t, "ariaLabel", 12, void 0), N = w(t, "style", 12, void 0), z = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), W = w(t, "class", 12, "");
  const {
    zoomIn: Y,
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
    colorHover: S(),
    borderColor: O()
  }, I = () => {
    Y();
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
  Xa(e, {
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
      var ye = Zy(), Xe = Me(ye);
      qt(Xe, t, "before", {});
      var tt = G(Xe, 2);
      {
        var Ge = (Ie) => {
          var et = jy(), it = Me(et);
          Fo(it, en(
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
              children: (Et, ce) => {
                kf(Et);
              },
              $$slots: { default: !0 }
            }
          ));
          var dt = G(it, 2);
          Fo(dt, en(
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
              children: (Et, ce) => {
                Sf(Et);
              },
              $$slots: { default: !0 }
            }
          )), j(Ie, et);
        };
        Le(tt, (Ie) => {
          _() && Ie(Ge);
        });
      }
      var Qe = G(tt, 2);
      {
        var q = (Ie) => {
          Fo(Ie, en(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            R,
            {
              $$events: { click: J },
              children: (et, it) => {
                Ef(et);
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
          Fo(Ie, en(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            R,
            {
              $$events: { click: Z },
              children: (et, it) => {
                var dt = ht(), Et = Me(dt);
                {
                  var ce = (pe) => {
                    Of(pe);
                  }, Be = (pe) => {
                    Pf(pe);
                  };
                  Le(Et, (pe) => {
                    p(c) ? pe(ce) : pe(Be, !1);
                  });
                }
                j(et, dt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Le(me, (Ie) => {
          E() && Ie($e);
        });
      }
      var Te = G(me, 2);
      qt(Te, t, "default", {});
      var at = G(Te, 2);
      qt(at, t, "after", {}), j(ue, ye);
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
      return E();
    },
    set showLock(ue) {
      E(ue), y();
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
      return S();
    },
    set buttonColorHover(ue) {
      S(ue), y();
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
  Tf,
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
var Wy = /* @__PURE__ */ De("<circle></circle>");
function Rf(e, t) {
  Ce(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  qe();
  var o = Wy();
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
  ), j(e, o), ke({
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
be(Rf, { radius: {}, class: {} }, [], [], !0);
var Xy = /* @__PURE__ */ De("<path></path>");
function Mf(e, t) {
  Ce(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), a = w(t, "class", 12, "");
  qe();
  var i = Xy();
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
  ), j(e, i), ke({
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
  Mf,
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
const Ky = {
  [Pr.Dots]: 1,
  [Pr.Lines]: 1,
  [Pr.Cross]: 6
};
var Fy = /* @__PURE__ */ De('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const qy = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Nf(e, t) {
  Ce(t, !1), Rt(e, qy);
  const [n, r] = _t(), o = () => le(S, "$flowId", n), a = () => le(b, "$viewport", n), i = fe(), s = fe(), l = fe(), u = fe(), c = fe();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => Pr.Dots), v = w(t, "gap", 12, 20), m = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), h = w(t, "patternClass", 12, void 0), $ = w(t, "class", 12, "");
  const { viewport: b, flowId: S } = mt(), O = m() || Ky[f()], T = f() === Pr.Dots, N = f() === Pr.Cross, z = Array.isArray(v()) ? v() : [v(), v()];
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
  var D = Fy(), W = te(D), Y = te(W);
  {
    var X = (C) => {
      const A = /* @__PURE__ */ Pe(() => p(l) / 2);
      Rf(C, {
        get radius() {
          return p(A);
        },
        get class() {
          return h();
        }
      });
    }, P = (C) => {
      Mf(C, {
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
    Le(Y, (C) => {
      T ? C(X) : C(P, !1);
    });
  }
  ee(W);
  var M = G(W);
  ee(D), He(
    (C) => {
      Fr(D, Gn(C), "svelte-1r7pe8d"), Mt(D, "--xy-background-color-props", x()), Mt(D, "--xy-background-pattern-color-props", E()), xe(W, "id", p(i)), xe(W, "x", a().x % p(s)[0]), xe(W, "y", a().y % p(s)[1]), xe(W, "width", p(s)[0]), xe(W, "height", p(s)[1]), xe(W, "patternTransform", `translate(-${p(c)[0]},-${p(c)[1]})`), xe(M, "fill", `url(#${p(i)})`);
    },
    [
      () => nn(["svelte-flow__background", $()])
    ],
    Pe
  ), j(e, D);
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
      return E();
    },
    set patternColor(C) {
      E(C), y();
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
  Nf,
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
var Uy = /* @__PURE__ */ De("<rect></rect>");
function Vf(e, t) {
  Ce(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  qe();
  var v = Uy();
  return He(
    (m) => {
      Fr(v, Gn(m)), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", i()), xe(v, "ry", i()), xe(v, "width", o()), xe(v, "height", a()), xe(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l()), Tt(v, "selected", d());
    },
    [
      () => nn(["svelte-flow__minimap-node", f()])
    ],
    Pe
  ), j(e, v), ke({
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
  Vf,
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
  const n = Vm({
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
const gs = (e) => e instanceof Function ? e : () => e;
var Gy = /* @__PURE__ */ De("<title> </title>"), Jy = /* @__PURE__ */ De('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Lf(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le(Qe, "$flowId", n), a = () => le(Xe, "$viewport", n), i = () => le(tt, "$containerWidth", n), s = () => le(Ge, "$containerHeight", n), l = () => le(ye, "$nodeLookup", n), u = () => le(ae, "$nodes", n), c = () => le(q, "$panZoom", n), d = () => le(me, "$translateExtent", n), f = fe(), v = fe(), m = fe(), _ = fe(), x = fe(), E = fe(), h = fe(), $ = fe(), b = fe(), S = fe(), O = fe(), T = fe(), N = fe();
  let z = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), W = w(t, "nodeStrokeColor", 12, "transparent"), Y = w(t, "nodeColor", 12, void 0), X = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), k = w(t, "bgColor", 12, void 0), C = w(t, "maskColor", 12, void 0), A = w(t, "maskStrokeColor", 12, void 0), H = w(t, "maskStrokeWidth", 12, void 0), K = w(t, "width", 12, void 0), R = w(t, "height", 12, void 0), I = w(t, "pannable", 12, !0), ne = w(t, "zoomable", 12, !0), J = w(t, "inversePan", 12, void 0), Z = w(t, "zoomStep", 12, void 0), se = w(t, "style", 12, ""), ge = w(t, "class", 12, "");
  const ve = 200, ue = 150, {
    nodes: ae,
    nodeLookup: ye,
    viewport: Xe,
    width: tt,
    height: Ge,
    flowId: Qe,
    panZoom: q,
    translateExtent: me
  } = mt(), $e = Y() === void 0 ? void 0 : gs(Y()), Te = gs(W()), at = gs(X()), Ie = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), et = `svelte-flow__minimap-desc-${o()}`;
  let it = fe(p(f));
  const dt = () => p(E);
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
      ie(it, l().size > 0 ? Md(yi(l()), p(f)) : p(f)), u();
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
      ie(E, Math.max(p(_), p(x)));
    }
  ), _e(() => (p(E), p(v)), () => {
    ie(h, p(E) * p(v));
  }), _e(
    () => (p(E), p(m)),
    () => {
      ie($, p(E) * p(m));
    }
  ), _e(() => p(E), () => {
    ie(b, 5 * p(E));
  }), _e(
    () => (p(it), p(h), p(b)),
    () => {
      ie(S, p(it).x - (p(h) - p(it).width) / 2 - p(b));
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
  const Et = /* @__PURE__ */ Pe(() => se() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), ce = /* @__PURE__ */ Pe(() => nn(["svelte-flow__minimap", ge()]));
  Xa(e, {
    get position() {
      return z();
    },
    get style() {
      return p(Et);
    },
    get class() {
      return p(ce);
    },
    "data-testid": "svelte-flow__minimap",
    children: (pe, rn) => {
      var Xt = ht(), Ne = Me(Xt);
      {
        var $t = (Re) => {
          var We = Jy();
          xe(We, "aria-labelledby", et);
          var lt = te(We);
          {
            var Bt = (At) => {
              var Pt = Gy();
              xe(Pt, "id", et);
              var Yt = te(Pt, !0);
              ee(Pt), He(() => Un(Yt, D())), j(At, Pt);
            };
            Le(lt, (At) => {
              D() && At(Bt);
            });
          }
          var zn = G(lt);
          pn(zn, 1, u, (At) => At.id, (At, Pt) => {
            var Yt = ht();
            const zt = /* @__PURE__ */ Pe(() => l().get(p(Pt).id));
            var yt = Me(Yt);
            {
              var Dn = (yn) => {
                const Gt = /* @__PURE__ */ Pe(() => Nr(p(zt))), Qn = /* @__PURE__ */ Pe(() => $e == null ? void 0 : $e(p(zt))), er = /* @__PURE__ */ Pe(() => Te(p(zt))), mr = /* @__PURE__ */ Pe(() => at(p(zt)));
                Vf(yn, en(
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
              Le(yt, (yn) => {
                p(zt) && Ld(p(zt)) && yn(Dn);
              });
            }
            j(At, Yt);
          });
          var Cn = G(zn);
          ee(We), Ft(We, (At, Pt) => Ju == null ? void 0 : Ju(At, Pt), () => ({
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
            xe(We, "width", p(v)), xe(We, "height", p(m)), xe(We, "viewBox", `${p(S) ?? ""} ${p(O) ?? ""} ${p(T) ?? ""} ${p(N) ?? ""}`), Mt(We, "--xy-minimap-mask-background-color-props", C()), Mt(We, "--xy-minimap-mask-stroke-color-props", A()), Mt(We, "--xy-minimap-mask-stroke-width-props", H() ? H() * p(E) : void 0), xe(Cn, "d", `M${p(S) - p(b)},${p(O) - p(b)}h${p(T) + p(b) * 2}v${p(N) + p(b) * 2}h${-p(T) - p(b) * 2}z
      M${p(f).x ?? ""},${p(f).y ?? ""}h${p(f).width ?? ""}v${p(f).height ?? ""}h${-p(f).width}z`);
          }), j(Re, We);
        };
        Le(Ne, (Re) => {
          c() && Re($t);
        });
      }
      j(pe, Xt);
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
      return Y();
    },
    set nodeColor(pe) {
      Y(pe), y();
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
  Lf,
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
function An() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: m, nodeOrigin: _, edgeLookup: x, connectionLookup: E } = mt(), h = (S) => {
    var O, T;
    const N = Q(m), z = Qu(S) ? S : N.get(S.id), D = z.parentId ? nm(z.position, z.measured, z.parentId, N, Q(_)) : z.position, W = {
      ...z,
      position: D,
      width: ((O = z.measured) == null ? void 0 : O.width) ?? z.width,
      height: ((T = z.measured) == null ? void 0 : T.height) ?? z.height
    };
    return _o(W);
  }, $ = (S, O, T = { replace: !1 }) => {
    var N;
    const z = (N = Q(m).get(S)) == null ? void 0 : N.internals.userNode;
    if (!z)
      return;
    const D = typeof O == "function" ? O(z) : O;
    T.replace ? d.update((W) => W.map((Y) => Y.id === S ? Qu(D) ? D : { ...Y, ...D } : Y)) : (Object.assign(z, D), d.update((W) => W));
  }, b = (S) => Q(m).get(S);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: b,
    getNode: (S) => {
      var O;
      return (O = b(S)) == null ? void 0 : O.internals.userNode;
    },
    getNodes: (S) => S === void 0 ? Q(d) : ec(Q(m), S),
    getEdge: (S) => Q(x).get(S),
    getEdges: (S) => S === void 0 ? Q(f) : ec(Q(x), S),
    setZoom: (S, O) => {
      const T = Q(c);
      return T ? T.scaleTo(S, { duration: O == null ? void 0 : O.duration }) : Promise.resolve(!1);
    },
    getZoom: () => Q(a).zoom,
    setViewport: async (S, O) => {
      const T = Q(a), N = Q(c);
      return N ? (await N.setViewport({
        x: S.x ?? T.x,
        y: S.y ?? T.y,
        zoom: S.zoom ?? T.zoom
      }, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Q(a),
    setCenter: async (S, O, T) => {
      const N = typeof (T == null ? void 0 : T.zoom) < "u" ? T.zoom : Q(u), z = Q(c);
      return z ? (await z.setViewport({
        x: Q(i) / 2 - S * N,
        y: Q(s) / 2 - O * N,
        zoom: N
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (S, O) => {
      const T = Q(c);
      if (!T)
        return Promise.resolve(!1);
      const N = ml(S, Q(i), Q(s), Q(l), Q(u), (O == null ? void 0 : O.padding) ?? 0.1);
      return await T.setViewport(N, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (S, O = !0, T) => {
      const N = Lu(S), z = N ? S : h(S);
      return z ? (T || Q(d)).filter((D) => {
        const W = Q(m).get(D.id);
        if (!W || !N && D.id === S.id)
          return !1;
        const Y = _o(W), X = si(Y, z);
        return O && X > 0 || X >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (S, O, T = !0) => {
      const N = Lu(S) ? S : h(S);
      if (!N)
        return !1;
      const z = si(N, O);
      return T && z > 0 || z >= N.width * N.height;
    },
    deleteElements: async ({ nodes: S = [], edges: O = [] }) => {
      const { nodes: T, edges: N } = await Od({
        nodesToRemove: S,
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
    screenToFlowPosition: (S, O = { snapToGrid: !0 }) => {
      const T = Q(v);
      if (!T)
        return S;
      const N = O.snapToGrid ? Q(o) : !1, { x: z, y: D, zoom: W } = Q(a), { x: Y, y: X } = T.getBoundingClientRect(), P = {
        x: S.x - Y,
        y: S.y - X
      };
      return wi(P, [z, D, W], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (S) => {
      const O = Q(v);
      if (!O)
        return S;
      const { x: T, y: N, zoom: z } = Q(a), { x: D, y: W } = O.getBoundingClientRect(), Y = Vd(S, [T, N, z]);
      return {
        x: Y.x + D,
        y: Y.y + W
      };
    },
    toObject: () => ({
      nodes: Q(d).map((S) => ({
        ...S,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...S.position },
        data: { ...S.data }
      })),
      edges: Q(f).map((S) => ({ ...S })),
      viewport: { ...Q(a) }
    }),
    updateNode: $,
    updateNodeData: (S, O, T) => {
      var N;
      const z = (N = Q(m).get(S)) == null ? void 0 : N.internals.userNode;
      if (!z)
        return;
      const D = typeof O == "function" ? O(z) : O;
      z.data = T != null && T.replace ? D : { ...z.data, ...D }, d.update((W) => W);
    },
    getNodesBounds: (S) => {
      const O = Q(m), T = Q(_);
      return em(S, { nodeLookup: O, nodeOrigin: T });
    },
    getHandleConnections: ({ type: S, id: O, nodeId: T }) => {
      var N;
      return Array.from(((N = Q(E).get(`${T}-${S}-${O ?? null}`)) == null ? void 0 : N.values()) ?? []);
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
var Qy = /* @__PURE__ */ he('<div class="svelte-flow__node-toolbar"><!></div>');
function Af(e, t) {
  Ce(t, !1);
  const [n, r] = _t(), o = () => le($, "$nodes", n), a = () => le(h, "$nodeLookup", n), i = () => le(E, "$viewport", n), s = () => le(x, "$domNode", n), l = fe(), u = fe(), c = fe();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), v = w(t, "align", 12, void 0), m = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: E, nodeLookup: h, nodes: $ } = mt(), { getNodesBounds: b } = An(), S = Hr("svelteflow__node_id");
  let O = fe(), T = fe([]), N = m() !== void 0 ? m() : 10, z = f() !== void 0 ? f() : ze.Top, D = v() !== void 0 ? v() : "center";
  _e(
    () => (o(), oe(d()), a()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || S];
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
      M && ie(O, mm(M, i(), z, N, D));
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
  var W = ht(), Y = Me(W);
  {
    var X = (M) => {
      var k = Qy(), C = te(k);
      qt(C, t, "default", {}), ee(k), Ft(k, (A, H) => ba == null ? void 0 : ba(A, H), () => ({ domNode: s() })), He(
        (A) => {
          xe(k, "data-id", A), Mt(k, "position", "absolute"), Mt(k, "transform", p(O)), Mt(k, "z-index", p(l));
        },
        [
          () => p(T).reduce((A, H) => `${A}${H.id} `, "").trim()
        ],
        Pe
      ), j(M, k);
    };
    Le(Y, (M) => {
      s() && p(c) && p(T) && M(X);
    });
  }
  j(e, W);
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
  Af,
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
  return Sr([t, n], ([, a], i) => {
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
    (!km(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const e2 = () => {
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
}, Gi = e2();
var t2 = /* @__PURE__ */ he("<button><!></button>");
function xt(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = t2();
  let a;
  var i = te(o);
  return mo(i, () => n() ?? Zt), ee(o), He(() => a = Mn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), j(e, o), ke({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
be(xt, { children: {} }, [], [], !0);
var n2 = /* @__PURE__ */ he("<input>");
function zf(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ $n(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = n2();
  Kc(r);
  let o;
  He(() => o = Mn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), j(e, r), ke();
}
be(zf, {}, [], [], !0);
var r2 = /* @__PURE__ */ he("<input>");
function Pn(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ $n(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = r2();
  Kc(r);
  let o;
  He(() => o = Mn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), j(e, r), ke();
}
be(Pn, {}, [], [], !0);
var o2 = /* @__PURE__ */ he("<textarea></textarea>");
function hn(e, t) {
  Ce(t, !0);
  const n = /* @__PURE__ */ $n(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = o2();
  qp(r);
  let o;
  He(() => o = Mn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), j(e, r), ke();
}
be(hn, {}, [], [], !0);
var i2 = /* @__PURE__ */ he('<div role="button"><!></div>'), a2 = /* @__PURE__ */ he("<div></div>");
function Df(e, t) {
  const n = St(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = St(n, ["items", "onChange", "activeIndex"]);
  Ce(t, !1);
  let o = w(t, "items", 28, () => []), a = w(t, "onChange", 12, () => {
  }), i = w(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  qe();
  var l = a2();
  let u;
  return pn(l, 5, o, La, (c, d, f) => {
    var v = i2();
    xe(v, "tabindex", f), v.__click = () => s(p(d), f), v.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), s(p(d), f));
    };
    var m = te(v);
    {
      var _ = (E) => {
        var h = bt();
        He(() => Un(h, p(d).label)), j(E, h);
      }, x = (E) => {
        var h = ht(), $ = Me(h);
        mo($, () => p(d).label ?? Zt), j(E, h);
      };
      Le(m, (E) => {
        typeof p(d).label == "string" ? E(_) : E(x, !1);
      });
    }
    ee(v), He(() => yo(v, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), j(c, v);
  }), ee(l), He(() => u = Mn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), j(e, l), ke({
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
Va(["click", "keydown"]);
be(Df, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var s2 = (e, t, n) => t(p(n)), l2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(p(n)));
}, u2 = /* @__PURE__ */ he('<div class="tf-collapse-item-description"><!></div>'), c2 = /* @__PURE__ */ he('<div class="tf-collapse-item-content"><!></div>'), d2 = /* @__PURE__ */ he('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), f2 = /* @__PURE__ */ he("<div></div>");
const v2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Hf(e, t) {
  Ce(t, !0), Rt(e, v2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Bn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = f2();
  return pn(i, 21, n, La, (s, l, u) => {
    var c = d2(), d = te(c);
    xe(d, "tabindex", u), d.__click = [s2, a, l], d.__keydown = [l2, a, l];
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
      var E = (b) => {
        var S = u2(), O = te(S);
        Cr(O, {
          get target() {
            return p(l).description;
          }
        }), ee(S), j(b, S);
      };
      Le(x, (b) => {
        p(l).description && b(E);
      });
    }
    var h = G(x, 2);
    {
      var $ = (b) => {
        var S = c2(), O = te(S);
        Cr(O, {
          get target() {
            return p(l).content;
          }
        }), ee(S), j(b, S);
      };
      Le(h, (b) => {
        o().includes(p(l).key) && b($);
      });
    }
    ee(c), He((b) => yo(_, `tf-collapse-item-title-arrow ${b ?? ""} svelte-1jfktzw`), [
      () => o().includes(p(l).key) ? "rotate-90" : ""
    ]), j(s, c);
  }), ee(i), He(() => {
    xe(i, "style", t.style), yo(i, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), j(e, i), ke({
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
Va(["click", "keydown"]);
be(Hf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Cr(e, t) {
  Ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = ht(), o = Me(r);
  {
    var a = (s) => {
      var l = ht(), u = Me(l);
      mo(u, () => n() ?? Zt), j(s, l);
    }, i = (s) => {
      var l = ht(), u = Me(l);
      Zc(u, n), j(s, l);
    };
    Le(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return j(e, r), ke({
    get target() {
      return n();
    },
    set target(s) {
      n(s), y();
    }
  });
}
be(Cr, { target: {} }, [], [], !0);
var p2 = (e, t, n) => t(p(n)), g2 = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h2 = /* @__PURE__ */ he('<div class="tf-select-content-children"><!></div>'), m2 = /* @__PURE__ */ he('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), y2 = /* @__PURE__ */ he('<div class="tf-select-content nopan nodrag"><!></div>'), w2 = /* @__PURE__ */ he("<!> <!>", 1), b2 = /* @__PURE__ */ he('<div class="tf-select-input-placeholder"> </div>'), x2 = /* @__PURE__ */ he('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), _2 = /* @__PURE__ */ he("<div><!></div>");
function Rr(e, t) {
  Ce(t, !0);
  const n = ($, b = Zt) => {
    var S = ht(), O = Me(S);
    pn(O, 19, b, (T, N) => `${N}_${T.value}`, (T, N) => {
      var z = m2(), D = Me(z);
      D.__click = [p2, _, N];
      var W = te(D), Y = te(W);
      {
        var X = (C) => {
          var A = g2();
          j(C, A);
        };
        Le(Y, (C) => {
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
          var A = h2(), H = te(A);
          n(H, () => p(N).children), ee(A), j(C, A);
        };
        Le(M, (C) => {
          p(N).children && p(N).children.length > 0 && (l() || c().includes(p(N).value)) && C(k);
        });
      }
      j(T, z);
    }), j($, S);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), a = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), f = /* @__PURE__ */ $n(t, [
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
    const $ = [], b = (S) => {
      for (let O of S)
        i().length > 0 ? i().includes(O.value) && $.push(O) : s().includes(O.value) && $.push(O), O.children && O.children.length > 0 && b(O.children);
    };
    return b(r()), $;
  }), m;
  function _($) {
    var b, S;
    if ($.children && $.children.length > 0) {
      (b = o()) == null || b($);
      return;
    } else
      m == null || m.hide(), (S = a()) == null || S($);
  }
  var x = _2();
  let E;
  var h = te(x);
  return fr(
    Ci(h, {
      floating: ($) => {
        var b = y2(), S = te(b);
        n(S, r), ee(b), j($, b);
      },
      children: ($, b) => {
        var S = x2();
        let O;
        var T = te(S);
        pn(
          T,
          23,
          () => p(v),
          (N, z) => `${z}_${N.value}`,
          (N, z, D) => {
            var W = ht(), Y = Me(W);
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
                j(M, k);
              }, P = (M) => {
                var k = w2(), C = Me(k);
                Cr(C, {
                  get target() {
                    return p(z).label;
                  }
                });
                var A = G(C, 2);
                {
                  var H = (K) => {
                    var R = bt(",");
                    j(K, R);
                  };
                  Le(A, (K) => {
                    p(D) < p(v).length - 1 && K(H);
                  });
                }
                j(M, k);
              };
              Le(Y, (M) => {
                u() ? M(P, !1) : M(X);
              });
            }
            j(N, W);
          },
          (N) => {
            var z = b2(), D = te(z, !0);
            ee(z), He(() => Un(D, d())), j(N, z);
          }
        ), ee(T), ot(2), ee(S), He(() => O = Mn(S, O, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), j($, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => m = $,
    () => m
  ), ee(x), He(() => E = Mn(x, E, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), j(e, x), ke({
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
Va(["click"]);
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
const ui = Math.min, vo = Math.max, $a = Math.round, Wn = (e) => ({
  x: e,
  y: e
}), $2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, C2 = {
  start: "end",
  end: "start"
};
function Bs(e, t, n) {
  return vo(e, ui(t, n));
}
function xi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zr(e) {
  return e.split("-")[0];
}
function _i(e) {
  return e.split("-")[1];
}
function If(e) {
  return e === "x" ? "y" : "x";
}
function $l(e) {
  return e === "y" ? "height" : "width";
}
function Co(e) {
  return ["top", "bottom"].includes(Zr(e)) ? "y" : "x";
}
function Cl(e) {
  return If(Co(e));
}
function k2(e, t, n) {
  n === void 0 && (n = !1);
  const r = _i(e), o = Cl(e), a = $l(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ca(i)), [i, Ca(i)];
}
function S2(e) {
  const t = Ca(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => C2[t]);
}
function E2(e, t, n) {
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
function P2(e, t, n, r) {
  const o = _i(e);
  let a = E2(Zr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ys)))), a;
}
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $2[t]);
}
function O2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bf(e) {
  return typeof e != "number" ? O2(e) : {
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
function tc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Co(t), i = Cl(t), s = $l(i), l = Zr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (_i(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const T2 = async (e, t, n) => {
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
  } = tc(u, r, l), f = r, v = {}, m = 0;
  for (let _ = 0; _ < s.length; _++) {
    const {
      name: x,
      fn: E
    } = s[_], {
      x: h,
      y: $,
      data: b,
      reset: S
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
    c = h ?? c, d = $ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...b
      }
    }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: c,
      y: d
    } = tc(u, f, l)), _ = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Yf(e, t) {
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
  } = xi(t, e), m = Bf(v), _ = s[f ? d === "floating" ? "reference" : "floating" : d], x = ka(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(_))) == null || n ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), E = d === "floating" ? {
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
  }, b = ka(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: E,
    offsetParent: h,
    strategy: l
  }) : E);
  return {
    top: (x.top - b.top + m.top) / $.y,
    bottom: (b.bottom - x.bottom + m.bottom) / $.y,
    left: (x.left - b.left + m.left) / $.x,
    right: (b.right - x.right + m.right) / $.x
  };
}
const R2 = (e) => ({
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
    } = xi(e, t) || {};
    if (u == null)
      return {};
    const d = Bf(c), f = {
      x: n,
      y: r
    }, v = Cl(o), m = $l(v), _ = await i.getDimensions(u), x = v === "y", E = x ? "top" : "left", h = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[v] - f[v] - a.floating[m], S = f[v] - a.reference[v], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let T = O ? O[$] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(O))) && (T = s.floating[$] || a.floating[m]);
    const N = b / 2 - S / 2, z = T / 2 - _[m] / 2 - 1, D = ui(d[E], z), W = ui(d[h], z), Y = D, X = T - _[m] - W, P = T / 2 - _[m] / 2 + N, M = Bs(Y, P, X), k = !l.arrow && _i(o) != null && P !== M && a.reference[m] / 2 - (P < Y ? D : W) - _[m] / 2 < 0, C = k ? P < Y ? P - Y : P - X : 0;
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
}), M2 = function(e) {
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
      } = xi(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const E = Zr(o), h = Co(s), $ = Zr(s) === s, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = f || ($ || !_ ? [Ca(s)] : S2(s)), O = m !== "none";
      !f && O && S.push(...P2(s, _, m, b));
      const T = [s, ...S], N = await Yf(t, x), z = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(N[E]), d) {
        const P = k2(o, i, b);
        z.push(N[P[0]], N[P[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: z
      }], !z.every((P) => P <= 0)) {
        var W, Y;
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
        let k = (Y = D.filter((C) => C.overflows[0] <= 0).sort((C, A) => C.overflows[1] - A.overflows[1])[0]) == null ? void 0 : Y.placement;
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
async function N2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Zr(n), s = _i(n), l = Co(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = xi(t, e);
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
const V2 = function(e) {
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
      } = t, l = await N2(t, e);
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
          fn: (x) => {
            let {
              x: E,
              y: h
            } = x;
            return {
              x: E,
              y: h
            };
          }
        },
        ...l
      } = xi(e, t), u = {
        x: n,
        y: r
      }, c = await Yf(t, l), d = Co(Zr(o)), f = If(d);
      let v = u[f], m = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", h = v + c[x], $ = v - c[E];
        v = Bs(h, v, $);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", h = m + c[x], $ = m - c[E];
        m = Bs(h, m, $);
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
function Ka() {
  return typeof window < "u";
}
function Mo(e) {
  return jf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function hr(e) {
  var t;
  return (t = (jf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jf(e) {
  return Ka() ? e instanceof Node || e instanceof vn(e).Node : !1;
}
function Nn(e) {
  return Ka() ? e instanceof Element || e instanceof vn(e).Element : !1;
}
function Fn(e) {
  return Ka() ? e instanceof HTMLElement || e instanceof vn(e).HTMLElement : !1;
}
function nc(e) {
  return !Ka() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vn(e).ShadowRoot;
}
function $i(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function A2(e) {
  return ["table", "td", "th"].includes(Mo(e));
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
function kl(e) {
  const t = Sl(), n = Nn(e) ? Vn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function z2(e) {
  let t = Mr(e);
  for (; Fn(t) && !ko(t); ) {
    if (kl(t))
      return t;
    if (Fa(t))
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
  return vn(e).getComputedStyle(e);
}
function qa(e) {
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
    nc(e) && e.host || // Fallback.
    hr(e)
  );
  return nc(t) ? t.host : t;
}
function Zf(e) {
  const t = Mr(e);
  return ko(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fn(t) && $i(t) ? t : Zf(t);
}
function Wf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Zf(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = vn(o);
  return a ? (js(i), t.concat(i, i.visualViewport || [], $i(o) ? o : [], [])) : t.concat(o, Wf(o, []));
}
function js(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xf(e) {
  const t = Vn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Fn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = $a(n) !== a || $a(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Kf(e) {
  return Nn(e) ? e : e.contextElement;
}
function po(e) {
  const t = Kf(e);
  if (!Fn(t))
    return Wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Xf(t);
  let i = (a ? $a(n.width) : n.width) / r, s = (a ? $a(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const D2 = /* @__PURE__ */ Wn(0);
function Ff(e) {
  const t = vn(e);
  return !Sl() || !t.visualViewport ? D2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function H2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== vn(e) ? !1 : t;
}
function ci(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Kf(e);
  let i = Wn(1);
  t && (r ? Nn(r) && (i = po(r)) : i = po(e));
  const s = H2(a, n, r) ? Ff(a) : Wn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = vn(a), v = r && Nn(r) ? vn(r) : r;
    let m = f, _ = js(m);
    for (; _ && r && v !== m; ) {
      const x = po(_), E = _.getBoundingClientRect(), h = Vn(_), $ = E.left + (_.clientLeft + parseFloat(h.paddingLeft)) * x.x, b = E.top + (_.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += $, u += b, m = vn(_), _ = js(m);
    }
  }
  return ka({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function El(e, t) {
  const n = qa(e).scrollLeft;
  return t ? t.left + n : ci(hr(e)).left + n;
}
function qf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    El(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function I2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = hr(r), s = t ? Fa(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Wn(1);
  const c = Wn(0), d = Fn(r);
  if ((d || !d && !a) && ((Mo(r) !== "body" || $i(i)) && (l = qa(r)), Fn(r))) {
    const v = ci(r);
    u = po(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? qf(i, l, !0) : Wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function B2(e) {
  return Array.from(e.getClientRects());
}
function Y2(e) {
  const t = hr(e), n = qa(e), r = e.ownerDocument.body, o = vo(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = vo(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + El(e);
  const s = -n.scrollTop;
  return Vn(r).direction === "rtl" && (i += vo(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function j2(e, t) {
  const n = vn(e), r = hr(e), o = n.visualViewport;
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
function Z2(e, t) {
  const n = ci(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Fn(e) ? po(e) : Wn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function rc(e, t, n) {
  let r;
  if (t === "viewport")
    r = j2(e, n);
  else if (t === "document")
    r = Y2(hr(e));
  else if (Nn(t))
    r = Z2(t, n);
  else {
    const o = Ff(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ka(r);
}
function Uf(e, t) {
  const n = Mr(e);
  return n === t || !Nn(n) || ko(n) ? !1 : Vn(n).position === "fixed" || Uf(n, t);
}
function W2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wf(e, []).filter((s) => Nn(s) && Mo(s) !== "body"), o = null;
  const a = Vn(e).position === "fixed";
  let i = a ? Mr(e) : e;
  for (; Nn(i) && !ko(i); ) {
    const s = Vn(i), l = kl(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || $i(i) && !l && Uf(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Mr(i);
  }
  return t.set(e, r), r;
}
function X2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Fa(t) ? [] : W2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = rc(t, u, o);
    return l.top = vo(c.top, l.top), l.right = ui(c.right, l.right), l.bottom = ui(c.bottom, l.bottom), l.left = vo(c.left, l.left), l;
  }, rc(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function K2(e) {
  const {
    width: t,
    height: n
  } = Xf(e);
  return {
    width: t,
    height: n
  };
}
function F2(e, t, n) {
  const r = Fn(t), o = hr(t), a = n === "fixed", i = ci(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Wn(0);
  if (r || !r && !a)
    if ((Mo(t) !== "body" || $i(o)) && (s = qa(t)), r) {
      const f = ci(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = El(o));
  const u = o && !r && !a ? qf(o, s) : Wn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function hs(e) {
  return Vn(e).position === "static";
}
function oc(e, t) {
  if (!Fn(e) || Vn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return hr(e) === n && (n = n.ownerDocument.body), n;
}
function Gf(e, t) {
  const n = vn(e);
  if (Fa(e))
    return n;
  if (!Fn(e)) {
    let o = Mr(e);
    for (; o && !ko(o); ) {
      if (Nn(o) && !hs(o))
        return o;
      o = Mr(o);
    }
    return n;
  }
  let r = oc(e, t);
  for (; r && A2(r) && hs(r); )
    r = oc(r, t);
  return r && ko(r) && hs(r) && !kl(r) ? n : r || z2(e) || n;
}
const q2 = async function(e) {
  const t = this.getOffsetParent || Gf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: F2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function U2(e) {
  return Vn(e).direction === "rtl";
}
const G2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: I2,
  getDocumentElement: hr,
  getClippingRect: X2,
  getOffsetParent: Gf,
  getElementRects: q2,
  getClientRects: B2,
  getDimensions: K2,
  getScale: po,
  isElement: Nn,
  isRTL: U2
}, J2 = V2, Q2 = L2, ew = M2, tw = R2, nw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: G2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return T2(e, t, {
    ...o,
    platform: a
  });
}, rw = ({
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
    nw(e, u, {
      placement: r,
      middleware: [
        J2(o),
        // 手动偏移配置
        ew(a),
        //自动翻转
        Q2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [tw({ element: c })] : []
      ]
    }).then(({ x: E, y: h, placement: $, middlewareData: b }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${h}px`
      }), l) {
        const { x: S, y: O } = b.arrow, T = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: S != null ? `${S}px` : "",
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
  function _(E) {
    E.stopPropagation(), f ? m() : v();
  }
  function x(E) {
    u.contains(E.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, _);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, _);
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
var ow = /* @__PURE__ */ he('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Ci(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let a, i, s;
  qr(() => (s = rw({
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
  var u = ow(), c = te(u), d = te(c);
  mo(d, n), ee(c), fr(c, (m) => a = m, () => a);
  var f = G(c, 2), v = te(f);
  return mo(v, r), ee(f), fr(f, (m) => i = m, () => i), ee(u), j(e, u), ke({
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
be(Ci, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function It(e, t) {
  Ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), a = w(t, "mb", 7);
  var i = ht(), s = Me(i);
  return og(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    He(() => c = Mn(
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
    var d = ht(), f = Me(d);
    mo(f, () => n() ?? Zt), j(u, d);
  }), j(e, i), ke({
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
var iw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const aw = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ua(e, t) {
  Ce(t, !0), Rt(e, aw);
  const n = /* @__PURE__ */ $n(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  xt(e, en(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = iw();
      j(r, a);
    },
    $$slots: { default: !0 }
  })), ke();
}
be(Ua, {}, [], [], !0);
const sw = () => {
  const e = mt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, di = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, lw = () => {
  const { nodes: e, nodeLookup: t } = mt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = Q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = di(), i = {
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
var uw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), cw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), dw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), fw = /* @__PURE__ */ he('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), vw = /* @__PURE__ */ he('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!>', 1);
const pw = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Gr(e, t) {
  Ce(t, !0), Rt(e, pw);
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
  ], { deleteNode: f } = sw(), { copyNode: v } = lw();
  var m = vw(), _ = Me(m);
  {
    var x = (O) => {
      Af(O, {
        get position() {
          return ze.Top;
        },
        align: "end",
        children: (T, N) => {
          var z = fw(), D = te(z);
          {
            var W = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                children: (C, A) => {
                  var H = uw();
                  j(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(D, (k) => {
              i() && k(W);
            });
          }
          var Y = G(D, 2);
          {
            var X = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  v(r());
                },
                children: (C, A) => {
                  var H = cw();
                  j(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(Y, (k) => {
              s() && k(X);
            });
          }
          var P = G(Y, 2);
          {
            var M = (k) => {
              xt(k, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  f(r());
                },
                children: (C, A) => {
                  var H = dw();
                  j(C, H);
                },
                $$slots: { default: !0 }
              });
            };
            Le(P, (k) => {
              l() && k(M);
            });
          }
          ee(z), j(T, z);
        },
        $$slots: { default: !0 }
      });
    };
    Le(_, (O) => {
      (i() || s() || l()) && O(x);
    });
  }
  var E = G(_, 2), h = G(te(E), 2), $ = te(h);
  Hf($, {
    items: d,
    activeKeys: u,
    onChange: (O, T) => {
      c(r(), { expand: T == null ? void 0 : T.includes("key") });
    }
  }), ee(h), ee(E);
  var b = G(E, 2);
  jr(b, {
    type: "target",
    get position() {
      return ze.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var S = G(b, 2);
  return jr(S, {
    type: "source",
    get position() {
      return ze.Right;
    },
    style: "right: -12px;top: 20px"
  }), j(e, m), ke({
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
function mn() {
  return Hr("svelteflow__node_id");
}
const Jf = [
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
], gw = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var hw = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), mw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), yw = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ww = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qf(e, t) {
  Ce(t, !0), Rt(e, ww);
  const [n, r] = _t(), o = () => le(p(l), "$node", n), a = w(t, "parameter", 7), i = w(t, "index", 7);
  let s = mn(), l = /* @__PURE__ */ Je(() => Ur(s)), u = /* @__PURE__ */ Je(() => {
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
  var _ = yw(), x = Me(_), E = te(x);
  Pn(E, {
    style: "width: 100%;",
    get value() {
      return p(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), ee(x);
  var h = G(x, 2), $ = te(h);
  zf($, {
    get checked() {
      return p(u).required;
    },
    onchange: f
  }), ee(h);
  var b = G(h, 2), S = te(b);
  fr(
    Ci(S, {
      placement: "bottom",
      floating: (T) => {
        var N = hw(), z = te(N), D = G(te(z));
        Rr(D, {
          items: Jf,
          style: "width: 100%"
        }), ee(z);
        var W = G(z, 2), Y = G(te(W));
        hn(Y, { rows: 1, style: "width: 100%;" }), ee(W);
        var X = G(W, 2), P = G(te(X));
        hn(P, { rows: 3, style: "width: 100%;" }), ee(X);
        var M = G(X, 2), k = te(M);
        xt(k, {
          onclick: m,
          children: (C, A) => {
            ot();
            var H = bt("删除");
            j(C, H);
          },
          $$slots: { default: !0 }
        }), ee(M), ee(N), j(T, N);
      },
      children: (T, N) => {
        xt(T, {
          class: "input-btn-more",
          children: (z, D) => {
            var W = mw();
            j(z, W);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => v = T,
    () => v
  ), ee(b), j(e, _);
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
be(Qf, { parameter: {}, index: {} }, [], [], !0);
var bw = /* @__PURE__ */ he('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), xw = /* @__PURE__ */ he('<div class="none-params svelte-3n0wca">无输入参数</div>'), _w = /* @__PURE__ */ he('<div class="input-container svelte-3n0wca"><!> <!></div>');
const $w = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function ev(e, t) {
  Ce(t, !0), Rt(e, $w);
  const [n, r] = _t(), o = () => le(p(i), "$node", n);
  let a = mn(), i = /* @__PURE__ */ Je(() => Ur(a)), s = /* @__PURE__ */ Je(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = _w(), u = te(l);
  {
    var c = (f) => {
      var v = bw();
      ot(4), j(f, v);
    };
    Le(u, (f) => {
      p(s).length !== 0 && f(c);
    });
  }
  var d = G(u, 2);
  pn(
    d,
    19,
    () => p(s),
    (f) => f.id,
    (f, v, m) => {
      Qf(f, {
        get parameter() {
          return p(v);
        },
        get index() {
          return p(m);
        }
      });
    },
    (f) => {
      var v = xw();
      j(f, v);
    }
  ), ee(l), j(e, l), ke(), r();
}
be(ev, {}, [], [], !0);
const No = () => {
  const { updateNodeData: e } = An();
  return {
    addParameter: (t, n = "parameters", r) => {
      const o = {
        ...r,
        id: di()
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
var Cw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), kw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ he('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Ew = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function tv(e, t) {
  Ce(t, !0), Rt(e, Ew);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No();
  return Gr(e, en(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (i) => {
      var s = Cw();
      j(i, s);
    },
    children: (i, s) => {
      var l = Sw(), u = Me(l), c = te(u);
      It(c, {
        level: 3,
        children: (v, m) => {
          ot();
          var _ = bt("输入参数");
          j(v, _);
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
          var _ = kw();
          j(v, _);
        },
        $$slots: { default: !0 }
      }), ee(u);
      var f = G(u, 2);
      ev(f, {}), j(i, l);
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
be(tv, { data: {} }, [], [], !0);
const nv = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), nv(e, r.source, n));
}, ic = (e, t) => {
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
}, Pw = (e = !1) => {
  const t = mn(), n = Ur(t), { nodes: r, edges: o } = mt();
  return Sr([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = ic(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      nv(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = ic(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Ow = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Tw = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Rw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function rv(e, t) {
  Ce(t, !0), Rt(e, Rw);
  const [n, r] = _t(), o = () => le(p(c), "$node", n), a = () => le(b, "$selectItems", n), i = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = mn(), c = /* @__PURE__ */ Je(() => Ur(u)), d = /* @__PURE__ */ Je(() => {
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
  }, E = (M) => {
    const k = M.value;
    v("refType", k);
  };
  let h;
  const $ = () => {
    f(u, (M) => {
      let k = M.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, b = Pw();
  var S = Tw(), O = Me(S), T = te(O);
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
  var Y = G(N, 2), X = te(Y);
  fr(
    Ci(X, {
      placement: "bottom",
      floating: (M) => {
        var k = Ow(), C = te(k), A = G(te(C));
        const H = /* @__PURE__ */ Je(() => p(d).refType ? [p(d).refType] : []);
        Rr(A, {
          items: gw,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return p(H);
          },
          onSelect: E
        }), ee(C);
        var K = G(C, 2), R = G(te(K));
        hn(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            const ge = se.target.value;
            v("defaultValue", ge);
          }
        }), ee(K);
        var I = G(K, 2), ne = G(te(I));
        hn(ne, {
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
            j(se, ve);
          },
          $$slots: { default: !0 }
        }), ee(J), ee(k), j(M, k);
      },
      children: (M, k) => {
        Ua(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => h = M,
    () => h
  ), ee(Y), j(e, S);
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
be(rv, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Mw = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Nw = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), Vw = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Lw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ar(e, t) {
  Ce(t, !0), Rt(e, Lw);
  const [n, r] = _t(), o = () => le(p(l), "$node", n), a = w(t, "noneParameterText", 7, "无输入参数"), i = w(t, "dataKeyName", 7, "parameters");
  let s = mn(), l = /* @__PURE__ */ Je(() => Ur(s)), u = /* @__PURE__ */ Je(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[i()]) || []];
  });
  var c = Vw(), d = te(c);
  {
    var f = (_) => {
      var x = Mw();
      ot(4), j(_, x);
    };
    Le(d, (_) => {
      p(u).length !== 0 && _(f);
    });
  }
  var v = G(d, 2);
  pn(
    v,
    19,
    () => p(u),
    (_) => _.id,
    (_, x, E) => {
      rv(_, {
        get parameter() {
          return p(x);
        },
        get index() {
          return p(E);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (_) => {
      var x = Nw(), E = te(x, !0);
      ee(x), He(() => Un(E, a())), j(_, x);
    }
  ), ee(c), j(e, c);
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
var Aw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), zw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ he('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Hw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function ov(e, t) {
  Ce(t, !0), Rt(e, Hw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No();
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
        var s = Aw();
        j(i, s);
      },
      children: (i, s) => {
        var l = Dw(), u = Me(l), c = te(u);
        It(c, {
          level: 3,
          children: (v, m) => {
            ot();
            var _ = bt("输出参数");
            j(v, _);
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
            var _ = zw();
            j(v, _);
          },
          $$slots: { default: !0 }
        }), ee(u);
        var f = G(u, 2);
        ar(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), j(i, l);
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
be(ov, { data: {} }, [], [], !0);
const Iw = () => Hr("tinyflow_options");
var Bw = /* @__PURE__ */ De('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Yw = /* @__PURE__ */ he('<div class="input-more-item svelte-1cfeest"><!></div>'), jw = /* @__PURE__ */ he('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Zw = /* @__PURE__ */ he('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ww = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function iv(e, t) {
  Ce(t, !0), Rt(e, Ww);
  const [n, r] = _t(), o = () => le(p(u), "$node", n), a = w(t, "parameter", 7), i = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = mn(), u = /* @__PURE__ */ Je(() => Ur(l)), c = /* @__PURE__ */ Je(() => {
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
  }, E = () => {
    d(l, (C) => {
      let A = C.data[s()];
      if (A && i().length > 0) {
        let H = A;
        for (let K = 0; K < i().length; K++) {
          const R = i()[K];
          K == i().length - 1 ? H[R].children ? H[R].children.push({
            id: di(),
            name: "newParam",
            dataType: "String"
          }) : H[R].children = [
            {
              id: di(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[R].children;
        }
      }
      return { [s()]: [...A] };
    });
  };
  var h = Zw(), $ = Me(h), b = te($);
  {
    var S = (C) => {
      var A = ht(), H = Me(A);
      pn(H, 17, i, La, (K, R) => {
        ot();
        var I = bt(" ");
        j(K, I);
      }), j(C, A);
    };
    Le(b, (C) => {
      i().length > 1 && C(S);
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
    items: Jf,
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
  var Y = G(z, 2);
  {
    var X = (C) => {
      xt(C, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (A, H) => {
          var K = Bw();
          j(A, K);
        },
        $$slots: { default: !0 }
      });
    };
    Le(Y, (C) => {
      (p(c).dataType === "Object" || p(c).dataType === "Array") && C(X);
    });
  }
  ee(N);
  var P = G(N, 2), M = te(P);
  fr(
    Ci(M, {
      placement: "bottom",
      floating: (C) => {
        var A = jw(), H = te(A), K = G(te(H));
        hn(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            const se = Z.target.value;
            f("defaultValue", se);
          }
        }), ee(H);
        var R = G(H, 2), I = G(te(R));
        hn(I, {
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
            var se = Yw(), ge = te(se);
            xt(ge, {
              onclick: x,
              children: (ve, ue) => {
                ot();
                var ae = bt("删除");
                j(ve, ae);
              },
              $$slots: { default: !0 }
            }), ee(se), j(Z, se);
          };
          Le(ne, (Z) => {
            p(c).deleteDisabled !== !0 && Z(J);
          });
        }
        ee(A), j(C, A);
      },
      children: (C, A) => {
        Ua(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => _ = C,
    () => _
  ), ee(P), j(e, h);
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
be(iv, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Xw = /* @__PURE__ */ he("<!> <!>", 1), Kw = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), Fw = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), qw = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Uw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function ki(e, t) {
  Ce(t, !0), Rt(e, Uw);
  const [n, r] = _t(), o = () => le(p(u), "$node", n), a = (x, E = Zt, h = Zt) => {
    var $ = ht(), b = Me($);
    pn(
      b,
      19,
      E,
      (S) => `${S.id}_${S.children ? S.children.length : 0}`,
      (S, O, T) => {
        var N = Xw(), z = Me(N);
        const D = /* @__PURE__ */ Je(() => [...h(), p(T)]);
        iv(z, {
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
          var Y = (X) => {
            var P = /* @__PURE__ */ Pe(() => [...h(), p(T)]);
            a(X, () => p(O).children, () => p(P));
          };
          Le(W, (X) => {
            p(O).children && X(Y);
          });
        }
        j(S, N);
      },
      (S) => {
        var O = ht(), T = Me(O);
        {
          var N = (z) => {
            var D = Kw(), W = te(D, !0);
            ee(D), He(() => Un(W, i())), j(z, D);
          };
          Le(T, (z) => {
            h().length === 0 && z(N);
          });
        }
        j(S, O);
      }
    ), j(x, $);
  }, i = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = mn(), u = /* @__PURE__ */ Je(() => Ur(l)), c = /* @__PURE__ */ Je(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = qw(), f = te(d);
  {
    var v = (x) => {
      var E = Fw();
      ot(4), j(x, E);
    };
    Le(f, (x) => {
      p(c).length !== 0 && x(v);
    });
  }
  var m = G(f, 2);
  a(m, () => p(c) || [], () => []), ee(d), j(e, d);
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
be(ki, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Gw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Jw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), eb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const tb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function av(e, t) {
  Ce(t, !0), Rt(e, tb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No(), i = Iw();
  let s = ws(Bn([]));
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
        var c = Gw();
        j(u, c);
      },
      children: (u, c) => {
        var d = eb(), f = Me(d), v = te(f);
        It(v, {
          level: 3,
          children: (X, P) => {
            ot();
            var M = bt("输入参数");
            j(X, M);
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
            var M = Jw();
            j(X, M);
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
            j(X, M);
          },
          $$slots: { default: !0 }
        });
        var E = G(x, 4), h = te(E);
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
        Ua(b, {}), ee(E);
        var S = G(E, 4), O = te(S);
        hn(O, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), ee(S);
        var T = G(S, 4), N = te(T);
        hn(N, {
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
            j(X, M);
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
            var M = Qw();
            j(X, M);
          },
          $$slots: { default: !0 }
        }), ee(z);
        var Y = G(z, 2);
        ki(Y, {}), j(u, d);
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
be(av, { data: {} }, [], [], !0);
var nb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), rb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ib = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ab = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sv(e, t) {
  Ce(t, !0), Rt(e, ab);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No(), { updateNodeData: i } = An(), s = [
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
        var u = nb();
        j(l, u);
      },
      children: (l, u) => {
        var c = ib(), d = Me(c), f = te(d);
        It(f, {
          level: 3,
          children: (D, W) => {
            ot();
            var Y = bt("输入参数");
            j(D, Y);
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
            var Y = rb();
            j(D, Y);
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
            var Y = bt("代码");
            j(D, Y);
          },
          $$slots: { default: !0 }
        });
        var x = G(_, 4), E = te(x);
        const h = /* @__PURE__ */ Je(() => n().engine ? [n().engine] : ["qlexpress"]);
        Rr(E, {
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
        const S = /* @__PURE__ */ Je(() => n().code || "");
        hn(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (D) => {
            i(o, () => ({ code: D.target.value }));
          },
          get value() {
            return p(S);
          }
        }), ee($);
        var O = G($, 2), T = te(O);
        It(T, {
          level: 3,
          mt: "10px",
          children: (D, W) => {
            ot();
            var Y = bt("输出参数");
            j(D, Y);
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
            var Y = ob();
            j(D, Y);
          },
          $$slots: { default: !0 }
        }), ee(O);
        var z = G(O, 2);
        ki(z, {}), j(l, c);
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
be(sv, { data: {} }, [], [], !0);
var sb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), lb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ub = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const cb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function lv(e, t) {
  Ce(t, !0), Rt(e, cb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No(), { updateNodeData: i } = An();
  return aa(() => {
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
        var l = sb();
        j(s, l);
      },
      children: (s, l) => {
        var u = ub(), c = Me(u), d = te(c);
        It(d, {
          level: 3,
          children: (S, O) => {
            ot();
            var T = bt("输入参数");
            j(S, T);
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
          children: (S, O) => {
            var T = lb();
            j(S, T);
          },
          $$slots: { default: !0 }
        }), ee(c);
        var v = G(c, 2);
        ar(v, {});
        var m = G(v, 2);
        It(m, {
          level: 3,
          mt: "10px",
          children: (S, O) => {
            ot();
            var T = bt("代码");
            j(S, T);
          },
          $$slots: { default: !0 }
        });
        var _ = G(m, 4), x = te(_);
        const E = /* @__PURE__ */ Je(() => n().template || "");
        hn(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (S) => {
            i(o, () => ({ template: S.target.value }));
          },
          get value() {
            return p(E);
          }
        }), ee(_);
        var h = G(_, 2), $ = te(h);
        It($, {
          level: 3,
          mt: "10px",
          children: (S, O) => {
            ot();
            var T = bt("输出参数");
            j(S, T);
          },
          $$slots: { default: !0 }
        }), ee(h);
        var b = G(h, 2);
        ki(b, {}), j(s, u);
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
be(lv, { data: {} }, [], [], !0);
var db = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), fb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), hb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), yb = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), wb = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), bb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ he('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const _b = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function uv(e, t) {
  Ce(t, !0), Rt(e, _b);
  const n = w(t, "data", 7), r = /* @__PURE__ */ $n(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mn(), { addParameter: a } = No(), { updateNodeData: i } = An();
  return Gr(e, en(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = db();
        j(s, l);
      },
      children: (s, l) => {
        var u = xb(), c = Me(u), d = te(c), f = te(d);
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
            j(q, $e);
          },
          $$slots: { default: !0 }
        });
        var E = G(x, 2);
        xt(E, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (q, me) => {
            var $e = fb();
            j(q, $e);
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
            j(q, $e);
          },
          $$slots: { default: !0 }
        });
        var S = G(b, 2);
        xt(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (q, me) => {
            var $e = vb();
            j(q, $e);
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
            j(q, $e);
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
        var Y = G(z, 2), X = te(Y);
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
        }), ot(), ee(Y);
        var M = G(Y, 2), k = te(M);
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
            var me = gb(), $e = Me(me), Te = te($e);
            It(Te, {
              level: 3,
              children: (et, it) => {
                ot();
                var dt = bt("参数");
                j(et, dt);
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
                var dt = pb();
                j(et, dt);
              },
              $$slots: { default: !0 }
            }), ee($e);
            var Ie = G($e, 2);
            ar(Ie, { dataKeyName: "fromData" }), j(q, me);
          };
          Le(J, (q) => {
            n().bodyType === "form-data" && q(Z);
          });
        }
        var se = G(J, 2);
        {
          var ge = (q) => {
            var me = mb(), $e = Me(me), Te = te($e);
            It(Te, {
              level: 3,
              children: (et, it) => {
                ot();
                var dt = bt("参数");
                j(et, dt);
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
                var dt = hb();
                j(et, dt);
              },
              $$slots: { default: !0 }
            }), ee($e);
            var Ie = G($e, 2);
            ar(Ie, { dataKeyName: "fromUrlencoded" }), j(q, me);
          };
          Le(se, (q) => {
            n().bodyType === "x-www-form-urlencoded" && q(ge);
          });
        }
        var ve = G(se, 2);
        {
          var ue = (q) => {
            var me = yb(), $e = te(me);
            hn($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Te) => {
                i(o, { bodyJson: Te.target.value });
              }
            }), ee(me), j(q, me);
          };
          Le(ve, (q) => {
            n().bodyType === "json" && q(ue);
          });
        }
        var ae = G(ve, 2);
        {
          var ye = (q) => {
            var me = wb(), $e = te(me);
            hn($e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Te) => {
                i(o, { bodyRaw: Te.target.value });
              }
            }), ee(me), j(q, me);
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
            j(q, $e);
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
            var $e = bb();
            j(q, $e);
          },
          $$slots: { default: !0 }
        }), ee(Xe);
        var Qe = G(Xe, 2);
        ki(Qe, {}), j(s, u);
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
be(uv, { data: {} }, [], [], !0);
const $b = {
  startNode: tv,
  codeNode: sv,
  llmNode: av,
  templateNode: lv,
  httpNode: uv,
  endNode: ov
};
var Cb = /* @__PURE__ */ he("<!> ", 1);
function cv(e, t) {
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
      var u = Cb(), c = Me(u);
      Zc(c, n);
      var d = G(c);
      He(() => Un(d, ` ${r() ?? ""}`)), j(s, u);
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
var kb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Sb = /* @__PURE__ */ De('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Eb = /* @__PURE__ */ he('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function dv(e) {
  let t = ws("base"), n = ws("show");
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
  var a = Eb(), i = te(a), s = te(i), l = te(s);
  Df(l, {
    style: "width: 100%",
    items: o,
    onChange: (m) => {
      ie(t, Bn(m.value.toString()));
    }
  }), ee(s);
  var u = G(s, 2), c = te(u);
  pn(c, 21, () => r, La, (m, _) => {
    cv(m, en(() => p(_)));
  }), ee(c);
  var d = G(c, 2), f = te(d);
  xt(f, {
    children: (m, _) => {
      ot();
      var x = bt("测试业务按钮");
      j(m, x);
    },
    $$slots: { default: !0 }
  }), ee(d), ee(u), ee(i);
  var v = G(i, 2);
  xt(v, {
    onclick: () => {
      ie(n, Bn(p(n) ? "" : "show"));
    },
    children: (m, _) => {
      var x = ht(), E = Me(x);
      {
        var h = (b) => {
          var S = kb();
          j(b, S);
        }, $ = (b) => {
          var S = Sb();
          j(b, S);
        };
        Le(E, (b) => {
          p(n) === "show" ? b(h) : b($, !1);
        });
      }
      j(m, x);
    },
    $$slots: { default: !0 }
  }), ee(a), He(() => {
    yo(a, `tf-toolbar ${p(n) ?? ""}`), xe(c, "style", `display: ${(p(t) === "base" ? "flex" : "none") ?? ""}`), xe(d, "style", `display: ${(p(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), j(e, a);
}
be(dv, {}, [], [], !0);
var Pb = /* @__PURE__ */ he("<!> <!> <!>", 1), Ob = /* @__PURE__ */ he('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function fv(e, t) {
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
      id: `node_${di()}`,
      position: f,
      data: {},
      ...m
    };
    Gi.addNode(_), Gi.selectNodeOnly(_.id);
  };
  var i = Ob(), s = te(i);
  dv(s);
  var l = G(s, 2);
  const u = /* @__PURE__ */ Je(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ai.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return $f(l, en({ nodeTypes: $b }, Gi, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return p(u);
    },
    $$events: { drop: a, dragover: o },
    children: (c, d) => {
      var f = Pb(), v = Me(f);
      Nf(v, {});
      var m = G(v, 2);
      Tf(m, {});
      var _ = G(m, 2);
      Lf(_, {}), j(c, f);
    },
    $$slots: { default: !0 }
  })), ee(i), j(e, i), ke({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), y();
    }
  });
}
be(fv, { onInit: {} }, [], [], !0);
function Tb(e, t) {
  Ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return Gi.init(o.nodes, o.edges), ho("tinyflow_options", n()), Cf(e, {
    fitView: !0,
    children: (a, i) => {
      fv(a, {
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
customElements.define("tinyflow-component", be(Tb, { options: {}, onInit: {} }, [], [], !1));
//# sourceMappingURL=index.js.map
