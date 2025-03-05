var zi = { exports: {} }, jo = {}, Ai = { exports: {} }, Ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl;
function Iv() {
  if (Gl) return Ue;
  Gl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), d = Symbol.iterator;
  function f(O) {
    return O === null || typeof O != "object" ? null : (O = d && O[d] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, m = Object.assign, $ = {};
  function x(O, I, ne) {
    this.props = O, this.context = I, this.refs = $, this.updater = ne || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(O, I) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, I, "setState");
  }, x.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function S() {
  }
  S.prototype = x.prototype;
  function g(O, I, ne) {
    this.props = O, this.context = I, this.refs = $, this.updater = ne || v;
  }
  var _ = g.prototype = new S();
  _.constructor = g, m(_, x.prototype), _.isPureReactComponent = !0;
  var y = Array.isArray, k = Object.prototype.hasOwnProperty, T = { current: null }, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, I, ne) {
    var Q, W = {}, se = null, ge = null;
    if (I != null) for (Q in I.ref !== void 0 && (ge = I.ref), I.key !== void 0 && (se = "" + I.key), I) k.call(I, Q) && !V.hasOwnProperty(Q) && (W[Q] = I[Q]);
    var ve = arguments.length - 2;
    if (ve === 1) W.children = ne;
    else if (1 < ve) {
      for (var ue = Array(ve), ae = 0; ae < ve; ae++) ue[ae] = arguments[ae + 2];
      W.children = ue;
    }
    if (O && O.defaultProps) for (Q in ve = O.defaultProps, ve) W[Q] === void 0 && (W[Q] = ve[Q]);
    return { $$typeof: e, type: O, key: se, ref: ge, props: W, _owner: T.current };
  }
  function N(O, I) {
    return { $$typeof: e, type: O.type, key: I, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function A(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }
  function j(O) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(ne) {
      return I[ne];
    });
  }
  var Z = /\/+/g;
  function X(O, I) {
    return typeof O == "object" && O !== null && O.key != null ? j("" + O.key) : I.toString(36);
  }
  function P(O, I, ne, Q, W) {
    var se = typeof O;
    (se === "undefined" || se === "boolean") && (O = null);
    var ge = !1;
    if (O === null) ge = !0;
    else switch (se) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case e:
          case t:
            ge = !0;
        }
    }
    if (ge) return ge = O, W = W(ge), O = Q === "" ? "." + X(ge, 0) : Q, y(W) ? (ne = "", O != null && (ne = O.replace(Z, "$&/") + "/"), P(W, I, ne, "", function(ae) {
      return ae;
    })) : W != null && (A(W) && (W = N(W, ne + (!W.key || ge && ge.key === W.key ? "" : ("" + W.key).replace(Z, "$&/") + "/") + O)), I.push(W)), 1;
    if (ge = 0, Q = Q === "" ? "." : Q + ":", y(O)) for (var ve = 0; ve < O.length; ve++) {
      se = O[ve];
      var ue = Q + X(se, ve);
      ge += P(se, I, ne, ue, W);
    }
    else if (ue = f(O), typeof ue == "function") for (O = ue.call(O), ve = 0; !(se = O.next()).done; ) se = se.value, ue = Q + X(se, ve++), ge += P(se, I, ne, ue, W);
    else if (se === "object") throw I = String(O), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function M(O, I, ne) {
    if (O == null) return O;
    var Q = [], W = 0;
    return P(O, Q, "", "", function(se) {
      return I.call(ne, se, W++);
    }), Q;
  }
  function E(O) {
    if (O._status === -1) {
      var I = O._result;
      I = I(), I.then(function(ne) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = ne);
      }, function(ne) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = ne);
      }), O._status === -1 && (O._status = 0, O._result = I);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var C = { current: null }, R = { transition: null }, H = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: R, ReactCurrentOwner: T };
  function F() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ue.Children = { map: M, forEach: function(O, I, ne) {
    M(O, function() {
      I.apply(this, arguments);
    }, ne);
  }, count: function(O) {
    var I = 0;
    return M(O, function() {
      I++;
    }), I;
  }, toArray: function(O) {
    return M(O, function(I) {
      return I;
    }) || [];
  }, only: function(O) {
    if (!A(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Ue.Component = x, Ue.Fragment = n, Ue.Profiler = o, Ue.PureComponent = g, Ue.StrictMode = r, Ue.Suspense = l, Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, Ue.act = F, Ue.cloneElement = function(O, I, ne) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Q = m({}, O.props), W = O.key, se = O.ref, ge = O._owner;
    if (I != null) {
      if (I.ref !== void 0 && (se = I.ref, ge = T.current), I.key !== void 0 && (W = "" + I.key), O.type && O.type.defaultProps) var ve = O.type.defaultProps;
      for (ue in I) k.call(I, ue) && !V.hasOwnProperty(ue) && (Q[ue] = I[ue] === void 0 && ve !== void 0 ? ve[ue] : I[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) Q.children = ne;
    else if (1 < ue) {
      ve = Array(ue);
      for (var ae = 0; ae < ue; ae++) ve[ae] = arguments[ae + 2];
      Q.children = ve;
    }
    return { $$typeof: e, type: O.type, key: W, ref: se, props: Q, _owner: ge };
  }, Ue.createContext = function(O) {
    return O = { $$typeof: i, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: a, _context: O }, O.Consumer = O;
  }, Ue.createElement = D, Ue.createFactory = function(O) {
    var I = D.bind(null, O);
    return I.type = O, I;
  }, Ue.createRef = function() {
    return { current: null };
  }, Ue.forwardRef = function(O) {
    return { $$typeof: s, render: O };
  }, Ue.isValidElement = A, Ue.lazy = function(O) {
    return { $$typeof: c, _payload: { _status: -1, _result: O }, _init: E };
  }, Ue.memo = function(O, I) {
    return { $$typeof: u, type: O, compare: I === void 0 ? null : I };
  }, Ue.startTransition = function(O) {
    var I = R.transition;
    R.transition = {};
    try {
      O();
    } finally {
      R.transition = I;
    }
  }, Ue.unstable_act = F, Ue.useCallback = function(O, I) {
    return C.current.useCallback(O, I);
  }, Ue.useContext = function(O) {
    return C.current.useContext(O);
  }, Ue.useDebugValue = function() {
  }, Ue.useDeferredValue = function(O) {
    return C.current.useDeferredValue(O);
  }, Ue.useEffect = function(O, I) {
    return C.current.useEffect(O, I);
  }, Ue.useId = function() {
    return C.current.useId();
  }, Ue.useImperativeHandle = function(O, I, ne) {
    return C.current.useImperativeHandle(O, I, ne);
  }, Ue.useInsertionEffect = function(O, I) {
    return C.current.useInsertionEffect(O, I);
  }, Ue.useLayoutEffect = function(O, I) {
    return C.current.useLayoutEffect(O, I);
  }, Ue.useMemo = function(O, I) {
    return C.current.useMemo(O, I);
  }, Ue.useReducer = function(O, I, ne) {
    return C.current.useReducer(O, I, ne);
  }, Ue.useRef = function(O) {
    return C.current.useRef(O);
  }, Ue.useState = function(O) {
    return C.current.useState(O);
  }, Ue.useSyncExternalStore = function(O, I, ne) {
    return C.current.useSyncExternalStore(O, I, ne);
  }, Ue.useTransition = function() {
    return C.current.useTransition();
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
var Jl;
function Bv() {
  return Jl || (Jl = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.3.1", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), x = Symbol.iterator, S = "@@iterator";
      function g(h) {
        if (h === null || typeof h != "object")
          return null;
        var L = x && h[x] || h[S];
        return typeof L == "function" ? L : null;
      }
      var _ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, y = {
        transition: null
      }, k = {
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
      }, V = {}, D = null;
      function N(h) {
        D = h;
      }
      V.setExtraStackFrame = function(h) {
        D = h;
      }, V.getCurrentStack = null, V.getStackAddendum = function() {
        var h = "";
        D && (h += D);
        var L = V.getCurrentStack;
        return L && (h += L() || ""), h;
      };
      var A = !1, j = !1, Z = !1, X = !1, P = !1, M = {
        ReactCurrentDispatcher: _,
        ReactCurrentBatchConfig: y,
        ReactCurrentOwner: T
      };
      M.ReactDebugCurrentFrame = V, M.ReactCurrentActQueue = k;
      function E(h) {
        {
          for (var L = arguments.length, q = new Array(L > 1 ? L - 1 : 0), G = 1; G < L; G++)
            q[G - 1] = arguments[G];
          R("warn", h, q);
        }
      }
      function C(h) {
        {
          for (var L = arguments.length, q = new Array(L > 1 ? L - 1 : 0), G = 1; G < L; G++)
            q[G - 1] = arguments[G];
          R("error", h, q);
        }
      }
      function R(h, L, q) {
        {
          var G = M.ReactDebugCurrentFrame, de = G.getStackAddendum();
          de !== "" && (L += "%s", q = q.concat([de]));
          var Re = q.map(function(Se) {
            return String(Se);
          });
          Re.unshift("Warning: " + L), Function.prototype.apply.call(console[h], console, Re);
        }
      }
      var H = {};
      function F(h, L) {
        {
          var q = h.constructor, G = q && (q.displayName || q.name) || "ReactClass", de = G + "." + L;
          if (H[de])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, G), H[de] = !0;
        }
      }
      var O = {
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
        enqueueForceUpdate: function(h, L, q) {
          F(h, "forceUpdate");
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
        enqueueReplaceState: function(h, L, q, G) {
          F(h, "replaceState");
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
        enqueueSetState: function(h, L, q, G) {
          F(h, "setState");
        }
      }, I = Object.assign, ne = {};
      Object.freeze(ne);
      function Q(h, L, q) {
        this.props = h, this.context = L, this.refs = ne, this.updater = q || O;
      }
      Q.prototype.isReactComponent = {}, Q.prototype.setState = function(h, L) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, L, "setState");
      }, Q.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, se = function(h, L) {
          Object.defineProperty(Q.prototype, h, {
            get: function() {
              E("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var ge in W)
          W.hasOwnProperty(ge) && se(ge, W[ge]);
      }
      function ve() {
      }
      ve.prototype = Q.prototype;
      function ue(h, L, q) {
        this.props = h, this.context = L, this.refs = ne, this.updater = q || O;
      }
      var ae = ue.prototype = new ve();
      ae.constructor = ue, I(ae, Q.prototype), ae.isPureReactComponent = !0;
      function we() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Ke = Array.isArray;
      function nt(h) {
        return Ke(h);
      }
      function Qe(h) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, q = L && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return q;
        }
      }
      function et(h) {
        try {
          return U(h), !1;
        } catch {
          return !0;
        }
      }
      function U(h) {
        return "" + h;
      }
      function ye(h) {
        if (et(h))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(h)), U(h);
      }
      function ke(h, L, q) {
        var G = h.displayName;
        if (G)
          return G;
        var de = L.displayName || L.name || "";
        return de !== "" ? q + "(" + de + ")" : q;
      }
      function De(h) {
        return h.displayName || "Context";
      }
      function st(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
              var L = h;
              return De(L) + ".Consumer";
            case l:
              var q = h;
              return De(q._context) + ".Provider";
            case c:
              return ke(h, h.render, "ForwardRef");
            case v:
              var G = h.displayName || null;
              return G !== null ? G : st(h.type) || "Memo";
            case m: {
              var de = h, Re = de._payload, Se = de._init;
              try {
                return st(Se(Re));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ie = Object.prototype.hasOwnProperty, tt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, it, vt, Tt;
      Tt = {};
      function ce(h) {
        if (Ie.call(h, "ref")) {
          var L = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Be(h) {
        if (Ie.call(h, "key")) {
          var L = Object.getOwnPropertyDescriptor(h, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function pe(h, L) {
        var q = function() {
          it || (it = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        q.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: q,
          configurable: !0
        });
      }
      function sn(h, L) {
        var q = function() {
          vt || (vt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        q.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: q,
          configurable: !0
        });
      }
      function Ft(h) {
        if (typeof h.ref == "string" && T.current && h.__self && T.current.stateNode !== h.__self) {
          var L = st(T.current.type);
          Tt[L] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, h.ref), Tt[L] = !0);
        }
      }
      var Ne = function(h, L, q, G, de, Re, Se) {
        var Ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: h,
          key: L,
          ref: q,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: Re
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
          value: G
        }), Object.defineProperty(Ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
      };
      function kt(h, L, q) {
        var G, de = {}, Re = null, Se = null, Ze = null, rt = null;
        if (L != null) {
          ce(L) && (Se = L.ref, Ft(L)), Be(L) && (ye(L.key), Re = "" + L.key), Ze = L.__self === void 0 ? null : L.__self, rt = L.__source === void 0 ? null : L.__source;
          for (G in L)
            Ie.call(L, G) && !tt.hasOwnProperty(G) && (de[G] = L[G]);
        }
        var pt = arguments.length - 2;
        if (pt === 1)
          de.children = q;
        else if (pt > 1) {
          for (var Et = Array(pt), St = 0; St < pt; St++)
            Et[St] = arguments[St + 2];
          Object.freeze && Object.freeze(Et), de.children = Et;
        }
        if (h && h.defaultProps) {
          var Mt = h.defaultProps;
          for (G in Mt)
            de[G] === void 0 && (de[G] = Mt[G]);
        }
        if (Re || Se) {
          var Rt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Re && pe(de, Rt), Se && sn(de, Rt);
        }
        return Ne(h, Re, Se, Ze, rt, T.current, de);
      }
      function Ve(h, L) {
        var q = Ne(h.type, L, h.ref, h._self, h._source, h._owner, h.props);
        return q;
      }
      function Xe(h, L, q) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var G, de = I({}, h.props), Re = h.key, Se = h.ref, Ze = h._self, rt = h._source, pt = h._owner;
        if (L != null) {
          ce(L) && (Se = L.ref, pt = T.current), Be(L) && (ye(L.key), Re = "" + L.key);
          var Et;
          h.type && h.type.defaultProps && (Et = h.type.defaultProps);
          for (G in L)
            Ie.call(L, G) && !tt.hasOwnProperty(G) && (L[G] === void 0 && Et !== void 0 ? de[G] = Et[G] : de[G] = L[G]);
        }
        var St = arguments.length - 2;
        if (St === 1)
          de.children = q;
        else if (St > 1) {
          for (var Mt = Array(St), Rt = 0; Rt < St; Rt++)
            Mt[Rt] = arguments[Rt + 2];
          de.children = Mt;
        }
        return Ne(h.type, Re, Se, Ze, rt, pt, de);
      }
      function ut(h) {
        return typeof h == "object" && h !== null && h.$$typeof === r;
      }
      var Zt = ".", Hn = ":";
      function Tn(h) {
        var L = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, G = h.replace(L, function(de) {
          return q[de];
        });
        return "$" + G;
      }
      var zt = !1, Ot = /\/+/g;
      function Yt(h) {
        return h.replace(Ot, "$&/");
      }
      function At(h, L) {
        return typeof h == "object" && h !== null && h.key != null ? (ye(h.key), Tn("" + h.key)) : L.toString(36);
      }
      function $t(h, L, q, G, de) {
        var Re = typeof h;
        (Re === "undefined" || Re === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (Re) {
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
          var Ze = h, rt = de(Ze), pt = G === "" ? Zt + At(Ze, 0) : G;
          if (nt(rt)) {
            var Et = "";
            pt != null && (Et = Yt(pt) + "/"), $t(rt, L, Et, "", function(Hv) {
              return Hv;
            });
          } else rt != null && (ut(rt) && (rt.key && (!Ze || Ze.key !== rt.key) && ye(rt.key), rt = Ve(
            rt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (rt.key && (!Ze || Ze.key !== rt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Yt("" + rt.key) + "/"
            ) : "") + pt
          )), L.push(rt));
          return 1;
        }
        var St, Mt, Rt = 0, Wt = G === "" ? Zt : G + Hn;
        if (nt(h))
          for (var Li = 0; Li < h.length; Li++)
            St = h[Li], Mt = Wt + At(St, Li), Rt += $t(St, L, q, Mt, de);
        else {
          var us = g(h);
          if (typeof us == "function") {
            var Kl = h;
            us === Kl.entries && (zt || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), zt = !0);
            for (var zv = us.call(Kl), ql, Av = 0; !(ql = zv.next()).done; )
              St = ql.value, Mt = Wt + At(St, Av++), Rt += $t(St, L, q, Mt, de);
          } else if (Re === "object") {
            var Ul = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Ul === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Ul) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Rt;
      }
      function In(h, L, q) {
        if (h == null)
          return h;
        var G = [], de = 0;
        return $t(h, G, "", "", function(Re) {
          return L.call(q, Re, de++);
        }), G;
      }
      function _n(h) {
        var L = 0;
        return In(h, function() {
          L++;
        }), L;
      }
      function Qt(h, L, q) {
        In(h, function() {
          L.apply(this, arguments);
        }, q);
      }
      function rr(h) {
        return In(h, function(L) {
          return L;
        }) || [];
      }
      function or(h) {
        if (!ut(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function xr(h) {
        var L = {
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
        L.Provider = {
          $$typeof: l,
          _context: L
        };
        var q = !1, G = !1, de = !1;
        {
          var Re = {
            $$typeof: u,
            _context: L
          };
          Object.defineProperties(Re, {
            Provider: {
              get: function() {
                return G || (G = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Se) {
                L.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Se) {
                L._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Se) {
                L._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Se) {
                L._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Se) {
                de || (E("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), de = !0);
              }
            }
          }), L.Consumer = Re;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var ir = -1, $r = 0, Hr = 1, zo = 2;
      function Ao(h) {
        if (h._status === ir) {
          var L = h._result, q = L();
          if (q.then(function(Re) {
            if (h._status === $r || h._status === ir) {
              var Se = h;
              Se._status = Hr, Se._result = Re;
            }
          }, function(Re) {
            if (h._status === $r || h._status === ir) {
              var Se = h;
              Se._status = zo, Se._result = Re;
            }
          }), h._status === ir) {
            var G = h;
            G._status = $r, G._result = q;
          }
        }
        if (h._status === Hr) {
          var de = h._result;
          return de === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw h._result;
      }
      function Ho(h) {
        var L = {
          // We use these fields to store the result.
          _status: ir,
          _result: h
        }, q = {
          $$typeof: m,
          _payload: L,
          _init: Ao
        };
        {
          var G, de;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Re) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Re, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(Re) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = Re, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function Io(h) {
        h != null && h.$$typeof === v ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? C("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: c,
          render: h
        };
        {
          var q;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(G) {
              q = G, !h.name && !h.displayName && (h.displayName = G);
            }
          });
        }
        return L;
      }
      var z;
      z = Symbol.for("react.module.reference");
      function re(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === a || h === s || P || h === i || h === d || h === f || X || h === $ || A || j || Z || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === v || h.$$typeof === l || h.$$typeof === u || h.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === z || h.getModuleId !== void 0));
      }
      function be(h, L) {
        re(h) || C("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var q = {
          $$typeof: v,
          type: h,
          compare: L === void 0 ? null : L
        };
        {
          var G;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(de) {
              G = de, !h.name && !h.displayName && (h.displayName = de);
            }
          });
        }
        return q;
      }
      function Ee() {
        var h = _.current;
        return h === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Y(h) {
        var L = Ee();
        if (h._context !== void 0) {
          var q = h._context;
          q.Consumer === h ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === h && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(h);
      }
      function ct(h) {
        var L = Ee();
        return L.useState(h);
      }
      function qe(h, L, q) {
        var G = Ee();
        return G.useReducer(h, L, q);
      }
      function je(h) {
        var L = Ee();
        return L.useRef(h);
      }
      function It(h, L) {
        var q = Ee();
        return q.useEffect(h, L);
      }
      function ht(h, L) {
        var q = Ee();
        return q.useInsertionEffect(h, L);
      }
      function _t(h, L) {
        var q = Ee();
        return q.useLayoutEffect(h, L);
      }
      function Kt(h, L) {
        var q = Ee();
        return q.useCallback(h, L);
      }
      function Bn(h, L) {
        var q = Ee();
        return q.useMemo(h, L);
      }
      function jn(h, L, q) {
        var G = Ee();
        return G.useImperativeHandle(h, L, q);
      }
      function Ht(h, L) {
        {
          var q = Ee();
          return q.useDebugValue(h, L);
        }
      }
      function _r() {
        var h = Ee();
        return h.useTransition();
      }
      function to(h) {
        var L = Ee();
        return L.useDeferredValue(h);
      }
      function no() {
        var h = Ee();
        return h.useId();
      }
      function es(h, L, q) {
        var G = Ee();
        return G.useSyncExternalStore(h, L, q);
      }
      var We = 0, ts, Bo, Ti, Ol, Ml, Dl, Vl;
      function Nl() {
      }
      Nl.__reactDisabledLog = !0;
      function wv() {
        {
          if (We === 0) {
            ts = console.log, Bo = console.info, Ti = console.warn, Ol = console.error, Ml = console.group, Dl = console.groupCollapsed, Vl = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Nl,
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
          We++;
        }
      }
      function bv() {
        {
          if (We--, We === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, h, {
                value: ts
              }),
              info: I({}, h, {
                value: Bo
              }),
              warn: I({}, h, {
                value: Ti
              }),
              error: I({}, h, {
                value: Ol
              }),
              group: I({}, h, {
                value: Ml
              }),
              groupCollapsed: I({}, h, {
                value: Dl
              }),
              groupEnd: I({}, h, {
                value: Vl
              })
            });
          }
          We < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ns = M.ReactCurrentDispatcher, rs;
      function Oi(h, L, q) {
        {
          if (rs === void 0)
            try {
              throw Error();
            } catch (de) {
              var G = de.stack.trim().match(/\n( *(at )?)/);
              rs = G && G[1] || "";
            }
          return `
` + rs + h;
        }
      }
      var os = !1, Mi;
      {
        var xv = typeof WeakMap == "function" ? WeakMap : Map;
        Mi = new xv();
      }
      function Rl(h, L) {
        if (!h || os)
          return "";
        {
          var q = Mi.get(h);
          if (q !== void 0)
            return q;
        }
        var G;
        os = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Re;
        Re = ns.current, ns.current = null, wv();
        try {
          if (L) {
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
              } catch (Wt) {
                G = Wt;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (Wt) {
                G = Wt;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Wt) {
              G = Wt;
            }
            h();
          }
        } catch (Wt) {
          if (Wt && G && typeof Wt.stack == "string") {
            for (var Ze = Wt.stack.split(`
`), rt = G.stack.split(`
`), pt = Ze.length - 1, Et = rt.length - 1; pt >= 1 && Et >= 0 && Ze[pt] !== rt[Et]; )
              Et--;
            for (; pt >= 1 && Et >= 0; pt--, Et--)
              if (Ze[pt] !== rt[Et]) {
                if (pt !== 1 || Et !== 1)
                  do
                    if (pt--, Et--, Et < 0 || Ze[pt] !== rt[Et]) {
                      var St = `
` + Ze[pt].replace(" at new ", " at ");
                      return h.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", h.displayName)), typeof h == "function" && Mi.set(h, St), St;
                    }
                  while (pt >= 1 && Et >= 0);
                break;
              }
          }
        } finally {
          os = !1, ns.current = Re, bv(), Error.prepareStackTrace = de;
        }
        var Mt = h ? h.displayName || h.name : "", Rt = Mt ? Oi(Mt) : "";
        return typeof h == "function" && Mi.set(h, Rt), Rt;
      }
      function $v(h, L, q) {
        return Rl(h, !1);
      }
      function _v(h) {
        var L = h.prototype;
        return !!(L && L.isReactComponent);
      }
      function Di(h, L, q) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Rl(h, _v(h));
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
              return $v(h.render);
            case v:
              return Di(h.type, L, q);
            case m: {
              var G = h, de = G._payload, Re = G._init;
              try {
                return Di(Re(de), L, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Ll = {}, zl = M.ReactDebugCurrentFrame;
      function Vi(h) {
        if (h) {
          var L = h._owner, q = Di(h.type, h._source, L ? L.type : null);
          zl.setExtraStackFrame(q);
        } else
          zl.setExtraStackFrame(null);
      }
      function Cv(h, L, q, G, de) {
        {
          var Re = Function.call.bind(Ie);
          for (var Se in h)
            if (Re(h, Se)) {
              var Ze = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var rt = Error((G || "React class") + ": " + q + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw rt.name = "Invariant Violation", rt;
                }
                Ze = h[Se](L, Se, G, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (pt) {
                Ze = pt;
              }
              Ze && !(Ze instanceof Error) && (Vi(de), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", q, Se, typeof Ze), Vi(null)), Ze instanceof Error && !(Ze.message in Ll) && (Ll[Ze.message] = !0, Vi(de), C("Failed %s type: %s", q, Ze.message), Vi(null));
            }
        }
      }
      function ro(h) {
        if (h) {
          var L = h._owner, q = Di(h.type, h._source, L ? L.type : null);
          N(q);
        } else
          N(null);
      }
      var is;
      is = !1;
      function Al() {
        if (T.current) {
          var h = st(T.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function kv(h) {
        if (h !== void 0) {
          var L = h.fileName.replace(/^.*[\\\/]/, ""), q = h.lineNumber;
          return `

Check your code at ` + L + ":" + q + ".";
        }
        return "";
      }
      function Ev(h) {
        return h != null ? kv(h.__source) : "";
      }
      var Hl = {};
      function Sv(h) {
        var L = Al();
        if (!L) {
          var q = typeof h == "string" ? h : h.displayName || h.name;
          q && (L = `

Check the top-level render call using <` + q + ">.");
        }
        return L;
      }
      function Il(h, L) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var q = Sv(L);
          if (!Hl[q]) {
            Hl[q] = !0;
            var G = "";
            h && h._owner && h._owner !== T.current && (G = " It was passed a child from " + st(h._owner.type) + "."), ro(h), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, G), ro(null);
          }
        }
      }
      function Bl(h, L) {
        if (typeof h == "object") {
          if (nt(h))
            for (var q = 0; q < h.length; q++) {
              var G = h[q];
              ut(G) && Il(G, L);
            }
          else if (ut(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var de = g(h);
            if (typeof de == "function" && de !== h.entries)
              for (var Re = de.call(h), Se; !(Se = Re.next()).done; )
                ut(Se.value) && Il(Se.value, L);
          }
        }
      }
      function jl(h) {
        {
          var L = h.type;
          if (L == null || typeof L == "string")
            return;
          var q;
          if (typeof L == "function")
            q = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === v))
            q = L.propTypes;
          else
            return;
          if (q) {
            var G = st(L);
            Cv(q, h.props, "prop", G, h);
          } else if (L.PropTypes !== void 0 && !is) {
            is = !0;
            var de = st(L);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pv(h) {
        {
          for (var L = Object.keys(h.props), q = 0; q < L.length; q++) {
            var G = L[q];
            if (G !== "children" && G !== "key") {
              ro(h), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), ro(null);
              break;
            }
          }
          h.ref !== null && (ro(h), C("Invalid attribute `ref` supplied to `React.Fragment`."), ro(null));
        }
      }
      function Zl(h, L, q) {
        var G = re(h);
        if (!G) {
          var de = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Ev(L);
          Re ? de += Re : de += Al();
          var Se;
          h === null ? Se = "null" : nt(h) ? Se = "array" : h !== void 0 && h.$$typeof === r ? (Se = "<" + (st(h.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, de);
        }
        var Ze = kt.apply(this, arguments);
        if (Ze == null)
          return Ze;
        if (G)
          for (var rt = 2; rt < arguments.length; rt++)
            Bl(arguments[rt], h);
        return h === a ? Pv(Ze) : jl(Ze), Ze;
      }
      var Yl = !1;
      function Tv(h) {
        var L = Zl.bind(null, h);
        return L.type = h, Yl || (Yl = !0, E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), L;
      }
      function Ov(h, L, q) {
        for (var G = Xe.apply(this, arguments), de = 2; de < arguments.length; de++)
          Bl(arguments[de], G.type);
        return jl(G), G;
      }
      function Mv(h, L) {
        var q = y.transition;
        y.transition = {};
        var G = y.transition;
        y.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (y.transition = q, q === null && G._updatedFibers) {
            var de = G._updatedFibers.size;
            de > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var Wl = !1, Ni = null;
      function Dv(h) {
        if (Ni === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), q = e && e[L];
            Ni = q.call(e, "timers").setImmediate;
          } catch {
            Ni = function(de) {
              Wl === !1 && (Wl = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Re = new MessageChannel();
              Re.port1.onmessage = de, Re.port2.postMessage(void 0);
            };
          }
        return Ni(h);
      }
      var oo = 0, Xl = !1;
      function Fl(h) {
        {
          var L = oo;
          oo++, k.current === null && (k.current = []);
          var q = k.isBatchingLegacy, G;
          try {
            if (k.isBatchingLegacy = !0, G = h(), !q && k.didScheduleLegacyUpdate) {
              var de = k.current;
              de !== null && (k.didScheduleLegacyUpdate = !1, ls(de));
            }
          } catch (Mt) {
            throw Ri(L), Mt;
          } finally {
            k.isBatchingLegacy = q;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var Re = G, Se = !1, Ze = {
              then: function(Mt, Rt) {
                Se = !0, Re.then(function(Wt) {
                  Ri(L), oo === 0 ? as(Wt, Mt, Rt) : Mt(Wt);
                }, function(Wt) {
                  Ri(L), Rt(Wt);
                });
              }
            };
            return !Xl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (Xl = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ze;
          } else {
            var rt = G;
            if (Ri(L), oo === 0) {
              var pt = k.current;
              pt !== null && (ls(pt), k.current = null);
              var Et = {
                then: function(Mt, Rt) {
                  k.current === null ? (k.current = [], as(rt, Mt, Rt)) : Mt(rt);
                }
              };
              return Et;
            } else {
              var St = {
                then: function(Mt, Rt) {
                  Mt(rt);
                }
              };
              return St;
            }
          }
        }
      }
      function Ri(h) {
        h !== oo - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), oo = h;
      }
      function as(h, L, q) {
        {
          var G = k.current;
          if (G !== null)
            try {
              ls(G), Dv(function() {
                G.length === 0 ? (k.current = null, L(h)) : as(h, L, q);
              });
            } catch (de) {
              q(de);
            }
          else
            L(h);
        }
      }
      var ss = !1;
      function ls(h) {
        if (!ss) {
          ss = !0;
          var L = 0;
          try {
            for (; L < h.length; L++) {
              var q = h[L];
              do
                q = q(!0);
              while (q !== null);
            }
            h.length = 0;
          } catch (G) {
            throw h = h.slice(L + 1), G;
          } finally {
            ss = !1;
          }
        }
      }
      var Vv = Zl, Nv = Ov, Rv = Tv, Lv = {
        map: In,
        forEach: Qt,
        count: _n,
        toArray: rr,
        only: or
      };
      t.Children = Lv, t.Component = Q, t.Fragment = a, t.Profiler = s, t.PureComponent = ue, t.StrictMode = i, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.act = Fl, t.cloneElement = Nv, t.createContext = xr, t.createElement = Vv, t.createFactory = Rv, t.createRef = we, t.forwardRef = Io, t.isValidElement = ut, t.lazy = Ho, t.memo = be, t.startTransition = Mv, t.unstable_act = Fl, t.useCallback = Kt, t.useContext = Y, t.useDebugValue = Ht, t.useDeferredValue = to, t.useEffect = It, t.useId = no, t.useImperativeHandle = jn, t.useInsertionEffect = ht, t.useLayoutEffect = _t, t.useMemo = Bn, t.useReducer = qe, t.useRef = je, t.useState = ct, t.useSyncExternalStore = es, t.useTransition = _r, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ko, Ko.exports)), Ko.exports;
}
var Ql;
function Xs() {
  return Ql || (Ql = 1, process.env.NODE_ENV === "production" ? Ai.exports = Iv() : Ai.exports = Bv()), Ai.exports;
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
var eu;
function jv() {
  if (eu) return jo;
  eu = 1;
  var e = Xs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return jo.Fragment = n, jo.jsx = i, jo.jsxs = i, jo;
}
var Zo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tu;
function Zv() {
  return tu || (tu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xs(), t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, $ = "@@iterator";
    function x(z) {
      if (z === null || typeof z != "object")
        return null;
      var re = m && z[m] || z[$];
      return typeof re == "function" ? re : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(z) {
      {
        for (var re = arguments.length, be = new Array(re > 1 ? re - 1 : 0), Ee = 1; Ee < re; Ee++)
          be[Ee - 1] = arguments[Ee];
        _("error", z, be);
      }
    }
    function _(z, re, be) {
      {
        var Ee = S.ReactDebugCurrentFrame, Y = Ee.getStackAddendum();
        Y !== "" && (re += "%s", be = be.concat([Y]));
        var ct = be.map(function(qe) {
          return String(qe);
        });
        ct.unshift("Warning: " + re), Function.prototype.apply.call(console[z], console, ct);
      }
    }
    var y = !1, k = !1, T = !1, V = !1, D = !1, N;
    N = Symbol.for("react.module.reference");
    function A(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === a || D || z === o || z === u || z === c || V || z === v || y || k || T || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === d || z.$$typeof === i || z.$$typeof === s || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === N || z.getModuleId !== void 0));
    }
    function j(z, re, be) {
      var Ee = z.displayName;
      if (Ee)
        return Ee;
      var Y = re.displayName || re.name || "";
      return Y !== "" ? be + "(" + Y + ")" : be;
    }
    function Z(z) {
      return z.displayName || "Context";
    }
    function X(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
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
      if (typeof z == "object")
        switch (z.$$typeof) {
          case s:
            var re = z;
            return Z(re) + ".Consumer";
          case i:
            var be = z;
            return Z(be._context) + ".Provider";
          case l:
            return j(z, z.render, "ForwardRef");
          case d:
            var Ee = z.displayName || null;
            return Ee !== null ? Ee : X(z.type) || "Memo";
          case f: {
            var Y = z, ct = Y._payload, qe = Y._init;
            try {
              return X(qe(ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, E, C, R, H, F, O, I;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function Q() {
      {
        if (M === 0) {
          E = console.log, C = console.info, R = console.warn, H = console.error, F = console.group, O = console.groupCollapsed, I = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
        M++;
      }
    }
    function W() {
      {
        if (M--, M === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, z, {
              value: E
            }),
            info: P({}, z, {
              value: C
            }),
            warn: P({}, z, {
              value: R
            }),
            error: P({}, z, {
              value: H
            }),
            group: P({}, z, {
              value: F
            }),
            groupCollapsed: P({}, z, {
              value: O
            }),
            groupEnd: P({}, z, {
              value: I
            })
          });
        }
        M < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = S.ReactCurrentDispatcher, ge;
    function ve(z, re, be) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (Y) {
            var Ee = Y.stack.trim().match(/\n( *(at )?)/);
            ge = Ee && Ee[1] || "";
          }
        return `
` + ge + z;
      }
    }
    var ue = !1, ae;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new we();
    }
    function Ke(z, re) {
      if (!z || ue)
        return "";
      {
        var be = ae.get(z);
        if (be !== void 0)
          return be;
      }
      var Ee;
      ue = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ct;
      ct = se.current, se.current = null, Q();
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
            } catch (Ht) {
              Ee = Ht;
            }
            Reflect.construct(z, [], qe);
          } else {
            try {
              qe.call();
            } catch (Ht) {
              Ee = Ht;
            }
            z.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            Ee = Ht;
          }
          z();
        }
      } catch (Ht) {
        if (Ht && Ee && typeof Ht.stack == "string") {
          for (var je = Ht.stack.split(`
`), It = Ee.stack.split(`
`), ht = je.length - 1, _t = It.length - 1; ht >= 1 && _t >= 0 && je[ht] !== It[_t]; )
            _t--;
          for (; ht >= 1 && _t >= 0; ht--, _t--)
            if (je[ht] !== It[_t]) {
              if (ht !== 1 || _t !== 1)
                do
                  if (ht--, _t--, _t < 0 || je[ht] !== It[_t]) {
                    var Kt = `
` + je[ht].replace(" at new ", " at ");
                    return z.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", z.displayName)), typeof z == "function" && ae.set(z, Kt), Kt;
                  }
                while (ht >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = ct, W(), Error.prepareStackTrace = Y;
      }
      var Bn = z ? z.displayName || z.name : "", jn = Bn ? ve(Bn) : "";
      return typeof z == "function" && ae.set(z, jn), jn;
    }
    function nt(z, re, be) {
      return Ke(z, !1);
    }
    function Qe(z) {
      var re = z.prototype;
      return !!(re && re.isReactComponent);
    }
    function et(z, re, be) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return Ke(z, Qe(z));
      if (typeof z == "string")
        return ve(z);
      switch (z) {
        case u:
          return ve("Suspense");
        case c:
          return ve("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return nt(z.render);
          case d:
            return et(z.type, re, be);
          case f: {
            var Ee = z, Y = Ee._payload, ct = Ee._init;
            try {
              return et(ct(Y), re, be);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, ke = S.ReactDebugCurrentFrame;
    function De(z) {
      if (z) {
        var re = z._owner, be = et(z.type, z._source, re ? re.type : null);
        ke.setExtraStackFrame(be);
      } else
        ke.setExtraStackFrame(null);
    }
    function st(z, re, be, Ee, Y) {
      {
        var ct = Function.call.bind(U);
        for (var qe in z)
          if (ct(z, qe)) {
            var je = void 0;
            try {
              if (typeof z[qe] != "function") {
                var It = Error((Ee || "React class") + ": " + be + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw It.name = "Invariant Violation", It;
              }
              je = z[qe](re, qe, Ee, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              je = ht;
            }
            je && !(je instanceof Error) && (De(Y), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", be, qe, typeof je), De(null)), je instanceof Error && !(je.message in ye) && (ye[je.message] = !0, De(Y), g("Failed %s type: %s", be, je.message), De(null));
          }
      }
    }
    var Ie = Array.isArray;
    function tt(z) {
      return Ie(z);
    }
    function it(z) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, be = re && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return be;
      }
    }
    function vt(z) {
      try {
        return Tt(z), !1;
      } catch {
        return !0;
      }
    }
    function Tt(z) {
      return "" + z;
    }
    function ce(z) {
      if (vt(z))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(z)), Tt(z);
    }
    var Be = S.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, Ft;
    function Ne(z) {
      if (U.call(z, "ref")) {
        var re = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function kt(z) {
      if (U.call(z, "key")) {
        var re = Object.getOwnPropertyDescriptor(z, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function Ve(z, re) {
      typeof z.ref == "string" && Be.current;
    }
    function Xe(z, re) {
      {
        var be = function() {
          sn || (sn = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        be.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function ut(z, re) {
      {
        var be = function() {
          Ft || (Ft = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        be.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var Zt = function(z, re, be, Ee, Y, ct, qe) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: re,
        ref: be,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: ct
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
        value: Y
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function Hn(z, re, be, Ee, Y) {
      {
        var ct, qe = {}, je = null, It = null;
        be !== void 0 && (ce(be), je = "" + be), kt(re) && (ce(re.key), je = "" + re.key), Ne(re) && (It = re.ref, Ve(re, Y));
        for (ct in re)
          U.call(re, ct) && !pe.hasOwnProperty(ct) && (qe[ct] = re[ct]);
        if (z && z.defaultProps) {
          var ht = z.defaultProps;
          for (ct in ht)
            qe[ct] === void 0 && (qe[ct] = ht[ct]);
        }
        if (je || It) {
          var _t = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          je && Xe(qe, _t), It && ut(qe, _t);
        }
        return Zt(z, je, It, Y, Ee, Be.current, qe);
      }
    }
    var Tn = S.ReactCurrentOwner, zt = S.ReactDebugCurrentFrame;
    function Ot(z) {
      if (z) {
        var re = z._owner, be = et(z.type, z._source, re ? re.type : null);
        zt.setExtraStackFrame(be);
      } else
        zt.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function At(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function $t() {
      {
        if (Tn.current) {
          var z = X(Tn.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function In(z) {
      return "";
    }
    var _n = {};
    function Qt(z) {
      {
        var re = $t();
        if (!re) {
          var be = typeof z == "string" ? z : z.displayName || z.name;
          be && (re = `

Check the top-level render call using <` + be + ">.");
        }
        return re;
      }
    }
    function rr(z, re) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var be = Qt(re);
        if (_n[be])
          return;
        _n[be] = !0;
        var Ee = "";
        z && z._owner && z._owner !== Tn.current && (Ee = " It was passed a child from " + X(z._owner.type) + "."), Ot(z), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Ee), Ot(null);
      }
    }
    function or(z, re) {
      {
        if (typeof z != "object")
          return;
        if (tt(z))
          for (var be = 0; be < z.length; be++) {
            var Ee = z[be];
            At(Ee) && rr(Ee, re);
          }
        else if (At(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Y = x(z);
          if (typeof Y == "function" && Y !== z.entries)
            for (var ct = Y.call(z), qe; !(qe = ct.next()).done; )
              At(qe.value) && rr(qe.value, re);
        }
      }
    }
    function xr(z) {
      {
        var re = z.type;
        if (re == null || typeof re == "string")
          return;
        var be;
        if (typeof re == "function")
          be = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === d))
          be = re.propTypes;
        else
          return;
        if (be) {
          var Ee = X(re);
          st(be, z.props, "prop", Ee, z);
        } else if (re.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var Y = X(re);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(z) {
      {
        for (var re = Object.keys(z.props), be = 0; be < re.length; be++) {
          var Ee = re[be];
          if (Ee !== "children" && Ee !== "key") {
            Ot(z), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), Ot(null);
            break;
          }
        }
        z.ref !== null && (Ot(z), g("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var $r = {};
    function Hr(z, re, be, Ee, Y, ct) {
      {
        var qe = A(z);
        if (!qe) {
          var je = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var It = In();
          It ? je += It : je += $t();
          var ht;
          z === null ? ht = "null" : tt(z) ? ht = "array" : z !== void 0 && z.$$typeof === t ? (ht = "<" + (X(z.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof z, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, je);
        }
        var _t = Hn(z, re, be, Y, ct);
        if (_t == null)
          return _t;
        if (qe) {
          var Kt = re.children;
          if (Kt !== void 0)
            if (Ee)
              if (tt(Kt)) {
                for (var Bn = 0; Bn < Kt.length; Bn++)
                  or(Kt[Bn], z);
                Object.freeze && Object.freeze(Kt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(Kt, z);
        }
        if (U.call(re, "key")) {
          var jn = X(z), Ht = Object.keys(re).filter(function(no) {
            return no !== "key";
          }), _r = Ht.length > 0 ? "{key: someKey, " + Ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$r[jn + _r]) {
            var to = Ht.length > 0 ? "{" + Ht.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, jn, to, jn), $r[jn + _r] = !0;
          }
        }
        return z === r ? ir(_t) : xr(_t), _t;
      }
    }
    function zo(z, re, be) {
      return Hr(z, re, be, !0);
    }
    function Ao(z, re, be) {
      return Hr(z, re, be, !1);
    }
    var Ho = Ao, Io = zo;
    Zo.Fragment = r, Zo.jsx = Ho, Zo.jsxs = Io;
  }()), Zo;
}
var nu;
function Yv() {
  return nu || (nu = 1, process.env.NODE_ENV === "production" ? zi.exports = jv() : zi.exports = Zv()), zi.exports;
}
var Wv = Yv(), Yo = Xs(), Xv = Object.defineProperty, uc = (e) => {
  throw TypeError(e);
}, Fv = (e, t, n) => t in e ? Xv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cn = (e, t, n) => Fv(e, typeof t != "symbol" ? t + "" : t, n), Fs = (e, t, n) => t.has(e) || uc("Cannot " + n), Nt = (e, t, n) => (Fs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), so = (e, t, n) => t.has(e) ? uc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ta = (e, t, n, r) => (Fs(e, t, "write to private field"), t.set(e, n), n), Kv = (e, t, n) => (Fs(e, t, "access private method"), n);
const qv = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qv);
let Mo = !1, Uv = !1;
function Gv() {
  Mo = !0;
}
Gv();
const Ks = 1, qs = 2, cc = 4, Jv = 8, Qv = 16, ep = 1, tp = 2, dc = 4, np = 8, rp = 16, fc = 1, op = 2, vc = "[", Us = "[!", Gs = "]", uo = {}, ln = Symbol(), pc = "http://www.w3.org/2000/svg", ip = !1, Vn = 2, gc = 4, Pa = 8, Js = 16, mr = 32, Do = 64, na = 128, Sn = 256, ra = 512, Gt = 1024, yr = 2048, Ur = 4096, cr = 8192, Ta = 16384, ap = 32768, Vo = 65536, sp = 1 << 17, lp = 1 << 19, hc = 1 << 20, Tr = Symbol("$state"), Qs = Symbol("legacy props"), up = Symbol("");
var gi = Array.isArray, cp = Array.prototype.indexOf, el = Array.from, oa = Object.keys, ei = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, mc = Object.getOwnPropertyDescriptors, dp = Object.prototype, fp = Array.prototype, tl = Object.getPrototypeOf;
function Wo(e) {
  return typeof e == "function";
}
const jt = () => {
};
function vp(e) {
  return e();
}
function ti(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const pp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ia = !1, aa = !1, bs = [], xs = [];
function yc() {
  ia = !1;
  const e = bs.slice();
  bs = [], ti(e);
}
function wc() {
  aa = !1;
  const e = xs.slice();
  xs = [], ti(e);
}
function hi(e) {
  ia || (ia = !0, queueMicrotask(yc)), bs.push(e);
}
function gp(e) {
  aa || (aa = !0, pp(wc)), xs.push(e);
}
function hp() {
  ia && yc(), aa && wc();
}
function bc(e) {
  return e === this.v;
}
function nl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function rl(e) {
  return !nl(e, this.v);
}
function mp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $p(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _p() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function kp() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ep() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bc,
    rv: 0,
    wv: 0
  };
  return n;
}
function yo(e) {
  return /* @__PURE__ */ xc(dn(e));
}
// @__NO_SIDE_EFFECTS__
function mi(e, t = !1) {
  var n;
  const r = dn(e);
  return t || (r.equals = rl), Mo && lt !== null && lt.l !== null && ((n = lt.l).s ?? (n.s = [])).push(r), r;
}
function fe(e, t = !1) {
  return /* @__PURE__ */ xc(/* @__PURE__ */ mi(e, t));
}
// @__NO_SIDE_EFFECTS__
function xc(e) {
  return gt !== null && !Zn && gt.f & Vn && (Yn === null ? Op([e]) : Yn.push(e)), e;
}
function ie(e, t) {
  return gt !== null && !Zn && Ra() && gt.f & (Vn | Js) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Yn === null || !Yn.includes(e)) && Ep(), $s(e, t);
}
function $s(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Oc(), $c(e, yr), Ra() && dt !== null && dt.f & Gt && !(dt.f & (mr | Do)) && (sr === null ? Mp([e]) : sr.push(e))), t;
}
function ru(e, t = 1) {
  var n = p(e), r = t === 1 ? n++ : n--;
  return ie(e, n), r;
}
function $c(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ra(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & yr || !r && i === dt || (Nn(i, t), s & (Gt | Sn) && (s & Vn ? $c(
        /** @type {Derived} */
        i,
        Ur
      ) : Va(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  var t = Vn | yr, n = gt !== null && gt.f & Vn ? (
    /** @type {Derived} */
    gt
  ) : null;
  return dt === null || n !== null && n.f & Sn ? t |= Sn : dt.f |= hc, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: bc,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? dt
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Fe(e);
  return t.equals = rl, t;
}
function _c(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Pn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Sp(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Vn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pp(e) {
  var t, n = dt;
  Nr(Sp(e));
  try {
    _c(e), t = Dc(e);
  } finally {
    Nr(n);
  }
  return t;
}
function Cc(e) {
  var t = Pp(e), n = (Sr || e.f & Sn) && e.deps !== null ? Ur : Gt;
  Nn(e, n), e.equals(t) || (e.v = t, e.wv = Oc());
}
function Oa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ae = !1;
function yn(e) {
  Ae = e;
}
let Je;
function rn(e) {
  if (e === null)
    throw Oa(), uo;
  return Je = e;
}
function Fn() {
  return rn(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gn(Je)
  );
}
function J(e) {
  if (Ae) {
    if (/* @__PURE__ */ Gn(Je) !== null)
      throw Oa(), uo;
    Je = e;
  }
}
function Ye(e = 1) {
  if (Ae) {
    for (var t = e, n = Je; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(n);
    Je = n;
  }
}
function _s() {
  for (var e = 0, t = Je; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Gs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === vc || n === Us) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(t)
    );
    t.remove(), t = r;
  }
}
function hn(e, t = null, n) {
  if (typeof e != "object" || e === null || Tr in e)
    return e;
  const r = tl(e);
  if (r !== dp && r !== fp)
    return e;
  var o = /* @__PURE__ */ new Map(), a = gi(e), i = dn(0);
  a && o.set("length", dn(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && _p();
        var d = o.get(u);
        return d === void 0 ? (d = dn(c.value), o.set(u, d)) : ie(d, hn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, dn(ln));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && ie(d, f);
          }
          ie(c, ln), ou(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Tr)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = dr(l, u)) != null && d.writable) && (f = dn(hn(v ? l[u] : ln, s)), o.set(u, f)), f !== void 0) {
          var m = p(f);
          return m === ln ? void 0 : m;
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
          if (f !== void 0 && v !== ln)
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
        if (u === Tr)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== ln || Reflect.has(l, u);
        if (d !== void 0 || dt !== null && (!f || (c = dr(l, u)) != null && c.writable)) {
          d === void 0 && (d = dn(f ? hn(l[u], s) : ln), o.set(u, d));
          var v = p(d);
          if (v === ln)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), m = u in l;
        if (a && u === "length")
          for (var $ = c; $ < /** @type {Source<number>} */
          v.v; $ += 1) {
            var x = o.get($ + "");
            x !== void 0 ? ie(x, ln) : $ in l && (x = dn(ln), o.set($ + "", x));
          }
        v === void 0 ? (!m || (f = dr(l, u)) != null && f.writable) && (v = dn(void 0), ie(v, hn(c, s)), o.set(u, v)) : (m = v.v !== ln, ie(v, hn(c, s)));
        var S = Reflect.getOwnPropertyDescriptor(l, u);
        if (S != null && S.set && S.set.call(d, c), !m) {
          if (a && typeof u == "string") {
            var g = (
              /** @type {Source<number>} */
              o.get("length")
            ), _ = Number(u);
            Number.isInteger(_) && _ >= g.v && ie(g, _ + 1);
          }
          ou(i);
        }
        return !0;
      },
      ownKeys(l) {
        p(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== ln;
        });
        for (var [c, d] of o)
          d.v !== ln && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Cp();
      }
    }
  );
}
function ou(e, t = 1) {
  ie(e, e.v + t);
}
var un, kc, Ec, Sc;
function Cs() {
  if (un === void 0) {
    un = window, kc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Ec = dr(t, "firstChild").get, Sc = dr(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return Ec.call(e);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return Sc.call(e);
}
function ee(e, t) {
  if (!Ae)
    return /* @__PURE__ */ nn(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ nn(Je)
  );
  if (n === null)
    n = Je.appendChild(vr());
  else if (t && n.nodeType !== 3) {
    var r = vr();
    return n == null || n.before(r), rn(r), r;
  }
  return rn(n), n;
}
function Oe(e, t) {
  if (!Ae) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ nn(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gn(n) : n;
  }
  return Je;
}
function K(e, t = 1, n = !1) {
  let r = Ae ? Je : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gn(r);
  if (!Ae)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = vr();
    return r === null ? o == null || o.after(i) : r.before(i), rn(i), i;
  }
  return rn(r), /** @type {TemplateNode} */
  r;
}
function ol(e) {
  e.textContent = "";
}
const Pc = 0, Tp = 1;
let Xi = !1, Fi = Pc, ni = !1, ri = null, co = !1, il = !1;
function iu(e) {
  co = e;
}
function au(e) {
  il = e;
}
let Br = [], fo = 0, gt = null, Zn = !1;
function Vr(e) {
  gt = e;
}
let dt = null;
function Nr(e) {
  dt = e;
}
let Yn = null;
function Op(e) {
  Yn = e;
}
let en = null, gn = 0, sr = null;
function Mp(e) {
  sr = e;
}
let Tc = 1, sa = 0, Sr = !1;
function Oc() {
  return ++Tc;
}
function No(e) {
  var t, n = e.f;
  if (n & yr)
    return !0;
  if (n & Ur) {
    var r = e.deps, o = (n & Sn) !== 0;
    if (r !== null) {
      var a, i, s = (n & ra) !== 0, l = o && dt !== null && !Sr, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ra), l && d !== null && !(d.f & Sn) && (c.f ^= Sn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], No(
          /** @type {Derived} */
          i
        ) && Cc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || dt !== null && !Sr) && Nn(e, Gt);
  }
  return !1;
}
function Dp(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & na)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= na;
      }
    n = n.parent;
  }
  throw Xi = !1, e;
}
function Vp(e) {
  return (e.f & Ta) === 0 && (e.parent === null || (e.parent.f & na) === 0);
}
function Ma(e, t, n, r) {
  if (Xi) {
    if (n === null && (Xi = !1), Vp(t))
      throw e;
    return;
  }
  n !== null && (Xi = !0);
  {
    Dp(e, t);
    return;
  }
}
function Mc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & Vn ? Mc(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Nn(a, yr) : a.f & Gt && Nn(a, Ur), Va(
        /** @type {Effect} */
        a
      ));
    }
}
function Dc(e) {
  var t, n = en, r = gn, o = sr, a = gt, i = Sr, s = Yn, l = lt, u = Zn, c = e.f;
  en = /** @type {null | Value[]} */
  null, gn = 0, sr = null, gt = c & (mr | Do) ? null : e, Sr = (c & Sn) !== 0 && (!co || a === null || u), Yn = null, su(e.ctx), Zn = !1, sa++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (en !== null) {
      var v;
      if (la(e, gn), f !== null && gn > 0)
        for (f.length = gn + en.length, v = 0; v < en.length; v++)
          f[gn + v] = en[v];
      else
        e.deps = f = en;
      if (!Sr)
        for (v = gn; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && gn < f.length && (la(e, gn), f.length = gn);
    if (Ra() && sr !== null && !Zn && f !== null && !(e.f & (Vn | Ur | yr)))
      for (v = 0; v < /** @type {Source[]} */
      sr.length; v++)
        Mc(
          sr[v],
          /** @type {Effect} */
          e
        );
    return a !== null && sa++, d;
  } finally {
    en = n, gn = r, sr = o, gt = a, Sr = i, Yn = s, su(l), Zn = u;
  }
}
function Np(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = cp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Vn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (en === null || !en.includes(t)) && (Nn(t, Ur), t.f & (Sn | ra) || (t.f ^= ra), _c(
    /** @type {Derived} **/
    t
  ), la(
    /** @type {Derived} **/
    t,
    0
  ));
}
function la(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Np(e, n[r]);
}
function Da(e) {
  var t = e.f;
  if (!(t & Ta)) {
    Nn(e, Gt);
    var n = dt, r = lt;
    dt = e;
    try {
      t & Js ? Zp(e) : Ac(e), zc(e);
      var o = Dc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Tc;
      var a = e.deps, i;
      ip && Uv && e.f & yr;
    } catch (s) {
      Ma(s, e, n, r || e.ctx);
    } finally {
      dt = n;
    }
  }
}
function Vc() {
  if (fo > 1e3) {
    fo = 0;
    try {
      bp();
    } catch (e) {
      if (ri !== null)
        Ma(e, ri, null);
      else
        throw e;
    }
  }
  fo++;
}
function Nc(e) {
  var t = e.length;
  if (t !== 0) {
    Vc();
    var n = co;
    co = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        o.f & Gt || (o.f ^= Gt);
        var a = zp(o);
        Rp(a);
      }
    } finally {
      co = n;
    }
  }
}
function Rp(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ta | cr)))
        try {
          No(r) && (Da(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Hc(r) : r.fn = null));
        } catch (o) {
          Ma(o, r, null, r.ctx);
        }
    }
}
function Lp() {
  if (ni = !1, fo > 1001)
    return;
  const e = Br;
  Br = [], Nc(e), ni || (fo = 0, ri = null);
}
function Va(e) {
  Fi === Pc && (ni || (ni = !0, queueMicrotask(Lp))), ri = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Do | mr)) {
      if (!(n & Gt)) return;
      t.f ^= Gt;
    }
  }
  Br.push(t);
}
function zp(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & mr) !== 0, a = o && (r & Gt) !== 0, i = n.next;
    if (!a && !(r & cr)) {
      if (r & gc)
        t.push(n);
      else if (o)
        n.f ^= Gt;
      else {
        var s = gt;
        try {
          gt = n, No(n) && Da(n);
        } catch (c) {
          Ma(c, n, null, n.ctx);
        } finally {
          gt = s;
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
function w(e) {
  var t = Fi, n = Br;
  try {
    Vc();
    const o = [];
    Fi = Tp, Br = o, ni = !1, Nc(n);
    var r = e == null ? void 0 : e();
    return hp(), (Br.length > 0 || o.length > 0) && w(), fo = 0, ri = null, r;
  } finally {
    Fi = t, Br = n;
  }
}
function p(e) {
  var t = e.f, n = (t & Vn) !== 0;
  if (gt !== null && !Zn) {
    Yn !== null && Yn.includes(e) && kp();
    var r = gt.deps;
    e.rv < sa && (e.rv = sa, en === null && r !== null && r[gn] === e ? gn++ : en === null ? en = [e] : (!Sr || !en.includes(e)) && en.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & Sn) && (o.f ^= Sn);
  }
  return n && (o = /** @type {Derived} */
  e, No(o) && Cc(o)), e.v;
}
function Kn(e) {
  var t = Zn;
  try {
    return Zn = !0, e();
  } finally {
    Zn = t;
  }
}
const Ap = -7169;
function Nn(e, t) {
  e.f = e.f & Ap | t;
}
function oe(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Tr in e)
      ks(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Tr in n && ks(n);
      }
  }
}
function ks(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ks(e[r], t);
      } catch {
      }
    const n = tl(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = mc(n);
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
function Rc(e) {
  dt === null && gt === null && wp(), gt !== null && gt.f & Sn && dt === null && yp(), il && mp();
}
function Hp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Gr(e, t, n, r = !0) {
  var o = (e & Do) !== 0, a = dt, i = {
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
  if (n) {
    var s = co;
    try {
      iu(!0), Da(i), i.f |= ap;
    } catch (c) {
      throw Pn(i), c;
    } finally {
      iu(s);
    }
  } else t !== null && Va(i);
  var l = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (hc | na)) === 0;
  if (!l && !o && r && (a !== null && Hp(i, a), gt !== null && gt.f & Vn)) {
    var u = (
      /** @type {Derived} */
      gt
    );
    (u.effects ?? (u.effects = [])).push(i);
  }
  return i;
}
function Lc(e) {
  const t = Gr(Pa, null, !1);
  return Nn(t, Gt), t.teardown = e, t;
}
function wo(e) {
  Rc();
  var t = dt !== null && (dt.f & mr) !== 0 && lt !== null && !lt.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      lt
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: dt,
      reaction: gt
    });
  } else {
    var r = mn(e);
    return r;
  }
}
function Ip(e) {
  return Rc(), Ro(e);
}
function Bp(e) {
  const t = Gr(Do, e, !0);
  return () => {
    Pn(t);
  };
}
function jp(e) {
  const t = Gr(Do, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? bo(t, () => {
      Pn(t), r(void 0);
    }) : (Pn(t), r(void 0));
  });
}
function mn(e) {
  return Gr(gc, e, !1);
}
function $e(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    lt
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Ro(() => {
    e(), !r.ran && (r.ran = !0, ie(n.l.r2, !0), Kn(t));
  });
}
function Xt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    lt
  );
  Ro(() => {
    if (p(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Gt && Nn(n, Ur), No(n) && Da(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Ro(e) {
  return Gr(Pa, e, !0);
}
function He(e, t = [], n = Fe) {
  const r = t.map(n);
  return Jr(() => e(...r.map(p)));
}
function Jr(e, t = 0) {
  return Gr(Pa | Js | t, e, !0);
}
function pr(e, t = !0) {
  return Gr(Pa | mr, e, !0, t);
}
function zc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = il, r = gt;
    au(!0), Vr(null);
    try {
      t.call(null);
    } finally {
      au(n), Vr(r);
    }
  }
}
function Ac(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Pn(n, t), n = r;
  }
}
function Zp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & mr || Pn(t), t = n;
  }
}
function Pn(e, t = !0) {
  var n = !1;
  if ((t || e.f & lp) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Ac(e, t && !n), la(e, 0), Nn(e, Ta);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  zc(e);
  var s = e.parent;
  s !== null && s.first !== null && Hc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Hc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bo(e, t) {
  var n = [];
  al(e, n, !0), Ic(n, () => {
    Pn(e), t && t();
  });
}
function Ic(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function al(e, t, n) {
  if (!(e.f & cr)) {
    if (e.f ^= cr, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & Vo) !== 0 || (r.f & mr) !== 0;
      al(r, t, a ? n : !1), r = o;
    }
  }
}
function oi(e) {
  Bc(e, !0);
}
function Bc(e, t) {
  if (e.f & cr) {
    e.f ^= cr, e.f & Gt || (e.f ^= Gt), No(e) && (Nn(e, yr), Va(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Vo) !== 0 || (n.f & mr) !== 0;
      Bc(n, o ? t : !1), n = r;
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
function su(e) {
  lt = e;
}
function Yr(e) {
  return (
    /** @type {T} */
    sl().get(e)
  );
}
function xo(e, t) {
  return sl().set(e, t), t;
}
function Yp(e) {
  return sl().has(e);
}
function _e(e, t = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Mo && !t && (lt.l = {
    s: null,
    u: null,
    r1: [],
    r2: dn(!1)
  });
}
function Ce(e) {
  const t = lt;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = dt, r = gt;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          Nr(a.effect), Vr(a.reaction), mn(a.fn);
        }
      } finally {
        Nr(n), Vr(r);
      }
    }
    lt = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ra() {
  return !Mo || lt !== null && lt.l === null;
}
function sl(e) {
  return lt === null && Na(), lt.c ?? (lt.c = new Map(Wp(lt) || void 0));
}
function Wp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Xp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Fp = [
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
function Kp(e) {
  return Fp.includes(e);
}
const qp = {
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
function Up(e) {
  return e = e.toLowerCase(), qp[e] ?? e;
}
const Gp = ["touchstart", "touchmove"];
function Jp(e) {
  return Gp.includes(e);
}
const Qp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function eg(e) {
  return Qp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function tg(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, hi(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ng(e) {
  Ae && /* @__PURE__ */ nn(e) !== null && ol(e);
}
let lu = !1;
function rg() {
  lu || (lu = !0, document.addEventListener(
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
function og(e) {
  var t = gt, n = dt;
  Vr(null), Nr(null);
  try {
    return e();
  } finally {
    Vr(t), Nr(n);
  }
}
const jc = /* @__PURE__ */ new Set(), Es = /* @__PURE__ */ new Set();
function Zc(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || qo.call(t, a), !a.cancelBubble)
      return og(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? hi(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function yt(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Zc(e, t, n, a);
  (t === document.body || t === window || t === document) && Lc(() => {
    t.removeEventListener(e, i, a);
  });
}
function La(e) {
  for (var t = 0; t < e.length; t++)
    jc.add(e[t]);
  for (var n of Es)
    n(e);
}
function qo(e) {
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
    ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = gt, f = dt;
    Vr(null), Nr(null);
    try {
      for (var v, m = []; i !== null; ) {
        var $ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (gi(x)) {
              var [S, ...g] = x;
              S.apply(i, [e, ...g]);
            } else
              x.call(i, e);
        } catch (_) {
          v ? m.push(_) : v = _;
        }
        if (e.cancelBubble || $ === n || $ === null)
          break;
        i = $;
      }
      if (v) {
        for (let _ of m)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Vr(d), Nr(f);
    }
  }
}
function ll(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function vn(e, t) {
  var n = (
    /** @type {Effect} */
    dt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  var n = (t & fc) !== 0, r = (t & op) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Ae)
      return vn(Je, null), Je;
    o === void 0 && (o = ll(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ nn(o)));
    var i = (
      /** @type {TemplateNode} */
      r || kc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      vn(s, l);
    } else
      vn(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & fc) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Ae)
      return vn(Je, null), Je;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        ll(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ nn(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ nn(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ nn(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ nn(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      vn(c, d);
    } else
      vn(u, u);
    return u;
  };
}
function at(e = "") {
  if (!Ae) {
    var t = vr(e + "");
    return vn(t, t), t;
  }
  var n = Je;
  return n.nodeType !== 3 && (n.before(n = vr()), rn(n)), vn(n, n), n;
}
function wt() {
  if (Ae)
    return vn(Je, null), Je;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = vr();
  return e.append(t, n), vn(t, n), e;
}
function B(e, t) {
  if (Ae) {
    dt.nodes_end = Je, Fn();
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
function Yc(e, t) {
  return Wc(e, t);
}
function ig(e, t) {
  Cs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ae, o = Je;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nn(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== vc); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Gn(a);
    if (!a)
      throw uo;
    yn(!0), rn(
      /** @type {Comment} */
      a
    ), Fn();
    const i = Wc(e, { ...t, anchor: a });
    if (Je === null || Je.nodeType !== 8 || /** @type {Comment} */
    Je.data !== Gs)
      throw Oa(), uo;
    return yn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === uo)
      return t.recover === !1 && xp(), Cs(), ol(n), yn(!1), Yc(e, t);
    throw i;
  } finally {
    yn(r), rn(o);
  }
}
const io = /* @__PURE__ */ new Map();
function Wc(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  Cs();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var m = Jp(v);
        t.addEventListener(v, qo, { passive: m });
        var $ = io.get(v);
        $ === void 0 ? (document.addEventListener(v, qo, { passive: m }), io.set(v, 1)) : io.set(v, $ + 1);
      }
    }
  };
  l(el(jc)), Es.add(l);
  var u = void 0, c = jp(() => {
    var d = n ?? t.appendChild(vr());
    return pr(() => {
      if (a) {
        _e({});
        var f = (
          /** @type {ComponentContext} */
          lt
        );
        f.c = a;
      }
      o && (r.$$events = o), Ae && vn(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ae && (dt.nodes_end = Je), a && Ce();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, qo);
        var m = (
          /** @type {number} */
          io.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, qo), io.delete(v)) : io.set(v, m);
      }
      Es.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Ss.set(u, c), u;
}
let Ss = /* @__PURE__ */ new WeakMap();
function ag(e, t) {
  const n = Ss.get(e);
  return n ? (Ss.delete(e), n(t)) : Promise.resolve();
}
function ze(e, t, n = !1) {
  Ae && Fn();
  var r = e, o = null, a = null, i = ln, s = n ? Vo : 0, l = !1;
  const u = (d, f = !0) => {
    l = !0, c(f, d);
  }, c = (d, f) => {
    if (i === (i = d)) return;
    let v = !1;
    if (Ae) {
      const m = (
        /** @type {Comment} */
        r.data === Us
      );
      !!i === m && (r = _s(), rn(r), yn(!1), v = !0);
    }
    i ? (o ? oi(o) : f && (o = pr(() => f(r))), a && bo(a, () => {
      a = null;
    })) : (a ? oi(a) : f && (a = pr(() => f(r))), o && bo(o, () => {
      o = null;
    })), v && yn(!0);
  };
  Jr(() => {
    l = !1, t(u), l || c(null, null);
  }, s), Ae && (r = Je);
}
function za(e, t) {
  return t;
}
function sg(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    al(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ol(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kr(e, t[0].prev, t[a - 1].next);
  }
  Ic(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), kr(e, c.prev, c.next)), Pn(c.e, !s);
    }
  });
}
function bn(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & cc) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Ae ? rn(
      /** @type {Comment | Text} */
      /* @__PURE__ */ nn(u)
    ) : u.appendChild(vr());
  }
  Ae && Fn();
  var c = null, d = !1, f = /* @__PURE__ */ Pe(() => {
    var v = n();
    return gi(v) ? v : v == null ? [] : el(v);
  });
  Jr(() => {
    var v = p(f), m = v.length;
    if (d && m === 0)
      return;
    d = m === 0;
    let $ = !1;
    if (Ae) {
      var x = (
        /** @type {Comment} */
        i.data === Us
      );
      x !== (m === 0) && (i = _s(), rn(i), yn(!1), $ = !0);
    }
    if (Ae) {
      for (var S = null, g, _ = 0; _ < m; _++) {
        if (Je.nodeType === 8 && /** @type {Comment} */
        Je.data === Gs) {
          i = /** @type {Comment} */
          Je, $ = !0, yn(!1);
          break;
        }
        var y = v[_], k = r(y, _);
        g = Xc(
          Je,
          s,
          S,
          null,
          y,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, g), S = g;
      }
      m > 0 && rn(_s());
    }
    Ae || lg(v, s, i, o, t, r, n), a !== null && (m === 0 ? c ? oi(c) : c = pr(() => a(i)) : c !== null && bo(c, () => {
      c = null;
    })), $ && yn(!0), p(f);
  }), Ae && (i = Je);
}
function lg(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & Jv) !== 0, f = (o & (Ks | qs)) !== 0, v = e.length, m = t.items, $ = t.first, x = $, S, g = null, _, y = [], k = [], T, V, D, N;
  if (d)
    for (N = 0; N < v; N += 1)
      T = e[N], V = a(T, N), D = m.get(V), D !== void 0 && ((s = D.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(D));
  for (N = 0; N < v; N += 1) {
    if (T = e[N], V = a(T, N), D = m.get(V), D === void 0) {
      var A = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      g = Xc(
        A,
        t,
        g,
        g === null ? t.first : g.next,
        T,
        V,
        N,
        r,
        o,
        i
      ), m.set(V, g), y = [], k = [], x = g.next;
      continue;
    }
    if (f && ug(D, T, N, o), D.e.f & cr && (oi(D.e), d && ((l = D.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(D))), D !== x) {
      if (S !== void 0 && S.has(D)) {
        if (y.length < k.length) {
          var j = k[0], Z;
          g = j.prev;
          var X = y[0], P = y[y.length - 1];
          for (Z = 0; Z < y.length; Z += 1)
            uu(y[Z], j, n);
          for (Z = 0; Z < k.length; Z += 1)
            S.delete(k[Z]);
          kr(t, X.prev, P.next), kr(t, g, X), kr(t, P, j), x = j, g = P, N -= 1, y = [], k = [];
        } else
          S.delete(D), uu(D, x, n), kr(t, D.prev, D.next), kr(t, D, g === null ? t.first : g.next), kr(t, g, D), g = D;
        continue;
      }
      for (y = [], k = []; x !== null && x.k !== V; )
        x.e.f & cr || (S ?? (S = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      D = x;
    }
    y.push(D), g = D, x = D.next;
  }
  if (x !== null || S !== void 0) {
    for (var M = S === void 0 ? [] : el(S); x !== null; )
      x.e.f & cr || M.push(x), x = x.next;
    var E = M.length;
    if (E > 0) {
      var C = o & cc && v === 0 ? n : null;
      if (d) {
        for (N = 0; N < E; N += 1)
          (u = M[N].a) == null || u.measure();
        for (N = 0; N < E; N += 1)
          (c = M[N].a) == null || c.fix();
      }
      sg(t, M, C, m);
    }
  }
  d && hi(() => {
    var R;
    if (_ !== void 0)
      for (D of _)
        (R = D.a) == null || R.apply();
  }), dt.first = t.first && t.first.e, dt.last = g && g.e;
}
function ug(e, t, n, r) {
  r & Ks && $s(e.v, t), r & qs ? $s(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Xc(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & Ks) !== 0, d = (l & Qv) === 0, f = c ? d ? /* @__PURE__ */ mi(o) : dn(o) : o, v = l & qs ? dn(i) : i, m = {
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
    return m.e = pr(() => s(e, f, v, u), Ae), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? t.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function uu(e, t, n) {
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
function Fc(e, t, n, r, o) {
  var a = e, i = "", s;
  Jr(() => {
    if (i === (i = t() ?? "")) {
      Ae && Fn();
      return;
    }
    s !== void 0 && (Pn(s), s = void 0), i !== "" && (s = pr(() => {
      if (Ae) {
        Je.data;
        for (var l = Fn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Gn(l);
        if (l === null)
          throw Oa(), uo;
        vn(Je, u), a = rn(l);
        return;
      }
      var c = i + "", d = ll(c);
      vn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function Ut(e, t, n, r, o) {
  var a;
  Ae && Fn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function cg(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Wr(e, t, ...n) {
  var r = e, o = jt, a;
  Jr(() => {
    o !== (o = t()) && (a && (Pn(a), a = null), a = pr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Vo), Ae && (r = Je);
}
function Kc(e, t, n) {
  Ae && Fn();
  var r = e, o, a;
  Jr(() => {
    o !== (o = t()) && (a && (bo(a), a = null), o && (a = pr(() => n(r, o))));
  }, Vo), Ae && (r = Je);
}
function dg(e, t, n, r, o, a) {
  let i = Ae;
  Ae && Fn();
  var s, l, u = null;
  Ae && Je.nodeType === 1 && (u = /** @type {Element} */
  Je, Fn());
  var c = (
    /** @type {TemplateNode} */
    Ae ? Je : e
  ), d;
  Jr(() => {
    const f = t() || null;
    var v = f === "svg" ? pc : null;
    f !== s && (d && (f === null ? bo(d, () => {
      d = null, l = null;
    }) : f === l ? oi(d) : Pn(d)), f && f !== l && (d = pr(() => {
      if (u = Ae ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), vn(u, u), r) {
        Ae && eg(f) && u.append(document.createComment(""));
        var m = (
          /** @type {TemplateNode} */
          Ae ? /* @__PURE__ */ nn(u) : u.appendChild(vr())
        );
        Ae && (m === null ? yn(!1) : rn(m)), r(u, m);
      }
      dt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Vo), i && (yn(!0), rn(c));
}
function bt(e, t) {
  hi(() => {
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
  mn(() => {
    var r = Kn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      Ro(() => {
        var i = n();
        oe(i), o && nl(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function qc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qc(e)) && (r && (r += " "), r += t);
  return r;
}
function Qn(e) {
  return typeof e == "object" ? fg(e) : e ?? "";
}
function Uc(e) {
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
    e.__on_r = n, gp(n), rg();
  }
}
function vg(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Ae && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[up] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Rn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Ae && a;
  s && yn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class && (n.class = Qn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
  var d = Gc(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const g in n) {
    let _ = n[g];
    if (u && g === "value" && _ == null) {
      e.value = e.__value = "", l[g] = _;
      continue;
    }
    var v = l[g];
    if (_ !== v) {
      l[g] = _;
      var m = g[0] + g[1];
      if (m !== "$$") {
        if (m === "on") {
          const y = {}, k = "$$" + g;
          let T = g.slice(2);
          var $ = Kp(T);
          if (Xp(T) && (T = T.slice(0, -7), y.capture = !0), !$ && v) {
            if (_ != null) continue;
            e.removeEventListener(T, l[k], y), l[k] = null;
          }
          if (_ != null)
            if ($)
              e[`__${T}`] = _, La([T]);
            else {
              let V = function(D) {
                l[g].call(this, D);
              };
              l[k] = Zc(T, e, V, y);
            }
          else $ && (e[`__${T}`] = void 0);
        } else if (g === "style" && _ != null)
          e.style.cssText = _ + "";
        else if (g === "autofocus")
          tg(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!a && (g === "__value" || g === "value" && _ != null))
          e.value = e.__value = _;
        else if (g === "selected" && u)
          vg(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var x = g;
          o || (x = Up(x));
          var S = x === "defaultValue" || x === "defaultChecked";
          if (_ == null && !a && !S)
            if (f[g] = null, x === "value" || x === "checked") {
              let y = (
                /** @type {HTMLInputElement} */
                e
              );
              const k = t === void 0;
              if (x === "value") {
                let T = y.defaultValue;
                y.removeAttribute(x), y.defaultValue = T, y.value = y.__value = k ? T : null;
              } else {
                let T = y.defaultChecked;
                y.removeAttribute(x), y.defaultChecked = T, y.checked = k ? T : !1;
              }
            } else
              e.removeAttribute(g);
          else S || d.includes(x) && (a || typeof _ != "string") ? e[x] = _ : typeof _ != "function" && xe(e, x, _);
        }
        g === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && yn(!0), l;
}
var cu = /* @__PURE__ */ new Map();
function Gc(e) {
  var t = cu.get(e.nodeName);
  if (t) return t;
  cu.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = mc(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = tl(r);
  }
  return t;
}
function Qr(e, t, n) {
  var r = e.__className, o = Jc(t, n);
  Ae && e.getAttribute("class") === o ? e.__className = o : (r !== o || Ae && e.getAttribute("class") !== o) && (o === "" ? e.removeAttribute("class") : e.setAttribute("class", o), e.__className = o);
}
function $o(e, t, n) {
  var r = e.__className, o = Jc(t, n);
  Ae && e.className === o ? e.__className = o : (r !== o || Ae && e.className !== o) && (t == null ? e.removeAttribute("class") : e.className = o, e.__className = o);
}
function Jc(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function Dt(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Vt(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Ir, Qo, Ki, Ps, Qc;
const Ts = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    so(this, Ps), so(this, Ir, /* @__PURE__ */ new WeakMap()), so(this, Qo), so(this, Ki), ta(this, Ki, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = Nt(this, Ir).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), Nt(this, Ir).set(t, r), Kv(this, Ps, Qc).call(this).observe(t, Nt(this, Ki)), () => {
      var o = Nt(this, Ir).get(t);
      o.delete(n), o.size === 0 && (Nt(this, Ir).delete(t), Nt(this, Qo).unobserve(t));
    };
  }
};
Ir = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakSet(), Qc = function() {
  return Nt(this, Qo) ?? ta(this, Qo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ts.entries.set(t.target, t);
        for (var n of Nt(this, Ir).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
cn(Ts, "entries", /* @__PURE__ */ new WeakMap());
let pg = Ts;
var gg = /* @__PURE__ */ new pg({
  box: "border-box"
});
function du(e, t, n) {
  var r = gg.observe(e, () => n(e[t]));
  mn(() => (Kn(() => n(e[t])), r));
}
function fu(e, t) {
  return e === t || (e == null ? void 0 : e[Tr]) === t;
}
function gr(e = {}, t, n, r) {
  return mn(() => {
    var o, a;
    return Ro(() => {
      o = a, a = [], Kn(() => {
        e !== n(...a) && (t(e, ...a), o && fu(n(...o), e) && t(null, ...o));
      });
    }), () => {
      hi(() => {
        a && fu(n(...a), e) && t(null, ...a);
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
  let r = () => oe(t.s);
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
  n.b.length && Ip(() => {
    vu(t, r), ti(n.b);
  }), wo(() => {
    const o = Kn(() => n.m.map(vp));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && wo(() => {
    vu(t, r), ti(n.a);
  });
}
function vu(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function ot(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = gi(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function er(e) {
  lt === null && Na(), Mo && lt.l !== null ? mg(lt).m.push(e) : wo(() => {
    const t = Kn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ul(e) {
  lt === null && Na(), er(() => () => Kn(e));
}
function hg(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
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
      const i = gi(a) ? a.slice() : [a], s = hg(
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
function mg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function cl(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), jt;
  const r = Kn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ao = [];
function Cn(e, t) {
  return {
    subscribe: Te(e, t).subscribe
  };
}
function Te(e, t = jt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (nl(e, s) && (e = s, n)) {
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
  function i(s, l = jt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || jt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function Or(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return Cn(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = jt;
    const f = () => {
      if (c)
        return;
      d();
      const m = t(r ? u[0] : u, i, s);
      a ? i(m) : d = typeof m == "function" ? m : jt;
    }, v = o.map(
      (m, $) => cl(
        m,
        (x) => {
          u[$] = x, c &= ~(1 << $), l && f();
        },
        () => {
          c |= 1 << $;
        }
      )
    );
    return l = !0, f(), function() {
      ti(v), d(), l = !1;
    };
  });
}
function te(e) {
  let t;
  return cl(e, (n) => t = n)(), t;
}
let Hi = !1, Os = Symbol();
function le(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ mi(void 0),
    unsubscribe: jt
  });
  if (r.store !== e && !(Os in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = jt;
    else {
      var o = !0;
      r.unsubscribe = cl(e, (a) => {
        o ? r.source.v = a : ie(r.source, a);
      }), o = !1;
    }
  return e && Os in n ? te(e) : p(r.source);
}
function yg(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = jt), e;
}
function ua(e, t) {
  return e.set(t), t;
}
function Ct() {
  const e = {};
  function t() {
    Lc(() => {
      for (var n in e)
        e[n].unsubscribe();
      ei(e, Os, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function wg(e) {
  var t = Hi;
  try {
    return Hi = !1, [e(), Hi];
  } finally {
    Hi = t;
  }
}
const bg = {
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
function on(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    bg
  );
}
const xg = {
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
      dc
    )), e.special[t](n), ru(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ru(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Pt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: dn(0) }, xg);
}
const $g = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Wo(o) && (o = o());
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
      if (Wo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = dr(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Tr || t === Qs) return !1;
    for (let n of e.props)
      if (Wo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Wo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function Bt(...e) {
  return new Proxy({ props: e }, $g);
}
function b(e, t, n, r) {
  var o, a = (n & ep) !== 0, i = !Mo || (n & tp) !== 0, s = (n & np) !== 0, l = (n & rp) !== 0, u = !1, c;
  s ? [c, u] = wg(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Tr in e || Qs in e, f = s && (((o = dr(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((V) => e[t] = V))) || void 0, v = (
    /** @type {V} */
    r
  ), m = !0, $ = !1, x = () => ($ = !0, m && (m = !1, l ? v = Kn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && $p(), c = x(), f && f(c));
  var S;
  if (i)
    S = () => {
      var V = (
        /** @type {V} */
        e[t]
      );
      return V === void 0 ? x() : (m = !0, $ = !1, V);
    };
  else {
    var g = (a ? Fe : Pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= sp, S = () => {
      var V = p(g);
      return V !== void 0 && (v = /** @type {V} */
      void 0), V === void 0 ? v : V;
    };
  }
  if (!(n & dc))
    return S;
  if (f) {
    var _ = e.$$legacy;
    return function(V, D) {
      return arguments.length > 0 ? ((!i || !D || _ || u) && f(D ? S() : V), V) : S();
    };
  }
  var y = !1, k = /* @__PURE__ */ mi(c), T = /* @__PURE__ */ Fe(() => {
    var V = S(), D = p(k);
    return y ? (y = !1, D) : k.v = V;
  });
  return a || (T.equals = rl), function(V, D) {
    if (arguments.length > 0) {
      const N = D ? p(T) : i && s ? hn(V) : V;
      return T.equals(N) || (y = !0, ie(k, N), $ && v !== void 0 && (v = N), Kn(() => p(T))), V;
    }
    return p(T);
  };
}
function _g(e) {
  return new Cg(e);
}
var Cr, On;
class Cg {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    so(this, Cr), so(this, On);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ mi(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return p(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Qs ? !0 : (p(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return ie(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    ta(this, On, (t.hydrate ? ig : Yc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && w(), ta(this, Cr, a.$$events);
    for (const i of Object.keys(Nt(this, On)))
      i === "$set" || i === "$destroy" || i === "$on" || ei(this, i, {
        get() {
          return Nt(this, On)[i];
        },
        /** @param {any} value */
        set(s) {
          Nt(this, On)[i] = s;
        },
        enumerable: !0
      });
    Nt(this, On).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, Nt(this, On).$destroy = () => {
      ag(Nt(this, On));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Nt(this, On).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    Nt(this, Cr)[t] = Nt(this, Cr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return Nt(this, Cr)[t].push(r), () => {
      Nt(this, Cr)[t] = Nt(this, Cr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    Nt(this, On).$destroy();
  }
}
Cr = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap();
let ed;
typeof HTMLElement == "function" && (ed = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), cn(this, "$$ctor"), cn(this, "$$s"), cn(this, "$$c"), cn(this, "$$cn", !1), cn(this, "$$d", {}), cn(this, "$$r", !1), cn(this, "$$p_d", {}), cn(this, "$$l", {}), cn(this, "$$l_u", /* @__PURE__ */ new Map()), cn(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = kg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = qi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = _g({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Bp(() => {
        Ro(() => {
          var r;
          this.$$r = !0;
          for (const o of oa(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = qi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = qi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return oa(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function qi(e, t, n, r) {
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
function kg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function me(e, t, n, r, o, a) {
  let i = class extends ed {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return oa(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return oa(t).forEach((s) => {
    ei(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = qi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = dr(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    ei(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function an(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = an(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Eg = { value: () => {
} };
function Ha() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ui(n);
}
function Ui(e) {
  this._ = e;
}
function Sg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ui.prototype = Ha.prototype = {
  constructor: Ui,
  on: function(e, t) {
    var n = this._, r = Sg(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = Pg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = pu(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = pu(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ui(e);
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
function Pg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function pu(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Eg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ms = "http://www.w3.org/1999/xhtml";
const gu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ms,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ia(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), gu.hasOwnProperty(t) ? { space: gu[t], local: e } : e;
}
function Tg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ms && t.documentElement.namespaceURI === Ms ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Og(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function td(e) {
  var t = Ia(e);
  return (t.local ? Og : Tg)(t);
}
function Mg() {
}
function dl(e) {
  return e == null ? Mg : function() {
    return this.querySelector(e);
  };
}
function Dg(e) {
  typeof e != "function" && (e = dl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new xn(r, this._parents);
}
function Vg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ng() {
  return [];
}
function nd(e) {
  return e == null ? Ng : function() {
    return this.querySelectorAll(e);
  };
}
function Rg(e) {
  return function() {
    return Vg(e.apply(this, arguments));
  };
}
function Lg(e) {
  typeof e == "function" ? e = Rg(e) : e = nd(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new xn(r, o);
}
function rd(e) {
  return function() {
    return this.matches(e);
  };
}
function od(e) {
  return function(t) {
    return t.matches(e);
  };
}
var zg = Array.prototype.find;
function Ag(e) {
  return function() {
    return zg.call(this.children, e);
  };
}
function Hg() {
  return this.firstElementChild;
}
function Ig(e) {
  return this.select(e == null ? Hg : Ag(typeof e == "function" ? e : od(e)));
}
var Bg = Array.prototype.filter;
function jg() {
  return Array.from(this.children);
}
function Zg(e) {
  return function() {
    return Bg.call(this.children, e);
  };
}
function Yg(e) {
  return this.selectAll(e == null ? jg : Zg(typeof e == "function" ? e : od(e)));
}
function Wg(e) {
  typeof e != "function" && (e = rd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new xn(r, this._parents);
}
function id(e) {
  return new Array(e.length);
}
function Xg() {
  return new xn(this._enter || this._groups.map(id), this._parents);
}
function ca(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ca.prototype = {
  constructor: ca,
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
function Fg(e) {
  return function() {
    return e;
  };
}
function Kg(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new ca(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function qg(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new ca(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function Ug(e) {
  return e.__data__;
}
function Gg(e, t) {
  if (!arguments.length) return Array.from(this, Ug);
  var n = t ? qg : Kg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Fg(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = Jg(e.call(c, c && c.__data__, u, r)), m = v.length, $ = s[u] = new Array(m), x = i[u] = new Array(m), S = l[u] = new Array(f);
    n(c, d, $, x, S, v, t);
    for (var g = 0, _ = 0, y, k; g < m; ++g)
      if (y = $[g]) {
        for (g >= _ && (_ = g + 1); !(k = x[_]) && ++_ < m; ) ;
        y._next = k || null;
      }
  }
  return i = new xn(i, r), i._enter = s, i._exit = l, i;
}
function Jg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Qg() {
  return new xn(this._exit || this._groups.map(id), this._parents);
}
function eh(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function th(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || c[m]) && (f[m] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new xn(s, this._parents);
}
function nh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function rh(e) {
  e || (e = oh);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new xn(o, this._parents).order();
}
function oh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ih() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ah() {
  return Array.from(this);
}
function sh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function lh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function uh() {
  return !this.node();
}
function ch(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function dh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function fh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ph(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function gh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function hh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function mh(e, t) {
  var n = Ia(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? fh : dh : typeof t == "function" ? n.local ? hh : gh : n.local ? ph : vh)(n, t));
}
function ad(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function yh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function bh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function xh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? yh : typeof t == "function" ? bh : wh)(e, t, n ?? "")) : _o(this.node(), e);
}
function _o(e, t) {
  return e.style.getPropertyValue(t) || ad(e).getComputedStyle(e, null).getPropertyValue(t);
}
function $h(e) {
  return function() {
    delete this[e];
  };
}
function _h(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ch(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function kh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? $h : typeof t == "function" ? Ch : _h)(e, t)) : this.node()[e];
}
function sd(e) {
  return e.trim().split(/^|\s+/);
}
function fl(e) {
  return e.classList || new ld(e);
}
function ld(e) {
  this._node = e, this._names = sd(e.getAttribute("class") || "");
}
ld.prototype = {
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
function ud(e, t) {
  for (var n = fl(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function cd(e, t) {
  for (var n = fl(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Eh(e) {
  return function() {
    ud(this, e);
  };
}
function Sh(e) {
  return function() {
    cd(this, e);
  };
}
function Ph(e, t) {
  return function() {
    (t.apply(this, arguments) ? ud : cd)(this, e);
  };
}
function Th(e, t) {
  var n = sd(e + "");
  if (arguments.length < 2) {
    for (var r = fl(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ph : t ? Eh : Sh)(n, t));
}
function Oh() {
  this.textContent = "";
}
function Mh(e) {
  return function() {
    this.textContent = e;
  };
}
function Dh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Vh(e) {
  return arguments.length ? this.each(e == null ? Oh : (typeof e == "function" ? Dh : Mh)(e)) : this.node().textContent;
}
function Nh() {
  this.innerHTML = "";
}
function Rh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Lh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function zh(e) {
  return arguments.length ? this.each(e == null ? Nh : (typeof e == "function" ? Lh : Rh)(e)) : this.node().innerHTML;
}
function Ah() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Hh() {
  return this.each(Ah);
}
function Ih() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bh() {
  return this.each(Ih);
}
function jh(e) {
  var t = typeof e == "function" ? e : td(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Zh() {
  return null;
}
function Yh(e, t) {
  var n = typeof e == "function" ? e : td(e), r = t == null ? Zh : typeof t == "function" ? t : dl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Wh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Xh() {
  return this.each(Wh);
}
function Fh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Kh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function qh(e) {
  return this.select(e ? Kh : Fh);
}
function Uh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Gh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Jh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Qh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function e1(e, t, n) {
  return function() {
    var r = this.__on, o, a = Gh(t);
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
function t1(e, t, n) {
  var r = Jh(e + ""), o, a = r.length, i;
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
  for (s = t ? e1 : Qh, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function dd(e, t, n) {
  var r = ad(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function n1(e, t) {
  return function() {
    return dd(this, e, t);
  };
}
function r1(e, t) {
  return function() {
    return dd(this, e, t.apply(this, arguments));
  };
}
function o1(e, t) {
  return this.each((typeof t == "function" ? r1 : n1)(e, t));
}
function* i1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var fd = [null];
function xn(e, t) {
  this._groups = e, this._parents = t;
}
function yi() {
  return new xn([[document.documentElement]], fd);
}
function a1() {
  return this;
}
xn.prototype = yi.prototype = {
  constructor: xn,
  select: Dg,
  selectAll: Lg,
  selectChild: Ig,
  selectChildren: Yg,
  filter: Wg,
  data: Gg,
  enter: Xg,
  exit: Qg,
  join: eh,
  merge: th,
  selection: a1,
  order: nh,
  sort: rh,
  call: ih,
  nodes: ah,
  node: sh,
  size: lh,
  empty: uh,
  each: ch,
  attr: mh,
  style: xh,
  property: kh,
  classed: Th,
  text: Vh,
  html: zh,
  raise: Hh,
  lower: Bh,
  append: jh,
  insert: Yh,
  remove: Xh,
  clone: qh,
  datum: Uh,
  on: t1,
  dispatch: o1,
  [Symbol.iterator]: i1
};
function kn(e) {
  return typeof e == "string" ? new xn([[document.querySelector(e)]], [document.documentElement]) : new xn([[e]], fd);
}
function s1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Mn(e, t) {
  if (e = s1(e), t === void 0 && (t = e.currentTarget), t) {
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
const l1 = { passive: !1 }, ii = { capture: !0, passive: !1 };
function cs(e) {
  e.stopImmediatePropagation();
}
function vo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vd(e) {
  var t = e.document.documentElement, n = kn(e).on("dragstart.drag", vo, ii);
  "onselectstart" in t ? n.on("selectstart.drag", vo, ii) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function pd(e, t) {
  var n = e.document.documentElement, r = kn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", vo, ii), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ii = (e) => () => e;
function Ds(e, {
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
Ds.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function u1(e) {
  return !e.ctrlKey && !e.button;
}
function c1() {
  return this.parentNode;
}
function d1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function f1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function v1() {
  var e = u1, t = c1, n = d1, r = f1, o = {}, a = Ha("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", S, l1).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, k) {
    if (!(c || !e.call(this, y, k))) {
      var T = _(this, t.call(this, y, k), y, k, "mouse");
      T && (kn(y.view).on("mousemove.drag", m, ii).on("mouseup.drag", $, ii), vd(y.view), cs(y), u = !1, s = y.clientX, l = y.clientY, T("start", y));
    }
  }
  function m(y) {
    if (vo(y), !u) {
      var k = y.clientX - s, T = y.clientY - l;
      u = k * k + T * T > d;
    }
    o.mouse("drag", y);
  }
  function $(y) {
    kn(y.view).on("mousemove.drag mouseup.drag", null), pd(y.view, u), vo(y), o.mouse("end", y);
  }
  function x(y, k) {
    if (e.call(this, y, k)) {
      var T = y.changedTouches, V = t.call(this, y, k), D = T.length, N, A;
      for (N = 0; N < D; ++N)
        (A = _(this, V, y, k, T[N].identifier, T[N])) && (cs(y), A("start", y, T[N]));
    }
  }
  function S(y) {
    var k = y.changedTouches, T = k.length, V, D;
    for (V = 0; V < T; ++V)
      (D = o[k[V].identifier]) && (vo(y), D("drag", y, k[V]));
  }
  function g(y) {
    var k = y.changedTouches, T = k.length, V, D;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), V = 0; V < T; ++V)
      (D = o[k[V].identifier]) && (cs(y), D("end", y, k[V]));
  }
  function _(y, k, T, V, D, N) {
    var A = a.copy(), j = Mn(N || T, k), Z, X, P;
    if ((P = n.call(y, new Ds("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: D,
      active: i,
      x: j[0],
      y: j[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), V)) != null)
      return Z = P.x - j[0] || 0, X = P.y - j[1] || 0, function M(E, C, R) {
        var H = j, F;
        switch (E) {
          case "start":
            o[D] = M, F = i++;
            break;
          case "end":
            delete o[D], --i;
          // falls through
          case "drag":
            j = Mn(R || C, k), F = i;
            break;
        }
        A.call(
          E,
          y,
          new Ds(E, {
            sourceEvent: C,
            subject: P,
            target: f,
            identifier: D,
            active: F,
            x: j[0] + Z,
            y: j[1] + X,
            dx: j[0] - H[0],
            dy: j[1] - H[1],
            dispatch: A
          }),
          V
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ii(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Ii(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ii(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ii(!!y), f) : r;
  }, f.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, f) : Math.sqrt(d);
  }, f;
}
function vl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function gd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function wi() {
}
var ai = 0.7, da = 1 / ai, po = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", p1 = /^#([0-9a-f]{3,8})$/, g1 = new RegExp(`^rgb\\(${po},${po},${po}\\)$`), h1 = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), m1 = new RegExp(`^rgba\\(${po},${po},${po},${si}\\)$`), y1 = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${si}\\)$`), w1 = new RegExp(`^hsl\\(${si},${Wn},${Wn}\\)$`), b1 = new RegExp(`^hsla\\(${si},${Wn},${Wn},${si}\\)$`), hu = {
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
vl(wi, li, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mu,
  // Deprecated! Use color.formatHex.
  formatHex: mu,
  formatHex8: x1,
  formatHsl: $1,
  formatRgb: yu,
  toString: yu
});
function mu() {
  return this.rgb().formatHex();
}
function x1() {
  return this.rgb().formatHex8();
}
function $1() {
  return hd(this).formatHsl();
}
function yu() {
  return this.rgb().formatRgb();
}
function li(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = p1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? wu(t) : n === 3 ? new fn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = g1.exec(e)) ? new fn(t[1], t[2], t[3], 1) : (t = h1.exec(e)) ? new fn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = m1.exec(e)) ? Bi(t[1], t[2], t[3], t[4]) : (t = y1.exec(e)) ? Bi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = w1.exec(e)) ? $u(t[1], t[2] / 100, t[3] / 100, 1) : (t = b1.exec(e)) ? $u(t[1], t[2] / 100, t[3] / 100, t[4]) : hu.hasOwnProperty(e) ? wu(hu[e]) : e === "transparent" ? new fn(NaN, NaN, NaN, 0) : null;
}
function wu(e) {
  return new fn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new fn(e, t, n, r);
}
function _1(e) {
  return e instanceof wi || (e = li(e)), e ? (e = e.rgb(), new fn(e.r, e.g, e.b, e.opacity)) : new fn();
}
function Vs(e, t, n, r) {
  return arguments.length === 1 ? _1(e) : new fn(e, t, n, r ?? 1);
}
function fn(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
vl(fn, Vs, gd(wi, {
  brighter(e) {
    return e = e == null ? da : Math.pow(da, e), new fn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ai : Math.pow(ai, e), new fn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fn(Zr(this.r), Zr(this.g), Zr(this.b), fa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bu,
  // Deprecated! Use color.formatHex.
  formatHex: bu,
  formatHex8: C1,
  formatRgb: xu,
  toString: xu
}));
function bu() {
  return `#${jr(this.r)}${jr(this.g)}${jr(this.b)}`;
}
function C1() {
  return `#${jr(this.r)}${jr(this.g)}${jr(this.b)}${jr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xu() {
  const e = fa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function fa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function jr(e) {
  return e = Zr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function $u(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dn(e, t, n, r);
}
function hd(e) {
  if (e instanceof Dn) return new Dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof wi || (e = li(e)), !e) return new Dn();
  if (e instanceof Dn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new Dn(i, s, l, e.opacity);
}
function k1(e, t, n, r) {
  return arguments.length === 1 ? hd(e) : new Dn(e, t, n, r ?? 1);
}
function Dn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
vl(Dn, k1, gd(wi, {
  brighter(e) {
    return e = e == null ? da : Math.pow(da, e), new Dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ai : Math.pow(ai, e), new Dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new fn(
      ds(e >= 240 ? e - 240 : e + 120, o, r),
      ds(e, o, r),
      ds(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Dn(_u(this.h), ji(this.s), ji(this.l), fa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = fa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_u(this.h)}, ${ji(this.s) * 100}%, ${ji(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _u(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ji(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ds(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const md = (e) => () => e;
function E1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function S1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function P1(e) {
  return (e = +e) == 1 ? yd : function(t, n) {
    return n - t ? S1(t, n, e) : md(isNaN(t) ? n : t);
  };
}
function yd(e, t) {
  var n = t - e;
  return n ? E1(e, n) : md(isNaN(e) ? t : e);
}
const Cu = function e(t) {
  var n = P1(t);
  function r(o, a) {
    var i = n((o = Vs(o)).r, (a = Vs(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = yd(o.opacity, a.opacity);
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
var Ns = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fs = new RegExp(Ns.source, "g");
function T1(e) {
  return function() {
    return e;
  };
}
function O1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function M1(e, t) {
  var n = Ns.lastIndex = fs.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ns.exec(e)) && (o = fs.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: Er(r, o) })), n = fs.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? O1(l[0].x) : T1(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var ku = 180 / Math.PI, wd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function bd(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * ku,
    skewX: Math.atan(l) * ku,
    scaleX: i,
    scaleY: s
  };
}
var Zi;
function D1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? wd : bd(t.a, t.b, t.c, t.d, t.e, t.f);
}
function V1(e) {
  return e == null || (Zi || (Zi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zi.setAttribute("transform", e), !(e = Zi.transform.baseVal.consolidate())) ? wd : (e = e.matrix, bd(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xd(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var $ = v.push("translate(", null, t, null, n);
      m.push({ i: $ - 4, x: Er(u, d) }, { i: $ - 2, x: Er(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Er(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Er(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var $ = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: $ - 4, x: Er(u, d) }, { i: $ - 2, x: Er(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var m = -1, $ = f.length, x; ++m < $; ) d[(x = f[m]).i] = x.x(v);
      return d.join("");
    };
  };
}
var N1 = xd(D1, "px, ", "px)", "deg)"), R1 = xd(V1, ", ", ")", ")"), L1 = 1e-12;
function Eu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function z1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function A1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const H1 = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, m = d - l, $ = v * v + m * m, x, S;
    if ($ < L1)
      S = Math.log(f / u) / t, x = function(V) {
        return [
          s + V * v,
          l + V * m,
          u * Math.exp(t * V * S)
        ];
      };
    else {
      var g = Math.sqrt($), _ = (f * f - u * u + r * $) / (2 * u * n * g), y = (f * f - u * u - r * $) / (2 * f * n * g), k = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(y * y + 1) - y);
      S = (T - k) / t, x = function(V) {
        var D = V * S, N = Eu(k), A = u / (n * g) * (N * A1(t * D + k) - z1(k));
        return [
          s + A * v,
          l + A * m,
          u * N / Eu(t * D + k)
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
var Co = 0, Uo = 0, Xo = 0, $d = 1e3, va, Go, pa = 0, Xr = 0, Ba = 0, ui = typeof performance == "object" && performance.now ? performance : Date, _d = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function pl() {
  return Xr || (_d(I1), Xr = ui.now() + Ba);
}
function I1() {
  Xr = 0;
}
function ga() {
  this._call = this._time = this._next = null;
}
ga.prototype = Cd.prototype = {
  constructor: ga,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? pl() : +n) + (t == null ? 0 : +t), !this._next && Go !== this && (Go ? Go._next = this : va = this, Go = this), this._call = e, this._time = n, Rs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Rs());
  }
};
function Cd(e, t, n) {
  var r = new ga();
  return r.restart(e, t, n), r;
}
function B1() {
  pl(), ++Co;
  for (var e = va, t; e; )
    (t = Xr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Co;
}
function Su() {
  Xr = (pa = ui.now()) + Ba, Co = Uo = 0;
  try {
    B1();
  } finally {
    Co = 0, Z1(), Xr = 0;
  }
}
function j1() {
  var e = ui.now(), t = e - pa;
  t > $d && (Ba -= t, pa = e);
}
function Z1() {
  for (var e, t = va, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : va = n);
  Go = e, Rs(r);
}
function Rs(e) {
  if (!Co) {
    Uo && (Uo = clearTimeout(Uo));
    var t = e - Xr;
    t > 24 ? (e < 1 / 0 && (Uo = setTimeout(Su, e - ui.now() - Ba)), Xo && (Xo = clearInterval(Xo))) : (Xo || (pa = ui.now(), Xo = setInterval(j1, $d)), Co = 1, _d(Su));
  }
}
function Pu(e, t, n) {
  var r = new ga();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Y1 = Ha("start", "end", "cancel", "interrupt"), W1 = [], kd = 0, Tu = 1, Ls = 2, Gi = 3, Ou = 4, zs = 5, Ji = 6;
function ja(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  X1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Y1,
    tween: W1,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: kd
  });
}
function gl(e, t) {
  var n = An(e, t);
  if (n.state > kd) throw new Error("too late; already scheduled");
  return n;
}
function tr(e, t) {
  var n = An(e, t);
  if (n.state > Gi) throw new Error("too late; already running");
  return n;
}
function An(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function X1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Cd(a, 0, n.time);
  function a(u) {
    n.state = Tu, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== Tu) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === Gi) return Pu(i);
        v.state === Ou ? (v.state = Ji, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Ji, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Pu(function() {
      n.state === Gi && (n.state = Ou, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ls, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ls) {
      for (n.state = Gi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = zs, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === zs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ji, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Qi(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ls && r.state < zs, r.state = Ji, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function F1(e) {
  return this.each(function() {
    Qi(this, e);
  });
}
function K1(e, t) {
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
function q1(e, t, n) {
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
function U1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = An(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? K1 : q1)(n, e, t));
}
function hl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = tr(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return An(o, r).value[t];
  };
}
function Ed(e, t) {
  var n;
  return (typeof t == "number" ? Er : t instanceof li ? Cu : (n = li(t)) ? (t = n, Cu) : M1)(e, t);
}
function G1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function J1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Q1(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function e0(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function t0(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function n0(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function r0(e, t) {
  var n = Ia(e), r = n === "transform" ? R1 : Ed;
  return this.attrTween(e, typeof t == "function" ? (n.local ? n0 : t0)(n, r, hl(this, "attr." + e, t)) : t == null ? (n.local ? J1 : G1)(n) : (n.local ? e0 : Q1)(n, r, t));
}
function o0(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function i0(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function a0(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && i0(e, a)), n;
  }
  return o._value = t, o;
}
function s0(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && o0(e, a)), n;
  }
  return o._value = t, o;
}
function l0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ia(e);
  return this.tween(n, (r.local ? a0 : s0)(r, t));
}
function u0(e, t) {
  return function() {
    gl(this, e).delay = +t.apply(this, arguments);
  };
}
function c0(e, t) {
  return t = +t, function() {
    gl(this, e).delay = t;
  };
}
function d0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? u0 : c0)(t, e)) : An(this.node(), t).delay;
}
function f0(e, t) {
  return function() {
    tr(this, e).duration = +t.apply(this, arguments);
  };
}
function v0(e, t) {
  return t = +t, function() {
    tr(this, e).duration = t;
  };
}
function p0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? f0 : v0)(t, e)) : An(this.node(), t).duration;
}
function g0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tr(this, e).ease = t;
  };
}
function h0(e) {
  var t = this._id;
  return arguments.length ? this.each(g0(t, e)) : An(this.node(), t).ease;
}
function m0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tr(this, e).ease = n;
  };
}
function y0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(m0(this._id, e));
}
function w0(e) {
  typeof e != "function" && (e = rd(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new hr(r, this._parents, this._name, this._id);
}
function b0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new hr(i, this._parents, this._name, this._id);
}
function x0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function $0(e, t, n) {
  var r, o, a = x0(t) ? gl : tr;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function _0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? An(this.node(), n).on.on(e) : this.each($0(n, e, t));
}
function C0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function k0() {
  return this.on("end.remove", C0(this._id));
}
function E0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = dl(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, ja(u[f], t, n, f, u, An(c, n)));
  return new hr(a, this._parents, t, n);
}
function S0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nd(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, m = An(c, n), $ = 0, x = f.length; $ < x; ++$)
          (v = f[$]) && ja(v, t, n, $, f, m);
        a.push(f), i.push(c);
      }
  return new hr(a, i, t, n);
}
var P0 = yi.prototype.constructor;
function T0() {
  return new P0(this._groups, this._parents);
}
function O0(e, t) {
  var n, r, o;
  return function() {
    var a = _o(this, e), i = (this.style.removeProperty(e), _o(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function Sd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function M0(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = _o(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function D0(e, t, n) {
  var r, o, a;
  return function() {
    var i = _o(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), _o(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function V0(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = tr(this, e), u = l.on, c = l.value[a] == null ? s || (s = Sd(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function N0(e, t, n) {
  var r = (e += "") == "transform" ? N1 : Ed;
  return t == null ? this.styleTween(e, O0(e, r)).on("end.style." + e, Sd(e)) : typeof t == "function" ? this.styleTween(e, D0(e, r, hl(this, "style." + e, t))).each(V0(this._id, e)) : this.styleTween(e, M0(e, r, t), n).on("end.style." + e, null);
}
function R0(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function L0(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && R0(e, i, n)), r;
  }
  return a._value = t, a;
}
function z0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, L0(e, t, n ?? ""));
}
function A0(e) {
  return function() {
    this.textContent = e;
  };
}
function H0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function I0(e) {
  return this.tween("text", typeof e == "function" ? H0(hl(this, "text", e)) : A0(e == null ? "" : e + ""));
}
function B0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function j0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && B0(o)), t;
  }
  return r._value = e, r;
}
function Z0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, j0(e));
}
function Y0() {
  for (var e = this._name, t = this._id, n = Pd(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = An(l, t);
        ja(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new hr(r, this._parents, e, n);
}
function W0() {
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
var X0 = 0;
function hr(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pd() {
  return ++X0;
}
var ar = yi.prototype;
hr.prototype = {
  constructor: hr,
  select: E0,
  selectAll: S0,
  selectChild: ar.selectChild,
  selectChildren: ar.selectChildren,
  filter: w0,
  merge: b0,
  selection: T0,
  transition: Y0,
  call: ar.call,
  nodes: ar.nodes,
  node: ar.node,
  size: ar.size,
  empty: ar.empty,
  each: ar.each,
  on: _0,
  attr: r0,
  attrTween: l0,
  style: N0,
  styleTween: z0,
  text: I0,
  textTween: Z0,
  remove: k0,
  tween: U1,
  delay: d0,
  duration: p0,
  ease: h0,
  easeVarying: y0,
  end: W0,
  [Symbol.iterator]: ar[Symbol.iterator]
};
function F0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var K0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: F0
};
function q0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function U0(e) {
  var t, n;
  e instanceof hr ? (t = e._id, e = e._name) : (t = Pd(), (n = K0).time = pl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && ja(l, e, t, u, i, n || q0(l, t));
  return new hr(r, this._parents, e, t);
}
yi.prototype.interrupt = F1;
yi.prototype.transition = U0;
const Yi = (e) => () => e;
function G0(e, {
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
var Za = new lr(1, 0, 0);
Td.prototype = lr.prototype;
function Td(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Za;
  return e.__zoom;
}
function vs(e) {
  e.stopImmediatePropagation();
}
function Fo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function J0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Q0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Mu() {
  return this.__zoom || Za;
}
function em(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function tm() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function nm(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Od() {
  var e = J0, t = Q0, n = nm, r = em, o = tm, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = H1, u = Ha("start", "zoom", "end"), c, d, f, v = 500, m = 150, $ = 0, x = 10;
  function S(P) {
    P.property("__zoom", Mu).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", j).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(P, M, E, C) {
    var R = P.selection ? P.selection() : P;
    R.property("__zoom", Mu), P !== R ? k(P, M, E, C) : R.interrupt().each(function() {
      T(this, arguments).event(C).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, S.scaleBy = function(P, M, E, C) {
    S.scaleTo(P, function() {
      var R = this.__zoom.k, H = typeof M == "function" ? M.apply(this, arguments) : M;
      return R * H;
    }, E, C);
  }, S.scaleTo = function(P, M, E, C) {
    S.transform(P, function() {
      var R = t.apply(this, arguments), H = this.__zoom, F = E == null ? y(R) : typeof E == "function" ? E.apply(this, arguments) : E, O = H.invert(F), I = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(_(g(H, I), F, O), R, i);
    }, E, C);
  }, S.translateBy = function(P, M, E, C) {
    S.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), i);
    }, null, C);
  }, S.translateTo = function(P, M, E, C, R) {
    S.transform(P, function() {
      var H = t.apply(this, arguments), F = this.__zoom, O = C == null ? y(H) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Za.translate(O[0], O[1]).scale(F.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), H, i);
    }, C, R);
  };
  function g(P, M) {
    return M = Math.max(a[0], Math.min(a[1], M)), M === P.k ? P : new lr(M, P.x, P.y);
  }
  function _(P, M, E) {
    var C = M[0] - E[0] * P.k, R = M[1] - E[1] * P.k;
    return C === P.x && R === P.y ? P : new lr(P.k, C, R);
  }
  function y(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, M, E, C) {
    P.on("start.zoom", function() {
      T(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var R = this, H = arguments, F = T(R, H).event(C), O = t.apply(R, H), I = E == null ? y(O) : typeof E == "function" ? E.apply(R, H) : E, ne = Math.max(O[1][0] - O[0][0], O[1][1] - O[0][1]), Q = R.__zoom, W = typeof M == "function" ? M.apply(R, H) : M, se = l(Q.invert(I).concat(ne / Q.k), W.invert(I).concat(ne / W.k));
      return function(ge) {
        if (ge === 1) ge = W;
        else {
          var ve = se(ge), ue = ne / ve[2];
          ge = new lr(ue, I[0] - ve[0] * ue, I[1] - ve[1] * ue);
        }
        F.zoom(null, ge);
      };
    });
  }
  function T(P, M, E) {
    return !E && P.__zooming || new V(P, M);
  }
  function V(P, M) {
    this.that = P, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, M), this.taps = 0;
  }
  V.prototype = {
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
      var M = kn(this.that).datum();
      u.call(
        P,
        this.that,
        new G0(P, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function D(P, ...M) {
    if (!e.apply(this, arguments)) return;
    var E = T(this, M).event(P), C = this.__zoom, R = Math.max(a[0], Math.min(a[1], C.k * Math.pow(2, r.apply(this, arguments)))), H = Mn(P);
    if (E.wheel)
      (E.mouse[0][0] !== H[0] || E.mouse[0][1] !== H[1]) && (E.mouse[1] = C.invert(E.mouse[0] = H)), clearTimeout(E.wheel);
    else {
      if (C.k === R) return;
      E.mouse = [H, C.invert(H)], Qi(this), E.start();
    }
    Fo(P), E.wheel = setTimeout(F, m), E.zoom("mouse", n(_(g(C, R), E.mouse[0], E.mouse[1]), E.extent, i));
    function F() {
      E.wheel = null, E.end();
    }
  }
  function N(P, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var E = P.currentTarget, C = T(this, M, !0).event(P), R = kn(P.view).on("mousemove.zoom", I, !0).on("mouseup.zoom", ne, !0), H = Mn(P, E), F = P.clientX, O = P.clientY;
    vd(P.view), vs(P), C.mouse = [H, this.__zoom.invert(H)], Qi(this), C.start();
    function I(Q) {
      if (Fo(Q), !C.moved) {
        var W = Q.clientX - F, se = Q.clientY - O;
        C.moved = W * W + se * se > $;
      }
      C.event(Q).zoom("mouse", n(_(C.that.__zoom, C.mouse[0] = Mn(Q, E), C.mouse[1]), C.extent, i));
    }
    function ne(Q) {
      R.on("mousemove.zoom mouseup.zoom", null), pd(Q.view, C.moved), Fo(Q), C.event(Q).end();
    }
  }
  function A(P, ...M) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, C = Mn(P.changedTouches ? P.changedTouches[0] : P, this), R = E.invert(C), H = E.k * (P.shiftKey ? 0.5 : 2), F = n(_(g(E, H), C, R), t.apply(this, M), i);
      Fo(P), s > 0 ? kn(this).transition().duration(s).call(k, F, C, P) : kn(this).call(S.transform, F, C, P);
    }
  }
  function j(P, ...M) {
    if (e.apply(this, arguments)) {
      var E = P.touches, C = E.length, R = T(this, M, P.changedTouches.length === C).event(P), H, F, O, I;
      for (vs(P), F = 0; F < C; ++F)
        O = E[F], I = Mn(O, this), I = [I, this.__zoom.invert(I), O.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== I[2] && (R.touch1 = I, R.taps = 0) : (R.touch0 = I, H = !0, R.taps = 1 + !!c);
      c && (c = clearTimeout(c)), H && (R.taps < 2 && (d = I[0], c = setTimeout(function() {
        c = null;
      }, v)), Qi(this), R.start());
    }
  }
  function Z(P, ...M) {
    if (this.__zooming) {
      var E = T(this, M).event(P), C = P.changedTouches, R = C.length, H, F, O, I;
      for (Fo(P), H = 0; H < R; ++H)
        F = C[H], O = Mn(F, this), E.touch0 && E.touch0[2] === F.identifier ? E.touch0[0] = O : E.touch1 && E.touch1[2] === F.identifier && (E.touch1[0] = O);
      if (F = E.that.__zoom, E.touch1) {
        var ne = E.touch0[0], Q = E.touch0[1], W = E.touch1[0], se = E.touch1[1], ge = (ge = W[0] - ne[0]) * ge + (ge = W[1] - ne[1]) * ge, ve = (ve = se[0] - Q[0]) * ve + (ve = se[1] - Q[1]) * ve;
        F = g(F, Math.sqrt(ge / ve)), O = [(ne[0] + W[0]) / 2, (ne[1] + W[1]) / 2], I = [(Q[0] + se[0]) / 2, (Q[1] + se[1]) / 2];
      } else if (E.touch0) O = E.touch0[0], I = E.touch0[1];
      else return;
      E.zoom("touch", n(_(F, O, I), E.extent, i));
    }
  }
  function X(P, ...M) {
    if (this.__zooming) {
      var E = T(this, M).event(P), C = P.changedTouches, R = C.length, H, F;
      for (vs(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), H = 0; H < R; ++H)
        F = C[H], E.touch0 && E.touch0[2] === F.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === F.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (F = Mn(F, this), Math.hypot(d[0] - F[0], d[1] - F[1]) < x)) {
        var O = kn(this).on("dblclick.zoom");
        O && O.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Yi(+P), S) : r;
  }, S.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Yi(!!P), S) : e;
  }, S.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Yi(!!P), S) : o;
  }, S.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Yi([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), S) : t;
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
    return arguments.length ? ($ = (P = +P) * P, S) : Math.sqrt($);
  }, S.tapDistance = function(P) {
    return arguments.length ? (x = +P, S) : x;
  }, S;
}
const bi = {
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
}, ha = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Fr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Fr || (Fr = {}));
var Mr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Mr || (Mr = {}));
var ma;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ma || (ma = {}));
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
var go;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(go || (go = {}));
var ci;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ci || (ci = {}));
var Le;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Le || (Le = {}));
const Du = {
  [Le.Left]: Le.Right,
  [Le.Right]: Le.Left,
  [Le.Top]: Le.Bottom,
  [Le.Bottom]: Le.Top
};
function rm(e, t) {
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
function Vu(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function om(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const im = (e) => "id" in e && "source" in e && "target" in e, am = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ml = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), xi = (e, t = [0, 0]) => {
  const { width: n, height: r } = zr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, sm = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : ml(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? ya(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Wa(n);
}, $i = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ya(r);
      n = Ya(n, o);
    }
  }), Wa(n);
}, Md = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ..._i(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, m = c.height ?? u.height ?? u.initialHeight ?? null, $ = di(s, Eo(u)), x = (v ?? 0) * (m ?? 0), S = a && $ > 0;
    (!u.internals.handleBounds || S || $ >= x || u.dragging) && l.push(u);
  }
  return l;
}, Hs = (e, t) => {
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
  const s = $i(e), l = wl(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function lm({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", bi.error005());
    else {
      const v = s.measured.width, m = s.measured.height;
      v && m && (d = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else s && So(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = So(d) ? Kr(t, d, i.measured) : t;
  return {
    position: {
      x: f.x - l + i.measured.width * c[0],
      y: f.y - u + i.measured.height * c[1]
    },
    positionAbsolute: f
  };
}
async function Dd({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((m) => m.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Hs(i, l);
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
const ko = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Kr = (e = { x: 0, y: 0 }, t, n) => ({
  x: ko(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ko(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Vd(e, t, n) {
  const { width: r, height: o } = zr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return Kr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Lu = (e, t, n) => e < t ? ko(Math.abs(e - t), 1, t) / t : e > n ? -ko(Math.abs(e - n), 1, t) / t : 0, Nd = (e, t, n = 15, r = 40) => {
  const o = Lu(e.x, r, t.width - r) * n, a = Lu(e.y, r, t.height - r) * n;
  return [o, a];
}, Ya = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Is = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Wa = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Eo = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = ml(e) ? e.internals.positionAbsolute : xi(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ya = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = ml(e) ? e.internals.positionAbsolute : xi(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Rd = (e, t) => Wa(Ya(Is(e), Is(t))), di = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, zu = (e) => ur(e.width) && ur(e.height) && ur(e.x) && ur(e.y), ur = (e) => !isNaN(e) && isFinite(e), um = (e, t) => {
}, yl = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), _i = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? yl(s, i) : s;
}, Ld = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), wl = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = ko(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, wa = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function So(e) {
  return e !== void 0 && e !== "parent";
}
function zr(e) {
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
function cm(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function ps(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = fr(e), s = _i({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? yl(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const bl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), dm = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, fm = ["INPUT", "SELECT", "TEXTAREA"];
function vm(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : fm.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ad = (e) => "clientX" in e, fr = (e, t) => {
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
      ...bl(i)
    };
  });
};
function pm({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Wi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Hu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Le.Left:
      return [t - Wi(t - r, a), n];
    case Le.Right:
      return [t + Wi(r - t, a), n];
    case Le.Top:
      return [t, n - Wi(n - o, a)];
    case Le.Bottom:
      return [t, n + Wi(o - n, a)];
  }
}
function Hd({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: a = Le.Top, curvature: i = 0.25 }) {
  const [s, l] = Hu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = Hu({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, m] = pm({
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
function gm({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function hm({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = Ya(ya(e), ya(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return di(i, Wa(a)) > 0;
}
const mm = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, ym = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), wm = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return im(e) ? n = { ...e } : n = {
    ...e,
    id: mm(e)
  }, ym(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Bs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Id({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const Iu = {
  [Le.Left]: { x: -1, y: 0 },
  [Le.Right]: { x: 1, y: 0 },
  [Le.Top]: { x: 0, y: -1 },
  [Le.Bottom]: { x: 0, y: 1 }
}, bm = ({ source: e, sourcePosition: t = Le.Bottom, target: n }) => t === Le.Left || t === Le.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Bu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function xm({ source: e, sourcePosition: t = Le.Bottom, target: n, targetPosition: r = Le.Top, center: o, offset: a }) {
  const i = Iu[t], s = Iu[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = bm({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], m, $;
  const x = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [g, _, y, k] = Id({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    m = o.x ?? g, $ = o.y ?? _;
    const T = [
      { x: m, y: l.y },
      { x: m, y: u.y }
    ], V = [
      { x: l.x, y: $ },
      { x: u.x, y: $ }
    ];
    i[d] === f ? v = d === "x" ? T : V : v = d === "x" ? V : T;
  } else {
    const T = [{ x: l.x, y: u.y }], V = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? V : T : v = i.y === f ? T : V, t === r) {
      const Z = Math.abs(e[d] - n[d]);
      if (Z <= a) {
        const X = Math.min(a - 1, a - Z);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * X : S[d] = (u[d] > n[d] ? -1 : 1) * X;
      }
    }
    if (t !== r) {
      const Z = d === "x" ? "y" : "x", X = i[d] === s[Z], P = l[Z] > u[Z], M = l[Z] < u[Z];
      (i[d] === 1 && (!X && P || X && M) || i[d] !== 1 && (!X && M || X && P)) && (v = d === "x" ? T : V);
    }
    const D = { x: l.x + x.x, y: l.y + x.y }, N = { x: u.x + S.x, y: u.y + S.y }, A = Math.max(Math.abs(D.x - v[0].x), Math.abs(N.x - v[0].x)), j = Math.max(Math.abs(D.y - v[0].y), Math.abs(N.y - v[0].y));
    A >= j ? (m = (D.x + N.x) / 2, $ = v[0].y) : (m = v[0].x, $ = (D.y + N.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + S.x, y: u.y + S.y },
    n
  ], m, $, y, k];
}
function $m(e, t, n, r) {
  const o = Math.min(Bu(e, t) / 2, Bu(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function ba({ sourceX: e, sourceY: t, sourcePosition: n = Le.Bottom, targetX: r, targetY: o, targetPosition: a = Le.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, m] = xm({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce(($, x, S) => {
    let g = "";
    return S > 0 && S < c.length - 1 ? g = $m(c[S - 1], x, c[S + 1], i) : g = `${S === 0 ? "M" : "L"}${x.x} ${x.y}`, $ += g, $;
  }, ""), d, f, v, m];
}
function ju(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function _m(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!ju(n) || !ju(r))
    return null;
  const o = n.internals.handleBounds || Zu(n.handles), a = r.internals.handleBounds || Zu(r.handles), i = Yu((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Yu(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Fr.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", bi.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Le.Bottom, u = (s == null ? void 0 : s.position) || Le.Top, c = fi(n, i, l), d = fi(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Zu(e) {
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
function fi(e, t, n = Le.Left, r = !1) {
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
function Yu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function js(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Cm(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = js(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function km(e, t, n, r, o) {
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
const xl = {
  nodeOrigin: [0, 0],
  nodeExtent: ha,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Em = {
  ...xl,
  checkEquality: !0
};
function $l(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Sm(e, t, n) {
  const r = $l(xl, n);
  for (const o of e.values())
    if (o.parentId)
      _l(o, e, t, r);
    else {
      const a = xi(o, r.nodeOrigin), i = So(o.extent) ? o.extent : r.nodeExtent, s = Kr(a, i, zr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bd(e, t, n, r) {
  var o, a;
  const i = $l(Em, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = xi(u, i.nodeOrigin), f = So(u.extent) ? u.extent : i.nodeExtent, v = Kr(d, f, zr(u));
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
function Pm(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function _l(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = $l(xl, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Pm(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Tm(e, l, a, i, u), { positionAbsolute: v } = e.internals, m = c !== v.x || d !== v.y;
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
  return (ur(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Tm(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = zr(e), l = xi(e, n), u = So(e.extent) ? Kr(l, e.extent, s) : l;
  let c = Kr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = Vd(c, s, t));
  const d = jd(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function Om(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Eo(l), c = Rd(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = zr(l), v = l.origin ?? r, m = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, $ = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), S = Math.max(f.height, Math.round(s.height)), g = (x - f.width) * v[0], _ = (S - f.height) * v[1];
    (m > 0 || $ > 0 || g || _) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - m + g,
        y: l.position.y - $ + _
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some((k) => k.id === y.id) || a.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + m,
          y: y.position.y + $
        }
      });
    })), (f.width < s.width || f.height < s.height || m || $) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (m ? v[0] * m - g : 0),
        height: S + ($ ? v[1] * $ - _ : 0)
      }
    });
  }), a;
}
function Mm(e, t, n, r, o, a) {
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
    const m = bl(f.nodeElement), $ = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && ($ || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), S = So(v.extent) ? v.extent : a;
      let { positionAbsolute: g } = v.internals;
      v.parentId && v.extent === "parent" ? g = Vd(g, m, t.get(v.parentId)) : S && (g = Kr(g, S, m));
      const _ = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Au("source", f.nodeElement, x, c, v.id),
            target: Au("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, _), v.parentId && _l(_, t, n, { nodeOrigin: o }), s = !0, $ && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Eo(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = Om(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Dm({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function Wu(e, t, n, r, o, a) {
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
function Zd(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Wu("source", l, c, e, o, i), Wu("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function Vm(e, t) {
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
function Xu(e, t, n) {
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
function Nm(e, t, n, r) {
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
function gs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Rm({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function m({ noDragClassName: x, handleSelector: S, domNode: g, isSelectable: _, nodeId: y, nodeClickDistance: k = 0 }) {
    f = kn(g);
    function T({ x: A, y: j }, Z) {
      const { nodeLookup: X, nodeExtent: P, snapGrid: M, snapToGrid: E, nodeOrigin: C, onNodeDrag: R, onSelectionDrag: H, onError: F, updateNodePositions: O } = t();
      a = { x: A, y: j };
      let I = !1, ne = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = $i(s);
        ne = Is(Q);
      }
      for (const [Q, W] of s) {
        if (!X.has(Q))
          continue;
        let se = { x: A - W.distance.x, y: j - W.distance.y };
        E && (se = yl(se, M));
        let ge = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !W.extent) {
          const { positionAbsolute: ae } = W.internals, we = ae.x - ne.x + P[0][0], Ke = ae.x + W.measured.width - ne.x2 + P[1][0], nt = ae.y - ne.y + P[0][1], Qe = ae.y + W.measured.height - ne.y2 + P[1][1];
          ge = [
            [we, nt],
            [Ke, Qe]
          ];
        }
        const { position: ve, positionAbsolute: ue } = lm({
          nodeId: Q,
          nextPosition: se,
          nodeLookup: X,
          nodeExtent: ge,
          nodeOrigin: C,
          onError: F
        });
        I = I || W.position.x !== ve.x || W.position.y !== ve.y, W.position = ve, W.internals.positionAbsolute = ue;
      }
      if (I && (O(s, !0), Z && (r || R || !y && H))) {
        const [Q, W] = gs({
          nodeId: y,
          dragItems: s,
          nodeLookup: X
        });
        r == null || r(Z, s, Q, W), R == null || R(Z, Q, W), y || H == null || H(Z, W);
      }
    }
    async function V() {
      if (!c)
        return;
      const { transform: A, panBy: j, autoPanSpeed: Z, autoPanOnNodeDrag: X } = t();
      if (!X) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, M] = Nd(u, c, Z);
      (P !== 0 || M !== 0) && (a.x = (a.x ?? 0) - P / A[2], a.y = (a.y ?? 0) - M / A[2], await j({ x: P, y: M }) && T(a, null)), i = requestAnimationFrame(V);
    }
    function D(A) {
      var j;
      const { nodeLookup: Z, multiSelectionActive: X, nodesDraggable: P, transform: M, snapGrid: E, snapToGrid: C, selectNodesOnDrag: R, onNodeDragStart: H, onSelectionDragStart: F, unselectNodesAndEdges: O } = t();
      d = !0, (!R || !_) && !X && y && ((j = Z.get(y)) != null && j.selected || O()), _ && R && y && (e == null || e(y));
      const I = ps(A.sourceEvent, { transform: M, snapGrid: E, snapToGrid: C, containerBounds: c });
      if (a = I, s = Nm(Z, P, I, y), s.size > 0 && (n || H || !y && F)) {
        const [ne, Q] = gs({
          nodeId: y,
          dragItems: s,
          nodeLookup: Z
        });
        n == null || n(A.sourceEvent, s, ne, Q), H == null || H(A.sourceEvent, ne, Q), y || F == null || F(A.sourceEvent, Q);
      }
    }
    const N = v1().clickDistance(k).on("start", (A) => {
      const { domNode: j, nodeDragThreshold: Z, transform: X, snapGrid: P, snapToGrid: M } = t();
      c = (j == null ? void 0 : j.getBoundingClientRect()) || null, v = !1, Z === 0 && D(A), a = ps(A.sourceEvent, { transform: X, snapGrid: P, snapToGrid: M, containerBounds: c }), u = fr(A.sourceEvent, c);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: j, transform: Z, snapGrid: X, snapToGrid: P, nodeDragThreshold: M, nodeLookup: E } = t(), C = ps(A.sourceEvent, { transform: Z, snapGrid: X, snapToGrid: P, containerBounds: c });
      if ((A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !E.has(y)) && (v = !0), !v) {
        if (!l && j && d && (l = !0, V()), !d) {
          const R = C.xSnapped - (a.x ?? 0), H = C.ySnapped - (a.y ?? 0);
          Math.sqrt(R * R + H * H) > M && D(A);
        }
        (a.x !== C.xSnapped || a.y !== C.ySnapped) && s && d && (u = fr(A.sourceEvent, c), T(C, A.sourceEvent));
      }
    }).on("end", (A) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: j, updateNodePositions: Z, onNodeDragStop: X, onSelectionDragStop: P } = t();
        if (Z(s, !1), o || X || !y && P) {
          const [M, E] = gs({
            nodeId: y,
            dragItems: s,
            nodeLookup: j,
            dragging: !1
          });
          o == null || o(A.sourceEvent, s, M, E), X == null || X(A.sourceEvent, M, E), y || P == null || P(A.sourceEvent, E);
        }
      }
    }).filter((A) => {
      const j = A.target;
      return !A.button && (!x || !Xu(j, `.${x}`, g)) && (!S || Xu(j, S, g));
    });
    f.call(N);
  }
  function $() {
    f == null || f.on(".drag", null);
  }
  return {
    update: m,
    destroy: $
  };
}
function Lm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    di(o, Eo(a)) > 0 && r.push(a);
  return r;
}
const zm = 250;
function Am(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = Lm(e, n, t + zm);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = fi(u, d, d.position, !0), m = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
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
  return d && a ? { ...d, ...fi(u, d, d.position, !0) } : d;
}
function Xd(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Hm(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Fd = () => !0;
function Im(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: $, onConnectEnd: x, isValidConnection: S = Fd, onReconnectEnd: g, updateConnection: _, getTransform: y, getFromHandle: k, autoPanSpeed: T }) {
  const V = dm(e.target);
  let D = 0, N;
  const { x: A, y: j } = fr(e), Z = V == null ? void 0 : V.elementFromPoint(A, j), X = Xd(a, Z), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !X)
    return;
  const M = Wd(o, X, r, l, t);
  if (!M)
    return;
  let E = fr(e, P), C = !1, R = null, H = !1, F = null;
  function O() {
    if (!c || !P)
      return;
    const [ve, ue] = Nd(E, P, T);
    f({ x: ve, y: ue }), D = requestAnimationFrame(O);
  }
  const I = {
    ...M,
    nodeId: o,
    type: X,
    position: M.position
  }, ne = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: fi(ne, I, Le.Left, !0),
    fromHandle: I,
    fromPosition: I.position,
    fromNode: ne,
    to: E,
    toHandle: null,
    toPosition: Du[I.position],
    toNode: null
  };
  _(Q);
  let W = Q;
  m == null || m(e, { nodeId: o, handleId: r, handleType: X });
  function se(ve) {
    if (!k() || !I) {
      ge(ve);
      return;
    }
    const ue = y();
    E = fr(ve, P), N = Am(_i(E, ue, !1, [1, 1]), n, l, I), C || (O(), C = !0);
    const ae = Kd(ve, {
      handle: N,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: S,
      doc: V,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    F = ae.handleDomNode, R = ae.connection, H = Hm(!!N, ae.isValid);
    const we = {
      // from stays the same
      ...W,
      isValid: H,
      to: N && H ? Ld({ x: N.x, y: N.y }, ue) : E,
      toHandle: ae.toHandle,
      toPosition: H && ae.toHandle ? ae.toHandle.position : Du[I.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null
    };
    H && N && W.toHandle && we.toHandle && W.toHandle.type === we.toHandle.type && W.toHandle.nodeId === we.toHandle.nodeId && W.toHandle.id === we.toHandle.id && W.to.x === we.to.x && W.to.y === we.to.y || (_(we), W = we);
  }
  function ge(ve) {
    (N || F) && R && H && ($ == null || $(R));
    const { inProgress: ue, ...ae } = W, we = {
      ...ae,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(ve, we), a && (g == null || g(ve, we)), v(), cancelAnimationFrame(D), C = !1, H = !1, R = null, F = null, V.removeEventListener("mousemove", se), V.removeEventListener("mouseup", ge), V.removeEventListener("touchmove", se), V.removeEventListener("touchend", ge);
  }
  V.addEventListener("mousemove", se), V.addEventListener("mouseup", ge), V.addEventListener("touchmove", se), V.addEventListener("touchend", ge);
}
function Kd(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Fd, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: m } = fr(e), $ = i.elementFromPoint(v, m), x = $ != null && $.classList.contains(`${s}-flow__handle`) ? $ : f, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const g = Xd(void 0, x), _ = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !g)
      return S;
    const V = {
      source: d ? _ : r,
      sourceHandle: d ? y : o,
      target: d ? r : _,
      targetHandle: d ? o : y
    };
    S.connection = V;
    const D = k && T && (n === Fr.Strict ? d && g === "source" || !d && g === "target" : _ !== r || y !== o);
    S.isValid = D && u(V), S.toHandle = Wd(_, g, y, c, n, !1);
  }
  return S;
}
const Bm = {
  onPointerDown: Im,
  isValid: Kd
};
function jm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = kn(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (_) => {
      const y = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, T = y[2] * Math.pow(2, k);
      t.scaleTo(T);
    };
    let $ = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && ($ = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, S = (_) => {
      const y = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [k[0] - $[0], k[1] - $[1]];
      $ = k;
      const V = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), D = {
        x: y[0] - T[0] * V,
        y: y[1] - T[1] * V
      }, N = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: y[2]
      }, N, s);
    }, g = Od().on("start", x).on("zoom", d ? S : null).on("zoom.wheel", f ? m : null);
    o.call(g, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: Mn
  };
}
const Zm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Xa = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), hs = ({ x: e, y: t, zoom: n }) => Za.translate(e, t).scale(n), lo = (e, t) => e.target.closest(`.${t}`), qd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ms = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ud = (e) => {
  const t = e.ctrlKey && wa() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Ym({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (lo(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = Mn(c), S = Ud(c), g = d * Math.pow(2, S);
      r.scaleTo(n, g, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === Mr.Vertical ? 0 : c.deltaX * f, m = o === Mr.Horizontal ? 0 : c.deltaY * f;
    !wa() && c.shiftKey && o !== Mr.Vertical && (v = c.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(m / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const $ = Xa(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, $)), e.isPanScrolling && (l == null || l(c, $), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, $), e.isPanScrolling = !1;
    }, 150));
  };
}
function Wm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || lo(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Xm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Xa(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function Fm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && qd(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, Xa(a.transform)));
  };
}
function Km({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && qd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && Zm(e.prevViewport, i.transform))) {
      const l = Xa(i.transform);
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
function qm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
    const m = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && m;
  };
}
function Um({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Od().clickDistance(!ur(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = kn(e).call(f);
  _({
    x: a.x,
    y: a.y,
    zoom: ko(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = v.on("wheel.zoom"), $ = v.on("dblclick.zoom");
  f.wheelDelta(Ud);
  function x(Z, X) {
    return v ? new Promise((P) => {
      f == null || f.transform(ms(v, X == null ? void 0 : X.duration, () => P(!0)), Z);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: Z, noPanClassName: X, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: E, panOnDrag: C, panOnScrollMode: R, panOnScrollSpeed: H, preventScrolling: F, zoomOnPinch: O, zoomOnScroll: I, zoomOnDoubleClick: ne, zoomActivationKeyPressed: Q, lib: W, onTransformChange: se }) {
    M && !c.isZoomingOrPanning && g();
    const ge = E && !Q && !M ? Ym({
      zoomPanValues: c,
      noWheelClassName: Z,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: R,
      panOnScrollSpeed: H,
      zoomOnPinch: O,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : Wm({
      noWheelClassName: Z,
      preventScrolling: F,
      d3ZoomHandler: m
    });
    if (v.on("wheel.zoom", ge, { passive: !1 }), !M) {
      const ue = Xm({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ue);
      const ae = Fm({
        zoomPanValues: c,
        panOnDrag: C,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: se
      });
      f.on("zoom", ae);
      const we = Km({
        zoomPanValues: c,
        panOnDrag: C,
        panOnScroll: E,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", we);
    }
    const ve = qm({
      zoomActivationKeyPressed: Q,
      panOnDrag: C,
      zoomOnScroll: I,
      panOnScroll: E,
      zoomOnDoubleClick: ne,
      zoomOnPinch: O,
      userSelectionActive: M,
      noPanClassName: X,
      noWheelClassName: Z,
      lib: W
    });
    f.filter(ve), ne ? v.on("dblclick.zoom", $) : v.on("dblclick.zoom", null);
  }
  function g() {
    f.on("zoom", null);
  }
  async function _(Z, X, P) {
    const M = hs(Z), E = f == null ? void 0 : f.constrain()(M, X, P);
    return E && await x(E), new Promise((C) => C(E));
  }
  async function y(Z, X) {
    const P = hs(Z);
    return await x(P, X), new Promise((M) => M(P));
  }
  function k(Z) {
    if (v) {
      const X = hs(Z), P = v.property("__zoom");
      (P.k !== Z.zoom || P.x !== Z.x || P.y !== Z.y) && (f == null || f.transform(v, X, null, { sync: !0 }));
    }
  }
  function T() {
    const Z = v ? Td(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: Z.x, y: Z.y, zoom: Z.k };
  }
  function V(Z, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(ms(v, X == null ? void 0 : X.duration, () => P(!0)), Z);
    }) : Promise.resolve(!1);
  }
  function D(Z, X) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(ms(v, X == null ? void 0 : X.duration, () => P(!0)), Z);
    }) : Promise.resolve(!1);
  }
  function N(Z) {
    f == null || f.scaleExtent(Z);
  }
  function A(Z) {
    f == null || f.translateExtent(Z);
  }
  function j(Z) {
    const X = !ur(Z) || Z < 0 ? 0 : Z;
    f == null || f.clickDistance(X);
  }
  return {
    update: S,
    destroy: g,
    setViewport: y,
    setViewportConstrained: _,
    getViewport: T,
    scaleTo: V,
    scaleBy: D,
    setScaleExtent: N,
    setTranslateExtent: A,
    syncViewport: k,
    setClickDistance: j
  };
}
var Fu;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Fu || (Fu = {}));
var Gm = /* @__PURE__ */ he('<div role="button" tabindex="-1"><!></div>');
function Rr(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(ne, "$connectable", n), a = () => le(ve, "$connectionRadius", n), i = () => le(se, "$domNode", n), s = () => le(ge, "$nodeLookup", n), l = () => le(W, "$connectionMode", n), u = () => le(we, "$lib", n), c = () => le(ye, "$autoPanOnConnect", n), d = () => le(it, "$flowId", n), f = () => le(ae, "$isValidConnectionStore", n), v = () => le(nt, "$onedgecreate", n), m = () => le(st, "$onConnectAction", n), $ = () => le(Ie, "$onConnectStartAction", n), x = () => le(tt, "$onConnectEndAction", n), S = () => le(ue, "$viewport", n), g = () => le(vt, "$connection", n), _ = () => le(ke, "$edges", n), y = () => le(De, "$connectionLookup", n), k = fe(), T = fe(), V = fe(), D = fe(), N = fe(), A = fe(), j = fe(), Z = fe();
  let X = b(t, "id", 12, void 0), P = b(t, "type", 12, "source"), M = b(t, "position", 28, () => Le.Top), E = b(t, "style", 12, void 0), C = b(t, "isValidConnection", 12, void 0), R = b(t, "onconnect", 12, void 0), H = b(t, "ondisconnect", 12, void 0), F = b(t, "isConnectable", 12, void 0), O = b(t, "class", 12, void 0);
  const I = Yr("svelteflow__node_id"), ne = Yr("svelteflow__node_connectable"), Q = xt(), {
    connectionMode: W,
    domNode: se,
    nodeLookup: ge,
    connectionRadius: ve,
    viewport: ue,
    isValidConnection: ae,
    lib: we,
    addEdge: Ke,
    onedgecreate: nt,
    panBy: Qe,
    cancelConnection: et,
    updateConnection: U,
    autoPanOnConnect: ye,
    edges: ke,
    connectionLookup: De,
    onconnect: st,
    onconnectstart: Ie,
    onconnectend: tt,
    flowId: it,
    connection: vt
  } = Q;
  function Tt(Ne) {
    const kt = Ad(Ne);
    (kt && Ne.button === 0 || !kt) && Bm.onPointerDown(Ne, {
      handleId: p(V),
      nodeId: I,
      isTarget: p(k),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: C() ?? f(),
      updateConnection: U,
      cancelConnection: et,
      panBy: Qe,
      onConnect: (Ve) => {
        var Xe;
        const ut = v() ? v()(Ve) : Ve;
        ut && (Ke(ut), (Xe = m()) == null || Xe(Ve));
      },
      onConnectStart: (Ve, Xe) => {
        var ut;
        (ut = $()) == null || ut(Ve, {
          nodeId: Xe.nodeId,
          handleId: Xe.handleId,
          handleType: Xe.handleType
        });
      },
      onConnectEnd: (Ve, Xe) => {
        var ut;
        (ut = x()) == null || ut(Ve, Xe);
      },
      getTransform: () => [
        S().x,
        S().y,
        S().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let ce = fe(null), Be = fe();
  $e(() => oe(P()), () => {
    ie(k, P() === "target");
  }), $e(
    () => (oe(F()), o()),
    () => {
      ie(T, F() !== void 0 ? F() : o());
    }
  ), $e(() => oe(X()), () => {
    ie(V, X() || null);
  }), $e(
    () => (oe(R()), oe(H()), _(), y(), oe(P()), oe(X())),
    () => {
      (R() || H()) && (_(), ie(Be, y().get(`${I}-${P()}${X() ? `-${X()}` : ""}`)));
    }
  ), $e(
    () => (p(ce), p(Be), oe(H()), oe(R())),
    () => {
      if (p(ce) && !rm(p(Be), p(ce))) {
        const Ne = p(Be) ?? /* @__PURE__ */ new Map();
        Vu(p(ce), Ne, H()), Vu(Ne, p(ce), R());
      }
      ie(ce, p(Be) ?? /* @__PURE__ */ new Map());
    }
  ), $e(() => g(), () => {
    ie(D, !!g().fromHandle);
  }), $e(
    () => (g(), oe(P()), p(V)),
    () => {
      var Ne, kt, Ve;
      ie(N, ((Ne = g().fromHandle) == null ? void 0 : Ne.nodeId) === I && ((kt = g().fromHandle) == null ? void 0 : kt.type) === P() && ((Ve = g().fromHandle) == null ? void 0 : Ve.id) === p(V));
    }
  ), $e(
    () => (g(), oe(P()), p(V)),
    () => {
      var Ne, kt, Ve;
      ie(A, ((Ne = g().toHandle) == null ? void 0 : Ne.nodeId) === I && ((kt = g().toHandle) == null ? void 0 : kt.type) === P() && ((Ve = g().toHandle) == null ? void 0 : Ve.id) === p(V));
    }
  ), $e(
    () => (l(), g(), oe(P()), p(V)),
    () => {
      var Ne, kt, Ve;
      ie(j, l() === Fr.Strict ? ((Ne = g().fromHandle) == null ? void 0 : Ne.type) !== P() : I !== ((kt = g().fromHandle) == null ? void 0 : kt.nodeId) || p(V) !== ((Ve = g().fromHandle) == null ? void 0 : Ve.id));
    }
  ), $e(() => (p(A), g()), () => {
    ie(Z, p(A) && g().isValid);
  }), Xt(), Ge();
  var pe = Gm();
  xe(pe, "data-nodeid", I);
  var sn = ee(pe);
  Ut(sn, t, "default", {}), J(pe), He(
    (Ne) => {
      xe(pe, "data-handleid", p(V)), xe(pe, "data-handlepos", M()), xe(pe, "data-id", `${d() ?? ""}-${I ?? ""}-${X() || ""}-${P() ?? ""}`), $o(pe, Qn(Ne)), xe(pe, "style", E()), Dt(pe, "valid", p(Z)), Dt(pe, "connectingto", p(A)), Dt(pe, "connectingfrom", p(N)), Dt(pe, "source", !p(k)), Dt(pe, "target", p(k)), Dt(pe, "connectablestart", p(T)), Dt(pe, "connectableend", p(T)), Dt(pe, "connectable", p(T)), Dt(pe, "connectionindicator", p(T) && (!p(D) || p(j)));
    },
    [
      () => an([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        O()
      ])
    ],
    Pe
  ), yt("mousedown", pe, Tt), yt("touchstart", pe, Tt), B(e, pe);
  var Ft = Ce({
    get id() {
      return X();
    },
    set id(Ne) {
      X(Ne), w();
    },
    get type() {
      return P();
    },
    set type(Ne) {
      P(Ne), w();
    },
    get position() {
      return M();
    },
    set position(Ne) {
      M(Ne), w();
    },
    get style() {
      return E();
    },
    set style(Ne) {
      E(Ne), w();
    },
    get isValidConnection() {
      return C();
    },
    set isValidConnection(Ne) {
      C(Ne), w();
    },
    get onconnect() {
      return R();
    },
    set onconnect(Ne) {
      R(Ne), w();
    },
    get ondisconnect() {
      return H();
    },
    set ondisconnect(Ne) {
      H(Ne), w();
    },
    get isConnectable() {
      return F();
    },
    set isConnectable(Ne) {
      F(Ne), w();
    },
    get class() {
      return O();
    },
    set class(Ne) {
      O(Ne), w();
    }
  });
  return r(), Ft;
}
me(
  Rr,
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
var Jm = /* @__PURE__ */ he("<!> <!>", 1);
function xa(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "targetPosition", "sourcePosition"]), _e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "targetPosition", 12, void 0), a = b(t, "sourcePosition", 12, void 0);
  Ge();
  var i = Jm(), s = Oe(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Top);
  Rr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  });
  var u = K(s), c = K(u);
  const d = /* @__PURE__ */ Pe(() => a() ?? Le.Bottom);
  return Rr(c, {
    type: "source",
    get position() {
      return p(d);
    }
  }), He(() => {
    var f;
    return Jn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), B(e, i), Ce({
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
me(
  xa,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Qm = /* @__PURE__ */ he(" <!>", 1);
function Gd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "sourcePosition"]), _e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "sourcePosition", 12, void 0);
  Ge(), Ye();
  var a = Qm(), i = Oe(a), s = K(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Bottom);
  return Rr(s, {
    type: "source",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Jn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), B(e, a), Ce({
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
me(Gd, { data: {}, sourcePosition: {} }, [], [], !0);
var ey = /* @__PURE__ */ he(" <!>", 1);
function Jd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, ["data", "targetPosition"]), _e(t, !1);
  let r = b(t, "data", 28, () => ({ label: "Node" })), o = b(t, "targetPosition", 12, void 0);
  Ge(), Ye();
  var a = ey(), i = Oe(a), s = K(i);
  const l = /* @__PURE__ */ Pe(() => o() ?? Le.Top);
  return Rr(s, {
    type: "target",
    get position() {
      return p(l);
    }
  }), He(() => {
    var u;
    return Jn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), B(e, a), Ce({
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
me(Jd, { data: {}, targetPosition: {} }, [], [], !0);
function Qd(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  Pt(n, []);
}
me(Qd, {}, [], [], !0);
function Ku(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function $a(e, { target: t, domNode: n }) {
  return Ku(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ku(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var ty = /* @__PURE__ */ he("<div><!></div>");
function ef(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(a, "$domNode", n), { domNode: a } = xt();
  Ge();
  var i = ty(), s = ee(i);
  Ut(s, t, "default", {}), J(i), qt(i, (l, u) => $a == null ? void 0 : $a(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), B(e, i), Ce(), r();
}
me(ef, {}, ["default"], [], !0);
function tf() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = xt();
  return (s) => {
    const l = te(e).get(s);
    if (!l) {
      console.warn("012", bi.error012(s));
      return;
    }
    (l.selectable || te(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && te(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var ny = /* @__PURE__ */ he('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function nf(e, t) {
  _e(t, !1);
  let n = b(t, "style", 12, void 0), r = b(t, "x", 12, void 0), o = b(t, "y", 12, void 0);
  const a = tf(), i = Yr("svelteflow__edge_id");
  return Ge(), ef(e, {
    children: (s, l) => {
      var u = ny(), c = ee(u);
      Ut(c, t, "default", {}), J(u), He(() => {
        xe(u, "style", "pointer-events: all;" + n()), Vt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), yt("keyup", u, () => {
      }), yt("click", u, () => {
        i && a(i);
      }), B(s, u);
    },
    $$slots: { default: !0 }
  }), Ce({
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
me(nf, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var ry = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__edge-interaction"></path>'), oy = /* @__PURE__ */ Me('<path fill="none"></path><!><!>', 1);
function Ci(e, t) {
  _e(t, !1);
  let n = b(t, "id", 12, void 0), r = b(t, "path", 12), o = b(t, "label", 12, void 0), a = b(t, "labelX", 12, void 0), i = b(t, "labelY", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "markerStart", 12, void 0), u = b(t, "markerEnd", 12, void 0), c = b(t, "style", 12, void 0), d = b(t, "interactionWidth", 12, 20), f = b(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ge();
  var m = oy(), $ = Oe(m), x = K($);
  {
    var S = (y) => {
      var k = ry();
      xe(k, "stroke-opacity", 0), xe(k, "stroke-width", v), He(() => xe(k, "d", r())), B(y, k);
    };
    ze(x, (y) => {
      v && y(S);
    });
  }
  var g = K(x);
  {
    var _ = (y) => {
      nf(y, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (k, T) => {
          Ye();
          var V = at();
          He(() => Jn(V, o())), B(k, V);
        },
        $$slots: { default: !0 }
      });
    };
    ze(g, (y) => {
      o() && y(_);
    });
  }
  return He(
    (y) => {
      xe($, "id", n()), xe($, "d", r()), Qr($, Qn(y)), xe($, "marker-start", l()), xe($, "marker-end", u()), xe($, "style", c());
    },
    [
      () => an(["svelte-flow__edge-path", f()])
    ],
    Pe
  ), B(e, m), Ce({
    get id() {
      return n();
    },
    set id(y) {
      n(y), w();
    },
    get path() {
      return r();
    },
    set path(y) {
      r(y), w();
    },
    get label() {
      return o();
    },
    set label(y) {
      o(y), w();
    },
    get labelX() {
      return a();
    },
    set labelX(y) {
      a(y), w();
    },
    get labelY() {
      return i();
    },
    set labelY(y) {
      i(y), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(y) {
      s(y), w();
    },
    get markerStart() {
      return l();
    },
    set markerStart(y) {
      l(y), w();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(y) {
      u(y), w();
    },
    get style() {
      return c();
    },
    set style(y) {
      c(y), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(y) {
      d(y), w();
    },
    get class() {
      return f();
    },
    set class(y) {
      f(y), w();
    }
  });
}
me(
  Ci,
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
  ]), _e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), m = b(t, "sourcePosition", 12), $ = b(t, "targetX", 12), x = b(t, "targetY", 12), S = b(t, "targetPosition", 12);
  return $e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe($()), oe(x()), oe(m()), oe(S())),
    () => {
      ((g) => (ie(r, g[0]), ie(o, g[1]), ie(a, g[2])))(Hd({
        sourceX: f(),
        sourceY: v(),
        targetX: $(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S()
      }));
    }
  ), Xt(), Ge(), Ci(e, {
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
  }), Ce({
    get label() {
      return i();
    },
    set label(g) {
      i(g), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), w();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), w();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(g) {
      m(g), w();
    },
    get targetX() {
      return $();
    },
    set targetX(g) {
      $(g), w();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), w();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(g) {
      S(g), w();
    }
  });
}
me(
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
  ]), _e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), m = b(t, "sourcePosition", 12), $ = b(t, "targetX", 12), x = b(t, "targetY", 12), S = b(t, "targetPosition", 12);
  return $e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe($()), oe(x()), oe(m()), oe(S())),
    () => {
      ((g) => (ie(r, g[0]), ie(o, g[1]), ie(a, g[2])))(ba({
        sourceX: f(),
        sourceY: v(),
        targetX: $(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S()
      }));
    }
  ), Xt(), Ge(), Ci(e, {
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
  }), Ce({
    get label() {
      return i();
    },
    set label(g) {
      i(g), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), w();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), w();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(g) {
      m(g), w();
    },
    get targetX() {
      return $();
    },
    set targetX(g) {
      $(g), w();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), w();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(g) {
      S(g), w();
    }
  });
}
me(
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
  ]), _e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), m = b(t, "targetX", 12), $ = b(t, "targetY", 12);
  return $e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe(m()), oe($())),
    () => {
      ((x) => (ie(r, x[0]), ie(o, x[1]), ie(a, x[2])))(Bs({
        sourceX: f(),
        sourceY: v(),
        targetX: m(),
        targetY: $()
      }));
    }
  ), Xt(), Ge(), Ci(e, {
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
  }), Ce({
    get label() {
      return i();
    },
    set label(x) {
      i(x), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), w();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), w();
    },
    get targetX() {
      return m();
    },
    set targetX(x) {
      m(x), w();
    },
    get targetY() {
      return $();
    },
    set targetY(x) {
      $(x), w();
    }
  });
}
me(
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
  ]), _e(t, !1);
  const r = fe(), o = fe(), a = fe();
  let i = b(t, "label", 12, void 0), s = b(t, "labelStyle", 12, void 0), l = b(t, "style", 12, void 0), u = b(t, "markerStart", 12, void 0), c = b(t, "markerEnd", 12, void 0), d = b(t, "interactionWidth", 12, void 0), f = b(t, "sourceX", 12), v = b(t, "sourceY", 12), m = b(t, "sourcePosition", 12), $ = b(t, "targetX", 12), x = b(t, "targetY", 12), S = b(t, "targetPosition", 12);
  return $e(
    () => (p(r), p(o), p(a), oe(f()), oe(v()), oe($()), oe(x()), oe(m()), oe(S())),
    () => {
      ((g) => (ie(r, g[0]), ie(o, g[1]), ie(a, g[2])))(ba({
        sourceX: f(),
        sourceY: v(),
        targetX: $(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: S(),
        borderRadius: 0
      }));
    }
  ), Xt(), Ge(), Ci(e, {
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
  }), Ce({
    get label() {
      return i();
    },
    set label(g) {
      i(g), w();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), w();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), w();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), w();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), w();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), w();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), w();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), w();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(g) {
      m(g), w();
    },
    get targetX() {
      return $();
    },
    set targetX(g) {
      $(g), w();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), w();
    },
    get targetPosition() {
      return S();
    },
    set targetPosition(g) {
      S(g), w();
    }
  });
}
me(
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
function iy(e, t) {
  const n = e.set, r = t.set, o = te(e), a = te(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function ay(e, t) {
  const n = e.set, r = t.set;
  let o = te(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const sy = (e, t, n) => {
  if (!n)
    return;
  const r = te(e), o = t.set, a = n.set;
  let i = n ? te(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, ly = (e, t, n, r = [0, 0], o = ha) => {
  const { subscribe: a, set: i, update: s } = Te([]);
  let l = e, u = {}, c = !0;
  const d = ($) => (Bd($, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = $, i(l), l), f = ($) => d($(l)), v = ($) => {
    u = $;
  }, m = ($) => {
    c = $.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: m
  };
}, uy = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = Te([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((m) => ({ ...l, ...m })) : f;
    Zd(t, n, v), s = v, a(s);
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
  default: xa,
  group: Qd
}, lf = {
  straight: of,
  smoothstep: rf,
  default: _a,
  step: af
}, cy = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? ha;
  Bd(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Zd(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const m = $i(s, {
      filter: ($) => !!(($.width || $.initialWidth) && ($.height || $.initialHeight))
    });
    v = wl(m, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Te(null),
    nodes: ly(e, s, l, d, f),
    nodeLookup: Cn(s),
    parentLookup: Cn(l),
    edgeLookup: Cn(c),
    visibleNodes: Cn([]),
    edges: uy(t, u, c),
    visibleEdges: Cn([]),
    connectionLookup: Cn(u),
    height: Te(500),
    width: Te(500),
    minZoom: Te(0.5),
    maxZoom: Te(2),
    nodeOrigin: Te(d),
    nodeDragThreshold: Te(1),
    nodeExtent: Te(f),
    translateExtent: Te(ha),
    autoPanOnNodeDrag: Te(!0),
    autoPanOnConnect: Te(!0),
    fitViewOnInit: Te(!1),
    fitViewOnInitDone: Te(!1),
    fitViewOptions: Te(void 0),
    panZoom: Te(null),
    snapGrid: Te(null),
    dragging: Te(!1),
    selectionRect: Te(null),
    selectionKeyPressed: Te(!1),
    multiselectionKeyPressed: Te(!1),
    deleteKeyPressed: Te(!1),
    panActivationKeyPressed: Te(!1),
    zoomActivationKeyPressed: Te(!1),
    selectionRectMode: Te(null),
    selectionMode: Te(ma.Partial),
    nodeTypes: Te(sf),
    edgeTypes: Te(lf),
    viewport: Te(v),
    connectionMode: Te(Fr.Strict),
    domNode: Te(null),
    connection: Cn(As),
    connectionLineType: Te(go.Bezier),
    connectionRadius: Te(20),
    isValidConnection: Te(() => !0),
    nodesDraggable: Te(!0),
    nodesConnectable: Te(!0),
    elementsSelectable: Te(!0),
    selectNodesOnDrag: Te(!0),
    markers: Cn([]),
    defaultMarkerColor: Te("#b1b1b7"),
    lib: Cn("svelte"),
    onlyRenderVisibleElements: Te(!1),
    onerror: Te(um),
    ondelete: Te(void 0),
    onedgecreate: Te(void 0),
    onconnect: Te(void 0),
    onconnectstart: Te(void 0),
    onconnectend: Te(void 0),
    onbeforedelete: Te(void 0),
    nodesInitialized: Te(!1),
    edgesInitialized: Te(!1),
    viewportInitialized: Te(!1),
    initialized: Cn(!1)
  };
};
function dy(e) {
  const t = Or([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && hm({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return Or([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = _m({
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
      zIndex: gm({
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
function fy(e) {
  return Or([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? Md(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const Fa = Symbol();
function uf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = cy({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(E) {
    s.nodeTypes.set({
      ...sf,
      ...E
    });
  }
  function u(E) {
    s.edgeTypes.set({
      ...lf,
      ...E
    });
  }
  function c(E) {
    const C = te(s.edges);
    s.edges.set(wm(E, C));
  }
  const d = (E, C = !1) => {
    var R;
    const H = te(s.nodeLookup);
    for (const [F, O] of E) {
      const I = (R = H.get(F)) == null ? void 0 : R.internals.userNode;
      I && (I.position = O.position, I.dragging = C);
    }
    s.nodes.update((F) => F);
  };
  function f(E) {
    var C, R, H;
    const F = te(s.nodeLookup), O = te(s.parentLookup), { changes: I, updatedInternals: ne } = Mm(E, F, te(s.parentLookup), te(s.domNode), te(s.nodeOrigin));
    if (ne) {
      if (Sm(F, O, { nodeOrigin: a, nodeExtent: i }), !te(s.fitViewOnInitDone) && te(s.fitViewOnInit)) {
        const Q = te(s.fitViewOptions), W = m({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of I) {
        const W = (C = F.get(Q.id)) == null ? void 0 : C.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const se = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((R = Q.dimensions) == null ? void 0 : R.width) ?? W.width, W.height = ((H = Q.dimensions) == null ? void 0 : H.height) ?? W.height), W.measured = se;
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
  function v(E) {
    const C = te(s.panZoom), R = te(s.domNode);
    if (!C || !R)
      return Promise.resolve(!1);
    const { width: H, height: F } = bl(R), O = Nu(te(s.nodeLookup), E);
    return Ru({
      nodes: O,
      width: H,
      height: F,
      minZoom: te(s.minZoom),
      maxZoom: te(s.maxZoom),
      panZoom: C
    }, E);
  }
  function m(E) {
    const C = te(s.panZoom);
    if (!C)
      return !1;
    const R = Nu(te(s.nodeLookup), E);
    return Ru({
      nodes: R,
      width: te(s.width),
      height: te(s.height),
      minZoom: te(s.minZoom),
      maxZoom: te(s.maxZoom),
      panZoom: C
    }, E), R.size > 0;
  }
  function $(E, C) {
    const R = te(s.panZoom);
    return R ? R.scaleBy(E, C) : Promise.resolve(!1);
  }
  function x(E) {
    return $(1.2, E);
  }
  function S(E) {
    return $(1 / 1.2, E);
  }
  function g(E) {
    const C = te(s.panZoom);
    C && (C.setScaleExtent([E, te(s.maxZoom)]), s.minZoom.set(E));
  }
  function _(E) {
    const C = te(s.panZoom);
    C && (C.setScaleExtent([te(s.minZoom), E]), s.maxZoom.set(E));
  }
  function y(E) {
    const C = te(s.panZoom);
    C && (C.setTranslateExtent(E), s.translateExtent.set(E));
  }
  function k(E) {
    let C = !1;
    return E.forEach((R) => {
      R.selected && (R.selected = !1, C = !0);
    }), C;
  }
  function T(E) {
    var C;
    (C = te(s.panZoom)) == null || C.setClickDistance(E);
  }
  function V(E) {
    k((E == null ? void 0 : E.nodes) || te(s.nodes)) && s.nodes.set(te(s.nodes)), k((E == null ? void 0 : E.edges) || te(s.edges)) && s.edges.set(te(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (E) => {
    var C;
    if (E) {
      const R = te(s.nodes), H = te(s.edges), F = R.filter((Q) => Q.selected), O = H.filter((Q) => Q.selected), { nodes: I, edges: ne } = await Dd({
        nodesToRemove: F,
        edgesToRemove: O,
        nodes: R,
        edges: H,
        onBeforeDelete: te(s.onbeforedelete)
      });
      (I.length || ne.length) && (s.nodes.update((Q) => Q.filter((W) => !I.some((se) => se.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ne.some((se) => se.id === W.id))), (C = te(s.ondelete)) == null || C({
        nodes: I,
        edges: ne
      }));
    }
  });
  function D(E) {
    const C = te(s.multiselectionKeyPressed);
    s.nodes.update((R) => R.map((H) => {
      const F = E.includes(H.id), O = C && H.selected || F;
      return H.selected = O, H;
    })), C || s.edges.update((R) => R.map((H) => (H.selected = !1, H)));
  }
  function N(E) {
    const C = te(s.multiselectionKeyPressed);
    s.edges.update((R) => R.map((H) => {
      const F = E.includes(H.id), O = C && H.selected || F;
      return H.selected = O, H;
    })), C || s.nodes.update((R) => R.map((H) => (H.selected = !1, H)));
  }
  function A(E) {
    var C;
    const R = (C = te(s.nodes)) == null ? void 0 : C.find((H) => H.id === E);
    if (!R) {
      console.warn("012", bi.error012(E));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), R.selected ? R.selected && te(s.multiselectionKeyPressed) && V({ nodes: [R], edges: [] }) : D([E]);
  }
  function j(E) {
    const C = te(s.viewport);
    return Dm({
      delta: E,
      panZoom: te(s.panZoom),
      transform: [C.x, C.y, C.zoom],
      translateExtent: te(s.translateExtent),
      width: te(s.width),
      height: te(s.height)
    });
  }
  const Z = Te(As), X = (E) => {
    Z.set({ ...E });
  };
  function P() {
    Z.set(As);
  }
  function M() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: dy(s),
    visibleNodes: fy(s),
    connection: Or([Z, s.viewport], ([E, C]) => E.inProgress ? {
      ...E,
      to: _i(E.to, [C.x, C.y, C.zoom])
    } : { ...E }),
    markers: Or([s.edges, s.defaultMarkerColor, s.flowId], ([E, C, R]) => Cm(E, { defaultColor: C, id: R })),
    initialized: (() => {
      let E = !1;
      const C = te(s.nodes).length, R = te(s.edges).length;
      return Or([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([H, F, O]) => E || (C === 0 ? E = O : R === 0 ? E = O && H : E = O && H && F, E));
    })(),
    // actions
    syncNodeStores: (E) => iy(s.nodes, E),
    syncEdgeStores: (E) => ay(s.edges, E),
    syncViewport: (E) => sy(s.panZoom, s.viewport, E),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: S,
    fitView: (E) => v(E),
    setMinZoom: g,
    setMaxZoom: _,
    setTranslateExtent: y,
    setPaneClickDistance: T,
    unselectNodesAndEdges: V,
    addSelectedNodes: D,
    addSelectedEdges: N,
    handleNodeSelection: A,
    panBy: j,
    updateConnection: X,
    cancelConnection: P,
    reset: M
  };
}
function xt() {
  const e = Yr(Fa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function vy({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = uf({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return xo(Fa, {
    getStore: () => s
  }), s;
}
function qu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = Um({
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
var py = /* @__PURE__ */ he('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const gy = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function cf(e, t) {
  _e(t, !1), bt(e, gy);
  const [n, r] = Ct(), o = () => le(R, "$panActivationKeyPressed", n), a = () => le(X, "$minZoom", n), i = () => le(P, "$maxZoom", n), s = () => le(H, "$zoomActivationKeyPressed", n), l = () => le(Z, "$selectionRect", n), u = () => le(E, "$translateExtent", n), c = () => le(C, "$lib", n), d = fe(), f = fe(), v = fe();
  let m = b(t, "initialViewport", 12, void 0), $ = b(t, "onMoveStart", 12, void 0), x = b(t, "onMove", 12, void 0), S = b(t, "onMoveEnd", 12, void 0), g = b(t, "panOnScrollMode", 12), _ = b(t, "preventScrolling", 12), y = b(t, "zoomOnScroll", 12), k = b(t, "zoomOnDoubleClick", 12), T = b(t, "zoomOnPinch", 12), V = b(t, "panOnDrag", 12), D = b(t, "panOnScroll", 12), N = b(t, "paneClickDistance", 12);
  const {
    viewport: A,
    panZoom: j,
    selectionRect: Z,
    minZoom: X,
    maxZoom: P,
    dragging: M,
    translateExtent: E,
    lib: C,
    panActivationKeyPressed: R,
    zoomActivationKeyPressed: H,
    viewportInitialized: F
  } = xt(), O = (W) => A.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  er(() => {
    ua(F, !0);
  }), $e(() => oe(m()), () => {
    ie(d, m() || { x: 0, y: 0, zoom: 1 });
  }), $e(
    () => (o(), oe(V())),
    () => {
      ie(f, o() || V());
    }
  ), $e(
    () => (o(), oe(D())),
    () => {
      ie(v, o() || D());
    }
  ), Xt(), Ge();
  var I = py(), ne = ee(I);
  Ut(ne, t, "default", {}), J(I), qt(I, (W, se) => qu == null ? void 0 : qu(W, se), () => ({
    viewport: A,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: p(d),
    dragging: M,
    panZoom: j,
    onPanZoomStart: $(),
    onPanZoom: x(),
    onPanZoomEnd: S(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: T(),
    panOnScroll: p(v),
    panOnDrag: p(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || Mr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: N(),
    onTransformChange: O
  })), B(e, I);
  var Q = Ce({
    get initialViewport() {
      return m();
    },
    set initialViewport(W) {
      m(W), w();
    },
    get onMoveStart() {
      return $();
    },
    set onMoveStart(W) {
      $(W), w();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), w();
    },
    get onMoveEnd() {
      return S();
    },
    set onMoveEnd(W) {
      S(W), w();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(W) {
      g(W), w();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(W) {
      _(W), w();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(W) {
      y(W), w();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), w();
    },
    get zoomOnPinch() {
      return T();
    },
    set zoomOnPinch(W) {
      T(W), w();
    },
    get panOnDrag() {
      return V();
    },
    set panOnDrag(W) {
      V(W), w();
    },
    get panOnScroll() {
      return D();
    },
    set panOnScroll(W) {
      D(W), w();
    },
    get paneClickDistance() {
      return N();
    },
    set paneClickDistance(W) {
      N(W), w();
    }
  });
  return r(), Q;
}
me(
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
function Uu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Gu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var hy = /* @__PURE__ */ he('<div class="svelte-flow__pane svelte-1esy7hx"><!></div>');
const my = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function df(e, t) {
  _e(t, !1), bt(e, my);
  const [n, r] = Ct(), o = () => le(P, "$panActivationKeyPressed", n), a = () => le(Z, "$selectionKeyPressed", n), i = () => le(A, "$selectionRect", n), s = () => le(N, "$elementsSelectable", n), l = () => le(j, "$selectionRectMode", n), u = () => le(T, "$edges", n), c = () => le(k, "$nodeLookup", n), d = () => le(V, "$viewport", n), f = () => le(X, "$selectionMode", n), v = () => le(D, "$dragging", n), m = fe(), $ = fe(), x = fe();
  let S = b(t, "panOnDrag", 12, void 0), g = b(t, "selectionOnDrag", 12, void 0);
  const _ = Aa(), {
    nodes: y,
    nodeLookup: k,
    edges: T,
    viewport: V,
    dragging: D,
    elementsSelectable: N,
    selectionRect: A,
    selectionRectMode: j,
    selectionKeyPressed: Z,
    selectionMode: X,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: M
  } = xt();
  let E = fe(), C = null, R = [], H = !1;
  function F(ae) {
    if (H) {
      H = !1;
      return;
    }
    _("paneclick", { event: ae }), M(), j.set(null);
  }
  function O(ae) {
    var we, Ke;
    if (C = p(E).getBoundingClientRect(), !N || !p($) || ae.button !== 0 || ae.target !== p(E) || !C)
      return;
    (Ke = (we = ae.target) == null ? void 0 : we.setPointerCapture) == null || Ke.call(we, ae.pointerId);
    const { x: nt, y: Qe } = fr(ae, C);
    M(), A.set({
      width: 0,
      height: 0,
      startX: nt,
      startY: Qe,
      x: nt,
      y: Qe
    });
  }
  function I(ae) {
    if (!p($) || !C || !i())
      return;
    H = !0;
    const we = fr(ae, C), Ke = i().startX ?? 0, nt = i().startY ?? 0, Qe = {
      ...i(),
      x: we.x < Ke ? we.x : Ke,
      y: we.y < nt ? we.y : nt,
      width: Math.abs(we.x - Ke),
      height: Math.abs(we.y - nt)
    }, et = R.map((De) => De.id), U = Hs(R, u()).map((De) => De.id);
    R = Md(
      c(),
      Qe,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === ma.Partial,
      !0
    );
    const ye = Hs(R, u()).map((De) => De.id), ke = R.map((De) => De.id);
    (et.length !== ke.length || ke.some((De) => !et.includes(De))) && y.update((De) => De.map(Gu(ke))), (U.length !== ye.length || ye.some((De) => !U.includes(De))) && T.update((De) => De.map(Gu(ye))), j.set("user"), A.set(Qe);
  }
  function ne(ae) {
    var we, Ke;
    ae.button === 0 && ((Ke = (we = ae.target) == null ? void 0 : we.releasePointerCapture) == null || Ke.call(we, ae.pointerId), !p($) && l() === "user" && ae.target === p(E) && (F == null || F(ae)), A.set(null), R.length > 0 && ua(j, "nodes"), a() && (H = !1));
  }
  const Q = (ae) => {
    var we;
    if (Array.isArray(p(m)) && (we = p(m)) != null && we.includes(2)) {
      ae.preventDefault();
      return;
    }
    _("panecontextmenu", { event: ae });
  };
  $e(
    () => (o(), oe(S())),
    () => {
      ie(m, o() || S());
    }
  ), $e(
    () => (a(), i(), oe(g()), p(m)),
    () => {
      ie($, a() || i() || g() && p(m) !== !0);
    }
  ), $e(
    () => (s(), p($), l()),
    () => {
      ie(x, s() && (p($) || l() === "user"));
    }
  ), Xt(), Ge();
  var W = hy(), se = /* @__PURE__ */ Fe(() => p(x) ? void 0 : Uu(F, p(E))), ge = /* @__PURE__ */ Fe(() => Uu(Q, p(E))), ve = ee(W);
  Ut(ve, t, "default", {}), J(W), gr(W, (ae) => ie(E, ae), () => p(E)), He(
    (ae) => {
      Dt(W, "draggable", ae), Dt(W, "dragging", v()), Dt(W, "selection", p($));
    },
    [
      () => S() === !0 || Array.isArray(S()) && S().includes(0)
    ],
    Pe
  ), yt("click", W, function(...ae) {
    var we;
    (we = p(se)) == null || we.apply(this, ae);
  }), yt("pointerdown", W, function(...ae) {
    var we;
    (we = p(x) ? O : void 0) == null || we.apply(this, ae);
  }), yt("pointermove", W, function(...ae) {
    var we;
    (we = p(x) ? I : void 0) == null || we.apply(this, ae);
  }), yt("pointerup", W, function(...ae) {
    var we;
    (we = p(x) ? ne : void 0) == null || we.apply(this, ae);
  }), yt("contextmenu", W, function(...ae) {
    var we;
    (we = p(ge)) == null || we.apply(this, ae);
  }), B(e, W);
  var ue = Ce({
    get panOnDrag() {
      return S();
    },
    set panOnDrag(ae) {
      S(ae), w();
    },
    get selectionOnDrag() {
      return g();
    },
    set selectionOnDrag(ae) {
      g(ae), w();
    }
  });
  return r(), ue;
}
me(df, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var yy = /* @__PURE__ */ he('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const wy = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function ff(e, t) {
  _e(t, !1), bt(e, wy);
  const [n, r] = Ct(), o = () => le(a, "$viewport", n), { viewport: a } = xt();
  Ge();
  var i = yy(), s = ee(i);
  Ut(s, t, "default", {}), J(i), He(() => xe(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), B(e, i), Ce(), r();
}
me(ff, {}, ["default"], [], !0);
function Ca(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = Rm({
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
function by({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var xy = /* @__PURE__ */ he("<div><!></div>");
function vf(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(ge, "$nodeTypes", n), a = () => le(Ke, "$elementsSelectable", n), i = () => le(nt, "$nodesDraggable", n), s = () => le(ye, "$connectableStore", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0);
  let f = b(t, "node", 13), v = b(t, "id", 13), m = b(t, "data", 29, () => ({})), $ = b(t, "selected", 13, !1), x = b(t, "draggable", 13, void 0), S = b(t, "selectable", 13, void 0), g = b(t, "connectable", 13, !0), _ = b(t, "deletable", 13, !0), y = b(t, "hidden", 13, !1), k = b(t, "dragging", 13, !1), T = b(t, "resizeObserver", 13, null), V = b(t, "style", 13, void 0), D = b(t, "type", 13, "default"), N = b(t, "isParent", 13, !1), A = b(t, "positionX", 13), j = b(t, "positionY", 13), Z = b(t, "sourcePosition", 13, void 0), X = b(t, "targetPosition", 13, void 0), P = b(t, "zIndex", 13), M = b(t, "measuredWidth", 13, void 0), E = b(t, "measuredHeight", 13, void 0), C = b(t, "initialWidth", 13, void 0), R = b(t, "initialHeight", 13, void 0), H = b(t, "width", 13, void 0), F = b(t, "height", 13, void 0), O = b(t, "dragHandle", 13, void 0), I = b(t, "initialized", 13, !1), ne = b(t, "parentId", 13, void 0), Q = b(t, "nodeClickDistance", 13, void 0), W = b(t, "class", 13, "");
  const se = xt(), {
    nodeTypes: ge,
    nodeDragThreshold: ve,
    selectNodesOnDrag: ue,
    handleNodeSelection: ae,
    updateNodeInternals: we,
    elementsSelectable: Ke,
    nodesDraggable: nt
  } = se;
  let Qe = fe(void 0, !0), et = fe(null, !0);
  const U = Aa(), ye = Te(g());
  let ke = fe(void 0, !0), De = fe(void 0, !0), st = fe(void 0, !0);
  xo("svelteflow__node_id", v()), xo("svelteflow__node_connectable", ye), ul(() => {
    var ce;
    p(et) && ((ce = T()) == null || ce.unobserve(p(et)));
  });
  function Ie(ce) {
    S() && (!te(ue) || !x() || te(ve) > 0) && ae(v()), U("nodeclick", { node: f().internals.userNode, event: ce });
  }
  $e(() => oe(D()), () => {
    ie(l, D() || "default");
  }), $e(() => (o(), p(l)), () => {
    ie(u, !!o()[p(l)]);
  }), $e(
    () => (o(), p(l), xa),
    () => {
      ie(c, o()[p(l)] || xa);
    }
  ), $e(
    () => (p(u), oe(D())),
    () => {
      p(u) || console.warn("003", bi.error003(D()));
    }
  ), $e(
    () => (oe(H()), oe(F()), oe(C()), oe(R()), oe(M()), oe(E())),
    () => {
      ie(d, by({
        width: H(),
        height: F(),
        initialWidth: C(),
        initialHeight: R(),
        measuredWidth: M(),
        measuredHeight: E()
      }));
    }
  ), $e(() => oe(g()), () => {
    ye.set(!!g());
  }), $e(
    () => (p(ke), p(l), p(De), oe(Z()), p(st), oe(X()), oe(v()), p(Qe)),
    () => {
      (p(ke) && p(l) !== p(ke) || p(De) && Z() !== p(De) || p(st) && X() !== p(st)) && requestAnimationFrame(() => we(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: p(Qe),
            force: !0
          }
        ]
      ]))), ie(ke, p(l)), ie(De, Z()), ie(st, X());
    }
  ), $e(
    () => (oe(T()), p(Qe), p(et), oe(I())),
    () => {
      T() && (p(Qe) !== p(et) || !I()) && (p(et) && T().unobserve(p(et)), p(Qe) && T().observe(p(Qe)), ie(et, p(Qe)));
    }
  ), Xt(), Ge(!0);
  var tt = wt(), it = Oe(tt);
  {
    var vt = (ce) => {
      var Be = xy(), pe = ee(Be);
      const sn = /* @__PURE__ */ Pe(() => $() ?? !1), Ft = /* @__PURE__ */ Pe(() => S() ?? a() ?? !0), Ne = /* @__PURE__ */ Pe(() => _() ?? !0), kt = /* @__PURE__ */ Pe(() => x() ?? i() ?? !0);
      Kc(pe, () => p(c), (Ve, Xe) => {
        Xe(Ve, {
          get data() {
            return m();
          },
          get id() {
            return v();
          },
          get selected() {
            return p(sn);
          },
          get selectable() {
            return p(Ft);
          },
          get deletable() {
            return p(Ne);
          },
          get sourcePosition() {
            return Z();
          },
          get targetPosition() {
            return X();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return p(kt);
          },
          get dragHandle() {
            return O();
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
            return A();
          },
          get positionAbsoluteY() {
            return j();
          },
          get width() {
            return H();
          },
          get height() {
            return F();
          }
        });
      }), J(Be), qt(Be, (Ve, Xe) => Ca == null ? void 0 : Ca(Ve, Xe), () => ({
        nodeId: v(),
        isSelectable: S(),
        disabled: !1,
        handleSelector: O(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: ae,
        onDrag: (Ve, Xe, ut, Zt) => {
          U("nodedrag", { event: Ve, targetNode: ut, nodes: Zt });
        },
        onDragStart: (Ve, Xe, ut, Zt) => {
          U("nodedragstart", { event: Ve, targetNode: ut, nodes: Zt });
        },
        onDragStop: (Ve, Xe, ut, Zt) => {
          U("nodedragstop", { event: Ve, targetNode: ut, nodes: Zt });
        },
        store: se
      })), gr(Be, (Ve) => ie(Qe, Ve), () => p(Qe)), mn(() => yt("click", Be, Ie)), mn(() => yt("mouseenter", Be, (Ve) => U("nodemouseenter", { node: f(), event: Ve }))), mn(() => yt("mouseleave", Be, (Ve) => U("nodemouseleave", { node: f(), event: Ve }))), mn(() => yt("mousemove", Be, (Ve) => U("nodemousemove", { node: f(), event: Ve }))), mn(() => yt("contextmenu", Be, (Ve) => U("nodecontextmenu", { node: f(), event: Ve }))), He(
        (Ve) => {
          xe(Be, "data-id", v()), $o(Be, Qn(Ve)), xe(Be, "style", `${V() ?? ""};${p(d).width ?? ""}${p(d).height ?? ""}`), Dt(Be, "dragging", k()), Dt(Be, "selected", $()), Dt(Be, "draggable", x()), Dt(Be, "connectable", g()), Dt(Be, "selectable", S()), Dt(Be, "nopan", x()), Dt(Be, "parent", N()), Vt(Be, "z-index", P()), Vt(Be, "transform", `translate(${A() ?? ""}px, ${j() ?? ""}px)`), Vt(Be, "visibility", I() ? "visible" : "hidden");
        },
        [
          () => an([
            "svelte-flow__node",
            `svelte-flow__node-${p(l)}`,
            W()
          ])
        ],
        Pe
      ), B(ce, Be);
    };
    ze(it, (ce) => {
      y() || ce(vt);
    });
  }
  B(e, tt);
  var Tt = Ce({
    get node() {
      return f();
    },
    set node(ce) {
      f(ce), w();
    },
    get id() {
      return v();
    },
    set id(ce) {
      v(ce), w();
    },
    get data() {
      return m();
    },
    set data(ce) {
      m(ce), w();
    },
    get selected() {
      return $();
    },
    set selected(ce) {
      $(ce), w();
    },
    get draggable() {
      return x();
    },
    set draggable(ce) {
      x(ce), w();
    },
    get selectable() {
      return S();
    },
    set selectable(ce) {
      S(ce), w();
    },
    get connectable() {
      return g();
    },
    set connectable(ce) {
      g(ce), w();
    },
    get deletable() {
      return _();
    },
    set deletable(ce) {
      _(ce), w();
    },
    get hidden() {
      return y();
    },
    set hidden(ce) {
      y(ce), w();
    },
    get dragging() {
      return k();
    },
    set dragging(ce) {
      k(ce), w();
    },
    get resizeObserver() {
      return T();
    },
    set resizeObserver(ce) {
      T(ce), w();
    },
    get style() {
      return V();
    },
    set style(ce) {
      V(ce), w();
    },
    get type() {
      return D();
    },
    set type(ce) {
      D(ce), w();
    },
    get isParent() {
      return N();
    },
    set isParent(ce) {
      N(ce), w();
    },
    get positionX() {
      return A();
    },
    set positionX(ce) {
      A(ce), w();
    },
    get positionY() {
      return j();
    },
    set positionY(ce) {
      j(ce), w();
    },
    get sourcePosition() {
      return Z();
    },
    set sourcePosition(ce) {
      Z(ce), w();
    },
    get targetPosition() {
      return X();
    },
    set targetPosition(ce) {
      X(ce), w();
    },
    get zIndex() {
      return P();
    },
    set zIndex(ce) {
      P(ce), w();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ce) {
      M(ce), w();
    },
    get measuredHeight() {
      return E();
    },
    set measuredHeight(ce) {
      E(ce), w();
    },
    get initialWidth() {
      return C();
    },
    set initialWidth(ce) {
      C(ce), w();
    },
    get initialHeight() {
      return R();
    },
    set initialHeight(ce) {
      R(ce), w();
    },
    get width() {
      return H();
    },
    set width(ce) {
      H(ce), w();
    },
    get height() {
      return F();
    },
    set height(ce) {
      F(ce), w();
    },
    get dragHandle() {
      return O();
    },
    set dragHandle(ce) {
      O(ce), w();
    },
    get initialized() {
      return I();
    },
    set initialized(ce) {
      I(ce), w();
    },
    get parentId() {
      return ne();
    },
    set parentId(ce) {
      ne(ce), w();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(ce) {
      Q(ce), w();
    },
    get class() {
      return W();
    },
    set class(ce) {
      W(ce), w();
    }
  });
  return r(), Tt;
}
me(
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
var $y = /* @__PURE__ */ he('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const _y = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function pf(e, t) {
  _e(t, !1), bt(e, _y);
  const [n, r] = Ct(), o = () => le(c, "$visibleNodes", n), a = () => le(d, "$nodesDraggable", n), i = () => le(v, "$elementsSelectable", n), s = () => le(f, "$nodesConnectable", n), l = () => le($, "$parentLookup", n);
  let u = b(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: m,
    parentLookup: $
  } = xt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const y = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const T = k.target.getAttribute("data-id");
      y.set(T, { id: T, nodeElement: k.target, force: !0 });
    }), m(y);
  });
  ul(() => {
    x == null || x.disconnect();
  }), Ge();
  var S = $y();
  bn(S, 5, o, (_) => _.id, (_, y) => {
    const k = /* @__PURE__ */ Pe(() => !!p(y).selected), T = /* @__PURE__ */ Pe(() => !!p(y).hidden), V = /* @__PURE__ */ Pe(() => !!(p(y).draggable || a() && typeof p(y).draggable > "u")), D = /* @__PURE__ */ Pe(() => !!(p(y).selectable || i() && typeof p(y).selectable > "u")), N = /* @__PURE__ */ Pe(() => !!(p(y).connectable || s() && typeof p(y).connectable > "u")), A = /* @__PURE__ */ Pe(() => p(y).deletable ?? !0), j = /* @__PURE__ */ Pe(() => l().has(p(y).id)), Z = /* @__PURE__ */ Pe(() => p(y).type ?? "default"), X = /* @__PURE__ */ Pe(() => p(y).internals.z ?? 0), P = /* @__PURE__ */ Pe(() => zd(p(y)));
    vf(_, {
      get node() {
        return p(y);
      },
      get id() {
        return p(y).id;
      },
      get data() {
        return p(y).data;
      },
      get selected() {
        return p(k);
      },
      get hidden() {
        return p(T);
      },
      get draggable() {
        return p(V);
      },
      get selectable() {
        return p(D);
      },
      get connectable() {
        return p(N);
      },
      get deletable() {
        return p(A);
      },
      get positionX() {
        return p(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return p(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return p(j);
      },
      get style() {
        return p(y).style;
      },
      get class() {
        return p(y).class;
      },
      get type() {
        return p(Z);
      },
      get sourcePosition() {
        return p(y).sourcePosition;
      },
      get targetPosition() {
        return p(y).targetPosition;
      },
      get dragging() {
        return p(y).dragging;
      },
      get zIndex() {
        return p(X);
      },
      get dragHandle() {
        return p(y).dragHandle;
      },
      get initialized() {
        return p(P);
      },
      get width() {
        return p(y).width;
      },
      get height() {
        return p(y).height;
      },
      get initialWidth() {
        return p(y).initialWidth;
      },
      get initialHeight() {
        return p(y).initialHeight;
      },
      get measuredWidth() {
        return p(y).measured.width;
      },
      get measuredHeight() {
        return p(y).measured.height;
      },
      get parentId() {
        return p(y).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          ot.call(this, t, M);
        },
        nodemouseenter(M) {
          ot.call(this, t, M);
        },
        nodemousemove(M) {
          ot.call(this, t, M);
        },
        nodemouseleave(M) {
          ot.call(this, t, M);
        },
        nodedrag(M) {
          ot.call(this, t, M);
        },
        nodedragstart(M) {
          ot.call(this, t, M);
        },
        nodedragstop(M) {
          ot.call(this, t, M);
        },
        nodecontextmenu(M) {
          ot.call(this, t, M);
        }
      }
    });
  }), J(S), B(e, S);
  var g = Ce({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), w();
    }
  });
  return r(), g;
}
me(pf, { nodeClickDistance: {} }, [], [], !0);
var Cy = /* @__PURE__ */ Me('<svg><g role="img"><!></g></svg>');
function gf(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(W, "$edgeTypes", n), a = () => le(se, "$flowId", n), i = () => le(ge, "$elementsSelectable", n), s = () => le(Q, "$edgeLookup", n), l = fe(void 0, !0), u = fe(void 0, !0), c = fe(void 0, !0), d = fe(void 0, !0), f = fe(void 0, !0);
  let v = b(t, "id", 13), m = b(t, "type", 13, "default"), $ = b(t, "source", 13, ""), x = b(t, "target", 13, ""), S = b(t, "data", 29, () => ({})), g = b(t, "style", 13, void 0), _ = b(t, "zIndex", 13, void 0), y = b(t, "animated", 13, !1), k = b(t, "selected", 13, !1), T = b(t, "selectable", 13, void 0), V = b(t, "deletable", 13, void 0), D = b(t, "hidden", 13, !1), N = b(t, "label", 13, void 0), A = b(t, "labelStyle", 13, void 0), j = b(t, "markerStart", 13, void 0), Z = b(t, "markerEnd", 13, void 0), X = b(t, "sourceHandle", 13, void 0), P = b(t, "targetHandle", 13, void 0), M = b(t, "sourceX", 13), E = b(t, "sourceY", 13), C = b(t, "targetX", 13), R = b(t, "targetY", 13), H = b(t, "sourcePosition", 13), F = b(t, "targetPosition", 13), O = b(t, "ariaLabel", 13, void 0), I = b(t, "interactionWidth", 13, void 0), ne = b(t, "class", 13, "");
  xo("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: se,
    elementsSelectable: ge
  } = xt(), ve = Aa(), ue = tf();
  function ae(U) {
    const ye = s().get(v());
    ye && (ue(v()), ve("edgeclick", { event: U, edge: ye }));
  }
  function we(U, ye) {
    const ke = s().get(v());
    ke && ve(ye, { event: U, edge: ke });
  }
  $e(() => oe(m()), () => {
    ie(l, m() || "default");
  }), $e(
    () => (o(), p(l), _a),
    () => {
      ie(u, o()[p(l)] || _a);
    }
  ), $e(
    () => (oe(j()), a()),
    () => {
      ie(c, j() ? `url('#${js(j(), a())}')` : void 0);
    }
  ), $e(
    () => (oe(Z()), a()),
    () => {
      ie(d, Z() ? `url('#${js(Z(), a())}')` : void 0);
    }
  ), $e(
    () => (oe(T()), i()),
    () => {
      ie(f, T() ?? i());
    }
  ), Xt(), Ge(!0);
  var Ke = wt(), nt = Oe(Ke);
  {
    var Qe = (U) => {
      var ye = Cy(), ke = ee(ye), De = ee(ke);
      const st = /* @__PURE__ */ Pe(() => V() ?? !0);
      Kc(De, () => p(u), (Ie, tt) => {
        tt(Ie, {
          get id() {
            return v();
          },
          get source() {
            return $();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return E();
          },
          get targetX() {
            return C();
          },
          get targetY() {
            return R();
          },
          get sourcePosition() {
            return H();
          },
          get targetPosition() {
            return F();
          },
          get animated() {
            return y();
          },
          get selected() {
            return k();
          },
          get label() {
            return N();
          },
          get labelStyle() {
            return A();
          },
          get data() {
            return S();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return I();
          },
          get selectable() {
            return p(f);
          },
          get deletable() {
            return p(st);
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
      }), J(ke), J(ye), He(
        (Ie) => {
          Vt(ye, "z-index", _()), Qr(ke, Qn(Ie)), xe(ke, "data-id", v()), xe(ke, "aria-label", O() === null ? void 0 : O() ? O() : `Edge from ${$()} to ${x()}`), Dt(ke, "animated", y()), Dt(ke, "selected", k()), Dt(ke, "selectable", p(f));
        },
        [
          () => an(["svelte-flow__edge", ne()])
        ],
        Pe
      ), yt("click", ke, ae), yt("contextmenu", ke, (Ie) => {
        we(Ie, "edgecontextmenu");
      }), yt("mouseenter", ke, (Ie) => {
        we(Ie, "edgemouseenter");
      }), yt("mouseleave", ke, (Ie) => {
        we(Ie, "edgemouseleave");
      }), B(U, ye);
    };
    ze(nt, (U) => {
      D() || U(Qe);
    });
  }
  B(e, Ke);
  var et = Ce({
    get id() {
      return v();
    },
    set id(U) {
      v(U), w();
    },
    get type() {
      return m();
    },
    set type(U) {
      m(U), w();
    },
    get source() {
      return $();
    },
    set source(U) {
      $(U), w();
    },
    get target() {
      return x();
    },
    set target(U) {
      x(U), w();
    },
    get data() {
      return S();
    },
    set data(U) {
      S(U), w();
    },
    get style() {
      return g();
    },
    set style(U) {
      g(U), w();
    },
    get zIndex() {
      return _();
    },
    set zIndex(U) {
      _(U), w();
    },
    get animated() {
      return y();
    },
    set animated(U) {
      y(U), w();
    },
    get selected() {
      return k();
    },
    set selected(U) {
      k(U), w();
    },
    get selectable() {
      return T();
    },
    set selectable(U) {
      T(U), w();
    },
    get deletable() {
      return V();
    },
    set deletable(U) {
      V(U), w();
    },
    get hidden() {
      return D();
    },
    set hidden(U) {
      D(U), w();
    },
    get label() {
      return N();
    },
    set label(U) {
      N(U), w();
    },
    get labelStyle() {
      return A();
    },
    set labelStyle(U) {
      A(U), w();
    },
    get markerStart() {
      return j();
    },
    set markerStart(U) {
      j(U), w();
    },
    get markerEnd() {
      return Z();
    },
    set markerEnd(U) {
      Z(U), w();
    },
    get sourceHandle() {
      return X();
    },
    set sourceHandle(U) {
      X(U), w();
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
      return E();
    },
    set sourceY(U) {
      E(U), w();
    },
    get targetX() {
      return C();
    },
    set targetX(U) {
      C(U), w();
    },
    get targetY() {
      return R();
    },
    set targetY(U) {
      R(U), w();
    },
    get sourcePosition() {
      return H();
    },
    set sourcePosition(U) {
      H(U), w();
    },
    get targetPosition() {
      return F();
    },
    set targetPosition(U) {
      F(U), w();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(U) {
      O(U), w();
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
  return r(), et;
}
me(
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
  _e(t, !1);
  let n = b(t, "onMount", 12, void 0), r = b(t, "onDestroy", 12, void 0);
  return er(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ge(), Ce({
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
me(hf, { onMount: {}, onDestroy: {} }, [], [], !0);
var ky = /* @__PURE__ */ Me("<defs></defs>");
function mf(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(a, "$markers", n), { markers: a } = xt();
  Ge();
  var i = ky();
  bn(i, 5, o, (s) => s.id, (s, l) => {
    yf(s, Bt(() => p(l)));
  }), J(i), B(e, i), Ce(), r();
}
me(mf, {}, [], [], !0);
var Ey = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Sy = /* @__PURE__ */ Me('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Py = /* @__PURE__ */ Me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function yf(e, t) {
  _e(t, !1);
  let n = b(t, "id", 12), r = b(t, "type", 12), o = b(t, "width", 12, 12.5), a = b(t, "height", 12, 12.5), i = b(t, "markerUnits", 12, "strokeWidth"), s = b(t, "orient", 12, "auto-start-reverse"), l = b(t, "color", 12, void 0), u = b(t, "strokeWidth", 12, void 0);
  Ge();
  var c = Py(), d = ee(c);
  {
    var f = (m) => {
      var $ = Ey();
      He(() => {
        xe($, "stroke", l()), xe($, "stroke-width", u());
      }), B(m, $);
    }, v = (m) => {
      var $ = wt(), x = Oe($);
      {
        var S = (g) => {
          var _ = Sy();
          He(() => {
            xe(_, "stroke", l()), xe(_, "stroke-width", u()), xe(_, "fill", l());
          }), B(g, _);
        };
        ze(
          x,
          (g) => {
            r() === ci.ArrowClosed && g(S);
          },
          !0
        );
      }
      B(m, $);
    };
    ze(d, (m) => {
      r() === ci.Arrow ? m(f) : m(v, !1);
    });
  }
  return J(c), He(() => {
    xe(c, "id", n()), xe(c, "markerWidth", `${o()}`), xe(c, "markerHeight", `${a()}`), xe(c, "markerUnits", i()), xe(c, "orient", s());
  }), B(e, c), Ce({
    get id() {
      return n();
    },
    set id(m) {
      n(m), w();
    },
    get type() {
      return r();
    },
    set type(m) {
      r(m), w();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), w();
    },
    get height() {
      return a();
    },
    set height(m) {
      a(m), w();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(m) {
      i(m), w();
    },
    get orient() {
      return s();
    },
    set orient(m) {
      s(m), w();
    },
    get color() {
      return l();
    },
    set color(m) {
      l(m), w();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(m) {
      u(m), w();
    }
  });
}
me(
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
var Ty = /* @__PURE__ */ he('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function wf(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(s, "$visibleEdges", n), a = () => le(c, "$elementsSelectable", n);
  let i = b(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = xt();
  er(() => {
    i() && u(i());
  }), Ge();
  var d = Ty(), f = ee(d), v = ee(f);
  mf(v, {}), J(f);
  var m = K(f, 2);
  bn(m, 1, o, (g) => g.id, (g, _) => {
    const y = /* @__PURE__ */ Pe(() => p(_).selectable ?? a()), k = /* @__PURE__ */ Pe(() => p(_).type || "default");
    gf(g, {
      get id() {
        return p(_).id;
      },
      get source() {
        return p(_).source;
      },
      get target() {
        return p(_).target;
      },
      get data() {
        return p(_).data;
      },
      get style() {
        return p(_).style;
      },
      get animated() {
        return p(_).animated;
      },
      get selected() {
        return p(_).selected;
      },
      get selectable() {
        return p(y);
      },
      get deletable() {
        return p(_).deletable;
      },
      get hidden() {
        return p(_).hidden;
      },
      get label() {
        return p(_).label;
      },
      get labelStyle() {
        return p(_).labelStyle;
      },
      get markerStart() {
        return p(_).markerStart;
      },
      get markerEnd() {
        return p(_).markerEnd;
      },
      get sourceHandle() {
        return p(_).sourceHandle;
      },
      get targetHandle() {
        return p(_).targetHandle;
      },
      get sourceX() {
        return p(_).sourceX;
      },
      get sourceY() {
        return p(_).sourceY;
      },
      get targetX() {
        return p(_).targetX;
      },
      get targetY() {
        return p(_).targetY;
      },
      get sourcePosition() {
        return p(_).sourcePosition;
      },
      get targetPosition() {
        return p(_).targetPosition;
      },
      get ariaLabel() {
        return p(_).ariaLabel;
      },
      get interactionWidth() {
        return p(_).interactionWidth;
      },
      get class() {
        return p(_).class;
      },
      get type() {
        return p(k);
      },
      get zIndex() {
        return p(_).zIndex;
      },
      $$events: {
        edgeclick(T) {
          ot.call(this, t, T);
        },
        edgecontextmenu(T) {
          ot.call(this, t, T);
        },
        edgemouseenter(T) {
          ot.call(this, t, T);
        },
        edgemouseleave(T) {
          ot.call(this, t, T);
        }
      }
    });
  });
  var $ = K(m, 2);
  {
    var x = (g) => {
      hf(g, {
        onMount: () => {
          ua(l, !0);
        },
        onDestroy: () => {
          ua(l, !1);
        }
      });
    };
    ze($, (g) => {
      o().length > 0 && g(x);
    });
  }
  J(d), B(e, d);
  var S = Ce({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(g) {
      i(g), w();
    }
  });
  return r(), S;
}
me(wf, { defaultEdgeOptions: {} }, [], [], !0);
var Oy = /* @__PURE__ */ he('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const My = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Cl(e, t) {
  _e(t, !1), bt(e, My);
  let n = b(t, "x", 12, 0), r = b(t, "y", 12, 0), o = b(t, "width", 12, 0), a = b(t, "height", 12, 0), i = b(t, "isVisible", 12, !0);
  var s = wt(), l = Oe(s);
  {
    var u = (c) => {
      var d = Oy();
      He(() => {
        Vt(d, "width", typeof o() == "string" ? o() : `${o()}px`), Vt(d, "height", typeof a() == "string" ? a() : `${a()}px`), Vt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), B(c, d);
    };
    ze(l, (c) => {
      i() && c(u);
    });
  }
  return B(e, s), Ce({
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
me(
  Cl,
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
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(i, "$selectionRect", n), a = () => le(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = xt();
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
  Cl(e, {
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
  }), Ce(), r();
}
me(bf, {}, [], [], !0);
var Dy = /* @__PURE__ */ he('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Vy = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function xf(e, t) {
  _e(t, !1), bt(e, Vy);
  const [n, r] = Ct(), o = () => le(l, "$selectionRectMode", n), a = () => le(c, "$nodeLookup", n), i = () => le(u, "$nodes", n), s = xt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Aa();
  let f = fe(null);
  function v(g) {
    const _ = i().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: _, event: g });
  }
  function m(g) {
    const _ = i().filter((y) => y.selected);
    d("selectionclick", { nodes: _, event: g });
  }
  $e(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (ie(f, $i(a(), { filter: (g) => !!g.selected })), i());
    }
  ), Xt(), Ge();
  var $ = wt(), x = Oe($);
  {
    var S = (g) => {
      var _ = Dy(), y = ee(_);
      Cl(y, { width: "100%", height: "100%", x: 0, y: 0 }), J(_), qt(_, (k, T) => Ca == null ? void 0 : Ca(k, T), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, T, V, D) => {
          d("nodedrag", { event: k, targetNode: null, nodes: D });
        },
        onDragStart: (k, T, V, D) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: D });
        },
        onDragStop: (k, T, V, D) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: D });
        }
      })), mn(() => yt("contextmenu", _, v)), mn(() => yt("click", _, m)), mn(() => yt("keyup", _, () => {
      })), He(() => xe(_, "style", `width: ${p(f).width ?? ""}px; height: ${p(f).height ?? ""}px; transform: translate(${p(f).x ?? ""}px, ${p(f).y ?? ""}px)`)), B(g, _);
    };
    ze(x, (g) => {
      o() === "nodes" && p(f) && ur(p(f).x) && ur(p(f).y) && g(S);
    });
  }
  B(e, $), Ce(), r();
}
me(xf, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: m, enabled: $ } = c;
      if ($) {
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
function $f(e, t) {
  _e(t, !1);
  let n = b(t, "selectionKey", 12, "Shift"), r = b(t, "multiSelectionKey", 28, () => wa() ? "Meta" : "Control"), o = b(t, "deleteKey", 12, "Backspace"), a = b(t, "panActivationKey", 12, " "), i = b(t, "zoomActivationKey", 28, () => wa() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = xt();
  function v(g) {
    return g !== null && typeof g == "object";
  }
  function m(g) {
    return v(g) ? g.modifier || [] : [];
  }
  function $(g) {
    return g == null ? "" : v(g) ? g.key : g;
  }
  function x(g, _) {
    return (Array.isArray(g) ? g : [g]).map((y) => {
      const k = $(y);
      return {
        key: k,
        modifier: m(y),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function S() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ge(), yt("blur", un, S), yt("contextmenu", un, S), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !vm(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(a(), () => c.set(!0)),
    type: "keydown"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(a(), () => c.set(!1)),
    type: "keyup"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(i(), () => d.set(!0)),
    type: "keydown"
  })), qt(un, (g, _) => Lt == null ? void 0 : Lt(g, _), () => ({
    trigger: x(i(), () => d.set(!1)),
    type: "keyup"
  })), Ce({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), w();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), w();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), w();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(g) {
      a(g), w();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(g) {
      i(g), w();
    }
  });
}
me(
  $f,
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
var Ny = /* @__PURE__ */ Me('<path fill="none" class="svelte-flow__connection-path"></path>'), Ry = /* @__PURE__ */ Me('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function _f(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(v, "$connection", n), a = () => le(m, "$connectionLineType", n), i = () => le(d, "$width", n), s = () => le(f, "$height", n);
  let l = b(t, "containerStyle", 12, ""), u = b(t, "style", 12, ""), c = b(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: m
  } = xt();
  let $ = fe(null);
  $e(
    () => (o(), oe(c()), a(), p($), Bs),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: k, fromPosition: T, toPosition: V } = o(), D = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: T,
          targetX: k.x,
          targetY: k.y,
          targetPosition: V
        };
        switch (a()) {
          case go.Bezier:
            ((N) => ie($, N[0]))(Hd(D));
            break;
          case go.Step:
            ((N) => ie($, N[0]))(ba({ ...D, borderRadius: 0 }));
            break;
          case go.SmoothStep:
            ((N) => ie($, N[0]))(ba(D));
            break;
          default:
            ((N) => ie($, N[0]))(Bs(D));
        }
      }
    }
  ), Xt(), Ge();
  var x = wt(), S = Oe(x);
  {
    var g = (y) => {
      var k = Ry(), T = ee(k), V = ee(T);
      Ut(V, t, "connectionLine", {});
      var D = K(V);
      {
        var N = (A) => {
          var j = Ny();
          He(() => {
            xe(j, "d", p($)), xe(j, "style", u());
          }), B(A, j);
        };
        ze(D, (A) => {
          c() || A(N);
        });
      }
      J(T), J(k), He(
        (A) => {
          xe(k, "width", i()), xe(k, "height", s()), xe(k, "style", l()), Qr(T, Qn(A));
        },
        [
          () => an([
            "svelte-flow__connection",
            om(o().isValid)
          ])
        ],
        Pe
      ), B(y, k);
    };
    ze(S, (y) => {
      o().inProgress && y(g);
    });
  }
  B(e, x);
  var _ = Ce({
    get containerStyle() {
      return l();
    },
    set containerStyle(y) {
      l(y), w();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), w();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(y) {
      c(y), w();
    }
  });
  return r(), _;
}
me(
  _f,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Ly = /* @__PURE__ */ he("<div><!></div>");
function Ka(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Pt(n, ["position", "style", "class"]);
  _e(t, !1);
  const [o, a] = Ct(), i = () => le(d, "$selectionRectMode", o), s = fe();
  let l = b(t, "position", 12, "top-right"), u = b(t, "style", 12, void 0), c = b(t, "class", 12, void 0);
  const { selectionRectMode: d } = xt();
  $e(() => oe(l()), () => {
    ie(s, `${l()}`.split("-"));
  }), Xt(), Ge();
  var f = Ly();
  let v;
  var m = ee(f);
  Ut(m, t, "default", {}), J(f), He(
    (x) => {
      v = Rn(f, v, {
        class: x,
        style: u(),
        ...r
      }), Vt(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => an([
        "svelte-flow__panel",
        c(),
        ...p(s)
      ])
    ],
    Pe
  ), B(e, f);
  var $ = Ce({
    get position() {
      return l();
    },
    set position(x) {
      l(x), w();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), w();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), w();
    }
  });
  return a(), $;
}
me(Ka, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var zy = /* @__PURE__ */ he('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Cf(e, t) {
  _e(t, !1);
  let n = b(t, "proOptions", 12, void 0), r = b(t, "position", 12, "bottom-right");
  Ge();
  var o = wt(), a = Oe(o);
  {
    var i = (s) => {
      Ka(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = zy();
          B(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ze(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return B(e, o), Ce({
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
me(Cf, { proOptions: {}, position: {} }, [], [], !0);
function Ju(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const Ay = (e) => Object.keys(e);
function Qu(e, t) {
  Ay(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Hy() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Iy(e = "light") {
  return Cn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Hy(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var By = /* @__PURE__ */ he('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), jy = /* @__PURE__ */ he("<!> <!>", 1), Zy = /* @__PURE__ */ he("<div><!> <!> <!> <!></div>");
const Yy = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function kf(e, t) {
  const n = cg(t), r = Pt(t, [
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
  _e(t, !1), bt(e, Yy);
  const [a, i] = Ct(), s = () => le(_(), "$viewport", a), l = () => le(In, "$initialized", a), u = () => le(p(c), "$colorModeClass", a), c = fe();
  let d = b(t, "id", 12, "1"), f = b(t, "nodes", 12), v = b(t, "edges", 12), m = b(t, "fitView", 12, void 0), $ = b(t, "fitViewOptions", 12, void 0), x = b(t, "minZoom", 12, void 0), S = b(t, "maxZoom", 12, void 0), g = b(t, "initialViewport", 12, void 0), _ = b(t, "viewport", 12, void 0), y = b(t, "nodeTypes", 12, void 0), k = b(t, "edgeTypes", 12, void 0), T = b(t, "selectionKey", 12, void 0), V = b(t, "selectionMode", 12, void 0), D = b(t, "panActivationKey", 12, void 0), N = b(t, "multiSelectionKey", 12, void 0), A = b(t, "zoomActivationKey", 12, void 0), j = b(t, "nodesDraggable", 12, void 0), Z = b(t, "nodesConnectable", 12, void 0), X = b(t, "nodeDragThreshold", 12, void 0), P = b(t, "elementsSelectable", 12, void 0), M = b(t, "snapGrid", 12, void 0), E = b(t, "deleteKey", 12, void 0), C = b(t, "connectionRadius", 12, void 0), R = b(t, "connectionLineType", 12, void 0), H = b(t, "connectionMode", 28, () => Fr.Strict), F = b(t, "connectionLineStyle", 12, ""), O = b(t, "connectionLineContainerStyle", 12, ""), I = b(t, "onMoveStart", 12, void 0), ne = b(t, "onMove", 12, void 0), Q = b(t, "onMoveEnd", 12, void 0), W = b(t, "isValidConnection", 12, void 0), se = b(t, "translateExtent", 12, void 0), ge = b(t, "nodeExtent", 12, void 0), ve = b(t, "onlyRenderVisibleElements", 12, void 0), ue = b(t, "panOnScrollMode", 28, () => Mr.Free), ae = b(t, "preventScrolling", 12, !0), we = b(t, "zoomOnScroll", 12, !0), Ke = b(t, "zoomOnDoubleClick", 12, !0), nt = b(t, "zoomOnPinch", 12, !0), Qe = b(t, "panOnScroll", 12, !1), et = b(t, "panOnDrag", 12, !0), U = b(t, "selectionOnDrag", 12, void 0), ye = b(t, "autoPanOnConnect", 12, !0), ke = b(t, "autoPanOnNodeDrag", 12, !0), De = b(t, "onerror", 12, void 0), st = b(t, "ondelete", 12, void 0), Ie = b(t, "onedgecreate", 12, void 0), tt = b(t, "attributionPosition", 12, void 0), it = b(t, "proOptions", 12, void 0), vt = b(t, "defaultEdgeOptions", 12, void 0), Tt = b(t, "width", 12, void 0), ce = b(t, "height", 12, void 0), Be = b(t, "colorMode", 12, "light"), pe = b(t, "onconnect", 12, void 0), sn = b(t, "onconnectstart", 12, void 0), Ft = b(t, "onconnectend", 12, void 0), Ne = b(t, "onbeforedelete", 12, void 0), kt = b(t, "oninit", 12, void 0), Ve = b(t, "nodeOrigin", 12, void 0), Xe = b(t, "paneClickDistance", 12, 0), ut = b(t, "nodeClickDistance", 12, 0), Zt = b(t, "defaultMarkerColor", 12, "#b1b1b7"), Hn = b(t, "style", 12, void 0), Tn = b(t, "class", 12, void 0), zt = fe(), Ot = fe(), Yt = fe();
  const At = s() || g(), $t = Yp(Fa) ? xt() : vy({
    nodes: te(f()),
    edges: te(v()),
    width: Tt(),
    height: ce(),
    fitView: m(),
    nodeOrigin: Ve(),
    nodeExtent: ge()
  });
  er(() => ($t.width.set(p(Ot)), $t.height.set(p(Yt)), $t.domNode.set(p(zt)), $t.syncNodeStores(f()), $t.syncEdgeStores(v()), $t.syncViewport(_()), m() !== void 0 && $t.fitViewOnInit.set(m()), $() && $t.fitViewOptions.set($()), Ju($t, {
    nodeTypes: y(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: S(),
    translateExtent: se(),
    paneClickDistance: Xe()
  }), () => {
    $t.reset();
  }));
  const { initialized: In } = $t;
  let _n = fe(!1);
  $e(
    () => (p(Ot), p(Yt)),
    () => {
      p(Ot) !== void 0 && p(Yt) !== void 0 && ($t.width.set(p(Ot)), $t.height.set(p(Yt)));
    }
  ), $e(
    () => (p(_n), l(), oe(kt())),
    () => {
      var Y;
      !p(_n) && l() && ((Y = kt()) == null || Y(), ie(_n, !0));
    }
  ), $e(
    () => (oe(d()), oe(R()), oe(C()), oe(V()), oe(M()), oe(Zt()), oe(j()), oe(Z()), oe(P()), oe(ve()), oe(W()), oe(ye()), oe(ke()), oe(De()), oe(st()), oe(Ie()), oe(H()), oe(X()), oe(pe()), oe(sn()), oe(Ft()), oe(Ne()), oe(Ve()), Qu),
    () => {
      const Y = {
        flowId: d(),
        connectionLineType: R(),
        connectionRadius: C(),
        selectionMode: V(),
        snapGrid: M(),
        defaultMarkerColor: Zt(),
        nodesDraggable: j(),
        nodesConnectable: Z(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: ve(),
        isValidConnection: W(),
        autoPanOnConnect: ye(),
        autoPanOnNodeDrag: ke(),
        onerror: De(),
        ondelete: st(),
        onedgecreate: Ie(),
        connectionMode: H(),
        nodeDragThreshold: X(),
        onconnect: pe(),
        onconnectstart: sn(),
        onconnectend: Ft(),
        onbeforedelete: Ne(),
        nodeOrigin: Ve()
      };
      Qu($t, Y);
    }
  ), $e(
    () => (oe(y()), oe(k()), oe(x()), oe(S()), oe(se()), oe(Xe())),
    () => {
      Ju($t, {
        nodeTypes: y(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: S(),
        translateExtent: se(),
        paneClickDistance: Xe()
      });
    }
  ), $e(
    () => oe(Be()),
    () => {
      yg(ie(c, Iy(Be())), "$colorModeClass", a);
    }
  ), Xt(), Ge();
  var Qt = Zy();
  let rr;
  var or = ee(Qt);
  $f(or, {
    get selectionKey() {
      return T();
    },
    get deleteKey() {
      return E();
    },
    get panActivationKey() {
      return D();
    },
    get multiSelectionKey() {
      return N();
    },
    get zoomActivationKey() {
      return A();
    }
  });
  var xr = K(or, 2);
  const ir = /* @__PURE__ */ Pe(() => ue() === void 0 ? Mr.Free : ue()), $r = /* @__PURE__ */ Pe(() => ae() === void 0 ? !0 : ae()), Hr = /* @__PURE__ */ Pe(() => we() === void 0 ? !0 : we()), zo = /* @__PURE__ */ Pe(() => Ke() === void 0 ? !0 : Ke()), Ao = /* @__PURE__ */ Pe(() => nt() === void 0 ? !0 : nt()), Ho = /* @__PURE__ */ Pe(() => Qe() === void 0 ? !1 : Qe()), Io = /* @__PURE__ */ Pe(() => et() === void 0 ? !0 : et()), z = /* @__PURE__ */ Pe(() => Xe() === void 0 ? 0 : Xe());
  cf(xr, {
    initialViewport: At,
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
      return p(zo);
    },
    get zoomOnPinch() {
      return p(Ao);
    },
    get panOnScroll() {
      return p(Ho);
    },
    get panOnDrag() {
      return p(Io);
    },
    get paneClickDistance() {
      return p(z);
    },
    children: (Y, ct) => {
      const qe = /* @__PURE__ */ Pe(() => et() === void 0 ? !0 : et());
      df(Y, {
        get panOnDrag() {
          return p(qe);
        },
        get selectionOnDrag() {
          return U();
        },
        $$events: {
          paneclick(je) {
            ot.call(this, t, je);
          },
          panecontextmenu(je) {
            ot.call(this, t, je);
          }
        },
        children: (je, It) => {
          var ht = jy(), _t = Oe(ht);
          ff(_t, {
            children: (Bn, jn) => {
              var Ht = By(), _r = Oe(Ht);
              wf(_r, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(We) {
                    ot.call(this, t, We);
                  },
                  edgecontextmenu(We) {
                    ot.call(this, t, We);
                  },
                  edgemouseenter(We) {
                    ot.call(this, t, We);
                  },
                  edgemouseleave(We) {
                    ot.call(this, t, We);
                  }
                }
              });
              var to = K(_r, 2);
              _f(to, {
                get containerStyle() {
                  return O();
                },
                get style() {
                  return F();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (We, ts) => {
                    var Bo = wt(), Ti = Oe(Bo);
                    Ut(Ti, t, "connectionLine", {}), B(We, Bo);
                  }
                }
              });
              var no = K(to, 6);
              pf(no, {
                get nodeClickDistance() {
                  return ut();
                },
                $$events: {
                  nodeclick(We) {
                    ot.call(this, t, We);
                  },
                  nodemouseenter(We) {
                    ot.call(this, t, We);
                  },
                  nodemousemove(We) {
                    ot.call(this, t, We);
                  },
                  nodemouseleave(We) {
                    ot.call(this, t, We);
                  },
                  nodedragstart(We) {
                    ot.call(this, t, We);
                  },
                  nodedrag(We) {
                    ot.call(this, t, We);
                  },
                  nodedragstop(We) {
                    ot.call(this, t, We);
                  },
                  nodecontextmenu(We) {
                    ot.call(this, t, We);
                  }
                }
              });
              var es = K(no, 2);
              xf(es, {
                $$events: {
                  selectionclick(We) {
                    ot.call(this, t, We);
                  },
                  selectioncontextmenu(We) {
                    ot.call(this, t, We);
                  },
                  nodedragstart(We) {
                    ot.call(this, t, We);
                  },
                  nodedrag(We) {
                    ot.call(this, t, We);
                  },
                  nodedragstop(We) {
                    ot.call(this, t, We);
                  }
                }
              }), B(Bn, Ht);
            },
            $$slots: { default: !0 }
          });
          var Kt = K(_t, 2);
          bf(Kt, {}), B(je, ht);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var re = K(xr, 2);
  Cf(re, {
    get proOptions() {
      return it();
    },
    get position() {
      return tt();
    }
  });
  var be = K(re, 2);
  Ut(be, t, "default", {}), J(Qt), gr(Qt, (Y) => ie(zt, Y), () => p(zt)), He(
    (Y) => rr = Rn(
      Qt,
      rr,
      {
        style: Hn(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => an([
        "svelte-flow",
        Tn(),
        u()
      ])
    ],
    Pe
  ), du(Qt, "clientWidth", (Y) => ie(Ot, Y)), du(Qt, "clientHeight", (Y) => ie(Yt, Y)), yt("dragover", Qt, function(Y) {
    ot.call(this, t, Y);
  }), yt("drop", Qt, function(Y) {
    ot.call(this, t, Y);
  }), B(e, Qt);
  var Ee = Ce({
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
      return m();
    },
    set fitView(Y) {
      m(Y), w();
    },
    get fitViewOptions() {
      return $();
    },
    set fitViewOptions(Y) {
      $(Y), w();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Y) {
      x(Y), w();
    },
    get maxZoom() {
      return S();
    },
    set maxZoom(Y) {
      S(Y), w();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(Y) {
      g(Y), w();
    },
    get viewport() {
      return _();
    },
    set viewport(Y) {
      _(Y), w();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(Y) {
      y(Y), w();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Y) {
      k(Y), w();
    },
    get selectionKey() {
      return T();
    },
    set selectionKey(Y) {
      T(Y), w();
    },
    get selectionMode() {
      return V();
    },
    set selectionMode(Y) {
      V(Y), w();
    },
    get panActivationKey() {
      return D();
    },
    set panActivationKey(Y) {
      D(Y), w();
    },
    get multiSelectionKey() {
      return N();
    },
    set multiSelectionKey(Y) {
      N(Y), w();
    },
    get zoomActivationKey() {
      return A();
    },
    set zoomActivationKey(Y) {
      A(Y), w();
    },
    get nodesDraggable() {
      return j();
    },
    set nodesDraggable(Y) {
      j(Y), w();
    },
    get nodesConnectable() {
      return Z();
    },
    set nodesConnectable(Y) {
      Z(Y), w();
    },
    get nodeDragThreshold() {
      return X();
    },
    set nodeDragThreshold(Y) {
      X(Y), w();
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
      return E();
    },
    set deleteKey(Y) {
      E(Y), w();
    },
    get connectionRadius() {
      return C();
    },
    set connectionRadius(Y) {
      C(Y), w();
    },
    get connectionLineType() {
      return R();
    },
    set connectionLineType(Y) {
      R(Y), w();
    },
    get connectionMode() {
      return H();
    },
    set connectionMode(Y) {
      H(Y), w();
    },
    get connectionLineStyle() {
      return F();
    },
    set connectionLineStyle(Y) {
      F(Y), w();
    },
    get connectionLineContainerStyle() {
      return O();
    },
    set connectionLineContainerStyle(Y) {
      O(Y), w();
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
      return se();
    },
    set translateExtent(Y) {
      se(Y), w();
    },
    get nodeExtent() {
      return ge();
    },
    set nodeExtent(Y) {
      ge(Y), w();
    },
    get onlyRenderVisibleElements() {
      return ve();
    },
    set onlyRenderVisibleElements(Y) {
      ve(Y), w();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(Y) {
      ue(Y), w();
    },
    get preventScrolling() {
      return ae();
    },
    set preventScrolling(Y) {
      ae(Y), w();
    },
    get zoomOnScroll() {
      return we();
    },
    set zoomOnScroll(Y) {
      we(Y), w();
    },
    get zoomOnDoubleClick() {
      return Ke();
    },
    set zoomOnDoubleClick(Y) {
      Ke(Y), w();
    },
    get zoomOnPinch() {
      return nt();
    },
    set zoomOnPinch(Y) {
      nt(Y), w();
    },
    get panOnScroll() {
      return Qe();
    },
    set panOnScroll(Y) {
      Qe(Y), w();
    },
    get panOnDrag() {
      return et();
    },
    set panOnDrag(Y) {
      et(Y), w();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(Y) {
      U(Y), w();
    },
    get autoPanOnConnect() {
      return ye();
    },
    set autoPanOnConnect(Y) {
      ye(Y), w();
    },
    get autoPanOnNodeDrag() {
      return ke();
    },
    set autoPanOnNodeDrag(Y) {
      ke(Y), w();
    },
    get onerror() {
      return De();
    },
    set onerror(Y) {
      De(Y), w();
    },
    get ondelete() {
      return st();
    },
    set ondelete(Y) {
      st(Y), w();
    },
    get onedgecreate() {
      return Ie();
    },
    set onedgecreate(Y) {
      Ie(Y), w();
    },
    get attributionPosition() {
      return tt();
    },
    set attributionPosition(Y) {
      tt(Y), w();
    },
    get proOptions() {
      return it();
    },
    set proOptions(Y) {
      it(Y), w();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(Y) {
      vt(Y), w();
    },
    get width() {
      return Tt();
    },
    set width(Y) {
      Tt(Y), w();
    },
    get height() {
      return ce();
    },
    set height(Y) {
      ce(Y), w();
    },
    get colorMode() {
      return Be();
    },
    set colorMode(Y) {
      Be(Y), w();
    },
    get onconnect() {
      return pe();
    },
    set onconnect(Y) {
      pe(Y), w();
    },
    get onconnectstart() {
      return sn();
    },
    set onconnectstart(Y) {
      sn(Y), w();
    },
    get onconnectend() {
      return Ft();
    },
    set onconnectend(Y) {
      Ft(Y), w();
    },
    get onbeforedelete() {
      return Ne();
    },
    set onbeforedelete(Y) {
      Ne(Y), w();
    },
    get oninit() {
      return kt();
    },
    set oninit(Y) {
      kt(Y), w();
    },
    get nodeOrigin() {
      return Ve();
    },
    set nodeOrigin(Y) {
      Ve(Y), w();
    },
    get paneClickDistance() {
      return Xe();
    },
    set paneClickDistance(Y) {
      Xe(Y), w();
    },
    get nodeClickDistance() {
      return ut();
    },
    set nodeClickDistance(Y) {
      ut(Y), w();
    },
    get defaultMarkerColor() {
      return Zt();
    },
    set defaultMarkerColor(Y) {
      Zt(Y), w();
    },
    get style() {
      return Hn();
    },
    set style(Y) {
      Hn(Y), w();
    },
    get class() {
      return Tn();
    },
    set class(Y) {
      Tn(Y), w();
    }
  });
  return i(), Ee;
}
me(
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
  _e(t, !1);
  let n = b(t, "initialNodes", 12, void 0), r = b(t, "initialEdges", 12, void 0), o = b(t, "initialWidth", 12, void 0), a = b(t, "initialHeight", 12, void 0), i = b(t, "fitView", 12, void 0), s = b(t, "nodeOrigin", 12, void 0);
  const l = uf({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  xo(Fa, { getStore: () => l }), ul(() => {
    l.reset();
  }), Ge();
  var u = wt(), c = Oe(u);
  return Ut(c, t, "default", {}), B(e, u), Ce({
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
me(
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
var Wy = /* @__PURE__ */ he("<button><!></button>");
function Jo(e, t) {
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
  _e(t, !1);
  let o = b(t, "class", 12, void 0), a = b(t, "bgColor", 12, void 0), i = b(t, "bgColorHover", 12, void 0), s = b(t, "color", 12, void 0), l = b(t, "colorHover", 12, void 0), u = b(t, "borderColor", 12, void 0);
  Ge();
  var c = Wy();
  let d;
  var f = ee(c);
  return Ut(f, t, "default", { class: "button-svg" }), J(c), He(
    (v) => {
      d = Rn(c, d, { type: "button", class: v, ...r }), Vt(c, "--xy-controls-button-background-color-props", a()), Vt(c, "--xy-controls-button-background-color-hover-props", i()), Vt(c, "--xy-controls-button-color-props", s()), Vt(c, "--xy-controls-button-color-hover-props", l()), Vt(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => an([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    Pe
  ), yt("click", c, function(v) {
    ot.call(this, t, v);
  }), B(e, c), Ce({
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
me(
  Jo,
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
var Xy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Sf(e) {
  var t = Xy();
  B(e, t);
}
me(Sf, {}, [], [], !0);
var Fy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Pf(e) {
  var t = Fy();
  B(e, t);
}
me(Pf, {}, [], [], !0);
var Ky = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Tf(e) {
  var t = Ky();
  B(e, t);
}
me(Tf, {}, [], [], !0);
var qy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Of(e) {
  var t = qy();
  B(e, t);
}
me(Of, {}, [], [], !0);
var Uy = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Mf(e) {
  var t = Uy();
  B(e, t);
}
me(Mf, {}, [], [], !0);
var Gy = /* @__PURE__ */ he("<!> <!>", 1), Jy = /* @__PURE__ */ he("<!> <!> <!> <!> <!> <!>", 1);
function Df(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(R, "$nodesDraggable", n), a = () => le(H, "$nodesConnectable", n), i = () => le(F, "$elementsSelectable", n), s = () => le(M, "$viewport", n), l = () => le(E, "$minZoom", n), u = () => le(C, "$maxZoom", n), c = fe(), d = fe(), f = fe(), v = fe();
  let m = b(t, "position", 12, "bottom-left"), $ = b(t, "showZoom", 12, !0), x = b(t, "showFitView", 12, !0), S = b(t, "showLock", 12, !0), g = b(t, "buttonBgColor", 12, void 0), _ = b(t, "buttonBgColorHover", 12, void 0), y = b(t, "buttonColor", 12, void 0), k = b(t, "buttonColorHover", 12, void 0), T = b(t, "buttonBorderColor", 12, void 0), V = b(t, "ariaLabel", 12, void 0), D = b(t, "style", 12, void 0), N = b(t, "orientation", 12, "vertical"), A = b(t, "fitViewOptions", 12, void 0), j = b(t, "class", 12, "");
  const {
    zoomIn: Z,
    zoomOut: X,
    fitView: P,
    viewport: M,
    minZoom: E,
    maxZoom: C,
    nodesDraggable: R,
    nodesConnectable: H,
    elementsSelectable: F
  } = xt(), O = {
    bgColor: g(),
    bgColorHover: _(),
    color: y(),
    colorHover: k(),
    borderColor: T()
  }, I = () => {
    Z();
  }, ne = () => {
    X();
  }, Q = () => {
    P(A());
  }, W = () => {
    ie(c, !p(c)), R.set(p(c)), H.set(p(c)), F.set(p(c));
  };
  $e(
    () => (o(), a(), i()),
    () => {
      ie(c, o() || a() || i());
    }
  ), $e(() => (s(), l()), () => {
    ie(d, s().zoom <= l());
  }), $e(() => (s(), u()), () => {
    ie(f, s().zoom >= u());
  }), $e(() => oe(N()), () => {
    ie(v, N() === "horizontal" ? "horizontal" : "vertical");
  }), Xt(), Ge();
  const se = /* @__PURE__ */ Pe(() => an([
    "svelte-flow__controls",
    p(v),
    j()
  ])), ge = /* @__PURE__ */ Pe(() => V() ?? "Svelte Flow controls");
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
      return D();
    },
    children: (ue, ae) => {
      var we = Jy(), Ke = Oe(we);
      Ut(Ke, t, "before", {});
      var nt = K(Ke, 2);
      {
        var Qe = (Ie) => {
          var tt = Gy(), it = Oe(tt);
          Jo(it, Bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return p(f);
              }
            },
            O,
            {
              $$events: { click: I },
              children: (Tt, ce) => {
                Sf(Tt);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = K(it, 2);
          Jo(vt, Bt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return p(d);
              }
            },
            O,
            {
              $$events: { click: ne },
              children: (Tt, ce) => {
                Pf(Tt);
              },
              $$slots: { default: !0 }
            }
          )), B(Ie, tt);
        };
        ze(nt, (Ie) => {
          $() && Ie(Qe);
        });
      }
      var et = K(nt, 2);
      {
        var U = (Ie) => {
          Jo(Ie, Bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            O,
            {
              $$events: { click: Q },
              children: (tt, it) => {
                Tf(tt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ze(et, (Ie) => {
          x() && Ie(U);
        });
      }
      var ye = K(et, 2);
      {
        var ke = (Ie) => {
          Jo(Ie, Bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            O,
            {
              $$events: { click: W },
              children: (tt, it) => {
                var vt = wt(), Tt = Oe(vt);
                {
                  var ce = (pe) => {
                    Mf(pe);
                  }, Be = (pe) => {
                    Of(pe);
                  };
                  ze(Tt, (pe) => {
                    p(c) ? pe(ce) : pe(Be, !1);
                  });
                }
                B(tt, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ze(ye, (Ie) => {
          S() && Ie(ke);
        });
      }
      var De = K(ye, 2);
      Ut(De, t, "default", {});
      var st = K(De, 2);
      Ut(st, t, "after", {}), B(ue, we);
    },
    $$slots: { default: !0 }
  });
  var ve = Ce({
    get position() {
      return m();
    },
    set position(ue) {
      m(ue), w();
    },
    get showZoom() {
      return $();
    },
    set showZoom(ue) {
      $(ue), w();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ue) {
      x(ue), w();
    },
    get showLock() {
      return S();
    },
    set showLock(ue) {
      S(ue), w();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(ue) {
      g(ue), w();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(ue) {
      _(ue), w();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(ue) {
      y(ue), w();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ue) {
      k(ue), w();
    },
    get buttonBorderColor() {
      return T();
    },
    set buttonBorderColor(ue) {
      T(ue), w();
    },
    get ariaLabel() {
      return V();
    },
    set ariaLabel(ue) {
      V(ue), w();
    },
    get style() {
      return D();
    },
    set style(ue) {
      D(ue), w();
    },
    get orientation() {
      return N();
    },
    set orientation(ue) {
      N(ue), w();
    },
    get fitViewOptions() {
      return A();
    },
    set fitViewOptions(ue) {
      A(ue), w();
    },
    get class() {
      return j();
    },
    set class(ue) {
      j(ue), w();
    }
  });
  return r(), ve;
}
me(
  Df,
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
var Dr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Dr || (Dr = {}));
var Qy = /* @__PURE__ */ Me("<circle></circle>");
function Vf(e, t) {
  _e(t, !1);
  let n = b(t, "radius", 12, 5), r = b(t, "class", 12, "");
  Ge();
  var o = Qy();
  return He(
    (a) => {
      xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Qr(o, Qn(a));
    },
    [
      () => an([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    Pe
  ), B(e, o), Ce({
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
me(Vf, { radius: {}, class: {} }, [], [], !0);
var e2 = /* @__PURE__ */ Me("<path></path>");
function Nf(e, t) {
  _e(t, !1);
  let n = b(t, "lineWidth", 12, 1), r = b(t, "dimensions", 12), o = b(t, "variant", 12, void 0), a = b(t, "class", 12, "");
  Ge();
  var i = e2();
  return He(
    (s) => {
      xe(i, "stroke-width", n()), xe(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Qr(i, Qn(s));
    },
    [
      () => an([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    Pe
  ), B(e, i), Ce({
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
me(
  Nf,
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
const t2 = {
  [Dr.Dots]: 1,
  [Dr.Lines]: 1,
  [Dr.Cross]: 6
};
var n2 = /* @__PURE__ */ Me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const r2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Rf(e, t) {
  _e(t, !1), bt(e, r2);
  const [n, r] = Ct(), o = () => le(k, "$flowId", n), a = () => le(y, "$viewport", n), i = fe(), s = fe(), l = fe(), u = fe(), c = fe();
  let d = b(t, "id", 12, void 0), f = b(t, "variant", 28, () => Dr.Dots), v = b(t, "gap", 12, 20), m = b(t, "size", 12, 1), $ = b(t, "lineWidth", 12, 1), x = b(t, "bgColor", 12, void 0), S = b(t, "patternColor", 12, void 0), g = b(t, "patternClass", 12, void 0), _ = b(t, "class", 12, "");
  const { viewport: y, flowId: k } = xt(), T = m() || t2[f()], V = f() === Dr.Dots, D = f() === Dr.Cross, N = Array.isArray(v()) ? v() : [v(), v()];
  $e(
    () => (o(), oe(d())),
    () => {
      ie(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), $e(() => a(), () => {
    ie(s, [
      N[0] * a().zoom || 1,
      N[1] * a().zoom || 1
    ]);
  }), $e(() => a(), () => {
    ie(l, T * a().zoom);
  }), $e(() => (p(l), p(s)), () => {
    ie(u, D ? [p(l), p(l)] : p(s));
  }), $e(
    () => (p(l), p(u)),
    () => {
      ie(c, V ? [
        p(l) / 2,
        p(l) / 2
      ] : [
        p(u)[0] / 2,
        p(u)[1] / 2
      ]);
    }
  ), Xt(), Ge();
  var A = n2(), j = ee(A), Z = ee(j);
  {
    var X = (C) => {
      const R = /* @__PURE__ */ Pe(() => p(l) / 2);
      Vf(C, {
        get radius() {
          return p(R);
        },
        get class() {
          return g();
        }
      });
    }, P = (C) => {
      Nf(C, {
        get dimensions() {
          return p(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return $();
        },
        get class() {
          return g();
        }
      });
    };
    ze(Z, (C) => {
      V ? C(X) : C(P, !1);
    });
  }
  J(j);
  var M = K(j);
  J(A), He(
    (C) => {
      Qr(A, Qn(C), "svelte-1r7pe8d"), Vt(A, "--xy-background-color-props", x()), Vt(A, "--xy-background-pattern-color-props", S()), xe(j, "id", p(i)), xe(j, "x", a().x % p(s)[0]), xe(j, "y", a().y % p(s)[1]), xe(j, "width", p(s)[0]), xe(j, "height", p(s)[1]), xe(j, "patternTransform", `translate(-${p(c)[0]},-${p(c)[1]})`), xe(M, "fill", `url(#${p(i)})`);
    },
    [
      () => an(["svelte-flow__background", _()])
    ],
    Pe
  ), B(e, A);
  var E = Ce({
    get id() {
      return d();
    },
    set id(C) {
      d(C), w();
    },
    get variant() {
      return f();
    },
    set variant(C) {
      f(C), w();
    },
    get gap() {
      return v();
    },
    set gap(C) {
      v(C), w();
    },
    get size() {
      return m();
    },
    set size(C) {
      m(C), w();
    },
    get lineWidth() {
      return $();
    },
    set lineWidth(C) {
      $(C), w();
    },
    get bgColor() {
      return x();
    },
    set bgColor(C) {
      x(C), w();
    },
    get patternColor() {
      return S();
    },
    set patternColor(C) {
      S(C), w();
    },
    get patternClass() {
      return g();
    },
    set patternClass(C) {
      g(C), w();
    },
    get class() {
      return _();
    },
    set class(C) {
      _(C), w();
    }
  });
  return r(), E;
}
me(
  Rf,
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
var o2 = /* @__PURE__ */ Me("<rect></rect>");
function Lf(e, t) {
  _e(t, !1);
  let n = b(t, "x", 12), r = b(t, "y", 12), o = b(t, "width", 12, 0), a = b(t, "height", 12, 0), i = b(t, "borderRadius", 12, 5), s = b(t, "color", 12, void 0), l = b(t, "shapeRendering", 12), u = b(t, "strokeColor", 12, void 0), c = b(t, "strokeWidth", 12, 2), d = b(t, "selected", 12, !1), f = b(t, "class", 12, "");
  Ge();
  var v = o2();
  return He(
    (m) => {
      Qr(v, Qn(m)), xe(v, "x", n()), xe(v, "y", r()), xe(v, "rx", i()), xe(v, "ry", i()), xe(v, "width", o()), xe(v, "height", a()), xe(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), xe(v, "shape-rendering", l()), Dt(v, "selected", d());
    },
    [
      () => an(["svelte-flow__minimap-node", f()])
    ],
    Pe
  ), B(e, v), Ce({
    get x() {
      return n();
    },
    set x(m) {
      n(m), w();
    },
    get y() {
      return r();
    },
    set y(m) {
      r(m), w();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), w();
    },
    get height() {
      return a();
    },
    set height(m) {
      a(m), w();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(m) {
      i(m), w();
    },
    get color() {
      return s();
    },
    set color(m) {
      s(m), w();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(m) {
      l(m), w();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(m) {
      u(m), w();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(m) {
      c(m), w();
    },
    get selected() {
      return d();
    },
    set selected(m) {
      d(m), w();
    },
    get class() {
      return f();
    },
    set class(m) {
      f(m), w();
    }
  });
}
me(
  Lf,
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
function ec(e, t) {
  const n = jm({
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
const ys = (e) => e instanceof Function ? e : () => e;
var i2 = /* @__PURE__ */ Me("<title> </title>"), a2 = /* @__PURE__ */ Me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function zf(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(et, "$flowId", n), a = () => le(Ke, "$viewport", n), i = () => le(nt, "$containerWidth", n), s = () => le(Qe, "$containerHeight", n), l = () => le(we, "$nodeLookup", n), u = () => le(ae, "$nodes", n), c = () => le(U, "$panZoom", n), d = () => le(ye, "$translateExtent", n), f = fe(), v = fe(), m = fe(), $ = fe(), x = fe(), S = fe(), g = fe(), _ = fe(), y = fe(), k = fe(), T = fe(), V = fe(), D = fe();
  let N = b(t, "position", 12, "bottom-right"), A = b(t, "ariaLabel", 12, "Mini map"), j = b(t, "nodeStrokeColor", 12, "transparent"), Z = b(t, "nodeColor", 12, void 0), X = b(t, "nodeClass", 12, ""), P = b(t, "nodeBorderRadius", 12, 5), M = b(t, "nodeStrokeWidth", 12, 2), E = b(t, "bgColor", 12, void 0), C = b(t, "maskColor", 12, void 0), R = b(t, "maskStrokeColor", 12, void 0), H = b(t, "maskStrokeWidth", 12, void 0), F = b(t, "width", 12, void 0), O = b(t, "height", 12, void 0), I = b(t, "pannable", 12, !0), ne = b(t, "zoomable", 12, !0), Q = b(t, "inversePan", 12, void 0), W = b(t, "zoomStep", 12, void 0), se = b(t, "style", 12, ""), ge = b(t, "class", 12, "");
  const ve = 200, ue = 150, {
    nodes: ae,
    nodeLookup: we,
    viewport: Ke,
    width: nt,
    height: Qe,
    flowId: et,
    panZoom: U,
    translateExtent: ye
  } = xt(), ke = Z() === void 0 ? void 0 : ys(Z()), De = ys(j()), st = ys(X()), Ie = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), tt = `svelte-flow__minimap-desc-${o()}`;
  let it = fe(p(f));
  const vt = () => p(S);
  $e(
    () => (a(), i(), s()),
    () => {
      ie(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), $e(
    () => (l(), p(f), u()),
    () => {
      ie(it, l().size > 0 ? Rd($i(l()), p(f)) : p(f)), u();
    }
  ), $e(() => oe(F()), () => {
    ie(v, F() ?? ve);
  }), $e(() => oe(O()), () => {
    ie(m, O() ?? ue);
  }), $e(
    () => (p(it), p(v)),
    () => {
      ie($, p(it).width / p(v));
    }
  ), $e(
    () => (p(it), p(m)),
    () => {
      ie(x, p(it).height / p(m));
    }
  ), $e(
    () => (p($), p(x)),
    () => {
      ie(S, Math.max(p($), p(x)));
    }
  ), $e(() => (p(S), p(v)), () => {
    ie(g, p(S) * p(v));
  }), $e(
    () => (p(S), p(m)),
    () => {
      ie(_, p(S) * p(m));
    }
  ), $e(() => p(S), () => {
    ie(y, 5 * p(S));
  }), $e(
    () => (p(it), p(g), p(y)),
    () => {
      ie(k, p(it).x - (p(g) - p(it).width) / 2 - p(y));
    }
  ), $e(
    () => (p(it), p(_), p(y)),
    () => {
      ie(T, p(it).y - (p(_) - p(it).height) / 2 - p(y));
    }
  ), $e(() => (p(g), p(y)), () => {
    ie(V, p(g) + p(y) * 2);
  }), $e(() => (p(_), p(y)), () => {
    ie(D, p(_) + p(y) * 2);
  }), Xt(), Ge();
  const Tt = /* @__PURE__ */ Pe(() => se() + (E() ? `;--xy-minimap-background-color-props:${E()}` : "")), ce = /* @__PURE__ */ Pe(() => an(["svelte-flow__minimap", ge()]));
  Ka(e, {
    get position() {
      return N();
    },
    get style() {
      return p(Tt);
    },
    get class() {
      return p(ce);
    },
    "data-testid": "svelte-flow__minimap",
    children: (pe, sn) => {
      var Ft = wt(), Ne = Oe(Ft);
      {
        var kt = (Ve) => {
          var Xe = a2();
          xe(Xe, "aria-labelledby", tt);
          var ut = ee(Xe);
          {
            var Zt = (zt) => {
              var Ot = i2();
              xe(Ot, "id", tt);
              var Yt = ee(Ot, !0);
              J(Ot), He(() => Jn(Yt, A())), B(zt, Ot);
            };
            ze(ut, (zt) => {
              A() && zt(Zt);
            });
          }
          var Hn = K(ut);
          bn(Hn, 1, u, (zt) => zt.id, (zt, Ot) => {
            var Yt = wt();
            const At = /* @__PURE__ */ Pe(() => l().get(p(Ot).id));
            var $t = Oe(Yt);
            {
              var In = (_n) => {
                const Qt = /* @__PURE__ */ Pe(() => zr(p(At))), rr = /* @__PURE__ */ Pe(() => ke == null ? void 0 : ke(p(At))), or = /* @__PURE__ */ Pe(() => De(p(At))), xr = /* @__PURE__ */ Pe(() => st(p(At)));
                Lf(_n, Bt(
                  {
                    get x() {
                      return p(At).internals.positionAbsolute.x;
                    },
                    get y() {
                      return p(At).internals.positionAbsolute.y;
                    }
                  },
                  () => p(Qt),
                  {
                    get selected() {
                      return p(At).selected;
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
                    shapeRendering: Ie,
                    get class() {
                      return p(xr);
                    }
                  }
                ));
              };
              ze($t, (_n) => {
                p(At) && zd(p(At)) && _n(In);
              });
            }
            B(zt, Yt);
          });
          var Tn = K(Hn);
          J(Xe), qt(Xe, (zt, Ot) => ec == null ? void 0 : ec(zt, Ot), () => ({
            panZoom: c(),
            viewport: Ke,
            getViewScale: vt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: I(),
            zoomable: ne()
          })), He(() => {
            xe(Xe, "width", p(v)), xe(Xe, "height", p(m)), xe(Xe, "viewBox", `${p(k) ?? ""} ${p(T) ?? ""} ${p(V) ?? ""} ${p(D) ?? ""}`), Vt(Xe, "--xy-minimap-mask-background-color-props", C()), Vt(Xe, "--xy-minimap-mask-stroke-color-props", R()), Vt(Xe, "--xy-minimap-mask-stroke-width-props", H() ? H() * p(S) : void 0), xe(Tn, "d", `M${p(k) - p(y)},${p(T) - p(y)}h${p(V) + p(y) * 2}v${p(D) + p(y) * 2}h${-p(V) - p(y) * 2}z
      M${p(f).x ?? ""},${p(f).y ?? ""}h${p(f).width ?? ""}v${p(f).height ?? ""}h${-p(f).width}z`);
          }), B(Ve, Xe);
        };
        ze(Ne, (Ve) => {
          c() && Ve(kt);
        });
      }
      B(pe, Ft);
    },
    $$slots: { default: !0 }
  });
  var Be = Ce({
    get position() {
      return N();
    },
    set position(pe) {
      N(pe), w();
    },
    get ariaLabel() {
      return A();
    },
    set ariaLabel(pe) {
      A(pe), w();
    },
    get nodeStrokeColor() {
      return j();
    },
    set nodeStrokeColor(pe) {
      j(pe), w();
    },
    get nodeColor() {
      return Z();
    },
    set nodeColor(pe) {
      Z(pe), w();
    },
    get nodeClass() {
      return X();
    },
    set nodeClass(pe) {
      X(pe), w();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(pe) {
      P(pe), w();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(pe) {
      M(pe), w();
    },
    get bgColor() {
      return E();
    },
    set bgColor(pe) {
      E(pe), w();
    },
    get maskColor() {
      return C();
    },
    set maskColor(pe) {
      C(pe), w();
    },
    get maskStrokeColor() {
      return R();
    },
    set maskStrokeColor(pe) {
      R(pe), w();
    },
    get maskStrokeWidth() {
      return H();
    },
    set maskStrokeWidth(pe) {
      H(pe), w();
    },
    get width() {
      return F();
    },
    set width(pe) {
      F(pe), w();
    },
    get height() {
      return O();
    },
    set height(pe) {
      O(pe), w();
    },
    get pannable() {
      return I();
    },
    set pannable(pe) {
      I(pe), w();
    },
    get zoomable() {
      return ne();
    },
    set zoomable(pe) {
      ne(pe), w();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(pe) {
      Q(pe), w();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(pe) {
      W(pe), w();
    },
    get style() {
      return se();
    },
    set style(pe) {
      se(pe), w();
    },
    get class() {
      return ge();
    },
    set class(pe) {
      ge(pe), w();
    }
  });
  return r(), Be;
}
me(
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
const tc = (e) => am(e);
function $n() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: m, nodeOrigin: $, edgeLookup: x, connectionLookup: S } = xt(), g = (k) => {
    var T, V;
    const D = te(m), N = tc(k) ? k : D.get(k.id), A = N.parentId ? cm(N.position, N.measured, N.parentId, D, te($)) : N.position, j = {
      ...N,
      position: A,
      width: ((T = N.measured) == null ? void 0 : T.width) ?? N.width,
      height: ((V = N.measured) == null ? void 0 : V.height) ?? N.height
    };
    return Eo(j);
  }, _ = (k, T, V = { replace: !1 }) => {
    var D;
    const N = (D = te(m).get(k)) == null ? void 0 : D.internals.userNode;
    if (!N)
      return;
    const A = typeof T == "function" ? T(N) : T;
    V.replace ? d.update((j) => j.map((Z) => Z.id === k ? tc(A) ? A : { ...Z, ...A } : Z)) : (Object.assign(N, A), d.update((j) => j));
  }, y = (k) => te(m).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (k) => {
      var T;
      return (T = y(k)) == null ? void 0 : T.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? te(d) : nc(te(m), k),
    getEdge: (k) => te(x).get(k),
    getEdges: (k) => k === void 0 ? te(f) : nc(te(x), k),
    setZoom: (k, T) => {
      const V = te(c);
      return V ? V.scaleTo(k, { duration: T == null ? void 0 : T.duration }) : Promise.resolve(!1);
    },
    getZoom: () => te(a).zoom,
    setViewport: async (k, T) => {
      const V = te(a), D = te(c);
      return D ? (await D.setViewport({
        x: k.x ?? V.x,
        y: k.y ?? V.y,
        zoom: k.zoom ?? V.zoom
      }, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => te(a),
    setCenter: async (k, T, V) => {
      const D = typeof (V == null ? void 0 : V.zoom) < "u" ? V.zoom : te(u), N = te(c);
      return N ? (await N.setViewport({
        x: te(i) / 2 - k * D,
        y: te(s) / 2 - T * D,
        zoom: D
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, T) => {
      const V = te(c);
      if (!V)
        return Promise.resolve(!1);
      const D = wl(k, te(i), te(s), te(l), te(u), (T == null ? void 0 : T.padding) ?? 0.1);
      return await V.setViewport(D, { duration: T == null ? void 0 : T.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, T = !0, V) => {
      const D = zu(k), N = D ? k : g(k);
      return N ? (V || te(d)).filter((A) => {
        const j = te(m).get(A.id);
        if (!j || !D && A.id === k.id)
          return !1;
        const Z = Eo(j), X = di(Z, N);
        return T && X > 0 || X >= N.width * N.height;
      }) : [];
    },
    isNodeIntersecting: (k, T, V = !0) => {
      const D = zu(k) ? k : g(k);
      if (!D)
        return !1;
      const N = di(D, T);
      return V && N > 0 || N >= D.width * D.height;
    },
    deleteElements: async ({ nodes: k = [], edges: T = [] }) => {
      const { nodes: V, edges: D } = await Dd({
        nodesToRemove: k,
        edgesToRemove: T,
        nodes: te(d),
        edges: te(f),
        onBeforeDelete: te(r)
      });
      return V && d.update((N) => N.filter((A) => !V.some(({ id: j }) => j === A.id))), D && f.update((N) => N.filter((A) => !D.some(({ id: j }) => j === A.id))), {
        deletedNodes: V,
        deletedEdges: D
      };
    },
    screenToFlowPosition: (k, T = { snapToGrid: !0 }) => {
      const V = te(v);
      if (!V)
        return k;
      const D = T.snapToGrid ? te(o) : !1, { x: N, y: A, zoom: j } = te(a), { x: Z, y: X } = V.getBoundingClientRect(), P = {
        x: k.x - Z,
        y: k.y - X
      };
      return _i(P, [N, A, j], D !== null, D || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const T = te(v);
      if (!T)
        return k;
      const { x: V, y: D, zoom: N } = te(a), { x: A, y: j } = T.getBoundingClientRect(), Z = Ld(k, [V, D, N]);
      return {
        x: Z.x + A,
        y: Z.y + j
      };
    },
    toObject: () => ({
      nodes: te(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: te(f).map((k) => ({ ...k })),
      viewport: { ...te(a) }
    }),
    updateNode: _,
    updateNodeData: (k, T, V) => {
      var D;
      const N = (D = te(m).get(k)) == null ? void 0 : D.internals.userNode;
      if (!N)
        return;
      const A = typeof T == "function" ? T(N) : T;
      N.data = V != null && V.replace ? A : { ...N.data, ...A }, d.update((j) => j);
    },
    getNodesBounds: (k) => {
      const T = te(m), V = te($);
      return sm(k, { nodeLookup: T, nodeOrigin: V });
    },
    getHandleConnections: ({ type: k, id: T, nodeId: V }) => {
      var D;
      return Array.from(((D = te(S).get(`${V}-${k}-${T ?? null}`)) == null ? void 0 : D.values()) ?? []);
    },
    viewport: a
  };
}
function nc(e, t) {
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
var s2 = /* @__PURE__ */ he('<div class="svelte-flow__node-toolbar"><!></div>');
function Af(e, t) {
  _e(t, !1);
  const [n, r] = Ct(), o = () => le(_, "$nodes", n), a = () => le(g, "$nodeLookup", n), i = () => le(S, "$viewport", n), s = () => le(x, "$domNode", n), l = fe(), u = fe(), c = fe();
  let d = b(t, "nodeId", 12, void 0), f = b(t, "position", 12, void 0), v = b(t, "align", 12, void 0), m = b(t, "offset", 12, void 0), $ = b(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: S, nodeLookup: g, nodes: _ } = xt(), { getNodesBounds: y } = $n(), k = Yr("svelteflow__node_id");
  let T = fe(), V = fe([]), D = m() !== void 0 ? m() : 10, N = f() !== void 0 ? f() : Le.Top, A = v() !== void 0 ? v() : "center";
  $e(
    () => (o(), oe(d()), a()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || k];
      ie(V, M.reduce(
        (E, C) => {
          const R = a().get(C);
          return R && E.push(R), E;
        },
        []
      ));
    }
  ), $e(
    () => (p(V), i()),
    () => {
      const M = y(p(V));
      M && ie(T, km(M, i(), N, D, A));
    }
  ), $e(() => p(V), () => {
    ie(l, p(V).length === 0 ? 1 : Math.max(...p(V).map((M) => (M.internals.z || 5) + 1)));
  }), $e(() => o(), () => {
    ie(u, o().filter((M) => M.selected).length);
  }), $e(
    () => (oe($()), p(V), p(u)),
    () => {
      ie(c, typeof $() == "boolean" ? $() : p(V).length === 1 && p(V)[0].selected && p(u) === 1);
    }
  ), Xt(), Ge();
  var j = wt(), Z = Oe(j);
  {
    var X = (M) => {
      var E = s2(), C = ee(E);
      Ut(C, t, "default", {}), J(E), qt(E, (R, H) => $a == null ? void 0 : $a(R, H), () => ({ domNode: s() })), He(
        (R) => {
          xe(E, "data-id", R), Vt(E, "position", "absolute"), Vt(E, "transform", p(T)), Vt(E, "z-index", p(l));
        },
        [
          () => p(V).reduce((R, H) => `${R}${H.id} `, "").trim()
        ],
        Pe
      ), B(M, E);
    };
    ze(Z, (M) => {
      s() && p(c) && p(V) && M(X);
    });
  }
  B(e, j);
  var P = Ce({
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
      return m();
    },
    set offset(M) {
      m(M), w();
    },
    get isVisible() {
      return $();
    },
    set isVisible(M) {
      $(M), w();
    }
  });
  return r(), P;
}
me(
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
function eo(e) {
  const { nodes: t, nodeLookup: n } = xt();
  let r = [], o = !0;
  return Or([t, n], ([, a], i) => {
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
    (!Vm(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const rc = "tinyflow-component";
class l2 {
  constructor(t) {
    if (cn(this, "options"), cn(this, "rootEl"), cn(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(rc);
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
    const n = document.createElement(rc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const u2 = () => {
  const e = Te([]), t = Te([]), n = Te({ x: 250, y: 100, zoom: 1 });
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
}, ea = u2();
var c2 = /* @__PURE__ */ he("<button><!></button>");
function ft(e, t) {
  _e(t, !0);
  const n = b(t, "children", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = c2();
  let a;
  var i = ee(o);
  return Wr(i, () => n() ?? jt), J(o), He(() => a = Rn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), B(e, o), Ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), w();
    }
  });
}
me(ft, { children: {} }, [], [], !0);
var d2 = /* @__PURE__ */ he("<input>");
function Hf(e, t) {
  _e(t, !0);
  const n = /* @__PURE__ */ on(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = d2();
  Uc(r);
  let o;
  He(() => o = Rn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), B(e, r), Ce();
}
me(Hf, {}, [], [], !0);
var f2 = /* @__PURE__ */ he("<input>");
function tn(e, t) {
  _e(t, !0);
  const n = /* @__PURE__ */ on(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = f2();
  Uc(r);
  let o;
  He(() => o = Rn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), B(e, r), Ce();
}
me(tn, {}, [], [], !0);
var v2 = /* @__PURE__ */ he("<textarea></textarea>");
function pn(e, t) {
  _e(t, !0);
  const n = /* @__PURE__ */ on(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = v2();
  ng(r);
  let o;
  He(() => o = Rn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), B(e, r), Ce();
}
me(pn, {}, [], [], !0);
var p2 = /* @__PURE__ */ he('<div role="button"><!></div>'), g2 = /* @__PURE__ */ he("<div></div>");
function If(e, t) {
  const n = Pt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = Pt(n, ["items", "onChange", "activeIndex"]);
  _e(t, !1);
  let o = b(t, "items", 28, () => []), a = b(t, "onChange", 12, () => {
  }), i = b(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Ge();
  var l = g2();
  let u;
  return bn(l, 5, o, za, (c, d, f) => {
    var v = p2();
    xe(v, "tabindex", f), v.__click = () => s(p(d), f), v.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), s(p(d), f));
    };
    var m = ee(v);
    {
      var $ = (S) => {
        var g = at();
        He(() => Jn(g, p(d).label)), B(S, g);
      }, x = (S) => {
        var g = wt(), _ = Oe(g);
        Wr(_, () => p(d).label ?? jt), B(S, g);
      };
      ze(m, (S) => {
        typeof p(d).label == "string" ? S($) : S(x, !1);
      });
    }
    J(v), He(() => $o(v, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), B(c, v);
  }), J(l), He(() => u = Rn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), B(e, l), Ce({
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
La(["click", "keydown"]);
me(If, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var h2 = (e, t, n) => t(p(n)), m2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(p(n)));
}, y2 = /* @__PURE__ */ he('<div class="tf-collapse-item-description"><!></div>'), w2 = /* @__PURE__ */ he('<div class="tf-collapse-item-content"><!></div>'), b2 = /* @__PURE__ */ he('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><span class="tf-collapse-item-title-icon"><!></span> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), x2 = /* @__PURE__ */ he("<div></div>");
const $2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Bf(e, t) {
  _e(t, !0), bt(e, $2);
  let n = b(t, "items", 7), r = b(t, "onChange", 7), o = b(t, "activeKeys", 31, () => hn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = x2();
  return bn(i, 21, n, za, (s, l, u) => {
    var c = b2(), d = ee(c);
    xe(d, "tabindex", u), d.__click = [h2, a, l], d.__keydown = [m2, a, l];
    var f = ee(d), v = ee(f);
    Pr(v, {
      get target() {
        return p(l).icon;
      }
    }), J(f);
    var m = K(f, 2);
    Pr(m, {
      get target() {
        return p(l).title;
      }
    });
    var $ = K(m, 2);
    J(d);
    var x = K(d, 2);
    {
      var S = (y) => {
        var k = y2(), T = ee(k);
        Pr(T, {
          get target() {
            return p(l).description;
          }
        }), J(k), B(y, k);
      };
      ze(x, (y) => {
        p(l).description && y(S);
      });
    }
    var g = K(x, 2);
    {
      var _ = (y) => {
        var k = w2(), T = ee(k);
        Pr(T, {
          get target() {
            return p(l).content;
          }
        }), J(k), B(y, k);
      };
      ze(g, (y) => {
        o().includes(p(l).key) && y(_);
      });
    }
    J(c), He((y) => $o($, `tf-collapse-item-title-arrow ${y ?? ""} svelte-1jfktzw`), [
      () => o().includes(p(l).key) ? "rotate-90" : ""
    ]), B(s, c);
  }), J(i), He(() => {
    xe(i, "style", t.style), $o(i, `tf-collapse ${t.class ?? ""} svelte-1jfktzw`);
  }), B(e, i), Ce({
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
La(["click", "keydown"]);
me(Bf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Pr(e, t) {
  _e(t, !0);
  let n = b(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = wt(), o = Oe(r);
  {
    var a = (s) => {
      var l = wt(), u = Oe(l);
      Wr(u, () => n() ?? jt), B(s, l);
    }, i = (s) => {
      var l = wt(), u = Oe(l);
      Fc(u, n), B(s, l);
    };
    ze(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return B(e, r), Ce({
    get target() {
      return n();
    },
    set target(s) {
      n(s), w();
    }
  });
}
me(Pr, { target: {} }, [], [], !0);
var _2 = (e, t, n) => t(p(n)), C2 = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), k2 = /* @__PURE__ */ he('<div class="tf-select-content-children"><!></div>'), E2 = /* @__PURE__ */ he('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), S2 = /* @__PURE__ */ he('<div class="tf-select-content nopan nodrag"><!></div>'), P2 = /* @__PURE__ */ he("<!> <!>", 1), T2 = /* @__PURE__ */ he('<div class="tf-select-input-placeholder"> </div>'), O2 = /* @__PURE__ */ he('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), M2 = /* @__PURE__ */ he("<div><!></div>");
function qn(e, t) {
  _e(t, !0);
  const n = (_, y = jt) => {
    var k = wt(), T = Oe(k);
    bn(T, 19, y, (V, D) => `${D}_${V.value}`, (V, D) => {
      var N = E2(), A = Oe(N);
      A.__click = [_2, $, D];
      var j = ee(A), Z = ee(j);
      {
        var X = (C) => {
          var R = C2();
          B(C, R);
        };
        ze(Z, (C) => {
          p(D).children && p(D).children.length > 0 && C(X);
        });
      }
      J(j);
      var P = K(j, 2);
      Pr(P, {
        get target() {
          return p(D).label;
        }
      }), J(A);
      var M = K(A, 2);
      {
        var E = (C) => {
          var R = k2(), H = ee(R);
          n(H, () => p(D).children), J(R), B(C, R);
        };
        ze(M, (C) => {
          p(D).children && p(D).children.length > 0 && (l() || c().includes(p(D).value)) && C(E);
        });
      }
      B(V, N);
    }), B(_, k);
  };
  let r = b(t, "items", 7), o = b(t, "onExpand", 7), a = b(t, "onSelect", 7), i = b(t, "value", 23, () => []), s = b(t, "defaultValue", 23, () => []), l = b(t, "expandAll", 7, !0), u = b(t, "multiple", 7, !1), c = b(t, "expandValue", 23, () => []), d = b(t, "placeholder", 7), f = /* @__PURE__ */ on(t, [
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
    const _ = [], y = (k) => {
      for (let T of k)
        i().length > 0 ? i().includes(T.value) && _.push(T) : s().includes(T.value) && _.push(T), T.children && T.children.length > 0 && y(T.children);
    };
    return y(r()), _;
  }), m;
  function $(_) {
    var y, k;
    if (_.children && _.children.length > 0) {
      (y = o()) == null || y(_);
      return;
    } else
      m == null || m.hide(), (k = a()) == null || k(_);
  }
  var x = M2();
  let S;
  var g = ee(x);
  return gr(
    Pi(g, {
      floating: (_) => {
        var y = S2(), k = ee(y);
        n(k, r), J(y), B(_, y);
      },
      children: (_, y) => {
        var k = O2();
        let T;
        var V = ee(k);
        bn(
          V,
          23,
          () => p(v),
          (D, N) => `${N}_${D.value}`,
          (D, N, A) => {
            var j = wt(), Z = Oe(j);
            {
              var X = (M) => {
                var E = wt(), C = Oe(E);
                {
                  var R = (H) => {
                    Pr(H, {
                      get target() {
                        return p(N).label;
                      }
                    });
                  };
                  ze(C, (H) => {
                    p(A) === 0 && H(R);
                  });
                }
                B(M, E);
              }, P = (M) => {
                var E = P2(), C = Oe(E);
                Pr(C, {
                  get target() {
                    return p(N).label;
                  }
                });
                var R = K(C, 2);
                {
                  var H = (F) => {
                    var O = at(",");
                    B(F, O);
                  };
                  ze(R, (F) => {
                    p(A) < p(v).length - 1 && F(H);
                  });
                }
                B(M, E);
              };
              ze(Z, (M) => {
                u() ? M(P, !1) : M(X);
              });
            }
            B(D, j);
          },
          (D) => {
            var N = T2(), A = ee(N, !0);
            J(N), He(() => Jn(A, d())), B(D, N);
          }
        ), J(V), Ye(2), J(k), He(() => T = Rn(k, T, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), B(_, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => m = _,
    () => m
  ), J(x), He(() => S = Rn(x, S, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), B(e, x), Ce({
    get items() {
      return r();
    },
    set items(_) {
      r(_), w();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), w();
    },
    get onSelect() {
      return a();
    },
    set onSelect(_) {
      a(_), w();
    },
    get value() {
      return i();
    },
    set value(_ = []) {
      i(_), w();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(_ = []) {
      s(_), w();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), w();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), w();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), w();
    },
    get placeholder() {
      return d();
    },
    set placeholder(_) {
      d(_), w();
    }
  });
}
La(["click"]);
me(
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
const vi = Math.min, ho = Math.max, ka = Math.round, Xn = (e) => ({
  x: e,
  y: e
}), D2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, V2 = {
  start: "end",
  end: "start"
};
function Zs(e, t, n) {
  return ho(e, vi(t, n));
}
function ki(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qr(e) {
  return e.split("-")[0];
}
function Ei(e) {
  return e.split("-")[1];
}
function jf(e) {
  return e === "x" ? "y" : "x";
}
function kl(e) {
  return e === "y" ? "height" : "width";
}
function Po(e) {
  return ["top", "bottom"].includes(qr(e)) ? "y" : "x";
}
function El(e) {
  return jf(Po(e));
}
function N2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ei(e), o = El(e), a = kl(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ea(i)), [i, Ea(i)];
}
function R2(e) {
  const t = Ea(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => V2[t]);
}
function L2(e, t, n) {
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
function z2(e, t, n, r) {
  const o = Ei(e);
  let a = L2(qr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ys)))), a;
}
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => D2[t]);
}
function A2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zf(e) {
  return typeof e != "number" ? A2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sa(e) {
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
function oc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Po(t), i = El(t), s = kl(i), l = qr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (Ei(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const H2 = async (e, t, n) => {
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
  } = oc(u, r, l), f = r, v = {}, m = 0;
  for (let $ = 0; $ < s.length; $++) {
    const {
      name: x,
      fn: S
    } = s[$], {
      x: g,
      y: _,
      data: y,
      reset: k
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
    c = g ?? c, d = _ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...y
      }
    }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = oc(u, f, l)), $ = -1);
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
  } = ki(t, e), m = Zf(v), $ = s[f ? d === "floating" ? "reference" : "floating" : d], x = Sa(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement($))) == null || n ? $ : $.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), S = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(g)) ? await (a.getScale == null ? void 0 : a.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = Sa(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: S,
    offsetParent: g,
    strategy: l
  }) : S);
  return {
    top: (x.top - y.top + m.top) / _.y,
    bottom: (y.bottom - x.bottom + m.bottom) / _.y,
    left: (x.left - y.left + m.left) / _.x,
    right: (y.right - x.right + m.right) / _.x
  };
}
const I2 = (e) => ({
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
    } = ki(e, t) || {};
    if (u == null)
      return {};
    const d = Zf(c), f = {
      x: n,
      y: r
    }, v = El(o), m = kl(v), $ = await i.getDimensions(u), x = v === "y", S = x ? "top" : "left", g = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[v] - f[v] - a.floating[m], k = f[v] - a.reference[v], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let V = T ? T[_] : 0;
    (!V || !await (i.isElement == null ? void 0 : i.isElement(T))) && (V = s.floating[_] || a.floating[m]);
    const D = y / 2 - k / 2, N = V / 2 - $[m] / 2 - 1, A = vi(d[S], N), j = vi(d[g], N), Z = A, X = V - $[m] - j, P = V / 2 - $[m] / 2 + D, M = Zs(Z, P, X), E = !l.arrow && Ei(o) != null && P !== M && a.reference[m] / 2 - (P < Z ? A : j) - $[m] / 2 < 0, C = E ? P < Z ? P - Z : P - X : 0;
    return {
      [v]: f[v] + C,
      data: {
        [v]: M,
        centerOffset: P - M - C,
        ...E && {
          alignmentOffset: C
        }
      },
      reset: E
    };
  }
}), B2 = function(e) {
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
        flipAlignment: $ = !0,
        ...x
      } = ki(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = qr(o), g = Po(s), _ = qr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (_ || !$ ? [Ea(s)] : R2(s)), T = m !== "none";
      !f && T && k.push(...z2(s, $, m, y));
      const V = [s, ...k], D = await Yf(t, x), N = [];
      let A = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(D[S]), d) {
        const P = N2(o, i, y);
        N.push(D[P[0]], D[P[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var j, Z;
        const P = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, M = V[P];
        if (M)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: M
            }
          };
        let E = (Z = A.filter((C) => C.overflows[0] <= 0).sort((C, R) => C.overflows[1] - R.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!E)
          switch (v) {
            case "bestFit": {
              var X;
              const C = (X = A.filter((R) => {
                if (T) {
                  const H = Po(R.placement);
                  return H === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((H) => H > 0).reduce((H, F) => H + F, 0)]).sort((R, H) => R[1] - H[1])[0]) == null ? void 0 : X[0];
              C && (E = C);
              break;
            }
            case "initialPlacement":
              E = s;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function j2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = qr(n), s = Ei(n), l = Po(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = ki(t, e);
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
const Z2 = function(e) {
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
      } = t, l = await j2(t, e);
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
}, Y2 = function(e) {
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
              y: g
            } = x;
            return {
              x: S,
              y: g
            };
          }
        },
        ...l
      } = ki(e, t), u = {
        x: n,
        y: r
      }, c = await Yf(t, l), d = Po(qr(o)), f = jf(d);
      let v = u[f], m = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", g = v + c[x], _ = v - c[S];
        v = Zs(g, v, _);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", S = d === "y" ? "bottom" : "right", g = m + c[x], _ = m - c[S];
        m = Zs(g, m, _);
      }
      const $ = s.fn({
        ...t,
        [f]: v,
        [d]: m
      });
      return {
        ...$,
        data: {
          x: $.x - n,
          y: $.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
};
function qa() {
  return typeof window < "u";
}
function Lo(e) {
  return Wf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wr(e) {
  var t;
  return (t = (Wf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wf(e) {
  return qa() ? e instanceof Node || e instanceof wn(e).Node : !1;
}
function Ln(e) {
  return qa() ? e instanceof Element || e instanceof wn(e).Element : !1;
}
function Un(e) {
  return qa() ? e instanceof HTMLElement || e instanceof wn(e).HTMLElement : !1;
}
function ic(e) {
  return !qa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wn(e).ShadowRoot;
}
function Si(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = zn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function W2(e) {
  return ["table", "td", "th"].includes(Lo(e));
}
function Ua(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Sl(e) {
  const t = Pl(), n = Ln(e) ? zn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function X2(e) {
  let t = Lr(e);
  for (; Un(t) && !To(t); ) {
    if (Sl(t))
      return t;
    if (Ua(t))
      return null;
    t = Lr(t);
  }
  return null;
}
function Pl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function To(e) {
  return ["html", "body", "#document"].includes(Lo(e));
}
function zn(e) {
  return wn(e).getComputedStyle(e);
}
function Ga(e) {
  return Ln(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Lr(e) {
  if (Lo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ic(e) && e.host || // Fallback.
    wr(e)
  );
  return ic(t) ? t.host : t;
}
function Xf(e) {
  const t = Lr(e);
  return To(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Un(t) && Si(t) ? t : Xf(t);
}
function Ff(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Xf(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = wn(o);
  return a ? (Ws(i), t.concat(i, i.visualViewport || [], Si(o) ? o : [], [])) : t.concat(o, Ff(o, []));
}
function Ws(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kf(e) {
  const t = zn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Un(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = ka(n) !== a || ka(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function qf(e) {
  return Ln(e) ? e : e.contextElement;
}
function mo(e) {
  const t = qf(e);
  if (!Un(t))
    return Xn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Kf(t);
  let i = (a ? ka(n.width) : n.width) / r, s = (a ? ka(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const F2 = /* @__PURE__ */ Xn(0);
function Uf(e) {
  const t = wn(e);
  return !Pl() || !t.visualViewport ? F2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function K2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== wn(e) ? !1 : t;
}
function pi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qf(e);
  let i = Xn(1);
  t && (r ? Ln(r) && (i = mo(r)) : i = mo(e));
  const s = K2(a, n, r) ? Uf(a) : Xn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = wn(a), v = r && Ln(r) ? wn(r) : r;
    let m = f, $ = Ws(m);
    for (; $ && r && v !== m; ) {
      const x = mo($), S = $.getBoundingClientRect(), g = zn($), _ = S.left + ($.clientLeft + parseFloat(g.paddingLeft)) * x.x, y = S.top + ($.clientTop + parseFloat(g.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += y, m = wn($), $ = Ws(m);
    }
  }
  return Sa({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Tl(e, t) {
  const n = Ga(e).scrollLeft;
  return t ? t.left + n : pi(wr(e)).left + n;
}
function Gf(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Tl(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function q2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = wr(r), s = t ? Ua(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Xn(1);
  const c = Xn(0), d = Un(r);
  if ((d || !d && !a) && ((Lo(r) !== "body" || Si(i)) && (l = Ga(r)), Un(r))) {
    const v = pi(r);
    u = mo(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Gf(i, l, !0) : Xn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function U2(e) {
  return Array.from(e.getClientRects());
}
function G2(e) {
  const t = wr(e), n = Ga(e), r = e.ownerDocument.body, o = ho(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ho(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Tl(e);
  const s = -n.scrollTop;
  return zn(r).direction === "rtl" && (i += ho(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function J2(e, t) {
  const n = wn(e), r = wr(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Pl();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Q2(e, t) {
  const n = pi(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Un(e) ? mo(e) : Xn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function ac(e, t, n) {
  let r;
  if (t === "viewport")
    r = J2(e, n);
  else if (t === "document")
    r = G2(wr(e));
  else if (Ln(t))
    r = Q2(t, n);
  else {
    const o = Uf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Sa(r);
}
function Jf(e, t) {
  const n = Lr(e);
  return n === t || !Ln(n) || To(n) ? !1 : zn(n).position === "fixed" || Jf(n, t);
}
function ew(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ff(e, []).filter((s) => Ln(s) && Lo(s) !== "body"), o = null;
  const a = zn(e).position === "fixed";
  let i = a ? Lr(e) : e;
  for (; Ln(i) && !To(i); ) {
    const s = zn(i), l = Sl(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Si(i) && !l && Jf(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Lr(i);
  }
  return t.set(e, r), r;
}
function tw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ua(t) ? [] : ew(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = ac(t, u, o);
    return l.top = ho(c.top, l.top), l.right = vi(c.right, l.right), l.bottom = vi(c.bottom, l.bottom), l.left = ho(c.left, l.left), l;
  }, ac(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function nw(e) {
  const {
    width: t,
    height: n
  } = Kf(e);
  return {
    width: t,
    height: n
  };
}
function rw(e, t, n) {
  const r = Un(t), o = wr(t), a = n === "fixed", i = pi(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xn(0);
  if (r || !r && !a)
    if ((Lo(t) !== "body" || Si(o)) && (s = Ga(t)), r) {
      const f = pi(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Tl(o));
  const u = o && !r && !a ? Gf(o, s) : Xn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function ws(e) {
  return zn(e).position === "static";
}
function sc(e, t) {
  if (!Un(e) || zn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return wr(e) === n && (n = n.ownerDocument.body), n;
}
function Qf(e, t) {
  const n = wn(e);
  if (Ua(e))
    return n;
  if (!Un(e)) {
    let o = Lr(e);
    for (; o && !To(o); ) {
      if (Ln(o) && !ws(o))
        return o;
      o = Lr(o);
    }
    return n;
  }
  let r = sc(e, t);
  for (; r && W2(r) && ws(r); )
    r = sc(r, t);
  return r && To(r) && ws(r) && !Sl(r) ? n : r || X2(e) || n;
}
const ow = async function(e) {
  const t = this.getOffsetParent || Qf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: rw(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function iw(e) {
  return zn(e).direction === "rtl";
}
const aw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: q2,
  getDocumentElement: wr,
  getClippingRect: tw,
  getOffsetParent: Qf,
  getElementRects: ow,
  getClientRects: U2,
  getDimensions: nw,
  getScale: mo,
  isElement: Ln,
  isRTL: iw
}, sw = Z2, lw = Y2, uw = B2, cw = I2, dw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: aw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return H2(e, t, {
    ...o,
    platform: a
  });
}, fw = ({
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
    dw(e, u, {
      placement: r,
      middleware: [
        sw(o),
        // 手动偏移配置
        uw(a),
        //自动翻转
        lw(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [cw({ element: c })] : []
      ]
    }).then(({ x: S, y: g, placement: _, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${S}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: T } = y.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
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
  function $(S) {
    S.stopPropagation(), f ? m() : v();
  }
  function x(S) {
    u.contains(S.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((S) => {
    e.addEventListener(S, $);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((S) => {
        e.removeEventListener(S, $);
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
var vw = /* @__PURE__ */ he('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Pi(e, t) {
  _e(t, !0);
  const n = b(t, "children", 7), r = b(t, "floating", 7), o = b(t, "placement", 7, "bottom");
  let a, i, s;
  er(() => (s = fw({
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
  var u = vw(), c = ee(u), d = ee(c);
  Wr(d, n), J(c), gr(c, (m) => a = m, () => a);
  var f = K(c, 2), v = ee(f);
  return Wr(v, r), J(f), gr(f, (m) => i = m, () => i), J(u), B(e, u), Ce({
    hide: l,
    get children() {
      return n();
    },
    set children(m) {
      n(m), w();
    },
    get floating() {
      return r();
    },
    set floating(m) {
      r(m), w();
    },
    get placement() {
      return o();
    },
    set placement(m = "bottom") {
      o(m), w();
    }
  });
}
me(Pi, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function mt(e, t) {
  _e(t, !0);
  const n = b(t, "children", 7), r = b(t, "level", 7, 1), o = b(t, "mt", 7), a = b(t, "mb", 7);
  var i = wt(), s = Oe(i);
  return dg(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    He(() => c = Rn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === pc,
      l.nodeName.includes("-")
    ));
    var d = wt(), f = Oe(d);
    Wr(f, () => n() ?? jt), B(u, d);
  }), B(e, i), Ce({
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
me(mt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var pw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const gw = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ja(e, t) {
  _e(t, !0), bt(e, gw);
  const n = /* @__PURE__ */ on(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  ft(e, Bt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = pw();
      B(r, a);
    },
    $$slots: { default: !0 }
  })), Ce();
}
me(Ja, {}, [], [], !0);
const hw = () => {
  const e = xt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Oo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, mw = () => {
  const { nodes: e, nodeLookup: t } = xt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = te(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = Oo(), i = {
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
var yw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ww = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), bw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), xw = /* @__PURE__ */ he('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), $w = /* @__PURE__ */ he('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const _w = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function nr(e, t) {
  _e(t, !0), bt(e, _w);
  const n = b(t, "data", 7), r = b(t, "id", 7, ""), o = b(t, "icon", 7), a = b(t, "handle", 7), i = b(t, "children", 7), s = b(t, "allowExecute", 7, !0), l = b(t, "allowCopy", 7, !0), u = b(t, "allowDelete", 7, !0);
  let c = n().expand ? ["key"] : [];
  const { updateNodeData: d } = $n(), f = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: v } = hw(), { copyNode: m } = mw();
  var $ = $w(), x = Oe($);
  {
    var S = (D) => {
      Af(D, {
        get position() {
          return Le.Top;
        },
        align: "end",
        children: (N, A) => {
          var j = xw(), Z = ee(j);
          {
            var X = (R) => {
              ft(R, {
                class: "tf-node-toolbar-item",
                children: (H, F) => {
                  var O = yw();
                  B(H, O);
                },
                $$slots: { default: !0 }
              });
            };
            ze(Z, (R) => {
              s() && R(X);
            });
          }
          var P = K(Z, 2);
          {
            var M = (R) => {
              ft(R, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  m(r());
                },
                children: (H, F) => {
                  var O = ww();
                  B(H, O);
                },
                $$slots: { default: !0 }
              });
            };
            ze(P, (R) => {
              l() && R(M);
            });
          }
          var E = K(P, 2);
          {
            var C = (R) => {
              ft(R, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  v(r());
                },
                children: (H, F) => {
                  var O = bw();
                  B(H, O);
                },
                $$slots: { default: !0 }
              });
            };
            ze(E, (R) => {
              u() && R(C);
            });
          }
          J(j), B(N, j);
        },
        $$slots: { default: !0 }
      });
    };
    ze(x, (D) => {
      (s() || l() || u()) && D(S);
    });
  }
  var g = K(x, 2), _ = K(ee(g), 2), y = ee(_);
  Bf(y, {
    items: f,
    activeKeys: c,
    onChange: (D, N) => {
      d(r(), { expand: N == null ? void 0 : N.includes("key") });
    }
  }), J(_), J(g);
  var k = K(g, 2);
  Rr(k, {
    type: "target",
    get position() {
      return Le.Left;
    },
    style: " left: -12px;top: 20px"
  });
  var T = K(k, 2);
  Rr(T, {
    type: "source",
    get position() {
      return Le.Right;
    },
    style: "right: -12px;top: 20px"
  });
  var V = K(T, 2);
  return Wr(V, () => a() ?? jt), B(e, $), Ce({
    get data() {
      return n();
    },
    set data(D) {
      n(D), w();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), w();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), w();
    },
    get handle() {
      return a();
    },
    set handle(D) {
      a(D), w();
    },
    get children() {
      return i();
    },
    set children(D) {
      i(D), w();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(D = !0) {
      s(D), w();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), w();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), w();
    }
  });
}
me(
  nr,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {}
  },
  [],
  [],
  !0
);
function Jt() {
  return Yr("svelteflow__node_id");
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
], Cw = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var kw = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ew = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Sw = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Pw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function tv(e, t) {
  _e(t, !0), bt(e, Pw);
  const [n, r] = Ct(), o = () => le(p(l), "$node", n), a = b(t, "parameter", 7), i = b(t, "index", 7);
  let s = Jt(), l = /* @__PURE__ */ Fe(() => eo(s)), u = /* @__PURE__ */ Fe(() => {
    var D, N;
    return {
      ...a(),
      ...(N = (D = o()) == null ? void 0 : D.data) == null ? void 0 : N.parameters[i()]
    };
  });
  const { updateNodeData: c } = $n(), d = (D) => {
    const N = D.target.value;
    c(s, (A) => {
      let j = A.data.parameters;
      return j[i()].name = N, { parameters: j };
    });
  }, f = (D) => {
    const N = D.target.checked;
    c(s, (A) => {
      let j = A.data.parameters;
      return j[i()].required = N, { parameters: j };
    });
  }, v = (D) => {
    const N = D.value;
    N && c(s, (A) => {
      let j = A.data.parameters;
      return j[i()].dataType = N, { parameters: j };
    });
  };
  let m;
  const $ = () => {
    c(s, (D) => {
      let N = D.data.parameters;
      return N.splice(i(), 1), { parameters: [...N] };
    }), m == null || m.hide();
  };
  var x = Sw(), S = Oe(x), g = ee(S);
  tn(g, {
    style: "width: 100%;",
    get value() {
      return p(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), J(S);
  var _ = K(S, 2), y = ee(_);
  Hf(y, {
    get checked() {
      return p(u).required;
    },
    onchange: f
  }), J(_);
  var k = K(_, 2), T = ee(k);
  gr(
    Pi(T, {
      placement: "bottom",
      floating: (D) => {
        var N = kw(), A = ee(N), j = K(ee(A));
        const Z = /* @__PURE__ */ Fe(() => p(u).dataType ? [p(u).dataType] : ["String"]);
        qn(j, {
          items: ev,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return p(Z);
          }
        }), J(A);
        var X = K(A, 2), P = K(ee(X));
        pn(P, { rows: 1, style: "width: 100%;" }), J(X);
        var M = K(X, 2), E = K(ee(M));
        pn(E, { rows: 3, style: "width: 100%;" }), J(M);
        var C = K(M, 2), R = ee(C);
        ft(R, {
          onclick: $,
          children: (H, F) => {
            Ye();
            var O = at("删除");
            B(H, O);
          },
          $$slots: { default: !0 }
        }), J(C), J(N), B(D, N);
      },
      children: (D, N) => {
        ft(D, {
          class: "input-btn-more",
          children: (A, j) => {
            var Z = Ew();
            B(A, Z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => m = D,
    () => m
  ), J(k), B(e, x);
  var V = Ce({
    get parameter() {
      return a();
    },
    set parameter(D) {
      a(D), w();
    },
    get index() {
      return i();
    },
    set index(D) {
      i(D), w();
    }
  });
  return r(), V;
}
me(tv, { parameter: {}, index: {} }, [], [], !0);
var Tw = /* @__PURE__ */ he('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Ow = /* @__PURE__ */ he('<div class="none-params svelte-3n0wca">无输入参数</div>'), Mw = /* @__PURE__ */ he('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Dw = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function nv(e, t) {
  _e(t, !0), bt(e, Dw);
  const [n, r] = Ct(), o = () => le(p(i), "$node", n);
  let a = Jt(), i = /* @__PURE__ */ Fe(() => eo(a)), s = /* @__PURE__ */ Fe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = Mw(), u = ee(l);
  {
    var c = (f) => {
      var v = Tw();
      Ye(4), B(f, v);
    };
    ze(u, (f) => {
      p(s).length !== 0 && f(c);
    });
  }
  var d = K(u, 2);
  bn(
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
      var v = Ow();
      B(f, v);
    }
  ), J(l), B(e, l), Ce(), r();
}
me(nv, {}, [], [], !0);
const rv = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Oo()), rv(t.children);
  });
}, br = () => {
  const { updateNodeData: e } = $n();
  return {
    addParameter: (t, n = "parameters", r) => {
      rv(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Oo()
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
var Vw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Nw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ he('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Lw = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function ov(e, t) {
  _e(t, !0), bt(e, Lw);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br();
  return nr(e, Bt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    icon: (i) => {
      var s = Vw();
      B(i, s);
    },
    children: (i, s) => {
      var l = Rw(), u = Oe(l), c = ee(u);
      mt(c, {
        level: 3,
        children: (v, m) => {
          Ye();
          var $ = at("输入参数");
          B(v, $);
        },
        $$slots: { default: !0 }
      });
      var d = K(c, 2);
      ft(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, m) => {
          var $ = Nw();
          B(v, $);
        },
        $$slots: { default: !0 }
      }), J(u);
      var f = K(u, 2);
      nv(f, {}), B(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), Ce({
    get data() {
      return n();
    },
    set data(i) {
      n(i), w();
    }
  });
}
me(ov, { data: {} }, [], [], !0);
const iv = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), iv(e, r.source, n));
}, lc = (e, t) => {
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
}, zw = (e = !1) => {
  const t = Jt(), n = eo(t), { nodes: r, edges: o } = xt();
  return Or([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = lc(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      iv(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = lc(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Aw = /* @__PURE__ */ he('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Hw = /* @__PURE__ */ he('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Iw = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function av(e, t) {
  _e(t, !0), bt(e, Iw);
  const [n, r] = Ct(), o = () => le(p(c), "$node", n), a = () => le(y, "$selectItems", n), i = b(t, "parameter", 7), s = b(t, "index", 7), l = b(t, "dataKeyName", 7);
  let u = Jt(), c = /* @__PURE__ */ Fe(() => eo(u)), d = /* @__PURE__ */ Fe(() => {
    var M;
    return {
      ...i(),
      ...(M = o()) == null ? void 0 : M.data[l()][s()]
    };
  });
  const { updateNodeData: f } = $n(), v = (M, E) => {
    f(u, (C) => {
      let R = C.data[l()];
      return R[s()] = { ...R[s()], [M]: E }, { [l()]: R };
    });
  }, m = (M) => {
    const E = M.target.value;
    v("name", E);
  }, $ = (M) => {
    const E = M.target.value;
    v("value", E);
  }, x = (M) => {
    const E = M.value;
    v("ref", E);
  }, S = (M) => {
    const E = M.value;
    v("refType", E);
  };
  let g;
  const _ = () => {
    f(u, (M) => {
      let E = M.data[l()];
      return E.splice(s(), 1), { [l()]: [...E] };
    }), g == null || g.hide();
  }, y = zw();
  var k = Hw(), T = Oe(k), V = ee(T);
  tn(V, {
    style: "width: 100%;",
    get value() {
      return p(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: m
  }), J(T);
  var D = K(T, 2), N = ee(D);
  {
    var A = (M) => {
      tn(M, {
        get value() {
          return p(d).value;
        },
        placeholder: "请输入参数值",
        oninput: $
      });
    }, j = (M) => {
      const E = /* @__PURE__ */ Fe(() => [p(d).ref]);
      qn(M, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return p(E);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    ze(N, (M) => {
      p(d).refType === "input" ? M(A) : M(j, !1);
    });
  }
  J(D);
  var Z = K(D, 2), X = ee(Z);
  gr(
    Pi(X, {
      placement: "bottom",
      floating: (M) => {
        var E = Aw(), C = ee(E), R = K(ee(C));
        const H = /* @__PURE__ */ Fe(() => p(d).refType ? [p(d).refType] : []);
        qn(R, {
          items: Cw,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return p(H);
          },
          onSelect: S
        }), J(C);
        var F = K(C, 2), O = K(ee(F));
        pn(O, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            const ge = se.target.value;
            v("defaultValue", ge);
          }
        }), J(F);
        var I = K(F, 2), ne = K(ee(I));
        pn(ne, {
          rows: 3,
          style: "width: 100%;",
          onchange: (se) => {
            const ge = se.target.value;
            v("description", ge);
          }
        }), J(I);
        var Q = K(I, 2), W = ee(Q);
        ft(W, {
          onclick: _,
          children: (se, ge) => {
            Ye();
            var ve = at("删除");
            B(se, ve);
          },
          $$slots: { default: !0 }
        }), J(Q), J(E), B(M, E);
      },
      children: (M, E) => {
        Ja(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => g = M,
    () => g
  ), J(Z), B(e, k);
  var P = Ce({
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
me(av, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Bw = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), jw = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), Zw = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Yw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function En(e, t) {
  _e(t, !0), bt(e, Yw);
  const [n, r] = Ct(), o = () => le(p(l), "$node", n), a = b(t, "noneParameterText", 7, "无输入参数"), i = b(t, "dataKeyName", 7, "parameters");
  let s = Jt(), l = /* @__PURE__ */ Fe(() => eo(s)), u = /* @__PURE__ */ Fe(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[i()]) || []];
  });
  var c = Zw(), d = ee(c);
  {
    var f = ($) => {
      var x = Bw();
      Ye(4), B($, x);
    };
    ze(d, ($) => {
      p(u).length !== 0 && $(f);
    });
  }
  var v = K(d, 2);
  bn(
    v,
    19,
    () => p(u),
    ($) => $.id,
    ($, x, S) => {
      av($, {
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
    ($) => {
      var x = jw(), S = ee(x, !0);
      J(x), He(() => Jn(S, a())), B($, x);
    }
  ), J(c), B(e, c);
  var m = Ce({
    get noneParameterText() {
      return a();
    },
    set noneParameterText($ = "无输入参数") {
      a($), w();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName($ = "parameters") {
      i($), w();
    }
  });
  return r(), m;
}
me(En, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ww = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Xw = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ he('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Kw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function sv(e, t) {
  _e(t, !0), bt(e, Kw);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br();
  return nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      icon: (i) => {
        var s = Ww();
        B(i, s);
      },
      children: (i, s) => {
        var l = Fw(), u = Oe(l), c = ee(u);
        mt(c, {
          level: 3,
          children: (v, m) => {
            Ye();
            var $ = at("输出参数");
            B(v, $);
          },
          $$slots: { default: !0 }
        });
        var d = K(c, 2);
        ft(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, m) => {
            var $ = Xw();
            B(v, $);
          },
          $$slots: { default: !0 }
        }), J(u);
        var f = K(u, 2);
        En(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), B(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(i) {
      n(i), w();
    }
  });
}
me(sv, { data: {} }, [], [], !0);
const Qa = () => Yr("tinyflow_options");
var qw = /* @__PURE__ */ Me('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Uw = /* @__PURE__ */ he('<div class="input-more-item svelte-1cfeest"><!></div>'), Gw = /* @__PURE__ */ he('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Jw = /* @__PURE__ */ he('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Qw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function lv(e, t) {
  _e(t, !0), bt(e, Qw);
  const [n, r] = Ct(), o = () => le(p(u), "$node", n), a = b(t, "parameter", 7), i = b(t, "position", 7), s = b(t, "dataKeyName", 7);
  let l = Jt(), u = /* @__PURE__ */ Fe(() => eo(l)), c = /* @__PURE__ */ Fe(() => {
    var C;
    let R = (C = o()) == null ? void 0 : C.data[s()], H;
    if (R && i().length > 0) {
      let F = R;
      for (let O = 0; O < i().length; O++) {
        const I = i()[O];
        O == i().length - 1 ? H = F[I] : F = F[I].children;
      }
    }
    return { ...a(), ...H };
  });
  const { updateNodeData: d } = $n(), f = (C, R) => {
    d(l, (H) => {
      const F = H.data[s()];
      if (F && i().length > 0) {
        let O = F;
        for (let I = 0; I < i().length; I++) {
          const ne = i()[I];
          I == i().length - 1 ? O[ne] = { ...O[ne], [C]: R } : O = F[ne].children;
        }
      }
      return { [s()]: F };
    });
  }, v = (C) => {
    const R = C.target.value;
    f("name", R);
  }, m = (C) => {
    const R = C.value;
    f("dataType", R);
  };
  let $;
  const x = () => {
    d(l, (C) => {
      let R = C.data[s()];
      if (R && i().length > 0) {
        let H = R;
        for (let F = 0; F < i().length; F++) {
          const O = i()[F];
          F == i().length - 1 ? H.splice(O, 1) : H = H[O].children;
        }
      }
      return { [s()]: [...R] };
    }), $ == null || $.hide();
  }, S = () => {
    d(l, (C) => {
      let R = C.data[s()];
      if (R && i().length > 0) {
        let H = R;
        for (let F = 0; F < i().length; F++) {
          const O = i()[F];
          F == i().length - 1 ? H[O].children ? H[O].children.push({
            id: Oo(),
            name: "newParam",
            dataType: "String"
          }) : H[O].children = [
            {
              id: Oo(),
              name: "newParam",
              dataType: "String"
            }
          ] : H = H[O].children;
        }
      }
      return { [s()]: [...R] };
    });
  };
  var g = Jw(), _ = Oe(g), y = ee(_);
  {
    var k = (C) => {
      var R = wt(), H = Oe(R);
      bn(H, 17, i, za, (F, O) => {
        Ye();
        var I = at(" ");
        B(F, I);
      }), B(C, R);
    };
    ze(y, (C) => {
      i().length > 1 && C(k);
    });
  }
  var T = K(y, 2);
  const V = /* @__PURE__ */ Fe(() => p(c).nameDisabled === !0);
  tn(T, {
    style: "width: 100%;",
    get value() {
      return p(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return p(V);
    }
  }), J(_);
  var D = K(_, 2), N = ee(D);
  const A = /* @__PURE__ */ Fe(() => p(c).dataType ? [p(c).dataType] : []), j = /* @__PURE__ */ Fe(() => p(c).dataTypeDisabled === !0);
  qn(N, {
    items: ev,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return p(A);
    },
    get disabled() {
      return p(j);
    },
    onSelect: m
  });
  var Z = K(N, 2);
  {
    var X = (C) => {
      ft(C, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: S,
        children: (R, H) => {
          var F = qw();
          B(R, F);
        },
        $$slots: { default: !0 }
      });
    };
    ze(Z, (C) => {
      (p(c).dataType === "Object" || p(c).dataType === "Array") && p(c).addChildDisabled !== !0 && C(X);
    });
  }
  J(D);
  var P = K(D, 2), M = ee(P);
  gr(
    Pi(M, {
      placement: "bottom",
      floating: (C) => {
        var R = Gw(), H = ee(R), F = K(ee(H));
        pn(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const se = W.target.value;
            f("defaultValue", se);
          }
        }), J(H);
        var O = K(H, 2), I = K(ee(O));
        pn(I, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const se = W.target.value;
            f("description", se);
          }
        }), J(O);
        var ne = K(O, 2);
        {
          var Q = (W) => {
            var se = Uw(), ge = ee(se);
            ft(ge, {
              onclick: x,
              children: (ve, ue) => {
                Ye();
                var ae = at("删除");
                B(ve, ae);
              },
              $$slots: { default: !0 }
            }), J(se), B(W, se);
          };
          ze(ne, (W) => {
            p(c).deleteDisabled !== !0 && W(Q);
          });
        }
        J(R), B(C, R);
      },
      children: (C, R) => {
        Ja(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => $ = C,
    () => $
  ), J(P), B(e, g);
  var E = Ce({
    get parameter() {
      return a();
    },
    set parameter(C) {
      a(C), w();
    },
    get position() {
      return i();
    },
    set position(C) {
      i(C), w();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(C) {
      s(C), w();
    }
  });
  return r(), E;
}
me(lv, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var eb = /* @__PURE__ */ he("<!> <!>", 1), tb = /* @__PURE__ */ he('<div class="none-params svelte-1sm1mgi"> </div>'), nb = /* @__PURE__ */ he('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), rb = /* @__PURE__ */ he('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ob = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ar(e, t) {
  _e(t, !0), bt(e, ob);
  const [n, r] = Ct(), o = () => le(p(u), "$node", n), a = (x, S = jt, g = jt) => {
    var _ = wt(), y = Oe(_);
    bn(
      y,
      19,
      S,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, T, V) => {
        var D = eb(), N = Oe(D);
        const A = /* @__PURE__ */ Fe(() => [...g(), p(V)]);
        lv(N, {
          get parameter() {
            return p(T);
          },
          get position() {
            return p(A);
          },
          get dataKeyName() {
            return s();
          }
        });
        var j = K(N, 2);
        {
          var Z = (X) => {
            var P = /* @__PURE__ */ Pe(() => [...g(), p(V)]);
            a(X, () => p(T).children, () => p(P));
          };
          ze(j, (X) => {
            p(T).children && X(Z);
          });
        }
        B(k, D);
      },
      (k) => {
        var T = wt(), V = Oe(T);
        {
          var D = (N) => {
            var A = tb(), j = ee(A, !0);
            J(A), He(() => Jn(j, i())), B(N, A);
          };
          ze(V, (N) => {
            g().length === 0 && N(D);
          });
        }
        B(k, T);
      }
    ), B(x, _);
  }, i = b(t, "noneParameterText", 7, "无输出参数"), s = b(t, "dataKeyName", 7, "outputDefs");
  let l = Jt(), u = /* @__PURE__ */ Fe(() => eo(l)), c = /* @__PURE__ */ Fe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = rb(), f = ee(d);
  {
    var v = (x) => {
      var S = nb();
      Ye(4), B(x, S);
    };
    ze(f, (x) => {
      p(c).length !== 0 && x(v);
    });
  }
  var m = K(f, 2);
  a(m, () => p(c) || [], () => []), J(d), B(e, d);
  var $ = Ce({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输出参数") {
      i(x), w();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), w();
    }
  });
  return r(), $;
}
me(Ar, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ib = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ab = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ub = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uv(e, t) {
  _e(t, !0), bt(e, ub);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Qa();
  let s = yo(hn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.llm());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = $n();
  return nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ib();
        B(u, c);
      },
      children: (u, c) => {
        var d = lb(), f = Oe(d), v = ee(f);
        mt(v, {
          level: 3,
          children: (X, P) => {
            Ye();
            var M = at("输入参数");
            B(X, M);
          },
          $$slots: { default: !0 }
        });
        var m = K(v, 2);
        ft(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (X, P) => {
            var M = ab();
            B(X, M);
          },
          $$slots: { default: !0 }
        }), J(f);
        var $ = K(f, 2);
        En($, {});
        var x = K($, 2);
        mt(x, {
          level: 3,
          mt: "10px",
          children: (X, P) => {
            Ye();
            var M = at("模型设置");
            B(X, M);
          },
          $$slots: { default: !0 }
        });
        var S = K(x, 4), g = ee(S);
        const _ = /* @__PURE__ */ Fe(() => n().llmId ? [n().llmId] : []);
        qn(g, {
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
            return p(_);
          }
        });
        var y = K(g, 2);
        Ja(y, {}), J(S);
        var k = K(S, 4), T = ee(k);
        pn(T, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%"
        }), J(k);
        var V = K(k, 4), D = ee(V);
        pn(D, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%"
        }), J(V);
        var N = K(V, 2), A = ee(N);
        mt(A, {
          level: 3,
          mt: "10px",
          children: (X, P) => {
            Ye();
            var M = at("输出参数");
            B(X, M);
          },
          $$slots: { default: !0 }
        });
        var j = K(A, 2);
        ft(j, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (X, P) => {
            var M = sb();
            B(X, M);
          },
          $$slots: { default: !0 }
        }), J(N);
        var Z = K(N, 2);
        Ar(Z, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
me(uv, { data: {} }, [], [], !0);
var cb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), db = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const pb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cv(e, t) {
  _e(t, !0), bt(e, pb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = $n(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cb();
        B(l, u);
      },
      children: (l, u) => {
        var c = vb(), d = Oe(c), f = ee(d);
        mt(f, {
          level: 3,
          children: (A, j) => {
            Ye();
            var Z = at("输入参数");
            B(A, Z);
          },
          $$slots: { default: !0 }
        });
        var v = K(f, 2);
        ft(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (A, j) => {
            var Z = db();
            B(A, Z);
          },
          $$slots: { default: !0 }
        }), J(d);
        var m = K(d, 2);
        En(m, {});
        var $ = K(m, 2);
        mt($, {
          level: 3,
          mt: "10px",
          children: (A, j) => {
            Ye();
            var Z = at("代码");
            B(A, Z);
          },
          $$slots: { default: !0 }
        });
        var x = K($, 4), S = ee(x);
        const g = /* @__PURE__ */ Fe(() => n().engine ? [n().engine] : ["qlexpress"]);
        qn(S, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (A) => {
            const j = A.value;
            i(o, () => ({ engine: j }));
          },
          get value() {
            return p(g);
          }
        }), J(x);
        var _ = K(x, 4), y = ee(_);
        const k = /* @__PURE__ */ Fe(() => n().code || "");
        pn(y, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (A) => {
            i(o, () => ({ code: A.target.value }));
          },
          get value() {
            return p(k);
          }
        }), J(_);
        var T = K(_, 2), V = ee(T);
        mt(V, {
          level: 3,
          mt: "10px",
          children: (A, j) => {
            Ye();
            var Z = at("输出参数");
            B(A, Z);
          },
          $$slots: { default: !0 }
        });
        var D = K(V, 2);
        ft(D, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (A, j) => {
            var Z = fb();
            B(A, Z);
          },
          $$slots: { default: !0 }
        }), J(T);
        var N = K(T, 2);
        Ar(N, {}), B(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), w();
    }
  });
}
me(cv, { data: {} }, [], [], !0);
var gb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), hb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const yb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function dv(e, t) {
  _e(t, !0), bt(e, yb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = $n();
  return wo(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = gb();
        B(s, l);
      },
      children: (s, l) => {
        var u = mb(), c = Oe(u), d = ee(c);
        mt(d, {
          level: 3,
          children: (k, T) => {
            Ye();
            var V = at("输入参数");
            B(k, V);
          },
          $$slots: { default: !0 }
        });
        var f = K(d, 2);
        ft(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (k, T) => {
            var V = hb();
            B(k, V);
          },
          $$slots: { default: !0 }
        }), J(c);
        var v = K(c, 2);
        En(v, {});
        var m = K(v, 2);
        mt(m, {
          level: 3,
          mt: "10px",
          children: (k, T) => {
            Ye();
            var V = at("代码");
            B(k, V);
          },
          $$slots: { default: !0 }
        });
        var $ = K(m, 4), x = ee($);
        const S = /* @__PURE__ */ Fe(() => n().template || "");
        pn(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            i(o, () => ({ template: k.target.value }));
          },
          get value() {
            return p(S);
          }
        }), J($);
        var g = K($, 2), _ = ee(g);
        mt(_, {
          level: 3,
          mt: "10px",
          children: (k, T) => {
            Ye();
            var V = at("输出参数");
            B(k, V);
          },
          $$slots: { default: !0 }
        }), J(g);
        var y = K(g, 2);
        Ar(y, {}), B(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), w();
    }
  });
}
me(dv, { data: {} }, [], [], !0);
var wb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), bb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $b = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _b = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Cb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kb = /* @__PURE__ */ he('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Eb = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), Sb = /* @__PURE__ */ he('<div style="width: 100%"><!></div>'), Pb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tb = /* @__PURE__ */ he('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Ob = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function fv(e, t) {
  _e(t, !0), bt(e, Ob);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), { updateNodeData: i } = $n();
  return nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = wb();
        B(s, l);
      },
      children: (s, l) => {
        var u = Tb(), c = Oe(u), d = ee(c), f = ee(d);
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
        }), J(d);
        var v = K(d, 2), m = ee(v);
        tn(m, { placeholder: "请输入url", style: "width: 100%" }), J(v), J(c);
        var $ = K(c, 2), x = ee($);
        mt(x, {
          level: 3,
          children: (U, ye) => {
            Ye();
            var ke = at("Http 头信息");
            B(U, ke);
          },
          $$slots: { default: !0 }
        });
        var S = K(x, 2);
        ft(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (U, ye) => {
            var ke = bb();
            B(U, ke);
          },
          $$slots: { default: !0 }
        }), J($);
        var g = K($, 2);
        En(g, { dataKeyName: "headers" });
        var _ = K(g, 2), y = ee(_);
        mt(y, {
          level: 3,
          children: (U, ye) => {
            Ye();
            var ke = at("参数");
            B(U, ke);
          },
          $$slots: { default: !0 }
        });
        var k = K(y, 2);
        ft(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (U, ye) => {
            var ke = xb();
            B(U, ke);
          },
          $$slots: { default: !0 }
        }), J(_);
        var T = K(_, 2);
        En(T, { dataKeyName: "urlParameters" });
        var V = K(T, 2);
        mt(V, {
          level: 3,
          mt: "10px",
          children: (U, ye) => {
            Ye();
            var ke = at("Body");
            B(U, ke);
          },
          $$slots: { default: !0 }
        });
        var D = K(V, 2), N = ee(D), A = ee(N);
        const j = /* @__PURE__ */ Fe(() => !n().bodyType);
        tn(A, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return p(j);
          },
          onchange: (U) => {
            var ye;
            (ye = U.target) != null && ye.checked && i(o, { bodyType: "" });
          }
        }), Ye(), J(N);
        var Z = K(N, 2), X = ee(Z);
        const P = /* @__PURE__ */ Fe(() => n().bodyType === "form-data");
        tn(X, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return p(P);
          },
          onchange: (U) => {
            var ye;
            (ye = U.target) != null && ye.checked && i(o, { bodyType: "form-data" });
          }
        }), Ye(), J(Z);
        var M = K(Z, 2), E = ee(M);
        const C = /* @__PURE__ */ Fe(() => n().bodyType === "x-www-form-urlencoded");
        tn(E, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return p(C);
          },
          onchange: (U) => {
            var ye;
            (ye = U.target) != null && ye.checked && i(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ye(), J(M);
        var R = K(M, 2), H = ee(R);
        const F = /* @__PURE__ */ Fe(() => n().bodyType === "json");
        tn(H, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return p(F);
          },
          onchange: (U) => {
            var ye;
            (ye = U.target) != null && ye.checked && i(o, { bodyType: "json" });
          }
        }), Ye(), J(R);
        var O = K(R, 2), I = ee(O);
        const ne = /* @__PURE__ */ Fe(() => n().bodyType === "raw");
        tn(I, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return p(ne);
          },
          onchange: (U) => {
            var ye;
            (ye = U.target) != null && ye.checked && i(o, { bodyType: "raw" });
          }
        }), Ye(), J(O), J(D);
        var Q = K(D, 2);
        {
          var W = (U) => {
            var ye = _b(), ke = Oe(ye), De = ee(ke);
            mt(De, {
              level: 3,
              children: (tt, it) => {
                Ye();
                var vt = at("参数");
                B(tt, vt);
              },
              $$slots: { default: !0 }
            });
            var st = K(De, 2);
            ft(st, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromData");
              },
              children: (tt, it) => {
                var vt = $b();
                B(tt, vt);
              },
              $$slots: { default: !0 }
            }), J(ke);
            var Ie = K(ke, 2);
            En(Ie, { dataKeyName: "fromData" }), B(U, ye);
          };
          ze(Q, (U) => {
            n().bodyType === "form-data" && U(W);
          });
        }
        var se = K(Q, 2);
        {
          var ge = (U) => {
            var ye = kb(), ke = Oe(ye), De = ee(ke);
            mt(De, {
              level: 3,
              children: (tt, it) => {
                Ye();
                var vt = at("参数");
                B(tt, vt);
              },
              $$slots: { default: !0 }
            });
            var st = K(De, 2);
            ft(st, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromUrlencoded");
              },
              children: (tt, it) => {
                var vt = Cb();
                B(tt, vt);
              },
              $$slots: { default: !0 }
            }), J(ke);
            var Ie = K(ke, 2);
            En(Ie, { dataKeyName: "fromUrlencoded" }), B(U, ye);
          };
          ze(se, (U) => {
            n().bodyType === "x-www-form-urlencoded" && U(ge);
          });
        }
        var ve = K(se, 2);
        {
          var ue = (U) => {
            var ye = Eb(), ke = ee(ye);
            pn(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (De) => {
                i(o, { bodyJson: De.target.value });
              }
            }), J(ye), B(U, ye);
          };
          ze(ve, (U) => {
            n().bodyType === "json" && U(ue);
          });
        }
        var ae = K(ve, 2);
        {
          var we = (U) => {
            var ye = Sb(), ke = ee(ye);
            pn(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (De) => {
                i(o, { bodyRaw: De.target.value });
              }
            }), J(ye), B(U, ye);
          };
          ze(ae, (U) => {
            n().bodyType === "raw" && U(we);
          });
        }
        var Ke = K(ae, 2), nt = ee(Ke);
        mt(nt, {
          level: 3,
          mt: "10px",
          children: (U, ye) => {
            Ye();
            var ke = at("输出参数");
            B(U, ke);
          },
          $$slots: { default: !0 }
        });
        var Qe = K(nt, 2);
        ft(Qe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (U, ye) => {
            var ke = Pb();
            B(U, ke);
          },
          $$slots: { default: !0 }
        }), J(Ke);
        var et = K(Ke, 2);
        Ar(et, {}), B(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), w();
    }
  });
}
me(fv, { data: {} }, [], [], !0);
var Mb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Db = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Nb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vv(e, t) {
  _e(t, !0), bt(e, Nb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Qa();
  let s = yo(hn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = $n();
  return wo(() => {
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
  }), nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Mb();
        B(u, c);
      },
      children: (u, c) => {
        var d = Vb(), f = Oe(d), v = ee(f);
        mt(v, {
          level: 3,
          children: (N, A) => {
            Ye();
            var j = at("输入参数");
            B(N, j);
          },
          $$slots: { default: !0 }
        });
        var m = K(v, 2);
        ft(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, A) => {
            var j = Db();
            B(N, j);
          },
          $$slots: { default: !0 }
        }), J(f);
        var $ = K(f, 2);
        En($, {});
        var x = K($, 2);
        mt(x, {
          level: 3,
          mt: "10px",
          children: (N, A) => {
            Ye();
            var j = at("知识库设置");
            B(N, j);
          },
          $$slots: { default: !0 }
        });
        var S = K(x, 4), g = ee(S);
        const _ = /* @__PURE__ */ Fe(() => n().knowledgeId ? [n().knowledgeId] : []);
        qn(g, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (N) => {
            const A = N.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return p(_);
          }
        }), J(S);
        var y = K(S, 4), k = ee(y);
        tn(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), J(y);
        var T = K(y, 2), V = ee(T);
        mt(V, {
          level: 3,
          mt: "10px",
          children: (N, A) => {
            Ye();
            var j = at("输出参数");
            B(N, j);
          },
          $$slots: { default: !0 }
        }), J(T);
        var D = K(T, 2);
        Ar(D, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
me(vv, { data: {} }, [], [], !0);
var Rb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Lb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zb = /* @__PURE__ */ he('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ab = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function pv(e, t) {
  _e(t, !0), bt(e, Ab);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Qa();
  let s = yo(hn([]));
  er(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    p(s).push(...c || []);
  });
  const { updateNodeData: l } = $n();
  return wo(() => {
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
  }), nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Rb();
        B(u, c);
      },
      children: (u, c) => {
        var d = zb(), f = Oe(d), v = ee(f);
        mt(v, {
          level: 3,
          children: (M, E) => {
            Ye();
            var C = at("输入参数");
            B(M, C);
          },
          $$slots: { default: !0 }
        });
        var m = K(v, 2);
        ft(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (M, E) => {
            var C = Lb();
            B(M, C);
          },
          $$slots: { default: !0 }
        }), J(f);
        var $ = K(f, 2);
        En($, {});
        var x = K($, 2);
        mt(x, {
          level: 3,
          mt: "10px",
          children: (M, E) => {
            Ye();
            var C = at("搜索引擎设置");
            B(M, C);
          },
          $$slots: { default: !0 }
        });
        var S = K(x, 4), g = ee(S);
        const _ = /* @__PURE__ */ Fe(() => n().knowledgeId ? [n().knowledgeId] : []);
        qn(g, {
          get items() {
            return p(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (M) => {
            const E = M.value;
            l(o, () => ({ knowledgeId: E }));
          },
          get value() {
            return p(_);
          }
        }), J(S);
        var y = K(S, 4), k = ee(y);
        tn(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), J(y);
        var T = K(y, 4), V = ee(T);
        tn(V, { placeholder: "请输入关键字", style: "width: 100%" }), J(T);
        var D = K(T, 4), N = ee(D);
        tn(N, { placeholder: "搜索的数据条数", style: "width: 100%" }), J(D);
        var A = K(D, 4), j = ee(A);
        pn(j, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), J(A);
        var Z = K(A, 2), X = ee(Z);
        mt(X, {
          level: 3,
          mt: "10px",
          children: (M, E) => {
            Ye();
            var C = at("输出参数");
            B(M, C);
          },
          $$slots: { default: !0 }
        }), J(Z);
        var P = K(Z, 2);
        Ar(P, {}), B(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), w();
    }
  });
}
me(pv, { data: {} }, [], [], !0);
var Hb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ib = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bb = /* @__PURE__ */ he('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const jb = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gv(e, t) {
  _e(t, !0), bt(e, jb);
  const n = b(t, "data", 7), r = /* @__PURE__ */ on(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Jt(), { addParameter: a } = br(), i = Qa();
  let s = yo(hn([]));
  return er(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    p(s).push(...u || []);
  }), nr(e, Bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Hb();
        B(l, u);
      },
      handle: (l) => {
        Rr(l, {
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
        var c = Bb(), d = Oe(c), f = ee(d);
        mt(f, {
          level: 3,
          children: (g, _) => {
            Ye();
            var y = at("循环变量");
            B(g, y);
          },
          $$slots: { default: !0 }
        });
        var v = K(f, 2);
        ft(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (g, _) => {
            var y = Ib();
            B(g, y);
          },
          $$slots: { default: !0 }
        }), J(d);
        var m = K(d, 2);
        En(m, {});
        var $ = K(m, 2), x = ee($);
        mt(x, {
          level: 3,
          mt: "10px",
          children: (g, _) => {
            Ye();
            var y = at("输出参数");
            B(g, y);
          },
          $$slots: { default: !0 }
        }), J($);
        var S = K($, 2);
        Ar(S, {}), B(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), Ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), w();
    }
  });
}
me(gv, { data: {} }, [], [], !0);
const Zb = {
  startNode: ov,
  codeNode: cv,
  llmNode: uv,
  templateNode: dv,
  httpNode: fv,
  knowledgeNode: vv,
  searchEngineNode: pv,
  loopNode: gv,
  endNode: sv
};
var Yb = /* @__PURE__ */ he("<!> ", 1);
function hv(e, t) {
  _e(t, !0);
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
          extra: i()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Yb(), c = Oe(u);
      Fc(c, n);
      var d = K(c);
      He(() => Jn(d, ` ${r() ?? ""}`)), B(s, u);
    },
    $$slots: { default: !0 }
  }), Ce({
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
me(
  hv,
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
var Wb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Xb = /* @__PURE__ */ Me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Fb = /* @__PURE__ */ he('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function mv(e) {
  let t = yo("base"), n = yo("show");
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
  var a = Fb(), i = ee(a), s = ee(i), l = ee(s);
  If(l, {
    style: "width: 100%",
    items: o,
    onChange: (m) => {
      ie(t, hn(m.value.toString()));
    }
  }), J(s);
  var u = K(s, 2), c = ee(u);
  bn(c, 21, () => r, za, (m, $) => {
    hv(m, Bt(() => p($)));
  }), J(c);
  var d = K(c, 2), f = ee(d);
  ft(f, {
    children: (m, $) => {
      Ye();
      var x = at("测试业务按钮");
      B(m, x);
    },
    $$slots: { default: !0 }
  }), J(d), J(u), J(i);
  var v = K(i, 2);
  ft(v, {
    onclick: () => {
      ie(n, hn(p(n) ? "" : "show"));
    },
    children: (m, $) => {
      var x = wt(), S = Oe(x);
      {
        var g = (y) => {
          var k = Wb();
          B(y, k);
        }, _ = (y) => {
          var k = Xb();
          B(y, k);
        };
        ze(S, (y) => {
          p(n) === "show" ? y(g) : y(_, !1);
        });
      }
      B(m, x);
    },
    $$slots: { default: !0 }
  }), J(a), He(() => {
    $o(a, `tf-toolbar ${p(n) ?? ""}`), xe(c, "style", `display: ${(p(t) === "base" ? "flex" : "none") ?? ""}`), xe(d, "style", `display: ${(p(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), B(e, a);
}
me(mv, {}, [], [], !0);
var Kb = /* @__PURE__ */ he("<!> <!> <!>", 1), qb = /* @__PURE__ */ he('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
function yv(e, t) {
  _e(t, !0);
  const n = b(t, "onInit", 7), r = $n();
  n()(r);
  const o = (c) => {
    c.preventDefault(), c.dataTransfer && (c.dataTransfer.dropEffect = "move");
  }, a = (c) => {
    var d;
    c.preventDefault();
    const f = r.screenToFlowPosition({
      x: c.clientX - 250,
      y: c.clientY - 100
    }), v = (d = c.dataTransfer) == null ? void 0 : d.getData("application/tinyflow"), m = v ? JSON.parse(v) : {}, $ = {
      id: `node_${Oo()}`,
      position: f,
      data: {},
      ...m
    };
    ea.addNode($), ea.selectNodeOnly($.id);
  };
  var i = qb(), s = ee(i);
  mv(s);
  var l = K(s, 2);
  const u = /* @__PURE__ */ Fe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ci.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return kf(l, Bt({ nodeTypes: Zb }, ea, {
    class: "tinyflow-logo",
    get defaultEdgeOptions() {
      return p(u);
    },
    $$events: { drop: a, dragover: o },
    children: (c, d) => {
      var f = Kb(), v = Oe(f);
      Rf(v, {});
      var m = K(v, 2);
      Df(m, {});
      var $ = K(m, 2);
      zf($, {}), B(c, f);
    },
    $$slots: { default: !0 }
  })), J(i), B(e, i), Ce({
    get onInit() {
      return n();
    },
    set onInit(c) {
      n(c), w();
    }
  });
}
me(yv, { onInit: {} }, [], [], !0);
function Ub(e, t) {
  _e(t, !0);
  const n = b(t, "options", 7), r = b(t, "onInit", 7), { data: o } = n();
  return ea.init(o.nodes || [], o.edges || []), xo("tinyflow_options", n()), Ef(e, {
    fitView: !0,
    children: (a, i) => {
      yv(a, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), Ce({
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
customElements.define("tinyflow-component", me(Ub, { options: {}, onInit: {} }, [], [], !1));
Yo.forwardRef(({ data: e, style: t, className: n }, r) => {
  const o = Yo.useRef(null), a = Yo.useRef(null);
  return Yo.useImperativeHandle(r, () => ({
    getData: () => a.current ? a.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  })), Yo.useEffect(() => {
    if (o.current) {
      const i = new l2({
        element: o.current,
        data: e
      });
      return a.current = i, () => {
        i.destroy(), a.current = null;
      };
    }
  }, [e]), /* @__PURE__ */ Wv.jsx("div", { ref: o, style: { height: "600px", ...t }, className: n });
});
//# sourceMappingURL=index.js.map
